---
description: "Seeed Physical AI Beginner's Course 第35章 — ロボットシミュレーションをゼロから理解する：なぜシミュレーションはロボットにとってのフライトシミュレータなのか、3つのコア要素（モデル・環境・コントローラ）、ロボットモデルの Visual / Collision / Inertial 表現、関節・アクチュエータ・センサ、シミュレーションステップサイズと制御周波数の関係、URDF / MJCF / USD フォーマット、MuJoCo と Isaac Sim の比較、そしてデジタルツインまで。"
title: 第35章 - ロボットシミュレーションの基礎とプラットフォーム入門
hide_title: true
keywords:
  - reBot
  - ロボットアーム
  - シミュレーション
  - MuJoCo
  - Isaac Sim
  - MJCF
  - USD
  - デジタルツイン
  - コース
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_35
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/ja/rebot_physical_ai_course_chapter_35/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 8 · 第35章 · 理論</span>
    <h2>35. ロボットシミュレーションの基礎とプラットフォーム入門</h2>
    <p>
      Seeed Physical AI Beginner's Course 第35章 — ロボットシミュレーションをゼロから理解する：なぜシミュレーションはロボットにとってのフライトシミュレータなのか、3つのコア要素（モデル・環境・コントローラ）、ロボットモデルの Visual / Collision / Inertial 表現、関節・アクチュエータ・センサ、シミュレーションステップサイズと制御周波数の関係、URDF / MJCF / USD フォーマット、MuJoCo と Isaac Sim の比較、そしてデジタルツインまで。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章の概要</a>
      <a href="#elements">コア要素</a>
      <a href="#formats">URDF, MJCF, USD</a>
      <a href="#choose">シミュレータの選び方</a>
    </div>
  </div>
</section>

### このステージで必要なハードウェア

このステージで準備するものです。全ステージの完全な一覧は [第3章](/ja/rebot_physical_ai_course_chapter_3/) にあります。

**メイン制御ユニット**

| 項目 | 購入 | 数量 |
| :--- | :---: | :---: |
| [reComputer Robotics J4012](https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html) | 🛒 | 1 |
| [NVIDIA Jetson AGX Thor 128G](https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html) | 🛒 | 1 |

デスクトップまたはノート PC も必要です：Ubuntu 22.04、GTX 4080 以上で 12GB 以上の VRAM、16GB 以上の RAM。

**このステージ用**

| 項目 | 購入 | 数量 |
| :--- | :---: | :---: |
| [reBot Arm B601 DM/RS](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html) | 🛒 | 1 |


{/* TODO: 元のドキュメントではここに図（image 1.png）が表示されていますが、エクスポートされておらず、画像と添付ファイル/ フォルダにも存在しないため、ページを完成させるには図を再作成する必要があります。 */}
<a id="overview"></a>

## 35.1 なぜシミュレーションを使うのか？ — 「フライトシミュレータ」的な発想

ロボットシミュレーションは「見せ物」ではなく、現代ロボティクスにおける安全なテスト場です。

- **デバッグ時のリスクを低減**：実機アームが暴走すると装置を破壊したり人を傷つけたりする可能性がありますが、シミュレーションなら最悪でもモデルが吹き飛ぶ（物理エンジンが破綻する）だけです。
- **時間とコストの制約を突破**：実機アームの充電や修理を待つことなく、24時間365日アルゴリズムを回せますし、物理的な生産ラインを占有することもありません。
- **「完璧なラベル」を得る**：シミュレーションでは、各関節のトルク、各リンクにかかる力、エンドエフェクタの 6D 姿勢を絶対的な精度で把握できます。現実世界では高価なセンサが必要になる情報です。

reBot Arm にとって、シミュレーションはオプションではなく、デフォルトの開発パスです。ワークスペース内の `start_fake_bringup.sh` スクリプトは純粋なシミュレーション環境を起動します。モックのハードウェアインターフェースを使うことで、実機アームを接続せずに、関節制御から MoveIt2 の経路計画までの検証をすべて完了できます。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-35/ch35-01.png" alt="なぜシミュレーションを使うのか：デバッグリスク、コスト、ラベル" />
</div>

## 35.2 開発におけるシミュレーションの3つのコアな役割

