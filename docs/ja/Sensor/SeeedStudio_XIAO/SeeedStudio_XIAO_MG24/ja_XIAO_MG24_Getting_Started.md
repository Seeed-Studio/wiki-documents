---
title: Seeed Studio XIAO MG24 の使い方
description: |
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg
slug: /ja/xiao_mg24_getting_started
keywords:
  - XIAO
  - MG24
last_update:
  date: 05/15/2025
  author: Jason
sidebar_position: 0
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg" style={{width:600, height:'auto'}}/></div>
<br />

# Seeed Studio XIAO MG24(Sense) の使い方

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO MG24</th>
			<th>Seeed Studio XIAO MG24 Sense</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop0.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## 概要

**Seeed Studio XIAO MG24** は、Silicon Labs の MG24 をベースにした小型開発ボードです。XIAO MG24 は **ARM Cortex-M33 コア**、**32ビット RISC** アーキテクチャを採用し、最大クロック速度は 78MHz で、DSP 命令と FPU 浮動小数点演算をサポートし、強力な計算能力を備えています。また、**AI/ML ハードウェアアクセラレータ MVP** を内蔵しており、AI/機械学習アルゴリズムを効率的に処理できます。さらに、優れた RF 性能を持ち、送信 **出力は最大 +19.5 dBm**、受信感度は **最低 -105.4 dBm** です。**Matter、Thread、Zigbee、Bluetooth LE 5.3、Bluetooth mesh** などの複数の IoT およびワイヤレス通信プロトコルをサポートしています。

### 仕様

<table align="center">
	<tr>
	    <th>項目</th>
	    <th>Seeed Studio XIAO MG24</th>
        <th>Seeed Studio XIAO MG24 Sense</th>
	</tr>
	<tr>
	    <th>プロセッサ</th>
	    <td align="center" colspan="2">Silicon Labs EFR32MG24 <br></br>ARM Cortex-M33 @ 78MHz </td>
	</tr>
	<tr>
	    <th>ワイヤレス</th>
	    <td align="center" colspan="2">完全な 2.4GHz Wi-Fi サブシステム <br></br> BLE: Bluetooth 5.3, Bluetooth mesh</td>
	</tr>
    <tr>
	    <th>内蔵センサー</th>
	    <td align="center"> - </td>
        <td align="center">6軸 IMU(LSM6DS3TR-C) <br></br>アナログマイク(MSM381ACT001)</td>
	</tr>
    <tr>
	    <th>メモリ</th>
	    <td align="center">256kB RAM & 1538KB + 4MB フラッシュ</td>
        <td align="center">256kB RAM & 1538KB + 4MB フラッシュ</td>
	</tr>
    <tr>
	    <th>インターフェース</th>
	    <td>2x UART, 1x IIC, 2x SPI, 18x アナログ, 18x デジタル, ALL PWM, 1x ユーザー LED, 1x 充電 LED <br></br> 1x リセットボタン</td>
	    <td>2x UART, 1x IIC, 2x SPI, 18x アナログ, 18x デジタル, ALL PWM, 1x ユーザー LED, 1x 充電 LED <br></br> 1x リセットボタン</td>
	</tr>
    <tr>
	    <th>寸法</th>
	    <td align="center">21 x 17.8mm</td>
        <td align="center">21 x 17.8mm</td>
	</tr>
    <tr>
	    <th rowspan="2">電源</th>
	    <td colspan="2" align="center">入力電圧 (Type-C): 5V@14mA <br></br> 入力電圧 (BAT): 3.7V@7mA</td>
	</tr>
    <tr>
	    <td align="center">バッテリー充電電流: <strong>200mA</strong></td>
		<td align="center">バッテリー充電電流: <strong>200mA</strong></td>
	</tr>
    <tr>
        <th>低消費電力モード</th>
        <td>通常: <strong>3.7V/6.71 mA</strong> <br></br> スリープモード: <strong>3.7V/1.91mA</strong> <br></br> ディープスリープモード: <strong>3.7V/1.95μA</strong></td>
        <td>通常: <strong>3.7V/6.71 mA</strong> <br></br> スリープモード: <strong>3.7V/1.91mA</strong> <br></br> ディープスリープモード: <strong>3.7V/1.95μA</strong></td>
    </tr>
    <tr>
        <th>動作温度</th>
        <td colspan="2" align="center">-20°C ~ 70°C</td>
    </tr>
</table>

### 特徴

