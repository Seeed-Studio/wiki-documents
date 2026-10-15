---
description: "Seeed Physical AI Beginner's Course の第34章 — reBot Arm 上での MoveIt 2 モーションプランニング：`move_group` アーキテクチャ、SRDF プランニンググループ、関節リミット、衝突モデルと自己衝突マトリクス、プランニングシーン、デカルト経路、障害物を考慮したプランニング、軌道実行、および draw_square / pick_place デモ。"
title: 第34章 - MoveIt2 モーションプランニング
hide_title: true
keywords:
  - reBot
  - ロボットアーム
  - ROS2
  - MoveIt2
  - SRDF
  - OMPL
  - モーションプランニング
  - RViz
  - コース
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_34
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/ja/rebot_physical_ai_course_chapter_34/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 7 · 第34章 · 理論と実践</span>
    <h2>34. MoveIt2 モーションプランニング</h2>
    <p>
      Seeed Physical AI Beginner's Course の第34章 — reBot Arm 上での MoveIt 2 モーションプランニング：`move_group` アーキテクチャ、SRDF プランニンググループ、関節リミット、衝突モデルと自己衝突マトリクス、プランニングシーン、デカルト経路、障害物を考慮したプランニング、軌道実行、および draw_square / pick_place デモ。
    </p>
    <div className="hero-actions">
      <a href="#overview">章の概要</a>
      <a href="#srdf">SRDF とプランニンググループ</a>
      <a href="#planning">プランニングシーンと経路</a>
      <a href="#demos">デモの実行</a>
    </div>
  </div>
</section>

{/* TODO: this section of the original document ends with a screen recording (`409527786.mp4`, `18446744072629597584.mp4`). The file(s) are not in 图片和附件/ yet — upload them to the course CDN and link them here once they are available. */}
MoveIt 2 は ROS2 エコシステムにおけるロボットアーム向けの最も主流なモーションプランニングフレームワークであり、逆運動学の解法、衝突検出、軌道計画、軌道実行を担当します。reBot Arm B601-DM では、MoveIt 2 は高レベルのプランニングと低レベルの駆動を分離しています：プランニングは `move_group` ノード内で行われ、実行は `follow_joint_trajectory` アクションを通じて `reBotArmController` にディスパッチされます。本章では、MoveIt 2 の理論と実践を、システムアーキテクチャから実機での実行まで、層ごとに分解して解説します。学習目標：複雑な環境下で、アームが安全な動きを自動で計画できるようにすること。

<a id="overview"></a>

## 34.1 MoveIt2 システムアーキテクチャ

MoveIt 2 の中核は `move_group` ノードであり、モーションプランニングのマスター・スケジューラとして機能します。`move_group` を中心に、reBot Arm の MoveIt 2 統合には次のコンポーネントが関わります：

|コンポーネント|役割|対応するファイル / パッケージ|
|---|---|---|
|`move_group`|プランニングのマスター・スケジューラ：目標を受け取り、IK とプランナを呼び出し、軌道を生成し、実行をディスパッチする|`rebotarm_moveit_config`|
|URDF/Xacro|ロボットモデル記述（リンク、ジョイント、メッシュ、グリッパ、gripper_tcp）|`rebotarm.urdf.xacro`|
|SRDF|セマンティックモデル：プランニンググループ、エンドエフェクタ、デフォルト状態、自己衝突マトリクス|`rebotarm.srdf`|
|Kinematics Plugin|IK ソルバ|`kinematics.yaml` (KDL)|
|OMPL Planner|サンプリングベースのモーションプランナ|`ompl_planning.yaml` (RRTConnect)|
|Trajectory Execution|軌道実行コントローラ|`moveit_controllers.yaml`|
|Planning Scene|環境モデル：オブジェクト、衝突、ACM|`pick_place.py` 内のシーン操作|
|RViz MotionPlanning|可視化とインタラクション用インターフェース|`moveit.rviz`|

