---
title: Wio LTE Cat M1/NB-IoT トラッカー
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Wio_LTE_Cat_M1_NB-IoT_Tracker/
slug: /ja/Wio_LTE_Cat_M1-NB-IoT_Tracker
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/img/NBIOT1.JPG)

SeeedのWio LTE CAT M1/NB-IoTは、CAT M1(eMTC)およびNB-IoTコンボモジュールを備えた低消費電力広域ネットワーク（LPWAN）向けに設計されています。さらに、ARM Cortex-M4 MCUとGNSSモジュールを搭載しています。

これはArduino互換の開発ボードで、地球上のほぼすべての移動物を追跡し、そのデータをワイヤレスでアップロードすることができます。Groveコネクタを統合することで、Wio LTE CAT M1/NB-IoTはGroveシステムを使用した柔軟な通信ソリューションを提供します。

Wio LTE CAT M1/NB-IoTは、衛星ナビゲーションシステムに接続し、取り付けられたアイテムのリアルタイム位置情報を提供する屋外プロジェクトに最適です。

<p style={{}}><a href="https://www.seeedstudio.com/Wio-LTE-Cat-M1-NB1-p-3055.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

**T-Mobile Narrowband向けTwilio Developer Kitをお探しですか？ドキュメントは[こちら](https://www.twilio.com/docs/wireless/nb)をご覧ください。**

## バージョン
| 製品バージョン               | 変更点                                  | リリース日       |
|-------------------------------|------------------------------------------|-----------------|
| Wio LTE Cat M1/NB-IoT v1.0    | 初版                                     | 2018年5月26日   |

## 仕様

- ARM Cortex-M4マイクロコントローラー LTE CAT M1およびNB-IoTコンボ（グローバル対応）
- GPS/GLONASS GNSS対応
- Arduino IDE互換
- 6つのGroveポートを搭載、最大180のGroveモジュールをサポート
- Wio LTE CAT.1からの簡単な移行

## ハードウェア機能

- STM32F405RG、ARM Cortex-M4、CPU最大168MHz動作
- 1Mbytesフラッシュメモリ
- 192+4KBytes RAM
- システム
    - 動作電圧: 3.3V
    - 低消費電力: スリープ/スタンバイモード/停止モード
    - CRC-32ジェネレーター
- LTE接続
    - LTE CAT M1およびNB-IoT、Cat M1ハーフデュプレックス（375 kb/s DLおよびUL）、Cat NB1ハーフデュプレックス（27.2 kb/s DL、62.5 kb/s UL）
    - 組み込みプロトコル: TCP/UDP/FTP/HTTP/HTTPS/FTPS/TLS/MQTT/CoAP
- GNSS
    - GPS/GLONASS
    - 2.5m CEP(GPS)、4.0m CEP(GLONASS)
- 周辺機器
    - 1 x USB（電源供給およびDFU用）
    - JST 1.0コネクタ（バッテリー用）
    - 3つのボタン: MCUリセットボタン、MCUブート（DFU）ボタン、EC21電源ボタン
    - Nano SIMおよびTFカード2-in-1ソケット
- Grove
    - 2 x デジタルポート
    - 2 x アナログポート
    - 1 x UART
    - 1 x I2C

:::tip
Groveモジュールを使用してアプリケーションを拡張してください。ボード上には6つのGroveコネクタがあります。Groveについて初めて聞いた場合は、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご覧ください。簡単に言えば、Groveは標準スタイルのセンサーで構成されており、センサー、アクチュエータ、ディスプレイ、通信モジュールが含まれています。
:::

## アプリケーション
- スマートシティ
- スマートメーター
- スマートエネルギー
- スマート農業
- スマート小売
- スマートサプライチェーン
- スマート輸送
- コネクテッドカー
- コネクテッドビルディング
- コネクテッドヘルス
- スポーツ機器
- ペット追跡
- 財産セキュリティ
- シェア自転車
- 物流輸送位置システム
- その他

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/img/front.png)

