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

// `items` lets a caller add entries (the reBot-RS sidebar adds the DLI course); the default
// keeps the beginner-course jump that every product's Course group starts with.
const courseItems = () => [
  {
    type: 'ref',
    id: `${C}/ja_Arm_Tutorial_Introduction`,
    label: '入門コース',
  },
];

const courseLink = (items = courseItems()) => ({
  type: 'category',
  label: 'コース',
  className: 'robotics-section-title',
  collapsed: false,
  collapsible: false,
  items,
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
  {
    type: 'category',
    label: 'Stage 5: Robot Arm Mathematics and Motion Control',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/ja_Arm_Tutorial_23`,
      `${C}/ja_Arm_Tutorial_24`,
      `${C}/ja_Arm_Tutorial_25`,
      `${C}/ja_Arm_Tutorial_26`,
    ],
  },
  {
    type: 'category',
    label: 'ステージ 6：ロボットビジョンと自律把持',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/ja_Arm_Tutorial_27`,
      `${C}/ja_Arm_Tutorial_28`,
      `${C}/ja_Arm_Tutorial_29`,
      `${C}/ja_Arm_Tutorial_30`,
    ],
  },
];

const sidebars = {

  // Standalone course sidebar.
  RebotCourseSidebar: courseSidebar(),

  // reBot-RS: Quick Start & SDK / Applications / Course (jumps to course).
  RebotRsSidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: 'クイックスタート & SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${RS}/ja_reBot_Arm_B601_RS_Getting_Started`, label: 'reBot-RS クイックスタート' },
        { type: 'doc', id: `${RS}/ja_reBot_Arm_B601_RS_Lerobot`, label: 'reBot-RS と LeRobot' },
        { type: 'doc', id: `${RS}/ja_reBot_Arm_B601_RS_pinocchio`, label: 'reBot-RS と Pinocchio' },
        { type: 'doc', id: `${RS}/ja_reBot_Arm_B601_RS_control_mit`, label: 'reBot-RS モーター SDK' },
        { type: 'link', label: 'ノーコードでVLA入門：SenseCraft Robotics プラットフォーム', href: 'https://wiki.seeedstudio.com/ja/sensecraft_robotics_rebot_arm_102_b601_rs/' },
      ],
    },
    {
      type: 'category',
      label: 'アプリケーション',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${RS}/ja_reBot_Arm_B601_RS_Grasping_Demo`, label: 'reBot-RS とビジュアルグラスピング' },
        { type: 'doc', id: `${RS}/ja_reBot_Arm_B601_RS_ROS2_Integration`, label: 'reBot-RS と ROS2' },
        { type: 'doc', id: `${RS}/ja_reBot_Arm_B601_RS_isaacsim`, label: 'reBot-RS と Isaac Sim' },
        { type: 'doc', id: `${RS}/ja_reBot_Arm_B601_RS_Web_Simulator_Developer_Guide`, label: 'Web コントローラ付き reBot-RS' },
        { type: 'doc', id: `${RS}/ja_reBot_Arm_B601_RS_Agent`, label: 'reBot-RS と Agent Claw' },
      ],
    },
    courseLink([
      ...courseItems(),
      { type: 'link', label: 'DLI コース: Sim-to-Real VLA パイプライン', href: 'https://www.seeedstudio.com/sim-to-real-with-seeed-rebot-and-nvidia-isaac' },
    ])
  ],

  // reBot-DM: Quick Start & SDK / Applications / Course (jumps to course).
  RebotDmSidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: 'クイックスタート & SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${DM}/ja_reBot_Arm_B601_DM_Getting_Started`, label: 'reBot-DM クイックスタート' },
        { type: 'doc', id: `${DM}/ja_reBot_Arm_B601_DM_Lerobot`, label: 'reBot-DM と LeRobot' },
        { type: 'doc', id: `${DM}/ja_reBot_Arm_B601_DM_pinocchio`, label: 'reBot-DM と Pinocchio' },
        { type: 'link', label: 'ノーコードでVLA入門：SenseCraft Robotics プラットフォーム', href: 'https://wiki.seeedstudio.com/ja/sensecraft_robotics_rebot_arm_102_b601_dm/' },
      ],
    },
    {
      type: 'category',
      label: 'アプリケーション',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${DM}/ja_reBot_Arm_B601_DM_Grasping_Demo`, label: 'reBot-DM ビジュアルグラスプ' },
        { type: 'doc', id: `${DM}/ja_reBot_Arm_B601_DM_ROS2_Integration`, label: 'reBot-DM と ROS2' },
        { type: 'doc', id: `${DM}/ja_reBot_Arm_B601_DM_isaacsim`, label: 'reBot-DM と Isaac Sim' },
        { type: 'doc', id: `${DM}/ja_reBot_Arm_B601_DM_Web_Simulator_Developer_Guide`, label: 'reBot-DM と Web コントローラ' },
      ],
    },
    courseLink(),
  ],

};

module.exports = sidebars;
