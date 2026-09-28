// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const K = 'Robotics/Robot_Kits';

const backToRobotics = () => ({
  type: 'ref',
  id: 'es_Edge_Robotics',
  label: '<-Volver a Robótica',
  className: 'sideboard_calss',
});

const sidebars = {

  // Barra lateral principal de robótica. Cada producto es un enlace `ref` para que,
  // al abrir la documentación de un producto, se muestre la barra lateral propia de ese producto
  // (véanse las entradas *Sidebar de más abajo).
  RoboticsSidebar: [
    {
      type: 'ref',
      id: 'es_Getting_Started',
      label: '<-Volver al Wiki',
      className: 'sideboard_calss',
    },
    {
      type: 'doc',
      id: 'es_Edge_Robotics',
      label: 'Página de Robótica',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: 'Kits de Robot',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'ref', id: `${K}/Lerobot/es_Lerobot_SO100Arm_New`, label: 'SO-ARM101', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/reBot_Arm/B601_DM/es_reBot_Arm_B601_DM_Getting_Started`, label: 'reBot B601-DM', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/reBot_Arm/B601_RS/es_reBot_Arm_B601_RS_Getting_Started`, label: 'reBot B601-RS', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/Lerobot/es_Lerobot_Starai_Arm`, label: 'Star AI Arm', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/Hand/es_AmazingHand`, label: 'AmazingHand', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/Lerobot/es_Lerobot_Lekiwi`, label: 'Lekiwi', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/ReachyMini/es_ReachyMini_Getting_Started`, label: 'ReachyMini', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/StackForce/es_StackForce_Giant_Bipedal_Wheeled_Robot`, label: 'Robot con ruedas', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/Humanoid/Atom-S/es_Atom-S`, label: 'Robot humanoide', className: 'sideboard_calss' },
      ]
    },
    {
      type: 'category',
      label: 'Actuador',
      className: 'robotics-section-title',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'HighTorque',
          items: [
            'Robotics/Robot_Actuator/HighTorque/es_HighTorque',
            'Robotics/Robot_Actuator/HighTorque/es_HighTorque_Getting_Started',
            'Robotics/Robot_Actuator/HighTorque/es_HighTorque_Control',
          ]
        },
        'Robotics/Robot_Actuator/es_Feetech_Servo',
        'Robotics/Robot_Actuator/es_FashionStar_Servo',
        'Robotics/Robot_Actuator/es_Stackforce_Series',
        'Robotics/Robot_Actuator/es_Myactuator_Series',
        'Robotics/Robot_Actuator/es_Damiao_Series',
        'Robotics/Robot_Actuator/es_RobStride_Control',
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
            'Robotics/Robot_Sensor/Lidar/es_Robosense_Lidar',
            'Robotics/Robot_Sensor/Lidar/es_MID360',
            'Robotics/Robot_Sensor/Lidar/es_A_Loam',
            'Robotics/Robot_Sensor/Lidar/es_SLAMTEC',
          ]
        },
        {
          type: 'category',
          label: 'Cámara',
          items: [
            'Robotics/Robot_Sensor/Camera/es_Getting_Start_with_AC1',
            'Robotics/Robot_Sensor/Camera/es_Getting_Start_with_Orbbec_Gemini2_3D_Camera',
            'Robotics/Robot_Sensor/Camera/es_Getting_Start_with_Orbbec_Gemini_336',
            'Robotics/Robot_Sensor/Camera/es_Orbbec_Depth_Camera',
            'Robotics/Robot_Sensor/Camera/es_realsense_3D_seg',
            'Robotics/Robot_Sensor/Camera/es_ORB_SLAM3_with_Orbbec_Gemini2',
            'Robotics/Robot_Sensor/Camera/es_Pycuvslam_On_reComputer',
            'Robotics/Robot_Sensor/Camera/es_Orbbec_Gemini_335Lg',
            'Robotics/Robot_Sensor/Camera/es_Sensing_GMSL_Camera',
            'Robotics/Robot_Sensor/Camera/es_CSI_Camera'
          ]
        },
        {
          type: 'category',
          label: 'IMU',
          items: [
            'Robotics/Robot_Sensor/IMU/es_Hexfellow_Y200',
            'Robotics/Robot_Sensor/IMU/es_WHEELTEC_IMU',
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
            'Robotics/Robot_Software/ROS/es_Installing_ROS1',
            'Robotics/Robot_Software/ROS/es_Install_IsaacROS',
            'Robotics/Robot_Software/ROS/es_Install_ROS2_Humble',
            'Robotics/Robot_Software/ROS/es_Isaac_ROS_AprilTag',
            'Robotics/Robot_Software/ROS/es_Isaac_ROS_Visual_SLAM',
          ]
        },
        {
          type: 'category',
          label: 'Isaac Lab',
          items: [
            'Robotics/Robot_Software/Isaac_Lab/es_Install_Isaac_lab',
            'Robotics/Robot_Software/Isaac_Lab/es_Simulate_SoArm101_by_LeIsaac',
            'Robotics/Robot_Software/Isaac_Lab/es_Training_SoARM101_Policy_with_IsaacLab',
          ]
        },
        {
          type: 'category',
          label: 'PX4',
          items: [
            'Robotics/Robot_Software/PX4/es_Control_PX4_with_reComputer_Jetson',
            'Robotics/Robot_Software/PX4/es_Object_Tracking_with_reComputer_Jetson_and_PX4',
          ]
        },
        'Robotics/Robot_Software/VLA/es_control_robotic_arm_via_gr00t',
        'Robotics/Robot_Software/es_control_robotic_arm_via_phospho',
      ]
    },

  ],

  // ---- Barras laterales independientes por producto (se abren al navegar por la documentación de cada producto) ----

  SoArm101Sidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: 'Inicio rápido y herramientas',
      collapsible: false,
      collapsed: false,
      items: [
        { type: 'doc', id: `${K}/Lerobot/es_Lerobot_SO100Arm_New` },
        `${K}/Lerobot/es_Steering_Gear_Debugging_Tool`,
        `${K}/Lerobot/es_Lerobot_Dataset_Tool`,
      ],
    },
    {
      type: 'category',
      label: 'Aplicaciones',
      collapsible: false,
      collapsed: false,
      items: [
        `${K}/Lerobot/es_Complete_Guide_to_Double-Arm_SO-ARM_Training`,
        `${K}/Lerobot/es_SOARM101_XIAO_MicroROS_Wireless_Teleoperation`,
        `${K}/Lerobot/es_Fine_tune_GR00T_N1.5_for_LeRobot_SO_Arm_and_Deploy_on_Jetson_Thor`,
        `${K}/Lerobot/es_Lerobot_SO_ARM101_DAMO`,
      ],
    },
  ],

  LekiwiSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/Lerobot/es_Lerobot_Lekiwi` },
    `${K}/Lerobot/es_Sound_Follow_Robot_Powered_by_reSpeaker_and_Lekiwi`,
  ],

  AmazingHandSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/Hand/es_AmazingHand` },
    `${K}/Lerobot/es_SOARM_AMAZINGHAND_TELEOP`,
  ],

  StarAiSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/Lerobot/es_Lerobot_Starai_Arm` },
    `${K}/Lerobot/es_Starai_Arm_ROS2_Moveit`,
  ],

  ReachyMiniSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/ReachyMini/es_ReachyMini_Getting_Started`, label: 'Primeros pasos' },
    {
      type: 'category',
      label: 'Casos de desarrollo',
      collapsible: false,
      collapsed: false,
      items: [
        { type: 'doc', id: `${K}/ReachyMini/development_cases/es_home_assistant`, label: 'Integración con Home Assistant' },
        { type: 'doc', id: `${K}/ReachyMini/development_cases/es_reachymini_voice_control_soarm`, label: 'Control por voz de Reachy Mini para SO-ARM' },
        { type: 'doc', id: `${K}/ReachyMini/development_cases/es_reachymini_sway_screen`, label: 'Control de movimiento de la pantalla de Reachy Mini' },
      ],
    },
    {
      type: 'category',
      label: 'Reachy Mini (inalámbrico)',
      collapsible: false,
      collapsed: false,
      items: [
        { type: 'doc', id: `${K}/ReachyMini/platforms/reachy_mini/es_get_started`, label: 'Primeros pasos' },
      ],
    },
    {
      type: 'category',
      label: 'Reachy Mini Lite',
      collapsible: false,
      collapsed: false,
      items: [
        { type: 'doc', id: `${K}/ReachyMini/platforms/reachy_mini_lite/es_get_started`, label: 'Primeros pasos' },
      ],
    },
  ],

  StackForceSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/StackForce/es_StackForce_Giant_Bipedal_Wheeled_Robot` },
    `${K}/StackForce/es_StackForce_Mini_Wheeled_Legged_Robot`,
  ],

  AtomSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/Humanoid/Atom-S/es_Atom-S` },
    `${K}/Humanoid/Atom-X/es_Atom-X`,
  ],

};

module.exports = sidebars;
