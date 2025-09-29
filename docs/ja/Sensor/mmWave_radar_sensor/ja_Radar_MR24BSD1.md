---
description: 24GHz mmWave 睡眠呼吸監視
title: 24GHz mmWave 睡眠呼吸監視
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Radar_MR24BSD1
last_update:
  date: 1/12/2023
  author: jianjing Huang
---

# 24GHz mmWave センサー - 睡眠呼吸監視 (MR24BSD1)

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/1.jpeg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong></a>
</div>

## 概要

MR24BSD1 24GHzレーダーモジュールは、ドップラー検出理論を適用して人間の睡眠品質監視を実装し、他のノイズの影響から独立した完全にプライベートで安全な検知環境を提供します。これは、睡眠安全アラーム、睡眠呼吸検出などのスマートホームアプリケーションにおいて、プライバシーが保護された安全なセンサーレーダーシステムです。

### アプリケーション

- スマートホーム
- スマートホテル
- 人間の睡眠品質監視

### 特徴

- 有効化理論：24GHz mmWaveドップラーレーダー技術に基づく検出を実装
- バイタルサイン検出：動いている人と静止している人を同時に感知し、呼吸睡眠を検出して人間の睡眠品質を監視
- 完璧なプライバシー保護：mmWave監視技術を適用して、識別なしで監視機能を提供
- 健康に優しい動作状態：人体に無害な低出力
- 高安定性：温度、湿度、ノイズ、気流、ほこり、光などの環境影響から独立
- 高柔軟性レーダー：二次開発をサポートし、様々なシナリオアプリケーションに適応

### 仕様

| 動作パラメータ                              |  最小値        |  標準値         |  最大値        |  単位 |
|--------------------------------------------|----------------|-----------------|----------------|-------|
|  動作電圧 (VCC)                            |  4.5           |  5.0            |  6             |  V    |
|  動作電流 (ICC)                            |  90            |  93             |  100           |  mA   |
|  動作I/O流入/出力電流 (IIO)                 |  -             |  8              |  20            |  mA   |
|  動作温度 (TOP)                            |  -20           |  -              |  +60           |  ℃    |
|  保存温度 (TST)                            |  -40           |  -              |  +80           |  ℃    |

## ハードウェア概要

すべてを開始する前に、製品の基本的なパラメータを把握することが非常に重要です。以下の表は、睡眠呼吸監視レーダーの特性に関する情報を提供します。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/pihnout.png"/></div>

:::note
    ハードウェアについていくつかの更新があります。
:::

1. フィルタリングRC用の抵抗器がありました。テストした結果、モジュールでは使用されないため、削除されました。

<div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radarpd.png"/></div>

2. モジュールからLEDを削除したため、ここの抵抗器制限回路もキャンセルされました。

<div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radarpd2.png"/></div>

## はじめに

## Arduinoライブラリ概要

:::tip
Arduinoを初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

この例で使用されるライブラリコードは、以下のアイコンをクリックしてダウンロードできます。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar" target="_blank"><div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

### 関数

スケッチの開発を始める前に、ライブラリで利用可能な関数を見てみましょう。

- `void recvRadarBytes()` —— この関数は、レーダーから返される現在のフレームの長さを取得します。フレームはその長さに応じて配列に格納されます。
**入力パラメータ:** なし
**戻り値:** なし

- `void Bodysign_judgment(byte inf[], float Move_min, float Move_max)` —— レーダーから返されるデータには大量の物理データが含まれています。ユーザーは、サインデータと関数によって提供されるデコードアルゴリズムに基づいて、検出された動作情報を柔軟に調整できます。判定の内容はシリアルポート経由で出力されます。
**入力パラメータ:**
  - `byte inf[]` —— レーダーから送信されるデータフレーム。
  - `float Move_min` —— ユーザーが静止状態または無人状態にあることを判定する閾値。
  - `float Move_max` —— ユーザーが静止状態または誰かが動いている状態にあることを判定する閾値。

    **戻り値:** なし
    サインパラメータの説明について：理論的には、サインパラメータの計算値は**0から100**の範囲です。計算値が**0**の場合、周囲の環境で**誰も**検出されていないことを意味します。計算値が**1**の場合、環境が占有されており**静止状態**にあることが検出されたことを意味します。計算値が**2から100**の場合、周囲が占有されており**活動中**であることが検出されたことを示します。

