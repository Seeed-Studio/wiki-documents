---
description: この開発者ガイドでは、reBotArm_simulator-DM Web シミュレータおよび ROS2/MuJoCo シミュレーションスタックのアーキテクチャ、ランタイム、ROS2 ブリッジ、LLM/MCP 連携、二次開発ワークフローを紹介します。
title: reBot Arm B601-DM Web シミュレータおよび ROS2/MuJoCo 開発者ガイド
keywords:
  - reBot Arm
  - B601-DM
  - Web Simulator
  - Three.js
  - URDF
  - rosbridge
  - LLM
  - MCP
  - Robot Arm
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web/rebot_web_simulator.png
slug: /rebot_arm_b601_dm_web_simulator_developer_guide
sku: 100065783, 100095532
last_update:
  date: 2026-08-24
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-07-30'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_web_simulator_developer_guide/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';

# reBot Arm B601-DM Web シミュレータおよび ROS2/MuJoCo 開発者ガイド

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
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
  <strong>Three.js 可視化 · URDF ロード · rosbridge ブリッジ · LLM/MCP 制御</strong>
</p>

このガイドは開発者向けです。`reBotArm_simulator-DM` Web シミュレータの実行方法と拡張方法を説明します。このシミュレータは軽量な Node.js + Three.js 製 Web コンソールで、同一リポジトリ内の ROS2 ワークスペースから URDF と STL メッシュを読み込み、reBot Arm B601-DM の 6 自由度ボディとグリッパをブラウザ上に描画し、rosbridge WebSocket 経由で ROS2 と通信します。ジョイントミラーリング、制御ロック、重力補償、ビジュアルグラスピング、LLM テキスト制御まで、開発ワークフロー全体をサポートします。

:::note
このガイドでは ROS2 バックエンドとして `Ubuntu 24.04 + ROS2 Jazzy` を使用します。Web フロントエンドは Windows、macOS、Linux 上の任意のモダンブラウザで動作します。ROS2 Humble / Ubuntu 22.04 でも同じワークフローに従うことができます。
:::

## プロジェクトの特長

1. **ビルド不要のフロントエンド**  
   Webpack や Vite などのバンドラに依存しません。すべてのフロントエンドアセットは、Node.js の静的サーバーから直接配信されるプレーンな HTML/CSS/JS であり、デプロイとデバッグのコストを非常に低く抑えます。

2. **URDF + STL の直接ロード**  
   `URDFLoader` は、同一リポジトリ内の `reBotArm_ros2_DM` ワークスペースにある `src/rebotarm_bringup/description/` から `ReBot_Arm_DM.urdf` と STL メッシュを読み込むため、ボディモデルを Web ディレクトリ側に二重管理する必要がありません。この URDF には完全なグリッパ定義が含まれています。Web 描画時には、`end_link` 配下の元のグリッパビジュアルを非表示にし、`split_meshes/grouped_gripper/` から最適化済みの 4 つのグリッパ STL メッシュをロードします。

3. **双方向 rosbridge ブリッジ**  
   `ReBotRosClient` は rosbridge の JSON プロトコルをラップし、ジョイント状態、グリッパ状態、アームステータス、仮想カメラ画像、ビジョン検出結果を購読し、単一ジョイントコマンド、グリッパコマンド、ターゲットポーズをパブリッシュします。

4. **LLM/MCP テキスト制御**  
   Web ページは ROS を直接呼び出しません。代わりに、Node.js サーバーをプロキシとして、VM 上で動作するテキストエージェント HTTP サービスへ転送し、MCP Server が自然言語のインテントを構造化されたロボット操作へ制約します。

5. **ワンクリックインストールと統合ランチャー**  
   `setup.sh` はシステム依存パッケージのインストール、SDK のクローン、Python 仮想環境の作成、依存関係のインストール、`colcon build` の実行を自動で行います。統合エントリポイント `rebotarm` は、`start web / dm / sim`、`doctor`、`status`、`stop` などのコマンドを提供します。これは冪等であり、すでに存在して要件を満たしているコンポーネントは自動的にスキップされます。

## 配線とネットワークに関する注意

Web シミュレータ自体はハードウェアに直接接続しません。すべての制御コマンドは rosbridge を介して ROS2 に転送されます。次の 2 点を確認してください：

1. **Ubuntu ホスト側**: USB2CAN シリアルブリッジがアームの CAN バスに接続されており、グリッパモーターも同じ CAN バス上にあり、24V 電源が接続されていることを確認します。ホストがシリアルポートを認識しているか確認します：

```bash
ls /dev/ttyACM*
```
<details>
<summary>期待される出力</summary>

```text
/dev/ttyACM0
```

`/dev/ttyACM0`（または `ttyACM1` など）が列挙されていれば、シリアルポートが認識されています。

</details>

2. **Web ホスト側**: Ubuntu ホストの rosbridge ポート（デフォルトは `9090`）に到達できることを確認します。Web ホスト側のブラウザまたはターミナルから WebSocket 接続をテストします。例えば：

```bash
# Confirm the Ubuntu host IP is reachable
ping <Ubuntu IP>

# Confirm the rosbridge port is open (rosbridge must already be running on Ubuntu)
curl -i http://<Ubuntu IP>:9090
```

一時的にシリアルポートの権限を開放する必要がある場合（Ubuntu 側）：

```bash
sudo chmod 666 /dev/ttyACM0
```

より良い方法は、現在のユーザーを `dialout` グループに追加することであり、再ログイン後に有効になります：

```bash
sudo usermod -a -G dialout $USER
```

## 動作環境

| 項目 | 推奨 |
|---|---|
| オペレーティングシステム（バックエンド） | Ubuntu 24.04。Ubuntu 22.04 も動作します |
| ROS2 | Jazzy。Humble も動作します |
| Python | システム Python、Jazzy では 3.12 |
| Node.js | 18 以上 |
| ブラウザ | Chrome / Edge 90+、Firefox 90+、Safari 14+ |
| MuJoCo（オプション） | 3.10+。完全な物理シミュレーションスタックにのみ必要 |

## インストール手順

### ステップ 0. アームの基本セットアップを完了する

