---
description: Wifi Shield V1.2
title: Wifi Shield V1.2
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wifi_Shield_V1.2
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi_shield_v1.1_front.png)

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi_shield_v1.1_back.png)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/depot/Wifi-Shield-p-1220.html" target="blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

このWiFiシールドはRN171 TCP/IPモジュールを搭載しており、Arduino/Seeeduinoを使用して802.11b/gワイヤレスネットワークに接続することができます。このシールドのArduinoとのデフォルト通信プロトコルはUART/シリアルであり、組み込まれた2列のジャンパーを使用して、RXとTXに使用するデジタルピン（D0からD7）を選択できます。また、I2Cおよびシリアル用の2つのオンボードGroveコネクタを備えており、これによりシールドを任意のGroveデバイスと組み合わせて使用することが可能です。オンボードアンテナにより、シールドは広範囲をカバーし、より強力な信号を送信できます。RN171モジュールはTCP、UDP、FTP、およびHTTP通信プロトコルをサポートしており、スマートホームネットワーク、ロボット制御、個人用気象ステーションなど、ほとんどのワイヤレスおよびIoTネットワークプロジェクトのニーズを満たします。このシールドは以下の例や[ユーザーマニュアル](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/WiFly-RN-UM.pdf)で非常に詳しく文書化されています。

## 仕様

| 項目 | 値 |
|---|---|
| 動作電圧 | 3.3~5.5 V |
| 直接対応ボード | Arduino Uno/Seeeduino |
| 消費電流 | 25~400mA |
| 送信出力 | 0-10 dBm |
| 周波数 | 2402~2480 MHz |
| チャンネル | 0~13 |
| ネットワーク速度 | 802.11bで1-11 Mbps/802.11gで6-54 Mbps |
| 寸法 | 60X56X19 mm |
| 重量 | 24±1 g |
| WiFi認証のセキュリティ | WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES) |
| 内蔵ネットワークアプリケーション | DHCPクライアント, DNSクライアント, ARP, ICMP ping, FTP, TELNET, HTTP, UDP, TCP |
| 認証 | RN171: FCC, CE |

## シールドインターフェースとコンポーネント

WiFiシールドは、D0-D7の任意の2つのデジタルピンを使用してUART/シリアル通信を行うため、Arduino/Seeeduino開発ボードと互換性があります。インストールするには、シールドをArduino/Seeeduinoボードに積み重ねるだけです。

### 概要

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi_shield_v1.2_block1.png)

**1. シリアルペリフェラルインターフェース（SPI）接続（MOSI, SCK, MISO）：** これらのピンはArduinoのピンには接続されておらず、独立しており、これらのロジックレベル出力/入力は3.3Vです。これらのピンを介してArduinoとSPI通信を行うことができますが、これらのピンとArduinoの間に3.3Vロジックコンバータが必要です。SPIモードでのデータレートは最大2Mbpsに達します。  
**RES_Wifi:** WiFiシールドにはRN-171モジュール用のオンボード「リセットボタン」があります。また、リセットコマンドを送信することでソフトウェア経由でRN-171をリセットすることも可能です。さらに、このピンをArduinoのデジタル6ピンに接続したい場合は、シールド上の「P5」とラベル付けされたパッドをはんだ付けしてください。

**2. RN171:** 超低消費電力のTCP/IPスタック内蔵ワイヤレスモジュール。

**3. アンテナ:** I.PEXコネクタ。

**4. RN171ブレークアウトセクション:** RN171モジュールには独自のアナログ入力およびGPIOピンがあり、このブレークアウトセクションを介してアクセスできます。GPIOピン（IO3, IO7, IO8, IO9）は3.3V耐性があり、アナログ入力ピン（S_0およびS_1）は0-400mVを読み取ることができます（1.2Vを超えないでください）。RN171はソフトウェアでこれらのピンを使用するように設定できます。または、他のRN171機能（例：アドホックモード）を使用するために他のピンに接続することも可能です。VCCの電圧はWiFiシールドの供給電力に依存します。

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi_shield_v1.2_breakout.png)

**5. UART/シリアル選択エリア:** Arduinoとの通信に使用するRXおよびTXピンを選択するための2列のジャンパー。

**6. Groveコネクタ:** アナログI2C Grove（Arduino UNOまたはSeeeduinoを使用する場合はピンA4&A5）およびデジタルシリアルGrove（D8&D9）。VCCの電圧はボードの電源に依存します。

### 使用ピン / シールド互換性

WiFiシールドは、RN171 WiFiモジュールとの通信にD0からD7の任意の2つのデジタルピンを使用します。ただし、D0およびD1はArduinoのプログラミングおよびシリアル通信に使用されるため、これらを使用するとこれらの機能に干渉する可能性があります。

このページの例コードでは、D2およびD3をシールドのRXおよびTXとして使用しています。この場合、ジャンパーハットは以下のように接続する必要があります：

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi_shield_v1.1_pinout.png)

D2がWIFI_TXに選択され、D3がWIFI_RXに選択されています。

### RN171 WiFiモジュール

RN-171は、スタンドアロンの完全なTCP/IPワイヤレスネットワーキングモジュールです。その小型フォームファクタと非常に低い消費電力により、RN-171はモバイルワイヤレスアプリケーションに最適です。2.4GHzラジオ、32ビットSPARCプロセッサ、TCP/IPスタック、リアルタイムクロック、暗号アクセラレータ、電力管理、およびアナログセンサーインターフェースを組み込んでいます。

最も簡単な構成では、ハードウェアはワイヤレスWiFiデータ接続を作成するために4つの接続（PWR、TX、RX、GND）のみを必要とします。さらに、RN171のアナログセンサー入力はアナログ入力ピンとして使用でき、その定格は0-400mVです（1.2V DCを超えないでください）。

**電源:**  
RN-171モジュールの動作電圧は通常3.3VDCです。そのため、WiFiシールドには電圧レギュレータとロジックレベル変換器が設計されています。シールド上のLD1117レギュレータは3.3VDCに変換し、RN171モジュールに供給します。ただし、電源供給の自動判定回路により、RN-171は3V3ピンと5Vピンの両方から電力を供給できます。ただし、ボードに3.3Vと5Vの両方を供給した場合、供給電力は5Vになります。Arduino/Seeeduinoボードと使用する場合は、WiFiシールドをボードに単純にスタックしてください。

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi_shield_v1.1_communicate.png)

RN171モジュールがArduinoに接続される方法の図

**GPIO_6:**  
RN171 WiFiモジュールのGPIO6ピンは、デフォルトではWiFiシールド上のD5とラベル付けされたLEDにのみ接続されています。このLEDは、アクセスポイント（AP）接続のステータスを表示するために使用されます。ただし、GPIO6をArduinoのデジタルピン5に接続したい場合は、WiFiシールド上の「P6」とラベル付けされたパッドをはんだ付けするだけです。

