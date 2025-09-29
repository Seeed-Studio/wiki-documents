---
description: Arduinoの紹介
title: Arduinoの紹介
keywords:
- Arduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Arduino
last_update:
  date: 05/15/2025
  author: Matthew
---


<!-- ---
name: Arduinoの紹介
nointro:
--- -->

## Arduinoとは？

Arduinoは多面的なプラットフォームであり、さまざまなプロジェクトのハードウェアおよびソフトウェアの開発と展開において異なる役割を果たします。以下に、Arduinoに関連するさまざまな意味とコンポーネントを分解して説明します：

### 1. **Arduinoボード**:
   - **説明**: Arduinoは主に、物理世界のオブジェクトを感知し制御するデジタルデバイスやインタラクティブなオブジェクトを構築するために使用される物理的なボードを指します。
   - **用途**: これらのボードは電子機器のプロトタイピングプロジェクトで広く使用されており、使いやすさとオープンソース性が評価されています。
   - **販売元**: [**Seeed Studio**](https://www.seeedstudio.com/catalogsearch/result/?q=arduino), [**Arduino公式**](https://store-usa.arduino.cc/?selectedStore=us).

### 2. **Arduinoソフトウェア (IDE)**:
   - **説明**: Arduino IDE（統合開発環境）は、Arduinoハードウェアにプログラムを書き込み、アップロードするために使用されるソフトウェアです。
   - **用途**: ボードのプログラミングを簡素化し、詳細な電子工学の知識を必要とせずにコーディングを行うことができます。
   - **ダウンロード**: [**Arduino公式**](https://www.arduino.cc/en/software).

### 3. **Arduinoツールチェーン**:
   - **説明**: Arduino IDEをインストールすると、自動的にツールチェーンと呼ばれる一連のツールがインストールされます。これには、コンパイラ、ライブラリ、およびArduinoボードがコードを実行できる形式に変換するために必要なその他のツールが含まれます。
   - **用途**: ツールチェーンは、コンパイラやその他の必要なツールのセットアップを自動化することで、インストールプロセスを簡素化します。

### 4. **Arduinoライブラリ**:
   - **説明**: これらは、複雑なハードウェアを制御したり、一般的なタスクを実行したりするのを容易にするために事前に書かれたコードのコレクションです。
   - **用途**: ライブラリはハードウェアとのインターフェースを簡単にしますが、高レベルの抽象化のために効率が悪くなったり、ハードウェア機能へのアクセスが制限されたりする場合があります。
   - **GitHub**: [**Seeed Studio**](https://github.com/Seeed-Studio), [**Arduino公式**](https://github.com/arduino), [**Adafruit**](https://github.com/adafruit).

### 5. **Arduinoブートローダー**:
   - **説明**: Arduinoボード上に存在する小さなプログラムで、外部のハードウェアプログラマーを使用せずに新しいコードをアップロードできるようにします。
   - **用途**: Arduino IDEから直接ボードに新しいコードをアップロードするプロセスを簡素化します。

### 6. **Arduinoヘッダー**:
   - **説明**: Arduinoボード上のコネクタピンの物理的な配置を指します。
   - **用途**: さまざまな互換性のあるシールド（拡張ボード）やその他のデバイスを接続して、Arduinoボードの機能を拡張することができます。
   - **Arduinoシールド**: [**Seeed Studio**](https://www.seeedstudio.com/catalogsearch/result/?q=arduino%20shield), [**Arduino公式**](https://search.arduino.cc/search?q=shield&tab=store).

## Arduinoでのプログラミング

- **言語**: Arduino IDEで使用される主なプログラミング言語はC/C++ですが、一般的にはArduinoコードまたはスケッチと呼ばれます。
- **スケッチ**: これらはIDEで作成されるArduinoプログラムです。Arduinoライブラリを使用し、入力と出力に基づいてボードの動作を制御することができます。

### Arduino IDEのダウンロード

Arduinoをサポートするすべてのボードに対して、コードをアップロードしたり、ボードが正常に動作しているか確認したり、すべてのアプリケーションを有効にするためにArduino IDEが必要になる場合があります。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDEをダウンロード</font></span></strong></a>
</div>

### Arduinoライブラリのインストール方法

Arduinoライブラリのインストール方法についてのチュートリアルを提供しています。ほとんどすべてのライブラリは[Github](https://github.com/Seeed-Studio)に保存されていることに注意してください。製品がライブラリを必要とする場合、例えば[CAB-BUS Shield V2](https://github.com/Seeed-Studio/Seeed_Arduino_CAN)のように、Arduinoライブラリを提供します。しかし、Grove - Buttonのような他のシンプルな製品ではライブラリを書く必要がありません。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/"><strong><span><font color={'FFFFFF'} size={"4"}>Arduinoライブラリのインストール方法</font></span></strong></a>
</div>

### コードのアップロード方法

コードのアップロード方法についての別のチュートリアルを用意しています：

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/"><strong><span><font color={'FFFFFF'} size={"4"}>コードのアップロード方法</font></span></strong></a>
</div>

### その他のハウツーチュートリアル

- [Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)
- [ライブラリの使用と作成方法](https://wiki.seeedstudio.com/ja/How_to_use_and_write_a_library)
- [コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code)
- [外部エディタの使用方法](https://wiki.seeedstudio.com/ja/Use_External_Editor)
- [SeeedのGithubからダウンロードしたデモの使用方法](https://wiki.seeedstudio.com/ja/Guide_to_use_demos_downloaded_from_Seeed-s_Github)

- [スケッチブックの使用方法](https://wiki.seeedstudio.com/ja/How_To_Use_Sketchbook)
- [Sidekick Advanced Kitのスケッチブックの使用方法](https://wiki.seeedstudio.com/ja/Sketchbook_of_Sidekick_Advanced_Kit)

- [ソフトウェアシリアルの使用方法](https://wiki.seeedstudio.com/ja/Software-Serial)
- [ソフトウェアI2Cの使用方法](https://wiki.seeedstudio.com/ja/Arduino_Software_I2C_user_guide)
- [ソフトウェアSPIの使用方法](https://wiki.seeedstudio.com/ja/Software-SPI)
- [ソフトウェア静的ライブラリの使用方法](https://wiki.seeedstudio.com/ja/Software-Static-Library)
- [Arduinoの一般的なエラーの対処方法](https://wiki.seeedstudio.com/ja/Arduino_Common_Error)

- [ガスセンサーの選び方](https://wiki.seeedstudio.com/ja/How-to-Choose-A-Gas-Sensor)
- [異なるGrove温度センサーの選び方](https://wiki.seeedstudio.com/ja/A_Comparison_of_Different_Grove_Temperature_Sensors)
- [GPSモジュールの選び方](https://wiki.seeedstudio.com/ja/GPS-Modules-Selection-Guide)
- [指タッチの検出方法](https://wiki.seeedstudio.com/ja/How_to_detect_finger_touch)
- [Seeedリレーの選び方](https://wiki.seeedstudio.com/ja/Seeed_Relay_Page)
- [気圧センサーの選び方](https://wiki.seeedstudio.com/ja/Barometer-Selection-Guide)

- [適切なケーブルの選び方](https://wiki.seeedstudio.com/ja/How_To_Choose_The_Right_Cable)

### より高度なチュートリアル

- [Suli](https://wiki.seeedstudio.com/ja/Suli)
- [Seeed Arduino Serialの使用方法](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Serial)
- [Seeed製品のI2CおよびI2Cアドレスの使用方法](https://wiki.seeedstudio.com/ja/I2C_And_I2C_Address_of_Seeed_Product)
- [ODYSSEY-X86J4105をFirmataで使用する方法](https://wiki.seeedstudio.com/ja/ODYSSEY-X86J4105-Firmata)
- [SWDインターフェースを使用したArduinoボードのデバッグ方法](https://wiki.seeedstudio.com/ja/Software-SWD)
- [Mosquitto MQTTブローカーをAWS IoTにArduinoボードでブリッジする方法](https://wiki.seeedstudio.com/ja/Arduino-AWS-IOT-Bridge)
- [ArduinoボードをDAPLinkデバイスとして使用する方法](https://wiki.seeedstudio.com/ja/Arduino-DAPLink)
- [DAPLinkを使用してArduinoブートローダーをフラッシュする方法](https://wiki.seeedstudio.com/ja/Flashing-Arduino-Bootloader-DAPLink)
- [Xadow IOピンマッピングの理解方法](https://wiki.seeedstudio.com/ja/Xadow_IO_pin_mapping)

## Arduinoコア

- **目的**: Arduinoコアは、Arduino IDEがさまざまな種類のマイクロコントローラーと通信できるようにします。これにより、標準的なArduinoコマンドが基盤となるハードウェアの仕様に適応されます。
- **例**: RP2040、ESP32、ESP8266、そしてAVRやSAMDのような従来のマイクロコントローラー向けに異なるコアが存在します。一部のコアはコミュニティによって維持されており、幅広いデバイスのサポートと更新が保証されています。

### Arduino対応ボード

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/xiao_topicpage/main.png" style={{width:1000, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>Seeed Studio XIAO シリーズは、メーカー、プロダクトデザイナー、教育者の多様なニーズを満たすために7つのバージョンを提供しています。メーカーの方は、豊富なコミュニティリソースを活用して、自分のプロジェクトのインスピレーションや知識を得ることができます。XIAO シリーズは、教育者に包括的な入門コースと詳細なWikiを提供し、XIAO を使ったプロジェクトを迅速に学ぶことができます。プロダクトデザイナーの方には、XIAO SoMユーザーマニュアルが、モジュール選択から量産までのすべてをカバーしています。<br /> </font>
    </div>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=xiao" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入 </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/SeeedStudio_XIAO_Series_Introduction/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a>
</div>

<br />

<br />

<div class="all_container">
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>Wio Terminal は、Realtek RTL8720DNによるワイヤレス接続を備えたSAMD51ベースのマイクロコントローラーで、ArduinoおよびMicroPythonと互換性があります。現在、ワイヤレス接続はArduinoでのみサポートされています。120MHz（最大200MHzまでブースト）、4MBの外部フラッシュ、192KBのRAMを搭載しています。BluetoothとWi-Fiの両方をサポートしており、IoTプロジェクトの基盤を提供します。<br /> </font>
    </div>
        <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" style={{width:1000, height:'auto'}}/>
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-p-4509.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入 </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Wio Terminal</font></span></strong></a>
</div>

<br />
<br />

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png" style={{width:1000, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>SenseCAP Indicatorは、ESP32とRP2040のデュアルMCUによって駆動される4インチのタッチスクリーンで、Wi-Fi/BLE/LoRa®通信をサポートしています。これは、開発者向けの完全オープンソースの強力なIoT開発プラットフォームです。カスタマイズと迅速なスケールアップのためのワンストップODM Fusionサービスも利用可能です。<br /> </font>
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入 </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Develop_with_SenseCAP_Indicator/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚SenseCAP Indicator</font></span></strong></a>
</div>

#### その他

[Seeed Studio Bazaar](https://www.seeedstudio.com/catalogsearch/result/?q=arduino)でさらに詳しく。

### Arduinoシールド（拡張ボード）

- [Grove Base V2](https://wiki.seeedstudio.com/ja/Base_Shield_V2/)
- [CAN-BUS Shield V2.0](https://wiki.seeedstudio.com/ja/CAN-BUS_Shield_V2.0/)
- [Relay Shield v3](https://wiki.seeedstudio.com/ja/Relay_Shield_v3/)
- [W5500 Ethernet Shield v1.0](https://wiki.seeedstudio.com/ja/W5500_Ethernet_Shield_v1.0/)
- [Small e-Paper Shield V2](https://wiki.seeedstudio.com/ja/Small_e-Paper_Shield_V2/)
- [Spartan Edge Accelerator Board](https://wiki.seeedstudio.com/ja/Spartan-Edge-Accelerator-Board/)
- [Grove Shield for Arduino Nano](https://wiki.seeedstudio.com/ja/Grove_Shield_for_Arduino_Nano/)
- [Seeed Studio Bazaar](https://www.seeedstudio.com/catalogsearch/result/?q=arduino%20shields)でさらに詳しく。

### コース付きキット

- [Grove Beginner Kit for Arduino](https://wiki.seeedstudio.com/ja/Grove-Beginner-Kit-For-Arduino/)
- [Rainbow Cube kit- RGB 4X4X4 (Rainbowduino Compatible)](https://wiki.seeedstudio.com/ja/Rainbow_Cube_kit_RGB_4_4_4_Rainbowduino_Compatible/)
- [Grove Creator Kit for Arduino](https://wiki.seeedstudio.com/ja/Grove-Creator-Kit-1/)

## ✨ コントリビュータープロジェクト

- このページは [Seeed Studio コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6) によって更新されています。
- [Elizabethの尽力](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=33963525)に感謝します。あなたの作業は展示されます！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>