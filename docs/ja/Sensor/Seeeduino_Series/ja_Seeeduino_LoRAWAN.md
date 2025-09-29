---
description: Seeeduino LoRaWAN
title: Seeeduino LoRaWAN
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino_LoRAWAN
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/cover.png)

Seeeduino LoRaWAN は、LoRaWanプロトコルが組み込まれたArduino開発ボードであり、これを使用することでIoT分野におけるLoRaの利点を迅速に体験することができます。通信モジュールRHF76-052AMを基盤としており、Seeeduino LoRaWAN はLoRaWAN Class A/Cに対応し、さまざまな通信周波数をサポートします。

オンボードの4つの標準Groveコネクタにより、Seeeduino LoRaWanはSeeedstudioの数百種類のGroveセンサーやアクチュエータと簡単に接続できるため、ユーザーは異なるモジュール間の互換性問題を心配することなく、アプリケーション自体に集中することができます。さらに、このボードには統合されたリチウムバッテリー管理チップが組み込まれており、USBインターフェースを介して充電することができます。低消費モードでは、フル充電されたリチウムバッテリーで数ヶ月間ボードを駆動することが可能です。

迅速にIoTアプリケーションを構築したい場合、Seeeduino LoRaWAN は最適な選択肢です。

<iframe width={800} height={450} src="https://www.youtube.com/embed/4df5kaaKa6I" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