### シミュレーション環境での起動チェーン

```bash
ros2 launch rebotarm_moveit_config demo.launch.py
```

このコマンドは `move_group`、`robot_state_publisher`、`ros2_control_node`（モックハードウェア）、`joint_state_broadcaster`、`rebotarm_controller`、`gripper_controller`、そして RViz を起動します。

シミュレーション環境では、`mock_components/GenericSystem` を仮想ハードウェアとして使用し、実機アームは不要です。

### 実機環境での起動チェーン

```bash
#RS:
# Terminal 1: start the hardware driver
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0

#DM:
ros2 launch rebotarm_bringup bringup.launch.py model:=dm channel:=/dev/ttyACM0

# Terminal 2: start MoveIt (connecting to the running driver)
ros2 launch rebotarm_moveit_config hardware.launch.py
```

`hardware.launch.py` は `ros2_control_node` を起動せず、代わりに `/joint_states` を `/<arm_namespace>/joint_states` にリマップし、実ドライバがパブリッシュする関節状態を直接読み取り、`follow_joint_trajectory` アクションを通じて計画済み軌道を `reBotArmController` にディスパッチします。

<a id="srdf"></a>

## 34.2 SRDF とプランニンググループ

SRDF（Semantic Robot Description Format）は、URDF に対するセマンティックな補足レイヤです。URDF はロボットの物理構造（リンク、ジョイント、メッシュ）を記述しますが、「どのジョイントが一緒に動くのか」「どのリンクがエンドエフェクタなのか」「どのリンク同士は決して衝突しないのか」は分かりません。SRDF はこれらの問いに答えます。

reBot Arm の SRDF では、2 つのプランニンググループを定義しています：

|プランニンググループ|構成|用途|
|---|---|---|
|`arm`|運動学チェーン `base_link` → `gripper_tcp`|6 軸アームのモーションプランニング|
|`gripper`|`gripper_joint1`, `gripper_joint2`|グリッパの開閉制御|

`arm` グループは `<chain>` で定義されており、`base_link` から `gripper_tcp` までをカバーし、6 つのジョイントとグリッパのリンクを含みます。`gripper` グループは `<joint>` でジョイントを 1 つずつ列挙し、2 つのグリッパジョイントのみを含みます。

SRDF はまた、クイックリセット用の名前付き状態（`group_state`）も定義しています：

|状態名|グループ|意味|
|---|---|---|
|`home`|`arm`|6 つのジョイントすべてがゼロ|
|`open`|`gripper`|グリッパジョイントが `0.0715` rad（全開）|
|`closed`|`gripper`|グリッパジョイントが `0.0` rad（全閉）|

エンドエフェクタの宣言：

```xml
<end_effector name="gripper" parent_link="gripper_link"
              group="gripper" parent_group="arm"/>
```

`name="gripper"`：エンドエフェクタ名

`parent_link="gripper_link"`：グリッパが取り付けられているリンク（アームの最終リンク）

`group="gripper"`：グリッパに対応するプランニンググループ

`parent_group="arm"`：所属する親プランニンググループ（アームグループ）

仮想ジョイントはアームをワールド座標系に固定します：

```xml
<virtual_joint name="FixedBase" type="fixed"
               parent_frame="world" child_link="base_link"/>
```

## 34.3 関節リミット

関節リミットは 2 つのレイヤに分かれます：URDF における物理リミットと、MoveIt におけるプランニングリミットです。

URDF レイヤでは、各ジョイントの角度範囲（最小 / 最大位置）を定義しており、これはハードウェアレベルでのハードリミットです。

MoveIt レイヤでは、`joint_limits.yaml` 内で速度と加速度のリミットを定義し、軌道の時間パラメータ化に使用します：

