---
description: "Seeed Physical AI Beginner's Course 第36章 — MuJoCo で reBot Arm を動かす：MuJoCo 開発環境のインストール、MJCF モデル構造の読み取り、ROS2 パッケージを通じた reBot Arm モデルのインポート、フルシミュレーションの起動と ROS2 スライダー GUI からの関節駆動。"
title: 第36章 - MuJoCo で reBot Arm を動かす
hide_title: true
keywords:
  - reBot
  - ロボットアーム
  - MuJoCo
  - MJCF
  - ROS2
  - B601-RS
  - B601-DM
  - コース
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/rebot_physical_ai_course_chapter_36
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/ja/robotics/rebot_physical_ai_course_chapter_36/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 8 · 第36章 · 実践</span>
    <h2>36. MuJoCo で reBot Arm を動かす</h2>
    <p>
      Seeed Physical AI Beginner's Course 第36章 — MuJoCo で reBot Arm を動かす：MuJoCo 開発環境のインストール、MJCF モデル構造の読み取り、ROS2 パッケージを通じた reBot Arm モデルのインポート、フルシミュレーションの起動と ROS2 スライダー GUI からの関節駆動。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章の概要</a>
      <a href="#install">MuJoCo をインストール</a>
      <a href="#mjcf">MJCF モデル</a>
      <a href="#import">アームをインポート</a>
    </div>
  </div>
</section>

第35章ではシミュレーション理論を扱いましたが、本章はハンズオンです。目標はシンプルで、MuJoCo 上で reBot Arm を動かし、その動きを観察し、モデル・関節・制御コマンドの関係を理解することです。

学習目標：ユーザーが MuJoCo で reBot Arm の初回実行を完了し、ロボットモデルと

関節および制御コマンドの関係を理解できるようにすること。

<a id="overview"></a>

## 36.1 MuJoCo 開発環境のインストール

MuJoCo の Python バインディングは pip でインストールします。C ライブラリのコンパイルは不要です。reBot Arm のワークスペース

では、Python 依存関係を管理するために仮想環境（`.venv`）を使用しており、その中に MuJoCo をインストールします。

**方法 1: ワークスペース内蔵の仮想環境を使う（推奨）**

```bash
#RS:
cd ~/ReBot_Arm_DigitalTwin_RS
source scripts/rs_env.sh
python3 -c "import mujoco; print(mujoco.__version__)"

#DM:
cd ~/ReBot_Arm_DigitalTwin_DM/reBotArmController_ROS2-main
source scripts/source_rebotarm_env.sh
python3 -c "import mujoco; print(mujoco.__version__)"
```

出力が `3.10.0` のようになっていれば、MuJoCo の準備は完了です。`source_rebotarm_env.sh` は ROS2、仮想環境、PYTHONPATH を自動的に読み込みます。以降のコマンドはすべて、最初にこれを source する必要があります。

**方法 2: 手動インストール**

ワークスペースの仮想環境内にいない場合は、直接 pip install できます：

```bash
pip3 install mujoco
#MuJoCo 3.x is a pure pip package with built-in binary libraries; no extra system dependencies needed. After installation, `import mujoco` and `mujoco.viewer` are ready to use.
```

### mujoco インストールの検証

```bash
python3 -c "
import mujoco
print('MuJoCo version:', mujoco.version)
print('GPU rendering:', mujoco.GL_CONTEXT_BACKENDS if hasattr(mujoco, 'GL_CONTEXT_BACKENDS') else 'auto')
"
```

### 期待される結果

- **成功**: 環境が正しく構成されていれば、次のような出力が表示されます（バージョン番号は異なる場合があります）:

```bash
MuJoCo version: 3.2.0
GPU rendering: ['egl', 'glfw']
```

- または `GPU rendering: auto`（コンパイルオプションによって異なります）。
- **失敗**: `mujoco` がインストールされていない、またはパスが設定されていない場合は `ModuleNotFoundError` が発生し、インストールに問題があることを示します。

<a id="mjcf"></a>

## 36.2 MJCF モデル構造の理解

MJCF（MuJoCo XML）は MuJoCo のネイティブなモデルフォーマットです。MJCF ファイルは、次のトップレベル要素から構成されます：

