---
description: このガイドでは、Seeed Studio XIAO RS485拡張ボードを迅速にセットアップし、RS485通信を開始する方法を説明します。
title: XIAO用RS485拡張ボード
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.webp
slug: /ja/XIAO-RS485-Expansion-Board
last_update:
  date: 05/15/2025
  author: Jason
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO-RS485-Expansion-Boardの使い方

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.jpg" style={{width:600, height:'auto'}}/></div>

## ハードウェア概要

### 必要な材料

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO RS485拡張ボード</th>
			<th>Seeed Studio XIAO ESP32-C3</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/hadware.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/esp32.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Breakout-Board-for-XIAO-p-6306.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

### ピン配置図

<div class="table-center">
  <table align="center">
    <tr>
        <th>XIAO RS485拡張ボードの説明図</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/pinlist.png" style={{width:700, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

- 5V OUT/INスイッチ：5Vポートの入力および出力を切り替えます。スレーブがINに設定されている場合は入力として機能し、ホストがOUTに設定されている場合は外部に放電されます。このポートはセンサーに接続してセンサーの電源供給に使用できます。

- 120Rスイッチ：120Rスイッチは、120オームの抵抗が接続可能かどうかを決定します。485通信では、長い配線環境の始端と終端に120オームの抵抗を追加してマッチングを行い、通信を確保する必要があります。

- INT：予約された割り込みポート。

:::tip
入力モードとして使用する場合はスイッチをINに切り替え、出力モードとして使用する場合はスイッチをOUTに切り替えて、焼損を防止してください。
:::

### 接続回路図

<div class="table-center">
  <table align="center">
    <tr>
        <th>2つのRS485拡張ボードの接続</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/connect1.png" style={{width:700, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

## ソフトウェア概要

### 送信側コード

```cpp
#include <HardwareSerial.h>

HardwareSerial mySerial(1); 


#define enable_pin D2 // enable ピンを D2 として定義

void setup() {
  Serial.begin(115200); // ハードウェアシリアルを 115200 のボーレートで初期化
  mySerial.begin(115200, SERIAL_8N1, 7, 6); // RX=D4(GPIO4), TX=D5(GPIO5)

  
  // ハードウェアシリアルが準備完了するまで待機
  while(!mySerial);
  // ハードウェアシリアルが準備完了するまで待機
  while(!Serial);

  pinMode(enable_pin, OUTPUT); // enable ピンを出力として設定
  digitalWrite(enable_pin, HIGH); // enable ピンを HIGH に設定
}

void loop() {
if (Serial.available()) {
    String receivedData = Serial.readStringUntil('\n'); // ハードウェアシリアルからデータを改行文字まで読み取る

    // 受信データが空でない場合
    if (receivedData.length() > 0) {
        Serial.println("送信成功"); // 成功メッセージを表示
        mySerial.print("マスターが送信した情報: "); // ハードウェアシリアルにプロンプトメッセージを送信
        mySerial.println(receivedData); // 受信データをハードウェアシリアルに送信
    }
  }
}

```
- **HardwareSerial ライブラリ:** ESP32 上で追加のシリアルポートを作成するために使用され、通常はデバイス（センサーやモジュールなど）との通信に使用されます。
- `HardwareSerial mySerial(1); `: D5 と D4 を受信および送信ピンとして使用する HardwareSerial オブジェクト mySerial を定義します。
- `#define enable_pin D2`: RS485 モジュールの送信および受信状態を制御するための enable ピンを定義します。

- `setup()`:
  - `Serial.begin(115200`: ハードウェアシリアルポートを 115200 のボーレートで初期化します。
  - `mySerial.begin(115200, SERIAL_8N1, 7, 6);`: RX=D4(GPIO4), TX=D5(GPIO5)。
  - `while(!mySerial)`: ハードウェアシリアルが通信準備完了するまで待機します。
  - `while(!Serial)`: ハードウェアシリアルが通信準備完了するまで待機します。
  - `pinMode(enable_pin, OUTPUT)`: enable_pin を出力ピンとして設定し、RS485 モジュールを制御します。
  - `digitalWrite(enable_pin, HIGH)`: enable_pin を HIGH に設定し、RS485 モジュールを送信モードに設定します。

