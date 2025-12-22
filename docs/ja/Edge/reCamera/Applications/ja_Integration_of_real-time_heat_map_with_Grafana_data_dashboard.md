---
description: reCamera を使用してリアルタイムヒートマップ + ローカルブラー処理 + Grafana データダッシュボード統合を実現
title: リアルタイムヒートマップと Grafana データダッシュボードの統合
keywords:
  - reCamera
  - heatmap
  - Grafana
  - InfluxDB
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/headmap.gif
slug: /ja/Integration_of_real-time_heat_map_with_Grafana_data_dashboard
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

ダウンロードリンク https://dl.influxdata.com/influxdb/releases/influxdb2-2.1.1-windows-amd64.zip にアクセスし、ダウンロードして解凍します。Win + R を押してコマンドプロンプトを開き、ファイルが解凍されたディレクトリに移動し、最後に以下を入力します：

```bash
influxd
```

以下の図に示すように、起動が成功しました

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_1.png" /></div>

### 1.2 InfluxDB のローカルウェブページに入って設定

次に cmd ターミナルを開き、以下のコマンドを入力してコンピュータの IP を照会します

```bash
ipconfig
```

次に、照会された IP をブラウザに入力し、8086 ポートを追加して InfluxDB のメインインターフェースに入ります。

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

### 2.1 reCamera に SenseCraft プラットフォームからプログラムをインストール

