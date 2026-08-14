---
description: 本主题介绍 Seeed Studio 的机器人产品文档与学习路径。
title: 机器人
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
url: https://wiki.seeedstudio.com/cn/robotics_page/
---

import '/src/css/robotics-page-style.css';

# 🤖 机器人

> *"今天的科学就是明天的技术。" - Edward Teller*

<div className="robotics-page">

  <section className="hero-panel">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>不知道从哪篇文档开始？先选择你手上的机器人套件</h2>
      <p>这里按照 Seeed Studio 不同机器人产品整理了推荐学习路径。无论你是第一次拿到机器人，还是准备做遥操作、ROS2、仿真、AI 训练或真实部署，都可以先找到对应产品，再按照 Step 1、Step 2、Step 3 的顺序完成上手和进阶开发。</p>
    </div>
    <div className="hero-tips">
      <div><strong>刚拿到设备</strong><span>先完成开箱、接线、供电、驱动和基础运动测试</span></div>
      <div><strong>准备开发应用</strong><span>继续学习 SDK、LeRobot、ROS2、视觉夹取或移动控制</span></div>
      <div><strong>想做 AI 机器人</strong><span>进入仿真、数据采集、GR00T、VLA 和强化学习方向</span></div>
    </div>
  </section>

  <nav className="quick-nav" aria-label="Robotics page quick navigation">
    <a href="#robot-kits">📦 机器人套件</a>
    <a href="#actuators">⚙️ 关节执行器</a>
    <a href="#sensors">👁️ 传感器</a>
    <a href="#software">💻 软件生态</a>
  </nav>

  <section className="kit-index-panel" aria-label="快速选择机器人套件">
    <div className="section-title-row compact-title">
      <div>
        <span className="section-kicker">Choose a Kit</span>
        <h2>快速选择你的学习路径</h2>
      </div>
      <p>所有产品卡片默认折叠，选择你手上的套件后，再展开对应学习计划。</p>
    </div>
    <div className="kit-index-grid">
      <a href="#rebot-rs"><span>🦾</span><strong>B601-RS</strong><small>RobStride 机械臂路线</small></a>
      <a href="#rebot-dm"><span>🦾</span><strong>B601-DM</strong><small>Damiao 机械臂路线</small></a>
      <a href="#soarm"><span>🤗</span><strong>SO100 / SO101</strong><small>低成本 LeRobot 路线</small></a>
      <a href="#starai"><span>🦾</span><strong>StarAI</strong><small>ROS2 / MoveIt / GR00T</small></a>
      <a href="#lekiwi"><span>🚗</span><strong>Lekiwi</strong><small>移动底盘与应用 Demo</small></a>
      <a href="#stackforce"><span>🦿</span><strong>StackForce Mini</strong><small>轮足机器人路线</small></a>
      <a href="#reachy"><span>🤗</span><strong>Reachy Mini</strong><small>桌面交互机器人路线</small></a>
    </div>
  </section>

  <section id="robot-kits" className="section-block">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Start Here</span>
        <h2>📦 机器人套件</h2>
      </div>
      <p>每个套件都按照“先跑通硬件，再进入软件生态，最后做 AI / ROS / 仿真应用”的方式组织。建议先展开自己的产品卡片，再按 Step 顺序学习。</p>
    </div>

    <div className="product-stack">

