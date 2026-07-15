---
description: このチュートリアルでは、Isaacsim をダウンロードし、開発およびデバッグ用にシミュレーション環境内で reBotArm ロボットを展開する方法を説明します。
title: Isaacsim を使用した reBotArm のシミュレーション
keywords:
  - Isaacsim
  - マニピュレータ
  - ロボット
  - 遠隔操作
  - 運動学
  - Robostride
image: https://files.seeedstudio.com//wiki/robotics/projects/rebot_arm/reBot_Arm_RS_isaacsim.webp
slug: /rebot_arm_b601_rs_isaacsim
last_update:
  date: 7/7/2026
  author: LiShanghang
createdAt: '2026-07-07'
updatedAt: '2026-07-07'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_isaacsim/
---

## はじめに

reBot-Isaacsim は、reBotArm 専用に設計された NVIDIA Isaac Sim シミュレーションプロジェクトです。Isaac Sim の高精度な物理エンジンを活用して、仮想環境内でロボットアームの運動学的特性とグリッパー協調ロジックを正確に再現し、制御アルゴリズム開発、軌道計画の検証、および通信プロトコルのテストのための、シミュレーション専用の独立した環境を提供します。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/reBot_Arm_RS_isaacsim.jpg"/>
</div>

## 動作環境要件
- オペレーティングシステム: Ubuntu 22.04 LTS / 24.04 LTS（推奨）または Windows 11（WSL2 が必要）  
- GPU: NVIDIA RTX シリーズグラフィックスカード（RTX 3070 以上を推奨）、VRAM ≥ 8GB  
- ドライバ: NVIDIA 公式ドライバ ≥ 535.x、CUDA 12.x をサポート  
- メモリ: ≥ 32GB RAM（Isaac Sim のシーンおよび物理シミュレーションは多くのメモリを使用）  
- ストレージ: ≥ 100GB の空き SSD 容量（Isaac Sim のインストール、キャッシュ、USD アセット用）

:::info
この wiki で使用しているコンピュータは、NVIDIA RTX 4080 GPU を搭載し、Ubuntu 22.04 LTS オペレーティングシステムを実行しています。
:::

## Isaacsim のインストール

公式リンクとリソース:

https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/quick-install.html

https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/download.html#isaac-sim-latest-release


### 🔧 方法 1: 事前コンパイル済みバイナリによるインストール

> 💡 ほとんどのユーザーに適しており、コンパイル不要ですぐに利用できます。

#### ダウンロードと解凍

