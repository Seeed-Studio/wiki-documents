---
description: TensorFlow Lite を使った始め方
title: TensorFlow Lite を使った始め方
keywords:
  - Edge
  - reTerminal アプリケーション
  - 組み込み機械学習
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal_ML_TFLite
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reTerminal での TensorFlow Lite の始め方

<p align="center">
  <img alt="Light" src="https://www.tensorflow.org/site-assets/images/project-logos/tensorflow-lite-logo-social.png" width="45%"/>
&nbsp; &nbsp;
  <img alt="Dark" src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/wiki_thumb.png" width="45%"/>
</p>

TensorFlow Lite は、モバイル、組み込み、IoT デバイス上でモデルを実行することで、デバイス内での機械学習を可能にするツールセットです。  
TensorFlow Lite の主な特徴は、デバイス内での機械学習に最適化されており、レイテンシー、プライバシー、接続性、サイズ、消費電力に重点を置いている点です。このフレームワークは、Android や iOS デバイス、組み込み Linux、マイクロコントローラーなど、複数のプラットフォームをサポートするように設計されています。また、Java、Swift、Objective-C、C++、Python など、さまざまな言語をサポートしており、ハードウェアアクセラレーションとモデル最適化による高いパフォーマンスを提供します。さらに、画像分類、物体検出、ポーズ推定、質問応答、テキスト分類など、一般的な機械学習タスクのエンドツーエンドの例を複数のプラットフォームで提供しています。

## TensorFlow Lite ランタイムパッケージのインストール

`tflite_runtime` パッケージは、TensorFlow Lite を使用して推論を実行するために必要な最小限のコードを含む、より小型で簡素化された Python パッケージです。このパッケージは、.tflite モデルを実行するだけで、ディスクスペースを大きな TensorFlow ライブラリで無駄にしたくない場合に最適です。

最適なパフォーマンスを得るには、64 ビット OS と対応する TFLite パッケージを使用し、最適化された XNNPACK デリゲートを有効にすることをお勧めします。これらは自分でソースからコンパイルするか、Seeed Studio が提供する事前ビルド済みバイナリをインストールすることができます。または、pip を使用して最新の安定版をインストールすることも可能です。

#### 最新の安定版（公式ビルド）

```
pip3 install --index-url https://google-coral.github.io/py-repo/ tflite_runtime
```

#### XNNPACK を有効にした 64 ビット OS 用のパフォーマンス最適化パッケージ

この記事執筆時点では、XNNPACK 最適化を備えた Python 3.7 64 ビット OS 用の公式事前ビルドホイールは利用できなかったため、独自にコンパイルして共有しました。

```
wget www.files.seeedstudio.com/ml/TFLite/tflite_runtime-2.6.0-cp37-cp37m-linux_aarch64.whl
pip3 install tflite_runtime-2.6.0-cp37-cp37m-linux_aarch64.whl
```

インストールが完了したら、tflite パッケージをインポートしてみてください：

```
pi@raspberrypi:~ $ python3
Python 3.7.3 (default, Jul 25 2020, 13:03:44) 
[GCC 8.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import tflite_runtime
>>> tflite_runtime.__version__
'2.6.0'
```

## サンプル

TFLite Converter を使用すると、TensorFlow モデルを .tflite 形式に変換することが可能です。ただし、TFLite Runtime がサポートする操作のみで構成されている必要があります。以下は、現在 reTerminal でテストされているデモのリストで、今後さらに拡張および完成される予定です：

