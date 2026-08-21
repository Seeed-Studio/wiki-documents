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
updatedAt: '2026-08-14'
url: https://wiki.seeedstudio.com/ja/robotics_page/
---

import '/src/css/robotics-page-style.css';

# 🤖 ロボティクス

> *「今日の科学は明日の技術である。」 - Edward Teller*

<div className="robotics-page">

  <section className="hero-panel">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>ロボットキットから始めよう</h2>
      <p>製品ごとに、適切な Seeed Studio ロボティクスの学習パスを見つけましょう。キットを選び、セットアップから高度な開発まで順番に進めてください。</p>
    </div>
    <div className="hero-tips">
      <div><strong>新しいデバイス</strong><span>開封、配線、電源投入、ドライバのインストール、動作テスト</span></div>
      <div><strong>アプリケーション構築</strong><span>SDK、LeRobot、ROS2、ビジョン、モバイル制御を活用</span></div>
      <div><strong>AI ロボティクス</strong><span>シミュレーション、データ収集、GR00T、VLA、RL を探求</span></div>
    </div>
  </section>

  <nav className="quick-nav" aria-label="Robotics page quick navigation">
    <a href="#robot-kits">📦 ロボットキット</a>
    <a href="#actuators">⚙️ ジョイントアクチュエータ</a>
    <a href="#sensors">👁️ センサー</a>
    <a href="#software">💻 ソフトウェアエコシステム</a>
  </nav>

  <section className="kit-index-panel" aria-label="Quick robot kit selection">
    <div className="section-title-row compact-title">
      <div>
        <span className="section-kicker">キットを選ぶ</span>
        <h2>自分に合ったラーニングパスを選択</h2>
      </div>
      <p>カードはデフォルトで折りたたまれています。お持ちのキットを開いて、そのパスを確認してください。</p>
    </div>
    <div className="kit-index-grid">
      <a href="#rebot-rs"><span>🦾</span><strong>B601-RS</strong><small>RobStride ロボットアームの学習パス</small></a>
      <a href="#rebot-dm"><span>🦾</span><strong>B601-DM</strong><small>Damiao ロボットアームの学習パス</small></a>
      <a href="#soarm"><span>🤗</span><strong>SO100 / SO101</strong><small>低コスト LeRobot 学習パス</small></a>
      <a href="#starai"><span>🦾</span><strong>StarAI</strong><small>ROS2 / MoveIt / GR00T</small></a>
      <a href="#lekiwi"><span>🚗</span><strong>Lekiwi</strong><small>モバイルシャーシとアプリケーションデモ</small></a>
      <a href="#stackforce"><span>🦿</span><strong>StackForce Mini</strong><small>車輪脚ロボットの学習パス</small></a>
      <a href="#reachy"><span>🤗</span><strong>Reachy Mini</strong><small>デスクトップ対話型ロボットの学習パス</small></a>
      <a href="#atom"><span>🤖</span><strong>Atom</strong><small>コンパクトなヒューマノイドロボットの学習パス</small></a>
    </div>
  </section>

  <section id="robot-kits" className="section-block">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">ここから始める</span>
        <h2>📦 ロボットキット</h2>
      </div>
      <p>各パスはハードウェアのセットアップから始まり、その後 SDK、ROS、シミュレーション、AI アプリケーションへと進みます。</p>
    </div>

    <div className="product-stack">

