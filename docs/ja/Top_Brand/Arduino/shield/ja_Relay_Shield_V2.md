---
description: リレーシールド V2.0
title: リレーシールド V2.0
keywords:
- Arduino シールド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Relay_Shield_V2
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: リレーシールド V2.0
category: 廃止
bzurl:
oldwikiname: Relay_Shield_V2.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Relay-Shield_V2-0
sku: 103030003
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Relayshield_01.jpg)

リレーシールドは、Arduino のデジタル I/O ピンの電流および電圧制限のために制御できない高電流デバイスを制御するためのソリューションを提供します。

リレーシールドは、4 つの高品質リレーを備え、NO/NC インターフェースを提供します。また、各リレーのオン/オフ状態を示す 4 つの動的 LED インジケーターと、Arduino/Seeeduino ボードやその他の Arduino 互換ボードへのスムーズな接続を可能にする標準化されたシールド形状を特徴としています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)
](https://www.seeedstudio.com/depot/relay-shield-v20-p-1376.html)

## 特徴 ##

- Arduino Uno/Leonardo/Seeeduino 互換; ジャンパーケーブルを使用して他のボードやマイクロコントローラーにも対応

- デジタル I/O ピン 4, 5, 6, 7 を介したインターフェース

- リレー用スクリュー端子

- 標準化されたシールド形状とデザイン

- 各リレーの動作状態を示す LED インジケーター

- 高品質リレー

- 各リレーに対応する COM、NO（通常開）、NC（通常閉）ピン

## 仕様 ##

|  項目 | 最小 | 標準 | 最大 | 単位 |
|---|---|---|---|---|
|   電源電圧 | 4.75 | 5 | 5.25 | VDC |  
| 動作電流 | 8 | / | 250 | mA  |
| スイッチング電圧 | / | / | 35 | VDC  |
|   スイッチング電流 | / | / | 8 | A |
|  周波数 | / | 1 | / | Hz |
| スイッチング電力 | / | / | 70 | W  |
|  リレー寿命 | 100,000 | / | / | サイクル |
| ESD 接触放電 | ±4 | | | kV  |
| ESD 空気放電 | ±8 | | | kV  |  
| 寸法 | 68.7X53.5X30.8 | | | mm  |  
| 正味重量 | 55±2 | | | g |

:::note

- [Arduino] の USB コネクタの上に電気テープを 2 層貼ってください。これにより、リレーシールドが接触するのを防ぎます。
- 35V DC を超える電圧で動作させないでください。
:::

## シールドインターフェースの説明 ##

![](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Relays-Shield-PCB-Explained-real.png)

リレーシールド V2.0 の端子接続の説明

- デジタル 4 – RELAY4 の COM4 ピンを制御（J4 に位置）

- デジタル 5 – RELAY3 の COM3 ピンを制御（J3 に位置）

- デジタル 6 – RELAY2 の COM2 ピンを制御（J2 に位置）

- デジタル 7 – RELAY1 の COM1 ピンを制御（J1 に位置）

J1 インターフェース/端子ピンの説明:

- **COM1（共通ピン）:** デジタルピンから制御されるリレーピン。

- **NC1（通常閉）:** RELAY1 制御ピン（デジタル 7 I/O ピン）が Low に設定されている場合、この端子は COM1 に接続され、High に設定されている場合は切断されます。

- **NO1（通常開）:** RELAY1 制御ピン（デジタル 7 I/O ピン）が High に設定されている場合、この端子は COM1 に接続され、Low に設定されている場合は切断されます。

**端子 J2-4 は J1 と同様ですが、それぞれ RELAY2-RELAY4 を制御します。**

**注意:** 4 つの異なるリレーを制御するには、Arduino のデジタル I/O ピン 4-7 のみが必要です。さらに、リレーシールドを動作させるために 5V と 2 つの GND ピンも必要です。

## リレーの仕組み ##

リレーは基本的に電磁スイッチです。リレーが制御回路によって励磁されると（つまり、コイルに電圧と電流が供給されると）、電流とコイルが磁場を生成し、COM端子をNO端子に引き寄せることができます。制御回路が供給されている電圧と電流を取り除くと、COM端子は機械的な力（通常はバネ）によってNC端子に戻ります。

リレーの実用的な用途には、低電圧で高電圧を制御すること、モーター制御、リモートコントロール、盗聴防止アラーム、自動温度アラーム、インキュベーターなどがあります。

1つのリレーと1つのモーターを使用したモーター制御の例を以下に示します：

![](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Low_Level_Control4.jpg)
モーターは現在動作していません。これは、電源からモーターへの接続がないためです。制御回路がリレーを励磁していないため、COM端子はNO端子に引き寄せられていません。

![](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/High_Level_Control3.jpg)
モーターは動作しています。これは、電源の+端子と-端子に接続されているためです。制御回路がリレーを励磁しており、その磁力がCOM端子をNO端子に引き寄せています。

Relay Shieldの場合、4つのリレーそれぞれの「制御回路」端子は、ArduinoのデジタルI/Oピン1つだけで制御されます。ピン4、5、6、7はそれぞれリレー4、3、2、1を制御します。

## はじめに ##

リレーの内部動作を理解したところで、Relay Shieldの使用方法を説明します。

### 例 #1: DCモーター制御 ###

1. Relay ShieldをArduino開発ボードに積み重ねます。

2. USBケーブルを使用してArduinoをPCに接続します。

3. RELAY3を使用してDCモーターを制御します。以下の回路図と図に示すようにDCモーターとRelay Shieldを接続します：

![](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Motor-shield-schematic-drawing.png)
モーターとRelay Shieldの回路図

![](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Relay_Shield_Connector.jpg)
Relay Shieldが接続されたArduinoボードとモーター

**注意:** 上記の図に示されている外部電源は、バッテリーまたは電源装置である可能性があります。外部電源は十分な電流を供給でき、モーターに適した電圧に設定されている必要があります。テストでは、モーターの外部電源としてリチウムバッテリーを使用しました。

4. Arduino IDEを起動し、以下のコードをArduinoボードにアップロードします：

```cpp
int MotorControl = 5;    // モーターを制御するために使用するArduinoのデジタルピン

// setupルーチンはリセットボタンを押したときに1回だけ実行されます:
void setup()  {
    // ピン5を出力として宣言:
    pinMode(MotorControl, OUTPUT);
}

// loopルーチンは永遠に繰り返し実行されます:
void loop()  {
    digitalWrite(MotorControl,HIGH);// NO3とCOM3が接続される（モーターが動作）
    delay(1000); // 1000ミリ秒（1秒）待機
    digitalWrite(MotorControl,LOW);// NO3とCOM3が切断される（モーターが停止）
    delay(1000); // 1000ミリ秒（1秒）待機
}
```

コードをArduino/Seeeduinoボードにアップロードすると、モーターは1秒間動作し、次の1秒間停止し、このプロセスを無限に繰り返します。モーターが動作しているとき（NO3とCOM3が接続されているとき）、NO3 LEDインジケーターが点灯します。

### 例 #2: 1つのArduino/Seeeduinoボードで複数のRelay Shieldを使用する方法 ###

Relay ShieldはArduinoのデジタルピンを使用して各リレーを制御するため、1つのArduinoボードで複数のRelay Shieldを使用することができます。その手順は以下の通りです：

1. 1つ目のRelay Shield（Relay Shield #1と呼びます）をArduino開発ボードに積み重ねます。

2. ジャンパーケーブル/ワイヤーを使用して、もう1つのRelay Shield（Relay Shield #2と呼びます）をRelay Shield #1に接続します。以下の図に示すように接続します：

![](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Two-relay-shields-one-arduino.png)
1つのArduinoボードで2つのRelay Shieldを使用する回路図

- Relay Shield #1のGNDピンをRelay Shield #2のGNDピンに接続します。

- Relay Shield #1の5VピンをRelay Shield #2の5Vピンに接続します。

- Relay Shield #1のデジタルピン8、9、10、11をRelay Shield #2のデジタルピン7、6、5、4にそれぞれ接続します。

3. これで、ArduinoのデジタルI/Oピン8、9、10、11を使用してRelay Shield #2のリレー1、2、3、4を制御できます。以下はRelay Shield #2のRELAY1を制御するサンプルコードです：

```cpp
int relay1inShield2 = 8; // Arduinoのデジタルピン8はRelay Shield #2のリレー1を制御するために使用されます

// setupルーチンはリセットボタンを押したときに1回だけ実行されます:
void setup() {
    pinMode(relay1inShield2, OUTPUT); // ピン8を出力として宣言:
}

// loopルーチンは永遠に繰り返し実行されます:
void loop() {
    digitalWrite(relay1inShield2, HIGH); // リレーが励磁される（NOがCOMに接続される）
    delay(1000); // 1000ミリ秒（1秒）待機
    digitalWrite(relay1inShield2, LOW); // NOがCOMから切断される
    delay(1000); // 1000ミリ秒（1秒）待機
}
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/res/Relay_Shield_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース ##

- **[EAGLE]**[リレーシールド EagleCAD ファイル](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/res/Relay_Shield_eagle.zip)
- **[PDF]**[リレーシールド PCB](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/res/Relay%20shield%20PCB.pdf)
- **[PDF]**[リレーシールド回路図](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/res/Relay%20shield%20sch.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>