- `void Situation_judgment(byte inf[])` —— この関数は、レーダー内部のアルゴリズムに従って、人体がレーダーが設置されている場所に近づいているか遠ざかっているかを検出し、人体の動きを判定します。この情報はシリアルポート経由で出力されます。
**入力パラメータ:**
  - `byte inf[]` —— レーダーから送信されるデータフレーム。

    **戻り値:** なし

- `void Sleep_inf(byte inf[])` —— この関数は、レーダーから返される睡眠情報のデコードを完了し、シリアルポート経由でレーダー検出の結果を印刷します。睡眠情報には、呼吸数、呼吸状態、シーン判定、睡眠状態と質、睡眠時間などが含まれます。
**入力パラメータ:**
  - `byte inf[]` —— レーダーから送信されるデータフレーム。

    **戻り値:** なし

- `unsigned short int us_CalculateCrc16(unsigned char *lpuc_Frame, unsigned short int lus_Len)` —— この関数はCRC16チェックサムを生成するために使用されます。
**入力パラメータ:**
  - `unsigned char *lpuc_Frame` —— レーダーに送信したいデータフレーム（最終的な2バイトのチェックサムフレームは含まない）。
  - `unsigned short int lus_Len` —— レーダーに送信したいデータフレームの長さ。

    **戻り値:** 2バイト整数型チェック桁。

- `void SleepTimeCalculate(unsigned char sleeptime[])` —— この関数は、レーダーから返されるデータフレームを睡眠時間に解析するために使用されます。睡眠時間はシリアルポート経由で印刷されます。
**入力パラメータ:**
  - `unsigned char sleeptime[]` —— レーダーから返される4バイトの睡眠時間データ。

    **戻り値:** なし

- `void SerialInit()` —— レーダーシリアルポートのボーレートを9600に設定します。Seeeduinoボードの場合、ソフトシリアルポートをRX: 2、TX: 3に設定します。
**入力パラメータ:** なし
**戻り値:** なし

### デフォルト変数

```c
#define MESSAGE_HEAD 0x55       //Data frame header
#define ACTIVE_REPORT 0x04      //Proactive reporting

#define REPORT_RADAR 0x03       //Report radar information
#define REPORT_OTHER 0x05       //Report other information

#define HEARTBEAT 0x01          //Heartbeat Pack
#define ABNOEMAL 0x02           //Abnormal Reset
#define ENVIRONMENT 0x05        //Environment
#define BODYSIGN 0x06           //Physical parameters
#define CLOSE_AWAY 0x07         //Approach away

#define CA_BE 0x01              //Approach away head frame
#define CA_CLOSE 0x02           //Someone approaches
#define CA_AWAY 0x03            //Some people stay away
#define SOMEBODY_BE 0x01        //Motion state header frame
#define SOMEBODY_MOVE 0x01      //Somebody move
#define SOMEBODY_STOP 0x00      //Somebody stop
#define NOBODY 0x00             //No one here

#define SLEEP_INF 0x05          //Sleep radar data header frames
#define BREATH 0x01             //Breathing parameters
#define SCENARIO 0x03           //Scenario evaluation
#define SLEEP_TIME 0x04         //Duration parameters
#define SLEEP_QUALITY 0x05      //Sleep quality

#define BREATH_RATE 0x01        //Breathing rate
#define CHECK_SIGN 0x04         //Detection signal

#define BREATH_HOLD 0x01        //Breath-holding abnormalities
#define BREATH_NULL 0x02        //None
#define BREATH_NORMAL 0x03      //Normal breathing
#define BREATH_MOVE 0x04        //Movement abnormalities
#define BREATH_RAPID 0x05       //Acute respiratory abnormalities

#define CLOSE_AWAY_BED 0x07     //Getting in and out of bed judgment
#define SLEEP_STATE 0x08        //Sleep state judgment

#define AWAY_BED 0x00           //Leaving the bed
#define CLOSE_BED 0x01          //Get into bed

#define AWAKE 0x00              //sleep state:Awake
#define LIGHT_SLEEP 0x01        //sleep state:Light sleep
#define DEEP_SLEEP 0x02         //sleep state:deep sleep
#define SLEEP_NULL 0x03         //no sleep state

#define AWAKE_TIME 0x01         //Awake time
#define LIGHT_SLEEP_TIME 0x02   //Light sleep time
#define DEEP_SLEEP_TIME 0x03    //Deep sleep time

#define SLEEP_SCORE 0x01        //Sleep quality score

const byte MsgLen = 12;         //Data frame maximum length value
byte dataLen = 12;              //Real data frame length
byte Msg[12];                   //Set a fixed array to receive the first data
boolean newData = false;        //Controlling the reception of a new set of data
```