<details id="rebot-rs" className="product-card rebot">
  <summary>
    <div className="product-head">
      <span className="product-icon">🦾</span>
      <div>
        <h3>reBot B601-RS ロボットアーム</h3>
        <span>遠隔操作、ビジュアルグラスピング、ROS2、AI データ収集向け</span>
      </div>
    </div>
    <span className="summary-action">学習プランを展開</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>おすすめ対象</strong><span>初めて reBot Arm を使うユーザー</span></div>
      <div><strong>学習目標</strong><span>遠隔操作、ビジュアルグラスピング、ROS2 を実行</span></div>
      <div><strong>推奨順序</strong><span>クイックスタート → LeRobot → Pinocchio → ビジュアルグラスピング → ROS2</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/ja/rebot_b601_rs_getting_started/"><span className="step-index">1</span><div><b>クイックスタート</b><small>開封、配線、電源投入、ドライバ確認、基本動作テストを行います。</small></div><em>初心者必須</em></a>
      <a className="step-card" href="/ja/rebot_arm_b601_rs_lerobot/"><span className="step-index">2</span><div><b>LeRobot 遠隔操作とデータ収集</b><small>模倣学習とエンボディド AI のために遠隔操作データを収集します。</small></div><em>データ収集</em></a>
      <a className="step-card" href="/ja/rebot_arm_b601_rs_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio による運動学の可視化</b><small>アームモデル、関節、フレーム、運動学を探索します。</small></div><em>高度な制御</em></a>
      <a className="step-card" href="/ja/rebot_arm_b601_rs_grasping_demo/"><span className="step-index">4</span><div><b>ビジュアルグラスピングデモ</b><small>ビジョンと把持姿勢生成を用いて実物体をピックします。</small></div><em>アプリケーションデモ</em></a>
      <a className="step-card" href="/ja/rebot_arm_b601_rs_ros2_integration/"><span className="step-index">5</span><div><b>ROS2 連携</b><small>アームを ROS2 に接続し、認識、プランニング、シミュレーションを行います。</small></div><em>システム統合</em></a>
      <a className="step-card" href="/ja/rebot_arm_b601_rs_web_simulator_developer_guide/"><span className="step-index">6</span><div><b>Web シミュレータ開発</b><small>ROS2/MuJoCo と連携した Web シミュレータで、実機と仮想環境の同期制御を学びます。</small></div><em>シミュレーション開発</em></a>
      <a className="step-card" href="/ja/rebot_arm_b601_rs_isaacsim/"><span className="step-index">7</span><div><b>Isaac Sim 連携</b><small>Isaac Sim 上でアームをシミュレートし、実機ロボットと同期させます。</small></div><em>シミュレーション</em></a>
      <a className="step-card" href="/ja/rebot_arm_b601_rs_mit_control/"><span className="step-index">8</span><div><b>MIT 位置制御</b><small>reBot Arm B601-RS で MIT 位置制御を始めましょう。</small></div><em>高度な制御</em></a>
    </div>
  </div>
</details>

<details id="rebot-dm" className="product-card rebot">
<summary>
  <div className="product-head">
    <span className="product-icon">🦾</span>
    <div>
      <h3>reBot B601-DM ロボットアーム</h3>
      <span>Damiao ベースの制御、LeRobot、Pinocchio、ROS2 向け</span>
    </div>
  </div>
  <span className="summary-action">学習プランを展開</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>おすすめ対象</strong><span>B601-DM ユーザーおよび AI データ収集用途</span></div>
    <div><strong>学習目標</strong><span>ドライバ、運動学、LeRobot、グラスピングをセットアップ</span></div>
    <div><strong>推奨順序</strong><span>クイックスタート → LeRobot → Pinocchio → ビジュアルグラスピング → ROS2</span></div>
  </div>
<div className="learning-steps">
  <a className="step-card" href="/ja/rebot_b601_dm_getting_started/"><span className="step-index">1</span><div><b>クイックスタート</b><small>電源、CAN、ドライバ、基本動作を確認します。</small></div><em>初心者必須</em></a>

  <a className="step-card" href="/ja/rebot_arm_b601_dm_lerobot/"><span className="step-index">2</span><div><b>LeRobot データ収集</b><small>模倣学習のために遠隔操作データを記録します。</small></div><em>AI データ</em></a>

  <a className="step-card" href="/ja/rebot_arm_b601_dm_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio と Meshcat</b><small>モデルを読み込み、動作を可視化し、運動学を学びます。</small></div><em>制御の基礎</em></a>

  <a className="step-card" href="/ja/rebot_arm_b601_dm_grasping_demo/"><span className="step-index">4</span><div><b>ビジュアルグラスピングデモ</b><small>アームとビジョンを組み合わせて実環境で把持を行います。</small></div><em>アプリケーションデモ</em></a>

  <a className="step-card" href="/ja/rebot_arm_b601_dm_ros2_integration/"><span className="step-index">5</span><div><b>ROS2 連携</b><small>ROS2 を MoveIt、認識、システムアプリとともに使用します。</small></div><em>システム統合</em></a>

  <a className="step-card" href="/ja/rebot_arm_b601_dm_web_simulator_developer_guide/"><span className="step-index">6</span><div><b>Web シミュレータ開発</b><small>ROS2/MuJoCo と連携した Web シミュレータで、実機と仮想環境の同期制御を学びます。</small></div><em>シミュレーション開発</em></a>
