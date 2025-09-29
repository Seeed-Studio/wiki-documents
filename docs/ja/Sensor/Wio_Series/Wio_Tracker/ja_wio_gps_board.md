---
title: Wio Tracker - GPS、BT3.0、GSM、Arduino互換
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/wio_gps_board/
slug: /ja/wio_gps_board
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Wio_GPS_Board/images/Wio_GPS_Antanna.jpg)

Wio Trackerとは何ですか？Wio Trackerは、地球上の移動するものを追跡するためのArduino互換の開発ボードです。GSM＆GPRSとGPS＆BeiDouを1つのボードに統合することで、屋外IoTプロジェクトに最適なオールインワンソリューションを提供します。

低消費電力広域ネットワーク（LPWAN）に関する最新ニュースを追っている場合、2016年は特別な年であることをご存じかもしれません。LoRaやSigfoxのような新しい技術が登場し、WANの発展を著しく促進しました。Wio TrackerはLoRaやSigfoxと似た点がありますが、異なる点も多いです。屋外での移動追跡や、高頻度の顧客とのやり取り、中程度のデータ量が必要な状況により適しています。例えば、シェア自転車、物流の位置情報、ペットの追跡などです。

従来のGPS追跡ソリューションと比較して、SeeedのWio Trackerは急速に変化するIoT市場に対応するために、はるかに使いやすくカスタマイズ可能です。ユーザーフレンドリーなGrove開発ボードとして、Wio Trackerの外観はSeeedのもう一つの製品であるWio Linkを思い起こさせるかもしれません。そのため、ボード上には6つのGroveコネクタも見つけることができます。Arduino互換ボードとして、ユーザーはArduino IDEを使用して直接Wio Trackerを利用できます。

Wio Trackerを「ソリューション」と呼ぶ理由は、それが単なるボードではないからです。SeeedStudioでは、顧客が自分のプロジェクトに合わせてWio Trackerをカスタマイズし、量産までプロジェクトを完成させる能力があります。Wio Trackerは量産可能な標準モジュールを使用しているため、顧客がプロトタイピング段階にある場合でも量産の準備が整っています。

私たちはすべてを準備しました。最後に必要なのはあなたの創造的なプロジェクトです。屋外IoT追跡プロジェクトを作成している場合は、ぜひWio Trackerを使用してください！

:::caution
    USB電源供給が十分でない場合に備えて、常に3.7Vリポバッテリーを接続してください。
:::
[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Wio-Tracker-GPS%2C-BT3.0%2C-GSM%2C-Arduino-Compatible-p-2831.html)

## 特徴

* GPSとBeiDouを組み合わせたマルチGNSSエンジン、高精度な位置情報
* EPO™技術により、追加のサーバーを必要とせずに予測された拡張予測軌道を提供し、TTFFを高速化
* EPO™データに基づくQuecFastFix™オンライン機能により、コールドスタート時のTTFFをさらに短縮し、ホットスタート時のTTFFに匹敵
* GLP（GNSS低消費電力）モード、通常モードの40％の消費電力で精度はやや低下
* Periodモード、スリープ時間を制御して消費電力を削減
* Always Locate™技術、電力節約のためのインテリジェントアルゴリズム
* Easy™（埋め込みアシストシステム）技術、自己生成軌道予測による即時位置修正、TTFFを短縮
* LOCUS™技術、ホストや外部フラッシュを必要としないナビゲーションデータロガーソリューション
* ATコマンド：GSM 07.07、07.05および拡張ATコマンド
* Bluetooth 3.0（SPPおよびHFP-AG）
* 6つのGroveコネクタ
* Nano SIMおよびTFカード2-in-1ソケット
* Arduino IDE互換
* 低消費電力と小型サイズ

### Quectel MC20モジュール

