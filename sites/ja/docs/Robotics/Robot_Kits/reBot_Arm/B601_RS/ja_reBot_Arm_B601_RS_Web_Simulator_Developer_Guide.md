---
description: この開発者ガイドでは、reBot Arm B601-RS の Web コンソール、ROS 2、RobStride/SocketCAN、MuJoCo シミュレーション、ビジュアル把持、および LLM/MCP エージェントのインストール、実行、二次開発ワークフローについて説明します。
title: reBot Arm B601-RS Web シミュレータおよび ROS 2/MuJoCo 開発者ガイド
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
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_web_simulator_en.png
slug: /rebot_arm_b601_rs_web_simulator_developer_guide
last_update:
  date: 2026-08-24
  author: Yang-Ci
translation:
  skip: [zh-CN]
createdAt: '2026-08-13'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_web_simulator_developer_guide/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# reBot Arm B601-RS Web シミュレータおよび ROS 2/MuJoCo 開発者ガイド

<RebotRsDocNav />

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
</p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License: Apache 2.0" />
    </a>
    <img src="https://img.shields.io/badge/ROS2-Jazzy-blue.svg" alt="ROS2 Jazzy" />
    <img src="https://img.shields.io/badge/Node.js-18%2B-green.svg" alt="Node.js 18+" />
    <img src="https://img.shields.io/badge/Three.js-r128-orange.svg" alt="Three.js r128" />
    <img src="https://img.shields.io/badge/Version-v1.0.0-brightgreen.svg" alt="Version v1.0.0" />
    <img src="https://img.shields.io/badge/Platform-Cross%20Platform-lightgrey.svg" alt="Platform" />
</p>

<p align="center">
  <strong>Three.js 可視化 · ROS 2 · SocketCAN · MuJoCo シミュレーション · LLM/MCP 制御</strong>
</p>

reBot Arm B601-RS プロジェクトは、Three.js Web コンソール、ROS 2 実機ドライバ、RS 専用 MuJoCo ダイナミクスシーン、ビジョン検出、軌道生成と逆運動学、そしてオプションの LLM/MCP 把持エージェントを統合しています。本ガイドでは、フルシステムのインストール、起動、および開発方法を説明します。

> **重要な安全上の注意**
>
> 実機を起動する前に、アームを固定し、作業空間を片付け、物理的な非常停止が動作することを確認し、まずシミュレーションで動作を検証してください。最初の実機テストでは、速度制限を `0.2-0.4 rad/s` に保ち、1 関節ずつ動かしてください。

## プロジェクトの特徴

1. **RS 専用アームモデル**

   Web コンソールと ROS 2 は、`ReBot_Arm_RS.urdf` とそれに対応する STL メッシュを使用します。Web サーバーはまず `rebotarm_ros2_RS` ワークスペースからモデルを読み込み、オフライン用のバックアップコピーも保持します。

2. **RobStride + SocketCAN による実機リンク**

   実機は、デフォルトで `1 Mbps` の Linux SocketCAN インターフェース `can0` を使用します。コントローラは `reBotArm_control_py` を通じて RobStride モータと通信します。

3. **MIT 125 Hz オンライン制御**

   Web コンソールは最大 60 Hz で目標値を更新し、実機コントローラは速度・加速度・ジャークで制限されたオンライン参照を 125 Hz で生成し、MIT の `q/dq/kp/kd/tau` コマンドを送信します。Web の目標更新はモータ制御ループをブロックしません。

4. **実機とシミュレーションの名前空間分離**

   実機はデフォルトで `/rebotarm`、シミュレーションは `/rebotarm_rs` を使用します。同じ Web コンソールから制御対象を切り替えることができ、実機と Fake Driver を同時に動かしてインターフェースを比較できます。

5. **RS 専用 MuJoCo シーン**

   MuJoCo は `physics` モードと `kinematic` モードをサポートします。デフォルトの `physics` モードには、重力、接触、テーブルトップ上の物体、オーバーヘッドカメラ、色検出、物理的な把持検証が含まれます。

6. **フィードバック駆動の Web アニメーション**

   実機モードでは、不透明なモデルが実際のフィードバックを、半透明のモデルが制御目標を表します。Web コンソールは、ローカルのアニメーションが実際のアーム姿勢と誤認されないように、rosbridge の計測値に対して適応ローパスフィルタ、フィードバックのデッドゾーン、表示補間を適用します。

7. **安全ステートマシン**

   システムは、軌道、重力補償、安全な原点復帰、および連続的な Web コマンドを仲裁します。ゼロ以外の姿勢から無効化する場合は、まず安全な原点復帰を実行して検証します。検証に失敗した場合、アームが突然落下しないように有効状態を維持します。

8. **ビジュアル把持と LLM/MCP エージェント**

   シミュレーションシーンには、オーバーヘッド検出、IK、把持、持ち上げ検証、配置に対応した赤・青・黄のオブジェクトが用意されています。MCP ツールは単独でも、大規模言語モデルと接続して自然言語から構造化されたロボット操作を呼び出すこともできます。