### インストール

**ステップ 1.** Arduino ソフトウェアをインストールする必要があります。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**ステップ 2.** Arduino アプリケーションを起動します。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**ステップ 3.** 開発ボードモデルを選択し、Arduino IDE に追加します。

- 後のルーチンで **Seeeduino V4.2** を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/) を参照して追加を完了してください。

- 後のルーチンで **Seeeduino XIAO** を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software) を参照して追加を完了してください。

- 後のルーチンで **XIAO RP2040** を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup) を参照して追加を完了してください。

- 後のルーチンで **XIAO BLE** を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup) を参照して追加を完了してください。

**ステップ 4.** Arduino コードライブラリをインストールします。

まず [GitHub](https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar) からコードベースを取得し、ローカルコンピュータにダウンロードします。

zip ライブラリをダウンロードしたので、Arduino IDE を開き、**Sketch > Include Library > Add .ZIP Library** をクリックします。ダウンロードした zip ファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに **Library added to your libraries** と表示されます。これはライブラリが正常にインストールされたことを意味します。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Arduino の例

ライブラリがインストールされ、基本機能を理解したので、XIAO BLE のいくつかの例を実行して、その動作を確認してみましょう。

### 必要な材料

以下の例を完了する前に、以下の材料を準備する必要があります。

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/60GHzradar/1.jpeg"/></div>| <div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="{150}" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**24GHz mmWave レーダーセンサー**](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html?queryID=c2e8ac7c8c6fb3833f49a1a3b5083a04&objectID=5304&indexName=bazaar_retailer_products)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**2mm から 2.54mm ピッチリボンケーブル**|

**ステップ 1.** メインボードを通してデバイスをコンピュータに接続します。配線図は以下の表に示されています。

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/20.png" /></div></td>
    </tr>
    <tr>
      <td align="center">レーダーセンサー</td>
      <td align="center" />
      <td align="center">メインボード</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--&gt;</td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">RX</td>
      <td align="center">--&gt;</td>
      <td align="center">D6</td>
    </tr>
    <tr>
      <td align="center">TX</td>
      <td align="center">--&gt;</td>
      <td align="center">D7</td>
    </tr>
  </tbody></table>

<br />

**ステップ 2.** Arduino IDEの左上のメニューバーで、**tool**を選択し、使用している開発ボードのタイプを選択し、対応するシリアルポートを選択します。

:::tip
**MacOS**を使用している場合、デバイスのシリアルポート名は多くの場合**/dev/cu.usbmodem xxx**で始まり、デバイス名で終わります。**Windows**を使用している場合、デバイスのシリアルポート名は多くの場合**COM**で始まり、同様にデバイス名で終わります。
:::

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

この例では、人気製品のXIAO BLEでレーダーがどのように動作するかを実演します。

### Demo1 内蔵レーダーアルゴリズムデータ出力環境状態のデコード

レーダーには完全な内蔵アルゴリズムセットがあり、レーダー判定によって得られた環境条件を直接出力できます。このルーチンでは、コードを通じてシリアルポート経由でレーダーが検出した環境条件を直接印刷する方法について説明します。

この例のコードは以下の通りです。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/4.png"/></div>

```cpp
//Human_State_Data_Decoding_Example.ino

#include <sleepbreathingradar.h>

SleepBreathingRadar radar;

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
 radar.recvRadarBytes();                       //Receive radar data and start processing
 if (radar.newData == true) {                  //The data is received and transferred to the new list dataMsg[]
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;                         //Add the header frame as the first element of the array
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //Frame-by-frame transfer
    radar.newData = false;                     //A complete set of data frames is saved
    
    //radar.ShowData(dataMsg);                 //Serial port prints a set of received data frames
    radar.Situation_judgment(dataMsg);         //Use radar built-in algorithm to output human motion status
  }
}
```

`setup()` コードでは、XIAO BLE の **Serial ポート** と **Serial1 ポート** をオンにします。Serial はデータ印刷に使用され、Serial1 は XIAO BLE とレーダー間の通信に使用されます。レーダーのボーレートに従って、両方のシリアルポートのボーレートを 9600 に設定します。準備が完了すると、シリアルモニターに **Ready** が印刷されます。

