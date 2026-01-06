---
description: 本主题介绍 Seeed Studio 的机器人产品文档。
title: 机器人
keywords:
- robotics
- nvidia
- ros
- isaac
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/robotics_page
last_update:
  date: 05/29/2025
  author: ZhuYaohui
---

# 🤖 机器人

> *"今天的科学就是明天的技术。" - Edward Teller*

<div className="quick-nav-container">
  <nav className="quick-nav">
    <a href="#robot-kits" className="nav-item">
      <span className="icon">📦</span>
      <span className="text">机器人套件</span>
      <div className="hover-effect"></div>
    </a>
    <a href="#actuators" className="nav-item">
      <span className="icon">⚙️</span>
      <span className="text">关节执行器</span>
      <div className="hover-effect"></div>
    </a>
    <a href="#sensors" className="nav-item">
      <span className="icon">👁️</span>
      <span className="text">传感器</span>
      <div className="hover-effect"></div>
    </a>
    <a href="#software" className="nav-item">
      <span className="icon">💻</span>
      <span className="text">软件</span>
      <div className="hover-effect"></div>
    </a>
  </nav>
</div>

<div className="nav-grid">

## 📦 机器人套件 {#robot-kits}

<div class="category-group">
  <div class="category-card robot-kits">

### 🤗 SO-Arm机械臂

<div className="card-container">
    <a href="/cn/lerobot_so100m_new/" className="content-card">
      <span className="text">SO100/101 机械臂</span>
    </a>
    <a href="/cn/simulate_soarm101_by_leisaac/" className="content-card">
      <span className="text">SO10x 机械臂与 LeIsaac</span>
    </a>
    <a href="/cn/control_robotic_arm_via_phospho/" className="content-card">
      <span className="text">Phospho Lerobot</span>
    </a>
    <a href="/cn/training_soarm101_policy_with_isaacLab/" className="content-card">
        <span className="text">So Arm 强化学习</span>
        <span className="tag recommended">New</span>
    </a>
    <a href="/cn/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/" className="content-card">
        <span className="text">SO101 与 NVIDIA GR00T</span>
        <span className="tag recommended">New</span>
    </a>
</div>

### 🚗 Lekiwi移动底盘

<div className="card-container">
    <a href="/cn/lerobot_lekiwi/" className="content-card">
      <span className="text">Lekiwi 移动底盘</span>
    </a>
    <a href="/cn/sound_follow_robot/" className="content-card">
      <span className="text">Lekiwi 声音跟随</span>
    </a>
</div>

### 🦾 StarAI机械臂

<div className="card-container">
    <a href="/cn/lerobot_starai_arm/" className="content-card">
      <span className="text">StarAI 机械臂</span>
      <span className="tag recommended">New</span>
    </a>
    <a href="/cn/starai_arm_ros_moveit/" className="content-card">
      <span className="text">StarAI 机械臂 MoveIt 2</span>
      <span className="tag recommended">New</span>
    </a>
    <a href="/cn/control_robotic_arm_via_gr00t" className="content-card">
      <span className="text">StarAI 与 NVIDIA GR00T</span>
    </a>
</div>

### 🦿 轮足

<div className="card-container">
    <a href="/cn/StackForce_Mini_Wheeled_Legged_Robot" className="content-card">
      <span className="text">小轮足机器人</span>
      <span className="tag recommended">New</span>
    </a>
</div>

### 🖐️ 灵巧手

<div className="card-container">
    <a href="/cn/hand_amazinghand/" className="content-card">
      <span className="text">AmazingHand</span>
      <span className="tag recommended">New</span>
    </a>
</div>


### 🦀 末端执行器

<div className="card-container">
    <a href="/cn/dm_gripper/" className="content-card">
      <span className="text">DM 夹爪</span>
      <span className="tag recommended">New</span>
    </a>
</div>

</div>
</div>

## ⚙️ 执行器 {#actuators}

<div class="category-group">
<div className="category-card actuators">

<div className="card-container">
    <a href="/cn/myactuator_series/" className="content-card">
      <span className="text">MyActuator X 系列</span>
    </a>
    <a href="/cn/damiao_series/" className="content-card">
      <span className="text">Damiao DM43 系列</span>
    </a>
    <a href="/cn/feetech_servo/" className="content-card">
      <span className="text">Feetech STS3215 舵机</span>
    </a>
    <a href="/cn/hightorque_control" className="content-card">
      <span className="text">HighTorque 系列</span>
    </a>
    <a href="/cn/fashionstar_servo/" className="content-card">
      <span className="text">Fashionstar 系列</span>
    </a>
    <a href="/cn/stackforce_series/" className="content-card">
      <span className="text">Stackforce 系列</span>
    </a>
    <a href="/cn/robstride_control/" className="content-card">
      <span className="text">RobStride 控制</span>
      <span className="tag recommended">New</span>
    </a>
</div>

</div>
</div>

## 👁️ 传感器 {#sensors}

<div class="category-group">
<div className="category-card sensors">

**📡 LiDAR**  

