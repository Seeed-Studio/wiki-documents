---
description: このチュートリアルでは、reBot Arm B601-DM 向けに ROS2 control ワークスペースをセットアップする方法を説明します。アーム制御、RViz 可視化、MoveIt2 連携を含みます。
title: reBot Arm B601-DM ROS2 連携
keywords:
  - reBot Arm
  - B601-DM
  - ROS2
  - Humble
  - Jazzy
  - RViz
  - Robot Arm
  - Robotics
slug: /rebot_arm_b601_dm_ros2_integration
sku: 100065783, 100095532
last_update:
  date: 2026-05-29
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-04-29'
updatedAt: '2026-05-29'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_ros2_integration/
---

# reBot Arm B601-DM ROS2 連携ガイド

<p align="center">
  <img src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

<br />

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/ROS2-Humble | Jazzy-blue.svg" alt="ROS2 Humble | Jazzy" />
    <img src="https://img.shields.io/badge/Python-3.10%2B-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Version-v0.2.2-brightgreen.svg" alt="Version v0.2.2" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Platform" />
</p>

<p align="center">
  <strong>ROS2 Control · RViz 可視化 · MoveIt2 対応</strong>
</p>

このチュートリアルでは、reBot Arm B601-DM 向けの ROS2 control ワークスペース `rebotarm_ros2` の実行方法を説明します。このワークスペースは、低レベルの `reBotArm_control_py` Python SDK を ROS2 のトピック、サービス、アクションにラップし、上位レベルのプランニング、ビジュアルグラスピング、RViz 可視化、カスタムアプリケーション開発との統合を容易にします。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/v2MlI3zMi1k?autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::note
このチュートリアルでは、`Ubuntu 24.04 + ROS2 Jazzy + Python 3.12` を主な参照環境として使用します。ROS2 Humble / Ubuntu 22.04 でも、対応する ROS2 ディストリビューションを用いれば同じワークフローに従うことができます。
:::

## プロジェクトの特長

1. **標準的な ROS2 インターフェース**  
   `/joint_states`、`FollowJointTrajectory`、`GripperCommand`、`MoveToPose` などの一般的な ROS2 インターフェースを提供し、MoveIt2、ビジュアルグラスピングパイプライン、タスクレベルシステムとの統合を容易にします。

2. **すぐに使える運動学・軌道・重力補償ノード**  
   順運動学 / 逆運動学、軌道実行、重力補償、RViz 可視化のサポートをすぐに使える形で提供します。

3. **MoveIt 2 連携**  
   完全な MoveIt 2 設定とアプリケーションデモを含み、RViz MotionPlanning プラグインによるシミュレーションプランニングと実機実行をサポートします。

## 仕様

