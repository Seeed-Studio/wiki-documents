---
description: Seeed Studio XIAO ESP32S3でのピン多重化。
title: Seeed Studio XIAO ESP32S3 (Sense)でのピン多重化
keywords:
- esp32s3
- xiao
- pin multiple
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32s3_pin_multiplexing
sku: 113991114, 113991115
type: project
last_update:
  date: 03/30/2023
  author: Citric
---

# Seeed Studio XIAO ESP32S3 (Sense)でのピン多重化

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32S3</th>
     <th>Seeed Studio XIAO ESP32S3 Sense</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Seeed Studio XIAO ESP32S3は、様々な周辺インターフェースとGPIOピンを備えた強力で多用途な開発ボードです。これらのピンは、他のデバイスとの通信、アナログセンサーの読み取り、LEDの制御など、様々な目的に使用できます。このチュートリアルでは、XIAO ESP32S3とその関連ボードであるXIAO ESP32S3 Senseのピン配置を探索し、これらのピンを異なる目的で使用する方法を学びます。具体的には、1x UART、1x I2C、1x I2S、1x SPI、11x GPIO（PWM）、9x ADC、1x ユーザーLED、1x 充電LED、1x リセットボタン、1x Bootボタン、そしてXIAO ESP32S3 Senseの場合は1x B2Bコネクタ（追加の2つのGPIOを含む）の使用方法を説明します。このチュートリアルの終わりには、XIAO ESP32S3のピン配置をよく理解し、プロジェクトで効果的に使用できるようになります。

## 入門

### ピン配置の概要

始める前に、XIAO ESP32S3が持つすべてのピンとその機能を以下の回路図で確認しましょう。

<table align="center">
 <tr>
     <th>XIAO ESP32S3/XIAO ESP32S3 Sense 前面表示図</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32S3/XIAO ESP32S3 Sense 背面表示図</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32S3/XIAO ESP32S3 Sense ピンリスト</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

:::caution
XIAO ESP32-S3はGPIO41とGPIO42をピンA11とA12に割り当てていますが、ESP32-S3チップの性質上、ピンA11とA12はADC機能をサポートしていません。必ず区別して使い分けてください。
:::

- 5V - これはUSBポートからの5V出力です。電圧入力としても使用できますが、外部電源とこのピンの間に何らかのダイオード（ショットキー、信号、電力）を配置し、アノードをバッテリー側、カソードを5Vピン側にする必要があります。

- 3V3 - これはオンボードレギュレータからの調整された出力です。700mAまで供給できます。

- GND - 電源/データ/信号グランド

以下は、XIAO ESP32S3の機能ピンの概要です。

<div class="table-center">
 <table align="center">
  <tr>
   <th>ピン番号</th>
   <th>機能説明</th>
  </tr>
    <tr>
   <th colspan="2">-- PDMマイクロフォンピン --</th>
  </tr>
  <tr>
   <td align="center">GPIO 41</td>
   <td align="center">PDMマイクロフォン DATA</td>
  </tr>
  <tr>
   <td align="center">GPIO 42</td>
   <td align="center">PDMマイクロフォン CLK</td>
  </tr>
    <tr>
   <th colspan="2">-- MicroSDカード SPIピン --</th>
  </tr>
  <tr>
   <td align="center">GPIO 21</td>
   <td align="center">MicroSD SPI CS</td>
  </tr>
  <tr>
   <td align="center">D8 / A8 / Qt7 / GPIO7</td>
   <td align="center">MicroSD SPI SCK</td>
  </tr>
  <tr>
   <td align="center">D9 / A9 / Qt8 / GPIO8</td>
   <td align="center">MicroSD SPI MISO</td>
  </tr>
  <tr>
   <td align="center">D10 / A10 / Qt9 / GPIO9</td>
   <td align="center">MicroSD SPI MOSI</td>
  </tr>
    <tr>
   <th colspan="2">-- カメラピン --</th>
  </tr>
    <tr>
   <td align="center">GPIO 10</td>
   <td align="center">XMCLK</td>
  </tr>
    <tr>
   <td align="center">GPIO 11</td>
   <td align="center">DVP_Y8</td>
  </tr>
    <tr>
   <td align="center">GPIO 12</td>
   <td align="center">DVP_Y7</td>
  </tr>
    <tr>
   <td align="center">GPIO 13</td>
   <td align="center">DVP_PCLK</td>
  </tr>
    <tr>
   <td align="center">GPIO 14</td>
   <td align="center">DVP_Y6</td>
  </tr>
    <tr>
   <td align="center">GPIO 15</td>
   <td align="center">DVP_Y2</td>
  </tr>
    <tr>
   <td align="center">GPIO 16</td>
   <td align="center">DVP_Y5</td>
  </tr>
    <tr>
   <td align="center">GPIO 17</td>
   <td align="center">DVP_Y3</td>
  </tr>
    <tr>
   <td align="center">GPIO 18</td>
   <td align="center">DVP_Y4</td>
  </tr>
    <tr>
   <td align="center">GPIO 38</td>
   <td align="center">DVP_VSYNC</td>
  </tr>
    <tr>
   <td align="center">GPIO 39</td>
   <td align="center">Camera SCL</td>
  </tr>
    <tr>
   <td align="center">GPIO 40</td>
   <td align="center">Camera SDA</td>
  </tr>
    <tr>
   <td align="center">GPIO 47</td>
   <td align="center">DVP_HREF</td>
  </tr>
    <tr>
   <td align="center">GPIO 48</td>
   <td align="center">DVP_Y9</td>
  </tr>
 </table>
