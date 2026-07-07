---
description: このチュートリアルでは、SocketCAN 接続、アーム制御、RViz 可視化、MoveIt 2 連携を含む reBot Arm B601-RS 用の ROS2 制御ワークスペースのセットアップ方法を説明します。
title: reBot Arm B601-RS ROS2 連携
keywords:
  - reBot Arm
  - B601-RS
  - ROS2
  - Humble
  - Jazzy
  - SocketCAN
  - RViz
  - MoveIt 2
  - Robot Arm
  - Robotics
slug: /rebot_arm_b601_rs_ros2_integration
last_update:
  date: 2026-07-05
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-06-10'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_ros2_integration/
---

# reBot Arm B601-RS ROS2 連携

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>SocketCAN、RViz、MoveIt 2 を用いて B601-RS 用の ROS2 制御ワークスペースを構築する</h2>
    <p>このガイドでは、低レベルの B601-RS 制御スタックを ROS2 ワークフローへと変換します。SocketCAN を立ち上げ、ROS2 ワークスペースをビルドし、トピックとサービスを検証し、安全な制御サンプルを実行してから、MoveIt 2 シミュレーションから実機実行へと移行します。</p>
    <div className="hero-actions">
      <a href="#quick-start">ワークフローを見る</a>
      <a href="#install">ワークスペースをインストール</a>
      <a href="#moveit">MoveIt 2</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/ros2/MoveIt2_RS.gif" alt="reBot Arm B601-RS ROS2 Integration" />
    <strong>B601-RS · ROS2 / MoveIt 2</strong>
    <span>まずシミュレーションを使用してください。CAN、関節状態、および計画軌道を検証した後にのみ、実機で実行してください。</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全上の警告：実行前にロボット作業空間を必ず片付けてください</strong>
    <p>ロボットアームを動かすプログラムを実行する前に、ロボット作業空間の<strong>半径 1 メートル</strong>以内にある貴重品、壊れやすい物、工具、ケーブル、および無関係な物体をすべて取り除いてください。デバッグおよび動作中は、作業者はロボットの動作範囲から離れている必要があります。</p>
    <ul>
      <li>ロボットアームの電源投入後は、関節、モーター、リンク、グリッパー、エンドエフェクタに触れないでください。</li>
      <li>ROS2 アクション、MoveIt 実行、重力補償、軌道制御、テレオペレーション、ビジュアルグラスピングのデモを実行する前に、アームが確実に固定されていることを確認してください。</li>
      <li>異常な動き、異音、振動、ケーブルの緩み、電源接触不良、通信断が発生した場合は、直ちにプログラムを停止し、点検前にシステムの電源を切ってください。</li>
      <li>モーターケーブル、CAN ケーブル、PCAN-USB アダプタ、XT30 コネクタ、電源コネクタを抜き差しする際は、必ずシステムの電源を切ってください。</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="quick navigation">
  <a href="#quick-start">ワークフロー</a>
  <a href="#overview">概要</a>
  <a href="#install">インストール</a>
  <a href="#bringup">ブリングアップ</a>
  <a href="#api">API</a>
  <a href="#examples">サンプル</a>
  <a href="#moveit">MoveIt 2</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="quick-start" className="section-card">
  <div className="section-title">
    <span>ここから開始</span>
    <h2>推奨 ROS2 ブリングアップワークフロー</h2>
    <p>以下の順序に従って、ハードウェア通信、ROS2 インターフェース、MoveIt 実行を分離してください。これにより、障害の原因を切り分けやすくなり、安全でないロボット動作のリスクを減らせます。</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#install"><span>Step 0</span><strong>B601-RS クイックスタートを完了する</strong><p>48V 電源、PCAN-USB / SocketCAN、ゼロ位置、MotorBridge の確認、および基本的な動作テストを確認します。</p><em>必須</em></a>
    <a className="path-card" href="#install"><span>Step 1</span><strong>ROS2 をインストールしてビルド</strong><p>ROS2 依存パッケージをインストールし、コントローラーワークスペースをクローンし、MotorBridge をインストールして、colcon でビルドします。</p><em>ワークスペース</em></a>
    <a className="path-card" href="#bringup"><span>Step 2</span><strong>ドライバを立ち上げる</strong><p>まずハードウェアドライバを起動し、RViz や MoveIt を追加する前に CAN 通信と関節状態を検証します。</p><em>まずドライバ</em></a>
    <a className="path-card" href="#api"><span>Step 3</span><strong>ROS2 API を検証</strong><p>トピック、サービス、アクションを確認します。モーションアクションの前に、読み取り専用ステータスと安全なサービスから始めてください。</p><em>検証</em></a>
    <a className="path-card" href="#examples"><span>Step 4</span><strong>制御サンプルを実行</strong><p>大きな軌道を試す前に、小さな位置、長い時間、セーフホームコマンドを使用してください。</p><em>安全な動作</em></a>
    <a className="path-card" href="#moveit"><span>Step 5</span><strong>MoveIt 2 を使用</strong><p>まずシミュレーションで計画し、RViz でパスを確認してから、実際のロボットアームで実行します。</p><em>上級</em></a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>詳細ステップ</span>
    <h2>ステップごとの ROS2 ブリングアップパス</h2>
    <p>このページは、段階的なブリングアップワークフローとして構成されています。各ステップで 1 つずつ複雑さのレイヤーを追加していきます。</p>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">Step 0</span><strong>ロボットを準備する</strong><p>48V 電源、配線、ゼロ位置、PCAN-USB、および基本的な MotorBridge チェックを含む B601-RS クイックスタートを完了します。</p></div>
    <div className="step-card"><span className="step-mini">Step 1</span><strong>ROS2 ワークスペースをビルド</strong><p>ROS2 パッケージをインストールし、ワークスペースをクローンし、MotorBridge をインストールし、低レベル SDK を追加して、colcon でビルドします。</p></div>
    <div className="step-card"><span className="step-mini">Step 2</span><strong>ハードウェアドライバを起動</strong><p><code>{`can0`}</code> を立ち上げ、B601-RS ドライバを起動し、関節状態がパブリッシュされていることを確認します。</p></div>
    <div className="step-card"><span className="step-mini">Step 3</span><strong>インターフェースを検証</strong><p>トピック、サービス、アクション、ネームスペース、グリッパーコマンド、およびセーフホーム動作を確認します。</p></div>
    <div className="step-card"><span className="step-mini">Step 4</span><strong>安全なサンプルを実行</strong><p>アプリケーションデモをテストする前に、保守的な関節および姿勢ターゲットと長い時間を使用します。</p></div>
    <div className="step-card"><span className="step-mini">Step 5</span><strong>MoveIt 2 でプランニング</strong><p>まずシミュレーションを実行し、その後に実機を接続し、計画されたパスを確認してからのみ実行します。</p></div>
  </div>
