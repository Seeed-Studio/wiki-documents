---
description: NVIDIA Jetson デバイス上で Deci を使用して AI モデルを最適化
title: Deci の使い方入門
tags:
  - AI モデル最適化
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/DeciAI-Getting-Started
last_update:
  date: 05/15/2025
  author: w0x7ce
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# NVIDIA® Jetson デバイス上での Deci の使い方入門

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/Deci-thumb.jpg" alt="pir" width={1000} height="auto" /></p>

Deci プラットフォームを使用すると、モデルを簡単に管理、最適化、デプロイ、そして本番環境で提供することができます。TensorFlow、PyTorch、Keras、ONNX などの一般的なディープラーニングフレームワークを引き続き使用できます。Deci のウェブベースのプラットフォームまたは Deci Python クライアントを使用するだけで、コードから実行できます。

Deci は以下を提供します：

- **パフォーマンスの加速** – Deci の自動ニューラルアーキテクチャ構築（AutoNAC）技術を使用して、精度を損なうことなく、あらゆるハードウェアでモデル推論のパフォーマンスを 2 倍から 10 倍に向上させます。
- **あらゆるハードウェアでのスケーリング** – クラウド計算コストと BOM を最大 80% 削減し、プライベートクラウド、パブリッククラウド、自社サーバー、エッジデバイス、モバイルデバイスなど、どこでもスケール可能な推論を実現します。
- **推論ベンチマーク** – 任意のターゲットハードウェア環境とバッチサイズでモデルをベンチマークし、最適なスループット、レイテンシ、メモリ使用量、クラウドコストを見つけます。
- **モデルパッケージング** – 簡単かつ迅速に本番環境へデプロイ – Deci Lab でトレーニングされたモデルを、すべての環境ライブラリ依存関係を含む単一のカプセル化されたコンテナとして、シームレスに本番環境にデプロイします。
- **モデル提供** – Deci 独自のディープラーニングランタイム推論エンジンを、任意のハードウェア（オンプレミス / エッジ / クラウド）で自社のマシンにデプロイできます。Deci は以下のオプションを提供して、Deci 最適化モデルを効率的なランタイムサーバーとしてデプロイします：

  - Deci のランタイム推論コンテナ（RTiC）：コンテナ化された機械学習ランタイムエンジン。
  - Deci の INFERY（推論の言葉から派生）：Python パッケージからモデルを実行できるようにします。

## 対応ハードウェア

Deci は以下の Jetson 関連ハードウェアをサポートしています：

- Seeed 提供のキット：

  - Jetson Nano を搭載した reComputer J1010
  - Jetson Nano を搭載した reComputer J1020
  - Jetson Xavier NX 8GB を搭載した reComputer J2011
  - Jetson Xavier NX 16GB を搭載した reComputer J2012

- Seeed 提供のキャリアボード：

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 キット
  - A203 キャリアボード
  - A203（バージョン 2）キャリアボード
  - A205 キャリアボード
  - A206 キャリアボード

- NVIDIA 提供の公式開発キット：

  - NVIDIA® Jetson Nano 開発キット
  - NVIDIA® Jetson Xavier NX 開発キット
  - NVIDIA® Jetson AGX Xavier 開発キット
  - NVIDIA® Jetson TX2 開発キット
  - NVIDIA® Jetson AGX Orin 開発キット

- NVIDIA 提供の公式 SoM：

  - NVIDIA® Jetson Nano モジュール
  - NVIDIA® Jetson Xavier NX モジュール
  - NVIDIA® Jetson TX2 NX モジュール
  - NVIDIA® Jetson TX2 モジュール
  - NVIDIA® Jetson AGX Xavier モジュール

上記のハードウェアをお持ちの場合は、Deci を使用してハードウェアで作業を進めることができます。

## ハードウェアの準備

以下のハードウェアを準備してください：

- JetPack 4.6 を実行している上記の Jetson デバイスのいずれか
- モニター、キーボード、マウス（オプション）

## Deci アカウントの登録

