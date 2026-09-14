---
description: このチュートリアルでは、reBot Arm B601-RS 向けの ROS2 control ワークスペースのセットアップ方法を説明します。SocketCAN 接続、アーム制御、RViz 可視化、MoveIt 2 連携を含みます。
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
  date: 2026-06-10
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-06-10'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_ros2_integration/
---

import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# reBot Arm B601-RS ROS2 連携ガイド

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

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

このチュートリアルでは、ROS2 ワークスペース `rebotarm_ros2` を通して reBot Arm B601-RS を制御する方法を説明します。このワークスペースは、Pinocchio ベースの逆運動学、軌道計画、重力補償を含む `reBotArm_control_py` Python SDK を、ROS2 のトピック、サービス、アクションとしてラップします。これにより、上位レベルのプランニング、RViz 可視化、重力補償、グリッパ制御、カスタムアプリケーション開発を容易に利用できます。

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
   順運動学 / 逆運動学、軌道計画、重力補償、および RViz 可視化のサポートをすぐに利用できる形で提供します。

3. **MoveIt 2 連携**  
   MoveIt 2 の設定とアプリケーションデモを含み、RViz MotionPlanning プラグインによるシミュレーションプランニングと、ハードウェア制御ノードによる実機実行をサポートします。

## 仕様

