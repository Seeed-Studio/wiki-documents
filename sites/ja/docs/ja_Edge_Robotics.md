---
description: Seeed Studio ロボティクスのドキュメントとラーニングパス。
title: AI Robotics Wiki
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

# AI Robotics Wiki

> *「今日の科学は明日の技術である。」 - Edward Teller*

<div className="robotics-page">

  <section className="hero-panel">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>どこから始めればよいか迷っていますか？お持ちのロボットキットを選んでください</h2>
    </div>
  </section>

  <RoboticsPageSearch />

  <nav className="quick-nav" aria-label="Robotics page quick navigation">
    <a href="#robot-kits">📦 ロボットキット</a>
    <a href="#rebot-hardware-inventory">🧰 rebot オープンソースリソース</a>
    <a href="#actuators">⚙️ 関節アクチュエータ</a>
    <a href="#sensors">👁️ センサー</a>
    <a href="#software">💻 ソフトウェアエコシステム</a>
  </nav>


  <section id="robot-kits" className="section-block">
    <div className="product-stack">

<article id="rebot-rs" className="product-card rebot product-card--cover">
  <div className="product-head">
    <h3>reBot B601-RS ロボットアーム</h3>
  </div>
  <div className="product-body">
    <div className="learning-steps">
      <a className="step-card" href="/ja/rebot_b601_rs_getting_started/"><span className="step-index">1</span><div><b>クイックスタート</b><small>開封、配線、電源投入、ドライバの確認、基本動作のテストを行います。</small></div><em>初心者必須</em></a>
      <a className="step-card" href="/ja/rebot_arm_b601_rs_lerobot/"><span className="step-index">2</span><div><b>LeRobot テレオペレーションとデータ収集</b><small>模倣学習とエンボディド AI のためのテレオペレーションデータを収集します。</small></div><em>データ収集</em></a>
      <a className="step-card" href="/ja/rebot_arm_b601_rs_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio 運動学可視化</b><small>アームモデル、関節、フレーム、運動学を探索します。</small></div><em>高度な制御</em></a>
      <a className="step-card" href="/ja/rebot_arm_b601_rs_grasping_demo/"><span className="step-index">4</span><div><b>ビジュアル把持デモ</b><small>ビジョンと把持姿勢生成を用いて実物体をピックします。</small></div><em>アプリケーションデモ</em></a>
      <a className="step-card" href="/ja/rebot_arm_b601_rs_ros2_integration/"><span className="step-index">5</span><div><b>ROS2 連携</b><small>アームを ROS2 に接続し、認識、プランニング、シミュレーションを行います。</small></div><em>システム統合</em></a>
      <a className="step-card" href="/ja/rebot_arm_b601_rs_web_simulator_developer_guide/"><span className="step-index">6</span><div><b>Web シミュレータ開発</b><small>ROS2/MuJoCo と連携した Web シミュレータによる実機・仮想同期制御を学びます。</small></div><em>シミュレーション開発</em></a>
      <a className="step-card" href="/ja/rebot_arm_b601_rs_isaacsim/"><span className="step-index">7</span><div><b>Isaac Sim 連携</b><small>Isaac Sim 上でアームをシミュレーションし、実機ロボットと同期させます。</small></div><em>シミュレーション</em></a>
      <a className="step-card" href="/ja/rebot_arm_b601_rs_mit_control/"><span className="step-index">8</span><div><b>MIT 位置制御</b><small>reBot Arm B601-RS で MIT 位置制御を始めます。</small></div><em>高度な制御</em></a>
      <a className="step-card" href="/ja/wrc_demo_tutorial/"><span className="step-index">9</span><div><b>エンボディドエージェント設計フレームワーク</b><small>VLM をアームに接続し、自然言語コマンドで安全ゲート付き制御によるビジョンベース把持を実現します。</small></div><em>エージェントフレームワーク</em></a>
    </div>
  </div>
</article>


