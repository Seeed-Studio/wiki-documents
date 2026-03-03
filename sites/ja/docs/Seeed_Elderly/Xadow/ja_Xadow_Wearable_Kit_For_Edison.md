---
description: Xadow Wearable Kit For Edison
title: Xadow Wearable Kit For Edison
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_Wearable_Kit_For_Edison
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison02.png)

Xadow Wearable Kit For Edisonは、Intel Edisonを使用してウェアラブルデバイスを作成するための完璧なキットです。このキットには、Xadow-Edisonという名前のEdison拡張ボードと、非常に小型の8つのモジュールが含まれています。これらのモジュールはセンサー、アクチュエーター、UI通信モジュールです。柔軟なFFCを使用して接続することで、興味深くクールなウェアラブルデバイスを迅速に作成できます。ただし、Intel Edisonと2本のUSBケーブルは別途用意する必要があります。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Wearable-Kit-For-Intel%C2%AE-Edison-p-2428.html)

## パーツリスト

<table>
  <tbody><tr>
      <th> パーツ </th>
      <th> 数量 </th>
      <th> パーツ </th>
      <th> 数量 </th>
    </tr>
    <tr>
      <td> Xadow - Edison </td>
      <td> 1 </td>
      <td> Xadow - 3 Axis Accelerometer </td>
      <td> 1 </td>
    </tr>
    <tr>
      <td> Xadow - Edison Programmer </td>
      <td> 1 </td>
      <td> Xadow - Barometer BMP 180 </td>
      <td> 1 </td>
    </tr>
    <tr>
      <td> Xadow - Edison SD </td>
      <td> 1 </td>
      <td> Battery </td>
      <td> 1 </td>
    </tr>
    <tr>
      <td> Xadow - Q Touch Sensor </td>
      <td> 1 </td>
      <td> Digital RGB LED Flexi-Strip </td>
      <td> 1 </td>
    </tr>
    <tr>
      <td> Xadow - NFC </td>
      <td> 1 </td>
      <td> Power cable White </td>
      <td> 5 </td>
    </tr>
    <tr>
      <td> Xadow - Breakout </td>
      <td> 3 </td>
      <td> Power cable Red </td>
      <td> 5 </td>
    </tr>
    <tr>
      <td> Xadow - Buzzer </td>
      <td> 1 </td>
      <td> Power cable Yellow </td>
      <td> 5 </td>
    </tr>
    <tr>
      <td> Xadow - Vibration Motor </td>
      <td> 1 </td>
      <td> FFC cable package </td>
      <td> 1 </td>
    </tr>
    <tr>
      <td> Xadow - OLED </td>
      <td> 1 </td>
      <td> Color printed Tutorial </td>
      <td> 1 </td>
    </tr>
    <tr>
      <td> NFC Tags </td>
      <td> 3 </td>
      <td> </td>
      <td> </td>
    </tr>
  </tbody>
</table>

## はじめに

### 接続

未充填の角に注意してください。すべてのモジュールの未充填の角は同じ方向を向いています。Xadowモジュールの両面はFFCを使用して2つのモジュールを接続できます。そのため、Xadowは時計やネックレスのようにモジュールを可能な限りカスケード接続でき、ウェアラブルプロトタイピングに適しています。

- 長方形のコネクタを介してIntel EdisonをXadow-Edisonに挿入します。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison03.png)
![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison08.png)

- Edison-ProgrammerボードをFFCで接続し、2本のUSBケーブルを差し込みます。Edison-Programmerボードの小さなスイッチはデバイス側に切り替える必要があります。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison04.png)

- XadowモジュールをFFCで接続します。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison07.png)

- プログラムをアップロードした後、USBケーブルとプログラマーを取り外し、Li-Poバッテリーを接続してキットを移動可能にします。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison09.png)

### 開発環境

1. Edison Arduino IDEと必要なドライバーをインストールします。[こちら](https://communities.intel.com/docs/DOC-23147)をクリックして公式サイトのチュートリアルをご覧ください。

2. デモをダウンロードします。

1) [こちら](https://github.com/Seeed-Studio/Xadow_Edison_Demos)をクリックしてGitHubからソースコードをダウンロードします。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison12.png)

2) ZIPファイルからデモを抽出します。
Arduino IDEを開き、「ファイル」→「環境設定」をクリックします。スケッチブックの場所が「C:\Users\xxx\Documents\Arduino」となっていることを確認し、このフォルダに移動してプロジェクトをサブフォルダ「libraries」に抽出します。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison16.png)

