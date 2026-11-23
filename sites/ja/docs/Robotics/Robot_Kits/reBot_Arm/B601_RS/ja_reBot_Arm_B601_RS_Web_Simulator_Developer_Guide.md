---
description: 現在のハードウェアおよびシミュレーション用ネームスペース、MuJoCo ビジュアルグラスピング、デフォルトの DeepSeek Agent、そしてキャリブレーションとリカバリ手順を備えた Arm102 Leader テレオペレーションで B601-RS Web コンソールをセットアップします。
title: "reBot-RS Web コントロール：MuJoCo、DeepSeek と Leader テレオペレーション"
keywords:
  - reBot Arm
  - B601-RS
  - Web Simulator
  - Three.js
  - ROS 2
  - RobStride
  - SocketCAN
  - MuJoCo
  - LLM
  - MCP
  - DeepSeek
  - Leader Teleoperation
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_web_simulator_en.png
slug: /rebot_arm_b601_rs_web_simulator_developer_guide
last_update:
  date: 2026-11-03
  author: Yang-Ci
translation:
  skip: [zh-CN]
createdAt: '2026-08-13'
updatedAt: '2026-11-03'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_web_simulator_developer_guide/
---
import '/src/css/rebot-wiki-style.css';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# reBot Arm B601-RS デジタルツイン & コントロールスタック

<p align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp" alt="reBot Arm B601-RS" />
</p>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>今すぐ入手</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License: Apache 2.0" />
    </a>
    <img src="https://img.shields.io/badge/ROS2-Jazzy-blue.svg" alt="ROS 2 Jazzy" />
    <img src="https://img.shields.io/badge/Node.js-18%2B-green.svg" alt="Node.js 18+" />
    <img src="https://img.shields.io/badge/Three.js-r128-orange.svg" alt="Three.js r128" />
    <img src="https://img.shields.io/badge/Version-v1.0.0-brightgreen.svg" alt="Version v1.0.0" />
    <img src="https://img.shields.io/badge/Platform-Cross%20Platform-lightgrey.svg" alt="Platform" />
</p>

<p align="center">
  <strong>Three.js 可視化 · ROS 2 · MuJoCo シミュレーション · DeepSeek/MCP · Leader テレオペレーション</strong>
</p>

reBot Arm B601-RS デジタルツイン & コントロールスタックは、Three.js Web コンソール、ROS 2 実機ドライバ、RS 専用 MuJoCo ダイナミクスシーン、ビジョン検出、軌道生成と逆運動学、デフォルトで DeepSeek を用いる自然言語 Agent、そして Arm102 Leader テレオペレーションを統合しています。本ガイドでは、インストール、シミュレーション、Web 制御、Agent セットアップ、リーダー／フォロワー動作まで、現在のプロジェクトに沿って説明します。

実機は `/rebot_arm_rs` を使用し、シミュレーションは `/rebot_arm_rs_sim` を使用します。旧バージョンのユーザーは、まずプロジェクトディレクトリで `git pull --ff-only` を実行してリポジトリを更新し、その後カスタムスクリプト、ROS インターフェースのプレフィックス、Agent 設定を更新してから、コントローラ、rosbridge、Web コンソールを再起動してください。Web のターゲットセレクタを変更しても、バックエンドのネームスペースは設定されません。

<GitHubStarButton owner="Yang-Ci" repo="ReBot_Arm_DigitalTwin_RS" />

## プロジェクトの特徴

1. **RS 専用アームモデル**

   Web コンソールと ROS 2 は `ReBot_Arm_RS.urdf` と、それに対応する STL メッシュを使用します。Web サーバーはまず `rebotarm_ros2_RS` ワークスペースからモデルを読み込み、オフライン用のフォールバックコピーも保持します。

2. **RobStride + SocketCAN 実機リンク**

   実機はデフォルトで Linux SocketCAN インターフェース `can0`（`1 Mbps`）を使用します。コントローラは `reBotArm_control_py` を通じて RobStride モータと通信します。

3. **MIT 125 Hz オンライン制御**

   Web コンソールは最大 60 Hz でターゲットを更新し、実機コントローラは速度・加速度・ジャークで制限されたオンライン参照を 125 Hz で生成し、MIT の `q/dq/kp/kd/tau` コマンドを送信します。Web のターゲット更新はモータ制御ループをブロックしません。

4. **実機とシミュレーションのネームスペース分離**

   実機はデフォルトで `/rebot_arm_rs` を使用し、シミュレーションは `/rebot_arm_rs_sim` を使用します。同じ Web コンソールから制御ターゲットを切り替えることができ、実機と Fake Driver を同時に動かしてインターフェースを比較できます。

5. **RS 専用 MuJoCo シーン**

   MuJoCo は `physics` と `kinematic` モードをサポートします。デフォルトの `physics` モードには、重力、接触、テーブルトップ上の物体、オーバーヘッドカメラ、色検出、物理的な把持検証が含まれます。

6. **フィードバック駆動 Web アニメーション**

   実機モードでは、不透明なモデルが実際のフィードバックを示し、半透明のモデルが制御ターゲットを示します。Web コンソールは、ローカルアニメーションを実機姿勢と誤認しないように、rosbridge の計測値に対して適応ローパスフィルタ、フィードバックのデッドゾーン、表示補間を適用します。

7. **安全ステートマシン**

   システムは軌道、重力補償、安全な原点復帰、連続 Web コマンドを仲裁します。ゼロ以外の姿勢から無効化する場合は、まず安全な原点復帰を実行して検証します。検証に失敗した場合、アームが突然落下しないように、アームは有効状態のままになります。

8. **ビジュアルグラスピングと LLM/MCP Agent**

   シミュレーションシーンには、オーバーヘッド検出、IK、把持、リフト検証、配置に対応した赤・青・黄のオブジェクトが用意されています。自然言語エントリポイントはデフォルトで DeepSeek `deepseek-flash` を使用し、MCP ツールも個別に呼び出すことができます。

9. **Arm102 Leader テレオペレーション**

   Leader は ROS ホスト上の USB/UART に接続します。Web コンソールはスキャン、プレビュー、アンロック、キャリブレーション、セッションを処理し、ROS コントローラはマッピング、速度制限、制御権限、タイムアウト時のホールドを処理します。デフォルトは相対追従で、オプションとしてグリッパ追従と一時停止後のリベースが利用できます。

## 配線とネットワークに関する注意

### RS 実機 CAN 配線

1. アームを固定し、可動範囲を確保します。
2. RobStride モータの CAN バス、電源、USB-CAN アダプタを接続します。
3. CAN_H、CAN_L、GND が正しく配線されていることを確認し、ハードウェア要件に従って終端抵抗を設定します。
4. 通電後、対象の CAN アダプタが Ubuntu 上に認識されていることを確認します。

`can0` を設定します：

```bash
sudo ip link set can0 down 2>/dev/null || true
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details link show can0
```

読み取り専用モードでバスフレームを観察します：

```bash
candump can0
```

連続した CAN フレームが表示されれば、そのインターフェースがデータを受信していることを意味します。`candump` を終了するには `Ctrl+C` を押します。

> インターフェースが `BUS-OFF` 状態になった場合は、まず電源、グラウンド、ボーレート、終端抵抗、モータ ID、CAN 配線を確認してください。コントローラを何度も再起動してハードウェアの不具合を隠さないでください。

### Web と ROS 2 のネットワーキング

Web コンソールは rosbridge WebSocket を介して ROS 2 と通信し、デフォルトではポート `9090` を使用します：

```text
Web console: http://<Ubuntu-IP>:3002
rosbridge:   ws://<Ubuntu-IP>:9090
MCP Server:  http://<Ubuntu-IP>:8081/mcp
Text Agent:  http://<Ubuntu-IP>:8082
```

Web コンソールと ROS 2 が同じマシン上で動作している場合は、`localhost` を使用できます。LAN 上の別のコンピュータからアクセスする場合、ブラウザ側コンピュータ自身の `localhost` を入力せず、ROS 2 サービスを実行している Ubuntu ホストの IP を使用してください。

