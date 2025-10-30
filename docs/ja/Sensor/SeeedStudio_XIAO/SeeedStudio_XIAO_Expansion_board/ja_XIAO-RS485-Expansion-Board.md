---
description: このガイドでは、Seeed Studio XIAO RS485拡張ボードを素早くセットアップし、RS485通信を開始する方法を説明します。
title: XIAO用RS485拡張ボード
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.webp
slug: /ja/XIAO-RS485-Expansion-Board
last_update:
  date: 11/20/2024
  author: Jason
---


# Seeed Studio XIAO-RS485-拡張ボード入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.jpg" style={{width:600, height:'auto'}}/></div>

## ハードウェア概要

### 準備材料

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO RS485-拡張ボード</th>
   <th>Seeed Studio XIAO ESP32-C3</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/hadware.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/esp32.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Breakout-Board-for-XIAO-p-6306.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### ピン配置図

<div class="table-center">
  <table align="center">
    <tr>
        <th>XIAO RS485拡張表示図</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/pinlist.png" style={{width:700, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

- 5V OUT/IN SWITCH：5Vポートの入力と出力の切り替えです。スレーブ側ではINファイルに設定して入力として使用し、ホスト側ではOUTファイルに設定してこのポートを外部に放電し、センサーの電源供給に接続できます。

- 120R SWITCH：120Rスイッチは120オーム抵抗がアクセス可能かどうかを決定するために使用されます。485は長い配線環境の始端と終端に120オーム抵抗を追加してマッチングを行い、通信を確保する必要があります。

- INT：予約済み割り込みポート。

:::tip
入力モードとして使用する場合は、スイッチをINに切り替える必要があり、出力モードとして使用する場合は、焼損を防ぐためにスイッチをOUTに切り替える必要があります。
:::

### 接続回路図

<div class="table-center">
  <table align="center">
    <tr>
        <th>2つのRS485拡張ボード接続</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/connect1.png" style={{width:700, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

:::tip
このプロジェクトでは、XIAO ESP32C3はD4（GPIO6）とD5（GPIO7）を使用してRS485拡張ボードと通信します。

異なる開発ボードを使用する場合は、必要に応じて対応するピン設定を変更してください。
:::

## ソフトウェア概要

### 送信側コード

```cpp
#include <HardwareSerial.h>

HardwareSerial mySerial(1); 


#define enable_pin D2 // Define the enable pin as D2

void setup() {
  Serial.begin(115200); // Initialize the hardware serial with a baud rate of 115200
  mySerial.begin(115200, SERIAL_8N1, 7, 6); // RX=D4(GPIO6), TX=D5(GPIO7)


  // Wait for the hardware serial to be ready
  while(!mySerial);
  // Wait for the hardware serial to be ready
  while(!Serial);

  pinMode(enable_pin, OUTPUT); // Set the enable pin as an output
  digitalWrite(enable_pin, HIGH); // Set the enable pin to high
}

void loop() {
if (Serial.available()) {
    String receivedData = Serial.readStringUntil('\n'); // Read the data from the hardware serial until a newline character

    // If the received data is not empty
    if (receivedData.length() > 0) {
        Serial.println("Send successfully"); // Print a success message
        mySerial.print("Master send information is: "); // Send a prompt message to the hardware serial
        mySerial.println(receivedData); // Send the received data to the hardware serial
    }
  }
}

```

- **HardwareSerialライブラリ：** ESP32で追加のシリアルポートを作成できます。通常、デバイス（センサーやモジュールなど）との通信に使用されます。
- `HardwareSerial mySerial(1);`：mySerialという名前のHardwareSerialオブジェクトを定義し、D5とD4を受信と送信ピンとして使用します。
- `#define enable_pin D2`：RS485モジュールの送信と受信状態を制御するために使用されるイネーブルピンを定義します。

