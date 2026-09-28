---
description: 本主题介绍 Seeed Studio 的机器人产品文档与学习路径。
title: AI Robotics Wiki
keywords:
  - robotics
  - nvidia
  - ros
  - isaac
  - lerobot
  - learning
  - reinforcement learning
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /robotics_page
last_update:
  date: 07/04/2026
  author: ZhuYaohui
createdAt: '2023-01-12'
updatedAt: '2026-09-11'
url: https://wiki.seeedstudio.com/cn/robotics_page/
---

import '/src/css/robotics-page-style.css';
import RoboticsPageSearch from '@site/src/components/robotics/RoboticsPageSearch';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# AI Robotics Wiki

> *"今天的科学就是明天的技术。" - Edward Teller*

<div className="robotics-page">

  <section className="hero-panel">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>不知道从哪篇文档开始？先选择你手上的机器人套件</h2>
    </div>
  </section>

  <RoboticsPageSearch />

  <div className="robotics-quicklinks">
    <a href="https://279070161-sketch.github.io/reBot/" target="_blank" rel="noopener noreferrer">🚀 产品主页</a>
    <GitHubStarButton owner="Seeed-Projects" repo="reBot-DevArm" />
    <a href="https://www.seeedstudio.com/Robotics-c-2427.html" target="_blank" rel="noopener noreferrer">🛒 购买</a>
  </div>

  <section id="robot-kits" className="section-block">
    <div className="product-stack">

<details id="rebot-rs" className="product-card rebot product-card--cover">
  <summary className="product-head">
    <h3>reBot B601-RS 机械臂</h3>
  </summary>
  <div className="product-body">
    <div className="learning-group">
      <h4>快速上手与 SDK</h4>
      <div className="learning-steps">
        <a className="step-card" href="/cn/rebot_b601_rs_getting_started/"><span className="step-index">1</span><div><b>快速开始</b></div></a>
        <a className="step-card" href="/cn/rebot_arm_b601_rs_lerobot/"><span className="step-index">2</span><div><b>B601-RS 与 LeRobot</b></div></a>
        <a className="step-card" href="/cn/rebot_arm_b601_rs_pinocchio_meshcat/"><span className="step-index">3</span><div><b>B601-RS 与 Pinocchio</b></div></a>
        <a className="step-card" href="/cn/rebot_arm_b601_rs_mit_control/"><span className="step-index">4</span><div><b>B601-RS 电机 SDK</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>应用</h4>
      <div className="learning-steps">
        <a className="step-card" href="/cn/rebot_arm_b601_rs_grasping_demo/"><span className="step-index">1</span><div><b>B601-RS 视觉夹取</b></div></a>
        <a className="step-card" href="/cn/rebot_arm_b601_rs_ros2_integration/"><span className="step-index">2</span><div><b>B601-RS 与 ROS2</b></div></a>
        <a className="step-card" href="/cn/rebot_arm_b601_rs_isaacsim/"><span className="step-index">3</span><div><b>B601-RS 与 Isaacsim</b></div></a>
        <a className="step-card" href="/cn/rebot_arm_b601_rs_web_simulator_developer_guide/"><span className="step-index">4</span><div><b>B601-RS Web 仿真器</b></div></a>
        <a className="step-card" href="/cn/wrc_demo_tutorial/"><span className="step-index">5</span><div><b>B601-RS 与 Agent Claw</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>开源资料</h4>
      <div className="rebot-resource-list">
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_RS" target="_blank" rel="noopener noreferrer">B601-RS 硬件资料合集</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/Rebot_Arm_description/RS" target="_blank" rel="noopener noreferrer">B601-RS 机械臂描述文件（URDF / Mesh）</a>
        <a href="https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_RS" target="_blank" rel="noopener noreferrer">B601-RS 数字孪生 / Web 仿真器</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">reBot-DevArm 总仓库</a>
        <a href="https://github.com/Seeed-Projects/reBotArm_control_py" target="_blank" rel="noopener noreferrer">Python SDK</a>
        <a href="https://github.com/Seeed-Projects/reBotArmController_ROS2" target="_blank" rel="noopener noreferrer">ROS2 控制器</a>
        <a href="https://github.com/Seeed-Projects/lerobot-robot-seeed-b601" target="_blank" rel="noopener noreferrer">LeRobot robot adapter</a>
        <a href="https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102" target="_blank" rel="noopener noreferrer">LeRobot teleoperator adapter</a>
        <a href="https://github.com/Seeed-Projects/reBot-Isaacsim" target="_blank" rel="noopener noreferrer">Isaac Sim</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm-Grasp" target="_blank" rel="noopener noreferrer">视觉抓取 Demo</a>
        <a href="https://github.com/xiehuangbao888/Camera-Mount" target="_blank" rel="noopener noreferrer">相机支架合集</a>
      </div>
    </div>
  </div>
