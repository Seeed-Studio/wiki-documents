---
description: このトピックでは、Seeed Studio のロボティクス製品ドキュメントと学習パスを紹介します。
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
updatedAt: '2026-07-04'
url: https://wiki.seeedstudio.com/ja/robotics_page/
---

# 🤖 ロボティクス

> *「今日の科学は明日の技術である。」 - Edward Teller*

<div className="robotics-page">

  <section className="hero-panel">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>最初にどのガイドを読むべきか迷っていますか？今手元にあるロボットキットから始めましょう。</h2>
      <p>このページでは、Seeed Studio のロボティクス関連ドキュメントを製品ベースの学習パスとして再構成しています。初めてロボットを開封する段階でも、遠隔操作、ROS2、シミュレーション、AI トレーニング、実環境へのデプロイを準備している段階でも、まずは自分のロボットキットを選び、ハードウェアの立ち上げから高度な開発まで、推奨ステップに従って進めてください。</p>
    </div>
    <div className="hero-tips">
      <div><strong>新規ユーザー</strong><span>開封、配線、電源、ドライバ、基本的な動作確認から始めましょう</span></div>
      <div><strong>アプリケーション開発者</strong><span>SDK、LeRobot、ROS2、ビジュアルグラスピング、モバイル制御へと進みましょう</span></div>
      <div><strong>AI ロボティクスユーザー</strong><span>シミュレーション、データ収集、GR00T、VLA、強化学習へと進みましょう</span></div>
    </div>
  </section>

  <nav className="quick-nav" aria-label="Robotics page quick navigation">
    <a href="#robot-kits">📦 ロボットキット</a>
    <a href="#actuators">⚙️ ジョイントアクチュエータ</a>
    <a href="#sensors">👁️ センサー</a>
    <a href="#software">💻 ソフトウェアエコシステム</a>
  </nav>

  <section className="kit-index-panel" aria-label="Choose a robotics learning path">
    <div className="section-title-row compact-title">
      <div>
        <span className="section-kicker">キットを選ぶ</span>
        <h2>自分に合った学習パスをすばやく選択</h2>
      </div>
      <p>すべての製品カードはデフォルトで折りたたまれています。手元のキットを選び、対応する学習パスを展開してください。</p>
    </div>
    <div className="kit-index-grid">
      <a href="#rebot-rs"><span>🦾</span><strong>B601-RS</strong><small>RobStride アーム学習パス</small></a>
      <a href="#rebot-dm"><span>🦾</span><strong>B601-DM</strong><small>Damiao アーム学習パス</small></a>
      <a href="#soarm"><span>🤗</span><strong>SO100 / SO101</strong><small>低コスト LeRobot パス</small></a>
      <a href="#starai"><span>🦾</span><strong>StarAI</strong><small>ROS2 / MoveIt / GR00T</small></a>
      <a href="#lekiwi"><span>🚗</span><strong>Lekiwi</strong><small>モバイルベースとデモ</small></a>
      <a href="#stackforce"><span>🦿</span><strong>StackForce Mini</strong><small>車輪脚ロボット学習パス</small></a>
      <a href="#reachy"><span>🤗</span><strong>Reachy Mini</strong><small>デスクトップ対話型ロボット学習パス</small></a>
    </div>
  </section>

  <section id="robot-kits" className="section-block">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">ここから始める</span>
        <h2>📦 ロボットキット</h2>
      </div>
      <p>各キットは同じ考え方に従います。まずハードウェアを立ち上げ、その後ソフトウェアエコシステムに入り、最終的に AI、ROS、シミュレーションアプリケーションへと進みます。自分の製品カードを展開し、手順に沿って順番に進めてください。</p>
    </div>

    <div className="product-stack">

