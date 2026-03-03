---
title: 高度な Wi-Fi 使用法
nointro:
keywords:
  - ドキュメント
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Wio-Terminal-Advanced-Wi-Fi/
slug: /ja/Wio-Terminal-Advanced-Wi-Fi
last_update:
  date: 05/15/2025
  author: gunengyu
---


# 高度な Wi-Fi 使用法

この Wiki では、**HTTPClient、DNSServer、WebServer** ライブラリなど、Wi-Fi の高度なライブラリ使用法を紹介します。これらのライブラリを実装することで、簡単な API を使用して IoT プロジェクトを開発することができます。

[**ネットワーク概要**](https://wiki.seeedstudio.com/ja/Wio-Terminal-Network-Overview/) に従って、**最新のファームウェアと依存ライブラリ**を更新していることを確認してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/banner.png" /></div>

:::note
    **RTL8720 ファームウェアバージョンが >= v2.0.2** であることを確認してください。
:::
## HTTPClient の使用法

HTTPClient を使用すると、**HTTP GET、POST、PUT** リクエストを簡単に Web サーバーに送信できます。以下にいくつかの例を示しますので、ぜひ参考にしてください！

### HTTP GET の例

これは HTTPClient を使用して簡単な HTTP 接続を行い、シリアルモニターにレスポンスを表示する例です。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/HTTP.png" /></div>

- `yourNetwork` と `yourPassword` を WiFi の **SSID** と **パスワード** に変更してください。

- コードを Wio Terminal にアップロードしてください。

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
  Serial.print("WiFi ネットワークに接続しました。IP: ");
  Serial.println(WiFi.localIP());
}

