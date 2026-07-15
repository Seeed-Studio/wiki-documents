---
description: reCamera を使用して、リアルタイムヒートマップ + ローカルぼかし処理 + Grafana データダッシュボード連携を実現します
title: リアルタイムヒートマップと Grafana データダッシュボードの連携
keywords:
  - reCamera
  - heatmap
  - Grafana
  - InfluxDB
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/headmap.gif
slug: /integration_of_real-time_heat_map_with_grafana_data_dashboard
sku: 102991896, 108990119, 100029708
sidebar_position: 10
last_update:
  date: 12/21/2025
  author: Xinrui Wu
createdAt: '2025-12-22'
updatedAt: '2026-04-20'
url: https://wiki.seeedstudio.com/ja/integration_of_real-time_heat_map_with_grafana_data_dashboard/
---

# リアルタイムヒートマップと Grafana データダッシュボードの連携

## はじめに

このプロジェクトでは、reCamera に内蔵されている YOLO11n モデルを使用してターゲット検出を行います。人物ターゲットに対してぼかし処理を行い、ヒートマップ効果を表示します。これらはすべて reCamera 内でローカル処理されます！ そして reCamera は、検出したデータをローカルで動作している Influxdb データベースに送信します。その後、Grafana が Influxdb データベースからデータを読み取り、リアルタイムのデータダッシュボードを表示します。

このデモを完了した後の使用イメージは次のとおりです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/headmap.gif" /></div>

## ハードウェアの準備

reCamera 1 台
コンピュータ 1 台

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

## 1.InfluxDB の設定

### 1.1 InfluxDB2-2.1.1 をダウンロードして起動する

