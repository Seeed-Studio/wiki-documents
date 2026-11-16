---
description: "SO-ARM Physical AI ビギナーコース第 5 章 — Ubuntu x86 または Jetson に LeRobot ソフトウェア環境を構築します：Miniforge、検証済み Seeed LeRobot リポジトリ、ffmpeg、PyTorch、feetech モーター依存関係。"
title: 第 5 章 - ソフトウェア環境の構築
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - Miniforge
  - 環境
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_5
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_5/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 2 · 第 5 章 · 実践</span>
    <h2>5. ソフトウェア環境の構築</h2>
    <p>
      Ubuntu x86 または Jetson に LeRobot ソフトウェア環境を構築します：Miniforge の導入、検証済み Seeed LeRobot リポジトリのクローン、ffmpeg・PyTorch・feetech モーター依存関係のインストール。
    </p>
    <div className="hero-actions">
      <a href="#requirements">システム要件</a>
      <a href="#install">LeRobot をインストール</a>
      <a href="#verify">検証</a>
    </div>
  </div>
</section>

## 5.1 システム要件

<section id="requirements" className="section-card">
  <div className="section-title">
    <span>要件</span>
    <h2>5.1 システム要件</h2>
  </div>

**Ubuntu x86 の場合：**

- Ubuntu 22.04
- CUDA 12+
- Python 3.12
- Torch 2.6+

**Jetson Orin の場合：**

- Jetson JetPack 6.0 および 6.1（JetPack 6.2 は未対応）
- Python 3.12
- Torch 2.3+

第 3 章の注意を再掲：Windows 上の WSL や仮想マシン Ubuntu は避けてください — ネイティブ Ubuntu か Jetson が最もトラブルが少ないです。

</section>

## 5.2 LeRobot をインストール

<section id="install" className="section-card">
  <div className="section-title">
    <span>手順</span>
    <h2>5.2 LeRobot をインストール</h2>
  </div>

PyTorch や torchvision などの環境は CUDA バージョンに合わせてインストールする必要があります。デバイスに合わせたタブに従ってください。

<Tabs defaultValue="X86">

<TabItem value="X86" label="X86 Ubuntu 22.04">

**1. Miniforge をインストール：**

```bash
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
chmod +x Miniforge3-Linux-x86_64.sh
./Miniforge3-Linux-x86_64.sh
# インストール完了後：
source ~/.bashrc
# すべてのシェルを初期化
conda init --all
```

**2. LeRobot 用に新しい conda 環境を作成して有効化：**

```bash
conda create -y -n lerobot python=3.12 && conda activate lerobot
```

**3. 検証済み LeRobot リポジトリをクローン：**

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

**4. 環境に ffmpeg をインストール：**

```bash
conda install ffmpeg -c conda-forge
```

:::tip
通常これは libsvtav1 エンコーダ付きの ffmpeg 7.X が入ります。libsvtav1 が非対応の場合（`ffmpeg -encoders` で確認）、ffmpeg 7.1.1 を明示的にインストールします：

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

このコマンドは、後ほどデータセット動画のエンコード時に出る `No valid stream found in input file` エラーの解決にもなります。
:::

**5. feetech モーター依存関係付きで LeRobot をインストール：**

:::tip
新規セットアップの Ubuntu 22.04 — 特に最小インストール — では `gcc` などのビルドツールが入っておらず、feetech エクストラの `evdev` パッケージのビルドが失敗することがあります。先に基本ビルドツールを入れてください：

```bash
sudo apt update
sudo apt install build-essential
```
:::

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

</TabItem>

<TabItem value="Jetson" label="Jetson Orin">

**1. Miniforge をインストール：**

```bash
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh
chmod +x Miniforge3-Linux-aarch64.sh
./Miniforge3-Linux-aarch64.sh
# プロンプトに従い 'yes' または Enter を入力。インストール完了後：
source ~/.bashrc
```

**2. LeRobot 用に新しい conda 環境を作成して有効化：**

```bash
conda create -y -n lerobot python=3.12 && conda activate lerobot
```

**3. 検証済み LeRobot リポジトリをクローン：**

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

**4. 環境に ffmpeg をインストール：**

```bash
conda install ffmpeg -c conda-forge
```

**5. feetech モーター依存関係付きで LeRobot をインストール：**

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

**6. Jetson JetPack 6.0+ デバイスの場合**（先に手順 5 から [PyTorch-gpu と Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) をインストールしてから実行）：

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # conda で OpenCV 等をインストール
conda remove opencv                                   # conda 版 OpenCV をアンインストール
pip3 install opencv-python==4.10.0.84                 # pip3 で opencv-python を再インストール
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0                            # torchvision に合わせる
```

</TabItem>

</Tabs>

</section>

## 5.3 環境の検証

<section id="verify" className="section-card">
  <div className="section-title">
    <span>検証</span>
    <h2>5.3 環境の検証</h2>
  </div>

pip による LeRobot インストールは、元の PyTorch と torchvision を CPU 版で置き換えてしまうことがあるため、訓練前に必ず確認します。`lerobot` conda 環境で実行：

```python
python   # ターミナルで Python を起動
import torch
print(torch.cuda.is_available())
exit()   # Python を終了
```

- `False` → 現在の環境は CPU 版 PyTorch を使っています。GPU での訓練・推論が必要な場合は [PyTorch 公式ガイド](https://pytorch.org/index.html) に従い、CUDA バージョンに合う PyTorch と torchvision を再インストールしてください。
- `True` → GPU アクセラレーションが利用可能です。

:::tip
NVIDIA RTX 50 シリーズ GPU は CUDA 12.8 以上のプレビュー版が必要です：

```bash
pip install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cu128
```
:::

最後に、LeRobot のコマンドラインツールが PATH にあることを確認：

```bash
lerobot-find-port --help
```

ヘルプが表示されれば環境は準備完了です。次章でモーターの設定とアームの組み立てに進みます。

</section>

</div>
