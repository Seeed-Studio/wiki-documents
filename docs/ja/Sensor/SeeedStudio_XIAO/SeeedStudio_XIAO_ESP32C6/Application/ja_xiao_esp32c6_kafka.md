---
description: XIAO ESP32C6とセンサーを使用してデータを収集し、Apache Kafkaに送信する
title: Apache Kafkaを活用したリアルタイムIoTデータ処理ノード
keywords:
- xiao esp32c6
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32c6_kafka
last_update:
  date: 05/21/2024
  author: Allen
---

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/kafka_xiao.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

私たちの最先端処理ノードKafka-ESP32は、Apache KafkaとESP32C6マイクロコントローラーの力を組み合わせて、IoTデータストリームを処理するための効率的なソリューションを提供します。XIAO ESP32C6とDHT20環境センサーを使用することで、データが収集され、ESP32C6を介してApache Kafkaにシームレスに送信されます。Kafkaの高スループット、低レイテンシメッセージング機能により、リアルタイムデータ処理と分析が可能になり、その分散アーキテクチャにより簡単にスケーラビリティを実現できます。Kafka-ESP32は、カスタムアプリケーションと統合の開発を可能にし、今日のデータ駆動型環境でIoTアセットを管理・活用する方法を革新します。

## 必要な材料

この例では、XIAO ESP32C6とGrove DHT20温湿度センサーを使用して、AWS IoT CoreのSageMakerタスクを完了する方法を紹介します。以下は、このルーチンを完了するために必要なすべてのハードウェアデバイスです。

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>

</div>

## Docker インストール

なぜ Docker を使用するのでしょうか？Docker は単一のマシン上で複数のコンピューターの環境をシミュレートし、アプリケーションを非常に簡単にデプロイできるからです。そのため、このプロジェクトでは Docker を使用して環境をセットアップし、効率を向上させます。

### ステップ 1. Docker をダウンロード

お使いのコンピューターに応じて、異なるタイプのインストーラーをダウンロードしてください。[こちら](https://www.docker.com/products/docker-desktop/)をクリックしてジャンプしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/1.png" style={{width:1000, height:'auto'}}/></div>

:::tip
お使いのコンピューターが **Windows** の場合、**ステップ 2** を完了するまで docker をインストールしないでください。
:::

### ステップ 2. WSL(Windows Subsystem for Linux) をインストール

:::tip
このステップは **Windows** 用です。お使いのコンピューターが Mac または Linux の場合、このステップをスキップできます。
:::

1. 管理者として以下のコードを実行してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/3.png" style={{width:1000, height:'auto'}}/></div>

```bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

2. [こちら](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)からこのツールをダウンロードし、ダブルクリックしてインストールします。

3. **Microsoft Store**に移動して、お好みのLinuxバージョンを検索してダウンロードします。ここではUbuntuをインストールしました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/4.png" style={{width:1000, height:'auto'}}/></div>

4. Linuxをインストールした後、それを開いてユーザー名とパスワードを設定し、初期化のために1分ほど待つ必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/5.png" style={{width:1000, height:'auto'}}/></div>

5. 以下の指示に従って**WSL**を使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/6.png" style={{width:1000, height:'auto'}}/></div>

6. WSLをインストールした後、dockerインストーラーをダブルクリックしてインストールできます。以下の画像が表示されれば動作しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/2.png" style={{width:1000, height:'auto'}}/></div>


## サービスのデプロイ

開始する前に、このプロジェクトの各サービスの機能を紹介したいと思います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/structure.png" style={{width:700, height:'auto'}}/></div>

こちらは参考用のプロジェクトディレクトリ構造です。以下の手順でこれらのファイルを一つずつ作成します。各ファイルの位置は非常に重要です。このディレクトリ構造を参照することを強くお勧めします。**kafka_xiao_project**ディレクトリを作成し、これらのファイルを含めてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/30.png" style={{width:1000, height:'auto'}}/></div>

### ステップ3. Pythonサーバーのデプロイ

MCUデバイスの性能不足により、kafkaのクライアントとして直接使用することはできません。そのため、データ転送を行うサーバーを構築する必要があります。このステップでは、Pythonでシンプルなサーバーを構築します。XIAO ESP32C6は主にDHT20から環境データを収集し、サーバーに送信します。

1. まず、サーバーが行う処理である**app.py**ファイルを作成する必要があります。

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

2. **requirements.txt** を作成します。これは依存関係ライブラリです。

```
flask
kafka-python
```

3. **Dockerfile**を作成する

```
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "app.py"]
```

4. これら3つのファイルを作成した後、以下のコードを実行してDockerイメージをビルドできます。

```
docker build -t pyserver .
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/9.png" style={{width:1000, height:'auto'}}/></div>

