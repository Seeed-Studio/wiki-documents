---
description: Seeed Studio robotics docs and learning paths.
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
updatedAt: '2026-07-25'
url: https://wiki.seeedstudio.com/robotics_page/
---

import '/src/css/robotics-page-style.css';

# 🤖 Robotics

> *"The science of today is the technology of tomorrow." - Edward Teller*

<div className="robotics-page">

  <section className="hero-panel">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>Start with your robot kit</h2>
      <p>Find the right Seeed Studio robotics path by product. Pick your kit, then follow the steps from setup to advanced development.</p>
    </div>
    <div className="hero-tips">
      <div><strong>New device</strong><span>Unbox, wire, power on, install drivers, and test motion</span></div>
      <div><strong>Build applications</strong><span>Use SDKs, LeRobot, ROS2, vision, or mobile control</span></div>
      <div><strong>AI robotics</strong><span>Explore simulation, data collection, GR00T, VLA, and RL</span></div>
    </div>
  </section>

  <nav className="quick-nav" aria-label="Robotics page quick navigation">
    <a href="#robot-kits">📦 Robot Kits</a>
    <a href="#actuators">⚙️ Joint Actuators</a>
    <a href="#sensors">👁️ Sensors</a>
    <a href="#software">💻 Software Ecosystem</a>
  </nav>

  <section className="kit-index-panel" aria-label="Quick robot kit selection">
    <div className="section-title-row compact-title">
      <div>
        <span className="section-kicker">Choose a Kit</span>
        <h2>Choose your learning path</h2>
      </div>
      <p>Cards are collapsed by default. Open your kit to view its path.</p>
    </div>
    <div className="kit-index-grid">
      <a href="#rebot-rs"><span>🦾</span><strong>B601-RS</strong><small>RobStride robotic arm path</small></a>
      <a href="#rebot-dm"><span>🦾</span><strong>B601-DM</strong><small>Damiao robotic arm path</small></a>
      <a href="#soarm"><span>🤗</span><strong>SO100 / SO101</strong><small>Low-cost LeRobot path</small></a>
      <a href="#starai"><span>🦾</span><strong>StarAI</strong><small>ROS2 / MoveIt / GR00T</small></a>
      <a href="#lekiwi"><span>🚗</span><strong>Lekiwi</strong><small>Mobile chassis and application demos</small></a>
      <a href="#stackforce"><span>🦿</span><strong>StackForce Mini</strong><small>Wheeled-legged robot path</small></a>
      <a href="#reachy"><span>🤗</span><strong>Reachy Mini</strong><small>Desktop interactive robot path</small></a>
      <a href="#atom"><span>🤖</span><strong>Atom</strong><small>Compact humanoid robot path</small></a>
    </div>
  </section>

  <section id="robot-kits" className="section-block">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Start Here</span>
        <h2>📦 Robot Kits</h2>
      </div>
      <p>Each path starts with hardware setup, then moves into SDK, ROS, simulation, and AI applications.</p>
    </div>

    <div className="product-stack">

<details id="rebot-rs" className="product-card rebot">
  <summary>
    <div className="product-head">
      <span className="product-icon">🦾</span>
      <div>
        <h3>reBot B601-RS Robotic Arm</h3>
        <span>For teleoperation, visual grasping, ROS2, and AI data collection</span>
      </div>
    </div>
    <span className="summary-action">Expand learning plan</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recommended for</strong><span>First-time reBot Arm users</span></div>
      <div><strong>Learning goal</strong><span>Run teleoperation, visual grasping, and ROS2</span></div>
      <div><strong>Recommended order</strong><span>Quick Start → LeRobot → Pinocchio → Visual Grasping → ROS2</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/rebot_b601_rs_getting_started/"><span className="step-index">1</span><div><b>Quick Start</b><small>Unbox, wire, power on, check drivers, and test basic motion.</small></div><em>Required for beginners</em></a>
      <a className="step-card" href="/rebot_arm_b601_rs_lerobot/"><span className="step-index">2</span><div><b>LeRobot Teleoperation and Data Collection</b><small>Collect teleoperation data for imitation learning and embodied AI.</small></div><em>Data collection</em></a>
      <a className="step-card" href="/rebot_arm_b601_rs_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio Kinematics Visualization</b><small>Explore the arm model, joints, frames, and kinematics.</small></div><em>Advanced control</em></a>
      <a className="step-card" href="/rebot_arm_b601_rs_grasping_demo/"><span className="step-index">4</span><div><b>Visual Grasping Demo</b><small>Use vision and grasp-pose generation to pick real objects.</small></div><em>Application demo</em></a>
      <a className="step-card" href="/rebot_arm_b601_rs_ros2_integration/"><span className="step-index">5</span><div><b>ROS2 Integration</b><small>Connect the arm to ROS2 for perception, planning, and simulation.</small></div><em>System integration</em></a>
      <a className="step-card" href="/rebot_arm_b601_rs_isaacsim/"><span className="step-index">6</span><div><b>Isaac Sim Integration</b><small>Simulate the arm in Isaac Sim and sync with the real robot.</small></div><em>Simulation</em></a>

      <a className="step-card" href="/rebot_arm_b601_rs_mit_control/"><span className="step-index">7</span><div><b>MIT Position Control</b><small>Get started with MIT position control for the reBot Arm B601-RS.</small></div><em>Control advanced</em></a>
    </div>
  </div>