## 配線とネットワークに関する注意

### RS 実機の CAN 配線

1. アームを固定し、その可動範囲を空にします。
2. RobStride モータの CAN バス、電源、および USB-CAN アダプタを接続します。
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

連続した CAN フレームが見える場合、そのインターフェースはデータを受信しています。`Ctrl+C` を押して `candump` を終了します。

> インターフェースが `BUS-OFF` 状態になった場合は、まず電源、グラウンド、ボーレート、終端抵抗、モータ ID、CAN 配線を確認してください。コントローラを何度も再起動してハードウェアの不具合を隠さないでください。

### Web と ROS 2 のネットワーク

Web コンソールは、デフォルトでポート `9090` を使用する rosbridge WebSocket を介して ROS 2 と通信します：

```text
Web console: http://<Ubuntu-IP>:3002
rosbridge:   ws://<Ubuntu-IP>:9090
MCP Server:  http://<Ubuntu-IP>:8081/mcp
Text Agent:  http://<Ubuntu-IP>:8082
```

Web コンソールと ROS 2 が同じマシン上で動作している場合は、`localhost` を使用できます。LAN 上の別のコンピュータからアクセスする場合、ブラウザ側コンピュータ自身の `localhost` を入力せず、ROS 2 サービスを実行している Ubuntu ホストの IP を使用してください。

プロジェクトの起動スクリプトは、ROS 2 のディスカバリ範囲をデフォルトで `LOCALHOST` に設定し、Wi-Fi ローミングや IP 変更によって同一マシン上のノードが別々の DDS ネットワークに分断されないようにしています。これは、他のデバイスから HTTP/WebSocket ポートへアクセスすることには影響しません。別のコンピュータを ROS グラフに直接参加させるには、関連するターミナルでも同じ値を設定します：

```bash
export REBOTARM_ROS_DISCOVERY_RANGE=SUBNET
```

## 動作環境要件

| 項目 | 推奨要件 |
|---|---|
| バックエンド OS | Ubuntu 24.04 |
| ROS 2 | Jazzy |
| 互換性のある参照環境 | Ubuntu 22.04 + ROS 2 Humble（実機利用には独自のリグレッションテストが必要） |
| Python | 3.12（Jazzy）または 3.10（Humble） |
| Node.js | 18 以上 |
| ブラウザ | 最新の安定版 Chrome、Chromium、Edge、または Firefox |
| CAN ツール | `iproute2`、`can-utils` |
| 実機 CAN | `can0`、1 Mbps |
| MuJoCo | プロジェクトの Python 環境によってインストール |

## インストール手順

### ステップ 1: プロジェクトを取得する

```bash
git clone https://github.com/Yang-Ci/ReBot_Arm_web_RS.git ~/reBot_Arm_Mujoco-RS
cd ~/reBot_Arm_Mujoco-RS
```

以下のコマンドでは、プロジェクトディレクトリとして `~/reBot_Arm_Mujoco-RS` を使用します。異なるディレクトリを使用する場合は、パスを適宜置き換えてください。

### ステップ 2: 読み取り専用の環境チェック

```bash
cd ~/reBot_Arm_Mujoco-RS
./setup.sh --check
```

このコマンドはシステムをチェックするだけで、環境を変更しません。チェック内容は次のとおりです：

- Ubuntu、Python、Node.js のバージョン
- ROS 2、rosbridge、MoveIt、およびビルドツール
- SocketCAN ツールと `can0`
- Python 仮想環境と主要モジュール
- ROS 2 ワークスペースのビルド結果
- Web の `package.json` と `.env`

### ステップ 3: ワンクリックでのインストールとビルド

```bash
./setup.sh --yes
./rebotarm doctor
```

インストールスクリプトは、不足している ROS 2、Node.js、SocketCAN、ビルド依存関係をインストールし、`rebotarm_ros2_RS/.venv` を作成して RS 実機、MuJoCo、Agent 用の Python 依存関係をインストールし、rosdep を実行し、次のコマンドで ROS 2 ワークスペースをビルドします：

```bash
colcon build --symlink-install
```

制御 SDK と MuJoCo モデルは、メインリポジトリによって通常のファイルとして追跡されています。これらは Git サブモジュールではなく、入れ子になった Git リポジトリも含みません。既存の `.env` ファイル、SDK、モデルは、インストールスクリプトによってリセットされません。

システム依存関係がすでに揃っている場合は、ROS ワークスペースを準備して再ビルドするだけで済みます：

```bash
./scripts/setup_rs_workspace.sh
```

Python パッケージを変更した後は、通常これで十分です：

```bash
source scripts/rs_env.sh
cd rebotarm_ros2_RS
colcon build --symlink-install
```

