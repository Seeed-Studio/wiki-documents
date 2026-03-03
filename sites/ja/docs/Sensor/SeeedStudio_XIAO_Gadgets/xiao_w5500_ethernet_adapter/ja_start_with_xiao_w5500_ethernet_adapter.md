---
description: XIAO W5500 Ethernet Adapter の使用開始
title: XIAO W5500 Ethernet Adapter の使用開始
keywords:
  - ethernet
  - w5500
image: https://files.seeedstudio.com/wiki/xiao_w5500_poe/0.webp
sidebar_position: 9
slug: /xiao_w5500_ethernet_adapter
sku: 113100042
last_update:
  date: 06/04/2025
  author: Citric
---

## はじめに

XIAO ESP32S3 Plus を搭載したコンパクトな PoE 開発ボードで、統合された絶縁型 PoE モジュールと TPS563201 ベースの電源変換により、マイクロコントローラーに電力を供給するクリーンな 5V 電源を提供します。IoT プロジェクト、スマートホームデバイス、産業オートメーションに最適で、信頼性の高い Ethernet 接続と低消費電力ワイヤレス処理の多用途な組み合わせにより、設置を簡素化し、システム性能を向上させます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/0.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-W5500-Ethernet-Adapter-p-6472.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

### 特徴

- **高性能マイクロコントローラー**: XIAO ESP32S3 Plus プラットフォーム上に構築されたボードは、堅牢な処理能力と効率的なワイヤレス接続を提供し、複雑な IoT および組み込みアプリケーションに最適です。

- **絶縁・電源変換機能付き統合 PoE**: 内蔵絶縁機能を備えた堅牢な PoE モジュールを搭載し、12V Ethernet 電源入力を安全に受け入れます。高効率 TPS563201 降圧コンバーターが 12V を安定した 5V レールに降圧し、XIAO ESP32S3 Plus に最適な電力を提供します。

- **信頼性の高い Ethernet 接続**: オンボード W5500 Ethernet チップと標準 RJ45 ジャックを搭載し、シームレスなデータ伝送とリモート管理のための安定した有線ネットワークアクセスを確保します。

- **多用途 I/O オプション**: 両面 I/O 出力により、機能を簡単に拡張し、さまざまなセンサーや周辺機器とインターフェースして、アプリケーションを正確な仕様にカスタマイズできます。

- **コンパクトで即座に展開可能な設計**: 統合 PoE、絶縁回路、Ethernet 接続を小型フォームファクターに組み合わせ、プロトタイピングを簡素化し、スマートホーム、産業オートメーション、ネットワーク機器プロジェクトでの効率的な展開を可能にします。

### 仕様

<div class="table-center">
 <table align="center">
  <tr>
   <th>パラメータ</th>
   <th>説明</th>
  </tr>
  <tr>
   <td>MCU</td>
   <td>XIAO ESP32-S3 Plus</td>
  </tr>
  <tr>
   <td>アンテナ</td>
   <td>2.4GHz ロッドアンテナ (2.81dBi)</td>
  </tr>
  <tr>
   <td>USB Type-C</td>
   <td>入力電圧 (Type-C): 5V</td>
  </tr>
  <tr>
   <td>PoE チップ</td>
   <td>MQ7813T120</td>
  </tr>
  <tr>
   <td>PoE 電源</td>
   <td>PoE IEEE802.3af<br />出力電流: 12V/1.1A<br />高効率 86% (入力 48V、負荷 12V@1.1A)</td>
  </tr>
  <tr>
   <td>Ethernet チップ</td>
   <td>WIZnet W5500</td>
  </tr>
  <tr>
   <td>Ethernet インターフェース</td>
   <td>RJ45<br />10 または 100Mbps Ethernet</td>
  </tr>
  <tr>
   <td>TCP/IP プロトコル</td>
   <td>TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE</td>
  </tr>
  <tr>
   <td>LED インジケーター</td>
   <td>電源 x 1<br />ユーザー x 1</td>
  </tr>
  <tr>
   <td>ボタン</td>
   <td>リセット</td>
  </tr>
  <tr>
   <td>I/O インターフェース</td>
   <td></td>
  </tr>
  <tr>
   <td>製品サイズ</td>
   <td>83 x 118 x 26 mm</td>
  </tr>
  <tr>
   <td>製品重量</td>
   <td>75g</td>
  </tr>
  <tr>
   <td>筐体</td>
   <td>白色 3D プリント</td>
  </tr>
 </table>
