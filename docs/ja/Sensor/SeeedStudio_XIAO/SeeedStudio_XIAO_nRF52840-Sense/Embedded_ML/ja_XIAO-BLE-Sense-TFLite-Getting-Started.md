---
description: はじめに
title: Seeed Studio XIAO nRF52840 Sense での TensorFlow Lite 入門
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-BLE-Sense-TFLite-Getting-Started
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Seeed Studio XIAO nRF52840 Sense での TensorFlow Lite 入門

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite-thumb.jpg" alt="pir" width={1000} height="auto" /></p>

この Wiki では、Seeed Studio XIAO nRF52840 Sense で TensorFlow Lite を使用し、オンボード加速度計を使ってパンチやフレックスなどのジェスチャーを検出する方法を説明します。ここでは、データトレーニングはデバイス自体で行われます。

> 組み込み AI アプリケーションには、「Seeed nrf52 mbed-enabled Boards Library」の使用を強く推奨します。

## ソフトウェアセットアップ

まず、初期のハードウェアとソフトウェアのセットアップについて、["Getting Started with Seeed Studio XIAO nRF52840 (Sense)"](https://wiki.seeedstudio.com/ja/XIAO-BLE-Sense-Getting-Started) の Wiki に従ってください。

それでは、残りのソフトウェアセットアップに進みましょう。

- **ステップ 1**. [Seeed_Arduino_LSM6DS3 ライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) を zip ファイルとしてダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 2**. [tflite-micro-arduino-examples ライブラリ](https://github.com/lakshanthad/tflite-micro-arduino-examples) を zip ファイルとしてダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/tflite-micro-github.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 3**. Arduino IDE を開き、`Sketch > Include Library > Add .ZIP Library...` に移動し、ダウンロードした両方の zip ファイルを順番に開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 4.** `File > Examples > Seeed Arduino LSM6DS3 > IMU_Capture` に移動して **IMU_Capture.ino** を開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/select-IMUCapture-2.png" alt="pir" width={500} height="auto" /></p>

- **ステップ 5.** コードをアップロードし、**シリアルモニター** を開きます

**注意:** コードをアップロードした後、Arduino ウィンドウの右上角にある **シリアルモニター** をクリックするまで、自動的に実行されません。

## データトレーニング

### パンチアクション

シリアルモニターが開いている間に、パンチアクションのデータトレーニングを開始します。

- **ステップ 1.** Seeed Studio XIAO nRF52840 Sense を手のひらに握り、前方にパンチを始めると、シリアルモニターにいくつかのデータが出力されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/train-punch.gif" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/punch-serial.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 2.** パンチアクションを約 10 回繰り返すと、各パンチの後に新しいデータが生成されます

- **ステップ 3.** シリアルモニターの完全な出力をコピーしてテキストファイルに貼り付け、テキストファイルを **punch.csv** として保存します

**注意:** **aX,aY,aZ,gX,gY,gZ** を含む最初の行もコピーしてください

### フレックスアクション

- **ステップ 1.** Seeed Studio XIAO nRF52840 Sense に USB ケーブルを再接続し、シリアルモニターを開き、Seeed Studio XIAO nRF52840 Sense を手のひらに握って内側にフレックスを始めると、シリアルモニターにいくつかのデータが出力されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/train-flex.gif" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/flex-serial.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 2.** フレックスアクションを約 10 回繰り返すと、各フレックスの後に新しいデータが生成されます

- **ステップ 3.** シリアルモニターの完全な出力をコピーしてテキストファイルに貼り付け、テキストファイルを **flex.csv** として保存します

**注意:** **aX,aY,aZ,gX,gY,gZ** を含む最初の行もコピーしてください

## TensorFlow Liteモデルファイルの生成

これから、以前に作成した**punch.csv**と**flex.csv**ファイルを使用して、TensorFlow Liteモデルファイル**(model.h)**を生成します。

- **ステップ1.** 必要なmodel.hファイルの生成に役立つ[このPythonノートブック](https://colab.research.google.com/github/arduino/ArduinoTensorFlowLiteTutorials/blob/master/GestureToEmoji/arduino_tinyml_workshop.ipynb)を開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TF-notebook-1.png" alt="pir" width={7500} height="auto" /></p>

- **ステップ2.** 左側のナビゲーションパネルのファイルタブに移動し、**punch.csv**と**flex.csv**ファイルをドラッグアンドドロップします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/drop-punch-flex.png" alt="pir" width={350} height="auto" /></p>

- **ステップ3.** **Setup Python Environment**セクション内で、コードを**pip install tensorflow==2.0.0-rc1**から**pip install tensorflow**に変更します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/tensorflow-install.png" alt="pir" width={550} height="auto" /></p>

- **ステップ4.** `Runtime > Run all`に移動して、すべてのコードセルを実行します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-all.png" alt="pir" width={450} height="auto" /></p>

- **ステップ5.** ポップアップするエラーメッセージに対して**Run anyway**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-anyway.png" alt="pir" width={600} height="auto" /></p>

- **ステップ6.** すべてのコードセルが実行されると、以前に見た**files**タブの下に新しい**model.h**ファイルが生成されているのが確認できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/model.h.png" alt="pir" width={350} height="auto" /></p>

**注意:** 上記の**model.h**ファイルが表示されない場合は、ページを更新してください。

- **ステップ7.** ファイルを右クリックして**Download**をクリックし、ファイルをPCにダウンロードします

## 推論

これから、ダウンロードしたTensorFlow Liteモデルファイル**(model.h)**を使用して、Seeed Studio XIAO nRF52840 Senseからパンチとフレックス動作を認識します。

- **ステップ1.** **Seeed_Arduino_LSM6DS3**ライブラリのライブラリパス（通常は**Documents > Arduino > libraries > Seeed_Arduino_LSM6DS3**の下）に移動し、**examples > IMU_Classifier**にアクセスします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/file-explorer-imu.png" alt="pir" width={650} height="auto" /></p>

- **ステップ2.** **model.h**ファイルを以前にダウンロードしたものと置き換えます

- **ステップ3.** **IMU_Classifier.ino**をダブルクリックして、コードをSeeed Studio XIAO nRF52840 Senseにアップロードします。

### パンチ動作

**シリアルモニター**を開いてパンチ動作を実行します。**punch**の横に**1**に近い結果が表示されることが確認できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/punch-result.png" alt="pir" width={300} height="auto" /></p>

### フレックス動作

フレックス動作を実行します。**flex**の横に**1**に近い結果が表示されることが確認できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/flex-result.png" alt="pir" width={300} height="auto" /></p>

## リソース

- **[Webページ]** [TensorFlow Lite ドキュメント](https://www.tensorflow.org/lite/guide)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
