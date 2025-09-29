---
description: LED Driver Board for XIAOは、スマートLEDライトでスペースをカスタマイズするために設計されたスマートモジュールです。
title: LED Driver Board for XIAO
keywords:
- xiao
- light
- LED
image: https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/LED_Driver_Board_for_Seeed_Studio_XIAO.webp
slug: /ja/led_driver_board
last_update: 
  date: 05/21/2025
  author: Carla
---

# LED Driver Board for XIAOを始める

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/dimension.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div><br />

LED Driver Board for XIAOは、5Vと12VのLEDストリップの両方をサポートするコンパクトでありながら強力なソリューションで、NeoPixel WS2812、WS2813、WS2815などの人気のアドレサブルRGB LEDを含みます。すべてのXIAOボードと互換性があり、XIAO ESP32シリーズを使用する際にWLEDとHome Assistantを通じてスマート制御と自動化を可能にし、柔軟な電源オプションと包括的な保護により、照明セットアップでの安全で信頼性の高い動作を提供します。

## 紹介

### 特徴

- **幅広いLED互換性**

    内蔵電源調整により**5V/3A**と**12V/2A**の両方のLEDストリップをサポートする汎用性の高いドライバー。NeoPixel **WS2811、WS2812(B)、WS2813、WS2815、SK6812、およびその他の1線プロトコルLED**を含む単色およびアドレサブルRGB LEDと互換性があり、豊富な照明オプションを提供します。

