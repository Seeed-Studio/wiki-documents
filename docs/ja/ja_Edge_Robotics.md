---
description: このトピックでは、Seeed Studioのロボティクス製品ドキュメントを紹介します。
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

> *"今日の科学は明日の技術である。" - エドワード・テラー*

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

## 🤗 SO-Arm

<div className="card-container">
    <a href="/ja/lerobot_so100m_new/" className="nav-item">
      <span className="text">SO100/101 Arm</span>
    </a>
    <a href="/ja/simulate_soarm101_by_leisaac/" className="nav-item">
      <span className="text">SO100 Arm with IsaacSim</span>
    </a>
    <a href="/ja/control_robotic_arm_via_phospho/" className="nav-item">
      <span className="text">Phospho Lerobot</span>
    </a>
    <a href="/ja/training_soarm101_policy_with_isaacLab/" className="nav-item">
    <span className="text">So Arm強化学習</span>
    <span className="tag recommended">New</span>
    </a>
    <a href="/ja/simulate_soarm101_by_leisaac/" className="nav-item">
      <span className="text">SO100 Arm with IsaacSim</span>
      <span className="tag recommended">New</span>
    </a>
    <a href="/ja/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/" className="nav-item">
        <span className="text">SO101 Arm with NVIDIA's GR00T</span>
        <span className="tag recommended">New</span>
    </a>
</div>

## 🚗 Lekiwi

<div className="card-container">
    <a href="/ja/lerobot_lekiwi/" className="nav-item">
      <span className="text">Lekiwiモバイルベース</span>
    </a>
    <a href="/ja/sound_follow_robot/" className="nav-item">
      <span className="text">Lekiwi音声追従</span>
    </a>
</div>

## 🦾 StarAI Arm

<div className="card-container">
    <a href="/ja/lerobot_starai_arm/" className="nav-item">
      <span className="text">Staraiロボットアーム</span>
      <span className="tag recommended">New</span>
    </a>
    <a href="/ja/starai_arm_ros_moveit/" className="nav-item">
      <span className="text">StaraiロボットアームMoveit2</span>
      <span className="tag recommended">New</span>
    </a>
    <a href="/ja/control_robotic_arm_via_gr00t" className="nav-item">
  <span className="text">Star AI with NVIDIA's GR00T</span>
  </a>
</div>

## 🖐️ ハンド

<div className="card-container">
    <a href="/ja/hand_amazinghand/" className="nav-item">
      <span className="text">AmazingHand</span>
      <span className="tag recommended">New</span>
    </a>
</div>


## 🦀 エンドエフェクタ

<div className="card-container">
    <a href="/ja/dm_gripper/" className="nav-item">
      <span className="text">DMグリッパー</span>
      <span className="tag recommended">New</span>
    </a>
</div>

</div>
</div>

## ⚙️ アクチュエータ {#actuators}

<div class="category-group">
<div className="category-card actuators">

<div className="card-container">
    <a href="/ja/myactuator_series/" className="nav-item">
      <span className="text">0️⃣MyActuator Xシリーズ</span>
    </a>
    <a href="/ja/damiao_series/" className="nav-item">
      <span className="text">1️⃣Damiao DM43シリーズ</span>
    </a>
    <a href="/ja/feetech_servo/" className="nav-item">
      <span className="text">2️⃣Feetech STS3215サーボモーター</span>
    </a>
    <a href="/ja/hightorque_series/" className="nav-item">
      <span className="text">3️⃣HighTorqueシリーズ</span>
    </a>
</div>

</div>
</div>

## 👁️ センサー {#sensors}

<div class="category-group">
<div className="category-card sensors">

**📡LiDAR**  

<div className="card-container">
    <a href="/ja/robosense_lidar/" className="nav-item">
      <span className="text">Robosense</span>
    </a>
    <a href="/ja/mid360/" className="nav-item">
      <span className="text">MID360</span>
    </a>
    <a href="/ja/a_loam/" className="nav-item">
      <span className="text">A-LOAMアルゴリズム</span>
    </a>
    <a href="/ja/slamtec/" className="nav-item">
      <span className="text">Slamtecシリーズ</span>
    </a>