|開発ステージ|シミュレーションが助けてくれること|
|---|---|
|アルゴリズム検証（運動学 / 動力学）|逆運動学（IK）アルゴリズムが収束するか、軌道計画が滑らかか、コントローラ（PID/MPC）が安定しているかをテストする。|
|Software-in-the-loop（SIL）テスト|高レベルの意思決定コード（例：VLA モデルの出力コマンド）は一切変更せず、低レベル通信インターフェースだけをシミュレートされた Topic に差し替え、ソフトウェアロジックがエンドツーエンドで動作するか検証する。|
|強化学習（RL）トレーニング|アームにシミュレーション内で何万回も「死んで」もらいながらポリシーを学習させ、ゼロコストで大量の学習データを得る（Sim2Real 転移）。|

<a id="elements"></a>

## 35.3 シミュレーションの3つのコア要素：モデル・環境・コントローラ

完全なシミュレーションシステムは、次の3つの部分から構成されており、どれも欠かすことはできません：

**ロボットモデル（Agent）**： 「自分がどんな見た目で、どれくらいの重さで、関節がどう回転するか」を記述します。

**環境**： 「自分がどこにいて、周りに何があるか」を記述します。（地面、テーブル、把持対象物、障害物）

**コントローラ**： 「どのように動くか」を記述します。（VLA ポリシー、軌道補間、低レベル PID）

一言で言えば：コントローラがトルク / 位置コマンドを出す -> モデルが環境内で動く -> センサが状態をコントローラにフィードバックし、閉ループを形成します。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-35/ch35-02.png" alt="3つのコア要素：ロボットモデル、環境、コントローラ" />
</div>

reBot Arm の MJCF モデルでは、この3つの部分がすべて具体的な形で現れます。ロボットモデル — `base_link` から始まり、入れ子になった `<body>` 要素を通じて完全な運動学チェーンを構築します：

```bash
base_link -> link1 -> link2 -> link3 -> link4 -> link5 -> link6 -> end_link
                                                              |- finger_left_link
                                                               `- finger_right_link
```

環境 — MJCF は完全な把持シーンを定義します：

```xml
<geom name="floor" type="plane" size="1.0 1.0 0.02" material="floor_mat"/>

<body name="task_table" pos="0.42 0 0.015">
  <geom name="task_table_top" type="box" size="0.30 0.26 0.015"
        contype="1" conaffinity="1" condim="6" friction="2.2 0.12 0.02"/>
</body>

<body name="red_cube" pos="0.34 -0.13 0.061">
  <freejoint/>
  <geom type="box" size="0.025 0.025 0.025" mass="0.04" contype="1" conaffinity="1"/>
</body>
```

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-35/ch35-03.jpg" alt="色付きタスクオブジェクトを含む MuJoCo の把持シーン" />
</div>

このシーンにはテーブル、3つの把持対象（赤い立方体、青いブロック、黄色い円柱）、そして mocap タイプの IK ターゲット球が含まれます。これらの環境要素によって、シミュレーションは単なる「アームの動きを眺める」だけではなく、完全な把持シーンの中でピック＆プレースのフローをテストできるようになります。

コントローラ — reBot Arm の MuJoCo シミュレーションには、2つの制御方式があります：

- `qpos` を直接設定する（運動学モード）：`real2sim_sync.py` が ROS の関節状態を `data.qpos` に書き込み、`mj_forward` を呼び出して運動学を補正します。力や動力学は一切関与しません。
- トルクを印加する（動力学モード）：`mujoco_torque_control.py` が `data.qfrc_applied` を通じて関節トルクを印加し、`mj_step` を呼び出して物理シミュレーションを進めます。

## 35.4 ロボットモデルの「3つのアバター」：Visual・Collision・Inertial

シミュレーションファイル（URDF / MJCF など）では、1つのリンクは通常、次の3つの属性を持ち、それぞれ役割が異なります：

|属性|たとえ|役割|グラフィック要件|
|---|---|---|---|
|Visual（ビジュアルモデル）|俳優の「肌 / 外見」|GUI で見栄えよく表示するためだけに使われる。|細かいメッシュ（STL/DAE）、多数の三角形。|
|Collision（衝突モデル）|俳優の「安全バブル / 骨格」|物理エンジンが衝突検出と接触力を計算するために使用。|極端に単純化（球・カプセル・ボックスで包む）、面数を非常に少なくし、高速計算を保証。|
|Inertial（慣性モデル）|俳優の「重さと重心」|質量、重心位置（原点）、慣性モーメント（慣性行列）を定義。物理的リアリティの要。|数値パラメータのみで、グラフィックはなし。|

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-35/ch35-04.png" alt="1つのロボットリンクにおける Visual・Collision・Inertial の表現" />
</div>

**落とし穴の警告**：多くの人が手っ取り早く Visual をそのまま Collision にコピーしてしまいますが、これはシミュレーションのカクつき（GPU が追いつかない）や、衝突検出の極端な不安定さを招きます。Collision は必ず Convex Hull で単純化しなければなりません！

reBot Arm の MJCF モデルはまさにこのように設計されています — Visual には STL メッシュを、Collision にはボックスを使用しています：

```xml
<!-- Visual: fine STL mesh, only for looks -->
<geom name="gripper_base_visual" type="mesh" mesh="gripper_base_mesh" material="gripper_mat"/>