### LEDステータスインジケータ

| ラベル | 説明 | ステータス | ハードウェア接続 |
|---|---|---|---|
| D5 | 緑色LED。接続状態を示します。 | **OFF**: モジュールがネットワークに接続されていないことを意味します。**点灯**: ネットワークに接続され、インターネットアクセスが可能であることを示します。 | RN171モジュールのGPIO6に接続されています。 |
| D1 | 赤色LED。TCP/IP接続状態を示します。 | **点灯**: TCP接続済み。**高速点滅（1秒間に2回）**: IPアドレスがない、またはモジュールがコマンドモードにある。**低速点滅（1秒間に1回）**: IPアドレスが正常。 | RN171モジュールのGPIO4に接続されています。 |
| RST | 赤色LED。WiFiモジュールのリセット状態を示します。 | **点灯**: リセットボタン（WIFI_RST）が押されています。 | RN171モジュールのリセットに接続されています。 |
| PWR | 緑色LED。WiFiモジュールの電源状態を示します。 | **点灯**: モジュール/シールドが電源供給されています。 | LD1117電圧レギュレータの3.3V出力に接続されています。 |

## WiFiライブラリ

シールドとのインターフェースを支援するためのライブラリを作成しました。このセクションでは、ライブラリのセットアップ方法を説明し、いくつかの関数を紹介します。

### セットアップ

