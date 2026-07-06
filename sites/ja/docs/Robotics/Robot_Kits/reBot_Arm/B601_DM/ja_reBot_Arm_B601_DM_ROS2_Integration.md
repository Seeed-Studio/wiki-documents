---
description: このチュートリアルでは、reBot Arm B601-DM 向けに ROS2 制御ワークスペースをセットアップする方法を説明します。内容には、アーム制御、RViz による可視化、MoveIt 2 との統合が含まれます。
title: reBot Arm B601-DM ROS2 統合
keywords:
  - reBot Arm
  - B601-DM
  - ROS2
  - Humble
  - Jazzy
  - RViz
  - MoveIt 2
  - Robot Arm
  - Robotics
slug: /rebot_arm_b601_dm_ros2_integration
sku: 100065783, 100095532
last_update:
  date: 2026-07-05
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-04-29'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_ros2_integration/
---

# reBot Arm B601-DM ROS2 統合

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>RViz と MoveIt 2 を用いて B601-DM 向けの ROS2 制御ワークスペースを構築する</h2>
    <p>
      このガイドでは、低レベルの reBotArm_control_py SDK を ROS2 のトピック、
      サービス、およびアクションにラップします。B601-DM 向けに、ハードウェアのブリングアップ、制御ノード、RViz
      による可視化、MoveIt 2 によるプランニング、実機アームでの実行までをカバーします。
    </p>
    <div className="hero-actions">
      <a href="#workflow">ワークフローを見る</a>
      <a href="#install">ワークスペースをインストール</a>
      <a href="#moveit">MoveIt 2</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM ROS2 Integration" />
    <strong>B601-DM · ROS2 / RViz / MoveIt 2</strong>
    <span>まず通信を確認し、次に動作をシミュレーションし、その後にのみ実機ハードウェアで実行してください。</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全上の警告：実行前にロボット作業空間を必ずクリアしてください</strong>
    <p>
      ロボットアームを動かすプログラムを実行する前に、ロボットの作業空間内
      1 メートル以内
      <strong> の範囲 </strong>
      にある貴重品、壊れやすい物、工具、ケーブル、および無関係な物体をすべて取り除いてください。デバッグおよび動作中は、作業者はロボットの動作範囲から離れている必要があります。
      </p>
    <ul>
    <li>ロボットアームの電源投入後は、関節、モーター、リンク、グリッパー、エンドエフェクタには触れないでください。</li>
      <li>ROS2 アクション、MoveIt 実行、重力補償、IK 制御、軌道制御、テレオペレーション、把持デモを実行する前に、アームベースがしっかり固定されていることを確認してください。</li>
      <li>異常な動き、異音、振動、ケーブルの緩み、電源接触不良、通信断が発生した場合は、直ちにプログラムを停止し、点検前にシステムの電源を切ってください。</li>
      <li>モーターケーブル、CAN ケーブル、USB2CAN アダプタ、XT30 コネクタ、電源コネクタを抜き差しする際は、必ずシステムの電源を切ってから行ってください。</li>
      </ul>
    </div>
  </div>

<nav className="doc-nav" aria-label="quick navigation">
  <a href="#workflow">ワークフロー</a>
  <a href="#overview">概要</a>
  <a href="#install">インストール</a>
  <a href="#bringup">ブリングアップ</a>
  <a href="#api">API</a>
  <a href="#examples">サンプル</a>
  <a href="#moveit">MoveIt 2</a>
  <a href="#faq">FAQ</a>
  </nav>

<section id="workflow" className="section-card">
  <div className="section-title">
  <span>ここから開始</span>
    <h2>推奨 ROS2 ワークフロー</h2>
    <p>
    このページは現在、ステップバイステップのコースモジュールとして構成されています。カードを順番に進めてください：
      まずハードウェアを検証し、その後 ROS2 ワークスペースを構築し、通信を検証してから、
      最後に MoveIt 2 によるプランニングと実機ハードウェアでの実行に進みます。
      </p>
    </div>

  <div className="step-card-grid">
  <a className="step-card recommended" href="/ja/rebot_b601_dm_getting_started/">
    <span className="step-mini">Step 0</span>
      <strong>B601-DM クイックスタートを完了する</strong>
      <p>ROS2 を使用する前に、電源チェック、配線、モーター ID の確認、ゼロ位置キャリブレーション、MotorBridge の検証を完了してください。</p>
      <em>最初に必須</em>
      </a>
    <a className="step-card" href="#install">
    <span className="step-mini">Step 1</span>
      <strong>ROS2 と依存関係をインストールする</strong>
      <p>Ubuntu 24.04 では ROS2 Jazzy を、Ubuntu 22.04 では ROS2 Humble を使用し、その後 colcon、RViz、Pinocchio、制御メッセージをインストールします。</p>
      <em>環境</em>
      </a>
    <a className="step-card" href="#install">
    <span className="step-mini">Step 2</span>
      <strong>コントローラーワークスペースを構築する</strong>
      <p>ROS2 コントローラーをクローンし、MotorBridge をインストールし、低レベル SDK を追加して、colcon でワークスペースをビルドします。</p>
      <em>ビルド</em>
      </a>
    <a className="step-card" href="#bringup">
    <span className="step-mini">Step 3</span>
      <strong>ドライバーを安全に立ち上げる</strong>
      <p>まず RViz なしで制御ノードを起動し、シリアルチャネルを確認し、関節状態フィードバックを検証します。</p>
      <em>ドライバー</em>
      </a>
    <a className="step-card" href="#api">
    <span className="step-mini">Step 4</span>
      <strong>トピック、サービス、アクションを検証する</strong>
      <p>読み取り専用トピックと安全なサービスから始め、長い時間をかけて制御された関節および姿勢アクションをテストします。</p>
      <em>ROS API</em>
      </a>
    <a className="step-card" href="#moveit">
    <span className="step-mini">Step 5</span>
      <strong>MoveIt 2 を慎重に使用する</strong>
      <p>まずシミュレーションでプランニングを行い、RViz で軌道を確認し、経路が安全であることを確認してから実機ハードウェアで実行します。</p>
      <em>プランニング</em>
      </a>
    </div>
  </section>

