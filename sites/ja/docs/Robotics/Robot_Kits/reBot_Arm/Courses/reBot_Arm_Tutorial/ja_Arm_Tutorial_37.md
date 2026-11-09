---
description: "Seeed Physical AI Beginner's Course 第37章 — MuJoCo における運動学と軌道制御：関節空間とデカルト空間、エンドエフェクタ姿勢の読み取り、DLS アルゴリズムによる順運動学と逆運動学、目標位置と目標姿勢、関節補間、線形および最小ジャーク軌道、制御周波数、関節リミット、そして 4 つの実行可能デモ。"
title: 第37章 - MuJoCo における運動学と軌道制御
hide_title: true
keywords:
  - reBot
  - ロボットアーム
  - MuJoCo
  - 順運動学
  - 逆運動学
  - DLS
  - 軌道
  - 最小ジャーク
  - コース
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/rebot_physical_ai_course_chapter_37
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/ja/robotics/rebot_physical_ai_course_chapter_37/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 8 · 第37章 · 理論と実践</span>
    <h2>37. MuJoCo における運動学と軌道制御</h2>
    <p>
      Seeed Physical AI Beginner's Course 第37章 — MuJoCo における運動学と軌道制御：関節空間とデカルト空間、エンドエフェクタ姿勢の読み取り、DLS アルゴリズムによる順運動学と逆運動学、目標位置と目標姿勢、関節補間、線形および最小ジャーク軌道、制御周波数、関節リミット、そして 4 つの実行可能デモ。
    </p>
    <div className="hero-actions">
      <a href="#overview">章の概要</a>
      <a href="#kinematics">順運動学と逆運動学</a>
      <a href="#trajectory">軌道</a>
      <a href="#demos">4 つのデモ</a>
    </div>
  </div>
</section>

{/* TODO: このセクションの元ドキュメントは、画面録画（`2026-08-19%2017-21-02.mkv`, `2026-08-19%2017-03-15.mkv`）で終わっています。ファイルは 图片和附件/ にありますが、録画はコースの CDN パス経由では公開されていません。利用可能になったらアップロードし、ここにリンクを追加してください。 */}
> 第36章では MuJoCo 内でアームを動かしましたが、それはまだ「スライダーをドラッグする」レベルの制御にすぎませんでした。この章では 1 段階レベルアップし、「関節角度」から「空間姿勢」へ、「瞬間ジャンプ」から「滑らかな軌道」へと進みます。学習目標：安全なシミュレーション環境で順運動学・逆運動学・軌道制御を練習し、さまざまな制御手法の効果を観察できるようにすることです。
>
>

<a id="overview"></a>

## 37.1 関節空間とデカルト空間

ロボット制御には 2 つの主要な座標系があり、その違いを理解することがあらゆる動作計画の出発点になります。

### 関節空間

各関節に対して「何度まで回転するか」を直接指示します。6 自由度アームの関節空間は 6 次元で、それぞれの次元が 1 つのモータ角度に対応します。

```text
Joint space goal = [j1, j2, j3, j4, j5, j6]  # unit: radians
```

利点：直接的で曖昧さがなく、（リミット内であれば）到達不能問題がない。

欠点：エンドエフェクタがどこへ行ったか分からない——順運動学で計算する必要があります。

### デカルト空間

エンドエフェクタに対して「空間のどの点へ行くか」を指示します。位置は x, y, z で表し、

姿勢は回転行列またはクォータニオンで表します。

```text
Cartesian goal = [x, y, z, qx, qy, qz, qw]  # position + orientation
```

利点：直感的——「エンドエフェクタをテーブルの 30 cm 上まで動かす」など。

欠点：姿勢を関節角度に変換するために逆運動学が必要で、解が存在しない場合や複数存在する場合があります。