sensecraft プラットフォーム-Workspace-reCamera（[reCamera](https://sensecraft.seeed.cc/ai/recamera)）に入り、"**Real-time heat map local blur processing Grafa**" という名前のデモを見つけて、あなたの reCamera にデプロイします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_8.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_9.png" /></div>

### 2.2 ネットワークに接続して不足しているノードをインストール

ワークスペースに入った後、この警告がポップアップします。これは正常です。まず Close をクリックします。後で reCamera にノードをインストールする必要があります。

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

### 2.3 InfluxDB ノードを設定

この時点で、Write Person Count という名前のノードにいくつかの設定情報を追加する必要があります。このノードを見つけてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_16.png" /></div>

ダブルクリックして設定パネルを開き、サーバーの後ろにある小さな鉛筆アイコンをクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_17.png" /></div>

小さな鉛筆をクリックした後、URL と Token を入力する必要があります

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_18.png" /></div>

ここでの URL は、最初のステップで入力した InfluxDB ウェブページのリンクを入力します。例えば、あなたのウェブページが 192.168.7.183:8086 の場合、URL には http://192.168.7.183:8086 と入力できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_19.png" /></div>

次に Token を入力します。これは最初に説明した InfluxDB ウェブページの API Tokens です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_20.png" /></div>

Copy to Cilpboard をクリックして、コピーした Token を設定に入力します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_21.png" /></div>

入力後、右上の Update をクリックします。他の設定は変更しないでください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_22.png" /></div>

次に右上のデプロイをクリックして、今行った変更を有効にします。警告ポップアップウィンドウが表示されますが、閉じることができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_23.png" /></div>

### 2.4 InfluxDB データを表示

この時点で InfluxDB インターフェースに入ってデータが表示されるかどうかを確認できます。成功した場合、Submit をクリックするとデータ線グラフが表示されます。ここではデータの数を照会します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_24.png" /></div>

## 3.Grafana 設定

### 3.1 Grafana のインストール

Grafana の公式ウェブサイト [Grafana get started | Cloud, Self-managed, Enterprise](https://grafana.com/get/) に入り、インストールパッケージをローカルにダウンロードします。ここでダウンロードしたバージョンは 12.3.0 です

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_25.png" /></div>

ダウンロードしてインストールした後、Grafana はバックグラウンドで自動的に実行されるはずです。コンピュータの「サービス」を開いて実行されているかどうかを確認できます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_26.png" /></div>

### 3.2 ダッシュボードのインポート

この時点で Grafana が実行されていることが確認できたら、ブラウザで http://localhost:3000/ にアクセスしてローカル Grafana インターフェースに入り設定を行うことができます。Dashboards をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_27.png" /></div>

次に New dashboard をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_28.png" /></div>

Import dashboard を選択します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_29.png" /></div>

https://github.com/xr686/reCamera-with-Heatmap.git にアップロードした私のプロジェクトをダウンロードしてください。ダウンロードして解凍した後、「Grafana Json File」フォルダを見つけて、その中にある「reCamera Heatmap-1766213863140.json」を探してください。このファイルが Grafana にインポートする必要があるファイルです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_30.png" /></div>

インポート後、以下のような効果が見えるはずです（以下の画面が表示されない場合は、記事の最後にある FAQ セクションに移動してください。解決策があります）

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_31.png" /></div>

## 4. Python キャリブレーションソフトウェアの使用

まず、https://github.com/xr686/reCamera-with-Heatmap.git にある私の GitHub プロジェクトをダウンロードすることを忘れないでください。解凍して開いた後、「Heatmap area calibration」という名前のフォルダを見つけてください。このフォルダには3つのファイルが含まれています：calibration_tool.py はキャリブレーションプログラム、R1.jpg は reCamera で撮影した元の画像、R2.png は私が描いた部屋の平面図です。

### 4.1 reCamera から現在のネイティブ解像度画像を取得する

元の解像度画像を取得することは重要です！！手順は少し面倒になりますが、ヒートマップの位置精度に直接影響します！操作を辛抱強く行ってください！

#### 4.1.1 reCamera を使用して写真を撮る

reCamera ワークスペースインターフェースに戻り、まずプログラムを停止します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_32.png" /></div>

次に左側の capture ノードを見つけて、camera ノードの後ろにドラッグし、線で接続します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_33.png" /></div>

次に capture ノードをダブルクリックして開き、以下の2つのオプションを変更します（このノードの機能は2秒ごとに写真を撮り、reCamera にローカル保存することです）。その後 Finish をクリックして再デプロイし、Run をクリックします。3〜4秒間実行した後、Stop Running をクリックします（常時実行する必要はありません。そうしないと常に写真を撮り続けます）。次に、撮影した写真をローカルコンピュータに移動します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_34.png" /></div>

#### 4.1.2 reCamera で撮影した写真をコンピュータに移植する

先ほど撮った写真が成功したかどうか確認しましょう。

Setting をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_35.png" /></div>

Terminal をクリックして、reCamera アカウントのパスワードを入力してログインします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_36.png" /></div>

次に以下の2つのコマンドを順番に入力します：

Images フォルダに入る

```bash
cd / && cd userdata/Images/
```

ファイル一覧表示

```bash
ls
```

すると、システムがいくつかの画像ファイル名をリストアップするのが見えるはずです。これらは capture ノードで撮影したばかりの写真です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_37.png" /></div>

先ほどの設定インターフェースに戻り、ssh 接続を開きます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_38.png" /></div>

次にキーボードで Win R を押し、cmd と入力し、ターミナルで以下を入力します

```bash
scp -r recamera@<reCamera IP>:/userdata/Images "The folder path of the 'Heatmap area calibration' file that you downloaded from GitHub after decompression"
```

これらの IP の reCamera はネットワーク設定で見つけることができます

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

先ほどダウンロードしたフォルダに戻ると、ダウンロードしたばかりの Images フォルダが見えます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_43.png" /></div>

今度は私のプロジェクトから元の R1.jpg を削除します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_44.png" /></div>

最新の写真、通常は最後の写真を選択し、R1 にリネームします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_45.png" /></div>

次にこの写真を上位ディレクトリに配置します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_46.png" /></div>

### 4.2 部屋の平面図を準備する

Windows の標準描画ツールを使用して描画し、画像として保存して Heatmap area calibration パスに保存するか、既存の部屋の平面図を直接 Heatmap area calibration パスに保存することができます。この手順では、私の以前のプロジェクトから R2.png を削除し、あなたの画像を R2 にリネームしてこのパスに保存することも忘れないでください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_47.png" /></div>

### 4.3 キャリブレーション手順の使用

キャリブレーションプログラムは、Heatmap area calibration パス下の calibration_tool.py プログラムです。

ここではデフォルトで Pycharm を使用します。使用前に Python の OpenCV ライブラリをインストールする必要があります。

```bash
pip install opencv-python
```

注意すべき点が2つあります：まず、2つの画像は同じパス、つまり Heatmap area calibration パス下にある必要があります。次に、画像ファイル名が正しいかどうかを確認してください

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_48.png" /></div>

プログラムが実行されると、カメラのスクリーンショットを表示するウィンドウがポップアップします。この時、マウスで有効エリアをクリックする必要があります。クリック順序は非常に重要です：選択したいエリアの四隅を「左上→右上→右下→左下」の時計回りの順序でクリックしてください。例えば、テーブルの表面のみを表示したい場合は、テーブルの四隅をクリックします。4点をクリックした後、キーボードの任意のキー（スペースなど）を押して次のステップに進みます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_49.png" /></div>

次に、俯瞰図 R2.png を表示する2番目のウィンドウがポップアップします。クリック順序は最初のステップに対応している必要があります：先ほどの4点の対応する位置を地図上でクリックします。例えば、先ほどテーブルの左上角を最初にクリックした場合、今度は地図上のテーブルの左上角をクリックします。4点をクリックした後、任意のキーを押して終了します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_50.png" /></div>

次にコマンドラインウィンドウ（CMD）に戻ると、スクリプトが自動的に JS コードを生成しているのが見えます。そのコードを直接コピーして、あなたの index.html の `const CALIBRATION = { ... };` を置き換えてください。（次のステップの「5.5 キャリブレーションされた座標データ」まで使用されませんので、気にしないでください）

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_51.png" /></div>

## 5. ヒートマップページの設定

ヒートマップのウェブ設定も https://github.com/xr686/reCamera-with-Heatmap.git にある私の GitHub プロジェクトで利用可能です。具体的には heatmap-demo フォルダの index.html ファイルにあります。このファイルのいくつかのセクションも変更する必要があります。そうしないと、正常に動作せず、ヒートマップ座標データを受信できません。

### 5.1 ヒートマップのウェブページパラメータ設定

#### 5.1.1 ヒートマップ画像

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_52.png" /></div>

実際の画像のファイル名に置き換えてください

#### 5.1.2 データベース部分の設定

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_53.png" /></div>

##### パラメータ説明

URL は開いた InfluxDB のウェブアドレスです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_54.png" /></div>

ORG は InfluxDB を設定する際のユーザー名です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_55.png" /></div>

BUCKET は作成した InfluxDB のデータベース名です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_56.png" /></div>

TOKEN は InfluxDB API トークンです。HTML 内の元の 12345678 を実際のトークンに置き換えてください

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_57.png" /></div>
### 5.3 サーマルデータの更新間隔とクエリ期間

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_58.png" /></div>

##### パラメータの説明

REFRESH_INTERVAL は更新するミリ秒数を指し、DATA_RANGE は過去のデータのクエリ時間を指します。コード内のデフォルト値「3000」と「-3s」では、「3000」は 3000 ミリ秒、つまり 3 秒ごとに更新されることを意味し、「-3s」は過去 3 秒間のサーマル座標データをクエリすることを意味します。

##### モード選択

設定可能な 2 つのモードがあります：

(1) 「リアルタイムモード」：サーマル座標がリアルタイムで更新され、累積的な重ね合わせなしに以前の座標をクリアします。リアルタイムモードを実現するには、DATA_RANGE を短時間に設定する必要があります。例えば、私のデフォルト「-3s」と「-3s」は過去 3 秒間のサーマル座標データをクエリすることを意味します。例えば、プログラムが現在 10 秒間実行されている場合、DATA_RANGE を -3s に設定すると、サーマル図で表示される座標データは 8-10 秒目のデータであり、以前の 1-7 秒の座標データは表示されません；

(2) 「累積モード」：サーマル座標はリアルタイムで更新されますが、以前の座標が重ね合わされます。累積モードを実現するには、DATA_RANGE をより長い時間に設定する必要があります。例えば、DATA_RANGE を「-1h」に設定すると、サーマル図は過去 1 時間のデータを累積的に表示します。プログラムが 2 時間実行された後、現在 2 時間目のデータが表示され、1 時間目のデータは表示されません。

#### 5.1.4 カメラ解像度

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_59.png" /></div>

##### パラメータの説明

CAM_WIDTH / CAM_HEIGHT：カメラの実際のストリーミング解像度（例：1920x1080 または 1280x720）をここに入力する必要があります。そうでなければ、透視変換が間違ってしまいます。

このパラメータは「4.1.1 reCamera を使用した写真撮影」のステップでも示されています。カメラノードをキャプチャノードと接続する際、カメラノードの Resolution パラメータを確認できます。これが変更する必要がある解像度パラメータです。ここで 1920 × 1080 が選択されている場合、コード内で CAM_WIDTH を 1920 に、CAM_HEIGHT を 1080 に変更する必要があります

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_60.png" /></div>

#### 5.1.5 キャリブレーションの座標データ

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_61.png" /></div>

これは、前のステップ「4.3 キャリブレーションプログラムの使用」で Python プログラムが実行された後にコンソールで生成されたコードです。このコードを置き換えてください

#### 5.1.6 サーマル閾値

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_62.png" /></div>

##### パラメータの説明

感度（最大値）：リアルタイムモード（数点のみ）の場合、max は約 2 に設定します。そうでなければ色が薄すぎて見えません；

1 時間の累積（数千点）の場合、max は 150 以上に設定する必要があります。そうでなければマップが瞬時に赤くなります（露出オーバー）。

### 5.2 ヒートマップの有効化

Win + R を押し、「cmd」と入力し、パス「heatmap-demo」に入り、次のように入力します

```bash
python -m http.server 8080
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_72.png" /></div>

次に、ブラウザで「[InfluxDB Heatmap (Grafana Fix + 1h Accumulation)](http://localhost:8080/index.html)」のウェブページを開くことで、マップが読み込まれていることを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_73.png" /></div>

## 6. Grafana パネルに戻り、最終結果を確認する

この時点で、Grafana パネルで以下の表示を確認できるはずです。問題が発生した場合は、記事の最後にある「よくある質問」セクションを参照してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_74.png" /></div>

## よくある質問

### Grafana パネルが正しく読み込まれない

Grafana でリアルタイムサーマルマップや reCamera リアルタイム画面が読み込まれない、または正しく表示されない場合は、問題のあるパネルをクリックして更新する必要があります。サーマルマップパネルを例にします：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_63.png" /></div>

次に Refresh をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_64.png" /></div>

### サーマルマップの読み込みに問題がある

サーマルマップの読み込みに問題が発生した場合は、まずこのステップのすべての設定項目が正しいかどうかを確認してください。すべての設定項目が正しく、それでもサーマルマップの読み込みに問題がある場合は、[InfluxDB Heatmap (Grafana Fix 1h Accumulation)](http://localhost:8080/index.html) インターフェースで F12 キーを押して、トラブルシューティングのためにウェブコンソールの出力を確認してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_65.png" /></div>

### reCamera のリアルタイム画像にカクつきが現れる

reCamera のリアルタイム画像がしばらく実行した後にカクつき、「WebSocket:Disconnected」が表示される場合、これは正常な現象です。reCamera のリソースは限られており、メモリが満杯になります。表示が再開されるまで待ってください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_66.png" /></div>

### Grafana パネルの「現在の人数」と「今日の人数」が正しく表示されない

これは正常な現象です。ノイズ干渉があるためで、しばらくすると値は正常に戻ります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_67.png" /></div>

### Grafana パネルの「連続稼働時間」とは何を意味するか

ここでの「連続稼働時間」とは、データベースが初日から現在まで実行されている時間を指します。InfluxDB の reCamera データベースのデータ保持時間を 7 日に設定しているため、7 日後に自動的にクリアされて再計時されます。ここで InfluxDB の各データベースのデータ保存時間を自由に設定できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_68.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_69.png" /></div>

### データをエクスポートできるか

はい、InfluxDB Explore インターフェースで必要なデータを選択し、Submit をクリックしてから Download CSV をクリックする必要があります

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_70.png" /></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