</details>

<details id="rebot-dm" className="product-card rebot">
<summary>
  <div className="product-head">
    <span className="product-icon">🦾</span>
    <div>
      <h3>reBot B601-DM Robotic Arm</h3>
      <span>For Damiao-based control, LeRobot, Pinocchio, and ROS2</span>
    </div>
  </div>
  <span className="summary-action">Expand learning plan</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recommended for</strong><span>B601-DM users and AI data collection</span></div>
    <div><strong>Learning goal</strong><span>Set up drivers, kinematics, LeRobot, and grasping</span></div>
    <div><strong>Recommended order</strong><span>Quick Start → LeRobot → Pinocchio → Visual Grasping → ROS2</span></div>
  </div>
<div className="learning-steps">
  <a className="step-card" href="/rebot_b601_dm_getting_started/"><span className="step-index">1</span><div><b>Quick Start</b><small>Check power, CAN, drivers, and basic motion.</small></div><em>Required for beginners</em></a>

  <a className="step-card" href="/rebot_arm_b601_dm_lerobot/"><span className="step-index">2</span><div><b>LeRobot Data Collection</b><small>Record teleoperation data for imitation learning.</small></div><em>AI data</em></a>

  <a className="step-card" href="/rebot_arm_b601_dm_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio and Meshcat</b><small>Load models, visualize motion, and learn kinematics.</small></div><em>Control basics</em></a>

  <a className="step-card" href="/rebot_arm_b601_dm_grasping_demo/"><span className="step-index">4</span><div><b>Visual Grasping Demo</b><small>Combine the arm and vision for real-world grasping.</small></div><em>Application demo</em></a>

  <a className="step-card" href="/rebot_arm_b601_dm_ros2_integration/"><span className="step-index">5</span><div><b>ROS2 Integration</b><small>Use ROS2 with MoveIt, perception, and system apps.</small></div><em>System integration</em></a>

  <a className="step-card" href="/rebot_arm_b601_dm_web_simulator_developer_guide/"><span className="step-index">6</span><div><b>Web Simulator Development</b><small>Learn Web Simulator integration with ROS2/MuJoCo for virtual-real synchronized control.</small></div><em>Simulation dev</em></a>
</div>
</div>
</details>

<details id="soarm" className="product-card soarm">
<summary>
  <div className="product-head">
    <span className="product-icon">🤗</span>
    <div>
      <h3>SO100 / SO101 Robotic Arm</h3>
      <span>Low-cost path for LeRobot, simulation, RL, and GR00T/VLA</span>
    </div>
  </div>
  <span className="summary-action">Expand learning plan</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recommended for</strong><span>Low-cost LeRobot and embodied AI learners</span></div>
    <div><strong>Learning goal</strong><span>Learn servos, simulation, RL, GR00T, and dual arms</span></div>
    <div><strong>Recommended order</strong><span>Getting Started → Servo Debugging → Simulation → Isaac Lab → GR00T → Dual Arms</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/lerobot_so100m_new/"><span className="step-index">1</span><div><b>SO100 / SO101 Quick Start</b><small>Install hardware, connect, calibrate, and run a basic test.</small></div><em>Required for beginners</em></a>
    <a className="step-card" href="/lerobot_steering_gear_debugging_tool/"><span className="step-index">2</span><div><b>Servo Debugging Tool</b><small>Check servo ID, direction, zero point, and communication.</small></div><em>Troubleshooting basics</em></a>
    <a className="step-card" href="/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="step-index">3</span><div><b>SO101 and NVIDIA GR00T</b><small>Fine-tune VLA models and deploy on Jetson.</small></div><em>Advanced VLA</em></a>
    <a className="step-card" href="/lerobot_double_arm_so_arm_training/"><span className="step-index">4</span><div><b>Dual-Arm SO-ARM Training</b><small>Collect data, train, and execute dual-arm tasks.</small></div><em>Complex tasks</em></a>
    <a className="step-card" href="/soarm_amazinghand_teleop/"><span className="step-index">5</span><div><b>SO-ARM with Amazing Hand Dexterous Hand</b><small>Combine SO-ARM101 with Amazing Hand for LeRobot.</small></div><em>Dexterous hand integration</em></a>
    <a className="step-card" href="/simulate_soarm101_by_leisaac/"><span className="step-index">6</span><div><b>LeIsaac Simulation</b><small>Prepare for Sim2Real with simulated models and tasks.</small></div><em>Simulation basics</em></a>
    <a className="step-card" href="/training_soarm101_policy_with_isaacLab/"><span className="step-index">7</span><div><b>Isaac Lab Reinforcement Learning</b><small>Train policies in simulation and review reward design.</small></div><em>Advanced training</em></a>
    <a className="step-card optional" href="/control_robotic_arm_via_phospho/"><span className="step-index">+</span><div><b>Phospho LeRobot</b><small>Try third-party data collection and training platforms.</small></div><em>Optional extension</em></a>
  </div>