プロジェクトの起動スクリプトは、ROS 2 のディスカバリ範囲をデフォルトで `LOCALHOST` に設定しているため、Wi-Fi ローミングや IP 変更があっても、同一マシン上のノードが別々の DDS ネットワークに分断されることはありません。これは、他のデバイスからの HTTP/WebSocket ポートへのアクセスには影響しません。別のコンピュータを ROS グラフに直接参加させるには、該当するターミナルで同じ値を設定してください：

```bash
export REBOTARM_ROS_DISCOVERY_RANGE=SUBNET
```

## 動作環境要件

| 項目 | 推奨要件 |
| --- | --- |
| バックエンド OS | Ubuntu 24.04 |
| ROS 2 | Jazzy |
| 互換性のあるリファレンス環境 | Ubuntu 22.04 + ROS 2 Humble（実機利用には独自のリグレッションテストが必要） |
| Python | 3.12（Jazzy）または 3.10（Humble） |
| Node.js | 18 以上 |
| ブラウザ | 最新安定版の Chrome、Chromium、Edge、または Firefox |
| CAN ツール | `iproute2`、`can-utils` |
| 実機 CAN | `can0`、1 Mbps |
| MuJoCo | プロジェクトの Python 環境によってインストール |

## インストール手順

<div className="rebot-step-flow">
<section className="rebot-step-item">
    <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

      #### ステップ 1：プロジェクトを取得する

      <p className="rebot-step-label">Step 1</p>

```bash
git clone https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_RS.git ~/ReBot_Arm_DigitalTwin_RS
cd ~/ReBot_Arm_DigitalTwin_RS
```

以下のコマンドでは、プロジェクトディレクトリとして `~/ReBot_Arm_DigitalTwin_RS` を使用します。異なるディレクトリを使用する場合は、パスを適宜置き換えてください。

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

      #### ステップ 2：読み取り専用の環境チェック

      <p className="rebot-step-label">Step 2</p>

```bash
cd ~/ReBot_Arm_DigitalTwin_RS
./setup.sh --check
```

このコマンドはシステムをチェックするだけで、環境を変更しません。チェック内容は次のとおりです：

- Ubuntu、Python、Node.js のバージョン
- ROS 2、rosbridge、MoveIt、ビルドツール
- SocketCAN ツールと `can0`
- Python 仮想環境と主要モジュール
- ROS 2 ワークスペースのビルド結果
- Web の `package.json` と `.env`

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

      #### ステップ 3：ワンクリックでインストールとビルド

      <p className="rebot-step-label">Step 3</p>

```bash
./setup.sh --yes
./rebotarm doctor
```

インストールスクリプトは、不足している ROS 2、Node.js、SocketCAN、ビルド依存関係をインストールし、`rebotarm_ros2_RS/.venv` を作成し、RS 実機、MuJoCo、Agent 用の Python 依存関係をインストールし、rosdep を実行し、次のコマンドで ROS 2 ワークスペースをビルドします：

```bash
colcon build --symlink-install
```

制御 SDK と MuJoCo モデルは、メインリポジトリによって通常のファイルとして追跡されています。これらは Git サブモジュールではなく、入れ子になった Git リポジトリも含みません。既存の `.env` ファイル、SDK、モデルはインストールスクリプトによってリセットされません。

システム依存関係がすでに揃っている場合は、ROS ワークスペースを準備して再ビルドするだけでかまいません：

```bash
./scripts/setup_rs_workspace.sh
```

Python パッケージを変更した後は、通常これだけで十分です：

```bash
source scripts/rs_env.sh
cd rebotarm_ros2_RS
colcon build --symlink-install
```

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

      #### ステップ 4: Web 環境変数を設定する

      <p className="rebot-step-label">ステップ 4</p>

初回インストール時、`reBotArm_simulator-RS/.env` は `.env.example` から作成されます。主な項目は次のとおりです：

```bash
PORT=3002
HTTPS=0
REBOTARM_TEXT_AGENT_URL=http://localhost:8082
REBOTARM_MCP_URL=http://localhost:8081/mcp
MOTORBRIDGE_WS_URL=ws://127.0.0.1:9002
MOTORBRIDGE_WS_TOKEN=
```

Web コンソールと ROS 2 / Agent が同じマシン上にない場合は、プロキシアドレスをバックエンドマシンの IP に変更してください。API キーやトークンは、環境変数またはコミットしないローカルの `.env` にのみ保存する必要があります。

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">5</span>
<div className="rebot-step-content">

      #### ステップ 5（任意）: 既定の DeepSeek Agent を設定して起動する

      <p className="rebot-step-label">ステップ 5（任意）</p>

Web の自然言語アシスタントを使用するには、下記の「プロジェクトの起動」に従って、ターミナル 1 で完全なシミュレーション（`./rebotarm start rs_sim`）を、ターミナル 2 で Web コンソール（`./rebotarm start web`）を起動します。その後、3 つ目のターミナルで API キーを設定し、Agent を起動します：

```bash
cd ~/ReBot_Arm_DigitalTwin_RS
export DEEPSEEK_API_KEY='your-key'
./scripts/start_rs_text_agent.sh
```

既定のモデルは DeepSeek `deepseek-flash` であり、モデルの上書き指定は不要です。以前に別のモデルを設定していた場合は、古い `REBOTARM_LLM_*` 環境変数を確認し、既定値を上書きしないようにしてください。API キーはサーバー上のみに設定し、リポジトリには含めないでください。

`[text-agent-http] listening on http://0.0.0.0:8082/` が表示されたら、Web コンソールで「Connect AI assistant」をクリックし、「Query the arm status」を送信して接続を確認します。モデル切り替え、ヘルスチェック、トラブルシューティングについては、下記の「DeepSeek / MCP Text Control」を参照してください。

</div>
</section>
</div>

## プロジェクトの起動

<Tabs defaultValue="sim" groupId="launch-mode" queryString>

<TabItem value="web" label="純粋な Web デモ">

rosbridge や ROS 2 を使わずに、Node.js Web サーバーのみを起動します：

```bash
cd ~/ReBot_Arm_DigitalTwin_RS/reBotArm_simulator-RS
npm start
```

ブラウザで次を開きます：

```text
http://localhost:3002
```

このモードは、3D モデル、UI、姿勢プリセット、フロントエンド機能の開発に適しています。ROS 2 バックエンドがないため、Web コンソールから実機ロボットや完全な MuJoCo シーンを制御することはできません。

<!-- Image: rebot_rs_web_simulator_en.png -->

![reBot Arm B601-RS web シミュレータ インターフェース](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_web_simulator_en.png)
</TabItem>

<TabItem value="sim" label="RS 完全 MuJoCo シミュレーション">

ターミナル 1 では Fake Driver、MuJoCo、カメラ、検出、MCP Agent、rosbridge を起動します：

```bash
cd ~/ReBot_Arm_DigitalTwin_RS
./rebotarm start rs_sim
```

ターミナル 2 では Web コンソールを起動します：

```bash
cd ~/ReBot_Arm_DigitalTwin_RS
./rebotarm start web
```

`http://localhost:3002` を開き、制御対象として「RS Simulation (`/rebot_arm_rs_sim`)」を選択し、ROS WebSocket として `ws://localhost:9090` を入力します。

一般的なシミュレーションオプション：

```bash
# No native MuJoCo window; suitable for automated tests
REBOTARM_MUJOCO_VIEWER=false ./rebotarm start rs_sim

# Kinematic following only; does not validate contact, gravity, or physical grasping
REBOTARM_MUJOCO_MODE=kinematic ./rebotarm start rs_sim

# Do not start the MCP Agent
REBOTARM_START_AGENT=false ./rebotarm start rs_sim

# After confirming there are no active tasks, clean up leftover simulation processes, then start
./rebotarm start rs_sim --force
```

> ビジュアルグラスピングでは、必ず既定の `physics` モードを使用する必要があります。`kinematic` モードは関節位置を直接同期するため、制御ゲイン、接触安定性、把持力の評価には使用できません。

<!-- Image: rebot_rs_mujoco_physics.png -->

![reBot Arm B601-RS MuJoCo 物理シミュレーション](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_mujoco_physics.png)
</TabItem>

<TabItem value="real" label="RS 実機ロボット制御">

まず SocketCAN を設定して確認します：

```bash
sudo ip link set can0 down 2>/dev/null || true
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details -statistics link show can0
```

