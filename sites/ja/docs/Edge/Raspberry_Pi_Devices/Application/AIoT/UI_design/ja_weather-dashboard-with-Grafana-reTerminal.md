---
description: reTerminal用Grafana
title: reTerminal用Grafana
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/weather-dashboard-with-Grafana-reTerminal
last_update:
  date: 2/1/2023
  author: jianjing Huang
---

# Grafanaを使用して独自の天気ダッシュボードを構築する

![image-20220124151124558](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151124558.png)

## はじめに

ここでは、Grafanaを使用してreTerminal上で独自の天気ダッシュボードを作成する方法を紹介します。これは[Michaelm Klementsk](https://www.the-diy-life.com/grafana-weather-dashboard-on-the-reterminal-by-seeed-studio/)に感謝いたします。

[InfluxDB](https://www.influxdata.com/)は、InfluxData社によって開発された[オープンソース](https://en.wikipedia.org/wiki/Open-source_software)の[時系列データベース](https://en.wikipedia.org/wiki/Time_series_database)（TSDB）です。運用監視、アプリケーションメトリクス、[モノのインターネット](https://en.wikipedia.org/wiki/Internet_of_Things)センサーデータ、リアルタイム分析などの分野における[時系列](https://en.wikipedia.org/wiki/Time_series)データの保存と取得のために[Go言語](https://en.wikipedia.org/wiki/Go_(programming_language))で書かれています。また、[Graphite](https://en.wikipedia.org/wiki/Graphite_(software))からのデータ処理もサポートしています。

[Grafana](https://grafana.com/)は、[マルチプラットフォーム](https://en.wikipedia.org/wiki/Multi-platform)の[オープンソース](https://en.wikipedia.org/wiki/Open_source)分析および[インタラクティブ可視化](https://en.wikipedia.org/wiki/Interactive_visualization)ウェブアプリケーションです。サポートされているデータソースに接続すると、ウェブ用のチャート、グラフ、アラートを提供します。追加機能を持つライセンス版のGrafana Enterpriseも、セルフホストインストールまたはGrafana Labsクラウドサービスのアカウントとして利用できます。[プラグインシステム](https://en.wikipedia.org/wiki/Plug-in_(computing))を通じて拡張可能です。エンドユーザーは、インタラクティブなクエリビルダーを使用して複雑な監視ダッシュボードを作成できます。Grafanaは[フロントエンドとバックエンド](https://en.wikipedia.org/wiki/Front_end_and_back_end)に分かれており、それぞれ[TypeScript](https://en.wikipedia.org/wiki/TypeScript)と[Go](https://en.wikipedia.org/wiki/Go_(programming_language))で書かれています。

ESP32を使用して温度、湿度、気圧の測定値を収集します。これらは[InfluxDB](https://www.influxdata.com/products/influxdb-cloud/)の時系列データベースに投稿されます。InfluxDBはRaspberry Pi上でローカルに実行することも、クラウドサーバー上で実行することもできますが、今回はクラウドサーバーを使用します。次に、データベースに保存された情報を表示するために、[Grafana](https://grafana.com/)という分析・可視化アプリケーションを使用します。GrafanaもRaspberry Pi（この場合はreTerminal）上でローカルに実行することも、クラウドサーバー上で実行することもできます。今回はreTerminal上でローカルにインストールして実行します。InfluxDBとGrafanaに別々のPiを使用する必要はありません。お望みであれば、両方をreTerminal上でローカルに実行することもできます。ただし、データを収集するためにreTerminalを常時稼働させておきたくないだけです。

![ESP32とGrafana間のデータ処理](https://www.the-diy-life.com/wp-content/uploads/2021/12/Data-Processing-Between-ESP32-and-Grafana-1024x576.jpg)

## 必要な材料

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)
- 電源
- ESP32
- [Grove Sensor's From Beginner Kit](https://www.seeedstudio.com/Arduino-Sensor-Kit-Base-p-4743.html)
- ブレッドボード
- ブレッドボード用ジャンパー線

## Azure と InflexDB のセットアップ

まず仮想マシンを作成する必要があります。

- **ステップ 1.** 以下のページを開き、[Microsoft Azure](https://portal.azure.com/#home) サービスにログインします。`Virtual machines` をクリックし、`Create` をクリックします。

![image-20220124131855082](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124131855082.png)

- **ステップ 2.** 仮想マシンのデフォルトシステムとして Ubuntu 18.04 システムを選択します。`Review + create` をクリックして次のページに進みます。

![image-20220124132225793](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124132225793.png)

- **ステップ 3.** すべての設定が選択されたら、`Create` をクリックします。

![image-20220124132800871](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124132800871.png)

進行には時間がかかります。完了したら、`Go to resource` ボタンをクリックします。

![image-20220124133101855](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124133101855.png)

すると以下のページに移動します。`Networking` をクリックし、`Add inbound port rule` を選択して、任意の宛先で `8086` ポートを追加します。

<img src="https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124133706479.png" alt="image-20220124133706479" />

- **ステップ 4.** これらのコマンドをコピーして docker をインストールし、有効にします。

```bash
sudo apt udpate
sudo apt install docker docker-compose -y
sudo systemctl enable --now docker && sudo systemctl start docker
sudo systemctl status docker
```

![image-20220124134313484](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124134313484.png)

- **ステップ 5.** コマンドを使用してInfluxDBイメージをプルダウンします。

```bash
sudo docker pull influxdb:2.1.1
```

![image-20220124134409253](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124134409253.png)

- **ステップ 6.** コマンドを適用してInfluxDBをバックグラウンドで実行します。

```bash
sudo docker run -d --name influxdb -p 8086:8086 influxdb:2.1.1
```

![image-20220124135326814](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135326814.png)

- **ステップ 7.** ブラウザを開き、`http://yourip:8086`（あなたのIP）を入力します。「Get Started」をクリックして使用を開始します。

![image-20220124135533274](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135533274.png)

- **ステップ 8.** `Organization Name` と `Bucket Name` を記録し、「Continue」をクリックします。

![image-20220124135632177](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135632177.png)

- **ステップ 9.** `Data > API Tokens` をクリックします。

![image-20220124140028985](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124140028985.png)

Azure と InflexDB の設定が完了しました。次に ESP32 の設定に移ります。

## ESP32 セットアップ

気象データを収集するために、ピン4に接続されたDHT11センサーとI2Cインターフェース（ピン21と22）に接続されたBMP280圧力センサーを備えたESP32を使用します。この例では、[初心者キット](https://amzn.to/31my42U)の2つのGroveセンサーモジュールを使用しています。これらには必要な電子部品（追加の抵抗など）がすべて組み込まれているためです。

![ESP32 Circuit Diagram](https://www.the-diy-life.com/wp-content/uploads/2021/12/ESP32-Circuit-Diagram-1024x576.jpg)

- **ステップ 1.** [Arduino IDE](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を開き、[ライブラリをインストール](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)します。ここでは2つのインストール方法を提供します。

1. Library Manager を使用

```
1. Open the Arduino IDE and click to the "Sketch" menu and then Include Library > Manage Libraries.
2. Type 'influxdb' in the search box
3. Install the 'InfluxDBClient for Arduino' library
```

2. 手動インストール

```
1. cd <arduino-sketch-location>/library.
2. git clone https://github.com/tobiasschuerg/InfluxDB-Client-for-Arduino
3. Restart the Arduino IDE
```

- **ステップ 2.** 以下のコードをスケッチにコピーしてください。

```cpp
#include <Wire.h>                                                   //Import the required libraries
#include "DHT.h"
#include "Seeed_BMP280.h"
#include <WiFiMulti.h>
WiFiMulti wifiMulti;
#define DEVICE "ESP32"

#include <InfluxDbClient.h>
#include <InfluxDbCloud.h>

#define WIFI_SSID "xxxxxxxx"                                            //Network Name
#define WIFI_PASSWORD "xxxxxxxxxx"                                        //Network Password
#define INFLUXDB_URL "http://xxxxxxxx:8086"                                                 //InfluxDB v2 server url, e.g. https://eu-central-1-1.aws.cloud2.influxdata.com (Use: InfluxDB UI -> Load Data -> Client Libraries)
#define INFLUXDB_TOKEN "xxxxxxxxx"                                                                                             //InfluxDB v2 server or cloud API token (Use: InfluxDB UI -> Data -> API Tokens -> <select token>)
#define INFLUXDB_ORG "xxxxxxx"                                                                                               //InfluxDB v2 organization id (Use: InfluxDB UI -> User -> About -> Common Ids )
#define INFLUXDB_BUCKET "xxxxxxx"                                                                                            //InfluxDB v2 bucket name (Use: InfluxDB UI ->  Data -> Buckets)
#define TZ_INFO "JST-9"                                                                                                //InfluxDB v2 timezone

DHT dht(4,DHT11);                                                   //DHT and BMP sensor parameters
BMP280 bmp280;

int temp = 0;                                                       //Variables to store sensor readings
int humid = 0;
int pressure = 0;

//InfluxDBClient client(INFLUXDB_URL, INFLUXDB_ORG, INFLUXDB_BUCKET, INFLUXDB_TOKEN, InfluxDbCloud2CACert);                 //InfluxDB client instance with preconfigured InfluxCloud certificate
InfluxDBClient client(INFLUXDB_URL, INFLUXDB_ORG, INFLUXDB_BUCKET, INFLUXDB_TOKEN); 

Point sensor("weather");                                            //Data point

void setup() 
{
  Serial.begin(115200);                                             //Start serial communication
  
  dht.begin();                                                      //Connect to the DHT Sensor
  if(!bmp280.init())                                                //Connect to pressure sensor
    Serial.println("bmp280 init error!");

  WiFi.mode(WIFI_STA);                                              //Setup wifi connection
  wifiMulti.addAP(WIFI_SSID, WIFI_PASSWORD);

  Serial.print("Connecting to wifi");                               //Connect to WiFi
  while (wifiMulti.run() != WL_CONNECTED) 
  {
    Serial.print(".");
    delay(100);
  }
  Serial.println();

  sensor.addTag("device", DEVICE);                                   //Add tag(s) - repeat as required
  sensor.addTag("SSID", WIFI_SSID);

  timeSync(TZ_INFO, "pool.ntp.org", "time.nis.gov");                 //Accurate time is necessary for certificate validation and writing in batches

  if (client.validateConnection())                                   //Check server connection
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

void loop()                                                          //Loop function
{
  temp = dht.readTemperature();                                      //Record temperature
  humid = dht.readHumidity();                                        //Record temperature
  pressure = bmp280.getPressure()/100;                               //Record pressure

  sensor.clearFields();                                              //Clear fields for reusing the point. Tags will remain untouched

  sensor.addField("temperature", temp);                              // Store measured value into point
  sensor.addField("humidity", humid);                                // Store measured value into point
  sensor.addField("pressure", pressure);                             // Store measured value into point

    
  if (wifiMulti.run() != WL_CONNECTED)                               //Check WiFi connection and reconnect if needed
    Serial.println("Wifi connection lost");

  if (!client.writePoint(sensor))                                    //Write data point
  {
    Serial.print("InfluxDB write failed: ");
    Serial.println(client.getLastErrorMessage());
  }
  
  Serial.print("Temp: ");                                            //Display readings on serial monitor
  Serial.println(temp);
  Serial.print("Humidity: ");
  Serial.println(humid);
  Serial.print("Pressure: ");
  Serial.println(pressure);
  delay(1000);                                                      //Wait 60 seconds
}
```

**注意:** コードは完成していません。APIトークンとバケットを設定すると、InfluxDBダッシュボードからアクセスするArduinoインターフェースページで生成されるコードには、すでに正しいセットアップ情報が含まれているため、コードにコピーするだけで済みます。

![InfluxDB Arduino Interface Instructions](https://www.the-diy-life.com/wp-content/uploads/2021/12/InfluxDB-Arduino-Interface-Instructions-1024x576.jpg)

- **ステップ 3.** コードをアップロードして結果を確認します。

![image-20220124140133524](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124140133524.png)

しばらくすると、InfluxDBデータベースに情報が利用可能になっていることが確認でき、ESP32が正しく動作していることがわかります。これで、reTerminalにGrafanaをインストールし、データベース内の情報を表示するように設定することに進むことができます。

## reTerminalにGrafanaをインストールして設定する

次に、[DebianまたはUbuntuでのインストール](https://grafana.com/docs/grafana/latest/installation/debian/)のWebサイトで説明されているターミナル手順に従ってGrafanaをインストールします。その後、Grafanaを開始し、起動時に再起動するように設定するだけです。

![Installing Grafana](https://www.the-diy-life.com/wp-content/uploads/2021/12/Installing-Grafana-1024x542.jpg)

- **ステップ 1.**  ブラウザで新しいタブを開き、localhost、ポート3000を指定してGrafana Webインターフェースにアクセスします。reTerminalでブラウザを開き、`http://localhost:3000`と入力できます。

![Grafana Web Interface Localhost3000](https://www.the-diy-life.com/wp-content/uploads/2021/12/Grafana-Web-Interface-Localhost3000-1024x534.jpg)

次に、サーバーと認証情報を入力してInfluxDBからデータを読み取るように設定する必要があります。これらの情報はすべてInfluxDB Webインターフェースで確認でき、ESP32がデータを公開している情報と非常に似ています。

- **ステップ 2.**  `Setting`ボタンをクリックして`Data sources`を選択します。

![image-20220124144300849](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124144300849.png)

- **ステップ 3.**  フィルターに`InfluxDB`と入力し、`InfluxDB`を選択します。

![image-20220124144322352](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124144322352.png)

これで、reTerminalにGrafanaをインストールして設定しました。

## [Fluxを使用するようにGrafanaを設定する](https://docs.influxdata.com/influxdb/v2.0/tools/grafana/#configure-grafana-to-use-flux)

InfluxDBデータソースでクエリ言語として**Flux**を選択した状態で、InfluxDB接続を設定します：

- **ステップ 1.**  **Connection**を設定し、**Save & Test**をクリックします。それぞれの情報は以下の通りです：

  - **URL**: あなたの[InfluxDB URL](https://docs.influxdata.com/influxdb/v2.0/reference/urls/)。

     ```sh
     http://yourip:8086/
     ```

     [InfluxDB URLを変更](https://docs.influxdata.com/influxdb/v2.0/tools/grafana/#)
  - **Organization**: あなたのInfluxDB[組織名**または**ID](https://docs.influxdata.com/influxdb/v2.0/organizations/view-orgs/)。
  - **Token**: あなたのInfluxDB [APIトークン](https://docs.influxdata.com/influxdb/v2.0/security/tokens/)。
  - **Default Bucket**: Fluxクエリで使用するデフォルトの[バケット](https://docs.influxdata.com/influxdb/v2.0/organizations/buckets/)。
  - **Min time interval**: [Grafana最小時間間隔](https://grafana.com/docs/grafana/latest/features/datasources/influxdb/#min-time-interval)。

![img](https://docs.influxdata.com/img/influxdb/2-0-tools-grafana.png)

GrafanaはInfluxDB 2.0データソースに接続し、テストの結果を返すはずです。

- **ステップ 2.**  ここでパネルを追加します。

![image-20220124143542830](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143542830.png)

- **ステップ 3.**  `InfluxDB`に戻り、以下の手順に従ってスクリプトを作成します。

![image-20220124143752559](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143752559.png)

- **ステップ 4.**  スクリプトをコピーしてreTerminalに貼り付けます。

![image-20220124143812005](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143812005.png)

![image-20220124151052928](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151052928.png)

- **ステップ 5.** reTerminalで結果を確認すると、以下のように情報が表示されるはずです。

![image-20220124164221791](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124164221791.png)

![image-20220124151124558](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151124558.png)
