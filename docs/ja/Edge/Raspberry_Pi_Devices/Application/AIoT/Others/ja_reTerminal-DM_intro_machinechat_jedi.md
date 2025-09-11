---
description: Machinechat JEDI の使い方
title: Machinechat JEDI の使い方
keywords:
  - reTerminal DM
  - 初めての使用
  - IIoT
  - 産業用
  - Jedi MachineChat
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminalDM_Introduction_Jedi_MachineChat
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reTerminal DM & Machinechat JEDI: 産業用 IoT の強力なツール

## はじめに

[Machinechat JEDI](https://www.machinechat.io/jedi) は、強力で多用途な IoT (Internet of Things) データ管理ソフトウェアです。さまざまなデバイス、センサー、機械からリアルタイムデータを収集、可視化、監視し、対応するプロセスを簡素化するよう設計されています。Seeed の reTerminal DM と Machinechat JEDI ソフトウェアを使用すれば、30 分以内にカスタムダッシュボードを構築できます。運用状況を追跡し、トレンドを分析し、効率を向上させ、コストのかかる障害を防ぐためのタイムリーなアラートを受け取ることができます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/screenshot1.PNG" /></center>

## 始める前に

このプロジェクトを開始する前に、以下に記載されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
          <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### ソフトウェアの準備

Raspberry Pi 64 ビット OS の **Bullseye** バージョンを公式ウェブサイトからインストールすることをお勧めします。

## reTerminal DM に Machinechat JEDI をインストールする

### JEDI のダウンロード

Machinechat のウェブサイトにアクセスし、JEDI Free Edition または JEDI Lite Trial Edition のいずれかを選択してください。

メールアドレスを入力すると、ライセンス情報とすべての対応 OS 用のダウンロードリンクが記載されたメールが届きます。使用している OS に適したダウンロードリンクをクリックしてください。**この場合は 64 ビット Raspberry Pi**

### 解凍と起動

ダウンロードしたファイルは ZIP アーカイブ形式です。内容を reTerminal DM の任意の場所に解凍してください。

ターミナルを開き、以下を実行します。**/path/to/jedi/folder** をフォルダの場所に置き換えてください。

```sh
cd /path/to/jedi/folder
```

JEDI を起動します。

```sh
./mcjedi.bin
```

### JEDI のウェブインターフェースへのアクセス

reTerminal DM でウェブブラウザを開き、以下を入力します。

```sh
http://localhost:9123
```

### セットアップとアクティベーション

EULA を読み、同意してください。フォームにユーザー名、パスワード、チャレンジ質問（パスワード回復に使用）を入力します。

新しく作成した資格情報を使用してください。

ダウンロードメールで提供されたライセンスキーを入力します。JEDI はインターネットに一時的に接続し、ライセンスを検証してアクティベートします。

## クイックテスト

### データパイプラインの作成

お使いのノートパソコンでお気に入りのPython IDEを開きます。（例：PyCharm、VS Code）  
以下のコードをコピーして貼り付けてください。

```sh
import requests
import json

url = 'http://<jedi_ip>:8100/v1/data/mc'  # <jedi_ip> を reTerminal DM IPアドレスに置き換えてください

payload = {
    "context": {
        "target_id": "my_PC",
        "target_ip": "192.168.1.10"  # PCのIPアドレス
    },
    "data": {
        "temperature": 25.5,
        "humidity": 68
    }
}

headers = {'Content-Type': 'application/json'}
response = requests.post(url, data=json.dumps(payload), headers=headers)

if response.status_code == 200:
    print('データが正常に送信されました')
else:
    print('データ送信エラー:', response.text)
```

### 可視化と探索

Dashboard の時間です！ナビゲーションパネルで「Data Dashboard」をクリックしてください。このダッシュボードは事前に作成されています。次に、このダッシュボードにゲージチャートを追加します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/webinterface1.PNG" /></center>

- **ADD CHART** をクリックして **Data Dashboard** に新しいチャートを追加します。
- **Name** をクリックしてチャートの名前を入力します。
- **Chart Type** をクリックして **Gauge** を選択します。
- **Source** をクリックして、データと一緒に送信された **target_id** を選択します。上記のサンプルコードまたはペイロードを使用した場合、リストに **my_PC** が表示されます。
- **Property** をクリックしてプロパティ（例：温度または湿度）を選択します。
- **ADD** をクリックして設定を保存し、ダッシュボードにチャートを追加します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/Gaugeconfig.PNG" /></center>

ダッシュボードにゲージが表示されます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/gauge.png" /></center>

## MQTTデータコレクター

JEDIは、すぐに使用可能な事前設定済みのデータコレクターを豊富に提供しています。これらのコレクターは一般的なIoTの状況に対応しており、以下を含みます：

- **HTTP**: デバイス、スクリプト、その他のアプリケーションからHTTP APIを介してデータを受信します。
- **MQTT Broker**: IoTで広く利用されているメッセージングプロトコルMQTTを通じて、センサーやデバイスからデータを取得します。
- **TCP**: 生のTCP接続を介して通信するデバイスからデータを取得します。
- **Serial**: シリアルポートを介してデータを送信するデバイス（例：Arduinoボード、GPS受信機など）と接続します。

ここでは、最も人気のあるMQTTプロトコルについて説明します。

### Xiaoの準備

コードをアップロードする前に、以下を設定してください：  
**SSID**、**WiFiパスワード**、**MQTTサーバーIP（JEDI IP）**、**MQTTユーザー名**、**MQTTパスワード**。  
この例では、ダミーデータをMachine Chat JEDIに送信します。

```sh
#include <WiFi.h>
#include <PubSubClient.h>

const char* ssid = "ABC";
const char* password = "XXXXX";
const char* mqtt_server = "192.XXX.X.XXX";  // MQTTブローカーのIPに置き換えてください
const int mqtt_port = 1883;  // デフォルトのMQTTポート
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
    Serial.println("WiFiに接続中...");
  }

  Serial.println("WiFiに接続しました");
  client.setServer(mqtt_server, mqtt_port);
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();

  // 各ラボのVOC、人の存在、温度、湿度のランダム値を生成
  for (int lab = 1; lab <= 3; lab++) {
    int voc = random(60, 80);
    int presence = random(0, 3); // 人の存在をブール値（0: 存在なし、1: 存在あり）として仮定
    bool acState = false; // デフォルトのエアコン状態はオフ
    float temperature = random(18, 30); // 温度は摂氏と仮定
    int humidity = random(30, 70); // 湿度はパーセンテージと仮定
    bool fire = false;

    // 温度が25を超え、人の存在がある場合
    if (temperature > 25 && presence) {
      acState = true; // エアコンをオンにする
    }

    // ペイロードを構築
    String payload = "{\"lab\":" + String(lab) + ",\"voc\":" + String(voc) + ",\"presence\":" + String(presence) + ",\"acState\":" + String(acState) + ",\"temperature\":" + String(temperature) + ",\"humidity\":" + String(humidity) +",\"fire\":" + String(fire) + "}";

    // 現在のラボのペイロードを公開
    client.publish(("Lab" + String(lab) + "/data").c_str(), payload.c_str());
  }

  delay(10000); // 次のデータ送信まで10秒待機
}

void reconnect() {
  while (!client.connected()) {
    Serial.println("MQTT接続を試みています...");
    if (client.connect("ESP32Client", mqtt_username, mqtt_password)) {
      Serial.println("接続しました");
      // 必要に応じてトピックを購読
       client.subscribe("rpi/data");
    } else {
      Serial.print("失敗しました, rc=");
      Serial.print(client.state());
      Serial.println(" 5秒後に再試行します");
      delay(5000);
    }
  }
}

void callback(char* topic, byte* payload, unsigned int length) {
    Serial.print("トピックにメッセージが到着しました: ");
    Serial.println(topic);

    Serial.print("メッセージ:");
    for (int i = 0; i < length; i++) {
        Serial.print((char)payload[i]);
    }
    Serial.println();
}
```

### MQTTブローカーの有効化

- **Settings** -> **Data Collectors** に移動します。

- **ADD CONNECTOR** ボタンをクリックして新しいコレクターを追加します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/mqtt1.PNG" /></center>

- コレクタータイプとして「MQTT Broker」を選択します。

- 高度な設定オプション：

- Listen IP: MQTTブローカーがリッスンするIPアドレス。Jedi IPアドレス。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/mqtt2.PNG" /></center>

:::note

**ユーザー名/パスワード**: このオプションを有効にして、クライアント認証のためにユーザー名とパスワードを設定します。クライアントはMQTTブローカーに接続するために有効な資格情報を提供する必要があります。これをArduinoコードに置き換えてください。

:::

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/mqtt3.PNG" /></center>

デバイスダッシュボードでは、MQTTデバイス（ESP32Client）が追加されていることが確認できます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/devicedashboard.PNG" /></center>

## ダッシュボード 準備

### カスタムデータ ダッシュボード の作成

Machinechat JEDIのダッシュボードは、生のIoTデータを洞察に満ちた視覚化に変換するための強力で柔軟な方法を提供します。直感的なドラッグ＆ドロップインターフェースを通じて、ユーザーは独自の要件に合わせたパーソナライズされたダッシュボードを簡単に作成し、データのストーリーを効果的に実現できます。

これらのダッシュボードには、以下の種類があります：
- **データダッシュボード**：カスタマイズ可能なグリッドベースのレイアウト。
- **デバイスダッシュボード**：リアルタイムのデバイスおよびセンサーのデータ表示。
- **システムダッシュボード**：背景画像にデータをオーバーレイすることで、プロセス図やHMIスタイルのインターフェースを作成するのに最適。

- JEDIウェブインターフェースの**ダッシュボード マネージャー**セクションに移動します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard1.PNG" /></center>

- 次に、**ADD DASHBOARD**をクリックします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard2.PNG" /></center>

- ダッシュボードの種類を選択します（この場合はデータビュー）。名前と説明を入力して保存します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard3.PNG" /></center>

その後、新しいダッシュボードがサイドバーに追加されていることが確認できます。次にウィジェットを追加します。まず、折れ線グラフを追加します。

### 折れ線グラフの追加

- **ADD CHART**をクリックします。

- 任意の名前を入力し、**Chart type**を**Line**に選択します。そして、**プラスマーク**をクリックしてデータソースを追加します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard8.PNG" /></center>

- ソースを追加し、プロパティタグを設定して、適切な名前と単位を入力します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/linecjhart.PNG" /></center>

- **ADD**をクリックすると、データソースウィンドウと新しいチャートウィンドウが表示され、きれいな折れ線グラフを見ることができます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/chart1.PNG" /></center>

### 積み上げ折れ線グラフの追加

- 再度**Add graph**をクリックします。

- 任意の名前を入力し、**Chart type**を**Line**に選択します。また、**Multiple Y axis mode**を有効にします。ここでは「温度」と「湿度」を使用します。そして、**プラスマーク**をクリックしてデータソースを追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline.PNG" /></center>

- **ソースを追加**し、**プロパティタグ**を設定して、適切な名前と単位を入力し、**Add**ボタンをクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline2.PNG" /></center>

- 2つ目のメトリックを追加する：同じ折れ線グラフに別のメトリックを追加するために**プラスアイコン**をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline3.PNG" /></center>

- 再度**ソースを追加**し、**プロパティタグ**を設定して、適切な名前と単位を入力します。また、**Y Axis on Right**を選択します。そして**Add**をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline4.PNG" /></center>

- 最後に**Add**をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline5.PNG" /></center>

これで完了です！積み上げ折れ線グラフを作成することができます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline6.PNG" /></center>

結論として、Machinechat JEDIとreTerminal DMは、産業運用とスマートインフラ管理の分野を変革するソリューションとして位置付けられています。IIoT機能をシームレスに統合することで、接続されたデバイスからリアルタイムデータを活用し、製造プロセス、サプライチェーンロジスティクス、運用効率に関する比類のない洞察を提供します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/screenshot2.PNG" /></center>

## リソース

- **[ウェブページ]** [Machinechat 公式ドキュメント](https://docs.machinechat.io/)


# 技術サポート

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なるご要望やお好みに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>