<details id="rebot-rs" className="product-card rebot">
  <summary>
    <div className="product-head">
      <span className="product-icon">🦾</span>
      <div>
        <h3>reBot B601-RS アーム</h3>
        <span>ロボットアームのオンボーディング、遠隔操作、ビジュアルグラスピング、ROS2 連携、AI データ収集向け</span>
      </div>
    </div>
    <span className="summary-action">学習パスを開く</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>おすすめのユーザー</strong><span>実機のロボットアームをすぐに動かしたい、初めての reBot Arm ユーザー</span></div>
      <div><strong>学習目標</strong><span>電源投入チェックから LeRobot による遠隔操作、ビジュアルグラスピング、ROS2 連携まで進めること</span></div>
      <div><strong>推奨順序</strong><span>Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/ja/rebot_b601_rs_getting_started/"><span className="step-index">1</span><div><b>Getting Started</b><small>開封、配線、電源チェック、ドライバ設定、基本動作テストを完了し、アームが正常に動作することを確認します。</small></div><em>ここから開始</em></a>
      <a className="step-card" href="/ja/rebot_arm_b601_rs_lerobot/"><span className="step-index">2</span><div><b>LeRobot Teleoperation and Data Collection</b><small>アームを遠隔操作し、模倣学習やエンボディド AI タスク向けのデータを記録する方法を学びます。</small></div><em>データ収集</em></a>
      <a className="step-card" href="/ja/rebot_arm_b601_rs_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio Kinematics Visualization</b><small>ロボットモデル、関節、座標系、順運動学・逆運動学について理解します。</small></div><em>制御</em></a>
      <a className="step-card" href="/ja/rebot_arm_b601_rs_grasping_demo/"><span className="step-index">4</span><div><b>Visual Grasping Demo</b><small>カメラによる認識と把持姿勢生成を組み合わせて、実物体の把持を完了します。</small></div><em>アプリケーション</em></a>
      <a className="step-card" href="/ja/rebot_arm_b601_rs_ros2_integration/"><span className="step-index">5</span><div><b>ROS2 Integration</b><small>アームを ROS2 エコシステムに接続し、認識、経路計画、ナビゲーション、シミュレーションのワークフローを実現します。</small></div><em>インテグレーション</em></a>
    </div>
  </div>
</details>

<details id="rebot-dm" className="product-card rebot">
  <summary>
    <div className="product-head">
      <span className="product-icon">🦾</span>
      <div>
        <h3>reBot B601-DM アーム</h3>
        <span>Damiao モーターを使ってロボット制御、LeRobot、Pinocchio、ROS2 を学びたいユーザー向け</span>
      </div>
    </div>
    <span className="summary-action">学習パスを開く</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>おすすめのユーザー</strong><span>ロボットアーム制御と AI データ収集を行いたい B601-DM ユーザー</span></div>
      <div><strong>学習目標</strong><span>基本ドライバ、運動学モデリング、LeRobot によるデータ収集、ビジュアルグラスピングデモを一通り完了すること</span></div>
      <div><strong>推奨順序</strong><span>Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/ja/rebot_b601_dm_getting_started/"><span className="step-index">1</span><div><b>Getting Started</b><small>電源、CAN 通信、ドライバ、基本動作を確認し、ハードウェアが準備完了であることを確認します。</small></div><em>ここから開始</em></a>
      <a className="step-card" href="/ja/rebot_arm_b601_dm_lerobot/"><span className="step-index">2</span><div><b>LeRobot Data Collection</b><small>LeRobot を使って遠隔操作、記録、模倣学習用データセットの準備を行います。</small></div><em>AI データ</em></a>
      <a className="step-card" href="/ja/rebot_arm_b601_dm_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio and Meshcat</b><small>ロボットモデルを読み込み・可視化し、運動学と関節空間制御の基本を学びます。</small></div><em>制御</em></a>
      <a className="step-card" href="/ja/rebot_arm_b601_dm_grasping_demo/"><span className="step-index">4</span><div><b>Visual Grasping Demo</b><small>アームとビジョンアルゴリズムを組み合わせ、実環境の物体を把持します。</small></div><em>アプリケーション</em></a>
      <a className="step-card" href="/ja/rebot_arm_b601_dm_ros2_integration/"><span className="step-index">5</span><div><b>ROS2 Integration</b><small>アームを ROS2 に接続し、MoveIt、認識ノード、システムレベルのアプリケーションを実行します。</small></div><em>インテグレーション</em></a>
    </div>
  </div>
