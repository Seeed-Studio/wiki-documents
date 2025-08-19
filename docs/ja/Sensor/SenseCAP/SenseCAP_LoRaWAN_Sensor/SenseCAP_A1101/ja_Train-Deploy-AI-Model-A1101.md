---
description: 独自のAIモデルをSenseCAP A1101にトレーニングしてデプロイする方法
title: 独自のAIモデルをSenseCAP A1101にトレーニングしてデプロイする方法
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Train-Deploy-AI-Model-A1101
last_update:
  date: 05/15/2025
  author: Yvonne
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# 独自のAIモデルをSenseCAP A1101にトレーニングしてデプロイする方法

## 概要

このWikiでは、特定のアプリケーション向けに独自のAIモデルをトレーニングし、それを簡単にSenseCAP A1101 - LoRaWAN Vision AI Sensorにデプロイする方法を説明します。それでは始めましょう！

:::caution **注意:**
現在のデバイスファームウェアは[EI](https://wiki.seeedstudio.com/ja/One-Stop-Model-Training-with-Edge-Impulse/)と互換性があります。**2023年3月30日以降**にデバイスを購入した場合、このWikiに従うためにデバイスを[デフォルトファームウェア](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101/#change-device-firmware-after-image-collection)に戻す必要があります。
:::

## ハードウェアの紹介

このWiki全体を通じて、主にSenseCAP A1101 - LoRaWAN Vision AI Sensorを使用します。まず、このハードウェアについて理解を深めましょう。

[SenseCAP A1101 - LoRaWAN Vision AI Sensor](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html)は、TinyML AI技術とLoRaWAN長距離伝送を組み合わせ、屋外使用向けの低消費電力・高性能AIデバイスソリューションを提供します。このセンサーは、Google TensorFlow Liteフレームワークおよび複数のTinyML AIプラットフォームをサポートするHimaxの高性能・低消費電力AIビジョンソリューションを特徴としています。異なるモデルは、害虫検出、人数カウント、物体認識などの異なるAI機能を実現できます。ユーザーはSeeedが提供するモデルを採用したり、AIトレーニングツールを使用して独自のモデルを生成したり、Seeedのパートナーモデルプロバイダーから商用モデルを購入してデプロイすることができます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/60.jpg"/></div>

## ソフトウェアの紹介

このWikiでは以下のソフトウェア技術を使用します。

- Roboflow - アノテーション用
- YOLOv5 - トレーニング用
- TensorFlow Lite - 推論用

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/57.png"/></div>

### Roboflowとは？

[Roboflow](https://roboflow.com)はオンラインベースのアノテーションツールです。このツールを使用すると、すべての画像を簡単にアノテーションし、これらの画像にさらに処理を加え、YOLOV5 PyTorch、Pascal VOCなどの形式でラベル付きデータセットをエクスポートすることができます。また、Roboflowにはユーザーが利用可能な公開データセットも用意されています。

### YOLOv5とは？

YOLOは「You Only Look Once（1度見るだけ）」の略です。これはリアルタイムで画像内のさまざまなオブジェクトを検出・認識するアルゴリズムです。Ultralyticsの[YOLOv5](https://ultralytics.com/yolov5)は、PyTorchフレームワークに基づいたYOLOのバージョンです。

### TensorFlow Liteとは？

[TensorFlow Lite](https://www.tensorflow.org/lite)は、事前にトレーニングされたTensorFlowモデルを、速度やストレージに最適化できる特別な形式に変換するオープンソースの製品対応クロスプラットフォーム深層学習フレームワークです。この特別な形式のモデルは、AndroidやiOSを使用するモバイルや、Raspberry PiやマイクロコントローラーなどのLinuxベースの組み込みデバイスでエッジ推論を行うためにデプロイすることができます。

## Wiki構造

このWikiは以下の3つの主要セクションに分かれています。

1. [公開データセットを使用して独自のAIモデルをトレーニングする](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101#1-train-your-own-ai-model-with-a-public-dataset)
2. [独自のデータセットを使用して独自のAIモデルをトレーニングする](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101#2-train-your-own-ai-model-with-your-own-dataset)
3. [トレーニング済みのAIモデルをSenseCAP A1101にデプロイする](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101#3-deploy-the-trained-model-and-perform-inference)

最初のセクションでは、最小限のステップで独自のAIモデルを構築する最速の方法を紹介します。2番目のセクションでは、独自のAIモデルを構築するために時間と労力が必要ですが、その知識は確実に価値があります。3番目のセクションでは、トレーニング済みのAIモデルをデプロイする方法を説明しており、これは最初のセクションまたは2番目のセクションの後に実行できます。

このWikiを進めるには2つの方法があります：

1. [セクション1](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101#1-train-your-own-ai-model-with-a-public-dataset)を進めた後に[セクション3](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101#3-deploy-the-trained-model-and-perform-inference)を進める - 簡単に進められる方法
2. [セクション2](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101#2-train-your-own-ai-model-with-your-own-dataset)を進めた後に[セクション3](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101#3-deploy-the-trained-model-and-perform-inference)を進める - 時間がかかる方法

ただし、最初は1つ目の方法を進め、その後2つ目の方法に進むことをお勧めします。

## 1. 公開データセットを使用して独自のAIモデルをトレーニングする

オブジェクト検出プロジェクトの最初のステップは、トレーニング用のデータを取得することです。公開されているデータセットをダウンロードするか、独自のデータセットを作成することができます。

しかし、オブジェクト検出を始める最速かつ最も簡単な方法は何でしょうか？それは...公開データセットを使用することです。これにより、自分でデータを収集して注釈を付ける時間を大幅に節約できます。これらの公開データセットはすでに注釈が付けられているため、AIビジョンアプリケーションに集中する時間を増やすことができます。

### ハードウェア準備

- SenseCAP A1101 - LoRaWAN Vision AIセンサー
- USB Type-Cケーブル
- インターネット接続可能なWindows/Linux/Mac

### ソフトウェア準備

- 追加のソフトウェアを準備する必要はありません

### 公開されている注釈付きデータセットを使用する

[COCOデータセット](https://cocodataset.org)、[Pascal VOCデータセット](http://host.robots.ox.ac.uk/pascal/VOC)など、多くの公開データセットをダウンロードできます。[Roboflow Universe](https://universe.roboflow.com)は、幅広いデータセットを提供する推奨プラットフォームであり、[90,000以上のデータセットと6,600万以上の画像](https://blog.roboflow.com/computer-vision-datasets-and-apis)がコンピュータビジョンモデルの構築に利用可能です。また、Googleで「オープンソースデータセット」を検索することで、さまざまなデータセットから選択できます。

- **ステップ1.** [このURL](https://universe.roboflow.com/lakshantha-dissanayake/apple-detection-5z37o/dataset/1)にアクセスして、Roboflow Universeで公開されているApple Detectionデータセットにアクセスします。

- **ステップ2.** **Create Account**をクリックしてRoboflowアカウントを作成します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/53.png"/></div>

- **ステップ3.** **Download**をクリックし、**YOLO v5 PyTorch**を**Format**として選択し、**show download code**をクリックして**Continue**をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/51.png"/></div>

これにより、後でGoogle Colabトレーニング内で使用するコードスニペットが生成されます。このウィンドウをバックグラウンドで開いたままにしてください。

<div align="center"><img width="{700}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/52.png"/></div>

### Google ColabでYOLOv5を使用してトレーニング

公開データセットを選択した後、そのデータセットをトレーニングする必要があります。ここでは、Google Colaboratory環境を使用してクラウド上でトレーニングを実行します。さらに、Colab内でRoboflow APIを使用してデータセットを簡単にダウンロードします。

[こちらをクリック](https://colab.research.google.com/github/Seeed-Studio/yolov5-swift/blob/master/tutorial.ipynb)して、すでに準備されたGoogle Colabワークスペースを開き、ワークスペースに記載されている手順を確認し、コードセルを1つずつ実行してください。

**注意:** Google Colabの**ステップ4**のコードセルでは、上記で説明したようにRoboflowからコードスニペットを直接コピーできます。

以下の内容を順に説明します：

- トレーニング用環境のセットアップ
- データセットのダウンロード
- トレーニングの実行
- トレーニング済みモデルのダウンロード

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/18.png"/></div>

699枚の画像を含むApple Detectionデータセットの場合、NVIDIA Tesla T4 GPU（16GB GPUメモリ）を使用してGoogle Colab上でトレーニングプロセスを完了するのに約7分かかりました。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/43.png"/></div>

上記のColabプロジェクトに従った場合、デバイスに一度に4つのモデルをロードできることがわかります。ただし、1回にロードできるモデルは1つだけです。これはユーザーが指定でき、後ほどこのWikiで説明します。

### デプロイと推論

トレーニング済みのAIモデルをSenseCAP A1101にデプロイして推論を実行する方法を説明する**セクション3**に直接進みたい場合は、[こちらをクリック](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101/#3-deploy-the-trained-model-and-perform-inference)してください。

## 2. 独自のデータセットでAIモデルをトレーニングする

特定の物体検出プロジェクトを構築したい場合、公開されているデータセットに検出したい物体が含まれていないことがあります。その場合は、独自のデータセットを作成する必要があります。独自のデータセットを記録する際には、物体の全角度（360度）をカバーし、異なる環境、異なる照明条件、異なる天候条件で物体を配置する必要があります。データセットを記録した後は、データセット内の画像にアノテーションを付ける必要があります。これらの手順はすべてこのセクションで説明します。

データ収集にはスマートフォンのカメラを使用するなど、さまざまな方法がありますが、最も適した方法はSenseCAP A1101に内蔵されたカメラを使用することです。これは、SenseCAP A1101で推論を行う際に色、画像品質、その他の詳細が一致するため、全体的な検出精度が向上するからです。

### ハードウェアの準備

- SenseCAP A1101 - LoRaWAN Vision AIセンサー
- USB Type-Cケーブル
- インターネット接続可能なWindows/Linux/Mac

### ソフトウェアの準備

次にソフトウェアをセットアップします。Windows、Linux、Intel Macのソフトウェアセットアップは同じですが、M1/M2 Macの場合は異なります。

#### Windows、Linux、Intel Mac

- **ステップ1.** コンピュータにPythonがすでにインストールされていることを確認します。インストールされていない場合は、[こちらのページ](https://www.python.org/downloads/)から最新バージョンのPythonをダウンロードしてインストールしてください。

- **ステップ2.** 以下の依存関係をインストールします。

```sh
pip3 install libusb1
```

#### M1/M2 Mac

- **ステップ1.** Homebrewをインストールします。

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- **ステップ2.** condaをインストールします。

```sh
brew install conda
```

- **ステップ3.** libusbをダウンロードします。

```sh
wget https://conda.anaconda.org/conda-forge/osx-arm64/libusb-1.0.26-h1c322ee_100.tar.bz2
```

- **ステップ4.** libusbをインストールします。

```sh
conda install libusb-1.0.26-h1c322ee_100.tar.bz2
```

:::caution
BootLoaderのバージョンが2.0.0以上であることを確認する必要があります。そうでない場合、以下の操作を行う前にファームウェアを変更することはできません。BootLoaderのバージョンが不明な場合は、このセクションに記載されている手順に従ってバージョンを確認してください。バージョンが2.0.0未満の場合は、このセクションに記載されている手順に従ってBootLoaderを更新してください。
:::

### データセットの収集

- **ステップ1.** USB Type-Cケーブルを使用してSenseCAP A1101をPCに接続します。

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **ステップ2.** ブートボタンをダブルクリックして**ブートモード**に入ります。

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

これにより、ファイルエクスプローラーに**SENSECAP**という新しいストレージドライブが表示されます。

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **ステップ3.** [この.uf2ファイル](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_capture_firmware_v01-00.uf2)を**SENSECAP**ドライブにドラッグ＆ドロップします。

.uf2ファイルのコピーが完了すると、ドライブが消えます。これは、uf2がモジュールに正常にアップロードされたことを意味します。

- **ステップ4.** [このPythonスクリプト](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/tools/capture_images_script.py)をコピーして、PC上で**capture_images_script.py**という名前の新しいファイルに貼り付けます。

- **ステップ5.** Pythonスクリプトを実行して画像のキャプチャを開始します。

```sh
python3 capture_images_script.py
```

デフォルトでは、300msごとに画像をキャプチャします。これを変更したい場合は、以下の形式でスクリプトを実行します。

```sh
python3 capture_images_script.py --interval <time_in_ms>
```

例えば、1秒ごとに画像をキャプチャする場合：

```sh
python3 capture_images_script.py --interval 1000
```

上記のスクリプトが実行されると、SenseCAP A1101は内蔵カメラから連続的に画像をキャプチャし、すべてを**save_img**という名前のフォルダに保存します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/41.png"/></div>

また、記録中にプレビューウィンドウが開きます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/40.jpg"/></div>

十分な画像がキャプチャされたら、ターミナルウィンドウをクリックして以下のキーコンビネーションを押してキャプチャプロセスを停止します。

- Windows: Ctrl + Break
- Linux: Ctrl + Shift + \
- Mac: CMD + Shift + \

### 画像収集後のデバイスファームウェアの変更

データセット用の画像の記録が完了したら、SenseCAP A1101内のファームウェアを元の状態に戻す必要があります。これにより、物体検出モデルを再度ロードして検出を行うことができます。以下の手順を実行してください。

- **ステップ1.** 前述の方法でSenseCAP A1101を**ブートモード**にします。

- **ステップ2.** [この.uf2ファイル](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_v01-30.uf2)をデバイスに応じて**SENSECAP**ドライブにドラッグ＆ドロップします。

.uf2ファイルのコピーが完了すると、ドライブが消えます。これは、uf2がモジュールに正常にアップロードされたことを意味します。

### Roboflowを使用したデータセットのアノテーション

独自のデータセットを使用する場合、データセット内のすべての画像にアノテーションを付ける必要があります。アノテーションとは、検出したい各物体の周りに矩形を描き、それにラベルを割り当てることを意味します。ここでは、Roboflowを使用してこれを行う方法を説明します。

[Roboflow](https://roboflow.com)はオンラインベースのアノテーションツールです。ここでは、記録した動画を直接Roboflowにインポートし、それを一連の画像にエクスポートすることができます。このツールは非常に便利で、データセットを「トレーニング、検証、テスト」に分割するのを助けてくれます。また、ラベル付け後にこれらの画像にさらに処理を追加することも可能です。さらに、このツールはラベル付けされたデータセットを**YOLOV5 PyTorch形式**で簡単にエクスポートすることができ、これがまさに必要な形式です！

このウィキでは、リンゴを含む画像のデータセットを使用して、後でリンゴを検出し、カウントを行う方法を説明します。

- **ステップ 1.** [こちら](https://app.roboflow.com/login)をクリックして、Roboflow アカウントにサインアップします。

- **ステップ 2.** **Create New Project** をクリックしてプロジェクトを開始します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/2.jpg"/></div>

- **ステップ 3.** **Project Name** を入力し、**License (CC BY 4.0)** と **Project type (Object Detection (Bounding Box))** をデフォルトのままにします。**What will your model predict?** の列には、アノテーショングループ名を入力します。例えば、ここでは **apples** を選択します。この名前はデータセットのすべてのクラスを表す必要があります。最後に、**Create Public Project** をクリックします。

<div align="center"><img width="{350}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/6.jpg"/></div>

- **ステップ 4.** SenseCAP A1101 を使用してキャプチャした画像をドラッグ＆ドロップします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/7.png"/></div>

- **ステップ 5.** 画像が処理されたら、**Finish Uploading** をクリックします。画像がアップロードされるまでしばらくお待ちください。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/4.jpg"/></div>

- **ステップ 6.** 画像がアップロードされたら、**Assign Images** をクリックします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/5.jpg"/></div>

- **ステップ 7.** 画像を選択し、リンゴの周りに長方形のボックスを描画し、ラベルを **apple** に設定して **ENTER** を押します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/9.png"/></div>

- **ステップ 8.** 残りのリンゴについても同じ操作を繰り返します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/10.png"/></div>

**注意:** 画像内に見えるすべてのリンゴをラベル付けするようにしてください。リンゴの一部しか見えない場合でも、それをラベル付けするようにしてください。

- **ステップ 9.** データセット内のすべての画像にアノテーションを続けます。

Roboflow には **Label Assist** という機能があり、ラベルを事前に予測してラベル付けをより迅速に行うことができます。ただし、この機能はすべてのオブジェクトタイプに対応しているわけではなく、特定のオブジェクトタイプに限定されています。この機能を有効にするには、**Label Assist** ボタンを押し、**モデルを選択**し、**クラスを選択**して、予測されたラベルとバウンディングボックスを画像で確認します。

<div align="center"><img width="{200}" src="https://files.seeedstudio.com/wiki/YOLOV5/41.png"/></div>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/YOLOV5/39.png"/></div>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/YOLOV5/40.png"/></div>

上記のように、この機能は80クラスに限定されており、それ以外のオブジェクトクラスが画像に含まれている場合、この機能を使用することはできません。

- **ステップ 10.** ラベル付けが完了したら、**Add images to Dataset** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/25.jpg"/></div>

- **ステップ 11.** 次に、画像を「Train, Valid, Test」に分割します。デフォルトの分布割合を維持し、**Add Images** をクリックします。

<div align="center"><img width="{330}" src="https://files.seeedstudio.com/wiki/YOLOV5/26.png"/></div>

- **ステップ 12.** **Generate New Version** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/27.jpg"/></div>

- **ステップ 13.** 必要に応じて **Preprocessing** と **Augmentation** を追加します。ここでは **Resize** オプションを **192x192** に変更します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/11.png"/></div>

<div align="center"><img width="{450}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/13.png"/></div>

ここで画像サイズを 192x192 に変更する理由は、トレーニング時にこのサイズを使用するためです。この設定によりトレーニングが高速化されます。そうしない場合、トレーニングプロセス中にすべての画像を 192x192 に変換する必要があり、CPU リソースを多く消費し、トレーニングプロセスが遅くなります。

- **ステップ 14.** 残りのデフォルト設定を維持し、**Generate** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/14.png"/></div>

- **ステップ 15.** **Export** をクリックし、**Format** を **YOLO v5 PyTorch** に設定し、**show download code** を選択して **Continue** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/54.png"/></div>

これにより、後で Google Colab トレーニング内で使用するコードスニペットが生成されます。このウィンドウをバックグラウンドで開いたままにしてください。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/55.png"/></div>

### Google Colab で YOLOv5 を使用してトレーニング

データセットのアノテーションが完了したら、次はデータセットをトレーニングする必要があります。[こちらのセクション](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101/#train-using-yolov5-on-google-colab)に進み、Google Colab 上で YOLOv5 を使用して AI モデルをトレーニングする方法を確認してください。

## 3. 訓練済みモデルをデプロイして推論を実行する

次に、訓練の最後に取得した **model-1.uf2** を SenseCAP A1101 に移動します。

- **ステップ 1.** 最新バージョンの [Google Chrome](https://www.google.com/chrome) または [Microsoft Edge ブラウザ](https://www.microsoft.com/en-us/edge?r=1) をインストールして開きます。

- **ステップ 2.** USB Type-C ケーブルを使用して SenseCAP A1101 を PC に接続します。

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **ステップ 3.** SenseCAP A1101 のブートボタンをダブルクリックして、マスストレージモードに入ります。

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

これにより、ファイルエクスプローラーに **SENSECAP** という新しいストレージドライブが表示されます。

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **ステップ 4.** **model-1.uf2** ファイルを **SENSECAP** ドライブにドラッグ＆ドロップします。

uf2 ファイルのコピーが完了すると、ドライブが消えます。これは、uf2 がモジュールに正常にアップロードされたことを意味します。

**注意:** 4つのモデルファイルが準備されている場合は、各モデルを1つずつドラッグ＆ドロップできます。最初のモデルをドロップし、コピーが完了するのを待ち、再度ブートモードに入り、次のモデルをドロップするという手順を繰り返します。SenseCAP A1101 に1つのモデル（インデックス1）のみをロードした場合、そのモデルがロードされます。

- **ステップ 5.** **SenseCAP Mate App** を開きます。まだインストールしていない場合は、OSに応じてモバイル端末にダウンロードしてインストールしてください。

  - [Android](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate&hl=en&gl=US)
  - [iOS](https://apps.apple.com/gb/app/sensecap-mate/id1619944834)

- **ステップ 6.** アプリを開き、**Config** 画面で **Vision AI Sensor** を選択します。

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/21.jpg"/></div>

- **ステップ 7.** SenseCap A1101 の設定ボタンを3秒間押し続けて、Bluetooth ペアリングモードに入ります。

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/37.png"/></div>

- **ステップ 8.** **Setup** をクリックすると、近くの SenseCAP A1101 デバイスをスキャンし始めます。

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/23.jpg"/></div>

- **ステップ 9.** 見つかったデバイスをクリックします。

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/24.jpg"/></div>

- **ステップ 10.** **Settings** に移動し、**Object Detection** が選択されていることを確認します。選択されていない場合は選択して **Send** をクリックします。

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/25.jpg"/></div>

- **ステップ 11.** **General** に移動して **Detect** をクリックします。

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/26.jpg"/></div>

- **ステップ 12.** [こちらをクリック](https://files.seeedstudio.com/grove_ai_vision/index.html)してカメラストリームのプレビューウィンドウを開きます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/31.png"/></div>

- **ステップ 13.** **Connect** ボタンをクリックします。するとブラウザにポップアップが表示されます。**SenseCAP Vision AI - Paired** を選択して **Connect** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/32.png"/></div>

- **ステップ 14.** プレビューウィンドウを使用してリアルタイムの推論結果を確認します！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/33.jpg"/></div>

上記のように、リンゴが検出され、周囲にバウンディングボックスが表示されています。ここで「0」は同じクラスの各検出を表します。複数のクラスがある場合、それらは 0, 1, 2, 3, 4 のように名前が付けられます。また、検出されたリンゴの信頼度スコア（上記のデモでは 0.8 と 0.84）が表示されています！

## ボーナスコンテンツ

さらに冒険したい場合は、このWikiの残りの部分を続けてみてください！

### 自分のPCでAIモデルをトレーニングできますか？

自分のPCを使って物体検出モデルをトレーニングすることも可能です。ただし、トレーニングのパフォーマンスは使用するハードウェアに依存します。また、トレーニングにはLinux OSを搭載したPCが必要です。このWikiではUbuntu 20.04 PCを使用しています。

- **ステップ1.** **yolov5-swiftリポジトリ**をクローンし、**Python>=3.7.0**環境で**requirements.txt**をインストールします。

```sh
git clone https://github.com/Seeed-Studio/yolov5-swift
cd yolov5-swift
pip install -r requirements.txt
```

- **ステップ2.** このWikiの以前の手順に従った場合、Roboflowでアノテーションを行った後にデータセットをエクスポートしたことを覚えているかもしれません。また、Roboflow Universeでデータセットをダウンロードしました。どちらの方法でも、以下のようなウィンドウが表示され、データセットのダウンロード形式を選択するよう求められました。この時、**download zip to computer**を選択し、**Format**で**YOLO v5 PyTorch**を選択して**Continue**をクリックしてください。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/16.png"/></div>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/17.png"/></div>

その後、**.zipファイル**がコンピュータにダウンロードされます。

- **ステップ3.** ダウンロードした.zipファイルを**yolov5-swift**ディレクトリにコピーして解凍します。

```sh
# 例
cp ~/Downloads/Apples.v1i.yolov5pytorch.zip ~/yolov5-swift
unzip Apples.v1i.yolov5pytorch.zip
```

- **ステップ4.** **data.yaml**ファイルを開き、**train**および**val**ディレクトリを以下のように編集します。

```sh
train: train/images
val: valid/images
```

- **ステップ5.** トレーニングに適した事前学習済みモデルをダウンロードします。

```sh
sudo apt install wget
wget https://github.com/Seeed-Studio/yolov5-swift/releases/download/v0.1.0-alpha/yolov5n6-xiao.pt
```

- **ステップ6.** 以下のコマンドを実行してトレーニングを開始します。

ここでは、いくつかの引数を指定できます：

- **img:** 入力画像サイズを定義
- **batch:** バッチサイズを指定
- **epochs:** トレーニングエポック数を定義
- **data:** yamlファイルのパスを設定
- **cfg:** モデル構成を指定
- **weights:** カスタムウェイトのパスを指定
- **name:** 結果の名前
- **nosave:** 最終チェックポイントのみ保存
- **cache:** 画像をキャッシュしてトレーニングを高速化

```sh
python3 train.py --img 192 --batch 64 --epochs 100 --data data.yaml --cfg yolov5n6-xiao.yaml --weights yolov5n6-xiao.pt --name yolov5n6_results --cache
```

987枚の画像を含むリンゴ検出データセットでは、NVIDIA GeForce GTX 1660 Super GPU（6GB GPUメモリ）を搭載したローカルPCでトレーニングプロセスを完了するのに約30分かかりました。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/44.png"/></div>

上記のColabプロジェクトに従った場合、デバイスに一度に4つのモデルをロードできることを知っているかもしれません。ただし、1回にロードできるモデルは1つだけです。これはユーザーが指定でき、このWikiの後半で説明されます。

- **ステップ7.** `runs/train/exp/weights`に移動すると、**best.pt**という名前のファイルが表示されます。これがトレーニングから生成されたモデルです。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/YOLOV5/33.jpg"/></div>

- **ステップ8.** トレーニング済みモデルをTensorFlow Liteにエクスポートします。

```sh
python3 export.py --data {dataset.location}/data.yaml --weights runs/train/yolov5n6_results/weights/best.pt --imgsz 192 --int8 --include tflite
```

- **ステップ9.** TensorFlow LiteをUF2ファイルに変換します。

UF2はMicrosoftによって開発されたファイル形式です。Seeedはこの形式を使用して.tfliteを.uf2に変換し、Seeedが発売したAIoTデバイスにtfliteファイルを保存できるようにしています。現在、Seeedのデバイスは最大4つのモデルをサポートしており、各モデル（.tflite）は1M未満です。

対応するインデックスにモデルを配置するには、`-t`オプションを使用します。

例：

- `-t 1`: インデックス1
- `-t 2`: インデックス2

```sh
# モデルをインデックス1に配置
python3 uf2conv.py -f GROVEAI -t 1 -c runs//train/yolov5n6_results//weights/best-int8.tflite -o model-1.uf2
```

一度にデバイスに4つのモデルをロードできますが、1回にロードできるモデルは1つだけです。これはユーザーが指定でき、このWikiの後半で説明されます。

- **ステップ10.** **model-1.uf2**という名前のファイルが生成されます。これが、SenseCAP A1101モジュールにロードして推論を実行するためのファイルです！

## ブートローダーバージョンの確認
- BOOTボタンをダブルクリックし、リムーバブルドライブがマウントされるのを待ちます。
- リムーバブルドライブ内のINFO_UF2.TXTを開きます。
<div align="center"><img width="{600}" src="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/raw/master/assert/q2.png"/></div>

## ブートローダーの更新

もしSenseCAP A1101がコンピュータに認識されず、ポート番号が表示されない場合は、ブートローダーを更新する必要があるかもしれません。

- **ステップ 1**. Windows PCにブートローダー `.bin` ファイルをダウンロードします。

以下のリンクから最新バージョンのブートローダーファイルをダウンロードしてください。ブートローダーの名前は通常 `tinyuf2-sensecap_vision_ai_vx.x.x.bin` です。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ファームウェアをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

このファームウェアはBL702チップを制御し、コンピュータとHimaxチップ間の接続を構築します。最新バージョンのブートローダーでは、Vision AIがMacやLinuxで認識されない問題が修正されています。

- **ステップ 2**. [**BLDevCube.exe**](https://files.seeedstudio.com/wiki/Grove_AI_Module/BouffaloLabDevCube-1.6.6-win32.rar) ソフトウェアをダウンロードして開き、**BL702/704/706** を選択し、**Finish** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI01a.png" style={{width:300, height:'auto'}}/></div>

- **ステップ 3**. **View** をクリックし、まず **MCU** を選択します。その後、**Image file** に移動し、**Browse** をクリックして先ほどダウンロードしたファームウェアを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/1.png" style={{width:800, height:'auto'}}/></div>

- **ステップ 4**. 他のデバイスがPCに接続されていないことを確認します。その後、モジュールのBootボタンを押しながらPCに接続します。

- **ステップ 5**. PC上のBLDevCubeソフトウェアに戻り、**Refresh** をクリックして適切なポートを選択します。その後、**Open UART** をクリックし、**Chip Erase** を **True** に設定してから **Create&Program** をクリックし、プロセスが完了するのを待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI07.png" style={{width:800, height:'auto'}}/></div>

## リソース

- **[ウェブページ]** [YOLOv5 ドキュメント](https://docs.ultralytics.com)

- **[ウェブページ]** [Ultralytics HUB](https://ultralytics.com/hub)

- **[ウェブページ]** [Roboflow ドキュメント](https://docs.roboflow.com)

- **[ウェブページ]** [TensorFlow Lite ドキュメント](https://www.tensorflow.org/lite/guide)

- **[PDF]** [SenseCAP A1101 LoRaWAN Vision AI センサー仕様書](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf)

- **[PDF]** [SenseCAP A1101 LoRaWAN Vision AI センサー ユーザーガイド](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_LoRaWAN_Vision_AI_Sensor_User_Guide_V1.0.2.pdf)

- **[PDF]** [SenseCAP S210X LoRaWAN センサーカタログ](https://files.seeedstudio.com/products/114992867/SenseCAP%20S210X%20LoRaWAN%20Sensor%20Catalogue.pdf)

- **[PDF]** [SenseCAP A1101 LoRaWAN Vision AI センサー FAQ](https://files.seeedstudio.com/wiki/SenseCAP-A1101/FAQ_for_SenseCAP_A1101_LoRaWAN_AI_Vision_Sensor_v1.0.0.pdf)

## 技術サポート & 製品ディスカッション

 <br />

弊社製品をご利用いただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>