```c
radar.recvRadarBytes();
if (radar.newData == true) {
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;
    frame as the first element of the array
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];
    radar.newData = false;
}
```

ループ内では、まず `recvRadarBytes()` 関数を使用して、レーダーから送信されたデータを固定長配列 `Msg[12]` に格納します。レーダーデータの複雑さのため、単一の固定長配列では我々のデータ処理タスクには不十分であり、現在のデータフレーム長に応じてデータセットを格納するためにサイズ変更可能な配列が必要です。ここで配列 `dataMsg[dataLen]` が登場し、`dataLen` が現在のデータフレームの実際の長さであることがわかります。

```c
radar.Situation_judgment(dataMsg);
```

dataMsgリストが完全に取得されると、`Situation_judgment()`関数のパラメータとして使用され、環境監視データの出力が完了し、出力結果がシリアルモニターに直接印刷されます。

プログラムをアップロードします。シリアルモニターをボーレート9600で開くと、結果が表示されるはずです。出力は以下の画像のようになるはずです。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/5.png"/></div>

:::tip
シリアルモニターを開いた後にデータが表示されない場合、それは正常な場合があります。レーダーデータのこの部分の取得は、レーダー監視範囲内の人間の動きの変化に依存します。範囲内の人の動きが変化した時のみ、レーダーがデータを送信し、その時のみデータが印刷されます。
:::

    レーダーから返されるデータを確認したい場合は、`radar.ShowData(dataMsg);`のコメントを外すことができます。これにより、シリアルモニターを通じて受信した完全なデータフレームセットが出力されます。

### Demo2 特徴パラメータ解析を使用した人間の動作の取得

レーダーから返される大量のデータの中で、物理データの情報が情報の大部分を占めています。時には、レーダー自体のアルゴリズムに過度に依存すると、一部のシナリオで満足のいく結果が得られない場合があります。その場合、レーダーから返される情報を使用して、実際のアプリケーションシナリオに応じて適切な調整を行うことを選択できます。

この例のコードは以下の通りです。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/1.png"/></div>

```cpp
//Physical_Parameters_Example.ino

#include <sleepbreathingradar.h>

SleepBreathingRadar radar;

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
 radar.recvRadarBytes();                       //Receive radar data and start processing
 if (radar.newData == true) {                  //The data is received and transferred to the new list dataMsg[]
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;                         //Add the header frame as the first element of the array
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //Frame-by-frame transfer
    radar.newData = false;                     //A complete set of data frames is saved
    
    //radar.ShowData(dataMsg);                 //Serial port prints a set of received data frames
    radar.Bodysign_judgment(dataMsg, 1, 15); //Output of human movement using sign parameters
  }
}
```

```c
radar.Bodysign_judgment(dataMsg, 1, 15);
```

dataMsg配列を取得したら、この配列のデータを`Bodysign_judgment()`関数の最初の引数として渡すことができます。この関数はサインパラメータを解析します。

`Bodysign_judgment()`関数の2番目と3番目のパラメータは、それぞれ無人状態と静止している人体を判定するための閾値、静止している人体と動いている人体を判定するための閾値です。

(1, 15)は、体徴の計算値が1未満の場合、環境に誰もいないことを出力することを意味します。体徴値が1以上15未満の場合、現在の環境に静止状態の人がいることを出力します。体徴値が35以上の場合、環境に動いている人がいることを出力します。

プログラムをアップロードします。シリアルモニターをボーレート9600で開くと、結果が表示されるはずです。出力は以下の画像のようになるはずです。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/2.png"/></div>

:::tip
出力データフレームに続く値は、計算されたサイン値を表します。
:::

### デモ3 睡眠検出データの取得

24GHz呼吸睡眠レーダーの特別な機能である睡眠検出は、以下のコード例によって検出データの出力を完了することができます。

この例のコードは以下の通りです。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/6.png"/></div>

```cpp
//Sleep_Breathing_Data_Decoding.ino

#include <sleepbreathingradar.h>

SleepBreathingRadar radar;

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
 radar.recvRadarBytes();                       //Receive radar data and start processing
 if (radar.newData == true) {                  //The data is received and transferred to the new list dataMsg[]
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;                         //Add the header frame as the first element of the array
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //Frame-by-frame transfer
    radar.newData = false;                     //A complete set of data frames is saved
    
    //radar.ShowData(dataMsg);                 //Serial port prints a set of received data frames
    radar.Sleep_inf(dataMsg);                  //Sleep information output
  }
}
```

