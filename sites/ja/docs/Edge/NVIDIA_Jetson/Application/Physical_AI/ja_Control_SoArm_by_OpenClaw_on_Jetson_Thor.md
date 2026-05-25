---
description: このWikiでは、Jetson Thor上でOpenClawとLeRobotを使用してSO-Armを制御する方法を紹介します。
title: Jetson Thor上でOpenClawによりSO-Armを制御する
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/openclaw/soarm_claw.webp
slug: /ai_robotics_control_soarm_by_openclaw_on_jetson_thor
sku: 100060965 | 100046482
last_update:
  date: 03/09/2026
  author: youjiang
createdAt: '2026-03-09'
url: https://wiki.seeedstudio.com/ja/ai_robotics_control_soarm_by_openclaw_on_jetson_thor/
updatedAt: '2026-03-16'
---

# Jetson Thor上でOpenClawによりSO-Armを制御する

## はじめに

このWikiでは、Jetson Thor上でOpenClawとLeRobotを組み合わせて、ローカルAIエージェントによりSO-Armを制御する方法を説明します。

**NVIDIA Jetson AGX Thor** は、ロボティクスおよびPhysical AIワークロード向けに設計された高性能エッジAIプラットフォームであり、認識・計画・制御のための強力なオンデバイス計算能力を提供します。

**SO-Arm** は、オープンソースで低コストなロボットアームプラットフォーム（SO-ARM100/SO-ARM101）であり、Embodied AI実験、遠隔操作、マニピュレーションタスク開発に広く利用されています。

**OpenClaw** は、ローカルのツールやモデルをオーケストレーションできるAIエージェントフレームワークです。本プロジェクトでは、OpenClawを高レベル制御インターフェースとして使用し、LeRobotがSO-Arm向けの低レベルモーター通信およびキャリブレーションユーティリティを提供します。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/openclaw/soarm_claw.png" />
</div>

:::note
このガイドでは、OpenClawがエージェントのプランニングとタスクオーケストレーションを担当し、SO-Armの動作実行はLeRobotが担当します。
:::

## 目次

