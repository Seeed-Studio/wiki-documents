---
description: 24GHz mmWave 人体転倒検知
title: 24GHz mmWave 人体転倒検知
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Radar_MR24FDB1
last_update:
  date: 1/12/2023
  author: jianjing Huang
---

# 24GHz mmWave センサー - 人体転倒検知センサー(MR24FDB1)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmWave-radar/radar.jpg" style={{width:400, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Fall-Detection-Module-p-5268.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

## 概要

mmWave レーダー転倒検知モジュールは、24GHzで動作する自己完結型、プライバシー保護、安全なmmWaveモジュールです。強化されたInfineon ドップラーレーダーと標準アルゴリズムにより、このモジュールは高齢者ヘルスケア、スマートホーム、危険警報などの個別アプリケーションに理想的なソリューションです。

### アプリケーション

- 転倒検知
- スマートホーム
- ヘルスケア

### **特徴**

- 信頼性の高い技術：Infineon mmWave FMCW産業用レーダー
- 有効な理論：24GHzで動作する近距離センサー（NDS）を使用したドップラーレーダー技術を適用
- 標準アルゴリズム：自己適応環境において占有/非占有状態を区別し、人間の活動を識別
- 単一転倒検知：最大20平方メートルのエリアで疑わしい転倒/急速な転倒/異常な長時間滞在を同時に、プライバシー保護的に、ワイヤレスで、ウェアラブルフリーで検知
- 完全なプライバシー保護：識別なしで監視機能を提供
- 柔軟な設置場所：遮蔽物に関係なく適切に動作
- 無害な動作状態：10 dBmの無害なエネルギー出力
- 高精度：非生物オブジェクトの干渉を減少させ、出力結果は95%以上の精度を達成
- 高い堅牢性：異なる温度、湿度、ノイズ、気流、ほこり、光などを含む複雑な環境で適切な機能を維持
- 高性能アンテナ：水平90°/垂直60°のファンビームパターンで微細な動きも感知
- 測定距離：
  - 動作感知最大距離：最大12メートル
  - 微細動作感知最大距離：最大5メートル
  - 人体感知最大距離：最大3メートル
- 検知時間：
  - 非占有から占有状態：0.5秒以内
  - 有人から無人状態：1分以上
- カスタマイズ可能なレーダー：レーダーパラメータ、プロトコル、アンテナ、機能を含む二次開発をサポート

### **ハードウェア概要**

