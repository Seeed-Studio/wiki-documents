---
description: Grove Dual Button
title: Grove Dual Button
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Dual-Button
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Grove Dual Button
category: Grove Inputs
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 111020103
tags:
--- -->

![](https://files.seeedstudio.com/products/111020103/img/111020103wiki.png)

Grove - Dual Button は2つのボタンを備えており、1つのGroveモジュールで2つの信号チャンネルを制御することができます。4種類の異なる色のキーキャップが付属しており、必要に応じて自由に色の組み合わせを調整できます。

ボタンはGPIOデジタルピンによって簡単に駆動されます。ボタンが押されると、ピンはボタンからLOW信号を受け取ります。一方、ボタンが離された状態では、ピンは押されるまで常にHIGH信号を受け取ります。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Dual-Button-p-4529.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border={0} /></a></p>

## 特徴

- 2つのボタンを1つのGroveモジュールに統合したコンパクトなモジュール設計で、配線接続を削減
- 異なる色のキーキャップが付属しており、必要に応じて自由に色の組み合わせを調整可能

## 仕様

|項目|値|
|---|---|
|電圧範囲|3V–5V|
|インターフェース|Grove|
|寸法|20mm * 40mm|
|バッテリー|含まれない|

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## はじめに

### Arduinoでの使用方法

#### 必要な材料

|Seeeduino Nano|Grove Shield for Arduino Nano|Grove Passive Buzzer|Grove LED Pack|Grove Dual Button|
|--------|-------|----|-------|----------------|
|![](https://files.seeedstudio.com/products/102010268/img/seeeduino-Nano-thumbnail.png)|![](https://files.seeedstudio.com/products/103100124/img/Grove-Shoeld-for-Arduino-Nano-thumbnail.png)|![](https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg)|![](https://files.seeedstudio.com/products/104020228/img/Grove-LED-Pack-thumbnail.jpg)|![](https://files.seeedstudio.com/products/111020103/img/111020103thumbnail.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Shield-for-Arduino-Nano-p-4112.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Dual-Button-p-4529.html)|

#### ハードウェア接続

![](https://files.seeedstudio.com/products/111020103/img/wiki_nano_button.jpg)

Grove Dual ButtonはGroveシールドの「D2」インターフェースに接続し、Grove Passive Buzzerは「D4」インターフェースに、Grove LED Packは「D6」インターフェースに接続します。

#### ソフトウェア

- **ステップ1** 以下のコードをArduino IDEにコピーしてアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

```cpp
 //対応する周波数で音符を設定
 #define NOTE_D0 0
 #define NOTE_D1 294
 #define NOTE_D2 330
 #define NOTE_D3 350
 #define NOTE_D4 393
 #define NOTE_D5 441
 #define NOTE_D6 495
 #define NOTE_D7 556
 
 #define NOTE_DL1 147
 #define NOTE_DL2 165
 #define NOTE_DL3 175
 #define NOTE_DL4 196
 #define NOTE_DL5 221
 #define NOTE_DL6 248
 #define NOTE_DL7 278
 
 #define NOTE_DH1 589
 #define NOTE_DH2 661
 #define NOTE_DH3 700
 #define NOTE_DH4 786
 #define NOTE_DH5 882
 #define NOTE_DH6 990
 #define NOTE_DH7 112
 
 #define WHOLE 1
 #define HALF 0.5
 #define QUARTER 0.25
 #define EIGHTH 0.25
 #define SIXTEENTH 0.625
 
 //曲全体の音符部分
 int tune[] =
 {
   NOTE_DH1, NOTE_D6, NOTE_D5, NOTE_D6, NOTE_D0,
   NOTE_DH1, NOTE_D6, NOTE_D5, NOTE_DH1, NOTE_D6, NOTE_D0, NOTE_D6,
   NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D6, NOTE_D0, NOTE_D6,
   NOTE_DH1, NOTE_D6, NOTE_D5, NOTE_DH1, NOTE_D6, NOTE_D0,
 
   NOTE_D1, NOTE_D1, NOTE_D3,
   NOTE_D1, NOTE_D1, NOTE_D3, NOTE_D0,
   NOTE_D6, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D6,
   NOTE_D5, NOTE_D1, NOTE_D3, NOTE_D0,
   NOTE_DH1, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D6,
   NOTE_D5, NOTE_D1, NOTE_D2, NOTE_D0,
   NOTE_D7, NOTE_D7, NOTE_D5, NOTE_D3,
   NOTE_D5,
   NOTE_DH1, NOTE_D0, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D5, NOTE_D6, NOTE_D6,
   NOTE_D0, NOTE_D5, NOTE_D1, NOTE_D3, NOTE_D0,
   NOTE_DH1, NOTE_D0, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D5, NOTE_D6, NOTE_D6,
   NOTE_D0, NOTE_D5, NOTE_D1, NOTE_D2, NOTE_D0,
   NOTE_D3, NOTE_D3, NOTE_D1, NOTE_DL6,
   NOTE_D1,
   NOTE_D3, NOTE_D5, NOTE_D6, NOTE_D6,
   NOTE_D3, NOTE_D5, NOTE_D6, NOTE_D6,
   NOTE_DH1, NOTE_D0, NOTE_D7, NOTE_D5,
   NOTE_D6,
 };
 
 //各音符の持続時間
 float duration[] =
 {
   1, 1, 0.5, 0.5, 1,
   0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5,
   0.5, 1, 0.5, 1, 0.5, 0.5,
   0.5, 0.5, 0.5, 0.5, 1, 1,
 
   1, 1, 1 + 1,
   0.5, 1, 1 + 0.5, 1,
   1, 1, 0.5, 0.5, 1,
   0.5, 1, 1 + 0.5, 1,
   0.5, 0.5, 0.5, 0.5, 1 + 1,
   0.5, 1, 1 + 0.5, 1,
   1 + 1, 0.5, 0.5, 1,
   1 + 1 + 1 + 1,
   0.5, 0.5, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25,
   0.5, 1, 0.5, 1, 1,
   0.5, 0.5, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25,
   0.5, 1, 0.5, 1, 1,
   1 + 1, 0.5, 0.5, 1,
   1 + 1 + 1 + 1,
   0.5, 1, 0.5, 1 + 1,
   0.5, 1, 0.5, 1 + 1,
   1 + 1, 0.5, 0.5, 1,
   1 + 1 + 1 + 1
 };
 
 int length;//音符の数を定義
 int tonePin = 4; //ブザーのピンを設定
 int button1 = 2; //ボタン1のピンを設定
 int button2 = 3; //ボタン2のピンを設定
 int LED = 6;  //LEDのピンを設定
 bool state1 = 1; //ボタン1の状態を設定
 bool state2 = 1; //ボタン2の状態を設定
 void setup()
 {
   pinMode(tonePin, OUTPUT); //ブザーを出力モードに設定
   pinMode(button1,INPUT);
   pinMode(button2,INPUT);
   pinMode(LED,OUTPUT);
   length = sizeof(tune) / sizeof(tune[0]); //音符の数をカウント
 }
 
 void loop()
 {
  state1 = digitalRead(button1);
  state2 = digitalRead(button2);
  if (state1 == 0)
  {
    digitalWrite(LED,HIGH);
    }
  else
  {
    digitalWrite(LED,LOW);
    } 
  if (state2 == 0)
  {
       for (int x = 0; x < length; x++) //"音符"を1つずつ再生
     {
     tone(tonePin, tune[x]); //"x"番目の音符を出力
     delay(400 * duration[x]); //音楽のリズム、"400"の数値を変更して速さを調整可能
     noTone(tonePin);//現在の音符を停止し、次の音符へ
    } 
  } 
  else
  {
    digitalWrite(tonePin,LOW);
    }
  
 }
```

- **ステップ2** 各ボタンを押してLEDとブザーを制御します。

### Raspberry Piで始める

#### 必要な材料

|Raspberry Pi 4B(4GB)|Grove Base Hat for Raspberry Pi|Grove Passive Buzzer|Grove LED Pack|Grove Dual Button|
|--------|-----|------|------|-----|
|![](https://files.seeedstudio.com/products/102110301/img/raspberry-pi-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103030275/img/thumbnail.jpg)|![](https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg)|![](https://files.seeedstudio.com/products/104020228/img/Grove-LED-Pack-thumbnail.jpg))|![](https://files.seeedstudio.com/products/111020103/img/111020103thumbnail.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Dual-Button-p-4529.html)|

#### ハードウェア接続

![](https://files.seeedstudio.com/products/111020103/img/wiki_raspberry_button.jpg)

パッシブブザーをPWMピン「12」、ボタンを「D5」、LEDを「D16」に接続します。

#### コード

- **ステップ1** RaspberryにGrove.pyをインストールします。

ワンクリックインストール、クイックスタート、何と呼んでも構いませんが、以下の単一コマンドを使用することで、すべての依存関係と最新のgrove.pyをインストール/更新できます。

:::caution
**Raspberry Pi OS >= Bullseye**を搭載したRaspberry Piを使用している場合、このコマンドラインは使用できません。
:::

```
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

:::tip
すべてが正常に進行すると、以下の通知が表示されます。

```
    Successfully installed grove.py-0.5
    #######################################################
    Lastest Grove.py from github install complete   !!!!!
    #######################################################
```

:::
<br />
ワンクリックインストールに加えて、すべての依存関係と最新のgrove.pyをステップバイステップでインストールすることもできます。

:::caution
**Raspberry Pi OS >= Bullseye**を搭載したRaspberry Piを使用している場合、**Python3のみ**でこのコマンドラインを使用する必要があります。
:::

```python
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
# Python2
sudo pip install .
# Python3
sudo pip3 install .
```

- **ステップ2** コード用のPythonファイルを作成します。

```
cd grove.py
nano button.py
```

- **ステップ3** 以下のコードをPythonファイルにコピーします。

```python
#!/usr/bin/env python
import time
from grove.factory import Factory
from grove.grove_led import GroveLed

led = GroveLed(16)
button1 = Factory.getButton("GPIO-HIGH", 5)
button2 = Factory.getButton("GPIO-HIGH", 6)
buzzer = Factory.getGpioWrapper("Buzzer", 12)

while True:
    if button1.is_pressed():
        led.on()
    else:
        led.off()
    if button2.is_pressed():
        buzzer.on() 
    else:
        buzzer.off()           
```

- **ステップ4** プログラムを実行します。

```
sudo chmod +x button.py
sudo ./button.py
```

すべてが正常に動作すれば、デュアルボタンでLEDとブザーを制御できます。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/111020103/document/Grove-Dual-Button_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[PDF]** [ハードウェア回路図](https://files.seeedstudio.com/products/111020103/document/Grove-Dual-Button_v1_0_SCH_190916.pdf)

## 技術サポートと製品ディスカッション

<br />
弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>