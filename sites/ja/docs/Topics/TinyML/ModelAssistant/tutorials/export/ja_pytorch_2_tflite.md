---
description: モデルアシスタント用エクスポート
title: PyTorchからTFLiteへの変換
keywords:
- sscma モデルアシスタント AI tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ModelAssistant_Tutorials_Export_PyTorch_2_TFLite
last_update:
  date: 05/15/2025
  author: LynnL4
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PyTorchからTFLiteへの変換

この章では、PyTorchモデルをTFLiteモデルに変換してエクスポートする方法について説明します。

## 準備

### 環境構成

[トレーニング](/ja/ModelAssistant_Tutorials_Training_Overview)ステップと同様に、モデルエクスポートフェーズでは**仮想環境**で作業することをお勧めします。`sscma`仮想環境内で、[インストール - 前提条件 - 追加依存関係のインストール](/ja/ModelAssistant_Introduce_Installation#step-4-install-extra-dependencies-optional)ステップが完了していることを確認してください。

:::tip

仮想環境を構成したがまだ有効化していない場合は、以下のコマンドで有効化できます。

```sh
conda activate sscma
```

:::

### モデルと重み

モデルをエクスポートする前に、PyTorchモデルとその重みを準備する必要があります。モデルについては、[Config](/ja/ModelAssistant_Tutorials_Config)セクションで事前に設定されています。重みについては、以下の手順を参照してモデルの重みを取得してください。

- [トレーニング](/ja/ModelAssistant_Tutorials_Training_Overview)セクションを参照し、モデルを選択してトレーニングを行い、モデルの重みを取得します。

- または、[SSCMA](https://github.com/Seeed-Studio/ModelAssistant)公式の事前トレーニング済みの重みを[GitHub Releases - Model Zoo](https://github.com/Seeed-Studio/ModelAssistantreleases/tag/model_zoo)からダウンロードします。

:::tip

TFLiteモデルをエクスポートするには、代表的なデータセットとしてトレーニングセットが必要です。見つからない場合、プログラムが自動的にダウンロードします。ただし、大規模なデータセットの場合、時間がかかることがありますので、しばらくお待ちください。

:::

## モデルのエクスポート

モデル変換（変換とエクスポート）のための関連コマンドといくつかの一般的なパラメータを以下に示します。

```sh
python3 tools/export.py \
    "<CONFIG_FILE_PATH>" \
    "<CHECKPOINT_FILE_PATH>" \
    --target tflite
```

### TFLiteエクスポート例

以下に、いくつかのモデル変換例（`int8`精度）を示します。参考にしてください。

<Tabs>

<TabItem value="FOMOモデル変換" label="FOMOモデル変換">

```sh
python3 tools/export.py \
    configs/fomo/fomo_mobnetv2_0.35_x8_abl_coco.py \
    "$(cat work_dirs/fomo_mobnetv2_0.35_x8_abl_coco/last_checkpoint)" \
    --target tflite \
    --cfg-options \
        data_root='datasets/mask'

```

</TabItem>

<TabItem value="PFLDモデル変換" label="PFLDモデル変換">

```sh
python3 tools/export.py \
    configs/pfld/pfld_mbv2n_112.py \
    "$(cat work_dirs/pfld_mbv2n_112/last_checkpoint)" \
    --target tflite \
    --cfg-options \
        data_root='datasets/meter'
```

</TabItem>

<TabItem value="SWIFT-YOLOモデル変換" label="SWIFT-YOLOモデル変換">

```sh
python3 tools/export.py \
    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
    "$(cat work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint)" \
    --target tflite
    --cfg-options \
        data_root='datasets/digital_meter'
```

</TabItem>

</Tabs>


## モデルの検証

モデルのエクスポートプロセス中に、[SSCMA](https://github.com/Seeed-Studio/ModelAssistant)はモデルのプルーニングや蒸留などのツールを使用してモデルを最適化します。トレーニングプロセス中にモデルの重みをテストおよび評価していますが、エクスポートされたモデルを再度検証することをお勧めします。

```sh
python3 tools/inference.py \
    "<CONFIG_FILE_PATH>" \
    "<CHECKPOINT_FILE_PATH>" \
    --show \
    --cfg-options "<CFG_OPTIONS>"
```

:::tip

サポートされるその他のパラメータについては、ソースコード`tools/inference.py`を参照するか、`python3 tools/inference.py --help`を実行してください。

:::

### モデル検証例

以下に、変換されたモデル（`int8`精度）を検証するための例を示します。参考にしてください。

<Tabs>

<TabItem value="FOMOモデル検証" label="FOMOモデル検証">

```sh
python3 tools/inference.py \
    configs/fomo/fomo_mobnetv2_0.35_x8_abl_coco.py \
    "$(cat work_dirs/fomo_mobnetv2_0.35_x8_abl_coco/last_checkpoint | sed -e 's/.pth/_int8.tflite/g')" \
    --show \
    --cfg-options \
        data_root='datasets/mask'
```

</TabItem>

<TabItem value="PFLDモデル検証" label="PFLDモデル検証">

```sh
python3 tools/inference.py \
    configs/pfld/pfld_mbv2n_112.py \
    "$(cat work_dirs/pfld_mbv2n_112/last_checkpoint | sed -e 's/.pth/_int8.tflite/g')" \
    --show \
    --cfg-options \
        data_root='datasets/meter'
```

</TabItem>

<TabItem value="SWIFT-YOLOモデル検証" label="SWIFT-YOLOモデル検証">

```sh
python3 tools/inference.py \
    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
    "$(cat work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint | sed -e 's/.pth/_int8.tflite/g')" \
    --show \
    --cfg-options \
        data_root='datasets/digital_meter'
```

</TabItem>

</Tabs>