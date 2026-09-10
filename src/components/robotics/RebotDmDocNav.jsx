import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import '/src/css/rebot-wiki-style.css';

const ITEMS = [
  {
    slug: '/rebot_b601_dm_getting_started/',
    labels: {
      en: 'Quick Start',
      cn: '快速开始',
      ja: 'クイックスタート',
      es: 'Inicio rápido',
      'pt-br': 'Início rápido',
    },
    hints: {
      en: ['Zero & params'],
      cn: ['写零点 / 写入参数'],
      ja: ['ゼロ点 / パラメータ'],
      es: ['Cero / parámetros'],
      'pt-br': ['Zero / parâmetros'],
    },
  },
  {
    slug: '/rebot_arm_b601_dm_lerobot/',
    labels: {
      en: 'LeRobot',
      cn: 'LeRobot',
      ja: 'LeRobot',
      es: 'LeRobot',
      'pt-br': 'LeRobot',
    },
  },
  {
    slug: '/rebot_arm_b601_dm_pinocchio_meshcat/',
    labels: {
      en: 'Motion Control',
      cn: '运动控制',
      ja: 'モーション制御',
      es: 'Control de movimiento',
      'pt-br': 'Controle de movimento',
    },
    hints: {
      en: ['Pinocchio', 'MeshCat'],
      cn: ['Pinocchio', 'MeshCat'],
      ja: ['Pinocchio', 'MeshCat'],
      es: ['Pinocchio', 'MeshCat'],
      'pt-br': ['Pinocchio', 'MeshCat'],
    },
  },
  {
    slug: '/rebot_arm_b601_dm_grasping_demo/',
    labels: {
      en: 'Grasping',
      cn: '视觉夹取',
      ja: 'ビジュアル把持',
      es: 'Agarre visual',
      'pt-br': 'Agarre visual',
    },
    hints: {
      en: ['YOLO'],
      cn: ['YOLO'],
      ja: ['YOLO'],
      es: ['YOLO'],
      'pt-br': ['YOLO'],
    },
  },
  {
    slug: '/rebot_arm_b601_dm_ros2_integration/',
    labels: {
      en: 'ROS2',
      cn: 'ROS2',
      ja: 'ROS2',
      es: 'ROS2',
      'pt-br': 'ROS2',
    },
  },
  {
    slug: '/rebot_arm_b601_dm_web_simulator_developer_guide/',
    labels: {
      en: 'Web Sim',
      cn: 'Web 仿真',
      ja: 'Web シミュレーション',
      es: 'Simulación web',
      'pt-br': 'Simulação web',
    },
    hints: {
      en: ['MuJoCo / ROS2'],
      cn: ['MuJoCo / ROS2'],
      ja: ['MuJoCo / ROS2'],
      es: ['MuJoCo / ROS2'],
      'pt-br': ['MuJoCo / ROS2'],
    },
  },
  {
    slug: '/rebot_arm_b601_dm_isaacsim/',
    labels: {
      en: 'Isaac Sim',
      cn: 'Isaac Sim',
      ja: 'Isaac Sim',
      es: 'Isaac Sim',
      'pt-br': 'Isaac Sim',
    },
  },
];

const ARIA_LABELS = {
  en: 'reBot Arm B601-DM docs navigation',
  cn: 'reBot Arm B601-DM 文档导航',
  ja: 'reBot Arm B601-DM ドキュメントナビゲーション',
  es: 'Navegación de documentación de reBot Arm B601-DM',
  'pt-br': 'Navegação da documentação do reBot Arm B601-DM',
};

export default function RebotDmDocNav() {
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