---
description: このチュートリアルでは、Isaac Sim をダウンロードし、開発およびデバッグ用にシミュレーション環境へ reBotArm ロボットをデプロイする方法を説明します。
title: B601-RS と Isaac Sim
keywords:
  - Isaac Sim
  - メカニカルアーム
  - ロボット
  - リモートコントロール操作
  - 運動学
  - Robostride
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/reBot_Arm_RS_isaacsim.jpg
slug: /rebot_arm_b601_rs_isaacsim
last_update:
  date: 8/14/2026
  author: LiuJunjie
createdAt: '2026-07-07'
updatedAt: '2026-09-28'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_isaacsim/
---
import '/src/css/rebot-wiki-style.css';
import InstallTabs from '@site/src/components/robotics/RebotGraspingTabs';
import TabItem from '@theme/TabItem';
import graspingStyles from '@site/src/components/robotics/rebot-grasping-demo.module.css';


<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/reBot_Arm_RS_isaacsim.jpg" alt="reBot Arm B601-RS Isaac Sim" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>今すぐ入手</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

## はじめに

reBot-Isaacsim は、reBotArm 向けに特別に設計された NVIDIA Isaac Sim シミュレーションプロジェクトです。Isaac Sim の高精度な物理エンジンを活用して、仮想環境内でロボットアームの運動学的特性とグリッパー協調ロジックを正確に再現し、制御アルゴリズム開発、軌道計画の検証、通信プロトコルのテストのための、シミュレーション専用の独立した環境を提供します。

## 動作環境要件
- オペレーティングシステム: Ubuntu 22.04 LTS / 24.04 LTS（推奨）または Windows 11（WSL2 が必要）  
- GPU: NVIDIA RTX シリーズグラフィックスカード（RTX 3070 以上を推奨）、VRAM 8GB 以上  
- ドライバ: NVIDIA 公式ドライバ 535.x 以上、CUDA 12.x をサポート  
- メモリ: 32GB 以上の RAM（Isaac Sim のシーンおよび物理シミュレーションは多くのメモリを使用します）  
- ストレージ: 100GB 以上の空き SSD 容量（Isaac Sim のインストール、キャッシュ、USD アセット用）

:::info
この wiki で使用しているコンピュータは、NVIDIA RTX 4080 GPU を搭載し、Ubuntu 22.04 LTS オペレーティングシステムを実行しています。
:::

## Isaac Sim のインストール

公式リンクとリソース:

https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/quick-install.html

https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/download.html#isaac-sim-latest-release


Isaac Sim のインストール方法を 1 つ選択し、その後プロジェクトのダウンロードに進みます。

<div className={graspingStyles.page}>
<InstallTabs defaultValue="binary" queryString="isaac-install">
<TabItem value="binary" label="方法 1 · 事前コンパイル済みバイナリ">

### 🔧 方法 1: 事前コンパイル済みバイナリによるインストール

> 💡 ほとんどのユーザーに適しており、コンパイル不要ですぐに利用できます。

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### ダウンロードと解凍

