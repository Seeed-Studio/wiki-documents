---
description: XIAO ESP32C3-Chatgpt
title: XIAO ESP32C3-Chatgpt
keywords:
- XIAO ESP32C3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/xiaoesp32c3-chatgpt
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# WiFiClient と HTTPClient を使用して XIAO ESP32C3 を学ぶ - XIAO ESP32C3 と ChatGPT の実践

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/18.png"/></div>

ChatGPT は新しいチャットボットモデルであり、OpenAI（人工知能研究所）が 2022 年 11 月 30 日にリリースした人工知能技術を活用した自然言語処理ツールです。

このモデルは、人間の言語を学習し理解することで会話を行うことができ、チャットの文脈に基づいてインタラクションを行うことも可能です。本当に人間のように会話し、コミュニケーションを取るだけでなく、メールの作成、ビデオスクリプトの作成、コピーライティング、翻訳、コーディングなどのタスクも実行できます。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/2.png"/></div>

組み込みシステムにおいて、ChatGPT は簡単なプログラムの作成を支援したり、プログラム内で発生するバグをチェックして修正したりする優れた助っ人となります。

さらに興奮するのは、OpenAI が GPT-3 モデルを呼び出すためのインターフェースを公式に提供していることです。これにより、これらのインターフェースを呼び出し、さまざまな方法でこの優れたモデルを独自の組み込みシステムに展開することが可能になります。

Seeed Studio XIAO ESP32C3 は、Espressif ESP32-C3 WiFi/Bluetooth デュアルモードチップに基づいた IoT ミニ開発ボードです。優れた無線周波数性能を持ち、IEEE 802.11 b/g/n WiFi と Bluetooth 5 (LE) プロトコルをサポートしています。ESP32 公式が提供する WiFi クライアントおよび WiFi サーバーのサービスを完全にサポートすることができ、もちろん Arduino も完全にサポートします。

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

このチュートリアルでは、ユーザーが XIAO ESP32C3 の WiFiClient および HTTPClient ライブラリを学び、使用する方法、ネットワークへの接続方法、ウェブページの公開方法、HTTP GET および POST の基本を学ぶことを案内します。目標は OpenAI ChatGPT を呼び出し、独自の Q&A ウェブサイトを作成することです。

## はじめに

このチュートリアルでは、XIAO ESP32C3 を使用して独自の ChatGPT Q&A ページを構成します。このページでは、質問を入力すると、XIAO ESP32C3 が質問を記録し、OpenAI が提供する API 呼び出し方法を使用して HTTP クライアントを介してリクエストコマンドを送信し、ChatGPT の回答を取得してシリアルポートに出力します。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/19.png"/></div>

このチュートリアルのタスクは、以下の 4 つの主要なステップに分けられます。

