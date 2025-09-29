---
description: Ethernet拡張ボード
title: Ethernet拡張ボード
keywords:
- Wio_terminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-Ethernet
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio TerminalのEthernet接続

このWikiでは、Wio Terminalで安定したネットワーク接続を実現するために[**ENC28J60 OVERLAYS HAT for Raspberry Pi**](https://www.seeedstudio.com/ENC28J60-OVERLAYS-HAT-for-Raspberry-pi-p-3045.html)を使用する方法を紹介します。これは、Raspberry Pi 40ピン拡張ボードをWio Terminalで使用する完璧な例です。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/twitter.png"/></div>

## 必要なハードウェア

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**ENC28J60 OVERLAYS HAT for Raspberry Pi**](https://www.seeedstudio.com/ENC28J60-OVERLAYS-HAT-for-Raspberry-pi-p-3045.html)

- *Wio Terminal用40ピンPi HATアダプタボード（未発売）*

## ハードウェア接続

> 現時点では、ソフトウェアをテストする場合、リード線を飛ばして接続する必要があります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/enc-wio.png"/></div>

- EthernetケーブルをENC28J60 Overlays Hatに接続します。

## UIPEthernet Arduinoライブラリのインストール

1. [UIPEthernet](https://github.com/UIPEthernet/UIPEthernet)リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、ライブラリをArduino IDEにインストールします。Arduino IDEを開き、`スケッチ` -> `ライブラリを含める` -> `ZIP形式のライブラリを追加`をクリックし、先ほどダウンロードした`UIPEthernet`ファイルを選択します。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## シンプルなDHCP例

この例では、DHCPを使用してネットワークホストからネットワーク構成を自動的に取得します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/DHCP.png"/></div>

### サンプルコード

```cpp
#include <UIPEthernet.h>

uint8_t mac[6] = {0x74,0x69,0x69,0x2D,0x30,0x31};

void setup() {
  // 初回実行時のセットアップコードを記述
  Serial.begin(9600);
  while(!Serial);
  Serial.println(F("[testDHCP]"));
  
  Serial.print("MAC: ");
  for (byte i = 0; i < 6; ++i) {
    Serial.print(mac[i], HEX);
    if (i < 5)
      Serial.print(':');
  }
  Serial.println();
  
  if (Ethernet.begin(mac) != 1) {
     Serial.println("DHCPを使用してEthernetの設定に失敗しました");
     while (true) {
        delay(1); // Ethernetハードウェアがない場合は何もしない
     }
  }
  
  Serial.print("My IP: ");
  Serial.println(Ethernet.localIP());
  Serial.print("Netmask: ");
  Serial.println(Ethernet.subnetMask());
  Serial.print("Gateway IP: ");
  Serial.println(Ethernet.gatewayIP());
  Serial.print("DNS: ");
  Serial.println(Ethernet.dnsServerIP());
}

void loop() {
  // 繰り返し実行されるメインコードを記述
}
```

## 静的IPによるネットワーク接続

DHCPの代わりに、異なる目的でネットワークホストに接続するために静的IPを使用することもできます。この例では、静的IP、ネットマスク、ゲートウェイ、およびDNSを設定することで、ネットワークへの接続を手動で構成する方法を示します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/Static.png"/></div>

### サンプルコード

:::note
特定のゲートウェイやDNSにデバイスを接続する必要がある場合（例：バイパスモードのルーター/ゲートウェイ）、非常に便利です。
:::

```cpp
#include <UIPEthernet.h>

// 静的設定、以下をネットワークに応じて変更してください
uint8_t mac[6] = {0x74,0x69,0x69,0x2D,0x30,0x31};
IPAddress myIP = {10,0,0,111};
IPAddress myMask = {255,255,255,0};
IPAddress myGatewayIP = {10,0,0,127};
IPAddress myDNS = {10,0,0,127};

void setup() {
  // 初回実行時のセットアップコードを記述
  Serial.begin(9600);
  while(!Serial);
  Serial.println(F("[getStaticIP]"));
  
  Serial.print("MAC: ");
  for (byte i = 0; i < 6; ++i) {
    Serial.print(mac[i], HEX);
    if (i < 5)
      Serial.print(':');
  }
  Serial.println();
  
  Ethernet.begin(mac,myIP, myDNS, myGatewayIP, myMask);

  Serial.print("My IP: ");
  Serial.println(Ethernet.localIP());
  Serial.print("Netmask: ");
  Serial.println(Ethernet.subnetMask());
  Serial.print("Gateway IP: ");
  Serial.println(Ethernet.gatewayIP());
  Serial.print("DNS: ");
  Serial.println(Ethernet.dnsServerIP());  
}

void loop() {
  // 繰り返し実行されるメインコードを記述
}
```

## シンプルなWebクライアント

Ethernetを介してネットワーク接続が確立されたら、それを使用してTCPクライアントを構築できます。例えば、インターネット（HTTP）からデータを取得したり、同じネットワーク内のサーバーからデータを取得したりすることが可能です。

この例では、まずDHCPを使用して設定を試み、失敗した場合は静的IPを割り当てます。この例では、`www.bing.com`に接続し、シリアルモニターに結果を表示します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/TCPclient.png"/></div>

### サンプルコード

```cpp
#include <UIPEthernet.h>

// 以下にコントローラー用のMACアドレスを入力してください。
byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };

char server[] = "www.bing.com";

// DHCPが失敗した場合に使用する静的IPアドレスを設定
IPAddress myIP(10, 0, 0, 187);
IPAddress myMask = {255,255,255,0};
IPAddress myGatewayIP = {10,0,0,127};
IPAddress dnsIP(10, 0, 0, 127);

// Ethernetクライアントライブラリを初期化
// 接続したいサーバーのIPアドレスとポートを指定
// （HTTPのデフォルトポートは80です）:
EthernetClient client;

// スピードを測定するための変数
unsigned long beginMicros, endMicros;
unsigned long byteCount = 0;
bool printWebData = true;  // スピード測定を改善するためにfalseに設定可能

void setup() {
  // シリアル通信を開始し、ポートが開くのを待つ:
  Serial.begin(9600);
  while (!Serial) {
    ; // ネイティブUSBポートのみ必要なシリアルポート接続待機
  }

  // Ethernet接続を開始:
  Serial.println("DHCPを使用してEthernetを初期化:");
  if (Ethernet.begin(mac) == 0) {
    Serial.println("DHCPを使用してEthernetの設定に失敗しました");
    // Ethernetハードウェアが存在するか確認
    if (Ethernet.hardwareStatus() == EthernetNoHardware) {
      Serial.println("Ethernetシールドが見つかりませんでした。ハードウェアなしでは実行できません。:(");
      while (true) {
        delay(1); // Ethernetハードウェアなしでは何もせず停止
      }
    }
    if (Ethernet.linkStatus() == LinkOFF) {
      Serial.println("Ethernetケーブルが接続されていません。");
    }
    // DHCPの代わりにIPアドレスを使用して設定を試みる:
    Ethernet.begin(mac, myIP, dnsIP, myGatewayIP, myMask);
  } else {
    Serial.print("  DHCPが割り当てたIP ");
    Serial.println(Ethernet.localIP());
  }
  // Ethernetシールドの初期化に1秒待機:
  delay(1000);
  Serial.print("接続先: ");
  Serial.print(server);
  Serial.println("...");

  // 接続が確立した場合、シリアルで報告:
  if (client.connect(server, 80)) {
    Serial.print("接続先: ");
    Serial.println(client.remoteIP());
    // HTTPリクエストを送信:
    client.println("GET /search?q=WioTerminal HTTP/1.1");
    client.println("Host: www.bing.com");
    client.println("Connection: close");
    client.println();
  } else {
    // サーバーへの接続が失敗した場合:
    Serial.println("接続失敗");
  }
  beginMicros = micros();
}

void loop() {
  // サーバーからの受信バイトが利用可能な場合
  // 読み取り、シリアルに表示:
  int len = client.available();
  if (len > 0) {
    byte buffer[80];
    if (len > 80) len = 80;
    client.read(buffer, len);
    if (printWebData) {
      Serial.write(buffer, len); // シリアルモニターに表示（いくつかのボードでは速度が低下）
    }
    byteCount = byteCount + len;
  }

  // サーバーが切断された場合、クライアントを停止:
  if (!client.connected()) {
    endMicros = micros();
    Serial.println();
    Serial.println("切断中。");
    client.stop();
    Serial.print("受信したデータ量: ");
    Serial.print(byteCount);
    Serial.print(" バイト, 時間: ");
    float seconds = (float)(endMicros - beginMicros) / 1000000.0;
    Serial.print(seconds, 4);
    float rate = (float)byteCount / seconds / 1000.0;
    Serial.print(", 速度 = ");
    Serial.print(rate);
    Serial.print(" kbytes/秒");
    Serial.println();

    // 永久に停止:
    while (true) {
      delay(1);
    }
  }
}
```

## Webサーバーの例

一方で、セットアップをWebサーバーとして実行し、同じネットワーク内の他のデバイスが接続できるようにすることも可能です（例：Wio Terminalで観測されたセンサー値を読み取る）。これは、Ethernetの安定性がWi-Fiよりもはるかに優れているため、いくつかのケースで非常に有用です。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/TCPserver.png"/></div>

### サンプルコード

この例では、自身をWebサーバーとして設定し、`A0`から`A5`までの値を表示する簡単なWebページをセットアップします。同じネットワークに接続されたPCからIPアドレスを介してアクセスできます。

```cpp
#include <UIPEthernet.h>

// 以下にコントローラー用のMACアドレスとIPアドレスを入力してください。
// IPアドレスはローカルネットワークに依存します。
byte mac[] = {
  0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED
};
IPAddress ip(10, 0, 0, 123);

// Ethernetサーバーライブラリを初期化します。
// 使用するIPアドレスとポートを指定してください。
// （HTTPのデフォルトポートは80です）
EthernetServer server(80);

void setup() {
  // シリアル通信を開始し、ポートが開くのを待ちます。
  Serial.begin(9600);
  while (!Serial) {
    ; // シリアルポートが接続されるのを待機します。ネイティブUSBポートのみ必要です。
  }
  Serial.println("Ethernet WebServer Example");

  // Ethernet接続とサーバーを開始します。
  Ethernet.begin(mac, ip);

  // Ethernetハードウェアが存在するか確認します。
  if (Ethernet.hardwareStatus() == EthernetNoHardware) {
    Serial.println("Ethernetシールドが見つかりませんでした。申し訳ありませんが、ハードウェアなしでは実行できません。:(");
    while (true) {
      delay(1); // Ethernetハードウェアがない場合は何もしません。
    }
  }
  if (Ethernet.linkStatus() == LinkOFF) {
    Serial.println("Ethernetケーブルが接続されていません。");
  }

  // サーバーを開始します。
  server.begin();
  Serial.print("サーバーのIPアドレス: ");
  Serial.println(Ethernet.localIP());
}

void loop() {
  // クライアントの接続を待機します。
  EthernetClient client = server.available();
  if (client) {
    Serial.println("新しいクライアントが接続されました");
    // HTTPリクエストは空行で終了します。
    bool currentLineIsBlank = true;
    while (client.connected()) {
      if (client.available()) {
        char c = client.read();
        Serial.write(c);
        // 行の終わり（改行文字を受信）に到達し、行が空白の場合、HTTPリクエストが終了したため、返信を送信できます。
        if (c == '\n' && currentLineIsBlank) {
          // 標準的なHTTPレスポンスヘッダーを送信します。
          client.println("HTTP/1.1 200 OK");
          client.println("Content-Type: text/html");
          client.println("Connection: close");  // レスポンス完了後に接続が閉じられます。
          client.println("Refresh: 5");  // ページを5秒ごとに自動更新します。
          client.println();
          client.println("<!DOCTYPE HTML>");
          client.println("<html>");
          // 各アナログ入力ピンの値を出力します。
          for (int analogChannel = 0; analogChannel < 6; analogChannel++) {
            int sensorReading = analogRead(analogChannel);
            client.print("アナログ入力 ");
            client.print(analogChannel);
            client.print(" の値は ");
            client.print(sensorReading);
            client.println("<br />");
          }
          client.println("</html>");
          break;
        }
        if (c == '\n') {
          // 新しい行を開始します。
          currentLineIsBlank = true;
        } else if (c != '\r') {
          // 現在の行に文字を受信しました。
          currentLineIsBlank = false;
        }
      }
    }
    // Webブラウザがデータを受信する時間を与えます。
    delay(1);
    // 接続を閉じます。
    client.stop();
    Serial.println("クライアントが切断されました");
  }
}
```

### Webサーバーのテスト

このセットアップを使用して簡単なテストスケッチも提供します。

>これは、Webサーバーを10時間以上pingしたスクリーンショットです。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/moretest.png"/></div>

- 同じネットワーク内で、コンピューターを使用してサーバーのIPをpingします。

```cpp
#include <UIPEthernet.h>

// 静的IP設定
uint8_t mac[6] = {0x74,0x69,0x69,0x2D,0x30,0x31};
IPAddress myIP = {10,0,0,111};
EthernetServer server = EthernetServer(80);

void setup() {
  Serial.begin(9600);
  while(!Serial);
  Ethernet.begin(mac, myIP);
  server.begin();

  Serial.print("自分のIP: ");
  Serial.println(Ethernet.localIP());
  Serial.print("ネットマスク: ");
  Serial.println(Ethernet.subnetMask());
  Serial.print("ゲートウェイIP: ");
  Serial.println(Ethernet.gatewayIP());
  Serial.print("DNS: ");
  Serial.println(Ethernet.dnsServerIP());
}

void loop() {
  // クライアントを取得
  EthernetClient client = server.available();
  if(client && client.connected()) {
        // 処理を実行（HTTPを解析して応答するが、他の処理は行わない）
        client.stop();
  }
}
```

## UDPを使用したNTP時間の取得

特定の状況では、ネットワーク通信にUDPが使用されます。[**NTP**](https://en.wikipedia.org/wiki/Network_Time_Protocol)はその完璧な例です。この例では、`time.nist.gov` NTPサーバーから時間を取得し、シリアルモニターに出力します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/UDP.png"/></div>

### サンプルコード

```cpp
#include <UIPEthernet.h>

// 以下にコントローラー用のMACアドレスを入力してください。
// 新しいEthernetシールドには、シールド上のステッカーにMACアドレスが印刷されています。
byte mac[] = {
  0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED
};

unsigned int localPort = 8888;       // UDPパケットをリッスンするローカルポート

const char timeServer[] = "time.nist.gov"; // time.nist.gov NTPサーバー

const int NTP_PACKET_SIZE = 48; // NTPタイムスタンプはメッセージの最初の48バイトに含まれています

byte packetBuffer[NTP_PACKET_SIZE]; // 受信および送信パケットを保持するバッファ

// UDPインスタンスを作成してUDP経由でパケットを送受信します
EthernetUDP Udp;

void setup() {
  // シリアル通信を開始し、ポートが開くのを待ちます:
  Serial.begin(9600);
  while (!Serial) {
    ; // シリアルポートが接続されるのを待ちます。ネイティブUSBポートのみ必要です。
  }

  // EthernetとUDPを開始
  if (Ethernet.begin(mac) == 0) {
    Serial.println("DHCPを使用してEthernetの設定に失敗しました");
    // Ethernetハードウェアが存在するか確認
    if (Ethernet.hardwareStatus() == EthernetNoHardware) {
      Serial.println("Ethernetシールドが見つかりませんでした。申し訳ありませんが、ハードウェアなしでは動作できません。:(");
    } else if (Ethernet.linkStatus() == LinkOFF) {
      Serial.println("Ethernetケーブルが接続されていません。");
    }
    // 続行する意味がないため、永久に何もしません:
    while (true) {
      delay(1);
    }
  }
  Udp.begin(localPort);
}

void loop() {
  sendNTPpacket(timeServer); // 時刻サーバーにNTPパケットを送信

  // 応答が利用可能かどうかを確認するために待機
  delay(1000);
  if (Udp.parsePacket()) {
    // パケットを受信したので、データを読み取ります
    Udp.read(packetBuffer, NTP_PACKET_SIZE); // バッファにパケットを読み取ります

    // タイムスタンプは受信したパケットの40バイト目から始まり、4バイトまたは2ワードの長さです。
    // まず、2つのワードを抽出します:

    unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);
    unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);
    // 4バイト（2ワード）を長整数に結合します
    // これはNTP時間（1900年1月1日からの秒数）です:
    unsigned long secsSince1900 = highWord << 16 | lowWord;
    Serial.print("1900年1月1日からの秒数 = ");
    Serial.println(secsSince1900);

    // 次にNTP時間を通常の時間に変換します:
    Serial.print("Unix時間 = ");
    // Unix時間は1970年1月1日から始まります。秒数では2208988800です:
    const unsigned long seventyYears = 2208988800UL;
    // 70年を減算します:
    unsigned long epoch = secsSince1900 - seventyYears;
    // Unix時間を出力:
    Serial.println(epoch);

    // 時、分、秒を出力:
    Serial.print("UTC時間は ");       // UTCはグリニッジ標準時（GMT）です
    Serial.print((epoch  % 86400L) / 3600); // 時間を出力（86400は1日の秒数）
    Serial.print(':');
    if (((epoch % 3600) / 60) < 10) {
      // 各時間の最初の10分間では、先頭に'0'を付けます
      Serial.print('0');
    }
    Serial.print((epoch  % 3600) / 60); // 分を出力（3600は1分の秒数）
    Serial.print(':');
    if ((epoch % 60) < 10) {
      // 各分の最初の10秒間では、先頭に'0'を付けます
      Serial.print('0');
    }
    Serial.println(epoch % 60); // 秒を出力
  }
  // 再度時刻を要求する前に10秒待機
  delay(10000);
  Ethernet.maintain();
}

// 指定されたアドレスの時刻サーバーにNTPリクエストを送信
void sendNTPpacket(const char * address) {
  // バッファ内のすべてのバイトを0に設定
  memset(packetBuffer, 0, NTP_PACKET_SIZE);
  // NTPリクエストを形成するために必要な値を初期化
  // （パケットの詳細については上記URLを参照）
  packetBuffer[0] = 0b11100011;   // LI、バージョン、モード
  packetBuffer[1] = 0;     // 層、または時計の種類
  packetBuffer[2] = 6;     // ポーリング間隔
  packetBuffer[3] = 0xEC;  // ピア時計の精度
  // ルート遅延とルート分散のための8バイトのゼロ
  packetBuffer[12]  = 49;
  packetBuffer[13]  = 0x4E;
  packetBuffer[14]  = 49;
  packetBuffer[15]  = 52;

  // すべてのNTPフィールドに値が設定されたので、
  // タイムスタンプを要求するパケットを送信できます:
  Udp.beginPacket(address, 123); // NTPリクエストはポート123に送信されます
  Udp.write(packetBuffer, NTP_PACKET_SIZE);
  Udp.endPacket();
}
```

## Twitter送信の例

これは Wio Terminal を使用してTwitterに投稿する楽しい例です。この例では、HTTPsの直接接続を回避するために [Arduino用Tweetライブラリ](http://arduino-tweet.appspot.com/) を使用します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/twitter.png"/></div>

### Arduino用Tweetライブラリのインストール

1. [Arduno-Twitter-library](https://github.com/NeoCat/Arduno-Twitter-library) のリポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードしてください。

2. 次に、このライブラリをArduino IDEにインストールします。Arduino IDEを開き、`スケッチ` -> `ライブラリを含める` -> `ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `Arduno-Twitter-library` ファイルを選択してください。

:::note
これはTwitterへの接続を行うための回避策であり、安全ではない可能性があります。自己責任で行ってください。
:::

### トークンの取得

OAuthを使用してメッセージを投稿するためのトークンを取得するには、[**こちら**](http://arduino-tweet.appspot.com/oauth/twitter/login) をクリックしてください。

>詳細については [http://arduino-tweet.appspot.com/](http://arduino-tweet.appspot.com/) を参照してください。

### サンプルコード

- 上記で取得したトークンをコピーし、Arduinoスケッチに貼り付けてください。

```cpp
/*
 *  詳細は http://arduino-tweet.appspot.com/ を参照してください
 */
 
#include <UIPEthernet.h>
#include <Twitter.h>

uint8_t mac[6] = {0x74,0x69,0x69,0x2D,0x30,0x31};

// Tweetするためのトークン (http://arduino-tweet.appspot.com/ から取得してください)
Twitter twitter("YOUR-TOKEN-HERE");

// 投稿するメッセージ
char msg[] = "Hello, World! I'm Arduino!";

void setup()
{
  delay(1000);
  Ethernet.begin(mac);
  // または、DHCPを使用して自動的にIPアドレスを設定することもできます。
  // Ethernet.begin(mac);
  Serial.begin(9600);
  while(!Serial);
  
  Serial.println("接続中...");
  if (twitter.post(msg)) {
    // 受信したレスポンスをSerialに出力するには &Serial を指定します。
    // 出力が不要な場合は引数を省略できます。例:
    // int status = twitter.wait();
    int status = twitter.wait(&Serial);
    if (status == 200) {
      Serial.println("成功しました。");
    } else {
      Serial.print("失敗 : コード ");
      Serial.println(status);
    }
  } else {
    Serial.println("接続に失敗しました。");
  }
}

void loop()
{
}
```