### ステップ 4: Web の環境変数を設定する

初回インストール時、`reBotArm_simulator-RS/.env` は `.env.example` から作成されます。主な項目は次のとおりです：

```bash
PORT=3002
HTTPS=0
REBOTARM_TEXT_AGENT_URL=http://localhost:8082
REBOTARM_MCP_URL=http://localhost:8081/mcp
MOTORBRIDGE_WS_URL=ws://127.0.0.1:9002
MOTORBRIDGE_WS_TOKEN=
```

Web コンソールと ROS 2/Agent が同じマシン上にない場合は、プロキシアドレスをバックエンドマシンの IP に変更してください。API キーやトークンは、環境変数またはコミットされないローカルの `.env` にのみ保存するようにしてください。

## プロジェクトの起動

<Tabs defaultValue="web" groupId="launch-mode" queryString>

<TabItem value="web" label="純粋な Web デモ">

rosbridge や ROS 2 を起動せずに、Node.js Web サーバーのみを起動します：

```bash
cd ~/reBot_Arm_Mujoco-RS/reBotArm_simulator-RS
npm start
```

ブラウザで次の URL を開きます：

```text
http://localhost:3002
```

このモードは、3D モデル、UI、姿勢プリセット、フロントエンド機能の開発に適しています。ROS 2 バックエンドがない場合、Web コンソールは実機や完全な MuJoCo シーンを制御できません。

<!-- Image: rebot_rs_web_simulator_en.png -->

![reBot Arm B601-RS web シミュレータインターフェース](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_web_simulator_en.png)
</TabItem>

<TabItem value="sim" label="RS 向けフル MuJoCo シミュレーション">

ターミナル 1 では、Fake Driver、MuJoCo、カメラ、検出、MCP Agent、rosbridge を起動します：

```bash
cd ~/reBot_Arm_Mujoco-RS
./rebotarm start rs_sim
```

ターミナル 2 では、Web コンソールを起動します：

```bash
cd ~/reBot_Arm_Mujoco-RS
./rebotarm start web
```

`http://localhost:3002` を開き、制御対象として "RS Simulation (`/rebotarm_rs`)" を選択し、ROS WebSocket として `ws://localhost:9090` を入力します。

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

> ビジュアルグラスピングではデフォルトの `physics` モードを必ず使用してください。`kinematic` モードは関節位置を直接同期するだけであり、制御ゲイン、接触安定性、把持力の評価には使用できません。

<!-- Image: rebot_rs_mujoco_physics.png -->

![reBot Arm B601-RS MuJoCo physics simulation](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_mujoco_physics.png)
</TabItem>

<TabItem value="real" label="RS 実機ロボット制御">

まず SocketCAN を設定して確認します：

```bash
sudo ip link set can0 down 2>/dev/null || true
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details -statistics link show can0
```

非常停止が動作することと作業空間が安全であることを確認したら、ターミナル 1 で実機ロボットコントローラを起動します：

```bash
cd ~/reBot_Arm_Mujoco-RS
REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE \
  ./rebotarm start rs
```

ターミナル 2 で Web コンソールと rosbridge を起動します：

```bash
./rebotarm start web
```

`http://localhost:3002` を開き、"RS Real Robot (`/rebotarm`)" を選択します。最初のテストでは次の順序に従ってください：

1. Web コンソールが接続済みと表示し、アームの状態が正常で、モーターエラーがないことを確認します。
2. enable をクリックします。
3. 速度を `0.2-0.4 rad/s` に設定します。
4. 各関節を少しずつ動かし、方向、リミット、フィードバックを確認します。
5. その後、TCP ドラッギング、軌道、または重力補償をテストします。
6. 終了時は安全なホーミングを実行してから disable し、コントローラのターミナルで `Ctrl+C` を押します。

実機ロボットコントローラの一時停止に `Ctrl+Z` を使用しないでください。また、Web ボタンを物理的な非常停止として扱わないでください。古いコントローラインスタンスが残っている場合、実機ロボットの起動スクリプトは古いインスタンスに安全な終了を要求し、そのコントローラに属すると確認された残留リソースをクリーンアップします。

<!-- Image: rebot_rs_real_robot_web_en.png -->

![reBot Arm B601-RS real robot web control](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_real_robot_web_en.png)
</TabItem>

<TabItem value="dual" label="デュアル実機/フェイクデバッグ">

```bash
export REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE
./scripts/start_rs_dual.sh
```

このスクリプトは次を起動します：

- 実機ロボット `/rebotarm`;
- Fake Driver `/rebotarm_rs`;
- rosbridge `9090`。

これはインターフェース、関節方向、ステータスを比較するために使用します。完全な MuJoCo スタック、ビジョン、Agent、Web サーバーは起動しません。コマンドを送信する前に、Web コンソールで選択されている namespace を再度確認してください。


</TabItem>

</Tabs>

## 統一コマンドライン

