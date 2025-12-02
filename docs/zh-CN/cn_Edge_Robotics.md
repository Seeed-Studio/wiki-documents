---
description: 本主题介绍 Seeed Studio 的机器人产品文档。
title: 机器人技术
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

# 🤖 机器人技术 

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

## 🤗 SO-Arm

<div className="card-container">
    <a href="/cn/lerobot_so100m_new/" className="nav-item">
      <span className="text">SO100/101 机械臂</span>
    </a>
    <a href="/cn/simulate_soarm101_by_leisaac/" className="nav-item">
      <span className="text">SO100 机械臂与 IsaacSim</span>
    </a>
    <a href="/cn/control_robotic_arm_via_phospho/" className="nav-item">
      <span className="text">Phospho Lerobot</span>
    </a>
    <a href="/cn/training_soarm101_policy_with_isaacLab/" className="nav-item">
    <span className="text">So Arm 强化学习</span>
    <span className="tag recommended">New</span>
    </a>
    <a href="/cn/simulate_soarm101_by_leisaac/" className="nav-item">
      <span className="text">SO100 Arm 导入Isaac Sim</span>
      <span className="tag recommended">New</span>
    </a>
    <a href="/cn/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/" className="nav-item">
      <span className="text">在Jetson Thor上跑Isaac Gr00t N1.5</span>
      <span className="tag recommended">New</span>
    </a>
</div>


## 🚗 Lekiwi

<div className="card-container">
    <a href="/cn/lerobot_lekiwi/" className="nav-item">
      <span className="text">Lekiwi 移动底盘</span>
       <span className="tag recommended">New</span>
    </a>
    <a href="/cn/sound_follow_robot/" className="nav-item">
      <span className="text">Lekiwi 声音跟随</span>
    </a>
</div>


## 🦾 StarAI Arm

<div className="card-container">
    <a href="/cn/lerobot_starai_arm/" className="nav-item">
      <span className="text">Starai 机械臂</span>
    </a>
    <a href="/cn/starai_arm_ros_moveit/" className="nav-item">
      <span className="text">Starai 机械臂ROS2 Moveit</span>
    </a>
    <a href="/cn/control_robotic_arm_via_gr00t" className="nav-item">
  <span className="text">Starai Arm 跑Isaac GR00T</span>
    </a>
</div>


## 🖐️ 灵巧手

<div className="card-container">
    <a href="/cn/hand_amazinghand/" className="nav-item">
      <span className="text">AmazingHand</span>
      <span className="tag recommended">New</span>
    </a>
</div>

## 🦀 末端夹爪

<div className="card-container">
    <a href="/cn/dm_gripper" className="nav-item">
      <span className="text">达妙电机末端夹爪</span>
      <span className="tag recommended">New</span>
    </a>
</div>



</div>
</div>

## ⚙️ 执行器 {#actuators}
<div class="category-group">
<div className="category-card actuators">

<div className="card-container">
    <a href="/cn/myactuator_series/" className="nav-item">
      <span className="text">0️⃣脉塔 X 系列</span>
    </a>
    <a href="/cn/damiao_series/" className="nav-item">
      <span className="text">1️⃣达妙 DM43 系列</span>
    </a>
    <a href="/cn/feetech_servo/" className="nav-item">
      <span className="text">2️⃣飞特 STS3215 舵机</span>
    </a>
    <a href="/cn/hightorque_series/" className="nav-item">
      <span className="text">3️⃣高擎 系列</span>
    </a>
    <a href="/cn/fashionstar_servo/" className="nav-item">
      <span className="text">4️⃣华馨京 系列</span>
    </a>
</div>

</div>
</div>

## 👁️ 传感器 {#sensors}
<div class="category-group">
<div className="category-card sensors">

**📡激光雷达**  

<div className="card-container">
    <a href="/cn/robosense_lidar/" className="nav-item">
      <span className="text">速腾聚创</span>
    </a>
    <a href="/cn/mid360/" className="nav-item">
      <span className="text">MID360</span>
    </a>
    <a href="/cn/a_loam/" className="nav-item">
      <span className="text">A-LOAM 算法</span>
    </a>
    <a href="/cn/slamtec/" className="nav-item">
      <span className="text">思岚科技系列</span>
    </a>
</div>


**📷摄像头**  

<div className="card-container">
    <a href="/cn/orbbec_gemini2/" className="nav-item">
      <span className="text">奥比中光 Gemini2 3D 摄像头入门</span>
    </a>
    <a href="/cn/orbbec_depth_camera_on_ros/" className="nav-item">
      <span className="text">奥比中光深度摄像头</span>
    </a>
    <a href="/cn/orbbec_gemini_335lg" className="nav-item">
      <span className="text">奥比中光 Gemini 335Lg 立体摄像头</span>
      <span className="tag recommended">New</span>
    </a>
    <a href="/cn/sensing_gmsl_cameras" className="nav-item">
      <span className="text">SENSING GMSL2 摄像头</span>
      <span className="tag recommended">New</span>
    </a>
    <a href="/cn/orb_slam3_orbbec_gemini2/" className="nav-item">
      <span className="text">ORB-SLAM3 与奥比中光 Gemini2</span>
    </a>
    <a href="/cn/csi_camera_on_ros/" className="nav-item">
      <span className="text">CSI 摄像头</span>
    </a>
