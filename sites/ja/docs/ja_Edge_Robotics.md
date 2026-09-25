---
description: Seeed Studio ロボティクスのドキュメントとラーニングパス。
title: ロボティクス
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
updatedAt: '2026-09-11'
url: https://wiki.seeedstudio.com/ja/robotics_page/
---

import '/src/css/robotics-page-style.css';
import RoboticsPageSearch from '@site/src/components/robotics/RoboticsPageSearch';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# ロボティクス

> *「今日の科学は明日の技術である。」 - Edward Teller*

<div className="robotics-page">

  <section className="hero-panel">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>ロボットキットから始めよう</h2>
      <p>製品ごとに、最適な Seeed Studio ロボティクスの学習パスを見つけましょう。キットを選び、セットアップから高度な開発まで順に進めてください。</p>
    </div>
    <div className="hero-tips">
      <div><strong>新しいデバイス</strong><span>開封、配線、電源投入、ドライバのインストール、動作テスト</span></div>
      <div><strong>アプリケーション構築</strong><span>SDK、LeRobot、ROS2、ビジョン、モバイル制御を活用</span></div>
      <div><strong>AI ロボティクス</strong><span>シミュレーション、データ収集、GR00T、VLA、RL を探求</span></div>
    </div>
  </section>

  <RoboticsPageSearch />

  <div className="robotics-quicklinks">
    <a href="https://279070161-sketch.github.io/reBot/" target="_blank" rel="noopener noreferrer">🚀 製品ページ</a>
    <GitHubStarButton owner="Seeed-Projects" repo="reBot-DevArm" />
    <a href="https://www.seeedstudio.com/Robotics-c-2427.html" target="_blank" rel="noopener noreferrer">🛒 購入</a>
  </div>

  <section className="kit-index-panel" aria-label="Quick robot kit selection">
    <div className="section-title-row compact-title">
      <div>
        <span className="section-kicker">キットを選ぶ</span>
        <h2>自分に合った学習パスを選択</h2>
      </div>
      <p>カードはデフォルトで折りたたまれています。自分のキットを開いて、そのパスを確認してください。</p>
    </div>
    <div className="kit-index-grid">
      <a href="#rebot-rs"><strong>B601-RS</strong><small>RobStride ロボットアーム学習パス</small></a>
      <a href="#rebot-dm"><strong>B601-DM</strong><small>Damiao ロボットアーム学習パス</small></a>
      <a href="#soarm"><strong>SO100 / SO101</strong><small>低コスト LeRobot 学習パス</small></a>
      <a href="#starai"><strong>StarAI</strong><small>ROS2 / MoveIt / GR00T</small></a>
      <a href="#lekiwi"><strong>Lekiwi</strong><small>モバイルシャーシとアプリケーションデモ</small></a>
      <a href="#stackforce"><strong>StackForce Mini</strong><small>車輪脚ロボット学習パス</small></a>
      <a href="#reachy"><strong>Reachy Mini</strong><small>デスクトップ対話型ロボット学習パス</small></a>
      <a href="#atom"><strong>Atom</strong><small>コンパクトヒューマノイドロボット学習パス</small></a>
    </div>
  </section>

  <section id="robot-kits" className="section-block">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">ここから始める</span>
        <h2>ロボットキット</h2>
      </div>
      <p>各パスはハードウェアセットアップから始まり、その後 SDK、ROS、シミュレーション、AI アプリケーションへと進みます。</p>
    </div>

    <div className="product-stack">

<details id="rebot-rs" className="product-card rebot">
  <summary>
    <div className="product-head">
      <div>
        <h3>reBot B601-RS ロボットアーム</h3>
        <span>遠隔操作、ビジュアルグラスピング、ROS2、AI データ収集向け</span>
      </div>
    </div>
    <span className="summary-action">学習プランを展開</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>推奨ユーザー</strong><span>初めての reBot アームユーザー</span></div>
      <div><strong>学習目標</strong><span>遠隔操作、ビジュアルグラスピング、ROS2 を実行</span></div>
