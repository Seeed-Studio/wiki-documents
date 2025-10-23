---
description: Grove 超音波センサー (SMS812) の使い方
title: Grove 超音波センサー (SMS812)
keywords:
- 超音波
- sms812
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/grove_ultrasonic_sensor_sms812
last_update:
  date: 05/15/2025
  author: ZouXiong.Xiao
---


# Grove 超音波センサー (SMS812)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/1.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/ja/grove_ultrasonic_sensor_sms812" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 概要

Grove 超音波センサー (SMS812) は、小型で超低消費電力の距離測定センサーです。Grove 超音波センサー (SMS812) は超音波の飛行時間 (ToF) 原理に基づいており、関連する音響、電気、およびアルゴリズムを用いて設計されています。異なる材料の表面での超音波エコー信号のエネルギー差を利用して高精度の距離測定を実現し、ミリメートル単位の距離情報とそのエコーエネルギー強度値を出力します。また、柔らかい材料と硬い材料を区別するフラグビットを出力することもできます。さらに、清掃ロボットが地面の材料を識別し、一定範囲内の距離を測定するために使用できます。このセンサーは小型で取り付けが簡単です。

### 応用例

- 清掃ロボットが地面の柔らかい材料と硬い材料を認識
- 家庭用サービスロボットやロボット掃除機が地面情報を取得
- 3Dプリンターのレベル検出

### 特徴

- ミリメートル単位の測距精度、高い測距安定性
- 柔らかい材料と硬い材料を認識し、I/O情報を出力
- 検出距離は20-50mmで、ブラインドエリアが小さい
- Arduino対応

### ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/2.png" style={{width:600, height:'auto'}}/></div>

1. このセンサーの構造は円筒形で、プラスチック射出成形で作られています。
2. 上図の寸法はミリメートル単位です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/3.png" style={{width:600, height:'auto'}}/></div>

このインターフェースは PH1.0-4P プラグコネクタです。ピンの定義は以下の通りです：

<div class="table-center">
    <table align="center">
        <tbody>
            <tr>
                <td align="center">ピン</td>
                <td align="center">タイプ</td>
                <td align="center">説明</td>
                <td align="center">デフォルト</td>
                <td align="center">データストリーム</td>
            </tr>
            <tr>
                <td align="center">GND</td>
                <td align="center">電源供給</td>
                <td align="center">負極</td>
                <td align="center">0V</td>
                <td align="center"/>
            </tr>
            <tr>
                <td align="center">Tx</td>
                <td align="center">出力</td>
                <td align="center">システムシリアルポート出力</td>
                <td align="center"/>
                <td align="center">Ladar から周辺機器へ</td>
            </tr>
            <tr>
                <td align="center">Rx</td>
                <td align="center">入力</td>
                <td align="center">システムシリアルポート入力</td>
                <td align="center"/>
                <td align="center">周辺機器から Ladar へ</td>
            </tr>
            <tr>
                <td align="center">VCC</td>
                <td align="center">電源供給</td>
                <td align="center">正極</td>
                <td align="center">3.3V</td>
                <td align="center"/>
            </tr>
        </tbody></table>
</div>

## はじめに

### ハードウェアの準備

このルーチンでは、XIAO SAMD21をマスターコントロールとして使用し、この超音波レーダーの使用方法を紹介します。配線の利便性を考慮し、Grove拡張ボードも使用します。実際のニーズに応じて選択してください。

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO SAMD21</th>
			<th>Grove Base for XIAO</th>
            <th>Grove Ultrasonic Sensor (SMS812)</th>
		</tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/4.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="/ja/grove_ultrasonic_sensor_sms812" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

次に、超音波レーダーをXIAOのUARTインターフェースに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/5.jpg" style={{width:700, height:'auto'}}/></div>

## Arduinoライブラリ概要

