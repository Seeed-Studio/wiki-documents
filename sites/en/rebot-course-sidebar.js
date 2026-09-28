// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const C = 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial';
const RS = 'Robotics/Robot_Kits/reBot_Arm/B601_RS';
const DM = 'Robotics/Robot_Kits/reBot_Arm/B601_DM';

const backToRobotics = () => ({
  type: 'ref',
  id: 'Edge_Robotics',
  label: '<-Back to Robotics',
  className: 'sideboard_calss',
});

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
  ],
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
    label: 'Stage 2: Robotic Arm Assembly and Basic Control',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/Arm_Tutorial_04`,
      `${C}/Arm_Tutorial_05`,
      `${C}/Arm_Tutorial_06`,
      `${C}/Arm_Tutorial_07`,
      `${C}/Arm_Tutorial_08`,
    ],
  },
  {
    type: 'category',
    label: 'Stage 3: Imitation Learning and LeRobot',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
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
    label: 'Stage 4: VLA and Isaac GR00T',
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

const sidebars = {

  // Standalone course sidebar.
  RebotCourseSidebar: courseSidebar(),

  // reBot-RS: Quick Start & SDK / Applications / Course (jumps to course).
  RebotRsSidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: 'Quick Start & SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${RS}/reBot_Arm_B601_RS_Getting_Started`, label: 'reBot-RS Quick Start' },
        { type: 'doc', id: `${RS}/reBot_Arm_B601_RS_Lerobot`, label: 'reBot-RS with LeRobot' },
        { type: 'doc', id: `${RS}/reBot_Arm_B601_RS_pinocchio`, label: 'reBot-RS with Pinocchio' },
        { type: 'doc', id: `${RS}/reBot_Arm_B601_RS_control_mit`, label: 'reBot-RS Motor SDK' },
      ],
    },
    {
      type: 'category',
      label: 'Applications',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${RS}/reBot_Arm_B601_RS_Grasping_Demo`, label: 'reBot-RS with Visual Grasping' },
        { type: 'doc', id: `${RS}/reBot_Arm_B601_RS_ROS2_Integration`, label: 'reBot-RS with ROS2' },
        { type: 'doc', id: `${RS}/reBot_Arm_B601_RS_isaacsim`, label: 'reBot-RS with Isaac Sim' },
        { type: 'doc', id: `${RS}/reBot_Arm_B601_RS_Web_Simulator_Developer_Guide`, label: 'reBot-RS with Web Controler' },
        { type: 'doc', id: `${RS}/reBot_Arm_B601_RS_Agent`, label: 'reBot-RS with Agent Claw' },
      ],
    },
    courseLink(),
  ],

  // reBot-DM: Quick Start & SDK / Applications / Course (jumps to course).
  RebotDmSidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: 'Quick Start & SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${DM}/reBot_Arm_B601_DM_Getting_Started`, label: 'reBot-DM Quick Start' },
        { type: 'doc', id: `${DM}/reBot_Arm_B601_DM_Lerobot`, label: 'reBot-DM with LeRobot' },
        { type: 'doc', id: `${DM}/reBot_Arm_B601_DM_pinocchio`, label: 'reBot-DM with Pinocchio' },
      ],
    },
    {
      type: 'category',
      label: 'Applications',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${DM}/reBot_Arm_B601_DM_Grasping_Demo`, label: 'reBot-DM Visual Grasp' },
        { type: 'doc', id: `${DM}/reBot_Arm_B601_DM_ROS2_Integration`, label: 'reBot-DM with ROS2' },
        { type: 'doc', id: `${DM}/reBot_Arm_B601_DM_isaacsim`, label: 'reBot-DM with Isaac Sim' },
        { type: 'doc', id: `${DM}/reBot_Arm_B601_DM_Web_Simulator_Developer_Guide`, label: 'reBot-DM with Web Controler' },
      ],
    },
    courseLink(),
  ],

};

module.exports = sidebars;