```yaml
joint_limits:
  joint1:
    has_velocity_limits: true
    max_velocity: 1.0          # rad/s
    has_acceleration_limits: true
    max_acceleration: 1.0      # rad/s^2
  # joint2 ~ joint6 same as above
  gripper_joint1:
    has_velocity_limits: true
    max_velocity: 0.2          # rad/s
    has_acceleration_limits: true
    max_acceleration: 0.5      # rad/s^2
```

グローバルなスケーリング係数：

```yaml
default_velocity_scaling_factor: 0.2
default_acceleration_scaling_factor: 0.2
```

これは、デフォルトでは最大速度と最大加速度の 20% だけを使ってプランニングすることを意味しており、安全で保守的な設定です。デモでは個別に上書きすることもでき、例えば `pick_place.yaml` の `velocity_scaling: 1.0` はフルスピードでのプランニングを意味します。

## 34.4 衝突モデルと自己衝突

MoveIt 2 の衝突検出は FCL（Flexible Collision Library）に基づいており、URDF 内のメッシュまたはプリミティブ形状を用いて衝突判定を行います。高速化のために、SRDF では自己衝突マトリクス（ACM, AllowedCollision Matrix）を事前定義し、「衝突チェックが不要なリンクの組」を宣言します。

reBot Arm の自己衝突マトリクスは、次の 2 つのカテゴリに分類されます：

**隣接（隣り合うリンク）**：ジョイントで直接接続されているリンクの組で、物理的に常に接触しているためチェック不要：

|リンクの組|理由|
|---|---|
|`base_link` - `link1`|隣接|
|`link1` - `link2`|隣接|
|`link2` - `link3`|隣接|
|`link3` - `link4`|隣接|
|`link4` - `link5`|隣接|
|`link5` - `link6`|隣接|
|`link6` - `gripper_link`|隣接|
|`gripper_link` - `gripper_left`|隣接|
|`gripper_link` - `gripper_right`|隣接|
|`gripper_link` - `gripper_tcp`|隣接|

**Never（決して衝突しない）**：幾何学的に接触し得ないリンクの組：

|リンクの組|理由|
|---|---|
|`gripper_left` - `gripper_tcp`|Never|
|`gripper_right` - `gripper_tcp`|Never|
|`gripper_left` - `gripper_right`|Never|

ACM に含まれていないリンクの組（例えば `base_link` と `link6`）は通常どおり衝突チェックされます。プランニング中、OMPL はサンプリング空間内で衝突を引き起こす関節構成を避けます。

<a id="planning"></a>

## 34.5 プランニングシーン

プランニングシーンは、MoveIt における「世界」のモデルであり、ロボット本体、環境オブジェクト、衝突関係を含みます。これはプランニングの前提条件であり、各プランニングの前に、MoveIt は開始状態がプランニングシーン内のオブジェクトと衝突していないかをチェックします。

プランニングシーンの中核的な操作は、次の 3 つのサービスを通じて行われます：

|サービス|型|役割|
|---|---|---|
|`/apply_planning_scene`|`ApplyPlanningScene`|オブジェクトの追加 / 削除、ACM の変更、オブジェクトのアタッチ|
|`/get_planning_scene`|`GetPlanningScene`|現在のシーンの問い合わせ|
|`/plan_kinematic_path`|`GetMotionPlan`|プランニングの要求（実行はしない）|

## 34.6 デカルト経路

デカルト経路とは、エンドエフェクタが関節空間で点ごとに補間するのではなく、デカルト空間で直線または曲線に沿って移動することを意味します。MoveIt 2 はこれを `compute_cartesian_path` によって実装しています。reBot Arm のデモでは、`draw_square` がデカルト経路の考え方を利用しており、同一平面上で `gripper_tcp` を制御して長方形の 4 つの頂点を訪れます。具体的な実装は次のとおりです：

1. 各頂点に対して、対応する関節角度を IK で解く：

```python
target = self.compute_ik_joint_target(
    pose_stamped, seed_values, ik_link_name,
    timeout_sec, avoid_collisions=True, label=label
)
```

