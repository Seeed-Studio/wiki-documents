import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import '/src/css/rebot-wiki-style.css';

const ITEMS = [
  {
    slug: '/rebot_b601_dm_getting_started/',
    en: 'Quick Start',
    zh: '快速开始',
    hintsEn: ['Zero & params'],
    hintsZh: ['写零点 / 写入参数'],
  },
  {slug: '/rebot_arm_b601_dm_lerobot/', en: 'LeRobot', zh: 'LeRobot'},
  {
    slug: '/rebot_arm_b601_dm_pinocchio_meshcat/',
    en: 'Motion Control',
    zh: '运动控制',
    hintsEn: ['Pinocchio', 'MeshCat'],
    hintsZh: ['Pinocchio', 'MeshCat'],
  },
  {
    slug: '/rebot_arm_b601_dm_grasping_demo/',
    en: 'Grasping',
    zh: '视觉夹取',
    hintsEn: ['YOLO'],
    hintsZh: ['YOLO'],
  },
  {slug: '/rebot_arm_b601_dm_ros2_integration/', en: 'ROS2', zh: 'ROS2'},
  {
    slug: '/rebot_arm_b601_dm_web_simulator_developer_guide/',
    en: 'Web Sim',
    zh: 'Web 仿真',
    hintsEn: ['MuJoCo / ROS2'],
    hintsZh: ['MuJoCo / ROS2'],
  },
  {slug: '/rebot_arm_b601_dm_isaacsim/', en: 'Isaac Sim', zh: 'Isaac Sim'},
];

export default function RebotDmDocNav() {
  const {pathname} = useLocation();
  const {i18n} = useDocusaurusContext();
  const isZh = i18n.currentLocale === 'cn';
  const current = pathname.replace(/\/+$/, '');

  return (
    <nav
      className="doc-nav doc-nav--series"
      aria-label={isZh ? 'reBot Arm B601-DM 文档导航' : 'reBot Arm B601-DM docs navigation'}
    >
      {ITEMS.map((item) => {
        const itemPath = item.slug.replace(/\/+$/, '');
        const active = current.endsWith(itemPath);
        const hints = (isZh ? item.hintsZh : item.hintsEn) || [];
        return (
          <Link
            key={item.slug}
            to={item.slug}
            className={active ? 'active' : undefined}
          >
            {isZh ? item.zh : item.en}
            {hints.length ? (
              <span className="doc-nav-hints">
                {hints.map((hint) => (
                  <span key={hint} className="doc-nav-hint">{hint}</span>
                ))}
              </span>
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}