非常停止が動作し、作業空間が安全であることを確認したら、ターミナル 1 で実機ロボットコントローラを起動します：

```bash
cd ~/ReBot_Arm_DigitalTwin_RS
REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE \
  ./rebotarm start rs
```

ターミナル 2 で Web コンソールと rosbridge を起動します：

```bash
./rebotarm start web
```

`http://localhost:3002` を開き、「RS Real Robot (`/rebot_arm_rs`)」を選択します。最初のテストでは、次の順序に従ってください：

1. Web コンソールが接続済みと表示し、アームステータスが正常で、モーターエラーがないことを確認します。
2. enable をクリックします。
3. 速度を `0.2-0.4 rad/s` に設定します。
4. 各関節を少しずつ動かし、方向、リミット、フィードバックを確認します。
5. その後、TCP ドラッギング、軌道、または重力補償をテストします。
6. 終了時は、安全な原点復帰と disable を行い、その後コントローラのターミナルで `Ctrl+C` を押します。

実機ロボットコントローラの一時停止に `Ctrl+Z` を使用しないでください。また、Web ボタンを物理的な非常停止として扱わないでください。古いコントローラインスタンスが残っている場合、実機ロボット起動スクリプトは古いインスタンスに安全な終了を要求し、そのコントローラに属すると確認された残留リソースをクリーンアップします。

<!-- Image: rebot_rs_real_robot_web_en.png -->

![reBot Arm B601-RS 実機ロボット Web 制御](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_real_robot_web_en.png)
</TabItem>

<TabItem value="dual" label="実機 / Fake デュアルデバッグ">

```bash
export REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE
./scripts/start_rs_dual.sh
```

このスクリプトは次を起動します：

- 実機ロボット `/rebot_arm_rs`;
- Fake Driver `/rebot_arm_rs_sim`;
- rosbridge `9090`。

これはインターフェース、関節方向、ステータスを比較するために使用します。完全な MuJoCo スタック、ビジョン、Agent、Web サーバーは起動しません。コマンドを送信する前に、Web コンソールで選択されているネームスペースを再度確認してください。

</TabItem>

</Tabs>

## リーダー遠隔操作

### 接続とインストール

Arm102 / 102-LD Leader は、**ROS 2 を実行している Ubuntu ホスト**に USB シリアルで接続します。ROS が VM 内で動作している場合は、Leader の USB デバイスをその VM にパススルーしてください。ブラウザ側コンピュータ上の COM ポートは、ROS ホスト上のシリアルポートの代わりにはなりません。

```text
Arm102 Leader (servo IDs 0–6, UART 1 Mbps)
  -> ROS host USB serial / leader_worker.py
  -> LeaderTeleop: calibration, mapping, sessions, and status
  -> RS controller: control ownership, speed limits, and timeout holds
  -> Fake Driver / MuJoCo, or SocketCAN can0 / RS follower
```

まずベースインストールを完了してください。古いコントローラ、シミュレーション、rosbridge を停止し、Leader の依存関係をインストールしてインターフェースを再ビルドします：

```bash
cd ~/ReBot_Arm_DigitalTwin_RS
bash scripts/setup_rs_leader.sh
```

このスクリプトは ROS Python 仮想環境を再利用し、`motorbridge-smart-servo==0.0.4` と `pyserial==3.5` をインストールし、`rebotarm_msgs` と `rebotarmcontroller` を再ビルドします。この機能には、完全な LeRobot トレーニング環境は不要です。コントローラ、rosbridge、Web コンソールを再起動し、ブラウザをハードリフレッシュしてください。

新しいターミナルで次を確認します：

```bash
cd ~/ReBot_Arm_DigitalTwin_RS
source scripts/rs_env.sh
python -c 'from motorbridge_smart_servo import FashionStarServo; from serial.tools import list_ports; print([(p.device, p.description) for p in list_ports.comports()])'
ros2 interface show rebotarm_msgs/srv/LeaderControl
```

`/dev/ttyUSB0`、`/dev/ttyACM0`、または安定した `/dev/serial/by-id/...` パスを使用してください。パーミッションエラーが発生した場合は、次のコマンドを実行し、再試行する前にログインし直してください：

```bash
sudo usermod -aG dialout "$USER"
```

### シミュレーションでワークフローを検証する

2 つの別々のターミナルで実行します：

```bash
# Terminal 1
./rebotarm start rs_sim
```

```bash
# Terminal 2
./rebotarm start web
```

ROS 制御モードと「RS simulation (`/rebot_arm_rs_sim`)」を選択し、rosbridge に接続します。「Leader teleoperation」カードで古いポートをクリアし、「Scan leader」をクリックして `mock` を選択します。ポート欄に `mock` を直接入力することもできます。以下の接続、アンロック、キャリブレーション、フォローの手順に従い、その後一時停止、再開、停止をテストします。

Fake Driver のみが `mock` を許可し、実際の RS ハードウェアはこれを拒否します。Mock モードは UI、マッピング、セッションワークフローを検証するためのものであり、実際のシリアルリンク、関節方向、ハードウェア安全性は検証しません。

### 接続、キャリブレーション、フォロー開始

ハードウェアテストでは、実機ロボット用の手順に従って `/rebot_arm_rs` と Web コンソールを起動します。フォロワーを有効化し、状態が `IDLE` であることを確認し、ROS 制御ロックを有効にします。軌道、ハンドフォロー、重力補償を停止し、グリッパーを位置保持に戻します。同じ `can0` にアクセスする別の LeRobot テレオペレーションプロセスは実行しないでください。

1. **スキャンして接続する。** 「Leader teleoperation」カードで ROS ホスト上のシリアルポートをスキャンします。完全な Leader は、7 つすべてのサーボ ID `0–6` に応答します。デバイスを選択して「Connect」をクリックするか、そのシリアルパスを手動で入力します。
2. **読み取り専用プレビューを確認する。** Arm102 / 102-LD モデル、7 つの角度、サンプルレート、遅延が表示される間、フォロワーは現在の姿勢を保持します。ドラッグして回転し、ホイールまたは 2 本指ジェスチャでズームします。「Reset view」は表示されるビューのみを変更します。
3. **Leader のゼロをアンロックしてキャリブレーションする。** Leader を支え、「Unlock leader」をクリックし、[Arm102 calibration pose](/ja/rebot_arm_b601_rs_lerobot/) に配置してグリッパーを閉じます。「Leader is at reference zero with gripper closed」を確認してから、「Confirm and set leader zero」をクリックします。各軸を少しずつ動かし、プレビューに対して J1–J6 の方向と J7 フィンガーリングの開閉を確認します。
4. **初期パラメータを設定する。** 目標速度を `0.1 rad/s` に設定し、「Follow gripper」をクリアし、「Absolute follow」はチェックしないままにします。現在のハードウェア Leader の速度範囲は `0.05–1.0 rad/s` であり、通常の Web 関節速度設定とは独立しています。
5. **相対フォローを開始する。** 「Start following」をクリックします。相対モードでは、2 つのアームの開始姿勢からオフセットを確立するため、最初のフレームでフォロワーが Leader の絶対姿勢にジャンプすることはありません。まず J6 の小さな動きから始め、その後 J1–J5 の方向、フィードバック、リミットを個別に確認します。
6. **一時停止と再開をテストする。** 「Pause and hold」をクリックした後に Leader を動かすと、フォロワーは保持するはずです。相対モードでは、「Resume」は一時停止中の動きを追従するのではなく、その時点での姿勢を基準に両アームを再ベースラインします。
7. **グリッパーをテストする前に制御を解放する。** 「Stop and release control」をクリックし、通常のスライダーが再び動作することを確認します。6 軸すべてを検証した後、グリッパーフォローを有効にした別のセッションを開始し、小さな動きで開閉方向とエンドポイントを確認します。

:::warning リーダーのキャリブレーションとフォロワーのゼロ点

「Confirm and set leader zero」は Arm102 Leader をキャリブレーションします。RS の `set_zero` サービスはフォロワーモーターのゼロ点を書き換えます。リーダーのプレビューや追従オフセットを補正する目的で、フォロワーのゼロ点調整を使用しないでください。絶対追従では、まずアーム同士を整列させる必要があり、コントローラは過大な姿勢差を拒否します。初回はデフォルトの相対モードのまま使用してください。

