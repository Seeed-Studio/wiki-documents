---
description: このチュートリアルでは、reBot Arm B601-DM を用いた運動学解析、軌道計画、重力補償、およびビジュアルデバッグのために、Pinocchio と MeshCat を使用する方法を説明します。
title: reBot Arm B601-DM 向け Pinocchio と MeshCat 入門
keywords:
  - Pinocchio
  - MeshCat
  - reBot Arm
  - B601-DM
  - 運動学
  - 軌道計画
  - 重力補償
  - ロボット
slug: /rebot_arm_b601_dm_pinocchio_meshcat
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-07-05
  author: LiuJunjie
translation:
  skip:
    - zh-CN
createdAt: '2026-03-24'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_pinocchio_meshcat/
---

# reBot Arm B601-DM 向け Pinocchio と MeshCat 入門

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>Pinocchio と MeshCat を使って reBot Arm B601-DM の運動学を解析・可視化・デバッグする</h2>
    <p>このガイドは、すでに B601-DM の基本的な電源および通信チェックを完了しているユーザーを対象としています。環境構築、単一モータテスト、ゼロ位置読み取り、FK / IK 検証、軌道制御、重力補償、および MeshCat による可視化までを順に説明します。</p>
    <div className="hero-actions">
      <a href="#quick-path">ワークフローを見る</a>
      <a href="#debug-tools">デバッグツール</a>
      <a href="#simulation">シミュレーションを開く</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>推奨順序</strong>
    <span>まずシミュレーションから始め、次に FK / IK を検証し、その後で実機のロボットアームに接続してください。</span>
    <span>B601-DM は 24V 電源と Damiao DM モータを使用します。実機テストの前に、USB2CAN と電源配線を必ず確認してください。</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全上の警告：実行前にロボット作業空間を必ず確保すること</strong>
    <p>
      ロボットアームを動かすプログラムを実行する前に、ロボットの作業空間から
      貴重品、壊れやすい物、工具、ケーブル、および無関係な物体を<strong>半径 1 メートル</strong>
      以内からすべて取り除いてください。デバッグおよび動作中は、作業者は常に
      ロボットの動作範囲の外側にいる必要があります。
    </p>
    <ul>
      <li>ロボットアームの電源が入っている状態では、関節、モータ、リンク、グリッパ、エンドエフェクタには触れないでください。</li>
      <li>キャリブレーション、遠隔操作、IK 制御、軌道制御、重力補償、ROS2 / MoveIt 実行、またはビジュアルグラスピングを行う前に、アームのベースがしっかり固定されていることを確認してください。</li>
      <li>異常な動き、異音、振動、ケーブルの緩み、電源接触不良、または通信断が発生した場合は、直ちにプログラムを停止し、点検前にシステムの電源を切ってください。</li>
      <li>モータケーブル、CAN ケーブル、USB2CAN / PCAN-USB アダプタ、XT30 コネクタ、または電源コネクタを抜き差しする際は、必ずシステムの電源を切ってから行ってください。</li>
    </ul>
  </div>
</div>


<div className="quick-note">
  <strong>安全上の注意：</strong>MIT 制御および実機の IK 制御では非常に高速に動作する場合があります。ベースをクランプで固定し、アームから少なくとも 1 メートル離れ、小さな角度、低速、短い目標動作から始めてください。
</div>

<nav className="doc-nav" aria-label="Pinocchio MeshCat quick navigation">
  <a href="#quick-path">パス</a>
  <a href="#overview">概要</a>
  <a href="#install">インストール</a>
  <a href="#debug-tools">モータデバッグ</a>
  <a href="#kinematics">運動学</a>
  <a href="#gravity">重力</a>
  <a href="#simulation">シミュレーション</a>
</nav>

