---
description: モデルアシスタントのトレーニング
title: オブジェクト検出 - SWIFT-YOLO
keywords:
- sscma モデルアシスタント ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ModelAssistant_Tutorials_Training_YOLO
last_update:
  date: 05/15/2025
  author: LynnL4
---


# オブジェクト検出 - SWIFT-YOLO

このセクションでは、COCOデジタルメーターデータセットを使用してデジタルメーターモデルをトレーニングする方法について説明します。YOLOデジタルメーター検出モデルの実装は、Swfit-YOLOに基づいており、[mmyolo](https://github.com/open-mmlab/mmyolo)によって提供されています。

## データセットの準備

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant)は、デフォルトで[Digital Meter Datasets](https://universe.roboflow.com/seeeddatasets/seeed_meter_digit/)を使用してSwfit-YOLOモデルをトレーニングします。以下の手順に従ってデータセットの準備を完了してください。

1. COCOデータセット形式でデジタルメーターデータセットをダウンロードします。

2. 解凍したデータセットの**フォルダパス**（例：`datasets\digital_meter`）を覚えておいてください。このフォルダパスは後で使用する可能性があります。

## 設定ファイルの選択

トレーニングタスクの種類に応じて適切な設定ファイルを選択します。設定ファイルの機能、構造、原則については、[Config](/ja/ModelAssistant_Tutorials_Config)で既に紹介しています。

Swfit-YOLOモデルの例では、`swift_yolo_tiny_1xb16_300e_coco.py`を設定ファイルとして使用します。このファイルはSSCMAのルートディレクトリの`configs/swift_yolo`フォルダ内にあり、さらに`base_arch.py`設定ファイルを継承しています。

初心者には、まずこの設定ファイル内の`data_root`と`epochs`パラメータに注目することをお勧めします。

<details>

<summary> swift_yolo_tiny_1xb16_300e_coco.py </summary>

```python
_base_='../_base_/default_runtime_det.py'
_base_ = ["./base_arch.py"]

anchors = [
    [(10, 13), (16, 30), (33, 23)],  # P3/8
    [(30, 61), (62, 45), (59, 119)],  # P4/16
    [(116, 90), (156, 198), (373, 326)]  # P5/32
]
num_classes = 11
deepen_factor = 0.33
widen_factor = 0.15

strides = [8, 16, 32]

model = dict(
    type='mmyolo.YOLODetector',
    backbone=dict(
        type='YOLOv5CSPDarknet',
        deepen_factor=deepen_factor,
        widen_factor=widen_factor,
    ),
    neck=dict(
        type='YOLOv5PAFPN',
        deepen_factor=deepen_factor,
        widen_factor=widen_factor,
    ),
    bbox_head=dict(
        head_module=dict(
            num_classes=num_classes,
            in_channels=[256, 512, 1024],
            widen_factor=widen_factor,
        ),
    ),
)
```

</details>

## モデルのトレーニング

モデルをトレーニングするには、事前に設定したSSCMA作業環境を使用する必要があります。[Installation](/ja/ModelAssistant_Introduce_Installation)ガイドに従ってCondaを使用して仮想環境`sscma`に[SSCMA](https://github.com/Seeed-Studio/ModelAssistant)をインストールした場合、現在その仮想環境内にいることを確認してください。

その後、[SSCMA](https://github.com/Seeed-Studio/ModelAssistant)プロジェクトのルートディレクトリで、以下のコマンドを実行してSwfit-YOLOデジタルメーター検出モデルをトレーニングします。

```sh
python3 tools/train.py \
    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
    --cfg-options \
        data_root='datasets/digital_meter' \
        epochs=50
```

トレーニング中、モデルの重みと関連するログ情報はデフォルトで`work_dirs/swift_yolo_tiny_1xb16_300e_coco`パスに保存されます。また、[TensorBoard](https://www.tensorflow.org/tensorboard/get_started)などのツールを使用してトレーニングをモニタリングできます。

```sh
tensorboard --logdir work_dirs/swift_yolo_tiny_1xb16_300e_coco
```

トレーニングが完了すると、最新のSwfit-YOLOモデルの重みファイルのパスは`work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint`ファイルに保存されます。この重みファイルのパスを注意深く管理してください。他の形式にモデルを変換する際に必要になります。

:::tip

仮想環境が設定されているがアクティブになっていない場合、以下のコマンドでアクティブ化できます。

```sh
conda activate sscma
```

:::

## テストと評価

### テスト

Swfit-YOLOモデルのトレーニングが完了したら、特定の重みを指定して以下のコマンドでモデルをテストできます。

```sh
python3 tools/inference.py \
    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
    "$(cat work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint)" \
    --show \
    --cfg-options \
        data_root='datasets/digital_meter'
```

:::tip

テスト中にリアルタイムでプレビューしたい場合、テストコマンドに`--show`パラメータを追加して予測結果を表示できます。その他のオプションパラメータについては、ソースコード`tools/inference.py`を参照してください。

:::

### 評価

モデルを実際のエッジコンピューティングデバイスでさらにテストおよび評価するには、モデルをエクスポートする必要があります。モデルのエクスポートプロセスでは、[SSCMA](https://github.com/Seeed-Studio/ModelAssistant)がモデルのプルーニングや蒸留などの最適化を行います。モデルのエクスポート方法については、[Export](/ja/ModelAssistant_Tutorials_Export_Overview)セクションを参照してください。

### デプロイ

モデルをエクスポートした後、エッジコンピューティングデバイスにモデルをデプロイしてテストおよび評価を行うことができます。モデルのデプロイ方法については、[Deploy](/ja/ModelAssistant_Deploy_Overview)セクションを参照してください。