3. IDE設定

1) Arduino IDEを開きます。「ツール」→「ボード」をクリックし、Intel® Edisonを選択します。

2) コンピューターの「デバイスマネージャー」を開き、「Intel Edison Virtual Port(COMx)」を見つけます。「ツール」→「シリアルポート」をクリックし、COMxを選択します。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison17.png)

4. スケッチをアップロード

「ファイル」→「例」をクリックし、以前にダウンロードしたデモを選択します。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison18.png)
![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison19.png)

### 例

**LEDストリップを作成する**

LEDストリップには3つのピンがあります。ストリップとブレークアウトボードを接続するには、簡単なハンダ付けを行うことができます。VCCピンとGNDピンを接続し、信号ピンをブレークアウトボードのMISOピンに接続します。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison20.png)

**NFCタグを準備する**

NFCデモでは、LEDストリップを開くためのキーとして3つのNFCタグを使用します。ただし、最初に取得したNFCタグには何も記録されていません。そのため、これらを有効なタグにする必要があります。

**ステップ1**. デモ「FormatTag」を使用して、初めて使用する際にタグをフォーマットします。
![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison21.png)

!!!注意
    スケッチをアップロードし、シリアルモニターを開きます。「未フォーマットのMifare Classicタグをリーダーに置いてください。」と表示されたら、アンテナボードにタグを置きます。しばらく待つと、「成功、タグがNDEFとしてフォーマットされました。」と表示されればフォーマット成功です。「フォーマット失敗。」と表示された場合、タグはすでにフォーマットされている可能性があります。

**ステップ 2**. デモ「Cool_Light_WriteTag」を開き、カードの記録を変更します

**WRITE_TAG_MESSAGE**。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison22.png)

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison23.png)

**ステップ 3**. スケッチをコンパイルしてアップロードします。

**ステップ 4**. シリアルモニターを実行し、NFCタグをアンテナに近づけます。シリアルモニターに **Success. Try reading this tag with your phone.** と表示されたら、有効なタグが作成されたことになります。手順を繰り返し、**WRITE_TAG_MESSAGE** を変更して他のタグを書き込んでください。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison24.png)

**例-01: Cool_Light**

**ここで得られるもの**

この例では、NFCモジュールとQTouchモジュールを使用してRGB LEDストリップを制御します。QTouchモジュールには3つのボタンがあり、異なるボタンに触れることで異なる光のパフォーマンスが見られます。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison27.jpg)

**スケッチをアップロード**

**File&gt;Examples&gt;Cool_Light をクリックします。**

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison22.png)

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison26.png)

**コード詳細**

```
#include <Wire.h>
#include <PN532_I2C.h>
#include <PN532.h>
#include <NfcAdapter.h>
#include <TimerOne.h>
#include "Seeed_QTouch.h"
#include "Seeed_ws2812.h"

#define SIG_PIN 12   // LEDストリップの信号ピン
#define LED_NUM 5    // LEDストリップのLED数

// 一部のコードを省略...

void setup() {
    strip.begin();
    nfc.begin();
    Serial.begin(115200);
    color_domain_init(LED_NUM);
    Timer1.initialize(150000);         // Timer1を初期化
    Timer1.attachInterrupt(callback);  // callback()をタイマーオーバーフロー割り込みとしてアタッチ
}
void callback()                      // タイマーISRでQTouch番号を読み取り、LEDのパフォーマンスを変更
{
    int tn = QTouch.touchNum();        // QTouchコールバック関数
    if( tn == 0 | tn == 1 | tn == 2 ) {
        colorChangeFromNumber(tn);
    }
}
void loop() {
    colorChangeFromString(getStringFromNFC());  // NFCから文字列を読み取り、LEDの色を変更
    delay(500);
}
```

**結果**

1. NFCタグをアンテナに置くと、クールな光が表示されます。この例では、LEDが3つのモードで輝きます。それらは単色ループ、フローカラー、レインボーサイクルです。3つのタグには異なるメッセージが含まれており、異なるタグを置くことで各モードが表示されます。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison28.jpg)