</div>

### ヘッダーのはんだ付け

このチュートリアルに従って各ピンの機能を使用するには、事前にピンをはんだ付けすることをお勧めします。

XIAO ESP32S3の小型サイズのため、ヘッダーをはんだ付けする際は注意してください。異なるピンを一緒に接着したり、シールドや他の部品にはんだを付着させたりしないでください。そうしないと、XIAOがショートしたり正常に動作しなくなる可能性があり、これによって生じる結果はユーザーが負担することになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/4.jpg" style={{width:400, height:'auto'}}/></div>

Senseバージョンを選択した場合、おめでとうございます！追加の2つのGPIOピンが利用できます。それらを使用する予定がある場合は、別のヘッダーをはんだ付けできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/18.jpg" style={{width:400, height:'auto'}}/></div>

## デジタル

XIAO ESP32S3は最大11個の通常のGPIOピンと9個のアナログピンを持っています。この例では、XIAO ESP32S3、XIAO拡張ボード、リレーを使用して、異なるデジタルピンを読み書きに使用する方法を実演します。

### ハードウェアの準備

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32S3</th>
     <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Relay</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

XIAO ESP32S3またはSenseを拡張ボードに取り付け、Groveケーブルを使用してリレーを拡張ボードの**A0/D0**インターフェースに接続してください。最後に、USB-CケーブルでXIAOをコンピューターに接続します。

### ソフトウェアの実装

この例では、XIAO拡張ボードに接続されたボタンを使用してリレーのオン/オフ状態を制御する実装を行います。ボタンが押されるとリレーがオンになり、ボタンが離されるとリレーがオフになります。

```c
const int buttonPin = D1;     // the number of the pushbutton pin
int buttonState = 0;          // variable for reading the pushbutton status
const int relayPin = D0;

void setup() {
  // initialize the Relay pin as an output:
  pinMode(relayPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn Relay on:
    digitalWrite(relayPin, HIGH);
  } else {
    // turn Relay off:
    digitalWrite(relayPin, LOW);
  }
}
```

すべてが順調に進めば、プログラムをアップロードした後、以下のような効果が見られるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/19.gif" style={{width:500, height:'auto'}}/></div>

:::tip
デジタル機能を使用したい場合は、ピン番号の接頭辞として文字「D」を使用する必要があります（例：D4、D5）。逆に、ピンのアナログ機能を使用したい場合は、ピン番号の接頭辞として文字「A」を使用する必要があります（例：A4、A5）。
:::

### Sense版について

XIAO ESP32S3 Senseでは、XIAOの11個のデジタルピンに加えて、拡張ボード上の2つのピン（**D11**と**D12**）も使用できます。これらを使用したい場合は、以下の手順に従ってください。

#### ステップ1. J1とJ2の接続を切断する

ESP32-S3のピン数が限られているため、Sense拡張ボード上のD11とD12は、デフォルトでマイクロフォン用に予約されています。D11とD12を他の目的で使用する必要がある場合は、Sense拡張ボードを裏返し、2つのはんだパッド間の白い線に沿って、鋭いナイフでJ1とJ2の接続を切断してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/20.png" style={{width:400, height:'auto'}}/></div>

:::caution
画像からわかるように、XIAOのスペース制限により、多くの配線レイアウトが非常にコンパクトになっています。そのため、J1とJ2の接続を切断する際は、白い線の外側を切らないよう十分注意してください。そうしないと、開発ボードが故障する可能性があります！

XIAO ESP32-S3はGPIO41とGPIO42をピンA11とA12に割り当てていますが、ESP32-S3チップの性質上、ピンA11とA12はADC機能をサポートしていません。必ず区別して使い分けてください。
:::

:::tip
J1とJ2の接続を切断した後、拡張ボード上のマイクロフォン機能は使用できなくなります。マイクロフォン機能を使用する必要がある場合、D11とD12ピンを同時に使用することはできません。この場合、J1とJ2の2つのパッドを別々にはんだ付けして、マイクロフォン機能を復元できます。下の画像に示すように、赤と緑の領域を別々にはんだ付けしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/21.png" style={{width:400, height:'auto'}}/></div>
:::

実際の回路図については、以下の図を参照してください：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/92.png" style={{width:600, height:'auto'}}/></div>

#### ステップ2. ハードウェアの準備

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Grove - Relay</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:200, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### ステップ3. ソフトウェアの実装

以下のプログラムは、500ミリ秒ごとにリレーを切り替えます。リレーのSIGピンを拡張ボードのGPIO42インターフェースに接続してください。

```c
const int relayPin = 42;

void setup() {
  // initialize the Relay pin as an output:
  pinMode(relayPin, OUTPUT);
}

void loop() {
    // turn Relay on:
    digitalWrite(relayPin, HIGH);
    delay(500);
    // turn Relay off:
    digitalWrite(relayPin, LOW);
    delay(500);
}
```

