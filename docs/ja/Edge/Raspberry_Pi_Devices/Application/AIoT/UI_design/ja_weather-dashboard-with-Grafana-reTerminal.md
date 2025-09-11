---
description: reTerminal 用 Grafana
title: reTerminal 用 Grafana
keywords:
  - Edge
  - reTerminal アプリケーション
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/weather-dashboard-with-Grafana-reTerminal
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Grafana を使用して独自の天気 ダッシュボード を構築する

![image-20220124151124558](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151124558.png)

## はじめに

ここでは、Grafana を使用して reTerminal 上で独自の天気ダッシュボードを作成する方法を紹介します。このプロジェクトは [Michaelm Klementsk](https://www.the-diy-life.com/grafana-weather-dashboard-on-the-reterminal-by-seeed-studio/) によるものです。

[InfluxDB](https://www.influxdata.com/) は、[オープンソース](https://en.wikipedia.org/wiki/Open-source_software)の[時系列データベース](https://en.wikipedia.org/wiki/Time_series_database) (TSDB) で、InfluxData 社によって開発されました。[Go プログラミング言語](https://en.wikipedia.org/wiki/Go_(programming_language)) で記述されており、運用監視、アプリケーションメトリクス、[モノのインターネット (IoT)](https://en.wikipedia.org/wiki/Internet_of_Things) センサーデータ、リアルタイム分析などの分野での[時系列](https://en.wikipedia.org/wiki/Time_series)データの保存と取得を目的としています。また、[Graphite](https://en.wikipedia.org/wiki/Graphite_(software)) からのデータ処理もサポートしています。

[Grafana](https://grafana.com/) は、[マルチプラットフォーム](https://en.wikipedia.org/wiki/Multi-platform)対応の[オープンソース](https://en.wikipedia.org/wiki/Open_source)分析および[インタラクティブな可視化](https://en.wikipedia.org/wiki/Interactive_visualization)ウェブアプリケーションです。サポートされているデータソースに接続すると、ウェブ上でチャート、グラフ、アラートを提供します。追加機能を備えたライセンス版の Grafana Enterprise も、セルフホスト型インストールまたは Grafana Labs クラウドサービスのアカウントとして利用可能です。[プラグインシステム](https://en.wikipedia.org/wiki/Plug-in_(computing))を通じて拡張可能であり、エンドユーザーはインタラクティブなクエリビルダーを使用して複雑な監視ダッシュボードを作成できます。Grafana は[フロントエンドとバックエンド](https://en.wikipedia.org/wiki/Front_end_and_back_end)に分かれており、それぞれ [TypeScript](https://en.wikipedia.org/wiki/TypeScript) と [Go](https://en.wikipedia.org/wiki/Go_(programming_language)) で記述されています。

私たちは ESP32 を使用して温度、湿度、気圧の測定値を収集します。これらのデータは [InfluxDB](https://www.influxdata.com/products/influxdb-cloud/) の時系列データベースに投稿されます。InfluxDB は Raspberry Pi 上でローカルに実行することも、クラウドサーバー上で実行することも可能です。今回はクラウドサーバーを使用します。その後、[Grafana](https://grafana.com/) という分析および可視化アプリケーションを使用して、データベースに保存された情報を表示します。Grafana も Raspberry Pi（または今回の場合は reTerminal）上でローカルに実行することも、クラウドサーバー上で実行することも可能です。今回は reTerminal 上でローカルにインストールして実行します。InfluxDB と Grafana を別々の Pi で使用する必要はなく、両方を reTerminal 上でローカルに実行することも可能です。ただし、データを収集するために reTerminal を常時稼働させる必要がないようにしたいと考えています。

![ESP32 と Grafana 間のデータ処理](https://www.the-diy-life.com/wp-content/uploads/2021/12/Data-Processing-Between-ESP32-and-Grafana-1024x576.jpg)

## 必要な材料

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)
- 電源
- ESP32
- [Grove Sensor’s From Beginner Kit](https://www.seeedstudio.com/Arduino-Sensor-Kit-Base-p-4743.html)
- ブレッドボード
- ブレッドボードジャンパー

## Azure と InfluxDB のセットアップ

まず、仮想マシンを作成する必要があります。

- **ステップ 1.** 以下のページを開き、[Microsoft Azure](https://portal.azure.com/#home) サービスにログインします。`Virtual machines` をクリックし、`Create` をクリックします。

![image-20220124131855082](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124131855082.png)

- **ステップ 2.** 仮想マシンのデフォルトシステムとして Ubuntu 18.04 を選択します。`Review + create` をクリックして次のページに進みます。

![image-20220124132225793](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124132225793.png)

- **ステップ 3.** すべての設定を選択したら、`Create` をクリックします。

![image-20220124132800871](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124132800871.png)

進行には少し時間がかかります。完了したら、`Go to resource` ボタンをクリックします。

![image-20220124133101855](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124133101855.png)

その後、以下のページに移動します。`Networking` をクリックし、`Add inbound port rule` を選択して、任意の宛先でポート `8086` を追加します。

<img src="https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124133706479.png" alt="image-20220124133706479" />

- **ステップ 4.** 以下のコマンドをコピーして Docker をインストールし、有効化します。

```bash
sudo apt udpate
sudo apt install docker docker-compose -y
sudo systemctl enable --now docker && sudo systemctl start docker
sudo systemctl status docker
```

![image-20220124134313484](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124134313484.png)

- **ステップ 5.** 以下のコマンドを使用して InfluxDB イメージをプルします。

```bash
sudo docker pull influxdb:2.1.1
```

![image-20220124134409253](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124134409253.png)

- **ステップ 6.** 以下のコマンドを適用して InfluxDB をバックグラウンドで実行します。

```bash
sudo docker run -d --name influxdb -p 8086:8086 influxdb:2.1.1
```

![image-20220124135326814](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135326814.png)

- **ステップ 7.** ブラウザを開き、`http://yourip:8086`（あなたの IP）を入力します。"Get Started" をクリックして使用を開始します。

![image-20220124135533274](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135533274.png)

- **ステップ 8.** `Organization Name` と `Bucket Name` を記録し、"Continue" をクリックします。

![image-20220124135632177](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135632177.png)

- **ステップ 9.** `Data > API Tokens` をクリックします。

![image-20220124140028985](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124140028985.png)

これで Azure と InfluxDB のセットアップが完了しました。次に ESP32 の設定に進みます。

## ESP32 のセットアップ

天気データを収集するために、ESP32 を使用し、DHT11 センサーをピン 4 に接続し、BMP280 圧力センサーを I2C インターフェース（ピン 21 と 22）に接続します。この例では、[beginner kit](https://amzn.to/31my42U) の 2 つの Grove センサーモジュールを使用しています。このキットには必要な電子部品（追加の抵抗など）がすべて組み込まれています。

![ESP32 Circuit Diagram](https://www.the-diy-life.com/wp-content/uploads/2021/12/ESP32-Circuit-Diagram-1024x576.jpg)

- **ステップ 1.** [Arduino IDE](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を開き、[ライブラリをインストール](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/) します。以下の 2 つの方法を提供します。

1. ライブラリマネージャーを使用

```
1. Arduino IDE を開き、"Sketch" メニューをクリックして Include Library > Manage Libraries を選択します。
2. 検索ボックスに 'influxdb' と入力します。
3. 'InfluxDBClient for Arduino' ライブラリをインストールします。
```

2. 手動インストール

```
1. cd <arduino-sketch-location>/library
2. git clone https://github.com/tobiasschuerg/InfluxDB-Client-for-Arduino
3. Arduino IDE を再起動します。
```

- **ステップ 2.** 以下のコードをスケッチにコピーします。

```cpp
#include <Wire.h>                                                   // 必要なライブラリをインポート
#include "DHT.h"
#include "Seeed_BMP280.h"
#include <WiFiMulti.h>
WiFiMulti wifiMulti;
#define DEVICE "ESP32"

#include <InfluxDbClient.h>
#include <InfluxDbCloud.h>

#define WIFI_SSID "xxxxxxxx"                                            // ネットワーク名
#define WIFI_PASSWORD "xxxxxxxxxx"                                        // ネットワークパスワード
#define INFLUXDB_URL "http://xxxxxxxx:8086"                                                 // InfluxDB v2 サーバー URL
#define INFLUXDB_TOKEN "xxxxxxxxx"                                                                                             // InfluxDB v2 サーバーまたはクラウド API トークン
#define INFLUXDB_ORG "xxxxxxx"                                                                                               // InfluxDB v2 組織 ID
#define INFLUXDB_BUCKET "xxxxxxx"                                                                                            // InfluxDB v2 バケット名
#define TZ_INFO "JST-9"                                                                                                // InfluxDB v2 タイムゾーン

DHT dht(4,DHT11);                                                   // DHT と BMP センサーのパラメータ
BMP280 bmp280;

int temp = 0;                                                       // センサーの読み取り値を格納する変数
int humid = 0;
int pressure = 0;

//InfluxDBClient client(INFLUXDB_URL, INFLUXDB_ORG, INFLUXDB_BUCKET, INFLUXDB_TOKEN, InfluxDbCloud2CACert);                 // InfluxDB クライアントインスタンス（事前構成済みの InfluxCloud 証明書付き）
InfluxDBClient client(INFLUXDB_URL, INFLUXDB_ORG, INFLUXDB_BUCKET, INFLUXDB_TOKEN); 

Point sensor("weather");                                            // データポイント

void setup() 
{
  Serial.begin(115200);                                             // シリアル通信を開始
  
  dht.begin();                                                      // DHT センサーに接続
  if(!bmp280.init())                                                // 圧力センサーに接続
    Serial.println("bmp280 init error!");

  WiFi.mode(WIFI_STA);                                              // WiFi 接続を設定
  wifiMulti.addAP(WIFI_SSID, WIFI_PASSWORD);

  Serial.print("Connecting to wifi");                               // WiFi に接続
  while (wifiMulti.run() != WL_CONNECTED) 
  {
    Serial.print(".");
    delay(100);
  }
  Serial.println();

  sensor.addTag("device", DEVICE);                                   // タグを追加（必要に応じて繰り返し）
  sensor.addTag("SSID", WIFI_SSID);

  timeSync(TZ_INFO, "pool.ntp.org", "time.nis.gov");                 // 証明書の検証とバッチ書き込みに必要な正確な時刻を設定

  if (client.validateConnection())                                   // サーバー接続を確認
  {
    Serial.print("Connected to InfluxDB: ");
    Serial.println(client.getServerUrl());
  } 
  else 
  {
    Serial.print("InfluxDB connection failed: ");
    Serial.println(client.getLastErrorMessage());
  }
}

void loop()                                                          // ループ関数
{
  temp = dht.readTemperature();                                      // 温度を記録
  humid = dht.readHumidity();                                        // 湿度を記録
  pressure = bmp280.getPressure()/100;                               // 圧力を記録

  sensor.clearFields();                                              // ポイントを再利用するためにフィールドをクリア。タグはそのまま

  sensor.addField("temperature", temp);                              // 測定値をポイントに格納
  sensor.addField("humidity", humid);                                // 測定値をポイントに格納
  sensor.addField("pressure", pressure);                             // 測定値をポイントに格納

    
  if (wifiMulti.run() != WL_CONNECTED)                               // WiFi 接続を確認し、必要に応じて再接続
    Serial.println("Wifi connection lost");

  if (!client.writePoint(sensor))                                    // データポイントを書き込み
  {
    Serial.print("InfluxDB write failed: ");
    Serial.println(client.getLastErrorMessage());
  }
  
  Serial.print("Temp: ");                                            // シリアルモニターに読み取り値を表示
  Serial.println(temp);
  Serial.print("Humidity: ");
  Serial.println(humid);
  Serial.print("Pressure: ");
  Serial.println(pressure);
  delay(1000);                                                      // 60 秒待機
}
```

**注意:** コードは完成していません。API トークンとバケットを設定すると、InfluxDB ダッシュボードからアクセスできる Arduino インターフェースページで生成されたコードには、すでに正しい設定情報が含まれています。そのため、コードにコピーするだけで済みます。

![InfluxDB Arduino インターフェースの手順](https://www.the-diy-life.com/wp-content/uploads/2021/12/InfluxDB-Arduino-Interface-Instructions-1024x576.jpg)

- **ステップ 3.** コードをアップロードして結果を確認します。

![image-20220124140133524](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124140133524.png)

しばらくすると、情報が InfluxDB データベースに表示されるのが確認でき、ESP32 が正しく動作していることがわかります。次に、reTerminal に Grafana をインストールし、データベースの情報を表示するように設定します。

## reTerminal に Grafana をインストールして設定する

次に、[Debian または Ubuntu にインストールする手順](https://grafana.com/docs/grafana/latest/installation/debian/)に従って、ターミナルで Grafana をインストールします。その後、Grafana を起動し、起動時に再起動するように設定します。

![Grafana のインストール](https://www.the-diy-life.com/wp-content/uploads/2021/12/Installing-Grafana-1024x542.jpg)

- **ステップ 1.** ブラウザで新しいタブを開き、localhost のポート 3000 にアクセスして Grafana の Web インターフェースにアクセスします。reTerminal 上のブラウザを開き、`http://localhost:3000` と入力します。

![Grafana Web インターフェース Localhost3000](https://www.the-diy-life.com/wp-content/uploads/2021/12/Grafana-Web-Interface-Localhost3000-1024x534.jpg)

次に、InfluxDB からデータを読み取るように設定します。サーバーと認証情報を入力します。これらはすべて InfluxDB の Web インターフェースで確認でき、ESP32 がデータを送信している情報と非常に似ています。

- **ステップ 2.** `Setting` ボタンをクリックし、`Data sources` を選択します。

![image-20220124144300849](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124144300849.png)

- **ステップ 3.** フィルターに `InfluxDB` と入力し、`InfluxDB` を選択します。

![image-20220124144322352](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124144322352.png)

これで、reTerminal に Grafana をインストールして設定が完了しました。

## [Grafana を Flux に設定する](https://docs.influxdata.com/influxdb/v2.0/tools/grafana/#configure-grafana-to-use-flux)

InfluxDB データソースでクエリ言語として **Flux** を選択した状態で、InfluxDB 接続を設定します。

- **ステップ 1.** **Connection** を設定し、**Save & Test** をクリックします。それぞれの情報は以下の通りです：

  - **URL**: あなたの [InfluxDB URL](https://docs.influxdata.com/influxdb/v2.0/reference/urls/)。

     ```sh
     http://yourip:8086/
     ```

     [InfluxDB URL を変更する](https://docs.influxdata.com/influxdb/v2.0/tools/grafana/#)
  - **Organization**: あなたの InfluxDB [組織名または ID](https://docs.influxdata.com/influxdb/v2.0/organizations/view-orgs/)。
  - **Token**: あなたの InfluxDB [API トークン](https://docs.influxdata.com/influxdb/v2.0/security/tokens/)。
  - **Default Bucket**: Flux クエリで使用するデフォルトの [バケット](https://docs.influxdata.com/influxdb/v2.0/organizations/buckets/)。
  - **Min time interval**: [Grafana の最小時間間隔](https://grafana.com/docs/grafana/latest/features/datasources/influxdb/#min-time-interval)。

![img](https://docs.influxdata.com/img/influxdb/2-0-tools-grafana.png)

Grafana は InfluxDB 2.0 データソースに接続し、テスト結果を返します。

- **ステップ 2.** パネルを追加します。

![image-20220124143542830](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143542830.png)

- **ステップ 3.** `InfluxDB` に戻り、以下の手順に従ってスクリプトを作成します。

![image-20220124143752559](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143752559.png)

- **ステップ 4.** スクリプトをコピーして reTerminal に貼り付けます。

![image-20220124143812005](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143812005.png)

![image-20220124151052928](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151052928.png)

- **ステップ 5.** reTerminal で結果を確認し、以下のように情報が表示されるはずです。

![image-20220124164221791](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124164221791.png)

![image-20220124151124558](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151124558.png)