<section id="overview" className="section-card">
  <div className="section-title">
  <span>概要</span>
    <h2>この ROS2 統合で提供されるもの</h2>
    <p>
    B601-DM ROS2 ワークスペースは、ロボットアームを標準的な ROS2
      インターフェースとして公開し、アームを認識、プランニング、
      可視化、およびより高レベルなロボティクスアプリケーションへ接続しやすくします。
      </p>
    </div>

  <div className="module-summary-grid">
  <div className="module-summary-card">
    <b>標準 ROS2 インターフェース</b>
      <span>関節状態とアームステータスを Publish し、有効化・無効化、原点復帰、グリッパー制御、姿勢モーション、関節軌道実行のためのサービスとアクションを提供します。</span>
      </div>
    <div className="module-summary-card">
    <b>RViz による可視化</b>
      <span>ロボットモデル、関節状態、プランニングフレームを可視化し、実際の動作を実行する前にロボット状態をデバッグできるようにします。</span>
      </div>
    <div className="module-summary-card">
    <b>MoveIt 2 プランニング</b>
      <span>シミュレーションプランニング、ハードウェア実行、四角形描画デモ、ピック＆プレースデモ用の MoveIt 2 設定およびデモパッケージを提供します。</span>
      </div>
    <div className="module-summary-card">
    <b>実機ハードウェアブリッジ</b>
      <span>ROS2 コマンドを reBotArm_control_py SDK および MotorBridge ベースの低レベルモーター制御へ接続します。</span>
      </div>
    </div>

  <div className="spec-card-grid">
  <div className="spec-card"><span>ロボットアーム</span><strong>reBot Arm B601-DM</strong></div>
    <div className="spec-card"><span>自由度</span><strong>6-DOF + グリッパー</strong></div>
    <div className="spec-card"><span>モーターバージョン</span><strong>Damiao モーターバージョン</strong></div>
    <div className="spec-card"><span>通信</span><strong>USB2CAN シリアルブリッジ</strong></div>
    <div className="spec-card"><span>デフォルトポート</span><strong>/dev/ttyACM0</strong></div>
    <div className="spec-card"><span>電源</span><strong>24V DC</strong></div>
    </div>
  </section>

<section className="section-card">
  <div className="section-title">
  <span>ハードウェア</span>
    <h2>BOM、配線、環境チェックリスト</h2>
    <p>
    ROS2 ワークスペースを構築する前に、ロボットアーム、電源、USB2CAN シリアルブリッジ、Ubuntu ホストを準備してください。
      </p>
      </div>

  <div className="two-col">
    <div className="info-card">
  <h3>部品表（BOM）</h3>
    <ul>
      <li>reBot Arm B601-DM ロボットアーム × 1</li>
      <li>グリッパー × 1</li>
        <li>USB2CAN シリアルブリッジ × 1</li>
        <li>24V 電源アダプター × 1</li>
        <li>USB-C／通信ケーブル × 1</li>
        <li>Ubuntu ホスト PC × 1</li>
        </ul>
        </div>
      <div className="info-card">
    <h3>環境要件</h3>
    <ul>
      <li>ROS2 Jazzy を搭載した Ubuntu 24.04、または ROS2 Humble を搭載した Ubuntu 22.04</li>
      <li>ROS2 ディストリビューションに対応したシステム Python</li>
        <li>colcon ビルドツール</li>
        <li>MotorBridge Python パッケージ</li>
        <li>reBotArm_control_py 低レベル SDK</li>
        </ul>
        </div>
      </div>

  <div className="callout warning">
    <strong>電源投入前：</strong>B601-DM が正しい 24V 電源を使用していること、USB2CAN アダプタが正しく接続されていること、アームがゼロ位置および基本的な接続性の検証を完了していることを確認してください。
  </div>

  <div className="command-card">
    <h3>シリアルデバイスを確認する</h3>
  <pre><code>{`ls /dev/ttyACM*`}</code></pre>
    </div>

  <div className="command-card">
    <h3>一時的なシリアル権限を付与する</h3>
  <pre><code>{`sudo chmod 666 /dev/ttyACM0`}</code></pre>
    </div>

  <div className="command-card">
    <h3>推奨される永続的な権限設定</h3>
  <pre><code>{`sudo usermod -a -G dialout $USER

    # Log out and log back in for the group change to take effect.`}</code></pre>
  </div>
</section>

