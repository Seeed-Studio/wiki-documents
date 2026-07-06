---
description: このチュートリアルでは、ロボットアーム reBot Arm B601-RS 上で、Pinocchio と MeshCat を用いた運動学解析および可視化の方法を紹介します。
title: reBot Arm B601-RS 向け Pinocchio と MeshCat 入門
keywords:
  - Pinocchio
  - MeshCat
  - ロボットアーム
  - ロボット
  - LeRobot
  - 運動学
  - Robostride
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_arm_b601_rs_pinocchio_meshcat
sku: 100019336
last_update:
  date: 2026-07-05
  author: LiJie
translation:
  skip:
    - zh-CN
createdAt: '2026-06-11'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_pinocchio_meshcat/
---

# reBot Arm B601-RS 向け Pinocchio と MeshCat 入門

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>B601-RS の運動学、軌道、重力補償、および MeshCat 可視化をステップバイステップでデバッグ</h2>
    <p>このガイドでは、低レベルな reBotArm_control_py ワークフローを、より安全な学習シーケンスに整理します。環境のインストール、CAN 通信の確認、単一 RobStride モーターのテスト、FK / IK の検証、MeshCat での軌道シミュレーションを行い、その後にはじめて実機アームを動かします。</p>
    <div className="hero-actions">
      <a href="#workflow">ワークフローを見る</a>
      <a href="#install">インストール</a>
      <a href="#hardware-control">実機制御</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
    <strong>B601-RS · Pinocchio / MeshCat</strong>
    <span>まずシミュレーション。次に小さな動き。最後に重力補償。</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全上の警告：実行前にロボット作業空間を必ずクリアしてください</strong>
    <p>ロボットアームを動かすプログラムを実行する前に、ロボットの作業空間から<strong>半径 1 メートル</strong>以内の貴重品、壊れやすい物、工具、ケーブル、および無関係な物体をすべて取り除いてください。デバッグおよび動作中は、作業者はロボットの動作範囲から離れている必要があります。</p>
    <ul>
      <li>ロボットアームの電源が入っている状態では、関節、モーター、リンク、グリッパー、エンドエフェクタには触れないでください。</li>
      <li>MIT 制御、IK 制御、軌道制御、重力補償、または任意の実機アーム用スクリプトを実行する前に、アームのベースが確実に固定されていることを確認してください。</li>
      <li>異常な動き、異音、振動、ケーブルの緩み、電源接触不良、通信断などが発生した場合は、直ちにプログラムを停止し、点検前にシステムの電源を切ってください。</li>
      <li>モーターケーブル、CAN ケーブル、PCAN-USB アダプタ、XT30 コネクタ、電源コネクタを抜き差しする際は、必ずシステムの電源を切ってから行ってください。</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="Pinocchio MeshCat navigation">
  <a href="#workflow">ワークフロー</a>
  <a href="#overview">概要</a>
  <a href="#install">インストール</a>
  <a href="#debug">モーターデバッグ</a>
  <a href="#kinematics">FK / IK</a>
  <a href="#simulation">MeshCat</a>
  <a href="#hardware-control">実機制御</a>
  <a href="#gravity">重力</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="workflow" className="section-card step-section">
  <div className="section-title">
    <span>ここから開始</span>
    <h2>推奨される安全なワークフロー</h2>
    <p>Pinocchio と MeshCat は強力な低レベルデバッグツールです。以下の順序に従うことで、ソフトウェアのみの確認から、リスクを抑えた実機ハードウェア制御へと進むことができます。</p>
  </div>

  <div className="step-card-grid">
    <a className="step-card recommended" href="#install">
      <span className="step-mini">Step 0</span>
      <strong>B601-RS クイックスタートを完了する</strong>
      <p>低レベルスクリプトを使用する前に、電源、配線、PCAN-USB / SocketCAN、ゼロ位置、および MotorBridge の確認を完了してください。</p>
    </a>
    <a className="step-card" href="#install">
      <span className="step-mini">Step 1</span>
      <strong>環境をインストールして同期する</strong>
      <p>reBotArm_control_py をクローンし、uv sync を実行し、ハードウェア構成を RS バージョンに切り替えます。</p>
    </a>
    <a className="step-card" href="#debug">
      <span className="step-mini">Step 2</span>
      <strong>CAN とモーター状態を検証する</strong>
      <p>can0 を立ち上げ、RS06 単一モーターコンソールを実行し、状態フィードバックを確認してゼロ位置を検証します。</p>
    </a>
    <a className="step-card" href="#kinematics">
      <span className="step-mini">Step 3</span>
      <strong>ソフトウェア上で FK / IK を検証する</strong>
      <p>実機を動かす前に、単位、関節リミット、作業空間、フレーム定義、IK の収束性を確認します。</p>
    </a>
    <a className="step-card" href="#simulation">
      <span className="step-mini">Step 4</span>
      <strong>MeshCat で可視化する</strong>
      <p>実機実行の前に、ブラウザベースの 3D ビューアでロボット姿勢、ターゲットフレーム、計画軌道を確認します。</p>
    </a>
    <a className="step-card" href="#hardware-control">
      <span className="step-mini">Step 5</span>
      <strong>実機アームをゆっくり動かす</strong>
      <p>IK および軌道スクリプトでは、小さなターゲット変化、長めの実行時間、明確な非常停止プランを用いてください。</p>
    </a>
    <a className="step-card" href="#gravity">
      <span className="step-mini">Step 6</span>
      <strong>最後に重力補償を調整する</strong>
      <p>ゼロオフセット、関節方向、URDF パラメータ、モーター挙動が検証された後にのみ、重力補償をテストしてください。</p>
    </a>
  </div>
