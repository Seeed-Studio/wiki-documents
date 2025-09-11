---
description: セキュリティX線スキャンナイフ検出
title: セキュリティX線スキャンナイフ検出
keywords:
  - Edge
  - reComputer アプリケーション
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Security_Scan
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # Disqus用

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# ナイフ検出: reComputer を基盤としたTriton推論サーバーにデプロイされた物体検出モデル

<iframe width={560} height={315} src="https://www.youtube.com/embed/niS0TLzyn-s" title="YouTube動画プレーヤー" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

セキュリティチェックは、乗客や輸送業界の安全を考慮した警報であり、危険を遠ざけるために通常空港、鉄道駅、地下鉄駅などで適用されます。既存のセキュリティ検査分野では、セキュリティ検査機が公共交通機関の入場通路に配置されています。一般的に、複数のデバイスが同時に動作する必要があります。

しかしながら、セキュリティ検査中に検出された物体が重なり合うため、X線画像での禁止物品の検出性能は依然として理想的ではありません。この問題に対処するために、Triton Interface Serverのデオクルージョンモジュールに基づいて、X線画像で禁止物品検出アルゴリズムをデプロイすることで、より良い結果を得ることができます。

したがって、[Yanlu Wei, Renshuai Tao et al.](https://arxiv.org/abs/2004.08656)の研究に基づき、禁止物品（ナイフ）を検出するDeep Learningモデルを[reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)にデプロイする基本プロジェクトを提供します。このプロジェクトでは、Raspberry PiとreComputer J1010を使用し、reComputer J1010を推論サーバーとして使用し、2台のRaspberry Piをセキュリティ検査機として画像を送信するシミュレーションを行います。[reComputer 1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html)、[reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html)、[reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html)、および[Nvidia Jetson AGX Xavier](https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html)もサポートされています。

## はじめに

[Triton Inference Server](https://developer.nvidia.com/nvidia-triton-inference-server)は、CPUとGPUの両方に最適化されたクラウドおよびエッジ推論ソリューションを提供します。TritonはHTTP/RESTおよびGRPCプロトコルをサポートしており、サーバーが管理する任意のモデルに対してリモートクライアントが推論を要求することができます。ここでは、Triton（Triton推論サーバー）をローカルサーバーとして使用し、検出モデルをデプロイします。

### ハードウェア

#### 必要なハードウェア

このプロジェクトで必要なデバイスは以下の通りです：

- [Raspberry Pi 4B](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM-4-p-4898.html)*2
- [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)
- HDMIディスプレイ画面、マウス、キーボード
- PC

#### ハードウェアセットアップ

2台のRaspberry PiとreComputerを電源オンにし、すべてが**同じインターネット**に接続されている必要があります。このプロジェクトでは、セキュリティ検査機が多くの場合複数のデバイスで使用されるため、2台のRaspberry Piを使用してセキュリティ機械の動作をシミュレーションします。そのため、両方の

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_23.png" /></div>

1台のRaspberry Piだけでもこのプロジェクトに適用可能です。しかし、2台のデバイスでの同時ナイフ検出のデモンストレーションは、Triton推論サーバーのより良い動的バッチ処理能力を提供できます。次の手順では、Raspberry PiとreComputer J1010にソフトウェアをセットアップする方法を紹介します。

### ソフトウェア

ここでは[X線画像データセット](https://drive.google.com/file/d/12moaa-ylpVu0KmUCZj_XXeA5TxZuCQ3o/view)を**入力データ**として使用し、これを**Raspberry Pi**に配置します。その後、reComputerが処理された推論結果をRaspberry Piに出力します。最後に、Raspberry Piが最終的な作業を完了し、画面に表示します。つまり、推論モデルの最終層がRaspberry Piにデプロイされます。

#### Raspberry Piのセットアップ

ここでは、Raspberry Piに必要なソフトウェアをセットアップする方法を示します。以下を含みます：

**ステップ1.** [公式ウェブサイト](https://www.raspberrypi.com/documentation/computers/getting-started.html#using-network-installation)からRaspbian Busterシステムをインストールし、基本設定を行います。このプロジェクトでは、RASPBERRY PI OS（64ビット）をオペレーティングシステムとして使用します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_1.png" /></div>

**ステップ2.** Raspberry PiのSSHポートを設定します（オプション）。

環境をデプロイする前に、Raspberry PiのSSHポートを開き、PC上で[SSHインターフェース](https://wiki.seeedstudio.com/ja/remote_connect/)を使用してリモートで呼び出すことができます。

> 注意：PCとRaspberry Piが同じLAN内にあることを確認してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_7.png" /></div>

**ステップ3.** Python環境を設定します。

推論モデルに必要な環境として**Python、PyTorch、Tritonclient、TorchVision**をデプロイし、画像表示には**OpenCV**を使用します。以下に手順を示します：

**Python**

`python –V`を実行してPythonバージョンが3.9.2であることを確認します。Pythonバージョン3.9.2に対応するPyTorch、Torchclient、TorchVisionをインストールする必要があります。[こちら](https://www.python.org/downloads/)を参照してダウンロードとインストールを行ってください。

**PyTorch**

Pythonバージョンが正しい場合、次にPyTorchをインストールします。

> 注意：PyTorchをインストールする前に、Raspbianのバージョンを確認する必要があります。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_10.png" /></div>

以下のコマンドを実行してPyTorchをインストールします：

```python
# 初期化
sudo apt-get update
sudo apt-get upgrade

# 依存関係をインストール
sudo apt-get install python3-pip libjpeg-dev libopenblas-dev libopenmpi-dev libomp-dev

# バージョン58.3.0以上ではバージョン問題が発生
sudo -H pip3 install setuptools==58.3.0
sudo -H pip3 install Cython

# Google Driveからダウンロードするためにgdownをインストール
sudo -H pip3 install gdown

# Buster OS
# ホイールをダウンロード
gdown https://drive.google.com/uc?id=1gAxP9q94pMeHQ1XOvLHqjEcmgyxjlY_R
# PyTorch 1.11.0をインストール
sudo -H pip3 install torch-1.11.0a0+gitbc2c6ed-cp39-cp39-linux_aarch64.whl
# クリーンアップ
rm torch-1.11.0a0+gitbc2c6ed-cp39-cp39m-linux_aarch64.whl
```

インストールが成功した後、`python`を起動した後に以下のコマンドでPyTorchを確認できます：

```python
import torch as tr
print(tr.__version__)
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_11.png" /></div>

>注意: Raspberry Pi 4用のPyTorchホイールは[こちら](https://github.com/Qengineering/PyTorch-Raspberry-Pi-64-OS)で見つけることができます。

**Tritonclient**

`pip3 install tritonclient[all]`を実行してTritonclientをダウンロードできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_9.png" /></div>

**TorchVision**

PyTorchがインストールされた後、TorchVisionのインストールに進むことができます。以下のコマンドを使用してください：

```python
# ホイールをダウンロード
gdown https://drive.google.com/uc?id=1oDsJEHoVNEXe53S9f1zEzx9UZCFWbExh
# torchvision 0.12.0をインストール
sudo -H pip3 install torchvision-0.12.0a0+9b5a3fe-cp39-cp39-linux_aarch64.whl
# クリーンアップ
rm torchvision-0.12.0a0+9b5a3fe-cp39-cp39-linux_aarch64.whl
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_12.png" /></div>

**OpenCV**

OpenCVをインストールするには、`pip3 install opencv-python`を直接実行できます：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_13.png" /></div>

### reComputer J1010 のセットアップ

このプロジェクトでは、reComputer J1010にTriton Inference Serverをデプロイします。トレーニング済みモデルのインタラクティブ性とデプロイの利便性を向上させるため、モデルを**ONNX形式**に変換します。

**ステップ 1.** [Jetpack 4.6.1をインストール](https://wiki.seeedstudio.com/ja/reComputer_J1010_J101_Flash_Jetpack/) reComputer J1010にインストールします。

**ステップ 2.** “home/server/docs/examples/model_repository”に新しいフォルダ“opi/1”を作成し、トレーニング済みで変換された[model.onnx](https://drive.google.com/file/d/1RcHK_gthCXHsJLeDOUQ6c3r0RlAUgRfV/view?usp=sharing)をダウンロードして“1”フォルダに配置します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_15.jpg" /></div>

>別の一般的なサーバーが必要な場合は、以下の手順を実行できます。

新しいターミナルを開き、以下を実行します：

```python
git clone https://github.com/triton-inference-server/server
cd ~/server/docs/examples
sh fetch_models.sh
```

**ステップ 3.** JetPack 4.6.1用のTritonリリースをインストールします。添付されたtarファイル：[tritonserver2.21.0-jetpack5.0.tgz](https://github.com/triton-inference-server/server/releases/download/v2.19.0/tritonserver2.19.0-jetpack4.6.1.tgz)を使用します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_16.png" /></div>

このtarファイルには、Tritonサーバーの実行ファイルと共有ライブラリ（C++およびPythonクライアントライブラリと例を含む）が含まれています。JetPack上でTritonをインストールおよび使用する方法についての詳細は[こちら](https://github.com/triton-inference-server/server/blob/r22.04/docs/jetson.md)を参照してください。

**ステップ 4.** 以下のコマンドを実行します：

```python

mkdir ~/TritonServer && tar -xzvf tritonserver2.19.0-jetpack4.6.1.tgz -C ~/TritonServer
cd ~/TritonServer/bin
./tritonserver --model-repository=/home/seeed/server/docs/examples/model_repository --backend-directory=/home/seeed/TritonServer/backends --strict-model-config=false --min-supported-compute-capability=5.3
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_17.png" /></div>

これで、すべての準備が整いました。

## プログラムの操作

必要な環境がすべて展開されているため、以下の手順に従ってプロジェクトを実行できます。

**ステップ 1.** モデルと関連ファイルをダウンロードします。

1. GitHubからモジュールをクローンします。

新しいターミナルを開き、以下を実行します:

```python
git clone https://github.com/LemonCANDY42/Seeed_SMG_AIOT.git
cd Seeed_SMG_AIOT/
git clone https://github.com/LemonCANDY42/OPIXray.git
```

2. 新しいフォルダ「weights」を作成し、このアルゴリズムの学習済み重み「DOAM.pth」を保存します。[重みファイル](https://files.seeedstudio.com/wiki/SecurityCheck/DOAM.pth.zip)をダウンロードし、以下を実行します:

- `cd OPIXray/DOAM`
- `mkdir weights`

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_19.png" /></div>

3. 新しい「Dataset」フォルダを作成し、[X線画像データセット](https://drive.google.com/file/d/12moaa-ylpVu0KmUCZj_XXeA5TxZuCQ3o/view?usp=sharing)を保存します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_20.png" /></div>

**ステップ 2.** 推論モデルを実行します。

以下を実行します:  
`python OPIXray_grpc_image_client.py -u 192.168.8.230:8001 -m opi Dataset`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_21.png" /></div>

結果は以下の図のように表示されます:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan22.jpg" /></div>

## トラブルシューティング

> Tritonサーバーを起動する際、以下のエラーが発生する可能性があります:

>1. libb64.so.0dに関するエラーが発生した場合、以下を実行してください:
`sudo apt-get install libb64-0d`

>2. libre2.so.2に関するエラーが発生した場合、以下を実行してください:
`sudo apt-get install libre2-dev`

>3. エラー: creating server: Internal - failed to load all modelsが発生した場合、以下を実行してください:
`--exit-on-error=false`

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>