- **スマート制御のためのXIAO互換性**

    すべての[Seeed Studio XIAOボード](https://www.seeedstudio.com/xiao-series-page)向けに設計されています。XIAO ESP32シリーズ（ESP32-C3/S3/C6）と組み合わせることで、以下を通じてスマート機能を解放できます：
  - **[WLED](https://kno.wled.ge/)**アプリサポート - 色、エフェクト、明度を制御し、カスタムアニメーションを作成（[XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html)を強く推奨）
  - **[Home Assistant](https://www.home-assistant.io/)**のESPHome経由での統合 - リモート制御、自動化、スマートホームシナリオを有効化

- **Groveエコシステム互換性**

    オンボードのプラグアンドプレイGroveインターフェースは400以上のSeeed Studioモジュールと互換性があり、環境やモーションとの照明インタラクティビティを簡単に強化して、よりスマートでパーソナライズされたエフェクトを実現できます：
  - `AI視覚検出用`

        [Grove - Vision AI Module V2](https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html)

        [Grove Smart IR Gesture Sensor (PAJ7660)](https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html)

  - `温度・湿度検出用`

        [Grove - Temperature & Humidity Sensor (DHT11)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html)

        [Grove - AHT20 I2C Industrial Grade Temperature&Humidity Sensor](https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html)

        [Grove - Temp and Humi Sensor(SHT31)](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html)

  - `モーション検出用`

        [Grove - PIR Motion Sensor](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)

        [Grove - 3-Axis Analog Accelerometer](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-ADXL335.html)

        [Grove - IMU 9DOF (ICM20600+AK09918)](https://www.seeedstudio.com/Grove-IMU-9DOF-ICM20600-AK09918.html)

  - **[`その他400以上`](https://wiki.seeedstudio.com/ja/Grove_System/)**

### 仕様

<table style={{textAlign:'center'}}>
 <tr>
        <th>項目</th>
        <th>詳細</th>
 </tr>
    <tr>
        <td>電源入力</td>
        <td>DC 12V/2A</td>
    </tr>
    <tr>
        <td>LED電源サポート</td>
        <td>DC 12V / DC 5V</td>
    </tr>
    <tr>
        <td>最大動作電流</td>
        <td>12V/2A 5V/3A</td>
    </tr>
    <tr>
        <td>LEDコネクタ</td>
        <td>4ピン 3.81mmスクリューターミナルブロックコネクタ: <br></br>12V | 5V | A0 | GND</td>
    </tr>
    <tr>
        <td>Grove I²Cコネクタ</td>
        <td>D5 | D4 | 5V | GND</td>
    </tr>
    <tr>
        <td>ユーザーボタン</td>
        <td>D3</td>
    </tr>
    <tr>
        <td>ユーザーピンヘッダー</td>
        <td>SPI x1、Uart x1、Digital x2</td>
    </tr>
</table>

### ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/hardware_overview.png" style={{width:1000, height:'auto'}}/></div>

#### 対応電源入力

- [PowerAdapter, 12V/2A/24W, European Standard Plug, DC Output](https://www.seeedstudio.com/Power-Adapter-12V-2A-EU-p-5732.html)
- [PowerAdapter, 12V/2A/24W, American Standard Plug, DC Output](https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html)
- その他の **5.5mm x 2.1mm x 10±0.3mm** プラグ付きDC 12V電源アダプター
- DC 12Vワイヤー

#### サポートされているLEDガイド

<div class="table-center">
  <table style={{textAlign:'center'}}>
    <tr>
              <th>製品</th>
              <th>名前</th>
              <th>動作電圧</th>
              <th>接続方法</th>
    </tr>
          <tr>
              <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-WS2813-Mini.png
              " style={{width:150, height:'auto'}}/></td>
              <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-WS2813-Mini-p-4269.html">Grove - RGB LED (WS2813 Mini)</a></td>
              <td>5V</td>
              <td>Grove</td>
          </tr>
          <tr>
              <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Stick-10-WS2813-Mini.png
              " style={{width:150, height:'auto'}}/></td>
              <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Mini.html">Grove - RGB LED Stick (10-WS2813 Mini)</a></td>
              <td>5V</td>
              <td>Grove</td>
          </tr>
          <tr>
              <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Stick-15-WS2813-Mini.png
              " style={{width:150, height:'auto'}}/></td>
              <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-15-WS2813-Mini-p-4270.html">Grove - RGB LED Stick (15-WS2813 Mini)</a></td>
              <td>5V</td>
              <td>Grove</td>
          </tr>
          <tr>
              <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Stick-20-WS2813-Mini.png
              " style={{width:150, height:'auto'}}/></td>
              <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-20-WS2813-Mini-p-4271.html">Grove - RGB LED Stick (20-WS2813 Mini)</a></td>
              <td>5V</td>
              <td>Grove</td>
          </tr>
          <tr>
              <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Ring-16-WS2813-Mini.png
              " style={{width:150, height:'auto'}}/></td>
              <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-16-WS2813-Mini-p-4201.html">Grove - RGB LED Ring (16-WS2813 Mini)</a></td>
              <td>5V</td>
              <td>Grove</td>
          </tr>
          <tr>
              <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Ring-20-WS2813-Mini.png
              " style={{width:150, height:'auto'}}/></td>
              <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html">Grove - RGB LED Ring (20-WS2813 Mini)</a></td>
              <td>5V</td>
              <td>Grove</td>
          </tr>
          <tr>
              <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Ring-24-WS2813-Mini.png
              " style={{width:150, height:'auto'}}/></td>
              <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-24-WS2813-Mini-p-4202.html">Grove - RGB LED Ring (24-WS2813 Mini)</a></td>
              <td>5V</td>
              <td>Grove</td>
          </tr>
          <tr>
              <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-Ultimate-RGB-LED-Ring.png
              " style={{width:150, height:'auto'}}/></td>
              <td><a href="https://www.seeedstudio.com/Grove-Ultimate-RGB-LED-Ring-p-4203.html">Grove - Ultimate RGB LED Ring</a></td>
              <td>5V</td>
              <td>Grove</td>
          </tr>
          <tr>
              <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Digital-RGB-LED-Flexi-Strip-30-LED-1-Meter.png
              " style={{width:150, height:'auto'}}/></td>
              <td><a href="https://www.seeedstudio.com/Digital-RGB-LED-Flexi-Strip-30-LED-1-Meter-p-1665.html">Grove - WS2813B RGB LED Flexi-Strip 30 LED/m - 1m</a></td>
              <td>5V</td>
              <td>Terminal Block</td>
          </tr>
          <tr>
              <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Digital-RGB-LED-Flexi-Strip-60-LED-1-Meter.png
              " style={{width:150, height:'auto'}}/></td>
              <td><a href="https://www.seeedstudio.com/WS2813B-Digital-RGB-LED-Flexi-Strip-60-LED-1-Meter-p-2817.html">Grove - WS2813B RGB LED Flexi-Strip 60 LED/m - 1m</a></td>
              <td>5V</td>
              <td>Terminal Block</td>
          </tr>
          <tr>
              <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/RGB-LED-Strip-Waterproof-30-LED-m-1m.png
              " style={{width:150, height:'auto'}}/></td>
              <td><a href="https://www.seeedstudio.com/Grove-WS2813-RGB-LED-Strip-Waterproof-30-LED-m-1m.html">Grove - WS2813 RGB LED Strip Waterproof - 30 LED/m - 1m</a></td>
              <td>5V</td>
              <td>Grove</td>
          </tr>
          <tr>
              <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/RGB-LED-Strip-Waterproof-60-LED-m-1m.png
              " style={{width:150, height:'auto'}}/></td>
              <td><a href="https://www.seeedstudio.com/Grove-WS2813-RGB-LED-Strip-Waterproof-60-LED-m-1m.html">Grove - WS2813 RGB LED Strip Waterproof - 60 LED/m - 1m</a></td>
              <td>5V</td>
              <td>Grove</td>
          </tr>  
  </table>
</div>

## はじめに

このLEDドライバーボードは、Seeed Studio XIAOシリーズ専用に設計されています。その機能は、ペアリングされるXIAOマイコンによって異なります。例えば、XIAO nRF52840と組み合わせて使用する場合、オンボードIMUデータを読み取ってLEDの色を動的に変更できます。ESP32シリーズボードとペアリングした場合、Home Assistantに統合してシームレスなスマートホーム制御が可能です。さらに、XIAO ESP32-C3と組み合わせることで、高度なLED効果のためのWLEDの実行をサポートします。以下のチュートリアルに従って、これらの機能を詳しく探索してください。

### Arduinoで遊ぶ

XIAOのArduino環境を設定し、オンボードパッケージを追加する必要があります。

:::tip
Arduinoを初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

#### ソフトウェアの準備

**ステップ1.** Arduinoアプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDEをダウンロード</font></span></strong>
    </a>
</div>

**ステップ2.** 開発ボードモデルを選択し、Arduino IDEに追加します。

- 後のルーチンで**Seeed Studio XIAO SAMD21**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO RP2040**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO RP2350**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_rp2350_arduino/#setting-up-the-software)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO nRF52840**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO ESP32C3**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started#software-setup)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO ESP32C6**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32c6_getting_started/#software-preparation)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO ESP32S3**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started#software-preparation)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO RA4M1**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/getting_started_xiao_ra4m1/#software-preparation)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO MG24**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_mg24_getting_started/#software-preparation)**を参照して追加を完了してください。

**ステップ3.** 必要なライブラリをインストールします。

- Arduino IDEを開き、**Sketch > Include Library > Manage Libraries...**に移動してライブラリを検索し、Arduinoライブラリマネージャーでキーワード「**Adafruit_NeoPixel**」ライブラリを入力して最新バージョンをインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl6.png" style={{width:800, height:'auto'}}/></div>

- [Seeed_Arduino_LSM6DS3ライブラリをダウンロード](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3)してzipファイルとして保存し、Arduino IDEを開いて**Sketch > Include Library > Add .ZIP Library...**に移動し、ダウンロードしたzipファイルを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" style={{width:800, height:'auto'}}/></div>

:::note

MG24は現在、標準のNeoPixelライブラリでサポートされていません。ただし、Silicon Labsは公式MG24コアで代替手段を提供しています：<strong>[ezWS2812](https://github.com/SiliconLabs/arduino/tree/refs/heads/main)</strong>ドライバーで、ハードウェアSPIまたはGPIO経由でWS2812 LEDをサポートします。詳細は<strong>[こちら](https://forum.seeedstudio.com/t/driving-an-led-strip-with-xiao-mg24-neopixel-fastled-ezws2812/284695)</strong>をご覧ください。

:::

#### 簡単な例

**ステップ1.** ハードウェアの準備

<table align="center">
 <tr>
  <th>Seeed Studio XIAO RP2350</th>
        <th>LED Driver Board for XIAO</th>
        <th>Grove - RGB LED Stick (15-WS2813 Mini)</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550%20XIAO%20RP2350-45font.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/45-front.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Stick-15-WS2813-Mini.png" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-15-WS2813-Mini-p-4270.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

**ステップ 2.** 以下のように Seeed Studio XIAO RP2350、LED Driver Board for XIAO、および Grove - RGB LED Stick (15-WS2813 Mini) を接続します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/rp2350_ledDriver_led.jpg" style={{width:700, height:'auto'}}/></div>

**ステップ 3.** 以下のサンプルプログラムは、3つのNeoPixelを含むLEDを制御し、3つのビーズそれぞれが**赤**、**緑**、**青**の色を表示するようにします

```cpp
#include <Adafruit_NeoPixel.h>

// Which pin on the Arduino is connected to the NeoPixels?
#define PIN D5

// How many NeoPixels are attached to the Arduino?
#define NUMPIXELS 3 

// When setting up the NeoPixel library, we tell it how many pixels,
// and which pin to use to send signals. Note that for older NeoPixel
// strips you might need to change the third parameter -- see the
// strandtest example for more information on possible values.
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels.begin(); // INITIALIZE NeoPixel strip object 
}

void loop() {
  pixels.clear(); // Set all pixel colors to 'off'

  // pixels.Color() takes RGB values, from 0,0,0 up to 255,255,255
  // The first NeoPixel in a strand is #0, second is 1, all the way up
  pixels.setPixelColor(0, pixels.Color(255, 0, 0)); 
  pixels.setPixelColor(1, pixels.Color(0, 255, 0));
  pixels.setPixelColor(2, pixels.Color(0, 0, 255));
  // pixels.setBrightness() takes brightness values, from 0 up to 255
  pixels.setBrightness(255);

  pixels.show();   // Send the updated pixel colors to the hardware.

}

```

プログラムをアップロードしてLED Driver Boardに電源を供給すると、すべてが正常に動作すれば、次のような結果が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/rp2350_ledDriver_led_result.jpg" style={{width:700, height:'auto'}}/></div>

#### モーション・カラー同期LED

**ステップ1.** ハードウェアの準備

<table align="center">
 <tr>
  <th>XIAO nRF52840</th>
        <th>LED Driver Board for XIAO</th>
        <th>WS2812 LED</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102010469-seeed-studio-xiao-nrf52840-sense-45font-logo.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/45-front.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ws2812_led.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"></a>
  </div></td>
 </tr>
</table>

**ステップ 2.**  以下に示すように、Seeed Studio XIAO nRF52840、LED Driver Board for XIAO、WS2812 LEDを接続します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/nRF52840_ledDriver_led_result.jpg" style={{width:700, height:'auto'}}/></div>

**ステップ 3.** 以下のコードは、XIAO nRF52840のオンボードLSM6DS3加速度センサーからデータを読み取り、現在の加速度値から色をマッピングして、LEDストリップの色をリアルタイムで変更することで動作します。

```cpp
#include <Arduino.h>
#include "LSM6DS3.h"              
#include <Adafruit_NeoPixel.h>     
#include "Wire.h"                  
#include "math.h"                  

// Define the pin connected to the NeoPixel data input
#define PIN A0

// Total number of NeoPixel LEDs
#define NUMPIXELS 300

// Create a NeoPixel strip object
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

// Variables for accelerometer data
float ax = 0;
float ay = 0;
float az = 0;

// RGB color components
uint8_t r = 0;
uint8_t g = 0;
uint8_t b = 0;

// Packed 24-bit RGB color value
uint32_t packedRGB = 0;

// Create an instance of the LSM6DS3 IMU in I2C mode at address 0x6A
LSM6DS3 myIMU(I2C_MODE, 0x6A);


void setup() {

    Serial.begin(9600);

    // Initialize the IMU sensor and check for errors
    if (myIMU.begin() != 0) {
        Serial.println("Device error"); 
    } else {
        Serial.println("Device OK!");   
    }

    // Initialize the NeoPixel strip
    pixels.begin();
}


void loop() {
    // Read acceleration values from the IMU
    ax = myIMU.readFloatAccelX();
    ay = myIMU.readFloatAccelY();
    az = myIMU.readFloatAccelZ();

    // Map acceleration (-1g to +1g) to RGB values (0 to 255)
    // Centered at 128 to allow both positive and negative variations
    r = constrain(ax * 100 + 128, 0, 255);
    g = constrain(ay * 100 + 128, 0, 255);
    b = constrain(az * 100 + 128, 0, 255);

    // Combine RGB components into a single 24-bit color value
    packedRGB = (r << 16) | (g << 8) | b;

    // Clear all existing pixels
    pixels.clear();

    // Fill all LEDs with the computed color
    pixels.fill(packedRGB, 0, NUMPIXELS);
    pixels.setBrightness(255);
    pixels.show();
    delay(100);
}

```

プログラムをアップロードしてLED Driver Boardに電源を供給すると、すべてが正常に動作すれば、以下のような結果を確認できます：

<div style={{textAlign:'center'}}>
<video width={225} height={400} controls preload>
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/nRF52840_ledDriver_led_result.mp4" />
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/nRF52840_ledDriver_led_result.webm" />
</video>
</div>

モジュールを振ると、ライトストリップの色が変化します。振動が激しいほど、色がより明るくなります。

### ESPHomeを使用してHome Assistantで遊ぶ

#### ハードウェアの準備

<div class="table-center">
  <table style={{textAlign:'center'}}>
    <tr>
        <th>Home Assistantデバイス</th>
    </tr>
    <tr>
        <td><img src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" style={{width:300, height:'auto'}}/></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/home_assistant_topic/#-devices-for-home-assistant-" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

#### ソフトウェア準備

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:700, height:'auto'}}/></div>

[ESPHome](https://esphome.io/) は、ESPボードの管理を可能な限りシンプルにすることを目的としたツールです。YAML設定ファイルを読み込み、ESPデバイスにインストールするカスタムファームウェアを作成します。ESPHomeの設定に追加されたデバイスやセンサーは、自動的にHome AssistantのUIに表示されます。ESPHomeは、デバイスを接続し、Home Assistantデバイスにデータを送信するのに役立ちます。

:::note
Home AssistantとESPHomeを初めて使用する場合は、Home Assistantのインストールに関するステップバイステップガイドについて<strong>[こちら](https://www.home-assistant.io/installation/)</strong>をご覧ください。
:::

ESPHomeは**Home Assistantアドオン**として利用でき、アドオンストアから簡単にインストールできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/1.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 1.** **INSTALL**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 2.** すべてのオプションを有効にし、**START**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

ESPHomeが正常に読み込まれると、以下のウィンドウが表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div>

#### 温度連動カラーLED

**ステップ 1.** ハードウェア準備

<table align="center" style={{textAlign:'center', overflowX: 'scroll', border: '1px solid #ccc', }}>
 <tr>
  <th>XIAO ESP32S3</th>
        <th>LED Driver Board for XIAO</th>
        <th>Grove - Temperature & Humidity Sensor (DHT11)</th>
        <th>WS2812 LED</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991114-xiao-esp32s3-font_1.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/45-front.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-temperature-humidity-sensor-dht11-preview.png" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ws2812_led.png" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"></a>
  </div></td>
 </tr>
</table>

**ステップ 2.** 以下のようにSeeed Studio XIAO ESP32S3、LED Driver Board for XIAO、WS2812 LEDを接続します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/esp32s3_ledDriver_led.jpg" style={{width:700, height:'auto'}}/></div>

**ステップ 3.** ESPHomeページを開き、**+ NEW DEVICE**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

**ステップ 4.** CONTINUEをクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

**ステップ 5.** デバイスの**Name**を入力し、**Network name**や**Password**などのWiFi認証情報を入力します。その後、**NEXT**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/1.png" style={{width:400, height:'auto'}}/></div>

**ステップ 6.** **ESP32-S3**を選択してクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/2.png" style={{width:400, height:'auto'}}/></div>

**ステップ 7.** このボードを手動で設定するため、**SKIP**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

**ステップ 8.** 新しく作成されたボードの下にある**EDIT**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/3.png" style={{width:400, height:'auto'}}/></div>

**ステップ 9.** 以下のコードを.yamlファイルの末尾にコピーします。XIAO ESP32S3はDHT11センサーから温度を読み取り、目標値からの温度差に基づいてRGB LEDの色を変更します。寒い場合は青、暑い場合は赤、正常な場合は緑を使用します。

```yaml
# DHT11 temperature and humidity sensor
sensor:
  - platform: dht
    pin: GPIO6
    model: DHT11  # Change to DHT22 or AM2302 if using a different model
    temperature:
      name: "Temperature"
      id: temp_sensor
    humidity:
      name: "Humidity"
    update_interval: 3s # Read new values every 3 seconds

# RGB LED (WS2812 single LED)
light:
  - platform: neopixelbus
    variant: ws2813  # ⚠️ Adjust based on your actual LED type (e.g., ws2812, ws2813, sk6812)
    type: GRB  # Color order (Green-Red-Blue)
    pin: GPIO1
    num_leds: 50 # Total number of NeoPixel LEDs
    name: "Temperature Color LED"
    id: rgb_led
    restore_mode: ALWAYS_ON
    default_transition_length: 0s

# Adjustable center temperature threshold
number:
  - platform: template
    name: "Target Temperature" # Center temperature value
    id: target_temp
    optimistic: true 
    min_value: 0 
    max_value: 40
    step: 0.1
    initial_value: 20.0 # Default center temperature (°C)

  - platform: template
    name: "Temperature Tolerance" # Tolerance around target temperature
    id: temp_tolerance
    optimistic: true
    min_value: 0
    max_value: 10
    step: 0.1
    initial_value: 5.0 # Default tolerance value (°C)

# Every 3 seconds, the LED color is updated:
# - Blue if too cold (below center - tolerance),
# - Red if too hot (above center + tolerance),
# - Green if temperature is close to the center,
# - Gradient between blue–green–red in transitional ranges.
#- If the temperature is not available, the LED blinks purple to indicate a sensor error.

interval:
  - interval: 3s
    then:
      - lambda: |-
          float t = id(temp_sensor).state;
          float center = id(target_temp).state;
          float tolerance = id(temp_tolerance).state;
          float r = 0.0, g = 0.0, b = 0.0;
          float ratio = 0.0;

          if (isnan(t)) {
            // Flash purple to indicate missing temperature
            static bool blink = false;
            blink = !blink;
            auto call = id(rgb_led).turn_on();
            call.set_rgb(blink ? 0.5 : 0.0, 0.0, blink ? 0.5 : 0.0);
            call.perform();
            return;
          }

          // Calculate RGB values based on temperature
          if (t <= (center - tolerance)) {
            b = 1.0;
            g = 0.0;
          } else if (t >= (center + tolerance)) {
            r = 1.0;
            g = 0.0;
          } else if (t <= center) {
            ratio = (center - t) / tolerance;
            b = ratio;
            g = 1.0 - ratio;
          } else {
            ratio = (t - center) / tolerance;
            r = ratio;
            g = 1.0 - ratio;
          }
          


          // Update LED
            auto call = id(rgb_led).turn_on();
            call.set_rgb(r, g, b);
            call.perform();
```

**ステップ 10.** 右上角の Install ボタンをクリックします。次に最後の項目 **Manual download** を選択し、**Modern format** を選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/31.png" style={{width:500, height:'auto'}}/></div>

その後、ダウンロードとコンパイルに長時間かかりますので、しばらくお待ちください。すべての準備が整うと、ファームウェアが自動的にコンピューターにダウンロードされます。

**ステップ 11.** [ESPhome Web ツール](https://web.esphome.io/?dashboard_install)を使用してファームウェアを XIAO ESP32S3 にアップロードし、**CONNECT** をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" style={{width:800, height:'auto'}}/></div>

ポップアップウィンドウで XIAO ESP32 のシリアルポートを選択し、**INSTALL** をクリックして、上記の手順でダウンロードした .bin ファイルを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" style={{width:500, height:'auto'}}/></div>

**ステップ 11.** インストールが正常に完了すると、次のように表示されます：

<div style={{textAlign:'center'}}>
<video width={600} height={338} controls preload>
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led_result.mp4" />
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led_result.webm" />
</video>
</div>

温湿度センサーに冷たい空気を吹きかけると、温度の低下に伴って LED ストリップの色が赤から青へと徐々に変化します。

**ステップ 12.** ダッシュボードに追加

**Setting** >> **Devices & Services** を開くと、ESPhome デバイスが見つかります。**ADD** をクリックしてダッシュボードに追加すると、次のように表示されます：

  <div class="img-container" align="center">
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led1.png"/>
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led2.png"/>
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led3.png"/>
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led4.png"/>
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led5.png"/>
  </div>

### WLED の実行

#### ハードウェアの準備

<table align="center">
 <tr>
  <th>XIAO ESP32C3</th>
        <th>LED Driver Board for XIAO</th>
        <th>WS2812 LED</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991054-seeed-studio-xiao-esp32c3-45font_1.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/45-front.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ws2812_led.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"></a>
  </div></td>
 </tr>
</table>

Seeed Studio XIAO nRF52840、LED Driver Board for XIAO、WS2812 LEDを以下のように接続してください：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/esp32c3_ledDriver_led.jpg" style={{width:600, height:'auto'}}/></div>

#### WLEDのインストール

**ステップ 1.** <strong>[WLED install web](https://install.wled.me/)</strong>を開き、XIAO ESP32C3をPCに接続し、**Install**をクリックして、ポートに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/wled_install.png" style={{width:800, height:'auto'}}/></div>

**ステップ 2.** インストールが正常に完了した後、デバイスのWiFiを設定する必要があります。XIAO ESP32C3とコンピュータ/携帯電話を同じLANに接続することをお勧めします。

**ステップ 3.** これで、**VISIT DEVICE**をクリックしてLEDストリップを制御できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/visit_device.png" style={{width:800, height:'auto'}}/></div>

**ステップ 4.** または、携帯電話のアプリマーケットで**WLED**アプリをインストールし、ソフトウェアの右上角の+記号でLEDデバイスを見つけることができます。

すべてが正常に動作すれば、以下のような結果が見られます：

<div style={{textAlign:'center'}}>
<video width={600} height={338} controls preload>
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/wled_result.webm" />
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/wled_result.mp4" />
</video>
</div>

## リソース

- **[PDF]**: [LED_Driver_Board_for_Seeed_Studio_XIAO_SCH_PDF](https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/LED_Driver_Board_for_Seeed_Studio_XIAO_SCH_PDF_20250417.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
