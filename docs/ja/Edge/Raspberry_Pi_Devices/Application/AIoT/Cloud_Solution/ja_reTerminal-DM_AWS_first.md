---
description: AWS IoT CoreとreTerminal DMの統合
title: AWS IoT CoreとreTerminal DMの統合
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
keywords:
- AWS
- はじめに
- クラウド
slug: /ja/reTerminal-DM_AWS_first
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

AWS IoT Coreは、IoT（モノのインターネット）デバイスを安全に接続し管理するためのサービスです。このサービスを利用することで、デバイス同士やクラウドとの通信が可能になり、スマートで接続されたアプリケーションの開発が容易になります。AWS IoT Coreは、IoTデバイスをAWSエコシステム全体に統合するプロセスを簡素化し、信頼性が高くスケーラブルなプラットフォームを提供します。このガイドでは、reTerminal DMをAWS IoTクラウドに接続する方法について説明します。

## はじめに

このプロジェクトを開始する前に、以下に記載されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### ソフトウェアの準備

Raspberry Pi 64ビットOSの**Bullseye**バージョンを公式ウェブサイトからインストールすることをお勧めします。新しいRaspbian OSをインストールしたい場合は、この[**ガイド**](https://wiki.seeedstudio.com/ja/reterminal-dm-flash-OS/)に従ってください。

#### Mqttライブラリのインストール
ターミナルで以下を入力してください：

```sh
sudo pip3 install "paho-mqtt<2.0.0"
```

:::note

このWiki執筆時点で最新のOSであるBookworm OSを使用する場合、Pythonライブラリをインストールするために仮想環境を使用する必要があるかもしれません。詳細については、この[**リンク**](https://www.raspberrypi.com/documentation/computers/os.html#python-on-raspberry-pi)を参照してください。

:::

## AWSアカウントの作成

AWSアカウントをお持ちでない場合は、簡単に作成できます。アカウントの設定方法については、[**こちらのリンク**](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html)をご覧ください。

## デバイスの登録

- **ステップ1**: IoT Coreを検索し、そこに移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/searchbar.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ2**: 次に、サイドバーで**Manage**トピックに移動し、**All Devices**の下にある**Things**に進みます。

:::info
**Thingとは何ですか？**

AWS IoTでは、IoTデバイスをAWSプラットフォーム上で「Thing」と呼びます。この文脈では、reTerminalデバイスが「Thing」として表されます。重要な点として、一度作成された「Thing」の名前は変更できません。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/thingsslidebar.PNG" style={{width:200, height:300}}/></div>

- **ステップ3**: 次に、Create thingsをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createthings.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ4**: 単一のreTerminalデバイスを作成するので、Create Single Thingをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createsinglething.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ5**: Thingの名前を入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/thingname.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ6**: 将来の参照用にThingタイプも設定します。

:::info
**Thingタイプとは何ですか？**

Thingタイプを使用すると、同じThingタイプに関連付けられたすべてのThingに共通する説明や構成情報を保存できます。これにより、レジストリ内のThingの管理が簡素化されます。例えば、「Factory_HMI」というThingタイプを定義できます。このデモでは、Thingタイプとして「pi」を使用しました。
:::
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/thingtype.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createthingtype.PNG" style={{width:400, height:300}}/></div>

- **ステップ7**: 証明書を生成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/configurecertificate.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ8**: ポリシーをアタッチするには、ポリシーを作成する必要があります。**Create policy**をクリックします。

:::info
AWS IoT Coreポリシーは、IAMポリシーの規約に従ったJSONドキュメントです。これらは名前付きポリシーをサポートしており、複数のアイデンティティが同じポリシードキュメントを参照できます。名前付きポリシーはバージョン管理されており、簡単にロールバックできます。
これらのポリシーは、AWS IoT Coreデータプレーンへのアクセスを制御します。これには、AWS IoT Coreメッセージブローカーへの接続、MQTTメッセージの送受信、Thingのデバイスシャドウへのアクセスや更新などの操作が含まれます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createpolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ9**: ポリシーに適切な名前を付け、以下のようにポリシー効果、ポリシーアクション、およびポリシーリソースを設定します。

:::info
このポリシーには以下が含まれます：


**効果**: アクションが許可されるか拒否されるかを指定します。

**アクション**: ポリシーが許可または拒否する特定のアクションを指定します。

**リソース**: アクションが許可または拒否されるリソースを指定します。

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createapolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ 10**: 作成したポリシーをアタッチし、**Create thing** を押します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/policycreatething.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ 11**: 次に、証明書とキーをダウンロードします。**デバイス証明書、秘密鍵と公開鍵、ルート CA 証明書**を必ずダウンロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/certicates.PNG" style={{width:600, height:450}}/></div>

- **ステップ 12**: 作成したもの（reTerminal DM）にアタッチします。
そのためには、**Security** >> **Certificates** に移動します。

:::info

証明書を AWS IoT のものとは独立して作成および登録した場合、その証明書には AWS IoT 操作用のポリシーがなく、どの「thing」オブジェクトにも関連付けられていません。ここでは、登録済み証明書にこれらの接続を確立する方法を説明します。証明書は、AWS IoT との接続においてデバイスを認証します。証明書を「thing」リソースにリンクすることで、デバイス（証明書を介して）と「thing」リソースの関係が作成されます。デバイスに AWS IoT アクション（接続やメッセージの公開など）の権限を付与するには、適切なポリシーをデバイスの証明書にアタッチすることが重要です。

:::

作成した「thing」を **Actions** ドロップダウンメニューから選択し、**Attach to thing** を押します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/attach_policy.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/attachtothing.PNG" style={{width:600, height:'auto'}}/></div>

**ステップ 13**: ポリシーもアタッチします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/attachpolicy.PNG" style={{width:600, height:'auto'}}/></div>

## MQTT のテスト

これを実行するには、[テスト用 Python ファイル](https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/AWStest.py) をダウンロードしてください。デバイス証明書、キー ファイル（公開鍵と秘密鍵）、ルート アクセス ファイル、およびこの Python ファイルを reTerminal デバイス上の同じフォルダーに配置してください。また、接続 URL を変更する必要があります。

以下の手順で行います：

- **ステップ 01**: 設定に移動します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/settings.PNG" style={{width:200, height:300}}/></div>

- **ステップ 02**: URL を確認します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/weburl.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ 03**: ファイル名を自分のものに置き換え、ファイルを実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/cosw1.PNG" style={{width:800, height:'auto'}}/></div>

## 接続のテスト

**Test** タブの下にある MQTT テストクライアントに移動し、購読するトピック名を入力します。この場合、トピック名は `device/data` です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/mqtttest.PNG" style={{width:800, height:'auto'}}/></div>

出力は以下のようになります。reTerminal DM からのメッセージがコンソールに表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/seeedop.PNG" style={{width:800, height:'auto'}}/></div>

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