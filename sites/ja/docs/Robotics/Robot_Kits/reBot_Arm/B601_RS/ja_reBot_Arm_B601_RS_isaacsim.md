---
description: このチュートリアルでは、Isaacsim をダウンロードし、開発およびデバッグ用にシミュレーション環境で reBotArm ロボットを展開する方法を説明します。
title: Isaacsim を使用した reBotArm のシミュレーション
keywords:
  - Isaacsim
  - マニピュレータ
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
updatedAt: '2026-08-14'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_isaacsim/
---

## はじめに

reBot-Isaacsim は、reBotArm 向けに特別に設計された NVIDIA Isaac Sim シミュレーションプロジェクトです。Isaac Sim の高精度な物理エンジンを活用して、仮想環境内でロボットアームの運動学的特性とグリッパー協調ロジックを正確に再現し、制御アルゴリズム開発、軌道計画の検証、および通信プロトコルのテストのための、シミュレーション専用の独立した環境を提供します。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/reBot_Arm_RS_isaacsim.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## 動作環境
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


### 🔧 方法 1: 事前コンパイル済みバイナリのインストール

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
export ISAACSIM_ROOT="${HOME}/isaacsim"
```

その後 `source ~/.bashrc` を実行して反映させます。

#### 起動確認

```Bash
${ISAACSIM_PATH}/isaac-sim.sh
```

初回起動時にはシェーダのキャッシュが行われるため、GUI が表示されるまで 5〜10 分ほどかかる場合があります。しばらくお待ちください。

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

ソースからビルドした場合は、`run_isaacsim_receiver.sh` が Isaac Sim を見つけられるよう `ISAACSIM_ROOT` をその実行ディレクトリに設定します:

```bash
export ISAACSIM_ROOT="$PWD/_build/linux-x86_64/release"
```

## プロジェクトのダウンロード

このリポジトリは上流の制御ライブラリ `reBotArm_control_py` を git submodule として参照します。サブモジュール付きでクローンしてください:

```bash
git clone --recurse-submodules https://github.com/Seeed-Projects/reBot-Isaacsim.git
```

すでにクローン済みで `third_party/reBotArm_control_py` が空の場合:

```bash
git submodule update --init --recursive
```

リポジトリルートで sender の依存関係をインストールします（`run_sender.sh` と `uv run` はルートの uv ワークスペースを使用します）:

```bash
cd reBot-Isaacsim
uv sync
```

### ハードウェア設定を RS に切り替える

このリポジトリの Isaac Sim アセットは RS（`usd/RS-rebot-dev-arm`）です。上流の `rebotarm.yaml` はデフォルトで DM です。`RebotArm()` と `load_robot_model()` の両方がこのファイルを読むため、重力補償、読み取り専用マッピング、IK、Traj は先に RS へ切り替える必要があります。DM のままだとモータプロトコルが合わず、Pinocchio も DM の URDF を読みます。submodule の作業ツリーだけが汚れるので、コミットしないでください:

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
```

成功すると `.../config/rebotarm.yaml -> rebotarm_rs.yaml` と表示されます。

### 機能コンポーネントの概要

このプロジェクトは、さまざまな利用シーンに対応する複数の sender を提供します:

| コンポーネント | 説明 |
|-----------|------------|
| `gravity_joint_sender` | **重力補償ハンドルモード**: 改造済みロボットアーム（クローを取り外し、ハンドルを追加）を手動操作します。補償は上流の `GravityCompensation` が行い、本リポジトリは関節角度を Isaac Sim にミラーするだけです |
| `isaacsim_ik_sender` | **逆運動学 (IK) モード**: エンドエフェクタの姿勢を入力し、IK ソルバで関節角度を算出して Isaac Sim に送信します |
| `isaacsim_traj_sender` | **軌道計画 (Traj) モード**: IK の上に関節空間の軌道計画（MIN_JERK 時間プロファイル）を追加し、スムーズな動作制御を実現します |
| `isaacsim_joint_test_sender` | **関節テストモード**: 実機ロボットなしで、あらかじめ設定された関節角度軌道を送信し、Isaac Sim の receiver と通信が正しく動作しているかを検証します |
| `joint_reader_sender` | **実機からシミュレーションへのマッピングモード**: 関節角度を読み取り専用で取得し、それを Isaac Sim にマッピングします。他の制御プロジェクトと併用するのに最適です（例: 他のタスクを実行中の実機ロボットを Isaac Sim 上で可視化する）。 |

