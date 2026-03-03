---
description: Seeeduino Stalker v2.3
title: Seeeduino Stalker v2.3
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino_Stalker_v2.3
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeduino_Stalker_v2.2.jpg)

Seeeduino Stalkerは、機能が豊富なArduino互換の**ワイヤレスセンサーネットワークノード**です。そのモジュール構造とオンボード周辺機器により、定期的にタイムスタンプ付きセンサーデータを記録するのに便利です。Seeeduino Stalkerには、温度センサー、バックアップ電源付きRTC、SDカードソケット、Beeソケット、ソーラーリチウムポリマーイオンバッテリーチャージャーが搭載されています。Seeeduino Stalkerは、追跡、監視、制御プロジェクトに最適な候補です。  
バージョン2.3の改訂は、ほぼバージョン2.2と同じですが、LI_BATとUSB5Vの間に整流ダイオードを追加してバグを修正するためにアップグレードされました。

モデル: [ARD104D2P](https://www.seeedstudio.com/depot/seeeduino-stalker-v2-p-727.html?cPath=80)

**以下は以前のバージョンです：**

- [Seeeduino Stalker v1.0](https://seeeddoc.github.io/Seeeduino_Stalker_v1.0/)
- **Seeeduino Stalker v2.0b** : 新しく改良されたバージョンのベータ版（より多くの機能を搭載）

  - [Seeeduino Stalker v2.0](https://seeeddoc.github.io/Seeeduino_Stalker_v2.0/) : 最終版（ベータ版ではない、底面シルクスクリーンの小さな改良）

  - [Seeeduino Stalker v2.1](https://seeeddoc.github.io/Seeeduino_Stalker_v2.1/) : RTC DS3231、CR2032ホルダー、新しいSDカードソケット

  - [Seeeduino_Stalker_v2.2](https://seeeddoc.github.io/Seeeduino_Stalker_v2.2/): バッテリーチャージステータスの読み取り方法を変更

  - [Seeeduino_Stalker_v2.3](https://seeeddoc.github.io/Seeeduino_Stalker_v2.3/): LI_BATとUSB5Vの間に整流ダイオードを追加

**また、Seeeduino Stalkerは以下の分野で優れたツールです：**

- ワイヤレスセンサーネットワーク（**XBee**を使用 - 別売）

- GPSロギング（**GPSBee**を使用 - 別売）

- iPhone/Android Phone/Nokia Phoneで動作するアプリと通信可能なデータ収集システム（[BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/)を使用 - 別売）

- RFリモートコントロール（[RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/)を使用 - 別売）

- シンプルなスタンドアロンArduino互換物理コンピューティングプラットフォームとして（プログラミングには[UartSBee](https://seeeddoc.github.io/UartSBee/)が別途必要）

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Stalker_v2.1_and_the_Bees.jpg)

**注意事項：**

- [UartSBee](https://seeeddoc.github.io/UartSBee/)は、Seeeduino Stalkerに搭載されているBeeシリーズソケットに挿入することはできません。[UartSBee](https://seeeddoc.github.io/UartSBee/)は、他のBeeモジュール（上記写真に示されている）をコンピュータに接続するためのものであり、これらの他のBeeモジュール用のソケットに挿入することはできません。Seeeduino StalkerとUartSBeeを相互接続するための5ピンヘッダーが別途用意されています。このピンヘッダーは、VCC（Stalkerへの電源供給用）、TXD、RXD、DTR（Stalkerのリセット信号制御用）、GNDで構成されています。

- 製品は絶縁ケースなしで提供されます。特に乾燥した（湿度の低い）天候では、静電気放電（ESD）対策を行ってください。

- Windowsベースの開発マシンを使用する場合、Arduino IDEがフリーズするのを防ぐためにBluetoothシリアルポートを無効にしてください。

## 仕様 ##

![画像説明をここに入力](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Stalker_v2.2_diagram.jpg)

- マイクロコントローラー: ATmega328P

- オンボードクリスタル: 8 MHz

- PCBサイズ: 92.71mm X 60.96mm

- インジケーター: リセット、電源、PB5上のLED (Arduino Pin 13)

- 電源供給: 3.7-5V

- 電源コネクタ: 2.0mm JST/ USB

- I/O数: 20

- ADC入力: 専用4チャンネル (ADC0~ADC3, 10ビット解像度)

- 接続性: I2C, UART, SPI

- RTC精度: ±2ppm (0°Cから+40°C) / ±3.5ppm (-40°Cから+85°C)

- DS3231温度センサー精度: ±3°C

- バッテリーJST入力電圧: 3.5-4.2V

- ソーラーJST入力電圧: 4.6-6V

- 全体消費電流: [注記を参照](https://wiki.seeedstudio.com/ja/Seeeduino_Stalker_v2.3)

- UARTボーレート (プログラミング時): 115200 bps

## デモンストレーション ##

### はじめに ###

以下の手順に従って、Seeeduino Stalkerを使用するためのハードウェアおよびソフトウェアリソースを準備します。

#### ステップ1: ハードウェアの準備 ####

最初のプログラムを実行するために以下のハードウェアが必要です。

|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeduino_Stalker_v2.2.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Uartsb40.jpg)|
|---|---|
|**Seeeduino Stalker v2.e**|**UartsBee v4.0** Seeeduino Stalkerをプログラミングするために必要です。[購入はこちら](https://www.seeedstudio.com/depot/uartsbee-v31-p-688.html)|
|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Miniusb.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/JumperWire100n.jpg)|
|**Mini USBケーブル** おそらくお持ちのものがあるか、ない場合はこちらで購入できます。[購入はこちら](https://www.seeedstudio.com/depot/mini-usb-cable-110cm-p-252.html)。これを使用してUartsBeeをコンピュータのUSBポートに接続します。|**1ピンデュアルメスジャンパーワイヤー** UartsBeeをSeeeduino Stalkerに接続するために必要です。作業場にいくつかあるかもしれません。ない場合は、カラフルなものを[こちらで購入](https://www.seeedstudio.com/depot/1-pin-dualfemale-jumper-wire-100mm-50pcs-pack-p-260.html?cPath=175_187)できます。|

#### ステップ2: ドライバのインストールとハードウェアの接続 ####

1. [UartSBee](https://seeeddoc.github.io/UartSBee/) は、物理コンピューティングの世界で多目的なスイスアーミーナイフのようなものです。WindowsおよびGNU/Linuxユーザー向けの非常に詳細な手順が[こちら](https://seeeddoc.github.io/UartSBee/)にあります。今回の場合、以下の3つの機能を果たします:

- Seeeduino Stalkerをプログラミングする。

- Seeeduino Stalkerと通信する。

- Seeeduino Stalker (および接続された周辺機器) にUSB電源から電力を供給する。

2. UartSBeeの最初の2つの機能 (プログラミングと通信) は、FT232RLという集積回路を通じて実現されます。この機能を使用するには、FT232RLの製造元から提供される無料のドライバをWindows/UbuntuベースのPCにインストールする必要があります。次に進む前に、[こちら](https://www.ftdichip.com/Drivers/VCP.htm)からドライバセットアップファイルをダウンロードし、Windows PCにインストールしてください。(OS X用のドライバも利用可能で、OS Xでも必要です)

3. UartSBeeにはオンボードの電圧レギュレータとスイッチがあり、ターゲット回路基板に供給する電圧 (5.0Vまたは3.3V) を選択できます。今回のターゲット回路基板はSeeeduino Stalkerなので、このスライドスイッチを5.0ボルトに設定してください。

4. ハードウェアの配線接続スキームは "**コンピュータ**→(Mini USBケーブル)→**UartSBee** →(フラットリボンケーブル)→**Seeeduino Stalker**" です。ジャンパーワイヤーは、UartSBeeをコンピュータに接続する前にUartSBeeとSeeeduino Stalkerの間に接続する必要があります。以下の写真を参照し、信号が表に示されているように一致していることを確認してください (**注: TXDとRXDピンは表に示されているようにクロス接続する必要があります**)。

5. 次に、Mini USBケーブルをUartSBeeからコンピュータに接続します。WindowsベースのPCを使用している場合、「新しいハードウェアが見つかりました」というバルーンが表示され、数秒以内にFT232RL (つまりUartSBee) のドライバがインストールされます。

![画像説明をここに入力](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_Uartsbee_3.1_Connection.jpg)

ジャンパーワイヤー接続

|Seeeduino Stalker||UartSBee|
|---|---|---|
|USB5V| ↔  |VCC|
|RXD  |  ↔  |TXD|
|TXD  |  ↔  |RXD|
|GND| ↔  |GND|
|DTR| ↔  |DTR|

### 接続に関する注意点 ###

- **Beeシリーズソケット** - 2*10ピン 2.0mmピッチ (以下のいずれかの**ワイヤレスモジュール**と接続可能: **XBee** 、[BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/)、**GPSBee** または **RFBee**) 。これらのモジュールとの通信はUARTを通じて行われます。

- **シリアルインターフェース** – スペースを節約しコストを削減するため、USB&lt;-&gt;シリアル接続はデフォルトでは提供されていません。FT232ベースの[UartSBee](https://seeeddoc.github.io/UartSBee/) または他のUSB-シリアルアダプタボードを使用してプログラミングやPCとの通信を行うことができます。

- **ユーザーLED** – 必要に応じてアプリケーションで使用できるLEDがオンボードに提供されています。

- **I2Cインターフェース**: オンボードのI2CレベルシフタICは、3.3Vと5Vデバイス間の電圧変換を提供します。これにより、Stalkerが3.3ボルトで動作している場合でもI2Cデバイスを接続できます。I2Cデバイスの動作電圧は外部電圧 (LIPO_BATおよびUSB5V) に依存します。

- **Groveインターフェース** – D7/D8を使用するGroveインターフェースを追加します。これにより、Stalkerが3.3ボルトで動作している場合でも3.3Vおよび5.0VのGroveモジュールを接続できます。Groveモジュールの動作電圧は外部電圧 (LIPO_BATおよびUSB5V) に依存します。

### ジャンパーとコネクタ ###

![画像説明をここに入力](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Stalker_v2.3_bottom.jpg)

#### microSDカード (TransFlashカード) 関連 ####

- **CS_TF**（ジャンパータイプ：**古いブリッジ - 2ウェイ**、位置：**底面**、工場出荷時状態：**SSとPB2が細いトラックで接続**）  
このジャンパーはPB1、SS、PB2の3つのパッドで構成された2ウェイジャンパーです。SSはmicroSDカードのチップセレクト信号です。デフォルトでは、SSは細いトラックでPB2（マイクロコントローラーのデジタルピン10）に接続されています。代わりにmicroSDカードのチップセレクト信号をデジタルピン9（PB1）に接続したい場合は、PB2とSSの間のトラックを切断し、SSとPB1の間にハンダブロブを置いてください。

- **POWER_TF**（ジャンパータイプ：**ハンダブリッジ**、位置：**底面**、工場出荷時状態：**未接続**）  
デフォルトでは、ENはVCCに接続されており、TFカードは常に電源が供給されます。マイクロコントローラーのデジタルピン4（PD4）でTFカードの電源を制御したい場合は、ENとPD4の間にハンダブロブを置いてください。逆に、TFカードを常に利用可能な状態で電源を供給したい場合は、以前に置いたハンダを切断してください。

#### Beeモジュール関連 ####

- **POWER_BEE**（ジャンパータイプ：**ハンダブリッジ**、位置：**底面**、工場出荷時状態：**未接続**）  
デフォルトでは、ENはVCCに接続されており、xbeeは常に電源が供給されます。マイクロコントローラーのデジタルピン5（PD5）でxbeeの電源を制御したい場合は、ENとPD5の間にハンダブロブを置いてください。逆に、xbeeを常に利用可能な状態で電源を供給したい場合は、以前に置いたハンダを切断してください。

#### Beeモジュール関連 - XBee専用 ####

- **WIRELESS_PROGRAMMING**（ジャンパータイプ：**ハンダブリッジ**、位置：**底面**、工場出荷時状態：**細いトラックで接続**）  
DigiのXBeeモジュールを使用して、Seeeduino Stalker上のATmega328Pをワイヤレスでプログラムすることができます。Seeeduino StalkerにXBeeモジュールを設定してインストールし、もう1つのXBeeモジュールをUartSBeeを介してラップトップに接続する必要があります。Seeeduino Stalker上のDIO3ピンはATmega328Pのリセットピンを制御するために使用されます。このジャンパーは、XBeeモジュールのDIO3ピンによるATmega328Pのリセットピンの制御を有効または無効にすることができます（デフォルト：有効）。DIO3ピンがATmega328Pのリセットピンを制御しないようにしたい場合は、このジャンパーのパッド間のトラックを切断してください。Lady Adaによる[XBeeを使用したArduino製品のリモートプログラミングに関するチュートリアル](http://www.ladyada.net/make/xbee/arduino.html)があります。（注意：使用前に、Stalker上のXBeeとPCに接続されたXBeeの両方をX-CTUソフトウェアで事前設定する必要があります。）

- **RSSI_STATUS**（ジャンパータイプ：**ハンダブリッジ**、位置：**上面**、工場出荷時状態：**細いトラックで接続**）  
PCBの上面にある赤色LEDは、XBeeモジュールのRSSI（受信信号強度インジケーター）ピンに接続されています。XBeeはこのピンにPWM信号を出力し、最後に受信したパケットのRFリンクの品質に比例します。このPWM信号がLEDに適用されると、RFリンクの品質に応じてLEDの明るさが変化します。リンクが良好であるほど、LEDは明るくなります。このLEDは電力を消費するため、フィールドでのバッテリー消費を節約するために、このジャンパーのパッド間のトラックを切断することができます。RSSI値はUART経由でDBコマンドを使用しても取得可能です（-dBmで測定）。（注意：DB値は最後のホップの受信信号強度のみを示します。送信が複数のホップをまたぐ場合、DB値は全体の送信経路や最悪のリンクの品質を示すものではなく、最後のリンクの品質のみを示します。そのため、慎重に使用する必要があります。）

#### ユーザーLED関連 ####

- **D13_LED**（ジャンパータイプ：**ハンダブリッジ**、位置：**底面**、工場出荷時状態：**細いトラックで接続**）  
PCBの上面にある赤色LEDは、マイクロコントローラーのデジタルピン13（PB5）に接続されています。このLEDは、プログラム内で任意の目的で自由に使用できます。このLEDは電力を消費するため、フィールドでのバッテリー消費を節約するために、このジャンパーのパッド間のトラックを切断し、デジタルピン13をシールドの制御など他の目的に使用することができます。

#### バッテリー関連 ####

- **CH_STATUS**（ジャンパータイプ：**ハンダブリッジ**、位置：**上面**、工場出荷時状態：**細いトラックで接続**）  
Seeeduino Stalkerに搭載された2つのLEDは、LiPoバッテリーの充電状態を示します。赤色のSMD LEDはリチウムバッテリー充電IC（CN3083またはCN3063）のCHRG（またはCH）ピンに接続されており、点灯している場合はバッテリーの充電サイクルがアクティブであることを示します。緑色のSMD LEDはリチウムバッテリー充電IC（CN3083またはCN3063）のDONE（またはOK）ピンに接続されており、点灯している場合はバッテリーが完全に充電されたことを示します。フィールドでSeeeduino Stalkerを操作する際、CH_STATUSパッドを接続するトラックを切断することで、これらのLEDがC_VINを消費する電力を節約できます。

#### リアルタイムクロック（RTC）関連 ####

- **INT**（ジャンパータイプ：**ハンダブリッジ**、位置：**底面**、工場出荷時状態：**未接続**）  
このジャンパーを閉じることで、リアルタイムクロック（RTC）が指定された時間にATmega328Pをウェイクアップできるようになります。このジャンパーはRTCチップ（DS3231）のINTをATmega328PのPD2（INT0）に接続します。

- **RST/32K**（ジャンパータイプ：**ハンダブリッジ - 2ウェイ**、位置：**底面**、工場出荷時状態：**未接続**）  
ハンダブリッジがRSTに接続されている場合、PD3（デジタルピン3）がLOWになるとRTCがリセットされます。32KはRTCからの32kHz出力で、PD3（デジタルピン3 / INT1）に接続されています。

## プログラミング ##

ボードタイプを **Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328** に設定する必要があります。

### RTCと温度 ###

- リソースセクションからDS3231ライブラリとスケッチをダウンロードしてインストールしてください。DS3231ライブラリには、Jean-Claude Wipplerによる**JeeLabs**のDateTimeクラスの修正版が含まれています。
- デモスケッチでは、SDカードにアクセスするためにfat16lib Arduinoライブラリを使用します。**fat16libのプロジェクトページ**からFAT16ライブラリをインストールしてください。

#### 日付/時刻の調整 ####

- Arduino IDEのツール-->ボードメニューからArduinoボードを`Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328`に設定します。

- DS3231ライブラリからadjust.pdeの例を開きます。

- 例のDateTimeクラスオブジェクトdtを使用して現在の日付/時刻を設定します：

- `DateTime dt(year, month, date, hour, min, sec, week-day(starts from 0 and goes to 6));`
    例: `DateTime dt(2011, 11, 10, 15, 18, 0, 5);`
- `DateTime dt(__DATE__, __TIME__); // コンパイル時刻を使用して時計を設定`

- コンパイルしてStalkerにアップロードします。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_adjust.png)

#### 現在の日付/時刻を取得 ####

- Arduino IDEのツール-->ボードメニューからArduinoボードを`Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328`に設定します。

- DS3231ライブラリからnow.pdeの例を開きます。

- `RTC.now()`関数を使用してDS3231から現在の日付/時刻を読み取ります。

    例: `DateTime now = RTC.now();`

- コンパイルしてStalkerにアップロードします。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_now.png)

#### DS3231の温度を読み取る ####

---

- Arduino IDEのツール-->ボードメニューからArduinoボードを`Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328`に設定します。

- DS3231ライブラリからtemperature.pdeの例を開きます。

- `RTC.getTemperature()`関数を使用してDS3231から現在の温度（摂氏）を読み取ります。

- DS3231の温度レジスタは通常64秒ごとにのみ更新されます。

- したがって、`RTC.convertTemperature()`を使用して強制的な変換を開始する必要があります。
- 例:

```
RTC.convertTemperature();             // 現在の温度をレジスタに変換
Serial.print(RTC.getTemperature());   // レジスタを読み取り、温度を表示
Serial.println("deg C");
```

- コンパイルしてStalkerにアップロードします。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_temp.png)

#### DS3231の割り込み ####

この例は、DS3231のINT出力からの割り込み検出のデモンストレーションです。この機能は、MCUが使用されていないときにスリープモードに入り、DS3231 INTが定期的にCPUを起動するデータロガー機能に役立ちます。これによりバッテリーの消費が抑えられます。完全な操作はコード内で文書化されています。

- INTジャンパーのPD2とINTピンをはんだ付けします。

- これにより、DS3231の割り込み出力ピンがATmega328のINT0ピンに接続されます。

- Arduino IDEのツール-->ボードメニューからArduinoボードを`Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328`に設定します。

- DS3231ライブラリからinterrupts.pdeの例を開きます。

- コンパイルしてStalkerにアップロードします。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_interrupts.png)

### 充電状態の読み取り ###

Stalkerにバッテリーとソーラーパネルを接続すると、バッテリーはソーラーパネルやUSB5vを介して充電できます。バッテリー充電の最低入力電圧は4.4vです。そのため、ソーラーパネルを使用する場合は、十分な日光がある屋外に設置してください。その後、以下のコードをStalkerにアップロードして充電状態を読み取ります。

```
void setup()
{
  Serial.begin(57600);
  analogReference(INTERNAL);
  //analogRead(6);
}

void loop()
{
  char CH_status_print[][4]=
  {
    "off","on ","ok ","err"
  };
  unsigned char CHstatus = read_charge_status();//充電状態を読み取る
  Serial.print("charge status -->");
  Serial.println(CH_status_print[CHstatus]);
  delay(500);
}


unsigned char read_charge_status(void)
{
  unsigned char CH_Status=0;
  unsigned int ADC6=analogRead(6);
  if(ADC6>900)
  {
    CH_Status = 0;//スリープ中
  }
  else if(ADC6>550)
  {
    CH_Status = 1;//充電中
  }
  else if(ADC6>350)
  {
    CH_Status = 2;//充電完了
  }
  else
  {
    CH_Status = 3;//エラー
  }
  return CH_Status;
}
```

### バッテリー電圧の読み取り ###

アナログピン7でバッテリー電圧を知りたい場合、以下は簡単な例です。

```
void setup(){
    Serial.begin(57600);
    analogReference(INTERNAL);
}

void loop() {

float voltage;
int BatteryValue;

    BatteryValue = analogRead(A7);
    voltage = BatteryValue * (1.1 / 1024)* (10+2)/2;  //電圧分圧

    Serial.print("Battery Voltage -> ");
    Serial.print(voltage);
    Serial.print("V   ");
    Serial.println();

    delay(500);
}
```

### バッテリーライブラリの使用 ###

バッテリー電圧、残量（パーセンテージ）などの情報を取得するためのライブラリがあります。

```
/*
Battery.cpp (Version 0.3) - Seeeduino Stalker V2.3用バッテリー情報ライブラリ
Stefanによって2013年3月に作成。

注意:
 - リポバッテリー電圧を読み取る -> アナログピン7
 - 現在の容量（%）
 - 充電状態 -> アナログピン6
 - バッテリーインジケーション用のLED点滅
*/

#include <Battery.h>

int LEDPin=13;
int flashesforfull=10; // 1回の点滅 = 10%
int chcnt=0;

Battery battery;

void setup(){
  Serial.begin(57600);
  Serial.println("Battery Library for Seeeduino Stalker V2.3");
}

void loop(){
  battery.update();
  battery.ledflashStatus(LEDPin,flashesforfull);
  float voltage = battery.getVoltage();
  int percentage = battery.getPercentage();
  char* CS = battery.getChStatus();
  bool ch = battery.isCharging();
  if(ch) chcnt++;

  Serial.print("battery: ");
  Serial.print(voltage);
  Serial.print("V  -> ");
  Serial.print(percentage);
  Serial.print("%     Charge Status: ");
  Serial.print(CS);
  Serial.print("     charging counter: ");
  Serial.println(chcnt);
  delay(2000);
}
```

### データロガーの例 ###

Stalkerの主な用途は、タイムスタンプ付きで温度などのセンサー信号をデータログすることです。DS3231ライブラリを使用して3つの異なる実装を示す3つのスケッチを提供しています。これらのスケッチは、データサンプリング/ログ操作を行っていないときにMCUをスリープモードにします。完全な実装はコード内で非常に詳細に記述されています。以下のセクションでは概要を説明します：

![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_SolarPanel.png)
Seeeduino Stalker v2.1 SolarPanel.png

1. **StalkerV21_DataLogger_Periodic.pde**
   - このスケッチは、`RTC.enableInterrupts(periodicity)`関数によって設定された周期的な温度データをSDカードにログします。
   - 周期性は、EverySecond、EveryMinute、EveryHourといった定義済みの定数を使用して提供されます。
   - このスケッチは詳細な出力を生成します。つまり、MCU内部で発生するさまざまなイベントがシリアルターミナルに表示されます。

2. **StalkerV21_DataLogger_5min.pde**
   - このスケッチは、`RTC.enableInterrupts(h, m, s)`関数によって設定された周期的な温度データをSDカードにログします。
   - 周期性はh、m、sを使用して提供されます。割り込みが検出されると、次の割り込み時間はh、m、s値を進めることで更新されます。DateTimeクラスが便利です。
   - 例: `interruptTime = DateTime(interruptTime.get() + 300); //次の割り込み時間を決定`
   - このスケッチも詳細な出力を生成します。つまり、MCU内部で発生するさまざまなイベントがシリアルターミナルに表示されます。

3. **StalkerV21_DataLogger_15Sec_NoSerialPort.pde**
   - このスケッチは、異なるデータログ間隔を持つ前述のスケッチと似ています。すべてのシリアルポート関連コードは電力消費を削減するためにコメントアウトされています。
   - シリアルポート関連コードを削除しても、電力消費の大幅な削減はありません。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Stalker_v2.1_datalogger_flowchart.png)

##### 電力消費に関する注意 #####

以下のスクリーンショットは、**Stalker**が3.3V入力でLIPO_BATに接続されている場合の電流消費測定値を示しています。実際のアプリケーションでは、LIPO_BATは3.7VのLiPoバッテリーに接続されています。そのため、以下の測定値は参考程度に考えてください。
[フォーラム](https://forum.seeedstudio.com/viewtopic.php?f=16&amp;t=3911&amp;hilit=Stalker)では電力消費に関する議論があります。
RTC自体がスタンバイ供給電流として110µAを消費するようです。[こちら](http://www.gammon.com.au/forum/?id=11497)には低電力消費に関する情報があります。

しかし、悲観的になる必要はありません。平均消費電流が1mAまで下がったとしても、980mAh/1mA = 980時間 = **40.8日**間充電なしで動作します。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_datalogger_15S_Current_Measurement.png)

- アクティブモードのピークは15秒ごとに発生します。アクティブモードでは、MCUが温度をサンプリングし、SDカードに保存します。

- スリープモードでの電流消費は**95.82 µA** @ 3.3V（つまり**316.206 µW**の電力消費）です。このデモではSDカードのVCCがまだ電源供給されています。スリープモードでの電流消費をさらに削減するには、POWER_TFジャンパーを再構成してLDOの有効ピンを使用してSDカードをオフにしてください。これにより、VCCが適用された際のSDカードの安定化時間が増加する可能性があります。

- アクティブモードピーク時の電流消費は**22.43 mA** @ 3.3V（つまり**74.019 mW**の電力消費）です。

- アクティブモードのセカンドピーク時の電流消費は**3.64 mA** @ 3.3V（つまり**12.012 mW**の電力消費）です。

- アクティブモードは**400mS**または0.4秒間続きます。

注意: 「microSD Card Reader (in a capsule)」を購入する場合、「Mini USBケーブル」は不要です。前者はデータ転送機能も兼ね備えています。

## リソース ##

### アクセサリー ###

|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/StalkerEnclosure600.jpg) |![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Microsdcard2gb.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Smartcable_04_LRG.jpg) |
|---|---|---|
|[Seeeduino Stalker v2.0用防水エンクロージャ](https://www.seeedstudio.com/depot/seeeduino-stalker-v2-enclosure-p-734.html?cPath=178_184) | [SanDisk 2GB microSDカード](https://www.seeedstudio.com/depot/sandisk-microsd-card-2gb-p-546.html?cPath=178_182)|[microSDカードリーダー（カプセル型）](https://www.seeedstudio.com/depot/sd-card-reading-miniusb-cable-in-a-capsule-p-575.html?cPath=190)|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Miniusbcable.jpg) |![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/JumperWire100n.jpg)|
|[UartSBeeを使用したプログラミング用Mini USBケーブル](https://www.seeedstudio.com/depot/mini-usb-cable-100cm-p-252.html?cPath=178_179)|[シングルワイヤ - ジャンパーワイヤ](https://www.seeedstudio.com/depot/6-pin-dualfemale-jumper-wire-100mm-5-pcs-pack-p-129.html?cPath=175_187)|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Lithium-lon-polymer-batteries2A.jpg) |![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Solar-panel55.jpg) |
|[リチウムポリマー（LiPo）バッテリー](https://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&amp;search_in_description=0&amp;keyword=Lithium+Ion+polymer+Battery&amp;x=51&amp;y=12)|[Stalkerを介してLiPoバッテリーを充電するためのソーラーパネル](https://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&amp;search_in_description=0&amp;keyword=solar+panel&amp;x=0&amp;y=0)|

### コンポーネントのデータシート ###

- [DS3231](http://datasheets.maxim-ic.com/en/ds/DS3231.pdf) - Seeeduino Stalker v2.1に搭載されたデジタル温度センサー付きリアルタイムクロック
- [CN3063](http://www.openhacks.com/uploadsproductos/dse-cn3063.pdf) - ソーラーパネルを使用して充電するリチウムバッテリー用充電コントローラー
- [Si2305DS](http://www.vishay.com/docs/70833/70833.pdf) - Pチャンネル 1.25-W、1.8-V (G-S) MOSFET

## FAQ ##

以下はSeeeduino Stalker FAQです。ユーザーはここに頻繁に寄せられる質問を記載できます。以下は例です：

1. Seeeduino Stalkerのバージョン2.xではユーザー定義スイッチが削除されましたか？

   はい、バージョン2.xではユーザーボタンを削除しました。

2. Seeeduino Stalkerのバージョン1.0では、Beeモジュールの割り込みを介してスリープモードからマイクロコントローラーを起動することができました。この機能はバージョン2.0でも利用可能ですか？

   前のバージョン（1.0）では、Beeモジュールのピン15がマイクロコントローラーのINT0（PD2）に接続されており、RFデータパケット受信時にマイクロコントローラーを起動することができました。新しいバージョンでは、マイクロコントローラーのINT0（PD2）ピンがジャンパー（[INT_RTC](https://seeeddoc.github.io/Seeeduino_Stalker_v2.0/#Real_Time_Clock_.28RTC.29_Related)）を介してRTCチップのINTピンに接続されており、事前に設定された時間（または定期的な時間）に起動することができます。Seeeduino Stalkerはワイヤレスセンサーネットワークノードとして使用することを目的としているため、この変更はセンサーの読み取り値を送信するためにマイクロコントローラーが定期的に起動し、再びスリープする必要がある場合に役立ちます。

3. Seeeduino Stalkerのバージョン1.0では、I2Cピンヘッダーを使用して外部の3.3Vおよび5.0Vデバイスに簡単に接続することができました。この機能はバージョン2.xでも利用可能ですか？

   はい、実際に改善されています。以前はI2Cバスのレベル変換にPCA9306を使用していましたが、現在はNチャンネルMOSFETを使用しています。この技術には多くの利点があります（NXPのアプリケーションノート**AN97055**を参照してください）。

4. CN3083の英語のデータシートがありません。どうすればよいですか？

   CN3083はSeeeduino Stalkerバージョン2.1のベータ版で使用されていました。最終的なバージョン2.0ではCN3063が搭載されています。CN3083のデータシートは中国語のみで提供されています。一方、CN3063には英語のデータシートがあり、上記に添付されています。CN3063とCN3083の両方の動作は非常に似ています。

5. バッテリー関連のジャンパーの説明が少しわかりにくいです。もっと簡単な説明が欲しいです。

   - BAT_READ - マイクロコントローラーのアナログピン7を使用してバッテリー電圧を読み取ることができます（内蔵のアナログ-デジタルコンバーターを使用）。
   - CH_READとCH_STATUS - これらはデジタルピン（6 & 7）ではなく、抵抗を介してアナログピン6に接続されています。そのため、上記の例のように動作します。
   - CH_STATUS - 上記の2つの信号（CH_READとOK_READ）にはLEDが接続されています。CH_STATUSジャンパーを使用すると、これらのLEDを無効にして消費電力を削減することができます。

## ライセンス ##

このドキュメントは、Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) の下でライセンスされています。ソースコードおよびライブラリはさまざまなオープンソースライセンスの下でライセンスされています。詳細については、ソースコードファイルを参照してください。

## Stalker v2.3 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker_v2.3_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Stalker v2.2 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker_v2.2_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

### ライブラリと Eagle ファイル ###
**注意:** Datalogger スケッチを使用する場合は、まず **fat16lib** から Fat16lib Arduino 1.0 バージョンをダウンロードしてインストールする必要があります。

- **[ソフトウェア]** [SeeeduinoStalker_Software(Arduino_1.0).zip](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/SeeeduinoStalkerV2.1_Software-Arduino_1.0-.zip)

- **[ソフトウェア]** [SeeeduinoStalker_BatteryLibrary_V0.3](https://drive.google.com/file/d/0B_woEJs7VW-hc2dBcUJfOVlDTk0/edit?usp=sharing)

- **[Eagle]** [Stalker v2.3 Eagle Files.zip](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker_v2.3_Eagle_Files.zip)

- **[PDF]** [Stalker v2.3 PCB](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker%20v2.3.pdf)

- **[PDF]** [Stalker v2.3 SCH](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker%20v2.3%20SCH.pdf)

- **[Eagle]** [Stalker v2.2 Eagle Files.zip](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker_v2.2_eagle.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>