- **ステップ 1.** [こちらのページ](https://console.deci.ai/sign-up)にアクセスして Deci アカウントを登録してください。

- **ステップ 2.** 必要な情報を入力し、登録プロセスを完了してください。

これで Deci Lab プラットフォームが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/2.png" alt="pir" width={1000} height="auto" /></p>

## Deci Lab モデルズーと事前最適化モデル

デフォルトでは、Deci Lab には **ResNet50 Baseline** モデルが含まれており、インターフェースにすでにロードされています。このモデルには、異なるハードウェア向けのいくつかの最適化が施されています。しかし、それだけではありません。Deci は、さまざまなハードウェア向けに最適化されたベースモデルの膨大なコレクションを Deci Model Zoo に提供しています。**Model Zoo** と **List** をクリックして、利用可能なすべてのモデルを表示してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/3.png" alt="pir" width={1000} height="auto" /></p>

例として、検索バーで **YOLOX** を検索し、すべての YOLOX モデルを表示します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/4.png" alt="pir" width={1000} height="auto" /></p>

ご覧のように、**YOLOX_Nano**、**YOLOX_Small** などのベースモデルや、**YOLOX_Nano Jetson Nano Optimized**、**YOLOX_Nano Jetson Xavier Optimized** などの最適化モデルがあります。

## 独自モデルの最適化

上記で説明したように、事前最適化モデルを直接使用することができ、手動で最適化する必要はありません。しかし、独自のモデルを使用したい場合は、Deci Lab にモデルをアップロードし、ターゲットハードウェアに応じて最適化することができます。

**ステップ 1:** Deci Lab で **+ New Model** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/5.png" alt="pir" width={1000} height="auto" /></p>

**ステップ 2:** モデルに応じた適切なタスクを選択します。ここでは **Object Detection** を選択しました。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/6.png" alt="pir" width={500} height="auto" /></p>

**ステップ 3:** モデルの名前を入力し、**Next** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/7.png" alt="pir" width={500} height="auto" /></p>

**ステップ 4:** モデルフレームワーク（この場合は ONNX）を選択し、選択したフレームワークに応じてモデルをアップロードし、**Next** をクリックします。ここでは [yolov6n.onnx model](https://github.com/meituan/YOLOv6/releases/tag/0.1.0) をアップロードしました。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/8.png" alt="pir" width={500} height="auto" /></p>

**ステップ 5:** **Primary hardware**、**Inference batch size**、**Quantization level** を選択し、**Next** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/9.png" alt="pir" width={500} height="auto" /></p>

**ステップ 6:** パフォーマンス目標と制約を追加します。これは主に **AutoNAC** を使用する場合に役立ちます。AutoNAC は **プレミアムバージョン** に含まれる機能で、モデル推論性能を劇的に向上させると同時にモデルサイズを削減するなどの効果があります。AutoNAC を使用しない場合は、**Throughput** の値を入力する必要があり、ここでは 40（ランダムな値でも可）を設定しました。最後に **start** をクリックして最適化プロセスを開始します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/10.png" alt="pir" width={500} height="auto" /></p>

最適化プロセスが以下のように進行状況を表示し、数分後に完了します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/11.png" alt="pir" width={1000} height="auto" /></p>

## モデル性能の比較

ベースモデルと最適化モデル間の性能を比較するには、Deci Labプラットフォームを使用するか、モデルをターゲットハードウェアにデプロイしてベンチマークを実行する方法があります。Deci Lab上で視覚化する方が簡単ですが、特定のハードウェアにおける性能指標が正確であることを確認するために、モデルをデプロイしてベンチマークを実行することを推奨します。

### Deci Labで視覚化

ここでは、**YOLOX_Nano**ベースモデルと**YOLOX_Nano Jetson Xavier NX Optimized**モデルを使用して比較を行います。

**ステップ 1:** Model Zooに移動し、**YOLOX_Nano**ベースモデルと**YOLOX_Nano Jetson Xavier NX Optimized**モデルの横にある**clone**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/12.png" alt="pir" width={1000} height="auto" /></p>

**ステップ 2:** Deci Labで、**MODEL_VERSIONS**の下にある**YOLOX_Nano**モデルをクリックして**model insights**セクションに移動します。

**ステップ 3:** **Target Hardware**として**Jetson Xavier**を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/13.png" alt="pir" width={1000} height="auto" /></p>

これで、**YOLOX_Nano**モデルがJetson Xavier NXデバイスにデプロイされた場合のすべての性能指標が表示されます。

**ステップ 4:** Deci Labのホームページに戻り、**MODEL_VERSIONS**の下にある**YOLOX_Nano Jetson Xavier NX Optimized**モデルをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/14.png" alt="pir" width={1000} height="auto" /></p>

これで、**YOLOX_Nano Jetson Xavier NX Optimized**モデルがJetson Xavier NXデバイスにデプロイされた場合のすべての性能指標が表示されます。

#### 性能比較

以前に取得したJetson Xavierターゲットハードウェアの結果を以下の表で比較できます。

|                      | YOLOX_Nano | YOLOX_Nano Jetson Xavier NX Optimized |
|----------------------|------------|---------------------------------------|
| 精度                 | 25.8       | 25.8                                  |
| スループット         | 62.8fps    | 175.8fps                              |
| レイテンシ           | 15.9361ms  | 5.6897ms                              |
| GPUメモリ使用量      | 1.05MB     | 1.01MB                                |
| モデルサイズ         | 3.66MB     | 9.74MB                                |

ご覧の通り、主な性能向上はスループットであり、最適化モデルはベースモデルよりも約**2.7倍高速**です。

### Jetsonデバイスにデプロイしてベンチマークを実行

次に、上記の2つのモデルをJetson Xavier NXデバイスにデプロイし、正確な性能結果を得るためにベンチマークを実行します。

#### INFERYのインストール

- **ステップ 1:** Jetsonデバイスでターミナルウィンドウを開き、パッケージリストを更新します。

```sh
sudo apt update 
```

- **ステップ 2:** pipパッケージマネージャをインストールします。

```sh
sudo apt install python3-pip
```

- **ステップ 3:** pipを最新バージョンに更新します。

```sh
python3 -m pip install -U pip
```

- **ステップ 4:** Jetson用のINFERYをインストールします。

```sh
sudo python3 -m pip install https://deci-packages-public.s3.amazonaws.com/infery_jetson-3.2.2-cp36-cp36m-linux_aarch64.whl
```

#### モデルのロード

- **ステップ 1:** Deci Labでモデル名にマウスをホバーし、ポップアップから**Deploy**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/15.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 2:** **Download model**をクリックしてモデルをPCにダウンロードし、このモデルファイルをJetsonデバイスのホームディレクトリにコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/16.png" alt="pir" width={500} height="auto" /></p>

- **ステップ 3:** Jetsonデバイスでターミナルウィンドウを開き、以下を実行します。

```sh
lakshanthad@nano:~$ python3
Python 3.6.9 (default, Dec  8 2021, 21:08:43)
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import infery, numpy as np
```

- **ステップ 4:** Deci Labの**Deploy Model**ウィンドウで**LOAD MODEL**の下にある2番目のコマンドをJetsonデバイスのターミナルウィンドウにコピーします（ターゲットハードウェアとしてJetsonが選択されていることを確認してください）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/17.png" alt="pir" width={500} height="auto" /></p>

```
例: model = infery.load(model_path='YOLOX_Nano.onnx', framework_type='onnx', inference_hardware='gpu')
```

**注意:** **model_path**パラメータを、モデルをコピーした場所に応じて調整してください。モデルファイルをホームディレクトリにコピーした場合は、パスをそのまま使用できます。

モデルが正常にロードされると、以下の出力が表示されます。

```sh
infery_manager -INFO- Loading model YOLOX_Nano.onnx to the GPU
infery_manager -INFO- Successfully loaded YOLOX_Nano.onnx to the GPU.
```

#### モデルの性能測定

INFERYを使用してモデルの性能を測定するには、アプリケーションから**model.benchmark**コマンドを実行します。

```sh
model.benchmark(batch_size=1)
```

以下は**YOLOX_Nano**モデルの出力例です。

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

以下は各項目の説明です：

- 'batch_size' – ベンチマークに使用されたバッチサイズを指定します。
- 'batch_inf_time' – バッチ全体のレイテンシを指定します。
- 'sample_inf_time' – バッチ内の単一サンプルのレイテンシを指定します。これはbatch_inf_timeをbatch_sizeで割った値に相当します。
- 'memory' – 推論中にモデルが使用するメモリフットプリントを指定します。
- 'throughput' – 秒あたりに処理されるリクエスト（フォワードパス）の数を指定します。
- 'batch_inf_time_variance' – ベンチマーク中のバッチ推論時間の分散を指定します。分散が高い場合は、'repetitions'に渡す数を増やしてベンチマークをより信頼性の高いものにすることを推奨します。

**YOLOX_Nano Jetson Xavier NX Optimized モデル**についても同じ手順を繰り返し、ベンチマークを実行すると以下の結果が得られます：

```sh
base_inferencer -INFO- モデルをバッチサイズ 1、次元 [(3, 416, 416)] でベンチマーク中...
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

これらの結果について主にスループットを比較できます。

|            | YOLOX_Nano | YOLOX_Nano Jetson Xavier NX Optimized |
|------------|------------|---------------------------------------|
| スループット | 73.36fps   | 189.25fps                             |

最適化されたモデルはベースモデルよりも約**2.57倍高速**であることが確認できます。

## リソース

- **[Webページ]** [Deci AI Documentation](https://docs.deci.ai/docs)

## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>