// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const C = 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial';
const RS = 'Robotics/Robot_Kits/reBot_Arm/B601_RS';
const DM = 'Robotics/Robot_Kits/reBot_Arm/B601_DM';

const backToRobotics = () => ({
  type: 'ref',
  id: 'ja_Edge_Robotics',
  label: '<-ロボティクスに戻る',
  className: 'sideboard_calss',
});

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

// The course's own standalone sidebar (opened when browsing course pages).
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
    label: 'ステージ 1：基本概念と機材準備',
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
    label: 'ステージ 2：ロボットアームの組み立てと基本制御',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/ja_Arm_Tutorial_04`,
      `${C}/ja_Arm_Tutorial_05`,
      `${C}/ja_Arm_Tutorial_06`,
      `${C}/ja_Arm_Tutorial_07`,
      `${C}/ja_Arm_Tutorial_08`,
    ],
  },
  {
    type: 'category',
    label: 'ステージ 3：模倣学習と LeRobot',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
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
    label: 'ステージ 4：VLA と Isaac GR00T',
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

const sidebars = {

  // Standalone course sidebar.
  RebotCourseSidebar: courseSidebar(),

  // reBot B601-RS: Quick Start & SDK / Applications / Course (jumps to course).
  RebotRsSidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: 'クイックスタート & SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        `${RS}/ja_reBot_Arm_B601_RS_Getting_Started`,
        `${RS}/ja_reBot_Arm_B601_RS_Lerobot`,
        `${RS}/ja_reBot_Arm_B601_RS_pinocchio`,
        `${RS}/ja_reBot_Arm_B601_RS_control_mit`,
      ],
    },
    {
      type: 'category',
      label: 'アプリケーション',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        `${RS}/ja_reBot_Arm_B601_RS_Grasping_Demo`,
        `${RS}/ja_reBot_Arm_B601_RS_ROS2_Integration`,
        `${RS}/ja_reBot_Arm_B601_RS_isaacsim`,
        `${RS}/ja_reBot_Arm_B601_RS_Web_Simulator_Developer_Guide`,
        `${RS}/ja_reBot_Arm_B601_RS_Agent`,
      ],
    },
    courseLink(),
  ],

  // reBot B601-DM: Quick Start & SDK / Applications / Course (jumps to course).
  RebotDmSidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: 'クイックスタート & SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        `${DM}/ja_reBot_Arm_B601_DM_Getting_Started`,
        `${DM}/ja_reBot_Arm_B601_DM_Lerobot`,
        `${DM}/ja_reBot_Arm_B601_DM_pinocchio`,
      ],
    },
    {
      type: 'category',
      label: 'アプリケーション',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        `${DM}/ja_reBot_Arm_B601_DM_Grasping_Demo`,
        `${DM}/ja_reBot_Arm_B601_DM_ROS2_Integration`,
        `${DM}/ja_reBot_Arm_B601_DM_isaacsim`,
        `${DM}/ja_reBot_Arm_B601_DM_Web_Simulator_Developer_Guide`,
      ],
    },
    courseLink(),
  ],

};

module.exports = sidebars;