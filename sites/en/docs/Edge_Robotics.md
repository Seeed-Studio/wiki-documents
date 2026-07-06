---
description: This topic introduces Seeed Studio's robotics product documentation and learning paths.
title: Robotics
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
updatedAt: '2026-07-04'
url: https://wiki.seeedstudio.com/robotics_page/
---

# 🤖 Robotics

> *"The science of today is the technology of tomorrow." - Edward Teller*

<div className="robotics-page">

  <section className="hero-panel">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>Not sure which guide to read first? Start with the robot kit in your hands.</h2>
      <p>This page reorganizes Seeed Studio robotics documentation into product-based learning paths. Whether you are unboxing your first robot or preparing for teleoperation, ROS2, simulation, AI training, or real-world deployment, start by choosing your robot kit, then follow the recommended steps from hardware bring-up to advanced development.</p>
    </div>
    <div className="hero-tips">
      <div><strong>New users</strong><span>Start with unboxing, wiring, power, drivers, and basic motion checks</span></div>
      <div><strong>Application builders</strong><span>Continue with SDKs, LeRobot, ROS2, visual grasping, or mobile control</span></div>
      <div><strong>AI robotics users</strong><span>Move into simulation, data collection, GR00T, VLA, and reinforcement learning</span></div>
    </div>
  </section>

  <nav className="quick-nav" aria-label="Robotics page quick navigation">
    <a href="#robot-kits">📦 Robot Kits</a>
    <a href="#actuators">⚙️ Joint Actuators</a>
    <a href="#sensors">👁️ Sensors</a>
    <a href="#software">💻 Software Ecosystem</a>
  </nav>

  <section className="kit-index-panel" aria-label="Choose a robotics learning path">
    <div className="section-title-row compact-title">
      <div>
        <span className="section-kicker">Choose a Kit</span>
        <h2>Quickly choose your learning path</h2>
      </div>
      <p>All product cards are collapsed by default. Pick the kit in your hands, then expand the matching learning path.</p>
    </div>
    <div className="kit-index-grid">
      <a href="#rebot-rs"><span>🦾</span><strong>B601-RS</strong><small>RobStride arm learning path</small></a>
      <a href="#rebot-dm"><span>🦾</span><strong>B601-DM</strong><small>Damiao arm learning path</small></a>
      <a href="#soarm"><span>🤗</span><strong>SO100 / SO101</strong><small>Low-cost LeRobot path</small></a>
      <a href="#starai"><span>🦾</span><strong>StarAI</strong><small>ROS2 / MoveIt / GR00T</small></a>
      <a href="#lekiwi"><span>🚗</span><strong>Lekiwi</strong><small>Mobile base and demos</small></a>
      <a href="#stackforce"><span>🦿</span><strong>StackForce Mini</strong><small>Wheeled-legged robot path</small></a>
      <a href="#reachy"><span>🤗</span><strong>Reachy Mini</strong><small>Desktop interactive robot path</small></a>
    </div>
  </section>

  <section id="robot-kits" className="section-block">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Start Here</span>
        <h2>📦 Robot Kits</h2>
      </div>
      <p>Each kit follows the same logic: bring up the hardware first, then enter the software ecosystem, and finally move into AI, ROS, or simulation applications. Expand your product card and follow the steps in order.</p>
    </div>

    <div className="product-stack">

<details id="rebot-rs" className="product-card rebot">
  <summary>
    <div className="product-head">
      <span className="product-icon">🦾</span>
      <div>
        <h3>reBot B601-RS Arm</h3>
        <span>For robot-arm onboarding, teleoperation, visual grasping, ROS2 integration, and AI data collection</span>
      </div>
    </div>
    <span className="summary-action">Open learning path</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recommended for</strong><span>First-time reBot Arm users who want to quickly run a real robotic arm</span></div>
      <div><strong>Learning goal</strong><span>Go from power-on checks to LeRobot teleoperation, visual grasping, and ROS2 integration</span></div>
      <div><strong>Suggested order</strong><span>Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/rebot_b601_rs_getting_started/"><span className="step-index">1</span><div><b>Getting Started</b><small>Complete unboxing, wiring, power checks, driver setup, and basic motion tests to verify the arm is working.</small></div><em>Start here</em></a>
      <a className="step-card" href="/rebot_arm_b601_rs_lerobot/"><span className="step-index">2</span><div><b>LeRobot Teleoperation and Data Collection</b><small>Learn how to teleoperate the arm and record data for imitation learning and embodied AI tasks.</small></div><em>Data collection</em></a>
      <a className="step-card" href="/rebot_arm_b601_rs_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio Kinematics Visualization</b><small>Understand robot models, joints, coordinate frames, and forward/inverse kinematics.</small></div><em>Control</em></a>
      <a className="step-card" href="/rebot_arm_b601_rs_grasping_demo/"><span className="step-index">4</span><div><b>Visual Grasping Demo</b><small>Combine camera perception and grasp pose generation to complete real object grasping.</small></div><em>Application</em></a>
      <a className="step-card" href="/rebot_arm_b601_rs_ros2_integration/"><span className="step-index">5</span><div><b>ROS2 Integration</b><small>Connect the arm to the ROS2 ecosystem for perception, planning, navigation, and simulation workflows.</small></div><em>Integration</em></a>
    </div>
  </div>