2. 現在の関節角度から目標関節角度までの軌道を、OMPL を用いてプランニングする：

```python
request = GetMotionPlan.Request()
request.motion_plan_request.group_name = self.group_name
request.motion_plan_request.pipeline_id = "ompl"
request.motion_plan_request.planner_id = "RRTConnect"
request.motion_plan_request.allowed_planning_time = 5.0
```

3. `/execute_trajectory` アクションを通じて軌道を実行する。

`draw_square` の主要パラメータ：

|パラメータ|デフォルト値|説明|
|---|---|---|
|`rectangle_center`|`[0.28, 0.0, 0.12]`|長方形の中心（`base_link` 座標系）|
|`rectangle_width`|`0.04`|長方形の幅（m）|
|`rectangle_height`|`0.08`|長方形の高さ（m）|
|`tcp_rpy`|`[0.0, 1.57, 0.0]`|終端姿勢。デフォルトではグリッパが真下を向く|
|`tcp_yaw_offsets`|`[0.0, 3.1416, -3.1416]`|IK 用の代替ヨー角。joint6 の大きなスピンを避ける|
|`avoid_collisions`|`true`|IK 解法中に衝突回避を行うかどうか|

`tcp_yaw_offsets` は実用的なテクニックです。IK は複数の解を返すことがあり、その中には `joint6` が大きく回転してしまうものもあります。複数の代替ヨー角を与えることで、デモは関節変化量が最小の解を選択し、不必要な回転を減らします。

## 34.7 障害物を考慮したプランニング

Planning Scene に障害物が存在する場合、OMPL はプランニング中に自動的にそれらを回避します。reBot Arm の OMPL 設定は次のとおりです：

```yaml
planning_plugins:
  - ompl_interface/OMPLPlanner

request_adapters:
  - default_planning_request_adapters/ResolveConstraintFrames
  - default_planning_request_adapters/ValidateWorkspaceBounds
  - default_planning_request_adapters/CheckStartStateBounds
  - default_planning_request_adapters/CheckStartStateCollision

response_adapters:
  - default_planning_response_adapters/AddTimeOptimalParameterization
  - default_planning_response_adapters/ValidateSolution
  - default_planning_response_adapters/DisplayMotionPath

arm:
  default_planner_config: RRTConnect
  projection_evaluator: joints(joint1,joint2)
  longest_valid_segment_fraction: 0.005
```

主な設定上の注意点：

|設定項目|値|説明|
|---|---|---|
|デフォルトプランナ|`RRTConnect`|双方向の急速探索ランダムツリーで、ほとんどのシナリオに適しています|
|Projection evaluator|`joints(joint1,joint2)`|サンプリング空間の射影次元で、プランニング効率に影響します|
|Longest valid segment fraction|`0.005`|衝突チェックの補間粒度。小さいほど安全ですが遅くなります|

リクエストアダプタチェーン（request_adapters）は、プランニング前に次の 4 つを行います：

1. `ResolveConstraintFrames` — 制約フレームをプランニングフレームに揃える
2. `ValidateWorkspaceBounds` — 目標がワークスペース境界内にあることを検証する
3. `CheckStartStateBounds` — 開始状態が関節リミット内にあることを確認する
4. `CheckStartStateCollision` — 開始状態が衝突していないことを確認する

レスポンスアダプタチェーン（response_adapters）は、プランニング後に次の 3 つを行います：

1. `AddTimeOptimalParameterization` — 軌道に時間パラメータ（速度・加速度）を付与する
2. `ValidateSolution` — 軌道が制約を満たしているか検証する
3. `DisplayMotionPath` — RViz で軌道をプレビュー表示する

`pick_place` デモは、障害物を考慮したプランニングの流れを完全に示します：オブジェクトを追加 → 把持姿勢までのプランニング（衝突回避）→ オブジェクトをアタッチ → 設置姿勢までのプランニング（オブジェクトはアームと一緒に動き、引き続き衝突回避）→ オブジェクトをデタッチ → シーンをクリア。

