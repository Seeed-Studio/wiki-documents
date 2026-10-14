---
description: "Seeed Physical AI Beginner's Course の第33章 — reBot Arm の ROS2 統合をハンズオンで学びます：ROS2 ワークスペースの構築、Python SDK をドライバノードとしてラップ、RViz でのアームの起動と可視化、Topic / Service / Action インターフェースを通した駆動、および安全な停止とトラブルシューティング。"
title: 第33章 - reBot Arm ROS2 統合
hide_title: true
keywords:
  - reBot
  - ロボットアーム
  - ROS2
  - B601-RS
  - B601-DM
  - RViz
  - MoveIt2
  - USB2CAN
  - コース
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_33
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/ja/rebot_physical_ai_course_chapter_33/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 7 · 第33章 · 実践</span>
    <h2>33. reBot Arm ROS2 統合</h2>
    <p>
      Seeed Physical AI Beginner's Course の第33章では、reBot Arm の ROS2 統合をハンズオンで学びます：ROS2 ワークスペースの構築、Python SDK をドライバノードとしてラップ、RViz でのアームの起動と可視化、Topic / Service / Action インターフェースを通した駆動、および安全な停止とトラブルシューティングを行います。
    </p>
    <div className="hero-actions">
      <a href="#overview">章の概要</a>
      <a href="#workspace">ワークスペースを構築</a>
      <a href="#launch">起動と可視化</a>
      <a href="#control">Topic・Service・Action</a>
    </div>
  </div>
</section>

{/* TODO: この章の元ドキュメント末尾にはスクリーン録画（`file_v3_0014l_8f7e605c-e0f9-4176-be18-997f8682e72g.mp4`, `18446744073566823104.mp4`, `1126939039.mp4`, `video_20260817_142623.mp4`）があります。これらのファイルはまだ 图片和附件/ にありません — コース CDN にアップロードし、利用可能になったらここにリンクしてください。 */}
<a id="overview"></a>

## 33.1 reBot ROS2 ワークスペースの構築

### 準備：環境とハードウェア

本格的に始める前に、ハードウェアが正しく接続され、ソフトウェア環境が整っていることを確認してください。これは以降のすべてのステップの土台となります。

- **ハードウェア配線**：`USB2CAN` / シリアルポートをアームの CAN バスアダプタボードにブリッジします。通電後、`USB2CAN` をホストに接続し、システムが CAN / シリアルデバイスを認識していることを確認します。
- **オペレーティングシステム**：**Ubuntu 24.04** と **ROS2 Jazzy**、または **Ubuntu 22.04** と **ROS2 Humble** の組み合わせを推奨します。

RS：

```bash
sudo ip link set can0 down 2>/dev/null || true
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

DM：

```bash
sudo chmod 666 /dev/ttyACM*
```

### コアワークスペース

これは統合作業全体のコアコードリポジトリであり、reBot Arm を標準的な ROS2 ロボットとしてラップするために必要なすべてのコンポーネントが含まれています。

- **コードを取得**：公式リポジトリからワークスペースを clone します：

```bash
#RS:
git clone https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_RS.git ~/ReBot_Arm_DigitalTwin_RS

#DM:
git clone https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_DM.git ~/ReBot_Arm_DigitalTwin_DM
```

**ワークスペース構成**：RS 版と DM 版ではワークスペースディレクトリ名が異なります（RS は `rebotarm_ros2_RS`、DM は `rebotarm_ros2_DM`）。中には 7 つの主要な ROS2 パッケージが含まれています：

- `rebotarm_msgs`：カスタムメッセージ、サービス、アクションインターフェース。
- `rebotarmcontroller`：ドライバノードであり、コアコントローラ `reBotArmController` を含みます。
- `rebotarm_bringup`：launch ファイル、設定ファイル、URDF モデル、RViz リソース。
- `rebotarm_moveit_config`：MoveIt 2 の設定ファイル。
- `rebotarm_moveit_demos`：MoveIt 2 のサンプルプログラム。
- `rebotarm_mujoco`：DM 版の MuJoCo シミュレーション同期ノード（パッケージ名は `rebotarm_mujoco`。RS 版は `rebotarm_mujoco_rs`）。
- `rebotarm_agent`：DM 版の高レベル Agent ノード。

## 33.2 Python SDK と ROS2 ドライバの橋渡し

`reBotArm_control_py` は低レベルの Python 制御ライブラリであり、`rebotarm_ros2` ワークスペースの役割は、これを標準的な ROS2 インターフェースに「ラップ」することです。

- **低レベル SDK をインストール**：

ワークスペースの third_party ディレクトリ内で、この低レベルライブラリを取得します（RS は rebotarm_ros2/third_party 配下。DM は自動マッチングで、setup.sh が reBotArmController_ROS2-main/third_party、reBotArmController_ROS2-main/sdk、~/reBotArm_control_py の 3 つの候補パスを順にチェックします）：

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git third_party/reBotArm_control_py

#reBotArm_control_py's default yaml config is dm; change the one in /reBotArm_control_py/config to the matching option

#RS:
hardware_yaml: "rebotarm_rs.yaml"

#DM:
hardware_yaml: "rebotarm_dm.yaml"
```