<details id="rebot-rs" className="product-card rebot">
  <summary>
    <div className="product-head">
      <span className="product-icon">🦾</span>
      <div>
        <h3>reBot B601-RS 机械臂</h3>
        <span>适合机械臂入门、遥操作、视觉夹取、ROS2 集成和 AI 数据采集</span>
      </div>
    </div>
    <span className="summary-action">展开学习计划</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>推荐人群</strong><span>第一次使用 reBot Arm、想快速完成真实机械臂控制的用户</span></div>
      <div><strong>学习目标</strong><span>从硬件上电到完成 LeRobot 遥操作、视觉夹取和 ROS2 集成</span></div>
      <div><strong>建议顺序</strong><span>快速开始 → LeRobot → Pinocchio → 视觉夹取 → ROS2</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/cn/rebot_b601_rs_getting_started/"><span className="step-index">1</span><div><b>快速开始</b><small>先完成开箱、接线、供电、驱动检查和基础运动测试，确认机械臂能正常工作。</small></div><em>新手必做</em></a>
      <a className="step-card" href="/cn/rebot_arm_b601_rs_lerobot/"><span className="step-index">2</span><div><b>LeRobot 遥操作与数据采集</b><small>学习如何通过主从臂或遥操作采集数据，为模仿学习和具身智能任务做准备。</small></div><em>数据采集</em></a>
      <a className="step-card" href="/cn/rebot_arm_b601_rs_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio 运动学可视化</b><small>理解机械臂模型、关节、坐标系、正逆运动学，为后续控制算法打基础。</small></div><em>控制进阶</em></a>
      <a className="step-card" href="/cn/rebot_arm_b601_rs_grasping_demo/"><span className="step-index">4</span><div><b>视觉夹取 Demo</b><small>结合相机、识别和抓取姿态生成，让机械臂完成真实物体抓取。</small></div><em>应用 Demo</em></a>
      <a className="step-card" href="/cn/rebot_arm_b601_rs_ros2_integration/"><span className="step-index">5</span><div><b>ROS2 集成</b><small>将机械臂接入 ROS2 生态，便于后续和感知、规划、导航、仿真系统组合。</small></div><em>系统集成</em></a>
      <a className="step-card" href="/cn/rebot_arm_b601_rs_web_simulator_developer_guide/"><span className="step-index">6</span><div><b>Web 仿真器开发</b><small>学习 Web 仿真器与 ROS2/MuJoCo 的集成开发，实现虚拟与现实同步控制。</small></div><em>仿真开发</em></a>
      <a className="step-card" href="/cn/rebot_arm_b601_rs_isaacsim/"><span className="step-index">7</span><div><b>Isaac Sim 集成</b><small>将机械臂接入Isaac Sim进行仿真，并且实现虚拟与现实同步。</small></div><em>仿真</em></a>
      <a className="step-card" href="/cn/rebot_arm_b601_rs_mit_control/"><span className="step-index">8</span><div><b>MIT 位置控制</b><small>学习 reBot Arm B601-RS 的 MIT 位置控制入门，掌握基础控制算法。</small></div><em>控制进阶</em></a>
    </div>
  </div>
</details>

<details id="rebot-dm" className="product-card rebot">
<summary>
  <div className="product-head">
    <span className="product-icon">🦾</span>
    <div>
      <h3>reBot B601-DM 机械臂</h3>
      <span>适合 Damiao 电机版本用户学习机械臂控制、LeRobot、Pinocchio 和 ROS2</span>
    </div>
  </div>
  <span className="summary-action">展开学习计划</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>推荐人群</strong><span>使用 B601-DM 版本机械臂，想做机械臂控制和 AI 数据采集的用户</span></div>
    <div><strong>学习目标</strong><span>完成基础驱动、运动学建模、LeRobot 数据采集和视觉夹取 Demo</span></div>
    <div><strong>建议顺序</strong><span>快速开始 → LeRobot → Pinocchio → 视觉夹取 → ROS2</span></div>
  </div>
<div className="learning-steps">
  <a className="step-card" href="/cn/rebot_b601_dm_getting_started/"><span className="step-index">1</span><div><b>快速开始</b><small>先检查电源、CAN 通信、驱动环境和基础运动，确认机械臂硬件状态正常。</small></div><em>新手必做</em></a>

  <a className="step-card" href="/cn/rebot_arm_b601_dm_lerobot/"><span className="step-index">2</span><div><b>LeRobot 数据采集</b><small>使用 LeRobot 完成遥操作、数据记录和后续模仿学习数据准备。</small></div><em>AI 数据</em></a>

  <a className="step-card" href="/cn/rebot_arm_b601_dm_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio 与 Meshcat</b><small>学习机械臂模型加载、可视化、正逆运动学和关节空间控制基础。</small></div><em>控制基础</em></a>

  <a className="step-card" href="/cn/rebot_arm_b601_dm_grasping_demo/"><span className="step-index">4</span><div><b>视觉夹取 Demo</b><small>将机械臂和视觉算法结合，完成真实场景中的目标抓取。</small></div><em>应用 Demo</em></a>

  <a className="step-card" href="/cn/rebot_arm_b601_dm_ros2_integration/"><span className="step-index">5</span><div><b>ROS2 集成</b><small>把机械臂接入 ROS2，方便与 MoveIt、感知节点和系统级应用组合。</small></div><em>系统集成</em></a>

  <a className="step-card" href="/cn/rebot_arm_b601_dm_web_simulator_developer_guide/"><span className="step-index">6</span><div><b>Web 仿真器开发</b><small>学习 Web 仿真器与 ROS2/MuJoCo 的集成开发，实现虚拟与现实同步控制。</small></div><em>仿真开发</em></a>
