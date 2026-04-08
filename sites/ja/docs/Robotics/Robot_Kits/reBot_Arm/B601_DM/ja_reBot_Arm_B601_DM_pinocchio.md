---
description: このチュートリアルでは、ロボットアーム reBot Arm B601-DM に対して、Pinocchio と MeshCat を用いた運動学解析と可視化の方法を紹介します。
title: reBot Arm B601-DM 向け Pinocchio と MeshCat 入門
keywords:
  - Pinocchio
  - MeshCat
  - ロボットアーム
  - ロボット
  - LeRobot
  - 運動学
slug: /rebot_arm_b601_dm_pinocchio_meshcat
last_update:
  date: 2026-03-24
  author: LiuJunjie
translation:
  skip:
    - [zh-CN]
createdAt: '2026-03-24'
updatedAt: '2026-03-25'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_pinocchio_meshcat/
---

# reBot Arm B601-DM 向け Pinocchio と MeshCat 入門

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png)

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>6 自由度ロボットアーム · 複数モータ対応 · 運動学ソルバ · 軌道計画 · フルオープンソース</strong>
</p>

---

## 📖 はじめに

**reBotArm Control** は reBot Arm B601 ロボットアーム向けの Python 制御ライブラリで、低レベルのモータ制御から高レベルの運動学計算までを含む完全なソリューションを提供します。

### ✨ 主な特長

- 🦾 **デュアルモデル対応** — B601-DM（Damiao モータ）および B601-RS（RobStride モータ）
- 🧮 **運動学ソルバ** — Pinocchio に基づく順運動学/逆運動学
- 🛤️ **軌道計画** — SE(3) 測地線軌道 + CLIK 追従
- 🔧 **柔軟な設定** — YAML 設定ファイルによる迅速なハードウェア適応

---

## ⚙️ クイックスタート

### 必要条件

| 項目 | 要件 |
|------|-------------|
| **Python** | 3.10+ |
| **オペレーティングシステム** | Ubuntu 22.04+ |
| **通信インターフェース** | USB2CAN シリアルブリッジ または CAN インターフェース |

### インストール手順

#### Step 1. uv のインストール（未インストールの場合）

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

#### Step 2. 環境同期（すべての依存関係をインストール）

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

:::tip
`uv sync` は仮想環境が存在しない場合は自動的に作成し、`pyproject.toml` と `uv.lock` に従ってすべての依存関係をインストールします。
:::

---

## 🔌 ハードウェア構成

### デフォルト：Damiao USB2CAN シリアルブリッジ

reBot Arm B601-DM は、標準で Damiao USB2CAN シリアルブリッジモジュールを使用します。

**ハードウェア接続**：

1. USB ケーブルで USB2CAN モジュールを PC に接続します
2. システムは自動的に `/dev/ttyACM0` デバイスとして認識します

**設定の確認**：

```bash
# Check device
ls /dev/ttyACM0

# Scan motors
motorbridge-cli scan --vendor damiao --transport dm-serial \
    --serial-port /dev/ttyACM0 --serial-baud 921600
```

### オプション：標準 CAN インターフェース

他の USB-CAN アダプタ（CANable, PCAN など）を使用する場合：

```bash
# Start CAN interface
sudo ip link set can0 up type can bitrate 500000

# Verify interface
ip -details link show can0
```

### モータブランド設定

| モータブランド | 伝送方式 | 設定 | ボーレート |
|-------------|--------------|---------------|-----------|
| **Damiao** | シリアルブリッジ | `dm-serial` | 921600 |
| **Damiao** | CAN インターフェース | `socketcan` | 500000 |
| **RobStride** | CAN インターフェース | `socketcan` | 500000 |

:::tip

- シリアルブリッジを使用する Damiao モータでは、`--transport dm-serial` を必ず設定してください
- フィードバック ID 規則：`feedback_id = motor_id + 0x10`

:::

---

## 📁 プロジェクト構成

```
reBotArm_control_py/
├── config/                     # Configuration files
│   └── robot.yaml              # Joint parameter configuration
├── example/                    # Example programs
│   ├── Debug Tools/
│   │   ├── 1_damiao_text.py        # Single motor console
│   │   └── 2_zero_and_read.py      # Zero calibration
│   ├── Kinematics Tests/
│   │   ├── 5_fk_test.py            # Forward kinematics
│   │   └── 6_ik_test.py            # Inverse kinematics
│   ├── Real Machine Control/
│   │   ├── 7_arm_ik_control.py     # IK real-time control
│   │   ├── 8_arm_traj_control.py   # Trajectory planning
│   │   └── 9_gravity_compensation.py  # Gravity compensation
│   └── sim/                    # Simulation tools
├── reBotArm_control_py/        # Core library
│   ├── actuator/               # Actuator module
│   ├── kinematics/             # Kinematics module
│   ├── controllers/            # Controller module
│   └── trajectory/             # Trajectory planning module
├── urdf/                       # URDF model
└── README.md
```