- **motorbridge をインストール**：これはモータと高レベルソフトウェアをつなぐ重要なミドルウェアであり、pip でインストールします：

```bash
python3 -m pip install motorbridge

#verify
motorbridge -v
#output
motorbridge 0.5.0
```

<a id="launch"></a>

## 33.3 起動と可視化

- 実行可能エントリポイントを確認します：

RS：

```bash
cd ~/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2
source install/setup.bash
ros2 pkg executables rebotarmcontroller
```

DM：

```bash
cd ~/ReBot_Arm_DigitalTwin_DM/rebotarm_ros2
source install/setup.bash
ros2 pkg executables rebotarmcontroller
```

- 少なくとも次のものが表示されるはずです：

```bash
rebotarmcontroller GravityCompensation
rebotarmcontroller GripperControl
rebotarmcontroller MoveTo
rebotarmcontroller MoveToPose
rebotarmcontroller reBotArmController
```

RS 版には、さらに 2 つの実行可能エントリポイントがあります：

```text
rebotarmcontroller FakeRsDriver        # RS-only: MuJoCo simulation fake driver (fake_rs_driver.py)
rebotarmcontroller CancelAction        # RS-only: cancel an executing Action goal
```

DM 版には、さらに 1 つの実行可能エントリポイントがあります：

```text
rebotarmcontroller FakeReBotArmDriver  # DM-only: MuJoCo simulation fake driver (fake_driver.py)
```

注意：RS 版には、モーションプランニング用の `motion_profiles.py` と `trajectory_profiles.py` の 2 つのファイルも含まれますが、DM 版には含まれません。

- ワークスペースをビルドした後は、1 つのコマンドで完全なシステムを起動でき、アームの制御・状態配信・可視化を一括でつなぎ合わせることができます。

```bash
# Build the workspace
source /opt/ros/${ROS_DISTRO}/setup.bash
colcon build --symlink-install
source install/setup.bash

# Launch the full system and enable RViz visualization
# RS:
cd ~/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=true

# DM:
cd ~/ReBot_Arm_DigitalTwin_DM
./rebotarm start dm use_rviz:=true
```

- **状態配信**：起動後、`reBotArmController` ノードはアームの状態を継続的に配信します。例えば、関節状態（`/rebotarm/joint_states`）や全体ステータス（`/rebotarm/arm_status`）などです。

```bash
#show active topic names
ros2 topic list
#list topics and their message types; adding the -t flag also shows each topic's message type:
ros2 topic list -t
#example output:
/client_count
/connected_clients
/goal_pose
/initialpose
/parameter_events
/rebotarm/arm_status
/rebotarm/control_reference
/rebotarm/control_target
/rebotarm/gripper/cmd/mit
/rebotarm/gripper/cmd/pos_vel
/rebotarm/gripper/state
/rebotarm/joint_states
/rebotarm/joints/joint1/cmd/mit
/rebotarm/joints/joint1/cmd/pos_vel
/rebotarm/joints/joint1/state
/rebotarm/joints/joint2/cmd/mit
/rebotarm/joints/joint2/cmd/pos_vel
/rebotarm/joints/joint2/state
/rebotarm/joints/joint3/cmd/mit
/rebotarm/joints/joint3/cmd/pos_vel
/rebotarm/joints/joint3/state
/rebotarm/joints/joint4/cmd/mit
/rebotarm/joints/joint4/cmd/pos_vel
/rebotarm/joints/joint4/state
/rebotarm/joints/joint5/cmd/mit
/rebotarm/joints/joint5/cmd/pos_vel
/rebotarm/joints/joint5/state
/rebotarm/joints/joint6/cmd/mit
/rebotarm/joints/joint6/cmd/pos_vel
/rebotarm/joints/joint6/state
/rebotarm/mujoco/object_states
/rebotarm/mujoco/overhead_rgb/image_raw
/rebotarm/sim/animation_event
/rebotarm/vision/color_blocks/detections
/robot_description
/rosout
/tf
/tf_static
```

