import React from 'react';
import OriginalFooterLinkItem from '@theme-original/Footer/LinkItem';
import {useLocation} from '@docusaurus/router';

import {
  detectLocaleFromPath,
  localizeHref,
  type Locale,
} from '../../../pages/home/lib/locale';

// 可选：Footer 常用 label 翻译（命中才替换）
const FOOTER_LABEL_I18N: Record<Locale, Record<string, string>> = {
  en: {
    'Getting Started': 'Getting Started',
    'Sensor and Sensing': 'Sensor and Sensing',
    Network: 'Network',
    'Edge Computing': 'Edge Computing',
    Cloud: 'Cloud',
    Solutions: 'Solutions',
    Discord: 'Discord',
    'Project Hub': 'Project Hub',
    Partners: 'Partners',
    Distributors: 'Distributors',
    Bazaar: 'Bazaar',
    'How to get help': 'How to get help',
    FAQs: 'FAQs',
    Forum: 'Forum',
    'Technical Support': 'Technical Support',
    'About Seeed': 'About Seeed',
    'Join us': 'Join us',
    'Contact Us': 'Contact Us',
    Press: 'Press',
  },
  cn: {
    'Getting Started': '快速开始',
    'Sensor and Sensing': '传感器与感知',
    Network: '网络',
    'Edge Computing': '边缘计算',
    Cloud: '云端',
    Solutions: '解决方案',
    Discord: 'Discord 社区',
    'Project Hub': '项目中心',
    Partners: '合作伙伴',
    Distributors: '经销商',
    Bazaar: '商店',
    'How to get help': '如何获得帮助',
    FAQs: '常见问题',
    Forum: '论坛',
    'Technical Support': '技术支持',
    'About Seeed': '关于我们',
    'Join us': '加入我们',
    'Contact Us': '联系我们',
    Press: '媒体报道',
  },
  ja: {
    'Getting Started': 'はじめに',
    'Sensor and Sensing': 'センサーとセンシング',
    Network: 'ネットワーク',
    'Edge Computing': 'エッジコンピューティング',
    Cloud: 'クラウド',
    Solutions: 'ソリューション',
    Discord: 'Discord',
    'Project Hub': 'プロジェクトハブ',
    Partners: 'パートナー',
    Distributors: '販売代理店',
    Bazaar: 'ストア',
    'How to get help': 'ヘルプの受け方',
    FAQs: 'よくある質問',
    Forum: 'フォーラム',
    'Technical Support': '技術サポート',
    'About Seeed': '会社概要',
    'Join us': '採用情報',
    'Contact Us': 'お問い合わせ',
    Press: 'プレス',
  },
  es: {
    'Getting Started': 'Primeros pasos',
    'Sensor and Sensing': 'Sensores y sensado',
    Network: 'Red',
    'Edge Computing': 'Computación perimetral',
    Cloud: 'Nube',
    Solutions: 'Soluciones',
    Discord: 'Discord',
    'Project Hub': 'Centro de proyectos',
    Partners: 'Socios',
    Distributors: 'Distribuidores',
    Bazaar: 'Tienda',
    'How to get help': 'Cómo obtener ayuda',
    FAQs: 'Preguntas frecuentes',
    Forum: 'Foro',
    'Technical Support': 'Soporte técnico',
    'About Seeed': 'Acerca de Seeed',
    'Join us': 'Únete a nosotros',
    'Contact Us': 'Contáctanos',
    Press: 'Prensa',
  },
};

function translateLabel(label: React.ReactNode, locale: Locale): React.ReactNode {
  if (typeof label !== 'string') return label;
  const dict = FOOTER_LABEL_I18N[locale] || {};
  return dict[label] ?? label;
}

export default function FooterLinkItemWrapper(
  props: React.ComponentProps<typeof OriginalFooterLinkItem>
) {
  const {pathname} = useLocation();
  const locale = detectLocaleFromPath(pathname);

  const nextProps = {...props} as any;

  if (nextProps.item) {
    const nextItem = {...nextProps.item};

    if (nextItem.label) {
      nextItem.label = translateLabel(nextItem.label, locale);
    }

    // 无论当前是否为首页，都需要为站内链接追加语言前缀。
    if (typeof nextItem.to === 'string') {
      nextItem.to = localizeHref(nextItem.to, locale);
    } else if (typeof nextItem.href === 'string') {
      nextItem.href = localizeHref(nextItem.href, locale);
    }

    nextProps.item = nextItem;
  }

  return <OriginalFooterLinkItem {...nextProps} />;
}
