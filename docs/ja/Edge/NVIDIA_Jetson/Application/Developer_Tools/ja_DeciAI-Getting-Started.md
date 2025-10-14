---
description: NVIDIA Jetson デバイスで Deci を使用した AI モデルの最適化
title: Deci を始める
tags:
  - AI model optimize
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/DeciAI-Getting-Started
last_update:
  date: 01/04/2023
  author: w0x7ce
---

# NVIDIA® Jetson デバイスで Deci を始める

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/Deci-thumb.jpg" alt="pir" width={1000} height="auto" /></p>

Deci プラットフォームは、本番環境でモデルを簡単に管理、最適化、デプロイ、提供することを可能にします。TensorFlow、PyTorch、Keras、ONNX などの人気のある DL フレームワークを引き続き使用できます。必要なのは Deci の Web ベースプラットフォームまたは Deci Python クライアントだけで、コードから実行できます。

Deci が提供するもの：

- パフォーマンス加速 – Deci の自動ニューラルアーキテクチャ構築（AutoNAC）技術を使用して、精度を損なうことなく、任意のハードウェア上でモデル推論パフォーマンスを 2 倍から 10 倍加速します。
- 任意のハードウェアでのスケーリング – プライベートクラウドやパブリッククラウド、独自のサーバー、または任意のコンピューター、エッジ、モバイルデバイスに関係なく、クラウド計算コストと BOM を最大 80% 削減し、大規模な推論を可能にします。
- 推論ベンチマーク – 任意のターゲットハードウェア環境とバッチサイズでモデルをベンチマークし、モデルの最適なスループット、レイテンシ、メモリ使用量、クラウドコストを見つけます。
- モデルパッケージング – 本番環境への迅速で簡単なデプロイ – Deci Lab から訓練されたモデルを、すべての環境ライブラリ依存関係を単一のカプセル化されたコンテナに含めて、任意の本番環境にシームレスにデプロイします。
- モデル提供 – Deci の独自の深層学習ランタイム推論エンジンは、独自のマシン（任意のハードウェア – オンプレミス / エッジ / クラウド）にデプロイできます。Deci は、Deci 最適化モデルを独立した効率的なランタイムサーバーとしてデプロイするための以下のオプションを提供します：

  - Deci のランタイム推論コンテナ（RTiC）、これはコンテナ化された機械学習ランタイムエンジンです。
  - Deci の INFERY（推論という言葉から）、Python パッケージからモデルを実行できるようにします。

## サポートされているハードウェア

Deci は以下の Jetson 関連ハードウェアでサポートされています：

- Seeed のキット：

  - Jetson Nano で構築された reComputer J1010
  - Jetson Nano で構築された reComputer J1020
  - Jetson Xavier NX 8GB で構築された reComputer J2011
  - Jetson Xavier NX 16GB で構築された reComputer J2012

- Seeed のキャリアボード：

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 Kit
  - A203 Carrier Board
  - A203 (Version 2) Carrier Board
  - A205 Carrier Board
  - A206 Carrier Board

- NVIDIA の公式開発キット：

  - NVIDIA® Jetson Nano Developer Kit
  - NVIDIA® Jetson Xavier NX Developer Kit
  - NVIDIA® Jetson AGX Xavier Developer Kit
  - NVIDIA® Jetson TX2 Developer Kit
  - NVIDIA® Jetson AGX Orin Developer Kit

- NVIDIA の公式 SoM：
  
  - NVIDIA® Jetson Nano module
  - NVIDIA® Jetson Xavier NX module
  - NVIDIA® Jetson TX2 NX module
  - NVIDIA® Jetson TX2 module
  - NVIDIA® Jetson AGX Xavier module

上記のハードウェアのいずれかをお持ちの場合、お使いのハードウェアで deci を使用して作業を進めることができます。

## ハードウェア前提条件

以下のハードウェアを準備してください：