このチュートリアルで使用するハードウェアは [Seeed Studio](https://www.seeedstudio.com/) によって提供されています。

| パラメータ | 仕様 |
|---|---|
| ロボットアームモデル | reBot Arm B601-RS |
| 自由度 | 6-DOF + グリッパ |
| 通信方式 | CAN |
| デフォルト CAN チャンネル | `can0` |
| デフォルトアーム制御モード | `mit` |
| 推奨システム | Ubuntu 24.04 + ROS2 Jazzy + Python 3.12 |
| 参照システム | Ubuntu 22.04 + ROS2 Humble + Python 3.10 |

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
| オペレーティングシステム | Ubuntu 24.04、Ubuntu 22.04 は参照用として使用可能 |
| ROS2 | Jazzy、Humble は参照用として使用可能 |
| Python | システム Python。Jazzy では通常 3.12、Humble では通常 3.10 を使用 |

## インストール手順

### ステップ 0. ロボットアームの基本準備を完了する

ROS2 連携を開始する前に、[reBot Arm B601-RS クイックスタート](https://wiki.seeedstudio.com/ja/rebot_b601_rs_getting_started/) を完了してください。組み立て、モータ ID 設定、ゼロ位置初期化などの基本準備を含みます。

### ステップ 1. 使用している Ubuntu システムに対応する ROS2 バージョンをインストールする

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

公式の Seeed-Projects リポジトリを推奨します：

```bash
git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2
```



### ステップ 4. motorbridge をインストールする

公式の PyPI ソースから `motorbridge` をインストールします：

```bash
python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge
```

Ubuntu 22.04 / ROS2 Humble を使用している場合、通常は `--break-system-packages` を削除できます：

```bash
python3 -m pip install --user --index-url https://pypi.org/simple motorbridge
```

### ステップ 5. 低レベル SDK を取得する

```bash
mkdir -p third_party
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git third_party/reBotArm_control_py
```

### ステップ 6. ワークスペースをビルドする

```bash
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
ロボットアームを使用する前に、次の点に注意してください：**ロボットアームコントローラは高い自由度を持ちます。コントローラを有効化したりアームに給電したりする前に、作業空間に人や障害物がないことを必ず確認してください。事故を避けるため、すべての動作コマンドを慎重に確認してください。危険な操作は固く禁じられており、その結果についてはすべて自己責任となります。**
:::

### フルシステムを起動する

まず CAN インターフェースが有効になっていることを確認します：

```bash
ip -details link show can0
```

フルブリングアップでは次が起動します：

- `reBotArmController` 制御ノード
- `robot_state_publisher`
- オプションの RViz

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0
```

長期間 B601-RS のみを使用する場合は、`src/rebotarm_bringup/config/rebotarm_hardware.yaml` 内の `default_model` を `rs` に手動で変更できます。その後は、`model:=rs` を省略し、実際の CAN チャンネルのパラメータだけを指定できます：

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=can0
```

### RViz 可視化を起動する

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=true
```

RViz 上でモデルが小さすぎる場合は、左側の `Views` パネルからビューを調整します：

- `Target Frame` を `base_link` に設定
- ビュータイプを `Move Camera` に変更
- `Distance` を調整（例：`1.0` や `1.5`）
- `Fixed Frame` が `base_link` に設定されていることを確認

### 制御ノードのみを起動する

URDF や RViz が不要な場合：

```bash
ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0
```

ノードを起動するには ros launch を使用します。これは、`rebotarm_bringup/config` からハードウェア設定を渡すためです。

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
| `/rebotarm/joint_states` | `sensor_msgs/msg/JointState` | 6 軸の関節位置、速度、トルク（effort）と、RViz 用の可視グリッパ関節を含みます |
| `/rebotarm/arm_status` | `rebotarm_msgs/msg/ArmStatus` | 制御モード、有効状態、ステートマシン、エラーコード |
| `/rebotarm/joints/<joint>/state` | `rebotarm_msgs/msg/JointMotorState` | 単一関節モータの状態 |
| `/rebotarm/gripper/state` | `rebotarm_msgs/msg/JointMotorState` | グリッパモータの状態 |

使用例：

```bash
ros2 topic echo /rebotarm/joint_states --once
ros2 topic echo /rebotarm/arm_status --once
```

### サービス

| API | 型 | 説明 |
|---|---|---|
| `/rebotarm/enable` | `std_srvs/srv/Trigger` | ロボットアームを有効化 |
| `/rebotarm/disable` | `std_srvs/srv/Trigger` | ロボットアームを無効化 |
| `/rebotarm/safe_home` | `std_srvs/srv/Trigger` | セーフホーム位置に戻す |
| `/rebotarm/set_zero` | `rebotarm_msgs/srv/SetZero` | 全関節または単一関節のゼロ位置を設定 |
| `/rebotarm/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | IK 事前チェックと目標関節解の取得 |
| `/rebotarm/gripper/set` | `rebotarm_msgs/srv/SetGripper` | グリッパモータ位置を rad 単位で設定 |
| `/rebotarm/gripper/open` | `rebotarm_msgs/srv/GripperCommand` | 設定済みの値に従ってグリッパを開く |
| `/rebotarm/gripper/close` | `rebotarm_msgs/srv/GripperCommand` | 設定済みの値に従ってグリッパを閉じる |
| `/rebotarm/gravity_compensation/start` | `std_srvs/srv/Trigger` | 重力補償を開始 |
| `/rebotarm/gravity_compensation/stop` | `std_srvs/srv/Trigger` | 重力補償を停止 |

### アクション

| API | 型 | 説明 |
|---|---|---|
| `/rebotarm/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | エンドエフェクタ姿勢のモーション |
| `/rebotarm/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | 標準的なジョイント軌道互換エントリポイント |
| `/rebotarm/gripper/command` | `control_msgs/action/GripperCommand` | 標準グリッパアクション |

## 基本制御の例

### 1. ロボットアームを有効化する

```bash
ros2 service call /rebotarm/enable std_srvs/srv/Trigger
```

### 2. エンドエフェクタ姿勢へ移動する

```bash
ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {x: 0.0, y: 0.0, z: 0.0, w: 1.0}}, duration: 2.0}"
```

`move_to_pose` アクションは SDK のエンドポーズコントローラによって実行されます。B601-RS アームの制御モードは `rebotarm_hardware.yaml` でデフォルトで `mit` に設定されています。

### 3. 関節ターゲットを送信する

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

すべての例は、`reBotArmController` がすでに実行中であることを前提としています：

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0
```

### 関節モーションの例

6 つすべての関節を同時に制御します。単位は rad です：

```bash
ros2 run rebotarmcontroller MoveTo -- \
  0.20 -0.20 -0.20 -0.20 0.10 -0.10 \
  --duration 8.0
```

1 つの関節だけを制御します：

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

このスクリプトは最初に `/rebotarm/enable` を呼び出し、その後に重力補償を開始します。`Ctrl+C` を押すと、スクリプトは次のサービスをこの順序で呼び出します：

1. `/rebotarm/gravity_compensation/stop`
2. `/rebotarm/safe_home`
3. `/rebotarm/disable`