|比較の観点|関節空間|デカルト空間|
|---|---|---|
|記述する量|6 つの関節角度|3 つの位置 + 3 つの姿勢|
|解く必要があるか？|不要、そのまま送信|IK 計算が必要|
|典型的なインターフェース|`/rebotarm/follow_joint_trajectory`|`/rebotarm/move_to_pose`|
|特異姿勢リスク|なし|あり（ある姿勢でヤコビ行列が退化）|
|適用シナリオ|原点復帰、プリセット姿勢|把持、障害物回避、空間経路|

> 一言で言えば、関節空間は「アームの母語」、デカルト空間は「人間の言語」、そして運動学はその間をつなぐ通訳です。
>
>

## 37.2 エンドエフェクタ姿勢の読み取り

MuJoCo では、エンドエフェクタ姿勢は site オブジェクトを通じて取得します。reBot Arm では、

MJCF 内に `tcp` という名前の site を定義しており、グリッパ先端に固定しています：

```xml
<site name="tcp" pos="-0.105 0 0" size="0.008" rgba="1 0.34 0.16 1"/>
```

`tcp` は Tool Center Point（ツールセンタポイント）の略で、グリッパが物体を把持する点を表します。`pos="-0.105 0 0"` は X 軸方向に前方 10.5 cm にあることを意味し、`size="0.008"` は表示半径です。各 `mj_forward` または `mj_step` の後、MuJoCo はすべての site のワールド座標を `data.site_xpos` と `data.site_xmat` に書き込みます：

```python
import mujoco
import numpy as np

model = mujoco.MjModel.from_xml_path("rebotarm_b601_stl.xml")
data = mujoco.MjData(model)

# write joint angles
data.qpos[:] = [0, -0.5, -1.0, 0, 0, 0, 0]
mujoco.mj_forward(model, data)

# read the TCP pose
tcp_id = mujoco.mj_name2id(model, mujoco.mjtObj.mjOBJ_SITE, "tcp")
position = data.site_xpos[tcp_id]          # [x, y, z]
rotation = data.site_xmat[tcp_id].reshape(3, 3)  # 3x3 rotation matrix

print(f"TCP position: {position}")
print(f"TCP rotation:\n{rotation}")
```

`site_xpos` は長さ 3 の配列（ワールド座標系での xyz）、`site_xmat` は長さ 9 の配列（3x3 回転行列をフラット化したもの）で、リシェイプが必要です。

<a id="kinematics"></a>

## 37.3 順運動学の計算

順運動学（FK）は「関節角度が与えられたとき、エンドエフェクタ姿勢を求める」ことを意味します。reBot Arm のシミュレーションコードにおける FK 実装は非常に直接的で、外部の IK ライブラリは一切呼び出さず、MuJoCo 自身の運動学エンジンだけに依存しています。中核となるメソッドは

`sim_task_server.py` 内の `_fk_pose` です。あわせて https://docs.mujoco.cn/en/stable/APIreference/APIfunctions.html も参照してください。

ポイント：

|ステップ|コード|役割|
|---|---|---|
|状態リセット|`qpos[:] = base_qpos`|前の関節状態をクリアして残留を防ぐ|
|関節角度の書き込み|`qpos[qpos_addr] = ...`|MuJoCo 内部アドレスに従って各関節を書き込む|
|順方向計算|`mj_forward`|物理積分を行わずに運動学を更新|
|姿勢の読み取り|`site_xpos / site_xmat`|TCP site からエンドエフェクタ姿勢を取得|

ここでは `mj_forward` を使用しており、`mj_step` ではありません。`mj_forward` は順運動学計算（site 座標、ヤコビ行列などの更新）のみを行い、物理積分は行いません——純粋な運動学計算にはより高速でクリーンです。

`ros_to_mujoco_position` メソッドは、ROS の関節角度から MuJoCo の関節角度へのマッピング（スケールやオフセットを含む）を処理し、両方の座標系の一貫性を保証します。

## 37.4 逆運動学の解法