- **RViz 表示**：RViz を通して、URDF ベースのアームの動きをリアルタイムに観察でき、「見たまま」の監視効果を実現できます。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-33/ch33-01.png" alt="RViz に表示された reBot アームモデル" />
</div>

起動後、`reBotArmController` ノードはアームの状態を継続的に配信します。状態配信は `JointStatePublisher` クラス（`ros_publishers.py`）によって一元管理され、設定可能な周波数（デフォルト 100 Hz）のタイマーで駆動されます。外部トリガーは不要です。

配信されるトピックの概要：

|Topic|メッセージ型|説明|
|---|---|---|
|`/rebotarm/joint_states`|`sensor_msgs/msg/JointState`|6 軸関節の位置・速度・トルクに加え、グリッパー `finger_left`|
|`/rebotarm/arm_status`|`rebotarm_msgs/msg/ArmStatus`|制御モード、有効状態、ステートマシン、関節ごとのステータスコード、エラーコード（ラッチ QoS）|
|`/rebotarm/joints/<joint>/state`|`rebotarm_msgs/msg/JointMotorState`|単一関節のモータレベル状態。`<joint>` は `joint1` 〜 `joint6`|
|`/rebotarm/gripper/state`|`rebotarm_msgs/msg/JointMotorState`|グリッパーのモータレベル状態。グリッパー未設定時は配信されません|

`ArmStatus` メッセージは `TRANSIENT_LOCAL` 耐久性（ラッチ QoS）を使用しており、後から参加したサブスクライバも直ちに最新の状態スナップショットを受け取れます。これは UI やヘルスモニタリングコンポーネントが状態を同期するのに適しています：

```bash
# View joint states
ros2 topic echo /rebotarm/joint_states --once

# View overall status (including state machine and error codes)
ros2 topic echo /rebotarm/arm_status --once

# View a single joint's motor state
ros2 topic echo /rebotarm/joints/joint1/state --once
```

`ArmStatus` メッセージのフィールド：

```text
std_msgs/Header header
string mode               # current control mode: mit / pos_vel / vel
bool enabled              # whether the arm is enabled
bool control_loop_active  # whether the internal pos_vel control loop is running
string state_machine      # state machine: IDLE / TRAJ_RUNNING / LOWLEVEL_STREAMING / GRAVITY_COMP
string[] joint_names      # list of joint names
uint8[] per_joint_status_code  # status code of each joint motor
string[] error_codes     # list of error codes
```

<a id="control"></a>

## 33.4 Topic・Service・Action による制御

rebotarm_ros2 は、用途に応じて選択できるよう、さまざまな ROS2 標準の制御インターフェースを提供します。すべてのインターフェースはデフォルトで `/rebotarm` 名前空間の下にあり、launch パラメータ `arm_namespace` で上書き可能です。

制御前に単位を統一してください：角度はラジアン（rad）、時間は秒です。

### Topic、Service、Action による制御フロー例

```bash
#1 Power on and enable the motors
ros2 service call /rebotarm/enable std_srvs/srv/Trigger
#2 Return to the safe home (verify the zero position is correct)
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
# Now you can send move_to_pose / follow_joint_trajectory action goals
# ...execute motion...
# Disable after finishing
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

### Topic：低レベル単一モータパススルー

デバッグや低レベル制御の実験用に、`motor_passthrough.py` は関節ごとの疎な生コマンド Topic を提供します：

|Topic|メッセージ型|説明|
|---|---|---|
|`/rebotarm/joints/<joint>/cmd`|`rebotarm_msgs/msg/JointMotorCmd`|単一関節の疎な生コマンド|
|`/rebotarm/gripper/cmd`|`rebotarm_msgs/msg/JointMotorCmd`|グリッパの疎な生コマンド|

`JointMotorCmd` はスパースフラグ設計を採用しています：`use_pos`、`use_vel`、`use_kp`、`use_kd`、`use_tau`、`use_vlim` が `true` のフィールドのみがデフォルト値を上書きします。`mode` は `0` (MIT)、`1` (POS_VEL)、`2` (VEL) を指定できます。

```bash
# Single-joint MIT mode command
ros2 topic pub --once /rebotarm/joints/joint1/cmd/mit \
  rebotarm_msgs/msg/JointMitCmd \
  "{pos: 0.2, vel: 0.0, kp: 80.0, kd: 4.0, tau: 0.0}"
