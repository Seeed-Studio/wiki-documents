---
title: Grove - 長距離通信 868MHz
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove_LoRa_Radio/
slug: /ja/Grove_LoRa_Radio
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/cover.jpg)

Groveは、Seeed Studioによって開発された非常に強力なプラットフォームで、IoTプロジェクトを簡素化することを目的としています。Seeedが製造するほとんどのボードにGroveコネクタを統合し、それらをシステムとして機能させるようにしました。今回は、GroveとLoRaを組み合わせて、超長距離のワイヤレスモジュールを提供します。

Grove - LoRa Radio 433MHzの主な機能モジュールはRFM98で、これはLoRa長距離モデムを搭載したトランシーバーであり、超長距離のスペクトラム通信と高い干渉耐性を提供しながら、消費電流を最小限に抑えます。Grove - LoRa Radio 433MHzの中心にはATmega168があり、これは非常に高性能で低消費電力の広く使用されているチップで、このGroveモジュールに特に適しています。

信号を受信するための簡単なワイヤアンテナをすでに統合していますが、信号が弱すぎて受信できない場合でも心配ありません。アンテナの隣にあるMHFコネクタは、MHFインターフェースを持つ第2のアンテナを追加して信号を増強するためのものです。

これは433MHzバージョンで、433MHz通信に使用できます。また、868MHzバージョンはGrove - LoRa Radio 868MHzで見つけることができます。

