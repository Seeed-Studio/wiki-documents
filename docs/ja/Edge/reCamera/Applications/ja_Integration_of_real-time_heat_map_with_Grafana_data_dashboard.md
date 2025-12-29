---
description: reCamera を使用してリアルタイムヒートマップ + ローカルブラー処理 + Grafana データダッシュボード統合を実現
title: リアルタイムヒートマップと Grafana データダッシュボードの統合
keywords:
  - reCamera
  - heatmap
  - Grafana
  - InfluxDB
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/headmap.gif
slug: /ja/integration_of_real-time_heat_map_with_grafana_data_dashboard
sidebar_position: 10
last_update: 
  date: 12/21/2025
  author: Xinrui Wu
---

# リアルタイムヒートマップと Grafana データダッシュボードの統合

## はじめに

このプロジェクトは、reCamera に内蔵された YOLO11n モデルを使用してターゲット検出を行います。人物ターゲットにファジー処理を実行し、ヒートマップ効果を表示します。これらはすべて reCamera 内でローカルに処理されます！そして reCamera は検出されたデータをローカルで実行されている Influxdb データベースに送信します。その後、Grafana が Influxdb データベースからデータを読み取り、リアルタイムデータダッシュボードを表示します。

このデモを完了した後の使用効果は以下の通りです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/headmap.gif" /></div>

## ハードウェア準備

reCamera 1台
コンピュータ 1台

<table align="center">
 <tr>
  <th>reCamera 2002 シリーズ</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ POE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
   </a>
  </div></td>

 </tr>
</table>

## 1.InfluxDB 設定

### 1.1 InfluxDB2-2.1.1 をダウンロードして起動