<section id="install" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Step 1</span>
  <div>
    <h2>ROS2 をインストールし、ワークスペースをビルドする</h2>
    <p>
      使用している Ubuntu バージョンに対応する ROS2 ディストリビューションをインストールし、その後
      B601-DM ROS2 コントローラーワークスペースをビルドします。
        </p>
        </div>
      </div>

  <div className="step-card-grid small">
    <div className="step-card">
  <span className="step-mini">1.1</span>
    <strong>ROS2 をインストールする</strong>
      <p>Ubuntu 24.04 では Jazzy を、Ubuntu 22.04 では Humble を使用します。</p>
      </div>
      <div className="step-card">
    <span className="step-mini">1.2</span>
    <strong>依存関係をインストールする</strong>
      <p>colcon、制御メッセージ、軌道メッセージ、RViz、robot_state_publisher、Pinocchio をインストールします。</p>
      </div>
      <div className="step-card">
    <span className="step-mini">1.3</span>
    <strong>コントローラーリポジトリをクローンする</strong>
      <p>デフォルトでは Seeed-Projects リポジトリを使用し、指示がある場合は開発用リポジトリを使用します。</p>
      </div>
      <div className="step-card">
    <span className="step-mini">1.4</span>
    <div className="step-card">
      <span className="step-mini">1.4</span>
      <strong>MotorBridge をインストール</strong>
      <p>ROS2 ノードで使用しているものと同じ Python 環境に MotorBridge をインストールします。</p>
    </div>
    <div className="step-card">
      <span className="step-mini">1.5</span>
      <strong>低レベル SDK を追加</strong>
      <p>ROS2 コントローラがアーム SDK を呼び出せるように、reBotArm_control_py を third_party にクローンします。</p>
    </div>
    <div className="step-card">
      <span className="step-mini">1.6</span>
      <strong>ビルドと source</strong>
      <p>ROS2 コマンドを実行する前に、colcon でビルドし、install/setup.bash を source します。</p>
    </div>
  </div>

  <details className="content-details" open>
    <summary>Step 1.1 使用している Ubuntu バージョン向けに ROS2 をインストール</summary>
    <div className="link-grid">
      <a href="https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html" target="_blank">ROS2 Jazzy Ubuntu インストール</a>
      <a href="https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html" target="_blank">ROS2 Humble Ubuntu インストール</a>
    </div>
    <div className="tip-card">
      <strong>バージョンのルール</strong>
      <span>Ubuntu 24.04 では ROS2 Jazzy を使用します。Ubuntu 22.04 では ROS2 Humble を使用します。</span>
    </div>
  </details>

  <details className="content-details" open>
    <summary>Step 1.2 ビルドツールと ROS 依存パッケージをインストール</summary>
    <pre><code>{`sudo apt update
sudo apt install -y python3-colcon-common-extensions python3-pip git
sudo apt install -y \
  ros-jazzy-control-msgs \
  ros-jazzy-trajectory-msgs \
  ros-jazzy-tf-transformations \
  ros-jazzy-robot-state-publisher \
  ros-jazzy-rviz2 \
  ros-jazzy-pinocchio

source /opt/ros/jazzy/setup.bash
python3 -c "import pinocchio; print('pinocchio', pinocchio.__version__)"`}</code></pre>
    <p>ROS2 Humble を使用する場合は、<code>{`ros-jazzy-*`}</code> を <code>{`ros-humble-*`}</code> に置き換え、<code>{`/opt/ros/humble/setup.bash`}</code> を source してください。</p>
  </details>

  <details className="content-details" open>
    <summary>Step 1.3 ROS2 コントローラのリポジトリをクローン</summary>
    <pre><code>{`git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2`}</code></pre>
    <p>新機能をテストする場合は、開発用リポジトリを使用することもできます：</p>
    <pre><code>{`git clone https://github.com/EclipseaHime017/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 1.4 MotorBridge をインストール</summary>
    <pre><code>{`python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 1.5 低レベル SDK を追加</summary>
    <pre><code>{`mkdir -p third_party
git clone https://github.com/vectorBH6/reBotArm_control_py.git third_party/reBotArm_control_py`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 1.6 ワークスペースをビルド</summary>
    <pre><code>{`source /opt/ros/jazzy/setup.bash
colcon build --symlink-install
source install/setup.bash

ros2 pkg executables rebotarmcontroller`}</code></pre>
    <p>期待される実行可能エントリには次のものが含まれます：</p>
    <pre><code>{`rebotarmcontroller reBotArmController
rebotarmcontroller GravityCompensation
rebotarmcontroller GripperControl
rebotarmcontroller MoveTo
rebotarmcontroller MoveToPose`}</code></pre>
  </details>
</section>

<section id="bringup" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>ロボットコントローラを立ち上げる</h2>
      <p>最小限のハードウェアドライバから開始します。通信が安定してから RViz を追加してください。</p>
    </div>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>立ち上げ前の安全チェック</strong>
      <p>貴重品をすべて片付け、<strong>半径 1 メートル</strong> 以内には人が入らないようにしてください。コントローラを有効にする前に、B601-DM ベースがしっかり固定されていることを確認します。</p>
    </div>
  </div>

  <div className="step-card-grid small">
    <div className="step-card">
      <span className="step-mini">2.1</span>
      <strong>ワークスペースを source する</strong>
      <p>新しいターミナルを開くたびに、ワークスペースに移動して install の setup ファイルを source する必要があります。</p>
    </div>
    <div className="step-card">
      <span className="step-mini">2.2</span>
      <strong>ドライバのみ起動</strong>
      <p>最初はドライバの launch を使用し、ハードウェア通信を可視化処理から切り離します。</p>
    </div>
    <div className="step-card">
      <span className="step-mini">2.3</span>
      <strong>フル bringup を開始</strong>
      <p>ドライバが安定した後に、コントローラ、robot_state_publisher、および必要に応じて RViz を起動します。</p>
    </div>
    <div className="step-card">
      <span className="step-mini">2.4</span>
      <strong>ジョイント状態を確認</strong>
      <p>モーションコマンドを送信する前に、一度だけ /rebotarm/joint_states を読み取ります。</p>
    </div>
  </div>

  <div className="command-card">
    <h3>ワークスペースを source する</h3>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash`}</code></pre>
  </div>

  <div className="command-card">
    <h3>制御ノードのみを起動</h3>
    <pre><code>{`ros2 launch rebotarm_bringup driver.launch.py channel:=/dev/ttyACM0`}</code></pre>
  </div>

  <div className="command-card">
    <h3>RViz なしでフルシステムを起動</h3>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0`}</code></pre>
  </div>

  <div className="command-card">
    <h3>RViz 可視化付きで起動</h3>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0 use_rviz:=true`}</code></pre>
  </div>

  <details className="content-details">
    <summary>RViz 表示のヒント</summary>
    <ul>
      <li><code>{`Fixed Frame`}</code> を <code>{`base_link`}</code> に設定します。</li>
      <li><code>{`Target Frame`}</code> を <code>{`base_link`}</code> に設定します。</li>
      <li>モデルが小さく見える場合は、<code>{`Distance`}</code> を <code>{`1.0`}</code> または <code>{`1.5`}</code> 前後に調整します。</li>
      <li>マウスホイールでズームし、ジョイントの動きを確認します。</li>
    </ul>
  </details>

  <details className="content-details">
    <summary>ネームスペース設定</summary>
    <p>デフォルトのネームスペースは <code>{`/rebotarm`}</code> です。複数のアームを使用する場合は、起動時にネームスペースを変更します：</p>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py arm_namespace:=left_arm`}</code></pre>
  </details>
</section>