1. [Wifi ShieldのGitHubページからライブラリコードをzipファイルとしてダウンロードします。](https://github.com/Seeed-Studio/WiFi_Shield)  
2. ダウンロードしたファイルを…/arduino/libraries/フォルダに解凍します。  
3. 解凍したフォルダの名前を「WifiShield」に変更します。  
4. Arduino IDEを起動（または開いている場合は再起動）します。

### 関数

ライブラリで最も重要/便利な関数を以下に示します。他の利用可能な関数については、.hファイルをご覧ください。

#### Join()

* **説明:**  
  * WiFiアクセスポイントに接続するために使用します。
* **構文:**  
  * join(const char *ssid, const char*phrase, int auth)
* **パラメータ:**  
  * **ssid:** 接続したいアクセスポイントの名前  
  * **phrase:** 接続したいアクセスポイントのパスワード/フレーズ  
  * **auth:** 接続したいアクセスポイントの認証タイプ。以下の定数のいずれかを指定できます：  
    * WIFLY_AUTH_OPEN  
    * WIFLY_AUTH_WEP  
    * WIFLY_AUTH_WPA1  
    * WIFLY_AUTH_WPA1_2  
    * WIFLY_AUTH_WPA2_PSK  
    * WIFLY_AUTH_ADHOC  
* **戻り値:**  
  * **boolean:** アクセスポイントへの接続が成功した場合はtrue、失敗した場合はfalseを返します。
* **例:**

```cpp
#include <SoftwareSerial.h>
#include "WiFly.h"

SoftwareSerial uart(2, 3); // WiFiシールドのTXおよびRXピンへのシリアル接続を作成します。
WiFly wifly(&uart); // 上記で作成したWiFiシールドへのシリアル接続を使用してWiFlyライブラリオブジェクトを作成します。

void setup()
{
uart.begin(9600); // シールドへのシリアル接続を開始します。
Serial.begin(9600); // Arduinoシリアルモニタウィンドウ接続を開始します。
wifly.reset(); // シールドをリセットします。
while(wifly.join("mySSID","mySSIDpassword",WIFLY_AUTH_WPA2_PSK) == false)
{
Serial.println("アクセスポイントへの接続に失敗しました。再試行します。");
}
Serial.println("アクセスポイントに接続しました！");
}

void loop()
{

}
```

#### Receive()

* **説明:**  
  * シールドからデータを読み取るために使用します。Arduinoのread()関数の代替として使用できます。
* **構文:**  
  * receive(uint8_t *buf, int len, int timeout)
* **パラメータ:**  
  * **buf:** シールドから読み取ったバイトを格納するバッファ配列  
  * **len:** バッファ配列の長さ/サイズ  
  * **timeout:** 読み取りを停止するタイムアウト値  
* **戻り値:**  
  * **int:** シールドから読み取ったバイト数を返します。
* **例:**

```cpp
char c;
while (wifly.receive((uint8_t *)&c, 1, 300) > 0) {
  Serial.print((char)c);
}
```

File->Examples->WiFi_Shield->wifly_testスケッチで完全な例を確認できます。

#### SendCommand()

* **説明:**  
  * 一部の関数（例: join(), reboot(), save()）は、RN171モジュールのユーザーマニュアルに記載されているテキストコマンドのラッパーとして機能します。sendCommand()関数を使用すると、既存のラッパー関数がニーズを満たさない場合に独自のラッパー関数を作成できます。
* **構文:**  
  * sendCommand(const char *cmd, const char*ack, int timeout)
* **パラメータ:**  
  * **cmd:** RN-171のユーザーマニュアルに記載されている任意のコマンド  
  * **ack:** コマンドから期待される戻り文字列  
  * **timeout:** 出力を不正なリクエスト/レスポンスと見なすまでの許容時間  
* **戻り値:**  
  * **boolean:** WiFiシールドがack文字列で応答した場合はtrue、それ以外の場合はfalseを返します。
* **例:**

```cpp
// join()関数は以下のようにjoinコマンドのラッパーです。
// RN171が成功時に返すとされる文字列「Associated」を使用します。
if(sendCommand("join\r", "Associated",DEFAULT_WAIT_RESPONSE_TIME*10))
{
// 接続成功
}else{
// 接続失敗
}
```

File->Examples->WiFi_Shield->wifly_testスケッチで完全な例を確認できます。

## WiFi シールドの例/アプリケーション

### 例 1: WiFi Shield にコマンドを送信し、Arduino シリアルモニターウィンドウで応答を受信する

WiFi Shield の RN-171 モジュールは、[データシート](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/WiFly-RN-UM.pdf)に記載されているコマンドを送信することで設定されます。スケッチを作成してコマンドを自動的に送信することもできますが、WiFi Shield と RN-171 の動作を正確に理解するために、この例を実行することをお勧めします。

以下の手順に従って進めてください。また、動画を視聴したい場合は以下をご覧ください。

[動画 - Seeeduino の WiFi Shield の使い方](https://www.youtube.com/watch?v=8dCrAaN16lE)

**ステップ 1: WiFi Shield のジャンパー設定**

WiFi Shield のジャンパーを設定し、デジタルピン 2 (D2) を WIFI_TX に、デジタルピン 3 (D3) を WIFI_RX に選択します。以下の写真に示されているように設定してください。これらのピンを使用して RN-171 との情報の送受信を行います。

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi_shield_v1.1_front.png)

**ステップ 2: ソフトウェア/コード**

以下のスケッチでは、RN-171/WiFi Shield からデータを送受信するための UART オブジェクトを作成しています。このオブジェクトを WiFly ライブラリと組み合わせて使用し、Shield にデータを送信します。Arduino の Serial オブジェクトを使用して Shield から受信したデータを表示し、WiFly/UART オブジェクトを介して Shield に送信するコマンドを受け取ります。

以下のコードを Arduino ボードにアップロードしてください：

```cpp
#include <Arduino.h>

#include <SoftwareSerial.h>
#include "WiFly.h"

// 新しいシリアルポートを設定
SoftwareSerial uart(2, 3); // WiFi Shield の TX と RX ピンにシリアル接続を作成
WiFly wifly(&uart); // 上記で作成した WiFi Shield へのシリアル接続を使用して WiFly ライブラリオブジェクトを作成

void setup()
{
  uart.begin(9600); // Shield へのシリアル接続を開始
  Serial.begin(9600); // Arduino シリアルモニターウィンドウ接続を開始
  delay(3000); // シリアル/uart オブジェクトが開始するまで 3 秒待機
}

void loop()
{
  while (wifly.available())  // Shield からデータが利用可能な場合
  {
    Serial.write(wifly.read()); // シリアルモニターウィンドウにデータを表示
  }

  while (Serial.available()) // コマンドを入力した場合
  {
    wifly.write(Serial.read()); // WiFi Shield にコマンドを送信
  }
}
```

**ステップ 3: コマンドモードへの移行**

WiFi Shield の WiFly RN-171 モジュールは、データモードとコマンドモードの 2 つのモードで動作します。データモードでは、Shield は接続を受信および開始できます。コマンドモードでは、データシートに記載されているコマンドを使用してモジュールを設定できます。

**コマンドモードに移行するには、以下の手順を実行してください：**

1. Arduino シリアルモニターを開きます。
2. シリアルモニターを「No line ending」に設定し、ボーレートを 9600 に設定します。
3. Arduino シリアルモニターに「$$」を入力して Enter を押します。
4. モジュールは「CMD」という文字を返し、コマンドモードに移行したことを示します。

**いくつかのコマンドをテストしてみましょう。以下を実行してください：**

1. Arduino シリアルモニターウィンドウで「Carriage return」を選択し、ボーレートを 9600 に設定します。
2. 次に、以下の表に記載されているコマンドを Arduino シリアルモニターに入力して Enter を押します。
3. モジュールは各コマンドに対して表に記載された応答を出力します。

| コマンド | 説明 |
|---|---|
| scan | このコマンドは、13 チャンネルすべてのアクセスポイントのアクティブプローブスキャンを実行します。このコマンドを使用すると、モジュールは見つかったアクセスポイントの MAC アドレス、信号強度、SSID 名、およびセキュリティモードを返します。 |
| get ip | このコマンドは、IP アドレスとポート番号の設定を表示します。 |

設定コマンドの完全なリストについては、RN-171 [リファレンスガイド](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/WiFly-RN-UM.pdf)の 11 ページ以降を参照してください。

### 例 2: アクセスポイント/インターネットルーターに接続する

この例では、WiFi Shield をアクセスポイント（インターネットルーター）に接続する方法を、コマンドを入力する場合と入力しない場合の両方で説明します。

#### コマンドを入力して接続する

このセクションでは、RN-171 データシートのコマンドを使用して WiFi Shield をアクセスポイントに接続する方法を説明します。このセクションを通じて、WiFi Arduino ライブラリを使用する際にバックグラウンドで何が起こっているのかを正確に理解できるようになります。

以下を実行してください：

1. 例 1 のコードを Arduino ボードにアップロードします。

2. **コマンドモードに移行：**
   1. シリアルモニターを「No line ending」に設定し、ボーレートを 9600 に設定します。
   2. Arduino シリアルモニターに「$$」を入力して Enter を押します。

3. シリアルモニターを「Carriage return」に設定します。

4. **利用可能なアクセスポイントをスキャン：**
   1. 「scan」と入力して Enter を押します。Arduino シリアルモニターウィンドウは、WiFi Shield が見つけた各アクセスポイントのカンマ区切りの値のリストを出力します。左から右に 3 番目の値がセキュリティモード、最後の値が SSID です。この例では、セキュリティモードが 4、SSID 名が MySSID であることを示しています：01,01,-88,**04**,1104,1c,00,45:56:78:be:93:1f,**MySSID**

5. 見つかったアクセスポイントのリストから、インターネットルーターに対応するものを見つけ、セキュリティモードと SSID をメモします。これら 2 つの値は接続に必要です。

6. **Shield のセキュリティモードを設定：**
   1. 「set wlan auth m」と入力します。*m* を接続したいアクセスポイントのセキュリティモード番号（この例では 4）に置き換えます。
   2. WiFi Shield がサポートするセキュリティモードは以下の図 1 に記載されています。

7. **アクセスポイントのフレーズを設定：**
   1. 「set wlan phrase myPhrase」と入力します。*myPhrase* をアクセスポイントのパスワード/セキュリティキーに置き換えます。**注意：**アクセスポイントのセキュリティタイプが WEP の場合は、上記のコマンドで *phrase* の代わりに *key* を使用してください。
   2. アクセスポイント（インターネットルーター）のフレーズは、PC から接続する際に使用するパスワードです。Windows では以下のアニメーション画像のように確認できます：

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/How_to_find_network_security_key_password.gif)

8.**アクセスポイントに接続する**

  1.アクセスポイントのセキュリティタイプとフレーズを設定したので、接続することができます。

  2.*join MySSID* と入力します。MySSID をアクセスポイントのブロードキャスト名に置き換えてください。

  3.成功すると、Arduino のシリアルモニターウィンドウに「Associated!」と表示されます。

上記の手順で入力したコマンドの説明は以下の表に記載されています。各コマンドの詳細な説明は RN171 のユーザーマニュアルに記載されています。

| 番号 | コマンド | 説明 |
|---|---|---|
| 1 | scan | このコマンドは、全13チャンネルのアクセスポイントのアクティブプローブスキャンを実行します。このコマンドを使用すると、モジュールは見つかったアクセスポイントの MAC アドレス、信号強度、SSID 名、およびセキュリティモードを返します。 |
| 2 | set wlan auth 4 | アクセスポイントのセキュリティプロトコルに対応する値を見つけます。そして、WiFly に使用するセキュリティプロトコルを指定します。これは、アクセスポイントのセキュリティプロトコルに対応する **図1** に示された番号です。ここでは「4」を選択します。 |
| 3 | set wlan phrase seeed-mkt | WiFi シールドにパスフレーズを指定します。 |
| 4 | join SEEED-MKT | WiFi シールドに「SEEED-MKT」という名前のアクセスポイントに接続するよう指示します。このコマンドを送信すると、モジュールは接続を試み、接続情報を出力します。（接続に失敗した場合は、成功するまでコマンドを再送信してください） |

