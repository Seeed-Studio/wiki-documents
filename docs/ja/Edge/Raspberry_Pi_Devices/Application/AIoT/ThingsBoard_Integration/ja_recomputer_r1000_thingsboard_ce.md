---
description: reComputer用ThingsBoardインストールガイドは、reComputerデバイスにThingsBoard v3.8とPostgreSQLをセットアップするためのステップバイステップの手順を提供します。Java 17のインストール、ThingsBoardサービス設定、PostgreSQLセットアップ、およびシームレスなIoTデータ管理のためのトラブルシューティングのヒントをカバーしています。

title: reComputer R1000でThingsBoardを始める
keywords:
  - reComputer-R1000
  - Getting started
  - IIoT
  - Industrial 
  - Thingsboard
  - Edge Computing
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_r1000_thingsboard_ce
last_update:
  date: 10/14/2024
  author: Kasun Thushara
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/thingsboard_blue.png" style={{width:600}}/></div>

## はじめに

[ThingsBoard](https://thingsboard.io/)は、IoTプロジェクトの迅速な開発、管理、スケーリングのために設計されたオープンソースのIoTプラットフォームです。クラウドとオンプレミスの両方のIoTインフラストラクチャに対して、すぐに使えるソリューションを提供し、デバイスのプロビジョニング、アセット管理、データの収集と可視化、テレメトリの分析を簡単に行うことができます。このガイドでは、reComputerにThingsBoard Community Editionをインストールする手順を説明し、IoTアプリケーションのための堅牢な基盤を提供します。

## 前提条件

### ハードウェア

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

:::note
ハードウェア要件は、選択したデータベースとシステムに接続されるデバイス数によって異なります。PostgreSQLでThingsBoardを実行するには、**最低4GBのRAM**が必要です。
:::

## ステップ1: Java 17 (OpenJDK)のインストール

ThingsBoardの実行にはJava 17が必要です。ターミナルを開きます。

1. パッケージインデックスを更新します：

   ```bash
   sudo apt update
   ```

2. OpenJDK 17をインストールします：

   ```bash
   sudo apt install openjdk-17-jdk
   ```

3. デフォルトでOpenJDK 17を使用するようにシステムを設定します：

   ```bash
   sudo update-alternatives --config java
   ```

4. インストールを確認します：

   ```bash
   java -version
   ```

## ステップ2: ThingsBoardサービスのインストール

1. ThingsBoard `.deb`パッケージをダウンロードします：

   ```bash
   wget https://github.com/thingsboard/thingsboard/releases/download/v3.8/thingsboard-3.8.deb
   ```

2. ThingsBoardをサービスとしてインストールします：

   ```bash
   sudo dpkg -i thingsboard-3.8.deb
   ```

## ステップ3: PostgreSQLデータベースのインストール

1. **wget**がまだインストールされていない場合はインストールします：

   ```bash
   sudo apt install -y wget
   ```

2. PostgreSQLリポジトリを追加してサービスをインストールします：

   ```bash
   wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
   echo "deb https://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" | sudo tee /etc/apt/sources.list.d/pgdg.list
   sudo apt update
   sudo apt -y install postgresql
   sudo service postgresql start
   ```

3. `postgres` ユーザーのパスワードを設定する：

   ```bash
   sudo -u postgres psql
   \password
   ```

4. ThingsBoardデータベースを作成します：

   ```bash
   psql -U postgres -d postgres -h 127.0.0.1 -W
   CREATE DATABASE thingsboard;
   ```

## ステップ4：ThingsBoardを設定する

1. ThingsBoardの設定ファイルを開きます：

   ```bash
   sudo nano /etc/thingsboard/conf/thingsboard.conf
   ```

2. 以下のデータベース設定を追加してください（`PUT_YOUR_POSTGRESQL_PASSWORD_HERE` を `postgres` ユーザーに設定したパスワードに置き換えてください）：

   ```bash
   # DB Configuration 
   export DATABASE_TS_TYPE=sql
   export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/thingsboard
   export SPRING_DATASOURCE_USERNAME=postgres
   export SPRING_DATASOURCE_PASSWORD=PUT_YOUR_POSTGRESQL_PASSWORD_HERE
   export SQL_POSTGRES_TS_KV_PARTITIONING=MONTHS
   ```

3. （オプション）4GBのRAMを搭載したマシンのメモリ設定を更新する：

   ```bash
   export JAVA_OPTS="$JAVA_OPTS -Xms2G -Xmx2G"
   ```

## ステップ 5: インストールスクリプトの実行

1. ThingsBoard インストールスクリプトを実行します：

   ```bash
   sudo /usr/share/thingsboard/bin/install/install.sh --loadDemo
   ```

   `--loadDemo` オプションは、ユーザー、デバイス、アセットなどのデモデータを読み込みます。

## ステップ 6: ThingsBoard サービスの開始

ThingsBoard サービスを開始します：

```bash
sudo service thingsboard start
```

開始後、以下のリンクを使用してThingsBoard Web UIにアクセスできます：

- **URL:** [http://localhost:8080](http://localhost:8080)

#### デフォルト認証情報

- **システム管理者:** sysadmin@thingsboard.org / sysadmin
- **テナント管理者:** tenant@thingsboard.org / tenant
- **カスタマーユーザー:** customer@thingsboard.org / customer

## トラブルシューティング

問題が発生した場合は、ThingsBoardログでエラーを確認してください：

```bash
cat /var/log/thingsboard/thingsboard.log | grep ERROR
```

追加のログファイルについて：

```bash
/var/log/thingsboard
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/openingwindow.PNG" style={{width:600}}/></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
