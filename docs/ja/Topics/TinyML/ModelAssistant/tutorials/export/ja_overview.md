---
description: モデルアシスタントのエクスポート
title: エクスポート
keywords:
- sscma モデルアシスタント ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ModelAssistant_Tutorials_Export_Overview
last_update:
  date: 05/15/2025
  author: LynnL4
---


# モデルエクスポート

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) は現在、以下の方法でモデルを変換およびエクスポートすることをサポートしています。
対応するチュートリアルを参照してモデルのエクスポートを完了し、
エクスポートされたモデルをデプロイメントに使用してください。

:::tip
デフォルトでは、ONNX と TFLite の両方のモデルがエクスポートされます。どちらか一方のみをエクスポートする場合は、`--targets` パラメータを使用してエクスポートするモデルの種類を指定できます。例: `--targets onnx` または `--targets tflite`。
:::

- [PyTorch から ONNX への変換](/ja/ModelAssistant_Tutorials_Export_PyTorch_2_ONNX): PyTorch モデルと `.pth` 重みを ONNX モデル `.onnx` に変換

- [PyTorch から TFLite への変換](/ja/ModelAssistant_Tutorials_Export_PyTorch_2_TFLite): PyTorch モデルと `.pth` 重みを TFLite モデル `.tflite` に変換

:::tip
モデルのエクスポートを開始する前に、[トレーニング](/ja/ModelAssistant_Tutorials_Training_Overview) セクションを完了し、モデルの重み `.pth` ファイルを取得する必要があります。
:::

## パラメータの説明

モデルエクスポートの詳細なパラメータについては、以下のコードを参照してください。

```sh
python3 tools/export.py --help

# PyTorch モデルを TFLite または ONNX モデルに変換およびエクスポート

# 位置引数:
#   config                モデル設定ファイルのパス
#   checkpoint            PyTorch チェックポイントファイルのパス

# オプション引数:
#   -h, --help            このヘルプメッセージを表示して終了
#   --targets TARGETS [TARGETS ...]
#                         エクスポートするモデルの種類 (例: tflite onnx)
#   --precisions PRECISIONS [PRECISIONS ...]
#                         エクスポートするモデルの精度 (例: 'int8', 'uint8', 'int16', 'float16', 'float32')
#   --work_dir WORK_DIR, --work-dir WORK_DIR
#                         ログとモデルを保存するディレクトリ
#   --output_stem OUTPUT_STEM, --output-stem OUTPUT_STEM
#                         出力ファイル名のステム (パス付き)
#   --device DEVICE       変換およびエクスポートに使用するデバイス
#   --input_shape INPUT_SHAPE [INPUT_SHAPE ...], --input-shape INPUT_SHAPE [INPUT_SHAPE ...]
#                         入力データの形状 (例: 1 3 224 224)
#   --input_type {audio,image,sensor}, --input-type {audio,image,sensor}
#                         入力データの種類
#   --cfg_options CFG_OPTIONS [CFG_OPTIONS ...], --cfg-options CFG_OPTIONS [CFG_OPTIONS ...]
#                         使用する設定の一部を上書き (形式: 'xxx=yyy')、設定ファイルにマージされる
#   --simplify SIMPLIFY   グラフ簡略化のレベル (0: 無効、最大: 5)
#   --opset_version OPSET_VERSION, --opset-version OPSET_VERSION
#                         ONNX: エクスポートされたモデルのオペレーターセットバージョン
#   --dynamic_export, --dynamic-export
#                         ONNX: 動的入力形状でエクスポート
#   --algorithm {l2,kl}   TFLite: 変換アルゴリズム
#   --backend {qnnpack,fbgemm}
#                         TFLite: コンバータバックエンド
#   --calibration_epochs CALIBRATION_EPOCHS, --calibration-epochs CALIBRATION_EPOCHS
#                         TFLite: 量子化キャリブレーションの最大エポック数
#   --mean MEAN [MEAN ...]
#                         TFLite: モデル入力の平均値 (量子化用)、範囲: [0, 1]、すべてのチャンネルに適用、複数値が提供された場合は平均を使用
#   --mean_and_std MEAN_AND_STD [MEAN_AND_STD ...], --mean-and-std MEAN_AND_STD [MEAN_AND_STD ...]
#                         TFLite: モデル入力の平均値と標準偏差、デフォルト: [((0.0,), (1.0,))]、正規化された入力に基づいて計算、すべてのチャンネルに適用、複数値が提供された場合は平均を使用
```