図1

| 値 | 認証モード |
|---|---|
| 0 | Open (デフォルト) |
| 1 | WEP-128 |
| 2 | WPA1 |
| 3 | Mixed WPA1 and WPA2-PSK |
| 4 | WPA2-PSK |
| 5 | 使用されていない |
| 6 | AD hoc モード (任意のアドホックネットワークに接続) |
| 8 | WPE-64 |

#### WiFi ライブラリを使用した接続

各コマンドを入力してアクセスポイントに接続する方法を学んだので、次は提供されているライブラリと例を使用します。

アクセスポイントに接続するために必要なコードを見るには、「File -> Examples -> Wifi_Shield -> wifi_test」に移動します。コードを変更して自分の SSID（アクセスポイント名）と KEY（アクセスポイントのパスワード）を使用し、スケッチを Arduino IDE にアップロードしてください。

```cpp
#define SSID      " SEEED-MKT "
  #define KEY       " seeed-mkt "
```

スケッチを Arduino ボードにアップロードしたら、シリアルモニターウィンドウを開きます。シールドがアクセスポイントへの接続に成功した場合、「OK」メッセージと「get everything」コマンドの結果として接続情報が表示されます。シールドがアクセスポイントへの接続に失敗した場合、「Failed」メッセージが表示されます。

#### 電源投入時に自動接続するようにシールドを設定する

シールドを電源投入時に自動接続するように設定できます。この設定は一度だけ行えば十分です：

1.「set wlan ssid mySSID」コマンドを送信し、mySSID を自分の SSID に置き換えます。

2.「set wlan join 1」コマンドを送信します。

3.「save」コマンドを送信します。

これで、シールドは電源投入時にアクセスポイントに自動的に接続します。

各コマンドが何をするかの説明は RN-171 データシートおよび以下の表に記載されています。

| 番号 | コマンド | 説明 |
|---|---|-----|
| 1 | set wlan  | 「ssid」は自動的に接続したいアクセスポイントの名前です |
| 2 | set wlan join 1 | モジュールにメモリに保存された SSID に自動的に接続するよう指示します。 |
| 3 | save | これらの設定を WiFi の設定ファイルに保存します。 |

#### 静的 IP アドレスを設定する

シールドがアクセスポイントに接続した後、静的 IP アドレスを取得するには、以下のコマンドを送信します：

| 番号 | コマンド | 説明 |
|---|---|---|
| 1 | set ip dhcp 0 | DHCP をオフにします。 |
| 2 | set ip address  | 使用したい IP アドレスを設定します。 |

### 例3: ネットワークとの通信 (概要)

この例では、PC や電話などのデバイスが WiFi シールドと通信する方法を示します。

**手順を実行してください：**

1.例2のセクション *Connecting By Typing Commands* のステップ1-7でモジュールを設定します。

2.「set ip local 80」コマンドを送信してリスニング IP ポートを「80」に設定します。

3.例2のセクション *Connecting By Typing Commands* のステップ8で示されているように、シールドをアクセスポイントに接続します。

4.「save」コマンドを送信してこれらの設定を保存します。

5.「get ip」コマンドを使用してシールドの IP アドレスを取得します。応答の「IP=」の右側に IP アドレスとポートが表示されます（例：IP=192.168.0.10:80）。

6.ウェブブラウザを開き、シールドの IP アドレスをブラウザの URL バーに入力して Enter を押します。

7.Arduino のシリアルモニターウィンドウに以下のような HTTP 応答が表示されます。これはブラウザがシールドにデータを要求するために送信した情報です。

```cpp
*OPEN*GET / HTTP/1.1
Host: 192.168.0.10
Connection: keep-alive
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36
Accept-Encoding: gzip, deflate, sdch
Accept-Language: en-US,en;q=0.8
```

ブラウザは現在データを待機しています。WiFi モジュールはセンサー値を送信したり、ウェブページを提供したり、その他のデータをブラウザに直接返すことができます。この場合、ブラウザはウェブページを待機しています。WiFi モジュールが HTML 形式のページを応答として送信すると、ブラウザはそれを表示します。次の例では、この楽しい操作をすべて学びます。

### 例4: WiFi シールドをウェブサーバーとして使用する (シールドからウェブページを提供する)

例3で見たように、インターネット/ウェブブラウザは WiFi シールドに接続することができます。接続が確立されると（ブラウザが HTTP リクエストを送信したとき）、WiFi シールドはブラウザに HTML コードを返してウェブページとして表示することができます。この例では、シールドがウェブブラウザに応答するために必要なことを学びます。

**ステップ1: Arduino コード**

以下のコードを Arduino ボードにアップロードし、「myssid」と「mypassword」をそれぞれアクセスポイントの値に置き換えてください：

```cpp
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "myssid"
#define KEY       "mypassword"
// アクセスポイントのセキュリティモードを確認してください。私の場合は WPA20-PSK でした。
// もし異なる場合は、AUTH 定数を変更する必要があります。利用可能なセキュリティコードについては WiFly.h ファイルを参照してください。
#define AUTH      WIFLY_AUTH_WPA2_PSK

int flag = 0;

// ピンの接続
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX

SoftwareSerial wiflyUart(2, 3); // WiFi シールドのシリアルオブジェクトを作成
WiFly wifly(&wiflyUart); // WiFi シールドのシリアルオブジェクトを WiFly クラスに渡す

void setup()
{
  wiflyUart.begin(9600); // WiFi シールドの UART ポートを開始

  Serial.begin(9600); // Arduino のシリアルポートを開始
  Serial.println("--------- WIFLY Webserver --------");

  // WiFly の初期化を待機
  delay(1000);

  wifly.reset(); // シールドをリセット
  delay(1000);
  // WiFly のパラメータを設定

  wifly.sendCommand("set ip local 80\r"); // ローカル通信ポートを 80 に設定
  delay(100);

  wifly.sendCommand("set comm remote 0\r"); // 接続が開かれたときにデフォルトの文字列を送信しない
  delay(100);

  wifly.sendCommand("set comm open *OPEN*\r"); // 接続が開かれたときに WiFi シールドが出力する文字列を設定
  delay(100);

  Serial.println("Join " SSID );
  if (wifly.join(SSID, KEY, AUTH)) {
    Serial.println("OK");
  } else {
    Serial.println("Failed");
  }

  wifly.sendCommand("get ip\r");
  char c;

  while (wifly.receive((uint8_t *)&c, 1, 300) > 0) { // get ip コマンドの応答を出力
    Serial.print((char)c);
  }

  Serial.println("Web server ready");

}

void loop()
{

  if(wifly.available())
  { // WiFi シールドにデータがある場合

    if(wiflyUart.find("*OPEN*")) // *OPEN* 文字列を探して、データが開かれた接続からのものであるか確認
    {
      Serial.println("New Browser Request!");
      delay(1000); // ブラウザが HTTP リクエスト文字列の送信を完了するのに十分な時間を遅延

      // HTTP ヘッダーを送信
      wiflyUart.println("HTTP/1.1 200 OK");
      wiflyUart.println("Content-Type: text/html; charset=UTF-8");
      wiflyUart.println("Content-Length: 244"); // HTML コードの長さ
      wiflyUart.println("Connection: close");
      wiflyUart.println();

      // ウェブページの HTML コードを送信
      wiflyUart.print("<html>");
      wiflyUart.print("<head>");
      wiflyUart.print("<title>My WiFI Shield Webpage</title>");
      wiflyUart.print("</head>");
      wiflyUart.print("<body>");
      wiflyUart.print("<h1>Hello World!</h1>");
      wiflyUart.print("<h3>This website is served from my WiFi module</h3>");
      wiflyUart.print("<a href=\"http://yahoo.com\">Yahoo!</a> <a href=\"http://google.com\">Google</a>");
      wiflyUart.print("<br/><button>My Button</button>");
      wiflyUart.print("</body>");
      wiflyUart.print("</html>");

    }
  }

}
```

