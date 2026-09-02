---
description: このチュートリアルでは、Isaac Sim をダウンロードし、開発およびデバッグ用にシミュレーション環境で reBot-B601-DM ロボットを展開する方法を説明します。
title: Isaac Sim を使用した reBot-B601-DM のシミュレーション
keywords:
  - Isaacsim
  - ロボットアーム
  - ロボット
  - 遠隔操作
  - 運動学
  - Damiao
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_arm_b601_dm_isaacsim
last_update:
  date: 2026-08-17
  author: PanYiWei
translation:
  skip: [zh-CN]
createdAt: '2026-08-77'
updatedAt: '2026-08-19'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_isaacsim/
---

import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## はじめに

これは、NVIDIA Isaac Sim を用いて構築された reBot-B601-DM ロボット用のシミュレーションプロジェクトです。Isaac Sim の高精度な物理エンジンを利用して、仮想環境内でロボットの運動学的挙動とグリッパ協調動作を正確に再現し、制御アルゴリズム開発、軌道計画の検証、および通信プロトコルのテストのための、純粋なシミュレーションプラットフォームを提供します。

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_dm_isaacsim.png" alt="reBot Arm B601-DM Isaac Sim" />
</div>

## システム要件
- オペレーティングシステム：Ubuntu 22.04 LTS / 24.04 LTS（推奨）または Windows 11（WSL2 が必要）
- GPU：NVIDIA RTX シリーズグラフィックスカード（RTX 3070 以降を推奨）、VRAM 8GB 以上
- ドライバ：NVIDIA 公式ドライバ 535.x 以上、CUDA 12.x をサポート
- メモリ：32GB 以上の RAM（Isaac Sim のシーン読み込みと物理シミュレーションは多くのメモリを消費します）
- ストレージ：100GB 以上の SSD 空き容量（Isaac Sim のインストール、キャッシュ、USD アセット用）

:::info
この Wiki では、PC がロボットに接続され、サーバー側で Isaac Sim シミュレーションを実行します。サーバーには NVIDIA RTX 4090 GPU が搭載され、Ubuntu 22.04 LTS を実行しています。
:::

## Isaac Sim のインストール

公式リンクとリソース：

https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/quick-install.html

https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/download.html#isaac-sim-latest-release

### Isaac Sim スタンドアロンパッケージのダウンロード

> 💡 ほとんどのユーザーに適しており、コンパイル不要ですぐに利用できます。

#### ダウンロードと展開