- 上記のJetsonデバイスのいずれかでJetPack 4.6が動作しているもの
- モニター、キーボード、マウス（オプション）

## Deciアカウントのサインアップ

- **ステップ 1.** [このページ](https://console.deci.ai/sign-up)にアクセスしてDeciアカウントにサインアップします

- **ステップ 2.** 必要な詳細情報を入力し、サインアップ処理を完了します

これでDeci Labプラットフォームが表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/2.png" alt="pir" width={1000} height="auto" /></p>

## 事前最適化モデルを含むDeci Labモデルズー

デフォルトでは、Deci Labには**ResNet50 Baseline**モデルが含まれており、これは既にインターフェースに読み込まれ、異なるハードウェア向けにいくつかの最適化が施されています。それだけではありません。DeciはDeci Model Zooで、異なるハードウェア向けの対応する最適化バージョンのモデルと共に、ベースモデルの膨大なコレクションを提供しています。**Model Zoo**と**List**をクリックして、利用可能なすべてのモデルを表示します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/3.png" alt="pir" width={1000} height="auto" /></p>

例として、検索バーで**YOLOX**を検索して、すべてのYOLOXモデルを表示します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/4.png" alt="pir" width={1000} height="auto" /></p>

ご覧のように、**YOLOX_Nano**、**YOLOX_Small**などのベースモデルと、**YOLOX_Nano Jetson Nano Optimized**、**YOLOX_Nano Jetson Xavier Optimized**などの最適化モデルがあります

## 独自モデルの最適化

上記で説明したように、事前最適化モデルを手動で最適化する必要なく直接使用できます。ただし、独自のモデルを使用したい場合は、モデルをDeci Labにアップロードし、ターゲットハードウェアに応じて最適化できます

**ステップ 1:** Deci Labで**+ New Model**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/5.png" alt="pir" width={1000} height="auto" /></p>

**ステップ 2:** モデルに応じて適切なタスクを選択します。ここでは**Object Detection**を選択しました

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/6.png" alt="pir" width={500} height="auto" /></p>

**ステップ 3:** モデルの名前を入力し、**Next**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/7.png" alt="pir" width={500} height="auto" /></p>

**ステップ 4:** モデルフレームワーク（この場合はONNX）を選択し、選択したフレームワークに応じてモデルをアップロードし、**Next**をクリックします。ここでは[yolov6n.onnxモデル](https://github.com/meituan/YOLOv6/releases/tag/0.1.0)をアップロードしました。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/8.png" alt="pir" width={500} height="auto" /></p>

**ステップ 5:** **Primary hardware**、**Inference batch size**、**Quantization level**を選択し、**Next**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/9.png" alt="pir" width={500} height="auto" /></p>

**ステップ 6:** パフォーマンス目標と制約を追加します。これは主に**プレミアムバージョン**に含まれる機能である**AutoNAC**を使用する場合に有用です。AutoNACは、モデルサイズを削減しながらモデル推論パフォーマンスを劇的に向上させることができます。AutoNACを使用しない場合は、**Throughput**の値を入力する必要があり、ここでは40に設定しました（ランダムな値でも構いません）。最後に**start**をクリックして最適化プロセスを開始します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/10.png" alt="pir" width={500} height="auto" /></p>

これで最適化プロセスが以下のように進行状況を表示し、数分後に完了します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/11.png" alt="pir" width={1000} height="auto" /></p>

## モデル性能の比較

Deci Labプラットフォームを使用してベースモデルと最適化モデル間のモデル性能を比較するか、またはモデルをターゲットハードウェアにデプロイしてベンチマークを実行することができます。Deci Lab上ですべてを視覚化する方が簡単ですが、特定のハードウェアに対して性能メトリクスが正確であることを確認するために、モデルをデプロイしてターゲットデバイス上でベンチマークを実行することを推奨します。

### Deci Labでの視覚化

ここでは**YOLOX_Nano**ベースモデルと**YOLOX_Nano Jetson Xavier NX Optimized**モデルを使用して比較します。

**ステップ1:** Model Zooに移動し、**YOLOX_Nano**ベースモデルと**YOLOX_Nano Jetson Xavier NX Optimized**モデルの横にある**clone**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/12.png" alt="pir" width={1000} height="auto" /></p>

**ステップ2:** Deci Lab上で、**MODEL_VERSIONS**の下にある**YOLOX_Nano**モデルをクリックして**model insights**セクションに移動します。

**ステップ3:** **Target Hardware**として**Jetson Xavier**を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/13.png" alt="pir" width={1000} height="auto" /></p>

これで、Jetson Xavier NXデバイスにデプロイされる場合の**YOLOX_Nano**モデルのすべての性能メトリクスが表示されます。

**ステップ4:** Deci Labのホームページに戻り、**MODEL_VERSIONS**の下にある**YOLOX_Nano Jetson Xavier NX Optimized**モデルをクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/14.png" alt="pir" width={1000} height="auto" /></p>

これで、Jetson Xavier NXデバイスにデプロイされる場合の**YOLOX_Nano Jetson Xavier NX Optimized**モデルのすべての性能メトリクスが表示されます。

#### 性能比較

以下の表を使用して、Jetson Xavierターゲットハードウェアに対して以前に取得した結果を比較できます

|                      | YOLOX_Nano | YOLOX_Nano Jetson Xavier NX Optimized |
|----------------------|------------|---------------------------------------|
| Accuracy             | 25.8       | 25.8                                  |
| Throughput           | 62.8fps    | 175.8fps                              |
| Latency              | 15.9361ms  | 5.6897ms                              |
| GPU memory footprint | 1.05MB     | 1.01MB                                |
| Model size           | 3.66MB     | 9.74MB                                |

ご覧のように、主な性能向上はスループットで、最適化モデルはベースモデルよりも約**2.7倍高速**です。

### Jetsonデバイスでのデプロイとベンチマーク

上記の2つのモデルをJetson Xavier NXデバイスにデプロイし、ベンチマークを実行して正確な性能結果を取得することを確認します。

#### INFERYのインストール

- **ステップ1.** Jetsonデバイスでターミナルウィンドウを開き、パッケージリストを更新します

```sh
sudo apt update 
```

- **ステップ 2.** pipパッケージマネージャーをインストールする

```sh
sudo apt install python3-pip
```

- **ステップ 3.** pipを最新バージョンに更新する

```sh
python3 -m pip install -U pip
```

- **ステップ 4.** Jetson用INFERYをインストールする

```sh
sudo python3 -m pip install https://deci-packages-public.s3.amazonaws.com/infery_jetson-3.2.2-cp36-cp36m-linux_aarch64.whl
```

#### モデルの読み込み

- **ステップ 1.** Deci Lab で、モデル名にマウスを合わせ、ポップアップから **Deploy** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/15.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 2.** **Download model** をクリックしてモデルを PC にダウンロードし、このモデルファイルを Jetson デバイスのホームディレクトリにコピーします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/16.png" alt="pir" width={500} height="auto" /></p>

- **ステップ 3.** Jetson デバイスでターミナルウィンドウを開き、以下を実行します

```sh
lakshanthad@nano:~$ python3
Python 3.6.9 (default, Dec  8 2021, 21:08:43)
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import infery, numpy as np
```

- **ステップ 4.** Deci lab の **Deploy Model** ウィンドウの **LOAD MODEL** にある 2 番目のコマンドを Jetson デバイスのターミナルウィンドウにコピーします（ターゲットハードウェアに Jetson が選択されていることを確認してください）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/17.png" alt="pir" width={500} height="auto" /></p>

```
ex: model = infery.load(model_path='YOLOX_Nano.onnx', framework_type='onnx', inference_hardware='gpu')
```

**注意:** 事前にモデルをコピーした場所に応じて、**model_path** パラメータを必ず調整してください。モデルファイルをホームディレクトリにコピーした場合は、パスをそのまま保持できます。

モデルが正常に読み込まれた場合、以下の出力が表示されます

```sh
infery_manager -INFO- Loading model YOLOX_Nano.onnx to the GPU
infery_manager -INFO- Successfully loaded YOLOX_Nano.onnx to the GPU.
```

#### モデルのパフォーマンスを測定する

INFERYを使用してモデルのパフォーマンスを測定するには、アプリケーションから**model.benchmark**コマンドを実行します

```sh
model.benchmark(batch_size=1)
```

以下は**YOLOX_Nano**モデルの出力結果です

```sh
base_inferencer -INFO- Benchmarking the model in batch size 1 and dimensions [(3, 416, 416)]...
<ModelBenchmarks: {
    "batch_size": 1,
    "batch_inf_time": "13.63 ms",
    "batch_inf_time_variance": "1.12 ms",
    "memory": "3537.89 mb",
    "pre_inference_memory_used": "3532.94 mb",
    "post_inference_memory_used": "3537.89 mb",
    "total_memory_size": "7765.41 mb",
    "throughput": "73.36 fps",
    "sample_inf_time": "13.63 ms",
    "include_io": true,
    "framework_type": "onnx",
    "framework_version": "1.8.0",
    "inference_hardware": "GPU",
    "infery_version": "3.2.2",
    "date": "18:23:57__07-06-2022",
    "ctime": 1657112037,
    "h_to_d_mean": null,
    "d_to_h_mean": null,
    "h_to_d_variance": null,
    "d_to_h_variance": null
}>
```

where:

- 'batch_size' – ベンチマークで使用されたバッチサイズを指定します。
- 'batch_inf_time' – バッチ全体のレイテンシを指定します。
- 'sample_inf_time' – バッチ内の単一サンプルのレイテンシを指定します。batch_inf_timeをbatch_sizeで割った値と同等です。
- 'memory' – 推論中にモデルが使用するメモリフットプリントを指定します。
- 'throughput' – 1秒間に処理される（フォワードパス）リクエスト数を指定します。
- 'batch_inf_time_variance' – ベンチマーク中のバッチ推論時間の分散を指定します。分散が高い場合は、'repetitions'に渡す数値を増やしてベンチマークをより信頼性の高いものにすることをお勧めします。

**YOLOX_Nano Jetson Xavier NX Optimized model**についても同じ手順を繰り返し、ベンチマークを実行すると、以下のような結果が表示されます：

```sh
base_inferencer -INFO- Benchmarking the model in batch size 1 and dimensions [(3, 416, 416)]...
<ModelBenchmarks: {
    "batch_size": 1,
    "batch_inf_time": "5.28 ms",
    "batch_inf_time_variance": "0.05 ms",
    "memory": "2555.62 mb",
    "pre_inference_memory_used": "2559.38 mb",
    "post_inference_memory_used": "2555.62 mb",
    "total_memory_size": "7765.41 mb",
    "throughput": "189.25 fps",
    "sample_inf_time": "5.28 ms",
    "include_io": true,
    "framework_type": "trt",
    "framework_version": "8.0.1.6",
    "inference_hardware": "GPU",
    "infery_version": "3.2.2",
    "date": "18:30:05__07-06-2022",
    "ctime": 1657112405,
    "h_to_d_mean": "0.43 ms",
    "d_to_h_mean": "0.20 ms",
    "h_to_d_variance": "0.00 ms",
    "d_to_h_variance": "0.00 ms"
}>
```

#### パフォーマンス比較

これらの結果について主にスループットを比較できます

|            | YOLOX_Nano | YOLOX_Nano Jetson Xavier NX Optimized |
|------------|------------|---------------------------------------|
| スループット | 73.36fps   | 189.25fps                             |

最適化されたモデルがベースモデルより約**2.57倍高速**であることがわかります。

## リソース

- **[Web Page]** [Deci AI Documentation](https://docs.deci.ai/docs)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