<div><strong>推奨順序</strong><span>Quick Start → LeRobot → Pinocchio → Visual Grasping → ROS2 → Web Simulator → Isaac Sim → MIT Position Control → Embodied Agent</span></div>
    </div>
    <div className="learning-group">
      <h4>クイックスタート &amp; SDK</h4>
      <div className="learning-steps">
        <a className="step-card" href="/ja/rebot_b601_rs_getting_started/"><span className="step-index">1</span><div><b>B601-RS クイックスタート</b></div></a>
        <a className="step-card" href="/ja/rebot_arm_b601_rs_lerobot/"><span className="step-index">2</span><div><b>B601-RS と LeRobot</b></div></a>
        <a className="step-card" href="/ja/rebot_arm_b601_rs_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio を用いた B601-RS</b></div></a>
        <a className="step-card" href="/ja/rebot_arm_b601_rs_mit_control/"><span className="step-index">4</span><div><b>B601-RS モーター SDK</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>アプリケーション</h4>
      <div className="learning-steps">
        <a className="step-card" href="/ja/rebot_arm_b601_rs_grasping_demo/"><span className="step-index">1</span><div><b>B601-RS のビジュアル把持</b></div></a>
        <a className="step-card" href="/ja/rebot_arm_b601_rs_ros2_integration/"><span className="step-index">2</span><div><b>B601-RS と ROS2</b></div></a>
        <a className="step-card" href="/ja/rebot_arm_b601_rs_isaacsim/"><span className="step-index">3</span><div><b>B601-RS と Isaacsim</b></div></a>
        <a className="step-card" href="/ja/rebot_arm_b601_rs_web_simulator_developer_guide/"><span className="step-index">4</span><div><b>Web コントローラ付き B601-RS</b></div></a>
        <a className="step-card" href="/ja/wrc_demo_tutorial/"><span className="step-index">5</span><div><b>B601-RS と Agent Claw</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>オープンソースリソース</h4>
      <div className="rebot-resource-list">
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_RS" target="_blank" rel="noopener noreferrer">B601-RS ハードウェアコレクション</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/Rebot_Arm_description/RS" target="_blank" rel="noopener noreferrer">B601-RS description パッケージ（URDF / Mesh）</a>
        <a href="https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_RS" target="_blank" rel="noopener noreferrer">B601-RS デジタルツイン / Web シミュレータ</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">reBot-DevArm メインリポジトリ</a>
        <a href="https://github.com/Seeed-Projects/reBotArm_control_py" target="_blank" rel="noopener noreferrer">Python SDK</a>
        <a href="https://github.com/Seeed-Projects/reBotArmController_ROS2" target="_blank" rel="noopener noreferrer">ROS2 コントローラ</a>
        <a href="https://github.com/Seeed-Projects/lerobot-robot-seeed-b601" target="_blank" rel="noopener noreferrer">LeRobot ロボットアダプタ</a>
        <a href="https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102" target="_blank" rel="noopener noreferrer">LeRobot テレオペレータアダプタ</a>
        <a href="https://github.com/Seeed-Projects/reBot-Isaacsim" target="_blank" rel="noopener noreferrer">Isaac Sim</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm-Grasp" target="_blank" rel="noopener noreferrer">ビジュアルグラスピングデモ</a>
        <a href="https://github.com/xiehuangbao888/Camera-Mount" target="_blank" rel="noopener noreferrer">カメラマウントコレクション</a>
      </div>
    </div>
  </div>
</details>

