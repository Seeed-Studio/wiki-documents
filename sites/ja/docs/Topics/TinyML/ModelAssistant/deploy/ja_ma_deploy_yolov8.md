---
description: YOLOv8のトレーニングからデプロイまで
title: YOLOv8物体検出モデルのトレーニングとデプロイ
keywords:
- YOLOv8
- we2 
- 物体検出
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ma_deploy_yolov8
last_update:
  date: 05/15/2025
  author: Jack Mu
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



# YOLOv8物体検出モデルのデプロイ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/sscma/static/detection_person_yolov8.png" style={{width:600, height:'auto'}}/></div>

このWikiでは、公式のYOLOv8物体検出モデルをトレーニングし、トレーニング済みモデルをGrove Vision AI (V2)デバイスまたは`XIAO ESP32S3`デバイスにデプロイする方法を紹介します。

## データセットの準備

データセットには[roboflow](https://universe.roboflow.com/)プラットフォームを使用することをお勧めします。このプラットフォームでは、データセットのアノテーションやデータ拡張戦略を実行でき、複数のデータセット形式のエクスポートをサポートしています。

## YOLOv8コマンドラインツールのインストール

- デフォルトでは、`python`環境と`pip`パッケージ管理ツールがすでにインストールされており、python>=3.8が必要です。

<Tabs>

<TabItem value="pip installation" label="pip">

`ultralytics`パッケージをインストールするには、`pip install -U ultralytics`を実行します。`ultralytics`パッケージの詳細については、Python Package Index (PyPI)をご覧ください: https://pypi.org/project/ultralytics/

```bash
# pipを使用してインストール
pip install ultralytics
# 中国のユーザーはミラーアクセラレーションを使用できます
# pip install ultralytics -i https://pypi.tuna.tsinghua.edu.cn/simple
```

</TabItem>

<TabItem value="conda installation" label="conda">

`Conda`は`pip`の代替パッケージマネージャーであり、インストールにも使用できます。詳細はAnacondaをご覧ください: [https://anaconda.org/conda-forge/ultralytics](https://anaconda.org/conda-forge/ultralytics)。`Ultralytics`のフィードストックリポジトリは、`conda`パッケージの更新用に [https://github.com/conda-forge/ultralytics-feedstock/](https://github.com/conda-forge/ultralytics-feedstock) にあります。

```bash
# condaを使用してインストール
conda install -c conda-forge ultralytics
```

</TabItem>

<TabItem value="Git installation" label="Git">

`ultralytics`をクローンします。開発に参加したい場合や、最新のソースコードを試したい場合は、リポジトリをご覧ください。クローン後、ディレクトリに移動し、`-e`パラメータを使用して開発者モードでパッケージをインストールします。

```bash
# 公式リポジトリをクローン
git clone https://github.com/ultralytics/ultralytics

# クローンしたフォルダに移動
cd ultralytics

# 開発者モードでインストール
pip install -e .
```

</TabItem>

</Tabs>

`ヒント:` YOLOv8のコードに詳しくない場合は、pipまたはcondaを使用してインストールすることをお勧めします。

- `yolo`コマンドラインツールが正常にインストールされたかどうかをテストするには、バージョン確認コマンドを使用できます。

```bash
# バージョン確認
yolo -v
```

## トレーニング

- まず、ダウンロードしたデータセットフォルダに移動します。

- 次のコマンドを実行してモデルのトレーニングを開始します。

```bash
yolo train detect model=yolov8n.pt data=./data.yaml imgsz=192
```

## tfliteモデルへのエクスポート

- トレーニング後、モデルは `runs/train/exp*/weights/` フォルダ内に保存されます。モデルの評価指標が要件を満たしていることを確認してください。
- 以下のコマンドを使用して `tflite` モデルをエクスポートします。

```bash
yolo export model=${your model path}  format=tflite imgsz=192 int8
```

- 実行後、現在のフォルダ内に `yolov8n_saved_model` フォルダが生成され、その中に `yolov8n_full_integer_quant.tflite` モデルファイルが含まれています。このモデルファイルは `Grove Vision AI(V2)` または `XIAO ESP32S3` デバイスにデプロイすることができます。

### モデルグラフの最適化

- Grove Vision AI (V2) は vela によって最適化されたモデルをサポートしており、モデル推論を高速化することができます。まず、以下のコマンドを実行して vela コマンドラインツールをインストールします（`XIAO ESP32S3` デバイスはまだサポートされていません）。

```bash
pip3 install ethos-u-vela
```

- 次に、[こちら](https://files.seeedstudio.com/sscma/configs/vela_config.ini)から `vela` 関連の設定ファイルをダウンロードするか、以下の内容をファイルにコピーしてください。このファイルは `vela_config.ini` という名前にすることができます。

```ini
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

- 最後に、以下のコマンドを使用してグラフを最適化します。

```bash
vela --accelerator-config ethos-u55-64 \ 
    --config vela_config.ini \
    --system-config My_Sys_Cfg \
    --memory-mode My_Mem_Mode_Parent \
    --output-dir ${Save path of the optimized model} \
    ${The path of the tflite model that needs to be optimized}
```

実行後、`--output-dir` で指定したパスにグラフが最適化された tflite モデルが生成されます。

## デプロイ

- デプロイする必要があるモデルファイルは、上記でエクスポートした `tflite` ファイルです。以下のチュートリアルに従って、モデルファイルをターゲットデバイスに書き込むことができます。

- トレーニング済みの tflite モデルをデバイスに書き込むには、弊社のウェブツールを使用することを強く推奨します。詳細な操作は [デプロイメントチュートリアル](https://wiki.seeedstudio.com/ja/ModelAssistant_Deploy_Overview/) に記載されています。

`注意:` `ESP32S3` デバイスは `vela` グラフ最適化後のモデルデプロイをサポートしていないため、`XIAO ESP32S3` デバイスにモデルをデプロイする場合は、`tflite` モデルのグラフ最適化を行う必要はありません。 