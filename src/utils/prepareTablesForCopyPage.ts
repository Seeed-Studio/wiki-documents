const PREPARED_ATTRIBUTE = 'data-copy-page-prepared';
const BLOCK_WRAPPERS = 'div, p, section, article';

function isBoundaryWhitespace(node: ChildNode): boolean {
  return (node.nodeType === 3 && !node.textContent?.trim()) || node.nodeName === 'BR';
}

function insertAtCellBoundary(cell: HTMLElement, helper: HTMLElement, atStart = false): void {
  // Keep the block newlines/BRs that the converter trims at the cell boundary
  // outside our tokens, rather than exposing them as internal table row breaks.
  let target = cell;
  let node = atStart ? target.firstChild : target.lastChild;
  while (node) {
    if (isBoundaryWhitespace(node)) {
      node = atStart ? node.nextSibling : node.previousSibling;
    } else if (node instanceof HTMLElement && node.matches(BLOCK_WRAPPERS)) {
      target = node;
      node = atStart ? target.firstChild : target.lastChild;
    } else {
      break;
    }
  }
  target.insertBefore(helper, atStart ? node : node ? node.nextSibling : target.firstChild);
}

/**
 * Add invisible Markdown tokens for copy-page-button 0.8.x, which walks every
 * childNode (including display:none) but does not understand table spans.
 * Keep the visible rows/cells and their spans in place, including nth-child CSS.
 */
export default function prepareTablesForCopyPage(article: HTMLElement): void {
  article.querySelectorAll('table').forEach((table) => {
    if (table.hasAttribute(PREPARED_ATTRIBUTE)) {
      return;
    }

    const rows = Array.from(table.rows);
    const cellsByRow = rows.map((row) => Array.from(row.cells));
    const grid: (HTMLTableCellElement | undefined)[][] = rows.map(() => []);
    const starts = new Map<HTMLTableCellElement, number>();
    const contents = new Map<HTMLTableCellElement, DocumentFragment>();
    const doc = table.ownerDocument;

    rows.forEach((row, rowIndex) => {
      let column = 0;
      let groupEnd = rowIndex + 1;
      while (groupEnd < rows.length && rows[groupEnd].parentElement === row.parentElement) {
        groupEnd++;
      }

      cellsByRow[rowIndex].forEach((cell) => {
        // Find a free run, not just a free first slot, when spans intersect.
        while (grid[rowIndex].slice(column, column + cell.colSpan).some(Boolean)) {
          column++;
        }
        starts.set(cell, column);
        const rowEnd = cell.rowSpan === 0
          ? groupEnd
          : Math.min(groupEnd, rowIndex + cell.rowSpan);
        for (let r = rowIndex; r < rowEnd; r++) {
          for (let c = column; c < column + cell.colSpan; c++) {
            grid[r][c] = cell;
          }
        }
        column += cell.colSpan;

        // Snapshot before inserting helpers so copies cannot copy other helpers.
        const fragment = doc.createDocumentFragment();
        cell.childNodes.forEach((child) => fragment.appendChild(child.cloneNode(true)));
        fragment.querySelectorAll('[id]').forEach((element) => element.removeAttribute('id'));
        // Repeated slots must be inline; retain links/emphasis/images, but not
        // the block wrappers that the plugin converts to extra row breaks.
        fragment.querySelectorAll(BLOCK_WRAPPERS).forEach((element) => {
          element.replaceWith(...Array.from(element.childNodes));
        });
        while (fragment.firstChild && isBoundaryWhitespace(fragment.firstChild)) {
          fragment.firstChild.remove();
        }
        while (fragment.lastChild && isBoundaryWhitespace(fragment.lastChild)) {
          fragment.lastChild.remove();
        }
        contents.set(cell, fragment);
      });
    });

    const width = grid.reduce((max, row) => Math.max(max, row.length), 0);
    if (!width) {
      return;
    }

    const helper = (tag: 'span' | 'td' = 'span') => {
      const element = doc.createElement(tag);
      element.setAttribute('data-copy-page-helper', 'true');
      element.setAttribute('aria-hidden', 'true');
      element.style.display = 'none';
      return element;
    };
    const copySlot = (target: HTMLElement, cell: HTMLTableCellElement | undefined) => {
      if (cell) {
        target.appendChild(contents.get(cell)!.cloneNode(true));
      }
    };

    rows.forEach((row, rowIndex) => {
      const cells = cellsByRow[rowIndex];
      let column = 0;
      cells.forEach((cell) => {
        const start = starts.get(cell)!;
        if (column < start) {
          const prefix = helper();
          for (; column < start; column++) {
            copySlot(prefix, grid[rowIndex][column]);
            prefix.append(' | ');
          }
          insertAtCellBoundary(cell, prefix, true);
        }
        column = start + 1;
        if (cell.colSpan > 1) {
          const suffix = helper();
          for (; column < start + cell.colSpan; column++) {
            suffix.append(' | ');
            copySlot(suffix, grid[rowIndex][column]);
          }
          insertAtCellBoundary(cell, suffix);
        }
      });

      // An empty physical row may still contain slots occupied by rowspan.
      const lastCell = cells[cells.length - 1] || row.appendChild(helper('td'));
      const ending = helper();
      for (; column < width; column++) {
        if (column > 0) {
          ending.append(' | ');
        }
        copySlot(ending, grid[rowIndex][column]);
      }
      ending.append(' |');
      if (rowIndex === 0) {
        // A helper <tr> would change Infima's zebra striping. Emit the separator
        // inside the last cell instead; <br> is converted to a Markdown newline.
        ending.append(doc.createElement('br'), `| ${Array(width).fill('---').join(' | ')} |`);
      }
      insertAtCellBoundary(lastCell, ending);
    });

    table.setAttribute(PREPARED_ATTRIBUTE, 'true');
  });
}