これにより、まず重力補償を停止し、その後アームをセーフホーム位置に戻して無効化します。

サービスを手動で呼び出すこともできます：

```bash
ros2 service call /rebotarm/enable std_srvs/srv/Trigger
ros2 service call /rebotarm/gravity_compensation/start std_srvs/srv/Trigger
ros2 service call /rebotarm/gravity_compensation/stop std_srvs/srv/Trigger
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

### インタラクティブグリッパの例

```bash
ros2 run rebotarmcontroller GripperControl
```

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
| `rebotarm_hardware.yaml` | B601-RS 向けの ROS2 上位レイヤーハードウェア選択と SDK パラメータ上書き |
| `driver_params.yaml` | ROS パラメータの例 |

`rebotarm_hardware.yaml` の先頭にある `default_model` は、デフォルトで `dm` になっている場合があります。B601-RS をデフォルトモデルにしたい場合は、次のように変更します：

```yaml
default_model: rs
```

この変更後、`model:=...` が明示的に渡されていない場合は、自動的に B601-RS が使用されます。

一般的な launch パラメータ：

| パラメータ | デフォルト | 説明 |
|---|---|---|
| `hardware_config` | bringup に含まれる組み込みの `rebotarm_hardware.yaml` | ROS2 上位レイヤーハードウェア設定パス |
| `model` | `rs` | このチュートリアルでは B601-RS 設定を選択するために `rs` を明示的に渡します |
| `channel` | `can0` | SocketCAN チャンネル |
| `joint_state_rate` | `100.0` | `/rebotarm/joint_states` の配信レート |
| `cmd_arbitration` | `reject` | 軌道実行中の低レベルアーム関節コマンドの仲裁方式。`reject` または `preempt` |
| `arm_namespace` | `rebotarm` | ROS 名前空間プレフィックス |
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
| 関節 2/3 の重力補償出力ゲイン | `1.5` |

## 低レベルコマンドトピック

ROS2 ワークスペースには、低レベルモータデバッグ用トピックも用意されています：

| API | 型 | 説明 |
|---|---|---|
| `/rebotarm/joints/<joint>/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | 単一関節 MIT 生コマンド |
| `/rebotarm/joints/<joint>/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | 単一関節位置・速度生コマンド |
| `/rebotarm/gripper/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | グリッパ MIT 生コマンド |
| `/rebotarm/gripper/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | グリッパ位置・速度生コマンド |

:::caution
低レベルコマンドトピックはデバッグおよび実験用途を想定しています。IK、軌道計画、URDF 妥当性チェックは行いません。アプリケーションレベルのモーションには、`/move_to_pose`、`/follow_joint_trajectory`、`/gripper/set` などのサービスやアクションを優先して使用してください。
:::

## MoveIt 2

MoveIt 2 はロボットアーム向けのモーションプランニングフレームワークです。ここでは主に逆運動学、衝突チェック、軌道計画、および軌道実行を担当します。デモパッケージはアプリケーションフローを低レベルドライバから分離しています。詳細については公式の [MoveIt 2 Documentation](https://moveit.picknik.ai/main/index.html) を参照してください。

MoveIt 関連の内容は 2 つのパッケージに分かれています：

| パッケージ | 目的 |
|---|---|
| `rebotarm_moveit_config` | ロボットモデル、SRDF、運動学、関節制限、コントローラおよび RViz 設定 |
| `rebotarm_moveit_demos` | MoveIt 2 ベースのアプリケーションデモ |

MoveIt 環境は、計画と実行のために `ros2_control` と `move_group` を通じてシミュレートされたハードウェアを使用します。これは、RViz 内でモデル、IK、軌道計画、およびデモフローを検証するのに適しています。

このリポジトリは実機ハードウェアもサポートします。実機を接続する前に、アームのゼロ設定、関節方向、関節制限、速度制限、およびグリッパの開閉範囲が正しいことを確認するか、リポジトリのデフォルト設定のままにしてください。

### MoveIt 環境セットアップ

まず ROS2 環境が利用可能であることを確認してください。次のコマンドは、現在 source されている `ROS_DISTRO` 向けの依存関係をインストールします：

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
cd your/path/to/rebotarm_ros2
colcon build --symlink-install
source install/setup.bash
```