</details>

<details id="rebot-dm" className="product-card rebot">
  <summary>
    <div className="product-head">
      <span className="product-icon">🦾</span>
      <div>
        <h3>reBot B601-DM Arm</h3>
        <span>For Damiao-motor users learning robot control, LeRobot, Pinocchio, and ROS2</span>
      </div>
    </div>
    <span className="summary-action">Open learning path</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recommended for</strong><span>B601-DM users who want robot-arm control and AI data collection</span></div>
      <div><strong>Learning goal</strong><span>Complete basic drivers, kinematic modeling, LeRobot data collection, and visual grasping demos</span></div>
      <div><strong>Suggested order</strong><span>Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/rebot_b601_dm_getting_started/"><span className="step-index">1</span><div><b>Getting Started</b><small>Check power, CAN communication, drivers, and basic motion to confirm the hardware is ready.</small></div><em>Start here</em></a>
      <a className="step-card" href="/rebot_arm_b601_dm_lerobot/"><span className="step-index">2</span><div><b>LeRobot Data Collection</b><small>Use LeRobot for teleoperation, recording, and preparing imitation learning datasets.</small></div><em>AI data</em></a>
      <a className="step-card" href="/rebot_arm_b601_dm_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio and Meshcat</b><small>Load and visualize the robot model, then learn kinematics and joint-space control basics.</small></div><em>Control</em></a>
      <a className="step-card" href="/rebot_arm_b601_dm_grasping_demo/"><span className="step-index">4</span><div><b>Visual Grasping Demo</b><small>Combine the arm with vision algorithms to grasp real objects in a physical scene.</small></div><em>Application</em></a>
      <a className="step-card" href="/rebot_arm_b601_dm_ros2_integration/"><span className="step-index">5</span><div><b>ROS2 Integration</b><small>Connect the arm to ROS2 for MoveIt, perception nodes, and system-level applications.</small></div><em>Integration</em></a>
    </div>
  </div>
</details>

<details id="soarm" className="product-card soarm">
  <summary>
    <div className="product-head">
      <span className="product-icon">🤗</span>
      <div>
        <h3>SO100 / SO101 Arm</h3>
        <span>For low-cost robot-arm onboarding, LeRobot, simulation, reinforcement learning, and GR00T/VLA experiments</span>
      </div>
    </div>
    <span className="summary-action">Open learning path</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recommended for</strong><span>Users who want to start embodied AI with an affordable robotic arm</span></div>
      <div><strong>Learning goal</strong><span>Move from servo debugging to simulation, reinforcement learning, GR00T, and dual-arm training</span></div>
      <div><strong>Suggested order</strong><span>Setup → Servo Debugging → Simulation → Isaac Lab → GR00T → Dual Arm</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/lerobot_so100m_new/"><span className="step-index">1</span><div><b>SO100 / SO101 Getting Started</b><small>Complete hardware setup, connection, calibration, and the minimum runnable test.</small></div><em>Start here</em></a>
      <a className="step-card" href="/lerobot_steering_gear_debugging_tool/"><span className="step-index">2</span><div><b>Servo Debugging Tool</b><small>Check servo IDs, direction, zero points, and communication status before training.</small></div><em>Debugging</em></a>
      <a className="step-card" href="/simulate_soarm101_by_leisaac/"><span className="step-index">3</span><div><b>LeIsaac Simulation</b><small>Understand the robot model, scene, and task setup in simulation before Sim2Real.</small></div><em>Simulation</em></a>
      <a className="step-card" href="/training_soarm101_policy_with_isaacLab/"><span className="step-index">4</span><div><b>Isaac Lab Reinforcement Learning</b><small>Learn task setup, rewards, policy training, and deployment flow in simulation.</small></div><em>Advanced</em></a>
      <a className="step-card" href="/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="step-index">5</span><div><b>SO101 with NVIDIA GR00T</b><small>Enter the VLA and embodied AI model fine-tuning workflow with Jetson deployment.</small></div><em>VLA</em></a>
      <a className="step-card" href="/lerobot_double_arm_so_arm_training/"><span className="step-index">6</span><div><b>Dual-Arm SO-ARM Training</b><small>Learn more complex dual-arm data collection, training, and task execution workflows.</small></div><em>Complex tasks</em></a>
      <a className="step-card optional" href="/control_robotic_arm_via_phospho/"><span className="step-index">+</span><div><b>Phospho LeRobot</b><small>Optional extension for users who want to try a third-party data collection and training platform.</small></div><em>Optional</em></a>
    </div>
  </div>
</details>

