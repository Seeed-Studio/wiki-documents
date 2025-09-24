---
description: 交通管理 DeepStream SDK
title: 交通管理 DeepStream SDK
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Traffic-Management-DeepStream-SDK
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# DeepStream SDK を使用したインテリジェント交通管理システム

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif" /></div>

## 概要

都市が日々成長するにつれて、道路上の車両数も増加しています。このため、交通渋滞も急速に増加し、これが国の発展に大きな影響を与える可能性があります。このwikiでは、AI視覚技術を使用してこの問題の解決策を提案します。すべての信号機に既に配備されているCCTVカメラからのストリーミング映像を取得し、物体検出を実行してすべての車両を検出し、車両の混雑状況に応じて信号機を制御することができます。さらに、このデータは車両メーカーや歩行者数と共にデータベースに送信して、さらなる分析を行うことができます。

このAI視覚アプリケーションでは、NVIDIAのDeepStream SDKを使用し、NVIDIA Jetsonデバイス上でエッジ推論を実行します。また、デプロイメントプロセスを高速かつ簡単にするために、[NVIDIA NGC Model Catalog](https://catalog.ngc.nvidia.com/models)から事前訓練済みモデルを使用します。NVIDIA NGC Model Catalogは、他の多くの異なるアプリケーション向けにも多数の事前訓練済みモデルを提供しています。

## DeepStream SDKとは？

NVIDIAの[DeepStream SDK](https://developer.nvidia.com/deepstream-sdk)は、AIベースのマルチセンサー処理、ビデオ、オーディオ、画像理解のための完全なストリーミング分析ツールキットを提供します。DeepStreamは、開発者がC/C++、Pythonで開発するか、Graph Composerを使用したローコードグラフィカルプログラミングを使用するオプションを提供することで、開発の柔軟性をもたらします。DeepStreamには、さまざまなハードウェア加速プラグインと拡張機能が付属しています。

<div align="center"><img width={1000} src="https://developer.nvidia.com/sites/default/files/akamai/ds-workflow.png" /></div>

DeepStreamは開発者と企業の両方向けに構築されており、SSD、YOLO、FasterRCNN、MaskRCNNなどの最先端の人気物体検出・セグメンテーションモデルに対する広範なAIモデルサポートを提供します。DeepStreamにカスタム関数やライブラリを統合することも可能です。

Deepstreamは、迅速なプロトタイピングから完全な本格的ソリューションまでの柔軟性を提供します。また、推論パスを選択することもできます。NVIDIA Triton Inference Serverとのネイティブ統合により、推論のためにPyTorchやTensorFlowなどのネイティブフレームワークでモデルをデプロイできます。マルチGPU、マルチストリーム、バッチング サポートオプションを備えた高スループット推論にNVIDIA TensorRTを使用することで、可能な限り最高のパフォーマンスを実現できます。

## サポートされているハードウェア

DeepStream SDKは以下のハードウェアでサポートされています：

- Seeedのキット：

  - Jetson Nanoで構築されたreComputer J1010
  - Jetson Nanoで構築されたreComputer J1020
  - Jetson Xavier NX 8GBで構築されたreComputer J2011
  - Jetson Xavier NX 16GBで構築されたreComputer J2012

- Seeedのキャリアボード：

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 Kit
  - A203 Carrier Board
  - A203 (Version 2) Carrier Board
  - A205 Carrier Board
  - A206 Carrier Board

- NVIDIAの公式開発キット：

  - NVIDIA® Jetson Nano Developer Kit
  - NVIDIA® Jetson Xavier NX Developer Kit
  - NVIDIA® Jetson AGX Xavier Developer Kit
  - NVIDIA® Jetson TX2 Developer Kit
  - NVIDIA® Jetson AGX Orin Developer Kit

- NVIDIAの公式SoM：
  
  - NVIDIA® Jetson Nano module
  - NVIDIA® Jetson Xavier NX module
  - NVIDIA® Jetson TX2 NX module
  - NVIDIA® Jetson TX2 module
  - NVIDIA® Jetson AGX Xavier module

## 前提条件

- 上記のいずれかのJetsonデバイスでJetPackが動作していること
- キーボードとHDMIディスプレイ
- Windows、Linux、またはMacを搭載したホストPC
- USBウェブカメラまたはJetsonデバイスでサポートされているMIPI CSIカメラ

## はじめに

ここでは、主要な検出器として機能する[DashCamNetモデル](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/dashcamnet)を使用します。このモデルは対象オブジェクトを検出し、検出された各車両に対して[VehicleTypeNetモデル](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/vehicletypenet)と[VehicleMakeNetモデル](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/vehiclemakenet)が二次分類器として機能し、それぞれ車両のタイプとメーカーを判定します。VehicleTypeNetは以下を分類します：クーペ、セダン、SUV、バン、大型車両、トラック。一方、VehicleMakeNetは以下の車を分類します：Acura、Audi、BMW、Chevrolet、Chrysler、Dodge、Ford、GMC、Honda、Hyundai、Infiniti、Jeep、Kia、Lexus、Mazda、Mercedes、Nissan、Subaru、Toyota、Volkswagen。

> 以下のワークフローは、[JetPack 4.6.1](https://developer.nvidia.com/embedded/jetpack-sdk-461)を実行している[reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html)でテストされています

**ステップ1:** Jetsonデバイスに**SDKコンポーネント**と**DeepStream SDK**がすべて適切にインストールされていることを確認してください。（インストールの参考として[このwiki](https://wiki.seeedstudio.com/ja/reComputer_J1020_A206_Flash_JetPack/)を確認してください）

**注意:** すべてのSDKコンポーネントとDeepStream SDKのインストールには**NVIDIA SDK Manager**の使用を推奨します

**ステップ2:** 設定ファイルをダウンロードします

```sh
git clone https://github.com/NVIDIA-AI-IOT/deepstream_reference_apps.git
cd deepstream_reference_apps/deepstream_app_tao_configs/
sudo cp -a * /opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/
```

**ステップ 3:** モデルをダウンロードします

```sh
sudo apt install -y wget zip
cd /opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/
sudo ./download_models.sh
```

**ステップ 4:** **deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt** を開く

```sh
vi deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt
```

**ステップ5:** [sink0]の下で**sync=1**を**sync=0**に変更する

```sh
[sink0]
enable=1
#Type - 1=FakeSink 2=EglSink 3=File
type=2
sync=0
source-id=0
gpu-id=0
```

**ステップ 6:** [primary-gie] の下で、model-engine-file を **../../models/tao_pretrained_models/dashcamnet/resnet18_dashcamnet_pruned.etlt_b1_gpu0_fp16.engine** に変更します

```sh
[primary-gie]
enable=1
gpu-id=0
# Modify as necessary
model-engine-file=../../models/tao_pretrained_models/dashcamnet/resnet18_dashcamnet_pruned.etlt_b1_gpu0_fp16.engine
batch-size=1
#Required by the app for OSD, not a plugin property
bbox-border-color0=1;0;0;1
bbox-border-color1=0;1;1;1
bbox-border-color2=0;0;1;1
bbox-border-color3=0;1;0;1
gie-unique-id=1
config-file=config_infer_primary_dashcamnet.txt
```

**ステップ 7:** [secondary-gie0] の下で、model-engine-file を **../../models/tao_pretrained_models/vehiclemakenet/resnet18_vehiclemakenet_pruned.etlt_b4_gpu0_fp16.engine** に変更します

```sh
[secondary-gie0]
enable=1
model-engine-file=../../models/tao_pretrained_models/vehiclemakenet/resnet18_vehiclemakenet_pruned.etlt_b4_gpu0_fp16.engine
gpu-id=0
batch-size=4
gie-unique-id=4
operate-on-gie-id=1
operate-on-class-ids=0;
config-file=config_infer_secondary_vehiclemakenet.txt
```

**ステップ 8:** [secondary-gie1] の下で、model-engine-file を **../../models/tao_pretrained_models/vehicletypenet/resnet18_vehicletypenet_pruned.etlt_b4_gpu0_fp16.engine** に変更します

```sh
[secondary-gie1]
enable=1
model-engine-file=../../models/tao_pretrained_models/vehicletypenet/resnet18_vehicletypenet_pruned.etlt_b4_gpu0_fp16.engine
gpu-id=0
batch-size=4
gie-unique-id=5
operate-on-gie-id=1
operate-on-class-ids=0;
config-file=config_infer_secondary_vehicletypenet.txt
```

**ステップ 9:** カメラ、キーボード、HDMIディスプレイをJetsonデバイスに接続し、以下を実行します

```sh
sudo deepstream-app -c deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt
```

接続されたHDMIディスプレイで以下のようにデモを視覚化できるようになりました

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif" /></div>

**/opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/** 配下にある他のデモを試したい場合は、以下のように簡単に実行できます

```sh
sudo deepstream-app -c deepstream_app_source1_$MODEL.txt
```

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
