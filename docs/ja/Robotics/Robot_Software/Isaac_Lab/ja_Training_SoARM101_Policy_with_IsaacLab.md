---
description: このwikiでは、Nvidia GPU搭載のUbuntuでIsaac Labをセットアップし、SO-ARM100/101ロボットアーム用の強化学習ポリシーを訓練する方法を説明します。
title: IsaacLabでSoArm101ポリシーを訓練する
keywords:
- IsaacLab
- Reinforcement Learning
- Robotic Arm
- SOARM100
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/cube_play.webp
slug: /ja/training_soarm101_policy_with_isaacLab
last_update:
  date: 9/4/2025
  author: Youjiang
---

## はじめに

このwikiでは、Isaac Labを使用してSO-ARM100/101ロボットアームのポリシーを強化学習で訓練およびテストする方法を紹介します。

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/cube_play.gif" />
</div>

## 📌前提条件

- Nvidia GPU搭載のUbuntu PC

:::info
CUDAドライバーやCondaがインストールされていない場合は、まずそれらをセットアップしてください。
:::

## 始めましょう

### 🚀 ステップ1. Isaac Labのインストール

NVIDIA Isaac™ Labは、研究者や開発者がロボットポリシーを効率的に訓練するのに役立つ[ロボット学習](https://www.nvidia.com/en-us/glossary/robot-learning/)用のオープンソース統合フレームワークです。

Ubuntu PCのターミナルで以下のコマンドを実行してください：

```bash
# Conda環境の作成とアクティベート
conda create -n isaaclab python=3.10
conda activate isaaclab

# PyTorch（GPU版）のインストール
pip install torch==2.7.0 torchvision==0.22.0 --index-url https://download.pytorch.org/whl/cu128

# pipのアップグレード
pip install --upgrade pip

# Isaac Sim（拡張機能付き）のインストール
pip install 'isaacsim[all,extscache]==4.5.0' --extra-index-url https://pypi.nvidia.com

# IsaacLabリポジトリのクローン
cd ~/Documents
git clone https://github.com/isaac-sim/IsaacLab.git

# 依存関係のインストール
sudo apt install cmake build-essential

# セットアップの初期化
cd IsaacLab
./isaaclab.sh --install
```

インストールを確認するために以下のコマンドを実行してください：

```bash
./isaaclab.sh -p scripts/tutorials/00_sim/create_empty.py
```

成功すると、空のIsaac Simウィンドウが表示されます。

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/create_empty.png" />
</div>

### 🤖 ステップ2. isaac_so_arm101プロジェクトのインストール

<div style={{ textAlign: 'justify' }}>
    このリポジトリは、Isaac Labを使用してSO‑ARM100およびSO‑ARM101ロボット用のタスクを実装しています。これは、LycheeAI Hubシリーズプロジェクト：[SO‑ARM101 × Isaac Sim × Isaac Lab](https://lycheeai-hub.com/project-so-arm101-x-isaac-sim-x-isaac-lab-tutorial-series)のいくつかのチュートリアルの基盤として機能します。
</div>

以下のコマンドを実行してください：

```bash
cd ~/Documents
git clone https://github.com/MuammerBay/isaac_so_arm101.git
cd isaac_so_arm101

# プロジェクトの依存関係をインストール
python -m pip install -e source/SO_100

# 環境のテスト
python scripts/list_envs.py
```

isaac_so_arm101プロジェクトが正常にインストールされると、ターミナルウィンドウに以下のログが出力されます：

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/install.png" />
</div>

### 🎯 ステップ3. 訓練の開始

以下のコマンドで訓練を開始してください：

```bash
python scripts/rsl_rl/train.py --task SO-ARM100-Reach-v0
```

これによりIsaac Simウィンドウが開き、訓練プロセスをリアルタイムで観察できます。起動コマンドに`--headless`パラメータを追加すると、訓練プロセスを高速化できます。

<div class="video-container">
    <iframe width="900" height="540" src="https://www.youtube.com/embed/J9JpmeXeKKE" title="Training SoArm100 with IsaacLab" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

訓練後、モデルの重みは以下の場所に保存されます：
`~/Documents/isaac_so_arm101/logs/rsl_rl/so_arm100_reach`

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/models.png" />
</div>

### 🧪 ステップ4. モデルのテスト

訓練されたモデルを以下のコマンドでテストしてください：

```bash
python scripts/rsl_rl/play.py --task SO-ARM100-Reach-Play-v0
```

テスト中、ターゲット位置は定義された範囲内でランダムに生成され、訓練されたモデルがロボットアームを駆動してそれらのターゲットに到達させます。

<div class="video-container">
    <iframe width="900" height="540" src="https://www.youtube.com/embed/9BOOWKCyhXk" title="Test SoArm100 with IsaacLab" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考文献

- https://lycheeai-hub.com/project-so-arm101-x-isaac-sim-x-isaac-lab-tutorial-series
- https://github.com/MuammerBay/isaac_so_arm101
- https://github.com/huggingface/lerobot
- https://github.com/isaac-sim/IsaacLab
- https://github.com/leggedrobotics/rsl_rl

## 技術サポート & 製品に関するディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>