Web シミュレータ開発を始める前に、[reBot Arm B601-DM クイックスタート](https://wiki.seeedstudio.com/ja/rebot_b601_dm_getting_started/) の手順（アームの組み立て、モーター ID 設定、ゼロ点初期化、基本的な接続確認）を完了してください。

プロジェクトリポジトリには、Web シミュレータに必要な ROS2 ワークスペース、URDF、STL メッシュがすでに含まれています。[reBot Arm B601-DM ROS2 連携](https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_ros2_integration/) ガイドに従って別のワークスペースをビルドする必要はありません。

:::tip
`reBotArm_control_py` は、実機ドライバ、逆運動学、動力学計算、重力補償を提供する中核の外部依存コンポーネントです。Web シミュレータはこの SDK を直接インポートしませんが、ROS2 バックエンド上の実機ノード `rebotarmcontroller`、MuJoCo トルクロープ、重力補償機能はすべてこれに依存しています。Fake Driver + Web の純粋なシミュレーションモードのみを実行する場合は SDK は不要ですが、実機を制御したり重力補償を使用したりする場合は必須です。

`setup.sh` は [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py) から SDK を自動取得し、`~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM/third_party/reBotArm_control_py/` にインストールします（検証済みコミットに固定）。すでに `~/reBotArm_control_py/` が存在する場合は自動的に検出され、再クローンは行われません。

インストール後のディレクトリ構成：

```text
reBotArm_control_py/
├─ reBotArm_control_py/
│  ├─ actuator/          RebotArm class, JointGroup, motor control
│  ├─ controllers/       RebotArmEndPose (trajectory, IK, gravity compensation)
│  ├─ kinematics/        forward/inverse kinematics, load_robot_model, pad_q_for_model
│  └─ dynamics/          dynamics functions such as compute_generalized_gravity
├─ config/
│  └─ rebotarm_dm.yaml   DM motor config (ID, baud rate, limits, PID)
├─ urdf/                 Pinocchio dynamics model URDF
└─ pyproject.toml
```

SDK の `pyproject.toml` では `requires-python >=3.10,<3.12` が宣言されていますが、このプロジェクトでは pip インストールではなく `sys.path` 経由で参照するため、Python 3.12 でも問題なく動作します。`pip install -e .` でバージョン競合が報告された場合は、そのステップをスキップし、ディレクトリが `reBotArm_ros2_DM/third_party/reBotArm_control_py/` または `~/reBotArm_control_py/` に存在することだけ確認してください（コードはこれらのパスを自動的に探索します）。
:::

### ステップ 1. ワンクリックインストール

公式の reBot Arm オープンソースプロジェクトは [Seeed-Projects/reBot-DevArm](https://github.com/Seeed-Projects/reBot-DevArm) で公開されています。このガイドで使用する Web シミュレータ、ROS2 ワークスペース、MuJoCo シミュレーションコードは [Yang-Ci/Borot-Arm_Mujoco](https://github.com/Yang-Ci/Borot-Arm_Mujoco) にホストされています。ソフトウェアリポジトリを `~/reBot_Arm_Mujoco-DM/` にクローンします：

```bash
git clone https://github.com/Yang-Ci/Borot-Arm_Mujoco.git ~/reBot_Arm_Mujoco-DM
cd ~/reBot_Arm_Mujoco-DM
```

リポジトリルートにある `setup.sh` は冪等であり、環境全体を自動セットアップします：

- 不足している apt システムパッケージ（ROS 2、Node.js、ros-dev-tools など）をインストール
- `reBotArm_control_py` SDK を `third_party/` にクローン（すでに存在する場合はスキップ）
- Python 仮想環境（`reBotArm_ros2_DM/.venv`、`--system-site-packages` 付き）を作成
- `requirements.txt` から Python 依存パッケージをインストール
- Web 用 `.env.example` から `.env` を作成
- `rosdep` による依存解決と `colcon build --symlink-install` を実行

```bash
./setup.sh
```

インストーラは冪等であり、すでに存在して要件を満たしているコンポーネントはスキップされ、既存の SDK、仮想環境、Web の `.env` を削除することはありません。不足している項目のみがインストールされます。最後に、インストール済み、スキップ、バージョン不一致、失敗した項目のサマリを表示します。

システムを変更せずにチェックのみを行う場合：

```bash
./setup.sh --check
```

インストール後、診断を実行して環境が準備できていることを確認します：

```bash
./rebotarm doctor
```

<details>
<summary>期待される出力（サマリ）</summary>

```text
[rebotarm-setup] Checking supported platform
[rebotarm-setup] Checking runtime versions
[rebotarm-setup] Checking reBotArm_control_py SDK
[rebotarm-setup] Checking project virtual environment
[rebotarm-setup] Checking web configuration
[rebotarm-setup] Resolving ROS dependencies and building the workspace

Installed/updated (6)
  - apt nodejs
  - SDK ...
  - virtual environment ...
  - Python requirements checked/updated in project venv
  - created .env from example
  - ROS workspace built with colcon

Already usable; skipped (5)
  - Ubuntu 24.04 supported
  - Python 3.12.3 compatible
  - Node.js v18.19.0 compatible
  - existing SDK preserved
  - critical Python and SDK imports pass

Setup complete. Next:
  ./rebotarm doctor
  ./rebotarm start web
  ./rebotarm start dm
```

`Failed or still missing` セクションが空の `Setup complete` メッセージが表示されていれば、セットアップは成功しています。

</details>

:::note
もし `setup.sh` が自動的に ROS 2 をインストールしない場合（たとえば ROS の apt ソースがまだシステムに追加されていない場合）、インストーラは自動的に GitHub から公式の `ros2-apt-source` パッケージをダウンロードしてソースを追加し、再試行します。apt ソースを手動で設定する必要はありません。
:::

### ステップ 2. 環境変数を設定する

`setup.sh` はすでに `.env.example` から `.env` を作成しています。ポートやプロキシの接続先を変更するには、`.env` を編集します：

```bash
# reBotArm_simulator-DM/.env key fields
PORT=3001
REBOTARM_TEXT_AGENT_URL=http://localhost:8082
REBOTARM_MCP_URL=http://localhost:8081/mcp
```

Web ページが Windows 上で動作し、ROS2 が Ubuntu VM 内で動作している場合は、`REBOTARM_TEXT_AGENT_URL` と `REBOTARM_MCP_URL` を Ubuntu VM の実際の IP に変更します（例：`http://<Ubuntu IP>:8082`）。

### ステップ 3. Web サーバーを起動する

```bash
cd ~/reBot_Arm_Mujoco-DM
./rebotarm start web
```

このコマンドは ROS2 環境を自動で source し、rosbridge（ポートがすでに使用中の場合は既存のリスナーを再利用）と Node.js Web サーバーを起動します。起動後、ターミナルにアクセス用 URL が表示されます：

```text
ROS WebSocket: ws://localhost:9090 (started by this command)
Web: http://localhost:3001
Ctrl+C stops processes started by this command.
```

ブラウザで `http://localhost:3001` を開き、URDF と STL の読み込みが完了するまで待ちます。3D モデルが表示されればフロントエンドは正常に動作しています。ページはデフォルトでローカルの rosbridge に接続されているため、「ROS2 Bridge」パネルから直接操作できます。

:::note
純粋な Web デモのみを実行したい場合（rosbridge を起動しない場合）は、Web ディレクトリから手動で起動することもできます：

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_simulator-DM
node server.js
```

この場合、ページ上では関節スライダーのドラッグ、姿勢プリセット、TCP ドラッグが利用できますが、いかなる ROS ノードにも接続されません。
:::

## プロジェクトの起動

:::note
`./rebotarm` コマンドは内部で環境を source するため、`source scripts/source_rebotarm_env.sh` を手動で実行する必要はありません。ただし、素の `ros2` コマンドを直接実行する場合は、各ターミナルで事前に source する必要があります。
:::

<Tabs defaultValue="fake" groupId="launch-mode" queryString>

<TabItem value="web" label="純粋な Web デモ">

最も軽量な実行方法です。Web サーバーのみを起動し、ROS2 には接続しません。姿勢デモ、ティーチング、UI 開発に適しています：

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_simulator-DM
node server.js
```

ブラウザで `http://localhost:3001` を開きます。関節スライダーのドラッグ、姿勢プリセット、TCP ドラッグ、ティーチング記録が利用できますが、すべての操作は 3D モデルのみに影響し、ハードウェアや ROS ノードは一切駆動されません。


![Web simulator interface](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web/rebot_web_simulator.png)
</TabItem>

<TabItem value="fake" label="Fake Driver シミュレーション">

Fake Driver、rosbridge、Web サーバーを起動します。Web ページは rosbridge を通じて関節状態をミラーし、制御コマンドを送信します。インターフェース、関節方向、リミットの検証に適しています。

ターミナル 1 — Fake Driver を起動：

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
source scripts/source_rebotarm_env.sh
ros2 launch rebotarm_bringup fake_bringup.launch.py
```

ターミナル 2 — rosbridge + Web を起動（1 コマンド）：

```bash
cd ~/reBot_Arm_Mujoco-DM
./rebotarm start web
```

ページが `ws://localhost:9090` に接続したら、「Mirror real joint state to the web」にチェックを入れると Fake Driver の関節状態が 3D モデルに同期されます。「Allow the web to send control to the real arm」にチェックを入れると、関節スライダーと Pose モーションが rosbridge を通じてコマンドを送信します。


![RViz model visualization](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web/rebot_rviz_model.png)
</TabItem>

<TabItem value="mujoco" label="完全な物理シミュレーション">

1 つのコマンドで、Fake Driver、MuJoCo 物理グラスプ、タスクサーバー、仮想カメラ、カラー検出器、rosbridge を含むフルスタックを起動します：

```bash
cd ~/reBot_Arm_Mujoco-DM
./rebotarm start sim
```

<details>
<summary>期待される出力</summary>

```text
[rebot-mujoco-all] starting fake_bringup...
[rebot-mujoco-all] starting mujoco_physics_grasp...
[rebot-mujoco-all] starting sim_task_server...
[rebot-mujoco-all] starting sim_rgb_camera...
[rebot-mujoco-all] starting sim_color_detector...
[rebot-mujoco-all] starting rosbridge_websocket on :9090...
```

すべてのノードが順番に起動し、`ERROR` が出なければ成功です。

</details>

このスクリプトは内部的には `reBotArm_ros2_DM/scripts/start_rebot_mujoco_all.sh` と同等です。デフォルトでは Fake Driver、robot_state_publisher、MuJoCo 物理グラスプ、タスクサーバー、オーバーヘッド RGB カメラ、カラー検出器、rosbridge を起動します。その後、別のターミナルで `./rebotarm start web` を実行して Web ページを起動します。ブラウザが ROS に接続したら、ビジュアルグラスプのデモを利用できます。


![MuJoCo physics simulation](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web/rebot_mujoco_physics.png)
</TabItem>

<TabItem value="real" label="実機ロボット制御">

実機モードでは、実機の bringup/ドライバと rosbridge を起動し、Web ページは同じ ROS インターフェースを通じて制御します。実機に切り替える前に、まず Fake Driver でインターフェース、関節方向、リミットを低速で検証することを推奨します：

```bash
# Before starting, confirm the device node and grant permissions
ls /dev/ttyACM0
sudo chmod 666 /dev/ttyACM0

# Start the real-robot driver (auto-sources the environment)
cd ~/reBot_Arm_Mujoco-DM
./rebotarm start dm
```

別のターミナルで、rosbridge + Web を起動します：

```bash
cd ~/reBot_Arm_Mujoco-DM
./rebotarm start web
```

:::warning
実機コントローラに接続されている場合、Web からのコマンドは実際のハードウェアを駆動します。必ず先に Fake Driver で関節方向とリミットを検証してください。実機を初めて使用する際は、末端関節を小さな動きでテストしてください。異常があれば直ちに「Disable」をクリックするか、制御ロックを解除してください。Web 上のチェックボックスだけに頼らず、現場には必ず非常停止、リミット、および作業空間の隔離を用意してください。
:::

</TabItem>

</Tabs>

## プロジェクトアーキテクチャ

```text
reBot_Arm_Mujoco-DM/
├─ setup.sh                         Idempotent one-click install and version check
├─ rebotarm                         Unified entry for start, stop, status, and diagnostics
├─ requirements.txt                 Python dependency version ranges
├─ PROJECT_ARCHITECTURE_ZH.md       Overall architecture, simulation principles, and debouncing notes
├─ reBotArm_ros2_DM/                ROS 2 workspace
│  ├─ scripts/                      One-click launch scripts and environment loading
│  ├─ third_party/                  reBotArm_control_py SDK for fresh installs
│  ├─ .venv/                        Project Python virtual environment (created by setup.sh)
│  └─ src/
│     ├─ rebotarm_msgs/             Custom msg/srv/action
│     ├─ rebotarmcontroller/        Real-robot driver, Fake Driver, hardware management
│     ├─ rebotarm_bringup/          URDF, STL, launch, motor config
│     ├─ rebotarm_mujoco/           MuJoCo simulation, IK, camera, vision
│     ├─ rebotarm_agent/            MCP Server and text agent
│     ├─ rebotarm_moveit_config/    MoveIt 2 configuration
│     └─ rebotarm_moveit_demos/     MoveIt 2 application demos
└─ reBotArm_simulator-DM/           Node.js + Three.js web console
   ├─ public/                       Pages, styles, front-end logic
   └─ split_meshes/grouped_gripper/ Web gripper meshes
```

データフロー：ブラウザは `HTTP /api` を介して Node.js の静的サーバーにアクセスし、`rosbridge WebSocket` を通じて ROS2 と双方向通信を行います。自然言語は Node.js によって Text Agent / MCP Server へプロキシされ、構造化されたツール呼び出しに変換されて ROS2 に入ります。ROS2 は Fake/実機ドライバとアームを下流側に駆動し、MuJoCo 物理シミュレーション、タスクサーバー、仮想カメラと横方向に接続します。Web ページ、LLM Agent、実機ロボットは互いへの呼び出しをハードコードしておらず、ROS2 のトピック、サービス、アクションを介して疎結合になっています。

`rebotarm` の統一エントリポイントが、このプロジェクトを操作する主な方法です：

| Command | Description |
|---|---|
| `./rebotarm start web` | rosbridge + Web サーバーを起動（環境を自動で source） |
| `./rebotarm start dm` | DM 実機ドライバを起動（別ターミナル、環境を自動で source） |
| `./rebotarm start sim` | MuJoCo のフルシミュレーションスタックを起動（実機と同時には起動しないでください） |
| `./rebotarm doctor` | 診断チェック（`./setup.sh --check` と同等） |
| `./rebotarm status` | プロセス、ポート、シリアルポート、ROS ノードの状態を表示 |
| `./rebotarm stop` | `start web` によって管理されているバックグラウンドプロセスを停止 |

:::note
すべての `./rebotarm` コマンドは内部で `source scripts/source_rebotarm_env.sh` を実行するため、環境を手動で読み込む必要はありません。ただし、素の `ros2` コマンド（たとえば launch ファイルを手動で起動する場合）を直接実行する場合は、事前に source する必要があります：

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
source scripts/source_rebotarm_env.sh
```

このスクリプトは、ROS2（`/opt/ros/jazzy/setup.bash`）、Python venv（`.venv/bin/activate`）、cmeel のパス（Pinocchio の C 拡張）、ワークスペース（`install/setup.bash`）をこの順に読み込みます。
:::

<details>
<summary><b>コアモジュールの補足</b>（クリックして展開）</summary>


**server.js — Node.js 静的サーバー**

`server.js` は依存関係ゼロの Node.js HTTP サーバーです。主な役割は次のとおりです：

- `public/` 配下の静的フロントエンドアセットを配信する；
- 同一リポジトリ内の ROS2 ワークスペースから URDF と STL メッシュを読み取り、`/api/urdf` および `/api/description/meshes/<file>` エンドポイントとして公開する；
- Web 専用のグリッパーメッシュ `/api/gripper_meshes/<file>`（`split_meshes/grouped_gripper/` から）を配信します；
- LLM チャットリクエスト `/api/llm/chat` とヘルスチェック `/api/llm/health` を VM 内の text-agent HTTP サービスへプロキシします；
- MCP 設定エンドポイント `/api/mcp/config` を提供し、`textAgentUrl` と `mcpUrl` を返します。

キーのパス解決（`server.js`）：

```javascript
const BRINGUP_DIR = path.resolve(
  path.join(ROOT, '..', 'reBotArm_ros2_DM', 'src', 'rebotarm_bringup')
);
const URDF_FILE = path.join(BRINGUP_DIR, 'description', 'urdf', 'ReBot_Arm_DM.urdf');
const MESHES_DIR = path.join(BRINGUP_DIR, 'description', 'meshes');
const GRIPPER_MESHES_DIR = path.join(ROOT, 'split_meshes', 'grouped_gripper');
```

:::note
`server.js` は相対パス `../reBotArm_ros2_DM/...` を通じて ROS2 ワークスペースを見つけます。web ディレクトリを別の場所に移動する場合は、これらのパスを適切に更新するか、ROS2 ワークスペースと同じバージョンのモデルコピーを web ディレクトリ内に保持する必要があります。
:::

**rebot-sim.js — 3D シーンコア**

`rebot-sim.js` はフロントエンドのコア（約 1700 行）で、次の役割を担います：

- Three.js のシーン、カメラ、レンダラー、およびカスタム軌道コントローラの初期化；
- `URDFLoader` を通じて URDF を読み込みます；`loader.packages` は `package://rebotarm_bringup` を `${origin}/api` にマッピングし、メッシュリクエストが Node.js エンドポイントを経由するようにします；
- Web 専用のグリッパー可視グループ（4 つの STL）を `end_link` にアタッチし、駆動範囲を 0–90mm とします；
- DLS（damped least squares）逆運動学ソルバ `IKSolver` を実装し、TCP ドラッグと目標姿勢の解決をサポートします；
- 姿勢プリセット、関節スライダー、TCP ドラッグ、ティーチングの記録/再生/エクスポート、到達エンベロープ推定、およびターゲットゴーストを提供します；
- `window.reBotSim` オブジェクトを通じて API を公開し、`rebot-ros-ui.js` から呼び出せるようにします。

関節定義（`rebot-sim.js`）：

```javascript
const jointDefs = [
  { name: 'joint1', label: 'J1 base yaw',    min: -2.8,  max: 2.8,  home: 0 },
  { name: 'joint2', label: 'J2 shoulder',     min: -3.14, max: 0,    home: 0 },
  { name: 'joint3', label: 'J3 elbow',       min: -3.14, max: 0,    home: 0 },
  { name: 'joint4', label: 'J4 wrist pitch', min: -1.87, max: 1.57, home: 0 },
  { name: 'joint5', label: 'J5 wrist yaw',   min: -1.57, max: 1.57, home: 0 },
  { name: 'joint6', label: 'J6 tool roll',   min: -3.14, max: 3.14, home: 0 },
  { name: 'gripper', label: 'J7 gripper', min: 0, max: 0.09, home: 0, unit: 'm' }
];
```

:::note
Web の Three.js 座標フレームは ROS のフレームと異なります。Three.js はデフォルトで Y-up、ROS はデフォルトで Z-up です。`rebot-sim.js` は `threeToRos(v)` によって `{ x: v.x, y: -v.z, z: v.y }` という変換を行います。カスタム姿勢機能を開発する際は必ずこの変換を使用してください。そうしないと座標が誤ってしまいます。
:::

**rebot-ros-client.js — rosbridge クライアント**

`ReBotRosClient` は `EventTarget` を継承し、rosbridge v2 JSON プロトコルをラップして、次の機能を提供します：

- `connect(url)` / `disconnect()`: WebSocket 接続管理（自動再接続機能付き：`autoReconnect`, `reconnectDelay`）；
- `subscribe(topic, type, callback, options)`: トピックを購読し、`throttleRate` によるスロットリングをサポート；
- `callService(service, type, args)`: サービスを呼び出し、Promise を返します；
- `sendActionGoal(actionName, actionType, goal)`: `/_action/send_goal` を通じてアクションを呼び出します；
- 高レベルラッパー：`enable()`, `disable()`, `safeHome()`, `startGravityCompensation()`, `setGripper()`, `moveToPose()`, `solveMoveToPoseIK()`, `followJointTrajectory()`；
- パブリッシュ用ラッパー：`publishJointCommand()`, `publishGripperCommand()`, `publishTargetPose()`。

デフォルトのネームスペースは `rebotarm` で、すべてのトピック/サービスパスは `/rebotarm/` で始まります。

**rebot-ros-ui.js — ROS コントロールパネル**

`rebot-ros-ui.js`（約 1500 行）は、`ReBotRosClient` と `reBotSim` を接続するビジネスレイヤーで、次の役割を担います：

- 関節状態、グリッパー状態、アームステータス、仮想カメラ画像、ビジョン検出結果、およびシミュレーションアニメーションイベントの購読；
- 「実機の関節状態を Web にミラーする」と「Web から実機アームへの制御送信を許可する」という 2 つのスイッチの実装；
- 関節コマンドのスロットリング（`COMMAND_INTERVAL_MS = 45ms`）とミラーホールド（`MIRROR_HOLD_MS = 1800ms`）；
- 重力補償の開始/停止およびステータス問い合わせ；
- グリッパー制御と到達待ち（`commandGripperAndWait`）；
- IK チェック、姿勢モーション、軌道送信、およびローレベル再生フォールバック；
- 完全なビジュアル把持フロー（退避、整列、予備下降、下降、把持、持ち上げ、移動）；
- シミュレーションアニメーションイベント（`attach_object` / `release_object`）により、Web グリッパーがオブジェクトに追従するよう駆動します。

コントロールロックは、誤操作を防ぐための重要なセーフガードです。`controlAllowed()` は一元的にチェックを行い、ROS が接続されていない場合やコントロールロックにチェックが入っていない場合は、すべての制御コマンドを遮断し、ページは 3D モデルのみを更新します。

**rebot-llm.js — LLM テキスト制御 UI**

`rebot-llm.js` は自然言語チャットインターフェースを実装します。チェーンは次のとおりです：

```text
web rebot-llm.js
  -> Node.js /api/llm/chat
  -> Text Agent HTTP service (default :8082)
  -> MCP Server (default :8081/mcp)
  -> ROS 2 service/action/topic
```

起動時にはまず `/api/llm/health` を呼び出して text-agent のヘルスチェックを行い、成功後に入力ボックスを有効化します。メッセージは `/api/llm/chat` を通じて text-agent にプロキシされ、返ってきた `text` と `events`（ツール呼び出しプロセス）がチャットエリアにレンダリングされます。停止時には `{ text: '__reset__', reset: true }` を送信してコンテキストをクリアします。

</details>

<details>
<summary><b>ROS2 インターフェース概要</b>（クリックして展開）</summary>


Web シミュレータが購読およびパブリッシュする主要な ROS2 インターフェースを以下に示します。デフォルトのネームスペースは `rebotarm` です。

**購読トピック**

| Topic | Type | Description |
|---|---|---|
| `/rebotarm/joint_states` | `sensor_msgs/msg/JointState` | 6 関節 + グリッパーのリアルタイム位置 |
| `/rebotarm/gripper/state` | `rebotarm_msgs/msg/JointMotorState` | グリッパーの位置/速度/トルク |
| `/rebotarm/arm_status` | `rebotarm_msgs/msg/ArmStatus` | 有効状態、モード、ステートマシン |
| `/rebotarm/mujoco/overhead_rgb/image_raw` | `sensor_msgs/msg/Image` | デスクトップ俯瞰 RGB カメラ画像 |
| `/rebotarm/vision/color_blocks/detections` | `std_msgs/msg/String` | カラーブロック検出結果（JSON） |
| `/rebotarm/sim/animation_event` | `std_msgs/msg/String` | シミュレーションアニメーションイベント（把持/解放） |

**パブリッシュトピック**

| Topic | Type | Description |
|---|---|---|
| `/rebotarm/joints/<jointN>/cmd` | `rebotarm_msgs/msg/JointMotorCmd` | 単一関節のスパースコマンド（mode=1 POS_VEL） |
| `/rebotarm/gripper/cmd` | `rebotarm_msgs/msg/JointMotorCmd` | グリッパーコマンド（m, 0~0.09） |
| `/rebotarm/mujoco/target_pose` | `geometry_msgs/msg/PoseStamped` | TCP ドラッグの目標姿勢 |

**呼び出されるサービス**

| Service | Type | Description |
|---|---|---|
| `/rebotarm/enable` | `std_srvs/srv/Trigger` | すべてのモーターを有効化 |
| `/rebotarm/disable` | `std_srvs/srv/Trigger` | すべてのモーターを無効化 |
| `/rebotarm/safe_home` | `std_srvs/srv/Trigger` | 安全な原点復帰 |
| `/rebotarm/gravity_compensation/start` | `std_srvs/srv/Trigger` | 重力補償の開始 |
| `/rebotarm/gravity_compensation/stop` | `std_srvs/srv/Trigger` | 重力補償の停止 |
| `/rebotarm/gravity_compensation/status` | `std_srvs/srv/Trigger` | 重力補償ステータスの問い合わせ |
| `/rebotarm/gripper/set` | `rebotarm_msgs/srv/SetGripper` | グリッパー到達サービス |
| `/rebotarm/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | IK 解決サービス |
| `/rosapi/topics` | `rosapi_msgs/srv/Topics` | 診断：すべてのトピックを列挙 |
| `/rosapi/services` | `rosapi_msgs/srv/Services` | 診断：すべてのサービスを列挙 |

**呼び出されるアクション**

| Action | Type | Description |
|---|---|---|
| `/rebotarm/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | デカルト姿勢モーション |
| `/rebotarm/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | 関節軌道の実行 |

:::note
ROS2 環境で `FollowJointTrajectory` または `MoveToPose` の `_action/send_goal` サービスが見つからない場合、Web ページは自動的に「ローレベル再生」モードにフォールバックします：軌道ポイントのタイムスタンプに従って単一関節コマンドをポイントごとにパブリッシュし、3D モデル側でも補間を同期します。これにより、Fake Driver のみを備えた最小構成環境でも、Web ページ上で軌道をデモすることができます。
:::

</details>

## グリッパーの単位と座標系の取り決め

Web と ROS のインターフェースでは、グリッパーの単位として **メートル** を使用します：

```text
close: 0.00 m
open:  0.09 m
```

モーターファームウェアは **ラジアン**（0.0 = 閉、−5.0 = 開）を使用します。変換は ROS2 コントローラの `HardwareManager` 内で行われ、Web ページはラジアンを直接扱いません。

URDF では、`finger_left` / `finger_right` はリニア（プリズマティック）ジョイントで、リミットは `0~0.0285`（m）です。Web ページは `fingerOpeningToGripperCommand()` を通じて、`finger_left` の開き量を 0~0.09 m のグリッパーコマンド範囲にマッピングします。

座標フレームについて、Web の Three.js はデフォルトで Y-up、ROS はデフォルトで Z-up です。すべての TCP 姿勢は ROS にパブリッシュされる前に `threeToRos()` で変換されます：

```javascript
function threeToRos(v) {
  return { x: v.x, y: -v.z, z: v.y };
}
```

## LLM/MCP テキスト制御

自然言語による制御は、ブラウザから ROS へ直接呼び出されるわけではありません。Node.js を経由してプロキシされます。この多層設計により、LLM が意図を理解しつつ、MCP レイヤーがその意図を構造化されたロボット操作へと制約します。

### MCP サーバーと Text Agent の起動

Ubuntu VM 内で MCP サーバーを起動します（デフォルトはロックモードで読み取り専用）：

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
source scripts/source_rebotarm_env.sh
ros2 launch rebotarm_agent rebotarm_mcp.launch.py
```

シミュレーションモーションモード（モーション許可）：

```bash
ros2 launch rebotarm_agent rebotarm_mcp.launch.py motion_mode:=allow
```

Text-agent HTTP サービスを起動します（Web ページから呼び出すため）：

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
./scripts/start_rebotarm_text_agent_http.sh
```
<details>
<summary>期待される出力</summary>

```text
[rebotarm-text-agent-http] MCP=http://127.0.0.1:8081/mcp
[rebotarm-text-agent-http] model=qwen-plus
INFO:     Uvicorn running on http://0.0.0.0:8082
```

`Uvicorn running on http://0.0.0.0:8082` が表示されたら準備完了です。

</details>

デフォルトでは `0.0.0.0:8082` をリッスンし、MCP は `http://127.0.0.1:8081/mcp` を指し、LLM はデフォルトで `qwen-plus` を使用します。

### Web での利用

Web ページの「LLM text control」パネルで「Start AI assistant」をクリックします。ページはまず text-agent のヘルスチェックを行い、成功すると入力ボックスが有効になります。自然言語で直接コマンドを入力できます。例えば：

- アームの状態を問い合わせる
- X=0.3 Y=0 Z=0.3 に移動
- グリッパーを開く
- 赤いブロックを把持する

text-agent の応答とツール呼び出しのプロセスはチャットエリアに表示されます。

### プロキシ先の設定

Web ページは `.env` 内の `REBOTARM_TEXT_AGENT_URL` と `REBOTARM_MCP_URL` を通じてバックエンドを特定します。Web ページが Windows 上で動作し、ROS2 が Ubuntu VM 内で動作している場合は、これらを VM の実際の IP に変更します：

```bash
REBOTARM_TEXT_AGENT_URL=http://<Ubuntu IP>:8082
REBOTARM_MCP_URL=http://<Ubuntu IP>:8081/mcp
```

変更後、`./rebotarm start web`（または `node server.js`）を再起動します。起動時にページは `/api/mcp/config` から現在のプロキシバックエンドを読み込み表示します。

### MCP Dashboard 可視化パネル

MCP Dashboard は独立したデバッグ用エントリであり、Web シミュレータを必要としません。起動は 2 ステップです：
![MCP Dashboard](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web/rebot_mcp.png)

**ターミナル 1 — MCP Server を起動：**

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
source scripts/source_rebotarm_env.sh
ros2 launch rebotarm_agent rebotarm_mcp.launch.py motion_mode:=allow
```

**ターミナル 2 — text-agent を起動（MCP Dashboard を含む）：**

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
./scripts/start_rebotarm_text_agent_http.sh
```

**ブラウザからのアクセス：**

```text
http://localhost:8082/
```

ブラウザで `http://<Ubuntu IP>:8082/` を開くとアクセスできます。追加のインストールは不要です。

**機能**：

- **ツール概要**：MCP Server から登録済みツールを自動取得し、カテゴリ（ステータス & 診断、有効化制御、モーション制御、グリッパー制御、重力補償、ビジュアルグラスピング、記録 & 再生）ごとにグループ化します；
- **検索フィルタ**：上部の検索ボックスでツール名と説明をリアルタイムにフィルタします；
- **パラメータフォーム**：各ツールの `inputSchema` に基づいて入力ボックスを自動生成します。パラメータを入力し「Call」をクリックすると、対応する MCP ツールを直接呼び出します；
- **モーションタグ**：`motion_mode=allow` を必要とするツールには「Motion」ラベルが付与されます；
- **カスタムツール登録**：「Register new tool」ボタンをクリックし、ツール名、説明、カテゴリ、Webhook URL、パラメータ Schema（JSON）を入力して、カスタムツールをパネルに追加します。呼び出し時には、パラメータが JSON として Webhook URL に POST されます；
- **CN/EN 切り替え**：右上の言語ボタンで CN/EN インターフェースをワンクリックで切り替えます。選択はブラウザの `localStorage` に保存されます；
- **自然言語入力**：右側のチャットボックスに自然言語コマンドを入力すると、LLM → MCP チェーンを通じて `/chat` エンドポイントに送信され、応答とツール呼び出しプロセスがログエリアにリアルタイム表示されます。

:::tip
MCP Dashboard は独立したデバッグ用エントリであり、Web シミュレータに依存しません。MCP Server（`:8081`）と Text Agent（`:8082`）が動作していれば、`http://<Ubuntu IP>:8082/` を開くだけで、全 18 個の MCP ツールを閲覧・呼び出しできます。
:::

**エンドポイント概要**：

| エンドポイント | メソッド | 説明 |
|---|---|---|
| `/` または `/dashboard` | GET | Dashboard の HTML ページを返します（ダークなガラスパネルテーマ、CN/EN 切り替え対応） |
| `/tools` | GET | MCP ツール一覧の JSON（名前、説明、パラメータスキーマ、カテゴリ、カスタムフラグ）を返します |
| `/call_tool` | POST | 指定した MCP ツールを直接呼び出します。ボディ：`{"name":"...", "arguments":{...}}` |
| `/register_tool` | POST | カスタムツールを登録します。ボディ：`{"name":"...", "description":"...", "category":"...", "webhook_url":"...", "parameters":{...}}` |
| `/unregister_tool` | POST | 登録済みカスタムツールを削除します。ボディ：`{"name":"..."}` |
| `/chat` | POST | 自然言語での対話。ボディ：`{"text":"..."}` |
| `/health` | GET | ヘルスチェック |

## セカンダリ開発ガイド

### 関節リミットやプリセットの変更

関節リミットとプリセットポーズは、`rebot-sim.js` の先頭にある `jointDefs` と `presets` オブジェクトで定義されています。変更後、ページをリロードすれば反映され、再ビルドは不要です。関節リミットは URDF 内の `<limit>` と一致させてください。一致していないと、Web モデルと ROS の挙動が一致しません。

### カスタム ROS インターフェースの追加

新しいトピックを購読したり新しいサービスを呼び出したりする必要がある場合は、`rebot-ros-ui.js` の `REQUIRED_TOPICS` または `REQUIRED_SERVICES` に追加し、ボタンイベント内で `client.subscribe()` または `client.callService()` を呼び出します。`ReBotRosClient` はすでに rosbridge プロトコルをラップしているため、WebSocket 通信を手書きする必要はありません。

### LLM ツールの拡張

LLM ツールは `rebotarm_agent` 内の MCP Server によって定義されています。新しいツールを追加するには、ROS2 ワークスペース内の `rebotarm_agent` パッケージに実装を追加します。再ビルド後、text-agent が自動的にそれを公開します。Web 側の変更は不要で、ツール呼び出しプロセスは `/api/llm/chat` の `events` フィールドを通じて返され、レンダリングされます。

### Web グリッパーメッシュの変更

Web 専用のグリッパー STL は `split_meshes/grouped_gripper/` にあり、`gripper_base.stl`、`gripper_hardware.stl`、`left_finger.stl`、`right_finger.stl` が含まれます。これらのファイルを置き換えてページをリロードしてください。Web ディレクトリ内に 2 つ目の `urdf/` や `meshes/` コピーを追加しないでください。実行時に使用されるのはこれら 4 つのグリッパー STL のみです。

### rosbridge 接続アドレスの変更

rosbridge の WebSocket アドレスは、Web ページの「ROS2 Bridge」パネルでユーザーが手動入力します。デフォルトではハードコードされていません。デフォルトまたはプリセットアドレスを変更するには：

- `reBotArm_simulator-DM/public/js/ros/rebot-ros-client.js`（クライアントのデフォルトは空で、入力ボックスから与えられます）
- `reBotArm_simulator-DM/public/js/ros/rebot-ros-ui.js`（`localStorage` から最後のアドレスを読み込みます）

入力ボックスが空の場合、ページは最後に保存されたアドレスの読み込みを試みます。デフォルトを変更するか、Web の接続パネルで実際のアドレスを直接入力してください。

<details>
<summary><b>主要ファイルクイックリファレンス</b>（クリックで展開）</summary>


| ファイル | 目的 |
|---|---|
| `reBotArm_simulator-DM/server.js` | Node.js 静的サーバー + LLM プロキシ |
| `reBotArm_simulator-DM/package.json` | npm スクリプト（start / dev） |
| `reBotArm_simulator-DM/.env` | ポートとプロキシ先の設定 |
| `reBotArm_simulator-DM/public/index.html` | シングルページアプリのエントリとコントロールパネルレイアウト |
| `reBotArm_simulator-DM/public/css/rebot-sim.css` | ダークテーマのスタイル |
| `reBotArm_simulator-DM/public/js/rebot-sim.js` | 3D シーン、IK、ティーチング、ドラッグのコア |
| `reBotArm_simulator-DM/public/js/rebot-llm.js` | LLM チャット UI |
| `reBotArm_simulator-DM/public/js/ros/rebot-ros-client.js` | rosbridge WebSocket クライアント |
| `reBotArm_simulator-DM/public/js/ros/rebot-ros-ui.js` | ROS コントロールパネル UI とビジネスロジック |
| `reBotArm_simulator-DM/public/lib/three-r128.min.js` | Three.js レンダリングエンジン |
| `reBotArm_simulator-DM/public/lib/STLLoader-umd.js` | STL メッシュローダー |
| `reBotArm_simulator-DM/public/lib/URDFLoader.js` | URDF パーサー |
| `reBotArm_simulator-DM/split_meshes/grouped_gripper/` | Web 専用グリッパー STL（4 ファイル） |

</details>

## FAQ

### 1. ブラウザを開いても「Loading Rebot_ARM-B601-DM arm model...」のまま変わらない

ページがローディングオーバーレイのまま止まっている場合、URDF または STL メッシュのリクエストが失敗しています。ブラウザの開発者ツールで Network パネルを開き、`/api/urdf` と `/api/description/meshes/*.STL` が 200 を返しているか確認してください。よくある原因：

- `server.js` 内の `BRINGUP_DIR` パスの解決が誤っており（Web ディレクトリをモノレポ外に移動したなど）、`src/rebotarm_bringup/description/` が見つからない；
- URDF 内の `package://rebotarm_bringup/...` がマッピングできていない。`loader.packages` が `${origin}/api` を指しているか確認する；
- STL ファイルが欠落している、またはパスの大文字小文字が一致していない（Linux は大文字小文字を区別します）。

### 2. ROS に接続してもステータスが「offline」のまま

次の順番で確認してください：

- rosbridge が Ubuntu 側で動作しており、`0.0.0.0:9090`（`127.0.0.1` ではない）でリッスンしているか；
- Web ホストから Ubuntu の 9090 ポートに到達できるか（ファイアウォール、VM のネットワークモード）；
- WebSocket アドレスが `ws://` で始まっているか（例：`ws://localhost:9090`）；

### 3. ジョイントスライダーで実機ロボットを制御できない

Web ページから実機ロボットを制御するには、3 つのアンロックステップが必要です：

1. 「ROS2 Bridge」パネルで ROS に接続する（WebSocket を実機コントローラの rosbridge に接続）；
2. 「Allow the web to send control to the real arm」にチェックを入れ、確認ダイアログで「OK」をクリック；
3. 「Enable」ボタンをクリック。

この 3 ステップはすべて必要です。制御ロックにチェックが入っていない場合、スライダーをドラッグしても 3D モデルのみが動き、ROS コマンドは送信されません。

### 4. グリッパーが Web と同期しない

`/rebotarm/gripper/state` の `position` はラジアンではなくメートル（0〜0.09）である必要があります。同期しない場合は、ROS2 コントローラ内の `ros_publishers.py` が `gripper_position_m()` を使用しているか確認してください。Web ページはフォールバックのフィードバックソースとして、`/rebotarm/joint_states` 内の `finger_left` からもグリッパー開度を推定します。

### 5. LLM アシスタントが起動に失敗する

Web ページに「Connection failed」と表示される場合は、Ubuntu VM 内で text-agent の HTTP サービスが動作しているか確認してください：

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
./scripts/start_rebotarm_text_agent_http.sh
```

また、`.env` 内の `REBOTARM_TEXT_AGENT_URL` が正しい VM の IP とポート（デフォルトは `8082`）を指していることを確認してください。ページは最初に `/api/llm/health` を呼び出してヘルスチェックを行い、失敗した場合はメッセージエリアに具体的なエラー内容を表示します。

### 6. ビジュアル把持デモが動作しない

ビジュアル把持は完全な物理シミュレーションスタックに依存しています。次を確認してください：

- MuJoCo のオーバーヘッド RGB カメラが動作しており、`/rebotarm/mujoco/overhead_rgb/image_raw` に画像があるかどうか；
- カラーディテクタが動作しており、`/rebotarm/vision/color_blocks/detections` に結果があるかどうか；
- Web カメラのプレビューにフレームが表示されており、色認識ステータスが "N / target X" と表示されているかどうか；
- ターゲットカラーの選択が正しいかどうか（auto/red/yellow/blue）。

### 7. フロントエンドコードの変更が反映されない

フロントエンドアセットは Node.js によって静的に配信されます。変更後はブラウザをリロードしてください。現在のバージョンでは Service Worker を登録していないため、旧バージョンが更新されない原因となるオフラインキャッシュはありません。ブラウザに古いコンテンツが表示され続ける場合は、ハードリフレッシュ（Ctrl+Shift+R）を行うか、通常のキャッシュをクリアしてください。

### 8. "URDFLoader" または "THREE" が見つからない

これらは `public/lib/` 配下のサードパーティライブラリで、`index.html` によって `<script>` タグ経由で読み込まれます。次を確認してください：

- `public/lib/three-r128.min.js`、`public/lib/URDFLoader.js`、`public/lib/STLLoader-umd.js` が存在すること；
- `index.html` 内の `<script>` タグのパスが正しく、読み込み順が Three.js → STLLoader → URDFLoader → ビジネススクリプト になっていること；
- ブラウザコンソールに 404 や読み込み順序のエラーが出ていないこと。

### 9. `setup.sh` がエラーを報告する、またはインストールに失敗する

`setup.sh` は冪等であり、失敗したコンポーネントは最後のサマリーの `Failed or still missing` に一覧表示されます。よくあるケース：

- ROS apt ソースが設定されていない：インストーラは自動的に `ros2-apt-source` パッケージをダウンロードしてソースを追加しますが、これには sudo が必要です；
- Python バージョンの不一致：Jazzy には 3.12、Humble には 3.10 が必要です。不一致は `Version/platform mismatches` に一覧表示されます；
- SDK のクローンに失敗した：ネットワークと GitHub への到達性を確認するか、`reBotArm_ros2_DM/third_party/reBotArm_control_py/` に手動でクローンして再実行してください；
- `colcon build` が失敗した：`rosdep` が初期化されているかどうかを確認し（`sudo rosdep init && rosdep update`）、その後 `./setup.sh` を再実行してください。

## 連絡先

- 技術サポート：[Issue を送信](https://github.com/Seeed-Projects/reBot-DevArm/issues)
- プロジェクトリポジトリ：[Github](https://github.com/Seeed-Projects/reBot-DevArm)
- フォーラム：[Seeed Studio Forum](https://forum.seeedstudio.com/)

## 参考文献

- [reBot Arm B601-DM クイックスタート](https://wiki.seeedstudio.com/ja/rebot_b601_dm_getting_started/)
- [reBot Arm B601-DM ROS2 統合](https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_ros2_integration/)
- [reBot Arm B601-DM ビジュアル把持デモ](https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_grasping_demo/)
- [reBot Arm B601-DM Pinocchio と MeshCat](https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_pinocchio_meshcat/)
- [reBot Arm B601-DM LeRobot チュートリアル](https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_lerobot/)
- [ROS2 Jazzy ドキュメント](https://docs.ros.org/en/jazzy/)
- [rosbridge_suite ドキュメント](http://wiki.ros.org/rosbridge_suite)
- [Three.js ドキュメント](https://threejs.org/docs/)
- [URDFLoader (gkjohnson)](https://github.com/gkjohnson/urdf-loaders)
- [Model Context Protocol](https://modelcontextprotocol.io/)