2. QTouchでは、ボタンの1つに触れることでLEDストリップが赤、緑、青の単色を表示します。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison30.jpg)

3. Edison-Programmerを切断し、Li-Poバッテリーを使用して電源を供給することができます。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison33.png)

**例-02: GlowingThermometer**

**ここで得られるもの**

この例では、気圧計モジュールを使用して温度、気圧、高度に関する大気情報を監視します。これらのメッセージはOLEDモジュールに表示されます。安全な温度範囲を20℃〜30℃に設定し、温度が安全範囲を超えると振動モーターが作動し、OLEDに警告画像が表示されます（温度が30℃を超える場合や20℃未満の場合）。デモ「GlowingThermometer」を開き、スケッチをコンパイルしてアップロードしてください。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison31.jpg)

**スケッチをアップロード**

File&gt;Examples&gt;GrowingThermometer をクリックします。

**コード詳細**

```
#include <Wire.h>
#include <SeeedOLED.h>
#include "Barometer.h"
#include <Seeed_ws2812.h>

#define LEDN 5
#define SIG_PIN 12

uint8_t color[LEDN];
uint8_t t[5] = {25, 26, 27, 28, 29}; // 温度ステップを5つ設定して色を追跡
// 気圧計
float temperature;
float pressure;
float altitude;
float atm;

void setup()
{
    Serial.begin(115200);
    Wire.begin();
    SeeedOled.init();              // SEEED OLEDディスプレイを初期化
    initOledTitle();               // OLEDタイトルを初期化
    myBarometer.init();           // 気圧計を初期化
    vibratorInit();                // 振動モーターピンを初期化
    strip.begin();                // ストリップドライバーを初期化して開始
    color_domain_init(20, 30, LEDN);   // 温度上昇と色変化の関係を取得するメソッド
}

// 一部のコードを省略...

void loop()
{
    temperature = myBarometer.bmp085GetTemperature(myBarometer.bmp085ReadUT()); // 温度を取得、bmp085ReadUTを最初に呼び出す必要あり
    pressure = myBarometer.bmp085GetPressure(myBarometer.bmp085ReadUP());      // 気圧を取得
    altitude = myBarometer.calcAltitude(pressure);
    atm = pressure / 101325;

    colorFollow();  // 温度に応じてLEDストリップを変更

    TempAlarm();    // 温度を監視して警告

    messagetoSerial();

    messagetoOled();

    delay(500);
}

// 詳細はダウンロードしたソースコードを参照してください...
```

**結果**

1. デフォルトのOLED表示

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison34.png)

2. 高温警告表示

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison32.jpg)

:::tip
    Xadow-Barometerモジュールを温めることで、温度が安全範囲を超えた場合に何が起こるか確認できます。
:::
3. 温度が上昇するにつれてLEDが1つずつ点灯し、色が青から赤に変化します。

**例-03: Edison-Pedometer**

**ここで得られるもの**

この例では、歩数をカウントする歩数計を作成する方法を示します。使用する部品は、Xadow – Edison Board、Xadow – OLED 0.96”、Xadow – 3-Axis Accelerometer、Xadow – Buzzerです。OLEDスクリーンには歩数が表示され、長時間動かない場合にはブザーが鳴ります。さらに、Intel Edison BoardがWi-Fiネットワークに接続されている場合、ウェブブラウザを使用して歩数を確認することができます。

**スケッチのアップロード**

1. File&gt;Examples&gt;Edison_Pedometer_with_OLEDをクリックし、デモを選択します。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison18.png)

2. `char ssid[] = STEST` をネットワーク名に、`char pass[] = 876543210` をネットワークパスワードに変更します。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison36.png)

3. アップロードアイコンをクリックします。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison37.png)

**コードの詳細**