</div>
</div>
</details>

<details id="soarm" className="product-card soarm">
<summary>
  <div className="product-head">
    <span className="product-icon">🤗</span>
    <div>
      <h3>SO100 / SO101 ロボットアーム</h3>
      <span>LeRobot、シミュレーション、RL、GR00T/VLA 向けの低コストパス</span>
    </div>
  </div>
  <span className="summary-action">学習プランを展開</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>おすすめ対象</strong><span>低コストで LeRobot やエンボディド AI を学びたい方</span></div>
    <div><strong>学習目標</strong><span>サーボ、シミュレーション、RL、GR00T、デュアルアームを学習</span></div>
    <div><strong>推奨順序</strong><span>Getting Started → Servo Debugging → Simulation → Isaac Lab → GR00T → Dual Arms</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/ja/lerobot_so100m_new/"><span className="step-index">1</span><div><b>SO100 / SO101 クイックスタート</b><small>ハードウェアを取り付け、接続し、キャリブレーションして、基本テストを実行します。</small></div><em>初心者必須</em></a>
    <a className="step-card" href="/ja/lerobot_steering_gear_debugging_tool/"><span className="step-index">2</span><div><b>サーボデバッグツール</b><small>サーボ ID、方向、ゼロポイント、通信を確認します。</small></div><em>トラブルシューティングの基礎</em></a>
    <a className="step-card" href="/ja/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="step-index">3</span><div><b>SO101 と NVIDIA GR00T</b><small>VLA モデルをファインチューニングし、Jetson にデプロイします。</small></div><em>高度な VLA</em></a>
    <a className="step-card" href="/ja/lerobot_double_arm_so_arm_training/"><span className="step-index">4</span><div><b>デュアルアーム SO-ARM トレーニング</b><small>データを収集し、学習し、デュアルアームタスクを実行します。</small></div><em>複雑なタスク</em></a>
    <a className="step-card" href="/ja/soarm_amazinghand_teleop/"><span className="step-index">5</span><div><b>SO-ARM と Amazing Hand 巧妙ハンド</b><small>SO-ARM101 と Amazing Hand を組み合わせて LeRobot を活用します。</small></div><em>巧妙ハンドの統合</em></a>
    <a className="step-card" href="/ja/simulate_soarm101_by_leisaac/"><span className="step-index">6</span><div><b>LeIsaac シミュレーション</b><small>シミュレーションモデルとタスクで Sim2Real に備えます。</small></div><em>シミュレーションの基礎</em></a>
    <a className="step-card" href="/ja/training_soarm101_policy_with_isaacLab/"><span className="step-index">7</span><div><b>Isaac Lab 強化学習</b><small>シミュレーションでポリシーを学習し、報酬設計を確認します。</small></div><em>高度なトレーニング</em></a>
    <a className="step-card optional" href="/ja/control_robotic_arm_via_phospho/"><span className="step-index">+</span><div><b>Phospho LeRobot</b><small>サードパーティのデータ収集・学習プラットフォームを試してみましょう。</small></div><em>オプション拡張</em></a>
  </div>
</div>
</details>