<details id="rebot-dm" className="product-card rebot">
<summary>
  <div className="product-head">
    <div>
      <h3>reBot B601-DM ロボットアーム</h3>
      <span>Damiao ベースの制御、LeRobot、Pinocchio、ROS2 向け</span>
    </div>
  </div>
  <span className="summary-action">学習プランを展開</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>推奨ユーザー</strong><span>B601-DM ユーザーおよび AI データ収集用途</span></div>
    <div><strong>学習目標</strong><span>ドライバ、運動学、LeRobot、グラスピングをセットアップ</span></div>
    <div><strong>推奨順序</strong><span>Quick Start → LeRobot → Pinocchio → Visual Grasping → ROS2</span></div>
  </div>
    <div className="learning-group">
      <h4>クイックスタート &amp; SDK</h4>
      <div className="learning-steps">
        <a className="step-card" href="/ja/rebot_b601_dm_getting_started/"><span className="step-index">1</span><div><b>B601-DM クイックスタート</b></div></a>
        <a className="step-card" href="/ja/rebot_arm_b601_dm_lerobot/"><span className="step-index">2</span><div><b>B601-DM と LeRobot</b></div></a>
        <a className="step-card" href="/ja/rebot_arm_b601_dm_pinocchio_meshcat/"><span className="step-index">3</span><div><b>B601-DM と Pinocchio</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>アプリケーション</h4>
      <div className="learning-steps">
        <a className="step-card" href="/ja/rebot_arm_b601_dm_grasping_demo/"><span className="step-index">1</span><div><b>B601-DM ビジュアル把持</b></div></a>
        <a className="step-card" href="/ja/rebot_arm_b601_dm_ros2_integration/"><span className="step-index">2</span><div><b>B601-DM と ROS2</b></div></a>
        <a className="step-card" href="/ja/rebot_arm_b601_dm_isaacsim/"><span className="step-index">3</span><div><b>B601-DM と Isaac Sim</b></div></a>
        <a className="step-card" href="/ja/rebot_arm_b601_dm_web_simulator_developer_guide/"><span className="step-index">4</span><div><b>B601-DM Web コントローラー</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>オープンソースリソース</h4>
      <div className="rebot-resource-list">
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_DM" target="_blank" rel="noopener noreferrer">B601-DM ハードウェアコレクション</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/Rebot_Arm_description/DM" target="_blank" rel="noopener noreferrer">B601-DM description パッケージ（URDF / Mesh）</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_DM/performance_testing" target="_blank" rel="noopener noreferrer">B601-DM 実機性能テスト</a>
        <a href="https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_DM" target="_blank" rel="noopener noreferrer">B601-DM デジタルツイン / Web シミュレータ</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">reBot-DevArm メインリポジトリ</a>
        <a href="https://github.com/Seeed-Projects/reBotArm_control_py" target="_blank" rel="noopener noreferrer">Python SDK</a>
        <a href="https://github.com/Seeed-Projects/reBotArmController_ROS2" target="_blank" rel="noopener noreferrer">ROS2 コントローラ</a>
        <a href="https://github.com/Seeed-Projects/lerobot-robot-seeed-b601" target="_blank" rel="noopener noreferrer">LeRobot ロボットアダプタ</a>
        <a href="https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102" target="_blank" rel="noopener noreferrer">LeRobot テレオペレータアダプタ</a>
        <a href="https://github.com/Seeed-Projects/reBot-Isaacsim" target="_blank" rel="noopener noreferrer">Isaac Sim</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm-Grasp" target="_blank" rel="noopener noreferrer">ビジュアルグラスピングデモ</a>
        <a href="https://github.com/xiehuangbao888/Camera-Mount" target="_blank" rel="noopener noreferrer">カメラマウントコレクション</a>
      </div>
    </div>
</div>
</details>

<details id="soarm" className="product-card soarm">
<summary>
  <div className="product-head">
    <div>
      <h3>SO100 / SO101 ロボットアーム</h3>
      <span>LeRobot、シミュレーション、RL、GR00T/VLA 向けの低コストパス</span>
    </div>
  </div>
  <span className="summary-action">学習プランを展開</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>推奨ユーザー</strong><span>低コストで LeRobot とエンボディド AI を学びたい方</span></div>
    <div><strong>学習目標</strong><span>サーボ、シミュレーション、RL、GR00T、デュアルアームを学習</span></div>
    <div><strong>推奨順序</strong><span>Getting Started → Servo Debugging → Simulation → Isaac Lab → GR00T → Dual Arms</span></div>
  </div>
  <div className="learning-group">
    <h4>クイックスタートとツール</h4>
    <div className="learning-steps">
    <a className="step-card" href="/ja/lerobot_so100m_new/"><span className="step-index">1</span><div><b>SO100 / SO101 Quick Start</b></div></a>
    <a className="step-card" href="/ja/lerobot_steering_gear_debugging_tool/"><span className="step-index">2</span><div><b>Servo Debugging Tool</b></div></a>
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

<details id="starai" className="product-card starai product-card--cover">
<summary>
  <div className="product-head">
    <div>
      <h3>StarAI ロボットアーム</h3>
      <span>基本制御、MoveIt 2、ROS2 プランニング、および GR00T 用</span>
    </div>
  </div>
  <span className="summary-action">学習プランを展開</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>推奨対象</strong><span>ROS2 プランニングと AI 制御デモ</span></div>
    <div><strong>学習目標</strong><span>基本制御、MoveIt 2、GR00T を実行する</span></div>
    <div><strong>推奨順序</strong><span>クイックスタート → MoveIt 2 → GR00T</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/ja/lerobot_starai_arm/"><span className="step-index">1</span><div><b>StarAI ロボットアーム クイックスタート</b></div></a>
    <a className="step-card" href="/ja/starai_arm_ros_moveit/"><span className="step-index">2</span><div><b>MoveIt 2 モーションプランニング</b></div></a>
    <a className="step-card" href="/ja/control_robotic_arm_via_gr00t/"><span className="step-index">3</span><div><b>StarAI と NVIDIA GR00T</b></div></a>
  </div>
