---
description: Wifi Shield V2.0
title: Wifi Shield V2.0
keywords:
- Arduinoシールド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wifi_Shield_V2.0
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Wifi Shield V2.0
category: Shield
bzurl: https://seeedstudio.com/Wifi-Shield-V2.0-p-2505.html
oldwikiname: Wifi_Shield_V2.0
prodimagename: Wifi_Shield_v2.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/113030008 1.jpg
surveyurl: https://www.research.net/r/Wifi_Shield_V2_0
sku: 113030008
--- -->

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_Shield_v2.jpg)

このWiFiシールドは、RN171 TCP/IPモジュールを搭載しており、Arduino/Seeeduinoを使用して802.11b/gワイヤレスネットワークに接続することができます。

シールドのArduinoとのデフォルト通信プロトコルはUART/シリアルであり、組み込まれた2列のジャンパーを使用して、RXおよびTXに使用するデジタルピン（D0からD7）を選択できます。また、シールドにはI2Cおよびシリアル用の2つのオンボードGroveコネクタがあり、これを使用して任意のGroveデバイスと接続することが可能です。

オンボードアンテナにより、シールドは広い範囲をカバーし、より強力な信号を送信できます。RN171モジュールは、TCP、UDP、FTP、およびHTTP通信プロトコルをサポートしており、スマートホームネットワーク、ロボット制御、個人用気象ステーションなど、ほとんどのワイヤレスおよびIoTネットワークプロジェクトのニーズを満たします。

以下の例や[ユーザーマニュアル](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf)により、このシールドは非常に詳細にドキュメント化されています。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Wifi-Shield-V20-p-2505.html)

バージョントラッカー
---------------------

| パラメータ           | Wifi Shield V1.0                                                        | Wifi Shield V1.1(v1.2)                                                 | Wifi Shield V2.0                                                                          |
|--------------------|-------------------------------------------------------------------------|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| 電圧               | +3.5V~+5V                                                               | +3.5V~+5V                                                              | +3.5V~+5V                                                                                 |
| 標準シールド        | はい                                                                    | はい                                                                    | はい                                                                                       |
| 通信モード          | シリアルポート                                                          | シリアルポート                                                          | シリアルポート                                                                             |
| 標準シールド        | いいえ                                                                  | はい                                                                    | はい                                                                                       |
| アンテナタイプ       | マストアンテナ                                                          | PCBアンテナ                                                             | <font color="Red">オンボードアンテナ</font>                                                |
| ライブラリファイル   | [Wifi Shield Library V1.0](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WifiShield.zip) | [New Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) | [New Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) *v1.2と同じ*       |

仕様
----

| パラメータ                        | 値                                                                  |
|----------------------------------|--------------------------------------------------------------------|
| 動作電圧                         | 3.3~5.5 V                                                          |
| 直接対応ボード                   | Arduino Uno/Seeeduino                                              |
| 電流                              | 25~400mA                                                           |
| 送信出力                         | 0-10 dBm                                                           |
| 周波数                            | 2402~2480 MHz                                                      |
| チャンネル                        | 0~13                                                               |
| ネットワーク速度                 | 802.11bで1-11 Mbps/802.11gで6-54 Mbps                              |
| 寸法                              | 60X56X19 mm                                                        |
| 正味重量                         | 24±1 g                                                             |
| セキュアWiFi認証                 | WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)                            |
| 内蔵ネットワークアプリケーション | DHCPクライアント、DNSクライアント、ARP、ICMP ping、FTP、TELNET、HTTP、UDP、TCP |
| 認証                              | RN171: FCC, CE                                                     |

ハードウェア概要
-----------------

WiFiシールドは、D0-D7の間で選択可能な2つのデジタルピンのみを必要とするため、任意のArduino/Seeeduino開発ボードと互換性があります。インストールするには、シールドをArduino/Seeeduinoボードに積み重ねるだけです。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v2_breakout.png)

1. **シリアルペリフェラルインターフェイス (SPI) 接続 (MOSI, SCK, MISO):** これらのピンはArduinoのピンには接続されておらず、独立しており、これらの論理レベルの出力/入力は3.3Vです。これらのピンを介してArduinoとSPI通信を行うことができますが、これらのピンとArduinoの間に3.3Vロジックコンバータが必要です。SPIモードでのデータレートは最大2Mbpsに達することができます。

    **RES_Wifi:** WifiシールドにはRN-171モジュール用の「リセットボタン」が搭載されています。また、リセットコマンドを送信することでソフトウェア経由でRN-171をリセットすることも可能です。さらに、このピンをArduinoのデジタル6ピンに接続したい場合は、シールド上の「P5」とラベル付けされたパッドをはんだ付けしてください。

2. **RN171:** TCP/IPスタックを内蔵した超低消費電力のワイヤレスモジュール。
3. **アンテナ:** I.PEXコネクタ。
4. **RN171ブレークアウトセクション:** RN171モジュールには独自のアナログ入力およびGPIOピンがあり、このシールドを介してアクセスできます。GPIOピン(IO3, IO7, IO8, IO9)は3.3V対応で、アナログ入力ピン(S_0およびS_1)は0-400mVを読み取ることができます(1.2Vを超えないでください)。RN171はソフトウェアでこれらのピンを使用するように設定することができます。また、アドホックモードなどの他のRN171機能を使用するために他のピンに接続することも可能です。VCCの電圧はWiFiシールドの供給電力に依存します。
5. **UART/シリアル選択エリア:** Arduinoと通信するために使用するRXおよびTXピンを選択できる2つのジャンパー列。
6. **Groveコネクタ:** Arduino UNOまたはSeeeduinoを使用する場合、ピンA4&A5用のアナログI2C Groveと、D8&D9用のデジタルシリアルGrove。VCCの電圧はボードの電源供給に依存します。

### 使用ピン / シールド互換性

WiFiシールドは、RN171 WiFiモジュールと通信するためにD0からD7の間の任意の2つのデジタルピンを使用します。ただし、D0とD1はArduinoのプログラミングおよびシリアル通信に使用されるため、これらを使用するとこれらの機能に干渉する可能性があります。

このページのサンプルコードでは、シールドのRXおよびTXとしてD2およびD3を使用しています。この場合、ジャンパーハットは以下のように接続する必要があります：

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v1.1_pinout.png)
*D2がWIFI_TXに選択され、D3がWIFI_RXに選択されている*

### RN171 WiFiモジュール

RN-171は、スタンドアロンの完全なTCP/IPワイヤレスネットワーキングモジュールです。その小型フォームファクタと非常に低い消費電力により、RN-171はモバイルワイヤレスアプリケーションに最適です。2.4GHzラジオ、32ビットSPARCプロセッサ、TCP/IPスタック、リアルタイムクロック、暗号化アクセラレータ、電源管理、アナログセンサーインターフェースを組み込んでいます。