ダウンロード[リンク](https://dl.influxdata.com/influxdb/releases/influxdb2-2.1.1-windows-amd64.zip)にアクセスし、ダウンロードして解凍します。Win + R を押してコマンドプロンプトを開き、ファイルが解凍されたディレクトリに移動し、最後に以下を入力します：

```bash
influxd
```

以下の図に示すように、起動が成功しました

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_1.png" /></div>

お使いのデバイスが Raspberry Pi などの Linux システムを実行している ARM アーキテクチャデバイスの場合、ダウンロードリンクは[こちら](https://dl.influxdata.com/influxdb/releases/influxdb2-2.1.1-linux-arm64.tar.gz)です。

お使いのデバイスが Linux システムを実行している AMD アーキテクチャデバイスの場合、[こちら](https://dl.influxdata.com/influxdb/releases/influxdb2-2.1.1-linux-amd64.tar.gz)をクリックしてダウンロードしてください。

Linux デバイスでの InfluxDB 起動についても、同じ手順が適用されます。解凍後のディレクトリに移動して実行します：

```bash
./influxd
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_86.png" /></div>

### 1.2 InfluxDB のローカルウェブページに入って設定

次に cmd ターミナルを開き、以下のコマンドを入力してコンピュータの IP を照会します

```bash
ipconfig
```

次に、照会した IP をブラウザに入力し、8086 ポートを追加して InfluxDB のメインインターフェースに入ります。

例えば、私の IP が 192.168.7.183 の場合、ブラウザに 192.168.7.183:8086 と入力します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_2.png" /></div>

次に "Get Started" をクリックして、自分の情報を入力します。このステップでは、設定したユーザー名とパスワードを必ず覚えておいてください！！

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_3.png" /></div>

次に "Confgure Later" をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_4.png" /></div>

次に Data をクリックして、自分の情報を入力するステップで設定した "Initial Bucket Name" を確認します。私は reCamera と入力しました

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_5.png" /></div>

次に Setting をクリックしてデータ保持時間を設定します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_6.png" /></div>

API Token をクリックしてデータベースの Token を表示します。これは後続の reCamera の設定とヒートマップウェブページの設定で使用されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_7.png" /></div>

## 2.reCamera 設定

### 2.1 reCamera を Linux デバイスに接続（Linux デバイスを使用していない場合は、次のステップに進み、ステップ 2.2 から開始してください）

reCamera を Linux デバイスに接続する予定の場合、まず Windows または Mac コンピュータを使用して reCamera に接続し、いくつかの設定変更を行うことをお勧めします。そうしないと、reCamera が Linux デバイスに直接接続できません。

Windows を例に取ります。ブラウザに 192.168.42.1 と入力し、"setting" をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_87.png" /></div>

次に "Terminal" をクリックし、アカウント名 "recamera" とパスワードを入力します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_88.png" /></div>

次に recamera ターミナルで実行します（このステップではパスワードを再度入力する必要があります）：

```bash
sudo rootfs_rw on
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_89.png" /></div>

次に実行します：

```bash
sudo vi /mnt/system/usb-ncm.sh
```

次にこの行をコメントアウトします（まずキーボードの "I" キーを押して書き込みモードに入り、方向キーを使ってこの行に移動し、先頭に "#" を追加します）。/etc/run_usb.sh probe acm >> /tmp/ncm.log 2>&1

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_90.png" /></div>

次に保存して終了します（キーボードの ESC キーを押して書き込みモードを終了し、":wq" と入力して保存して終了します）。

:::note
複数回再起動すると無効になる可能性があり、リセットが必要です。
:::

### 2.2 SenseCraft プラットフォームから reCamera にプログラムをインストール

sensecraft プラットフォーム-Workspace-[reCamera](https://sensecraft.seeed.cc/ai/recamera) に入り、"**Real-time heat map local blur processing Grafa**" という名前のデモを見つけて、あなたの reCamera にデプロイします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_8.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_9.png" /></div>

### 2.3 ネットワークに接続して不足しているノードをインストール

ワークスペースに入ると、この警告がポップアップします。これは正常です。まず Close をクリックします。後で reCamera にノードをインストールする必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_10.png" /></div>

reCamera をネットワークに接続します（コンピュータと同じネットワークに接続されていることを確認してください！！これは後で非常に重要です）

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_11.png" /></div>

次に node-red-contrib-influxdb ノードを reCamera にインストールします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_12.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_13.png" /></div>

次に検索ボックスに node-red-contrib-influxdb と入力すると、最初のバージョン 0.7.0 が必要なノードです。Install をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_14.png" /></div>

インストールには時間がかかりますので、しばらくお待ちください。インストールが成功すると、以下のように表示されます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_15.png" /></div>

### 2.4 InfluxDB ノードの設定

この時点で、Write Person Count という名前のノードにいくつかの設定情報を追加する必要があります。このノードを見つけてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_16.png" /></div>

ダブルクリックして設定パネルを開き、サーバーの後ろにある小さな鉛筆アイコンをクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_17.png" /></div>

小さな鉛筆をクリックした後、URL と Token を入力する必要があります

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_18.png" /></div>

ここでの URL は、最初のステップで入力した InfluxDB ウェブページのリンクを入力します。例えば、あなたのウェブページが 192.168.7.183:8086 の場合、URL に `http://192.168.7.183:8086` と入力できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_19.png" /></div>

次に、最初に説明したInfluxDBウェブページのAPI TokensであるTokenを入力します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_20.png" /></div>

Copy to Cilpboardをクリックして、コピーしたTokenを設定に入力します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_21.png" /></div>

入力後、右上のUpdateをクリックします。他の設定は変更しないでください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_22.png" /></div>

次に、右上のdeploymentをクリックして、先ほどの変更を有効にします。警告ポップアップウィンドウが表示されますが、閉じることができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_23.png" /></div>

### 2.5 InfluxDBデータの表示

この時点でInfluxDBインターフェースに入り、データが表示されるかどうかを確認できます。成功した場合、Submitをクリックすると、データの線グラフが表示されます。ここではデータ数をクエリします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_24.png" /></div>

## 3.Grafana設定

### 3.1 Grafanaのインストール

#### 3.1.1 Windowsシステム

Grafanaの公式ウェブサイト[Grafana get started | Cloud, Self-managed, Enterprise](https://grafana.com/get/)にアクセスして、インストールパッケージをローカルにダウンロードします。ここでダウンロードしたバージョンは12.3.0です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_25.png" /></div>

ダウンロードしてインストール後、Grafanaは自動的にバックグラウンドで実行されるはずです。コンピュータの「サービス」を開いて実行されているかどうかを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_26.png" /></div>

#### 3.1.2 Linuxシステム

デバイスがRaspberry PiなどのLinuxを実行するARMベースのデバイスの場合、ダウンロードリンクは[こちら](https://dl.grafana.com/grafana/release/12.3.0/grafana_12.3.0_19497075765_linux_arm64.tar.gz)です。

デバイスがLinuxシステムを実行するAMDベースのデバイスの場合、ダウンロードリンクは[こちら](https://dl.grafana.com/grafana/release/12.3.0/grafana_12.3.0_19497075765_linux_amd64.tar.gz)です。

次に、ダウンロードしたtar.gzファイルを解凍します。

### 3.2 defaults.iniを変更してGrafanaでHTMLの埋め込みを有効にする

#### 3.2.1 Windowsシステム

「grafana/conf」ディレクトリに移動し、「defaults.ini」ファイルを見つけて、右クリックしてメモ帳で開きます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_80.png" /></div>

Ctrl + Fを押して「disable_sanitize_html」を検索し、元の「disable_sanitize_html = false」を「disable_sanitize_html = true」に変更してGrafanaでhtmlの埋め込みを有効にします。変更後、保存して終了します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_81.png" /></div>

#### 3.2.2 Linuxシステム

Linuxシステムの場合、defaults.iniもconfディレクトリにあります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_82.png" /></div>

右クリックして、メモ帳に似たアプリケーションで開くことを選択します。次に、画像内のこの文を見つけて、元の「false」を「true」に変更します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_83.png" /></div>

### 3.3 Grafanaの開始

Windowsシステムの場合、Grafanaをインストールしている場合は、ステップ3.1.1で説明したように「サービス」セクションでGrafanaが実行されているかどうかを確認するだけです。一般的に、Grafanaはインストール後に自動的に開始されます。

Linuxシステムの場合、Grafanaは手動で開始する必要があります。解凍したgrafanaファイルのディレクトリに入った後、次のコマンドを実行します：

```bash
./bin/grafana-server
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_84.png" /></div>

### 3.4 データソースの設定

Grafanaが実行されていることを確認した後、この時点で、ブラウザで`http://localhost:3000`にアクセスして設定用のローカルGrafanaインターフェースにアクセスできます。まず、ログインする必要があります。初期のユーザー名とパスワードは両方ともadminです。ログイン後、システムは新しいパスワードの変更を促します。パスワードを覚えておいてください。アカウントは引き続きadminで変更されません。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_91.png" /></div>

ログイン後、左側の "Data sources" をクリックし、次に "Add new data source" を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_76.png" /></div>

次に "InfluxDB" を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_77.png" /></div>

次に、以下の6つの修正を行う必要があります：
(1) "Query language" を "Flux" として選択
(2) データベースウェブページのURLを入力します。これは最初のステップでアクセスしたInfluxDBウェブページへのリンクです。例えば、ウェブページアドレスが192.168.7.183:8086の場合、入力すべきURLは`http://192.168.7.183:8086`です。
(3) "Basic auth" オプションを無効にする
(4) "Organization" にはデータベース登録時に使用したユーザー名を入力する
(5) Tokenには、ステップ2.3で説明したInfluxDBウェブページで言及されたAPI Tokensを入力する
(6) "Default Bucket" には作成したデータベースの名前を入力する

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_85.png" /></div>

すべての準備ができたら、"Save & Test" をクリックします。テストが成功すると、"datasource is working" と表示されます。この時点で、次のステップに直接進むことができます。これらの設定は自動的に保存されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_79.png" /></div>

### 3.5 ダッシュボードのインポート

Dashboardsをクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_27.png" /></div>

次にNew dashboardをクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_28.png" /></div>

Import dashboardを選択します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_29.png" /></div>

[GitHub](https://github.com/xr686/reCamera-with-Heatmap.git)にアップロードしたプロジェクトをダウンロードしてください。ダウンロードして解凍した後、「Grafana Json File」内の「reCamera Heatmap-1766213863140.json」を見つけてください。このファイルがGrafanaにインポートする必要があるファイルです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_30.png" /></div>

インポート後、以下の効果を確認できるはずです（以下の画面が表示されない場合は、記事の最後のFAQセクションに移動してください。解決策があります）

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_31.png" /></div>

## 4. Pythonキャリブレーションソフトウェアの使用

まず[GitHub](https://github.com/xr686/reCamera-with-Heatmap.git)で私のプロジェクトをダウンロードすることを忘れないでください。解凍して開いた後、「Heatmap area calibration」という名前のフォルダを見つけてください。これには3つのファイルが含まれています：calibration_tool.pyはキャリブレーションプログラム、R1.jpgはreCameraで撮影した元の画像、R2.pngは私が描いた部屋の平面図です。

### 4.1 reCameraから現在のネイティブ解像度画像を取得する

元の解像度画像を取得することは重要です！！手順はより面倒になりますが、ヒートマップの位置精度に直接影響します！操作を辛抱強く行ってください！

#### 4.1.1 reCameraを使用して写真を撮る

reCameraワークスペースインターフェースに戻り、まずプログラムを停止します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_32.png" /></div>

次に、左側のcaptureノードを見つけて、cameraノードの後ろにドラッグし、線で接続します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_33.png" /></div>

次に、ダブルクリックしてcaptureノードを開き、以下の2つのオプションを変更します（このノードの機能は2秒ごとに写真を撮ってreCameraにローカル保存することです）。その後、Finishをクリックして再デプロイし、Runをクリックします。3〜4秒間実行した後、Stop Runningをクリックします（常時実行する必要はありません。そうしないと常に写真を撮り続けます）。次に、撮影した写真をローカルコンピュータに移動します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_34.png" /></div>

#### 4.1.2 reCameraで撮影した写真をコンピュータに移植する

先ほど撮った写真が成功したかどうかを確認しましょう。

Settingをクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_35.png" /></div>

Terminalをクリックして、reCameraアカウントのパスワードを入力してログインします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_36.png" /></div>

次に、以下の2つのコマンドを順番に入力します：

Images フォルダに入る

```bash
cd / && cd userdata/Images/
```

ファイル一覧

```bash
ls
```

すると、システムがいくつかの画像ファイル名を一覧表示するのが確認できます。これらは capture ノードで撮影したばかりの写真です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_37.png" /></div>

先ほどの設定画面に戻り、ssh 接続を開きます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_38.png" /></div>

次に、キーボードで Win R を押し、cmd と入力し、ターミナルで以下を入力します

```bash
scp -r recamera@<reCamera IP>:/userdata/Images "The folder path of the 'Heatmap area calibration' file that you downloaded from GitHub after decompression"
```

これらの IP の reCamera はネットワーク設定で確認できます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_39.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_40.png" /></div>

GitHub からダウンロードして解凍した「Heatmap area calibration」ファイルのフォルダパスです。まず Heatmap area calibration に入り、フォルダ上部のパスボックスをクリックして、パスをコピーします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_41.png" /></div>

例：

```bash
scp -r recamera@10.228.172.71:/userdata/Images "C:\Users\seeed\Desktop\热力图\正式版\reCamera with Heatmap\Heatmap area calibration"
```

次に reCamera のパスワードを入力して、選択したパスにダウンロードします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_42.png" /></div>

先ほどダウンロードしたフォルダに戻ると、ダウンロードしたばかりの Images フォルダが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_43.png" /></div>

今度は私のプロジェクトから元の R1.jpg を削除します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_44.png" /></div>

最新の写真、通常は最後の写真を選択し、それを R1 にリネームします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_45.png" /></div>

次に、この写真を上位ディレクトリに配置します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_46.png" /></div>

### 4.2 部屋の平面図を準備

Windows 標準の描画ツールを使用して描画し、画像として保存して Heatmap area calibration パスに保存するか、既存の部屋の平面図を直接 Heatmap area calibration パスに保存できます。この手順では、私の以前のプロジェクトから R2.png を削除し、あなたの画像を R2 にリネームしてこのパスに保存することも忘れないでください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_47.png" /></div>

### 4.3 キャリブレーション手順の使用

キャリブレーションプログラムは、Heatmap area calibration パス下の calibration_tool.py プログラムです。

ここではデフォルトで Pycharm を使用します。使用前に、Python の OpenCV ライブラリをインストールする必要があります。

```bash
pip install opencv-python
```

注意すべき点が2つあります：まず、2つの画像は同じパス、つまり Heatmap area calibration パス下にある必要があります。次に、画像ファイル名が正しいかどうかを確認してください

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_48.png" /></div>

プログラムが実行されると、カメラのスクリーンショットを表示するウィンドウがポップアップします。この時、マウスで有効エリアをクリックする必要があります。クリック順序は非常に重要です：選択したいエリアの四隅を「左上→右上→右下→左下」の時計回りの順序でクリックしてください。例えば、テーブルの表面のみを表示したい場合は、テーブルの四隅をクリックします。4点をクリックした後、キーボードの任意のキー（スペースなど）を押して次のステップに進みます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_49.png" /></div>

次に、俯瞰図 R2.png を表示する2番目のウィンドウがポップアップします。クリック順序は最初のステップに対応している必要があります：先ほどの4点の対応する位置を地図上でクリックします。例えば、先ほどテーブルの左上角を最初にクリックした場合、今度は地図上でテーブルの左上角をクリックします。4点をクリックした後、任意のキーを押して終了します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_50.png" /></div>

次に、コマンドラインウィンドウ（CMD）に戻ると、スクリプトが自動的に JS コードを生成しているのが確認できます。そのコードを直接コピーして、index.html の `const CALIBRATION = { ... };` を置き換えてください。（次のステップの「5.5 キャリブレートされた座標データ」まで使用されませんので、今は気にしないでください）

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_51.png" /></div>

## 5. ヒートマップページの設定

ヒートマップのウェブ設定も[私の GitHub プロジェクト](https://github.com/xr686/reCamera-with-Heatmap.git)で利用可能です。具体的には heatmap-demo フォルダの index.html ファイルにあります。このファイルのいくつかのセクションも修正する必要があります。そうしないと、正常に動作せず、ヒートマップ座標データを受信できません。

### 5.1 ヒートマップのウェブページパラメータ設定

#### 5.1.1 ヒートマップ画像

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_52.png" /></div>

実際の画像のファイル名に置き換えてください

#### 5.1.2 データベース部分の設定

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_53.png" /></div>

##### パラメータ説明

URL は、開いた InfluxDB のウェブアドレスです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_54.png" /></div>

ORG は、InfluxDB を設定する際のユーザー名です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_55.png" /></div>

BUCKET は、作成した InfluxDB データベースの名前です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_56.png" /></div>

TOKEN は、あなたの InfluxDB API Tokens です。HTML 内の元の 12345678 を実際の Token に置き換えてください

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_57.png" /></div>

#### 5.1.3 熱データの更新間隔とクエリ期間

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_58.png" /></div>

##### パラメータ説明

REFRESH_INTERVAL は更新するミリ秒数を指し、DATA_RANGE は過去のデータのクエリ時間を指します。コード内のデフォルトの「3000」と「-3s」では、「3000」は3000ミリ秒、つまり3秒ごとに更新されることを意味し、「-3s」は過去3秒間の熱座標データをクエリすることを意味します。

##### モード選択

設定可能な2つのモードがあります：

（1）「リアルタイムモード」：熱座標はリアルタイムで更新され、累積重ね合わせなしで以前の座標をクリアします。リアルタイムモードを実現するには、DATA_RANGE を短時間に設定する必要があります。例えば、私のデフォルトの「-3s」は過去3秒間の熱座標データをクエリすることを意味します。例えば、プログラムが現在10秒間実行されている場合、DATA_RANGE を -3s に設定すると、熱図に表示される座標データは8-10秒目のデータであり、以前の1-7秒の座標データは表示されません。

（2）「累積モード」：熱座標はリアルタイムで更新されますが、以前の座標が重ね合わされます。累積モードを実現するには、DATA_RANGE をより長い時間に設定する必要があります。例えば、DATA_RANGE を「-1h」に設定すると、熱図は過去1時間のデータを累積的に表示します。プログラムが2時間実行された後、現在2時間目のデータが表示され、1時間目のデータは表示されません。

#### 5.1.4 カメラ解像度

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_59.png" /></div>

##### パラメータ説明

CAM_WIDTH / CAM_HEIGHT：カメラの実際のストリーミング解像度（例：1920x1080 または 1280x720）をここに入力する必要があります。そうしないと、透視変換が間違ってしまいます。

このパラメータは「4.1.1 reCamera を使用した写真撮影」のステップでも示されています。カメラノードを capture ノードと接続する際、カメラノードの Resolution パラメータを確認できます。これが修正する必要がある解像度パラメータです。ここで 1920×1080 が選択されている場合、コード内で CAM_WIDTH を 1920 に、CAM_HEIGHT を 1080 に修正する必要があります

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_60.png" /></div>

#### 5.1.5 キャリブレーションの座標データ

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_61.png" /></div>

これは、前のステップ「4.3 キャリブレーションプログラムの使用」で Python プログラムが実行された後にコンソールで生成されたコードです。このコードを置き換えてください

#### 5.1.6 熱閾値

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_62.png" /></div>

##### パラメータの説明

感度（最大値）：リアルタイムモード（数点のみ）の場合、最大値は約2に設定します。そうでないと色が薄すぎて見えません。

1時間の蓄積（数千点）の場合、最大値は150以上に設定する必要があります。そうでないとマップが瞬時に赤くなります（露出オーバー）。

### 5.2 ヒートマップの有効化

Win + Rを押し、「cmd」と入力し、パス「heatmap-demo」に入り、次のように入力します

```bash
python -m http.server 8080
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_72.png" /></div>

その後、ブラウザで「[InfluxDB Heatmap (Grafana Fix + 1h Accumulation)](http://localhost:8080/index.html)」のウェブページを開くと、マップが読み込まれているのが確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_73.png" /></div>

この手順はLinuxにも適用されます。

## 6. Grafanaパネルに戻り、最終結果を確認

この時点で、Grafanaパネルで以下の表示が確認できるはずです。問題が発生した場合は、記事の最後にある「よくある質問」セクションを参照してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_74.png" /></div>

## よくある質問

### Grafanaウェブページが開けない

「Services」に入った後、「Grafana」を見つけて右クリックし、「Restart」を選択します。その後、単純に`http://localhost:3000`を再度開きます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_75.png" /></div>

### Grafanaパネルが正しく読み込まれない

Grafanaでリアルタイム熱マップやreCamera リアルタイム画面が読み込まれない、または正しく表示されないことが判明した場合、問題のあるパネルをクリックして更新する必要があります。熱マップパネルを例にします：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_63.png" /></div>

次にRefreshをクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_64.png" /></div>

### 熱マップの読み込みに問題がある

熱マップの読み込みに問題が発生した場合は、まずこの手順のすべての設定項目が正しいかどうかを確認してください。すべての設定項目が正しく、それでも熱マップの読み込みに問題がある場合は、[InfluxDB Heatmap (Grafana Fix 1h Accumulation)](http://localhost:8080/index.html)インターフェースでF12キーを押してウェブコンソールの出力を確認し、トラブルシューティングを行ってください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_65.png" /></div>

### reCamera のリアルタイム画像にカクつきが現れる

reCamera のリアルタイム画像がしばらく実行した後にスタックし、「WebSocket:Disconnected」が表示される場合、これは正常な現象です。reCamera のリソースは限られており、メモリが満杯になります。表示が再開されるまで待ってください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_66.png" /></div>

### Grafanaパネルの「現在の人数」と「今日の人数」が正しく表示されない

これは正常な現象です。ノイズ干渉があるためで、しばらくすると値は正常に戻ります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_67.png" /></div>

### Grafanaパネルの「連続稼働時間」とは何を意味するか

ここでの「連続稼働時間」とは、初日から現在まで、データベースがどのくらい稼働しているかを指します。InfluxDBでreCamera データベースのデータ保持時間を7日に設定しているため、7日後に自動的にクリアされて再計時されます。ここでは、InfluxDBの各データベースのデータ保存時間を自由に設定できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_68.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_69.png" /></div>

### データをエクスポートできるか

はい、InfluxDB Exploreインターフェースで必要なデータを選択し、Submitをクリックしてから、Download CSVをクリックする必要があります

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_70.png" /></div>

### IPアドレスが変更された場合、例えば異なるネットワークに切り替えた場合、これらのセクションを適宜修正する必要があります。

（1）Node-REDの「InfluxDB Out」ノードのIPアドレスと認証トークン  
（2）InfluxDBデータベースのログインIP、例：http://10.241.1.98:8086/  
（3）GrafanaのデータソースのIP    
（4）ヒートマップのHTMLコード内のIP


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