<!-- Collision: simplified box, only for collision detection -->
<geom name="gripper_palm_collision" type="box" pos="-0.090 0 0"
      size="0.018 0.090 0.034" contype="1" conaffinity="1" condim="6"/>
```

リンク部品（link1〜link6）については、Visual の geom はデフォルトで `contype="0" conaffinity="0"` となっており、衝突検出には参加しません。これは意図的な設計です。アームの自己干渉は SRDF の ACM 行列（第34章参照）で管理し、

MuJoCo レベルではグリッパと物体間の衝突だけを扱います。Inertial モデルについては、reBot Arm の MJCF STL モデルでは各ボディに完全な慣性パラメータが定義されています：

```xml
<inertial pos="-0.000007849 -0.0000011531 0.029841"
          mass="0.8366"
          diaginertia="0.00133040 0.00213119 0.00275877"/>
```

各リンクの質量分布

|リンク|質量 (kg)|説明|
|---|---|---|
|base_link|0.8366|ベース、最も重い|
|link2|1.3266|上腕、2番目に重い|
|link3|0.8353|前腕|
|link4|0.52|手首ピッチ|
|link5|0.383|手首ヨー|
|link6|0.3663|ツール回転|
|end_link|0.5|グリッパベース|

注目すべき点として、運動学モデル（`rebotarm_b601_kinematic.xml`）では、ほとんどのリンクの慣性データを省略しています。これは、運動学モードでは力や動力学を計算する必要がなく、幾何学的な関係だけを扱えばよいためです。

## 35.5 関節・アクチュエータ・センサ（シミュレーション内の「神経の末端」）

&#123;&#123;/* TODO: 元のドキュメントではここに図（image 1.png）が表示されていますが、フォルダ内に存在せずアップロードできるものもないため、図を再作成する必要があります。 */&#125;&#125;

### **Joint**：リンク間の相対運動を定義します。

一般的な種類：

|関節タイプ|URDF 名|MJCF 名|説明|
|---|---|---|---|
|回転関節|`revolute`|`hinge`|サーボのように、可動範囲に制限があります。|
|連続回転|`continuous`|`hinge` (no range)|車輪のように、回転に制限がありません。|
|直動関節|`prismatic`|`slide`|油圧ロッドのような動きです。|
|固定関節|`fixed`|None (welded directly)|2 つのリンクを溶接して一体化します。|

reBot Arm は `hinge`（joint1〜joint6）と `slide`（finger_left, finger_right）を使用します：

```xml
<joint name="joint1" type="hinge" axis="0 0 1" range="-2.8 2.8"/>
<joint name="joint2" type="hinge" axis="0 0 -1" range="-3.14 0"/>
<joint name="finger_left" type="slide" axis="0 1 0" range="0 0.0285"/>
```

MJCF の各関節には、減衰（damping）とロータ慣性（armature）のパラメータがあります：

```xml
<default>
  <joint damping="0.8" armature="0.01" limited="true"/>