最も簡単な構成では、ハードウェアは(PWR, TX, RX, GND)の4つの接続だけでワイヤレスWiFiデータ接続を作成できます。さらに、RN171のアナログセンサー入力をアナログ入力ピンとして使用することができ、その定格は0-400mVです(1.2V DCを超えないでください)。

**電源:** RN-171モジュールの動作電圧は通常3.3VDCであるため、WiFiシールドには電圧レギュレータとロジックレベル変換器が設計されています。シールド上のLD1117レギュレータは3.3VDCに変換し、RN171モジュールに供給します。ただし、電源供給の自動判定回路により、RN-171は3V3ピンと5Vピンの両方から電力を供給できます。ただし、ボードに3.3Vと5Vの両方を供給した場合、供給電力は5Vになります。Arduino/Seeeduinoボードと一緒に使用する場合は、WiFiシールドをボードにスタックするだけです。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v1.1_communicate.png)
*RN171モジュールがArduinoにインターフェースされる方法の図*

**GPIO_6:** RN171 WiFiモジュールのGPIO6ピンは、デフォルトでWiFiシールド上のD5とラベル付けされたLEDにのみ接続されています。このLEDはアクセスポイント(AP)接続のステータスを表示するために使用されます。ただし、GPIO6をArduinoのデジタルピン5に接続したい場合は、WiFiシールド上の「P6」とラベル付けされたパッドをはんだ付けしてください。

### LEDステータスインジケータ

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th>ラベル</th>
<th>説明</th>
<th>ステータス</th>
<th>ハードウェア接続</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>D5</td>
<td>緑色LED。接続状態を示します。</td>
<td><strong>OFF:</strong> モジュールがネットワークに接続されていないことを意味します。<br />
<strong>点灯:</strong> ネットワークに接続され、インターネットアクセスが正常であることを示します。</td>
<td>RN171モジュールのGPIO6に接続されています。</td>
</tr>
<tr class="even">
<td>D1</td>
<td>赤色LED。TCP/IP接続状態を示します。</td>
<td><strong>点灯:</strong> TCP接続されています。<br />
<strong>高速点滅 (1秒間に2回):</strong> IPアドレスがない、またはモジュールがコマンドモードにあります。<br />
<strong>低速点滅 (1秒間に1回):</strong> IPアドレスが正常です。</td>
<td>RN171モジュールのGPIO4に接続されています。</td>
</tr>
<tr class="odd">
<td>RST</td>
<td>赤色LED。WiFiモジュールのリセット状態を示します。</td>
<td><strong>点灯:</strong> リセットボタン(WIFI_RST)が押されています。</td>
<td>RN171モジュールのリセットに接続されています。</td>
</tr>
<tr class="even">
<td>PWR</td>
<td>緑色LED。WiFiモジュールの電源オン状態を示します。</td>
<td><strong>点灯:</strong> モジュール/シールドが電源オンされています。</td>
<td>LD1117電圧レギュレータの3.3V出力に接続されています。</td>
</tr>
</tbody>
</table>

WiFiライブラリ
------------

シールドとのインターフェースを支援するためにライブラリを作成しました。このセクションでは、ライブラリのセットアップ方法を説明し、いくつかの関数を紹介します。

### セットアップ