MoveIt パッケージとデモのエントリポイントを確認します：

```bash
ros2 pkg list | grep rebotarm_moveit
ros2 pkg executables rebotarm_moveit_demos
```

期待されるエントリには少なくとも次が含まれます：

```text
rebotarm_moveit_demos draw_square
rebotarm_moveit_demos pick_place
```

### MoveIt を使用する

MoveIt のプランニングは、シミュレーションと実機の両方のシーンで、RViz GUI またはノード呼び出しを通じて使用できます。

#### シミュレーションで MoveIt を使用する

MoveIt は RViz シミュレーションのために ros2_control 仮想ハードウェアインターフェースを使用します：

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs
```

デフォルトでは次が起動します：

- `move_group`
- `robot_state_publisher`
- `ros2_control_node`
- `joint_state_broadcaster`
- `rebotarm_controller`
- `gripper_controller`
- MoveIt MotionPlanning プラグイン付き RViz

RViz は自動的に開き、B601-RS モデルを読み込みます。左側の GUI パネルからモーションを制御できます。

RViz なしで MoveIt 環境を実行するには：

```bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs use_rviz:=false
```

#### reBotArm ハードウェアで MoveIt を使用する

実機シーンでは、まずハードウェア制御ノードを起動し、その後実機用の MoveIt 環境を起動します：

```bash
ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0
```

別のターミナルで：

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py model:=rs
```

:::caution
実機で任意のデモを実行する前に、ロボットアームの作業空間に人や障害物がないことを確認し、まず RViz で計画経路を検証し、いつでもコントローラを停止できるように準備しておいてください。
:::

### Draw-square デモを実行する

まず MoveIt 環境を起動し、その後別のターミナルで次を実行します：

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=rs
```

`draw_square` は `gripper_tcp` を同一平面上の長方形の 4 つの頂点を通るように動かします。デフォルトパラメータは次にあります：

```text
src/rebotarm_moveit_demos/config/draw_square_rs.yaml
```

一般的なパラメータ：

| パラメータ | 説明 |
|---|---|
| `start_point` | デモ開始前の関節リセット位置 |
| `rectangle_center` | `base_link` における長方形の中心 |
| `rectangle_width` / `rectangle_height` | メートル単位の長方形の幅と高さ |
| `tcp_rpy` | TCP の姿勢。デフォルトは下向きのグリッパ |
| `tcp_yaw_offsets` | 大きな joint6 の巻き付きを避けるために使用される代替 IK yaw 値 |

`draw_square` は、MoveIt の IK、軌道計画、および実行が正しく動作しているかを検証するのに便利です。計画が失敗する場合は、まず開始関節状態、長方形の中心、TCP 姿勢、および関節制限が妥当かどうかを確認してください。

### ピック＆プレースデモを実行する

最初に MoveIt 環境を起動し、別のターミナルで次を実行します：

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos pick_place.launch.py model:=rs
```

デフォルトパラメータは次の場所にあります：

```text
src/rebotarm_moveit_demos/config/pick_place_rs.yaml
```

主なパラメータ：

| Parameter | 説明 |
|---|---|
| `ready_point` | ピック／プレースの前後で使用される待機関節位置 |
| `pick_position` | `base_link` における物体の底面中心位置 |
| `pick_tcp_rpy` / `place_tcp_rpy` | ピックおよびプレース時の TCP 姿勢 |
| `object_dimensions` | 計画シーン内の物体寸法（メートル単位） |
| `max_gripper_width` | グリッパの合計最大開口幅。デフォルトは `0.09m` |
| `open_gripper_position` / `grasp_gripper_position` / `closed_gripper_position` | シミュレーション用片側グリッパ関節位置 |
| `hardware_open_gripper_position` / `hardware_closed_gripper_position` | 実機グリッパモータの開／閉位置 |

`pick_place` は、計画シーンにターゲット物体を追加し、グリッパを開き、ピック姿勢へ移動し、グリッパを閉じ、プレース姿勢へ移動して物体を解放します。シミュレーション用グリッパ関節位置と実機グリッパモータ位置は別のパラメータです。実機で実行する前に、グリッパの開閉方向とリミットを必ず確認してください。

