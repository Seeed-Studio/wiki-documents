---
description: このトピックでは、Seeed Studio のロボティクス製品ドキュメントを紹介します。
title: ロボティクス
keywords:
- robotics
- nvidia
- ros
- isaac
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/robotics_page
last_update:
  date: 05/29/2025
  author: ZhuYaohui
---

# 🤖 ロボティクス

> *「今日の科学は明日の技術である。」 - エドワード・テラー*

<div className="quick-nav-container">
  <nav className="quick-nav">
    <a href="#robot-kits" className="nav-item">
      <span className="icon">📦</span>
      <span className="text">ロボットキット</span>
      <div className="hover-effect"></div>
    </a>
    <a href="#actuators" className="nav-item">
      <span className="icon">⚙️</span>
      <span className="text">関節アクチュエータ</span>
      <div className="hover-effect"></div>
    </a>
    <a href="#sensors" className="nav-item">
      <span className="icon">👁️</span>
      <span className="text">センサー</span>
      <div className="hover-effect"></div>
    </a>
    <a href="#software" className="nav-item">
      <span className="icon">💻</span>
      <span className="text">ソフトウェア</span>
      <div className="hover-effect"></div>
    </a>
  </nav>
</div>

<div className="nav-grid">

## 📦 ロボットキット {#robot-kits}

<div class="category-group">
  <div class="category-card robot-kits">

### 🤗 SO-Arm

<div className="card-container">
    <a href="/ja/lerobot_so100m_new/" className="content-card">
      <span className="text">SO100/101 アーム</span>
    </a>
    <a href="/ja/simulate_soarm101_by_leisaac/" className="content-card">
      <span className="text">SO10x アーム with LeIsaac</span>
    </a>
    <a href="/ja/control_robotic_arm_via_phospho/" className="content-card">
      <span className="text">Phospho Lerobot</span>
    </a>
    <a href="/ja/training_soarm101_policy_with_isaacLab/" className="content-card">
        <span className="text">So Arm RL トレーニング</span>
        <span className="tag recommended">New</span>
    </a>
    <a href="/ja/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/" className="content-card">
        <span className="text">SO101 with NVIDIA GR00T</span>
        <span className="tag recommended">New</span>
    </a>
</div>

### 🚗 Lekiwi

<div className="card-container">
    <a href="/ja/lerobot_lekiwi/" className="content-card">
      <span className="text">Lekiwi モバイルベース</span>
    </a>
    <a href="/ja/sound_follow_robot/" className="content-card">
      <span className="text">Lekiwi 音声追従</span>
    </a>
</div>

### 🦾 StarAI Arm

<div className="card-container">
    <a href="/ja/lerobot_starai_arm/" className="content-card">
      <span className="text">StarAI ロボットアーム</span>
      <span className="tag recommended">New</span>
    </a>
    <a href="/ja/starai_arm_ros_moveit/" className="content-card">
      <span className="text">StarAI Arm MoveIt 2</span>
      <span className="tag recommended">New</span>
    </a>
    <a href="/ja/control_robotic_arm_via_gr00t" className="content-card">
      <span className="text">StarAI with NVIDIA GR00T</span>
    </a>
</div>

### 🦿脚付きホイール

<div className="card-container">
    <a href="/ja/StackForce_Mini_Wheeled_Legged_Robot" className="content-card">
      <span className="text">ミニホイール脚ロボット</span>
      <span className="tag recommended">New</span>
    </a>
</div>

### 🖐️ ハンド

<div className="card-container">
    <a href="/ja/hand_amazinghand/" className="content-card">
      <span className="text">AmazingHand</span>
      <span className="tag recommended">New</span>
    </a>
</div>


### 🦀 エンドエフェクタ

<div className="card-container">
    <a href="/ja/dm_gripper/" className="content-card">
      <span className="text">DM グリッパー</span>
      <span className="tag recommended">New</span>
    </a>
</div>

</div>
</div>

## ⚙️ アクチュエータ {#actuators}