1. *[Wifi ShieldのGitHubページ](https://github.com/Seeed-Studio/WiFi_Shield)からライブラリコードをzipファイルとしてダウンロードします。*
2. *ダウンロードしたファイルを…/arduino/libraries/フォルダに解凍します。*
3. *解凍したフォルダの名前を「WifiShield」に変更します。*
4. *Arduino IDEを起動します(または開いている場合は再起動します)。*

### 関数

ライブラリで最も重要/便利な関数を以下に示します。他の利用可能な関数については、.hファイルをご覧ください。

#### join()

- **説明:**
  - WiFiアクセスポイントに接続するために使用されます。
- **構文:**
  - join(const char *ssid, const char*phrase, int auth)
- **パラメータ:**
  - **ssid:** シールドが接続するアクセスポイントの名前。
  - **phrase:** シールドが接続するアクセスポイントのパスワード/フレーズ。
  - **auth:** シールドが接続するアクセスポイントの認証タイプ。以下の定数のいずれかを指定できます：
    - WIFLY_AUTH_OPEN
    - WIFLY_AUTH_WEP
    - WIFLY_AUTH_WPA1
    - WIFLY_AUTH_WPA1_2
    - WIFLY_AUTH_WPA2_PSK
    - WIFLY_AUTH_ADHOC
- **戻り値:**
  - **boolean:** アクセスポイントへの接続が成功した場合はtrue、失敗した場合はfalse。
- **例:**

```c
#include <SoftwareSerial.h>
#include "WiFly.h"

SoftwareSerial uart(2, 3); // WiFiシールドのTXおよびRXピンにシリアル接続を作成します。
WiFly wifly(&uart); // 上記で作成したWiFiシールドへのシリアル接続を使用してWiFlyライブラリオブジェクトを作成します。

void setup()
{
    uart.begin(9600); // シールドへのシリアル接続を開始します
    Serial.begin(9600); // Arduinoシリアルモニターウィンドウ接続を開始します
    wifly.reset(); // シールドをリセットします
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

:::tip
この例はArduino UNOを基にしており、D2/D3をSoftwareSerialピンとして使用しています。Arduino Megaを使用している場合、D2は使用できなくなります。詳細については[Arduino Software Serial](https://www.arduino.cc/en/Tutorial/SoftwareSerialExample)を参照してください。
以下は例です。
:::

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/connect_mega.jpg)

コードについても変更が必要です：

```c
SoftwareSerial uart(10, 3); // WiFiシールドのTXおよびRXピンにシリアル接続を作成します。
```

#### receive()

- **説明:**
  - シールドからデータを読み取るために使用できます。Arduinoのread()関数の代替手段です。
- **構文:**
  - receive(uint8_t *buf, int len, int timeout)
- **パラメータ:**
  - **buf:** シールドから読み取ったバイトが格納されるバッファ配列。
  - **len:** バッファ配列の長さ/サイズ。
  - **timeout:** 読み取りを試みるのを停止するタイムアウト値。
- **戻り値:**
  - **int:** シールドから読み取ったバイト数。
- **例:**

```c
char c;
while (wifly.receive((uint8_t *)&c, 1, 300) > 0) {
    Serial.print((char)c);
}
```

File->Examples->WiFi_Shield->wifly_testスケッチで完全な例を確認してください。

#### sendCommand()

- **説明:**
  - join()、reboot()、save()などの一部の関数は、RN171モジュールのユーザーマニュアルに記載されているテキストコマンドのラッパーとして機能します。sendCommand()関数を使用すると、必要に応じて独自のラッパー関数を作成できます。
- **構文:**
  - sendCommand(const char *cmd, const char*ack, int timeout)
- **パラメータ:**
  - **cmd:** RN-171のユーザーマニュアルからの任意のコマンド。
  - **ack:** コマンドから期待される戻り文字列。
  - **timeout:** 出力を不正なリクエスト/レスポンスと見なすまでの許容時間。
- **戻り値:**
  - **boolean:** WiFiシールドがack文字列で応答した場合はtrue、それ以外の場合はfalse。

- **例:**

```c
// join()関数は以下のようにjoinコマンドのラッパーです。
// RN171が成功時に返すとされる文字列"Associated"を使用します。
if(sendCommand("join\r", "Associated",DEFAULT_WAIT_RESPONSE_TIME*10))
{
    // 接続成功
}else{
    // 接続できませんでした
}
```

File->Examples->WiFi_Shield->wifly_testスケッチで完全な例を確認してください。

WiFiシールドの例/アプリケーション
---------------------------------

### 例1: WiFiシールドにコマンドを送信し、Arduinoシリアルモニターウィンドウを介して応答を受信する

WiFiシールドのRN-171モジュールは、[データシート](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf)に記載されているコマンドを送信することで構成されます。コマンドを自動的に送信するスケッチを作成することもできますが、WiFiシールドとRN-171の動作を正確に理解するために、この例を実行することをお勧めします。

以下の手順に従って進めてください。動画を視聴したい場合は以下をご覧ください。

[動画 - SeeeduinoのWiFiシールドの使い方](https://www.youtube.com/watch?v=8dCrAaN16lE)

**ステップ1: WiFiシールドジャンパーの設定**

WiFiシールドのジャンパーを、デジタルピン2 (D2) がWIFI_TXに選択され、デジタルピン3 (D3) がWIFI_RXに選択されるように配置します。以下の写真に示されているように、RN-171から情報を送受信するためにこれらのピンを使用します。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v1.1_front.png)

*ピンD2はTX用、D3はRX用*

**ステップ2: ソフトウェア/コード**

以下のスケッチでは、RN-171/WiFiシールドからデータを送受信するためのUARTオブジェクトを作成しました。このオブジェクトをWiFlyライブラリと組み合わせて使用し、シールドにデータを送信します。ArduinoのSerialオブジェクトを使用して、シールドから受信したデータを表示し、WiFly/UARTオブジェクトを介してシールドに送信するコマンドを受信します。

以下のコードをArduinoボードにアップロードしてください：

```c
#include <Arduino.h>
#include <SoftwareSerial.h>
#include "WiFly.h"

// 新しいシリアルポートを設定します。
SoftwareSerial uart(2, 3); // WiFiシールドのTXおよびRXピンにシリアル接続を作成します。
WiFly wifly(&uart); // 上記で作成したWiFiシールドへのシリアル接続を使用してWiFlyライブラリオブジェクトを作成します。

void setup()
{
    uart.begin(9600); // シールドへのシリアル接続を開始します
    Serial.begin(9600); // Arduinoシリアルモニターウィンドウ接続を開始します
    delay(3000); // シリアル/uartオブジェクトが開始するまで3秒待機します
}

void loop()
{
    while (wifly.available())  // シールドからデータが利用可能な場合
    {
        Serial.write(wifly.read()); // シリアルモニターウィンドウにデータを表示します。
    }
    while (Serial.available()) // コマンドを入力した場合
    {
        wifly.write(Serial.read()); // WiFiシールドにコマンドを送信します。
    }
}
```

**ステップ3: コマンドモードへの移行**

WiFiシールドのWiFly RN-171モジュールは、データモードとコマンドモードの2つのモードで動作できます。データモードでは、シールドは接続を受信および開始できます。コマンドモードでは、データシートに記載されているコマンドを使用してモジュールを構成できます。

コマンドモードに移行するには、以下の手順を実行してください：

1. Arduinoシリアルモニターを開きます。
2. シリアルモニターを「No line ending」に設定し、ボーレートを9600に設定します。
3. Arduinoシリアルモニターに「$$$」を入力してEnterキーを押します。
4. モジュールは「CMD」という文字で応答し、コマンドモードに入ったことを示します。

次にいくつかのコマンドをテストしてみましょう。以下を実行してください：

1. Arduinoのシリアルモニタウィンドウで、「キャリッジリターン」を選択し、ボーレートを9600に設定します。
2. 次に、以下の表にあるコマンドをArduinoシリアルモニタに入力し、Enterキーを押します。
3. モジュールは各コマンドに対して表に記載されている応答を出力します。

| コマンド | 説明                                                                                                                                                                                                                 |
|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| scan     | このコマンドは、13チャンネルすべてでアクセスポイントのアクティブプローブスキャンを実行します。このコマンドを使用すると、モジュールは見つかったアクセスポイントのMACアドレス、信号強度、SSID名、およびセキュリティモードを返します。 |
| get ip   | このコマンドは、IPアドレスとポート番号の設定を表示します。                                                                                                                                                               |

設定コマンドの完全なリストについては、RN-171 [リファレンスガイド](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf)の11ページ以降をご覧ください。

### 例2: アクセスポイント/インターネットルーターへの接続

この例では、WiFiシールドをアクセスポイント（インターネットルーター）に接続する方法を、コマンドを入力する場合と入力しない場合の両方で説明します。

#### コマンドを入力して接続する

このセクションでは、RN-171データシートのコマンドを使用してWiFiシールドをアクセスポイントに接続する方法を説明します。このセクションを通じて、WiFi Arduinoライブラリを使用する際にバックグラウンドで何が起こっているかを正確に理解できるようになります。

以下の手順を実行してください：

1. 例1のコードをArduinoボードにアップロードします。
2. **コマンドモードに入る:**
    1. シリアルモニタを「No line ending」に設定し、ボーレートを9600に設定します。
    2. Arduinoシリアルモニタに*$$$*を入力してEnterキーを押します。

3. シリアルモニタを「キャリッジリターン」に設定します。
4. **利用可能なアクセスポイントをスキャンする:**
    1. *scan*を入力してEnterキーを押します。Arduinoシリアルモニタウィンドウには、WiFiシールドが見つけた各アクセスポイントのカンマ区切りの値のリストが出力されます。左から右へ3番目の値がセキュリティモード、最後の値がSSIDです。この例では、セキュリティモードが4でSSID名がMySSIDであることを示しています：01,01,-88,**04**,1104,1c,00,45:56:78:be:93:1f,**MySSID**

5. 見つかったアクセスポイントのリストから、インターネットルーターに対応するものを見つけ、セキュリティモードとSSIDをメモします。これら2つの値は接続する際に必要です。
6. **シールドのセキュリティモードを設定する:**
    1. *set wlan auth m*を入力します。*m*を接続したいアクセスポイントのセキュリティモード番号（この例では4）に置き換えます。
    2. WiFiシールドがサポートするセキュリティモードは以下の**図1**に記載されています。

7. **アクセスポイントのフレーズを設定する**
    1. *set wlan phrase myPhrase*を入力します。*myPhrase*をアクセスポイントのパスワード/セキュリティキーに置き換えます。

    :::note
    アクセスポイントのセキュリティタイプがWEPの場合は、上記のコマンドで*phrase*の代わりに*key*を使用してください。
    :::

    2. アクセスポイント（インターネットルーター）のフレーズは、PCから接続する際に使用するパスワードです。Windowsでは以下のアニメーション画像のように確認できます：
    ![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/How_to_find_network_security_key_password.gif)
    ネットワークのセキュリティキー/パスワードの確認方法

8. **アクセスポイントに参加する**
    1. アクセスポイントのセキュリティタイプとフレーズを設定したので、接続できます。
    2. *join MySSID*を入力します。MySSIDをアクセスポイントのブロードキャスト名に置き換えます。
    3. 成功すると、Arduinoシリアルモニタウィンドウに「Associated!」と表示されます。

上記の手順で入力したコマンドの説明は以下の表に記載されています。各コマンドの詳細な説明はRN171のユーザーマニュアルに記載されています。

| 番号 | コマンド                  | 説明                                                                                                                                                                                                                                                                          |
|------|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1    | scan                      | このコマンドは、13チャンネルすべてでアクセスポイントのアクティブプローブスキャンを実行します。このコマンドを使用すると、モジュールは見つかったアクセスポイントのMACアドレス、信号強度、SSID名、およびセキュリティモードを返します。                                                          |
| 2    | set wlan auth 4           | アクセスポイントのセキュリティプロトコルに対応する値を見つけます。その後、WiFlyに使用するセキュリティプロトコルを指定します。これは、アクセスポイントのセキュリティプロトコルに対応する**図1**に示された番号です。この例では「4」を選択します。                              |
| 3    | set wlan phrase seeed-mkt | WiFiシールドにパスフレーズを指定します。                                                                                                                                                                                                                                                |
| 4    | join SEEED-MKT            | WiFiシールドに「SEEED-MKT」という名前のアクセスポイントに参加するよう指示します。このコマンドを送信すると、モジュールは接続し、接続に関する情報を出力するはずです。（接続に失敗した場合は、コマンドを再度送信して成功するまで試してください） |

| 値   | 認証モード                           |
|-------|---------------------------------------|
| 0     | オープン (デフォルト)                |
| 1     | WEP-128                              |
| 2     | WPA1                                 |
| 3     | WPA1 と WPA2-PSK の混在              |
| 4     | WPA2-PSK                             |
| 5     | 使用されていない                     |
| 6     | AD hoc モード (任意のアドホックネットワークに接続) |
| 8     | WEP-64                               |

*図 1*

#### WiFi ライブラリを使用して接続する

各コマンドを入力してアクセスポイントに接続する方法を理解したところで、次は提供されているライブラリと例を使用して接続する方法を学びます。

アクセスポイントに接続するために必要なコードを見るには、「File -> Examples -> Wifi_Shield -> wifi_test」に移動してください。コードを変更して自分の SSID（アクセスポイント名）と KEY（アクセスポイントのパスワード）を使用し、スケッチを Arduino IDE にアップロードします。

```c
#define SSID      " SEEED-MKT "
#define KEY       " seeed-mkt "
```

スケッチを Arduino ボードにアップロードしたら、シリアルモニターウィンドウを開きます。シールドがアクセスポイントへの接続に成功した場合、「OK」というメッセージとともに「get everything」コマンドの結果として接続情報が表示されます。アクセスポイントへの接続に失敗した場合は、「Failed」というメッセージが表示されます。

#### 電源投入時に自動接続するようシールドを設定する

シールドを電源投入時に自動接続するよう設定できます。この設定は一度だけ行えば十分です：

1. "set wlan ssid mySSID" コマンドを送信し、mySSID を自分の SSID に置き換えます。
2. "set wlan join 1" コマンドを送信します。
3. "save" コマンドを送信します。

これで、シールドは電源投入時に自動的にアクセスポイントに接続します。

各コマンドの説明は RN-171 データシートおよび以下の表に記載されています。

| 番号 | コマンド                   | 説明                                                                 |
|--------|----------------------------|----------------------------------------------------------------------|
| 1      | set wlan ssid | "ssid" は自動的に接続したいアクセスポイントの名前です。                     |
| 2      | set wlan join 1            | モジュールに、メモリに保存された SSID に自動的に接続するよう指示します。 |
| 3      | save                       | これらの設定を WiFi の設定ファイルに保存します。                      |

#### 静的 IP アドレスを設定する

シールドがアクセスポイントから静的 IP アドレスを取得するようにするには、アクセスポイントに接続した後、以下のコマンドを送信します：

| 番号 | コマンド                       | 説明                           |
|--------|--------------------------------|--------------------------------|
| 1      | set ip dhcp 0                  | DHCP を無効にします。          |
| 2      | set ip address | 使用したい IP アドレスを設定します。 |

### 例 3: ネットワークとの通信

この例では、PC やスマートフォンなどのデバイスが WiFi シールドと通信する方法を示します。

以下の手順に従ってください：

1. 例 2 のセクション「*Connecting By Typing Commands*」のステップ 1～7 を実行してモジュールを設定します。
2. "set ip local 80" コマンドを送信してリスニング IP ポートを "80" に設定します。
3. 例 2 のセクション「*Connecting By Typing Commands*」のステップ 8 に従ってシールドをアクセスポイントに接続します。
4. "save" コマンドを送信してこれらの設定を保存します。
5. "get ip" コマンドを使用してシールドの IP アドレスを取得します。応答の "IP=" の右側に IP アドレスとポートが表示されます（例：IP=192.168.0.10:80）。
6. Web ブラウザを開き、シールドの IP アドレスを URL バーに入力して Enter を押します。
7. Arduino のシリアルモニターウィンドウに以下のような HTTP 応答が表示されます。これは、ブラウザがシールドにデータを要求するために送信した情報です。

```
*OPEN*GET / HTTP/1.1
Host: 192.168.0.10
Connection: keep-alive
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36
Accept-Encoding: gzip, deflate, sdch
Accept-Language: en-US,en;q=0.8
```

ブラウザは現在データを待機しています。WiFi モジュールはセンサー値を送信したり、ウェブページを提供したり、その他のデータをブラウザに直接送信することができます。この場合、ブラウザはウェブページを待機しています。WiFi モジュールが HTML 形式のページで応答すると、ブラウザはそれを表示します。次の例では、これらの楽しい操作を行う方法を学びます。

### 例 4: WiFi シールドをウェブサーバーとして使用する（シールドからウェブページを提供する）

例 3 で見たように、インターネット/ウェブブラウザは WiFi シールドに接続できます。一度接続が確立されると（ブラウザが HTTP リクエストを送信したとき）、WiFi シールドはブラウザに HTML コードを返してウェブページとして表示させることができます。この例では、シールドがウェブブラウザに応答するために必要なことを学びます。

**ステップ 1: Arduino コード**

以下のコードを Arduino ボードにアップロードし、"myssid" と "mypassword" をそれぞれアクセスポイントの値に置き換えてください：

```c
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "myssid"
#define KEY       "mypassword"
// アクセスポイントのセキュリティモードを確認してください。私の場合は WPA20-PSK でした。
// 異なる場合は、AUTH 定数を変更する必要があります。利用可能なセキュリティコードについては WiFly.h ファイルを参照してください。
#define AUTH      WIFLY_AUTH_WPA2_PSK

int flag = 0;

// ピン接続
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX

SoftwareSerial wiflyUart(2, 3); // WiFi シールドシリアルオブジェクトを作成
WiFly wifly(&wiflyUart); // WiFly クラスに WiFi シールドシリアルオブジェクトを渡す

void setup()
{
    wiflyUart.begin(9600); // WiFi シールド UART ポートを開始
    Serial.begin(9600); // Arduino シリアルポートを開始
    Serial.println("--------- WIFLY Webserver --------");

    // WiFly の初期化を待機
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

    delay(5000);

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
        if(wiflyUart.find("*OPEN*")) // *OPEN* 文字列を探して、データがオープン接続からのものであるか確認
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

**ステップ2: シールドのIPアドレスを取得する**

シリアルモニターウィンドウを開き、「Web server ready」というメッセージが表示されるのを待ちます。シリアルモニターにはWiFiシールドのIPアドレスも表示されます。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-serial-comm-window.png)

*Arduinoプログラムのシリアル通信出力。シールドのIPアドレスがハイライトされています。*

**ステップ3: ウェブページを訪問する**

次に、そのIPアドレスをウェブブラウザで開きます。以下のようなウェブページが表示されます。このページにはYahoo!とGoogleへのリンク、および（まだ機能していない）ボタンが含まれています。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-simple-webserver-page.png)