</details>


<details id="rebot-dm" className="product-card rebot product-card--cover">
  <summary className="product-head">
    <h3>reBot B601-DM 机械臂</h3>
  </summary>
  <div className="product-body">
    <div className="learning-group">
      <h4>快速上手与 SDK</h4>
      <div className="learning-steps">
        <a className="step-card" href="/cn/rebot_b601_dm_getting_started/"><span className="step-index">1</span><div><b>快速开始</b></div></a>
        <a className="step-card" href="/cn/rebot_arm_b601_dm_lerobot/"><span className="step-index">2</span><div><b>B601-DM 与 LeRobot</b></div></a>
        <a className="step-card" href="/cn/rebot_arm_b601_dm_pinocchio_meshcat/"><span className="step-index">3</span><div><b>B601-DM 与 Pinocchio</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>应用</h4>
      <div className="learning-steps">
        <a className="step-card" href="/cn/rebot_arm_b601_dm_grasping_demo/"><span className="step-index">1</span><div><b>B601-DM 视觉夹取</b></div></a>
        <a className="step-card" href="/cn/rebot_arm_b601_dm_ros2_integration/"><span className="step-index">2</span><div><b>B601-DM 与 ROS2</b></div></a>
        <a className="step-card" href="/cn/rebot_arm_b601_dm_isaacsim/"><span className="step-index">3</span><div><b>B601-DM 与 Isaac Sim</b></div></a>
        <a className="step-card" href="/cn/rebot_arm_b601_dm_web_simulator_developer_guide/"><span className="step-index">4</span><div><b>B601-DM Web 仿真器</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>开源资料</h4>
      <div className="rebot-resource-list">
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_DM" target="_blank" rel="noopener noreferrer">B601-DM 硬件资料合集</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/Rebot_Arm_description/DM" target="_blank" rel="noopener noreferrer">B601-DM 机械臂描述文件（URDF / Mesh）</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_DM/performance_testing" target="_blank" rel="noopener noreferrer">B601-DM 真机性能测试</a>
        <a href="https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_DM" target="_blank" rel="noopener noreferrer">B601-DM 数字孪生 / Web 仿真器</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">reBot-DevArm 总仓库</a>
        <a href="https://github.com/Seeed-Projects/reBotArm_control_py" target="_blank" rel="noopener noreferrer">Python SDK</a>
        <a href="https://github.com/Seeed-Projects/reBotArmController_ROS2" target="_blank" rel="noopener noreferrer">ROS2 控制器</a>
        <a href="https://github.com/Seeed-Projects/lerobot-robot-seeed-b601" target="_blank" rel="noopener noreferrer">LeRobot robot adapter</a>
        <a href="https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102" target="_blank" rel="noopener noreferrer">LeRobot teleoperator adapter</a>
        <a href="https://github.com/Seeed-Projects/reBot-Isaacsim" target="_blank" rel="noopener noreferrer">Isaac Sim</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm-Grasp" target="_blank" rel="noopener noreferrer">视觉抓取 Demo</a>
        <a href="https://github.com/xiehuangbao888/Camera-Mount" target="_blank" rel="noopener noreferrer">相机支架合集</a>
      </div>
    </div>
  </div>
</details>


