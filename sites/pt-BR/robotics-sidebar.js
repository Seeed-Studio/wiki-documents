// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

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
        {
          type: 'category',
          label: 'SO-ARM101',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/Robotics',
          // },
          items: [
            'Robotics/Robot_Kits/Lerobot/pt_Lerobot_SO100Arm_New',
            'Robotics/Robot_Kits/Lerobot/pt_Steering_Gear_Debugging_Tool',
            'Robotics/Robot_Kits/Lerobot/pt_Lerobot_Dataset_Tool',
            'Robotics/Robot_Kits/Lerobot/pt_Complete_Guide_to_Double-Arm_SO-ARM_Training',
            'Robotics/Robot_Kits/Lerobot/pt_SOARM_AMAZINGHAND_TELEOP',
            'Robotics/Robot_Kits/Lerobot/pt_Fine_tune_GR00T_N1.5_for_LeRobot_SO_Arm_and_Deploy_on_Jetson_Thor',
            'Robotics/Robot_Kits/Lerobot/pt_Lerobot_Lekiwi',
            'Robotics/Robot_Kits/Lerobot/pt_SOARM101_XIAO_MicroROS_Wireless_Teleoperation',
            'Robotics/Robot_Kits/Lerobot/pt_Sound_Follow_Robot_Powered_by_reSpeaker_and_Lekiwi',
            'Robotics/Robot_Kits/Lerobot/pt_Lerobot_SO_ARM101_DAMO',
          ]
        },

        {
          type: 'category',
          label: 'reBot B601-DM',
          items: [
           
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/pt_reBot_Arm_B601_DM_Getting_Started',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/pt_reBot_Arm_B601_DM_Lerobot',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/pt_reBot_Arm_B601_DM_pinocchio',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/pt_reBot_Arm_B601_DM_Web_Simulator_Developer_Guide',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/pt_reBot_Arm_B601_DM_Grasping_Demo',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/pt_reBot_Arm_B601_DM_ROS2_Integration',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/pt_reBot_Arm_B601_DM_isaacsim',
                {
                  type: 'ref',
                  id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/pt_Arm_Tutorial_Introduction',
                  label: 'Curso de IA incorporada',
                  className: 'sideboard_calss',
                },
          ]
        },
        {
          type: 'category',
          label: 'reBot B601-RS',
          items: [
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_Getting_Started',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_Lerobot',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_pinocchio',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_control_mit',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_Web_Simulator_Developer_Guide',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_Grasping_Demo',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_ROS2_Integration',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_isaacsim',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_Agent',
                {
                  type: 'ref',
                  id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/pt_Arm_Tutorial_Introduction',
                  label: 'Curso de IA incorporada',
                  className: 'sideboard_calss',
                },
          ]
        },

        {
          type: 'category',
          label: 'Star AI Arm',
          items: [
            'Robotics/Robot_Kits/Lerobot/pt_Lerobot_Starai_Arm',
            'Robotics/Robot_Kits/Lerobot/pt_Starai_Arm_ROS2_Moveit',
          ]
        },
        // {
        //   type: 'category',
        //   label: 'End Effectors',
        //   items: [
        //     'Robotics/Robot_Kits/End_Effectors/pt_DM_Gripper',
        //   ]
        // },
        
        {
          type: 'category',
          label: 'AmazingHand',
          items: [
            'Robotics/Robot_Kits/Hand/pt_AmazingHand',
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
              id: 'Robotics/Robot_Kits/ReachyMini/pt_intro',
              label: 'Introdução',
            },
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/pt_ReachyMini_Getting_Started',
              label: 'Primeiros passos',
            },
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/pt_AGENTS',
              label: 'Guia do agente de IA',
            },
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/pt_vibe-code-with-your-agent',
              label: 'Programe com seu agente',
            },
            {
              type: 'category',
              label: 'Casos de desenvolvimento',
              collapsible: false,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/development_cases/pt_home_assistant',
                  label: 'Integração com Home Assistant',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/development_cases/pt_reachymini_voice_control_soarm',
                  label: 'Controle por voz do Reachy Mini para o SO-ARM',
                },
              ],
            },
            {
              type: 'category',
              label: 'Reachy Mini (sem fio)',
              collapsible: false,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/pt_get_started',
                  label: 'Primeiros passos',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/pt_usage',
                  label: 'Uso',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/pt_hardware',
                  label: 'Hardware',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/pt_media_advanced_controls',
                  label: 'Controles avançados de mídia',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/pt_reset',
                  label: 'Resetar',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/pt_install_daemon_from_branch',
                  label: 'Instalar daemon a partir de branch',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/pt_development_workflow',
                  label: 'Fluxo de trabalho de desenvolvimento',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/pt_reflash_the_rpi_ISO',
                  label: 'Regravar a ISO',
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
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/pt_get_started',
                  label: 'Primeiros passos',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/pt_usage',
                  label: 'Uso',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/pt_hardware',
                  label: 'Hardware',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/pt_media_advanced_controls',
                  label: 'Controles avançados de mídia',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/pt_wizard',
                  label: 'Assistente',
                },
              ],
            },
            // {
            //   type: 'category',
            //   label: 'Simulação',
            //   collapsible: false,
            //   collapsed: false,
            //   items: [
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/platforms/simulation/pt_get_started',
            //       label: 'Primeiros passos',
            //     },
            //   ],
            // },
            // {
            //   type: 'category',
            //   label: 'Guia do SDK',
            //   collapsible: false,
            //   collapsed: false,
            //   items: [
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/pt_readme',
            //       label: 'Visão geral do SDK',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/pt_installation',
            //       label: 'Instalação',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/pt_quickstart',
            //       label: 'Início rápido',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/pt_python-sdk',
            //       label: 'SDK Python',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/pt_javascript-sdk',
            //       label: 'SDK JavaScript',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/pt_integration',
            //       label: 'Integrações de IA',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/pt_core-concept',
            //       label: 'Conceitos básicos',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/pt_media-architecture',
            //       label: 'Arquitetura de mídia',
            //     },
            //     { 
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/pt_gstreamer-installation',
            //       label: 'Instalação do GStreamer',
            //     },
            //   ],
            // },
            // {
            //   type: 'category',
            //   label: 'Ajuda e solução de problemas',
            //   collapsible: false,
            //   collapsed: false,
            //   items: [
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/pt_troubleshooting',
            //       label: 'Solução de problemas',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/troubleshooting/pt_motors_diagnosis',
            //       label: 'Diagnóstico de motores',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/troubleshooting/pt_change_mic_fpc_cable',
            //       label: 'Trocar cabo FPC do microfone',
            //     },
            //   ],
            // },
            // {
            //   type: 'category',
            //   label: 'Exemplos',
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
            //   label: 'Referência da API',
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
          label: 'Robô com rodas',
          items: [
            'Robotics/Robot_Kits/StackForce/pt_StackForce_Giant_Bipedal_Wheeled_Robot',
            'Robotics/Robot_Kits/StackForce/pt_StackForce_Mini_Wheeled_Legged_Robot',
          ]
        },
        {
          type: 'category',
          label: 'Robô humanoide',
          items: [
            {
              type: 'category',
              label: 'Atom-S',
              items: [
                'Robotics/Robot_Kits/Humanoid/Atom-S/pt_Atom-S',
              ]
            },
            {
              type: 'category',
              label: 'Atom-X',
              items: [
                'Robotics/Robot_Kits/Humanoid/Atom-X/pt_Atom-X',
              ]
            },
          ]
        },
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

};

module.exports = sidebars;