- `setup()`:
  - `Serial.begin(115200`：ハードウェアシリアルポートをボーレート115200で初期化します。
  - `mySerial.begin(115200, SERIAL_8N1, 7, 6);`：RX=D4(GPIO4)、TX=D5(GPIO5)。
  - `while(!mySerial)`：ハードウェアシリアルが通信準備完了まで待機します。
  - `while(!Serial)`：ハードウェアシリアルが通信準備完了まで待機します。
  - `pinMode(enable_pin, OUTPUT)`：enable_pinを出力ピンとして設定し、RS485モジュールを制御します。
  - `digitalWrite(enable_pin, HIGH)`：enable_pinをHIGHに設定し、RS485モジュールを送信モードに設定します。

- `loop():`
  - `if (receivedData.length() > 0)`：ハードウェアシリアルポートから読み取り可能なデータがあるかどうかを確認します。
  - `String receivedData = Serial.readStringUntil('\n');`：改行文字まで、ハードウェアシリアルからデータを読み取ります。
  - `Serial.println("Send successfully")`：成功メッセージを印刷します。
  - `mySerial.print("Master send information is: ")`：ハードウェアシリアルにプロンプトメッセージを送信します。
  - `mySerial.println(receivedData)`：必要なデータをRS485拡張ボードに送信します。

### 受信側コード

```cpp
#include <HardwareSerial.h>

HardwareSerial mySerial(1); // Use UART2
#define enable_pin D2 // Define the enable pin as D2

void setup() {
  Serial.begin(115200); // Initialize the hardware serial with a baud rate of 115200
  mySerial.begin(115200, SERIAL_8N1, 7, 6); // RX=D4(GPIO4), TX=D5(GPIO5)

  // Wait for the hardware serial to be ready
  while(!Serial);
  // Wait for the hardware serial to be ready
  while(!mySerial);

  pinMode(enable_pin, OUTPUT); // Set the enable pin as an output
  digitalWrite(enable_pin, LOW); // Set the enable pin to low
}

void loop() {
  // Check if there is data available from the hardware serial
  if (mySerial.available()) {
      String receivedData = mySerial.readStringUntil('\n'); // Read strings based on newlines
      Serial.print("Received data: ");
      Serial.println(receivedData); // Direct printing of received data
  }
}

```

- **HardwareSerialライブラリ：** ESP32で追加のシリアルポートを作成できます。通常、デバイス（センサーやモジュールなど）との通信に使用されます。
- `HardwareSerial mySerial(1);`：mySerialという名前のHardwareSerialオブジェクトを定義し、D5をRX、D4をTXとして使用します。
- `define enable_pin D2`：RS485モジュールの送信と受信状態を制御するために使用されるイネーブルピンを定義します。

- `setup()`:
  - `Serial.begin(115200`：ハードウェアシリアルポートをボーレート115200で初期化します。
  - `mySerial.begin(115200, SERIAL_8N1, 7, 6);`RX=D4(GPIO4)、TX=D5(GPIO5)。
  - `while(!Serial)`：ハードウェアシリアルポートが通信準備完了まで待機します。
  - `while(!mySerial)`：ハードウェアシリアルポートが通信準備完了まで待機します。
  - `pinMode(enable_pin, OUTPUT)`：enable_pinを出力ピンとして設定し、RS485モジュールを制御します。
  - `digitalWrite(enable_pin, LOW)`：enable_pinをLOWに設定し、RS485モジュールを受信モードに設定します。

- `loop()`:
  - `if (mySerial.available())`：ハードウェアシリアルポートから読み取り可能なデータがあるかどうかを確認します。
  - `String receivedData = mySerial.readStringUntil('\n');`：改行に基づいて文字列を読み取ります。
  - `Serial.print("Received data: ");`：データが受信されたことを示すメッセージをハードウェアシリアルに印刷します。
  - `Serial.println(receivedData);`：受信側RS485に送信されたデータを印刷します。

## RS485伝送結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_V2AI/photo/rs485_result.png" style={{width:1000, height:'auto'}}/></div>

## リソース

- **[SCH]** [Seeed Studio XIAO-RS485-拡張ボード回路図](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/Seeed_Studio_XIAO_RS485_Expansion_Board.kicad_sch)
- **[PDF]** [Seeed Studio XIAO-RS485-拡張ボード回路図](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/Seeed_Studio_XIAO_RS485_Expansion_Board.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