### ディレクトリ構成

```
reBot-Isaacsim/
├── pyproject.toml                           # uv ワークスペース設定
├── README.md
├── README_EN.md
├── README_ES.md
├── reBotArm_Isaacsim/                       # メインのサンプルディレクトリ
│   ├── gravity_joint_sender.py              # 重力補償ハンドルモード（上流 GravityCompensation + UDP）
│   ├── isaacsim_ik_sender.py                # 逆運動学モード（IK 制御）
│   ├── isaacsim_traj_sender.py              # 軌道計画モード（IK + 関節空間軌道）
│   ├── isaacsim_joint_test_sender.py        # 関節テストモード（プリセット軌道、ハードウェア不要）
│   ├── joint_reader_sender.py                # Real-to-Sim マッピングモード（読み取り専用、同期可視化）
│   ├── isaacsim_joint_receiver.py           # Isaac Sim 受信側（関節角度同期）
│   ├── live_sync.py                         # 起動手順の補助スクリプト
│   ├── set_hw_rs.py                         # submodule のハードウェア YAML を RS に向ける（ローカル; コミットしない）
│   ├── run_sender.sh                        # sender を起動
│   └── run_isaacsim_receiver.sh             # Isaac Sim receiver を起動
├── .gitmodules
├── third_party/
│   └── reBotArm_control_py/                 # git submodule: 上流制御ライブラリ
└── usd/
    └── RS-rebot-dev-arm/
        └── RS-rebot-dev-arm.usda            # Isaac Sim ロボットアセット
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

#### ① 関節テストモード (`isaacsim_joint_test_sender`)

実機ハードウェアは不要です。あらかじめ定義された関節軌道を連続的に送信し、Isaac Sim の receiver との通信を検証します。

```bash
cd reBotArm_Isaacsim
uv run python isaacsim_joint_test_sender.py
```

sender は複数の事前定義された関節構成間を連続的に補間し、それらを Isaac Sim に送信します。ハードウェア YAML は読まないため、`set_hw_rs.py` も CAN も不要です。

#### ② 逆運動学モード (`isaacsim_ik_sender`)

エンドエフェクタの姿勢（位置/姿勢）を入力します。IK ソルバが関節構成を計算し、Isaac Sim 内のロボットアームを駆動します。`load_robot_model()` は submodule の `rebotarm.yaml` を読むため、先に RS へ切り替えてください:

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

#### ③ 軌道計画モード (`isaacsim_traj_sender`)

IK の上に関節空間の軌道計画（MIN_JERK）を追加し、ロボットのスムーズな動作を実現します。同じく `load_robot_model()` がその YAML を読むため、先に RS へ切り替えてください:

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

グリッパーを取り外してハンドルを取り付けた改造ロボットアーム向けに設計されています。ロボットを手で案内すると、Isaac Sim がその動きを追従します。

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
./run_sender.sh
```

**期待される動作:**
- `set_hw_rs.py` が submodule の `rebotarm.yaml` を `rebotarm_rs.yaml` に向け、モータと重力モデルが同じ YAML を共有します（ローカル変更; コミットしない）
- 実機アームに接続し、上流の `GravityCompensation` を起動します（`example/9` と同じ MIT + `g(q)` フィードフォワード）
- アームを手で自由に動かすことができます
- このスクリプトは関節角度を 60 Hz で UDP 経由で Isaac Sim に転送するだけです
- 上流の `example/9` を同時に実行しないでください。2 つのプロセスが CAN を奪い合います