* 超コンパクトサイズ：18.7 × 16.0 × 2.1mm
* マルチナビゲーションコンステレーション：GPS/ BeiDou/ QZSS
* GNSS受信チャンネル：99取得/ 33追跡チャンネル
* 強力なAGPS機能：自律AGPS EASY™/ オフラインAGPS EPO™/ オンラインAGPS QuecFastFix
* GNSS感度向上のための内蔵LNA（-167dBm@Tracking）：追加のLNAなしでパッシブGNSSアンテナを使用可能
* 強化されたGNSS機能：SDKコマンド/ AIC/ LOCUS/ GLP
* GSMクワッドバンド：850/900/1800/1900MHz
* マルチインターネットプロトコル：TCP/ UDP/ PPP/ HTTP/ FTP/ SSL
* 音声、SMS、QuecFOTATM、DSSS、OpenCPU対応
* Bluetooth V3.0対応：SPP & HFP-AGプロファイル

:::caution
    ほとんどのArduinoおよびGenuinoボードとは異なり、Wio Trackerは3.3Vで動作します。I/Oピンが耐えられる最大電圧は3.3Vです。3.3Vを超える電圧をI/Oピンに適用すると、ボードが損傷する可能性があります。
:::

## 仕様

| 項目 | 機能 | 値 |
|--------------|-------------------------------------|-------|
| マイクロコントローラー | プロセッサ | ATSAMD21G18A-MU, ARM Cortex-M0+, 48MHz |
|| フラッシュメモリ | 256KB |
|| SRAM | 32KB |
|| 動作電圧 | 3.3V |
|| I/O ピンあたりの直流電流 | 7 mA |
|| クロックスピード | 48 MHz |
| GSM/GPRS | GSM | 850/900/1800/1900MHz, クラス 4 (2W @850/900MHz), クラス 1 (1W @1800/1900MHz) |
||| AT コマンド: GSM 07.07, 07.05 および拡張 AT コマンド |
||| 低消費電力: 1.2mA@DRX=5 |
|| GPRS | GPRS マルチスロットクラス 12: 下り最大 85.6kbps、上り最大 85.6kbps |
||| プロトコル: TCP/UDP/FTP/HTTP/PPP/SSL |
|| SMS | ピアツーピアメッセージ、SMS ブロードキャスト、テキストおよび PDU モード |
|| オーディオ | エコーキャンセル、ノイズ除去 |
|| Bluetooth | Bluetooth 3.0: SPP, HFP-AG |
| GNSS | システム | GPS L1 1575.42MHz, BeiDou B1 1561.10MHz |
|| 精度 | &lt;2.5 m CEP |
|| 技術 | EASY/LOCUS/AlwaysLocate/EPO/GLP/AIC |
| 周辺機器 | Grove | 2 x Grove デジタルポート |
||| 2 x アナログポート |
||| 1 x UART |
||| 1 x I2C |
|| アンテナ | GSM アンテナ |
||| Bluetooth アンテナ |
||| GNSS アンテナ |
|| その他 | USB: 電源供給およびプログラムアップロード |
||| JST 1.0 コネクタ（バッテリー用） |
||| 3.5mm オーディオジャック |
||| GSM 電源ボタン、リセットボタン |
||| 1 x ユーザー RGB LED SK6812 |
||| スピーカーインターフェース |
||| Nano SIM および TF カード 2 in 1 ソケット |
| サイズ | 長さ | 54.7mm |
|| 幅 | 48.2mm |
|| 重量 ||


## アプリケーションアイデア

* インテリジェント交通
* ペットトラッカー
* 屋外スポーツ機器
* ドライブレコーダー
* ウェアラブルデバイス
* 財産セキュリティ


:::tip
    Grove モジュールを使用してアプリケーションを拡張してください
:::
ボード上には 6 つの Grove コネクタがあります。Grove を初めて聞いた場合は、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
簡単に言えば、Grove は標準スタイルのセンサー群で、センサー、アクチュエータ、ディスプレイ、通信モジュールで構成されています。

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/GPS_Tracker/images/GPS_Tracker_v1.2_top.png)