<div className="card-container">
    <a href="/cn/robosense_lidar/" className="content-card">
      <span className="text">RoboSense</span>
    </a>
    <a href="/cn/mid360/" className="content-card">
      <span className="text">Livox MID360</span>
    </a>
    <a href="/cn/a_loam/" className="content-card">
      <span className="text">A-LOAM 算法</span>
    </a>
    <a href="/cn/slamtec/" className="content-card">
      <span className="text">Slamtec 系列</span>
    </a>
</div>

**📷 相机**  

<div className="card-container">
    <a href="/cn/orbbec_gemini2/" className="content-card">
      <span className="text">Orbbec Gemini 2</span>
    </a>
    <a href="/cn/orbbec_gemini_335lg" className="content-card">
      <span className="text">Gemini 335Lg 深度相机</span>
      <span className="tag recommended">New</span>
    </a>
    <a href="/cn/orbbec_gemini336" className="content-card">
      <span className="text">Gemini 336 深度相机</span>
      <span className="tag recommended">New</span>
    </a>
    <a href="/cn/sensing_gmsl_cameras" className="content-card">
      <span className="text">SENSING GMSL2 相机</span>
    </a>
    <a href="/cn/ac1" className="content-card">
      <span className="text">RoboSense AC1</span>
      <span className="tag recommended">New</span>
    </a>
    <a href="/cn/orbbec_depth_camera_on_ros/" className="content-card">
      <span className="text">Orbbec 与 ROS</span>
    </a>
    <a href="/cn/orb_slam3_orbbec_gemini2/" className="content-card">
      <span className="text">ORB-SLAM3 与 Gemini2</span>
    </a>
    <a href="/cn/csi_camera_on_ros/" className="content-card">
      <span className="text">Jetson 上的 CSI 相机</span>
    </a>
    <a href="/cn/pycuvslam_recomputer_robotics/" className="content-card">
      <span className="text">PyCuVSLAM</span>
    </a>

</div>

**🎤 语音**  

<div className="card-container">
    <a href="/cn/ReSpeaker_Core_v2.0/" className="content-card">
      <span className="text">ReSpeaker Core v2.0</span>
    </a>
    <a href="/cn/ReSpeaker_Mic_Array_v2.0/" className="content-card">
      <span className="text">ReSpeaker Mic Array v2.0</span>
    </a>
</div>

**🧭 IMU**  

<div className="card-container">
    <a href="/cn/hexfellow_y200/" className="content-card">
      <span className="text">HEXFELLOW Y200</span>
    </a>
    <a href="/cn/wheeltec_imu/" className="content-card">
      <span className="text">WHEELTEC IMU</span>
    </a>
</div>

</div>
</div>

## 💻 软件 {#software}

<div class="category-group">
<div className="category-card software">

**ROS 生态系统**  

<div className="card-container">
    <a href="/cn/installing_ros1/" className="content-card">
      <span className="text">ROS 1 安装</span>
    </a>
    <a href="/cn/install_ros2_humble/" className="content-card">
      <span className="text">ROS 2 安装</span>
    </a>
    <a href="/cn/install_isaacros/" className="content-card">
      <span className="text">Isaac ROS 安装</span>
    </a>
    <a href="/cn/isaac_ros_apriltag/" className="content-card">
      <span className="text">Isaac ROS AprilTag</span>
    </a>
    <a href="/cn/isaac_ros_visual_slam/" className="content-card">
      <span className="text">Isaac ROS V-SLAM</span>
    </a>
</div>

**PX4**  
<div className="card-container">
<a href="/cn/control_px4_with_recomputer_jetson/" className="content-card">
  <span className="text">PX4 与 Jetson</span>
</a>

<a href="/cn/object_tracking_with_reComputer_jetson_and_pX4/" className="content-card">
  <span className="text">PX4 目标跟踪</span>
</a>

</div>

**NVIDIA Isaac**  
<div className="card-container">
<a href="/cn/install_isaaclab/" className="content-card">
  <span className="text">Isaac Lab 安装</span>
</a>
<a href="/cn/training_soarm101_policy_with_isaacLab/" className="content-card">
  <span className="text">SO Arm 强化学习</span>
  <span className="tag recommended">New</span>
</a>
<a href="/cn/simulate_soarm101_by_leisaac/" className="content-card">
  <span className="text">SO100 机械臂与 IsaacSim</span>
  <span className="tag recommended">New</span>
</a>
</div>

**VLA**  
<div className="card-container">
<a href="/cn/control_robotic_arm_via_gr00t" className="content-card">
  <span className="text">StarAI 与 NVIDIA GR00T</span>
</a>
</div>

</div>
</div>

</div>