</details>

<details id="soarm" className="product-card soarm">
  <summary>
    <div className="product-head">
      <span className="product-icon">🤗</span>
      <div>
        <h3>SO100 / SO101 アーム</h3>
        <span>低コストのロボットアームでのオンボーディング、LeRobot、シミュレーション、強化学習、GR00T/VLA 実験向け</span>
      </div>
    </div>
    <span className="summary-action">学習パスを開く</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>おすすめのユーザー</strong><span>手頃な価格のロボットアームでエンボディド AI を始めたいユーザー</span></div>
      <div><strong>学習目標</strong><span>サーボのデバッグからシミュレーション、強化学習、GR00T、デュアルアームトレーニングへと進むこと</span></div>
      <div><strong>推奨順序</strong><span>Setup → Servo Debugging → Simulation → Isaac Lab → GR00T → Dual Arm</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/ja/lerobot_so100m_new/"><span className="step-index">1</span><div><b>SO100 / SO101 Getting Started</b><small>ハードウェアのセットアップ、接続、キャリブレーション、最小限の実行テストを完了します。</small></div><em>ここから開始</em></a>
      <a className="step-card" href="/ja/lerobot_steering_gear_debugging_tool/"><span className="step-index">2</span><div><b>Servo Debugging Tool</b><small>トレーニング前に、サーボ ID、回転方向、ゼロポイント、通信状態を確認します。</small></div><em>デバッグ</em></a>
      <a className="step-card" href="/ja/simulate_soarm101_by_leisaac/"><span className="step-index">3</span><div><b>LeIsaac Simulation</b><small>Sim2Real の前に、シミュレーション内でロボットモデル、シーン、タスク設定を理解します。</small></div><em>シミュレーション</em></a>
      <a className="step-card" href="/ja/training_soarm101_policy_with_isaacLab/"><span className="step-index">4</span><div><b>Isaac Lab Reinforcement Learning</b><small>シミュレーション内でタスク設定、報酬、ポリシートレーニング、デプロイフローを学びます。</small></div><em>上級</em></a>
      <a className="step-card" href="/ja/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="step-index">5</span><div><b>NVIDIA GR00T を用いた SO101</b><small>Jetson へのデプロイを含む VLA およびエンボディド AI モデルのファインチューニングワークフローに入りましょう。</small></div><em>VLA</em></a>
      <a className="step-card" href="/ja/lerobot_double_arm_so_arm_training/"><span className="step-index">6</span><div><b>デュアルアーム SO-ARM トレーニング</b><small>より複雑なデュアルアームのデータ収集、トレーニング、およびタスク実行ワークフローを学びます。</small></div><em>複雑なタスク</em></a>
      <a className="step-card optional" href="/ja/control_robotic_arm_via_phospho/"><span className="step-index">+</span><div><b>Phospho LeRobot</b><small>サードパーティのデータ収集およびトレーニングプラットフォームを試したいユーザー向けのオプション拡張です。</small></div><em>オプション</em></a>
    </div>
  </div>
</details>

