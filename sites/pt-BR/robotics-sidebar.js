// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const K = 'Robotics/Robot_Kits';

const backToRobotics = () => ({
  type: 'ref',
  id: 'pt_Edge_Robotics',
  label: '<-Voltar para Robótica',
  className: 'sideboard_calss',
});

const sidebars = {

  // Sidebar principal de robótica. Cada produto é um link `ref` para que, ao
  // abrir a doc de um produto, seja exibida a sidebar própria daquele produto
  // (veja as entradas *Sidebar abaixo).
  RoboticsSidebar: [
    {
      type: 'ref',
      id: 'pt_Getting_Started',
      label: '<-Voltar ao Wiki',
      className: 'sideboard_calss',
    },
    {
      type: 'doc',
      id: 'pt_Edge_Robotics',
      label: 'Página de robótica',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: 'Kits de robô',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'ref', id: `${K}/Lerobot/pt_Lerobot_SO100Arm_New`, label: 'SO-ARM101', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/reBot_Arm/B601_DM/pt_reBot_Arm_B601_DM_Getting_Started`, label: 'reBot B601-DM', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_Getting_Started`, label: 'reBot B601-RS', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/Lerobot/pt_Lerobot_Starai_Arm`, label: 'Star AI Arm', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/Hand/pt_AmazingHand`, label: 'AmazingHand', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/Lerobot/pt_Lerobot_Lekiwi`, label: 'Lekiwi', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/ReachyMini/pt_ReachyMini_Getting_Started`, label: 'ReachyMini', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/StackForce/pt_StackForce_Giant_Bipedal_Wheeled_Robot`, label: 'Robô com rodas', className: 'sideboard_calss' },
        { type: 'ref', id: `${K}/Humanoid/Atom-S/pt_Atom-S`, label: 'Robô humanoide', className: 'sideboard_calss' },
      ]
    },
    {
      type: 'category',
      label: 'Atuador',
      className: 'robotics-section-title',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'HighTorque',
          items: [
            'Robotics/Robot_Actuator/HighTorque/pt_HighTorque',
            'Robotics/Robot_Actuator/HighTorque/pt_HighTorque_Getting_Started',
            'Robotics/Robot_Actuator/HighTorque/pt_HighTorque_Control',
          ]
        },
        'Robotics/Robot_Actuator/pt_Feetech_Servo',
        'Robotics/Robot_Actuator/pt_FashionStar_Servo',
        'Robotics/Robot_Actuator/pt_Stackforce_Series',
        'Robotics/Robot_Actuator/pt_Myactuator_Series',
        'Robotics/Robot_Actuator/pt_Damiao_Series',
        'Robotics/Robot_Actuator/pt_RobStride_Control',
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
            'Robotics/Robot_Sensor/Lidar/pt_Robosense_Lidar',
            'Robotics/Robot_Sensor/Lidar/pt_MID360',
            'Robotics/Robot_Sensor/Lidar/pt_A_Loam',
            'Robotics/Robot_Sensor/Lidar/pt_SLAMTEC',
          ]
        },
        {
          type: 'category',
          label: 'Câmera',
          items: [
            'Robotics/Robot_Sensor/Camera/pt_Getting_Start_with_AC1',
            'Robotics/Robot_Sensor/Camera/pt_Getting_Start_with_Orbbec_Gemini2_3D_Camera',
            'Robotics/Robot_Sensor/Camera/pt_Getting_Start_with_Orbbec_Gemini_336',
            'Robotics/Robot_Sensor/Camera/pt_Orbbec_Depth_Camera',
            'Robotics/Robot_Sensor/Camera/pt_realsense_3D_seg',
            'Robotics/Robot_Sensor/Camera/pt_ORB_SLAM3_with_Orbbec_Gemini2',
            'Robotics/Robot_Sensor/Camera/pt_Pycuvslam_On_reComputer',
            'Robotics/Robot_Sensor/Camera/pt_Orbbec_Gemini_335Lg',
            'Robotics/Robot_Sensor/Camera/pt_Sensing_GMSL_Camera',
            'Robotics/Robot_Sensor/Camera/pt_CSI_Camera'
          ]
        },
        {
          type: 'category',
          label: 'IMU',
          items: [
            'Robotics/Robot_Sensor/IMU/pt_Hexfellow_Y200',
            'Robotics/Robot_Sensor/IMU/pt_WHEELTEC_IMU',
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
            'Robotics/Robot_Software/ROS/pt_Installing_ROS1',
            'Robotics/Robot_Software/ROS/pt_Install_IsaacROS',
            'Robotics/Robot_Software/ROS/pt_Install_ROS2_Humble',
            'Robotics/Robot_Software/ROS/pt_Isaac_ROS_AprilTag',
            'Robotics/Robot_Software/ROS/pt_Isaac_ROS_Visual_SLAM',
          ]
        },
        {
          type: 'category',
          label: 'Isaac Lab',
          items: [
            'Robotics/Robot_Software/Isaac_Lab/pt_Install_Isaac_lab',
            'Robotics/Robot_Software/Isaac_Lab/pt_Simulate_SoArm101_by_LeIsaac',
            'Robotics/Robot_Software/Isaac_Lab/pt_Training_SoARM101_Policy_with_IsaacLab',
          ]
        },
        {
          type: 'category',
          label: 'PX4',
          items: [
            'Robotics/Robot_Software/PX4/pt_Control_PX4_with_reComputer_Jetson',
            'Robotics/Robot_Software/PX4/pt_Object_Tracking_with_reComputer_Jetson_and_PX4',
          ]
        },
        'Robotics/Robot_Software/VLA/pt_control_robotic_arm_via_gr00t',
        'Robotics/Robot_Software/pt_control_robotic_arm_via_phospho',
      ]
    },

  ],

  // ---- Sidebars independentes de cada produto (abertas ao navegar pela doc do produto) ----

  SoArm101Sidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: 'Início rápido e ferramentas',
      collapsible: false,
      collapsed: false,
      items: [
        { type: 'doc', id: `${K}/Lerobot/pt_Lerobot_SO100Arm_New` },
        `${K}/Lerobot/pt_Steering_Gear_Debugging_Tool`,
        `${K}/Lerobot/pt_Lerobot_Dataset_Tool`,
      ],
    },
    {
      type: 'category',
      label: 'Aplicações',
      collapsible: false,
      collapsed: false,
      items: [
        `${K}/Lerobot/pt_Complete_Guide_to_Double-Arm_SO-ARM_Training`,
        `${K}/Lerobot/pt_SOARM101_XIAO_MicroROS_Wireless_Teleoperation`,
        `${K}/Lerobot/pt_Fine_tune_GR00T_N1.5_for_LeRobot_SO_Arm_and_Deploy_on_Jetson_Thor`,
        `${K}/Lerobot/pt_Lerobot_SO_ARM101_DAMO`,
      ],
    },
  ],

  LekiwiSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/Lerobot/pt_Lerobot_Lekiwi` },
    `${K}/Lerobot/pt_Sound_Follow_Robot_Powered_by_reSpeaker_and_Lekiwi`,
  ],

  AmazingHandSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/Hand/pt_AmazingHand` },
    `${K}/Lerobot/pt_SOARM_AMAZINGHAND_TELEOP`,
  ],

  StarAiSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/Lerobot/pt_Lerobot_Starai_Arm` },
    `${K}/Lerobot/pt_Starai_Arm_ROS2_Moveit`,
  ],

  ReachyMiniSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/ReachyMini/pt_ReachyMini_Getting_Started`, label: 'Primeiros passos' },
    {
      type: 'category',
      label: 'Casos de desenvolvimento',
      collapsible: false,
      collapsed: false,
      items: [
        { type: 'doc', id: `${K}/ReachyMini/development_cases/pt_home_assistant`, label: 'Integração com Home Assistant' },
        { type: 'doc', id: `${K}/ReachyMini/development_cases/pt_reachymini_voice_control_soarm`, label: 'Controle por voz do Reachy Mini para o SO-ARM' },
        { type: 'doc', id: `${K}/ReachyMini/development_cases/pt_reachymini_sway_screen`, label: 'Reachy Mini controle de movimento de tela' },
      ],
    },
    {
      type: 'category',
      label: 'Reachy Mini (sem fio)',
      collapsible: false,
      collapsed: false,
      items: [
        { type: 'doc', id: `${K}/ReachyMini/platforms/reachy_mini/pt_get_started`, label: 'Primeiros passos' },
      ],
    },
    {
      type: 'category',
      label: 'Reachy Mini Lite',
      collapsible: false,
      collapsed: false,
      items: [
        { type: 'doc', id: `${K}/ReachyMini/platforms/reachy_mini_lite/pt_get_started`, label: 'Primeiros passos' },
      ],
    },
  ],

  StackForceSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/StackForce/pt_StackForce_Giant_Bipedal_Wheeled_Robot` },
    `${K}/StackForce/pt_StackForce_Mini_Wheeled_Legged_Robot`,
  ],

  AtomSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${K}/Humanoid/Atom-S/pt_Atom-S` },
    `${K}/Humanoid/Atom-X/pt_Atom-X`,
  ],

};

module.exports = sidebars;
