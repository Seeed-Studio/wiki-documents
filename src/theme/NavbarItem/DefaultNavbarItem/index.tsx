import React from 'react';
import OriginalDefaultNavbarItem from '@theme-original/NavbarItem/DefaultNavbarItem';
import {useLocation} from '@docusaurus/router';

import {
  detectLocaleFromPath,
  localizeHref,
  type Locale,
} from '../../../pages/home/lib/locale';

// 可选：给 Navbar 常用 label 做翻译（命中才替换；没命中就保持原文）
const NAV_LABEL_I18N: Record<Locale, Record<string, string>> = {
  en: {
    'Quick Links': 'Quick Links',
    'Explore with Topics': 'Explore with Topics',
    FAQs: 'FAQs',
    'Get Involved': 'Get Involved',
    'Bazaar 🛍️': 'Bazaar 🛍️',
    'SenseCraft AI': 'SenseCraft AI',
  },
  cn: {
    'Quick Links': '快速入口',
    'Explore with Topics': '按主题探索',
    FAQs: '常见问题',
    'Get Involved': '参与我们',
    'Bazaar 🛍️': '商店 🛍️',
    'SenseCraft AI': 'SenseCraft AI',
  },
  ja: {
    'Quick Links': 'クイックリンク',
    'Explore with Topics': 'トピックで探す',
    FAQs: 'よくある質問',
    'Get Involved': '参加する',
    'Bazaar 🛍️': 'ストア 🛍️',
    'SenseCraft AI': 'SenseCraft AI',
  },
  es: {
    'Quick Links': 'Enlaces rápidos',
    'Explore with Topics': 'Explorar por temas',
    FAQs: 'Preguntas frecuentes',
    'Get Involved': 'Participa',
    'Bazaar 🛍️': 'Tienda 🛍️',
    'SenseCraft AI': 'SenseCraft AI',
  },
};

function translateLabel(label: React.ReactNode, locale: Locale): React.ReactNode {
  if (typeof label !== 'string') return label;
  const dict = NAV_LABEL_I18N[locale] || {};
  return dict[label] ?? label;
}

export default function DefaultNavbarItemWrapper(
  props: React.ComponentProps<typeof OriginalDefaultNavbarItem>
) {
  const {pathname} = useLocation();
  const locale = detectLocaleFromPath(pathname);

  const nextProps = {...props} as any;

  if (nextProps.label) {
    nextProps.label = translateLabel(nextProps.label, locale);
  }

  // 仅站内/wiki 链接加前缀；外链保持不变
  if (typeof nextProps.to === 'string') {
    nextProps.to = localizeHref(nextProps.to, locale);
  } else if (typeof nextProps.href === 'string') {
    nextProps.href = localizeHref(nextProps.href, locale);
  }

  return <OriginalDefaultNavbarItem {...nextProps} />;
}