:::

### 一時停止、停止、および接続復旧

- **一時停止して保持:** セッションが制御を保持したまま、フォロワーは現在の姿勢を保持します。再開時に相対モードは基準を再設定します。
- **停止して制御を解放:** 追従が終了し、フォロワーは現在の姿勢を保持します。解放後は、スライダー、軌道、重力補償、安全な原点復帰、無効化が利用可能になります。一時停止も停止も、モータートルクを直接解除することはありません。
- **サンプルの陳腐化、リーダー USB の取り外し、またはブラウザのハートビートタイムアウト:** コントローラはターゲットの更新を停止して保持し、UI はフォルトまたは古いデータを報告します。再接続しても追従は自動再開されません。接続を確認し、再キャリブレーションを行い、明示的に再スタートしてください。
- **別のページがセッションを所有している:** 元のページで停止して制御を解放してください。予期せず閉じた場合は、ハートビートタイムアウトによるセッション解放を待ちます。

初期ハードウェア受け入れテストには、USB の取り外し、ブラウザ切断、一時停止中のリーダー動作、および停止後のスライダー復旧を含めるべきです。プロジェクトにはモックと制御ポリシーのテストが含まれますが、実際の Leader → RS ハードウェアリンクについては、現地での受け入れが依然として必要です。

### 追従レートと速度制限

Leader の UART サンプリングは `60 Hz` を目標とし、実際のレートはシリアル読み取り時間に依存します。有効な新しいサンプルごとにターゲットが更新されます。ハードウェアの MIT ループは、速度制限とキャッシュされた重力フィードフォワード付きで `125 Hz` で最新ターゲットに追従し、通常の Web ターゲットに対する 2 次平滑化やジャークフィルタは追加しません。リーダーが選択した速度制限より速く動くと、フォロワーが遅れることがあります。

リーダー追従では、6 軸に対して個別の `leader_mit_kp` / `leader_mit_kd` ゲインと `v_des=0` を使用します。一時停止または停止すると、通常のホールドゲインに戻ります。グリッパの基準速度は `min(6 × teleoperation speed, leader_gripper_velocity_limit)` で、現在は設定により `3 rad/s` に上限が設定されています。関節リミット、フィードバックタイムアウト、セッションウォッチドッグは有効のままです。設定場所については、後述の「Key Control Parameters」を参照してください。

### リーダーステータスの確認

```bash
source scripts/rs_env.sh
ros2 topic echo /rebot_arm_rs/leader/status --once
```

シミュレーションでは、`/rebot_arm_rs_sim/leader/status` を使用します。`state`、`calibrated`、`following`、`paused`、`sample_hz`、`sample_age`、`angles_deg` を確認してください。表示されるリーダー角度は度単位であり、`targets_rad` にはラジアン単位の 6 つのフォロワー関節ターゲットが含まれます。

## 統一コマンドライン

| Command | 説明 |
| --- | --- |
| `./rebotarm doctor` | 読み取り専用の環境チェック。`./setup.sh --check` と同等 |
| `./rebotarm start web` | rosbridge を起動または再利用し、Web サーバーを起動 |
| `./rebotarm start rs_sim` | 完全な RS MuJoCo シミュレーションスタックを起動 |
| `./rebotarm start rs` | RS 実機コントローラを起動。ハードウェア確認用の変数が必須 |
| `./rebotarm status` | 登録済みプロセス、ポート、および `can0` を表示 |
| `./rebotarm stop` | `start web` によって登録された web/rosbridge 子プロセスを停止 |

フォアグラウンドで動作しているシミュレーションおよび実機プロセスは、それぞれのターミナルで `Ctrl+C` を押して通常終了させてください。

## プロジェクトアーキテクチャ

```text
ReBot_Arm_DigitalTwin_RS/
|-- setup.sh                              One-click check, install, and build
|-- rebotarm                              Unified start, status, and stop entry
|-- requirements-rs-hardware.txt          RS real-robot Python dependencies
|-- requirements-rs-mujoco.txt            MuJoCo/Agent Python dependencies
|-- scripts/
|   |-- rs_env.sh                         Load ROS, venv, and workspace
|   |-- setup_rs_workspace.sh             Prepare and build the ROS 2 workspace
|   |-- start_rs_sim.sh                   Full RS simulation stack
|   |-- start_rs_hardware.sh              RS real-robot controller
|   |-- start_rs_dual.sh                  Real-robot/Fake dual-namespace startup
|   `-- start_rs_text_agent.sh            Text Agent HTTP service
|-- rebotarm_ros2_RS/
|   |-- src/rebotarmcontroller/           Real-robot controller and Fake Driver
|   |-- src/rebotarm_msgs/                Custom msg/srv/action
|   |-- src/rebotarm_bringup/             Config, URDF, meshes, and launch
|   |-- src/rebotarm_mujoco_rs/           RS MuJoCo, camera, detection, and tasks
|   |-- src/rebotarm_agent/               MCP Server and Text Agent
|   |-- src/rebotarm_moveit_config/       MoveIt configuration
|   |-- src/rebotarm_moveit_demos/        Trajectory and picking/placing examples
|   `-- third_party/reBotArm_control_py/  Plain-source control SDK
`-- reBotArm_simulator-RS/
    |-- server.js                           Static server and Agent proxy
    |-- public/index.html                   Web entry point
    |-- public/js/rebot-sim.js              Three.js, IK, scene, and animation
    |-- public/js/ros/rebot-ros-client.js   rosbridge client
    |-- public/js/ros/rebot-ros-ui.js       ROS UI, control, and feedback logic
    |-- public/js/rebot-llm.js              LLM chat UI
    |-- description/                         Standalone fallback model for the web
    `-- split_meshes/grouped_gripper/        Optional web gripper meshes
```

## システムデータフロー

### Web から RS 実機へのコマンド

```text
User drags a joint slider or TCP handle
  -> Three.js / browser DLS IK
  -> 30 ms slider damping, 1 deg input dead zone, max 60 Hz throttle
  -> rosbridge WebSocket
  -> JointMitCmd ROS topic
  -> command state arbitration
  -> 125 Hz velocity/acceleration/jerk-limited online reference
  -> MIT q/dq/kp/kd/tau
  -> reBotArm_control_py
  -> MotorBridge + SocketCAN can0
  -> RobStride motors
```

新しい Web ターゲットは、オンライン軌道の終端のみを更新します。ブラウザが一時的に次のフレーム送信を停止しても、125 Hz の制御ループは連続した参照値の生成を継続します。コマンドの QoS 深度は 1 であるため、新しいターゲットは未処理の古いターゲットを上書きし、ドラッグ終了後に位置のバックログが再生されることを防ぎます。

### RS 実機から Web へのフィードバック

```text
RobStride encoder/status
  -> SocketCAN can0
  -> SDK status cache
  -> 20 Hz real-robot sync query
  -> 60 Hz ROS JointState publication
  -> rosbridge subscription throttle
  -> adaptive low-pass + feedback dead zone
  -> 32-120 ms display interpolation
  -> Three.js solid feedback model
```

半透明モデルは制御ターゲットを表します。関節およびグリッパの誤差が十分に小さくなると、ターゲットの影は自動的に消えます。表示フィルタリングは Web 上の表示にのみ影響し、モーターに送信されるターゲットは変更しません。

### MuJoCo シミュレーションチェーン

```text
Web console or Agent
  -> ROS 2 commands, services, or actions
  -> Fake RS Driver (100 Hz)
  -> MuJoCo Sync (250 Hz)
  -> RS MJCF dynamics and collision
  -> joint/object states, overhead camera, and color detection
  -> Web console and MCP Agent
```

## Web 制御に関する注意事項

### 制御ターゲットとネームスペース

| モード | ネームスペース | Web モデルソース |
| --- | --- | --- |
| RS 実機 | `/rebot_arm_rs` | 実機の `/joint_states` フィードバック |
| RS シミュレーション | `/rebot_arm_rs_sim` | 実際の MuJoCo 状態を優先して使用 |

モードを切り替えると、Web コンソールはターゲットネームスペースに応じて rosbridge クライアントとインターフェースパスを再作成します。シミュレーションはデフォルトで実際の MuJoCo 状態を反映し、ハードウェアモードでは測定フィードバックと半透明のターゲットモデルを表示します。