</default>
```

`damping="0.8"` は関節の摩擦を模擬し、外力がなくても関節が自然に減速するようにします。`armature="0.01"` はモータロータの等価慣性を模擬し、実モータの応答特性に近いシミュレーションを実現します。

### **Actuator**：シミュレーションでは、駆動力／トルクの上限と伝達遅延を定義します。例えば -10〜10 Nm のトルクコマンドを送ると、アクチュエータはそれをクリップしてから物理エンジンに渡します。

しかし reBot Arm の MJCF モデルは `<actuator>` 要素を一切定義していません——これは抜けではなく、

意図的な設計です：

- `real2sim_sync.py` はアクチュエータを経由せずに `data.qpos` に直接書き込み、運動学的な同期を実現します。
- `mujoco_torque_control.py` はアクチュエータを経由せずに `data.qfrc_applied` に直接書き込み、

トルク制御を実現します。トルクのクリッピングはコードレベルで行われます：`torque_limit=18.0`。

この「ノーアクチュエータ」設計により、開発者は最大限の制御自由度を得られます：運動学モード（位置を直接設定）と動力学モード（トルクを直接設定）を自由に選択でき、アクチュエータモデルに縛られません。

### **Sensor**：シミュレータは、現実を完全に模擬することも（あるいはノイズを加えて）できます

|センサータイプ|シミュレーション方法|reBot Arm における具現化|
|---|---|---|
|関節位置／速度エンコーダ|`data.qpos` / `data.qvel` を直接読み取る|`mujoco_torque_control.py` が関節状態を読み取る|
|力／トルクセンサー (F/T)|`data.qfrc_bias` を読み取る（バイアス力 = 重力 + コリオリ力）|トルク比較機能の中核|
|IMU|ボディの加速度と角速度を読み取る|本プロジェクトでは未使用|
|カメラ／LiDAR|レンダリングエンジンで RGB または点群を生成|MJCF で `overhead_rgb` カメラを定義|

reBot Arm の MJCF モデルは `<sensor>` 要素を定義しておらず、センサーデータは Python API を通じて直接読み取ります：

```python
# Read joint position
qpos = self.data.qpos[joint.qpos_addr]

# Read joint velocity
qd = self.data.qvel[joint.dof_addr]