### 逆運動学（IK）

IK は「エンドエフェクタ姿勢が与えられたとき、関節角度を求める」ことであり、デカルト空間制御の中核です。reBot Arm は解析的 IK（閉形式解）ではなく、数値的手法——ヤコビアンに基づく Damped Least Squares（DLS）を使用します。

**なぜ解析解を使わないのか？**

6 自由度アームの解析的 IK には（球面リストなどの）特定の幾何学的条件が必要で、その導出は複雑でエラーも起こりやすいです。数値的手法は大域的最適性は保証しませんが、一般的で簡潔であり、どのような構成にも適用できます。

### DLS アルゴリズムの原理

標準的な IK の中核方程式は `J * dq = dx` であり、J はヤコビ行列、dx はエンドエフェクタ姿勢誤差、dq は関節角度補正です。`dq = J^(-1) * dx` と直接逆行列を取ると、特異姿勢付近では（J が正則でないため）発散してしまいます。

DLS は減衰項を追加します：

```text
dq = J^T * (J * J^T + lambda^2 * I)^(-1) * dx
```

ここで lambda は減衰係数です。lambda が大きいほど安定しますが収束は遅くなり、小さいほど精度は高くなりますが振動しやすくなります。reBot Arm の IK パラメータは（`sim_task_server.py` の `declare_parameter` で定義）次のとおりです：

|パラメータ|デフォルト値|意味|
|---|---|---|
|`ik_iterations`|360|最大反復回数|
|`ik_tolerance`|0.004|位置収束しきい値（4 mm）|
|`ik_damping`|0.035|DLS の減衰係数 lambda|
|`ik_orientation_weight`|0.75|姿勢誤差の重み|
|`ik_orientation_tolerance`|0.07|姿勢収束しきい値|

## 37.5 目標位置と目標姿勢

デカルト空間の目標には 2 つの粒度があります：

|目標タイプ|含まれる情報|IK の挙動|
|---|---|---|
|位置のみ|[x, y, z]|エンドエフェクタ座標のみを最適化し、姿勢は自由|
|位置 + 姿勢|[x, y, z, qx, qy, qz, qw]|位置と姿勢を同時に最適化|

ROS2 インターフェースでは、目標は `Pose` メッセージを通じて渡されます。`_pose_to_matrix_if_requested` メソッドは次を判断します：クォータニオンが `[1, 0, 0, 0]`（単位クォータニオン、すなわち回転なし）に近ければ `None` を返し、IK は位置のみを解きます；そうでなければ回転行列に変換して IK ソルバに渡します。

実際には、位置のみモードの方が一般的です——把持タスクでは、ターゲットポイントに到達しさえすればエンドエフェクタの姿勢はあまり気にしません。精密な姿勢が必要なシナリオ（組み立て、プラグの抜き差しなど）では、姿勢制約を有効にします。

## 37.6 関節補間

開始と終了の関節角度が分かっているとき、アームをどのように「滑らかに」A から B へ動かせばよいでしょうか？

最も単純な方法は線形補間です：

```text
q(t) = q0 + (q1 - q0) * ratio       # ratio is in [0, 1]
```

しかし線形補間では、開始と終了時に速度ジャンプ（0 から最大速度へ瞬時に変化）が発生し、アームが振動しやすくなります。

reBot Arm は `_execute_joint_path` メソッドで smoothstep 補間（3 次エルミート）を使用しています：

```python
ratio = self._clamp((now - t0) / (t1 - t0), 0.0, 1.0)
eased = ratio * ratio * (3.0 - 2.0 * ratio)
q = q0 + (q1 - q0) * eased
```

この関数は `ratio=0` と `ratio=1` で導関数が 0 になり、

開始時と終了時の速度が 0 であることを意味します——アームは滑らかに動き出し、滑らかに停止します。