利用可能なターゲットを確認するには、次の読み取り専用コマンドを使用します：

```bash
source scripts/rs_env.sh
ros2 topic list | grep /rebot_arm_rs
ros2 service list | grep /rebot_arm_rs
```

完全なプレフィックスを確認してください。`/rebot_arm_rs` はハードウェア、`/rebot_arm_rs_sim` はシミュレーションです。`rs` という文字列だけではターゲットを特定できません。

### 関節とグリッパ

- J1〜J6 はラジアン単位で制御され、RS の URDF と一貫したリミットを持ちます。
- 実機 Web 関節速度リミットは `0.05–1.50 rad/s` の範囲で、`0.2–0.4 rad/s` から始めてください。このパネルはシミュレーションでは非表示です。リーダーのテレオペレーションには別の速度設定があり、`0.1 rad/s` から始めてください。
- J1〜J6 はデフォルトで `30 ms` のスライダーダンピングと `1 deg` の入力デッドゾーンを使用し、スライダーを離したときに最終位置が強制的に確定されます。
- J7/グリッパは Web 上では開口幅として表示され、範囲は `0-71.5 mm` です。
- グリッパはパブリッシュ時に RS モーター範囲 `0-5 rad` に変換され、ROS フィードバックはミリメートルに戻されます。
- J7 は J1〜J6 のラジアン単位ダンピングや入力デッドゾーンを通らず、ブラウザのレンダーフレームごとに最新ターゲットのみが送信されます。

### TCP ドラッグと IK

Web コンソールは、TCP ターゲットの解決にダンピング付き最小二乗法（DLS）を使用します。RS 版では特異点の度合いに応じてダンピングを調整し、その後、同じ MIT オンライン制御チェーンを通じて関節解を送信します。

Web の Three.js シーンは Y-up、ROS は Z-up を使用します。座標変換ロジックは `rebot-sim.js` にあり、姿勢機能を拡張する際は、フォーム値を直接やり取りするのではなく、既存の変換を再利用してください。

姿勢入力はメートル単位を使用します。X は前方、Y は左方向、Z は上方向です。ターゲットに到達できない場合は、まず Z を増やすか水平方向の距離を短くし、その後、姿勢制約と関節リミットを確認してください。

### ティーチングと軌道再生

Web コンソールは関節軌道を記録し、次を呼び出すことができます：

```text
/<namespace>/follow_joint_trajectory
```

RS 実機アクションサーバーは、連続な単調三次 Hermite 位置／速度参照を使用し、短すぎる軌道セグメントを自動的に延長して、通常の実機軌道速度をおおよそ `0.60 rad/s` 未満に保ちます。呼び出し側はアクション結果または実機フィードバックを待つ必要があり、元のリクエスト時間に基づいて再生アニメーションを早期終了してはいけません。

### 有効化、安全ホーミング、無効化

- 実機ロボットコントローラは、起動のたびに有効化する必要があります。
- `safe_home` はスムーズにゼロ位置へ戻り、角度と速度を検証します。
- 非ゼロ姿勢から無効化をクリックすると、まず `SAFE_HOMING` に入ります。
- ホーミング検証に失敗した場合、モーターは有効のままで、失敗結果が返されます。
- `set_zero` はモーターのゼロ点を書き換えるもので、通常のホーミングボタンではありません。機構が実際にキャリブレーション済みの姿勢にあるときだけ呼び出してください。

### 重力補償

RS の重力補償は、計測された姿勢から開始し、ゲインをスムーズに遷移させます。繰り返し開始しても結果は同じであり、停止すると最後に計測した位置を保持します。グリッパはデフォルトで低抵抗の動作アシストとなり、補償が停止すると位置保持に戻ります。開始前に把持している物体を取り除き、指を近づけないでください。軌道追従、把持、または Leader フォローの前には重力補償を停止してください。

重力補償中は、Web 関節、TCP、軌道、およびグリッパコマンドは拒否されます。関連するサービスは次のとおりです：

```text
/<namespace>/gravity_compensation/start
/<namespace>/gravity_compensation/stop
/<namespace>/gravity_compensation/status
```

## ROS 2 インターフェース

以下の例では、実機ロボットの `/rebot_arm_rs` を使用します。シミュレーションでは、プレフィックスを `/rebot_arm_rs_sim` に置き換えてください。

### ステータストピック

| トピック | 型 | 説明 |
| --- | --- | --- |
| `/rebot_arm_rs/joint_states` | `sensor_msgs/msg/JointState` | 6 軸とグリッパの統合ステータス |
| `/rebot_arm_rs/joints/<name>/state` | `rebotarm_msgs/msg/JointMotorState` | 単一モーターの位置、速度、トルク、およびステータスコード |
| `/rebot_arm_rs/gripper/state` | `rebotarm_msgs/msg/JointMotorState` | グリッパモーターの生ステータス |
| `/rebot_arm_rs/control_target` | `sensor_msgs/msg/JointState` | Web コンソールまたはアクション層からの最終ターゲット |
| `/rebot_arm_rs/control_reference` | `sensor_msgs/msg/JointState` | 125 Hz オンライン軌道リファレンスの ROS サンプル；`effort` にリファレンス加速度が入ります |
| `/rebot_arm_rs/arm_status` | `rebotarm_msgs/msg/ArmStatus` | 有効状態、モード、ステートマシン、およびエラーコード |
| `/rebot_arm_rs/leader/status` | `rebotarm_msgs/msg/LeaderStatus` | Leader の接続、キャリブレーション、セッション、角度、およびサンプルステータス |

### 低レベルコマンドトピック

| トピック | 型 | 説明 |
| --- | --- | --- |
| `/rebot_arm_rs/joints/<joint1..joint6>/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | 実機ロボット向け Web コンソールからのデフォルト関節コマンド |
| `/rebot_arm_rs/joints/<joint1..joint6>/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | 位置・速度コマンド |
| `/rebot_arm_rs/gripper/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | RS グリッパ MIT コマンド |
| `/rebot_arm_rs/gripper/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | グリッパの位置・速度コマンド |
| `/rebot_arm_rs/mujoco/target_pose` | `geometry_msgs/msg/PoseStamped` | TCP ターゲット姿勢 |

自分で低レベルコマンドを publish する前に、`arm_status.state_machine` を確認してください。`GRAVITY_COMP`、`SAFE_HOMING`、軌道実行中、または Leader セッションがアクティブな間は制御を奪わないでください。

### サービス

