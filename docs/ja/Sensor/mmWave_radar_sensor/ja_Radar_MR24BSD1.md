---
description: 24GHz mmWave 睡眠呼吸モニタリング
title: 24GHz mmWave 睡眠呼吸モニタリング
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Radar_MR24BSD1
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# 24GHz mmWave センサー - 睡眠呼吸モニタリング (MR24BSD1)

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/1.jpeg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 概要

MR24BSD1 24GHz レーダーモジュールは、ドップラー検出理論を適用して人間の睡眠の質をモニタリングし、完全にプライバシーが保護され、安全なセンシング環境を提供します。他のノイズの影響を受けることなく動作します。これは、スマートホームアプリケーション（例：睡眠安全アラーム、睡眠呼吸検出）において、プライバシー保護と安全性を備えた有用なセンサー レーダーシステムです。

### アプリケーション

- スマートホーム
- スマートホテル
- 人間の睡眠の質モニタリング

### 特徴

- 有効な理論: 24GHz mmWave ドップラー レーダー技術に基づく検出を実装
- バイタルサイン検出: 動いている人と静止している人を同時に感知し、睡眠呼吸を検出して人間の睡眠の質をモニタリング
- 完璧なプライバシー保護: mmWave モニタリング技術を適用し、識別なしで監視能力を提供
- 健康に優しい動作状態: 人体に無害な低出力
- 高い安定性: 温度、湿度、ノイズ、気流、ほこり、光、その他の環境要因に依存しない
- 高い柔軟性のあるレーダー: 二次開発をサポートし、さまざまなシナリオアプリケーションに適応

### 仕様

| 動作パラメータ                              | 最小値         | 典型値         | 最大値         | 単位  |
|--------------------------------------------|----------------|----------------|----------------|-------|
| 動作電圧 (VCC)                             | 4.5            | 5.0            | 6              | V     |
| 動作電流 (ICC)                             | 90             | 93             | 100            | mA    |
| 動作 I\O 流入/出力電流 (IIO)              | -              | 8              | 20             | mA    |
| 動作温度 (TOP)                             | -20            | -              | +60            | ℃     |
| 保管温度 (TST)                             | -40            | -              | +80            | ℃     |

## ハードウェア概要

すべてを始める前に、製品の基本的なパラメータを把握することが非常に重要です。以下の表は、睡眠呼吸モニタリングレーダーの特性に関する情報を提供します。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/pihnout.png"/></div>

:::note
    ハードウェアに関するいくつかの更新があります。
:::

1. フィルタリング RC 用の抵抗が使用されています。ただし、モジュールでのテストでは使用されていないため、削除されました。

<div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radarpd.png"/></div>

2. モジュールから LED を削除したため、ここでの抵抗制限回路もキャンセルされました。

<div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radarpd2.png"/></div>

## はじめに

## Arduino ライブラリ概要