```c
radar.Sleep_inf(dataMsg);
```

dataMsgリストが完全に取得されると、`Sleep_inf()`関数のパラメータとして使用され、睡眠監視データの出力が完了し、出力結果がシリアルモニターに直接印刷されます。

プログラムをアップロードします。シリアルモニターを9600のボーレートで開くと結果が表示されるはずです。出力は以下の画像のようになるはずです。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/7.png"/></div>

### デモ4 レーダーへのデータ送信

レーダーは情報を取得し、レーダーの感度やシーンを設定するための非常に多くのインターフェースを開放しています。このルーチンでは、ユーザーマニュアルを使用してレーダーにデータメッセージを送信し、レーダーのパラメータを調整したり、必要なデータ情報を取得したりする方法をユーザーに指示します。

**ステップ1.** 必要なクエリに基づいてデータフレームを取得します。

リソースエリアの[ユーザーマニュアル](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf)をダウンロードし、**第8.2章**で、クエリまたは設定する必要があるフレームの内容を見つけて整理します。

この例では、レーダーデバイスのIDを調べたいと仮定すると、必要な機能コード、アドレスコード1、アドレスコード2を取得できるはずです。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/60GHzradar/11.png"/></div>

**ステップ2.** Arduino IDEでサンプルコードを開きます。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/9.png"/></div>

この例のコードは以下の通りです。

```c
//CRC_Checksum_Generation.ino

#include <sleepbreathingradar.h>

SleepBreathingRadar radar;
char buff[30];

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
  //Please fill in the data frame you want to set according to the datasheet(Excluding 2 Byte checksum frames)
  unsigned char data[] = {0x55, 0x08, 0x00, 0x05, 0x01, 0x04, 0x03};
  
  unsigned int length = sizeof(data)/sizeof(unsigned char);
  unsigned char datas[length + 2];
  for (int n = 0; n < length; n++)datas[n] = data[n];
  unsigned short int crc_data = radar.us_CalculateCrc16(data, length);
  sprintf(buff, "The CRC16 values is: %04x", crc_data);
  Serial.println(buff);
  datas[length] = (crc_data & 0xff00) >> 8;
  datas[length+1] = crc_data & 0xff;
  Serial.print("The datas send to the radar: ");
  for (int n = 0; n < length + 2; n++){
    char buffsend[1];
    sprintf(buffsend, "0x%02x ", datas[n]);
    Serial.print(buffsend);
  }
  Serial.println();
  delay(6000);
}
```

**ステップ3.** データフレームの内容を変更して、レーダーに送信する完全なデータフレームを生成します。

変更する必要があるのは、ループ内の `data[]` 配列です。

```c
//Please fill in the data frame you want to set according to the datasheet(Excluding 2 Byte checksum frames)
unsigned char data[] = {0x55, 0x08, 0x00, 0x05, 0x01, 0x04, 0x03};
```

修正が必要な箇所は、2番目の要素と最後から4番目の要素です。ヘッダーフレーム0x55は固定されており、修正する必要はありません。2番目のフレームは長さフレームで、送信するデータの長さに応じて修正してください。3番目のフレームは0x00に固定されています。4番目のフレームは機能コード、5番目のフレームはアドレスコード1、以下同様です。

:::tip
長さフレームの計算方法について：<br />
長さ = データ長 + 機能コード + アドレスコード1 + アドレスコード2 + データ + チェックサム。（ヘッダーフレームは含まれません）

フレーム形式とルールの詳細については、[ユーザーマニュアル](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf)の第8章を参照してください。
:::

プログラムをアップロードします。シリアルモニターをボーレート9600で開くと、結果が表示されるはずです。出力は以下の画像のようになるはずです。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/10.png"/></div>

レーダーに送信する必要がある完全なデータがシリアルモニターに表示されます。

**その他の方法**

マスターを使用して完全なデータフレームを生成したくない場合は、以下のコードをCプログラムを実行できるエディターに貼り付けることもできます。上記の手順に従って、配列データにフレームの内容を入力してください。