[こちらのリンク](https://dl.influxdata.com/influxdb/releases/influxdb2-2.1.1-windows-amd64.zip)にアクセスし、ダウンロードして解凍します。Win + R を押してコマンドプロンプトを開き、ファイルを解凍したディレクトリに移動して、最後に次を入力します：

```bash
influxd
```

次の図のように表示されれば、起動は成功です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_1.png" /></div>

お使いのデバイスが Raspberry Pi などの Linux システムを実行している ARM アーキテクチャデバイスの場合、ダウンロードリンクは[こちら](https://dl.influxdata.com/influxdb/releases/influxdb2-2.1.1-linux-arm64.tar.gz)です。  

お使いのデバイスが Linux システムを実行している AMD アーキテクチャデバイスの場合は、[こちら](https://dl.influxdata.com/influxdb/releases/influxdb2-2.1.1-linux-amd64.tar.gz)をクリックしてダウンロードしてください。

Linux デバイスでの InfluxDB の起動手順も同様です。解凍後のディレクトリに入って実行します：

```bash
./influxd
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_86.png" /></div>

### 1.2 InfluxDB のローカル Web ページにアクセスして設定する

次に cmd ターミナルを開き、以下のコマンドを入力してコンピュータの IP を確認します。

```bash
ipconfig
```

その後、取得した IP をブラウザに入力し、ポート 8086 を付けて InfluxDB のメインインターフェースに入ります。

例えば、私の IP が 192.168.7.183 の場合、ブラウザに 192.168.7.183:8086 と入力します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_2.png" /></div>

次に "Get Started" をクリックし、自分の情報を入力します。このステップでは、設定したユーザー名とパスワードを必ず覚えておいてください!!

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_3.png" /></div>

その後 "Confgure Later" をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_4.png" /></div>

次に Data をクリックすると、先ほど自分の情報を入力するステップで設定した "Initial Bucket Name" が表示されます。私は reCamera と入力しました。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_5.png" /></div>

次に Setting をクリックして、データの保持期間を設定します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_6.png" /></div>

API Token をクリックして、データベースの Token を確認します。これは後続の reCamera の設定およびヒートマップ Web ページの設定で使用します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_7.png" /></div>

## 2.reCamera の設定

### 2.1 reCamera を Linux デバイスに接続する（Linux デバイスを使用していない場合は、次のステップに進み、2.2 から開始してください）

reCamera を Linux デバイスに接続する予定がある場合は、まず Windows または Mac コンピュータを使用して reCamera に接続し、いくつかの設定変更を行うことをお勧めします。そうしないと、reCamera は Linux デバイスに直接接続できません。

ここでは Windows を例にします。ブラウザに 192.168.42.1 と入力し、"setting" をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_87.png" /></div>

次に "Terminal" をクリックし、アカウント名 "recamera" とパスワードを入力します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_88.png" /></div>

その後、recamera ターミナル上で次を実行します（このステップでは再度パスワードの入力が必要です）:

```bash
sudo rootfs_rw on
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_89.png" /></div>

次に以下を実行します：

```bash
sudo vi /mnt/system/usb-ncm.sh
```

その後、この行をコメントアウトします（まずキーボードの "I" キーを押して書き込みモードに入り、方向キーでこの行に移動し、先頭に "#" を追加します）。/etc/run_usb.sh probe acm >> /tmp/ncm.log 2>&1

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_90.png" /></div>

その後、保存して終了します（キーボードの ESC キーを押して書き込みモードを終了し、":wq" と入力して保存して終了します）。

:::note
複数回再起動すると無効になる場合があり、その際は再設定が必要です。
:::

### 2.2 reCamera に SenseCraft プラットフォームからプログラムをインストールする

[SenseCraft AI プラットフォーム](https://sensecraft.seeed.cc/ai)で **`Applications`** > **`Application Square`** に移動し、検索ボックスに「Real-time Crowd Heatmap」と入力します。"Real-time Crowd Heatmap" というアプリケーションを見つけて、reCamera にデプロイします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_92.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_9.png" /></div>

### 2.3 ネットワークに接続し、欠けているノードをインストールする

ワークスペースに入ると、この警告がポップアップ表示されます。これは正常です。まず Close をクリックします。後で reCamera にノードをインストールする必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_10.png" /></div>

reCamera をネットワークに接続します（必ずコンピュータと同じネットワークに接続してください!! これは後で非常に重要です）

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_11.png" /></div>

次に、node-red-contrib-influxdb ノードを reCamera にインストールします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_12.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_13.png" /></div>

その後、検索ボックスに node-red-contrib-influxdb と入力します。最初に表示されるバージョン 0.7.0 が必要なノードです。Install をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_14.png" /></div>

インストールには時間がかかるので、しばらくお待ちください。インストールが成功すると、次のように表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_15.png" /></div>

### 2.4 InfluxDB ノードを設定する

この時点で、Write Person Count という名前のノードにいくつかの設定情報を追加する必要があります。このノードを探します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_16.png" /></div>

ダブルクリックして設定パネルを開き、サーバーの後ろにある小さな鉛筆アイコンをクリックします。  

:::note
その前に、小さな鉛筆の下にある "Organization" と "Bucket" オプションの内容が、InfluxDB で設定したものと同じであることを確認してください!!! "Organization" は InfluxDB のユーザー名で、"Bucket" は作成したデータベース名です。
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_17.png" /></div>

小さな鉛筆をクリックした後、URL と Token を入力する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_18.png" /></div>

ここでの URL には、最初のステップで入力した InfluxDB の Web ページのリンクを入力します。例えば、Web ページが 192.168.7.183:8086 の場合、URL には `http://192.168.7.183:8086` を入力します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_19.png" /></div>

次に Token を入力します。これは、最初に説明した InfluxDB の Web ページにある API Tokens のことです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_20.png" /></div>

Copy to Cilpboard をクリックし、コピーした Token を設定画面に貼り付けます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_21.png" /></div>

入力が完了したら、右上の Update をクリックします。他の設定は変更しないでください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_22.png" /></div>

次に、右上の deployment をクリックして、先ほどの変更を有効にします。警告のポップアップウィンドウが表示されますが、閉じて構いません。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_23.png" /></div>

### 2.5 InfluxDB データの表示

この時点で InfluxDB のインターフェースに入り、データが表示されているか確認できます。成功していれば、Submit をクリックするとデータの折れ線グラフが表示されます。ここではデータの件数をクエリしています。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_24.png" /></div>

## 3.Grafana の設定

### 3.1 Grafana のインストール

#### 3.1.1 Windows システム

Grafana の公式サイト [Grafana get started | Cloud, Self-managed, Enterprise](https://grafana.com/get/) にアクセスして、インストールパッケージをローカルにダウンロードします。ここでダウンロードしたバージョンは 12.3.0 です。

:::note
ここでは必ず Grafana を C ドライブにインストールしてください!!! そうしないと、後で設定ファイルを変更できません。
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_25.png" /></div>

ダウンロードとインストールが完了すると、Grafana は自動的にバックグラウンドで実行されているはずです。PC の「サービス」を開いて、実行中かどうかを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_26.png" /></div>

#### 3.1.2 Linux システム

お使いのデバイスが Raspberry Pi などの Linux を実行する ARM ベースのデバイスの場合、ダウンロードリンクは[こちら](https://dl.grafana.com/grafana/release/12.3.0/grafana_12.3.0_19497075765_linux_arm64.tar.gz)です。  

お使いのデバイスが Linux システムを実行する AMD ベースのデバイスの場合は、[こちら](https://dl.grafana.com/grafana/release/12.3.0/grafana_12.3.0_19497075765_linux_amd64.tar.gz)からダウンロードしてください。

その後、ダウンロードした tar.gz ファイルを解凍します。

### 3.2 defaults.ini を変更して Grafana で HTML 埋め込みを有効にする

#### 3.2.1 Windows システム

"grafana/conf" ディレクトリに移動し、"defaults.ini" ファイルを見つけて、右クリックしてメモ帳で開きます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_80.png" /></div>

Ctrl + F を押して "disable_sanitize_html" を検索し、元の "disable_sanitize_html = false" を "disable_sanitize_html = true" に変更して、Grafana で html の埋め込みを有効にします。変更後、保存して終了します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_81.png" /></div>

#### 3.2.2 Linux システム

Linux システムの場合も、defaults.ini は conf ディレクトリ内にあります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_82.png" /></div>

右クリックして、メモ帳に似たアプリケーションで開くことを選択します。その後、画像内のこの文を探し、元の "false" を "true" に変更します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_83.png" /></div>

### 3.3 Grafana の起動

Windows システムの場合、Grafana をインストールしていれば、3.1.1 のステップで説明したように「サービス」セクションで Grafana が実行中かどうかを確認するだけで構いません。通常、Grafana はインストール後に自動的に起動します。  

Linux システムの場合、Grafana は手動で起動する必要があります。解凍した grafana フォルダのディレクトリに入った後、次のコマンドを実行します。

```bash
./bin/grafana-server
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_84.png" /></div>

### 3.4 データソースの設定

Grafana が実行されていることを確認したら、ブラウザで `http://localhost:3000` にアクセスしてローカルの Grafana インターフェースを開き、設定を行います。まずログインする必要があります。初期のユーザー名とパスワードはどちらも admin です。ログイン後、新しいパスワードの変更を求められますので、忘れないようにしてください。アカウント名は引き続き admin のままで変更されません。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_91.png" /></div>

ログイン後、左側の "Data sources" をクリックし、"Add new data source" を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_76.png" /></div>

次に "InfluxDB" を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_77.png" /></div>

次に、以下の 6 つの項目を修正する必要があります。
(1) "Query language" を "Flux" に選択
(2) データベース Web ページの URL を入力します。これは、最初のステップでアクセスした InfluxDB Web ページのリンクです。例えば、Web ページアドレスが 192.168.7.183:8086 の場合、URL に入力すべきなのは `http://192.168.7.183:8086` です。
(3) "Basic auth" オプションを無効にする
(4) "Organization" には、データベース登録時に使用したユーザー名を入力します。
(5) Token には、2.3 ステップで説明した InfluxDB Web ページにある API Tokens を入力します。
(6) "Default Bucket" には、作成したデータベースの名前を入力します。  

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_85.png" /></div>

すべての準備が整ったら、"Save & Test" をクリックします。テストが成功すると "datasource is working" と表示されます。この時点で、そのまま次のステップに進むことができます。これらの設定は自動的に保存されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_79.png" /></div>

### 3.5 ダッシュボードのインポート

Dashboards をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_27.png" /></div>

次に New dashboard をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_28.png" /></div>

Import dashboard を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_29.png" /></div>

[GitHub](https://github.com/xr686/reCamera-with-Heatmap.git) にアップロードしたプロジェクトをダウンロードしてください。ダウンロードして解凍した後、その中の "Grafana Json File" フォルダを見つけ、その中にある "reCamera Heatmap-1766213863140.json" を探します。このファイルが、Grafana にインポートする必要のあるファイルです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_30.png" /></div>

インポート後、次のような画面が表示されるはずです（もし以下の画面が表示されない場合は、記事の最後にある FAQ セクションに進んでください。解決方法が記載されています）。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_31.png" /></div>

## 4. Python キャリブレーションソフトの使用

まず、[GitHub](https://github.com/xr686/reCamera-with-Heatmap.git) から私のプロジェクトをダウンロードすることを忘れないでください。解凍して開いたら、"Heatmap area calibration" という名前のフォルダを探します。その中には 3 つのファイルがあり、calibration_tool.py がキャリブレーションプログラム、R1.jpg が reCamera で撮影した元画像、R2.png が私が作成した部屋の間取り図です。

### 4.1 reCamera から現在のネイティブ解像度の画像を取得する

元の解像度の画像を取得することは重要です!! 手順は少し面倒になりますが、ヒートマップの位置精度に直接影響します！根気よく操作してください！

#### 4.1.1 reCamera で写真を撮る

reCamera のワークスペース画面に戻り、まずプログラムを停止します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_32.png" /></div>

次に、左側で capture ノードを見つけ、それを camera ノードの後ろにドラッグし、線で接続します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_33.png" /></div>

その後、capture ノードをダブルクリックして開き、次の 2 つのオプションを変更します（このノードの機能は、2 秒ごとに写真を 1 枚撮影し、それを reCamera 内にローカル保存することです）。変更後、Finish をクリックして再デプロイし、Run をクリックします。3〜4 秒ほど実行したら Stop Running をクリックします（ずっと実行し続ける必要はありません。そうしないと撮影が止まりません）。次に、撮影された画像をローカル PC に移動します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_34.png" /></div>

#### 4.1.2 reCamera で撮影した画像を PC に移す

先ほど撮影した写真が正常に撮れているか確認してみましょう。

Setting をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_35.png" /></div>

Terminal をクリックし、reCamera のアカウントパスワードを入力してログインします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_36.png" /></div>

次に、以下の 2 つのコマンドを順番に入力します：

Images フォルダに入ります

```bash
cd / && cd userdata/Images/
```

ファイル一覧を表示

```bash
ls
```

すると、システムがいくつかの画像ファイル名を一覧表示しているのが確認できるはずです。これらが、先ほど capture ノードで撮影した画像です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_37.png" /></div>

先ほどの setting インターフェースに戻り、ssh 接続を開きます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_38.png" /></div>

次にキーボードで Win + R を押し、cmd と入力してから、ターミナルで次を入力します

```bash
scp -r recamera@<reCamera IP>:/userdata/Images "The folder path of the 'Heatmap area calibration' file that you downloaded from GitHub after decompression"
```

これらの IP の reCamera は、ネットワーク設定で確認できます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_39.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_40.png" /></div>

GitHub からダウンロードして解凍した「Heatmap area calibration」ファイルのフォルダパスについて、まず Heatmap area calibration に入ってフォルダ上部のパス欄をクリックし、そのパスをコピーします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_41.png" /></div>

例えば：

```bash
scp -r recamera@10.228.172.71:/userdata/Images "C:\Users\seeed\Desktop\热力图\正式版\reCamera with Heatmap\Heatmap area calibration"
```

その後、reCamera のパスワードを入力して、任意のパスにダウンロードします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_42.png" /></div>

先ほどダウンロードしたフォルダに戻ると、ダウンロードしたばかりの Images フォルダが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_43.png" /></div>

ここで、プロジェクト内の元の R1.jpg を削除します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_44.png" /></div>

最新の画像、通常は一番最後の画像を選択し、それを R1 にリネームします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_45.png" /></div>

そしてこの画像を 1 つ上のディレクトリに配置します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_46.png" /></div>

### 4.2 部屋の平面図を準備する

Windows 標準の描画ツールを使って図面を作成し、画像として保存して Heatmap area calibration パス配下に保存してもよいですし、既存の部屋の平面図をそのまま Heatmap area calibration パス配下に保存してもかまいません。このステップでは、以前のプロジェクトの R2.png を削除し、自分の画像を R2 にリネームして、このパス配下に保存することも忘れないでください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_47.png" /></div>

### 4.3 キャリブレーション手順の使用

キャリブレーションプログラムとは、Heatmap の area calibration パス配下にある `calibration_tool.py` プログラムのことです。

ここではデフォルトで Pycharm を使用します。使用前に、Python の OpenCV ライブラリをインストールする必要があります。

```bash
pip install opencv-python
```

注意点は 2 つあります。1 つ目は、2 枚の画像が同じパス、つまり Heatmap area calibration パス配下にある必要があること。2 つ目は、画像ファイル名が正しいかどうかを確認することです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_48.png" /></div>

プログラムを実行すると、カメラのスクリーンショットを表示するウィンドウがポップアップします。このとき、マウスで有効エリアをクリックする必要があります。クリックする順番が非常に重要です。選択したいエリアの 4 つの角を「左上 → 右上 → 右下 → 左下」の時計回りの順番でクリックしてください。例えば、テーブルの天面だけを表示したい場合は、テーブルの 4 つの角をクリックします。4 点をクリックしたら、キーボードの任意のキー（スペースなど）を押して次のステップに進みます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_49.png" /></div>

次に、2 つ目のウィンドウがポップアップし、俯瞰図 R2.png が表示されます。クリックの順番は 1 つ目のステップと対応している必要があります。先ほどマップ上でクリックした 4 点に対応する位置をクリックしてください。例えば、先ほど最初にテーブルの左上をクリックした場合、今度はマップ上のテーブル左上をクリックします。4 点をクリックしたら、任意のキーを押して終了します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_50.png" /></div>

その後、コマンドラインウィンドウ（CMD）に戻ると、スクリプトが自動的に 1 つの JS コードを生成しているのがわかります。そのコードをそのままコピーし、index.html 内の `const CALIBRATION = { ... };` を置き換えれば完了です。（これは次のステップ「5.5 キャリブレーション済み座標データ」で使用するまで出番はないので、今は気にしなくて構いません）

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_51.png" /></div>

## 5. ヒートマップページの設定

ヒートマップ用の Web 設定も [my GitHub project](https://github.com/xr686/reCamera-with-Heatmap.git) にあり、具体的には heatmap-demo フォルダ内の index.html ファイルにあります。このファイル内のいくつかのセクションも変更する必要があります。そうしないと、正常に動作せず、ヒートマップの座標データを受信できません。

### 5.1 ヒートマップ用 Web ページパラメータの設定

#### 5.1.1 ヒートマップ画像

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_52.png" /></div>

実際の画像のファイル名に置き換えてください

#### 5.1.2 データベース部分の設定

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_53.png" /></div>

##### パラメータ説明

URL は、あなたが開いている InfluxDB の Web アドレスです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_54.png" /></div>

ORG は、InfluxDB を設定したときのユーザー名です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_55.png" /></div>

BUCKET は、InfluxDB で作成したデータベースの名前です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_56.png" /></div>

TOKEN は InfluxDB の API Tokens です。HTML 内の元の 12345678 を、実際の Token に置き換えてください

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_57.png" /></div>

#### 5.1.3 熱データの更新間隔とクエリ期間

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_58.png" /></div>

##### パラメータ説明

REFRESH_INTERVAL は更新までのミリ秒数を表し、DATA_RANGE は過去データのクエリ時間を表します。コード内のデフォルト値は "3000" と "-3s" で、"3000" は 3000 ミリ秒、つまり 3 秒ごとに更新することを意味し、"-3s" は過去 3 秒間の熱座標データをクエリすることを意味します。

##### モード選択

設定可能なモードは 2 つあります：

(1)「リアルタイムモード」：熱座標がリアルタイムで更新され、以前の座標は累積されずにクリアされます。リアルタイムモードを実現するには、DATA_RANGE を短い時間に設定する必要があります。例えば、デフォルトの "-3s" は過去 3 秒間の熱座標データをクエリすることを意味します。例えば、プログラムが現在 10 秒間実行されている場合、DATA_RANGE を -3s に設定すると、ヒートマップに表示される座標データは 8〜10 秒目のデータであり、1〜7 秒目の座標データは表示されません。

(2)「累積モード」：熱座標はリアルタイムで更新されますが、以前の座標が重ねて表示されます。累積モードを実現するには、DATA_RANGE をより長い時間に設定する必要があります。例えば、DATA_RANGE を "-1h" に設定すると、ヒートマップは過去 1 時間のデータを累積表示します。プログラムが 2 時間実行された後は、現在 2 時間目のデータが表示され、最初の 1 時間のデータは表示されません。

#### 5.1.4 カメラ解像度

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_59.png" /></div>

##### パラメータ説明

CAM_WIDTH / CAM_HEIGHT：ここにはカメラの実際のストリーミング解像度（例：1920x1080 や 1280x720）を入力する必要があります。そうしないと、透視変換が誤ってしまいます。

このパラメータは「4.1.1 reCamera を使って写真を撮る」のステップでも登場しました。カメラノードを capture ノードに接続すると、カメラノードの Resolution パラメータを確認できます。これが変更する必要のある解像度パラメータです。ここで 1920 × 1080 を選択した場合、コード内では CAM WIDTH を 1920、CAM HEIGHT を 1080 に変更する必要があります

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_60.png" /></div>

#### 5.1.5 キャリブレーションの座標データ

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_61.png" /></div>

これは、前のステップ「4.3 キャリブレーションプログラムの使用」で Python プログラムを実行した後にコンソールで生成されるコードです。このコードを置き換えてください。

#### 5.1.6 サーマルしきい値

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_62.png" /></div>

##### パラメータの説明

Sensitivity（最大値）：リアルタイムモード（ポイントが少ない）の場合、`max` は約 2 に設定します。そうしないと色が薄すぎて見えません。

1 時間の累積（数千ポイント）の場合、`max` は 150 以上に設定する必要があります。そうしないとマップが一瞬で真っ赤（露出オーバー）になります。

### 5.2 ヒートマップを有効化する

Win + R を押して「cmd」と入力し、「heatmap-demo」のパスに移動してから、次を入力します。

```bash
python -m http.server 8080
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_72.png" /></div>

その後、ブラウザで "[InfluxDB Heatmap (Grafana Fix + 1h Accumulation)](http://localhost:8080/index.html)" のウェブページを開くと、マップが読み込まれていることが確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_73.png" /></div>

この手順は Linux にも適用できます。

## 6. Grafana パネルに戻って最終結果を確認する

この時点で、Grafana パネル上に次のような表示が見えるはずです。問題が発生した場合は、記事の最後にある「よくある質問」セクションを参照してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_74.png" /></div>

## よくある質問

### Grafana のウェブページが開けない

"Services" に入り、"Grafana" を見つけて右クリックし、"Restart" を選択します。その後、`http://localhost:3000` を再度開くだけです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_75.png" /></div>

### Grafana パネルが正しく読み込まれない

Grafana でリアルタイムサーマルマップや reCamera のリアルタイム画面が読み込めない、または正しく表示されない場合は、問題のあるパネルをクリックして更新する必要があります。ここではサーマルマップパネルを例に説明します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_63.png" /></div>

次に Refresh をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_64.png" /></div>

### サーマルマップの読み込みに問題がある

サーマルマップの読み込みに問題が発生した場合は、まずこのステップのすべての設定項目が正しいかどうかを確認してください。すべての設定項目が正しいにもかかわらずサーマルマップの読み込みに問題がある場合は、[InfluxDB Heatmap (Grafana Fix 1h Accumulation)](http:// localhost:8080/index.html) インターフェースで F12 キーを押して、トラブルシューティングのために Web コンソールの出力を確認してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_65.png" /></div>

### reCamera のリアルタイム映像がカクつく

reCamera のリアルタイム映像がフリーズし、しばらく動作した後に "WebSocket:Disconnected" と表示される場合、これは正常な現象です。reCamera のリソースには限りがあり、メモリがいっぱいになってしまいます。表示が再開するまでお待ちください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_66.png" /></div>

### Grafana パネルの「Current Number」と「Number of People Today」の表示が正しくない

これは正常な現象です。ノイズによる干渉があるためで、しばらくすると値は正常に戻ります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_67.png" /></div>

### Grafana パネルの「continuous running time」とは何を意味しますか

ここでいう「continuous running time」とは、データベースが初日から現在までどれくらいの期間稼働しているかを指します。InfluxDB で reCamera データベースのデータ保持期間を 7 日に設定しているため、7 日後には自動的にクリアされて再カウントされます。InfluxDB では、各データベースのデータ保存期間を自由に設定できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_68.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_69.png" /></div>

### データをエクスポートできるか

はい。InfluxDB の Explore インターフェースで必要なデータを選択し、Submit をクリックしてから、Download CSV をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_70.png" /></div>

### IP アドレスが変更された場合（別のネットワークに切り替えた場合など）は、これらの項目をそれに応じて変更する必要があります。

(1) Node-RED の "InfluxDB Out" ノードの IP アドレスと検証トークン  
(2) InfluxDB データベースのログイン IP（例： http://10.241.1.98:8086/）  
(3) Grafana のデータソースの IP    
(4) ヒートマップの HTML コード内の IP


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