</div>
</div>
</details>

<details id="soarm" className="product-card soarm">
<summary>
  <div className="product-head">
    <span className="product-icon">🤗</span>
    <div>
      <h3>SO100 / SO101 机械臂</h3>
      <span>适合低成本机械臂入门、LeRobot、仿真、强化学习和 GR00T/VLA 实验</span>
    </div>
  </div>
  <span className="summary-action">展开学习计划</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>推荐人群</strong><span>想从低成本机械臂开始学习 LeRobot 和具身智能的用户</span></div>
    <div><strong>学习目标</strong><span>从舵机调试到仿真、强化学习、GR00T 和双臂训练</span></div>
    <div><strong>建议顺序</strong><span>上手 → 舵机调试 → 仿真 → Isaac Lab → GR00T → 双臂</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/cn/lerobot_so100m_new/"><span className="step-index">1</span><div><b>SO100 / SO101 快速开始</b><small>完成硬件安装、基础连接、校准和最小可运行测试。</small></div><em>新手必做</em></a>
    <a className="step-card" href="/cn/lerobot_steering_gear_debugging_tool/"><span className="step-index">2</span><div><b>舵机调试工具</b><small>学习如何检查舵机 ID、方向、零点和通信状态，避免后续训练时出现硬件问题。</small></div><em>排障基础</em></a>
    <a className="step-card" href="/cn/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="step-index">3</span><div><b>SO101 与 NVIDIA GR00T</b><small>进入 VLA / 具身智能模型微调与 Jetson 部署流程。</small></div><em>VLA 进阶</em></a>
    <a className="step-card" href="/cn/lerobot_double_arm_so_arm_training/"><span className="step-index">4</span><div><b>双臂 SO-ARM 训练</b><small>学习更复杂的双臂数据采集、训练和任务执行流程。</small></div><em>复杂任务</em></a>
    <a className="step-card" href="/cn/soarm_amazinghand_teleop/"><span className="step-index">5</span><div><b>SO-ARM结合Amazing Hand灵巧手</b><small>SO-ARM101结合Amazing Hand灵巧收玩转Lerobot。</small></div><em>灵巧手集成</em></a>
    <a className="step-card" href="/cn/simulate_soarm101_by_leisaac/"><span className="step-index">6</span><div><b>LeIsaac 仿真</b><small>在仿真中理解机械臂模型、场景和任务，为 Sim2Real 做准备。</small></div><em>仿真入门</em></a>
    <a className="step-card" href="/cn/training_soarm101_policy_with_isaacLab/"><span className="step-index">7</span><div><b>Isaac Lab 强化学习</b><small>学习如何在仿真环境中训练策略，理解强化学习的任务、奖励和部署流程。</small></div><em>高级训练</em></a>
    <a className="step-card optional" href="/cn/control_robotic_arm_via_phospho/"><span className="step-index">+</span><div><b>Phospho LeRobot</b><small>可选扩展，适合想尝试第三方数据采集和训练平台的用户。</small></div><em>可选扩展</em></a>
  </div>
</div>
</details>