</section>

<section id="overview" className="section-card">
  <div className="section-title">
    <span>概要</span>
    <h2>この ROS2 ワークスペースが提供するもの</h2>
    <p>このワークスペースは、B601-RS の低レベル制御スタックを標準的な ROS2 インターフェースでラップし、アームを RViz、MoveIt 2、およびタスクレベルのロボティクスアプリケーションで使用できるようにします。</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>標準 ROS2 インターフェース</b><span><code>{`/rebotarm/joint_states`}</code> のようなトピックや、<code>{`FollowJointTrajectory`}</code>、<code>{`MoveToPose`}</code> のようなアクションを提供します。</span></div>
    <div className="module-summary-card"><b>SocketCAN 対応</b><span>B601-RS は CAN を介して通信します。デフォルトのチャネルは <code>{`can0`}</code> で、1 Mbps に設定されています。</span></div>
    <div className="module-summary-card"><b>RViz 可視化</b><span>URDF モデルと関節状態を使用して、ロボットの状態を確認し、ブリングアップの問題をデバッグします。</span></div>
    <div className="module-summary-card"><b>MoveIt 2 連携</b><span>MoveIt 2 を使用して、IK、衝突チェック、軌道計画、シミュレーション実行、および実機実行を行います。</span></div>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>ハードウェア</span>
    <h2>仕様と要件</h2>
    <p>ROS2 ワークスペースを構築する前に、B601-RS のハードウェアおよびソフトウェア要件を確認してください。</p>
  </div>

  <div className="spec-grid">
    <div className="spec-card"><b>ロボットアーム</b><span>reBot Arm B601-RS</span></div>
    <div className="spec-card"><b>自由度</b><span>6-DOF + グリッパー</span></div>
    <div className="spec-card"><b>通信</b><span>SocketCAN 経由の CAN</span></div>
    <div className="spec-card"><b>デフォルト CAN チャネル</b><span><code>{`can0`}</code></span></div>
    <div className="spec-card"><b>デフォルト制御モード</b><span><code>{`mit`}</code></span></div>
    <div className="spec-card"><b>推奨システム</b><span>Ubuntu 24.04 + ROS2 Jazzy + Python 3.12</span></div>
    <div className="spec-card"><b>参考システム</b><span>Ubuntu 22.04 + ROS2 Humble + Python 3.10</span></div>
    <div className="spec-card"><b>電源</b><span>B601-RS 用 48V DC 電源</span></div>
  </div>

  <details className="content-details" open>
    <summary>部品表（Bill of Materials）</summary>

    | コンポーネント | 数量 | 同梱 |
    |---|---|---|
    | reBot Arm B601-RS ロボットアーム | 1 | ✅ |
    | グリッパー | 1 | ✅ |
    | CAN アダプタ | 1 | ✅ |
    | 電源アダプタ | 1 | ✅ |
    | 通信ケーブル | 1 | ✅ |
    | Ubuntu ホスト PC | 1 | 自前で用意 |
  </details>

  <details className="content-details" open>
    <summary>配線と CAN チェック</summary>

    <div className="step-card-grid compact-grid">
      <div className="step-card"><span className="step-mini">1</span><strong>CAN アダプタを接続</strong><p>CAN アダプタをロボットアームの CAN バスに接続します。</p></div>
      <div className="step-card"><span className="step-mini">2</span><strong>グリッパーを接続</strong><p>グリッパーモーターを同じ CAN バスに接続します。</p></div>
      <div className="step-card"><span className="step-mini">3</span><strong>アームに給電</strong><p>48V 電源を接続し、CAN アダプタをホスト PC に接続します。</p></div>
      <div className="step-card"><span className="step-mini">4</span><strong>CAN を立ち上げる</strong><p>CAN インターフェースを確認し、ビットレートを 1 Mbps に設定します。</p></div>
    </div>

    <pre><code>{`ip -br link

sudo modprobe peak_usb
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
ip -details link show can0`}</code></pre>
  </details>
</section>