</div>

**🎤语音**  

<div className="card-container">
    <a href="/cn/ReSpeaker_Core_v2.0/" className="nav-item">
      <span className="text">ReSpeaker Core v2.0</span>
    </a>
    <a href="/cn/ReSpeaker_Mic_Array_v2.0/" className="nav-item">
      <span className="text">ReSpeaker 麦克风阵列 v2.0</span>
    </a>
</div>

**🧭IMU**  

<div className="card-container">
    <a href="/cn/hexfellow_y200/" className="nav-item">
      <span className="text">HEXFELLOW Y200</span>
    </a>
</div>


</div>
</div>

## 💻 软件 {#software}
<div class="category-group">
<div className="category-card software">

**ROS 生态系统**  

<div className="card-container">
    <a href="/cn/installing_ros1/" className="nav-item">
      <span className="text">ROS1 安装</span>
    </a>
    <a href="/cn/install_ros2_humble/" className="nav-item">
      <span className="text">ROS2 安装</span>
    </a>
    <a href="/cn/install_isaacros/" className="nav-item">
      <span className="text">IsaacROS 安装</span>
    </a>
    <a href="/cn/isaac_ros_apriltag/" className="nav-item">
      <span className="text">AprilTag</span>
    </a>
    <a href="/cn/isaac_ros_visual_slam/" className="nav-item">
      <span className="text">视觉 SLAM</span>
    </a>
</div>

**PX4**  
<div className="card-container">
<a href="/cn/control_px4_with_recomputer_jetson/" className="nav-item">
  <span className="text">PX4 与 Jetson</span>
  <span className="tag recommended">New</span>
</a>

<a href="/cn/object_tracking_with_reComputer_jetson_and_pX4/" className="nav-item">
  <span className="text">PX4 目标跟踪</span>
  <span className="tag recommended">New</span>
</a>

</div>


**NVIDIA Isaac**  
<div className="card-container">
<a href="/cn/install_isaaclab/" className="nav-item">
  <span className="text">Isaac Lab 安装</span>
</a>
<a href="/cn/simulate_soarm101_by_leisaac/" className="nav-item">
  <span className="text">SO100 机械臂与 IsaacSim</span>
  <span className="tag recommended">New</span>
</a>
    <a href="/cn/training_soarm101_policy_with_isaacLab/" className="nav-item">
    <span className="text">So Arm 强化学习</span>
    <span className="tag recommended">New</span>
    </a>
</div>


**VLA**  
<div className="card-container">
<a href="/cn/control_robotic_arm_via_gr00t" className="nav-item">
  <span className="text">Star Ai Arm 跑Isaac GR00T</span>
</a>
</div>


</div>
</div>

</div>




<style>{`
/* 导航容器 */
.quick-nav-container {
  margin: 2rem 0;
  padding: 1rem;
  background: 
  radial-gradient(at 10% 20%, #f0fdf4 0%, transparent 50%),
  radial-gradient(at 90% 80%, #f0f7ff 0%, transparent 50%),
  white;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

/* Dark 模式 - 导航容器 */
html[data-theme='dark'] .quick-nav-container {
  background: 
    radial-gradient(at 10% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
    radial-gradient(at 90% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
    linear-gradient(135deg,rgb(42, 44, 49) 0%,rgb(32, 32, 33) 100%);
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.3),
    inset 0 0 12px rgba(99, 102, 241, 0.1); /* 内发光增强深度 */
}

/* 导航主体 */
.quick-nav {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

/* 导航项 */
.nav-item {
  position: relative;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  display: flex;
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

/* Dark 模式 - 导航项 */
html[data-theme='dark'] .nav-item {
  color: #e5e7eb;
  background:rgb(47, 50, 57);
  box-shadow: 0 2px 4px rgba(0,0,0,0.4);
}

/* 图标样式 */
.nav-item .icon {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  transition: transform 0.3s;
}

/* 文字样式 */
.nav-item .text {
  font-size: 0.95rem;
  white-space: nowrap;
}

/* 悬浮特效 */
.nav-item .hover-effect {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%);
  border-radius: 12px;
  transition: height 0.3s ease;
  z-index: -1;
}

/* 悬浮动画 */
.nav-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  color: white;
}

/* Dark 模式 - 悬浮动画 */
html[data-theme='dark'] .nav-item:hover {
  box-shadow: 0 6px 12px rgba(0,0,0,0.6);
  color: white;
}

.nav-item:hover .icon {
  transform: scale(1.2) rotate(10deg);
}

.nav-item:hover .hover-effect {
  height: 100%;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .quick-nav {
    flex-direction: column;
    gap: 0.5rem;
  }
  .nav-item {
    flex-direction: row;
    justify-content: start;
    padding: 0.8rem 1rem;
  }
  .nav-item .icon {
    margin-bottom: 0;
    margin-right: 0.8rem;
  }
}
`}</style>