<details id="starai" className="product-card starai">
  <summary>
    <div className="product-head">
      <span className="product-icon">🦾</span>
      <div>
        <h3>StarAI Arm</h3>
        <span>For basic robot-arm control, MoveIt 2, ROS2 planning, and GR00T applications</span>
      </div>
    </div>
    <span className="summary-action">Open learning path</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recommended for</strong><span>Users learning ROS2 robot-arm planning and AI control demos</span></div>
      <div><strong>Learning goal</strong><span>Run basic control, MoveIt 2 planning, and GR00T-based control</span></div>
      <div><strong>Suggested order</strong><span>Getting Started → MoveIt 2 → GR00T</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/lerobot_starai_arm/"><span className="step-index">1</span><div><b>StarAI Arm Getting Started</b><small>Complete hardware connection, basic control, and the minimum runnable example.</small></div><em>Start here</em></a>
      <a className="step-card" href="/starai_arm_ros_moveit/"><span className="step-index">2</span><div><b>MoveIt 2 Motion Planning</b><small>Learn model import, planning scenes, path planning, and ROS2 arm development.</small></div><em>ROS2</em></a>
      <a className="step-card" href="/control_robotic_arm_via_gr00t/"><span className="step-index">3</span><div><b>StarAI with NVIDIA GR00T</b><small>Enter large-model and VLA-based robot-arm control applications.</small></div><em>AI control</em></a>
    </div>
  </div>
</details>

<details id="lekiwi" className="product-card lekiwi">
  <summary>
    <div className="product-head">
      <span className="product-icon">🚗</span>
      <div>
        <h3>Lekiwi Mobile Base</h3>
        <span>For mobile robot onboarding, base control, and sound-following applications</span>
      </div>
    </div>
    <span className="summary-action">Open learning path</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recommended for</strong><span>First-time mobile-base users who want to get the robot moving</span></div>
      <div><strong>Learning goal</strong><span>Complete basic base control and try sound-following demos</span></div>
      <div><strong>Note</strong><span>The ROS2 step has been removed here to keep this path focused on the current product onboarding flow</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/lerobot_lekiwi/"><span className="step-index">1</span><div><b>Lekiwi Mobile Base Getting Started</b><small>Complete assembly, connection, basic motion control, and safety checks.</small></div><em>Start here</em></a>
      <a className="step-card" href="/sound_follow_robot/"><span className="step-index">2</span><div><b>Sound Following Demo</b><small>Combine audio input and base motion control for an intuitive interactive mobile robot demo.</small></div><em>Application</em></a>
    </div>
  </div>
</details>

<details id="stackforce" className="product-card stackforce">
  <summary>
    <div className="product-head">
      <span className="product-icon">🦿</span>
      <div>
        <h3>StackForce Mini Wheeled-Legged Robot</h3>
        <span>For wheeled-legged structures, balance control, motion planning, and control algorithms</span>
      </div>
    </div>
    <span className="summary-action">Open learning path</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recommended for</strong><span>Users interested in mobile robots, wheeled-legged robots, and balance control</span></div>
      <div><strong>Learning goal</strong><span>Understand the hardware structure, control logic, and basic motion capabilities</span></div>
      <div><strong>Suggested order</strong><span>Getting Started → Control Principles → Motion Debugging</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/StackForce_Mini_Wheeled_Legged_Robot/"><span className="step-index">1</span><div><b>StackForce Mini Getting Started</b><small>Learn the hardware, basic deployment, motion control, and introductory wheeled-legged experiments.</small></div><em>Course</em></a>
    </div>
  </div>
</details>