<article id="rebot-dm" className="product-card rebot product-card--cover">
  <div className="product-head">
    <h3>reBot B601-DM ロボットアーム</h3>
  </div>
  <div className="product-body">
    <div className="learning-steps">
  <a className="step-card" href="/ja/rebot_b601_dm_getting_started/"><span className="step-index">1</span><div><b>クイックスタート</b><small>電源、CAN、ドライバ、基本動作を確認します。</small></div><em>初心者必須</em></a>

  <a className="step-card" href="/ja/rebot_arm_b601_dm_lerobot/"><span className="step-index">2</span><div><b>LeRobot データ収集</b><small>模倣学習のためのテレオペレーションデータを記録します。</small></div><em>AI データ</em></a>

  <a className="step-card" href="/ja/rebot_arm_b601_dm_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio と Meshcat</b><small>モデルを読み込み、動作を可視化し、運動学を学びます。</small></div><em>制御の基礎</em></a>

  <a className="step-card" href="/ja/rebot_arm_b601_dm_grasping_demo/"><span className="step-index">4</span><div><b>ビジュアル把持デモ</b><small>アームとビジョンを組み合わせて実環境で把持します。</small></div><em>アプリケーションデモ</em></a>

  <a className="step-card" href="/ja/rebot_arm_b601_dm_ros2_integration/"><span className="step-index">5</span><div><b>ROS2 連携</b><small>ROS2 を MoveIt、認識、システムアプリとともに使用します。</small></div><em>システム統合</em></a>

  <a className="step-card" href="/ja/rebot_arm_b601_dm_web_simulator_developer_guide/"><span className="step-index">6</span><div><b>Web シミュレータ開発</b><small>ROS2/MuJoCo と連携した Web シミュレータによる実機・仮想同期制御を学びます。</small></div><em>シミュレーション開発</em></a>

  <a className="step-card" href="/ja/rebot_arm_b601_dm_isaacsim/"><span className="step-index">7</span><div><b>Isaac Sim 連携</b><small>Isaac Sim 上で reBot B601-DM を展開し、シミュレーション、デバッグ、制御アルゴリズム検証を行います。</small></div><em>シミュレーション</em></a>
</div>
  </div>
</article>


<article id="soarm" className="product-card soarm product-card--cover">
  <div className="product-head">
    <h3>SO100 / SO101 ロボットアーム</h3>
  </div>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/ja/lerobot_so100m_new/"><span className="step-index">1</span><div><b>SO100 / SO101 クイックスタート</b><small>ハードウェアを取り付け、接続し、キャリブレーションして基本テストを実行します。</small></div><em>初心者必須</em></a>
    <a className="step-card" href="/ja/lerobot_steering_gear_debugging_tool/"><span className="step-index">2</span><div><b>サーボデバッグツール</b><small>サーボ ID、方向、ゼロ点、通信を確認します。</small></div><em>トラブルシューティングの基礎</em></a>
    <a className="step-card" href="/ja/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="step-index">3</span><div><b>SO101 と NVIDIA GR00T</b><small>VLA モデルをファインチューニングし、Jetson にデプロイします。</small></div><em>高度な VLA</em></a>
    <a className="step-card" href="/ja/lerobot_double_arm_so_arm_training/"><span className="step-index">4</span><div><b>デュアルアーム SO-ARM トレーニング</b><small>データを収集し、学習し、デュアルアームタスクを実行します。</small></div><em>複雑なタスク</em></a>
    <a className="step-card" href="/ja/soarm_amazinghand_teleop/"><span className="step-index">5</span><div><b>SO-ARM と Amazing Hand 巧手ハンド</b><small>SO-ARM101 と Amazing Hand を組み合わせて LeRobot を使用します。</small></div><em>巧手ハンド統合</em></a>
    <a className="step-card" href="/ja/simulate_soarm101_by_leisaac/"><span className="step-index">6</span><div><b>LeIsaac シミュレーション</b><small>シミュレートされたモデルとタスクで Sim2Real に備えます。</small></div><em>シミュレーション基礎</em></a>
    <a className="step-card" href="/ja/training_soarm101_policy_with_isaacLab/"><span className="step-index">7</span><div><b>Isaac Lab 強化学習</b><small>シミュレーションでポリシーを学習し、報酬設計を確認します。</small></div><em>高度なトレーニング</em></a>
    <a className="step-card optional" href="/ja/control_robotic_arm_via_phospho/"><span className="step-index">+</span><div><b>Phospho LeRobot</b><small>サードパーティのデータ収集および学習プラットフォームを試します。</small></div><em>オプション拡張</em></a>
  </div>
  </div>