![](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/img/back.png)

:::tip
    オンボードの Grove コネクタを使用したい場合は、`digitalWrite(B10, HIGH)` を使用して 3V3_B を有効にしてください。ただし、D38 はデフォルトで電源がオンになっています。それ以外の場合、Grove モジュールに電力を供給できません。
:::

![](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/img/h3.png)

## はじめに

### USB ドライバのインストール

- **Windows ユーザー**: ほとんどの Windows バージョンでは、USB COM ポート用の組み込みドライバが自動的にロードされません。ST の USB ドライバ [STM32 Virtual COM Port Driver](https://www.st.com/en/development-tools/stsw-stm32102.html#get-software) をダウンロードする必要があります。

- **Mac OS X および Chromebook ユーザー**: ボードを接続するだけで動作し、ドライバは不要です！

### DFU ドライバの変更

**Windows ユーザー向け**:

- ステップ 1. BOOT ボタンを押し続けながらコンピュータに接続すると、デバイスマネージャに **STM32 Device in DFU Mode** が表示されます。

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/before_driver_installation.png)

- ステップ 2. [zadig_xx.exe](https://files.seeedstudio.com/wiki/Wio_LTE/res/zadig_2.1.2.exe) を使用して、DFU ドライバを **STTub30** から **WinUSB** に変更します。Zadig に情報が表示されない場合は、Options--> List All Devices をクリックし、STM32 Virtual COM Ports を選択してください。

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/zadig.png)

- ステップ 3. デバイスマネージャに "STMicroelectronics Virtual COM Port" が表示されます。

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/after_driver_installation.png)

### Arduino を使ってみる

**1. ソフトウェア設定**