![](https://files.seeedstudio.com/wiki/GPS_Tracker/images/GPS_Tracker_v1.2_bottom.png)


:::tip
    オンボードの Grove コネクタを使用する場合は、digitalWrite(12, HIGH) を使用して 3V3_B をオンにしてください。そうしないと Grove モジュールに電力を供給できません。
:::
## ピンマップ

| ピン名 | 外部割り込み | PWM | アナログ入力 | アナログ出力 | 機能 |
|--------|-----------|---|---------|----------|--------|
| RX      | YES        | YES|         |          | Grove UART |
| TX      | YES        | YES|         |          | Grove UART |
| D2      | YES        | YES|         |          | Grove デジタル |
| D3      | YES        | YES|         |          | Grove デジタル |
| D4      | YES        |   |         |          | Grove デジタル |
| D5      | YES        | YES|         |          | Grove デジタル |
| D6      | YES        |   |         |          | ユーザー LED 制御 |
| D7      | YES        |   |         |          | MC20 の電源 |
| D10     | YES        | YES|         |          | ユーザー LED |
| D11     | YES        | YES|         |          | イヤホンチェック |
| D12     | YES        | YES|         |          | Grove 電源制御 |
| D13     | YES        | YES|         |          | GSM 電源ボタン |
| SDA     | YES        |   |         |          | Grove I2C |
| SCL     | YES        |   |         |          | Grove I2C |
| A0      | YES        |   | YES     |  YES     | Grove アナログ |
| A1      | YES        |   | YES     |  YES     | Grove アナログ |
| A2      | YES        |   | YES     |  YES     | Grove アナログ |
| A3      | YES        |   | YES     |  YES     | Grove アナログ |
| A4      | YES        |   | YES     |          | バッテリーチェック |

:::note
    すべてのピンはデジタル入力および出力として動作可能です
:::

## Arduino IDE - はじめに

:::note
    この章は、Win10とArduino IDE v1.6.0を基にしています。
:::
まず、最新のArduino IDEをインストールし、[Seeeduino SAMDをArduino IDEに追加](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)してください。

### ドライバーのインストール (Windowsの場合)

初めてボードを接続する際、USB COMデバイス名「Wio Tracker」が表示され、ドライバーをインストールする必要があります。[こちら](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/driver.zip)をクリックしてボード用のドライバーをダウンロードしてください。

ドライバーが正常にインストールされたことを確認するには、デバイスマネージャーを開き、**Wio Tracker**が存在するか確認してください。

### Wio Trackerライブラリのインストール (Windows、Linux、Macの場合)

[こちら](https://github.com/Seeed-Studio/Seeed_Wio_GPS_Board/archive/master.zip)をクリックしてWio Trackerのライブラリ(zipファイル)をダウンロードし、Arduino IDEにライブラリをインポートしてください。初めての場合は、[こちら](https://www.arduino.cc/en/Guide/Libraries#toc4)をクリックして詳細情報をご覧ください。

### 点滅 (Blink)

他のボードとは異なり、Wio TrackerにはSK6812というユーザーLEDが搭載されています。これはインテリジェント制御LED光源で、ws2812bに似ています。ここでは、ユーザーLEDの使用方法を紹介する最初のデモ「Blink」をアップロードします。

まず、[Adafruit NeoPixel Library](https://github.com/adafruit/Adafruit_NeoPixel/archive/master.zip)(ws2812b LED用)をインストールし、Arduino IDEにインポートしてください。

次に、Arduino IDEを開き、**File > Examples > MC20_GPS_Traker > Blink**をクリックしてスケッチを開くか、以下のコードをコピーしてください：

```c
#include "MC20_Arduino_Interface.h"
#include <Adafruit_NeoPixel.h>

#define RGBPOWER     6          // ユーザーLEDを使用するには、D6をHIGHにする必要があります。
#define RGBPIN       10
#define LED_NUM      1

Adafruit_NeoPixel pixels = Adafruit_NeoPixel(LED_NUM, RGBPIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pinMode(RGBPOWER, OUTPUT);
  digitalWrite(RGBPOWER, HIGH);
  pixels.begin(); // NeoPixelライブラリを初期化します。
}

void loop() {

  // NeoPixelのセットでは、最初のNeoPixelは0、2番目は1、ピクセル数-1まで続きます。
  // pixels.ColorはRGB値を取り、0,0,0から255,255,255まで設定可能です。
  pixels.setPixelColor(0, pixels.Color(0,0,100)); // 適度に明るい青色。
  pixels.show(); // 更新されたピクセルカラーをハードウェアに送信します。
  delay(1000);   // 1秒待機
  pixels.setPixelColor(0, pixels.Color(0,0,0));   // LEDをオフにします。
  pixels.show();
  delay(1000);
}
```

その後、

* **Tools > Board > Wio Tracker**をクリック
* **Tools > Port**をクリックして正しいポート番号を選択します。(*COM1は選択しないでください*)

次に、Arduino IDEの左上にある**Upload**ボタンをクリックします。数秒後、スケッチが正常にアップロードされます。

アップロードが成功すると、赤い情報が表示され、ユーザーLEDが青色で点滅しているのが確認できます。

### バッテリーの確認

Wio Trackerは屋外で移動する物を追跡するために設計されています。そのため、JST1.0コネクタ付きの3.7Vリポバッテリーでボードに電力を供給し、バッテリーの電圧を簡単に確認できます。

:::caution
    バッテリーの正極と負極が正しく接続されていることを確認してください。そうでない場合、ボードが損傷する可能性があります。
:::
バッテリー状態ピンはA4に接続されており、コードを使用してバッテリーの電圧を測定できます。

Arduino IDEを開き、**File > Examples > MC20_GPS_Traker > Check_Battery**をクリックしてスケッチを開くか、以下のコードをコピーしてください：

```c
#include "MC20_Arduino_Interface.h"

const int pin_battery_voltage = A4;

void setup() {
    SerialUSB.begin(115200);
}

void loop() {

    int a = analogRead(pin_battery_voltage);
    float v = a/1023.0*3.3*2.0;        // 10Mと10Mの抵抗分圧があります。
    SerialUSB.print("バッテリーの電圧は ");
    SerialUSB.print(v, 2);
    SerialUSB.println(" Vです");
    delay(1000);
}
```

### Groveモジュールを使用してアプリケーションを拡張する

Wio Trackerの6つのGroveコネクタを使用するには、`digitalWrite(12, HIGH)`を使用して3V3_Bをオンにし、Groveモジュールに電力を供給する必要があります(D12は消費を減らすためにデフォルトでLOWです)。

* 以下のコードは、アナログおよびデジタルGroveモジュールの使用方法を示しています：

Arduino IDEを開き、**File > Examples > MC20_GPS_Traker > Button_LightSensor**をクリックしてスケッチを開くか、以下のコードをコピーしてください：

```c
#include "MC20_Arduino_Interface.h"

#define GrovePowerPin   12
#define LightSensorPin  A0
#define ButtonPin       2


void setup() {
  SerialUSB.begin(115200);
  pinMode(ButtonPin, INPUT);
  pinMode(GrovePowerPin, OUTPUT);
  // Grove電源ピンにHIGHを書き込んで全てのGroveポートを有効化します。
  // そうしない場合、Grove D2ポートのみ使用可能です。
  digitalWrite(GrovePowerPin, HIGH);   
}

void loop() {
    // ボタンが押されたときにアナログデータを出力します。
    if (digitalRead(ButtonPin)) {
        SerialUSB.print("光センサーの値：");
        SerialUSB.println(analogRead(LightSensorPin));
    }
    delay(500);
}   
```

* 以下のコードは、Grove UARTポートの使用方法を示しています：

```c
#define GrovePowerPin   12

void setup() {
  pinMode(GrovePowerPin, OUTPUT);
  digitalWrite(GrovePowerPin, HIGH);    // Groveに電力を供給
  //SerialUSB.begin(115200);
  SerialDBG.begin(115200);    // Grove UARTのボーレートを115200に設定
}

void loop() {  
  //SerialUSB.println("Grove UARTがメッセージを送信しています");
  SerialDBG.println("これはGrove UARTです");
  delay(1000);
}
```

Grove UARTポートのデータを読み取るには、[USB To Uart](https://www.seeedstudio.com/USB-To-Uart-5V%263V3-p-1832.html)を使用してください。

:::caution
    コード内でSerialUSBとSerialDBGの両方を使用する場合、使用時にSerialUSBのCOMポートを開いてください。そうしないとSerialDBGが動作しません。
:::

### GNSS

MC20モジュールは、GSM/GPRS、GNSS、Bluetoothモジュールと通信するためのATコマンドセットを提供します。

また、Wio GPS用に優れたライブラリがインストールされており、簡単なアプリケーションでは複雑で読みづらいATコマンドの使用方法を詳しく知る必要はありません。

以下の例では、経度と緯度を読み取り、シリアルモニターに出力する方法を示しています。なお、Wio TrackerはGPS信号を受信するために屋外に設置する必要があります。また、この例ではWio TrackerにSIMカードが必要です。以下の画像はSIMカードの取り付け/取り外し方法を示しています：

![](https://files.seeedstudio.com/wiki/Wio_GPS_Board/images/insertsim.jpg)

![](https://files.seeedstudio.com/wiki/Wio_GPS_Board/images/pullsim.jpg)

Arduino IDEを開き、**File > Examples > MC20_GPS_Traker > MC20_GNSS > GNSS_Show_Coordinate**をクリックしてスケッチを開くか、以下のコードをコピーしてください：

```c
#include "MC20_Common.h"
#include "MC20_Arduino_Interface.h"
#include "MC20_GNSS.h"


GNSS gnss = GNSS();

void setup() {
  SerialUSB.begin(115200);
  // while(!SerialUSB);

  gnss.Power_On();
  SerialUSB.println("\n\rPower On!");

  while(!gnss.open_GNSS()){
    delay(1000);
  }

  SerialUSB.println("Open GNSS OK.");
}

void loop() {
  // gnss.dataFlowMode();

  if(gnss.getCoordinate()){
    SerialUSB.print("GNSS: ");
    SerialUSB.print(gnss.longitude, 6);
    SerialUSB.print(",");
    SerialUSB.println(gnss.latitude, 6);  
  } else{
    SerialUSB.println("Error!");
  }

  delay(1000);
}
```

### SMSメッセージの読み取り

以下の例では、Wio TrackerでSMSメッセージを読み取る方法を示しています。この例ではNano SIMカードが必要です。

Arduino IDEを開き、**File > Examples > MC20_GPS_Traker > MC20_SMSRead**をクリックしてスケッチを開くか、以下のコードをコピーしてください：

```c
#include "MC20_Common.h"
#include "MC20_Arduino_Interface.h"

#define RGBPIN 10

char phone[32];
char dateTime[32];
char buffer[64];
int i = 0;
char *s = NULL;
int inComing = 0;

GPSTracker gpsTracker = GPSTracker();

void setup() {
  // MC20_init();
  pinMode(RGBPIN, OUTPUT);
  digitalWrite(RGBPIN, LOW);
  SerialUSB.begin(115200);
  // while(!SerialUSB);

  gpsTracker.Power_On();
  SerialUSB.println("Power On!");

  // gpsTracker.deleteSMS(1);

}

void loop() {

  if(MC20_check_readable()){
    inComing = 1;
  }else{
    delay(1000);
  }

  if(1 == inComing){
    MC20_read_buffer(buffer, 64);
    SerialUSB.println(buffer);

    if(NULL != (s = strstr(buffer,"+CMTI: \"SM\""))) { //SMS: $$+CMTI: "SM",24$$
        char message[128];
        int messageIndex = atoi(s+12);
        gpsTracker.readSMS(messageIndex, message,128);
        SerialUSB.print("Recv SMS: ");
        SerialUSB.println(message);
     }
     MC20_clean_buffer(buffer,64);  
     inComing = 0;
  }

}
```

### Bluetooth接続

Wio TrackerでBluetoothデバイスに接続するのも非常に簡単です。Arduino IDEを開き、**File > Examples > MC20_GPS_Traker > MC20_BlueTooth > BT_FastConnect**をクリックしてスケッチを開くか、以下のコードをコピーしてください。

その後、BluetoothデバイスのdeviceNameを変更すると、Wio Trackerが自動的に接続します。

```c
#include "MC20_Common.h"
#include "MC20_BT.h"

// GPSTracker gpsTracker = GPSTracker();
BlueTooth bt = BlueTooth();
int bt_state = -1;
char *deviceName = "N-612";


void setup() {
  SerialUSB.begin(115200);
  while(!SerialUSB);

  bt.Power_On();
  SerialUSB.println("\n\rMC20 power On!");
  bt.BTPowerOn();
  SerialUSB.println("\n\rBT power On!");

  while(IDLE != (bt_state = bt.getBTState())){
    SerialUSB.print("State: ");
    SerialUSB.println(bt_state);
    delay(1000);
  }

  bt.BTFastConnect(deviceName, HFG_PROFILE);
}

void loop() {
  /* Debug */
  if(SerialUSB.available()){
    serialMC20.write(SerialUSB.read());
  }
  if(serialMC20.available()){     
    SerialUSB.write(serialMC20.read());
  }
}
```

### SDカード

- **ステップ1.** SDカードをWio GPSボードに挿入します。
- **ステップ2.** USBケーブルを使用してWio GPSボードをPCに接続します。
- **ステップ3.** Arduino IDEを開き、**Tools** -> **Board** -> **Wio GPS board**を選択します。
- **ステップ4.** **File > Examples > Seeed_Wio_GPS_Board\SD_Card_Test_DumpFile**をクリックしてスケッチを開くか、以下のコードをコピーしてください。
- **ステップ5.** コードをWio GPSボードにアップロードすると、SDライブラリを使用してSDカードからファイルを読み取り、シリアルポートに送信する方法が示されます。

```cpp
/*
  SDカードファイルダンプ

 この例では、SDライブラリを使用してSDカードからファイルを読み取り、
 シリアルポートに送信する方法を示します。

 回路:
 * SDカードを以下のようにSPIバスに接続:
 ** MOSI - ピン11
 ** MISO - ピン12
 ** CLK - ピン13
 ** CS - ピン4 (MKRZero SDの場合: SDCARD_SS_PIN)

 作成日: 2010年12月22日
 作成者: Limor Fried
 修正日: 2012年4月9日
 修正者: Tom Igoe

 この例のコードはパブリックドメインです。

 */

#include <SPI.h>
#include <SD.h>

const int chipSelect = 4;
char* fileName = "gps.txt";

void setup() {
  // シリアル通信を開始し、ポートが開くのを待つ:
  SerialUSB.begin(115200);
  while (!SerialUSB) {
    ; // serialUSBポートが接続されるのを待つ。ネイティブUSBポートのみ必要
  }


  SerialUSB.print("SDカードを初期化しています...");

  // カードが存在し、初期化できるか確認:
  if (!SD.begin(chipSelect)) {
    SerialUSB.println("カードが失敗したか、存在しません");
    // これ以上何もしない:
    return;
  }
  SerialUSB.println("カードが初期化されました。");

  // ファイルを開きます。注意: 一度に開けるファイルは1つだけです。
  // 別のファイルを開く前にこのファイルを閉じる必要があります。
  File dataFile = SD.open(fileName);

  // ファイルが利用可能な場合、内容を読み取ります:
  if (dataFile) {
    while (dataFile.available()) {
      SerialUSB.write(dataFile.read());
    }
    dataFile.close();
  }
  // ファイルが開けない場合、エラーを表示:
  else {
    SerialUSB.println("datalog.txtのオープンエラー");
  }
}

void loop() {
}
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GPS_Tracker/resources/GPS_Tracker_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース

* [Eagleでの回路図](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/GPS_Tracker_Eagle.zip)
* [Sketchupファイル(3D)](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/GPS_Tracker.skp)
* [GSM Bluetooth アプリケーションノート](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_GSM_BT_Application_Note_V1.2(C).pdf)
* [GSMファイル ATコマンドマニュアル](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_GSM_FILE_AT_Commands_Manual_V1.5.pdf)
* [MC20 ATコマンドマニュアル](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_MC20_AT_Commands_Manual_V1.1.pdf)
* [MC20 GNSS AGPS アプリケーションガイド](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_MC20_GNSS_AGPS_ApplicationGuide_V1.1.pdf)
* [MC20 GNSS ATコマンドマニュアル](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_MC20_GNSS_AT_Commands_Manual_V1.1.pdf)
* [MC20 GNSS プロトコル仕様書](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_MC20_GNSS_Protocol_Specification_V1.0.pdf)

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

## 技術サポート & 製品ディスカッション

技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>