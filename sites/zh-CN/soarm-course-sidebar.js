// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const C = 'Robotics/Robot_Kits/SO_ARM101/Courses/SO_ARM_Tutorial';

const backToRobotics = () => ({
  type: 'ref',
  id: 'cn_Edge_Robotics',
  label: '<-返回机器人页面',
  className: 'sideboard_calss',
});

// 课程自己的独立侧边栏（浏览课程页面时展开）。
const courseSidebar = () => [
  backToRobotics(),

  {
    type: 'doc',
    id: `${C}/cn_Arm_Tutorial_Introduction`,
    label: '课程介绍',
    className: 'sideboard_calss',
  },
  {
    type: 'category',
    label: '第一阶段：基本概念与教具准备',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/cn_Arm_Tutorial_01`,
      `${C}/cn_Arm_Tutorial_02`,
      `${C}/cn_Arm_Tutorial_03`,
    ],
  },
  {
    type: 'category',
    label: '第二阶段：SO-ARM 组装与基础控制',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/cn_Arm_Tutorial_04`,
      `${C}/cn_Arm_Tutorial_05`,
      `${C}/cn_Arm_Tutorial_06`,
      `${C}/cn_Arm_Tutorial_07`,
    ],
  },
  {
    type: 'category',
    label: '第三阶段：模仿学习与 LeRobot',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/cn_Arm_Tutorial_08`,
      `${C}/cn_Arm_Tutorial_09`,
      `${C}/cn_Arm_Tutorial_10`,
      `${C}/cn_Arm_Tutorial_11`,
      `${C}/cn_Arm_Tutorial_12`,
      `${C}/cn_Arm_Tutorial_13`,
      `${C}/cn_Arm_Tutorial_14`,
      `${C}/cn_Arm_Tutorial_15`,
      `${C}/cn_Arm_Tutorial_16`,
      `${C}/cn_Arm_Tutorial_17`,
    ],
  },
  {
    type: 'category',
    label: '第四阶段：VLA —— Isaac GR00T 与无代码 SenseCraft',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/cn_Arm_Tutorial_18`,
      `${C}/cn_Arm_Tutorial_19`,
      `${C}/cn_Arm_Tutorial_20`,
      `${C}/cn_Arm_Tutorial_21`,
      `${C}/cn_Arm_Tutorial_22`,
    ],
  },
];

// 课程跳转入口（供 robotics-sidebar.js 的 SoArm101Sidebar「课程」分组使用）。
const courseLink = () => ({
  type: 'category',
  label: '课程',
  className: 'robotics-section-title',
  collapsed: false,
  collapsible: false,
  items: [
    {
      type: 'ref',
      id: `${C}/cn_Arm_Tutorial_Introduction`,
      label: '入门课程',
    },
    {
      type: 'ref',
      id: 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/cn_Paper_Reading_Getting_Started',
      label: '论文精读',
    },
  ],
});

const sidebars = {

  // 独立课程侧边栏。
  SoArmCourseSidebar: courseSidebar(),

};

module.exports = sidebars;

// 附加导出（不可枚举，避免 sidebars.js 展开时误入侧边栏配置）。
Object.defineProperty(module.exports, 'courseLink', {
  value: courseLink,
  enumerable: false,
});