**ステップ 2: シールドの IP アドレスを取得する**

シリアルモニターウィンドウを開き、「Web server ready」というメッセージが表示されるのを待ちます。シリアルモニターには、WiFi シールドの IP アドレスも表示されます。

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi-shield-led-control-serial-comm-window.png)

**ステップ 3: ウェブページにアクセスする**

次に、その IP アドレスをウェブブラウザで開きます。以下のようなウェブページが表示されます。このページには Yahoo! と Google へのリンク、および（まだ機能していない）ボタンが含まれています。

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi-shield-simple-webserver-page.png)

ウェブページにアクセスすると、シリアルモニターウィンドウにも「New Browser Request!」という文字列が表示されます。

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi-shield-simple-webserver-arduino-serial-window-response.png)

**注意:** Google Chrome のような一部のブラウザでは、URL を入力するだけでウェブページリクエストが送信される場合があります。これは、ユーザーがページを訪問する前にブラウザがウェブページのタイトルを取得しようとするためです。

### 例 5: ウェブページから Arduino のデジタルピンを制御する（ウェブページから LED をトグルする）

この例では、3 つのボタンを持つウェブページを作成し、Arduino の 3 つの異なるデジタルピンを制御します。

以下の手順に従ってください。また、コードの詳細を説明するビデオも作成しています。

**ステップ 1: ハードウェア**

3 つの LED と抵抗をデジタルピン 11、12、13 に接続します。以下の回路図を参照してください。

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi-shield-led-control-webpage.png)

**ステップ 2: Arduino スケッチ**

以下のコードを Arduino ボードにアップロードします。ただし、「mySSID」と「myPassword」をアクセスポイントの SSID 名とパスワードに置き換えてください。

```cpp
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "mySSID"
#define KEY       "myPassword"
// アクセスポイントのセキュリティモードを確認してください。私の場合は WPA20-PSK でした。
// 異なる場合は、AUTH 定数を変更する必要があります。利用可能なセキュリティコードについては WiFly.h ファイルを参照してください。
#define AUTH      WIFLY_AUTH_WPA2_PSK

int flag = 0;

// ピンの接続
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX

SoftwareSerial wiflyUart(2, 3); // WiFi シールドのシリアルオブジェクトを作成
WiFly wifly(&wiflyUart); // WiFi シールドのシリアルオブジェクトを WiFly クラスに渡す
char ip[16];

void setup()
{
  pinMode(11,OUTPUT);
  digitalWrite(11,LOW);

  pinMode(12,OUTPUT);
  digitalWrite(12,LOW);

  pinMode(13,OUTPUT);
  digitalWrite(13,LOW);

  wiflyUart.begin(9600); // WiFi シールドの UART ポートを開始

  Serial.begin(9600); // Arduino のシリアルポートを開始
  Serial.println("--------- WIFLY Webserver --------");

  // WiFly の初期化を待つ
  delay(1000);

  wifly.reset(); // シールドをリセット
  delay(1000);
  // WiFly パラメータを設定

  wifly.sendCommand("set ip local 80\r"); // ローカル通信ポートを 80 に設定
  delay(100);

  wifly.sendCommand("set comm remote 0\r"); // 接続が開かれたときにデフォルト文字列を送信しない
  delay(100);

  wifly.sendCommand("set comm open *OPEN*\r"); // 接続が開かれたときに WiFi シールドが出力する文字列を設定
  delay(100);

  Serial.println("Join " SSID );
  if (wifly.join(SSID, KEY, AUTH)) {
    Serial.println("OK");
  } else {
    Serial.println("Failed");
  }

  wifly.sendCommand("get ip\r");

  wiflyUart.setTimeout(500);
  if(!wiflyUart.find("IP="))
  {
    Serial.println("can not get ip");
    while(1);;
  }else
  {
    Serial.print("IP:");
  }

  char c;
  int index = 0;
  while (wifly.receive((uint8_t *)&c, 1, 300) > 0) { // get ip コマンドの応答を出力
    if(c == ':')
    {
      ip[index] = 0;
      break;
    }
    ip[index++] = c;
    Serial.print((char)c);

  }
  Serial.println();
  while (wifly.receive((uint8_t *)&c, 1, 300) > 0);;

  Serial.println("Web server ready");

}

void loop()
{

  if(wifly.available())
  { // WiFi シールドにデータがある場合

    if(wiflyUart.find("*OPEN*")) // *OPEN* 文字列を探して、データが開かれた接続からのものであるか確認
    {
      Serial.println("New Browser Request!");
      delay(1000); // ブラウザが HTTP リクエスト文字列の送信を完了するのに十分な時間を遅延

      if(wiflyUart.find("pin=")) // HTTP リクエストに "pin=" 文字列があるか確認。あれば LED を制御する
      {
        Serial.println("LED Control");

        // ユーザーが LED をトグルしたい場合
        int pinNumber = (wiflyUart.read()-48); // 最初の数字を取得。例: ピン 13 の場合、最初の数字は 1
        int secondNumber = (wiflyUart.read()-48);
        if(secondNumber>=0 && secondNumber<=9)
        {
          pinNumber*=10;
          pinNumber +=secondNumber; // 2 番目の数字を取得。例: ピン番号が 13 の場合、2 番目の数字は 3。それを最初の数字に加算
        }

        digitalWrite(pinNumber, !digitalRead(pinNumber)); // ピンをトグル

        // ピン状態文字列を構築。Arduino はこの文字列をブラウザに返信
        String pinState = "Pin ";
        pinState+=pinNumber;
        pinState+=" is ";
        if(digitalRead(pinNumber)) // ピンが ON か OFF か確認
        {
          pinState+="ON"; // ピンが ON
        }
        else
        {
         pinState+="OFF";  // ピンが OFF
        }
        // HTTP ヘッダー Content-Length 文字列を構築
        String contentLength="Content-Length: ";
        contentLength+=pinState.length(); // 長さの値は Arduino がブラウザに返信する文字列の長さ

        // HTTP ヘッダーを送信
        wiflyUart.println("HTTP/1.1 200 OK");
        wiflyUart.println("Content-Type: text/html; charset=UTF-8");
        wiflyUart.println(contentLength); // HTML コードの長さ
        wiflyUart.println("Connection: close");
        wiflyUart.println();
        // 応答を送信
        wiflyUart.print(pinState);
      }
      else
      {
        // HTTP ヘッダーを送信
        wiflyUart.println("HTTP/1.1 200 OK");
        wiflyUart.println("Content-Type: text/html; charset=UTF-8");
        wiflyUart.println("Content-Length: 540"); // HTML コードの長さ
        wiflyUart.println("Connection: close");
        wiflyUart.println();

        // ウェブページの HTML コードを送信
        wiflyUart.print("<html>");
        wiflyUart.print("<head>");
        wiflyUart.print("<title>WiFi Shield Webpage</title>");
        wiflyUart.print("</head>");
        wiflyUart.print("<body>");
        wiflyUart.print("<h1>LED Toggle Webpage</h1>");
     // <button> タグ内の ID 属性は、"pin" GET パラメータを介して Arduino に送信される値
        wiflyUart.print("<button id=\"11\" class=\"led\">Toggle Pin 11</button> "); // ピン 11 用ボタン
        wiflyUart.print("<button id=\"12\" class=\"led\">Toggle Pin 12</button> "); // ピン 12 用ボタン
        wiflyUart.print("<button id=\"13\" class=\"led\">Toggle Pin 13</button> "); // ピン 13 用ボタン
        wiflyUart.print("<script src=\"http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js\"></script>");
        wiflyUart.print("<script type=\"text/javascript\">");
        wiflyUart.print("$(document).ready(function(){");
        wiflyUart.print("$(\".led\").click(function(){");
        wiflyUart.print("var p = $(this).attr('id');"); // id 値を取得（例: pin13, pin12, または pin11）
        // HTTP GET リクエストを IP アドレスに送信し、"pin" パラメータと値 "p" を指定して関数を実行
   // 重要: IP アドレスとポートをシールドの IP アドレスとポートに置き換えることを忘れないでください
        wiflyUart.print("$.get(\"http://");
        wiflyUart.print(ip);
        wiflyUart.print(":80/a\", {pin:p},function(data){alert(data)});");// GET リクエストを実行。戻り値を受け取ったら "function" を実行（ブラウザに "data" をアラート表示）。
        wiflyUart.print("});");
        wiflyUart.print("});");
        wiflyUart.print("</script>");
        wiflyUart.print("</body>");
        wiflyUart.print("</html>");
      }
      Serial.println("Data sent to browser");
    }
  }

}
```

