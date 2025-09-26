---
description: 三輪ロボット
title: 三輪ロボット
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Tricycle_Bot
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/3.jpg)

三輪ロボットは、教育用に設計された簡単に組み立て可能でGrove互換のDIYロボットプラットフォームです。このキットには、ガイドラインに従って簡単に組み立てられる電子部品と構造部品が含まれています。三輪ロボットは3層構造で、2層目と3層目の間に5つの支柱があります。3層目にはネジとナットを使用して多くのモジュールを固定することができます。

さらに、Arduinoボードやブレッドボードをロボットの中心として2層目に固定することができ、各支柱には1～2個のプラグアンドプレイ対応のGroveモジュールを固定することができます。これにより、RGB LEDや超音波Groveモジュールなどの機能を強化できます。三輪ロボットの電源電圧は、12Vのバッテリーホルダーによって供給されます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/master/docs/images/get_one_now.png)](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)


:::warning
    このキットには**コントローラーとモータードライバーは含まれていません**。
:::
## 特徴

- マルチプラットフォーム対応
- Grove互換の支柱
- 簡単に組み立て可能
- RF/BLE/Wi-Fi制御オプション

## 部品リスト

![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/4.jpg)

| 部品名         | 仕様              | 数量 |
|:---------------|:-----------------:|:----:|
| 車輪           |Ф64mm*W30mm       |2     |
| 減速DCモーター |/                  |2     |
| 自由車輪       |49\*32\*22mm       |1     |
| バッテリーホルダー |62\*58\*30mm   |1     |
| 結束バンド     |20.5\*31.8mm       |1     |
| 底板（1層目）  |220\*155\*3.8mm    |1     |
| 中板（2層目）  |220\*155\*3.8mm    |1     |
| 上板（3層目）  |160\*158\*3.8mm    |1     |
| 前支柱         |62\*56\*3.8mm      |1     |
| 側面支柱       |62\*31\*3.8mm      |4     |
| リベット_1     |R3090              |4     |
| スタンドオフ_2 |M3\*22             |6     |
| スタンドオフ_3 |M3\*55+6           |4     |
| ネジ_4         |PM3\*8             |14    |
| ネジ_5         |PM3\*25            |4     |
| ナット_6       |M3\*2.3            |6     |
| リベット_7     |R2064              |15    |
| ネジ_8         |KM2\*10            |15    |
| ナット_9       |M2\*1.5            |15    |
| レンチ         |/                  |2     |
| ドライバー     |/                  |1     |


**このキットにはArduino/Genuino 101およびブレッドボードは含まれていません。**


## 組み立て手順

![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/1.png)

![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/2.png)


三輪ロボットには、Arduino、Raspberry Pi、BeagleBoneなど、好きなボードを取り付けてこのロボットプラットフォームを駆動することができます。また、DCモーターやGroveモジュールを駆動するために、モーターケープやGroveケープが役立ちます。

選択肢が多いため、ここではArduino、Raspberry Pi、BeagleBoneの中から適切なボードを選ぶ方法を紹介します。


## Arduinoでの使用

Arduinoは、その使いやすいハードウェアとソフトウェアで最も有名なオープンソースのプロトタイピングプラットフォームです。Arduinoを使えば、楽しく創造的なロボットカーを簡単にDIYできると信じています。また、Arduino用のGroveモジュールが豊富にあるため、LEDエフェクト、障害物検知、リモートコントロール（RF/Bluetooth/Wi-Fi）など、ロボットカーの機能を簡単に拡張できます。

###[Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)
Seeeduino v4は、オープンソースでArduino互換のATmega328 MCU開発ボードです。Seeeduino v4は、最も優れたArduino派生製品/互換製品の1つだと考えています。Seeeduino v4は、機能が豊富で、非常に安定しており、使いやすく、見た目も良いです。

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/SeeeduinoV4/master/images/cover.JPG" width="50%" height="50%" />
</div>


###[Motor Shield V2.0](https://www.seeedstudio.com/Motor-Shield-V2.0-p-1377.html)
Motor Shieldは、モーターの動作速度と方向をArduinoで制御できるドライバーモジュールです。

