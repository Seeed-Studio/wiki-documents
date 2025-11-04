---
description: このwikiでは、NVIDIA Jetson Thorの使い方を紹介し、Thor上でAIとロボティクスプロジェクトをデプロイするためのワークフロー例を提供します。詳細なステップバイステップの手順とリファレンスドキュメントも提供されています。
title: LeRobot SO-101 アーム用 Isaac GR00T N1.5 のファインチューニングと Jetson Thor へのデプロイ

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

# LeRobot SO-101 アーム用 GR00T N1.5 のファインチューニングと Jetson AGX Thor へのデプロイ

## はじめに

このwikiでは、**LeRobot SO-101 アーム**用の**NVIDIA Isaac GR00T N1.5**をファインチューニングし、**NVIDIA Jetson Thor**にデプロイする方法を説明します。以下の内容を含みます：

- **LeRobot SO-101** と **Jetson AGX Thor** のハードウェア準備
- Jetson Thor 上での **GR00T N1.5** のソフトウェア環境セットアップ
- **LeRobot トレーニングプラットフォーム**の使用：データ収集、データセット形式、SO-101 アーム用のファインチューニング
- トレーニング済み GR00T N1.5 ポリシー（LeRobot + SO-101）を Jetson Thor にデプロイするワークフロー例
- トラブルシューティングのヒントと一般的な落とし穴

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/other/cover1.png"/>
</div>

<p></p>

**初期セットアップから完全なデプロイまでをサポートするため、詳細なステップバイステップの手順とリファレンスドキュメントが提供されています。**

## NVIDIA Jetson Thor Developer Kit の使い方

### Jetson Thor の概要

**NVIDIA® Jetson AGX Thor™ Developer Kit**は、物理AIとヒューマノイドロボティクスのためのパワーハウスです。NVIDIA Blackwell GPU を中心に構築され、**128 GB の高速メモリ**を含み、**40-130 W**（一般的な使用では最大130 W）の電力エンベロープ内で動作しながら、**最大2,070 FP4 TFLOPS**のAI計算能力を提供します。

Jetson AGX Thor Developer Kit は Seeed Studio からこちらで入手できます：[Seeed – NVIDIA Jetson AGX Thor™ Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html)
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/other/thor-post.png"/>
</div>

ボックスに含まれるハードウェアアイテムは、Thor ユニット1台と電源アダプターです：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/other/physical.jpeg"/>
</div>

### Thor システムイメージの書き込み

**2025年9月10日**現在、Thor で利用可能な最新のシステムイメージバージョンは **38.2** です。Thor のシステムを再書き込みする必要がある場合は、このセクションの手順に従ってください。
書き込みに必要なアイテム：

- 25 GB 以上の利用可能なディスク容量を持つホストデバイス（Ubuntu または Windows OS サポート）
- 最低16 GB の容量を持つUSBドライブ
- モニターと DP/HDMI ディスプレイケーブル
- 240 W 以上を供給できる電源環境
- USB インターフェースを持つキーボード

