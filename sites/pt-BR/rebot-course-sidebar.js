// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const C = 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial';
const RS = 'Robotics/Robot_Kits/reBot_Arm/B601_RS';
const DM = 'Robotics/Robot_Kits/reBot_Arm/B601_DM';
const P = 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading';

const backToRobotics = () => ({
  type: 'ref',
  id: 'pt_Edge_Robotics',
  label: '<-Voltar para Robótica',
  className: 'sideboard_calss',
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
  {
    type: 'category',
    label: 'Fase 5: Matemática do Braço Robótico e Controle de Movimento',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/pt_Arm_Tutorial_23`,
      `${C}/pt_Arm_Tutorial_24`,
      `${C}/pt_Arm_Tutorial_25`,
      `${C}/pt_Arm_Tutorial_26`,
    ],
  },
  {
    type: 'category',
    label: 'Fase 6: Visão Robótica e Preensão Autônoma',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/pt_Arm_Tutorial_27`,
      `${C}/pt_Arm_Tutorial_28`,
      `${C}/pt_Arm_Tutorial_29`,
      `${C}/pt_Arm_Tutorial_30`,
    ],
  },
  {
    type: 'category',
    label: 'Fase 7: ROS2 e Integração de Sistemas Robóticos',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/pt_Arm_Tutorial_31`,
      `${C}/pt_Arm_Tutorial_32`,
      `${C}/pt_Arm_Tutorial_33`,
      `${C}/pt_Arm_Tutorial_34`,
    ],
  },
  {
    type: 'category',
    label: 'Fase 8: Simulação de Braços Robóticos com MuJoCo e Isaac Sim',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/pt_Arm_Tutorial_35`,
      `${C}/pt_Arm_Tutorial_36`,
      `${C}/pt_Arm_Tutorial_37`,
      `${C}/pt_Arm_Tutorial_38`,
      `${C}/pt_Arm_Tutorial_39`,
    ],
  },
];