<details id="reachy" className="product-card reachy">
  <summary>
    <div className="product-head">
      <span className="product-icon">🤗</span>
      <div>
        <h3>Reachy Mini</h3>
        <span>For desktop robotics, human-robot interaction, agents, Python SDK, simulation, and AI integration</span>
      </div>
    </div>
    <span className="summary-action">Open learning path</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recommended for</strong><span>Users who want desktop robot interaction, voice dialogue, motion control, and agent applications</span></div>
      <div><strong>Learning goal</strong><span>Start with basic use, choose Wireless or Lite, then learn SDK development, AI integration, and troubleshooting</span></div>
      <div><strong>Documentation map</strong><span>Organized as Product Overview → Platform Setup → SDK Development → AI Apps → Troubleshooting → API Reference</span></div>
    </div>

    <div className="reachy-path-grid">
      <div className="mini-track">
        <h4>① Understand the Product</h4>
        <a href="/reachymini_intro/">Reachy Mini Overview</a>
        <a href="/reachymini_getting_started/">ReachyMini Getting Started</a>
      </div>
      <div className="mini-track">
        <h4>② Choose Your Platform</h4>
        <a href="/reachymini_platforms_simulation_get_started/">Simulation Setup</a>
        <a href="/reachymini_platforms_reachy_mini_get_started/">Reachy Mini Wireless Setup</a>
        <a href="/reachymini_platforms_reachy_mini_usage/">Using Reachy Mini</a>
        <a href="/reachymini_platforms_reachy_mini_hardware/">Reachy Mini Hardware Datasheet</a>
        <a href="/reachymini_platforms_reachy_mini_lite_get_started/">Reachy Mini Lite Setup</a>
        <a href="/reachymini_platforms_reachy_mini_lite_usage/">Using Reachy Mini Lite</a>
        <a href="/reachymini_platforms_reachy_mini_lite_hardware/">Reachy Mini Lite Hardware Datasheet</a>
      </div>
      <div className="mini-track">
        <h4>③ SDK and Development Basics</h4>
        <a href="/reachymini_sdk_readme/">Reachy Mini SDK</a>
        <a href="/reachymini_sdk_installation/">Installation Guide</a>
        <a href="/reachymini_sdk_quickstart/">Quickstart Guide</a>
        <a href="/reachymini_sdk_python-sdk/">Python SDK Reference</a>
        <a href="/reachymini_sdk_core-concept/">Core Concepts and Architecture</a>
        <a href="/reachymini_sdk_media-architecture/">Media Architecture</a>
        <a href="/reachymini_sdk_gstreamer-installation/">GStreamer Installation</a>
        <a href="/reachymini_sdk_javascript-sdk/">JavaScript SDK and Web Apps</a>
      </div>
      <div className="mini-track">
        <h4>④ Apps and AI Integration</h4>
        <a href="/reachymini_sdk_integration/">Integration and Applications</a>
        <a href="/reachymini_sdk_apps/">Build and Publish Apps</a>
        <a href="/reachymini_conversation/">Doubao LLM Conversation Demo</a>
        <a href="/reachymini_vibe-code-with-your-agent/">Vibe Coding with an Agent</a>
        <a href="/reachymini_agents/">Development Guide for AI Agents</a>
      </div>
      <div className="mini-track">
        <h4>⑤ Media, System, and Advanced Operations</h4>
        <a href="/reachymini_platforms_reachy_mini_media_advanced_controls/">Wireless Advanced Media Controls</a>
        <a href="/reachymini_platforms_reachy_mini_lite_media_advanced_controls/">Lite Advanced Media Controls</a>
        <a href="/reachymini_platforms_reachy_mini_lite_wizard/">Read Motor Parameters with Dynamixel Wizard</a>
        <a href="/reachymini_platforms_reachy_mini_development_workflow/">Wireless Development Workflow</a>
        <a href="/reachymini_platforms_reachy_mini_install_daemon_from_branch/">Install Daemon from a Branch</a>
        <a href="/reachymini_platforms_reachy_mini_reflash_the_rpi_iso/">Reflash Raspberry Pi OS Image</a>
        <a href="/reachymini_platforms_reachy_mini_reset/">Bluetooth Reset</a>
      </div>
      <div className="mini-track">
        <h4>⑥ Examples</h4>
        <a href="/reachymini_examples_minimal_demo/">Minimal Demo</a>
        <a href="/reachymini_examples_goto_interpolation_playground/">Goto Interpolation Playground</a>
        <a href="/reachymini_examples_look_at/">Look at Image</a>
        <a href="/reachymini_examples_mini_head_position_gui/">Head Position GUI</a>
        <a href="/reachymini_examples_joy_controller/">Joystick Controller</a>
        <a href="/reachymini_examples_imu/">IMU Example</a>
        <a href="/reachymini_examples_custom_media_manager/">Custom Media Manager</a>
        <a href="/reachymini_examples_reachy_compliant_demo/">Compliant Mode Demo</a>
        <a href="/reachymini_examples_recorded_moves/">Recorded Moves</a>
        <a href="/reachymini_examples_rerun_viewer/">Rerun Viewer</a>
        <a href="/reachymini_examples_sequence/">Sequence Demo</a>
        <a href="/reachymini_examples_sound_doa/">Sound Direction of Arrival</a>
        <a href="/reachymini_examples_sound_play/">Sound Playback</a>
        <a href="/reachymini_examples_sound_record/">Sound Recording</a>
        <a href="/reachymini_examples_take_picture/">Take Picture</a>
      </div>
      <div className="mini-track">
        <h4>⑦ Troubleshooting and Maintenance</h4>
        <a href="/reachymini_troubleshooting/">Troubleshooting and FAQ</a>
        <a href="/reachymini_troubleshooting_motors_diagnosis/">Motor Diagnosis and Troubleshooting</a>
        <a href="/reachymini_troubleshooting_change_mic_fpc_cable/">Replace the Microphone FPC Cable</a>
        <a href="/reachymini_troubleshooting_spherical_joints_maintenance/">Spherical Joint Maintenance</a>
        <a href="/reachymini_troubleshooting_roadmap/">Reachy Mini Roadmap</a>
      </div>
      <div className="mini-track">
        <h4>⑧ API Reference</h4>
        <a href="/reachymini_api_reachymini/">ReachyMini API Reference</a>
        <a href="/reachymini_api_rest-api/">REST API Reference</a>
        <a href="/reachymini_api_daemon/">Daemon API</a>
        <a href="/reachymini_api_motion/">Motion API</a>
        <a href="/reachymini_api_media/">Media API</a>
        <a href="/reachymini_api_apps/">Apps API Reference</a>
        <a href="/reachymini_api_tools/">Tools API Reference</a>
        <a href="/reachymini_api_utils/">Utils API Reference</a>
      </div>
    </div>
  </div>