<details id="starai" className="product-card starai">
<summary>
  <div className="product-head">
    <span className="product-icon">🦾</span>
    <div>
      <h3>StarAI 机械臂</h3>
      <span>适合学习机械臂基础控制、MoveIt 2、ROS2 规划和 GR00T 应用</span>
    </div>
  </div>
  <span className="summary-action">展开学习计划</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>推荐人群</strong><span>想学习 ROS2 机械臂规划和 AI 控制 Demo 的用户</span></div>
    <div><strong>学习目标</strong><span>完成基础控制、MoveIt 2 规划，并进一步尝试 GR00T 控制</span></div>
    <div><strong>建议顺序</strong><span>快速开始 → MoveIt 2 → GR00T</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/cn/lerobot_starai_arm/"><span className="step-index">1</span><div><b>StarAI 机械臂快速开始</b><small>完成硬件连接、基础控制和最小示例运行。</small></div><em>新手必做</em></a>
    <a className="step-card" href="/cn/starai_arm_ros_moveit/"><span className="step-index">2</span><div><b>MoveIt 2 运动规划</b><small>学习模型导入、规划场景、路径规划和 ROS2 机械臂开发流程。</small></div><em>ROS2 进阶</em></a>
    <a className="step-card" href="/cn/control_robotic_arm_via_gr00t/"><span className="step-index">3</span><div><b>StarAI 与 NVIDIA GR00T</b><small>进入基于大模型 / VLA 的机械臂控制应用。</small></div><em>AI 控制</em></a>
  </div>
</div>
</details>

<details id="lekiwi" className="product-card lekiwi">
<summary>
  <div className="product-head">
    <span className="product-icon">🚗</span>
    <div>
      <h3>Lekiwi 移动底盘</h3>
      <span>适合移动机器人入门、底盘控制和声音跟随应用</span>
    </div>
  </div>
  <span className="summary-action">展开学习计划</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>推荐人群</strong><span>第一次接触移动底盘，想先让机器人运动起来的用户</span></div>
    <div><strong>学习目标</strong><span>完成底盘基础控制，并尝试声音跟随等应用 Demo</span></div>
    <div><strong>说明</strong><span>已按要求移除 Lekiwi 的 ROS2 学习步骤，只保留当前产品相关入门与应用路线</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/cn/lerobot_lekiwi/"><span className="step-index">1</span><div><b>Lekiwi 移动底盘快速开始</b><small>先完成底盘组装、连接、基础运动控制和安全测试。</small></div><em>新手必做</em></a>
    <a className="step-card" href="/cn/sound_follow_robot/"><span className="step-index">2</span><div><b>声音跟随 Demo</b><small>结合声音输入和底盘运动控制，完成一个直观的交互式移动机器人应用。</small></div><em>应用 Demo</em></a>
  </div>
</div>
</details>

<details id="stackforce" className="product-card stackforce">
<summary>
  <div className="product-head">
    <span className="product-icon">🦿</span>
    <div>
      <h3>StackForce Mini 轮足机器人</h3>
      <span>适合学习轮足结构、平衡控制、运动规划和控制算法</span>
    </div>
  </div>
  <span className="summary-action">展开学习计划</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>推荐人群</strong><span>对移动机器人、轮足机器人和平衡控制感兴趣的用户</span></div>
    <div><strong>学习目标</strong><span>理解轮足机器人硬件结构、控制逻辑和基础运动能力</span></div>
    <div><strong>建议顺序</strong><span>快速开始 → 控制原理 → 运动调试</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/cn/StackForce_Mini_Wheeled_Legged_Robot/"><span className="step-index">1</span><div><b>StackForce Mini 快速开始</b><small>完成硬件认识、基础部署、运动控制和轮足机器人的基础实验。</small></div><em>系统课程</em></a>
  </div>
</div>
</details>

<details id="reachy" className="product-card reachy">
<summary>
  <div className="product-head">
    <span className="product-icon">🤗</span>
    <div>
      <h3>Reachy Mini</h3>
      <span>适合桌面机器人、人机交互、Agent、Python SDK、仿真和 AI 集成学习</span>
    </div>
  </div>
  <span className="summary-action">展开学习计划</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>推荐人群</strong><span>想快速体验桌面机器人交互、语音对话、动作控制和 Agent 应用的用户</span></div>
    <div><strong>学习目标</strong><span>先完成基础使用，再根据硬件版本选择无线版或 Lite，之后学习 SDK、AI 集成和故障排除</span></div>
    <div><strong>文档特点</strong><span>Reachy Mini 文档较多，已按“通用入门 → 平台使用 → SDK 开发 → AI 应用 → 排障参考”重新整理</span></div>
  </div>

