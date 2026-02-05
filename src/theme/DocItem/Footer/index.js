import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import TagsListInline from '@theme/TagsListInline';
import EditMetaRow from '@theme/EditMetaRow';

function parseFrontmatterDateToEpochMs(input) {
  if (!input || typeof input !== 'string') return undefined;
  const s = input.trim();
  if (!s) return undefined;

  // MM/DD/YYYY（你们现在的格式：05/29/2025）
  let m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (m) {
    const mm = Number(m[1]);
    const dd = Number(m[2]);
    const yyyy = Number(m[3]);
    if (mm >= 1 && mm <= 12 && dd >= 1 && dd <= 31) {
      // 用 UTC，避免时区导致日期偏移
      return Date.UTC(yyyy, mm - 1, dd);
    }
  }

  // YYYY-MM-DD 或 YYYY/MM/DD（兼容未来可能的格式）
  m = s.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);
  if (m) {
    const yyyy = Number(m[1]);
    const mm = Number(m[2]);
    const dd = Number(m[3]);
    if (mm >= 1 && mm <= 12 && dd >= 1 && dd <= 31) {
      return Date.UTC(yyyy, mm - 1, dd);
    }
  }

  // fallback：能解析就用（不保证所有格式都可靠）
  const t = Date.parse(s);
  return Number.isFinite(t) ? t : undefined;
}

export default function DocItemFooter() {
  const {metadata, frontMatter} = useDoc();
  const {editUrl, tags} = metadata;

  // ✅ 从 frontmatter.last_update 取作者/日期（完全绕过 git）
  const lu = frontMatter && frontMatter.last_update;
  const fmLastUpdatedBy =
    lu && typeof lu.author === 'string' && lu.author.trim()
      ? lu.author.trim()
      : undefined;

  const fmLastUpdatedAt =
    lu && typeof lu.date === 'string'
      ? parseFrontmatterDateToEpochMs(lu.date)
      : undefined;

  const canDisplayTagsRow = tags.length > 0;

  // ✅ 用 frontmatter 的 last_update 决定是否显示 EditMetaRow
  const canDisplayEditMetaRow = !!(editUrl || fmLastUpdatedAt || fmLastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;

  if (!canDisplayFooter) {
    return null;
  }

  return (
    <footer className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
      {canDisplayTagsRow && (
        <div
          className={clsx(
            'row margin-top--sm',
            ThemeClassNames.docs.docFooterTagsRow,
          )}>
          <div className="col">
            <TagsListInline tags={tags} />
          </div>
        </div>
      )}

      {canDisplayEditMetaRow && (
        <EditMetaRow
          className={clsx(
            'margin-top--sm',
            ThemeClassNames.docs.docFooterEditMetaRow,
          )}
          editUrl={editUrl}
          lastUpdatedAt={fmLastUpdatedAt}
          lastUpdatedBy={fmLastUpdatedBy}
        />
      )}
    </footer>
  );
}