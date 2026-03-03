---
description: WatcherとNode-REDからkafkaにメッセージを送信
title: Watcher & Node-RED to kafka
keywords:
- watcher
- kafka
image: https://files.seeedstudio.com/wiki/watcher_to_kafka_image/head_image.png
slug: /ja/watcher_node_red_to_kafka
last_update:
  date: 07/24/2024
  author: Allen
---

# Watcher & Node-RED To Kafka クイックスタート

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/head_image.png" style={{width:1000, height:'auto'}}/></div>

## パート1. [Kafka](https://kafka.apache.org/)とは

Apache Kafkaは、高スループットで耐障害性のあるデータ処理のために設計された分散イベントストリーミングプラットフォームです。プロデューサーがトピックにメッセージを公開し、コンシューマーがこれらのトピックを購読してデータを処理することで、リアルタイムデータフィードを可能にします。Kafkaは、データパイプラインの構築、リアルタイム分析、および様々なデータソースの統合に広く使用されています。その堅牢なアーキテクチャはスケーラビリティと耐久性を保証し、現代のデータ駆動型アプリケーションにとって人気の選択肢となっています。

## パート2. DockerでKafkaクラスターを構築

なぜDockerを使用するのか？Dockerは単一のマシン上で複数のコンピューターの環境をシミュレートし、アプリケーションを非常に簡単にデプロイできるからです。そのため、このプロジェクトではDockerを使用して環境をセットアップし、効率を向上させます。

### ステップ1. Dockerをダウンロード

お使いのコンピューターに応じて異なるタイプのインストーラーをダウンロードしてください。[こちら](https://www.docker.com/products/docker-desktop/)をクリックしてジャンプしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/1.png" style={{width:1000, height:'auto'}}/></div>

:::tip
お使いのコンピューターが**Windows**の場合、**ステップ2**を完了するまでdockerをインストールしないでください。
:::

### ステップ2. WSL(Windows Subsystem for Linux)をインストール

:::tip
このステップは**Windows**用です。お使いのコンピューターがMacまたはLinuxの場合、このステップをスキップできます。
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

5. **WSL**を使用するために以下の指示を実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/6.png" style={{width:1000, height:'auto'}}/></div>

6. WSLをインストールした後、dockerインストーラーをダブルクリックしてインストールできます。以下の画像が表示されれば動作しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/2.png" style={{width:1000, height:'auto'}}/></div>

### ステップ3. Kafkaイメージをビルドして実行

1. **docker-compose.yml**ファイルを作成する場所を見つけて、以下のコードをコピーします。

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

2. コンテナでKafkaを実行し、その中に入る
```
docker-compose up -d

docker exec -it kafka /bin/bash
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/1.png" style={{width:1000, height:'auto'}}/></div>

3. 新しいトピックを作成し、何かを生成して何かを消費します。Kafkaが正常に動作するかテストします。
```
kafka-topics.sh --create --topic watcher --zookeeper zookeeper:2181 --replication-factor 1 --partitions 1

kafka-console-producer.sh --topic=watcher --broker-list kafka:9092

kafka-console-consumer.sh --bootstrap-server kafka:9092 --from-beginning --topic watcher
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/2.png" style={{width:1000, height:'auto'}}/></div>

## Part 3. Node-REDでKafkaメッセージモジュールを実行する

### ステップ 4. Kafkaメッセージモジュールをインストールする

1. **Manage palette**をクリックします。Node_REDをまだインストールしていない場合は、[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/watcher_to_node_red/)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/3.png" style={{width:600, height:'auto'}}/></div>

2. **kafka-manager**を検索してインストールします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/4.png" style={{width:600, height:'auto'}}/></div>

### ステップ 5. Kafkaメッセージモジュールを設定する

1. これらのモジュール（**inject, kafka producer, kafka consumer, debug**）をワークスペースにドラッグします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/5.png" style={{width:800, height:'auto'}}/></div>

2. **Kafka Producer**をダブルクリックして設定します。ステップ 3を実行する際は、**新しいブローカーを追加**する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/6.png" style={{width:800, height:'auto'}}/></div>

3. **Kafka Consumer**をダブルクリックして以下のように設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/7.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/12.png" style={{width:600, height:'auto'}}/></div>

4. 設定が完了したら、**Deploy**ボタンをクリックしてデプロイします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/8.png" style={{width:1000, height:'auto'}}/></div>

:::tip
変更を行った場合は、**Deploy**ボタンをクリックする必要があります。
:::

5. **四角いボタン**をクリックしてタイムスタンプを送信し、全体のプロセスが動作するかテストします。正常に動作している場合、**kafka consumer**側でタイムスタンプを受信できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/9.png" style={{width:1000, height:'auto'}}/></div>

## Part 4. WatcherでタスクEを実行する

1. まず最初に、以下の動画に従ってWatcherでタスクを実行する必要があります。詳細については[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

2. watcherでタスクの実行が完了したら、[このリンクを参照](https://wiki.seeedstudio.com/ja/watcher_to_node_red/)してwatcherメッセージをNode-REDに送信してください。

## Part 5. Kafkaでデータを受信する

1. **timestamp**モジュールを**OpenStream**と**function**モジュールに置き換え、ダブルクリックして設定します。Deployすることを忘れないでください。

```javascript
node.send({ payload: msg.payload.value[0].content });

node.send({ payload: msg.payload.value[0].image_url });
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/10.png" style={{width:1000, height:'auto'}}/></div>

2. Watcherで**人物検出**モデルを実行します。そのため、Watcherが人物を検出するとKafkaにメッセージを送信し、リンクを開くと写真を見ることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/11.png" style={{width:1000, height:'auto'}}/></div>

WatcherからKafkaへのアプリケーションの完成おめでとうございます！Kafkaには探索を待つ有用な機能が豊富にあります。素晴らしい作業を続けて、これから待っているエキサイティングな可能性に飛び込んでください！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>