<details id="soarm" className="product-card soarm product-card--cover">
  <summary className="product-head">
    <h3>SO100 / SO101 机械臂</h3>
  </summary>
  <div className="product-body">
    <div className="learning-group">
      <h4>快速开始与工具</h4>
      <div className="learning-steps">
        <a className="step-card" href="/cn/lerobot_so100m_new/"><span className="step-index">1</span><div><b>SO100 / SO101 快速开始</b></div></a>
        <a className="step-card" href="/cn/lerobot_steering_gear_debugging_tool/"><span className="step-index">2</span><div><b>舵机调试工具</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>拓展应用</h4>
      <div className="learning-steps">
        <a className="step-card" href="/cn/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="step-index">3</span><div><b>SO101 与 NVIDIA GR00T</b></div></a>
        <a className="step-card" href="/cn/lerobot_double_arm_so_arm_training/"><span className="step-index">4</span><div><b>双臂 SO-ARM 训练</b></div></a>
        <a className="step-card" href="/cn/soarm_amazinghand_teleop/"><span className="step-index">5</span><div><b>SO-ARM结合Amazing Hand灵巧手</b></div></a>
        <a className="step-card" href="/cn/simulate_soarm101_by_leisaac/"><span className="step-index">6</span><div><b>LeIsaac 仿真</b></div></a>
        <a className="step-card" href="/cn/training_soarm101_policy_with_isaacLab/"><span className="step-index">7</span><div><b>Isaac Lab 强化学习</b></div></a>
        <a className="step-card optional" href="/cn/control_robotic_arm_via_phospho/"><span className="step-index">+</span><div><b>Phospho LeRobot</b></div></a>
      </div>
    </div>
  </div>
</details>


<details id="reachy" className="product-card reachy product-card--cover">
  <summary className="product-head">
    <h3>Reachy Mini</h3>
  </summary>
  <div className="product-body">
    <div className="reachy-path-grid">
      <div className="mini-track">
        <h4>快速入门</h4>
        <a href="/cn/reachymini_platforms_reachy_mini_get_started/">Reachy Mini 无线版快速入门</a>
        <a href="/cn/reachymini_platforms_reachy_mini_lite_get_started/">Reachy Mini Lite 快速入门</a>
      </div>
      <div className="mini-track">
        <h4>开发案例</h4>
        <a href="/cn/reachymini_development_cases_home_assistant/">Home Assistant 集成</a>
        <a href="/cn/reachymini_development_cases_gripper_voice_control/">Reachy Mini 语音控制 SO-ARM</a>
        <a href="/cn/reachymini_development_cases_sway_screen/">Reachy Mini 屏幕体感控制</a>
      </div>
    </div>
  </div>
</details>


<details id="lekiwi" className="product-card lekiwi product-card--cover">
  <summary className="product-head">
    <h3>Lekiwi 移动底盘</h3>
  </summary>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/cn/lerobot_lekiwi/"><span className="step-index">1</span><div><b>Lekiwi 移动底盘快速开始</b></div></a>
    <a className="step-card" href="/cn/sound_follow_robot/"><span className="step-index">2</span><div><b>声音跟随 Demo</b></div></a>
  </div>
  </div>
</details>


<details id="stackforce" className="product-card stackforce product-card--cover">
  <summary className="product-head">
    <h3>StackForce Mini 轮足机器人</h3>
  </summary>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/cn/StackForce_Mini_Wheeled_Legged_Robot/"><span className="step-index">1</span><div><b>StackForce Mini 快速开始</b></div></a>
  </div>
  </div>
</details>


<details id="starai" className="product-card starai product-card--cover">
  <summary className="product-head">
    <h3>StarAI 机械臂</h3>
  </summary>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/cn/lerobot_starai_arm/"><span className="step-index">1</span><div><b>StarAI 机械臂快速开始</b></div></a>
    <a className="step-card" href="/cn/starai_arm_ros_moveit/"><span className="step-index">2</span><div><b>MoveIt 2 运动规划</b></div></a>
    <a className="step-card" href="/cn/control_robotic_arm_via_gr00t/"><span className="step-index">3</span><div><b>StarAI 与 NVIDIA GR00T</b></div></a>
  </div>
  </div>
</details>


<details id="atom" className="product-card atom product-card--cover">
  <summary className="product-head">
    <h3>Atom 小型人形机器人</h3>
  </summary>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/cn/atom_s/"><span className="step-index">1</span><div><b>Atom-S 入门指南</b></div></a>
    <a className="step-card" href="/cn/atom_x/"><span className="step-index">2</span><div><b>Atom-X 入门指南</b></div></a>
  </div>
  </div>