<div class="category-group">
<div className="category-card actuators">

<div className="card-container">
    <a href="/ja/myactuator_series/" className="content-card">
      <span className="text">MyActuator X シリーズ</span>
    </a>
    <a href="/ja/damiao_series/" className="content-card">
      <span className="text">Damiao DM43 シリーズ</span>
    </a>
    <a href="/ja/feetech_servo/" className="content-card">
      <span className="text">Feetech STS3215 サーボ</span>
    </a>
    <a href="/ja/hightorque_control" className="content-card">
      <span className="text">HighTorque シリーズ</span>
    </a>
    <a href="/ja/fashionstar_servo/" className="content-card">
      <span className="text">Fashionstar シリーズ</span>
    </a>
    <a href="/ja/stackforce_series/" className="content-card">
      <span className="text">Stackforce シリーズ</span>
    </a>
    <a href="/ja/robstride_control/" className="content-card">
      <span className="text">RobStride コントロール</span>
      <span className="tag recommended">New</span>
    </a>
</div>

</div>
</div>

## 👁️ センサー {#sensors}

<div class="category-group">
<div className="category-card sensors">

**📡 LiDAR**  

<div className="card-container">
    <a href="/ja/robosense_lidar/" className="content-card">
      <span className="text">RoboSense</span>
    </a>
    <a href="/ja/mid360/" className="content-card">
      <span className="text">MID360</span>
    </a>
    <a href="/ja/a_loam/" className="content-card">
      <span className="text">A-LOAM アルゴリズム</span>
    </a>
    <a href="/ja/slamtec/" className="content-card">
      <span className="text">Slamtec シリーズ</span>
    </a>
</div>

**📷 カメラ**  

<div className="card-container">
    <a href="/ja/orbbec_gemini2/" className="content-card">
      <span className="text">Orbbec Gemini 2</span>
    </a>
    <a href="/ja/orbbec_gemini_335lg" className="content-card">
      <span className="text">Gemini 335Lg 深度</span>
      <span className="tag recommended">New</span>
    </a>
    <a href="/ja/orbbec_gemini336" className="content-card">
      <span className="text">Gemini 336 深度</span>
      <span className="tag recommended">New</span>
    </a>
    <a href="/ja/sensing_gmsl_cameras" className="content-card">
      <span className="text">SENSING GMSL2</span>
    </a>
    <a href="/ja/ac1" className="content-card">
      <span className="text">RoboSense AC1</span>
      <span className="tag recommended">New</span>
    </a>
    <a href="/ja/orbbec_depth_camera_on_ros/" className="content-card">
      <span className="text">Orbbec with ROS</span>
    </a>
    <a href="/ja/orb_slam3_orbbec_gemini2/" className="content-card">
      <span className="text">ORB-SLAM3 Gemini2</span>
    </a>
    <a href="/ja/csi_camera_on_ros/" className="content-card">
      <span className="text">CSI カメラ on Jetson</span>
    </a>
    <a href="/ja/pycuvslam_recomputer_robotics/" className="content-card">
      <span className="text">PyCuVSLAM</span>
    </a>

</div>

**🎤 音声**  

<div className="card-container">
    <a href="/ja/ReSpeaker_Core_v2.0/" className="content-card">
      <span className="text">ReSpeaker Core v2.0</span>
    </a>
    <a href="/ja/ReSpeaker_Mic_Array_v2.0/" className="content-card">
      <span className="text">ReSpeaker Mic Array v2.0</span>
    </a>
</div>

**🧭 IMU**  

<div className="card-container">
    <a href="/ja/hexfellow_y200/" className="content-card">
      <span className="text">HEXFELLOW Y200</span>
    </a>
    <a href="/ja/wheeltec_imu/" className="content-card">
      <span className="text">WHEELTEC IMU</span>
    </a>
</div>

</div>
</div>

## 💻 ソフトウェア {#software}

<div class="category-group">
<div className="category-card software">

**ROS エコシステム**  