<style>{`
/* 内容卡片增强版样式 */
.nav-grid {
  display: block;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 2rem;
}

.category-card {
  position: relative;
  padding: 1.5rem;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  z-index: 1;
}

/* Dark 模式 - 内容卡片 */
html[data-theme='dark'] .category-card {
  background:rgb(30, 30, 32);
  box-shadow: 0 4px 6px rgba(0,0,0,0.4);
  color: #e5e7eb;
}

.category-group {
  margin-bottom: 2rem;
}

/* 分类色标 */
.category-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
}

.robot-kits::before { background: linear-gradient(to bottom, #4a90e2, #50e3c2); }
.actuators::before { background: linear-gradient(to bottom, #50e3c2, #a0e3c2); }
.sensors::before { background: linear-gradient(to bottom, #ff6b6b, #ff8e8e); }
.software::before { background: linear-gradient(to bottom, #f5a623, #f5c623); }

/* 悬浮特效 */
.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0,0,0,0.1);
}

/* Dark 模式 - 悬浮特效 */

html[data-theme='dark'] .category-card:hover {
  box-shadow: 0 12px 20px rgba(0,0,0,0.6);
}

.category-card:hover::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  z-index: -1;
}

/* Dark 模式 - 悬浮光效 */
html[data-theme='dark'] .category-card:hover::after {
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
}

/* 链接动画 */
.category-card a {
  position: relative;
  display: inline-block;
  transition: all 0.2s;
  text-decoration: none !important;
  color: #333;
}

/* Dark 模式 - 链接 */
html[data-theme='dark'] .category-card a {
  color: #d1d5db;
}

.category-card a:hover {
  color: #4a90e2;
  transform: translateX(5px);
}

/* Dark 模式 - 链接悬浮 */
html[data-theme='dark'] .category-card a:hover {
  color: #60a5fa;
}

.category-card a::after {
  content: "";
  position: absolute;
  bottom: 2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #4a90e2;
  transition: width 0.3s;
}

/* Dark 模式 - 链接下划线 */
html[data-theme='dark'] .category-card a::after {
  background: #60a5fa;
}

.category-card a:hover::after {
  width: 100%;
}

.card-container {
  margin-bottom: 1.5rem; /* 原为 0.1rem */
}

/* 标签样式增强 */
.tag {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 12px;
  margin-left: 8px;
  transition: all 0.3s;
}

.stable { 
  background: #e6f4ea; 
  color: #137333;
  box-shadow: 0 2px 4px rgba(0,100,0,0.1);
}

/* Dark 模式 - Stable 标签 */
html[data-theme='dark'] .stable {
  background: #065f46;
  color: #a7f3d0;
  box-shadow: 0 2px 4px rgba(0,100,0,0.3);
}

.recommended { 
  background: #fce8e6; 
  color: #a50e0e;
  box-shadow: 0 2px 4px rgba(200,0,0,0.1);
}

/* Dark 模式 - Recommended 标签 */
html[data-theme='dark'] .recommended {
  background: #7f1d1d;
  color: #fca5a5;
  box-shadow: 0 2px 4px rgba(200,0,0,0.3);
}

.category-card:active {
  transform: translateY(-2px) scale(0.98);
  box-shadow: 0 6px 10px rgba(0,0,0,0.1);
}

/* Dark 模式 - 点击效果 */
html[data-theme='dark'] .category-card:active {
  box-shadow: 0 6px 10px rgba(0,0,0,0.4);
}

/* 响应式优化 */
@media (max-width: 768px) {
  .nav-grid {
    grid-template-columns: 1fr;
  }

  .category-card {
    width: 100%;
    margin-top: 0.5rem; /* 卡片紧贴标题 */
  }
}

/* Dark 模式 - 标题文字 */
html[data-theme='dark'] h1,
html[data-theme='dark'] h2,
html[data-theme='dark'] h3,
html[data-theme='dark'] h4,
html[data-theme='dark'] h5,
html[data-theme='dark'] h6 {
  color: #f9fafb;
}

/* Dark 模式 - 正文文字 */
html[data-theme='dark'] p,
html[data-theme='dark'] li,
html[data-theme='dark'] strong {
  color: #e5e7eb;
}

/* Dark 模式 - 引用块 */
html[data-theme='dark'] blockquote {
  color: #9ca3af;
  border-left-color: #4b5563;
}
`}</style>