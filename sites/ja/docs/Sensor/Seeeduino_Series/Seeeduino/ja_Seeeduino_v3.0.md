---
description: Seeeduino v3.0
title: Seeeduino v3.0
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino_v3.0
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/img/Seeeduino_v3.0_top.jpg)

## 概要 ##
Seeeduino v3はATmega328をベースとしたマイクロコントローラボードで、Arduino互換のボードです。FTDI USB-to-シリアルドライバチップを搭載しており、コンピュータとボード間の通信を可能にするブリッジとして機能します。このボードには14個のデジタルピン（6つのPWMピンとUARTポートを含む）と8つのアナログピン、16 MHzのセラミック共振器、USB接続、リセットボタン、ICSPヘッダー、DC電源ジャックが備わっています。また、2つのトグルスイッチがあり、1つはATmega328の入力電圧を切り替えるため、もう1つはDTRピンの有効/無効を切り替えるためのものです。これにより、ATmega328の影響を受けずにFTDI機能を単独で使用することができます。さらに、2つの白いGroveコネクタがあり、Grove製品をボードと簡単に接続できます。

## 仕様 ##
|項目|値|
|---|---|
| マイクロコントローラ|Atmel ATmega328 (AVR 8ビット) TQFP-32パッケージ |   
| ボード（ブートローダー）|Arduino Duemilanove w/Atmega328 |   
| 動作電圧|5Vまたは3.3V（スライドスイッチで選択可能） |  
| 3V3ポートおよび5Vポートの最大出力電流|5Vポート - 500mA、3V3ポート - 800mA（DCジャックまたはVinで給電が必要） |   
| デジタルピンの最大出力電流|40mA |   
| miniUSB入力電圧|5V。最大5.5V。 |
| DCジャックおよびVin入力電圧|7Vから12V（低い方が推奨）。最大20V。入力が7V未満でスイッチが5Vに設定されている場合、AVRのVCCは入力電圧より約2V低くなります。 |   
| デジタルI/Oピン|14（うち6つはPWM出力を提供） |
| アナログ入力ピン|8（うち2つはI2C通信用 - PC4およびPC5） |   
| フラッシュメモリ|32 KB |
| SRAM|2 KB |
| EEPROM|1 KB |
| クロックスピード|16 MHz |

## 使用方法 ##

### USB-to-シリアル ###

SeeeduinoにはFTDI USB-to-シリアルドライバチップ（FT232R）が搭載されており、USB-to-シリアルコンバータとしてプログラムされています。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/img/Seeeduino_FTDI.png)

FT232Rの10個のピンが示されており、ICSPポートの隣に配置されているため、必要に応じてこれらのピンを簡単に使用できます。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/img/Seeeduino_FTDI_pinout.png)

ボード上には「M_RST_AUTO」というトグルスイッチがあります。これは、ホストからのDTR信号がATmega328マイクロコントローラをリセットすることを許可するかどうかを決定します。

- 「AUTO」に設定すると、自動モードになり、ホストがDTR信号を使用してマイクロコントローラを自動的にリセットできます。この位置は開発中に必要であり、ほとんどの人にとってデフォルトの位置となります。
- 「M」に設定すると、手動モードになり、ホストからのDTR信号が無効になり、ユーザーがリセットボタンを物理的に押してマイクロコントローラをリセットする必要があります。また、FT232Rを単独で使用したい場合は「M」モードに設定する必要があります。

FTDIチップに関する詳細情報は、[FTDIの公式ホームページ](https://www.ftdichip.com/index.html)をご参照ください。

### ブレークアウト ###

SeeeduinoはATmega328をベースとしたメインボードで、すべての有用なピンが示されています。Seeeduinoには電源ピン、14個のデジタルIOピン、8個のアナログピンがあり、そのうち6つのデジタルIOピンはPWM出力として使用できます。Seeeduinoのすべてのピンは2.54mm間隔のヘッダーに配線されています。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/img/Seeeduino_pinout.png)