</div>
</details>

<details id="starai" className="product-card starai">
<summary>
  <div className="product-head">
    <span className="product-icon">🦾</span>
    <div>
      <h3>StarAI Robotic Arm</h3>
      <span>For basic control, MoveIt 2, ROS2 planning, and GR00T</span>
    </div>
  </div>
  <span className="summary-action">Expand learning plan</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recommended for</strong><span>ROS2 planning and AI control demos</span></div>
    <div><strong>Learning goal</strong><span>Run basic control, MoveIt 2, and GR00T</span></div>
    <div><strong>Recommended order</strong><span>Quick Start → MoveIt 2 → GR00T</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/lerobot_starai_arm/"><span className="step-index">1</span><div><b>StarAI Robotic Arm Quick Start</b><small>Connect hardware, run basic control, and test examples.</small></div><em>Required for beginners</em></a>
    <a className="step-card" href="/starai_arm_ros_moveit/"><span className="step-index">2</span><div><b>MoveIt 2 Motion Planning</b><small>Import models and plan paths with MoveIt 2.</small></div><em>Advanced ROS2</em></a>
    <a className="step-card" href="/control_robotic_arm_via_gr00t/"><span className="step-index">3</span><div><b>StarAI and NVIDIA GR00T</b><small>Build robotic arm control with LLMs / VLA.</small></div><em>AI control</em></a>
  </div>
</div>
</details>

<details id="lekiwi" className="product-card lekiwi">
<summary>
  <div className="product-head">
    <span className="product-icon">🚗</span>
    <div>
      <h3>Lekiwi Mobile Chassis</h3>
      <span>For chassis control and sound-following demos</span>
    </div>
  </div>
  <span className="summary-action">Expand learning plan</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recommended for</strong><span>First-time mobile chassis users</span></div>
    <div><strong>Learning goal</strong><span>Run chassis control and sound-following demos</span></div>
    <div><strong>Note</strong><span>ROS2 steps removed; only the current product path remains</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/lerobot_lekiwi/"><span className="step-index">1</span><div><b>Lekiwi Mobile Chassis Quick Start</b><small>Assemble, connect, test motion, and check safety.</small></div><em>Required for beginners</em></a>
    <a className="step-card" href="/sound_follow_robot/"><span className="step-index">2</span><div><b>Sound-Following Demo</b><small>Use sound input to drive an interactive mobile demo.</small></div><em>Application demo</em></a>
  </div>
</div>
</details>

<details id="stackforce" className="product-card stackforce">
<summary>
  <div className="product-head">
    <span className="product-icon">🦿</span>
    <div>
      <h3>StackForce Mini Wheeled-Legged Robot</h3>
      <span>For wheeled-legged control, balance, and motion planning</span>
    </div>
  </div>
  <span className="summary-action">Expand learning plan</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recommended for</strong><span>Mobile and wheeled-legged robot learners</span></div>
    <div><strong>Learning goal</strong><span>Learn structure, control logic, and basic motion</span></div>
    <div><strong>Recommended order</strong><span>Quick Start → Control Principles → Motion Debugging</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/StackForce_Mini_Wheeled_Legged_Robot/"><span className="step-index">1</span><div><b>StackForce Mini Quick Start</b><small>Learn the hardware, deploy basics, and test motion.</small></div><em>System course</em></a>
  </div>
