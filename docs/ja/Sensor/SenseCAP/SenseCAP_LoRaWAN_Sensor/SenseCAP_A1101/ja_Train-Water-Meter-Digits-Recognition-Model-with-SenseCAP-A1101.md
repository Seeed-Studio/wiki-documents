---
description: SenseCAP A1101で水道メーター数字認識モデルを訓練する
title: SenseCAP A1101で水道メーター数字認識モデルを訓練する
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Train-Water-Meter-Digits-Recognition-Model-with-SenseCAP-A1101
date: 08/17/2023
author: JoJang
---

# SenseCAP A1101で水道メーター数字認識モデルを訓練する

## 概要

このwikiでは、特定のアプリケーション向けに独自のメーターモデルを訓練し、それをSenseCAP A1101に簡単にデプロイする方法を説明します。始めましょう！
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/0.jpg"/></div>

## ハードウェアの準備

- [SenseCAP A1101 - LoRaWAN Vision AI Sensor](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html)
- USB Type-Cケーブル
- インターネットアクセス可能なWindows/ Linux/ Mac

## ソフトウェアの準備

このwikiでは以下のソフトウェア技術を使用します

- [Roboflow](https://roboflow.com) - アノテーション用
- [SenseCraft Model Assistant](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process) - 訓練用
- [TensorFlow Lite](https://www.tensorflow.org/lite) - 推論用

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/11.png"/></div>

それではソフトウェアをセットアップしましょう。Windows、Linux、Intel Macのソフトウェアセットアップは同じですが、M1/M2 Macでは異なります。

:::tip
**SenseCraft Model Assistantとは？**Seeed Studio SenseCraft Model Assistantは、組み込みAIに焦点を当てたオープンソースプロジェクトです。OpenMMLab の優秀なアルゴリズムを実世界のシナリオに最適化し、実装をよりユーザーフレンドリーにして、組み込みデバイスでより高速で正確な推論を実現しています。
:::

### Windows、Linux、Intel Mac

- **ステップ1.** コンピューターにPythonがすでにインストールされていることを確認してください。インストールされていない場合は、[このページ](https://www.python.org/downloads/)にアクセスして最新バージョンのPythonをダウンロードしてインストールしてください

- **ステップ2.** 以下の依存関係をインストールしてください

```sh
pip3 install libusb1
```

### M1/ M2 Mac

- **ステップ 1.** Homebrewをインストールする

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- **ステップ 2.** conda をインストールする

```sh
brew install conda
```

- **Step 3.** Download libusb

```sh
wget https://conda.anaconda.org/conda-forge/osx-arm64/libusb-1.0.26-h1c322ee_100.tar.bz2
```

- **ステップ 4.** libusb をインストールする

```sh
conda install libusb-1.0.26-h1c322ee_100.tar.bz2
```

:::caution
以下の手順を実行する前に、BootLoaderのバージョンが2.0.0以上であることを確認する必要があります。不明な場合は、[このセクション](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101/#check-bootloader-version)で説明されている手順に従ってBootLoaderのバージョンを確認し、バージョンが2.0.0未満の場合は、[このセクション](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101/#update-bootloader)で説明されている手順に従ってBootLoaderを更新してください
:::

## 1. 画像データの収集

- **ステップ1.** USB Type-Cケーブルを使用してSenseCAP A1101をPCに接続します

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **ステップ2.** ブートボタンをダブルクリックして**ブートモード**に入ります

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

この後、ファイルエクスプローラーに**SENSECAP**として新しいストレージドライブが表示されます

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **ステップ3.** [この.uf2ファイル](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_capture_firmware_v01-00.uf2)を**SENSECAP**ドライブにドラッグアンドドロップします

uf2ファイルのドライブへのコピーが完了すると、ドライブが消えます。これは、uf2がモジュールに正常にアップロードされたことを意味します。

- **ステップ4.** [このPythonスクリプト](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/tools/capture_images_script.py)をコピーして、PC上に新しく作成した**capture_images_script.py**という名前のファイルに貼り付けます

- **ステップ5.** Pythonスクリプトを実行して画像キャプチャを開始します

```sh
python3 capture_images_script.py
```

By default, it will capture an image every 300ms. If you want to change this, you can run the script in this format

```sh
python3 capture_images_script.py --interval <time_in_ms>
```

例えば、1秒ごとに画像をキャプチャするには

```sh
python3 capture_images_script.py --interval 1000
```

上記のスクリプトを実行した後、SenseCAP A1101は内蔵カメラから継続的に画像をキャプチャし、**save_img**という名前のフォルダ内にすべての画像を保存します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/1.png"/></div>

また、録画中にプレビューウィンドウが開きます。

十分な画像をキャプチャした後、ターミナルウィンドウをクリックし、以下のキーの組み合わせを押してキャプチャプロセスを停止します。

- Windows: Ctrl + Break
- Linux: Ctrl + Shift + \
- Mac: CMD + Shift + \

### 画像収集後のデバイスファームウェアの変更

データセット用の画像の録画が完了した後、SenseCAP A1101内のファームウェアを元に戻して、再び物体検出モデルを読み込んで検出できるようにする必要があります。それでは手順を説明します。

- **ステップ1.** 前述の通り、SenseCAP A1101を**ブートモード**に入れます

- **ステップ2.** お使いのデバイスに応じて、[この.uf2ファイル](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_v01-30.uf2)を**SENSECAP**ドライブにドラッグアンドドロップします

uf2ファイルのドライブへのコピーが完了すると、ドライブが消えます。これは、uf2がモジュールに正常にアップロードされたことを意味します。

## 2. RoboFlowでデータセットを生成する

[Roboflow](https://roboflow.com)はオンラインベースのアノテーションツールです。ここでは、録画したビデオ映像を直接Roboflowにインポートでき、一連の画像としてエクスポートされます。このツールは、データセットを「トレーニング、検証、テスト」に分散するのに役立つため、非常に便利です。また、このツールでは、ラベル付け後にこれらの画像にさらなる処理を追加できます。さらに、ラベル付けされたデータセットを**COCO形式**で簡単にエクスポートできます。これはまさに私たちが必要としているものです！

- **ステップ1.** [こちら](https://app.roboflow.com/login)をクリックしてRoboflowアカウントにサインアップします

- **ステップ2.** **Create New Project**をクリックしてプロジェクトを開始します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/2.jpg"/></div>

- **ステップ3.** **Project Name**を入力し、**License (CC BY 4.0)**と**Project type (Object Detection (Bounding Box))**はデフォルトのままにします。**What will your model predict?**列の下に、アノテーショングループ名を入力します。

<div align="center"><img width="{350}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/2.png"/></div>

- **ステップ4.** SenseCAP A1101を使用してキャプチャした画像をドラッグアンドドロップします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/3.png"/></div>

- **ステップ5.** 画像が処理された後、**Finish Uploading**をクリックします。画像がアップロードされるまで辛抱強く待ちます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/4.jpg"/></div>

- **ステップ6.** 画像がアップロードされた後、**Assign Images**をクリックします

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/5.jpg"/></div>

- **ステップ7.** 画像を選択し、数字の周りに長方形のボックスを描き、ラベルを**digits**として選択し、**ENTER**を押します

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4.png"/></div>

- **ステップ8.** 残りの画像についても同じことを繰り返します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/5.png"/></div>

- **ステップ9.** データセット内のすべての画像のアノテーションを続けます

- **ステップ10.** ラベル付けが完了したら、**Add images to Dataset**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/25.jpg"/></div>

- **ステップ11.** 次に、画像を「Train、Valid、Test」に分割します。データセットが多い場合は80/20にできます。データセットが少ない場合は85/15にできます。「Train」は80未満にしてはいけないことに注意してください。

<div align="center"><img width="{330}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/12.png"/></div>

- **ステップ12.** **Generate New Version**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/27.jpg"/></div>

- **ステップ13.** 必要に応じて**Preprocessing**と**Augmentation**を追加できます。ここでは**Resize**オプションを**192x192**に**変更**します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/6.png"/></div>

ここで画像サイズを192x192に変更するのは、トレーニングにそのサイズを使用し、トレーニングが高速になるためです。そうしないと、トレーニングプロセス中にすべての画像を192x192に変換する必要があり、より多くのCPUリソースを消費し、トレーニングプロセスが遅くなります。

- **ステップ14.** 次に、残りのデフォルト設定で進み、**Generate**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/7.png"/></div>

- **ステップ15.** **Export**をクリックし、**Format**を**COCO**として選択し、**show download code**を選択して**Continue**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/8.png"/></div>

これにより、後でGoogle Colabトレーニング内で使用するコードスニペットが生成されます。このウィンドウをバックグラウンドで開いたままにしておいてください。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/55.png"/></div>

### Google ColabでSenseCraft Model Assistantを使用したトレーニング

パブリックデータセットを選択した後、データセットをトレーニングする必要があります。ここでは、Google Colaboratory環境を使用してクラウド上でトレーニングを実行します。さらに、Colab内でRoboflow APIを使用して、データセットを簡単にダウンロードします。

[こちら](https://colab.research.google.com/github/Seeed-Studio/EdgeLab/blob/main/notebooks/Google-Colab-YOLOv5-A1101-Example.ipynb)をクリックして、すでに準備されたGoogle Colabワークスペースを開き、ワークスペースで説明されている手順を実行し、コードセルを1つずつ実行してください。

**注意:** Google Colab では、**ステップ 4** のコードセルで、上記で言及したように Roboflow からコードスニペットを直接コピーできます

以下の手順を説明します：

- トレーニング用環境のセットアップ
- データセットのダウンロード
- トレーニングの実行
- トレーニング済みモデルのダウンロード

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/9.png"/></div>

## 3. トレーニング済みモデルをデプロイして推論を実行する

次に、トレーニングの最後に取得した **model-1.uf2** を SenseCAP A1101 に移動します。

- **ステップ 1.** 最新版の [Google Chrome](https://www.google.com/chrome) または [Microsoft Edge ブラウザ](https://www.microsoft.com/en-us/edge?r=1) をインストールして開きます

- **ステップ 2.** USB Type-C ケーブルを使用して SenseCAP A1101 を PC に接続します

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **ステップ 3.** SenseCAP A1101 のブートボタンをダブルクリックして、マスストレージモードに入ります

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

この後、ファイルエクスプローラーに **SENSECAP** として新しいストレージドライブが表示されます

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **ステップ 4.** **model-1.uf2** ファイルを **SENSECAP** ドライブにドラッグアンドドロップします

uf2 ファイルのドライブへのコピーが完了すると、ドライブが消えます。これは uf2 がモジュールに正常にアップロードされたことを意味します。

**注意:** 4つのモデルファイルが準備できている場合は、各モデルを1つずつドラッグアンドドロップできます。最初のモデルをドロップし、コピーが完了するまで待ち、再度ブートモードに入り、2番目のモデルをドロップするという手順を繰り返します。SenseCAP A1101 に1つのモデル（インデックス1）のみをロードした場合、そのモデルがロードされます。

- **ステップ 5.** [ここをクリック](https://vision-ai-demo.seeed.cn/) してカメラストリームのプレビューウィンドウを開きます

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/31.png"/></div>

- **ステップ 6.** **Connect** ボタンをクリックします。ブラウザにポップアップが表示されます。**SenseCAP Vision AI - Paired** を選択して **Connect** をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/32.png"/></div>

- **ステップ 7.** プレビューウィンドウを使用してリアルタイム推論結果を確認します！

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/10.png"/></div>

上記のように、数字がバウンディングボックスで囲まれて検出されています。

## 4. SenseCAP Mate で SenseCAP A1101 を使用して推論を実行する

ブラウザでの推論実行に加えて、SenseCAP Mate を使用してモデル推論を実装することもできます。これを段階的に実装していきます。

- **ステップ 1.** まず、A1101 のファームウェアを消去する必要があります。これは erase_model.uf2 を使用して実現できます。その後、A1101 ファームウェアを最新バージョンにアップグレードし、水道メーター数字認識モデルを A1101 にドロップします

  *ファームウェア*: [erase_model.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/erase_model.uf2)、[SenseCAP-A1101_v02-00.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/sensecap_ai_v02-00.uf2)

  *モデル*: [water_meter.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/meter_water_pre_6.uf2)、[pfld_meter.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/pfld_meter_pre_5.uf2)、[digital_meter.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/meter_seg7_pre_6.uf2)

  ***注意:*** water_meter と digital_meter は両方ともデスクトップで user-define6 としてモデル名を識別し、APP 側で digital_meter を表示します。pfld_meter によって識別されるモデル名は user-define5 で、APP 側では Point_meter が表示されます。ユーザーはデプロイメントプロセス中に実際の使用要件に応じてモデルをアップロードする必要があります

- **ステップ 2.** [ここをクリック](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/dashboard/workplace) してカメラストリームのプレビューウィンドウを開きます

- **ステップ 3.** **Connect** ボタンをクリックします。ブラウザにポップアップが表示されます。**SenseCAP A1101** - Paired を選択して Connect をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step3.jpg"/></div>

- **ステップ 4（オプション）.** Model で Digital Meter を選択し、Algorithm で Digital Meter を選択し、Save をクリックしてから Invoke をクリックします。これでプレビューウィンドウを使用してリアルタイム推論結果を確認できます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step4.jpg"/></div>

- **ステップ 5.** SenseCAP Mate を開き、自分の A1101 とペアリングし、上記と同じ Model と Algorithm を選択します。その後、General をクリックし、下部の Detect をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step_all.jpg"/></div>

- **ステップ 6.** 以下のように、AI Preview にデジタルメーター認識結果が表示されます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step5.jpg"/></div>

上記の手順を完了した後、自分の A1101 をデバイスに追加してみます。以下の4つのステップを通じて、SenseCAP Mate のようなクラウドプラットフォームを通じて、いつでもどこでもデバイス識別の結果データを確認できます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4stepfinal.png"/></div>

## リソース

- **[Web Page]** [SenseCraft Model Assistant ドキュメント](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/dashboard/workplace)

- **[Web Page]** [Ultralytics HUB](https://ultralytics.com/hub)

- **[Web Page]** [Roboflow ドキュメント](https://docs.roboflow.com)

- **[Web Page]** [TensorFlow Lite ドキュメント](https://www.tensorflow.org/lite/guide)

- **[PDF]** [SenseCAP A1101 LoRaWAN Vision AI センサー仕様書](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf)

- **[PDF]** [SenseCAP A1101 LoRaWAN Vision AI センサーユーザーガイド](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_LoRaWAN_Vision_AI_Sensor_User_Guide_V1.0.2.pdf)

- **[PDF]** [SenseCAP S210X LoRaWAN センサーカタログ](https://files.seeedstudio.com/products/114992867/SenseCAP%20S210X%20LoRaWAN%20Sensor%20Catalogue.pdf)

- **[PDF]** [SenseCAP A1101 LoRaWAN Vision AI センサーのFAQ](https://files.seeedstudio.com/wiki/SenseCAP-A1101/FAQ_for_SenseCAP_A1101_LoRaWAN_AI_Vision_Sensor_v1.0.0.pdf)

## 技術サポート & 製品ディスカッション

 <br />

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
