---
description: 高度なWiFi使用法
title: 高度なWiFi使用法
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-Advanced-WiFi
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# 高度なWi-Fi使用法

このWikiでは、**HTTPClient、DNSServer、WebServer**ライブラリなどのWi-Fiの高度なライブラリ使用法を紹介します。これらのライブラリを実装することで、簡単なAPIを使用してIoTプロジェクトを開発することができます。

[**ネットワーク概要**](https://wiki.seeedstudio.com/ja/Wio-Terminal-Network-Overview/)に従って、**最新のファームウェアと依存ライブラリ**を更新していることを確認してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/banner.png" /></div>

:::note
**RTL8720ファームウェアバージョンが>= v2.0.2**であることを確認してください。
:::

## HTTPClientの使用法

HTTPClientは、**HTTP GET、POST、PUT**リクエストを簡単にWebサーバーに送信するために使用されます。以下にいくつかの例を示しますので、ぜひ始めてみてください！

### HTTP GETの例

これは、HTTPClientを使用して簡単なHTTP接続を行い、シリアルモニターにレスポンスを表示する例です。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/HTTP.png" /></div>

- `yourNetwork`と`yourPassword`をWiFiの**SSID**と**パスワード**に変更してください。

- コードをWio Terminalにアップロードしてください。

```cpp
#include <rpcWiFi.h>
#include <HTTPClient.h>

const char* ssid = "yourNetwork";
const char* password =  "yourPassword";

void setup() {

  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) { // 接続を確認
    delay(500);
    Serial.println("接続中..");
  }
  Serial.print("WiFiネットワークに接続しました。IP: ");
  Serial.println(WiFi.localIP());
}

void loop() {
    // WiFi接続を待機
    if((WiFi.status() == WL_CONNECTED)) {
        HTTPClient http;
        Serial.print("[HTTP] 開始...\n");
        // ターゲットサーバーとURLを設定
        http.begin("http://www.example.com/index.html"); //HTTP
        Serial.print("[HTTP] GET...\n");
        // 接続を開始し、HTTPヘッダーを送信
        int httpCode = http.GET();
        // httpCodeはエラーの場合に負の値になります
        if(httpCode > 0) {
            // HTTPヘッダーが送信され、サーバーレスポンスヘッダーが処理されました
            Serial.printf("[HTTP] GET... コード: %d\n", httpCode);
            // サーバーでファイルが見つかりました
            if(httpCode == HTTP_CODE_OK) {
                String payload = http.getString();
                Serial.println(payload);
            }
        } else {
            Serial.printf("[HTTP] GET... 失敗、エラー: %s\n", http.errorToString(httpCode).c_str());
        }
        http.end();
    }
    delay(5000);
}
```

### HTTPs GETの例

これはHTTPClientライブラリを使用した**HTTPs接続**の例です。訪問したいウェブサイトにHTTPs GETリクエストを送信する際に参考にしてください！

:::note
ウェブサイトのルートCAを取得する方法については[**こちら**](https://wiki.seeedstudio.com/ja/Wio-Terminal-Wi-Fi/#obtaining-websites-root-ca)をご覧ください。
:::
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/HTTPs.png" /></div>

- `yourNetwork`と`yourPassword`をWiFiの**SSID**と**パスワード**に変更してください。

- コードをWio Terminalにアップロードしてください。

```cpp
#include <rpcWiFi.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h>

const char* ssid = "yourNetwork";
const char* password =  "yourPassword";

const char* test_root_ca = \
                            "-----BEGIN CERTIFICATE-----\n"
                            "MIIESjCCAzKgAwIBAgINAeO0mqGNiqmBJWlQuDANBgkqhkiG9w0BAQsFADBMMSAw\n"
                            "HgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMjETMBEGA1UEChMKR2xvYmFs\n"
                            "U2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjAeFw0xNzA2MTUwMDAwNDJaFw0yMTEy\n"
                            "MTUwMDAwNDJaMEIxCzAJBgNVBAYTAlVTMR4wHAYDVQQKExVHb29nbGUgVHJ1c3Qg\n"
                            "U2VydmljZXMxEzARBgNVBAMTCkdUUyBDQSAxTzEwggEiMA0GCSqGSIb3DQEBAQUA\n"
                            "A4IBDwAwggEKAoIBAQDQGM9F1IvN05zkQO9+tN1pIRvJzzyOTHW5DzEZhD2ePCnv\n"
                            "UA0Qk28FgICfKqC9EksC4T2fWBYk/jCfC3R3VZMdS/dN4ZKCEPZRrAzDsiKUDzRr\n"
                            "mBBJ5wudgzndIMYcLe/RGGFl5yODIKgjEv/SJH/UL+dEaltN11BmsK+eQmMF++Ac\n"
                            "xGNhr59qM/9il71I2dN8FGfcddwuaej4bXhp0LcQBbjxMcI7JP0aM3T4I+DsaxmK\n"
                            "FsbjzaTNC9uzpFlgOIg7rR25xoynUxv8vNmkq7zdPGHXkxWY7oG9j+JkRyBABk7X\n"
                            "rJfoucBZEqFJJSPk7XA0LKW0Y3z5oz2D0c1tJKwHAgMBAAGjggEzMIIBLzAOBgNV\n"
                            "HQ8BAf8EBAMCAYYwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMBIGA1Ud\n"
                            "EwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFJjR+G4Q68+b7GCfGJAboOt9Cf0rMB8G\n"
                            "A1UdIwQYMBaAFJviB1dnHB7AagbeWbSaLd/cGYYuMDUGCCsGAQUFBwEBBCkwJzAl\n"
                            "BggrBgEFBQcwAYYZaHR0cDovL29jc3AucGtpLmdvb2cvZ3NyMjAyBgNVHR8EKzAp\n"
                            "MCegJaAjhiFodHRwOi8vY3JsLnBraS5nb29nL2dzcjIvZ3NyMi5jcmwwPwYDVR0g\n"
                            "BDgwNjA0BgZngQwBAgIwKjAoBggrBgEFBQcCARYcaHR0cHM6Ly9wa2kuZ29vZy9y\n"
                            "ZXBvc2l0b3J5LzANBgkqhkiG9w0BAQsFAAOCAQEAGoA+Nnn78y6pRjd9XlQWNa7H\n"
                            "TgiZ/r3RNGkmUmYHPQq6Scti9PEajvwRT2iWTHQr02fesqOqBY2ETUwgZQ+lltoN\n"
                            "FvhsO9tvBCOIazpswWC9aJ9xju4tWDQH8NVU6YZZ/XteDSGU9YzJqPjY8q3MDxrz\n"
                            "mqepBCf5o8mw/wJ4a2G6xzUr6Fb6T8McDO22PLRL6u3M4Tzs3A2M1j6bykJYi8wW\n"
                            "IRdAvKLWZu/axBVbzYmqmwkm5zLSDW5nIAJbELCQCZwMH56t2Dvqofxs6BBcCFIZ\n"
                            "USpxu6x6td0V7SvJCCosirSmIatj/9dSSVDQibet8q/7UK4v4ZUN80atnZz1yg==\n"
                            "-----END CERTIFICATE-----\n";

WiFiClientSecure client;

void setup() {

  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) { // 接続を確認
    delay(500);
    Serial.println("接続中..");
  }
  Serial.print("WiFiネットワークに接続しました。IP: ");
  Serial.println(WiFi.localIP());
  client.setCACert(test_root_ca);
}

void loop() {
  if(&client) {
    {
      // HTTPClient httpsのスコープブロックを追加して、WiFiClientSecure *clientが破棄される前に確実に処理されるようにします
      HTTPClient https;
      Serial.print("[HTTPS] 開始...\n");
      if (https.begin(client, "https://www.google.com/index.html")) {  // HTTPS
        Serial.print("[HTTPS] GET...\n");
        // 接続を開始し、HTTPヘッダーを送信
        int httpCode = https.GET();
        // httpCodeはエラーの場合に負の値になります
        if (httpCode > 0) {
          // HTTPヘッダーが送信され、サーバーレスポンスヘッダーが処理されました
          Serial.printf("[HTTPS] GET... コード: %d\n", httpCode);
          // サーバーでファイルが見つかりました
          if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
            String payload = https.getString();
            Serial.println(payload);
          }
        } else {
          Serial.printf("[HTTPS] GET... 失敗、エラー: %s\n", https.errorToString(httpCode).c_str());
        }
        https.end();
      } else {
        Serial.printf("[HTTPS] 接続できません\n");
      }
      // 追加のスコープブロック終了
    }
  } else {
    Serial.println("クライアントを作成できません");
  }
  Serial.println();
  Serial.println("次のラウンドまで10秒待機...");
  delay(10000);
}
```

### HTTP POSTの例

これは、Wio TerminalからWebサーバーに**HTTP POSTリクエスト**を送信する例です。このデモでは、Pythonを使用してPC上に簡単なWebサーバーをセットアップし、HTTPリクエストを受信して応答します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/HTTP-POST.png" /></div>

#### Pythonサーバーコード

まず、Pythonで必要な**bottleライブラリ**をインストールするために`pip`を使用します。以下のコマンドをターミナルで実行してください：

```sh
pip install bottle
```

bottleをインポートしたら、以下のコードをコピーして**`simple-server.py`**として保存します。ポートを変更する場合は、Arduino側と一致するようにしてください。

```py
from bottle import run, request, post

@post('/')
def index():
    data = request.body.read()
    print(data)

run(host='0.0.0.0', port=1880, debug=True)
```

#### Arduinoコード

- `yourNetwork`と`yourPassword`をWiFiの**SSID**と**パスワード**に変更してください。

- コードをWio Terminalにアップロードしてください。

- ターミナルを確認すると、Wio TerminalからのHTTPリクエストメッセージが表示されます。

```cpp
#include <rpcWiFi.h>
#include <HTTPClient.h>

const char* ssid = "yourNetwork";
const char* password =  "yourPassword";

// サーバーを実行しているコンピュータのIPアドレスに変更してください。ポートも一致させる必要があります。
const char* yourLocalIp =  "http://10.0.0.233:1880/";

void setup() {

  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) { // 接続を確認
    delay(500);
    Serial.println("Connecting..");
  }
  Serial.print("Connected to the WiFi network with IP: ");
  Serial.println(WiFi.localIP());
}

void loop() {

 if(WiFi.status()== WL_CONNECTED){   // WiFi接続状態を確認

   HTTPClient http;

   http.begin(yourLocalIp);  // HTTPリクエストの送信先を指定
   http.addHeader("Content-Type", "text/plain");             // Content-Typeヘッダーを指定

   int httpResponseCode = http.POST("Hello Bottle, from Wio Terminal");   // 実際のPOSTリクエストを送信

   if(httpResponseCode>0){
    Serial.print("HTTP Response Code: ");
    Serial.println(httpResponseCode);   // 戻りコードを表示
   }else{
    Serial.print("Error on sending request: ");
    Serial.println(httpResponseCode);
   }

   http.end();  // リソースを解放

 }else{
    Serial.println("Error in WiFi connection");
 }
  delay(5000);  // 5秒ごとにリクエストを送信
}
```

## Webサーバーの使用

**WebServerライブラリ**を使用すると、Wio TerminalでWebサーバーを実行できます。同じネットワークに接続されたコンピュータのブラウザからサーバーにアクセスすることで、**ハードウェアの制御、センサー値の読み取り**などが可能になります。

### 簡単なHelloServerの例

これは、Wio Terminalを使用して接続されたネットワーク上に簡単なWebサーバーをセットアップする例です。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/helloServer.png" /></div>

- `yourNetwork`と`yourPassword`をWiFiの**SSID**と**パスワード**に変更してください。

- コードをWio Terminalにアップロードしてください。

- 同じネットワーク上のブラウザでWio TerminalのIPアドレスを入力してWebサーバーにアクセスしてください。

```cpp
#include <rpcWiFi.h>
#include <WiFiClient.h>
#include <WebServer.h>

const char *ssid = "yourNetwork";
const char *password = "yourPassword";

WebServer server(80);

const int led = 13;

void handleRoot() {
  digitalWrite(led, 1);
  server.send(200, "text/plain", "hello from Wio Terminal!");
  digitalWrite(led, 0);
}

void handleNotFound() {
  digitalWrite(led, 1);
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
  digitalWrite(led, 0);
}

void setup(void) {
  pinMode(led, OUTPUT);
  digitalWrite(led, 0);
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  // 接続を待機
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  server.on("/", handleRoot);

  server.on("/inline", []() {
    server.send(200, "text/plain", "this works as well");
  });

  server.onNotFound(handleNotFound);

  server.begin();
  Serial.println("HTTP server started");
}

void loop(void) {
  server.handleClient();
}
```

### HTTP認証Webサーバーの例

この例では、認証プロセスを必要とするWebサーバーをセットアップします。セキュリティ目的で非常に便利です。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/auth.gif" /></div>

- `yourNetwork`と`yourPassword`をWiFiの**SSID**と**パスワード**に変更してください。

- コードをWio Terminalにアップロードしてください。

- 同じネットワーク上のブラウザでWio TerminalのIPアドレスを入力し、事前設定されたユーザー名とパスワードを入力してください。

```cpp
#include <rpcWiFi.h>
#include <WebServer.h>

const char *ssid = "yourNetwork";
const char *password = "yourPassword";

WebServer server(80);

const char* www_username = "admin";
const char* www_password = "password";

void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  if (WiFi.waitForConnectResult() != WL_CONNECTED) {
    Serial.println("WiFi Connect Failed! Rebooting...");
    delay(1000);
    NVIC_SystemReset(); // Wio Terminalをリセット
  }

  server.on("/", []() {
    if (!server.authenticate(www_username, www_password)) {
      return server.requestAuthentication();
    }
    server.send(200, "text/plain", "Login OK");
  });
  server.begin();

  Serial.print("Open http://");
  Serial.print(WiFi.localIP());
  Serial.println("/ in your browser to see it working");
}

void loop() {
  server.handleClient();
}
```

## DNSServerの使用方法

**WebServer**について説明しましたが、これをアクセスするために**IPアドレス**を使用します。しかし、ドメイン名（例えば`www.google.com`）を入力してアクセスしたい場合は、**DNSServer**を使用する必要があります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/DNS.gif" /></div>

- DNSServerを使用するには、**APモード**である必要があります。

- 対応するライブラリを導入します：`#include <DNSServer.h>`。

- `DNSServer`オブジェクトを宣言します。

- `start()`メソッドを使用してDNSサーバーを開始します。

- `processNextRequest()`メソッドを使用してクライアントからのリクエストを処理します。

- コードをWio Terminalにアップロードし、PCを`DNSServer example` Wi-Fiに接続します。

- `www.wioterminal.com`および`www.wioterminal.com/p1`を入力します。

```cpp
#include <rpcWiFi.h>
#include <DNSServer.h>
#include <WebServer.h>

IPAddress local_IP(192, 168, 1, 1);
IPAddress gateway(192, 168, 1, 1);
IPAddress subnet(255, 255, 255, 0);

const byte DNS_PORT = 53;

DNSServer dnsServer;
WebServer webserver(80);

void handleRoot()
{
  webserver.send(200, "text/plain", "ドメイン名を介してルートページにアクセスしました");
}

void handleP1()
{
  webserver.send(200, "text/plain", "ドメイン名を介してページ1にアクセスしました");
}

void setup()
{
  WiFi.mode(WIFI_AP);
  WiFi.softAPConfig(local_IP, gateway, subnet);
  WiFi.softAP("DNSServer example");

  webserver.on("/", handleRoot);
  webserver.on("/p1", handleP1);

  dnsServer.start(DNS_PORT, "www.wioterminal.com", local_IP); // DNSサービスを開始します。example.comは登録されたドメイン名です。
  webserver.begin();
}

void loop()
{
  dnsServer.processNextRequest();
  webserver.handleClient();
}
```

## mDNSの使用方法

**マルチキャストDNS(mDNS)とは？**

[マルチキャストDNS (mDNS)](https://en.wikipedia.org/wiki/Multicast_DNS)プロトコルは、ローカルネームサーバーを含まない小規模ネットワーク内でホスト名をIPアドレスに解決します。マルチキャストDNSは小規模ネットワーク向けに設計されており、ユーザーフレンドリーさを向上させることを目的としています。このプロトコルのアイデアは、ユーザーが秘密のLAN内でデバイスを問題なく接続できるようにすることです。

### Seeed_Arduino_rpcmDNSのインストール

1. [**Seeed_Arduino_rpcmDNS**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcmDNS)リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

2. Seeed_Arduino_rpcmDNSライブラリをArduino IDEにインストールします。Arduino IDEを開き、`スケッチ` -> `ライブラリをインクルード` -> `ZIP形式のライブラリを追加`をクリックし、ダウンロードした`Seeed_Arduino_rpcmDNS`ファイルを選択します。

### mDNS Webサーバーの例

これは、Wio Terminal上でmDNS Webサーバーをセットアップする例です。同じネットワークに接続された他のデバイスが、定義されたサイトでWebサーバーを閲覧できるようになります。
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/mdns-webserver.png" /></div>

- `yourNetwork`と`yourPassword`をWiFiの**SSID**と**パスワード**に変更します。

- コードをWio Terminalにアップロードします。

- 同じネットワークからブラウザを使用して[http://WioTerminal.local/](http://WioTerminal.local/)にアクセスし、事前設定されたユーザー名とパスワードを入力します。

```cpp
#include <rpcWiFi.h>
#include <RPCmDNS.h>
#include <WiFiClient.h>

const char* ssid     = "yourNetwork";
const char* password = "yourPassword";

// ポート80でのTCPサーバーはHTTPリクエストに応答します
WiFiServer server(80);

void setup(void)
{  
    Serial.begin(115200);
    while(!Serial){
        ;
    }
    Serial.printf("セットアップ開始 \r\n");
    // WiFiネットワークに接続
    WiFi.begin(ssid, password);
    Serial.println("");

    // 接続待機
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("");
    Serial.print("接続先: ");
    Serial.println(ssid);
    Serial.print("IPアドレス: ");
    Serial.println(WiFi.localIP());

    // mDNSレスポンダーをセットアップ:
    // - 最初の引数はドメイン名。この例では完全修飾ドメイン名は"esp8266.local"
    // - 2番目の引数は広告するIPアドレス
    //   WiFiネットワーク上で自分のIPアドレスを送信
    if (!MDNS.begin("WioTerminal")) {
        Serial.println("mDNSレスポンダーのセットアップエラー!");
        while(1) {
            delay(1000);
        }
    }
    Serial.println("mDNSレスポンダー開始");

    // TCP (HTTP) サーバーを開始
    server.begin();
    Serial.println("TCPサーバー開始");

    // MDNS-SDにサービスを追加
    MDNS.addService("http", "tcp", 80);

    Serial.printf("セットアップ完了 \r\n");
}

void loop(void)
{
    // クライアントが接続したか確認
    WiFiClient client = server.available();
    if (!client) {
        return;
    }
    Serial.println("");
    Serial.println("新しいクライアント");
    // クライアントからデータが利用可能になるまで待機
    while(client.connected() && !client.available()){
        delay(1);
    }
    // HTTPリクエストの最初の行を読み取る
    String req = client.readStringUntil('\r');
    // HTTPリクエストの最初の行は "GET /path HTTP/1.1" のような形式
    // スペースを見つけて"/path"部分を取得
    int addr_start = req.indexOf(' ');
    int addr_end = req.indexOf(' ', addr_start + 1);
    if (addr_start == -1 || addr_end == -1) {
        Serial.print("無効なリクエスト: ");
        Serial.println(req);
        return;
    }
    req = req.substring(addr_start + 1, addr_end);
    Serial.print("リクエスト: ");
    Serial.println(req);

    String s;
    if (req == "/")
    {
        IPAddress ip = WiFi.localIP();
        String ipStr = String(ip[0]) + '.' + String(ip[1]) + '.' + String(ip[2]) + '.' + String(ip[3]);
        s = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<!DOCTYPE HTML>\r\n<html>こんにちは、Wio Terminalから ";
        s += ipStr;
        s += " です</html>\r\n\r\n";
        Serial.println("200を送信");
    }
    else
    {
        s = "HTTP/1.1 404 Not Found\r\n\r\n";
        Serial.println("404を送信");
    }
    client.print(s);

    client.stop();
    Serial.println("クライアント処理完了");
}
```

### mDNS-SDの例

これは、同じネットワーク内でサービスを検出できる[mDNS-SD（サービスディスカバリー）](https://en.wikipedia.org/wiki/Zero-configuration_networking#DNS-SD)の例です。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/mdns-sd.png" /></div>

- `yourNetwork` と `yourPassword` を、WiFi の **SSID** と **パスワード** に変更してください。

- コードを Wio Terminal にアップロードしてください。

```cpp
#include <rpcWiFi.h>
#include <RPCmDNS.h>
#include <WiFiClient.h>

const char* ssid     = "yourNetwork";
const char* password = "yourPassword";

// ポート80でのTCPサーバーはHTTPリクエストに応答します
WiFiServer server(80);

void setup(void)
{  
    Serial.begin(115200);
    while(!Serial){
        ;
    }
    Serial.printf("セットアップ開始 \r\n");
    // WiFiネットワークに接続
    WiFi.begin(ssid, password);
    Serial.println("");

    // 接続待機
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("");
    Serial.print("接続先: ");
    Serial.println(ssid);
    Serial.print("IPアドレス: ");
    Serial.println(WiFi.localIP());

    // mDNSレスポンダーの設定:
    // - 最初の引数はドメイン名、この例では
    //   完全修飾ドメイン名は "esp8266.local"
    // - 2番目の引数は広告するIPアドレス
    //   WiFiネットワーク上で自分のIPアドレスを送信します
    if (!MDNS.begin("WioTerminal")) {
        Serial.println("mDNSレスポンダーの設定エラー!");
        while(1) {
            delay(1000);
        }
    }
    Serial.println("mDNSレスポンダー開始");

    // TCP (HTTP) サーバー開始
    server.begin();
    Serial.println("TCPサーバー開始");

    // MDNS-SDにサービスを追加
    MDNS.addService("http", "tcp", 80);

    Serial.printf("セットアップ完了 \r\n");
}

void loop(void)
{
    // クライアントが接続しているか確認
    WiFiClient client = server.available();
    if (!client) {
        return;
    }
    Serial.println("");
    Serial.println("新しいクライアント");
    // クライアントからデータが利用可能になるまで待機
    while(client.connected() && !client.available()){
        delay(1);
    }
    // HTTPリクエストの最初の行を読み取る
    String req = client.readStringUntil('\r');
    // HTTPリクエストの最初の行は "GET /path HTTP/1.1" のようになります
    // スペースを見つけて "/path" 部分を取得
    int addr_start = req.indexOf(' ');
    int addr_end = req.indexOf(' ', addr_start + 1);
    if (addr_start == -1 || addr_end == -1) {
        Serial.print("無効なリクエスト: ");
        Serial.println(req);
        return;
    }
    req = req.substring(addr_start + 1, addr_end);
    Serial.print("リクエスト: ");
    Serial.println(req);

    String s;
    if (req == "/")
    {
        IPAddress ip = WiFi.localIP();
        String ipStr = String(ip[0]) + '.' + String(ip[1]) + '.' + String(ip[2]) + '.' + String(ip[3]);
        s = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<!DOCTYPE HTML>\r\n<html>Hello from Wio Terminal at ";
        s += ipStr;
        s += "</html>\r\n\r\n";
        Serial.println("200を送信");
    }
    else
    {
        s = "HTTP/1.1 404 Not Found\r\n\r\n";
        Serial.println("404を送信");
    }
    client.print(s);

    client.stop();
    Serial.println("クライアント処理完了");
}
```

## WiFiManager の使用

Wio Terminal プラットフォームに有名な WiFi Manager を移植しました。これにより、スマートフォンや他のデバイスを使用して Wio Terminal の Wi-Fi 設定を構成できます！

### Seeed_Arduino_rpcWiFiManager のインストール

1. [**Seeed_Arduino_rpcWiFiManager**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcWiFiManager) リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、Seeed_Arduino_rpcWiFiManager ライブラリを Arduino IDE にインストールします。Arduino IDE を開き、`スケッチ` -> `ライブラリをインクルード` -> `ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `Seeed_Arduino_rpcWiFiManager` ファイルを選択します。

### WiFiManager 自動接続の例

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/wifimanager.gif" /></div>

この例は、自動接続のデモンストレーションです。この例を使用して、Wio Terminal の WiFi 設定を構成できます。

- コードを Wio Terminal にアップロードしてください。

- Wio Terminal が以前に WiFi に接続していた場合、同じネットワークに自動的に接続します。どの WiFi にも接続できない場合は AP モードに入り、WiFi を発信します。この WiFi にスマートフォンで接続し、WiFi 設定を入力してください。

```cpp
#include <rpcWiFi.h>
#include <DNSServer.h>
#include <WebServer.h>
#include <WiFiManager.h>

void setup() {
    Serial.begin(115200);
    while(!Serial); // シリアルが開くまで待機

    WiFiManager wifiManager;
    // resetSettings() をコメント解除すると保存された設定が消去されます
    //wifiManager.resetSettings();

    // RTL8720 から SSID とパスワードを取得し、接続を試みます
    // 接続できない場合、指定された名前でアクセスポイントを開始します
    // ここでは "AutoConnectAP"
    // そして設定を待つブロッキングループに入ります
    wifiManager.autoConnect("AutoConnectAP");
    // または、ESP + ChipID の自動生成名を使用
    //wifiManager.autoConnect();

    // ここに到達した場合、WiFi に接続されています
    Serial.println("接続完了...やった :)");
    Serial.println(WiFi.localIP());
}

void loop() {
    // 繰り返し実行するメインコードをここに記述
}
```