| Command | 説明 |
|---|---|
| `./rebotarm doctor` | 読み取り専用の環境チェック。`./setup.sh --check` と同等 |
| `./rebotarm start web` | rosbridge を起動または再利用し、Web サーバーを起動 |
| `./rebotarm start rs_sim` | RS MuJoCo シミュレーションスタック一式を起動 |
| `./rebotarm start rs` | RS 実機ロボットコントローラを起動。ハードウェア確認用の変数が必要 |
| `./rebotarm status` | 登録済みプロセス、ポート、`can0` を表示 |
| `./rebotarm stop` | `start web` によって登録された web/rosbridge 子プロセスを停止 |

フォアグラウンドで動作しているシミュレーションおよび実機ロボットプロセスは、それぞれのターミナルで `Ctrl+C` を使って正常終了させてください。

## プロジェクトアーキテクチャ

```text
reBot_Arm_Mujoco-RS/
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

### Web コマンドから RS 実機ロボットへ

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

新しい Web ターゲットはオンライン軌道の終端だけを更新します。ブラウザが一時的に次のフレームの送信を止めた場合でも、125 Hz の制御ループは連続した参照値の生成を継続します。コマンドの QoS 深度は 1 なので、新しいターゲットは未処理の古いターゲットを上書きし、ドラッギング停止後に位置のバックログが再生されることを防ぎます。

### RS 実機ロボットから Web へのフィードバック

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

半透明モデルは制御ターゲットを表します。関節およびグリッパの誤差が十分に小さくなると、ターゲットの影は自動的に消えます。表示フィルタリングは Web 上の見た目にのみ影響し、モーターに送信されるターゲットは変更しません。

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

## Web 制御に関する注意

### 制御ターゲットと Namespace

| Mode | Namespace | Web モデルソース |
|---|---|---|
| RS 実機ロボット | `/rebotarm` | 実機ロボットの `/joint_states` フィードバック |
| RS シミュレーション | `/rebotarm_rs` | 実際の MuJoCo 状態を優先して使用 |

モードを切り替えると、Web コンソールは対象 namespace に応じて rosbridge クライアントとインターフェースパスを再作成します。

### 関節とグリッパ

- J1〜J6 はラジアン単位で制御され、RS URDF と同じリミットを持ちます。
- Web 上の速度範囲は `0.05-1.50 rad/s` で、デフォルトは `1.2 rad/s` です。
- J1〜J6 はデフォルトで `30 ms` のスライダ減衰と `1 deg` の入力デッドゾーンを使用し、スライダを離したときに最終位置が強制的に確定されます。
- J7/グリッパは Web 上では開口幅として表示され、範囲は `0-71.5 mm` です。
- グリッパはパブリッシュ時に RS モーター範囲 `0-5 rad` に変換され、ROS フィードバックはミリメートルに戻されます。
- J7 は J1〜J6 のラジアン減衰や入力デッドゾーンを通らず、ブラウザのレンダリングフレームごとに最新のターゲットだけが送信されます。

### TCP ドラッギングと IK

Web コンソールは damped least squares (DLS) を用いて TCP ターゲットを解きます。RS バージョンは特異点の度合いに応じて減衰を調整し、その後同じ MIT オンライン制御チェーンを通じて関節解を送信します。

Web の Three.js シーンは Y-up、ROS は Z-up を使用します。座標変換ロジックは `rebot-sim.js` にあり、姿勢機能を拡張する際はフォーム値を直接入れ替えるのではなく、既存の変換を再利用してください。

姿勢入力はメートル単位を使用します：X は前方、Y は左方向、Z は上方向です。ターゲットに到達できない場合は、まず Z を増やすか水平方向の距離を短くし、その後に姿勢制約と関節リミットを確認してください。

### ティーチングと軌道再生

Web コンソールは関節軌道を記録し、次を呼び出すことができます：

```text
/<namespace>/follow_joint_trajectory
```

RS 実機ロボットのアクションサーバーは、連続した単調な三次 Hermite 位置/速度参照を使用し、短すぎる軌道セグメントを自動的に延長して、通常の実機ロボット軌道速度をおおよそ `0.60 rad/s` 未満に保ちます。呼び出し側はアクション結果または実機ロボットのフィードバックを待つ必要があり、元のリクエスト時間に基づいて再生アニメーションを早く終了させてはいけません。

### Enable、安全なホーミング、Disable

- 実機ロボットコントローラは、起動のたびに enable が必要です。
- `safe_home` はゼロ位置へ滑らかに戻り、角度と速度を検証します。
- 非ゼロ姿勢から disable をクリックすると、まず `SAFE_HOMING` に入ります。
- ホーミング検証に失敗した場合、モーターは enable 状態のままで、失敗結果が返されます。
- `set_zero` はモーターのゼロ点を書き換えるもので、通常のホーミングボタンではありません。機械構造が実際にキャリブレーションされた姿勢にあるときにのみ呼び出してください。

### 重力補償

RS の重力補償は、現在計測されている姿勢から開始し、MIT を関節ごとに切り替えるため、ゼロ姿勢を目標と取り違えることはありません。繰り返し開始しても結果は同じであり、停止すると最後に計測した位置を保持します。

重力補償中は、Web 関節、TCP、軌道、およびグリッパーコマンドは拒否されます。関連サービス：

```text
/<namespace>/gravity_compensation/start
/<namespace>/gravity_compensation/stop
/<namespace>/gravity_compensation/status
```

## ROS 2 インターフェース

以下の例では実機の `/rebotarm` を使用します。シミュレーションでは、プレフィックスを `/rebotarm_rs` に置き換えてください。

### ステータストピック

| トピック | 型 | 説明 |
|---|---|---|
| `/rebotarm/joint_states` | `sensor_msgs/msg/JointState` | 6 軸とグリッパーを統合したステータス |
| `/rebotarm/joints/<name>/state` | `rebotarm_msgs/msg/JointMotorState` | 単一モーターの位置、速度、トルク、およびステータスコード |
| `/rebotarm/gripper/state` | `rebotarm_msgs/msg/JointMotorState` | グリッパーモーターの生ステータス |
| `/rebotarm/control_target` | `sensor_msgs/msg/JointState` | Web コンソールまたはアクション層からの最終ターゲット |
| `/rebotarm/control_reference` | `sensor_msgs/msg/JointState` | 125 Hz オンライン軌道リファレンスの ROS サンプル；`effort` にリファレンス加速度を格納 |
| `/rebotarm/arm_status` | `rebotarm_msgs/msg/ArmStatus` | イネーブル状態、モード、ステートマシン、およびエラーコード |

### 低レベルコマンドトピック

| トピック | 型 | 説明 |
|---|---|---|
| `/rebotarm/joints/<joint1..joint6>/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | 実機用 Web コンソールからのデフォルト関節コマンド |
| `/rebotarm/joints/<joint1..joint6>/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | 位置・速度コマンド |
| `/rebotarm/gripper/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | RS グリッパー MIT コマンド |
| `/rebotarm/gripper/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | グリッパー位置・速度コマンド |
| `/rebotarm/mujoco/target_pose` | `geometry_msgs/msg/PoseStamped` | TCP ターゲット姿勢 |

自分で低レベルコマンドを publish する前に、`arm_status.state_machine` を確認してください。`GRAVITY_COMP`、`SAFE_HOMING`、または軌道実行中に制御を奪わないでください。

### サービス

| サービス | 型 | 説明 |
|---|---|---|
| `/rebotarm/enable` | `std_srvs/srv/Trigger` | アームを有効化 |
| `/rebotarm/disable` | `std_srvs/srv/Trigger` | 安全に無効化；必要に応じて先に原点復帰 |
| `/rebotarm/safe_home` | `std_srvs/srv/Trigger` | 検証付きの安全な原点復帰 |
| `/rebotarm/set_zero` | `rebotarm_msgs/srv/SetZero` | モーターのゼロ点を書き込み；慎重に使用 |
| `/rebotarm/gravity_compensation/start` | `std_srvs/srv/Trigger` | 重力補償を開始 |
| `/rebotarm/gravity_compensation/stop` | `std_srvs/srv/Trigger` | 重力補償を停止 |
| `/rebotarm/gravity_compensation/status` | `std_srvs/srv/Trigger` | 重力補償ステータスを問い合わせ |
| `/rebotarm/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | 姿勢 IK ソルバ |
| `/rebotarm/gripper/set` | `rebotarm_msgs/srv/SetGripper` | グリッパー位置制御 |
| `/rebotarm/gripper/open` | `rebotarm_msgs/srv/GripperCommand` | グリッパーを開く |
| `/rebotarm/gripper/close` | `rebotarm_msgs/srv/GripperCommand` | グリッパーを閉じる |

