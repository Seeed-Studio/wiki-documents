---
description: TensorFlow Liteを始める
title: TensorFlow Liteを始める
keywords:
  - Edge
  - reTerminal Application
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal_ML_TFLite
last_update:
  date: 2/1/2023
  author: jianjing Huang
---


# reTerminalでTensorFlow Liteを始める

<p align="center">
  <img alt="Light" src="https://www.tensorflow.org/site-assets/images/project-logos/tensorflow-lite-logo-social.png" width="45%"/>
&nbsp; &nbsp;
  <img alt="Dark" src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/wiki_thumb.png" width="45%"/>
</p>

TensorFlow Liteは、開発者がモバイル、組み込み、IoTデバイス上でモデルを実行できるよう支援することで、デバイス上での機械学習を可能にするツールセットです。
TensorFlow Liteの主要な機能は、レイテンシ、プライバシー、接続性、サイズ、消費電力に焦点を当てたデバイス上での機械学習に最適化されています。このフレームワークは、Android、iOSデバイス、組み込みLinux、マイクロコントローラーなど、複数のプラットフォームをサポートするように構築されています。また、Java、Swift、Objective-C、C++、Pythonなど、さまざまな言語の組み込みサポートがあり、ハードウェアアクセラレーションとモデル最適化による高性能を提供します。画像分類、物体検出、姿勢推定、質問応答、テキスト分類など、一般的な機械学習タスクのエンドツーエンドの例を複数のプラットフォームで提供しています。

## TensorFlow Lite Runtimeパッケージのインストール

tflite_runtimeパッケージは、TensorFlow Liteで推論を実行するために必要な最小限のコードを含む、より小さく簡素化されたPythonパッケージです。このパッケージは、.tfliteモデルを実行することだけが目的で、大きなTensorFlowライブラリによるディスク容量の無駄を避けたい場合に理想的です。

最高のパフォーマンスを得るには、64bit OSと対応するTFLiteパッケージを使用し、最適化されたXNNPACKデリゲートを有効にすることが推奨されます。これらは自分でソースからコンパイルするか、Seeed studioが提供するプリビルドバイナリでインストールできます。または、pipで最新の安定版をインストールすることもできます。

#### 最新安定版（公式ビルド）

```
pip3 install --index-url https://google-coral.github.io/py-repo/ tflite_runtime

```

#### XNNPACK対応64ビットOS向けパフォーマンス最適化パッケージ

この記事の執筆時点では、XNNPACK最適化を含むPython 3.7 64ビットOS向けの公式プリビルドホイールが利用できなかったため、私たち自身でコンパイルして共有しました。

```
wget www.files.seeedstudio.com/ml/TFLite/tflite_runtime-2.6.0-cp37-cp37m-linux_aarch64.whl
pip3 install tflite_runtime-2.6.0-cp37-cp37m-linux_aarch64.whl
```

インストールが完了したら、tfliteパッケージのインポートを試してください：

```
pi@raspberrypi:~ $ python3
Python 3.7.3 (default, Jul 25 2020, 13:03:44) 
[GCC 8.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import tflite_runtime
>>> tflite_runtime.__version__
'2.6.0'
```

## 例

TensorflowモデルをTFLite Runtimeでサポートされている操作のみで構成されている場合、TFLite Converterを使用して任意のTensorflowモデルを.tflite形式に変換することが可能です。以下は現在reTerminalでテストされているデモのリストで、今後拡張・完成される予定です：

### 物体検出