|要素|役割|reBot Arm における具現化|
|---|---|---|
|`<compiler>`|コンパイルオプション：角度単位、座標系、メッシュパス|`angle="radian" coordinate="local" meshdir="../meshes"`|
|`<option>`|物理パラメータ：タイムステップ、重力、ソルバ|`timestep="0.001" gravity="0 0 -9.81"`|
|`<visual>`|レンダリングパラメータ：ライト、フォグ、グローバルビュー|`headlight`, `azimuth="135"`|
|`<asset>`|リソース定義：メッシュ、マテリアル、テクスチャ|10 個の STL メッシュ + 複数のマテリアル|
|`<default>`|デフォルト値：関節ダンピング、ジオム衝突|`damping="0.8" armature="0.01"`|
|`<worldbody>`|ワールドボディ：地面、ライト、カメラ、ロボット|テーブル、オブジェクト、アームの運動学チェーン|

reBot Arm の MJCF ファイルは次の場所にあります：

```bash
RS version (rebotarm_mujoco_rs package):
src/rebotarm_mujoco_rs/models/
  rs_arm.xml                   # physics model (STL mesh + full inertia + 7 actuators)
  rs_grasp_scene.xml            # grasping scene (with objects)
DM version (rebotarm_mujoco package):
src/rebotarm_mujoco/models/
  rebotarm_b601_stl.xml        # physics model (STL mesh + full inertia)
  rebotarm_b601_kinematic.xml  # kinematics model (simplified geometry + no inertia)
  rebotarm_b601_stl.xml         # physics model (STL mesh + full inertia, with scene objects)
  rebotarm_b601_kinematic.xml   # kinematics model (simplified geometry + no inertia)
  rebotarm_b601_colored.xml     # colored model (multi-material STL)
  simple_rebotarm.xml           # simplified model (primitive geometries)
```

2 つのモデルは、同じ運動学構造（関節名、軸、制限）を共有しています。違いは次のとおりです：

|特徴|STL モデル|運動学モデル|
|---|---|---|
|ビジュアル|STL メッシュ（詳細）|カプセル／球／シリンダー（簡略化）|
|慣性|すべてのリンクに定義|ほとんど省略|
|衝突|グリッパーにボックス衝突あり|衝突なし|
|timestep|0.001 s|0.002 s|
|用途|物理シミュレーション、real2sim|軽量な可視化|

本章では、見た目が良く物理シミュレーションもサポートするため、STL モデルを使用します。

<a id="import"></a>

## 36.3 MuJoCo への reBot Arm モデルのインポート

### ROS2 パッケージのビルド

```bash
#RS:
cd ~/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
colcon build --symlink-install
source install/setup.bash

#DM:
cd ~/ReBot_Arm_DigitalTwin_DM/reBotArmController_ROS2-main
source /opt/ros/jazzy/setup.bash
colcon build --symlink-install
source install/setup.bash
```

ビルド後、MuJoCo パッケージの share ディレクトリには、モデルファイルと STL メッシュが含まれます：

```bash
# Verify the share directory (RS)
ros2 pkg prefix rebotarm_mujoco_rs
# output: ~/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/install/rebotarm_mujoco_rs
ls $(ros2 pkg prefix rebotarm_mujoco_rs)/share/rebotarm_mujoco_rs/models/
# meshes/  rs_arm.xml  rs_grasp_scene.xml

# Verify the share directory (DM)
ros2 pkg prefix rebotarm_mujoco
ls $(ros2 pkg prefix rebotarm_mujoco)/share/rebotarm_mujoco/models/
# rebotarm_b601_stl.xml  rebotarm_b601_kinematic.xml  rebotarm_b601_colored.xml  simple_rebotarm.xml
```

#### launch から起動

```bash
#RS:
ros2 launch rebotarm_mujoco_rs mujoco_rs.launch.py use_viewer:=true
#DM:
ros2 launch rebotarm_mujoco real2sim.launch.py
```

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-36/ch36-01.png" alt="MuJoCo ビューア内の reBot Arm 把持シーン" />
</div>

### ROS2 launch から起動（フル環境付き）

```bash
#RS:
./scripts/start_rs_sim.sh
#DM:
./rebotarm start sim
or call the script directly:
~/ReBot_Arm_DigitalTwin_DM/reBotArmController_ROS2-main/scripts/start_rebot_mujoco_all.sh
```

### ROS2 ジョイントスライダー GUI による制御

reBot Arm には、各関節をグラフィカルインターフェースから制御するための Tkinter ジョイントスライダー GUI（joint_slider_gui.py）が用意されています：

#### 1. 先にシミュレーションを起動する

