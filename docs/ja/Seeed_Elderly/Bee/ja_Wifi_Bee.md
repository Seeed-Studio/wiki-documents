---
description: Wifi Bee
title: Wifi Bee
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wifi_Bee
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/Seeedstudio_Wifibee_MRF24WB0MA.jpg) ![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/SeeedStudio_Wifibee_ATMega328.jpg)

**Wifi Bee** は、ワイヤレスセンサーネットワークに便利な xBee Pro ソケット互換のスタンドアロン MCU ノードです。Microchip の IEEE 802.11 Wi-Fi トランシーバーモジュール [MRF24WB0MA](http://www.microchip.com/wwwproducts/Devices.aspx?dDocName=en548014) と 8ビット AVR MCU [ATMega328P](http://www.atmel.com/dyn/products/product_card.asp?part_id=4198) を統合しています。スマートで xBee Pro ソケット互換の外観により、製品への統合が非常に簡単です。**ATMega328P** は、[UartSBee](https://seeeddoc.github.io/UartSBee/) または [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/) に接続することで、オープンソースの Arduino IDE を使用して直接プログラムできます。MCU の SPI ピンは MRF24WB0MA の対応するピンに接続され、相互に通信します。一方、他のいくつかのピン（DIO、AD、PWM など）は、2.0 mm のオスピンヘッダーの 20 ピンに引き出されています。現在のところ Wifi Bee 用の専用ファームウェアはありませんが、AsyncLabs の [WiShield](https://github.com/asynclabs/WiShield) のファームウェアを使用することができます。購入前に使用可能かどうかを確認してください。

モデル: [WLS48188P](https://www.seeedstudio.com/depot/wifi-bee-p-823.html?cPath=139_141&amp;zenid=15bcf2644eb7ecf4b3722eb98c79b074)

## 特徴 ##

- xBee 互換ヘッダー

- Arduino IDE を使用したプログラミングが可能

- Arduino Duemilanove ブートローダーが事前にプログラム済み

- 低消費電力および低データレート Wi-Fi をサポート

- 802.11b 互換

- WEP、WPA-PSK、WPA2-PSK セキュリティ

- 電源および Wi-Fi 接続インジケーター用の LED

## 応用アイデア ##

- ワイヤレスローカルエリアネットワーク

- [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/) を使用したワイヤレスセンサーネットワーク

- インターネット接続

- [uIP TCP/IP スタック](https://en.wikipedia.org/wiki/UIP_(micro_IP)) を使用して無限のネットワークアプリケーションを構築

- TCP/IP スタックを学び、実験したい人に最適

## 回路図 ##

![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/Wifi_Bee_v0.91b.png)

[PDF形式の回路図を開くにはこちらをクリック](https://wiki.seeedstudio.com/ja/images/9/9f/WifiBee_v0.91b.pdf)

## 主な仕様 ##

|項目|最小|標準|最大|
|---|---|---|---|
|動作電圧|3.0V|3.3V|3.6V|
|動作温度|0°C ～ +70°C|||
|動作周波数|16MHz|||
|MCU|ATmega328P||||

## 機械的寸法 ##

Wifi Bee のサイズは 27.2mm x 35.7mm です。

![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/Wifi_Bee_v0.91b_pcb.png)

## ハードウェア ##

![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/Seeedstudio_WifiBee_Parts.png)
**Wifi Bee** - 部品

### ピン定義と定格 ###

|ピン|番号|パッドタイプ|説明|Arduino ピン番号|
|---|---|---|---|---|
|3V3|1|電源入力|VCC, +3.3V|-|
|TX|2|出力|Uart Tx ポート|1(DIO)|
|RX|3|入力|Uart Rx ポート|0(DIO)|
|PB0|4|入力/出力|ATmega328P PB0|8(DIO)|
|!RESET|5|入力|ATmega328 リセットポート|||
|PD7|6|入力/出力|ATmega328P PD7|7(DIO)|
|PD6|7|入力/出力|ATmega328P PD6|6(DIO)|
|PD5|8|入力/出力|ATmega328P PD5|5(DIO)|
|!DTR|9|入力|ATmega328P のプログラミングに使用|-|
|GND|10|GND|GND|-|
|PC1|11|入力/出力|ATmega328P PC1|1(アナログ入力)/15(DIO)|
|PC0|12|入力/出力|ATmega328P PC0|0(アナログ入力)/14(DIO)|
|AD7|13|入力|ATmega328P ADC7|7(アナログ入力)|
|VREF|14|入力|ATmega328P AREF ポート|-|
|AD6|15|入力|ATmega328P ADC6|6(アナログ入力)|
|INT1|16|入力/出力|ATmega328P PD3|3(DIO)|
|PC3|17|入力/出力|ATmega328P PC3|3(アナログ入力)/17(DIO)|
|PC2|18|入力/出力|ATmega328P PC2|2(アナログ入力)/16(DIO)|
|SCLSCL|19|入力/出力|ATmega328P PC5|5(アナログ入力)/19(DIO)|
|SDA|20|入力/出力|ATmega328P PC4|4(アナログ入力)/18(DIO)|

## 使用方法 ##

### ハードウェアのインストール ###

- Wifi Bee を使用する最適な方法は、[Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/) に接続することです。[Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/) は、USB-UART 接続を提供し、内蔵の 3.3V LDO レギュレーターによる電源供給を可能にします。

![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/Bee_Stem_Connected_to_Wifi_BEE_and_A_Twig.jpg)
Grove - XBee Carrier - **Wifi Bee** に接続され、USBで電源供給されています

### プログラミング ###

#### ワイヤレスネットワークの設定 ####

このセクションでは、**Wifi Bee** に適した WiFi ルーターを使用してホームネットワークを設定する方法の概要を説明します。

![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/WifiBee_Network_Architecture.jpg)
ワイヤレスセンサーネットワーク - Wifi Bee ノードを使用したサンプルアーキテクチャ

1. Webブラウザを使用してWiFiルーターのWeb設定インターフェースにログインします。通常、ルーター製造元によって提供されるデフォルトのIPアドレス（例: 192.168.0.1）とログインID（admin）、パスワード（password）を使用します。

2. 上記の場合、ルーターのIPアドレス192.168.0.1はワイヤレスネットワークのゲートウェイIPアドレスでもあります。このIPアドレスのサブネットマスクは255.255.255.0です。

3. ワイヤレスネットワークの名前またはSSIDを設定します。このチュートリアルでは「HOMENETWORK」と設定します。この名前はチュートリアル全体で使用されます。

4. ルーターに接続する任意のノードはDHCPを通じてIPアドレスを取得しますが、Wifi BeeはDHCPをサポートしていません。そのため、静的IPアドレスを割り当てる必要があります。多くのルーターはネットワークデバイスのMACアドレスを使用してアドレス予約を提供します。ワイヤレスルーターのLAN設定セクションで、**Wifi Bee** にIPアドレス192.168.0.4を予約します。

- 1. 予約するIPアドレスを192.168.0.4として入力します。これは**Wifi Bee** のIPアドレスです。
- 2. Wifi Beeに表示されるMACアドレス（形式: AB:CD:EF:GH:IJ:KL）を入力します。
- 3. デバイス名を「WIFIBEE」とします。この名前は任意の単語であり、重要ではありません。

5. ネットワークのセキュリティオプションを設定します。Wifi Beeは**Open（セキュリティ無効）、WEP（Wired Equivalent Privacy）、WPA-PSK（Wi-Fi Protected Access Pre-Shared Key）、WPA2-PSK（Wi-Fi Protected Access 2 with Pre-Shared Key）**をサポートしています。適切なセキュリティオプションを設定します。この設定は**Wifi Bee** が接続を確立するために使用されます。

- 1. セキュリティオプションをWPA-PSKに設定します。

- 2. WPA-PSKモードではWPA-PSKセキュリティ暗号化ネットワークキーが必要です。このキーを12345678に設定します。

6. インターネット接続など、その他の設定についてはルーターのユーザーガイドを参照してください。

#### アプリケーション例を実行するためのライブラリのダウンロードと設定 ####

アプリケーション例では、AsynclabsのWiShieldライブラリを使用します。**Wifi Bee**専用のファームウェアはありません。このライブラリはAdam Dunkelsの**uip TCP/IPスタック**を使用しています。
このライブラリは元の著者によってGPL v2の下で提供されています。そのため、WiShieldを使用して構築されるアプリケーションはGPLv2互換である必要があります。

1. [WiShield](https://github.com/asynclabs/WiShield) からライブラリをダウンロードします。

2. Arduinoの**/libraries/WiShieldディレクトリ**に内容を展開します。

3. ライブラリには多くのアプリケーション例が含まれています。必要な機能のみが構築されるように設定されています。これによりFLASHを節約できます。

- この設定は**/libraries/WiShield/apps-conf.h**で行われます。

- **/libraries/WiShield/apps-conf.hファイル**で構築するアプリケーションのモード（例: WEB-SERVER、WEB-CLIENT、SOCKETアプリケーションなど）をアンコメントします。

- 例えば、Webサーバーアプリケーションを構築したい場合は、**#define APP_WEBSERVER**をアンコメントし、他のモードをコメントアウトします。この変更にはライブラリの再構築が必要です。そのため、Arduino IDEを閉じて再度開きます。

4. WebServerの例を構築します。

- **/libraries/WiShield/apps-conf.h**でモード設定をAPP_WEBSERVERに設定します。

- Arduino IDEで**/libraries/WiShield/examples/WebServer/WebServer.pde**スケッチを開きます。

- **local_ip[]**配列を**{192,168,0,4}**に設定します。これは上記で設定した**Wifi Bee**のIPアドレスです。

- **gateway_ip[]**配列を**{192,168,0,1}**に設定します。これはネットワーク設定で設定したルーターのIPアドレスです。

- **subnet_mask[]**配列を**{255,255,255,0}**に設定します。これはローカルワイヤレスネットワークのサブネットマスクです。

- **prog_char ssid[]**を**{"HOMENETWORK"}**に設定します。この名前はネットワーク設定時に割り当てたものです。

- 次に、ネットワーク設定時に構成したセキュリティオプションに**security_type**を設定します。Wifiルーターで構成した通りに2（つまりWPA）に設定します。

- `//unsigned char security_type = 2;	// 0 - open; 1 - WEP; 2 - WPA; 3 - WPA2`

- また、`const prog_char security_passphrase[] PROGMEM = {"12345678"}` を設定します。

5. 修正されたWebServer.pdeスケッチは以下のコードのようになります。

6. ボードタイプを**Arduino Duemilanove**に設定し、スケッチをコンパイルします。

7. **Wifi Bee**にアップロードし、リセットボタンを押します。

8. すべてが正常に動作すれば、Wifi BeeはHOMENETWORKに接続し、青色LED（WIFI LED）が点灯します。

9. HOMENETWORKに接続されたPCからWebブラウザを開き、URL `[http://192.168.0.4]` を入力します。

10. 以下のメッセージが表示されます: `Hello World!! I am WifiBee.`

```
/*
 * Web Server: Modified WebServer.pde example.
 * A simple web server example using the WiShield library and WiBee.
 */

#include <WiShield.h>

#define WIRELESS_MODE_INFRA	1
#define WIRELESS_MODE_ADHOC	2

// Wireless configuration parameters ----------------------------------------
unsigned char local_ip[] = {192,168,0,4};	// Wifi BeeのIPアドレス
unsigned char gateway_ip[] = {192,168,0,1};	// ルーターまたはゲートウェイのIPアドレス
unsigned char subnet_mask[] = {255,255,255,0};	// ローカルワイヤレスネットワークのサブネットマスク
const prog_char ssid[] PROGMEM = {"HOMENETWORK"};	// 最大32バイト

unsigned char security_type = 2;	// 0 - open; 1 - WEP; 2 - WPA; 3 - WPA2

// WPA/WPA2パスフレーズ
const prog_char security_passphrase[] PROGMEM = {"12345678"};	// 最大64文字。ネットワーク名。

// WEP 128ビットキー
// サンプルHEXキー
prog_uchar wep_keys[] PROGMEM = {	0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d,	// キー0
					0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,	0x00,	// キー1
					0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,	0x00,	// キー2
					0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,	0x00	// キー3
				};

// ワイヤレスモードを設定
// インフラストラクチャ - APに接続
// アドホック - 他のWiFiデバイスに接続
unsigned char wireless_mode = WIRELESS_MODE_INFRA;

unsigned char ssid_len;
unsigned char security_passphrase_len;
//---------------------------------------------------------------------------

void setup()
{
	WiFi.init();
}

// Webサーバーが提供するWebページ
const prog_char webpage[] PROGMEM = {"HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<center><h1>Hello World!! I am WifiBee.</h1></center>"};

void loop()
{
	WiFi.run();
}
```

### 例 ###

#### Webブラウザにセンサー値を送信するシンプルなWebサーバー ####

- 上記で説明したネットワーク設定を使用してください。

- プログラミングと電源供給には [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/) を使用してください。

- `apps-conf.h` を設定し、APP_WISERVER モードのみを使用するようにしてください。

- 以下のスケッチを Arduino IDE を使用して **Wifi Bee** にコンパイルしてアップロードしてください（上記の例で説明されています）。

- リセットボタンを押してください。Wifi Bee がWiFiネットワークに接続するのを待ちます（青色LEDが点灯します）。

- Arduino IDEのシリアルポートターミナルを開くと（ボーレート57600）、ネットワーク通信の詳細情報が表示されます。

- HOMENETWORKに接続されたPCからWebブラウザを開き、URL `[http://192.168.0.4]` を入力してください。

- WifiBeeはセンサー値をブラウザに提供します。HTMLコードは10秒ごとに自動更新されるように記述されています。

```
/*
 * WiServerとSeeedstudioのWifi Beeを使用してWebページを提供するシンプルなスケッチ。
 * アナログセンサーがWifi BeeのA2に接続されています（Grove - XBee Carrierを使用）。この値が
 * クライアント（Webブラウザ）に送信されます。HTMLページはセンサー値に基づいて準備され、
 * 自動的にリフレッシュする指示も含まれています。
 */

/* この例はSimpleServer.pdeに基づいています。著作権は元の著者に帰属します */

/* この例を動作させるには、apps-conf.hファイルを以下のように変更してください。APP_WISERVERモードのみが有効です：
--------------------------------------------------------------------

//プロジェクトで使用するアプリケーションのヘッダーファイルをここに含めます。
//#define APP_WEBSERVER
//#define APP_WEBCLIENT
//#define APP_SOCKAPP
//#define APP_UDPAPP
#define APP_WISERVER
----------------------------------------------------------------------
*/

#include <WiServer.h>

#define WIRELESS_MODE_INFRA	1
#define WIRELESS_MODE_ADHOC	2

// ワイヤレス設定パラメータ ----------------------------------------
unsigned char local_ip[] = {192,168,0,4};	// WifiBeeのIPアドレス
unsigned char gateway_ip[] = {192,168,0,1};	// ルーターまたはゲートウェイのIPアドレス
unsigned char subnet_mask[] = {255,255,255,0};	// ローカルネットワークのサブネットマスク
const prog_char ssid[] PROGMEM = {"HOMENETWORK"};	// 最大32バイト

unsigned char security_type = 2;	// 0 - オープン; 1 - WEP; 2 - WPA; 3 - WPA2

// WPA/WPA2パスフレーズ
const prog_char security_passphrase[] PROGMEM = {"12345678"};	// 最大64文字

// WEP 128ビットキー
// サンプルHEXキー
prog_uchar wep_keys[] PROGMEM = { 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d,	// キー0
				  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,	// キー1
				  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,	// キー2
				  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00	// キー3
				};

// ワイヤレスモードを設定
// インフラストラクチャ - APに接続
// アドホック - 他のWiFiデバイスに接続
unsigned char wireless_mode = WIRELESS_MODE_INFRA;
unsigned int  sensorValue;
unsigned char ssid_len;
unsigned char security_passphrase_len;
// ワイヤレス設定パラメータの終了 ----------------------------------------

int counter;
// Webページを生成するページ提供関数
boolean sendMyPage(char* URL) {

    // リクエストされたURLが"/"と一致するか確認
    if (strcmp(URL, "/") == 0) {
        // WiServerのprintおよびprintln関数を使用してページ内容を書き出す
        WiServer.print("<html>");

        // Webブラウザに10秒ごとにリフレッシュするよう指示
        WiServer.print("<head><meta http-equiv=\"refresh\" content=\"10\"> </head>");
        WiServer.println("<H1>WifiBee Connected...<H1>");
        WiServer.print("<H2>Sensor Value = ");
        WiServer.print(sensorValue);  // A2に接続された外部センサーのRAW値をクライアントに送信
        WiServer.print("</H2></html>");
        return true;
    }
    // URLが見つからない場合
    return false;
}

void setup() {

  // WiServerを初期化し、sendMyPage関数を使用してページを提供
  WiServer.init(sendMyPage);

  // シリアル出力を有効にし、WiServerにログメッセージを生成させる（オプション）
  Serial.begin(57600);
  WiServer.enableVerboseMode(true);
}

void loop(){
  sensorValue = analogRead(A2);  // A2にGroveインターフェースを介して接続された外部センサーを読み取る
  // WiServerを実行
  WiServer.server_task();
  delay(10);
}
```

#### Pachube.comにセンサーフィードを送信するシンプルなWebクライアント ####

` このセクションは後で改訂されます `

- 上記で説明したネットワーク設定を使用してください。

- プログラミングと電源供給には [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/) を使用してください。

- `apps-conf.h` を設定し、APP_WISERVER モードのみを使用するようにしてください。

- 以下のスケッチを Arduino IDE を使用して **Wifi Bee** にコンパイルしてアップロードしてください（上記の例で説明されています）。

- リセットボタンを押してください。Wifi Bee がWiFiネットワークに接続するのを待ちます（青色LEDが点灯します）。

- Arduino IDEのシリアルポートターミナルを開くと（ボーレート57600）、ネットワーク通信の詳細情報が表示されます。

- Wifi Beeは定期的にデータをPachube.comに送信します。

```
/*
 * WiServerライブラリとSeeedstudioのWifiBeeを使用してセンサーフィードを
 * pachube.comに送信するシンプルなスケッチ。
 * これはSimpleClient.pdeの修正版です。著作権は元の著者に帰属します。
 */

/* この例を動作させるには、apps-conf.hファイルを以下のように変更してください。APP_WISERVERモードのみが有効です：
--------------------------------------------------------------------
//プロジェクトで使用するアプリケーションのヘッダーファイルをここに含めます。
//#define APP_WEBSERVER
//#define APP_WEBCLIENT
//#define APP_SOCKAPP
//#define APP_UDPAPP
#define APP_WISERVER
----------------------------------------------------------------------
*/


#include <WiServer.h>

#define WIRELESS_MODE_INFRA	1
#define WIRELESS_MODE_ADHOC	2

// ワイヤレス設定パラメータ ----------------------------------------
unsigned char local_ip[] = {192,168,0,4};	// WifiBeeのIPアドレス
unsigned char gateway_ip[] = {192,168,0,1};	// ルーターまたはゲートウェイのIPアドレス
unsigned char subnet_mask[] = {255,255,255,0};	// ローカルネットワークのサブネットマスク
const prog_char ssid[] PROGMEM = {"HOMENETWORK"};// 最大32バイト

unsigned char security_type = 2;	// 0 - オープン; 1 - WEP; 2 - WPA; 3 - WPA2

// WPA/WPA2パスフレーズ
const prog_char security_passphrase[] PROGMEM = {"12345678"};	// 最大64文字

// WEP 128ビットキー
// サンプルHEXキー
prog_uchar wep_keys[] PROGMEM =
{ 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d,	// キー0
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,	// キー1
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,	// キー2
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00	// キー3
};

// ワイヤレスモードを設定
// インフラストラクチャ - APに接続
// アドホック - 他のWiFiデバイスに接続
unsigned char wireless_mode = WIRELESS_MODE_INFRA;

unsigned char ssid_len;
unsigned char security_passphrase_len;
// ワイヤレス設定パラメータの終了 ----------------------------------------


// サーバーからのデータを出力する関数
void printData(char* data, int len) {

  // サーバーから返されたデータを出力
  // データはnull終端されておらず、小さなパケットに分割される可能性があり、
  // HTTPヘッダーを含みます。
  while (len-- > 0) {
    Serial.print(*(data++));
  }
}

int sensorValue=0;
// フィードに送信するデータを準備
void pachubefeedData()
{
   sensorValue=analogRead(A2);   // A2に接続されたアナログセンサーを読み取る（Grove - XBee Carrierインターフェースを使用）
   WiServer.print(sensorValue);
}



// pachube.comのIPアドレス
uint8 ip[] = {173,203,98,29};

char hostName[] = "www.pachube.com\nX-PachubeApiKey: YOUR_API_KEY_HERE\nConnection: close"; // YOUR_API_KEY_HERE をAPIキーに置き換えてください
char url[] = "/api/12345.csv?_method=put"; // 12345 をフィード番号に置き換えてください

// PachubeにデータをPOSTするリクエスト
POSTrequest postPachubeFeed(ip, 80, hostName, url, pachubefeedData);


void setup() {
    // WiServerを初期化（Webページを提供する必要がないため、ページ提供関数にはNULLを渡します）
  WiServer.init(NULL);

  // シリアル出力を有効にし、WiServerにログメッセージを生成させる（オプション）
  Serial.begin(57600);
  WiServer.enableVerboseMode(true);

  // サーバーからデータが返されたときにprocessData関数を呼び出す
  postPachubeFeed.setReturnFunc(printData);
}


// データを取得する時間（ミリ秒単位）
long updateTime = 0;

void loop(){

  // 更新を送信する時間かどうかを確認
  if (millis() >= updateTime) {
    postPachubeFeed.submit();    
    // 1分後に別の更新を送信
    updateTime += 60;
  }

  // WiServerを実行
  WiServer.server_task();

  delay(10);
}
```

## 部品表 (BOM) / パーツリスト ##

|部品|数量|値|パッケージ|
|---|---|---|---|
|C1|1|10u|C_TAN_3X3.5|
|C2,C3|2|1u|0603|
|C4|1|100n|0603|
|J1|1|CK_2X3_2.0|CK_2X3_2.0|
|PWR|1|赤|LED0603|
|R1|1|10k|0603|
|R2,R3,R4,R5,R7|5|4.7k|0603|
|R6|1|1k|0603|
|U1|1|OPEN_BEE|XBEE_EXT_SMD|
|U3|1|MRF24WB0MA|MRF24WB0MA|
|U4|1|ATmega328P_MU1040|MLF32X|
|WIFI|1|青|LED0603|
|X1|1|16MHz|XTAL_3X2|

## サポート ##

質問やより良い設計アイデアがある場合は、[フォーラム](https://www.seeedstudio.com/forum)または **wish** にて議論することができます。

## バージョントラッカー ##

|リビジョン|説明|リリース|
|----|----|----|
|v0.91b|初回公開リリース|2011年4月6日|
|v1.0|信号線の幅を6ミルから8ミルに変更|2011年12月13日|

## WifiBee v1.0 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Bee/res/WifiBee_v1.0_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## WifiBee v0.91b 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://wiki.seeedstudio.com/ja/images/f/ff/Wifi_Bee_v0.91b_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース ##

- **[Eagle]**[WifiBee v1.0 Eagle Files.zip](https://files.seeedstudio.com/wiki/Wifi_Bee/res/WifiBee_v1.0_Eagle_Files.zip)
- **[PDF]**[WifiBee v1.0 PCB](https://files.seeedstudio.com/wiki/Wifi_Bee/res/WifiBee%20v1.0%20PCB.pdf)
- **[PDF]**[WifiBee v1.0 SCH](https://files.seeedstudio.com/wiki/Wifi_Bee/res/WifiBee%20v1.0%20Sch.pdf)
- **[PDF]**[WifiBee v0.91b 回路図 (PDF形式)](https://wiki.seeedstudio.com/ja/images/9/9f/WifiBee_v0.91b.pdf)
- **[EAGLE]**[Wifi Bee v0.91b 設計ファイル (Eagle形式)](https://wiki.seeedstudio.com/ja/images/f/ff/Wifi_Bee_v0.91b_eagle.zip)
- **[Library]**[WiShield ライブラリ](https://github.com/asynclabs/WiShield)
- **[Library]**[Arduino 1.0に対応した最新のWiShieldライブラリ](https://github.com/CapnBry/WiShield_user_contrib)

## 技術サポート & 製品ディスカッション ##

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なるニーズや好みに応じたコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>