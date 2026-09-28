import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import '/src/css/rebot-wiki-style.css';

const ITEMS = [
  {
    slug: '/rebot_physical_ai_course_introduction/',
    labels: {
      en: 'Introduction',
      ja: 'コース紹介',
      es: 'Introducción',
      'pt-br': 'Introdução',
    },
    hints: {
      en: ['Start here'],
      ja: ['ここから開始'],
      es: ['Empieza aquí'],
      'pt-br': ['Comece aqui'],
    },
  },
  {
    slug: '/rebot_physical_ai_course_chapter_1/',
    labels: {
      en: 'Robots & AI',
      ja: 'ロボットとAI',
      es: 'Robots e IA',
      'pt-br': 'Robôs e IA',
    },
    hints: {
      en: ['Ch 1', 'Theory'],
      ja: ['第1章', '理論'],
      es: ['Cap. 1', 'Teoría'],
      'pt-br': ['Cap. 1', 'Teoria'],
    },
  },
  {
    slug: '/rebot_physical_ai_course_chapter_2/',
    labels: {
      en: 'Hardware',
      ja: 'ハードウェア',
      es: 'Hardware',
      'pt-br': 'Hardware',
    },
    hints: {
      en: ['Ch 2', 'Theory'],
      ja: ['第2章', '理論'],
      es: ['Cap. 2', 'Teoría'],
      'pt-br': ['Cap. 2', 'Teoria'],
    },
  },
  {
    slug: '/rebot_physical_ai_course_chapter_3/',
    labels: {
      en: 'Hardware Picks',
      ja: 'ハードウェア選定',
      es: 'Selección de hardware',
      'pt-br': 'Seleção de hardware',
    },
    hints: {
      en: ['Ch 3', 'Practice'],
      ja: ['第3章', '実践'],
      es: ['Cap. 3', 'Práctica'],
      'pt-br': ['Cap. 3', 'Prática'],
    },
  },
  {
    slug: '/rebot_physical_ai_course_chapter_4/',
    labels: {
      en: 'Actuators',
      ja: 'アクチュエーター',
      es: 'Actuadores',
      'pt-br': 'Atuadores',
    },
    hints: {
      en: ['Ch 4', 'Theory'],
      ja: ['第4章', '理論'],
      es: ['Cap. 4', 'Teoría'],
      'pt-br': ['Cap. 4', 'Teoria'],
    },
  },
  {
    slug: '/rebot_physical_ai_course_chapter_5/',
    labels: {
      en: 'CAN Bus',
      ja: 'CANバス',
      es: 'Bus CAN',
      'pt-br': 'Barramento CAN',
    },
    hints: {
      en: ['Ch 5', 'Theory'],
      ja: ['第5章', '理論'],
      es: ['Cap. 5', 'Teoría'],
      'pt-br': ['Cap. 5', 'Teoria'],
    },
  },
  {
    slug: '/rebot_physical_ai_course_chapter_6/',
    labels: {
      en: 'Assembly',
      ja: '組み立て',
      es: 'Montaje',
      'pt-br': 'Montagem',
    },
    hints: {
      en: ['Ch 6', 'Practice'],
      ja: ['第6章', '実践'],
      es: ['Cap. 6', 'Práctica'],
      'pt-br': ['Cap. 6', 'Prática'],
    },
  },
  {
    slug: '/rebot_physical_ai_course_chapter_7/',
    labels: {
      en: 'MotorBridge',
      ja: 'MotorBridge',
      es: 'MotorBridge',
      'pt-br': 'MotorBridge',
    },
    hints: {
      en: ['Ch 7', 'Practice'],
      ja: ['第7章', '実践'],
      es: ['Cap. 7', 'Práctica'],
      'pt-br': ['Cap. 7', 'Prática'],
    },
  },
  {
    slug: '/rebot_physical_ai_course_chapter_8/',
    labels: {
      en: 'Python SDK',
      ja: 'Python SDK',
      es: 'SDK de Python',
      'pt-br': 'SDK Python',
    },
    hints: {
      en: ['Ch 8', 'Practice'],
      ja: ['第8章', '実践'],
      es: ['Cap. 8', 'Práctica'],
      'pt-br': ['Cap. 8', 'Prática'],
    },
  },
];

const ARIA_LABELS = {
  en: "Seeed Embodied Intelligence Beginner's Course navigation",
  ja: 'Seeed エンボディドインテリジェンス初心者コースのナビゲーション',
  es: 'Navegación del curso para principiantes de inteligencia incorporada de Seeed',
  'pt-br': 'Navegação do curso para iniciantes em inteligência incorporada da Seeed',
};

export default function RebotCourseNav() {
  const {pathname} = useLocation();
  const {i18n} = useDocusaurusContext();

  const locale = i18n.currentLocale || 'en';
  const current = pathname.replace(/\/+$/, '');

  return (
    <nav
      className="doc-nav doc-nav--series"
      aria-label={ARIA_LABELS[locale] || ARIA_LABELS.en}
    >
      {ITEMS.map((item) => {
        const itemPath = item.slug.replace(/\/+$/, '');
        const active = current.endsWith(itemPath);

        const label = item.labels[locale] || item.labels.en;
        const hints =
          (item.hints && (item.hints[locale] || item.hints.en)) || [];

        return (
          <Link
            key={item.slug}
            to={item.slug}
            className={active ? 'active' : undefined}
            aria-current={active ? 'page' : undefined}
          >
            {label}

            {hints.length ? (
              <span className="doc-nav-hints">
                {hints.map((hint) => (
                  <span key={hint} className="doc-nav-hint">
                    {hint}
                  </span>
                ))}
              </span>
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}