[NVIDIA 公式サイト](https://developer.nvidia.com/isaac-sim)から `isaac-sim-standalone-6.0.0-linux-x86\_64.zip` をダウンロードします。

```Bash
mkdir -p ~/isaacsim
cd ~/Downloads
unzip isaac-sim-standalone-6.0.0-linux-x86_64.zip -d ~/isaacsim
cd ~/isaacsim
./post_install.sh
```

#### 環境変数の設定

`~/.bashrc` または `~/.zshrc` に次を追加します：

```Bash
export ISAACSIM_PATH="${HOME}/isaacsim"
export ISAACSIM_PYTHON_EXE="${ISAACSIM_PATH}/python.sh"
```

その後、`source ~/.bashrc` を実行して変更を反映します。

#### 起動確認

```Bash
${ISAACSIM_PATH}/isaac-sim.sh
```

## プロジェクトのダウンロード

```Bash
git clone https://github.com/hopcan/reBot-Isaacsim.git
```

`reBotArm_control_py` 用の uv 環境をセットアップします：

```bash
cd third_party/reBotArm_control_py
uv sync
```

### 機能コンポーネントの概要

このプロジェクトは、さまざまな利用シナリオをサポートする複数の sender モジュールを提供します：

| コンポーネント | 説明 |
|------|------|
| `gravity_joint_sender` | **重力補償ハンドルモード**：改造済みロボット（グリッパを取り外し、ハンドルを装着）向け。重力補償により、手で関節を動かし、その関節角度を Isaac Sim にリアルタイム同期します |
| `isaacsim_ik_sender` | **逆運動学（IK）モード**：エンドエフェクタの姿勢を入力し、IK ソルバで関節角度を求めて Isaac Sim に送信します |
| `isaacsim_traj_sender` | **軌道計画（Traj）モード**：IK を拡張し、関節空間での軌道計画（MIN_JERK タイミングプロファイル）によりスムーズなモーション制御を実現します |
| `isaacsim_joint_test_sender` | **関節テストモード**：実機ロボットは不要で、あらかじめ設定された関節角度軌道を送信し、Isaac Sim の receiver と通信リンクを検証します |
| `joint_reader_sender` | **実機からシミュレーションへのマッピングモード**：関節角度のみを読み取り、それを Isaac Sim にマッピングします。他の制御プロジェクトと併用するのに適しており（たとえば、実機ロボットが別のタスクを実行している間、その関節状態を Isaac Sim に同期して可視化できます）、 |

### ディレクトリ構成

```
reBot-Isaacsim/
├── pyproject.toml                           # uv workspace configuration
├── README.md
├── README_EN.md
├── README_ES.md
├── reBotArm_Isaacsim/                       # main example directory
│   ├── gravity_joint_sender.py              # real robot sender (uv environment)
│   ├── isaacsim_ik_sender.py                # IK sender script (must use Isaac python.sh)
│   ├── isaacsim_traj_sender.py              # trajectory sender script (must use Isaac python.sh)
│   ├── isaacsim_joint_test_sender.py        # test sender script (use python.sh as needed)
│   ├── joint_reader_sender.py               # read-only mapping script (real robot / other projects)
│   ├── isaacsim_joint_receiver.py           # Isaac Sim receiver (must use Isaac python.sh)
│   ├── live_sync.py                         # startup instructions script
│   └── ...
├── third_party/
│   └── reBotArm_control_py/                 # robot control library (independent uv environment)
│       ├── pyproject.toml
│       └── ...
├── urdf/
│   └── ...                                  # robot URDF / configuration
├── usd/
│   └── reBot_B601_DM/
│       └── reBot_B601_DM.usda               # reBot-B601-DM asset
└── ...
```

## 起動方法（デュアルターミナルモード）

2 つの別々のターミナルが必要です。**ターミナル 1 は Isaac Sim の receiver**、**ターミナル 2 は選択したモードに応じた sender を実行**します。

### ターミナル 1 — Isaac Sim Receiver の起動（全モード共通）
Isaac Sim の Python で receiver スクリプトを実行します。

:::tip
環境に応じて `DEFAULT_SIM_HOST` と `DEFAULT_REBOT_ARM_HOST` の値を変更してください。

`DEFAULT_SIM_HOST` は Isaac Sim 環境を実行しているホストの IP アドレスです。

`DEFAULT_REBOT_ARM_HOST` はロボットに接続されているホストの IP アドレスです。

両端が同じマシン上で動作している場合は、`DEFAULT_SIM_HOST` を `"127.0.0.1"` に設定します。
:::

```bash
cd reBotArm_Isaacsim
${ISAACSIM_PYTHON_EXE}  gravity_joint_sender.py 
```

**期待される出力：**
- Isaac Sim の GUI が起動する
- 地面とロボットの USD アセットが読み込まれる
- UDP `DEFAULT_SIM_HOST:5005` で待ち受ける
- sender からの接続を待機する

### ターミナル 2 — 選択したモードに応じた Sender の起動

**起動順序：先に receiver、次に sender。**

:::tip

一部の機能では実機ロボットへの接続が必要です。USB2CAN アダプタを使用する場合は、以下の手順が必要です。

```bash
# Check the USB2CAN serial port to confirm it is detected
ls ttyACM*

# Grant port permissions
sudo chmod 666 /dev/ttyACM*
```
デバイスに応じて `DEFAULT_SIM_HOST` を設定します。

`DEFAULT_SIM_HOST` は Isaac Sim 環境を実行しているホストの IP アドレスです。

両端が同じマシン上で動作している場合は、`DEFAULT_SIM_HOST` を `"127.0.0.1"` に設定します。
:::

#### ① 関節テストモード（`isaacsim_joint_test_sender`）

実機ハードウェアは不要です。あらかじめ設定された軌道をループ送信して、通信および Isaac Sim receiver を検証します：

```bash
cd reBotArm_Isaacsim
uv run python isaacsim_joint_test_sender.py
```

sender は複数のプリセット関節姿勢間をゆっくり補間し、CAN 接続を必要とせずに、それらをループで送信します。

#### ② 逆運動学モード（`isaacsim_ik_sender`）

エンドエフェクタの姿勢（位置／姿勢）を入力し、IK を解いて Isaac Sim 内のシミュレートされたロボットを駆動します。`reBotArm_Isaacsim/` ディレクトリで `uv run` を使って直接実行します：

```bash
cd reBotArm_Isaacsim
uv run python isaacsim_ik_sender.py
```

**入力形式（1 行につき 1 コマンド）：**
```
x y z                       # position (meters), orientation remains unchanged
x y z r p y                 # position + orientation (meters/degrees)
q j1 j2 j3 j4 j5 j6         # send joint angles directly (degrees)
gripper <0~1>                # update the gripper independently
```

#### ③ 軌道計画モード（`isaacsim_traj_sender`）

これは IK を基盤とし、関節空間での軌道計画（MIN_JERK）を追加してスムーズな動作を実現します。`reBotArm_Isaacsim/` ディレクトリで `uv run` を使って直接実行します：

```bash
cd reBotArm_Isaacsim
uv run python isaacsim_traj_sender.py
```

**入力形式（1 行につき 1 コマンド）：**
```
x y z                       # position (meters)
x y z r p y                 # position + orientation (meters/degrees)
q j1 j2 j3 j4 j5 j6         # direct joint-space command (degrees)
gripper <0~1>                # update the gripper independently
speed <scale>                # adjust trajectory duration ratio
resync                       # re-read the current joint angles from the simulation side
```

#### ④ 重力補償ハンドルモード（`gravity_joint_sender`）

改造済みロボット（グリッパを取り外し、ハンドルを装着）に適しており、手動での動作によって Isaac Sim 上のロボットを制御できます：

```bash
cd reBotArm_Isaacsim
./run_sender.sh
```

**期待される動作：**
- 実機ロボットに接続し、MIT + 重力フィードフォワード補償を有効化する
- ロボットを手で自由に動かすことができる
- 関節角度が UDP 経由で 60 Hz で連続送信される

#### ⑤ 実機からシミュレーションへのマッピングモード（`joint_reader_sender`）

関節角度のみを読み取り、それを Isaac Sim にマッピングします。実機ロボットが他のタスクを実行している際に、その動作を Isaac Sim 上で同時に可視化したい場合に適しています。`reBotArm_Isaacsim/` ディレクトリで `uv run` を使って直接実行します：

```bash
cd reBotArm_Isaacsim
uv run python joint_reader_sender.py
```

**期待される動作：**
- 関節角度のみを読み取る（パッシブフィードバックモード）だけで、制御コマンドは一切送信しない
- 関節角度が UDP 経由で 60 Hz で連続送信される
- 実機ロボットが別プロジェクトによって制御されている場合でも、その動作を Isaac Sim 上で同時に可視化できる

## 通信プロトコル

UDP JSON（ポート `DEFAULT_SIM_HOST:5005`）を使用します。

**sender がフレームごとに送信するペイロード：**

```json
{
  "sequence": 123,
  "timestamp": 1718000000.123,
  "joint_positions": [0.0, 0.1, 0.2, -0.1, 0.0, -0.02],
  "gripper_position": 0.01
}
```

| フィールド | 型 | 説明 |
|------|------|------|
| `sequence` | int | インクリメントされるシーケンス番号 |
| `timestamp` | float | Unix タイムスタンプ（秒） |
| `joint_positions` | float[6] | 最初の 6 関節角度（rad） |
| `gripper_position` | float | 送信側で `GRIPPER_POSITION_SCALE` を用いて変換されたグリッパ位置（m） |

## 設定パラメータ

### 送信側（`gravity_joint_sender.py`）

| パラメータ | デフォルト値 | 説明 |
|------|--------|------|
| `ARM_JOINT_COUNT`| 6 | 関節数 |
| `DEFAULT_PORT` | 5005 | UDP ポート |
| `DEFAULT_SEND_HZ` | 60.0 | 送信周波数（Hz） |
| `GRIPPER_POSITION_SCALE` | 0.007 | グリッパ角度から位置へのスケール係数 |

### 受信側（`isaacsim_joint_receiver.py`）

| パラメータ | デフォルト値 | 説明 |
|------|--------|------|
| `ARM_JOINT_COUNT` | 6 | 関節数 |
| `DEFAULT_PORT` | 5005 | UDP ポート |
| `DEFAULT_RENDER_HZ` | 120.0 | シミュレーション描画周波数（Hz） |
| `GRIPPER_POSITION_SCALE` | 0.0073 | グリッパ位置のスケーリング係数 |
| `ROBOT_PRIM_PATH` | `/World/reBotArm` | Isaac Sim 内の Robot Prim パス |
| `ASSET_RELATIVE_PATH` | usd/reBot_B601_DM/reBot_B601_DM.usda | USD アセットへの相対パス |

## よくある問題

### `OSError: [Errno 98] Address already in use`

ポート 5005 がすでに使用されています。まず、ポートを保持しているプロセスを確認して終了します：

```bash
# Check which process is using the port
sudo lsof -i :5005

# Terminate the process (replace PID with the actual value)
kill <PID>
```

### 関節角度が同期していない

- 送信側と受信側が同じポート（両方とも 5005）を使用していることを確認する
- 送信側のログに `[send]` が継続的に表示されているか確認する
- 受信側のログに `[recv]` が継続的に表示されているか確認する
- ハードウェアの問題を切り分けるために `isaacsim_joint_test_sender.py` を試す

### コンポーネントと Python 環境

| コンポーネント | Python 環境 | 起動スクリプト |
|------|------------|---------|
| 送信側（実機ロボット） | `reBotArm_control_py` uv 環境 | `gravity_joint_sender.py` |
| 送信側（テストモード） | `reBotArm_control_py` uv 環境 | `isaacsim_joint_test_sender.py` |
| 受信側 | Isaac Sim 公式 Python（`python.sh`） | `isaacsim_joint_receiver.py` |

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をスムーズにご利用いただくため、複数のサポートチャネルをご用意しています。さまざまなご希望やニーズに対応できるよう、複数のコミュニケーション手段を提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