- **強力な CPU**: ARM Cortex-M33 コア、最大クロック速度 78MHz、DSP 命令と FPU 浮動小数点演算をサポートする 32ビット RISC アーキテクチャ。
- **超低消費電力**: RX 電流 4.6mA/TX 電流 5mA (0dBm)、複数の低消費電力スリープモード。
- **強力な AI**: AI/ML ハードウェアアクセラレータ MVP を内蔵し、AI/機械学習アルゴリズムを効率的に処理可能。
- **多様なワイヤレス通信**: 2.4GHz マルチプロトコルワイヤレストランシーバーを統合し、Matter、OpenThread、Zigbee、Bluetooth LE 5.3、Bluetooth mesh などの複数の IoT プロトコルをサポート。
- **優れた RF 性能**: 送信出力最大 +19.5 dBm、受信感度最低 -105.4 dBm (250kbps DSSS)。
- **強力なセキュリティ**: Secure Vault の強力なセキュリティ機能を備え、セキュアブート、暗号化、乱数生成、改ざん防止、セキュアデバッグなどを提供。
- **超小型サイズ**: 21 x 17.8mm。
- **豊富なオンチップリソース**: 最大 1536KB フラッシュと 256KB RAM を備え、十分なストレージスペースを提供。
- **豊富なインターフェース**: 12ビット 1Msps ADC、温度センサー、アナログコンパレータ、DCDC などの豊富な周辺機器を統合し、最大 22 ピン、2 USART、2 低消費電力 UART、1 IIC などのインターフェースを提供。

## ハードウェア概要

<table align="center">
	<tr>
	    <th>XIAO MG24 センス表示図</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24sense_pinlist.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
  	<tr>
	    <th>XIAO MG24 表示図</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24_pinlist.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO MG24 / XIAO MG24(Sense) ピンリスト</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/modifyMG24.png" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>

:::tip
  2つの開発ボードの違いは、MG24 Senseにはマイクロフォンセンサーと6軸加速度センサーが搭載されている点で、MG24にはこれらがありません。
:::

- 5V - これはUSBポートからの5V出力です。また、電圧入力としても使用できますが、外部電源とこのピンの間にアノードをバッテリー側、カソードを5Vピン側に接続したダイオード（ショットキー、信号、電力）が必要です。
- 3V3 - これはオンボードレギュレーターからの安定化出力です。
- GND - 電源/データ/信号のグランドです。



## はじめに

XIAO MG24 を迅速に使い始めるために、以下のハードウェアおよびソフトウェアの準備をお読みください。

### 工場出荷時の手順

新しい XIAO MG24 および XIAO MG24 Sense には、簡単な工場出荷時プログラムが事前にインストールされています。

1. **XIAO MG24**

通常版にプリセットされている工場出荷時プログラムは「点滅ライト」です。XIAO を電源に接続すると、オレンジ色のユーザーインジケーターが点灯します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/00.gif" style={{width:500, height:'auto'}}/></div>

2. **XIAO MG24 Sense**

通常版にプリセットされている工場出荷時プログラムは「大声で叫ぶほどライトが明るくなる」です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/99.gif" style={{width:500, height:'auto'}}/></div>

### ハードウェアの準備

以下を準備してください：

