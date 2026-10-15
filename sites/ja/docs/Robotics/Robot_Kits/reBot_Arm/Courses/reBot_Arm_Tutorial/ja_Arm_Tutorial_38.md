---
description: "Seeed Physical AI Beginner's Course 第38章 — Isaac Sim で reBot Arm を動かす：Isaac Sim のインストールと起動、シーン構造、USD の基礎、URDF Importer によるアームのインポート、リンク・ジョイント・ビジュアル・コリジョンの確認、Articulation Root と Joint Drive の設定、剛性と減衰、グリッパのリンク構造、床と作業台、Python 制御、そして 4 つの練習デモ。"
title: 第38章 - Isaac Sim で reBot Arm を動かす
hide_title: true
keywords:
  - reBot
  - ロボットアーム
  - Isaac Sim
  - USD
  - アーティキュレーション
  - ジョイントドライブ
  - グリッパ
  - シミュレーション
  - コース
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_38
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/ja/rebot_physical_ai_course_chapter_38/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 8 · 第38章 · 実践</span>
    <h2>38. Isaac Sim で reBot Arm を動かす</h2>
    <p>
      Seeed Physical AI Beginner's Course 第38章 — Isaac Sim で reBot Arm を動かす：Isaac Sim のインストールと起動、シーン構造、USD の基礎、URDF Importer によるアームのインポート、リンク・ジョイント・ビジュアル・コリジョンの確認、Articulation Root と Joint Drive の設定、剛性と減衰、グリッパのリンク構造、床と作業台、Python 制御、そして 4 つの練習デモ。
    </p>
    <div className="hero-actions">
      <a href="#overview">章の概要</a>
      <a href="#usd">USD の基礎</a>
      <a href="#import">アームをインポート</a>
      <a href="#demos">練習デモ</a>
    </div>
  </div>
</section>

この章では、NVIDIA Isaac Sim における reBotArm-RS アームのモデルインポートと基本制御について説明します。Isaac Sim はシーン形式として USD（Universal Scene Description）を使用しており、MuJoCo の MJCF とは根本的に異なります。ジョイント名のマッピング、グリッパの単位変換、通信周波数、安全設計については第39章で詳しく扱うため、ここでは繰り返しません。この章では Isaac Sim 固有の概念と操作のみに焦点を当てます。

> ユーザーが Isaac Sim 上で reBot Arm のモデルインポート、Articulation の設定、および基本的なジョイント制御を習得できるようにします。
>
>

<a id="overview"></a>

## 38.1 Isaac Sim のインストールと起動

Isaac Sim は NVIDIA Omniverse プラットフォームをベースとしており、RTX GPU を必要とします。実行方法は 2 通りあります：

1. **デスクトップアプリケーション**：NVIDIA の Web サイトから Isaac Sim インストーラをダウンロードし、GUI を直接起動します。
2. **Python スクリプト**：`isaaclab` または `isaacsim` Python パッケージを通じて、ターミナルからヘッドレスで実行します。

起動後、Isaac Sim のインターフェースが表示されます。左側が Stage Tree、右側が Property パネル、

中央が 3D ビューポートです。

```bash
# Launch via a Python script (Isaac Sim 4.x+)
./python.sh my_script.py
```

重要なポイント：Isaac Sim は本質的には Omn Kit アプリケーションであり、すべての機能は Python API（`omni.isaac.*` / `isaacsim.*`）を通じて公開されています。GUI 操作とスクリプト操作は等価です。

## 38.2 Isaac Sim のシーン構造を理解する

Isaac Sim のシーンは **Stage**（USD ステージ）をルートとし、すべてのオブジェクトは **Prim**（シーンプリミティブ）です。

次の 3 つのレベルを理解すれば十分です：

```text
Stage (root)
  └── Prim (an object, e.g., arm, ground, workbench)
        └── child Prims (e.g., each link)
              └── Properties (e.g., joint, mesh, material)
```

MuJoCo との違い：

|概念|MuJoCo (MJCF)|Isaac Sim (USD)|
|---|---|---|
|シーンルート|`<mujoco>`|Stage|
|オブジェクト|`<body>`|Prim|
|ジョイント|`<joint>`|Joint Prim（リンク配下に配置）|
|アクチュエータ|`<actuator>`|Joint Drive（USD プロパティ）|
|コリジョン|`<geom confluence>`|Collision API（メッシュに付与）|

