---
description: SenseCAP A1101に独自のAIモデルを訓練・デプロイする
title: SenseCAP A1101に独自のAIモデルを訓練・デプロイする
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Train-Deploy-AI-Model-A1101
last_update:
  date: 5/10/2023
  author: Yvonne
---

# SenseCAP A1101に独自のAIモデルを訓練・デプロイする

## 概要

このwikiでは、特定のアプリケーション向けに独自のAIモデルを訓練し、それをSenseCAP A1101 - LoRaWAN Vision AIセンサーに簡単にデプロイする方法を説明します。さあ、始めましょう！

:::caution **注意:**
現在のデバイスファームウェアは[EI](https://wiki.seeedstudio.com/ja/One-Stop-Model-Training-with-Edge-Impulse/)と互換性があります。**2023年3月30日**以降にデバイスを購入した場合は、このwikiに従うために、デバイスを[デフォルトファームウェア](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101/#change-device-firmware-after-image-collection)に戻す必要があります。
:::

## ハードウェア紹介

このwikiでは主にSenseCAP A1101 - LoRaWAN Vision AIセンサーを使用します。まず、このハードウェアに慣れ親しみましょう。

[SenseCAP A1101 - LoRaWAN Vision AIセンサー](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html)は、TinyML AI技術とLoRaWAN長距離伝送を組み合わせて、屋外使用向けの低消費電力・高性能AIデバイスソリューションを実現します。このセンサーは、Google TensorFlow Liteフレームワークと複数のTinyML AIプラットフォームをサポートするHimaxの高性能・低消費電力AIビジョンソリューションを特徴としています。異なるモデルで異なるAI機能を実装できます。例えば、害虫検出、人数カウント、物体認識などです。ユーザーはSeeedが提供するモデルを採用したり、AI訓練ツールを通じて独自のモデルを生成したり、Seeedのパートナーモデルプロバイダーからデプロイ可能な商用モデルを調達したりできます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/60.jpg"/></div>

## ソフトウェア紹介

このwikiでは以下のソフトウェア技術を使用します

- Roboflow - アノテーション用
- YOLOv5 - 訓練用
- TensorFlow Lite - 推論用

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/57.png"/></div>

### Roboflowとは？

[Roboflow](https://roboflow.com)はオンラインベースのアノテーションツールです。このツールを使用すると、すべての画像を簡単にアノテーションし、これらの画像にさらなる処理を追加し、ラベル付きデータセットをYOLOV5 PyTorch、Pascal VOCなどの異なる形式でエクスポートできます！Roboflowには、ユーザーがすぐに利用できるパブリックデータセットもあります。

### YOLOv5とは？

YOLOは「You Only Look Once」の略語です。これは、画像内のさまざまなオブジェクトをリアルタイムで検出・認識するアルゴリズムです。Ultralytics [YOLOv5](https://ultralytics.com/yolov5)は、PyTorchフレームワークに基づくYOLOのバージョンです。

### TensorFlow Liteとは？

[TensorFlow Lite](https://www.tensorflow.org/lite)は、TensorFlowで事前訓練されたモデルを、速度やストレージに最適化できる特別な形式に変換する、オープンソースで製品対応の、クロスプラットフォーム深層学習フレームワークです。この特別な形式のモデルは、AndroidやiOSを使用するモバイルや、Raspberry PiやマイクロコントローラーなどのLinuxベースの組み込みデバイスなどのエッジデバイスにデプロイして、エッジで推論を行うことができます。

## Wiki構造

このwikiは3つの主要なセクションに分かれています

1. [公開データセットで独自のAIモデルを訓練する](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101#1-train-your-own-ai-model-with-a-public-dataset)
2. [独自のデータセットで独自のAIモデルを訓練する](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101#2-train-your-own-ai-model-with-your-own-dataset)
3. [訓練されたAIモデルをSenseCAP A1101にデプロイする](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101#3-deploy-the-trained-model-and-perform-inference)

最初のセクションは、最少のステップで独自のAIモデルを構築する最も速い方法です。2番目のセクションは、独自のAIモデルを構築するのに時間と労力がかかりますが、知識として確実に価値があります。AIモデルのデプロイに関する3番目のセクションは、最初または2番目のセクションの後に実行できます。

このwikiに従う方法は2つあります：

1. [セクション1](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101#1-train-your-own-ai-model-with-a-public-dataset)に従い、その後[セクション3](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101#3-deploy-the-trained-model-and-perform-inference)に従う - 高速に進める

2. [セクション2](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101#2-train-your-own-ai-model-with-your-own-dataset)に従い、その後[セクション3](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101#3-deploy-the-trained-model-and-perform-inference)に従う - 時間をかけて進める

ただし、最初に1番目の方法に従い、その後2番目の方法に移ることをお勧めします。

## 1. 公開データセットで独自のAIモデルを訓練する

物体検出プロジェクトの最初のステップは、訓練用のデータを取得することです。公開されているデータセットをダウンロードするか、独自のデータセットを作成することができます！

しかし、物体検出を始める最も速くて簡単な方法は何でしょうか？それは...公開データセットを使用することで、自分でデータを収集してアノテーションを付ける時間を大幅に節約できます。これらの公開データセットはすでにアノテーションが付いているため、AIビジョンアプリケーションに集中する時間を増やすことができます。

### ハードウェアの準備

- SenseCAP A1101 - LoRaWAN Vision AI Sensor
- USB Type-Cケーブル
- インターネットアクセス可能なWindows/ Linux/ Mac

### ソフトウェアの準備

- 追加のソフトウェアを準備する必要はありません

### 公開されているアノテーション付きデータセットの使用

[COCOデータセット](https://cocodataset.org)、[Pascal VOCデータセット](http://host.robots.ox.ac.uk/pascal/VOC)など、多数の公開データセットをダウンロードできます。[Roboflow Universe](https://universe.roboflow.com)は推奨プラットフォームで、幅広いデータセットを提供しており、コンピュータビジョンモデルの構築に利用できる[90,000以上のデータセットと6600万以上の画像](https://blog.roboflow.com/computer-vision-datasets-and-apis)があります。また、Googleで**オープンソースデータセット**を検索して、利用可能な様々なデータセットから選択することもできます。

- **ステップ1.** [このURL](https://universe.roboflow.com/lakshantha-dissanayake/apple-detection-5z37o/dataset/1)にアクセスして、Roboflow Universeで公開されているApple Detectionデータセットにアクセスします

- **ステップ2.** **Create Account**をクリックしてRoboflowアカウントを作成します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/53.png"/></div>

- **ステップ3.** **Download**をクリックし、**Format**として**YOLO v5 PyTorch**を選択し、**show download code**をクリックして**Continue**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/51.png"/></div>

これにより、後でGoogle Colab訓練内で使用するコードスニペットが生成されます。このウィンドウをバックグラウンドで開いたままにしておいてください。

<div align="center"><img width="{700}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/52.png"/></div>

### Google ColabでYOLOv5を使用した訓練

公開データセットを選択した後、データセットを訓練する必要があります。ここでは、Google Colaboratory環境を使用してクラウドで訓練を実行します。さらに、Colab内でRoboflow apiを使用してデータセットを簡単にダウンロードします。

[ここ](https://colab.research.google.com/github/Seeed-Studio/yolov5-swift/blob/master/tutorial.ipynb)をクリックして、すでに準備されたGoogle Colabワークスペースを開き、ワークスペースで説明されているステップを実行し、コードセルを1つずつ実行してください。

**注意：** Google Colabの**ステップ4**の下のコードセルでは、上記で説明したようにRoboflowからコードスニペットを直接コピーできます

以下の内容を説明します：

- 訓練環境のセットアップ
- データセットのダウンロード
- 訓練の実行
- 訓練されたモデルのダウンロード

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/18.png"/></div>

699枚の画像を含むりんご検出データセットの場合、16GBのGPUメモリを持つNVIDIA Tesla T4 GPU上で動作するGoogle Colabで訓練プロセスを完了するのに約7分かかりました。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/43.png"/></div>

上記のColabプロジェクトに従った場合、デバイスに4つのモデルを一度にロードできることがわかります。ただし、一度に1つのモデルのみをロードできることに注意してください。これはユーザーが指定でき、このwikiで後ほど説明します。

### デプロイと推論

訓練されたAIモデルをSenseCAP A1101にデプロイして推論を実行する方法を説明する**セクション3**に直接ジャンプしたい場合は、[ここをクリック](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101/#3-deploy-the-trained-model-and-perform-inference)してください。

## 2. 独自のデータセットで独自のAIモデルを訓練する

パブリックデータセットに検出したいオブジェクトが含まれていない特定の物体検出プロジェクトを構築したい場合は、独自のデータセットを構築することをお勧めします。独自のデータセット用にデータを記録する際は、オブジェクトのすべての角度（360度）をカバーし、オブジェクトを異なる環境、異なる照明、異なる天候条件に配置することを確認する必要があります。独自のデータセットを記録した後、データセット内の画像にアノテーションを付ける必要もあります。これらすべてのステップは、このセクションで説明されます。

携帯電話のカメラを使用するなど、データを収集する方法は異なりますが、データを収集する最良の方法は、SenseCAP A1101に内蔵されたカメラを使用することです。これは、SenseCAP A1101で推論を実行する際に、色、画質、その他の詳細が類似しているため、全体的な検出がより正確になるためです。

### ハードウェアの準備

- SenseCAP A1101 - LoRaWAN Vision AI Sensor
- USB Type-Cケーブル
- インターネットアクセス可能なWindows/ Linux/ Mac

### ソフトウェアの準備

それでは、ソフトウェアをセットアップしましょう。Windows、Linux、Intel Macのソフトウェアセットアップは同じですが、M1/M2 Macでは異なります。

#### Windows、Linux、Intel Mac

- **ステップ 1.** コンピューターにPythonがすでにインストールされていることを確認してください。インストールされていない場合は、[このページ](https://www.python.org/downloads/)にアクセスして、最新バージョンのPythonをダウンロードしてインストールしてください

- **ステップ 2.** 以下の依存関係をインストールしてください

```sh
pip3 install libusb1
```

#### M1/ M2 Mac

- **ステップ1.** Homebrewをインストールする

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- **ステップ 2.** conda をインストールする

```sh
brew install conda
```

- **ステップ 3.** libusb をダウンロード

```sh
wget https://conda.anaconda.org/conda-forge/osx-arm64/libusb-1.0.26-h1c322ee_100.tar.bz2
```

- **ステップ 4.** libusb をインストールする

```sh
conda install libusb-1.0.26-h1c322ee_100.tar.bz2
```

:::caution
以下の手順を実行する前に、BootLoaderのバージョンが2.0.0以上であることを確認する必要があります。不明な場合は、[このセクション](#check-bootloader-version)で説明されている手順に従ってBootLoaderのバージョンを確認し、バージョンが2.0.0未満の場合は、[このセクション](#update-bootloader)で説明されている手順に従ってBootLoaderを更新してください。
:::

### データセットの収集

- **ステップ1.** USB Type-Cケーブルを使用してSenseCAP A1101をPCに接続します

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **ステップ2.** ブートボタンをダブルクリックして**ブートモード**に入ります

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

この後、ファイルエクスプローラーに**SENSECAP**として新しいストレージドライブが表示されます

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **ステップ3.** [この.uf2ファイル](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_capture_firmware_v01-00.uf2)を**SENSECAP**ドライブにドラッグアンドドロップします

uf2ファイルのドライブへのコピーが完了すると、ドライブが消えます。これは、uf2がモジュールに正常にアップロードされたことを意味します。

- **ステップ4.** [このPythonスクリプト](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/tools/capture_images_script.py)をコピーして、PC上に新しく作成した**capture_images_script.py**という名前のファイルに貼り付けます

- **ステップ5.** Pythonスクリプトを実行して画像のキャプチャを開始します

```sh
python3 capture_images_script.py
```

デフォルトでは、300msごとに画像をキャプチャします。これを変更したい場合は、次の形式でスクリプトを実行できます

```sh
python3 capture_images_script.py --interval <time_in_ms>
```

例えば、1秒ごとに画像をキャプチャするには

```sh
python3 capture_images_script.py --interval 1000
```

上記のスクリプトを実行した後、SenseCAP A1101は内蔵カメラから継続的に画像をキャプチャし、**save_img**という名前のフォルダ内にすべての画像を保存します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/41.png"/></div>

また、録画中にプレビューウィンドウが開きます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/40.jpg"/></div>

十分な画像をキャプチャした後、ターミナルウィンドウをクリックし、以下のキーの組み合わせを押してキャプチャプロセスを停止します。

- Windows: Ctrl + Break
- Linux: Ctrl + Shift + \
- Mac: CMD + Shift + \

### 画像収集後のデバイスファームウェアの変更

データセット用の画像の録画が完了した後、SenseCAP A1101内のファームウェアを元に戻す必要があります。これにより、再び物体検出モデルを読み込んで検出を行うことができます。手順を説明します。

- **ステップ1.** 前述の通り、SenseCAP A1101を**ブートモード**に入れます

- **ステップ2.** お使いのデバイスに応じて、[この.uf2ファイル](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_v01-30.uf2)を**SENSECAP**ドライブにドラッグアンドドロップします

uf2ファイルのドライブへのコピーが完了すると、ドライブが消えます。これは、uf2がモジュールに正常にアップロードされたことを意味します。

### Roboflowを使用したデータセットのアノテーション

独自のデータセットを使用する場合、データセット内のすべての画像にアノテーションを付ける必要があります。アノテーションとは、検出したい各オブジェクトの周りに長方形のボックスを描き、ラベルを割り当てることです。Roboflowを使用してこれを行う方法を説明します。

[Roboflow](https://roboflow.com)は、オンラインベースのアノテーションツールです。ここでは、録画したビデオ映像を直接Roboflowにインポートでき、一連の画像としてエクスポートされます。このツールは、データセットを「トレーニング、検証、テスト」に分散するのに役立つため、非常に便利です。また、このツールでは、ラベル付け後にこれらの画像にさらなる処理を追加することができます。さらに、ラベル付けされたデータセットを**YOLOV5 PyTorch形式**に簡単にエクスポートできます。これはまさに私たちが必要とするものです！

このwikiでは、リンゴを含む画像のデータセットを使用して、後でリンゴを検出し、カウントも行えるようにします。

- **ステップ1.** [こちら](https://app.roboflow.com/login)をクリックしてRoboflowアカウントにサインアップします

- **ステップ2.** **Create New Project**をクリックしてプロジェクトを開始します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/2.jpg"/></div>

- **ステップ3.** **Project Name**を入力し、**License (CC BY 4.0)**と**Project type (Object Detection (Bounding Box))**をデフォルトのままにします。**What will your model predict?**列の下で、アノテーショングループ名を入力します。例えば、私たちの場合は**apples**を選択します。この名前は、データセットのすべてのクラスを強調する必要があります。最後に、**Create Public Project**をクリックします。

<div align="center"><img width="{350}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/6.jpg"/></div>

- **ステップ4.** SenseCAP A1101を使用してキャプチャした画像をドラッグアンドドロップします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/7.png"/></div>

- **ステップ5.** 画像が処理された後、**Finish Uploading**をクリックします。画像がアップロードされるまで辛抱強く待ちます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/4.jpg"/></div>

- **ステップ6.** 画像がアップロードされた後、**Assign Images**をクリックします

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/5.jpg"/></div>

- **ステップ7.** 画像を選択し、リンゴの周りに長方形のボックスを描き、ラベルを**apple**として選択し、**ENTER**を押します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/9.png"/></div>

- **ステップ8.** 残りのリンゴについても同じことを繰り返します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/10.png"/></div>

**注意:** 画像内に見えるすべてのリンゴにラベルを付けるようにしてください。リンゴの一部だけが見える場合も、それにもラベルを付けるようにしてください。

- **ステップ9.** データセット内のすべての画像のアノテーションを続けます

Roboflowには**Label Assist**という機能があり、事前にラベルを予測できるため、ラベル付けがはるかに高速になります。ただし、すべてのオブジェクトタイプで機能するわけではなく、選択されたタイプのオブジェクトでのみ機能します。この機能をオンにするには、**Label Assist**ボタンを押し、**モデルを選択**し、**クラスを選択**して、画像をナビゲートして予測されたラベルとバウンディングボックスを確認するだけです

<div align="center"><img width="{200}" src="https://files.seeedstudio.com/wiki/YOLOV5/41.png"/></div>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/YOLOV5/39.png"/></div>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/YOLOV5/40.png"/></div>

上記のように、言及された80クラスのアノテーションの予測のみを支援できます。画像に上記のオブジェクトクラスが含まれていない場合、ラベルアシスト機能を使用することはできません。

- **ステップ10.** ラベル付けが完了したら、**Add images to Dataset**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/25.jpg"/></div>

- **ステップ11.** 次に、「Train、Valid、Test」間で画像を分割します。分布のデフォルトのパーセンテージを保持し、**Add Images**をクリックします

<div align="center"><img width="{330}" src="https://files.seeedstudio.com/wiki/YOLOV5/26.png"/></div>

- **ステップ12.** **Generate New Version**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/27.jpg"/></div>

- **ステップ13.** 必要に応じて**Preprocessing**と**Augmentation**を追加できます。ここでは、**Resize**オプションを**192x192**に**変更**します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/11.png"/></div>

<div align="center"><img width="{450}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/13.png"/></div>

ここでは、トレーニングに192x192のサイズを使用するため、画像サイズを192x192に変更します。これによりトレーニングが高速化されます。そうしないと、トレーニングプロセス中にすべての画像を192x192に変換する必要があり、より多くのCPUリソースを消費してトレーニングプロセスが遅くなります。

- **ステップ 14.** 次に、残りのデフォルト設定で進み、**Generate**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/14.png"/></div>

- **ステップ 15.** **Export**をクリックし、**Format**として**YOLO v5 PyTorch**を選択し、**show download code**を選択して**Continue**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/54.png"/></div>

これにより、後でGoogle Colabトレーニング内で使用するコードスニペットが生成されます。このウィンドウをバックグラウンドで開いたままにしておいてください。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/55.png"/></div>

### Google ColabでYOLOv5を使用したトレーニング

データセットのアノテーションが完了したら、データセットをトレーニングする必要があります。Google Colab上で実行されるYOLOv5を使用してAIモデルをトレーニングする方法を説明している[この部分](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101/#train-using-yolov5-on-google-colab)にジャンプしてください。

## 3. トレーニング済みモデルをデプロイして推論を実行する

次に、トレーニングの最後に取得した**model-1.uf2**をSenseCAP A1101に移動します。

- **ステップ 1.** 最新バージョンの[Google Chrome](https://www.google.com/chrome)または[Microsoft Edgeブラウザ](https://www.microsoft.com/en-us/edge?r=1)をインストールして開きます

- **ステップ 2.** USB Type-CケーブルでSenseCAP A1101をPCに接続します

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **ステップ 3.** SenseCAP A1101のブートボタンをダブルクリックして、マスストレージモードに入ります

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

この後、ファイルエクスプローラーに**SENSECAP**として新しいストレージドライブが表示されます

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **ステップ 4.** **model-1.uf2**ファイルを**SENSECAP**ドライブにドラッグアンドドロップします

uf2のコピーがドライブに完了すると、ドライブが消えます。これは、uf2がモジュールに正常にアップロードされたことを意味します。

**注意:** 4つのモデルファイルが準備できている場合は、各モデルを1つずつドラッグアンドドロップできます。最初のモデルをドロップし、コピーが完了するまで待ち、再度ブートモードに入り、2番目のモデルをドロップするという具合に進めます。SenseCAP A1101に1つのモデル（インデックス1）のみをロードした場合、そのモデルがロードされます。

- **ステップ 5.** **SenseCAP Mate App**を開きます。お持ちでない場合は、お使いのOSに応じてモバイルフォンにダウンロードしてインストールしてください

  - [Android](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate&hl=en&gl=US)
  - [iOS](https://apps.apple.com/gb/app/sensecap-mate/id1619944834)

- **ステップ 6.** アプリを開き、**Config**画面で**Vision AI Sensor**を選択します

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/21.jpg"/></div>

- **ステップ 7.** SenseCap A1101の設定ボタンを3秒間長押しして、Bluetoothペアリングモードに入ります

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/37.png"/></div>

- **ステップ 8.** **Setup**をクリックすると、近くのSenseCAP A1101デバイスのスキャンが開始されます

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/23.jpg"/></div>

- **ステップ 9.** 見つかったデバイスをクリックします

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/24.jpg"/></div>

- **ステップ 10.** **Settings**に移動し、**Object Detection**が選択されていることを確認します。選択されていない場合は、選択して**Send**をクリックします

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/25.jpg"/></div>

- **ステップ 11.** **General**に移動し、**Detect**をクリックします

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/26.jpg"/></div>

- **ステップ 12.** [ここをクリック](https://files.seeedstudio.com/grove_ai_vision/index.html)してカメラストリームのプレビューウィンドウを開きます

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/31.png"/></div>

- **ステップ 13.** **Connect**ボタンをクリックします。ブラウザにポップアップが表示されます。**SenseCAP Vision AI - Paired**を選択し、**Connect**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/32.png"/></div>

- **ステップ 14.** プレビューウィンドウを使用してリアルタイム推論結果を表示します！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/33.jpg"/></div>

上記のように、リンゴがバウンディングボックスで囲まれて検出されています。ここで「0」は同じクラスの各検出に対応しています。複数のクラスがある場合、0、1、2、3、4などと名前が付けられます。また、検出された各リンゴの信頼度スコア（上記のデモでは0.8と0.84）も表示されています！

## ボーナスコンテンツ

より冒険的な気分になったら、wikiの残りの部分を引き続きフォローできます！

### 自分のPCでAIモデルをトレーニングできますか？

自分のPCを使用して物体検出モデルをトレーニングすることもできます。ただし、トレーニングのパフォーマンスは所有するハードウェアに依存します。また、トレーニング用にLinux OSを搭載したPCが必要です。このwikiではUbuntu 20.04 PCを使用しました。

- **ステップ 1.** **yolov5-swift repo**をクローンし、**Python>=3.7.0**環境で**requirements.txt**をインストールします

```sh
git clone https://github.com/Seeed-Studio/yolov5-swift
cd yolov5-swift
pip install -r requirements.txt
```

- **ステップ 2.** このwikiの手順を以前に実行したことがある場合、Robolflowでアノテーション後にデータセットをエクスポートしたことを覚えているかもしれません。また、Roboflow Universeでもデータセットをダウンロードしました。どちらの方法でも、データセットをどのような形式でダウンロードするかを尋ねる以下のようなウィンドウが表示されました。そこで今度は、**download zip to computer**を選択し、**Format**の下で**YOLO v5 PyTorch**を選択して**Continue**をクリックしてください

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/16.png"/></div>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/17.png"/></div>

その後、**.zipファイル**がコンピューターにダウンロードされます

- **ステップ 3.** ダウンロードした.zipファイルを**yolov5-swift**ディレクトリにコピー＆ペーストし、展開します

```sh
# example
cp ~/Downloads/Apples.v1i.yolov5pytorch.zip ~/yolov5-swift
unzip Apples.v1i.yolov5pytorch.zip
```

- **ステップ 4.** **data.yaml**ファイルを開き、**train**と**val**ディレクトリを以下のように編集する

```sh
train: train/images
val: valid/images
```

- **ステップ 5.** 私たちのトレーニングに適した事前訓練済みモデルをダウンロードする

```sh
sudo apt install wget
wget https://github.com/Seeed-Studio/yolov5-swift/releases/download/v0.1.0-alpha/yolov5n6-xiao.pt
```

- **ステップ 6.** 以下を実行してトレーニングを開始します

ここでは、多数の引数を渡すことができます：

- **img:** 入力画像サイズを定義
- **batch:** バッチサイズを決定
- **epochs:** トレーニングエポック数を定義
- **data:** yamlファイルへのパスを設定
- **cfg:** モデル設定を指定
- **weights:** 重みへのカスタムパスを指定
- **name:** 結果名
- **nosave:** 最終チェックポイントのみを保存
- **cache:** より高速なトレーニングのために画像をキャッシュ

```sh
python3 train.py --img 192 --batch 64 --epochs 100 --data data.yaml --cfg yolov5n6-xiao.yaml --weights yolov5n6-xiao.pt --name yolov5n6_results --cache
```

987枚の画像を含むりんご検出データセットの場合、6GBのGPUメモリを搭載したNVIDIA GeForce GTX 1660 Super GPUで動作するローカルPCでトレーニングプロセスを完了するのに約30分かかりました。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/44.png"/></div>

上記のColabプロジェクトに従った場合、デバイスに4つのモデルを一度にロードできることがわかります。ただし、一度にロードできるモデルは1つだけであることに注意してください。これはユーザーが指定でき、このwikiで後ほど説明します。

- **ステップ 7.** `runs/train/exp/weights`に移動すると、**best.pt**というファイルが表示されます。これがトレーニングから生成されたモデルです。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/YOLOV5/33.jpg"/></div>

- **ステップ 8.** トレーニング済みモデルをTensorFlow Liteにエクスポートする

```sh
python3 export.py --data {dataset.location}/data.yaml --weights runs/train/yolov5n6_results/weights/best.pt --imgsz 192 --int8 --include tflite
```

- **ステップ 9.** TensorFlow Lite を UF2 ファイルに変換する

UF2 は Microsoft によって開発されたファイル形式です。Seeed はこの形式を使用して .tflite を .uf2 に変換し、tflite ファイルを Seeed が発売する AIoT デバイスに保存できるようにしています。現在、Seeed のデバイスは最大 4 つのモデルをサポートしており、各モデル（.tflite）は 1M 未満です。

-t を使用して、対応するインデックスに配置するモデルを指定できます。

例：

- `-t 1`: インデックス 1
- `-t 2`: インデックス 2

```sh
# Place the model to index 1
python3 uf2conv.py -f GROVEAI -t 1 -c runs//train/yolov5n6_results//weights/best-int8.tflite -o model-1.uf2
```

デバイスに4つのモデルを一度にロードできますが、一度に読み込めるモデルは1つだけであることにご注意ください。これはユーザーが指定でき、このwikiで後ほど説明します。

- **ステップ 10.** これで **model-1.uf2** という名前のファイルが生成されます。これがSenseCAP A1101モジュールにロードして推論を実行するファイルです！

## BootLoaderバージョンの確認

- BOOTボタンをダブルクリックし、リムーバブルドライブがマウントされるまで待ちます
- リムーバブルドライブ内のINFO_UF2.TXTを開きます

<div align="center"><img width="{600}" src="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/raw/master/assert/q2.png"/></div>

## BootLoaderの更新

SenseCAP A1101がコンピューターに認識されず、ポート番号が表示されない場合は、BootLoaderを更新する必要があります。

- **ステップ 1**. Windows PCにBootLoader `.bin` ファイルをダウンロードします。

以下のリンクから最新バージョンのBootLoaderファイルをダウンロードしてください。BootLoaderの名前は通常 `tinyuf2-sensecap_vision_ai_vx.x.x.bin` です。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Firware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

これは、コンピューターとHimaxチップ間の接続を構築するBL702チップを制御するファームウェアです。最新バージョンのBootLoaderは、Vision AIがMacやLinuxで認識されない問題を修正しています。

- **ステップ 2**. [**BLDevCube.exe**](https://files.seeedstudio.com/wiki/Grove_AI_Module/BouffaloLabDevCube-1.6.6-win32.rar) ソフトウェアをダウンロードして開き、**BL702/704/706** を選択し、**Finish** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI01a.png" style={{width:300, height:'auto'}}/></div>

- **ステップ 3**. **View** をクリックし、まず **MCU** を選択します。**Image file** に移動し、**Browse** をクリックして、先ほどダウンロードしたファームウェアを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/1.png" style={{width:800, height:'auto'}}/></div>

- **ステップ 4**. PCに他のデバイスが接続されていないことを確認します。次に、モジュールのBootボタンを押したまま、PCに接続します。

- **ステップ 5**. PC上のBLDevCubeソフトウェアに戻り、**Refresh** をクリックして適切なポートを選択します。次に **Open UART** をクリックし、**Chip Erase** を **True** に設定してから **Create&Program** をクリックし、プロセスが完了するまで待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI07.png" style={{width:800, height:'auto'}}/></div>

## リソース

- **[Web Page]** [YOLOv5 Documentation](https://docs.ultralytics.com)

- **[Web Page]** [Ultralytics HUB](https://ultralytics.com/hub)

- **[Web Page]** [Roboflow Documentation](https://docs.roboflow.com)

- **[Web Page]** [TensorFlow Lite Documentation](https://www.tensorflow.org/lite/guide)

- **[PDF]** [SenseCAP A1101 LoRaWAN Vision AI Sensor Specification](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf)

- **[PDF]** [SenseCAP A1101 LoRaWAN Vision AI Sensor User Guide](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_LoRaWAN_Vision_AI_Sensor_User_Guide_V1.0.2.pdf)

- **[PDF]** [SenseCAP S210X LoRaWAN Sensor Catalogue](https://files.seeedstudio.com/products/114992867/SenseCAP%20S210X%20LoRaWAN%20Sensor%20Catalogue.pdf)

- **[PDF]** [FAQ for SenseCAP A1101 LoRaWAN Vision AI Sensor](https://files.seeedstudio.com/wiki/SenseCAP-A1101/FAQ_for_SenseCAP_A1101_LoRaWAN_AI_Vision_Sensor_v1.0.0.pdf)

## 技術サポート & 製品ディスカッション

 <br />

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