例：

```bash
source scripts/rs_env.sh
ros2 service call /rebotarm/gravity_compensation/status std_srvs/srv/Trigger '{}'
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger '{}'
```

### アクション

| アクション | 型 | 説明 |
|---|---|---|
| `/rebotarm/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | 関節軌道 |
| `/rebotarm/gripper/command` | `control_msgs/action/GripperCommand` | グリッパーアクション |
| `/rebotarm/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | デカルト姿勢モーション |

### MuJoCo およびビジョンインターフェース

| インターフェース | 型／用途 |
|---|---|
| `/rebotarm_rs/mujoco/joint_states` | 実際の MuJoCo 関節状態 |
| `/rebotarm_rs/mujoco/object_states` | シーンオブジェクト状態（JSON） |
| `/rebotarm_rs/mujoco/overhead_rgb/image_raw` | 俯瞰 RGB カメラ |
| `/rebotarm_rs/vision/color_blocks/detections` | カラーオブジェクト検出 JSON |
| `/rebotarm_rs/mujoco/reset` | シミュレーションをリセット |
| `/rebotarm_rs/mujoco/record/start` | 記録を開始 |
| `/rebotarm_rs/mujoco/record/stop` | 記録を停止 |
| `/rebotarm_rs/mujoco/record/replay` | 記録を再生 |
| `/rebotarm_rs/mujoco/record/clear` | 記録をクリア |