## 34.8 軌道の実行

MoveIt 2 がプランニングした軌道は、コントローラを介してハードウェアに送信し実行する必要があります。シミュレーションと実機では、使用するコントローラ設定が異なります。

**シミュレーション環境**（`moveit_controllers.yaml`）

```yaml
moveit_simple_controller_manager:
  controller_names:
    - rebotarm_controller
    - gripper_controller

  rebotarm_controller:
    action_ns: follow_joint_trajectory
    type: FollowJointTrajectory
    default: true
    joints: [joint1, joint2, joint3, joint4, joint5, joint6]

  gripper_controller:
    action_ns: follow_joint_trajectory
    type: FollowJointTrajectory
    default: false
    joints: [gripper_joint1, gripper_joint2]
```

シミュレーションでは、`rebotarm_controller` と `gripper_controller` はどちらも `ros2_control` のモックハードウェアコントローラであり、軌道は仮想ハードウェア上で直接実行されます。

**実機環境**（`moveit_hardware_controllers.yaml`）

```yaml
moveit_simple_controller_manager:
  controller_names:
    - rebotarm

  rebotarm:
    action_ns: follow_joint_trajectory
    type: FollowJointTrajectory
    default: true
    joints: [joint1, joint2, joint3, joint4, joint5, joint6]
```

実機用設定には `rebotarm` コントローラが 1 つだけあり、`reBotArmController` の `/rebotarm/follow_joint_trajectory` アクションを指しています。実機では、グリッパは `follow_joint_trajectory` ではなく、別の `/rebotarm/gripper/command` アクション（`GripperCommand` 型）で制御されます。

軌道実行の許容誤差：

```yaml
trajectory_execution:
  allowed_execution_duration_scaling: 1.2   # allow 20% longer execution time
  allowed_goal_duration_margin: 0.5          # extra 0.5s wait after arrival
  allowed_start_tolerance: 0.05              # start-state deviation tolerance 0.05 rad
  execution_duration_monitoring: true        # enable execution time monitoring
```

実機での実行フロー：

1. `move_group` が `RobotTrajectory` をプランニングする
2. `/execute_trajectory` アクションを通じて軌道を `MoveItSimpleControllerManager` に送信する
3. コントローラマネージャが軌道を `follow_joint_trajectory` ゴールに変換し、`reBotArmController` の

`/rebotarm/follow_joint_trajectory`

4. `reBotArmController` が内部で軌道を実行する（検証 → pos_vel モード → 時間付き送出 → 到達チェック）
5. 実行結果が `move_group` に返される

実行が失敗した場合（タイムアウト、到達誤差が大きすぎるなど）、`move_group` はエラーコードを返し、デモスクリプトはそれに基づいて中止するかどうかを判断します。

<a id="demos"></a>

## 34.9 デモの実行

### 長方形描画デモ

まず MoveIt のシミュレーション環境を起動し、別のターミナルを開いて次を実行します：

```bash

#RS real robot
#Terminal 1:
cd /home/robot/reBotArmController_ROS2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=false
#Terminal 2:
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs
#Terminal 3:
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=rs
#Before the real robot, make sure the area around the arm is clear and the emergency stop works. demo.launch.py is simulation—do not run it together with the real bringup.
```

```bash
#DM real robot
#Terminal 1:
cd /home/robot/reBotArmController_ROS2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=dm use_rviz:=false
#Terminal 2:
ros2 launch rebotarm_moveit_config hardware.launch.py model:=dm
#Terminal 3:
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=dm
#Before the real robot, make sure the area around the arm is clear and the emergency stop works. demo.launch.py is simulation—do not run it together with the real bringup.
```