```c
#include <stdio.h>

const unsigned char cuc_CRCHi[256]= {
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40
};

const unsigned char  cuc_CRCLo[256]= {
  0x00, 0xC0, 0xC1, 0x01, 0xC3, 0x03, 0x02, 0xC2, 0xC6, 0x06, 0x07, 0xC7,
  0x05, 0xC5, 0xC4, 0x04, 0xCC, 0x0C, 0x0D, 0xCD, 0x0F, 0xCF, 0xCE, 0x0E,
  0x0A, 0xCA, 0xCB, 0x0B, 0xC9, 0x09, 0x08, 0xC8, 0xD8, 0x18, 0x19, 0xD9,
  0x1B, 0xDB, 0xDA, 0x1A, 0x1E, 0xDE, 0xDF, 0x1F, 0xDD, 0x1D, 0x1C, 0xDC,
  0x14, 0xD4, 0xD5, 0x15, 0xD7, 0x17, 0x16, 0xD6, 0xD2, 0x12, 0x13, 0xD3,
  0x11, 0xD1, 0xD0, 0x10, 0xF0, 0x30, 0x31, 0xF1, 0x33, 0xF3, 0xF2, 0x32,
  0x36, 0xF6, 0xF7, 0x37, 0xF5, 0x35, 0x34, 0xF4, 0x3C, 0xFC, 0xFD, 0x3D,
  0xFF, 0x3F, 0x3E, 0xFE, 0xFA, 0x3A, 0x3B, 0xFB, 0x39, 0xF9, 0xF8, 0x38,
  0x28, 0xE8, 0xE9, 0x29, 0xEB, 0x2B, 0x2A, 0xEA, 0xEE, 0x2E, 0x2F, 0xEF,
  0x2D, 0xED, 0xEC, 0x2C, 0xE4, 0x24, 0x25, 0xE5, 0x27, 0xE7, 0xE6, 0x26,
  0x22, 0xE2, 0xE3, 0x23, 0xE1, 0x21, 0x20, 0xE0, 0xA0, 0x60, 0x61, 0xA1,
  0x63, 0xA3, 0xA2, 0x62, 0x66, 0xA6, 0xA7, 0x67, 0xA5, 0x65, 0x64, 0xA4,
  0x6C, 0xAC, 0xAD, 0x6D, 0xAF, 0x6F, 0x6E, 0xAE, 0xAA, 0x6A, 0x6B, 0xAB,
  0x69, 0xA9, 0xA8, 0x68, 0x78, 0xB8, 0xB9, 0x79, 0xBB, 0x7B, 0x7A, 0xBA,
  0xBE, 0x7E, 0x7F, 0xBF, 0x7D, 0xBD, 0xBC, 0x7C, 0xB4, 0x74, 0x75, 0xB5,
  0x77, 0xB7, 0xB6, 0x76, 0x72, 0xB2, 0xB3, 0x73, 0xB1, 0x71, 0x70, 0xB0,
  0x50, 0x90, 0x91, 0x51, 0x93, 0x53, 0x52, 0x92, 0x96, 0x56, 0x57, 0x97,
  0x55, 0x95, 0x94, 0x54, 0x9C, 0x5C, 0x5D, 0x9D, 0x5F, 0x9F, 0x9E, 0x5E,
  0x5A, 0x9A, 0x9B, 0x5B, 0x99, 0x59, 0x58, 0x98, 0x88, 0x48, 0x49, 0x89,
  0x4B, 0x8B, 0x8A, 0x4A, 0x4E, 0x8E, 0x8F, 0x4F, 0x8D, 0x4D, 0x4C, 0x8C,
  0x44, 0x84, 0x85, 0x45, 0x87, 0x47, 0x46, 0x86, 0x82, 0x42, 0x43, 0x83,
  0x41, 0x81, 0x80, 0x40
};

static unsigned short int us_CalculateCrc16(unsigned char *lpuc_Frame, unsigned short int lus_Len){
  unsigned char luc_CRCHi = 0xFF;
  unsigned char luc_CRCLo = 0xFF;
  int li_Index=0;
  while(lus_Len--){
    li_Index = luc_CRCLo ^ *( lpuc_Frame++);
    luc_CRCLo = (unsigned char)( luc_CRCHi ^ cuc_CRCHi[li_Index]);
    luc_CRCHi = cuc_CRCLo[li_Index];
  }
  return (unsigned short int )(luc_CRCLo << 8 | luc_CRCHi);
}

int main() {
    //Please fill in the data frame you want to set according to the datasheet(Excluding 2 Byte checksum frames)
    unsigned char data[] = {0x55, 0x07, 0x00, 0x01, 0x01, 0x01};

    unsigned short int crc_data = 0x0000;
    unsigned int length = sizeof(data)/sizeof(unsigned char);
    unsigned char datas[length + 2];
    for (int n = 0; n < length; n++)datas[n] = data[n];
    printf("The data frame length is: %d\n", length);
    crc_data = us_CalculateCrc16(data, length);
    datas[length] = (crc_data & 0xff00) >> 8;
    datas[length+1] = crc_data & 0xff;
    printf("The last two CRC check digits are: %04x\n", crc_data);
    printf("The datas send to the radar: ");
    for (int n = 0; n < length + 2; n++){
        printf("0x%02x ", datas[n]);
    }
    printf("\n");
    return 0;
}
```

