---
description: コンピュータ R1000 を AWS IoT Core に接続する方法を学びます。AWS IoT Core は IoT デバイスを安全に接続および管理し、デバイスとクラウド間の通信を可能にするサービスです。このガイドは、AWS エコシステムへの IoT 統合を簡素化し、スマートアプリケーションを構築するためのスケーラブルなプラットフォームを提供します。
title: AWS IoT Core と reComputer R1000 の統合
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
keywords:
- AWS
- 初めての手順
- クラウド
slug: /ja/recomputer_r1000_aws
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

AWS IoT Core は、IoT（モノのインターネット）デバイスを安全に接続および管理するためのサービスです。デバイス同士やクラウドとの通信を可能にし、スマートで接続されたアプリケーションの開発を支援します。AWS IoT Core は、IoT デバイスを AWS エコシステムに統合するプロセスを簡素化し、信頼性が高くスケーラブルな IoT ソリューション構築のためのプラットフォームを提供します。このガイドでは、reComputer R1000 を AWS IoT クラウドに接続する方法について説明します。

## 始める前に

このプロジェクトを開始する前に、以下に記載されているようにハードウェアとソフトウェアを事前に準備する必要があります。

### ハードウェアの準備

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

## AWS アカウントの作成

AWS アカウントをお持ちでない場合は、簡単に作成できます。アカウントの設定方法については、[**こちらのリンク**](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html)をご覧ください。

## デバイスの登録

- **ステップ 1**: IoT Core を検索し、ナビゲートします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/searchbar.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ 2**: 次にサイドバーで **Manage** トピックを選択し、**All Devices** の下にある **Things** に移動します。

:::info
**Thing とは何ですか？**
AWS IoT では、IoT デバイスを AWS プラットフォーム上で「Thing」と呼びます。この文脈では、reComputer R1000 デバイスが「Thing」として表されます。重要な点として、一度作成された「Thing」の名前は変更できません。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/thingsslidebar.PNG" style={{width:200, height:300}}/></div>

- **ステップ 3**: 次に **Create things** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createthings.PNG" style={{width:600, height:'auto'}}/></div>

- **ステップ 4**: 単一の reComputer R1000 デバイスを作成するので、**Create Single Thing** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createsinglething.PNG" style={{width:600, height:'auto'}}/></div>

- **ステップ 5**: Thing 名を入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/thingname.PNG" style={{width:600, height:'auto'}}/></div>

- **ステップ 6**: 将来の参照用に Thing タイプも設定します。

:::info
**Thing タイプとは何ですか？**

Thing タイプを使用すると、同じ Thing タイプに関連付けられたすべての Thing に共通する説明や構成情報を保存できます。これにより、レジストリ内の Thing の管理が簡素化されます。例えば、「Factory_HMI」という Thing タイプを定義できます。このデモでは、Thing タイプとして edge_controller を使用しました。

:::
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/thingtype.PNG" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createthingtype.PNG" style={{width:400, height:400}}/></div>

- **ステップ 7**: 証明書を生成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/configurecertificate.PNG" style={{width:600, height:'auto'}}/></div>

- **ステップ 8**: ポリシーをアタッチするには作成が必要です。**Create policy** をクリックします。

:::info
AWS IoT Core ポリシーは、IAM ポリシーの規約に従った JSON ドキュメントです。名前付きポリシーをサポートしており、複数のアイデンティティが同じポリシードキュメントを参照できます。名前付きポリシーはバージョン管理されており、簡単にロールバックできます。
これらのポリシーは、AWS IoT Core データプレーンへのアクセスを制御し、AWS IoT Core メッセージブローカーへの接続、MQTT メッセージの送受信、Thing のデバイスシャドウのアクセスや更新などの操作を含みます。

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createpolicy.png" style={{width:600, height:'auto'}}/></div>

- **ステップ 9**: ポリシーに適切な名前を付け、以下のようにポリシーの効果、アクション、リソースを設定します。

:::info
ポリシーには以下が含まれます：

**Effect**: アクションが許可されるか拒否されるかを指定します。

**Action**: ポリシーが許可または拒否する特定のアクションを指定します。

**Resource**: アクションが許可または拒否されるリソースを指定します。

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createapolicy.PNG" style={{width:600, height:'auto'}}/></div>

- **ステップ 10**: 作成したポリシーをアタッチし、**Create thing** を押します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/policycreatething.PNG" style={{width:600, height:'auto'}}/></div>

- **ステップ 11**: 次に、証明書とキーをダウンロードできます。**デバイス証明書、秘密鍵と公開鍵、ルート CA 証明書**を必ずダウンロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/certicates.PNG" style={{width:600, height:450}}/></div>

- **ステップ 12**: Thing（reComputer R1000）にアタッチします。  
そのためには、**Security** >> **Certificates** に移動します。

:::info
証明書を AWS IoT Thing とは独立して作成および登録すると、AWS IoT 操作用のポリシーがなく、Thing オブジェクトに関連付けられていません。ここでは、登録済みの証明書に対してこれらの接続を確立する方法を説明します。証明書は、AWS IoT との接続においてデバイスを認証します。証明書を Thing リソースにリンクすることで、デバイス（証明書を介して）と Thing リソースの関係が作成されます。デバイスに AWS IoT アクション（接続やメッセージの公開など）の権限を付与するには、適切なポリシーをデバイスの証明書にアタッチすることが重要です。

:::

作成した Thing を **Actions** ドロップダウンメニューから選択し、**Attach to thing** を押します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_policy1.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_thing.PNG" style={{width:600, height:'auto'}}/></div>

- **ステップ 13**: ポリシーもアタッチします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_policy2.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_policy.PNG" style={{width:600, height:'auto'}}/></div>

## reComputer R1000 の準備

- **ステップ 01**: 仮想環境を作成します。以下のコマンドを順に実行すると、仮想環境が作成されます。

```sh
mkdir AWS_project
cd AWS_project
python -m venv --system-site-packages env
source env/bin/activate
```

- **ステップ 02**: MQTT ライブラリをインストールします。

```sh
pip3 install "paho-mqtt<2.0.0"
```

## コードを実行する

これを実現するには、[テスト用 Python ファイル](https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/AWStest.py)をダウンロードしてください。デバイス証明書、鍵ファイル（公開鍵と秘密鍵）、ルートアクセスファイル、およびこの Python ファイルがデバイス上の同じフォルダにあることを確認してください。また、接続 URL を変更する必要があります。

その方法は以下の通りです：

- **ステップ 01**: 設定に移動します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/settings.PNG" style={{width:200, height:300}}/></div>

- **ステップ 02**: URL を見つけます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/weburl.PNG" style={{width:600, height:'auto'}}/></div>

- **ステップ 03**: ファイル名を自分のものに置き換え、ファイルを実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/code.PNG" style={{width:600, height:'auto'}}/></div>

- **ステップ 04**: フォルダに移動し、ファイルを実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/cmd.PNG" style={{width:600, height:'auto'}}/></div>

## 接続のテスト

**Test** タブの MQTT テストクライアントに移動し、購読するトピック名を入力します。この場合、トピック名は `device/data` です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/mqtttest.PNG" style={{width:600, height:'auto'}}/></div>

出力は以下のようになります。reComputer-R1000 からのメッセージがコンソールに表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/seeedop.PNG" style={{width:600, height:'auto'}}/></div>

## 技術サポートと製品に関するディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>