:::tip
Arduinoを初めて使用する場合は、[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照するか、以下の簡単なチュートリアルをご覧ください。
:::

以下のボタンをクリックすると、Grove Ultrasonic Sensor (SMS812)用のArduinoプログラムライブラリに直接アクセスできます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio_SMS812_Sensor/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 機能

スケッチの開発を始める前に、ライブラリで利用可能な機能を確認しましょう。

- `void setIOMode()` —— レーダーをIOモードに設定するための関数です。このモードは主にターゲットの材質を検出するために使用されます。

- `void setUARTMode()` —— レーダーをUARTモードに設定するための関数です。UARTモードでは、レーダーが距離と材質情報を自動的に報告します。

- `void setUARTREQMode()` —— レーダーをUART REQモードに設定するための関数です。このモードでは、クエリコマンドを送信することでのみ距離と材質情報を取得できます。

- `void checkUARTREQ(int delaytime = 0, bool showSwitch = true)` —— UART REQモードで検出された材質と距離をクエリするための関数です。

    **入力パラメータ**

    - `delaytime`: デフォルト値は0です。このパラメータはクエリコマンドを発行する時間（ミリ秒）を制御します。
    - `showSwitch`: デフォルトはオンです。このパラメータは、元のデータフレームを出力するかどうかを制御します。

- `bool getFrame(bool showSwitch = true)` —— 元のデータフレームを取得するための関数です。

    **入力パラメータ**

    - `showSwitch`: デフォルトはオンです。このパラメータは、元のデータフレームを出力するかどうかを制御します。

- `bool parseDatagram(bool showSwitch = false)` —— 元のデータフレームを解析するための関数です。

    **入力パラメータ**

    - `showSwitch`: デフォルトはオフです。このパラメータは、元のデータフレームを出力するかどうかを制御します。

### インストール

ZIP形式のライブラリをダウンロードしたら、Arduino IDEを開き、**スケッチ > ライブラリをインクルード > .ZIP形式のライブラリを追加**をクリックします。ダウンロードしたZIPファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに**ライブラリがライブラリに追加されました**と表示されます。これでライブラリのインストールが完了です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## XIAO の例

**ステップ 1.** Arduino ソフトウェアをインストールする必要があります。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**ステップ 2.** Arduino アプリケーションを起動します。

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**ステップ 3.** 開発ボードモデルを選択し、Arduino IDE に追加します。

- **Seeeduino V4.2** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)** を参照して追加を完了してください。

- **XIAO SAMD21(Seeeduino XIAO)** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)** を参照して追加を完了してください。

- **XIAO RP2040** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)** を参照して追加を完了してください。

- **XIAO nRF52840** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)** を参照して追加を完了してください。

- **XIAO ESP32C3** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/#software-setup)** を参照して追加を完了してください。

- **XIAO ESP32S3** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started#software-preparation)** を参照して追加を完了してください。

:::caution
**XIAO nRF52840** を使用する場合は、**Seeed nRF52 mbed-enabled Boards** を選択してください。そうしないと、プログラム実行時にエラーが報告される可能性があります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png" style={{width:600, height:'auto'}}/></div>

:::

**ステップ 4.** Arduino コードライブラリをインストールします。


### デモ 1: IO モードの使用

この例では、柔らかい素材と硬い素材を区別するためのフラグビットを出力するプロセスを案内します。以下は Arduino 用の参考コードです：

```c
#include "sms812.h"

const int radarPin = A7;

//#include <SoftwareSerial.h>
// SoftwareSerial で RX & TX に使用できる任意の 2 ピンを選択
//#define RX_Pin A6
//#define TX_Pin A7

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトウェアシリアルを使用
//SMS812_Sensor radar = SMS812_Sensor(&mySerial);

// ハードウェアシリアルも試せます
SMS812_Sensor radar = SMS812_Sensor(&Serial1);

void setup() {
  // 初回実行時にセットアップコードを記述
  Serial.begin(115200);
  
  Serial1.begin(115200);
  //  mySerial.begin(115200);

  pinMode(radarPin, INPUT);

  while(!Serial);   // シリアルポートが開かれるとプログラムが実行を開始します。
  Serial.println("準備完了");

  radar.setIOMode();
}

void loop() {
  // 繰り返し実行されるメインコードを記述
  int value = analogRead(radarPin); // D7 ピンのレベル状態を読み取る
  Serial.println(value);
  delay(500);
}

```

IO モードを有効にした後、US5 センサーが柔らかい素材を認識すると、TX ピンがフラグビット `0x01` をボードに送信し、硬い素材の場合は `0x00` を送信することを知っておく必要があります。そのため、`radarPin` を **A0**（センサーの TX ピンに接続）またはアナログ入力をサポートするピンに設定する必要があります。

1000 を超える高い値は硬い素材を認識していることを意味し、20 未満の値は柔らかい素材または空気を認識していることを意味します。

センサーを動かしてシリアル出力を確認すると、以下のような出力が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/6.png" style={{width:700, height:'auto'}}/></div>


### デモ 2: UART モードの使用

UART モードでは、レーダーは 100Hz のレートで測定値を出力します。データテレグラムのフォーマットは以下の表に示されています。

<div class="table-center">
	<table align="center">
		<tr>
			<th>ヘッダーフレーム</th>
			<th>コマンドフレーム</th>
            <th>データ長フレーム</th>
            <th>データフレーム</th>
            <th>チェックサムフレーム</th>
		</tr>
		<tr>
			<td align="center">0xAA 0xAA</td>
			<td align="center">0xFD</td>
            <td align="center">0x04</td>
            <td align="center">--</td>
            <td align="center">CS</td>
		</tr>
	</table>
</div>

