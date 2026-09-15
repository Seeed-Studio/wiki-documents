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
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_ros2_integration/
---

import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';

# reBot Arm B601-DM ROS2 連携ガイド

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
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/ROS2-Humble | Jazzy-blue.svg" alt="ROS2 Humble | Jazzy" />
    <img src="https://img.shields.io/badge/Python-3.10%2B-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Version-v0.2.3-brightgreen.svg" alt="Version v0.2.3" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Platform" />
</p>

<p align="center">
  <strong>ROS2 Control · RViz 可視化 · MoveIt2 対応</strong>
</p>

このチュートリアルでは、reBot Arm B601-DM 向けの ROS2 control ワークスペース `rebotarm_ros2` の実行方法を説明します。このワークスペースは、低レベルの `reBotArm_control_py` Python SDK を ROS2 のトピック、サービス、アクションにラップし、上位レベルのプランニング、ビジュアルグラスピング、RViz 可視化、およびカスタムアプリケーション開発との統合を容易にします。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/v2MlI3zMi1k?autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::note
このチュートリアルでは、`Ubuntu 24.04 + ROS2 Jazzy + Python 3.12` を主な参照環境として使用します。ROS2 Humble / Ubuntu 22.04 でも、対応する ROS2 ディストリビューションを用いれば同じワークフローに従うことができます。
:::

## プロジェクトの特徴

1. **標準的な ROS2 インターフェース**  
   `/joint_states`、`FollowJointTrajectory`、`GripperCommand`、`MoveToPose` などの一般的な ROS2 インターフェースを提供し、MoveIt2、ビジュアルグラスピングパイプライン、タスクレベルシステムとの統合を容易にします。

2. **すぐに使える運動学・軌道・重力補償ノード**  
   順運動学 / 逆運動学、軌道実行、重力補償、および RViz 可視化のサポートをすぐに使える形で提供します。

3. **MoveIt 2 との統合**  
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
      <td>参照システム</td>
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

代わりに、現在のユーザーを `dialout` グループに追加することを推奨します。変更を有効にするには、一度ログアウトしてから再度ログインしてください：

```bash
sudo usermod -a -G dialout $USER
```

## 動作環境要件

| 項目 | 推奨要件 |
|------|------|
| オペレーティングシステム | Ubuntu 24.04、Ubuntu 22.04 は参照用として使用可能 |
| ROS2 | Jazzy、Humble は参照用として使用可能 |
| Python | システム Python。Jazzy では通常 3.12、Humble では通常 3.10 を使用 |

## インストール手順

### ステップ 0. ロボットアームの基本セットアップを完了する