**ステップ 3: シリアルモニタウィンドウ**

シリアルモニタウィンドウを開き、「Web server ready」というメッセージが表示されるのを待ちます。シリアルモニタにはWiFiシールドのIPアドレスも表示されます。

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi-shield-led-control-serial-comm-window.png)

**ステップ 4: ウェブページを訪問**

ウェブブラウザでIPアドレスを入力します。以下のような3つのボタンがあるウェブページが表示されるはずです。ボタンをクリックしてLEDを制御します。

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi-shield-led-control-webpage.png)

Arduinoはウェブブラウザにピンの状態を返答し、ブラウザはこれをアラートウィンドウに表示します。

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi-shield-led-control-arduino-response.png)

また、シリアルモニタウィンドウには、ブラウザがウェブページを訪問したりLEDピンを制御するリクエストを送信した際の情報が表示されます。

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi-shield-led-control-serial-comm-response.png)

### 例 6: WiFiシールドとAndroidアプリ

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Androidapp-ethernet-shield-led-toggle.png)

**Androidアプリケーション**

WiFiシールドを介してArduinoのデジタルピンをトグルできるAndroidアプリを作成しました。このアプリの動作やコードについては、以下のリンクのビデオをご覧ください。

**ソフトウェア**

Android Studioプロジェクト/ソースコードを以下のリンクからダウンロードしてください：

[File:WiFiShieldLEDControl.zip](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/WiFiShieldLEDControl.zip)

### 例 7: 外部サーバーへのデータ送信とデータ取得

WiFiシールドのRN-171モジュールはHTMLクライアント（基本的にはテキストベースのウェブブラウザ）として動作する能力を持っています。これにより、シールドを使用してウェブサーバーにデータを送信したり受信したりすることができます。この例では、任意の都市の天気データ（例：温度、湿度など）を表示するウェブアプリケーションプログラミングインターフェース（API）を使用して、シールドを操作する方法を学びます。