<details id="starai" className="product-card starai">
<summary>
  <div className="product-head">
    <span className="product-icon">🦾</span>
    <div>
      <h3>StarAI ロボットアーム</h3>
      <span>基本制御、MoveIt 2、ROS2 プランニング、GR00T 用</span>
    </div>
  </div>
  <span className="summary-action">学習プランを展開</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>推奨用途</strong><span>ROS2 プランニングと AI 制御デモ</span></div>
    <div><strong>学習目標</strong><span>基本制御、MoveIt 2、GR00T を実行する</span></div>
    <div><strong>推奨順序</strong><span>クイックスタート → MoveIt 2 → GR00T</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/ja/lerobot_starai_arm/"><span className="step-index">1</span><div><b>StarAI ロボットアーム クイックスタート</b><small>ハードウェアを接続し、基本制御を実行してサンプルをテストします。</small></div><em>初心者必須</em></a>
    <a className="step-card" href="/ja/starai_arm_ros_moveit/"><span className="step-index">2</span><div><b>MoveIt 2 モーションプランニング</b><small>MoveIt 2 でモデルをインポートし、経路を計画します。</small></div><em>上級 ROS2</em></a>
    <a className="step-card" href="/ja/control_robotic_arm_via_gr00t/"><span className="step-index">3</span><div><b>StarAI と NVIDIA GR00T</b><small>LLM / VLA を用いてロボットアーム制御を構築します。</small></div><em>AI 制御</em></a>
  </div>
</div>
</details>

<details id="lekiwi" className="product-card lekiwi">
<summary>
  <div className="product-head">
    <span className="product-icon">🚗</span>
    <div>
      <h3>Lekiwi モバイルシャーシ</h3>
      <span>シャーシ制御とサウンドフォローデモ用</span>
    </div>
  </div>
  <span className="summary-action">学習プランを展開</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>推奨用途</strong><span>モバイルシャーシを初めて使うユーザー</span></div>
    <div><strong>学習目標</strong><span>シャーシ制御とサウンドフォローデモを実行する</span></div>
    <div><strong>注意</strong><span>ROS2 の手順は削除され、現在の製品パスのみが残っています</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/ja/lerobot_lekiwi/"><span className="step-index">1</span><div><b>Lekiwi モバイルシャーシ クイックスタート</b><small>組み立て、接続、動作テスト、安全確認を行います。</small></div><em>初心者必須</em></a>
    <a className="step-card" href="/ja/sound_follow_robot/"><span className="step-index">2</span><div><b>サウンドフォローデモ</b><small>音声入力を使ってインタラクティブなモバイルデモを動かします。</small></div><em>アプリケーションデモ</em></a>
  </div>
</div>
</details>

<details id="stackforce" className="product-card stackforce">
<summary>
  <div className="product-head">
    <span className="product-icon">🦿</span>
    <div>
      <h3>StackForce Mini 車輪脚ロボット</h3>
      <span>車輪脚制御、バランス、モーションプランニング用</span>
    </div>
  </div>
  <span className="summary-action">学習プランを展開</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>推奨用途</strong><span>モバイルおよび車輪脚ロボットの学習者</span></div>
    <div><strong>学習目標</strong><span>構造、制御ロジック、基本動作を学ぶ</span></div>
    <div><strong>推奨順序</strong><span>クイックスタート → 制御原理 → モーションデバッグ</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/ja/StackForce_Mini_Wheeled_Legged_Robot/"><span className="step-index">1</span><div><b>StackForce Mini クイックスタート</b><small>ハードウェアを学び、基本をデプロイし、動作をテストします。</small></div><em>システムコース</em></a>
  </div>
</div>
</details>

<details id="reachy" className="product-card reachy">
<summary>
  <div className="product-head">
    <span className="product-icon">🤗</span>
    <div>
      <h3>Reachy Mini</h3>
      <span>デスクトップ HRI、エージェント、SDK、シミュレーション、AI 用</span>
    </div>
  </div>
  <span className="summary-action">学習プランを展開</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>推奨用途</strong><span>デスクトップロボットとのインタラクションとエージェントデモ</span></div>
    <div><strong>学習目標</strong><span>基礎から始め、その後 SDK、AI、トラブルシューティングへ進む</span></div>
    <div><strong>ドキュメント</strong><span>基礎からプラットフォーム、SDK、AI、トラブルシューティングまで体系的に整理</span></div>
  </div>

