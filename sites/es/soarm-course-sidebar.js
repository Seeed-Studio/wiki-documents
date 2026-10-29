// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const C = 'Robotics/Robot_Kits/SO_ARM101/Courses/SO_ARM_Tutorial';

const backToRobotics = () => ({
  type: 'ref',
  id: 'es_Edge_Robotics',
  label: '<-Volver a Robótica',
  className: 'sideboard_calss',
});

// Barra lateral independiente del curso (se abre al navegar por las páginas del curso).
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
    label: 'Etapa 2: Ensamblaje del SO-ARM y control básico',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/es_Arm_Tutorial_04`,
      `${C}/es_Arm_Tutorial_05`,
      `${C}/es_Arm_Tutorial_06`,
      `${C}/es_Arm_Tutorial_07`,
    ],
  },
  {
    type: 'category',
    label: 'Etapa 3: Aprendizaje por imitación y LeRobot',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/es_Arm_Tutorial_08`,
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
    label: 'Etapa 4: VLA — Isaac GR00T y SenseCraft sin código',
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
];

// Entrada de salto para el grupo «Curso» de la barra lateral del producto (usada por robotics-sidebar.js).
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

const sidebars = {

  // Barra lateral independiente del curso.
  SoArmCourseSidebar: courseSidebar(),

};

module.exports = sidebars;

// Exportación adicional (no enumerable, para no filtrarse al expandir en sidebars.js).
Object.defineProperty(module.exports, 'courseLink', {
  value: courseLink,
  enumerable: false,
});