### ステップ4. Jupyter Notebookのデプロイ

Jupyter Notebookは主にデバッグに使用され、非常に優れたツールです。また、PythonでKafkaを操作することもできます。

1. まず**Dockerfile**を作成します。

```
FROM python:3.9

RUN pip install jupyter

WORKDIR /notebook

EXPOSE 8888

CMD ["jupyter", "notebook", "--ip=0.0.0.0", "--port=8888", "--no-browser", "--allow-root"]
```

2. jupyter dockerイメージをビルドします。
```
docker build -t jupyter .
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/8.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 5. Docker クラスターの起動

**docker-compose.yml** を使用して docker クラスターを構築できます。docker-compose の各サービスは独立したコンピューターを表し、*kafka-net* を使用してそれらを相互に接続します。

1. まず **docker-compose.yml** を作成する必要があります。

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

2. 次に、以下のコマンドを実行してこのdockerクラスターを起動します。 

```
docker-compose up -d
```

:::tip
ポートが占有されている可能性があります。ポートを5001から5002などに変更するか、ポートを占有しているアプリケーションを閉じることができます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/10.png" style={{width:1000, height:'auto'}}/></div>

3. 次のいくつかの操作で、正常に動作するかどうかをテストします。まず、ソフトウェア **docker desktop** を開き、**pyserver** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/11.png" style={{width:1000, height:'auto'}}/></div>

4. これで、サーバーが `http://127.0.0.1:5001` で実行されています。このリンクをクリックして開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/12.png" style={{width:800, height:'auto'}}/></div>

5. そして、dockerクラスターが正常に動作しているかをテストするために、このような形式で2つのパラメータを入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/13.png" style={{width:700, height:'auto'}}/></div>

6. データがKafkaに送信されたかどうかを確認するために、Kafkaの内部を見てみます。
```
docker exec -it kafka bash

cd opt/bitnami/kafka/bin/

kafka-console-consumer.sh --bootstrap-server localhost:9093 --topic my_topic --from-beginning
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/14.png" style={{width:1000, height:'auto'}}/></div>

7. 異なるパラメータで再度試すことができ、データが即座にKafkaに送信されることが確認できます。これで、おめでとうございます！Dockerクラスターが完璧に動作しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/15.png" style={{width:1000, height:'auto'}}/></div>

### ステップ7. PythonでKafkaをテストする

:::tip
このステップは主にPythonを使用してKafkaを操作する方法についてです。このステップをスキップすることもできます。プロジェクト全体の動作には影響ありません。
:::

1. Docker Desktopを開き、jupyterをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/16.png" style={{width:1000, height:'auto'}}/></div>

2. このリンクをクリックしてjupyterにアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/17.png" style={{width:1000, height:'auto'}}/></div>

3. jupyterに正常にアクセスすると、このページが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/18.png" style={{width:1000, height:'auto'}}/></div>

4. 右クリックして**New Notebook**を作成し、Python3(ipykernel)を使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/19.png" style={{width:800, height:'auto'}}/></div>

5. ```pip install kafka-python```を実行してkafka-pythonライブラリをインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/21.png" style={{width:1000, height:'auto'}}/></div>

6. そのライブラリをインストールした後、jupyterを再起動する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/22.png" style={{width:1000, height:'auto'}}/></div>

7. 次に、以下のコードを実行してPythonでKafkaにデータを送信します。

```python
from kafka import KafkaProducer, KafkaConsumer

