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

};

module.exports = sidebars;