</section>

<section id="overview" className="section-card">
  <div className="section-title">
    <span>概要</span>
    <h2>このチュートリアルで扱う内容</h2>
    <p>このチュートリアルでは、B601-RS RobStride バージョンを対象に、運動学、軌道生成、可視化、および動力学に基づく補償に焦点を当てます。</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Pinocchio モデル解析</b><span>ロボットモデルを用いて FK、IK、ヤコビアン、重力トルク、軌道追従ターゲットを計算します。</span></div>
    <div className="module-summary-card"><b>MeshCat 可視化</b><span>ブラウザベースの 3D ビューアを開き、ロボット状態、ターゲット姿勢、参照パス、実際の軌道を確認します。</span></div>
    <div className="module-summary-card"><b>MotorBridge 制御経路</b><span>MotorBridge と SocketCAN を使用して、CAN インターフェース経由で RobStride モーターと通信します。</span></div>
    <div className="module-summary-card"><b>実機アーム実験</b><span>シミュレーションと小さな動きでの検証後に、IK、スムーズな軌道、重力補償スクリプトを実行します。</span></div>
  </div>

  <div className="feature-grid">
    <div><strong>順運動学 / 逆運動学</strong><span>関節角度からエンドエフェクタ姿勢を計算する、またはターゲット姿勢から関節角度を解きます。</span></div>
    <div><strong>軌道計画と追従</strong><span>SE(3) 測地線軌道計画と CLIK 追従を用いて、急激な動きを抑制します。</span></div>
    <div><strong>重力補償</strong><span>動力学モデルから関節の重力トルクを計算し、フローティングや姿勢保持の効果をテストします。</span></div>
    <div><strong>マルチモードモーター制御</strong><span>デバッグの各段階に応じて、MIT、POS_VEL、速度制御モードを使用します。</span></div>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>ハードウェア</span>
    <h2>B601-RS のハードウェア仕様</h2>
    <p>RS バージョンは RobStride モーター、1 Mbps の CAN 通信、および 48V 電源を使用します。</p>
  </div>

  <div className="spec-grid">
    <div className="spec-card"><b>ロボットアーム</b><span>グリッパー付き reBot Arm B601-RS 組立キット</span></div>
    <div className="spec-card"><b>自由度</b><span>グリッパーを含めて 6 + 1</span></div>
    <div className="spec-card"><b>リーチ</b><span>グリッパーあり 754.7 mm / グリッパーなし 587.5 mm</span></div>
    <div className="spec-card"><b>可搬重量</b><span>定格 2.5 kg / 最大 5 kg</span></div>
    <div className="spec-card"><b>モーター</b><span>RobStride 06 × 3 および RobStride 00 × 4</span></div>
    <div className="spec-card"><b>通信</b><span>1 Mbps の CAN バス、通常 can0 としてマッピング</span></div>
    <div className="spec-card"><b>電源</b><span>DC 48V、推奨 15A 電源</span></div>
    <div className="spec-card"><b>ソフトウェア</b><span>Ubuntu 22.04+、Python 3.10+、Pinocchio、MeshCat</span></div>
  </div>

  <details className="content-details">
    <summary>関節可動範囲とモーター情報</summary>

    | 項目 | 仕様 |
    |------|---------------|
    | 関節可動範囲 | J1: ±150°、J2: 220° ～ 0°、J3: 220° ～ 0°、J4: ±90°、J5: ±90°、J6: ±180°、グリッパー: 345° ～ 0° |
    | 繰り返し精度 | 0.1 mm |
    | 自重 | 6.7 kg |
    | RobStride 00 定格 / 最大トルク | 5 N·m / 14 N·m |
    | RobStride 06 定格 / 最大トルク | 11 N·m / 36 N·m |
    | 定格電圧 | 48V |
    | 制御モード | MIT モード、速度モード、位置モード、トルクモード |
  </details>

  <details className="content-details">
    <summary>部品表</summary>

    | コンポーネント | 数量 | 同梱 |
    |-----------|----------|----------|
    | reBot Arm B601-RS ロボットアーム | 1 | ✅ |
    | CAN アダプタ | 1 | ✅ |
    | DC 48V 電源アダプタ | 1 | ✅ |
    | USB-C ケーブル | 1 | ✅ |
    | グリッパー | 1 | ✅ |
  </details>
