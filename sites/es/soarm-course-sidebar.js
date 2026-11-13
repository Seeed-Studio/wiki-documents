// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const C = 'Robotics/Robot_Kits/SO_ARM101/Courses/SO_ARM_Tutorial';
const V = 'Robotics/Robot_Kits/SO_ARM101/Courses/SO_ARM_Sim2Real_VLA';

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
// Barra lateral propia del curso Sim-to-Real VLA.
const sim2RealVlaSidebar = () => [
  backToRobotics(),

  {
    type: 'doc',
    id: `${V}/es_Sim2Real_VLA_Introduction`,
    label: 'Introducción del curso',
    className: 'sideboard_calss',
  },
  {
    type: 'category',
    label: '1. Overview',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${V}/es_Sim2Real_VLA_01`,
      `${V}/es_Sim2Real_VLA_02`,
      `${V}/es_Sim2Real_VLA_03`,
      `${V}/es_Sim2Real_VLA_04`,
      `${V}/es_Sim2Real_VLA_05`,
    ],
  },
  {
    type: 'category',
    label: '2. Construye tu laboratorio de robótica',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${V}/es_Sim2Real_VLA_06`,
      `${V}/es_Sim2Real_VLA_07`,
      `${V}/es_Sim2Real_VLA_08`,
    ],
  },
  {
    type: 'category',
    label: '3. Obtén tu propio modelo VLA',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${V}/es_Sim2Real_VLA_09`,
      `${V}/es_Sim2Real_VLA_10`,
      `${V}/es_Sim2Real_VLA_11`,
      `${V}/es_Sim2Real_VLA_12`,
      `${V}/es_Sim2Real_VLA_13`,
    ],
  },
  {
    type: 'category',
    label: '4. Despliegue en Jetson',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${V}/es_Sim2Real_VLA_14`,
      `${V}/es_Sim2Real_VLA_15`,
      `${V}/es_Sim2Real_VLA_16`,
      `${V}/es_Sim2Real_VLA_17`,
      `${V}/es_Sim2Real_VLA_18`,
    ],
  },
  {
    type: 'category',
    label: '5. Referencias',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${V}/es_Sim2Real_VLA_19`,
    ],
  },
];

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
    {
      type: 'ref',
      id: 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/es_Paper_Reading_Getting_Started',
      label: 'Análisis profundo de artículos',
    },
    {
      type: 'ref',
      id: `${V}/es_Sim2Real_VLA_Introduction`,
      label: 'Sim-to-Real VLA',
    },
  ],
});

const sidebars = {

  // Barra lateral independiente del curso.
  SoArmCourseSidebar: courseSidebar(),
  SoArmSim2RealVlaSidebar: sim2RealVlaSidebar(),

};

module.exports = sidebars;

// Exportación adicional (no enumerable, para no filtrarse al expandir en sidebars.js).
Object.defineProperty(module.exports, 'courseLink', {
  value: courseLink,
  enumerable: false,
});