# Read the gravity compensation torque (bias force)
mujoco.mj_forward(self.model, self.gravity_data)
tau_g = self.gravity_data.qfrc_bias[joint.dof_addr]
```

## 35.6 重要な時間パラメータ：シミュレーションステップサイズ vs 制御周波数（混同しやすいポイント）

**Physics dt**：物理エンジン内部の積分反復の時間間隔。例：0.001 s = 1 kHz。ステップが小さいほど物理は高精度かつ安定になりますが、CPU 負荷は高くなります。

**制御レート**：制御ノードがシミュレーションにコマンドを送る周波数。

例：100 Hz。制御周期はシミュレーションステップの整数倍でなければなりません（例：10 回の物理ステップごとに 1 回制御コマンドを計算）。

**黄金律**：制御周波数はアームの機械的帯域を十分にカバーする必要があります（一般に速度ループ > 1 kHz、位置ループ > 100 Hz）。一方、シミュレーションステップは制御周波数の 5〜10 倍程度速くして、トルクコマンドが時間的に滑らかになるようにします。

reBot Arm の 2 つの MJCF モデルは、異なるタイムステップを使用しています：

|モデル|timestep|意味|
|---|---|---|
|`rebotarm_b601_stl.xml`（物理モデル）|0.001 s（1 ms = 1 kHz）|1 ステップで 1 ms 分の物理を進める|
|`rebotarm_b601_kinematic.xml`（運動学モデル）|0.002 s（2 ms = 500 Hz）|1 ステップで 2 ms 進めるが、物理計算は行わない|

物理モデルはより小さいタイムステップ（1 ms）を使用します。これは、動力学シミュレーションには数値安定性を保証するための十分な分解能が必要だからです。運動学モデルは運動方程式を解く必要がないため、2 ms で十分です。

```xml
<option timestep="0.001" gravity="0 0 -9.81" iterations="100" noslip_iterations="20"/>
```

`iterations="100"` と `noslip_iterations="20"` は拘束ソルバのパラメータであり、接触と摩擦の解の精度に影響します。値を大きくすると精度は上がりますが、計算コストも増加します。

`mujoco_torque_control.py` では、制御周波数とパブリッシュ周波数を分離しています：

```python
self.declare_parameter("control_hz", 500.0)   # control loop 500 Hz
self.declare_parameter("publish_hz", 60.0)     # state publishing 60 Hz
```

制御ループは 500 Hz（2 ms ごと）で動作し、MuJoCo の 1 ms タイムステップと整合しています——各制御サイクルで `mj_step` を呼び出して物理シミュレーションを進めます。状態のパブリッシュは 60 Hz で行い、ROS2 トピックを通じて外部に配信することで、高周波データでサブスクライバを飽和させることを避けています。

`real2sim_sync.py` の同期周波数はこれよりかなり低くなっています：

```python
self.declare_parameter("sync_hz", 60.0)  # sync rendering at 60 Hz
```

real2sim は運動学的な同期（qpos の書き込み + mj_forward）のみを行い、mj_step を呼び出していないため、高頻度の物理計算は不要です。60 Hz であれば、見た目の滑らかさを保つには十分です。

<a id="formats"></a>

## 35.7 3 つのモデル形式の比較：URDF、MJCF、USD

|形式|正式名称／由来|特徴|適用シナリオ|
|---|---|---|---|
|URDF|Unified Robot Description Format（ROS 標準）|ツリー構造（閉ループなし）；運動学表現に非常に強い一方で、動力学（慣性）の記述は弱く、複雑な地形をサポートしません。|従来型アーム、移動台車、ROS エコシステムの標準。|
|MJCF|MuJoCo XML Format|多体系動力学と接触に特化して最適化されており、物理パラメータ（摩擦、弾性、減衰）を非常に細かく記述可能。自動凸包生成をサポート。|強化学習（RL）、高精度な接触タスク（例：巧みなハンドによる把持）。|
|USD|Universal Scene Description（Pixar によるオープンソース）|ハリウッド級のシーン管理；超大規模シーン、階層的コンポジション、極めてリアルなマテリアルとライティングをサポート。|Isaac Sim、デジタルツイン、高忠実度の合成データ生成（NVIDIA Omniverse と深く統合）。|

**開発パスの推奨**：従来型アームのアルゴリズムには URDF、強化学習／巧みなマニピュレーションには MJCF、シミュレーションデータ生成／フォトリアリスティックレンダリングには USD を選びます。

reBot Arm の開発では、最初の 2 つを利用します：

URDF——SolidWorks からエクスポートされ、各リンクは `<inertial>`、`<visual>`、

および `<collision>` の 3 つのサブ要素を持ち、RViz 表示と MoveIt2 プランニングに使用されます：

```xml
<link name="base_link">
  <inertial>
    <mass value="0.79874480798149"/>
    <inertia ixx="..." iyy="..." izz="..."/>
  </inertial>
  <visual>
    <geometry>
      <mesh filename="package://rebotarm_bringup/description/meshes_b601_gripper/base_link.STL"/>
    </geometry>
  </visual>
  <collision>
    <geometry>
      <mesh filename="package://rebotarm_bringup/description/meshes_b601_gripper/base_link.STL"/>
    </geometry>
  </collision>
</link>
```

URDF の制約に注意してください：collision は visual メッシュの再利用しかできず、簡略化した衝突ボディを別途定義することはできません。

これが、reBot Arm が MJCF を並行して維持している理由でもあります——MJCF では同じリンク上で、visual（メッシュ）と collision（ボックス）を独立して定義できます。

MJCF——reBot Arm の MJCF は、URDF では表現できないシーン要素（テーブル、物体、カメラ）もサポートしています：

```xml
<camera name="overhead_rgb" mode="fixed" pos="0.42 0 0.86" fovy="50"/>
<body name="red_cube" pos="0.34 -0.13 0.061">
  <freejoint/>
  <geom type="box" size="0.025 0.025 0.025" mass="0.04"/>
