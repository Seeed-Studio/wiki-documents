---
description: WatcherとNode-REDからMongoDBへのデータ送信
title: Watcher & Node-REDからMongoDBへ
keywords:
- Watcher
- MongoDB
- Node-RED
image: https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Watcher_MongoDB_Cover.jpg
slug: /ja/watcher_node_red_to_mongodb
last_update:
  date: 05/15/2025
  author: Vincent
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# WatcherからMongoDBへのクイックスタート

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Watcher_MongoDB_Cover.jpg" style={{width:1000, height:'auto'}}/></div>

[**MongoDB**](https://www.mongodb.com/) は、構造化データと非構造化データの両方を扱うのに優れた、強力なクロスプラットフォームのドキュメントデータベースです。その柔軟でスキーマレスなデータモデルはJSONのようなドキュメントに基づいており、アドホッククエリやインデックス作成を必要とする動的なアプリケーションに最適です。

MongoDBを使用することで、**Watcherからのデータを保存し、さらなる処理や他のプロジェクトアプリケーションに利用するための簡単な方法**を提供します。

このチュートリアルでは、Watcher APIとNode-REDを使用してMongoDBにデータをシームレスに送信する方法を説明します。このセットアップは、リアルタイムデータ処理と永続化を必要とするプロジェクトに最適です。

## パート1. Node-REDでWatcherをセットアップする

### ステップ1. Node-REDをインストールする

まず最初に、以下のビデオに従ってWatcherでタスクを実行する必要があります。詳細を知りたい場合は、[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

このセットアップにはNode-REDとWatcher APIが必要です。まだNode-REDをインストールしていない、またはWatcher APIと接続していない場合は、こちらから始めてください：[**Watcher to Node-RED Quick Start**](https://wiki.seeedstudio.com/ja/watcher_to_node_red)。

### ステップ2. MongoDB用のデータを準備する

WatcherをNode-REDと統合した後、次のステップはWatcherからのデータをMongoDB用に準備することです。Node-REDの関数ノードを使用して、データを適切にフォーマットします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_1.png" style={{width:1000, height:'auto'}}/></div>

このチュートリアルの目的では、Watcherのデータをそのまま返します。ただし、アプリケーションのニーズに応じてデータを変換することをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_2.png" style={{width:1000, height:'auto'}}/></div>

#### データをフォーマットするためのNode-RED関数の例

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

## パート 2. MongoDB のセットアップ

### ステップ 3. アカウントを作成する
次に、MongoDB アカウントを作成するか、既にアカウントをお持ちの場合はログインしてください。MongoDB を初めて使用する場合は、[**mongodb.com**](https://www.mongodb.com) にアクセスして無料アカウントに登録してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_1.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 4. 新しいクラスターをデプロイする

ログイン後、新しいクラスターをデプロイします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_4.png" style={{width:1000, height:'auto'}}/></div>

1. **クラスター構成を選択する**: 開発用には、無料で小規模なテストに十分な M0 構成を使用することをお勧めします。ただし、プロジェクトの要件により適した構成を選択することも可能です。
2. **クラウドプロバイダーを選択する**: 私たちは AWS を選択しました。これは広範な利用可能性と信頼性があるためです。ただし、Google Cloud や Azure など、地理的または技術的要件に応じて他のプロバイダーを選択することもできます。
3. **リージョンを選択する**: 主なユーザーベースに最も近いリージョンを選択してください。これにより、レイテンシーが最小化され、パフォーマンスが向上します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_5.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 5. データベースのセキュリティを構成する

ノードが作成されたら、左側のサイドバーの **Security** の下にある **Quickstart** メニューに移動します。ここで、ユーザー名とパスワードを指定してデータベースユーザーを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_6.png" style={{width:1000, height:'auto'}}/></div>

:::note
デフォルトでは、ユーザーには任意のデータベースに対する *読み取りおよび書き込み* 権限が付与されます。これらの権限を後で更新したり、追加のユーザーを作成したりすることも可能です。
:::

ユーザーを設定した後、**Quickstart** ページに留まり、下にスクロールして現在の IP アドレスを IP アクセスリストに追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_7.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 6. データベースとコレクションを作成する

左側のサイドバーで、**Deployment** カテゴリの **Databases** メニューをクリックします。その後、**Browse Collections** をクリックしてデータベース管理ページを開きます。ここで、すべてのデータベースとコレクションを管理します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_8.png" style={{width:1000, height:'auto'}}/></div>

データベース管理画面内で、**Add My Own Data** をクリックして、新しいデータベースとコレクションを作成するプロセスを開始します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_9.png" style={{width:1000, height:'auto'}}/></div>

プロンプトが表示され、新しいデータベースとコレクションの名前を入力するよう求められます。それぞれの名前を入力してください。

名前を入力したら、**Create** ボタンをクリックして、新しいデータベースとコレクションの作成を完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_10.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 7. ホスト名を取得する

MongoDB Atlas ダッシュボードにログインします。ここから、左側のサイドバーの **Database** メニューに移動してクラスターを見つけます。目的のクラスターを見つけ、その **Connect** ボタンをクリックします。これにより、一連の接続オプションが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_11.png" style={{width:1000, height:'auto'}}/></div>

表示された接続オプションの中から **Shell** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_12.png" style={{width:1000, height:'auto'}}/></div>

MongoDB Shell オプションを選択すると、**Run your connection string in your command line** というセクションに案内されます。ここで、完全な接続文字列が表示されます。

接続文字列内で、`mongodb+srv://` の後から `/` 文字までの部分を探します。この部分がホスト名です。通常、クラスター名の後に `.mongodb.net` が続きます。

例えば、接続文字列が以下の場合：
```sh
mongosh "mongodb+srv://my-cluster123.mongodb.net" --apiVersion 1 --username my-username
```
ホスト名は以下のようになります：
```sh
my-cluster123.mongodb.net
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_13.png" style={{width:1000, height:'auto'}}/></div>

## Part 3. Node-RED に MongoDB データベースを接続する

### Step 8. MongoDB モジュールをインストールする

三本線のアイコンをクリックし、**Manage palette** オプションを選択します。これにより、ノードを追加または削除できる新しいウィンドウが開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_3.png" style={{width:1000, height:'auto'}}/></div>

パレット管理ウィンドウ内の **Install** タブに切り替えます。検索バーに `mongodb-aleph` と入力してモジュールを見つけます。その後、**node-red-contrib-mongodb-aleph** エントリの横にある **install** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_4.png" style={{width:1000, height:'auto'}}/></div>

:::note
**node-red-contrib-mongodb-aleph** モジュールは、このチュートリアル執筆時点（2024年7月）での互換性と信頼性の観点から推奨されています。ただし、Node-RED モジュールの利用可能性や機能は時間とともに変化する可能性があります。Node-RED ライブラリや GitHub リポジトリで最新のユーザーフィードバックや互換性情報を確認することをお勧めします。このモジュールで問題が発生した場合は、Node-RED ライブラリに掲載されている他の MongoDB モジュールを検討し、より適したオプションを探してください。
:::

### Step 9. MongoDB ノードを設定する

MongoDB モジュールをインストールしたら、**mongodb - aleph - out** ノードを Node-RED フローにドラッグし、関数ノードに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_5.png" style={{width:1000, height:'auto'}}/></div>

MongoDB ノードをダブルクリックして設定を行います。その後、サーバーフィールドの横にあるプラスアイコンをクリックして新しいサーバー設定を追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_6.png" style={{width:1000, height:'auto'}}/></div>

1. 先ほど取得したホスト名を入力します。
2. 接続トポロジーをドロップダウンから **DNS Cluster \(mongodb+srv://\)** に変更します。
3. MongoDB データベースの名前を入力します。
4. セキュリティ設定で構成したユーザー名を入力します。
5. 対応するパスワードを入力します。
6. Node-RED 内で使用される MongoDB 接続の説明的な名前を入力します。

その後、**Add** または **Update** をクリックしてサーバー設定を保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_7.png" style={{width:1000, height:'auto'}}/></div>

サーバーが設定されたら、データ挿入の詳細を指定できます：

1. データを挿入したい MongoDB コレクションの名前を入力します。
2. 操作を **Insert** に設定し、新しいドキュメントをコレクションに追加します。

**Done** をクリックして設定を完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_8.png" style={{width:1000, height:'auto'}}/></div>

### Step 10. デプロイ

最後に、Node-RED インターフェースの右上にある Deploy ボタンをクリックしてフローをデプロイします。この操作により、設定したノードが有効化され、関数ノードから MongoDB へのデータフローが可能になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_9.png" style={{width:1000, height:'auto'}}/></div>

これで、MongoDB にデータが入力されるのが確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Watcher_Collection_Finished.png" style={{width:1000, height:'auto'}}/></div>

Watcher と MongoDB の統合に成功したこと、おめでとうございます！これにより、開発の取り組みにおいて多くのエキサイティングな可能性が広がります。MongoDB の強力な機能を活用した革新的なアプリケーションの作成に向けて準備を整えましょう。次に開発する素晴らしいソリューションを楽しみにしています！

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