### MoveIt 設定ファイル

| File | 説明 |
|---|---|
| `rebotarm_moveit_config/config/rebotarm_rs.urdf.xacro` | MoveIt が使用する B601-RS ロボットモデル。グリッパと `gripper_tcp` を含む |
| `rebotarm_moveit_config/config/rebotarm_rs.ros2_control.xacro` | シミュレーション用の ros2_control モックハードウェア記述 |
| `rebotarm_moveit_config/config/rebotarm_rs.srdf` | MoveIt のグループ、エンドエフェクタ、デフォルト状態、およびセマンティック設定 |
| `rebotarm_moveit_config/config/kinematics.yaml` | IK ソルバ設定 |
| `rebotarm_moveit_config/config/joint_limits.yaml` | MoveIt の計画で使用される関節制限 |
| `rebotarm_moveit_config/config/ompl_planning.yaml` | OMPL プランナパラメータ |
| `rebotarm_moveit_config/config/moveit_controllers.yaml` | シミュレーション用 MoveIt 軌道実行コントローラ設定 |
| `rebotarm_moveit_config/config/moveit_hardware_controllers.yaml` | 実機用 MoveIt 軌道実行コントローラ設定 |
| `rebotarm_moveit_config/config/ros2_controllers.yaml` | シミュレーション用 ros2_control コントローラ設定 |
| `rebotarm_moveit_config/config/initial_positions.yaml` | シミュレーションハードウェアの初期関節位置 |
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

PCAN-USB を使用している場合：

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

### 4. MoveIt の計画が失敗する

デモが `MoveIt planning failed` と出力する場合は、次の点を確認してください：

- `demo.launch.py` または `hardware.launch.py` が起動されており、`move_group` が正しく動作していることを確認します。
- 現在の関節状態が古くなっておらず、`/joint_states` または `/rebotarm/joint_states` が正常に publish されていることを確認します。
- 目標点が到達可能な作業空間内にあり、目標姿勢によって手首やグリッパがアーム本体と衝突しないことを確認します。
- `joint_limits.yaml` 内の関節制限および速度制限が、現在のロボットアームと一致していることを確認します。
- まず RViz の MotionPlanning プラグインで手動で計画します。経路に衝突がないことを確認してからデモを実行してください。

### 5. FastDDS SHM ポートの警告が表示される

ターミナルに次のような表示が出る場合：

```text
[RTPS_TRANSPORT_SHM Error] Failed init_port fastrtps_port7002: open_and_lock_file failed
```

これは通常、以前の ROS2 プロセスが異常終了した後に残った FastDDS 共有メモリロックファイルが原因です。サービスやアクションが引き続き正常に応答している場合、この警告は通常制御に影響しません。

クリーンアップするには、まず関連する ROS2 プロセスを停止し、次を実行します：

```bash
pkill -f ros2
pkill -f reBotArmController
rm -f /dev/shm/fastrtps_port*
```

一時的に共有メモリトランスポートをバイパスしたい場合は、ROS2 を起動する前に次を設定します：

```bash
export FASTDDS_BUILTIN_TRANSPORTS=UDPv4
```

### 6. Humble を使う場合は？

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

Jazzy を source した後は、`/opt/ros/jazzy/lib/python3.12/site-packages` のようなパスが表示されるはずです。Humble を使用している場合は、コマンド内の `jazzy` を `humble` に置き換えてください。

## お問い合わせ

- 技術サポート：[Submit an Issue](https://github.com/Seeed-Projects/reBotArmController_ROS2/issues)
- プロジェクトリポジトリ：[Github](https://github.com/Seeed-Projects/reBotArmController_ROS2)
- フォーラム：[Seeed Studio Forum](https://forum.seeedstudio.com/)

## 参考文献

- [reBot Arm B601-RS クイックスタート](https://wiki.seeedstudio.com/ja/rebot_b601_rs_getting_started/)
- [ROS2 Humble ドキュメント](https://docs.ros.org/en/humble/)
- [ROS2 Jazzy ドキュメント](https://docs.ros.org/en/jazzy/)
- [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py)
- [MoveIt 2 ドキュメント](https://moveit.picknik.ai/main/index.html)
