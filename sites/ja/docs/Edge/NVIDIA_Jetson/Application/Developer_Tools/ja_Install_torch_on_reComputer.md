---
description: この記事では、異なるJetPackバージョン（5、6、その他）に対応したJetsonベースのreComputerデバイスにNVIDIA最適化PyTorchをインストールするためのステップバイステップガイドを提供します。必要な依存関係の設定方法、新しいPyTorchリリース用のcuSPARSELtのインストール方法、インストールの検証方法について説明します。さらに、Minicondaを使用して複数のPython環境を管理し、開発とデプロイメントのために異なるPyTorchバージョン間を簡単に切り替える方法についても説明します。参考のための有用なリソースと公式リンクも含まれています。
title: reComputer Jetson用PyTorchのインストール
keywords:
  - reComputer
  - Jetson
  - PyTorch
  - JetPack
  - torch
  - Deep Learning
  - AI
  - CUDA
image: https://files.seeedstudio.com/wiki/Yolo11/connection.webp
slug: /ja/install_torch_on_recomputer
last_update:
  date: 07/25/2025
  author: Zibo
---

<div style={{ textAlign: "justify" }}>
このwikiでは、お使いのreComputerにJetPackバージョンに対応したNVIDIA最適化PyTorchをインストールする方法を説明します。また、仮想環境（conda）を使用して開発とデプロイメント用に複数のPyTorchバージョンを管理する方法についても説明します。
</div>

## 前提条件

- JetPackがインストールされた[reComputer](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)
- インターネット接続

<a id="Install_Torch"></a>

## reComputer用PyTorchのインストール

ここでは、一般的に使用されるJetpack 5とJetpack 6の2つのバージョンでCUDAサポート付きPyTorchをインストールする方法を紹介します。

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.3" label="JP5.1.3">

reComputerでは、Jetpack 5の一般的に使用されるバージョンは5.1.3です。ここでは、これを使用してPyTorchのインストール方法を紹介します。

**ステップ 1.** システムを更新し、依存関係をインストールします：

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

**ステップ 2.** 公式PyTorchホイールをダウンロードします（例：JetPack 5.1.3、Python 3.8用のtorch-2.1.0）：

```bash
wget https://developer.download.nvidia.com/compute/redist/jp/v512/pytorch/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
pip install torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
```

:::note
Jetpack 5.1.3をサポートするより新しいバージョンのtorchが必要な場合は、[こちら](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVSylp0HuEFKigdpEzDlkVoBgmcjcT5StPS2xkzfp8RQVg?e=duoRdR)からコンパイル済みのwheelファイルをダウンロードしてください（python3.8用のtorch-2.2）。
:::

**ステップ 3.** インストールを確認します：

```python
import torch
print(torch.cuda.is_available())
print(torch.__version__)
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/torch_2.1.png"/>
</div>

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

reComputerでは、Jetpack 6の一般的に使用されるバージョンは6.2です。ここでは、これを使用してPyTorchのインストール方法を紹介します。

**ステップ 1.** システムを更新し、依存関係をインストールします：

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

**ステップ 2.** cuSPARSELtを[こちら](https://developer.nvidia.com/cusparselt-downloads?target_os=Linux&target_arch=aarch64-jetson&Compilation=Native&Distribution=Ubuntu&target_version=22.04&target_type=deb_network)からインストールします（PyTorch 24.06+に必要）：

:::note
<div style={{ textAlign: "justify" }}>
cuSPARSELtは、NVIDIAが開発したスパース行列乗算専用の高性能CUDAライブラリです。主にスパース重みでの行列乗算演算を高速化するために使用され、大規模モデル推論やスパースニューラルネットワークでよく見られます。新しいバージョンのPyTorch（PyTorch 24.06+）では、cusparseltを自動的に呼び出してスパースモデルの推論速度を向上させ、特にJetsonのような組み込みGPUにおいて効率を大幅に向上させることができます。
</div>
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/download_cu.png"/>
</div>

**ステップ 3.** 上図に示すように選択したバージョンに従って、以下のインストールコマンドを取得します：

```bash
wget https://developer.download.nvidia.com/compute/cusparselt/0.7.1/local_installers/cusparselt-local-tegra-repo-ubuntu2204-0.7.1_1.0-1_arm64.deb
sudo dpkg -i cusparselt-local-tegra-repo-ubuntu2204-0.7.1_1.0-1_arm64.deb
sudo cp /var/cusparselt-local-tegra-repo-ubuntu2204-0.7.1/cusparselt-*-keyring.gpg /usr/share/keyrings/
sudo apt-get update
sudo apt-get -y install libcusparselt0 libcusparselt-dev
```

**ステップ 4.** PyTorchをダウンロードしてインストールします（例：JetPack 6.2、Python 3.10用のtorch-2.5.0）：

```bash
wget https://developer.download.nvidia.cn/compute/redist/jp/v61/pytorch/torch-2.5.0a0+872d972e41.nv24.08.17622132-cp310-cp310-linux_aarch64.whl
pip install torch-2.5.0a0+872d972e41.nv24.08.17622132-cp310-cp310-linux_aarch64.whl
```

:::note
Jetpack 6.2をサポートするより新しいバージョンのtorchが必要な場合は、[こちら](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EW2ke8EPcVhGsM2mjCMQOWEBQHRtPMGgAkHOR6hGD-zLjA?e=wPiBzH)からコンパイル済みのwheelファイルをダウンロードしてください（python3.10用のtorch-2.7）。
:::

**ステップ 5.** インストールを確認します：

```python
import torch
print(torch.cuda.is_available())
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/torch_2.5.png"/>
</div>