エディタ実行後、レーダーに送信する必要がある完全なデータフレームを出力することも可能です。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/8.png"/></div>

**ステップ 4.** データフレームをレーダーに送信します。

[**UART to USB** デバイス](https://www.seeedstudio.com/USB-To-Uart-5V-p-1833.html?queryID=588a892811a774ad3005ea0d31427532&objectID=1111&indexName=bazaar_retailer_products)を介してレーダーを直接コンピュータのUSBポートに接続します。配線は以下の表に示されています。

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/22.png" /></div></td>
    </tr>
    <tr>
      <td align="center">レーダーセンサー</td>
      <td align="center" />
      <td align="center">メインボード</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--&gt;</td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">RX</td>
      <td align="center">--&gt;</td>
      <td align="center">TX</td>
    </tr>
    <tr>
      <td align="center">TX</td>
      <td align="center">--&gt;</td>
      <td align="center">RX</td>
    </tr>
  </tbody></table>

シリアルデバッグアシスタントなどのソフトウェアを使用して、レーダーが接続されているシリアルポートを選択します。

<div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/60GHzradar/17.png"/></div>

:::caution
24GHzレーダーは5V電源が必要です。そうでなければレーダーが正常に動作しない可能性があります。
:::

接続が成功すると、レーダーが安定したメッセージストリームを送信しているのが確認できます。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/16.png"/></div>

**ステップ3**で取得した完全なデータフレームをソフトウェアの送信エリアに貼り付けます。その後、送信をクリックします。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/18.png"/></div>

3番目の要素が0x03である返されたデータセットを探してください。このデータセットはクエリ後に取得された情報です。レーダーのパラメータを調整するデータを送信した場合も、同様の情報が返されます。

:::caution
データ送信の形式として**ASCII**を選択した場合、各データセットには**0x**のプレフィックスが必要です。**HEX**を選択した場合、各データセットに**0x**のプレフィックスは不要です。
:::

## トラブルシューティング

**FAQ1: コードをSeeeduino（またはArduino）に適用するにはどうすればよいですか？**

> ハードウェア設計の違いにより、XIAOシリーズやWio Terminalのシリアルポートは Serial1 と名付けられていますが、Seeeduino や Arduino ではソフトシリアルポートを使用する必要があります。Seeeduino でレーダーを使用したい場合は、ソフトシリアルポートを変更するか、ピン2（RX）と3（TX）を使用してください。
> <div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/19.png"/></div>

**FAQ2: XIAO BLEとレーダーが長時間データを収集してコードをアップロードできない場合はどうすればよいですか？**

> この場合、XIAO BLE上部のリセットボタンを指で軽く押して、プログラムを再アップロードして実行してください。

## リソース

- **[PDF]** [Sleep Breathing Radar Sensor Datasheet](https://files.seeedstudio.com/wiki/mmWave-radar/MR24BSD1_Datasheet.pdf)
- **[PDF]**    [24GHz Sleep Breathing Radar Sensor User Manual](https://files.seeedstudio.com/wiki/mmWave-radar/MR24BSD1_User_Manual.pdf)
- **[ZIP]** [24GHz Respiratory schematic](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-respiratory-schematic.zip)
- **[PPTX]** [Seeed mmWave sensor series V2.0](https://files.seeedstudio.com/wiki/mmWave-radar/Seeed-mmWave-sensor-series-V2.0.pptx)

## 技術サポート & 製品ディスカッション


私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
