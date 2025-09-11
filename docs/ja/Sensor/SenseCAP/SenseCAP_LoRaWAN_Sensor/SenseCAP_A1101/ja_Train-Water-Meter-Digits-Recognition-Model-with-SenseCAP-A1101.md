---
description: SenseCAP A1101を使用して水道メーターの数字認識モデルをトレーニングする
title: SenseCAP A1101を使用して水道メーターの数字認識モデルをトレーニングする
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Train-Water-Meter-Digits-Recognition-Model-with-SenseCAP-A1101
date: 08/17/2023
author: JoJang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# SenseCAP A1101を使用して水道メーターの数字認識モデルをトレーニングする

## 概要

このWikiでは、特定のアプリケーション向けに独自のメーターモデルをトレーニングし、それを簡単にSenseCAP A1101にデプロイする方法を説明します。それでは始めましょう！
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/0.jpg"/></div>


## ハードウェア準備

- [SenseCAP A1101 - LoRaWAN Vision AI Sensor](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html)
- USB Type-Cケーブル
- インターネット接続が可能なWindows/Linux/Mac

## ソフトウェア準備

このWikiでは以下のソフトウェア技術を使用します：

- [Roboflow](https://roboflow.com) - アノテーション用
- [SenseCraft Model Assistant](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process) - トレーニング用
- [TensorFlow Lite](https://www.tensorflow.org/lite) - 推論用

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/11.png"/></div>


それではソフトウェアをセットアップしましょう。Windows、Linux、Intel Macのソフトウェアセットアップは同じですが、M1/M2 Macの場合は異なります。

:::tip
**SenseCraft Model Assistantとは？** Seeed Studio SenseCraft Model Assistantは、組み込みAIに焦点を当てたオープンソースプロジェクトです。OpenMMLabの優れたアルゴリズムを実世界のシナリオ向けに最適化し、実装をよりユーザーフレンドリーにすることで、組み込みデバイスでの推論をより高速かつ正確に実現しています。
:::

### Windows、Linux、Intel Mac

- **ステップ1.** コンピュータにPythonがインストールされていることを確認します。インストールされていない場合は、[こちらのページ](https://www.python.org/downloads/)から最新バージョンのPythonをダウンロードしてインストールしてください。

- **ステップ2.** 以下の依存関係をインストールします。

```sh
pip3 install libusb1
```

### M1/M2 Mac

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
ファームウェアを変更する前に、BootLoaderのバージョンが2.0.0以上であることを確認する必要があります。バージョンが不明な場合は、[このセクション](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101/#check-bootloader-version)に記載されている手順に従ってBootLoaderのバージョンを確認してください。バージョンが2.0.0未満の場合は、[このセクション](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101/#update-bootloader)に記載されている手順に従ってBootLoaderを更新してください。
:::



## 1. 画像データの収集

- **ステップ 1.** USB Type-C ケーブルを使用して SenseCAP A1101 を PC に接続します。

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **ステップ 2.** ブートボタンをダブルクリックして **ブートモード** に入ります。

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

これにより、ファイルエクスプローラーに **SENSECAP** という新しいストレージドライブが表示されます。

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **ステップ 3.** [この .uf2 ファイル](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_capture_firmware_v01-00.uf2) を **SENSECAP** ドライブにドラッグ＆ドロップします。

uf2 ファイルのコピーが完了すると、ドライブが消えます。これは、uf2 がモジュールに正常にアップロードされたことを意味します。

- **ステップ 4.** [この Python スクリプト](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/tools/capture_images_script.py) をコピーして、PC 上で新しく作成した **capture_images_script.py** という名前のファイルに貼り付けます。

- **ステップ 5.** Python スクリプトを実行して画像のキャプチャを開始します。

```sh
python3 capture_images_script.py
```

デフォルトでは、300ms ごとに画像をキャプチャします。これを変更したい場合は、以下の形式でスクリプトを実行できます。

```sh
python3 capture_images_script.py --interval <time_in_ms>
```

例えば、1秒ごとに画像をキャプチャする場合：

```sh
python3 capture_images_script.py --interval 1000
```

上記のスクリプトを実行すると、SenseCAP A1101 は内蔵カメラから連続的に画像をキャプチャし、すべてを **save_img** という名前のフォルダに保存します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/1.png"/></div>

また、録画中にプレビューウィンドウが開きます。

十分な画像をキャプチャしたら、ターミナルウィンドウをクリックして以下のキーの組み合わせを押してキャプチャプロセスを停止します。

- Windows: Ctrl + Break
- Linux: Ctrl + Shift + \
- Mac: CMD + Shift + \

### 画像収集後のデバイスファームウェアの変更

データセット用の画像の録画が終了したら、SenseCAP A1101 内のファームウェアを元に戻して、物体検出モデルを再度ロードできるようにする必要があります。以下の手順を進めます。

- **ステップ 1.** 前述の手順に従って SenseCAP A1101 を **ブートモード** にします。

- **ステップ 2.** [この .uf2 ファイル](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_v01-30.uf2) をデバイスに応じて **SENSECAP** ドライブにドラッグ＆ドロップします。

uf2 ファイルのコピーが完了すると、ドライブが消えます。これは、uf2 がモジュールに正常にアップロードされたことを意味します。

## 2. RoboFlow を使用したデータセットの生成

[RoboFlow](https://roboflow.com) はオンラインベースのアノテーションツールです。ここでは、録画した映像を直接 RoboFlow にインポートし、一連の画像としてエクスポートできます。このツールは非常に便利で、データセットを「トレーニング、検証、テスト」に分割するのを助けてくれます。また、ラベル付け後にこれらの画像にさらに処理を追加することも可能です。さらに、ラベル付けされたデータセットを **COCO フォーマット** に簡単にエクスポートできるため、まさに必要な形式を提供してくれます！

- **ステップ 1.** [こちらをクリック](https://app.roboflow.com/login)して RoboFlow アカウントにサインアップします。

- **ステップ 2.** **Create New Project** をクリックしてプロジェクトを開始します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/2.jpg"/></div>

- **ステップ 3.** **Project Name** を入力し、**License (CC BY 4.0)** と **Project type (Object Detection (Bounding Box))** をデフォルトのままにします。**What will your model predict?** の列にはアノテーショングループ名を入力します。
<div align="center"><img width="{350}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/2.png"/></div>

- **ステップ 4.** SenseCAP A1101 を使用してキャプチャした画像をドラッグ＆ドロップします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/3.png"/></div>

- **ステップ 5.** 画像が処理されたら、**Finish Uploading** をクリックします。画像がアップロードされるまでしばらく待ちます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/4.jpg"/></div>

- **ステップ 6.** 画像がアップロードされたら、**Assign Images** をクリックします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/5.jpg"/></div>

- **ステップ 7.** 画像を選択し、数字の周りに矩形ボックスを描画して、ラベルを **digits** に設定し、**ENTER** を押します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4.png"/></div>

- **ステップ 8.** 残りの画像についても同じ操作を繰り返します。
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/5.png"/></div>

- **ステップ 9.** データセット内のすべての画像にアノテーションを続けます。

- **ステップ 10.** ラベル付けが完了したら、**Add images to Dataset** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/25.jpg"/></div>

- **ステップ 11.** 次に、画像を「Train、Valid、Test」に分割します。データセットが多い場合は 80/20、少ない場合は 85/15 に分割できます。**Train** は 80 未満にしないよう注意してください。

<div align="center"><img width="{330}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/12.png"/></div>

- **ステップ 12.** **Generate New Version** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/27.jpg"/></div>

- **ステップ 13.** 必要に応じて **Preprocessing** と **Augmentation** を追加できます。ここでは **Resize** オプションを **192x192** に変更します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/6.png"/></div>

ここでは、画像サイズを192x192に変更します。このサイズを使用してトレーニングを行うことで、トレーニングが高速化されます。そうしない場合、トレーニングプロセス中にすべての画像を192x192に変換する必要があり、CPUリソースを多く消費し、トレーニングプロセスが遅くなります。

- **ステップ14.** 次に、残りのデフォルト設定を進めて、**Generate**をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/7.png"/></div>

- **ステップ15.** **Export**をクリックし、**Format**を**COCO**に選択し、**show download code**を選択して**Continue**をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/8.png"/></div>

これにより、後でGoogle Colabトレーニング内で使用するコードスニペットが生成されます。このウィンドウをバックグラウンドで開いたままにしてください。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/55.png"/></div>

### Google Colab上でSenseCraft Model Assistantを使用してトレーニング

公開データセットを選択した後、データセットをトレーニングする必要があります。ここでは、Google Colaboratory環境を使用してクラウド上でトレーニングを実行します。さらに、Colab内でRoboflow APIを使用してデータセットを簡単にダウンロードします。

[こちらをクリック](https://colab.research.google.com/github/Seeed-Studio/EdgeLab/blob/main/notebooks/Google-Colab-YOLOv5-A1101-Example.ipynb)して、すでに準備されたGoogle Colabワークスペースを開き、ワークスペースに記載されている手順を確認し、コードセルを1つずつ実行してください。

**注意:** Google Colabでは、**ステップ4**のコードセル内で、上記で説明したようにRoboflowからコードスニペットを直接コピーできます。

以下の手順を案内します：

- トレーニング用の環境をセットアップ
- データセットをダウンロード
- トレーニングを実行
- トレーニング済みモデルをダウンロード

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/9.png"/></div>

## 3. トレーニング済みモデルをデプロイして推論を実行

次に、トレーニングの最後に取得した**model-1.uf2**をSenseCAP A1101に移動します。

- **ステップ1.** 最新バージョンの[Google Chrome](https://www.google.com/chrome)または[Microsoft Edgeブラウザ](https://www.microsoft.com/en-us/edge?r=1)をインストールして開きます。

- **ステップ2.** USB Type-Cケーブルを使用してSenseCAP A1101をPCに接続します。

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **ステップ3.** SenseCAP A1101のブートボタンをダブルクリックして、マスストレージモードに入ります。

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

これにより、ファイルエクスプローラーに**SENSECAP**という新しいストレージドライブが表示されます。

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **ステップ4.** **model-1.uf2**ファイルを**SENSECAP**ドライブにドラッグ＆ドロップします。

uf2ファイルのコピーが完了すると、ドライブが消えます。これは、uf2がモジュールに正常にアップロードされたことを意味します。

**注意:** 4つのモデルファイルが準備できている場合は、各モデルを1つずつドラッグ＆ドロップできます。最初のモデルをドロップし、コピーが完了するのを待ち、再度ブートモードに入り、次のモデルをドロップする、という手順を繰り返します。SenseCAP A1101に1つのモデル（インデックス1）のみをロードした場合、そのモデルがロードされます。

- **ステップ5.** [こちらをクリック](https://vision-ai-demo.seeed.cn/)してカメラストリームのプレビューウィンドウを開きます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/31.png"/></div>

- **ステップ6.** **Connect**ボタンをクリックします。その後、ブラウザにポップアップが表示されます。**SenseCAP Vision AI - Paired**を選択し、**Connect**をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/32.png"/></div>

- **ステップ7.** プレビューウィンドウを使用してリアルタイムの推論結果を確認します！

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/10.png"/></div>

上記のように、数字が検出され、それらの周りにバウンディングボックスが表示されています。

## 4. SenseCAP MateでSenseCAP A1101を使用して推論を実行する
ブラウザ上で推論を実行するだけでなく、SenseCAP Mateを使用してモデル推論を実装することもできます。以下の手順で実装を進めます。

- **ステップ 1.**  まず、A1101のファームウェアを消去する必要があります。これはerase_model.uf2を使用して実現できます。その後、A1101のファームウェアを最新バージョンにアップグレードし、水道メーターの数字認識モデルをA1101にドロップします。

  *ファームウェア*: [erase_model.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/erase_model.uf2)、[SenseCAP-A1101_v02-00.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/sensecap_ai_v02-00.uf2)

  *モデル*: [water_meter.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/meter_water_pre_6.uf2)、[pfld_meter.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/pfld_meter_pre_5.uf2)、[digital_meter.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/meter_seg7_pre_6.uf2)

  ***注意:*** water_meterとdigital_meterは、デスクトップ上でモデル名をuser-define6として識別し、APP側ではdigital_meterとして表示されます。pfld_meterで識別されるモデル名はuser-define5であり、APP側ではPoint_meterとして表示されます。ユーザーは展開プロセス中に実際の使用要件に応じてモデルをアップロードする必要があります。

- **ステップ 2.**  [こちらをクリック](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/dashboard/workplace)してカメラストリームのプレビューウィンドウを開きます。

- **ステップ 3.**  **Connect**ボタンをクリックします。その後、ブラウザにポップアップが表示されます。**SenseCAP A1101** - Pairedを選択し、Connectをクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step3.jpg"/></div>

- **ステップ 4(オプション).** モデルでDigital Meterを選択し、アルゴリズムでDigital Meterを選択します。Saveをクリックし、次にInvokeをクリックします。これでプレビューウィンドウを使用してリアルタイムの推論結果を確認できます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step4.jpg"/></div>

- **ステップ 5.** SenseCAP Mateを開き、自分のA1101とペアリングします。上記と同じモデルとアルゴリズムを選択します。その後、Generalをクリックし、下部のDetectをクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step_all.jpg"/></div>

- **ステップ 6.** 以下のように、AIプレビューがデジタルメーター認識結果を表示します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step5.jpg"/></div>

上記の手順を完了した後、以下の4つのステップを通じて自分のA1101をデバイスに追加します。これにより、SenseCAP Mateのようなクラウドプラットフォームを通じて、デバイス識別の結果データをいつでもどこでも確認できます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4stepfinal.png"/></div>

## リソース

- **[ウェブページ]** [SenseCraft Model Assistant ドキュメント](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/dashboard/workplace)

- **[ウェブページ]** [Ultralytics HUB](https://ultralytics.com/hub)

- **[ウェブページ]** [Roboflow ドキュメント](https://docs.roboflow.com)

- **[ウェブページ]** [TensorFlow Lite ドキュメント](https://www.tensorflow.org/lite/guide)

- **[PDF]** [SenseCAP A1101 LoRaWAN Vision AI センサー仕様書](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf)

- **[PDF]** [SenseCAP A1101 LoRaWAN Vision AI センサー ユーザーガイド](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_LoRaWAN_Vision_AI_Sensor_User_Guide_V1.0.2.pdf)

- **[PDF]** [SenseCAP S210X LoRaWAN センサーカタログ](https://files.seeedstudio.com/products/114992867/SenseCAP%20S210X%20LoRaWAN%20Sensor%20Catalogue.pdf)

- **[PDF]** [SenseCAP A1101 LoRaWAN Vision AI センサー FAQ](https://files.seeedstudio.com/wiki/SenseCAP-A1101/FAQ_for_SenseCAP_A1101_LoRaWAN_AI_Vision_Sensor_v1.0.0.pdf)

## 技術サポート & 製品ディスカッション

<br />

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご用意しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>