#### ⑤ 実機からシミュレーションへのマッピングモード (`joint_reader_sender`)

関節角度のみを読み取り、実機ロボットの状態を Isaac Sim 内にミラーリングします。このモードは、実機が別のアプリケーションによって制御されている間の可視化を目的としています。`RebotArm()` は submodule の `rebotarm.yaml` を読むため、先に RS へ切り替えてください:

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
uv run python joint_reader_sender.py
```

**期待される動作:**
- `set_hw_rs.py` がモータ設定を RS に切り替えます（ローカル変更; コミットしない）
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
| `sequence` | int | インクリメントされるフレームシーケンス番号 |
| `timestamp` | float | Unix タイムスタンプ（秒） |
| `joint_positions` | float[6] | 最初の 6 関節の位置（rad） |
| `gripper_position` | float | グリッパ指の位置目標（m）。各 sender が独自の換算で算出します（下表参照） |

**グリッパ制御パイプライン：**

受信側は受け取った `gripper_position` を左右の直動関節の位置目標としてそのまま適用し、指ごとに `[0, 上限]` にクリップします（USD 上限: 両指とも 0.05 m。両指は 1 つのモータとピニオンで 1:1 駆動）。受信側での追加スケーリングはありません。各 sender から `gripper_position` への換算は次のとおりです:

| Sender | `gripper_position`（m）への換算 |
|------|------|
| `gravity_joint_sender` | `gripper_q × 0.03`（`GRIPPER_POSITION_SCALE = 0.03`） |
| `joint_reader_sender` | `gripper_q × 0.007`（`GRIPPER_POSITION_SCALE = 0.007`） |
| `isaacsim_traj_sender` | `ratio × 0.045`（`gripper <0~1>` 入力、0.045 m にクリップ） |
| `isaacsim_ik_sender` | 生の `ratio ∈ [0, 1]` をメートルとして送信。ratio が指の上限以上ならその指は全開 |

## 設定パラメータ

### 送信側（`gravity_joint_sender.py`）

| パラメータ | デフォルト | 説明 |
|------|--------|------|
| ハードウェア YAML | `set_hw_rs.py` → `rebotarm_rs.yaml` | `RebotArm()` は submodule の `config/rebotarm.yaml` を読む。モータと Pinocchio が共有する |
| `ARM_JOINT_COUNT` | 6 | アーム関節数 |
| `DEFAULT_PORT` | 5005 | UDP ポート |
| `DEFAULT_SEND_HZ` | 60.0 | 送信周波数（Hz） |
| `GRIPPER_POSITION_SCALE` | 0.03 | グリッパ角度から位置への変換係数 |
| `position_alpha` | 0.2 | ローパスフィルタ係数 |

### 受信側（`isaacsim_joint_receiver.py`）

| パラメータ | デフォルト | 説明 |
|------|--------|------|
| `ARM_JOINT_COUNT` | 6 | アーム関節数 |
| `DEFAULT_PORT` | 5005 | UDP ポート |
| `DEFAULT_RENDER_HZ` | 120.0 | シミュレーション描画周波数（Hz） |
| `ROBOT_PRIM_PATH` | `/World/reBotArm` | Isaac Sim 内の Robot Prim パス |
| `ASSET_RELATIVE_PATH` | `usd/RS-rebot-dev-arm/RS-rebot-dev-arm.usda` | USD アセットへの相対パス |

## トラブルシューティング

### `OSError: [Errno 98] Address already in use`

ポート `5005` がすでに使用されています。次のコマンドでそのポートを使用しているプロセスを探して終了します：

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

### CAN バスが Ready にならない

CAN インターフェースが up 状態で、正しいビットレートで設定されていることを確認します：

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

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>




