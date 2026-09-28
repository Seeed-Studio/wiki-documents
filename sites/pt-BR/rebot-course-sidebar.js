// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  RebotCourseSidebar: [
    {
      type: 'ref',
      id: 'pt_Edge_Robotics',
      label: '<-Voltar para Robótica',
      className: 'sideboard_calss',
    },
    {
      type: 'doc',
      id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/pt_Arm_Tutorial_Introduction',
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
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/pt_Arm_Tutorial_01',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/pt_Arm_Tutorial_02',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/pt_Arm_Tutorial_03',
        },
      ],
    },
    {
      type: 'category',
      label: 'Fase 2: Montagem do Braço Robótico e Controle Básico',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/pt_Arm_Tutorial_04',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/pt_Arm_Tutorial_05',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/pt_Arm_Tutorial_06',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/pt_Arm_Tutorial_07',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/pt_Arm_Tutorial_08',
        },
      ],
    },
    {
      type: 'category',
      label: 'Fase 3: Aprendizado por Imitação e LeRobot',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/pt_Arm_Tutorial_09',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/pt_Arm_Tutorial_10',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/pt_Arm_Tutorial_11',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/pt_Arm_Tutorial_12',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/pt_Arm_Tutorial_13',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/pt_Arm_Tutorial_14',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/pt_Arm_Tutorial_15',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/pt_Arm_Tutorial_16',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/pt_Arm_Tutorial_17',
        },
      ],
    },
  ],

  RebotRsSidebar: [
    {
      type: 'ref',
      id: 'pt_Edge_Robotics',
      label: '<-Voltar para Robótica',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: 'Início rápido e SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_Getting_Started',
        'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_Lerobot',
        'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_pinocchio',
        'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_control_mit',
      ],
    },
    {
      type: 'category',
      label: 'Aplicações',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_Grasping_Demo',
        'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_ROS2_Integration',
        'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_isaacsim',
        'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_Web_Simulator_Developer_Guide',
        'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_Agent',
      ],
    },
    {
      type: 'category',
      label: 'Curso',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'ref',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/pt_Arm_Tutorial_Introduction',
          label: 'Curso para iniciantes',
        },
      ],
    },
  ],

  RebotDmSidebar: [
    {
      type: 'ref',
      id: 'pt_Edge_Robotics',
      label: '<-Voltar para Robótica',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: 'Início rápido e SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        'Robotics/Robot_Kits/reBot_Arm/B601_DM/pt_reBot_Arm_B601_DM_Getting_Started',
        'Robotics/Robot_Kits/reBot_Arm/B601_DM/pt_reBot_Arm_B601_DM_Lerobot',
        'Robotics/Robot_Kits/reBot_Arm/B601_DM/pt_reBot_Arm_B601_DM_pinocchio',
      ],
    },
    {
      type: 'category',
      label: 'Aplicações',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        'Robotics/Robot_Kits/reBot_Arm/B601_DM/pt_reBot_Arm_B601_DM_Grasping_Demo',
        'Robotics/Robot_Kits/reBot_Arm/B601_DM/pt_reBot_Arm_B601_DM_ROS2_Integration',
        'Robotics/Robot_Kits/reBot_Arm/B601_DM/pt_reBot_Arm_B601_DM_isaacsim',
        'Robotics/Robot_Kits/reBot_Arm/B601_DM/pt_reBot_Arm_B601_DM_Web_Simulator_Developer_Guide',
      ],
    },
    {
      type: 'category',
      label: 'Curso',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'ref',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/pt_Arm_Tutorial_Introduction',
          label: 'Curso para iniciantes',
        },
      ],
    },
  ],

};

module.exports = sidebars;