[NVIDIA 公式サイト](https://developer.nvidia.com/isaac-sim) から `isaac-sim-standalone-6.0.0-linux-x86_64.zip` をダウンロードします。

```Bash
mkdir -p ~/isaacsim
cd ~/Downloads
unzip isaac-sim-standalone-6.0.0-linux-x86_64.zip -d ~/isaacsim
cd ~/isaacsim
./post_install.sh
```

#### 環境変数の設定

`~/.bashrc` または `~/.zshrc` に次を追加します:

```Bash
export ISAACSIM_PATH="${HOME}/isaacsim"
export ISAACSIM_PYTHON_EXE="${ISAACSIM_PATH}/python.sh"
```

その後、`source ~/.bashrc` を実行して反映させます。

#### 起動確認

```Bash
${ISAACSIM_PATH}/isaac-sim.sh
```

初回起動時にはシェーダのキャッシュが行われ、5〜10 分ほどかかる場合があります。GUI が表示されるまでしばらくお待ちください。

### ⚙️ 方法 2: ソースからビルド（推奨）

> 💡 基盤コードの調整やコア機能のデバッグが必要な開発者に適しています。

#### 依存関係のインストール

```Bash
sudo apt update
sudo apt install cmake build-essential git python3-pip
```

CUDA と cuDNN が正しくインストールされており、GPU ドライバとバージョンが一致していることを確認してください。

#### クローンとビルド

```Bash
git clone https://github.com/NVIDIA-Omniverse/IsaacSim.git
cd IsaacSim
./build.sh release
```

ビルドプロセスには、ハードウェア構成に応じて 30〜60 分かかる場合があります。

#### テスト実行

```Bash
_build/linux-x86_64/release/isaac-sim.sh
```

## プロジェクトのダウンロード

```Bash
git clone https://github.com/Seeed-Projects/reBot-Isaacsim.git
```

reBotArm_control_py の uv 環境を構成する

```bash
cd third_party/reBotArm_control_py
uv sync
```

### 機能コンポーネントの概要

このプロジェクトでは、さまざまな利用シーンに対応する複数の sender を提供します:

| コンポーネント | 説明 |
|-----------|------------|
| `gravity_joint_sender` | **重力補償ハンドルモード**: 改造済みロボットアーム（クローを取り外し、ハンドルを追加）を重力補償モードで手動操作し、その関節角度を Isaac Sim にリアルタイム同期します |
| `isaacsim_ik_sender` | **逆運動学 (IK) モード**: エンドエフェクタの姿勢を入力し、IK ソルバで関節角度を算出して Isaac Sim に送信します |
| `isaacsim_traj_sender` | **軌道計画 (Traj) モード**: IK の上に関節空間の軌道計画（MIN_JERK 時間プロファイル）を追加し、スムーズなモーション制御を実現します |
| `isaacsim_joint_test_sender` | **関節テストモード**: 実機ロボットなしで、あらかじめ設定された関節角度軌道を送信し、Isaac Sim の receiver と通信が正しく動作しているかを検証します |
| `joint_reader_sender` | **実機からシミュレーションへのマッピングモード**: 関節角度を読み取り専用で取得し、それを Isaac Sim にマッピングします。他の制御プロジェクトと併用するのに最適（例: 実機が別タスクを実行している様子を Isaac Sim 上で可視化） |

### ディレクトリ構成

```
reBot-Isaacsim/
├── pyproject.toml                      # uv workspace configuration
├── README.md
├── README_EN.md
├── reBotArm_Isaacsim/                  # Main example directory
│   ├── gravity_joint_sender.py         # Gravity compensation handle mode (modified robotic arm, manual manipulation)
│   ├── isaacsim_ik_sender.py           # Inverse kinematics mode (IK control)
│   ├── isaacsim_traj_sender.py         # Trajectory planning mode (IK joint space trajectory)
│   ├── isaacsim_joint_test_sender.py   # Joint test mode (preset trajectory, no hardware needed)
│   ├── joint_reader_sender.py          # Real-to-Sim mapping mode (read-only joints, sync visualization)
│   ├── isaacsim_joint_receiver.py      # Isaac Sim receiver (joint angle synchronization)
│   ├── live_sync.py                    # Startup instruction script
│   ├── run_sender.sh # Start sender
│   └── run_isaacsim_receiver.sh        # Start Isaac Sim receiver
├── third_party/
│   └── reBotArm_control_py/            # Core control library (separate uv environment)
│       ├── pyproject.toml
│       └── ...
└── usd/
    └── RS-rebot-dev-arm/
        └── 00-arm-rs_asm-v3.usda       # Isaac Sim robotic arm asset
```

## 起動方法（デュアルターミナルモード）

2 つの別々のターミナルが必要です。**ターミナル 1 では Isaac Sim の receiver を実行し**、**ターミナル 2 では目的の機能に応じた sender を実行します**。

### ターミナル 1 — Isaac Sim Receiver の起動（全モード共通）

```bash
cd reBotArm_Isaacsim
./run_isaacsim_receiver.sh
```

**期待される動作:**
- Isaac Sim の GUI を起動する
- グラウンドプレーンとロボットアームの USD アセットを読み込む
- `127.0.0.1:5005` で UDP パケットを待ち受ける
- sender からの接続を待機する

### ターミナル 2 — 適切な Sender の起動

**必ず先に receiver を起動し、その後に sender を起動してください。**

:::tip

一部のモードでは実機のロボットアームが必要です。以下のように USB-to-CAN アダプタを設定してください。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS_usb2can.png"/>
</div>

```bash
# Check the CAN interface status
ip link show can0

# Bring up the CAN interface with a bitrate of 1000000
sudo ip link set can0 up type can bitrate 1000000 restart-ms 100
```

:::

#### ① 関節テストモード (`isaacsim_joint_test_sender`)

実機ハードウェアは不要です。あらかじめ定義された関節軌道を連続的に送信し、Isaac Sim の receiver との通信を検証します。

```bash
cd reBotArm_Isaacsim
uv run python isaacsim_joint_test_sender.py
```

sender は複数の事前定義された関節構成間を連続的に補間し、それらを Isaac Sim に送信します。CAN 接続は不要です。

#### ② 逆運動学モード (`isaacsim_ik_sender`)

エンドエフェクタの姿勢（位置/姿勢）を入力します。IK ソルバが関節構成を計算し、Isaac Sim 内のロボットアームを駆動します。

`reBotArm_Isaacsim/` ディレクトリから次を実行します:

```bash
cd reBotArm_Isaacsim
uv run python isaacsim_ik_sender.py
```

**入力形式（1 行につき 1 コマンド）:**

```text
x y z                       # Position (meters), keep current orientation
x y z r p y                 # Position + orientation (meters/degrees)
q j1 j2 j3 j4 j5 j6         # Send joint angles directly (degrees)
gripper <0~1>               # Update gripper only
```

#### ③ 軌道計画モード (`isaacsim_traj_sender`)

IK の上に関節空間の軌道計画（MIN_JERK）を追加し、ロボットのスムーズな動作を実現します。

`reBotArm_Isaacsim/` ディレクトリから次を実行します:

```bash
cd reBotArm_Isaacsim
uv run python isaacsim_traj_sender.py
```

**入力形式（1 行につき 1 コマンド）:**

```text
x y z                       # Position (meters)
x y z r p y                 # Position + orientation (meters/degrees)
q j1 j2 j3 j4 j5 j6         # Send joint angles directly (degrees)
gripper <0~1>               # Update gripper only
speed <scale>               # Adjust trajectory duration scaling
resync                      # Re-read the current joint state from Isaac Sim
```

#### ④ 重力補償ハンドルモード (`gravity_joint_sender`)

改造済みロボットアーム（グリッパーを取り外し、ハンドルを取り付けたもの）向けに設計されています。ロボットを手で案内すると、Isaac Sim がその動きを追従します。

```bash
cd reBotArm_Isaacsim
./run_sender.sh
```

**期待される動作:**
- 実機ロボットアームに接続し、重力フィードフォワード補償付き MIT 制御を有効化する
- ロボットアームを手で自由に動かすことができる
- 関節角度が 60 Hz で UDP により連続送信される

#### ⑤ 実機からシミュレーションへのマッピングモード (`joint_reader_sender`)

関節角度のみを読み取り、実機ロボットの状態を Isaac Sim 内にミラーリングします。このモードは、実機が別のアプリケーションによって制御されている間の可視化を目的としています。

`reBotArm_Isaacsim/` ディレクトリから次を実行します:

```bash
cd reBotArm_Isaacsim
uv run python joint_reader_sender.py
```

**期待される動作:**
- 制御コマンドを一切送信せず、関節角度のみを読み取る（パッシブフィードバックモード）
- 関節角度を 60 Hz で UDP により連続送信する
- 別プロジェクトによって制御されている実機ロボットを、Isaac Sim 上で可視化する

## 通信プロトコル

UDP JSON（ポート `127.0.0.1:5005`）を使用します。

**Sender ペイロード（フレームごと）:**

```json
{
  "sequence": 123,
  "timestamp": 1718000000.123,
  "joint_positions": [0.0, 0.1, 0.2, -0.1, 0.0, -0.02],
  "gripper_position": 0.05
}
```

| フィールド | 型 | 説明 |
|------|------|------|
| `sequence` | int | フレームごとに増加するシーケンス番号 |
| `timestamp` | float | Unix タイムスタンプ（秒） |
| `joint_positions` | float[6] | 最初の 6 関節の位置（rad） |
| `gripper_position` | float | グリッパ位置（m）。sender によって `GRIPPER_POSITION_SCALE=0.03` を用いて変換されます |

**グリッパー制御パイプライン：**

送信側 `gripper_q` → `gripper_position = -gripper_q × 0.03` → 受信側 `× 0.01` → 2関節グリッパーの位置目標

## 設定パラメータ

### 送信側（`gravity_joint_sender.py`）

| パラメータ | デフォルト | 説明 |
|------|--------|------|
| `ARM_JOINT_COUNT` | 6 | アーム関節数 |
| `DEFAULT_PORT` | 5005 | UDP ポート |
| `DEFAULT_SEND_HZ` | 60.0 | 送信周波数（Hz） |
| `GRIPPER_POSITION_SCALE` | 0.03 | グリッパー角度から位置への変換係数 |
| `position_alpha` | 0.2 | ローパスフィルタ係数 |

### 受信側（`isaacsim_joint_receiver.py`）

| パラメータ | デフォルト | 説明 |
|------|--------|------|
| `ARM_JOINT_COUNT` | 6 | アーム関節数 |
| `DEFAULT_PORT` | 5005 | UDP ポート |
| `DEFAULT_RENDER_HZ` | 120.0 | シミュレーション描画周波数（Hz） |
| `GRIPPER_POSITION_SCALE` | 0.01 | 追加のグリッパー位置スケーリング係数 |
| `ROBOT_PRIM_PATH` | `/World/reBotArm` | Isaac Sim 内の Robot Prim パス |
| `ASSET_RELATIVE_PATH` | `usd/RS-rebot-dev-arm/00-arm-rs_asm-v3.usda` | USD アセットへの相対パス |

## トラブルシューティング

### `OSError: [Errno 98] Address already in use`

ポート `5005` がすでに使用されています。次のコマンドでポートを使用しているプロセスを特定して終了します：

```bash
# Find the process using port 5005
sudo lsof -i :5005

# Terminate the process (replace PID with the actual process ID)
kill <PID>
```

### Isaac Sim アセットが見つからない

USD アセットが存在し、`REPO_ROOT` が正しく設定されていることを確認します：

```bash
ls usd/RS-rebot-dev-arm/00-arm-rs_asm-v3.usda
```

### CAN バスが Ready にならない

CAN インターフェースが有効化され、正しいビットレートで設定されていることを確認します：

```bash
can_restart can0

# Verify the bitrate
ip -details link show can0 | grep bitrate
```

### 関節角度が同期しない

- 送信側と受信側の両方がポート `5005` を使用していることを確認します。
- 送信側のログが継続的に `[send]` を出力していることを確認します。
- 受信側のログが継続的に `[recv]` を出力していることを確認します。
- ハードウェア関連の問題を切り分けるために、`isaacsim_joint_test_sender.py` を試してください。

### コンポーネントと Python 環境

| コンポーネント | Python 環境 | 起動スクリプト |
|------|------|------|
| 送信側（実機ロボット） | `reBotArm_control_py` uv 環境 | `run_sender.sh` |
| 送信側（テストモード） | `reBotArm_control_py` uv 環境 | `isaacsim_joint_test_sender.py` |
| 受信側 | Isaac Sim 公式 Python（`python.sh`） | `run_isaacsim_receiver.sh` |


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>