MuJoCo ではアクチュエータは独立した要素として定義されますが、Isaac Sim では「Drive」がジョイント上の Drive プロパティとして直接付与されます。これが両エンジン間の最も根本的なアーキテクチャの違いです。

<a id="usd"></a>

## 38.3 USD モデルの基礎

USD（Universal Scene Description）は Pixar が開発したシーン記述フォーマットであり、Isaac Sim は URDF/MJCF の代わりにこれを使用します。

### USD と URDF の比較

このリポジトリにはすでに RS アームの URDF ファイルが含まれています：

Isaac Sim は URDF を直接使用せず、URDF Importer を通じて USD に変換します。

|機能|URDF|USD|
|---|---|---|
|フォーマット|XML|バイナリ / テキスト|
|レイヤーによるオーバーライド|非対応|Layer 参照とオーバーライドをサポート|
|コリジョン / ビジュアルの分離|`<visual>` / `<collision>` タグ|Collision API / Mesh API|
|ジョイントドライブ|なし（外部コントローラが必要）|Joint Drive プロパティを内蔵|
|物理エンジンとの結合|非結合|PhysX プロパティをバインド可能|

### 重要な USD の概念

- **Reference**：ある USD ファイルが別のファイルを参照するもので、MuJoCo の `<include>` に似ています。
- **Override**：参照元ファイルを変更せずに、その上にプロパティを上書きします。
- **Payload**：遅延ロードされる参照で、大規模シーンの最適化に使用されます。
- **Variant**：同一モデルの異なるバリアント（例：「グリッパあり」と「グリッパなし」）。

reBot Arm の構造の概要（URDF 解析結果）：

```text
base_link
  └── joint1 (revolute, -2.8~2.8 rad) → link1
        └── joint2 (revolute, 0~3.14) → link2
              └── joint3 (revolute, 0~3.14) → link3
                    └── joint4 (revolute, -1.57~1.57) → link4
                          └── joint5 (revolute, -1.57~1.57) → link5
                                └── joint6 (revolute, -3.14~3.14) → link6
                                      └── j_gripper_end (fixed) → gripper_end
                                            ├── gripper_joint1 (prismatic, 0~0.05) → gripper_left
                                            └── gripper_joint2 (prismatic, 0~0.0715) → gripper_right
```

6 つの回転ジョイントと 1 つの固定ジョイントでエンドエフェクタが接続され、2 つの直動ジョイントが左右のグリッパフィンガを駆動します。

<a id="import"></a>

## 38.4 reBot Arm の USD をインポートする

### URDF Importer

Isaac Sim には URDF Importer ツールが組み込まれており、メニューパスは次のとおりです：

```text
Isaac Utils → Workflows → URDF Importer
```

または Python API を使用します：

```python
from isaacsim.import_config.urdf import ImportConfig
from omni.importer.urdf import _urdf

import_config = ImportConfig()
import_config.merge_fixed_joints = False      # keep the fixed joint structure
import_config.make_default_prim = True
import_config.create_physics_scene = False     # do not recreate if a scene already exists
import_config.fix_base = True                 # fix the arm base
import_config.default_drive_type = _urdf.UrdfJointTargetType.JOINT_DRIVE_POSITION

_urdf.import_urdf(urdf_path, output_usd_path, import_config)
```

### インポート時の重要な選択肢

1. **merge_fixed_joints**：`j_gripper_end` 固定ジョイントを保持するには False に設定します。そうしないと

`gripper_end` が `link6` にマージされます。保持した方が直感的で、マージした方が効率的です。

2. **fix_base**：`base_link` をワールドに固定して、アームが重力で落下しないようにするには True に設定します。
3. **default_drive_type**：位置ドライブ（POSITION）を選択し、インポート後に目標角度を直接送信できるようにします。

### メッシュファイルのパス

URDF から参照される STL メッシュは `meshes_rs/` ディレクトリ内にあります。Importer は `package://rebotarm_bringup/description/meshes_rs/` プレフィックスを自動的に解決します。インポートに失敗する場合は、`ROS_PACKAGE_PATH` 環境変数を確認するか、メッシュパスを手動で絶対パスに変更してください。

## 38.5 リンクとジョイントを確認する

インポート後、Stage Tree で構造を確認します：

```text
/rebotarm_rs          ← root Prim
  /base_link
    /link1
      /link2
        ...
          /gripper_end
            /gripper_left
            /gripper_right
```

