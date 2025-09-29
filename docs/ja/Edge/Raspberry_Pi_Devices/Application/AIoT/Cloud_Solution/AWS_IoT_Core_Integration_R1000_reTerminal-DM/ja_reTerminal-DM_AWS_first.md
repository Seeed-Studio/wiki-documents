---
description: AWS IoT Core Intergate With reTerminal DM
title: AWS IoT Core Intergate With reTerminal DM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
keywords:
- AWS
- Getting Start
- Cloud
slug: /ja/reTerminal-DM_AWS_first
last_update:
  date: 11/22/2023
  author: Kasun Thushara
---
## はじめに

AWS IoT Core は、Internet of Things (IoT) デバイスの安全な接続と管理を支援するサービスです。デバイス同士やクラウドとの通信を可能にし、スマートで接続されたアプリケーションの開発を促進します。AWS IoT Core は、IoT デバイスをより広範な AWS エコシステムに統合することを簡素化し、IoT ソリューション構築のための信頼性があり拡張可能なプラットフォームを提供します。このガイドでは、reTerminal DM を AWS IoT クラウドに接続する方法について説明します。

## はじめに

このプロジェクトを開始する前に、ここで説明されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

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

公式ウェブサイトから Raspberry Pi 64 bit OS の **Bullesye** バージョンをインストールすることをお勧めします。新しい Raspbian OS をインストールしたい場合は、この[**ガイド**](https://wiki.seeedstudio.com/ja/reterminal-dm-flash-OS/)で説明されている手順に従ってください。

#### Mqtt ライブラリのインストール

ターミナルで次のように入力してください：

```sh
sudo pip3 install "paho-mqtt<2.0.0"
```

:::note

この wiki を書いている時点で最新の OS である Bookworm OS を使用しようとしている場合、Python ライブラリのインストールには仮想環境を使用する必要があるかもしれません。詳細については、この[**リンク**](https://www.raspberrypi.com/documentation/computers/os.html#python-on-raspberry-pi)をご確認ください。

:::

## AWS アカウントの作成

AWS アカウントをお持ちでない場合は、簡単に作成できます。アカウントの設定方法については、[**このリンク**](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html)のガイダンスに従ってください。

## デバイスの登録

- **ステップ 1**: IoT core を検索してナビゲートします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/searchbar.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ 2**: 次に、サイドバーで **Manage** トピックにナビゲートし、**All Devices** の下の **Things** に移動します。

:::info
**Thing とは何ですか？**

AWS IoT では、AWS プラットフォーム上でモノのインターネット（IoT）デバイスを「things」と呼びます。この文脈での reTerminal Device などの各 IoT デバイスは、AWS で「thing」として表現されます。重要なことは、一度作成された「thing」の名前は変更できないということです。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/thingsslidebar.PNG" style={{width:200, height:300}}/></div>

- **ステップ 3**: 次に Create things を押します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createthings.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ 4**: 単一の reTerminal Device を作成します。そのため Create Single Thing をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createsinglething.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ 5**: thing 名を付けます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/thingname.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ 6**: また、将来の参照のために thing type も設定します

:::info
**Thing Type とは何ですか？**

Thing type を使用すると、同じ thing type に関連付けられたすべての thing に共通する説明と設定情報を保存できます。これにより、レジストリ内の thing の管理が簡素化されます。たとえば、'Factory_HMI' thing type を定義できます。このデモンストレーションでは、thing type として pi を使用しました。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/thingtype.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createthingtype.PNG" style={{width:400, height:300}}/></div>

- **ステップ 7** : 証明書を生成します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/configurecertificate.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ 8**: ポリシーをアタッチするには作成する必要があります。**Create policy** をクリックします

:::info
AWS IoT Core ポリシーは、IAM ポリシー規約に従った JSON ドキュメントです。名前付きポリシーをサポートしており、複数のアイデンティティが同じポリシードキュメントを参照できます。名前付きポリシーは、簡単なロールバックのためにバージョン管理されています。
これらのポリシーは、AWS IoT Core データプレーンへのアクセス制御を提供し、AWS IoT Core メッセージブローカーへの接続、MQTT メッセージの送受信、thing の Device Shadow へのアクセスや更新などの操作を含みます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createpolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ 9**: ポリシーに適切な名前を付け、以下のようにポリシー効果、ポリシーアクション、ポリシーリソースを設定します。

:::info
ポリシーには以下が含まれます：

**Effect**: アクションが許可されるか拒否されるかを指定します。

**Action**: ポリシーが許可または拒否する特定のアクションを指定します。

**Resource**: アクションが許可または拒否されるリソースを指定します。

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createapolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ 10**: 作成したポリシーでポリシーをアタッチし、**Create thing** を押します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/policycreatething.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ 11**: 次に証明書とキーをダウンロードできます。**デバイス証明書、プライベートキーとパブリックキー、ルート CA 証明書**を必ずダウンロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/certicates.PNG" style={{width:600, height:450}}/></div>

- **ステップ 12** : thing（reTerminal DM）にアタッチします
そのために **Security** >> **Certificates** に移動します

:::info

AWS IoT thing とは独立して証明書を作成および登録する場合、AWS IoT 操作のポリシーが不足し、thing オブジェクトに関連付けられていません。これは、登録された証明書に対してこれらの接続を確立する方法を説明します。証明書は、接続のために AWS IoT でデバイスを認証します。証明書を thing リソースにリンクすることで、デバイス（証明書経由）と thing リソース間の関係が作成されます。接続やメッセージの公開などの AWS IoT アクションに対してデバイスに許可を与えるには、デバイスの証明書に適切なポリシーをアタッチすることが重要です。

:::

作成した thing を選択した後、**Actions** ドロップダウンメニューから **Attach to thing** を押します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/attach_policy.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/attachtothing.PNG" style={{width:600, height:'auto'}}/></div>

**ステップ 13**: ポリシーもアタッチします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/attachpolicy.PNG" style={{width:600, height:'auto'}}/></div>

## MQTTのテスト

これを実現するために、私たちの[テスト用Pythonファイル](https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/AWStest.py)をダウンロードしてください。デバイス証明書、キーファイル（公開鍵と秘密鍵）、ルートアクセスファイル、およびこのPythonファイルが、reTerminal Device上の同じフォルダにあることを確認してください。さらに、接続URLを変更する必要があります。

そのためには：

- **ステップ01**：設定に移動します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/settings.PNG" style={{width:200, height:300}}/></div>

- **ステップ02**：そこでURLを見つけることができます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/weburl.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ03**：これらのファイル名をあなたのものに置き換えて、ファイルを実行します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/cosw1.PNG" style={{width:800, height:'auto'}}/></div>

## 接続のテスト

**Test**タブの下にあるMQTTテストクライアントに移動し、購読するトピック名を入力します。この場合はdevice/dataです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/mqtttest.PNG" style={{width:800, height:'auto'}}/></div>

出力はこのようなものです。reTerminal DMからのメッセージがコンソールにポップアップします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/seeedop.PNG" style={{width:800, height:'auto'}}/></div>

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