上記の方法は、[Digital as PWM](#digital-as-pwm)と[Analog](#analog)セクションにも適用できます。使用したい拡張ボードのピン番号を変更するだけです。これについては後で繰り返しません。

:::caution
XIAO ESP32S3 Senseの追加の2つのピンD11とD12については、まだピンのマクロ定義を行っていません。つまり、これらの2つのピンを制御するためにD11/A11やD12/A12をまだ使用することはできませんが、GPIO番号（それぞれGPIO42とGPIO41）を使用してこれらの2つのピンを制御することができます。これらの2つのピンのマクロ定義をできるだけ早く提出し、提出が完了すれば、D/Aピン定義を使用できるようになります。
:::

## Digital as PWM

XIAO ESP32S3のすべてのGPIOピンはPWM出力をサポートしています。そのため、任意のピンを使用してPWMを出力し、ライトの明るさを調整したり、サーボを制御したりすることができます。

### ハードウェアの準備

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32S3</th>
     <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Variable Color LED</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

XIAO ESP32S3またはSenseを拡張ボードに取り付け、Groveケーブルを使用してVariable Color LEDを拡張ボードのA0/D0インターフェースに接続してください。最後に、USB-CケーブルでXIAOをコンピューターに接続します。

### ソフトウェアの実装

この例では、PWM出力を使用してライトの明るさを制御する方法を実演します。

```cpp
int LED_pin = D0;    // LED connected to digital pin 10

void setup() {
  // declaring LED pin as output
  pinMode(LED_pin, OUTPUT);
}

void loop() {
  // fade in from min to max in increments of 5 points:
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    // sets the value (range from 0 to 255):
    analogWrite(LED_pin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }

  // fade out from max to min in increments of 5 points:
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    // sets the value (range from 0 to 255):
    analogWrite(LED_pin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }
}
```

プログラムが正常に実行されると、以下のような実行効果が見られます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/22.gif" style={{width:500, height:'auto'}}/></div>

## Analog

XIAO ESP32S3では、内蔵の11個のGPIOピンのうち、シリアル通信に使用されるD6とD7ピンを除く残りの9個のピンがアナログ機能をサポートしています。これらのアナログ機能を持つGPIOピンを使用して、酸素センサーや光強度センサーなど、アナログ信号を生成するセンサーから値を読み取ることができます。

:::caution
XIAO ESP32-S3はGPIO41とGPIO42をピンA11とA12に割り当てていますが、ESP32-S3チップの性質上、ピンA11とA12はADC機能をサポートしていません。必ず区別して使い分けてください。
:::

### ハードウェアの準備

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32S3</th>
     <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Oxygen Sensor</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/cover.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Oxygen-Sensor-ME2-O2-f20.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

XIAO ESP32S3またはSenseを拡張ボードに取り付け、Groveケーブルで酸素センサーを拡張ボードのA0/D0インターフェースに接続してください。最後に、USB-CケーブルでXIAOをコンピューターに接続します。

### ソフトウェア実装

以下のプログラムでは、`analogRead()`メソッドを使用してセンサーのアナログ値を読み取り、Serialインターフェースを使用してセンサーの結果を出力します。

```cpp
// Grove - Gas Sensor(O2) test code
// Note:
// 1. It need about about 5-10 minutes to preheat the sensor
// 2. uncomment the module name you're using
// 3. modify VRefer if needed

// comment useless one
// #define MIX8410
#define O2_W2

#ifdef MIX8410
  #define O2_COEFFICIENT 0.21
#elif defined(O2_W2)
  #define O2_COEFFICIENT 0.087
#endif

const float VRefer = 3.34;       // voltage of adc reference
const int pinAdc   = A0;

void setup() 
{
    // put your setup code here, to run once:
    Serial.begin(9600);
    Serial.println("Grove - Oxygen Sensor(MIX8410) Test Code...");
}

void loop() 
{
    // put your main code here, to run repeatedly:
    float Vout =0;
    Serial.print("Vout =");

    Vout = readO2Vout();
    Serial.print(Vout);
    Serial.print(" V, Concentration of O2 is ");
    Serial.println(readConcentration());
    delay(500);
}

float readO2Vout()
{
    long sum = 0;
    for(int i=0; i<32; i++)
    {
        sum += analogRead(pinAdc);
    }

    sum >>= 5;

    float MeasuredVout = sum * (VRefer / 1023.0);
    return MeasuredVout;
}

float readConcentration()
{
    // Vout samples are with reference to 3.3V
    float MeasuredVout = readO2Vout();

    //float Concentration = FmultiMap(MeasuredVout, VoutArray,O2ConArray, 6);
    //when its output voltage is 2.0V,
    float Concentration = MeasuredVout * O2_COEFFICIENT / 2.0;
    float Concentration_Percentage=Concentration*100;
    return Concentration_Percentage;
}
```

:::tip
ピンのアナログ機能を使用したい場合は、A4、A5のようにピン番号の前に文字「A」を付ける必要があります。逆に、デジタル機能を使用したい場合は、D4、D5のようにピン番号の前に文字「D」を付ける必要があります。
:::

プログラムをアップロードした後、Arduino IDEでSerial Monitorを開き、ボーレートを9600に設定します。酸素センサーのウォームアップを待つと、正確な酸素濃度値を確認できるようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/23.png" style={{width:600, height:'auto'}}/></div>

## Serial

Arduino IDEで作業する際、Serial通信は多くのプロジェクトで重要な部分です。Arduino IDEでSerialを使用するには、まずSerial Monitorウィンドウを開く必要があります。これは、ツールバーの**Serial Monitor**アイコンをクリックするか、**Ctrl+Shift+M**ショートカットキーを押すことで実行できます。

### 一般的な使用方法

よく使用されるSerial関数には以下があります：

- `Serial.begin()` -- 指定されたボーレートで通信を初期化します
- `Serial.print()` -- 読み取り可能な形式でSerialポートにデータを送信します
- `Serial.write()` -- Serialポートにバイナリデータを送信します
- `Serial.available()` -- Serialポートから読み取り可能なデータがあるかどうかを確認します
- `Serial.read()` -- Serialポートから1バイトのデータを読み取ります
- `Serial.flush()` -- 送信中のシリアルデータの送信完了を待ちます

これらのSerial関数を使用することで、Arduinoボードとコンピューター間でデータを送受信でき、インタラクティブなプロジェクトを作成する多くの可能性が開かれます。

以下はサンプルプログラムです：

```c
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

void loop() {
  // send data to the serial port
  Serial.println("Hello World!");

  // read data from the serial port
  if (Serial.available() > 0) {
    // read the incoming byte:
    char incomingByte = Serial.read();
    // print the incoming byte to the serial monitor:
    Serial.print("I received: ");
    Serial.println(incomingByte);
  }

  // wait for a second before repeating the loop
  delay(1000);
}
```

このコードでは、まず`setup()`関数内で`Serial.begin()`関数を使用してボーレート**9600**でSerial通信を初期化します。次に、`loop()`関数内で`Serial.print()`関数を使用して「Hello World!」をSerialポートに送信します。

また、`Serial.available()`関数を使用してSerialポートから読み取り可能なデータがあるかどうかを確認します。データがある場合は、`Serial.read()`関数を使用して受信バイトを読み取り、incomingByteという変数に格納します。その後、`Serial.print()`と`Serial.println()`関数を使用して「I received: 」に続いてincomingByteの値をSerial monitorに出力します。

最後に、`delay()`関数を追加してループを繰り返す前に1秒間待機します。このコードは、Arduino IDEでSerialポートを通じてデータを送受信するために一般的に使用されるSerial関数の使用方法を示しています。

プログラムをアップロードした後、Arduino IDEでSerial Monitorを開き、ボーレートを9600に設定します。シリアルモニターに以下のメッセージが表示され、毎秒「Hello World!」が出力されます。また、シリアルモニターを通じてXIAO ESP32S3にコンテンツを送信でき、XIAOは送信したコンテンツの各バイトを出力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/24.png" style={{width:600, height:'auto'}}/></div>

### Serial1の使用方法

上記のXIAO ESP32S3ピン図の特定のパラメータによると、TXピンとRXピンがあることが確認できます。
これはシリアル通信とは異なりますが、使用方法も非常に似ており、いくつかのパラメータを追加する必要があるだけです。
そこで次に、チップから引き出されたピンをシリアル通信に使用します。

含める必要があるコア関数：

- `Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);` -- Serial1を有効にします。関数プロトタイプ：`<Serial.Type>.begin(unsigned long baud, uint32_t config, int8_t rxPin, int8_t txPin);`
  - `baud`：ボーレート
  - `config`：設定ビット
  - `rxPin`：受信ピン
  - `txPin`：送信ピン

注目すべき点は、デジタルピンポートを使用して定義する場合、ここは`#define RX_PIN D7`、`#define TX_PIN D6`とする必要があり、GPIOピンポートを使用して定義する場合、ここは`#define RX_PIN 44`、`#define TX_PIN 43`とする必要があることです。特定のパラメータについては、異なるXIAOシリーズのピン図を参照してください。

以下はサンプルプログラムです：

```c
#define RX_PIN D7
#define TX_PIN D6
#define BAUD 115200

void setup() {
    Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);
}

void loop() {
  if(Serial1.available() > 0)
  {
    char incominByte = Serial1.read();
    Serial1.print("I received : ");
    Serial1.println(incominByte);
  }
  delay(1000);
}
```

プログラムをアップロードした後、Arduino IDEでSerial Monitorを開き、ボーレートを115200に設定します。その後、シリアルモニターSerialを通じてXIAO ESP32S3に任意のコンテンツを送信でき、XIAOは送信したコンテンツの各バイトを出力します。ここでは、「Hello Everyone」と入力し、結果チャートは以下のとおりです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/114.png" style={{width:600, height:'auto'}}/></div>

### ソフトウェアSerialの使用方法

1つのハードウェアシリアルポートでは不十分だと感じる場合は、ESP32のソフトウェアシリアル機能を使用して、いくつかのピンをソフトウェアシリアルとして設定し、シリアルポートの数を拡張することもできます。

もちろん、ESP32の独自機能であるハードウェアシリアルポートをマッピングする2番目の方法を使用することをお勧めします。詳細については、[その他のハードウェアSerial](#その他のハードウェア-serial)セクションをお読みください。

ESP32シリーズチップ製品の場合、ソフトシリアルポートを使用する必要がある場合は、サードパーティのソフトシリアルポートライブラリを別途ダウンロードする必要があります。ここでは参考資料を提供します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/plerup/espsoftwareserial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::tip
現在、EspSoftwareSerialライブラリのバージョン7.0.0を推奨しています。他のバージョンでは、ソフトシリアルポートが正常に動作しない様々な問題が発生する可能性があります。
:::

zipライブラリをダウンロードしたので、Arduino IDEを開き、**Sketch > Include Library > Add .ZIP Library**をクリックします。ダウンロードしたzipファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに**Library added to your libraries**と表示されます。これはライブラリが正常にインストールされたことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

次に、ESP32のソフトシリアルポートを使用できます。

:::caution
コンピュータに他のソフトシリアルポートライブラリがインストールされている場合、競合を引き起こす可能性がありますので、ご自身で確認してください。
:::

```c
#include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3); // RX, TX

void setup() {
  // initialize serial communication
  Serial.begin(9600);
  while (!Serial);

  // initialize software serial
  mySerial.begin(9600);
}

void loop() {
  // read data from software serial
  if (mySerial.available()) {
    char data = mySerial.read();
    Serial.print("Received data: ");
    Serial.println(data);
  }

  // write data to software serial
  mySerial.print("Hello World!");

  // wait for a second before repeating the loop
  delay(1000);
}
```

このプログラムでは、まずソフトウェアシリアルを使用するために`SoftwareSerial.h`ライブラリをインクルードします。次に、ピン2と3をそれぞれRXとTXとして使用してmySerialという新しいSoftwareSerialオブジェクトを作成します。

`setup()`関数では、ハードウェアシリアル（`Serial.begin()`）とソフトウェアシリアル（`mySerial.begin()`）の両方を初期化します。

`loop()`関数では、`mySerial.available()`関数を使用してソフトウェアシリアルから読み取り可能なデータがあるかどうかを確認します。データがある場合、`mySerial.read()`関数を使用して受信バイトを読み取り、dataという変数に格納します。次に、`Serial.print()`と`Serial.println()`関数を使用して「Received data: 」に続いてdataの値をハードウェアシリアルに出力します。

また、`mySerial.print()`関数を使用してソフトウェアシリアルに「Hello World!」を書き込みます。これにより、XIAOからソフトウェアシリアルポートに接続されたデバイスにデータが送信されます。

最後に、`delay()`関数を追加してループを繰り返す前に1秒間待機します。

:::note
ESP32-S3でソフトウェアシリアルを使用するには、他の目的で使用されていないRXとTXに適切なピンを選択する必要があることに注意してください。この例では、RXとTXにそれぞれピン9と10を使用しています。
:::

### その他のハードウェアシリアル

ESP32S3には合計3つのUART通信インターフェースがあり、0から2まで番号が付けられており、UART0、UART1、UART2です。これら3つのシリアルポートのピンは固定されておらず、任意のIOポートに再マッピングできます。

デフォルトでは、**UART0**はUSBシリアル通信に使用されるため使用しません。ハードウェアシリアルマッピングをカスタマイズすることで、他のハードウェアシリアルポートを使用できます。

```c
// Need this for the lower level access to set them up.
#include <HardwareSerial.h>

//Define two Serial devices mapped to the two internal UARTs
HardwareSerial MySerial0(0);
HardwareSerial MySerial1(1);

void setup()
{
    // For the USB, just use Serial as normal:
    Serial.begin(115200);

    // Configure MySerial0 on pins TX=D6 and RX=D7 (-1, -1 means use the default)
    MySerial0.begin(9600, SERIAL_8N1, -1, -1);
    MySerial0.print("MySerial0");

    // And configure MySerial1 on pins RX=D9, TX=D10
    MySerial1.begin(115200, SERIAL_8N1, D9, D10);
    MySerial1.print("MySerial1");
}

void loop()
{

}
```

以下では、販売中の[60GHz mmWave Sensor - Human Resting Breathing and Heartbeat Module](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html)を例に、D9とD10のハードウェアシリアルポートとUSBシリアルポートの使用方法を説明します。

以下を準備してください。

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32S3</th>
     <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>60GHz mmWave Sensor -<br/>Human Resting Breathing<br/>and Heartbeat Module</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:240, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:240, height:'auto'}}/></div></td>
        <td><div align="center"><img width = {240} src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

