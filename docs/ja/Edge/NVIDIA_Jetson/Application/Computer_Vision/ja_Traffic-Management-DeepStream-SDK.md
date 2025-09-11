---
description: 交通管理 DeepStream SDK
title: 交通管理 DeepStream SDK
keywords:
  - Edge
  - reComputer アプリケーション
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Traffic-Management-DeepStream-SDK
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # Disqus 用

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# DeepStream SDK を使用したインテリジェント交通管理システム

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif" /></div>

## 概要

都市が日々成長するにつれて、道路上の車両の数も増加しています。その結果、交通渋滞も急速に増加し、国の発展に大きな影響を与える可能性があります。この Wiki では、AI ビジョンを使用してこの問題に対する解決策を提案します。各信号機に設置された既存の CCTV カメラからストリーミングビデオをキャプチャし、物体検出を実行してすべての車両を検出し、車両の混雑状況に応じて信号機を制御します。さらに、このデータを車両のメーカーや歩行者の数とともにデータベースに送信し、さらなる分析を行うことができます。

この AI ビジョンアプリケーションでは、NVIDIA の DeepStream SDK を使用し、NVIDIA Jetson デバイスでエッジ推論を実行します。また、このタスクには [NVIDIA NGC Model Catalog](https://catalog.ngc.nvidia.com/models) から事前学習済みモデルを使用し、展開プロセスを迅速かつ簡単にします。NVIDIA NGC Model Catalog では、他の多くの異なるアプリケーション向けの多数の事前学習済みモデルも提供されています。

## DeepStream SDK とは？

NVIDIA の [DeepStream SDK](https://developer.nvidia.com/deepstream-sdk) は、AI ベースのマルチセンサー処理、ビデオ、オーディオ、画像理解のための完全なストリーミング分析ツールキットを提供します。DeepStream は、C/C++、Python での開発や、Graph Composer を使用したローコードのグラフィカルプログラミングなど、開発者に柔軟性を提供します。DeepStream には、さまざまなハードウェアアクセラレーションプラグインと拡張機能が付属しています。

<div align="center"><img width={1000} src="https://developer.nvidia.com/sites/default/files/akamai/ds-workflow.png" /></div>

DeepStream は開発者と企業の両方を対象としており、SSD、YOLO、FasterRCNN、MaskRCNN などの最先端の物体検出およびセグメンテーションモデルを含む、広範な AI モデルサポートを提供します。また、DeepStream にカスタム関数やライブラリを統合することも可能です。

DeepStream は、迅速なプロトタイピングから本格的な生産レベルのソリューションまでの柔軟性を提供します。また、推論パスを選択することも可能です。NVIDIA Triton Inference Server へのネイティブ統合により、PyTorch や TensorFlow などのネイティブフレームワークでモデルを展開して推論を行うことができます。NVIDIA TensorRT を使用して、高スループットの推論を実現し、マルチ GPU、マルチストリーム、バッチ処理のサポートオプションを利用することで、可能な限り最高のパフォーマンスを達成できます。

## 対応ハードウェア

DeepStream SDK は以下のハードウェアをサポートしています：

- Seeed 製キット:

  - Jetson Nano を搭載した reComputer J1010
  - Jetson Nano を搭載した reComputer J1020
  - Jetson Xavier NX 8GB を搭載した reComputer J2011
  - Jetson Xavier NX 16GB を搭載した reComputer J2012

- Seeed 製キャリアボード:

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 キット
  - A203 キャリアボード
  - A203 (バージョン 2) キャリアボード
  - A205 キャリアボード
  - A206 キャリアボード

- NVIDIA 製公式開発キット:

  - NVIDIA® Jetson Nano 開発キット
  - NVIDIA® Jetson Xavier NX 開発キット
  - NVIDIA® Jetson AGX Xavier 開発キット
  - NVIDIA® Jetson TX2 開発キット
  - NVIDIA® Jetson AGX Orin 開発キット

- NVIDIA 製公式 SoM:

  - NVIDIA® Jetson Nano モジュール
  - NVIDIA® Jetson Xavier NX モジュール
  - NVIDIA® Jetson TX2 NX モジュール
  - NVIDIA® Jetson TX2 モジュール
  - NVIDIA® Jetson AGX Xavier モジュール

## 前提条件

- 上記のいずれかの Jetson デバイスで JetPack を実行
- キーボードと HDMI ディスプレイ
- Windows、Linux、または Mac を搭載したホスト PC
- Jetson デバイスでサポートされている USB ウェブカメラまたは MIPI CSI カメラ

## はじめに

ここでは、[DashCamNet モデル](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/dashcamnet) を使用します。このモデルは主要な検出器として機能し、対象物を検出します。そして、検出された各車両に対して、[VehicleTypeNet モデル](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/vehicletypenet) と [VehicleMakeNet モデル](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/vehiclemakenet) がそれぞれ車両の種類とメーカーを判別する二次分類器として機能します。VehicleTypeNet は以下を分類します：クーペ、セダン、SUV、バン、大型車両、トラック。一方、VehicleMakeNet は以下の車両メーカーを分類します：Acura、Audi、BMW、Chevrolet、Chrysler、Dodge、Ford、GMC、Honda、Hyundai、Infiniti、Jeep、Kia、Lexus、Mazda、Mercedes、Nissan、Subaru、Toyota、Volkswagen。

> 以下のワークフローは、[reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html) で [JetPack 4.6.1](https://developer.nvidia.com/embedded/jetpack-sdk-461) を実行してテストされています。

**ステップ 1:** Jetson デバイスに **SDK コンポーネント** と **DeepStream SDK** が正しくインストールされていることを確認してください。（インストールの参考として [この wiki](https://wiki.seeedstudio.com/ja/reComputer_J1020_A206_Flash_JetPack/) を参照してください）

**注意:** すべての SDK コンポーネントと DeepStream SDK をインストールするには、**NVIDIA SDK Manager** を使用することを推奨します。

**ステップ 2:** 設定ファイルをダウンロードします。

```sh
git clone https://github.com/NVIDIA-AI-IOT/deepstream_reference_apps.git
cd deepstream_reference_apps/deepstream_app_tao_configs/
sudo cp -a * /opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/
```

**ステップ 3:** モデルをダウンロードします。

```sh
sudo apt install -y wget zip
cd /opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/
sudo ./download_models.sh
```

**ステップ 4:** **deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt** を開きます。

```sh
vi deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt
```

**ステップ 5:** [sink0] セクションで **sync=1** を **sync=0** に変更します。

```sh
[sink0]
enable=1
#Type - 1=FakeSink 2=EglSink 3=File
type=2
sync=0
source-id=0
gpu-id=0
```

**ステップ 6:** [primary-gie] セクションで model-engine-file を **../../models/tao_pretrained_models/dashcamnet/resnet18_dashcamnet_pruned.etlt_b1_gpu0_fp16.engine** に変更します。

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

**ステップ 7:** [secondary-gie0] セクションで model-engine-file を **../../models/tao_pretrained_models/vehiclemakenet/resnet18_vehiclemakenet_pruned.etlt_b4_gpu0_fp16.engine** に変更します。

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

**ステップ 8:** [secondary-gie1] セクションで model-engine-file を **../../models/tao_pretrained_models/vehicletypenet/resnet18_vehicletypenet_pruned.etlt_b4_gpu0_fp16.engine** に変更します。

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

**ステップ 9:** カメラ、キーボード、HDMI ディスプレイを Jetson デバイスに接続し、以下を実行します。

```sh
sudo deepstream-app -c deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt
```

接続された HDMI ディスプレイで以下のようにデモを視覚化できます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif" /></div>

**/opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/** にある他のデモを試したい場合は、以下のように実行するだけです。

```sh
sudo deepstream-app -c deepstream_app_source1_$MODEL.txt
```

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験を提供するために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>