[NVIDIA Isaac Sim 6.0.0 ダウンロードページ](https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/download.html#isaac-sim-latest-release)で Isaac Sim の行から **Linux (x86_64)** を選択し、事前コンパイル済みパッケージ `isaac-sim-standalone-6.0.0-linux-x86_64.zip` を `~/Downloads` にダウンロードします。以下のコマンドは Linux x86_64 向けです。

```Bash
mkdir -p ~/isaacsim
cd ~/Downloads
unzip isaac-sim-standalone-6.0.0-linux-x86_64.zip -d ~/isaacsim
cd ~/isaacsim
./post_install.sh
```

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### 環境変数の設定

次の内容を `~/.bashrc` または `~/.zshrc` に追加します:

```Bash
export ISAACSIM_PATH="${HOME}/isaacsim"
export ISAACSIM_PYTHON_EXE="${ISAACSIM_PATH}/python.sh"
export ISAACSIM_ROOT="${HOME}/isaacsim"
```

その後 `source ~/.bashrc` を実行して反映させます。

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### 起動確認

```Bash
${ISAACSIM_PATH}/isaac-sim.sh
```

初回起動時にはシェーダのキャッシュが行われるため、GUI が表示されるまで 5〜10 分ほどかかる場合があります。しばらくお待ちください。

</div>
</section>

</div>

</TabItem>
<TabItem value="source" label="方法 2 · ソースからビルド">

### ⚙️ 方法 2: ソースからビルド

> 💡 基盤コードの調整やコア機能のデバッグが必要な開発者に適しています。

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### 依存関係のインストール

```Bash
sudo apt update
sudo apt install build-essential git git-lfs gcc-11 g++-11
```

デフォルトの `gcc --version` と `g++ --version` の両方がバージョン 11 を報告することを確認してください。コンパイラ設定やその他の前提条件については、[Isaac Sim 6.0.0 ソースビルド手順](https://github.com/isaac-sim/IsaacSim/blob/v6.0.0/README.md#prerequisites-and-environment-setup)を参照してください。ビルドに必要な依存関係をダウンロードするため、インターネット接続が必要です。

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### クローンとビルド

Isaac Sim のソースは [isaac-sim/IsaacSim](https://github.com/isaac-sim/IsaacSim) にあります。古い NVIDIA-Omniverse アドレスは現在、非推奨の Dockerfile リポジトリへリダイレクトされます。以下のコマンドでは、このチュートリアルのバイナリインストールと一致するバージョン 6.0.0 を使用します:

```Bash
git clone --branch v6.0.0 https://github.com/isaac-sim/IsaacSim.git
cd IsaacSim
git lfs install
git lfs pull
./build.sh --release
```

ビルドプロセスには、ハードウェア構成にもよりますが 30〜60 分かかる場合があります。

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### テストの実行

```Bash
_build/linux-x86_64/release/isaac-sim.sh
```

ソースビルド後は、`run_isaacsim_receiver.sh` が Isaac Sim を見つけられるように、`ISAACSIM_ROOT` をそのランタイムディレクトリに向けてください:

```bash
export ISAACSIM_ROOT="$PWD/_build/linux-x86_64/release"
```

</div>
</section>

</div>

</TabItem>
</InstallTabs>
</div>

## プロジェクトのダウンロード

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### プロジェクトとサブモジュールのクローン

このリポジトリは、上流の `reBotArm_control_py` Git サブモジュールを使用しています。プロジェクトを保存したいディレクトリからクローンします:

```bash
git clone --recurse-submodules https://github.com/Seeed-Projects/reBot-Isaacsim.git
cd reBot-Isaacsim
```

すでにリポジトリをクローン済みで `third_party/reBotArm_control_py` が空の場合は、プロジェクトルートから次を実行します:

```bash
git submodule update --init --recursive
```

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### sender の依存関係をインストール

プロジェクトルートから実行します。`run_sender.sh` と `uv run` の両方が、ルートの uv ワークスペースを使用します:

```bash
uv sync
```

</div>
</section>

<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

### ハードウェア設定を RS に切り替える

このリポジトリの Isaac Sim アセットは RS（`usd/RS-rebot-dev-arm`）ですが、上流の `rebotarm.yaml` はデフォルトで DM になっています。`RebotArm()` と `load_robot_model()` の両方がこのファイルを使用するため、重力補償、joint-reader、IK、および Traj には RS 設定が必要です。そうしないと、モータプロトコルが一致せず、Pinocchio が DM の URDF を読み込みます。joint テストではこの手順は不要です。これはサブモジュールの作業ツリーをローカルで変更するだけなので、変更をコミットしないでください:

```bash
python reBotArm_Isaacsim/set_hw_rs.py
```

成功すると `.../config/rebotarm.yaml -> rebotarm_rs.yaml` と表示されます。シェルはプロジェクトルートにとどまります。

</div>
</section>
</div>

### 機能コンポーネントの概要

このプロジェクトは、さまざまな利用シーンに対応する複数の sender を提供します:

| コンポーネント | 説明 |
|-----------|------------|
| `gravity_joint_sender` | **重力補償 + ハンドルモード**: 改造済みロボットアーム（グリッパーを取り外し、ハンドルを装着）向けで、手で案内して操作します。補償は上流の `GravityCompensation` から行われ、このリポジトリは関節角度を Isaac Sim にミラーリングするだけです |
| `gravity_gripper_assist` | **重力補償とグリッパーアシスト**: モデルのみのチェックを行う実験的なサンプル |
| `isaacsim_ik_sender` | **逆運動学 (IK) モード**: エンドエフェクタの姿勢を入力し、IK ソルバで関節角度を求めて Isaac Sim に送信します |
| `isaacsim_traj_sender` | **軌道計画 (Traj) モード**: IK の上に関節空間の軌道計画（MIN_JERK 時間プロファイル）を追加し、スムーズなモーション制御を実現します |
| `isaacsim_joint_test_sender` | **ジョイントテストモード**: 実機ロボットなしで、あらかじめ設定された関節角度軌道を送信し、Isaac Sim の receiver と通信が正しく動作しているかを検証します |
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
│   ├── gravity_gripper_assist.py             # Gravity compensation with gripper assist
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

## 起動（デュアルターミナルモード）

2つの別々のターミナルが必要です。**ターミナル1では Isaac Sim のレシーバーを実行し**、**ターミナル2では目的の機能に応じた送信側を実行します**。各ターミナルで、以下のコマンドを実行する前に、上でクローンした `reBot-Isaacsim` プロジェクトのルートディレクトリに移動してください。

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### ターミナル1 — Isaac Sim レシーバーを起動（すべてのモードで共通）

<p className="rebot-step-label">Step 1</p>

```bash
cd reBotArm_Isaacsim
./run_isaacsim_receiver.sh
```

**想定される動作：**
- Isaac Sim の GUI を起動する
- グラウンドプレーンとロボットアームの USD アセットを読み込む
- `127.0.0.1:5005` で UDP パケットを待ち受ける
- 送信側からの接続を待機する

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### ターミナル2 — 適切な送信側を起動

<p className="rebot-step-label">Step 2</p>

**シミュレーションミラーリングの場合は、まずレシーバーを起動し、その後に送信側を起動してください。** 下記の実験的なグリッパアシスト用のモデルのみチェックでは、レシーバーは不要です。

:::tip

一部のモードでは物理ロボットアームが必要です。以下のように USB-to-CAN アダプタを設定してください。

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

</div>
</section>
</div>

次のいずれかのモードを選択してください。これらは互いに独立したオプションであり、順番に実行する必要はありません。

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### ジョイントテストモード (`isaacsim_joint_test_sender`) {#-ジョイントテストモード-isaacsim_joint_test_sender}

物理ハードウェアは不要です。あらかじめ定義された関節軌道を連続的に送信し、Isaac Sim レシーバーとの通信を検証します。

```bash
cd reBotArm_Isaacsim
uv run python isaacsim_joint_test_sender.py
```

送信側は、いくつかの事前定義された関節構成間を連続的に補間し、それらを Isaac Sim に送信します。ハードウェア YAML は読み込まないため、`set_hw_rs.py` も CAN も不要です。

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### 逆運動学モード (`isaacsim_ik_sender`) {#-逆運動学モード-isaacsim_ik_sender}

エンドエフェクタの姿勢（位置／姿勢）を入力します。IK ソルバが関節構成を計算し、Isaac Sim 内のロボットアームを駆動します。`load_robot_model()` はサブモジュール `rebotarm.yaml` を読み込むため、まず RS に切り替えてください：

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
uv run python isaacsim_ik_sender.py
```

**入力形式（1 行につき 1 コマンド）：**

```text
x y z                       # Position (meters), keep current orientation
x y z r p y                 # Position + orientation (meters/degrees)
q j1 j2 j3 j4 j5 j6         # Send joint angles directly (degrees)
gripper <0~1>               # Update gripper only
```

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### 軌道計画モード (`isaacsim_traj_sender`) {#-軌道計画モード-isaacsim_traj_sender}

IK の上に関節空間の軌道計画（MIN_JERK）を追加し、ロボットの動きを滑らかにします。これも `load_robot_model()` を使ってその YAML を読み込むため、まず RS に切り替えてください：

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
uv run python isaacsim_traj_sender.py
```

**入力形式（1 行につき 1 コマンド）：**

```text
x y z                       # Position (meters)
x y z r p y                 # Position + orientation (meters/degrees)
q j1 j2 j3 j4 j5 j6         # Send joint angles directly (degrees)
gripper <0~1>               # Update gripper only
speed <scale>               # Adjust trajectory duration scaling
resync                      # Re-read the current joint state from Isaac Sim
```

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

#### 重力補償ハンドルモード (`gravity_joint_sender`) {#-重力補償ハンドルモード-gravity_joint_sender}

ロボットアームを改造（グリッパを取り外し、ハンドルを取り付け）した構成向けに設計されています。ロボットを手で案内すると、Isaac Sim がその動きを追従します。

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
./run_sender.sh
```

**想定される動作：**
- `set_hw_rs.py` がサブモジュール `rebotarm.yaml` を `rebotarm_rs.yaml` に向けることで、モーターと重力モデルが 1 つの YAML を共有する（ローカル変更；コミットしないこと）
- 物理アームが接続され、上流の `GravityCompensation` を起動する（MIT + `g(q)` フィードフォワードは `example/9` と同じ）
- アームを手で自由に動かすことができる
- このスクリプトは関節角度を 60 Hz で Isaac Sim に UDP 送信するだけである
- 同時に上流の `example/9` も実行しないこと；2 つのプロセスが CAN を取り合うことになります

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">5</span>
<div className="rebot-step-content">

#### 重力補償とグリッパアシスト (`gravity_gripper_assist`) {#-重力補償とグリッパアシスト-gravity_gripper_assist}

RS アームと取り付けられたグリッパを手動で動かし、その動きを Isaac Sim にミラーリングします。

プロジェクトルートからモデルチェックを実行します。これは CAN には接続しません：

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
uv run python gravity_gripper_assist.py --check
```

Isaac Sim レシーバーを起動し、`can0` が利用可能であることを確認し、アームを安全に支持し、CAN を使用している他のプログラムを停止してください。グリッパはデフォルトで 0 rad が閉、5 rad が開となっており、これらはアームのゼロキャリブレーションと一致している必要があります。

同じターミナルから物理アームを起動します。このコマンドがモーターを制御します：

```bash
uv run python gravity_gripper_assist.py
```

エンドポイントが異なる場合は、`--closed-rad` と `--open-rad` で測定値（ラジアン）を設定してください。グリッパを制御するには `assist`、`open`、`close`、`hold` を入力します。終了するには `quit` を入力するか、`Ctrl+C` を押してください。

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">6</span>
<div className="rebot-step-content">

#### 実機からシミュレータへのマッピングモード (`joint_reader_sender`) {#-実機からシミュレータへのマッピングモード-joint_reader_sender}

関節角度のみを読み取り、物理ロボットの状態を Isaac Sim にミラーリングします。このモードは、実機ロボットが別のアプリケーションによって制御されている間の可視化を目的としています。`RebotArm()` はサブモジュール `rebotarm.yaml` を読み込むため、まず RS に切り替えてください：

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
uv run python joint_reader_sender.py
```

**想定される動作：**
- `set_hw_rs.py` がモーター設定を RS に切り替える（ローカル変更；コミットしないこと）
- 関節角度のみを読み取る（パッシブフィードバックモード）で、制御コマンドは一切送信しない
- 関節角度を 60 Hz で UDP 送信し続ける
- 別のプロジェクトによって制御されている間、Isaac Sim 上で物理ロボットを可視化する

</div>
</section>

</div>

## 通信プロトコル

ポート `127.0.0.1:5005` 上の UDP JSON。

**送信側ペイロード（フレームごと）：**

```json
{
  "sequence": 123,
  "timestamp": 1718000000.123,
  "joint_positions": [0.0, 0.1, 0.2, -0.1, 0.0, -0.02],
  "gripper_position": 0.05
}
```

| Field | Type | Description |
|------|------|------|
| `sequence` | int | インクリメントされるフレームシーケンス番号 |
| `timestamp` | float | Unix タイムスタンプ（秒） |
| `joint_positions` | float[6] | 最初の 6 関節の位置（rad） |
| `gripper_position` | float | グリッパフィンガの目標位置（m）。各送信側は独自のマッピングでこれを計算します（下記参照） |

**グリッパ制御パイプライン：**

レシーバーは、受信した `gripper_position` を両方のプリズマティックフィンガ関節の位置目標として直接適用し、各フィンガごとに `[0, 上限]` にクリップします（USD 上限：両フィンガとも 0.05 m。フィンガは 1 つのモーターから 1 つのピニオンを介して 1:1 で駆動されます）。レシーバー側での追加スケーリングはありません。送信側は入力を次のように `gripper_position` にマッピングします：

| Sender | `gripper_position`（m）へのマッピング |
|------|------|
| `gravity_joint_sender` | `gripper_q × 0.03`（`GRIPPER_POSITION_SCALE = 0.03`） |
| `joint_reader_sender` | `gripper_q × 0.007`（`GRIPPER_POSITION_SCALE = 0.007`） |
| `isaacsim_traj_sender` | `ratio × 0.045`（`gripper <0~1>` 入力を 0.045 m にクリップ） |
| `isaacsim_ik_sender` | 生の `ratio ∈ [0, 1]` をメートルとして送信するため、任意の ratio がフィンガの上限以上であれば、そのフィンガは完全に開きます |

## 設定パラメータ

### 送信側（`gravity_joint_sender.py`）

| Parameter | Default | Description |
|------|--------|------|
| Hardware YAML | `set_hw_rs.py` → `rebotarm_rs.yaml` | `RebotArm()` はサブモジュール `config/rebotarm.yaml` を読み込み、モーターと Pinocchio がこれを共有します |
| `ARM_JOINT_COUNT` | 6 | アーム関節数 |
| `DEFAULT_PORT` | 5005 | UDP ポート |
| `DEFAULT_SEND_HZ` | 60.0 | 送信周波数（Hz） |
| `GRIPPER_POSITION_SCALE` | 0.03 | グリッパ角度から位置への変換係数 |
| `position_alpha` | 0.2 | ローパスフィルタ係数 |

### レシーバー（`isaacsim_joint_receiver.py`）

| Parameter | Default | Description |
|------|--------|------|
| `ARM_JOINT_COUNT` | 6 | アーム関節数 |
| `DEFAULT_PORT` | 5005 | UDP ポート |
| `DEFAULT_RENDER_HZ` | 120.0 | シミュレーション描画周波数（Hz） |
| `ROBOT_PRIM_PATH` | `/World/reBotArm` | Isaac Sim 内の Robot Prim パス |
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

### Isaac Sim アセットが見つかりません

USD アセットが存在し、`REPO_ROOT` が正しく設定されていることを確認してください：

```bash
ls usd/RS-rebot-dev-arm/RS-rebot-dev-arm.usda
```

### CAN バスが準備完了にならない

CAN インターフェースが有効になっており、正しいビットレートで設定されていることを確認してください：

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
| 受信側 | Isaac Sim 公式 Python (`python.sh`) | `run_isaacsim_receiver.sh` |


## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