## ビジュアルグラスピング

フルシミュレーションには、デフォルトで赤い立方体、青い直方体、黄色い円柱が含まれます。Web コンソールではターゲットカラーを選択するか自動選択し、その後、位置合わせ、プレグラスプ、下降、閉じる、持ち上げる、配置を実行できます。

把持の成功は、軌道が完了したかどうかだけではありません。システムは MuJoCo オブジェクトが実際に持ち上げられたかも確認し、グリッパーが空のまま閉じた場合や、オブジェクトを拾わずに軌道だけが完了した場合の誤った成功報告を防ぎます。

ビジュアルグラスピングのトラブルシューティング：

```bash
source scripts/rs_env.sh
ros2 topic echo /rebotarm_rs/vision/color_blocks/detections --once
ros2 topic echo /rebotarm_rs/mujoco/object_states --once
ros2 service list | grep rebotarm_rs
```

グリッパーが閉じてもオブジェクトを持ち上げない場合：

- `physics` モードが使用されていることを確認する；
- カメラとカラー検出が連続的に publish されているか確認する；
- ターゲットの幅、向き、および把持高さを確認する；
- ログ内の接触安定性と物理的な持ち上げ検証結果を確認する；
- 複数のグラスプまたは IK リクエストを同時に開始しない。

## LLM/MCP テキスト制御

### アーキテクチャ

```text
Web rebot-llm.js
  -> Node.js /api/llm/chat
  -> Text Agent (default :8082)
  -> MCP Server (default :8081/mcp)
  -> ROS 2 service/action/topic
```

LLM は自然言語を理解し、MCP レイヤーが意図を制約して構造化されたツール呼び出しに変換します。LLM 設定がなくても、MCP の検出、IK、関節、グリッパー、およびグラスプツールは直接呼び出すことができます。

### テキストエージェントの起動

フルシミュレーションでは、デフォルトで MCP Agent が起動します。自然言語のエントリポイントを有効にするには、別のターミナルを開きます：

```bash
cd ~/reBot_Arm_Mujoco-RS
export DASHSCOPE_API_KEY='your-key'
export REBOTARM_LLM_MODEL='qwen-plus'
./scripts/start_rs_text_agent.sh
```

デフォルトアドレス：

```text
MCP Server: http://127.0.0.1:8081/mcp
Dashboard:  http://localhost:8082
```

Web コンソールでは次のことができます：

- アームと ROS のステータスを問い合わせる；
- グリッパーを開閉する；
- ターゲット姿勢が到達可能か確認する；
- 指定した姿勢へ移動する；
- 指定した色のオブジェクトを把持する。

実機環境でモーションツールを有効にする前に、必ず Agent のモーション権限と namespace を明示的に確認してください。自然言語エントリポイントは、アームバックエンドの安全ステートマシンをバイパスしたり、物理的な非常停止を代替したりすることはできません。

## 主要制御パラメータ

実機のデフォルト設定は次の場所にあります：

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
  stream_acceleration_limit: 4.0
  stream_jerk_limit: 30.0
  stream_natural_frequency: 8.0
gravity_compensation:
  kp: 2.0
  kd: 1.0