<div className="card-container">
    <a href="/ja/installing_ros1/" className="content-card">
      <span className="text">ROS 1 インストール</span>
    </a>
    <a href="/ja/install_ros2_humble/" className="content-card">
      <span className="text">ROS 2 インストール</span>
    </a>
    <a href="/ja/install_isaacros/" className="content-card">
      <span className="text">Isaac ROS インストール</span>
    </a>
    <a href="/ja/isaac_ros_apriltag/" className="content-card">
      <span className="text">Isaac ROS AprilTag</span>
    </a>
    <a href="/ja/isaac_ros_visual_slam/" className="content-card">
      <span className="text">Isaac ROS V-SLAM</span>
    </a>
</div>

**PX4**  
<div className="card-container">
<a href="/ja/control_px4_with_recomputer_jetson/" className="content-card">
  <span className="text">PX4 with Jetson</span>
</a>

<a href="/ja/object_tracking_with_reComputer_jetson_and_pX4/" className="content-card">
  <span className="text">オブジェクト追跡（PX4）</span>
</a>

</div>

**NVIDIA Isaac**  
<div className="card-container">
<a href="/ja/install_isaaclab/" className="content-card">
  <span className="text">Isaac Lab インストール</span>
</a>
<a href="/ja/training_soarm101_policy_with_isaacLab/" className="content-card">
  <span className="text">SO Arm RL トレーニング</span>
  <span className="tag recommended">New</span>
</a>
<a href="/ja/simulate_soarm101_by_leisaac/" className="content-card">
  <span className="text">SO100 Arm Isaac Sim</span>
  <span className="tag recommended">New</span>
</a>
</div>

**VLA**  
<div className="card-container">
<a href="/ja/control_robotic_arm_via_gr00t" className="content-card">
  <span className="text">StarAI with NVIDIA GR00T</span>
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
   2. メインカテゴリ大カード（外側コンテナ）
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

/* カテゴリサイド装飾バー */
.category-card::before {
  content: ""; position: absolute; top: 0; left: 0; width: 6px; height: 100%;
}
.robot-kits::before { background: linear-gradient(to bottom, #4a90e2, #50e3c2); }
.actuators::before { background: linear-gradient(to bottom, #50e3c2, #a0e3c2); }
.sensors::before { background: linear-gradient(to bottom, #ff6b6b, #ff8e8e); }
.software::before { background: linear-gradient(to bottom, #f5a623, #f5c623); }

/* ====================
   3. コンテンツ小カードレイアウト（配置と効果）
   ==================== */

/* グリッドコンテナ：配置を確保 */
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); /* 自動改行、最小260px */
  gap: 12px; /* カード間隔 */
  margin-top: 12px;
  margin-bottom: 1.5rem;
}

/* 小カード本体 - 競合を避けるためcontent-cardに名前変更 */
.content-card {
  display: flex;
  align-items: center;
  justify-content: space-between; /* タイトルは左、タグは右 */
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

/* 小カードホバー特殊効果 */
.content-card:hover {
  background: #fff;
  border-color: #4a90e2;
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.15);
  transform: translateY(-2px); /* わずかに上昇 */
  color: #4a90e2;
}

/* ホバー時左側に小さな青いバーが表示 */
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
  width: 4px; /* 幅が4pxに変更 */
}

/* ====================
   4. タグスタイル（Tags）
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
  /* シンプルな呼吸アニメーション */
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.2); }
  70% { box-shadow: 0 0 0 4px rgba(255, 107, 107, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0); }
}

/* ====================
   5. ダークモード対応
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
   6. モバイル端末対応
   ==================== */
@media (max-width: 768px) {
  .quick-nav { flex-direction: column; gap: 0.5rem; }
  .nav-item { flex-direction: row; justify-content: start; padding: 0.8rem 1rem; }
  .nav-item .icon { margin-bottom: 0; margin-right: 0.8rem; }
  .card-container { grid-template-columns: 1fr; } /* スマートフォン端末では単列表示 */
  .category-card { padding: 1.2rem; }
}
`}</style>