| サービス | 型 | 説明 |
| --- | --- | --- |
| `/rebot_arm_rs/leader/control` | `rebotarm_msgs/srv/LeaderControl` | スキャン、接続、ロック解除、キャリブレーション、フォロー、およびセッション管理 |
| `/rebot_arm_rs/enable` | `std_srvs/srv/Trigger` | アームを有効化 |
| `/rebot_arm_rs/disable` | `std_srvs/srv/Trigger` | 安全に無効化；必要に応じて先にホーミングを実行 |
| `/rebot_arm_rs/safe_home` | `std_srvs/srv/Trigger` | 検証付きの安全ホーミング |
| `/rebot_arm_rs/set_zero` | `rebotarm_msgs/srv/SetZero` | モーターのゼロ点を書き込み；慎重に使用 |
| `/rebot_arm_rs/gravity_compensation/start` | `std_srvs/srv/Trigger` | 重力補償を開始 |
| `/rebot_arm_rs/gravity_compensation/stop` | `std_srvs/srv/Trigger` | 重力補償を停止 |
| `/rebot_arm_rs/gravity_compensation/status` | `std_srvs/srv/Trigger` | 重力補償ステータスを問い合わせ |
| `/rebot_arm_rs/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | 姿勢 IK ソルブ |
| `/rebot_arm_rs/gripper/set` | `rebotarm_msgs/srv/SetGripper` | グリッパ位置制御 |
| `/rebot_arm_rs/gripper/open` | `rebotarm_msgs/srv/GripperCommand` | グリッパを開く |
| `/rebot_arm_rs/gripper/close` | `rebotarm_msgs/srv/GripperCommand` | グリッパを閉じる |

例：

```bash
source scripts/rs_env.sh
ros2 service call /rebot_arm_rs/gravity_compensation/status std_srvs/srv/Trigger '{}'
ros2 service call /rebot_arm_rs/safe_home std_srvs/srv/Trigger '{}'
```

### アクション

| アクション | 型 | 説明 |
| --- | --- | --- |
| `/rebot_arm_rs/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | 関節軌道 |
| `/rebot_arm_rs/gripper/command` | `control_msgs/action/GripperCommand` | グリッパアクション |
| `/rebot_arm_rs/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | デカルト姿勢モーション |

### MuJoCo とビジョンインターフェース

| インターフェース | 型／用途 |
| --- | --- |
| `/rebot_arm_rs_sim/mujoco/joint_states` | 実際の MuJoCo 関節状態 |
| `/rebot_arm_rs_sim/mujoco/object_states` | シーンオブジェクト状態（JSON） |
| `/rebot_arm_rs_sim/mujoco/overhead_rgb/image_raw` | 俯瞰 RGB カメラ |
| `/rebot_arm_rs_sim/vision/color_blocks/detections` | カラー物体検出 JSON |
| `/rebot_arm_rs_sim/mujoco/reset` | シミュレーションをリセット |
| `/rebot_arm_rs_sim/mujoco/record/start` | 録画を開始 |
| `/rebot_arm_rs_sim/mujoco/record/stop` | 録画を停止 |
| `/rebot_arm_rs_sim/mujoco/record/replay` | 録画を再生 |
| `/rebot_arm_rs_sim/mujoco/record/clear` | 録画をクリア |

## ビジュアルグラスピング

フルシミュレーションには、デフォルトで赤い立方体、青い直方体、黄色い円柱が含まれます。Web コンソールではターゲットカラーを選択するか自動選択し、その後アライメント、プレグラスプ、下降、クローズ、持ち上げ、配置を実行できます。

グラスプの成功は、軌道が完了したかどうかだけでは決まりません。システムは MuJoCo オブジェクトが実際に持ち上げられたかどうかも確認し、グリッパが空のまま閉じた場合や、物体を拾わずに軌道が完了した場合の誤った成功報告を防ぎます。

ビジュアルグラスピングのトラブルシューティング：

```bash
source scripts/rs_env.sh
ros2 topic echo /rebot_arm_rs_sim/vision/color_blocks/detections --once
ros2 topic echo /rebot_arm_rs_sim/mujoco/object_states --once
ros2 service list | grep /rebot_arm_rs_sim/
```

グリッパが閉じても物体を持ち上げない場合：

- `physics` モードが使用されていることを確認する；
- カメラとカラー検出が継続的に publish しているか確認する；
- ターゲットの幅、向き、および把持高さを確認する；
- ログ内の接触安定性と物理的な持ち上げ検証結果を確認する；
- 複数のグラスプまたは IK リクエストを同時に開始しない。

## DeepSeek / MCP テキスト制御

### 3 つのサービスの役割

```text
Web rebot-llm.js
  -> Node.js /api/llm/chat
  -> Text Agent (:8082, default DeepSeek deepseek-flash)
  -> MCP Server (:8081/mcp, bound to a target namespace)
  -> ROS 2 service/action/topic
```

Web サーバ、MCP Server、Text Agent は別々のプロセスです。フル `rs_sim` はデフォルトで MCP Server を起動します。「Connect AI assistant」は Text Agent を確認して接続するだけであり、Ubuntu 上で Python サービスを起動することはできません。MCP クライアントは LLM なしでツールを直接呼び出すことができます。

### デフォルトの DeepSeek エージェントを起動

フルシミュレーションと Web コンソールを起動し、3 つ目のターミナルで次を実行します：

```bash
cd ~/ReBot_Arm_DigitalTwin_RS
export DEEPSEEK_API_KEY='your-key'
./scripts/start_rs_text_agent.sh
```

現在のソースのデフォルト値：

| 設定 | デフォルト／用途 |
|---|---|
| LLM エンドポイント | `https://api.deepseek.com` |
| モデル | `deepseek-flash` |
| DeepSeek キー | `DEEPSEEK_API_KEY` |
| MCP ツールエンドポイント | `http://127.0.0.1:8081/mcp` |
| Text Agent / ダッシュボード | `http://localhost:8082` |
| デフォルトターゲット namespace | `/rebot_arm_rs_sim` |

以前に export された `REBOTARM_LLM_BASE_URL`、`REBOTARM_LLM_MODEL`、または `REBOTARM_LLM_API_KEY` の値は、これらのデフォルトを上書きします。デフォルトの DeepSeek を使用する前に、古い値をクリアするか、意図した設定を明示的に指定してください。実際のキーはサーバ側の環境変数またはコミットしないローカル設定に保持してください。

`[text-agent-http] listening on http://0.0.0.0:8082/` が表示されたら、次を確認します：

```bash
curl http://127.0.0.1:8082/health
```

期待されるレスポンス：

```json
{"ok": true, "service": "rebotarm-text-agent"}
```

これは HTTP で到達可能であることを確認するものです。「Connect AI assistant」をクリックし、読み取り専用クエリを送信して、モデル認証と MCP リンクを検証してください。その後、シミュレーションでモーションコマンドを試します：

```text
Query the arm status
Detect the colored blocks on the table
Open the gripper
Move to X=0.30 Y=0 Z=0.30
Grasp the red block
Return safely to zero
```

MCP の `pick_color` は、グラスプに成功した後も物体を保持します。Web の「Grasp into storage」ボタンは、配置動作が異なる別のワークフローを実行します。

### モデルまたはバックエンドアドレスを変更する

別の OpenAI 互換サービスを使用するには、Text Agent のターミナルで 3 つすべての値を設定し、Agent を再起動します：

```bash
export REBOTARM_LLM_BASE_URL='https://<provider-host>/v1'
export REBOTARM_LLM_MODEL='<model-id>'
export REBOTARM_LLM_API_KEY='<api-key>'
./scripts/start_rs_text_agent.sh
```

プレースホルダをプロバイダから取得した値に置き換えてください。`REBOTARM_MCP_URL` は Text Agent が使用する MCP エンドポイントを選択します。

Web サーバと Agent が別マシンで動作している場合は、`reBotArm_simulator-RS/.env` 内の `REBOTARM_TEXT_AGENT_URL` と `REBOTARM_MCP_URL` をバックエンドアドレスに更新し、その後 Web サーバを再起動してください。ブラウザだけがリモートで、3 つのサービスすべてが同じ Ubuntu ホスト上にある場合は、プロキシアドレスはローカルのままにします。

### MCP の namespace とモーション権限を確認する

シミュレーションスクリプトは、`arm_namespace:=rebot_arm_rs_sim motion_mode:=allow` で MCP を起動します。手動で起動した MCP Server はデフォルトで `motion_mode:=locked` になります。Web のターゲットを切り替えても MCP は再起動されず、その namespace も変わりません。起動スクリプトが `8081` 上の既存サービスを再利用する場合は、そのサービスのターゲットも確認してください。

実機ロボットの確認を行う場合は、以前の MCP サービスを停止し、モーションをロックした状態で別途起動します：

```bash
source scripts/rs_env.sh
ros2 launch rebotarm_agent rebotarm_mcp.launch.py \
  arm_namespace:=rebot_arm_rs motion_mode:=locked
```

Text Agent は MCP URL で使用するツールサービスを選択し、実際の対象 namespace はその MCP サービスの起動引数から取得します。新しく起動したサービスに対して Text Agent を再起動します：

```bash
REBOTARM_MCP_URL=http://127.0.0.1:8081/mcp ./scripts/start_rs_text_agent.sh
```

まず読み取り専用状態を確認し、その後でバックエンドのモーション許可ワークフローに従ってください。自然言語による制御は安全ステートマシンをバイパスできません。Agent のモーションツールを呼び出す前に、アクティブな Leader セッションを停止して解放してください。

## 主要な制御パラメータ

実機ロボットのデフォルト設定は次の場所にあります：

```text
rebotarm_ros2_RS/src/rebotarm_bringup/config/rebotarm_hardware.yaml
```

現在の RS の主要パラメータ：