`draw_square` は `gripper_tcp` を制御して長方形の 4 つの頂点を順に訪問させ、IK・軌道プランニング・実行チェーンが正しく動作しているかを検証します。デフォルトパラメータは `src/rebotarm_moveit_demos/config/draw_square.yaml` にあります。

### ピック＆プレースデモ

`pick_place` は、把持対象オブジェクトをプランニングシーンに追加し、その後グリッパを開く → 把持姿勢へ移動 → グリッパを閉じる → オブジェクトをアタッチ → 設置姿勢へ移動 → オブジェクトを解放、という一連の動作を行います。デフォルトパラメータは `src/rebotarm_moveit_demos/config/pick_place.yaml` にあります。

実機で実行する前に、グリッパの開閉方向とリミットを必ず確認してください。シミュレーションのグリッパ関節位置と、実機ハードウェアのグリッパモータ位置は、別々のパラメータセットです：

|パラメータ|シミュレーション値|ハードウェア値|
|---|---|---|
|グリッパ全開|`0.045`（片側、rad）|`-5.0`（モータ位置）|
|グリッパ全閉|`0.0`（片側、rad）|`0.0`（モータ位置）|

```bash
#RS real robot
#Terminal 1:
cd /home/robot/reBotArmController_ROS2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=false
#Terminal 2:
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs
#Terminal 3:
ros2 launch rebotarm_moveit_demos pick_place.launch.py
```

```bash
#DM real robot
#Terminal 1:
cd /home/robot/reBotArmController_ROS2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=dm use_rviz:=false
#Terminal 2:
ros2 launch rebotarm_moveit_config hardware.launch.py model:=dm
#Terminal 3:
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=dm
```

**実機で実行する前に、アーム周辺に障害物がないことと、非常停止が動作することを必ず確認してください。`demo.launch.py` はシミュレーション用です — 実機の bringup と同時に実行しないでください。**

## 34.10 FAQ

### MoveIt のプランニングが失敗した場合は？

次の点を確認してください：

- 開始関節状態がリミット内にあるか（`CheckStartStateBounds` アダプタがエラーを報告します）
- 開始状態がシーン内オブジェクトと衝突していないか（`CheckStartStateCollision` アダプタがエラーを報告します）
- 目標姿勢がワークスペース内にあるか（`ValidateWorkspaceBounds` アダプタがエラーを報告します）
- IK が目標を解けるかどうか（`ik_timeout` はデフォルト 5 秒。延長可能）
- プランニング時間が十分かどうか（`planning_time` はデフォルト 5 秒。延長可能）

### RViz に MotionPlanning プラグインが表示されない？

`demo.launch.py` が起動しており、RViz 設定ファイルで `moveit.rviz` が読み込まれていることを確認してください。RViz を手動で開いた場合は、MotionPlanning ディスプレイを手動で追加する必要があります。

### シミュレーションでは動くのに、実機では失敗する？

`hardware.launch.py` が `/joint_states` を `/<arm_namespace>/joint_states` に正しくリマップしているか確認してください。また、`reBotArmController` が起動しており有効になっていることを確認してください。

最初の軌道ポイントの偏差は `0.10 rad` 未満、最終到達時の偏差は `0.03 rad` 未満である必要があります。

### joint6 が回り過ぎる？

IK は複数の解を返すことがあり、その結果 `joint6` が大きく回転してしまうことがあります。`draw_square` は、代替ヨー角を提供する `tcp_yaw_offsets` パラメータによってこれを軽減しています。カスタムアプリケーションでは、IK 解の後に関節変化量が最小の解を選択できます。

### 実機でグリッパの方向が逆になっている？

`pick_place.yaml` 内の `hardware_open_gripper_position` と `hardware_closed_gripper_position` を確認してください。B601-DM のデフォルトは、開くときが `-5.0`、閉じるときが `0.0` です。モータの回転方向が逆であれば、この 2 つの値を入れ替えてください。

{/* 注：この章の一部は Doubao AI の助けを借りて作成されました。 */}

</div>
