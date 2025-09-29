---
description: Relay_Shield_v3
title: リレーシールド v3

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Relay_Shield_v3
last_update:
  date: 05/15/2025
  author: Eico 

no_comments: false # for Disqus

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Relay_Shield_L_v3.0.jpg" alt="pir" width={600} height="auto" /></p>

リレーシールドは、ArduinoのデジタルI/Oピンでは電流と電圧の制限により制御できない高電流デバイスを制御するためのソリューションを提供します。

リレーシールドは、高品質なリレーを4つ搭載し、NO/NCインターフェースを提供します。また、各リレーのオン/オフ状態を示す4つの動的LEDインジケーターと、Arduino/Seeeduinoボードやその他のArduino互換ボードへのスムーズな接続を可能にする標準化されたシールド形状を備えています。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Relay-Shield-v3.0-p-2440.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

---

- Arduino Uno/Leonardo/Seeeduino互換; ジャンパーケーブルを使用して他のボードやマイクロコントローラーにも対応
- デジタルI/Oピン4, 5, 6, 7を介したインターフェース
- リレー用スクリュー端子
- 標準化されたシールド形状とデザイン
- 各リレーの動作状態を示すLEDインジケーター
- 高品質なリレー
- 各リレーにCOM、NO（通常開）、NC（通常閉）ピンを提供
- ピンSCL、SDA、IOREF、NCを更新

## 仕様

<table align="center">
  <tbody>
  <tr>
    <td><h3>項目</h3></td>
    <td><h3>最小</h3></td>
    <td><h3>標準</h3></td>
    <td><h3>最大</h3></td>
    <td><h3>単位</h3></td>
  </tr>
  <tr>
    <td><h4>供給電圧</h4></td>
    <td><h4>4.75</h4></td>
    <td><h4>5</h4></td>
    <td><h4>5.25</h4></td>
    <td><h4>VDC</h4></td>
  </tr>
  <tr>
    <td><h4>動作電流</h4></td>
    <td><h4>8</h4></td>
    <td><h4>-</h4></td>
    <td><h4>250</h4></td>
    <td><h4>mA</h4></td>
  </tr>  
  <tr>
    <td><h4>スイッチング電圧</h4></td>
    <td><h4>-</h4></td>
    <td><h4>-</h4></td>
    <td><h4>30</h4></td>
    <td><h4>VDC</h4></td>
  </tr>
    <tr>
    <td><h4>スイッチング電流</h4></td>
    <td><h4>-</h4></td>
    <td><h4>-</h4></td>
    <td><h4>8</h4></td>
    <td><h4>A</h4></td>
  </tr>
    <tr>
    <td><h4>周波数</h4></td>
    <td><h4>-</h4></td>
    <td><h4>1</h4></td>
    <td><h4>-</h4></td>
    <td><h4>Hz</h4></td>
  </tr>
    <tr>
    <td><h4>スイッチング電力</h4></td>
    <td><h4>-</h4></td>
    <td><h4>-</h4></td>
    <td><h4>70</h4></td>
    <td><h4>W</h4></td>
  </tr>
    <tr>
    <td><h4>リレー寿命</h4></td>
    <td><h4>100000</h4></td>
    <td><h4>-</h4></td>
    <td><h4>-</h4></td>
    <td><h4>サイクル</h4></td>
  </tr>
    <tr>
    <td><h4>ESD接触放電</h4></td>
    <td><h4>-</h4></td>
    <td><h4>±4</h4></td>
    <td><h4>-</h4></td>
    <td><h4>KV</h4></td>
  </tr>
    <tr>
    <td><h4>ESD空気放電</h4></td>
    <td><h4>-</h4></td>
    <td><h4>±8</h4></td>
    <td><h4>-</h4></td>
    <td><h4>KV</h4></td>
  </tr>
    <tr>
    <td><h4>寸法</h4></td>
    <td><h4>-</h4></td>
    <td><h4>68.7X53.5X30.8</h4></td>
    <td><h4>-</h4></td>
    <td><h4>mm</h4></td>
  </tr>
    <tr>
    <td><h4>正味重量</h4></td>
    <td><h4>-</h4></td>
    <td><h4>55±2</h4></td>
    <td><h4>-</h4></td>
    <td><h4>g</h4></td>
  </tr>
  </tbody></table>

:::caution

1. ArduinoのUSBコネクタの上に電気テープを2層貼ってください。これによりリレーシールドが接触するのを防ぎます。
2. 35V DCを超える電圧で動作させないでください。
:::

## シールドインターフェースの説明

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Relay_Shield_v3.0.png" alt="pir" width={600} height="auto" /></p>

- Digital 4 – RELAY4 の COM4 ピンを制御 (J4 に位置)
- Digital 5 – RELAY3 の COM3 ピンを制御 (J3 に位置)
- Digital 6 – RELAY2 の COM2 ピンを制御 (J2 に位置)
- Digital 7 – RELAY1 の COM1 ピンを制御 (J1 に位置)

**J1 インターフェース/端子ピンの説明:**

- **COM1 (共通ピン)** : デジタルピンから制御されるリレーピン。

- **NC1 (通常閉)**: RELAY1 制御ピン (Digital 7 I/O ピン) が LOW に設定されている場合、この端子は COM1 に接続され、HIGH に設定されている場合は切断されます。

- **NO1 (通常開)**: RELAY1 制御ピン (Digital 7 I/O ピン) が HIGH に設定されている場合、この端子は COM1 に接続され、LOW に設定されている場合は切断されます。

**端子 J2-4 は J1 と同様ですが、それぞれ RELAY2-RELAY4 を制御します。**

