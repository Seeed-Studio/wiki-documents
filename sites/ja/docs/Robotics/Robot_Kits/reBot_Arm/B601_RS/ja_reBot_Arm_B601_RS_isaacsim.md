---
description: このチュートリアルでは、Isaacsim をダウンロードし、開発およびデバッグ用にシミュレーション環境へ reBotArm ロボットを展開する方法を説明します。
title: Isaacsim を使用した reBotArm のシミュレーション
keywords:
  - Isaacsim
  - マニピュレータ
  - ロボット
  - 遠隔操作
  - 運動学
  - Robostride
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/reBot_Arm_RS_isaacsim.jpg
slug: /rebot_arm_b601_rs_isaacsim
last_update:
  date: 8/14/2026
  author: LiuJunjie
createdAt: '2026-07-07'
updatedAt: '2026-08-17'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_isaacsim/
---

import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/reBot_Arm_RS_isaacsim.jpg" alt="reBot Arm B601-RS Isaac Sim" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## はじめに

reBot-Isaacsim は、reBotArm 向けに特別に設計された NVIDIA Isaac Sim シミュレーションプロジェクトです。Isaac Sim の高精度な物理エンジンを活用して、仮想環境内でロボットアームの運動学的特性とグリッパ協調ロジックを正確に再現し、制御アルゴリズム開発、軌道計画の検証、および通信プロトコルのテストのための、シミュレーション専用の独立した環境を提供します。

## 動作環境要件
- オペレーティングシステム: Ubuntu 22.04 LTS / 24.04 LTS（推奨）または Windows 11（WSL2 が必要）  
- GPU: NVIDIA RTX シリーズグラフィックスカード（RTX 3070 以上を推奨）、VRAM ≥ 8GB  
- ドライバ: NVIDIA 公式ドライバ ≥ 535.x、CUDA 12.x をサポート  
- メモリ: RAM 32GB 以上（Isaac Sim のシーンおよび物理シミュレーションは多くのメモリを使用します）  
- ストレージ: 100GB 以上の空き SSD 容量（Isaac Sim のインストール、キャッシュ、USD アセット用）

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

次の内容を `~/.bashrc` または `~/.zshrc` に追加します:

```Bash
export ISAACSIM_PATH="${HOME}/isaacsim"
export ISAACSIM_PYTHON_EXE="${ISAACSIM_PATH}/python.sh"
export ISAACSIM_ROOT="${HOME}/isaacsim"
```

その後、`source ~/.bashrc` を実行して反映させます。

#### 起動確認

```Bash
${ISAACSIM_PATH}/isaac-sim.sh
```

初回起動時にはシェーダのキャッシュが行われるため、GUI が表示されるまで 5〜10 分ほどかかる場合があります。しばらくお待ちください。

### ⚙️ 方法 2: ソースコードからビルド（推奨）

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

ビルドプロセスには、ハードウェア構成にもよりますが 30〜60 分かかる場合があります。

#### テスト実行

```Bash
_build/linux-x86_64/release/isaac-sim.sh
```

ソースビルド後は、そのランタイムディレクトリを `ISAACSIM_ROOT` に設定して、`run_isaacsim_receiver.sh` が Isaac Sim を見つけられるようにします:

```bash
export ISAACSIM_ROOT="$PWD/_build/linux-x86_64/release"
```

## プロジェクトのダウンロード

このリポジトリは、上流の制御ライブラリ `reBotArm_control_py` を git サブモジュールとして取得します。サブモジュール込みでクローンします:

```bash
git clone --recurse-submodules https://github.com/Seeed-Projects/reBot-Isaacsim.git
```

すでにリポジトリをクローン済みで、`third_party/reBotArm_control_py` が空の場合:

```bash
git submodule update --init --recursive
```

リポジトリルートで sender の依存関係をインストールします（`run_sender.sh` と `uv run` はどちらもルートの uv ワークスペースを使用します）:

```bash
cd reBot-Isaacsim
uv sync
```

### ハードウェア設定を RS に切り替える