|補間方法|式|開始/停止速度|加速度の連続性|適用シナリオ|
|---|---|---|---|---|
|線形|`ratio`|ジャンプ|なし|簡単なテスト|
|Smoothstep|`ratio^2 * (3 - 2*ratio)`|0|なし|一般的なスムーズ動作|
|最小ジャーク|`10*r^3 - 15*r^4 + 6*r^5`|0|あり|高精度軌道|

## 37.7 線形軌道

線形軌道とは、エンドエフェクタがデカルト空間で直線的に移動することを意味します。実装アプローチは 2 つあります：

### 方法 1：関節空間補間（デカルト直線ではない）

関節空間で直接補間すると、エンドエフェクタは実際には直線ではなく弧を描いて移動します。reBot Arm の `_execute_joint_path` はこのアプローチです。シンプルで高速、特異姿勢に陥ることもありませんが、エンドエフェクタの経路は予測しにくくなります。

### 方法 2：デカルト空間での直線

エンドエフェクタ姿勢をデカルト空間で線形補間し、各ステップで IK によって関節角度に戻します：

```python
for t in np.linspace(0, 1, n_steps):
    target_pos = start_pos + (end_pos - start_pos) * t
    q = solve_ik(target_pos, current_q)
    publish(q)
```

このアプローチではエンドエフェクタは真の直線を移動しますが、各ステップでIKを解く必要があり（計算コストが高い）、特異点に当たるとIKが収束しない可能性があります。

|比較項目|関節空間補間|デカルト空間直線|
|---|---|---|
|エンドエフェクタ軌道|弧|直線|
|計算負荷|低い（直接補間）|高い（毎ステップIK）|
|特異点リスク|なし|あり|
|reBot Arm デフォルト|はい|いいえ|

<a id="trajectory"></a>

## 37.8 最小ジャーク軌道

Minimum Jerk は、「ジャーク」（加速度の時間微分）の積分を最小化する最適軌道計画手法です。その式は次のとおりです：

```text
s(t) = 10*t^3 - 15*t^4 + 6*t^5       # t is in [0, 1]
```

特徴：

- 位置・速度・加速度が開始時と終了時でいずれもゼロになる
- 加速度が連続で、ジャンプがない
- 非常になめらかな動きで、高精度タスクに適している

reBot Arm は現在 smoothstep（3次エルミート）を使用しており、滑らかさと計算コストのバランスが良好です。より高い精度が必要な場合は、Minimum Jerk に置き換えることができます：

```python
def minimum_jerk(ratio):
    return 10 * ratio**3 - 15 * ratio**4 + 6 * ratio**5

# replace eased in _execute_joint_path
eased = minimum_jerk(ratio)
```

## 37.9 軌道制御周波数

軌道実行の中核パラメータは制御周波数（`command_hz`）であり、これは1秒あたりにシミュレーションへ送信される関節コマンド数を意味します。

reBot Arm のデフォルト設定：

|パラメータ|デフォルト値|意味|
|---|---|---|
|`command_hz`|60 Hz|軌道コマンド送信周波数|
|`max_joint_speed`|1.4 rad/s|関節角速度の上限|
|`record_hz`|30 Hz|記録サンプリング周波数|

`_execute_joint_path` のコアループ：

```python
period = 1.0 / self.command_hz  # 1/60 = 0.0167s

while True:
    now = time.monotonic() - started
    ratio = clamp((now - t0) / (t1 - t0), 0.0, 1.0)
    eased = ratio * ratio * (3.0 - 2.0 * ratio)
    q = q0 + (q1 - q0) * eased
    self._publish_joint_targets(q)
    if ratio >= 1.0:
        break
    time.sleep(period)
```

60 Hz とは、16.7 ms ごとに1つのコマンドが送信されることを意味します。6自由度アームに対しては、この周波数で十分に滑らかであり、人間の目は30 Hz を超えるジャンプを知覚できません。ただし注意点として、`command_hz` は軌道レイヤの周波数であり、物理レイヤの周波数ではありません。物理シミュレーションは