:::note
4 つの異なるリレーを制御するには、Arduino のデジタル I/O ピン 4-7 のみが必要です。さらに、Relay Shield を動作させるために 5V と 2 つの GND ピンも必要です。
:::

## リレーの動作/チュートリアル

---
リレーは基本的に電磁スイッチです。制御回路によってリレーが励磁されると (つまり、コイルに電圧と電流が加えられると)、電流とコイルが磁場を生成し、COM 端子を NO 端子に引き寄せることができます。制御回路が電圧と電流の供給を停止すると、COM 端子は機械的な力 (通常はバネ) によって NC 端子に戻ります。

リレーの実用的な用途には、低電圧で高電圧を制御すること、モーター制御、リモートコントロール、盗聴防止アラーム、自動温度アラーム、インキュベーターなどがあります。

1 つのリレーと 1 つのモーターを使用したモーター制御の例を以下に示します:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Low_Level_Control4.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/High_Level_Control3.jpg" alt="pir" width={600} height="auto" /></p>

Relay Shield の場合、4 つのリレーそれぞれの「制御回路」端子は、Arduino の 1 つのデジタル I/O ピンによって制御されます。ピン 4, 5, 6, 7 はそれぞれリレー 4, 3, 2, 1 を制御します。

## リレーシールドの例/使用法

リレーが内部でどのように動作するかを理解したところで、Relay Shield の使用方法を説明します。

**例 #1: DC モーター制御**

1. Relay Shield を Arduino 開発ボードに積み重ねます。

2. USB ケーブルを使用して Arduino を PC に接続します。

3. RELAY3 を使用して DC モーターを制御します。以下の回路図と図に示すように、DC モーターと Relay Shield を接続します:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Motor-shield-schematic-drawing.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Relay_Shield_Connector.jpg" alt="pir" width={600} height="auto" /></p>

:::note
上記の図に示されている外部電源は、バッテリーまたは電源装置で構いません。外部電源は十分な電流を供給でき、モーターに適した電圧に設定されている必要があります。テストでは、リチウムバッテリーをモーターの外部電源として使用しました。
:::

4. Arduino IDE を起動し、以下のコードを Arduino ボードにアップロードします:

```cpp
int MotorControl = 5;    // モーターを制御するために使用する Arduino デジタルピン

// setup ルーチンはリセットを押したときに 1 回実行されます:
void setup()  {
  // ピン 5 を出力として宣言:
  pinMode(MotorControl, OUTPUT);
}

// loop ルーチンは永遠に繰り返し実行されます:
void loop()  {
  digitalWrite(MotorControl,HIGH);// NO3 と COM3 が接続される (モーターが動作)
  delay(1000); // 1000 ミリ秒 (1 秒) 待機
  digitalWrite(MotorControl,LOW);// NO3 と COM3 が切断される (モーターが停止)
  delay(1000); // 1000 ミリ秒 (1 秒) 待機
}
```

コードを Arduino/Seeeduino ボードにアップロードすると、モーターは 1 秒間動作し、次の 1 秒間停止し、このプロセスを無限に繰り返します。モーターが動作しているとき (NO3 と COM3 が接続されているとき)、NO3 LED インジケーターが点灯します。

**例 #2: 1 つの Arduino/Seeeduino ボードで複数のリレーシールドを使用する方法**

Relay Shield は Arduino のデジタルピンを使用して各リレーを制御するため、1 つの Arduino ボードで複数の Relay Shield を使用できます。その手順は以下の通りです:

1. 1 つ目の Relay Shield (これを Relay Shield #1 と呼びます) を Arduino 開発ボードに積み重ねます。

2. ジャンパーケーブル/ワイヤーを使用して、もう 1 つの Relay Shield (これを Relay Shield #2 と呼びます) を Relay Shield #1 に接続します。以下の図を参照してください:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Two-relay-shields-one-arduino.png" alt="pir" width={600} height="auto" /></p>

- Relay Shield #1 の GND ピンを Relay Shield #2 の GND ピンに接続
- Relay Shield #1 の 5V ピンを Relay Shield #2 の 5V ピンに接続
- Relay Shield #1 のデジタルピン 8, 9, 10, 11 を Relay Shield #2 のデジタルピン 7, 6, 5, 4 にそれぞれ接続

3. これで、Arduino のデジタル I/O ピン 8, 9, 10, 11 を使用して Relay Shield #2 のリレー 1, 2, 3, 4 を制御できます。以下は Relay Shield #2 の RELAY1 を制御するサンプルコードです:

```cpp
int relay1inShield2 = 8;    // Arduino デジタルピン 8 を使用して Relay Shield #2 のリレー 1 を制御

// setup ルーチンはリセットを押したときに 1 回実行されます:
void setup()  {
  // ピン 8 を出力として宣言:
  pinMode(relay1inShield2, OUTPUT);
}

// loop ルーチンは永遠に繰り返し実行されます:
void loop()  {
  digitalWrite(relay1inShield2,HIGH); // リレーが励磁される (NO が COM に接続)
  delay(1000); // 1000 ミリ秒 (1 秒) 待機
  digitalWrite(relay1inShield2,LOW); // NO が COM から切断
  delay(1000); // 1000 ミリ秒 (1 秒) 待機
}
```

## 関連資料

---

- [Relay ShieldのFAQ](http://support.seeedstudio.com/knowledgebase/articles/462030-relay-shield-sku-sld01101p)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/res/Relay_Shield_v3.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---

- [Relay Shield v3.0](https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/res/Relay_Shield_v3.0.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>