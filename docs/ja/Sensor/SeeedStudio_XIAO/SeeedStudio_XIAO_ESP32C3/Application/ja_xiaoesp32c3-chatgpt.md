---
description: XIAO ESP32C3-Chatgpt
title: XIAO ESP32C3-Chatgpt
keywords:
- XIAO ESP32C3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/xiaoesp32c3-chatgpt
last_update:
  date: 03/03/2023
  author: Citric
---
# XIAO ESP32C3でWiFiClientとHTTPClientの使い方を学ぶ - XIAO ESP32C3 & ChatGPTの実践

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/18.png"/></div>

ChatGPTは新しいチャットボットモデルで、人工知能研究所OpenAIが2022年11月30日にリリースした、人工知能技術を活用した自然言語処理ツールです。

人間の言語を学習・理解することで会話を行うことができ、チャットの文脈に基づいて対話することも可能で、まさに人間のようにチャットやコミュニケーションを行い、メール作成、動画スクリプト、コピーライティング、翻訳、コーディングなどのタスクも実行できます。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/2.png"/></div>

組み込みシステムにおいて、ChatGPTは簡単なプログラムの作成を支援したり、プログラムに現れるバグのチェックや修正を行う優れたヘルパーとなることができます。

興味深いことに、OpenAIは公式にGPT-3モデルを呼び出すためのインターフェースを提供しており、これにより様々な方法でこれらのインターフェースを呼び出し、この素晴らしいモデルを私たち自身の組み込みシステムにデプロイすることができます。

Seeed Studio XIAO ESP32C3は、Espressif ESP32-C3 WiFi/BluetoothデュアルモードチップをベースとしたIoTミニ開発ボードです。優れた無線周波数性能を持ち、IEEE 802.11 b/g/n WiFiとBluetooth 5（LE）プロトコルをサポートしています。ESP32公式が提供するWiFi ClientとWiFi Serverのサービスを完璧にサポートできます。もちろん、Arduinoも完璧にサポートできます。

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

そこで本チュートリアルでは、ユーザーがXIAO ESP32C3のWiFiClientとHTTPClientライブラリの学習と使用方法、ネットワークへの接続方法、Webページの公開方法、HTTP GETとPOSTの基礎について説明します。目標はOpenAI ChatGPTを呼び出し、独自のQ&AWebサイトを作成することです。

## はじめに

本チュートリアルでは、XIAO ESP32C3を使用して独自のChatGPT Q&Aページを構成します。このページでは質問を入力でき、XIAO ESP32C3が質問を記録し、OpenAIが提供するAPI呼び出し方法を使用してHTTP Clientでリクエストコマンドを送信し、ChatGPTの回答を取得してシリアルポートに出力します。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/19.png"/></div>

本チュートリアルのタスクは、以下の4つの主要なステップに分けることができます。

