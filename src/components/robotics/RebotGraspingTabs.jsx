import React, {useEffect, useRef} from 'react';
import Tabs from '@theme/Tabs';
import {useLocation} from '@docusaurus/router';
import useIsBrowser from '@docusaurus/useIsBrowser';
import styles from './rebot-grasping-demo.module.css';

const tutorialPanelSelector = ':scope > .tabs-container > .margin-top--md > [role="tabpanel"]';
const tutorialTabSelector = ':scope > .tabs-container > [role="tablist"] > [role="tab"]';

// Keep the standard Wiki tabs, including keyboard controls and URL selection.
// TOC links and bookmarked headings also reveal their containing tutorial.
export default function GraspingTabs({children}) {
  const root = useRef(null);
  const {hash} = useLocation();
  const isBrowser = useIsBrowser();

  useEffect(() => {
    if (!isBrowser || !root.current) return undefined;
    const container = root.current;
    const layout = container.closest('.row');
    if (!layout) return undefined;
    const originalVisibility = new Map();
    const originalAnchors = new Map();

    const syncTOC = () => {
      let changed = false;
      // The theme's scroll highlighter uses .anchor headings. Exclude headings
      // in the inactive tutorial while retaining their IDs for bookmarked links.
      const panels = [...container.querySelectorAll(tutorialPanelSelector)];
      panels.forEach((panel) => {
        panel.querySelectorAll('h2[id], h3[id], h4[id], h5[id], h6[id]').forEach((heading) => {
          if (!originalAnchors.has(heading)) originalAnchors.set(heading, heading.classList.contains('anchor'));
          if (!originalAnchors.get(heading)) return;
          const shouldHighlight = !panel.hidden;
          if (heading.classList.contains('anchor') !== shouldHighlight) {
            heading.classList.toggle('anchor', shouldHighlight);
            changed = true;
          }
        });
      });
      layout.querySelectorAll('.theme-doc-toc-desktop a[href], .theme-doc-toc-mobile a[href]').forEach((link) => {
        let target;
        try {
          target = document.getElementById(decodeURIComponent(new URL(link.href).hash.slice(1)));
        } catch {
          return;
        }
        if (!target || !container.contains(target)) return;
        const panel = panels.find((candidate) => candidate.contains(target));
        const item = link.closest('li');
        if (!panel || !item) return;
        if (!originalVisibility.has(item)) originalVisibility.set(item, item.hidden);
        if (item.hidden !== panel.hidden) {
          item.hidden = panel.hidden;
          changed = true;
        }
      });
      if (changed) document.dispatchEvent(new Event('scroll'));
    };

    // Also watch newly mounted TOCs: the mobile menu renders its entries lazily,
    // and resizing can replace the desktop TOC with the mobile version.
    const observer = new MutationObserver(syncTOC);
    observer.observe(layout, {subtree: true, childList: true, attributes: true, attributeFilter: ['hidden']});
    syncTOC();
    return () => {
      observer.disconnect();
      originalVisibility.forEach((hidden, item) => { item.hidden = hidden; });
      originalAnchors.forEach((wasAnchor, heading) => { heading.classList.toggle('anchor', wasAnchor); });
    };
  }, [isBrowser]);

  useEffect(() => {
    if (!isBrowser) return undefined;
    let frame;
    const revealHeading = (fragment) => {
      cancelAnimationFrame(frame);
      let id;
      try {
        id = decodeURIComponent(fragment.slice(1));
      } catch {
        return;
      }
      const target = document.getElementById(id);
      if (!target || !root.current?.contains(target)) return;
      const panels = [...root.current.querySelectorAll(tutorialPanelSelector)];
      const panel = panels.find((candidate) => candidate.contains(target));
      if (!panel?.hidden) return;
      root.current.querySelectorAll(tutorialTabSelector)[panels.indexOf(panel)]?.click();
      let attempts = 0;
      const scrollWhenVisible = () => {
        if (!panel.hidden) target.scrollIntoView({block: 'start'});
        else if (++attempts < 10) frame = requestAnimationFrame(scrollWhenVisible);
      };
      frame = requestAnimationFrame(scrollWhenVisible);
    };
    const onAnchorClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target.closest?.('a[href]');
      if (!anchor || anchor.target === '_blank') return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin === window.location.origin && url.pathname === window.location.pathname && url.hash) revealHeading(url.hash);
    };
    revealHeading(hash);
    document.addEventListener('click', onAnchorClick);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('click', onAnchorClick);
    };
  }, [hash, isBrowser]);

  return (
    <div ref={root} className={styles.tutorials}>
      <Tabs defaultValue="python-sdk" queryString="grasping" block>
        {children}
      </Tabs>
    </div>
  );
}