*WiFiシールドから提供される、2つのリンクと1つのボタンを含むシンプルなウェブページ。*

ウェブページを訪問すると、シリアルモニターウィンドウにも「New Browser Request!」という文字列が表示されます。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-simple-webserver-arduino-serial-window-response.png)

*新しいブラウザ接続/リクエストを検出したことを示すArduinoのシリアル通信ウィンドウ。*

<div class="admonition note">
<p class="admonition-title">注意</p>
一部のブラウザ（例: Google Chrome）では、URLをアドレスバーに入力するだけでウェブページリクエストが送信される場合があります。これは、ユーザーがページを訪問する前にブラウザがウェブページのタイトルを取得しようとするためです。
</div>

### 例5: ウェブページからArduinoのデジタルピンを制御する（ウェブページからLEDをトグルする）

この例では、3つのボタンを持つウェブページを作成し、Arduinoの3つの異なるデジタルピンを制御します。

以下の手順に従ってください。また、コードの詳細な説明を含むビデオも作成しました。

[ビデオ - WiFiシールドを使用したArduinoデジタルピンのウェブページ制御](https://www.youtube.com/watch?v=ek63patAl80)

**ステップ1: ハードウェア**

デジタルピン11、12、13に3つのLEDと抵抗を接続します。以下の回路図を参照してください。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-schematic.png)

