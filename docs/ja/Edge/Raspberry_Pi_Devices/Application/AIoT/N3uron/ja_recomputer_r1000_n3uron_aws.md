---
description: エッジコンピューティング機能を持つreComputer R1000上のN3uronアプリケーションをAWS IoT Coreと統合する方法を学びます。このチュートリアルでは、結果データを効率的にサブスクライブする手順を説明します。

title: reComputer R1000をN3uronでAWS IoT Coreに接続
keywords:
  - reComputer-R1000
  - Getting started
  - IIoT
  - Industrial 
  - N3uron
  - AWS
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_r1000_n3uron_aws
last_update:
  date: 7/11/2024
  author: Kasun Thushara
---
## はじめに

[MQTTプロトコルを使用してreComputer-R1000デバイスからAWS IoT Coreにデータを送信する](https://wiki.seeedstudio.com/ja/recomputer_r1000_aws/)プロセスについて説明しました。このチュートリアルは、前述のプロセスとシームレスに統合されます。このチュートリアルでは、N3uron Edge IIoTプラットフォームとAWS IoT Core間のインターフェースの複雑さについて詳しく説明します。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### ソフトウェア

[reComputer R1000でN3uronを始める](https://wiki.seeedstudio.com/ja/recomputer_r1000_n3uron/)ガイドを学習することを強く推奨します。このガイドでは、N3uronウェブインターフェースのナビゲーション、Web UIやWeb Visionモジュールなどの概念の理解、タグの概念の把握、基本的なダッシュボードの作成に関する重要な洞察を提供しています。これらの基礎をまだ探索していない場合は、さらに進む前に行うことをお勧めします。提供されたリンクからガイドにアクセスできます。

[reComputer-R1000とAWS IoT Coreの統合](https://wiki.seeedstudio.com/ja/recomputer_r1000_aws/)に関するガイドをまだ探索していない場合は、そちらも確認することをお勧めします。この包括的なガイドでは、基礎から IoT Core への値の公開の高度なステップまですべてをカバーしています。**現在のチュートリアルを補完するものなので、この内容にも慣れ親しむことが有益です**。

## N3uron IIoTプラットフォームの設定

**N3uronのWebUIインターフェース内でモジュールインスタンスを作成する**

- ステップ01: **Navigation**パネルで**Config**を選択します。
- ステップ02: **Explorer**パネルで**Modules**を選択します。
- ステップ03: **Model**メニューをクリックし、**New Module**を選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/createmodel.PNG" /></center>

- ステップ04: インスタンスには任意の名前を付けることができますが、この例では**MQTT**を使用します。
- ステップ05: **Module Type**プロパティを**MqttClient**に設定します。残りのプロパティはデフォルト値のままにして、**Save**をクリックします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/selectmodeltype.PNG" /></center>

## WebUIのExplorerパネル内でN3uronのMQTTモジュールを設定する

- ステップ01: **Explorer**パネルで、作成したばかりの**MQTT**インスタンスを選択します。
- ステップ02: Modelメニューボタンをクリックし、**New Connection**を選択します。
- ステップ03: 新しい接続に名前を付けます。この例では**AWS**と名付けています。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/AWSconnection.PNG" /></center>

- ステップ04: 接続プロパティを設定します：

  - A: **Destination Broker**ドロップダウンメニューから**Amazon Web Services**を選択します。**Authentication mode**は**Certificate**になります。また、この例では**Client Id**は**N3uron**です。
  - B: AWS IoTコンソールでThingを作成したときにダウンロードして保存した**Certificate、Private key、CA certificate**を読み込みます。
  - C: AWS IoTコンソールの左側メニューで**Settings**に移動し、**Device Data Endpoint**をコピーします。N3uronに戻り、**Broker URL**フィールドに貼り付けます。
  - D: 残りのプロパティはデフォルト値のままにして、**Save**をクリックします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/AWSconfig.PNG" /></center>

## N3uronのMQTTモジュールを使用してトピックを購読する

- ステップ01: **Model**パネルで**AWS**接続を右クリックし、**New Subscriber**を選択して名前を付けます。この例では、単純に**Subscriber**を使用します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/newsubscriber.PNG" /></center>

- ステップ02: それをクリックし、Topicフィールドに名前を追加します。この例では、device/dataを使用しています。（AWSチュートリアルでは、このトピックの下でデータを公開しました。）

- ステップ03: 以下に示す値を使用して次のプロパティを設定し、残りはデフォルト値のままにします：
  - **Qos**: Qos 0.
  - **Encoding**: UTF8
  - **Compression**: None
  - **Serialization**: JSON
  - **Data parser/Type**: MqttClient JSON

そして保存します。
<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/Subscriberconfig.PNG" /></center>

## タグの作成

- ステップ01: **エクスプローラーパネル**内で、**Tags**を選択します。
- ステップ02: モデルメニューで、フォルダアイコンを右クリックし、**New Tag**を選択して名前を付けます。この例では、**Subscribed_value**を使用します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/newtag.PNG" /></center>

- ステップ03: 設定パネルで、以下の値を使用して次のプロパティを設定し、残りはデフォルト値のままにします：
  - **Type**: Number.
  - **Source/Enabled**: Yes
  - **Module Type**: MqttClient
  - **Module name**: MQTT
  - **Config/Subscriber**: AWS/Subscriber

- ステップ04: **Save**をクリックします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/tagconfig.PNG" /></center>

AWS IoTとreComputer-R1000およびAWS IoTで提供するpythonスクリプトを実行した後、
N3uron WebUIインターフェースに戻り、左側のパネルで**Data/Real Time**を選択します。以前に作成した**Subscribed_Value**タグが値と共に表示されるはずです。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/realtimedata.PNG" /></center>

## 可視化

webvisionモジュールを作成している場合は、この手順を開始できます。

- ステップ01: **Config**セクションの**WebVision**に移動し、**Open Designer**をクリックします。管理者認証情報を使用してログインします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/wenvision.PNG" /></center>

- ステップ02: Templatesセクションで、お好みの名前で新しいContainerを作成します。次に、このコンテナをスタートアップとして指定します。これにより、初期のWebVision画面として設定されます。横にアスタリスク記号（*）が表示されます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/webvison.PNG" /></center>

- ステップ03: コンテナの背景色を変更します。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/colorchabge.PNG" /></center>

- ステップ04: Mainコンテナ内で、**Components**に移動し、新しいコンポーネントを追加します。この例では、**Label**コンポーネントを選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/addnewcomp.PNG" /></center>

- ステップ05: より良い外観のために、ラベルのプロパティを変更できます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/changeproperties.PNG" /></center>

- ステップ06: **Labelコンポーネント**内で、Labelコンポーネントに表示される値を提供するタグを選択します。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/selecttag.PNG" /></center>

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/taglist.PNG" /></center>

- ステップ07: タグプロパティを選択します

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/tagproperty.PNG" /></center>

- ステップ08: 次に、ConfigセクションのWebVisionに移動し、Open UIをクリックします。管理者認証情報を使用してログインします。

 <center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png" /></center>

 その後、クラウドからサブスクライブしたデータに従ってラベル値を更新する最終結果を確認できます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/output.PNG" /></center>

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
