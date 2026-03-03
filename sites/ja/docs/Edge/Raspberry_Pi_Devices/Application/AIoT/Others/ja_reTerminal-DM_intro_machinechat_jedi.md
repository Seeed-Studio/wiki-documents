---
description: Machinechat JEDI を始める
title: Machinechat JEDI を始める
keywords:
  - reTerminal DM
  - Getting started
  - IIoT
  - Industrial 
  - Jedi MachineChat
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminalDM_Introduction_Jedi_MachineChat
last_update:
  date: 3/28/2024
  author: Kasun Thushara
---

# reTerminal DM & Machinechat JEDI: あなたの産業用IoTパワーハウス

## はじめに

[Machinechat JEDI](https://www.machinechat.io/jedi) は、強力で多用途なIoT（Internet of Things）データ管理ソフトウェアです。幅広いデバイス、センサー、機械からのリアルタイムデータの収集、可視化、監視、および応答のプロセスを合理化するように設計されています。SeeedのreTerminal DMとMachinechat JEDIソフトウェアを使用すると、30分以内にカスタムダッシュボードを構築できます。運用を追跡し、トレンドを分析し、効率を向上させ、コストのかかる中断を防ぐためのタイムリーなアラートを受信できます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/screenshot1.PNG" /></center>

## はじめに

このプロジェクトを開始する前に、ここで説明されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

### ハードウェアの準備

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
      <th class="table-trnobg">XIAO ESP32C3</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
            <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
          <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### ソフトウェアの準備

公式ウェブサイトから Raspberry Pi 64 bit OS の **Bullseye** バージョンをインストールすることをお勧めします。

## reTerminal DM に Machinechat JEDI をインストール

### JEDI のダウンロード

Machinechat のウェブサイトにアクセスし、JEDI Free Edition または JEDI Lite Trial Edition のいずれかを選択してください。

メールアドレスを入力してください。ライセンス情報とサポートされているすべてのオペレーティングシステム用のダウンロードリンクが記載されたメールが届きます。お使いのオペレーティングシステムに適したダウンロードリンクをクリックしてください。**このケースでは 64bit Raspberry pi**

### 解凍と起動

ダウンロードしたファイルは ZIP アーカイブです。reTerminal DM の任意の場所にコンテンツを展開してください。

ターミナルを開いて実行してください。この **/path/to/jedi/folder** をフォルダの場所に置き換えてください。

```sh
cd /path/to/jedi/folder
```

JEDIを起動

```sh
./mcjedi.bin
```

### JEDIのWebインターフェースへのアクセス

reTerminal DMでWebブラウザを開き、以下を入力してください

```sh
http://localhost:9123
```

### セットアップとアクティベーション

EULAを読んで同意し、フォームに記入してください。ユーザー名、パスワード、およびチャレンジ質問への回答（パスワード回復に使用）を提供してください。

新しく作成した認証情報を使用してください。

ダウンロードメールで提供されたライセンスキーを入力してください。JEDIは一時的にインターネットに接続してライセンスを検証し、アクティベートします。

## クイックテスト

### データパイプラインの作成

ラップトップでお気に入りのPython IDE（pycharm/Vs codeなど）を開いてください。
コピーして貼り付けてください。

```sh
import requests
import json

url = 'http://<jedi_ip>:8100/v1/data/mc'  # Replace <jedi_ip> with your reTerminal DM IP address

payload = {
    "context": {
        "target_id": "my_PC",
        "target_ip": "192.168.1.10"  #PC IP
    },
    "data": {
        "temperature": 25.5,
        "humidity": 68
    }
}

headers = {'Content-Type': 'application/json'}
response = requests.post(url, data=json.dumps(payload), headers=headers)

if response.status_code == 200:
    print('Data sent successfully')
else:
    print('Error sending data:', response.text)

```

### 可視化と探索

ダッシュボードの時間です！ナビゲーションパネルでData Dashboardをクリックしてください。このダッシュボードは事前に作成されています。今度はこのダッシュボードにゲージチャートを追加します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/webinterface1.PNG" /></center>

- **ADD CHART**をクリックして、**Data Dashboard**に新しいチャートを追加します。
- **Name**をクリックして、チャートの名前を入力します。
- **Chart Type**をクリックして、**Gauge**を選択します。
- **Source**をクリックして、データと一緒に送信された**target_id**を選択します。上記のサンプルコードまたはペイロードを使用した場合、リストに**my_PC**が表示されます。
- **Property**をクリックして、プロパティ（例：temperature または humidity）を選択します。
- **ADD**をクリックして設定を保存し、チャートをダッシュボードに追加します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/Gaugeconfig.PNG" /></center>

ダッシュボードにゲージが表示されます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/gauge.png" /></center>

## MQTTデータコレクター

JEDIは、即座に使用できる事前設定されたデータコレクターの堅牢な配列を提供します。これらのコレクターは典型的なIoT状況に対応し、以下を含みます：

- **HTTP**: HTTP APIを介してデバイス、スクリプト、その他のアプリケーションからデータを受信できます。
- **MQTTブローカー**: 広く利用されているIoTメッセージングプロトコルであるMQTTを通じて、センサーやデバイスからデータを取得できます。
- **TCP**: 生のTCP接続を介して通信するデバイスからデータを取得できます。
- **Serial**: シリアルポート経由でデータを送信するデバイス（例：Arduinoボード、GPS受信機など）との接続を確立します。

そこで、最も人気のあるMQTTプロトコルについて説明します。

### Xiaoの準備

コードをアップロードする前に、**SSID** **WiFiパスワード** **MQTTサーバーIP（JEDI IP）** **MQTTユーザー名** **MQTTパスワード**を設定してください。この例では、Machine Chat JEDIにダミーデータを送信します。

```sh
#include <WiFi.h>
#include <PubSubClient.h>

const char* ssid = "ABC";
const char* password = "XXXXX";
const char* mqtt_server = "192.XXX.X.XXX";  // Replace with your MQTT broker's IP
const int mqtt_port = 1883;  // Default MQTT port
const char* mqtt_username = "ABC";
const char* mqtt_password = "ABC123";

WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  client.setCallback(callback);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("Connected to WiFi");
  client.setServer(mqtt_server, mqtt_port);
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();

  // Generate random values for each lab: VOC, human presence, temperature, and humidity
  for (int lab = 1; lab <= 3; lab++) {
    int voc = random(60, 80);
    int presence = random(0, 3); // Assuming presence is represented as a boolean (0 for no presence, 1 for presence)
    bool acState = false; // Default A/C state is off
    float temperature = random(18, 30); // Assuming temperature is in Celsius
    int humidity = random(30, 70); // Assuming humidity is a percentage
    bool fire = false;

    // Check if temperature is greater than 25 and human presence is true
    if (temperature > 25 && presence) {
      acState = true; // Turn on the A/C
    }

    // Construct payload
    String payload = "{\"lab\":" + String(lab) + ",\"voc\":" + String(voc) + ",\"presence\":" + String(presence) + ",\"acState\":" + String(acState) + ",\"temperature\":" + String(temperature) + ",\"humidity\":" + String(humidity) +",\"fire\":" + String(fire) + "}";

    // Publish payload for the current lab
    client.publish(("Lab" + String(lab) + "/data").c_str(), payload.c_str());
  }

  delay(10000); // Wait for 10 seconds before sending next data
}

void reconnect() {
  while (!client.connected()) {
    Serial.println("Attempting MQTT connection...");
    if (client.connect("ESP32Client", mqtt_username, mqtt_password)) {
      Serial.println("connected");
      // Subscribe to topics if needed
       client.subscribe("rpi/data");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}

void callback(char* topic, byte* payload, unsigned int length) {
    Serial.print("Message arrived in topic: ");
    Serial.println(topic);

    Serial.print("Message:");
    for (int i = 0; i < length; i++) {
        Serial.print((char)payload[i]);
    }
    Serial.println();
}
```

### MQTTブローカーを有効にする

- **Settings** -> **Data Collectors**に移動します。

- **ADD CONNECTOR**ボタンをクリックして新しいコレクターを追加します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/mqtt1.PNG" /></center>

- コレクタータイプとして「MQTT Broker」を選択します。

- 高度な設定オプション：

- Listen IP：MQTTブローカーがリッスンするIPアドレス。JediのIPアドレス。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/mqtt2.PNG" /></center>

:::note

**Username/Password**：このオプションを有効にして、クライアント認証用のユーザー名とパスワードを設定します。クライアントはMQTTブローカーに接続するために有効な認証情報を提供する必要があります。そのため、Arduinoコードで置き換える必要があります。

:::

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/mqtt3.PNG" /></center>

デバイスダッシュボードで、MQTTデバイス（ESP32Client）が追加されていることが確認できます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/devicedashboard.PNG" /></center>

## ダッシュボードの準備

### カスタムデータダッシュボードの作成

Machinechat JEDIのダッシュボードは、生のIoTデータを洞察に満ちた視覚化に変換するための堅牢で適応性のある方法を提供します。直感的なドラッグアンドドロップインターフェースを通じて、ユーザーは独自の要件に合わせてパーソナライズされたダッシュボードを簡単に作成し、データの物語を効果的に実現できます。

これらのダッシュボードには、カスタマイズ可能なグリッドベースのレイアウト用の**データダッシュボード**、リアルタイムデバイスとセンサーデータ表示用の**デバイスダッシュボード**、背景画像上にデータをオーバーレイする**システムダッシュボード**など、さまざまなタイプがあり、プロセス図やHMIスタイルのインターフェースの作成に最適です。

- JEDI Webインターフェースの**Dashboard Manager**セクションに移動します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard1.PNG" /></center>

- 次に**ADD DASHBOARD**をクリックします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard2.PNG" /></center>

- ダッシュボードタイプ（この場合はData view）、名前、説明を選択して保存します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard3.PNG" /></center>

その後、サイドバーに新しいダッシュボードが追加されたことがわかります。いくつかのウィジェットを追加しましょう。まず、折れ線グラフを追加します。

### 折れ線グラフの追加

- **ADD CHART**をクリックします。

- 任意の名前を付け、**Chart type**として**Line**を選択します。**プラスマーク**をクリックしてデータソースを追加します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard8.PNG" /></center>

- ソース、プロパティタグを追加し、適切な名前と単位を指定します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/linecjhart.PNG" /></center>

- **ADD**をクリックした後、データソース追加ウィンドウと新しいチャートウィンドウで、美しい折れ線グラフを見ることができます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/chart1.PNG" /></center>

### 積み重ね折れ線グラフの追加

- 再び**Add graph**をクリックします。

- 任意の**名前**を付け、**Chart type**として**Line**を選択します。また、**Multiple Y axis mode**を有効にします。一つは「Temperature」用、もう一つは「Humidity」用に使用します。**プラスマーク**をクリックしてデータソースを追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline.PNG" /></center>

- **ソース**、**プロパティタグ**を追加し、適切な名前と単位を指定して**Add**ボタンをクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline2.PNG" /></center>

- 2番目のメトリックの追加：**プラス**アイコンをクリックして、同じ折れ線グラフに別のメトリックを追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline3.PNG" /></center>

- 再び**ソース**、**プロパティタグ**を追加し、適切な名前と単位を指定し、**Y Axis on Right**を選択します。次に**Add**をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline4.PNG" /></center>

- 最後に**Add**をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline5.PNG" /></center>

これで完了です！積み重ね折れ線グラフを取得できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline6.PNG" /></center>

結論として、reTerminal DMを搭載したMachinechat JEDIは、産業運営とスマートインフラ管理の状況を革命的に変える変革的なソリューションとして立っています。IIoT機能をシームレスに統合することで、ユーザーは接続されたデバイスからのリアルタイムデータを活用し、製造プロセス、サプライチェーンロジスティクス、運用効率に関する比類のない洞察を提供します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/screenshot2.PNG" /></center>

## Resources

- **[Web Page]** [Machinechat Official Documentation](https://docs.machinechat.io/)

## Tech Support

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