</TabItem>

<TabItem value="Other Version" label="Other Version">

**ステップ 1.** システムを更新し、依存関係をインストールします：

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

こちらはNVIDIAが公式に提供している[CUDAサポート付きPyTorchのコンパイル済みwheelファイル](https://developer.download.nvidia.cn/compute/redist/jp/)です。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/download_wheel.png"/>
</div>

**ステップ2.** お使いのJetPackバージョンとPythonバージョンに基づいて、適切なwheelファイルをダウンロードしてください。

```bash
# Download the wheel file
wget https://developer.download.nvidia.cn/compute/redist/jp/v60/pytorch/torch-2.4.0a0+f70bd71a48.nv24.06.15634931-cp310-cp310-linux_aarch64.whl
# Install the wheel file
pip install torch-2.4.0a0+f70bd71a48.nv24.06.15634931-cp310-cp310-linux_aarch64.whl
```

**ステップ 3.** インストールを確認します：

```python
import torch
print(torch.cuda.is_available())
```

</TabItem>
</Tabs>

<!-- Code END -->

## Conda を使用した複数の PyTorch バージョン

Miniconda は Conda パッケージマネージャーの軽量インストーラーで、Python 環境とパッケージを迅速に作成・管理するための最小限の環境を提供します。

**ステップ 1.** Miniconda をインストール：

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
bash Miniconda3-latest-Linux-aarch64.sh
```

:::info

- 指示に従って「yes」と入力し、利用規約に同意してください。
- インストールパスはデフォルト設定（~/miniconda3など）の使用を推奨します。
- 最後に.bashrcに自動追加するかどうかの確認が表示されます。「yes」と入力することを推奨します。

:::
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/install_conda.png"/>
</div>

**ステップ 2.** condaを初期化して設定します：

```bash
source ~/.bashrc
# Verify if conda is functioning properly
conda --version
# Disable automatic entry into the conda base environment
conda config --set auto_activate_base false
# Close and reopen the terminal. By default, it will not enter the base environment.
```

**ステップ3.** 新しい環境を作成し、特定のPyTorchホイールをインストールします：

```bash
conda create -n torch_2.0 python=3.8
conda activate torch_2.0
```

**ステップ 4.** [前のセクション](#Install_Torch)で示されているように、PyTorchのwheelファイルをダウンロードしてインストールします。

:::info
詳細については、[NVIDIA PyTorchインストールガイド](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html)を参照してください
:::

## リソース

- [NVIDIA Developer Forum](https://forums.developer.nvidia.com/t/pytorch-for-jetson/72048)
- [NVIDIA PyTorchインストールガイド](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html)
- [PyTorch for Jetsonリリースノート](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform-release-notes/pytorch-jetson-rel.html#pytorch-jetson-rel)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
