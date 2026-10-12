// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const C = 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial';
const RS = 'Robotics/Robot_Kits/reBot_Arm/B601_RS';
const DM = 'Robotics/Robot_Kits/reBot_Arm/B601_DM';

const backToRobotics = () => ({
  type: 'ref',
  id: 'es_Edge_Robotics',
  label: '<-Volver a Robótica',
  className: 'sideboard_calss',
});

const courseLink = () => ({
  type: 'category',
  label: 'Curso',
  className: 'robotics-section-title',
  collapsed: false,
  collapsible: false,
  items: [
    {
      type: 'ref',
      id: `${C}/es_Arm_Tutorial_Introduction`,
      label: 'Curso para principiantes',
    },
  ],
});

// The course's own standalone sidebar (opened when browsing course pages).
const courseSidebar = () => [
  backToRobotics(),
  {
    type: 'doc',
    id: `${C}/es_Arm_Tutorial_Introduction`,
    label: 'Introducción del curso',
    className: 'sideboard_calss',
  },
  {
    type: 'category',
    label: 'Etapa 1: Conceptos básicos y preparación del equipo',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/es_Arm_Tutorial_01`,
      `${C}/es_Arm_Tutorial_02`,
      `${C}/es_Arm_Tutorial_03`,
    ],
  },
  {
    type: 'category',
    label: 'Etapa 2: Ensamblaje del brazo robótico y control básico',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/es_Arm_Tutorial_04`,
      `${C}/es_Arm_Tutorial_05`,
      `${C}/es_Arm_Tutorial_06`,
      `${C}/es_Arm_Tutorial_07`,
      `${C}/es_Arm_Tutorial_08`,
    ],
  },
  {
    type: 'category',
    label: 'Etapa 3: Aprendizaje por imitación y LeRobot',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/es_Arm_Tutorial_09`,
      `${C}/es_Arm_Tutorial_10`,
      `${C}/es_Arm_Tutorial_11`,
      `${C}/es_Arm_Tutorial_12`,
      `${C}/es_Arm_Tutorial_13`,
      `${C}/es_Arm_Tutorial_14`,
      `${C}/es_Arm_Tutorial_15`,
      `${C}/es_Arm_Tutorial_16`,
      `${C}/es_Arm_Tutorial_17`,
    ],
  },
  {
    type: 'category',
    label: 'Etapa 4: VLA e Isaac GR00T',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/es_Arm_Tutorial_18`,
      `${C}/es_Arm_Tutorial_19`,
      `${C}/es_Arm_Tutorial_20`,
      `${C}/es_Arm_Tutorial_21`,
      `${C}/es_Arm_Tutorial_22`,
    ],
  },
  {
    type: 'category',
    label: 'Stage 5: Robot Arm Mathematics and Motion Control',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/es_Arm_Tutorial_23`,
      `${C}/es_Arm_Tutorial_24`,
      `${C}/es_Arm_Tutorial_25`,
      `${C}/es_Arm_Tutorial_26`,
    ],
  },
  {
    type: 'category',
    label: 'Etapa 6: Visión Robótica y Agarre Autónomo',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/es_Arm_Tutorial_27`,
      `${C}/es_Arm_Tutorial_28`,
      `${C}/es_Arm_Tutorial_29`,
      `${C}/es_Arm_Tutorial_30`,
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
      label: 'Inicio rápido y SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${RS}/es_reBot_Arm_B601_RS_Getting_Started`, label: 'Inicio rápido de reBot-RS' },
        { type: 'doc', id: `${RS}/es_reBot_Arm_B601_RS_Lerobot`, label: 'reBot-RS con LeRobot' },
        { type: 'doc', id: `${RS}/es_reBot_Arm_B601_RS_pinocchio`, label: 'reBot-RS con Pinocchio' },
        { type: 'doc', id: `${RS}/es_reBot_Arm_B601_RS_control_mit`, label: 'SDK de motor reBot-RS' },
      ],
    },
    {
      type: 'category',
      label: 'Aplicaciones',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${RS}/es_reBot_Arm_B601_RS_Grasping_Demo`, label: 'reBot-RS con agarre visual' },
        { type: 'doc', id: `${RS}/es_reBot_Arm_B601_RS_ROS2_Integration`, label: 'reBot-RS con ROS2' },
        { type: 'doc', id: `${RS}/es_reBot_Arm_B601_RS_isaacsim`, label: 'reBot-RS con Isaac Sim' },
        { type: 'doc', id: `${RS}/es_reBot_Arm_B601_RS_Web_Simulator_Developer_Guide`, label: 'Sistema de control web de reBot-RS' },
        { type: 'doc', id: `${RS}/es_reBot_Arm_B601_RS_Agent`, label: 'reBot-RS con Agent Claw' },
      ],
    },
    courseLink(),
  ],

  // reBot-DM: Quick Start & SDK / Applications / Course (jumps to course).
  RebotDmSidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: 'Inicio rápido y SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${DM}/es_reBot_Arm_B601_DM_Getting_Started`, label: 'Inicio rápido de reBot-DM' },
        { type: 'doc', id: `${DM}/es_reBot_Arm_B601_DM_Lerobot`, label: 'reBot-DM con LeRobot' },
        { type: 'doc', id: `${DM}/es_reBot_Arm_B601_DM_pinocchio`, label: 'reBot-DM con Pinocchio' },
      ],
    },
    {
      type: 'category',
      label: 'Aplicaciones',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${DM}/es_reBot_Arm_B601_DM_Grasping_Demo`, label: 'Agarre visual reBot-DM' },
        { type: 'doc', id: `${DM}/es_reBot_Arm_B601_DM_ROS2_Integration`, label: 'reBot-DM con ROS2' },
        { type: 'doc', id: `${DM}/es_reBot_Arm_B601_DM_isaacsim`, label: 'reBot-DM con Isaac Sim' },
        { type: 'doc', id: `${DM}/es_reBot_Arm_B601_DM_Web_Simulator_Developer_Guide`, label: 'Sistema de control web de reBot-DM' },
      ],
    },
    courseLink(),
  ],

};

module.exports = sidebars;
