---
description: TensorFlow Lite Micro 入門
title: TensorFlow Lite Micro 入門
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_TensorFlow_Lite
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-TinyML-TFLM-1
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal TensorFlow Lite Micro 入門

この記事では、公式の [Arduino TensorFlow Lite ライブラリ](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/micro/examples/hello_world) を Wio Terminal にインストールし、Wio Terminal を使用していくつかの機械学習モデルをテストする方法を紹介します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221174623.jpg" /></div>

詳細については、[TensorFlow Lite For Microcontrollers](https://www.tensorflow.org/lite/microcontrollers) をご覧ください。

Wio Terminal の入門ガイドで、Seeed SAMD ボード定義のバージョン 1.8.2 を使用する方法と、ボード定義を確認および更新する方法を確認してください。

## Arduino TensorFlow Lite ライブラリのインストール

Arduino IDE 用の TensorFlow Lite ライブラリのバージョンは、現在（2021年10月時点）Arduino IDE ライブラリマネージャーからダウンロードできるものは古いバージョンです。そのため、公式の TensorFlow Lite for Microcontrollers リポジトリから開発バージョンを使用する必要があります。

```
git clone https://github.com/tensorflow/tflite-micro-arduino-examples Arduino_TensorFlowLite
```

このコマンドを Arduino のスケッチ/ライブラリフォルダ内で実行してください。ライブラリの最新開発バージョンのインストールに関する詳細は、[TensorFlow Lite Micro Library for Arduino リポジトリ](https://github.com/tensorflow/tflite-micro-arduino-examples) を参照してください。

ここで説明するプロジェクトは、TensorFlow Lite Micro Library for Arduino リポジトリのコミット 219ac1dfed8a8ba0edfdbaae51aed5dc9b208c0c でテストされています。

## Arduino TensorFlow Lite Hello World サンプルの実行

このサンプルは、TensorFlow Lite for Microcontrollers を使用するための基本的な内容を示すことを目的としています。モデルのトレーニング、TensorFlow Lite 用への変換、マイクロコントローラー上での推論の実行という、エンドツーエンドのワークフロー全体を含んでいます。

このサンプルは、サイン関数を再現するようにトレーニングされたモデルを中心に構築されています。いくつかのプラットフォーム向けの実装が含まれており、各ケースでモデルはデータパターンを生成するために使用され、それが LED の点滅やアニメーションの制御に使用されます。

1. `Files` -> `Examples` -> `Arduino_TensorFlowLite` -> `hello_world` に移動します。サンプルスケッチが表示されるはずです。

2. 現時点でコンパイルすると、**コンパイルエラー** が発生します。これは、ボード用に定義された `min` および `max` 関数が Arduino TensorFlow ライブラリ内でも定義されているためです。この問題を解決するには、ライブラリをインクルードする直前に `#undef max` および `#undef min` を使用してエラーを回避します。以下のように記述してください：

```cpp
#undef max
#undef min
#include <TensorFlowLite.h>
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221173149.jpg" /></div>

3. 次に、**Upload** をクリックして、最初の TensorFlow Lite サンプルを Wio Terminal にアップロードします！

4. シリアルプロッタを開き、サイン波形が表示されるはずです。また、背面の内蔵 LED が、TensorFlow Lite で生成したサイン波に従って明滅していることを確認してください！

**注意:** シリアルプロッタで完全なサイン波を表示したい場合（つまり、LED の点滅を速くしたい場合）、上部の **arduino_constants.cpp** ファイルをクリックし、`kInferencesPerCycle` を以下のように 100 に変更してください：

```cpp
const int kInferencesPerCycle = 100;
```