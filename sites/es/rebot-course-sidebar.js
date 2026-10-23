// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const C = 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial';
const RS = 'Robotics/Robot_Kits/reBot_Arm/B601_RS';
const DM = 'Robotics/Robot_Kits/reBot_Arm/B601_DM';
const P = 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading';

const backToRobotics = () => ({
  type: 'ref',
  id: 'es_Edge_Robotics',
  label: '<-Volver a Robótica',
  className: 'sideboard_calss',
});

// `items` lets a caller add entries (the reBot-RS sidebar adds the DLI course); the default
// keeps the beginner-course jump that every product's Course group starts with.
const courseItems = () => [
  {
    type: 'ref',
    id: `${C}/es_Arm_Tutorial_Introduction`,
    label: 'Curso para principiantes',
  },
];

const courseLink = (items = courseItems()) => ({
  type: 'category',
  label: 'Curso',
  className: 'robotics-section-title',
  collapsed: false,
  collapsible: false,
  items,
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
    label: 'Etapa 5: Matemáticas del brazo robótico y control de movimiento',
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
  {
    type: 'category',
    label: 'Etapa 7: ROS2 e integración de sistemas robóticos',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/es_Arm_Tutorial_31`,
      `${C}/es_Arm_Tutorial_32`,
      `${C}/es_Arm_Tutorial_33`,
      `${C}/es_Arm_Tutorial_34`,
    ],
  },
  {
    type: 'category',
    label: 'Etapa 8: Simulación de brazos robóticos con MuJoCo e Isaac Sim',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/es_Arm_Tutorial_35`,
      `${C}/es_Arm_Tutorial_36`,
      `${C}/es_Arm_Tutorial_37`,
      `${C}/es_Arm_Tutorial_38`,
      `${C}/es_Arm_Tutorial_39`,
    ],
  },
];

const sidebars = {

  // Standalone course sidebar.
  RebotCourseSidebar: courseSidebar(),

  PaperReadingSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${P}/es_Paper_Reading_Getting_Started`, label: 'Primeros pasos' },
    {
      type: 'category',
      label: 'Despliegue práctico',
      className: 'robotics-section-title robotics-course-sidebar hands-on-reproduction-sidebar',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${P}/es_Paper_Reading_02_Hardware_and_Teleoperation`, label: 'Configuración de Hardware y Software' },
        { type: 'doc', id: `${P}/es_Paper_Reading_03_Task_Design`, label: 'Diseño de tareas y planificación de demostraciones' },
        { type: 'doc', id: `${P}/es_Paper_Reading_04_Camera_and_Recording`, label: 'Recopilación de datos multivista' },
        { type: 'doc', id: `${P}/es_Paper_Reading_05_Dataset_Quality`, label: 'Calidad de Datos: Estructura, Sincronización y Validación' },
        { type: 'doc', id: `${P}/es_Paper_Reading_06_ACT_Training`, label: 'Entrenamiento del modelo ACT' },
        { type: 'doc', id: `${P}/es_Paper_Reading_07_ACT_Deployment`, label: 'Despliegue en Robot y Evaluación del Rendimiento' },
        { type: 'doc', id: `${P}/es_Paper_Reading_08_Algorithm_Switching`, label: 'Cambio de Políticas y Ejecución de Tareas' },
      ],
    },
    {
      type: 'category',
      label: 'Análisis profundos de artículos',
      className: 'robotics-section-title robotics-course-sidebar paper-reading-sidebar',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Parte 1 · Fragmentación de acciones y políticas multitarea',
          className: 'robotics-section-title',
          collapsed: false,
          collapsible: false,
          items: [
            { type: 'doc', id: `${P}/es_Paper_Reading_ACT`, label: 'ACT — Manipulación Bimanual de Bajo Costo' },
          ],
        },
        {
          type: 'category',
          label: 'Parte 2 · Modelos VLA ligeros y despliegue eficiente',
          className: 'robotics-section-title',
          collapsed: false,
          collapsible: false,
          items: [
            { type: 'doc', id: `${P}/es_Paper_Reading_SMOLVLA`, label: 'SmolVLA — Modelos de Visión-Lenguaje-Acción Asequibles' },
            { type: 'doc', id: `${P}/es_Paper_Reading_EVO1`, label: 'Evo-1 — VLA ligero' },
          ],
        },
        {
          type: 'category',
          label: 'Parte 3 · Modelos fundacionales robóticos π',
          className: 'robotics-section-title',
          collapsed: false,
          collapsible: false,
          items: [
            { type: 'doc', id: `${P}/es_Paper_Reading_PI0`, label: 'π₀ — Control Robótico de Propósito General' },
            { type: 'doc', id: `${P}/es_Paper_Reading_PI0_FAST`, label: 'π₀-FAST — Tokenización de acciones eficiente' },
            { type: 'doc', id: `${P}/es_Paper_Reading_PI05`, label: 'π₀.₅ — Generalización en Mundo Abierto' },
          ],
        },
        {
          type: 'category',
          label: 'Parte 4 · VLA generalista y adaptación entre morfologías',
          className: 'robotics-section-title',
          collapsed: false,
          collapsible: false,
          items: [
            { type: 'doc', id: `${P}/es_Paper_Reading_GR00T_N1`, label: 'NVIDIA GR00T — Adaptación y Fine-Tuning' },
            { type: 'doc', id: `${P}/es_Paper_Reading_EO1`, label: 'EO-1 — Preentrenamiento Multimodal Intercalado' },
            { type: 'doc', id: `${P}/es_Paper_Reading_WALL_OSS`, label: 'WALL-OSS — Razonamiento Encarnado y Control de Robots' },
          ],
        },
        {
          type: 'html',
          className: 'robotics-section-title',
          value: '<span class="menu__link" role="heading" aria-level="3" style="cursor: default">Parte 5 · Modelos de mundo y aprendizaje de video-acción</span>',
        },
        {
          type: 'html',
          className: 'robotics-section-title',
          value: '<span class="menu__link" role="heading" aria-level="3" style="cursor: default">Parte 6 · Evaluación unificada y resumen de investigación</span>',
        },
      ],
    },
  ],

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
        { type: 'link', label: 'VLA sin código: plataforma SenseCraft Robotics', href: 'https://wiki.seeedstudio.com/es/sensecraft_robotics_rebot_arm_102_b601_rs/' },
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
        { type: 'doc', id: `${RS}/es_reBot_Arm_B601_RS_Web_Simulator_Developer_Guide`, label: 'Sistema de control web de reBot-RS: robot real y MuJoCo' },
        { type: 'doc', id: `${RS}/es_reBot_Arm_B601_RS_Agent`, label: 'reBot-RS con Agent Claw' },
      ],
    },
    courseLink([
      ...courseItems(),
      { type: 'link', label: 'Curso DLI: Pipeline VLA Sim-to-Real', href: 'https://www.seeedstudio.com/sim-to-real-with-seeed-rebot-and-nvidia-isaac' },
    ])
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
        { type: 'link', label: 'VLA sin código: plataforma SenseCraft Robotics', href: 'https://wiki.seeedstudio.com/es/sensecraft_robotics_rebot_arm_102_b601_dm/' },
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
        { type: 'doc', id: `${DM}/es_reBot_Arm_B601_DM_Web_Simulator_Developer_Guide`, label: 'Sistema de control web de reBot-DM: robot real y MuJoCo' },
      ],
    },
    courseLink(),
  ],

};

module.exports = sidebars;
