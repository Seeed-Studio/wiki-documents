---
description: このチュートリアルでは、reBot Arm B601-RS ロボットアームで Pinocchio と MeshCat を用いた運動学解析と可視化の方法を紹介します。
title: reBot Arm B601-RS 向け Pinocchio と MeshCat 入門
keywords:
  - Pinocchio
  - MeshCat
  - ロボットアーム
  - ロボット
  - LeRobot
  - 運動学
  - Robostride
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_arm_b601_rs_pinocchio_meshcat
sku: 100019336
last_update:
  date: 2026-06-11
  author: LiJie
translation:
  skip:
    - zh-CN
createdAt: '2026-06-11'
updatedAt: '2026-06-11'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_pinocchio_meshcat/
---

# reBot Arm B601-RS 向け Pinocchio と MeshCat 入門

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

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png)

[Pinocchio](https://github.com/stack-of-tasks/pinocchio) は、ロボットの動力学解析と最適化のためのオープンソースライブラリです。効率的な順運動学 / 逆運動学、動力学計算、および軌道計画を提供します。[MeshCat](https://github.com/rdeits/meshcat) は、ロボットの状態や運動軌跡をリアルタイムに表示できる Web ベースの 3D 可視化ツールです。

本プロジェクトは、Pinocchio の強力な計算機能と MeshCat の直感的な可視化を組み合わせ、reBot Arm B601-RS 向けに完全な運動学解析およびデバッグツール一式を提供します。


---

## プロジェクトの特長

1. **完全な運動学解析**  
   順運動学 (FK) と逆運動学 (IK) の計算をサポートし、ロボットアームのエンドエフェクタ姿勢をリアルタイムに解くことができます。

2. **リアルタイム 3D 可視化**  
   追加ソフトウェアなしで、ブラウザ上の MeshCat を通じてロボットアームの状態と運動軌跡をリアルタイム表示します。

3. **軌道計画とトラッキング**  
   SE(3) 測地線軌道計画を実装し、CLIK（Closed-Loop Inverse Kinematics）トラッキング制御をサポートします。

4. **重力補償制御**  
   Pinocchio の動力学モデルに基づいて関節の重力トルクを計算し、ロボットアームの「フローティング」効果を実現します。基本版とエンドエフェクタ速度ロック版の両方をサポートします。

5. **マルチモードモータ制御**  
   MIT、POS_VEL、VEL 制御モードをサポートし、Damiao および Robostride の両モータプロトコルと互換性があります。

6. **オープンソース & 拡張性**  
   すべてのコードはオープンソースであり、ユーザーはニーズに応じて制御アルゴリズムや可視化効果をカスタマイズできます。

## 仕様

このチュートリアルのハードウェアは [Seeed Studio](https://www.seeedstudio.com/) によって提供されています。

| パラメータ | 仕様 |
|-----------|-------------|
| ロボットアームモデル | reBot Arm B601-RS 組立済みキット（グリッパ付き） |
| 自由度 | 6+1（グリッパ付き） |
| リーチ | 754.7 mm（グリッパ付き） / 587.5 mm（グリッパなし） |
| 可搬重量 | 定格荷重 2.5 kg / 最大荷重 5 kg |
| 関節可動範囲 | J1: ±150° / J2: 220° ~ 0° / J3: 220° ~ 0° / J4: ±90° / J5: ±90° / J6: ±180° / グリッパ: 345° ~ 0° |
| 繰り返し精度 | 0.1 mm |
| 自重 | 6.7 kg |
| サーボモータ | RobStride 06 × 3 / RobStride 00 × 4 |
| 通信方式 | CAN バス @ 1 Mbps |
| 動作電圧 | DC 48V |
| 電源 | DC 48V 15A |
| 動作温度 | -20°C ~ 50°C |
| 制御方法 | PC |

### 対応ソフトウェアプラットフォーム

| プラットフォーム | 対応状況 |
|----------|---------------|
| ROS1 | ✅ |
| MoveIt1 | ✅ |
| ROS2 | ✅ |
| MoveIt2 | ✅ |
| Python | ✅ |
| LeRobot | ✅ |
| Isaac Sim | ✅ |
| Pinocchio | ✅ |

### 関節モータパラメータ

| パラメータ | RobStride 00 | RobStride 06 |
|-----------|--------------|--------------|
| 定格電圧 | 48V | 48V |
| 定格電流 | 4.7 Apk ± 10% | 14.3 Apk ± 10% |
| 最大電流 | 15.5 Apk ± 10% | 57 Apk ± 10% |
| 定格トルク | 5 N.m | 11 N.m |
| 最大トルク | 14 N.m | 36 N.m |
| 定格回転数 | 100 rpm ± 10% | 100 rpm ± 10% |
| 無負荷最大回転数 | 315 rpm ± 10% | 480 rpm ± 10% |
| 減速比 | 10 : 1 | 9 : 1 |
| 極対数 | 28 | — |
| モータインダクタンス | 750 ± 20 μH | 0.165 mH ± 10% |
| 線抵抗 | 1.5 ± 10% Ω | 0.23 ± 10% Ω |
| 外径 | 57 mm | 82 mm |
| 高さ | 51 ± 1 mm | 49 ± 0.5 mm |
| モータ重量 | 310 g ± 3 g | 621 g |
| エンコーダ分解能 | 14 bit（単回転アブソリュート） | |
| エンコーダ数 | 2 | |
| エンコーダタイプ | 磁気エンコーダ（単回転） | |
| 制御インターフェース | CAN @ 1 Mbps | |
| デバッグインターフェース | UART @ 921600 bps | |
| 制御モード | MIT モード / スピードモード / 位置モード / トルクモード | |
| 保護機能 | 過温度保護：モータサーミスタ温度が 145°C を超えた場合<br />低電圧保護：モータ電圧が保護電圧 12V を下回った場合 | |

## 部品表 (BOM)

| コンポーネント | 数量 | 同梱 |
|-----------|----------|----------|
| reBot Arm B601-RS ロボットアーム | 1 | ✅ |
| CANABLE | 1 | ✅ |
| 電源アダプタ (DC 48V 15A) | 1 | ✅ |
| USB-C ケーブル | 1 | ✅ |
| グリッパ | 1 | ✅ |


## 動作環境要件

| 項目 | 要件 |
|------|-------------|
| **Python** | 3.10+ |
| **オペレーティングシステム** | Ubuntu 22.04+ |
| **通信インターフェース** | CAN インターフェース (can0) |
| **電源** | DC 48V 15A |

---

## インストール手順

### ステップ 1. uv をインストール（未インストールの場合）

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### ステップ 2. 環境同期（すべての依存関係をインストール）

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git 
cd reBotArm_control_py
uv sync
```

:::tip
`uv sync` は仮想環境が存在しない場合は自動的に作成し、`pyproject.toml` と `uv.lock` に基づいてすべての依存関係をインストールします。
:::

### ステップ 3. RS バージョン用に設定ファイルを変更

この Wiki は **reBot Arm B601-RS** 向けです。サンプルを実行する前に、`config/rebotarm.yaml` 内のハードウェア設定を DM バージョンから RS バージョンに切り替えてください：

```yaml
# Before modification
hardware_yaml: "rebotarm_dm.yaml"

# After modification
hardware_yaml: "rebotarm_rs.yaml"
```

:::caution
この設定を変更しない場合、プログラムは Damiao モータプロトコルで通信を行うため、RS モータが認識されなかったり正常に動作しなかったりします。
:::


### デバッグツール

:::tip CAN チャネル設定
実機制御サンプルを実行したりモータをデバッグしたりする前に、CAN チャネルを設定する必要があります（PCAN-USB の場合、再接続後は再設定が必要です）：

```bash
# PCAN-USB should usually appear directly as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up    # Bring up can0
```

:::

#### 単一モータコンソール — Robostride RS06 (`0x01rs06_test.py`)

Robostride RS06 単一モータテストに motorbridge SDK を直接使用します。RS06 モータは **CAN バス** で通信します。

**実行コマンド**:
```bash
uv run python example/0x01rs06_test.py
```

**対話コマンド**:
| コマンド | 説明 |
|---------|-------------|
| `enable` / `disable` | 有効化 / 無効化 |
| `set_zero` | ソフトウェアゼロ位置を設定 |
| `state` | 現在の状態を表示 |
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

**注意**: Robostride モータは CAN インターフェース（デフォルト `can0`）を使用し、ホスト / フィードバック ID はデフォルトで `0xFD` です。

---

#### ゼロキャリブレーションと角度モニタリング (`2_zero_and_read.py`)

すべての関節のゼロ位置を自動的に設定し、関節角度をリアルタイムに表示します。

**実行コマンド**:
```bash
uv run python example/2_zero_and_read.py
```

---

### 基本制御テスト

#### MIT モード全関節制御 (`3_mit_control.py`)

すべての関節で MIT モードを統一的に使用し、各サイクルで同期的に制御コマンドを送信します。

**入力**: すべての関節角度（度）、スペース区切り。グリッパが構成されている場合は、追加でグリッパ角度が必要です。

**実行コマンド**:
```bash
uv run python example/3_mit_control.py
> 0 0 0 0 0 0        # Arm only
> 0 0 0 0 0 0 2.0    # Arm + gripper
```

---

#### POS_VEL モード全関節制御 (`4_pos_vel_control.py`)

すべての関節で POS_VEL モードを統一的に使用し、各サイクルで同期的に制御コマンドを送信します。

**入力**: すべての関節角度（度）、スペース区切り。

**実行コマンド**:
```bash
uv run python example/4_pos_vel_control.py
> 0 0 0 0 0 0
```

---

### 運動学テスト

#### 順運動学テスト (`5_fk_test.py`)

関節角度に基づいてエンドエフェクタの姿勢を計算します。

**入力**: 6 関節角度（度）

**出力**:
- エンドエフェクタ位置 (X, Y, Z) — 単位: メートル
- 回転行列 (3×3)
- オイラー角 (ロール / ピッチ / ヨー) — 単位: 度

**例**:
```bash
uv run python example/5_fk_test.py
> 0 0 0 0 0 0
> 45 -30 15 -60 90 180
```

---

#### 逆運動学テスト (`6_ik_test.py`)

目標とするエンドエフェクタ姿勢に基づいて関節角度を求めます。

**入力形式**:
- 位置のみ: `<x> <y> <z>`（メートル）
- 位置 + 姿勢: `<x> <y> <z> <roll> <pitch> <yaw>`（度）

**例**:
```bash
uv run python example/6_ik_test.py
> 0.25 0.0 0.15              # Position only
> 0.25 0.0 0.15 0 0 0        # Position + orientation
```

---

### シミュレーション環境

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic_rs.png" />
</div>


#### 順運動学シミュレーション (`sim/fk_sim.py`)

対話的な順運動学シミュレーションで、関節角度を入力して MeshCat 上にロボットアームの姿勢を可視化します。

**実行コマンド**:
```bash
uv run python example/sim/fk_sim.py
```

**対話コマンド**:
- 6 つの関節角度（度）をスペース区切りで入力
- 例: `0 0 0 0 0 0`
- 例: `45 -30 15 -60 90 -180`
- `q`/`quit`/`exit`: 終了

**機能**:
- エンドエフェクタの位置と姿勢をリアルタイムで表示
- 連続入力をサポートし、さまざまな姿勢をテスト可能
- 整形された姿勢情報を出力

---

#### 逆運動学シミュレーション (`sim/ik_sim.py`)

対話型の逆運動学シミュレーションで、目標姿勢に対して関節角を自動で解き、可視化します。

**実行コマンド**:
```bash
uv run python example/sim/ik_sim.py
```

**入力形式**:
- 位置のみ: `x y z`（メートル）
- 位置 + 姿勢: `x y z roll pitch yaw`（ラジアン）

**例**:
```bash
> 0.25 0.0 0.25              # Position only
> 0.25 0.0 0.25 0 0 0        # Position + orientation
```

**特徴**:
- IK が収束するかどうかを自動判定
- 反復回数と誤差を表示
- ロボット姿勢をリアルタイム更新

---

#### 軌道計画シミュレーション (`sim/traj_sim.py`)

SE(3)測地線軌道計画シミュレーションで、CLIK 追従と MeshCat アニメーション再生を含みます。

**実行コマンド**:
```bash
uv run python example/sim/traj_sim.py
```

**対話コマンド**:
- 入力: `x y z [roll pitch yaw]`（メートル/ラジアン）
- そのまま Enter を押すとデフォルト設定を使用
- `q`: 終了

**特徴**:
- 現在位置から目標姿勢までの軌道を計画
- 最小ジャーク軌道プロファイルを使用
- 軌道統計情報をリアルタイム表示
- MeshCat で軌道全体のアニメーションを再生
- 参照経路（灰色）と実際の経路（緑色）を表示

---

#### 可視化ツール (`sim/visualizer.py`)

MeshCat ビジュアライザのラッパーで、統一されたロボット表示インターフェースを提供します。

**主な機能**:
- URDF モデルを読み込みロボットを表示
- 3D ポリライン経路（参照/実際）を描画
- IK 目標姿勢を表示（三色座標軸 + 球）
- 関節軌道アニメーションの再生をサポート

**使用例**:
```python
from example.sim.visualizer import Visualizer
viz = Visualizer()
viz.update(q)  # Update robot pose
viz.draw_path(points, "path_name", color)  # Draw path
```

---

### 実機制御

#### IK リアルタイム制御 (`7_arm_ik_control.py`)

IK 解法に基づくエンドエフェクタのリアルタイム制御。

**対話コマンド**:
| コマンド | 説明 |
|---------|-------------|
| `x y z [roll pitch yaw]` | 目標エンドエフェクタ姿勢 |
| `state` | 状態を表示 |
| `pos` | 現在のエンドエフェクタ位置 |
| `q/quit/exit` | 終了 |

**実行コマンド**:
```bash
uv run python example/7_arm_ik_control.py
> 0.3 0.0 0.2
> 0.3 0.1 0.25 0 0.5 0
```

---

#### 軌道計画制御 (`8_arm_traj_control.py`)

SE(3)測地線軌道計画 + CLIK 追従。

**入力形式**:
```
x y z [roll pitch yaw] [duration]
```

**パラメータ説明**:
- `x, y, z`: 目標位置（メートル）
- `roll, pitch, yaw`: 目標姿勢（ラジアン）
- `duration`: 動作時間（秒）、デフォルト 2.0s

**実行コマンド**:
```bash
uv run python example/8_arm_traj_control.py
> 0.3 0.0 0.3 0 0.4 0 2.0
```

---

#### 重力補償制御 — 基本版 (`9_gravity_compensation.py`)

Pinocchio の動力学モデルを使用して関節の重力を補償します。

**制御則**:
```
tau = g(q)          — Gravity feedforward
pos = current motor position   — Joint position follows current position
kp = 2,  kd = 1     — Unified stiffness/damping for all joints
```

**期待される挙動**:
- ロボットアームが任意の姿勢で「浮いた」状態になる
- 手を離しても自重で落下しない
- 手で任意の位置に動かすことができる

**実行コマンド**:
```bash
uv run python example/9_gravity_compensation.py
```

**出力**:
- 各関節の目標トルクをリアルタイム表示（N·m）
- `Ctrl+C` を押して停止および切断

:::caution 重力補償を終了する前にホームに戻してください
スクリプトを停止する際（`Ctrl+C`）、プログラムは**すべてのモータを直接無効化**し、ロボットアームは**自動的にゼロ位置へは戻りません**。関節が急に落下して衝突や破損を引き起こさないよう、終了前に必ずロボットアームを手で支えるか、安全/ホーム姿勢に移動させてください。
:::

:::tip 個別関節の補償調整
一部の関節が構造的な摩擦や組立誤差により過小補償または過大補償となる場合、コード内の `tau_g` 配列の該当要素に追加のスケーリングを適用できます:

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

例えば、`tau_g[2] *= 1.2` は 2 番目の関節の重力補償トルクを 20% 増加させることを意味します。一度に大きく変更しすぎないよう、実際のフローティング状態を見ながら項目ごとに調整することを推奨します。
:::

---

#### 重力補償制御 — エンドエフェクタ速度ロック版 (`10_gravity_compensation_lock.py`)

基本的な重力補償に基づき、エンドエフェクタ速度検出と関節角ロック機構を追加したものです。

**制御則**:
```
tau = g(q) + integral_term    — Gravity feedforward + integral term
pos = q_target                 — Target joint angle (locked or updated)
kp = 8.0,  kd = 1.0           — Enhanced stiffness/damping
```

**ロックロジック**:
- エンドの並進速度 `||v_ee|| < 0.04 m/s` かつ角速度 `||w_ee|| < 0.08 rad/s` のとき:
  - 目標関節角 `q_target` をロックしたまま維持
  - ロボットアームは現在位置でロックされる
- エンド速度がしきい値を超えたとき:
  - `q_target` を現在の関節角に更新
  - 手で押して位置を変更可能

**期待される挙動**:
- ロボットアームが現在位置でロックされ、目標角度を変えるには力が必要
- 基本版より安定しており、姿勢保持が必要なシナリオに適する

**実行コマンド**:
```bash
uv run python example/10_gravity_compensation_lock.py
```

**出力**:
- ロック状態をリアルタイム表示（LOCKED / UPDATE）
- エンドの並進速度・角速度
- 各関節の重力補償トルク（N·m）
- `Ctrl+C` を押して停止および切断

:::caution 重力補償を終了する前にホームに戻してください
スクリプトを停止する際（`Ctrl+C`）、プログラムは**すべてのモータを直接無効化**し、ロボットアームは**自動的にゼロ位置へは戻りません**。関節が急に落下して衝突や破損を引き起こさないよう、終了前に必ずロボットアームを手で支えるか、安全/ホーム姿勢に移動させてください。
:::

:::tip 個別関節の補償調整
一部の関節が構造的な摩擦や組立誤差により過小補償または過大補償となる場合、コード内の `tau_g` 配列の該当要素に追加のスケーリングを適用できます:

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

例えば、`tau_g[2] *= 1.2` は 2 番目の関節の重力補償トルクを 20% 増加させることを意味します。一度に大きく変更しすぎないよう、実際のフローティング状態を見ながら項目ごとに調整することを推奨します。
:::

**安全テスト用設定**:
スクリプト先頭の `ENABLED_JOINTS` リストを変更することで、安全テストのために指定した関節のみを有効化できます:
```python
ENABLED_JOINTS = ["joint1"]  # Enable only joint1
```

---

## FAQ

- **`Permission denied` エラーが発生する**  
  デバイス権限を設定するために、`sudo chmod 666 /dev/ttyACM0`（Damiao）または `sudo chmod 666 /dev/can0`（Robostride）を実行していることを確認してください。

- **IK の解が失敗する、または結果がおかしい**  
  目標姿勢がロボットアームの作業空間内にあるか確認し、関節リミットが正しく設定されていることを確認してください。

- **重力補償の効果が悪い**  
  構造誤差や加工精度が原因の可能性があります。本プロジェクトの重力補償は URDF と Pinocchio に依存しています。実際に計測したパラメータに合わせて URDF を修正してみてください（このステップは AI に相談することもできます）。

- **Robostride モータの状態が読み取れない**  
  motorbridge 内部のプロトコル設定の問題により、RS モータは DM モータのように状態を問い合わせできない場合があります。実際の動作結果に基づいて判断するか、`ping` コマンドを使用してモータ通信が正常か確認してみてください。

- **Damiao と Robostride のモータ設定を切り替える方法**  
  `config/rebotarm_dm.yaml`（Damiao）または `config/rebotarm_rs.yaml`（Robostride）設定ファイルを変更し、コード内で対応する設定を読み込んでください。

---

## 連絡先

- **技術サポート**: [Issue を送信](https://github.com/vectorBH6/reBotArm_control_py/issues)
- **プロジェクトリポジトリ**: [GitHub](https://github.com/vectorBH6/reBotArm_control_py)
- **フォーラム**: [Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## 参考資料

- [Pinocchio 公式ドキュメント](https://stack-of-tasks.github.io/pinocchio/)
- [MeshCat 公式ドキュメント](https://github.com/rdeits/meshcat)
- [motorbridge SDK](https://github.com/motorbridge/motorbridge)

---