</section>

<section id="install" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 1</span>
    <div>
      <h2>環境をインストールし、RS ハードウェア構成を選択する</h2>
      <p>このステップでは reBotArm_control_py を準備し、構成が Damiao DM ファイルではなく RobStride RS ハードウェアファイルを使用していることを確認します。</p>
    </div>
  </div>

  <div className="command-grid">
    <div className="command-card">
      <h3>1. uv をインストールする</h3>
      <pre><code>{`curl -LsSf https://astral.sh/uv/install.sh | sh`}</code></pre>
    </div>
    <div className="command-card">
      <h3>2. リポジトリをクローンする</h3>
      <pre><code>{`git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py`}</code></pre>
    </div>
    <div className="command-card">
      <h3>3. 依存関係を同期する</h3>
      <pre><code>{`uv sync`}</code></pre>
    </div>
  </div>

  <div className="callout warning">
    <strong>B601-RS の重要な設定:</strong> サンプルを実行する前に、<code>{`config/rebotarm.yaml`}</code> を開き、ハードウェア設定を RS 用ファイルに切り替えてください。
  </div>

  <pre><code>{`# Before modification
hardware_yaml: "rebotarm_dm.yaml"

# After modification
hardware_yaml: "rebotarm_rs.yaml"`}</code></pre>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>なぜ重要か</b><span>DM 版と RS 版ではモータープロトコルが異なります。設定が DM 用ファイルのままだと、RS モーターが正しく認識・制御されない可能性があります。</span></div>
    <div className="module-summary-card"><b>いつ再確認するか</b><span>新しいコードを取得したとき、ブランチを切り替えたとき、またはプロジェクトを別のマシンにコピーしたときは、このファイルを再度確認してください。</span></div>
  </div>
</section>

