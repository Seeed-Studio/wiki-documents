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
          label: 'Chapter 1: Getting to Know Robots and Embodied Intelligence',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/Arm_Tutorial_02',
          label: 'Chapter 2: reBot Arm Hardware and the Open-Source Project',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/Arm_Tutorial_03',
          label: 'Chapter 3: Hardware Selection for Subsequent Courses',
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
          label: 'Chapter 4: Fundamentals of Robotic Arms and Joint Actuators',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/Arm_Tutorial_05',
          label: 'Chapter 5: CAN Bus and Motor Communication',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/Arm_Tutorial_06',
          label: 'Chapter 6: Assembly, Power Supply, and First Power-On',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/Arm_Tutorial_07',
          label: 'Chapter 7: MotorBridge Motor Control Library',
        },
        {
          type: 'doc',
          id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/Arm_Tutorial_08',
          label: 'Chapter 8: Controlling reBot Arm Using Python SDK',
        },
      ],
    },
  ],

};

module.exports = sidebars;
