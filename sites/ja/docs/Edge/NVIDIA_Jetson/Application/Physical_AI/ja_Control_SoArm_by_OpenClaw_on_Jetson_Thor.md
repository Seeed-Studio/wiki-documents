---
description: このWikiでは、Jetson Thor 上で OpenClaw と LeRobot を用いて SO-Arm を制御する方法を説明します。
title: Jetson Thor 上で OpenClaw による SO-Arm 制御
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/openclaw/soarm_claw.webp
slug: /ai_robotics_control_soarm_by_openclaw_on_jetson_thor
sku: 100060965 | 100046482
last_update:
  date: 03/09/2026
  author: youjiang
---

# Jetson Thor 上で OpenClaw による SO-Arm 制御

## はじめに

このWikiでは、Jetson Thor 上で OpenClaw と LeRobot を組み合わせ、ローカル AI エージェントによって SO-Arm を制御する方法を説明します。

**NVIDIA Jetson AGX Thor** は、ロボティクスおよびフィジカル AI ワークロード向けに設計された高性能エッジ AI プラットフォームであり、認識・計画・制御のための強力なオンデバイス計算能力を提供します。

**SO-Arm** は、オープンソースで低コストなロボットアームプラットフォーム（SO-ARM100/SO-ARM101）であり、エンボディド AI 実験、遠隔操作、マニピュレーションタスク開発に広く利用されています。

**OpenClaw** は、ローカルのツールやモデルをオーケストレーションできる AI エージェントフレームワークです。本プロジェクトでは、OpenClaw を高レベル制御インターフェースとして使用し、LeRobot が SO-Arm 向けの低レベルモーター通信およびキャリブレーションユーティリティを提供します。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/openclaw/soarm_claw.png" />
</div>

:::note
このガイドでは、OpenClaw がエージェントのプランニングとタスクオーケストレーションを担当し、SO-Arm のモーション実行は LeRobot によって処理されます。
:::

## 目次