*ピン11、12、13に接続された3つのLEDと1kΩ抵抗。*

**ステップ2: Arduinoスケッチ**

以下のコードをArduinoボードにアップロードします。ただし、「mySSID」と「myPassword」をアクセスポイントのSSID名とパスワードに置き換えてください。

```c
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "mySSID"
#define KEY       "myPassword"
// アクセスポイントのセキュリティモードを確認してください。私の場合はWPA20-PSKでした。
// 異なる場合は、AUTH定数を変更する必要があります。利用可能なセキュリティコードについてはWiFly.hファイルを参照してください。
#define AUTH      WIFLY_AUTH_WPA2_PSK

int flag = 0;

// ピンの接続
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX

SoftwareSerial wiflyUart(2, 3); // WiFiシールドシリアルオブジェクトを作成
WiFly wifly(&wiflyUart); // WiFlyクラスにWiFiシールドシリアルオブジェクトを渡す
char ip[16];

void setup()
{
    pinMode(11,OUTPUT);
    digitalWrite(11,LOW);

    pinMode(12,OUTPUT);
    digitalWrite(12,LOW);

    pinMode(13,OUTPUT);
    digitalWrite(13,LOW);

    wiflyUart.begin(9600); // WiFiシールドUARTポートを開始

    Serial.begin(9600); // Arduinoシリアルポートを開始
    Serial.println("--------- WIFLY Webserver --------");

    // WiFlyの初期化を待つ
    delay(1000);

    wifly.reset(); // シールドをリセット
    delay(1000);
    // WiFlyパラメータを設定

    wifly.sendCommand("set ip local 80\r"); // ローカル通信ポートを80に設定
    delay(100);

    wifly.sendCommand("set comm remote 0\r"); // 接続が開かれたときにデフォルト文字列を送信しない
    delay(100);

    wifly.sendCommand("set comm open *OPEN*\r"); // 接続が開かれたときにWiFiシールドが出力する文字列を設定
    delay(100);

    Serial.println("Join " SSID );
    if (wifly.join(SSID, KEY, AUTH)) {
        Serial.println("OK");
    } else {
        Serial.println("Failed");
    }

    delay(5000);

    wifly.sendCommand("get ip\r");

    wiflyUart.setTimeout(500);
    if(!wiflyUart.find("IP="))
    {
        Serial.println("IPを取得できません");
        while(1);;
    }else
    {
        Serial.print("IP:");
    }

    char c;
    int index = 0;
    while (wifly.receive((uint8_t *)&c, 1, 300) > 0) { // get ipコマンドの応答を出力
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
    if(wifly.available())       // WiFiシールドにデータがある場合
    {

        if(wiflyUart.find("*OPEN*")) // データがオープン接続からのものであるか確認（*OPEN*文字列を探す）
        {
            Serial.println("New Browser Request!");
            delay(1000); // ブラウザがHTTPリクエスト文字列の送信を完了するのに十分な時間を遅延

            if(wiflyUart.find("pin=")) // HTTPリクエストに"pin="文字列があるか確認。あればLEDを制御する
            {
                Serial.println("LED Control");
                // ユーザーがLEDをトグルしたい
                int pinNumber = (wiflyUart.read()-48); // 最初の数字を取得（例: ピン13の場合、最初の数字は1）
                int secondNumber = (wiflyUart.read()-48);
                if(secondNumber>=0 && secondNumber<=9)
                {
                    pinNumber*=10;
                    pinNumber +=secondNumber; // 2番目の数字を取得（例: ピン13の場合、2番目の数字は3）、最初の数字に加算
                }
                digitalWrite(pinNumber, !digitalRead(pinNumber)); // ピンをトグル
                // ピン状態文字列を構築。Arduinoはこの文字列をブラウザに返信する。
                String pinState = "Pin ";
                pinState+=pinNumber;
                pinState+=" is ";
                if(digitalRead(pinNumber)) // ピンがONかOFFか確認
                {
                    pinState+="ON"; // ピンがON
                }
                else
                {
                    pinState+="OFF";  // ピンがOFF
                }
                // HTTPヘッダーContent-Length文字列を構築
                String contentLength="Content-Length: ";
                contentLength+=pinState.length(); // 長さの値はArduinoがブラウザに返信する文字列の長さ
                // HTTPヘッダーを送信
                wiflyUart.println("HTTP/1.1 200 OK");
                wiflyUart.println("Content-Type: text/html; charset=UTF-8");
                wiflyUart.println(contentLength); // HTMLコードの長さ
                wiflyUart.println("Connection: close");
                wiflyUart.println();
                // 応答を送信
                wiflyUart.print(pinState);
            }
            else
            {
                // HTTPヘッダーを送信
                wiflyUart.println("HTTP/1.1 200 OK");
                wiflyUart.println("Content-Type: text/html; charset=UTF-8");
                wiflyUart.println("Content-Length: 540"); // HTMLコードの長さ
                wiflyUart.println("Connection: close");
                wiflyUart.println();

                // ウェブページのHTMLコードを送信
                wiflyUart.print("<html>");
                wiflyUart.print("<head>");
                wiflyUart.print("<title>WiFi Shield Webpage</title>");
                wiflyUart.print("</head>");
                wiflyUart.print("<body>");
                wiflyUart.print("<h1>LED Toggle Webpage</h1>");
                // <button>タグ内のID属性は、"pin" GETパラメータを介してArduinoに送信される値
                wiflyUart.print("<button id=\"11\" class=\"led\">Toggle Pin 11</button> "); // ピン11用ボタン
                wiflyUart.print("<button id=\"12\" class=\"led\">Toggle Pin 12</button> "); // ピン12用ボタン
                wiflyUart.print("<button id=\"13\" class=\"led\">Toggle Pin 13</button> "); // ピン13用ボタン
                wiflyUart.print("<script src=\"http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js\"></script>");
                wiflyUart.print("<script type=\"text/javascript\">");
                wiflyUart.print("$(document).ready(function(){");
                wiflyUart.print("$(\".led\").click(function(){");
                wiflyUart.print("var p = $(this).attr('id');"); // id値を取得（例: pin13, pin12, またはpin11）
                // HTTP GETリクエストをIPアドレスに送信し、"pin"パラメータと値"p"を指定。その後、関数を実行
                // 重要: IPアドレスとポートをシールドのIPアドレスとポートに置き換えることを忘れないでください
                wiflyUart.print("$.get(\"http://");
                wiflyUart.print(ip);
                wiflyUart.print(":80/a\", {pin:p},function(data){alert(data)});");// GETリクエストを実行。戻り値を受け取ったら"function"を実行（ブラウザに"data"をアラート表示）。
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

シリアルモニタウィンドウを開き、「Web server ready」というメッセージが表示されるのを待ちます。シリアルモニタには、WiFiシールドのIPアドレスも表示されます。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-serial-comm-window.png)

*Arduinoプログラムのシリアル通信出力。シールドのIPアドレスがハイライトされています。*

**ステップ 4: ウェブページを訪問**

ウェブブラウザでIPアドレスを入力します。以下のような3つのボタンがあるウェブページが表示されるはずです。ボタンをクリックしてLEDを制御します。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-webpage.png)

*WiFiシールドから提供されるLED制御ウェブページ。*

Arduinoはウェブブラウザにピンの状態を返答し、ブラウザはこれをアラートウィンドウに表示します。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-arduino-response.png)

*Pin12の状態を表示するアラートダイアログ。「Pin12 is ON」という文字列がArduinoから送信されました。*

また、シリアルモニタウィンドウには、ブラウザがウェブページを訪問したりLEDピンを制御するリクエストを送信した際の情報が表示されます。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-serial-comm-response.png)

*HTTPリクエストがシールドに送信された際のArduinoシリアル通信出力。*

### 例6: WiFiシールドとAndroidアプリ

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Androidapp-ethernet-shield-led-toggle.png)

*WiFiまたはEthernetシールドを介してArduinoのピンを制御するためのAndroidアプリ。*

**Androidアプリケーション**

WiFiシールドを介してArduinoのデジタルピンをトグルするAndroidアプリを作成しました。このアプリの動作を確認し、コードについて学ぶには、以下のリンクのビデオをご覧ください。

[ビデオ - Arduinoピン制御用WiFiシールドAndroidアプリ](https://www.youtube.com/watch?v=0R709uGvkWM)

**ソフトウェア**

Android Studioプロジェクト/ソースコードを以下のリンクからダウンロードしてください：[リンク:](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFiShieldLEDControl.zip "WiFiShieldLEDControl.zip")

### 例7: 外部サーバーへのデータ送信とデータ取得

WiFiシールドのRN-171モジュールはHTMLクライアント（基本的にはテキストベースのウェブブラウザ）として動作する能力を持っています。これにより、シールドを使用してウェブサーバーにデータを送信したり受信したりすることができます。この例では、都市の天気データ（例：温度、湿度など）を表示するウェブアプリケーションプログラミングインターフェース（API）を使用して、シールドを操作する方法を学びます。

使用するAPIの名前は[OpenWeatherMap](http://openweathermap.org/api)です。このウェブサイトに都市名と国名を送信すると、天気情報を含むJSON文字列が返されます。例えば、ロンドン（イギリス）の天気を表示したい場合は、以下のリンクのチュートリアルを参照してください：`http://openweathermap.org/appid`。2015年10月9日以降、このウェブサイトではAPIキーを取得するためにユーザー登録が必要です。APIキーを取得した後、以下のURLにアクセスできます：`http://api.openweathermap.org/data/2.5/weather?q=London,uk`。このURLは以下のようなJSON文字列を返します。この中に天気データやその他の情報が埋め込まれています。