</article>


<article id="reachy" className="product-card reachy product-card--cover">
  <div className="product-head">
    <h3>Reachy Mini</h3>
  </div>
  <div className="product-body">
    <div className="reachy-path-grid">
            <div className="mini-track">
              <h4>① まず製品について知る</h4>
              <a href="/ja/reachymini_intro/">Reachy Mini 製品紹介</a>
              <a href="/ja/reachymini_getting_started/">ReachyMini 入門ガイド</a>
            </div>
            <div className="mini-track">
              <h4>② プラットフォームを選ぶ</h4>
              <a href="/ja/reachymini_platforms_simulation_get_started/">シミュレーション クイックスタート</a>
              <a href="/ja/reachymini_platforms_reachy_mini_get_started/">Reachy Mini ワイヤレスセットアップガイド</a>
              <a href="/ja/reachymini_platforms_reachy_mini_usage/">Reachy Mini の使い方</a>
              <a href="/ja/reachymini_platforms_reachy_mini_hardware/">Reachy Mini ハードウェアデータシート</a>
              <a href="/ja/reachymini_platforms_reachy_mini_lite_get_started/">Reachy Mini Lite セットアップガイド</a>
              <a href="/ja/reachymini_platforms_reachy_mini_lite_usage/">Reachy Mini Lite の使い方</a>
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
              <a href="/ja/reachymini_sdk_javascript-sdk/">JavaScript SDK と Web アプリケーション</a>
            </div>
            <div className="mini-track">
              <h4>④ アプリケーションと AI 連携</h4>
              <a href="/ja/reachymini_sdk_integration/">連携とアプリケーション</a>
              <a href="/ja/reachymini_sdk_apps/">アプリケーションの構築と公開</a>
              <a href="/ja/reachymini_conversation/">Doubao LLM API を統合する</a>
              <a href="/ja/reachymini_vibe-code-with-your-agent/">エージェントとの Vibe コーディング</a>
              <a href="/ja/reachymini_agents/">AI エージェント開発ガイド</a>
            </div>
            <div className="mini-track">
              <h4>⑤ メディア、システム、高度な操作</h4>
              <a href="/ja/reachymini_platforms_reachy_mini_media_advanced_controls/">ワイヤレス高度メディアコントロール</a>
              <a href="/ja/reachymini_platforms_reachy_mini_lite_media_advanced_controls/">Lite 高度メディアコントロール</a>
              <a href="/ja/reachymini_platforms_reachy_mini_lite_wizard/">Dynamixel Wizard を使用してモーターパラメータを読み取る</a>
              <a href="/ja/reachymini_platforms_reachy_mini_development_workflow/">ワイヤレス開発ワークフロー</a>
              <a href="/ja/reachymini_platforms_reachy_mini_install_daemon_from_branch/">特定ブランチから Daemon をインストール</a>
              <a href="/ja/reachymini_platforms_reachy_mini_reflash_the_rpi_iso/">Raspberry Pi OS イメージを書き換える</a>
              <a href="/ja/reachymini_platforms_reachy_mini_reset/">Bluetooth 経由でリセット</a>
            </div>
            <div className="mini-track">
              <h4>⑥ チュートリアル例</h4>
              <a href="/ja/reachymini_examples_minimal_demo/">最小デモ</a>
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
</article>


