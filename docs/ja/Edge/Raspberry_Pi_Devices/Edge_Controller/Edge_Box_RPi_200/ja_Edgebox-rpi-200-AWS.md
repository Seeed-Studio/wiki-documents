---
description: AWS IoT Core Intergate With EdgeBox RPi 200 
title: AWS IoT Core Intergate With EdgeBox RPi 200 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
keywords:
- AWS
- Getting Start
- Cloud
slug: /ja/Edgebox-rpi-200-AWS
last_update:
  date: 3/11/2024
  author: Kasun Thushara
---

## はじめに

AWS IoT Core は、Internet of Things (IoT) デバイスの安全な接続と管理を支援するサービスです。デバイス同士やクラウドとの通信を可能にし、スマートで接続されたアプリケーションの開発を促進します。AWS IoT Core は、IoT デバイスをより広範な AWS エコシステムに統合することを簡素化し、IoT ソリューション構築のための信頼性が高くスケーラブルなプラットフォームを提供します。このガイドでは、Edge Box RPi 200 を AWS IoT クラウドに接続する方法について説明します。

## はじめに

このプロジェクトを開始する前に、ここで説明するようにハードウェアとソフトウェアを事前に準備する必要があります。

### ハードウェアの準備

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### ソフトウェアの準備

Edge Box-200 は、Raspberry Pi OS がプリインストールされた状態でお手元に届きます。このデバイスを初回起動する場合は、[Getting Started](https://wiki.seeedstudio.com/ja/Edge_Box_introduction/) Wiki をお読みください。

#### Mqtt ライブラリのインストール

ターミナルで以下を入力してください：

```sh
sudo pip3 install "paho-mqtt<2.0.0"
```

## AWSアカウントの作成

AWSアカウントをお持ちでない場合は、簡単に作成できます。アカウントの設定方法については、[**こちらのリンク**](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html)のガイダンスに従ってください。

## デバイスの登録

- **ステップ1**: IoT coreを検索してナビゲートします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/searchbar.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ2**: 次に、サイドバーで**管理**トピックにナビゲートし、**すべてのデバイス**の下の**Things**に移動します。

:::info
**Thingとは何ですか？**
AWS IoTは、AWSプラットフォーム上でInternet of Things（IoT）デバイスを「things」と呼びます。この文脈でのEdge Boxデバイスなど、各IoTデバイスはAWSで「thing」として表現されます。重要なことは、一度作成されると「thing」の名前は変更できないということです。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/thingsslidebar.PNG" style={{width:200, height:300}}/></div>

- **ステップ3**: 次に**Create things**を押します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createthings.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ4**: 単一のEdgeBoxデバイス用に作成します。**Create Single Thing**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createsinglething.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ5**: Thing名を付けます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/thing_type.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ6**: また、将来の参照用にthingタイプも設定します

:::info
**Thing Typeとは何ですか？**

Thing typeを使用すると、同じthingタイプに関連付けられたすべてのthingに共通する説明と構成情報を保存できます。これにより、レジストリ内のthingの管理が簡素化されます。たとえば、「Factory_HMI」thingタイプを定義できます。このデモンストレーションでは、thingタイプとしてpiを使用しました。

:::
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/thingtype.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createthingtype.PNG" style={{width:400, height:300}}/></div>

- **ステップ7** : 証明書を生成します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/configurecertificate.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ8**: ポリシーをアタッチするには作成する必要があります。**Create policy**をクリックします

:::info
AWS IoT Coreポリシーは、IAMポリシー規約に従ったJSONドキュメントです。名前付きポリシーをサポートしており、複数のアイデンティティが同じポリシードキュメントを参照できます。名前付きポリシーは簡単なロールバックのためにバージョン管理されています。
これらのポリシーは、AWS IoT Coreデータプレーンへのアクセス制御を提供し、AWS IoT Coreメッセージブローカーへの接続、MQTTメッセージの送受信、thingのDevice Shadowへのアクセスや更新などの操作を含みます。

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createpolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ9**: ポリシーに適切な名前を付け、以下のようにポリシー効果、ポリシーアクション、ポリシーリソースを設定します。

:::info
ポリシーには以下が含まれます：

**Effect**: アクションが許可されるか拒否されるかを指定します。

**Action**: ポリシーが許可または拒否する特定のアクションを指定します。

**Resource**: アクションが許可または拒否されるリソースを指定します。

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createapolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ10**: 作成したポリシーでポリシーをアタッチし、**Create thing**を押します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/attch_policies.png" style={{width:800, height:'auto'}}/></div>

- **ステップ11**: 次に証明書とキーをダウンロードできます。**デバイス証明書、プライベートキーとパブリックキー、ルートCA証明書**を必ずダウンロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/certicates.PNG" style={{width:600, height:450}}/></div>

- **ステップ12** : thing（Edge Box RPi 200）にアタッチします
そのために**Security** >> **Certificates**に移動します

:::info
AWS IoT thingとは独立して証明書を作成および登録する場合、AWS IoT操作のポリシーがなく、thingオブジェクトとも関連付けられていません。これは、登録された証明書に対してこれらの接続を確立する方法を説明します。証明書は接続のためにデバイスをAWS IoTで認証します。証明書をthingリソースにリンクすることで、デバイス（証明書経由）とthingリソース間の関係が作成されます。接続やメッセージの公開など、AWS IoTアクションに対するデバイスの許可を付与するには、デバイスの証明書に適切なポリシーをアタッチすることが重要です。

:::

作成したthingを選択した後、**Actions**ドロップダウンメニューから**Attach to thing**を押します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/attach_policy.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/attch_thing.png" style={{width:600, height:'auto'}}/></div>

**ステップ13**: ポリシーもアタッチします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/policy_certificate.png" style={{width:600, height:'auto'}}/></div>

## Test MQTT

これを実現するために、[テスト用Pythonファイル](https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/AWStest.py)をダウンロードしてください。デバイス証明書、キーファイル（公開鍵と秘密鍵）、ルートアクセスファイル、およびこのPythonファイルが、デバイス上の同じフォルダにあることを確認してください。さらに、接続URLを変更する必要があります。

そのためには：

- **ステップ 01**：設定に移動

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/settings.PNG" style={{width:200, height:300}}/></div>

- **ステップ 02**：URLを見つけます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/weburl.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ 03**：これらのファイル名をあなたのものに置き換えて、ファイルを実行します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/cosw1.PNG" style={{width:800, height:'auto'}}/></div>

## 接続をテストする

**Test**タブの下にあるMQTTテストクライアントに移動し、購読するトピック名を入力します。この場合はdevice/dataです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/mqtttest.PNG" style={{width:800, height:'auto'}}/></div>

出力は次のようなものです。Edge Boxからのメッセージがコンソールにポップアップします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/seeedop.PNG" style={{width:800, height:'auto'}}/></div>

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
