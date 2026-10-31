// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const C = 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial';
const RS = 'Robotics/Robot_Kits/reBot_Arm/B601_RS';
const DM = 'Robotics/Robot_Kits/reBot_Arm/B601_DM';
const PAPER_READING = 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/cn_Paper_Reading_Getting_Started';

const backToRobotics = () => ({
  type: 'ref',
  id: 'cn_Edge_Robotics',
  label: '<-返回机器人页面',
  className: 'sideboard_calss',
});

// 课程自己的独立侧边栏（浏览课程页面时展开）。
const courseSidebar = () => [
  backToRobotics(),

  {
    type: 'doc',
    id: `${C}/cn_Arm_Tutorial_Introduction`,
    label: '课程介绍',
    className: 'sideboard_calss',
  },
  {
    type: 'category',
    label: '第一阶段：基本概念与教具准备',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/cn_Arm_Tutorial_01`,
      `${C}/cn_Arm_Tutorial_02`,
      `${C}/cn_Arm_Tutorial_03`,
    ],
  },
  {
    type: 'category',
    label: '第二阶段：机械臂组装与基础控制',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/cn_Arm_Tutorial_04`,
      `${C}/cn_Arm_Tutorial_05`,
      `${C}/cn_Arm_Tutorial_06`,
      `${C}/cn_Arm_Tutorial_07`,
      `${C}/cn_Arm_Tutorial_08`,
    ],
  },
  {
    type: 'category',
    label: '第三阶段：模仿学习与 LeRobot',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/cn_Arm_Tutorial_09`,
      `${C}/cn_Arm_Tutorial_10`,
      `${C}/cn_Arm_Tutorial_11`,
      `${C}/cn_Arm_Tutorial_12`,
      `${C}/cn_Arm_Tutorial_13`,
      `${C}/cn_Arm_Tutorial_14`,
      `${C}/cn_Arm_Tutorial_15`,
      `${C}/cn_Arm_Tutorial_16`,
      `${C}/cn_Arm_Tutorial_17`,
    ],
  },
  {
    type: 'category',
    label: '第四阶段：VLA 与 Isaac GR00T',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/cn_Arm_Tutorial_18`,
      `${C}/cn_Arm_Tutorial_19`,
      `${C}/cn_Arm_Tutorial_20`,
      `${C}/cn_Arm_Tutorial_21`,
      `${C}/cn_Arm_Tutorial_22`,
    ],
  },
  {
    type: 'category',
    label: '第五阶段：机械臂数学与运动控制',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/cn_Arm_Tutorial_23`,
      `${C}/cn_Arm_Tutorial_24`,
      `${C}/cn_Arm_Tutorial_25`,
      `${C}/cn_Arm_Tutorial_26`,
    ],
  },
  {
    type: 'category',
    label: '第六阶段：机器人视觉与自主抓取',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/cn_Arm_Tutorial_27`,
      `${C}/cn_Arm_Tutorial_28`,
      `${C}/cn_Arm_Tutorial_29`,
      `${C}/cn_Arm_Tutorial_30`,
    ],
  },
  {
    type: 'category',
    label: '第七阶段：ROS2 与机器人系统集成',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/cn_Arm_Tutorial_31`,
      `${C}/cn_Arm_Tutorial_32`,
      `${C}/cn_Arm_Tutorial_33`,
      `${C}/cn_Arm_Tutorial_34`,
    ],
  },
  {
    type: 'category',
    label: '第八阶段：MuJoCo 与 Isaac Sim 机械臂仿真',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/cn_Arm_Tutorial_35`,
      `${C}/cn_Arm_Tutorial_36`,
      `${C}/cn_Arm_Tutorial_37`,
      `${C}/cn_Arm_Tutorial_38`,
      `${C}/cn_Arm_Tutorial_39`,
    ],
  },
];