このリポジトリの Isaac Sim アセットは RS（`usd/RS-rebot-dev-arm`）です。一方、上流の `rebotarm.yaml` はデフォルトで DM になっています。`RebotArm()` と `load_robot_model()` の両方がこのファイルに従うため、重力補償、joint-reader、IK、および Traj はすべて最初に RS に切り替える必要があります。DM のままにしておくと、モータプロトコルが一致せず、Pinocchio は DM の URDF を読み込みます。これはサブモジュールの作業ツリーを汚すだけなので、コミットしないでください:

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
```

成功すると `.../config/rebotarm.yaml -> rebotarm_rs.yaml` と出力されます。

### 機能コンポーネントの概要

このプロジェクトは、さまざまな利用シーンに対応する複数の sender を提供します:

| コンポーネント | 説明 |
|-----------|------------|
| `gravity_joint_sender` | **重力補償 + ハンドルモード**: 改造済みロボットアーム（グリッパを取り外し、ハンドルを装着）向けで、手で導く操作を行います。補償は上流の `GravityCompensation` から行われ、このリポジトリは関節角度を Isaac Sim にミラーリングするだけです |
| `isaacsim_ik_sender` | **逆運動学 (IK) モード**: エンドエフェクタの姿勢（位置/姿勢）を入力し、IK ソルバで関節角度を算出して Isaac Sim 上のロボットアームを駆動します |
| `isaacsim_traj_sender` | **軌道計画 (Traj) モード**: IK の上に関節空間の軌道計画（MIN_JERK 時間プロファイル）を追加し、スムーズな動作制御を実現します |
| `isaacsim_joint_test_sender` | **ジョイントテストモード**: 事前定義された関節角度軌道を、実機なしで送信し続け、Isaac Sim の receiver と通信が正しく動作しているかを検証します |
| `joint_reader_sender` | **実機からシミュレーションへのマッピングモード**: 関節角度を読み取り専用で取得し、それを Isaac Sim にマッピングします。他の制御プロジェクトと併用するのに最適です（例: 他のタスクを実行している実機ロボットを Isaac Sim と同期させて可視化するなど） |

### ディレクトリ構成

```
reBot-Isaacsim/
├── pyproject.toml                           # uv workspace configuration
├── README.md
├── README_EN.md
├── README_ES.md
├── reBotArm_Isaacsim/                       # Main example directory
│   ├── gravity_joint_sender.py              # Gravity-comp handle mode (upstream GravityCompensation + UDP)
│   ├── isaacsim_ik_sender.py                # Inverse kinematics mode (IK control)
│   ├── isaacsim_traj_sender.py              # Trajectory planning mode (IK + joint-space trajectory)
│   ├── isaacsim_joint_test_sender.py        # Joint test mode (preset trajectory, no hardware needed)
│   ├── joint_reader_sender.py                # Real-to-Sim mapping mode (read-only joints, sync visualization)
│   ├── isaacsim_joint_receiver.py           # Isaac Sim receiver (joint-angle sync)
│   ├── live_sync.py                         # Startup instruction script
│   ├── set_hw_rs.py                         # Point submodule hardware YAML at RS (local; do not commit)
│   ├── run_sender.sh                        # Launch the sender
│   └── run_isaacsim_receiver.sh             # Launch the Isaac Sim receiver
├── .gitmodules
├── third_party/
│   └── reBotArm_control_py/                 # git submodule: upstream control library
└── usd/
    └── RS-rebot-dev-arm/
        └── RS-rebot-dev-arm.usda            # Isaac Sim robot asset