```yaml
rate: 125
control:
  arm_control_mode: mit
  mit_kp: [80, 150, 150, 50, 50, 50]
  mit_kd: [5, 10, 10, 5, 4, 4]
  leader_mit_kp: [50, 50, 50, 30, 50, 50]
  leader_mit_kd: [3, 5, 5, 3, 4, 4]
  leader_gripper_velocity_limit: 3.0
  stream_acceleration_limit: 4.0
  stream_jerk_limit: 30.0
  stream_natural_frequency: 8.0
gravity_compensation:
  kp: 1.5
  kd: 1.0
```

その他のデフォルト周波数：

| レイヤ | デフォルト周波数 | 説明 |
| --- | ---: | --- |
| Web 関節ターゲット | 最大 60 Hz | スライダと TCP IK がターゲットを継続的に更新 |
| 実機ロボット同期フィードバッククエリ | 20 Hz | RobStride 測定キャッシュを更新 |
| ROS 実機ロボット状態 | 60 Hz | キャッシュからフィードバック、ターゲット、リファレンスを Publish |
| RS MIT 制御 | 125 Hz | オンライン平滑化とモータコマンド |
| Fake Driver | 100 Hz | シミュレーション制御と状態 |
| MuJoCo Sync | 250 Hz | デフォルトのダイナミクス同期 |
| MuJoCo オブジェクト状態 | 30 Hz | シーンと Agent |
| オーバーヘッドカメラ | 8 Hz | RGB 画像 |
| 色検出 | 10 Hz | 検出結果 |

ゲインを調整する前に、以下をすべて同時に記録します：

```text
/rebot_arm_rs/control_target
/rebot_arm_rs/control_reference
/rebot_arm_rs/joint_states
```

ターゲットが不連続な場合は Web 入力レイヤを確認し、リファレンスが不連続な場合はオンライン軌道を確認し、リファレンスが連続だがフィードバックがオーバーシュートする場合は MIT ゲイン、負荷、摩擦、電流、温度上昇を確認してください。Web アニメーションだけがジッタする場合にのみ、フィードバックフィルタリングと rosbridge の到着間隔を確認します。

## 二次開発ガイド

### Web 関節リミットまたはポーズプリセットの変更

ファイル：

```text
reBotArm_simulator-RS/public/js/rebot-sim.js
```

関節定義は `jointDefs` に、プリセットは `presets` にあります。関節リミットを変更する際は、RS URDF、SDK 設定、実際の機械的リミットを合わせて検証し、Web 上の表示範囲だけを変更しないでください。

### Web コマンド周波数、フィルタリング、ダンピングの変更

ファイル：

```text
reBotArm_simulator-RS/public/js/ros/rebot-ros-ui.js
```

このファイルは、Web コマンドのスロットリング、実機ロボットフィードバックのフィルタリング、フィードバックのデッドゾーン、補間、ターゲットシャドウ、制御ロック、およびビジョンロジックを扱います。Web アニメーションのレイテンシを補償するために、実機ロボットの MIT ゲインを上げないでください。

### カスタム ROS インターフェースの追加

クライアントラッパーは次の場所にあります：

```text
reBotArm_simulator-RS/public/js/ros/rebot-ros-client.js
```

UI レイヤで Topic、Service、または Action のパスを追加し、クライアントの `subscribe()`、`callService()`、または `sendActionGoal()` を呼び出します。インターフェースは常に現在の `namespace` から生成し、シミュレーションコマンドを実機ロボットに送信してしまわないようにしてください。

### RS URDF またはメッシュの変更

ROS 2 の主要モデル：

```text
rebotarm_ros2_RS/src/rebotarm_bringup/description/urdf/ReBot_Arm_RS.urdf
rebotarm_ros2_RS/src/rebotarm_bringup/description/meshes_rs/
```

Web サーバはまず上記のモデルを読み込みます。Web ディレクトリをコピーして単体で実行した場合は、次を使用します：

```text
reBotArm_simulator-RS/description/urdf/ReBot_Arm_RS.urdf
reBotArm_simulator-RS/description/meshes_rs/
```

これら 2 つのコピーを変更する際は同期を保ち、Linux のファイル名の大文字小文字を確認してください。

### MuJoCo の変更

| ファイル/ディレクトリ | 役割 |
| --- | --- |
| `rebotarm_ros2_RS/src/rebotarm_mujoco_rs/models/` | RS MJCF と STL |
| `rebotarm_mujoco_rs/mujoco_sync.py` | 同期周波数、ダイナミクス、PD |
| `rebotarm_mujoco_rs/scene_camera.py` | オーバーヘッドカメラ |
| `rebotarm_mujoco_rs/scene_detector.py` | 色検出 |
| `rebotarm_mujoco_rs/task_server.py` | タスク、記録、リプレイ |
| `rebotarm_mujoco_rs/launch/mujoco_rs.launch.py` | 起動パラメータ |

### Leader のマッピングと制御の変更

| ファイル | 目的 |
|---|---|
| `reBotArm_simulator-RS/public/js/ros/rebot-leader-ui.js` | namespace 付きサービス呼び出し、ステータス購読、ブラウザのハートビート |
| `reBotArm_simulator-RS/public/js/ros/leader-model.js` | Arm102 モデル表示と角度マッピング |
| `rebotarm_ros2_RS/src/rebotarmcontroller/rebotarmcontroller/leader_worker.py` | 別プロセスでの UART サンプリングとキャリブレーション |
| `rebotarm_ros2_RS/src/rebotarmcontroller/rebotarmcontroller/leader_teleop.py` | ROS サービス、ステータス、および Leader/Follower マッピング統合 |
| `rebotarm_ros2_RS/src/rebotarmcontroller/rebotarmcontroller/leader_policy.py` | マッピング、サンプルの有効性、セッションポリシー |
| `rebotarm_ros2_RS/src/rebotarmcontroller/rebotarmcontroller/hardware_manager.py` | ハードウェア所有権、MIT フォロー、速度制限、ホールド |

Leader モデルアセットは `reBotArm_simulator-RS/public/models/leader-arm102/` にあります。モデル表示方向と Follower 制御マッピングは別々に管理されているため、プレビューを修正する目的でハードウェアの方向パラメータを変更しないでください。低速・単一軸でのハードウェア受け入れ試験の前に、モックモード、タイムアウト、一時停止/再開、および制御解放を検証してください。

### MCP ツールの拡張

MCP Server は次の場所にあります：

```text
rebotarm_ros2_RS/src/rebotarm_agent/rebotarm_agent/rebotarm_mcp_server.py
```

ツールを追加する際は：

1. 明確な入力スキーマと単位を定義する；
2. 読み取り専用ツールとモーションツールを分離する；
3. モーションツール内で namespace、状態、モーション許可を検証する；
4. コントローラを直接バイパスするのではなく、ROS 2 Service/Action/Topic を通じてバックエンドを呼び出す；
5. ワークスペースを再ビルドし、シミュレーションでエラー、タイムアウト、キャンセル経路をテストする。

## 検証コマンド

```bash
source scripts/rs_env.sh
python3 -m pytest rebotarm_ros2_RS/src/rebotarmcontroller/test -q

bash -n setup.sh rebotarm scripts/*.sh

node --check reBotArm_simulator-RS/server.js
node --check reBotArm_simulator-RS/public/js/rebot-sim.js
node --check reBotArm_simulator-RS/public/js/ros/rebot-ros-client.js
node --check reBotArm_simulator-RS/public/js/ros/rebot-ros-ui.js
node --check reBotArm_simulator-RS/public/js/rebot-llm.js
node --check reBotArm_simulator-RS/public/js/ros/rebot-leader-ui.js
node --check reBotArm_simulator-RS/public/js/ros/leader-model.js
node reBotArm_simulator-RS/scripts/ros-namespaces.test.js
```

ランタイムチェック：

```bash
./rebotarm status
ros2 node list
ros2 topic list | grep /rebot_arm_rs
ros2 service list | grep /rebot_arm_rs
ros2 action list | grep /rebot_arm_rs
```

## FAQ

### 1. Web ページがモデル読み込み画面のまま進まない

ブラウザの開発者ツールの Network パネルを開き、次のリクエストが `200` を返しているか確認します：

```text
/api/urdf
/api/description/meshes/*.STL
```

よくある原因：

