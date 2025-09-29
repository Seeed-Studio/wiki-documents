---
description: Grove - RS485
title: Grove - RS485
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-RS485
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Grove - RS485
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 103020193
--- -->

![](https://files.seeedstudio.com/wiki/Grove-RS485/img/preview.png)

Grove RS-485は、ArduinoをRS-485デバイスに簡単に接続できるようにします。プラグアンドプレイするだけで使用可能です。このモジュールは非常に安定しており、500k bpsのエラーフリーな伝送をサポートしています。

RS485はシリアル通信においてコスト効率の高いソリューションであり、10Mbit/sのデータレートや、低速で最大1200mの距離で使用することができます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-RS485-p-2924.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - RS485 | 初版                                                                                               | 2018年11月      |

## 特徴

- 電源電圧: 3.3V/5V
- インターフェース: UART
- 500k bpsのエラーフリー伝送

## 仕様

|パラメータ|値|
|---|---|
|サイズ|長さ: 40mm 幅: 20mm 高さ: 12mm|
|重量|4.9g|
|パッケージサイズ|長さ: 135mm 幅: 85mm 高さ: 13mm|
|総重量|11g|

## ハードウェア概要

### ピン配置

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-RS485/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-RS485/img/pinout.jpg" /></a></p>
  <figcaption><b>図1</b>. <i>ピン配置</i></figcaption>
</figure>
</div>

## はじめに

:::note
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

Grove - NFCはI2CとUARTをサポートしており、[Seeed Arduino NFCライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_NFC)はArduino Uno/Seeeduino v4.2、Arduino Mega/Seeeduino Mega、Arduino Zero/Seeeduino Lorawan、Arduino Leonardo/Seeeduino Liteをサポートしています。

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

- [Seeeduino V4.2(ATMega328P)](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html) x1
- [Seeeduino Lotus V1.1](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html) x1
- [Grove - RS485](https://www.seeedstudio.com/Grove-RS485-p-2924.html) x1
- [Grove Base Shield V2.0](https://www.seeedstudio.com/Base-Shield-V2.html) x1

**接続方法**

![](https://files.seeedstudio.com/wiki/Grove-RS485/img/connect.png)

- **ステップ1.** Seeeduino LotusとSeeeduino V4.2の両方をPCに接続します。

- **ステップ2.** Grove - Base ShieldをSeeeduino Liteに接続します。

- **ステップ3.** ポート6とポート7をソフトポートRXおよびTXとして使用し、2つのGrove RS485を使用して2つのボードを接続します。

#### ソフトウェア

- **ステップ1.**  2つのArduino IDEウィンドウを開き、以下のコードをそれぞれコピーします。一方のデバイスはマスターデバイスとして、もう一方はスレーブデバイスとして使用します。

```cpp
/*      スレーブ     */
#include <SoftwareSerial.h>
SoftwareSerial Slave(6, 7);  
char val;

void setup() {
  Serial.begin(38400);   
  Serial.println("スレーブが準備完了しました！");
  Slave.begin(38400);
}

void loop() {
  while (Serial.available()) {
    val = Serial.read();
    Slave.write(val);
  }

  while(Slave.available()) {
    val = Slave.read();
    Serial.write(val);
  }
}
```

```cpp
/*      マスター      */
#include <SoftwareSerial.h>
SoftwareSerial Master(6, 7);
char val;

void setup() {
  Serial.begin(38400);   
  Serial.println("マスターが準備完了しました！");
  Master.begin(38400);
}

void loop() {
  while (Serial.available()) {
    val = Serial.read();
    Master.write(val);
  }

  while(Master.available()) {
    val = Master.read();
    Serial.write(val);
  }
}
```

- **ステップ2.**  Grove RS485を使用する際に、異なるデバイスに異なるポートを選択します。

- **ステップ3.** メッセージを送信し、結果を確認します。

![](https://files.seeedstudio.com/wiki/Grove-RS485/img/image.png)

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-RS485/res/Grove%20-%20RS485.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Grove - RS485 回路図ファイル](https://files.seeedstudio.com/wiki/Grove-RS485/res/Grove%20-%20RS485.zip)
- **[PDF]** [Max13478E データシート](https://files.seeedstudio.com/wiki/Grove-RS485/res/Max13478.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>