void loop() {
    // WiFi 接続を待機
    if((WiFi.status() == WL_CONNECTED)) {
        HTTPClient http;
        Serial.print("[HTTP] 開始...\n");
        // ターゲットサーバーと URL を設定
        http.begin("http://www.example.com/index.html"); // HTTP
        Serial.print("[HTTP] GET...\n");
        // 接続を開始し、HTTP ヘッダーを送信
        int httpCode = http.GET();
        // エラーの場合は httpCode が負になります
        if(httpCode > 0) {
            // HTTP ヘッダーが送信され、サーバーレスポンスヘッダーが処理されました
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

### HTTPs GET の例

これは HTTPClient ライブラリを使用した **HTTPs 接続** の例です。訪問したいウェブサイトに HTTPs GET リクエストを送信する際に参考にしてください！

:::note
    ウェブサイトのルート CA を取得する方法については [**こちら**](https://wiki.seeedstudio.com/ja/Wio-Terminal-Wi-Fi/#obtaining-websites-root-ca) を参照してください。
:::
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/HTTPs.png" /></div>

- `yourNetwork` と `yourPassword` を WiFi の **SSID** と **パスワード** に変更してください。

- コードを Wio Terminal にアップロードしてください。

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
  Serial.print("WiFi ネットワークに接続しました。IP: ");
  Serial.println(WiFi.localIP());
  client.setCACert(test_root_ca);
}

void loop() {
  if(&client) {
    {
      // HTTPClient https のスコープブロックを追加して、WiFiClientSecure *client が破棄される前に確実に処理されるようにします
      HTTPClient https;
      Serial.print("[HTTPS] 開始...\n");
      if (https.begin(client, "https://www.google.com/index.html")) {  // HTTPS
        Serial.print("[HTTPS] GET...\n");
        // 接続を開始し、HTTP ヘッダーを送信
        int httpCode = https.GET();
        // エラーの場合は httpCode が負になります
        if (httpCode > 0) {
          // HTTP ヘッダーが送信され、サーバーレスポンスヘッダーが処理されました
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
      // 追加のスコープブロックを終了
    }
  } else {
    Serial.println("クライアントを作成できません");
  }
  Serial.println();
  Serial.println("次のラウンドまで 10 秒待機...");
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

// サーバーを実行しているコンピュータのIPに変更してください。ポートも一致させてください。
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
   http.addHeader("Content-Type", "text/plain");             // コンテンツタイプヘッダーを指定

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

**WebServerライブラリ**を使用すると、Wio Terminal上でWebサーバーを実行できます。同じネットワークに接続されたコンピュータのブラウザからサーバーにアクセスすることで、**ハードウェアの制御、センサー値の読み取り**などが可能になります。

### 簡単なHelloServerの例

これは、Wio Terminalを使用して接続されたネットワーク上に簡単なWebサーバーをセットアップする例です。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/helloServer.png" /></div>

- `yourNetwork`と`yourPassword`をWiFiの**SSID**と**パスワード**に変更してください。

- コードをWio Terminalにアップロードしてください。

- 同じネットワークからブラウザを使用してWio TerminalのIPを入力し、Webサーバーにアクセスしてください。

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

この例では、認証プロセスが必要なWebサーバーをセットアップします。セキュリティ目的で非常に便利です。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/auth.gif" /></div>

- `yourNetwork`と`yourPassword`をWiFiの**SSID**と**パスワード**に変更してください。

- コードをWio Terminalにアップロードしてください。

- 同じネットワークからブラウザを使用してWio TerminalのIPを入力し、事前設定されたユーザー名とパスワードを入力してください。

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

**WebServer**について説明しましたが、**IPアドレス**を使用してアクセスします。しかし、ドメイン名（例えば `www.google.com`）を入力してアクセスしたい場合は、**DNSServer**を使用する必要があります。

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
  webserver.send(200, "text/plain", "ドメイン名経由でアクセスされたルートページ");
}

void handleP1()
{
  webserver.send(200, "text/plain", "ドメイン名経由でアクセスされたページ1");
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

**Multicast DNS(mDNS)とは何ですか？**

[multicast DNS (mDNS)](https://en.wikipedia.org/wiki/Multicast_DNS)プロトコルは、ローカルネームサーバーを含まない小規模ネットワーク内でホスト名をIPアドレスに解決します。mDNSは小規模ネットワーク向けに設計されており、ユーザーフレンドリーを向上させることを目的としています。このプロトコルにより、ユーザーは秘密のLAN内でデバイスを問題なく接続できます。

### Seeed_Arduino_rpcmDNSのインストール

1. [**Seeed_Arduino_rpcmDNS**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcmDNS)リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、Seeed_Arduino_rpcmDNSライブラリをArduino IDEにインストールします。Arduino IDEを開き、`スケッチ` -> `ライブラリを含める` -> `ZIP形式のライブラリを追加`をクリックし、ダウンロードした`Seeed_Arduino_rpcmDNS`ファイルを選択します。

### mDNS Webサーバーの例

これは、Wio Terminal上でmDNS Webサーバーを設定し、同じネットワークに接続された他のデバイスが定義されたサイトでWebサーバーを閲覧できるようにする例です。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/mdns-webserver.png" /></div>

- `yourNetwork`と`yourPassword`をWiFiの**SSID**と**パスワード**に変更します。

- コードをWio Terminalにアップロードします。

- 同じネットワーク内でブラウザを使用してhttp://WioTerminal.local/にアクセスし、事前設定されたユーザー名とパスワードを入力します。

```cpp
#include <rpcWiFi.h>
#include <RPCmDNS.h>
#include <WiFiClient.h>

const char* ssid     = "yourNetwork";
const char* password = "yourPassword";

// ポート80のTCPサーバーはHTTPリクエストに応答します
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

    // 接続を待機
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("");
    Serial.print("接続先: ");
    Serial.println(ssid);
    Serial.print("IPアドレス: ");
    Serial.println(WiFi.localIP());

    // mDNSレスポンダーを設定:
    // - 最初の引数はドメイン名。この例では完全修飾ドメイン名は"esp8266.local"です。
    // - 2番目の引数は広告するIPアドレスです。
    //   WiFiネットワーク上で自分のIPアドレスを送信します。
    if (!MDNS.begin("WioTerminal")) {
        Serial.println("mDNSレスポンダーの設定エラー！");
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
    // HTTPリクエストの最初の行は "GET /path HTTP/1.1" のように見えます
    // スペースを見つけることで "/path" 部分を取得
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
        s = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<!DOCTYPE HTML>\r\n<html>こんにちは Wio Terminal から ";
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

### mDNS-SDの例

これは、同じネットワーク内でサービスを発見できる[mDNS-SD(Service Discovery)](https://github.com/Seeed-Studio/Seeed_Arduino_rpcmDNS/blob/main/examples/mDNS-SD_Extended/mDNS-SD_Extended.ino)の例です。

[DNSベースのサービスディスカバリー](https://en.wikipedia.org/wiki/Zero-configuration_networking#DNS-SD)について

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/mdns-sd.png" /></div>

- `yourNetwork` と `yourPassword` をあなたのWiFi **SSID** と **パスワード**に変更してください。

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

    // 接続を待機
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("");
    Serial.print("接続完了: ");
    Serial.println(ssid);
    Serial.print("IPアドレス: ");
    Serial.println(WiFi.localIP());

    // mDNSレスポンダーを設定:
    // - 最初の引数はドメイン名、この例では完全修飾ドメイン名は "esp8266.local"
    // - 2番目の引数は広告するIPアドレス
    //   WiFiネットワーク上で自分のIPアドレスを送信します
    if (!MDNS.begin("WioTerminal")) {
        Serial.println("mDNSレスポンダーの設定エラー!");
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
    // HTTPリクエストの最初の行は "GET /path HTTP/1.1" のように見えます
    // スペースを探して "/path" 部分を取得
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
        s = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<!DOCTYPE HTML>\r\n<html>こんにちは Wio Terminal から ";
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

## WiFiManagerの使用方法

私たちは、よく知られているWiFi ManagerをWio Terminalプラットフォームに移植しました。これにより、スマートフォンやその他のデバイスを使用してWio TerminalのWi-Fi設定を構成することができます！

### Seeed_Arduino_rpcWiFiManagerのインストール

1. [**Seeed_Arduino_rpcWiFiManager**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcWiFiManager)リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードしてください。

2. 次に、Seeed_Arduino_rpcWiFiManagerライブラリをArduino IDEにインストールします。Arduino IDEを開き、`スケッチ` -> `ライブラリを含める` -> `ZIP形式のライブラリを追加`をクリックし、先ほどダウンロードした`Seeed_Arduino_rpcWiFiManager`ファイルを選択してください。

### WiFiManager自動接続の例

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/wifimanager.gif" /></div>

この例は、自動接続のデモンストレーションです。この例を使用してWio TerminalのWiFi設定を構成することができます。

- コードをWio Terminalにアップロードしてください。

- Wio Terminalが以前にWiFiに接続したことがある場合、同じネットワークに自動的に接続します。WiFiに接続できない場合はAPモードに入り、WiFiを発信します。スマートフォンを使用してこのWiFiに接続し、WiFi設定を入力してください。

```cpp
#include <rpcWiFi.h>
#include <DNSServer.h>
#include <WebServer.h>
#include <WiFiManager.h>

void setup() {
    Serial.begin(115200);
    while(!Serial); // シリアルが開くまで待機

    WiFiManager wifiManager;
    // resetSettings()をコメント解除すると保存された設定が消去されます
    //wifiManager.resetSettings();

    // RTL8720からSSIDとパスワードを取得し、接続を試みます
    // 接続できない場合、指定された名前でアクセスポイントを開始します
    // ここでは "AutoConnectAP"
    // そして、設定を待つブロッキングループに入ります
    wifiManager.autoConnect("AutoConnectAP");
    // または、ESP + ChipIDの自動生成された名前を使用することもできます
    //wifiManager.autoConnect();

    // ここに到達した場合、WiFiに接続されています
    Serial.println("接続成功...やったね :)");
    Serial.println(WiFi.localIP());
}

void loop() {
    // 繰り返し実行するメインコードをここに記述してください:
}
```

## 技術サポートと製品に関する議論

技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>