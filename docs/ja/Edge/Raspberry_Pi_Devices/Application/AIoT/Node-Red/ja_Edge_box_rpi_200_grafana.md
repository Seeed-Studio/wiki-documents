---
description: このチュートリアルでは、Raspberry Pi を搭載した EdgeBox RPi 200 に Grafana をインストールする手順を案内します。また、Grafana を既存の InfluxDB データベースに接続し、詳細で視覚的なダッシュボードを作成する方法も紹介します。
title: Edge Box RPi 200 と Grafana
keywords:
  - Edge Box Rpi 200
  - IIoT
  - Grafana
  - ダッシュボード
  - SCADA
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /ja/edgebox_rpi_200_grafana
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

[Grafana](https://grafana.com/oss/grafana/) は、オープンソースの可視化および分析ソフトウェアで、任意のストレージ場所からメトリクス、ログ、トレースをクエリ、可視化、アラート、探索することを可能にします。Grafana は、時系列データベース (TSDB) のデータを洞察に満ちたグラフや可視化に変換するためのツールを提供します。強力な監視ソリューションとして、Grafana は情報に基づいた意思決定を支援し、システムパフォーマンスを向上させ、トラブルシューティングを効率化します。この Wiki では、Raspberry Pi を搭載した EdgeBox RPi 200 に Grafana をインストールし、既存の InfluxDB データベースに接続して、視覚的なダッシュボードを作成する手順を案内します。

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

[InfluxDB データベースの作成方法](https://wiki.seeedstudio.com/ja/edge_box_rpi_200_node_red_influxdb/) に関する以前のチュートリアルを参照することをお勧めします。このチュートリアルでは、既存の InfluxDB 接続を使用してセットアップを行います。

## Grafana リポジトリの追加

**Raspberry Pi 上のすべてのインストール済みパッケージを最新の状態にすることを確認してください**:

```bash
sudo apt update
```

**Grafana APT キーを追加する:**

以下のコマンドを実行して、Grafana APT キーを Raspberry Pi のキーチェーンに追加します:

```bash
curl https://apt.grafana.com/gpg.key | gpg --dearmor | sudo tee /usr/share/keyrings/grafana-archive-keyrings.gpg >/dev/null
```

**Grafana リポジトリを追加する:**

以下のコマンドを使用して、Grafana リポジトリを Raspberry Pi のリストに追加します:

```bash
echo "deb [signed-by=/usr/share/keyrings/grafana-archive-keyrings.gpg] https://apt.grafana.com stable main" | sudo tee /etc/apt/sources.list.d/grafana.list
```

**パッケージリストを更新する:**

パッケージリストに変更を加えたため、以下のコマンドを実行して更新します:

```bash
sudo apt update
```

## EdgeBox に Grafana をインストールする

以下のコマンドを実行して、最新バージョンの Grafana をインストールします：

```bash
sudo apt install grafana
```

**Grafana を起動時に自動起動するよう設定する**

Grafana を起動時に自動起動するように設定します：

```bash
sudo systemctl enable grafana-server
```

**Grafana を起動する**

以下のコマンドを実行して、Grafana サーバーソフトウェアを起動します：

```bash
sudo systemctl start grafana-server
```

**Grafana にアクセスする**

Grafana の Web インターフェースにアクセスするには、Web ブラウザを開き、以下の URL に移動します：

```
http://<IPADDRESS>:3000
```

`<IPADDRESS>` を EdgeBox RPi 200 の IP アドレスに置き換えてください。

**ログインする**

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/login.PNG" /></center>

デフォルトのユーザー名とパスワードは以下の通りです：

- **ユーザー名:** `admin`
- **パスワード:** `admin`

ログイン後、デフォルトのパスワードを変更するよう求められます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/updatepsw.PNG" /></center>

## 最初の ダッシュボード を作成する

**ダッシュボードに移動する:**
   
左側のメニューで **Dashboards** をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/dashboard1.PNG" /></center>

**新しい ダッシュボード を作成する:**
   
ダッシュボードページで **New** をクリックし、**New Dashboard** を選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/dashboard2.PNG" /></center>

**ビジュアライゼーションを追加する:**
   
ダッシュボードで **+ Add visualization** をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/dashboard3.PNG" /></center>

**データソースを選択する:**
   
データソースを選択する画面にリダイレクトされます。前回のチュートリアルで InfluxDB データベースを作成しました。**Configure a new data source** をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/configuresource.PNG" /></center>

**InfluxDB を設定する:**
   
   - 時系列データベースの中から **InfluxDB** を選択します。
<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/addsource.PNG" /></center>

   - **URL**、**データベース名**、および **ユーザー権限** を入力します。
  
<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/configuresource2.PNG" /></center>

   - **Save & Test** をクリックします。警告が表示されなければ、設定は完了です。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/saveandtest.PNG" /></center>

**ダッシュボード を構築する:**
   
データソースの設定が完了したことを示すメッセージが表示されます。**Building a dashboard** をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/saveandtest2.png" /></center>

**ビジュアライゼーションを追加する:**
   
新しいダッシュボードページにリダイレクトされます。**Add visualization** をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/dashboard3.PNG" /></center>

**データソースを選択する:**
   
データソースを選択する画面にリダイレクトされます。InfluxDB データベース接続を作成しました。**InfluxDB** をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/datasource.PNG" /></center>

**ビジュアライゼーションを設定する**

Grafana は、測定値、フィールド、その他の関連データポイントを選択するためのユーザーフレンドリーなインターフェースを提供します。ここでは時系列ビジュアライゼーションを作成します。左側には、パネルタイトル、凡例、軸設定、グラフ設定を入力するオプションが表示されます。
以下の視覚要素に注意して、最初のダッシュボードにシンプルなグラフを追加してください。
詳細な設定やカスタマイズについては、[Grafana ドキュメント](https://grafana.com/docs/grafana/latest/panels-visualizations/visualizations/) を参照してください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/grafana.gif" /></center>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>