<section id="install" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 1</span>
    <div>
      <h2>ROS2 をインストールしてワークスペースをビルドする</h2>
      <p>使用している Ubuntu バージョンに対応する ROS2 パッケージをインストールし、その後 reBot ROS2 ワークスペースをクローン、設定、ビルドします。</p>
    </div>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">1.0</span><strong>B601-RS クイックスタートを完了する</strong><p>ROS2 連携の前に、基本セットアップ、ゼロ位置初期化、PCAN-USB / SocketCAN の確認を完了してください。</p></div>
    <div className="step-card"><span className="step-mini">1.1</span><strong>ROS2 をインストールする</strong><p>Ubuntu 24.04 では Jazzy、Ubuntu 22.04 では Humble を使用します。</p></div>
    <div className="step-card"><span className="step-mini">1.2</span><strong>依存関係をインストールする</strong><p>colcon、Git、control メッセージ、trajectory メッセージ、RViz、robot-state-publisher、および Pinocchio をインストールします。</p></div>
    <div className="step-card"><span className="step-mini">1.3</span><strong>ワークスペースをクローンする</strong><p>デフォルトでは Seeed-Projects リポジトリを使用します。必要に応じて開発用リポジトリを使用できます。</p></div>
    <div className="step-card"><span className="step-mini">1.4</span><strong>MotorBridge をインストールする</strong><p>ROS2 ノードが低レベルのモーターインターフェースと通信できるように、MotorBridge をインストールします。</p></div>
    <div className="step-card"><span className="step-mini">1.5</span><strong>colcon でビルドする</strong><p>ワークスペースをビルドして source し、その後実行可能エントリを確認します。</p></div>
  </div>

  <details className="content-details" open>
    <summary>Step 1.0: B601-RS クイックスタートを完了する</summary>
    <p>ROS2 連携を開始する前に、組み立て、モーター ID 設定、ゼロ位置初期化、電源チェック、PCAN-USB / SocketCAN セットアップを含む <a href="https://wiki.seeedstudio.com/ja/rebot_b601_rs_getting_started/">reBot Arm B601-RS クイックスタート</a> を完了してください。</p>
  </details>

  <details className="content-details" open>
    <summary>Step 1.1: 使用している Ubuntu 用に ROS2 をインストールする</summary>
    <p>使用している Ubuntu ディストリビューションに対応する ROS2 バージョンを使用します：</p>
    <ul>
      <li>Ubuntu 24.04: ROS2 Jazzy</li>
      <li>Ubuntu 22.04: ROS2 Humble</li>
    </ul>
    <p>参考資料：<a href="https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html">ROS2 Jazzy インストール</a>、<a href="https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html">ROS2 Humble インストール</a>、および <a href="https://wiki.seeedstudio.com/ja/install_ros2_humble/">Seeed ROS2 Humble インストール</a>。</p>
  </details>

  <details className="content-details" open>
    <summary>Step 1.2: ビルドツールと ROS 依存関係をインストールする</summary>
    <pre><code>{`sudo apt update
sudo apt install -y python3-colcon-common-extensions python3-pip git
sudo apt install -y \
  ros-\${ROS_DISTRO}-control-msgs \
  ros-\${ROS_DISTRO}-trajectory-msgs \
  ros-\${ROS_DISTRO}-tf-transformations \
  ros-\${ROS_DISTRO}-robot-state-publisher \
  ros-\${ROS_DISTRO}-rviz2 \
  ros-\${ROS_DISTRO}-pinocchio

source /opt/ros/\${ROS_DISTRO}/setup.bash
python3 -c "import pinocchio; print('pinocchio', pinocchio.__version__)"`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 1.3: コードリポジトリをクローンする</summary>
    <p>公式の Seeed-Projects リポジトリを優先して使用します：</p>
    <pre><code>{`git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2`}</code></pre>
    <p>現在の開発用リポジトリを使用することもできます：</p>
    <pre><code>{`git clone https://github.com/EclipseaHime017/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 1.4: MotorBridge をインストールする</summary>
    <pre><code>{`python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge

# Ubuntu 22.04 / ROS2 Humble では、通常次のコマンドを使用できます:
python3 -m pip install --user --index-url https://pypi.org/simple motorbridge`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 1.5: 低レベル SDK を追加してビルドする</summary>
    <pre><code>{`mkdir -p third_party
git clone https://github.com/vectorBH6/reBotArm_control_py.git third_party/reBotArm_control_py

source /opt/ros/\${ROS_DISTRO}/setup.bash
colcon build --symlink-install
source install/setup.bash

ros2 pkg executables rebotarmcontroller`}</code></pre>
    <p>想定されるエントリには、<code>{`reBotArmController`}</code>、<code>{`GravityCompensation`}</code>、<code>{`GripperControl`}</code>、<code>{`MoveTo`}</code>、<code>{`MoveToPose`}</code> などが含まれます。</p>
  </details>
</section>

<section id="bringup" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>実行前の安全確認</strong>
      <p>ロボットの作業空間から <strong>半径 1 メートル</strong> 以内の貴重品をすべて片付け、すべての人が離れていることを確認してください。このセクションを実行する前に、アームがしっかりと固定されていることを確認してください。</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>B601-RS コントローラを起動する</h2>
      <p>まず通信とジョイント状態の確認から始めます。ハードウェアドライバが安定してから RViz を追加してください。</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>ドライバのみ</b><span>RViz を起動せずにコントローラのみを起動するため、最初のハードウェア検証に最適です。</span></div>
    <div className="module-summary-card"><b>フルブリングアップ</b><span>コントローラ、robot-state-publisher、およびオプションの RViz 可視化を起動します。</span></div>
    <div className="module-summary-card"><b>ネームスペース対応</b><span>複数のアームを動作させる場合や、大規模な ROS2 システムと統合する場合にカスタムネームスペースを使用します。</span></div>
  </div>

  <details className="content-details" open>
    <summary>Step 2.1: CAN インターフェースを確認する</summary>
    <pre><code>{`ip -details link show can0`}</code></pre>
    <p><code>{`can0`}</code> が up になっていない場合は、次のように再設定します：</p>
    <pre><code>{`sudo modprobe peak_usb
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 2.2: フルシステムを起動する</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0`}</code></pre>
    <p>長期間 B601-RS のみを使用する場合は、<code>{`src/rebotarm_bringup/config/rebotarm_hardware.yaml`}</code> 内で <code>{`default_model: rs`}</code> を設定できます。その場合、次のコマンドで起動できます：</p>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py channel:=can0`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 2.3: RViz 可視化を起動する</summary>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=true`}</code></pre>
    <p>モデルビューが見づらい場合は、<code>{`Target Frame`}</code> を <code>{`base_link`}</code> に設定し、ビュータイプを <code>{`Move Camera`}</code> に変更し、距離を <code>{`1.0`}</code> または <code>{`1.5`}</code> に調整してください。</p>
  </details>

  <details className="content-details" open>
    <summary>Step 2.4: ハードウェア制御ノードのみを起動する</summary>
    <pre><code>{`ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0`}</code></pre>
    <p>ノードを直接実行するのではなく、起動ファイルを使用してください。起動ファイルは <code>{`rebotarm_bringup/config`}</code> からハードウェア設定を渡すためです。</p>
  </details>

  <details className="content-details">
    <summary>オプション: ネームスペースを変更する</summary>
    <p>デフォルトのネームスペースは <code>{`/rebotarm`}</code> です。複数のアームを動作させる場合や、他の ROS2 システムと統合する場合は、カスタムネームスペースを渡します：</p>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 arm_namespace:=right_arm`}</code></pre>
    <p>例えば、<code>{`/rebotarm/joint_states`}</code> は <code>{`/right_arm/joint_states`}</code> になります。</p>
  </details>
</section>

<section id="api" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>ROS2 のトピック、サービス、アクションを検証する</h2>
      <p>まず読み取り専用のステータスチェックから始めます。その後、小さく保守的な目標でサービスとアクションをテストします。</p>
    </div>
  </div>

  <div className="api-grid">
    <div className="api-card"><b>ステータストピック</b><code>{`/rebotarm/joint_states`}</code><span>6 軸ジョイントの位置、速度、エフォート、および RViz 用の可視グリッパージョイントを含みます。</span></div>
    <div className="api-card"><b>ステータストピック</b><code>{`/rebotarm/arm_status`}</code><span>制御モード、有効状態、ステートマシン、およびエラーコード。</span></div>
    <div className="api-card"><b>サービス</b><code>{`/rebotarm/enable`}</code><span>ロボットアームを有効にします。</span></div>
    <div className="api-card"><b>サービス</b><code>{`/rebotarm/disable`}</code><span>ロボットアームを無効にします。</span></div>
    <div className="api-card"><b>サービス</b><code>{`/rebotarm/safe_home`}</code><span>安全なホームポジションに戻します。</span></div>
    <div className="api-card"><b>アクション</b><code>{`/rebotarm/move_to_pose`}</code><span>エンドエフェクタの姿勢制御モーション。</span></div>
    <div className="api-card"><b>アクション</b><code>{`/rebotarm/follow_joint_trajectory`}</code><span>標準的なジョイント軌道互換エントリポイント。</span></div>
    <div className="api-card"><b>アクション</b><code>{`/rebotarm/gripper/command`}</code><span>標準的なグリッパーアクション。</span></div>
  </div>

  <details className="content-details" open>
    <summary>ステータストピックを読み取る</summary>
    <pre><code>{`ros2 topic echo /rebotarm/joint_states --once
ros2 topic echo /rebotarm/arm_status --once`}</code></pre>
  </details>

  <details className="content-details">
    <summary>一般的なグリッパーサービス</summary>
    <pre><code>{`ros2 service call /rebotarm/gripper/open rebotarm_msgs/srv/GripperCommand "{}"
ros2 service call /rebotarm/gripper/close rebotarm_msgs/srv/GripperCommand "{}"
ros2 service call /rebotarm/gripper/set rebotarm_msgs/srv/SetGripper "{position: 5.0}"`}</code></pre>
  </details>
</section>

<section id="examples" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>実行前の安全確認</strong>
      <p>ロボットの作業空間から<strong>半径1メートル</strong>以内の貴重品をすべて片付け、すべての人員を離れさせてください。最初の動作テストでは、小さなターゲットと長めの動作時間を使用してください。</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 4</span>
    <div>
      <h2>安全な制御サンプルを実行する</h2>
      <p>すべてのサンプルは、B601-RS コントローラがすでに起動していることを前提としています。</p>
    </div>
  </div>

  <div className="command-card">
    <h3>まずコントローラを起動する</h3>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0`}</code></pre>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">4.1</span><strong>アームを有効化する</strong><p>作業空間がクリアであり、アームがしっかり固定されていることを確認してから有効化してください。</p></div>
    <div className="step-card"><span className="step-mini">4.2</span><strong>小さな姿勢に移動する</strong><p>最初のテストでは、安全側の目標位置と少なくとも2秒の動作時間を使用してください。</p></div>
    <div className="step-card"><span className="step-mini">4.3</span><strong>関節ターゲットを送信する</strong><p>動作方向を確認するため、ごく小さな関節オフセットと長めの動作時間を使用してください。</p></div>
    <div className="step-card"><span className="step-mini">4.4</span><strong>ホームに戻る</strong><p>ケーブルやハードウェアを変更する前に、安全なホーム動作を呼び出してからアームを無効化してください。</p></div>
  </div>

  <details className="content-details" open>
    <summary>Step 4.1: ロボットアームを有効化する</summary>
    <pre><code>{`ros2 service call /rebotarm/enable std_srvs/srv/Trigger`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 4.2: エンドエフェクタ姿勢へ移動する</summary>
    <pre><code>{`ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {x: 0.0, y: 0.0, z: 0.0, w: 1.0}}, duration: 2.0}"`}</code></pre>
    <p><code>{`move_to_pose`}</code> アクションは SDK のエンドポーズコントローラによって実行されます。B601-RS の制御モードは、<code>{`rebotarm_hardware.yaml`}</code> 内でデフォルトで <code>{`mit`}</code> に設定されています。</p>
  </details>

  <details className="content-details" open>
    <summary>Step 4.3: 関節ターゲットを送信する</summary>
    <pre><code>{`ros2 action send_goal /rebotarm/follow_joint_trajectory \
  control_msgs/action/FollowJointTrajectory \
  "{trajectory: {joint_names: ['joint1','joint2','joint3','joint4','joint5','joint6'],
    points: [{positions: [0.1,0,0,0,0,0], time_from_start: {sec: 5}}]}}"`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 4.4: 安全なホーム動作と無効化</summary>
    <pre><code>{`ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger`}</code></pre>
  </details>

  <details className="content-details">
    <summary>追加のデモコマンド</summary>
    <pre><code>{`# 関節動作の例、単位: rad
ros2 run rebotarmcontroller MoveTo -- \
  0.20 -0.20 -0.20 -0.20 0.10 -0.10 \
  --duration 8.0

# 単一関節の動作
ros2 run rebotarmcontroller MoveTo -- --joint joint3 --position -0.20 --duration 5.0

# エンドエフェクタ姿勢の例
ros2 run rebotarmcontroller MoveToPose -- --x 0.30 --y 0.0 --z 0.30 --qw 1.0 --duration 2.0

# インタラクティブなグリッパーの例
ros2 run rebotarmcontroller GripperControl`}</code></pre>
  </details>

  <details className="content-details">
    <summary>重力補償の例</summary>
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>重力補償の安全確認</strong>
        <p>アームを慎重に保持し、作業空間をクリアに保ち、コントローラを停止できるよう準備しておいてください。ゼロ位置と関節方向が確認されるまでは、重力補償を使用しないでください。</p>
      </div>
    </div>
    <pre><code>{`ros2 run rebotarmcontroller GravityCompensation`}</code></pre>
    <p>このスクリプトは <code>{`/rebotarm/enable`}</code> を呼び出して重力補償を開始し、<code>{`Ctrl+C`}</code> が押されると <code>{`/rebotarm/gravity_compensation/stop`}</code>、<code>{`/rebotarm/safe_home`}</code>、<code>{`/rebotarm/disable`}</code> を呼び出します。</p>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>設定</span>
    <h2>主要な設定ファイル</h2>
    <p>B601-RS の ROS2 ワークスペースでは、上位レイヤのハードウェア設定ファイルを使用して RS モデルを選択し、SDK パラメータを上書きします。</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b><code>{`rebotarm_hardware.yaml`}</code></b><span>B601-RS 用のハードウェア選択と SDK パラメータの上書き。</span></div>
    <div className="module-summary-card"><b><code>{`driver_params.yaml`}</code></b><span>ドライバ起動ワークフロー向けの ROS パラメータ例。</span></div>
    <div className="module-summary-card"><b><code>{`default_model: rs`}</code></b><span><code>{`model:=...`}</code> が明示的に渡されない場合に、自動的に RS を使用します。</span></div>
  </div>

  <details className="content-details" open>
    <summary>一般的な起動パラメータ</summary>

    | パラメータ | デフォルト | 説明 |
    |---|---|---|
    | <code>{`hardware_config`}</code> | 組み込みハードウェア設定 | ROS2 上位レイヤのハードウェア設定パス |
    | <code>{`model`}</code> | <code>{`rs`}</code> | B601-RS の設定を選択 |
    | <code>{`channel`}</code> | <code>{`can0`}</code> | SocketCAN チャネル |
    | <code>{`joint_state_rate`}</code> | <code>{`100.0`}</code> | <code>{`/rebotarm/joint_states`}</code> の配信レート |
    | <code>{`cmd_arbitration`}</code> | <code>{`reject`}</code> | 軌道実行中のアーム関節コマンドの仲裁方式 |
    | <code>{`arm_namespace`}</code> | <code>{`rebotarm`}</code> | ROS 名前空間プレフィックス |
    | <code>{`frame_id`}</code> | <code>{`base_link`}</code> | ロボットアームのベースフレーム |
    | <code>{`ee_frame_id`}</code> | <code>{`gripper_end`}</code> | エンドエフェクタフレーム |
    | <code>{`use_rviz`}</code> | <code>{`false`}</code> | RViz を起動するかどうか |
    | <code>{`disable_after_safe_home`}</code> | <code>{`true`}</code> | 安全なホーム動作完了後にモータを無効化するかどうか |
  </details>

  <details className="content-details">
    <summary>低レベルコマンドトピック</summary>
    <p>低レベルトピックはデバッグ専用です。IK、軌道計画、URDF 制限チェックは行いません。</p>

    | API | 型 | 説明 |
    |---|---|---|
    | <code>{`/rebotarm/joints/<joint>/cmd/mit`}</code> | <code>{`rebotarm_msgs/msg/JointMitCmd`}</code> | 単一関節の MIT 生コマンド |
    | <code>{`/rebotarm/joints/<joint>/cmd/pos_vel`}</code> | <code>{`rebotarm_msgs/msg/JointPosVelCmd`}</code> | 単一関節の位置・速度生コマンド |
    | <code>{`/rebotarm/gripper/cmd/mit`}</code> | <code>{`rebotarm_msgs/msg/JointMitCmd`}</code> | グリッパーの MIT 生コマンド |
    | <code>{`/rebotarm/gripper/cmd/pos_vel`}</code> | <code>{`rebotarm_msgs/msg/JointPosVelCmd`}</code> | グリッパーの位置・速度生コマンド |
  </details>
</section>

<section id="moveit" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 5</span>
    <div>
      <h2>MoveIt 2 を使って計画と実行を行う</h2>
      <p>MoveIt 2 は IK、衝突チェック、軌道計画、および実行を処理します。実機を使用する前に、必ずシミュレーションで検証してください。</p>
    </div>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">5.1</span><strong>MoveIt パッケージをインストールする</strong><p>MoveIt、ros2_control、コントローラマネージャ、OMPL プランナ、および xacro をインストールします。</p></div>
    <div className="step-card"><span className="step-mini">5.2</span><strong>再ビルドして検証する</strong><p>ワークスペースを再ビルドし、MoveIt パッケージとデモのエントリポイントが利用可能であることを確認します。</p></div>
    <div className="step-card"><span className="step-mini">5.3</span><strong>まずシミュレーションを実行する</strong><p>仮想ハードウェアで MoveIt デモを起動し、RViz で軌道計画を確認します。</p></div>
    <div className="step-card"><span className="step-mini">5.4</span><strong>実機を使用する</strong><p>まずハードウェアドライバを起動し、その後ハードウェア用の MoveIt 起動ファイルを開始します。</p></div>
    <div className="step-card"><span className="step-mini">5.5</span><strong>デモを慎重に実行する</strong><p>軌道が検証された後にのみ、draw-square と pick-place を実行してください。</p></div>
  </div>

  <details className="content-details" open>
    <summary>Step 5.1: MoveIt 環境をインストールする</summary>
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
    <summary>ステップ 5.2: パッケージを再ビルドして検証する</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
colcon build --symlink-install
source install/setup.bash

ros2 pkg list | grep rebotarm_moveit
ros2 pkg executables rebotarm_moveit_demos`}</code></pre>
    <p>期待されるエントリには、<code>{`draw_square`}</code> と <code>{`pick_place`}</code> が含まれます。</p>
  </details>

  <details className="content-details" open>
    <summary>ステップ 5.3: シミュレーションで MoveIt を使用する</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs

# Without RViz:
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs use_rviz:=false`}</code></pre>
    <p>これにより、<code>{`move_group`}</code>、<code>{`robot_state_publisher`}</code>、<code>{`ros2_control_node`}</code>、ジョイントコントローラ、グリッパコントローラ、および MoveIt MotionPlanning プラグイン付きの RViz が起動します。</p>
  </details>

  <details className="content-details" open>
    <summary>ステップ 5.4: 実機ハードウェアで MoveIt を使用する</summary>
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>MoveIt ハードウェア安全チェック</strong>
        <p>作業空間を片付け、RViz で計画経路を確認し、実際の動作を実行する前にコントローラを停止できるよう準備しておいてください。</p>
      </div>
    </div>
    <pre><code>{`# Terminal 1: hardware driver
ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0

# Terminal 2: MoveIt hardware environment
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py model:=rs`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>ステップ 5.5: draw-square デモを実行する</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=rs`}</code></pre>
    <p>draw-square デモでは、<code>{`gripper_tcp`}</code> を同一平面上の長方形の 4 つのコーナーを通過するように動かします。デフォルトパラメータは <code>{`src/rebotarm_moveit_demos/config/draw_square_rs.yaml`}</code> にあります。</p>
  </details>

  <details className="content-details" open>
    <summary>ステップ 5.6: pick-place デモを実行する</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos pick_place.launch.py model:=rs`}</code></pre>
    <p>pick-place デモでは、オブジェクトをプランニングシーンに追加し、グリッパを開き、ピック姿勢へ移動し、グリッパを閉じ、プレース姿勢へ移動し、オブジェクトを解放します。デフォルトパラメータは <code>{`src/rebotarm_moveit_demos/config/pick_place_rs.yaml`}</code> にあります。</p>
  </details>

  <details className="content-details">
    <summary>MoveIt 設定ファイル</summary>

    | ファイル | 説明 |
    |---|---|
    | <code>{`rebotarm_moveit_config/config/rebotarm_rs.urdf.xacro`}</code> | MoveIt で使用される B601-RS ロボットモデル（グリッパと <code>{`gripper_tcp`}</code> を含む） |
    | <code>{`rebotarm_moveit_config/config/rebotarm_rs.ros2_control.xacro`}</code> | シミュレーション用の ros2_control モックハードウェア記述 |
    | <code>{`rebotarm_moveit_config/config/rebotarm_rs.srdf`}</code> | MoveIt のグループ、エンドエフェクタ、デフォルト状態、およびセマンティック設定 |
    | <code>{`rebotarm_moveit_config/config/kinematics.yaml`}</code> | IK ソルバ設定 |
    | <code>{`rebotarm_moveit_config/config/joint_limits.yaml`}</code> | MoveIt プランニングで使用される関節リミット |
    | <code>{`rebotarm_moveit_config/config/ompl_planning.yaml`}</code> | OMPL プランナパラメータ |
    | <code>{`rebotarm_moveit_config/config/moveit_controllers.yaml`}</code> | シミュレーション用の軌道実行コントローラ設定 |
    | <code>{`rebotarm_moveit_config/config/moveit_hardware_controllers.yaml`}</code> | 実機ハードウェア用の軌道実行コントローラ設定 |
    | <code>{`rebotarm_moveit_demos/config/draw_square_rs.yaml`}</code> | draw-square デモのパラメータ |
    | <code>{`rebotarm_moveit_demos/config/pick_place_rs.yaml`}</code> | pick-place デモのパラメータ |
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>よくある問題</h2>
    <p>RS ROS2 に関する問題のほとんどは、CAN インターフェースの状態、ワークスペースの source、モデル選択、古い ROS2 プロセス、または MoveIt のターゲット設定が原因です。</p>
  </div>

  <details className="content-details" open>
    <summary>1. 起動時に <code>{`socketcan write failed: Network is down`}</code> が表示される</summary>
    <p>これは CAN インターフェースがまだ有効化されていないことを意味します。</p>
    <pre><code>{`ip -details link show can0

sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up`}</code></pre>
  </details>

  <details className="content-details">
    <summary>2. <code>{`can0`}</code> が見つからない</summary>
    <pre><code>{`ip -br link
sudo modprobe peak_usb
ip -br link

# If the interface is can1, launch with:
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can1`}</code></pre>
  </details>

  <details className="content-details">
    <summary>3. RViz にロボットモデルが表示されない</summary>
    <ul>
      <li>ワークスペースが source されているか確認します：<code>{`source install/setup.bash`}</code>。</li>
      <li><code>{`Fixed Frame`}</code> が <code>{`base_link`}</code> に設定されているか確認します。</li>
      <li><code>{`robot_state_publisher`}</code> が正しく起動しているか確認します。</li>
      <li>URDF のメッシュパスが <code>{`package://rebotarm_bringup/description/...`}</code> で始まっているか確認します。</li>
    </ul>
  </details>

  <details className="content-details">
    <summary>4. MoveIt のプランニングが失敗する</summary>
    <ul>
      <li><code>{`move_group`}</code> が正しく動作していることを確認します。</li>
      <li>現在の関節状態が古くなっていないことを確認します。</li>
      <li>ターゲットポイントが到達可能な作業空間内にあることを確認します。</li>
      <li>ターゲット姿勢が手首やグリッパの衝突を引き起こさないことを確認します。</li>
      <li>まず RViz で手動でプランニングし、その後デモを実行します。</li>
    </ul>
  </details>

  <details className="content-details">
    <summary>5. FastDDS SHM ポートの警告が表示される</summary>
    <p>サービスやアクションが通常どおり応答している場合、この警告は通常制御に影響しません。残っている共有メモリのロックファイルをクリーンアップするには：</p>
    <pre><code>{`pkill -f ros2
pkill -f reBotArmController
rm -f /dev/shm/fastrtps_port*

# Optional temporary workaround:
export FASTDDS_BUILTIN_TRANSPORTS=UDPv4`}</code></pre>
  </details>

  <details className="content-details">
    <summary>6. Humble を使用する場合は？</summary>
    <p>同じワークフローに従い、Jazzy パッケージを Humble パッケージに置き換え、Humble 環境を source してからワークスペースを再ビルドします。</p>
  </details>

  <details className="content-details">
    <summary>7. <code>{`pinocchio`}</code> が見つからない</summary>
    <pre><code>{`sudo apt install -y ros-\${ROS_DISTRO}-pinocchio
source /opt/ros/\${ROS_DISTRO}/setup.bash
python3 -c "import pinocchio; print(pinocchio.__version__)"
python3 -c "import sys; print('\\n'.join(sys.path))"`}</code></pre>
    <p>Jazzy を source した後、Python パスには <code>{`/opt/ros/jazzy/lib/python3.12/site-packages`}</code> のようなパスが含まれているはずです。Humble の場合は、<code>{`jazzy`}</code> を <code>{`humble`}</code> に置き換えてください。</p>
  </details>
</section>

<section className="section-card course-path-section">
  <div className="section-title">
    <span>学習を続ける</span>
    <h2>reBot B601-RS 学習パス</h2>
    <p>これらのチュートリアルは、次の順序で進めるよう設計されています：Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2。以下のリンクを使ってモジュール間を移動できます。</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/ja/rebot_b601_rs_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Getting Started</strong><span>開封、配線、48V 電源チェック、PCAN-USB セットアップ、キャリブレーション、初回の動作テストを完了します。</span></span>
      <span className="course-tag">ここから開始</span>
    </a>
    <a className="course-path-item" href="/ja/rebot_arm_b601_rs_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>LeRobot テレオペレーションとデータ収集</strong><span>アームをテレオペレートし、カメラを接続し、データセットを記録し、模倣学習タスクを準備します。</span></span>
      <span className="course-tag">データ収集</span>
    </a>
    <a className="course-path-item" href="/ja/rebot_arm_b601_rs_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Pinocchio による運動学の可視化</strong><span>ロボットモデル、関節、座標フレーム、順運動学／逆運動学、軌道、および重力補償について理解します。</span></span>
      <span className="course-tag">制御</span>
    </a>
    <a className="course-path-item" href="/ja/rebot_arm_b601_rs_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>ビジュアルグラスピング デモ</strong><span>RGB-D 認識、ハンドアイキャリブレーション、YOLO / GraspNet、および把持姿勢生成を組み合わせて、実際の物体を把持します。</span></span>
      <span className="course-tag">アプリケーション</span>
    </a>
    <a className="course-path-item active" href="/ja/rebot_arm_b601_rs_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>ROS2 統合</strong><span>アームを ROS2、RViz、MoveIt 2、プランニング、およびより高レベルのロボティクスワークフローに接続します。</span></span>
      <span className="course-tag">現在の記事</span>
    </a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>参考文献</span>
    <h2>参考資料とサポート</h2>
  </div>
  <div className="reference-grid">
    <a href="https://wiki.seeedstudio.com/ja/rebot_b601_rs_getting_started/">reBot Arm B601-RS クイックスタート</a>
    <a href="https://docs.ros.org/en/humble/">ROS2 Humble ドキュメント</a>
    <a href="https://docs.ros.org/en/jazzy/">ROS2 Jazzy ドキュメント</a>
    <a href="https://github.com/vectorBH6/reBotArm_control_py">reBotArm_control_py</a>
    <a href="https://moveit.picknik.ai/main/index.html">MoveIt 2 ドキュメント</a>
    <a href="https://forum.seeedstudio.com/">Seeed Studio フォーラム</a>
    <a href="https://github.com/EclipseaHime017/reBotArmController_ROS2/issues">Issue を送信</a>
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
  --rb-warning: #f59e0b;
  --rb-danger: #ef4444;
  --rb-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  width: 100%;
}
.doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
.eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.hero-actions a:nth-child(n+2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card img { width: 100%; border-radius: 14px; border: 1px solid var(--rb-border); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.88rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.path-grid, .feature-grid, .checklist-grid, .step-card-grid, .module-summary-grid, .spec-grid, .api-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.95rem; }
.path-card, .step-card, .module-summary-card, .spec-card, .api-card { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 18px; background: linear-gradient(180deg, var(--rb-surface), var(--rb-surface-soft)); border: 1px solid var(--rb-border); color: inherit; text-decoration: none !important; box-shadow: 0 10px 24px rgba(15,23,42,0.05); transition: all 0.18s ease; }
.path-card:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.36); box-shadow: 0 16px 32px rgba(37,99,235,0.10); }
.path-card span, .step-mini { display: inline-flex; align-items: center; justify-content: center; width: fit-content; min-height: 2rem; padding: 0.28rem 0.65rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-size: 0.82rem; font-weight: 900; }
.path-card strong, .step-card strong, .module-summary-card b, .spec-card b, .api-card b { color: var(--rb-text); font-size: 1rem; }
.path-card p, .path-card small, .step-card p, .step-card span, .module-summary-card span, .spec-card span, .api-card span { margin: 0; color: var(--rb-muted); line-height: 1.62; font-size: 0.92rem; }
.path-card em { width: fit-content; margin-top: 0.2rem; padding: 0.32rem 0.62rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.18); font-style: normal; font-weight: 800; font-size: 0.78rem; }
.path-card.recommended { border-color: rgba(37,99,235,0.42); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.content-details { margin: 1rem 0; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: inherit; }
.content-details summary { cursor: pointer; color: var(--rb-text); font-weight: 850; }
.command-card { margin: 1rem 0; padding: 1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface-soft); }
.command-card h3 { margin-top: 0; color: var(--rb-text); }
.step-title-row { display: flex; gap: 0.95rem; align-items: flex-start; margin-bottom: 1rem; }
.step-pill { display: inline-flex; padding: 0.45rem 0.8rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); border: 1px solid rgba(37,99,235,0.18); font-weight: 900; white-space: nowrap; }
.reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.85rem; }
.reference-grid a { padding: 0.9rem 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: var(--rb-primary); text-decoration: none !important; font-weight: 800; }
.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239, 68, 68, 0.38); background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.course-path-section { margin-top: 2rem; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 8px 22px rgba(15,23,42,0.05); transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease; }
.course-path-item:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.42); box-shadow: 0 14px 30px rgba(37,99,235,0.12); }
.course-path-item.active { border-color: rgba(37,99,235,0.55); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 900; }
.course-path-item.active .course-index { color: #fff; background: var(--rb-primary); box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
pre { overflow-x: auto; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .path-card, html[data-theme='dark'] .step-card, html[data-theme='dark'] .module-summary-card, html[data-theme='dark'] .spec-card, html[data-theme='dark'] .api-card, html[data-theme='dark'] .content-details, html[data-theme='dark'] .command-card, html[data-theme='dark'] .reference-grid a, html[data-theme='dark'] .course-path-item { background: rgba(15, 23, 42, 0.72); border-color: rgba(148, 163, 184, 0.22); }
html[data-theme='dark'] .path-card.recommended, html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
html[data-theme='dark'] .safety-alert { border-color: rgba(248, 113, 113, 0.42); background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
@media (max-width: 900px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 720px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .safety-alert { grid-template-columns: 1fr; } .step-title-row { display: grid; } }
`}</style>
