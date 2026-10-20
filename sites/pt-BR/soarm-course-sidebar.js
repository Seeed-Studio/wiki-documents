// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const C = 'Robotics/Robot_Kits/SO_ARM101/Courses/SO_ARM_Tutorial';

const backToRobotics = () => ({
  type: 'ref',
  id: 'pt_Edge_Robotics',
  label: '<-Voltar para Robótica',
  className: 'sideboard_calss',
});

// Barra lateral independente do curso (aberta ao navegar pelas páginas do curso).
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
    label: 'Fase 2: Montagem do SO-ARM e Controle Básico',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/pt_Arm_Tutorial_04`,
      `${C}/pt_Arm_Tutorial_05`,
      `${C}/pt_Arm_Tutorial_06`,
      `${C}/pt_Arm_Tutorial_07`,
    ],
  },
  {
    type: 'category',
    label: 'Fase 3: Aprendizado por Imitação e LeRobot',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/pt_Arm_Tutorial_08`,
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
    label: 'Fase 4: VLA — Isaac GR00T e SenseCraft sem código',
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

// Entrada de salto para o grupo «Curso» da barra lateral do produto (usada por robotics-sidebar.js).
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

const sidebars = {

  // Barra lateral independente do curso.
  SoArmCourseSidebar: courseSidebar(),

};

module.exports = sidebars;

// Exportação adicional (não enumerável, para não vazar ao expandir em sidebars.js).
Object.defineProperty(module.exports, 'courseLink', {
  value: courseLink,
  enumerable: false,
});
