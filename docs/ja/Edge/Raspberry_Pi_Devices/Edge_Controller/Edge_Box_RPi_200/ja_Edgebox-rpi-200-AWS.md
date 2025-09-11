---
description: AWS IoT CoreとEdgeBox RPi 200の統合
title: AWS IoT CoreとEdgeBox RPi 200の統合
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
keywords:
- AWS
- 初めての利用
- クラウド
slug: /ja/Edgebox-rpi-200-AWS
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

AWS IoT Coreは、IoT（モノのインターネット）デバイスを安全に接続し、管理するためのサービスです。デバイス同士やクラウドとの通信を可能にし、スマートで接続されたアプリケーションの開発を支援します。AWS IoT Coreは、IoTデバイスをAWSエコシステム全体に統合するプロセスを簡素化し、信頼性が高くスケーラブルなプラットフォームを提供します。このガイドでは、Edge Box RPi 200をAWS IoTクラウドに接続する方法について説明します。

## 始める前に

このプロジェクトを始める前に、以下に記載されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### ソフトウェアの準備

Edge Box-200は、Raspberry Pi OSがプリインストールされた状態で提供されます。このデバイスを初めて起動する場合は、[Getting Started](https://wiki.seeedstudio.com/ja/Edge_Box_introduction/) Wikiを参照してください。

#### MQTTライブラリのインストール
ターミナルで以下を入力してください：

```sh
sudo pip3 install "paho-mqtt<2.0.0"
```

## AWSアカウントの作成

AWSアカウントをお持ちでない場合は、簡単に作成できます。アカウントの設定方法については、[**こちらのリンク**](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html)を参照してください。

## デバイスの登録

- **ステップ1**: IoT Coreを検索し、そこに移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/searchbar.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ2**: 次に、サイドバーで**Manage**トピックに移動し、**All Devices**の下の**Things**に進みます。

:::info
**Thingとは何ですか？**
AWS IoTでは、IoTデバイスをAWSプラットフォーム上で「Thing」と呼びます。このコンテキストでは、Edge Boxデバイスなどの各IoTデバイスがAWS上で「Thing」として表されます。重要な点として、一度作成された「Thing」の名前は変更できません。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/thingsslidebar.PNG" style={{width:200, height:300}}/></div>

- **ステップ3**: 次に、**Create things**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createthings.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ4**: 単一のEdgeBoxデバイスを作成するので、**Create Single Thing**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createsinglething.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ5**: Thingの名前を入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/thing_type.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ6**: 将来の参照用にThingタイプも設定します。

:::info
**Thingタイプとは何ですか？**

Thingタイプを使用すると、同じThingタイプに関連付けられたすべてのThingに共通する説明や構成情報を保存できます。これにより、レジストリ内のThingの管理が簡素化されます。例えば、「Factory_HMI」というThingタイプを定義できます。このデモでは、Thingタイプとして「pi」を使用しました。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/thingtype.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createthingtype.PNG" style={{width:400, height:300}}/></div>

- **ステップ7**: 証明書を生成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/configurecertificate.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ8**: ポリシーをアタッチするには作成が必要です。**Create policy**をクリックします。

:::info
AWS IoT Coreポリシーは、IAMポリシーの規約に従ったJSONドキュメントです。名前付きポリシーをサポートしており、複数のアイデンティティが同じポリシードキュメントを参照できます。名前付きポリシーはバージョン管理されており、簡単にロールバックできます。
これらのポリシーは、AWS IoT Coreデータプレーンへのアクセスを制御し、AWS IoT Coreメッセージブローカーへの接続、MQTTメッセージの送受信、Thingのデバイスシャドウへのアクセスや更新などの操作を含みます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createpolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ9**: ポリシーに適切な名前を付け、以下のようにポリシーの効果、アクション、リソースを設定します。

:::info
ポリシーには以下が含まれます：

**Effect**: アクションが許可されるか拒否されるかを指定します。

**Action**: ポリシーが許可または拒否する特定のアクションを指定します。

**Resource**: アクションが許可または拒否されるリソースを指定します。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createapolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ10**: 作成したポリシーをアタッチし、**Create thing**を押します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/attch_policies.png" style={{width:800, height:'auto'}}/></div>

- **ステップ 11**: 次に証明書とキーをダウンロードします。**デバイス証明書、秘密鍵と公開鍵、ルート CA 証明書**を必ずダウンロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/certicates.PNG" style={{width:600, height:450}}/></div>

- **ステップ 12**: Thing（Edge Box RPi 200）にアタッチします。  
そのためには、**Security** >> **Certificates** に移動します。

:::info
証明書を AWS IoT Thing から独立して作成および登録すると、AWS IoT 操作のポリシーが欠けており、Thing オブジェクトに関連付けられていません。ここでは、登録済み証明書に対してこれらの接続を確立する方法を説明します。証明書はデバイスを AWS IoT に認証して接続します。証明書を Thing リソースにリンクすることで、デバイス（証明書を介して）と Thing リソースの関係が作成されます。デバイスに AWS IoT の操作権限（接続やメッセージの公開など）を付与するには、デバイスの証明書に適切なポリシーをアタッチすることが重要です。

:::

**Actions** ドロップダウンメニューから作成した Thing を選択し、**Attach to thing** を押します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/attach_policy.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/attch_thing.png" style={{width:600, height:'auto'}}/></div>

**ステップ 13**: ポリシーもアタッチします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/policy_certificate.png" style={{width:600, height:'auto'}}/></div>

## MQTT のテスト

これを実行するには、[テスト用 Python ファイル](https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/AWStest.py)をダウンロードしてください。デバイス証明書、キー ファイル（公開鍵と秘密鍵）、ルートアクセス ファイル、およびこの Python ファイルをデバイス上の同じフォルダーに配置してください。また、接続 URL を変更する必要があります。

以下の手順で行います：

- **ステップ 01**: 設定に移動します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/settings.PNG" style={{width:200, height:300}}/></div>

- **ステップ 02**: URL を確認します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/weburl.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ 03**: ファイル名を自分のものに置き換えてファイルを実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/cosw1.PNG" style={{width:800, height:'auto'}}/></div>

## 接続のテスト

**Test** タブの MQTT テスト クライアントに移動し、トピック名を入力してサブスクライブします。この場合、トピック名は `device/data` です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/mqtttest.PNG" style={{width:800, height:'auto'}}/></div>

出力は以下のようになります。Edge Box からのメッセージがコンソールに表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/seeedop.PNG" style={{width:800, height:'auto'}}/></div>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>