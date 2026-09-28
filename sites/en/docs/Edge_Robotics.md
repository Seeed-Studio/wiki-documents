---
description: Seeed Studio robotics docs and learning paths.
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
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/robotics_page/
---

import '/src/css/robotics-page-style.css';
import RoboticsPageSearch from '@site/src/components/robotics/RoboticsPageSearch';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# AI Robotics Wiki

> *"The science of today is the technology of tomorrow." - Edward Teller*

<div className="robotics-page">

  <section className="hero-panel">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>Not sure where to start? Pick the robot kit you have</h2>
    </div>
  </section>

  <RoboticsPageSearch />

  <div className="robotics-quicklinks">
    <a href="https://279070161-sketch.github.io/reBot/" target="_blank" rel="noopener noreferrer">🚀 Landing Page</a>
    <GitHubStarButton owner="Seeed-Projects" repo="reBot-DevArm" />
    <a href="https://www.seeedstudio.com/Robotics-c-2427.html" target="_blank" rel="noopener noreferrer">🛒 Shop</a>
  </div>

  <section id="robot-kits" className="section-block">
    <div className="product-stack">

<details id="rebot-rs" className="product-card rebot product-card--cover">
  <summary className="product-head">
    <h3>reBot B601-RS Robotic Arm</h3>
  </summary>
  <div className="product-body">
    <div className="learning-group">
      <h4>Quick Start &amp; SDK</h4>
      <div className="learning-steps">
        <a className="step-card" href="/rebot_b601_rs_getting_started/"><span className="step-index">1</span><div><b>B601-RS Quick Start</b></div></a>
        <a className="step-card" href="/rebot_arm_b601_rs_lerobot/"><span className="step-index">2</span><div><b>B601-RS with LeRobot</b></div></a>
        <a className="step-card" href="/rebot_arm_b601_rs_pinocchio_meshcat/"><span className="step-index">3</span><div><b>B601-RS with Pinocchio</b></div></a>
        <a className="step-card" href="/rebot_arm_b601_rs_mit_control/"><span className="step-index">4</span><div><b>B601-RS Motor SDK</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Applications</h4>
      <div className="learning-steps">
        <a className="step-card" href="/rebot_arm_b601_rs_grasping_demo/"><span className="step-index">1</span><div><b>B601-RS with Visual Grasping</b></div></a>
        <a className="step-card" href="/rebot_arm_b601_rs_ros2_integration/"><span className="step-index">2</span><div><b>B601-RS with ROS2</b></div></a>
        <a className="step-card" href="/rebot_arm_b601_rs_isaacsim/"><span className="step-index">3</span><div><b>B601-RS with Isaacsim</b></div></a>
        <a className="step-card" href="/rebot_arm_b601_rs_web_simulator_developer_guide/"><span className="step-index">4</span><div><b>B601-RS with Web Controler</b></div></a>
        <a className="step-card" href="/wrc_demo_tutorial/"><span className="step-index">5</span><div><b>B601-RS with Agent Claw</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Course</h4>
      <div className="learning-steps">
        <a className="step-card" href="/rebot_physical_ai_course_introduction/"><span className="step-index">🎓</span><div><b>Beginner Course</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Open-Source Resources</h4>
      <div className="rebot-resource-list">
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_RS" target="_blank" rel="noopener noreferrer">B601-RS hardware collection</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/Rebot_Arm_description/RS" target="_blank" rel="noopener noreferrer">B601-RS description package (URDF / Mesh)</a>
        <a href="https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_RS" target="_blank" rel="noopener noreferrer">B601-RS digital twin / Web simulator</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">reBot-DevArm main repository</a>
        <a href="https://github.com/Seeed-Projects/reBotArm_control_py" target="_blank" rel="noopener noreferrer">Python SDK</a>
        <a href="https://github.com/Seeed-Projects/reBotArmController_ROS2" target="_blank" rel="noopener noreferrer">ROS2 controller</a>
        <a href="https://github.com/Seeed-Projects/lerobot-robot-seeed-b601" target="_blank" rel="noopener noreferrer">LeRobot robot adapter</a>
        <a href="https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102" target="_blank" rel="noopener noreferrer">LeRobot teleoperator adapter</a>
        <a href="https://github.com/Seeed-Projects/reBot-Isaacsim" target="_blank" rel="noopener noreferrer">Isaac Sim</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm-Grasp" target="_blank" rel="noopener noreferrer">Visual grasping demo</a>
        <a href="https://github.com/xiehuangbao888/Camera-Mount" target="_blank" rel="noopener noreferrer">Camera mounts collection</a>
      </div>
    </div>
  </div>
