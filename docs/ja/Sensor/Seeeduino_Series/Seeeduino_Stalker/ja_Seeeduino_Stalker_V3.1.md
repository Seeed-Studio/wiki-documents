---
description: Seeeduino Stalker V3.1
title: Seeeduino Stalker V3.1
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino_Stalker_V3.1
last_update:
  date: 05/15/2025
  author: shuxu hu
---


おそらく、Seeeduino Stalkerシリーズに非常に詳しい方もいれば、この機能豊富なワイヤレスセンサーネットワークノードに全く馴染みがない方もいるでしょう。どのような状況であっても、屋外データロギングアプリケーションを作成する予定がある場合、Seeeduino Stalkerが最適なボードであることが分かるでしょう。

このシリーズを作成する主な目的は、ユーザーが屋外アプリケーションをより便利に作成できるようにするためのX-beeキャリアボードを作成することでした。2009年に最初のバージョンがリリースされて以来、Seeedersはユーザーからのフィードバックを継続的に収集し、ボードをアップグレードし続けてきました。過去7年間で6つのバージョンが存在し、この夏、Seeeduino Stalkerファミリーの最新メンバーであるSeeeduino Stalker V3.1をリリースすることに興奮しています。

Seeeduino Stalker V3.1は、単なるV3.0の簡単なアップデートではありません。このボードの主な驚きは、非常に低い電力消費です。スリープモードでは、ボード全体の出力電流が100uAまで低下します。これは、ユーザーのフィードバックに基づいて真に実現されたアップグレードです。（私たちはあなたの意見を本当に大切にしています）。どのようにこれを達成したか見てみましょう。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/cover.JPG)

### バージョントラック

|バージョン|リリース日|購入方法|
|--------|-----------|-----------|
|Seeeduino Stalker V1.0|2009年12月23日|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V2.0|2010年12月10日|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V2.1|2011年10月3日|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V2.2|2011年12月27日|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V2.3|2013年1月10日|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V3.0|2014年6月6日|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V3.1|2016年7月10日|[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Stalker-V3.1-p-2686.html)|

### Seeeduino Stalker V3.1の新機能

**電力管理の改善**

V3.1では、MCUがスリープモードにある場合、Beeエリアポート、3.3Vポート、VCCを含むすべての電力供給を手動で切断できるため、電力を本当に節約することができます。

**その他の変更点**

X-beeエリアにトグルスイッチが追加され、接続したいものに基づいてハードウェアシリアルポートまたはソフトウェアシリアルポートを選択できるようになりました。

また、RTC回路に対応するMCUの2つのINTピンに2つのトグルスイッチを追加しました。これにより、ユーザーはRTC INTポートに接続するINTピンを簡単に選択し、MCUをアクティブ化することができます。

## 特徴

----

- Arduino UNO互換のピン配置とArduino Fioブートローダー
- リポバッテリーマネージャICおよびソーラー充電入力（jst2.0コネクタ）
- オンボードリアルタイムクロックチップ **DS1337S**（RTCのバックアップ電源として機能するCR1220コイン電池用ソケット）
- スタンドアロンモードで動作中にプログラミング時の自動リセットを可能にするDTR付きシリアルインターフェース
- microSDカードソケット
- Groveコネクタ（動作電圧は選択可能：5.0Vまたは3.3V）
- XBeeモジュールおよびATMega328P用のリセットボタン
- Beeシリーズソケット 2*10ピン 2.0mmピッチ

## 仕様

----

|パラメータ              |値              |
|-------------------    ----|---------------|
|マイクロコントローラー   |Atmega328P        |
|クロックスピード         |8 MHz             |
|I/O電圧                 |3.3V              |
|RTC                     |DS1337S        |
|Arduino IDE用ボード      |Arduino ProまたはPro Mini (3.3v , 8 MHz) w/ATmega328    |
|電源供給                |3.7vリポバッテリー、バッテリー充電には5VDCソーラーパネルを使用|
|電源コネクタ            |2ピンJST/ USB|
|接続性                  |I2C, UART, SPI|
|SDカード                |micro SDカード |
|開回路電流              |最大6 mA|
|充電電流                |300mA|
|3.3Vポートの最大電流    |800mA|
|PCBサイズ               |86.74mm x 60.96mm|

## アプリケーションアイデア

----