このチュートリアルで使用するハードウェアは [Seeed Studio](https://www.seeedstudio.com/) によって提供されています。

<table>
  <thead>
    <tr>
      <th>パラメータ</th>
      <th>仕様</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ロボットアームモデル</td>
      <td>reBot Arm B601-DM</td>
    </tr>
    <tr>
      <td>自由度</td>
      <td>6-DOF + グリッパ</td>
    </tr>
    <tr>
      <td>モーターバージョン</td>
      <td>DAMIAO モーターバージョン</td>
    </tr>
    <tr>
      <td>通信方式</td>
      <td>USB2CAN シリアルブリッジ経由の CAN バス</td>
    </tr>
    <tr>
      <td>デフォルトシリアルポート</td>
      <td><code>/dev/ttyACM0</code></td>
    </tr>
    <tr>
      <td>推奨システム</td>
      <td>Ubuntu 24.04 + ROS2 Jazzy + Python 3.12</td>
    </tr>
    <tr>
      <td>参考システム</td>
      <td>Ubuntu 22.04 + ROS2 Humble + Python 3.10</td>
    </tr>
  </tbody>
</table>

## 部品表 (BOM)

| コンポーネント | 数量 | 同梱 |
|--|--|--|
| reBot Arm B601-DM ロボットアーム | 1 | ✅ |
| グリッパ | 1 | ✅ |
| USB2CAN シリアルブリッジ | 1 | ✅ |
| 電源アダプタ (24V) | 1 | ✅ |
| USB-C / 通信用ケーブル | 1 | ✅ |
| Ubuntu ホスト PC | 1 | 自前で用意 |

## 配線

1. USB2CAN シリアルブリッジをロボットアームの CAN バスに接続します。
2. 24V 電源を接続し、USB2CAN アダプタをホスト PC に接続します。
3. ホストがシリアルデバイスを認識していることを確認します：

```bash
ls /dev/ttyACM*
```

シリアルポート権限を一時的に付与する必要がある場合：

```bash
sudo chmod 666 /dev/ttyACM0
```

代わりに、現在のユーザーを `dialout` グループに追加することを推奨します。変更を有効にするにはログアウトして再ログインしてください：

```bash
sudo usermod -a -G dialout $USER
```

## 動作環境要件

| 項目 | 推奨要件 |
|------|------|
| オペレーティングシステム | Ubuntu 24.04、Ubuntu 22.04 は参考として使用可能 |
| ROS2 | Jazzy、Humble は参考として使用可能 |
| Python | システム Python。Jazzy では通常 3.12、Humble では通常 3.10 を使用 |

## インストール手順

### ステップ 0. ロボットアームの基本セットアップを完了する

ROS2 連携を開始する前に、[reBot Arm B601-DM Getting Started Guide](https://wiki.seeedstudio.com/ja/rebot_b601_dm_getting_started/) を完了してください。組み立て、モーター ID 設定、ゼロ位置初期化、基本的な接続確認を含みます。

### ステップ 1. 使用している Ubuntu システムに対応する ROS2 バージョンをインストールする

公式 ROS2 ドキュメントを参照してください：

- [ROS2 Jazzy Ubuntu インストール](https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html)
- [ROS2 Humble Ubuntu インストール](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html)

### ステップ 2. ビルドツールと ROS 依存パッケージをインストールする

colcon、pip、Git、およびこのワークスペースに必要な ROS パッケージをインストールします：

```bash
sudo apt update
sudo apt install -y python3-colcon-common-extensions python3-pip git
sudo apt install -y \
  ros-jazzy-control-msgs \
  ros-jazzy-trajectory-msgs \
  ros-jazzy-tf-transformations \
  ros-jazzy-robot-state-publisher \
  ros-jazzy-rviz2 \
  ros-jazzy-pinocchio
```

インストールを確認します：

```bash
source /opt/ros/jazzy/setup.bash
python3 -c "import pinocchio; print('pinocchio', pinocchio.__version__)"
```

ROS2 Humble を使用する場合は、`ros-jazzy-*` パッケージ名を `ros-humble-*` に置き換え、`/opt/ros/humble/setup.bash` を source してください。
source `/opt/ros/humble/setup.bash`.

### ステップ 3. コードリポジトリをクローンする

デフォルトでは Seeed-Projects の公式リポジトリを使用します：

```bash
git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2
```

現在の開発用リポジトリを使用することもできます：

```bash
git clone https://github.com/EclipseaHime017/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2
```

### ステップ 4. motorbridge をインストールする

公式 PyPI ソースから `motorbridge` をインストールします：

```bash
python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge
```

### ステップ 5. 低レベル SDK を取得する

```bash
mkdir -p third_party
git clone https://github.com/vectorBH6/reBotArm_control_py.git third_party/reBotArm_control_py
```

### ステップ 6. ワークスペースをビルドする

```bash
source /opt/ros/jazzy/setup.bash
colcon build --symlink-install
source install/setup.bash
```

実行可能エントリを確認します：

```bash
ros2 pkg executables rebotarmcontroller
```

想定されるエントリには次のものが含まれます：

```text
rebotarmcontroller reBotArmController
rebotarmcontroller GravityCompensation
rebotarmcontroller GripperControl
rebotarmcontroller MoveTo
rebotarmcontroller MoveToPose
```

## クイックスタート

:::caution
ロボットを使用する前に、次の点に注意してください：**アームコントローラは高い
自由度を持ちます。コントローラを有効にする前やアームに給電する前に、
作業空間に人や障害物がないことを必ず確認してください。事故を避けるため、
すべての動作コマンドを慎重に確認してください。危険な操作は固く
禁止されており、その結果については自己責任となります。**
:::

### フルシステムを起動する

フル bringup では次のものが起動します：

- `reBotArmController` 制御ノード
- `robot_state_publisher`
- オプションの RViz

```bash
cd ~/seeed/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0
```

シリアルポートが `/dev/ttyACM0` でない場合は、実際のデバイス名に置き換えてください：

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM1
```

### RViz 可視化を起動する

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0 use_rviz:=true
```

RViz でモデルが小さすぎる場合は、左側の `Views` パネルからビューを調整します：

- `Target Frame` を `base_link` に設定
- `Distance` を `1.0` や `1.5` などに調整
- マウスホイールでズーム
- `Fixed Frame` が `base_link` に設定されていることを確認

### 制御ノードのみを起動する

URDF や RViz が不要な場合：

```bash
ros2 launch rebotarm_bringup driver_only.launch.py channel:=/dev/ttyACM0
```

ノードを直接実行することもできます：

```bash
ros2 run rebotarmcontroller reBotArmController
```

## ROS2 ネームスペース

デフォルトのネームスペースは次のとおりです：

```text
/rebotarm
```

したがって、すべてのトピック、サービス、アクションは `/rebotarm` をプレフィックスに持ちます。例えば：

```text
/rebotarm/joint_states
/rebotarm/enable
/rebotarm/move_to_pose
```

複数のロボットアームが必要な場合や、他の ROS2 システムと並行して実行したい場合は、起動時にネームスペースを変更できます：

```bash
ros2 launch rebotarm_bringup bringup.launch.py arm_namespace:=left_arm
```

この場合、`/rebotarm/joint_states` は `/left_arm/joint_states` になります。

## 共通 API

### ステータストピック

| API | 型 | 説明 |
|---|---|---|
| `/rebotarm/joint_states` | `sensor_msgs/msg/JointState` | 6 軸の関節位置、速度、トルク |
| `/rebotarm/arm_status` | `rebotarm_msgs/msg/ArmStatus` | 制御モード、有効状態、ステートマシン、エラーコード |
| `/rebotarm/joints/<joint>/state` | `rebotarm_msgs/msg/JointMotorState` | 単一関節モーター状態 |
| `/rebotarm/gripper/state` | `rebotarm_msgs/msg/JointMotorState` | グリッパモーター状態 |

例：

```bash
ros2 topic echo /rebotarm/joint_states --once
ros2 topic echo /rebotarm/arm_status --once
```

### サービス

| API | 型 | 説明 |
|---|---|---|
| `/rebotarm/enable` | `std_srvs/srv/Trigger` | ロボットアームを有効化 |
| `/rebotarm/disable` | `std_srvs/srv/Trigger` | ロボットアームを無効化 |
| `/rebotarm/safe_home` | `std_srvs/srv/Trigger` | セーフホーム位置に戻る |
| `/rebotarm/set_mode` | `rebotarm_msgs/srv/SetMode` | `mit`、`pos_vel`、`vel` の間でモードを切り替え |
| `/rebotarm/set_zero` | `rebotarm_msgs/srv/SetZero` | 全関節または単一関節のゼロ位置を設定 |
| `/rebotarm/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | IK 事前チェックと目標関節解の取得 |
| `/rebotarm/gripper/set` | `rebotarm_msgs/srv/SetGripper` | グリッパモーター位置を rad 単位で設定 |
| `/rebotarm/gravity_compensation/start` | `std_srvs/srv/Trigger` | 重力補償を開始 |
| `/rebotarm/gravity_compensation/stop` | `std_srvs/srv/Trigger` | 重力補償を停止 |

### アクション

| API | 型 | 説明 |
|---|---|---|
| `/rebotarm/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | エンドエフェクタ姿勢の移動 |
| `/rebotarm/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | 標準ジョイント軌道互換のエントリポイント |
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

### 3. ジョイント目標を送信する

```bash
ros2 action send_goal /rebotarm/follow_joint_trajectory \
  control_msgs/action/FollowJointTrajectory \
  "{trajectory: {joint_names: ['joint1','joint2','joint3','joint4','joint5','joint6'],
    points: [{positions: [0.1,0,0,0,0,0], time_from_start: {sec: 5}}]}}"