</div>

## ハードウェア概要

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Product Appearance" label="製品外観">

以下の画像は、XIAO W5500 Ethernet Adapter の外部設計を示しています。コンパクトなフォームファクター、Ethernet ポート、XIAO シリーズマイクロコントローラーとの接続インターフェースを確認できます。この設計により、スペースと信頼性が重要なさまざまなプロジェクトへの簡単な統合が可能になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/2.jpg" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/3.jpg" style={{width:800, height:'auto'}}/></div>

</TabItem>

<TabItem value="Inside the Product" label="製品内部">

以下の画像は、XIAO W5500 Ethernet Adapter の内部を示しています。ここでは、内部 PCB レイアウト、W5500 Ethernet コントローラーチップ、安定した Ethernet 通信とオプションの Power over Ethernet (PoE) 機能を可能にする支援回路を観察できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/1.jpg" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

## 使用開始

### 配線手順

XIAO W5500 Ethernet Adapter をネットワークに接続する推奨方法は 2 つあります：

1. **PoE 対応スイッチまたはルーターの使用:**
   - 標準 RJ45 Ethernet ケーブルを使用して、デバイスを PoE 対応スイッチまたはルーターに直接接続します。この設定では、データと電力の両方が同じケーブルで配信されるため、XIAO ボードに別途電力を供給する必要がありません。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/4.jpg" style={{width:600, height:'auto'}}/></div>

2. **標準 Ethernet ケーブルの使用:**
   - 通常の Ethernet ケーブル（PoE なし）を使用する場合は、一端をネットワークに、もう一端を XIAO W5500 Ethernet Adapter に接続します。この場合、Ethernet ケーブルはデータ接続のみを提供するため、XIAO ボードを USB-C ポート経由で安定した 5V 電源で別途電力供給する必要があります。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/6.jpg" style={{width:600, height:'auto'}}/></div>

> **ヒント:** Ethernet ケーブルがセットアップに十分な長さで、良好な状態であることを確認して、信頼性の高い通信を保証してください。

### リセットボタン

XIAO W5500 Ethernet Adapter にはリセットボタンが装備されています。デバイスのプログラムが期待通りに動作しない場合や、システムを再起動する必要がある場合は、リセットボタンを一度押すだけです。これによりデバイスが再起動し、プログラムが再初期化され、予期しない状態やエラーからの回復に役立ちます。

## ESP32 Arduino Ethernet ライブラリ

XIAO W5500 Ethernet Adapter は、ネットワーク接続に ESP32 Arduino Ethernet ライブラリを使用します。このライブラリは、Ethernet 接続の管理、イベントの処理、ESP32 ベースボードでのネットワークアプリケーションの構築のための API と例を提供します。

詳細、高度な使用法、最新の更新については、公式 Espressif ドキュメントを参照してください：[ESP32 Arduino Ethernet ライブラリドキュメント](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/ethernet.html)

## XIAO 例

必要なライブラリをインストールし、基本機能を理解したので、XIAO W5500 Ethernet Adapter の実用的な例を探ってみましょう。これらのデモは、開始に役立ち、独自のプロジェクト用にコードを適応させる方法を示します。

**ステップ 1.** Arduino アプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong></a>
</div><br />

**ステップ 2.** 開発ボードモデルを選択し、Arduino IDE に追加します。

- 後のルーチンで **Seeed Studio XIAO ESP32-S3 Plus** を使用するには、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started#software-preparation)** を参照して追加を完了してください。

**ステップ 3.** 必要な材料