使用するAPIの名前は[OpenWeatherMap](http://openweathermap.org/api)です。このウェブサイトに都市名と国名を送信すると、天気情報を含むJSON文字列が返されます。例えば、ロンドン（イギリス）の天気を表示したい場合、以下のURLにアクセスします：[http://api.openweathermap.org/data/2.5/weather?q=London,uk](http://api.openweathermap.org/data/2.5/weather?q=London,uk)。すると、以下のようなJSON文字列が返され、天気データやその他の情報が埋め込まれています。

```cpp
{
"coord":{"lon":-0.13,"lat":51.51},
"sys":{"type":3,"id":60992,"message":0.0079,"country":"GB","sunrise":1421395087,"sunset":1421425352},
"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],
"base":"cmc stations",
"main":{
  "temp":277.25,"humidity":79,"pressure":998.4,
  "temp_min":277.25,"temp_max":277.25
},
"wind":{
"speed":2,"gust":5,"deg":180},
"rain":{"3h":0},"clouds":{"all":32},
"dt":1421372140,"id":2643743,"name":"London","cod":200
}
```

**ステップ 1: URL**

サンフランシスコ（アメリカ）の天気JSON文字列を取得してみましょう。WiFiシールドがアクセスする必要があるURLは以下の通りです（ウェブブラウザでテストできます）：

`http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco`,US

**ステップ 2: Arduinoコード**

[WiFlyマニュアル](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/WiFly-RN-UM.pdf)のセクション13では、ウェブサーバーに接続するさまざまな方法を説明していますが、いずれの場合もサーバーの名前（またはドメイン名がない場合はIPアドレス）と送信したいデータを指定する必要があります。

OpenWeatherMapサーバーからJSON文字列を受信するためにWiFiシールドに送信する必要があるコマンドは以下の通りです：

```cpp
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "mySSID"
#define KEY       "myPassword"
// アクセスポイントのセキュリティモードを確認してください。私の場合はWPA20-PSKでした。
// 異なる場合は、AUTH定数を変更する必要があります。利用可能なセキュリティコードについてはWiFly.hファイルを参照してください。
#define AUTH      WIFLY_AUTH_WPA2_PSK

// ピンの接続
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX

SoftwareSerial wiflyUart(2, 3); // WiFiシールドシリアルオブジェクトを作成
WiFly wifly(&wiflyUart); // WiFiシールドシリアルオブジェクトをWiFlyクラスに渡す

void setup()
{
  wiflyUart.begin(9600); // WiFiシールドUARTポートを開始

  Serial.begin(9600); // Arduinoシリアルポートを開始
  Serial.println("--------- OpenWeatherMap API --------");

  // WiFlyの初期化を待つ
  delay(3000);

  wifly.reset(); // シールドをリセット

  Serial.println("Join " SSID );
  if (wifly.join(SSID, KEY, AUTH)) {
    Serial.println("OK");
  } else {
    Serial.println("Failed");
  }

  wifly.sendCommand("set ip proto 18\r"); // HTMLクライアントを有効化
  delay(100);

  wifly.sendCommand("set dns name api.openweathermap.org\r"); // 接続したいウェブサーバーの名前
  delay(100);

  wifly.sendCommand("set ip address 0\r"); // WiFlyがDNSを使用するように設定
  delay(100);

  wifly.sendCommand("set ip remote 80\r"); // 標準ウェブサーバーポート
  delay(100);

  wifly.sendCommand("set com remote 0\r"); // REMOTE文字列をオフにしてPOSTに干渉しないようにする
  delay(100);  

  wifly.sendCommand("open\r"); // 接続を開く
  delay(100);  

  wiflyUart.print("GET /data/2.5/weather?q=San%20Francisco,US \n\n");
  delay(1000);
}

void loop()
{
 // インターネットからデータを受信したら、UARTポートを通じてデータを出力
 while (wifly.available())
   {
   Serial.write(wifly.read());
   }
}
```

**ステップ 3: 結果**

シリアルモニタウィンドウを開くと、ブラウザで見たのと同じJSON文字列が表示されるはずです。

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Open-weather-api-json-string.png)

### 例 8: ターミナルとのTCP通信

この例では、WiFiシールドからPCのターミナルプログラムに情報を送信する方法を示します。メニュー付きのシンプルなArduinoコンソールを作成し、Arduinoのデジタルピンの状態を確認したり、トグルしたりするオプションを提供します。

**ステップ 1: TCP ターミナルをダウンロードする**

[RealTerm をダウンロードしてインストール](http://sourceforge.net/projects/realterm/files/Realterm/2.0.0.70/Realterm_2.0.0.70_setup.exe/download)してください。このユーティリティターミナルを使用して、WiFi シールドに接続します。

**ステップ 2: Arduino コード**

以下のコードを Arduino ボードにアップロードしてください。"mySSID"、"myPassword"、および認証コードを自身のアクセスポイント情報に置き換えてください。

```cpp
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "mySSID"
#define KEY       "myPassword"
// アクセスポイントのセキュリティモードを確認してください。私の場合は WPA20-PSK でした。
// 異なる場合は、WiFly.h ファイルで利用可能なセキュリティコードを確認し、AUTH 定数を変更してください。
#define AUTH      WIFLY_AUTH_WPA2_PSK

#define FLAG_MAIN_MENU 1
#define FLAG_SUB_MENU_2 2

int flag = FLAG_MAIN_MENU;

// ピンの接続
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX

SoftwareSerial wiflyUart(2, 3); // WiFi シールドのシリアルオブジェクトを作成
WiFly wifly(&wiflyUart); // WiFi シールドのシリアルオブジェクトを WiFly クラスに渡す

void setup()
{
  // 制御可能なピンを定義
  pinMode(11,OUTPUT);
  digitalWrite(11,LOW);

  pinMode(12,OUTPUT);
  digitalWrite(12,LOW);

  pinMode(13,OUTPUT);
  digitalWrite(13,LOW);

  pinMode(7,OUTPUT);
  digitalWrite(7,LOW);

  wiflyUart.begin(9600); // WiFi シールドの UART ポートを開始

  Serial.begin(9600); // Arduino のシリアルポートを開始
  Serial.println("--------- TCP 通信 --------");

  // WiFly の初期化を待機
  delay(1000);

  wifly.reset(); // シールドをリセット
  delay(1000);

  wifly.sendCommand("set ip local 80\r"); // ローカル通信ポートを 80 に設定
  delay(100);

  wifly.sendCommand("set comm remote 0\r"); // 接続が開かれたときにデフォルト文字列を送信しない
  delay(100);

  wifly.sendCommand("set comm open *\r"); // 接続が開かれたときに WiFi シールドが出力する文字列または文字を設定 "*"
  delay(100);

  wifly.sendCommand("set ip protocol 2\r"); // TCP プロトコルを設定
  delay(100);

  Serial.println("Join " SSID );
  if (wifly.join(SSID, KEY, AUTH)) {
    Serial.println("OK");
  } else {
    Serial.println("Failed");
  }

  wifly.sendCommand("get ip\r");
  char c;

  while (wifly.receive((uint8_t *)&c, 1, 300) > 0) { // get ip コマンドの応答を出力
    Serial.print((char)c);
  }

  Serial.println("TCP 準備完了");
}

void loop()
{
  if(wifly.available())
  {
    delay(1000); // すべての文字が WiFi シールドに送信されるのを待機
    char val = wiflyUart.read(); // 最初の文字を読み取る

    if(flag == FLAG_MAIN_MENU)
    {
          switch(val)
          {
            case '*': // 新しい接続文字列を検索
              printMainMenu();
            break;
            case '1': // ユーザーが 1 を入力した場合、ピン状態を表示
             printPinStates();
             printMainMenu();
            break;
            case '2': // ユーザーが 2 を入力した場合、サブメニューを表示（特定のピンを選択するオプション）
             printSubMenu2();
            flag = FLAG_SUB_MENU_2; // サブメニューに入るフラグ
            break;
            default:
            wiflyUart.print("INVALID SUBMENU\r\n");
            break;
          }
    }
    else if(flag == FLAG_SUB_MENU_2)
    {
        int pinNumber = val-48; // 最初の数字を取得、例: ピン 13 の場合、最初の数字は 1
        int secondNumber = (wiflyUart.read()-48);
        if(secondNumber>=0 && secondNumber<=9)
        {
          pinNumber*=10;
          pinNumber +=secondNumber; // 2 番目の数字を取得、例: ピン番号が 13 の場合、2 番目の数字は 3、それを最初の数字に加算
        }

        // "ピン x をトグルしますか？ OK..." という文字列を作成
        String response = "\r\nYou want to toggle pin ";
        response+=pinNumber;
        response+="? OK...\r\n";

        wiflyUart.print(response);

        digitalWrite(pinNumber, !digitalRead(pinNumber)); // ピンをトグル

        wiflyUart.print("Pin Toggled!\r\n"); // ピンがトグルされたことをユーザーに通知
        printMainMenu();
        flag = FLAG_MAIN_MENU;
    }
  }
}

/**
* メインメニューオプションを出力
*/
void printMainMenu()
{
  wiflyUart.print("\r\n\r\n");
  wiflyUart.print("Arduino コンソールメニュー: \r\n");
  wiflyUart.print("1. デジタルピンの状態を表示\r\n");
  wiflyUart.print("2. デジタルピンの状態をトグル\r\n");
  wiflyUart.print("\r\n\r\n");
}

// ピン状態を表示
void printPinStates()
{
    String pinState = "ピン 7 は ";
    pinState+=getPinState(7);
    pinState+="\r\n";

    pinState += "ピン 11 は ";
    pinState+=getPinState(11);
    pinState+="\r\n";

    pinState += "ピン 12 は ";
    pinState+=getPinState(12);
    pinState+="\r\n";

    pinState += "ピン 13 は ";
    pinState+=getPinState(13);
    pinState+="\r\n";

    wiflyUart.print(pinState);
}

// ピン番号を入力するオプションを出力
void printSubMenu2()
{
  wiflyUart.print("\r\nトグルしたいピン番号を入力してください: ");
}

// ピン状態を文字列として取得
String getPinState(int pinNumber)
{
  if(digitalRead(pinNumber)) // ピンが ON か OFF かを確認
  {
    return "ON"; // ピンが ON
  }
  else
  {
    return "OFF";  // ピンが OFF
  }
}
```

**ステップ 3: シールドの IP アドレスとポートを取得**

Arduino のシリアルモニターウィンドウを開き、WiFi シールドの IP アドレスとポート番号を取得します。以下の画像にハイライトされています。

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Tcp-arduino-serial-comm.png)