1. [XIAO ESP32C3をネットワークに接続するよう設定](#configure-the-xiao-esp32c3-to-connect-to-the-network)：このステップでは、XIAO ESP32C3を使用した基本的なWiFi設定プロセスを学び、ネットワーク設定、ネットワークサービスへの接続、IPアドレスの取得などのXIAO ESP32C3の基本操作を学習します。

2. [組み込みWebページの構築](#build-the-embedded-web-page)：このステップでは、主にWiFi Clientライブラリに触れます。このライブラリのGETとPOST機能を使用することで、HTMLを使用して独自のQ&AWebページを作成し、XIAO ESP32C3上にデプロイできます。

3. [内蔵Webページ経由での質問送信](#submit-questions-via-the-built-in-web-page)：このステップでは、主にHTTP ClientのPOSTメソッドを使用して、OpenAI API標準に従って質問をPOSTする方法を学習します。Webページから質問を収集・保存するプロセスに主な注意を向けます。

4. [ChatGPTから回答を取得](#get-answers-from-chatgpt)：このステップでは、HTTP ClientのPOSTメソッドを使用し、返されたメッセージから必要な質問の回答を抽出する方法を学習します。最後のステップは、コードの構造を整理し、最終的な統合を行うことです。

### 必要な材料

<table align="center">
 <tr>
     <th>材料</th>
 </tr>
    <tr>
     <td align="center"><div align="center"><img width ="130" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
 </tr>
 <tr>
     <td align="center"><a href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html"><strong>今すぐ購入</strong></a></td>
 </tr>
</table>

### 事前準備

このチュートリアルのすべての手順とステップは、XIAO ESP32C3 に基づいて完了しています。準備段階では、まず XIAO ESP32C3 を使用するための環境設定を完了する必要があります。

**ステップ 1.** USB Type-C ケーブルを使用して XIAO ESP32C3 をコンピュータに接続します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" alt="pir" width="120" height="auto"/></div>

**ステップ 2.** お使いのオペレーティングシステムに応じて、最新バージョンの Arduino IDE をダウンロードしてインストールします

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width="600" height="auto"/></a></p>

**ステップ 3.** Arduino アプリケーションを起動します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

- **ステップ 4.** Arduino IDE に ESP32 ボードパッケージを追加します

**File > Preferences** に移動し、**"Additional Boards Manager URLs"** に以下の URL を入力します：
*[https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_dev_index.json](https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_dev_index.json)*

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/4.png"/></div>

**Tools > Board > Boards Manager...** に移動し、検索ボックスにキーワード "**esp32**" を入力し、****esp32**** の最新バージョンを選択してインストールします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_esp32c3.png" alt="pir" width="650" height="auto"/></div>

- **ステップ 5.** ボードとポートを選択します

**Tools > Board > ESP32 Arduino** に移動し、"**XIAO_ESP32C3**" を選択します。ボードのリストは少し長いので、下までスクロールする必要があります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_board.png" alt="pir" width="800" height="auto"/></div>

**Tools > Port** に移動し、接続された XIAO ESP32C3 のシリアルポート名を選択します。これは COM3 以上である可能性が高いです（**COM1** と **COM2** は通常ハードウェアシリアルポート用に予約されています）。

## XIAO ESP32C3 をネットワークに接続するための設定

WiFi の使用については、[XIAO ESP32C3 の WiFi 使用チュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_WiFi_Usage/#connect-to-a-wifi-network)で詳しく説明されています。

ESP32 が Wi-Fi ステーションとして設定されている場合、他のネットワーク（ルーターなど）に接続できます。このシナリオでは、ルーターが ESP ボードに一意の IP アドレスを割り当てます。

ESP32 Wi-Fi 機能を使用するために最初に行う必要があることは、以下のようにコードに WiFi.h ライブラリを含めることです：

```c
#include <WiFi.h>
```

ESP32を特定のWi-Fiネットワークに接続するには、そのSSIDとパスワードを知っている必要があります。さらに、そのネットワークはESP32のWi-Fi範囲内にある必要があります。

まず、Wi-Fiモードを設定します。ESP32が他のネットワーク（アクセスポイント/ホットスポット）に接続される場合、ステーションモードである必要があります。

```c
WiFi.mode(WIFI_STA);
```

次に、`WiFi.begin()`を使用してネットワークに接続します。引数としてネットワークのSSIDとそのパスワードを渡す必要があります。

Wi-Fiネットワークへの接続には時間がかかる場合があるため、通常は`WiFi.status()`を使用して接続が既に確立されているかどうかを継続的にチェックするwhileループを追加します。接続が正常に確立されると、`WL_CONNECTED`が返されます。

ESP32がWi-Fiステーションとして設定されている場合、他のネットワーク（ルーターなど）に接続できます。このシナリオでは、ルーターがESP32ボードに一意のIPアドレスを割り当てます。ボードのIPアドレスを取得するには、ネットワークとの接続を確立した後に`WiFi.localIP()`を呼び出す必要があります。

```c
void WiFiConnect(void){
    WiFi.begin(ssid, password);
    Serial.print("Connecting to ");
    Serial.println(ssid);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }

    Serial.println("");
    Serial.println("WiFi connected!");
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());
}
```

`ssid` と `password` 変数は、接続したいネットワークのSSIDとパスワードを保持します。

```c
// Replace with your network credentials
const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";
```

これは非常にシンプルなWiFi接続プログラムです。プログラムをXIAO ESP32C3にアップロードし、シリアルアシスタントを開いてボーレートを115200に設定してください。接続がうまくいけば、XIAOのIPアドレスが印刷されるのを確認できます。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/5.png"/></div>

WiFiにおけるESP32C3のアプリケーションと機能についてさらに詳しく読むことに興味がある場合は、[ESP32 Useful Wi-Fi Library Functions](https://randomnerdtutorials.com/esp32-useful-wifi-functions-arduino/)を読むことをお勧めします。

## 組み込みWebページの構築

ESP32はWiFiライブラリに多くの非常に有用なWiFiClient機能を統合しており、これにより追加のライブラリを追加することなく組み込みWebページを設計・開発することができます。

このオブジェクトを使用してXIAO ESP32C3が確立したIoTサーバーを制御するために、新しいWiFiServerオブジェクトを作成します。

```c
WiFiServer server(80);
WiFiClient client1;
```

上記のステップで、XIAO ESP32C3 をWiFiに接続しました。WiFi接続が成功すると、シリアルモニターからXIAOの現在のIPアドレスを取得できるようになります。この時点で、XIAOはWebサーバーの設定に成功しています。XIAOのIPアドレスを通じてこのWebサーバーにアクセスできます。

あなたのXIAO ESP32C3 のIPアドレスが `192.168.7.152` だとします。次に、ブラウザを通じてこのIPアドレスを入力できます。

このIPアドレスを入力した後、空白のページしか表示されない場合があります。これは、そのページのページコンテンツをまだ公開していないためです。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/6.png"/></div>

それでは、レイアウトしたいページのコンテンツ、つまりHTMLコードをCで格納するための配列を作成しましょう。

```c
const char html_page[] PROGMEM = {
    "HTTP/1.1 200 OK\r\n"
    "Content-Type: text/html\r\n"
    "Connection: close\r\n"  // the connection will be closed after completion of the response
    //"Refresh: 1\r\n"         // refresh the page automatically every n sec
    "\r\n"
    "<!DOCTYPE HTML>\r\n"
    "<html>\r\n"
    "<head>\r\n"
      "<meta charset=\"UTF-8\">\r\n"
      "<title>Cloud Printer: ChatGPT</title>\r\n"
      "<link rel=\"icon\" href=\"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/chatgpt-logo.png\" type=\"image/x-icon\">\r\n"
    "</head>\r\n"
    "<body>\r\n"
    "<img alt=\"SEEED\" src=\"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/logo.png\" height=\"100\" width=\"410\">\r\n"
    "<p style=\"text-align:center;\">\r\n"
    "<img alt=\"ChatGPT\" src=\"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/chatgpt-logo.png\" height=\"200\" width=\"200\">\r\n"
    "<h1 align=\"center\">Cloud Printer</h1>\r\n" 
    "<h1 align=\"center\">OpenAI ChatGPT</h1>\r\n" 
    "<div style=\"text-align:center;vertical-align:middle;\">"
    "<form action=\"/\" method=\"post\">"
    "<input type=\"text\" placeholder=\"Please enter your question\" size=\"35\" name=\"chatgpttext\" required=\"required\"/>\r\n"
    "<input type=\"submit\" value=\"Submit\" style=\"height:30px; width:80px;\"/>"
    "</form>"
    "</div>"
    "</p>\r\n"
    "</body>\r\n"
    "<html>\r\n"
};
```

このコードにより、以下の図に示すページ効果が得られます。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/7.png"/></div>

:::tip
ウェブページのHTML構文はこのチュートリアルの範囲を超えています。HTMLの使用方法を独自に学習するか、または既存の生成ツールを使用してコード生成作業を行うことができます。[HTML Generator](https://webcode.tools/generators/html)の使用をお勧めします。
注目すべき点として、Cプログラムでは「\\」と「"」は特殊文字であり、プログラム内でこれらの特殊文字の機能を保持したい場合は、その前に右スラッシュを追加する必要があります。
:::

Client1はウェブサーバーが確立された後のSocketクライアントを指し、以下のコードはウェブサーバー処理のフローです。

```c
client1 = server.available();
if (client1){
    Serial.println("New Client.");           // print a message out the serial port
    // an http request ends with a blank line
    boolean currentLineIsBlank = true;    
    while (client1.connected()){
        if (client1.available()){  // Check if the client is connected
            char c = client1.read();
            json_String += c;
            if (c == '\n' && currentLineIsBlank) {                                 
                dataStr = json_String.substring(0, 4);
                Serial.println(dataStr);
                if(dataStr == "GET "){
                    client1.print(html_page);  //Send the response body to the client
                }         
                else if(dataStr == "POST"){
                    json_String = "";
                    while(client1.available()){
                        json_String += (char)client1.read();
                    }
                    Serial.println(json_String); 
                    dataStart = json_String.indexOf("chatgpttext=") + strlen("chatgpttext=");
                    chatgpt_Q = json_String.substring(dataStart, json_String.length());                    
                    client1.print(html_page);        
                    // close the connection:
                    delay(10);
                    client1.stop();       
                }
                json_String = "";
                break;
            }
            if (c == '\n') {
                // you're starting a new line
                currentLineIsBlank = true;
            }
            else if (c != '\r') {
                // you've gotten a character on the current line
                currentLineIsBlank = false;
            }
        }
    }
}
```

上記のサンプルプログラムでは、IoTサーバーを開始するために`server.begin()`を使用する必要があります。この文は`setup`関数内に配置する必要があります。

```c
void setup()
{
    Serial.begin(115200);
 
    // Set WiFi to station mode and disconnect from an AP if it was previously connected
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    while(!Serial);

    Serial.println("WiFi Setup done!");
    WiFiConnect();

    // Start the TCP server server
    server.begin();
}
```

上記のプログラムを実行し、XIAO ESP32C3 のIPアドレスをブラウザに入力すると（ホストもXIAO ESP32C3 と同じLAN上にある必要があります）、WiFiClientのGETステップが実行を開始します。この時点で、クライアント側のprintメソッドの助けを借りて、ページのHTMLコードを送信します。

```c
if(dataStr == "GET "){
    client1.print(html_page);
}
```

そして、ページに質問入力用の入力ボックスを設計し、ユーザーがコンテンツを入力して**Submit**ボタンをクリックした後、Webページはボタンの状態を取得し、入力された質問を文字列変数`chatgpt_Q`に格納します。

```c
json_String = "";
while(client1.available()){
    json_String += (char)client1.read();
}
Serial.println(json_String); 
dataStart = json_String.indexOf("chatgpttext=") + strlen("chatgpttext=");
chatgpt_Q = json_String.substring(dataStart, json_String.length());                    
client1.print(html_page);        
// close the connection:
delay(10);
client1.stop();      
```

実行効果は以下の通りです。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/15.png"/></div>

## 内蔵Webページ経由で質問を送信する

上記のステップのページには、入力ボックスがあります。この入力ボックスは、ユーザーが質問したい内容を入力する場所です。私たちがする必要があることは、この質問を取得し、OpenAIが提供するAPIリクエストを通じて送信することです。

**ステップ1**. OpenAIアカウントに登録する。

[こちら](https://beta.openai.com/signup)をクリックしてOpenAIの登録アドレスにアクセスできます。以前にアカウントを登録したことがある場合は、このステップをスキップできます。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/8.png"/></div>

**ステップ2**. OpenAI APIを取得する。

[OpenAIウェブサイト](https://platform.openai.com/overview)にログインし、右上角のアカウントアバターをクリックして、**View API keys**を選択します。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/9.png"/></div>

新しくポップアップしたページで**+Create new secret key**を選択し、キーをコピーして保存します。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/10.png"/></div>

同時に、プログラム内で文字列変数を作成し、このキーをここにコピーできます。

```c
char chatgpt_token[] = "sk**********Rj9DYiXLJJH";
```

:::tip
2023年2月15日現在、OpenAIは新規ユーザー全員に**$18**相当のクレジットを無料で提供しています。詳細な料金は、OpenAIの[ドキュメント](https://openai.com/api/pricing/)で確認できます。
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/11.png"/></div>
:::

**ステップ3**. OpenAIのHTTPリクエストに従ってプログラムを作成します。

OpenAIは非常に詳細な[API使用説明書](https://platform.openai.com/docs/api-reference/making-requests)を提供しており、ユーザーが自分のAPIキーを使用してChatGPTを呼び出すことができます。

ChatGPTのドキュメントによると、リクエストを送信する必要がある形式は以下の通りです：

```shell
curl https://api.openai.com/v1/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{"model": "gpt3.5-turbo-instruct", "prompt": "Say this is a test", "temperature": 0, "max_tokens": 7}'
```

Hypertext Transfer Protocol（HTTP）は、クライアントとサーバー間のリクエスト-レスポンスプロトコルとして動作します。
**GET**は指定されたリソースからデータを要求するために使用されます。APIから値を取得するためによく使用されます。
**POST**はリソースを作成/更新するためにサーバーにデータを送信するために使用されます。
ESP32は3つの異なるタイプのボディリクエストを使用してHTTP POSTリクエストを作成できます：URLエンコード、JSONオブジェクト、またはプレーンテキスト。これらは最も一般的な方法であり、ほとんどのAPIやWebサービスと統合できるはずです。

上記の情報は非常に重要であり、HTTP POSTプログラムを書くための理論的基礎を提供します。最初に、HTTPClientライブラリをインポートすることから始めます。

```c
#include <HTTPClient.h>
```

OpenAIのドメイン名も入力する必要があります。これによりESPがChatGPTに質問を送信します。そしてOpenAI APIキーも忘れずに入力してください。

```c
HTTPClient https;

const char* chatgpt_token = "YOUR_API_KEY";
char chatgpt_server[] = "https://api.openai.com/v1/completions";
```

JSONオブジェクトを使用してHTTP POSTリクエストを作成する必要があります。

```c
if (https.begin(chatgpt_server)) {  // HTTPS
    https.addHeader("Content-Type", "application/json"); 
    String token_key = String("Bearer ") + chatgpt_token;
    https.addHeader("Authorization", token_key);
    String payload = String("{\"model\": \"gpt-3.5-turbo-instruct\", \"prompt\": \"") + chatgpt_Q + String("\", \"temperature\": 0, \"max_tokens\": 100}"); //Instead of TEXT as Payload, can be JSON as Paylaod
    httpCode = https.POST(payload);   // start connection and send HTTP header
    payload = "";
}
else {
    Serial.println("[HTTPS] Unable to connect");
    delay(1000);
}
```

プログラムでは、`POST()` メソッドを使用してサーバーに `payload` を送信します。`chatgpt_Q` は ChatGPT に送信したい質問の内容で、Get Question ページで利用できます。

ESP32C3 HTTPClient のより多くの機能に興味がある場合は、[ESP32 HTTP GET and HTTP POST with Arduino IDE](https://randomnerdtutorials.com/esp32-http-get-post-arduino/) を読むことをお勧めします。

## ChatGPT から回答を取得する

次のステップは、このチュートリアル全体の最後のステップで、ChatGPT への回答を取得して記録する方法です。

OpenAI が提供する [API ドキュメント](https://platform.openai.com/docs/api-reference/making-requests) を読み続けて、ChatGPT が返すメッセージ内容の構造がどのように見えるかを理解しましょう。これにより、必要なコンテンツを解析するプログラムを書くことができます。

```shell
{
  "id": "cmpl-uqkvlQyYK7bGYrRHQ0eXlWi7",
  "object": "text_completion",
  "created": 1589478378,
  "model": "gpt-3.5-turbo-instruct",
  "system_fingerprint": "fp_44709d6fcb",
  "choices": [
    {
      "text": "\n\nThis is indeed a test",
      "index": 0,
      "logprobs": null,
      "finish_reason": "length"
    }
  ],
  "usage": {
    "prompt_tokens": 5,
    "completion_tokens": 7,
    "total_tokens": 12
  }
}
```

OpenAIが提供するリファレンスドキュメントから、インターフェースが返すメッセージ内の質問に対する回答の位置が `{"choices": [{"text": "\n\nxxxxxxx",}]}` にあることがわかります。

そこで、必要な「回答」は **\n\n** で始まり **,** で終わることが確実にわかります。そして、プログラムでは `indexOf()` メソッドを使用してテキストの開始位置と終了位置を取得し、返された回答の内容を保存することができます。

```c
dataStart = payload.indexOf("\\n\\n") + strlen("\\n\\n");
dataEnd = payload.indexOf("\",", dataStart); 
chatgpt_A = payload.substring(dataStart, dataEnd);
```

要約すると、プログラムの現在の状態でswitch文を使用して、プログラムのどのステップを実行すべきかを決定することができます。

```c
typedef enum 
{
  do_webserver_index,
  send_chatgpt_request,
  get_chatgpt_list,
}STATE_;

STATE_ currentState;

switch(currentState){
    case do_webserver_index:
        ...
    case send_chatgpt_request:
        ...
    case get_chatgpt_list:
        ...
}
```

この時点で、プログラム全体のロジックが構造化されました。完全なプログラムコードは、下の画像をクリックすることで取得できます。プログラムをアップロードする前に、プログラムの **ssid、password、chatgpt_token** を自分のものに変更する必要があります。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/xiaoesp32c3-chatgpt" target="_blank"><div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></div></a></p>

それでは、自由にお使いください！

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/16.gif"/></div>

## 次のステップ

このチュートリアルでは、Arduino - XIAO ESP32C3 のような組み込み開発ボードでChatGPTを使用してOpenAI インターフェースを呼び出す基本的な方法を提供しました。次は、あなたの創造性を自由に発揮してください！

例えば、スクリーンやキーボードを追加して、あなただけのために動作するスタンドアロンディスプレイデバイスにすることを考えてみませんか？Gavinの創造性をご覧ください。彼は特に興味深い監視デバイスを作りました！このチュートリアルに必要なステップとアイデアを提供してくれた彼に特別な感謝を表します。

- [Gavin - ChatGPT Recorder & Monitor](https://www.hackster.io/gavinchiong/chatgpt-recorder-monitor-601ef6)

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/14.jpg"/></div>

または、さらに一歩進んで音声認識モジュールを追加し、今後キーボードとマウスから解放されて独自の音声アシスタントを作るなど。いずれにしても、XIAO ESP32C3 のような素晴らしい製品であなたの作品を共有していただけることを楽しみにしています！

## トラブルシューティング

### Q1: XIAO ESP32C3 を使用してOpenAI APIを呼び出してChatGPTの回答を取得する際に、地理的制限やネットワーク制限はありますか？

> A: 2023年2月17日のテスト時点では、中国本土の著者が中国のネットワークを使用してもChatGPTの応答を非常にスムーズに取得でき、現在のところ制限はありません。OpenAI APIキーを取得できる限り、呼び出しはスムーズに完了します。

### Q2: なぜTime Outエラーが返されるのですか？

>A: これは、ChatGPTがメッセージに返信するのに時間がかかりすぎるため、プログラムが応答していないと誤認してしまうことが原因である可能性があります。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験を可能な限りスムーズにするため、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