```
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

サンフランシスコ（アメリカ）の天気JSON文字列を取得してみましょう。WiFiシールドがアクセスする必要があるURLは以下の通りです（ウェブブラウザでテスト可能です）：

    http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco,US

**ステップ 2: Arduinoコード**

[WiFlyマニュアル](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf)のセクション13では、ウェブサーバーに接続するさまざまな方法を説明していますが、いずれの場合もサーバーの名前（またはドメイン名がない場合はIPアドレス）と送信したいデータを指定する必要があります。

OpenWeatherMapサーバーからJSON文字列を受信するためにWiFiシールドに送信する必要があるコマンドは以下の通りです：

```
set ip proto 18 // HTMLクライアントを有効化
set dns name api.openweathermap.org // ウェブサーバーの名前
set ip address 0 // WiFlyがDNSを使用するように設定
set ip remote 80 // 標準のウェブサーバーポート
set com remote 0 // REMOTE文字列を無効化してPOSTに干渉しないようにする
open // 接続を開く
GET /data/2.5/weather?q=San%20Francisco,US \n\n // データを送信
```

以下はコマンドを送信するArduinoコードです：

```c
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "mySSID"
#define KEY       "myPassword"
// アクセスポイントのセキュリティモードを確認してください。私の場合はWPA20-PSKでした。
// 異なる場合は、AUTH定数を変更する必要があります。利用可能なセキュリティコードについてはWiFly.hファイルを参照してください。
#define AUTH      WIFLY_AUTH_WPA2_PSK