```

軌道実行中は、低レベル cmd はデフォルトで拒否されます（`cmd_arbitration:=reject`）。先取りして上書きしたい場合は、起動時に `cmd_arbitration:=preempt` を渡します。

### Service：トリガースタイル制御

Service は、有効化/無効化、安全な原点復帰、モード切り替えなどのトリガースタイルの操作に適しています。`ros_services.py` の `ArmServices` クラスで定義されています。

|Service|型|説明|
|---|---|---|
|`/rebotarm/enable`|`std_srvs/srv/Trigger`|アームとグリッパを有効化し、pos_vel 制御ループを開始|
|`/rebotarm/disable`|`std_srvs/srv/Trigger`|制御ループを停止し、アームを無効化|
|`/rebotarm/safe_home`|`std_srvs/srv/Trigger`|安全な速度でゼロ位置に戻る（関節＋グリッパ）|
|`/rebotarm/set_zero`|`rebotarm_msgs/srv/SetZero`|全関節または指定関節のゼロ位置を設定|
|`/rebotarm/move_to_pose_ik`|`rebotarm_msgs/srv/MoveToPoseIK`|IK のみを解き、目標関節角度を更新|
|`/rebotarm/gripper/set`|`rebotarm_msgs/srv/SetGripper`|グリッパの開口距離と最大トルクを設定|
|`/rebotarm/gravity_compensation/start`|`std_srvs/srv/Trigger`|コントローラ内部の重力補償閉ループを開始|
|`/rebotarm/gravity_compensation/stop`|`std_srvs/srv/Trigger`|重力補償閉ループを停止|
|`/rebotarm/gravity_compensation/status`|`std_srvs/srv/Trigger`|重力補償ステータスを問い合わせ；`success=true` は動作中を意味します|

一般的なコマンド例：

```bash
# Enable
ros2 service call /rebotarm/enable std_srvs/srv/Trigger

# Safe homing
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger

# IK solve (!!! note the arm moves very fast)
ros2 service call /rebotarm/move_to_pose_ik rebotarm_msgs/srv/MoveToPoseIK \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {w: 1.0}}}"

# Send a Cartesian pose goal (3 s total motion time)
ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {w: 1.0}}, duration: 3.0}"

# Set the gripper opening (rad; 0-5)
ros2 service call /rebotarm/gripper/set rebotarm_msgs/srv/SetGripper \
  "{position: 2.5, max_effort: 0.5}"

# DM
ros2 service call /rebotarm/gripper/set \
  rebotarm_msgs/srv/SetGripper "{position: -1.0, max_effort: 0.0}"
```

### Action：プロセス指向の制御

Action は、軌道実行など、フィードバックやキャンセルを必要とする長時間の動作に適しています。`ros_actions.py` の `ArmActions` クラスで定義されています。

|Action|型|説明|
|---|---|---|
|`/rebotarm/move_to_pose`|`rebotarm_msgs/action/MoveToPose`|エンドエフェクタのデカルト姿勢軌道；内部的には `ArmEndPos.move_to_traj()` を使用|
|`/rebotarm/follow_joint_trajectory`|`control_msgs/action/FollowJointTrajectory`|標準的な関節軌道インターフェース；MoveIt2 の標準インターフェース|
|`/rebotarm/gripper/command`|`control_msgs/action/GripperCommand`|標準的なグリッパ Action|

`move_to_pose` の例：reBot Arm の Action サービスにモーションゴールを送信し、アームを指定姿勢へ移動させ、全体の動作時間を 3 秒に保ち、動作中のリアルタイムフィードバックを出力します。

```bash
ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {w: 1.0}}, duration: 3.0}" \
  --feedback
