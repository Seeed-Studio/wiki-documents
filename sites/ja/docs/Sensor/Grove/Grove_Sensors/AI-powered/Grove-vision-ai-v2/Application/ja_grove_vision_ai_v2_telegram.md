---
description: このプロジェクトでは、XIAO ESP32S3 と Grove Vision AI V2 を組み合わせて、コンパクトな人物検出デバイスを作成します。人物検出モデルを搭載した V2 モジュールが人の存在を識別し、その結果を ESP32S3 に送信します。マイクロコントローラーは情報を処理し、検出アラートを指定された Telegram アカウントに転送して、監視エリアで人が検出された際にリアルタイム通知を提供します。
title: Grove Vision AI V2 を使用して Telegram で通知を受け取る
image: https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/headimage2.png
slug: /ja/grove_vision_ai_v2_telegram
last_update:
  date: 05/15/2025
  author: Allen
---


<div class="table-center">
<iframe width="400" height="700" src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/xiao_telegram.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

このプロジェクトでは、XIAO ESP32S3 と Grove Vision AI V2 を組み合わせて、コンパクトな人物検出デバイスを作成します。人物検出モデルを搭載した V2 モジュールが人の存在を識別し、その結果を ESP32S3 に送信します。マイクロコントローラーは情報を処理し、検出アラートを指定された Telegram アカウントに転送して、監視エリアで人が検出された際にリアルタイム通知を提供します。

## 必要な材料

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32S3</th>
			<th>Grove Vision AI V2 キット</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-V2-Kit-p-5852.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## パート 1. Telegram API

Telegram に何かを送信するには、Telegram の **Token** と **ChatId** を取得して Telegram の API にアクセスする必要があります。以下の手順で取得しましょう。

### ステップ 1. BotFather を使用して新しいボットを作成する

Telegram を開き、BotFather のページにアクセスして **/start** を送信します。すると、BotFather からいくつかのフィードバックが返ってきます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/2.png" style={{width:500, height:'auto'}}/></div>

**/newbot** リンクをクリックします。BotFather が新しいボットを作成し、ルールに従ってボットに名前を付けるよう求められます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/3.png" style={{width:500, height:'auto'}}/></div>

### ステップ 2. Token と ChatId を取得する

前のステップに従ってボットを作成すると、BotFather からフィードバックが返ってきます。その中に **Token** が記載されており、形式は次のようになります：**123456789:AoUJnnpoFlkkdfJbCXlo...**。次に、この Token を使用して以下のリンクにアクセスし、**ChatId** を取得します。

```python
# Token を使用してこのリンクにアクセス
https://api.telegram.org/bot{Token}/getUpdates

# 例
https://api.telegram.org/bot123456789:AoUJnnpoFlkkdfJbCXlo.../getUpdates
```

以下の画像のように **ChatId** を見つけることができます。ChatId の形式は次のようになります：**12234556**。**Token と ChatId を保存**してください。後で使用します。

:::tip
このページに何も表示されない場合は、ボットに何かメッセージを送信してからページを再読み込みしてください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/1.png" style={{width:1000, height:'auto'}}/></div>

## Part 2. 人物検出モデル

#### ステップ 3. モデルを選択する

まず、SenseCraft AI Model Assistantのメインページを開きます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft AIへ移動</font></span></strong></a>
</div>
<br />

デプロイしたいモデルを選択し、それをクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/4.png" style={{width:1000, height:'auto'}}/></div>

ここでこのモデルの説明を見ることができ、適している場合は右側の**Deploy Model**ボタンをクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/5.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 4. モジュールを接続し、適切なモデルをアップロードする

Type-Cタイプのケーブルを使用してGrove Vision AI V2をコンピュータに接続し、**Connect**ボタンをクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a3.png" style={{width:600, height:'auto'}}/></div>

**Confirm**ボタンをクリックします。このページの左上隅で**USB Single Serial**を選択し、**Connect**ボタンをクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a4.png" style={{width:600, height:'auto'}}/></div>

このページに1～2分間留まり、モデルが正常にアップロードされるまで待ってください。このプロセス中に別のページタブに切り替えると、アップロードが失敗する可能性があります（現在、チームがこの問題の解決に取り組んでおり、近々修正される予定です）。

### ステップ 5. 観察

モデルが正常にアップロードされると、左側のプレビューでGrove Vision AI V2カメラからのライブフィードを見ることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/6.png" style={{width:800, height:'auto'}}/></div>

おめでとうございます！ここまで順調です。次は、Telegramに何かを送信するコードを書きます。XIAO ESP32シリーズを使用します。

## Part 3. Telegramへの通知を送信する

### ステップ 6. インストール

まず、XIAO ESP32S3をピンを介してGrove Vision AI V2に接続し、次にアンテナをXIAO ESP32S3に接続します。最後に、XIAO ESP32S3をType-Cケーブルを使用してコンピュータに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/8.png" style={{width:500, height:'auto'}}/></div>

### ステップ 7. コーディング

まず、このページから[SSCMAライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA)をダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/10.png" style={{width:1000, height:'auto'}}/></div>

次に、このZIPパッケージをArduino IDEに追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/11.png" style={{width:800, height:'auto'}}/></div>

Arduino IDEで新しいスケッチを作成し、以下のコードをスケッチに貼り付けてアップロードします。

:::tip
保存した2.4G Wi-Fiの**ssid**、**password**、Telegramの**Token**、**ChatId**に変更してください。
:::

```cpp
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <Seeed_Arduino_SSCMA.h>

// ssidとpasswordを変更してください
const char* ssid = "xxx";
const char* password = "xxx";

// tokenとchatidを変更してください
const String botToken = "xxx";
const String chatId = "xxx";

SSCMA AI;

void setup()
{
    AI.begin();
    Serial.begin(9600);
    WiFi.begin(ssid, password); 
    while (WiFi.status() != WL_CONNECTED) {
      delay(1000);
      Serial.println("WiFiに接続中...");
    }
}

void loop()
{
    if (!AI.invoke()){
      for (int i = 0; i < AI.boxes().size(); i++){
          // モデル推論を取得
          if(AI.boxes()[i].score>70){
            Serial.println("人物を検出しました");
            // 監視結果をTelegramに送信する関数を呼び出す
            if(WiFi.status() == WL_CONNECTED) {
              sendMessage("人物を検出しました");
              delay(1000);
            }
          }
      }
    }
}

// Telegramにアクセスしてメッセージを送信する関数
void sendMessage(String text) {
  String url = "https://api.telegram.org/bot" + botToken + "/sendMessage";
  String payload = "{\"chat_id\":\"" + chatId + "\",\"text\":\"" + text + "\"}";
  
  HTTPClient http;
  http.begin(url);
  http.addHeader("Content-Type", "application/json");
  
  int statusCode = http.POST(payload);
  if (statusCode == 200) {
    Serial.println("メッセージが正常に送信されました！");
  } else {
    Serial.println("メッセージの送信に失敗しました。");
  }
  http.end();
}
```

コードをアップロードした後、シリアルモニターを開き、Grove Vision AI V2を使用して人物を検出してください。Vision AI V2が人物を検出すると、以下の結果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/7.png" style={{width:800, height:'auto'}}/></div>

次に、Telegramのボットチャットページを開くと、XIAO ESP32S3から送信されたメッセージが表示されます。また、ビデオのように電源バンクを使用して電力を供給することもできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/9.png" style={{width:500, height:'auto'}}/></div>

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品の使用体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>