</body>
```

USD——reBot Arm では現時点で使用していませんが、将来 Isaac Sim へ移行する必要が出た場合は、`urdf_to_usd` や `mjcf_to_usd` ツールで変換できます。

<a id="choose"></a>

## 35.8 2 大シミュレータ：MuJoCo VS Isaac Sim（「どちらを選ぶべきか」への回答）

|比較軸|MuJoCo|Isaac Sim|
|---|---|---|
|コアな位置付け|軽量な物理実験室（数学者のツール）|エンタープライズ向けデジタルツインプラットフォーム（エンジニアのメタバース）|
|物理エンジン|凸最適化／コーン相補性に基づく；接触が安定して破綻しにくく、非常に高速なシミュレーション（10 倍速以上で動作可能）。|PhysX 5（GPU アクセラレーション）ベース；剛体／軟体／流体をサポートし、物理的リアリティが高い。|
|レンダリング能力|素朴（OpenGL）、ほとんどライティングやシャドウがない。|映画レベルのレイトレーシング（RTX）；完璧なセマンティック／深度／セグメンテーション画像を生成可能。|
|ハードウェア要件|CPU 上で快適に動作（GPU なしでも動く）。|NVIDIA RTX GPU が必須（最低でも 3060 クラスから）。|
|典型的な用途|強化学習ポリシーの学習（例：OpenAI Gym）、最適制御（MPC）、低リソースデバイス。|合成データ生成（ビジョン基盤モデルの学習）、Hardware-in-the-Loop（HIL）、工場ライン全体のシミュレーション。|

reBot Arm が MuJoCo を選んだ理由は明確です：本プロジェクトでは、高精度な動力学検証（重力補償トルクの比較）と、実機のリアルタイムミラーリング（real2sim）が必要です。これらのタスクは、高い物理精度と計算速度を要求する一方で、レンダリング品質の要求は低いです。MuJoCo はまさにこのニーズを満たします。

両者を選ぶ際の判断基準：

|要件|推奨プラットフォーム|理由|
|---|---|---|
|動力学モデリングとトルク解析|MuJoCo|物理精度が高く、API からトルクに直接アクセス可能|
|モーションプランニングと軌道検証|MuJoCo / RViz|軽量で起動が速い|
|視覚認識とセンサーシミュレーション|Isaac Sim|カメラ、LiDAR などのセンサーをサポート|
|強化学習のトレーニング|Isaac Sim|GPU 並列化により大規模環境を扱える|
|リアルタイム実機ミラーリング|MuJoCo|CPU 上で動作し、レイテンシが低い|
|フォトリアリスティックなシーンレンダリング|Isaac Sim|RTX レイトレーシング|

## 35.9 シミュレーションアーム vs 実機アーム：「ミラー」と「ギャップ」

**関係性**：シミュレーションアームは、実機アームの「理想化された数学的投影」です。

**共通点**：運動学（順運動学 / 逆運動学の解）は完全に同一であり、関節リミットと速度リミットは実機パラメータに正確に合わせて設定できます。

reBot Arm の 6 つの関節は、MJCF と URDF でまったく同じリミットを持ちます：

|Joint|Range|URDF limits|MJCF limits|
|---|---|---|---|
|joint1|-2.8 ~ 2.8 rad|lower="-2.8" upper="2.8"|range="-2.8 2.8"|
|joint2|-3.14 ~ 0 rad|lower="-3.14" upper="0"|range="-3.14 0"|
|joint3|-3.14 ~ 0 rad|lower="-3.14" upper="0"|range="-3.14 0"|
|joint4|-1.87 ~ 1.57 rad|lower="-1.87" upper="1.57"|range="-1.87 1.57"|
|joint5|-1.57 ~ 1.57 rad|lower="-1.57" upper="1.57"|range="-1.57 1.57"|
|joint6|-3.14 ~ 3.14 rad|lower="-3.14" upper="3.14"|range="-3.14 3.14"|

**相違点（Sim2Real ギャップ、克服すべきギャップ）**：

### **1. ダイナミクスの違い**

現実世界には摩擦、バックラッシュ、弾性変形がありますが、シミュレーションは多くの場合、完全な剛体か、単純化された摩擦モデルです。reBot Arm の MJCF では、`damping="0.8"` と `armature="0.01"` は推定値であり、実機の関節摩擦とモータロータ慣性はシステム同定によって取得する必要があります。`mujoco_torque_control.py` のトルク比較機能は、まさにこの誤差を定量化するために存在します。MuJoCo の重力補償トルクと SDK の重力補償トルクを同時に計算し、その差分を publish します：

```python
tau_mujoco = self._compute_mujoco_tau_g(q)  # computed by MuJoCo
tau_sdk = self._sdk_gravity(q=q)              # computed by SDK
diff = tau_mujoco - tau_sdk                    # difference
```

比較結果は次の 3 つのトピックで publish されます：

|Topic|Content|
|---|---|
|`/rebotarm/mujoco/tau_g`|MuJoCo が計算した重力補償トルク|
|`/rebotarm/mujoco/sdk_tau_g`|SDK が計算した重力補償トルク|
|`/rebotarm/mujoco/tau_g_diff`|両者の差分|

差分が小さければ、シミュレーションモデルは実機ロボットのダイナミクスとよく一致しており、Sim2Real 転移のリスクは低くなります。差分が大きい場合は、モデルパラメータのキャリブレーションが必要です。

### **2. レイテンシの違い**

シミュレーションの制御コマンドは、ほぼゼロレイテンシで即座に実行されますが、現実世界では「通信遅延 → モータ加速 → トルク立ち上がり」という過程を経る必要があります。`real2sim_sync.py` は `stale_timeout` パラメータでこれに対処します：

```python
self.declare_parameter("stale_timeout", 1.0)  # stop syncing after 1 second without data
```

実機アームの関節状態が 1 秒以上更新されない場合、シミュレーションモデルは追従を停止し、古い姿勢を表示しないようにします。

### **3. 知覚の違い**

シミュレーションカメラは、モーションブラーのない完璧な RGB を出力しますが、実機カメラには露光遅延、ホワイトバランスのドリフト、動的ブラーがあります。reBot Arm の MJCF では、固定カメラが定義されています：

```xml
<camera name="overhead_rgb" mode="fixed" pos="0.42 0 0.86" fovy="50"/>
```

このカメラは MuJoCo viewer 内でシーンをレンダリングできますが、実機カメラの画質とはギャップがあります。

## 35.10 デジタルツイン — シミュレーションの究極形態

**定義**：「オフラインシミュレーション」にとどまらず、リアルタイムデータチャネルを構築し、実機アームのあらゆる関節角度、トルク、温度をリアルタイムに仮想モデルへマッピングすると同時に、仮想モデル側は逆方向に「数秒先の動作」をリハーサルできる（予知保全）ことを指します。

デジタルツインの 3 つのレベル：

|Level|Name|Capability|
|---|---|---|
|Level 1|Visualization|3D ダッシュボードで、純粋に可視化のみ。|
|Level 2|Diagnosis|実機でエラーが発生したとき、ツインが故障箇所をハイライトし、ログを遡って追跡します。|
|Level 3|Prediction|現在の負荷に基づき、仮想ボディが事前に「2 秒後にモータが過負荷になる可能性がある」と計算し、現実世界で減速保護をトリガーします。|

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-35/ch35-05.png" alt="reBot Arm digital twin architecture" />
</div>

**スムージングとタイムアウト**：デジタルツインは、実機ロボットデータのジッタや途切れを処理する必要があります。`smoothing_alpha` パラメータは追従のなめらかさを制御します（1.0 はダイレクト追従、1.0 未満は指数スムージング）、`stale_timeout` はデータタイムアウト後の挙動を制御します。

**バーチャル把持**：`real2sim_sync.py` はバーチャル把持も実装しています。グリッパがある程度まで閉じ、TCP が物体に十分近づくと、その物体は TCP に「付着」して一緒に動きます。グリッパを開くと、物体は解放されて自由落下します。これにより、デジタルツインは姿勢をミラーリングするだけでなく、把持インタラクションもシミュレートできます。

**トルクレベルのツイン**：`mujoco_torque_control.py` は、デジタルツインを運動学レベルからダイナミクスレベルへ引き上げます。関節位置だけでなくトルクも同期し、MuJoCo のトルク閉ループを用いて実機アームの関節軌道を追従しつつ、MuJoCo と SDK の重力補償トルクを比較します。これは、デジタルツインが「見える」段階から「正確に計算する」段階へ進むための鍵となるステップであり、Level 2（診断）および Level 3（予測）へ進むための基盤です。

---

</div>
