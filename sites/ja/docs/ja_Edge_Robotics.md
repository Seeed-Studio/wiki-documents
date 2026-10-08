---
description: Seeed Studio ロボティクスのドキュメントとラーニングパス。
title: AI Robotics Wiki
hide_title: true
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
url: https://wiki.seeedstudio.com/ja/robotics_page/
---

import '/src/css/robotics-page-style.css';
import RoboticsPageSearch from '@site/src/components/robotics/RoboticsPageSearch';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';
import RotatingProductShowcase from '@site/src/components/robotics/RotatingProductShowcase';
import RoboticsQuote from '@site/src/components/robotics/RoboticsQuote';

<h1 className="robotics-page-title">AI Robotics Wiki</h1>

<div className="robotics-page">
  <RoboticsQuote />

  <section className="hero-panel">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>どこから始めればよいか迷っていますか？お持ちのロボットキットを選んでください</h2>
    </div>
  </section>

  <RoboticsPageSearch />

  <div className="robotics-quicklinks">
    <a href="https://279070161-sketch.github.io/reBot/" target="_blank" rel="noopener noreferrer">🚀 ランディングページ</a>
    <GitHubStarButton owner="Seeed-Projects" repo="reBot-DevArm" />
    <a href="https://www.seeedstudio.com/Robotics-c-2427.html" target="_blank" rel="noopener noreferrer">🛒 ショップ</a>
  </div>

  <section id="robot-kits" className="section-block">
    <RotatingProductShowcase>

<details id="rebot-rs" className="product-card rebot product-card--cover">
  <summary className="product-head">
    <h3>reBot-RS ロボットアーム</h3>
  </summary>
  <div className="product-body">
    <div className="learning-group">
      <h4>クイックスタート &amp; SDK</h4>
      <div className="learning-steps">
        <a className="step-card" href="/ja/rebot_b601_rs_getting_started/"><span className="step-index">1</span><div><b>reBot-RS クイックスタート</b></div></a>
        <a className="step-card" href="/ja/rebot_arm_b601_rs_lerobot/"><span className="step-index">2</span><div><b>LeRobot を用いた reBot-RS</b></div></a>
        <a className="step-card" href="/ja/rebot_arm_b601_rs_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio を用いた reBot-RS</b></div></a>
        <a className="step-card" href="/ja/rebot_arm_b601_rs_mit_control/"><span className="step-index">4</span><div><b>reBot-RS モーター SDK</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>アプリケーション</h4>
      <div className="learning-steps">
        <a className="step-card" href="/ja/rebot_arm_b601_rs_grasping_demo/"><span className="step-index">1</span><div><b>ビジュアルグラスピングによる reBot-RS</b></div></a>
        <a className="step-card" href="/ja/rebot_arm_b601_rs_ros2_integration/"><span className="step-index">2</span><div><b>ROS2 と連携した reBot-RS</b></div></a>
        <a className="step-card" href="/ja/rebot_arm_b601_rs_isaacsim/"><span className="step-index">3</span><div><b>Isaac Sim と連携した reBot-RS</b></div></a>
        <a className="step-card" href="/ja/rebot_arm_b601_rs_web_simulator_developer_guide/"><span className="step-index">4</span><div><b>Web コントローラによる reBot-RS</b></div></a>
        <a className="step-card" href="/ja/wrc_demo_tutorial/"><span className="step-index">5</span><div><b>Agent Claw による reBot-RS</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>コース</h4>
      <div className="learning-steps">
        <a className="step-card" href="/ja/rebot_physical_ai_course_introduction/"><span className="step-index">🎓</span><div><b>初心者向けコース</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>オープンソースリソース</h4>
      <div className="rebot-resource-list">
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_RS" target="_blank" rel="noopener noreferrer">reBot-RS ハードウェアコレクション</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/Rebot_Arm_description/RS" target="_blank" rel="noopener noreferrer">reBot-RS 説明パッケージ（URDF / Mesh）</a>
        <a href="https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_RS" target="_blank" rel="noopener noreferrer">reBot-RS デジタルツイン / Web シミュレータ</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">reBot-DevArm メインリポジトリ</a>
        <a href="https://github.com/Seeed-Projects/reBotArm_control_py" target="_blank" rel="noopener noreferrer">Python SDK</a>
        <a href="https://github.com/Seeed-Projects/reBotArmController_ROS2" target="_blank" rel="noopener noreferrer">ROS2 コントローラ</a>
        <a href="https://github.com/Seeed-Projects/lerobot-robot-seeed-b601" target="_blank" rel="noopener noreferrer">LeRobot ロボットアダプタ</a>
        <a href="https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102" target="_blank" rel="noopener noreferrer">LeRobot テレオペレータアダプタ</a>
        <a href="https://github.com/Seeed-Projects/reBot-Isaacsim" target="_blank" rel="noopener noreferrer">Isaac Sim</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm-Grasp" target="_blank" rel="noopener noreferrer">ビジュアルグラスピングデモ</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/camera-mounts" target="_blank" rel="noopener noreferrer">カメラマウントコレクション</a>
      </div>
    </div>
  </div>
