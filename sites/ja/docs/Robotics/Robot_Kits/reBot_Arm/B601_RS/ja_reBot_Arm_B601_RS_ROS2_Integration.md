---
description: このチュートリアルでは、reBot Arm B601-RS 向けに ROS2 control ワークスペースをセットアップする方法を説明します。SocketCAN 接続、アーム制御、RViz 可視化、MoveIt 2 連携を含みます。
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp
title: B601-RS と ROS2
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
  date: 2026-06-10
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-06-10'
updatedAt: '2026-09-24'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_ros2_integration/
---
import '/src/css/rebot-wiki-style.css';


# reBot Arm B601-RS ROS2 連携

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp" alt="reBot Arm B601-RS" />
</div>

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
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/ROS2-Humble | Jazzy-blue.svg" alt="ROS2 Humble | Jazzy" />
    <img src="https://img.shields.io/badge/Python-3.10%2B-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Version-v0.3.0-brightgreen.svg" alt="Version v0.3.0" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Platform" />
</p>

<p align="center">
  <strong>ROS2 Control · SocketCAN · RViz 可視化 · MoveIt 2 対応 · 重力補償</strong>
</p>

このチュートリアルでは、ROS2 ワークスペース `rebotarm_ros2` を通して reBot Arm B601-RS を制御する方法を説明します。このワークスペースは、Pinocchio ベースの逆運動学、軌道計画、重力補償を含む `reBotArm_control_py` Python SDK を ROS2 のトピック、サービス、アクションとしてラップします。これにより、上位レベルのプランニング、RViz 可視化、重力補償、グリッパ制御、カスタムアプリケーション開発をより簡単に利用できます。

:::note
このチュートリアルでは、主な参照環境として `Ubuntu 24.04 + ROS2 Jazzy` を使用します。ROS2 Humble / Ubuntu 22.04 でも同じワークフローに従うことができます。
:::

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/ros2/MoveIt2_RS.gif" alt="reBot Arm B601-RS MoveIt 2 demo" />
</p>

## プロジェクトの特長

1. **標準的な ROS2 インターフェース**  
   `/rebotarm/joint_states`、`/rebotarm/arm_status`、`FollowJointTrajectory`、`GripperCommand`、`MoveToPose` などの一般的なインターフェースを提供します。

2. **すぐに使える運動学・軌道計画・重力補償ノード**  
   順運動学 / 逆運動学、軌道計画、重力補償、および RViz 可視化のサポートをすぐに使える形で提供します。

3. **MoveIt 2 連携**  
   MoveIt 2 の設定とアプリケーションデモを含み、RViz MotionPlanning プラグインによるシミュレーションプランニングと、ハードウェア制御ノードによる実機実行をサポートします。

## 仕様