<details id="starai" className="product-card starai">
  <summary>
    <div className="product-head">
      <span className="product-icon">🦾</span>
      <div>
        <h3>StarAI Arm</h3>
        <span>基本的なロボットアーム制御、MoveIt 2、ROS2 プランニング、および GR00T アプリケーション向け</span>
      </div>
    </div>
    <span className="summary-action">ラーニングパスを開く</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>推奨対象</strong><span>ROS2 によるロボットアームプランニングと AI 制御デモを学ぶユーザー</span></div>
      <div><strong>学習目標</strong><span>基本制御、MoveIt 2 プランニング、および GR00T ベースの制御を実行する</span></div>
      <div><strong>推奨順序</strong><span>Getting Started → MoveIt 2 → GR00T</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/ja/lerobot_starai_arm/"><span className="step-index">1</span><div><b>StarAI Arm 入門</b><small>ハードウェア接続、基本制御、および最小限の実行可能なサンプルを完了します。</small></div><em>ここから開始</em></a>
      <a className="step-card" href="/ja/starai_arm_ros_moveit/"><span className="step-index">2</span><div><b>MoveIt 2 モーションプランニング</b><small>モデルインポート、プランニングシーン、経路計画、および ROS2 アーム開発を学びます。</small></div><em>ROS2</em></a>
      <a className="step-card" href="/ja/control_robotic_arm_via_gr00t/"><span className="step-index">3</span><div><b>NVIDIA GR00T を用いた StarAI</b><small>大規模モデルおよび VLA ベースのロボットアーム制御アプリケーションに入ります。</small></div><em>AI 制御</em></a>
    </div>
  </div>
</details>

<details id="lekiwi" className="product-card lekiwi">
  <summary>
    <div className="product-head">
      <span className="product-icon">🚗</span>
      <div>
        <h3>Lekiwi Mobile Base</h3>
        <span>モバイルロボットのオンボーディング、ベース制御、およびサウンドフォローアプリケーション向け</span>
      </div>
    </div>
    <span className="summary-action">ラーニングパスを開く</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>推奨対象</strong><span>初めてモバイルベースを使用し、ロボットを動かしてみたいユーザー</span></div>
      <div><strong>学習目標</strong><span>基本的なベース制御を完了し、サウンドフォローデモを試す</span></div>
      <div><strong>注意</strong><span>このパスを現在の製品オンボーディングフローに集中させるため、ここでは ROS2 ステップを削除しています</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/ja/lerobot_lekiwi/"><span className="step-index">1</span><div><b>Lekiwi Mobile Base 入門</b><small>組み立て、接続、基本的な動作制御、および安全確認を完了します。</small></div><em>ここから開始</em></a>
      <a className="step-card" href="/ja/sound_follow_robot/"><span className="step-index">2</span><div><b>サウンドフォローデモ</b><small>音声入力とベースの動作制御を組み合わせて、直感的なインタラクティブモバイルロボットデモを実現します。</small></div><em>アプリケーション</em></a>
    </div>
  </div>
</details>

<details id="stackforce" className="product-card stackforce">
  <summary>
    <div className="product-head">
      <span className="product-icon">🦿</span>
      <div>
        <h3>StackForce Mini Wheeled-Legged Robot</h3>
        <span>車輪脚構造、バランス制御、モーションプランニング、および制御アルゴリズム向け</span>
      </div>
    </div>
    <span className="summary-action">ラーニングパスを開く</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>推奨対象</strong><span>モバイルロボット、車輪脚ロボット、およびバランス制御に興味があるユーザー</span></div>
      <div><strong>学習目標</strong><span>ハードウェア構造、制御ロジック、および基本的な動作能力を理解する</span></div>
      <div><strong>推奨順序</strong><span>Getting Started → Control Principles → Motion Debugging</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/ja/StackForce_Mini_Wheeled_Legged_Robot/"><span className="step-index">1</span><div><b>StackForce Mini 入門</b><small>ハードウェア、基本的なデプロイ、動作制御、および入門的な車輪脚実験について学びます。</small></div><em>コース</em></a>
    </div>
  </div>
</details>

