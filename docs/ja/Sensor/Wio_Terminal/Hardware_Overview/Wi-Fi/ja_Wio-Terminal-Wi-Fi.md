---
title: Wi-Fi
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Wio-Terminal-Wi-Fi/
slug: /ja/Wio-Terminal-Wi-Fi
last_update:
  date: 05/15/2025
  author: gunengyu
---


# Wi-Fi 接続

この Wiki では、Realtek RTL8720 コアを使用して Wio Terminal の Wi-Fi 接続を設定する方法を紹介します。

:::note
        ネットワーク概要を確認し、**RTL8720 の最新ファームウェアを更新し、依存する Arduino ライブラリをダウンロードしていることを確認してください。**
:::
<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#f5cfa9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#eda964', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>注意</p>
    <p style={{color: '#000000', fontSize: 14}}>以下の例は<b>eRPC 構造フレームワークファームウェア</b>に対応するよう更新されています。eRPC 構造に更新してください。単に <code><b>AtWifi.h</b></code> を <code><b>rpcWiFi.h</b></code> に置き換えるだけです。</p>
  </div>
</div>

## ステーション (STA) モードとして設定する

- Arduino に `rpcWifi.h` ライブラリをインクルードします。

- STA モードとして設定します：

```cpp
WiFi.mode(WIFI_STA);
```

### Wi-Fi ネットワークをスキャンする例コード

この例では、Wi-Fi STA モードとして設定し、利用可能なすべてのネットワークをスキャンしてシリアルに出力します。

```cpp
#include "rpcWiFi.h"

void setup() {
    Serial.begin(115200);
    while(!Serial); // シリアルが準備完了するまで待機
    delay(1000);

    // WiFi をステーションモードに設定し、以前接続されていた AP から切断
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    delay(100);

    Serial.println("セットアップ完了");
}

void loop() {
    Serial.println("スキャン開始");

    // WiFi.scanNetworks は見つかったネットワークの数を返します
    int n = WiFi.scanNetworks();
    Serial.println("スキャン完了");
    if (n == 0) {
        Serial.println("ネットワークが見つかりません");
    } else {
        Serial.print(n);
        Serial.println(" 個のネットワークが見つかりました");
        for (int i = 0; i < n; ++i) {
            // 見つかった各ネットワークの SSID と RSSI を出力
            Serial.print(i + 1);
            Serial.print(": ");
            Serial.print(WiFi.SSID(i));
            Serial.print(" (");
            Serial.print(WiFi.RSSI(i));
            Serial.print(")");
            Serial.println((WiFi.encryptionType(i) == WIFI_AUTH_OPEN) ? " " : "*");
            delay(10);
        }
    }
    Serial.println("");

    // 再スキャンする前に少し待機
    delay(5000);
}
```

### 指定されたネットワークに接続する例コード

この例では、指定された Wi-Fi ネットワークに接続します。`ssid` と `password` を自分の Wi-Fi ネットワークに変更してください。

```cpp
#include "rpcWiFi.h"

const char* ssid = "yourNetworkName";
const char* password =  "yourNetworkPassword";

void setup() {
    Serial.begin(115200);
    while(!Serial); // シリアルが準備完了するまで待機

    // WiFi をステーションモードに設定し、以前接続されていた AP から切断
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();

    Serial.println("WiFi に接続中...");
    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.println("WiFi に接続中...");
        WiFi.begin(ssid, password);
    }
    Serial.println("WiFi ネットワークに接続しました");
    Serial.print("IP アドレス: ");
    Serial.println (WiFi.localIP()); // デバイスの IP アドレスを出力
    }

void loop() {

}
```

### WiFi Multi の例コード

- Arduino に `rpcWiFi.h` と `WiFiMulti.h` ライブラリをインクルードします。

この例では `WiFiMulti` クラスを使用します。以下を使用して複数の AP Wi-Fi をリストに追加できます：

```cpp
wifiMulti.addAP("ssid", "password");
```

そして `wifiMulti.run()` は最も信号が強い Wi-Fi に接続を試みます。

**注意:** `SSID` と `Password` を自分の Wi-Fi に合わせて変更してください。

```cpp
#include "rpcWiFi.h"
#include <WiFiMulti.h>

WiFiMulti wifiMulti;

void setup() {
    Serial.begin(115200);
    while(!Serial); // シリアルが準備完了するまで待機
    delay(1000);

    wifiMulti.addAP("ssid_from_AP_1", "your_password_for_AP_1");
    wifiMulti.addAP("ssid_from_AP_2", "your_password_for_AP_2");
    wifiMulti.addAP("ssid_from_AP_3", "your_password_for_AP_3");

    Serial.println("WiFi に接続中...");
    if (wifiMulti.run() == WL_CONNECTED) {
        Serial.println("");
        Serial.println("WiFi に接続しました");
        Serial.println("IP アドレス: ");
        Serial.println(WiFi.localIP());
    }
}

void loop() {
    if (wifiMulti.run() != WL_CONNECTED) {
        Serial.println("WiFi に接続されていません！");
        delay(1000);
    }
}
```

### Wi-Fi クライアントの例コード