上記の画像では、IP アドレスとポートは以下の通りです：

192.168.0.10:80

**ステップ 4: TCP ターミナルを設定してシールドに接続**

RealTerm を開き、「Display」タブで「Rows」に「30」を入力し、「Scrollback」オプションを選択します。

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Realterm-display-tab.png)

RealTerm プログラムの「Port」タブで、シールドの IP アドレスとポート（例: 192.168.0.10:80）を入力し、「Open」ボタンをクリックします。Arduino にハードコードされたメインメニューがターミナルに表示されるはずです。

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Realterm-port-tab.png)

「Send」タブでメニューから「1」または「2」のいずれかのオプションを選択し、テキストボックスに入力して「Send ASCII」を押して値を送信します。

例えば、ピン13を切り替えるには「2」を入力して「Send ASCII」を押します。その後、「Enter the pin number you wish you toggle」と表示されたら「13」を入力して「Send ASCII」をクリックします。Arduinoは「Pin Toggled!」と返信し、メインメニューに戻ります。次に「1」を入力して「Send ASCII」を押すと、現在のピンの状態を確認できます。

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Realterm-send-tab.png)

### 例 9: WiFiシールドとリレーシールド

WiFiシールドを介して情報を送受信する方法を理解した今、ウェブを通じてどのようなデバイスでも簡単に制御できることが分かるでしょう。

デスクランプ、モーター、水ポンプなどの高電力デバイスをウェブページや電話アプリケーションを介して制御したい場合は、[Relay Shield V2.0](https://seeeddoc.github.io/Relay_Shield_V2.0/)をお勧めします。

Relay Shield V2.0はピン4、5、6、7を使用するため、このページの例のコードと完全に互換性があります。

### 例 10: Adhocモード

シールドをAdhocモード（アクセスポイントとして）で使用するには、シールドのIO9ピンをArduinoの3.3Vピンに接続し、シールドがオンの場合はリセットしてください。

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi-shield-adhoc-mode-hardware-connection.png)

シールドのSSIDを取得するには、例1のコードをArduinoにアップロードしてシリアルモニターを開きます。シールドは以下の例のようにSSIDを返信します。この場合、**WiFly-EZX-1b**がSSIDです。

```cpp
AP mode as WiFly-EZX-1b on chan 1
```

これでWiFiシールドにアクセスポイントとして接続できるはずです。例えば、PCのWiFiネットワーク一覧にSSIDが表示されるはずです。

Adhocモードについてさらに詳しく知りたい場合は、[WiFly RN User Manual](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/WiFly-RN-UM.pdf)のセクション16「Adhoc Networking Mode」を参照してください。

## 関連資料

* [Seeeduinoとは](https://seeeddoc.github.io/Seeeduino_v3.0/)

* [w3schools](http://www.w3schools.com/) (HTML、Javascript、JQueryを学ぶのに最適なウェブサイト)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/Wifi_shield_v1.2_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* **[Eagle]**  [WiFi Shield v1.2 Eagle Files](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/Wifi_shield_v1.2_eagle.zip)
* **[PDF]** [Wifi Shield v1.2 pdf](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/Wifi%20Shield%20v1.2.pdf)
* **[EAGLE]** [Wifi Shield v1.2 sch](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/Wifi%20Shield%20v1.2.sch)
* **[PDF]**  [Wifi Shield v1.2 schematic PDF](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/Wifi_Shield_V1.2_schematic.pdf)
* **[Datasheet]**  [RN-171 Datasheet](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/WiFly-RN-171.pdf)
* **[Library]**  [Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield)
* **[Manual]**  [WiFi Module User Manual](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/WiFly-RN-UM.pdf) - このシールド内のRN-171モジュールのすべてのコマンドが記載されています。

## サポート

* [Wifi Shield に関する FAQ](http://support.seeedstudio.com/knowledgebase/articles/456737-wifi-shield)： *こちらをクリックして、あなたの質問が解決されているか確認してください。*

## ライセンス

このドキュメントは Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) の下でライセンスされています。ソースコードおよびライブラリは [GPL/LGPL](http://www.gnu.org/licenses/gpl.html) の下でライセンスされています。詳細についてはソースコードファイルをご確認ください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>