---
description: この Wiki では、NVIDIA Jetson Thor の使い方を紹介し、Thor 上で AI およびロボティクスプロジェクトをデプロイするためのワークフロー例を提供します。詳細なステップバイステップの手順とリファレンスドキュメントも併せて提供します。
title: SO-ARM と Isaac GR00T N1.5
keywords:
  - Thor
  - ロボティクス
  - Seeed
image: https://files.seeedstudio.com/wiki/other/cover1.png
slug: /fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor
last_update:
  date: 2025-9-11
  author: AI&Robotics Group
createdAt: '2025-09-15'
updatedAt: '2026-09-22'
url: https://wiki.seeedstudio.com/ja/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/
---

import '/src/css/rebot-wiki-style.css';
import '/src/css/soarm101-pinocchio-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LeRobot SO-101 アーム用 GR00T N1.5 のファインチューニングと Jetson AGX Thor へのデプロイ

<div className="rebot-page soarm-guide">

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/cover1.png" width={1000} height={562} style={{height: 'auto'}} alt="SO-ARM と Jetson AGX Thor の GR00T デプロイプロジェクト" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/SO-101-Assembled-Kit-Pro-p-6691.html" target="_blank" rel="noopener noreferrer">
    <span>SO-ARM101 キットを入手</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

## はじめに

LeRobot で SO-ARM の示教データを収集し、NVIDIA Brev または Jetson AGX Thor で Isaac GR00T N1.5 をファインチューニングして、Thor で推論を実行します。

### 推奨学習パス

<div className="rebot-step-flow soarm-learning-path">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4><a href="#nvidia-jetson-thor-developer-kit-の使い方">Jetson AGX Thor を準備する</a></h4>
    <p>必要に応じてシステムイメージを書き込みます。</p>
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4><a href="#thor-での基本開発環境セットアップ">開発環境をセットアップする</a></h4>
    <p>JetPack をインストールし、Python 依存関係と参考 Docker イメージを確認します。</p>
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4><a href="#so-armを使用したデータ収集">SO-ARM のデータを収集する</a></h4>
    <p>ホストを選び、アームをキャリブレーションして両方のカメラをセットアップします。</p>
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">
    <h4><a href="#ポリシートレーニングにnvidia-brevを使用">NVIDIA Brev でファインチューニングする</a></h4>
    <p>クラウド環境を準備し、モデルをファインチューニングしてチェックポイントを書き出します。</p>
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">5</span>
  <div className="rebot-step-content">
    <h4><a href="#thorでのisaac-gr00t-n15推論">Thor で推論をデプロイする</a></h4>
    <p>推論サービスとクライアントを起動し、実機のセットアップを確認します。</p>
  </div>
</section>

</div>

## NVIDIA Jetson Thor Developer Kit の使い方

### Jetson Thor の概要

**NVIDIA® Jetson AGX Thor™ Developer Kit**は、物理AIとヒューマノイドロボティクスのためのパワーハウスです。NVIDIA Blackwell GPUを中心に構築され、**128 GB高速メモリ**を搭載し、**40-130 W**（一般的な使用では最大130 W）の電力エンベロープ内で動作しながら、**最大2,070 FP4 TFLOPS**のAI計算能力を提供します。

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html" target="_blank" rel="noopener noreferrer">
    <span>Jetson AGX Thor Developer Kit を入手</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/other/thor-post.png" alt="Jetson AGX Thor Developer Kit" />
</div>

ボックスに含まれるハードウェアアイテムは、Thorユニット1台と電源アダプター1個です：
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/physical.jpeg" alt="Thor 本体と付属の電源アダプター" />
</div>

### Thorシステムイメージの書き込み

この手順では 38.2 システムイメージを使用します。Thor を再書き込みする必要がある場合は、以下の項目を準備してください。