この例では、Wio Terminal を STA モードとして設定し、特定の AP Wi-Fi に接続して HTTP GET リクエストを送信し、同じネットワーク上の Web サーバーから HTTP レスポンスを受信します。

- `ssid` と `password` を自分の Wi-Fi に変更してください。

- `host` を Web サーバーの IP アドレスに変更してください。

この例を簡単にテストするには、Python を使用して PC 上で簡単な Web サーバーを開始できます：

1. 以下をコピーしてローカルドライブに保存し、`index.html` という名前を付けます。

```html
<html>
<body>
Hello World!
</body>
</html>
```

2. Powershell/ターミナルで、保存した `index.html` のパスに移動し、以下のコードを実行して Python を使用して簡単な Web サーバーを開始します：

Python 3 の場合：

```py
python3 -m http.server 80
```

Python 2 の場合：

```py
python -m SimpleHTTPServer 80
```

3. Arduino コード内の `host` をこの PC の IP アドレスに変更します。また、Arduino コード内の `ssid` と `password` をこの PC が接続している同じ Wi-Fi に変更します。

4. コードを Wio Terminal にアップロードし、シリアルモニターで結果を確認します。

```cpp
#include <rpcWiFi.h>

const char* ssid = "yourNetworkName";
const char* password =  "yourNetworkPassword";

void setup() {
    Serial.begin(115200);
    while(!Serial); // シリアルが準備完了するまで待機
    delay(1000);

    // WiFi をステーションモードに設定し、以前接続されていた AP から切断
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    delay(2000);

    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.println("WiFi に接続中...");
    }
    Serial.println("WiFi ネットワークに接続しました");
    Serial.print("IP アドレス: ");
    Serial.println (WiFi.localIP()); // デバイスの IP アドレスを出力
}


void loop() {
    const uint16_t port = 80; // デフォルトポート
    const char* host = "192.168.0.10";  // ターゲットサーバーの IP アドレス

    Serial.print("接続中: ");
    Serial.println(host);

    // WiFiClient クラスを使用して TCP 接続を作成
    WiFiClient client;

    if (!client.connect(host, port)) {
        Serial.println("接続失敗");
        Serial.println("再試行まで 5 秒待機...");
        delay(5000);
        return;
    }

    // サーバーにリクエストを送信
    // この行をコメント解除して任意の文字列をサーバーに送信
    //client.print("Send this data to the server");
    // この行をコメント解除して基本的なドキュメントリクエストをサーバーに送信
    client.print("GET /index.html HTTP/1.1\n\n"); // HTTP GET リクエストを送信

    int maxloops = 0;

    // サーバーの返信が利用可能になるまで待機
    while (!client.available() && maxloops < 1000) {
        maxloops++;
        delay(1); // 1 ミリ秒待機
    }
    if (client.available() > 0) {
        // サーバーから 1 行読み取る
        String line = client.readString(); // サーバーのレスポンスを読み取る
        // 様々な行末処理を実行
        line.replace("\r\n", "\n");
        line.replace('\r', '\n');
        line.replace("\n", "\r\n");
        Serial.println(line);
    } else {
        Serial.println("client.available() のタイムアウト");
    }

    Serial.println("接続を閉じます");
    client.stop();

    Serial.println("再起動まで 5 秒待機...");
    delay(5000);
}
```

### Wi-Fi Https 接続の例コード

この例では、Wio Terminal を使用して Https 接続を確立する方法を示します。これにより、ほぼすべてのウェブサイトに接続し、必要なデータを取得することができます。

- `ssid` と `password` をあなたの Wi-Fi に変更してください。