:::tip
Arduino を初めて使用する場合は、[Arduino の使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

この例で使用されるライブラリコードは、以下のアイコンをクリックしてダウンロードできます。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar" target="_blank"><div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

### 機能

スケッチの開発を始める前に、ライブラリで利用可能な機能を確認しましょう。

- `void recvRadarBytes()` —— この関数は、レーダーから返される現在のフレームの長さを取得します。フレームはその長さに基づいて配列に格納されます。
**入力パラメータ:** なし  
**戻り値:** なし  

- `void Bodysign_judgment(byte inf[], float Move_min, float Move_max)` —— レーダーから返されるデータには大量の物理データが含まれています。ユーザーは、この関数で提供される符号データとデコードアルゴリズムに基づいて、検出された動き情報を柔軟に調整できます。判定内容はシリアルポートを通じて出力されます。
**入力パラメータ:**
  - `byte inf[]` —— レーダーから送信されるデータフレーム。
  - `float Move_min` —— ユーザーが静止または無人状態にあるかを判定する閾値。
  - `float Move_max` —— ユーザーが静止状態または動いている状態にあるかを判定する閾値。

    **戻り値:** なし  
    符号パラメータの説明について: 理論的には、符号パラメータの計算値は **0 から 100** の範囲です。計算値が **0** の場合、周囲環境に **誰もいない** ことを意味します。計算値が **1** の場合、環境が **静止状態** で占有されていることを意味します。計算値が **2 から 100** の場合、周囲が占有されており、**活動中** であることを示します。

- `void Situation_judgment(byte inf[])` —— この関数は、レーダーの位置に対して人体が近づいているか離れているかを検出し、レーダー内部のアルゴリズムに基づいて人体の動きを判定します。この情報はシリアルポートを通じて出力されます。
**入力パラメータ:**
  - `byte inf[]` —— レーダーから送信されるデータフレーム。

    **戻り値:** なし  

- `void Sleep_inf(byte inf[])` —— この関数は、レーダーから返される睡眠情報のデコードを完了し、シリアルポートを通じてレーダー検出結果を出力します。睡眠情報には、呼吸率、呼吸状態、シーン判定、睡眠状態と質、睡眠時間などが含まれます。
**入力パラメータ:**
  - `byte inf[]` —— レーダーから送信されるデータフレーム。

    **戻り値:** なし  

- `unsigned short int us_CalculateCrc16(unsigned char *lpuc_Frame, unsigned short int lus_Len)` —— この関数は CRC16 チェックサムを生成するために使用されます。
**入力パラメータ:**
  - `unsigned char *lpuc_Frame` —— レーダーに送信したいデータフレーム（最終的な 2 バイトのチェックサムフレームを含まない）。
  - `unsigned short int lus_Len` —— レーダーに送信したいデータフレームの長さ。

    **戻り値:** 2 バイトの整数型チェックデジット。  

- `void SleepTimeCalculate(unsigned char sleeptime[])` —— この関数は、レーダーから返されるデータフレームを解析して睡眠時間を取得します。睡眠時間はシリアルポートを通じて出力されます。
**入力パラメータ:**
  - `unsigned char sleeptime[]` —— レーダーから返される 4 バイトの睡眠時間データ。

    **戻り値:** なし  

- `void SerialInit()` —— レーダーのシリアルポートのボーレートを 9600 に設定します。Seeeduino ボードの場合、ソフトシリアルポートを RX: 2, TX: 3 に設定します。
**入力パラメータ:** なし  
**戻り値:** なし  

### デフォルト変数

```c
#define MESSAGE_HEAD 0x55       // データフレームヘッダー
#define ACTIVE_REPORT 0x04      // 自動報告

#define REPORT_RADAR 0x03       // レーダー情報の報告
#define REPORT_OTHER 0x05       // その他の情報の報告

#define HEARTBEAT 0x01          // ハートビートパック
#define ABNOEMAL 0x02           // 異常リセット
#define ENVIRONMENT 0x05        // 環境
#define BODYSIGN 0x06           // 物理パラメータ
#define CLOSE_AWAY 0x07         // 接近・離脱

#define CA_BE 0x01              // 接近・離脱ヘッダーフレーム
#define CA_CLOSE 0x02           // 誰かが接近
#define CA_AWAY 0x03            // 誰かが離脱
#define SOMEBODY_BE 0x01        // 動作状態ヘッダーフレーム
#define SOMEBODY_MOVE 0x01      // 誰かが動いている
#define SOMEBODY_STOP 0x00      // 誰かが停止している
#define NOBODY 0x00             // 誰もいない

#define SLEEP_INF 0x05          // 睡眠レーダーデータヘッダーフレーム
#define BREATH 0x01             // 呼吸パラメータ
#define SCENARIO 0x03           // シナリオ評価
#define SLEEP_TIME 0x04         // 継続時間パラメータ
#define SLEEP_QUALITY 0x05      // 睡眠の質

#define BREATH_RATE 0x01        // 呼吸率
#define CHECK_SIGN 0x04         // 検出信号

#define BREATH_HOLD 0x01        // 呼吸停止異常
#define BREATH_NULL 0x02        // なし
#define BREATH_NORMAL 0x03      // 正常な呼吸
#define BREATH_MOVE 0x04        // 動作異常
#define BREATH_RAPID 0x05       // 急性呼吸異常

#define CLOSE_AWAY_BED 0x07     // ベッドの出入り判定
#define SLEEP_STATE 0x08        // 睡眠状態判定

#define AWAY_BED 0x00           // ベッドから離れる
#define CLOSE_BED 0x01          // ベッドに入る

#define AWAKE 0x00              // 睡眠状態: 覚醒
#define LIGHT_SLEEP 0x01        // 睡眠状態: 浅い睡眠
#define DEEP_SLEEP 0x02         // 睡眠状態: 深い睡眠
#define SLEEP_NULL 0x03         // 睡眠状態なし

#define AWAKE_TIME 0x01         // 覚醒時間
#define LIGHT_SLEEP_TIME 0x02   // 浅い睡眠時間
#define DEEP_SLEEP_TIME 0x03    // 深い睡眠時間

#define SLEEP_SCORE 0x01        // 睡眠の質スコア

const byte MsgLen = 12;         // データフレームの最大長
byte dataLen = 12;              // 実際のデータフレーム長
byte Msg[12];                   // 最初のデータを受信するための固定配列を設定
boolean newData = false;        // 新しいデータセットの受信を制御
```

### インストール

**ステップ 1.** Arduino ソフトウェアをインストールする必要があります。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**ステップ 2.** Arduino アプリケーションを起動します。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**ステップ 3.** 開発ボードモデルを選択し、Arduino IDE に追加します。

- **Seeeduino V4.2** を使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)を参照して追加を完了してください。