</div>
</details>

<details id="lekiwi" className="product-card lekiwi">
<summary>
  <div className="product-head">
    <div>
      <h3>Lekiwi モバイルシャーシ</h3>
      <span>シャーシ制御とサウンドフォローデモ用</span>
    </div>
  </div>
  <span className="summary-action">学習プランを展開</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>推奨対象</strong><span>モバイルシャーシを初めて使うユーザー</span></div>
    <div><strong>学習目標</strong><span>シャーシ制御とサウンドフォローデモを実行する</span></div>
    <div><strong>注意</strong><span>ROS2 のステップは削除され、現在の製品パスのみが残っています</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/ja/lerobot_lekiwi/"><span className="step-index">1</span><div><b>Lekiwi モバイルシャーシ クイックスタート</b></div></a>
    <a className="step-card" href="/ja/sound_follow_robot/"><span className="step-index">2</span><div><b>サウンドフォローデモ</b></div></a>
  </div>
</div>
</details>

<details id="stackforce" className="product-card stackforce">
<summary>
  <div className="product-head">
    <div>
      <h3>StackForce Mini 車輪脚ロボット</h3>
      <span>車輪脚制御、バランス、モーションプランニング用</span>
    </div>
  </div>
  <span className="summary-action">学習プランを展開</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>推奨対象</strong><span>モバイルおよび車輪脚ロボットの学習者</span></div>
    <div><strong>学習目標</strong><span>構造、制御ロジック、基本動作を学ぶ</span></div>
    <div><strong>推奨順序</strong><span>クイックスタート → 制御原理 → モーションデバッグ</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/ja/StackForce_Mini_Wheeled_Legged_Robot/"><span className="step-index">1</span><div><b>StackForce Mini クイックスタート</b></div></a>
  </div>
</div>
</details>

<details id="reachy" className="product-card reachy">
<summary>
  <div className="product-head">
    <div>
      <h3>Reachy Mini</h3>
      <span>デスクトップ HRI、エージェント、SDK、シミュレーション、AI 用</span>
    </div>
  </div>
  <span className="summary-action">学習プランを展開</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>推奨対象</strong><span>デスクトップロボットインタラクションとエージェントデモ</span></div>
    <div><strong>学習目標</strong><span>基礎から始め、その後 SDK、AI、トラブルシューティングへ進む</span></div>
    <div><strong>ドキュメント</strong><span>基礎からプラットフォーム、SDK、AI、トラブルシューティングまで体系的に整理</span></div>
  </div>

<div className="reachy-path-grid">
      <div className="mini-track">
        <h4>クイックスタート</h4>
        <a href="/ja/reachymini_platforms_reachy_mini_get_started/">Reachy Mini 無線版クイックスタート</a>
        <a href="/ja/reachymini_platforms_reachy_mini_lite_get_started/">Reachy Mini Lite クイックスタート</a>
      </div>
      <div className="mini-track">
        <h4>開発事例</h4>
        <a href="/ja/reachymini_development_cases_home_assistant/">Home Assistant 連携</a>
        <a href="/ja/reachymini_development_cases_gripper_voice_control/">SO-ARM用Reachy Mini音声制御</a>
        <a href="/ja/reachymini_development_cases_sway_screen/">Reachy Mini 画面モーション制御</a>
      </div>
    </div>
        </div>
      </details>

<details id="atom" className="product-card atom product-card--cover">
<summary>
  <div className="product-head">
    <div>
      <h3>Atom コンパクトヒューマノイドロボット</h3>
      <span>ヒューマノイドロボットの初心者向け、サーボのデバッグ、モーションティーチング、Web リモートコントロール用</span>
    </div>
  </div>
  <span className="summary-action">学習プランを展開</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>推奨対象</strong><span>モーションティーチングとリモートコントロールをすぐに体験したい、初めてのデスクトップ二足歩行ヒューマノイドユーザー</span></div>
    <div><strong>学習目標</strong><span>開封してすぐに始められ、Web モーションエディタでモーションをティーチングし、カスタムモーションをコントローラーファームウェアにエクスポートする</span></div>
    <div><strong>推奨順序</strong><span>Atom-S 入門 → Web リモート → モーションエディタ → カスタムモーション開発</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/ja/atom_s/"><span className="step-index">1</span><div><b>Atom-S 入門ガイド</b></div></a>
    <a className="step-card" href="/ja/atom_x/"><span className="step-index">2</span><div><b>Atom-X 入門ガイド</b></div></a>
  </div>