（`mujoco_physics_grasp.py`）で `control_hz=500` で動作しており、2 ms ごとにPDトルク制御を行います。これらは異なるレイヤの制御ループです：

|制御レイヤ|周波数|担当モジュール|コマンド種別|
|---|---|---|---|
|物理制御ループ|500 Hz|`mujoco_physics_grasp`|PD トルク|
|軌道制御ループ|60 Hz|`sim_task_server`|関節位置目標|
|状態配信ループ|30 Hz|`real2sim_sync`|JointState|
|記録サンプリングループ|30 Hz|`sim_task_server`|CSV 記録|

## 37.10 関節可動範囲と速度制限

### 関節可動範囲

reBot Arm の6つの関節とグリッパの制限は MJCF 内で定義されています。IK 解法の各ステップでは、`clamp_ros` メソッドを通じて関節角度を更新し、その範囲内に制約します：

```python
def ros_to_mujoco_position(self, value: float) -> float:
    mapped = float(value) * self.scale + self.offset
    if self.lower is not None:
        mapped = max(mapped, self.lower)
    if self.upper is not None:
        mapped = min(mapped, self.upper)
    return mapped
```

### 速度制限

軌道実行中、各関節コマンドには速度制限 `vlim` が付随します：

```python
msg = JointMotorCmd()
msg.use_pos = True
msg.use_vlim = True
msg.vlim = float(self.max_joint_speed)  # 1.4 rad/s
```

`max_joint_speed=1.4` rad/s は約 80 deg/s に相当します。この値は関節角速度の上限を制限し、アームが危険な速度で動作することを防ぎます。

軌道の所要時間は、開始と終了の関節差分および速度制限によって決まります：

```text
Minimum time = max(|q1[i] - q0[i]| / max_joint_speed)   for each joint i
```

例えば、joint2 が 0 から -1.57 rad に動く場合：最短時間 = 1.57 / 1.4 = 1.12 秒です。

指定した `duration` がこの最短時間より短い場合、アームは全速（`max_joint_speed`）で動作し、目標に到達する前に終了してしまう可能性があります。そのため、`duration` には十分な余裕を持たせてください。

<a id="demos"></a>

## 37.11 デモ1：順運動学

目的：一組の関節角度を入力し、エンドエフェクタ（TCP）の姿勢を計算して表示します。このデモでは ROS2 を起動する必要はありません—

純粋な MuJoCo Python 呼び出しにより、関節角度からエンド位置へのマッピングが正しいかどうかを検証します。

```python
DM:
cd ~/ReBot_Arm_DigitalTwin_DM/reBotArmController_ROS2-main
source scripts/source_rebotarm_env.sh
python3 demo1_fk.py
RS:
cd ~/ReBot_Arm_DigitalTwin_RS
source scripts/rs_env.sh
python3 demo1_fk.py
```

期待される出力は次のようなものです：

```text
Model: DM (rebotarm_b601_stl.xml)

--- Pose 1 ---
Joint angles: [0, 0, 0, 0, 0, 0]
TCP position: x=0.1553, y=0.0000, z=0.1917
TCP rotation matrix:
  [1.0000 0.0000 -0.0000]
  [0.0000 1.0000 0.0001]
  [0.0000 -0.0001 1.0000]

--- Pose 2 ---
Joint angles: [0, -0.5, -1.0, 0, 0, 0]
TCP position: x=0.1141, y=0.0000, z=0.5034
TCP rotation matrix:
  [0.8776 0.0000 -0.4794]
  [0.0000 1.0000 0.0001]
  [0.4794 -0.0001 0.8776]

--- Pose 3 ---
Joint angles: [0, -0.8, -1.5, 0.5, 0, 0]
TCP position: x=0.1409, y=0.0000, z=0.5559
TCP rotation matrix:
  [0.9801 0.0000 -0.1987]
  [0.0000 1.0000 0.0001]
  [0.1987 -0.0001 0.9801]

```