このチュートリアルのハードウェアは [Seeed Studio](https://www.seeedstudio.com/) によって提供されています。

| パラメータ | 仕様 |
|---|---|
| ロボットアームモデル | reBot Arm B601-RS |
| 自由度 | 6-DOF + グリッパ |
| 通信方式 | CAN |
| デフォルト CAN チャンネル | `can0` |
| デフォルトアーム制御モード | `mit` |
| 推奨システム | Ubuntu 24.04 + ROS2 Jazzy + Python 3.12 |
| 参考システム | Ubuntu 22.04 + ROS2 Humble + Python 3.10 |

## 部品表 (BOM)

| コンポーネント | 数量 | 同梱 |
|---|---|---|
| reBot Arm B601-RS ロボットアーム | 1 | ✅ |
| グリッパ | 1 | ✅ |
| CAN アダプタ | 1 | ✅ |
| 電源アダプタ | 1 | ✅ |
| 通信ケーブル | 1 | ✅ |
| Ubuntu ホスト PC | 1 | 自前で用意 |

## 配線

1. CAN アダプタをロボットアームの CAN バスに接続します。
2. グリッパモータを同じ CAN バスに接続します。
3. ロボットアームの電源を入れ、CAN アダプタをホストに接続します。
4. ホストが CAN インターフェースを認識していることを確認します：

```bash
ip -br link
```

CAN インターフェースを有効化します：

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details link show can0
```

## 動作環境要件

| 項目 | 推奨要件 |
|---|---|
| オペレーティングシステム | Ubuntu 24.04、Ubuntu 22.04 は参考として使用可能 |
| ROS2 | Jazzy、Humble は参考として使用可能 |
| Python | システム Python。Jazzy では通常 3.12、Humble では通常 3.10 を使用 |

## インストール手順

### ステップ 0. ロボットアームの基本準備を完了する

ROS2 連携を開始する前に、[reBot Arm B601-RS クイックスタート](https://wiki.seeedstudio.com/ja/rebot_b601_rs_getting_started/) を完了し、組み立て、モータ ID 設定、ゼロ位置初期化などの基本準備を済ませてください。

### ステップ 1. 使用している Ubuntu システム向けの ROS2 バージョンをインストールする

Seeed Studio Wiki の ROS2 インストールガイド、または公式 ROS2 ドキュメントを参照してください：

- [ROS2 Jazzy Ubuntu インストール](https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html)
- [ROS2 Humble Ubuntu インストール](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html)
- [Seeed Studio Wiki ROS2 Humble インストール](https://wiki.seeedstudio.com/ja/install_ros2_humble/)

### ステップ 2. ビルドツールと ROS 依存パッケージをインストールする

colcon、pip、Git、およびこのワークスペースに必要な ROS パッケージをインストールします。以下のコマンドは、現在のターミナルの `ROS_DISTRO` 値を使用します：

```bash
sudo apt update
sudo apt install -y python3-colcon-common-extensions python3-pip git
sudo apt install -y \
  ros-${ROS_DISTRO}-control-msgs \
  ros-${ROS_DISTRO}-trajectory-msgs \
  ros-${ROS_DISTRO}-tf-transformations \
  ros-${ROS_DISTRO}-robot-state-publisher \
  ros-${ROS_DISTRO}-rviz2 \
  ros-${ROS_DISTRO}-pinocchio
```

インストール後に確認します：

```bash
source /opt/ros/${ROS_DISTRO}/setup.bash
python3 -c "import pinocchio; print('pinocchio', pinocchio.__version__)"
```

### ステップ 3. コードリポジトリをクローンする

このチュートリアルでは、ワークスペースディレクトリとして `~/rebotarm_ros2` を使用し、公式の Seeed-Projects リポジトリを利用します：

```bash
cd ~
git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd ~/rebotarm_ros2
```

別のディレクトリにクローンした場合は、以下に出てくる `~/rebotarm_ros2` をすべてその絶対パスに置き換えてください。`third_party`、`src`、`install` などの相対パスは、ワークスペースルートからの相対パスです。



### ステップ 4. motorbridge をインストールする

公式 PyPI ソースから `motorbridge` をインストールします：

```bash
python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge
```

Ubuntu 22.04 / ROS2 Humble を使用している場合、通常は `--break-system-packages` を削除できます：

```bash
python3 -m pip install --user --index-url https://pypi.org/simple motorbridge
```

### ステップ 5. ローレベル SDK を取得する

```bash
cd ~/rebotarm_ros2
mkdir -p third_party
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git third_party/reBotArm_control_py
```

### ステップ 6. ワークスペースをビルドする

:::note コードバージョン
ここで説明するステータスハートビート、重力補償の終了検出、および矩形トレースは、[ROS2 controller PR #7](https://github.com/Seeed-Projects/reBotArmController_ROS2/pull/7) に対応しています。これらの挙動を使用する前に、チェックアウトしたコードにこれらの変更が含まれていることを確認し、その後コントロールノードを再ビルドして再起動してください。
:::

```bash
cd ~/rebotarm_ros2
source /opt/ros/${ROS_DISTRO}/setup.bash
colcon build --symlink-install
source install/setup.bash
```

実行可能エントリを確認します：

```bash
ros2 pkg executables rebotarmcontroller
```

想定されるエントリには、少なくとも次のものが含まれます：

```text
rebotarmcontroller reBotArmController
rebotarmcontroller GravityCompensation
rebotarmcontroller GripperControl
rebotarmcontroller MoveTo
rebotarmcontroller MoveToPose
```

## クイックスタート

:::caution
ロボットアームを使用する前に、次の点に注意してください：**ロボットアームコントローラは高い自由度を持ちます。コントローラを有効化したりアームに給電したりする前に、作業空間に人や障害物がないことを必ず確認してください。事故を避けるため、すべての動作コマンドを慎重に確認してください。危険な操作は固く禁じられており、その結果については自己責任となります。**
:::

### フルシステムを起動する

新しいターミナルごとに、ワークスペースに移動し、ROS2 とワークスペースの両方の環境を source します。以下のコマンドは `/opt/ros/jazzy/setup.bash` を使用します。ROS2 Humble の場合は `/opt/ros/humble/setup.bash` を使用してください。

まず CAN インターフェースが有効になっていることを確認します：

```bash
ip -details link show can0
```

フルブリングアップでは次が起動します：

- `reBotArmController` 制御ノード
- `robot_state_publisher`
- オプションの RViz

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0
```

長期間 B601-RS のみを使用する場合は、`src/rebotarm_bringup/config/rebotarm_hardware.yaml` 内の `default_model` を手動で `rs` に変更できます。その後は `model:=rs` を省略し、実際の CAN チャンネルパラメータだけを指定すればかまいません：

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=can0
```

### RViz 可視化を起動する

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=true
```

RViz でモデルが小さすぎる場合は、左側の `Views` パネルからビューを調整します：

- `Target Frame` を `base_link` に設定
- ビュータイプを `Move Camera` に変更
- `Distance` を調整（例：`1.0` や `1.5`）
- `Fixed Frame` が `base_link` に設定されていることを確認

### 制御ノードのみを起動する

URDF や RViz が不要な場合：

```bash
ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0
```

ノードを起動するには ros launch を使用してください。launch ファイルが `rebotarm_bringup/config` からハードウェア設定を渡すためです。

## ROS2 ネームスペース

デフォルトのネームスペースは次のとおりです：

```text
/rebotarm
```

したがって、すべてのトピック、サービス、アクションは `/rebotarm` をプレフィックスとして持ちます。例えば：

```text
/rebotarm/joint_states
/rebotarm/enable
/rebotarm/move_to_pose
```

複数のロボットアームが必要な場合は、起動時にネームスペースを変更できます：

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 arm_namespace:=right_arm
```

この場合、`/rebotarm/joint_states` は `/right_arm/joint_states` になります。

## 共通 API

### ステータストピック

| API | 型 | 説明 |
|---|---|---|
| `/rebotarm/joint_states` | `sensor_msgs/msg/JointState` | RViz 用の可視グリッパジョイントを含む、6 軸ジョイントの位置、速度、トルク |
| `/rebotarm/arm_status` | `rebotarm_msgs/msg/ArmStatus` | 制御モード、有効状態、ステートマシン、エラーコード |
| `/rebotarm/joints/<joint>/state` | `rebotarm_msgs/msg/JointMotorState` | 単一ジョイントのモータ状態 |
| `/rebotarm/gripper/state` | `rebotarm_msgs/msg/JointMotorState` | グリッパモータの状態 |

例：

```bash
ros2 topic echo /rebotarm/joint_states --once
ros2 topic echo /rebotarm/arm_status --once
```

`--once` は 1 件のメッセージを受信すると終了します。制御ノードは `arm_status` を 1 秒ごと、および起動時や状態変化時にパブリッシュするため、追加の QoS オプションは不要です。ソースを変更してビルドし直した後は、制御ノードを再起動してください。出力が届かない場合は `Ctrl+C` でチェックを停止し、ターミナル A の制御ノードが動作していることを確認します。

### サービス

| API | 型 | 説明 |
|---|---|---|
| `/rebotarm/enable` | `std_srvs/srv/Trigger` | ロボットアームを有効化 |
| `/rebotarm/disable` | `std_srvs/srv/Trigger` | ロボットアームを無効化 |
| `/rebotarm/safe_home` | `std_srvs/srv/Trigger` | セーフホーム位置に戻す |
| `/rebotarm/set_zero` | `rebotarm_msgs/srv/SetZero` | 全ジョイントまたは単一ジョイントのゼロ位置を設定 |
| `/rebotarm/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | IK 事前チェックと目標ジョイント解 |
| `/rebotarm/gripper/set` | `rebotarm_msgs/srv/SetGripper` | グリッパモータ位置を rad 単位で設定 |
| `/rebotarm/gripper/open` | `rebotarm_msgs/srv/GripperCommand` | 設定済みの値に従ってグリッパを開く |
| `/rebotarm/gripper/close` | `rebotarm_msgs/srv/GripperCommand` | 設定済みの値に従ってグリッパを閉じる |
| `/rebotarm/gravity_compensation/start` | `std_srvs/srv/Trigger` | 重力補償を開始 |
| `/rebotarm/gravity_compensation/stop` | `std_srvs/srv/Trigger` | 重力補償を停止 |

### アクション

| API | 型 | 説明 |
|---|---|---|
| `/rebotarm/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | エンドエフェクタ姿勢のモーション |
| `/rebotarm/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | 標準ジョイント軌道互換のエントリポイント |
| `/rebotarm/gripper/command` | `control_msgs/action/GripperCommand` | 標準グリッパアクション |

## 基本制御の例

### 1. 制御ノードを起動して状態を確認する

**ターミナル A：制御ノードを起動し、そのまま動かしておきます。** このノードはトピック、サービス、アクションのリクエストを継続的に処理します。Quick Start から `bringup.launch.py` または `driver.launch.py` がすでに動作している場合は、そのターミナルを開いたままにし、同じアームに対して 2 つ目のドライバを起動しないでください。

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0
```

`reBotArmController started` と表示されたら、ターミナル A はそのままにして、以降のコマンドには別のターミナルを使用します。

**ターミナル B：環境を読み込み、状態メッセージが届いていることを確認します。**

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 topic echo /rebotarm/joint_states --once
ros2 topic echo /rebotarm/arm_status --once
```

各 `--once` コマンドは 1 件のメッセージを受信すると終了します。ターミナル B で手順 2〜5 を続けてください。連続的に監視したい場合は、別のターミナルでも同じ環境を読み込み、`ros2 topic echo /rebotarm/joint_states` を実行します。連続トピックリスナはコマンド送信には必須ではありませんが、ターミナル A のドライバは動作し続けている必要があります。

制御ノードは接続後、自動的にアームを有効化し、制御ループを開始します。通常は `arm_status` 内の `enabled` と `control_loop_active` がどちらも `true` であり、手動で `/rebotarm/enable` を呼び出す必要はありません。以前にアームを無効化していた場合は、まず軌道、ホーミング、重力補償タスクが動作していないことを確認し、その後で再度有効化します：

```bash
# Only needed to resume control after the arm was disabled
ros2 service call /rebotarm/enable std_srvs/srv/Trigger "{}"
```

### 2. エンドエフェクタ姿勢へ移動する

```bash
ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {x: 0.0, y: 0.0, z: 0.0, w: 1.0}}, duration: 2.0}"
```

`move_to_pose` アクションは SDK のエンドポーズコントローラによって実行されます。B601-RS のアーム制御モードは `rebotarm_hardware.yaml` でデフォルト `mit` に設定されています。

### 3. ジョイント目標を送信する

```bash
ros2 action send_goal /rebotarm/follow_joint_trajectory \
  control_msgs/action/FollowJointTrajectory \
  "{trajectory: {joint_names: ['joint1','joint2','joint3','joint4','joint5','joint6'],
    points: [{positions: [0.1,0,0,0,0,0], time_from_start: {sec: 5}}]}}"
```

### 4. グリッパを制御する

```bash
ros2 service call /rebotarm/gripper/open rebotarm_msgs/srv/GripperCommand "{}"
ros2 service call /rebotarm/gripper/close rebotarm_msgs/srv/GripperCommand "{}"
```

明示的なグリッパモータ位置を送信することもできます：

```bash
ros2 service call /rebotarm/gripper/set rebotarm_msgs/srv/SetGripper "{position: 5.0}"
```

### 5. セーフホームと無効化

```bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

## デモ例

ターミナル A の制御ノードは動作させたままにし、以下の例にはターミナル B を使用します。ドライバがすでに動作している場合は、起動コマンドを繰り返さないでください。新しいターミナルごとに、まず環境を読み込みます：

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
```

`MoveTo` と `MoveToPose` は制御ノード起動直後から直接実行できます。`GravityCompensation` と `GripperControl` は内部で `/rebotarm/enable` を呼び出すため、開始前に手動でアームを有効化しないでください。例は 1 つずつ実行し、それぞれが終了してから次を開始します。

### ジョイントモーションの例

6 つのジョイントすべてを同時に制御します。単位は rad です：

```bash
ros2 run rebotarmcontroller MoveTo -- \
  0.20 -0.20 -0.20 -0.20 0.10 -0.10 \
  --duration 8.0
```

1 つのジョイントだけを制御します：

```bash
ros2 run rebotarmcontroller MoveTo -- --joint joint3 --position -0.20 --duration 5.0
```

### エンドエフェクタ姿勢の例

```bash
ros2 run rebotarmcontroller MoveToPose -- --x 0.30 --y 0.0 --z 0.30 --qw 1.0 --duration 2.0
```

### 重力補償の例

```bash
ros2 run rebotarmcontroller GravityCompensation
```

このスクリプトは最初に `/rebotarm/enable` を呼び出し、その後に重力補償を開始します。`Ctrl+C` で終了すると、`/rebotarm/safe_home` を呼び出し、その後に `/rebotarm/disable` を呼び出します。`safe_home` は、セーフホーム位置へ移動する前に重力補償からの離脱を処理します。

ターミナル A の制御ノードが終了すると、ターミナル B の重力補償プログラムも自動的に終了します。また、ステータスのハートビートが約 3 秒間途切れた場合にも、ホーミングや無効化リクエストを重複送信することなく終了します。RS がすでにデフォルトの MIT モードにある場合、重力補償に入っても有効状態は維持されます。DM は、位置／速度モードから MIT へ切り替える際に、既存のモード切り替え手順を保持します。

別案として、サービスを手動で呼び出すこともできますが、このシーケンスをスクリプトと同時に実行しないでください。通常どおり起動された制御ノードには、追加の enable リクエストは不要です。無効化されていた場合は、まず「基本制御の例」に従って再度有効化してください。

```bash
ros2 service call /rebotarm/gravity_compensation/start std_srvs/srv/Trigger
ros2 service call /rebotarm/gravity_compensation/stop std_srvs/srv/Trigger
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

### 対話的グリッパ制御の例

```bash
ros2 run rebotarmcontroller GripperControl
```

終了時に、このスクリプトはグリッパを閉じ、`/rebotarm/disable` を呼び出します。さらに手動でグリッパコマンドを送る前に、アームを再度有効化してください。このスクリプトを再度実行すると、内部でアームが有効化されます。

起動後、次を入力します：

```text
o / open    Open the gripper
c / close   Close the gripper
q / quit    Quit
```

## 設定

デフォルトの設定ファイルは次の場所にあります：

```text
src/rebotarm_bringup/config/
```

| ファイル | 説明 |
|---|---|
| `rebotarm_hardware.yaml` | B601-RS 向けの ROS2 上位レイヤハードウェア選択と SDK パラメータ上書き設定 |
| `driver_params.yaml` | ROS パラメータの例 |

`rebotarm_hardware.yaml` の先頭にある `default_model` は、デフォルトで `dm` になっている場合があります。B601-RS をデフォルトモデルにしたい場合は、次のように変更します：

```yaml
default_model: rs
```

この変更後、`model:=...` が明示的に渡されていない場合は、自動的に B601-RS が使用されます。

一般的な起動パラメータ：

| パラメータ | デフォルト | 説明 |
|---|---|---|
| `hardware_config` | bringup に含まれる組み込みの `rebotarm_hardware.yaml` | ROS2 上位レイヤハードウェア設定パス |
| `model` | `rs` | このチュートリアルでは、B601-RS の設定を選択するために `rs` を明示的に渡します |
| `channel` | `can0` | SocketCAN チャンネル |
| `joint_state_rate` | `100.0` | `/rebotarm/joint_states` のパブリッシュレート |
| `cmd_arbitration` | `reject` | 軌道実行中の低レベルアームジョイントコマンドの仲裁方式。`reject` または `preempt` |
| `arm_namespace` | `rebotarm` | ROS ネームスペースプレフィックス |
| `frame_id` | `base_link` | ロボットアームのベースフレーム |
| `ee_frame_id` | `gripper_end` | エンドエフェクタフレーム |
| `use_rviz` | `false` | bringup 時に RViz を起動するかどうか |
| `disable_after_safe_home` | `true` | セーフホーム完了後にモータを無効化するかどうかを制御 |

`rebotarm_hardware.yaml` における B601-RS のデフォルト主要設定：

| 項目 | デフォルト |
|---|---|
| 通信チャンネル | `can0` |
| アーム制御モード | `mit` |
| グリッパ開位置 | `5.0` |
| グリッパ閉位置 | `0.0` |
| ジョイント 2/3 の重力補償出力ゲイン | `1.5` |

## 低レベルコマンドトピック

ROS2 ワークスペースには、低レベルモータデバッグ用のトピックも用意されています：

| API | 型 | 説明 |
|---|---|---|
| `/rebotarm/joints/<joint>/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | 単一ジョイントの MIT 生コマンド |
| `/rebotarm/joints/<joint>/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | 単一ジョイントの位置・速度生コマンド |
| `/rebotarm/gripper/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | グリッパ MIT 生コマンド |
| `/rebotarm/gripper/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | グリッパの位置・速度生コマンド |

:::caution
低レベルコマンドトピックはデバッグと実験を目的としています。これらは IK、軌道計画、URDF の妥当性チェックを行いません。アプリケーションレベルのモーションには、`/move_to_pose`、`/follow_joint_trajectory`、`/gripper/set` などのサービスやアクションを優先して使用してください。
:::

## MoveIt 2

MoveIt 2 はロボットアーム用のモーションプランニングフレームワークです。ここでは主に、逆運動学、衝突チェック、軌道計画、および軌道実行を担当します。デモパッケージは、アプリケーションフローを低レベルドライバから分離しています。詳細については、公式の [MoveIt 2 Documentation](https://moveit.picknik.ai/main/index.html) を参照してください。

MoveIt 関連の内容は 2 つのパッケージに分かれています：

| Package | 目的 |
|---|---|
| `rebotarm_moveit_config` | ロボットモデル、SRDF、運動学、関節リミット、コントローラおよび RViz 設定 |
| `rebotarm_moveit_demos` | MoveIt 2 ベースのアプリケーションデモ |

MoveIt 環境は、計画と実行のために `ros2_control` と `move_group` を通じてシミュレートされたハードウェアを使用します。これは、RViz 内でモデル、IK、軌道計画、およびデモフローを検証するのに適しています。

このリポジトリは実機ハードウェアもサポートします。実機を接続する前に、アームのゼロ構成、関節方向、関節リミット、速度リミット、およびグリッパの開閉範囲が正しいことを確認するか、リポジトリのデフォルト設定のままにしてください。

### MoveIt 環境のセットアップ

まず ROS2 環境が利用可能であることを確認してください。次のコマンドは、現在 source されている `ROS_DISTRO` 用の依存関係をインストールします：

```bash
sudo apt update
sudo apt install -y \
  ros-${ROS_DISTRO}-moveit \
  ros-${ROS_DISTRO}-moveit-configs-utils \
  ros-${ROS_DISTRO}-moveit-kinematics \
  ros-${ROS_DISTRO}-moveit-planners-ompl \
  ros-${ROS_DISTRO}-moveit-simple-controller-manager \
  ros-${ROS_DISTRO}-ros2-control \
  ros-${ROS_DISTRO}-ros2-controllers \
  ros-${ROS_DISTRO}-xacro
```

MoveIt の設定とデモはこのワークスペースに含まれています。依存関係をインストールしたら、ワークスペースを再ビルドします：

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
colcon build --symlink-install
source install/setup.bash
```

MoveIt パッケージとデモのエントリポイントを確認します：

```bash
ros2 pkg list | grep rebotarm_moveit
ros2 pkg executables rebotarm_moveit_demos
```

想定されるエントリには少なくとも次が含まれます：

```text
rebotarm_moveit_demos draw_square
rebotarm_moveit_demos pick_place
```

### MoveIt を使う

MoveIt のプランニングは、シミュレーションと実機の両方のシーンで、RViz の GUI またはノード呼び出しを通じて使用できます。

#### シミュレーションで MoveIt を使う

MoveIt は RViz シミュレーションのために ros2_control 仮想ハードウェアインターフェースを使用します：

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs
```

デフォルトでは次のものが起動します：

- `move_group`
- `robot_state_publisher`
- `ros2_control_node`
- `joint_state_broadcaster`
- `rebotarm_controller`
- `gripper_controller`
- MoveIt MotionPlanning プラグイン付きの RViz

RViz は自動的に開き、B601-RS モデルを読み込みます。左側の GUI パネルからモーションを制御できます。

RViz なしで MoveIt 環境を実行するには：

```bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs use_rviz:=false
```

#### reBotArm ハードウェアで MoveIt を使う

実機シーンでは、まずハードウェア制御ノードを起動し、その後実機用の MoveIt 環境を起動します：

```bash
ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0
```

別のターミナルで：

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py model:=rs
```

:::caution
実機で任意のデモを実行する前に、ロボットアームの作業空間に人や障害物がないことを確認し、まず RViz で計画された経路を確認し、いつでもコントローラを停止できるように準備しておいてください。
:::

#### RViz で目標を設定して実行する

1. `MotionPlanning` → `Planning` で、`Start State` を `<current>` に設定し、現在の関節フィードバックから計画します。すでに `<current>` が表示されている場合は、いったん `home` を選択してから再度 `<current>` に戻し、状態が更新されるのを待ちます。
2. `Goal State` を `home` に設定し、`Joints` を開いて目標を調整します。すでに `home` が選択されている場合は、別のオプションを選んでから再度 `home` を選択してください。**編集する前に、テーブルの見出しが `Group joints of goal state` になっていることを確認してください。** `Group joints of start state` と表示されている場合は開始状態を編集しているので、`Planning` に戻って `Goal State` を再度選択してください。
3. 最初のシミュレーション確認として、目標の `joint1` だけを約 `10°` に設定し、他の関節はゼロのままにします。`Joints` エディタ内の回転関節値は度数法を使用しますが、ROS の関節状態と軌道はラジアンを使用します。
4. `Plan` をクリックしてプレビューを確認し、その後 `Execute` をクリックします。プランニング後にアームの状態が変化した場合は、現在の状態から再度プランニングしてください。

ROS2 Humble の RViz プラグインでは、`Joints` は直近に更新された開始または目標状態のどちらかを編集します。`Start State` を設定した後や実行が完了した後は、再度編集する前に `Group joints of goal state` であることを確認してください。

シアンの球と赤・緑・青のリングは、手動プランニング用のエンドエフェクタ操作コントロールです。左下の `Displays` パネルで `MotionPlanning` → `Planning Request` を展開します：

- **エンドエフェクタを手動でドラッグする：** `Query Start State` を無効にし、`Query Goal State` を有効にして目標を編集します。
- **矩形やピック＆プレーススクリプトを実行する：** `Query Start State` と `Query Goal State` の両方を無効にして球とリングを非表示にします。手動ドラッグを再開するには、`Query Goal State` を再度有効にします。
- **ロボットと軌跡を表示し続ける：** `PlanningScene` と `RectangleTrace` を有効にしたままにします。`RectangleTrace` のトピックを `/draw_square/markers` に設定します。古い RViz ウィンドウに軌跡表示がない場合は、`Add` → `By display type` → `MarkerArray` を選択し、その `Topic` を `/draw_square/markers` に設定するか、更新された RViz 設定を読み込むために MoveIt を再起動してください。

実行時に `Invalid Trajectory: start point deviates from current robot state more than 0.05` に続いて `failed or timeout reached` が報告される場合、軌道の開始点が現在の関節フィードバックと一致していません。このエラーでは、`expected` は軌道の開始点、`current` はフィードバックであり、最終目標ではありません。開始状態をリセットし、自分が目標を編集していることを確認してから再計画してください。実行タイムアウトを延長したり開始許容誤差を緩めたりしても、この不一致は解消されません。

シミュレーションには `demo.launch.py` を、実機アームにはハードウェアドライバと `hardware.launch.py` を使用してください。2 つの MoveIt 環境を同時に実行しないでください。joint-state publisher を確認するには、次を実行します：

```bash
ros2 topic info /joint_states --verbose
ros2 topic info /rebotarm/joint_states --verbose
```

### Draw-square デモを実行する

この例では **モックシミュレーション** を使用します。これは、物理的な接触をシミュレートせずに、RViz 内でロボットとその動きを表示するシミュレートされた `ros2_control` ハードウェアインターフェースです。デモは実行中の MoveIt 環境に接続します。`model:=rs` はロボットモデルを選択するだけであり、シミュレーションか実機かを選択するものではありません。

**1. ターミナル A：シミュレーションを起動し、そのまま動かしておきます。** このシミュレーションがすでに動作している場合は、再度起動しないでください：

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs
```

ROS2 Humble の場合は、これ以降のコマンドも含めて `jazzy` を `humble` に置き換えてください。ハードウェアドライバと `hardware.launch.py` を前述のとおり起動している場合にのみ、このデモは実機アームを駆動します。2 つの環境を同時に実行しないでください。

**2. ターミナル B：矩形デモを実行します。** デモコードを変更した後は、ワークスペースで `colcon build --symlink-install --packages-select rebotarm_moveit_demos rebotarm_moveit_config` を実行し、再度環境を source してください。RViz で `Plan` や `Execute` をクリックする必要はありません：

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=rs
```

`draw_square` は最初にグリッパを閉じます。成功を確認した後、アームをリセットし、同一平面上の矩形の 4 つの頂点を通過して最初の頂点に戻ります。グリッパインターフェースが利用できない場合や閉じることに失敗した場合、デモは停止します。

RViz では、**細いシアンの線が参照矩形であり、黄色の線が TF からサンプリングされた実際の `gripper_tcp` の動きです。** 記録は最初の頂点に到達した後に開始され、リセットとアプローチの動きは含まれません。デモを再実行すると、以前の軌跡は消去されます。デモは頂点間でジョイント空間プランニングを使用するため、実際の動きが 4 本の直線の参照エッジに厳密に沿うことは保証されません。

デフォルトパラメータは次の場所にあります：

```text
src/rebotarm_moveit_demos/config/draw_square_rs.yaml
```

主なパラメータ：

| Parameter | 説明 |
|---|---|
| `start_point` | デモ開始前の関節リセット位置 |
| `closed_gripper_position` | クローズ時のシミュレートされた片側グリッパ関節位置。デフォルトは `0.0` |
| `hardware_closed_gripper_position` | クローズ時のハードウェアグリッパモータ位置。デフォルトは `0.0`。使用前にハードウェアリミットを確認してください |
| `rectangle_center` | `base_link` における矩形の中心 |
| `rectangle_width` / `rectangle_height` | メートル単位の矩形寸法 |
| `tcp_rpy` | TCP の姿勢。デフォルトは下向きのグリッパ |
| `tcp_yaw_offsets` | 大きな joint6 の巻き付きを避けるために使用される代替 IK ヨー値 |

`draw_square` は、MoveIt の IK、軌道計画、および実行が正しく動作しているかどうかを検証するのに有用です。プランニングが失敗する場合は、まず開始関節状態、矩形中心、TCP 姿勢、および関節リミットが妥当かどうかを確認してください。

### Pick-place デモを実行する

ターミナル A でモックシミュレーションを動かしたままにします。矩形デモが終了したら、ターミナル B で次を実行します。RViz では `Query Goal State` と `Query Start State` の両方を無効にしたままにし、`Plan` や `Execute` をクリックしないでください。

代わりにハードウェアドライバと `hardware.launch.py` を起動している場合は、同じコマンドで実機アームを駆動します。pick-place デモは、シミュレーションとハードウェア環境を起動したり切り替えたりはしません。

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_moveit_demos pick_place.launch.py model:=rs
```

デフォルトパラメータは次の場所にあります：

```text
src/rebotarm_moveit_demos/config/pick_place_rs.yaml
```

共通パラメータ：

| パラメータ | 説明 |
|---|---|
| `ready_point` | ピック／プレースの前後で使用される待機ジョイント位置 |
| `pick_position` | `base_link` における物体の底面中心位置 |
| `pick_tcp_rpy` / `place_tcp_rpy` | ピックおよびプレース用の TCP 姿勢 |
| `object_dimensions` | プランニングシーン内オブジェクトの寸法（メートル） |
| `max_gripper_width` | グリッパの合計最大開口幅、デフォルトは `0.09m` |
| `open_gripper_position` / `grasp_gripper_position` / `closed_gripper_position` | シミュレーション用片側グリッパジョイント位置 |
| `hardware_open_gripper_position` / `hardware_closed_gripper_position` | ハードウェアグリッパモータの開／閉位置 |

モックシミュレーションでは、`pick_place` は仮想オブジェクトをプランニングシーンに追加します。シーンへのアタッチとデタッチによってオブジェクトはグリッパに追従しますが、物理的な接触や把持力はシミュレートされません。

`pick_place` はグリッパを開き、ピック姿勢へ移動し、グリッパを閉じ、プレース姿勢へ移動してオブジェクトを解放します。シミュレーション用グリッパジョイント位置と実機グリッパモータ位置は別のパラメータです。実機で実行する前に、グリッパの開閉方向とリミットを必ず確認してください。

### MoveIt 設定ファイル

| ファイル | 説明 |
|---|---|
| `rebotarm_moveit_config/config/rebotarm_rs.urdf.xacro` | MoveIt が使用する B601-RS ロボットモデル（グリッパと `gripper_tcp` を含む） |
| `rebotarm_moveit_config/config/rebotarm_rs.ros2_control.xacro` | シミュレーション用の ros2_control モックハードウェア記述 |
| `rebotarm_moveit_config/config/rebotarm_rs.srdf` | MoveIt のグループ、エンドエフェクタ、デフォルト状態、およびセマンティック設定 |
| `rebotarm_moveit_config/config/kinematics.yaml` | IK ソルバ設定 |
| `rebotarm_moveit_config/config/joint_limits.yaml` | MoveIt プランニングで使用されるジョイントリミット |
| `rebotarm_moveit_config/config/ompl_planning.yaml` | OMPL プランナパラメータ |
| `rebotarm_moveit_config/config/moveit_controllers.yaml` | シミュレーション用 MoveIt 軌道実行コントローラ設定 |
| `rebotarm_moveit_config/config/moveit_hardware_controllers.yaml` | 実機用 MoveIt 軌道実行コントローラ設定 |
| `rebotarm_moveit_config/config/ros2_controllers.yaml` | シミュレーション用 ros2_control コントローラ設定 |
| `rebotarm_moveit_config/config/initial_positions.yaml` | シミュレートされたハードウェアの初期ジョイント位置 |
| `rebotarm_moveit_demos/config/draw_square_rs.yaml` | 四角形描画デモのパラメータ |
| `rebotarm_moveit_demos/config/pick_place_rs.yaml` | ピック＆プレースデモのパラメータ |

## FAQ

### 1. 起動時に `socketcan write failed: Network is down` が表示される

これは CAN インターフェースがまだ有効化されていないことを意味します。まずインターフェースを確認します：

```bash
ip -details link show can0
```

CAN を再起動します：

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### 2. `can0` が見つからない

まず CAN アダプタが接続されていることを確認し、インターフェース名を確認します：

```bash
ip -br link
```

PCAN-USB を使用する場合：

```bash
sudo modprobe peak_usb
ip -br link
```

インターフェース名が `can0` でない場合は、起動時に `channel` を置き換えてください：

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can1
```

### 3. RViz にロボットモデルが表示されない

次の点を確認してください：

- ワークスペースが source 済みか：`source install/setup.bash`
- `Fixed Frame` が `base_link` に設定されているか
- `robot_state_publisher` が正しく起動しているか
- URDF メッシュパスが `package://rebotarm_bringup/description/...` になっているか

モデルは表示されているが見づらい場合は、RViz の `Views` パネルでビュータイプを `Move Camera` に切り替え、`Target Frame` を `base_link` に設定し、`Distance` を調整してください。

### 4. MoveIt のプランニングが失敗する

デモが `MoveIt planning failed` と出力する場合は、次の点を確認してください：

- `demo.launch.py` または `hardware.launch.py` が起動されており、`move_group` が正常に動作していることを確認します。
- 現在のジョイント状態が古くなっていないこと、および `/joint_states` または `/rebotarm/joint_states` が正常に publish されていることを確認します。
- 目標点が到達可能な作業空間内にあり、目標姿勢によって手首やグリッパがアーム本体と干渉しないことを確認します。
- `joint_limits.yaml` 内のジョイントリミットおよび速度リミットが、現在のロボットアームと一致していることを確認します。
- まず RViz の MotionPlanning プラグインで手動でプランニングを行い、経路に衝突がないことを確認してからデモを実行します。

### 5. FastDDS SHM ポートの警告が表示される

ターミナルに次のような表示が出る場合：

```text
[RTPS_TRANSPORT_SHM Error] Failed init_port fastrtps_port7002: open_and_lock_file failed
```

これは通常、以前の ROS2 プロセスが異常終了した後に残った FastDDS 共有メモリのロックファイルが原因です。サービスやアクションが正常に応答している場合、この警告は通常制御に影響しません。

これをクリーンアップするには、まず関連する ROS2 プロセスを停止し、次を実行します：

```bash
pkill -f ros2
pkill -f reBotArmController
rm -f /dev/shm/fastrtps_port*
```

一時的に共有メモリトランスポートをバイパスしたい場合は、ROS2 を起動する前に次を設定します：

```bash
export FASTDDS_BUILTIN_TRANSPORTS=UDPv4
```

### 6. Humble を使用する場合は？

Humble ユーザーも同じワークフローに従い、コマンド内の `jazzy` を `humble` に置き換え、Humble 公式ドキュメントに従って対応する依存関係をインストールしてください。ROS2 ディストリビューションを切り替えた後は、再度 `colcon build` を実行します。

### 7. `pinocchio` が見つからない

ノードまたは検証コマンドが次のように報告する場合：

```text
ModuleNotFoundError: No module named 'pinocchio'
```

まず、使用している ROS2 ディストリビューション向けの Pinocchio パッケージがインストールされていることを確認します：

```bash
sudo apt install -y ros-${ROS_DISTRO}-pinocchio
```

次に、現在のターミナルで ROS2 環境が source 済みであることを確認します：

```bash
source /opt/ros/${ROS_DISTRO}/setup.bash
python3 -c "import pinocchio; print(pinocchio.__version__)"
```

それでも見つからない場合は、現在の Python 検索パスに ROS2 の Python パッケージパスが含まれているか確認します：

```bash
python3 -c "import sys; print('\n'.join(sys.path))"
```

Jazzy を source した後は、`/opt/ros/jazzy/lib/python3.12/site-packages` のようなパスが表示されるはずです。Humble を使用する場合は、コマンド内の `jazzy` を `humble` に置き換えてください。

## 連絡先

- 技術サポート: [Submit an Issue](https://github.com/Seeed-Projects/reBotArmController_ROS2/issues)
- プロジェクトリポジトリ: [Github](https://github.com/Seeed-Projects/reBotArmController_ROS2)
- フォーラム: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## 参考文献

- [reBot Arm B601-RS クイックスタート](https://wiki.seeedstudio.com/ja/rebot_b601_rs_getting_started/)
- [ROS2 Humble ドキュメント](https://docs.ros.org/en/humble/)
- [ROS2 Jazzy ドキュメント](https://docs.ros.org/en/jazzy/)
- [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py)
- [MoveIt 2 ドキュメント](https://moveit.picknik.ai/main/index.html)