// ピン接続
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

    delay(5000);

    wifly.sendCommand("set ip proto 18\r"); // HTMLクライアントを有効化
    delay(100);

    wifly.sendCommand("set dns name api.openweathermap.org\r"); // 接続したいウェブサーバーの名前
    delay(100);

    wifly.sendCommand("set ip address 0\r"); // WiFlyがDNSを使用するように設定
    delay(100);

    wifly.sendCommand("set ip remote 80\r"); // 標準のウェブサーバーポート
    delay(100);

    wifly.sendCommand("set com remote 0\r"); // REMOTE文字列を無効化してPOSTに干渉しないようにする
    delay(100);

    wifly.sendCommand("open\r"); // 接続を開く
    delay(100);

    wiflyUart.print("GET /data/2.5/weather?q=San%20Francisco,US \n\n");
    delay(1000);
}

void loop()
{
    // インターネットからデータを受信すると、UARTポートを介してデータを出力
    while (wifly.available())
    {
        Serial.write(wifly.read());
    }
}
```

**ステップ 3: 結果**

シリアルモニターウィンドウを開くと、ブラウザで見たのと同じJSON文字列が表示されるはずです。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Open-weather-api-json-string.png)

*Arduinoのシリアルモニターウィンドウに表示されたJSON天気文字列。*

### 例 8: ターミナルを使用したTCP通信

この例では、WiFiシールドからPCのターミナルプログラムに情報を送信する方法を示します。メニュー付きのシンプルなArduinoコンソールを作成し、Arduinoのデジタルピンの状態を確認したり、切り替えたりするオプションを提供します。

**ステップ 1: TCPターミナルをダウンロード**

[RealTermをダウンロードしてインストール](http://sourceforge.net/projects/realterm/files/Realterm/2.0.0.70/Realterm_2.0.0.70_setup.exe/download)してください。このユーティリティターミナルを使用してWiFiシールドに接続します。

**ステップ 2: Arduinoコード**

以下のコードをArduinoボードにアップロードし、"mySSID"、"myPassword"、および認証コードを自身のアクセスポイント情報に置き換えてください。

```c
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "mySSID"
#define KEY       "myPassword"
// アクセスポイントのセキュリティモードを確認してください。私の場合はWPA20-PSKでした。
// 異なる場合は、AUTH定数を変更する必要があります。利用可能なセキュリティコードについてはWiFly.hファイルを参照してください。
#define AUTH      WIFLY_AUTH_WPA2_PSK

#define FLAG_MAIN_MENU 1
#define FLAG_SUB_MENU_2 2

int flag = FLAG_MAIN_MENU;

// ピンの接続
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX

SoftwareSerial wiflyUart(2, 3); // WiFiシールドシリアルオブジェクトを作成
WiFly wifly(&wiflyUart); // WiFiシールドシリアルオブジェクトをWiFlyクラスに渡す

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

    wiflyUart.begin(9600); // WiFiシールドUARTポートを開始

    Serial.begin(9600); // Arduinoシリアルポートを開始
    Serial.println("--------- TCP Communication --------");

    // WiFlyの初期化を待つ
    delay(1000);

    wifly.reset(); // シールドをリセット
    delay(1000);

    wifly.sendCommand("set ip local 80\r"); // ローカル通信ポートを80に設定
    delay(100);

    wifly.sendCommand("set comm remote 0\r"); // 接続が開かれたときにデフォルト文字列を送信しない
    delay(100);

    wifly.sendCommand("set comm open *\r"); // 接続が開かれたときにWiFiシールドが出力する文字列または文字を設定 "*"
    delay(100);

    wifly.sendCommand("set ip protocol 2\r"); // TCPプロトコルを設定
    delay(100);

    Serial.println("Join " SSID );
    if (wifly.join(SSID, KEY, AUTH)) {
        Serial.println("OK");
    } else {
        Serial.println("Failed");
    }

    delay(5000);

    wifly.sendCommand("get ip\r");
    char c;

    while (wifly.receive((uint8_t *)&c, 1, 300) > 0) { // get ipコマンドの応答を表示
        Serial.print((char)c);
    }

    Serial.println("TCP Ready");
}