データビットは 4 バイトを占めます。最初の 1 バイトは素材フラグビットで、0 は硬い素材、1 は柔らかい素材を意味します。柔らかい素材の場合、距離を測定することはできません。その後、距離値が続き、これはミリメートル単位で 2 バイトを占めます。最後の 1 バイトは強度値で、受信した超音波信号の強さを示します。

<div class="table-center">
	<table align="center">
		<tr>
			<th>素材フラグビット</th>
			<th>距離値</th>
            <th>強度</th>
		</tr>
		<tr>
			<td align="center">1 バイト</td>
			<td align="center">2 バイト</td>
            <td align="center">1 バイト</td>
		</tr>
	</table>
</div>

この例では、ライブラリ内の関数を使用して受信したデータフレームを解析し、センサーがシリアルポートを介して報告するすべての特徴データを出力します。

ボード XIAO SAMD21 の **ハードウェアシリアルポート** は UART インターフェースピン **A6** と **A7** です。また、任意の 2 ピンをソフトウェアシリアルとして使用することもできます。

```c
#include "sms812.h"

//#include <SoftwareSerial.h>
// SoftwareSerial で RX & TX に使用できる任意の 2 ピンを選択
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトウェアシリアルを使用
//SMS812_Sensor radar = SMS812_Sensor(&mySerial);

// ハードウェアシリアルも試せます
SMS812_Sensor radar = SMS812_Sensor(&Serial1);

void setup() {
  // 初回実行時にセットアップコードを記述
  Serial.begin(115200);
  
  Serial1.begin(115200);
  //  mySerial.begin(115200);

  while(!Serial);   // シリアルポートが開かれるとプログラムが実行を開始します。
  Serial.println("準備完了");

  radar.setUARTMode();
}

void loop() {
  // 繰り返し実行されるメインコードを記述
  
  // 取得した生データフレームのみを出力
//   radar.getFrame();
//   delay(1);                // プログラムの停止を防ぐために時間遅延を追加

  // データフレームの内容を解析します。parseDatagram 関数に true 引数を与えると、生データフレームの表示が有効になります。
  if(radar.parseDatagram(true)){
    if(radar.material == 0x00){
      Serial.println("毛布は検出されませんでした。");
      Serial.print("測定された距離は: ");
      Serial.print(radar.distance);
      Serial.println(" mm");
      Serial.print("超音波信号の強度は: ");
      Serial.println(radar.strength);
    }
  }
  delay(1);                // プログラムの停止を防ぐために時間遅延を追加
}
```

コードをボードにアップロードした後、センサーを**硬い素材**の前に移動させます（柔らかい素材では解析データが出力されません）。以下のように解析データを確認できます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/7.png" style={{width:1000, height:'auto'}}/></div>

### デモ 3: UART REQ モードの使用方法

この例では、`delaytime` パラメータを 1000 に設定しています。これは、1 秒ごとにコマンドクエリを送信するようにポーリングすることを意味します。そして、センサーは 9 バイトの長さの生データメッセージで測距結果をフィードバックします。

```c
#include "sms812.h"

//#include <SoftwareSerial.h>
// SoftwareSerial で RX & TX に使用できる任意の 2 つのピンを選択
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトウェアシリアルを使用します
//SMS812_Sensor radar = SMS812_Sensor(&mySerial);

// ハードウェアシリアルも試すことができます
SMS812_Sensor radar = SMS812_Sensor(&Serial1);

void setup() {
  // 初回実行時にセットアップコードを記述
  Serial.begin(115200);
  Serial1.begin(115200);
  pinMode(A7, INPUT);

  //  mySerial.begin(115200);

  while(!Serial);   // シリアルポートが開かれると、プログラムが実行を開始します。

  Serial.println("準備完了");

  radar.setUARTREQMode();
}

void loop() {
  // 繰り返し実行されるメインコードを記述
  radar.checkUARTREQ(1000, true);      // 毎秒レーダー情報を確認します。また、生データフレーム表示をオンにします。

  // データフレームの内容を解析します。関数 `parseDatagram` に true 引数を与えると、生データフレーム表示が有効になります。
  if(radar.material == 0x00){
    Serial.println("ブランケットは検出されませんでした。");
    Serial.print("測定された距離は: ");
    Serial.print(radar.distance);
    Serial.println(" mm");
    Serial.print("超音波信号の強度は: ");
    Serial.println(radar.strength);
  }
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/7.png" style={{width:1000, height:'auto'}}/></div>

## リソース

- **[PDF]** [開発マニュアル Alpha V0.2.0](https://files.seeedstudio.com/wiki/ultrasonic-sms812/sms812_Development_Manual_Alpha_V0.2.0.pdf)
- **[PDF]** [データシート Alpha V0.1.3](https://files.seeedstudio.com/wiki/ultrasonic-sms812/sms812_DataSheet_Alpha_V0.1.3.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>