|製品バージョン|発売日|購入方法|
|-------|-------------|----------|
|Seeeduino LoRaWAN |2016年12月20日|[![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-LoRaWAN-p-2780.html)|
|Seeeduino LoRaWAN W/GPS |2016年12月20日|[![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-LoRaWAN-W%2FGPS-p-2781.html)|

## バージョン変更

|項目| Seeeduino LoRaWAN W/GPS | Seeeduino LoRaWAN |
|---|---|---|
|メインチップ|ATSAMD21|ATSAMD21|
|GPS通信|√|x|
|モジュール|RHF76-052DM|RHF76-052AM|
|モジュール発売時期|2018|2018|

:::note
    初めて使用する際はファームウェアを更新してください。USB電源供給が十分でない場合に備え、常に3.7Vリポバッテリーを接続してください。
:::

:::tip
    Seeeduino LoRaWAN W/GPSはGPSモジュールを含んでいます。
:::

## 特徴

* 最小電流 (3.7Vリポバッテリー) - 2mA
* 最小電流 (3.7Vリポバッテリー & PWR LEDを取り外し) - 80uA

**Arduino/プロセッサ**

* ATSAMD21G18 @ 48MHz、3.3Vロジック/電源
* Arduino互換 (Arduino Zeroブートローダーに基づく)
* リチウムバッテリー管理チップとステータスインジケータLEDを内蔵
* 20 GPIO
* オンボードGroveコネクタ4つ
* 18 x PWMピン
* 6 x アナログ入力
* 1 x アナログ出力 (A0)
* 3.3Vレギュレータ、200mA出力
* リセットボタン

**LoRaWAN/RHF76-052**

* WORモードでのスリープ電流1.45uA (モジュールの仕様、ボードではありません)
* 160dBの高リンクバジェット。-140dBmの感度と19dBmの出力パワー。
* デュアルバンド、434/470MHzおよび868/915MHz
  * 19dBm@434MHz/470MHz
  * 14dBm@868MHz/915MHz
* LoRaWANプロトコル、Class A/C対応
* 超長距離通信
* 超低消費電力
* ファームウェアアップグレード
* 小型サイズ: 23mm X 28mm、33ピンSMTパッケージ

:::warning
    ほとんどのArduino & Genuinoボードとは異なり、Zeroは3.3Vで動作します。I/Oピンが許容できる最大電圧は3.3Vです。I/Oピンに3.3Vを超える電圧を適用すると、ボードが損傷する可能性があります。
:::

## 仕様

| 項目 | 値 |
|--------------|-------------------------------------|
| マイクロコントローラー | ATSAMD21G18, 32ビット ARM Cortex M0+ |
| 動作電圧 | 3.3V |
| デジタルI/Oピン | 20 |
| PWMピン | ピン2と7以外すべて |
| UART | 2 (ネイティブおよびプログラミング) |
| アナログ入力ピン | 6, 12ビットADCチャンネル |
| アナログ出力ピン | 1, 10ビットDAC |
| 外部割り込み | ピン4以外のすべてのピン |
| 各I/OピンのDC電流 | 7 mA |
| フラッシュメモリ | 256 KB |
| SRAM | 32 KB |
| EEPROM | なし |
| クロックスピード | 48 MHz |
| 長さ | 68 mm |
| 幅 | 53 mm |
| 重量 | 19.6g (GPSなし), 19.9g (GPSあり) |

## アプリケーションアイデア

* モノのインターネット (IoT)
* スマートハウス
* セキュリティ
* スマートグリッド
* インテリジェントファーム
* インテリジェントパーク

:::tip
    Groveモジュールを使用してアプリケーションを拡張してください。
:::
ボード上には4つのGroveコネクタがあります。Groveについて初めて聞いた場合は、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご覧ください。
簡単に言うと、Groveは標準スタイルのセンサー群で、センサー、アクチュエーター、ディスプレイ、通信モジュールで構成されています。

## ハードウェア概要

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/hw_LoRa.png)

* **1.** Micro USB - ボードのプログラミングおよび電源供給
* **2.** Groveコネクタ
* **3.** JST2.0リポバッテリー入力 (3.7V) および充電ステータスLED
* **4.** DFUボタン - ファームウェアモードボタン
* **5.** リセットボタン
* **6.** Arduinoピン配置
* **7.** ICSPピン
* **8.** ファームウェアモードLED
* **9.** ワイヤアンテナ
* **A.** uFLアンテナ
* **B.** RFモジュール - RHF76-052AM
* **C.** ARM Cortex M0プロセッサ - ATSAMD21G18
* **D.** LED
  * ***RX/TX*** - UART（USBから/USBへのデータ）時に点滅
  * ***L*** - D13に接続されたLED
  * ***PWR*** - 電源

:::tip
    ボード上の4つのGroveコネクタを使用する場合は、`digitalWrite(38, HIGH)`を使用してVCCをオンにしてください。そうしないと、Groveモジュールに電力を供給できません。
:::
**ピンマップ**

| ピン名 | GPIO番号 | 外部割り込み | PWM | アナログ入力 | アナログ出力 | 機能 |
|--------|----------|--------------|-----|--------------|--------------|------|
| 0      | #0       | YES          | YES |              |              | RX(Serial) |
| 1      | #1       | YES          | YES |              |              | TX(Serial) |
| 2      | #2       | YES          |     |              |              |          |
| 3      | #3       | YES          | YES |              |              |          |
| 4      | #4       |              | YES |              |              |          |
| 5      | #5       | YES          | YES |              |              |          |
| 6      | #6       | YES          | YES |              |              |          |
| 7      | #7       | YES          |     |              |              |          |
| 8      | #8       | YES          | YES |              |              |          |
| 9      | #9       | YES          | YES |              |              |          |
| 10     | #10      | YES          | YES |              |              |          |
| 11     | #11      | YES          | YES |              |              |          |
| 12     | #12      | YES          | YES |              |              |          |
| 13     | #13      | YES          | YES |              |              |          |
| SDA    | #20      | YES          | YES |              |              |          |
| SCL    | #21      | YES          | YES |              |              |          |
| A0     | #A0      | YES          | YES | YES          | YES          |          |
| A1     | #A1      | YES          | YES | YES          |              |          |
| A2     | #A2      | YES          | YES | YES          |              |          |
| A3     | #A3      | YES          | YES | YES          |              |          |
| A4     | #A4      | YES          | YES | YES          |              | バッテリー電圧 |
| A5     | #A5      | YES          | YES | YES          |              | 充電ステータス |

:::note
    すべてのピンはデジタル入力および出力として動作可能です。
:::

## はじめに

:::note
Arduino を初めて使用する場合は、[Arduino の使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino)を参照することを強くお勧めします。
:::

まず、最新の Arduino IDE をインストールし、[Seeeduino LoRa を Arduino IDE に追加](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)してください。

## ドライバのインストール（Windows 用）

初めてボードを接続する際、Seeeduino LoRaWAN という名前の USB COM デバイスが表示され、ドライバをインストールする必要があります。以下のボタンをクリックして、ボード用のドライバをダウンロードしてください。

[![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/driver.png)](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/driver.zip)

ドライバが正常にインストールされたことを確認するには、デバイスマネージャーを開き、**Seeeduino LoRaWAN** が存在するか確認してください。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/device_manager.png)