</div>

**📷カメラ**  

<div className="card-container">
    <a href="/ja/orbbec_gemini2/" className="nav-item">
      <span className="text">Orbbec Gemini2</span>
    </a>
    <a href="/ja/orbbec_depth_camera_on_ros/" className="nav-item">
      <span className="text">Orbbec深度カメラ with ROS</span>
    </a>
    <a href="/ja/orbbec_gemini_335lg" className="nav-item">
      <span className="text">Orbbec Gemini 335Lgステレオカメラ</span>
      <span className="tag recommended">New</span>
    </a>
    <a href="/ja/sensing_gmsl_cameras" className="nav-item">
      <span className="text">SENSING GMSL2カメラ</span>
      <span className="tag recommended">New</span>
    </a>
    <a href="/ja/orb_slam3_orbbec_gemini2/" className="nav-item">
      <span className="text">ORB-SLAM3 with Orbbec Gemini2</span>
    </a>
    <a href="/ja/csi_camera_on_ros/" className="nav-item">
      <span className="text">CSIカメラ</span>
    </a>
</div>

**🎤音声**  

<div className="card-container">
    <a href="/ja/ReSpeaker_Core_v2.0/" className="nav-item">
      <span className="text">ReSpeaker Core v2.0</span>
    </a>
    <a href="/ja/ReSpeaker_Mic_Array_v2.0/" className="nav-item">
      <span className="text">ReSpeaker Mic Array v2.0</span>
    </a>
</div>

**🧭IMU**  

<div className="card-container">
    <a href="/ja/hexfellow_y200/" className="nav-item">
      <span className="text">HEXFELLOW Y200</span>
    </a>
</div>

</div>
</div>

## 💻 ソフトウェア {#software}

<div class="category-group">
<div className="category-card software">

**ROSエコシステム**  

<div className="card-container">
    <a href="/ja/installing_ros1/" className="nav-item">
      <span className="text">ROS1インストール</span>
    </a>
    <a href="/ja/install_ros2_humble/" className="nav-item">
      <span className="text">ROS2インストール</span>
    </a>
    <a href="/ja/install_isaacros/" className="nav-item">
      <span className="text">IsaacROSインストール</span>
    </a>
    <a href="/ja/isaac_ros_apriltag/" className="nav-item">
      <span className="text">AprilTag</span>
    </a>
    <a href="/ja/isaac_ros_visual_slam/" className="nav-item">
      <span className="text">Visual SLAM</span>
    </a>
</div>

**PX4**  
<div className="card-container">
<a href="/ja/control_px4_with_recomputer_jetson/" className="nav-item">
  <span className="text">PX4 with Jetson</span>
</a>

<a href="/ja/object_tracking_with_reComputer_jetson_and_pX4/" className="nav-item">
  <span className="text">PX4でのオブジェクト追跡</span>
</a>

</div>

**NVIDIA Isaac**  
<div className="card-container">
<a href="/ja/install_isaaclab/" className="nav-item">
  <span className="text">Isaac Labインストール</span>
</a>
<a href="/ja/training_soarm101_policy_with_isaacLab/" className="nav-item">
  <span className="text">So Arm強化学習</span>
  <span className="tag recommended">New</span>
</a>
<a href="/ja/simulate_soarm101_by_leisaac/" className="nav-item">
  <span className="text">SO100 Arm with IsaacSim</span>
  <span className="tag recommended">New</span>
</a>
</div>

**VLA**  
<div className="card-container">
<a href="/ja/control_robotic_arm_via_gr00t" className="nav-item">
  <span className="text">Star AI with NVIDIA's GR00T</span>
</a>
</div>

</div>
</div>

</div>