</details>


    </div>
  </section>

  <section id="actuators" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Reference</span>
        <h2>关节执行器</h2>
      </div>
      <p>当你需要单独调试电机、理解通信协议或排查关节问题时，再查看这些资料。</p>
    </div>
    <div className="resource-grid">
      <a href="/cn/myactuator_series/">MyActuator X 系列</a>
      <a href="/cn/damiao_series/">Damiao DM43 系列</a>
      <a href="/cn/feetech_servo/">Feetech STS3215 舵机</a>
      <a href="/cn/hightorque_control/">HighTorque 系列</a>
      <a href="/cn/fashionstar_servo/">Fashionstar 系列</a>
      <a href="/cn/stackforce_series/">Stackforce 系列</a>
      <a href="/cn/robstride_control/">RobStride 控制</a>
    </div>
  </section>

  <section id="sensors" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Reference</span>
        <h2>传感器</h2>
      </div>
      <p>用于视觉夹取、SLAM、语音交互和机器人状态感知。</p>
    </div>
    <div className="resource-columns">
      <div><h4>LiDAR</h4><a href="/cn/robosense_lidar/">RoboSense</a><a href="/cn/mid360/">Livox MID360</a><a href="/cn/a_loam/">A-LOAM 算法</a><a href="/cn/slamtec/">Slamtec 系列</a></div>
      <div><h4>相机</h4><a href="/cn/orbbec_gemini2/">Orbbec Gemini 2</a><a href="/cn/orbbec_gemini_335lg/">Gemini 335Lg 深度相机</a><a href="/cn/orbbec_gemini336">Gemini 336 深度相机</a><a href="/cn/sensing_gmsl_cameras">SENSING GMSL2 相机</a><a href="/cn/ac1">RoboSense AC1</a><a href="/cn/orbbec_depth_camera_on_ros/">Orbbec 与 ROS</a><a href="/cn/orb_slam3_orbbec_gemini2/">ORB-SLAM3 与 Gemini2</a><a href="/cn/csi_camera_on_ros/">Jetson 上的 CSI 相机</a><a href="/cn/pycuvslam_recomputer_robotics/">PyCuVSLAM</a></div>
      <div><h4>语音</h4><a href="/cn/ReSpeaker_Core_v2.0/">ReSpeaker Core v2.0</a><a href="/cn/ReSpeaker_Mic_Array_v2.0/">ReSpeaker Mic Array v2.0</a><h4>IMU</h4><a href="/cn/hexfellow_y200/">HEXFELLOW Y200</a><a href="/cn/wheeltec_imu/">WHEELTEC IMU</a></div>
    </div>
  </section>

  <section id="software" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Reference</span>
        <h2>软件生态</h2>
      </div>
      <p>机器人套件跑通后，可以根据项目目标进入 ROS、Isaac、PX4 或 VLA 方向。</p>
    </div>
    <div className="resource-columns">
      <div><h4>ROS 生态系统</h4><a href="/cn/installing_ros1/">ROS 1 安装</a><a href="/cn/install_ros2_humble/">ROS 2 安装</a><a href="/cn/install_isaacros/">Isaac ROS 安装</a><a href="/cn/isaac_ros_apriltag/">Isaac ROS AprilTag</a><a href="/cn/isaac_ros_visual_slam/">Isaac ROS V-SLAM</a></div>
      <div><h4>NVIDIA Isaac</h4><a href="/cn/install_isaaclab/">Isaac Lab 安装</a><a href="/cn/training_soarm101_policy_with_isaacLab/">SO Arm 强化学习</a><a href="/cn/simulate_soarm101_by_leisaac/">SO100 机械臂与 IsaacSim</a></div>
      <div><h4>PX4 / VLA</h4><a href="/cn/control_px4_with_recomputer_jetson/">PX4 与 Jetson</a><a href="/cn/object_tracking_with_reComputer_jetson_and_pX4/">PX4 目标跟踪</a><a href="/cn/control_robotic_arm_via_gr00t/">StarAI 与 NVIDIA GR00T</a></div>
    </div>
  </section>

</div>