以下の例を完了するには、下記のハードウェアが必要です。XIAO W5500 Ethernet Adapter に加えて、セットアップに十分な長さの Ethernet ケーブルがあることを確認してください。Power over Ethernet (PoE) 機能付きケーブル、または標準 Ethernet ケーブルを使用できます。標準 Ethernet ケーブル（PoE なし）を使用する場合は、XIAO ボードが安定した 5V 電源で別途電力供給されていることを確認してください。

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO W5500 Ethernet Adapter</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/5.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/ja/xiao_w5500_ethernet_adapter" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### デモ 1: Ethernet イベントロガー

**目的:**
このデモは、MAC アドレスと現在の IP アドレス（DHCP によって割り当てられた）を含む Ethernet イベントをシリアルコンソールにログ出力します。W5500 Ethernet インターフェースの初期化とステータス監視の方法を示します。

**典型的な使用例:**
ハードウェアセットアップとネットワーク接続を確認するための出発点として使用します。デバッグや、Ethernet ステータスの監視やネットワークイベントのログ出力が必要なプロジェクトに有用です。

```cpp
#include <SPI.h>
#include <ETH.h>
#include <WiFi.h>

static bool eth_connected = false;

#ifndef ETH_PHY_CS
#define ETH_PHY_TYPE ETH_PHY_W5500
#define ETH_PHY_ADDR 1
#define ETH_PHY_CS   D1
#define ETH_PHY_IRQ  -1
#define ETH_PHY_RST  -1
#endif

// SPI pins
#define ETH_SPI_SCK  D8
#define ETH_SPI_MISO D9
#define ETH_SPI_MOSI D10


// React to Ethernet events:
void onEvent(arduino_event_id_t event, arduino_event_info_t info)
{
  switch (event) {

    case ARDUINO_EVENT_ETH_START:
      // This will happen during setup, when the Ethernet service starts
      Serial.println("ETH Started");
      //set eth hostname here
      ETH.setHostname("esp32-ethernet");
      break;

    case ARDUINO_EVENT_ETH_CONNECTED:
      // This will happen when the Ethernet cable is plugged 
      Serial.println("ETH Connected");
      break;

    case ARDUINO_EVENT_ETH_GOT_IP:
    // This will happen when we obtain an IP address through DHCP:
      Serial.print("Got an IP Address for ETH MAC: ");
      Serial.print(ETH.macAddress());
      Serial.print(", IPv4: ");
      Serial.print(ETH.localIP());
      if (ETH.fullDuplex()) {
        Serial.print(", FULL_DUPLEX");
      }
      Serial.print(", ");
      Serial.print(ETH.linkSpeed());
      Serial.println("Mbps");
      eth_connected = true;

      // Uncomment to automatically make a test connection to a server:
      // testClient( "192.168.0.1", 80 );

      break;

    case ARDUINO_EVENT_ETH_DISCONNECTED:
      // This will happen when the Ethernet cable is unplugged 
      Serial.println("ETH Disconnected");
      eth_connected = false;
      break;

    case ARDUINO_EVENT_ETH_STOP:
      // This will happen when the ETH interface is stopped but this never happens
      Serial.println("ETH Stopped");
      eth_connected = false;
      break;

    default:
      break;
  }
}

// Try to read something from a webserver:
void testClient(const char * host, uint16_t port)
{
  Serial.print("\nConnecting to ");
  Serial.print(host);
  Serial.print(":");
  Serial.println(port);

  NetworkClient client;
  if (!client.connect(host, port)) {
    Serial.println("connection failed");
    return;
  }
  client.printf("GET / HTTP/1.1\r\nHost: %s\r\n\r\n", host);
  while (client.connected() && !client.available());
  while (client.available()) {
    Serial.write(client.read());
  }

  Serial.println("closing connection\n");
  client.stop();
}

// Initializing everything at start up / after reset:
void setup()
{
  // Wait for the hardware to initialize:
  delay(500);

  // This sketch will log some information to the serial console:
  Serial.begin(115200); // Assuming computer will be connected to serial port at 115200 bauds
  Serial.println("Setup...");

  Serial.println("Registering event handler for ETH events...");
  Network.onEvent(onEvent);

  // Starth Ethernet (this does NOT start WiFi at the same time)
  Serial.println("Starting ETH interface...");
  SPI.begin(ETH_SPI_SCK, ETH_SPI_MISO, ETH_SPI_MOSI);
  ETH.begin(ETH_PHY_TYPE, ETH_PHY_ADDR, ETH_PHY_CS, ETH_PHY_IRQ, ETH_PHY_RST, SPI);

  Serial.println("Waiting for Ethernet connection");
  while (!eth_connected) {
    delay(500);
    Serial.print(".");
  }
}

void loop()
{
  if (eth_connected) {
    testClient("baidu.com", 80);
  }
  delay(20000);
}
```

