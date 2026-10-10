import React, {useContext, useState} from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import DocSidebarVisibilityContext from './DocSidebarVisibilityContext';
import styles from './rebot-doc-rail.module.css';

const HOME_LABELS = {
  en: 'Robotics home',
  cn: '机器人首页',
  ja: 'ロボットホーム',
  es: 'Inicio de robótica',
  'pt-br': 'Início de robótica',
};

function Rail({items, series, ariaLabel, locale, pathname}) {
  const [previewSlug, setPreviewSlug] = useState(null);
  const current = pathname.replace(/\/+$/, '');

  return (
    <div className={styles.rail}>
      <Link
        to="/robotics_page/"
        className={styles.home}
        aria-label={HOME_LABELS[locale] || HOME_LABELS.en}
        title={HOME_LABELS[locale] || HOME_LABELS.en}
        data-rebot-home="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="m3 10 9-7 9 7M5 9v12h14V9M9 21v-7h6v7" />
        </svg>
      </Link>
      <nav className={styles.ticks} aria-label={ariaLabel} data-rebot-doc-rail="true">
        {items.map((item, index) => {
          const label = item.labels[locale] || item.labels.en;
          const hints = (item.hints && (item.hints[locale] || item.hints.en)) || [];
          const active = current.endsWith(item.slug.replace(/\/+$/, ''));

          return (
            <Link
              key={item.slug}
              to={item.slug}
              className={styles.item}
              aria-label={hints.length ? `${label} — ${hints.join(' / ')}` : label}
              aria-current={active ? 'page' : undefined}
              data-major={index % 3 === 0 ? 'true' : undefined}
              data-preview={previewSlug === item.slug ? 'true' : undefined}
              onPointerEnter={(event) => {
                if (event.pointerType !== 'touch') setPreviewSlug(item.slug);
              }}
              onPointerLeave={() => setPreviewSlug(null)}
              onFocus={() => setPreviewSlug(item.slug)}
              onBlur={() => setPreviewSlug(null)}
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  event.preventDefault();
                  setPreviewSlug(null);
                }
              }}>
              <span className={styles.tick} aria-hidden="true" />
              <span className={styles.preview} aria-hidden="true">
                <span className={styles.series}>{series}</span>
                <span className={styles.title}>{label}</span>
                {hints.length ? <span className={styles.hints}>{hints.join(' · ')}</span> : null}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default function RebotDocRail({items, series, ariaLabels}) {
  const collapsed = useContext(DocSidebarVisibilityContext);
  const {pathname} = useLocation();
  const {i18n} = useDocusaurusContext();
  const locale = i18n.currentLocale || 'en';

  if (!collapsed) return null;

  return (
    <Rail
      key={pathname}
      items={items}
      series={series}
      locale={locale}
      pathname={pathname}
      ariaLabel={ariaLabels[locale] || ariaLabels.en}
    />
  );
}