1. [ハードウェアの準備](#ハードウェアの準備)
2. [Jetson Thor上でのシステムセットアップ](#jetson-thor上でのシステムセットアップ)
3. [OllamaをインストールしてローカルLLMを実行](#ollamaをインストールしてローカルllmを実行)
4. [Jetson ThorにOpenClawをインストール](#jetson-thorにopenclawをインストール)
5. [SO-Armの接続とキャリブレーション](#so-armの接続とキャリブレーション)
6. [制御デモを実行](#制御デモを実行)
7. [参考資料](#参考資料)

## ハードウェアの準備

### デバイス一覧

- NVIDIA® Jetson AGX Thor™ Developer Kit ×1
- SO-ARM101 低コストAIアーム ×1

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> NVIDIA® Jetson AGX Thor™ Developer Kit </th>
        <th> SO-ARM101 Low-Cost AI Arm </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-kit-3.png" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100046482-so-arm-101-assembled-kit-pro.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM-101-Assembled-Kit-Pro-p-6691.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

### 配線と接続

- SO-ArmコントローラボードをUSB経由でThorに接続します。
- 対応するDC電源アダプタをSO-Armコントローラボードに接続します。
- Thorの電源を入れ、その後アームコントローラボードの電源を入れます。

### 電源投入時のチェックリスト

- Thorが正常に起動し、ネットワークに接続できる。
- SO-Armコントローラボード上のLEDが点灯している。
- USB接続後にシリアルデバイスが現れる。

```bash
ls /dev/ttyACM*
```

ターミナル出力でシリアルノードが検出されれば、ハードウェア接続は正しく行われています。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/openclaw/check_serial.png" />
</div>

## Jetson Thor上でのシステムセットアップ

### システムパッケージの更新

```bash
sudo apt update
sudo apt install -y nvidia-jetpack git curl ffmpeg python3-pip
python3 -m pip install -U pip
```

### コア依存パッケージのインストール

Minicondaをインストールします（推奨）:

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/openclaw/conda.png" />
</div>

LeRobot用の環境を作成します:

```bash
conda create -y -n lerobot python=3.10
conda activate lerobot
pip install 'lerobot[feetech]'
pip uninstall torch torchvision
pip install torch torchvision --index-url https://pypi.jetson-ai-lab.io
```

LeRobot環境にPinocchioをインストールします:

```bash
conda install mamba -y
mamba install -c conda-forge pinocchio pinocchio-python libpinocchio -y
```

### CUDAと周辺デバイスの確認

```bash
python -c "import torch; print(torch.cuda.is_available())"
lerobot-find-port
```

期待される結果:

- `torch.cuda.is_available()` が `True` を出力する
- アームのシリアルポートが検出される（例：`/dev/ttyACM0`）

## OllamaをインストールしてローカルLLMを実行

Ollamaをインストールします:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

モデルを取得します:

```bash
ollama pull qwen3.5:35b
```

:::info
このガイドでは `qwen3.5:35b` を例として使用します。性能やメモリ制約に応じて、別のOllamaモデルに置き換えることもできます。
:::

## Jetson ThorにOpenClawをインストール

### OpenClawをインストール

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

### 実行時パラメータの設定

`~/.openclaw/openclaw.json` を編集し、Ollamaをデフォルトのモデルプロバイダとして設定します:

<details>

<summary> openclaw.json </summary>

```json
{
  "agents": {
    "defaults": {
      "compaction": {
        "mode": "safeguard"
      },
      "maxConcurrent": 4,
      "model": {
        "primary": "ollama/qwen3.5:35b"
      },
      "subagents": {
        "maxConcurrent": 8
      },
      "workspace": "/home/seeed/.openclaw/workspace"
    },
    "list": [
      {
        "id": "main",
        "tools": {
          "profile": "full"
        }
      }
    ]
  },
  "commands": {
    "native": "auto",
    "nativeSkills": "auto",
    "ownerDisplay": "raw",
    "restart": true
  },
  "gateway": {
    "auth": {
      "mode": "token",
      "token": "98aefed421e9a506a3174dab0575fd3cc36c9d15b856a894"
    },
    "bind": "loopback",
    "mode": "local",
    "nodes": {
      "denyCommands": [
        "camera.snap",
        "camera.clip",
        "screen.record",
        "contacts.add",
        "calendar.add",
        "reminders.add",
        "sms.send"
      ]
    },
    "port": 18789,
    "tailscale": {
      "mode": "off",
      "resetOnExit": false
    }
  },
  "messages": {
    "ackReactionScope": "group-mentions"
  },
  "meta": {
    "lastTouchedAt": "2026-03-10T06:45:16.014Z",
    "lastTouchedVersion": "2026.3.8"
  },
  "models": {
    "providers": {
      "ollama": {
        "api": "ollama",
        "apiKey": "ollama-local",
        "baseUrl": "http://127.0.0.1:11434",
        "models": [
          {
            "contextWindow": 262144,
            "cost": {
              "cacheRead": 0,
              "cacheWrite": 0,
              "input": 0,
              "output": 0
            },
            "id": "qwen3.5:35b",
            "input": [
              "text",
              "image"
            ],
            "name": "qwen3.5:35b",
            "reasoning": true
          },
          {
            "contextWindow": 262144,
            "cost": {
              "cacheRead": 0,
              "cacheWrite": 0,
              "input": 0,
              "output": 0
            },
            "id": "qwen3.5",
            "input": [
              "text",
              "image"
            ],
            "name": "qwen3.5",
            "reasoning": true
          }
        ]
      }
    }
  },
  "session": {
    "dmScope": "per-channel-peer"
  },
  "tools": {
    "profile": "coding"
  },
  "wizard": {
    "lastRunAt": "2026-03-10T02:17:28.382Z",
    "lastRunCommand": "onboard",
    "lastRunMode": "local",
    "lastRunVersion": "2026.3.8"
  }
}

```
</details>

:::note
オプション: Ollamaが提供するスクリプトを直接使用して、OpenClawの設定ファイルを素早くセットアップすることもできます。
`ollama launch openclaw --model qwen3.5`
:::

### 追加設定

SO-Arm制御スキルをインストールします:

- [soarm-control Skill](https://clawhub.ai/yuyoujiang/soarm-control) をダウンロードします
- それを `~/.openclaw/workspace/skills` に展開します

ロボット記述ファイルを準備します:

- [SO-ARM101 URDF](https://github.com/TheRobotStudio/SO-ARM100/blob/main/Simulation/SO101/so101_new_calib.urdf) をダウンロードします
- それを `~/.openclaw/workspace/skills/soarm-control/references` に移動します

[任意] 検出モデルを追加します: 
- 検出モデル（YoloV11n）を[こちら](https://wiki.seeedstudio.com/ja/How_to_Train_and_Deploy_YOLOv8_on_reComputer/)を参考に学習させます
- 検出モデル（`best.pt`）を `~/.openclaw/workspace/skills/soarm-control/scripts` に移動します


OpenClawゲートウェイを再起動します:

```bash
openclaw gateway restart
```

WebUIを開きます:

```text
http://127.0.0.1:18789/wiki
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/openclaw/webui.png" />
</div>

## SO-Armの接続とキャリブレーション

### シリアルポートの権限と検出

```bash
conda activate lerobot
lerobot-find-port
sudo chmod 666 /dev/ttyACM*
```

### 初期キャリブレーション

フォロワーアームをキャリブレーションします:

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=openclaw_soarm
```

キャリブレーションファイルは次の場所に保存されます:

`~/.cache/huggingface/lerobot/calibration/`

:::note
完全なキャリブレーション手順については、以下を参照してください:
[LeRobotにおけるSO-Arm - Calibrate](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#calibrate)
:::

## 制御デモを実行

### バックエンドサービスの起動

OpenClawとLeRobotの環境が準備できていることを確認します:

```bash
openclaw gateway restart

conda activate lerobot
cd ~/.openclaw/workspace/skills/soarm-control 
bash scripts/start_server.sh &
```

### 基本モーションタスクの実行

OpenClaw WebUI でロボット制御の指示を入力します。OpenClaw はプロンプトを解析し、インストール済みの `soarm-control` スキルを呼び出して、アームを目標位置まで動かします。

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/T_uh1N8Fxe4" title="Control SoArm Pick Up by OpenClaw on Jetson Thor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考資料

- https://docs.openclaw.ai/
- https://wiki.seeedstudio.com/ja/local_openclaw_on_recomputer_jetson/
- https://unstabledemos.com/tutorials/openclaw-orin-nano/
- https://wiki.seeedstudio.com/ja/lerobot_so100m_new/
- https://github.com/huggingface/lerobot
- https://github.com/TheRobotStudio/SO-ARM100

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
