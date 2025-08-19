---
description: Vision AI V2からRS485を介して認識データを転送する方法に関するガイド
title: Vision AI V2データのRS485送信
keywords:
- RS485
- Vision AI
image: https://files.seeedstudio.com/wiki/RS485_V2AI/photo/connectv2.webp
slug: /ja/grove_vision_ai_v2_rs485
last_update:
  date: 05/15/2025
  author: Jason
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_V2AI/photo/connectv2.jpg" style={{width:500, height:'auto'}}/></div>


### ハードウェア準備


<table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
        <th>Grove Vision AI V2</th>
        <th>OV5647-62 FOV カメラモジュール<br />Raspberry Pi 3B+4B用</th>
        <th>Seeed Studio XIAO RS485-拡張ボード</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/hadware.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
        <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Breakout-Board-for-XIAO-p-6306.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
</table>


### 接続方法

まず、2つの拡張ボード、2つのXIAOシリーズ開発ボード、および1つのVision AI V2を準備し、図に従って対応するピンを接続します。このルーチンではXIAO ESP32C3をデモとして使用します。

**ステップ1. 2つのRS485拡張ボードと2つのXIAOシリーズ開発ボードを準備し、以下の図に従ってピンを接続します**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_V2AI/photo/connect_modifg.png" style={{width:700, height:'auto'}}/></div>

**ステップ2. Vision AI V2を準備し、2つのRS485拡張ボードのうち1つの裏側に送信機として取り付けます**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_V2AI/photo/11.jpg" style={{width:500, height:'auto'}}/></div>




