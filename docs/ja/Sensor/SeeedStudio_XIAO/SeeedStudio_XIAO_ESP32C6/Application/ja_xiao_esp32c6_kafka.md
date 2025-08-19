---
description: XIAO ESP32C6とセンサーを使用してデータを収集し、Apache Kafkaに送信する
title: Apache KafkaによるリアルタイムIoTデータ処理ノード
keywords:
- xiao esp32c6
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32c6_kafka
last_update:
  date: 05/15/2025
  author: Allen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/kafka_xiao.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

最先端の処理ノードであるKafka-ESP32は、Apache KafkaとESP32C6マイクロコントローラーのパワーを組み合わせ、IoTデータストリームを効率的に処理するソリューションを提供します。XIAO ESP32C6とDHT20環境センサーを使用することで、データを収集し、ESP32C6を介してシームレスにApache Kafkaに送信します。Kafkaの高スループット、低レイテンシのメッセージング機能により、リアルタイムのデータ処理と分析が可能になり、その分散アーキテクチャによりスケーラビリティも容易です。Kafka-ESP32は、カスタムアプリケーションや統合の開発を可能にし、データ駆動型の現代におけるIoT資産の管理と活用方法を革新します。

## 必要な材料

この例では、XIAO ESP32C6とGrove DHT20温湿度センサーを使用して、AWS IoT CoreのSageMakerタスクを完了する方法を紹介します。このルーチンを完了するために必要なすべてのハードウェアデバイスは以下の通りです。

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32C6</th>
			<th>DHT20</th>
			<th>拡張ボード</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td><td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/extensionboard.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## Docker インストール

なぜ Docker を使用するのか？Docker を使用すると、1台のマシン上で複数のコンピュータ環境をシミュレートし、アプリケーションを非常に簡単にデプロイできます。そのため、このプロジェクトでは Docker を使用して環境をセットアップし、効率を向上させます。

### ステップ 1. Docker をダウンロード

お使いのコンピュータに応じて異なる種類のインストーラーをダウンロードしてください。[こちら](https://www.docker.com/products/docker-desktop/)をクリックして移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/1.png" style={{width:1000, height:'auto'}}/></div>

:::tip
お使いのコンピュータが **Windows** の場合、**ステップ 2** を完了するまで Docker をインストールしないでください。
:::

### ステップ 2. WSL（Windows Subsystem for Linux）のインストール

:::tip
このステップは **Windows** 用です。お使いのコンピュータが Mac または Linux の場合、このステップをスキップできます。
:::

1. 管理者として以下のコードを実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/3.png" style={{width:1000, height:'auto'}}/></div>

```bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

2. [こちら](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)からツールをダウンロードし、ダブルクリックしてインストールします。

3. **Microsoft Store** に移動して、好きな Linux バージョンを検索してダウンロードします。ここでは Ubuntu をインストールしました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/4.png" style={{width:1000, height:'auto'}}/></div>

4. Linux をインストールした後、開いてユーザー名とパスワードを設定し、初期化が完了するまで数分待つ必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/5.png" style={{width:1000, height:'auto'}}/></div>

5. 以下の指示を実行して **WSL** を使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/6.png" style={{width:1000, height:'auto'}}/></div>

6. WSL をインストールした後、Docker インストーラーをダブルクリックしてインストールできます。以下の画像が表示されたら、正常に動作しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/2.png" style={{width:1000, height:'auto'}}/></div>

## サービスのデプロイ

開始する前に、このプロジェクトで使用する各サービスの機能を紹介します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/structure.png" style={{width:700, height:'auto'}}/></div>

以下は、このプロジェクトのディレクトリ構造の参考例です。次のステップでこれらのファイルを1つずつ作成します。各ファイルの位置は非常に重要です。このディレクトリ構造を参考にすることを強くお勧めします。**kafka_xiao_project** ディレクトリを作成し、これらのファイルを含めます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/30.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 3. Python サーバーのデプロイ

MCU デバイスの性能不足により、Kafka のクライアントとして直接使用することはできません。そのため、データ転送を行うサーバーを構築する必要があります。このステップでは、Python を使用して簡単なサーバーを構築します。XIAO ESP32C6 は主に DHT20 から環境データを収集し、それをサーバーに送信します。

1. まず **app.py** ファイルを作成します。これはサーバーの動作を定義します。

```python
from flask import Flask
from kafka import KafkaProducer, KafkaConsumer

app = Flask(__name__)

@app.route('/favicon.ico')
def favicon():
    return '', 204

@app.route('/<temperature>/<humidity>')
def send_data(temperature, humidity):
    producer = KafkaProducer(bootstrap_servers='kafka:9092')
    data = f'Temperature: {temperature}, Humidity: {humidity}'
    producer.send('my_topic', data.encode('utf-8'))
    return f'Temperature: {temperature}, Humidity: {humidity}'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
```

2. **requirements.txt** を作成します。これは依存ライブラリを定義します。

```
flask
kafka-python
```

3. **Dockerfile** を作成します。

```
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "app.py"]
```

4. 上記の3つのファイルを作成した後、以下のコードを実行して Docker イメージをビルドします。

```
docker build -t pyserver .
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/9.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 4. Jupyter Notebook のデプロイ