デモ1は純粋な計算です：MJCF モデルを読み込む -> 関節角度を設定する -> `mj_forward` で順運動学を計算する -> TCP 姿勢を出力する。全プロセスはメモリ内で完結し、ビューアも ROS2 トピックも疑似ドライバもなく、アームは動きません。純粋な MuJoCo Python 呼び出しです。関節角度からエンド姿勢へのマッピングが正しいかどうかを検証するもので、ゼロ姿勢でアームのエンド位置を手動で測定すると、FK の結果と一致するはずです。

## 37.12 デモ2：逆運動学

**目的**：目標位置が与えられたときに関節角度を解き、アームをそこへ動かします。ROS2 Service インターフェース `/rebotarm/move_to_pose_ik` を使用します：

実行前に、シミュレーションスタックを起動する必要があります：

```bash
RS:
cd ~/ReBot_Arm_DigitalTwin_RS
./scripts/start_rs_sim.sh
DM:
cd ~/ReBot_Arm_DigitalTwin_DM
./rebotarm start sim

# Terminal 2: run the IK client
python3 demo2_ik.py
```

期待される出力：

```text
Namespace: /rebotarm
Success: True
Message: IK success, error=9.6 mm, orient=0.000
Joint solution: [-0.3425787656649655, -1.5209255751808715, -0.707446304651899, -0.39301552902275094, 0.08498990704705993, -4.1821209004842323e-07]
```

注意：move_to_pose_ik は関節解のみを返し、動作は実行しません。アームが実際にそこへ動く様子を見たい場合は、デモ3の Action インターフェースを使用してください。

error は、IK で求めたエンド位置と目標との距離（mm 単位）を示します。起動スクリプトでは ik_tolerance を 0.020（20 mm）に設定しており、20 mm 以内の誤差であれば成功と判定されます。

## 37.13 デモ3：軌道制御

**目的**：エンドエフェクタを物体の目標点まで動かし、滑らかな遷移効果を観察します。

Action インターフェース `/rebotarm/move_to_pose` を使用して、多区間軌道を実行します：

1. シミュレーションスタックが動作していることを確認する
2. スクリプトを実行する

```bash
./rebotarm start web
```

3. MuJoCo ビューアでアームの動きを観察する

**比較実験**：線形補間と smoothstep の違いを比較するには、

`sim_task_server.py` 内の `_execute_joint_path` の補間関数を変更します：

```python
# Linear interpolation (will shake)
eased = ratio

# Smoothstep (current default)
eased = ratio * ratio * (3.0 - 2.0 * ratio)

# Minimum Jerk (smoothest)
eased = 10 * ratio**3 - 15 * ratio**4 + 6 * ratio**5
```

それぞれを実行し、エンドエフェクタの動きを観察してください：線形補間ではウェイポイント切り替え時に明らかなぎくしゃく感があり、smoothstep は開始と停止が滑らかで、Minimum Jerk は全区間を通してシルクのように滑らかです。

## 37.14 デモ4：簡単な把持動作

**目的**：シーンにブロックを配置し、ピック・アンド・プレースの一連の流れを完了させます。

シーンにはすでに3つのオブジェクトが存在します（MJCF `rebotarm_b601_stl.xml` で定義）：

|オブジェクト|位置 [x, y, z]|色|
|---|---|---|
|red_cube|[0.34, -0.13, 0.061]|赤いキューブ|
|blue_block|[0.50, 0.11, 0.055]|青いブロック|
|yellow_cylinder|[0.44, -0.02, 0.065]|黄色いシリンダ|

把持フロー：

```text
Move above the object -> descend -> close the gripper -> lift -> move to the target position -> open the gripper
```

実行：