- ワイヤレスセンサーネットワーク（**XBee**を別途購入）
- GPSロギング（[GPSBee](https://www.seeedstudio.com/wiki/GPS_Bee_kit)を別途購入）
- iPhone/Android Phoneで動作するアプリと通信可能なデータ収集システム（[BluetoothBee](https://www.seeedstudio.com/wiki/Bluetooth_Bee)を別途購入）
- RFリモートコントロール（[RFBee](https://wiki.seeedstudio.com/ja/RFbee_V1.1-Wireless_Arduino_compatible_node/)を別途購入）
- シンプルなスタンドアロンArduino互換物理コンピューティングプラットフォームとして

## ハードウェア概要

----

### 概要

Seeeduino Stalker V3.1は、豊富な機能を備えたアプリケーションボードです。RTC、リポバッテリーコネクタ、Beeソケット、SDカードソケットなどが搭載されています。以下の概要画像は、ボードの各部分を紹介し、ボードをよりよく理解するのに役立ちます。

[![クリックして拡大画像を表示](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/overview.png)](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/overview.png)

| 名前 | 機能 |
|-------|-------------------------------------|
|RTCバッテリー | DS1337Sに電力を供給するセルバッテリー |
|RTC_INT | RTC割り込みスイッチ |
|Beeシリアル選択 | Bee RX/TXピン選択、D0/D1またはD6/D7を選択可能 |
|Beeソケット | Beeを挿入 |
|充電ステータスLED | **OK**: 緑色LED、充電完了時に点灯。 **CH**: 赤色LED、充電中に点灯 |
|BEE RST | Beeをリセット |
|SOLAR | バッテリーを充電するためのソーラー入力、入力電圧4.5~6V |
|LIPO | リポバッテリー入力、3.7V |
|L | D13に接続されたLED、モニターとして使用可能 |
|GROVE2 | Groveポート、I2Cに接続 |
|GROVE1 | Groveポート、D7/8に接続 |
|PROGRAM | プログラミングポート、UartSBeeに接続 |
|RST | ATMega328Pをリセット |
|SDカード | micro SDカードソケット |

### ピンマップ

Seeeduino Stalker V3.1はArduino互換であり、多くのアナログピン、デジタルピン、シリアルピンが利用可能です。以下のピンマップ画像は、使用可能なピンや使用中のピンを判断するのに役立ちます。

[![クリックして拡大画像を表示](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/pinmap1.png)](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/pinmap1.png)

## はじめに

----
これが初めて Seeeduino Stalker をプログラムする場合は、以下の手順に従って開始できます。始める前に、以下のものを用意してください：

|Seeeduino Stalker V3.1|UartSBee V4|Mini USB ケーブル|6ピンケーブル|
|----------------------|-----------|----------------|-------------|
|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/gs_stalker.JPG)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/gs_uartsbee.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/gs_miniusb.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/gs_6pincable.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-Stalker-V3.1-p-2686.html)|[今すぐ購入](https://www.seeedstudio.com/UartSBee-V4-p-688.html)|[今すぐ購入](https://www.seeedstudio.com/Mini-USB-cable-100cm-p-252.html)|[今すぐ購入](https://www.seeedstudio.com/6-pin-dual-female-jumper-wire-300mm-(5-PCs-pack)-p-128.html)|

:::note
    UartSBee V4、Mini USB ケーブル、6ピンケーブルは含まれていません。
:::

### ステップ1: 接続

まず、Stalker を 6ピンジャンパーワイヤーを使って UartSBee に接続し、その後 Mini USB ケーブルを使って UartSBee を PC に接続します。

|Seeeduino Stalker|UartSBee V4|
|-----------------|-----------|
|    DTR          |    DTR    |
|    TXD          |    RXD    |
|    RXD          |    TXD    |
|    5V           |    VCC    |
|    GND          |    GND    |

:::note
    UartSBee V4 の電源スイッチを 5V に設定してください。
:::

### ステップ2: UartSBee とドライバー

UartSBee は、FDTI の FT232RL をベースにした USB からシリアル UART インターフェースです。[ドライバー](https://www.ftdichip.com/FTDrivers.htm)をダウンロードしてください。

この場合、UartSBee は以下の3つの機能を果たします：

- Seeeduino Stalker のプログラム。
- Seeeduino Stalker との通信。
- Seeeduino Stalker（および接続された周辺機器）への電力供給（PC の USB 電源から）。

### ステップ3: Arduino IDE

Seeeduino Stalker は、豊富な機能を備えた Arduino 互換ボードです。Arduino IDE をお持ちでない場合は、最新の Arduino ソフトウェアをダウンロードしてボードをプログラムしてください。

[![画像説明をここに入力](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

### ステップ4: Arduino IDE に Seeeduino Stalker を追加

Arduino IDE のボードオプションには *Seeeduino Stalker* がありません。[Seeed ボードを Arduino IDE に追加する方法](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)をクリックして手順を確認してください。

### ステップ5: 点滅（Blink）

ここでは、Stalker に簡単なコードをアップロードします。Arduino IDE を開き、**ファイル > スケッチ例 > 基本 > Blink** を開きます。

![画像説明をここに入力](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/arduino_blink.png)

その後、アップロードボタンをクリックします。アップロードが完了した数秒後、ボード上の **L** が 1秒間隔で点滅するのを確認してください。

### Stalker V3.1 の例

Seeeduino Stalker V3.1 には多くの例があります。以下を含みます：

- バッテリー電圧を読み取る例
- 充電状態を読み取る例
- データログの例
- RTC ライブラリといくつかの例
- スリープ関連の機能

## RTC

基板上にはDS1307Sと3Vのセルバッテリーが搭載されており、基板に電源供給がなくても3年以上時間を保持することができます。DS1307SのライブラリはStalkerのスケッチに含まれています。

### 日付/時刻の調整

Arduino IDEを開き、**File > Sketchbook > RTC > Adjust**を選択します。その後、例にあるDateTimeクラスオブジェクト**dt**を使用して現在の日付/時刻を設定します。

```cpp
DateTime dt(year, month, date, hour, min, sec, week-day(starts from 0 and goes to 6));
例: DateTime dt(2015, 10, 1, 11, 43, 0, 4);
```

コンパイルしてStalkerにアップロードすると、時刻が設定されます。

### 現在の日付/時刻の取得

Arduino IDEを開き、**File > Sketchbook > RTC > Now**を選択します。**RTC.now()**関数を使用してDS1337から現在の日付/時刻を読み取ります。

```cpp
例: DateTime now = RTC.now();
```

コンパイルしてStalkerにアップロードし、シリアルモニターを開くと、日付と時刻が表示されます。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/rtc_now.png)

### DS1337の割り込み例

この例は、DS1337のINT出力からの割り込み検出をデモンストレーションするものです。この機能は、データロガー機能に役立ちます。MCUが使用されていないときにスリープモードに入り、DS1337 INTが定期的にCPUを起動します。これによりバッテリーの消費が抑えられます。完全な操作はコード内に記載されています。

DS1337には2つのINT出力があります。INTA（**D2**に接続）とINTB（**D3**に接続）です。INTA/INTBとD2/D3を接続するスイッチがあります。割り込みが不要な場合はスイッチを閉じて、1つまたは2つのI/Oを節約できます。スイッチは以下の通りです。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/RTC_INT_SELECT.png)

Arduino IDEを開き、**File > Sketchbook > RTC > interrupts**を選択します。この例では毎分割り込みを生成します。他の種類のアラームが必要な場合は、コードを参照してください。

## SDカード

基板にはmicro SDカードソケットがあり、micro SDカードを挿入してデータを保存することができます。StalkerはSPIインターフェースを介してSDカードを読み書きします。Arduino IDE内のSDライブラリを使用してSDカードを操作するための十分な例が用意されています。

Arduino IDEを開き、**File > Examples > SD**を選択すると、多くの例が表示されます。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/sd_cs.png)

:::note
CSピンはStalkerのD10に接続されているため、例ではCSピンをD10に変更する必要があります。
:::

## 電源管理

StalkerにはLipoバッテリー管理回路が内蔵されています。スケッチには2つの便利な機能が提供されています。

### Lipoバッテリーの電圧を読み取る

Arduino IDEを開き、**File > Sketchbook > ReadBattery**を選択して例を開きます。

バッテリーの電圧はバッテリー容量に関連しています。以下は参考値ですが、すべてのバッテリーに適用されるわけではありません。特定のバッテリーではデータが少し異なる場合があります。

|容量(%)|100%| 80% | 60% | 40% | 20% | 0% |
|-------|----|-----|-----|-----|-----|----|
|**電圧(V)**|4.20|4.00 |3.87 |3.79 |3.73 |3.00|

### 充電状態の取得

Arduino IDEを開き、**File > Sketchbook > ReadChageStatus**を選択して例を開きます。この機能は以下の3つの状態を返します。

```cpp
0: バッテリーが挿入されていない
1: 充電中
2: 充電完了
```

## Bees

Beesは、Wi-Fi、BLE、GPS、RFなどの豊富な機能を備えたモジュールシリーズです。XBeeを使用することで、Stalkerは通信可能なノードとして機能します。Stalker同士が通信することも可能になります。Beesに関する詳細が必要な場合は、以下の参考情報をご覧ください。

|Bluetooth Bee |XBee Wi-Fi PCB Antenna| RFbee V1.1|
|---|---|---|
|![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee1.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee2.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee3.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Bluetooth-Bee-Standalone-p-1157.html)    |<a href="https://www.seeedstudio.com/XBee-Wi-Fi-PCB-Antenna-S6-p-1114.html">今すぐ購入</a> |[今すぐ購入](https://www.seeedstudio.com/RFbee-V1.1-Wireless-arduino-compatible-node-p-614.html)|

|Bluetooth Bee - Standalone|GPS Bee kit|Mesh Bee|
|:---:|:---:|:---:|
|![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee4.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee5.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee6.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Bluetooth-Bee-v2.0-p-2373.html)    |<a href="https://www.seeedstudio.com/GPS-Bee-kit-(with-Mini-Embedded-Antenna)-p-560.html">今すぐ購入</a> |<a href="https://www.seeedstudio.com/Mesh-Bee-Open-Source-Zigbee-Pro-Module-with-MCU-(JN5168)-p-1751.html">今すぐ購入</a>|

:::note

- Beeを使用するには、シリアルピンを選択する必要があります。D0/D1およびD5/D6が利用可能です。詳細については、ハードウェア概要を参照してください。
- D9はBeeソケットのVcc電源を制御します。Beeに電源を供給する必要がある場合は、D9をHIGHに設定してください：`digitalWrite(9, HIGH)`。また、`Setup`内で`pinMode(9, OUTPUT)`を忘れずに設定してください。

:::

## データロガーの例

-----
Seeeduino Stalker v3.0の主な用途は、バッテリー電圧などのセンサー信号をタイムスタンプとともにデータロギングすることです。このスケッチでは、データサンプリング/ロギング操作を行っていないときにMCUをスリープモードにします。完全な実装はコード内で非常に詳細に記述されています。

Arduino IDEを開き、**File > Sketchbook > StalkerV30_DataLogger_10Sec**を選択して例を開きます。

- このスケッチは、RTC.enableInterrupts(h, m, s)関数によって構成されたSDカードにバッテリー電圧データを記録します。
- 周期性はh、m、sを使用して提供されます。割り込みが検出されると、次の割り込み時間はh、m、sの値を進めることで更新されます。この際、DateTimeクラスが便利です。
- 例: `interruptTime = DateTime (interruptTime.get() + interruptInterval); //次の割り込み時間を決定`
- このスケッチは詳細な出力も生成します。つまり、MCU内で発生しているさまざまなイベントがシリアルターミナルに表示されます。

![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/data_log_example.png)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/202000956_Seeeduino%20Stalker%20v3.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---
**回路図**

- [**Eagle**形式の回路図](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/202000956_Seeeduino%20Stalker%20v3.1.zip)
- [**PDF**形式の回路図](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/Seeeduino%20Stalker%20v3.1.pdf)

**データシート**

- [DS1307](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/ds1307.pdf)
- [CN3065](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/DSE-CN3065.pdf)
- [ETA3406](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/eta3406.pdf)
- [スケッチブック](https://github.com/Seeed-Studio/Sketch_Stalker_V3_1)

## FAQ

----

以下は、新しいユーザーからよく寄せられる質問です。Seeeduino Stalker V3.1を使用中に他の問題が発生した場合は、[Arduinoコミュニティ](https://community.seeedstudio.com/discover.html?t=Arduino)をご利用ください。そこには多くのプロフェッショナルなユーザーがアドバイスを提供しており、この製品の使用方法についてのアイデアを共有している上級ユーザーも多数います！

**Q1:** 電源を切って再び入れるとRTCが元の時間にリセットされます。
> システムから電源が供給されていない場合、RTCを駆動するためのボタン電池があります。このボタン電池は少なくとも3年間持続するはずです。ボタン電池が切れていないか確認してください。

**Q2:** Stalker V3.1にスケッチをアップロードできません。
> まず、USB-UARTがStalkerに正しく接続されているか確認し、次に正しいポート番号とボード（**Arduino Fio**または**Arduino ProまたはPro Mini (3.3v, 8 MHz) w/ATmega328**）を選択しているか確認してください。最後に、ソケットにBeeを挿入しており、RX/TXがD0/D1に選択されている場合、スケッチをアップロードする際にはBeeを取り外す必要があります。

**Q3:** RTC割り込みデモが動作せず、割り込みを取得できません。
> まず、アラーム時間を正しく設定しているか確認し、RTC_INTスイッチを正しい側に設定するのを忘れないでください。

**Q4:** ソーラーパネルがリポバッテリーを充電できません。
> ソーラーパネルが4.5〜6Vの電圧を供給できることを確認してください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>