// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const K = 'Robotics/Robot_Kits';

const backToRobotics = () => ({
  type: 'ref',
  id: 'ja_Edge_Robotics',
  label: '<-ロボティクスに戻る',
  className: 'sideboard_calss',
});

const sidebars = {

  // Main robotics sidebar. Each product is a `ref` link so that opening a
  // product doc shows that product's own sidebar (see the *Sidebar entries below).
  RoboticsSidebar: [
    {
      type: 'ref',
      id: 'ja_Getting_Started',
      label: '<-Wikiに戻る',
      className: 'sideboard_calss',
    },
    {
      type: 'doc',
      id: 'ja_Edge_Robotics',
      label: 'ロボティクスページ',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: 'ロボットキット',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'ref', id: `${K}/Lerobot/ja_Lerobot_SO100Arm_New`, label: 'SO-ARM101', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/reBot_Arm/B601_DM/ja_reBot_Arm_B601_DM_Getting_Started`, label: 'reBot B601-DM', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/reBot_Arm/B601_RS/ja_reBot_Arm_B601_RS_Getting_Started`, label: 'reBot B601-RS', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/Lerobot/ja_Lerobot_Starai_Arm`, label: 'Star AI Arm', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/Hand/ja_AmazingHand`, label: 'AmazingHand', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/Lerobot/ja_Lerobot_Lekiwi`, label: 'Lekiwi', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/ReachyMini/ja_ReachyMini_Getting_Started`, label: 'ReachyMini', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/StackForce/ja_StackForce_Giant_Bipedal_Wheeled_Robot`, label: '車輪型ロボット', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/Humanoid/Atom-S/ja_Atom-S`, label: 'ヒューマノイドロボット', className: 'sideboard_calss' },
      ]
    },
    {
      type: 'category',
      label: 'アクチュエーター',
      className: 'robotics-section-title',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'HighTorque',
          items: [
            'Robotics/Robot_Actuator/HighTorque/ja_HighTorque',
            'Robotics/Robot_Actuator/HighTorque/ja_HighTorque_Getting_Started',
            'Robotics/Robot_Actuator/HighTorque/ja_HighTorque_Control',
          ]
        },
        'Robotics/Robot_Actuator/ja_Feetech_Servo',
        'Robotics/Robot_Actuator/ja_FashionStar_Servo',
        'Robotics/Robot_Actuator/ja_Stackforce_Series',
        'Robotics/Robot_Actuator/ja_Myactuator_Series',
        'Robotics/Robot_Actuator/ja_Damiao_Series',
        'Robotics/Robot_Actuator/ja_RobStride_Control',
      ]
    },
    {
      type: 'category',
      label: 'センサー',
      className: 'robotics-section-title',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Lidar',
          items: [
            'Robotics/Robot_Sensor/Lidar/ja_Robosense_Lidar',
            'Robotics/Robot_Sensor/Lidar/ja_MID360',
            'Robotics/Robot_Sensor/Lidar/ja_A_Loam',
            'Robotics/Robot_Sensor/Lidar/ja_SLAMTEC',
          ]
        },
        {
          type: 'category',
          label: 'カメラ',
          items: [
            'Robotics/Robot_Sensor/Camera/ja_Getting_Start_with_AC1',
            'Robotics/Robot_Sensor/Camera/ja_Getting_Start_with_Orbbec_Gemini2_3D_Camera',
            'Robotics/Robot_Sensor/Camera/ja_Getting_Start_with_Orbbec_Gemini_336',
            'Robotics/Robot_Sensor/Camera/ja_Orbbec_Depth_Camera',
            'Robotics/Robot_Sensor/Camera/ja_realsense_3D_seg',
            'Robotics/Robot_Sensor/Camera/ja_ORB_SLAM3_with_Orbbec_Gemini2',
            'Robotics/Robot_Sensor/Camera/ja_Pycuvslam_On_reComputer',
            'Robotics/Robot_Sensor/Camera/ja_Orbbec_Gemini_335Lg',
            'Robotics/Robot_Sensor/Camera/ja_Sensing_GMSL_Camera',
            'Robotics/Robot_Sensor/Camera/ja_CSI_Camera'
          ]
        },
        {
          type: 'category',
          label: 'IMU',
          items: [
            'Robotics/Robot_Sensor/IMU/ja_Hexfellow_Y200',
            'Robotics/Robot_Sensor/IMU/ja_WHEELTEC_IMU',
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'ソフトウェア',
      className: 'robotics-section-title',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'ROS',
          items: [
            'Robotics/Robot_Software/ROS/ja_Installing_ROS1',
            'Robotics/Robot_Software/ROS/ja_Install_IsaacROS',
            'Robotics/Robot_Software/ROS/ja_Install_ROS2_Humble',
            'Robotics/Robot_Software/ROS/ja_Isaac_ROS_AprilTag',
            'Robotics/Robot_Software/ROS/ja_Isaac_ROS_Visual_SLAM',
          ]
        },
        {
          type: 'category',
          label: 'Isaac Lab',
          items: [
            'Robotics/Robot_Software/Isaac_Lab/ja_Install_Isaac_lab',
            'Robotics/Robot_Software/Isaac_Lab/ja_Simulate_SoArm101_by_LeIsaac',
            'Robotics/Robot_Software/Isaac_Lab/ja_Training_SoARM101_Policy_with_IsaacLab',
          ]
        },
        {
          type: 'category',
          label: 'PX4',
          items: [
            'Robotics/Robot_Software/PX4/ja_Control_PX4_with_reComputer_Jetson',
            'Robotics/Robot_Software/PX4/ja_Object_Tracking_with_reComputer_Jetson_and_PX4',
          ]
        },
        'Robotics/Robot_Software/VLA/ja_control_robotic_arm_via_gr00t',
        'Robotics/Robot_Software/ja_control_robotic_arm_via_phospho',
      ]
    },

  ],

  // ---- Independent product sidebars (opened when browsing each product's docs) ----

  SoArm101Sidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: 'クイックスタートとツール',
      collapsible: false,
      collapsed: false,
      items: [
        { type: 'doc', id: `${K}/Lerobot/ja_Lerobot_SO100Arm_New` },
        `${K}/Lerobot/ja_Steering_Gear_Debugging_Tool`,
        `${K}/Lerobot/ja_Lerobot_Dataset_Tool`,
      ],
    },
    {
      type: 'category',
      label: 'アプリケーション',
      collapsible: false,
      collapsed: false,
      items: [
        `${K}/Lerobot/ja_Complete_Guide_to_Double-Arm_SO-ARM_Training`,
        `${K}/Lerobot/ja_SOARM101_XIAO_MicroROS_Wireless_Teleoperation`,
        `${K}/Lerobot/ja_Fine_tune_GR00T_N1.5_for_LeRobot_SO_Arm_and_Deploy_on_Jetson_Thor`,
        `${K}/Lerobot/ja_Lerobot_SO_ARM101_DAMO`,
      ],
    },
  ],

  LekiwiSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/Lerobot/ja_Lerobot_Lekiwi` },
    `${K}/Lerobot/ja_Sound_Follow_Robot_Powered_by_reSpeaker_and_Lekiwi`,
  ],

  AmazingHandSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/Hand/ja_AmazingHand` },
    `${K}/Lerobot/ja_SOARM_AMAZINGHAND_TELEOP`,
  ],

  StarAiSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/Lerobot/ja_Lerobot_Starai_Arm` },
    `${K}/Lerobot/ja_Starai_Arm_ROS2_Moveit`,
  ],

  ReachyMiniSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/ReachyMini/ja_ReachyMini_Getting_Started`, label: 'はじめに' },
    {
      type: 'category',
      label: '開発事例',
      collapsible: false,
      collapsed: false,
      items: [
        { type: 'doc', id: `${K}/ReachyMini/development_cases/ja_home_assistant`, label: 'Home Assistant 連携' },
        { type: 'doc', id: `${K}/ReachyMini/development_cases/ja_reachymini_voice_control_soarm`, label: 'SO-ARM用Reachy Mini音声制御' },
        { type: 'doc', id: `${K}/ReachyMini/development_cases/ja_reachymini_sway_screen`, label: 'Reachy Mini 画面モーション制御' },
      ],
    },
    {
      type: 'category',
      label: 'Reachy Mini（ワイヤレス）',
      collapsible: false,
      collapsed: false,
      items: [
        { type: 'doc', id: `${K}/ReachyMini/platforms/reachy_mini/ja_get_started`, label: 'はじめに' },
      ],
    },
    {
      type: 'category',
      label: 'Reachy Mini Lite',
      collapsible: false,
      collapsed: false,
      items: [
        { type: 'doc', id: `${K}/ReachyMini/platforms/reachy_mini_lite/ja_get_started`, label: 'はじめに' },
      ],
    },
  ],

  StackForceSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/StackForce/ja_StackForce_Giant_Bipedal_Wheeled_Robot` },
    `${K}/StackForce/ja_StackForce_Mini_Wheeled_Legged_Robot`,
  ],

  AtomSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/Humanoid/Atom-S/ja_Atom-S` },
    `${K}/Humanoid/Atom-X/ja_Atom-X`,
  ],

};

module.exports = sidebars;