<section id="quick-path" className="section-card">
  <div className="section-title">
    <span>ここから開始</span>
    <h2>推奨ワークフロー</h2>
    <p>Pinocchio と MeshCat は、運動学、動力学、および制御デバッグのための低レベルツールです。まず実機を動かさないスクリプトから始め、徐々にハードウェア制御へ移行してください。</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#install"><b>1. 環境をインストールする</b><span>uv を使用して reBotArm_control_py の依存関係を同期し、Python、Pinocchio、MeshCat、MotorBridge が利用可能であることを確認します。</span><em>ここから開始</em></a>
    <a className="path-card" href="#debug-tools"><b>2. モータとゼロをテストする</b><span>単一モータコンソールと関節読み取りスクリプトを使用して、USB2CAN、モータ ID、ゼロ位置、および回転方向を検証します。</span><em>ハードウェアチェック</em></a>
    <a className="path-card" href="#kinematics"><b>3. FK / IK を検証する</b><span>FK および IK スクリプトを使用して、URDF、関節リミット、エンドエフェクタ座標系、および目標作業空間を検証します。</span><em>中核ステップ</em></a>
    <a className="path-card" href="#simulation"><b>4. MeshCat シミュレーションを使用する</b><span>ブラウザ上でアーム姿勢、目標フレーム、参照軌道、および実軌道を可視化します。</span><em>強く推奨</em></a>
    <a className="path-card" href="#gravity"><b>5. 重力補償を試す</b><span>URDF パラメータとモータの回転方向が検証された後にのみ、重力補償を試してください。</span><em>上級</em></a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>詳細ステップ</span>
    <h2>安全なデバッグ手順</h2>
    <p>この手順に従うことで、ソフトウェアのみの検証から、リスクを抑えた実機制御へと移行できます。</p>
  </div>
  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">Step 0</span><strong>クイックスタートを完了する</strong><p>低レベル制御スクリプトを使用する前に、電源、配線、ゼロ位置、および通信を検証してください。</p></div>
    <div className="step-card"><span className="step-mini">Step 1</span><strong>環境をインストールして同期する</strong><p>uv を使用して再現可能な Python 環境を作成し、Pinocchio / MeshCat がインポートできることを確認します。</p></div>
    <div className="step-card"><span className="step-mini">Step 2</span><strong>単一モータの挙動を確認する</strong><p>CAN / USB2CAN 通信、モータ ID、ゼロ、状態フィードバック、および回転方向を検証します。</p></div>
    <div className="step-card"><span className="step-mini">Step 3</span><strong>ソフトウェア上で FK / IK を検証する</strong><p>実機にコマンドを送る前に、単位系、座標系、作業空間、および関節リミットを確認します。</p></div>
    <div className="step-card"><span className="step-mini">Step 4</span><strong>MeshCat で可視化する</strong><p>ブラウザ可視化を用いて、姿勢、軌道、および目標フレームを確認します。</p></div>
    <div className="step-card"><span className="step-mini">Step 5</span><strong>実機ハードウェアをゆっくり動かす</strong><p>短い距離、小さな角度、長めの動作時間、安全な停止手順から始めてください。</p></div>
  </div>
</section>


<section id="overview" className="section-card">
  <div className="section-title">
    <span>概要</span>
    <h2>プロジェクト概要</h2>
    <p>Pinocchio は、高効率な剛体運動学、動力学、ヤコビアン、および軌道計算を提供します。MeshCat は、ロボットモデル、目標姿勢、および軌道をブラウザ上でリアルタイムに可視化します。これらを組み合わせることで、ロボットアームの制御アルゴリズムのデバッグに有用な環境を構築できます。</p>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png" alt="reBot Arm B601-DM Pinocchio MeshCat" />
  </div>

  <div className="badge-row">
    <span>Pinocchio</span>
    <span>MeshCat</span>
    <span>順運動学 / 逆運動学</span>
    <span>SE(3) 軌道</span>
    <span>重力補償</span>
  </div>

  <div className="feature-grid">
    <div><strong>順運動学 / 逆運動学</strong><span>関節角度からエンドエフェクタの姿勢を計算したり、目標姿勢から関節角度を解いて、作業空間と関節リミットを検証します。</span></div>
    <div><strong>MeshCat 可視化</strong><span>URDF モデル、エンドエフェクタ座標系、目標姿勢、および計画経路をブラウザに表示し、IK 失敗の原因を診断します。</span></div>
    <div><strong>軌道計画</strong><span>SE(3) 測地線軌道、最小ジャークプロファイル、および CLIK トラッキングを使用して、関節の急激な動きを抑制します。</span></div>
    <div><strong>重力補償</strong><span>動力学モデルから関節の重力トルクを計算します。実機での結果は、URDF の質量、重心、減速比、摩擦、およびモータ回転方向の精度に依存します。</span></div>
  </div>

  <div className="buy-box">
    <a href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">reBot Arm B601-DM を入手</a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>ハードウェア</span>
    <h2>ハードウェアおよび環境要件</h2>
    <p>B601-DM バージョンは Damiao モータと USB2CAN 通信を使用します。標準の動作電圧は 24V DC です。</p>
  </div>

  | 項目 | 要件 |
  |------|-------------|
  | ロボットアーム | reBot Arm B601-DM |
  | モータ | Damiao DM4340 / DM4310 |
  | 通信 | USB2CAN シリアルブリッジまたは CAN インターフェース |
  | 電源 | 24V DC |
  | OS | Ubuntu 22.04+ |
  | Python | 3.10+ |

  <div className="callout warning">
    <strong>実機制御の前に：</strong>まず電源、配線、ゼロ位置、およびモータ ID チェックを含む基本的なクイックスタート手順を完了してください。FK / IK と MeshCat の学習だけが目的であれば、ロボットを接続せずにシミュレーションスクリプトのみを実行することもできます。
  </div>