<style>{`
/* ====================
   1. 顶部导航栏样式 (保持不变)
   ==================== */
.quick-nav-container {
  margin: 2rem 0;
  padding: 1rem;
  background: radial-gradient(at 10% 20%, #f0fdf4 0%, transparent 50%), radial-gradient(at 90% 80%, #f0f7ff 0%, transparent 50%), white;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.quick-nav {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

.nav-item {
  position: relative;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  display: flex;
  margin: 6px 6px;
  flex-direction: column;
  align-items: center;
  text-decoration: none !important;
  color: #333;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  z-index: 1;
}

.nav-item .icon { font-size: 1.8rem; margin-bottom: 0.5rem; transition: transform 0.3s; }
.nav-item .text { font-size: 0.95rem; white-space: nowrap; }
.nav-item .hover-effect {
  position: absolute; bottom: 0; left: 0; width: 100%; height: 0;
  background: linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%);
  border-radius: 12px; transition: height 0.3s ease; z-index: -1;
}
.nav-item:hover { transform: translateY(-3px); box-shadow: 0 6px 12px rgba(0,0,0,0.1); color: white; }
.nav-item:hover .icon { transform: scale(1.2) rotate(10deg); }
.nav-item:hover .hover-effect { height: 100%; }

/* ====================
   2. 主分类大卡片 (外层容器)
   ==================== */
.nav-grid {
  display: block;
  gap: 2rem;
  margin-top: 2rem;
}

.category-group { margin-bottom: 2.5rem; }

.category-card {
  position: relative;
  padding: 1.8rem;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  overflow: hidden;
  border: 1px solid transparent;
}

/* 分类侧边装饰条 */
.category-card::before {
  content: ""; position: absolute; top: 0; left: 0; width: 6px; height: 100%;
}
.robot-kits::before { background: linear-gradient(to bottom, #4a90e2, #50e3c2); }
.actuators::before { background: linear-gradient(to bottom, #50e3c2, #a0e3c2); }
.sensors::before { background: linear-gradient(to bottom, #ff6b6b, #ff8e8e); }
.software::before { background: linear-gradient(to bottom, #f5a623, #f5c623); }

/* ====================
   3. 内容小卡片布局 (Alignment & Effects)
   ==================== */

/* 网格容器：确保对齐 */
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); /* 自动换行，最小260px */
  gap: 12px; /* 卡片间距 */
  margin-top: 12px;
  margin-bottom: 1.5rem;
}

/* 小卡片本体 - 重命名为 content-card 以免冲突 */
.content-card {
  display: flex;
  align-items: center;
  justify-content: space-between; /* 标题在左，标签在右 */
  padding: 10px 16px;
  background: #f9fafb;
  border: 1px solid transparent;
  border-radius: 8px;
  text-decoration: none !important;
  color: var(--ifm-font-color-base);
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;
}

.content-card .text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 8px;
  z-index: 2;
}

/* 小卡片悬浮特效 */
.content-card:hover {
  background: #fff;
  border-color: #4a90e2;
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.15);
  transform: translateY(-2px); /* 微微上浮 */
  color: #4a90e2;
}

/* 悬浮时左侧出现小蓝条 */
.content-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #4a90e2;
  transition: width 0.2s ease;
}
.content-card:hover::after {
  width: 4px; /* 宽度变为4px */
}

/* ====================
   4. 标签样式 (Tags)
   ==================== */
.tag {
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 12px;
  font-weight: 700;
  text-transform: uppercase;
  flex-shrink: 0;
  z-index: 2;
}

.recommended {
  background: rgba(255, 107, 107, 0.1);
  color: #ff6b6b;
  border: 1px solid rgba(255, 107, 107, 0.2);
  /* 简单的呼吸动画 */
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.2); }
  70% { box-shadow: 0 0 0 4px rgba(255, 107, 107, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0); }
}

/* ====================
   5. Dark Mode 适配
   ==================== */
html[data-theme='dark'] .quick-nav-container {
  background: radial-gradient(at 10% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%), radial-gradient(at 90% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), linear-gradient(135deg,rgb(42, 44, 49) 0%,rgb(32, 32, 33) 100%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}
html[data-theme='dark'] .nav-item {
  color: #e5e7eb; background: rgb(47, 50, 57); box-shadow: 0 2px 4px rgba(0,0,0,0.4);
}
html[data-theme='dark'] .category-card {
  background: #1b1b1d; box-shadow: 0 4px 6px rgba(0,0,0,0.3); border-color: #303033;
}
html[data-theme='dark'] .content-card {
  background: #242526; color: #e5e7eb; border-color: #303033;
}
html[data-theme='dark'] .content-card:hover {
  background: #2f2f32; border-color: #60a5fa; color: #60a5fa;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
}
html[data-theme='dark'] .content-card::after { background: #60a5fa; }
html[data-theme='dark'] .recommended {
  background: rgba(255, 107, 107, 0.15); color: #ff8e8e; border-color: rgba(255, 142, 142, 0.3);
}
html[data-theme='dark'] h2, html[data-theme='dark'] h3 { color: #f9fafb; }
html[data-theme='dark'] strong { color: #e5e7eb; }

/* ====================
   6. 移动端适配
   ==================== */
@media (max-width: 768px) {
  .quick-nav { flex-direction: column; gap: 0.5rem; }
  .nav-item { flex-direction: row; justify-content: start; padding: 0.8rem 1rem; }
  .nav-item .icon { margin-bottom: 0; margin-right: 0.8rem; }
  .card-container { grid-template-columns: 1fr; } /* 手机端单列显示 */
  .category-card { padding: 1.2rem; }
}
`}</style>