</details>


<details id="rebot-dm" className="product-card rebot product-card--cover">
  <summary className="product-head">
    <h3>reBot-DM ロボットアーム</h3>
  </summary>
  <div className="product-body">
    <div className="learning-group">
      <h4>クイックスタート &amp; SDK</h4>
      <div className="learning-steps">
        <a className="step-card" href="/ja/rebot_b601_dm_getting_started/"><span className="step-index">1</span><div><b>reBot-DM クイックスタート</b></div></a>
        <a className="step-card" href="/ja/rebot_arm_b601_dm_lerobot/"><span className="step-index">2</span><div><b>LeRobot を用いた reBot-DM</b></div></a>
        <a className="step-card" href="/ja/rebot_arm_b601_dm_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio を用いた reBot-DM</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>アプリケーション</h4>
      <div className="learning-steps">
        <a className="step-card" href="/ja/rebot_arm_b601_dm_grasping_demo/"><span className="step-index">1</span><div><b>reBot-DM ビジュアルグラスプ</b></div></a>
        <a className="step-card" href="/ja/rebot_arm_b601_dm_ros2_integration/"><span className="step-index">2</span><div><b>ROS2 と連携した reBot-DM</b></div></a>
        <a className="step-card" href="/ja/rebot_arm_b601_dm_isaacsim/"><span className="step-index">3</span><div><b>Isaac Sim と連携した reBot-DM</b></div></a>
        <a className="step-card" href="/ja/rebot_arm_b601_dm_web_simulator_developer_guide/"><span className="step-index">4</span><div><b>Web コントローラによる reBot-DM</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>コース</h4>
      <div className="learning-steps">
        <a className="step-card" href="/ja/rebot_physical_ai_course_introduction/"><span className="step-index">🎓</span><div><b>初心者向けコース</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>オープンソースリソース</h4>
      <div className="rebot-resource-list">
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_DM" target="_blank" rel="noopener noreferrer">reBot-DM ハードウェアコレクション</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/Rebot_Arm_description/DM" target="_blank" rel="noopener noreferrer">reBot-DM 説明パッケージ（URDF / Mesh）</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_DM/performance_testing" target="_blank" rel="noopener noreferrer">reBot-DM 実機性能テスト</a>
        <a href="https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_DM" target="_blank" rel="noopener noreferrer">reBot-DM デジタルツイン / Web シミュレータ</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">reBot-DevArm メインリポジトリ</a>
        <a href="https://github.com/Seeed-Projects/reBotArm_control_py" target="_blank" rel="noopener noreferrer">Python SDK</a>
        <a href="https://github.com/Seeed-Projects/reBotArmController_ROS2" target="_blank" rel="noopener noreferrer">ROS2 コントローラ</a>
        <a href="https://github.com/Seeed-Projects/lerobot-robot-seeed-b601" target="_blank" rel="noopener noreferrer">LeRobot ロボットアダプタ</a>
        <a href="https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102" target="_blank" rel="noopener noreferrer">LeRobot テレオペレータアダプタ</a>
        <a href="https://github.com/Seeed-Projects/reBot-Isaacsim" target="_blank" rel="noopener noreferrer">Isaac Sim</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm-Grasp" target="_blank" rel="noopener noreferrer">ビジュアルグラスピングデモ</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/camera-mounts" target="_blank" rel="noopener noreferrer">カメラマウントコレクション</a>
      </div>
    </div>
  </div>
</details>