</details>

    </div>
  </section>

  <section id="actuators" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Reference</span>
        <h2>⚙️ Joint Actuators</h2>
      </div>
      <p>Use these references when you need to debug motors, understand communication protocols, or diagnose joint-level issues.</p>
    </div>
    <div className="resource-grid">
      <a href="/myactuator_series/">MyActuator X Series</a>
      <a href="/damiao_series/">Damiao DM43 Series</a>
      <a href="/feetech_servo/">Feetech STS3215 Servo</a>
      <a href="/hightorque_control/">HighTorque Series</a>
      <a href="/fashionstar_servo/">Fashionstar Series</a>
      <a href="/stackforce_series/">Stackforce Series</a>
      <a href="/robstride_control/">RobStride Control</a>
    </div>
  </section>

  <section id="sensors" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Reference</span>
        <h2>👁️ Sensors</h2>
      </div>
      <p>Useful for visual grasping, SLAM, voice interaction, and robot-state perception.</p>
    </div>
    <div className="resource-columns">
      <div><h4>📡 LiDAR</h4><a href="/robosense_lidar/">RoboSense</a><a href="/mid360/">Livox MID360</a><a href="/a_loam/">A-LOAM Algorithm</a><a href="/slamtec/">Slamtec Series</a></div>
      <div><h4>📷 Camera</h4><a href="/orbbec_gemini2/">Orbbec Gemini 2</a><a href="/orbbec_gemini_335lg/">Gemini 335Lg Depth Camera</a><a href="/orbbec_gemini336/">Gemini 336 Depth Camera</a><a href="/sensing_gmsl_cameras/">SENSING GMSL2 Camera</a><a href="/ac1/">RoboSense AC1</a><a href="/orbbec_depth_camera_on_ros/">Orbbec with ROS</a><a href="/orb_slam3_orbbec_gemini2/">ORB-SLAM3 with Gemini2</a><a href="/csi_camera_on_ros/">CSI Camera on Jetson</a><a href="/pycuvslam_recomputer_robotics/">PyCuVSLAM</a></div>
      <div><h4>🎤 Voice</h4><a href="/ReSpeaker_Core_v2.0/">ReSpeaker Core v2.0</a><a href="/ReSpeaker_Mic_Array_v2.0/">ReSpeaker Mic Array v2.0</a><h4>🧭 IMU</h4><a href="/hexfellow_y200/">HEXFELLOW Y200</a><a href="/wheeltec_imu/">WHEELTEC IMU</a></div>
    </div>
  </section>

  <section id="software" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Reference</span>
        <h2>💻 Software Ecosystem</h2>
      </div>
      <p>After your kit is running, choose a software direction based on your project goal: ROS, Isaac, PX4, or VLA.</p>
    </div>
    <div className="resource-columns">
      <div><h4>ROS Ecosystem</h4><a href="/installing_ros1/">ROS 1 Installation</a><a href="/install_ros2_humble/">ROS 2 Installation</a><a href="/install_isaacros/">Isaac ROS Installation</a><a href="/isaac_ros_apriltag/">Isaac ROS AprilTag</a><a href="/isaac_ros_visual_slam/">Isaac ROS V-SLAM</a></div>
      <div><h4>NVIDIA Isaac</h4><a href="/install_isaaclab/">Isaac Lab Installation</a><a href="/training_soarm101_policy_with_isaacLab/">SO Arm Reinforcement Learning</a><a href="/simulate_soarm101_by_leisaac/">SO100 Arm with IsaacSim</a></div>
      <div><h4>PX4 / VLA</h4><a href="/control_px4_with_recomputer_jetson/">PX4 with Jetson</a><a href="/object_tracking_with_reComputer_jetson_and_pX4/">PX4 Object Tracking</a><a href="/control_robotic_arm_via_gr00t/">StarAI with NVIDIA GR00T</a></div>
    </div>
  </section>

</div>

