// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

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
        {
          type: 'category',
          label: 'SO-ARM101',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/Robotics',
          // },
          items: [
            'Robotics/Robot_Kits/Lerobot/Lerobot_SO100Arm_New',
            'Robotics/Robot_Kits/Lerobot/Steering_Gear_Debugging_Tool',
            'Robotics/Robot_Kits/Lerobot/Lerobot_Dataset_Tool',
            'Robotics/Robot_Kits/Lerobot/Complete_Guide_to_Double-Arm_SO-ARM_Training',
            'Robotics/Robot_Kits/Lerobot/SOARM_AMAZINGHAND_TELEOP',
            'Robotics/Robot_Kits/Lerobot/Fine_tune_GR00T_N1.5_for_LeRobot_SO_Arm_and_Deploy_on_Jetson_Thor',
            'Robotics/Robot_Kits/Lerobot/Lerobot_Lekiwi',
            'Robotics/Robot_Kits/Lerobot/SOARM101_XIAO_MicroROS_Wireless_Teleoperation',
            'Robotics/Robot_Kits/Lerobot/Sound_Follow_Robot_Powered_by_reSpeaker_and_Lekiwi',
            'Robotics/Robot_Kits/Lerobot/Lerobot_SO_ARM101_DAMO',
          ]
        },

        {
          type: 'category',
          label: 'reBot B601-DM',
          items: [
           
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/reBot_Arm_B601_DM_Getting_Started',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/reBot_Arm_B601_DM_Lerobot',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/reBot_Arm_B601_DM_pinocchio',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/reBot_Arm_B601_DM_Web_Simulator_Developer_Guide',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/reBot_Arm_B601_DM_Grasping_Demo',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/reBot_Arm_B601_DM_ROS2_Integration',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/reBot_Arm_B601_DM_isaacsim',
                {
                  type: 'ref',
                  id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/Arm_Tutorial_Introduction',
                  label: 'Embodied AI Course',
                  className: 'sideboard_calss',
                },
          ]
        },
        {
          type: 'category',
          label: 'reBot B601-RS',
          items: [
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/reBot_Arm_B601_RS_Getting_Started',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/reBot_Arm_B601_RS_Lerobot',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/reBot_Arm_B601_RS_pinocchio',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/reBot_Arm_B601_RS_control_mit',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/reBot_Arm_B601_RS_Web_Simulator_Developer_Guide',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/reBot_Arm_B601_RS_Grasping_Demo',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/reBot_Arm_B601_RS_ROS2_Integration',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/reBot_Arm_B601_RS_isaacsim',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/reBot_Arm_B601_RS_Agent',
                {
                  type: 'ref',
                  id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/Arm_Tutorial_Introduction',
                  label: 'Embodied AI Course',
                  className: 'sideboard_calss',
                },
          ]
        },

        {
          type: 'category',
          label: 'Star AI Arm',
          items: [
            'Robotics/Robot_Kits/Lerobot/Lerobot_Starai_Arm',
            'Robotics/Robot_Kits/Lerobot/Starai_Arm_ROS2_Moveit',
          ]
        },
        // {
        //   type: 'category',
        //   label: 'End Effectors',
        //   items: [
        //     'Robotics/Robot_Kits/End_Effectors/DM_Gripper',
        //   ]
        // },
        
        {
          type: 'category',
          label: 'AmazingHand',
          items: [
            'Robotics/Robot_Kits/Hand/AmazingHand',
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
              id: 'Robotics/Robot_Kits/ReachyMini/intro',
              label: 'Introduction',
            },
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/ReachyMini_Getting_Started',
              label: 'Getting Started',
            },
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/AGENTS',
              label: 'AI Agent Guide',
            },
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/vibe-code-with-your-agent',
              label: 'Vibe Code with Your Agent',
            },
            {
              type: 'category',
              label: 'Development Cases',
              collapsible: false,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/development_cases/home_assistant',
                  label: 'Home Assistant Integration',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/development_cases/reachymini_voice_control_soarm',
                  label: 'Reachy Mini Voice Control for SO-ARM',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/development_cases/reachymini_sway_screen',
                  label: 'Reachy Mini Screen Motion Control',
                },
              ],
            },
            {
              type: 'category',
              label: 'Reachy Mini (Wireless)',
              collapsible: false,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/get_started',
                  label: 'Getting Started',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/usage',
                  label: 'Usage',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/hardware',
                  label: 'Hardware',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/media_advanced_controls',
                  label: 'Media Advanced Controls',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/reset',
                  label: 'Reset',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/install_daemon_from_branch',
                  label: 'Install Daemon from Branch',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/development_workflow',
                  label: 'Development Workflow',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/reflash_the_rpi_ISO',
                  label: 'Reflash the ISO',
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
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/get_started',
                  label: 'Getting Started',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/usage',
                  label: 'Usage',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/hardware',
                  label: 'Hardware',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/media_advanced_controls',
                  label: 'Media Advanced Controls',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/wizard',
                  label: 'Wizard',
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
            //       id: 'Robotics/Robot_Kits/ReachyMini/platforms/simulation/get_started',
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
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/readme',
            //       label: 'SDK Overview',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/installation',
            //       label: 'Installation',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/quickstart',
            //       label: 'Quickstart',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/python-sdk',
            //       label: 'Python SDK',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/javascript-sdk',
            //       label: 'JavaScript SDK',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/integration',
            //       label: 'AI Integrations',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/core-concept',
            //       label: 'Core Concepts',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/media-architecture',
            //       label: 'Media Architecture',
            //     },
            //     { 
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/SDK/gstreamer-installation',
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
            //       id: 'Robotics/Robot_Kits/ReachyMini/troubleshooting',
            //       label: 'Troubleshooting',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/troubleshooting/motors_diagnosis',
            //       label: 'Motors Diagnosis',
            //     },
            //     {
            //       type: 'doc',
            //       id: 'Robotics/Robot_Kits/ReachyMini/troubleshooting/change_mic_fpc_cable',
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
          label: 'Wheeled Robot',
          items: [
            'Robotics/Robot_Kits/StackForce/StackForce_Giant_Bipedal_Wheeled_Robot',
            'Robotics/Robot_Kits/StackForce/StackForce_Mini_Wheeled_Legged_Robot',
          ]
        },
        {
          type: 'category',
          label: 'Humanoid Robot',
          items: [
            {
              type: 'category',
              label: 'Atom-S',
              items: [
                'Robotics/Robot_Kits/Humanoid/Atom-S/Atom-S',
              ]
            },
            {
              type: 'category',
              label: 'Atom-X',
              items: [
                'Robotics/Robot_Kits/Humanoid/Atom-X/Atom-X',
              ]
            },
          ]
        },
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

};

module.exports = sidebars;