</div>
</details>

<details id="reachy" className="product-card reachy">
<summary>
  <div className="product-head">
    <span className="product-icon">🤗</span>
    <div>
      <h3>Reachy Mini</h3>
      <span>For desktop HRI, agents, SDK, simulation, and AI</span>
    </div>
  </div>
  <span className="summary-action">Expand learning plan</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recommended for</strong><span>Desktop robot interaction and agent demos</span></div>
    <div><strong>Learning goal</strong><span>Start with basics, then SDK, AI, and troubleshooting</span></div>
    <div><strong>Documentation</strong><span>Organized from basics to platform, SDK, AI, and troubleshooting</span></div>
  </div>

<div className="reachy-path-grid">
            <div className="mini-track">
              <h4>① Get to know the product first</h4>
              <a href="/reachymini_intro/">Reachy Mini Product Introduction</a>
              <a href="/reachymini_getting_started/">ReachyMini Getting Started Guide</a>
            </div>
            <div className="mini-track">
              <h4>② Choose your platform</h4>
              <a href="/reachymini_platforms_simulation_get_started/">Simulation Quick Start</a>
              <a href="/reachymini_platforms_reachy_mini_get_started/">Reachy Mini Wireless Setup Guide</a>
              <a href="/reachymini_platforms_reachy_mini_usage/">Using Reachy Mini</a>
              <a href="/reachymini_platforms_reachy_mini_hardware/">Reachy Mini Hardware Datasheet</a>
              <a href="/reachymini_platforms_reachy_mini_lite_get_started/">Reachy Mini Lite Setup Guide</a>
              <a href="/reachymini_platforms_reachy_mini_lite_usage/">Using Reachy Mini Lite</a>
              <a href="/reachymini_platforms_reachy_mini_lite_hardware/">Reachy Mini Lite Hardware Datasheet</a>
            </div>
            <div className="mini-track">
              <h4>③ SDK and development basics</h4>
              <a href="/reachymini_sdk_readme/">Reachy Mini SDK</a>
              <a href="/reachymini_sdk_installation/">Installation Guide</a>
              <a href="/reachymini_sdk_quickstart/">Quick Start Guide</a>
              <a href="/reachymini_sdk_python-sdk/">Python SDK Reference</a>
              <a href="/reachymini_sdk_core-concept/">Core Concepts and Architecture</a>
              <a href="/reachymini_sdk_media-architecture/">Media Architecture</a>
              <a href="/reachymini_sdk_gstreamer-installation/">GStreamer Installation</a>
              <a href="/reachymini_sdk_javascript-sdk/">JavaScript SDK and Web Applications</a>
            </div>
            <div className="mini-track">
              <h4>④ Applications and AI integration</h4>
              <a href="/reachymini_sdk_integration/">Integration and Applications</a>
              <a href="/reachymini_sdk_apps/">Build and Publish Applications</a>
              <a href="/reachymini_conversation/">Integrate the Doubao LLM API</a>
              <a href="/reachymini_vibe-code-with-your-agent/">Vibe Coding with an Agent</a>
              <a href="/reachymini_agents/">Development Guide for AI Agents</a>
            </div>
            <div className="mini-track">
              <h4>⑤ Media, system, and advanced operations</h4>
              <a href="/reachymini_platforms_reachy_mini_media_advanced_controls/">Wireless Advanced Media Controls</a>
              <a href="/reachymini_platforms_reachy_mini_lite_media_advanced_controls/">Lite Advanced Media Controls</a>
              <a href="/reachymini_platforms_reachy_mini_lite_wizard/">Use Dynamixel Wizard to Read Motor Parameters</a>
              <a href="/reachymini_platforms_reachy_mini_development_workflow/">Wireless Development Workflow</a>
              <a href="/reachymini_platforms_reachy_mini_install_daemon_from_branch/">Install the Daemon from a Specific Branch</a>
              <a href="/reachymini_platforms_reachy_mini_reflash_the_rpi_iso/">Reflash the Raspberry Pi OS Image</a>
              <a href="/reachymini_platforms_reachy_mini_reset/">Reset via Bluetooth</a>
            </div>
            <div className="mini-track">
              <h4>⑥ Example tutorials</h4>
              <a href="/reachymini_examples_minimal_demo/">Minimal Demo</a>
              <a href="/reachymini_examples_goto_interpolation_playground/">Goto Interpolation Playground</a>
              <a href="/reachymini_examples_look_at/">Look at an Image</a>
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
              <a href="/reachymini_examples_take_picture/">Take a Picture</a>
            </div>
            <div className="mini-track">
              <h4>⑦ Troubleshooting and maintenance</h4>
              <a href="/reachymini_troubleshooting/">Troubleshooting and FAQ</a>
              <a href="/reachymini_troubleshooting_motors_diagnosis/">Motor Diagnosis and Troubleshooting</a>
              <a href="/reachymini_troubleshooting_change_mic_fpc_cable/">Replace the Microphone FPC Cable</a>
              <a href="/reachymini_troubleshooting_spherical_joints_maintenance/">Spherical Joint Maintenance</a>
              <a href="/reachymini_troubleshooting_roadmap/">Reachy Mini Roadmap</a>
            </div>
            <div className="mini-track">
              <h4>⑧ API reference</h4>
              <a href="/reachymini_api_reachymini/">ReachyMini API Reference</a>
              <a href="/reachymini_api_rest-api/">REST API Reference</a>
              <a href="/reachymini_api_daemon/">Daemon API</a>
              <a href="/reachymini_api_motion/">Motion API</a>
              <a href="/reachymini_api_media/">Media API</a>
              <a href="/reachymini_api_apps/">Applications API Reference</a>
              <a href="/reachymini_api_tools/">Tools API Reference</a>
              <a href="/reachymini_api_utils/">Utilities API Reference</a>
            </div>
          </div>
        </div>
      </details>