原理：Isaac Sim は URDF の `<joint>` を USD の Joint Prim に変換します。回転ジョイントは `PhysicsRevoluteJoint` に、直動ジョイントは `PhysicsPrismaticJoint` に、固定ジョイントは `PhysicsFixedJoint` になります。ジョイントの軸、リミットなどの属性は USD プロパティに直接マッピングされます。

## 38.6 ビジュアルとコリジョンを確認する

URDF の `<visual>` と `<collision>` は、USD では異なる API で注釈付けされます：

```python
from pxr import UsdPhysics

# check collision bodies
for prim in stage.Traverse():
    if prim.HasAPI(UsdPhysics.CollisionAPI):
        print("Collision:", prim.GetPath())

# check visual meshes
for prim in stage.Traverse():
    if prim.IsA(UsdGeom.Mesh):
        print("Mesh:", prim.GetPath())
```

原理：Isaac Sim は MuJoCo のように `<geom contype="0" conaffinity="0">` で純粋なビジュアルボディをマークしません。USD では、すべてのメッシュはデフォルトでレンダリング可能であり、`CollisionAPI` を持つメッシュのみが物理衝突に参加します。つまり、同じメッシュがビジュアルとコリジョンの両方になり得るし、純粋なビジュアルにもなり得ます。

## 38.7 Articulation Root を設定する

これは Isaac Sim における最も重要な概念であり、MuJoCo には直接対応するものがありません。

### Articulation Root とは

Articulation Root は PhysX に対して「これらのジョイントとリンクは 1 つの多関節システムを構成しているので、

それらを拘束で接続された独立した剛体として扱うのではなく、Featherstone アルゴリズムで一括して解くように」と指示します。

```text
Without an Articulation Root:
  base_link ←constraint→ link1 ←constraint→ link2 ...
  each parent-child link pair is a separate constraint solver; with many joints this becomes unstable.

With an Articulation Root:
  [Articulation Root] → base_link → link1 → link2 → ...
  the whole kinematic chain is solved in one pass with the Featherstone algorithm, numerically stable.
```

### 設定方法

`base_link` に `PhysicsArticulationRootAPI` を追加します：

```python
from pxr import UsdPhysics

base_link = stage.GetPrimAtPath("/rebotarm_rs/base_link")
UsdPhysics.ArticulationRootAPI.Apply(base_link)
```

原理：Articulation Root は運動学チェーンのルートリンクに配置する必要があります。reBot Arm の場合、それは *`base_link`* です。誤ったリンクに配置すると、PhysX はチェーンを途中で切り、下流のジョイントは駆動を失います。URDF Importer は通常 Articulation Root を自動的に追加しますが、USD を手動で編集した場合は、まだ存在しているか確認してください。

## 38.8 Joint Drive を設定する

### Drive の原理

MuJoCo では *`<motor>`* や *`<position>`* アクチュエータを使用し、駆動トルクは Python で外部計算します。Isaac Sim の Drive は **ジョイントに内蔵された PD コントローラ** であり、トルクは PhysX 内部で計算されます：

```bash
tau = kp * (target_pos - current_pos) + kv * (target_vel - current_vel) + feedforward
#This is almost the same PD control formula as MuJoCo's physics mode; the difference is that Isaac Sim puts the PD loop inside the engine, while MuJoCo computes it in Python and writes it into `data.ctrl`.
```

### 設定方法

```python
from pxr import UsdPhysics

joint_path = "/rebotarm_rs/base_link/link1/joint1"
joint = UsdPhysics.Joint.Get(stage, joint_path)

drive = UsdPhysics.DriveAPI.Get(joint, "angular")  # revolute joints use angular, prismatic use linear
drive.GetTargetPositionsAttr().Set([0.0])    # target angle
drive.GetTargetVelocitiesAttr().Set([0.0])  # target velocity
drive.GetStiffnessAttr().Set(80.0)          # kp
drive.GetDampingAttr().Set(5.0)             # kv
drive.GetMaxForceAttr().Set(36.0)           # torque limit
```

### 実機ロボットのゲインとの対応関係

Isaac Sim Drive の `Stiffness` と `Damping` は、実機アームの MIT モードにおける `kp` と `kd` に対応します。

実機ロボットの設定値をそのまま使用できます（[rebotarm_hardware.yaml]/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/src/rebotarm_bringup/config/rebotarm_hardware.yaml を参照）:

```yaml
# Real-robot RS MIT gains
mit_kp: [80.0, 150.0, 150.0, 50.0, 50.0, 50.0]
mit_kd: [5.0, 10.0, 10.0, 5.0, 4.0, 4.0]
```

