// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const K = 'Robotics/Robot_Kits';

const backToRobotics = () => ({
  type: 'ref',
  id: 'cn_Edge_Robotics',
  label: '<-返回机器人页面',
  className: 'sideboard_calss',
});

const sidebars = {

  // Main robotics sidebar. Each product is a `ref` link so that opening a
  // product doc shows that product's own sidebar (see the *Sidebar entries below).
  RoboticsSidebar: [
    {
      type: 'ref',
      id: 'cn_Getting_Started',
      label: '<-返回Wiki中心',
      className: 'sideboard_calss',
    },
    {
      type: 'doc',
      id: 'cn_Edge_Robotics',
      label: '机器人页面',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: '机器人套件',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'ref', id: `${K}/Lerobot/cn_Lerobot_SO100Arm_New`, label: 'SO-ARM101', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/reBot_Arm/B601_DM/cn_reBot_Arm_B601_DM_Getting_Started`, label: 'reBot B601-DM', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_Getting_Started`, label: 'reBot B601-RS', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/Lerobot/cn_Lerobot_Starai_Arm`, label: 'StarAI Arm', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/Hand/cn_AmazingHand`, label: '灵巧手', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/Lerobot/cn_Lerobot_Lekiwi`, label: 'Lekiwi', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/ReachyMini/cn_ReachyMini_Getting_Started`, label: 'ReachyMini', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/StackForce/cn_StackForce_Mini_Wheeled_Legged_Robot`, label: '轮足机器人', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/Humanoid/Atom-S/cn_Atom-S`, label: '小型人形机器人', className: 'sideboard_calss' },
      ]
    },
    {
      type: 'category',
      label: '关节电机',
      className: 'robotics-section-title',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: '高擎',
          items: [
            'Robotics/Robot_Actuator/HighTorque/cn_HighTorque',
            'Robotics/Robot_Actuator/HighTorque/cn_HighTorque_Getting_Started',
            'Robotics/Robot_Actuator/HighTorque/cn_HighTorque_Control',
          ]
        },
        'Robotics/Robot_Actuator/cn_Feetech_Servo',
        'Robotics/Robot_Actuator/cn_FashionStar_Servo',
        'Robotics/Robot_Actuator/cn_Stackforce_Series',
        'Robotics/Robot_Actuator/cn_Myactuator_Series',
        'Robotics/Robot_Actuator/cn_Damiao_Series',
        'Robotics/Robot_Actuator/cn_RobStride_Control',
      ]
    },
    {
      type: 'category',
      label: '传感器',
      className: 'robotics-section-title',
      collapsible: false,
      collapsed: false,
      // link: {
      //   type: "doc",
      //   id: 'Edge/NVIDIA_Jetson/Application',
      // },
      items: [
        {
          type: 'category',
          label: '激光雷达',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/Robotics',
          // },
          items: [
            'Robotics/Robot_Sensor/Lidar/cn_Robosense_Lidar',
            'Robotics/Robot_Sensor/Lidar/cn_MID360',
            'Robotics/Robot_Sensor/Lidar/cn_A_Loam',
            'Robotics/Robot_Sensor/Lidar/cn_SLAMTEC',
          ]
        },
        {
          type: 'category',
          label: '摄像头',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/Robotics',
          // },
          items: [
            'Robotics/Robot_Sensor/Camera/cn_Getting_Start_with_AC1',
            'Robotics/Robot_Sensor/Camera/cn_Getting_Start_with_Orbbec_Gemini_336',
            'Robotics/Robot_Sensor/Camera/cn_Getting_Start_with_Orbbec_Gemini2_3D_Camera',
            'Robotics/Robot_Sensor/Camera/cn_Orbbec_Depth_Camera',
            'Robotics/Robot_Sensor/Camera/cn_realsense_3D_seg',
            'Robotics/Robot_Sensor/Camera/cn_ORB_SLAM3_with_Orbbec_Gemini2',
            'Robotics/Robot_Sensor/Camera/cn_Pycuvslam_On_reComputer',
            'Robotics/Robot_Sensor/Camera/cn_Orbbec_Gemini_335Lg',
            'Robotics/Robot_Sensor/Camera/cn_Sensing_GMSL_Camera',
            'Robotics/Robot_Sensor/Camera/cn_CSI_Camera',
          ]
        },
        {
          type: 'category',
          label: 'IMU',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/Robotics',
          // },
          items: [
            'Robotics/Robot_Sensor/IMU/cn_Hexfellow_Y200',
            'Robotics/Robot_Sensor/IMU/cn_WHEELTEC_IMU',
          ]
        },
      ]
    },
    {
      type: 'category',
      label: '软件',
      className: 'robotics-section-title',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'ROS',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/Robotics',
          // },
          items: [
            "Robotics/Robot_Software/ROS/cn_Installing_ROS1",
            "Robotics/Robot_Software/ROS/cn_Install_IsaacROS",
            "Robotics/Robot_Software/ROS/cn_Install_ROS2_Humble",
            "Robotics/Robot_Software/ROS/cn_Isaac_ROS_AprilTag",
            "Robotics/Robot_Software/ROS/cn_Isaac_ROS_Visual_SLAM",
          ]
        },
        {
          type: 'category',
          label: 'Isaac Lab',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/Robotics',
          // },
          items: [
            'Robotics/Robot_Software/Isaac_Lab/cn_Install_Isaac_lab',
            'Robotics/Robot_Software/Isaac_Lab/cn_Simulate_SoArm101_by_LeIsaac',
            'Robotics/Robot_Software/Isaac_Lab/cn_XiaoPi',
            'Robotics/Robot_Software/Isaac_Lab/cn_Training_SoARM101_Policy_with_IsaacLab',
          ]
        },
        {
          type: 'category',
          label: 'PX4',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/Robotics',
          // },
          items: [
            "Robotics/Robot_Software/PX4/cn_Control_PX4_with_reComputer_Jetson",
            "Robotics/Robot_Software/PX4/cn_Object_Tracking_with_reComputer_Jetson_and_PX4",
          ]
        },
        'Robotics/Robot_Software/VLA/cn_control_robotic_arm_via_gr00t',
        'Robotics/Robot_Software/cn_control_robotic_arm_via_phospho',
      ]
    },

  ],

  // ---- Independent product sidebars (opened when browsing each product's docs) ----

  SoArm101Sidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: '快速开始与工具',
      collapsible: false,
      collapsed: false,
      items: [
        { type: 'doc', id: `${K}/Lerobot/cn_Lerobot_SO100Arm_New` },
        `${K}/Lerobot/cn_Steering_Gear_Debugging_Tool`,
        `${K}/Lerobot/cn_Lerobot_Dataset_Tool`,
      ],
    },
    {
      type: 'category',
      label: '拓展应用',
      collapsible: false,
      collapsed: false,
      items: [
        `${K}/Lerobot/cn_Complete_Guide_to_Double-Arm_SO-ARM_Training`,
        `${K}/Lerobot/cn_SOARM101_XIAO_MicroROS_Wireless_Teleoperation`,
        `${K}/Lerobot/cn_Fine_tune_GR00T_N1.5_for_LeRobot_SO_Arm_and_Deploy_on_Jetson_Thor`,
        `${K}/Lerobot/cn_Lerobot_SO_ARM101_DAMO`,
      ],
    },
  ],

  LekiwiSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/Lerobot/cn_Lerobot_Lekiwi` },
    `${K}/Lerobot/cn_Sound_Follow_Robot_Powered_by_reSpeaker_and_Lekiwi`,
  ],

  AmazingHandSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/Hand/cn_AmazingHand` },
    `${K}/Lerobot/cn_SOARM_AMAZINGHAND_TELEOP`,
  ],

  StarAiSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/Lerobot/cn_Lerobot_Starai_Arm` },
    `${K}/Lerobot/cn_Starai_Arm_ROS2_Moveit`,
  ],

  ReachyMiniSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/ReachyMini/cn_ReachyMini_Getting_Started`, label: '快速入门' },
    {
      type: 'category',
      label: '开发案例集成',
      collapsible: false,
      collapsed: false,
      items: [
        { type: 'doc', id: `${K}/ReachyMini/development_cases/cn_home_assistant`, label: 'Home Assistant 集成' },
        { type: 'doc', id: `${K}/ReachyMini/development_cases/cn_reachymini_voice_control_soarm`, label: 'Reachy Mini 语音控制 SO-ARM' },
        { type: 'doc', id: `${K}/ReachyMini/development_cases/cn_reachymini_sway_screen`, label: 'Reachy Mini 屏幕体感控制' },
      ],
    },
    {
      type: 'category',
      label: 'Reachy Mini (无线版)',
      collapsible: false,
      collapsed: false,
      items: [
        { type: 'doc', id: `${K}/ReachyMini/platforms/reachy_mini/cn_get_started`, label: '快速入门' },
      ],
    },
    {
      type: 'category',
      label: 'Reachy Mini Lite',
      collapsible: false,
      collapsed: false,
      items: [
        { type: 'doc', id: `${K}/ReachyMini/platforms/reachy_mini_lite/cn_get_started`, label: '快速入门' },
      ],
    },
  ],

  StackForceSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/StackForce/cn_StackForce_Mini_Wheeled_Legged_Robot` },
  ],

  AtomSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/Humanoid/Atom-S/cn_Atom-S` },
    `${K}/Humanoid/Atom-X/cn_Atom-X`,
  ],

};

module.exports = sidebars;
