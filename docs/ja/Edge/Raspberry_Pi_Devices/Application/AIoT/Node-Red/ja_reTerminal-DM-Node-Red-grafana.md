---
description: このチュートリアルでは、Raspberry Pi搭載のreTerminal DMにGrafanaをインストールする方法をガイドします。また、Grafanaを既存のInfluxDBデータベースに接続し、詳細で分かりやすいダッシュボードを作成する方法も紹介します
title: IoTダッシュボード用reTerminal DMとGrafana
keywords:
  - reTerminal DM
  - IIoT
  - Grafana
  - Dash board
  - SCADA
image: https://files.seeedstudio.com/wiki/reTerminalDM/grafana/reterminal-grafana.png
slug: /ja/reterminal_dm_grafana
last_update:
  date: 6/27/2024
  author: Kasun Thushara
---
## はじめに

[Grafana](https://grafana.com/oss/grafana/)は、任意のストレージ場所からメトリクス、ログ、トレースをクエリ、可視化、アラート、探索できるオープンソースの可視化・分析ソフトウェアです。時系列データベース（TSDB）データを洞察に富んだグラフや可視化に変換するツールを提供します。強力な監視ソリューションとして、Grafanaは情報に基づいた意思決定、システムパフォーマンスの向上、トラブルシューティングの効率化に役立ちます。このwikiでは、Raspberry Pi搭載のreTerminal DMにGrafanaをインストールし、既存のInfluxDBデータベースに接続して、分かりやすいダッシュボードを作成する方法をガイドします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/reterminal-grafana-dash.gif" /></center>

### ハードウェアの準備

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### ソフトウェアの準備

[InfluxDBデータベースの作成方法](https://wiki.seeedstudio.com/ja/reterminal_dm_200_node_red_influxdb/)に関する以前のチュートリアルを参照することをお勧めします。このチュートリアルでは、セットアップに既存のInfluxDB接続を使用します。

## Grafanaリポジトリの追加

**Raspberry Piに現在インストールされているすべてのパッケージが最新であることを確認してください**：

```bash
sudo apt update
```

**Grafana APTキーを追加する：**

Raspberry PiのキーチェーンにGrafana APTキーを追加するには、以下のコマンドを実行してください：

```bash
curl https://apt.grafana.com/gpg.key | gpg --dearmor | sudo tee /usr/share/keyrings/grafana-archive-keyrings.gpg >/dev/null
```

**Grafanaリポジトリを追加する：**

Raspberry PiでGrafanaリポジトリをリストに追加するには、以下のコマンドを使用してください：

```bash
echo "deb [signed-by=/usr/share/keyrings/grafana-archive-keyrings.gpg] https://apt.grafana.com stable main" | sudo tee /etc/apt/sources.list.d/grafana.list
```

**パッケージリストの更新:**

パッケージリストに変更を加えたため、更新を実行する必要があります:

```bash
sudo apt update
```

## reTerminal への Grafana のインストール DM

以下のコマンドを実行して、Grafanaの最新バージョンをインストールしてください：

```bash
sudo apt install grafana
```

**起動時にGrafanaを開始するように設定する**

起動時にGrafanaが開始されるように有効にします：

```bash
sudo systemctl enable grafana-server
```

**Grafanaの開始**

以下のコマンドを実行してGrafanaサーバーソフトウェアを開始します：

```bash
sudo systemctl start grafana-server
```

**Grafanaへのアクセス**

Grafanaのウェブインターフェースにアクセスするには、ウェブブラウザを開いて以下にアクセスしてください：

```
http://<IPADDRESS>:3000
```

`<IPADDRESS>` を reTerminalDM の IP アドレスに置き換えてください。

**ログイン**

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/login.PNG" /></center>

デフォルトのユーザー名とパスワードは以下の通りです：

- **ユーザー名:** `admin`
- **パスワード:** `admin`

ログインすると、デフォルトパスワードの変更を求められます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/updatepsw.PNG" /></center>

## 最初のダッシュボードを作成する

**ダッシュボードに移動：**

左側のメニューで **Dashboards** をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/dashboard1.PNG" /></center>

**新しいダッシュボードを作成：**

ダッシュボードページで、**New** をクリックし、**New Dashboard** を選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/dashboard2.PNG" /></center>

**可視化を追加：**

ダッシュボードで **+ Add visualization** をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/dashboard3.PNG" /></center>

**データソースを選択：**

データソースを選択するページにリダイレクトされます。前回のチュートリアルで InfluxDB データベースを作成しました。**Configure a new data source** をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/configuresource.PNG" /></center>

**InfluxDB を設定：**

- 時系列データベースの下で **InfluxDB** を選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/addsource.PNG" /></center>

- **URL**、**データベース名**、**ユーザー権限** を入力します。
  
<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/configuresource2.PNG" /></center>

- **Save & Test** をクリックします。警告が表示されなければ、設定完了です。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/saveandtest.PNG" /></center>

**ダッシュボードを構築：**

データソース設定の確認メッセージが表示されます。**Building a dashboard** をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/saveandtest2.png" /></center>

**可視化を追加：**

新しいダッシュボードページにリダイレクトされます。**Add visualization** をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/dashboard3.PNG" /></center>

**データソースを選択：**

データソースを選択するページにリダイレクトされます。InfluxDB データベース接続を作成しました。**InfluxDB** をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/datasource.PNG" /></center>

**可視化を設定**

Grafana は、測定値、フィールド、その他の関連データポイントを選択するためのユーザーフレンドリーなインターフェースを提供します。時系列可視化を作成します。左側には、パネルタイトル、凡例、軸設定、グラフ設定を入力するオプションが表示されます。
最初のダッシュボードにシンプルなグラフを追加するために、以下の視覚的要素に注意してください。
より詳細な設定とカスタマイズについては、[Grafana ドキュメント](https://grafana.com/docs/grafana/latest/panels-visualizations/visualizations/)を参照してください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/grafana.gif" /></center>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
