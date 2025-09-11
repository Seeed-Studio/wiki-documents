---
description: Edgebox RPi 200 に InfluxDB をデプロイして、IoT アプリケーションにおける効率的な時系列データ収集と分析を実現します。このガイドでは、インストール、設定、使用方法をカバーし、Raspberry Pi を搭載したエッジコントローラーで InfluxDB の力を活用する方法を説明します。ネットワークのエッジでリアルタイムの洞察と強力な監視機能を実現します。

title: Edge Box RPi 200 と Node-RED および InfluxDB
keywords:
  - エッジコントローラー
  - Edge-Box
  - Node-RED
  - InfluxDB
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /ja/edge_box_rpi_200_node_red_influxdb
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

[Raspberry Pi](https://www.influxdata.com/) を搭載したエッジコントローラーである Edgebox RPi 200 に InfluxDB をデプロイすることで、ネットワークのエッジで強力な時系列データ収集と分析が可能になります。このセットアップは IoT アプリケーションに最適で、リアルタイムの洞察と監視機能を提供します。軽量でありながら強力な InfluxDB データベースを活用することで、Edgebox 上でセンサーデータを効率的に管理および分析できます。このガイドでは、Edgebox RPi 200 に InfluxDB をインストール、設定、使用する手順を説明し、データインフラストラクチャへのシームレスな統合を実現します。

### ハードウェア準備

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### ソフトウェア準備

Edge Box には Raspberry Pi OS がプリインストールされています。このデバイスを初めて起動する場合は、[Getting Started Wiki](https://wiki.seeedstudio.com/ja/Edge_Box_introduction/) をお読みください。また、[Node-RED の入門ガイド](https://wiki.seeedstudio.com/ja/Edge-Box-Getting-Started-with-Node-Red/) も用意しています。このガイドを進める前に、こちらを確認することをお勧めします。このチュートリアルでは、YABE 室温シミュレーターを実行しているホスト PC を、Edge Box 上で実行されている Node-RED に接続します。

## Edgebox RPi 200 に InfluxDB をインストールする

このガイドでは、Edgebox RPi 200 エッジコントローラーに InfluxDB をインストールして設定する手順を説明します。

**ステップ 1**: システムを更新する

まず、以下のコマンドを実行してシステムを最新の状態にします。EdgeBox に SSH 接続して以下を実行します。

```sh
sudo apt update
```

**ステップ 2**: InfluxDB リポジトリを追加する

InfluxDB の GPG キーとリポジトリをシステムに追加します。

GPG キーを追加:

```sh
curl https://repos.influxdata.com/influxdata-archive.key | gpg --dearmor | sudo tee /usr/share/keyrings/influxdb-archive-keyring.gpg >/dev/null
 ```

リポジトリをソースリストに追加:

```sh
echo "deb [signed-by=/usr/share/keyrings/influxdb-archive-keyring.gpg] https://repos.influxdata.com/debian stable main" | sudo tee /etc/apt/sources.list.d/influxdb.list
```

**ステップ 3**: パッケージリストを更新する

InfluxDB リポジトリを含むようにパッケージリストを更新します。

```sh
sudo apt update
```

**ステップ 4**: InfluxDB をインストールする

InfluxDB バージョン 1 をインストールします。

```sh
sudo apt install influxdb
```

## InfluxDB サーバーの起動

InfluxDB サービスを有効化して起動します。

**ステップ 1**. サービスのマスクを解除します:

```sh
sudo systemctl unmask influxdb
 ```

**ステップ 2**. サービスを有効化します:

```sh
sudo systemctl enable influxdb
```

**ステップ 3**. サービスを起動します:

```sh
sudo systemctl start influxdb
```

## InfluxDB のテスト

InfluxDB CLI ツールにアクセスして、基本的なデータベース操作を行います。

**ステップ 1**. ターミナルを開きます:
   
```sh
influx
```

**ステップ 2**. データベースを作成します:

```sh
CREATE DATABASE data
 ```

**ステップ 3**. データベースを使用します:

```sh
USE data
```

**ステップ 4**. サンプルデータポイントを挿入します:

```sh
INSERT room,temperature=30.1 humidity=80.2
 ```

**ステップ 5**. 挿入したデータをクエリします:

```sh
SELECT * FROM room
 ```

## InfluxDB に認証を追加する

**ステップ 1**. ターミナルを開きます:

```sh
influx
```

**ステップ 2**. すべての権限を持つ管理者ユーザーを作成します（`<password>` を安全なパスワードに置き換えてください）:
   
```sh
CREATE USER admin WITH PASSWORD '<password>' WITH ALL PRIVILEGES
 ```

**ステップ 3**. InfluxDB CLI を終了します:

```sh
exit
```

**ステップ 4**. InfluxDB の設定を編集して認証を有効にします:

```sh
sudo nano /etc/influxdb/influxdb.conf
```

`[HTTP]` セクションの下に、以下の行を追加または変更します:

```
    auth-enabled = true
    pprof-enabled = true
    pprof-auth-enabled = true
    ping-auth-enabled = true
    enabled=true
    bind-address=":8086"
```

**ステップ 5**. 設定を反映させるために InfluxDB サービスを再起動します:

```sh
sudo systemctl restart influxdb
```

**ステップ 6**. 管理者ユーザーで InfluxDB に接続します:

```sh
influx -username admin -password <password>
```

`<password>` を管理者ユーザーのパスワードに置き換えてください。

## Node-RED を使用して InfluxDB にデータを送信する

**ステップ 1**. ブラウザで Node-RED を開きます（通常は `http://<your-edgebox-ip>:1880`）。

**ステップ 2**. Node-RED の管理パレットを使用して `node-red-contrib-influxdb` をインストールします。

**ステップ 3**. フローキャンバスに `inject` ノード、`function` ノード、および `influxdb out` ノードをドラッグ＆ドロップし、以下のように接続します:

```
[Inject Node] -> [Function Node] -> [InfluxDB Out Node]
```
<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/ifdb-flow.PNG" /></center>

### Function ノード

このノードは、InfluxDB に送信するデータをフォーマットします。

**ステップ 1**. `function` ノードをダブルクリックします。

**ステップ 2**. 名前を入力します（例: `Format Data for InfluxDB`）。

**ステップ 3**. 以下のコードを関数エディタに入力します:

```javascript
msg.payload = [
    {
        temperature: 30.1,
        humidity: 80.2
    }
];
return msg;
```
<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/js-influxdb.PNG" /></center>

**ステップ 4**. 「Done」をクリックします。

### InfluxDB Out ノード

このノードはフォーマットされたデータを InfluxDB に送信します。

**ステップ 1**. `influxdb out` ノードをダブルクリックします。
   
**ステップ 2**. 以下の詳細を入力します:

- **Name**: labdata
- **Database**: data（以前に作成したもの）
- **Measurement**: lab

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/influxin.PNG" /></center>

**ステップ 3**. 鉛筆アイコンをクリックして、新しい InfluxDB サーバー構成を追加します。
   
**ステップ 4**. 以下の詳細を入力します:

- **Name**: InfluxDB
- **Version**: 1.8-flux
- **URL**: `http://localhost:8086`
- **Username**: admin
- **Password**: `<password>`（作成したパスワード）

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/server-ifdb.PNG" /></center>

**ステップ 5**. 「Add」をクリックし、その後「Done」をクリックします。

**ステップ 6**. 「Deploy」をクリックしてフローを保存およびデプロイします。

### フローのテスト

1. `inject` ノードのボタンをクリックしてフローを手動でトリガーします。
   
2. ターミナルで以下のコマンドを実行して、データが InfluxDB データベースに正常に書き込まれたか確認します:

```sh
influx -username admin -password <password>
USE data
SELECT * FROM lab
```

`<password>` を管理者ユーザーのパスワードに置き換えてください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/result-lab.PNG" /></center>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>