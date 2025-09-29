---
description: IoTアプリケーションにおける効率的な時系列データ収集と分析のために、reComputer R1000にInfluxDBをデプロイします。このガイドでは、Raspberry Piベースのエッジコントローラー上でInfluxDBの力を活用するためのインストール、設定、使用方法について説明します。ネットワークのエッジで直接リアルタイムインサイトと堅牢な監視機能を実現します。

title: reComputer R1000とNode RedおよびInfluxDB
keywords:
  - Edge Controller
  - reComputer R1000
  - Node-Red
  - InfluxDB
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_r1000_node_red_influxdb
last_update:
  date: 07/03/2024
  author: Kasun Thushara
---
## はじめに

Raspberry PiベースのエッジコントローラーであるreComputer R1000に[InfluxDB](https://www.influxdata.com/)をデプロイすることで、ネットワークのエッジで堅牢な時系列データ収集と分析が可能になります。このセットアップはIoTアプリケーションに最適で、リアルタイムインサイトと監視機能を提供します。軽量でありながら強力なInfluxDBデータベースを活用することで、reComputer R1000上で直接センサーデータを効率的に管理・分析できます。以下のガイドでは、reComputer R1000にInfluxDBをインストール、設定、使用する手順を説明し、データインフラストラクチャへのシームレスな統合を確実にします。

### ハードウェアの準備

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### ソフトウェアの準備

[Node-REDの入門ガイド](https://wiki.seeedstudio.com/ja/recomputer_r1000_getting_statrted_node_red/)を用意しています。このwikiに進む前に、このガイドを確認することをお勧めします。

## reComputer R1000へのInfluxDBのインストール

このガイドでは、reComputer R1000エッジコントローラーにInfluxDBをインストールして設定する手順について説明します。

**ステップ1**: システムの更新

まず、以下のコマンドを実行してシステムが最新であることを確認します：reComputer R1000にSSHで接続し、

```sh
sudo apt update
```

**ステップ 2**: InfluxDBリポジトリを追加する

InfluxDB GPG キーとリポジトリをシステムに追加してください。

Add the GPG key:

```sh
curl https://repos.influxdata.com/influxdata-archive.key | gpg --dearmor | sudo tee /usr/share/keyrings/influxdb-archive-keyring.gpg >/dev/null
 ```

リポジトリをソースリストに追加します：

```sh
echo "deb [signed-by=/usr/share/keyrings/influxdb-archive-keyring.gpg] https://repos.influxdata.com/debian stable main" | sudo tee /etc/apt/sources.list.d/influxdb.list
```

**ステップ 3**: パッケージリストの更新

InfluxDBリポジトリを含むようにパッケージリストを更新します：

```sh
sudo apt update
```

**ステップ 4**: InfluxDBをインストールする

InfluxDB バージョン1をインストールする

```sh
sudo apt install influxdb
```

## InfluxDBサーバーの開始

InfluxDBサービスを有効化して開始します：

**ステップ1**. サービスのマスクを解除します：

```sh
sudo systemctl unmask influxdb
 ```

**ステップ 2**. サービスを有効にします：

```sh
sudo systemctl enable influxdb
```

**ステップ 3**. サービスを開始します：

```sh
sudo systemctl start influxdb
```

## InfluxDBのテスト

InfluxDB CLIツールにアクセスして基本的なデータベース操作を実行します。

**ステップ1**. ターミナルを開く：

```sh
influx
```

**ステップ 2**. データベースを作成します：

```sh
CREATE DATABASE data
 ```

**ステップ 3**. データベースを使用する：

```sh
USE data
```

**ステップ 4**. サンプルデータポイントを挿入します：

```sh
INSERT room,temperature=30.1 humidity=80.2
 ```

**ステップ 5**. 挿入されたデータをクエリします：

```sh
SELECT * FROM room
 ```

## InfluxDBに認証を追加する

**ステップ1**. ターミナルを開く：

```sh
influx
```

**ステップ 2**. すべての権限を持つ管理者ユーザーを作成します（`<password>` を安全なパスワードに置き換えてください）：

```sh
CREATE USER admin WITH PASSWORD '<password>' WITH ALL PRIVILEGES
 ```

**ステップ 3**. InfluxDB CLI を終了します：

```sh
exit
```

**ステップ4**. 認証を有効にするためにInfluxDBの設定を編集します：

```sh
sudo nano /etc/influxdb/influxdb.conf
```

`[HTTP]` セクションの下に、以下の行を追加または変更してください：

```
    auth-enabled = true
    pprof-enabled = true
    pprof-auth-enabled = true
    ping-auth-enabled = true
    enabled=true
    bind-address=":8086"
```

**ステップ 5**. 変更を適用するために InfluxDB サービスを再起動します：

```sh
sudo systemctl restart influxdb
```

**ステップ 6**. 管理者ユーザーでInfluxDBに接続する：

```sh
influx -username admin -password <password>
```

`<password>` を管理者ユーザーに設定したパスワードに置き換えてください。

## Node-RED経由でInfluxDBにデータを送信する

**ステップ 1**. ブラウザでNode-REDを開きます（通常は `http://<your-reComputer-R1000-ip>:1880`）。

**ステップ 2**. Node-REDの管理パレットを使用して `node-red-contrib-influxdb` をインストールします。

**ステップ 3**. `inject` ノード、`function` ノード、`influxdb out` ノードをフローキャンバスにドラッグ&ドロップし、以下のように接続します：

```
[Inject Node] -> [Function Node] -> [InfluxDB Out Node]
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/ifdb-flow.PNG" /></center>

### Function Node

このノードは、InfluxDBに送信するデータをフォーマットします。

**ステップ 1**. `function`ノードをダブルクリックします。

**ステップ 2**. 名前を入力します（例：`Format Data for InfluxDB`）。

**ステップ 3**. 関数エディターに以下のコードを入力します：

```javascript
msg.payload = [
    {
        temperature: 30.1,
        humidity: 80.2
    }
];
return msg;
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/js-influxdb.PNG" /></center>

**ステップ 4**. 「Done」をクリックします。

### InfluxDB Out ノード

このノードは、フォーマットされたデータをInfluxDBに送信します。

**ステップ 1**. `influxdb out`ノードをダブルクリックします。

**ステップ 2**. 以下の詳細を入力します：

- **Name**: labdata
- **Database**: data（事前に作成済み）
- **Measurement**: lab

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/influxin.PNG" /></center>

**ステップ 3**. 鉛筆アイコンをクリックして、新しいInfluxDBサーバー設定を追加します。

**ステップ 4**. 以下の詳細を入力します：

- **Name**: InfluxDB
- **Version**: 1.8-flux
- **URL**: `http://localhost:8086`
- **Username**: admin
- **Password**: `<password>`（作成したパスワード）

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/server-ifdb.PNG" /></center>

**ステップ 5**. 「Add」をクリックし、次に「Done」をクリックします。

**ステップ 6**. 「Deploy」をクリックしてフローを保存・デプロイします。

### フローのテスト

1. `inject`ノードのボタンをクリックして、フローを手動でトリガーします。

2. ターミナルで以下のコマンドを実行して、データがInfluxDBデータベースに正常に書き込まれたかどうかを確認します：

```sh
influx -username admin -password <password>
USE data
SELECT * FROM lab
```

`<password>` を管理者ユーザーに設定したパスワードに置き換えてください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/result-lab.PNG" /></center>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