<div className="text-center">
  <img src="https://github.com/SeeedDocument/Motor_Shield_V2.0/image/500px-Motorshield_01.jpg" width="50%" height="50%" />
</div>


###[Base Shield V2](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)

Base Shield v2は拡張ボードとして、多くのGroveコネクタを備えており、Groveモジュールを一緒に使用するのに便利です。また、Arduino製品のシリーズと互換性があります。

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Base_Shield_v2-1.png" width="50%" height="50%" />
</div>


### 推奨Groveモジュール

|W2812B LEDストリップ|超音波センサー|ラインファインダー|
|--------------------|-------------|-----------------|
|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/1.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/2.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/3.jpg)|
|[今すぐ購入！](https://www.seeedstudio.com/Digital-RGB-LED-Flexi-Strip-60-LED-1-Meter-p-1666.html)|[今すぐ購入！](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|[今すぐ購入！](https://www.seeedstudio.com/Grove-Line-Finder-p-825.html)|

|ブザー|シリアルRF|シリアルBluetooth|
|----------------|-----------------|----------------|
|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/4.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/5.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/6.jpg)|
|[今すぐ購入！](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|[今すぐ購入！](https://www.seeedstudio.com/Grove-Serial-RF-Pro-p-794.html)|[今すぐ購入！](https://www.seeedstudio.com/Grove-Serial-Bluetooth-v3.0-p-2475.html)|

:::tip
    [Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をクリックして、利用可能なモジュールをさらに確認してください。
:::

## Raspberry Pi を使う

Raspberry Pi は現在最も人気のあるシングルボードコンピュータの1つであり、Arduino よりもはるかに強力な計算性能を持っています。Raspberry Pi は非常に人気があるため、多くの面白いプロジェクトのチュートリアルを簡単に見つけることができます。

###[Raspberry Pi 3](https://www.seeedstudio.com/Raspberry-Pi-Motor-Board-v1.0-p-2411.html)

Raspberry Pi 3 には統合された 802.11 b/g/n ワイヤレス LAN、Bluetooth クラシカルおよび LE が含まれています。これにより、ワイヤレス化のために追加の周辺機器は必要ありません。Raspberry Pi 1 の10倍の性能を持っています。

<div className="text-center">
  <img src="https://statics3.seeedstudio.com/seeed/img/2016-08/xuZp3Msf6xeHp96wPFjInzco.jpg" width="50%" height="50%" />
</div>

###[Raspberry Pi Motor Board v1.0](https://www.seeedstudio.com/Raspberry-Pi-Motor-Board-v1.0-p-2411.html)

Raspberry Pi Motor Board を使用すると、Raspberry Pi で2つの DC モーターを駆動し、それぞれの速度と方向を独立して制御することができます。

<div className="text-center">
  <img src="https://statics3.seeedstudio.com/images/product/103030031%201.jpg" width="50%" height="50%" />
</div>

###[GrovePi+](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)

GrovePi+ は Grove モジュールを Raspberry Pi に接続するためのシステムです。新しい Raspberry Pi Model B+ および Model A+ をサポートするように設計されています。

<div className="text-center">
  <img src="https://statics3.seeedstudio.com/product/110060049%2010_03.jpg" width="50%" height="50%" />
</div>

### 推奨モジュール

| USB Webcam | OLED Display | GPS Module |
|------------|--------------|------------|
|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_pi/1.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_pi/2.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_pi/3.jpg)|
|[今すぐ購入！](https://www.seeedstudio.com/300K-Pixel-USB-2.0-Mini-Webcam-p-1499.html)|[今すぐ購入！](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|[今すぐ購入！](https://www.seeedstudio.com/depot/grove-gps-p-959.html)|

:::tip
    [Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) をクリックして、利用可能なモジュールをさらに確認してください。
:::

## BeagleBone ボードを使う

BeagleBone もまた、人気のある Linux シングルボードコンピュータの1つです。Raspberry Pi と比較すると、BeagleBone は Grove モジュールのプログラミングにおいて Mraa および UPM ライブラリを使用するための利点があります。

###[BeagleBone Green Wireless](https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-Wireless-p-2650.html)

SeeedStudio BeagleBone Green Wireless は BeagleBone Black のオープンソースハードウェア設計に基づいていますが、高性能で柔軟な WiFi/Bluetooth インターフェースを備えており、[BBGW Wi-Fi Car](https://www.instructables.com/id/Super-Quickly-DIY-Web-RC-Car-With-Python-and-Beagl/) のようなリモートコントロールの開発を容易にします。

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Wireless/images/BBGW_cover.png" width="50%" height="50%" />
</div>

###[Motor Bridge Cape v1.0](https://www.seeedstudio.com/Motor-Bridge-Cape-p-2569.html)

Motor Bridge Cape は、6～15V DC 電源とモーターごとに約1Aの電流で、2つのステッピングモーターまたは4つのブラシ付き DC モーターを制御できます。また、6つのサーボ制御インターフェースと6つの拡張 I/O を備えており、ロボットカーにもう1つロボットアームを追加することも可能です。

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/master/img/Motor_bridge_driver.jpg" width="50%" height="50%" />
</div>

###[Grove Base Cape for BeagleBone v2](https://www.seeedstudio.com/Grove-Base-Cape-for-Beaglebone-v2.0-p-2644.html)

Grove Base Cape for BeagleBone v2 は、BeagleBone プラットフォーム用の Grove システム拡張ボードです。このケープを使用すると、Grove モジュールとして利用可能な多くのトランスデューサ（センサーおよびアクチュエータ）を BeagleBone プラットフォームに簡単に接続できます。

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_product_view_1200.jpg" width="50%" height="50%" />
</div>

### 推奨 Grove モジュール

| USB WEBCAM | W2812B LED STRIP | IMU 9DOF |
|------------|------------------|----------|
|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/1.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/2.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/3.JPG)|
|[今すぐ購入！](https://www.seeedstudio.com/300K-Pixel-USB-2.0-Mini-Webcam-p-1499.html)|[今すぐ購入！](https://www.seeedstudio.com/Digital-RGB-LED-Flexi-Strip-60-LED-1-Meter-p-1666.html)|[今すぐ購入！](https://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)|

| OLED DISPLAY | DIGITAL LIGHT SENSOR | GPS MODULE |
|--------------|-----------------------|------------|
|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/4.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/5.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/6.jpg)|
|[今すぐ購入！](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|[今すぐ購入！](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|[今すぐ購入！](https://www.seeedstudio.com/depot/grove-gps-p-959.html)|

:::tip
    [Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) をクリックして、利用可能なモジュールをさらに確認してください。
:::

## シンプルな例

以下は、Arduino UNO を使用して三輪ロボット（Tricycle Bot）を作成するシンプルな例です。

### 必要なもの

![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/7.png)

- [Arduino UNO](https://www.arduino.cc/en/Main/ArduinoBoardUno) *1
- [Motor Shield V2.0](https://www.seeedstudio.com/Motor-Shield-V2.0-p-1377.html) *1
- [Base Shield V2](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html) *1
<!-- - [Tricycle Bot]() *1 -->
- [Digital RGB LED Flexi-Strip](https://www.seeedstudio.com/Digital-RGB-LED-Flexi-Strip-60-LED-1-Meter-p-1666.html) *1
- [Grove - Ultrasonic Ranger](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html) *1
- [Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) *1

### 組み立て

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/Tricycle_Bot/img/5.jpg" width="50%" height="50%" />
</div>

1. [三輪ロボットを組み立てます。](https://files.seeedstudio.com/wiki/Tricycle_Bot/Tricycle_Bot.md#assembly-introdutions)
2. Grove モジュールを側面と上部プレートに固定します。
3. Grove Buzzer を **D4**、Grove Ultrasonic Ranger を **D5**、LED ストリップを **D6** に Base Shield 経由で接続します。
4. 完成です！

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/Tricycle_Bot/img/6.jpg" width="50%" height="50%" />
</div>

### 動作

こちらがこのシンプルな例の[動画](http://ohpam657y.bkt.clouddn.com/IMG_1346%202.MOV)です。

<div className="img-wrapper ng-scope" ng-if="fileType === 'video'">
  <video ng-src="http://ohpam657y.bkt.clouddn.com/IMG_1346%202.MOV" width={700} controls src="http://ohpam657y.bkt.clouddn.com/IMG_1346%202.MOV" />
</div>

- このデモ用三輪ロボットカーは、前方の障害物を検知し、距離が 35cm 未満の場合に方向転換を行います。
- 車が直進している間は LED ストリップが青く点滅し、方向転換中は LED ストリップが赤く点滅し、Grove Buzzer が警告音を鳴らします。

### コーディング

- [Motor Shield V2](https://github.com/Seeed-Studio/SeeedMotorShieldV2)、[Grove - Ultrasonic Ranger](https://github.com/Seeed-Studio/Seeed_Arduino_UltrasonicRanger)、および [LED Strip](https://github.com/adafruit/Adafruit_NeoPixel) の Arduino ライブラリをダウンロードしてください。

```
 /*
 * TricycleBotDemo.ino
 *
 * 三輪ロボット用のシンプルなコード
 *
 * Copyright (c) 2016 Seeed Technology Limited.
 * MIT ライセンス
 *
 */

#include "MotorDriver.h"
#include "Adafruit_NeoPixel.h"
#include "Ultrasonic.h"

#define BEE           4
#define LEDPIN        6
#define LEDNUM        10
#define PIXELS_SPACE  128
#define BRIGHTNESS    150
#define DistanceCM    35

Adafruit_NeoPixel strip = Adafruit_NeoPixel(LEDNUM, LEDPIN, NEO_GRB + NEO_KHZ800);
MotorDriver motor;
Ultrasonic ultrasonic(5);

void setup() {
    // 初期設定
    pinMode(BEE, OUTPUT);
    strip.setBrightness(BRIGHTNESS);
    strip.begin();
    strip.show();
    motor.begin();
    pixelStart();
}

void loop() {

    // メインループ
    long RangeInCentimeters;
    RangeInCentimeters = ultrasonic.MeasureInCentimeters();

    if (RangeInCentimeters < DistanceCM) {
        turnRight();
        beep();
        pixelState2();
    }
    else {
        goStraight();
        pixelState1();
    }
    delay(100);
}

void goStraight() {
    motor.speed(0, 100);
    motor.speed(1, 100);
}

void turnRight() {
    motor.speed(0, -100);
    motor.speed(1, 100);
}

// 直進時の LED 表示
void pixelState1() {
    for (uint32_t t = 0; t < (PIXELS_SPACE * LEDNUM); ++t) {
        for (int i = 0; i < (LEDNUM / 2); i++) {
            strip.setPixelColor(((LEDNUM / 2) - i -1) , triangular_color((t + i * PIXELS_SPACE) % (PIXELS_SPACE * LEDNUM)));
            strip.setPixelColor(i + 5, triangular_color((t + i * PIXELS_SPACE) % (PIXELS_SPACE * LEDNUM)));
        }
        strip.show();
    }
}

// 右折時の LED 表示
void pixelState2() {
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < LEDNUM; j++) {
            strip.setPixelColor(j, 250, 0, 0);
            strip.show();
        }
        delay(50);
        for (int j = 0; j < LEDNUM; j++) {
            strip.setPixelColor(j, 0, 0, 0);
            strip.show();
        }
        delay(50);
    }
}

void pixelStart() {
    for (int i = 0; i < LEDNUM; i++) {
        for (int j = 0; j< 255; j++) {
            strip.setPixelColor(i, 0, j, 0);
            strip.show();
        }
        delay(50);
    }
}

uint32_t triangular_color(uint32_t t) {
    uint32_t c = 0;

    if (t < 256) {
        c = strip.Color(0, 0, t);
    } else if (t < 512) {
        c = strip.Color(0, 0, 511 - t);
    }

    return c;
}

void beep() {
    digitalWrite(BEE, HIGH);
    delay(100);
    digitalWrite(BEE, LOW);
}
```

## 添付ファイル

* [三輪ロボット組み立て手順書(pdf)](https://files.seeedstudio.com/wiki/Tricycle_Bot/res/Tricycle%20Bot%20Assembly%20Instructions.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>