<div className="reachy-path-grid">
            <div className="mini-track">
              <h4>① まず製品を理解する</h4>
              <a href="/ja/reachymini_intro/">Reachy Mini 製品紹介</a>
              <a href="/ja/reachymini_getting_started/">ReachyMini 入門ガイド</a>
            </div>
            <div className="mini-track">
              <h4>② プラットフォームを選ぶ</h4>
              <a href="/ja/reachymini_platforms_simulation_get_started/">シミュレーション クイックスタート</a>
              <a href="/ja/reachymini_platforms_reachy_mini_get_started/">Reachy Mini 無線セットアップガイド</a>
              <a href="/ja/reachymini_platforms_reachy_mini_usage/">Reachy Mini の使用方法</a>
              <a href="/ja/reachymini_platforms_reachy_mini_hardware/">Reachy Mini ハードウェアデータシート</a>
              <a href="/ja/reachymini_platforms_reachy_mini_lite_get_started/">Reachy Mini Lite セットアップガイド</a>
              <a href="/ja/reachymini_platforms_reachy_mini_lite_usage/">Reachy Mini Lite の使用方法</a>
              <a href="/ja/reachymini_platforms_reachy_mini_lite_hardware/">Reachy Mini Lite ハードウェアデータシート</a>
            </div>
            <div className="mini-track">
              <h4>③ SDK と開発の基礎</h4>
              <a href="/ja/reachymini_sdk_readme/">Reachy Mini SDK</a>
              <a href="/ja/reachymini_sdk_installation/">インストールガイド</a>
              <a href="/ja/reachymini_sdk_quickstart/">クイックスタートガイド</a>
              <a href="/ja/reachymini_sdk_python-sdk/">Python SDK リファレンス</a>
              <a href="/ja/reachymini_sdk_core-concept/">コアコンセプトとアーキテクチャ</a>
              <a href="/ja/reachymini_sdk_media-architecture/">メディアアーキテクチャ</a>
              <a href="/ja/reachymini_sdk_gstreamer-installation/">GStreamer インストール</a>
              <a href="/ja/reachymini_sdk_javascript-sdk/">JavaScript SDK と Web アプリケーション</a>
            </div>
            <div className="mini-track">
              <h4>④ アプリケーションと AI 連携</h4>
              <a href="/ja/reachymini_sdk_integration/">統合とアプリケーション</a>
              <a href="/ja/reachymini_sdk_apps/">アプリケーションの構築と公開</a>
              <a href="/ja/reachymini_conversation/">Doubao LLM API を統合する</a>
              <a href="/ja/reachymini_vibe-code-with-your-agent/">エージェントと一緒に Vibe コーディング</a>
              <a href="/ja/reachymini_agents/">AI エージェント開発ガイド</a>
            </div>
            <div className="mini-track">
              <h4>⑤ メディア、システム、高度な操作</h4>
              <a href="/ja/reachymini_platforms_reachy_mini_media_advanced_controls/">無線高度メディアコントロール</a>
              <a href="/ja/reachymini_platforms_reachy_mini_lite_media_advanced_controls/">Lite 高度メディアコントロール</a>
              <a href="/ja/reachymini_platforms_reachy_mini_lite_wizard/">Dynamixel Wizard でモーターパラメータを読み取る</a>
              <a href="/ja/reachymini_platforms_reachy_mini_development_workflow/">無線開発ワークフロー</a>
              <a href="/ja/reachymini_platforms_reachy_mini_install_daemon_from_branch/">特定ブランチから Daemon をインストール</a>
              <a href="/ja/reachymini_platforms_reachy_mini_reflash_the_rpi_iso/">Raspberry Pi OS イメージを書き換える</a>
              <a href="/ja/reachymini_platforms_reachy_mini_reset/">Bluetooth でリセット</a>
            </div>
            <div className="mini-track">
              <h4>⑥ チュートリアル例</h4>
              <a href="/ja/reachymini_examples_minimal_demo/">最小限デモ</a>
              <a href="/ja/reachymini_examples_goto_interpolation_playground/">Goto 補間プレイグラウンド</a>
              <a href="/ja/reachymini_examples_look_at/">画像を見る</a>
              <a href="/ja/reachymini_examples_mini_head_position_gui/">ヘッド位置 GUI</a>
              <a href="/ja/reachymini_examples_joy_controller/">ジョイスティックコントローラ</a>
              <a href="/ja/reachymini_examples_imu/">IMU 例</a>
              <a href="/ja/reachymini_examples_custom_media_manager/">カスタムメディアマネージャ</a>
              <a href="/ja/reachymini_examples_reachy_compliant_demo/">コンプライアントモードデモ</a>
              <a href="/ja/reachymini_examples_recorded_moves/">記録された動作</a>
              <a href="/ja/reachymini_examples_rerun_viewer/">Rerun ビューア</a>
              <a href="/ja/reachymini_examples_sequence/">シーケンスデモ</a>
              <a href="/ja/reachymini_examples_sound_doa/">音源到来方向</a>
              <a href="/ja/reachymini_examples_sound_play/">サウンド再生</a>
              <a href="/ja/reachymini_examples_sound_record/">サウンド録音</a>
              <a href="/ja/reachymini_examples_take_picture/">写真を撮る</a>
            </div>
            <div className="mini-track">
              <h4>⑦ トラブルシューティングとメンテナンス</h4>
              <a href="/ja/reachymini_troubleshooting/">トラブルシューティングと FAQ</a>
              <a href="/ja/reachymini_troubleshooting_motors_diagnosis/">モーター診断とトラブルシューティング</a>
              <a href="/ja/reachymini_troubleshooting_change_mic_fpc_cable/">マイク FPC ケーブルの交換</a>
              <a href="/ja/reachymini_troubleshooting_spherical_joints_maintenance/">球体ジョイントのメンテナンス</a>
              <a href="/ja/reachymini_troubleshooting_roadmap/">Reachy Mini ロードマップ</a>
            </div>
            <div className="mini-track">
              <h4>⑧ API リファレンス</h4>
              <a href="/ja/reachymini_api_reachymini/">ReachyMini API リファレンス</a>
              <a href="/ja/reachymini_api_rest-api/">REST API リファレンス</a>
              <a href="/ja/reachymini_api_daemon/">Daemon API</a>
              <a href="/ja/reachymini_api_motion/">Motion API</a>
              <a href="/ja/reachymini_api_media/">Media API</a>
              <a href="/ja/reachymini_api_apps/">Applications API リファレンス</a>
              <a href="/ja/reachymini_api_tools/">Tools API リファレンス</a>
              <a href="/ja/reachymini_api_utils/">Utilities API リファレンス</a>
            </div>
          </div>
        </div>
      </details>

