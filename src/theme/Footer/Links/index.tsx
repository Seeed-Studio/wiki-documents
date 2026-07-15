import React from 'react';
import OriginalFooterLinks from '@theme-original/Footer/Links';
import {useLocation} from '@docusaurus/router';

// 为避免相对路径问题，这里内联一个最小的语言检测
type Locale = 'en' | 'cn' | 'ja' | 'es';
function detectLocaleFromPath(pathname: string): Locale {
  if (pathname === '/cn' || pathname.startsWith('/cn/')) return 'cn';
  if (pathname === '/ja' || pathname.startsWith('/ja/')) return 'ja';
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es';
  return 'en';
}

// 页脚列标题翻译（命中才替换，没命中保持原文）
const FOOTER_TITLE_I18N: Record<Locale, Record<string, string>> = {
  en: {
    Navigation: 'Navigation',
    Ecosystem: 'Ecosystem',
    'Quick Guide': 'Quick Guide',
    Company: 'Company',
  },
  cn: {
    Navigation: '导航',
    Ecosystem: '生态',
    'Quick Guide': '快速指引',
    Company: '公司',
  },
  ja: {
    Navigation: 'ナビゲーション',
    Ecosystem: 'エコシステム',
    'Quick Guide': 'クイックガイド',
    Company: '会社情報',
  },
  es: {
    Navigation: 'Navegación',
    Ecosystem: 'Ecosistema',
    'Quick Guide': 'Guía rápida',
    Company: 'Compañía',
  },
};

function translateTitle(title: React.ReactNode, locale: Locale) {
  if (typeof title !== 'string') return title;
  const dict = FOOTER_TITLE_I18N[locale] || {};
  return dict[title] ?? title;
}

export default function FooterLinksWrapper(
  props: React.ComponentProps<typeof OriginalFooterLinks>
) {
  const {pathname} = useLocation();
  const locale = detectLocaleFromPath(pathname);

  // Footer/Links 的 props 形如：{ links: Array<{title, items}> }
  const nextProps = {
    ...props,
    links: (props.links || []).map((col) => ({
      ...col,
      title: translateTitle(col.title, locale),
    })),
  };

  return <OriginalFooterLinks {...nextProps} />;
}
