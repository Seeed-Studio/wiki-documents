// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

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
        {
          type: 'category',
          label: 'SO-ARM舵机机械臂',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/Robotics',
          // },
          items: [
            //'Robotics/Robot_Kits/Lerobot/En_Hackathon_Thor',
            'Robotics/Robot_Kits/Lerobot/cn_Fine_tune_GR00T_N1.5_for_LeRobot_SO_Arm_and_Deploy_on_Jetson_Thor',
            'Robotics/Robot_Kits/Lerobot/cn_Lerobot_Starai_Arm',
            'Robotics/Robot_Kits/Lerobot/cn_Starai_Arm_ROS2_Moveit',
            'Robotics/Robot_Kits/Lerobot/cn_Lerobot_SO100Arm_New',
            'Robotics/Robot_Kits/Lerobot/cn_SOARM101_XIAO_MicroROS_Wireless_Teleoperation',
            'Robotics/Robot_Kits/Lerobot/cn_Lerobot_SO_ARM101_DAMO',
            'Robotics/Robot_Kits/Lerobot/cn_SOARM_AMAZINGHAND_TELEOP',
            'Robotics/Robot_Kits/Lerobot/cn_Lerobot_Dataset_Tool',
            'Robotics/Robot_Kits/Lerobot/cn_Steering_Gear_Debugging_Tool',
            'Robotics/Robot_Kits/Lerobot/cn_Complete_Guide_to_Double-Arm_SO-ARM_Training',
            //'Robotics/Robot_Kits/Lerobot/Lerobot_SO100Arm',
            'Robotics/Robot_Kits/Lerobot/cn_Lerobot_Lekiwi',
            'Robotics/Robot_Kits/Lerobot/cn_Sound_Follow_Robot_Powered_by_reSpeaker_and_Lekiwi',
          ]
        },
        {
          type: 'category',
          label: '末端夹爪',
          items: [
            'Robotics/Robot_Kits/End_Effectors/cn_DM_Gripper',
          ]
        },
        {
          type: 'category',
          label: 'reBot 机械臂',
          items: [
            {
              type: 'category',
              label: 'B601-DM',
              items: [
                  'Robotics/Robot_Kits/reBot_Arm/B601_DM/cn_reBot_Arm_B601_DM_Getting_Started',
                  'Robotics/Robot_Kits/reBot_Arm/B601_DM/cn_reBot_Arm_B601_DM_Web_Simulator_Developer_Guide',
                  'Robotics/Robot_Kits/reBot_Arm/B601_DM/cn_reBot_Arm_B601_DM_pinocchio',
                  'Robotics/Robot_Kits/reBot_Arm/B601_DM/cn_reBot_Arm_B601_DM_Lerobot',
                 'Robotics/Robot_Kits/reBot_Arm/B601_DM/cn_reBot_Arm_B601_DM_Grasping_Demo',
                 'Robotics/Robot_Kits/reBot_Arm/B601_DM/cn_reBot_Arm_B601_DM_ROS2_Integration',
                 'Robotics/Robot_Kits/reBot_Arm/B601_DM/cn_reBot_Arm_B601_DM_isaacsim'
             ]
           },
           {
             type: 'category',
             label: 'B601-RS',
              items: [
                  'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_Getting_Started',
                  'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_Web_Simulator_Developer_Guide',
                  'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_Lerobot',
                  'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_Grasping_Demo',
                  'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_ROS2_Integration',
                  'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_pinocchio',
                  'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_isaacsim',
                  'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_control_mit',
                  'Robotics/Robot_Kits/reBot_Arm/B601_RS/cn_reBot_Arm_B601_RS_Agent'
              ]
            },
            /*{
              type: 'category',
              label: '课程',
              collapsed: false,
              collapsible: false,
              items: [
            
                {
                  type: 'category',
                  label: '机械臂手把手教程',
            
                  link: {
                    type: 'doc',
                    id: 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/Arm_Tutorial_Introduction',
                  },
            
                  items: [
                    'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/cn_Arm_Tutorial_01',
                    'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial/cn_Arm_Tutorial_02',
            
                    // 后面的教程继续写这里
                  ],
                },
              ],
            },*/

          ]
        },
        {
          type: 'category',
          label: '灵巧手',
          items: [
            'Robotics/Robot_Kits/Hand/cn_AmazingHand',
          ]
        },
        {
          type: 'category',
          label: 'StackForce',
          items: [
            'Robotics/Robot_Kits/StackForce/cn_StackForce_Mini_Wheeled_Legged_Robot',
          ]
        },
        {
          type: 'category',
          label: '人形机器人',
          items: [
            {
              type: 'category',
              label: 'Atom-S',
              items: [
                'Robotics/Robot_Kits/Humanoid/Atom-S/cn_Atom-S',
              ]
            },
            {
              type: 'category',
              label: 'Atom-X',
              items: [
                'Robotics/Robot_Kits/Humanoid/Atom-X/cn_Atom-X',
              ]
            },

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
              id: 'Robotics/Robot_Kits/ReachyMini/cn_intro',
              label: '简介',
            },
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/cn_ReachyMini_Getting_Started',
              label: '快速入门',
            },
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/cn_AGENTS',
              label: 'AI代理指南',
            },
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/cn_vibe-code-with-your-agent',
              label: '使用代理进行Vibe Code编程',
            },
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/cn_ReachyMini_conversation',
              label: 'Reachy Mini接入豆包大模型API',
            },
            {
              type: 'category',
              label: '开发案例集成',
              collapsible: false,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/development_cases/cn_home_assistant',
                  label: 'Home Assistant 集成',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/development_cases/cn_reachymini_voice_control_soarm',
                  label: 'Reachy Mini 语音控制 SO-ARM',
                },
              ],
            },
            {
              type: 'category',
              label: 'Reachy Mini (无线版)',
              collapsible: false,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/cn_get_started',
                  label: '快速入门',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/cn_usage',
                  label: '使用方法',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/cn_hardware',
                  label: '硬件',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/cn_media_advanced_controls',
                  label: '媒体高级控制',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/cn_reset',
                  label: '重置',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/cn_install_daemon_from_branch',
                  label: '从分支安装守护进程',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/cn_development_workflow',
                  label: '开发工作流程',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/cn_reflash_the_rpi_ISO',
                  label: '重新刷写ISO',
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
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/cn_get_started',
                  label: '快速入门',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/cn_usage',
                  label: '使用方法',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/cn_hardware',
                  label: '硬件',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/cn_media_advanced_controls',
                  label: '媒体高级控制',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/cn_wizard',
                  label: '向导',
                },
              ],
            },
            {
              type: 'category',
              label: '仿真',
              collapsible: false,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/simulation/cn_get_started',
                  label: '快速入门',
                },
              ],
            },
            {
              type: 'category',
              label: 'SDK指南',
              collapsible: false,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/cn_installation',
                  label: '安装',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/cn_quickstart',
                  label: '快速入门',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/cn_python-sdk',
                  label: 'Python SDK',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/cn_integration',
                  label: 'AI集成',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/cn_core-concept',
                  label: '核心概念',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/cn_gstreamer-installation',
                  label: 'GStreamer安装',
                },
              ],
            },
            {
              type: 'category',
              label: '帮助与故障排除',
              collapsible: false,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/cn_troubleshooting',
                  label: '故障排除',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/troubleshooting/cn_motors_diagnosis',
                  label: '电机诊断',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/troubleshooting/cn_change_mic_fpc_cable',
                  label: '更换麦克风FPC线缆',
                },
              ],
            },
            {
              type: 'category',
              label: '示例',
              collapsible: false,
              collapsed: false,
              items: [
                { type: 'autogenerated', dirName: 'Robotics/Robot_Kits/ReachyMini/examples' },
              ],
            },
            {
              type: 'category',
              label: 'API参考',
              collapsible: false,
              collapsed: false,
              items: [
                { type: 'autogenerated', dirName: 'Robotics/Robot_Kits/ReachyMini/API' },
              ],
            },
          ],
        },
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

};

module.exports = sidebars;