---
description: Seeed Studio XIAO ESP32-S3 を使ったピン多重化。
title: Seeed Studio XIAO ESP32-S3 (Sense) によるピン多重化
keywords:
  - esp32s3
  - xiao
  - pin multiple
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_pin_multiplexing
sku: 113991114, 113991115
type: project
last_update:
  date: 4/27/2026
  author: Citric
createdAt: '2022-11-15'
updatedAt: '2025-10-09'
url: https://wiki.seeedstudio.com/ja/xiao_esp32s3_pin_multiplexing/
---


# Seeed Studio XIAO ESP32-S3 (Sense) によるピン多重化

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32-S3</th>
     <th>Seeed Studio XIAO ESP32-S3 Sense</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Seeed Studio XIAO ESP32-S3 は、多様な周辺インターフェースと GPIO ピンを備えた、強力で汎用性の高い開発ボードです。これらのピンは、他のデバイスとの通信、アナログセンサの読み取り、LED の制御など、さまざまな用途に使用できます。本チュートリアルでは、XIAO ESP32-S3 と、その関連ボードである XIAO ESP32-S3 Sense のピン配置を確認し、これらのピンをさまざまな目的で使用する方法を学びます。具体的には、1x UART、1x IIC、1x IIS、1x SPI、11x GPIO（PWM）、9x ADC、1x ユーザー LED、1x 充電 LED、1x リセットボタン、1x ブートボタン、そして XIAO ESP32-S3 Sense では 1x B2B コネクタ（追加の GPIO が 2 本）について扱います。チュートリアルを終える頃には、XIAO ESP32-S3 のピン配置を十分に理解し、プロジェクトで効果的に活用できるようになっているでしょう。

## 入門ガイド

### ピン配置の概要

始める前に、次の回路図を使って XIAO ESP32-S3 が持つすべてのピンとその機能を確認しましょう。

<table align="center">
 <tr>
     <th>XIAO ESP32-S3/XIAO ESP32-S3 Sense 表面インジケータ図</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32-S3/XIAO ESP32-S3 Sense 裏面インジケータ図</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32-S3/XIAO ESP32-S3 Sense ピン一覧</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

:::caution
XIAO ESP32-S3 は GPIO41 と GPIO42 をピン A11 および A12 に割り当てていますが、ESP32-S3 チップの仕様上、A11 および A12 ピンは ADC 機能をサポートしていません。必ず区別して使用してください。
:::

- 5V - これは USB ポートからの 5V 出力です。電圧入力として使用することもできますが、外部電源とこのピンの間には、アノードをバッテリー側、カソードを 5V ピン側にしたダイオード（ショットキー、信号用、電力用のいずれか）を必ず挿入してください。

- 3V3 - これはオンボードレギュレータからの安定化出力です。700mA まで取り出すことができます。

- GND - 電源／データ／信号のグラウンド

以下は、XIAO ESP32-S3 の機能ピンの概要です。

<div class="table-center">
 <table align="center">
  <tr>
   <th>ピン番号</th>
   <th>機能説明</th>
  </tr>
    <tr>
   <th colspan="2">-- PDM マイクロフォン用ピン --</th>
  </tr>
  <tr>
   <td align="center">GPIO 41</td>
   <td align="center">PDM マイクロフォン DATA</td>
  </tr>
  <tr>
   <td align="center">GPIO 42</td>
   <td align="center">PDM マイクロフォン CLK</td>
  </tr>
    <tr>
   <th colspan="2">-- MicroSD カード SPI ピン --</th>
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
   <th colspan="2">-- カメラ用ピン --</th>
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
   <td align="center">カメラ SCL</td>
  </tr>
    <tr>
   <td align="center">GPIO 40</td>
   <td align="center">カメラ SDA</td>
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

### ピンヘッダのはんだ付け

本チュートリアルに従って各ピンの機能を使用するには、あらかじめピンヘッダをはんだ付けしておくことをおすすめします。

XIAO ESP32-S3 は非常に小型なため、ヘッダをはんだ付けする際は、異なるピン同士をブリッジさせないこと、シールドや他の部品に半田が付着しないことに注意してください。そうしないと、XIAO が短絡したり正常に動作しなくなる可能性があり、その結果生じた問題についてはユーザーの自己責任となります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/4.jpg" style={{width:400, height:'auto'}}/></div>

