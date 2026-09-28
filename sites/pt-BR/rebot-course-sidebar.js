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

  // reBot B601-RS: Quick Start & SDK / Applications / Course (jumps to course).
  RebotRsSidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: 'Início rápido e SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        `${RS}/pt_reBot_Arm_B601_RS_Getting_Started`,
        `${RS}/pt_reBot_Arm_B601_RS_Lerobot`,
        `${RS}/pt_reBot_Arm_B601_RS_pinocchio`,
        `${RS}/pt_reBot_Arm_B601_RS_control_mit`,
      ],
    },
    {
      type: 'category',
      label: 'Aplicações',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        `${RS}/pt_reBot_Arm_B601_RS_Grasping_Demo`,
        `${RS}/pt_reBot_Arm_B601_RS_ROS2_Integration`,
        `${RS}/pt_reBot_Arm_B601_RS_isaacsim`,
        `${RS}/pt_reBot_Arm_B601_RS_Web_Simulator_Developer_Guide`,
        `${RS}/pt_reBot_Arm_B601_RS_Agent`,
      ],
    },
    courseLink(),
  ],

  // reBot B601-DM: Quick Start & SDK / Applications / Course (jumps to course).
  RebotDmSidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: 'Início rápido e SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        `${DM}/pt_reBot_Arm_B601_DM_Getting_Started`,
        `${DM}/pt_reBot_Arm_B601_DM_Lerobot`,
        `${DM}/pt_reBot_Arm_B601_DM_pinocchio`,
      ],
    },
    {
      type: 'category',
      label: 'Aplicações',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        `${DM}/pt_reBot_Arm_B601_DM_Grasping_Demo`,
        `${DM}/pt_reBot_Arm_B601_DM_ROS2_Integration`,
        `${DM}/pt_reBot_Arm_B601_DM_isaacsim`,
        `${DM}/pt_reBot_Arm_B601_DM_Web_Simulator_Developer_Guide`,
      ],
    },
    courseLink(),
  ],

};

module.exports = sidebars;