1. [ハードウェアの準備](#ハードウェアの準備)
2. [Jetson Thor 上でのシステムセットアップ](#jetson-thor-上でのシステムセットアップ)
3. [Ollama をインストールしてローカル LLM を実行](#ollama-をインストールしてローカル-llm-を実行)
4. [Jetson Thor に OpenClaw をインストール](#jetson-thor-に-openclaw-をインストール)
5. [SO-Arm の接続とキャリブレーション](#so-arm-の接続とキャリブレーション)
6. [制御デモの実行](#制御デモの実行)
7. [参考資料](#参考資料)

## ハードウェアの準備

### デバイス一覧

- NVIDIA® Jetson AGX Thor™ Developer Kit ×1
- SO-ARM101 低コスト AI アーム ×1

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

- SO-Arm コントローラボードを USB で Thor に接続します。
- 対応する DC 電源アダプタを SO-Arm コントローラボードに接続します。
- Thor の電源を入れ、その後アームコントローラボードの電源を入れます。

### 電源投入時のチェックリスト

- Thor が正常に起動し、ネットワークに接続できる。
- SO-Arm コントローラボードの LED が点灯している。
- USB 接続後にシリアルデバイスが現れる。

```bash
ls /dev/ttyACM*
```

ターミナル出力でシリアルノードが検出されれば、ハードウェア接続は正しく行われています。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/openclaw/check_serial.png" />
</div>

## Jetson Thor 上でのシステムセットアップ

### システムパッケージの更新

```bash
sudo apt update
sudo apt install -y nvidia-jetpack git curl ffmpeg python3-pip
python3 -m pip install -U pip
```

### 主要な依存関係のインストール

Miniconda をインストールします（推奨）:

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

LeRobot 用の環境を作成します:

```bash
conda create -y -n lerobot python=3.12
conda activate lerobot
git clone https://github.com/huggingface/lerobot.git ~/lerobot
cd ~/lerobot
pip install -e . 
pip uninstall torch torchvision
pip install torch torchvision --index-url https://pypi.jetson-ai-lab.io
```

LeRobot 環境に Pinocchio をインストールします:

```bash
conda install pinocchio -c conda-forge
```

### CUDA と周辺デバイスの確認

```bash
python -c "import torch; print(torch.cuda.is_available())"
lerobot-find-port
```

期待される結果:

- `torch.cuda.is_available()` が `True` を出力する
- アームのシリアルポートが検出される（例 `/dev/ttyACM0`）

## Ollama をインストールしてローカル LLM を実行

Ollama をインストールします:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

モデルを取得します:

```bash
ollama pull qwen3-vl:9b
```

:::info
このガイドでは例として `qwen3-vl:9b` を使用します。性能やメモリ要件に応じて、別の Ollama モデルに置き換えることもできます。
:::

## Jetson Thor に OpenClaw をインストール

### OpenClaw のインストール

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

### 実行時パラメータの設定

`~/.openclaw/openclaw.json` を編集し、Ollama をデフォルトのモデルプロバイダとして設定します:

```json
{
  "agents": {
    "defaults": {
      "models": {
        "ollama": {}
      },
      "model": {
        "primary": "ollama/qwen3-vl:9b"
      }
    }
  },
  "models": {
    "providers": {
      "ollama": {
        "baseUrl": "http://127.0.0.1:11434/v1",
        "apiKey": "ollama-local",
        "api": "openai-completions",
        "models": [
          {
            "id": "qwen3-vl:9b",
            "name": "Qwen3 VL 9B",
            "reasoning": false,
            "input": [
              "text"
            ],
            "cost": {
              "input": 0,
              "output": 0,
              "cacheRead": 0,
              "cacheWrite": 0
            },
            "contextWindow": 128000,
            "maxTokens": 8192
          }
        ]
      }
    }
  }
}
```

:::note
オプション: Ollama が提供するスクリプトを直接使用して、OpenClaw の設定ファイルを素早くセットアップすることもできます。

`ollama launch openclaw --model qwen3.5`
:::

### 追加設定

SO-Arm 制御スキルをインストールします:

- [soarm-control Skill](https://clawhub.ai/yuyoujiang/soarm-control) をダウンロードします
- それを `~/.openclaw/workspace/skills` に展開します

ロボット記述ファイルを準備します:

- [SO-ARM101 URDF](https://github.com/TheRobotStudio/SO-ARM100/blob/main/Simulation/SO101/so101_new_calib.urdf) をダウンロードします
- それを `~/.openclaw/workspace/skills/soarm-control/references` に移動します

OpenClaw ゲートウェイを再起動します:

```bash
openclaw gateway restart
```

WebUI を開きます:

```text
http://127.0.0.1:18789/
```

## SO-Arm の接続とキャリブレーション

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
[SO-Arm in LeRobot - Calibrate](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#calibrate)
:::

## 制御デモの実行

### OpenClaw サービスの起動

OpenClaw と LeRobot の環境が準備できていることを確認します:

```bash
openclaw gateway restart
conda activate lerobot
```

### 基本モーションタスクの実行

OpenClaw WebUI でロボット制御の指示を入力します。OpenClaw はプロンプトを解析し、インストール済みの `soarm-control` スキルを呼び出して、アームを目標位置まで動かします。

このビデオでは、次の 3 つのコマンドを実演しています:

1. ロボットアームのエンドエフェクタを上方向に 20 cm 移動する。
2. 高さを変えずに、前方へ 20 cm 移動する。
3. 初期位置に戻る。

これら 3 つのコマンドに対する OpenClaw の応答は、いずれも期待どおりの動作になっています。

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/5fPBpAno2wc" title="Using OpenClaw to Control the SOARM 101 Robot Arm | Robotics Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考資料

- https://docs.openclaw.ai/
- https://wiki.seeedstudio.com/ja/local_openclaw_on_recomputer_jetson/
- https://unstabledemos.com/tutorials/openclaw-orin-nano/
- https://wiki.seeedstudio.com/ja/lerobot_so100m_new/
- https://github.com/huggingface/lerobot
- https://github.com/TheRobotStudio/SO-ARM100

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