```cpp
#include <rpcWiFi.h>
#include <WiFiClientSecure.h>

const char* ssid     = "yourNetworkName";     // あなたのネットワーク SSID
const char* password = "yourNetworkPassword"; // あなたのネットワークパスワード

const char*  server = "www.example.com";  // サーバー URL
const char* test_root_ca = \
                            "-----BEGIN CERTIFICATE-----\n"
                            "MIIDrzCCApegAwIBAgIQCDvgVpBCRrGhdWrJWZHHSjANBgkqhkiG9w0BAQUFADBh\n"
                            "MQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3\n"
                            "d3cuZGlnaWNlcnQuY29tMSAwHgYDVQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBD\n"
                            "QTAeFw0wNjExMTAwMDAwMDBaFw0zMTExMTAwMDAwMDBaMGExCzAJBgNVBAYTAlVT\n"
                            "MRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxGTAXBgNVBAsTEHd3dy5kaWdpY2VydC5j\n"
                            "b20xIDAeBgNVBAMTF0RpZ2lDZXJ0IEdsb2JhbCBSb290IENBMIIBIjANBgkqhkiG\n"
                            "9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4jvhEXLeqKTTo1eqUKKPC3eQyaKl7hLOllsB\n"
                            "CSDMAZOnTjC3U/dDxGkAV53ijSLdhwZAAIEJzs4bg7/fzTtxRuLWZscFs3YnFo97\n"
                            "nh6Vfe63SKMI2tavegw5BmV/Sl0fvBf4q77uKNd0f3p4mVmFaG5cIzJLv07A6Fpt\n"
                            "43C/dxC//AH2hdmoRBBYMql1GNXRor5H4idq9Joz+EkIYIvUX7Q6hL+hqkpMfT7P\n"
                            "T19sdl6gSzeRntwi5m3OFBqOasv+zbMUZBfHWymeMr/y7vrTC0LUq7dBMtoM1O/4\n"
                            "gdW7jVg/tRvoSSiicNoxBN33shbyTApOB6jtSj1etX+jkMOvJwIDAQABo2MwYTAO\n"
                            "BgNVHQ8BAf8EBAMCAYYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUA95QNVbR\n"
                            "TLtm8KPiGxvDl7I90VUwHwYDVR0jBBgwFoAUA95QNVbRTLtm8KPiGxvDl7I90VUw\n"
                            "DQYJKoZIhvcNAQEFBQADggEBAMucN6pIExIK+t1EnE9SsPTfrgT1eXkIoyQY/Esr\n"
                            "hMAtudXH/vTBH1jLuG2cenTnmCmrEbXjcKChzUyImZOMkXDiqw8cvpOp/2PV5Adg\n"
                            "06O/nVsJ8dWO41P0jmP6P6fbtGbfYmbW0W5BjfIttep3Sp+dWOIrWcBAI+0tKIJF\n"
                            "PnlUkiaY4IBIqDfv8NZ5YBberOgOzW6sRBc4L0na4UU+Krk2U886UAb3LujEV0ls\n"
                            "YSEY1QSteDwsOoBrp+uvFRTp2InBuThs4pFsiv9kuXclVzDAGySj4dzp30d8tbQk\n"
                            "CAUw7C29C79Fv1C5qfPrmAESrciIxpg0X40KPMbp1ZWVbd4=\n"
                            "-----END CERTIFICATE-----\n";

// 必要に応じて x.509 クライアント証明書を使用できます
//const char* test_client_key = "";   // クライアントを検証するためのキー
//const char* test_client_cert = "";  // クライアントを検証するための証明書

WiFiClientSecure client;

void setup() {
    // シリアルを初期化し、ポートが開くのを待つ
    Serial.begin(115200);
    while(!Serial); // シリアルが準備完了するのを待つ
    delay(1000);

    Serial.print("SSID に接続を試みています: ");
    Serial.println(ssid);
    WiFi.begin(ssid, password);

    // Wi-Fi ネットワークへの接続を試みる
    while (WiFi.status() != WL_CONNECTED) {
        Serial.print(".");
        // 再試行まで 1 秒待つ
        delay(1000);
    }
    Serial.print("接続成功: ");
    Serial.println(ssid);

    client.setCACert(test_root_ca);
    //client.setCertificate(test_client_key); // クライアント検証用
    //client.setPrivateKey(test_client_cert); // クライアント検証用

    Serial.println("\nサーバーへの接続を開始...");
    if (!client.connect(server, 443)) {
        Serial.println("接続失敗!");
    } else {
        Serial.println("サーバーに接続成功!");
        // HTTP リクエストを送信
        client.println("GET https://www.example.com HTTP/1.0");
        client.println("Host: www.example.com");
        client.println("Connection: close");
        client.println();

        while (client.connected()) {
            String line = client.readStringUntil('\n');
            if (line == "\r") {
                Serial.println("ヘッダー受信完了");
                break;
            }
        }
        // サーバーからの受信可能なバイトがある場合、それを読み取り表示
        while (client.available()) {
            char c = client.read();
            if (c == '\n') {
                Serial.write('\r');
            }
            Serial.write(c);
        }
        client.stop();
    }
}

void loop() {
    // 何もしない
}
```

#### ウェブサイトのルート CA を取得する

ウェブサイトのルート CA を取得するには、ターミナル (Linux Bash Shell) で以下のコマンドを実行します:

```sh
openssl s_client -showcerts -verify 5 -connect www.example.com:443 < /dev/null
```

**`www.example.com`** を目的のウェブサイトのルート URL に置き換えてください。

**Windows の場合**、**Windows Subsystem for Linux (WSL)** を使用して同じ Linux コマンドを実行できます。

**注意:** 以下の依存関係がインストールされていることを確認してください:

```sh
sudo apt update
sudo apt install openssl
```

### MQTT サーバーへの接続例コード