- **Seeeduino XIAO** を使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)を参照して追加を完了してください。

- **XIAO RP2040** を使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)を参照して追加を完了してください。

- **XIAO BLE** を使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)を参照して追加を完了してください。

**ステップ 4.** Arduino コードライブラリをインストールします。

まず、[GitHub](https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar) からコードベースを取得し、ローカルコンピュータにダウンロードします。

ZIP ライブラリをダウンロードしたら、Arduino IDE を開き、**スケッチ > ライブラリをインクルード > .ZIP ライブラリを追加** をクリックします。ダウンロードした ZIP ファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに **ライブラリがライブラリに追加されました** と表示されます。これでライブラリのインストールが成功したことを意味します。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Arduino の例

ライブラリをインストールし、基本的な機能を理解したので、XIAO BLE の動作を確認するためにいくつかの例を実行してみましょう。

### 必要な材料

以下の例を完了する前に、以下の材料を準備する必要があります。

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/60GHzradar/1.jpeg"/></div>| <div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="{150}" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**24GHz mmWave レーダーセンサー**](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html?queryID=c2e8ac7c8c6fb3833f49a1a3b5083a04&objectID=5304&indexName=bazaar_retailer_products)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**2mm から 2.54mm ピッチリボンケーブル**|

**ステップ 1.** デバイスをメインボードを介してコンピュータに接続します。配線図は以下の表に示されています。

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

**ステップ 2.** Arduino IDE の左上のメニューバーで **ツール** を選択し、使用している開発ボードの種類を選択し、対応するシリアルポートを選択します。

:::tip
**MacOS** を使用している場合、デバイスのシリアルポート名は通常 **/dev/cu.usbmodem xxx** で始まり、デバイス名で終わります。**Windows** を使用している場合、デバイスのシリアルポート名は通常 **COM** で始まり、デバイス名で終わります。
:::

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

この例では、人気のある製品 XIAO BLE とレーダーの動作をデモンストレーションします。

### デモ1 内蔵レーダーアルゴリズムデータをデコードして環境状態を出力

レーダーには完全な内蔵アルゴリズムがあり、レーダーが判断した環境条件を直接出力できます。このルーチンでは、コードを通じてレーダーが検出した環境条件をシリアルポート経由で直接出力する方法を説明します。

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
  Serial.println("準備完了");
}

void loop()
{
 radar.recvRadarBytes();                       // レーダーデータを受信して処理を開始
 if (radar.newData == true) {                  // データが受信され、新しいリスト dataMsg[] に転送される
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;                         // ヘッダーフレームを配列の最初の要素として追加
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  // フレームごとに転送
    radar.newData = false;                     // 完全なデータフレームセットが保存される
    
    //radar.ShowData(dataMsg);                 // 受信したデータフレームセットをシリアルポートで表示
    radar.Situation_judgment(dataMsg);         // レーダー内蔵アルゴリズムを使用して人間の動作状態を出力
  }
}
```

`setup()`コードでは、XIAO BLE上で**Serialポート**と**Serial1ポート**を有効にします。Serialはデータの出力に使用され、Serial1はXIAO BLEとレーダー間の通信に使用されます。レーダーのボーレートに従い、両方のシリアルポートのボーレートを9600に設定します。準備が整うと、シリアルモニターに**Ready**と表示されます。

```c
radar.recvRadarBytes();
if (radar.newData == true) {
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55; // 配列の最初の要素としてヘッダーフレームを追加
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];
    radar.newData = false;
}
```

ループ内では、まず`recvRadarBytes()`関数を使用して、レーダーから送信されたデータを固定長配列`Msg[12]`に格納します。レーダーデータの複雑さのため、単一の固定長配列ではデータ処理タスクに十分ではありません。そのため、現在のデータフレームの長さに応じてサイズを変更できる配列が必要です。ここで`dataMsg[dataLen]`配列が役立ちます。`dataLen`は現在のデータフレームの実際の長さを示します。

```c
radar.Situation_judgment(dataMsg);
```

dataMsgリストが完全に取得されると、それが`Situation_judgment()`関数のパラメータとして使用され、環境モニタリングデータの出力を完了します。出力結果はシリアルモニターに直接表示されます。

プログラムをアップロードします。シリアルモニターをボーレート9600に設定して開くと、結果が表示されるはずです。出力は以下の画像のようになります。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/5.png"/></div>

:::tip
シリアルモニターを開いた後にデータが表示されない場合、それは正常な可能性があります。このレーダーデータの取得は、レーダー監視範囲内での人間の動きの変化に依存します。範囲内の人間の動きが変化した場合のみ、レーダーがデータを送信し、その時にデータが表示されます。
:::

    レーダーが返すデータを確認したい場合は、`radar.ShowData(dataMsg);`をコメント解除してください。これにより、受信したデータフレームの完全なセットがシリアルモニターに出力されます。

### Demo2 特徴パラメータ解析を使用した人間の動きの取得

レーダーから返される大量のデータの中で、物理データに関する情報が大部分を占めています。時には、レーダー独自のアルゴリズムに過度に依存すると、特定のシナリオで満足のいく結果が得られない場合があります。その場合、レーダーから返される情報を使用して、実際のアプリケーションシナリオに応じた適切な調整を行うことができます。

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
 radar.recvRadarBytes();                       //レーダーデータを受信して処理を開始
 if (radar.newData == true) {                  //データが受信され、新しいリストdataMsg[]に転送される
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;                         //配列の最初の要素としてヘッダーフレームを追加
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //フレームごとに転送
    radar.newData = false;                     //完全なデータフレームセットが保存される
    
    //radar.ShowData(dataMsg);                 //シリアルポートに受信したデータフレームセットを出力
    radar.Bodysign_judgment(dataMsg, 1, 15); //サインパラメータを使用した人間の動きの出力
  }
}
```

