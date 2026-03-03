---
description: WatcherとNode-REDからMongoDBにデータを送信する
title: Watcher & Node-RED to MongoDB
keywords:
- Watcher
- MongoDB
- Node-RED
image: https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Watcher_MongoDB_Cover.jpg
slug: /ja/watcher_node_red_to_mongodb
last_update:
  date: 07/18/2024
  author: Vincent
---

# Watcher To MongoDB クイックスタート

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Watcher_MongoDB_Cover.jpg" style={{width:1000, height:'auto'}}/></div>

[**MongoDB**](https://www.mongodb.com/) は、構造化データと非構造化データの両方を扱うことに優れた、強力なクロスプラットフォームドキュメントデータベースです。JSONライクなドキュメントに基づく柔軟でスキーマレスなデータモデルにより、アドホッククエリとインデックス作成を必要とする動的アプリケーションに最適な選択肢となっています。

MongoDBを使用することで、**Watcherからのデータを保存し、さらなる処理や他のプロジェクトアプリケーションで利用する**ための簡単な方法が提供されます。

このチュートリアルでは、Watcher APIとNode-REDを使用してMongoDBにシームレスにデータを送信する方法をガイドします。これは、リアルタイムデータ処理と永続化を要求するプロジェクトに最適なセットアップです。

## パート1. Node-REDでWatcherをセットアップする

### ステップ1. Node-REDをインストールする

まず最初に、以下のビデオに従ってWatcherでタスクを実行する必要があります。詳細を知りたい場合は[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

このセットアップにはNode-REDとWatcher APIが必要です。Node-REDをインストールしていない場合、またはWatcher APIと接続していない場合は、こちらから始めてください：[**Watcher to Node-RED クイックスタート**](https://wiki.seeedstudio.com/ja/watcher_to_node_red)。

### ステップ2. MongoDBのためのデータを準備する

WatcherをNode-REDと統合した後、次のステップはWatcherからのデータをMongoDB用に準備することです。Node-REDのfunctionノードを使用して、データを適切にフォーマットします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_1.png" style={{width:1000, height:'auto'}}/></div>

このチュートリアルの目的では、単純にすべてのWatcherデータを返します。ただし、アプリケーションの必要に応じてデータを変換することをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_2.png" style={{width:1000, height:'auto'}}/></div>

#### データをフォーマットするNode-RED Functionの例

```sh
msg.payload = {
    "tlid": msg.payload.value[0].tlid,
    "tn": msg.payload.value[0].tn,
    "content": msg.payload.value[0].content,
    "image_url": msg.payload.value[0].image_url,
    "timestamp": msg.payload.timestamp,
    "orgId": msg.payload.orgId,
    "eui": msg.payload.eui,
    "channel": msg.payload.channel,
    "measurementID": msg.payload.value[0].measurementID
};
return msg;
```

## パート2. MongoDBのセットアップ

### ステップ3. アカウントの作成

次に、MongoDBアカウントを作成するか、既にアカウントをお持ちの場合はログインしてください。MongoDBが初めての場合は、[**mongodb.com**](https://www.mongodb.com)にアクセスして無料アカウントにサインアップしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_1.png" style={{width:1000, height:'auto'}}/></div>

### ステップ4. 新しいクラスターのデプロイ

ログイン後、新しいクラスターのデプロイに進みます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_4.png" style={{width:1000, height:'auto'}}/></div>

1. **クラスター構成の選択**: 開発用には、無料で小規模なテストに十分なM0構成を推奨します。ただし、プロジェクトの要件により適した構成がある場合は、別の構成を選択していただいても構いません。
2. **クラウドプロバイダーの選択**: 広範囲な可用性と信頼性のためAWSを選択しましたが、地理的または技術的要件に応じて、Google CloudやAzureなどの他のプロバイダーも同様に有効です。
3. **リージョンの選択**: レイテンシを最小化し、パフォーマンスを向上させるため、主要なユーザーベースに最も近いリージョンを選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_5.png" style={{width:1000, height:'auto'}}/></div>

### ステップ5. データベースセキュリティの設定

ノードが作成されたら、左側のサイドバーの**Security**の下にある**Quickstart**メニューに移動します。ここで、ユーザー名とパスワードを指定してデータベースユーザーを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_6.png" style={{width:1000, height:'auto'}}/></div>

:::note
デフォルトでは、ユーザーには任意のデータベースに対する*読み取りと書き込み*権限が付与されます。これらの権限を更新したり、後で追加のユーザーを作成したりすることができます。
:::

ユーザーの設定後、**Quickstart**ページにとどまり、下にスクロールして現在のIPアドレスをIPアクセスリストに追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_7.png" style={{width:1000, height:'auto'}}/></div>

### ステップ6. データベースとコレクションの作成

左側のサイドバーで、**Deployment**カテゴリの下にある**Databases**メニューをクリックします。次に、**Browse Collections**をクリックしてデータベース管理ページを開きます。ここですべてのデータベースとコレクションが管理されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_8.png" style={{width:1000, height:'auto'}}/></div>

データベースマネージャー内で、**Add My Own Data**をクリックして新しいデータベースとコレクションの作成プロセスを開始します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_9.png" style={{width:1000, height:'auto'}}/></div>

新しいデータベースとコレクションの名前を入力するよう求めるプロンプトが表示されます。それぞれに希望する名前を入力してください。

名前を入力した後、**Create**ボタンをクリックして新しいデータベースとコレクションの作成を完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_10.png" style={{width:1000, height:'auto'}}/></div>

### ステップ7. ホスト名の取得

MongoDB Atlasダッシュボードにログインすることから始めます。ここから、左側のサイドバーの**Database**メニューに移動してクラスターを見つけます。希望するクラスターを見つけて、それに関連付けられた**Connect**ボタンをクリックします。これにより、一連の接続オプションが開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_11.png" style={{width:1000, height:'auto'}}/></div>

表示された接続オプションで、**Shell**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_12.png" style={{width:1000, height:'auto'}}/></div>

MongoDB Shellオプションを選択した後、**Run your connection string in your command line.**というタイトルのセクションに案内されます。ここで、完全な接続文字列が表示されます。

接続文字列で、`mongodb+srv://`の後から始まり、`/`文字に到達するまで続く部分を探してください。この部分がホスト名です。通常、クラスター名の後に`.mongodb.net`が続きます。

例えば、接続文字列が次のような場合：

```sh
mongosh "mongodb+srv://my-cluster123.mongodb.net" --apiVersion 1 --username my-username
```

ホスト名は以下のようになります：

```sh
my-cluster123.mongodb.net
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_13.png" style={{width:1000, height:'auto'}}/></div>

## Part 3. MongoDB データベースを Node-RED に接続

### ステップ 8. MongoDB モジュールをインストール

三本線のアイコンをクリックし、**Manage palette** オプションをクリックします。これにより、ノードを追加または削除できる新しいウィンドウが開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_3.png" style={{width:1000, height:'auto'}}/></div>

パレット管理ウィンドウ内の **Install** タブに切り替えます。検索バーで `mongodb-aleph` と入力してモジュールを見つけます。次に、**node-red-contrib-mongodb-aleph** エントリの横にある **install** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_4.png" style={{width:1000, height:'auto'}}/></div>

:::note
**node-red-contrib-mongodb-aleph** モジュールは、このチュートリアルの執筆時点（2024年7月）での現在の互換性と信頼性のために推奨されています。ただし、Node-RED モジュールの可用性と機能は時間の経過とともに変わる可能性があります。Node-RED ライブラリまたは GitHub リポジトリで最新のユーザーフィードバックと互換性ノートを確認することをお勧めします。このモジュールで問題が発生した場合は、より適切なオプションについて Node-RED ライブラリにリストされている他の MongoDB モジュールを検討してください。
:::

### ステップ 9. MongoDB ノードを設定

MongoDB モジュールをインストールしたら、**mongodb - aleph - out** ノードを Node-RED フローにドラッグし、function ノードに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_5.png" style={{width:1000, height:'auto'}}/></div>

MongoDB ノードをダブルクリックして設定します。次に、server フィールドの横にあるプラスアイコンをクリックして、新しいサーバー設定を追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_6.png" style={{width:1000, height:'auto'}}/></div>

1. 先ほど取得したホスト名を入力します。
2. Connection topology をドロップダウンから **DNS Cluster \(mongodb+srv://\)** に変更します。
3. MongoDB データベースの名前を入力します。
4. セキュリティ設定で設定したユーザー名を入力します。
5. 対応するパスワードを入力します。
6. Node-RED 内で使用される MongoDB 接続の説明的な名前を提供します。

次に、**Add** または **Update** をクリックしてサーバー設定を保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_7.png" style={{width:1000, height:'auto'}}/></div>

サーバーが設定されたら、データ挿入の詳細を指定できます：

1. データを挿入したい MongoDB コレクションの名前を入力します。
2. 操作を **Insert** に設定します。これにより、コレクションに新しいドキュメントが追加されます。

**Done** をクリックしてセットアップを完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_8.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 10. デプロイ

最後に、Node-RED インターフェースの右上にある Deploy ボタンをクリックしてフローをデプロイします。このアクションにより、設定されたノードがアクティブになり、function ノードから MongoDB へのデータフローが可能になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_9.png" style={{width:1000, height:'auto'}}/></div>

これで、MongoDB にデータが入力されるのを確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Watcher_Collection_Finished.png" style={{width:1000, height:'auto'}}/></div>

Watcher と MongoDB の統合に成功したことをお祝いします！開発の取り組みにおいて、エキサイティングな機会の扉を開きました。MongoDB の堅牢な機能を活用した革新的なアプリケーションの作成に飛び込む準備をしてください。次に開発される素晴らしいソリューションを楽しみにしています！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