115200ボーでシリアルモニターを開き、イーサネットイベントとIP情報を確認します。コードは接続テストとして20秒ごとに「baidu.com」への接続を試行します。

**カスタマイズ：**

- `testClient("baidu.com", 80);`のテストサーバーを独自のサーバーまたはローカルネットワークデバイスに変更します。
- イベントハンドラーを使用してネットワークイベントでカスタムアクションをトリガーします。

### デモ2：シンプルなイーサネットWebサーバー

**目的：**
このデモは、W5500イーサネットアダプターを使用してXIAO ESP32-S3上に基本的なHTTP Webサーバーを設定します。ルートURLでのリクエストに応答し、不明なルートに対してシンプルな404ハンドラーを提供します。

**典型的な使用例：**
有線イーサネット接続を介してデバイスから直接WebページやREST APIを提供したいIoTプロジェクトに最適です。

```cpp
#include <ETH.h>
#include <WebServer.h>
#include <ESPmDNS.h>


#ifndef ETH_PHY_CS
#define ETH_PHY_TYPE ETH_PHY_W5500
#define ETH_PHY_ADDR 1
#define ETH_PHY_CS   D1
#define ETH_PHY_IRQ  -1
#define ETH_PHY_RST  -1
#endif

// SPI pins
#define ETH_SPI_SCK  D8
#define ETH_SPI_MISO D9
#define ETH_SPI_MOSI D10

static bool eth_connected = false;
WebServer server(80);

// ESP32-POE doesn't have an onboard LED so if you want to use a LED you have to attach one to the extended pins on either UEXT or one of the 10 pin extentions.
// in this example the default value is 13 which is UEXT pin 6, or Extention 2 pin 1. If you want to attach the LED to another pin you need to change this value accordingly.
const int led_pin = 21;

// Web Server: handle a request to / (root of the server)
void handleRoot() {
  digitalWrite(led_pin, 1);
  server.send(200, "text/plain", "hello from esp32!");
  delay(100);    // Wait x ms so we have time to see the Led blinking
  digitalWrite(led_pin, 0);
}

// Web Server: handle a request to an unknown URI (unknown "File")
void handleNotFound() {
  digitalWrite(led_pin, 1);
  String message = "File Not Found\n\n";
  message += "URI: ";
  message += server.uri();
  message += "\nMethod: ";
  message += (server.method() == HTTP_GET) ? "GET" : "POST";
  message += "\nArguments: ";
  message += server.args();
  message += "\n";
  for (uint8_t i = 0; i < server.args(); i++) {
    message += " " + server.argName(i) + ": " + server.arg(i) + "\n";
  }
  server.send(404, "text/plain", message);
  // digitalWrite(led_pin, 0);  // If this is commented out, the LED will stay on in case of 404 error
}

// Handle Ethernet Events:
void onEvent(arduino_event_id_t event, arduino_event_info_t info)
{
  switch (event) {

    case ARDUINO_EVENT_ETH_START:
      // This will happen during setup, when the Ethernet service starts
      Serial.println("ETH Started");
      //set eth hostname here
      ETH.setHostname("esp32-ethernet");
      break;

    case ARDUINO_EVENT_ETH_CONNECTED:
      // This will happen when the Ethernet cable is plugged 
      Serial.println("ETH Connected");
      break;

    case ARDUINO_EVENT_ETH_GOT_IP:
    // This will happen when we obtain an IP address through DHCP:
      Serial.print("Got an IP Address for ETH MAC: ");
      Serial.print(ETH.macAddress());
      Serial.print(", IPv4: ");
      Serial.print(ETH.localIP());
      if (ETH.fullDuplex()) {
        Serial.print(", FULL_DUPLEX");
      }
      Serial.print(", ");
      Serial.print(ETH.linkSpeed());
      Serial.println("Mbps");
      eth_connected = true;

      // Uncomment to automatically make a test connection to a server:
      // testClient( "192.168.0.1", 80 );

      break;

    case ARDUINO_EVENT_ETH_DISCONNECTED:
      // This will happen when the Ethernet cable is unplugged 
      Serial.println("ETH Disconnected");
      eth_connected = false;
      break;

    case ARDUINO_EVENT_ETH_STOP:
      // This will happen when the ETH interface is stopped but this never happens
      Serial.println("ETH Stopped");
      eth_connected = false;
      break;

    default:
      break;
  }
}

// Try to read something from a webserver:
void testClient(const char * host, uint16_t port)
{
  Serial.print("\nConnecting to ");
  Serial.print(host);
  Serial.print(":");
  Serial.println(port);

  NetworkClient client;
  if (!client.connect(host, port)) {
    Serial.println("connection failed");
    return;
  }
  client.printf("GET / HTTP/1.1\r\nHost: %s\r\n\r\n", host);
  while (client.connected() && !client.available());
  while (client.available()) {
    Serial.write(client.read());
  }

  Serial.println("closing connection\n");
  client.stop();
}

// Initializing everything at start up / after reset:
void setup()
{
  // Wait for the hardware to initialize:
  delay(500);

  // This sketch will log some information to the serial console:


  Serial.begin(115200); // Assuming computer will be connected to serial port at 115200 bauds
  Serial.print("Setup...");


  Serial.print("Registering event handler for ETH events...");
  Network.onEvent(onEvent);

  // Starth Ethernet (this does NOT start WiFi at the same time)
  Serial.print("Starting ETH interface...");
  SPI.begin(ETH_SPI_SCK, ETH_SPI_MISO, ETH_SPI_MOSI, ETH_PHY_CS);
  ETH.begin(ETH_PHY_TYPE, ETH_PHY_ADDR, ETH_PHY_CS, ETH_PHY_IRQ, ETH_PHY_RST, SPI);


  // multicast DNS (mDNS) allows to resolve hostnames to IP addresses without a DNS server
  if (MDNS.begin("esp32")) {  // using mDNS name "esp32"
    Serial.println("MDNS responder started");
  }

  // Web Server handlers: 
  // Handle a request to / (root of the server)
  server.on("/", handleRoot);
  // Minimalistic handling of another URI (LED will not flash on this one):
  server.on("/inline", []() {
    server.send(200, "text/plain", "this works as well");
  });
  // Handle all other URIs:
  server.onNotFound(handleNotFound);

  server.begin();
  Serial.println("HTTP server started");

  pinMode( led_pin, OUTPUT);  // Initialize the LED pin as a digital output (on/off)
}

void loop ()
{
  server.handleClient();
  delay(2);//allow the cpu to switch to other tasks
}
```

