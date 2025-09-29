---
description: Grove - Arduino 用濁度センサーメーター V1.0
title: Grove - Arduino 用濁度センサーメーター V1.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Turbidity-Sensor-Meter-for-Arduino-V1.0
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor-wiki.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor-wiki.jpg" alt="pir" width={600} height="auto" /></p>

Grove 濁度センサーは、水の濁度（浮遊粒子の数）を測定することができます。

このモジュールの光学センサーは、フォトトランジスタとダイオード間の波長の屈折を利用して濁った水の密度や異物の濃度を測定します。光学トランジスタと光学ダイオードを使用することで、光源から光受信機への光量を測定し、水の濁度を計算します。

出力モードは基板上のスイッチを調整することで選択できます。アナログ出力とデジタル出力をサポートしています。感度は基板上のノブで調整可能です。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Turbidity-Sensor-p-4399.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Turbidity-Sensor-p-4399.html)

## 特徴

 - 低消費電力
 - 小型サイズ: 2.0cm x 4.0cm Grove モジュール
 - 必要なピンはわずか3つ、I/Oリソースを節約
 - 簡単に使用可能: Grove コネクタ、プラグ＆プレイ
 - 出力モード選択可能、アナログ出力とデジタル出力をサポート

:::tip

    Grove モジュールの詳細については [Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::



## 仕様

|パラメータ|値/範囲|
|---|---|
| 動作電圧 |	3.3V/5V DC |
| 出力インターフェース  | アナログ / デジタル |
| コネクタ | 1 Grove / 1 電源インターフェース |
| サイズ   | 20*40mm |


## 主な用途

- 食器洗い機などの洗濯機の水汚染度を測定し、最適な洗浄時間とすすぎ回数を決定する。
- 工業現場の制御。
- 環境廃水処理。


## ハードウェア概要

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor-pin.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor-pin.jpg" alt="pir" width={600} height="auto" /></p>
- **デジタルからアナログへのスイッチ**

  - 「D」はデジタル出力で、基板上のノブで高低レベルの閾値を調整できます。
  - 「A」はアナログ出力で、液体の濁度が増加するにつれて出力値が減少します。


## 対応プラットフォーム

| Arduino| Raspberry Pi| BeagleBone| Wio| LinkIt ONE|
|--------|-------------|-----------|----|-----------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" alt="pir" width={200} height="auto" /></p> |


:::caution  

    上記で対応可能とされているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能な MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::


## はじめに

### Arduinoで遊ぶ

:::note

    Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

**必要な材料**

| Seeeduino V4.2 | Grove - 濁度センサー | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Turbidity-Sensor-p-4399.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

:::note

	**1** USBケーブルを慎重に差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

	**2** Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

#### アナログ出力

##### ハードウェア接続

- **ステップ1.** センサーのスイッチを**A**に設定します。

- **ステップ2.** Grove - 濁度センサーをGrove-Base Shieldのポート**A0**に接続します。

- **ステップ3.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ4.** USBケーブルを使用してSeeeduinoをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/connect.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note   
     
    Grove Base Shieldがない場合は、以下のようにGrove - 濁度センサーをSeeeduinoに直接接続することもできます。
:::

| Seeeduino     | Grove - 濁度センサー |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                     |
| 接続なし       | 白                     |
| A0            | 黄色                   |

##### ソフトウェア

- **ステップ1.** 以下のコードをArduino IDEにコピーしてアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

```c
void setup() {

  Serial.begin(9600); //ボーレート: 9600
}

void loop() {
  int sensorValue = analogRead(A0);// アナログピン0で入力を読み取る
  float voltage = sensorValue * (5.0 / 1024.0); // アナログ読み取り値(0 - 1023)を電圧(0 - 5V)に変換
  Serial.println(voltage); // 読み取った値を出力
  delay(500);
}
```

- **ステップ2.** Arduino IDEの**シリアルモニター**を開きます。**ツール->シリアルモニター**をクリックするか、**Ctrl+Shift+M**キーを同時に押します。ボーレートを**9600**に設定します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/result.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/result.png" alt="pir" width={600} height="auto" /></p>

- **ステップ3.** これでセンサーを使用でき、出力は以下のようになります。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/serial-port.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/serial-port.png" alt="pir" width={600} height="auto" /></p>

#### デジタル出力

##### ハードウェア接続

- **ステップ1.** センサーのスイッチを**D**に設定します。

- **ステップ2.** Grove - 濁度センサーをGrove-Base Shieldのポート**D2**に接続します。

- **ステップ3.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ4.** USBケーブルを使用してSeeeduinoをPCに接続します。

:::note   
     
    Grove Base Shieldがない場合は、以下のようにGrove - 濁度センサーをSeeeduinoに直接接続することもできます。
:::

| Seeeduino     | Grove - 濁度センサー |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                     |
| 接続なし       | 白                     |
| D2            | 黄色                   |

##### ソフトウェア

- **ステップ1.** 以下のコードをArduino IDEにコピーしてアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

```c
int ledPin = 3;               
int sensor_in = 2;                 // デジタルピン2に濁度センサーを接続

void setup(){
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);      // ledPinを出力モードに設定
  pinMode(sensor_in, INPUT);       // 濁度センサーのピンを入力モードに設定
}

void loop(){
   int sensorValue = digitalRead(sensor_in);
   Serial.println(sensorValue);
   if(sensorValue==HIGH){       // センサー信号を読み取る
        digitalWrite(ledPin, HIGH);   // センサーがLOWの場合、LEDをオンにする
     }else{
        digitalWrite(ledPin, LOW);    // センサーがHIGHの場合、LEDをオフにする
     }
    delay(500);
}
```

- **ステップ2.** デジタル出力を使用し、ポテンショメータを調整してトリガーを上げたり下げたりしてLEDをオン・オフします。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/res/Grove-Turbidity-Sensor-v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241,241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}} />

## リソース

- **[ZIP]** [回路図](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/res/Grove-Turbidity-Sensor-v1.0.zip)

- **[PDF]** [LMV358 データシート](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/res/LMV358-Datasheet.pdf)

- **[PDF]** [MPX5700AP データシート](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/res/Turbidity-Sensor-Datasheet.pdf)

## 技術サポートと製品ディスカッション

## 産業用センサーへのアップグレード可能性
SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングをサポートするだけでなく、SenseCAP シリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そして強力なアプリサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新の SenseCAP S210x をぜひお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>