センサーライブラリをコンピュータにダウンロードし、Arduino IDEに追加してください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

ここでは、心拍と呼吸データ情報を解析したいので、プログラムを次のように書き換えることができます。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>
#include <HardwareSerial.h>

HardwareSerial MySerial(0);   //Create a new HardwareSerial class -- D6/D7

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&MySerial);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  MySerial.begin(115200, SERIAL_8N1, 9, 10); // at CPU Freq is 40MHz, work half speed of defined.

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");

  // radar.ModeSelect_fuc(1);  //1: indicates real-time transmission mode, 2: indicates sleep state mode.
  //After setting the mode, if you do not see data returned, you may need to re-power the sensor.
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.Breath_Heart();           //Breath and heartbeat information output
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case HEARTRATEVAL:
        Serial.print("Sensor monitored the current heart rate value is: ");
        Serial.println(radar.heart_rate, DEC);
        Serial.println("----------------------------");
        break;
      case HEARTRATEWAVE:  //Valid only when real-time data transfer mode is on
        Serial.print("The heart rate waveform(Sine wave) -- point 1: ");
        Serial.print(radar.heart_point_1);
        Serial.print(", point 2 : ");
        Serial.print(radar.heart_point_2);
        Serial.print(", point 3 : ");
        Serial.print(radar.heart_point_3);
        Serial.print(", point 4 : ");
        Serial.print(radar.heart_point_4);
        Serial.print(", point 5 : ");
        Serial.println(radar.heart_point_5);
        Serial.println("----------------------------");
        break;
      case BREATHNOR:
        Serial.println("Sensor detects current breath rate is normal.");
        Serial.println("----------------------------");
        break;
      case BREATHRAPID:
        Serial.println("Sensor detects current breath rate is too fast.");
        Serial.println("----------------------------");
        break;
      case BREATHSLOW:
        Serial.println("Sensor detects current breath rate is too slow.");
        Serial.println("----------------------------");
        break;
      case BREATHNONE:
        Serial.println("There is no breathing information yet, please wait...");
        Serial.println("----------------------------");
        break;
      case BREATHVAL:
        Serial.print("Sensor monitored the current breath rate value is: ");
        Serial.println(radar.breath_rate, DEC);
        Serial.println("----------------------------");
        break;
      case BREATHWAVE:  //Valid only when real-time data transfer mode is on
        Serial.print("The breath rate waveform(Sine wave) -- point 1: ");
        Serial.print(radar.breath_point_1);
        Serial.print(", point 2 : ");
        Serial.print(radar.breath_point_2);
        Serial.print(", point 3 : ");
        Serial.print(radar.breath_point_3);
        Serial.print(", point 4 : ");
        Serial.print(radar.breath_point_4);
        Serial.print(", point 5 : ");
        Serial.println(radar.breath_point_5);
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       //Add time delay to avoid program jam
}
```

プログラムをアップロードしてから、シリアルモニターを開いてボーレートを115200に設定してください。

すべてが正常に動作すれば、シリアルモニターにデータメッセージが表示されます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/2.png" alt="pir" width="800" height="auto"/></div>

## IIC

XIAO ESP32S3にはI2Cインターフェースがあり、多くのセンサーのデータ送信と解析、およびOLEDスクリーンの使用に利用できます。

### ハードウェアの準備

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32S3</th>
     <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

XIAO拡張ボード上のOLEDディスプレイはI2Cプロトコルを使用し、ボード上のI2C回路を通じてXIAOのI2Cインターフェースに接続されています。そのため、XIAOを拡張ボードに直接差し込んで、画面にコンテンツを表示するようにプログラムできます。

### ソフトウェア実装

この例では、Seeed Studio Expansion Base for XIAO ESP32S3のOLEDディスプレイの使用方法を紹介します。

#### ステップ1. Seeed Studio XIAO ESP32S3を拡張ボードに取り付け、Type-Cケーブルを接続する

#### ステップ2. u8g2ライブラリをインストールする

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

#### ステップ3. コードをコピーしてArduino IDEに貼り付け、アップロードする

```c
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(1);   // set number from 1 to 3, the screen word will rotary 180
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("Hello World!");
}
```

コードの最初の数行では、Arduino.h、U8x8lib.h、Wire.hなどの必要なライブラリをインクルードしています。U8x8lib.hライブラリはOLEDディスプレイを制御する関数を提供し、Wire.hライブラリはI2C通信用の関数を提供します。

`setup()`関数では、`u8x8.begin()`関数を使用してOLEDディスプレイを初期化します。また、`u8x8.setFlipMode()`関数を使用してディスプレイのフリップモードを設定し、画面を180度回転させます。

`loop()`関数では、`u8x8.setFont()`関数を使用してフォントを設定し、`u8x8.setCursor()`関数を使用してディスプレイ上のカーソルの位置を指定します。最後に、`u8x8.print()`関数を使用してOLEDディスプレイに「Hello World!」という文字列を表示します。

XIAO ESP32S3にプログラムをアップロードすると、拡張ボードのOLEDディスプレイ画面にコンテンツが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/29.jpg" style={{width:600, height:'auto'}}/></div>

## SPI

ESP32-S3チップは複数の周辺機器を統合しており、フラッシュメモリ、ディスプレイ、センサーなどの外部SPIデバイスを接続するために使用できるSPIインターフェースを含んでいます。ESP32-S3は高速SPI転送モードもサポートしており、最大80MHzのSPI転送レートを実現でき、ほとんどのSPIデバイスのデータ転送ニーズを満たします。

### ハードウェアの準備

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32S3</th>
     <th>Seeed Studio XIAO ESP32S3 Sense</th>
      <th>Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Main-02.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

上記のハードウェアを準備した後、ジャンパーワイヤーを使用してXIAOとOLEDのSPIインターフェースを接続します。配線方法については、以下の図を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/30.jpg" style={{width:800, height:'auto'}}/></div>

### ソフトウェア実装

次に、以下のプログラムを例として、SPIインターフェースを使用してOLEDスクリーンの表示を制御する方法を紹介します。

u8g2ライブラリをインストールします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

```c
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, /* cs=*/ D7, /* dc=*/ D4, /* reset=*/ D5);

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.firstPage();

  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```

`setup()`関数では、チップセレクト（cs）、データ/コマンド（dc）、リセットに使用されるピンを指定する適切なコンストラクタ引数で`U8G2_SH1107_128X128_1_4W_HW_SPI`クラスがインスタンス化されます。その後、`u8g2.begin()`関数が呼び出されてディスプレイが初期化されます。

`loop()`関数では、`u8g2.firstPage()`、`u8g2.setFont()`、`u8g2.drawStr()`関数を使用してディスプレイが新しいコンテンツで更新されます。`u8g2.firstPage()`関数は書き込み用のディスプレイバッファを設定し、`u8g2.nextPage()`は更新されたコンテンツを表示します。do-whileループは、プログラムが停止されるまでコンテンツが継続的に表示されることを保証します。

全体的に、このコードはU8g2ライブラリを使用してOLEDディスプレイを制御し、テキストを表示する方法を示しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/31.jpg" style={{width:600, height:'auto'}}/></div>

### Sense版について

Sense版を購入し、拡張ボードに接続する必要がある場合、拡張ボード上のSDカードがSPIピンを占有するため、SPIピンが使用できなくなる可能性があることにご注意ください。

Sense拡張ボードに提供されているはんだパッドインターフェースにより、ユーザーは必要な機能を選択できます。その中で、**J3**はんだパッドの機能は、SPIまたはSDカード機能を有効にすることです。

<table align="center">
 <tr>
     <th>SPIピンを使用したい場合 / 拡張ボードのSDカードを無効にしたい場合</th>
     <th>拡張ボードのSDカードを有効にしたい場合 / SPIピンを無効にしたい場合</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.JPG" style={{width:300, height:'auto'}}/></div></td>
 </tr>
  <tr>
    <td>白い細い線に沿って切断し、はんだパッドの接続を切断します。</td>
    <td>2つのはんだパッドをはんだ付けして接続します。</td>
  </tr>
</table>

:::caution
画像からわかるように、XIAOのスペース制限により、多くの配線レイアウトが非常にコンパクトです。したがって、J3の接続を切断する際は、白い線の外側を切断しないよう十分注意してください。そうしないと開発ボードが故障する可能性があります！
:::

:::caution
常識的な理解のため、上記ではJ3をSDカード機能のオン/オフを切り替えるインターフェースとして簡単に説明しましたが、これは実際には不正確です。実際の回路接続は以下に示されています。J3を切断すると、実際にはR4からR6のプルアップ抵抗が切断され、これがSDカード機能が無効になり、SPI機能が正常に復元される主な理由です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/93.png" style={{width:800, height:'auto'}}/></div>
:::

## タッチピン

上記で説明した一般的な機能ピンに加えて、XIAO ESP32S3/XIAO ESP32S3 Senseには9つのタッチ検出ピンA0〜A5、A8〜A10もあります。

アナログ値を読み取ることでピンがタッチされたかどうかを確認でき、これは非常に便利です。以下のプログラムは、ピンA5がタッチされたかどうかを検出するために使用されます。

```c
const int touch_pin = A5;

