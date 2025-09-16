---
description: このwikiでは、NVIDIA Jetson Thorの使い方を紹介し、Thor上でAIとロボティクスプロジェクトをデプロイするためのワークフロー例を提供します。詳細なステップバイステップの手順とリファレンスドキュメントも提供されています。
title: LeRobot SO-101 Arm用のIsaac GR00T N1.5のファインチューニングとJetson Thorへのデプロイ

keywords:
- Thor
- Robotics
- Seeed
image: https://files.seeedstudio.com/wiki/other/cover1.png
slug: /ja/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor
last_update:
  date: 2025-9-11
  author: AI&Robotics Group
---

# LeRobot SO-101 Arm用のGR00T N1.5のファインチューニングとJetson AGX Thorへのデプロイ

## はじめに

このwikiでは、**LeRobot SO-101 arm**用の**NVIDIA Isaac GR00T N1.5**の**ファインチューニング**と**NVIDIA Jetson Thor**へのデプロイ方法について説明します。以下の内容を含みます：

- **LeRobot SO-101**と**Jetson AGX Thor**のハードウェア準備
- Jetson Thor上での**GR00T N1.5**のソフトウェア環境セットアップ
- **LeRobot トレーニングプラットフォーム**の使用：データ収集、データセットフォーマット、SO-101 arm用のファインチューニング
- トレーニング済みGR00T N1.5ポリシー（LeRobot + SO-101）をJetson Thorにデプロイするワークフロー例
- トラブルシューティングのヒントと一般的な落とし穴

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/other/cover1.png"/>
</div>

<p></p>

**初期設定から本格的な導入までを支援するために、詳細な手順と参考ドキュメントを提供します。**

## NVIDIA Jetson Thor Developer Kitの使い方

### Jetson Thorの概要

**NVIDIA® Jetson AGX Thor™ Developer Kit**は、物理AIとヒューマノイドロボティクスのためのパワーハウスです。NVIDIA Blackwell GPUを中心に構築され、**128 GBの高速メモリ**を含み、**40-130 W**（一般的な使用では最大130 W）の電力エンベロープ内で動作しながら、**最大2,070 FP4 TFLOPS**のAI計算能力を提供します。

Jetson AGX Thor Developer KitはSeeed Studioから入手できます：[Seeed – NVIDIA Jetson AGX Thor™ Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html)
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/other/thor-post.png"/>
</div>

ボックスに含まれるハードウェアアイテムは、Thorユニット1台と電源アダプターです：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/other/physical.jpeg"/>
</div>

### Thorシステムイメージのフラッシュ

**2025年9月10日**現在、Thorで利用可能な最新のシステムイメージバージョンは**38.2**です。Thorのシステムを再フラッシュする必要がある場合は、このセクションの手順に従ってください。
フラッシュに必要なアイテム：

- 25 GB以上の利用可能なディスク容量を持つホストデバイス（Ubuntu または Windows OS対応）
- 最低16 GBの容量を持つUSBドライブ
- モニターとDP/HDMIディスプレイケーブル
- 240 W以上を供給できる電源環境
- USBインターフェース付きキーボード

