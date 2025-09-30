---
description: XIAO ESP32S3を使用して超コンパクトなグローバル測位トラッカーを作成する。
title: XIAO ESP32S3 (Sense)による位置情報トラッカー
keywords:
- location
- tracker
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/geolocation_tracker_with_XIAO_ESP32S3
last_update:
  date: 06/14/2023
  author: Citric
---

# XIAO ESP32S3による位置情報トラッカー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/main.jpg" style={{width:1000, height:500}}/></div>

市場の自作トラッカーは多くの問題に直面することがよくあります。例えば、追跡精度が悪い、サイズが大きい、トラッカーが使用される環境に対する要求が厳しいなどです。XIAOは優れたサイズ制御で多くのクリエイターを魅了してきました。では、XIAOだけを使用して、グローバルに測位できるトラッカーを作ることはできるでしょうか？

このチュートリアルでは、XIAO（GPSモジュールなし）を展開して驚くべきトラッカーを作成する、より人気のある2つの方法を探ります。

## 概要

この記事では2種類の測位方法を紹介します。1つはXIAOが接続されているネットワークのIPアドレスから位置情報を取得して測位を実現する方法です。もう1つはWi-Fi測位システム（一般的にWiPSまたはWFPSとして知られる）を使用する方法です。

- **方法1：IPアドレスによる測位**

IPアドレスの測位の原理は、IPアドレスを物理的な場所にマッピングするデータベースを使用することです。このプロセスは一般的にジオロケーションとして知られています。

IPアドレス検索では、逆DNS検索を使用してIPアドレスに関連付けられたドメイン名を取得します。その後、ドメイン名を使用してウェブサイトやサービスをホストしているサーバーの地理的位置を特定できます。

IPアドレスマッピングでは、IPアドレスを物理的な場所にマッピングするデータベースを使用します。データベースには、各IPアドレスに関連付けられた都市、地域、国などの情報が含まれている場合があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/iplocation.png" style={{width:700, height:'auto'}}/></div>

IPアドレスジオロケーションの精度は、使用される方法と利用可能なデータの品質によって異なります。一般的に、IPアドレスジオロケーションは、通常固定の物理的位置に関連付けられているデスクトップコンピューターやサーバーなどの固定デバイスに対して最も正確です。スマートフォンやタブレットなどのモバイルデバイスは、移動して異なるWi-Fiネットワークに接続できるため、正確に位置を特定するのがより困難な場合があります。