</section>

<section id="install" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 1</span>
    <div>
      <h2>環境をインストールする</h2>
      <p>このプロジェクトは依存関係管理に uv を使用します。uv は仮想環境を作成し、pyproject.toml と uv.lock に基づいて依存関係をインストールします。</p>
    </div>
  </div>

  <div className="command-card">
    <h3>1. uv をインストールする</h3>
    <pre><code>{`curl -LsSf https://astral.sh/uv/install.sh | sh`}</code></pre>
  </div>

  <div className="command-card">
    <h3>2. リポジトリをクローンして依存関係を同期する</h3>
    <pre><code>{`git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py
uv sync`}</code></pre>
  </div>

  <details className="content-details" open>
    <summary>サンプル実行前のデバイス権限</summary>

    Damiao USB2CAN は一般的に <code>/dev/ttyACM0</code> にマッピングされます。デバイスパスが異なる場合は、<code>dmesg</code> または <code>ls /dev/ttyACM*</code> で確認してください。

    <pre><code>{`sudo chmod 666 /dev/ttyACM0

# SocketCAN インターフェースを使用している場合は、can0 も確認できます:
ip -br link
sudo chmod 666 /dev/can0 2>/dev/null || true`}</code></pre>
  </details>
</section>

<section id="debug-tools" className="section-card step-section">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>実行前の安全確認</strong>
    <p>ロボットの作業空間から<strong>半径1メートル</strong>以内の貴重品をすべて片付け、全ての人員を離れさせてください。このセクションを実行する前に、アームがしっかり固定されていることを確認してください。</p>
  </div>
</div>

<div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>モータデバッグツール</h2>
      <p>IK や軌道制御を実行する前に、単一モータの通信、ゼロ位置、および関節角度を確認します。</p>
    </div>
  </div>

  <details className="content-details" open>
    <summary>単一モータコンソール: 0x01damiao_test.py</summary>
    <p>このスクリプトを使用して、MotorBridge SDK と単一の Damiao モータとの通信をテストします。有効化、モード切り替え、ゼロ設定を含みます。</p>
    <pre><code>{`uv run python example/0x01damiao_test.py`}</code></pre>

    | コマンド | 説明 |
    |---------|-------------|
    | `enable` / `disable` | モータを有効化 / 無効化 |
    | `set_zero` | 現在のモータ位置をゼロに設定 |
    | `state` | モータ状態を読み取る |
    | `mode mit` | MIT モード |
    | `mode posvel` | 任意の PID パラメータ付き位置・速度モード |
    | `mode vel` | 速度モード |
  </details>

  <details className="content-details">
    <summary>ゼロ設定と関節モニタリング: 2_zero_and_read.py</summary>
    <p>全ての関節のゼロを設定し、関節角度をリアルタイムに表示します。ゼロ位置と関節方向を確認するため、FK / IK テストの前に実行してください。</p>
    <pre><code>{`uv run python example/2_zero_and_read.py

# Example output
-0.12  +0.23  -6.42  +41.74  -0.45  -0.01  -0.01`}</code></pre>
  </details>

  <details className="content-details">
    <summary>MIT 制御モード: 3_mit_control.py</summary>
    <div className="callout danger"><strong>警告:</strong> MIT モードは応答が速く、高トルクを出力できます。最初のテストでは非常に小さな角度を使用し、人や機器をアームから離してください。</div>
    <pre><code>{`uv run python example/3_mit_control.py
> 30 0 0 0 0 0
> state
> q`}</code></pre>
  </details>

  <details className="content-details">
    <summary>位置・速度制御: 4_pos_vel_control.py</summary>
    <p>POS_VEL モードは、MIT の目標角度を直接送るよりも一般的になめらかで、基本的な関節動作テストの出発点として適しています。</p>
    <pre><code>{`uv run python example/4_pos_vel_control.py
> 30 0 0 0 0 0
> state
> q`}</code></pre>
  </details>
