// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

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
        {
          type: 'category',
          label: 'SO-ARM101',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/Robotics',
          // },
          items: [
            'Robotics/Robot_Kits/Lerobot/ja_Lerobot_SO100Arm_New',
            'Robotics/Robot_Kits/Lerobot/ja_Steering_Gear_Debugging_Tool',
            'Robotics/Robot_Kits/Lerobot/ja_Lerobot_Dataset_Tool',
            'Robotics/Robot_Kits/Lerobot/ja_Complete_Guide_to_Double-Arm_SO-ARM_Training',
            'Robotics/Robot_Kits/Lerobot/ja_SOARM_AMAZINGHAND_TELEOP',
            'Robotics/Robot_Kits/Lerobot/ja_Fine_tune_GR00T_N1.5_for_LeRobot_SO_Arm_and_Deploy_on_Jetson_Thor',
            'Robotics/Robot_Kits/Lerobot/ja_Lerobot_Lekiwi',
            'Robotics/Robot_Kits/Lerobot/ja_SOARM101_XIAO_MicroROS_Wireless_Teleoperation',
            'Robotics/Robot_Kits/Lerobot/ja_Sound_Follow_Robot_Powered_by_reSpeaker_and_Lekiwi',
            'Robotics/Robot_Kits/Lerobot/ja_Lerobot_SO_ARM101_DAMO',
          ]
        },

        {
          type: 'category',
          label: 'reBot B601-DM',
          items: [
           
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/ja_reBot_Arm_B601_DM_Getting_Started',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/ja_reBot_Arm_B601_DM_Lerobot',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/ja_reBot_Arm_B601_DM_pinocchio',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/ja_reBot_Arm_B601_DM_Web_Simulator_Developer_Guide',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/ja_reBot_Arm_B601_DM_Grasping_Demo',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/ja_reBot_Arm_B601_DM_ROS2_Integration',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/ja_reBot_Arm_B601_DM_isaacsim',
                {
                  type: 'ref',
                  id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/ja_Arm_Tutorial_Introduction',
                  label: 'エンボディドAIコース',
                  className: 'sideboard_calss',
                },
          ]
        },
        {
          type: 'category',
          label: 'reBot B601-RS',
          items: [
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/ja_reBot_Arm_B601_RS_Getting_Started',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/ja_reBot_Arm_B601_RS_Lerobot',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/ja_reBot_Arm_B601_RS_pinocchio',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/ja_reBot_Arm_B601_RS_control_mit',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/ja_reBot_Arm_B601_RS_Web_Simulator_Developer_Guide',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/ja_reBot_Arm_B601_RS_Grasping_Demo',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/ja_reBot_Arm_B601_RS_ROS2_Integration',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/ja_reBot_Arm_B601_RS_isaacsim',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/ja_reBot_Arm_B601_RS_Agent',
                {
                  type: 'ref',
                  id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/ja_Arm_Tutorial_Introduction',
                  label: 'エンボディドAIコース',
                  className: 'sideboard_calss',
                },
          ]
        },

        {
          type: 'category',
          label: 'Star AI Arm',
          items: [
            'Robotics/Robot_Kits/Lerobot/ja_Lerobot_Starai_Arm',
            'Robotics/Robot_Kits/Lerobot/ja_Starai_Arm_ROS2_Moveit',
          ]
        },
        // {
        //   type: 'category',
        //   label: 'End Effectors',
        //   items: [
        //     'Robotics/Robot_Kits/End_Effectors/ja_DM_Gripper',
        //   ]
        // },
        
        {
          type: 'category',
          label: 'AmazingHand',
          items: [
            'Robotics/Robot_Kits/Hand/ja_AmazingHand',
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
              id: 'Robotics/Robot_Kits/ReachyMini/ja_intro',
              label: '概要',
            },
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/ja_ReachyMini_Getting_Started',
              label: 'はじめに',
            },
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/ja_AGENTS',
              label: 'AIエージェントガイド',
            },
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/ja_vibe-code-with-your-agent',
              label: 'エージェントとVibe Coding',
            },
            {
              type: 'category',
              label: '開発事例',
              collapsible: false,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/development_cases/ja_home_assistant',
                  label: 'Home Assistant 連携',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/development_cases/ja_reachymini_voice_control_soarm',
                  label: 'SO-ARM用Reachy Mini音声制御',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/development_cases/ja_reachymini_sway_screen',
                  label: 'Control de movimiento de la pantalla de Reachy Mini',
                },
              ],
            },
            {
              type: 'category',
              label: 'Reachy Mini（ワイヤレス）',
              collapsible: false,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/ja_get_started',
                  label: 'はじめに',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/ja_usage',
                  label: '使用方法',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/ja_hardware',
                  label: 'ハードウェア',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/ja_media_advanced_controls',
                  label: 'メディアの高度な操作',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/ja_reset',
                  label: 'リセット',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/ja_install_daemon_from_branch',
                  label: 'ブランチからデーモンをインストール',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/ja_development_workflow',
                  label: '開発ワークフロー',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/ja_reflash_the_rpi_ISO',
                  label: 'ISOを再書き込み',
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
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/ja_get_started',
                  label: 'はじめに',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/ja_usage',
                  label: '使用方法',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/ja_hardware',
                  label: 'ハードウェア',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/ja_media_advanced_controls',
                  label: 'メディアの高度な操作',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/ja_wizard',
                  label: 'ウィザード',
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
            //       id: 'Robotics/Robot_Kits/ReachyMini/platforms/simulation/ja_get_started',
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
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/ja_readme',
            //       label: 'SDK Overview',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/ja_installation',
            //       label: 'Installation',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/ja_quickstart',
            //       label: 'Quickstart',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/ja_python-sdk',
            //       label: 'Python SDK',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/ja_javascript-sdk',
            //       label: 'JavaScript SDK',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/ja_integration',
            //       label: 'AI Integrations',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/ja_core-concept',
            //       label: 'Core Concepts',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/ja_media-architecture',
            //       label: 'Media Architecture',
            //     },
            //     { 
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/ja_gstreamer-installation',
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
            //       id: 'Robotics/Robot_Kits/ReachyMini/ja_troubleshooting',
            //       label: 'Troubleshooting',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/troubleshooting/ja_motors_diagnosis',
            //       label: 'Motors Diagnosis',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/troubleshooting/ja_change_mic_fpc_cable',
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
          label: '車輪型ロボット',
          items: [
            'Robotics/Robot_Kits/StackForce/ja_StackForce_Giant_Bipedal_Wheeled_Robot',
            'Robotics/Robot_Kits/StackForce/ja_StackForce_Mini_Wheeled_Legged_Robot',
          ]
        },
        {
          type: 'category',
          label: 'ヒューマノイドロボット',
          items: [
            {
              type: 'category',
              label: 'Atom-S',
              items: [
                'Robotics/Robot_Kits/Humanoid/Atom-S/ja_Atom-S',
              ]
            },
            {
              type: 'category',
              label: 'Atom-X',
              items: [
                'Robotics/Robot_Kits/Humanoid/Atom-X/ja_Atom-X',
              ]
            },
          ]
        },
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

};

module.exports = sidebars;