<div className="reachy-path-grid">
            <div className="mini-track">
              <h4>① 先认识产品</h4>
              <a href="/cn/reachymini_intro/">Reachy Mini 产品简介</a>
              <a href="/cn/reachymini_getting_started/">ReachyMini 入门指南</a>
            </div>
            <div className="mini-track">
              <h4>② 选择你的平台</h4>
              <a href="/cn/reachymini_platforms_simulation_get_started/">仿真快速入门</a>
              <a href="/cn/reachymini_platforms_reachy_mini_get_started/">Reachy Mini 无线版设置指南</a>
              <a href="/cn/reachymini_platforms_reachy_mini_usage/">使用 Reachy Mini</a>
              <a href="/cn/reachymini_platforms_reachy_mini_hardware/">Reachy Mini 硬件数据表</a>
              <a href="/cn/reachymini_platforms_reachy_mini_lite_get_started/">Reachy Mini Lite 设置指南</a>
              <a href="/cn/reachymini_platforms_reachy_mini_lite_usage/">使用 Reachy Mini Lite</a>
              <a href="/cn/reachymini_platforms_reachy_mini_lite_hardware/">Reachy Mini Lite 硬件数据表</a>
            </div>
            <div className="mini-track">
              <h4>③ SDK 与开发基础</h4>
              <a href="/cn/reachymini_sdk_readme/">Reachy Mini SDK</a>
              <a href="/cn/reachymini_sdk_installation/">安装指南</a>
              <a href="/cn/reachymini_sdk_quickstart/">快速入门指南</a>
              <a href="/cn/reachymini_sdk_python-sdk/">Python SDK 参考</a>
              <a href="/cn/reachymini_sdk_core-concept/">核心概念和架构</a>
              <a href="/cn/reachymini_sdk_media-architecture/">媒体架构</a>
              <a href="/cn/reachymini_sdk_gstreamer-installation/">GStreamer 安装</a>
              <a href="/cn/reachymini_sdk_javascript-sdk/">JavaScript SDK 和 Web 应用</a>
            </div>
            <div className="mini-track">
              <h4>④ 应用与 AI 集成</h4>
              <a href="/cn/reachymini_sdk_integration/">集成与应用</a>
              <a href="/cn/reachymini_sdk_apps/">构建和发布应用</a>
              <a href="/cn/reachymini_conversation/">接入豆包大模型 API</a>
              <a href="/cn/reachymini_vibe-code-with-your-agent/">使用代理进行 Vibe 编码</a>
              <a href="/cn/reachymini_agents/">面向 AI 代理的开发指南</a>
            </div>
            <div className="mini-track">
              <h4>⑤ 媒体、系统与高级操作</h4>
              <a href="/cn/reachymini_platforms_reachy_mini_media_advanced_controls/">无线版高级媒体控制</a>
              <a href="/cn/reachymini_platforms_reachy_mini_lite_media_advanced_controls/">Lite 高级媒体控制</a>
              <a href="/cn/reachymini_platforms_reachy_mini_lite_wizard/">使用 Dynamixel Wizard 读取电机参数</a>
              <a href="/cn/reachymini_platforms_reachy_mini_development_workflow/">无线版开发工作流</a>
              <a href="/cn/reachymini_platforms_reachy_mini_install_daemon_from_branch/">从特定分支安装守护进程</a>
              <a href="/cn/reachymini_platforms_reachy_mini_reflash_the_rpi_iso/">重新刷写 Raspberry Pi OS 镜像</a>
              <a href="/cn/reachymini_platforms_reachy_mini_reset/">通过蓝牙重置</a>
            </div>
            <div className="mini-track">
              <h4>⑥ 示例教程</h4>
              <a href="/cn/reachymini_examples_minimal_demo/">最小演示</a>
              <a href="/cn/reachymini_examples_goto_interpolation_playground/">Goto 插值 playground</a>
              <a href="/cn/reachymini_examples_look_at/">看图像</a>
              <a href="/cn/reachymini_examples_mini_head_position_gui/">头部位置 GUI</a>
              <a href="/cn/reachymini_examples_joy_controller/">操纵杆控制器</a>
              <a href="/cn/reachymini_examples_imu/">IMU 示例</a>
              <a href="/cn/reachymini_examples_custom_media_manager/">自定义媒体管理器</a>
              <a href="/cn/reachymini_examples_reachy_compliant_demo/">顺从模式演示</a>
              <a href="/cn/reachymini_examples_recorded_moves/">录制移动</a>
              <a href="/cn/reachymini_examples_rerun_viewer/">Rerun 查看器</a>
              <a href="/cn/reachymini_examples_sequence/">序列演示</a>
              <a href="/cn/reachymini_examples_sound_doa/">声音到达方向</a>
              <a href="/cn/reachymini_examples_sound_play/">声音播放</a>
              <a href="/cn/reachymini_examples_sound_record/">声音录制</a>
              <a href="/cn/reachymini_examples_take_picture/">拍照</a>
            </div>
            <div className="mini-track">
              <h4>⑦ 故障排除与维护</h4>
              <a href="/cn/reachymini_troubleshooting/">故障排除与常见问题</a>
              <a href="/cn/reachymini_troubleshooting_motors_diagnosis/">电机诊断和故障排除</a>
              <a href="/cn/reachymini_troubleshooting_change_mic_fpc_cable/">更换麦克风 FPC 线缆</a>
              <a href="/cn/reachymini_troubleshooting_spherical_joints_maintenance/">球形关节维护</a>
              <a href="/cn/reachymini_troubleshooting_roadmap/">Reachy Mini 路线图</a>
            </div>
            <div className="mini-track">
              <h4>⑧ API 参考</h4>
              <a href="/cn/reachymini_api_reachymini/">ReachyMini API 参考</a>
              <a href="/cn/reachymini_api_rest-api/">REST API 参考</a>
              <a href="/cn/reachymini_api_daemon/">守护进程 API</a>
              <a href="/cn/reachymini_api_motion/">运动 API</a>
              <a href="/cn/reachymini_api_media/">媒体 API</a>
              <a href="/cn/reachymini_api_apps/">应用 API 参考</a>
              <a href="/cn/reachymini_api_tools/">工具 API 参考</a>
              <a href="/cn/reachymini_api_utils/">工具 API 参考</a>
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
        <h2>⚙️ 关节执行器</h2>
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
        <h2>👁️ 传感器</h2>
      </div>
      <p>用于视觉夹取、SLAM、语音交互和机器人状态感知。</p>
    </div>
    <div className="resource-columns">
      <div><h4>📡 LiDAR</h4><a href="/cn/robosense_lidar/">RoboSense</a><a href="/cn/mid360/">Livox MID360</a><a href="/cn/a_loam/">A-LOAM 算法</a><a href="/cn/slamtec/">Slamtec 系列</a></div>
      <div><h4>📷 相机</h4><a href="/cn/orbbec_gemini2/">Orbbec Gemini 2</a><a href="/cn/orbbec_gemini_335lg/">Gemini 335Lg 深度相机</a><a href="/cn/orbbec_gemini336">Gemini 336 深度相机</a><a href="/cn/sensing_gmsl_cameras">SENSING GMSL2 相机</a><a href="/cn/ac1">RoboSense AC1</a><a href="/cn/orbbec_depth_camera_on_ros/">Orbbec 与 ROS</a><a href="/cn/orb_slam3_orbbec_gemini2/">ORB-SLAM3 与 Gemini2</a><a href="/cn/csi_camera_on_ros/">Jetson 上的 CSI 相机</a><a href="/cn/pycuvslam_recomputer_robotics/">PyCuVSLAM</a></div>
      <div><h4>🎤 语音</h4><a href="/cn/ReSpeaker_Core_v2.0/">ReSpeaker Core v2.0</a><a href="/cn/ReSpeaker_Mic_Array_v2.0/">ReSpeaker Mic Array v2.0</a><h4>🧭 IMU</h4><a href="/cn/hexfellow_y200/">HEXFELLOW Y200</a><a href="/cn/wheeltec_imu/">WHEELTEC IMU</a></div>
    </div>
  </section>

  <section id="software" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Reference</span>
        <h2>💻 软件生态</h2>
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
