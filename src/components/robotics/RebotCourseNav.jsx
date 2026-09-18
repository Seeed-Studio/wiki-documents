import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import '/src/css/rebot-wiki-style.css';

const ITEMS = [
  {
    slug: '/rebot_embodied_ai_course_introduction/',
    labels: {
      en: 'Introduction',
    },
    hints: {
      en: ['Start here'],
    },
  },
  {
    slug: '/rebot_embodied_ai_course_chapter_1/',
    labels: {
      en: 'Robots & AI',
    },
    hints: {
      en: ['Ch 1', 'Theory'],
    },
  },
  {
    slug: '/rebot_embodied_ai_course_chapter_2/',
    labels: {
      en: 'Hardware',
    },
    hints: {
      en: ['Ch 2', 'Theory'],
    },
  },
  {
    slug: '/rebot_embodied_ai_course_chapter_3/',
    labels: {
      en: 'Hardware Picks',
    },
    hints: {
      en: ['Ch 3', 'Practice'],
    },
  },
  {
    slug: '/rebot_embodied_ai_course_chapter_4/',
    labels: {
      en: 'Actuators',
    },
    hints: {
      en: ['Ch 4', 'Theory'],
    },
  },
  {
    slug: '/rebot_embodied_ai_course_chapter_5/',
    labels: {
      en: 'CAN Bus',
    },
    hints: {
      en: ['Ch 5', 'Theory'],
    },
  },
  {
    slug: '/rebot_embodied_ai_course_chapter_6/',
    labels: {
      en: 'Assembly',
    },
    hints: {
      en: ['Ch 6', 'Practice'],
    },
  },
  {
    slug: '/rebot_embodied_ai_course_chapter_7/',
    labels: {
      en: 'MotorBridge',
    },
    hints: {
      en: ['Ch 7', 'Practice'],
    },
  },
  {
    slug: '/rebot_embodied_ai_course_chapter_8/',
    labels: {
      en: 'Python SDK',
    },
    hints: {
      en: ['Ch 8', 'Practice'],
    },
  },
];

const ARIA_LABELS = {
  en: "Seeed Embodied Intelligence Beginner's Course navigation",
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