<details id="atom" className="product-card atom">
<summary>
  <div className="product-head">
    <span className="product-icon">🤖</span>
    <div>
      <h3>Atom コンパクトヒューマノイドロボット</h3>
      <span>ヒューマノイドロボットの初心者向け、サーボのデバッグ、モーションティーチング、および Web リモートコントロール用</span>
    </div>
  </div>
  <span className="summary-action">学習プランを展開</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>推奨対象</strong><span>モーションティーチングとリモートコントロールをすぐに体験したい、初めてのデスクトップ二足歩行ヒューマノイドユーザー</span></div>
    <div><strong>学習目標</strong><span>開封してすぐに使い始め、Web モーションエディタでモーションをティーチングし、カスタムモーションをコントローラーファームウェアにエクスポートする</span></div>
    <div><strong>推奨順序</strong><span>Atom-S 入門 → Web リモート → モーションエディタ → カスタムモーション開発</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/ja/atom_s/"><span className="step-index">1</span><div><b>Atom-S 入門ガイド</b><small>電源を入れ、Web リモートコントローラーに接続し、最初の連続ティーチングモーションシーケンスを記録します。</small></div><em>初心者に必須</em></a>
    <a className="step-card" href="/ja/atom_x/"><span className="step-index">2</span><div><b>Atom-X 入門ガイド</b><small>Atom-X は Atom-S とまったく同じように動作します — 同じワークフローに従ってすばやく始められます。</small></div><em>同シリーズ</em></a>
  </div>
