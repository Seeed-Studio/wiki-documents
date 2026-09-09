import React from 'react';
import clsx from 'clsx';
import { useLocation } from '@docusaurus/router';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './index.module.scss';
import { j601DemoList } from './config.auto';

type Lang = 'en' | 'zh' | 'ja' | 'es' | 'pt';

type LocaleString = Partial<Record<Lang, string>>;
type LocaleCategory = Partial<Record<Lang, string[]>>;

type J601Demo = {
  name: LocaleString;
  description?: LocaleString;
  img: string;
  URL: LocaleString;
  category?: LocaleCategory;
};

const getLangFromPath = (pathname?: string): Lang => {
  const path = (pathname || '').toLowerCase();

  if (path === '/cn' || path.startsWith('/cn/')) return 'zh';
  if (path === '/ja' || path.startsWith('/ja/')) return 'ja';
  if (path === '/es' || path.startsWith('/es/')) return 'es';
  if (path === '/pt-br' || path.startsWith('/pt-br/')) return 'pt';

  return 'en';
};

const getLocaleValue = <T,>(
  obj: Partial<Record<Lang, T>> | undefined,
  lang: Lang,
  fallback?: T
): T | undefined => {
  if (!obj) return fallback;
  return obj[lang] ?? obj.en ?? fallback;
};

export default function J601DemoGrid(): React.ReactElement | null {
  const location = useLocation();
  const { colorMode } = useColorMode();
  const resolvedLang = getLangFromPath(location.pathname);
  const demos = (j601DemoList || []) as J601Demo[];

  if (!demos.length) {
    return null;
  }

  return (
    <div className={clsx(styles.jetson_page, styles.j601_demo_embed, styles[colorMode])}>
      <div className={styles.project_grid}>
        {demos.map((project) => {
          const url = getLocaleValue(project.URL, resolvedLang, project.URL?.en || '#');
          const name = getLocaleValue(project.name, resolvedLang, project.name?.en || '');
          const description = getLocaleValue(
            project.description,
            resolvedLang,
            project.description?.en || ''
          );
          const category = getLocaleValue(project.category, resolvedLang, project.category?.en || [])?.[0];

          return (
            <a key={url} href={url} className={styles.project_card}>
              <div className={styles.project_image}>
                <img src={project.img} alt={name} loading="lazy" />
              </div>
              <div className={styles.project_content}>
                {category ? <span className={styles.project_category}>{category}</span> : null}
                <h3 className={styles.project_title}>{name}</h3>
                {description ? <p className={styles.project_description}>{description}</p> : null}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
