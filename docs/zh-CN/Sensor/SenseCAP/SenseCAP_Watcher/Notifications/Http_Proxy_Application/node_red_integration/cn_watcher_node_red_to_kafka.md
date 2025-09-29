---
description: 从 Watcher 和 Node-RED 发送消息到 kafka
title: Watcher 和 Node-RED 到 kafka
keywords:
- watcher
- kafka
image: https://files.seeedstudio.com/wiki/watcher_to_kafka_image/head_image.png
slug: /cn/watcher_node_red_to_kafka
last_update:
  date: 07/24/2024
  author: Allen
---

# Watcher 和 Node-RED 到 Kafka 快速入门

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/head_image.png" style={{width:1000, height:'auto'}}/></div>

## 第一部分：什么是 [Kafka](https://kafka.apache.org/)

Apache Kafka 是一个分布式事件流平台，专为高吞吐量、容错的数据处理而设计。它通过允许生产者将消息发布到主题，同时消费者可以订阅这些主题来处理数据，从而实现实时数据流。Kafka 广泛用于构建数据管道、实时分析和集成各种数据源。其强大的架构确保了可扩展性和持久性，使其成为现代数据驱动应用程序的热门选择。

## 第二部分：在 Docker 中构建 Kafka 集群

为什么使用 Docker？因为 Docker 可以在单台机器上模拟多台计算机的环境，并且可以非常轻松地部署应用程序。因此，在这个项目中，我们将使用 Docker 来设置环境并提高效率。

### 步骤 1：下载 Docker

根据您的计算机下载不同类型的安装程序。点击[这里](https://www.docker.com/products/docker-desktop/)跳转。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/1.png" style={{width:1000, height:'auto'}}/></div>

:::tip
如果您的计算机是 **Windows**，请在完成**步骤 2**之前不要安装 docker。
:::

### 步骤 2：安装 WSL（Windows 子系统 for Linux）

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

### 步骤3.构建Kafka镜像并运行

1. 找一个地方创建**docker-compose.yml**文件并将以下代码复制到其中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/15.png" style={{width:1000, height:'auto'}}/></div>


```yml
services:
  zookeeper:
    image: wurstmeister/zookeeper   ## image
    container_name: zookeeper
    ports:
      - "2181:2181"                 ## Externally exposed port number
  kafka:
    image: wurstmeister/kafka       ## image
    container_name: kafka
    volumes: 
        - ./volume:/volume ## Mounting location
    ports:
      - "9092:9092"
    environment:
      KAFKA_ADVERTISED_HOST_NAME: 127.0.0.1         ## Host machine IP
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181       ## Running Kafka is base to zookeeper
      KAFKA_ADVERTISED_PORT: 9092
      KAFKA_LOG_RETENTION_HOURS: 120
      KAFKA_MESSAGE_MAX_BYTES: 10000000
      KAFKA_REPLICA_FETCH_MAX_BYTES: 10000000
      KAFKA_GROUP_MAX_SESSION_TIMEOUT_MS: 60000
      KAFKA_NUM_PARTITIONS: 3
      KAFKA_DELETE_RETENTION_MS: 1000
  kafka-manager:
    image: sheepkiller/kafka-manager                ## image: open source web manage interface about kafka cluster
    container_name: kafka-manager
    environment:
        ZK_HOSTS: 127.0.0.1                         ## host machine IP
    ports:  
      - "9009:9000"                                 ## exposed port
```

2. 在容器中运行 Kafka 并进入容器
```
docker-compose up -d

docker exec -it kafka /bin/bash
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/1.png" style={{width:1000, height:'auto'}}/></div>

3. 创建一个新主题，生产一些内容并消费一些内容。测试 Kafka 是否正常工作。
```
kafka-topics.sh --create --topic watcher --zookeeper zookeeper:2181 --replication-factor 1 --partitions 1

kafka-console-producer.sh --topic=watcher --broker-list kafka:9092

kafka-console-consumer.sh --bootstrap-server kafka:9092 --from-beginning --topic watcher
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/2.png" style={{width:1000, height:'auto'}}/></div>

## 第3部分：在Node-RED中运行Kafka消息模块

### 步骤4. 安装Kafka消息模块

1. 点击**管理调色板**。如果您还没有安装Node_RED，[请点击这里](https://wiki.seeedstudio.com/cn/watcher_to_node_red/)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/3.png" style={{width:600, height:'auto'}}/></div>

2. 搜索**kafka-manager**并安装它

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/4.png" style={{width:600, height:'auto'}}/></div>

### 步骤5. 配置Kafka消息模块

1. 将这些模块（**inject、kafka producer、kafka consumer、debug**）拖拽到工作区

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/5.png" style={{width:800, height:'auto'}}/></div>

2. 双击**Kafka Producer**来配置它。当您执行步骤3时，您应该**添加一个新的代理**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/6.png" style={{width:800, height:'auto'}}/></div>

3. 双击**Kafka Consumer**按如下方式配置它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/7.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/12.png" style={{width:600, height:'auto'}}/></div>

4. 完成配置后，点击**部署**按钮来部署它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/8.png" style={{width:1000, height:'auto'}}/></div>

:::tip
任何更改，您都应该点击**部署**按钮。
:::

5. 点击**方形按钮**发送时间戳来测试整个过程是否正常工作。如果工作正常，您应该在**kafka consumer**端接收到时间戳。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/9.png" style={{width:1000, height:'auto'}}/></div>

## 第4部分：在Watcher中运行任务

1. 首先，您需要按照下面的视频在Watcher中运行任务。如果您想了解更多，[请点击这里](https://wiki.seeedstudio.com/cn/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

2. 当您完成在watcher中运行任务后，您应该[参考此链接](https://wiki.seeedstudio.com/cn/watcher_to_node_red/)将watcher消息发送到Node-RED。

## 第5部分：在Kafka中接收数据

1. 将**timestamp**模块替换为**OpenStream**和**function**模块，双击配置它们。记住要部署它。

```javascript
node.send({ payload: msg.payload.value[0].content });

node.send({ payload: msg.payload.value[0].image_url });
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/10.png" style={{width:1000, height:'auto'}}/></div>

2. 我在 Watcher 中运行了一个**人员检测**模型。因此，当 Watcher 检测到人员时会向 Kafka 发送消息，当您打开链接时就能看到照片。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/11.png" style={{width:1000, height:'auto'}}/></div>

恭喜您完成了 watcher 到 Kafka 的应用！Kafka 中有大量有用的功能等待您去探索。继续保持出色的工作，深入探索前方令人兴奋的可能性！

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