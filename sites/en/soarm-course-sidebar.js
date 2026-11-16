// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const C = 'Robotics/Robot_Kits/SO_ARM101/Courses/SO_ARM_Tutorial';
const V = 'Robotics/Robot_Kits/SO_ARM101/Courses/SO_ARM_Sim2Real_VLA';

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

// The Sim-to-Real VLA course's own standalone sidebar.
const sim2RealVlaSidebar = () => [
  backToRobotics(),

  {
    type: 'doc',
    id: `${V}/Sim2Real_VLA_Introduction`,
    label: 'Course Introduction',
    className: 'sideboard_calss',
  },
  {
    type: 'category',
    label: '1. Overview',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${V}/Sim2Real_VLA_01`,
      `${V}/Sim2Real_VLA_02`,
      `${V}/Sim2Real_VLA_03`,
      `${V}/Sim2Real_VLA_04`,
      `${V}/Sim2Real_VLA_05`,
    ],
  },
  {
    type: 'category',
    label: '2. Build Your Robot Lab',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${V}/Sim2Real_VLA_06`,
      `${V}/Sim2Real_VLA_07`,
      `${V}/Sim2Real_VLA_08`,
    ],
  },
  {
    type: 'category',
    label: '3. Get Your Own VLA Model',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${V}/Sim2Real_VLA_09`,
      `${V}/Sim2Real_VLA_10`,
      `${V}/Sim2Real_VLA_11`,
      `${V}/Sim2Real_VLA_12`,
      `${V}/Sim2Real_VLA_13`,
    ],
  },
  {
    type: 'category',
    label: '4. Deploy on Jetson',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${V}/Sim2Real_VLA_14`,
      `${V}/Sim2Real_VLA_15`,
      `${V}/Sim2Real_VLA_16`,
      `${V}/Sim2Real_VLA_17`,
      `${V}/Sim2Real_VLA_18`,
    ],
  },
  {
    type: 'category',
    label: '5. Reference',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${V}/Sim2Real_VLA_19`,
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
    {
      type: 'ref',
      id: `${V}/Sim2Real_VLA_Introduction`,
      label: 'Sim-to-Real VLA',
    },
  ],
});

const sidebars = {

  // Standalone course sidebars.
  SoArmCourseSidebar: courseSidebar(),
  SoArmSim2RealVlaSidebar: sim2RealVlaSidebar(),

};

module.exports = sidebars;

// Extra named export for robotics-sidebar.js. Non-enumerable so that
// `...soArmCourseSidebars` in sidebars.js only spreads real sidebars.
Object.defineProperty(module.exports, 'courseLink', {
  value: courseLink,
  enumerable: false,
});