まず、NVIDIA公式ウェブサイトからThor用のISO形式システムイメージをダウンロードします。ダウンロードページにアクセスするには[こちら](https://developer.nvidia.com/embedded/jetpack/downloads)をクリックしてください：

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/other/38.2-iso.png"/>
</div>

ホストマシンにBalena Etcherをインストールします。インストーラーをダウンロードするには[こちら](https://etcher.balena.io/#:~:text=DOWNLOAD-,Download%20Etcher,-ASSET)をクリックし、ホストオペレーティングシステムに基づいて適切なバージョンを選択してください：
<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/other/balena.jpg"/>
</div>

ISOイメージファイルをダウンロードし、**Balena Etcher**のインストールが正常に完了したら、USBドライブをホストマシンに挿入します。次に、**Balena Etcher**を起動してThorフラッシュ用のブータブルUSBドライブを作成します：
:::danger
このプロセスはUSBドライブをフォーマットします。事前に重要なデータをバックアップしてください。
:::

ローカルストレージからダウンロードしたISOイメージファイルを選択し、次にターゲットデバイス（つまり、USBドライブ）を選択します。
<mark>ターゲットデバイス名とマウントディレクトリを慎重に確認してください！</mark> `Flash!`をクリックし、プロセスが完了するまで待ちます。完了すると、ThorにシステムをフラッシュするためのUSBドライブの準備が整います：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/step1.png" width="300"/>
  <img src="https://files.seeedstudio.com/wiki/other/target.png" width="300"/>
  <img src="https://files.seeedstudio.com/wiki/other/flash-U.png" width="300"/>
</div>

<p></p>

次に、準備したUSBドライブ、キーボード、ディスプレイケーブル（DP/HDMI）、電源（Type-C）をThorボードに挿入してフラッシュプロセスを開始します。
<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/other/flash-insert.jpg"/>
</div>

<p></p>

Thorの電源を入れ、ブートインターフェースに入ります。`Boot Manager`を選択し、次にThorに挿入されたUSBドライブ（USBドライブ名に基づく）を選択します。Escを押して前のメニューに戻り、`Continue`を選択します：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/BootM.png" width="300"/>
  <img src="https://files.seeedstudio.com/wiki/other/selectU.png" width="300"/>
  <img src="https://files.seeedstudio.com/wiki/other/continue.png" width="300"/>
</div>

<p></p>

短い黒い画面の後、以下のインターフェースが表示されます。`Jetson Thor options`を選択してEnterを押します。次に、オプション
`Flash Jetson AGX Thor Developer Kit on NVMe 0.2.0-r38.2`を選択してシステムイメージをThorのNVMeソリッドステートドライブにフラッシュします：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/option.png" width="450"/>
  <img src="https://files.seeedstudio.com/wiki/other/flash-M2.png" width="450"/>
</div>

画面に大量のログ情報が表示されます。約**15分**待ちます。この段階が完了すると、デバイスは自動的に再起動し、次のインターフェースに進みます。**Update Progress**バーが100%に達するまで待ちます。これはフラッシュプロセスが正常に完了したことを示します：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/option.png" width="450"/>
  <img src="https://files.seeedstudio.com/wiki/other/flash-M2.png" width="450"/>
</div>

フラッシュ後、初期システム設定を進めることができます：
<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/other/ubuntu24.png"/>
</div>

:::warning
このシステムイメージには、CUDA、TensorRT、またはJetPackの他のSDKコンポーネントは含まれていません。
:::

## Thor上での基本開発環境セットアップ

このセクションでは、開発目的でThor上によく使用されるソフトウェア依存関係をインストールする方法の例を提供します。これらの依存関係は、後続の開発を促進することを目的としています。

リストされた依存関係は**参考のみ**であることに注意してください。個々のプロジェクト要件に応じて追加のパッケージをインストールしてください。

### 必須開発依存関係のインストール

**JetPack SDKインストール**
<p></p>
ターミナルを開き、以下のコマンドを実行します。短時間待つと、CUDA、TensorRT、その他のSDKコンポーネントがインストールされます：
```bash
sudo apt update
sudo apt install nvidia-jetpack
```

**ブラウザインストール**

FirefoxはUbuntu 24.04で安定して動作することがテストされ、確認されています：

```bash
sudo apt update
sudo apt install firefox
```

**Jtopインストール**

jtopをインストールするには、以下の手順を参照してください。

```bash
sudo apt update
sudo apt install python3
sudo apt install python3-pip

sudo pip3 install -U pip
sudo pip3 install jetson-stats
```

**Minicondaインストール**

Minicondaは開発環境を分離するために使用されます。minicondaをインストールするには、以下の手順を参照してください：

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh
source ~/.bashrc
conda --version
```

**GPU版PyTorchのインストール**

Thor上でGPU版PyTorchをソースからコンパイルすると、互換性の問題が発生する可能性があります。便宜上、開発者がThor上でPyTorch対応の開発環境を迅速にセットアップできるよう、プリコンパイル済みの`.whl`ファイルを提供します。

ここでは、Thor上でPyTorch 2.9をインストールするためのプリコンパイル済みwheelファイルを提供します。このファイルはPython `3.10 + CUDA 13`環境でコンパイルされました。
`.whl`ファイルをダウンロードするには[**こちら**](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVe_c8F4DR9CluC049HCYoMBP3UXta1kqLEDTvkcYU6s-A?e=d9VEzN)をクリックしてください。

thor用の他のプリコンパイル済み依存関係`.whl`ファイルは[**こちら**](https://pypi.jetson-ai-lab.io/sbsa/cu130)で見つけることができます。

期待されるwheelファイルが利用できない場合、開発者は開発環境のセットアップを完了するために必要な依存関係を自分でビルドする必要があります。

### **追加依存関係のインストール**

このドキュメントでは、開発者がJetson AGX Thor開発環境に迅速に適応できるよう、参考用のDockerイメージを提供します。
<mark>このイメージは参考のみであり、開発者は特定のニーズに基づいて使用するかどうかを自由に選択できます。</mark>

:::note
イメージサイズが40 GBを超えるため、サーバーからのダウンロードは比較的遅くなります。
:::

このDockerイメージはGR00T N1.5推論を安定して実行できます。イメージ内の`pip list`コマンドの出力は以下の通りです：

<details>
<summary> pip.list </summary>

```bash
Package                   Version           Location         Installer                              Editable project location
------------------------- ----------------- ---------------- -------------------------------------- -------------------------
absl-py                   2.3.1                              /opt/venv/lib/python3.12/site-packages pip
accelerate                1.2.1                              /opt/venv/lib/python3.12/site-packages pip
aiohappyeyeballs          2.6.1                              /opt/venv/lib/python3.12/site-packages pip
aiohttp                   3.12.15                            /opt/venv/lib/python3.12/site-packages pip
aiosignal                 1.4.0                              /opt/venv/lib/python3.12/site-packages pip
albucore                  0.0.17                             /opt/venv/lib/python3.12/site-packages pip
albumentations            1.4.18                             /opt/venv/lib/python3.12/site-packages pip
annotated-types           0.7.0                              /opt/venv/lib/python3.12/site-packages pip
antlr4-python3-runtime    4.9.3                              /opt/venv/lib/python3.12/site-packages pip
anyio                     4.10.0                             /opt/venv/lib/python3.12/site-packages pip
argon2-cffi               25.1.0                             /opt/venv/lib/python3.12/site-packages pip
argon2-cffi-bindings      25.1.0                             /opt/venv/lib/python3.12/site-packages pip
arrow                     1.3.0                              /opt/venv/lib/python3.12/site-packages pip
asttokens                 3.0.0                              /opt/venv/lib/python3.12/site-packages pip
astunparse                1.6.3                              /opt/venv/lib/python3.12/site-packages pip
async-lru                 2.0.5                              /opt/venv/lib/python3.12/site-packages pip
attrs                     23.2.0                             /usr/lib/python3/dist-packages         debian
av                        12.3.0                             /opt/venv/lib/python3.12/site-packages pip
babel                     2.17.0                             /opt/venv/lib/python3.12/site-packages pip
beautifulsoup4            4.13.5                             /opt/venv/lib/python3.12/site-packages pip
bleach                    6.2.0                              /opt/venv/lib/python3.12/site-packages pip
blessings                 1.7                                /opt/venv/lib/python3.12/site-packages pip
blinker                   1.9.0                              /opt/venv/lib/python3.12/site-packages pip
certifi                   2025.8.3                           /opt/venv/lib/python3.12/site-packages pip
cffi                      2.0.0                              /opt/venv/lib/python3.12/site-packages pip
charset-normalizer        3.4.3                              /opt/venv/lib/python3.12/site-packages pip
click                     8.2.1                              /opt/venv/lib/python3.12/site-packages pip
cloudpickle               3.1.1                              /opt/venv/lib/python3.12/site-packages pip
cmake                     3.31.6                             /opt/venv/lib/python3.12/site-packages pip
comm                      0.2.3                              /opt/venv/lib/python3.12/site-packages pip
contourpy                 1.3.3                              /opt/venv/lib/python3.12/site-packages pip
cramjam                   2.11.0                             /opt/venv/lib/python3.12/site-packages pip
cryptography              41.0.7                             /usr/lib/python3/dist-packages         debian
cuda-bindings             13.0.0                             /opt/venv/lib/python3.12/site-packages pip
cuda-core                 0.3.2                              /opt/venv/lib/python3.12/site-packages pip
cuda-pathfinder           1.2.2                              /opt/venv/lib/python3.12/site-packages pip
cycler                    0.12.1                             /opt/venv/lib/python3.12/site-packages pip
Cython                    3.1.3                              /opt/venv/lib/python3.12/site-packages pip
datasets                  4.0.0                              /opt/venv/lib/python3.12/site-packages pip
dbus-python               1.3.2                              /usr/lib/python3/dist-packages
debugpy                   1.8.16                             /opt/venv/lib/python3.12/site-packages pip
decorator                 5.2.1                              /opt/venv/lib/python3.12/site-packages pip
decord                    0.6.0                              /opt/venv/lib/python3.12/site-packages pip
deepdiff                  8.6.1                              /opt/venv/lib/python3.12/site-packages pip
defusedxml                0.7.1                              /opt/venv/lib/python3.12/site-packages pip
devscripts                2.23.7                             /usr/lib/python3/dist-packages
diffusers                 0.36.0.dev0                        /opt/venv/lib/python3.12/site-packages pip
dill                      0.3.8                              /opt/venv/lib/python3.12/site-packages pip
distro                    1.9.0                              /usr/lib/python3/dist-packages         debian
dm-tree                   0.1.8                              /opt/venv/lib/python3.12/site-packages pip
docker-pycreds            0.4.0                              /opt/venv/lib/python3.12/site-packages pip
docstring_parser          0.17.0                             /opt/venv/lib/python3.12/site-packages pip
docutils                  0.22                               /opt/venv/lib/python3.12/site-packages pip
draccus                   0.11.5                             /opt/venv/lib/python3.12/site-packages pip
einops                    0.8.1                              /opt/venv/lib/python3.12/site-packages pip
eval_type_backport        0.2.2                              /opt/venv/lib/python3.12/site-packages pip
evdev                     1.9.2                              /opt/venv/lib/python3.12/site-packages pip
executing                 2.2.1                              /opt/venv/lib/python3.12/site-packages pip
Farama-Notifications      0.0.4                              /opt/venv/lib/python3.12/site-packages pip
fastjsonschema            2.21.2                             /opt/venv/lib/python3.12/site-packages pip
fastparquet               2024.11.0                          /opt/venv/lib/python3.12/site-packages pip
feetech-servo-sdk         1.0.0                              /opt/venv/lib/python3.12/site-packages pip
filelock                  3.19.1                             /opt/venv/lib/python3.12/site-packages pip
flash_attn                2.8.4                              /opt/venv/lib/python3.12/site-packages pip
Flask                     3.1.2                              /opt/venv/lib/python3.12/site-packages pip
flatbuffers               25.2.10                            /opt/venv/lib/python3.12/site-packages pip
fonttools                 4.59.2                             /opt/venv/lib/python3.12/site-packages pip
fqdn                      1.5.1                              /opt/venv/lib/python3.12/site-packages pip
frozenlist                1.7.0                              /opt/venv/lib/python3.12/site-packages pip
fsspec                    2025.3.0                           /opt/venv/lib/python3.12/site-packages pip
gast                      0.6.0                              /opt/venv/lib/python3.12/site-packages pip
gitdb                     4.0.12                             /opt/venv/lib/python3.12/site-packages pip
GitPython                 3.1.45                             /opt/venv/lib/python3.12/site-packages pip
google-pasta              0.2.0                              /opt/venv/lib/python3.12/site-packages pip
grpcio                    1.74.0                             /opt/venv/lib/python3.12/site-packages pip
gymnasium                 1.0.0                              /opt/venv/lib/python3.12/site-packages pip
h11                       0.16.0                             /opt/venv/lib/python3.12/site-packages pip
h5py                      3.12.1                             /opt/venv/lib/python3.12/site-packages pip
hf-xet                    1.1.9                              /opt/venv/lib/python3.12/site-packages pip
httpcore                  1.0.9                              /opt/venv/lib/python3.12/site-packages pip
httplib2                  0.20.4                             /usr/lib/python3/dist-packages
httpx                     0.28.1                             /opt/venv/lib/python3.12/site-packages pip
huggingface-hub           0.34.4                             /opt/venv/lib/python3.12/site-packages pip
hydra-core                1.3.2                              /opt/venv/lib/python3.12/site-packages pip
id                        1.5.0                              /opt/venv/lib/python3.12/site-packages pip
idna                      3.10                               /opt/venv/lib/python3.12/site-packages pip
imageio                   2.34.2                             /opt/venv/lib/python3.12/site-packages pip
importlib_metadata        8.7.0                              /opt/venv/lib/python3.12/site-packages pip
iniconfig                 2.1.0                              /opt/venv/lib/python3.12/site-packages pip
inquirerpy                0.3.4                              /opt/venv/lib/python3.12/site-packages pip
iopath                    0.1.9                              /opt/venv/lib/python3.12/site-packages pip
ipykernel                 6.30.1                             /opt/venv/lib/python3.12/site-packages pip
ipython                   9.5.0                              /opt/venv/lib/python3.12/site-packages pip
ipython_pygments_lexers   1.1.1                              /opt/venv/lib/python3.12/site-packages pip
ipywidgets                8.1.7                              /opt/venv/lib/python3.12/site-packages pip
isoduration               20.11.0                            /opt/venv/lib/python3.12/site-packages pip
itsdangerous              2.2.0                              /opt/venv/lib/python3.12/site-packages pip
jaraco.classes            3.4.0                              /opt/venv/lib/python3.12/site-packages pip
jaraco.context            6.0.1                              /opt/venv/lib/python3.12/site-packages pip
jaraco.functools          4.3.0                              /opt/venv/lib/python3.12/site-packages pip
jedi                      0.19.2                             /opt/venv/lib/python3.12/site-packages pip
jeepney                   0.9.0                              /opt/venv/lib/python3.12/site-packages pip
Jinja2                    3.1.6                              /opt/venv/lib/python3.12/site-packages pip
json5                     0.12.1                             /opt/venv/lib/python3.12/site-packages pip
jsonlines                 4.0.0                              /opt/venv/lib/python3.12/site-packages pip
jsonpointer               3.0.0                              /opt/venv/lib/python3.12/site-packages pip
jsonschema                4.25.1                             /opt/venv/lib/python3.12/site-packages pip
jsonschema-specifications 2025.9.1                           /opt/venv/lib/python3.12/site-packages pip
jupyter                   1.1.1                              /opt/venv/lib/python3.12/site-packages pip
jupyter_client            8.6.3                              /opt/venv/lib/python3.12/site-packages pip
jupyter-console           6.6.3                              /opt/venv/lib/python3.12/site-packages pip
jupyter_core              5.8.1                              /opt/venv/lib/python3.12/site-packages pip
jupyter-events            0.12.0                             /opt/venv/lib/python3.12/site-packages pip
jupyter-lsp               2.3.0                              /opt/venv/lib/python3.12/site-packages pip
jupyter_server            2.17.0                             /opt/venv/lib/python3.12/site-packages pip
jupyter_server_terminals  0.5.3                              /opt/venv/lib/python3.12/site-packages pip
jupyterlab                4.4.7                              /opt/venv/lib/python3.12/site-packages pip
jupyterlab_myst           2.4.2                              /opt/venv/lib/python3.12/site-packages pip
jupyterlab_pygments       0.3.0                              /opt/venv/lib/python3.12/site-packages pip
jupyterlab_server         2.27.3                             /opt/venv/lib/python3.12/site-packages pip
jupyterlab_widgets        3.0.15                             /opt/venv/lib/python3.12/site-packages pip
keras                     3.11.3                             /opt/venv/lib/python3.12/site-packages pip
keyring                   25.6.0                             /opt/venv/lib/python3.12/site-packages pip
kiwisolver                1.4.9                              /opt/venv/lib/python3.12/site-packages pip
kornia                    0.7.4                              /opt/venv/lib/python3.12/site-packages pip
kornia_rs                 0.1.9                              /opt/venv/lib/python3.12/site-packages pip
lark                      1.2.2                              /opt/venv/lib/python3.12/site-packages pip
launchpadlib              1.11.0                             /usr/lib/python3/dist-packages
lazr.restfulclient        0.14.6                             /usr/lib/python3/dist-packages
lazr.uri                  1.0.6                              /usr/lib/python3/dist-packages
lazy_loader               0.4                                /opt/venv/lib/python3.12/site-packages pip
lerobot                   0.3.4             /opt/lerobot     /opt/venv/lib/python3.12/site-packages pip
libclang                  18.1.1                             /opt/venv/lib/python3.12/site-packages pip
llvmlite                  0.44.0                             /opt/venv/lib/python3.12/site-packages pip
lockfile                  0.12.2                             /opt/venv/lib/python3.12/site-packages pip
Mako                      1.3.10                             /opt/venv/lib/python3.12/site-packages pip
Markdown                  3.9                                /opt/venv/lib/python3.12/site-packages pip
markdown-it-py            4.0.0                              /opt/venv/lib/python3.12/site-packages pip
MarkupSafe                3.0.2                              /opt/venv/lib/python3.12/site-packages pip
matplotlib                3.10.0                             /opt/venv/lib/python3.12/site-packages pip
matplotlib-inline         0.1.7                              /opt/venv/lib/python3.12/site-packages pip
mdurl                     0.1.2                              /opt/venv/lib/python3.12/site-packages pip
mergedeep                 1.3.4                              /opt/venv/lib/python3.12/site-packages pip
mistune                   3.1.4                              /opt/venv/lib/python3.12/site-packages pip
ml_dtypes                 0.5.3                              /opt/venv/lib/python3.12/site-packages pip
more-itertools            10.8.0                             /opt/venv/lib/python3.12/site-packages pip
mpmath                    1.3.0                              /opt/venv/lib/python3.12/site-packages pip
msgpack                   1.1.1                              /opt/venv/lib/python3.12/site-packages pip
multidict                 6.6.4                              /opt/venv/lib/python3.12/site-packages pip
multiprocess              0.70.16                            /opt/venv/lib/python3.12/site-packages pip
mypy_extensions           1.1.0                              /opt/venv/lib/python3.12/site-packages pip
namex                     0.1.0                              /opt/venv/lib/python3.12/site-packages pip
nbclient                  0.10.2                             /opt/venv/lib/python3.12/site-packages pip
nbconvert                 7.16.6                             /opt/venv/lib/python3.12/site-packages pip
nbformat                  5.10.4                             /opt/venv/lib/python3.12/site-packages pip
nest-asyncio              1.6.0                              /opt/venv/lib/python3.12/site-packages pip
networkx                  3.5                                /opt/venv/lib/python3.12/site-packages pip
nh3                       0.3.0                              /opt/venv/lib/python3.12/site-packages pip
ninja                     1.13.0                             /opt/venv/lib/python3.12/site-packages pip
notebook                  7.4.5                              /opt/venv/lib/python3.12/site-packages pip
notebook_shim             0.2.4                              /opt/venv/lib/python3.12/site-packages pip
numba                     0.61.2                             /opt/venv/lib/python3.12/site-packages pip
numpy                     2.3.3                              /opt/venv/lib/python3.12/site-packages pip
numpydantic               1.6.7                              /opt/venv/lib/python3.12/site-packages pip
nvtx                      0.2.13                             /opt/venv/lib/python3.12/site-packages pip
oauthlib                  3.2.2                              /usr/lib/python3/dist-packages
omegaconf                 2.3.0                              /opt/venv/lib/python3.12/site-packages pip
onnx                      1.17.0                             /opt/venv/lib/python3.12/site-packages pip
opencv-contrib-python     4.13.0                             /opt/venv/lib/python3.12/site-packages pip
opencv-python             4.11.0.86                          /opt/venv/lib/python3.12/site-packages pip
opencv-python-headless    4.11.0.86                          /opt/venv/lib/python3.12/site-packages pip
opt_einsum                3.4.0                              /opt/venv/lib/python3.12/site-packages pip
optimum                   1.27.0                             /opt/venv/lib/python3.12/site-packages pip
optree                    0.17.0                             /opt/venv/lib/python3.12/site-packages pip
orderly-set               5.5.0                              /opt/venv/lib/python3.12/site-packages pip
packaging                 25.0                               /opt/venv/lib/python3.12/site-packages pip
pandas                    2.2.3                              /opt/venv/lib/python3.12/site-packages pip
pandocfilters             1.5.1                              /opt/venv/lib/python3.12/site-packages pip
parso                     0.8.5                              /opt/venv/lib/python3.12/site-packages pip
peft                      0.17.0                             /opt/venv/lib/python3.12/site-packages pip
pettingzoo                1.25.0                             /opt/venv/lib/python3.12/site-packages pip
pexpect                   4.9.0                              /opt/venv/lib/python3.12/site-packages pip
pfzy                      0.3.4                              /opt/venv/lib/python3.12/site-packages pip
pid                       3.0.4                              /opt/venv/lib/python3.12/site-packages pip
pillow                    11.3.0                             /opt/venv/lib/python3.12/site-packages pip
pip                       25.2                               /opt/venv/lib/python3.12/site-packages pip
pkginfo                   1.12.1.2                           /opt/venv/lib/python3.12/site-packages pip
platformdirs              4.4.0                              /opt/venv/lib/python3.12/site-packages pip
pluggy                    1.6.0                              /opt/venv/lib/python3.12/site-packages pip
portalocker               3.2.0                              /opt/venv/lib/python3.12/site-packages pip
prometheus_client         0.22.1                             /opt/venv/lib/python3.12/site-packages pip
prompt_toolkit            3.0.52                             /opt/venv/lib/python3.12/site-packages pip
propcache                 0.3.2                              /opt/venv/lib/python3.12/site-packages pip
protobuf                  6.32.0                             /opt/venv/lib/python3.12/site-packages pip
psutil                    7.0.0                              /opt/venv/lib/python3.12/site-packages pip
ptyprocess                0.7.0                              /opt/venv/lib/python3.12/site-packages pip
pure_eval                 0.2.3                              /opt/venv/lib/python3.12/site-packages pip
pyarrow                   21.0.0                             /opt/venv/lib/python3.12/site-packages pip
pycparser                 2.23                               /opt/venv/lib/python3.12/site-packages pip
pycuda                    2025.1.1                           /opt/venv/lib/python3.12/site-packages pip
pydantic                  2.10.6                             /opt/venv/lib/python3.12/site-packages pip
pydantic_core             2.27.2                             /opt/venv/lib/python3.12/site-packages pip
Pygments                  2.19.2                             /opt/venv/lib/python3.12/site-packages pip
PyGObject                 3.48.2                             /usr/lib/python3/dist-packages
PyJWT                     2.7.0                              /usr/lib/python3/dist-packages         debian
pynput                    1.8.1                              /opt/venv/lib/python3.12/site-packages pip
pyparsing                 3.1.1                              /usr/lib/python3/dist-packages         debian
pyrsistent                0.20.0                             /usr/lib/python3/dist-packages
pyserial                  3.5                                /opt/venv/lib/python3.12/site-packages pip
pytest                    8.4.2                              /opt/venv/lib/python3.12/site-packages pip
python-apt                2.7.7+ubuntu5                      /usr/lib/python3/dist-packages
python-daemon             3.1.2                              /opt/venv/lib/python3.12/site-packages pip
python-dateutil           2.9.0.post0                        /opt/venv/lib/python3.12/site-packages pip
python-json-logger        3.3.0                              /opt/venv/lib/python3.12/site-packages pip
python-xlib               0.33                               /opt/venv/lib/python3.12/site-packages pip
pytools                   2025.2.4                           /opt/venv/lib/python3.12/site-packages pip
pytorch3d                 0.7.8                              /opt/venv/lib/python3.12/site-packages pip
pytz                      2025.2                             /opt/venv/lib/python3.12/site-packages pip
PyYAML                    6.0.2                              /opt/venv/lib/python3.12/site-packages pip
pyyaml-include            1.4.1                              /opt/venv/lib/python3.12/site-packages pip
pyzmq                     27.1.0                             /opt/venv/lib/python3.12/site-packages pip
ray                       2.40.0                             /opt/venv/lib/python3.12/site-packages pip
readme_renderer           44.0                               /opt/venv/lib/python3.12/site-packages pip
referencing               0.36.2                             /opt/venv/lib/python3.12/site-packages pip
regex                     2025.9.1                           /opt/venv/lib/python3.12/site-packages pip
requests                  2.32.3                             /opt/venv/lib/python3.12/site-packages pip
requests-toolbelt         1.0.0                              /opt/venv/lib/python3.12/site-packages pip
rerun-sdk                 0.24.1                             /opt/venv/lib/python3.12/site-packages pip
rfc3339-validator         0.1.4                              /opt/venv/lib/python3.12/site-packages pip
rfc3986                   2.0.0                              /opt/venv/lib/python3.12/site-packages pip
rfc3986-validator         0.1.1                              /opt/venv/lib/python3.12/site-packages pip
rfc3987-syntax            1.1.0                              /opt/venv/lib/python3.12/site-packages pip
rich                      14.1.0                             /opt/venv/lib/python3.12/site-packages pip
rpds-py                   0.27.1                             /opt/venv/lib/python3.12/site-packages pip
safetensors               0.6.2                              /opt/venv/lib/python3.12/site-packages pip
scikit-build              0.18.1                             /opt/venv/lib/python3.12/site-packages pip
scikit-image              0.25.2                             /opt/venv/lib/python3.12/site-packages pip
scipy                     1.16.1                             /opt/venv/lib/python3.12/site-packages pip
SecretStorage             3.4.0                              /opt/venv/lib/python3.12/site-packages pip
semantic-version          2.10.0                             /opt/venv/lib/python3.12/site-packages pip
Send2Trash                1.8.3                              /opt/venv/lib/python3.12/site-packages pip
sentencepiece             0.2.1                              /opt/venv/lib/python3.12/site-packages pip
sentry-sdk                2.37.1                             /opt/venv/lib/python3.12/site-packages pip
service                   0.6.0                              /opt/venv/lib/python3.12/site-packages pip
setproctitle              1.3.7                              /opt/venv/lib/python3.12/site-packages pip
setuptools                80.9.0                             /opt/venv/lib/python3.12/site-packages pip
setuptools-rust           1.12.0                             /opt/venv/lib/python3.12/site-packages pip
shtab                     1.7.2                              /opt/venv/lib/python3.12/site-packages pip
siphash24                 1.8                                /opt/venv/lib/python3.12/site-packages pip
six                       1.16.0                             /usr/lib/python3/dist-packages
smmap                     5.0.2                              /opt/venv/lib/python3.12/site-packages pip
sniffio                   1.3.1                              /opt/venv/lib/python3.12/site-packages pip
soupsieve                 2.8                                /opt/venv/lib/python3.12/site-packages pip
stack-data                0.6.3                              /opt/venv/lib/python3.12/site-packages pip
sympy                     1.14.0                             /opt/venv/lib/python3.12/site-packages pip
tensorboard               2.20.0                             /opt/venv/lib/python3.12/site-packages pip
tensorboard-data-server   0.7.2                              /opt/venv/lib/python3.12/site-packages pip
tensorflow                2.20.0                             /opt/venv/lib/python3.12/site-packages pip
tensorrt                  10.13.2.6                          /opt/venv/lib/python3.12/site-packages pip
termcolor                 3.1.0                              /opt/venv/lib/python3.12/site-packages pip
terminado                 0.18.1                             /opt/venv/lib/python3.12/site-packages pip
tf_keras                  2.20.1                             /opt/venv/lib/python3.12/site-packages pip
tianshou                  0.5.1                              /opt/venv/lib/python3.12/site-packages pip
tifffile                  2025.9.9                           /opt/venv/lib/python3.12/site-packages pip
timm                      1.0.14                             /opt/venv/lib/python3.12/site-packages pip
tinycss2                  1.4.0                              /opt/venv/lib/python3.12/site-packages pip
tokenizers                0.21.4                             /opt/venv/lib/python3.12/site-packages pip
toml                      0.10.2                             /opt/venv/lib/python3.12/site-packages pip
torch                     2.9.0                              /opt/venv/lib/python3.12/site-packages pip
torchvision               0.24.0                             /opt/venv/lib/python3.12/site-packages pip
tornado                   6.5.2                              /opt/venv/lib/python3.12/site-packages pip
tqdm                      4.67.1                             /opt/venv/lib/python3.12/site-packages pip
traitlets                 5.14.3                             /opt/venv/lib/python3.12/site-packages pip
transformers              4.51.3                             /opt/venv/lib/python3.12/site-packages pip
triton                    3.5.0+gite3b8f77a                  /opt/venv/lib/python3.12/site-packages pip
twine                     6.2.0                              /opt/venv/lib/python3.12/site-packages pip
typeguard                 4.4.2                              /opt/venv/lib/python3.12/site-packages pip
types-python-dateutil     2.9.0.20250822                     /opt/venv/lib/python3.12/site-packages pip
typing_extensions         4.12.2                             /opt/venv/lib/python3.12/site-packages pip
typing-inspect            0.9.0                              /opt/venv/lib/python3.12/site-packages pip
tyro                      0.9.17                             /opt/venv/lib/python3.12/site-packages pip
tzdata                    2025.2                             /opt/venv/lib/python3.12/site-packages pip
uri-template              1.3.0                              /opt/venv/lib/python3.12/site-packages pip
urllib3                   2.5.0                              /opt/venv/lib/python3.12/site-packages pip
uv                        0.8.16                             /opt/venv/lib/python3.12/site-packages pip
wadllib                   1.3.6                              /usr/lib/python3/dist-packages
wandb                     0.18.0                             /opt/venv/lib/python3.12/site-packages pip
wcwidth                   0.2.13                             /opt/venv/lib/python3.12/site-packages pip
webcolors                 24.11.1                            /opt/venv/lib/python3.12/site-packages pip
webencodings              0.5.1                              /opt/venv/lib/python3.12/site-packages pip
websocket-client          1.8.0                              /opt/venv/lib/python3.12/site-packages pip
Werkzeug                  3.1.3                              /opt/venv/lib/python3.12/site-packages pip
wheel                     0.45.1                             /opt/venv/lib/python3.12/site-packages pip
widgetsnbextension        4.0.14                             /opt/venv/lib/python3.12/site-packages pip
wrapt                     1.17.3                             /opt/venv/lib/python3.12/site-packages pip
xxhash                    3.5.0                              /opt/venv/lib/python3.12/site-packages pip
yarl                      1.20.1                             /opt/venv/lib/python3.12/site-packages pip
zipp                      3.23.0                             /opt/venv/lib/python3.12/site-packages pip
```

</details>

イメージはDocker Hubから直接プルでき、`PyTorch`、`TensorRT`、`FlashAttention`などの一般的に使用される依存関係が含まれています：

```bash
docker pull johnnync/lerobot:r38.2.aarch64-cu130-24.04
```

ThorでDockerを実行するには、以下のコマンドを参照してください。`your_docker_img:tag`をあなたのDockerイメージ名とタグに置き換えるか、イメージIDを使用してください：

```bash
sudo docker run --rm -it \
  --network=host \
  -e NVIDIA_DRIVER_CAPABILITIES=compute,utility,video,graphics \
  --runtime nvidia \
  --privileged \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  -v /etc/X11:/etc/X11 \
  --device /dev/nvhost-vic \
  -v /dev:/dev \
  your_docker_img:tag
```

## SO-ARMを使用したデータ収集

lerobotロボットアームのデータ収集は、PCまたはJetsonデバイス上で直接実行できます。

- 方法1：Jetsonを使用してデータを収集
- 方法2：Ubuntu PCを使用してデータを収集

データ収集手順は、両方の方法で基本的に同じです。

:::warning
**Jetsonは同じ帯域幅要件を持つ2つのUSBカメラを同時にストリーミングできない場合があります。2つのUSBカメラを接続する場合は、異なるUSBハブチップに接続する必要があります！**
:::

Thorで2つのUSBカメラを同時にストリーミングするには、1つのカメラをUSB-Aポートに接続した後、**USB Type-Cポート経由で接続された外部USBハブ**も使用する必要があります。これにより、2番目のUSBカメラがThor内の異なるUSBハブコントローラーにマウントされることが保証されます。
 互換性のあるUSB Type-Cハブの例を以下に示します：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/hub.png" height="400"/>
</div>

### Lerobot環境セットアップ

**Minicondaインストール**

```bash
#Jetson 
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc


#PC 
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
conda init --all
```

**依存関係のインストール**

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot

# Use the latest version maintained by Seeed
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
conda install ffmpeg -c conda-forge
```

**lerobotのインストール**

:::note
**インストールコマンドを実行する前に、GPU対応版のPyTorchとTorchVisionが既にインストールされていることを確認してください！**
:::

インストールされたPyTorchがGPUサポートを使用していることを確認するには、ターミナルで以下を入力してください：

```bash
import torch
print(torch.cuda.is_available())
```

Jetsonデバイスでデータを収集する予定の場合は、PyTorchのインストールについて前のセクションを参照するか、この[記事](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)を確認してください

PyTorchが正しくインストールされていることが確認されたら、ターミナルで以下を実行してください：

```bash
cd ~/lerobot && pip install -e ".[feetech]"
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

### サーボキャリブレーション

サーボキャリブレーションプロセスについては、この文書では詳しく説明していません。詳細については、以下の記事を参照してください：

[click me](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#%E6%A0%A1%E5%87%86%E8%88%B5%E6%9C%BA%E5%B9%B6%E7%BB%84%E8%A3%85%E6%9C%BA%E6%A2%B0%E8%87%82)

### SO-ARMキャリブレーション

まず、接続が正常に動作し、ロボットアームに対応するポートが正しく認識されていることを確認してください。

```bash
python -m lerobot.find_port

OUTPUT：

Finding all available ports for the MotorBus.
['/dev/ttyACM0', '/dev/ttyACM1']
Remove the usb cable from your MotorsBus and press Enter when done.

[...Disconnect corresponding leader or follower arm and press Enter...]

The port of this MotorsBus is /dev/ttyACM0
Reconnect the USB cable.
```

リーダーアームのポートは`/dev/ttyACM0`である可能性が高いです。フォロワーアームのポートは`/dev/ttyACM1`である可能性が高いです

:::note
**ロボットアームをキャリブレーションする際は、USBカメラを接続しないでください。ポートの競合や不正なポート割り当てが発生する可能性があります。**
:::

**キャリブレーションスクリプトを実行した後、ロボットアームの各関節を手動で動かして、完全な可動域に到達することを確認してください！これを行わないと、テレオペレーション中にリーダーアームとフォロワーアームのポーズが一致しない可能性があります。**

```bash
# Grant permission to access the serial ports
sudo chmod 666 /dev/ttyACM* # This needs to be done each time the USB device is replugged

# Calibrate the follower arm
python -m lerobot.calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm

# Calibrate the follower arm
python -m lerobot.calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm
```

リーダーアームとフォロワーアームの両方がキャリブレーションされたら、テレオペレーションテストスクリプトを実行してください：

```bash
python -m lerobot.teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm
```

リーダーアームを使用してフォロワーアームをテレオペレーションしてください。2つのアームが互いのポーズを正しくミラーリングすることを確認してください。そうでない場合は、再キャリブレーションが必要です。

### カメラの設置

一般的に、ロボットアームの手首関節に1つのカメラを設置し、デスクトップ表面にもう1つのカメラを設置して、アームの姿勢を適切にカバーすることが推奨されます。
<mark>具体的な設置方法はアプリケーションシナリオによって異なります。以下に示す例は参考用です。</mark>
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/camdata1.png" height="450"/>
  <img src="https://files.seeedstudio.com/wiki/other/camdata2.png" height="450"/>
</div>

以下のスクリプトを実行して、システムが接続されたUSBカメラを正しく検出し、カメラに適切にアクセスできることを確認してください：

```bash
# Use 'opencv' for standard RGB cameras. For Intel Realsense cameras, replace 'opencv' with 'realsense'.
python -m lerobot.find_cameras opencv
```

カメラが正しく検出され、アクセス可能な場合、ターミナルに以下が表示されます：

```bash
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Format: 16.0
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)
```

ターミナルには利用可能なカメラIDのリストが出力されます。プログラムがカメラに正しくアクセスできるように、IDを必ずメモしてください！

テレオペレーション中のカメラ使用をテストするには：

```bash
python -m lerobot.teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

ここで、`--robot.cameras`には正しいカメラ設定とIDが必要です。

### データ収集

SO-ARMがローカルでデータを記録する場合は、以下のコマンドラインパラメータを参照してください：

```bash
python -m lerobot.record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, front: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeed_studio/test \
    --dataset.num_episodes=20 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 
```

`--dataset.repo_id`：データセットフォルダの名前を指定

`--dataset.single_task`：タスクの説明

`--dataset.num_episodes`：収集するサンプル数

`--dataset.episode_time_s`：各記録サンプルの持続時間（秒）

`--dataset.reset_time_s`：環境をリセットする時間（秒）

:::note
**データ収集プロセスが予期せず中断された場合、`--resume=true`フラグを付けてデータ収集スクリプトを再実行することで、中断した場所から続行できます。**
:::

収集したデータをHugging Faceに同期したい場合は、記録前にHUGGINGFACE_TOKENを設定する必要があります：

```bash
hf auth login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential

# Replace ${HUGGINGFACE_TOKEN} with your actual Hugging Face access token
git config --global credential.helper store
HF_USER=$(hf auth whoami | head -n 1)
echo $HF_USER

# Record and upload the dataset to Hugging Face
python -m lerobot.record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.num_episodes=20 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=true \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 
```

:::tip
収集されたデータは `~/.cache/huggingface/lerobot` ディレクトリ下にローカルに保存されます！
:::

### 収集データの可視化

**クラウドベースデータセットの可視化**

```bash
python -m lerobot.scripts.visualize_dataset_html \
  --repo-id ${HF_USER}/so101_test \
```

**ローカルデータセットの可視化**

```bash
python -m lerobot.scripts.visualize_dataset_html \
  --repo-id seeed_studio/so101_test \
```

**記録されたエピソードの再生**

```bash
python -m lerobot.replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=${HF_USER}/so101_test \
    --dataset.episode=0
```

パラメータ `--dataset.episode=0` は、フォロワーアームで再生するエピソードを指定します。
例：このスクリプトを実行すると、フォロワーアームが `episode_0` で記録された正確なアクションを実行します。

### ポリシートレーニング

ポリシーをローカルでトレーニングする予定の場合は、以下のコマンドを参照してください：

```bash
python -m lerobot.scripts.train \
  --dataset.repo_id=seeed_studio/test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false\
  --steps=300000 
```

`--policy.type`：トレーニングするポリシータイプを指定

`--policy.push_to_hub=false\`：トレーニング済み重みをクラウド（Hugging Face Hub）にアップロードするかどうか

`--steps`：トレーニングステップ数

:::tip
以下のセクションでは、クラウドベースのトレーニングプラットフォームを紹介し、基本的な使用方法を説明します。リモートサーバーでより効率的にトレーニングを完了することを選択できます。
:::

:::note
クラウドでポリシーをトレーニングすることを選択する場合は、データセットが事前にクラウドサーバーにアップロードされているか、Hugging Face Hubからダウンロードされていることを確認してください。ただし、Hugging Face Hubから直接ダウンロードする際の潜在的なネットワーク問題のため、データセットを手動でクラウドサーバーにアップロードすることを強く推奨します。
:::

## ポリシートレーニングにNVIDIA Brevを使用

NVIDIA Brevは、人気のクラウドプラットフォーム上のNVIDIA GPUインスタンスへの合理化されたアクセス、自動環境セットアップ、柔軟なデプロイメントオプションを提供し、開発者が即座に実験を開始できるようにします。

プラットフォームアクセスURL：
[https://login.brev.nvidia.com/signin](https://login.brev.nvidia.com/signin)

プラットフォームを使用するにはアカウント登録が必要です。このセクションでは、トレーニングプラットフォームの基本的な使用方法を紹介します。

### クラウドベーストレーニングプラットフォームの有効化

**ステップバイステップの手順**

- クラウドサーバーインスタンスの作成 - ステップ1

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train0.png" width="600"/>
</div>

- クラウドサーバーインスタンスの作成 - ステップ2

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train1.png" width="600"/>
</div>

- クラウドサーバーインスタンスの作成 - ステップ3

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train2.png" width="600"/>
</div>

**WebベースJupyter Notebookの起動**：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/jnote0.png" width="600"/>
</div>
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/jnote1.png" width="600"/>
</div>

### モデルのトレーニングとサーバーからのエクスポート

**開発者はノートブックターミナル内で直接モデルをトレーニングできます。以下は、actモデルをトレーニングし、その後サーバーからエクスポートする例です。**

サーバーにCondaをインストール：

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
source ~/miniconda3/bin/activate
conda init --all
```

lerobotプロジェクトのインストール：

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
cd ~/lerobot && pip install -e ".[feetech]"
```

ACTモデルのトレーニング：

```bash
python -m lerobot.scripts.train \
  --dataset.repo_id=seeedstudio123/test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false\
  --steps=300000 
```

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train4.png" width="600"/>
</div>

:::note
サーバーでGr00tをトレーニングまたはファインチューニングしたい場合は、この[リンク](https://github.com/NVIDIA/Isaac-GR00T)を参照してください。
:::

**トレーニングが完了した後、モデルをローカルマシンにダウンロードしたい場合があります。しかし、Jupyter Notebookサイドバーは、モデルトレーニングフォルダーへの直接ナビゲーションをサポートしていません。**

解決策は：まず対象フォルダーを `.zip` または `.tar.gz` アーカイブに圧縮し、その後ノートブックインターフェースを通じてアーカイブファイルをダウンロードします。例については以下の図を参照してください。
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train5.png" width="600"/>
</div>

## ThorでのIsaac GR00T N1.5推論

Jetson AGX Thorは、強力なエッジコンピューティングおよびデプロイメントプラットフォームとして、大規模モデル推論をサポートするのに十分なリソースを提供します。このセクションでは、前述の内容に基づいて、ThorでGR00T N1.5の推論を実行する方法を説明します。

GR00T N1.5は、ロボット学習分野でNVIDIA Researchがリリースしたオープンソースベースラインシステムです。特に模倣学習と大規模モデル駆動のポリシー学習に焦点を当てた、エンボディドAIトレーニングと推論のための統一フレームワークの提供を目的としています。

### 準備

GR00T N1.5の事前トレーニング済みモデルは**Hugging Faces**を通じて利用できます。以下のリンクからダウンロードできます：

[https://huggingface.co/nvidia/GR00T-N1.5-3B/tree/main](https://huggingface.co/nvidia/GR00T-N1.5-3B/tree/main)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/gr00tD.png" width="600"/>
</div>

GR00T推論に必要なすべての依存関係は、専用のDockerイメージに事前設定されています。

以下のコマンドを使用してコンテナを開始します：

```bash
sudo docker run --rm -it \
  --network=host \
  -e NVIDIA_DRIVER_CAPABILITIES=compute,utility,video,graphics \
  --runtime nvidia \
  --privileged \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  -v /etc/X11:/etc/X11 \
  --device /dev/nvhost-vic \
  -v /dev:/dev \
  lerobot:r38.2.aarch64-cu130-24.04
```

Gr00tのソースコードをgit cloneし、インストールします：

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T.git
cd Isaac-GR00T
pip install --upgrade setuptools
pip install -e .[thor]
```

Gr00tは、lerobotフレームワークを使用して収集されたデータセットと完全に互換性があります。Gr00tモデルのファインチューニング用にデータセットを準備するには、前の「**データ収集**」セクションを参照してください。

### モデルファインチューニング

**ファインチューニングプロセスは、提供されたクラウドトレーニングプラットフォームまたはThor上のDockerコンテナ内で直接実行できます**。

事前トレーニング済みGR00Tモデルをダウンロードしておらず、カスタムバージョンを使用する予定がない場合は、以下のコマンドを使用してHugging Face重みに基づいてファインチューニングできます：

```bash
python scripts/gr00t_finetune.py \
   --dataset-path ./demo_data/so101-table-cleanup/ \
   --num-gpus 1 \
   --output-dir ./so101-checkpoints  \
   --max-steps 10000 \
   --data-config so100_dualcam \
   --video-backend torchvision_av
```

このスクリプトは、Hugging Faceから事前トレーニング済みGR00Tモデルを自動的にダウンロードし、ファインチューニングプロセスを開始します。

ローカルに保存された事前トレーニング済みGR00Tモデルを使用したい場合は、以下のようにコマンドを変更します：

```bash
python scripts/gr00t_finetune.py \
   --dataset-path ./demo_data/so101-table-cleanup/ \
   --num-gpus 1 \
   --output-dir ./so101-checkpoints \
   --max-steps 10000 \
   --data-config so100_dualcam \
   --video-backend torchvision_av \
   --base-model-path ./pretrained/GR00T-N1.5-3
```

`--dataset-path` は、SO-ARMからの収集データのファイルパスです。

:::note
デフォルトのファインチューニング設定には約25GのVRAMが必要です。そのようなVRAMがない場合は、gr00t_finetune.pyスクリプトに `--no-tune_diffusion_model` フラグを追加してみてください。
:::

### GR00T N1.5での推論実行

最適なパフォーマンスを実現するために、ファインチューニング済みGR00Tモデルをデプロイする際は、データ収集時に使用した実世界のセットアップを可能な限り忠実に再現することを推奨します。これは、モデルの汎化能力が限定的であるためです。
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/deploy.jpg" width="400"/>
</div>

Dockerコンテナ内でターミナルを開き、GR00T推論サービスを起動します：

```bash
python scripts/inference_service.py --server \
    --model_path ./so101-checkpoints \
    --embodiment-tag new_embodiment \
    --data-config so100_dualcam \
    --denoising-steps 4
```

起動が成功すると、ターミナルに以下のようなログが表示されます：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/deploy1.png" width="600"/>
</div>

別のターミナルを開き、以下のコマンドを使用して異なるシェルから同じコンテナに入ります：

```bash
sudo docker exec -it <container id> /bin/bahs
```

次に、この2番目のシェルで推論クライアントを開始します：

```bash
  python examples/eval_lerobot.py \
    --robot.type=so100_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, front: {type: opencv, index_or_path: 1, width: 640, height: 480, fps: 30}}" \
    --policy_host=0.0.0.0 \
    --lang_instruction="Grab pens and place into pen holder."
```

クライアントプロセスが正常に開始されると、以下の出力が表示されます：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/deploy2.png" width="600"/>
</div>

:::tip
クライアントプロセスの初回実行時には、アームのサーボを校正する必要があります。校正プロセスは前述の通りです。

各関節がフルレンジの動作を行うことを確認し、適切なテレオペレーションと推論動作を保証してください。
:::

すべてが設定されると、GR00T N1.5はJetson AGX Thor上で正常にデプロイできます。システムとハードウェア環境は、完全な推論をサポートすることが確認されました：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/123.gif" width="600"/>
</div>

## FAQ

Q1: Brev CLIツールがクラウドトレーニングプラットフォームで動作しませんか？

これは多くの場合、ネットワークの問題が原因です。
ローカルのUbuntuホストにBrev CLIをインストールしてログインし、ローカルターミナルからSSHを使用してクラウドインスタンスに接続を試みてください。

Q2: トレーニングプラットフォームにデータをアップロードするにはどうすればよいですか？

次のコマンドを使用してください：`scp <local-file-path> <brev-instance-name>:<remote-file-path>`、例えば`scp -r ./record_2_cameras/ gr00t-trainer:/home/ubuntu/Datasets`

## 参考文献

- https://developer.nvidia.com/embedded/jetpack
- https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