![](https://files.seeedstudio.com/wiki/mmWave-radar/yinjiaotu.png)

1. S1出力：高レベル - 占有、低レベル - 非占有。
2. S2出力：高レベル - アクティブ、低レベル - 静止
3. GP1からGP4はパラメータ選択制御で、ユーザー要件に応じて再定義可能
です。
4. このインターフェースの出力信号はすべて3.3Vレベルです。

:::caution  
製品の消費電力は500mWで、長期間の電源供給には適していません。
:::

### **特性**

![](https://files.seeedstudio.com/wiki/mmWave-radar/radar1.png)

## はじめに

### Arduino ライブラリ概要

:::tip
Arduino を初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くお勧めします。
:::

この例で使用するライブラリコードは、下のアイコンをクリックしてダウンロードできます。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed_24GHz_mmWave_Radar_Sensor" target="_blank"><div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

スケッチの開発を始める前に、ライブラリで利用可能な関数を見てみましょう。

- `void recvRadarBytes()` —— この関数は、レーダーから返される現在のフレームの長さを取得します。フレームはその長さに応じて配列に格納されます。
**入力パラメータ:** なし
**戻り値:** なし

- `void Bodysign_judgment(byte inf[], float Move_min, float Move_max)` —— レーダーから返されるデータには大量の物理データが含まれています。ユーザーは、サインデータとこの関数が提供するデコードアルゴリズムに基づいて、検出された動作情報を柔軟に調整できます。判定の内容はシリアルポート経由で出力されます。
**入力パラメータ:**
  - `byte inf[]` —— レーダーから送信されるデータフレーム。
  - `float Move_min` —— ユーザーが静止状態または無人状態にあることを判定する閾値。
  - `float Move_max` —— ユーザーが静止状態または誰かが動いている状態にあることを判定する閾値。

    **戻り値:** なし
    サインパラメータの説明について: 理論的には、サインパラメータの計算値は **0 から 100** の範囲です。計算値が **0** の場合、周囲の環境で **誰も** 検出されていないことを意味します。計算値が **1** の場合、環境が占有されており **静止状態** にあることが検出されたことを意味します。計算値が **2 から 100** の場合、周囲が占有されており **活動中** であることが検出されたことを示します。

- `void Situation_judgment(byte inf[])` —— この関数は、レーダー内部のアルゴリズムに従って、人体がレーダーの設置場所に近づいているか遠ざかっているかを検出し、人体の動きを判定します。この情報はシリアルポート経由で出力されます。
**入力パラメータ:**
  - `byte inf[]` —— レーダーから送信されるデータフレーム。

    **戻り値:** なし

- `void Fall_inf(byte inf[])` —— この関数は、レーダーから返される転倒検出情報のデコードを完了し、シリアルポート経由でレーダー検出の結果を出力します。
**入力パラメータ:**
  - `byte inf[]` —— レーダーから送信されるデータフレーム。

    **戻り値:** なし

- `unsigned short int us_CalculateCrc16(unsigned char *lpuc_Frame, unsigned short int lus_Len)` —— この関数は CRC16 チェックサムを生成するために使用されます。
**入力パラメータ:**
  - `unsigned char *lpuc_Frame` —— レーダーに送信したいデータフレーム（最終的な 2 バイトのチェックサムフレームは含まない）。
  - `unsigned short int lus_Len` —— レーダーに送信したいデータフレームの長さ。

    **戻り値:** 2 バイト整数型チェック桁。

    **戻り値:** なし

- `void SerialInit()` —— レーダーシリアルポートのボーレートを 9600 に設定します。Seeeduino ボードの場合、ソフトシリアルポートを RX: 2, TX: 3 に設定します。
**入力パラメータ:** なし
**戻り値:** なし

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

まず [GitHub](https://github.com/limengdu/Seeed_24GHz_mmWave_Radar_Sensor) からコードベースを取得し、ローカルコンピュータにダウンロードします。

zip ライブラリをダウンロードしたので、Arduino IDE を開き、**Sketch > Include Library > Add .ZIP Library** をクリックします。ダウンロードした zip ファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに **Library added to your libraries** と表示されます。これはライブラリが正常にインストールされたことを意味します。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

### 必要な材料

以下の例を完了する前に、以下の材料を準備する必要があります。

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radar.jpg"/></div>| <div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="{150}" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**24GHz mmWave Radar Sensor**](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Fall-Detection-Module-p-5268.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)|**2mm to 2.54mm Pitch Ribbon Cable**|

**ステップ 1.** メインボードを通してデバイスをコンピュータに接続します。配線図は以下の表に示されています。

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radarconnect.png" /></div></td>
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

**ステップ 2.** Arduino IDE の左上のメニューバーで、**ツール**を選択し、使用している開発ボードの種類を選択し、対応するシリアルポートを選択します。

:::tip
**MacOS**を使用している場合、デバイスのシリアルポート名は多くの場合 **/dev/cu.usbmodem xxx** で始まり、デバイス名で終わります。**Windows**を使用している場合、デバイスのシリアルポート名は多くの場合 **COM** で始まり、同様にデバイス名で終わります。
:::

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

この例では、レーダーが私たちの人気製品 XIAO BLE とどのように動作するかを実演します。

### デモ1 内蔵レーダーアルゴリズムデータ出力環境状態のデコード

レーダーには完全な内蔵アルゴリズムセットがあり、レーダー判定によって得られた環境条件を直接出力できます。このルーチンでは、コードを通じてシリアルポート経由でレーダーが検出した環境条件を直接印刷する方法について説明します。

この例のコードは以下の通りです。

```cpp
#include <falldetectionradar.h>

FallDetectionRadar radar;

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
    radar.Fall_inf(dataMsg);                  //Sleep information output
  }
  
}
```

`setup()` コードでは、XIAO BLE の **Serial ポート** と **Serial1 ポート** をオンにします。Serial はデータ印刷に使用され、Serial1 は XIAO BLE とレーダー間の通信に使用されます。レーダーのボーレートに従って、両方のシリアルポートのボーレートを 9600 に設定します。準備が完了すると、シリアルモニターに **Ready** が印刷されます。

```c
radar.Situation_judgment(dataMsg);
```

dataMsgリストが完全に取得されると、`Situation_judgment()`関数のパラメータとして使用され、環境監視データの出力が完了し、出力結果がシリアルモニターに直接印刷されます。

プログラムをアップロードします。シリアルモニターをボーレート9600で開くと結果が表示されるはずです。出力は以下の画像のようになるはずです。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/5.png"/></div>

:::tip
シリアルモニターを開いた後にデータが表示されない場合、それは正常である可能性があります。レーダーデータのこの部分の取得は、レーダー監視範囲内の人間の動きの変化に依存します。範囲内の人の動きが変化した時のみ、レーダーがデータを送信し、その時のみデータが印刷されます。

レーダーが返すデータを確認したい場合は、`radar.ShowData(dataMsg);`のコメントアウトを解除できます。これにより、受信したデータフレームの完全なセットがシリアルモニターを通じて出力されます。
:::

### Demo2 特徴パラメータ解析を使用した人間の動作の取得

レーダーが返す大量のデータの中で、物理データに関する情報が情報の大部分を占めています。時には、レーダー自体のアルゴリズムに過度に依存すると、一部のシナリオで満足のいく結果が得られない場合があります。その場合、レーダーが返す情報を使用して、実際のアプリケーションシナリオに応じて適切な調整を行うことを選択できます。

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

`Bodysign_judgment()`関数の2番目と3番目のパラメータは、それぞれ無人状態と静止状態の人体を判定するための閾値、静止状態と動作状態の人体を判定するための閾値です。

(1, 15)は、体徴の計算値が1未満の場合、環境に誰もいないことを出力することを意味します。体徴値が1以上15未満の場合、現在の環境に静止状態の人がいることを出力します。体徴値が35以上の場合、環境に動いている人がいることを出力します。

プログラムをアップロードします。シリアルモニターを9600ボーレートで開くと、結果が表示されるはずです。出力は以下の画像のようになるはずです。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/2.png"/></div>

:::tip
出力データフレームに続く値は、計算されたサイン値を表します。
:::

### デモ3 レーダーへのデータ送信

レーダーは、情報を取得したり、レーダーの感度やシーンを設定したりするための非常に多くのインターフェースを開放しています。このルーチンでは、ユーザーマニュアルを使用してレーダーにデータメッセージを送信し、レーダーのパラメータを調整したり、必要なデータ情報を取得したりする方法をユーザーに指示します。

**ステップ1.** 必要なクエリに基づいてデータフレームを取得します。

リソースエリアから[ユーザーマニュアル](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf)をダウンロードし、**第8.2章**で、クエリまたは設定する必要があるフレームの内容を見つけて整理します。

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
長さフレームの計算方法について：
    長さ = データ長 + 機能コード + アドレスコード1 + アドレスコード2 + データ + チェックサム。（ヘッダーフレームは含まれません）

フレーム形式と規則の詳細については、[ユーザーマニュアル](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf)の第8章を参照してください。
:::

プログラムをアップロードします。シリアルモニターをボーレート9600で開くと、結果が表示されるはずです。出力は以下の画像のようになるはずです。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/10.png"/></div>

レーダーに送信する必要がある完全なデータがシリアルモニターに表示されます。

**その他の方法**

完全なデータフレームを生成するためにマスターを使用したくない場合は、以下のコードをCプログラムを実行できるエディターに貼り付けることもできます。上記の手順に従って、配列データにフレームの内容を入力してください。

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

**ステップ4.** データフレームをレーダーに送信します。

[**UART to USB** デバイス](https://www.seeedstudio.com/USB-To-Uart-5V-p-1833.html?queryID=588a892811a774ad3005ea0d31427532&objectID=1111&indexName=bazaar_retailer_products)を介してレーダーを直接コンピューターのUSBポートに接続します。配線は以下の表に示されています。

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

3番目の要素が0x03である一連のデータが返されることを確認できます。この一連のデータは、クエリ後に取得された情報です。レーダーのパラメータを調整するデータを送信した場合も、同様の情報が返されます。

:::caution
データ送信の形式として**ASCII**を選択した場合、各データセットには**0x**のプレフィックスが必要です。**HEX**を選択した場合、各データセットに**0x**のプレフィックスは不要です。
:::

## トラブルシューティング

**FAQ1: コードをSeeeduino（またはArduino）に適用するにはどうすればよいですか？**

> ハードウェア設計の違いにより、XIAOシリーズやWio Terminalのシリアルポートは Serial1 と名付けられていますが、Seeeduino や Arduino ではソフトシリアルポートを使用する必要があります。Seeeduino でレーダーを使用したい場合は、ソフトシリアルポートを変更するか、ピン2（RX）と3（TX）を使用できます。
> <div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/19.png"/></div>

**FAQ2: XIAO BLEとレーダーが長時間データを収集してコードをアップロードできない場合はどうすればよいですか？**

> この場合、指でXIAO BLE上部のリセットボタンを軽く押して、プログラムを再アップロードして実行できます。

## リソース

- **[PDF]** [Sleep Breathing Radar Sensor Datasheet](http://files.seeedstudio.com/wiki/mmWave-radar/MR24FDB1_Datasheet.pdf)
- **[ZIP]** [24GHz Respiratory schematic](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-respiratory-schematic.zip)
- **[PDF]** [User manual](https://files.seeedstudio.com/wiki/mmWave-radar/MR24FDB1_User_manual.pdf)
- **[PPTX]** [Seeed mmWave sensor series V2.0](https://files.seeedstudio.com/wiki/mmWave-radar/Seeed-mmWave-sensor-series-V2.0.pptx)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
