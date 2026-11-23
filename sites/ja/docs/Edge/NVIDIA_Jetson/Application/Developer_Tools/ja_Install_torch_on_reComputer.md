---
description: "JetPack 5 と JetPack 6 向けに最適化された NVIDIA 版 PyTorch を reComputer にインストールし、torch バージョンを切り替えるための conda 環境を構築します。"
title: reComputer Jetson に Pytorch をインストールする
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
slug: /install_torch_on_recomputer
last_update:
  date: 07/25/2025
  author: Zibo
createdAt: '2025-07-25'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/ja/install_torch_on_recomputer/
---

<div style={{ textAlign: "justify" }}>
NVIDIA は JetPack のリリースごとに PyTorch の wheel を公開しているため、JetPack 5 と JetPack 6 ではインストール方法が異なります。自分のモジュールに合ったセクションを選び、対応する wheel をインストールして、`torch.cuda.is_available()` が True を返すことを確認してください。Conda 環境を使うことで、プロジェクトが古いバージョンを指定している場合でも、複数の torch バージョンを並行して保持できます。
</div>

## 事前準備

- JetPack をインストール済みの [reComputer](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)
- インターネット接続

<a id="Install_Torch"></a>

## reComputer 向け PyTorch のインストール

多くの reComputer ユニットで使われている 2 つの JetPack 世代では、使用する wheel が異なります。JetPack 5.1.3 は Python 3.8、JetPack 6.2 は Python 3.10 と組み合わせて使用します。

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.3" label="JP5.1.3">

reComputer で一般的に使用されている Jetpack 5 のバージョンは 5.1.3 です。以下の手順で、このバージョン向けに PyTorch をインストールします。

**Step 1.** システムを更新し、依存パッケージをインストールします：

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

**Step 2.** 公式の PyTorch wheel をダウンロードします（例：JetPack 5.1.3、Python 3.8 用の torch-2.1.0）：

```bash
wget https://developer.download.nvidia.com/compute/redist/jp/v512/pytorch/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
pip install torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
```

:::note
Jetpack 5.1.3 をサポートする、より新しいバージョンの torch が必要な場合は、[こちら](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVSylp0HuEFKigdpEzDlkVoBgmcjcT5StPS2xkzfp8RQVg?e=duoRdR) からコンパイル済み wheel ファイル（python3.8 用 torch-2.2）をダウンロードしてください。
:::

**Step 3.** インストールを確認します：

```python
import torch
print(torch.cuda.is_available())
print(torch.__version__)
```

<div align="center">
  <img alt="JetPack 5.1.3 上で torch 2.1.0 を使用したときの torch.__version__ と torch.cuda.is_available() の出力" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/torch_2.1.png"/>
</div>

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

reComputer で一般的に使用されている Jetpack 6 のバージョンは 6.2 です。以下の手順で、このバージョン向けに PyTorch をインストールします。

**Step 1.** システムを更新し、依存パッケージをインストールします：

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