<section id="debug" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>モーターデバッグ前の安全確認</strong>
      <p>作業エリアを片付け、<strong>半径 1 メートル</strong> 以内には誰も近づかないようにし、モーターを有効化する前にアームが機械的に固定されていることを確認してください。</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>CAN を立ち上げてモーターの挙動を確認する</h2>
      <p>CAN インターフェース、モーター応答、ゼロ位置、関節の回転方向を確認する前に、アーム全体の動作を実行しないでください。</p>
    </div>
  </div>

  <div className="command-card wide">
    <h3>PCAN-USB 用に SocketCAN を設定する</h3>
    <pre><code>{`sudo modprobe peak_usb
ip -br link

sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
ip -details link show can0`}</code></pre>
  </div>

  <div className="debug-grid">
    <details className="content-details" open>
      <summary>2.1 単一モーターコンソール: 0x01rs06_test.py</summary>
      <p>このコンソールを使って、RobStride RS06 モーターを安全に有効化・無効化し、ping を送り、コマンドできることを確認します。</p>
      <pre><code>{`uv run python example/0x01rs06_test.py`}</code></pre>
      <div className="content-table">
        <table>
          <thead><tr><th>コマンド</th><th>説明</th></tr></thead>
          <tbody>
            <tr><td><code>enable</code> / <code>disable</code></td><td>モーターを有効化または無効化します。</td></tr>
            <tr><td><code>set_zero</code></td><td>現在位置をソフトウェアゼロとして設定します。</td></tr>
            <tr><td><code>state</code></td><td>現在のモーター状態を読み取ります。</td></tr>
            <tr><td><code>ping</code></td><td>モーターが応答するかどうかを確認します。</td></tr>
            <tr><td><code>clear_error</code></td><td>モーターのエラーフラグをクリアします。</td></tr>
            <tr><td><code>mode mit</code> / <code>mode posvel</code> / <code>mode vel</code></td><td>制御モードを切り替えます。</td></tr>
            <tr><td><code>mit pos vel kp kd</code></td><td>MIT モードコマンドを送信します。</td></tr>
            <tr><td><code>posvel pos vlim</code></td><td>位置・速度コマンドを送信します。</td></tr>
            <tr><td><code>vel velocity</code></td><td>速度コマンドを送信します。</td></tr>
          </tbody>
        </table>
      </div>
    </details>

    <details className="content-details" open>
      <summary>2.2 ゼロキャリブレーションと角度モニタリング: 2_zero_and_read.py</summary>
      <p>このスクリプトを使って、すべての関節のゼロを設定し、関節角度をリアルタイムに表示します。FK / IK を使用する前にゼロ姿勢を確認してください。</p>
      <pre><code>{`uv run python example/2_zero_and_read.py`}</code></pre>
    </details>

    <details className="content-details">
      <summary>2.3 MIT 全関節制御: 3_mit_control.py</summary>
      <div className="callout danger"><strong>高トルク警告:</strong> MIT モードは素早く応答します。ごく小さな角度から開始し、人や物をアームから離しておいてください。</div>
      <pre><code>{`uv run python example/3_mit_control.py
> 0 0 0 0 0 0
> 0 0 0 0 0 0 2.0`}</code></pre>
    </details>

    <details className="content-details">
      <summary>2.4 POS_VEL 全関節制御: 4_pos_vel_control.py</summary>
      <p>POS_VEL モードは、滑らかな関節動作テストを始める際の、より良い出発点となることが多いです。</p>
      <pre><code>{`uv run python example/4_pos_vel_control.py
> 0 0 0 0 0 0`}</code></pre>
    </details>
  </div>
</section>