<details id="reachy" className="product-card reachy">
  <summary>
    <div className="product-head">
      <span className="product-icon">🤗</span>
      <div>
        <h3>Reachy Mini</h3>
        <span>デスクトップロボティクス、人とロボットのインタラクション、エージェント、Python SDK、シミュレーション、および AI 連携向け</span>
      </div>
    </div>
    <span className="summary-action">ラーニングパスを開く</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>推奨対象</strong><span>デスクトップロボットとのインタラクション、音声対話、動作制御、およびエージェントアプリケーションを行いたいユーザー</span></div>
      <div><strong>学習目標</strong><span>基本的な使い方から始めて Wireless または Lite を選択し、その後 SDK 開発、AI 連携、およびトラブルシューティングを学ぶ</span></div>
      <div><strong>ドキュメントマップ</strong><span>Product Overview → Platform Setup → SDK Development → AI Apps → Troubleshooting → API Reference の順に構成されています</span></div>
    </div>

    <div className="reachy-path-grid">
      <div className="mini-track">
        <h4>① 製品を理解する</h4>
        <a href="/ja/reachymini_intro/">Reachy Mini 概要</a>
        <a href="/ja/reachymini_getting_started/">ReachyMini 入門</a>
      </div>
      <div className="mini-track">
        <h4>② プラットフォームを選択する</h4>
        <a href="/ja/reachymini_platforms_simulation_get_started/">シミュレーションセットアップ</a>
        <a href="/ja/reachymini_platforms_reachy_mini_get_started/">Reachy Mini Wireless セットアップ</a>
        <a href="/ja/reachymini_platforms_reachy_mini_usage/">Reachy Mini の使用方法</a>
        <a href="/ja/reachymini_platforms_reachy_mini_hardware/">Reachy Mini ハードウェアデータシート</a>
        <a href="/ja/reachymini_platforms_reachy_mini_lite_get_started/">Reachy Mini Lite セットアップ</a>
        <a href="/ja/reachymini_platforms_reachy_mini_lite_usage/">Reachy Mini Lite の使用方法</a>
        <a href="/ja/reachymini_platforms_reachy_mini_lite_hardware/">Reachy Mini Lite ハードウェアデータシート</a>
      </div>
      <div className="mini-track">
        <h4>③ SDK と開発の基本</h4>
        <a href="/ja/reachymini_sdk_readme/">Reachy Mini SDK</a>
        <a href="/ja/reachymini_sdk_installation/">インストールガイド</a>
        <a href="/ja/reachymini_sdk_quickstart/">クイックスタートガイド</a>
        <a href="/ja/reachymini_sdk_python-sdk/">Python SDK リファレンス</a>
        <a href="/ja/reachymini_sdk_core-concept/">コアコンセプトとアーキテクチャ</a>
        <a href="/ja/reachymini_sdk_media-architecture/">メディアアーキテクチャ</a>
        <a href="/ja/reachymini_sdk_gstreamer-installation/">GStreamer インストール</a>
        <a href="/ja/reachymini_sdk_javascript-sdk/">JavaScript SDK と Web アプリ</a>
      </div>
      <div className="mini-track">
        <h4>④ アプリと AI 連携</h4>
        <a href="/ja/reachymini_sdk_integration/">連携とアプリケーション</a>
        <a href="/ja/reachymini_sdk_apps/">アプリの構築と公開</a>
        <a href="/ja/reachymini_conversation/">Doubao LLM 会話デモ</a>
        <a href="/ja/reachymini_vibe-code-with-your-agent/">エージェントと行う Vibe コーディング</a>
        <a href="/ja/reachymini_agents/">AI エージェント開発ガイド</a>
      </div>
      <div className="mini-track">
        <h4>⑤ メディア、システム、および高度な操作</h4>
        <a href="/ja/reachymini_platforms_reachy_mini_media_advanced_controls/">Wireless 高度なメディア制御</a>
        <a href="/ja/reachymini_platforms_reachy_mini_lite_media_advanced_controls/">Lite 高度なメディア制御</a>
        <a href="/ja/reachymini_platforms_reachy_mini_lite_wizard/">Dynamixel Wizard でモーターパラメータを読み取る</a>
        <a href="/ja/reachymini_platforms_reachy_mini_development_workflow/">Wireless 開発ワークフロー</a>
        <a href="/ja/reachymini_platforms_reachy_mini_install_daemon_from_branch/">ブランチから Daemon をインストール</a>
        <a href="/ja/reachymini_platforms_reachy_mini_reflash_the_rpi_iso/">Raspberry Pi OS イメージを書き換える</a>
        <a href="/ja/reachymini_platforms_reachy_mini_reset/">Bluetooth リセット</a>
      </div>
      <div className="mini-track">
        <h4>⑥ 例</h4>
        <a href="/ja/reachymini_examples_minimal_demo/">最小限デモ</a>
        <a href="/ja/reachymini_examples_goto_interpolation_playground/">Goto 補間プレイグラウンド</a>
        <a href="/ja/reachymini_examples_look_at/">画像を見る</a>
        <a href="/ja/reachymini_examples_mini_head_position_gui/">ヘッド位置 GUI</a>
        <a href="/ja/reachymini_examples_joy_controller/">ジョイスティックコントローラ</a>
        <a href="/ja/reachymini_examples_imu/">IMU 例</a>
        <a href="/ja/reachymini_examples_custom_media_manager/">カスタムメディアマネージャ</a>
        <a href="/ja/reachymini_examples_reachy_compliant_demo/">コンプライアントモードデモ</a>
        <a href="/ja/reachymini_examples_recorded_moves/">記録された動き</a>
        <a href="/ja/reachymini_examples_rerun_viewer/">Rerun ビューア</a>
        <a href="/ja/reachymini_examples_sequence/">シーケンスデモ</a>
        <a href="/ja/reachymini_examples_sound_doa/">音の到来方向</a>
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
        <a href="/ja/reachymini_api_apps/">Apps API リファレンス</a>
        <a href="/ja/reachymini_api_tools/">Tools API リファレンス</a>
        <a href="/ja/reachymini_api_utils/">Utils API リファレンス</a>
      </div>
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
      <p>モーターのデバッグ、通信プロトコルの理解、関節レベルの問題の診断が必要なときに、これらのリファレンスを使用してください。</p>
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
      <p>ビジュアルグラスピング、SLAM、音声インタラクション、ロボット状態の認識に役立ちます。</p>
    </div>
    <div className="resource-columns">
      <div><h4>📡 LiDAR</h4><a href="/ja/robosense_lidar/">RoboSense</a><a href="/ja/mid360/">Livox MID360</a><a href="/ja/a_loam/">A-LOAM アルゴリズム</a><a href="/ja/slamtec/">Slamtec シリーズ</a></div>
      <div><h4>📷 カメラ</h4><a href="/ja/orbbec_gemini2/">Orbbec Gemini 2</a><a href="/ja/orbbec_gemini_335lg/">Gemini 335Lg 深度カメラ</a><a href="/ja/orbbec_gemini336/">Gemini 336 深度カメラ</a><a href="/ja/sensing_gmsl_cameras/">SENSING GMSL2 カメラ</a><a href="/ja/ac1/">RoboSense AC1</a><a href="/ja/orbbec_depth_camera_on_ros/">Orbbec と ROS</a><a href="/ja/orb_slam3_orbbec_gemini2/">ORB-SLAM3 と Gemini2</a><a href="/ja/csi_camera_on_ros/">Jetson 上の CSI カメラ</a><a href="/ja/pycuvslam_recomputer_robotics/">PyCuVSLAM</a></div>
      <div><h4>🎤 音声</h4><a href="/ja/ReSpeaker_Core_v2.0/">ReSpeaker Core v2.0</a><a href="/ja/ReSpeaker_Mic_Array_v2.0/">ReSpeaker Mic Array v2.0</a><h4>🧭 IMU</h4><a href="/ja/hexfellow_y200/">HEXFELLOW Y200</a><a href="/ja/wheeltec_imu/">WHEELTEC IMU</a></div>
    </div>
  </section>

  <section id="software" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">リファレンス</span>
        <h2>💻 ソフトウェアエコシステム</h2>
      </div>
      <p>キットが動作したら、プロジェクトの目的に応じて ROS、Isaac、PX4、VLA などのソフトウェア方向を選択してください。</p>
    </div>
    <div className="resource-columns">
      <div><h4>ROS エコシステム</h4><a href="/ja/installing_ros1/">ROS 1 インストール</a><a href="/ja/install_ros2_humble/">ROS 2 インストール</a><a href="/ja/install_isaacros/">Isaac ROS インストール</a><a href="/ja/isaac_ros_apriltag/">Isaac ROS AprilTag</a><a href="/ja/isaac_ros_visual_slam/">Isaac ROS V-SLAM</a></div>
      <div><h4>NVIDIA Isaac</h4><a href="/ja/install_isaaclab/">Isaac Lab インストール</a><a href="/ja/training_soarm101_policy_with_isaacLab/">SO Arm 強化学習</a><a href="/ja/simulate_soarm101_by_leisaac/">IsaacSim を用いた SO100 Arm</a></div>
      <div><h4>PX4 / VLA</h4><a href="/ja/control_px4_with_recomputer_jetson/">Jetson と PX4</a><a href="/ja/object_tracking_with_reComputer_jetson_and_pX4/">PX4 物体追跡</a><a href="/ja/control_robotic_arm_via_gr00t/">NVIDIA GR00T を用いた StarAI</a></div>
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