## 1. 点滅（Blink）

次に、最初のデモ「Blink」を Seeeduino LoRaWAN にアップロードします。

Arduino IDE を開き、**ファイル > スケッチ例 > 01.Basics > Blink** をクリックしてスケッチを開くか、以下のコードをコピーしてください：

```c
// setup 関数は、リセットボタンを押すかボードに電源を入れたときに一度だけ実行されます
void setup() {
  // デジタルピン 13 を出力として初期化
  pinMode(13, OUTPUT);
}

// loop 関数は、永遠に繰り返し実行されます
void loop() {
  digitalWrite(13, HIGH);   // LED を点灯（HIGH は電圧レベル）
  delay(1000);              // 1 秒待機
  digitalWrite(13, LOW);    // LED を消灯（LOW は電圧レベル）
  delay(1000);              // 1 秒待機
}
```

次に、

* **ツール > ボード > Seeeduino LoRaWAN** をクリックします。

Seeeduino LoRaWAN が見つからない場合は、[Seeed ボードを Arduino IDE に追加する方法](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)を確認してください。

* **ツール > ポート** をクリックして、正しいポート番号を選択します。（*COM1 を選択しないでください*）

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/blink1.png)

その後、Arduino IDE の左上にある **アップロード** ボタンをクリックします。数秒後、スケッチが正常にアップロードされます。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/blink2.png)

アップロードが成功すると、赤い文字でいくつかの情報が表示され、オンボード LED が点滅しているのが確認できるはずです。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/blink3.png)

## 2. バッテリー

ボードは 3.7V のリポバッテリーで電源供給できます。JST2.0 ケーブルが付属しているので、JST2.0 コネクタ付きのバッテリーがない場合はこれを使用してください。

:::warning
    バッテリーの正極と負極が正しく接続されていることを確認してください。そうしないと、ボードが損傷する可能性があります。
:::

充電状態ピンとバッテリーの正極ピンは A4 と A5 に接続されており、コードを使用して充電状態を検出したり、バッテリーの電圧を測定したりできます。

以下のコードをコピーしてアップロードし、バッテリーの状態を検出してください。

```cpp
// Seeeduino LoRaWAN のバッテリー

const int pin_battery_status  = A5;
const int pin_battery_voltage = A4;

void setup() {
    SerialUSB.begin(115200);
    pinMode(pin_battery_status, INPUT);
}

void loop() {

    int a = analogRead(pin_battery_voltage);
    float v = a/1023.0*3.3*11.0;        // 1M と 100k の抵抗分圧があります
    SerialUSB.print(v, 2);
    SerialUSB.print('\t');
    SerialUSB.println(digitalRead(pin_battery_status));

    delay(1000);
}
```

:::note
    充電状態は、充電中は 0 を返し、充電完了またはバッテリー未挿入の場合は 1 を返します。
:::

## 3. 送信と受信の例

LoRaWAN モジュールにはよく設計されたライブラリがあり、簡単なアプリケーションでは LoRa プロトコルについてあまり詳しく知らなくても使用できます。LoRa プロトコルは複雑で理解しにくいですが、基本的な知識があれば十分です。
ただし、高度なアプリケーションを作成したい場合は、LoRa プロトコルについての知識が必要です。
ライブラリをダウンロードする必要はありません。パッケージにすでに含まれています。**File > Examples > LoRaWAN** から開くことができます。これらの例には以下が含まれます：

* p2p-tx
* p2p-rx
* ABP
* OTAA

この例を完成させるには、Seeeduino LoRaWAN が2つ必要です。1つは送信用、もう1つは受信用です。

### 3.1 P2P 送信

Arduino IDE を開き、**File > Examples > LoRaWAN > p2p_tx** をクリックしてスケッチを開くか、以下のコードをコピーしてください。
このスケッチは、3000ミリ秒ごとに文字列 "Hello World!" をブロードキャストします。

```cpp
// Seduino LoRaWAN - TX example
#include <LoRaWan.h>

void setup(void)
{
    SerialUSB.begin(115200);
    lora.init();
    lora.initP2PMode(433, SF12, BW125, 8, 8, 20);
}

void loop(void)
{
    lora.transferPacketP2PMode("Hello World!");
    SerialUSB.println("Send string.");
    delay(3000);
}
```