- ステップ 1. Arduino IDE をインストールします。バージョン 1.8.0 以上を推奨します。
- ステップ 2. [Seeed ボードを Arduino IDE に追加する方法](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/) に従って、Seeed STM32F4 ボードを Arduino ボードマネージャに追加します。
- ステップ 3. [WioLTE_Cat_NB1_Arduino_Library](https://github.com/lanselambor/WioLTE_Cat_NB1_Arduino_Library) を Github からダウンロードします。
- ステップ 4. [Arduino ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library) を参照して、Arduino 用ライブラリをインストールします。
- ステップ 5. スケッチをアップロードする前に、BOOT0 ボタンと RST ボタンの両方を押し続け、RST ボタンを先に離してから BOOT0 ボタンを離します。この方法でボードは STM ブートローダーモードに入ります。
- ステップ 6. ツールメニューでシリアルポートを選択せずに、アップロードアイコンをクリックしてスケッチをアップロードします。

**2. オンボード RGB LED を使ってみる**

- ステップ 1. File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->Seeed_WS2812b スケッチを選択します。
- ステップ 2. Wio LTE Cat NB1 の背面にある BOOT ボタンを押し続けながら、USB を PC に接続します。
- ステップ 3. デバイスマネージャに **STM BOOTLARDER** が表示されます。
- ステップ 4. Tools-->Boards-->Wio_Tracker_LTE を選択します。
- ステップ 5. COM ポートを空白のままにします。
- ステップ 6. Sketch-->Upload を選択して、コードを Wio_LTE にアップロードします。

```cpp
#include <Seeed_ws2812.h>
#include <ublox_sara_r4.h>

#define LEN_NUM 1

Ublox_sara_r4 ublox = Ublox_sara_r4();
WS2812 strip = WS2812(LEN_NUM, ublox.RGB_LED_PIN);

void setup() {
  // RGB LED の電源ピンを HIGH に設定
  ublox.turnOnRGBPower();
  strip.begin();
  strip.brightness = 20;
}

void loop() {  
  strip.RGBCycle(1000);   
  strip.rainbowCycle(20);
}
```

- ステップ 7. **RST** を押すと、オンボード RGB LED が動作するのが確認できます。

**3. GNSS を使ってみる**

- ステップ 1. Nano SIM カードを PCB ボード側の Nano SIM スロットに挿入します。
- ステップ 2. File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->GNNS-->GNSS スケッチを選択します。
- ステップ 3. Wio LTE Cat NB1 の背面にある BOOT ボタンを押し続けながら、USB を PC に接続します。
- ステップ 4. デバイスマネージャに **STM BOOTLARDER** が表示されます。
- ステップ 5. Tools-->Boards-->Wio_Tracker_LTE を選択します。
- ステップ 6. COM ポートを空白のままにします。
- ステップ 7. Sketch-->Upload を選択して、コードを Wio LTE Cat NB1 にアップロードします。
- ステップ 8. **RST** ボタンを押して COM ポートを有効にします。

```cpp
#include <ublox_sara_r4_gnss.h>

UBLOX_SARA_R4_GNSS gnss = UBLOX_SARA_R4_GNSS();

void setup()  
{
  // GNSS モジュールを起動
  gnss.open_GNSS();
  delay(3000);
  SerialDebug.println("_Start");
}

void loop() {
  gnss.dataFlowMode();
}
```

- ステップ 9. COM モニターツールを使用してシリアルメッセージを表示します。**Arduino IDE の COM モニターは使用しないでください！次回のダウンロードが失敗する可能性がありますが、Arduino IDE を再起動すれば問題は解決します**。
- ステップ 10. 緯度と経度の情報が画面に表示されます。

```cpp
$GNRMC,,V,,,,,,,,,,N*4D
$GNVTG,,,,,,,,,N*2E
$GNGGA,,,,,,0,00,99.99,,,,,,*56
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GPGSV,1,1,01,30,,,44*7B
$GLGSV,1,1,00*65
$GNGLL,,,,,,V,N*7A
...
```

**4. SD カードを使ってみる**

- ステップ 1. micro SD カードを SD カードスロットに挿入します。
- ステップ 2. File--> Examples-->SD-->CardInfo スケッチを選択します。
- ステップ 3. Wio LTE Cat NB1 の背面にある BOOT ボタンを押し続けながら、USB を PC に接続します。
- ステップ 4. デバイスマネージャに **STM BOOTLARDER** が表示されます。
- ステップ 5. Tools-->Boards-->Wio Tracker LTE を選択します。
- ステップ 6. COM ポートを空白のままにします。
- ステップ 7. Sketch-->Upload を選択して、コードを Wio_LTE にアップロードします。

```cpp
// SD ライブラリをインクルード
#include <SD.h>

// SD ユーティリティライブラリ関数を使用して変数を設定
Sd2Card card;
SdVolume volume;
SdFile root;

// SD シールドまたはモジュールに合わせて変更
const int chipSelect = 43;

void setup()
{
  SerialUSB.print("\nInitializing SD card...");
  pinMode(SS, OUTPUT);

  while (!card.init(SPI_HALF_SPEED, chipSelect)) {
    SerialUSB.println("initialization failed. Things to check:");
    SerialUSB.println("* is a card is inserted?");
    SerialUSB.println("* Is your wiring correct?");
    SerialUSB.println("* did you change the chipSelect pin to match your shield or module?");
  } 
  
  SerialUSB.print("\nCard type: ");
  switch(card.type()) {
    case SD_CARD_TYPE_SD1:
      SerialUSB.println("SD1");
      break;
    case SD_CARD_TYPE_SD2:
      SerialUSB.println("SD2");
      break;
    case SD_CARD_TYPE_SDHC:
      SerialUSB.println("SDHC");
      break;
    default:
      SerialUSB.println("Unknown");
  }

  if (!volume.init(card)) {
    SerialUSB.println("Could not find FAT16/FAT32 partition.\nMake sure you've formatted the card");
    return;
  }

  uint32_t volumesize;
  SerialUSB.print("\nVolume type is FAT");
  SerialUSB.println(volume.fatType(), DEC);
  SerialUSB.println();
  
  volumesize = volume.blocksPerCluster();
  volumesize *= volume.clusterCount();
  volumesize *= 512;
  SerialUSB.print("Volume size (bytes): ");
  SerialUSB.println(volumesize);
  SerialUSB.print("Volume size (Kbytes): ");
  volumesize /= 1024;
  SerialUSB.println(volumesize);
  SerialUSB.print("Volume size (Mbytes): ");
  volumesize /= 1024;
  SerialUSB.println(volumesize);

  SerialUSB.println("\nFiles found on the card (name, date and size in bytes): ");
  root.openRoot(volume);
  root.ls(LS_R | LS_DATE | LS_SIZE);
}

void loop(void) {
  
}

```

- ステップ 8. **RST** ボタンを押して COM ポートを有効にします。
- ステップ 9. COM モニターツールを使用してシリアルメッセージを表示します。**Arduino IDE の COM モニターを使用しないでください！ これにより次回のダウンロードが失敗する可能性がありますが、Arduino IDE を再起動することでこの問題を解決できます**。
- ステップ 10. シリアルモニターを開くと、以下の情報が画面に表示されます。

```cpp
Initializing SD card...
Card type: SDHC

Volume type is FAT32

Volume size (bytes): 2689048576
Volume size (Kbytes): 2626024
Volume size (Mbytes): 2564

Files found on the card (name, date and size in bytes):
```

**5. ネットワーク RSSI を操作する**

- ステップ 1. File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->RSSI スケッチを選択します。
- ステップ 2. Wio LTE Cat NB1 の背面にある BOOT ボタンを押しながら、USB を PC に接続します。
- ステップ 3. デバイスマネージャーに **STM BOOTLARDER** が表示されます。
- ステップ 4. Tools-->Boards-->Wio_Tracker_LTE を選択します。
- ステップ 5. COM ポートを空白のままにします。
- ステップ 6. Sketch-->Upload を選択してコードを Wio_LTE にアップロードします。

```cpp
#include <ublox_sara_r4.h>
#include <UART_Interface.h>

Ublox_sara_r4 ublox = Ublox_sara_r4();

void setup() {
  
  SerialDebug.println("Begin...");
  ublox.powerOn();
  while(false == ublox.Check_If_Power_On()){
    SerialDebug.println("Waitting for module to alvie...");
    delay(1000);
  }  
  SerialDebug.println("Power On O.K!");

  delay(100);
  check_with_cmd("AT+UGPIOC=23,10\r\n", "OK", CMD);
  check_with_cmd("AT+UGPIOC=16,2\r\n", "OK", CMD);
}

void loop() {
	int signal;
	if(ublox.getSignalStrength(&signal)) {
		SerialDebug.print("RSSI: ");
		SerialDebug.println(signal, DEC);
	} else {
		SerialDebug.print("Error");
	}

	delay(1000);
 
}

```

- ステップ 7. **RST** を押すと、以下の情報が画面に表示されます。

```cpp
AT+CSQ

+CSQ: 99,99

OKRSSI: 99

AT+CSQ

+CSQ: 99,99

OKRSSI: 99

AT+CSQ

+CSQ: 99,99

OKRSSI: 99

AT+CSQ

+CSQ: 99,99
```


**6. Arduino の TCP サンプルを操作する**

- ステップ 1. File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->Network-->tcp_directLink スケッチを選択します。
- ステップ 2. Wio LTE Cat NB1 の背面にある BOOT ボタンを押しながら、USB を PC に接続します。
- ステップ 3. デバイスマネージャーに **STM BOOTLARDER** が表示されます。
- ステップ 4. Tools-->Boards-->Wio_Tracker_LTE を選択します。
- ステップ 5. COM ポートを空白のままにします。
- ステップ 6. Sketch-->Upload を選択してコードを Wio_LTE にアップロードします。

```cpp
#include <ublox_sara_r4.h>

Ublox_sara_r4 ublox = Ublox_sara_r4();

char *server = "www.arduino.cc";
uint16_t port = 80;
int sockId = -1;

void setup() {
	bool network_attached = false;

	Log_info("Begin...");
	
	ublox.powerOn();
	Log_info("Waitting for module to alvie...");
	while(false == ublox.isAlive()){
		Log(".");
		delay(100);
	} 
	Logln(); 

	Log_info("Initializing network..");
	if(!ublox.network_Init(120)) { 
		Log_error("Network initialize timeout.");
		while(1);
	}
	Log_info("APN: " + String(ublox._apn));
	Log_info("Local IP: " + String(ublox._str_ip));
	Log_info("Operator: " + String(ublox._operator));
	Log_info("Network attached.");
	
	// このメソッドは透過セッションを設定するために重要です
	// 非透過セッションを使用するには disableDirectLinkMode() を使用します  
	ublox.enableDirectLinkMode();

	if(-1 == (sockId = ublox.createSocket(TCP))) {
		Log_error("Create socket error!");
		return;
	}
	if(!ublox.sockConnect(sockId, server, port)) {
		Log_error("connect to server failed.");
	}			
	Log_info("Sent TCP message in direct link mode.");
		
}	

void loop() {
	static uint8_t tries = 0;
	String str_msg = "ublox random number " + String(random(0,100));
	// String str_msg = "/txt HTTP"; 

	ublox.socketWrite((uint8_t *)str_msg.c_str(), (uint16_t)str_msg.length());
	Log_info("Send msg: " + str_msg);

	tries++;
	if(tries > 5) {
		if(ublox.sockClose(sockId)) {
			Log_info("Close socket.");
		}
		Log_info("Enter AT command mode.");
		while(true) AT_bypass();
	}

	delay(2000);
}


```

- ステップ 7. **RST** を押すと、以下の情報が画面に表示されます。

```cpp
[INFO] Begin...
[INFO] Waitting for module to alvie...
...
[INFO] Initializing network..
.............................[INFO] APN: ctnb
[INFO] Local IP: 10.14.8.161
[INFO] Operator: 460 11 ????
[INFO] Network attached.
[INFO] Sent TCP message in direct link mode.
[INFO] Send msg: ublox random number 33
[INFO] Send msg: ublox random number 43
[INFO] Send msg: ublox random number 62
[INFO] Send msg: ublox random number 29
[INFO] Send msg: ublox random number 0
[INFO] Send msg: ublox random number 8
```


**7. Arduino の UDP サンプルを操作する**

- ステップ 1. File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->Network-->udp_directLink スケッチを選択します。
- ステップ 2. Wio LTE Cat NB1 の背面にある BOOT ボタンを押しながら、USB を PC に接続します。
- ステップ 3. デバイスマネージャーに **STM BOOTLARDER** が表示されます。
- ステップ 4. Tools-->Boards-->Wio_Tracker_LTE を選択します。
- ステップ 5. COM ポートを空白のままにします。
- ステップ 6. Sketch-->Upload を選択してコードを Wio_LTE にアップロードします。

```cpp
#include <ublox_sara_r4.h>

Ublox_sara_r4 ublox = Ublox_sara_r4();

char *server = "time.nist.gov";
uint16_t port = 8888;
int sockId = -1;

void setup() {
	bool network_attached = false;

	Log_info("Begin...");
	
	ublox.powerOn();
	Log_info("Waitting for module to alvie...");
	while(false == ublox.isAlive()) {
		Log(".");
		delay(100);
	}  
	Logln("");

	Log_info("Initializing network..");
	if(!ublox.network_Init(120)) { 
		Log_error("Network initialize timeout.");
		while(1);
	}
	Log_info("APN: " + String(ublox._apn));
	Log_info("Local IP: " + String(ublox._str_ip));
	Log_info("Operator: " + String(ublox._operator));
	Log_info("Network attached.");
	
	if(-1 == (sockId = ublox.createSocket(UDP))) {
		Log_error("Create socket error!");
	}
	Log("[INFO] Create socket id: ");
	Logln(sockId);

	ublox.enableDirectLinkMode();
	if(!ublox.sockConnect(sockId, server, port)) {
		Log_error("connect to server failed.");
	}
	Log_info("Sent UDP message in direct link mode.");


		
}	

void loop() {
	static uint8_t tries = 0;

	String str_msg = "ublox random number " + String(random(0,100));

	ublox.socketWrite((uint8_t *)str_msg.c_str(), (uint16_t)str_msg.length());
	Log_info("Send msg: " + str_msg);

	tries++;
	if(tries > 5) {
		if(ublox.sockClose(sockId)) {
			Log_info("Close socket.");
		}
		while(true) AT_bypass();
	}

	delay(2000);
}

```

- ステップ 7. **RST** を押すと、以下の情報が画面に表示されます。

```
[INFO] Waitting for module to alvie...
...
[INFO] Initializing network..
....................[INFO] APN: ctnb
[INFO] Local IP: 10.178.48.90
[INFO] Operator: 460 11 ????
[INFO] Network attached.
[INFO] Create socket id: 0
[INFO] Sent UDP message in direct link mode.
[INFO] Send msg: ublox random number 33
[INFO] Send msg: ublox random number 43
[INFO] Send msg: ublox random number 62
[INFO] Send msg: ublox random number 29
[INFO] Send msg: ublox random number 0
[INFO] Send msg: ublox random number 8
[INFO] Close socket.
```

**8. Arduino 例を使った MQTT Subscribe の実行**

- ステップ 1. File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->MQTTClient-->mqtt_sub スケッチを選択します。
- ステップ 2. Wio LTE Cat NB1 の背面にある BOOT ボタンを押し続けながら、USB を PC に接続します。
- ステップ 3. デバイスマネージャーで **STM BOOTLARDER** が表示されます。
- ステップ 4. Tools-->Boards-->Wio_Tracker_LTE を選択します。
- ステップ 5. COM ポートを空白のままにします。
- ステップ 6. Sketch-->Upload を選択して、コードを Wio_LTE にアップロードします。

```cpp
#include <Arduino.h>

#include <math.h>

#include <ublox_sara_r4.h>
#include <ublox_sara_r4_mqtt.h>
#include <UART_Interface.h>

#define PRE_FIX  "[MQTT] "

MQTT mqtt;
Ublox_sara_r4 ublox = Ublox_sara_r4();

char *server = "test.mosquitto.org";
uint16_t port = 1883;

void setup() {
	Log_info("開始...");
	
	ublox.powerOn();
	Log_info("モジュールが起動するのを待っています...");
	while(false == ublox.isAlive()) {
		Log(".");
		delay(100);
	}  
	Logln();

	Log_info("ネットワークを初期化しています...");	
	if(!ublox.network_Init()) { 
		Log_error("ネットワーク初期化タイムアウト。");
		return;
	}

	// MQTT サーバーを設定
	if(!mqtt.setServer(server, port)) {
		Log_error("MQTT サーバーの設定に失敗しました");
		return;
	} else {
		Logln(PRE_FIX"MQTT サーバーの設定に成功しました。");
	}

	// Will を設定
	if(!mqtt.setWill("Heat", "ublox n/r410")) {
		Log_error("MQTT Will の設定に失敗しました");
		return;
	} else {
		Logln(PRE_FIX"MQTT Will の設定に成功しました。");
	}

	// サーバーに接続
	Logln(PRE_FIX"サーバーに接続中: " + String(server));
	while(!mqtt.connect()) {}
	Logln(CRLF PRE_FIX"接続完了\n\r");
}	

void loop() 
{				
	static uint8_t tries = 0;	
	const char *topic = "Heat";
	String msg = String(random(2000, 3000)*1.0/100.0) + " 度";
	
		
	if(mqtt.publish(topic, msg.c_str())) {
		Logln(PRE_FIX" トピック " + String(topic) + " メッセージ " + msg + " を公開しました");	
	} else {
		Log_error("MQTT の公開に失敗しました");
		// while(true);
	}

	tries++;
	if(tries > 5)
	{
		if(mqtt.disconnect()) {
			Logln(PRE_FIX"切断しました。");
		}
		Log_info("AT コマンドループに入ります");
		while(true) AT_bypass();
	}
	
	delay(2000);
}

```

- ステップ 7. **RST** を押すと、以下の情報が画面に表示されます。

**9. Arduino 例を使った MQTT Publish の実行**

- ステップ 1. File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->MQTTClient-->mqtt_pub スケッチを選択します。
- ステップ 2. Wio LTE Cat NB1 の背面にある BOOT ボタンを押し続けながら、USB を PC に接続します。
- ステップ 3. デバイスマネージャーで **STM BOOTLARDER** が表示されます。
- ステップ 4. Tools-->Boards-->Wio_Tracker_LTE を選択します。
- ステップ 5. COM ポートを空白のままにします。
- ステップ 6. Sketch-->Upload を選択して、コードを Wio_LTE にアップロードします。

```cpp
#include <Arduino.h>

#include <math.h>

#include <ublox_sara_r4.h>
#include <ublox_sara_r4_mqtt.h>
#include <UART_Interface.h>

#define PRE_FIX  "[MQTT] "

MQTT mqtt;
Ublox_sara_r4 ublox = Ublox_sara_r4();

char *server = "server name or IP";
uint16_t port = 1883;

void setup() {
	Log_info("開始...");
	
	ublox.powerOn();
	Log_info("モジュールが起動するのを待っています...");
	while(false == ublox.isAlive()) {
		Log(".");
		delay(100);
	}  
	Logln();

	Log_info("ネットワークを初期化しています...");	
	if(!ublox.network_Init()) { 
		Log_error("ネットワーク初期化タイムアウト。");
		return;
	}

	// MQTT サーバーを設定
	if(!mqtt.setServer(server, port)) {
		Log_error("MQTT サーバーの設定に失敗しました");
		return;
	} else {
		Logln(PRE_FIX"MQTT サーバーの設定に成功しました。");
	}

	// Will を設定
	if(!mqtt.setWill("Heat", "ublox n/r410")) {
		Log_error("MQTT Will の設定に失敗しました");
		return;
	} else {
		Logln(PRE_FIX"MQTT Will の設定に成功しました。");
	}

	// サーバーに接続
	Logln(PRE_FIX"サーバーに接続中: " + String(server));
	while(!mqtt.connect()) {}
	Logln(CRLF PRE_FIX"接続完了\n\r");
}	

void loop() 
{				
	static uint8_t tries = 0;	
	const char *topic = "Heat";
	String msg = String(random(2000, 3000)*1.0/100.0) + " 度";
	
		
	if(mqtt.publish(topic, msg.c_str())) {
		Logln(PRE_FIX" トピック " + String(topic) + " メッセージ " + msg + " を公開しました");	
	} else {
		Log_error("MQTT の公開に失敗しました");
		// while(true);
	}

	tries++;
	if(tries > 5)
	{
		if(mqtt.disconnect()) {
			Logln(PRE_FIX"切断しました。");
		}
		Log_info("AT コマンドループに入ります");
		while(true) AT_bypass();
	}
	
	delay(2000);
}

```

- ステップ 7. **RST** を押すと、以下の情報が画面に表示されます。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/res/WioLTE_Cat_NB1_Eagle-master.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース

- **[Eagle&PDF]** [WioLTE_Cat_NB1](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/res/WioLTE_Cat_NB1_Eagle-master.zip)

- **[ライブラリ]** [WioLTE_Cat_NB1_Arduino_Library](https://github.com/Seeed-Studio/WioLTE_Cat_NB1_Arduino_Library)

- **[データシート]** [ATコマンド](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/res/SARA-R4-SARA-N4_ATCommands_(UBX-17003787).pdf)


## 技術サポートと製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>