これらの値を各関節の Drive プロパティに入力すると、シミュレーション挙動は実機ロボットに近くなります。

## 38.9 関節の Stiffness と Damping の設定

Stiffness と Damping のチューニング原則：

1. **Stiffness が低すぎる**: 関節が柔らかく、目標角度に到達するのが遅く、負荷がかかると目に見えてたわみます。
2. **Stiffness が高すぎる**: 関節が硬すぎて振動しやすくなり、PhysX が数値的に不安定になります。
3. **Damping が低すぎる**: 目標に到達した後も振動し、オーバーシュートが顕著になります。
4. **Damping が高すぎる**: 動きが鈍く、シロップの中を動かしているような感覚になります。

推奨される初期値（実機ロボットに対応）：

|Joint|Stiffness (kp)|Damping (kd)|Max Force|
|---|---|---|---|
|joint1|80|5|36|
|joint2|150|10|36|
|joint3|150|10|36|
|joint4|50|5|14|
|joint5|50|4|14|
|joint6|50|4|14|

チューニング戦略：まず低い値から始めて振動がないことを確認し、その後応答が十分速くなるまで Stiffness を徐々に上げ、残留振動を消すために Damping を増やします。最初から高い値を使わないでください。

## 38.10 グリッパー連動機構の設定

### Isaac Sim における方法

Isaac Sim には等式制約がなく、連動には **Mimic Joint** を使用します。URDF の `<mimic>` タグはインポート時に変換されます：

```python
# The mimic in URDF (if the URDF does not have it, you need to add it manually in USD)
# <mimic joint="gripper_joint1" multiplier="1.43" offset="0"/>
```

現在の RS URDF には `<mimic>` タグがないため、インポート後に連動を手動で設定する必要があります。方法は 2 つあります：

**方法 1: PhysX Mimic Joint API**

```python
from pxr import UsdPhysics

left_joint = UsdPhysics.Joint.Get(stage, ".../gripper_joint1")
UsdPhysics.MimicAPI.Apply(left_joint)
mimic = UsdPhysics.MimicAPI(left_joint)
mimic.GetReferenceJointRel().SetTargetPath(".../gripper_joint2")
mimic.GetMultiplierAttr().Set(1.43)  # 0.0715 / 0.05 = 1.43
```

**方法 2: Python 制御で同期コマンドを送る**

Mimic API を使用しない場合は、制御コード内で 2 つのグリッパー関節の両方に同じターゲットを送るだけです：

```python
# The left and right gripper strokes differ: left 0-0.05m, right 0-0.0715m
# When sending commands, scale by each stroke ratio
left_target = target_ratio * 0.05
right_target = target_ratio * 0.0715
```

原理：MuJoCo の equality は物理エンジンレベルのハード制約であり、Isaac Sim の Mimic API もエンジンレベルの連動です。一方、方法 2 は制御レベルでのソフトウェア連動です。方法 1 の方が安定しており、方法 2 の方が柔軟です。

## 38.11 地面と作業台の追加

### 地面

Isaac Sim には地面生成ツールが組み込まれています：

```python
from isaacsim.core.api import World

world = World(stage_units_in_meters=1.0)
world.scene.add_default_ground_plane()  # add a Z=0 ground collision plane
```

`add_default_ground_plane()` は CollisionAPI を持つ平面 Prim を生成します。デフォルトの摩擦係数は

0.5 です。MuJoCo では地面は `<geom type="plane"/>` ですが、Isaac Sim では衝突を持つ平面メッシュです。

### 作業台

作業台として Box を追加します：

```python
from isaacsim.core.api.objects import DynamicCuboid

table = DynamicCuboid(
    prim_path="/World/table",
    name="table",
    position=np.array([0.5, 0.0, 0.4]),  # table top height 0.4m
    scale=np.array([0.6, 0.6, 0.02]),     # 60cm x 60cm x 2cm
    color=np.array([0.5, 0.4, 0.3]),
)
```

### シンプルなタスク用オブジェクト

```python
red_cube = DynamicCuboid(
    prim_path="/World/red_cube",
    name="red_cube",
    position=np.array([0.5, 0.0, 0.42]),
    scale=np.array([0.03, 0.03, 0.03]),   # 3cm cube
    color=np.array([1.0, 0.0, 0.0]),
)
```