---

## 🎮 サンプルプログラム

### デバッグツール

#### 1️⃣ 単一モータコンソール（`1_damiao_text.py`）

motorbridge SDK を直接用いた単一モータテストで、3 つの制御モードをサポートします。

**使用方法**：

```bash
uv run python example/1_damiao_text.py
```

**対話コマンド**：

| コマンド | 説明 |
|---------|-------------|
| `mit <pos_deg> [vel kp kd tau]` | MIT モード |
| `posvel <pos_deg> [vlim]` | POS_VEL モード |
| `vel <vel_rad_s>` | 速度モード |
| `enable` / `disable` | 有効化/無効化 |
| `set_zero` | ゼロ位置の設定 |
| `state` | 状態表示 |

---

#### 2️⃣ 原点キャリブレーション & 角度モニタ（`2_zero_and_read.py`）

すべての関節の原点を自動設定し、関節角度をリアルタイムで表示します。

**使用方法**：

```bash
uv run python example/2_zero_and_read.py
```

---

### 運動学テスト

#### 5️⃣ 順運動学テスト（`5_fk_test.py`）

関節角度からエンドエフェクタの姿勢を計算します。

**入力**：6 関節角（度）

**出力**：

- エンドエフェクタ位置（X, Y, Z）— 単位：メートル
- 回転行列（3×3）
- オイラー角（ロール/ピッチ/ヨー）— 単位：度

**例**：

```bash
uv run python example/5_fk_test.py
> 0 0 0 0 0 0
> 45 -30 15 -60 90 180
```

---

#### 6️⃣ 逆運動学テスト（`6_ik_test.py`）

所望のエンドエフェクタ姿勢から関節角度を求めます。

**入力形式**：

- 位置のみ：`<x> <y> <z>`（メートル）
- 位置 + 姿勢：`<x> <y> <z> <roll> <pitch> <yaw>`（度）

**例**：

```bash
uv run python example/6_ik_test.py
> 0.25 0.0 0.15              # Position only
> 0.25 0.0 0.15 0 0 0        # Position + Orientation
```

---

### 実機制御

:::tip パーミッション設定
実機制御のサンプルを実行する前に、デバイスのパーミッションを設定する必要があります：

```bash
# Set serial device permission (Damiao USB2CAN)
sudo chmod 666 /dev/ttyACM0

# Or for CAN interface (e.g., can0)
sudo chmod 666 /dev/can0
```

:::

#### 7️⃣ IK リアルタイム制御（`7_arm_ik_control.py`）

IK ソルバに基づくエンドエフェクタのリアルタイム制御。

**対話コマンド**：

| コマンド | 説明 |
|---------|-------------|
| `x y z [roll pitch yaw]` | 目標エンドエフェクタ姿勢 |
| `state` | 現在/目標状態の表示 |
| `pos` | 現在のエンドエフェクタ位置 |
| `q/quit/exit` | 終了 |

**使用方法**：

```bash
uv run python example/7_arm_ik_control.py
> 0.3 0.0 0.2
> 0.3 0.1 0.25 0 0.5 0
```

---

#### 8️⃣ 軌道計画制御（`8_arm_traj_control.py`）

SE(3) 測地線軌道計画 + CLIK 追従。

**入力形式**：

```
x y z [roll pitch yaw] [duration]
```

**パラメータ**：

- `x, y, z`: 目標位置（メートル）
- `roll, pitch, yaw`: 目標姿勢（ラジアン）
- `duration`: 移動時間（秒）、デフォルト 2.0s

**使用方法**：

```bash
uv run python example/8_arm_traj_control.py
> 0.3 0.0 0.3 0 0.4 0 2.0
```

---

#### 9️⃣ 重力補償制御（`9_gravity_compensation.py`）

Pinocchio の動力学モデルを用いて関節の重力を補償します。

**制御則**：

```
tau = g(q)          — Gravity feedforward
pos = current motor position  — Joint position follows current position
kp = 2,  kd = 1     — Unified stiffness/damping for all motors
```

**期待される挙動**：

- ロボットアームが任意の姿勢で「浮いた」ような状態になる
- 手を離しても自重で落下しない
- 手動で任意の位置に動かすことができる

**使用方法**：

```bash
uv run python example/9_gravity_compensation.py
```

**出力**：

- 各関節の期待トルクをリアルタイム表示（N·m）
- `Ctrl+C` で停止して切断

---

## 📄 ライセンス

このプロジェクトは **MIT License** のもとでオープンソースとして公開されています。

---

## ☎ お問い合わせ

- **技術サポート**： [Submit Issue](https://github.com/vectorBH6/reBotArm_control_py/issues)
- **リポジトリ**： [GitHub](https://github.com/vectorBH6/reBotArm_control_py)

---

<p align="center">
  <strong>🌟 このプロジェクトがお役に立ちましたら、Star を付けていただけると嬉しいです！</strong>
</p>
