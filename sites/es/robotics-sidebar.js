// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

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
        {
          type: 'category',
          label: 'SO-ARM101',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/Robotics',
          // },
          items: [
            'Robotics/Robot_Kits/Lerobot/es_Lerobot_SO100Arm_New',
            'Robotics/Robot_Kits/Lerobot/es_Steering_Gear_Debugging_Tool',
            'Robotics/Robot_Kits/Lerobot/es_Lerobot_Dataset_Tool',
            'Robotics/Robot_Kits/Lerobot/es_Complete_Guide_to_Double-Arm_SO-ARM_Training',
            'Robotics/Robot_Kits/Lerobot/es_SOARM_AMAZINGHAND_TELEOP',
            'Robotics/Robot_Kits/Lerobot/es_Fine_tune_GR00T_N1.5_for_LeRobot_SO_Arm_and_Deploy_on_Jetson_Thor',
            'Robotics/Robot_Kits/Lerobot/es_Lerobot_Lekiwi',
            'Robotics/Robot_Kits/Lerobot/es_SOARM101_XIAO_MicroROS_Wireless_Teleoperation',
            'Robotics/Robot_Kits/Lerobot/es_Sound_Follow_Robot_Powered_by_reSpeaker_and_Lekiwi',
            'Robotics/Robot_Kits/Lerobot/es_Lerobot_SO_ARM101_DAMO',
          ]
        },

        {
          type: 'category',
          label: 'reBot B601-DM',
          items: [
           
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/es_reBot_Arm_B601_DM_Getting_Started',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/es_reBot_Arm_B601_DM_Lerobot',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/es_reBot_Arm_B601_DM_pinocchio',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/es_reBot_Arm_B601_DM_Web_Simulator_Developer_Guide',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/es_reBot_Arm_B601_DM_Grasping_Demo',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/es_reBot_Arm_B601_DM_ROS2_Integration',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/es_reBot_Arm_B601_DM_isaacsim',
                {
                  type: 'ref',
                  id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/es_Arm_Tutorial_Introduction',
                  label: 'Curso de IA incorporada',
                  className: 'sideboard_calss',
                },
          ]
        },
        {
          type: 'category',
          label: 'reBot B601-RS',
          items: [
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/es_reBot_Arm_B601_RS_Getting_Started',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/es_reBot_Arm_B601_RS_Lerobot',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/es_reBot_Arm_B601_RS_pinocchio',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/es_reBot_Arm_B601_RS_control_mit',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/es_reBot_Arm_B601_RS_Web_Simulator_Developer_Guide',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/es_reBot_Arm_B601_RS_Grasping_Demo',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/es_reBot_Arm_B601_RS_ROS2_Integration',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/es_reBot_Arm_B601_RS_isaacsim',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/es_reBot_Arm_B601_RS_Agent',
                {
                  type: 'ref',
                  id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/es_Arm_Tutorial_Introduction',
                  label: 'Curso de IA incorporada',
                  className: 'sideboard_calss',
                },
          ]
        },

        {
          type: 'category',
          label: 'Star AI Arm',
          items: [
            'Robotics/Robot_Kits/Lerobot/es_Lerobot_Starai_Arm',
            'Robotics/Robot_Kits/Lerobot/es_Starai_Arm_ROS2_Moveit',
          ]
        },
        // {
        //   type: 'category',
        //   label: 'End Effectors',
        //   items: [
        //     'Robotics/Robot_Kits/End_Effectors/es_DM_Gripper',
        //   ]
        // },
        
        {
          type: 'category',
          label: 'AmazingHand',
          items: [
            'Robotics/Robot_Kits/Hand/es_AmazingHand',
          ]
        },
        {
          type: 'category',
          label: 'ReachyMini',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/es_intro',
              label: 'Introducción',
            },
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/es_ReachyMini_Getting_Started',
              label: 'Primeros pasos',
            },
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/es_AGENTS',
              label: 'Guía del Agente de IA',
            },
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/es_vibe-code-with-your-agent',
              label: 'Programa con tu agente',
            },
            {
              type: 'category',
              label: 'Casos de desarrollo',
              collapsible: false,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/development_cases/es_home_assistant',
                  label: 'Integración con Home Assistant',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/development_cases/es_reachymini_voice_control_soarm',
                  label: 'Control por voz de Reachy Mini para SO-ARM',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/development_cases/es_reachymini_sway_screen',
                  label: 'Control de movimiento de la pantalla de Reachy Mini',
                },
              ],
            },
            {
              type: 'category',
              label: 'Reachy Mini (inalámbrico)',
              collapsible: false,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/es_get_started',
                  label: 'Primeros pasos',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/es_usage',
                  label: 'Uso',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/es_hardware',
                  label: 'Hardware',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/es_media_advanced_controls',
                  label: 'Controles avanzados de medios',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/es_reset',
                  label: 'Restablecer',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/es_install_daemon_from_branch',
                  label: 'Instalar daemon desde una rama',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/es_development_workflow',
                  label: 'Flujo de trabajo de desarrollo',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/es_reflash_the_rpi_ISO',
                  label: 'Volver a grabar la ISO',
                },
              ],
            },
            {
              type: 'category',
              label: 'Reachy Mini Lite',
              collapsible: false,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/es_get_started',
                  label: 'Primeros pasos',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/es_usage',
                  label: 'Uso',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/es_hardware',
                  label: 'Hardware',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/es_media_advanced_controls',
                  label: 'Controles avanzados de medios',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/es_wizard',
                  label: 'Asistente',
                },
              ],
            },
            // {
            //   type: 'category',
            //   label: 'Simulation',
            //   collapsible: false,
            //   collapsed: false,
            //   items: [
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/platforms/simulation/es_get_started',
            //       label: 'Getting Started',
            //     },
            //   ],
            // },
            // {
            //   type: 'category',
            //   label: 'SDK Guide',
            //   collapsible: false,
            //   collapsed: false,
            //   items: [
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/es_readme',
            //       label: 'SDK Overview',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/es_installation',
            //       label: 'Installation',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/es_quickstart',
            //       label: 'Quickstart',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/es_python-sdk',
            //       label: 'Python SDK',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/es_javascript-sdk',
            //       label: 'JavaScript SDK',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/es_integration',
            //       label: 'AI Integrations',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/es_core-concept',
            //       label: 'Core Concepts',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/es_media-architecture',
            //       label: 'Media Architecture',
            //     },
            //     { 
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/es_gstreamer-installation',
            //       label: 'GStreamer Installation',
            //     },
            //   ],
            // },
            // {
            //   type: 'category',
            //   label: 'Help & Troubleshooting',
            //   collapsible: false,
            //   collapsed: false,
            //   items: [
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/es_troubleshooting',
            //       label: 'Troubleshooting',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/troubleshooting/es_motors_diagnosis',
            //       label: 'Motors Diagnosis',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/troubleshooting/es_change_mic_fpc_cable',
            //       label: 'Change Mic FPC Cable',
            //     },
            //   ],
            // },
            // {
            //   type: 'category',
            //   label: 'Examples',
            //   collapsible: false,
            //   collapsed: false,
            //   items: [
            //     {
            //       type: 'autogenerated',
            //       dirName: 'Robotics/Robot_Kits/ReachyMini/examples',
            //     },
            //   ],
            // },
            // {
            //   type: 'category',
            //   label: 'API Reference',
            //   collapsible: false,
            //   collapsed: false,
            //   items: [
            //     {
            //       type: 'autogenerated',
            //       dirName: 'Robotics/Robot_Kits/ReachyMini/API',
            //     },
            //   ],
            // },
          ],
        },
        {
          type: 'category',
          label: 'Robot con ruedas',
          items: [
            'Robotics/Robot_Kits/StackForce/es_StackForce_Giant_Bipedal_Wheeled_Robot',
            'Robotics/Robot_Kits/StackForce/es_StackForce_Mini_Wheeled_Legged_Robot',
          ]
        },
        {
          type: 'category',
          label: 'Robot humanoide',
          items: [
            {
              type: 'category',
              label: 'Atom-S',
              items: [
                'Robotics/Robot_Kits/Humanoid/Atom-S/es_Atom-S',
              ]
            },
            {
              type: 'category',
              label: 'Atom-X',
              items: [
                'Robotics/Robot_Kits/Humanoid/Atom-X/es_Atom-X',
              ]
            },
          ]
        },
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

};

module.exports = sidebars;