<details id="soarm" className="product-card soarm product-card--cover">
  <summary className="product-head">
    <h3>SO100 / SO101 ロボットアーム</h3>
  </summary>
  <div className="product-body">
    <div className="learning-group">
      <h4>クイックスタート &amp; ツール</h4>
      <div className="learning-steps">
        <a className="step-card" href="/ja/lerobot_so100m_new/"><span className="step-index">1</span><div><b>SO100 / SO101 クイックスタート</b></div></a>
        <a className="step-card" href="/ja/lerobot_steering_gear_debugging_tool/"><span className="step-index">2</span><div><b>サーボデバッグツール</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>アプリケーション</h4>
      <div className="learning-steps">
        <a className="step-card" href="/ja/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="step-index">3</span><div><b>SO101 と NVIDIA GR00T</b></div></a>
        <a className="step-card" href="/ja/lerobot_double_arm_so_arm_training/"><span className="step-index">4</span><div><b>デュアルアーム SO-ARM トレーニング</b></div></a>
        <a className="step-card" href="/ja/soarm_amazinghand_teleop/"><span className="step-index">5</span><div><b>SO-ARM と Amazing Hand デクスタラスハンド</b></div></a>
        <a className="step-card" href="/ja/simulate_soarm101_by_leisaac/"><span className="step-index">6</span><div><b>LeIsaac シミュレーション</b></div></a>
        <a className="step-card" href="/ja/training_soarm101_policy_with_isaacLab/"><span className="step-index">7</span><div><b>Isaac Lab 強化学習</b></div></a>
        <a className="step-card optional" href="/ja/control_robotic_arm_via_phospho/"><span className="step-index">+</span><div><b>Phospho LeRobot</b></div></a>
      </div>
    </div>
  </div>
</details>


<details id="amazinghand" className="product-card amazinghand product-card--cover">
  <summary className="product-head">
    <h3>AmazingHand デクスタラスハンド</h3>
  </summary>
  <div className="product-body">
    <div className="learning-steps">
      <a className="step-card" href="/ja/hand_amazinghand/"><span className="step-index">1</span><div><b>AmazingHand 入門ガイド</b></div></a>
      <a className="step-card" href="/ja/soarm_amazinghand_teleop/"><span className="step-index">2</span><div><b>SO-ARM と AmazingHand の連携</b></div></a>
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
        <h4>クイックスタート</h4>
        <a href="/ja/reachymini_platforms_reachy_mini_get_started/">Reachy Mini（ワイヤレス）クイックスタート</a>
        <a href="/ja/reachymini_platforms_reachy_mini_lite_get_started/">Reachy Mini Lite クイックスタート</a>
      </div>
      <div className="mini-track">
        <h4>開発ケース</h4>
        <a href="/ja/reachymini_development_cases_home_assistant/">Home Assistant 連携</a>
        <a href="/ja/reachymini_development_cases_gripper_voice_control/">Reachy Mini SO-ARM 音声制御</a>
        <a href="/ja/reachymini_development_cases_sway_screen/">Reachy Mini 画面モーションコントロール</a>
      </div>
    </div>
  </div>
</details>


<details id="lekiwi" className="product-card lekiwi product-card--cover">
  <summary className="product-head">
    <h3>Lekiwi モバイルシャーシ</h3>
  </summary>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/ja/lerobot_lekiwi/"><span className="step-index">1</span><div><b>Lekiwi モバイルシャーシ クイックスタート</b></div></a>
    <a className="step-card" href="/ja/sound_follow_robot/"><span className="step-index">2</span><div><b>サウンドフォローデモ</b></div></a>
  </div>
  </div>
</details>


<details id="stackforce" className="product-card stackforce product-card--cover">
  <summary className="product-head">
    <h3>StackForce Mini 車輪脚ロボット</h3>
  </summary>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/ja/StackForce_Mini_Wheeled_Legged_Robot/"><span className="step-index">1</span><div><b>StackForce Mini クイックスタート</b></div></a>
  </div>
  </div>
</details>


<details id="starai" className="product-card starai product-card--cover">
  <summary className="product-head">
    <h3>StarAI ロボットアーム</h3>
  </summary>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/ja/lerobot_starai_arm/"><span className="step-index">1</span><div><b>StarAI ロボットアーム クイックスタート</b></div></a>
    <a className="step-card" href="/ja/starai_arm_ros_moveit/"><span className="step-index">2</span><div><b>MoveIt 2 モーションプランニング</b></div></a>
    <a className="step-card" href="/ja/control_robotic_arm_via_gr00t/"><span className="step-index">3</span><div><b>StarAI と NVIDIA GR00T</b></div></a>
  </div>
  </div>
</details>


<details id="atom" className="product-card atom product-card--cover">
  <summary className="product-head">
    <h3>Atom コンパクトヒューマノイドロボット</h3>
  </summary>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/ja/atom_s/"><span className="step-index">1</span><div><b>Atom-S 入門ガイド</b></div></a>
    <a className="step-card" href="/ja/atom_x/"><span className="step-index">2</span><div><b>Atom-X 入門ガイド</b></div></a>
  </div>
  </div>
