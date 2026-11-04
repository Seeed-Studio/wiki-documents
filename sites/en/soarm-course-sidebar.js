// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const C = 'Robotics/Robot_Kits/SO_ARM101/Courses/SO_ARM_Tutorial';

const backToRobotics = () => ({
  type: 'ref',
  id: 'Edge_Robotics',
  label: '<-Back to Robotics',
  className: 'sideboard_calss',
});

// The course's own standalone sidebar (opened when browsing course pages).
const courseSidebar = () => [
  backToRobotics(),

  {
    type: 'doc',
    id: `${C}/Arm_Tutorial_Introduction`,
    label: 'Course Introduction',
    className: 'sideboard_calss',
  },
  {
    type: 'category',
    label: 'Stage 1: Basic Concepts and Equipment Preparation',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/Arm_Tutorial_01`,
      `${C}/Arm_Tutorial_02`,
      `${C}/Arm_Tutorial_03`,
    ],
  },
  {
    type: 'category',
    label: 'Stage 2: SO-ARM Assembly and Basic Control',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/Arm_Tutorial_04`,
      `${C}/Arm_Tutorial_05`,
      `${C}/Arm_Tutorial_06`,
      `${C}/Arm_Tutorial_07`,
    ],
  },
  {
    type: 'category',
    label: 'Stage 3: Imitation Learning and LeRobot',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/Arm_Tutorial_08`,
      `${C}/Arm_Tutorial_09`,
      `${C}/Arm_Tutorial_10`,
      `${C}/Arm_Tutorial_11`,
      `${C}/Arm_Tutorial_12`,
      `${C}/Arm_Tutorial_13`,
      `${C}/Arm_Tutorial_14`,
      `${C}/Arm_Tutorial_15`,
      `${C}/Arm_Tutorial_16`,
      `${C}/Arm_Tutorial_17`,
    ],
  },
  {
    type: 'category',
    label: 'Stage 4: VLA — Isaac GR00T and No-Code SenseCraft',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/Arm_Tutorial_18`,
      `${C}/Arm_Tutorial_19`,
      `${C}/Arm_Tutorial_20`,
      `${C}/Arm_Tutorial_21`,
      `${C}/Arm_Tutorial_22`,
    ],
  },
];

// The course jump entry that the SO-ARM101 product sidebar's Course group uses
// (consumed by robotics-sidebar.js).
const courseLink = () => ({
  type: 'category',
  label: 'Course',
  className: 'robotics-section-title',
  collapsed: false,
  collapsible: false,
  items: [
    {
      type: 'ref',
      id: `${C}/Arm_Tutorial_Introduction`,
      label: 'Beginner Course',
    },
    {
      type: 'ref',
      id: 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/Paper_Reading_Getting_Started',
      label: 'Paper Deep-Dive',
    },
  ],
});

const sidebars = {

  // Standalone course sidebar.
  SoArmCourseSidebar: courseSidebar(),

};

module.exports = sidebars;

// Extra named export for robotics-sidebar.js. Non-enumerable so that
// `...soArmCourseSidebars` in sidebars.js only spreads real sidebars.
Object.defineProperty(module.exports, 'courseLink', {
  value: courseLink,
  enumerable: false,
});