```

## 起動方法（デュアルターミナルモード）

2 つの別々のターミナルが必要です。**ターミナル 1 では Isaac Sim receiver を実行し**、**ターミナル 2 では目的の機能に応じた sender を実行します**。

### ターミナル 1 — Isaac Sim Receiver の起動（全モード共通）

```bash
cd reBotArm_Isaacsim
./run_isaacsim_receiver.sh
```

**期待される動作:**
- Isaac Sim の GUI を起動する
- 地面プレーンとロボットアームの USD アセットを読み込む
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

#### ① ジョイントテストモード（`isaacsim_joint_test_sender`）

実機ハードウェアは不要です。事前定義された関節軌道を継続的に送信し、Isaac Sim receiver との通信を検証します。

```bash
cd reBotArm_Isaacsim
uv run python isaacsim_joint_test_sender.py
```

sender は複数の事前定義された関節構成間を連続的に補間し、それらを Isaac Sim に送信します。ハードウェア YAML は読み込まないため、`set_hw_rs.py` も CAN も不要です。

#### ② 逆運動学モード（`isaacsim_ik_sender`）

エンドエフェクタの姿勢（位置/姿勢）を入力します。IK ソルバが関節構成を計算し、Isaac Sim 上のロボットアームを駆動します。`load_robot_model()` はサブモジュールの `rebotarm.yaml` を読み込むため、まず RS に切り替えてください:

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
uv run python isaacsim_ik_sender.py
```

**入力形式（1 行につき 1 コマンド）:**

```text
x y z                       # Position (meters), keep current orientation
x y z r p y                 # Position + orientation (meters/degrees)
q j1 j2 j3 j4 j5 j6         # Send joint angles directly (degrees)
gripper <0~1>               # Update gripper only
```

#### ③ 軌道計画モード（`isaacsim_traj_sender`）

IK の上に関節空間の軌道計画（MIN_JERK）を追加し、ロボットのスムーズな動作を実現します。これも YAML に対して `load_robot_model()` を使用するため、まず RS に切り替えてください:

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
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

改造されたロボットアーム（グリッパーを取り外してハンドルを取り付けたもの）向けに設計されています。ロボットを手で案内すると、Isaac Sim がその動きを追従します。

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
./run_sender.sh
```

**期待される動作：**
- `set_hw_rs.py` はサブモジュール `rebotarm.yaml` を `rebotarm_rs.yaml` に向け、モーターと重力モデルが 1 つの YAML を共有するようにします（ローカル変更；コミットしないでください）
- 物理アームが接続され、上流の `GravityCompensation` が起動します（`example/9` と同じ MIT + `g(q)` フィードフォワード）
- アームは手で自由に動かすことができます
- このスクリプトは関節角度を 60 Hz で UDP 経由で Isaac Sim に転送するだけです
- 同時に上流の `example/9` を実行しないでください。2 つのプロセスが CAN を取り合うことになります

#### ⑤ 実機からシミュレーションへのマッピングモード (`joint_reader_sender`)

関節角度のみを読み取り、物理ロボットの状態を Isaac Sim にミラーリングします。このモードは、実機ロボットが別のアプリケーションによって制御されている間の可視化を目的としています。`RebotArm()` はサブモジュール `rebotarm.yaml` を読み込むため、まず RS に切り替えます：

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
uv run python joint_reader_sender.py
```

**期待される動作：**
- `set_hw_rs.py` がモーター設定を RS に切り替えます（ローカル変更；コミットしないでください）
- 制御コマンドを一切送信せず、関節角度のみを読み取ります（パッシブフィードバックモード）
- 関節角度を 60 Hz で UDP 経由で継続的に送信します
- 実機ロボットが別プロジェクトによって制御されている間、そのロボットを Isaac Sim 上で可視化します

## 通信プロトコル

UDP JSON（ポート `127.0.0.1:5005`）。

**送信側ペイロード（フレームごと）：**

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
| `sequence` | int | 増加していくフレームシーケンス番号 |
| `timestamp` | float | Unix タイムスタンプ（秒） |
| `joint_positions` | float[6] | 最初の 6 関節の位置（rad） |
| `gripper_position` | float | グリッパーフィンガーの位置目標（m）。各送信側は独自のマッピングでこれを計算します（下記参照） |

**グリッパー制御パイプライン：**

