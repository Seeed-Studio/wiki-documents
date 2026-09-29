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
        { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_Getting_Started', label: 'reBot-RS 快速入门' },
        { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_Lerobot', label: 'reBot-RS 与 LeRobot' },
        { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_pinocchio', label: 'reBot-RS 与 Pinocchio' },
        { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_control_mit', label: 'reBot-RS 电机 SDK' },
      ],
    },
    {
      type: 'category',
      label: '应用',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_Grasping_Demo', label: 'reBot-RS 视觉夹取' },
        { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_ROS2_Integration', label: 'reBot-RS 与 ROS2' },
        { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_isaacsim', label: 'reBot-RS 与 Isaac Sim' },
        { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_Web_Simulator_Developer_Guide', label: 'reBot-RS Web 仿真器' },
        { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_Agent', label: 'reBot-RS 与 Agent Claw' },
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
        { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/B601_DM/cn_reBot_Arm_B601_DM_Getting_Started', label: 'reBot-DM 快速入门' },
        { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/B601_DM/cn_reBot_Arm_B601_DM_Lerobot', label: 'reBot-DM 与 LeRobot' },
        { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/B601_DM/cn_reBot_Arm_B601_DM_pinocchio', label: 'reBot-DM 与 Pinocchio' },
      ],
    },
    {
      type: 'category',
      label: '应用',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/B601_DM/cn_reBot_Arm_B601_DM_Grasping_Demo', label: 'reBot-DM 视觉夹取' },
        { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/B601_DM/cn_reBot_Arm_B601_DM_ROS2_Integration', label: 'reBot-DM 与 ROS2' },
        { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/B601_DM/cn_reBot_Arm_B601_DM_isaacsim', label: 'reBot-DM 与 Isaac Sim' },
        { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/B601_DM/cn_reBot_Arm_B601_DM_Web_Simulator_Developer_Guide', label: 'reBot-DM Web 仿真器' },
      ],
    },
  ],

};

module.exports = sidebars;