void setup(void) {
  Serial.begin(9600);
}

void loop(void) {
  Serial.print("Touch value: ");
  Serial.println(analogRead(touch_pin));
  delay(1000);
}
```

プログラムをアップロードした後、シリアルモニターを開いてボーレートを9600に設定します。次にピンA5をタッチすると、アナログ読み取り値がタッチする前の値よりも大幅に大きくなることがわかります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/32.gif" style={{width:600, height:'auto'}}/></div>

## USBピン

ESP32-S3は、Wi-FiとBluetooth機能を統合したマイクロコントローラーであり、そのD+とD-ピンはUSB通信をサポートするために使用されます。具体的には、これら2つのピンは、USB 2.0デバイスとホスト間の高速データ伝送に使用される差動信号線です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.png" style={{width:200, height:'auto'}}/></div>

D+ピンはデータ送信に使用される正極性線であり、D-ピンはデータ送信に使用される負極性線です。USBデバイスがホストに接続されると、ホストはこれら2つのピンの電圧変化を検出して、デバイスの接続状態と伝送速度を判断します。データ伝送中、D+とD-ピンは交互にデータビットと同期信号を送信して、信頼性の高いデータ伝送を実現します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/34.png" style={{width:800, height:'auto'}}/></div>

## JTAGピン

ESP32-S3のJTAG（Joint Test Action Group）インターフェースは、開発、デバッグ、テスト中に非常に低レベルのハードウェアデバッグとプログラミングに使用できるデバッグおよびテストインターフェースです。JTAGインターフェースには、クロック線、データ入力線、データ出力線、テストモード選択線、テストモードクロック線などの標準信号線のセットが含まれています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/35.png" style={{width:200, height:'auto'}}/></div>

ESP32-S3のJTAGインターフェースは以下の目的で使用できます：

1. デバッグ：JTAGインターフェースは、ESP32-S3チップでのデバッグとシングルステップ実行に使用でき、開発者がコードエラーを見つけて解決するのに役立ちます。

2. プログラムの書き込み：JTAGインターフェースを通じて、プログラムやデバッグファームウェアをESP32-S3チップにロードできます。

3. CPU状態の読み取り：JTAGインターフェースは、ESP32-S3チップのCPU状態、メモリ内容、レジスタ値を読み取るために使用でき、デバッグとテストに役立ちます。

JTAGインターフェースの使用には専用のハードウェアデバイスとソフトウェアツール、および対応する専門知識とスキルが必要であることに注意してください。したがって、一般的に、JTAGインターフェースは開発、デバッグ、テストなどの特定のシナリオでのみ使用されます。一般ユーザーにとって、ESP32-S3の他の機能とインターフェースを使用することで十分です。

JTAGデバッグについてさらに詳しく知りたい場合は、公式の[ESP32ドキュメント](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/jtag-debugging/index.html)をお読みください。

## トラブルシューティング

### Q1: シリアルモニターを使用する際に以下のエラーが発生するのはなぜですか？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/25.png" style={{width:600, height:'auto'}}/></div>

A: このタイプのエラーが発生した場合は、**USB CDC On Boot**スイッチをオンにしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/28.png" style={{width:600, height:'auto'}}/></div>

この問題は、Arduino IDE 2.xでシリアル出力が空になることとしても現れる可能性があり、同じ理由によって引き起こされる可能性があります。

### Q2: ESP-32はどの機能をサポートしているか、またはサポートしていないか？

A: 以下は、[ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/libraries.html)によって提供されるサポート/非サポート機能のリストです。2023年4月10日現在。

| 周辺機器        | ESP32         | ESP32-S2      | ESP32-C3      | ESP32-S3      | コメント               |
|---------------|---------------|---------------|---------------|---------------|------------------------|
| ADC           | Yes           | Yes           | Yes           | Yes           |                        |
| Bluetooth     | Yes           | Not Supported | Not Supported | Not Supported | Bluetooth Classic      |
| BLE           | Yes           | Not Supported | Yes           | Yes           |                        |
| DAC           | Yes           | Yes           | Not Supported | Not Supported |                        |
| Ethernet      | Yes           | Not Supported | Not Supported | Not Supported | (*)                    |
| GPIO          | Yes           | Yes           | Yes           | Yes           |                        |
| Hall Sensor   | Yes           | Not Supported | Not Supported | Not Supported |                        |
| I2C           | Yes           | Yes           | Yes           | Yes           |                        |
| I2S           | Yes           | Yes           | Yes           | Yes           |                        |
| LEDC          | Yes           | Yes           | Yes           | Yes           |                        |
| Motor PWM     | No            | Not Supported | Not Supported | Not Supported |                        |
| Pulse Counter | No            | No            | No            | No            |                        |
| RMT           | Yes           | Yes           | Yes           | Yes           |                        |
| SDIO          | No            | No            | No            | No            |                        |
| SDMMC         | Yes           | Not Supported | Not Supported | Yes           |                        |
| Timer         | Yes           | Yes           | Yes           | Yes           |                        |
| Temp. Sensor  | Not Supported | Yes           | Yes           | Yes           |                        |
| Touch         | Yes           | Yes           | Not Supported | Yes           |                        |
| TWAI          | No            | No            | No            | No            |                        |
| UART          | Yes           | Yes           | Yes           | Yes           |                        |
| USB           | Not Supported | Yes           | Yes           | Yes           | ESP32-C3 only CDC/JTAG |
| Wi-Fi         | Yes           | Yes           | Yes           | Yes           |                        |

### Q3: シリアルモニターでチップのデバッグメッセージが常に表示されるのはなぜですか？

A: Arduino IDEで以下の方法を使用してデバッグメッセージの出力をオフにすることができます：**Tool -> Core Debug Level: -> None**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/90.png" style={{width:500, height:'auto'}}/></div>

ただし、この方法は常に機能するとは限りません。実際、ESP32-S3のデバッグ情報は常にシリアルポートから出力され、これは変更できません。申し訳ありませんが、これは正常に動作していることをお知らせしたいという熱意の表れです。

### Q4: J3の接続を切断したのに、なぜD8とD9ピンがまだハイレベルになるのですか？microSDカードへの書き込みがまだ成功する可能性があるのはなぜですか？

SDカードの設計において、正しい回路にはmicroSDカードが正常に動作するためのプルアップ抵抗が必要です。J3を切断した後でもピンレベルとカードの読み書きが正常である場合、これは単に幸運な状況である可能性があり、この場合のカードの読み書きは書き込んだデータを失う問題を引き起こす可能性があるため、推奨しません。一方、D8とD9ピンは、J3を切断した後にローレベルを書き込むことでレベルを変更できます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