/* Optimized collapsed-card learning path additions */
.kit-index-panel {
  margin: 1.6rem 0 2.2rem;
  padding: 1.25rem;
  border-radius: 24px;
  border: 1px solid var(--rp-border);
  background: linear-gradient(135deg, var(--rp-card-bg), var(--rp-card-bg-soft));
  box-shadow: var(--rp-shadow-sm);
}
.compact-title { margin-bottom: 1rem; }
.kit-index-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 0.8rem;
}
.kit-index-grid a {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  grid-template-areas: "icon title" "icon desc";
  gap: 0.18rem 0.75rem;
  align-items: center;
  padding: 0.9rem;
  border-radius: 16px;
  border: 1px solid var(--rp-border);
  background: var(--rp-card-bg);
  text-decoration: none !important;
  color: inherit;
  transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}
.kit-index-grid a:hover {
  transform: translateY(-2px);
  border-color: var(--rp-accent-border);
  box-shadow: var(--rp-shadow-accent);
}
.kit-index-grid span {
  grid-area: icon;
  width: 2.35rem;
  height: 2.35rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: var(--rp-accent-soft);
  font-size: 1.2rem;
}
.kit-index-grid strong { grid-area: title; color: var(--rp-text); }
.kit-index-grid small { grid-area: desc; color: var(--rp-text-muted); line-height: 1.35; }
.product-card { scroll-margin-top: 6rem; }
.product-card .summary-action { position: relative; min-width: 6.3rem; text-align: center; }
.product-card[open] .summary-action { font-size: 0; }
.product-card[open] .summary-action::after { content: "Close learning path"; font-size: 0.76rem; }
.product-card:not([open]) summary { background: linear-gradient(90deg, var(--rp-card-bg), var(--rp-card-bg-soft)); }
.product-card:not([open]) .product-head span { color: var(--rp-text-muted); }
.product-body { animation: rpFadeIn 0.18s ease-out; }
@keyframes rpFadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}
.product-meta-grid div, .mini-track, .resource-columns div, .kit-index-panel {
  backdrop-filter: blur(6px);
}
html[data-theme='dark'] .kit-index-panel {
  background: linear-gradient(135deg, var(--rp-card-bg), var(--rp-card-bg-soft));
}
html[data-theme='dark'] .kit-index-grid a { background: var(--rp-card-bg); }
@media (max-width: 900px) {
  .kit-index-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 560px) {
  .kit-index-panel { padding: 1rem; border-radius: 20px; }
  .kit-index-grid { grid-template-columns: 1fr; }
}

`}</style>
