---
description: WireLess_Gate_Shield_V1.0
title: WireLess Gate Shield V1.0

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/WireLess_Gate_Shield_V1.0
last_update:
  date: 05/15/2025
  author: Eico 

no_comments: false # for Disqus

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WireLess_Gate_Shield_V1.0/img/WLG_h.jpg" alt="pir" width={600} height="auto" /></p>

WireLess Gate Shieldは、さまざまな無線コマンドやデータの受信・送信・ブロードキャストシステムを構築するために設計されたArduino互換の拡張カードです。最大限の通信範囲を実現するために、ボードには人気のあるトランシーバーnRF24L01+およびRFM69HWを接続するためのIR受信インターフェースが搭載されています。さらに、ボードにはリアルタイムクロックモジュールDS1307が搭載されています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WireLess_Gate_Shield_V1.0/img/WLG_intro.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/WireLess-Gate-Shield-p-2117.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

---

* トランシーバー315/433/868/915 MHz（バージョンによる）[RFM69HW](http://devicter.ru/goods/RFM69HW-RF-transceiver)を接続するためのインターフェース
* 2.4 GHzトランシーバー[nRF24L01+](https://www.seeedstudio.com/depot/s/nRF24L01.html?search_in_description=0)を接続するためのインターフェース
* IR受信機
* バッテリーバックアップ付きのDS1307ベースのリアルタイムクロックモジュール
* ラジオモジュールの自動アクティビティLED
* ユーザー用LED
* クロック操作用ボタン
* [GROVE](https://www.seeedstudio.com/depot/Grove-t-3.html?ref=top)互換コネクタ：I2C
* [Ethernet Shield](https://www.seeedstudio.com/depot/W5200-Ethernet-Shield-p-1577.html)と完全互換

## レイアウトと回路図

---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WireLess_Gate_Shield_V1.0/img/Wl-top.png" alt="pir" width={600} height="auto" /></p>

WireLess Gate Shieldの左側には無線モジュール用のインターフェースがあります：

* nRF24L01+（上部）、拡張版（"PA"）を含む
* RFM69HW（下部）

無線モジュールの間には、RFM69HW用の外部アンテナ用U.FLコネクタがあります。通常のアンテナ（適切な長さのワイヤー）を使用する場合は、U.FLコネクタ付近のボードに直接はんだ付けすることが可能です。

モジュールの右側やや上には、RFM69HW用のLED LED1「RF433」があります。

ボードの中央部分には、クロックモジュールDS1307用のバックアップバッテリースロットがあります。

バッテリースロットの右側やや下には、I2Cコネクタがあります。

右側には（上から下へ）：

* LED LED2「RF24」
* IR受信機
* LED LED3 - ユーザー用
* クロックボタン S1

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WireLess_Gate_Shield_V1.0/img/Wl-Scheme.PNG" alt="pir" width={600} height="auto" /></p>

## 基本機能

---
基本バージョン（Ethernet Shieldを使用しない場合）では、ラジオとIR受信機間で無線ゲートウェイを構築することができます。

コマンド（またはデータ）は、ユーザーがプログラムしたロジックに従って、3つの無線インターフェース間でブロードキャストすることができます。

リアルタイムクロックモジュールの存在により、日付/時刻に基づいて任意のデータやコマンドの送信を自動化することができます。

デバイス管理は、Shield上に配置されたボタンを使用して組織化することができます。

## 拡張機能

---
さらに、WireLess Gate Shield は、Grove 互換の接続を使用して任意の i2c デバイス（センサー、ディスプレイなど）を接続することができます。

WireLess Gate Shield は [Ethernet Shield](https://www.seeedstudio.com/depot/W5200-Ethernet-Shield-p-1577.html) と完全に互換性があるように設計されています。そのため、これらを組み合わせて使用することで、さらに高度なワイヤレス制御デバイスを作成できます（SD カードへのログ記録やウェブページでのデータ表示、ウェブ経由でのワイヤレスデバイス管理など）。

## インターフェース

---

* RF モジュール nRF24L01+ 用インターフェース:
  * D11 - MOSI
  * D12 - MISO
  * D13 - SCK
  * D7 - RF24_CE
  * D8 - RF24_CSN
  * D2 - RF24_IRQ

* RF モジュール RFM69HW 用インターフェース:
  * D11 - MOSI
  * D12 - MISO
  * D13 - SCK
  * D9 - RF433_NSS
  * A0 - RF433_RESET
  * D3 - RF433_IRQ

* A4 (SDA), A5 (SCL) - コネクタ "I2C" に表示（コネクタ内の他の 2 つのピンはセンサー供給用の VCC と GND）
* A4 (SDA), A5 (SCL) - RTC DS1307 と並列で使用
* A1 - ボタン
* D6 - カスタム LED (LED3)

## WireLess Gate Shield の特徴

---

### ワイヤレスモジュール

ワイヤレスモジュール RFM69HW と nRF24L01+ は、どちらもハードウェアバス SPI に接続されています。

特定のワイヤレスモジュールを選択するには、対応するチップセレクトピンに低電位を設定します：

* モジュール nRF24L01+ の場合は CSN (D8)
* モジュール RFM69HW の場合は NSS (D9)

_「警告」：RFM69HW がインストールされているがソフトウェアで使用されていない場合、このモジュールの NSS ピンを HIGH 状態に設定してください（そうしないと、nRF24L01+ や Ethernet Shield の正常な動作を妨げる可能性があります）。_

### ワイヤレスモジュールの自動表示

ワイヤレスモジュールの LED 表示は以下のように実装されています：

* LED1 "RF24" のカソードはモジュール nRF24L01+ のピン CSN (D8) に接続され、LED のアノード（電流制限抵抗を介して）は SPI バスのピン SCK (D13) に接続されています。
* LED2 "RF433" のカソードはモジュール RFM69HW のピン NSS (D9) に接続され、LED のアノード（電流制限抵抗を介して）は SPI バスのピン SCK (D13) に接続されています。

無線がアクティブでない場合、対応するチップセレクトピン（CSN および NSS）には高電位があり、SCK ピンにクロック信号が現れても LED は点灯しません。
一方、MC が任意のワイヤレスモジュールと通信する場合、対応するピン（CSN および NSS）に低電位が設定され、SCK ピンにタイミングパルスが現れると対応する LED が点灯します。

したがって、モジュールの動作を示すために MC 上で追加のプログラミング作業を行う必要はありません。

### 特徴

必要に応じて、SMD-LED を通常の外部 LED に置き換えることができます（例：ディスプレイ付きのケースに組み込む場合など）。

* 基板には対応する LED の近くに端子をはんだ付けできるスペースがあります（または適切なケーブルを接続できます）。
* 電流制限抵抗は基板上にあります（外部 LED 用の直列抵抗は不要です）。
* 外部 LED を設定する場合、基板上の SMD-LED を取り外す必要があります。

### 赤外線による制御への改造

カスタム LED を LED3 ピンの赤外線 LED に置き換えることで、WireLess Gate Shield の使用範囲をさらに拡張できます（例：任意のワイヤレスインターフェースまたは LAN を介して送信されたコマンドで、赤外線コマンドを使用してデバイスを制御する）。

## ライブラリ

### 必要なライブラリ

WireLess Gate Shield を使用するには、以下のライブラリが必要です：

* トランシーバ nRF24L01 + 用 - [RF24](https://github.com/maniacbug/RF24/archive/master.zip)

* トランシーバ RFM69HW 用 - [RFM69](https://github.com/LowPowerLab/RFM69/archive/master.zip)

* リアルタイムクロック (RTC) 用 - [RTClib](https://github.com/adafruit/RTClib/archive/master.zip)

* IR受信機用 - [IRremote](https://github.com/shirriff/Arduino-IRremote/archive/master.zip)

さらに、RF24 と LCDディスプレイを使用する際に必要なライブラリ：

* SPI

これらのライブラリには、動作を理解するためのサンプルが含まれています。

### ライブラリ使用の特徴

**NRF24l01 +**

nRF24l01 + モジュールの初期化は以下のように行います：

```cpp
//RF24 radio(CE,CSN);
RF24 radio(7,8);
```

**RFM69HW**

ワイヤレスモジュール RFM69HW を使用するには、RFM69.h ファイルに以下のような軽微な修正を加える必要があります：

ファイルの冒頭で以下の行を見つけます：

```cpp
#define SPI_CS               SS // SSはSPIスレーブセレクトピン、例えばatmega328ではD10
#define RF69_IRQ_PIN          2 // INT0はAVRでDIO0に接続する必要があります（例：Atmega328ではD2）
```

これを以下のように置き換えます：

```cpp
//#define SPI_CS               SS // SSはSPIスレーブセレクトピン、例えばatmega328ではD10
//#define RF69_IRQ_PIN          2 // INT0はAVRでDIO0に接続する必要があります（例：Atmega328ではD2）
#define SPI_CS               9 // SSはWireLess Gate Shield用のスレーブセレクトピン - D9
#define RF69_IRQ_PIN          3 // INT1はAVRでDIO0に接続する必要があります（例：Atmega328ではD3）
```

さらに、RFM69.cpp ファイルで以下の行を見つけます：

```cpp
void RFM69::isr0() { selfPointer->interruptHandler(); }
```

これを以下のように置き換えます：

```cpp
//void RFM69::isr0() { selfPointer->interruptHandler(); }
void RFM69::isr1() { selfPointer->interruptHandler(); }
```

RFM69HW モジュールの初期化は以下のように行います：

```cpp
  resetRFM69();
  radio.setCS(9); // NSS - D9
  radio.initialize(FREQUENCY,NODEID,NETWORKID);
```

_注意:_ RFM69HW の動作はそのレジスタの状態によって決まります。特定のエンドポイントに必要な設定は、RFM69.cpp ファイル内の RFM69::initialize 関数で行います。レジスタの目的をよりよく理解するために、RFM69registers.h ファイル（ライブラリに含まれています）および [RFM69HW のドキュメント](http://st.devicter.ru/9/1115/243/RFM69HW.pdf) を参照してください。

## デモンストレーション

### WireLess Gate Shield を使用したメインユニットのコード (RTC、IR、RFM69HW、nRF24l01 + を使用)

* RFM69HW に構造体を送信し、応答を受信します（ピンポン動作）。
* nRF24l01 + をリッスンし、適切なパッケージが来た場合はモニターに出力します。
* IR受信機を介してコマンドを受信し（認識されたコマンドはモニターに表示されます）、カスタムLEDを点灯します。

すべての結果はシリアルモニターに表示されます。

```cpp
#include <RFM69.h>
#include <SPI.h>
#include "RF24.h"
#include <IRremote.h>
#include <Wire.h>
#include "RTClib.h"

RF24 radio24(7,8);

RTC_DS1307 RTC;

int RECV_PIN = 5;

IRrecv irrecv(RECV_PIN);

decode_results results;

// 値を送信するためのフレームワークを作成
typedef struct{
    int SensorID;        // センサーID
    int CommandTo;       // コマンドモジュール番号 ...
    int Command;         // コマンド
    // 0 - 応答
    // 1 - 値を取得
    // 2 - 値を設定
    int ParamID;         // パラメータ識別子
    float ParamValue;    // 値
    boolean Status;      // ステータス
    // 0 - 読み取り専用 (RO)
    // 1 - 変更可能 (RW)
    char Comment[16];    // コメント
}
Message;

Message sensor;

const uint64_t pipes[2] = {
0xF0F0F0F0E1LL, 0xF0F0F0F0D2LL };

volatile boolean waitRF24 = false;

#define NODEID      99
#define NETWORKID   100
#define GATEWAYID   1
#define FREQUENCY   RF69_433MHZ // Moteinoのバージョンに合わせてください！（他の例：RF69_433MHZ, RF69_868MHZ）
#define KEY         "thisIsEncryptKey" // すべてのノードで同じ16文字/バイトである必要があります。それ以上でもそれ以下でもありません！
#define LED         6
#define SERIAL_BAUD 115200
#define ACK_TIME    30  // ACKを待つ時間（ミリ秒）

#define RFM69_RESET 14  //A0
#define RFM69_NSS 9
#define RFM69_DIO0 3

#define BUTTON 15 // A1

#define MOSI 11
#define MISO 12
#define SCK 13

int TRANSMITPERIOD = 500; // ゲートウェイにパケットを送信する頻度（ミリ秒）
byte sendSize=0;
boolean requestACK = false;
RFM69 radio;

int delta=2000;

unsigned long blinkStop;
unsigned long timeReady;

typedef struct {
    int           nodeId; // このノードIDを格納
    unsigned long uptime; // 稼働時間（ミリ秒）
    float         temp;   // 温度（例）
}
Payload;
Payload theData;

void setup() {
    Serial.begin(SERIAL_BAUD);

    pinMode(LED, OUTPUT);

    pinMode(RFM69_NSS, OUTPUT);
    pinMode(7, OUTPUT);
    pinMode(8, OUTPUT);
    pinMode(MOSI, OUTPUT);
    pinMode(MISO, INPUT);
    pinMode(SCK, OUTPUT);

    pinMode(RFM69_RESET, OUTPUT);
    pinMode(RFM69_DIO0, INPUT);

    pinMode(BUTTON, INPUT);

    digitalWrite(RFM69_NSS, HIGH);
    digitalWrite(7, HIGH);

    resetRFM69();
    radio.setCS(RFM69_NSS);
    radio.initialize(FREQUENCY,NODEID,NETWORKID);

    //radio.setHighPower(); // RFM69HW用の場合のみコメントを解除！

    radio.encrypt(KEY);
    char buff[50];
    sprintf(buff, "\nTransmitting at %d Mhz...", FREQUENCY==RF69_433MHZ ? 433 : FREQUENCY==RF69_868MHZ ? 868 : 915);
    Serial.println(buff);

    radio24.begin();
    // オプションで、リトライ間の遅延とリトライ回数を増やす
    radio24.setRetries(15,15);
    radio24.setChannel(119);
    // デフォルトでリッスン
    radio24.openWritingPipe(pipes[1]);
    radio24.openReadingPipe(1,pipes[0]);
    radio24.startListening();

    delay(20);

    attachInterrupt(0, isr_RF24, FALLING);

    irrecv.enableIRIn();

    Wire.begin();
    RTC.begin();

    if (! RTC.isrunning()) {
        Serial.println("RTCは動作していません！");
        // 以下の行は、このスケッチがコンパイルされた日時にRTCを設定します
        RTC.adjust(DateTime(__DATE__, __TIME__));
    }
}

long lastPeriod = -1;
void loop() {

    // 受信したパケットを確認
    if (radio.receiveDone())
    {
        Serial.print('[');
        Serial.print(radio.SENDERID, DEC);
        Serial.print("] ");
        for (byte i = 0; i < radio.DATALEN; i++)
        Serial.print((char)radio.DATA[i]);
        Serial.print("   [RX_RSSI:");
        Serial.print(radio.readRSSI());
        Serial.print("]");

        if (radio.ACK_REQUESTED)
        {
            radio.sendACK();
            Serial.print(" - ACK送信済み");
            delay(10);
        }
        Serial.println();
    }

    int currPeriod = millis()/TRANSMITPERIOD;
    if (currPeriod != lastPeriod)
    {
        // 構造体に新しい値を入力
        theData.nodeId = NODEID;
        theData.uptime = millis();
        theData.temp = radio.readTemperature();//91.23; // 暑い！

        Serial.print("構造体を送信中 (");
        Serial.print(sizeof(theData));
        Serial.print(" バイト) ... ");
        if (radio.sendWithRetry(GATEWAYID, (const void*)(&theData), sizeof(theData)))
        Serial.print(" 成功！");
        else Serial.print(" 失敗...");
        Serial.println();
        lastPeriod=currPeriod;
    }

    listenRF24();

    if (irrecv.decode(&results)) {
        Serial.println(results.value, HEX);
        irrecv.resume(); // 次の値を受信
        blinkStop=millis()+100;
        digitalWrite(LED, HIGH);
    }

    if (digitalRead(BUTTON)==LOW) {
        blinkStop=millis()+1000;
        digitalWrite(LED, HIGH);
    }

    if (millis()>blinkStop) {
        digitalWrite(LED, LOW);
    }

    if(millis()>timeReady){
        timeReady=millis()+2000;
        DateTime now = RTC.now();

        Serial.print(now.year(), DEC);
        Serial.print('/');
        Serial.print(now.month(), DEC);
        Serial.print('/');
        Serial.print(now.day(), DEC);
        Serial.print(' ');
        Serial.print(now.hour(), DEC);
        Serial.print(':');
        Serial.print(now.minute(), DEC);
        Serial.print(':');
        Serial.print(now.second(), DEC);
        Serial.println();
    }
}

void Blink(byte PIN, int DELAY_MS)
{
    pinMode(PIN, OUTPUT);
    digitalWrite(PIN,HIGH);
    delay(DELAY_MS);
    digitalWrite(PIN,LOW);
}

void resetRFM69(){
    digitalWrite(RFM69_RESET, HIGH);
    delay(1);
    digitalWrite(RFM69_RESET, LOW);
    delay(10);
}

void isr_RF24(){
    waitRF24 = true;
}

void listenRF24() {
    if (waitRF24) {
        waitRF24 = false;
        if ( radio24.available() )
        {
            bool done = false;
            while (!done)
            {
                done = radio24.read( &sensor, sizeof(sensor) );
                if(sensor.Command == 0) {
                    Serial.print(sensor.SensorID);
                    Serial.print("  ");
                    Serial.print(sensor.ParamID);
                    Serial.print("  ");
                    Serial.print(sensor.ParamValue);
                    Serial.print(" ");
                    Serial.println(sensor.Comment);
                }
            }
        }
    }
}
```

### 「受信機」のコード（テストでは Arduino Nano とブレッドボード上の RFM69HW モジュールを使用）

* RFM69HW の構造を使用
* 受信を担当
* RFM69HW モジュール（レジスタなど）に関する追加情報を出力

```cpp
#include <RFM69.h>
#include <SPI.h>

#define NODEID      1
#define NETWORKID   100
#define FREQUENCY   RF69_433MHZ //Moteino のバージョンに合わせて設定してください！（他の選択肢: RF69_433MHZ, RF69_868MHZ）
#define KEY         "thisIsEncryptKey" //すべてのノードで同じ16文字/バイトである必要があります。それ以上でも以下でもありません！
#define LED         6
#define SERIAL_BAUD 115200
#define ACK_TIME    30  // ACK を待つ時間（ミリ秒）

#define RFM69_RESET 14

RFM69 radio;
bool promiscuousMode = false; //ネットワーク内のすべてのパケットをスニッフィングする場合は 'true' に設定

typedef struct {
    int           nodeId; //この nodeId を格納
    unsigned long uptime; //稼働時間（ミリ秒）
    float         temp;   //温度（仮）
} Payload;
Payload theData;

void setup() {
    Serial.begin(SERIAL_BAUD);
    pinMode(RFM69_RESET, OUTPUT);
    pinMode(3, INPUT);
    resetRFM69();
    radio.setCS(9);
    //delay(10);
    radio.initialize(FREQUENCY,NODEID,NETWORKID);

    //radio.setHighPower(); //RFM69HW の場合のみコメントを解除してください！

    radio.encrypt(KEY);
    radio.promiscuous(promiscuousMode);
    char buff[50];
    sprintf(buff, "\nListening at %d Mhz...", FREQUENCY==RF69_433MHZ ? 433 : FREQUENCY==RF69_868MHZ ? 868 : 915);
    Serial.println(buff);
}

byte ackCount=0;
void loop() {
    //シリアル入力を処理
    if (Serial.available() > 0)
    {
        char input = Serial.read();
        if (input == 'r') //r=すべてのレジスタ値をダンプ
        radio.readAllRegs();
        if (input == 'E') //E=暗号化を有効化
        radio.encrypt(KEY);
        if (input == 'e') //e=暗号化を無効化
        radio.encrypt(null);
        if (input == 'p')
        {
            promiscuousMode = !promiscuousMode;
            radio.promiscuous(promiscuousMode);
            Serial.print("Promiscuous mode ");Serial.println(promiscuousMode ? "on" : "off");
        }

        if (input == 'd') //d=フラッシュ領域をダンプ
        {
            Serial.println("Flash content:");
            int counter = 0;

            while(counter<=256){
                //Serial.print(flash.readByte(counter++), HEX);
                Serial.print('.');
            }
            //while(flash.busy());
            Serial.println();
        }
        if (input == 'D')
        {
            Serial.print("Deleting Flash chip content... ");
            //flash.chipErase();
            //while(flash.busy());
            Serial.println("DONE");
        }
        if (input == 'i')
        {
            Serial.print("DeviceID: ");
            //word jedecid = flash.readDeviceId();
            //Serial.println(jedecid, HEX);
        }
    }

    if (radio.receiveDone())
    {
        Serial.print('[');Serial.print(radio.SENDERID, DEC);Serial.print("] ");
        Serial.print(" [RX_RSSI:");Serial.print(radio.readRSSI());Serial.print("]");
        if (promiscuousMode)
        {
            Serial.print("to [");Serial.print(radio.TARGETID, DEC);Serial.print("] ");
        }

        if (radio.DATALEN != sizeof(Payload))
        Serial.print("Invalid payload received, not matching Payload struct!");
        else
        {
            theData = *(Payload*)radio.DATA; //radio.DATA が実際に構造体を含んでいると仮定
            Serial.print(" nodeId=");
            Serial.print(theData.nodeId);
            Serial.print(" uptime=");
            Serial.print(theData.uptime);
            Serial.print(" temp=");
            Serial.print(theData.temp);
        }

        if (radio.ACK_REQUESTED)
        {
            byte theNodeID = radio.SENDERID;
            radio.sendACK();
            Serial.print(" - ACK sent.");

            // ノードが ACK を要求した場合、ACK に応答
            // また、ACK を要求するパケットを送信（3回に1回のみ）
            // これにより、ゲートウェイで TX/RX ノード機能の両方がテストされる
            if (ackCount++%3==0)
            {
                Serial.print(" Pinging node ");
                Serial.print(theNodeID);
                Serial.print(" - ACK...");
                delay(3); //受信直後に送信する場合に必要
                if (radio.sendWithRetry(theNodeID, "ACK TEST", 8, 0))  // 0 = 1回のみ試行、再試行なし
                Serial.print("ok!");
                else Serial.print("nothing");
            }
        }
        Serial.println();
        Blink(LED,3);
    }
}

void Blink(byte PIN, int DELAY_MS)
{
    pinMode(PIN, OUTPUT);
    digitalWrite(PIN,HIGH);
    delay(DELAY_MS);
    digitalWrite(PIN,LOW);
}

void resetRFM69(){
    digitalWrite(RFM69_RESET, HIGH);
    delay(1);
    digitalWrite(RFM69_RESET, LOW);
    delay(10);
}
```

## 製品バージョン

| リビジョン | 説明 | リリース日 |
|------------|------|------------|
| 0.9 | 試作版 | 2014年5月5日 |
| 1.0 | 公開バージョン | 2014年7月5日 |

## アプリケーション

* ユニバーサルワイヤレスゲートウェイ RF2.4 GHz (nRF24l01 +)、RF433 MHz (RFM69HW)、IRおよびLAN (Ethernet Shieldを使用)
* システムコマンドとデータのワイヤレスデバイスのログ記録 (Ethernet Shieldを使用)
* 特定の時間にさまざまなワイヤレスコマンドを管理するための設計と構築 (例: 「2014年8月23日18:02にライトをオンにする」または「毎日5:00に自動灌漑をオンにする」)

## 質問と回答

* Blog WireLess Gate Shield RU

* サポートメール support@devicter.ru で質問を送信

## 購入方法

この製品は以下で購入できます：

中国 (世界中に配送)

[Elecrowストア](http://www.elecrow.com/wireless-gate-shield-p-1139.html)

[Seeedストア](https://www.seeedstudio.com/depot/wireless-gate-shield.html)

ロシア

[Devicterストア](http://devicter.ru/goods/WireLess-Gate-Shield)

## リンク

* [RFM69HWの説明](http://st.devicter.ru/9/1115/243/RFM69HW.pdf)

* [nRF24l01+の説明](ftp://imall.iteadstudio.com/Modules/IM120606002_nRF24L01_module/DS_nRF24L01.pdf)

* [デバイスの回路図](http://wiki.devicter.ru/images/c/c7/Wl-Scheme.PNG)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様の製品体験がスムーズになるよう、さまざまなサポートを提供しています。異なるニーズや好みに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>