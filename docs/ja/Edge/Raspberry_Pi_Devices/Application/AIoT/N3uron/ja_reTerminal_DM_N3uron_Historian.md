---
description: Historianモジュールを統合してreTerminal DMで可視化する
title: Historianモジュールを統合してreTerminal DMで可視化する
keywords:
  - reTerminal DM
  - はじめに
  - IIoT
  - 産業用
  - N3uron
  - Historian
  - MangoDB
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminalDM_N3uron_Historian
last_update:
  date: 05/15/2025
  author: Xabier Fernández と Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

[N3uron](https://n3uron.com/) Historianの紹介：MongoDB上に構築された強力な時系列データストレージシステムです。x64ビット、x32ビット、ARMアーキテクチャでMongoDBからデータを簡単に保存するように設定できます。Neuron Historianを使用すると、N3uron Linksを介してローカルまたはリモートで収集されたタグ値を保存できます。また、通信が途絶えた際のデータ保持のための便利なStore & Forward機能を提供します。効率的な圧縮とパーティショニングのおかげで、大量のデータをパフォーマンスを損なうことなく処理できます。参考までに、1GBのストレージで約1億件のイベントを保存できます。それでは、セットアップ手順を見ていきましょう！

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>



### ソフトウェア

[N3uronとAWS IoT Coreを接続する方法](https://wiki.seeedstudio.com/ja/reTerminalDM_N3uron_AWS/)を学ぶことを強くお勧めします。このチュートリアルの後半では、Historianモジュールを使用してチャートを作成する方法を学びます。N3uronを初めて使用する場合は、[N3uronのはじめに](https://wiki.seeedstudio.com/ja/reTerminalDM_N3uron_Get_Start/)ガイドから始めることをお勧めします。このガイドでは、N3uronのWebインターフェースの操作、Web UIやWeb Visionモジュールなどの概念の理解、タグの概念の把握、基本的なダッシュボードの作成について説明しています。これらの基本を最初に学ぶことをお勧めします。ガイドは提供されたリンクからアクセスできます。

## reTerminal DMにMongoDBをインストールする方法

x32およびARMアーキテクチャでは、最初にMongoDBをインストールし、外部のMongoDBインスタンスにデータを保存するようにHistorianを構成する必要があります。

- **ステップ1**: ファイルを整理する

提供された[ファイル](https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/n3uron_historian.zip)（install.sh、uninstall.sh、libcryto.so.1.1、libssl.so1.1）をreTerminal DMのデスクトップまたは任意の場所にあるフォルダに配置します。


- **ステップ2**: フォルダに移動する

ターミナルを開き、ファイルが含まれているフォルダに移動します。

```sh
cd your/folder/path
```


- **ステップ3**: インストールスクリプトを実行する

install.shファイルを実行してMongoDBをインストールします。

```sh
./install.sh
```

インストールプロセス中にsudoパスワードを入力するよう求められる場合があります。


- **ステップ4**: インストールを確認する

インストールが完了したら、次のコマンドを入力してMongoDBにアクセスします：

```sh
mongo
```
これにより、MongoDBシェルが開きます。

- **ステップ5**: データベースを作成する

MongoDBシェル内で、次のコマンドを入力して、存在しない場合は「mongo」という名前のデータベースを作成します：

```sh
use mongo
```
これで、MongoDBがreTerminal DMにインストールされ、「mongo」という名前のデータベースが作成されました。

- **ステップ6**: ディストリビューションがこれらのライブラリを提供していない場合は、libcryto.so.1.1およびlibssl.so1.1をそれぞれ/usr/libおよび/libフォルダに配置します。
以下のコマンドを使用してください：

```sh
sudo cp /path/to/your/folder/libcryto.so.1.1 /usr/lib
sudo cp /path/to/your/folder/libcryto.so.1.1 /lib

sudo cp /path/to/your/folder/libssl.so1.1 /usr/lib
sudo cp /path/to/your/folder/libssl.so1.1 /lib
```

## Historianモジュールの作成

- **ステップ1**: N3uronインターフェースにアクセス

Webブラウザで http://localhost:8003 にアクセスしてください。

- **ステップ2**: 設定に移動

ナビゲーションメニューで **Config** を選択し、次に **Modules** を選択します。三本線アイコンをクリックして **New Module** を選択し、**Historian** という名前の新しいモジュールを作成します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/createmodule.PNG" /></center>

- **ステップ3**: モジュールを設定

**Module type** を Historian に設定し、設定を保存します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/createmodule2.PNG" /></center>

- **ステップ4**: データベースタイプを変更

作成したHistorianモジュールをクリックします。データベースタイプを External に変更します。プロトコルは **mongodb**、データベースは **mongo** と表示されます。**Node History mode** を有効にして設定を保存します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/historianconfig.PNG" /></center>

## Node Historyモードを有効化

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/nodemode.PNG" /></center>

## Historianタグの作成

- **ステップ01**: **Explorerパネル**内で **Tags** を選択します。

- **ステップ02**: モデルメニューでフォルダーアイコンを右クリックし、**New Tag** を選択して名前を付けます。この例では **TestVal** を使用します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newtag.PNG" /></center>

- **ステップ3**: シミュレーションと履歴を有効化

**Simulation** を **Enabled** に変更し、履歴が有効であることを確認し、モジュール名を **Historian** に設定します。設定を**保存**します。

:::note
タグのソースがなく、シミュレーションを行いたい場合は、シミュレーションを有効化することができます（オプション）。または、読み取り/書き込み権限を付与し、タグに手動で値を設定することも可能です。ただし、このタグのソースをAWSからのMQTTとして設定する場合、ソースはAWSになります。この場合、シミュレーションを無効にする必要があります。そうしないと、AWSからではなくシミュレーションからのデータのみを読み取ることになります。この場合、シミュレーションは適用されません。タグのソースをMQTTとして設定しているためです。
:::

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/tagconfig.PNG" /></center>

## Historianタグをソース有効タグに設定

AWS IoT CoreトピックにサブスクライブされたタグにHistorianタグを埋め込むには、**Subscribed_value** 設定を以下のように変更します：

**History** が **Enabled** であることを確認し、モジュール名を **Historian** に設定します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/historyenabled.png" /></center>

## 可視化

**WebVision** モジュールを作成している場合、以下の手順に従います：

**ステップ1**: WebVisionに移動

Configセクションに移動し、**Open Designer** をクリックします。管理者の資格情報を使用してログインします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/opendesigner.PNG" /></center>

**ステップ2**: 既存のメインコンテナを使用

前回のチュートリアルでメインコンテナを作成したため、ここでもそれを使用します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/template.PNG" /></center>

**ステップ3**: チャートコンポーネントを追加

**New component** セクションで **Chart** を追加し、名前を付けます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newchart.PNG" /></center>

**ステップ4**: 履歴データセットを作成

チャート内でデータセットを見つけます。三点アイコンをタップして **New Dataset** を選択し、**HistoricalDataSet** を選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newhistorian.PNG" /></center>

**ステップ5**: 履歴データセットを設定

履歴データセットを設定し、タグを **Subscribed_value**（AWS IoT Coreトピックにサブスクライブ）として選択します。モードを **raw**、日付モードを **current** に設定し、自動リロードを有効化して間隔を5に設定します。日付オフセットを1分に設定します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/confighistorian.PNG" /></center>

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/selecttag.PNG" /></center>

**ステップ6**: チャートシリーズを追加

チャート内で **New chartSeries** を選択して新しいチャートシリーズを追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newchartseries.PNG" /></center>

**ステップ7**: Historianデータセットをチャートにリンク

Historianデータセットをチャートにリンクするには、**Link dataset** を選択し、作成したHistorianデータセットを選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/linkdataset.PNG" /></center>

<center><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/datasetseries.PNG" /></center>

これで折れ線グラフが表示されます。視認性を向上させるためにスタイルをカスタマイズしてください。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/styles.PNG" /></center>

チャート属性の詳細な理解を深めるために、提供された[記事](https://n3uron.com/solutions-web-visualization/)を参照することをお勧めします。N3uronのWebインターフェースは多数の属性を持つ幅広いウィジェットを提供しており、最適なユーザー体験とインタラクションを得るためにはドキュメントを参照することが重要です。詳細なフォーマットガイドラインやN3uron Webインターフェースの可能性を最大限に活用するための洞察については、ドキュメントを探索してください。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/graph.gif" /></center>

## Historianモジュールを使用してグラフを生成する

このタスクでは、Historianモジュールを使用してデータをロードします。以前の方法ではゼロから始めていましたが、このアプローチでは、将来の分析のためにCSV形式でデータを取得する簡単な方法を提供します。

- **ステップ1**: ボタンコンポーネントを追加

UIにボタンコンポーネントを追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/buttonselect.png" /></center>

- **ステップ2**: マウスクリックイベントを選択

ボタンのイベントで**マウスクリック**を選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/buttonevent.png" /></center>

- **ステップ3**: アクションを追加

マウスクリックイベントを選択した後、**Add Action**をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/addaction.png" /></center>

- **ステップ4**: **Open Historical**を選択

アクションのリストから**Open Historical**を選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/addnewaction.png" /></center>

- **ステップ5**: アクションプロパティを設定

このステップでは、アクションのプロパティを必要に応じて設定します。**タグを選択し、オーバーロードを有効にし、日付モード、モード、日付オフセット**を設定します。アクションが期待通りに動作するようにこれらの設定を調整してください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/actionproperties.png" /></center>

- **ステップ6**: アクションを保存

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/saveaction.png" /></center>

- **ステップ7**: Open UIに移動

Open UIセクションに移動します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png" /></center>

- **ステップ8**: ボタンをクリック

追加した**ボタンをクリック**すると、Historianモジュールがロードされます。データ取得のために適切な間隔を設定します。**Apply**を押して変更を適用します。その後、グラフが表示されます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/taglist2.png" /></center>

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/graph2_3.gif" /></center>

- **ステップ9**: 自動リロードを有効化

適切な時間間隔で**Auto Reload**を選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/autoreload.png" /></center>

- **ステップ10**: データを表形式で表示

データを表形式で表示するオプションを選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/result_button.png" /></center>

- **ステップ11**: CSV形式でデータをダウンロード

提供されたボタンを押して、データをCSV形式でダウンロードします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/datacollectiontocsv.png" /></center>

## 技術サポート

弊社製品をご利用いただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>