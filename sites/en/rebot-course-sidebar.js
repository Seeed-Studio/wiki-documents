// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  RebotCourseSidebar: [
    {
      type: 'ref',
      id: 'Edge_Robotics',
      label: '<-Back to Robotics',
      className: 'sideboard_calss',
    },
    {
      type: 'doc',
      id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/Arm_Tutorial_Introduction',
      label: 'Course Introduction',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: 'Stage 1: Basic Concepts and Equipment Preparation',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/Arm_Tutorial_01',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/Arm_Tutorial_02',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/Arm_Tutorial_03',
        },
      ],
    },
    {
      type: 'category',
      label: 'Stage 2: Robotic Arm Assembly and Basic Control',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/Arm_Tutorial_04',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/Arm_Tutorial_05',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/Arm_Tutorial_06',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/Arm_Tutorial_07',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/Arm_Tutorial_08',
        },
      ],
    },
  ],

};

module.exports = sidebars;
