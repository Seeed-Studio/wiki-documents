---
description: このチュートリアルでは、ロボットアーム reBot Arm B601-DM 上で、Pinocchio と MeshCat を用いた運動学解析および可視化の方法を紹介します。
title: reBot Arm B601-DM 向け Pinocchio と MeshCat 入門
keywords:
  - Pinocchio
  - MeshCat
  - ロボットアーム
  - ロボット
  - LeRobot
  - 運動学
slug: /rebot_arm_b601_dm_pinocchio_meshcat
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-06-30
  author: LiuJunjie
translation:
  skip: [zh-CN]
createdAt: '2026-03-24'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_pinocchio_meshcat/
---

# reBot Arm B601-DM 向け Pinocchio と MeshCat 入門

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>6 自由度ロボットアーム · マルチモータ対応 · 運動学ソルバ · 軌道計画 · 完全オープンソース</strong>
</p>


![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png)


:::tip
このサンプルコードは、単一モータ制御、順運動学／逆運動学の制御とテスト、アームのゼロ位置設定とモータ角度の読み取り、MeshCat 可視化システムなどを含め、ロボットアームのモータや姿勢を制御するために使用できます。
:::


[Pinocchio](https://github.com/stack-of-tasks/pinocchio) は、ロボットの動力学解析と最適化のためのオープンソースライブラリです。効率的な順／逆運動学、動力学計算、および軌道計画機能を提供します。[MeshCat](https://github.com/rdeits/meshcat) は、ロボットの状態や動作軌跡をリアルタイムに表示できる Web ベースの 3D 可視化ツールです。

本プロジェクトは、Pinocchio の強力な計算機能と MeshCat の直感的な可視化を組み合わせ、reBot Arm B601-DM 向けに、運動学解析とデバッグのための完全なツールセットを提供します。

---

## プロジェクトの特長

1. **完全な運動学解析**
   順運動学（FK）および逆運動学（IK）計算をサポートし、ロボットアームのエンドエフェクタ姿勢をリアルタイムに求めることができます。

2. **リアルタイム 3D 可視化**
   ブラウザ上の MeshCat を通じて、ロボットアームの状態と動作軌跡をリアルタイムに表示でき、追加ソフトウェアは不要です。

3. **軌道計画とトラッキング**
   SE(3) 測地線軌道計画を実装し、CLIK（Closed-Loop Inverse Kinematics）トラッキング制御をサポートします。

4. **重力補償制御**
   Pinocchio の動力学モデルに基づいて関節の重力トルクを計算し、ロボットアームの「フローティング」効果を実現します。

5. **オープンソース & 拡張性**
   すべてのコードはオープンソースであり、ユーザーはニーズに応じて制御アルゴリズムや可視化効果をカスタマイズできます。

## 仕様

このチュートリアルで使用するハードウェアは、[Seeed Studio](https://www.seeedstudio.com/) によって提供されています。

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
      <td>モータモデル</td>
      <td>Damiao DM4340 / DM4310</td>
    </tr>
    <tr>
      <td>通信方式</td>
      <td>USB-CAN アダプタ経由の CAN バス</td>
    </tr>
    <tr>
      <td>動作電圧</td>
      <td>24V DC</td>
    </tr>
    <tr>
      <td>制御方法</td>
      <td>PC</td>
    </tr>
    <tr>
      <td>推奨動作温度範囲</td>
      <td>0°C ~ 40°C</td>
    </tr>
  </tbody>
</table>

## 部品表（BOM）

| コンポーネント | 数量 | 同梱 |
|--|--|--|
| reBot Arm B601-DM ロボットアーム | 1 | ✅ |
| USB2CAN シリアルブリッジ | 1 | ✅ |
| 電源アダプタ（24V） | 1 | ✅ |
| USB-C ケーブル | 1 | ✅ |
| グリッパ | 1 | ✅ |


## 動作環境要件

| 項目 | 要件 |
|------|-------------|
| **Python** | 3.10+ |
| **オペレーティングシステム** | Ubuntu 22.04+ |
| **通信インターフェース** | USB2CAN シリアルブリッジ または CAN インターフェース |

---

## インストール手順

### ステップ 1. uv をインストール（未インストールの場合）

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### ステップ 2. 環境を同期（すべての依存関係をインストール）

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

:::tip
`uv sync` は、（存在しない場合は）自動的に仮想環境を作成し、`pyproject.toml` と `uv.lock` に従ってすべての依存関係をインストールします。
:::


## デバッグツールの紹介

:::tip パーミッション設定
ハードウェア制御のサンプルを実行する前に、デバイスのパーミッションを設定する必要があります：

```bash
# Set serial device permissions (Damiao USB2CAN)
sudo chmod 666 /dev/ttyACM0

# Or set CAN device permissions (e.g., can0)
sudo chmod 666 /dev/can0
```
:::
### 単一モータ制御コンソール（`0x01damiao_test.py`）

motorbridge SDK を使用して、単一モータの直接テストを行います。

**実行方法**:
```bash
uv run python example/0x01damiao_test.py
```

**対話コマンド**:
| コマンド | 説明 |
|------|------|
| `enable` / `disable` | モータを有効化／無効化 |
| `set_zero` | ゼロ位置を設定 |
| `state` | ステータスを表示 |
| `ping` | モータに ping を送り応答を取得 |
| `clear_error` | モータエラーをクリア |
| `mode <mit/posvel/vel>` | 制御モードを切り替え |
| `mit <pos> [vel] [kp] [kd]` | MIT モードコマンド |
| `posvel <pos> [vlim]` | POS_VEL モードコマンド |
| `vel <velocity>` | 純粋な速度モードコマンド |
| `read_param <id> [type]` | モータパラメータを読み取り |
| `write_param <id> <value> [type]` | モータパラメータを書き込み |
| `loop` | ループ制御モードに入る |
| `q` / `quit` | 終了 |
---

### ゼロ点キャリブレーションと角度モニタリング（`2_zero_and_read.py`）

すべての関節のゼロ点を自動的に設定し、関節角度をリアルタイムに表示します。

**実行方法**:
```bash
uv run python example/2_zero_and_read.py

# Example Output
-0.12  +0.23  -6.42  +41.74  -0.45  -0.01  -0.01
```

### MIT 制御モード（`3_mit_control.py`）

すべての関節に対して目標角度を入力し、MIT 制御モードでモータ制御を行います。通常、力制御、インピーダンス制御、または高い動的応答が求められるシナリオで使用されます。

**実行方法**:
```bash
uv run python example/3_mit_control.py
> 30 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```
:::danger
MIT 制御モードでは、ロボットアームが非常に高速で動作することに注意してください。人や他の機器がアームの動作半径内に入らないよう、十分に離れていることを確認してください。
:::

### 位置・速度ハイブリッド制御モード（`4_pos_vel_control.py`）

すべての関節に対して目標角度を入力し、POS_VEL（位置・速度）ハイブリッド制御モードでモータ制御を行います。目標角度に到達する際の動作を、より滑らかで制御しやすくし、振動を低減します。

**実行方法**:
```bash
uv run python example/4_pos_vel_control.py
> 30 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```

---

## 運動学テスト

### 順運動学テスト（`5_fk_test.py`）

関節角度に基づいてエンドエフェクタの姿勢を計算します。

**入力**: 6 関節角度（度）

**出力**:
- エンドエフェクタ位置（X, Y, Z） — 単位：メートル
- 回転行列（3×3）
- オイラー角（ロール／ピッチ／ヨー） — 単位：度

**例**:
```bash
uv run python example/5_fk_test.py
> 0 0 0 0 0 0
====================================================
  Result / Result
====================================================
  Joint angles (deg): [0. 0. 0. 0. 0. 0.]
  End-effector position (m):
    X = +0.260306
    Y = +0.000000
    Z = +0.191701
  Rotation matrix (R_world^end):
    [+1.000000  +0.000000  -0.000007]
    [+0.000000  +1.000000  +0.000100]
    [+0.000007  -0.000100  +1.000000]
  Euler XYZ (roll, pitch, yaw) [deg]:
    roll   = -0.0057
    pitch  = -0.0004
    yaw    = +0.0000
```

---

### 逆運動学テスト（`6_ik_test.py`）

所望のエンドエフェクタ姿勢に基づいて関節角度を求めます。

**入力形式**:
- 位置のみ: `<x> <y> <z>`（メートル）
- 位置 + 姿勢: `<x> <y> <z> <roll> <pitch> <yaw>`（度）

**例**:
```bash
uv run python example/6_ik_test.py

# Usage A
> 0.28 0 0.3  # Position only
====================================================
  Result / Result
====================================================
  Target position : [+0.2800, +0.0000, +0.3000] m
  Converged : Yes
  Iterations: 2000
  Position error: 5.62e-17 m
  Joint angles (deg) [first 6 control joints]:
    joint1     =  -0.0003 deg  (-0.0000 rad)
    joint2     = -22.9687 deg  (-0.4009 rad)
    joint3     = -24.2191 deg  (-0.4227 rad)
    joint4     =  +1.2508 deg  (+0.0218 rad)
    joint5     =  -0.0003 deg  (-0.0000 rad)
    joint6     =  +0.0057 deg  (+0.0001 rad)

# Usage B
> 0.28 0 0.3 0 1 0       # Position + Orientation
====================================================
  Result / Result
====================================================
  Target position   : [+0.2800, +0.0000, +0.3000] m
  Target orientation : [+0.00, +1.00, +0.00] deg
  Converged  : Yes
  Iterations: 2000
  Position error: 6.28e-17 m
  Joint angles (deg) [first 6 control joints]:
    joint1     =  -0.0003 deg  (-0.0000 rad)
    joint2     = -23.3968 deg  (-0.4084 rad)
    joint3     = -25.3018 deg  (-0.4416 rad)
    joint4     =  +2.9054 deg  (+0.0507 rad)
    joint5     =  -0.0003 deg  (-0.0000 rad)
    joint6     =  +0.0057 deg  (+0.0001 rad)
```
### MIT モードでの逆運動学制御（`7_arm_ik_control.py`）

MIT モードで逆運動学（IK）を使用し、ロボットアームのエンドエフェクタが移動すべき 3D 座標（X, Y, Z）と姿勢（オイラー角）を指定します。

**入力形式**:
- 位置のみ: `<x> <y> <z>`（メートル）
- 位置 + 姿勢: `<x> <y> <z> <roll> <pitch> <yaw>`（度）
- `state` を入力: 各関節の現在の実際のラジアン値を表示。
- `end_state` を入力: 空間内での現在のエンドエフェクタ実座標（m）とオイラー角（rad）を表示。

**実行方法**:
```bash
uv run python example/7_arm_ik_control.py

#Usage A
> 0.3 0.0 0.4 # Position only (orientation defaults to 0), move the arm end-effector to 0.3 meters forward and 0.4 meters above.

#Usage B
> 0.3 0.0 0.4 0.0 0.0 0.5 # Control both position and orientation: move to the specified position while rotating the wrist yaw angle by 0.5 radians.

> ctrl + c # Exit system
```
:::danger
このサンプルコードでは、ロボットアームが非常に高速で動作します。人や他の機器がアームの動作半径内に入らないようにしてください。
:::

### 逆運動学制御とスムーズな軌道生成（`8_arm_traj_control.py`）

MIT モードで逆運動学（IK）を使用して、目標時間内で一様またはスムーズな加減速の動作軌道を自動的に計画し、関節の激しい振動を回避します。

**入力形式**：
- 位置のみ：`<x> <y> <z>`（メートル）
- 位置 + 姿勢：`<x> <y> <z> <roll> <pitch> <yaw>`（度）
- 位置 + 姿勢 + 時間（デフォルト 2.0）：`<x> <y> <z> <roll> <pitch> <yaw> <time>`（度）
- `state` を入力：各関節の現在の実際のラジアン値を表示。
- `end_state` を入力：現在のエンドエフェクタの実際の空間座標（m）とオイラー角（rad）を表示。

**実行方法**：
```bash
uv run python example/8_arm_traj_control.py

#Usage A
> 0.3 0.0 0.4 # Position only, orientation defaults to 0, default movement time is 2.0 seconds

#Usage B
> 0.3 0.0 0.4 0.0 0.0 0.5 # Control both position and orientation: move to the specified position while rotating the wrist yaw angle by 0.5 radians, default movement time is 2.0 seconds

#Usage C
> 0.3 0.0 0.4 0.0 0.0 0.0 5.0 # Move the arm to the specific position and specify 5.0 seconds to slowly move there. (Note: If entering time, the preceding orientation parameters 0 0 0 cannot be omitted)

> ctrl + c # Exit system
```
---

## 重力補償テスト

### 重力補償制御 — 基本バージョン（`9_gravity_compensation.py`）

Pinocchio の動力学モデルを使用して、関節の重力を補償します。

**制御則**：
```
tau = g(q)          — Gravity feedforward
pos = current motor position   — Joint position follows current position
kp = 2,  kd = 1     — Unified stiffness/damping for all joints
```

**期待される動作**：
- アームは任意の姿勢で「浮いている」ようになります
- 手を離しても自重で落下しません
- 手で任意の位置に動かすことができます

**実行方法**：
```bash
uv run python example/9_gravity_compensation.py
```

**出力**：
- 各関節の目標トルクをリアルタイム表示（N·m）
- `Ctrl+C` を押して停止および切断

:::caution 重力補償を終了する前にホームに戻す
スクリプトを停止する際（`Ctrl+C`）、プログラムは**すべてのモーターを直接無効化**し、ロボットアームは**自動的にゼロ位置へは戻りません**。関節が急に落下して衝突や損傷を引き起こさないよう、終了前に必ずロボットアームを手で支えるか、安全／ホーム姿勢に移動させてください。
:::

:::tip 個別関節の補償調整
構造的な摩擦や組み立て誤差により、一部の関節で重力補償が不足または過剰になる場合は、コード内の `tau_g` 配列の該当要素に追加のスケーリングを適用できます：

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

例えば、`tau_g[2] *= 1.2` は、2 番目の関節の重力補償トルクを 20% 増加させることを意味します。一度に大きく変更しすぎないよう、実際のフローティング状態を見ながら項目ごとに調整することを推奨します。
:::


### 重力補償制御 — エンドエフェクタ速度ロック版（`10_gravity_compensation_lock.py`）

基本的な重力補償に基づき、エンドエフェクタ速度検出と関節角ロック機構を追加します。

**制御則**：
```
tau = g(q) + integral_term    — Gravity feedforward + integral term
pos = q_target                 — Target joint angle (locked or updated)
kp = 8.0,  kd = 1.0           — Enhanced stiffness/damping
```

**ロックロジック**：
- エンドの並進速度 `||v_ee|| < 0.04 m/s` かつ角速度 `||w_ee|| < 0.08 rad/s` のとき：
  - 目標関節角 `q_target` はロックされたまま
  - ロボットアームは現在位置にロックされる
- エンド速度がしきい値を超えたとき：
  - `q_target` が現在の関節角に更新される
  - 手で押して位置を変更できる

**期待される動作**：
- ロボットアームは現在位置にロックされ、目標角度を変えるには力が必要
- 基本バージョンより安定しており、姿勢保持が必要なシナリオに適しています

**実行方法**：
```bash
uv run python example/10_gravity_compensation_lock.py
```

**出力**：
- ロック状態（LOCKED / UPDATE）をリアルタイム表示
- エンドの並進速度・角速度
- 各関節の重力補償トルク（N·m）
- `Ctrl+C` を押して停止および切断

:::caution 重力補償を終了する前にホームに戻す
スクリプトを停止する際（`Ctrl+C`）、プログラムは**すべてのモーターを直接無効化**し、ロボットアームは**自動的にゼロ位置へは戻りません**。関節が急に落下して衝突や損傷を引き起こさないよう、終了前に必ずロボットアームを手で支えるか、安全／ホーム姿勢に移動させてください。
:::

:::tip 個別関節の補償調整
構造的な摩擦や組み立て誤差により、一部の関節で重力補償が不足または過剰になる場合は、コード内の `tau_g` 配列の該当要素に追加のスケーリングを適用できます：

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

例えば、`tau_g[2] *= 1.2` は、2 番目の関節の重力補償トルクを 20% 増加させることを意味します。一度に大きく変更しすぎないよう、実際のフローティング状態を見ながら項目ごとに調整することを推奨します。
:::

**安全テスト設定**：
スクリプト先頭の `ENABLED_JOINTS` リストを変更することで、安全テストのために指定した関節のみを有効化できます：
```python
ENABLED_JOINTS = ["joint1"]  # Enable only joint1
```

---

### シミュレーション環境

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic.png" />
</div>


#### 順運動学シミュレーション（`sim/fk_sim.py`）

対話型の順運動学シミュレーションで、MeshCat 上で関節角を入力してロボットアームの姿勢を可視化します。

**実行方法**：
```bash
uv run python example/sim/fk_sim.py
```

**インタラクティブコマンド**：
- 6 つの関節角（度）をスペース区切りで入力
- 例：`0 0 0 0 0 0`
- 例：`45 -30 15 -60 90 -180`
- `q`/`quit`/`exit`：終了

**機能**：
- エンドエフェクタの位置と姿勢をリアルタイム表示
- 連続入力により、さまざまな姿勢をテスト可能
- 整形された姿勢情報の出力

---

#### 逆運動学シミュレーション（`sim/ik_sim.py`）

対話型の逆運動学シミュレーションで、目標姿勢から関節角を自動的に求めて可視化します。

**実行方法**：
```bash
uv run python example/sim/ik_sim.py
```

**入力形式**：
- 位置のみ：`x y z`（メートル）
- 位置 + 姿勢：`x y z roll pitch yaw`（ラジアン）

**例**：
```bash
> 0.25 0.0 0.25              # Position only
> 0.25 0.0 0.25 0 0 0        # Position+Orientation
```

**機能**：
- IK 収束の自動判定
- 反復回数と誤差の表示
- ロボット姿勢のリアルタイム更新

---

#### 軌道計画シミュレーション（`sim/traj_sim.py`）

SE(3) 測地線に基づく軌道計画シミュレーションで、CLIK 追従と MeshCat アニメーション再生を含みます。

**実行方法**：
```bash
uv run python example/sim/traj_sim.py
```

**インタラクティブコマンド**：
- 入力：`x y z [roll pitch yaw]`（メートル／ラジアン）
- Enter キーでデフォルト設定を使用
- `q`：終了

**機能**：
- 現在位置から目標位置までの軌道を計画
- 最小ジャーク軌道プロファイルを使用
- 軌道統計情報をリアルタイム表示
- MeshCat で完全な軌道アニメーションを再生
- 参照軌道（灰色）と実軌道（緑色）を表示

---

#### ビジュアライザツール（`sim/visualizer.py`）

MeshCat ビジュアライザのラッパーで、統一されたロボット表示インターフェースを提供します。

**主な機能**：
- URDF モデルを読み込み、ロボットを表示
- 3D ポリライン軌道（参照／実軌道）を描画
- IK 目標姿勢を表示（三色軸 + 球）
- 関節軌道アニメーションの再生をサポート

**使用例**：
```python
from example.sim.visualizer import Visualizer
viz = Visualizer()
viz.update(q)  # Update robot pose
viz.draw_path(points, "path_name", color)  # Draw path
```

---

## FAQ

- **`Permission denied` エラーが発生する**
  デバイス権限を設定するために、`sudo chmod 666 /dev/ttyACM0` または `sudo chmod 666 /dev/can0` を実行していることを確認してください。

- **IK の解が得られない、または結果がおかしい**
  目標姿勢がロボットアームの作業空間内にあるか確認し、関節リミットの設定が正しいことを確認してください。

- **重力補償の効果が良くない**
  これは構造誤差や加工精度が原因の可能性があります。本プロジェクトの重力補償は URDF と Pinocchio に依存しています。実測パラメータに合わせて URDF を修正してみてください（このステップは AI に相談することもできます）。

---

## 連絡先

- **技術サポート**：[Submit Issue](https://github.com/vectorBH6/reBotArm_control_py/issues)
- **プロジェクトリポジトリ**：[GitHub](https://github.com/vectorBH6/reBotArm_control_py)
- **フォーラム**：[Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## 参考ドキュメント

- [Pinocchio 公式ドキュメント](https://stack-of-tasks.github.io/pinocchio/)
- [MeshCat 公式ドキュメント](https://github.com/rdeits/meshcat)
- [motorbridge SDK](https://github.com/motorbridge/motorbridge)

---

<div align="center">
  <strong>このプロジェクトが役に立った場合は、ぜひ Star をお願いします！</strong>
</div>