</div>
</details>

    </div>
  </section>

  <section id="actuators" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">リファレンス</span>
        <h2>⚙️ 関節アクチュエータ</h2>
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
        <h2>👁️ センサー</h2>
      </div>
      <p>ビジュアルグラスピング、SLAM、音声インタラクション、およびロボット状態の認識用。</p>
    </div>
    <div className="resource-columns">
      <div><h4>📡 LiDAR</h4><a href="/ja/robosense_lidar/">RoboSense</a><a href="/ja/mid360/">Livox MID360</a><a href="/ja/a_loam/">A-LOAM アルゴリズム</a><a href="/ja/slamtec/">Slamtec シリーズ</a></div>
      <div><h4>📷 カメラ</h4><a href="/ja/orbbec_gemini2/">Orbbec Gemini 2</a><a href="/ja/orbbec_gemini_335lg/">Gemini 335Lg 深度カメラ</a><a href="/ja/orbbec_gemini336">Gemini 336 深度カメラ</a><a href="/ja/sensing_gmsl_cameras">SENSING GMSL2 カメラ</a><a href="/ja/ac1">RoboSense AC1</a><a href="/ja/orbbec_depth_camera_on_ros/">Orbbec と ROS</a><a href="/ja/orb_slam3_orbbec_gemini2/">ORB-SLAM3 と Gemini2</a><a href="/ja/csi_camera_on_ros/">Jetson 上の CSI カメラ</a><a href="/ja/pycuvslam_recomputer_robotics/">PyCuVSLAM</a></div>
      <div><h4>🎤 音声</h4><a href="/ja/ReSpeaker_Core_v2.0/">ReSpeaker Core v2.0</a><a href="/ja/ReSpeaker_Mic_Array_v2.0/">ReSpeaker Mic Array v2.0</a><h4>🧭 IMU</h4><a href="/ja/hexfellow_y200/">HEXFELLOW Y200</a><a href="/ja/wheeltec_imu/">WHEELTEC IMU</a></div>
    </div>
  </section>

  <section id="software" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">リファレンス</span>
        <h2>💻 ソフトウェアエコシステム</h2>
      </div>
      <p>セットアップ後、ROS、Isaac、PX4、または VLA に進みます。</p>
    </div>
    <div className="resource-columns">
      <div><h4>ROS エコシステム</h4><a href="/ja/installing_ros1/">ROS 1 インストール</a><a href="/ja/install_ros2_humble/">ROS 2 インストール</a><a href="/ja/install_isaacros/">Isaac ROS インストール</a><a href="/ja/isaac_ros_apriltag/">Isaac ROS AprilTag</a><a href="/ja/isaac_ros_visual_slam/">Isaac ROS V-SLAM</a></div>
      <div><h4>NVIDIA Isaac</h4><a href="/ja/install_isaaclab/">Isaac Lab インストール</a><a href="/ja/training_soarm101_policy_with_isaacLab/">SO Arm 強化学習</a><a href="/ja/simulate_soarm101_by_leisaac/">IsaacSim を用いた SO100 ロボットアーム</a></div>
      <div><h4>PX4 / VLA</h4><a href="/ja/control_px4_with_recomputer_jetson/">PX4 と Jetson</a><a href="/ja/object_tracking_with_reComputer_jetson_and_pX4/">PX4 物体追跡</a><a href="/ja/control_robotic_arm_via_gr00t/">StarAI と NVIDIA GR00T</a></div>
    </div>
  </section>

</div>