### 3.2 P2P 受信

Arduino IDE を開き、**File > Examples > LoRaWAN > p2p_rx** をクリックしてスケッチを開くか、以下のコードをコピーしてください。

```cpp
// Seduino LoRaWAN - RX example
#include <LoRaWan.h>

unsigned char buffer[128] = {0, };

void setup(void)
{
    SerialUSB.begin(115200);
    lora.init();
    lora.initP2PMode(433, SF12, BW125, 8, 8, 20);
}

void loop(void)
{
    short length = 0;
    short rssi = 0;

    memset(buffer, 0, 128);
    length = lora.receivePacketP2PMode(buffer, 128,  &rssi, 1);

    if(length)
    {
        SerialUSB.print("Length is: ");
        SerialUSB.println(length);
        SerialUSB.print("RSSI is: ");
        SerialUSB.println(rssi);
        SerialUSB.print("Data is: ");
        for(unsigned char i = 0; i < length; i ++)
        {
            SerialUSB.print("0x");
            SerialUSB.print(buffer[i], HEX);
            SerialUSB.print(" ");
        }
        SerialUSB.println();
    }
}
```

両方のスケッチが正常にアップロードされた後、受信ボードのシリアルモニターを開き、以下のようなデータを取得できるか確認してください。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/monitor_rx.png)

### 3.3 ABP