const sidebars = {

  // 独立课程侧边栏。
  RebotCourseSidebar: courseSidebar(),

  PaperReadingSidebar: [
    backToRobotics(),
    { type: 'doc', id: PAPER_READING, label: '快速开始' },
    {
      type: 'category',
      label: '手把手复现',
      className: 'robotics-section-title robotics-course-sidebar hands-on-reproduction-sidebar',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/cn_Paper_Reading_02_Hardware_and_Teleoperation', label: '软件设置和硬件' },
        { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/cn_Paper_Reading_03_Task_Design', label: '设计第一个模仿学习任务' },
        { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/cn_Paper_Reading_04_Camera_and_Recording', label: '相机配置与数据录制' },
        { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/cn_Paper_Reading_05_Dataset_Quality', label: '数据集结构与质量检查' },
        { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/cn_Paper_Reading_06_ACT_Training', label: '训练 ACT 模型' },
        { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/cn_Paper_Reading_07_ACT_Deployment', label: '部署 ACT 模型' },
        { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/cn_Paper_Reading_08_Algorithm_Switching', label: '从 ACT 切换到其他策略（reBot / SO101）' },
      ],
    },
    {
      type: 'category',
      label: '论文精读',
      className: 'robotics-section-title robotics-course-sidebar paper-reading-sidebar',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'category',
          label: '第一部分：模仿学习基础策略',
          className: 'robotics-section-title',
          collapsed: false,
          collapsible: false,
          items: [
            { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/cn_Paper_Reading_ACT', label: 'ACT 论文精读' },
          ],
        },
        {
          type: 'category',
          label: '第二部分：轻量级 VLA',
          className: 'robotics-section-title',
          collapsed: false,
          collapsible: false,
          items: [
            { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/cn_Paper_Reading_SMOLVLA', label: 'SmolVLA 论文精读' },
            { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/cn_Paper_Reading_EVO1', label: 'Evo-1 论文精读' },
          ],
        },
        // 已迁移文章使用分类；尚无文章的部分保留标题。
        {
          type: 'category',
          label: '第三部分：π 系列机器人基础模型',
          className: 'robotics-section-title',
          collapsed: false,
          collapsible: false,
          items: [
            { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/cn_Paper_Reading_PI0', label: 'π0 论文精读' },
            { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/cn_Paper_Reading_PI0_FAST', label: 'FAST / π0-FAST 论文精读' },
            { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/cn_Paper_Reading_PI05', label: 'π0.5 论文精读' },
          ],
        },
        {
          type: 'category',
          label: '第四部分：主流通用 VLA',
          className: 'robotics-section-title',
          collapsed: false,
          collapsible: false,
          items: [
            { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/cn_Paper_Reading_GR00T_N1', label: 'GR00T N1 论文精读' },
            { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/cn_Paper_Reading_EO1', label: 'EO-1 论文精读' },
            { type: 'doc', id: 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/cn_Paper_Reading_WALL_OSS', label: 'WALL-OSS 论文精读' },
          ],
        },
        {
          type: 'html',
          className: 'robotics-section-title',
          value: '<span class="menu__link" role="heading" aria-level="3" style="cursor: default">第五部分：世界模型与 Video-Action</span>',
        },
        {
          type: 'html',
          className: 'robotics-section-title',
          value: '<span class="menu__link" role="heading" aria-level="3" style="cursor: default">第六部分：统一评测与研究总结</span>',
        },
      ],
    },
  ],

  // reBot-RS：快速上手与 SDK / 应用。
  RebotRsSidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: '课程',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
    {
      type: 'ref',
      id: `${C}/cn_Arm_Tutorial_Introduction`,
      label: '入门课程',
    },
    {
      type: 'ref',
      id: `${PAPER_READING}`,
      label: '论文精读',
    },
    {
      type: 'link',
      label: 'Sim-to-Real with NVIDIA Isaac',
      href: 'https://www.seeedstudio.com/sim-to-real-with-seeed-rebot-and-nvidia-isaac',
    },
      ],
    },
    {
      type: 'category',
      label: '快速上手与 SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${RS}/cn_reBot_Arm_B601_RS_Getting_Started`, label: 'reBot-RS 快速入门' },
        { type: 'doc', id: `${RS}/cn_reBot_Arm_B601_RS_Lerobot`, label: 'reBot-RS 与 LeRobot' },
        { type: 'doc', id: `${RS}/cn_reBot_Arm_B601_RS_pinocchio`, label: 'reBot-RS 与 Pinocchio' },
        { type: 'doc', id: `${RS}/cn_reBot_Arm_B601_RS_control_mit`, label: 'reBot-RS 电机 SDK' },
        { type: 'link', label: '无码化上手VLA：SenseCraft Robotics 平台', href: 'https://wiki.seeedstudio.com/cn/sensecraft_robotics_rebot_arm_102_b601_rs/' },
      ],
    },
    {
      type: 'category',
      label: '应用',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${RS}/cn_reBot_Arm_B601_RS_Grasping_Demo`, label: 'reBot-RS 视觉夹取' },
        { type: 'doc', id: `${RS}/cn_reBot_Arm_B601_RS_ROS2_Integration`, label: 'reBot-RS 与 ROS2' },
        { type: 'doc', id: `${RS}/cn_reBot_Arm_B601_RS_isaacsim`, label: 'reBot-RS 与 Isaac Sim' },
        { type: 'doc', id: `${RS}/cn_reBot_Arm_B601_RS_Web_Simulator_Developer_Guide`, label: 'reBot-RS Web控制系统：真机与 MuJoCo' },
        { type: 'doc', id: `${RS}/cn_reBot_Arm_B601_RS_Agent`, label: 'reBot-RS 与 Agent Claw' },
      ],
    },
  ],

  // reBot-DM：快速上手与 SDK / 应用。
  RebotDmSidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: '课程',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
    {
      type: 'ref',
      id: `${C}/cn_Arm_Tutorial_Introduction`,
      label: '入门课程',
    },
    {
      type: 'ref',
      id: `${PAPER_READING}`,
      label: '论文精读',
    },
      ],
    },
    {
      type: 'category',
      label: '快速上手与 SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${DM}/cn_reBot_Arm_B601_DM_Getting_Started`, label: 'reBot-DM 快速入门' },
        { type: 'doc', id: `${DM}/cn_reBot_Arm_B601_DM_Lerobot`, label: 'reBot-DM 与 LeRobot' },
        { type: 'doc', id: `${DM}/cn_reBot_Arm_B601_DM_pinocchio`, label: 'reBot-DM 与 Pinocchio' },
        { type: 'link', label: '无码化上手VLA：SenseCraft Robotics 平台', href: 'https://wiki.seeedstudio.com/cn/sensecraft_robotics_rebot_arm_102_b601_dm/' },
      ],
    },
    {
      type: 'category',
      label: '应用',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${DM}/cn_reBot_Arm_B601_DM_Grasping_Demo`, label: 'reBot-DM 视觉夹取' },
        { type: 'doc', id: `${DM}/cn_reBot_Arm_B601_DM_ROS2_Integration`, label: 'reBot-DM 与 ROS2' },
        { type: 'doc', id: `${DM}/cn_reBot_Arm_B601_DM_isaacsim`, label: 'reBot-DM 与 Isaac Sim' },
        { type: 'doc', id: `${DM}/cn_reBot_Arm_B601_DM_Web_Simulator_Developer_Guide`, label: 'reBot-DM Web控制系统：真机与 MuJoCo' },
      ],
    },
  ],

};

module.exports = sidebars;