原理：Isaac Sim はオブジェクト Prim に衝突とダイナミクスのプロパティを直接付与します。`DynamicCuboid` は自動的に衝突ボディと剛体 API を作成し、`FixedCuboid` は剛体を持たない衝突ボディのみを作成します。これは、XML で `<geom contype>` と `<body>` を別々に記述しなければならない MuJoCo よりも簡潔です。

## 38.12 Python によるアーム制御

### Articulation API

Isaac Sim はアーム全体の制御インターフェースを `Articulation` クラスでラップしているため、関節ごとに操作する必要はありません：

```python
from isaacsim.core.api import World
from isaacsim.core.primitives import Articulation

world = World()
world.scene.add_default_ground_plane()

robot = Articulation(prim_path="/rebotarm_rs")
world.reset()

# get joint information
num_joints = robot.num_joints
joint_names = robot.get_dof_names()
```

原理：`Articulation` は内部で PhysX の Articulation API を呼び出し、すべての関節状態を一括で取得・設定します。これは MuJoCo が `data.qpos` と `data.ctrl` 配列を通じて関節を操作する方法に対応しますが、それを Python オブジェクトのインターフェースとしてラップしたものです。

<a id="demos"></a>

## 38.13 実践デモ

### デモ 1: reBot Arm USD の読み込み

**原理**：Isaac Sim が USD ファイルを読み込むと、Stage ツリーを構築し、PhysX は Articulation Root を持つ Prim サブツリーに対して関節剛体を作成します。ビジュアルメッシュはレンダリングレイヤーに、CollisionAPI を持つメッシュは物理レイヤーに接続されます。

```python
from isaacsim.core.api import World
from isaacsim.core.primitives import Articulation
import numpy as np

world = World(stage_units_in_meters=1.0)
world.scene.add_default_ground_plane()       # ground

# add the workbench
from isaacsim.core.api.objects import FixedCuboid
table = FixedCuboid(
    prim_path="/World/table", name="table",
    position=np.array([0.5, 0.0, 0.4]),
    scale=np.array([0.6, 0.6, 0.02]),
)

# add the task object
from isaacsim.core.api.objects import DynamicCuboid
cube = DynamicCuboid(
    prim_path="/World/red_cube", name="red_cube",
    position=np.array([0.5, 0.0, 0.42]),
    scale=np.array([0.03, 0.03, 0.03]),
    color=np.array([1.0, 0.0, 0.0]),
)

# load the arm (assuming the USD has been imported)
robot = Articulation(prim_path="/rebotarm_rs")
world.reset()

# verify the loading result
print("Number of joints:", robot.num_joints)
print("Joint names:", robot.get_dof_names())
```

**期待される結果**：3D ビューポートに、地面の作業台の上に立っているアームモデルが表示され、テーブルの上には赤いキューブが見えます。Stage Tree には base_link から gripper_right までの完全な階層が表示されます。

### デモ 2: 関節状態の読み取り

**原理**：`Articulation` は毎フレーム、PhysX から関節剛体の関節状態配列を読み取ります。位置と速度は PhysX 内部ソルバの出力であり、外部センサーから読み取られるものではありません。MuJoCo の `data.qpos` / `data.qvel` と同様に、これらはシミュレーション状態です。

```python
world.step(render=True)  # first advance one physics frame

# joint positions (radians)
positions = robot.get_joint_positions()
print("Joint positions:", positions)

# joint velocities
velocities = robot.get_joint_velocities()
print("Joint velocities:", velocities)

# joint names and count
joint_names = robot.get_dof_names()
print("Joint names:", joint_names)
print("Number of joints:", robot.num_joints)

# end-effector pose (world frame)
ee_position, ee_orientation = robot.get_local_pose()  # end link pose
```

**原理メモ**：`get_joint_positions()` は、`get_dof_names()` と同じ順序の NumPy 配列を返します。Articulation Root が、この関節剛体に属する関節を決定します。関節剛体の外側にある関節は読み取ることができません。

### デモ 3: 関節位置制御

**原理**：Drive の目標位置を設定すると、PhysX 内部の PD コントローラが毎フレームトルクを計算して関節を駆動します。ターゲットは一度送るだけでよく、到達プロセスはエンジンが自動的に完了します。これは、MuJoCo の physics モードで Python が毎フレーム PD トルクを計算して `data.ctrl` に書き込む方式とは異なり、Isaac Sim では PD ループをエンジン内部に組み込んでいます。