<section id="kinematics" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>順運動学と逆運動学を検証する</h2>
      <p>実機ロボットを動かす前に、FK / IK スクリプトを使って、単位系、座標系、関節制限、および到達可能な作業空間を検証します。</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>順運動学</b><span>関節角度を入力し、エンドエフェクタの位置、回転行列、オイラー角を計算します。</span></div>
    <div className="module-summary-card"><b>逆運動学</b><span>目標姿勢を入力して関節角度を解きます。制約を減らすため、まずは位置のみの目標から始めてください。</span></div>
    <div className="module-summary-card"><b>単位チェック</b><span>位置はメートル単位です。いくつかのサンプルは度を使用し、シミュレーションスクリプトはラジアンを使用する場合があります。</span></div>
  </div>

  <details className="content-details" open>
    <summary>3.1 順運動学: 5_fk_test.py</summary>
    <pre><code>{`uv run python example/5_fk_test.py
> 0 0 0 0 0 0
> 45 -30 15 -60 90 180`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>3.2 逆運動学: 6_ik_test.py</summary>
    <pre><code>{`uv run python example/6_ik_test.py

# Position only, unit: m
> 0.25 0.0 0.15

# Position + orientation, position in m, orientation in degrees
> 0.25 0.0 0.15 0 0 0`}</code></pre>
  </details>
</section>

<section id="simulation" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 4</span>
    <div>
      <h2>実機動作の前に MeshCat シミュレーションを実行する</h2>
      <p>MeshCat を使うと、ロボットの姿勢や軌道を視覚的に確認できます。IK や軌道コマンドを実機アームに送る前に使用してください。</p>
    </div>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic_rs.png" alt="B601-RS MeshCat trajectory simulation" />
  </div>

  <div className="debug-grid">
    <details className="content-details" open>
      <summary>4.1 順運動学シミュレーション: sim/fk_sim.py</summary>
      <pre><code>{`uv run python example/sim/fk_sim.py

# Input six joint angles, unit: degrees
> 0 0 0 0 0 0
> 45 -30 15 -60 90 -180`}</code></pre>
    </details>

    <details className="content-details" open>
      <summary>4.2 逆運動学シミュレーション: sim/ik_sim.py</summary>
      <pre><code>{`uv run python example/sim/ik_sim.py

# Position only, unit: m
> 0.25 0.0 0.25

# Position + orientation, orientation unit: radians
> 0.25 0.0 0.25 0 0 0`}</code></pre>
    </details>

    <details className="content-details" open>
      <summary>4.3 軌道計画シミュレーション: sim/traj_sim.py</summary>
      <pre><code>{`uv run python example/sim/traj_sim.py

# Input x y z [roll pitch yaw], position in m, orientation in radians
> 0.25 0.0 0.25 0 0 0`}</code></pre>
      <p>このスクリプトは軌道の統計情報を表示し、MeshCat で軌道全体を再生し、参照軌道と実際の軌道の両方を表示します。</p>
    </details>

    <details className="content-details">
      <summary>4.4 ビジュアライザーヘルパー: sim/visualizer.py</summary>
      <pre><code>{`from example.sim.visualizer import Visualizer

viz = Visualizer()
viz.update(q)
viz.draw_path(points, "path_name", color)`}</code></pre>
    </details>
  </div>
</section>

<section id="hardware-control" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>実機アーム制御前の安全確認</strong>
      <p>価値のある物をすべて片付け、<strong>半径 1 メートル</strong> 以内には誰も近づかないようにしてください。初回実行では、小さな目標変化と長めの時間を設定してください。</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 5</span>
    <div>
      <h2>実機アームの IK と軌道制御を慎重に実行する</h2>
      <p>CAN 通信、ゼロ位置、FK / IK、および MeshCat シミュレーションが検証された後にのみ、これらのスクリプトを実行してください。</p>
    </div>
  </div>

  <div className="debug-grid">
    <details className="content-details" open>
      <summary>5.1 IK リアルタイム制御: 7_arm_ik_control.py</summary>
      <p>このスクリプトを使用して、エンドエフェクタの目標姿勢を制御します。現在の姿勢に近い姿勢から始めてください。</p>
      <pre><code>{`uv run python example/7_arm_ik_control.py

# Position only
> 0.3 0.0 0.2

# Position + orientation
> 0.3 0.1 0.25 0 0.5 0

# Read current state
> state
> pos`}</code></pre>
    </details>

    <details className="content-details" open>
      <summary>5.2 スムーズな軌道制御: 8_arm_traj_control.py</summary>
      <p>このスクリプトは SE(3) 測地線軌道計画と CLIK 追従を使用します。より安全な初回テストのために、長めの duration を使用してください。</p>
      <pre><code>{`uv run python example/8_arm_traj_control.py

# x y z roll pitch yaw duration
> 0.3 0.0 0.3 0 0.4 0 5.0`}</code></pre>
    </details>
  </div>
</section>

<section id="gravity" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>重力補償前の安全確認</strong>
      <p>重力補償は、停止時にモーターを直接無効化する場合があります。終了する前にアームを支えるか、安全な姿勢に移動させてください。</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">ステップ 6</span>
    <div>
      <h2>すべての基本チェックの後に重力補償をテストする</h2>
      <p>重力補償は、URDF の質量、重心、慣性、モーターの向き、ゼロオフセット、および摩擦に依存します。ゲインを闇雲に調整しないでください。</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>基本フローティングモード</b><span>重力フィードフォワードトルクを使用してアームを軽く感じさせ、手動で動かせるようにします。</span></div>
    <div className="module-summary-card"><b>速度ロックモード</b><span>エンドエフェクタの速度が低いときに現在の姿勢をロックし、アームを押したときにターゲットを更新します。</span></div>
    <div className="module-summary-card"><b>安全性チューニング</b><span>最初のテストでは選択した関節のみを有効にし、トルクスケーリングを徐々に調整します。</span></div>
  </div>

  <details className="content-details" open>
    <summary>6.1 基本的な重力補償: 9_gravity_compensation.py</summary>
    <pre><code>{`uv run python example/9_gravity_compensation.py`}</code></pre>
    <div className="callout danger"><strong>終了時の警告:</strong> Ctrl+C でスクリプトを停止すると、プログラムはすべてのモーターを直接無効にし、アームは自動的にゼロ位置に戻りません。終了する前にアームを保持するか、安全な姿勢に移動させてください。</div>
  </details>

  <details className="content-details" open>
    <summary>6.2 エンドエフェクタ速度ロック: 10_gravity_compensation_lock.py</summary>
    <pre><code>{`uv run python example/10_gravity_compensation_lock.py`}</code></pre>
    <p>ターミナルには、LOCKED または UPDATE、エンドエフェクタの速度、角速度、および重力補償トルクが表示されます。</p>
  </details>

  <details className="content-details">
    <summary>6.3 安全テストのために選択した関節のみを有効にする</summary>
    <pre><code>{`ENABLED_JOINTS = ["joint1"]  # Enable only joint1 for first safety tests`}</code></pre>
  </details>

  <details className="content-details">
    <summary>6.4 各関節の補償を慎重に調整する</summary>
    <pre><code>{`tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3`}</code></pre>
    <p>例えば、<code>{`tau_g[2] *= 1.2`}</code> は関節 2 の重力補償トルクを 20% 増加させます。実際のフローティングの状態に基づいて、一度に 1 項目ずつ調整してください。</p>
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>よくある問題</h2>
  </div>

  <details className="content-details" open>
    <summary>Permission denied</summary>
    <p>B601-RS の場合、まず CAN インターフェースが存在し、up 状態であるかを確認してください。SocketCAN デバイスを使用する場合は、サンプルを実行する前に <code>{`can0`}</code> を設定します。</p>
    <pre><code>{`ip -br link
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up`}</code></pre>
  </details>

  <details className="content-details">
    <summary>IK の解が失敗する、または異常な結果を返す</summary>
    <p>目標姿勢が作業空間内にあるか、姿勢制約が厳しすぎないか、初期関節推定値が離れすぎていないか、関節リミットが正しいかを確認してください。まず位置のみの IK を試してください。</p>
  </details>

  <details className="content-details">
    <summary>RobStride モーターのステータスを読み取れない</summary>
    <p>一部の MotorBridge プロトコルパスでは、DM モーターと同じステータスフィールドが公開されていない場合があります。実際の動作フィードバックと ping コマンドを使用して通信を確認してください。</p>
  </details>

  <details className="content-details">
    <summary>重力補償が不十分</summary>
    <p>URDF の質量、重心、慣性、関節の向き、ゼロオフセット、トルク定数、摩擦、および組み立ての違いを確認してください。単純にゲインを増やさないでください。</p>
  </details>

  <details className="content-details">
    <summary>Damiao と RobStride のモーター設定を切り替える方法</summary>
    <p>設定ファイルを変更し、対応するハードウェア YAML を読み込みます。B601-RS の場合は <code>{`rebotarm_rs.yaml`}</code> を使用します。</p>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>参考</span>
    <h2>参考ドキュメント</h2>
  </div>
  <div className="reference-grid">
    <a href="https://stack-of-tasks.github.io/pinocchio/" target="_blank">Pinocchio 公式ドキュメント</a>
    <a href="https://github.com/rdeits/meshcat" target="_blank">MeshCat GitHub</a>
    <a href="https://github.com/motorbridge/motorbridge" target="_blank">MotorBridge SDK</a>
    <a href="https://github.com/vectorBH6/reBotArm_control_py" target="_blank">reBotArm_control_py</a>
    <a href="https://forum.seeedstudio.com/" target="_blank">Seeed Studio フォーラム</a>
  </div>
</section>

<section className="section-card course-path-section">
  <div className="section-title">
    <span>学習を続ける</span>
    <h2>reBot B601-RS 学習パス</h2>
    <p>これらのチュートリアルは、次の順序で進められるように設計されています：Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2。以下のリンクを使用してモジュール間を移動できます。</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/ja/rebot_b601_rs_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Getting Started</strong><span>開封、配線、電源チェック、PCAN-USB セットアップ、キャリブレーション、および最初の動作テストを完了します。</span></span>
      <span className="course-tag">ここから開始</span>
    </a>
    <a className="course-path-item" href="/ja/rebot_arm_b601_rs_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>LeRobot テレオペレーションとデータ収集</strong><span>アームをテレオペレートし、カメラを接続し、データセットを記録し、模倣学習タスクを準備します。</span></span>
      <span className="course-tag">データ収集</span>
    </a>
    <a className="course-path-item active" href="/ja/rebot_arm_b601_rs_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Pinocchio 運動学の可視化</strong><span>ロボットモデル、関節、座標フレーム、順運動学 / 逆運動学、軌道、および重力補償について理解します。</span></span>
      <span className="course-tag">現在の記事</span>
    </a>
    <a className="course-path-item" href="/ja/rebot_arm_b601_rs_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>ビジュアル把持デモ</strong><span>RGB-D 認識、ハンドアイキャリブレーション、YOLO / GraspNet、および把持姿勢生成を組み合わせて、実物体の把持を行います。</span></span>
      <span className="course-tag">アプリケーション</span>
    </a>
    <a className="course-path-item" href="/ja/rebot_arm_b601_rs_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>ROS2 統合</strong><span>アームを ROS2、RViz、MoveIt 2、プランニング、およびより高レベルのロボティクスワークフローに接続します。</span></span>
      <span className="course-tag">統合</span>
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
  --rb-warning: #f59e0b;
  --rb-danger: #ef4444;
  --rb-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  width: 100%;
}
.doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
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
.step-title-row { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 1rem; align-items: start; margin-bottom: 1.1rem; }
.step-pill, .step-mini { display: inline-flex; align-items: center; justify-content: center; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-weight: 900; }
.step-pill { padding: 0.5rem 0.8rem; white-space: nowrap; }
.step-card-grid, .module-summary-grid, .spec-grid, .debug-grid, .command-grid, .feature-grid, .reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 1rem; }
.step-card, .module-summary-card, .spec-card, .command-card, .content-details, .reference-grid a, .feature-grid div { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 18px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: inherit; text-decoration: none !important; box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05); }
.step-card.recommended { border-color: rgba(37,99,235,0.42); background: linear-gradient(135deg, rgba(239,246,255,0.96), rgba(240,253,250,0.82)); }
.step-card .step-mini { width: fit-content; min-width: 2.1rem; height: 2.1rem; padding: 0 0.65rem; margin-bottom: 0.3rem; font-size: 0.86rem; }
.step-card strong, .module-summary-card b, .spec-card b, .feature-grid strong, .command-card h3 { color: var(--rb-text); margin: 0; }
.step-card p, .module-summary-card span, .spec-card span, .feature-grid span, .content-details p { color: var(--rb-muted); line-height: 1.65; margin: 0; }
.command-card.wide { grid-column: 1 / -1; }
.content-details summary { cursor: pointer; color: var(--rb-text); font-weight: 850; }
.content-table { overflow-x: auto; }
.image-frame { margin: 1rem 0; padding: 0.7rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface-soft); }
.image-frame img { width: 100%; border-radius: 14px; display: block; }
.callout { margin: 1rem 0; padding: 0.95rem 1rem; border-radius: 16px; border: 1px solid var(--rb-border); background: var(--rb-surface-soft); color: var(--rb-muted); line-height: 1.65; }
.callout.warning { border-color: rgba(245,158,11,0.36); background: #fffbeb; color: #78350f; }
.callout.danger { border-color: rgba(239,68,68,0.38); background: #fef2f2; color: #7f1d1d; }
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
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary); color: #fff; font-weight: 900; box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .step-card, html[data-theme='dark'] .module-summary-card, html[data-theme='dark'] .spec-card, html[data-theme='dark'] .command-card, html[data-theme='dark'] .content-details, html[data-theme='dark'] .reference-grid a, html[data-theme='dark'] .feature-grid div, html[data-theme='dark'] .course-path-item { background: rgba(15, 23, 42, 0.72); border-color: rgba(148, 163, 184, 0.22); }
html[data-theme='dark'] .step-card.recommended, html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
html[data-theme='dark'] .callout.warning { background: rgba(245,158,11,0.12); color: #fde68a; }
html[data-theme='dark'] .callout.danger { background: rgba(127,29,29,0.26); color: #fecaca; }
html[data-theme='dark'] .safety-alert { border-color: rgba(248, 113, 113, 0.42); background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
@media (max-width: 900px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 700px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .safety-alert, .step-title-row { grid-template-columns: 1fr; } }
`}</style>