ROS2 連携を開始する前に、[reBot Arm B601-DM Getting Started Guide](https://wiki.seeedstudio.com/ja/rebot_b601_dm_getting_started/) を完了してください。組み立て、モーター ID 設定、ゼロ位置初期化、基本的な接続確認を含みます。

### ステップ 1. 使用している Ubuntu システムに対応する ROS2 バージョンをインストールする

公式 ROS2 ドキュメントを参照してください：

- [ROS2 Jazzy Ubuntu インストール](https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html)
- [ROS2 Humble Ubuntu インストール](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html)

:::tip

Ubuntu 24.04 を使用している場合は、ROS 2 Jazzy をインストールしてください。

Ubuntu 22.04 を使用している場合は、ROS 2 Humble をインストールしてください。

:::

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

### ステップ 4. motorbridge をインストールする

公式 PyPI ソースから `motorbridge` をインストールします：

```bash
python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge
```

### ステップ 5. 低レベル SDK を取得する

```bash
mkdir -p third_party
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git third_party/reBotArm_control_py
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
ロボットを使用する前に、次の点に注意してください：**アームコントローラは高い自由度を持ちます。コントローラを有効にする前やアームに給電する前に、作業空間に人や障害物がないことを必ず確認してください。事故を避けるため、すべての動作コマンドを慎重に確認してください。危険な操作は固く禁じられており、その結果については自己責任となります。**
:::

### フルシステムを起動する

フルブリングアップでは次のものが起動します：

- `reBotArmController` 制御ノード
- `robot_state_publisher`
- オプションの RViz

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0  #Do not open the RViz visualization interface when starting communication
```

:::tip
新しいターミナルを開くたびに、最初に次の 2 つのコマンドを実行する必要があります

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
```
:::

シリアルポートが `/dev/ttyACM0` でない場合は、実際のデバイス名に置き換えてください：

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM1
```

### RViz 可視化を起動する

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0 use_rviz:=true   #Open the RViz visualization interface when starting communication
```

RViz でモデルが小さすぎる場合は、左側の `Views` パネルからビューを調整します：

- `Target Frame` を `base_link` に設定
- `Distance` を `1.0` や `1.5` などに調整
- マウスホイールでズーム
- `Fixed Frame` が `base_link` に設定されていることを確認

### 制御ノードのみを起動する

URDF や RViz が不要な場合：

```bash
ros2 launch rebotarm_bringup driver.launch.py channel:=/dev/ttyACM0
```

ノードを直接実行することもできます：

```bash
ros2 run rebotarmcontroller reBotArmController
```

:::tip
`driver.launch.py` が `rebotarm_bringup/config` から設定ファイルを渡すのとは異なり、コントローラを直接実行した場合はデフォルトの SDK アーム設定にフォールバックします。通常の使用では、ROS を通して起動することを推奨します。
:::

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

複数のロボットアームが必要な場合や、他の ROS2 システムと並行して動作させたい場合は、起動時にネームスペースを変更できます：

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

例:

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
| `/rebotarm/set_mode` | `rebotarm_msgs/srv/SetMode` | `mit`、`pos_vel`、`vel` の間で切り替え |
| `/rebotarm/set_zero` | `rebotarm_msgs/srv/SetZero` | すべての関節または単一関節のゼロ位置を設定 |
| `/rebotarm/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | IK 事前チェックと目標関節解の取得 |
| `/rebotarm/gripper/set` | `rebotarm_msgs/srv/SetGripper` | グリッパーモーター位置を rad 単位で設定 |
| `/rebotarm/gravity_compensation/start` | `std_srvs/srv/Trigger` | 重力補償を開始 |
| `/rebotarm/gravity_compensation/stop` | `std_srvs/srv/Trigger` | 重力補償を停止 |

### アクション

| API | 型 | 説明 |
|---|---|---|
| `/rebotarm/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | エンドエフェクタ姿勢のモーション |
| `/rebotarm/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | 標準的な関節軌道互換エントリポイント |
| `/rebotarm/gripper/command` | `control_msgs/action/GripperCommand` | 標準的なグリッパーアクション |

## 基本制御の例

### 1. ロボットアームを有効化

```bash
ros2 service call /rebotarm/enable std_srvs/srv/Trigger
```

### 2. エンドエフェクタ姿勢へ移動

```bash
ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {x: 0.0, y: 0.0, z: 0.0, w: 1.0}}, duration: 2.0}"
```

### 3. 関節ターゲットを送信

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

すべての例は、`reBotArmController` がすでに実行中であることを前提としています:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0
```

### 関節モーションの例

6 つすべての関節を同時に制御します。単位は rad です:

```bash
ros2 run rebotarmcontroller MoveTo -- \
  0.20 -0.20 -0.20 -0.20 0.10 -0.10 \
  --duration 8.0
```

単一の関節のみを制御します:

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

このスクリプトは最初に `/rebotarm/enable` を呼び出してから、重力補償を開始します。`Ctrl+C` を押すと、スクリプトは次のサービスをこの順序で呼び出します:

1. `/rebotarm/gravity_compensation/stop`
2. `/rebotarm/safe_home`
3. `/rebotarm/disable`

これにより、まず重力補償を停止し、その後アームをセーフホーム位置に戻して無効化します。

サービスを手動で呼び出すこともできます:

```bash
ros2 service call /rebotarm/enable std_srvs/srv/Trigger
ros2 service call /rebotarm/gravity_compensation/start std_srvs/srv/Trigger
ros2 service call /rebotarm/gravity_compensation/stop std_srvs/srv/Trigger
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

### インタラクティブグリッパーの例

```bash
ros2 run rebotarmcontroller GripperControl
```

起動後、次を入力します:

```text
o / open    Open the gripper
c / close   Close the gripper
q / quit    Quit
```

## 設定

デフォルトの設定ファイルは次の場所にあります:

```text
src/rebotarm_bringup/config/
```

| ファイル | 説明 |
|---|---|
| `arm.yaml` | 6 つのアーム関節のモーター、フィードバック ID、および制御パラメータ |
| `gripper.yaml` | グリッパーモーター ID、フィードバック ID、ベンダー、および制御パラメータ |
| `driver_params.yaml` | ROS パラメータの例 |

一般的な launch パラメータ:

| パラメータ | デフォルト | 説明 |
|---|---|---|
| `arm_config` | bringup に含まれる組み込みの `arm.yaml` | アーム設定ファイルのパス |
| `gripper_config` | bringup に含まれる組み込みの `gripper.yaml` | グリッパー設定ファイルのパス |
| `channel` | 空文字列 | デフォルトで YAML を使用。空でない場合はシリアルポートを上書き |
| `joint_state_rate` | `100.0` | `/rebotarm/joint_states` の配信レート |
| `cmd_arbitration` | `reject` | アーム軌道実行中の低レベルコマンドの仲裁方法。`reject` または `preempt`。グリッパーの低レベルコマンドはアーム軌道をプリエンプトしません |
| `arm_namespace` | `rebotarm` | ROS 名前空間プレフィックス |
| `frame_id` | `base_link` | ロボットアームのベースフレーム |
| `ee_frame_id` | `end_link` | エンドエフェクタフレーム |
| `use_rviz` | `false` | RViz を起動するかどうか |

## 低レベルコマンドトピック

ROS2 ワークスペースには、低レベルモーターデバッグ用のトピックも用意されています:

| API | 型 | 説明 |
|---|---|---|
| `/rebotarm/joints/<joint>/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | 単一関節の MIT 生コマンド |
| `/rebotarm/joints/<joint>/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | 単一関節の位置・速度生コマンド |
| `/rebotarm/joints/<joint>/cmd/vel` | `rebotarm_msgs/msg/JointVelCmd` | 単一関節の速度生コマンド |
| `/rebotarm/gripper/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | グリッパーの MIT 生コマンド |
| `/rebotarm/gripper/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | グリッパーの位置・速度生コマンド |
| `/rebotarm/gripper/cmd/vel` | `rebotarm_msgs/msg/JointVelCmd` | グリッパーの速度生コマンド |

:::caution
低レベルコマンドトピックはデバッグおよび実験用途を想定しています。IK、軌道計画、URDF 制限チェックは行いません。アプリケーションレベルのモーションには、`/move_to_pose`、`/follow_joint_trajectory`、`/gripper/set` などのサービスやアクションを優先して使用してください。
:::

## MoveIt 2

MoveIt 2 は、ここで使用されているモーションプランニングフレームワークであり、逆運動学、衝突チェック、軌道計画および実行を行います。デモは独自のパッケージに分離されており、アプリケーションフローがベースドライバから分離された状態を保ちます。
詳細については、公式の [MoveIt 2 Documentation](https://moveit.picknik.ai/main/index.html) を参照してください。

MoveIt 関連の内容は 2 つのパッケージに分かれています:

| パッケージ | 目的 |
|---|---|
| `rebotarm_moveit_config` | ロボットモデル、SRDF、運動学、関節制限、コントローラおよび RViz 設定 |
| `rebotarm_moveit_demos` | MoveIt 2 ベースのアプリケーションデモ |

MoveIt 環境は、`ros2_control` と `move_group` を通じてシミュレートされたハードウェアを使用し、計画と実行を行います。これは、RViz 内でモデル、IK、軌道計画、およびデモフローを検証することを目的としています。

このリポジトリは実機ハードウェアもサポートしています。実機を接続する前に、アームのゼロ設定、関節方向、関節制限、速度制限、およびグリッパー範囲がすべて正しいことを確認するか、リポジトリのデフォルト設定のままにしてください。

### MoveIt 環境セットアップ

まず ROS2 環境が利用可能であることを確認します。現在 source されている ROS ディストリビューションに対して、`ROS_DISTRO` を通じてパッケージをインストールできます:

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

MoveIt の設定とデモはこのワークスペースに含まれています。依存関係をインストールしたら、ワークスペースを再ビルドします:

```bash
cd your/path/to/rebotarm_ros2
colcon build --symlink-install
source install/setup.bash
```

MoveIt パッケージとデモのエントリポイントを確認します:

```bash
ros2 pkg list | grep rebotarm_moveit
ros2 pkg executables rebotarm_moveit_demos
```

想定されるエントリには次が含まれます:

```text
rebotarm_moveit_demos draw_square
rebotarm_moveit_demos pick_place
```

### MoveIt を使用する

MoveIt のプランニングは、シミュレーションおよび実機の両方のシーンで、RViz GUI または ROS ノードを通じて使用できます。

#### シミュレーションで MoveIt を使用する

MoveIt は RViz シミュレーションのために ros2_control 仮想ハードウェアインターフェースを使用します:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py
```

デフォルトでは次が起動します:

- `move_group`
- `robot_state_publisher`
- `ros2_control_node`
- `joint_state_broadcaster`
- `rebotarm_controller`
- `gripper_controller`
- MoveIt MotionPlanning プラグイン付きの RViz

RViz は自動的に開き、ロボットの URDF モデルを読み込みます。GUI 左側のパネルからモーションを制御できます。

RViz なしで MoveIt 環境を実行するには:

```bash
ros2 launch rebotarm_moveit_config demo.launch.py use_rviz:=false
```

#### reBotArm ハードウェアで MoveIt を使用する

実機ロボットの場合は、まず仮想コントローラではなくハードウェアインターフェース付きのコントローラを起動し、その後ハードウェア用 MoveIt 環境を起動します:

```bash
ros2 launch rebotarm_bringup driver.launch.py channel:=/dev/ttyACM0
```

別のターミナルで:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py
```

繰り返しますが、実機ハードウェアで任意のデモを実行する前に、作業空間に人や障害物がないことを確認し、RViz で計画経路を検証し、いつでもコントローラを停止できるように準備しておいてください。

### draw-square デモを実行する

まず MoveIt 環境を起動し、別のターミナルで次を実行します:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py
```

`draw_square` は、`gripper_tcp` を同一平面上の長方形の 4 つの頂点に沿って移動させます。
デフォルトパラメータ:

```text
src/rebotarm_moveit_demos/config/draw_square.yaml
```

共通パラメータ：

| パラメータ | 説明 |
|---|---|
| `start_point` | デモ開始前の関節リセット位置 |
| `rectangle_center` | `base_link` における長方形の中心 |
| `rectangle_width` / `rectangle_height` | メートル単位の長方形の寸法 |
| `tcp_rpy` | TCP の姿勢。デフォルトでは下向きのグリッパー |
| `tcp_yaw_offsets` | 大きな joint6 の回り込みを避けるために使用される代替 IK yaw 値 |

### ピック＆プレースデモを実行する

まず MoveIt 環境を起動し、その後別のターミナルで次を実行します：

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos pick_place.launch.py
```

デフォルトパラメータ：

```text
src/rebotarm_moveit_demos/config/pick_place.yaml
```

共通パラメータ：

| パラメータ | 説明 |
|---|---|
| `ready_point` | ピック／プレースの前後で使用される待機関節位置 |
| `pick_position` | `base_link` における物体の底面中心位置 |
| `pick_tcp_rpy` / `place_tcp_rpy` | ピックおよびプレース用の TCP 姿勢 |
| `object_dimensions` | メートル単位のプランニングシーン内オブジェクト寸法 |
| `max_gripper_width` | グリッパーの合計最大開口幅。デフォルトは `0.09m` |
| `open_gripper_position` / `closed_gripper_position` | シミュレートされた片側グリッパー関節の開閉位置 |
| `hardware_open_gripper_position` / `hardware_closed_gripper_position` | ハードウェアグリッパーモーターの開閉位置 |
| `grasp_gripper_to_object_width` | 物体の幅から把持位置を計算 |

### MoveIt 設定ファイル

| ファイル | 説明 |
|---|---|
| `rebotarm_moveit_config/config/rebotarm.urdf.xacro` | MoveIt が使用するロボットモデル |
| `rebotarm_moveit_config/config/rebotarm.srdf` | MoveIt のグループ、エンドエフェクタ、デフォルト状態 |
| `rebotarm_moveit_config/config/kinematics.yaml` | IK ソルバー設定 |
| `rebotarm_moveit_config/config/joint_limits.yaml` | MoveIt プランニングで使用される関節制限 |
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

シリアルポートを占有しているプロセスを停止してから再起動してください。アームとグリッパーは同じ低レベル Controller を共有する必要があります。アームとグリッパーで同じシリアルポートを別々に開かないでください。

### 3. Permission denied

シリアルデバイスは存在するが、権限が拒否される場合：

```bash
sudo usermod -a -G dialout $USER
```

変更を有効にするには、一度ログアウトしてから再度ログインしてください。一時的なデバッグのためには、次を実行することもできます：

```bash
sudo chmod 666 /dev/ttyACM0
```

### 4. RViz にロボットモデルが表示されない

次の点を確認してください：

- ワークスペースが source 済みか：`source install/setup.bash`
- `Fixed Frame` が `base_link` に設定されているか
- `robot_state_publisher` が正しく起動しているか
- URDF メッシュパスが `package://rebotarm_bringup/description/meshes/...` になっているか

### 5. FastDDS SHM ポートの警告が表示される

ターミナルに次のような表示が出る場合：

```text
[RTPS_TRANSPORT_SHM Error] Failed init_port fastrtps_port7002: open_and_lock_file failed
```

これは通常、以前の ROS2 プロセスが異常終了した後に残った FastDDS の共有メモリロックファイルが原因です。サービスやアクションが正常に応答している場合、この警告は通常制御に影響しません。

これをクリーンアップするには、まず関連する ROS2 プロセスを停止し、その後次を実行します：

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

Humble ユーザーも同じワークフローに従い、コマンド内の `jazzy` を `humble` に置き換え、Humble の公式ドキュメントに従って対応する依存関係をインストールしてください。ROS2 ディストリビューションを切り替えた後は、再度 `colcon build` を実行します。

### 7. `pinocchio` が見つからない

ノードや検証コマンドが次のように報告する場合：

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

Jazzy を source した後は、
`/opt/ros/jazzy/lib/python3.12/site-packages` のようなパスが表示されるはずです。Humble を使用する場合は、コマンド内の `jazzy` を
`humble` に置き換えてください。

## お問い合わせ

- 技術サポート：[Submit an Issue](https://github.com/Seeed-Projects/reBotArmController_ROS2/issues)
- プロジェクトリポジトリ：[Github](https://github.com/Seeed-Projects/reBotArmController_ROS2)
- フォーラム：[Seeed Studio Forum](https://forum.seeedstudio.com/)

## 参考資料

- [reBot Arm B601-DM 入門ガイド](https://wiki.seeedstudio.com/ja/rebot_b601_dm_getting_started/)
- [reBot Arm B601-DM ビジュアルグラスピングデモ](https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_grasping_demo/)
- [reBot Arm B601-DM Pinocchio と MeshCat](https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_pinocchio_meshcat/)
- [reBot Arm B601-DM LeRobot チュートリアル](https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_lerobot/)
- [ROS2 Humble ドキュメント](https://docs.ros.org/en/humble/)
- [ROS2 Jazzy ドキュメント](https://docs.ros.org/en/jazzy/)
- [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py)
