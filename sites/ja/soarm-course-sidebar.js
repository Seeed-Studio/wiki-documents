// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const C = 'Robotics/Robot_Kits/SO_ARM101/Courses/SO_ARM_Tutorial';
const V = 'Robotics/Robot_Kits/SO_ARM101/Courses/SO_ARM_Sim2Real_VLA';

const backToRobotics = () => ({
  type: 'ref',
  id: 'ja_Edge_Robotics',
  label: '<-ロボティクスに戻る',
  className: 'sideboard_calss',
});

// コース自体のスタンドアロンサイドバー（コースページ閲覧時に展開）。
const courseSidebar = () => [
  backToRobotics(),

  {
    type: 'doc',
    id: `${C}/ja_Arm_Tutorial_Introduction`,
    label: 'コース紹介',
    className: 'sideboard_calss',
  },
  {
    type: 'category',
    label: 'ステージ 1：基本概念と教具の準備',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/ja_Arm_Tutorial_01`,
      `${C}/ja_Arm_Tutorial_02`,
      `${C}/ja_Arm_Tutorial_03`,
    ],
  },
  {
    type: 'category',
    label: 'ステージ 2：SO-ARM の組み立てと基本制御',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/ja_Arm_Tutorial_04`,
      `${C}/ja_Arm_Tutorial_05`,
      `${C}/ja_Arm_Tutorial_06`,
      `${C}/ja_Arm_Tutorial_07`,
    ],
  },
  {
    type: 'category',
    label: 'ステージ 3：模倣学習と LeRobot',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/ja_Arm_Tutorial_08`,
      `${C}/ja_Arm_Tutorial_09`,
      `${C}/ja_Arm_Tutorial_10`,
      `${C}/ja_Arm_Tutorial_11`,
      `${C}/ja_Arm_Tutorial_12`,
      `${C}/ja_Arm_Tutorial_13`,
      `${C}/ja_Arm_Tutorial_14`,
      `${C}/ja_Arm_Tutorial_15`,
      `${C}/ja_Arm_Tutorial_16`,
      `${C}/ja_Arm_Tutorial_17`,
    ],
  },
  {
    type: 'category',
    label: 'ステージ 4：VLA — Isaac GR00T とノーコード SenseCraft',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/ja_Arm_Tutorial_18`,
      `${C}/ja_Arm_Tutorial_19`,
      `${C}/ja_Arm_Tutorial_20`,
      `${C}/ja_Arm_Tutorial_21`,
      `${C}/ja_Arm_Tutorial_22`,
    ],
  },
];

// 製品サイドバーの「コース」グループ用ジャンプ入口（robotics-sidebar.js から利用）。
// Sim-to-Real VLA コース専用のスタンドアロンサイドバー。
const sim2RealVlaSidebar = () => [
  backToRobotics(),

  {
    type: 'doc',
    id: `${V}/ja_Sim2Real_VLA_Introduction`,
    label: 'コース紹介',
    className: 'sideboard_calss',
  },
  {
    type: 'category',
    label: '1. 概要',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${V}/ja_Sim2Real_VLA_01}`,
      `${V}/ja_Sim2Real_VLA_02}`,
      `${V}/ja_Sim2Real_VLA_03}`,
      `${V}/ja_Sim2Real_VLA_04}`,
      `${V}/ja_Sim2Real_VLA_05}`,
    ],
  },
  {
    type: 'category',
    label: '2. ロボットラボの構築',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${V}/ja_Sim2Real_VLA_06}`,
      `${V}/ja_Sim2Real_VLA_07}`,
      `${V}/ja_Sim2Real_VLA_08}`,
    ],
  },
  {
    type: 'category',
    label: '3. 自分の VLA モデルを入手',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${V}/ja_Sim2Real_VLA_09}`,
      `${V}/ja_Sim2Real_VLA_10}`,
      `${V}/ja_Sim2Real_VLA_11}`,
      `${V}/ja_Sim2Real_VLA_12}`,
      `${V}/ja_Sim2Real_VLA_13}`,
    ],
  },
  {
    type: 'category',
    label: '4. Jetson へのデプロイ',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${V}/ja_Sim2Real_VLA_14}`,
      `${V}/ja_Sim2Real_VLA_15}`,
      `${V}/ja_Sim2Real_VLA_16}`,
      `${V}/ja_Sim2Real_VLA_17}`,
      `${V}/ja_Sim2Real_VLA_18}`,
    ],
  },
  {
    type: 'category',
    label: '5. リファレンス',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${V}/ja_Sim2Real_VLA_19}`,
    ],
  },
];

const courseLink = () => ({
  type: 'category',
  label: 'コース',
  className: 'robotics-section-title',
  collapsed: false,
  collapsible: false,
  items: [
    {
      type: 'ref',
      id: `${C}/ja_Arm_Tutorial_Introduction`,
      label: '入門コース',
    },
    {
      type: 'ref',
      id: 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/ja_Paper_Reading_Getting_Started',
      label: '論文ディープダイブ',
    },
    {
      type: 'ref',
      id: `${V}/ja_Sim2Real_VLA_Introduction`,
      label: 'Sim-to-Real VLA',
    },
  ],
});

const sidebars = {

  // スタンドアロンコースサイドバー。
  SoArmCourseSidebar: courseSidebar(),
  SoArmSim2RealVlaSidebar: sim2RealVlaSidebar(),

};

module.exports = sidebars;

// 追加エクスポート（列挙不可：sidebars.js 展開時にサイドバー設定へ混入しないように）。
Object.defineProperty(module.exports, 'courseLink', {
  value: courseLink,
  enumerable: false,
});