```cpp
#include <Wire.h>
#include <SeeedOLED.h>
#include <Wire.h>
#include <ADXL345.h>
#include "pedometer.h"
#include <SPI.h>
#include <WiFi.h>
#include <TimerOne.h>

#define MINUTES_TO_ALARM  (60) // 指定した分数（MINUTES_TO_ALARM）間歩かない場合、ブザーが0.5秒鳴ります。
unsigned long curtime = 0;
unsigned long cursteps = 0;

int isWalking = 0;        // 歩行中の場合、isWalking=1。
int ipprinted = 0;        // ローカルIPを表示した場合、ipprinted=1。

Pedometer pedometer;
int stepIndex = 0;

char ssid[] = "STEST";           // ネットワークSSID（名前）
char pass[] = "876543210";       // ネットワークパスワード
int keyIndex = 0;                // ネットワークキーインデックス番号（WEPの場合のみ必要）

int status = WL_IDLE_STATUS;
WiFiServer server(88);
int serverconnected = 0;

void setup() {
    Serial.begin(9600);           // ボーレートを9600bpsに設定
    // 初回実行時のセットアップコード
    buzzer_init();
    pedometer.init();
    Wire.begin();
    SeeedOled.init();                  // SEEED OLEDディスプレイを初期化
    SeeedOled.clearDisplay();          // 画面をクリアし、左上隅にカーソルを設定
    SeeedOled.setNormalDisplay();      // 通常モード（非反転モード）に設定
    SeeedOled.setPageMode();           // ページモードに設定
    WiFi_Init();

    SeeedOled.drawBitmap(pmlogo,384);
    printxybmp(3,1,5,24,WalkMan[stepIndex]);
    printnum(4,6,"0");

    curtime = millis();              // 現在の時間を取得
    cursteps = pedometer.stepCount;  // 現在の歩数を取得

    Timer1.initialize(200000); // タイマーを100000マイクロ秒（0.1秒、10Hz）に設定
    Timer1.attachInterrupt( TimerISR ); // サービスルーチンをアタッチ
}

void loop() {
    // 歩数計の歩数を更新
    StepsUpdate();

    // Wi-Fi接続中で歩行していない場合、ローカルIPを表示
    PrintLocalIP();

    // Wi-Fiが切断された場合、再接続
    if(WiFi.RSSI()==0){
        status = WL_IDLE_STATUS;
    }

    // 指定した分数間歩かない場合、ブザーが0.5秒鳴る
    if((millis()-curtime > MINUTES_TO_ALARM * 60000) && (pedometer.stepCount - cursteps < MINUTES_TO_ALARM*60/2)){
        buzzer_on(500);
        curtime = millis();
        cursteps = pedometer.stepCount;
    }
}
```

**結果**

1. Xadow-3-Axis Accelerometerを振ると、歩数計がカウントを表示します。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison38.png)

2. 歩数計がWi-Fiネットワークに接続されると、ローカルIPがOLEDスクリーンに表示されます。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison39.png)

3. 同じネットワークに接続されたデバイスでウェブブラウザを開き、OLEDまたはシリアルモニタに表示されたIPアドレスにアクセスすると、歩数を確認できます。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison40.png)

4. Xadow-EdisonにLiPoバッテリーを接続することもできます（以下参照）。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison09.png)

5. 美しい時計ケースも利用可能です。[3Dモデルファイル](https://file.seeedstudi.com/wiki/Xadow_Wearable_Kit_For_Edison/res/Edison_Pedometer_3D_models.zip)をダウンロードして3Dプリンターで印刷できます。

時計ケースを装着した場合の外観は以下の通りです：

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison42.jpg)

**TIPS**

1. Wi-Fiに接続されている場合、ローカルIPがOLEDスクリーンに表示されます。

2. ウェブサーバーにアクセスする際には、ポート番号（例：88）を追加する必要があります。例：192.168.168.157:88

## リソース

*   [Seeed depot](https://www.seeedstudio.com/depot/)

*   [GitHub上のソースコード](https://github.com/Seeed-Studio/Xadow_Edison_Demos)

*   [Edison Pedometer 3Dモデル](https://file.seeedstudi.com/wiki/Xadow_Wearable_Kit_For_Edison/res/Edison_Pedometer_3D_models.zipp)

*   [Intel® Edison公式サイト](https://www.intel.com/content/www/us/en/do-it-yourself/edison.html)

*   [Edison入門ガイド](https://communities.intel.com/docs/DOC-23147)

*   [Xadow wear](https://community.seeedstudio.com/wear/)



## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>