デバイスがIPアドレスを取得したら（シリアルモニターに表示されます）、ブラウザを開いて`http://<your_device_ip>/`にアクセスします。ルートエンドポイントは「hello from esp32!」で応答し、LEDを点滅させます。`/inline`や他のパスにアクセスして異なる応答を確認してみてください。

**カスタマイズ：**

- `server.on("/yourpath", handlerFunction);`を使用してより多くのエンドポイントを追加します。
- センサー読み取り値やデバイス制御をWebサーバーの応答に統合します。

### デモ3：イーサネットカメラストリーミングサーバー

> **注意：**
> このデモには[XIAO ESP32-S3 Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Sense-Pre-Soldered-p-6335.html)ボードのカメラモジュールが必要です。XIAO W5500イーサネットアダプター自体にはカメラは含まれておらず、カメラソケットは現在単体で販売されていません。以前にXIAO ESP32-S3 Senseボードを購入している場合は、そのカメラをこのデモで使用できます。きれいな設置のために、このセットアップと互換性のあるカメラ穴付きの3Dプリント可能なエンクロージャーについては[リソース](#resources)セクションを参照してください。

**目的：**
この高度なデモは、XIAO ESP32-S3カメラモジュールとW5500イーサネットアダプターを組み合わせて、イーサネット経由でカメラ画像をストリーミングします。カメラの初期化、イーサネットインターフェースの設定、ビデオストリーミング用のWebサーバーの開始方法を実演します。

**典型的な使用例：**
監視、リモートモニタリング、または信頼性の高い有線接続でリアルタイム画像ストリーミングが必要なプロジェクトに最適です。

:::tip
以下のプログラムは.inoファイル専用で、このプログラムをコンパイルするにはいくつかのヘッダーファイルが必要です。プロジェクトの完全なソースコードは以下のリンクから取得できます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_W5500_Ehernet_Adapter_Example/tree/main/XIAO_PoE_CameraWebServer" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />
:::

```cpp
#include "esp_camera.h"
#include <ETH.h>
#include <WiFi.h>  // For event handling

// Define the camera model being used
#define CAMERA_MODEL_XIAO_ESP32S3  // Has PSRAM

// Include camera pin definitions
#include "camera_pins.h"

#define USE_TWO_ETH_PORTS 0

// Ethernet PHY and SPI pin definitions (adjust according to your hardware)
#ifndef ETH_PHY_CS
#define ETH_PHY_TYPE ETH_PHY_W5500
#define ETH_PHY_ADDR 1
#define ETH_PHY_CS D1
#define ETH_PHY_IRQ -1
#define ETH_PHY_RST -1
#endif

#define ETH_SPI_SCK D8
#define ETH_SPI_MISO D9
#define ETH_SPI_MOSI D10

// Global variable to track Ethernet connection status
static bool eth_connected = false;

// Function declarations
void startCameraServer();
void setupLedFlash(int pin);
void onEvent(arduino_event_id_t event, arduino_event_info_t info);

void setup() {
  Serial.begin(115200);
  delay(2000);
  // Register Ethernet event handler
  Network.onEvent(onEvent);

  // Initialize SPI and Ethernet
  SPI.begin(ETH_SPI_SCK, ETH_SPI_MISO, ETH_SPI_MOSI, ETH_PHY_CS);
  ETH.begin(ETH_PHY_TYPE, ETH_PHY_ADDR, ETH_PHY_CS, ETH_PHY_IRQ, ETH_PHY_RST, SPI);

  // Wait for Ethernet connection
  Serial.print("Waiting for Ethernet connection");
  while (!eth_connected) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("Ethernet connected");

  Serial.setDebugOutput(true);
  Serial.println();

  // Camera configuration structure
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sccb_sda = SIOD_GPIO_NUM;
  config.pin_sccb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG;  // Use JPEG for streaming
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // Adjust configuration based on PSRAM availability
  if (config.pixel_format == PIXFORMAT_JPEG) {
    if (psramFound()) {
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

#if defined(CAMERA_MODEL_ESP_EYE)
  // Special pin setup for ESP-EYE
  pinMode(13, INPUT_PULLUP);
  pinMode(14, INPUT_PULLUP);
#endif

  // Initialize the camera
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  // Adjust sensor settings for specific camera modules
  sensor_t *s = esp_camera_sensor_get();
  if (s->id.PID == OV3660_PID) {
    s->set_vflip(s, 1);        // Vertical flip
    s->set_brightness(s, 1);   // Increase brightness
    s->set_saturation(s, -2);  // Decrease saturation
  }
  if (config.pixel_format == PIXFORMAT_JPEG) {
    s->set_framesize(s, FRAMESIZE_QVGA);  // Lower initial frame size
  }

#if defined(CAMERA_MODEL_M5STACK_WIDE) || defined(CAMERA_MODEL_M5STACK_ESP32CAM)
  s->set_vflip(s, 1);
  s->set_hmirror(s, 1);
#endif

#if defined(CAMERA_MODEL_ESP32S3_EYE)
  s->set_vflip(s, 1);
#endif

  // Setup LED flash if the pin is defined
#if defined(LED_GPIO_NUM)
  setupLedFlash(LED_GPIO_NUM);
#endif

  // Start the camera web server
  startCameraServer();

  // Print the access URL to the serial monitor
  Serial.print("Camera Ready! Use 'http://");
  Serial.print(ETH.localIP());
  Serial.println("' to connect");
}

void loop() {
  // No additional processing needed; camera server runs in another task
  delay(10000);
}

// Ethernet event handler
void onEvent(arduino_event_id_t event, arduino_event_info_t info) {
  switch (event) {
    case ARDUINO_EVENT_ETH_START:
      Serial.println("ETH Started");
      // Set Ethernet hostname here
      ETH.setHostname("esp32-eth0");
      break;
    case ARDUINO_EVENT_ETH_CONNECTED:
      Serial.println("ETH Connected");
      break;
    case ARDUINO_EVENT_ETH_GOT_IP:
      Serial.printf("ETH Got IP: '%s'\n", esp_netif_get_desc(info.got_ip.esp_netif));
      Serial.println(ETH);
      eth_connected = true;
      break;
    case ARDUINO_EVENT_ETH_LOST_IP:
      Serial.println("ETH Lost IP");
      eth_connected = false;
      break;
    case ARDUINO_EVENT_ETH_DISCONNECTED:
      Serial.println("ETH Disconnected");
      eth_connected = false;
      break;
    case ARDUINO_EVENT_ETH_STOP:
      Serial.println("ETH Stopped");
      eth_connected = false;
      break;
    default:
      break;
  }
}
```

ネットワークに接続した後、シリアルモニターを開いてデバイスのIPアドレスを確認してください。ブラウザにIPアドレスを入力してカメラストリームにアクセスします。

**カスタマイズ：**

- `camera_config_t`構造体でカメラ設定（解像度、品質、フレームサイズ）を調整します。
- Webサーバーコードを変更して認証や追加のエンドポイントを追加します。
- カスタムハードウェアに合わせてEthernetピン定義を調整します。

## FAQ

### Q1: W5500アダプターのネットワーク信号が弱いのはなぜですか？解決策はありますか？

WiFiを使用するすべてのコード内に電力調整用のコードセグメントを追加することが可能で、送信電力を調整することで信号強度を大幅に改善できます。

以下のコードスニペットのように、`Setup()`内の関数に電力調整を追加します。

```cpp
    // 1. Set WiFi to Station mode
    WiFi.mode(WIFI_STA);

    // 2. Adjust WiFi transmit power (Key correction)
    int8_t power_dbm = 15;
    int8_t power_param = (int8_t)(power_dbm / 0.25);
    esp_err_t err = esp_wifi_set_max_tx_power(power_param);

    if (err == ESP_OK) {
        Serial.print("Successfully set WiFi TX Power to: ");
        Serial.print(power_dbm);
        Serial.println(" dBm");
    } else {
        Serial.println("Failed to set WiFi TX Power.");
    }

    // 3. Start connecting to WiFi
    WiFi.begin(ssid, password);

    Serial.print("Connecting to WiFi network: ");
    Serial.println(ssid);
```

上記のコードに電力を設定することで最良の結果が得られることが確認されています。

## リソース

- **[PDF]** [W5500 データシート](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/W5500_ds_datasheet.pdf)
- **[PDF]** [XIAO W5500 Ethernet アダプター回路図](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/XIAO_POE_RJ45_V20_SCH_20250422B.pdf)
- **[STEP]** [XIAO W5500 Ethernet アダプター 3D STEP](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/XIAO_POE_RJ45_V20.step)
- **[STEP]** [XIAO W5500 Ethernet アダプターシェル 3D STEP（カメラ穴の事前穴あけなし）](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/xiao_w5500_eth_adapter_shell.stp)
- **[STEP]** [XIAO W5500 Ethernet アダプターカバー 3D STEP](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/xiao_w5500_eth_adapter_covers.stp)
- **[KICAD]** [XIAO W5500 Ethernet アダプター PCB](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/XIAO_POE_RJ45_V20.kicad_pcb)
- **[GITHUB]** [XIAO W5500 Ethernet アダプターリポジトリ](https://github.com/Seeed-Projects/XIAO_W5500_Ehernet_Adapter_Example)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
