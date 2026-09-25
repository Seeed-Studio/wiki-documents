// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  RebotRsSidebar: [
    {
      type: 'ref',
      id: 'cn_Edge_Robotics',
      label: '<-返回机器人页面',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: '快速上手与 SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_Getting_Started',
        'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_Lerobot',
        'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_pinocchio',
        'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_control_mit',
      ],
    },
    {
      type: 'category',
      label: '应用',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_Grasping_Demo',
        'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_ROS2_Integration',
        'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_isaacsim',
        'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_Web_Simulator_Developer_Guide',
        'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_Agent',
      ],
    },
  ],

  RebotDmSidebar: [
    {
      type: 'ref',
      id: 'cn_Edge_Robotics',
      label: '<-返回机器人页面',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: '快速上手与 SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        'Robotics/Robot_Kits/reBot_Arm/B601_DM/cn_reBot_Arm_B601_DM_Getting_Started',
        'Robotics/Robot_Kits/reBot_Arm/B601_DM/cn_reBot_Arm_B601_DM_Lerobot',
        'Robotics/Robot_Kits/reBot_Arm/B601_DM/cn_reBot_Arm_B601_DM_pinocchio',
      ],
    },
    {
      type: 'category',
      label: '应用',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        'Robotics/Robot_Kits/reBot_Arm/B601_DM/cn_reBot_Arm_B601_DM_Grasping_Demo',
        'Robotics/Robot_Kits/reBot_Arm/B601_DM/cn_reBot_Arm_B601_DM_ROS2_Integration',
        'Robotics/Robot_Kits/reBot_Arm/B601_DM/cn_reBot_Arm_B601_DM_isaacsim',
        'Robotics/Robot_Kits/reBot_Arm/B601_DM/cn_reBot_Arm_B601_DM_Web_Simulator_Developer_Guide',
      ],
    },
  ],

};

module.exports = sidebars;
