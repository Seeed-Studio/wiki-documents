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

  <section id="robot-kits" className="section-block">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Start Here</span>
        <h2>📦 机器人套件</h2>
      </div>
      <p>每个套件都按照“刚拿到手的用户应该先做什么”来组织。建议按步骤从上到下学习。</p>
    </div>

    <div className="product-stack">

<details className="product-card rebot" open>
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
      <a className="step-card" href="/cn/rebot_arm_b601_rs_ros2_integration"><span className="step-index">5</span><div><b>ROS2 集成</b><small>将机械臂接入 ROS2 生态，便于后续和感知、规划、导航、仿真系统组合。</small></div><em>系统集成</em></a>
    </div>
  </div>
</details>

<details className="product-card rebot">
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
</div>
</div>
</details>

<details className="product-card soarm">
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
    <a className="step-card" href="/cn/simulate_soarm101_by_leisaac/"><span className="step-index">3</span><div><b>LeIsaac 仿真</b><small>在仿真中理解机械臂模型、场景和任务，为 Sim2Real 做准备。</small></div><em>仿真入门</em></a>
    <a className="step-card" href="/cn/training_soarm101_policy_with_isaacLab/"><span className="step-index">4</span><div><b>Isaac Lab 强化学习</b><small>学习如何在仿真环境中训练策略，理解强化学习的任务、奖励和部署流程。</small></div><em>高级训练</em></a>
    <a className="step-card" href="/cn/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="step-index">5</span><div><b>SO101 与 NVIDIA GR00T</b><small>进入 VLA / 具身智能模型微调与 Jetson 部署流程。</small></div><em>VLA 进阶</em></a>
    <a className="step-card" href="/cn/lerobot_double_arm_so_arm_training/"><span className="step-index">6</span><div><b>双臂 SO-ARM 训练</b><small>学习更复杂的双臂数据采集、训练和任务执行流程。</small></div><em>复杂任务</em></a>
    <a className="step-card optional" href="/cn/control_robotic_arm_via_phospho/"><span className="step-index">+</span><div><b>Phospho LeRobot</b><small>可选扩展，适合想尝试第三方数据采集和训练平台的用户。</small></div><em>可选扩展</em></a>
  </div>
</div>
</details>

<details className="product-card starai">
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
    <a className="step-card" href="/cn/control_robotic_arm_via_gr00t"><span className="step-index">3</span><div><b>StarAI 与 NVIDIA GR00T</b><small>进入基于大模型 / VLA 的机械臂控制应用。</small></div><em>AI 控制</em></a>
  </div>
</div>
</details>

<details className="product-card lekiwi">
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

<details className="product-card stackforce">
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
    <a className="step-card" href="/cn/StackForce_Mini_Wheeled_Legged_Robot"><span className="step-index">1</span><div><b>StackForce Mini 快速开始</b><small>完成硬件认识、基础部署、运动控制和轮足机器人的基础实验。</small></div><em>系统课程</em></a>
  </div>
</div>
</details>

<details className="product-card reachy">
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
      <a href="/cn/hightorque_control">HighTorque 系列</a>
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
      <div><h4>📷 相机</h4><a href="/cn/orbbec_gemini2/">Orbbec Gemini 2</a><a href="/cn/orbbec_gemini_335lg">Gemini 335Lg 深度相机</a><a href="/cn/orbbec_gemini336">Gemini 336 深度相机</a><a href="/cn/sensing_gmsl_cameras">SENSING GMSL2 相机</a><a href="/cn/ac1">RoboSense AC1</a><a href="/cn/orbbec_depth_camera_on_ros/">Orbbec 与 ROS</a><a href="/cn/orb_slam3_orbbec_gemini2/">ORB-SLAM3 与 Gemini2</a><a href="/cn/csi_camera_on_ros/">Jetson 上的 CSI 相机</a><a href="/cn/pycuvslam_recomputer_robotics/">PyCuVSLAM</a></div>
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
      <div><h4>PX4 / VLA</h4><a href="/cn/control_px4_with_recomputer_jetson/">PX4 与 Jetson</a><a href="/cn/object_tracking_with_reComputer_jetson_and_pX4/">PX4 目标跟踪</a><a href="/cn/control_robotic_arm_via_gr00t">StarAI 与 NVIDIA GR00T</a></div>
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

`}</style>
