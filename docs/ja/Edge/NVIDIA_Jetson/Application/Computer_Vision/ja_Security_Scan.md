---
description: セキュリティX線スキャンナイフ検出
title: セキュリティX線スキャンナイフ検出
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Security_Scan
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# ナイフ検出：reComputerベースのTriton Inference Serverに展開されたオブジェクト検出モデル

<iframe width={560} height={315} src="https://www.youtube.com/embed/niS0TLzyn-s" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

セキュリティチェックは、乗客と交通部門の安全を考慮した安全警報であり、危険を遠ざけ、通常空港、鉄道駅、地下鉄駅などで適用されています。既存のセキュリティ検査分野では、セキュリティ検査機が公共交通機関の入場通路に配備されています。一般的に、複数のデバイスが同時に動作する必要があります。

それにもかかわらず、セキュリティ検査中に検出されたオブジェクトの重複により、X線画像における禁止物品の検出性能は依然として理想的ではありません。この問題に対して、Triton Interface Serverのde-occlusionモジュールに基づいて、X線画像に禁止物品検出アルゴリズムを展開することで、より良い方法を実行できます。

したがって、[Yanlu Wei, Renshuai Tao et al.](https://arxiv.org/abs/2004.08656)のおかげで、[reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)にDeep Learningモデルを展開し、Raspberry PiとreComputer J1010で禁止物品（ナイフ）を検出できる基本的なプロジェクトを提供します。ここでは、1台のreComputer J1010を推論サーバーとして使用し、2台のRaspberry Piを画像送信のセキュリティ検査機のシミュレーションとして使用します。[reComputer 1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html)、[reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html)、[reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html)、[Nvidia Jetson AGX Xavier](https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html)もすべてサポートされています。

## はじめに

[Triton Inference Server](https://developer.nvidia.com/nvidia-triton-inference-server)は、CPUとGPUの両方に最適化されたクラウドおよびエッジ推論ソリューションを提供します。Tritonは、リモートクライアントがサーバーによって管理されているモデルの推論を要求できるHTTP/RESTおよびGRPCプロトコルをサポートしています。ここでは、検出モデルが展開されるローカルサーバーとしてTriton（Triton Inference Server）を使用します。

### ハードウェア

#### 必要なハードウェア

このプロジェクトで必要なデバイスは以下の通りです：

- [Raspberry Pi 4B](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM-4-p-4898.html)*2
- [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)
- HDMIディスプレイスクリーン、マウス、キーボード
- PC

#### ハードウェアセットアップ

2台のRaspberry PiとreComputerの電源を入れ、すべて**同じインターネット**環境下にある必要があります。このプロジェクトでは、ほとんどの場合セキュリティ検査機が複数のデバイスで使用されるため、2台のRaspberry piを使用してセキュリティ機械の動作をシミュレートします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_23.png" /></div>

1台のRaspberry Piでもこのプロジェクトに適用できます。ただし、2つのデバイスでの同時ナイフ検出デモンストレーションは、Triton Inference Serverのより良い動的バッチング機能を提供できます。次の説明では、Raspberry PiとreComputer J1010でソフトウェアをセットアップする方法を紹介します。

### ソフトウェア

ここでは[X線画像データセット](https://drive.google.com/file/d/12moaa-ylpVu0KmUCZj_XXeA5TxZuCQ3o/view)を**入力データ**として使用し、**Raspberry Pi**に配置します。その後、reComputerは処理された推論結果をRaspberry Piに出力します。最終的に、Raspberry Piが最終作業を完了し、画面に表示します。つまり、推論モデルの最後の層がRaspberry Piに展開されます。

#### Raspberry Piのセットアップ

ここでは、Raspberry Piに必要なソフトウェアをセットアップする方法を示します。

**ステップ1.** [公式ウェブサイト](https://www.raspberrypi.com/documentation/computers/getting-started.html#using-network-installation)からRaspbian Busterシステムと基本設定をインストールします。このプロジェクトでは、RASPBERRY PI OS（64ビット）をオペレーティングシステムとして使用します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_1.png" /></div>

**ステップ2.** Raspberry Pi SSHポートを設定します（オプション）。

環境を展開する前に、Raspberry Pi SSHポートを開き、PCの[SSHインターフェース](https://wiki.seeedstudio.com/ja/remote_connect/)を使用してリモートで呼び出すことができます。

> 注意：PCとRaspberry Piが同じLAN下にあることを確認してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_7.png" /></div>

**ステップ3.** Python環境を設定します。

Raspberry Piに推論モデル用の必要な環境として**Python、PyTorch、Tritonclient、TorchVision**、および画像表示用として**OpenCV**を展開する必要があります。以下の手順を提供します：

**Python**

`python –V`を実行し、Pythonバージョンが3.9.2であることを確認できます。Pythonバージョン3.9.2に対応するバージョンのPyTorch、Torchclient、TorchVisionをインストールする必要があります。ダウンロードとインストールについては[こちら](https://www.python.org/downloads/)を参照してください。

**PyTorch**

Pythonバージョンが正しい場合、Pytorchをインストールできます。

>注意：Pytorchをインストールする前に、Raspbianバージョンを確認する必要があります。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_10.png" /></div>

以下のコマンドを実行してPytorchをインストールします：

```python
# get a fresh start
sudo apt-get update
sudo apt-get upgrade

# install the dependencies
sudo apt-get install python3-pip libjpeg-dev libopenblas-dev libopenmpi-dev libomp-dev

# above 58.3.0 you get version issues
sudo -H pip3 install setuptools==58.3.0
sudo -H pip3 install Cython

# install gdown to download from Google drive
sudo -H pip3 install gdown

# Buster OS
# download the wheel
gdown https://drive.google.com/uc?id=1gAxP9q94pMeHQ1XOvLHqjEcmgyxjlY_R
# install PyTorch 1.11.0
sudo -H pip3 install torch-1.11.0a0+gitbc2c6ed-cp39-cp39-linux_aarch64.whl
# clean up
rm torch-1.11.0a0+gitbc2c6ed-cp39-cp39m-linux_aarch64.whl
```

インストールが成功した後、`python`を**起動してから**以下のコマンドでPyTorchを確認できます：

```python
import torch as tr
print(tr.__version__)
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_11.png" /></div>

>注意: Raspberry Pi 4用のPyTorchホイールは[https://github.com/Qengineering/PyTorch-Raspberry-Pi-64-OS](https://github.com/Qengineering/PyTorch-Raspberry-Pi-64-OS)で見つけることができます

**Tritonclient**

`pip3 install tritonclient[all]`を実行してTritonclientをダウンロードできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_9.png" /></div>

**TorchVision**

Pytorchがインストールされた後、TorchVisionのインストールに移ることができます。以下がコマンドです：

```python
# download the wheel
gdown https://drive.google.com/uc?id=1oDsJEHoVNEXe53S9f1zEzx9UZCFWbExh
# install torchvision 0.12.0
sudo -H pip3 install torchvision-0.12.0a0+9b5a3fe-cp39-cp39-linux_aarch64.whl
# clean up
rm torchvision-0.12.0a0+9b5a3fe-cp39-cp39-linux_aarch64.whl
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_12.png" /></div>

**OpenCV**

OpenCVをインストールするために、直接`pip3 install opencv-python`を実行できます：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_13.png" /></div>

### reComputer J1010のセットアップ

このプロジェクトでは、Triton Inference ServerをreComputer J1010にデプロイします。訓練されたモデルのインタラクティブ性とデプロイメントの利便性を向上させるために、モデルを**ONXX形式**に変換します。

**ステップ1.** reComputer J1010に[Jetpack 4.6.1をインストール](https://wiki.seeedstudio.com/ja/reComputer_J1010_J101_Flash_Jetpack/)します。

**ステップ2.** "home/server/docs/examples/model_repository"に新しいフォルダ"opi/1"を作成します。そして、訓練済みで変換された[model.onnx](https://drive.google.com/file/d/1RcHK_gthCXHsJLeDOUQ6c3r0RlAUgRfV/view?usp=sharing)をダウンロードして、"1"フォルダに配置します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_15.jpg" /></div>

>別の汎用サーバーが必要な場合は、以下の手順を実行できます。

新しいターミナルを開いて実行します

```python
git clone https://github.com/triton-inference-server/server
cd ~/server/docs/examples
sh fetch_models.sh
```

**ステップ 3.** JetPack 4.6.1用のTritonのリリースをインストールします。これは添付のtarファイルで提供されています：[tritonserver2.21.0-jetpack5.0.tgz](https://github.com/triton-inference-server/server/releases/download/v2.19.0/tritonserver2.19.0-jetpack4.6.1.tgz)。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_16.png" /></div>

ここのtarファイルには、Tritonサーバーの実行ファイルと共有ライブラリが含まれており、C++およびPythonクライアントライブラリと例も含まれています。JetPackでのTritonのインストールと使用方法の詳細については、[こちら](https://github.com/triton-inference-server/server/blob/r22.04/docs/jetson.md)を参照してください。

**ステップ 4.** 以下のコマンドを実行します：

```python

mkdir ~/TritonServer && tar -xzvf tritonserver2.19.0-jetpack4.6.1.tgz -C ~/TritonServer
cd ~/TritonServer/bin
./tritonserver --model-repository=/home/seeed/server/docs/examples/model_repository --backend-directory=/home/seeed/TritonServer/backends --strict-model-config=false --min-supported-compute-capability=5.3
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_17.png" /></div>

これで、すべての準備が整いました。

## プログラムの実行

必要な環境がすべてデプロイされたので、以下の手順に従ってプロジェクトを実行できます。

**ステップ 1.** モデルと関連ファイルをダウンロードします。

1. GitHubからモジュールをクローンします。

新しいターミナルを開いて実行します：

```python
git clone https://github.com/LemonCANDY42/Seeed_SMG_AIOT.git
cd Seeed_SMG_AIOT/
git clone https://github.com/LemonCANDY42/OPIXray.git
```

2. このアルゴリズム「DOAM.pth」の訓練済み重みを保存するための新しいフォルダ「weights」を作成します。[重みファイル](https://files.seeedstudio.com/wiki/SecurityCheck/DOAM.pth.zip)をダウンロードして実行してください：

- `cd OPIXray/DOAM`
- `mkdir weights`

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_19.png" /></div>

3. [X線画像データセット](https://drive.google.com/file/d/12moaa-ylpVu0KmUCZj_XXeA5TxZuCQ3o/view?usp=sharing)を保存するための新しい「Dataset」フォルダを作成します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_20.png" /></div>

**ステップ2.** 推論モデルの実行。

`python OPIXray_grpc_image_client.py -u 192.168.8.230:8001 -m opi Dataset`を実行してください

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_21.png" /></div>

結果は以下の図のように表示されます：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan22.jpg" /></div>

## トラブルシューティング

> Tritonサーバーを起動する際に、以下のエラーが発生する場合があります：

>1. libb64.so.0dのエラーが発生した場合、以下を実行してください：
`sudo apt-get install libb64-0d`

>2. libre2.so.2のエラーが発生した場合、以下を実行してください：
`sudo apt-get install libre2-dev`

>3. エラー: creating server: Internal - failed to load all modelsが発生した場合、以下を実行してください：
`--exit-on-error=false`

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