</details>


<details id="rebot-dm" className="product-card rebot product-card--cover">
  <summary className="product-head">
    <h3>reBot B601-DM Robotic Arm</h3>
  </summary>
  <div className="product-body">
    <div className="learning-group">
      <h4>Quick Start &amp; SDK</h4>
      <div className="learning-steps">
        <a className="step-card" href="/rebot_b601_dm_getting_started/"><span className="step-index">1</span><div><b>B601-DM Quick Start</b></div></a>
        <a className="step-card" href="/rebot_arm_b601_dm_lerobot/"><span className="step-index">2</span><div><b>B601-DM with LeRobot</b></div></a>
        <a className="step-card" href="/rebot_arm_b601_dm_pinocchio_meshcat/"><span className="step-index">3</span><div><b>B601-DM with Pinocchio</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Applications</h4>
      <div className="learning-steps">
        <a className="step-card" href="/rebot_arm_b601_dm_grasping_demo/"><span className="step-index">1</span><div><b>B601-DM Visual Grasp</b></div></a>
        <a className="step-card" href="/rebot_arm_b601_dm_ros2_integration/"><span className="step-index">2</span><div><b>B601-DM with ROS2</b></div></a>
        <a className="step-card" href="/rebot_arm_b601_dm_isaacsim/"><span className="step-index">3</span><div><b>B601-DM with Isaac Sim</b></div></a>
        <a className="step-card" href="/rebot_arm_b601_dm_web_simulator_developer_guide/"><span className="step-index">4</span><div><b>B601-DM with Web Controler</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Course</h4>
      <div className="learning-steps">
        <a className="step-card" href="/rebot_physical_ai_course_introduction/"><span className="step-index">🎓</span><div><b>Beginner Course</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Open-Source Resources</h4>
      <div className="rebot-resource-list">
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_DM" target="_blank" rel="noopener noreferrer">B601-DM hardware collection</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/Rebot_Arm_description/DM" target="_blank" rel="noopener noreferrer">B601-DM description package (URDF / Mesh)</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_DM/performance_testing" target="_blank" rel="noopener noreferrer">B601-DM real-machine performance testing</a>
        <a href="https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_DM" target="_blank" rel="noopener noreferrer">B601-DM digital twin / Web simulator</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">reBot-DevArm main repository</a>
        <a href="https://github.com/Seeed-Projects/reBotArm_control_py" target="_blank" rel="noopener noreferrer">Python SDK</a>
        <a href="https://github.com/Seeed-Projects/reBotArmController_ROS2" target="_blank" rel="noopener noreferrer">ROS2 controller</a>
        <a href="https://github.com/Seeed-Projects/lerobot-robot-seeed-b601" target="_blank" rel="noopener noreferrer">LeRobot robot adapter</a>
        <a href="https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102" target="_blank" rel="noopener noreferrer">LeRobot teleoperator adapter</a>
        <a href="https://github.com/Seeed-Projects/reBot-Isaacsim" target="_blank" rel="noopener noreferrer">Isaac Sim</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm-Grasp" target="_blank" rel="noopener noreferrer">Visual grasping demo</a>
        <a href="https://github.com/xiehuangbao888/Camera-Mount" target="_blank" rel="noopener noreferrer">Camera mounts collection</a>
      </div>
    </div>
  </div>
</details>