#initialize producer
producer = KafkaProducer(bootstrap_servers='localhost:9093')
#send message
producer.send('my_topic', b'Hello, Kafka2')
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/23.png" style={{width:1000, height:'auto'}}/></div>

8. また、これらのデータをkafkaで確認することもできます。

```python
from kafka import KafkaConsumer

# initialize consumer
consumer = KafkaConsumer(
    'my_topic',
    bootstrap_servers='localhost:9093',
    auto_offset_reset='earliest',
    enable_auto_commit=True,
    group_id='group1'
)

# receive data and print
for message in consumer:
    print(f"Received message: {message.value.decode('utf-8')}")
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/25.png" style={{width:1000, height:'auto'}}/></div>

## XIAO ESP32C6 と Apache Kafka

[Kafka](https://kafka.apache.org/) は、大規模なデータストリームのリアルタイム処理を可能にする分散ストリーミングプラットフォームです。システム間でのデータのパブリッシュ・サブスクライブメッセージングを可能にし、フォルトトレラント性、永続性、高スループットを提供します。Kafka は、様々な分野でリアルタイムデータパイプラインとストリーミングアプリケーションの構築に広く使用されています。

今回は、XIAO ESP32C6 と DHT20 温湿度センサーを使用してデータを収集し、リアルタイムで Kafka に送信します。

### ステップ 8. データを収集して Apache Kafka に送信する

1. 以下のコードを Arduino IDE にコピーしてください。
```cpp
#include <WiFi.h>
#include <HTTPClient.h>

//Change to your wifi name and password here.
const char* ssid = "Maker_2.4G";
const char* password = "15935700";

//Change to your computer IP address and server port here.
const char* serverUrl = "http://192.168.1.175:5001";

void setup() {
  Serial.begin(115200);
  
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  
  Serial.println("Connected to WiFi");
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    
    //Create access link
    String url = serverUrl;
    url += "/";
    url += "30.532";  // tempertature
    url += "/";
    url += "60.342";  // humidity
    
    http.begin(url);
    
    int httpResponseCode = http.GET();
    
    //Get http response and print
    if (httpResponseCode == 200) {
      String response = http.getString();
      Serial.println("Server response:");
      Serial.println(response);
    } else {
      Serial.print("HTTP error code: ");
      Serial.println(httpResponseCode);
    }
    
    http.end();
  } else {
    Serial.println("WiFi disconnected");
  }
  
  delay(5000);  // access server in every 5s.
}
```

コンピュータのIPアドレスがわからない場合は、```ipconfig```（Windows）または```ifconfig | grep net```（MacまたはLinux）を実行して確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/26.png" style={{width:600, height:'auto'}}/></div>

2. Type-Cケーブルを使用してコンピュータをC6に接続し、Groveケーブルを使用してXIAO拡張ボードの**I2Cポート**をDHT20センサーに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/hardware.jpeg" style={{width:600, height:'auto'}}/></div>

3. 開発ボードを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/27.png" style={{width:1000, height:'auto'}}/></div>

4. コードをアップロードし、シリアルモニターを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/28.png" style={{width:1000, height:'auto'}}/></div>

5. kafkaが実行されているWindows PowerShellを開きます。環境データがKafkaに送信されているのが確認できます。おめでとうございます！このプロジェクトを正常に実行できました！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/29.png" style={{width:1000, height:'auto'}}/></div>

## リソース

- **[Link]** [Apache Kafka Introduction](https://kafka.apache.org/)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>