| 項目 | 要件 |
| --- | --- |
| ホスト | 空き容量が 25 GB を超える Ubuntu または Windows。 |
| USB ドライブ | 16 GB 以上。 |
| ディスプレイ | モニターと DisplayPort または HDMI ケーブル。 |
| 電源 | 240 W を超えて供給できる電源環境。 |
| 入力 | USB キーボード。 |

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>システムイメージをダウンロードする</h4>

まず、NVIDIA公式ウェブサイトからThor用のISO形式システムイメージをダウンロードします。ダウンロードページにアクセスするには[こちら](https://developer.nvidia.com/embedded/jetpack/downloads)をクリックしてください：

<div align="center">
  <img width="700" src="https://files.seeedstudio.com/wiki/other/38.2-iso.png" alt="JetPack ダウンロードページの Thor 38.2 イメージ" />
</div>

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Balena Etcher をインストールする</h4>

ホストマシンにBalena Etcherをインストールします。インストーラーをダウンロードするには[こちら](https://etcher.balena.io/#:~:text=DOWNLOAD-,Download%20Etcher,-ASSET)をクリックし、ホストオペレーティングシステムに基づいて適切なバージョンを選択してください：
<div align="center">
  <img width="700" src="https://files.seeedstudio.com/wiki/other/balena.jpg" alt="Balena Etcher インストーラーのダウンロードページ" />
</div>

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>起動可能な USB ドライブを作成する</h4>

ISOイメージファイルをダウンロードし、**Balena Etcher**のインストールが正常に完了したら、USBドライブをホストマシンに挿入します。次に、**Balena Etcher**を起動してThor書き込み用のブータブルUSBドライブを作成します：
:::danger
この処理によりUSBドライブがフォーマットされます。事前に重要なデータをバックアップしてください。
:::

ローカルストレージからダウンロードしたISOイメージファイルを選択し、次にターゲットデバイス（つまり、USBドライブ）を選択します。
<mark>ターゲットデバイス名とマウントディレクトリを慎重に確認してください！</mark> `Flash!`をクリックして処理が完了するまで待ちます。完了すると、ThorにシステムをフラッシュするためのUSBドライブが準備完了です：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/step1.png" width="300" alt="Etcher で ISO イメージを選択する" />
  <img src="https://files.seeedstudio.com/wiki/other/target.png" width="300" alt="Etcher で対象の USB ドライブを確認する" />
  <img src="https://files.seeedstudio.com/wiki/other/flash-U.png" width="300" alt="Etcher で書き込みを開始する" />
</div>

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">
    <h4>周辺機器を接続する</h4>

次に、準備したUSBドライブ、キーボード、ディスプレイケーブル（DP/HDMI）、電源（Type-C）をThorボードに挿入して書き込み処理を開始します。
<div align="center">
  <img width="700" src="https://files.seeedstudio.com/wiki/other/flash-insert.jpg" alt="書き込みのために Thor に接続した周辺機器" />
</div>

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">5</span>
  <div className="rebot-step-content">
    <h4>USB から起動する</h4>

Thorの電源を入れてブートインターフェースに入ります。`Boot Manager`を選択し、次にThorに挿入されたUSBドライブ（USBドライブ名に基づく）を選択します。Escを押して前のメニューに戻り、`Continue`を選択します：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/BootM.png" width="300" alt="Thor UEFI の Boot Manager" />
  <img src="https://files.seeedstudio.com/wiki/other/selectU.png" width="300" alt="Boot Manager で USB ドライブを選択する" />
  <img src="https://files.seeedstudio.com/wiki/other/continue.png" width="300" alt="起動メニューで Continue を選択する" />
</div>

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">6</span>
  <div className="rebot-step-content">
    <h4>NVMe に書き込む</h4>

短い黒い画面の後、以下のインターフェースが表示されます。`Jetson Thor options`を選択してEnterを押します。次に、
`Flash Jetson AGX Thor Developer Kit on NVMe 0.2.0-r38.2`オプションを選択してシステムイメージをThorのNVMeソリッドステートドライブに書き込みます：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/option.png" width="450" alt="起動メニューの Jetson Thor options" />
  <img src="https://files.seeedstudio.com/wiki/other/flash-M2.png" width="450" alt="Thor のシステムイメージの書き込み先として NVMe を選択する" />
</div>

大量のログ情報が画面に表示されます。約**15分間**お待ちください。この段階が完了すると、デバイスは自動的に再起動し、次のインターフェースに進みます。**Update Progress**バーが100%に達するまで待ちます。これで書き込み処理が正常に完了したことを示します：

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">7</span>
  <div className="rebot-step-content">
    <h4>システム設定を完了する</h4>

書き込み後、初期システム設定を進めることができます：
<div align="center">
  <img width="700" src="https://files.seeedstudio.com/wiki/other/ubuntu24.png" alt="書き込み後の Ubuntu 初期設定" />
</div>

:::warning
このシステムイメージには、CUDA、TensorRT、またはJetPackの他のSDKコンポーネントは含まれていません。
:::

  </div>
</section>

</div>

## Thor での基本開発環境セットアップ

このセクションでは、開発目的でThor上によく使用されるソフトウェア依存関係をインストールする方法の例を提供します。これらの依存関係は、後続の開発を促進することを目的としています。

リストされた依存関係は**参考のみ**であることに注意してください。個々のプロジェクト要件に応じて追加のパッケージをインストールしてください。

### 必須開発依存関係のインストール

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>JetPack SDK をインストールする</h4>

ターミナルを開いて以下のコマンドを実行します。少し待つと、CUDA、TensorRT、その他のSDKコンポーネントがインストールされます：
```bash
sudo apt update
sudo apt install nvidia-jetpack
```

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Miniconda をインストールする</h4>

Minicondaは開発環境を分離するために使用されます。minicondaをインストールするには、以下の手順を参照してください：

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
conda --version
```

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>GPU 版 PyTorch を入手する</h4>

Thor上でGPU版PyTorchをソースからコンパイルすると、互換性の問題が発生する可能性があります。便宜上、開発者がThor上でPyTorch対応の開発環境を迅速にセットアップできるよう、プリコンパイル済みの`.whl`ファイルを提供します。

ここでは、Thor上でPyTorch 2.9をインストールするためのプリコンパイル済みwheelファイルを提供します。このファイルは`Python 3.10 + CUDA 13`環境でコンパイルされました。

| パッケージ | ダウンロード |
| --- | --- |
| PyTorch 2.9 | [.whl](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVe_c8F4DR9CluC049HCYoMBP3UXta1kqLEDTvkcYU6s-A?e=vrAjhN) |
| torchvision 0.24 | [.whl](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ESDkmxLfCW1MkI8YBfrdWVAB4u3OPvnb4rOhlvw4QvoS_Q?e=YJE0Pr) |
| torchvision 0.23 | [.whl](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQYGDJxMk1ZAgJHgEMZIfg8Blcrs2owxx3ZM603WgBXhhA?e=MdWMI9) |


その他の<mark>Python **3.12** + CUDA 13</mark>プリコンパイル済み依存関係`.whl`ファイルはこちらで見つけることができます：
[**https://pypi.jetson-ai-lab.io/sbsa/cu130**](https://pypi.jetson-ai-lab.io/sbsa/cu130)。

期待されるwheelファイルが利用できない場合、開発者は開発環境のセットアップを完了するために必要な依存関係を自分でビルドする必要があります。

  </div>
</section>

</div>

<details className="rebot-demo-details">
<summary>オプションのツール</summary>

**Firefox をインストール**

FirefoxはUbuntu 24.04で安定して動作することがテストされ確認されています：

```bash
sudo apt update
sudo apt install firefox
```

**jtop をインストール**

jtopをインストールするには、以下の手順を参照してください。

```bash
sudo apt update
sudo apt install python3
sudo apt install python3-pip

sudo pip3 install -U pip
sudo pip3 install jetson-stats
```

</details>

### 追加依存関係のインストール

このドキュメントでは、開発者がJetson AGX Thor開発環境に迅速に適応できるよう、参考用のDockerイメージを提供します。
<mark>このイメージは参考のみであり、開発者は特定のニーズに基づいて使用するかどうかを自由に選択できます。</mark>

:::note
イメージサイズが40 GBを超えるため、サーバーからのダウンロードは比較的遅くなります。
:::

このDockerイメージはGR00T N1.5推論を安定して実行できます。イメージ内の`pip list`コマンドの出力は以下の通りです：

<details className="rebot-demo-details">
<summary>参考イメージの Python パッケージを表示する（<code>pip list</code>）</summary>

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
docker pull johnnync/isaac-gr00t:r38.2.arm64-sbsa-cu130-24.04
```

:::warning
このDockerイメージは`ACT`モデル推論用のLeRobotスクリプトの呼び出しをサポートしていません。完全なLeRobotスクリプトスイートを実行する必要がある場合は、このイメージ外の環境を使用してください。
:::


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

Jetson または Ubuntu PC でデータを収集します。アームとカメラが接続されているホストを選び、共通の手順に従ってください。

<Tabs>
<TabItem value="jetson" label="Jetson">

:::warning
**Jetsonは同じ帯域幅要件を持つ2つのUSBカメラを同時にストリーミングできない場合があります。2つのUSBカメラを接続する場合は、異なるUSBハブチップに接続する必要があります！**
:::

ThorでUSBカメラを2台同時にストリーミングするには、1台のカメラをUSB-Aポートに接続した後、**USB Type-Cポート経由で接続された外部USBハブ**も使用する必要があります。これにより、2台目のUSBカメラがThor内の異なるUSBハブコントローラーにマウントされることが保証されます。
 互換性のあるUSB Type-Cハブの例を以下に示します：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/hub.png" style={{height: 'auto', maxHeight: 400}} alt="2 台目の USB カメラ用 Type-C ハブの例" />
</div>


USB Type-Cドックは、周辺機器が適切に機能するように、Thorの特定のポートに接続する必要があります。以下に示すとおりです：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/thor-typec.png" style={{height: 'auto', maxHeight: 400}} alt="外部 USB ハブを接続する Thor の Type-C ポート" />
</div>

</TabItem>
<TabItem value="ubuntu" label="Ubuntu PC">

Ubuntu PC に LeRobot をインストールし、アームとカメラを接続します。以下の共通手順でキャリブレーションと記録を行います。

</TabItem>
</Tabs>

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

### Lerobot環境セットアップ（オプション） {#lerobot環境セットアップオプション}

データ収集ホストに LeRobot がない場合は、使用するプラットフォーム向けの [LeRobot のインストール手順](/ja/lerobot_so100m_new/#lerobot-をインストール) に従ってください。

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

### モーターの設定


SO-ARMの各関節のモーターは、組み立て前に設定する必要があります。設定手順は以下のリンクのサブセクションで確認できます：
[モーターを設定する](/ja/lerobot_so100m_new/#モーターを設定しアームを組み立てる)

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">

### 組み立て

SO-ARMのマスターアームとフォロワーアームのインストール手順は、以下のリンクのサブセクションで確認できます：
[リーダーとフォロワーを組み立てる](/ja/lerobot_so100m_new/#モーターを設定しアームを組み立てる)

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">

### SO-ARMキャリブレーション


SO-ARMが完全に組み立てられた後、キャリブレーションが必要です。キャリブレーション手順については、以下のリンクのサブセクションを参照してください：
[ロボットアームをキャリブレーションする](/ja/lerobot_so100m_new/#ロボットアームのキャリブレーション)



:::note
**ロボットアームをキャリブレーションする際は、ポートの競合や不正なポート割り当てを引き起こす可能性があるため、USBカメラを接続しないでください。**
:::

**キャリブレーションスクリプトを実行した後、ロボットアームの各関節を手動で動かして、完全な可動域に到達することを確認してください！これを行わないと、テレオペレーション中にリーダーアームとフォロワーアームのポーズが一致しない可能性があります。**

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">5</span>
  <div className="rebot-step-content">

### カメラの追加

一般的に、ロボットアームの手首/グリッパーに1台のカメラを、デスクトップ表面にもう1台のカメラを設置して、アームの姿勢を適切にカバーすることが推奨されます。
<mark>具体的な設置方法はアプリケーションシナリオによって異なります。以下に示す例は参考用です。</mark>

詳細については、以下のリンクのサブセクションを参照してください：
[カメラを追加する](/ja/lerobot_so100m_new/#カメラを追加する)

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">6</span>
  <div className="rebot-step-content">

### データ収集

カメラの設置とロボットアームのキャリブレーションの両方が完了した後、データセット収集手順は以下のリンクのサブセクションで確認できます：
[データセットを記録する](/ja/lerobot_so100m_new/#データセットの記録)

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">7</span>
  <div className="rebot-step-content">

### 収集したデータの可視化


SO-ARMで収集したデータを可視化するには、以下のリンクのサブセクションを参照してください：
[データセットを可視化する](/ja/lerobot_so100m_new/#データセットの可視化)

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">8</span>
  <div className="rebot-step-content">

### ポリシートレーニング

収集したデータに基づいて、ポリシーをトレーニングする手順は以下のリンクのサブセクションで確認できます：
[学習して評価する](/ja/lerobot_so100m_new/#学習と評価)

  </div>
</section>

</div>

:::tip
以下のセクションでは、クラウドベースのトレーニングプラットフォームを紹介し、基本的な使用方法を説明します。リモートサーバーでより効率的にトレーニングを完了することを選択できます。
:::

:::note
クラウドでポリシーをトレーニングすることを選択した場合は、データセットが事前にクラウドサーバーにアップロードされているか、Hugging Face Hubからダウンロードされていることを確認してください。ただし、Hugging Face Hubから直接ダウンロードする際の潜在的なネットワーク問題のため、データセットを手動でクラウドサーバーにアップロードすることを強く推奨します。
:::

## ポリシートレーニングにNVIDIA Brevを使用

NVIDIA Brevは、人気のクラウドプラットフォーム上のNVIDIA GPUインスタンスへの合理化されたアクセス、自動環境セットアップ、柔軟なデプロイメントオプションを提供し、開発者が即座に実験を開始できるようにします。

プラットフォームアクセスURL：
[NVIDIA Brev にサインイン](https://login.brev.nvidia.com/signin)

プラットフォームを使用するにはアカウントを登録する必要があります。このセクションでは、トレーニングプラットフォームの基本的な使用方法を紹介します。

### クラウドベーストレーニングプラットフォームの有効化

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>クラウドインスタンスの作成を開始する</h4>

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train0.png" width="600" alt="NVIDIA Brev のクラウドインスタンス作成画面" />
</div>

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>インスタンスを設定する</h4>

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train1.png" width="600" alt="NVIDIA Brev のクラウドインスタンス設定画面" />
</div>

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>内容を確認してインスタンスを起動する</h4>

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train2.png" width="600" alt="NVIDIA Brev のクラウドインスタンス起動画面" />
</div>

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">
    <h4>Jupyter Notebook を開く</h4>

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/jnote0.png" width="600" alt="NVIDIA Brev インスタンスの Jupyter Notebook 入口" />
</div>
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/jnote1.png" width="600" alt="ブラウザー上の Jupyter Notebook" />
</div>

  </div>
</section>

</div>

### モデルのトレーニングとサーバーからのエクスポート

**開発者はノートブックターミナル内で直接モデルをトレーニングできます。以下は、GR00T N1.5をトレーニングし、その後サーバーからエクスポートする例です。**

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Conda をインストールする</h4>

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
source ~/miniconda3/bin/activate
conda init --all
```

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Isaac-GR00T をクローンする</h4>

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T
cd Isaac-GR00T
```

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>トレーニング環境を作成する</h4>

```bash
conda create -n gr00t python=3.10
conda activate gr00t
pip install --upgrade setuptools
pip install -e .[base]
pip install --no-build-isolation flash-attn==2.7.1.post4 
```

:::warning
クラウドプラットフォームでGR00Tをトレーニングまたはファインチューニングする場合は、Ampere以降のアーキテクチャを持つGPU（例：RTX A6000またはGeForce RTX 4090）を使用する必要があります。**V100（Volta）はサポートされていません**GR00Tのトレーニングまたはファインチューニングには対応していません。
:::

モデルのファインチューニングの詳細については、以下を参照してください：
[https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning#:~:text=1.2%20Configure%20Modality%20File](https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning#:~:text=1.2%20Configure%20Modality%20File)

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">
    <h4>ファインチューニングを実行する</h4>

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
デフォルトのファインチューニング設定には約25GのVRAMが必要です。十分なVRAMがない場合は、gr00t_finetune.pyスクリプトに`--no-tune_diffusion_model`フラグを追加してみてください。
:::

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train4.png" width="600" alt="GR00T N1.5 ファインチューニング中のターミナル出力" />
</div>

:::note
サーバーで GR00T をトレーニングまたはファインチューニングする場合は、この[リンク](https://github.com/NVIDIA/Isaac-GR00T)を参照してください。
:::

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">5</span>
  <div className="rebot-step-content">
    <h4>チェックポイントをダウンロードする</h4>

**トレーニングが完了した後、モデルをローカルマシンにダウンロードしたい場合があります。しかし、Jupyter Notebookサイドバーはモデルトレーニングフォルダーへの直接ナビゲーションをサポートしていません。**

解決策は次のとおりです：まず対象フォルダーを`.zip`または`.tar.gz`アーカイブに圧縮し、次にノートブックインターフェースを通じてアーカイブファイルをダウンロードします。例については以下の図を参照してください。
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train5.png" width="600" alt="Jupyter Notebook からチェックポイントのアーカイブをダウンロードする" />
</div>

  </div>
</section>

</div>

## ThorでのIsaac GR00T N1.5推論

Jetson AGX Thorは、強力なエッジコンピューティングおよびデプロイメントプラットフォームとして、大規模モデル推論をサポートするのに十分なリソースを提供します。このセクションでは、前述の内容に基づいて、ThorでGR00T N1.5の推論を実行する方法を説明します。

GR00T N1.5は、ロボット学習分野でNVIDIA Researchがリリースしたオープンソースのベースラインシステムです。特に大規模モデル駆動の模倣学習とポリシー学習に焦点を当てた、エンボディードAIの訓練と推論のための統一フレームワークの提供を目的としています。

### 準備

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>事前学習済みの重みを入手する</h4>

GR00T N1.5 の事前学習済みモデルは **Hugging Face** から入手できます。次のリンクからダウンロードできます：

[GR00T-N1.5-3B（Hugging Face）](https://huggingface.co/nvidia/GR00T-N1.5-3B/tree/main)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/gr00tD.png" width="600" alt="Hugging Face 上の GR00T N1.5 の重み" />
</div>

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Docker コンテナを起動する</h4>

GR00T推論に必要なすべての依存関係は、専用のDockerイメージに事前設定されています。

以下のコマンドを使用してコンテナを開始します。`<image_name>:<tag>`は使用しているものに置き換えてください：

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
  <image_name>:<tag>
```

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>Isaac-GR00T をインストールする</h4>

GR00T のソースコードを git clone してインストールします：

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T.git
cd Isaac-GR00T
pip install --upgrade setuptools
pip install -e .[thor]
```

GR00T は LeRobot フレームワークで収集したデータセットと完全に互換性があります。GR00T モデルのファインチューニング用にデータセットを準備するには、前の「**データ収集**」セクションを参照してください。

  </div>
</section>

</div>

### モデルファインチューニング（オプション）

:::warning
NVIDIA BrevでGR00T N1.5のファインチューニングを既に実行している場合は、Thor上でこのステップをスキップできます。
:::

**ファインチューニングプロセスは、提供されたクラウド訓練プラットフォームまたはThor上のDockerコンテナ内で直接実行できます**。

<Tabs>
<TabItem value="hub-weights" label="Hugging Face">

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

</TabItem>
<TabItem value="local" label="ローカルの重み">

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

</TabItem>
</Tabs>

`--dataset-path`は、SO-ARMから収集されたデータのファイルパスです。

:::note
デフォルトのファインチューニング設定には約25GのVRAMが必要です。十分なVRAMがない場合は、gr00t_finetune.pyスクリプトに`--no-tune_diffusion_model`フラグを追加してみてください。
:::

### GR00T N1.5での推論実行

最適なパフォーマンスを実現するために、ファインチューニングされたGR00Tモデルをデプロイする際は、データ収集時に使用された実世界のセットアップを可能な限り忠実に再現することを推奨します。これは、モデルの汎化能力が限定的であるためです。
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/deploy.jpg" width="400" alt="GR00T の実機推論に使う SO-ARM の作業環境" />
</div>

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>推論サービスを起動する</h4>

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
  <img src="https://files.seeedstudio.com/wiki/other/deploy1.png" width="600" alt="GR00T 推論サービスの起動ログ" />
</div>

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>同じコンテナでもう一つのシェルを開く</h4>

別のターミナルを開き、`<container-id>` を実行中のコンテナ ID に置き換えてください。

```bash
sudo docker exec -it <container-id> /bin/bash
```

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>アームクライアントを起動する</h4>

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
  <img src="https://files.seeedstudio.com/wiki/other/deploy2.png" width="600" alt="SO-ARM 推論クライアントの起動ログ" />
</div>

:::tip
クライアントプロセスの初回実行時には、アームのサーボを校正する必要があります。校正プロセスは前述の通りです。

適切なテレオペレーションと推論動作を確保するため、各関節が可動域全体を動くことを確認してください。
:::

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">
    <h4>実機推論を確認する</h4>

すべてが設定されると、GR00T N1.5をJetson AGX Thor上に正常にデプロイできます。システムとハードウェア環境は、完全な推論をサポートすることが確認されました：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/123.gif" width="600" alt="Thor 上で GR00T 推論を実行する SO-ARM" />
</div>

  </div>
</section>

</div>

## FAQ

<details className="rebot-demo-details">
<summary>Brev CLI ツールがクラウド訓練プラットフォームで動作しない？</summary>

これは多くの場合、ネットワークの問題が原因です。
ローカルのUbuntuホストにBrev CLIをインストールしてログインし、ローカルターミナルからSSHを使用してクラウドインスタンスに接続を試みてください。

</details>

<details className="rebot-demo-details">
<summary>訓練プラットフォームにデータをアップロードするには？</summary>

以下のコマンドを使用してください：`scp <local-file-path> <brev-instance-name>:<remote-file-path>`、例：`scp -r ./record_2_cameras/ gr00t-trainer:/home/ubuntu/Datasets`

</details>

<details className="rebot-demo-details">
<summary>インストール開始後に Thor の画面が黒くなる</summary>

以前に使用またはセットアップされたJetson AGX Thor Developer KitでJetsonインストールUSBスティックを使用する場合、`UEFIセットアップメニュー`でSoC Display Hand-Offを有効にする必要があります。
実際には、この間もバックグラウンドでフラッシュが続行されており、しばらくするとUbuntuデスクトップが表示されます。

</details>

<details className="rebot-demo-details">
<summary>モニターに映像出力がない（KVM 経由で接続）</summary>

一部のKVMスイッチ/デバイスは、Jetson AGX Thor Developer Kitからの映像出力を適切に処理できないことが知られています。モニターをJetson AGX Thor Developer Kitに直接接続してください。

</details>

<details className="rebot-demo-details">
<summary>Thor の書き込み後、その後の起動で HDMI が信号なしになることがある</summary>

効果的であることが証明されている回避策は、表示出力をDisplayPort（DP）コネクタに切り替えることです。

</details>

<details className="rebot-demo-details">
<summary>Thor イメージの書き込み中にキーボード入力が検出されない</summary>

フラッシュ中は有線キーボードの使用を推奨します。ワイヤレスキーボードは、Thorフラッシュプロセス中に互換性が制限される場合があります。

</details>

<details className="rebot-demo-details">
<summary>GR00T のクラウドファインチューニングで “GPU not supported” と表示される</summary>

GR00Tのクラウドファインチューニングには、`Ampereアーキテクチャ`より古いGPUを使用しないでください（例：RTX A6000またはGeForce RTX 4090）。V100（Volta）はGR00Tの訓練やファインチューニングには対応していません。

</details>

<details className="rebot-demo-details">
<summary>ロボットアームコントローラーボードのシリアルデバイス名が <code>/dev</code> に表示されない</summary>

標準のThorシステムには`CH34x`ドライバが含まれていません。不足している場合は、以下からインストールしてください：
https://github.com/juliagoda/CH341SER

</details>

<details className="rebot-demo-details">
<summary>Thor の Type-C ポートが外部ハブを認識しない</summary>

ThorのType-C経由で外部ハブを使用するには、QSFP28コネクタに最も近いType-Cポートに接続してください。（両方のType-Cポートが電力を供給しますが、指定されたポートのみがハブを確実にサポートします。）
<div align="center"> <img src="https://files.seeedstudio.com/wiki/other/thor-typec.png" style={{height: 'auto', maxHeight: 200}} alt="外部 USB ハブを接続する Thor の Type-C ポート" /> </div>

</details>

<details className="rebot-demo-details">
<summary>キャプチャカードで書き込むと、後でユーザーパスワードが間違っていると表示される</summary>

フラッシュ中にキャプチャカードデスクトップを使用する場合、キーボード入力のバグが発生する可能性があります（入力が入力内容と一致しない）。設定時にユーザーパスワードを再確認してください。

</details>

<details className="rebot-demo-details">
<summary>Thor のデバッグポートはどこにある？</summary>

ThorのType-Cデバッグポートは磁気カバーの下に隠れています。複数のシリアルデバイスノードが作成される場合があります。シリアル経由でThorにログインするには、最小のインデックスのものを使用してください。

</details>

<details className="rebot-demo-details">
<summary>GR00T イメージで LeRobot スクリプトを実行して ACT を推論できない</summary>

Python 3.12環境で`ACT`推論にLeRobot APIを呼び出すことは推奨しません。`Calibration`と`find port`スクリプトは問題ありません。Ubuntu 24はローカルでデフォルトでPython 3.12を使用することに注意してください。

</details>

<details className="rebot-demo-details">
<summary>Thor で GPU SM 使用率を確認するには？</summary>

以下を実行してください：
```bash
nvidia-smi dmon -s puc
```  
出力の`sm`列を確認してください。

</details>

<details className="rebot-demo-details">
<summary>ロボットアームドライバーのシリアルポートからデータを読み取れない</summary>

SO-ARMドライバーボードの前にカメラを接続しないでください。そうすると、シリアルデバイスマッピングが正しくなくなる可能性があります。また、シリアルポートの権限が付与されていることを確認してください。

</details>

## 参考文献

- https://developer.nvidia.com/embedded/jetpack
- https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

</div>