<details id="soarm" className="product-card soarm product-card--cover">
  <summary className="product-head">
    <h3>SO100 / SO101 Robotic Arm</h3>
  </summary>
  <div className="product-body">
    <div className="learning-group">
      <h4>Quick Start &amp; Tools</h4>
      <div className="learning-steps">
        <a className="step-card" href="/lerobot_so100m_new/"><span className="step-index">1</span><div><b>SO100 / SO101 Quick Start</b></div></a>
        <a className="step-card" href="/lerobot_steering_gear_debugging_tool/"><span className="step-index">2</span><div><b>Servo Debugging Tool</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Applications</h4>
      <div className="learning-steps">
        <a className="step-card" href="/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="step-index">3</span><div><b>SO101 and NVIDIA GR00T</b></div></a>
        <a className="step-card" href="/lerobot_double_arm_so_arm_training/"><span className="step-index">4</span><div><b>Dual-Arm SO-ARM Training</b></div></a>
        <a className="step-card" href="/soarm_amazinghand_teleop/"><span className="step-index">5</span><div><b>SO-ARM with Amazing Hand Dexterous Hand</b></div></a>
        <a className="step-card" href="/simulate_soarm101_by_leisaac/"><span className="step-index">6</span><div><b>LeIsaac Simulation</b></div></a>
        <a className="step-card" href="/training_soarm101_policy_with_isaacLab/"><span className="step-index">7</span><div><b>Isaac Lab Reinforcement Learning</b></div></a>
        <a className="step-card optional" href="/control_robotic_arm_via_phospho/"><span className="step-index">+</span><div><b>Phospho LeRobot</b></div></a>
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
        <h4>Quick Start</h4>
        <a href="/reachymini_platforms_reachy_mini_get_started/">Reachy Mini (Wireless) Quick Start</a>
        <a href="/reachymini_platforms_reachy_mini_lite_get_started/">Reachy Mini Lite Quick Start</a>
      </div>
      <div className="mini-track">
        <h4>Development Cases</h4>
        <a href="/reachymini_development_cases_home_assistant/">Home Assistant Integration</a>
        <a href="/reachymini_development_cases_gripper_voice_control/">Reachy Mini Voice Control for SO-ARM</a>
        <a href="/reachymini_development_cases_sway_screen/">Reachy Mini Screen Motion Control</a>
      </div>
    </div>
  </div>
</details>


<details id="lekiwi" className="product-card lekiwi product-card--cover">
  <summary className="product-head">
    <h3>Lekiwi Mobile Chassis</h3>
  </summary>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/lerobot_lekiwi/"><span className="step-index">1</span><div><b>Lekiwi Mobile Chassis Quick Start</b></div></a>
    <a className="step-card" href="/sound_follow_robot/"><span className="step-index">2</span><div><b>Sound-Following Demo</b></div></a>
  </div>
  </div>
</details>


<details id="stackforce" className="product-card stackforce product-card--cover">
  <summary className="product-head">
    <h3>StackForce Mini Wheeled-Legged Robot</h3>
  </summary>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/StackForce_Mini_Wheeled_Legged_Robot/"><span className="step-index">1</span><div><b>StackForce Mini Quick Start</b></div></a>
  </div>
  </div>
</details>


<details id="starai" className="product-card starai product-card--cover">
  <summary className="product-head">
    <h3>StarAI Robotic Arm</h3>
  </summary>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/lerobot_starai_arm/"><span className="step-index">1</span><div><b>StarAI Robotic Arm Quick Start</b></div></a>
    <a className="step-card" href="/starai_arm_ros_moveit/"><span className="step-index">2</span><div><b>MoveIt 2 Motion Planning</b></div></a>
    <a className="step-card" href="/control_robotic_arm_via_gr00t/"><span className="step-index">3</span><div><b>StarAI and NVIDIA GR00T</b></div></a>
  </div>
  </div>
</details>


<details id="atom" className="product-card atom product-card--cover">
  <summary className="product-head">
    <h3>Atom Compact Humanoid Robot</h3>
  </summary>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/atom_s/"><span className="step-index">1</span><div><b>Atom-S Getting Started Guide</b></div></a>
    <a className="step-card" href="/atom_x/"><span className="step-index">2</span><div><b>Atom-X Getting Started Guide</b></div></a>
  </div>
  </div>
