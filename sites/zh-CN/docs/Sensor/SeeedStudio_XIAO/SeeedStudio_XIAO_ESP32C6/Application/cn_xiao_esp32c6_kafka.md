---
description: 使用 XIAO ESP32C6 和传感器收集数据并发送到 Apache Kafka
title: 基于 Apache Kafka 的实时物联网数据处理节点
keywords:
  - xiao esp32c6
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32c6_kafka
last_update:
  date: 05/21/2024
  author: Allen
createdAt: '2024-05-23'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/xiao_esp32c6_kafka/
---

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/kafka_xiao.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

我们的前沿处理节点 Kafka-ESP32，结合了 Apache Kafka 和 ESP32C6 微控制器的强大功能，为处理物联网数据流提供了高效的解决方案。通过使用 XIAO ESP32C6 配合 DHT20 环境传感器，数据被收集并通过 ESP32C6 无缝发送到 Apache Kafka。Kafka 的高吞吐量、低延迟消息传递能力实现了实时数据处理和分析，而其分布式架构允许轻松扩展。Kafka-ESP32 使您能够开发自定义应用程序和集成，彻底改变您在当今数据驱动环境中管理和利用物联网资产的方式。

## 所需材料

本示例将介绍如何使用 XIAO ESP32C6 配合 Grove DHT20 温湿度传感器来完成 AWS IoT Core 的 SageMaker 任务。以下是完成此例程所需的所有硬件设备。

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO ESP32C6</th>
   <th>DHT20</th>
   <th>扩展板</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td><td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/extensionboard.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>

</div>

## Docker 安装

为什么使用 Docker？因为 Docker 可以在单台机器上模拟多台计算机的环境，并且可以非常轻松地部署应用程序。因此，在这个项目中，我们将使用 Docker 来设置环境并提高效率。

### 步骤 1. 下载 Docker

根据您的计算机下载不同类型的安装程序。点击[这里](https://www.docker.com/products/docker-desktop/)跳转。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/1.png" style={{width:1000, height:'auto'}}/></div>

:::tip
如果您的计算机是 **Windows**，请在完成**步骤 2** 之前不要安装 docker。
:::

### 步骤 2. 安装 WSL(Windows Subsystem for Linux)

:::tip
此步骤适用于 **Windows**。如果您的计算机是 Mac 或 Linux，可以跳过此步骤。
:::

1. 以管理员身份运行以下代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/3.png" style={{width:1000, height:'auto'}}/></div>

```bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

2. 从[这里](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)下载此工具并双击安装。

3. 前往您的**Microsoft Store**搜索并下载您喜欢的linux版本，这里我安装了Ubuntu。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/4.png" style={{width:1000, height:'auto'}}/></div>

4. 安装Linux后，您需要打开它并设置您的用户名和密码，然后需要等待一分钟进行初始化。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/5.png" style={{width:1000, height:'auto'}}/></div>

5. 运行以下指令来使用**WSL**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/6.png" style={{width:1000, height:'auto'}}/></div>

6. 安装WSL后，现在您可以双击docker安装程序来安装它。当您看到以下图像时，说明它正在工作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/2.png" style={{width:1000, height:'auto'}}/></div>

## 部署服务

在我们开始之前，我想介绍一下这个项目中每个服务的功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/structure.png" style={{width:700, height:'auto'}}/></div>

这是此项目的目录结构供您参考。我将在以下步骤中逐一创建这些文件。每个文件的位置都非常重要。我强烈建议您参考此目录结构。创建一个**kafka_xiao_project**目录并包含这些文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/30.png" style={{width:1000, height:'auto'}}/></div>

### 步骤3. 部署Python服务器

由于MCU设备性能不足，无法直接用作kafka的客户端。因此您需要构建一个服务器来进行数据传输。此步骤是使用python构建一个简单的服务器。XIAO ESP32C6主要是从DHT20收集环境数据并将其发送到服务器。

1. 首先我们需要创建**app.py**文件，这是服务器要做的事情。

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

2. 创建 **requirements.txt**，这是依赖库文件。

```
flask
kafka-python
```

3. Create **Dockerfile**

```
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "app.py"]
```

4. 创建完这3个文件后，我们就可以通过运行以下代码来构建Docker镜像。

```
docker build -t pyserver .
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/9.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 4. 部署 Jupyter Notebook

Jupyter Notebook 主要用于调试，是一个非常好用的工具。同时我们可以使用 python 来操作 Kafka。

1. 首先创建 **Dockerfile**。

```
FROM python:3.9

RUN pip install jupyter

WORKDIR /notebook

EXPOSE 8888

CMD ["jupyter", "notebook", "--ip=0.0.0.0", "--port=8888", "--no-browser", "--allow-root"]
```