まず、NVIDIA公式ウェブサイトから Thor 用の ISO 形式システムイメージをダウンロードします。ダウンロードページにアクセスするには[こちら](https://developer.nvidia.com/embedded/jetpack/downloads)をクリックしてください：

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/other/38.2-iso.png"/>
</div>

ホストマシンに Balena Etcher をインストールします。インストーラーをダウンロードするには[こちら](https://etcher.balena.io/#:~:text=DOWNLOAD-,Download%20Etcher,-ASSET)をクリックし、ホストオペレーティングシステムに基づいて適切なバージョンを選択してください：
<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/other/balena.jpg"/>
</div>

ISO イメージファイルをダウンロードし、**Balena Etcher** を正常にインストールした後、USB ドライブをホストマシンに挿入します。次に、**Balena Etcher** を起動して Thor 書き込み用のブータブル USB ドライブを作成します：
:::danger
このプロセスは USB ドライブをフォーマットします。事前に重要なデータをバックアップしてください。
:::

ローカルストレージからダウンロードした ISO イメージファイルを選択し、次にターゲットデバイス（つまり、USB ドライブ）を選択します。
<mark>ターゲットデバイス名とマウントディレクトリを慎重に確認してください！</mark> `Flash!` をクリックし、プロセスが完了するまで待ちます。完了すると、Thor にシステムを書き込むための USB ドライブの準備が整います：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/step1.png" width="300"/>
  <img src="https://files.seeedstudio.com/wiki/other/target.png" width="300"/>
  <img src="https://files.seeedstudio.com/wiki/other/flash-U.png" width="300"/>
</div>

<p></p>

次に、準備した USB ドライブ、キーボード、ディスプレイケーブル（DP/HDMI）、電源（Type-C）を Thor ボードに挿入して書き込みプロセスを開始します。
<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/other/flash-insert.jpg"/>
</div>

<p></p>

Thor の電源を入れ、ブートインターフェースに入ります。`Boot Manager` を選択し、次に Thor に挿入された USB ドライブ（USB ドライブ名に基づく）を選択します。Esc を押して前のメニューに戻り、`Continue` を選択します：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/BootM.png" width="300"/>
  <img src="https://files.seeedstudio.com/wiki/other/selectU.png" width="300"/>
  <img src="https://files.seeedstudio.com/wiki/other/continue.png" width="300"/>
</div>

<p></p>

短い黒い画面の後、以下のインターフェースが表示されます。`Jetson Thor options` を選択して Enter を押します。次に、オプション
`Flash Jetson AGX Thor Developer Kit on NVMe 0.2.0-r38.2` を選択して、システムイメージを Thor の NVMe ソリッドステートドライブに書き込みます：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/option.png" width="450"/>
  <img src="https://files.seeedstudio.com/wiki/other/flash-M2.png" width="450"/>
</div>

大量のログ情報が画面に表示されます。約**15分**待ちます。この段階が完了すると、デバイスは自動的に再起動し、次のインターフェースに進みます。**Update Progress** バーが100%に達するまで待ちます。これは書き込みプロセスが正常に完了したことを示します：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/option.png" width="450"/>
  <img src="https://files.seeedstudio.com/wiki/other/flash-M2.png" width="450"/>
</div>

書き込み後、初期システム設定を進めることができます：
<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/other/ubuntu24.png"/>
</div>

:::warning
このシステムイメージには、CUDA、TensorRT、またはJetPackの他のSDKコンポーネントは含まれていません。
:::

## Thor での基本開発環境セットアップ

このセクションでは、開発目的で Thor によく使用されるソフトウェア依存関係をインストールする方法の例を提供します。これらの依存関係は、後続の開発を促進することを目的としています。

リストされた依存関係は**参考のみ**であることに注意してください。個々のプロジェクト要件に応じて追加のパッケージをインストールしてください。

### 必須開発依存関係のインストール

**JetPack SDK インストール**
<p></p>
ターミナルを開き、以下のコマンドを実行します。短時間待つと、CUDA、TensorRT、その他のSDKコンポーネントがインストールされます：
```bash
sudo apt update
sudo apt install nvidia-jetpack
```

**ブラウザインストール**

Firefox は Ubuntu 24.04 で安定して動作することがテストされ、確認されています：

```bash
sudo apt update
sudo apt install firefox
```

**Jtop インストール**

jtop をインストールするには、以下の手順を参照してください。

```bash
sudo apt update
sudo apt install python3
sudo apt install python3-pip

sudo pip3 install -U pip
sudo pip3 install jetson-stats
```

**Miniconda インストール**

Miniconda は開発環境を分離するために使用されます。miniconda をインストールするには、以下の手順を参照してください：

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
conda --version
```

**GPU版PyTorchのインストール**

Thor でソースから GPU 版 PyTorch をコンパイルすると、互換性の問題が発生する可能性があります。便宜上、Thor で PyTorch 対応の開発環境を迅速にセットアップするのに役立つ、事前コンパイル済みの `.whl` ファイルを提供します。

ここでは、Thor に PyTorch 2.9 をインストールするための事前コンパイル済みホイールファイルを提供します。このファイルは `Python 3.10 + CUDA 13` 環境でコンパイルされました。
[**Python 3.10 + CUDA 13 pytorch2.9**](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVe_c8F4DR9CluC049HCYoMBP3UXta1kqLEDTvkcYU6s-A?e=vrAjhN) をクリックして `.whl` ファイルをダウンロードしてください。
[**Python 3.10 + CUDA 13 torchvision0.24**](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ESDkmxLfCW1MkI8YBfrdWVAB4u3OPvnb4rOhlvw4QvoS_Q?e=YJE0Pr) をクリックして `.whl` ファイルをダウンロードしてください。
[**Python 3.10 + CUDA 13 torchvision0.23**](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQYGDJxMk1ZAgJHgEMZIfg8Blcrs2owxx3ZM603WgBXhhA?e=MdWMI9) をクリックして `.whl` ファイルをダウンロードしてください。


その他の <mark>Python **3.12** + CUDA 13</mark> thor 用事前コンパイル済み依存関係 `.whl` ファイルは以下で見つけることができます：
[**https://pypi.jetson-ai-lab.io/sbsa/cu130**](https://pypi.jetson-ai-lab.io/sbsa/cu130)。

期待されるホイールファイルが利用できない場合、開発者は開発環境のセットアップを完了するために必要な依存関係を自分でビルドする必要があります。

### 追加依存関係のインストール

このドキュメントでは、開発者が Jetson AGX Thor 開発環境に迅速に適応できるよう支援するリファレンス Docker イメージを提供します。
<mark>このイメージは参考のみであり、開発者は特定のニーズに基づいて使用するかどうかを自由に選択できます。</mark>

:::note
イメージサイズが40 GBを超えるため、サーバーからのダウンロードは比較的遅くなります。
:::

この Docker イメージは GR00T N1.5 推論を安定して実行できます。イメージ内の `pip list` コマンドの出力は以下の通りです：

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

このイメージは Docker Hub から直接プルでき、`PyTorch`、`TensorRT`、`FlashAttention` などの一般的に使用される依存関係が含まれています：

```bash
docker pull johnnync/isaac-gr00t:r38.2.arm64-sbsa-cu130-24.04
```

:::warning
この Docker イメージは `ACT` モデル推論用の LeRobot スクリプトの呼び出しをサポートしていません。完全な LeRobot スクリプトスイートを実行する必要がある場合は、このイメージ外の環境を使用してください。
:::


Thor で Docker を実行するには、以下のコマンドを参照してください。`your_docker_img:tag` を Docker イメージ名とタグに置き換えるか、イメージ ID を使用してください：

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



## SO-ARM を使用したデータ収集

データ収集の詳細なチュートリアルについては、以下のリンクを参照してください：  
[https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#record-the-dataset](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#record-the-dataset)  
**このリンクには、構成、組み立て、キャリブレーション、データ収集、トレーニング、推論をカバーする SO-ARM の完全なチュートリアルが含まれています。**

lerobot ロボットアームのデータ収集は、PC または Jetson デバイス上で直接実行できます。

- 方法 1：Jetson を使用してデータを収集
- 方法 2：Ubuntu PC を使用してデータを収集

データ収集手順は両方の方法で基本的に同じです。

:::warning
**Jetson は同じ帯域幅要件を持つ 2 台の USB カメラを同時にストリーミングできない場合があります。2 台の USB カメラを接続する場合は、異なる USB ハブチップに接続する必要があります！**
:::

Thor で 2 台の USB カメラを同時にストリーミングするには、1 台のカメラを USB-A ポートに接続した後、**USB Type-C ポート経由で接続された外部 USB ハブ**も使用する必要があります。これにより、2 台目の USB カメラが Thor 内の異なる USB ハブコントローラーにマウントされることが保証されます。
 互換性のある USB Type-C ハブの例を以下に示します：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/hub.png" height="400"/>
</div>


USB Type-C ドックは、周辺機器が適切に機能するように、Thor の特定のポートに接続する必要があります。以下に示すとおりです：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/thor-typec.png" height="400"/>
</div>

### Lerobot 環境セットアップ（オプション）

Lerobot の開発環境セットアップ手順は、以下のリンクのサブセクションで確認できます：  
[https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#install-lerobot](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#install-lerobot)



### モーターの設定


SO-ARM の各関節のモーターは、組み立て前に設定する必要があります。設定手順は、以下のリンクのサブセクションで確認できます：    
[https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#configure-the-motors](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#configure-the-motors)


### 組み立て

SO-ARM のマスターアームとフォロワーアームのインストール手順は、以下のリンクのサブセクションで確認できます：  
[https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#assembly](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#assembly)

### SO-ARM キャリブレーション


SO-ARM が完全に組み立てられた後、キャリブレーションが必要です。キャリブレーション手順については、以下のリンクのサブセクションを参照してください：  
[https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#calibrate](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#calibrate)



:::note
**ロボットアームをキャリブレーションする際は、USB カメラを接続しないでください。ポートの競合や不正なポート割り当てが発生する可能性があります。**
:::

**キャリブレーションスクリプトを実行した後、ロボットアームの各関節を手動で動かして、完全な可動域に到達することを確認してください！これを行わないと、テレオペレーション中にリーダーアームとフォロワーアームの姿勢が一致しない可能性があります。**




### カメラの追加

一般的に、ロボットアームの手首/グリッパーに 1 台のカメラを設置し、デスクトップ表面にもう 1 台のカメラを設置して、アームの姿勢を適切にカバーすることが推奨されます。
<mark>具体的な設置方法はアプリケーションシナリオによって異なります。以下に示す例は参考用です。</mark>

詳細については、以下のリンクのサブセクションを参照してください：  
[https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#add-cameras](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#add-cameras)



### データ収集

カメラの設置とロボットアームのキャリブレーションの両方が完了した後、データセット収集手順は以下のリンクのサブセクションで確認できます：  
[https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#record-the-dataset](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#record-the-dataset)



### 収集したデータの可視化


SO-ARM で収集したデータを可視化するには、以下のリンクのサブセクションを参照してください：  
[https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#visualize-the-dataset](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#visualize-the-dataset)



### ポリシートレーニング

収集したデータに基づいて、ポリシーをトレーニングする手順は以下のリンクのサブセクションで確認できます：  
[https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#train-a-policy](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#train-a-policy)



:::tip
以下のセクションでは、クラウドベースのトレーニングプラットフォームを紹介し、基本的な使用方法を説明します。リモートサーバーでより効率的にトレーニングを完了することを選択できます。
:::

:::note
クラウドでポリシーをトレーニングすることを選択した場合は、データセットが事前にクラウドサーバーにアップロードされているか、Hugging Face Hub からダウンロードされていることを確認してください。ただし、Hugging Face Hub から直接ダウンロードする際の潜在的なネットワーク問題のため、データセットをクラウドサーバーに手動でアップロードすることを強く推奨します。
:::

## NVIDIA Brev を使用したポリシートレーニング

NVIDIA Brev は、人気のクラウドプラットフォーム上の NVIDIA GPU インスタンスへの合理化されたアクセス、自動環境セットアップ、柔軟なデプロイメントオプションを提供し、開発者が即座に実験を開始できるようにします。

プラットフォームアクセス URL：
[https://login.brev.nvidia.com/signin](https://login.brev.nvidia.com/signin)

プラットフォームを使用するにはアカウントを登録する必要があります。このセクションでは、トレーニングプラットフォームの基本的な使用方法を紹介します。

### クラウドベーストレーニングプラットフォームの有効化

**ステップバイステップの手順**

- クラウドサーバーインスタンスの作成 - ステップ 1

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train0.png" width="600"/>
</div>

- クラウドサーバーインスタンスの作成 - ステップ 2

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train1.png" width="600"/>
</div>

- クラウドサーバーインスタンスの作成 - ステップ 3

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train2.png" width="600"/>
</div>

**ウェブベース Jupyter Notebook の起動**：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/jnote0.png" width="600"/>
</div>
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/jnote1.png" width="600"/>
</div>

### モデルのトレーニングとサーバーからのエクスポート

**開発者はノートブックターミナル内で直接モデルをトレーニングできます。以下は GR00T N1.5 をトレーニングし、その後サーバーからエクスポートする例です。**

サーバーに Conda をインストール：

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
source ~/miniconda3/bin/activate
conda init --all
```

Isaac-GR00T リポジトリのクローン： 
```bash
git clone https://github.com/NVIDIA/Isaac-GR00T
cd Isaac-GR00T
```

gr00t 環境の作成：
```bash
conda create -n gr00t python=3.10
conda activate gr00t
pip install --upgrade setuptools
pip install -e .[base]
pip install --no-build-isolation flash-attn==2.7.1.post4 
```

:::warning
クラウドプラットフォームで GR00T をトレーニングまたはファインチューニングする場合は、Ampere 以降のアーキテクチャを持つ GPU（例：RTX A6000 または GeForce RTX 4090）を使用する必要があります。**V100（Volta）は GR00T のトレーニングまたはファインチューニングではサポートされていません**。
:::

モデルのファインチューニングの詳細については、以下を参照してください：
[https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning#:~:text=1.2%20Configure%20Modality%20File](https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning#:~:text=1.2%20Configure%20Modality%20File)


GR00T N1.5 モデルのファインチューニング：

```bash
python scripts/gr00t_finetune.py \
   --dataset-path ./demo_data/so101-table-cleanup/ \
   --num-gpus 1 \
   --output-dir ./so101-checkpoints  \
   --max-steps 10000 \
   --data-config so100_dualcam \
   --video-backend torchvision_av
```

:::note
デフォルトのファインチューニング設定には約 25G の VRAM が必要です。それだけの VRAM がない場合は、gr00t_finetune.py スクリプトに `--no-tune_diffusion_model` フラグを追加してみてください。
:::

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train4.png" width="600"/>
</div>

:::note
サーバーで Gr00t をトレーニングまたはファインチューニングしたい場合は、この[リンク](https://github.com/NVIDIA/Isaac-GR00T)を参照してください。
:::

**トレーニングが完了した後、モデルをローカルマシンにダウンロードしたい場合があります。しかし、Jupyter Notebook サイドバーはモデルトレーニングフォルダーへの直接ナビゲーションをサポートしていません。**

解決策は次のとおりです：まず対象フォルダーを `.zip` または `.tar.gz` アーカイブに圧縮し、次にノートブックインターフェースを通じてアーカイブファイルをダウンロードします。例については以下の図を参照してください。
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train5.png" width="600"/>
</div>

## Thor での Isaac GR00T N1.5 推論

Jetson AGX Thor は、強力なエッジコンピューティングおよびデプロイメントプラットフォームとして、大規模モデル推論をサポートするのに十分なリソースを提供します。このセクションでは、前述の内容に基づいて、Thor で GR00T N1.5 の推論を実行する方法を説明します。

GR00T N1.5は、ロボット学習分野においてNVIDIA Researchがリリースしたオープンソースのベースラインシステムです。特に大規模モデル駆動の模倣学習とポリシー学習に焦点を当てた、エンボディードAIの訓練と推論のための統一フレームワークの提供を目的としています。

### 準備

GR00T N1.5の事前訓練済みモデルは**Hugging Faces**経由で利用可能です。以下のリンクからダウンロードできます：

[https://huggingface.co/nvidia/GR00T-N1.5-3B/tree/main](https://huggingface.co/nvidia/GR00T-N1.5-3B/tree/main)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/gr00tD.png" width="600"/>
</div>

GR00T推論に必要なすべての依存関係は、専用のDockerイメージに事前設定されています。

以下のコマンドを使用してコンテナを起動します：

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

### モデルファインチューニング（オプション）

:::warning
NVIDIA BrevでGR00T N1.5のファインチューニングを既に実行している場合は、Thorでのこのステップをスキップできます。
:::

**ファインチューニングプロセスは、提供されたクラウド訓練プラットフォームまたはThor上のDockerコンテナ内で直接実行できます**。

事前訓練済みのGR00Tモデルをダウンロードしておらず、カスタムバージョンを使用する予定がない場合は、以下のコマンドを使用してHugging Faceの重みに基づいてファインチューニングを行うことができます：

```bash
python scripts/gr00t_finetune.py \
   --dataset-path ./demo_data/so101-table-cleanup/ \
   --num-gpus 1 \
   --output-dir ./so101-checkpoints  \
   --max-steps 10000 \
   --data-config so100_dualcam \
   --video-backend torchvision_av
```

このスクリプトは、Hugging Faceから事前訓練済みのGR00Tモデルを自動的にダウンロードし、ファインチューニングプロセスを開始します。

ローカルに保存された事前訓練済みのGR00Tモデルを使用したい場合は、以下のようにコマンドを変更してください：

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

`--dataset-path`は、SO-ARMからの収集データのファイルパスです。

:::note
デフォルトのファインチューニング設定には約25GのVRAMが必要です。十分なVRAMがない場合は、gr00t_finetune.pyスクリプトに`--no-tune_diffusion_model`フラグを追加してみてください。
:::

### GR00T N1.5での推論実行

最適なパフォーマンスを実現するために、ファインチューニングされたGR00Tモデルをデプロイする際は、データ収集時に使用された実世界のセットアップをできるだけ忠実に再現することを推奨します。これは、モデルの汎化能力が限定的であるためです。
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
  python examples/SO-100/eval_lerobot.py \
    --robot.type=so100_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, front: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --policy_host=0.0.0.0 \
    --lang_instruction="Grab pens and place into pen holder."
```

`index_or_path`をカメラのインデックス番号に置き換えてください。`ls /dev/video*`を実行することで確認できます。

クライアントプロセスが正常に開始されると、以下の出力が表示されます：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/deploy2.png" width="600"/>
</div>

:::tip
クライアントプロセスの初回実行時には、アームのサーボを校正する必要があります。校正プロセスは前述の通りです。

適切なテレオペレーションと推論動作を確保するために、各関節が可動域全体を動くことを確認してください。
:::

すべてが設定されると、GR00T N1.5をJetson AGX Thorに正常にデプロイできます。システムとハードウェア環境が完全な推論をサポートすることが確認されました：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/123.gif" width="600"/>
</div>

## FAQ

**Q1: クラウド訓練プラットフォームでBrev CLIツールが動作しない？**  
これは多くの場合、ネットワークの問題が原因です。
ローカルのUbuntuホストにBrev CLIをインストールしてログインし、ローカルターミナルからSSHを使用してクラウドインスタンスに接続を試みてください。

**Q2: 訓練プラットフォームにデータをアップロードするには？**  
以下のコマンドを使用してください：`scp <local-file-path> <brev-instance-name>:<remote-file-path>`、例：`scp -r ./record_2_cameras/ gr00t-trainer:/home/ubuntu/Datasets`


**Q3: インストール開始後にThorの画面が黒くなる**  
以前に使用またはセットアップされたJetson AGX Thor Developer KitでJetsonインストールUSBスティックを使用する場合、`UEFIセットアップメニュー`でSoC Display Hand-Offを有効にする必要があります。
実際には、この間もバックグラウンドでフラッシュが続行されており、しばらくするとUbuntuデスクトップが表示されます。

**Q4: モニターに映像出力がない（KVM経由で接続）**  
一部のKVMスイッチ/デバイスは、Jetson AGX Thor Developer Kitからの映像出力を適切に処理できないことが知られています。モニターをJetson AGX Thor Developer Kitに直接接続してください。

**Q5: Thorのフラッシュ後、その後の起動でHDMIが信号なしを表示することがある**  
効果的であることが証明された回避策は、表示出力にDisplayPort（DP）コネクタに切り替えることです。

**Q6: Thorイメージフラッシュ中にキーボード入力が検出されない**  
フラッシュ中は有線キーボードの使用を推奨します。ワイヤレスキーボードは、Thorフラッシュプロセス中に互換性が限定される場合があります。

**Q7: GR00Tのクラウドファインチューニングで「GPU not supported」エラーが発生**  
GR00Tのクラウドファインチューニングには、`Ampereアーキテクチャ`より古いGPUを使用しないでください（例：RTX A6000またはGeForce RTX 4090）。V100（Volta）はGR00Tの訓練やファインチューニングには対応していません。

**Q8: ロボットアームコントローラーボードのシリアルデバイス名が/dev下に表示されない**  
標準のThorシステムには`CH34x`ドライバーが含まれていません。不足している場合は、以下からインストールしてください：
https://github.com/juliagoda/CH341SER

**Q9: ThorのType-Cポートが外部ハブを認識しない**  
ThorのType-C経由で外部ハブを使用するには、QSFP28コネクタに最も近いType-Cポートに接続してください。（両方のType-Cポートが電力を供給しますが、指定されたポートのみがハブを確実にサポートします。）
<div align="center"> <img src="https://files.seeedstudio.com/wiki/other/thor-typec.png" height="200"/> </div>

**Q10: キャプチャカードでフラッシュする際、後でシステムがユーザーパスワードが間違っていると表示する**  
フラッシュ中にキャプチャカードデスクトップを使用する場合、キーボード入力のバグが発生する可能性があります（入力が入力内容と一致しない）。設定時にユーザーパスワードを再確認してください。

**Q11: Thorのデバッグポートはどこにある？**  
ThorのType-Cデバッグポートは磁気カバーの下に隠れています。複数のシリアルデバイスノードが作成される場合があります。最小のインデックスを持つものを使用してシリアル経由でThorにログインしてください。

**Q12: GR00TイメージでLeRobotスクリプトを実行してACTを推論できない**  
Python 3.12環境でのLeRobot APIを使用した`ACT`推論の呼び出しは推奨しません。`Calibration`と`find port`スクリプトは問題ありません。Ubuntu 24はローカルでデフォルトでPython 3.12を使用することに注意してください。

**Q13: ThorでGPU SM使用率を確認するには？**  
以下を実行してください：
```bash
nvidia-smi dmon -s puc
```  
出力の`sm`列を確認してください。

**Q14: ロボットアームドライバーのシリアルポートからデータを読み取れない**  
SO-ARMドライバーボードの前にカメラを接続しないでください。そうすると、シリアルデバイスマッピングが正しくなくなる可能性があります。また、シリアルポートの権限が付与されていることを確認してください。

## 参考文献

- https://developer.nvidia.com/embedded/jetpack
- https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
