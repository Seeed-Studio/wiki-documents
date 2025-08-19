---
description: XIAO ESP32S3 を使用して超コンパクトな全地球測位トラッカーを作成する方法。
title: XIAO ESP32S3 (Sense) を使用した位置情報トラッカー
keywords:
- 位置情報
- トラッカー
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/geolocation_tracker_with_XIAO_ESP32S3
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO ESP32S3 を使用した位置情報トラッカー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/main.jpg" style={{width:1000, height:500}}/></div>

市場に出回っている自作トラッカーは、いくつかの問題に直面することがよくあります。例えば、追跡精度が低い、大型である、トラッカーが使用される環境に厳しい要件があるなどです。XIAO はその優れたサイズ制御により、多くのクリエイターを魅了しています。それでは、XIAO を使用して、そして XIAO のみを使用して、全地球的に位置を特定できるトラッカーを作成することは可能でしょうか？

このチュートリアルでは、GPSモジュールを使用せずに XIAO を展開するための2つの人気のある方法を探ります。そして驚くべきトラッカーを作成します。

## 概要

この記事では、2種類の位置特定方法を紹介します。一つは、XIAO が接続されているネットワークのIPアドレスから位置情報を取得して位置特定を行う方法です。もう一つは、Wi-Fi位置特定システム（一般的にWiPSまたはWFPSと呼ばれる）を使用する方法です。

- **方法1: IPアドレスによる位置特定**

IPアドレスを特定する原理は、IPアドレスを物理的な位置にマッピングするデータベースを使用することに基づいています。このプロセスは一般的にジオロケーションと呼ばれます。

IPアドレスの検索は、逆DNS検索を使用してIPアドレスに関連付けられたドメイン名を取得することを含みます。その後、ドメイン名を使用してウェブサイトやサービスをホストしているサーバーの地理的位置を特定することができます。

IPアドレスのマッピングは、IPアドレスを物理的な位置にマッピングするデータベースを使用することを含みます。このデータベースには、各IPアドレスに関連付けられた都市、地域、国などの情報が含まれている場合があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/iplocation.png" style={{width:700, height:'auto'}}/></div>

IPアドレスジオロケーションの精度は、使用される方法や利用可能なデータの品質によって異なる場合があります。一般的に、IPアドレスジオロケーションは、固定された物理的な位置に関連付けられているデスクトップコンピュータやサーバーなどの固定デバイスに対して最も正確です。スマートフォンやタブレットなどのモバイルデバイスは、移動したり異なるWi-Fiネットワークに接続したりする可能性があるため、正確に位置を特定するのが難しい場合があります。

