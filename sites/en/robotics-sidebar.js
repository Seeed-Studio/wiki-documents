// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const K = 'Robotics/Robot_Kits';

const backToRobotics = () => ({
  type: 'ref',
  id: 'Edge_Robotics',
  label: '<-Back to Robotics',
  className: 'sideboard_calss',
});

const sidebars = {

  // Main robotics sidebar. Each product is a `ref` link so that opening a
  // product doc shows that product's own sidebar (see the *Sidebar entries below).
  RoboticsSidebar: [
    {
      type: 'ref',
      id: 'Getting_Started',
      label: '<-Back to Wiki',
      className: 'sideboard_calss',
    },
    {
      type: 'doc',
      id: 'Edge_Robotics',
      label: 'Robotics Page',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: 'Robot Kits',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'ref', id: `${K}/Lerobot/Lerobot_SO100Arm_New`, label: 'SO-ARM101', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/reBot_Arm/B601_DM/reBot_Arm_B601_DM_Getting_Started`, label: 'reBot B601-DM', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/reBot_Arm/B601_RS/reBot_Arm_B601_RS_Getting_Started`, label: 'reBot B601-RS', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/Lerobot/Lerobot_Starai_Arm`, label: 'Star AI Arm', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/Hand/AmazingHand`, label: 'AmazingHand', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/Lerobot/Lerobot_Lekiwi`, label: 'Lekiwi', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/ReachyMini/ReachyMini_Getting_Started`, label: 'ReachyMini', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/StackForce/StackForce_Giant_Bipedal_Wheeled_Robot`, label: 'Wheeled Robot', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/Humanoid/Atom-S/Atom-S`, label: 'Humanoid Robot', className: 'sideboard_calss' },
      ]
    },
    {
      type: 'category',
      label: 'Actuator',
      className: 'robotics-section-title',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'HighTorque',
          items: [
            'Robotics/Robot_Actuator/HighTorque/HighTorque',
            'Robotics/Robot_Actuator/HighTorque/HighTorque_Getting_Started',
            'Robotics/Robot_Actuator/HighTorque/HighTorque_Control',
          ]
        },
        'Robotics/Robot_Actuator/Feetech_Servo',
        'Robotics/Robot_Actuator/FashionStar_Servo',
        'Robotics/Robot_Actuator/Stackforce_Series',
        'Robotics/Robot_Actuator/Myactuator_Series',
        'Robotics/Robot_Actuator/Damiao_Series',
        'Robotics/Robot_Actuator/RobStride_Control',
      ]
    },
    {
      type: 'category',
      label: 'Sensor',
      className: 'robotics-section-title',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Lidar',
          items: [
            'Robotics/Robot_Sensor/Lidar/Robosense_Lidar',
            'Robotics/Robot_Sensor/Lidar/MID360',
            'Robotics/Robot_Sensor/Lidar/A_Loam',
            'Robotics/Robot_Sensor/Lidar/SLAMTEC',
          ]
        },
        {
          type: 'category',
          label: 'Camera',
          items: [
            'Robotics/Robot_Sensor/Camera/Getting_Start_with_AC1',
            'Robotics/Robot_Sensor/Camera/Getting_Start_with_Orbbec_Gemini2_3D_Camera',
            'Robotics/Robot_Sensor/Camera/Getting_Start_with_Orbbec_Gemini_336',
            'Robotics/Robot_Sensor/Camera/Orbbec_Depth_Camera',
            'Robotics/Robot_Sensor/Camera/realsense_3D_seg',
            'Robotics/Robot_Sensor/Camera/ORB_SLAM3_with_Orbbec_Gemini2',
            'Robotics/Robot_Sensor/Camera/Pycuvslam_On_reComputer',
            'Robotics/Robot_Sensor/Camera/Orbbec_Gemini_335Lg',
            'Robotics/Robot_Sensor/Camera/Sensing_GMSL_Camera',
            'Robotics/Robot_Sensor/Camera/CSI_Camera'
          ]
        },
        {
          type: 'category',
          label: 'IMU',
          items: [
            'Robotics/Robot_Sensor/IMU/Hexfellow_Y200',
            'Robotics/Robot_Sensor/IMU/WHEELTEC_IMU',
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Software',
      className: 'robotics-section-title',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'ROS',
          items: [
            'Robotics/Robot_Software/ROS/Installing_ROS1',
            'Robotics/Robot_Software/ROS/Install_IsaacROS',
            'Robotics/Robot_Software/ROS/Install_ROS2_Humble',
            'Robotics/Robot_Software/ROS/Isaac_ROS_AprilTag',
            'Robotics/Robot_Software/ROS/Isaac_ROS_Visual_SLAM',
          ]
        },
        {
          type: 'category',
          label: 'Isaac Lab',
          items: [
            'Robotics/Robot_Software/Isaac_Lab/Install_Isaac_lab',
            'Robotics/Robot_Software/Isaac_Lab/Simulate_SoArm101_by_LeIsaac',
            'Robotics/Robot_Software/Isaac_Lab/Training_SoARM101_Policy_with_IsaacLab',
          ]
        },
        {
          type: 'category',
          label: 'PX4',
          items: [
            'Robotics/Robot_Software/PX4/Control_PX4_with_reComputer_Jetson',
            'Robotics/Robot_Software/PX4/Object_Tracking_with_reComputer_Jetson_and_PX4',
          ]
        },
        'Robotics/Robot_Software/VLA/control_robotic_arm_via_gr00t',
        'Robotics/Robot_Software/control_robotic_arm_via_phospho',
      ]
    },

  ],

  // ---- Independent product sidebars (opened when browsing each product's docs) ----

  SoArm101Sidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: 'Quick Start & Tools',
      collapsible: false,
      collapsed: false,
      items: [
        { type: 'doc', id: `${K}/Lerobot/Lerobot_SO100Arm_New` },
        `${K}/Lerobot/Steering_Gear_Debugging_Tool`,
        `${K}/Lerobot/Lerobot_Dataset_Tool`,
      ],
    },
    {
      type: 'category',
      label: 'Applications',
      collapsible: false,
      collapsed: false,
      items: [
        `${K}/Lerobot/Complete_Guide_to_Double-Arm_SO-ARM_Training`,
        `${K}/Lerobot/SOARM101_XIAO_MicroROS_Wireless_Teleoperation`,
        `${K}/Lerobot/Fine_tune_GR00T_N1.5_for_LeRobot_SO_Arm_and_Deploy_on_Jetson_Thor`,
        `${K}/Lerobot/Lerobot_SO_ARM101_DAMO`,
      ],
    },
  ],

  LekiwiSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/Lerobot/Lerobot_Lekiwi` },
    `${K}/Lerobot/Sound_Follow_Robot_Powered_by_reSpeaker_and_Lekiwi`,
  ],

  AmazingHandSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/Hand/AmazingHand` },
    `${K}/Lerobot/SOARM_AMAZINGHAND_TELEOP`,
  ],

  StarAiSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/Lerobot/Lerobot_Starai_Arm` },
    `${K}/Lerobot/Starai_Arm_ROS2_Moveit`,
  ],

  ReachyMiniSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/ReachyMini/ReachyMini_Getting_Started`, label: 'Getting Started' },
    {
      type: 'category',
      label: 'Development Cases',
      collapsible: false,
      collapsed: false,
      items: [
        { type: 'doc', id: `${K}/ReachyMini/development_cases/home_assistant`, label: 'Home Assistant Integration' },
        { type: 'doc', id: `${K}/ReachyMini/development_cases/reachymini_voice_control_soarm`, label: 'Reachy Mini Voice Control for SO-ARM' },
        { type: 'doc', id: `${K}/ReachyMini/development_cases/reachymini_sway_screen`, label: 'Reachy Mini Screen Motion Control' },
      ],
    },
    {
      type: 'category',
      label: 'Reachy Mini (Wireless)',
      collapsible: false,
      collapsed: false,
      items: [
        { type: 'doc', id: `${K}/ReachyMini/platforms/reachy_mini/get_started`, label: 'Getting Started' },
      ],
    },
    {
      type: 'category',
      label: 'Reachy Mini Lite',
      collapsible: false,
      collapsed: false,
      items: [
        { type: 'doc', id: `${K}/ReachyMini/platforms/reachy_mini_lite/get_started`, label: 'Getting Started' },
      ],
    },
  ],

  StackForceSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/StackForce/StackForce_Giant_Bipedal_Wheeled_Robot` },
    `${K}/StackForce/StackForce_Mini_Wheeled_Legged_Robot`,
  ],

  AtomSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/Humanoid/Atom-S/Atom-S` },
    `${K}/Humanoid/Atom-X/Atom-X`,
  ],

};

module.exports = sidebars;