void loop()
{

    if(wifly.available())
    {
        delay(1000); // WiFiシールドに送信されるすべての文字を待つ
        char val = wiflyUart.read(); // 最初の文字を読み取る

        if(flag == FLAG_MAIN_MENU)
        {
            switch(val)
            {
                case '*': // 新しい接続文字列を検索
                printMainMenu();
                break;
                case '1': // ユーザーが1を入力、ピン状態を表示
                printPinStates();
                printMainMenu();
                break;
                case '2': // ユーザーが2を入力、サブメニューを表示（特定のピンを選択するオプション）
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
            int pinNumber = val-48; // 最初の数字を取得、例: ピン13の場合、最初の数字は1
            int secondNumber = (wiflyUart.read()-48);
            if(secondNumber>=0 && secondNumber<=9)
            {
                pinNumber*=10;
                pinNumber +=secondNumber; // 2番目の数字を取得、例: ピン番号が13の場合、2番目の数字は3、それを最初の数字に加える
            }

            // "You want to toggle pin x?? OK..." 文字列を作成
            String response = "\r\nYou want to toggle pin ";
            response+=pinNumber;
            response+="? OK...\r\n";

            wiflyUart.print(response);

            digitalWrite(pinNumber, !digitalRead(pinNumber)); // ピンを切り替え

            wiflyUart.print("Pin Toggled!\r\n"); // ピンが切り替えられたことをユーザーに通知
            printMainMenu();
            flag = FLAG_MAIN_MENU;
        }
    }

}

/*
* メインメニューオプションを表示
*/
void printMainMenu()
{
    wiflyUart.print("\r\n\r\n");
    wiflyUart.print("Arduino Console Menu: \r\n");
    wiflyUart.print("1. Show digital pin states\r\n");
    wiflyUart.print("2. Toggle a digital pin's state\r\n");
    wiflyUart.print("\r\n\r\n");
}

// ピン状態を表示
void printPinStates()
{

    String pinState = "Pin 7 is ";
    pinState+=getPinState(7);
    pinState+="\r\n";

    pinState += "Pin 11 is ";
    pinState+=getPinState(11);
    pinState+="\r\n";

    pinState += "Pin 12 is ";
    pinState+=getPinState(12);
    pinState+="\r\n";

    pinState += "Pin 13 is ";
    pinState+=getPinState(13);
    pinState+="\r\n";

    wiflyUart.print(pinState);
}

// ピン番号を入力するオプションを表示
void printSubMenu2()
{
    wiflyUart.print("\r\nEnter the pin number you wish to toggle: ");
}

// ピン状態を文字列として取得
String getPinState(int pinNumber)
{
    if(digitalRead(pinNumber)) // ピンがONかOFFかを確認
    {
        return "ON"; // ピンがON
    }
    else
    {
        return "OFF";  // ピンがOFF
    }
}
```

**ステップ 3: シールドのIPアドレスとポートを取得**

Arduinoのシリアルモニターウィンドウを開き、WiFiシールドのIPアドレスとポート番号を取得します。以下の画像でハイライトされています。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Tcp-arduino-serial-comm.png)

*TCPの例からのArduinoシリアルモニタウィンドウ出力。IPアドレスとポート番号が強調表示されています。*

上記の画像では、IPアドレスとポートは以下の通りです：

    192.168.0.10:80

**ステップ 4: TCPターミナルを設定してシールドに接続する**

RealTermを開き、「Display」タブで「Rows」に「30」を入力し、「Scrollback」オプションを選択します：

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Realterm-display-tab.png)

*RealTermウィンドウ：行数 = 30、Scrollbackオプションが選択されています。*

RealTermプログラムの「Port」タブで、シールドのIPアドレスとポート（例：192.168.0.10:80）を入力し、「Open」ボタンをクリックします。Arduinoのハードコードされたメインメニューがターミナルに表示されるはずです。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Realterm-port-tab.png)

*RealTermウィンドウ。PortフィールドにWiFiシールドのIPアドレスとポート番号が入力されています。Arduinoのメニューが表示されています。*

「Send」タブでメニューから「1」または「2」のいずれかのオプションを選択し、テキストボックスに入力して「Send ASCII」を押して値を送信します。

例えば、ピン13をトグルするには「2」を入力して「Send ASCII」を押し、「Enter the pin number you wish you toggle」と表示されたら「13」を入力して「Send ASCII」をクリックします。Arduinoは「Pin Toggled!」と応答し、メインメニューに戻ります。その後、「1」を入力して「Send ASCII」を押すと、ピンの現在の状態が表示されます。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Realterm-send-tab.png)

*RealTermウィンドウ。ピン13の状態がOFFからONに変更されたことが黄色のテキストで示されています。*

### 例 9: WiFiシールドとリレーシールド

WiFiシールドを介して情報を送受信する方法を理解した今、ウェブを通じてどのようなデバイスでも簡単に制御できることがわかるでしょう。

デスクランプ、モーター、または水ポンプなどの高出力デバイスをウェブページや電話アプリケーションを介して制御したい場合は、[Relay Shield V2.0](/ja/Relay_Shield_v3)をお勧めします。

Relay Shield V2.0はピン4、5、6、7を使用するため、このページの例のコードと完全に互換性があります。

### 例 10: Adhocモード

シールドをAdhocモード（アクセスポイントとして）で使用するには、シールドのピンIO9をArduinoの3.3Vピンに接続し、シールドがオンの場合はリセットします。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-adhoc-mode-hardware-connection.png)

*Adhocモードに必要なシールド接続。シールドのピンIO9が3.3Vに接続されています。*

シールドのSSIDを取得するには、例1のコードをArduinoにアップロードし、シリアルモニタを開きます。シールドは以下の例のようにSSIDを応答します。この場合、**WiFly-EZX-1b**がSSIDです。

    AP mode as WiFly-EZX-1b on chan 1

これで、WiFiシールドにアクセスポイントとして接続できるはずです。例えば、SSIDがPCの利用可能なWiFiネットワークのリストに表示されるはずです。

Adhocモードについてさらに詳しく知りたい場合は、[WiFly RN User Manual](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf)のセクション16「Adhoc Networking Mode」をご覧ください。

## FAQs

**Q1: MegaでWiFiシールドを使用する際の設定方法は？**

A1: 以下の手順に従ってください。SoftwareSerialに関する詳細情報は[SoftwareSerialライブラリ](https://arduino.cc/en/Reference/SoftwareSerial)をご参照ください。

- ジャンパーワイヤーを使用してD2をD10に、D3をD11に接続します。
- プログラムを以下のように修正します: Wifly(2,3); → Wifly(10,11);

**Q2: WiFiシールドはArduino Dueと互換性がありますか？**

A2: WiFiシールドはArduino Dueで動作します。ハードウェア上では、Arduino Dueの4つのシリアルポートのいずれかを介して接続できます（Serial 1-3を使用する場合はジャンパーワイヤーで接続する必要があります）。現在のWiFiシールドライブラリはSoftwareSerialを使用していますが、Arduino Dueのシリアルポートに変更する必要があります。

**Q3: WiFiシールドとルーター間の接続性を向上させる方法は？**

A3: アンテナにプラスチックやその他の誘電材料を接触させないでください。アンテナの近くに金属物体があると、アンテナが自由に放射するのを妨げます。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/Wifi_Shield_v2.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- [WiFi Shield V2.0 Eagleファイル](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/Wifi_Shield_v2.0.zip)
- [回路図PDF](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/Wifi_shield_v2_schematic.pdf)
- [RN-171データシート](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-171.pdf)
- [WiFiシールドライブラリ](https://github.com/Seeed-Studio/WiFi_Shield)
- [WiFiモジュールユーザーマニュアル](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf) *-- シールド内のRN-171モジュールのすべてのコマンドが記載されています。*
- [Seeeduinoとは](/ja/Seeeduino_v4.2)
- [w3schools](http://www.w3schools.com/) HTML、Javascript、JQueryを学ぶのに最適なウェブサイト

<!-- このMarkdownファイルはhttps://www.seeedstudio.com/wiki/Wifi_Shield_V2.0から作成されました -->

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
