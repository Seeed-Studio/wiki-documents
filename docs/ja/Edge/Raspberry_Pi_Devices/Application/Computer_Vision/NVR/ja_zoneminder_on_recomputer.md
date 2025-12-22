---
description: このwikiでは、reComputerにビデオ監視システムzoneminderをデプロイする方法を説明します。
title: reComputer上のZoneminder
keywords:
  - reComputer
  - NVR
  - Zoneminder
  - video surveillance system
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zone_m.webp
slug: /ja/zoneminder_on_recomputer
last_update:
  date: 09/05/2025
  author: Jiahao

no_comments: false # for Disqus
---

# reComputer上でZoneminderを使用する

## はじめに

[Zoneminder](https://github.com/ZoneMinder/zoneminder)は、セキュリティカメラの監視と管理を可能にするオープンソースのビデオ監視ソフトウェアです。IPカメラ、USBウェブカメラ、アナログカメラなど、さまざまなタイプのカメラをサポートしています。Zoneminderは、動体検知、ビデオ録画、アラーム通知、Webインターフェースを通じたリモート表示などの機能を提供します。高度にカスタマイズ可能で、個人用と業務用の両方の監視ニーズに適しています。さらに、オープンソースであるため、無料で使用でき、さまざまなセットアップに適応できます。

## 前提条件

### ハードウェア要件

<div class="table-center">
 <table align="center">
 <tr>
 <th>reComputer R1125</th>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
 </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991334.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Zoneminderのダウンロード

### システムの更新

以下のコマンドを実行します。

```bash
sudo apt update
sudo apt upgrade -y
```

### MariaDBのインストールと初期データベース設定

以下のコマンドを実行します。

```bash
sudo apt install apache2 mariadb-server
```

rootユーザーに切り替えて、データベースとデータベースユーザーを作成します。

```bash
sudo su
mariadb
CREATE DATABASE zm;
CREATE USER zmuser@localhost IDENTIFIED BY 'zmpass';
GRANT ALL ON zm.* TO zmuser@localhost;
FLUSH PRIVILEGES;
exit;
exit
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zm_1.png" alt="pir" width="1000" height="auto"/></p>

デフォルトでMariaDBは[unix socket authentication](https://mariadb.com/kb/en/authentication-plugin-unix-socket/)を使用するため、rootユーザーのパスワードは不要です（root MariaDBユーザーアクセスはローカルのroot Linuxユーザーのみ利用可能）。必要に応じて、[mariadb-secure-installation](https://mariadb.com/kb/en/mysql_secure_installation/)を実行してroot MariaDBパスワードを設定（およびその他のセキュリティ調整を適用）できます。

### Zoneminderのインストール

デフォルトでDebianはDebian（stable）で公開されているバージョンをインストールします。ただし、backportsを使用することでより新しいバージョンが利用できる場合があります。この記事の執筆時点では、bookworm（stable）はv.1.36.33を提供しています。

bookworm stableのバージョンをインストールするには、以下のコマンドを実行するだけです。

```bash
sudo apt install zoneminder
```

代わりにbackportsを使用してより新しいバージョンをインストールしたい場合は、以下のコマンドを実行します。最初の行でこのbookworm-backportsリポジトリを追加します。backportsリポジトリはデフォルトで無効になっているため、2行目でzoneminderのbackportバージョンが必要であることを明示的に指定します。

```bash
sudo bash -c "echo 'deb http://deb.debian.org/debian bookworm-backports main contrib' >> /etc/apt/sources.list"
sudo apt update
sudo apt -t bookworm-backports install zoneminder
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zm_2.png" alt="pir" width="1000" height="auto"/></p>

## Zoneminderの設定

### データベースの設定

以下のコマンドを実行し、パスワードとして`zmpass`を使用します。

```bash
mariadb -u zmuser -p zm < /usr/share/zoneminder/db/zm_create.sql
```

### zm.confの権限設定

zoneminderが設定ファイルを読み取れるようにするため、以下のコマンドを実行します。

```bash
sudo chgrp -c www-data /etc/zm/zm.conf
```

### Apache設定の調整

```bash
sudo a2enconf zoneminder
sudo a2enmod cgi
sudo systemctl reload apache2.service
sudo systemctl restart zoneminder.service
sudo systemctl status zoneminder.service
sudo systemctl enable zoneminder.service   
```

zoneminder.serviceがアクティブでエラーがない場合、`http://yourhostname/zm`でzoneminderにアクセスできるはずです。

### Zoneminderの設定

zoneminderにビデオソースを追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zm_3.png" alt="pir" width="1000" height="auto"/></p>

## 結果

すべてを設定すると、現在のカメラからのライブフィードを表示でき、動きが検出されると録画されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zone_m.gif" alt="pir" width="1000" height="auto"/></p>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験を可能な限りスムーズにするため、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