</section>

<section id="kinematics" className="section-card step-section">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>実行前の安全確認</strong>
    <p>ロボットの作業空間から<strong>半径1メートル</strong>以内の貴重品をすべて片付け、全ての人員を離れさせてください。このセクションを実行する前に、アームがしっかり固定されていることを確認してください。</p>
  </div>
</div>

<div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>運動学テスト</h2>
      <p>順運動学は、関節角度からエンドエフェクタの姿勢を計算します。逆運動学は、目標姿勢から関節角度を求めます。まず実機アームを動かさずに開始し、目標が作業空間内にあるかどうかを確認してください。</p>
    </div>
  </div>

  <div className="callout">
    <strong>補足:</strong> FK / IK の結果は、URDF、関節リミット、座標系の定義、単位に依存します。位置はメートル単位です。一部のスクリプトはオイラー角に度を使用し、シミュレーションスクリプトはラジアンを使用する場合があります。各スクリプトの入力説明に注意して従ってください。</p>
  </div>

  <details className="content-details" open>
    <summary>順運動学: 5_fk_test.py</summary>
    <p>6 つの関節角度を入力し、エンドエフェクタの位置、回転行列、および XYZ オイラー角を表示します。</p>
    <pre><code>{`uv run python example/5_fk_test.py
> 0 0 0 0 0 0`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>逆運動学: 6_ik_test.py</summary>
    <p>目標位置、または目標位置と姿勢を入力します。スクリプトは対応する関節角度の解を試みます。</p>
    <pre><code>{`uv run python example/6_ik_test.py

# Position only, unit: m
> 0.28 0 0.3

# Position + orientation, position in m, orientation in deg
> 0.28 0 0.3 0 1 0`}</code></pre>
  </details>

  <details className="content-details">
    <summary>実機アームの MIT モード IK 制御: 7_arm_ik_control.py</summary>
    <div className="callout danger"><strong>実機アームのリスク:</strong> このスクリプトは実際のロボットアームを動かします。最初の実行では、遠く離れた目標ではなく、現在の姿勢に近い小さな目標を使用してください。</div>
    <pre><code>{`uv run python example/7_arm_ik_control.py

# Position only
> 0.3 0.0 0.4

# Position + orientation
> 0.3 0.0 0.4 0.0 0.0 0.5

# Read current joint state
> state

# Read current end-effector state
> end_state`}</code></pre>
  </details>

  <details className="content-details">
    <summary>なめらかな IK 軌道制御: 8_arm_traj_control.py</summary>
    <p>このスクリプトは、目標時間にわたってなめらかな軌道を補間します。目標姿勢へ直接ジャンプするよりも、一般的に実機アームのテストに対して安全です。</p>
    <pre><code>{`uv run python example/8_arm_traj_control.py

# Position only, default 2 seconds
> 0.3 0.0 0.4

# Position + orientation + duration
> 0.3 0.0 0.4 0.0 0.0 0.0 5.0`}</code></pre>
  </details>
</section>

<section id="gravity" className="section-card step-section">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>実行前の安全確認</strong>
    <p>ロボットの作業空間から<strong>半径1メートル</strong>以内の貴重品をすべて片付け、全ての人員を離れさせてください。このセクションを実行する前に、アームがしっかり固定されていることを確認してください。</p>
  </div>
</div>

<div className="step-title-row">
    <span className="step-pill">Step 4</span>
    <div>
      <h2>重力補償テスト</h2>
      <p>重力補償は、動力学モデルと実機ロボットとの整合性に依存します。URDF の質量、重心、慣性、または関節方向の誤りは、補償品質を低下させます。</p>
    </div>
  </div>

  <div className="feature-grid">
    <div><strong>基本的な重力補償</strong><span><code>tau = g(q)</code> を使用して関節の重力トルクを打ち消し、アームを浮いているように感じさせ、手で動かせるようにします。</span></div>
    <div><strong>高減衰ロックモード</strong><span>エンドエフェクタ速度が低いときに現在の関節位置をロックし、小さな外乱に対して抵抗し、速度しきい値を超えて押されたときにのみ目標を更新します。</span></div>
  </div>

  <details className="content-details" open>
    <summary>9_gravity_compensation.py</summary>
    <pre><code>{`uv run python example/9_gravity_compensation.py`}</code></pre>
    <p>ターミナルには、各関節の目標重力トルクが表示されます。停止するには <code>Ctrl+C</code> を押してください。</p>
  </details>

  <details className="content-details">
    <summary>10_gravity_compensation_lock.py</summary>
    <pre><code>{`uv run python example/10_gravity_compensation_lock.py`}</code></pre>
    <p>ターミナルには、<code>LOCKED</code> または <code>UPDATE</code>、さらにエンドエフェクタの並進速度、角速度、および各関節の重力トルクが表示されます。</p>
  </details>

  <div className="callout warning">
    <strong>デバッグのヒント:</strong> アームがゆっくりと下がる、振動する、または誤った方向に補償する場合は、まず URDF の質量 / 重心、関節方向、ゼロオフセット、モータトルク定数、摩擦のデッドゾーンを確認してください。ゲインを単純に上げないでください。
  </div>
</section>

<section id="simulation" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 5</span>
    <div>
      <h2>MeshCat シミュレーションと可視化</h2>
      <p>MeshCat はローカルで Web ベースのビジュアライザを起動します。スクリプトを起動した後、ターミナルに表示される URL を開いてロボットモデルを表示します。</p>
    </div>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic.png" alt="MeshCat trajectory simulation" />
  </div>

  <details className="content-details" open>
    <summary>順運動学シミュレーション: sim/fk_sim.py</summary>
    <pre><code>{`uv run python example/sim/fk_sim.py

# Input six joint angles, unit: deg
> 0 0 0 0 0 0
> 45 -30 15 -60 90 -180`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>逆運動学シミュレーション: sim/ik_sim.py</summary>
    <pre><code>{`uv run python example/sim/ik_sim.py

# Position only, unit: m
> 0.25 0.0 0.25

# Position + orientation, orientation unit: rad
> 0.25 0.0 0.25 0 0 0`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>軌道計画シミュレーション: sim/traj_sim.py</summary>
    <pre><code>{`uv run python example/sim/traj_sim.py

# Input x y z [roll pitch yaw], position in m, orientation in rad
> 0.25 0.0 0.25 0 0 0`}</code></pre>
    <p>このスクリプトは参照経路と実際の経路を表示し、MeshCat で完全な軌道アニメーションを再生します。</p>
  </details>

  <details className="content-details">
    <summary>ビジュアライザヘルパー: sim/visualizer.py</summary>
    <pre><code>{`from example.sim.visualizer import Visualizer
viz = Visualizer()
viz.update(q)
viz.draw_path(points, "path_name", color)`}</code></pre>
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>よくある問題</h2>
  </div>

  <details className="content-details" open>
    <summary>Permission denied</summary>
    <p>シリアルまたは CAN デバイスへの権限を付与します：</p>
    <pre><code>{`sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/can0 2>/dev/null || true`}</code></pre>
  </details>

  <details className="content-details">
    <summary>IK が失敗する、または異常な結果を返す</summary>
    <p>ターゲットが作業空間の外にないか、姿勢制約が厳しすぎないか、初期関節推定値が離れすぎていないか、関節リミットが正しいかを確認してください。デバッグ時は、まず位置のみの IK を試してください。</p>
  </details>

  <details className="content-details">
    <summary>MeshCat ページを開けない</summary>
    <p>ターミナルに表示された URL を確認してください。リモートマシン上で実行している場合は、そのホストへのポートフォワーディングまたはネットワークアクセスが有効になっていることを確認してください。</p>
  </details>

  <details className="content-details">
    <summary>重力補償が正確でない</summary>
    <p>重力補償は URDF 内のリンク質量、重心位置、および慣性に敏感です。実際の構造や 3D プリント部品が URDF と異なる場合は、実際のパラメータを測定し、URDF を更新してから再度テストしてください。</p>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>参考資料</span>
    <h2>参考資料</h2>
  </div>
  <div className="reference-grid">
    <a href="https://stack-of-tasks.github.io/pinocchio/">Pinocchio ドキュメント</a>
    <a href="https://github.com/rdeits/meshcat">MeshCat GitHub</a>
    <a href="https://github.com/vectorBH6/reBotArm_control_py">reBotArm_control_py</a>
    <a href="https://github.com/motorbridge/motorbridge">MotorBridge SDK</a>
    <a href="https://forum.seeedstudio.com/">Seeed Studio フォーラム</a>
  </div>
</section>


<section className="section-card course-path-section">
  <div className="section-title">
    <span>学習を続ける</span>
    <h2>reBot B601-DM 学習パス</h2>
    <p>これらのチュートリアルは、Robotics ページの学習パスと同じ順序に従います：<strong>Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2</strong>。</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/ja/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Getting Started</strong><span>開封、配線、電源チェック、ドライバ設定、キャリブレーション、初期動作テストを一通り完了します。</span></span>
      <span className="course-tag">ここから開始</span>
    </a>
    <a className="course-path-item" href="/ja/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>LeRobot テレオペレーションとデータ収集</strong><span>アームをテレオペレートし、カメラを接続し、データセットを記録し、ポリシーを学習させ、実機アームの挙動を評価します。</span></span>
      <span className="course-tag">データ収集</span>
    </a>
    <a className="course-path-item active" href="/ja/rebot_arm_b601_dm_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Pinocchio による運動学の可視化</strong><span>ロボットモデル、関節、座標フレーム、順運動学／逆運動学、軌道、および重力補償について理解します。</span></span>
      <span className="course-tag">現在の記事</span>
    </a>
    <a className="course-path-item" href="/ja/rebot_arm_b601_dm_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>Visual Grasping デモ</strong><span>RGB-D 認識、ハンドアイキャリブレーション、YOLO / GraspNet、把持姿勢生成を組み合わせて、実物体の把持を行います。</span></span>
      <span className="course-tag">アプリケーション</span>
    </a>
    <a className="course-path-item" href="/ja/rebot_arm_b601_dm_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>ROS2 連携</strong><span>アームを ROS2、RViz、MoveIt 2、プランニング、およびより高レベルなロボティクスワークフローに接続します。</span></span>
      <span className="course-tag">インテグレーション</span>
    </a>
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
.doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
.eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.hero-actions a:nth-child(2), .hero-actions a:nth-child(3) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.quick-note { margin: 1rem 0; padding: 0.95rem 1.1rem; border-radius: 16px; color: #7c2d12; background: #fff7ed; border: 1px solid #fed7aa; line-height: 1.65; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.86rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.image-frame { margin: 1rem 0; text-align: center; }
.image-frame img { max-width: 100%; border-radius: 16px; border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.08); }
.badge-row { display: flex; flex-wrap: wrap; gap: 0.55rem; margin: 1rem 0; }
.badge-row span { padding: 0.35rem 0.65rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 800; font-size: 0.78rem; }
.buy-box { margin: 1rem 0; }
.buy-box a { display: inline-flex; padding: 0.74rem 1.05rem; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); border-radius: 999px; text-decoration: none !important; font-weight: 850; }
.path-grid, .checklist-grid, .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.9rem; }
.path-card, .checklist-grid div, .feature-grid div { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-decoration: none !important; color: inherit; transition: all 0.2s ease; }
.path-card:hover { transform: translateY(-3px); border-color: rgba(37,99,235,0.35); box-shadow: 0 12px 26px rgba(37,99,235,0.10); }
.path-card b, .checklist-grid strong, .feature-grid strong { color: var(--rb-text); }
.path-card span, .checklist-grid span, .feature-grid span { color: var(--rb-muted); line-height: 1.6; font-size: 0.92rem; }
.path-card em { width: fit-content; padding: 0.32rem 0.6rem; border-radius: 999px; color: #047857; background: #d1fae5; font-style: normal; font-weight: 850; font-size: 0.75rem; }
.path-card.recommended { border-color: rgba(37,99,235,0.35); background: linear-gradient(135deg, rgba(37,99,235,0.10), rgba(20,184,166,0.09)); }
.step-title-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
.step-pill { flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; min-width: 74px; padding: 0.55rem 0.7rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-weight: 900; }
.step-title-row h2 { margin: 0 0 0.25rem; color: var(--rb-text); }
.step-title-row p { margin: 0; color: var(--rb-muted); line-height: 1.55; }
.content-details, .video-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 16px; background: var(--rb-surface-soft); overflow: hidden; }
.content-details summary, .video-details summary { cursor: pointer; padding: 0.95rem 1rem; color: var(--rb-text); font-weight: 850; list-style: none; }
.content-details summary::-webkit-details-marker, .video-details summary::-webkit-details-marker { display: none; }
.content-details summary::after, .video-details summary::after { content: "Open"; float: right; color: var(--rb-primary); font-size: 0.78rem; }
.content-details[open] summary::after, .video-details[open] summary::after { content: "Close"; }
.content-details > :not(summary), .video-details > :not(summary) { margin-left: 1rem; margin-right: 1rem; }
.content-details > :last-child, .video-details > :last-child { margin-bottom: 1rem; }
.command-card { margin: 1rem 0; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); }
.command-card h3 { margin-top: 0; color: var(--rb-text); }
.command-card p { color: var(--rb-muted); line-height: 1.65; }
.callout { margin: 1rem 0; padding: 0.95rem 1rem; border-radius: 16px; border: 1px solid rgba(37,99,235,0.22); background: var(--rb-primary-soft); color: var(--rb-text); line-height: 1.65; }
.callout.warning { border-color: rgba(245,158,11,0.34); background: #fffbeb; color: #78350f; }
.callout.danger { border-color: rgba(239,68,68,0.34); background: #fef2f2; color: #7f1d1d; }
.video-container { position: relative; width: 100%; padding-bottom: 56.25%; margin: 1rem 0; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border); background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.two-col { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; }
.reference-grid a { display: block; padding: 0.85rem 0.95rem; border-radius: 14px; text-decoration: none !important; color: var(--rb-text); background: var(--rb-surface-soft); border: 1px solid var(--rb-border); transition: all 0.18s ease; }
.reference-grid a:hover { color: var(--rb-primary); transform: translateY(-2px); }
.rebot-page table img { max-width: 220px; height: auto; border-radius: 10px; }
.rebot-page table { display: table; width: 100%; }
pre { overflow-x: auto; border-radius: 16px; border: 1px solid var(--rb-border); }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-accent-soft: rgba(45,212,191,0.14); --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .quick-note { color: #fed7aa; background: rgba(251,146,60,0.12); border-color: rgba(251,146,60,0.35); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .callout.warning { background: rgba(245,158,11,0.12); color: #fde68a; }
html[data-theme='dark'] .callout.danger { background: rgba(239,68,68,0.12); color: #fecaca; }
html[data-theme='dark'] .path-card em { color: #bbf7d0; background: rgba(34,197,94,0.18); }
@media (max-width: 900px) { .doc-hero, .two-col { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } .step-title-row { align-items: flex-start; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .step-title-row { display: block; } .step-pill { margin-bottom: 0.75rem; } }

/* 共有の安全警告とコースナビゲーション */
.safety-alert {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.9rem;
  align-items: flex-start;
  margin: 1.15rem 0 1.35rem;
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
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact {
  margin: 1rem 0;
  padding: 0.9rem 1rem;
  border-radius: 16px;
}
.safety-alert.compact .safety-alert-content strong { margin-bottom: 0.25rem; }
.course-nav-section {
  margin-top: 1.4rem;
}
.course-path-grid {
  display: grid;
  gap: 0.85rem;
}
.course-step {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border, rgba(148, 163, 184, 0.28));
  background: var(--rb-surface, var(--panel-bg, #ffffff));
  text-decoration: none !important;
  color: var(--rb-text, var(--text-main, #111827));
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.course-step:hover {
  transform: translateY(-1px);
  border-color: rgba(37, 99, 235, 0.32);
  box-shadow: 0 16px 32px rgba(37, 99, 235, 0.10);
}
.course-step.active {
  border-color: rgba(37, 99, 235, 0.42);
  background: linear-gradient(135deg, rgba(239, 246, 255, 0.92), rgba(240, 253, 250, 0.78));
}
.course-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 999px;
  color: #ffffff;
  background: #2563eb;
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.24);
}
.course-step strong {
  display: block;
  color: var(--rb-text, var(--text-main, #111827));
  font-size: 1rem;
  margin-bottom: 0.24rem;
}
.course-step small {
  display: block;
  color: var(--rb-muted, var(--text-muted, #64748b));
  line-height: 1.55;
  font-size: 0.92rem;
}
.course-step em {
  justify-self: end;
  white-space: nowrap;
  font-style: normal;
  font-size: 0.78rem;
  font-weight: 800;
  color: #2563eb;
  background: #eff6ff;
  border: 1px solid rgba(37, 99, 235, 0.2);
  border-radius: 999px;
  padding: 0.35rem 0.65rem;
}
html[data-theme='dark'] .safety-alert {
  border-color: rgba(248, 113, 113, 0.42);
  background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18));
  color: #fecaca;
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28);
}
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong,
html[data-theme='dark'] .safety-alert-content p,
html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
html[data-theme='dark'] .course-step {
  background: rgba(31, 32, 35, 0.84);
  border-color: rgba(148, 163, 184, 0.22);
}
html[data-theme='dark'] .course-step.active {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.18), rgba(20, 184, 166, 0.10));
  border-color: rgba(96, 165, 250, 0.38);
}
html[data-theme='dark'] .course-step strong { color: #e5e7eb; }
html[data-theme='dark'] .course-step small { color: #cbd5e1; }
html[data-theme='dark'] .course-step em { color: #93c5fd; background: rgba(37, 99, 235, 0.16); border-color: rgba(96, 165, 250, 0.28); }
@media (max-width: 640px) {
  .safety-alert { grid-template-columns: 1fr; }
  .course-step { grid-template-columns: auto minmax(0, 1fr); }
  .course-step em { grid-column: 2; justify-self: start; }
}




/* 洗練されたステップカードとコースパスの調整 */
.step-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
  margin: 1rem 0 1.35rem;
}
.step-card {
  position: relative;
  padding: 1rem 1.05rem 1rem 1.1rem;
  border: 1px solid var(--rb-border);
  border-radius: 18px;
  background: linear-gradient(180deg, var(--rb-surface, #fff), var(--rb-surface-soft, #f8fafc));
  box-shadow: 0 12px 26px rgba(15, 23, 42, 0.06);
}
.step-card .step-mini {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.1rem;
  height: 2.1rem;
  padding: 0 0.65rem;
  margin-bottom: 0.65rem;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent));
  font-weight: 900;
  font-size: 0.86rem;
}
.step-card strong {
  display: block;
  color: var(--rb-text);
  font-size: 1rem;
  margin-bottom: 0.35rem;
}
.step-card p,
.step-card span {
  display: block;
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.65;
}
.module-summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
  margin: 1rem 0 1.35rem;
}
.module-summary-card {
  padding: 1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border);
  background: var(--rb-surface, #fff);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.module-summary-card b {
  display: block;
  margin-bottom: 0.35rem;
  color: var(--rb-text);
}
.module-summary-card span {
  display: block;
  color: var(--rb-muted);
  line-height: 1.65;
}
.path-grid > div:not([class]) {
  padding: 1rem;
  border: 1px solid var(--rb-border);
  border-radius: 18px;
  background: var(--rb-surface, #fff);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.path-card p { margin: 0.35rem 0 0; color: var(--rb-muted); line-height: 1.6; }
.course-path-section { margin-top: 2rem; }
.course-path-grid {
  display: grid;
  gap: 0.85rem;
  margin-top: 1rem;
}
.course-path-item,
.course-step {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 0.95rem;
  align-items: center;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border);
  background: var(--rb-surface, #fff);
  text-decoration: none !important;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.course-path-item.active,
.course-step.active {
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
.course-path-copy strong,
.course-step strong {
  display: block;
  color: var(--rb-text);
  font-size: 1rem;
  margin-bottom: 0.25rem;
}
.course-path-copy span,
.course-step small {
  display: block;
  color: var(--rb-muted);
  line-height: 1.6;
}
.course-tag,
.course-step em {
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
@media (max-width: 720px) {
  .course-path-item,
  .course-step { grid-template-columns: auto minmax(0, 1fr); }
  .course-tag,
  .course-step em { grid-column: 2; justify-self: start; }
}
html[data-theme='dark'] .step-card,
html[data-theme='dark'] .module-summary-card,
html[data-theme='dark'] .course-path-item,
html[data-theme='dark'] .course-step,
html[data-theme='dark'] .path-grid > div:not([class]) {
  background: rgba(15, 23, 42, 0.72);
  border-color: rgba(148, 163, 184, 0.22);
}
html[data-theme='dark'] .course-path-item.active,
html[data-theme='dark'] .course-step.active {
  background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12));
}

`}</style>