```c
radar.Bodysign_judgment(dataMsg, 1, 15);
```

dataMsg配列が取得されると、この配列のデータを最初の引数として`Bodysign_judgment()`関数に渡すことができます。この関数はサインパラメータを解析します。

`Bodysign_judgment()`関数の第2および第3引数は、それぞれ無人状態と静止している人間の判定の閾値、静止している人間と動いている人間の判定の閾値です。

(1, 15)は、体のサインの計算値が1未満の場合、環境に誰もいないことを出力します。体の値が1以上15未満の場合、現在の環境に静止状態の人がいることを出力します。体のサイン値が35以上の場合、環境に動いている人がいることを出力します。

プログラムをアップロードします。シリアルモニターをボーレート9600に設定して開くと、結果が表示されるはずです。出力は以下の画像のようになります。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/2.png"/></div>

:::tip
出力データフレームに続く値は、計算されたサイン値を表します。
:::

### Demo 3 睡眠検出データの取得

24GHz呼吸睡眠レーダーの特別な機能としての睡眠検出は、以下のコード例を使用して検出データの出力を完了することができます。

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
 radar.recvRadarBytes();                       //レーダーデータを受信して処理を開始
 if (radar.newData == true) {                  //データが受信され、新しいリストdataMsg[]に転送される
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;                         //配列の最初の要素としてヘッダーフレームを追加
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //フレームごとに転送
    radar.newData = false;                     //完全なデータフレームセットが保存される
    
    //radar.ShowData(dataMsg);                 //シリアルポートに受信したデータフレームセットを出力
    radar.Sleep_inf(dataMsg);                  //睡眠情報の出力
  }
}
```

```c
radar.Sleep_inf(dataMsg);
```

dataMsgリストが完全に取得されると、それが`Sleep_inf()`関数のパラメータとして使用され、睡眠モニタリングデータの出力が完了します。出力結果はシリアルモニタに直接表示されます。

プログラムをアップロードします。シリアルモニタを9600ボーの速度で開くと、結果が表示されるはずです。出力は以下の画像のようになります。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/7.png"/></div>

### デモ4 レーダーへのデータ送信

レーダーは、情報を取得したり、レーダーの感度やシーンを設定したりするための非常に多くのインターフェースを提供しています。このルーチンでは、ユーザーマニュアルを使用してレーダーにデータメッセージを送信し、レーダーのパラメータを調整したり、必要なデータ情報を取得したりする方法を説明します。

**ステップ1.** 必要なクエリに基づいてデータフレームを取得します。

リソースエリアから[ユーザーマニュアル](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf)をダウンロードし、**第8.2章**で、クエリまたは設定する必要のあるフレームの内容を見つけ、それらを整理します。

この例では、レーダーデバイスのIDを調べたいと仮定します。必要な機能コード、アドレスコード1、およびアドレスコード2を取得する必要があります。

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
  //データシートに従って設定したいデータフレームを記入してください（2バイトのチェックサムフレームを除く）
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

変更する必要があるのは、ループ内の`data[]`配列です。

```c
//データシートに従って設定したいデータフレームを記入してください（2バイトのチェックサムフレームを除く）
unsigned char data[] = {0x55, 0x08, 0x00, 0x05, 0x01, 0x04, 0x03};
```

変更が必要な箇所は、2番目の要素と4番目から最後の要素です。ヘッダーフレーム0x55は固定されており、変更する必要はありません。2番目のフレームは長さフレームであり、送信するデータの長さに応じて変更してください。3番目のフレームは0x00に固定されています。4番目のフレームは機能コード、5番目のフレームはアドレスコード1、以降同様です。

:::tip
長さフレームの計算方法について:<br />
長さ = データ長 + 機能コード + アドレスコード1 + アドレスコード2 + データ + チェックサム。（ヘッダーフレームはカウントされません）

フレーム形式とルールの詳細については、[ユーザーマニュアル](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf)の第8章を参照してください。
:::

プログラムをアップロードします。シリアルモニタを9600ボーの速度で開くと、結果が表示されるはずです。出力は以下の画像のようになります。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/10.png"/></div>

レーダーに送信する必要がある完全なデータがシリアルモニタに表示されます。

**その他の方法**

マスターを使用して完全なデータフレームを生成したくない場合は、以下のコードをCプログラムを実行できるエディタに貼り付けることもできます。上記の手順に従い、配列データにフレームの内容を記入してください。

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
    //データシートに従って設定したいデータフレームを記入してください（2バイトのチェックサムフレームを除く）
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

エディタの実行後、レーダーに送信する必要がある完全なデータフレームを出力することも可能です。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/8.png"/></div>

**ステップ 4.** データフレームをレーダーに送信する。

レーダーを [**UART to USB** デバイス](https://www.seeedstudio.com/USB-To-Uart-5V-p-1833.html?queryID=588a892811a774ad3005ea0d31427532&objectID=1111&indexName=bazaar_retailer_products) を介してコンピュータの USB ポートに直接接続します。配線は以下の表に示されています。

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

シリアルデバッグアシスタントのようなソフトウェアを使用して、レーダーが接続されているシリアルポートを選択します。

<div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/60GHzradar/17.png"/></div>

:::caution
24GHz レーダーは 5V の電源が必要です。そうでない場合、レーダーが正常に動作しない可能性があります。
:::

接続が成功すると、レーダーが一定のメッセージを送信し続けるのが確認できます。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/16.png"/></div>

**ステップ3** で取得した完全なデータフレームをソフトウェアの送信エリアに貼り付けます。その後、送信ボタンをクリックします。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/18.png"/></div>

返されるデータセットの中で、3番目の要素が 0x03 であるものを探してください。このデータセットはクエリ後に取得された情報です。レーダーのパラメータを調整するデータを送信した場合も、このような情報が返されます。

:::caution
データ送信形式として **ASCII** を選択した場合、各データセットには **0x** を付ける必要があります。**HEX** を選択した場合は、各データセットに **0x** を付ける必要はありません。
:::

## トラブルシューティング

**FAQ1: Seeeduino（または Arduino）にコードを適用する方法は？**

> ハードウェア設計が異なるため、XIAO シリーズや Wio Terminal のシリアルポートは Serial1 と名付けられていますが、Seeeduino や Arduino ではソフトシリアルポートを使用する必要があります。Seeeduino でレーダーを使用したい場合は、ソフトシリアルポートを変更するか、ピン 2 (RX) と 3 (TX) を使用してください。
> <div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/19.png"/></div>

**FAQ2: XIAO BLE とレーダーが長時間データを収集し、コードをアップロードできない場合はどうすればよいですか？**

> この場合、XIAO BLE の上部にあるリセットボタンを指で軽く押して、プログラムを再アップロードして実行してください。

## リソース

- **[PDF]** [睡眠呼吸レーダーセンサー データシート](https://files.seeedstudio.com/wiki/mmWave-radar/MR24BSD1_Datasheet.pdf)
- **[PDF]** [24GHz 睡眠呼吸レーダーセンサー ユーザーマニュアル](https://files.seeedstudio.com/wiki/mmWave-radar/MR24BSD1_User_Manual.pdf)
- **[ZIP]** [24GHz 呼吸回路図](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-respiratory-schematic.zip)
- **[PPTX]** [Seeed mmWave センサーシリーズ V2.0](https://files.seeedstudio.com/wiki/mmWave-radar/Seeed-mmWave-sensor-series-V2.0.pptx)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>