1. [XIAO ESP32C3 をネットワークに接続するよう構成する](#configure-the-xiao-esp32c3-to-connect-to-the-network) : このステップでは、XIAO ESP32C3 を使用した基本的な WiFi 構成プロセスを学び、ネットワーク構成、ネットワークサービスへの接続、IP アドレスの取得など、XIAO ESP32C3 の基本操作を学びます。

2. [組み込みウェブページを構築する](#build-the-embedded-web-page) : このステップでは主に WiFi クライアントライブラリに触れます。このライブラリの GET および POST 機能を使用して、HTML を使用して独自の Q&A ウェブページを作成し、XIAO ESP32C3 上にデプロイします。

3. [組み込みウェブページを介して質問を送信する](#submit-questions-via-the-built-in-web-page) : このステップでは主に HTTP クライアントの POST メソッドを使用して、OpenAI API 標準に従って質問を POST する方法を学びます。ウェブページから質問を収集して保存するプロセスに主に焦点を当てます。

4. [ChatGPT から回答を取得する](#get-answers-from-chatgpt) : このステップでは HTTP クライアントの POST メソッドを使用して、必要な質問の回答を返されたメッセージから抽出する方法を学びます。最後のステップではコードの構造を整理し、最終的な統合を行います。

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

このチュートリアルのすべての手順とステップは、XIAO ESP32C3 を基に完了しています。準備段階では、まず XIAO ESP32C3 を使用するための環境構成を完了する必要があります。

**ステップ 1.** USB Type-C ケーブルを使用して XIAO ESP32C3 をコンピュータに接続します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" alt="pir" width="120" height="auto"/></div>

**ステップ 2.** オペレーティングシステムに応じて、最新バージョンの Arduino IDE をダウンロードしてインストールします。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width="600" height="auto"/></a></p>

**ステップ 3.** Arduino アプリケーションを起動します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

- **ステップ 4.** Arduino IDE に ESP32 ボードパッケージを追加します。

**ファイル > 設定** に移動し、**"追加のボードマネージャー URL"** に以下の URL を入力します：
`https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_dev_index.json`

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/4.png"/></div>

**ツール > ボード > ボードマネージャー...** に移動し、検索ボックスにキーワード「**esp32**」を入力します。最新バージョンの ****esp32**** を選択してインストールしてください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_esp32c3.png" alt="pir" width="650" height="auto"/></div>

- **ステップ 5.** ボードとポートを選択する

**ツール > ボード > ESP32 Arduino** に移動し、「**XIAO_ESP32C3**」を選択します。ボードのリストは少し長いので、下までスクロールする必要があります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_board.png" alt="pir" width="800" height="auto"/></div>

**ツール > ポート** に移動し、接続されている XIAO ESP32C3 のシリアルポート名を選択します。通常、これは COM3 以上である可能性があります（**COM1** および **COM2** は通常ハードウェアシリアルポート用に予約されています）。

## XIAO ESP32C3 をネットワークに接続する設定

Wi-Fi の使用方法については、[XIAO ESP32C3 Wi-Fi 使用チュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_WiFi_Usage/#connect-to-a-wifi-network)で詳しく説明されています。

ESP32 を Wi-Fi ステーションとして設定すると、他のネットワーク（ルーターなど）に接続できます。この場合、ルーターは ESP ボードに一意の IP アドレスを割り当てます。

ESP32 の Wi-Fi 機能を使用するために最初に行う必要があるのは、以下のようにコードに WiFi.h ライブラリを含めることです。

```c
#include <WiFi.h>
```

ESP32 を特定の Wi-Fi ネットワークに接続するには、その SSID とパスワードを知っている必要があります。また、そのネットワークが ESP32 の Wi-Fi 範囲内にある必要があります。

まず、Wi-Fi モードを設定します。ESP32 が他のネットワーク（アクセスポイント/ホットスポット）に接続する場合、ステーションモードに設定する必要があります。

```c
WiFi.mode(WIFI_STA);
```

次に、`WiFi.begin()` を使用してネットワークに接続します。ネットワークの SSID とパスワードを引数として渡す必要があります。

Wi-Fi ネットワークへの接続には時間がかかる場合があるため、通常は `WiFi.status()` を使用して接続が確立されたかどうかを確認する while ループを追加します。接続が正常に確立されると、`WL_CONNECTED` を返します。

ESP32 を Wi-Fi ステーションとして設定すると、他のネットワーク（ルーターなど）に接続できます。この場合、ルーターは ESP32 ボードに一意の IP アドレスを割り当てます。ネットワークへの接続を確立した後、`WiFi.localIP()` を呼び出してボードの IP アドレスを取得する必要があります。

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

`ssid` と `password` 変数には、接続したいネットワークの SSID とパスワードが格納されます。

```c
// ネットワークの認証情報を置き換えてください
const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";
```

これは非常にシンプルな Wi-Fi 接続プログラムです。このプログラムを XIAO ESP32C3 にアップロードし、シリアルアシスタントを開いてボーレートを 115200 に設定してください。接続が正常に行われた場合、XIAO の IP アドレスが出力されます。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/5.png"/></div>

ESP32C3 の Wi-Fi におけるアプリケーションや機能についてさらに詳しく知りたい場合は、<a href="https://randomnerdtutorials.com/esp32-useful-wi- fi-functions-arduino/">ESP32 Useful Wi-Fi Library Functions</a> を読むことをお勧めします。

## 組み込みウェブページの構築

ESP32はWiFiライブラリに多くの非常に便利なWiFiClient関数を統合しており、追加のライブラリを導入することなく組み込みウェブページを設計・開発することが可能です。

XIAO ESP32C3でIoTサーバーを構築するために、新しいWiFiServerオブジェクトを作成します。

```c
WiFiServer server(80);
WiFiClient client1;
```

上記のステップでは、XIAO ESP32C3をWiFiに接続します。WiFi接続が成功すると、シリアルモニターからXIAOの現在のIPアドレスを取得できます。この時点で、XIAOはウェブサーバーを正常にセットアップしています。このウェブサーバーには、XIAOのIPアドレスを使用してアクセスできます。

例えば、XIAO ESP32C3のIPアドレスが `192.168.7.152` であると仮定します。このIPアドレスをブラウザに入力してください。

IPアドレスを入力すると、最初は空白のページしか表示されないかもしれません。これは、そのページに対するコンテンツをまだ公開していないためです。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/6.png"/></div>

次に、ページのレイアウトに必要なコンテンツ（HTMLコード）をC言語で格納する配列を作成します。

```c
const char html_page[] PROGMEM = {
    "HTTP/1.1 200 OK\r\n"
    "Content-Type: text/html\r\n"
    "Connection: close\r\n"  // 応答が完了した後に接続を閉じる
    //"Refresh: 1\r\n"         // ページをn秒ごとに自動更新
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

このコードを使用すると、以下の図のようなページが表示されます。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/7.png"/></div>

:::tip
ウェブページ用のHTML構文はこのチュートリアルの範囲外です。HTMLを独自に学習するか、既存の生成ツールを使用してコード生成を行うことをお勧めします。[HTML Generator](https://webcode.tools/generators/html)の使用を推奨します。
なお、Cプログラムでは、`\"`や`"`は特殊文字であり、これらの特殊文字の機能をプログラム内で保持するには、前にバックスラッシュを追加する必要があります。
:::

`client1`はウェブサーバーが確立された後のソケットクライアントを指します。以下のコードはウェブサーバー処理のフローを示しています。

```c
client1 = server.available();
if (client1){
    Serial.println("New Client.");           // シリアルポートにメッセージを出力
    // HTTPリクエストは空行で終了する
    boolean currentLineIsBlank = true;    
    while (client1.connected()){
        if (client1.available()){  // クライアントが接続されているか確認
            char c = client1.read();
            json_String += c;
            if (c == '\n' && currentLineIsBlank) {                                 
                dataStr = json_String.substring(0, 4);
                Serial.println(dataStr);
                if(dataStr == "GET "){
                    client1.print(html_page);  // クライアントにレスポンスボディを送信
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
                    // 接続を閉じる
                    delay(10);
                    client1.stop();       
                }
                json_String = "";
                break;
            }
            if (c == '\n') {
                // 新しい行を開始
                currentLineIsBlank = true;
            }
            else if (c != '\r') {
                // 現在の行に文字を取得
                currentLineIsBlank = false;
            }
        }
    }
}
```

上記の例では、`server.begin()`を使用してIoTサーバーを開始する必要があります。このステートメントは`setup`関数内に配置します。

```c
void setup()
{
    Serial.begin(115200);
 
    // WiFiをステーションモードに設定し、以前接続されていたAPから切断
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    while(!Serial);

    Serial.println("WiFi Setup done!");
    WiFiConnect();

    // TCPサーバーを開始
    server.begin();
}
```

上記のプログラムを実行し、XIAO ESP32C3のIPアドレスをブラウザに入力すると（ホストもXIAO ESP32C3と同じLAN上にある必要があります）、WiFiClientのGETステップが実行されます。この時点で、クライアント側の`print`メソッドを使用してページのHTMLコードを送信します。

```c
if(dataStr == "GET "){
    client1.print(html_page);
}
```

そして、ページ内に質問入力用の入力ボックスを設計します。ユーザーが内容を入力して**Submit**ボタンをクリックすると、Webページはボタンの状態を取得し、入力された質問を文字列変数`chatgpt_Q`に保存します。

```c
json_String = "";
while(client1.available()){
    json_String += (char)client1.read();
}
Serial.println(json_String); 
dataStart = json_String.indexOf("chatgpttext=") + strlen("chatgpttext=");
chatgpt_Q = json_String.substring(dataStart, json_String.length());                    
client1.print(html_page);        
// 接続を閉じる:
delay(10);
client1.stop();      
```

実行結果は以下の通りです。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/15.png"/></div>

## 組み込みWebページを介して質問を送信する

前述のステップで作成したページには入力ボックスがあります。この入力ボックスは、ユーザーが質問を入力する場所です。必要なのは、この質問を取得して、OpenAIが提供するAPIリクエストを通じて送信することです。

**ステップ 1**. OpenAIアカウントに登録する。

[こちら](https://beta.openai.com/signup)をクリックしてOpenAIの登録ページにアクセスできます。すでにアカウントを登録済みの場合、このステップはスキップできます。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/8.png"/></div>

**ステップ 2**. OpenAI APIを取得する。

[OpenAIのウェブサイト](https://platform.openai.com/overview)にログインし、右上のアカウントアバターをクリックして**View API keys**を選択します。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/9.png"/></div>

新しいポップアップページで**+Create new secret key**を選択し、キーをコピーして保存します。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/10.png"/></div>

同時に、プログラム内で文字列変数を作成し、このキーをコピーして保存します。

```c
char chatgpt_token[] = "sk**********Rj9DYiXLJJH";
```

:::tip
2023年2月15日現在、OpenAIは新規ユーザーに対して**18ドル**分のクレジットを無料で提供しています。詳細な料金はOpenAIの[ドキュメント](https://openai.com/api/pricing/)で確認できます。
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/11.png"/></div>
:::

**ステップ 3**. OpenAIのHTTPリクエストに基づいてプログラムを書く。

OpenAIは非常に詳細な[API使用説明](https://platform.openai.com/docs/api-reference/making-requests)を提供しており、ユーザーは自身のAPIキーを使用してChatGPTを呼び出すことができます。

ChatGPTのドキュメントによると、リクエストを送信するために必要な形式は以下の通りです：

```shell
curl https://api.openai.com/v1/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{"model": "gpt3.5-turbo-instruct", "prompt": "Say this is a test", "temperature": 0, "max_tokens": 7}'
```

Hypertext Transfer Protocol (HTTP)は、クライアントとサーバー間のリクエスト-レスポンスプロトコルとして機能します。
**GET**は指定されたリソースからデータを要求するために使用されます。通常、APIから値を取得するために使用されます。
**POST**はサーバーにデータを送信してリソースを作成/更新するために使用されます。
ESP32は、URLエンコード、JSONオブジェクト、プレーンテキストの3種類のボディリクエストを使用してHTTP POSTリクエストを作成できます。これらは最も一般的な方法であり、ほとんどのAPIやWebサービスと統合できます。

上記の情報は非常に重要であり、HTTP POSTプログラムを書くための理論的基盤を提供します。まず、HTTPClientライブラリをインポートすることから始めます。

```c
#include <HTTPClient.h>
```

また、OpenAIのドメイン名を入力する必要があります。これにより、ESPがChatGPTに質問を送信できます。そして、OpenAI APIキーを忘れずに入力してください。

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
    String payload = String("{\"model\": \"gpt-3.5-turbo-instruct\", \"prompt\": \"") + chatgpt_Q + String("\", \"temperature\": 0, \"max_tokens\": 100}"); // TEXTの代わりにJSONをペイロードとして使用可能
    httpCode = https.POST(payload);   // 接続を開始し、HTTPヘッダーを送信
    payload = "";
}
else {
    Serial.println("[HTTPS] 接続できません");
    delay(1000);
}
```

プログラム内では、`POST()`メソッドを使用して`payload`をサーバーに送信します。`chatgpt_Q`はChatGPTに送信したい質問の内容であり、Get Questionページで利用可能になります。

ESP32C3 HTTPClientの機能に興味がある場合は、[ESP32 HTTP GET and HTTP POST with Arduino IDE](https://randomnerdtutorials.com/esp32-http-get-post-arduino/)を読むことをお勧めします。

## ChatGPTから回答を取得する

次のステップは、このチュートリアル全体の最後のステップです。ChatGPTから回答を取得し、それを記録する方法について説明します。

まず、OpenAIが提供する[APIドキュメント](https://platform.openai.com/docs/api-reference/making-requests)を読み、ChatGPTが返すメッセージ内容の構造を理解しましょう。これにより、必要な内容を解析するプログラムを記述できるようになります。

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

OpenAIが提供するリファレンスドキュメントから、インターフェースが返すメッセージ内で質問に対する回答の位置が`{"choices": [{"text": "\n\nxxxxxxx",}]}`にあることがわかります。

したがって、必要な「回答」は**\n\n**で始まり、**,**で終わることが確認できます。プログラム内では、`indexOf()`メソッドを使用してテキストの開始位置と終了位置を取得し、返された回答の内容を保存できます。

```c
dataStart = payload.indexOf("\\n\\n") + strlen("\\n\\n");
dataEnd = payload.indexOf("\",", dataStart); 
chatgpt_A = payload.substring(dataStart, dataEnd);
```

まとめると、プログラムの現在の状態に応じて、どのステップを実行するべきかを判断するためにスイッチメソッドを使用できます。

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

これで、プログラム全体のロジックが構築されました。完全なプログラムコードは以下の画像をクリックして取得できます。ただし、プログラムをアップロードする前に、**ssid、password、chatgpt_token**を自分のものに変更する必要があります。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/xiaoesp32c3-chatgpt" target="_blank"><div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></div></a></p>

それでは、自由に使ってみてください！

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/16.gif"/></div>

## 次はどうする？

このチュートリアルでは、Arduinoのような組み込み開発ボード（XIAO ESP32C3）を使用してChatGPTのOpenAIインターフェースを呼び出す基本的な方法を提供しました。次は、あなたの創造力を存分に発揮してください！

例えば、画面やキーボードを追加して、あなただけのために動作するスタンドアロンの表示デバイスを作ることを考えてみてはいかがでしょうか？Gavinの創造力を見てみましょう。彼は特に面白い監視デバイスを作りました！また、このチュートリアルの必要な手順とアイデアを提供してくれた彼に特別な感謝を捧げます。

- [Gavin - ChatGPT Recorder & Monitor](https://www.hackster.io/gavinchiong/chatgpt-recorder-monitor-601ef6)

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/14.jpg"/></div>

さらに一歩進んで、音声認識モジュールを追加し、キーボードやマウスを不要にして、自分だけの音声アシスタントを作ることもできます。いずれにせよ、XIAO ESP32C3のような素晴らしい製品を使って作った作品をぜひ共有してください！

## トラブルシューティング

### Q1: XIAO ESP32C3 を使用して OpenAI API を呼び出す際、地理的またはネットワーク上の制限はありますか？

> A: 2023年2月17日時点のテストでは、中国本土の著者および中国のネットワークを使用している場合でも、ChatGPTの応答を非常にスムーズに取得でき、現在のところ制限はありません。OpenAI APIキーを取得できれば、呼び出しは問題なく完了します。

### Q2: タイムアウトエラーが返されるのはなぜですか？

> A: これは、ChatGPTがメッセージに返信するのに時間がかかりすぎるため、プログラムが応答していないと誤って判断する可能性があるためです。

## 技術サポート & 製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>