<style>{`
.robotics-page {
  --rp-page-bg: #ffffff;
  --rp-card-bg: #ffffff;
  --rp-card-bg-soft: #f8fafc;
  --rp-card-bg-hover: #ffffff;
  --rp-text: #0f172a;
  --rp-text-muted: #64748b;
  --rp-text-soft: #94a3b8;
  --rp-border: rgba(148, 163, 184, 0.28);
  --rp-border-strong: rgba(148, 163, 184, 0.42);
  --rp-shadow-sm: 0 8px 22px rgba(15, 23, 42, 0.06);
  --rp-shadow-md: 0 16px 40px rgba(15, 23, 42, 0.10);
  --rp-shadow-accent: 0 16px 34px rgba(37, 99, 235, 0.12);
  --rp-accent: #2563eb;
  --rp-accent-soft: rgba(37, 99, 235, 0.10);
  --rp-accent-border: rgba(37, 99, 235, 0.24);
  width: 100%;
  color: var(--rp-text);
}

.robotics-page * { box-sizing: border-box; }
.robotics-page a { -webkit-tap-highlight-color: transparent; }
.robotics-page a:focus-visible, .robotics-page summary:focus-visible { outline: 3px solid var(--rp-accent-border); outline-offset: 3px; }

.hero-panel {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.8fr);
  gap: 1.5rem;
  padding: 2.1rem;
  border-radius: 28px;
  background:
    radial-gradient(circle at 12% 18%, rgba(37, 99, 235, 0.18), transparent 34%),
    radial-gradient(circle at 88% 76%, rgba(20, 184, 166, 0.18), transparent 38%),
    linear-gradient(135deg, rgba(248, 250, 252, 0.94), rgba(239, 246, 255, 0.96));
  border: 1px solid var(--rp-accent-border);
  margin: 1.5rem 0 1.25rem;
  box-shadow: var(--rp-shadow-sm);
}
.hero-panel::after {
  content: "";
  position: absolute;
  right: -80px;
  top: -80px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: rgba(37, 99, 235, 0.08);
  pointer-events: none;
}
.eyebrow, .section-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.76rem;
  font-weight: 850;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--rp-accent);
  margin-bottom: 0.6rem;
}
.eyebrow::before, .section-kicker::before {
  content: "";
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 999px;
  background: var(--rp-accent);
  box-shadow: 0 0 0 4px var(--rp-accent-soft);
}
.hero-panel h2 { margin: 0 0 0.75rem; font-size: clamp(1.55rem, 3vw, 2.35rem); line-height: 1.16; letter-spacing: -0.03em; }
.hero-panel p { margin: 0; color: var(--rp-text-muted); line-height: 1.78; max-width: 780px; }
.hero-tips { display: grid; gap: 0.75rem; position: relative; z-index: 1; }
.hero-tips div {
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid var(--rp-border);
  border-radius: 18px;
  padding: 0.95rem 1rem;
  box-shadow: var(--rp-shadow-sm);
  backdrop-filter: blur(10px);
}
.hero-tips strong { display: block; color: var(--rp-text); margin-bottom: 0.28rem; }
.hero-tips span { color: var(--rp-text-muted); font-size: 0.92rem; line-height: 1.5; }

.quick-nav {
  position: sticky;
  top: 0.75rem;
  z-index: 3;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
  padding: 0.75rem;
  margin: 1rem 0 2rem;
  border-radius: 20px;
  background: color-mix(in srgb, var(--rp-card-bg) 88%, transparent);
  border: 1px solid var(--rp-border);
  backdrop-filter: blur(14px);
  box-shadow: var(--rp-shadow-sm);
}
.quick-nav a {
  text-align: center;
  padding: 0.85rem 1rem;
  border-radius: 14px;
  text-decoration: none !important;
  font-weight: 780;
  color: var(--rp-text);
  background: var(--rp-card-bg-soft);
  border: 1px solid transparent;
  transition: transform 0.2s ease, color 0.2s ease, border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}
.quick-nav a:hover { transform: translateY(-2px); color: var(--rp-accent); border-color: var(--rp-accent-border); background: var(--rp-card-bg-hover); box-shadow: var(--rp-shadow-accent); }

.section-block { margin: 2.6rem 0; scroll-margin-top: 6rem; }
.section-title-row { display: flex; justify-content: space-between; align-items: flex-end; gap: 1.25rem; margin-bottom: 1.25rem; }
.section-title-row h2 { margin: 0.15rem 0 0; font-size: 1.7rem; letter-spacing: -0.02em; }
.section-title-row p { margin: 0; max-width: 580px; color: var(--rp-text-muted); line-height: 1.68; }

.product-stack { display: grid; gap: 1rem; }
.product-card {
  --rp-accent: #2563eb;
  --rp-accent-soft: rgba(37, 99, 235, 0.10);
  --rp-accent-border: rgba(37, 99, 235, 0.26);
  position: relative;
  border: 1px solid var(--rp-border);
  border-radius: 24px;
  background: var(--rp-card-bg);
  box-shadow: var(--rp-shadow-sm);
  overflow: hidden;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}
.product-card::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 5px;
  background: linear-gradient(180deg, var(--rp-accent), color-mix(in srgb, var(--rp-accent) 52%, #14b8a6));
  opacity: 0.88;
}
.product-card:hover { border-color: var(--rp-accent-border); box-shadow: var(--rp-shadow-md); }
.product-card[open] { border-color: var(--rp-accent-border); }
.product-card.rebot { --rp-accent: #2563eb; --rp-accent-soft: rgba(37, 99, 235, 0.10); --rp-accent-border: rgba(37, 99, 235, 0.28); }
.product-card.soarm { --rp-accent: #f97316; --rp-accent-soft: rgba(249, 115, 22, 0.12); --rp-accent-border: rgba(249, 115, 22, 0.30); }
.product-card.starai { --rp-accent: #7c3aed; --rp-accent-soft: rgba(124, 58, 237, 0.12); --rp-accent-border: rgba(124, 58, 237, 0.30); }
.product-card.lekiwi { --rp-accent: #0891b2; --rp-accent-soft: rgba(8, 145, 178, 0.12); --rp-accent-border: rgba(8, 145, 178, 0.30); }
.product-card.stackforce { --rp-accent: #ca8a04; --rp-accent-soft: rgba(202, 138, 4, 0.13); --rp-accent-border: rgba(202, 138, 4, 0.30); }
.product-card.reachy { --rp-accent: #0d9488; --rp-accent-soft: rgba(13, 148, 136, 0.12); --rp-accent-border: rgba(13, 148, 136, 0.30); }
.product-card summary {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;
  padding: 1.18rem 1.28rem 1.18rem 1.45rem;
  background: linear-gradient(90deg, var(--rp-accent-soft), transparent 46%);
}
.product-card summary::-webkit-details-marker { display: none; }
.product-card summary::after {
  content: "⌄";
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  color: var(--rp-accent);
  background: var(--rp-accent-soft);
  font-size: 1.15rem;
  font-weight: 900;
  transition: transform 0.2s ease;
}
.product-card[open] summary::after { transform: rotate(180deg); }
.product-head { display: flex; align-items: center; gap: 0.95rem; min-width: 0; }
.product-icon { width: 46px; height: 46px; display: inline-flex; align-items: center; justify-content: center; border-radius: 16px; background: var(--rp-accent-soft); color: var(--rp-accent); font-size: 1.45rem; flex: 0 0 auto; }
.product-head h3 { margin: 0 0 0.25rem; font-size: 1.18rem; letter-spacing: -0.01em; }
.product-head span { color: var(--rp-text-muted); font-size: 0.92rem; line-height: 1.48; }
.summary-action { flex: 0 0 auto; padding: 0.42rem 0.7rem; border-radius: 999px; font-size: 0.76rem; font-weight: 850; color: var(--rp-accent); background: var(--rp-accent-soft); border: 1px solid var(--rp-accent-border); }
.product-card[open] .summary-action { color: #047857; background: rgba(16, 185, 129, 0.12); border-color: rgba(16, 185, 129, 0.26); }
.product-body { border-top: 1px solid var(--rp-border); padding: 1.25rem; background: linear-gradient(180deg, var(--rp-card-bg), var(--rp-card-bg-soft)); }

.product-meta-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.8rem; margin-bottom: 1rem; }
.product-meta-grid div { padding: 0.95rem; border-radius: 16px; background: color-mix(in srgb, var(--rp-card-bg) 82%, var(--rp-accent-soft)); border: 1px solid var(--rp-border); }
.product-meta-grid strong { display: block; margin-bottom: 0.35rem; color: var(--rp-text); }
.product-meta-grid span { color: var(--rp-text-muted); font-size: 0.88rem; line-height: 1.58; }
.learning-steps { display: grid; gap: 0.75rem; }
.step-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.9rem;
  padding: 0.96rem;
  border-radius: 17px;
  background: var(--rp-card-bg);
  border: 1px solid var(--rp-border);
  text-decoration: none !important;
  color: inherit;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}
.step-card:hover { transform: translateX(4px); border-color: var(--rp-accent-border); box-shadow: var(--rp-shadow-accent); background: var(--rp-card-bg-hover); }
.step-index { width: 36px; height: 36px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; background: var(--rp-accent); color: #fff; font-weight: 900; box-shadow: 0 8px 18px var(--rp-accent-soft); }
.step-card b { display: block; margin-bottom: 0.25rem; color: var(--rp-text); }
.step-card small { display: block; color: var(--rp-text-muted); line-height: 1.58; font-size: 0.86rem; }
.step-card em { justify-self: end; font-style: normal; font-size: 0.72rem; font-weight: 850; color: var(--rp-accent); background: var(--rp-accent-soft); border: 1px solid var(--rp-accent-border); border-radius: 999px; padding: 0.32rem 0.58rem; white-space: nowrap; }
.step-card.optional .step-index { background: #64748b; }
.step-card.optional em { color: #475569; background: #e2e8f0; border-color: rgba(100, 116, 139, 0.28); }

.reachy-path-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(235px, 1fr)); gap: 0.9rem; align-items: start; }
.mini-track { background: var(--rp-card-bg); border: 1px solid var(--rp-border); border-radius: 18px; padding: 1rem; box-shadow: 0 6px 18px rgba(15, 23, 42, 0.035); }
.mini-track h4 { margin: 0 0 0.75rem; color: var(--rp-text); font-size: 0.98rem; }
.mini-track a { display: block; padding: 0.58rem 0.68rem; margin: 0.42rem 0; border-radius: 11px; background: var(--rp-card-bg-soft); text-decoration: none !important; color: var(--rp-text-muted); font-size: 0.88rem; border: 1px solid transparent; transition: all 0.18s ease; }
.mini-track a:hover { color: var(--rp-accent); background: var(--rp-accent-soft); border-color: var(--rp-accent-border); transform: translateX(2px); }

.note-box { margin-top: 1rem; padding: 0.9rem 1rem; border-radius: 14px; color: #92400e; background: #fffbeb; border: 1px solid #fde68a; font-size: 0.88rem; line-height: 1.6; }
.resource-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; }
.resource-grid a, .resource-columns a { display: block; padding: 0.75rem 0.85rem; border-radius: 13px; text-decoration: none !important; color: var(--rp-text-muted); background: var(--rp-card-bg); border: 1px solid var(--rp-border); transition: all 0.2s ease; }
.resource-grid a:hover, .resource-columns a:hover { color: var(--rp-accent); border-color: var(--rp-accent-border); transform: translateY(-2px); box-shadow: var(--rp-shadow-accent); }
.resource-columns { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
.resource-columns div { padding: 1rem; border-radius: 19px; background: var(--rp-card-bg-soft); border: 1px solid var(--rp-border); }
.resource-columns h4 { margin: 0 0 0.75rem; color: var(--rp-text); }
.resource-columns a { margin-bottom: 0.55rem; }

html[data-theme='dark'] .robotics-page {
  --rp-page-bg: #111317;
  --rp-card-bg: #1b1d22;
  --rp-card-bg-soft: #23262d;
  --rp-card-bg-hover: #262a32;
  --rp-text: #f8fafc;
  --rp-text-muted: #cbd5e1;
  --rp-text-soft: #94a3b8;
  --rp-border: rgba(148, 163, 184, 0.18);
  --rp-border-strong: rgba(148, 163, 184, 0.28);
  --rp-shadow-sm: 0 10px 26px rgba(0, 0, 0, 0.28);
  --rp-shadow-md: 0 18px 42px rgba(0, 0, 0, 0.36);
  --rp-shadow-accent: 0 16px 34px rgba(96, 165, 250, 0.10);
}
html[data-theme='dark'] .hero-panel {
  background:
    radial-gradient(circle at 12% 18%, rgba(96, 165, 250, 0.20), transparent 34%),
    radial-gradient(circle at 88% 76%, rgba(45, 212, 191, 0.14), transparent 38%),
    linear-gradient(135deg, #171a20, #111827);
  border-color: var(--rp-border-strong);
}
html[data-theme='dark'] .hero-tips div { background: rgba(27, 29, 34, 0.78); }
html[data-theme='dark'] .quick-nav { background: rgba(17, 19, 23, 0.82); }
html[data-theme='dark'] .note-box { color: #fde68a; background: rgba(146, 64, 14, 0.18); border-color: rgba(253, 230, 138, 0.24); }
html[data-theme='dark'] .step-card.optional em { color: #cbd5e1; background: rgba(100, 116, 139, 0.20); }

@media (max-width: 900px) {
  .hero-panel, .product-meta-grid, .resource-columns { grid-template-columns: 1fr; }
  .section-title-row { display: block; }
  .section-title-row p { margin-top: 0.5rem; }
  .quick-nav { grid-template-columns: repeat(2, minmax(0, 1fr)); position: static; }
  .step-card { grid-template-columns: auto minmax(0, 1fr); }
  .step-card em { grid-column: 2; justify-self: start; }
}
@media (max-width: 560px) {
  .hero-panel { padding: 1.25rem; border-radius: 20px; }
  .quick-nav { grid-template-columns: 1fr; }
  .product-card summary { align-items: flex-start; padding-right: 0.9rem; }
  .summary-action { display: none; }
  .product-card summary::after { margin-top: 0.45rem; }
  .product-icon { width: 40px; height: 40px; }
  .product-body { padding: 1rem; }
}
@media (prefers-reduced-motion: reduce) {
  .robotics-page *, .robotics-page *::before, .robotics-page *::after { transition: none !important; animation: none !important; scroll-behavior: auto !important; }
}


/* Optimized collapsed-card learning path additions */
.kit-index-panel {
  margin: 1.6rem 0 2.2rem;
  padding: 1.25rem;
  border-radius: 24px;
  border: 1px solid var(--rp-border);
  background: linear-gradient(135deg, var(--rp-card-bg), var(--rp-card-bg-soft));
  box-shadow: var(--rp-shadow-sm);
}
.compact-title { margin-bottom: 1rem; }
.kit-index-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 0.8rem;
}
.kit-index-grid a {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  grid-template-areas: "icon title" "icon desc";
  gap: 0.18rem 0.75rem;
  align-items: center;
  padding: 0.9rem;
  border-radius: 16px;
  border: 1px solid var(--rp-border);
  background: var(--rp-card-bg);
  text-decoration: none !important;
  color: inherit;
  transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}
.kit-index-grid a:hover {
  transform: translateY(-2px);
  border-color: var(--rp-accent-border);
  box-shadow: var(--rp-shadow-accent);
}
.kit-index-grid span {
  grid-area: icon;
  width: 2.35rem;
  height: 2.35rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: var(--rp-accent-soft);
  font-size: 1.2rem;
}
.kit-index-grid strong { grid-area: title; color: var(--rp-text); }
.kit-index-grid small { grid-area: desc; color: var(--rp-text-muted); line-height: 1.35; }
.product-card { scroll-margin-top: 6rem; }
.product-card .summary-action { position: relative; min-width: 6.3rem; text-align: center; }
.product-card[open] .summary-action { font-size: 0; }
.product-card[open] .summary-action::after { content: "Close learning path"; font-size: 0.76rem; }
.product-card:not([open]) summary { background: linear-gradient(90deg, var(--rp-card-bg), var(--rp-card-bg-soft)); }
.product-card:not([open]) .product-head span { color: var(--rp-text-muted); }
.product-body { animation: rpFadeIn 0.18s ease-out; }
@keyframes rpFadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}
.product-meta-grid div, .mini-track, .resource-columns div, .kit-index-panel {
  backdrop-filter: blur(6px);
}
html[data-theme='dark'] .kit-index-panel {
  background: linear-gradient(135deg, var(--rp-card-bg), var(--rp-card-bg-soft));
}
html[data-theme='dark'] .kit-index-grid a { background: var(--rp-card-bg); }
@media (max-width: 900px) {
  .kit-index-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 560px) {
  .kit-index-panel { padding: 1rem; border-radius: 20px; }
  .kit-index-grid { grid-template-columns: 1fr; }
}

`}</style>