const sidebars = {

  // Standalone course sidebar.
  RebotCourseSidebar: courseSidebar(),

  PaperReadingSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${P}/pt_Paper_Reading_Getting_Started`, label: 'Primeiros passos' },
    {
      type: 'category',
      label: 'Implantação prática',
      className: 'robotics-section-title robotics-course-sidebar hands-on-reproduction-sidebar',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${P}/pt_Paper_Reading_02_Hardware_and_Teleoperation`, label: 'Configuração de Hardware e Software' },
        { type: 'doc', id: `${P}/pt_Paper_Reading_03_Task_Design`, label: 'Planejamento de Projeto de Tarefa e Demonstração' },
        { type: 'doc', id: `${P}/pt_Paper_Reading_04_Camera_and_Recording`, label: 'Coleta de Dados Multi-View' },
        { type: 'doc', id: `${P}/pt_Paper_Reading_05_Dataset_Quality`, label: 'Qualidade dos Dados: Estrutura, Sincronização e Validação' },
        { type: 'doc', id: `${P}/pt_Paper_Reading_06_ACT_Training`, label: 'Treinamento de Modelo ACT' },
        { type: 'doc', id: `${P}/pt_Paper_Reading_07_ACT_Deployment`, label: 'Implantação no Robô e Avaliação de Desempenho' },
        { type: 'doc', id: `${P}/pt_Paper_Reading_08_Algorithm_Switching`, label: 'Troca de Políticas & Execução de Tarefas' },
      ],
    },
    {
      type: 'category',
      label: 'Análises detalhadas de artigos',
      className: 'robotics-section-title robotics-course-sidebar paper-reading-sidebar',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Parte 1 · Action Chunking & Políticas Multi-Tarefa',
          className: 'robotics-section-title',
          collapsed: false,
          collapsible: false,
          items: [
            { type: 'doc', id: `${P}/pt_Paper_Reading_ACT`, label: 'ACT — Manipulação Bimanual de Baixo Custo' },
          ],
        },
        {
          type: 'category',
          label: 'Parte 2 · Modelos VLA Leves & Implantação Eficiente',
          className: 'robotics-section-title',
          collapsed: false,
          collapsible: false,
          items: [
            { type: 'doc', id: `${P}/pt_Paper_Reading_SMOLVLA`, label: 'SmolVLA — Modelos de Visão-Linguagem-Ação Acessíveis' },
            { type: 'doc', id: `${P}/pt_Paper_Reading_EVO1`, label: 'Evo-1 — VLA leve' },
          ],
        },
        {
          type: 'category',
          label: 'Parte 3 · Modelos Fundamentais de Robótica π',
          className: 'robotics-section-title',
          collapsed: false,
          collapsible: false,
          items: [
            { type: 'doc', id: `${P}/pt_Paper_Reading_PI0`, label: 'π₀ — Controle Robótico de Uso Geral' },
            { type: 'doc', id: `${P}/pt_Paper_Reading_PI0_FAST`, label: 'π₀-FAST — Tokenização de Ações Eficiente' },
            { type: 'doc', id: `${P}/pt_Paper_Reading_PI05`, label: 'π₀.₅ — Generalização em Mundo Aberto' },
          ],
        },
        {
          type: 'category',
          label: 'Parte 4 · VLA Generalista & Adaptação Entre Corpos',
          className: 'robotics-section-title',
          collapsed: false,
          collapsible: false,
          items: [
            { type: 'doc', id: `${P}/pt_Paper_Reading_GR00T_N1`, label: 'NVIDIA GR00T — Adaptação e Fine-Tuning' },
            { type: 'doc', id: `${P}/pt_Paper_Reading_EO1`, label: 'EO-1 — Pré-treinamento Multimodal Intercalado' },
            { type: 'doc', id: `${P}/pt_Paper_Reading_WALL_OSS`, label: 'WALL-OSS — Raciocínio Incorporado & Controle de Robôs' },
          ],
        },
        {
          type: 'html',
          className: 'robotics-section-title',
          value: '<span class="menu__link" role="heading" aria-level="3" style="cursor: default">Parte 5 · Modelos de Mundo &amp; Aprendizado Vídeo-Ação</span>',
        },
        {
          type: 'html',
          className: 'robotics-section-title',
          value: '<span class="menu__link" role="heading" aria-level="3" style="cursor: default">Parte 6 · Avaliação Unificada &amp; Resumo da Pesquisa</span>',
        },
      ],
    },
  ],

  // reBot-RS: Quick Start & SDK / Applications / Course (jumps to course).
  RebotRsSidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: 'Curso',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
    {
      type: 'ref',
      id: `${C}/pt_Arm_Tutorial_Introduction`,
      label: 'Curso para Iniciantes',
    },
    {
      type: 'ref',
      id: `${P}/pt_Paper_Reading_Getting_Started`,
      label: 'Análise Detalhada de Artigos',
    },
    {
      type: 'link',
      label: 'Do Simulado ao Real com NVIDIA Isaac',
      href: 'https://www.seeedstudio.com/sim-to-real-with-seeed-rebot-and-nvidia-isaac',
    },
      ],
    },
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
        { type: 'link', label: 'VLA sem código: plataforma SenseCraft Robotics', href: 'https://wiki.seeedstudio.com/pt-br/sensecraft_robotics_rebot_arm_102_b601_rs/' },
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
        { type: 'doc', id: `${RS}/pt_reBot_Arm_B601_RS_Web_Simulator_Developer_Guide`, label: 'Sistema de Controle Web do reBot-RS: Robô Real e MuJoCo' },
        { type: 'doc', id: `${RS}/pt_reBot_Arm_B601_RS_Agent`, label: 'reBot-RS com Agent Claw' },
      ],
    },
  ],

  // reBot-DM: Quick Start & SDK / Applications.
  RebotDmSidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: 'Curso',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
    {
      type: 'ref',
      id: `${C}/pt_Arm_Tutorial_Introduction`,
      label: 'Curso para Iniciantes',
    },
    {
      type: 'ref',
      id: `${P}/pt_Paper_Reading_Getting_Started`,
      label: 'Análise Detalhada de Artigos',
    },
      ],
    },
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
        { type: 'link', label: 'VLA sem código: plataforma SenseCraft Robotics', href: 'https://wiki.seeedstudio.com/pt-br/sensecraft_robotics_rebot_arm_102_b601_dm/' },
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
        { type: 'doc', id: `${DM}/pt_reBot_Arm_B601_DM_Web_Simulator_Developer_Guide`, label: 'Sistema de Controle Web do reBot-DM: Robô Real e MuJoCo' },
      ],
    },
  ],

};

module.exports = sidebars;