- **方法2：[WFPS](https://en.wikipedia.org/wiki/Wi-Fi_positioning_system)による測位**

Wi-Fi測位システムは、近くのWi-Fiホットスポットやその他のワイヤレスアクセスポイントの特性を使用してデバイスの位置を発見するジオロケーションシステムです。

これは、屋内でのマルチパスや信号遮断などのさまざまな原因によりGPSなどの衛星ナビゲーションが不適切な場合、または衛星測位の取得に時間がかかりすぎる場合に使用されます。このようなシステムには、アシストGPS、ホットスポットデータベースを通じた都市測位サービス、屋内測位システムが含まれます。Wi-Fi測位は、21世紀初頭の都市部でのワイヤレスアクセスポイントの急速な成長を活用しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/wfps.png" style={{width:700, height:'auto'}}/></div>

ワイヤレスアクセスポイントを使用した測位に使用される最も一般的で広く普及している位置特定技術は、受信信号強度（受信信号強度表示またはRSSI）の測定と「フィンガープリンティング」の方法に基づいています。ワイヤレスアクセスポイントの位置特定に有用な典型的なパラメータには、そのSSIDとMACアドレスが含まれます。精度は、データベースに位置が入力されている近くのアクセスポイントの数に依存します。Wi-Fiホットスポットデータベースは、モバイルデバイスのGPS位置データとWi-FiホットスポットのMACアドレスを関連付けることによって埋められます。発生する可能性のある信号変動は、ユーザーの経路でのエラーや不正確さを増加させる可能性があります。受信信号の変動を最小限に抑えるために、ノイズをフィルタリングするために適用できる特定の技術があります。

これが、XIAOがGPSモジュールの支援なしに位置を取得できる理論的根拠です。また、上記の2つの方法を組み合わせて測位を取得する最良の方法を比較し、Round Displayの使用と組み合わせて、座標を画面上の地図として表示します。以下は目次と論文の要約です。

- [XIAO ESP32S3でネットワークに接続してパブリックIPを取得する](#connect-to-the-network-and-obtain-public-ip-with-the-xiao-esp32s3)
- [ipstackプラットフォームで位置座標を取得する](#obtain-location-coordinates-with-the-ipstack-platform)
- [HTTPSサービス経由でGoogle Mapsから静的画像をダウンロードする](#download-static-images-from-google-maps-via-https-service)
- [Round Displayに位置地図を表示する](#display-the-location-map-on-the-round-display)
- [WFPS方法を使用した測位](#positioning-using-the-wfps-method)
- [最新位置のライブ更新](#live-updates-on-the-latest-location)

## はじめに

このプロジェクトを正常に完了するには、以下のハードウェアを使用する必要があります。XIAO ESP32シリーズはすべてサポートされています。

<div style={{textAlign:'center'}}>
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Round Display for XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td>
          <div style={{textAlign:'center'}}>
            <a href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
          </div>
        </td>
        <td>
          <div style={{textAlign:'center'}}>
            <a href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
          </div>
        </td>
        <td>
          <div style={{textAlign:'center'}}>
            <a href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
          </div>
        </td>
    </tr>
  </table>
</div>

これに加えて、小型リチウムバッテリー、microSDカード、ケースを追加で準備することができます。完全なトラッカー形式を構成するためです。

<iframe width="100%" height="500" src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/install.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## XIAO ESP32S3でネットワークに接続し、パブリックIPを取得する

:::tip
XIAO ESP32S3のネットワーク機能に慣れていない場合は、[Seeed Studio XIAO ESP32S3 (Sense)でのWiFi使用方法](https://wiki.seeedstudio.com/ja/xiao_esp32s3_wifi_usage/)について読むことができます。
:::

XIAO ESP32S3の基本的な使用方法のチュートリアルでは、XIAO ESP32S3を使用してネットワークに接続する方法を習得しました。

```cpp
#include <WiFi.h>

// For network
const char* ssid = "<YOUR_WIFI_SSID_HERE>";
const char* password = "<YOUR_WIFI_PW_HERE>";

void setup() {
  Serial.begin(115200);

  Serial.print("Try to connect to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    Serial.print(".");
  }
  Serial.println("Wi-Fi Connected!");
}

void loop() {
}
```

IP アドレスを使用して位置情報を検索する核心的な本質は、XIAO の IP アドレスを取得することです。そのため、`WiFi.localIP()` 関数を使用して検索する必要があると自然に考えるかもしれません。

しかし実際には、ルーターは XIAO に 192.168.xxx.xxx のような内部 IP アドレスを割り当てるため、これでは位置情報を照会することができません。必要なのはパブリック IP です。そのため、以下を使用する必要があります。

```cpp
// Get local IP address
IPAddress publicIP;
if (WiFi.hostByName("ip-api.com", publicIP)) {
    Serial.print("Public IP address: ");
    Serial.println(publicIP);
} else {
    Serial.println("Failed to get public IP address");
    return;
}
```

次に、以下の効果を得ることができます。これが最初のステップです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/7.png" style={{width:600, height:'auto'}}/></div>

## ipstackプラットフォームで位置座標を取得する

位置情報にIPアドレスを使用するには、一般的にいくつかの公開サーバーライブラリ情報が必要です。いくつかのプラットフォームのAPIインターフェースの助けを借りて、このサーバー情報を取得できます。例えば、このチュートリアルでは、プラットフォーム[ipstack](https://ipstack.com)を使用します。

ipstackは、正確な位置データを検索し、危険なIPアドレスから発生するセキュリティ脅威を評価できる、強力なリアルタイムIPから地理位置情報へのAPIを提供します。結果は、JSONまたはXML形式でミリ秒以内に配信されます。

ipstackは無料/有料の検索サービスを提供しており、[価格表](https://ipstack.com/product)は以下の画像で確認できます。この例では、例を示すだけなので、**無料サービス（100クエリ/月）**で十分です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/8.png" style={{width:800, height:'auto'}}/></div>

### ステップ1. ipstack API Access Keyを取得する

ipstackを初めて使用する場合は、[新しいアカウントを登録](https://ipstack.com/signup/free)する必要があります。

登録してログインすると、API Keyを確認できるようになります。後で使用するので、コピーして安全な場所に保存してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/9.png" style={{width:800, height:'auto'}}/></div>

### ステップ2. ipstack APIの使用方法を学ぶ

ipstackは、ipstack APIの使用方法を説明する詳細な[ドキュメント](https://ipstack.com/documentation)を提供しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/10.png" style={{width:800, height:'auto'}}/></div>

とても簡単ですよね？**サーバーのアドレス + IPアドレス + API Key**を送信するだけです。

次に、ipstackがどのようなJSONメッセージを返すかを知り、都市、国、緯度経度などの必要な情報を抽出する必要があります。

```json
{
  "ip": "134.201.250.155",
  "hostname": "134.201.250.155",
  "type": "ipv4",
  "continent_code": "NA",
  "continent_name": "North America",
  "country_code": "US",
  "country_name": "United States",
  "region_code": "CA",
  "region_name": "California",
  "city": "Los Angeles",
  "zip": "90013",
  "latitude": 34.0453,
  "longitude": -118.2413,
  "location": {
    "geoname_id": 5368361,
    "capital": "Washington D.C.",
    "languages": [
        {
          "code": "en",
...
```

その後、ArduinoJSONライブラリの助けを借りて、必要な情報を抽出するだけです。

### ステップ3. httpサービス経由でIPアドレスの座標を取得する

要約すると、まず**ArduinoJSON**ライブラリをインストールします。Arduino IDEから直接検索してダウンロードできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/11.png" style={{width:400, height:'auto'}}/></div>

次に、`getLocation()`関数を記述します。この関数を使用してipstackから返される国、都市、緯度経度情報を取得し、それらを出力します。

```cpp
// For ipstack
const char* IPStack_key = "<YOUR_API_KEY_HERE>";
String ip_address;

// Obtain the approximate coordinate position based on the current IP address of XIAO.
bool getLocation(){
  // Make HTTP request to IPStack API
  HTTPClient http;
  String url = "http://api.ipstack.com/" + String(ip_address) + "?access_key=" + String(IPStack_key);
  Serial.println("Requesting URL: " + url);
  http.begin(url);
  int httpCode = http.GET();

  // Parse JSON response
  if (httpCode == 200) {
    String payload = http.getString();
    Serial.println("Response payload: " + payload);
    DynamicJsonDocument doc(1024);
    deserializeJson(doc, payload);
    String country_name = doc["country_name"].as<String>();
    String region_name = doc["region_name"].as<String>();
    String city = doc["city"].as<String>();
    latitude = doc["latitude"].as<double>();
    longitude = doc["longitude"].as<double>();
    Serial.println("Country: " + country_name);
    Serial.println("Region: " + region_name);
    Serial.println("City: " + city);
    Serial.println("Latitude: " + String(latitude));
    Serial.println("Longitude: " + String(longitude));
    http.end(); // Close connection
    return true;
  } else {
    Serial.println("HTTP error code: " + String(httpCode));
    http.end(); // Close connection
    return false;
  }
}
```

上記のプログラムでは、ipstack API Keyをあなた自身のものに置き換えてください。

次に、IPアドレスによる位置情報がどの程度正確かを見てみましょう。下の地図の[赤いマークされた点](https://www.google.com/maps/place/22%C2%B034'26.5%22N+113%C2%B054'53.1%22E/@22.5729214,113.9171335,16z/data=!4m4!3m3!8m2!3d22.5740278!4d113.91475?hl=zh-CN&entry=ttu)は、IPアドレスによる私の正確な位置です。そして赤い線のもう一方の端は、私の実際の位置です。両者の間には2.4kmの差があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/1.png" style={{width:1000, height:'auto'}}/></div>

この種の測位の誤差はキロメートル範囲にあることがわかり、これはトラッカーに期待するものとは程遠いものです。

## HTTPSサービス経由でGoogle Mapsから静的画像をダウンロード

緯度と経度の座標は、私たちの視点では直感的に話すことができません。国や都市の情報が含まれていても同様です。そこで、これらの緯度と経度の座標を地図上にマークして、画面に表示することができるかどうか疑問に思いました。そしてGoogle Cloudのマッピングサービスを見つけました。

始める前に、続行するかどうかを決定するために、[Google Mapsサービスの価格設定](https://mapsplatform.google.com/pricing/)を理解することが重要だと思います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/12.png" style={{width:800, height:'auto'}}/></div>

初回登録ユーザーの場合、**\$300**の無料クレジットがあります。ここでは主にMaps Static APIを使用しており、**1000回の呼び出しあたり\$2.00**のコストがかかります。

### ステップ4. [Google Cloudプロジェクトを設定](https://developers.google.com/maps/documentation/elevation/cloud-setup)し、続く設定手順を完了する

### ステップ5. Google Maps APIを有効にする

Google APIで検証するためにgoogle APIキーが必要です。[Google Developers Console](https://console.developers.google.com/apis)に移動してGeoLocation APIを有効にしてください。このAPIキーがないと、レスポンスとしてエラーが発生します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/2.png" style={{width:1000, height:'auto'}}/></div>

APIを取得したら、安全な場所に保管してください。後のプログラミング手順で使用します。

:::note
現在APIを使用している環境について懸念がある場合は、API呼び出しに制限をかけて、不正使用による追加料金を避けることができます。特定の制限をオンにすると、プログラムの変更が必要になる場合があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/4.png" style={{width:1000, height:'auto'}}/></div>
:::

## Round Displayに位置マップを表示する

:::tip
XIAO用Round Displayを初めて使用する場合は、丸型画面用のArduino環境を設定するために[こちらのWiki](https://wiki.seeedstudio.com/ja/get_start_round_display/)を参照する必要があるかもしれません。
:::

### ステップ6. Google Cloud Static Maps APIの呼び出し方法を学ぶ

[こちら](https://developers.google.com/maps/documentation/maps-static/overview)をクリックして、Google Cloud Static Maps APIのドキュメントを読んでください。

ドキュメントでは、APIを使用するためのサンプルコードが以下のように示されています：

```
https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=YOUR_API_KEY&signature=YOUR_SIGNATURE
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/staticmap.png" style={{width:700, height:'auto'}}/></div>

Maps Static API URLは以下の形式である必要があります：

```
https://maps.googleapis.com/maps/api/staticmap?parameters
```

Maps Static APIは、以下のURLパラメータを使用してマップ画像を定義します：

- `center`（markersが存在しない場合は必須）マップの中心を定義し、マップのすべての端から等距離になります。このパラメータは、カンマ区切りの`{latitude,longitude}`ペア（例："40.714728,-73.998672"）または地球上の一意の場所を識別する文字列アドレス（例："city hall, new york, ny"）として位置を受け取ります。
- `zoom`（markersが存在しない場合は必須）マップのズームレベルを定義し、マップの拡大レベルを決定します。このパラメータは、希望する地域のズームレベルに対応する数値を受け取ります。
- `size`（必須）マップ画像の矩形の寸法を定義します。このパラメータは`{horizontal_value}x{vertical_value}`の形式の文字列を受け取ります。
- `maptype`（オプション）構築するマップのタイプを定義します。roadmap、satellite、hybrid、terrainなど、いくつかの可能なmaptype値があります。
- `markers`（オプション）指定された場所で画像に添付する1つ以上のマーカーを定義します。このパラメータは、パイプ文字（|）で区切られたパラメータを持つ単一のマーカー定義を受け取ります。同じスタイルを示す限り、同じmarkersパラメータ内に複数のマーカーを配置できます。異なるスタイルの追加マーカーを追加するには、追加のmarkersパラメータを追加します。マップにマーカーを提供する場合、（通常必要な）centerとzoomパラメータを指定する必要がないことに注意してください。
- `key`（必須）Google Cloud ConsoleでアプリケーションのAPI使用状況を監視でき、必要に応じてGoogleがアプリケーションについて連絡できることを保証します。

:::tip
上記では最も基本的なパラメータのみを示しています。この静的マップをカスタマイズする必要がある場合は、**[こちら](https://developers.google.com/maps/documentation/maps-static/start)**をクリックしてパラメータの完全なリストを読むことができます。
:::

要約すると、これらを組み合わせて送信用の完全な文字列を形成できます。

```cpp
// For google static maps
const char * host = "maps.googleapis.com";
const String defaultPath = "/maps/api/staticmap?center=";
const String Googlemaps_key = "<YOUR_API_KEY_HERE>";
int zoomLevel = 14;
double latitude;
double longitude;

// Stitching to form commands sent to Google Maps
String getPath(){
  String newPath = defaultPath;
  newPath += latitude;
  newPath += ",";
  newPath += longitude;
  newPath += "&zoom=";
  newPath += String(zoomLevel);
  newPath += "&size=240x240";
  newPath += "&maptype=roadmap";
  newPath += "&markers=size:tiny%7Ccolor:red%7C";
  newPath += latitude;
  newPath += ",";
  newPath += longitude;
  newPath += "&format=jpg-baseline";
  newPath += "&key=";
  newPath += Googlemaps_key;
  Serial.println(newPath);
  return newPath;
}
```

上記のコードをあなた自身のGoogle Cloud Maps APIに置き換えてください。

### ステップ7. 返された画像をHTTPS経由で取得し、microSDカードに書き込む

返された静止画像を保持するのに十分な大きさのストレージメディアが必要です。これにより、画面に表示するプログラムで画像を読み取ることができます。Round DisplayにはmicroSDカードサポートが搭載されています。

```cpp
// Static images of coordinates from Google Cloud Services
bool getStaticMapImage(const char *host, const char *path, String fileName){
  int contentLength = 0;
  int httpCode;

  WiFiClientSecure client;

  client.setCACert(GlobalSignCA);
  client.connect(host, 443);

  Serial.printf("Trying: %s:443...", host);
  
  if(!client.connected()){
    client.stop();
    Serial.printf("*** Can't connect. ***\n-------\n");
    return false;
  }

  Serial.println("HTTPS Connected!");
  client.print("GET ");
  client.print(path);
  client.print(" HTTP/1.0\r\nHost: ");
  client.print(host);
  client.print("\r\nUser-Agent: ESP32S3\r\n");
  client.print("\r\n");

  while(client.connected()){
    String header = client.readStringUntil('\n');
    if(header.startsWith(F("HTTP/1."))){
      httpCode = header.substring(9, 12).toInt();
      if(httpCode != 200){
        client.stop();
        return false;
      }
    }
    if(header.startsWith(F("Content-Length: "))){
      contentLength = header.substring(15).toInt();
    }
    if(header == F("\r")){
      break;
    }
    
  }
  if(!(contentLength > 0)){
    client.stop();
    return false;
  }
  fs::File f = SD.open(fileName, "w");
  if(!f){
    Serial.println(F("FILE OPEN FAILED"));
    client.stop();
    return false;
  }
  int remaining = contentLength;
  int received;
  uint8_t buff[512] = {0};
  while(client.available() && remaining > 0){
    received = client.readBytes(buff, ((remaining > sizeof(buff)) ? sizeof(buff) : remaining));
    f.write(buff, received);
    if(remaining > 0){
      remaining -= received;
    }
    yield();
  }
  f.close();
  client.stop();
  Serial.println("DOWNLOAD END");
  return (remaining == 0 ? true : false);
}
```

### ステップ 8. Round Display で JPEG 画像を表示する

一般的に、Round Display でサポートされている TFT グラフィックスライブラリは BMP 形式の画像表示のみをサポートしています。他の形式の画像を表示する必要がある場合は、サードパーティライブラリを使用する必要があります。ここでは **[TJpg_Decoder](https://github.com/Bodmer/TJpg_Decoder)** ライブラリを使用します。

このライブラリを zip ファイルとしてダウンロードし、Arduino 環境に追加してください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Bodmer/TJpg_Decoder" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

リポジトリで提供されているサンプルプログラムを参考にして、プログラムを書き直します：

```cpp
// This next function will be called during decoding of the jpeg file to
// render each block to the TFT.  If you use a different TFT library
// you will need to adapt this function to suit.
bool tft_output(int16_t x, int16_t y, uint16_t w, uint16_t h, uint16_t* bitmap)
{
   // Stop further decoding as image is running off bottom of screen
  if ( y >= tft.height() ) return 0;

  // This function will clip the image block rendering automatically at the TFT boundaries
  tft.pushImage(x, y, w, h, bitmap);

  // Return 1 to decode next block
  return 1;
}

void setup() {
  // Initialise the TFT
  tft.init();
  tft.setRotation(2);
  tft.fillScreen(TFT_BLACK);
  tft.setSwapBytes(true); // We need to swap the colour bytes (endianess)

  // Initialise SD before TFT
  if (!SD.begin(SD_CS)) {
    Serial.println(F("SD.begin failed!"));
    return;
  }
  Serial.println("\r\nInitialisation done.");

  // The jpeg image can be scaled by a factor of 1, 2, 4, or 8
  TJpgDec.setJpgScale(1);

  // The decoder must be given the exact name of the rendering function above
  TJpgDec.setCallback(tft_output);

  if(WiFi.status() == WL_CONNECTED){
    if(getLocation() && getStaticMapImage(host, getPath().c_str(), mapFile)){
      TJpgDec.drawSdJpg(0, 0, mapFile);
    }
  }
}
```

このプロジェクトの完全なプログラムは、この機会に見つけることができます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32S3-Geolocation/blob/main/IP-address-location-method/IP-address-location-method.ino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

プログラムを実行すると、シリアルモニターの出力を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/5.png" style={{width:700, height:'auto'}}/></div>

画面には、あなたのIPアドレスに対応する位置の画像も表示されます。

## WFPS方式を使用した位置測定

前のステップで比較したように、IPアドレスを使用した位置の精度は本当に悲惨です。そこで次に、WFPS方式を使用して手順を改善し、精度に変化があるかどうかを確認してみましょう。

もちろん、このアルゴリズムは私たちが実装するには困難であり、Google Mapsサービスの[Geolocation API](https://developers.google.com/maps/documentation/geolocation/overview)に依然として依存しています。

Geolocation APIは、モバイルクライアントが検出できる携帯電話基地局とWiFiアクセスポイントを含むHTTPSリクエストを受け入れるサービスです。各有効な入力に対して、緯度/経度座標と結果の精度を示す半径を返します。

コミュニティでは、**[gmag11](https://github.com/gmag11)**とそのチームが、このサービスを直接呼び出すことができるライブラリを作成しています。ここで直接使用することができます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/gmag11/WifiLocation/tree/master" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

同時に、デバッグメッセージ用の**QuickDebug**ライブラリが必要になります。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/gmag11/QuickDebug" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

次に、`getLocation()`関数を修正するだけです。

```cpp
//For google geolocation
WifiLocation location (Googlemaps_key);

// Set time via NTP, as required for x.509 validation
void setClock () {
    configTime (0, 0, "pool.ntp.org", "time.nist.gov");

    Serial.print ("Waiting for NTP time sync: ");
    time_t now = time (nullptr);
    while (now < 8 * 3600 * 2) {
        delay (500);
        Serial.print (".");
        now = time (nullptr);
    }
    struct tm timeinfo;
    gmtime_r (&now, &timeinfo);
    Serial.print ("\n");
    Serial.print ("Current time: ");
    Serial.print (asctime (&timeinfo));
}

// Get the exact coordinates of XIAO by WiFi location method
void getLocation(){
  setClock();
  location_t loc = location.getGeoFromWiFi();

  Serial.println("Location request data");
  Serial.println(location.getSurroundingWiFiJson()+"\n");
  Serial.println ("Location: " + String (loc.lat, 7) + "," + String (loc.lon, 7));
  latitude = loc.lat;
  longitude = loc.lon;
  Serial.println ("Accuracy: " + String (loc.accuracy));
  Serial.println ("Result: " + location.wlStatusStr (location.getStatus ()));
}
```

実際の位置とWFPSによって取得された座標がどの程度異なるかを見てみましょう。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/13.png" style={{width:1000, height:'auto'}}/></div>

位置の偏差はすでに約1kmです！この性能は一部のGPSモジュールよりも優れています。

## 最新位置のライブ更新

それでは最後のステップとして、このグローバル測位トラッカーをまとめましょう。自動マップ更新を実装させます。

:::tip
このプログラムを使用する際は、Google Cloudサービスの料金消費を見積もってください。そうしないと、頻繁なAPI呼び出しにより高額な請求が発生する可能性があります！
:::

```cpp
void loop() {
  // Make sure you pay attention to the number of API calls! This could cost you extra spending!
  
  if(WiFi.status() == WL_CONNECTED){
    getLocation();
    if(latitude != last_latitude || longitude != last_longitude){  // Update of the location image is performed only when the location is updated
      last_latitude = latitude;
      last_longitude = longitude;
      if(getStaticMapImage(host, getPath().c_str(), mapFile)){
        TJpgDec.drawSdJpg(0, 0, mapFile);
      }
    }
  }
  delay(10000);
}
```

メインループでは、10秒ごとに周辺ネットワークを取得し、現在の位置座標を更新します。返された位置座標が前回と異なる場合、マップが再ダウンロードされ、画面上で更新されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/6.png" style={{width:800, height:'auto'}}/></div>

3Dプリントされたハウジングと組み合わせると、本当にトラッカーのように見えませんか！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/final.jpg" style={{width:800, height:'auto'}}/></div>

最後に、WFPS方式による測位取得の完全なプログラムコードは、下のボタンから入手できます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32S3-Geolocation/blob/main/WFPS-location-method/WFPS-location-method.ino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

## リソース

- **[GITHUB]** [ソースコード](https://github.com/limengdu/XIAO-ESP32S3-Geolocation)
- **[STP]** [XIAO ESP32S3 Senseハウジング設計（上部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp)
- **[STP]** [XIAO ESP32S3 Senseハウジング設計（下部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp)

## トラブルシューティング

### Q1: `WiFi.hostByName()`関数を使用して正確なIPアドレスが取得できないのはなぜですか？

WiFi.hostByName()関数を使用してルーターのパブリックIPアドレスを照会する際は、ルーターがDNSリゾルバーによって対応するIPアドレスに解決できることを確認してください。ルーターがISPによって提供されるDNSサーバーを使用している場合、DNS解決の失敗に遭遇する可能性があります。この場合、GoogleのパブリックDNSサーバー8.8.8.8または8.8.4.4などの代替DNSサーバーを使用してみることができます。

それでも正しいパブリックIPアドレスを照会できない場合、ネットワーク接続の問題やその他のネットワーク設定の問題が原因である可能性があります。以下の方法で問題を解決してみることができます：

1. 代替パブリックIPアドレス照会サービスを試す：api.ipify.orgサービスを使用してパブリックIPアドレスを照会しても正しいIPアドレスを取得できない場合、ip-api.comやwhatismyip.comなどの代替パブリックIPアドレス照会サービスを使用してみることができます。

2. ルーター設定を確認する：ルーター設定を確認し、NATとポートフォワーディング機能が適切に設定され、外部ネットワークへのアクセスをブロックしていないことを確認してください。また、ルーターでUPnP機能を有効にして、ポートフォワーディングを自動設定することも試してみることができます。

3. ルーターとESP32S3デバイスを再起動する：時々、ルーターとESP32S3デバイスを再起動することで、ネットワーク接続と設定の問題を解決できます。

これでも問題が解決しない場合は、2番目の方法を使用するか、ルーターがパブリックIPを照会した後にXIAOに直接値を割り当てることをお勧めします。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
