// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const C = 'Robotics/Robot_Kits/SO_ARM101/Courses/SO_ARM_Tutorial';

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
  ],
});

const sidebars = {

  // スタンドアロンコースサイドバー。
  SoArmCourseSidebar: courseSidebar(),

};

module.exports = sidebars;

// 追加エクスポート（列挙不可：sidebars.js 展開時にサイドバー設定へ混入しないように）。
Object.defineProperty(module.exports, 'courseLink', {
  value: courseLink,
  enumerable: false,
});