:::tip
RS485拡張ボードを初めて使用する場合で配線方法がわからない場合は、このリンクをクリックしてください(https://wiki.seeedstudio.com/ja/XIAO-RS485-Expansion-Board/)

モデルの書き込み方法やモデル出力コードの追加方法がわからない場合は、このリンクをクリックしてください(https://wiki.seeedstudio.com/ja/grove_vision_ai_v2_software_support/)。各ステップを詳細に説明しています。

後の使用をスムーズにするために、これら2つのステップをスキップしないでください！
:::



## ソフトウェア準備

### 送信側コード

```cpp
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

HardwareSerial Serial3(1); 

// 2つの内部UARTにマッピングされた2つのシリアルデバイスを定義
HardwareSerial atSerial(0);

#else
#define atSerial Serial1
#endif

#define enable_pin D2 // 有効化ピンをD2として定義

SSCMA AI;

void setup()
{
    Serial3.begin(115200, SERIAL_8N1, 7, 6); // 115200ボーレート、8データビット、パリティなし、1ストップビットでSerial3を初期化
    Serial.begin(9600); // デバッグ出力用にSerialを初期化
    AI.begin(&atSerial); // ATシリアルでAIモジュールを初期化

    pinMode(enable_pin, OUTPUT); // 有効化ピンを出力として設定
    digitalWrite(enable_pin, HIGH); // 有効化ピンをHIGHに設定してAIモジュールを有効化
}

void loop()
{
    if (!AI.invoke(1, false, true)) { // AIを呼び出して処理を開始

        Serial.println("invoke success"); // 成功メッセージを出力

        // パフォーマンス指標を出力
        Serial.print("perf: prepocess=");
        Serial.print(AI.perf().prepocess);
        Serial.print(", inference=");
        Serial.print(AI.perf().inference);
        Serial.print(", postpocess=");
        Serial.println(AI.perf().postprocess);

        // 検出されたボックスをループ処理
        for (int i = 0; i < AI.boxes().size(); i++) {
            Serial.print("Box[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.boxes()[i].target);
            Serial.print(", score=");
            Serial.print(AI.boxes()[i].score);
            Serial.print(", x=");
            Serial.print(AI.boxes()[i].x);
            Serial.print(", y=");
            Serial.print(AI.boxes()[i].y);
            Serial.print(", w=");
            Serial.print(AI.boxes()[i].w);
            Serial.print(", h=");
            Serial.println(AI.boxes()[i].h);
        }

        // 検出されたクラスをループ処理
        for (int i = 0; i < AI.classes().size(); i++) {
            Serial.print("Class[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.println(AI.classes()[i].target);

            // ターゲットクラスを確認し、対応するステータスを送信
            if (AI.classes()[i].target == 0) {
                String status_a = "no people detected"; // 人が検出されなかった場合のステータスを定義
                Serial3.println(status_a); // ステータスをSerial3に送信
                Serial.println(status_a); // ステータスをシリアルモニタに出力
            } else if (AI.classes()[i].target == 1) {
                String status_b = "people detected"; // 人が検出された場合のステータスを定義
                Serial3.println(status_b); // ステータスをSerial3に送信
                Serial.println(status_b); // ステータスをシリアルモニタに出力
            }
        }
        delay(1000); // 次のループまで1秒待機
    }
}
```

### コードの詳細な機能

- **ライブラリのインクルード**
    - `HardwareSerial`ライブラリをインクルードしてハードウェアシリアル機能を使用。
    - `Seeed_Arduino_SSCMA`ライブラリをインクルードしてAIモジュールを制御。

- **シリアルオブジェクトの作成** 
    ```cpp
    HardwareSerial Serial3(1); 
    HardwareSerial atSerial(0);
    ```
    シリアル通信用にSerial3とatSerialオブジェクトを作成。

- **AIオブジェクトの作成** 
    ```cpp
    SSCMA AI;
    ```
    AI処理用にSSCMAクラスのインスタンスを作成。

- **パフォーマンス指標**
    ```cpp
    Serial.print("perf: prepocess=");
    Serial.print(AI.perf().prepocess);
    Serial.print(", inference=");
    Serial.print(AI.perf().inference);
    Serial.print(", postpocess=");
    Serial.println(AI.perf().postprocess);
    ```
    AI処理の各段階（前処理、推論、後処理）のパフォーマンス指標を出力。

- **検出されたボックスのループ処理**
    ```cpp
    for (int i = 0; i < AI.boxes().size(); i++) {
        Serial.print("Box[");
        Serial.print(i);
        Serial.print("] target=");
        Serial.print(AI.boxes()[i].target);
        Serial.print(", score=");
        Serial.print(AI.boxes()[i].score);
        Serial.print(", x=");
        Serial.print(AI.boxes()[i].x);
        Serial.print(", y=");
        Serial.print(AI.boxes()[i].y);
        Serial.print(", w=");
        Serial.print(AI.boxes()[i].w);
        Serial.print(", h=");
        Serial.println(AI.boxes()[i].h);
    }
    ```
    検出されたボックスをループ処理し、ターゲット、スコア、バウンディングボックスの座標を出力。

- **検出されたクラスのループ処理**
    ```cpp
    for (int i = 0; i < AI.classes().size(); i++) {
       Serial.print("Class[");
       Serial.print(i);
       Serial.print("] target=");
       Serial.println(AI.classes()[i].target);
    ```
    検出されたクラスをループ処理し、ターゲットを出力。

- **マクロ定義** 
    ```cpp
    pinMode(enable_pin, OUTPUT); // 有効化ピンを出力として設定
    digitalWrite(enable_pin, LOW);
    ```
    有効化ピンをD2として定義。

- **メッセージ送信**
    ```cpp
    // ターゲットクラスを確認し、対応するステータスを送信
    if (AI.classes()[i].target == 0) {
        String status_a = "no people detected"; // 人が検出されなかった場合のステータスを定義
        Serial3.println(status_a); // ステータスをSerial3に送信
        Serial.println(status_a); // ステータスをシリアルモニタに出力
    } else if (AI.classes()[i].target == 1) {
        String status_b = "people detected"; // 人が検出された場合のステータスを定義
        Serial3.println(status_b); // ステータスをSerial3に送信
        Serial.println(status_b); // ステータスをシリアルモニタに出力
    }
    ```

    人が検出された場合は「PEOPLE DETECTED」を受信側に送信し、検出されなかった場合は「NO PEOPLE DETECTED」を送信。

### 受信側コード

```cpp
#include <HardwareSerial.h>

HardwareSerial Serial3(1); // UART2を使用
#define enable_pin D2 // 有効化ピンをD2として定義

void setup() {
  Serial.begin(115200); // ハードウェアシリアルを115200ボーレートで初期化
  Serial3.begin(115200, SERIAL_8N1, 7, 6); // 115200ボーレート、8データビット、パリティなし、1ストップビットでSerial3を初期化 (RX=D4(GPIO4), TX=D5(GPIO5))
  
  // ハードウェアシリアルが準備完了するまで待機
  while(!Serial3);
  while(!Serial); // この行は通常不要。Serial.begin()は即座に準備完了するため

  pinMode(enable_pin, OUTPUT); // 有効化ピンを出力として設定
  digitalWrite(enable_pin, LOW); // 有効化ピンをLOWに設定してデバイスを有効化
}

void loop() {
    delay(100); // 100ミリ秒待機
    // ハードウェアシリアルからデータが利用可能か確認
    if (Serial3.available()) {
        String receivedData = Serial3.readStringUntil('\n'); // 改行文字までの文字列を読み取る
        Serial.print("Received data: "); // 受信データのラベルを出力
        Serial.println(receivedData); // 受信データを直接出力
    }
}
```

### コードの詳細な機能

- **ライブラリのインクルード**
    - ハードウェアシリアル機能を使用するために `HardwareSerial` ライブラリをインクルードします。

- **シリアルオブジェクトの作成**
    - UART2 を使用して `Serial3` オブジェクトを作成します。

- **マクロ定義** 
    ```cpp
    pinMode(enable_pin, OUTPUT); // enable ピンを出力として設定
    digitalWrite(enable_pin, LOW);
    ```
    enable ピンを D2 として定義します。

- **セットアップ関数** 
    ```cpp
    Serial3.begin(115200, SERIAL_8N1, 7, 6);
    ```

    メインシリアルと Serial3 を初期化し、ボーレート、データビットなどを設定します。これは Vision AI V2 と通信してデータを転送するためのシリアルポートです。

    ```cpp
    while(!Serial3);
    while(!Serial); 
    ```
    すべてのシリアルポートが準備完了になるまで待機し、enable ピンを出力として設定し、デバイスを有効にするために LOW に設定します。

- **ループ関数**
    - `if (Serial3.available());`: Serial3 にデータが利用可能かどうかを 100 ミリ秒ごとに確認します。
    - `String receivedData = Serial3.readStringUntil('\n');`: データが利用可能な場合、改行文字まで読み取り、受信したデータをメインシリアルに出力します。

- **結果の出力**
    ```cpp
    Serial.print("Received data: "); 
    Serial.println(receivedData); 
    ```
    送信者のメッセージを出力します。

### 結果チャート

カメラは人を認識すると **「people detected」** を送信し、人を認識しない場合は **「no people detected」** を送信します。受信側は送信者の認識結果をシリアルポートに表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_V2AI/photo/result.png" style={{width:1000, height:'auto'}}/></div>


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>