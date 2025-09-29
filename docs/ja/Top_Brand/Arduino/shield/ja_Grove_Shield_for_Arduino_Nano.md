---
description: Grove_Shield_for_Arduino_Nano
title: Arduino Nano用Groveシールド

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Shield_for_Arduino_Nano
last_update:
  date: 05/15/2025
  author: Eico 

no_comments: false # for Disqus

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/Grove-Shoeld-for-Arduino-Nano-front.png" alt="pir" width={600} height="auto" /></p>
Arduino Nano用Groveシールドは、Arduino NanoおよびSeeeduino Nanoと簡単に接続する方法を提供します。このシールドは、ブレッドボードやジャンパーワイヤーを不要にし、マザーボードのピンを引き出して8つのGroveコネクタに拡張します。このシールドは、3つのGroveデジタルコネクタ、3つのGroveアナログコネクタ、1つのGrove I2Cコネクタ、1つのGrove UARTコネクタを含む8つのGroveコネクタに拡張します。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Shield-for-Arduino-Nano-p-4112.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 仕様

<table align="center">
  <tbody>
  <tr>
    <td><h3>パラメータ</h3></td>
    <td><h3>値/範囲</h3></td>
  </tr>
  <tr>
    <td><h4>動作温度</h4></td>
    <td><h4>-25℃ ～ +85℃</h4></td>
  </tr>
  <tr>
    <td><h4>アナログポート</h4></td>
    <td><h4>3</h4></td>
  </tr>  
  <tr>
    <td><h4>デジタルポート</h4></td>
    <td><h4>3</h4></td>
  </tr>
  <tr>
    <td><h4>UARTポート</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>I2Cポート</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>サイズ</h4></td>
    <td><h4>45mm x 40mm</h4></td>
  </tr>
  </tbody></table>

Grove Shield V1.0からV1.1は、Arduino Nano 33シリーズの開発ボードをサポートします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/change.png" alt="pir" width={600} height="auto" /></p>

**V1.1変更点**: VCC 3.3V/5Vスイッチを追加

現在、Grove Shieldはバージョンv1.3にアップグレードされています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/UUXvr7pmnK.png" alt="pir" width={350} height="auto" /></p>

**V1.3変更点**: Grove ShieldのバージョンV1.3では、両側のRSTおよびRSEピンを接続する配線を切断しました。

## 対応ボード

V1.0対応リスト:

- [Seeeduino Nano](https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html)
- Arduino Nano

V1.1対応リスト:

- Arduino Nano
- Seeeduino Nano
- Arduino Nano Every
- Arduino Nano 33 IoT*
- Arduino Nano 33 BLE*
- Arduino Nano 33 BLE Sense*

V1.3対応リスト:

- Arduino Nano
- Seeeduino Nano
- Arduino Nano Every
- Arduino Nano 33 IoT*
- Arduino Nano 33 BLE*
- Arduino Nano 33 BLE Sense*
- Arduino ESP32 Nano

:::caution
Arduino 33シリーズボードを使用するには、VCC電源を3.3Vに切り替えてください。VCC電源を5Vに切り替えると、開発ボードが損傷する可能性があります！
:::

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/Grove-Shoeld-for-Arduino-Nano-back-rr.jpg" alt="pir" width={600} height="auto" /></p>

- **1-アナログポート**: A0、A2、A6を含む3つのアナログポート。
- **2-デジタルポート**: D2、D4、D6を含む3つのデジタルポート。
- **3-UARTポート**: 1つのUARTポート。
- **4-I2Cポート**: 1つのI2Cポート。

## はじめに

### ハードウェア

- ステップ 1. 以下のアイテムを準備してください：

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino Nano</h3></td>
    <td><h3>Grove Shield for Arduino Nano</h3></td>
    <td><h3>Grove - Buzzer</h3></td>
    <td><h3>Grove - Button</h3></td>
  </tr>
  <tr>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/seeeduino-Nano-front.png" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/Grove-Shoeld-for-Arduino-Nano-wiki.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/button_s.jpg" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html" target="_blank"><span>今すぐ購入</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Grove-Shield-for-Arduino-Nano-p-4112.html" target="_blank"><span>今すぐ購入</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Grove-Buzzer-p-768.html" target="_blank"><span>今すぐ購入</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/category/Grove-Button-p-766.html" target="_blank"><span>今すぐ購入</span></a></h4></td>
  </tr>  
  </tbody></table>

- ステップ 2. Grove - Buzzer を Grove Shield のポート D4 に接続します。
- ステップ 3. Grove - Button を Grove Shield のポート D2 に接続します。
- ステップ 4. Grove Shield for Arduino Nano を Seeeduino Nano に差し込みます。
- ステップ 5. USB ケーブルを使用して Seeeduino を PC に接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/hardwareconnect.jpg" alt="pir" width={600} height="auto" /></p>

### ソフトウェア

- ステップ 1. 以下のコードを Arduino IDE にコピーし、Seeeduino にアップロードしてください。

```cpp
const int button = 2;       // ボタンを接続
const int buzzer = 4;       // ブザーを接続
void setup()
{
    pinMode(button, INPUT); // ボタンを入力デバイスとして設定
    pinMode(buzzer, OUTPUT);   // LEDを出力デバイスとして設定
}
void loop()
{
    int btn = digitalRead(button); // ボタンの状態を読み取る
    digitalWrite(buzzer, btn);
    delay(10);
}
```

- ステップ 2. ボタンを押すと、ブザーが鳴ります。

## FAQ

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano v1.0PCB&SCH.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle]** [Grove shield for Arduino Nano PCB&SCH](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano v1.0PCB&SCH.zip)
- **[PDF]** [Grove shield for Arduino Nano PCB&SCH](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano v1.0PCB&SCH.pdf)
- **[SCH]** [Grove shield for Arduino Nano SCH](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano.sch)
- **[BRD]** [Grove shield for Arduino Nano BRD](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano.brd)

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！お客様が製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>