2. Build jupyter docker image.

```
docker build -t jupyter .
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/8.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 5. 启动 Docker 集群

我们可以使用 **docker-compose.yml** 来构建 docker 集群。docker-compose 中的每个服务代表一台独立的计算机，我们使用 *kafka-net* 来连接它们。

1. 首先我们需要创建 **docker-compose.yml**。

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

2. 然后我们通过运行以下命令来启动这个 docker 集群。

```
docker-compose up -d
```

:::tip
端口可能被占用，您可以将端口从 5001 更改为 5002 等，或者关闭占用该端口的应用程序。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/10.png" style={{width:1000, height:'auto'}}/></div>

3. 在接下来的几个操作中，我们将测试它是否工作正常。首先我们打开软件 **docker desktop** 并点击进入 **pyserver**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/11.png" style={{width:1000, height:'auto'}}/></div>

4. 现在服务器运行在 `http://127.0.0.1:5001`。点击此链接打开它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/12.png" style={{width:800, height:'auto'}}/></div>

5. 然后按照这种格式输入两个参数来测试 docker 集群是否工作正常。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/13.png" style={{width:700, height:'auto'}}/></div>

6. 我们进入 Kafka 内部查看数据是否已发送到 Kafka。

```
docker exec -it kafka bash

cd opt/bitnami/kafka/bin/

kafka-console-consumer.sh --bootstrap-server localhost:9093 --topic my_topic --from-beginning
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/14.png" style={{width:1000, height:'auto'}}/></div>

7. 我们可以尝试使用不同的参数再次测试，您可以看到数据立即发送到了 Kafka。现在，恭喜您！您的 docker 集群运行完美。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/15.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 7. 使用 Python 测试 Kafka

:::tip
这一步主要介绍如何使用 Python 操作 Kafka。您也可以跳过这一步。不会影响整体项目的运行。
:::

1. 打开 docker desktop 并点击进入 jupyter。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/16.png" style={{width:1000, height:'auto'}}/></div>

2. 点击此链接访问 jupyter。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/17.png" style={{width:1000, height:'auto'}}/></div>

3. 当您成功访问 jupyter 时，您将看到此页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/18.png" style={{width:1000, height:'auto'}}/></div>

4. 右键单击并创建 **New Notebook**，使用 Python3(ipykernel)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/19.png" style={{width:800, height:'auto'}}/></div>

5. 通过运行 ```pip install kafka-python``` 安装 kafka-python 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/21.png" style={{width:1000, height:'auto'}}/></div>

6. 安装该库后，我们需要重启 jupyter。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/22.png" style={{width:1000, height:'auto'}}/></div>

7. 现在运行以下代码，通过 Python 向 Kafka 发送一些数据。

```python
from kafka import KafkaProducer, KafkaConsumer

#initialize producer
producer = KafkaProducer(bootstrap_servers='localhost:9093')
#send message
producer.send('my_topic', b'Hello, Kafka2')
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/23.png" style={{width:1000, height:'auto'}}/></div>

8. 您也可以在 kafka 中检查这些数据。

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

## XIAO ESP32C6 和 Apache Kafka

[Kafka](https://kafka.apache.org/) 是一个分布式流处理平台，能够大规模地实时处理数据流。它允许系统之间进行数据的发布-订阅消息传递，提供容错性、持久性和高吞吐量。Kafka 广泛用于构建实时数据管道和跨各种领域的流应用程序。

现在，我们将使用 XIAO ESP32C6 和 DHT20 温湿度传感器来收集数据并实时发送到 Kafka。

### 步骤 8. 收集数据并发送到 Apache Kafka

1. 将以下代码复制到您的 Arduino IDE 中。

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

如果您不知道您的计算机IP地址，您可以运行```ipconfig```（Windows）或```ifconfig | grep net```（Mac或Linux）来检查。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/26.png" style={{width:600, height:'auto'}}/></div>

2. 使用Type-C线缆将您的计算机连接到C6，并使用Grove线缆将XIAO扩展板的**I2C端口**连接到DHT20传感器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/hardware.jpeg" style={{width:600, height:'auto'}}/></div>

3. 选择您的开发板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/27.png" style={{width:1000, height:'auto'}}/></div>

4. 上传代码并打开串口监视器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/28.png" style={{width:1000, height:'auto'}}/></div>

5. 打开运行kafka的Windows PowerShell。现在您将看到环境数据正在发送到Kafka。恭喜！您已成功运行此项目！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/29.png" style={{width:1000, height:'auto'}}/></div>

## 资源

- **[链接]** [Apache Kafka介绍](https://kafka.apache.org/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