```

Action のメッセージ定義を確認

```bash
ros2 interface show rebotarm_msgs/action/MoveToPose
#You can see the complete Goal / Feedback / Result fields.
```

### デモ例

すべての例は、`reBotArmController` がすでに起動されていることを前提としています：

```bash
cd ~/seeed/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0
```

これらの例は ROS2 実行可能エントリポイントとして登録されており、`ros2 run` で直接呼び出せます。ソースファイルは `src/rebotarmcontroller/rebotarmcontroller/examples/` 配下にあります。

#### エンドエフェクタ姿勢の例

`move_to_pose.py` — エンドエフェクタ姿勢の動作。スクリプトは `/rebotarm/move_to_pose` Action を通じて `geometry_msgs/Pose` ゴールを送信し、制御ノードが内部でモード切り替えと軌道実行を処理します。これは低レベル SDK の `ArmEndPos.move_to_traj()` 機能チェーンに対応します。単一 Action のデモであり、自動で `safe_home` や `disable` は行いません。

```bash
ros2 run rebotarmcontroller MoveToPose -- --x 0.30 --y 0.0 --z 0.30 --qw 1.0 --duration 2.0
```

#### 重力補償の例

`gravity_compensation.py` — 重力補償ロックの例。スクリプトは制御ループを書き換えず、`reBotArmController` 内部の重力補償サービスを直接呼び出します。実際の重力補償閉ループはコントローラプロセス内で動作し、SDK の `RobotArm.get_positions/get_velocities/mit` を使用します。

```bash
ros2 run rebotarmcontroller GravityCompensation
```

スクリプト起動時には、まず `/rebotarm/enable` を呼び出し、その後重力補償を開始します。`Ctrl+C` で終了するとき、スクリプトは `/rebotarm/gravity_compensation/stop` → `/rebotarm/safe_home` → `/rebotarm/disable` を順に呼び出すため、アームはまず重力補償を停止し、その後安全なゼロ位置に戻って無効化されます。

<a id="safety"></a>

## 33.5 安全な停止とトラブルシューティング

ロボット運用において、安全性は最優先事項です。rebotarm_ros2 は複数レベルで安全メカニズムを提供します。

### **safe_home service**：`/rebotarm/safe_home` Service によって、アームは安全な速度であらかじめ設定されたゼロ位置に戻ります。

内部的には、この Service はまず重力補償を停止し、その後 `pos_vel` モードに切り替え、原点復帰を実行します：

```bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
```

### **disable service**：制御ループを停止しアームを無効化します；非常停止の第一候補です

```bash
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

**hold_current_position**：軌道がキャンセルされた場合や例外が発生した場合、コントローラはこのメソッドを自動的に呼び出して現在の関節位置をロックし、アームの自由落下を防ぎます。

### 状態機械の監視

`/rebotarm/arm_status` Topic の `state_machine` フィールドは現在の動作状態を反映しており、トラブルシューティングの第一の入口となります：

|State|意味|
|---|---|
|`IDLE`|アイドル状態、コマンド待ち|
|`TRAJ_RUNNING`|軌道を実行中|
|`LOWLEVEL_STREAMING`|低レベル単一モータコマンドをストリーミング中|
|`GRAVITY_COMP`|重力補償閉ループが動作中|

```bash
# Continuously monitor the state machine
ros2 topic echo /rebotarm/arm_status --field state_machine
```

### エラーコードのトラブルシューティング

`ArmStatus` メッセージ内の `per_joint_status_code` と `error_codes` フィールドは、故障箇所の特定に使用されます：

`per_joint_status_code`：各関節モータのステータスコード（`uint8`）で、低レベル SDK の `motor.get_state().status_code` に由来します；ゼロ以外の値はモータ異常を意味します。`error_codes`：コントローラレベルのエラーコード文字列

```bash
# View the full status (including error codes)
ros2 topic echo /rebotarm/arm_status --once
```

## 33.6 FAQ：よくある問題とトラブルシューティング

#### シリアルポートが見つからない：起動時に `open serial port /dev/ttyACM0 failed` と表示される場合、`ls /dev/ttyACM*` を使用して

実際のデバイスを確認し、その後 `channel:=/dev/ttyACM1` で上書きします。

**権限不足**：シリアルポートは存在するが権限がない場合は、`sudo usermod -a -G dialout $USER` を実行し、

再ログイン後に有効になります。

#### RViz モデルが表示されない：URDF メッシュパスが `package://rebotarm_bringup/description/meshes/...` であることを確認します。

#### 軌道実行に失敗する：最初の軌道ポイントが現在の関節角度に近いかどうかを確認します（偏差は `0.10 rad` 未満である必要があります）、

また、最終位置誤差は `0.03 rad` 未満である必要があります。`ros2 topic echo /rebotarm/joint_states --once` を使用して

現在の関節角度を確認できます。

</div>