Sense バージョンを選んだ方、おめでとうございます！追加で 2 本の GPIO ピンを利用できます。これらを使用する予定がある場合は、別途ヘッダをはんだ付けしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/18.jpg" style={{width:400, height:'auto'}}/></div>

## デジタル

XIAO ESP32-S3 には最大 11 本の通常 GPIO ピンと 9 本のアナログピンがあります。この例では、XIAO ESP32-S3、XIAO 拡張ボード、およびリレーを使用して、異なるデジタルピンを読み取りおよび書き込みに使用する方法をデモします。

### ハードウェアの準備

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32-S3</th>
     <th>Seeed Studio XIAO ESP32-S3 Sense</th>
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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

XIAO ESP32-S3 または Sense を拡張ボードに装着し、Grove ケーブルを使ってリレーを拡張ボードの **A0/D0** インターフェースに接続してください。最後に、USB-C ケーブルで XIAO をコンピュータに接続します。

### ソフトウェア実装

この例では、XIAO 拡張ボードに接続されたボタンを使って、リレーのオン／オフ状態を制御します。ボタンが押されるとリレーがオンになり、ボタンを離すとリレーがオフになります。

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

すべてが順調に進めば、プログラムを書き込んだ後に次のような動作が確認できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/19.gif" style={{width:500, height:'auto'}}/></div>

:::tip
デジタル機能を使用したい場合は、ピン番号の接頭辞として文字「D」を使用する必要があります（例：D4、D5）。逆に、ピンのアナログ機能を使用したい場合は、ピン番号の接頭辞として文字「A」を使用する必要があります（例：A4、A5）。
:::

### Sense バージョンの場合

XIAO ESP32-S3 Sense では、XIAO 上の 11 本のデジタルピンに加えて、拡張ボード上の 2 本のピン **D11** と **D12** も使用できます。これらを使用したい場合は、以下の手順に従ってください。

#### ステップ 1. J1 と J2 間の接続を切断する

ESP32-S3 のピン数が限られているため、Sense 拡張ボード上の D11 と D12 はデフォルトでマイク用に予約されています。もし D11 と D12 を他の用途に使用する必要がある場合は、Sense 拡張ボードを裏返し、2 つのパッドの間の白線に沿って、鋭利なナイフを使って J1 と J2 間の接続を切断してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/20.png" style={{width:400, height:'auto'}}/></div>

:::caution
写真からも分かるように、XIAO のスペース制限により、多くの配線レイアウトが非常にコンパクトになっています。そのため、J1 と J2 間の接続を切断する際は、白線の外側を切ってしまわないように十分注意してください。そうしないと、開発ボードが故障する可能性があります！

XIAO ESP32-S3 では GPIO41 と GPIO42 をピン A11 と A12 に割り当てていますが、ESP32-S3 チップの特性上、ピン A11 と A12 は ADC 機能をサポートしていません。必ず両者を区別して使用してください。
:::

:::tip
J1 と J2 間の接続を切断すると、拡張ボード上のマイク機能は使用できなくなります。マイク機能を使用する必要がある場合、D11 と D12 ピンを同時に使用することはできません。この場合、J1 と J2 の 2 つのパッドをそれぞれはんだ付けすることで、マイク機能を復元できます。下図のように、赤色と緑色の領域をそれぞれはんだ付けしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/21.png" style={{width:400, height:'auto'}}/></div>
:::

実際の回路図については、次の図を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/92.png" style={{width:600, height:'auto'}}/></div>

#### ステップ 2. ハードウェアの準備

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32-S3 Sense</th>
        <th>Grove - Relay</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:200, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### ステップ 3. ソフトウェア実装

次のプログラムは、500 ミリ秒ごとにリレーを切り替えます。リレーの SIG ピンを拡張ボードの GPIO42 インターフェースに接続してください。

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