```

### 4. セーフホームと無効化

```bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

## デモ例

すべての例は、`reBotArmController` がすでに実行中であることを前提としています：

```bash
cd ~/seeed/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0
```

### ジョイント動作の例

6 つすべてのジョイントを同時に制御します。単位は rad です：

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

### 対話的グリッパの例

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
| `arm.yaml` | 6 つのアームジョイントのモーター、フィードバック ID、および制御パラメータ |
| `gripper.yaml` | グリッパモーター ID、フィードバック ID、ベンダー、および制御パラメータ |
| `driver_params.yaml` | ROS パラメータの例 |

一般的な launch パラメータ：

| パラメータ | デフォルト | 説明 |
|---|---|---|
| `arm_config` | bringup に含まれる組み込みの `arm.yaml` | アーム設定パス |
| `gripper_config` | bringup に含まれる組み込みの `gripper.yaml` | グリッパ設定パス |
| `channel` | 空文字列 | デフォルトで YAML を使用。空でない場合はシリアルポートを上書き |
| `joint_state_rate` | `100.0` | `/rebotarm/joint_states` の配信レート |
| `cmd_arbitration` | `reject` | アーム軌道実行中の低レベルコマンドの仲裁方法。`reject` または `preempt`。グリッパの低レベルコマンドはアーム軌道をプリエンプトしません |
| `arm_namespace` | `rebotarm` | ROS 名前空間プレフィックス |
| `frame_id` | `base_link` | ロボットアームのベースフレーム |
| `ee_frame_id` | `end_link` | エンドエフェクタフレーム |
| `use_rviz` | `false` | RViz を起動するかどうか |

