---
description: Raspberry Piを基盤としたIoT向けGroveスターターキット
title: Raspberry Piを基盤としたIoT向けGroveスターターキット
keywords:
- キット
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![画像説明を入力してください](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/cover.jpg)

Raspberry PiでIoTプロジェクトを構築することは、多くの開発者にとって簡単な作業ではありません。これは、複雑なハードウェア接続やソフトウェアプログラミングが関係しているためです。SeeedとMicrosoftは、これらの課題を軽減するためにMicrosoft IoT Grove Kitを導入しました。

キットに含まれるGrovePi+ケープは、Windows 10 IoT Coreを実行するRaspberry Pi 3およびRaspberry Pi 2と完全に互換性があります。使いやすいGroveシステムを使用することで、GrovePi+のGroveインターフェースを介して最大15個のGroveモジュールをRaspberry Piに簡単に接続できます。

高性能センサーやアクチュエーターに加えて、キットには5インチHDMIディスプレイとバックライト付きRGB LCDが含まれています。Microsoft IoT Grove Kitは、IoTの探求を始めるための強力なプラットフォームです。

このキットにはRaspberry Piボードは含まれていませんのでご注意ください。別途購入するには[こちら](https://www.seeedstudio.com/Boards-for-Raspberry-pi-c-25.html)をご覧ください。

:::note
GrovePi+および一部のコードは[Dexter Industry](http://www.dexterindustries.com/)によって設計されました。Dexterに関する詳細情報はこちらをクリックしてください。
:::

[![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Microsoft-IoT-Grove-Kit-(Azure-Certified)-p-2694.html)

## 特徴

* Raspberry Pi B/B+/A+/2/3と互換性のある使いやすいGrovePi+
* プラグアンドプレイのGroveモジュールによる迅速なプロトタイピング

## パーツリスト

| SKU | パーツ名 | 数量 | リンク |
|------|--------------|------|-------|
|103010002 | GrovePi+ | 1 | [今すぐ購入](https://www.seeedstudio.com/GrovePi.html) |
|104990243| 5インチHDMIディスプレイ（USBタッチスクリーン付き） | 1 | [今すぐ購入](https://www.seeedstudio.com/5-Inch-HDMI-Display-with-USB-TouchScreen-p-2638.html) |
|103020005| Grove - リレー | 1 | [今すぐ購入](https://www.seeedstudio.com/Grove-Relay-p-769.html) |
|101020011| Grove - 温湿度センサー | 1 | [今すぐ購入](https://www.seeedstudio.com/Grove-Temp&Humi-Sensor-p-745.html) |
|101020010| Grove - 超音波レンジャー | 1 | [今すぐ購入](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html) |
|104020006| Grove LEDバー v2.0 | 1 | [今すぐ購入](https://www.seeedstudio.com/Grove-LED-Bar-v2.0-p-2474.html) |
|101020048| Grove - ロータリー角度センサー(P) | 1 | [今すぐ購入](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor%28P%29-p-1242.html) |
|107020000| Grove - ブザー | 1 | [今すぐ購入](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) |
|101020023| Grove - サウンドセンサー | 1 | [今すぐ購入](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html) |
|101020014 | Grove - 光センサー v1.2 | 1 | [今すぐ購入](https://www.seeedstudio.com/Grove-%E2%80%93-Light-Sensor-%28P%29-v1.1-p-2693.html) |
|101020003| Grove - ボタン | 1 | [今すぐ購入](https://www.seeedstudio.com/Grove-Button-p-766.html) |
|104030001| Grove - LCD RGBバックライト | 1 | [今すぐ購入](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html) |
|109990056| HDMIケーブル | 1 | [今すぐ購入](https://www.seeedstudio.com/Flat-HDMI-Male-to-Male-Cable-1M,Support-3D-For-HDTV-computer-&-tablets-cable-p-2142.html) |
|321010007| Micro USBケーブル - 48cm | 1 | [今すぐ購入](https://www.seeedstudio.com/Micro-USB-Cable-1200px-p-1475.html) |

## GrovePi+ のハードウェア接続

**1.1 GrovePi+ を Raspberry Pi に接続する**

まず、GrovePi+ を Raspberry Pi に取り付けます。GrovePi+ は以下の画像のように Raspberry Pi の上にスライドして装着します。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/1_1_1.png)

GrovePi+ を積み重ねる際には、ピンが正しく整列していることを確認してください。

**Raspberry Pi の電源を入れる**

GrovePi+ と Raspberry Pi に電力を供給するには、Raspberry Pi の micro USB 電源ポートを使用します。5V で 2A を供給できる良質な電源アダプターを使用することを忘れないでください。GrovePi+ を単独構成で動作させたい場合は、USB 電源バンクを使用することもできます。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/1_2_1.png)

## Raspberry Pi 用 GrovePi C# ライブラリのインストール

GrovePi は C# でプログラム可能ですが、まず GrovePi 用の Windows 10 IoT C# ドライバーライブラリをインストールする必要があります。これには 2 つの方法があります：NuGet パッケージをインストールする方法と、Dexter によって提供される GrovePi C# ライブラリコードを使用する方法です。

**NuGet パッケージをインストールする**

現在のリリース用の GrovePi NuGet パッケージが利用可能です。
Windows IoT 用 GrovePi をインストールするには、以下の手順に従ってください。

**ステップ1.**

ツールメニューから「ライブラリ パッケージ マネージャー」を選択し、「パッケージ マネージャー コンソール」をクリックします。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_1_1.png)

**パッケージ マネージャー コンソール ウィンドウ**が表示されます。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_1_2.png)

**ステップ2.**

パッケージ マネージャー コンソールで以下のコマンドを実行します。

    PM> Install-Package GrovePi

詳細は [https://www.nuget.org/packages/GrovePi/](https://www.nuget.org/packages/GrovePi/) を参照してください。

**GrovePi C# ライブラリコードを使用する**

もしあなたが上級プログラマーであるか、または GrovePi NuGet パッケージを正常にインストールできない場合は、以下のリンクからライブラリコードをダウンロードしてください：[https://github.com/DexterInd/GrovePi/tree/master/Software/CSharp](https://github.com/DexterInd/GrovePi/tree/master/Software/CSharp)。

**ステップ1.**

2 つの C# ライブラリプロジェクト「GrovePi」と「Driver」を、あなたのプロジェクトが存在するフォルダーに移動し、ソリューションエクスプローラーでプロジェクトに追加します。
例えば、ソリューション「GrovePiExamples」を右クリックし、「追加」|「既存のプロジェクト」を選択します。以下の画像を参照してください。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_2_1.png)

次に「GrovePi」と「Driver」をソリューションエクスプローラーに追加します。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_2_2.png)

**ステップ2.**

C# ライブラリを参照プロジェクトとして設定します。参照を右クリックし、「参照の追加」をクリックします。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_2_3.png)

「プロジェクト」|「ソリューション」をクリックし、以下の赤枠で示されているチェックボックスを選択します。その後、「OK」をクリックします。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_2_4.png)

これで GrovePi C# ライブラリのインストールが完了しました。

すべての対応センサーは DeviceFactory クラスを通じて利用可能です。

**例**

以下はライブラリを使用する簡単な例です。

* **距離を測定する**

超音波センサーをデジタルピン 2 (D2) に接続します。

    var distance = DeviceFactory.Build.UltraSonicSensor(Pin.DigitalPin2).MeasureInCentimeters();

* **Hello World を表示する**

    DeviceFactory.Build.RgbLcdDisplay().SetText("Hello World").SetBacklightRgb(0, 255, 255);

* **ブザーを鳴らす**

デジタルピン 2 (D2) に接続されたブザーを鳴らします。

    DeviceFactory.Build.Buzzer(Pin.DigitalPin2).ChangeState(SensorStatus.On);

## Rpi3でWin10 IoTの例を実行する

ここでは、Raspberry Piを使ったプロジェクトを簡単に始める方法を示す例のプロジェクトリストを紹介します。これらのRaspberry Piプロジェクトは、使いやすいGroveセンサーと強力なRaspberry Piを組み合わせたものです。  
[こちら](https://github.com/Seeed-Studio/GrovePiExamples_win10)をクリックして、Win10用のGrovePi例コードをダウンロードできます。右側の緑色のボタン「Clone or download」を押し、「Download ZIP」を選択してください。その後、ZIPファイルを任意の場所に解凍してください。  
Visual Studio 2015でGrovePiExamples(win10).slnを開くと、以下の画像に示されているように、ソリューションエクスプローラーに12個のプロジェクトが表示されます。

![画像を挿入](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/3_0_1.png)

始める前に、まず**GrovePi**プロジェクトをビルドしてください。他のプロジェクトはこれに依存しているためです。

**RGB LCDからのHello World**

この例は、GrovePi+を使った最初のプロジェクトとして設計されています。このプロジェクトで使用されるすべての部品は、GrovePi+スターターキットに含まれています。このプロジェクトを習得したら、ディスプレイや他のセンサーをRaspberry Piに接続するような、より複雑なプロジェクトに進むことができます。

* **ステップ1:** HelloWorld(LCD)プロジェクトをスタートアッププロジェクトに設定します。
* **ステップ2:** ハードウェア接続。

RGB LCDをI2C-1ポートに接続し、Groveワイヤーコネクタを使用してRaspberry Piに電源を入れます。

![画像を挿入](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/3_1_1.png)

* **ステップ3:** アプリをデプロイします。

1) Visual Studioでアプリケーションを開き、ツールバーのドロップダウンでアーキテクチャを設定します。ARMを選択してください。

2) 次に、Visual Studioのツールバーで「Local Machine」のドロップダウンをクリックし、「Remote Machine」を選択します。

![画像を挿入](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/3_1_2.png)

3) この時点で、Visual Studioはリモート接続ダイアログを表示します。以前に[PowerShell](http://ms-iot.github.io/content/en-US/win10/samples/PowerShell.htm) <!-- 源ファイルリンクに誤りがあります -->を使用してデバイスに一意の名前を設定している場合は、ここに入力できます（この例では「my-device」を使用しています）。それ以外の場合は、Windows IoT CoreデバイスのIPアドレスを使用してください。デバイス名/IPを入力した後、Windows認証で「None」を選択し、「Select」をクリックします。

![画像を挿入](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/3_1_3.png)

4) これらの値を確認または変更するには、プロジェクトプロパティ（ソリューションエクスプローラーで「Properties」を選択）に移動し、左側の「Debug」タブを選択します。

すべてが設定されたら、Visual StudioでF5を押すことができます。セットアップ中にインストールしなかったパッケージがある場合、Visual Studioがそれらを取得するよう促す場合があります。  
HelloWorldアプリはWindows IoTデバイスにデプロイされ、Grove RGB LCDに「HelloWorld」が表示されます。

**Groveロータリー角度センサー**

この例は、HelloWorld(LCD)と同じ方法でセットアップできます。

* **ステップ1:** GroveAngleSensorプロジェクトをスタートアッププロジェクトに設定します。
* **ステップ2:** ハードウェア接続。  
Grove角度センサーをポートA0に接続し、HDMIケーブルでRaspberry PiをLCDスクリーンに接続します。
* **ステップ3:** アプリをデプロイします。HelloWorld(LCD)のステップ3を参照してください。

すべてが設定されたら、Visual StudioでF5を押すことができます。セットアップ中にインストールしなかったパッケージがある場合、Visual Studioがそれらを取得するよう促す場合があります。  
GroveAngleSensorアプリはWindows IoTデバイスにデプロイされ、LCDスクリーンにGrove角度センサーの値が表示されます。

**Grove LEDバー**

この例は、HelloWorld(LCD)と同じ方法でセットアップできます。

* **ステップ1:** GroveLedBarプロジェクトをスタートアッププロジェクトに設定します。
* **ステップ2:** ハードウェア接続。  
Grove LEDバーをポートD5に接続します。
* **ステップ3:** アプリをデプロイします。HelloWorld(LCD)のステップ3を参照してください。

すべてが設定されたら、Visual StudioでF5を押すことができます。セットアップ中にインストールしなかったパッケージがある場合、Visual Studioがそれらを取得するよう促す場合があります。  
GroveLedBarアプリはWindows IoTデバイスにデプロイされ、Grove LEDバーが順番に点灯します。

**Grove - 光センサー**

この例は、HelloWorld(LCD)と同じ方法で使用します。

* **ステップ1:** GroveLightSensorプロジェクトをスタートアッププロジェクトに設定します。
* **ステップ2:** ハードウェア接続。  
Grove光センサーをポートA2に接続し、HDMIケーブルでRaspberry PiをLCDスクリーンに接続します。
* **ステップ3:** アプリをデプロイします。HelloWorld(LCD)のステップ3を参照してください。

すべてが設定されたら、Visual StudioでF5を押すことができます。セットアップ中にインストールしなかったパッケージがある場合、Visual Studioがそれらを取得するよう促す場合があります。  
GroveLightSensorアプリはWindows IoTデバイスにデプロイされ、LCDスクリーンにGrove光センサーの値が表示されます。

**Grove - リレー**

この例は、HelloWorld(LCD)と同じ方法で使用します。

* **ステップ1:** GroveRelayプロジェクトをスタートアッププロジェクトに設定します。
* **ステップ2:** ハードウェア接続。  
GroveリレーをポートD2に接続します。
* **ステップ3:** アプリをデプロイします。HelloWorld(LCD)のステップ3を参照してください。

すべてが設定されたら、Visual StudioでF5を押すことができます。セットアップ中にインストールしなかったパッケージがある場合、Visual Studioがそれらを取得するよう促す場合があります。  
GroveRelayアプリはWindows IoTデバイスにデプロイされ、Groveリレーが1秒ごとに開閉します。

**Grove - サウンドセンサー**

この例は、HelloWorld(LCD)と同じ方法で使用します。

* **ステップ1:** GroveSoundSensorプロジェクトをスタートアッププロジェクトに設定します。
* **ステップ2:** ハードウェア接続。  
GroveサウンドセンサーをポートA1に接続し、HDMIケーブルでRaspberry PiをLCDスクリーンに接続します。
* **ステップ3:** アプリをデプロイします。HelloWorld(LCD)のステップ3を参照してください。

すべてのセットアップが完了したら、Visual Studio で F5 を押すことができるはずです。セットアップ中にインストールしなかったパッケージがある場合、Visual Studio はそれらを取得するよう促すことがあります。  
GroveSoundSensor アプリは Windows IoT デバイスにデプロイされ、起動します。LCD 画面に Grove サウンドセンサーの値が表示されます。

**Grove - 温度・湿度センサー**

この例は HelloWorld(LCD) と同じ使い方です。

* **ステップ1**: GroveTempAndHumi プロジェクトをスタートアッププロジェクトに設定します。
* **ステップ2**: ハードウェア接続。  
  Grove 温度・湿度センサーをポート D3 に接続し、Raspberry Pi を HDMI ケーブルで LCD 画面に接続します。
* **ステップ3**: アプリをデプロイします。HelloWorld(LCD) のステップ3を参照してください。

すべてのセットアップが完了したら、Visual Studio で F5 を押すことができるはずです。セットアップ中にインストールしなかったパッケージがある場合、Visual Studio はそれらを取得するよう促すことがあります。  
GroveTempAndHumi アプリは Windows IoT デバイスにデプロイされ、起動します。LCD 画面に温度と湿度の値が表示されます。

**Grove - 超音波レンジャー**

この例は HelloWorld(LCD) と同じ使い方です。

* **ステップ1**: GroveUltrasonicSensor プロジェクトをスタートアッププロジェクトに設定します。
* **ステップ2**: ハードウェア接続。  
  Grove 超音波レンジャーをポート D4 に接続し、Raspberry Pi を HDMI ケーブルで LCD 画面に接続します。
* **ステップ3**: アプリをデプロイします。HelloWorld(LCD) のステップ3を参照してください。

すべてのセットアップが完了したら、Visual Studio で F5 を押すことができるはずです。セットアップ中にインストールしなかったパッケージがある場合、Visual Studio はそれらを取得するよう促すことがあります。  
GroveUltrasonicSensor アプリは Windows IoT デバイスにデプロイされ、起動します。LCD 画面に距離の値が表示されます。

**ホーム天気表示**

この例は HelloWorld(LCD) と同じ使い方です。

* **ステップ1**: HomeWeatherDisplay プロジェクトをスタートアッププロジェクトに設定します。
* **ステップ2**: ハードウェア接続。  
  Grove 温度・湿度センサーをポート D3 に接続し、RGB LCD を Grove ワイヤーコネクタを使用してポート I2C に接続します。
* **ステップ3**: アプリをデプロイします。Blink のステップ5を参照してください。

すべてのセットアップが完了したら、Visual Studio で F5 を押すことができるはずです。セットアップ中にインストールしなかったパッケージがある場合、Visual Studio はそれらを取得するよう促すことがあります。  
Home Weather Display アプリは Windows IoT デバイスにデプロイされ、起動します。RGB LCD に温度が表示されます。

**すべてのモジュールを1つのプロジェクトで**

この例は HelloWorld(LCD) と同じ使い方です。

* **ステップ1**: All_in_One プロジェクトをスタートアッププロジェクトに設定します。
* **ステップ2**: ハードウェア接続。  
  * Grove - リレー > D2  
  * Grove - 温度・湿度センサー > D3  
  * Grove - 超音波レンジャー > D4  
  * Grove - LED バー V2.0 > D5  
  * Grove - ブザー > D6  
  * Grove - ボタン > D7  
  * Grove - 回転角センサー > A0  
  * Grove - サウンドセンサー > A1  
  * Grove - 光センサー > A2  

Grove モジュールを GrovePi+ に接続し、Raspberry Pi を HDMI ケーブルで LCD 画面に接続します。

* **ステップ3**: アプリをデプロイします。HelloWorld(LCD) のステップ3を参照してください。

すべてのセットアップが完了したら、Visual Studio で F5 を押すことができるはずです。セットアップ中にインストールしなかったパッケージがある場合、Visual Studio はそれらを取得するよう促すことがあります。  
All_in_One アプリは Windows IoT デバイスにデプロイされ、起動します。  
LCD 画面に距離、音、光の値とリレーの状態が表示されます。角度センサーの値は画面上のグラフとして表示されます。LED バーは角度センサーの値を示します。ボタンを押して保持すると、Grove リレーが開きます。

## 関連情報

* [Windows Dev Center](https://dev.windows.com/en-us/iot)
* [GrovePi C# ライブラリコード](https://github.com/DexterInd/GrovePi/tree/master/Software/CSharp)
* [サンプルコード](https://github.com/Seeed-Studio/GrovePiExamples_win10)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なるご要望やお好みに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>