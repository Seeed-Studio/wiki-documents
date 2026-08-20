---
description: 学習からデプロイまでの YOLOv8
title: YOLOv8 物体検出モデルの学習とデプロイ
keywords:
  - YOLOv8
  - we2
  - 物体検出
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ma_deploy_yolov8
last_update:
  date: 04/02/2024
  author: Jack Mu
createdAt: '2024-04-07'
updatedAt: '2025-07-11'
url: https://wiki.seeedstudio.com/ja/ma_deploy_yolov8/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# YOLOv8 物体検出モデルをデプロイする

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/sscma/static/detection_person_yolov8.png" style={{width:600, height:'auto'}}/></div>

この Wiki では、公式の YOLOv8 物体検出モデルの学習方法と、学習済みモデルを Grove Vision AI (V2) デバイスまたは `XIAO ESP32S3` デバイスにデプロイする方法を紹介します。

## データセットの準備

データセットには [roboflow](https://universe.roboflow.com/) プラットフォームの使用を推奨します。このプラットフォームではデータセットのアノテーションや各種データ拡張戦略を実行でき、複数のデータセット形式でのエクスポートをサポートしています。

## YOLOv8 コマンドラインツールのインストール

- 既に `python` 環境と `pip` パッケージ管理ツールがあり、かつ python>=3.8 であることを前提とします。

<Tabs>

<TabItem value="pip installation" label="pip">

`ultralytics` パッケージをインストールします。`pip install -U ultralytics` を実行してもかまいません。`ultralytics` パッケージの詳細については Python Package Index (PyPI) の [https://pypi.org/project/ultralytics/](https://pypi.org/project/ultralytics/) を参照してください。

```bash
# Install using pip
pip install ultralytics==8.2.8
# Chinese users can use mirror acceleration
# pip install ultralytics==8.2.8 -i https://pypi.tuna.tsinghua.edu.cn/simple
```

</TabItem>

<TabItem value="conda installation" label="conda">

`Conda` は `pip` に代わるパッケージマネージャーであり、インストールにも使用できます。詳細は Anaconda の [https://anaconda.org/conda-forge/ultralytics](https://anaconda.org/conda-forge/ultralytics) を参照してください。`conda` パッケージを更新するための `Ultralytics` feedstock リポジトリは [https://github.com/conda-forge/ultralytics-feedstock/](https://github.com/conda-forge/ultralytics-feedstock/) にあります。

```bash
# Install using conda
conda install -c conda-forge ultralytics=8.2.8
```

</TabItem>

<TabItem value="Git installation" label="Git">

開発への参加に興味がある場合や、最新のソースコードで実験したい場合は、`ultralytics` をクローンしてください。クローン後、そのディレクトリに移動し、`-e` パラメータを使用して開発者モードでパッケージをインストールします。

```bash
# Clone the official repository
git clone -b v8.2.8 https://github.com/ultralytics/ultralytics

# Go into the cloned folder
cd ultralytics

# Install in developer mode
pip install -e .
```

</TabItem>

</Tabs>

`Tips:` YOLOv8 のコードに詳しくない場合は、pip または conda を使用してインストールすることを推奨します。

- `yolo` コマンドラインツールが正しくインストールされているかどうかは、バージョン確認コマンドでテストできます。

```bash
# version query
yolo -v
```

## 学習

- まず、ダウンロードしたデータセットのフォルダに移動します

- 次のコマンドを実行してモデルの学習を開始します

```bash
yolo train detect model=yolov8n.pt data=./data.yaml imgsz=192
```

## モデルを tflite にエクスポートする

- 学習後、モデルは `runs/train/exp*/weights/` フォルダ内に保存されます。モデルの評価指標が要件を満たしていることを確認してください。
- 次のコマンドを使用して `tflite` モデルをエクスポートします

```bash
yolo export model=${your model path}  format=tflite imgsz=192 int8
```

- その後、カレントフォルダの下に `yolov8n_saved_model` フォルダが生成され、その中に `yolov8n_full_integer_quant.tflite` モデルファイルが含まれます。このモデルファイルは `Grove Vision AI(V2)` または `XIAO ESP32S3` デバイスにデプロイできます。

### モデルグラフの最適化

- Grove Vision AI (V2) は vela で最適化されたモデルをサポートしており、モデル推論を高速化することもできます。まず、次のコマンドを実行して vela コマンドラインツールをインストールします（`XIAO ESP32S3` デバイスはまだ非対応です）

```bash

pip3 install ethos-u-vela
```

- 次に、[download](https://files.seeedstudio.com/sscma/configs/vela_config.ini) から `vela` 関連の設定ファイルをダウンロードするか、以下の内容をファイルにコピーして `vela_config.ini` という名前で保存します

```bash
; file: my_vela_cfg.ini ; ----------------------------------------------------------------------------- 
; Vela configuration file ; ----------------------------------------------------------------------------- 
; System Configuration 

; My_Sys_Cfg 
[System_Config.My_Sys_Cfg] 
core_clock=400e6 
axi0_port=Sram 
axi1_port=OffChipFlash 
Sram_clock_scale=1.0 
Sram_burst_length=32 
Sram_read_latency=16 
Sram_write_latency=16 
Dram_clock_scale=0.75 
Dram_burst_length=128 
Dram_read_latency=500 
Dram_write_latency=250 
OnChipFlash_clock_scale=0.25 
OffChipFlash_clock_scale=0.015625 
OffChipFlash_burst_length=32 
OffChipFlash_read_latency=64 
OffChipFlash_write_latency=64 
; ----------------------------------------------------------------------------- 
; Memory Mode 
; My_Mem_Mode_Parent 
[Memory_Mode.My_Mem_Mode_Parent] 
const_mem_area=Axi1 
arena_mem_area=Axi0 
cache_mem_area=Axi0
```

- 最後に、次のコマンドを使用してグラフを最適化します

```bash
vela --accelerator-config ethos-u55-64 \ 
    --config vela_config.ini \
    --system-config My_Sys_Cfg \
    --memory-mode My_Mem_Mode_Parent \
    --output-dir ${Save path of the optimized model} \
    ${The path of the tflite model that needs to be optimized}
```

実行後、`--output-dir` で指定したパスにグラフ最適化済みの tflite モデルが生成されます。

## デプロイ

- デプロイする必要があるモデルファイルは、上でエクスポートした `tflite` ファイルです。以下のチュートリアルに従って、モデルファイルをターゲットデバイスに書き込むことができます。

- 学習済み tflite モデルをデバイスに書き込むには、弊社の Web ツールを使用することを強く推奨します。詳細な操作手順は [Deployment Tutorial](https://wiki.seeedstudio.com/ja/ModelAssistant_Deploy_Overview/) に記載されています。

`Note:` `ESP32S3` デバイスは `vela` グラフ最適化後のモデルデプロイをサポートしていないため、モデルを `XIAO ESP32S3` デバイスにデプロイしたい場合は `tflite` モデルのグラフ最適化を行う必要はありません。