```

その他のデフォルト周波数：

| レイヤー | デフォルト周波数 | 説明 |
|---|---:|---|
| Web 関節ターゲット | 最大 60 Hz | スライダーと TCP IK がターゲットを連続更新 |
| 実機同期フィードバッククエリ | 20 Hz | RobStride 測定キャッシュを更新 |
| ROS 実機ステート | 60 Hz | キャッシュからフィードバック、ターゲット、リファレンスを publish |
| RS MIT 制御 | 125 Hz | オンラインスムージングとモーターコマンド |
| Fake Driver | 100 Hz | シミュレーション制御と状態 |
| MuJoCo Sync | 250 Hz | デフォルトのダイナミクス同期 |
| MuJoCo オブジェクト状態 | 30 Hz | シーンと Agent |
| 俯瞰カメラ | 8 Hz | RGB 画像 |
| カラー検出 | 10 Hz | 検出結果 |

ゲインを調整する前に、以下をすべて同時に記録してください：

```text
/rebotarm/control_target
/rebotarm/control_reference
/rebotarm/joint_states
```

ターゲットが不連続な場合は Web 入力レイヤーを確認し、リファレンスが不連続な場合はオンライン軌道を確認し、リファレンスが連続だがフィードバックがオーバーシュートする場合は MIT ゲイン、負荷、摩擦、電流、および温度上昇を確認してください。Web アニメーションだけがジッタリングする場合に限り、フィードバックフィルタリングと rosbridge の到着間隔を確認します。

## 二次開発ガイド

### Web 関節リミットまたは姿勢プリセットの変更

ファイル：

```text
reBotArm_simulator-RS/public/js/rebot-sim.js
```

関節定義は `jointDefs` に、プリセットは `presets` にあります。関節リミットを変更する際は、RS URDF、SDK 設定、および実際の機械的リミットを合わせて検証し、Web 上の表示範囲だけを変更しないでください。

### Web コマンド周波数、フィルタリング、およびダンピングの変更

ファイル：

```text
reBotArm_simulator-RS/public/js/ros/rebot-ros-ui.js
```

このファイルは、Web コマンドのスロットリング、実機フィードバックのフィルタリング、フィードバックのデッドゾーン、補間、ターゲットシャドウ、制御ロック、およびビジョンロジックを処理します。Web アニメーションの遅延を補償するために、実機の MIT ゲインを上げないでください。

### カスタム ROS インターフェースの追加

クライアントラッパーは次の場所にあります：

```text
reBotArm_simulator-RS/public/js/ros/rebot-ros-client.js
```

UI レイヤーに Topic、Service、または Action のパスを追加し、クライアントの `subscribe()`、`callService()`、または `sendActionGoal()` を呼び出します。インターフェースは常に現在の `namespace` から生成し、シミュレーションコマンドを実機に送信してしまうことを避けてください。

### RS URDF またはメッシュの変更

ROS 2 の主要モデル：

```text
rebotarm_ros2_RS/src/rebotarm_bringup/description/urdf/ReBot_Arm_RS.urdf
rebotarm_ros2_RS/src/rebotarm_bringup/description/meshes_rs/
```

Web サーバーはまず上記のモデルを読み込みます。Web ディレクトリをコピーして単体で実行する場合は、次を使用します：

```text
reBotArm_simulator-RS/description/urdf/ReBot_Arm_RS.urdf
reBotArm_simulator-RS/description/meshes_rs/
```

両方のコピーを変更する際は同期を保ち、Linux のファイル名の大文字小文字を確認してください。

### MuJoCo を変更する

| ファイル/ディレクトリ | 役割 |
|---|---|
| `rebotarm_ros2_RS/src/rebotarm_mujoco_rs/models/` | RS の MJCF と STL |
| `rebotarm_mujoco_rs/mujoco_sync.py` | 同期周波数、ダイナミクス、PD |
| `rebotarm_mujoco_rs/scene_camera.py` | 俯瞰カメラ |
| `rebotarm_mujoco_rs/scene_detector.py` | 色検出 |
| `rebotarm_mujoco_rs/task_server.py` | タスク、記録、リプレイ |
| `rebotarm_mujoco_rs/launch/mujoco_rs.launch.py` | 起動パラメータ |

### MCP ツールを拡張する

MCP サーバーの場所：

```text
rebotarm_ros2_RS/src/rebotarm_agent/rebotarm_agent/rebotarm_mcp_server.py
```

ツールを追加する場合：

1. 明確な入力スキーマと単位を定義すること。
2. 読み取り専用ツールとモーションツールを分離すること。
3. モーションツール内で、ネームスペース、状態、およびモーション権限を検証すること。
4. コントローラを直接バイパスするのではなく、ROS 2 の Service/Action/Topic を通じてバックエンドを呼び出すこと。
5. ワークスペースを再ビルドし、シミュレーションでエラー、タイムアウト、キャンセル経路をテストすること。

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
```

実行時チェック：

```bash
./rebotarm status
ros2 node list
ros2 topic list | grep rebotarm
ros2 service list | grep rebotarm
ros2 action list | grep rebotarm
```

## FAQ

### 1. Web ページがモデル読み込み画面のまま進まない

ブラウザの開発者ツールの Network パネルを開き、次のリクエストが `200` を返しているか確認してください：

```text
/api/urdf
/api/description/meshes/*.STL
```

よくある原因：

- RS の URDF または STL が存在しない。
- Web ディレクトリだけを移動してしまい、フォールバックモデルが不完全である。
- URDF 内の `package://` マッピングが正しくない。
- Linux のファイル名の大文字小文字が一致していない。
- Three.js、STLLoader、URDFLoader の読み込み順が誤っている。

### 2. ROS が「disconnected」と表示される

```bash
ss -ltnp | grep 9090
ros2 node list
./rebotarm status
```

rosbridge が `0.0.0.0:9090` で待ち受けていること、および WebSocket アドレスが `ws://` で始まっていることを確認してください。リモートブラウザでは、ブラウザ側コンピュータの `localhost` ではなく、Ubuntu の IP を入力する必要があります。

### 3. Web コンソールは接続しているが、スライダーで実機ロボットを制御できない