<section id="api" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>ROS2 API を検証する</h2>
      <p>まず読み取り専用トピックと安全なサービスから始め、その後モーションアクションをテストします。</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card">
      <b>ステータストピック</b>
      <span>最初にこれらを使用します。読み取り専用であり、コントローラが生きていて状態を配信していることを確認するのに役立ちます。</span>
    </div>
    <div className="module-summary-card">
      <b>サービス</b>
      <span>有効化、無効化、安全なホーム位置への復帰、ゼロ設定、モード切り替え、グリッパ設定、重力補償の開始／停止にサービスを使用します。</span>
    </div>
    <div className="module-summary-card">
      <b>アクション</b>
      <span>姿勢モーション、ジョイント軌道追従、グリッパコマンドにアクションを使用します。アクションはロボットを動かすため、慎重にテストしてください。</span>
    </div>
  </div>

  <details className="content-details" open>
    <summary>ステータストピック</summary>
    <div className="table-wrap">
      <table>
        <thead><tr><th>API</th><th>Type</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>{`/rebotarm/joint_states`}</code></td><td><code>{`sensor_msgs/msg/JointState`}</code></td><td>6 軸ジョイントの位置、速度、および力</td></tr>
          <tr><td><code>{`/rebotarm/arm_status`}</code></td><td><code>{`rebotarm_msgs/msg/ArmStatus`}</code></td><td>制御モード、有効状態、ステートマシン、およびエラーコード</td></tr>
          <tr><td><code>{`/rebotarm/joints/&lt;joint&gt;/state`}</code></td><td><code>{`rebotarm_msgs/msg/JointMotorState`}</code></td><td>単一ジョイントのモータ状態</td></tr>
          <tr><td><code>{`/rebotarm/gripper/state`}</code></td><td><code>{`rebotarm_msgs/msg/JointMotorState`}</code></td><td>グリッパモータの状態</td></tr>
        </tbody>
      </table>
    </div>
    <pre><code>{`ros2 topic echo /rebotarm/joint_states --once
ros2 topic echo /rebotarm/arm_status --once`}</code></pre>
  </details>

  <details className="content-details">
    <summary>一般的なサービス</summary>
    <div className="table-wrap">
      <table>
        <thead><tr><th>API</th><th>Type</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>{`/rebotarm/enable`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>ロボットアームを有効化</td></tr>
          <tr><td><code>{`/rebotarm/disable`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>ロボットアームを無効化</td></tr>
          <tr><td><code>{`/rebotarm/safe_home`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>安全なホーム位置に戻す</td></tr>
          <tr><td><code>{`/rebotarm/set_mode`}</code></td><td><code>{`rebotarm_msgs/srv/SetMode`}</code></td><td><code>{`mit`}</code>、<code>{`pos_vel`}</code>、<code>{`vel`}</code> の間で切り替え</td></tr>
          <tr><td><code>{`/rebotarm/set_zero`}</code></td><td><code>{`rebotarm_msgs/srv/SetZero`}</code></td><td>全ジョイントまたは単一ジョイントのゼロ位置を設定</td></tr>
          <tr><td><code>{`/rebotarm/move_to_pose_ik`}</code></td><td><code>{`rebotarm_msgs/srv/MoveToPoseIK`}</code></td><td>IK の事前チェックと目標ジョイント解の取得</td></tr>
          <tr><td><code>{`/rebotarm/gripper/set`}</code></td><td><code>{`rebotarm_msgs/srv/SetGripper`}</code></td><td>グリッパモータの位置をラジアンで設定</td></tr>
          <tr><td><code>{`/rebotarm/gravity_compensation/start`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>重力補償を開始</td></tr>
          <tr><td><code>{`/rebotarm/gravity_compensation/stop`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>重力補償を停止</td></tr>
        </tbody>
      </table>
    </div>
  </details>

  <details className="content-details">
    <summary>モーションアクション</summary>
    <div className="table-wrap">
      <table>
        <thead><tr><th>API</th><th>タイプ</th><th>説明</th></tr></thead>
        <tbody>
          <tr><td><code>{`/rebotarm/move_to_pose`}</code></td><td><code>{`rebotarm_msgs/action/MoveToPose`}</code></td><td>エンドエフェクタの姿勢モーション</td></tr>
          <tr><td><code>{`/rebotarm/follow_joint_trajectory`}</code></td><td><code>{`control_msgs/action/FollowJointTrajectory`}</code></td><td>標準的なジョイント軌道に対応したエントリポイント</td></tr>
          <tr><td><code>{`/rebotarm/gripper/command`}</code></td><td><code>{`control_msgs/action/GripperCommand`}</code></td><td>標準的なグリッパーアクション</td></tr>
        </tbody>
      </table>
    </div>
  </details>
</section>

<section id="examples" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Step 4</span>
    <div>
      <h2>基本的な制御サンプルを実行する</h2>
      <p>コントローラが動作しており、ジョイント状態フィードバックが正しいことを確認した後に、これらのコマンドを使用します。</p>
    </div>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>動作前の安全チェック</strong>
      <p>小さな目標値と長めの時間を使用し、作業空間を常にクリアに保ってください。いつでもコントローラを停止できるよう準備しておきましょう。</p>
    </div>
  </div>

  <div className="step-card-grid small">
    <div className="step-card">
      <span className="step-mini">4.1</span>
      <strong>アームを有効化する</strong>
      <p>作業空間がクリアであり、ジョイント状態が有効であることを確認してから有効化してください。</p>
    </div>
    <div className="step-card">
      <span className="step-mini">4.2</span>
      <strong>姿勢へ移動する</strong>
      <p>まずは現在の姿勢に近い保守的な姿勢を使用してください。</p>
    </div>
    <div className="step-card">
      <span className="step-mini">4.3</span>
      <strong>ジョイント目標を送信する</strong>
      <p>小さなラジアン値と長い time_from_start を使用してください。</p>
    </div>
    <div className="step-card">
      <span className="step-mini">4.4</span>
      <strong>安全なホームポジションに戻して無効化する</strong>
      <p>各テストの最後には、安全なホームポジションに戻し、ロボットを無効化してください。</p>
    </div>
  </div>

  <details className="content-details" open>
    <summary>4.1 ロボットアームを有効化する</summary>
    <pre><code>{`ros2 service call /rebotarm/enable std_srvs/srv/Trigger`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>4.2 エンドエフェクタの姿勢へ移動する</summary>
    <pre><code>{`ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {x: 0.0, y: 0.0, z: 0.0, w: 1.0}}, duration: 2.0}"`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>4.3 ジョイント目標を送信する</summary>
    <pre><code>{`ros2 action send_goal /rebotarm/follow_joint_trajectory \
  control_msgs/action/FollowJointTrajectory \
  "{trajectory: {joint_names: ['joint1','joint2','joint3','joint4','joint5','joint6'],
    points: [{positions: [0.1,0,0,0,0,0], time_from_start: {sec: 5}}]}}"`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>4.4 安全なホームポジションに戻して無効化する</summary>
    <pre><code>{`ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger`}</code></pre>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>サンプル</span>
    <h2>デモコマンド</h2>
    <p>これらのサンプルは、<code>{`reBotArmController`}</code> がすでに実行中であることを前提としています。</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card">
      <b>ジョイントモーション</b>
      <span>すべてのジョイント、または選択したジョイントにラジアン単位の目標値を送信します。</span>
    </div>
    <div className="module-summary-card">
      <b>エンドエフェクタ姿勢</b>
      <span>SDK の姿勢コントローラを使用して、TCP を指定したデカルト姿勢に移動します。</span>
    </div>
    <div className="module-summary-card">
      <b>重力補償</b>
      <span>ROS2 ノードを通じて重力補償を開始し、サービス呼び出しで安全に停止します。</span>
    </div>
    <div className="module-summary-card">
      <b>インタラクティブグリッパー</b>
      <span>ターミナルの対話ループを通じてグリッパーを開閉します。</span>
    </div>
  </div>

  <details className="content-details" open>
    <summary>ジョイントモーションの例</summary>
    <pre><code>{`ros2 run rebotarmcontroller MoveTo -- \
  0.20 -0.20 -0.20 -0.20 0.10 -0.10 \
  --duration 8.0

ros2 run rebotarmcontroller MoveTo -- --joint joint3 --position -0.20 --duration 5.0`}</code></pre>
  </details>

  <details className="content-details">
    <summary>エンドエフェクタ姿勢の例</summary>
    <pre><code>{`ros2 run rebotarmcontroller MoveToPose -- --x 0.30 --y 0.0 --z 0.30 --qw 1.0 --duration 2.0`}</code></pre>
  </details>

  <details className="content-details">
    <summary>重力補償の例</summary>
    <pre><code>{`ros2 run rebotarmcontroller GravityCompensation`}</code></pre>
    <p><code>{`Ctrl+C`}</code> を押すと、スクリプトは次のサービスをこの順序で呼び出します：</p>
    <ol>
      <li><code>{`/rebotarm/gravity_compensation/stop`}</code></li>
      <li><code>{`/rebotarm/safe_home`}</code></li>
      <li><code>{`/rebotarm/disable`}</code></li>
    </ol>
  </details>

  <details className="content-details">
    <summary>インタラクティブグリッパーの例</summary>
    <pre><code>{`ros2 run rebotarmcontroller GripperControl

# o / open    Open the gripper
# c / close   Close the gripper
# q / quit    Quit`}</code></pre>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>設定</span>
    <h2>設定ファイルと低レベルトピック</h2>
    <p>
      既定の設定ファイルは
      <code>{` src/rebotarm_bringup/config/`}</code> 配下にあります。可能な限りアプリケーションレベルのサービス
      とアクションを使用してください。低レベルのモータトピックはデバッグ用途を想定しています。
    </p>
  </div>

  <div className="two-col">
    <div className="info-card">
      <h3>設定ファイル</h3>
      <ul>
        <li><code>{`arm.yaml`}</code>: 6 つのアームジョイント用のモータ、フィードバック ID、および制御パラメータ</li>
        <li><code>{`gripper.yaml`}</code>: グリッパーモータ ID、フィードバック ID、ベンダー、および制御パラメータ</li>
        <li><code>{`driver_params.yaml`}</code>: ROS パラメータの例</li>
      </ul>
    </div>
    <div className="info-card">
      <h3>一般的な起動パラメータ</h3>
      <ul>
        <li><code>{`channel`}</code>: <code>{`/dev/ttyACM0`}</code> などのシリアルポート</li>
        <li><code>{`joint_state_rate`}</code>: <code>{`/rebotarm/joint_states`}</code> のパブリッシュレート</li>
        <li><code>{`cmd_arbitration`}</code>: <code>{`reject`}</code> または <code>{`preempt`}</code></li>
        <li><code>{`arm_namespace`}</code>: 名前空間プレフィックス。既定値は <code>{`rebotarm`}</code></li>
        <li><code>{`use_rviz`}</code>: RViz を起動するかどうか</li>
      </ul>
    </div>
  </div>

  <div className="callout danger">
    <strong>低レベルトピックはデバッグ専用です：</strong> これらは IK、軌道計画、URDF 制限チェックを実行しません。アプリケーションレベルのモーションには、<code>{`/move_to_pose`}</code>、<code>{`/follow_joint_trajectory`}</code>、<code>{`/gripper/set`}</code> を優先して使用してください。
  </div>
</section>

<section id="moveit" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Step 5</span>
    <div>
      <h2>MoveIt 2 を使用する</h2>
      <p>
        MoveIt 2 は逆運動学、衝突チェック、軌道計画、
        および軌道実行を提供します。実機を接続する前に、まずシミュレーションから始めてください。
      </p>
    </div>
  </div>

  <div className="step-card-grid small">
    <div className="step-card">
      <span className="step-mini">5.1</span>
      <strong>MoveIt パッケージをインストールする</strong>
      <p>使用している ROS ディストリビューション向けに、MoveIt、ros2_control、コントローラ、および xacro パッケージをインストールします。</p>
    </div>
    <div className="step-card">
      <span className="step-mini">5.2</span>
      <strong>デモをビルドして検証する</strong>
      <p>ワークスペースを再ビルドし、MoveIt パッケージとデモ実行ファイルが利用可能であることを確認します。</p>
    </div>
    <div className="step-card">
      <span className="step-mini">5.3</span>
      <strong>まずシミュレーションを実行する</strong>
      <p>MoveIt のデモ用 launch を使用してシミュレートされたハードウェアで動作させ、RViz でモーションを確認します。</p>
    </div>
    <div className="step-card">
      <span className="step-mini">5.4</span>
      <strong>実機ハードウェアを接続する</strong>
      <p>ハードウェアドライバを起動し、計画された経路を検証した後にのみ、ハードウェア用 MoveIt 環境を起動してください。</p>
    </div>
    <div className="step-card">
      <span className="step-mini">5.5</span>
      <strong>アプリケーションデモを実行する</strong>
      <p>すべてのフレーム、制限、およびグリッパーパラメータを確認した後に、draw-square と pick-place を試してください。</p>
    </div>
  </div>

  <details className="content-details" open>
    <summary>5.1 MoveIt 2 パッケージをインストールする</summary>
    <pre><code>{`sudo apt update
sudo apt install -y \
  ros-\${ROS_DISTRO}-moveit \
  ros-\${ROS_DISTRO}-moveit-configs-utils \
  ros-\${ROS_DISTRO}-moveit-kinematics \
  ros-\${ROS_DISTRO}-moveit-planners-ompl \
  ros-\${ROS_DISTRO}-moveit-simple-controller-manager \
  ros-\${ROS_DISTRO}-ros2-control \
  ros-\${ROS_DISTRO}-ros2-controllers \
  ros-\${ROS_DISTRO}-xacro`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>5.2 MoveIt パッケージを再ビルドして検証する</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
colcon build --symlink-install
source install/setup.bash

ros2 pkg list | grep rebotarm_moveit
ros2 pkg executables rebotarm_moveit_demos`}</code></pre>
    <p>想定されるエントリは次のとおりです：</p>
    <pre><code>{`rebotarm_moveit_demos draw_square
rebotarm_moveit_demos pick_place`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>5.3 シミュレーションで MoveIt を使用する</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py

# Without RViz:
ros2 launch rebotarm_moveit_config demo.launch.py use_rviz:=false`}</code></pre>
  </details>

  <details className="content-details">
    <summary>5.4 実機ハードウェアで MoveIt を使用する</summary>
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>ハードウェア実行前の安全確認</strong>
        <p>ロボットの作業空間を片付け、RViz で計画経路を確認し、いつでもコントローラを停止できるように準備してください。</p>
      </div>
    </div>
    <pre><code>{`ros2 launch rebotarm_bringup driver.launch.py channel:=/dev/ttyACM0

# In another terminal:
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py`}</code></pre>
  </details>

  <details className="content-details">
    <summary>5.5 draw-square デモを実行する</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py`}</code></pre>
    <p><code>{`draw_square`}</code> は、<code>{`gripper_tcp`}</code> を同一平面上の長方形の 4 つの頂点を通過させて動かします。デフォルトパラメータは <code>{`src/rebotarm_moveit_demos/config/draw_square.yaml`}</code> に保存されています。</p>
  </details>

  <details className="content-details">
    <summary>5.6 pick-place デモを実行する</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos pick_place.launch.py`}</code></pre>
    <p><code>{`pick_place`}</code> は、<code>{`src/rebotarm_moveit_demos/config/pick_place.yaml`}</code> で定義されたレディポーズ、物体寸法、ピック／プレース時の TCP 姿勢、およびグリッパの開閉位置を使用します。</p>
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>よくある問題と対処方法</h2>
    <p>ROS2 がデバイスを開けない、RViz にモデルが表示されない、または MoveIt が実行に失敗する場合は、このセクションを参照してください。</p>
  </div>

  <div className="faq-grid">
    <details className="content-details" open>
      <summary>1. 起動時に <code>{`open serial port /dev/ttyACM0 failed`}</code> と表示される</summary>
      <p>デフォルトのシリアルポートが存在しないか、デバイス名が変更されています。実際のシリアルデバイスを確認し、それを <code>{`channel`}</code> に渡してください。</p>
      <pre><code>{`ls /dev/ttyACM*
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM1`}</code></pre>
    </details>

    <details className="content-details">
      <summary>2. 起動時に <code>{`Device or resource busy`}</code> と表示される</summary>
      <p>シリアルポートが、以前の ROS2 ノード、SDK のサンプル、デバッグスクリプトなど別のプロセスによって占有されています。</p>
      <pre><code>{`ps aux | grep -E "reBotArmController|ros2|python"`}</code></pre>
    </details>

    <details className="content-details">
      <summary>3. Permission denied と表示される</summary>
      <p>現在のユーザーを <code>{`dialout`}</code> グループに追加するか、一時的に権限を付与します。</p>
      <pre><code>{`sudo usermod -a -G dialout $USER
sudo chmod 666 /dev/ttyACM0`}</code></pre>
    </details>

    <details className="content-details">
      <summary>4. RViz にロボットモデルが表示されない</summary>
      <p>ワークスペースが source 済みか、<code>{`Fixed Frame`}</code> が <code>{`base_link`}</code> に設定されているか、<code>{`robot_state_publisher`}</code> が正しく起動しているかを確認してください。</p>
    </details>

    <details className="content-details">
      <summary>5. FastDDS SHM ポートの警告が表示される</summary>
      <p>これは通常、以前の ROS2 プロセスが異常終了した後に残った FastDDS 共有メモリのロックファイルが原因です。</p>
      <pre><code>{`pkill -f ros2
pkill -f reBotArmController
rm -f /dev/shm/fastrtps_port*

# Optional bypass:
export FASTDDS_BUILTIN_TRANSPORTS=UDPv4`}</code></pre>
    </details>

    <details className="content-details">
      <summary>6. <code>{`pinocchio`}</code> が見つからない</summary>
      <pre><code>{`sudo apt install -y ros-jazzy-pinocchio
source /opt/ros/jazzy/setup.bash
python3 -c "import pinocchio; print(pinocchio.__version__)"`}</code></pre>
    </details>
  </div>
</section>

<section className="course-path-section section-card">
  <div className="section-title">
    <span>学習を続ける</span>
    <h2>reBot B601-DM 学習パス</h2>
    <p>
      これらのチュートリアルは Robotics ページと同じ順序に従います：Getting Started →
      LeRobot → Pinocchio → Visual Grasping → ROS2。以下のリンクを使って
      モジュール間を移動できます。
    </p>
  </div>

  <div className="course-path-grid">
    <a className="course-path-item" href="/ja/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy">
        <strong>Getting Started</strong>
        <span>開封、配線、電源チェック、ドライバ設定、キャリブレーション、基本的な動作テストを一通り完了します。</span>
      </span>
      <span className="course-tag">ここから開始</span>
    </a>
    <a className="course-path-item" href="/ja/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy">
        <strong>LeRobot テレオペレーションとデータ収集</strong>
        <span>アームをテレオペレートし、カメラを接続し、データセットを記録し、ポリシーを学習させ、実機アームの挙動を評価します。</span>
      </span>
      <span className="course-tag">データ収集</span>
    </a>
    <a className="course-path-item" href="/ja/rebot_arm_b601_dm_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy">
        <strong>Pinocchio による運動学の可視化</strong>
        <span>ロボットモデル、座標フレーム、順運動学／逆運動学、軌道計画、重力補償について理解します。</span>
      </span>
      <span className="course-tag">制御</span>
    </a>
    <a className="course-path-item" href="/ja/rebot_arm_b601_dm_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy">
        <strong>Visual Grasping デモ</strong>
        <span>RGB-D 認識、YOLO／OBB または GraspNet、ハンドアイキャリブレーション、実物体の把持を組み合わせます。</span>
      </span>
      <span className="course-tag">アプリケーション</span>
    </a>
    <a className="course-path-item active" href="/ja/rebot_arm_b601_dm_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy">
        <strong>ROS2 統合</strong>
        <span>アームを ROS2、RViz、MoveIt 2、標準サービス、アクション、およびプランニングワークフローに接続します。</span>
      </span>
      <span className="course-tag">現在の記事</span>
    </a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>参考資料</span>
    <h2>参考資料</h2>
  </div>
  <div className="reference-grid">
    <a href="https://wiki.seeedstudio.com/ja/rebot_b601_dm_getting_started/">reBot Arm B601-DM Getting Started</a>
    <a href="https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_lerobot/">reBot Arm B601-DM LeRobot Tutorial</a>
    <a href="https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_pinocchio_meshcat/">reBot Arm B601-DM Pinocchio and MeshCat</a>
    <a href="https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_grasping_demo/">reBot Arm B601-DM Visual Grasping Demo</a>
    <a href="https://docs.ros.org/en/humble/">ROS2 Humble Documentation</a>
    <a href="https://docs.ros.org/en/jazzy/">ROS2 Jazzy Documentation</a>
    <a href="https://github.com/vectorBH6/reBotArm_control_py">reBotArm_control_py</a>
  </div>
</section>

</div>

<style>{`
.rebot-page {
  --rb-bg: #ffffff;
  --rb-surface: #ffffff;
  --rb-surface-soft: #f8fafc;
  --rb-text: #111827;
  --rb-muted: #64748b;
  --rb-border: rgba(148, 163, 184, 0.28);
  --rb-primary: #2563eb;
  --rb-primary-soft: #eff6ff;
  --rb-accent: #14b8a6;
  --rb-accent-soft: #ccfbf1;
  --rb-warning: #f59e0b;
  --rb-danger: #ef4444;
  --rb-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  width: 100%;
}

.doc-hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr);
  gap: 1.5rem;
  padding: 2rem;
  margin: 1.5rem 0 1.25rem;
  border: 1px solid var(--rb-border);
  border-radius: 26px;
  background:
    radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%),
    radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%),
    linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92));
  box-shadow: var(--rb-shadow);
  overflow: hidden;
}

.eyebrow {
  display: inline-flex;
  margin-bottom: 0.6rem;
  color: var(--rb-primary);
  font-size: 0.78rem;
  font-weight: 850;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.doc-hero h2 {
  margin: 0 0 0.8rem;
  color: var(--rb-text);
  font-size: clamp(1.6rem, 3vw, 2.35rem);
  line-height: 1.18;
}

.doc-hero p {
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.75;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.2rem;
}

.hero-actions a {
  display: inline-flex;
  padding: 0.72rem 1rem;
  border-radius: 999px;
  text-decoration: none !important;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent));
  box-shadow: 0 12px 24px rgba(37,99,235,0.18);
}

.hero-actions a:nth-child(n+2) {
  color: var(--rb-primary);
  background: var(--rb-primary-soft);
  box-shadow: none;
}

.hero-card {
  position: relative;
  z-index: 1;
  display: grid;
  align-content: center;
  gap: 0.75rem;
  padding: 1.1rem;
  border-radius: 18px;
  background: rgba(255,255,255,0.78);
  border: 1px solid rgba(148,163,184,0.22);
  box-shadow: 0 10px 26px rgba(15,23,42,0.06);
  backdrop-filter: blur(10px);
}

.hero-card img {
  width: 100%;
  border-radius: 14px;
  border: 1px solid var(--rb-border);
}

.hero-card strong {
  color: var(--rb-text);
}

.hero-card span {
  color: var(--rb-muted);
  font-size: 0.92rem;
  line-height: 1.55;
}

.doc-nav {
  position: sticky;
  top: 0.75rem;
  z-index: 5;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0.65rem;
  padding: 0.7rem;
  margin: 1.1rem 0 2rem;
  border-radius: 18px;
  background: rgba(255,255,255,0.88);
  border: 1px solid var(--rb-border);
  box-shadow: 0 12px 28px rgba(15,23,42,0.07);
  backdrop-filter: blur(14px);
}

.doc-nav a {
  text-align: center;
  padding: 0.72rem 0.7rem;
  border-radius: 13px;
  color: #334155;
  background: var(--rb-surface-soft);
  text-decoration: none !important;
  font-weight: 800;
  font-size: 0.88rem;
  transition: all 0.2s ease;
}

.doc-nav a:hover {
  color: var(--rb-primary);
  background: #fff;
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(37,99,235,0.12);
}

.section-card {
  margin: 1.6rem 0;
  padding: 1.45rem;
  border-radius: 22px;
  background: var(--rb-surface);
  border: 1px solid var(--rb-border);
  box-shadow: 0 10px 30px rgba(15,23,42,0.055);
}

.section-title {
  margin-bottom: 1rem;
}

.section-title span {
  color: var(--rb-primary);
  font-size: 0.76rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section-title h2 {
  margin: 0.18rem 0 0.45rem;
  color: var(--rb-text);
}

.section-title p {
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.65;
}

.step-title-row {
  display: flex;
  align-items: flex-start;
  gap: 0.95rem;
  margin-bottom: 1rem;
}

.step-pill,
.step-mini {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent));
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(37,99,235,0.22);
}

.step-pill {
  min-width: 4.6rem;
  height: 2.35rem;
}

.step-title-row h2 {
  margin: 0 0 0.35rem;
  color: var(--rb-text);
}

.step-title-row p {
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.65;
}

.step-card-grid,
.module-summary-grid,
.spec-card-grid,
.two-col,
.faq-grid,
.reference-grid {
  display: grid;
  gap: 1rem;
  margin: 1rem 0 1.35rem;
}

.step-card-grid {
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
}

.step-card-grid.small {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.module-summary-grid,
.two-col {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.spec-card-grid {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.faq-grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.reference-grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.step-card,
.module-summary-card,
.spec-card,
.info-card,
.content-details,
.tip-card,
.command-card,
.reference-grid a {
  padding: 1rem 1.05rem;
  border: 1px solid var(--rb-border);
  border-radius: 18px;
  background: linear-gradient(180deg, var(--rb-surface), var(--rb-surface-soft));
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
  text-decoration: none !important;
}

.step-card {
  color: inherit;
  transition: all 0.2s ease;
}

.step-card:hover {
  transform: translateY(-2px);
  border-color: rgba(37,99,235,0.35);
  box-shadow: 0 16px 32px rgba(37,99,235,0.10);
}

.step-card.recommended {
  border-color: rgba(37, 99, 235, 0.42);
  background: linear-gradient(135deg, rgba(239, 246, 255, 0.92), rgba(240, 253, 250, 0.78));
}

.step-card .step-mini {
  min-width: 2.1rem;
  height: 2.1rem;
  padding: 0 0.65rem;
  margin-bottom: 0.65rem;
  font-size: 0.86rem;
}

.step-card strong,
.module-summary-card b,
.spec-card strong,
.info-card h3,
.command-card h3 {
  display: block;
  color: var(--rb-text);
  margin: 0 0 0.35rem;
}

.step-card p,
.step-card span,
.module-summary-card span,
.spec-card span,
.info-card li,
.tip-card span {
  display: block;
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.65;
}

.step-card em {
  display: inline-flex;
  width: fit-content;
  margin-top: 0.75rem;
  padding: 0.32rem 0.62rem;
  border-radius: 999px;
  color: var(--rb-primary);
  background: var(--rb-primary-soft);
  font-style: normal;
  font-size: 0.78rem;
  font-weight: 850;
}

.command-card pre,
.content-details pre {
  margin: 0.75rem 0 0;
}

.content-details summary {
  cursor: pointer;
  color: var(--rb-text);
  font-weight: 850;
}

.callout {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 16px;
  border: 1px solid var(--rb-border);
  background: var(--rb-surface-soft);
  color: var(--rb-muted);
  line-height: 1.65;
}

.callout.warning {
  border-color: rgba(245, 158, 11, 0.35);
  background: #fffbeb;
  color: #92400e;
}

.callout.danger {
  border-color: rgba(239, 68, 68, 0.35);
  background: #fef2f2;
  color: #991b1b;
}

.link-grid {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.link-grid a,
.reference-grid a {
  color: var(--rb-primary);
  font-weight: 800;
}

.table-wrap {
  overflow-x: auto;
}

.safety-alert {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.9rem;
  align-items: flex-start;
  margin: 1.2rem 0 1.6rem;
  padding: 1.05rem 1.15rem;
  border-radius: 18px;
  border: 1px solid rgba(239, 68, 68, 0.38);
  background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92));
  color: #7f1d1d;
  box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12);
}

.safety-alert-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 999px;
  background: #fee2e2;
  color: #dc2626;
  font-size: 1.25rem;
  line-height: 1;
  flex-shrink: 0;
}

.safety-alert-content strong {
  display: block;
  margin-bottom: 0.45rem;
  color: #991b1b;
  font-size: 1.05rem;
  font-weight: 900;
}

.safety-alert-content p,
.safety-alert-content ul {
  margin: 0;
  color: #7f1d1d;
  line-height: 1.68;
}

.safety-alert-content ul {
  margin-top: 0.65rem;
  padding-left: 1.2rem;
}

.safety-alert-content li + li {
  margin-top: 0.35rem;
}

.safety-alert.compact {
  margin: 1rem 0;
  padding: 0.9rem 1rem;
  border-radius: 16px;
}

.course-path-section {
  margin-top: 2rem;
}

.course-path-grid {
  display: grid;
  gap: 0.85rem;
  margin-top: 1rem;
}

.course-path-item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 0.95rem;
  align-items: center;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border);
  background: var(--rb-surface);
  text-decoration: none !important;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}

.course-path-item.active {
  border-color: rgba(37, 99, 235, 0.45);
  background: linear-gradient(135deg, rgba(37,99,235,0.08), rgba(20,184,166,0.06));
}

.course-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.45rem;
  height: 2.45rem;
  border-radius: 999px;
  color: #fff;
  background: var(--rb-primary);
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(37,99,235,0.24);
}

.course-path-copy strong {
  display: block;
  color: var(--rb-text);
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.course-path-copy span {
  display: block;
  color: var(--rb-muted);
  line-height: 1.6;
}

.course-tag {
  justify-self: end;
  white-space: nowrap;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  color: var(--rb-primary);
  background: var(--rb-primary-soft);
  border: 1px solid rgba(37,99,235,0.18);
  font-style: normal;
  font-weight: 800;
  font-size: 0.78rem;
}

html[data-theme='dark'] .rebot-page {
  --rb-bg: #111827;
  --rb-surface: #1f2023;
  --rb-surface-soft: #24262a;
  --rb-text: #f9fafb;
  --rb-muted: #a1a1aa;
  --rb-border: #343840;
  --rb-primary: #60a5fa;
  --rb-primary-soft: rgba(96,165,250,0.14);
  --rb-accent: #2dd4bf;
  --rb-shadow: 0 18px 42px rgba(0,0,0,0.34);
}

html[data-theme='dark'] .doc-hero {
  background:
    radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%),
    radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%),
    linear-gradient(135deg, #1f2023, #16181d);
}

html[data-theme='dark'] .hero-card,
html[data-theme='dark'] .doc-nav,
html[data-theme='dark'] .step-card,
html[data-theme='dark'] .module-summary-card,
html[data-theme='dark'] .spec-card,
html[data-theme='dark'] .info-card,
html[data-theme='dark'] .content-details,
html[data-theme='dark'] .tip-card,
html[data-theme='dark'] .command-card,
html[data-theme='dark'] .reference-grid a,
html[data-theme='dark'] .course-path-item {
  background: rgba(31, 32, 35, 0.86);
}

html[data-theme='dark'] .step-card.recommended,
html[data-theme='dark'] .course-path-item.active {
  background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12));
}

html[data-theme='dark'] .callout.warning {
  background: rgba(245, 158, 11, 0.12);
  color: #fde68a;
}

html[data-theme='dark'] .callout.danger {
  background: rgba(239, 68, 68, 0.12);
  color: #fecaca;
}

html[data-theme='dark'] .safety-alert {
  border-color: rgba(248, 113, 113, 0.42);
  background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18));
  color: #fecaca;
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28);
}

html[data-theme='dark'] .safety-alert-icon {
  background: rgba(248, 113, 113, 0.18);
  color: #fca5a5;
}

html[data-theme='dark'] .safety-alert-content strong,
html[data-theme='dark'] .safety-alert-content p,
html[data-theme='dark'] .safety-alert-content ul {
  color: #fecaca;
}

@media (max-width: 900px) {
  .doc-hero {
    grid-template-columns: 1fr;
  }

  .doc-nav {
    position: static;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .course-path-item {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .course-tag {
    grid-column: 2;
    justify-self: start;
  }
}

@media (max-width: 560px) {
  .doc-hero,
  .section-card {
    padding: 1.1rem;
    border-radius: 18px;
  }

  .doc-nav {
    grid-template-columns: 1fr;
  }

  .safety-alert {
    grid-template-columns: 1fr;
  }
}
`}</style>