<table style={{tableLayout: 'fixed', width: 743}}>
  <colgroup>
    <col style={{width: 146}} />
    <col style={{width: 198}} />
    <col style={{width: 399}} />
  </colgroup>
  <thead>
    <tr>
      <th>モデル</th>
      <th>結果</th>
      <th>コメント</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>物体検出</td>
      <td> <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_ML/000402.jpg" alt="pir" width={600} height="auto" /></p></td>
      <td>
        デモ: 車両検出 <br />
        <a href="https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_multi_stage.ipynb" target="_top">Jupyter Notebook</a><br />
        <a href="https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/detector" target="_top">サンプルスクリプト</a> <br />
        alpha 0.25 224x224 66.7 FPS (15 ms.)<br />
        alpha 0.5 224x224 40 FPS (25 ms.)<br />
        alpha 0.75 320x320 14.9 FPS (67 ms.)<br />
        alpha 1.0 320x320 10.4 FPS (96 ms.)<br />
      </td>
    </tr>
    <tr>
      <td>画像分類</td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_ML/belt.png" alt="pir" width={600} height="auto" /></p> </td>
      <td>
        デモ: 工業用コンベアの裂け目識別<br />
        <a href="https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_conveyor_belt_rip_recognition.ipynb" target="_top">Jupyter Notebook</a><br />
        <a href="https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/classifier" target="_top">サンプルスクリプト</a>
      </td>
    </tr>
    <tr>
      <td>セマンティックセグメンテーション</td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_ML/CHNCXR_0331_1.png" alt="pir" width={600} height="auto" /></p></td>
      <td>
        デモ: 肺セグメンテーション <br />
        <a href="https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_lung_segmentation.ipynb" target="_top">Jupyter Notebook</a><br />
        <a href="https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/segnet" target="_top">サンプルスクリプト</a>
      </td>
    </tr>
    <tr>
      <td>顔年齢/性別認識</td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_ML/output.gif" alt="pir" width={600} height="auto" /></p></td>
      <td>
        デモ: マルチステージ推論: MobileNet YOLOv3 alpha 0.25 -&gt; MobileFaceNet <br />
        <a href="https://github.com/AIWintermuteAI/edge_ml_age_gender_recognition/tree/master" target="_top">Github リポジトリ</a><br />
        <a href="https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/tensorflow_lite/multi_stage_inference_age_gender" target="_top">サンプルスクリプト</a> <br />
        ~16-20 FPS (<a href="https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/armnn/face_age-gender" target="_top">ARM NN</a> 使用時)
      </td>
    </tr>
    <tr>
      <td>顔表情認識</td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/ml/emotion/emotions.gif" alt="pir" width={600} height="auto" /></p></td>
      <td>
        デモ: マルチステージ推論: MobileNet YOLOv3 alpha 0.25 -&gt; MobileFaceNet <br />
        <a href="https://github.com/AIWintermuteAI/edge_ml_emotion_recognition/tree/master" target="_top">Github リポジトリ</a><br />
        <a href="https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/tensorflow_lite/multi_stage_inference_emotion" target="_top">サンプルスクリプト</a> <br />
        ~11 FPS
      </td>
    </tr>
    <tr>
      <td>顔アンチスプーフィング</td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/ml/face_anti-spoofing/face_anti-spoofing.gif" alt="pir" width={600} height="auto" /></p></td>
      <td>
        デモ: マルチステージ推論: MobileNet YOLOv3 alpha 0.25 -&gt; MobileNet v1 alpha 0.25<br />
        <a href="https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_face_anti_spoofing.ipynb" target="_top">Jupyter Notebook</a><br />
        <a href="https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/classifier" target="_top">サンプルスクリプト</a>  <br />
        ~23 FPS (ARM NN)
      </td>
    </tr>
    <tr>
      <td>顔認識</td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_ML/face_recognition.gif" alt="pir" width={600} height="auto" /></p></td>
      <td>
        デモ: マルチステージ推論: Ultra Light Face Detector with Landmark Detection -&gt; MobileFaceNet<br />
        <a href="https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_face_recognition.ipynb" target="_top">Jupyter Notebook</a><br /> 
        <a href="https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/armnn/face_recognition" target="_top">サンプルスクリプト</a>  <br />
        ~15 FPS (ARM NN)
      </td>
    </tr>
  </tbody>
</table>

## さらなる最適化

例の表に示されている FPS と推論結果は、特に記載がない限り、Tensorflow Lite における INT8 量子化モデルの推論結果です。<br />
reTerminal は Raspberry Pi 4 をベースとしているため、ニューラルネットワーク推論用の追加ハードウェアアクセラレータを持たず、CPU 推論のための標準的な最適化手法のみが適用可能です。
このトピックのビデオ概要はこちらでご覧いただけます：

<iframe width="800" height="450" src="https://www.youtube.com/embed/BEDEscDQFxk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

以下は CPU 推論最適化手法の簡単な概要です：

1) **小規模なネットワークの設計**  
目標が十分に単純である場合（100クラス未満の画像分類や10クラス未満の物体検出など）、小規模なネットワークで許容可能な精度を達成し、非常に高速に動作させることができます。例えば、MobileNet v1 alpha 0.25 YOLOv2 ネットワークを使用して、1クラスのオブジェクト（人間の顔）のみを検出するように訓練した場合、追加の最適化なしで 62.5 FPS を達成します。

**標準 Tensorflow Lite FP32 推論：**  
MobileNetv1(alpha 0.25) YOLOv2 1クラス 0.89 MB 62.5 FPS  
MobileNetv1(alpha 1.0) YOLOv3 20クラス 13.1 MB 7 FPS  

2) **量子化**  
量子化は、通常 FP32 から INT8 へのニューラルネットワークの重みの精度を削減するプロセスです。これにより、サイズが4倍縮小し、デフォルトの Tensorflow Lite カーネルを使用してレイテンシが約60〜80％削減されます。精度の損失は、量子化対応トレーニング（QAT）を使用することで最小限に抑えることができます。QAT は、量子化ノードを挿入してネットワークを微調整するプロセスです。

**標準 Tensorflow Lite INT8 推論：**  
MobileNetv1(alpha 0.25) YOLOv2 1クラス 0.89 MB 77 FPS  
MobileNetv1(alpha 1.0) YOLOv3 20クラス 13.1 MB 11.5 FPS  