<style>{`
/* 導航容器 */
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

/* Dark模式 - 導航容器 */
html[data-theme='dark'] .quick-nav-container {
  background:
    radial-gradient(at 10% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
    radial-gradient(at 90% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
    linear-gradient(135deg,rgb(42, 44, 49) 0%,rgb(32, 32, 33) 100%);
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.3),
    inset 0 0 12px rgba(99, 102, 241, 0.1); /* 内発光増強深度 */
}

/* 導航主体 */
.quick-nav {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

/* 導航項 */
.nav-item {
  position: relative;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  display: flex;
  margin: 6px 6px; /* 上下6px，左右6px */
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

/* Dark模式 - 導航項 */
html[data-theme='dark'] .nav-item {
  color: #e5e7eb;
  background:rgb(47, 50, 57);
  box-shadow: 0 2px 4px rgba(0,0,0,0.4);
}

/* 図標様式 */
.nav-item .icon {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  transition: transform 0.3s;
}

/* 文字様式 */
.nav-item .text {
  font-size: 0.95rem;
  white-space: nowrap;
}

/* 悬浮特効 */
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

/* 悬浮動画 */
.nav-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  color: white;
}

/* Dark模式 - 悬浮動画 */
html[data-theme='dark'] .nav-item:hover {  box-shadow: 0 6px 12px rgba(0,0,0,0.6);
  color: white;
}

.nav-item:hover .icon {
  transform: scale(1.2) rotate(10deg);
}

.nav-item:hover .hover-effect {
  height: 100%;
}

/* レスポンシブデザイン */
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
/* コンテンツカード強化版スタイル */
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

/* Darkモード - コンテンツカード */
html[data-theme='dark'] .category-card {
  background:rgb(30, 30, 32);
  box-shadow: 0 4px 6px rgba(0,0,0,0.4);
  color: #e5e7eb;
}

.category-group {
  margin-bottom: 2rem;
}

/* カテゴリー色標 */
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

/* ホバー特効 */
.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0,0,0,0.1);
}

/* Darkモード - ホバー特効 */
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

/* Darkモード - ホバー光効 */
html[data-theme='dark'] .category-card:hover::after {
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
}

/* リンクアニメーション */
.category-card a {
  position: relative;
  display: inline-block;
  transition: all 0.2s;
  text-decoration: none !important;
  color: #333;
}

/* Darkモード - リンク */
html[data-theme='dark'] .category-card a {
  color: #d1d5db;
}

.category-card a:hover {
  color: #4a90e2;
  transform: translateX(5px);
}

/* Darkモード - リンクホバー */
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

/* Darkモード - リンク下線 */
html[data-theme='dark'] .category-card a::after {
  background: #60a5fa;
}

.category-card a:hover::after {
  width: 100%;
}

.card-container {
  margin-bottom: 1.5rem; /* 元は0.1rem */
}

/* タグスタイル強化 */
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

/* Darkモード - Stableタグ */
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

/* Darkモード - Recommendedタグ */
html[data-theme='dark'] .recommended {
  background: #7f1d1d;
  color: #fca5a5;
  box-shadow: 0 2px 4px rgba(200,0,0,0.3);
}

.category-card:active {
  transform: translateY(-2px) scale(0.98);
  box-shadow: 0 6px 10px rgba(0,0,0,0.1);
}

/* Darkモード - クリック効果 */
html[data-theme='dark'] .category-card:active {
  box-shadow: 0 6px 10px rgba(0,0,0,0.4);
}

/* レスポンシブ最適化 */
@media (max-width: 768px) {
  .nav-grid {
    grid-template-columns: 1fr;
  }

  .category-card {
    width: 100%;
    margin-top: 0.5rem; /* カードがタイトルに密着 */
  }
}

/* Darkモード - タイトル文字 */
html[data-theme='dark'] h1,
html[data-theme='dark'] h2,
html[data-theme='dark'] h3,
html[data-theme='dark'] h4,
html[data-theme='dark'] h5,
html[data-theme='dark'] h6 {
  color: #f9fafb;
}

/* Darkモード - 本文文字 */
html[data-theme='dark'] p,
html[data-theme='dark'] li,
html[data-theme='dark'] strong {
  color: #e5e7eb;
}

/* Darkモード - 引用ブロック */
html[data-theme='dark'] blockquote {
  color: #9ca3af;
  border-left-color: #4b5563;
}
`}</style>