Jupyter Notebook は主にデバッグに使用される非常に便利なツールです。また、Python を使用して Kafka を操作することもできます。

1. まず **Dockerfile** を作成します。

```
FROM python:3.9

RUN pip install jupyter

WORKDIR /notebook

EXPOSE 8888

CMD ["jupyter", "notebook", "--ip=0.0.0.0", "--port=8888", "--no-browser", "--allow-root"]
```

2. Jupyter の Docker イメージをビルドします。

```
docker build -t jupyter .
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/8.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 5. Docker クラスターの起動

**docker-compose.yml** を使用して Docker クラスターを構築できます。docker-compose 内の各サービスは独立したコンピュータを表し、*kafka-net* を使用してそれらを相互接続します。

1. まず **docker-compose.yml** を作成します。

```
services:
  zookeeper:
    container_name: zookeeper
    hostname: zookeeper
    image: docker.io/bitnami/zookeeper
    ports:
      - "2181:2181"
    environment:
      - ALLOW_ANONYMOUS_LOGIN=yes
    networks:
      - kafka-net

  kafka:
    container_name: kafka
    hostname: kafka
    image: docker.io/bitnami/kafka
    ports:
      - "9092:9092"
      - "9093:9093"
    environment:
      - KAFKA_CFG_ZOOKEEPER_CONNECT=zookeeper:2181
      - KAFKA_CFG_BROKER_ID=0
      - ALLOW_PLAINTEXT_LISTENER=yes
      - KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP=INTERNAL:PLAINTEXT,EXTERNAL:PLAINTEXT
      - KAFKA_CFG_LISTENERS=INTERNAL://kafka:9092,EXTERNAL://localhost:9093
      - KAFKA_CFG_ADVERTISED_LISTENERS=INTERNAL://kafka:9092,EXTERNAL://localhost:9093
      - KAFKA_CFG_INTER_BROKER_LISTENER_NAME=INTERNAL
    depends_on:
      - zookeeper
    networks:
      - kafka-net
      
  jupyter:
    image: jupyter:latest
    depends_on:
      - kafka
    volumes:
      - ./myjupyter:/notebook
    ports:
      - "8888:8888"
    environment:
      - JUPYTER_ENABLE_LAB=yes
    networks:
      - kafka-net
      
  pyserver:
    image: pyserver:latest
    depends_on:
      - kafka
    volumes:
      - ./myserver/app.py:/app/app.py
    ports:
      - "5001:5001"
    networks:
      - kafka-net

networks:
  kafka-net:
    driver: bridge
```

2. 次に、以下のコマンドを実行してこの Docker クラスターを起動します。

```
docker-compose up -d
```

:::tip
ポートが使用中の場合があります。その場合はポートを5001から5002などに変更するか、ポートを占有しているアプリケーションを終了してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/10.png" style={{width:1000, height:'auto'}}/></div>

3. 次のいくつかの操作では、正常に動作しているかどうかをテストします。まず、**Docker Desktop**ソフトウェアを開き、**pyserver**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/11.png" style={{width:1000, height:'auto'}}/></div>

4. 現在、サーバーは http://127.0.0.1:5001 で動作しています。このリンクをクリックして開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/12.png" style={{width:800, height:'auto'}}/></div>

5. 次に、以下の形式で2つのパラメータを入力して、Dockerクラスターが正常に動作しているかどうかをテストします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/13.png" style={{width:700, height:'auto'}}/></div>

6. Kafka内に入り、データがKafkaに送信されたかどうかを確認します。
```
docker exec -it kafka bash

cd opt/bitnami/kafka/bin/

kafka-console-consumer.sh --bootstrap-server localhost:9093 --topic my_topic --from-beginning
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/14.png" style={{width:1000, height:'auto'}}/></div>

7. 別のパラメータで再度試してみると、データが即座にKafkaに送信されたことが確認できます。おめでとうございます！Dockerクラスターが完璧に動作しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/15.png" style={{width:1000, height:'auto'}}/></div>

### ステップ7. PythonでKafkaをテストする

:::tip
このステップは主にPythonを使用してKafkaを操作する方法についてです。このステップをスキップしても、プロジェクト全体の操作には影響しません。
:::