</div>
</details>

    </div>
  </section>

  <section id="actuators" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">リファレンス</span>
        <h2>関節アクチュエータ</h2>
      </div>
      <p>モータのデバッグ、通信プロトコル、および関節のトラブルシューティング用。</p>
    </div>
    <div className="resource-grid">
      <a href="/ja/myactuator_series/">MyActuator X シリーズ</a>
      <a href="/ja/damiao_series/">Damiao DM43 シリーズ</a>
      <a href="/ja/feetech_servo/">Feetech STS3215 サーボ</a>
      <a href="/ja/hightorque_control/">HighTorque シリーズ</a>
      <a href="/ja/fashionstar_servo/">Fashionstar シリーズ</a>
      <a href="/ja/stackforce_series/">Stackforce シリーズ</a>
      <a href="/ja/robstride_control/">RobStride コントロール</a>
    </div>
  </section>

  <section id="sensors" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">リファレンス</span>
        <h2>センサー</h2>
      </div>
      <p>ビジュアルグラスピング、SLAM、音声インタラクション、ロボット状態認識用。</p>
    </div>
    <div className="resource-columns">
      <div><h4>LiDAR</h4><a href="/ja/robosense_lidar/">RoboSense</a><a href="/ja/mid360/">Livox MID360</a><a href="/ja/a_loam/">A-LOAM アルゴリズム</a><a href="/ja/slamtec/">Slamtec シリーズ</a></div>
      <div><h4>カメラ</h4><a href="/ja/orbbec_gemini2/">Orbbec Gemini 2</a><a href="/ja/orbbec_gemini_335lg/">Gemini 335Lg 深度カメラ</a><a href="/ja/orbbec_gemini336">Gemini 336 深度カメラ</a><a href="/ja/sensing_gmsl_cameras">SENSING GMSL2 カメラ</a><a href="/ja/ac1">RoboSense AC1</a><a href="/ja/orbbec_depth_camera_on_ros/">Orbbec と ROS</a><a href="/ja/orb_slam3_orbbec_gemini2/">ORB-SLAM3 と Gemini2</a><a href="/ja/csi_camera_on_ros/">Jetson 上の CSI カメラ</a><a href="/ja/pycuvslam_recomputer_robotics/">PyCuVSLAM</a></div>
      <div><h4>音声</h4><a href="/ja/ReSpeaker_Core_v2.0/">ReSpeaker Core v2.0</a><a href="/ja/ReSpeaker_Mic_Array_v2.0/">ReSpeaker Mic Array v2.0</a><h4>IMU</h4><a href="/ja/hexfellow_y200/">HEXFELLOW Y200</a><a href="/ja/wheeltec_imu/">WHEELTEC IMU</a></div>
    </div>
  </section>

  <section id="software" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">リファレンス</span>
        <h2>ソフトウェアエコシステム</h2>
      </div>
      <p>セットアップ後、ROS、Isaac、PX4、または VLA に進みます。</p>
    </div>
    <div className="resource-columns">
      <div><h4>ROS エコシステム</h4><a href="/ja/installing_ros1/">ROS 1 インストール</a><a href="/ja/install_ros2_humble/">ROS 2 インストール</a><a href="/ja/install_isaacros/">Isaac ROS インストール</a><a href="/ja/isaac_ros_apriltag/">Isaac ROS AprilTag</a><a href="/ja/isaac_ros_visual_slam/">Isaac ROS V-SLAM</a></div>
      <div><h4>NVIDIA Isaac</h4><a href="/ja/install_isaaclab/">Isaac Lab インストール</a><a href="/ja/training_soarm101_policy_with_isaacLab/">SO Arm 強化学習</a><a href="/ja/simulate_soarm101_by_leisaac/">IsaacSim を用いた SO100 ロボットアーム</a></div>
      <div><h4>PX4 / VLA</h4><a href="/ja/control_px4_with_recomputer_jetson/">PX4 と Jetson</a><a href="/ja/object_tracking_with_reComputer_jetson_and_pX4/">PX4 オブジェクトトラッキング</a><a href="/ja/control_robotic_arm_via_gr00t/">StarAI と NVIDIA GR00T</a></div>
    </div>
  </section>

</div>
