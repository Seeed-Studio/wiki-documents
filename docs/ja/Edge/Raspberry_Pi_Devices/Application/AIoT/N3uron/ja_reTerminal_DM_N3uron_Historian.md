---
description: reTerminal DMでのHistorianモジュール統合による可視化
title: reTerminal DMでのHistorianモジュール統合による可視化
keywords:
  - reTerminal DM
  - Getting started
  - IIoT
  - Industrial 
  - N3uron
  - Historian
  - MangoDB
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminalDM_N3uron_Historian
last_update:
  date: 4/4/2024
  author: Xabier Fernández and Kasun Thushara
---
## はじめに

[N3uron](https://n3uron.com/) Historianの紹介：MongoDBをベースに構築された強力な時系列ストレージシステムです。x64ビット、x32ビット、ARMアーキテクチャでMongoDBからデータを保存するように簡単に設定できます。Neuron Historianを使用すると、N3uron Linksを介してローカルまたはリモートで収集されたタグ値を保存できます。さらに、通信が失われた際のデータ保持のための便利なStore & Forward機能も提供します。効率的な圧縮とパーティショニングにより、パフォーマンスを損なうことなく大量のデータボリュームを処理できます。参考として、1GBのストレージで約1億のイベントを保持できます。ステップバイステップでセットアップに取り組んでみましょう！

## 前提条件

### ハードウェア

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

### ソフトウェア

[N3uronとAWS IoT Coreの接続方法](https://wiki.seeedstudio.com/ja/reTerminalDM_N3uron_AWS/)を学習することを強く推奨します。このチュートリアルの後半では、Historianモジュールを使用してチャートを作成する方法を学びます。N3uronが初めての場合は、[N3uronの入門ガイド](https://wiki.seeedstudio.com/ja/reTerminalDM_N3uron_Get_Start/)から始めることをお勧めします。このガイドでは、N3uronのWebインターフェースのナビゲーション、Web UIやWeb Visionモジュールなどの概念の理解、タグ概念の把握、基本的なダッシュボードの作成について説明しています。先に進む前に、これらの基礎を探求することをお勧めします。提供されたリンクからガイドにアクセスできます。

## reTerminal DMにMongoDBをインストールするには

x32およびARMアーキテクチャでは、ユーザーは最初にMongoDBをインストールし、外部MongoDBインスタンスにデータを保存するようにHistorianを設定する必要があります。

- **ステップ1**: ファイルの整理

提供された[ファイル](https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/n3uron_historian.zip)（install.sh、uninstall.sh、libcryto.so.1.1、libssl.so1.1）をreterminal DMのデスクトップまたは他の任意の場所の別フォルダに配置します。

- **ステップ2**: フォルダへの移動

ターミナルを開き、ファイルが含まれているフォルダに移動します。

```sh
cd your/folder/path
```

- **ステップ 3**: インストールスクリプトの実行

install.sh ファイルを実行して MongoDB をインストールします。

```sh
./install.sh
```

インストール過程でsudoパスワードの入力を求められる場合があります。

- **ステップ4**: インストールの確認

インストールが完了したら、以下のコマンドを入力してMongoDBにアクセスします：

```sh
mongo
```

これによりMongoDBシェルが開きます。

- **ステップ5**: データベースの作成

MongoDBシェル内で、以下のコマンドを入力して「mongo」という名前のデータベースが存在しない場合は作成します：

```sh
use mongo
```

これで、MongoDB が reTerminal DM にインストールされ、「mongo」という名前のデータベースが作成されました。

- **ステップ 6**: お使いのディストリビューションがこれらのライブラリを提供していない場合は、libcryto.so.1.1 と libssl.so1.1 をそれぞれ /usr/lib と /lib フォルダに配置してください。
このためには以下のコマンドを使用してください

```sh
sudo cp /path/to/your/folder/libcryto.so.1.1 /usr/lib
sudo cp /path/to/your/folder/libcryto.so.1.1 /lib

sudo cp /path/to/your/folder/ libssl.so1.1 /usr/lib
sudo cp /path/to/your/folder/ libssl.so1.1 /lib

```

## Historianモジュールの作成

- **ステップ1**: N3uronインターフェースへのアクセス

Webブラウザで`http://localhost:8003`にアクセスします。

- **ステップ2**: 設定への移動

ナビゲーションメニューで**Config**を選択し、**Modules**を選択します。三本線のアイコンをクリックし、**New Module**を選択して**Historian**という名前の新しいモジュールを作成します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/createmodule.PNG" /></center>

- **ステップ3**: モジュールの設定

**Module type**をHistorianとして選択し、設定を保存します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/createmodule2.PNG" /></center>

- **ステップ4**: データベースタイプの変更

作成したHistorianモジュールをクリックします。Database typeをExternalに変更します。プロトコルが**mongodb**、データベースが**mongo**と表示されます。Node History modeを有効にして設定を保存します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/historianconfig.PNG" /></center>

## Node History modeの有効化

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/nodemode.PNG" /></center>

## Historianタグの作成

- **ステップ01**: **Explorerパネル**内で**Tags**を選択します。

- **ステップ02:** Modelメニューでフォルダアイコンを右クリックし、**New Tag**を選択して名前を付けます。この例では**TestVal**を使用します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newtag.PNG" /></center>

- **ステップ3:** シミュレーションと履歴の有効化

**Simulation**を**Enabled**に変更し、履歴が有効になっていることを確認し、モジュール名を**Historian**に設定します。設定を**保存**します。

:::note
タグのソースがなく、シミュレートしたい場合は、シミュレーションを有効にできます（オプション）。または、読み取り/書き込み権限を与えて手動でタグに値を与えることもできます。しかし、このタグのソースをAWSから来るMQTTとして設定した場合、ソースはAwsです。この場合、シミュレーションを無効にする必要があります。そうしないと、AWSからのデータではなく、シミュレーションからのデータのみを読み取ることになります。したがって、この場合シミュレーションは適用されません。タグのソースをMQTTから来るように設定しているからです。
:::

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/tagconfig.PNG" /></center>

## Historianタグをソース有効タグに設定

HistorianタグをAWS IoT Coreトピックにサブスクライブした以前に作成したタグに組み込むには、**Subscribed_value**設定を次のように変更します：

**History**が**Enabled**になっていることを確認し、モジュール名を**Historian**に設定します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/historyenabled.png" /></center>

## 可視化

**WebVision**モジュールを作成している場合は、以下の手順に従ってください：

**ステップ1**: WebVisionへの移動

Configセクションに移動し、**Open Designer**をクリックします。管理者認証情報を使用してログインします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/opendesigner.PNG" /></center>

**ステップ2**: 既存のメインコンテナの使用

前回のチュートリアルでメインコンテナを作成したので、ここでもそれを使用します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/template.PNG" /></center>

**ステップ3**: チャートコンポーネントの追加

**New component**セクションで**Chart**を追加し、名前を付けます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newchart.PNG" /></center>

**ステップ4**: 履歴データセットの作成

チャート内でデータセットを見つけます。三つの点をタップし、**New Dataset**を選択してから**HistoricalDataSet**を選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newhistorian.PNG" /></center>

**ステップ5**: 履歴データセットの設定

タグを**Subscribed_value**（AWS IoT Coreトピックにサブスクライブ）として選択し、履歴データセットを設定します。Modeを**raw**に、Date modeを**current**に設定し、autoreloadを有効にして、intervalを5に設定します。Date offsetを1分に設定します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/confighistorian.PNG" /></center>

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/selecttag.PNG" /></center>

**ステップ6**: チャートシリーズの追加

チャートの下で**New chartSeries**を選択して新しいチャートシリーズを追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newchartseries.PNG" /></center>

**ステップ7**: Historianデータセットをチャートにリンク

Historianデータセットをチャートにリンクするには、**Link dataset**を選択し、作成したHistorianデータセットを選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/linkdataset.PNG" /></center>

<center><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/datasetseries.PNG" /></center>

これで線グラフが表示されます。視認性を向上させるためにスタイルをカスタマイズします。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/styles.PNG" /></center>

チャート属性をより深く理解するには、提供された[記事](https://n3uron.com/solutions-web-visualization/)を参照することをお勧めします。N3uronのWebインターフェースは、多数の属性を持つ幅広いウィジェットを提供しているため、最適なユーザーエクスペリエンスとインタラクションのためにドキュメントを参照することが重要です。N3uron Webインターフェースの可能性を最大化するための詳細なフォーマットガイドラインと洞察については、ドキュメントを参照してください。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/graph.gif" /></center>

## Historianモジュールを使用してグラフを生成する

このタスクでは、Historianモジュールを利用してデータを読み込みます。ゼロから始める従来の方法とは異なり、このアプローチは将来の分析のためにCSV形式でデータを取得するはるかに簡単な方法を提供します。

- **ステップ1**: ボタンコンポーネントを追加

UIにボタンコンポーネントを追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/buttonselect.png" /></center>

- **ステップ2**: マウスクリックイベントを選択

ボタンのイベントで**マウスクリック**を選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/buttonevent.png" /></center>

- **ステップ3**: アクションを追加

マウスクリックイベントを選択した後、**アクションを追加**をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/addaction.png" /></center>

- **ステップ4**: **Open Historical**を選択

アクションのリストから**Open Historical**を選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/addnewaction.png" /></center>

- **ステップ5**: アクションプロパティを設定

このステップでは、要件に応じてアクションのプロパティを設定する必要があります。**タグを選択し、over reloadを有効にし、日付モード、モード、日付オフセットを設定**します。アクションが期待通りに動作するよう、必要に応じてこれらの設定を調整してください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/actionproperties.png" /></center>

- **ステップ6**: アクションを保存

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/saveaction.png" /></center>

- **ステップ7**: Open UIに移動

Open UIセクションに移動します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png" /></center>

- **ステップ8**: ボタンをクリック

**追加したボタンをクリック**すると、Historianモジュールが読み込まれます。データ取得のために適切な間隔を設定してください。**適用**を押して変更を実装します。その後、グラフを確認できるようになります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/taglist2.png" /></center>

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/graph2_3.gif" /></center>

- **ステップ9**: 自動リロードを有効化

適切な時間間隔で**自動リロード**を選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/autoreload.png" /></center>

- **ステップ10**: データを表形式で表示

データを表形式で表示するオプションを選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/result_button.png" /></center>

- **ステップ11**: CSV形式でデータをダウンロード

提供されたボタンを押してCSV形式でデータをダウンロードします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/datacollectiontocsv.png" /></center>

## 技術サポート

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