|バージョン|リリース日|購入方法|
|--------|-----------|-----------|
|Grove - LoRa Radio 433 MHz |2016年12月10日|[![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Grove-LoRa-Radio-433MHz-p-2777.html)|
|Grove - LoRa Radio 868 MHz |2016年12月10日|[![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Grove-LoRa-Radio-868MHz-p-2776.html)|

## 特徴

---

- SX1276 LoRa®に基づくRFM95モジュールを使用
- 動作電圧: 5V/3.3V
- ~28mA(平均) @+20dBm 連続送信
- ~8.4mA(平均) @スタンバイモード
- ~20mA(平均) @受信モード, BW-500kHz
- 動作温度: -20 – 70℃
- インターフェース: Grove - UART(RX,TX,VCC,GND)
- 簡易ワイヤアンテナまたは外部高利得アンテナ用MHFコネクタ
- 動作周波数: 868MHz/433MHz
- +20dBm 100 mW出力能力
- サイズ: 20*40mm
- レート: 0.3kps~50kps
- Arduinoライブラリ対応
- MHFアンテナコネクタを予約済み

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上記でサポートされていると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォーム用のソフトウェアライブラリ/デモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## ハードウェア概要

---

![](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/hardware.png)

1. ATMega168 MCU ([データシート](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/Atmel-2545-8-bit-AVR-Microcontroller-ATmega48-88-168_Datasheet.pdf))
2. MHFコネクタ
3. ワイヤアンテナ
4. RFM95モジュール ([データシート](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/RFM95_96_97_98_DataSheet.pdf))
5. Groveインターフェース

|PIN|NAME|FUNCTION|
|-------|--------|--------|
|1      |TX |UARTのTX|
|2      |RX |UARTのRX|
|3      |VCC|電源供給、3.3Vまたは5V|
|4      |GND|グランド接続|

## アプリケーションアイデア

---

- モノのインターネット (IoT)
- スマートホーム
- センサーハブ
- 長距離無線通信

## はじめに

このセクションの後、**Grove - LoRa Radio**を数ステップで動作させることができます。

### 準備

現在、Grove - LoRa Radio 433MHzを使用してP2P（ポイントツーポイント）通信のデモを作成しています。Grove - LoRa Radio 868MHzも同じ方法で使用できます。

:::tip
    Grove - LoRa Radio 433MHzはGrove - LoRa Radio 868MHzと通信できません。
:::

|アイテム|数量|リンク|
|----|---|----|
|Seeeduino Lotus|2|[今すぐ購入！](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)|
|Grove - LoRa Radio 433MHz|2|[今すぐ購入！](https://www.seeedstudio.com/Grove-LoRa-Radio-433MHz-p-2777.html)|
|Micro USBケーブル|2|[今すぐ購入！](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|

初めて[Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)を使用する場合は、[Seeeduino LotusのWiki](https://wiki.seeedstudio.com/ja/Seeeduino_Lotus/)を参照してください。

Seeeduino LotusはArduinoと完全に互換性があり、Arduinoと同じように簡単に動作します。

Arduinoを初めて使用する場合は、[こちら](https://arduino.cc)でArduinoの旅を始めてください。

### ハードウェアの接続

[Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)はSeeeduinoとBase Shieldの組み合わせです。以下の画像のように、LoRa RadioモジュールをD5ソケットに直接接続できます。

![画像を入力してください](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/demo.jpg)

### ライブラリのダウンロード

ライブラリをダウンロードしてインストールしてください（[Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)）。

[![](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/library.png)](https://github.com/Seeed-Studio/Grove_LoRa_433MHz_and_915MHz_RF/archive/master.zip)

:::tip
    このライブラリはAVR/SAMD/STM32F4デバイスをサポートしており、ハードウェアおよびソフトウェアシリアルの両方に対応しています。
:::
シリアルポートには2種類あります。一つはCOMSerialで、通信ポート（Grove-LoRa Radioとの接続）を表します。もう一つはShowSerialで、シリアル情報表示ポート（PCとの接続）を表します。

ほとんどのArduinoボードには少なくとも1つのシリアルがありますが、一部には複数のシリアルがあります（Arduino Megaには4つのシリアルがあります）。デジタルピン0（RX）と1（TX）で通信し、USBを介してコンピュータと通信します。そのため、ピンD0とピンD1にUARTデバイスを接続する場合、USB経由でプログラムをダウンロードする前にそれらを取り外す必要があります。そうしないとアップロードが失敗する原因になります。ハードウェアシリアルポートの数よりも多くのシリアルポートが必要な場合は、ソフトウェアシリアルを使用してシリアルハードウェアをエミュレートすることができます。ソフトウェアシリアルはデータの送受信にArduinoコントローラの多くの助けを必要とするため、ハードウェアシリアルほど高速または効率的ではありません。シリアルに関する詳細情報は[Seeed Arduino Serial](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Serial/)を参照してください。

- **AVR:** 以下の例では、ソフトウェアシリアルをSSCOM（PCとの接続）として定義します。PCに接続するにはUSBからTTLアダプタが必要です。すべてのデジタルピンがソフトウェアシリアルに使用できるわけではありません。詳細なピンについては[Software Serial](https://www.arduino.cc/en/Reference/SoftwareSerial)を参照してください。ハードウェアシリアルをCOMSerial（Grove-LoRa Radioとの接続）として定義します。ハードウェアシリアルをCOMSerialとして使用し、ソフトウェアシリアルをShowSerialとして使用する場合は、**#define ShowSerial Serial**および**#define COMSerial SSerial**として定義できます。Arduino Megaを使用する場合、ハードウェアシリアルをShowSerialに接続し、他のSerial1/Serial2/Serial3をCOMSerialに接続できます。そのため、AVR Megaの設定を参照してください。

- **SAMD:** 以下の例では、SAMDはソフトウェアシリアルをサポートしていません。ハードウェアシリアル**Serial1**を使用してGrove-LoRa Radioと通信し、**SerialUSB**を使用してPCにメッセージを表示します。

- **STM32F4:** 以下の例では、ハードウェアシリアル**Serial**を使用してGrove-LoRa Radioと通信し、**SerialUSB**を使用してPCにメッセージを表示します。

:::note
    シリアルに関する詳細情報は[Seeed Arduino Serial](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Serial/)を参照してください。
:::

```
#include <RH_RF95.h>

#################### AVR #######################

#ifdef __AVR__

#include <SoftwareSerial.h>
SoftwareSerial  SSerial(10, 11); // RX, TX

#define COMSerial Serial
#define ShowSerial SSerial 

RH_RF95<HardwareSerial> rf95(COMSerial);

#endif

#################### AVR Mega ###################

#ifdef __AVR__

#define COMSerial Serial1
#define ShowSerial Serial 

RH_RF95<HardwareSerial> rf95(COMSerial);

#endif

#################### SAMD ######################

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE

#define COMSerial Serial1
#define ShowSerial SerialUSB 

RH_RF95<Uart> rf95(COMSerial);

#endif

#################### STM32F4 ###################

#ifdef ARDUINO_ARCH_STM32F4

#define COMSerial Serial
#define ShowSerial SerialUSB 

RH_RF95<HardwareSerial> rf95(COMSerial);

#endif
```

### サンプルを開く

Arduino IDEを開き、**File > Examples > Grove_LoRa_433MHz_and_915MHz_RF-master**をクリックすると、モジュール用の多くのサンプルが表示されます。

![](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/library_2.png)

|ノード|サンプル名|機能|
|----|------------|--------|
|送信側|rf95_client|毎秒1回「Hello World」を送信|
|受信側|rf95_server|データを受信して表示|

クリックして **Tools>Board** を選択し、「Seeeduino Lotus」を選択します。その後、対応するシリアルポートを選択し、アップロードボタンをクリックして手順を完了します。

:::tip
    Grove - LoRa Radio 868MHz モジュールを使用している場合は、以下のコードを変更してください。
:::

```c
//rf95.setFrequency(434.0);
rf95.setFrequency(868.0);
```

### 結果の確認

アップロードが完了したら、シリアルモニターを開いて結果を確認できます。

![画像をここに入力](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/result.jpg)

### データレート

以下のチャートは、帯域幅、信号帯域幅、拡散率、および感度の関係を示しています。

![画像をここに入力](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/DateRate.png)

# 433MHz

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/433_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# 868MHz

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/868_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---

- ***回路図***
  - [Grove - LoRa Radio 433MHz v1.0 回路図 (Eagleファイル)](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/433_eagle.zip)
  - [Grove - LoRa Radio 433MHz v1.0 回路図 (PDFファイル)](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/433_sch.pdf)
  - [Grove - LoRa Radio 868MHz v1.0 回路図 (Eagleファイル)](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/868_eagle.zip)
  - [Grove - LoRa Radio 868MHz v1.0 回路図 (PDFファイル)](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/868_sch.pdf)

- ***データシート***
  - [RFM95/96/97 データシート](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/RFM95_96_97_98_DataSheet.pdf)
  - [Atmega168 データシート](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/Atmel-2545-8-bit-AVR-Microcontroller-ATmega48-88-168_Datasheet.pdf)

- ***参考資料***
  - [LoRa Alliance](https://www.lora-alliance.org/)

- ***ライブラリ***
  - [Grove - LoRa Radio ライブラリと例](https://github.com/Seeed-Studio/Grove_LoRa_433MHz_and_915MHz_RF/)
  - [LMIC ライブラリ](https://github.com/matthijskooijman/arduino-lmic)

- [***上記すべてをダウンロード***](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/res.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>