- RS URDF または STL が存在しない；
- Web ディレクトリだけが移動され、フォールバックモデルが不完全；
- URDF 内の `package://` マッピングが正しくない；
- Linux のファイル名の大文字小文字が一致していない；
- Three.js、STLLoader、URDFLoader の読み込み順が誤っている。

### 2. ROS が「disconnected」と表示される

```bash
ss -ltnp | grep 9090
ros2 node list
./rebotarm status
```

rosbridge が `0.0.0.0:9090` で待ち受けていること、および WebSocket アドレスが `ws://` で始まっていることを確認します。リモートブラウザでは、ブラウザ側コンピュータの `localhost` ではなく、Ubuntu の IP を入力してください。

### 3. Web コンソールは接続しているが、スライダで実機ロボットを制御できない

次の順に確認します：

1. Web コンソールが RS 実機ロボット `/rebot_arm_rs` 上にある。
2. ROS WebSocket が接続されている。
3. Web 制御ロックが有効になっている。
4. アームが有効化されている。
5. `arm_status` が `GRAVITY_COMP`、`TRAJ_RUNNING`、`SAFE_HOMING` のいずれでもない。
6. 実機ロボットコントローラに CAN またはモータエラーがない。

### 4. Web モデルがジッタする、またはターゲットシャドウが残り続ける

- 同じ namespace に対して、コントローラと state publisher がそれぞれ 1 つだけであることを確認する。
- `/joint_states` に複数の publisher がないか確認する。
- `control_target`、`control_reference`、`joint_states` を同時に記録する。
- CAN エラーカウンタとフィードバック到着間隔を確認する。
- 軌道再生と手動の連続ドラッグを同時に実行しない。

長時間残るターゲットシャドウは、多くの場合、実際のフィードバックがターゲットに到達していないことを意味し、必ずしも Web レンダリングの問題とは限りません。

### 5. CAN フィードバックがない、または BUS-OFF

```bash
ip -details -statistics link show can0
candump can0
```

次を確認します：

- ボーレートが `1 Mbps` であるか；
- CAN_H/CAN_L が逆になっていないか；
- 両端の終端抵抗；
- モータ電源と共通グラウンド；
- モータ ID と SDK 設定；
- USB-CAN ドライバとインターフェース名。

エラーカウンタが増え続ける場合は、実機ロボットのテストを直ちに停止してください。

### 6. 無効化をクリックしてもアームの電源がすぐに切れない

アームがゼロポーズ付近にない場合、コントローラはまず安全なホーミングを実行して検証します。これは想定された動作です。ホーミングが失敗した場合、システムは非ゼロポーズからの落下を防ぐためにアームを有効なままに保ちます。緊急時には物理的な非常停止ボタンを使用してください。

### 7. 重力補償が開始できない、または制御できない

- アームが有効化されていることを確認する。
- `/gravity_compensation/status` を問い合わせる。
- 軌道または安全ホーミングが実行中でないことを確認する。
- 重力補償中は他のモーションコマンドは拒否される。
- モード切り替え時に落下する可能性のあるすべての負荷を支持する。

### 8. ビジュアルグラスピングが動作しない

完全な `rs_sim` が `physics` モードで動作していることを確認し、次を確認します：

```bash
ros2 topic echo /rebot_arm_rs_sim/mujoco/overhead_rgb/image_raw --once
ros2 topic echo /rebot_arm_rs_sim/vision/color_blocks/detections --once
ros2 topic echo /rebot_arm_rs_sim/mujoco/object_states --once
```

ボタンにタスクがキューに入っていると表示されている場合は、現在のシリアル処理が完了するまで待ち、把持リクエストを何度も繰り返し開始しないでください。

### 9. AI アシスタントが接続できない、またはキーがないと表示される

3 つ目のターミナルで `DEEPSEEK_API_KEY` を設定して Text Agent を起動し、次を確認します：

```bash
ss -ltnp | grep 8082
curl http://127.0.0.1:8082/health
ss -ltnp | grep 8081
```

`ECONNREFUSED 127.0.0.1:8082` は、Web サーバーが Text Agent に到達できないことを意味します。`reBotArm_simulator-RS/.env` の `REBOTARM_TEXT_AGENT_URL` を確認し、マシンをまたいでデプロイする場合は Agent のホストアドレスを使用し、Web サーバーを再起動してください。ヘルスチェックが通るのにチャットが失敗する場合は、キー、古い `REBOTARM_LLM_*` の上書き、モデル、および MCP ログを確認します。Web の `/api/llm/health` チェックは実際のモデル呼び出しの代わりにはなりません。

### 10. フロントエンドを変更してもページが古いバージョンのまま表示される

RS Web コンソールには Service Worker/PWA のサポートが含まれています。まず `Ctrl+Shift+R` でハードリフレッシュを行い、それでも更新されない場合は、サイトデータを消去するか、ブラウザの開発者ツールで Service Worker の登録を解除してから、ページを再読み込みしてください。

### 11. `setup.sh` または `colcon build` が失敗する

- Ubuntu、ROS 2、Python のバージョンが一致していることを確認します。
- rosdep が初期化され、更新できることを確認します。
- `./setup.sh --check` を実行して不足している項目を確認します。
- `rebotarm_ros2_RS/.venv` で `numpy`、`scipy`、`mujoco`、`pinocchio`、`motorbridge`、`fastmcp` がインポートできることを確認します。
- ユーザーファイルを削除またはリセットする前にバックアップを取り、破壊的なコマンドでビルドの問題を解決しないでください。

### 12. リーダーのスキャン、キャリブレーション、フォローが失敗する

| 症状 | 確認事項 |
|---|---|
| ROS リーダーサービス待機中 | `rebotarm_msgs` / `rebotarmcontroller` を再ビルドし、コントローラーと rosbridge を再起動し、ネームスペースを確認し、ページをハードリフレッシュします |
| シリアルポートなし / プローブがタイムアウト | ROS ホストへの USB 接続または VM パススルー、電源、`dialout` 権限、およびポートを占有している他のプロセス |
| サーボ ID が不足している | 7 つすべての ID `0–6` が応答する必要があります。配線、電源、および `1 Mbps` のボーレートを確認します |
| 未キャリブレーション / サンプルが古い | プレビュー用に再接続し、ロック解除して再度キャリブレーションします。タイムアウトを緩めるのではなく、Hz と遅延を確認します |
| フォロワーがビジー状態 | 軌道、ハンドフォロー、重力補償を停止し、有効な `IDLE` とグリッパー位置保持を復元します |
| 絶対姿勢が異なる | まずデフォルトの相対モードを使用します。絶対モードでは姿勢の整合が必要です |
| ブラウザのハートビートがタイムアウト | ページが閉じられていないか、ネットワーク断、バックグラウンドでのスロットリングを確認し、再キャリブレーションして明示的に再スタートします |
| リーダーモデルの読み込みに失敗する | ローカルの `public/models/leader-arm102/urdf/leader.urdf` と `meshes/` アセットを確認し、ハードリフレッシュします |

## クイックコマンド一覧

```bash
# Check and install
./setup.sh --check
./setup.sh --yes
./rebotarm doctor

# Full simulation
./rebotarm start rs_sim
./rebotarm start web

# Natural-language Agent
export DEEPSEEK_API_KEY='your-key'
./scripts/start_rs_text_agent.sh

# Optional Leader dependencies and interfaces (stop old controller and rosbridge first)
bash scripts/setup_rs_leader.sh

# RS real robot
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE ./rebotarm start rs

# Status and stop
./rebotarm status
./rebotarm stop
```

## 参考文献

- ROS 2 Jazzy ドキュメント: https://docs.ros.org/en/jazzy/
- rosbridge_suite: https://github.com/RobotWebTools/rosbridge_suite
- Three.js: https://threejs.org/docs/
- URDFLoader: https://github.com/gkjohnson/urdf-loaders
- MuJoCo: https://mujoco.readthedocs.io/
- Model Context Protocol: https://modelcontextprotocol.io/
- [現在の B601-RS プロジェクト](https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_RS)
- B601-RS プロジェクトドキュメント: `README.md`、`USER_MANUAL_ZH.md`、`DEVELOPER_GUIDE_ZH.md`、`DATA_FLOW_RS_ZH.md`、`LEADER_TELEOP_TEST_ZH.md`