```python
# target pose (radians): zero all joints
target_positions = np.array([0.0, 0.0, 0.0, 0.0, 0.0, 0.0])

# Method 1: set the target through the Drive API
robot.set_joint_position_targets(target_positions)

# advance the simulation and let the PD controller drive to the target
for _ in range(100):
    world.step(render=True)

# check whether it has arrived
current = robot.get_joint_positions()
error = np.abs(current[:6] - target_positions)
print("Arrival error:", error)
```

また、ゼロ以外のターゲットを送って、アームを指定した姿勢に移動させることもできます：

```python
wave_pose = np.array([0.0, 0.5, 1.0, 0.0, 0.5, 0.0])  # raise the arm and wave
robot.set_joint_position_targets(wave_pose)
for _ in range(200):
    world.step(render=True)
```

**原理メモ**：`set_joint_position_targets` は Drive の目標位置プロパティを更新するだけで、

直接力を加えるわけではありません。実際のトルクは `Stiffness` と `Damping` によって決まり、到達速度はこれら 2 つのパラメータと

`Max Force` に依存します。

### デモ 4: グリッパー制御

**原理**：グリッパーの 2 つのプリズマティック関節（gripper_joint1 と gripper_joint2）はストロークが異なります（0.05 m と 0.0715 m）が、同期して動く必要があります。原理は、同じ開閉率を 2 つの関節の目標位置に同時にマッピングすることです。

```python
GRIPPER_LEFT_RANGE = 0.05      # gripper_joint1 stroke
GRIPPER_RIGHT_RANGE = 0.0715   # gripper_joint2 stroke

def set_gripper(robot, open_ratio: float):
    """open_ratio: 0=fully closed, 1=fully open"""
    open_ratio = max(0.0, min(1.0, open_ratio))
    left_target = open_ratio * GRIPPER_LEFT_RANGE
    right_target = open_ratio * GRIPPER_RIGHT_RANGE

    # assume the gripper joints come after the arm joints
    joint_names = robot.get_dof_names()
    arm_joints = 6  # the first 6 are arm joints

    positions = robot.get_joint_positions()
    positions[arm_joints]     = left_target    # gripper_joint1
    positions[arm_joints + 1] = right_target   # gripper_joint2
    robot.set_joint_position_targets(positions)

    for _ in range(50):
        world.step(render=True)

# open the gripper
set_gripper(robot, 1.0)

# close the gripper
set_gripper(robot, 0.0)

# half open
set_gripper(robot, 0.5)
```

**原理メモ**：ここでは制御レベルでのソフトウェア連動が物理的拘束の代わりをします。Mimic API が設定されている場合（38.10 の方法 1）、1 つの関節だけを制御すれば、もう一方は自動的に追従します。ここでの例はソフトウェア同期を用いており、より直感的で教育用途に適しています。

**2 本指同期の要点**

左右のグリッパのストロークは異なりますが、動きの向きは同じ（どちらも外側に開く）なので、同じ `open_ratio` を使って

それぞれのストローク上限をスケーリングします。もし 2 つの関節の軸方向が逆（片方が正、もう片方が負）であれば、符号反転も必要になります。

しかし reBot Arm の URDF では、両方のグリッパ関節の軸は `0 0 1` なので、方向は一致しています。

## 38.14 まとめ

Isaac Sim と MuJoCo のコアとなる概念上の違い：

1. **モデル形式**：USD が MJCF に代わり、階層的な参照とオーバーライドをサポートする。
2. **剛体リンク構造**：Articulation Root は Isaac Sim 固有の概念で、運動学チェーン全体を Featherstone アルゴリズムに渡して一括で解く。MuJoCo にはこのような概念はなく、すべてのボディは自然に 1 本のツリー内に存在する。
3. **駆動方式**：Drive は関節に内蔵された PD コントローラで、トルクを PhysX 内部で計算する。MuJoCo の `<motor>` アクチュエータはトルクを Python の外部で計算し、`data.ctrl` に書き込む。
4. **グリッパ連動**：Isaac Sim は Mimic API またはソフトウェア同期を使用し、MuJoCo は equality constraint を使用する。
5. **衝突アノテーション**：USD は CollisionAPI を用いて衝突ボディと純粋なビジュアルボディを区別し、MuJoCo は `contype` / `conaffinity` 属性を用いる。

これらの違いを理解すれば、第 39 章の関節マッピング、単位変換、通信、安全設計に関する内容を、そのまま Isaac Sim のシーンに適用できます。

---

</div>
