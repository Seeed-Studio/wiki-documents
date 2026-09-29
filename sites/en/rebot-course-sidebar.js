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

  // reBot B601-RS: Quick Start & SDK / Applications / Course (jumps to course).
  RebotRsSidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: 'Quick Start & SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        `${RS}/reBot_Arm_B601_RS_Getting_Started`,
        `${RS}/reBot_Arm_B601_RS_Lerobot`,
        `${RS}/reBot_Arm_B601_RS_pinocchio`,
        `${RS}/reBot_Arm_B601_RS_control_mit`,
      ],
    },
    {
      type: 'category',
      label: 'Applications',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        `${RS}/reBot_Arm_B601_RS_Grasping_Demo`,
        `${RS}/reBot_Arm_B601_RS_ROS2_Integration`,
        `${RS}/reBot_Arm_B601_RS_isaacsim`,
        `${RS}/reBot_Arm_B601_RS_Web_Simulator_Developer_Guide`,
        `${RS}/reBot_Arm_B601_RS_Agent`,
      ],
    },
    courseLink(),
  ],

  // reBot B601-DM: Quick Start & SDK / Applications / Course (jumps to course).
  RebotDmSidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: 'Quick Start & SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        `${DM}/reBot_Arm_B601_DM_Getting_Started`,
        `${DM}/reBot_Arm_B601_DM_Lerobot`,
        `${DM}/reBot_Arm_B601_DM_pinocchio`,
      ],
    },
    {
      type: 'category',
      label: 'Applications',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        `${DM}/reBot_Arm_B601_DM_Grasping_Demo`,
        `${DM}/reBot_Arm_B601_DM_ROS2_Integration`,
        `${DM}/reBot_Arm_B601_DM_isaacsim`,
        `${DM}/reBot_Arm_B601_DM_Web_Simulator_Developer_Guide`,
      ],
    },
    courseLink(),
  ],

};

module.exports = sidebars;