## 低レベルコマンドトピック

ROS2 ワークスペースには、低レベルモータデバッグ用のトピックも用意されています：

| API | 型 | 説明 |
|---|---|---|
| `/rebotarm/joints/<joint>/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | 単一ジョイントの MIT 生コマンド |
| `/rebotarm/joints/<joint>/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | 単一ジョイントの位置・速度生コマンド |
| `/rebotarm/joints/<joint>/cmd/vel` | `rebotarm_msgs/msg/JointVelCmd` | 単一ジョイントの速度生コマンド |
| `/rebotarm/gripper/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | グリッパ MIT 生コマンド |
| `/rebotarm/gripper/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | グリッパ位置・速度生コマンド |
| `/rebotarm/gripper/cmd/vel` | `rebotarm_msgs/msg/JointVelCmd` | グリッパ速度生コマンド |

:::caution
低レベルコマンドトピックはデバッグおよび実験用途を想定しています。IK、軌道計画、URDF 制限チェックは行いません。アプリケーションレベルの動作には、`/move_to_pose`、`/follow_joint_trajectory`、`/gripper/set` などのサービスやアクションを優先して使用してください。
:::

## MoveIt 2

MoveIt 2 は、ここで使用されているモーションプランニングフレームワークであり、逆運動学、
衝突チェック、軌道計画および実行を行います。デモはそれぞれ独立したパッケージに分けられており、
アプリケーションフローがベースドライバから分離されるようになっています。詳細については、公式の [MoveIt 2 Documentation](https://moveit.picknik.ai/main/index.html) を参照してください。

MoveIt 関連の内容は 2 つのパッケージに分かれています：

| パッケージ | 目的 |
|---|---|
| `rebotarm_moveit_config` | ロボットモデル、SRDF、運動学、ジョイント制限、コントローラおよび RViz 設定 |
| `rebotarm_moveit_demos` | MoveIt 2 ベースのアプリケーションデモ |

MoveIt 環境は、計画と実行のために `ros2_control` を介したシミュレートされたハードウェアと
`move_group` を使用します。これは、RViz 内でモデル、IK、軌道計画、およびデモフローを検証することを目的としています。

このリポジトリは実機ハードウェアもサポートしています。実機ハードウェアを接続する前に、
アームのゼロ設定、ジョイント方向、ジョイント制限、速度
制限およびグリッパ範囲がすべて正しいことを確認するか、リポジトリのデフォルト
設定のままにしてください。

### MoveIt 環境のセットアップ

まず ROS2 環境が利用可能であることを確認してください。現在 source されている ROS ディストリビューション向けに、`ROS_DISTRO` を通じてパッケージをインストールできます：

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
```bash
sudo apt update
sudo apt install -y \
  ros-${ROS_DISTRO}-moveit \
  ros-${ROS_DISTRO}-moveit-configs-utils \
  ros-${ROS_DISTRO}-ros2-control \

  ros-${ROS_DISTRO}-xacro
```

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
```bash
cd your/path/to/rebotarm_ros2

source install/setup.bash

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
```bash

ros2 pkg executables rebotarm_moveit_demos

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
```text

rebotarm_moveit_demos pick_place

MoveIt のプランニングは、RViz GUI または ROS ノードを通じて、シミュレーションと実環境の両方で使用できます。

#### シミュレーションで MoveIt を使用する

MoveIt は RViz シミュレーションのために ros2_control 仮想ハードウェアインターフェースを使用します：

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
```bash

source install/setup.bash

```
- `robot_state_publisher`
- `ros2_control_node`
- `joint_state_broadcaster`
- `rebotarm_controller`
- `gripper_controller`
- MoveIt MotionPlanning プラグイン付きの RViz

RViz は自動的に開き、ロボット URDF モデルを読み込みます。GUI 左側のパネルから
動作を制御できます。

RViz なしで MoveIt 環境を実行するには：

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__

```bash

```
コントローラを起動し、その後ハードウェア用 MoveIt 環境を起動します：

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__

```bash

```
__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
```bash

source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py
```

### draw-square デモを実行する

まず MoveIt 環境を起動し、別のターミナルで次を実行します：

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
```bash

source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__

```text

```
|---|---|
| `start_point` | デモ開始前のジョイントリセット位置 |
| `rectangle_center` | `base_link` における長方形の中心 |
| `rectangle_width` / `rectangle_height` | 長方形の寸法（メートル単位） |
| `tcp_rpy` | TCP の姿勢。デフォルトは下向きのグリッパ |
| `tcp_yaw_offsets` | 大きな joint6 の巻き付きを避けるために使用される代替 IK yaw 値 |

### pick-place デモを実行する

まず MoveIt 環境を起動し、別のターミナルで次を実行します：

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
```bash

source install/setup.bash

```
__CODE_LINE_PLH__
__CODE_LINE_PLH__

```text

```
|---|---|
| `ready_point` | pick/place の前後で使用される準備ジョイント位置 |
| `pick_position` | `base_link` における物体の底面中心位置 |
| `pick_tcp_rpy` / `place_tcp_rpy` | pick および place 用の TCP 姿勢 |
| `object_dimensions` | プランニングシーン内の物体寸法（メートル単位） |
| `max_gripper_width` | グリッパの最大開口幅。デフォルトは `0.09m` |
| `open_gripper_position` / `closed_gripper_position` | シミュレートされた片側グリッパジョイントの開閉位置 |
| `hardware_open_gripper_position` / `hardware_closed_gripper_position` | ハードウェアグリッパモータの開閉位置 |
| `grasp_gripper_to_object_width` | 物体幅から把持位置を計算 |



| `grasp_gripper_to_object_width` | Compute the grasp position from object width |

### MoveIt 設定ファイル

| ファイル | 説明 |
|---|---|
| `rebotarm_moveit_config/config/rebotarm.urdf.xacro` | MoveIt が使用するロボットモデル |
| `rebotarm_moveit_config/config/rebotarm.srdf` | MoveIt のグループ、エンドエフェクタ、デフォルト状態 |
| `rebotarm_moveit_config/config/kinematics.yaml` | IK ソルバーの設定 |
| `rebotarm_moveit_config/config/joint_limits.yaml` | MoveIt プランニングで使用される関節リミット |
| `rebotarm_moveit_config/config/moveit_controllers.yaml` | MoveIt 軌道実行コントローラ設定 |
| `rebotarm_moveit_config/config/ros2_controllers.yaml` | ros2_control コントローラ設定 |
| `rebotarm_moveit_config/config/initial_positions.yaml` | シミュレートされたハードウェア用の初期関節位置 |
| `rebotarm_moveit_demos/config/draw_square.yaml` | 四角形描画デモのパラメータ |
| `rebotarm_moveit_demos/config/pick_place.yaml` | ピック＆プレースデモのパラメータ |

## FAQ

### 1. 起動時に `open serial port /dev/ttyACM0 failed` が表示される

これは、デフォルトのシリアルポートが存在しないか、デバイス名が変更されたことを意味します。まず実際のシリアルデバイスを確認します：

```bash
ls /dev/ttyACM*
```

その後、`channel` で指定します：

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM1
```

### 2. 起動時に `Device or resource busy` が表示される

これは、シリアルポートがすでに別のプロセスに占有されていることを意味します。よくある原因としては、以前に起動した ROS2 ノード、SDK のサンプル、終了していないデバッグスクリプトなどがあります。まずプロセスを確認します：

```bash
ps aux | grep -E "reBotArmController|ros2|python"
```

シリアルポートを占有しているプロセスを停止してから再起動してください。アームとグリッパは同じ低レベル Controller を共有する必要があります。アームとグリッパで同じシリアルポートを別々に開かないでください。

### 3. Permission denied

シリアルデバイスは存在するが、パーミッションが拒否される場合：

```bash
sudo usermod -a -G dialout $USER
```

ログアウトして再ログインすると、変更が有効になります。一時的なデバッグであれば、次のコマンドを実行することもできます：

```bash
sudo chmod 666 /dev/ttyACM0
```

### 4. RViz にロボットモデルが表示されない

次の点を確認してください：

- ワークスペースが source 済みか：`source install/setup.bash`
- `Fixed Frame` が `base_link` に設定されているか
- `robot_state_publisher` が正しく起動しているか
- URDF のメッシュパスが `package://rebotarm_bringup/description/meshes/...` になっているか

### 5. FastDDS SHM ポートの警告が表示される

ターミナルに次のような表示が出る場合：

```text
[RTPS_TRANSPORT_SHM Error] Failed init_port fastrtps_port7002: open_and_lock_file failed
```

これは通常、以前の ROS2 プロセスが異常終了した後に残った FastDDS の共有メモリロックファイルが原因です。サービスやアクションが正常に応答している場合、この警告は通常、制御に影響しません。

クリーンアップするには、まず関連する ROS2 プロセスを停止し、次のコマンドを実行します：

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

Humble ユーザーも同じワークフローに従い、コマンド内の `jazzy` を `humble` に置き換え、Humble の公式ドキュメントに従って対応する依存関係をインストールしてください。ROS2 ディストリビューションを切り替えた後は、再度 `colcon build` を実行します。

### 7. `pinocchio` が見つからない

ノードまたは検証コマンドが次のように報告する場合：

```text
ModuleNotFoundError: No module named 'pinocchio'
```

まず、使用している ROS2 ディストリビューション向けの Pinocchio パッケージがインストールされていることを確認します：

```bash
sudo apt install -y ros-jazzy-pinocchio
```

次に、現在のターミナルで ROS2 環境が source 済みであることを確認します：

```bash
source /opt/ros/jazzy/setup.bash
python3 -c "import pinocchio; print(pinocchio.__version__)"
```

それでも見つからない場合は、現在の Python 検索パスに ROS2 の Python パッケージパスが含まれているか確認します：

```bash
python3 -c "import sys; print('\n'.join(sys.path))"
```

Jazzy を source した後は、次のようなパスが表示されるはずです
`/opt/ros/jazzy/lib/python3.12/site-packages`。Humble を使用する場合は、コマンド内の `jazzy` を
`humble` に置き換えてください。

## 連絡先

- 技術サポート: [Submit an Issue](https://github.com/EclipseaHime017/reBotArmController_ROS2/issues)
- プロジェクトリポジトリ: [Github](https://github.com/EclipseaHime017/reBotArmController_ROS2)
- フォーラム: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## 参考文献

- [reBot Arm B601-DM 入門ガイド](https://wiki.seeedstudio.com/ja/rebot_b601_dm_getting_started/)
- [reBot Arm B601-DM ビジュアルグラスピングデモ](https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_grasping_demo/)
- [reBot Arm B601-DM Pinocchio と MeshCat](https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_pinocchio_meshcat/)
- [reBot Arm B601-DM LeRobot チュートリアル](https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_lerobot/)
- [ROS2 Humble ドキュメント](https://docs.ros.org/en/humble/)
- [ROS2 Jazzy ドキュメント](https://docs.ros.org/en/jazzy/)
- [reBotArm_control_py](https://github.com/vectorBH6/reBotArm_control_py)