上記の方法は、[Digital as PWM](#digital-as-pwm) セクションおよび [Analog](#analog) セクションにも適用できます。使用したい拡張ボード上のピン番号を変更するだけで構いません。ここではこれ以上繰り返しません。

:::caution
XIAO ESP32-S3 Sense 上の追加 2 本のピン D11 と D12 については、まだピンのマクロ定義を行っていません。つまり、現時点では D11/A11 や D12/A12 を使ってこれら 2 本のピンを制御することはできませんが、GPIO 番号である GPIO42 と GPIO41 をそれぞれ使用することで、これら 2 本のピンを制御できます。これら 2 本のピンに対するマクロ定義はできるだけ早く提出する予定であり、提出が完了すれば、D/A 形式のピン定義を使用できるようになります。
:::

## デジタルを PWM として使用

XIAO ESP32-S3 上のすべての GPIO ピンは PWM 出力をサポートしています。そのため、任意のピンを使用して PWM を出力し、ライトの明るさを調整したり、サーボを制御したり、その他の機能を実現したりできます。

### ハードウェアの準備

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32-S3</th>
     <th>Seeed Studio XIAO ESP32-S3 Sense</th>
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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

XIAO ESP32-S3 または Sense を拡張ボードに取り付け、Grove ケーブルを使用して Variable Color LED を拡張ボードの A0/D0 インターフェースに接続してください。最後に、USB-C ケーブルで XIAO をコンピュータに接続します。

### ソフトウェア実装

この例では、PWM 出力を使用してライトの明るさを制御する方法を説明します。

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

プログラムが正常に動作すると、次のような動作結果が確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/22.gif" style={{width:500, height:'auto'}}/></div>

## アナログ

XIAO ESP32-S3 では、内蔵 11 本の GPIO ピンのうち、シリアル通信に使用される D6 と D7 を除く残り 9 本のピンがアナログ機能をサポートしています。これらのアナログ機能を持つ GPIO ピンを使用して、酸素センサや照度センサなど、アナログ信号を出力するセンサから値を読み取ることができます。

:::caution
XIAO ESP32-S3 では GPIO41 と GPIO42 をピン A11 と A12 に割り当てていますが、ESP32-S3 チップの特性上、ピン A11 と A12 は ADC 機能をサポートしていません。必ず両者を区別して使用してください。
:::

### ハードウェアの準備

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32-S3</th>
     <th>Seeed Studio XIAO ESP32-S3 Sense</th>
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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Oxygen-Sensor-ME2-O2-f20.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

XIAO ESP32-S3 または Sense を拡張ボードに取り付け、次に Grove ケーブルを使用して拡張ボード上の A0/D0 インターフェースに酸素センサを接続してください。最後に、USB-C ケーブルで XIAO をコンピュータに接続します。

### ソフトウェア実装

次のプログラムでは、`analogRead()` メソッドを使用してセンサのアナログ値を読み取り、Serial インターフェースを使用してセンサの結果を出力します。

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
ピンのアナログ機能を使用したい場合は、ピン番号の前に A4、A5 のように文字「A」を付けてください。逆に、デジタル機能を使用したい場合は、D4、D5 のようにピン番号の前に文字「D」を付ける必要があります。
:::

プログラムを書き込んだ後、Arduino IDE でシリアルモニタを開き、ボーレートを 9600 に設定します。酸素センサのウォームアップを待つと、正確な酸素濃度の値が確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/23.png" style={{width:600, height:'auto'}}/></div>

## シリアル

Arduino IDE を使用する際、シリアル通信は多くのプロジェクトで不可欠な要素です。Arduino IDE で Serial を使用するには、まずシリアルモニタウィンドウを開く必要があります。これはツールバーの **Serial Monitor** アイコンをクリックするか、ショートカットキー **Ctrl+Shift+M** を押すことで行えます。

### 一般的な使い方

よく使用される Serial 関数には次のようなものがあります：

- `Serial.begin()` -- 指定したボーレートで通信を初期化します。
- `Serial.print()` -- 読み取り可能な形式でデータをシリアルポートに送信します。
- `Serial.write()` -- バイナリデータをシリアルポートに送信します。
- `Serial.available()` -- シリアルポートから読み取ることができるデータがあるかどうかを確認します。
- `Serial.read()` -- シリアルポートから 1 バイトのデータを読み取ります。
- `Serial.flush()` -- 送信中のシリアルデータの送信が完了するまで待機します。

これらの Serial 関数を使用することで、Arduino ボードとコンピュータの間でデータを送受信でき、インタラクティブなプロジェクトを作成する多くの可能性が広がります。

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

このコードでは、まず `setup()` 関数内で `Serial.begin()` 関数を使用して、ボーレート **9600** でシリアル通信を初期化します。次に、`loop()` 関数内で `Serial.print()` 関数を使用して "Hello World!" をシリアルポートに送信します。

また、`Serial.available()` 関数を使用して、シリアルポートから読み取ることができるデータがあるかどうかを確認します。もしあれば、`Serial.read()` 関数を使用して受信したバイトを読み取り、`incomingByte` という変数に保存します。その後、`Serial.print()` と `Serial.println()` 関数を使用して、「I received: 」に続けて `incomingByte` の値をシリアルモニタに出力します。

最後に、`delay()` 関数を追加して、ループを繰り返す前に 1 秒待機します。このコードは、Arduino IDE でシリアルポートを介してデータを送受信する際によく使用される Serial 関数の使い方を示しています。

プログラムを書き込んだ後、Arduino IDE でシリアルモニタを開き、ボーレートを 9600 に設定します。シリアルモニタには、毎秒 'Hello World!' を出力する次のメッセージが表示されます。また、シリアルモニタを通じて XIAO ESP32-S3 に任意の内容を送信することができ、XIAO は送信した内容の各バイトを出力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/24.png" style={{width:600, height:'auto'}}/></div>

### Serial1 の使用方法

上記の XIAO ESP32-S3 のピン図における各種パラメータから、TX ピンと RX ピンがあることが分かります。
これは通常のシリアル通信とは異なりますが、いくつかのパラメータを追加する必要がある点を除けば、使い方は非常によく似ています。
そこで次に、チップから引き出されているピンを使用してシリアル通信を行います。

含める必要があるコア関数：

- `Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);` -- Serial1 を有効化します。関数プロトタイプは `<Serial.Type>.begin(unsigned long baud, uint32_t config, int8_t rxPin, int8_t txPin);` です。
  - `baud`  : ボーレート
  - `config`: 設定ビット
  - `rxPin` : 受信ピン
  - `txPin` : 送信ピン

デジタルピンポートで定義する場合は、ここは `#define RX_PIN D7`、`#define TX_PIN D6` とする必要があり、GPIO ピンポートで定義する場合は、`#define RX_PIN 44`、`#define TX_PIN 43` とする必要があることに注意してください。具体的なパラメータについては、各種 XIAO シリーズのピン図を参照してください。

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

プログラムを書き込んだ後、Arduino IDE でシリアルモニタを開き、ボーレートを 115200 に設定します。その後、シリアルモニタの Serial を通じて XIAO ESP32-S3 に任意の内容を送信することができ、XIAO は送信した内容の各バイトを出力します。ここでは、私が入力した内容は "Hello Everyone" であり、結果のチャートは次のとおりです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/114.png" style={{width:600, height:'auto'}}/></div>

### ソフトウェアシリアルの使用方法

ハードウェアシリアルポートが 1 つでは足りないと感じる場合、ESP32 のソフトウェアシリアル機能を使用して、いくつかのピンをソフトウェアシリアルとして設定し、シリアルポートの数を拡張することもできます。

もちろん、ESP32 固有の機能であるハードウェアシリアルポートのマッピングという 2 番目の方法を使用することをお勧めします。詳しくは、[Other Hardware Serial](#Other-Hardware-Serial) セクションを参照してください。

ESP32 シリーズチップ製品では、ソフトシリアルポートを使用する必要がある場合、サードパーティ製のソフトシリアルポートライブラリを別途ダウンロードする必要があります。ここでは参考情報を提供します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/plerup/espsoftwareserial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::tip
現在、EspSoftwareSerial ライブラリのバージョン 7.0.0 を推奨しています。その他のバージョンでは、ソフトウェアシリアルポートが正しく動作しないさまざまな問題が発生する可能性があります。
:::

zip 形式のライブラリをダウンロードしたら、Arduino IDE を開き、**Sketch > Include Library > Add .ZIP Library** をクリックします。先ほどダウンロードした zip ファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに **Library added to your libraries** と表示されます。これはライブラリが正常にインストールされたことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

次に、ESP32 のソフトウェアシリアルポートを使用できるようになります。

:::caution
他のソフトウェアシリアルポートライブラリがコンピュータにインストールされている場合、競合が発生する可能性が高いので、自分で確認してください。
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

このプログラムでは、まず `SoftwareSerial.h` ライブラリをインクルードしてソフトウェアシリアルを使用できるようにします。次に、2 番ピンと 3 番ピンをそれぞれ RX と TX として使用し、mySerial という名前の新しい SoftwareSerial オブジェクトを作成します。

`setup()` 関数では、ハードウェアシリアル（`Serial.begin()`）とソフトウェアシリアル（`mySerial.begin()`）の両方を初期化します。

`loop()` 関数では、`mySerial.available()` 関数を使用して、ソフトウェアシリアルから読み取ることができるデータがあるかどうかを確認します。データがある場合は、`mySerial.read()` 関数を使用して受信したバイトを読み取り、data という変数に保存します。その後、`Serial.print()` と `Serial.println()` 関数を使用して、「Received data: 」という文字列に続けて data の値をハードウェアシリアルに出力します。

また、`mySerial.print()` 関数を使用して「Hello World!」をソフトウェアシリアルに書き込みます。これにより、XIAO からソフトウェアシリアルポートに接続されたデバイスへデータが送信されます。

最後に、`delay()` 関数を追加して、ループを繰り返す前に 1 秒待機します。

:::note
ESP32-S3 でソフトウェアシリアルを使用するには、他の用途に使用されていない適切な RX および TX ピンを選択する必要があることに注意してください。この例では、RX と TX にそれぞれ 9 番ピンと 10 番ピンを使用しています。
:::

### その他のハードウェアシリアル

ESP32S3 には合計 3 つの UART 通信インターフェースがあり、0 から 2 まで番号が振られ、それぞれ UART0、UART1、UART2 です。これら 3 つのシリアルポートのピンは固定されておらず、任意の IO ポートに再マッピングできます。

デフォルトでは、**UART0** は USB シリアル通信に使用されるため、使用しません。ハードウェアシリアルのマッピングをカスタマイズすることで、他のハードウェアシリアルポートを使用できます。

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

以下では、販売中の [60GHz mmWave Sensor - Human Resting Breathing and Heartbeat Module](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html) を例に、D9 および D10 のハードウェアシリアルポートと USB シリアルポートの使用方法を説明します。

次のものを準備してください。

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32-S3</th>
     <th>Seeed Studio XIAO ESP32-S3 Sense</th>
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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

センサーライブラリをコンピュータにダウンロードし、Arduino IDE に追加します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

ここでは、心拍および呼吸データ情報を解析したいので、次のようにプログラムを書き換えることができます。

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

プログラムを書き込んだら、シリアルモニタを開き、ボーレートを 115200 に設定してください。

すべてが正常であれば、シリアルモニタ上にデータメッセージが表示されます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/2.png" alt="pir" width="800" height="auto"/></div>

## IIC

XIAO ESP32-S3 には I2C インターフェースが搭載されており、多くのセンサのデータ送受信や解析、および一部の OLED 画面の使用に利用できます。

### ハードウェアの準備

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32-S3</th>
     <th>Seeed Studio XIAO ESP32-S3 Sense</th>
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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

XIAO 拡張ボード上の OLED ディスプレイは I2C プロトコルを使用しており、ボード上の I2C 回路を介して XIAO の I2C インターフェースに接続されています。したがって、XIAO を拡張ボードに直接挿し込み、プログラムを書き込むことで画面に内容を表示できます。

### ソフトウェア実装

この例では、Seeed Studio Expansion Base for XIAO ESP32-S3 上の OLED ディスプレイの使用方法を紹介します。

#### ステップ 1. Seeed Studio XIAO ESP32-S3 を拡張ボードに取り付け、Type-C ケーブルを接続します

#### ステップ 2. u8g2 ライブラリをインストールします

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

#### ステップ 3. コードをコピーして Arduino IDE に貼り付け、書き込みます

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

コードの最初の数行では、Arduino.h、U8x8lib.h、Wire.h などの必要なライブラリをインクルードしています。U8x8lib.h ライブラリは OLED ディスプレイを制御するための関数を提供し、Wire.h ライブラリは I2C 通信のための関数を提供します。

`setup()` 関数では、`u8x8.begin()` 関数を使用して OLED ディスプレイを初期化します。また、`u8x8.setFlipMode()` 関数を使用してディスプレイのフリップモードを設定し、画面を 180 度回転させます。

`loop()` 関数では、`u8x8.setFont()` 関数でフォントを設定し、`u8x8.setCursor()` 関数でディスプレイ上のカーソル位置を指定します。最後に、`u8x8.print()` 関数を使用して、OLED ディスプレイに文字列 "Hello World!" を表示します。

XIAO ESP32-S3 にプログラムを書き込むと、拡張ボード上の OLED ディスプレイ画面に内容が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/29.jpg" style={{width:600, height:'auto'}}/></div>

## SPI

ESP32-S3 チップには複数のペリフェラルが統合されており、その中には SPI インターフェースも含まれます。これを使用して、フラッシュメモリ、ディスプレイ、センサなどの外部 SPI デバイスを接続できます。ESP32-S3 は高速 SPI 転送モードもサポートしており、最大 80 MHz の SPI 転送レートを実現でき、多くの SPI デバイスのデータ転送ニーズを満たします。

### ハードウェアの準備

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32-S3</th>
     <th>Seeed Studio XIAO ESP32-S3 Sense</th>
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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

上記のようにハードウェアを準備したら、ジャンパワイヤを使用して XIAO と OLED の SPI インターフェースを接続します。配線方法については、次の図を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/30.jpg" style={{width:800, height:'auto'}}/></div>

### ソフトウェア実装

次に、以下のプログラムを例として、SPI インターフェースを使用して OLED 画面表示を制御する方法を紹介します。

u8g2 ライブラリをインストールします。

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

`setup()` 関数では、チップセレクト（cs）、データ/コマンド（dc）、リセットに使用するピンを指定する適切なコンストラクタ引数で `U8G2_SH1107_128X128_1_4W_HW_SPI` クラスをインスタンス化します。その後、`u8g2.begin()` 関数を呼び出してディスプレイを初期化します。

`loop()` 関数内では、`u8g2.firstPage()`、`u8g2.setFont()`、`u8g2.drawStr()` 関数を使用して、ディスプレイが新しい内容で更新されます。`u8g2.firstPage()` 関数は書き込み用にディスプレイバッファを設定し、`u8g2.nextPage()` が更新された内容を表示します。do-while ループにより、プログラムが停止されるまで内容が継続的に表示されることが保証されます。

全体として、このコードは U8g2 ライブラリを使用して OLED ディスプレイを制御し、その上にテキストを表示する方法を示しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/31.jpg" style={{width:600, height:'auto'}}/></div>

### Sense 版の場合

Sense 版を購入し、拡張ボードに接続する必要がある場合は、拡張ボード上の SD カードが SPI ピンを占有し、その結果 SPI ピンが使用できなくなる可能性があることに注意してください。

Sense 拡張ボードに用意されているはんだパッドインターフェースにより、ユーザーは必要な機能を選択できます。その中で、**J3** はんだパッドの機能は、SPI または SD カード機能を有効にすることです。

<table align="center">
 <tr>
     <th>SPI ピンを使用したい場合 / 拡張ボードの SD カードを無効にしたい場合</th>
     <th>拡張ボード上の SD カードを有効にしたい場合 / SPI ピンを無効にしたい場合</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.JPG" style={{width:300, height:'auto'}}/></div></td>
 </tr>
  <tr>
    <td>白い細い線に沿ってカットし、はんだパッドの接続を切断します。</td>
    <td>2 つのはんだパッドを一緒にはんだ付けします。</td>
  </tr>
</table>

:::caution
写真からも分かるように、XIAO のスペース制限により、多くの配線レイアウトが非常にコンパクトになっています。そのため、J3 の接続をカットする際は、白線の外側を切らないように十分注意してください。そうしないと、開発ボードが故障する可能性があります！
:::

:::caution
分かりやすさのために、上では J3 を SD カード機能をオン／オフするインターフェースとして簡単に説明しましたが、実際にはこれは正確ではありません。実際の回路接続は以下のとおりです。J3 を切断することは、実際には R4 から R6 までのプルアップ抵抗を切り離すことであり、これが SD カード機能が無効になり、同時に SPI 機能が正常に戻る主な理由です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/93.png" style={{width:800, height:'auto'}}/></div>
:::

## タッチピン

上記で説明した一般的な機能ピンに加えて、XIAO ESP32-S3 / XIAO ESP32-S3 Sense には、A0～A5、A8～A10 の 9 本のタッチ検出ピンもあります。

ピンのアナログ値を読み取ることで、そのピンがタッチされたかどうかを確認でき、とても便利です。次のプログラムは、ピン A5 がタッチされたかどうかを検出するためのものです。

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

プログラムを書き込んだ後、シリアルモニタを開き、ボーレートを 9600 に設定します。その後、ピン A5 に触れると、タッチ前の値と比べてアナログ読み取り値が大幅に大きくなることが分かります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/32.gif" style={{width:600, height:'auto'}}/></div>

## USB ピン

ESP32-S3 は Wi-Fi と Bluetooth 機能を統合したマイクロコントローラであり、その D+ と D- ピンは USB 通信をサポートするために使用されます。具体的には、これら 2 本のピンは USB 2.0 デバイスとホスト間での高速データ伝送に使用される差動信号線です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.png" style={{width:200, height:'auto'}}/></div>

D+ ピンはデータ送信に使用される正極側のラインであり、D- ピンはデータ送信に使用される負極側のラインです。USB デバイスがホストに接続されると、ホストはこれら 2 本のピンの電圧変化を検出して、デバイスの接続状態と伝送速度を判断します。データ伝送中、D+ と D- ピンはデータビットと同期信号を交互に送信し、信頼性の高いデータ伝送を実現します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/34.png" style={{width:800, height:'auto'}}/></div>

## JTAG ピン

ESP32-S3 の JTAG（Joint Test Action Group）インターフェースは、開発・デバッグ・テストの際に、非常に低レベルのハードウェアデバッグやプログラミングに使用できるデバッグおよびテスト用インターフェースです。JTAG インターフェースには、クロックライン、データ入力ライン、データ出力ライン、テストモード選択ライン、テストモードクロックラインなど、一連の標準的な信号線が含まれます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/35.png" style={{width:200, height:'auto'}}/></div>

ESP32-S3 の JTAG インターフェースは、次の目的で使用できます。

1. デバッグ：JTAG インターフェースを使用して、ESP32-S3 チップ内でのデバッグやステップ実行を行い、開発者がコードのエラーを見つけて解決するのに役立てることができます。

2. プログラムの書き込み：JTAG インターフェースを介して、プログラムやデバッグ用ファームウェアを ESP32-S3 チップに書き込むことができます。

3. CPU 状態の読み取り：JTAG インターフェースを使用して、ESP32-S3 チップの CPU 状態、メモリ内容、レジスタ値を読み取り、デバッグやテストに利用できます。

JTAG インターフェースを使用するには、専用のハードウェアデバイスとソフトウェアツール、そしてそれに対応する専門的な知識とスキルが必要であることに注意してください。したがって、一般的には、JTAG インターフェースは開発・デバッグ・テストなどの特定のシナリオでのみ使用されます。一般ユーザーにとっては、ESP32-S3 の他の機能やインターフェースを使用するだけで十分です。

JTAG デバッグについてさらに知りたい場合は、公式の [ESP32 ドキュメント](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/jtag-debugging/index.html) を参照してください。

## トラブルシューティング

### Q1: シリアルモニタを使用しているときに、なぜ次のようなエラーが発生するのですか？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/25.png" style={{width:600, height:'auto'}}/></div>

A: この種のエラーが発生した場合は、**USB CDC On Boot** スイッチをオンにしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/28.png" style={{width:600, height:'auto'}}/></div>

この問題は、Arduino IDE 2.x でシリアル出力が空になるという形でも現れることがあり、その原因も同じである可能性があります。

### Q2: ESP-32 はどの機能をサポート／非サポートですか？

A: 以下は、[ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/libraries.html) によって提供されている、サポートされている機能／サポートされていない機能の一覧です。2023 年 4 月 10 日時点。

| ペリフェラル    | ESP32         | ESP32-S2      | ESP32-C3      | ESP32-S3      | コメント               |
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

### Q3: なぜシリアルモニタに常にチップのデバッグメッセージが表示されるのですか？

A: Arduino IDE で **Tool -> Core Debug Level: -> None** と設定し、デバッグメッセージの出力をオフにしてみてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/90.png" style={{width:500, height:'auto'}}/></div>

しかし、この方法は常に有効というわけではありません。実際には、ESP32-S3 のデバッグ情報は常にシリアルポートから出力され、これは変更できません。どうかご容赦ください。正しく動作していることを、どうしてもあなたに伝えたがっているだけなのです。

### Q4: なぜ J3 の接続をカットしたのに、テストすると D8 と D9 ピンが依然として High になるのですか？microSD カードへの書き込みも、まだ成功する可能性があるのですか？

SD カードの設計上、microSD カードを正常に動作させるためには、正しい回路にはプルアップ抵抗が必要です。もし J3 をカットした後でも、ピンレベルやカードの読み書きが依然として正常であることに気づいた場合、これは単に運が良い状況に過ぎない可能性があり、この状態でカードの読み書きを行うことは推奨しません。書き込んだデータが失われる問題を引き起こす可能性があります。一方で、J3 をカットした後であれば、D8 と D9 ピンは Low レベルを書き込むことでレベルを変更することができます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