```bash
#1. First start the sim (full physics simulation)
#RS:
cd ~/ReBot_Arm_DigitalTwin_RS
./scripts/start_rs_sim.sh
#DM:
cd ~/ReBot_Arm_DigitalTwin_DM
./rebotarm start sim
```

#### 2. もう一つターミナルを開く

```bash
#The slider GUI defines 7 joint controls:
#RS:
source /opt/ros/jazzy/setup.bash
source ~/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/install/setup.bash
ros2 launch rebotarm_mujoco_rs joint_slider_gui.launch.py

#DM:
source /opt/ros/jazzy/setup.bash
source ~/ReBot_Arm_DigitalTwin_DM/reBotArmController_ROS2-main/install/setup.bash
ros2 launch rebotarm_mujoco joint_slider_gui.launch.py
```

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-36/ch36-02.png" alt="ROS2 ジョイントスライダー GUI からシミュレーションアームを駆動する様子" />
</div>

<a id="faq"></a>

## 36.4 FAQ

**Q1: MuJoCo ビューアが黒い画面になったり、開いた直後にクラッシュします。どうすればよいですか？**

これは通常、GPU レンダリングの問題です。レンダリングバックエンドを設定してみてください：

```bash
export MUJOCO_GL=egl    # use EGL (recommended, no display needed)
export MUJOCO_GL=glfw    # use GLFW (requires a desktop environment)
export MUJOCO_GL=osmesa  # use software rendering (slowest but most compatible)
```

ヘッドレスサーバー（例：SSH 経由）では、`egl` または `osmesa` を使用してください。

**Q2: MJCF を読み込むときに "mesh file not found" と表示されます。どうすればよいですか？**

MJCF では、`meshdir="../meshes"` は相対パスです。別のディレクトリからスクリプトを実行すると、

メッシュファイルが見つからない場合があります。解決策：

1. ROS2 パッケージをビルドした後、share ディレクトリから読み込む（推奨）：ros2 pkg prefix rebotarm_mujoco_rs（RS）または ros2 pkg prefix rebotarm_mujoco（DM）
2. あるいは、必ず models/ ディレクトリからスクリプトを実行する（その親ディレクトリに meshes/ が含まれます）
3. RS の mujoco_sync.py はメッシュパスを自動的に解決しますが、DM は install ディレクトリから読み込む必要があります

**Q3: ジョイントスライダー GUI をドラッグしても、MuJoCo 内のアームが動きません。どうすればよいですか？**

次の 3 つの接続を確認してください：

1. フェイクドライバは動作していますか？RS: ros2 topic echo /rebotarm_rs/joint_states --once; DM: ros2 topic echo /rebotarm/joint_states --once
2. sync ノードは正しいトピックを購読していますか？RS はデフォルトで /rebotarm_rs/joint_states を購読し、DM はデフォルトで /rebotarm/joint_states を購読します
3. ビューアは開いていますか？ターミナルには sync ノードが ready であることが表示されているはずです

トピック名が一致しない場合は、パラメータで指定します：

```bash
RS: REAL2SIM_JOINT_STATE_TOPIC=/rebotarm_rs/joint_states ./scripts/start_rs_sim.sh
DM: REAL2SIM_JOINT_STATE_TOPIC=/rebotarm/joint_states ./rebotarm start sim
```

**Q4: グリッパーの片側しか動きません。どうすればよいですか？**

RS: `equality` 制約が正しく設定されているか確認してください（`joint_left` と `joint_right` は `joint7` に追従する必要があります）。

DM: `finger_left` と `finger_right` の両方がコマンドを受信しているか確認してください。`finger_right` に対する `target` なしで `finger_left` のみが送信されている場合、片側しか動きません。

**Q5: 物理グラスプモードで物体が飛んでいってしまいます。どうすればよいですか？**

PD パラメータが強すぎる可能性があります。`arm_kp` と `arm_kd` を下げてみてください：

```bash
RS: ros2 launch rebotarm_mujoco_rs mujoco_rs.launch.py simulation_mode:=physics arm_torque_limit:=10.0
DM: ros2 launch rebotarm_mujoco mujoco_physics_grasp.launch.py arm_torque_limit:=10.0
```

トルク制限をデフォルトの 30.0 から 10.0 に下げると、関節トルクが過大になって物体を弾き飛ばしてしまうことを防げます。また、`control_hz` を下げて制御ループの攻撃性を抑えることもできます。

---

</div>