3) **最適化されたカーネルの使用**  
推論速度は、特定の CPU 命令セット（例：ARM 用 NEON SIMD 命令）に最適化された CNN カーネルを持つフレームワークを利用することで向上します。これには、ARM NN や XNNPACK などのネットワークが含まれます。

Arm NN SDK は、低消費電力デバイスでの機械学習ワークロードを可能にするオープンソースのソフトウェアとツールのセットです。説明と提供されているベンチマークは有望に見えますが、最新の Raspberry Pi OS へのインストール手順は現時点で困難です。現在、ARM NN の最新バージョンをインストールする唯一の適切な方法は、ソースからのクロスコンパイルです。Debian Bullseye 用のバイナリは利用可能ですが、Raspberry Pi OS はまだ Debian Buster に基づいています。ベンチマークスクリプトを使用した推論テスト結果は混在しており、単一モデルでは標準 Tensorflow Lite よりもパフォーマンスが悪い結果を示しましたが、マルチモデル推論ではより効率的なマルチプロセッシングの利用により高速であることが判明しました。

**ARM NN FP32 推論：**  
MobileNetv1(alpha 0.25) YOLOv2 1クラス 0.89 MB 83 FPS  
MobileNetv1(alpha 1.0) YOLOv3 20クラス 13.1 MB 7.2 FPS  

XNNPACK は、Android、iOS、Windows、Linux、macOS 環境で ARM、x86、および WebAssembly アーキテクチャ向けにニューラルネットワーク推論を高速化するためのライブラリです。Tensorflow Lite にデリゲートとして統合されており、Android ビルドではデフォルトで有効になっていますが、他の環境では手動で有効にする必要があります。そのため、Raspberry Pi 4 で XNNPACK を使用する場合は、TensorFlow Lite Interpreter パッケージをソースからビルドするか、上記で提供されているようなサードパーティのバイナリをダウンロードする必要があります。

**XNNPACK デリゲート Tensorflow Lite FP32 推論：**  
MobileNetv1(alpha 0.25) YOLOv2 1クラス 0.89 MB 83 FPS  
MobileNetv1(alpha 1.0) YOLOv3 20クラス 13.1 MB 7.2 FPS  

最適化されたカーネルの主な問題は、異なるフレームワークでのアーキテクチャ/NN オペレーター/精度タイプのサポートが不均一であることです。例えば、INT8 最適化カーネルは ARM NN と XNNPACK の両方で進行中の作業です。XNNPACK における INT8 最適化カーネルのサポートは非常に最近追加され、モデルで使用されるオペレーターに応じて約30％の控えめなパフォーマンス向上をもたらすようです。  
[https://github.com/google/XNNPACK/issues/999#issuecomment-870791779](https://github.com/google/XNNPACK/issues/999#issuecomment-870791779)

もう一つの有望な方向性は、動的に量子化されたモデル用の最適化カーネルです。開発者との会話はこちらをご覧ください：  
[https://github.com/tensorflow/tensorflow/pull/48751#issuecomment-869111116](https://github.com/tensorflow/tensorflow/pull/48751#issuecomment-869111116)

開発者は、レイテンシが3〜4倍改善すると主張していますが、現在のところ非常に特定のモデルセットに限定されています。より便利な使用を可能にするための PR が開発中です。

4) **プルーニングとスパース推論**  
プルーニングは、正確な予測に寄与しない重みを見つけるために訓練済みニューラルネットワークを微調整するプロセスです。これにより、モデルのサイズとレイテンシの両方を削減できます。精度の低下はスパース性の設定に依存します。実験的には、精度にほとんど影響を与えずに最大80％のスパース性を達成することが可能です。詳細はこちらをご覧ください：  
[https://ai.googleblog.com/2021/03/accelerating-neural-networks-on-mobile.html](https://ai.googleblog.com/2021/03/accelerating-neural-networks-on-mobile.html)
Tensorflow を使用したプルーニングのガイドはこちら：  
[https://www.tensorflow.org/model_optimization/guide/pruning/pruning_for_on_device_inference](https://www.tensorflow.org/model_optimization/guide/pruning/pruning_for_on_device_inference)
残念ながら、現在の形式では、XNNPACK を使用したプルーニングとスパース推論をサポートするモデルは非常に限られています。

## F.A.Q

#### Q1: 私の会社のポリシーでは、サードパーティのバイナリを使用することが許可されていません

公式の TFLite インタープリターパッケージを使用するか、またはソースからコンパイルすることができます。手順については [こちら](https://github.com/PINTO0309/TensorflowLite-bin#2-tensorflow-v230-version-or-later) を参照してください。

## リソース

- **[Webページ]** [TensorFlow Lite 公式ウェブページ](https://www.tensorflow.org/lite)

- **[Webページ]** [TensorFlow Lite 公式ドキュメント](https://www.tensorflow.org/lite/guide)