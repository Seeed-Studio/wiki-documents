// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const C = 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial';
const RS = 'Robotics/Robot_Kits/reBot_Arm/B601_RS';
const DM = 'Robotics/Robot_Kits/reBot_Arm/B601_DM';

const backToRobotics = () => ({
  type: 'ref',
  id: 'pt_Edge_Robotics',
  label: '<-Voltar para Robótica',
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
      id: `${C}/pt_Arm_Tutorial_Introduction`,
      label: 'Curso para iniciantes',
    },
  ],
});

// The course's own standalone sidebar (opened when browsing course pages).
const courseSidebar = () => [
  backToRobotics(),
  {
    type: 'doc',
    id: `${C}/pt_Arm_Tutorial_Introduction`,
    label: 'Introdução do curso',
    className: 'sideboard_calss',
  },
  {
    type: 'category',
    label: 'Fase 1: Conceitos Básicos e Preparação de Equipamentos',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/pt_Arm_Tutorial_01`,
      `${C}/pt_Arm_Tutorial_02`,
      `${C}/pt_Arm_Tutorial_03`,
    ],
  },
  {
    type: 'category',
    label: 'Fase 2: Montagem do Braço Robótico e Controle Básico',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/pt_Arm_Tutorial_04`,
      `${C}/pt_Arm_Tutorial_05`,
      `${C}/pt_Arm_Tutorial_06`,
      `${C}/pt_Arm_Tutorial_07`,
      `${C}/pt_Arm_Tutorial_08`,
    ],
  },
  {
    type: 'category',
    label: 'Fase 3: Aprendizado por Imitação e LeRobot',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/pt_Arm_Tutorial_09`,
      `${C}/pt_Arm_Tutorial_10`,
      `${C}/pt_Arm_Tutorial_11`,
      `${C}/pt_Arm_Tutorial_12`,
      `${C}/pt_Arm_Tutorial_13`,
      `${C}/pt_Arm_Tutorial_14`,
      `${C}/pt_Arm_Tutorial_15`,
      `${C}/pt_Arm_Tutorial_16`,
      `${C}/pt_Arm_Tutorial_17`,
    ],
  },
  {
    type: 'category',
    label: 'Fase 4: VLA e Isaac GR00T',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/pt_Arm_Tutorial_18`,
      `${C}/pt_Arm_Tutorial_19`,
      `${C}/pt_Arm_Tutorial_20`,
      `${C}/pt_Arm_Tutorial_21`,
      `${C}/pt_Arm_Tutorial_22`,
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
      label: 'Início rápido e SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${RS}/pt_reBot_Arm_B601_RS_Getting_Started`, label: 'Início Rápido reBot-RS' },
        { type: 'doc', id: `${RS}/pt_reBot_Arm_B601_RS_Lerobot`, label: 'reBot-RS com LeRobot' },
        { type: 'doc', id: `${RS}/pt_reBot_Arm_B601_RS_pinocchio`, label: 'reBot-RS com Pinocchio' },
        { type: 'doc', id: `${RS}/pt_reBot_Arm_B601_RS_control_mit`, label: 'SDK de Motor reBot-RS' },
      ],
    },
    {
      type: 'category',
      label: 'Aplicações',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${RS}/pt_reBot_Arm_B601_RS_Grasping_Demo`, label: 'reBot-RS com Pega Visual' },
        { type: 'doc', id: `${RS}/pt_reBot_Arm_B601_RS_ROS2_Integration`, label: 'reBot-RS com ROS2' },
        { type: 'doc', id: `${RS}/pt_reBot_Arm_B601_RS_isaacsim`, label: 'reBot-RS com Isaac Sim' },
        { type: 'doc', id: `${RS}/pt_reBot_Arm_B601_RS_Web_Simulator_Developer_Guide`, label: 'reBot-RS com Web Controler' },
        { type: 'doc', id: `${RS}/pt_reBot_Arm_B601_RS_Agent`, label: 'reBot-RS com Agent Claw' },
      ],
    },
    courseLink(),
  ],

  // reBot-DM: Quick Start & SDK / Applications / Course (jumps to course).
  RebotDmSidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: 'Início rápido e SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${DM}/pt_reBot_Arm_B601_DM_Getting_Started`, label: 'Início Rápido reBot-DM' },
        { type: 'doc', id: `${DM}/pt_reBot_Arm_B601_DM_Lerobot`, label: 'reBot-DM com LeRobot' },
        { type: 'doc', id: `${DM}/pt_reBot_Arm_B601_DM_pinocchio`, label: 'reBot-DM com Pinocchio' },
      ],
    },
    {
      type: 'category',
      label: 'Aplicações',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${DM}/pt_reBot_Arm_B601_DM_Grasping_Demo`, label: 'Pega Visual reBot-DM' },
        { type: 'doc', id: `${DM}/pt_reBot_Arm_B601_DM_ROS2_Integration`, label: 'reBot-DM com ROS2' },
        { type: 'doc', id: `${DM}/pt_reBot_Arm_B601_DM_isaacsim`, label: 'reBot-DM com Isaac Sim' },
        { type: 'doc', id: `${DM}/pt_reBot_Arm_B601_DM_Web_Simulator_Developer_Guide`, label: 'reBot-DM com Controlador Web' },
      ],
    },
    courseLink(),
  ],

};

module.exports = sidebars;