1. Docker Desktopを開き、**jupyter**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/16.png" style={{width:1000, height:'auto'}}/></div>

2. このリンクをクリックしてjupyterにアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/17.png" style={{width:1000, height:'auto'}}/></div>

3. jupyterに正常にアクセスすると、以下のページが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/18.png" style={{width:1000, height:'auto'}}/></div>

4. 右クリックして**New Notebook**を作成し、Python3(ipykernel)を使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/19.png" style={{width:800, height:'auto'}}/></div>

5. ```pip install kafka-python```を実行してkafka-pythonライブラリをインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/21.png" style={{width:1000, height:'auto'}}/></div>

6. ライブラリをインストールした後、jupyterを再起動する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/22.png" style={{width:1000, height:'auto'}}/></div>

7. 次に、以下のコードを実行してPythonを使用してKafkaにデータを送信します。

```python
from kafka import KafkaProducer, KafkaConsumer

# プロデューサーを初期化
producer = KafkaProducer(bootstrap_servers='localhost:9093')
# メッセージを送信
producer.send('my_topic', b'Hello, Kafka2')
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/23.png" style={{width:1000, height:'auto'}}/></div>

8. また、Kafka内でこれらのデータを確認することもできます。

```python
from kafka import KafkaConsumer

# コンシューマーを初期化
consumer = KafkaConsumer(
    'my_topic',
    bootstrap_servers='localhost:9093',
    auto_offset_reset='earliest',
    enable_auto_commit=True,
    group_id='group1'
)

# データを受信して表示
for message in consumer:
    print(f"Received message: {message.value.decode('utf-8')}")
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/25.png" style={{width:1000, height:'auto'}}/></div>

## XIAO ESP32C6 と Apache Kafka

[Kafka](https://kafka.apache.org/) は、スケールに応じたデータストリームのリアルタイム処理を可能にする分散型ストリーミングプラットフォームです。システム間でのデータのパブリッシュ-サブスクライブ型メッセージングを可能にし、フォールトトレランス、永続性、高スループットを提供します。Kafka は、さまざまな分野でリアルタイムデータパイプラインやストリーミングアプリケーションを構築するために広く使用されています。

ここでは、XIAO ESP32C6 と DHT20 温湿度センサーを使用してデータを収集し、リアルタイムで Kafka に送信します。

### ステップ 8. データを収集して Apache Kafka に送信する

1. 以下のコードを Arduino IDE にコピーしてください。
```cpp
#include <WiFi.h>
#include <HTTPClient.h>

// WiFi の名前とパスワードをここに変更してください。
const char* ssid = "Maker_2.4G";
const char* password = "15935700";

// コンピュータの IP アドレスとサーバーポートをここに変更してください。
const char* serverUrl = "http://192.168.1.175:5001";

void setup() {
  Serial.begin(115200);
  
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("WiFi に接続中...");
  }
  
  Serial.println("WiFi に接続しました");
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    
    // アクセスリンクを作成
    String url = serverUrl;
    url += "/";
    url += "30.532";  // 温度
    url += "/";
    url += "60.342";  // 湿度
    
    http.begin(url);
    
    int httpResponseCode = http.GET();
    
    // HTTP レスポンスを取得して出力
    if (httpResponseCode == 200) {
      String response = http.getString();
      Serial.println("サーバーの応答:");
      Serial.println(response);
    } else {
      Serial.print("HTTP エラーコード: ");
      Serial.println(httpResponseCode);
    }
    
    http.end();
  } else {
    Serial.println("WiFi が切断されました");
  }
  
  delay(5000);  // 5 秒ごとにサーバーにアクセス
}
```

コンピュータの IP アドレスがわからない場合は、```ipconfig```（Windows）または ```ifconfig | grep net```（Mac または Linux）を実行して確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/26.png" style={{width:600, height:'auto'}}/></div>

2. Type-C ケーブルを使用してコンピュータと C6 を接続し、Grove ケーブルを使用して XIAO 拡張ボードの **I2C ポート** と DHT20 センサーを接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/hardware.jpeg" style={{width:600, height:'auto'}}/></div>

3. 開発ボードを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/27.png" style={{width:1000, height:'auto'}}/></div>

4. コードをアップロードし、シリアルモニターを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/28.png" style={{width:1000, height:'auto'}}/></div>

5. Kafka を実行している Windows PowerShell を開きます。これで環境データが Kafka に送信されているのが確認できます。おめでとうございます！このプロジェクトを正常に実行できました！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/29.png" style={{width:1000, height:'auto'}}/></div>

## リソース

- **[リンク]** [Apache Kafka 入門](https://kafka.apache.org/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>