<article id="lekiwi" className="product-card lekiwi product-card--cover">
  <div className="product-head">
    <h3>Lekiwi モバイルシャーシ</h3>
  </div>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/ja/lerobot_lekiwi/"><span className="step-index">1</span><div><b>Lekiwi モバイルシャーシ クイックスタート</b><small>組み立て、接続、動作テスト、安全性の確認を行います。</small></div><em>初心者必須</em></a>
    <a className="step-card" href="/ja/sound_follow_robot/"><span className="step-index">2</span><div><b>サウンドフォローデモ</b><small>音声入力を使用してインタラクティブなモバイルデモを駆動します。</small></div><em>アプリケーションデモ</em></a>
  </div>
  </div>
</article>


<article id="stackforce" className="product-card stackforce product-card--cover">
  <div className="product-head">
    <h3>StackForce Mini 車輪脚ロボット</h3>
  </div>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/ja/StackForce_Mini_Wheeled_Legged_Robot/"><span className="step-index">1</span><div><b>StackForce Mini クイックスタート</b><small>ハードウェアを学び、基本をデプロイし、動作をテストします。</small></div><em>システムコース</em></a>
  </div>
  </div>
</article>


<article id="starai" className="product-card starai">
  <div className="product-head">
    <h3>StarAI ロボットアーム</h3>
  </div>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/ja/lerobot_starai_arm/"><span className="step-index">1</span><div><b>StarAI ロボットアーム クイックスタート</b><small>ハードウェアを接続し、基本制御を実行し、サンプルをテストします。</small></div><em>初心者必須</em></a>
    <a className="step-card" href="/ja/starai_arm_ros_moveit/"><span className="step-index">2</span><div><b>MoveIt 2 モーションプランニング</b><small>MoveIt 2 でモデルをインポートし、経路を計画します。</small></div><em>上級 ROS2</em></a>
    <a className="step-card" href="/ja/control_robotic_arm_via_gr00t/"><span className="step-index">3</span><div><b>StarAI と NVIDIA GR00T</b><small>LLM / VLA を用いてロボットアーム制御を構築します。</small></div><em>AI 制御</em></a>
  </div>
  </div>
</article>


<article id="atom" className="product-card atom">
  <div className="product-head">
    <h3>Atom コンパクトヒューマノイドロボット</h3>
  </div>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/ja/atom_s/"><span className="step-index">1</span><div><b>Atom-S 入門ガイド</b><small>電源を入れ、Web リモートコントローラに接続し、最初の連続ティーチング動作シーケンスを記録します。</small></div><em>初心者必須</em></a>
    <a className="step-card" href="/ja/atom_x/"><span className="step-index">2</span><div><b>Atom-X 入門ガイド</b><small>Atom-X は Atom-S とまったく同じように動作します — 同じワークフローに従ってすぐに始められます。</small></div><em>同シリーズ</em></a>
  </div>
  </div>