**Step 2.** [こちら](https://developer.nvidia.com/cusparselt-downloads?target_os=Linux&target_arch=aarch64-jetson&Compilation=Native&Distribution=Ubuntu&target_version=22.04&target_type=deb_network) から cuSPARSELt をインストールします（PyTorch 24.06 以降で必須）：

:::note
<div style={{ textAlign: "justify" }}>
cuSPARSELt は、NVIDIA が開発したスパース行列乗算専用の高性能 CUDA ライブラリです。主に、大規模モデル推論やスパースニューラルネットワークでよく見られるスパースな重みを用いた行列乗算処理を高速化するために使用されます。新しいバージョンの PyTorch（PyTorch 24.06 以降）では、スパースモデルの推論速度を向上させるために自動的に cuSPARSELt を呼び出します。特に Jetson のような組み込み GPU 上では、これにより効率が大幅に向上します。
</div>
:::

<div align="center">
  <img alt="Linux、aarch64、Ubuntu 22.04、ネイティブビルドを選択した cuSPARSELt のダウンロードページ" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/download_cu.png"/>
</div>

**Step 3.** 上図のように選択したバージョンに応じて、次のインストールコマンドが取得できます：

```bash
wget https://developer.download.nvidia.com/compute/cusparselt/0.7.1/local_installers/cusparselt-local-tegra-repo-ubuntu2204-0.7.1_1.0-1_arm64.deb
sudo dpkg -i cusparselt-local-tegra-repo-ubuntu2204-0.7.1_1.0-1_arm64.deb
sudo cp /var/cusparselt-local-tegra-repo-ubuntu2204-0.7.1/cusparselt-*-keyring.gpg /usr/share/keyrings/
sudo apt-get update
sudo apt-get -y install libcusparselt0 libcusparselt-dev
```

**Step 4.** PyTorch をダウンロードしてインストールします（例：JetPack 6.2、Python 3.10 用の torch-2.5.0）：

```bash
wget https://developer.download.nvidia.cn/compute/redist/jp/v61/pytorch/torch-2.5.0a0+872d972e41.nv24.08.17622132-cp310-cp310-linux_aarch64.whl
pip install torch-2.5.0a0+872d972e41.nv24.08.17622132-cp310-cp310-linux_aarch64.whl
```

:::note
Jetpack 6.2 をサポートする、より新しいバージョンの torch が必要な場合は、[こちら](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EW2ke8EPcVhGsM2mjCMQOWEBQHRtPMGgAkHOR6hGD-zLjA?e=wPiBzH) からコンパイル済み wheel ファイル（python3.10 用 torch-2.7）をダウンロードしてください。
:::

**Step 5.** インストールを確認します：

```python
import torch
print(torch.cuda.is_available())
```

<div align="center">
  <img alt="JetPack 6.2 環境の Python 3.10 上で torch.cuda.is_available() が True を返している様子" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/torch_2.5.png"/>
</div>

</TabItem>

<TabItem value="Other Version" label="Other Version">

**Step 1.** システムを更新し、依存パッケージをインストールします：

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

ここに、NVIDIA が CUDA 対応で公式提供している [PyTorch のコンパイル済み wheel ファイル](https://developer.download.nvidia.cn/compute/redist/jp/) があります。

<div align="center">
  <img alt="JetPack と Python のバージョンごとにビルドが並んでいる NVIDIA PyTorch wheel インデックス" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/download_wheel.png"/>
</div>

**Step 2.** 自分の JetPack バージョンと Python バージョンに基づいて、適切な wheel ファイルをダウンロードします。

```bash
# Download the wheel file
wget https://developer.download.nvidia.cn/compute/redist/jp/v60/pytorch/torch-2.4.0a0+f70bd71a48.nv24.06.15634931-cp310-cp310-linux_aarch64.whl
# Install the wheel file
pip install torch-2.4.0a0+f70bd71a48.nv24.06.15634931-cp310-cp310-linux_aarch64.whl
```

**Step 3.** インストールを確認します：

```python
import torch
print(torch.cuda.is_available())
```

</TabItem>
</Tabs>

<!-- Code END -->

## Conda で複数バージョンの PyTorch を使う

Miniconda は Conda パッケージマネージャー用の軽量インストーラーで、Python 環境やパッケージを素早く作成・管理するための最小限の環境を提供します。

**Step 1.** Miniconda をインストールします：

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
bash Miniconda3-latest-Linux-aarch64.sh
```

:::info

- 指示に従い、利用規約に同意する場合は "yes" と入力してください。
- インストールパスは ~/miniconda3 など、デフォルト設定の使用を推奨します。
- 最後に .bashrc へ自動追加するかどうかを尋ねられます。ここでは "yes" と入力することを推奨します。

:::
<div align="center">
  <img alt="新しいシェルで conda が読み込まれるように /home/seeed/.bashrc が変更されたことを示す conda init の出力" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/install_conda.png"/>
</div>

**Step 2.** conda を初期化・設定します：

```bash
source ~/.bashrc
# Verify if conda is functioning properly
conda --version
# Disable automatic entry into the conda base environment
conda config --set auto_activate_base false
# Close and reopen the terminal. By default, it will not enter the base environment.
```

**Step 3.** 新しい環境を作成し、特定の PyTorch wheel をインストールします：

```bash
conda create -n torch_2.0 python=3.8
conda activate torch_2.0
```

**Step 4.** [前のセクション](#Install_Torch) で示したように、PyTorch の wheel ファイルをダウンロードしてインストールします。

:::info
詳細については、[NVIDIA PyTorch インストールガイド](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html) を参照してください。
:::

## リソース

- [NVIDIA Developer Forum](https://forums.developer.nvidia.com/t/pytorch-for-jetson/72048)
- [NVIDIA PyTorch インストールガイド](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html)
- [PyTorch for Jetson リリースノート](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform-release-notes/pytorch-jetson-rel.html#pytorch-jetson-rel)

## FAQ

**自分の JetPack バージョンにはどの PyTorch wheel が対応していますか？**
JetPack 5.1.3 では `torch-2.1.0a0+...cp38`（Python 3.8）、JetPack 6.2 では `torch-2.5.0a0+...cp310`（Python 3.10）を使用します。`jp/vXX` パスと `cpXX` タグの両方が JetPack と Python に一致する wheel を選択してください。そうでない場合、pip は CPU のみで動作するビルドをインストールしてしまいます。

**torch をインストールする前に cuSPARSELt は必須ですか？**
新しい wheel の場合のみ必要です。PyTorch 24.06 以降のビルドではスパース行列乗算に cuSPARSELt を呼び出すため、JetPack 6.2 の手順では先に 0.7.1 をインストールします。JetPack 5.1.3 での torch 2.1.0 の例では不要です。

**1 台のマシンで 2 つの torch バージョンを共存させるには？**
conda 環境を使用します。Python と torch の組み合わせごとに 1 つの環境を作成します（例：`conda create -n torch_2.0 python=3.8`）。wheel をインストールする前にその環境を有効化し、システムの Python をクリーンに保つために `auto_activate_base` はオフにしておきます。

**`torch.cuda.is_available()` が False を返します。何が問題ですか？**
その wheel は PyPI の CPU ビルドであるか、別の JetPack 向けにビルドされたものです。自分の JetPack パスに一致する NVIDIA 製 wheel を入れ直し、CUDA 対応 wheel には `nv` ビルドタグが付いていることを `torch.__version__` で確認してください。

## 関連リソース

- [reComputer に ROS 2 Humble をインストール](/ja/install_ros2_humble/)
- [Gemini 2 と YOLOv11 を組み合わせて距離を測定する](/ja/yolov11_with_depth_camera/)
- [Jetson 上で効率的なマルチタスクビジョン推論エンジンを実行する](/ja/deploy_visual_perception_engine_recomputer/)
- [reComputer J4012 製品ページ](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)
- [PyTorch for Jetson リリースノート](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform-release-notes/pytorch-jetson-rel.html)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