- **方法2: [WFPS](https://en.wikipedia.org/wiki/Wi-Fi_positioning_system) による位置特定**

Wi-Fi位置特定システムは、近くのWi-Fiホットスポットやその他の無線アクセスポイントの特性を使用してデバイスの位置を特定するジオロケーションシステムです。

これは、GPSなどの衛星ナビゲーションがマルチパスや屋内での信号遮断などの原因で不十分な場合や、衛星の位置を取得するのに時間がかかる場合に使用されます。このようなシステムには、補助GPS、ホットスポットデータベースを使用した都市位置特定サービス、屋内位置特定システムが含まれます。Wi-Fi位置特定は、21世紀初頭の都市部での無線アクセスポイントの急速な増加を利用しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/wfps.png" style={{width:700, height:'auto'}}/></div>

無線アクセスポイントを使用した位置特定に最も一般的で広く使用されているローカリゼーション技術は、受信信号強度（RSSI）を測定し、「フィンガープリント」法を使用することに基づいています。無線アクセスポイントをジオロケートするために役立つ典型的なパラメータには、SSIDやMACアドレスが含まれます。精度は、データベースに登録された近くのアクセスポイントの数に依存します。Wi-Fiホットスポットデータベースは、モバイルデバイスのGPS位置データとWi-FiホットスポットのMACアドレスを関連付けることで充実します。発生する可能性のある信号の変動は、ユーザーの経路における誤差や不正確さを増加させる可能性があります。受信信号の変動を最小限に抑えるために、ノイズをフィルタリングする特定の技術を適用することができます。

これが、GPSモジュールの助けを借りずに XIAO が位置を取得できる理論的な基盤です。また、上記の2つの方法を組み合わせて、座標を画面上の地図として表示するラウンドディスプレイを使用して、最適な位置特定方法を比較します。以下は目次と記事の概要です。

- [ネットワークに接続し、XIAO ESP32S3 でパブリックIPを取得する](#connect-to-the-network-and-obtain-public-ip-with-the-xiao-esp32s3)
- [ipstackプラットフォームで位置座標を取得する](#obtain-location-coordinates-with-the-ipstack-platform)
- [Google MapsからHTTPSサービスを介して静的画像をダウンロードする](#download-static-images-from-google-maps-via-https-service)
- [ラウンドディスプレイに位置地図を表示する](#display-the-location-map-on-the-round-display)
- [WFPS方式を使用した位置特定](#positioning-using-the-wfps-method)
- [最新の位置情報をライブ更新する](#live-updates-on-the-latest-location)

## はじめに

このプロジェクトを成功させるためには、以下のハードウェアを使用する必要があります。いずれの XIAO ESP32 も対応しています。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio XIAO 用ラウンドディスプレイ</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

これに加えて、小型リチウム電池、microSDカード、ケースを準備することで、完全なトラッカー形態を構成することができます。

<iframe width="100%" height="500" src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/install.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## ネットワークに接続し、XIAO ESP32S3でパブリックIPを取得する

:::tip
XIAO ESP32S3のネットワーク機能に慣れていない場合は、[Seeed Studio XIAO ESP32S3 (Sense) のWiFi使用方法](https://wiki.seeedstudio.com/ja/xiao_esp32s3_wifi_usage/)について読むことができます。
:::

XIAO ESP32S3の基本的な使用方法に関するチュートリアルでは、XIAO ESP32S3を使用してネットワークに接続する方法を習得しました。

```cpp
#include <WiFi.h>

// ネットワーク用
const char* ssid = "<YOUR_WIFI_SSID_HERE>";
const char* password = "<YOUR_WIFI_PW_HERE>";

void setup() {
  Serial.begin(115200);

  Serial.print("接続を試みています: ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    Serial.print(".");
  }
  Serial.println("Wi-Fiに接続しました!");
}

void loop() {
}
```

IPアドレスを使用して位置情報を取得する核心は、XIAOのIPアドレスを取得することです。そのため、`WiFi.localIP()`関数を使用してIPアドレスを調べる必要があると考えるのは自然なことです。

しかし実際には、ルーターはXIAOに内部IPアドレス（例: 192.168.xxx.xxx）を割り当てます。この内部IPアドレスでは位置情報を照会することはできません。必要なのはパブリックIPです。そのため、以下のコードを使用します。

```cpp
// ローカルIPアドレスを取得
IPAddress publicIP;
if (WiFi.hostByName("ip-api.com", publicIP)) {
    Serial.print("パブリックIPアドレス: ");
    Serial.println(publicIP);
} else {
    Serial.println("パブリックIPアドレスの取得に失敗しました");
    return;
}
```

これにより、以下のような結果を得ることができます。これが最初のステップです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/7.png" style={{width:600, height:'auto'}}/></div>

## ipstackプラットフォームを使用して位置座標を取得する

IPアドレスを使用した位置情報の取得は、一般的にいくつかの公共サーバーライブラリ情報に必要とされます。このサーバー情報は、いくつかのプラットフォームのAPIインターフェースを利用して取得することができます。例えば、このチュートリアルでは、プラットフォーム[ipstack](https://ipstack.com)を使用します。

ipstackは強力でリアルタイムなIPから地理位置情報へのAPIを提供しており、正確な位置データを検索し、リスクのあるIPアドレスから発生するセキュリティ脅威を評価することができます。結果はJSONまたはXML形式でミリ秒単位で提供されます。

ipstackは無料/有料の検索サービスを提供しており、[価格表](https://ipstack.com/product)は以下の画像で確認できます。この例では、**無料サービス（100クエリ/月）**を使用するだけで十分です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/8.png" style={{width:800, height:'auto'}}/></div>

### ステップ1. ipstack APIアクセスキーを取得する

初めてipstackを使用する場合は、[新しいアカウントを登録](https://ipstack.com/signup/free)する必要があります。

登録してログインすると、APIキーが表示されます。このキーをコピーして安全な場所に保存してください。後で使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/9.png" style={{width:800, height:'auto'}}/></div>

### ステップ2. ipstack APIの使用方法を学ぶ

ipstackは、ipstack APIの使用方法を説明する詳細な[ドキュメント](https://ipstack.com/documentation)を提供しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/10.png" style={{width:800, height:'auto'}}/></div>

非常に簡単ですね。**サーバーのアドレス + IPアドレス + APIキー**を送信するだけです。

次に、ipstackが返すJSONメッセージの種類を確認し、都市、国、緯度、経度など必要な情報を抽出します。

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

その後、ArduinoJSONライブラリを使用して必要な情報を抽出します。

### ステップ3. HTTPサービスを介してIPアドレスの座標を取得する

要約すると、まず**ArduinoJSON**ライブラリをインストールします。このライブラリはArduino IDEから直接検索してダウンロードできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/11.png" style={{width:400, height:'auto'}}/></div>

次に、`getLocation()`関数を作成します。この関数を使用して、ipstackが返す国、都市、緯度、経度の情報を取得し、それらを出力します。

```cpp
// ipstack用
const char* IPStack_key = "<YOUR_API_KEY_HERE>";
String ip_address;

// XIAOの現在のIPアドレスに基づいておおよその座標位置を取得する。
bool getLocation(){
  // IPStack APIへのHTTPリクエストを送信
  HTTPClient http;
  String url = "http://api.ipstack.com/" + String(ip_address) + "?access_key=" + String(IPStack_key);
  Serial.println("リクエストURL: " + url);
  http.begin(url);
  int httpCode = http.GET();

  // JSONレスポンスを解析
  if (httpCode == 200) {
    String payload = http.getString();
    Serial.println("レスポンスペイロード: " + payload);
    DynamicJsonDocument doc(1024);
    deserializeJson(doc, payload);
    String country_name = doc["country_name"].as<String>();
    String region_name = doc["region_name"].as<String>();
    String city = doc["city"].as<String>();
    latitude = doc["latitude"].as<double>();
    longitude = doc["longitude"].as<double>();
    Serial.println("国: " + country_name);
    Serial.println("地域: " + region_name);
    Serial.println("都市: " + city);
    Serial.println("緯度: " + String(latitude));
    Serial.println("経度: " + String(longitude));
    http.end(); // 接続を閉じる
    return true;
  } else {
    Serial.println("HTTPエラーコード: " + String(httpCode));
    http.end(); // 接続を閉じる
    return false;
  }
}
```

上記のプログラムでは、ipstack APIキーを自分のものに置き換えてください。

次に、IPアドレスによる位置情報の精度を確認します。以下の地図の[赤いマークされたポイント](https://www.google.com/maps/place/22%C2%B034'26.5%22N+113%C2%B054'53.1%22E/@22.5729214,113.9171335,16z/data=!4m4!3m3!8m2!3d22.5740278!4d113.91475?hl=zh-CN&entry=ttu)は、IPアドレスによる私の正確な位置を示しています。そして赤い線のもう一方の端は、実際の私の位置です。両者の間には2.4kmの差があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/1.png" style={{width:1000, height:'auto'}}/></div>

このように、この種の位置情報の誤差は数キロメートルの範囲にあり、トラッカーに期待される精度には程遠いことがわかります。

## Google Maps の静的画像を HTTPS サービスを通じてダウンロードする

緯度と経度の座標は、私たちの視点では直感的ではありません。たとえそれが国や都市に関する情報を含んでいたとしてもです。そこで、これらの緯度と経度の座標を地図上にマークし、画面に表示できるかどうかを考えました。そして、Google Cloud のマッピングサービスを見つけました。

始める前に、[Google Maps サービスの料金](https://mapsplatform.google.com/pricing/)を理解して、進めるかどうかを決定することが重要だと思います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/12.png" style={{width:800, height:'auto'}}/></div>

初めて登録するユーザーの場合、**\$300** の無料クレジットが付与されます。ここでは主に Maps Static API を使用しますが、これは **1000 回の呼び出しごとに \$2.00** の料金がかかります。

### ステップ 4. [Google Cloud プロジェクトを設定](https://developers.google.com/maps/documentation/elevation/cloud-setup)し、続く設定手順を完了する

### ステップ 5. Google Maps API を有効化する

Google API を検証するためには Google API キーが必要です。[Google Developers Console](https://console.developers.google.com/apis) に移動して GeoLocation API を有効化してください。この API キーがない場合、エラーが返されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/2.png" style={{width:1000, height:'auto'}}/></div>

API を取得したら、安全な場所に保管してください。後のプログラミング手順で使用します。

:::note
現在使用している環境に関して懸念がある場合、API 呼び出しの制限をオンにして、不正使用による追加料金を回避することができます。特定の制限をオンにするには、プログラムの変更が必要になる場合があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/4.png" style={{width:1000, height:'auto'}}/></div>
:::

## ラウンドディスプレイに位置情報マップを表示する

:::tip
初めて XIAO 用のラウンドディスプレイを使用する場合は、[こちらの Wiki](https://wiki.seeedstudio.com/ja/get_start_round_display/) を参照して、Arduino 環境をラウンドスクリーン用に設定してください。
:::

### ステップ 6. Google Cloud Static Maps API の呼び出し方法を学ぶ

[こちらをクリック](https://developers.google.com/maps/documentation/maps-static/overview)して、Google Cloud Static Maps API のドキュメントを読んでください。

ドキュメントには、API を使用するためのサンプルコードが以下のように記載されています：

```
https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=YOUR_API_KEY&signature=YOUR_SIGNATURE
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/staticmap.png" style={{width:700, height:'auto'}}/></div>

Maps Static API の URL は以下の形式である必要があります：

```
https://maps.googleapis.com/maps/api/staticmap?parameters
```

Maps Static API は、以下の URL パラメータを使用して地図画像を定義します：

- `center`（マーカーが存在しない場合は必須）：地図の中心を定義します。このパラメータは、カンマ区切りの \{緯度,経度\} ペア（例："40.714728,-73.998672"）または文字列アドレス（例："city hall, new york, ny"）を受け取り、地球上の一意の場所を識別します。
- `zoom`（マーカーが存在しない場合は必須）：地図のズームレベルを定義します。このパラメータは、希望する地域のズームレベルに対応する数値を受け取ります。
- `size`（必須）：地図画像の矩形サイズを定義します。このパラメータは、`\{横値\}x\{縦値\}` の形式の文字列を受け取ります。
- `maptype`（オプション）：作成する地図の種類を定義します。利用可能な maptype 値には、roadmap、satellite、hybrid、terrain などがあります。
- `markers`（オプション）：指定された場所に画像にアタッチする 1 つ以上のマーカーを定義します。このパラメータは、パイプ文字（|）で区切られたパラメータを持つ単一のマーカー定義を受け取ります。同じスタイルを持つ限り、複数のマーカーを同じ markers パラメータ内に配置できます。異なるスタイルの追加マーカーを追加するには、追加の markers パラメータを追加します。地図にマーカーを指定した場合、通常必要な center および zoom パラメータを指定する必要はありません。
- `key`（必須）：Google Cloud Console でアプリケーションの API 使用状況を監視し、必要に応じて Google がアプリケーションについて連絡できるようにします。

:::tip
上記は最も基本的なパラメータのみを示しています。この静的地図をカスタマイズする必要がある場合は、**[こちら](https://developers.google.com/maps/documentation/maps-static/start)** をクリックして、パラメータの完全なリストを確認してください。
:::

要約すると、完全な送信用文字列を組み立てることができます。

```cpp
// Google Static Maps 用
const char * host = "maps.googleapis.com";
const String defaultPath = "/maps/api/staticmap?center=";
const String Googlemaps_key = "<YOUR_API_KEY_HERE>";
int zoomLevel = 14;
double latitude;
double longitude;

// Google Maps に送信するコマンドを組み立てる
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

上記のコードを、自分の Google Cloud Maps API に置き換えてください。

### ステップ 7. 返された画像を HTTPS 経由で取得し、microSD カードに書き込む

返送された静止画像を保存するためには、それらを画面に表示するプログラムで読み取れる十分な容量の記憶媒体が必要です。Round DisplayはmicroSDカードをサポートしています。

```cpp
// Google Cloud Servicesから取得した座標の静止画像
bool getStaticMapImage(const char *host, const char *path, String fileName){
  int contentLength = 0;
  int httpCode;

  WiFiClientSecure client;

  client.setCACert(GlobalSignCA);
  client.connect(host, 443);

  Serial.printf("試行中: %s:443...", host);
  
  if(!client.connected()){
    client.stop();
    Serial.printf("*** 接続できませんでした。 ***\n-------\n");
    return false;
  }

  Serial.println("HTTPS接続成功！");
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
    Serial.println(F("ファイルのオープンに失敗しました"));
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
  Serial.println("ダウンロード終了");
  return (remaining == 0 ? true : false);
}
```

### ステップ8. Round DisplayでJPEG画像を表示する

一般的に、Round DisplayがサポートするTFTグラフィックスライブラリはBMP形式の画像表示のみをサポートしています。他の形式の画像を表示する必要がある場合は、サードパーティのライブラリを使用する必要があります。ここでは**[TJpg_Decoder](https://github.com/Bodmer/TJpg_Decoder)**ライブラリを使用します。

このライブラリをZIPファイルとしてダウンロードし、Arduino環境に追加してください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Bodmer/TJpg_Decoder" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

リポジトリで提供されているサンプルプログラムを参考にしてプログラムを再構築します：

```cpp
// JPEGファイルのデコード中に呼び出される次の関数は、
// 各ブロックをTFTにレンダリングします。
// 別のTFTライブラリを使用する場合は、この関数を適応させる必要があります。
bool tft_output(int16_t x, int16_t y, uint16_t w, uint16_t h, uint16_t* bitmap)
{
   // 画像が画面の下端を超えている場合はデコードを停止
  if ( y >= tft.height() ) return 0;

  // この関数はTFTの境界で画像ブロックのレンダリングを自動的にクリップします
  tft.pushImage(x, y, w, h, bitmap);

  // 次のブロックをデコードするために1を返す
  return 1;
}

void setup() {
  // TFTを初期化
  tft.init();
  tft.setRotation(2);
  tft.fillScreen(TFT_BLACK);
  tft.setSwapBytes(true); // カラーバイトを交換する必要があります（エンディアン）

  // TFTの前にSDを初期化
  if (!SD.begin(SD_CS)) {
    Serial.println(F("SD.beginに失敗しました！"));
    return;
  }
  Serial.println("\r\n初期化完了。");

  // JPEG画像は1, 2, 4, または8のスケールで拡大可能
  TJpgDec.setJpgScale(1);

  // デコーダーには上記のレンダリング関数の正確な名前を指定する必要があります
  TJpgDec.setCallback(tft_output);

  if(WiFi.status() == WL_CONNECTED){
    if(getLocation() && getStaticMapImage(host, getPath().c_str(), mapFile)){
      TJpgDec.drawSdJpg(0, 0, mapFile);
    }
  }
}
```

このプロジェクトの完全なプログラムは以下のリンクから入手できます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32S3-Geolocation/blob/main/IP-address-location-method/IP-address-location-method.ino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

プログラムを実行すると、シリアルモニターの出力を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/5.png" style={{width:700, height:'auto'}}/></div>

画面には、IPアドレスに対応する位置の画像も表示されます。

## WFPS方式を使用した位置特定

前のステップで比較したように、IPアドレスを使用した位置特定の精度は非常に低いことが分かりました。そこで次に、WFPS方式を使用して手順を改善し、精度に変化があるかどうかを確認してみましょう。

もちろん、このアルゴリズムを自分で実装するのは難しいため、Google Mapsサービスの[Geolocation API](https://developers.google.com/maps/documentation/geolocation/overview)に依存します。

Geolocation APIは、モバイルクライアントが検出できるセルタワーやWiFiアクセスポイントを含むHTTPSリクエストを受け付けるサービスです。これにより、各有効な入力に対して緯度/経度座標と結果の精度を示す半径が返されます。

コミュニティでは、**[gmag11](https://github.com/gmag11)**とそのチームがこのサービスを直接呼び出せるライブラリを作成しています。ここで直接使用することができます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/gmag11/WifiLocation/tree/master" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

その間に、デバッグメッセージ用の**QuickDebug**ライブラリが必要になります。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/gmag11/QuickDebug" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

次に、`getLocation()`関数を修正する必要があります。

```cpp
// Google Geolocation用
WifiLocation location (Googlemaps_key);

// x.509検証に必要なNTPを介した時刻設定
void setClock () {
    configTime (0, 0, "pool.ntp.org", "time.nist.gov");

    Serial.print ("NTP時刻同期を待機中: ");
    time_t now = time (nullptr);
    while (now < 8 * 3600 * 2) {
        delay (500);
        Serial.print (".");
        now = time (nullptr);
    }
    struct tm timeinfo;
    gmtime_r (&now, &timeinfo);
    Serial.print ("\n");
    Serial.print ("現在の時刻: ");
    Serial.print (asctime (&timeinfo));
}

// WiFi位置特定方式でXIAOの正確な座標を取得
void getLocation(){
  setClock();
  location_t loc = location.getGeoFromWiFi();

  Serial.println("位置リクエストデータ");
  Serial.println(location.getSurroundingWiFiJson()+"\n");
  Serial.println ("位置: " + String (loc.lat, 7) + "," + String (loc.lon, 7));
  latitude = loc.lat;
  longitude = loc.lon;
  Serial.println ("精度: " + String (loc.accuracy));
  Serial.println ("結果: " + location.wlStatusStr (location.getStatus ()));
}
```

WFPSを使用して取得した座標が実際の位置とどのように異なるかを確認してみましょう。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/13.png" style={{width:1000, height:'auto'}}/></div>

位置のずれはすでに約1km程度です！この性能は一部のGPSモジュールよりも優れています。

## 最新位置のライブ更新

では、最後のステップとして、このグローバルポジショントラッカーを仕上げましょう。自動マップ更新機能を実装します。

:::tip
このプログラムを使用する際には、Google Cloud サービスの料金消費を事前に見積もってください。頻繁な API 呼び出しは高額な請求につながる可能性があります！
:::

```cpp
void loop() {
  // API 呼び出しの回数に注意してください！追加の費用が発生する可能性があります！
  
  if(WiFi.status() == WL_CONNECTED){
    getLocation();
    if(latitude != last_latitude || longitude != last_longitude){  // 位置が更新された場合のみ位置画像を更新
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

メインループでは、10秒ごとに周囲のネットワークを取得し、現在の位置座標を更新します。返された位置座標が前回と異なる場合、マップが再ダウンロードされ、画面にリフレッシュされます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/6.png" style={{width:800, height:'auto'}}/></div>

3Dプリントされたハウジングを使用すると、本当にトラッカーのように見えませんか！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/final.jpg" style={{width:800, height:'auto'}}/></div>

最後に、WFPS メソッドを使用して位置情報を取得するための完全なプログラムコードは、以下のボタンからダウンロードできます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32S3-Geolocation/blob/main/WFPS-location-method/WFPS-location-method.ino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

## リソース

- **[GITHUB]** [ソースコード](https://github.com/limengdu/XIAO-ESP32S3-Geolocation)
- **[STP]** [XIAO ESP32S3 Sense ハウジングデザイン（上部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp)
- **[STP]** [XIAO ESP32S3 Sense ハウジングデザイン（下部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp)

## トラブルシューティング

### Q1: `WiFi.hostByName()` 関数を使用して正確な IP アドレスを取得できないのはなぜですか？

`WiFi.hostByName()` 関数を使用してルーターのパブリック IP アドレスを照会する場合、DNS リゾルバーによってルーターが対応する IP アドレスに解決できることを確認してください。ルーターが ISP によって提供される DNS サーバーを使用している場合、DNS 解決の失敗が発生する可能性があります。この場合、Google のパブリック DNS サーバー（8.8.8.8 または 8.8.4.4）などの代替 DNS サーバーを使用してみてください。

それでも正しいパブリック IP アドレスを照会できない場合、ネットワーク接続の問題やその他のネットワーク構成の問題が原因である可能性があります。以下の方法を試して問題を解決してください：

1. **代替のパブリック IP アドレス照会サービスを試す**: api.ipify.org サービスを使用してパブリック IP アドレスを照会しても正しい IP アドレスを取得できない場合、ip-api.com や whatismyip.com などの代替のパブリック IP アドレス照会サービスを試してみてください。

2. **ルーターの設定を確認する**: ルーターの設定を確認し、NAT やポートフォワーディング機能が適切に構成されており、外部ネットワークへのアクセスをブロックしていないことを確認してください。また、ルーターで UPnP 機能を有効にして、ポートフォワーディングを自動的に構成することも試してみてください。

3. **ルーターと ESP32S3 デバイスを再起動する**: 時には、ルーターと ESP32S3 デバイスを再起動することで、ネットワーク接続や構成の問題を解決できる場合があります。

これでも問題が解決しない場合は、2 番目の方法を使用するか、ルーターがパブリック IP を照会した後に XIAO に直接値を割り当てることをお勧めします。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>