次の順に確認してください：

1. Web コンソールが RS 実機ロボットの `/rebotarm` 上にある。
2. ROS WebSocket が接続されている。
3. Web 制御ロックが有効になっている。
4. アームが有効化されている。
5. `arm_status` が `GRAVITY_COMP`、`TRAJ_RUNNING`、`SAFE_HOMING` になっていない。
6. 実機コントローラに CAN またはモータエラーがない。

### 4. Web モデルがジッタする、またはターゲットの影が残り続ける

- 同じネームスペースに対して、コントローラと状態パブリッシャがそれぞれ 1 つだけ存在することを確認する。
- `/joint_states` に複数のパブリッシャがないか確認する。
- `control_target`、`control_reference`、`joint_states` を同時に記録する。
- CAN エラーカウンタとフィードバック到着間隔を確認する。
- 軌道再生と手動の連続ドラッグを同時に実行しない。

長時間残るターゲットの影は、多くの場合、実際のフィードバックがターゲットに到達していないことを意味します。これは必ずしも Web レンダリングの問題とは限りません。

### 5. CAN フィードバックがない、または BUS-OFF になる

```bash
ip -details -statistics link show can0
candump can0
```

次を確認してください：

- ボーレートが `1 Mbps` であるか。
- CAN_H/CAN_L が逆になっていないか。
- 両端の終端抵抗。
- モータ電源と共通グラウンド。
- モータ ID と SDK 設定。
- USB-CAN ドライバとインターフェース名。

エラーカウンタが増え続ける場合は、実機ロボットのテストを直ちに停止してください。

### 6. 無効化をクリックしてもアームの電源がすぐに切れない

アームがゼロ姿勢付近にない場合、コントローラはまず安全なホーミングを実行し、その結果を検証します。これは想定された動作です。ホーミングが失敗した場合、非ゼロ姿勢からの落下を防ぐため、システムはアームを有効なままに保ちます。緊急時には物理的な非常停止ボタンを使用してください。

### 7. 重力補償が開始できない、または制御できない

- アームが有効化されていることを確認する。
- `/gravity_compensation/status` を問い合わせる。
- 軌道や安全ホーミングが実行中でないことを確認する。
- 重力補償中は他のモーションコマンドは拒否される。
- モード切り替え時に落下する可能性のある荷重を必ず支持する。

### 8. ビジュアルグラスピングが動作しない

完全な `rs_sim` が `physics` モードで動作していることを確認し、次をチェックしてください：

```bash
ros2 topic echo /rebotarm_rs/mujoco/overhead_rgb/image_raw --once
ros2 topic echo /rebotarm_rs/vision/color_blocks/detections --once
ros2 topic echo /rebotarm_rs/mujoco/object_states --once
```

ボタンがタスクがキューに入っていると表示している場合は、現在のシリアルアクションが終了するまで待ち、複数のグラスピング要求を繰り返し開始しないでください。

### 9. LLM アシスタントが接続に失敗する

Text Agent が起動していることを確認してください：

```bash
./scripts/start_rs_text_agent.sh
```

`reBotArm_simulator-RS/.env` 内の `REBOTARM_TEXT_AGENT_URL` と `REBOTARM_MCP_URL` を確認してください。Web コンソールは `/api/llm/health` を通じてバックエンドをチェックします。API キーを Web ソースコードに書き込んだり、リポジトリにコミットしたりしないでください。

### 10. フロントエンドを変更してもページに古いバージョンが表示される

RS Web コンソールには Service Worker/PWA のサポートが含まれています。まず `Ctrl+Shift+R` でハードリフレッシュを行ってください。それでも更新されない場合は、ブラウザの開発者ツールでサイトデータを消去するか Service Worker の登録を解除し、その後ページを再読み込みしてください。

### 11. `setup.sh` または `colcon build` が失敗する

- Ubuntu、ROS 2、Python のバージョンが一致していることを確認する。
- rosdep が初期化され、更新できることを確認する。
- `./setup.sh --check` を実行して不足している項目を確認する。
- `rebotarm_ros2_RS/.venv` で `numpy`、`scipy`、`mujoco`、`pinocchio`、`motorbridge`、`fastmcp` をインポートできることを確認する。
- ユーザーファイルを削除またはリセットする前にバックアップを取り、破壊的なコマンドでビルド問題を解決しないこと。

## クイックコマンド表

```bash
# Check and install
./setup.sh --check
./setup.sh --yes
./rebotarm doctor

# Full simulation
./rebotarm start rs_sim
./rebotarm start web

# Natural-language Agent
export DASHSCOPE_API_KEY='your-key'
./scripts/start_rs_text_agent.sh

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
- B601-RS プロジェクトドキュメント: `README.md`、`USER_MANUAL_ZH.md`、`DEVELOPER_GUIDE_ZH.md`、`DATA_FLOW_RS_ZH.md`