- `loop():`
  - `if (receivedData.length() > 0)`: ハードウェアシリアルポートから読み取れるデータがあるか確認します。
  -  `String receivedData = Serial.readStringUntil('\n');` : ハードウェアシリアルから改行文字までデータを読み取ります。
  - `Serial.println("送信成功")`: 成功メッセージを表示します。
  - `mySerial.print("マスターが送信した情報: ")`: ハードウェアシリアルにプロンプトメッセージを送信します。
  - `mySerial.println(receivedData)` : 必要なデータを RS485 拡張ボードに送信します。


### 受信側コード

```cpp
#include <HardwareSerial.h>

HardwareSerial mySerial(1); // UART2 を使用
#define enable_pin D2 // enable ピンを D2 として定義

void setup() {
  Serial.begin(115200); // ハードウェアシリアルを 115200 のボーレートで初期化
  mySerial.begin(115200, SERIAL_8N1, 7, 6); // RX=D4(GPIO4), TX=D5(GPIO5)
  
  // ハードウェアシリアルが準備完了するまで待機
  while(!Serial);
  // ハードウェアシリアルが準備完了するまで待機
  while(!mySerial);
  
  pinMode(enable_pin, OUTPUT); // enable ピンを出力として設定
  digitalWrite(enable_pin, LOW); // enable ピンを LOW に設定
}

void loop() {
  // ハードウェアシリアルからデータが利用可能か確認
  if (mySerial.available()) {
      String receivedData = mySerial.readStringUntil('\n'); // 改行文字に基づいて文字列を読み取る
      Serial.print("受信データ: ");
      Serial.println(receivedData); // 受信データを直接表示
  }
}

```

- **HardwareSerial ライブラリ:** ESP32 上で追加のシリアルポートを作成するために使用され、通常はデバイス（センサーやモジュールなど）との通信に使用されます。
- `HardwareSerial mySerial(1);`: D5 を RX、D4 を TX として使用する HardwareSerial オブジェクト mySerial を定義します。
- `define enable_pin D2`: RS485 モジュールの送信および受信状態を制御するための enable ピンを定義します。

- `setup()`:
  - `Serial.begin(115200`: ハードウェアシリアルポートを 115200 のボーレートで初期化します。
  - `mySerial.begin(115200, SERIAL_8N1, 7, 6);`RX=D4(GPIO4), TX=D5(GPIO5)。
  - `while(!Serial)`: ハードウェアシリアルポートが通信準備完了するまで待機します。
  - `while(!mySerial)`: ハードウェアシリアルポートが通信準備完了するまで待機します。
  - `pinMode(enable_pin, OUTPUT)`: enable_pin を出力ピンとして設定し、RS485 モジュールを制御します。
  - `digitalWrite(enable_pin, LOW)`: enable_pin を LOW に設定し、RS485 モジュールを受信モードに設定します。

- `loop()`:
  - `if (mySerial.available())`: ハードウェアシリアルポートから読み取れるデータがあるか確認します。
  - `String receivedData = mySerial.readStringUntil('\n');`: 改行文字に基づいて文字列を読み取ります。
  - `Serial.print("受信データ: ");`: データが受信されたことを示すメッセージをハードウェアシリアルに表示します。
  - `Serial.println(receivedData);`: 受信したデータを表示します。

## RS485 送信結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_V2AI/photo/rs485_result.png" style={{width:1000, height:'auto'}}/></div>

## リソース

- **[SCH]** [Seeed Studio XIAO-RS485-拡張ボード回路図](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/Seeed_Studio_XIAO_RS485_Expansion_Board.kicad_sch)
- **[PDF]** [Seeed Studio XIAO-RS485-拡張ボード回路図](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/Seeed_Studio_XIAO_RS485_Expansion_Board.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>