```bash
# Terminal 1: start the physics simulation (physics grasp mode is needed to grasp objects)
./scripts/start_rebot_mujoco_all.sh

# Terminal 2: run the grasping demo on the web page
./rebotarm start web
```

## 37.15 FAQ

**Q1: IK 解法が失敗します（誤差 > 20 mm）。どうすればよいですか？**

よくある原因：

1. 目標位置が作業空間の外にある — reBot Arm の到達距離は約 50 cm であり、遠すぎる目標には解がありません
2. 目標が特異点付近にある — 例えばエンドエフェクタが完全に伸びきったとき、ヤコビアン行列が退化します
3. 関節制限により収束しない — 一部の姿勢は、到達するために関節が制限を超える必要があります

対処法：目標位置を調整するか、`ik_tolerance` と `ik_damping` を大きくします：

```bash
ros2 launch rebotarm_mujoco mujoco_sim_task_server.launch.py \
  ik_tolerance:=0.010 ik_damping:=0.05
```

**Q2: 軌道実行中にアームが震えます。どうすればよいですか？**

`command_hz` が低すぎないか確認してください（30 Hz 未満だと目に見える震えが発生します）。デフォルトの 60 Hz で通常は十分です。

物理モードを使用している場合は、PD パラメータが適切かどうかを確認してください。`arm_kp` が大きすぎると振動を引き起こします。

**Q3: 把持中に物体が弾き飛ばされます。どうすればよいですか？**

物理モードでは、PD トルクが大きすぎます。`arm_torque_limit` を下げてください：

```bash
ros2 launch rebotarm_mujoco mujoco_physics_grasp.launch.py \
  arm_torque_limit:=10.0
```

また、下降速度を遅くすることもできます（`duration` パラメータを大きくする）ので、グリッパが物体にゆっくり近づくようになります。

**Q4: `move_to_pose` と `move_to_pose_ik` の違いは何ですか？**

|インターフェース|タイプ|動作|
|---|---|---|
|`/rebotarm/move_to_pose_ik`|Service|IK を解いて関節角度を返すだけで、モーションは実行しません|
|`/rebotarm/move_to_pose`|Action|IK を解いて滑らかな軌道を実行します；フィードバックとキャンセルをサポートします|

**Q5: キネマティクスモードと物理モードをどのように切り替えますか？**

```bash
# Kinematics mode (directly writes qpos, no physical interaction)
MUJOCO_GRASP_MODE=kinematic ./scripts/start_rebot_mujoco_all.sh

# Physics mode (PD torque control, can grasp objects)
MUJOCO_GRASP_MODE=physics ./scripts/start_rebot_mujoco_all.sh
```

キネマティクスモードはキネマティクスと軌道計画のデバッグに適しており、物理モードは把持やインタラクションのテストに適しています。

**Q6: `mj_forward` と `mj_step` の違いは何ですか？**

`mj_forward` は前進計算（キネマティクス、ヤコビアン、サイト座標）のみを行い、物理積分は行いません。

`mj_step` は `mj_forward` に加えて、物理積分（力、接触、衝突）も行います。

純粋な IK/FK 計算には `mj_forward` を使用し、物理シミュレーションには `mj_step` を使用します。

- 関節空間はアームの母語であり、デカルト空間は人間の言語であり、キネマティクスはその通訳です。
- `mj_forward` はキネマティクスを計算し、`mj_step` はダイナミクスを計算します――前者はジオメトリだけを見ており、後者は実際に物理を計算します。
- DLS に減衰を加えることは妥協ではなくエンジニアリングの知恵です――特異点で発散するより、少し遅く収束する方が良いのです。
- Smoothstep はアームを「軽く動き出して安定して到着」させ、Minimum Jerk は「全行程を通してシルクのように滑らか」にします。
- 60 Hz でコマンドを送信し、500 Hz でトルクを計算し、30 Hz で状態を配信します――それぞれ役割の異なる 3 つの制御ループです。

---

</div>