* ステップ 1. [LoRa/LoRaWAN Gateway Kit](https://wiki.seeedstudio.com/ja/LoRa_LoRaWan_Gateway_Kit/) を参照してゲートウェイをセットアップしてください。  
* ステップ 2. [Grove-Temperature_and_Humidity_Sensor_Pro](https://wiki.seeedstudio.com/ja/Grove-Temperature_and_Humidity_Sensor_Pro/) をベースシールドの D2 ポートに接続してください。
* ステップ 3. ベースシールドを Seeeduino Lorawan に接続してください。
* ステップ 4. [DHT ライブラリ](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/DHT.zip) をダウンロードし、Arduino ライブラリフォルダに解凍してください。
* ステップ 5. 以下のコードを Arduino IDE にコピーしてアップロードしてください。

```cpp
#include <LoRaWan.h>
#include "DHT.h"

#define DHTPIN            2   
#define DHTTYPE           DHT22
DHT dht(DHTPIN, DHTTYPE);
unsigned char data[2] = {1, 2};
char buffer[256];

void setup(void)
{     
    dht.begin();
    
    SerialUSB.begin(115200);
    //while(!SerialUSB);
    
    lora.init();
    
    memset(buffer, 0, 256);
    lora.getVersion(buffer, 256, 1);
    SerialUSB.print(buffer); 
    
    memset(buffer, 0, 256);
    lora.getId(buffer, 256, 1);
    SerialUSB.print(buffer);
    
    lora.setKey("2B7E151628AED2A6ABF7158809CF4F3C", "2B7E151628AED2A6ABF7158809CF4F3C", "2B7E151628AED2A6ABF7158809CF4F3C");
    
    lora.setDeciveMode(LWABP);
    lora.setDataRate(DR0, EU868);
    
    lora.setChannel(0, 867.7);
    lora.setChannel(1, 867.9);
    lora.setChannel(2, 868.8);
    
    lora.setReceiceWindowFirst(0, 867.7);
    lora.setReceiceWindowSecond(869.5, DR3);
    
    lora.setDutyCycle(false);
    lora.setJoinDutyCycle(false);
    
    lora.setPower(14);
}

void loop(void)
{   
    bool result = false;

    delay(2000);
    int h = dht.readHumidity();
    int t = dht.readTemperature();
    
    //result = lora.transferPacket("Hello World!", 10);
    result = lora.transferPacket(data, 2, 10);
    data[0] = h;
    data[1] = t;
    
    if(result)
    {
        short length;
        short rssi;
        
        memset(buffer, 0, 256);
        length = lora.receivePacket(buffer, 256, &rssi);
        
        if(length)
        {
            SerialUSB.print("Length is: ");
            SerialUSB.println(length);
            SerialUSB.print("RSSI is: ");
            SerialUSB.println(rssi);
            SerialUSB.print("Data is: ");
            for(unsigned char i = 0; i < length; i ++)
            {
                SerialUSB.print("0x");
                SerialUSB.print(buffer[i], HEX);
                SerialUSB.print(" ");
            }
            SerialUSB.println();
        }
    }
}
```

* ステップ 6. ローカルサーバーの場合、Application->Seeed（追加したアプリケーションの名前）->View application data をクリックすると、Seeeduino_LoRAWAN から送信されたデータが表示されます。Loriot サーバーの場合は、Dashboard -> Applications -> SampleApp -> Device に移動し、Node Device EUI または DevAddr をクリックすると、送信されたデータが表示されます。

### 3.4 OTAA

* ステップ 1. [ユーザーマニュアル](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/RHF-UM01649-IoT-Discovery-User-Manual-seeed-v2.1.pdf) のセッション 3.2.3 を参照してゲートウェイをセットアップしてください。
* ステップ 2. Seeeduino Lorawan の場合、Arduino IDE を開き、**File > Examples > LoRaWAN > OTAA** をクリックしてコードを参照してください。

```cpp
#include <LoRaWan.h>


unsigned char data[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0xA,};
char buffer[256];


void setup(void)
{
    SerialUSB.begin(115200);
    while(!SerialUSB);
    
    lora.init();
    
    memset(buffer, 0, 256);
    lora.getVersion(buffer, 256, 1);
    SerialUSB.print(buffer); 
    
    memset(buffer, 0, 256);
    lora.getId(buffer, 256, 1);
    SerialUSB.print(buffer);
    
    lora.setKey("2B7E151628AED2A6ABF7158809CF4F3C", "2B7E151628AED2A6ABF7158809CF4F3C", "2B7E151628AED2A6ABF7158809CF4F3C");
    
    lora.setDeciveMode(LWOTAA);
    lora.setDataRate(DR0, EU868);
    
    lora.setChannel(0, 868.1);
    lora.setChannel(1, 868.3);
    lora.setChannel(2, 868.5);
    
    lora.setReceiceWindowFirst(0, 868.1);
    lora.setReceiceWindowSecond(869.5, DR3);
    
    lora.setDutyCycle(false);
    lora.setJoinDutyCycle(false);
    
    lora.setPower(14);
    
    while(!lora.setOTAAJoin(JOIN));
}

void loop(void)
{   
    bool result = false;
    
    result = lora.transferPacket("Hello World!", 10);
    //result = lora.transferPacket(data, 10, 10);
    
    if(result)
    {
        short length;
        short rssi;
        
        memset(buffer, 0, 256);
        length = lora.receivePacket(buffer, 256, &rssi);
        
        if(length)
        {
            SerialUSB.print("Length is: ");
            SerialUSB.println(length);
            SerialUSB.print("RSSI is: ");
            SerialUSB.println(rssi);
            SerialUSB.print("Data is: ");
            for(unsigned char i = 0; i < length; i ++)
            {
                SerialUSB.print("0x");
                SerialUSB.print(buffer[i], HEX);
                SerialUSB.print(" ");
            }
            SerialUSB.println();
        }
    }
}
```

## 4. GPSデータ

:::note
    この章は、Seeeduino LoRaWAN W/GPS専用です。
:::

### 4.1 NMEA

* ステップ1. 以下のコードをSeeeduino LoRaWAN W/GPSにコピーしてください。

```cpp
void setup()
{
    Serial2.begin(9600);
    Serial.begin(115200);
}
 
void loop()
{
    while(Serial2.available())
    {
        Serial.write(Serial2.read());
    }
    while(Serial.available())
    {
        Serial2.write(Serial.read());
    }
}
```

* ステップ2. シリアルモニタを開くと、GPSからデータを取得できます。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/gps.png)

### 4.2 緯度と経度

**Todd Krein**がGithubで共有してくれた例に感謝します。[TinyGPS++ライブラリ](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/TinyGPSPlus-master.zip)をダウンロードし、以下のコードをSeeeduino Lorawanにコピーしてください。

```cpp
#define USE_GPS 1
 
#include "LoRaWan.h"
 
#ifdef USE_GPS
#include "TinyGPS++.h"
TinyGPSPlus gps;
#endif
 
 
void setup(void)
{
 
    char c;
#ifdef USE_GPS
    bool locked;
#endif
 
    SerialUSB.begin(115200);
    while(!SerialUSB);
 
    lora.init();
    lora.setDeviceReset();
 
#ifdef USE_GPS
    Serial2.begin(9600);     // GPSを開く
    locked = false;
 
    // 安全のため、LoRaセクションで任意の遅延を実行する前にGPSの位置を取得します
 
    while (!gps.location.isValid()) {
      while (Serial2.available() > 0) {
        if (gps.encode(c=Serial2.read())) {
          displayInfo();
          if (gps.location.isValid()) {
//            locked = true;
            break;
          }
        }
//        SerialUSB.print(c);
      }
 
//      if (locked)
//        break;
 
      if (millis() > 15000 && gps.charsProcessed() < 10)
      {
        SerialUSB.println(F("GPSが検出されません: 配線を確認してください。"));
        SerialUSB.println(gps.charsProcessed());
        while(true);
      } 
      else if (millis() > 20000) {
        SerialUSB.println(F("指定された時間内に位置を取得できませんでした。"));     
        break;
      }
    }
#endif
}
 
 
void loop(void)
{
//displayInfo();
//delay(1000);
}
 
void displayInfo()
{
  SerialUSB.print(F("位置: ")); 
  if (gps.location.isValid())
  {
    SerialUSB.print(gps.location.lat(), 6);
    SerialUSB.print(F(","));
    SerialUSB.print(gps.location.lng(), 6);
  }
  else
  {
    SerialUSB.print(F("無効"));
  }
 
  SerialUSB.print(F("  日付/時刻: "));
  if (gps.date.isValid())
  {
    SerialUSB.print(gps.date.month());
    SerialUSB.print(F("/"));
    SerialUSB.print(gps.date.day());
    SerialUSB.print(F("/"));
    SerialUSB.print(gps.date.year());
  }
  else
  {
    SerialUSB.print(F("無効"));
  }
 
  SerialUSB.print(F(" "));
  if (gps.time.isValid())
  {
    if (gps.time.hour() < 10) SerialUSB.print(F("0"));
    SerialUSB.print(gps.time.hour());
    SerialUSB.print(F(":"));
    if (gps.time.minute() < 10) SerialUSB.print(F("0"));
    SerialUSB.print(gps.time.minute());
    SerialUSB.print(F(":"));
    if (gps.time.second() < 10) SerialUSB.print(F("0"));
    SerialUSB.print(gps.time.second());
    SerialUSB.print(F("."));
    if (gps.time.centisecond() < 10) SerialUSB.print(F("0"));
    SerialUSB.print(gps.time.centisecond());
  }
  else
  {
    SerialUSB.print(F("無効"));
  }
 
  SerialUSB.println();
}

```

## 5. 低消費電力

テストの結果、Seeeduino LoRaWAN の最小電流は 80uA です。以下の手順に従ってください。

1. PWR LED を取り外します（この LED を取り外さない場合、電流は > 2mA になります）。
2. CHG LED を取り外します。
3. 以下のコードをボードにアップロードします。

```
#include <LoRaWan.h>
#include <EnergySaving.h>

EnergySaving nrgSave;

void blink()
{
    for(unsigned char i = 0; i < 5; i ++)
    {
        digitalWrite(13,HIGH);
        delay(500);
        digitalWrite(13,LOW);
        delay(500);
    }
}

void setup()
{
    for(unsigned char i = 0; i < 26; i ++)      // 重要: すべてのピンを HIGH に設定して電力を節約
    {
        pinMode(i, OUTPUT);
        digitalWrite(i, HIGH);
    }

    lora.init();
    blink();    
    lora.setDeviceLowPower();
    blink();    
    nrgSave.begin(WAKE_EXT_INTERRUPT, 7, dummy);    // D7 のボタンでボードを起動
    nrgSave.standby();
}

void loop()
{
    blink();
    nrgSave.standby();
}

void dummy(void)
{
    // 何かを実行
}

// END File
```

## 6. ファームウェアの更新

ボードのバージョンを確認したい場合は、以下のコードをボードにアップロードしてください。

```cpp
void setup()
{
    Serial1.begin(9600);
    SerialUSB.begin(115200);
}

void loop()
{
    while(Serial1.available())
    {
        SerialUSB.write(Serial1.read());
    }
    while(SerialUSB.available())
    {
        Serial1.write(SerialUSB.read());
    }
}
```

シリアルモニターを開き、以下を入力してください。

```
AT+VER
```

すると、ボードのバージョンが表示されます。

:::note
    Seeeduino LoRaWAN ボードが AM バージョンの場合、V3 ファームウェアをサポートできません。ファームウェアを 3.0 以上に更新するには DM バージョンが必要です。V3 ファームウェアはサイズが大きすぎるため、AM のフラッシュメモリは容量が不足しています。
:::

![画像をここに入力してください](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/VER.png)

ファームウェアのバージョンが 2.0.10 の場合、ファームウェアを更新するには以下の手順を実行してください。

* ステップ 1. 以下のコードをボードにコピーしてアップロードします。

```c
// RHF76-052AM にファームウェアを更新
#include <Arduino.h>

void setup()
{
    SerialDBG.begin(115200);
    SerialUSB.begin(115200);
}

void loop()
{
    while(SerialDBG.available())
    {
        SerialUSB.write(SerialDBG.read());
    }
    while(SerialUSB.available())
    {
        SerialDBG.write(SerialUSB.read());
    }
}
```

* ステップ 2. ボードを USB から取り外し、再接続します。その後、DFU ボタンを押します。ファームウェアモードの LED が点滅したら次のステップに進みます。

* ステップ 3. 最新のファームウェア（.bin ファイル）をダウンロードします。

[![画像をここに入力してください](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/firmware_bin.png)](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052am-v2.0.10-20160923.ebin%202.bin)

* ステップ 4. PuTTy を開き、ボードに接続します。

![画像をここに入力してください](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/firmware_1.png)

:::tip
    最新の PuTTy は以下からダウンロードできます: [http://www.extraputty.com/download.php](http://www.extraputty.com/download.php)
:::

* ステップ 5. ボードを PuTTy に正常に接続すると、モニターに 'C' という文字が継続的に表示されます。
**Files Transfer > Ymodem > Send** をクリックし、ステップ 4 でダウンロードした .bin ファイルを選択します。

* ステップ 6. 更新が開始されます。
![画像をここに入力してください](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/firmware_4.png)

## FAQ

**Q1: Seeeduino LoRaWANがPCに認識されなくなりました**

**A1:** リセットボタンを素早く2回押してボードを復旧してください。

**Q2：Seeeduino LoRaWANにExamples > LoRaWANがありません**

**A2:** [こちら](https://github.com/SeeedDocument/seeeduino_LoraWan)をクリックして取得してください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/202001246 Seeeduino LoRaWAN Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* [Eagle形式の回路図](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/202001246 Seeeduino LoRaWAN Eagle.zip)
* [Sketchupファイル(3D)](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/Seeeduino LoRaWAN.skp)
* [RHF 76-052のCE認証](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/ce-rhf76-052.pdf)
* [RHF76-052 ファームウェア V2.0.10](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052am-v2.0.10-20160923.ebin 2.bin)
* [RHF76-052 ファームウェア V2.1.16AM](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052am-v2.1.16-20171203.ebin.bin)
* [RHF76-052 ファームウェア V2.1.19AM](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052am-v2.1.19-20180525.ebin.bin)
* [RHF76-052 ファームウェア V3.3.1DM](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052dm-v3.3.1-20180707.ebin(1).bin)
* [RHF76-052 ファームウェア V3.5.13DM](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052dm-v3.5.13-20190916.ebin.bin)
* [RHF76-052AM/DMのデータシート](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf-ds01500_rhf76-052_datasheet_v03.pdf)
* [GPSチップ L70B-M39のデータシート](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/L70B-M39.pdf)
* [Azure IoT Edge LoRaWAN](https://github.com/Azure/iotedge-lorawan-starterkit/)
* [[RHF-PS01709]LoRaWAN クラスABC ATコマンド仕様書](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/AT-Command-Specificationv1.2.pdf)

## プロジェクト

**LoRa IoTea**: 茶畑に適用される自動情報収集システムです。これは、インテリジェント農業情報収集の一部です。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed" width={350} />

## 技術サポートと製品ディスカッション

   <br />
 当社の製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>