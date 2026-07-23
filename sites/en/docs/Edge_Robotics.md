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
updatedAt: '2026-07-12'
url: https://wiki.seeedstudio.com/robotics_page/
---

import '/src/css/robotics-page-style.css';

# 🤖 Robotics

> *"The science of today is the technology of tomorrow." - Edward Teller*

<div className="robotics-page">

  <section className="hero-panel">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>Not sure which guide to read first? Start with the robot kit in your hands.</h2>
      <p>This page reorganizes Seeed Studio robotics documentation into product-based learning paths. Whether you are unboxing your first robot or preparing for teleoperation, ROS2, simulation, AI training, or real-world deployment, start by choosing your robot kit, then follow the recommended steps from hardware bring-up to advanced development.</p>
    </div>

    <div className="nav-grid">

      <h2 id="robot-kits">📦 Robot Kits</h2>

      <div className="category-group">
        <div className="category-card robot-kits">


          <h3>🦾 reBot Arm</h3>
            <h4> B601-DM Arm</h4>
          <div className="card-container">
              <a href="/rebot_b601_dm_getting_started/" className="content-card">
                <span className="text">reBot B601-DM Getting Start</span>
              </a>
              <a href="/rebot_arm_b601_dm_pinocchio_meshcat/" className="content-card">
                <span className="text">reBot B601-DM with Pinocchio</span>
              </a>
              <a href="/rebot_arm_b601_dm_lerobot/" className="content-card">
                <span className="text">reBot B601-DM with LeRobot</span>
              </a>
              <a href="/rebot_arm_b601_dm_grasping_demo/" className="content-card">
                <span className="text">reBot B601-DM with GraspNet Demo</span>
              </a>
              <a href="/rebot_arm_b601_dm_ros2_integration/" className="content-card">
                <span className="text">reBot B601-DM wit ROS2</span>
              </a>
          </div>
            <h4> B601-RS Arm</h4>
          <div className="card-container">
              <a href="/rebot_b601_rs_getting_started/" className="content-card">
                <span className="text">reBot B601-RS Getting Start</span>
                <span className="tag recommended">New</span>
              </a>
              <a href="/rebot_arm_b601_rs_lerobot/" className="content-card">
                <span className="text">reBot B601-RS with LeRobot</span>
                <span className="tag recommended">New</span>
              </a>
              <a href="/rebot_arm_b601_rs_pinocchio_meshcat/" className="content-card">
                <span className="text">reBot B601-RS with Pinocchio</span>
                <span className="tag recommended">New</span>
              </a>
              <a href="/rebot_arm_b601_rs_grasping_demo/" className="content-card">
                <span className="text">reBot B601-RS with GraspNet</span>
                <span className="tag recommended">New</span>
              </a>
              <a href="/rebot_arm_b601_rs_ros2_integration" className="content-card">
                <span className="text">reBot B601-RS with ROS2 </span>
                <span className="tag recommended">New</span>
              </a>
              <a href="rebot_arm_b601_rs_isaacsim/" className="content-card">
                <span className="text">reBot B601-RS Isaacsim Simulation</span>
                <span className="tag recommended">New</span>
              </a>  
          </div>

          <h3> 🤗 Reachy</h3>
          <div className="card-container">
              <a href="/reachymini_getting_started" className="content-card">
                <span className="text">Reachy Mini Getting Started</span>
                <span className="tag recommended">New</span>
              </a>
          </div>


          <h3>🤗 SO-Arm</h3>
          <div className="card-container">
              <a href="/lerobot_so100m_new/" className="content-card">
                <span className="text">SO100/101 Arm</span>
              </a>
              <a href="/simulate_soarm101_by_leisaac/" className="content-card">
                <span className="text">SO10x Arm with LeIsaac</span>
              </a>
              <a href="/control_robotic_arm_via_phospho/" className="content-card">
                <span className="text">Phospho Lerobot</span>
              </a>
              <a href="/training_soarm101_policy_with_isaacLab/" className="content-card">
                  <span className="text">So Arm RL Training</span>
                  <span className="tag recommended">New</span>
              </a>
              <a href="/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/" className="content-card">
                  <span className="text">SO101 with NVIDIA GR00T</span>
                  <span className="tag recommended">New</span>
              </a>
              <a href="/lerobot_steering_gear_debugging_tool/" className="content-card">
                  <span className="text">Steering Gear Debugging Tool</span>
                  <span className="tag recommended">New</span>
              </a>
              <a href="/lerobot_double_arm_so_arm_training/" className="content-card">
                  <span className="text">Complete Guide to Double-Arm SO-ARM Training</span>
                  <span className="tag recommended">New</span>
              </a>
              <a href="/soarm_amazinghand_teleop/" className="content-card">
                  <span className="text">Complete Training Guide for SO-ARM with AmazingHand</span>
                  <span className="tag recommended">New</span>
              </a>
          </div>

          <h3>🚗 Lekiwi</h3>
          <div className="card-container">
              <a href="/lerobot_lekiwi/" className="content-card">
                <span className="text">Lekiwi Mobile Base</span>
              </a>
              <a href="/sound_follow_robot/" className="content-card">
                <span className="text">Lekiwi Sound Follow</span>
              </a>
          </div>

          <h3>🦾 StarAI Arm</h3>
          <div className="card-container">
              <a href="/lerobot_starai_arm/" className="content-card">
                <span className="text">StarAI Robotic Arm</span>
                <span className="tag recommended">New</span>
              </a>
              <a href="/starai_arm_ros_moveit/" className="content-card">
                <span className="text">StarAI Arm MoveIt 2</span>
                <span className="tag recommended">New</span>
              </a>
              <a href="/control_robotic_arm_via_gr00t" className="content-card">
                <span className="text">StarAI with NVIDIA GR00T</span>
              </a>
          </div>

          <h3>🦿Legged Wheel</h3>
          <div className="card-container">
              <a href="/StackForce_Mini_Wheeled_Legged_Robot" className="content-card">
                <span className="text">Mini Wheeled-Legged Robot</span>
                <span className="tag recommended">New</span>
              </a>
          </div>

          <h3>🖐️ Hand</h3>
          <div className="card-container">
              <a href="/hand_amazinghand/" className="content-card">
                <span className="text">AmazingHand</span>
                <span className="tag recommended">New</span>
              </a>
          </div>

          <h3>🦀 End Effectors</h3>
          <div className="card-container">
              <a href="/dm_gripper/" className="content-card">
                <span className="text">DM Gripper</span>
                <span className="tag recommended">New</span>
              </a>
          </div>

        </div>
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
