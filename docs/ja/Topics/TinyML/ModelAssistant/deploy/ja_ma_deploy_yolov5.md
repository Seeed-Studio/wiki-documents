---
description: YOLOv5のトレーニングからデプロイまで
title: YOLOv5物体検出モデルのトレーニングとデプロイ
keywords:
- YOLOv5 
- we2 
- 物体検出
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ma_deploy_yolov5
last_update:
  date: 05/15/2025
  author: Jack Mu
---


# YOLOv5物体検出モデルのデプロイ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/sscma/static/detection_person_yolov5.png" style={{width:600, height:'auto'}}/></div>

このWikiでは、公式のYOLOv5物体検出モデルをトレーニングし、トレーニング済みモデルを`Grove Vision AI(V2)`または`XIAO ESP32S3`デバイスにデプロイする方法を紹介します。

## データセットの準備

データセットには[roboflow](https://universe.roboflow.com/)プラットフォームの使用を推奨します。このプラットフォームでは、データセットのアノテーションやデータ拡張戦略を実行でき、複数のデータセット形式のエクスポートをサポートしています。YOLOv5データセット準備の[紹介](https://docs.ultralytics.com/zh/yolov5/tutorials/train_custom_data/)をご覧ください。

## YOLOv5公式リポジトリのクローン

- デフォルトでは、Python環境とpipパッケージ管理ツール、およびPython>=3.8がインストールされている必要があります。

```bash
# YOLOv5公式リポジトリをクローン
git clone https://github.com/ultralytics/yolov5
```

- 必要な環境をインストール

```bash
# YOLOv5フォルダに移動
cd yolov5
# pipを使用して必要な依存関係をインストール
pip install -r requirements.txt
```

## トレーニング

- 以下のコマンドを実行してモデルのトレーニングを開始します

```bash
python train.py  --weights yolov5n.pt --data ${dataset yaml file path} --imgsz 192
```

## モデルをtflite形式にエクスポート

- トレーニング後、モデルは`runs/train/exp*/weights/`フォルダに保存されます。モデルの評価指標が要件を満たしていることを確認してください。
- まず、以下のコマンドを使用してsaved_model形式のモデルをエクスポートします

```bash
python export.py --weights ${Your trained model path (.pt format)}  --imgsz 192 --include saved_model
```

- 次に、以下のコードを使用してエクスポートされたsaved_modelモデルを量子化し、tflite形式に変換します

```python
import tensorflow as tf
import os.path as osp

converter = tf.lite.TFLiteConverter.from_saved_model(r'Your saved_model folder path')

tflite_model = converter.convert()

def representative_dataset():
  for _ in range(100):
    yield [
        tf.random.uniform((1, 192, 192, 3))
    ]

converter.optimizations = [
    tf.lite.Optimize.DEFAULT
]
converter.target_spec.supported_ops = [
    tf.lite.OpsSet.TFLITE_BUILTINS_INT8
]
converter.inference_input_type = tf.int8
converter.inference_output_type = tf.int8
converter.representative_dataset = representative_dataset

tflite_quant_model = converter.convert()

with open(osp.join(r'The location path to be saved','yolov5n_int8.tflite'), 'wb') as f:
    f.write(tflite_quant_model)
```

- その後、保存先フォルダに`yolov5n_int8.tflite`モデルファイルが表示されます。このモデルファイルは`Grove Vision AI(V2)`または`XIAO ESP32S3`デバイスにデプロイできます。

### モデルグラフの最適化

- Grove Vision AI (V2)はvelaで最適化されたモデルをサポートしており、モデル推論を加速することもできます。まず、以下のコマンドを実行してvelaコマンドラインツールをインストールします（`XIAO ESP32S3`デバイスはまだサポートされていません）。

```bash
pip3 install ethos-u-vela
```

- 次に、[こちら](https://files.seeedstudio.com/sscma/configs/vela_config.ini)から`vela`関連の設定ファイルをダウンロードするか、以下の内容をファイルにコピーして保存します。このファイルは`vela_config.ini`と名付けることができます。

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

- 最後に、以下のコマンドを使用してグラフを最適化します

```bash
vela --accelerator-config ethos-u55-64 \ 
    --config vela_config.ini \
    --system-config My_Sys_Cfg \
    --memory-mode My_Mem_Mode_Parent \
    --output-dir ${Save path of the optimized model} \
    ${The path of the tflite model that needs to be optimized}
```

## デプロイ

- デプロイする必要があるモデルファイルは、上記でエクスポートした`tflite`ファイルです。以下のチュートリアルに従って、モデルファイルをターゲットデバイスに書き込むことができます。

- トレーニング済みのtfliteモデルをデバイスに書き込むには、当社のWebツールを使用することを強くお勧めします。詳細な操作は[デプロイチュートリアル](https://wiki.seeedstudio.com/ja/ModelAssistant_Deploy_Overview/)で提供されています。

`注意:` `ESP32S3`デバイスは`vela`グラフ最適化後のモデルデプロイをサポートしていないため、`XIAO ESP32S3`デバイスにモデルをデプロイする場合は`tflite`モデルのグラフ最適化を行う必要はありません。