ボード上の14個のデジタルピンは、それぞれ入力または出力として使用できます。[pinMode()](https://arduino.cc/en/Reference/PinMode)、[digitalWrite()](https://arduino.cc/en/Reference/DigitalWrite)、[digitalRead()](https://arduino.cc/en/Reference/DigitalRead)関数を使用して操作します。トグルスイッチ「3V3_VCC_5V」を異なる位置に切り替えることで、5ボルトまたは3.3ボルトで動作します。各ピンは最大40mAを供給または受信できます。また、[SoftwareSerial](https://arduino.cc/en/Reference/SoftwareSerial)ライブラリを使用して、任意のデジタルピンでシリアル通信を行うことができます。

#### UART: D0 (RX) および D1 (TX) ####

これらのピンはTTLシリアルデータの受信および送信に使用できます。この2つのピンはFTDIチップに接続されており、コンピュータと周辺機器間の直接通信を可能にします。

#### 外部割り込み: D2 および D3 ####

これらの2つのピンはATmega328の外部割り込みであり、低値、立ち上がりエッジ、立ち下がりエッジ、または値の変化で割り込みをトリガーするように設定できます。詳細は[attachInterrupt()関数](https://arduino.cc/en/Reference/AttachInterrupt)を参照してください。

#### PWM: D3, D5, D6, D9, D10, D11 ####

PWM（パルス幅変調）は、デジタル手段でアナログ結果を得るための技術です。[analogWrite()](https://arduino.cc/en/Reference/AnalogWrite)を使用して生成され、HIGHとLOWのパルス信号を繰り返す出力を提供します。SeeeduinoのPWM周波数は約500Hzであり、[analogWrite()](https://arduino.cc/en/Reference/AnalogWrite)関数を使用して8ビットのPWM出力を提供します。詳細は[PWM](https://arduino.cc/en/Reference/AnalogWrite)を参照してください。

#### SPI: D10 (SS), D11 (MOSI), D12 (MISO), D13 (SCK) ####

これらのピンは[SPIライブラリ](https://arduino.cc/en/Reference/SPI)を使用してSPI通信をサポートします。

##### SPIダイアグラム #####

| MISO (D12)|VCC  |   
|---|---|
| SCK(D13)|MOSI(D11)  |   
|  リセット|GND |   

#### 「L」インジケータ ####

ボード上には「L」というLEDがあり、D13に接続されています。このLEDはD13を介して制御できます。

アナログヘッダーには8つのアナログピンがあり、A0からA7までラベル付けされています。各ピンは10ビットの解像度を提供します。これは、0Vから5V（または0Vから3.3V）のアナログ入力が0から1024（または0から675）にマッピングされることを意味します。[analogRead()](https://arduino.cc/en/Reference/AnalogRead)を使用してアナログ入力から値を取得できます。

#### I2C: A4 (SDA) および A5 (SCL) ####

Seeeduinoは特定のアドレスを持つスレーブI2Cデバイスを制御するためのバスクロックを生成できます。Grove I2CもA4およびA5に接続されています。

ボードにはリセットボタンがあり、RSTピンに接続されています。このボタンを押すとピンがプルダウンされ、ATmega328が再起動します。

### 電源 ###

SeeeduinoはUSBまたはDCジャックコネクタ（Vin）を介して電源を供給できます。USBを使用して電源を供給する場合、入力電圧はコンピュータやUSB壁アダプタのように5VDCに調整されている必要があります。一方、DCジャックを選択する場合、2.1mmのセンターポジティブプラグで5.5mmの外部穴が必要です。DC電源入力は7〜20Vである必要がありますが、入力電圧が高いと過熱する可能性があるため、7〜12Vが推奨されます。ボードには電圧レギュレータが搭載されており、5Vを3.3Vに変換できます。「3V3_VCC_5V」トグルスイッチを3V3位置に切り替えると、ATmega328の入力電圧が3.3Vに変更され、ボードは3.3ボルトで動作します。

### Groveコネクタ ###

Seeeduinoには2つの白いGroveコネクタがあります。1つはIICポートで、もう1つはUARTポートです。この2つのポートはATmega328から出力されており、Grove製品をボードに簡単に接続できるように設計されています。

### オンボードインジケータ ###

ボードにはいくつかのインジケータがあり、ステータスを表示できます。

| ラベル | 接続 |
|---|---|
| "L"ラベルのユーザーLED | ATmega328P PB5/SCKピン（デジタルヘッダーピン13）に接続されています。 |
| "RST"ラベルのリセットLED | ATmega328P PC6/RESETピンに接続されています。リセットが低いと点灯します。 |
| "PWR"ラベルの電源LED | ATmega328P VCCピンに接続されています。 |
| "TX"ラベルの送信LED | FT232RL CBUS1ピンに接続されています。 |
| "RX"ラベルの受信LED | FT232RL CBUS0ピンに接続されています。 |

## 関連資料 ##

- [Seeeduinoの使い方](https://seeeddoc.github.io/How_to_use_Seeeduino/)
- [バージョントラッカー](https://seeeddoc.github.io/Seeeduino/)

## ライセンス ##

このドキュメントはCreative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/)の下でライセンスされています。ソースコードとライブラリは[GPL/LGPL](http://www.gnu.org/licenses/gpl.html)の下でライセンスされています。詳細についてはソースコードファイルを参照してください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/SeeeduinoV3.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース ##

- **[ソース]**[Seeeduino v3.0_Source_files](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/SeeeduinoV3.0_Source_File.zip)
- **[PDF]**[Seeeduino v3.0 PCB](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/Seeeduino%20v3.0%20PCB.pdf)
- **[PDF]**[Seeeduino v3.0 SCH](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/Seeeduino_v3.0%20SCH.pdf)
- **[PDF]**[回路図（PDF）](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/Seeeduino_v3.0.pdf)

## 技術サポートと製品ディスカッション ##

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>