</article>


    </div>
  </section>

  <section id="rebot-hardware-inventory" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">リファレンス</span>
        <h2>rebot オープンソースリソース</h2>
      </div>
      <p>B601-RS と B601-DM から始めましょう。各ハードウェアディレクトリには、3D プリント部品、CNC 金属部品、購入部品、BOM、電源アセンブリ手順、完全な STEP アセンブリが含まれています。description パッケージは、シミュレーション用の URDF / Mesh モデルを提供します。カメラマウントは両方のアームで共用です。</p>
    </div>
    <div className="resource-columns">
      <div>
        <h4>B601-RS</h4>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_RS" target="_blank" rel="noopener noreferrer">ハードウェアコレクション</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/Rebot_Arm_description/RS" target="_blank" rel="noopener noreferrer">ロボットアーム description パッケージ</a>
        <a href="https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_RS" target="_blank" rel="noopener noreferrer">デジタルツイン / Web シミュレータ</a>
      </div>
      <div>
        <h4>B601-DM</h4>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_DM" target="_blank" rel="noopener noreferrer">ハードウェアコレクション</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/Rebot_Arm_description/DM" target="_blank" rel="noopener noreferrer">ロボットアーム description パッケージ</a>
        <a href="https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_DM" target="_blank" rel="noopener noreferrer">デジタルツイン / Web シミュレータ</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_DM/performance_testing" target="_blank" rel="noopener noreferrer">実機性能テスト</a>
      </div>
      <div>
        <h4>カメラマウント（B601-RS / B601-DM）</h4>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/reBot_B601_DM/3D_Printed_Parts/D435_Gemini2_Mount.step" target="_blank" rel="noopener noreferrer">Orbbec Gemini 2 カメラマウント</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/reBot_B601_DM/3D_Printed_Parts/D405_305_Mount.step" target="_blank" rel="noopener noreferrer">Intel D405 / Gemini 305 カメラマウント</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/reBot_B601_DM/3D_Printed_Parts/D455f_Mount.step" target="_blank" rel="noopener noreferrer">Intel RealSense D455f カメラマウント</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/reBot_B601_DM/3D_Printed_Parts/UVC32_mount.step" target="_blank" rel="noopener noreferrer">32×32 UVC カメラマウント</a>
        <a href="https://github.com/xiehuangbao888/Camera-Mount" target="_blank" rel="noopener noreferrer">グローバルオーバーヘッドカメラマウントコレクション</a>
      </div>
      <div>
        <h4>共有リソース</h4>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">reBot-DevArm メインリポジトリ</a>
        <a href="https://github.com/Seeed-Projects/reBotArm_control_py" target="_blank" rel="noopener noreferrer">Python SDK</a>
        <a href="https://github.com/Seeed-Projects/reBotArmController_ROS2" target="_blank" rel="noopener noreferrer">ROS2 コントローラ</a>
        <a href="https://github.com/Seeed-Projects/lerobot-robot-seeed-b601" target="_blank" rel="noopener noreferrer">LeRobot ロボットアダプタ</a>
        <a href="https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102" target="_blank" rel="noopener noreferrer">LeRobot テレオペレータアダプタ</a>
        <a href="https://github.com/Seeed-Projects/reBot-Isaacsim" target="_blank" rel="noopener noreferrer">Isaac Sim</a>
        <a href="https://github.com/yuyoujiang/rebot-arm-dli-isaacsim/blob/main/assets/workspace/box.usdz" target="_blank" rel="noopener noreferrer">データ収集環境リソース</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm-Grasp" target="_blank" rel="noopener noreferrer">ビジュアルグラスプデモ</a>
      </div>
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
      <p>ビジュアルグラスピング、SLAM、音声インタラクション、ロボット状態の認識用。</p>
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
      <div><h4>ROS エコシステム</h4><a href="/ja/installing_ros1/">ROS 1 のインストール</a><a href="/ja/install_ros2_humble/">ROS 2 のインストール</a><a href="/ja/install_isaacros/">Isaac ROS のインストール</a><a href="/ja/isaac_ros_apriltag/">Isaac ROS AprilTag</a><a href="/ja/isaac_ros_visual_slam/">Isaac ROS V-SLAM</a></div>
      <div><h4>NVIDIA Isaac</h4><a href="/ja/install_isaaclab/">Isaac Lab のインストール</a><a href="/ja/training_soarm101_policy_with_isaacLab/">SO アーム強化学習</a><a href="/ja/simulate_soarm101_by_leisaac/">IsaacSim を用いた SO100 ロボットアーム</a></div>
      <div><h4>PX4 / VLA</h4><a href="/ja/control_px4_with_recomputer_jetson/">PX4 と Jetson</a><a href="/ja/object_tracking_with_reComputer_jetson_and_pX4/">PX4 オブジェクトトラッキング</a><a href="/ja/control_robotic_arm_via_gr00t/">StarAI と NVIDIA GR00T</a></div>
    </div>
  </section>

</div>