この例では、Wio Terminal を使用して MQTT サーバーとの接続を確立する方法を示します。これにより、Wio Terminal を使用して MQTT サーバーにメッセージを購読および公開できます。ここでは無料の MQTT サーバー [https://test.mosquitto.org/](https://test.mosquitto.org/) を使用しています。

- [**Arduino MQTT ライブラリ**](https://github.com/knolleary/pubsubclient) をダウンロードしてインストールしてください。

```cpp
#include "rpcWiFi.h"
#include <PubSubClient.h>

// ネットワークに適した値で更新してください
const char *ssid = "yourNetworkName";      // あなたのネットワーク SSID
const char *password = "yourNetworkPassword"; // あなたのネットワークパスワード

const char *ID = "Wio-Terminal-Client";  // デバイス名、ユニークである必要があります
const char *TOPIC = "WioTerminal";  // 購読するトピック
const char *subTopic = "inTopic";  // 購読するトピック
const char *server = "test.mosquitto.org"; // サーバー URL


WiFiClient wifiClient;
PubSubClient client(wifiClient);

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("メッセージ受信 [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
  }
  Serial.println();
}

void reconnect() {
  // 再接続するまでループ
  while (!client.connected())
  {
    Serial.print("MQTT 接続を試みています...");
    // 接続を試みる
    if (client.connect(ID)) {
      Serial.println("接続成功");
      // 接続後、アナウンスを公開
      client.publish(TOPIC, "{\"message\": \"Wio Terminal が接続されました!\"}");
      Serial.println("接続メッセージを正常に公開しました!");
      // 再購読
      client.subscribe(subTopic);
      Serial.print("購読完了: ");
      Serial.println(subTopic);
    }
    else {
      Serial.print("失敗, rc=");
      Serial.print(client.state());
      Serial.println(" 5 秒後に再試行します");
      // 再試行まで 5 秒待つ
      delay(5000);
    }
  }
}

void setup()
{
  Serial.begin(115200);
  while (!Serial)
    ; // シリアルが準備完了するのを待つ
  Serial.print("SSID に接続を試みています: ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);

  // Wi-Fi ネットワークへの接続を試みる
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    WiFi.begin(ssid, password);
    // 再試行まで 1 秒待つ
    delay(1000);
  }
  
  Serial.print("接続成功: ");
  Serial.println(ssid);
  delay(500);

  client.setServer(server, 1883);
  client.setCallback(callback);
}

void loop()
{
  if (!client.connected()) {
    reconnect();
  }
  client.loop();
}
```

### MQTTsサーバーへの接続例コード

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/mqtts.mp4" type="video/mp4" />
  </video></div>

この例では、Wio Terminalを使用してMQTTs接続を確立する方法を示します。ここでは無料のMQTTsサーバー[https://test.mosquitto.org/](https://test.mosquitto.org/)を使用し、加速度データをトピックに送信します。

- [**Arduino MQTTライブラリ**](https://github.com/knolleary/pubsubclient)をダウンロードしてインストールしてください。

- [**このWiki**](https://wiki.seeedstudio.com/ja/Wio-Terminal-IMU-Overview/)に従ってWio Terminal用の加速度センサーライブラリをインストールしてください。

- Wio Terminalは加速度データを`WioTerminal/IMU`トピックに公開し、`inTopic`トピックからメッセージを購読します。

```cpp
#include "rpcWiFi.h"
#include <PubSubClient.h>
#include <WiFiClientSecure.h>
#include"LIS3DHTR.h"

const char *ssid = "yourNetworkName";      // ネットワークSSID
const char *password = "yourNetworkPassword"; // ネットワークパスワード

const char *ID = "Wio-Terminal-Client";  // デバイス名（ユニークである必要があります）
const char *TOPIC = "WioTerminal/IMU";  // 購読するトピック
const char *subTopic = "inTopic";  // 購読するトピック

const char *server = "test.mosquitto.org"; // サーバーURL
const char *test_root_ca =
"-----BEGIN CERTIFICATE-----\n"
"MIIEAzCCAuugAwIBAgIUBY1hlCGvdj4NhBXkZ/uLUZNILAwwDQYJKoZIhvcNAQEL\n"
"BQAwgZAxCzAJBgNVBAYTAkdCMRcwFQYDVQQIDA5Vbml0ZWQgS2luZ2RvbTEOMAwG\n"
"A1UEBwwFRGVyYnkxEjAQBgNVBAoMCU1vc3F1aXR0bzELMAkGA1UECwwCQ0ExFjAU\n"
"BgNVBAMMDW1vc3F1aXR0by5vcmcxHzAdBgkqhkiG9w0BCQEWEHJvZ2VyQGF0Y2hv\n"
"by5vcmcwHhcNMjAwNjA5MTEwNjM5WhcNMzAwNjA3MTEwNjM5WjCBkDELMAkGA1UE\n"
"BhMCR0IxFzAVBgNVBAgMDlVuaXRlZCBLaW5nZG9tMQ4wDAYDVQQHDAVEZXJieTES\n"
"MBAGA1UECgwJTW9zcXVpdHRvMQswCQYDVQQLDAJDQTEWMBQGA1UEAwwNbW9zcXVp\n"
"dHRvLm9yZzEfMB0GCSqGSIb3DQEJARYQcm9nZXJAYXRjaG9vLm9yZzCCASIwDQYJ\n"
"KoZIhvcNAQEBBQADggEPADCCAQoCggEBAME0HKmIzfTOwkKLT3THHe+ObdizamPg\n"
"UZmD64Tf3zJdNeYGYn4CEXbyP6fy3tWc8S2boW6dzrH8SdFf9uo320GJA9B7U1FW\n"
"Te3xda/Lm3JFfaHjkWw7jBwcauQZjpGINHapHRlpiCZsquAthOgxW9SgDgYlGzEA\n"
"s06pkEFiMw+qDfLo/sxFKB6vQlFekMeCymjLCbNwPJyqyhFmPWwio/PDMruBTzPH\n"
"3cioBnrJWKXc3OjXdLGFJOfj7pP0j/dr2LH72eSvv3PQQFl90CZPFhrCUcRHSSxo\n"
"E6yjGOdnz7f6PveLIB574kQORwt8ePn0yidrTC1ictikED3nHYhMUOUCAwEAAaNT\n"
"MFEwHQYDVR0OBBYEFPVV6xBUFPiGKDyo5V3+Hbh4N9YSMB8GA1UdIwQYMBaAFPVV\n"
"6xBUFPiGKDyo5V3+Hbh4N9YSMA8GA1UdEwEB/wQFMAMBAf8wDQYJKoZIhvcNAQEL\n"
"BQADggEBAGa9kS21N70ThM6/Hj9D7mbVxKLBjVWe2TPsGfbl3rEDfZ+OKRZ2j6AC\n"
"6r7jb4TZO3dzF2p6dgbrlU71Y/4K0TdzIjRj3cQ3KSm41JvUQ0hZ/c04iGDg/xWf\n"
"+pp58nfPAYwuerruPNWmlStWAXf0UTqRtg4hQDWBuUFDJTuWuuBvEXudz74eh/wK\n"
"sMwfu1HFvjy5Z0iMDU8PUDepjVolOCue9ashlS4EB5IECdSR2TItnAIiIwimx839\n"
"LdUdRudafMu5T5Xma182OC0/u/xRlEm+tvKGGmfFcN0piqVl8OrSPBgIlb+1IKJE\n"
"m/XriWr/Cq4h/JfB7NTsezVslgkBaoU=\n"
"-----END CERTIFICATE-----\n";

long lastMsg = 0;

LIS3DHTR<TwoWire> lis;
WiFiClientSecure wifiClient;
PubSubClient client(wifiClient);

void callback(char *topic, byte *payload, unsigned int length)
{
  Serial.print("メッセージ受信 [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i = 0; i < length; i++)
  {
    Serial.print((char)payload[i]);
  }
  Serial.println();
}

void reconnect()
{
  // 再接続するまでループ
  while (!client.connected())
  {
    Serial.print("MQTT接続を試行中...");
    // 接続を試みる
    if (client.connect(ID))
    {
      Serial.println("接続成功");
      // 接続後、アナウンスを公開
      client.publish(TOPIC, "{\"message\": \"Wio Terminalが接続されました!\"}");
      Serial.println("接続メッセージを正常に公開しました!");
      // 再購読
      client.subscribe(subTopic);
      Serial.print("購読トピック: ");
      Serial.println(subTopic);
    }
    else
    {
      Serial.print("失敗, rc=");
      Serial.print(client.state());
      Serial.println(" 5秒後に再試行します");
      // 再試行まで5秒待機
      delay(5000);
    }
  }
}

void setup()
{
  // シリアルを初期化し、ポートが開くのを待つ
  Serial.begin(115200);
  while (!Serial)
    ; // シリアルが準備できるまで待機
  delay(1000);

  lis.begin(Wire1);
 
  if (!lis) {
    Serial.println("エラー");
    while(1);
  }
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); // データ出力レート
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); // スケール範囲を2gに設定

  Serial.print("SSIDに接続を試行中: ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);

  // Wi-Fiネットワークへの接続を試行
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    WiFi.begin(ssid, password);
    // 再試行まで1秒待機
    delay(1000);
  }
  Serial.print("接続成功: ");
  Serial.println(ssid);

  wifiClient.setCACert(test_root_ca);

  client.setServer(server, 8883);
  client.setCallback(callback);
}


void loop()
{
  if (!client.connected())
  {
    reconnect();
  }
  
  float x_values, y_values, z_values;
  
  // データ送信
  long now = millis();
  if (now - lastMsg > 5000) {
    lastMsg = now;
 
  x_values = lis.getAccelerationX();
  y_values = lis.getAccelerationY();
  z_values = lis.getAccelerationZ();
  String data="{\"x-axis\": "+String(x_values)+","+"\"y-axis\": "+String(y_values)+","+"\"z-axis\": "+String(z_values)+"}";

  if (!client.publish(TOPIC, data.c_str())) {
    Serial.println("メッセージ送信失敗");
  }
  Serial.printf("メッセージ送信 [%s] ", TOPIC);
  Serial.println(data);
  }
  
  client.loop();
}
```

### UDPクライアント例コード

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/udp-example.png" /></div>

この例ではWi-Fiに接続し、PC上で実行されているUDPサーバーにUDPパケットを送信します。

**注意:** PCとWio Terminalが同じネットワーク内にあることを確認してください！

#### Python UDPサーバーコード

- 以下のコードを`udp_server.py`として保存してください。

- Pythonスクリプトを実行します: **`python udp_server.py`**。

```py
# このPythonスクリプトはUDPポート3333でWio Terminalボードからのメッセージを受信し、それを表示します
import socket
import sys

try :
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
except socket.error, msg :
    print 'ソケットの作成に失敗しました。エラーコード: ' + str(msg[0]) + ' メッセージ: ' + msg[1]
    sys.exit()

try:
    s.bind(('', 3333))
except socket.error , msg:
    print 'バインドに失敗しました。エラー: ' + str(msg[0]) + ': ' + msg[1]
    sys.exit()
     
print 'サーバーがリスニング中'

while 1:
    d = s.recvfrom(1024)
    data = d[0]
     
    if not data: 
        break
    
    print data.strip()
    
s.close()
```

#### Arduinoコード

- `networkName` と `networkPswd` をあなたのWi-Fi設定に変更してください。

- `udpAddress` をPCのIPアドレスに変更し、UDPサーバーを実行しているPCが Wio Terminal と同じネットワーク上にあることを確認してください。

- コードを Wio Terminal にアップロードしてください。

```cpp
#include <rpcWiFi.h>
#include <WiFiUdp.h>

// WiFiネットワーク名とパスワード:
const char * networkName = "your-ssid";
const char * networkPswd = "your-password";

// UDPデータを送信するIPアドレス:
// サーバーのIPアドレスまたはネットワークブロードキャストアドレスを使用
const char * udpAddress = "192.168.0.255";
const int udpPort = 3333;

// 現在接続中かどうか？
boolean connected = false;

// UDPライブラリクラス
WiFiUDP udp;

void setup(){
  // ハードウェアシリアルを初期化:
  Serial.begin(115200);
  
  // Wi-Fiネットワークに接続
  connectToWiFi(networkName, networkPswd);
}

void loop(){
  // 接続中の場合のみデータを送信
  if(connected){
    // パケットを送信
    udp.beginPacket(udpAddress,udpPort);
    udp.printf("Seconds since boot: %lu", millis()/1000);
    udp.endPacket();
  }
  // 1秒待機
  delay(1000);
}

void connectToWiFi(const char * ssid, const char * pwd){
  Serial.println("Connecting to WiFi network: " + String(ssid));

  // 古い設定を削除
  WiFi.disconnect(true);
  // イベントハンドラを登録
  WiFi.onEvent(WiFiEvent);
  
  // 接続を開始
  WiFi.begin(ssid, pwd);

  Serial.println("Waiting for WIFI connection...");
}

// Wi-Fiイベントハンドラ
void WiFiEvent(WiFiEvent_t event){
    switch(event) {
      case SYSTEM_EVENT_STA_GOT_IP:
          // 接続時の処理
          Serial.print("WiFi connected! IP address: ");
          Serial.println(WiFi.localIP());  
          // UDP状態を初期化
          // 転送バッファを初期化
          udp.begin(WiFi.localIP(),udpPort);
          connected = true;
          break;
      case SYSTEM_EVENT_STA_DISCONNECTED:
          Serial.println("WiFi lost connection");
          connected = false;
          break;
      default: break;
    }
}
```

### Wi-Fi NTPサンプルコード

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/wifi-udp-rpc.png" /></div>

この例では、UDPを使用してNTP時間を取得し、SAMD51コアの内蔵RTCを使用して時間を更新します。

- [**Seeed_Arduino_RTC**](https://github.com/Seeed-Studio/Seeed_Arduino_RTC) ライブラリをインストールしてください。

- [**millisDelay**](https://github.com/ansonhe97/millisDelay) ライブラリをインストールしてください。

```cpp
#include <rpcWiFi.h>
#include <millisDelay.h>
#include "RTC_SAMD51.h"

const char ssid[] = "yourNetworkName"; // 必要なSSIDを追加
const char password[] = "yourNetworkPassword"; // ネットワークパスワードを追加

millisDelay updateDelay; // NTPの定期更新に使用する遅延オブジェクト

unsigned int localPort = 2390;      // UDPパケットをリッスンするローカルポート
char timeServer[] = "time.nist.gov"; // 外部NTPサーバー例: time.nist.gov

const int NTP_PACKET_SIZE = 48; // NTPタイムスタンプはメッセージの最初の48バイトに含まれる
byte packetBuffer[NTP_PACKET_SIZE]; // 受信および送信パケットを保持するバッファ

// 時間オブジェクトを宣言
DateTime now;

// Wi-Fiクライアントを定義
WiFiClient client;

// UDPライブラリクラス
WiFiUDP udp;

// ローカル時間
unsigned long devicetime;

RTC_SAMD51 rtc;

// Adafruit RTClibライブラリで使用する曜日
char daysOfTheWeek[7][12] = { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" };

void setup() {

    Serial.begin(115200);

    while (!Serial); // シリアルポートが接続されるのを待機（ネイティブUSB用）

    // RTCチェック前にネットワークを設定
    connectToWiFi(ssid, password);

    // NTP（UDP）呼び出しで時間を取得
    // getNTPtimeはタイムゾーン調整済みのエポックUTC時間を返すが、夏時間は考慮しない
    devicetime = getNTPtime();

    // RTCが存在するか確認
    if (devicetime == 0) {
        Serial.println("Failed to get time from network time server.");
    }

    if (!rtc.begin()) {
        Serial.println("Couldn't find RTC");
        while (1) delay(10); // 動作停止
    }

    // 現在のRTC時間を取得して表示
    now = rtc.now();
    Serial.print("RTC time is: ");
    Serial.println(now.timestamp(DateTime::TIMESTAMP_FULL));

    // NTP時間を使用して時間を調整
    rtc.adjust(DateTime(devicetime));

    // 起動時の更新詳細を表示
    Serial.println("RTC (boot) time updated.");
    // 調整後のRTC時間を取得して表示
    now = rtc.now();
    Serial.print("Adjusted RTC (boot) time is: ");
    Serial.println(now.timestamp(DateTime::TIMESTAMP_FULL));

    // 必要に応じてmillisdelaysタイマーを開始
    updateDelay.start(1 * 60 * 60 * 1000); // 毎時NTPで時間を更新

}

void loop() {

    if (updateDelay.justFinished()) { // 12時間ループ
        // タイマーを繰り返す
        updateDelay.repeat(); // 繰り返し

        // RTC時間を更新
        devicetime = getNTPtime();
        if (devicetime == 0) {
            Serial.println("Failed to get time from network time server.");
        }
        else {
            rtc.adjust(DateTime(devicetime));
            Serial.println("");
            Serial.println("rtc time updated.");
            // 調整後のRTC時間を取得して表示
            now = rtc.now();
            Serial.print("Adjusted RTC time is: ");
            Serial.println(now.timestamp(DateTime::TIMESTAMP_FULL));
        }
    }
}


void connectToWiFi(const char* ssid, const char* pwd) {
    Serial.println("Connecting to WiFi network: " + String(ssid));

    // 古い設定を削除
    WiFi.disconnect(true);

    Serial.println("Waiting for WIFI connection...");

    // 接続を開始
    WiFi.begin(ssid, pwd);

    while (WiFi.status() != WL_CONNECTED) {
        WiFi.begin(ssid, pwd);
        delay(500);
    }
    Serial.println("Connected.");
    printWifiStatus();

}

unsigned long getNTPtime() {

    // モジュールは1970年1月1日からの秒数としてunsigned long型の時間値を返す
    // 問題が発生した場合は0を返す

    // 接続中の場合のみデータを送信
    if (WiFi.status() == WL_CONNECTED) {
        // UDP状態を初期化
        // 転送バッファを初期化
        udp.begin(WiFi.localIP(), localPort);

        sendNTPpacket(timeServer); // 時間サーバーにNTPパケットを送信
        // 応答が利用可能かどうかを確認
        delay(1000);

        if (udp.parsePacket()) {
            Serial.println("udp packet received");
            Serial.println("");
            // パケットを受信したのでデータを読み取る
            udp.read(packetBuffer, NTP_PACKET_SIZE); // バッファにパケットを読み込む

            // タイムスタンプは受信パケットのバイト40から始まり、4バイトまたは2ワードの長さ
            // 最初に2ワードを抽出:
            unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);
            unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);
            // 4バイト（2ワード）を長整数に結合
            // これはNTP時間（1900年1月1日からの秒数）:
            unsigned long secsSince1900 = highWord << 16 | lowWord;
            // Unix時間は1970年1月1日から始まる。秒数では2208988800:
            const unsigned long seventyYears = 2208988800UL;
            // 70年を引く:
            unsigned long epoch = secsSince1900 - seventyYears;

            // タイムゾーンオフセットを秒単位で調整（UTCからの+/-）
            // WA時間のUTCからのオフセットは+8時間（28,800秒）
            // + GMTの東
            // - GMTの西
            long tzOffset = 28800UL;

            // WAローカル時間 
            unsigned long adjustedTime;
            return adjustedTime = epoch + tzOffset;
        }
        else {
            // UDPパケットを正常に解析できなかった
            // UDP接続をクリア
            udp.stop();
            return 0; // 失敗を示す0を返す
        }
        // NTP時間を頻繁に呼び出さない場合、stopでリソースを解放
        udp.stop();
    }
    else {
        // ネットワークが接続されていない
        return 0;
    }

}

// 指定されたアドレスの時間サーバーにNTPリクエストを送信
unsigned long sendNTPpacket(const char* address) {
    // バッファ内のすべてのバイトを0に設定
    for (int i = 0; i < NTP_PACKET_SIZE; ++i) {
        packetBuffer[i] = 0;
    }
    // NTPリクエストを形成するために必要な値を初期化
    // （パケットの詳細は上記URLを参照）
    packetBuffer[0] = 0b11100011;   // LI, バージョン, モード
    packetBuffer[1] = 0;     // ストラタムまたはクロックの種類
    packetBuffer[2] = 6;     // ポーリング間隔
    packetBuffer[3] = 0xEC;  // ピアクロック精度
    // ルート遅延とルート分散のための8バイトのゼロ
    packetBuffer[12] = 49;
    packetBuffer[13] = 0x4E;
    packetBuffer[14] = 49;
    packetBuffer[15] = 52;

    // すべてのNTPフィールドに値が設定されたので、
    // タイムスタンプを要求するパケットを送信可能:
    udp.beginPacket(address, 123); // NTPリクエストはポート123に送信
    udp.write(packetBuffer, NTP_PACKET_SIZE);
    udp.endPacket();
}

void printWifiStatus() {
    // 接続しているネットワークのSSIDを表示:
    Serial.println("");
    Serial.print("SSID: ");
    Serial.println(WiFi.SSID());

    // Wi-FiシールドのIPアドレスを表示:
    IPAddress ip = WiFi.localIP();
    Serial.print("IP Address: ");
    Serial.println(ip);

    // 受信信号強度を表示:
    long rssi = WiFi.RSSI();
    Serial.print("signal strength (RSSI):");
    Serial.print(rssi);
    Serial.println(" dBm");
    Serial.println("");
}
```

## Wi-Fiをアクセスポイント（AP）モード / Webサーバーとして設定する

- Arduinoで`rpcWiFi.h`、`WiFiClient.h`、`WifiAP.h`ライブラリをインクルードします。

- AP Wi-Fiの`ssid`と`password`を設定します。

- ポート80でWi-Fiサーバーを初期化します：

```cpp
WiFiServer server(80);
```

- `ssid`と`password`を使用してAPを初期化します：

```cpp
WiFi.softAP(ssid, password);
```

- Webサーバーを開始します：

```cpp
server.begin();
```

### APモードとして設定（簡易Webサーバー）例コード

この例では、Wio Terminalを簡易Webサーバーとして設定し、APネットワークに接続してHTTPの応答に基づいてハードウェアを制御できるようにします。

```cpp
/*
    WiFiAccessPoint.inoはWiFiアクセスポイントを作成し、その上でWebサーバーを提供します。

    手順:
    1. アクセスポイント "yourAp" に接続します。
    2. Webブラウザで http://<This-AP-IP>/H にアクセスしてLEDをオンにするか、http://<This-AP-IP>/L にアクセスしてLEDをオフにします。
       (<This-AP-IP> はターミナル/シリアルポートで取得したIPに置き換えてください。Note 1を参照)
     または、
     PuTTYターミナルでIPアドレス（Note 1を参照）とポート80を使用して、"GET /H" および "GET /L" の生のTCPコマンドを実行します。

    Created for arduino-esp32 on 04 July, 2018
    by Elochukwu Ifediora (fedy0)
*/

#include <rpcWiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>

#define LED_BUILTIN 2   // テスト用LEDを接続したGPIOピンを設定します。
                        // または、開発ボードに内蔵LEDがある場合はこの行をコメントアウトします。

// 希望する認証情報を設定します。
const char* ssid = "yourAP";
const char* password = "yourPassword";

WiFiServer server(80);


void setup() {
    pinMode(LED_BUILTIN, OUTPUT);

    Serial.begin(115200);
    while(!Serial); // シリアルが準備完了するまで待機
    delay(1000);
    Serial.println();
    Serial.println("アクセスポイントを設定中...");

    // APをオープンにしたい場合は、passwordパラメータを削除できます。
    WiFi.softAP(ssid, password);
    IPAddress myIP = WiFi.softAPIP();
    /*
     * Note 1
     * このIPを記録してください。クライアント（例：Webブラウザ）で使用します。
     */
    Serial.print("AP IPアドレス: ");
    Serial.println(myIP);
    server.begin();

    Serial.println("サーバーが開始されました");
}

void loop() {
    WiFiClient client = server.available();   // 接続してくるクライアントを待機

    if (client) {                             // クライアントが接続した場合、
        Serial.println("新しいクライアントが接続しました。"); // シリアルポートにメッセージを出力
        String currentLine = "";                // クライアントからのデータを保持するための文字列を作成
        while (client.connected()) {            // クライアントが接続している間ループ
            if (client.available()) {             // クライアントから読み取れるバイトがある場合、
                char c = client.read();             // バイトを読み取り、
                Serial.write(c);                    // シリアルモニターに出力
                if (c == '\n') {                    // バイトが改行文字の場合

                    // 現在の行が空白の場合、2つの改行文字が連続していることを意味します。
                    // これはクライアントHTTPリクエストの終了を示し、応答を送信します：
                    if (currentLine.length() == 0) {
                        // HTTPヘッダーは常にレスポンスコード（例：HTTP/1.1 200 OK）と
                        // コンテンツタイプで始まり、クライアントに何が来るかを知らせます。その後に空白行が続きます：
                        client.println("HTTP/1.1 200 OK");
                        client.println("Content-type:text/html");
                        client.println();

                        // HTTPレスポンスの内容はヘッダーの後に続きます：
                        client.print("LEDをオンにするには<a href=\"/H\">ここをクリック</a>してください。<br>");
                        client.print("LEDをオフにするには<a href=\"/L\">ここをクリック</a>してください。<br>");

                        // HTTPレスポンスはさらに空白行で終了します：
                        client.println();
                        // whileループを抜けます：
                        break;
                    } else {    // 改行があった場合、currentLineをクリアします：
                        currentLine = "";
                    }
                } else if (c != '\r') {  // キャリッジリターン文字以外の場合、
                    currentLine += c;      // currentLineの末尾に追加します
                }

                // クライアントリクエストが "GET /H" または "GET /L" であるか確認します：
                if (currentLine.endsWith("GET /H")) {
                    digitalWrite(LED_BUILTIN, HIGH);               // GET /H はLEDをオンにします
                }
                if (currentLine.endsWith("GET /L")) {
                    digitalWrite(LED_BUILTIN, LOW);                // GET /L はLEDをオフにします
                }
            }
        }
        // 接続を閉じます：
        client.stop();
        Serial.println("クライアントが切断されました。");
    }
}
```

## よくある質問 (FAQs)

1. ArduinoコードでRTL8720のファームウェアバージョンを確認する方法は？

```cpp
#include "rpcWiFi.h"

void setup() {
    Serial.begin(115200);
    while(!Serial); // シリアルモニタが開くのを待つ
    Serial.printf("RTL8720 Firmware Version: %s", rpc_system_version());
}

void loop() {
}
```

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>