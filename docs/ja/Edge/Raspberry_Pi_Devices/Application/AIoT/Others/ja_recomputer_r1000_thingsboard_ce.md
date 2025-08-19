---
description: reComputer 用 ThingsBoard インストールガイドは、reComputer デバイス上で ThingsBoard v3.8 と PostgreSQL をセットアップするためのステップバイステップの手順を提供します。このガイドでは、Java 17 のインストール、ThingsBoard サービスの設定、PostgreSQL のセットアップ、および IoT データ管理を円滑に行うためのトラブルシューティングのヒントを網羅しています。

title: reComputer R1000 での ThingsBoard の始め方
keywords:
  - reComputer-R1000
  - 始め方
  - IIoT
  - 産業用
  - ThingsBoard
  - エッジコンピューティング
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_r1000_thingsboard_ce
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/thingsboard_blue.png" style={{width:600}}/></div>

## はじめに

[ThingsBoard](https://thingsboard.io/) は、IoT プロジェクトの迅速な開発、管理、およびスケーリングを目的としたオープンソースの IoT プラットフォームです。クラウドおよびオンプレミスの IoT インフラストラクチャに対応した即時利用可能なソリューションを提供し、デバイスのプロビジョニング、資産管理、データ収集と可視化、テレメトリの分析を簡単に行うことができます。このガイドでは、reComputer 上で ThingsBoard Community Edition をインストールする手順を説明し、IoT アプリケーションの堅牢な基盤を提供します。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

:::note
ハードウェア要件は選択したデータベースとシステムに接続されるデバイスの数によって異なります。PostgreSQL を使用して ThingsBoard を実行するには、**最低でも 4GB の RAM** が必要です。
:::

## ステップ 1: Java 17 (OpenJDK) のインストール

ThingsBoard を実行するには Java 17 が必要です。ターミナルを開きます。

1. パッケージインデックスを更新します:
   ```bash
   sudo apt update
   ```
2. OpenJDK 17 をインストールします:
   ```bash
   sudo apt install openjdk-17-jdk
   ```
3. システムをデフォルトで OpenJDK 17 を使用するように設定します:
   ```bash
   sudo update-alternatives --config java
   ```
4. インストールを確認します:
   ```bash
   java -version
   ```

## ステップ 2: ThingsBoard サービスのインストール

1. ThingsBoard `.deb` パッケージをダウンロードします:
   ```bash
   wget https://github.com/thingsboard/thingsboard/releases/download/v3.8/thingsboard-3.8.deb
   ```
2. ThingsBoard をサービスとしてインストールします:
   ```bash
   sudo dpkg -i thingsboard-3.8.deb
   ```

## ステップ 3: PostgreSQL データベースのインストール

1. **wget** がインストールされていない場合はインストールします:
   ```bash
   sudo apt install -y wget
   ```
2. PostgreSQL リポジトリを追加し、サービスをインストールします:
   ```bash
   wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
   echo "deb https://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" | sudo tee /etc/apt/sources.list.d/pgdg.list
   sudo apt update
   sudo apt -y install postgresql
   sudo service postgresql start
   ```

3. `postgres` ユーザーのパスワードを設定します:
   ```bash
   sudo -u postgres psql
   \password
   ```

4. ThingsBoard データベースを作成します:
   ```bash
   psql -U postgres -d postgres -h 127.0.0.1 -W
   CREATE DATABASE thingsboard;
   ```

## ステップ 4: ThingsBoard の設定

1. ThingsBoard の設定ファイルを開きます:
   ```bash
   sudo nano /etc/thingsboard/conf/thingsboard.conf
   ```

2. 以下のデータベース設定を追加します（`PUT_YOUR_POSTGRESQL_PASSWORD_HERE` を `postgres` ユーザーのパスワードに置き換えてください）:
   ```bash
   # DB Configuration 
   export DATABASE_TS_TYPE=sql
   export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/thingsboard
   export SPRING_DATASOURCE_USERNAME=postgres
   export SPRING_DATASOURCE_PASSWORD=PUT_YOUR_POSTGRESQL_PASSWORD_HERE
   export SQL_POSTGRES_TS_KV_PARTITIONING=MONTHS
   ```

3. （オプション）RAM が 4GB のマシン向けにメモリ設定を更新します:
   ```bash
   export JAVA_OPTS="$JAVA_OPTS -Xms2G -Xmx2G"
   ```

## ステップ 5: インストールスクリプトの実行

1. ThingsBoard のインストールスクリプトを実行します:
   ```bash
   sudo /usr/share/thingsboard/bin/install/install.sh --loadDemo
   ```

   `--loadDemo` オプションを使用すると、ユーザー、デバイス、アセットなどのデモデータがロードされます。

## ステップ 6: ThingsBoard サービスの開始

ThingsBoard サービスを開始します:
```bash
sudo service thingsboard start
```

サービスが開始されたら、以下のリンクから ThingsBoard Web UI にアクセスできます:

- **URL:** [http://localhost:8080](http://localhost:8080)

#### デフォルトの認証情報:
- **システム管理者:** sysadmin@thingsboard.org / sysadmin
- **テナント管理者:** tenant@thingsboard.org / tenant
- **顧客ユーザー:** customer@thingsboard.org / customer

## トラブルシューティング

問題が発生した場合は、ThingsBoard のログを確認してエラーを探してください:

```bash
cat /var/log/thingsboard/thingsboard.log | grep ERROR
```

追加のログファイルについては以下を確認してください:
```bash
/var/log/thingsboard
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/openingwindow.PNG" style={{width:600}}/></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>