<details id="atom" className="product-card atom">
<summary>
  <div className="product-head">
    <span className="product-icon">🤖</span>
    <div>
      <h3>Atom Compact Humanoid Robot</h3>
      <span>For humanoid robot beginners, servo debugging, motion teaching, and web remote control</span>
    </div>
  </div>
  <span className="summary-action">Expand learning plan</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recommended for</strong><span>First-time desktop bipedal humanoid users who want to quickly experience motion teaching and remote control</span></div>
    <div><strong>Learning goal</strong><span>Get started out of the box, teach motions with the web motion editor, and export custom motions to the controller firmware</span></div>
    <div><strong>Recommended order</strong><span>Atom-S Getting Started → Web Remote → Motion Editor → Custom Motion Development</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/atom_s/"><span className="step-index">1</span><div><b>Atom-S Getting Started Guide</b><small>Power on, connect the web remote controller, and record your first continuous teaching motion sequence.</small></div><em>Required for beginners</em></a>
    <a className="step-card" href="/atom_x/"><span className="step-index">2</span><div><b>Atom-X Getting Started Guide</b><small>Atom-X operates exactly like Atom-S — follow the same workflow to get started quickly.</small></div><em>Same series</em></a>
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
      <p>For motor debugging, communication protocols, and joint troubleshooting.</p>
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
      <p>For visual grasping, SLAM, voice interaction, and robot state perception.</p>
    </div>
    <div className="resource-columns">
      <div><h4>📡 LiDAR</h4><a href="/robosense_lidar/">RoboSense</a><a href="/mid360/">Livox MID360</a><a href="/a_loam/">A-LOAM Algorithm</a><a href="/slamtec/">Slamtec Series</a></div>
      <div><h4>📷 Cameras</h4><a href="/orbbec_gemini2/">Orbbec Gemini 2</a><a href="/orbbec_gemini_335lg/">Gemini 335Lg Depth Camera</a><a href="/orbbec_gemini336">Gemini 336 Depth Camera</a><a href="/sensing_gmsl_cameras">SENSING GMSL2 Camera</a><a href="/ac1">RoboSense AC1</a><a href="/orbbec_depth_camera_on_ros/">Orbbec and ROS</a><a href="/orb_slam3_orbbec_gemini2/">ORB-SLAM3 and Gemini2</a><a href="/csi_camera_on_ros/">CSI Camera on Jetson</a><a href="/pycuvslam_recomputer_robotics/">PyCuVSLAM</a></div>
      <div><h4>🎤 Voice</h4><a href="/ReSpeaker_Core_v2.0/">ReSpeaker Core v2.0</a><a href="/ReSpeaker_Mic_Array_v2.0/">ReSpeaker Mic Array v2.0</a><h4>🧭 IMU</h4><a href="/hexfellow_y200/">HEXFELLOW Y200</a><a href="/wheeltec_imu/">WHEELTEC IMU</a></div>
    </div>
  </section>

  <section id="software" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Reference</span>
        <h2>💻 Software Ecosystem</h2>
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