![Vehicle Detection](https://files.seeedstudio.com/wiki/reTerminal_ML/000402.jpg)

デモ：車両検出
[Jupyter Notebook](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_multi_stage.ipynb)
[Example scripts](https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/detector)

- alpha 0.25 224x224 66.7 FPS (15 ms.)
- alpha 0.5 224x224 40 FPS (25 ms.)
- alpha 0.75 320x320 14.9 FPS (67 ms.)
- alpha 1.0 320x320 10.4 FPS (96 ms.)

### 画像分類

![Industrial Conveyor](https://files.seeedstudio.com/wiki/reTerminal_ML/belt.png)

デモ：産業用コンベア破れ識別
[Jupyter Notebook](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_conveyor_belt_rip_recognition.ipynb)
[Example scripts](https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/classifier)

### セマンティックセグメンテーション

![Lung Segmentation](https://files.seeedstudio.com/wiki/reTerminal_ML/CHNCXR_0331_1.png)

デモ：肺セグメンテーション
[Jupyter Notebook](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_lung_segmentation.ipynb)
[Example scripts](https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/segnet)

### 顔年齢/性別認識

![Age Gender Recognition](https://files.seeedstudio.com/wiki/reTerminal_ML/output.gif)

デモ：マルチステージ推論：MobileNet YOLOv3 alpha 0.25 -> MobileFaceNet
[Github repository](https://github.com/AIWintermuteAI/edge_ml_age_gender_recognition/tree/master)
[Example scripts](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/tensorflow_lite/multi_stage_inference_age_gender)
~16-20 FPS ([ARM NN](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/armnn/face_age-gender)使用時)

### 顔表情認識

![Emotion Recognition](https://files.seeedstudio.com/ml/emotion/emotions.gif)

デモ：マルチステージ推論：MobileNet YOLOv3 alpha 0.25 -> MobileFaceNet
[Github repository](https://github.com/AIWintermuteAI/edge_ml_emotion_recognition/tree/master)
[Example scripts](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/tensorflow_lite/multi_stage_inference_emotion)
~11 FPS

### 顔なりすまし防止

![Face Anti-spoofing](https://files.seeedstudio.com/ml/face_anti-spoofing/face_anti-spoofing.gif)

デモ：マルチステージ推論：MobileNet YOLOv3 alpha 0.25 -> MobileNet v1 alpha 0.25
[Jupyter Notebook](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_face_anti_spoofing.ipynb)
[Example scripts](https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/classifier)
~23 FPS (ARM NN)

### 顔認識

![Face Recognition](https://files.seeedstudio.com/wiki/reTerminal_ML/face_recognition.gif)

デモ：マルチステージ推論：Ultra Light Face Detector with Landmark Detection -> MobileFaceNet
[Jupyter Notebook](#)
[Example scripts](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/armnn/face_recognition)
~15 FPS (ARM NN)

## さらなる最適化

Example表のFPSと推論結果は、特に記載がない限り、Tensorflow LiteでのINT8量子化モデル推論に対して提供されています。<br />
reTerminalはRaspberry Pi 4ベースであるため、ニューラルネットワーク推論用の追加ハードウェアアクセラレータがなく、CPU推論用の標準的な最適化手法のみが適用可能です。
このトピックのビデオ概要はこちらで紹介されています：

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/BEDEscDQFxk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

以下はCPU推論最適化手法の簡単な概要です：

1) **より小さなネットワークの設計**。目標が十分にシンプルな場合（100クラス未満の画像分類や10クラス未満の物体検出など）、より小さなネットワークで許容可能な精度を達成し、非常に高速に動作させることができます。例えば、1つのクラスのオブジェクト（人の顔）のみを検出するように訓練されたMobileNet v1 alpha 0.25 YOLOv2ネットワークは、さらなる最適化なしに62.5 FPSを達成します。

**バニラTensorflow Lite FP32推論：**
MobileNetv1(alpha 0.25) YOLOv2 1クラス 0.89 MB 62.5 FPS
MobileNetv1(alpha 1.0) YOLOv3 20クラス 13.1 MB  7 FPS

2) **量子化**。量子化は、通常FP32からINT8へ、NNネットワークの重みの精度を削減するプロセスです。デフォルトのTensorflow Liteカーネルを使用して、サイズを4倍削減し、レイテンシを約60-80%削減します。精度の損失は、QAT（量子化対応訓練）を使用することで最小化できます。これは量子化ノードを挿入してネットワークをファインチューニングするプロセスです。

**バニラTensorflow Lite INT8推論：**
MobileNetv1(alpha 0.25) YOLOv2 1クラス 0.89 MB 77 FPS
MobileNetv1(alpha 1.0) YOLOv3 20クラス 13.1 MB  11.5 FPS

3) **最適化されたカーネル**の使用。特定のCPU命令セット（例：ARM用のNEON SIMD命令）に最適化されたCNNカーネルを持つフレームワークを利用することで、推論速度を向上させることができます。このようなネットワークの例には、ARM NNとXNNPACKがあります。

Arm NN SDKは、電力効率の良いデバイスで機械学習ワークロードを可能にするオープンソースソフトウェアとツールのセットです。
説明と提供されたベンチマークは有望に見えますが、最新のRaspberry Pi OSでのインストール手順は現在困難です - ARM NNの最新バージョンを適切にインストールする唯一の方法は、現在ソースからのクロスコンパイルです。Debian Bullseye用のバイナリは利用可能ですが、Raspberry Pi OSはまだDebian Busterです。ベンチマークスクリプトでの推論テスト結果は混在しており、単一モデルではバニラTensorflow Liteよりも悪いパフォーマンスを示しましたが、マルチモデル推論では、より効率的なマルチプロセッシング利用により高速であることが判明しました。

**ARM NN FP32推論：**
MobileNetv1(alpha 0.25) YOLOv2 1クラス 0.89 MB 83 FPS
MobileNetv1(alpha 1.0) YOLOv3 20クラス 13.1 MB 7.2 FPS

XNNPACKは、Android、iOS、Windows、Linux、macOS環境でARM、x86、WebAssemblyアーキテクチャのニューラルネットワーク推論を加速するライブラリです。Tensorflow Liteにデリゲートとして統合されており、Androidビルドではデフォルトで有効になっていますが、他の環境では手動で有効にする必要があります - したがって、Raspberry Pi 4でXNNPACKを使用したい場合は、TensorFlow Lite Interpreterパッケージをソースからビルドするか、上記で提供しているようなサードパーティのバイナリの1つをダウンロードする必要があります。

**XNNPACKデリゲートTensorflow Lite FP32推論：**
MobileNetv1(alpha 0.25) YOLOv2 1クラス 0.89 MB 83 FPS
MobileNetv1(alpha 1.0) YOLOv3 20クラス 13.1 MB 7.2 FPS

最適化されたカーネルの主な問題は、異なるフレームワークでの異なるアーキテクチャ/NN演算子/精度タイプの不均一なサポートです。例えば、INT8最適化カーネルは、ARM NNとXNNPACKの両方で開発中です。XNNPACKでのINT8最適化カーネルのサポートは最近追加され、モデルで使用される演算子に応じて約30%の控えめなパフォーマンス向上をもたらすようです。
[XNNPACK GitHub Issue](https://github.com/google/XNNPACK/issues/999#issuecomment-870791779)

もう一つの有望な手がかりは、動的量子化モデル用の最適化されたカーネルです。開発者との会話はこちらをご覧ください：
[TensorFlow GitHub PR](https://github.com/tensorflow/tensorflow/pull/48751#issuecomment-869111116)

開発者は3-4倍のレイテンシ改善を主張していますが、現在は非常に特定のモデルセットに限定されています。より便利な使用を可能にするPRが開発中です。

4) **プルーニングとスパース推論**。プルーニングは、正しい予測に寄与しない重みを見つけるために、訓練されたニューラルネットワークをファインチューニングするプロセスです。これにより、モデルのサイズとレイテンシの両方を削減できます - 精度の削減はスパース設定に依存します。実験的には、精度への影響を無視できる程度で最大80%のスパース性を達成することが可能です。詳細は[こちら](https://ai.googleblog.com/2021/03/accelerating-neural-networks-on-mobile.html)、tensorflowでのプルーニングガイドは[こちら](https://www.tensorflow.org/model_optimization/guide/pruning/pruning_for_on_device_inference)をご覧ください。
残念ながら現在の形では、XNNPACKでプルーニングとスパース推論をサポートするモデルは非常に限定されています。

## F.A.Q

#### Q1: 私の会社のポリシーでは、サードパーティのバイナリの使用が許可されていません

公式のTFLiteインタープリターパッケージを使用するか、または[こちら](https://github.com/PINTO0309/TensorflowLite-bin#2-tensorflow-v230-version-or-later)の手順に従ってソースからコンパイルすることもできます。

## リソース

- **[Web Page]** [TensorFlow Lite公式ウェブページ](https://www.tensorflow.org/lite)

- **[Web Page]** [TensorFlow Lite公式ドキュメント](https://www.tensorflow.org/lite/guide)
