---
description: Watcher & Node-RED から Kafka へのメッセージ送信
title: Watcher & Node-RED から Kafka へ
keywords:
- watcher
- kafka
image: https://files.seeedstudio.com/wiki/watcher_to_kafka_image/head_image.png
slug: /ja/watcher_node_red_to_kafka
last_update:
  date: 05/15/2025
  author: Allen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Watcher & Node-RED から Kafka へのクイックスタート

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/head_image.png" style={{width:1000, height:'auto'}}/></div>

## Part 1. [Kafka](https://kafka.apache.org) とは

Apache Kafka は、高スループットでフォールトトレラントなデータ処理を目的とした分散型イベントストリーミングプラットフォームです。プロデューサーがトピックにメッセージを公開し、コンシューマーがこれらのトピックを購読してデータを処理することで、リアルタイムのデータフィードを可能にします。Kafka はデータパイプラインの構築、リアルタイム分析、さまざまなデータソースの統合に広く使用されています。その堅牢なアーキテクチャにより、スケーラビリティと耐久性が確保され、現代のデータ駆動型アプリケーションにおいて人気の選択肢となっています。

## Part 2. Docker で Kafka クラスターを構築する

なぜ Docker を使用するのか？Docker を使用すると、1台のマシン上で複数のコンピュータ環境をシミュレートし、アプリケーションを非常に簡単にデプロイできます。そのため、このプロジェクトでは Docker を使用して環境をセットアップし、効率を向上させます。

### Step 1. Docker をダウンロードする

お使いのコンピュータに応じて異なる種類のインストーラーをダウンロードしてください。[こちら](https://www.docker.com/products/docker-desktop/)をクリックして移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/1.png" style={{width:1000, height:'auto'}}/></div>

:::tip
コンピュータが **Windows** の場合、**Step 2** を完了するまで Docker をインストールしないでください。
:::

### Step 2. WSL（Windows Subsystem for Linux）をインストールする

:::tip
このステップは **Windows** 用です。コンピュータが Mac または Linux の場合、このステップをスキップできます。
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

4. Linux をインストールした後、開いてユーザー名とパスワードを設定し、初期化が完了するまで数分待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/5.png" style={{width:1000, height:'auto'}}/></div>

5. 以下の指示を実行して **WSL** を使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/6.png" style={{width:1000, height:'auto'}}/></div>

6. WSL をインストールした後、Docker インストーラーをダブルクリックしてインストールします。以下の画像が表示されたら、正常に動作しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/2.png" style={{width:1000, height:'auto'}}/></div>

### Step 3. Kafka イメージを構築して実行する

1. **docker-compose.yml** ファイルを作成し、以下のコードをコピーして貼り付けます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/15.png" style={{width:1000, height:'auto'}}/></div>

```yml
services:
  zookeeper:
    image: wurstmeister/zookeeper   ## イメージ
    container_name: zookeeper
    ports:
      - "2181:2181"                 ## 外部に公開されるポート番号
  kafka:
    image: wurstmeister/kafka       ## イメージ
    container_name: kafka
    volumes: 
        - ./volume:/volume ## マウント場所
    ports:
      - "9092:9092"
    environment:
      KAFKA_ADVERTISED_HOST_NAME: 127.0.0.1         ## ホストマシンの IP
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181       ## Kafka は zookeeper を基盤として動作
      KAFKA_ADVERTISED_PORT: 9092
      KAFKA_LOG_RETENTION_HOURS: 120
      KAFKA_MESSAGE_MAX_BYTES: 10000000
      KAFKA_REPLICA_FETCH_MAX_BYTES: 10000000
      KAFKA_GROUP_MAX_SESSION_TIMEOUT_MS: 60000
      KAFKA_NUM_PARTITIONS: 3
      KAFKA_DELETE_RETENTION_MS: 1000
  kafka-manager:
    image: sheepkiller/kafka-manager                ## イメージ: Kafka クラスターのオープンソース Web 管理インターフェース
    container_name: kafka-manager
    environment:
        ZK_HOSTS: 127.0.0.1                         ## ホストマシンの IP
    ports:  
      - "9009:9000"                                 ## 公開ポート
```

2. コンテナ内で Kafka を実行し、アクセスします。
```
docker-compose up -d

docker exec -it kafka /bin/bash
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/1.png" style={{width:1000, height:'auto'}}/></div>

3. 新しいトピックを作成し、データを生成および消費して Kafka が正常に動作するかテストします。
```
kafka-topics.sh --create --topic watcher --zookeeper zookeeper:2181 --replication-factor 1 --partitions 1

kafka-console-producer.sh --topic=watcher --broker-list kafka:9092

kafka-console-consumer.sh --bootstrap-server kafka:9092 --from-beginning --topic watcher
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/2.png" style={{width:1000, height:'auto'}}/></div>

## Part 3. Node-REDでKafkaメッセージモジュールを実行する

### ステップ 4. Kafkaメッセージモジュールをインストールする

1. **Manage palette**（パレットの管理）をクリックします。まだNode-REDをインストールしていない場合は、[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/watcher_to_node_red/)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/3.png" style={{width:600, height:'auto'}}/></div>

2. **kafka-manager**を検索してインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/4.png" style={{width:600, height:'auto'}}/></div>

### ステップ 5. Kafkaメッセージモジュールを設定する

1. ワークスペースに以下のモジュール（**inject, kafka producer, kafka consumer, debug**）をドラッグします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/5.png" style={{width:800, height:'auto'}}/></div>

2. **Kafka Producer**をダブルクリックして設定します。ステップ3を実行する際に、**新しいブローカーを追加**する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/6.png" style={{width:800, height:'auto'}}/></div>

3. **Kafka Consumer**をダブルクリックして、以下のように設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/7.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/12.png" style={{width:600, height:'auto'}}/></div>

4. 設定が完了したら、**Deploy**ボタンをクリックしてデプロイします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/8.png" style={{width:1000, height:'auto'}}/></div>

:::tip
変更を加えた場合は、必ず**Deploy**ボタンをクリックしてください。
:::

5. **四角いボタン**をクリックしてタイムスタンプを送信し、全体のプロセスが正常に動作するかテストします。正常に動作している場合、**kafka consumer**側でタイムスタンプを受信するはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/9.png" style={{width:1000, height:'auto'}}/></div>

## Part 4. Watcherでタスクを実行する

1. まず最初に、以下のビデオに従ってWatcherでタスクを実行する必要があります。詳細を知りたい場合は、[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

2. Watcherでタスクを実行した後、[このリンク](https://wiki.seeedstudio.com/ja/watcher_to_node_red/)を参照して、WatcherメッセージをNode-REDに送信してください。

## Part 5. Kafkaでデータを受信する

1. **timestamp**モジュールを**OpenStream**および**function**モジュールに置き換え、それらをダブルクリックして設定します。設定後は必ずデプロイしてください。

```javascript
node.send({ payload: msg.payload.value[0].content });

node.send({ payload: msg.payload.value[0].image_url });
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/10.png" style={{width:1000, height:'auto'}}/></div>

2. 私はWatcherで**People Detection**（人物検出）モデルを実行しました。そのため、Watcherが人物を検出するとKafkaにメッセージを送信し、リンクを開くと写真が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/11.png" style={{width:1000, height:'auto'}}/></div>

WatcherからKafkaへのアプリケーションを完了したことをおめでとうございます！Kafkaには探索すべき多くの便利な機能があります。引き続き素晴らしい作業を続け、これからのエキサイティングな可能性に挑戦してください！

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験をしていただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>