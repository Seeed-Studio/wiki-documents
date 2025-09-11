---
description: AWS IoT Core と N3uron の接続
title: AWS IoT Core と N3uron の接続
keywords:
  - reTerminal DM
  - はじめに
  - IIoT
  - 産業用
  - N3uron
  - AWS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminalDM_N3uron_AWS
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

[reTerminal DM デバイスから AWS IoT Core へ MQTT プロトコルを使用してデータを送信するプロセス](https://wiki.seeedstudio.com/ja/reTerminal-DM_AWS_first/)を説明しました。このチュートリアルは、前述のプロセスとシームレスに統合されます。本チュートリアルでは、N3uron Edge IIoT プラットフォームと AWS IoT Core の間のインターフェースの詳細について掘り下げていきます。

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

[N3uron のはじめに](https://wiki.seeedstudio.com/ja/reTerminalDM_N3uron_Get_Start/)ガイドを学習することを強くお勧めします。このガイドでは、N3uron の Web インターフェースの操作方法、Web UI や Web Vision モジュールの概念、タグの理解、基本的なダッシュボードの作成など、重要な知識を提供します。これらの基本をまだ学んでいない場合は、先に進む前に確認することをお勧めします。リンクを通じてガイドにアクセスできます。

また、[AWS IoT Core と reTerminal DM の統合](https://wiki.seeedstudio.com/ja/reTerminal-DM_AWS_first/)に関するガイドをまだ確認していない場合は、こちらも確認することをお勧めします。この包括的なガイドでは、IoT Core に値を公開する基本から高度な手順までをカバーしています。**このチュートリアルを補完する内容であるため、このガイドにも慣れておくと便利です**。

## N3uron IIoT プラットフォームの設定

**N3uron の WebUI インターフェース内でモジュールインスタンスを作成する**

- ステップ 01: **ナビゲーション**パネルで、**Config** を選択します。
- ステップ 02: **エクスプローラー**パネルで、**Modules** を選択します。
- ステップ 03: **Model** メニューをクリックし、**New Module** を選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/createmodel.PNG" /></center>

- ステップ 04: インスタンスには任意の名前を付けることができますが、この例では **MQTT** を使用します。
- ステップ 05: **Module Type** プロパティを **MqttClient** に設定します。他のプロパティはデフォルト値のままにして、**Save** をクリックします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/selectmodeltype.PNG" /></center>

## N3uron の WebUI の Explorer パネルで MQTT モジュールを設定する

- ステップ 01: **Explorer** パネルで、先ほど作成した **MQTT** インスタンスを選択します。
- ステップ 02: **Model** メニューボタンをクリックし、**New Connection** を選択します。
- ステップ 03: 新しい接続に名前を付けます。この例では、**AWS** と名付けています。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/AWSconnection.PNG" /></center>

- ステップ 04: 接続プロパティを設定します：

    - A: **Destination Broker** ドロップダウンメニューから **Amazon Web Services** を選択します。**Authentication mode** は **Certificate** になります。また、この例では **Client Id** は **N3uron** です。
    - B: AWS IoT コンソールで Thing を作成した際にダウンロードして保存した **Certificate、Private key、CA certificate** をロードします。
    - C: AWS IoT コンソールの左側メニューで **Settings** に移動し、**Device Data Endpoint** をコピーします。N3uron に戻り、それを **Broker URL** フィールドに貼り付けます。
    - D: 残りのプロパティはデフォルト値のままにして、**Save** をクリックします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/AWSconfig.PNG" /></center>

## N3uron の MQTT モジュールを使用してトピックを購読する

- ステップ 01: **Model** パネルで **AWS** 接続を右クリックし、**New Subscriber** を選択して名前を付けます。この例では、単に **Subscriber** とします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/newsubscriber.PNG" /></center>

- ステップ 02: それをクリックし、トピックフィールドに名前を追加します。この例では、`device/data` を使用しています。（AWS チュートリアルでは、このトピックでデータを公開しています。）

- ステップ 03: 以下の値を使用して次のプロパティを設定し、残りはデフォルト値のままにします：
    - **Qos**: Qos 0
    - **Encoding**: UTF8
    - **Compression**: None
    - **Serialization**: JSON
    - **Data parser/Type**: MqttClient JSON

設定後、**Save** をクリックします。
<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/Subscriberconfig.PNG" /></center>

## タグを作成する
- ステップ 01: **Explorer パネル**内で **Tags** を選択します。
- ステップ 02: **Model** メニューでフォルダアイコンを右クリックし、**New Tag** を選択して名前を付けます。この例では、**Subscribed_value** を使用します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/newtag.PNG" /></center>

- ステップ 03: **Configuration パネル**で、以下の値を使用して次のプロパティを設定し、残りはデフォルト値のままにします：
    - **Type**: Number
    - **Source/Enabled**: Yes
    - **Module Type**: MqttClient
    - **Module name**: MQTT
    - **Config/Subscriber**: AWS/Subscriber

- ステップ 04: **Save** をクリックします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/tagconfig.PNG" /></center>

AWS IoT 上で提供される Python スクリプトを実行し、reTerminal DM または EdgeBox と AWS IoT を接続します。
N3uron WebUI インターフェースに戻り、左側のパネルで **Data/Real Time** を選択します。先ほど作成した **Subscribed_Value** タグが値とともに表示されるはずです。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/realtimedata.PNG" /></center>

## 可視化

WebVisionモジュールを作成した場合、以下の手順を開始できます。

- ステップ 01: **Config**セクションの**WebVision**に移動し、**Open Designer**をクリックします。管理者の資格情報を使用してログインしてください。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/wenvision.PNG" /></center>

- ステップ 02: Templatesセクションで、新しいコンテナを作成し、任意の名前を付けます。その後、このコンテナをスタートアップとして指定します。これにより、初期のWebVision画面として設定され、アスタリスク記号（*）が横に表示されます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/webvison.PNG" /></center>

- ステップ 03: コンテナの背景色を変更します。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/colorchabge.PNG" /></center>

- ステップ 04: メインコンテナ内で、**Components**に移動し、新しいコンポーネントを追加します。この例では、**Label**コンポーネントを選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/addnewcomp.PNG" /></center>

- ステップ 05: ラベルのプロパティを変更して、より良い外観に調整します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/changeproperties.PNG" /></center>

- ステップ 06: **Labelコンポーネント**内で、ラベルコンポーネントに表示される値を提供するタグを選択します。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/selecttag.PNG" /></center>

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/taglist.PNG" /></center>

- ステップ 07: タグのプロパティを選択します。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/tagproperty.PNG" /></center>

- ステップ 08: 次に、ConfigセクションのWebVisionに移動し、Open UIをクリックします。管理者の資格情報を使用してログインしてください。

 <center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png" /></center>
 
 その後、クラウドから購読したデータに基づいてラベルの値が更新される最終結果を確認できます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/output.PNG" /></center>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>