</details>


    </div>
  </section>

  <section id="actuators" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Actuators</span>
        <h2>Joint Actuators &amp; Motors</h2>
      </div>
      <p>For motor debugging, communication protocols, and joint troubleshooting.</p>
    </div>
    <div className="resource-columns">
      <div>
        <h4>reBot Joint Motors</h4>
        <a href="/damiao_series/">Damiao DM43 Series</a>
        <a href="/robstride_control/">RobStride Control</a>
      </div>
      <div>
        <h4>Other Joint Motors</h4>
        <a href="/myactuator_series/">MyActuator X Series</a>
        <a href="/hightorque_control/">HighTorque Series</a>
        <a href="/stackforce_series/">Stackforce Series</a>
      </div>
      <div>
        <h4>Servos</h4>
        <a href="/feetech_servo/">Feetech STS3215 Servo</a>
        <a href="/fashionstar_servo/">Fashionstar Series</a>
      </div>
    </div>
  </section>

  <section id="sensors" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Sensors</span>
        <h2>Sensors &amp; Perception</h2>
      </div>
      <p>For visual grasping, SLAM, voice interaction, and robot state perception.</p>
    </div>
    <div className="resource-columns">
      <div><h4>LiDAR</h4><a href="/robosense_lidar/">RoboSense</a><a href="/mid360/">Livox MID360</a><a href="/a_loam/">A-LOAM Algorithm</a><a href="/slamtec/">Slamtec Series</a></div>
      <div><h4>Cameras</h4><a href="/orbbec_gemini2/">Orbbec Gemini 2</a><a href="/orbbec_gemini_335lg/">Gemini 335Lg Depth Camera</a><a href="/orbbec_gemini336">Gemini 336 Depth Camera</a><a href="/sensing_gmsl_cameras">SENSING GMSL2 Camera</a><a href="/ac1">RoboSense AC1</a><a href="/orbbec_depth_camera_on_ros/">Orbbec and ROS</a><a href="/orb_slam3_orbbec_gemini2/">ORB-SLAM3 and Gemini2</a><a href="/csi_camera_on_ros/">CSI Camera on Jetson</a><a href="/pycuvslam_recomputer_robotics/">PyCuVSLAM</a></div>
      <div><h4>Voice</h4><a href="/ReSpeaker_Core_v2.0/">ReSpeaker Core v2.0</a><a href="/ReSpeaker_Mic_Array_v2.0/">ReSpeaker Mic Array v2.0</a></div>
      <div><h4>IMU</h4><a href="/hexfellow_y200/">HEXFELLOW Y200</a><a href="/wheeltec_imu/">WHEELTEC IMU</a></div>
    </div>
  </section>

  <section id="software" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Software</span>
        <h2>Software &amp; Tools</h2>
      </div>
      <p>After setup, move into ROS, Isaac, PX4, or VLA.</p>
    </div>
    <div className="resource-columns">
      <div><h4>ROS Ecosystem</h4><a href="/installing_ros1/">ROS 1 Installation</a><a href="/install_ros2_humble/">ROS 2 Installation</a><a href="/install_isaacros/">Isaac ROS Installation</a><a href="/isaac_ros_apriltag/">Isaac ROS AprilTag</a><a href="/isaac_ros_visual_slam/">Isaac ROS V-SLAM</a></div>
      <div><h4>NVIDIA Isaac</h4><a href="/install_isaaclab/">Isaac Lab Installation</a><a href="/training_soarm101_policy_with_isaacLab/">SO Arm Reinforcement Learning</a><a href="/simulate_soarm101_by_leisaac/">SO100 Robotic Arm with IsaacSim</a></div>
      <div><h4>PX4 / VLA</h4><a href="/control_px4_with_recomputer_jetson/">PX4 and Jetson</a><a href="/object_tracking_with_reComputer_jetson_and_pX4/">PX4 Object Tracking</a><a href="/control_robotic_arm_via_gr00t/">StarAI and NVIDIA GR00T</a></div>
    </div>
  </section>

</div>