受信側は、受信した `gripper_position` を 2 つのプリズム型フィンガージョイントの位置目標としてそのまま適用し、各フィンガーごとに `[0, 上限]` にクリップします（USD 上限：両フィンガーとも 0.05 m。フィンガーは 1 つのモーターから 1 つのピニオンを介して 1:1 で駆動されます）。受信側での追加スケーリングはありません。送信側は入力を次のように `gripper_position` にマッピングします：

| 送信側 | `gripper_position`（m）へのマッピング |
|------|------|
| `gravity_joint_sender` | `gripper_q × 0.03`（`GRIPPER_POSITION_SCALE = 0.03`） |
| `joint_reader_sender` | `gripper_q × 0.007`（`GRIPPER_POSITION_SCALE = 0.007`） |
| `isaacsim_traj_sender` | `ratio × 0.045`（`gripper <0~1>` 入力を 0.045 m にクリップ） |
| `isaacsim_ik_sender` | 生の `ratio ∈ [0, 1]` をメートルとして送信するため、任意の ratio がフィンガーの上限以上であれば、そのフィンガーは全開になります |

## 設定パラメータ

### 送信側 (`gravity_joint_sender.py`)

| パラメータ | デフォルト | 説明 |
|------|--------|------|
| Hardware YAML | `set_hw_rs.py` → `rebotarm_rs.yaml` | `RebotArm()` はサブモジュール `config/rebotarm.yaml` を読み込み、モーターと Pinocchio がこれを共有します |
| `ARM_JOINT_COUNT` | 6 | アーム関節数 |
| `DEFAULT_PORT` | 5005 | UDP ポート |
| `DEFAULT_SEND_HZ` | 60.0 | 送信周波数（Hz） |
| `GRIPPER_POSITION_SCALE` | 0.03 | グリッパー角度から位置への変換係数 |
| `position_alpha` | 0.2 | ローパスフィルタ係数 |

### 受信側 (`isaacsim_joint_receiver.py`)

| パラメータ | デフォルト | 説明 |
|------|--------|------|
| `ARM_JOINT_COUNT` | 6 | アーム関節数 |
| `DEFAULT_PORT` | 5005 | UDP ポート |
| `DEFAULT_RENDER_HZ` | 120.0 | シミュレーション描画周波数（Hz） |
| `ROBOT_PRIM_PATH` | `/World/reBotArm` | Isaac Sim における Robot Prim パス |
| `ASSET_RELATIVE_PATH` | `usd/RS-rebot-dev-arm/RS-rebot-dev-arm.usda` | USD アセットへの相対パス |

## トラブルシューティング

### `OSError: [Errno 98] Address already in use`

ポート `5005` がすでに使用されています。そのポートを使用しているプロセスを特定して終了します：

```bash
# Find the process using port 5005
sudo lsof -i :5005

# Terminate the process (replace PID with the actual process ID)
kill <PID>
```

### Isaac Sim アセットが見つからない

USD アセットが存在し、`REPO_ROOT` が正しく設定されていることを確認します：

```bash
ls usd/RS-rebot-dev-arm/RS-rebot-dev-arm.usda
```

### CAN バスが準備できていない

CAN インターフェースが起動しており、正しいビットレートで設定されていることを確認します：

```bash
can_restart can0

# Verify the bitrate
ip -details link show can0 | grep bitrate
```

### 関節角度が同期しない

- 送信側と受信側の両方がポート `5005` を使用していることを確認します。
- 送信側ログが継続的に `[send]` を出力していることを確認します。
- 受信側ログが継続的に `[recv]` を出力していることを確認します。
- ハードウェア関連の問題を切り分けるために `isaacsim_joint_test_sender.py` を試してください。

### コンポーネントと Python 環境

| コンポーネント | Python 環境 | 起動スクリプト |
|------|------|------|
| 送信側（実機ロボット） | `reBotArm_control_py` uv 環境 | `run_sender.sh` |
| 送信側（テストモード） | `reBotArm_control_py` uv 環境 | `isaacsim_joint_test_sender.py` |
| 受信側 | Isaac Sim 公式 Python（`python.sh`） | `run_isaacsim_receiver.sh` |


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>