</details>


    </RotatingProductShowcase>
  </section>

  <section id="actuators" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">アクチュエータ</span>
        <h2>関節アクチュエータ &amp; モーター</h2>
      </div>
      <p>モーターのデバッグ、通信プロトコル、関節のトラブルシューティングのためのリソースです。</p>
    </div>
    <div className="resource-columns">
      <div>
        <h4>reBot 関節モーター</h4>
        <a href="/ja/damiao_series/">Damiao DM43 シリーズ</a>
        <a href="/ja/robstride_control/">RobStride 制御</a>
      </div>
      <div>
        <h4>その他の関節モーター</h4>
        <a href="/ja/myactuator_series/">MyActuator X シリーズ</a>
        <a href="/ja/hightorque_control/">HighTorque シリーズ</a>
        <a href="/ja/stackforce_series/">Stackforce シリーズ</a>
      </div>
      <div>
        <h4>サーボ</h4>
        <a href="/ja/feetech_servo/">Feetech STS3215 サーボ</a>
        <a href="/ja/fashionstar_servo/">Fashionstar シリーズ</a>
      </div>
    </div>
  </section>

  <section id="sensors" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">センサー</span>
        <h2>センサー &amp; 認識</h2>
      </div>
      <p>ビジュアルグラスピング、SLAM、音声インタラクション、ロボット状態認識のためのリソースです。</p>
    </div>
    <div className="resource-columns">
      <div><h4>LiDAR</h4><a href="/ja/robosense_lidar/">RoboSense</a><a href="/ja/mid360/">Livox MID360</a><a href="/ja/a_loam/">A-LOAM アルゴリズム</a><a href="/ja/slamtec/">Slamtec シリーズ</a></div>
      <div><h4>カメラ</h4><a href="/ja/orbbec_gemini2/">Orbbec Gemini 2</a><a href="/ja/orbbec_gemini_335lg/">Gemini 335Lg 深度カメラ</a><a href="/ja/orbbec_gemini336">Gemini 336 深度カメラ</a><a href="/ja/sensing_gmsl_cameras">SENSING GMSL2 カメラ</a><a href="/ja/ac1">RoboSense AC1</a><a href="/ja/orbbec_depth_camera_on_ros/">Orbbec と ROS</a><a href="/ja/orb_slam3_orbbec_gemini2/">ORB-SLAM3 と Gemini2</a><a href="/ja/csi_camera_on_ros/">Jetson 上の CSI カメラ</a><a href="/ja/pycuvslam_recomputer_robotics/">PyCuVSLAM</a></div>
      <div><h4>音声</h4><a href="/ja/ReSpeaker_Core_v2.0/">ReSpeaker Core v2.0</a><a href="/ja/ReSpeaker_Mic_Array_v2.0/">ReSpeaker Mic Array v2.0</a></div>
      <div><h4>IMU</h4><a href="/ja/hexfellow_y200/">HEXFELLOW Y200</a><a href="/ja/wheeltec_imu/">WHEELTEC IMU</a></div>
    </div>
  </section>

  <section id="software" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">ソフトウェア</span>
        <h2>ソフトウェア &amp; ツール</h2>
      </div>
      <p>セットアップ完了後、ROS、Isaac、PX4、または VLA へ進みます。</p>
    </div>
    <div className="resource-columns">
      <div><h4>ROS エコシステム</h4><a href="/ja/installing_ros1/">ROS 1 インストール</a><a href="/ja/install_ros2_humble/">ROS 2 インストール</a><a href="/ja/install_isaacros/">Isaac ROS インストール</a><a href="/ja/isaac_ros_apriltag/">Isaac ROS AprilTag</a><a href="/ja/isaac_ros_visual_slam/">Isaac ROS V-SLAM</a></div>
      <div><h4>NVIDIA Isaac</h4><a href="/ja/install_isaaclab/">Isaac Lab インストール</a><a href="/ja/training_soarm101_policy_with_isaacLab/">SO Arm 強化学習</a><a href="/ja/simulate_soarm101_by_leisaac/">Isaac Sim による SO100 ロボットアーム</a></div>
      <div><h4>PX4 / VLA</h4><a href="/ja/control_px4_with_recomputer_jetson/">PX4 と Jetson</a><a href="/ja/object_tracking_with_reComputer_jetson_and_pX4/">PX4 物体追跡</a><a href="/ja/control_robotic_arm_via_gr00t/">StarAI と NVIDIA GR00T</a></div>
    </div>
  </section>

</div>