- 1 x [Seeed Studio XIAO MG24](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- 1 x コンピュータ
- 1 x USB Type-C ケーブル

:::tip
一部のUSBケーブルは電力供給のみでデータ転送ができません。USBケーブルをお持ちでない場合や、USBケーブルがデータ転送可能かどうかわからない場合は、[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html) を確認してください。
:::

### ソフトウェアの準備

XIAO MG24 の推奨プログラミングツールは Arduino IDE です。そのため、ソフトウェア準備の一環として Arduino のインストールを完了する必要があります。

:::tip
Arduino を初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くお勧めします。
:::

- **ステップ 1.** お使いのオペレーティングシステムに応じて、安定版の Arduino IDE をダウンロードしてインストールします。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong></a>
</div>

<br></br>

- **ステップ 2.** Arduino アプリケーションを起動します。
- **[ステップ 3](#add-board).** Arduino IDE に XIAO MG24 オンボードパッケージを追加し、「OK」をクリックします。
- **ステップ 4.** Arduino IDE を閉じて再度開きます。

#### XIAO MG24 ボードを追加する {#add-board}

XIAO MG24 ボードをインストールするには、以下の手順に従ってください：

```
https://siliconlabs.github.io/arduino/package_arduinosilabs_index.json 
```

1. 上記のボードマネージャーURLを Arduino IDE の設定に追加します。

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/13(1).png" style={{width: 'auto', height: 'auto'}}/></div>

2. XIAO MG24 ボードパッケージをダウンロードします。

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/14(1).png" style={{width: 'auto', height: 'auto'}}/></div>

:::tip 
入力後に見つからない場合は、Arduino IDE を再起動してください。
:::
3. `XIAO_MG24` バリアントを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/15.png" style={{width:1000, height:'auto'}}/></div>

これでコーディングを楽しめます ✨。

#### 最初の点滅プログラムを実行する

- **ステップ 1.** Arduino アプリケーションを起動します。

- **ステップ 2.** **File > Examples > 01.Basics > Blink** に移動し、プログラムを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/12(1).png" style={{width:1000, height:'auto'}}/></div>

- **ステップ 3.** ボードモデルを **XIAO MG24** に選択し、正しいポート番号を選択してプログラムをアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/16.png" style={{width:1000, height:'auto'}}/></div>

プログラムが正常にアップロードされると、以下の出力メッセージが表示され、XIAO MG24 の右側にあるオレンジ色のLEDが点滅しているのを確認できます。



<div class="table-center">
	<table align="center">
		<tr>
			<th>MG24 点滅コード</th>
			<th>LED 点滅表示</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/7.png" style={{width:700, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/8.gif" style={{width:400, height:'auto'}}/></div></td>
		</tr>
	</table>
</div>

## バッテリー使用

XIAO MG24 には内蔵の電源管理チップが搭載されており、バッテリーを使用して独立して電源を供給したり、XIAO MG24 の USB ポートを介してバッテリーを充電することができます。

XIAO にバッテリーを接続したい場合は、適格な充電式 3.7V リチウムバッテリーを購入することをお勧めします。バッテリーをはんだ付けする際は、正極と負極を区別するよう注意してください。電源の負極は USB ポートに最も近い側であり、電源の正極は USB ポートから離れた側です。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/4444.png" alt="pir" width="800" height="auto"/></div>

:::caution
はんだ付けの際に正極と負極を短絡させてバッテリーや機器を損傷しないよう注意してください。
:::

**バッテリー使用に関する注意事項:**

1. 規格に適合した適格なバッテリーを使用してください。
2. バッテリーを使用中でも、データケーブルを介して XIAO をコンピュータデバイスに接続できます。XIAO には内蔵の回路保護チップが搭載されており、安全です。
3. バッテリー駆動時、XIAO MG24 には LED が点灯しません（特定のプログラムを書き込んでいない限り）。LED の状態で XIAO MG24 が動作しているかどうかを判断しないでください。プログラムによって合理的に判断してください。
4. 現時点では、ソフトウェアを通じてバッテリー残量を確認する方法は提供していません（利用可能なチップピンがないため）。定期的にバッテリーを充電するか、マルチメーターを使用してバッテリー残量を確認してください。

また、バッテリー充電の状態をユーザーに通知するために、充電中のバッテリー状態を示す赤色のインジケーターライトを設計しました。

1. XIAO MG24 にバッテリーが接続されていない場合、Type-C ケーブルを接続すると赤色のライトが点灯し、30 秒後に消灯します。
2. バッテリーが接続され、Type-C ケーブルが充電のために接続されている場合、赤色のライトが点滅します。
3. Type-C を接続してバッテリーが完全に充電されると、赤色のライトが消灯します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/battery_mg24.jpg" style={{width:600, height:'auto'}}/></div>

## バッテリー電圧の読み取り

**ソフトウェアコード**
```cpp
/*
  AnalogReadSerial

  ピン 0 のアナログ入力を読み取り、その結果をシリアルモニターに出力します。
  シリアルプロッター（ツール > シリアルプロッターメニュー）を使用してグラフィカルに表示することもできます。
  ポテンショメータの中央ピンをピン A0 に接続し、外側のピンを +5V とグラウンドに接続してください。

  このサンプルコードはパブリックドメインです。

  https://www.arduino.cc/en/Tutorial/BuiltInExamples/AnalogReadSerial
*/

// setup ルーチンはリセットボタンを押したときに 1 回実行されます:
void setup() {
  Serial.begin(115200);
  pinMode(PD3, OUTPUT);
  digitalWrite(PD3, HIGH);
}

void loop() {
  int voltageValue = analogRead(PD4);
  float voltage = voltageValue * (5.0 / 4095.0);
  
  Serial.print("電圧: ");
  Serial.print(voltage, 2);
  Serial.println(" V");
  delay(1000);  // 安定性のために読み取り間隔を遅延
}
```
**表示結果**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/55.png" alt="pir" width="800" height="auto"/></div>

## ディープスリープとスリープの例

#### デモ1 : スリープモードとウェイクアップ

```cpp
/*
   ArduinoLowPower タイマー付きスリープの例

   この例では、Arduino Low Powerライブラリを使用してデバイスを一定時間スリープさせる基本的な使い方を示します。
   デバイスは2000msの間スリープモードに入ります。スリープ中、CPUは停止しますが、RAMの内容は保持されます。

   この例はすべてのSilicon Labs Arduinoボードと互換性があります。

   作成者: Tamas Jozsi (Silicon Labs)
 */

#include "ArduinoLowPower.h"

void setup()
{
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.println("タイマー付きスリープ");
}

void loop()
{
  digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
  delay(500);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  delay(500);

  Serial.printf("スリープに入ります: %lu\n", millis());
  LowPower.sleep(2000);
  Serial.printf("スリープから復帰しました: %lu\n", millis());
}
```

#### デモ2 : ディープスリープモードとウェイクアップ

```cpp
/*
   ArduinoLowPower ディープスリープの例（外部またはタイマー付きウェイクアップ）

   この例では、Arduino Low Powerライブラリを使用してデバイスをディープスリープに入れる基本的な使い方を示します。
   デバイスはスリープタイマーが切れるまでディープスリープ状態を維持します。
   ディープスリープ中、デバイス全体が電源オフされますが、バックアップRAMやRTCなどの最小限の周辺機器は動作します。
   これにより、CPUは停止し、RAMの内容は失われます。ウェイクアップ後、デバイスはスケッチの最初から再起動します。

   この例はすべてのSilicon Labs Arduinoボードと互換性があります。

   作成者: Tamas Jozsi (Silicon Labs)
 */

#include "ArduinoLowPower.h"

void setup()
{
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.println("ディープスリープタイマー付きウェイクアップ");
}

void loop()
{
  digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
  delay(500);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  delay(500);

  Serial.printf("10秒間ディープスリープに入ります: %lu\n", millis());
  LowPower.deepSleep(10000);
}
```

#### デモ3 : フラッシュ付きディープスリープとウェイクアップ

:::tip
フラッシュをディープスリープに設定する場合、0xb9レジスタを有効にする必要があります。
:::

```cpp
/*
   ArduinoLowPower ディープスリープの例（外部またはタイマー付きウェイクアップ）

   この例では、Arduino Low Powerライブラリを使用してデバイスをディープスリープに入れる基本的な使い方を示します。
   デバイスはスリープタイマーが切れるまでディープスリープ状態を維持します。
   ディープスリープ中、デバイス全体が電源オフされますが、バックアップRAMやRTCなどの最小限の周辺機器は動作します。
   これにより、CPUは停止し、RAMの内容は失われます。ウェイクアップ後、デバイスはスケッチの最初から再起動します。

   この例はすべてのSilicon Labs Arduinoボードと互換性があります。

   作成者: Tamas Jozsi (Silicon Labs)
 */
#include <Arduino.h>
#include "ArduinoLowPower.h"

#define CS_PIN PA6
#define CLK_PIN PA3
#define MOSI_PIN PA5
#define MISO_PIN PA4

#define READ_DATA 0x03
#define WRITE_ENABLE 0x06
#define PAGE_PROGRAM 0x02
#define SECTOR_ERASE 0x20

void sendSPI(byte data) {
  for (int i = 0; i < 8; i++) {
    digitalWrite(MOSI_PIN, data & 0x80);
    data <<= 1;
    digitalWrite(CLK_PIN, HIGH);
    delayMicroseconds(1);
    digitalWrite(CLK_PIN, LOW);
    delayMicroseconds(1);
  }
}

void writeEnable() {
  digitalWrite(CS_PIN, LOW);
  sendSPI(WRITE_ENABLE);
  digitalWrite(CS_PIN, HIGH);
}

void setup()
{
  //Serial.begin(115200);
  pinMode(PA7, OUTPUT);
  digitalWrite(PA7, LOW);

  pinMode(CS_PIN, OUTPUT);
  pinMode(CLK_PIN, OUTPUT);
  pinMode(MOSI_PIN, OUTPUT);
  pinMode(MISO_PIN, INPUT);

  //SW
  pinMode(PD3, OUTPUT);
  pinMode(PB5, OUTPUT);
  pinMode(PB1, OUTPUT);
  pinMode(PB0, OUTPUT);
  pinMode(PA6, OUTPUT);
  digitalWrite(PD3, LOW); //VBAT
  digitalWrite(PB5, LOW); //RF_SW
  digitalWrite(PB1, LOW); //IMU
  digitalWrite(PB0, LOW); //MIC
  digitalWrite(PA6, HIGH);  //FLASH

  //Serial.println("ディープスリープタイマー付きウェイクアップ");
  writeEnable();
  digitalWrite(CS_PIN, LOW);
  sendSPI(0xB9);
  digitalWrite(CS_PIN, HIGH);
}

void loop()
{
  delay(12000);  
  digitalWrite(PA7, HIGH);
  delay(500);

  //Serial.printf("10秒間ディープスリープに入ります: %lu\n", millis());
  LowPower.deepSleep(600000);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/100.png" style={{width:1000, height:'auto'}}/></div>

### ディープスリープ中にXIAO MG24がブリック化するのを防ぐ方法

**XIAO MG24**はSeeed Studioから提供される強力なマイクロコントローラーボードですが、ディープスリープモードに入った後にデバイスが応答しなくなる（「ブリック化」する）問題が報告されています。このチュートリアルでは、問題の原因を説明し、詳細な復旧方法を提供し、XIAO MG24がブリック化しないようにする予防策を紹介します。

XIAO MG24は省電力を目的として**ディープスリープモード**（EM4）に入りますが、場合によっては正常に復帰できず、新しいスケッチをアップロードできなくなることがあります。他のXIAOボードとは異なり、MG24には専用の**BOOTボタン**やブートモードに入るための公式な方法がないため、復旧が困難です。

#### 予防策

ディープスリープモードを使用する際にXIAO MG24がブリック化しないようにするには、以下の手順に従ってください：

1. エスケープピン（PC0）を使用する

XIAO MG24には、ブリック化を防ぐための**エスケープメカニズム**が内蔵されています。リセット中に**PC0**を**LOW**にすると、デバイスは無限ループに入り、新しいスケッチをアップロードできるようになります。  
- **PC0**を**GND**に接続してからデバイスをリセットします。  
- リセット後、デバイスがループ中にスケッチをアップロードします。

2. スケッチを修正する  
以下のコードをスケッチに追加して、ユーザースイッチを検出し、押された場合に無限ループに入るようにします。これにより、デバイスがループ中に新しいスケッチをアップロードできます：

```cpp
#define USER_SW  PC3   // ユーザースイッチ用の例のピン

void setup() {
  // 他のセットアップコード...

  pinMode(USER_SW, INPUT_PULLUP);
  if (digitalRead(USER_SW) == LOW) {
    Serial.println("新しいスケッチをアップロード可能");
    while (true) {
      digitalWrite(LED_BUILTIN, LOW);
      delay(50);
      digitalWrite(LED_BUILTIN, HIGH);
      delay(50);
    }
  }
}
```

3. 不要なフラッシュスリープを避ける  


スケッチがフラッシュメモリをスリープモード（`Deep Power Down`）に入れないようにしてください。これは、新しいスケッチのアップロード時に問題を防ぐためです。

#### 謝辞
**Seeed Studio コミュニティ**の皆様に、この問題に対する貴重な貢献と解決策を提供していただき、心より感謝申し上げます。このチュートリアルで説明されている復旧方法と予防策は、**[msfujino](https://forum.seeedstudio.com/u/msfujino)** や **[PJ_Glasso](https://forum.seeedstudio.com/u/PJ_Glasso)** などのコミュニティメンバーの洞察に基づいて開発されました。

詳細や議論については、元のフォーラムスレッドをご覧ください：  
[DeepSleep bricks XIAO_MG24 - Seeed Studio Forum](https://forum.seeedstudio.com/t/deepsleep-bricks-xiao-mg24/284889)

## 復旧方法

XIAO MG24は現在、シリアルポートチップを搭載した唯一のXIAOモデルです。他のXIAOモデルとは異なり、BOOTボタンやBOOT復旧方法がありません。この設計上の欠陥により、デバイスがスリープモードに入ったり、ソフトウェア異常が発生した場合、シリアルポート経由でプログラムをアップロードできなくなる問題が発生します。この問題に対処するため、シリアルポートを復旧し、機能を回復する方法を提供します。

### Windows向けの解決策

1. **パッケージのダウンロードと解凍**  
   - 提供されたZIPファイルをダウンロードします。
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_MG24/xiao_mg24_flash_erase_windows.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> ZIPをダウンロード 🖱️</font></span></strong>
    </a>
</div><br />
   - コンピュータ上のフォルダに内容を解凍します。

2. **XIAO MG24を接続**  
   - USBケーブルを使用して、応答しないXIAO MG24をコンピュータに接続します。

3. **スクリプトを実行**  
   - 解凍したフォルダを開き、スクリプト `flash_erase.bat` を探します。  
   - スクリプトをダブルクリックして実行します。  
   - スクリプトはフラッシュメモリを消去し、デバイスをリセットします。

4. **復旧を確認**  
   - スクリプトが完了した後、XIAO MG24が復旧し、使用可能になるはずです。

### macOS向けの解決策

1. **パッケージのダウンロードと解凍**  
   - 提供されたZIPファイルをダウンロードします（リンクは後で追加されます）。
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_MG24/xiao_mg24_flash_erase_macos.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> ZIPをダウンロード 🖱️</font></span></strong>
    </a>
</div><br />
   - コンピュータ上のフォルダに内容を解凍します。

2. **XIAO MG24を接続**  
   - USBケーブルを使用して、応答しないXIAO MG24をコンピュータに接続します。

3. **ターミナルアクセスを許可**  
   - **システム環境設定** > **セキュリティとプライバシー** > **プライバシー**を開きます。  
   - **アクセシビリティ**の下で、**ターミナル**がコンピュータを制御できるように許可します。  
   - ターミナルがリストにない場合は、**+**ボタンをクリックして手動で追加します。

4. **スクリプトを実行**  
   - **ターミナル**を開きます。  
   - `cd`コマンドを使用して解凍したフォルダに移動します。例：  
     ```bash
     cd /path/to/extracted/folder
     ```  
   - 以下のコマンドを使用してスクリプト `xiao_mg24_erase.sh` を実行します：  
     ```bash
     ./xiao_mg24_erase.sh
     ```  
   - スクリプトはOpenOCDを使用してフラッシュメモリを消去し、デバイスをリセットします。

5. **復旧を確認**  
   - スクリプトが完了した後、XIAO MG24が復旧し、使用可能になるはずです。

:::note
- macOSがOpenOCDを認識しない場合は、OpenOCDがインストールされていることを確認し、スクリプトで正しいパスが使用されていることを確認してください。  
- 提供されたスクリプトはXIAO MG24専用に設計されており、他のXIAOモデルでは使用しないでください。  
:::

## リソース

### Seeed Studio XIAO MG24 Sense 用

- 📄 **[PDF]** [Seeed Studio XIAO MG24 Sense データシート](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24-group-datasheet.PDF)
- 📄 **[PDF]** [Seeed Studio XIAO MG24 Sense 回路図](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MGM240S_KICAD_Prj.pdf)
- 📄 **[PDF]** [Seeed Studio XIAO MG24 Sense ワイヤレス SoC](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/efr32xg24_rm.pdf)
- 🔗 **[Kicad]** [Seeed Studio XIAO MG24 Sense フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- 📄 **[ZIP]** [Seeed Studio XIAO MG24 Sense PCB & SCH](https://files.seeedstudio.com/wiki/XIAO_MG24/XIAO_MG24_Sense_v1.0_SCH&PCB.zip)


### Seeed Studio XIAO MG24 用
- 📄 **[PDF]** [Seeed Studio XIAO MG24 データシート](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24-group-datasheet.PDF)
- 📄 **[PDF]** [Seeed Studio XIAO MG24 回路図](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MGM240S_KICAD_Prj.pdf)
- 📄 **[PDF]** [Seeed Studio XIAO MG24 ワイヤレス SoC](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/efr32xg24_rm.pdf)
- 🔗 **[Kicad]** [Seeed Studio XIAO MG24 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- 📄 **[ZIP]** [Seeed Studio XIAO MG24 PCB & SCH](https://files.seeedstudio.com/wiki/XIAO_MG24/XIAO_MG24_v1.0_SCH&PCB.zip)


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>