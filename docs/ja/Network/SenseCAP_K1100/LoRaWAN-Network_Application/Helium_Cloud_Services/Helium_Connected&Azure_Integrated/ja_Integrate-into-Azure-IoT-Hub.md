---
description: Azure IoT Hub への統合
title: Azure IoT Hub への統合
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Integrate-into-Azure-IoT-Hub
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Azure IoT Hub への統合

モノのインターネット（IoT）は、物理デバイスがインターネットやその他のネットワークを介して他のデバイスやサービスと接続し、データを交換するネットワークです。現在、世界には100億台以上の接続デバイスが存在し、毎年さらに増加しています。必要なセンサーやソフトウェアを組み込むことができるものは何でもインターネットを介して接続可能です。

Azure IoT Hub は、クラウド上でホストされる管理サービスであり、IoT アプリケーションとその接続デバイス間の通信のための中央メッセージハブとして機能します。数百万台のデバイスとそのバックエンドソリューションを信頼性と安全性を持って接続できます。ほぼすべてのデバイスを IoT Hub に接続することが可能です。

デバイスからクラウドへのテレメトリ、デバイスからのファイルアップロード、クラウドからデバイスを制御するためのリクエスト-リプライ方式など、いくつかのメッセージングパターンがサポートされています。また、IoT Hub はデバイスの作成、接続、障害を追跡するためのモニタリングもサポートしています。

- Microsoft Azure IoT Hub の使用に関する詳細情報は、[こちら](https://docs.microsoft.com/en-us/azure/iot-hub/iot-concepts-and-iot-hub)をご参照ください。

この章では、[Microsoft Azure](https://portal.azure.com/#home) に切り替える必要があります。その後、無料アカウントを作成するためにサインアップが必要になる場合があります。新しい[アカウント登録](https://azure.microsoft.com/en-gb/free/?v=exp&adobe_mc_sdid=SDID%3D15AD43418726D152-6CD00D48F523D667%7CMCORGID%3DEA76ADE95776D2EC7F000101%40AdobeOrg%7CTS%3D1646905124&adobe_mc_ref=https%3A%2F%2Fazure.microsoft.com%2Fzh-cn%2Ffree%2F)を行うと、無料で $200 のクレジットを取得でき、これを完全に使用して手順を完了することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/143.png" /></div>

## リソースグループの作成

リソースグループは、Azure ソリューションに関連するリソースを保持するコンテナです。リソースグループには、ソリューションのすべてのリソース、またはグループとして管理したいリソースのみを含めることができます。リソースをリソースグループに割り当てる方法は、組織にとって最も理にかなった方法に基づいて決定します。一般的には、同じライフサイクルを共有するリソースを同じリソースグループに追加することで、グループとして簡単にデプロイ、更新、削除できるようにします。

まず、登録済みのアカウントで [Azure ポータル](https://portal.azure.com/) にログインしてください。

**リソースグループ**を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/144.png" /></div>

**作成**を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/145.png" /></div>

以下の値を入力します：

- **サブスクリプション**: Azure サブスクリプションを選択します。

- **リソースグループ**: 新しいリソースグループ名を入力します。

- **リージョン**: 北ヨーロッパなどの Azure ロケーションを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/146.png" /></div>

**確認 + 作成**を選択します。

**作成**を選択します。リソースグループの作成には数秒かかります。

上部メニューから **更新** を選択してリソースグループリストを更新し、新しく作成したリソースグループを選択して開きます。または、上部の通知（ベルアイコン）を選択し、**リソースグループに移動**を選択して新しく作成したリソースグループを開きます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/147.png" /></div>

## Microsoft Azure IoT Hub を作成する

このステップでは、Microsoft Azure ポータルを使用して Microsoft Azure IoT Hub を作成および管理する方法を説明します。Microsoft Azure ホームページから **Create a resource** ボタンを選択し、Marketplace の検索フィールドに「IoT Hub」と入力します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/11.jpg" /></div>

検索結果から IoT Hub を選択し、次に **Create** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/12.jpg" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/13.jpg" /></div>

**Basics** タブで、以下のフィールドを入力します：

- **Subscription**: ハブに使用するサブスクリプションを選択します。

- **Resource Group**: リソースグループを選択するか、新しいものを作成します。新しいものを作成するには、**Create new** を選択し、使用したい名前を入力します。既存のリソースグループを使用する場合は、そのリソースグループを選択します。詳細については、[Azure Resource Manager リソースグループの管理](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal)を参照してください。

- **Region**: ハブを配置する地域を選択します。最寄りの場所を選択してください。一部の機能（例：[IoT Hub device streams](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-device-streams-overview)）は特定の地域でのみ利用可能です。これらの限定された機能を使用するには、サポートされている地域のいずれかを選択する必要があります。

- **IoT Hub Name**: ハブの名前を入力します。この名前はグローバルで一意である必要があり、3～50文字の英数字で構成されます。名前にはダッシュ（'-'）文字も含めることができます。

:::note
IoT Hub は DNS エンドポイントとして公開されるため、名前に機密情報や個人を特定できる情報を入力しないようにしてください。
:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/148.png" /></div>

**Next: Networking** を選択してハブの作成を続行します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/149.png" /></div>

**Next: Management** を選択してハブの作成を続行します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/150.png" /></div>

ここではデフォルト設定を受け入れることができます。必要に応じて、以下のフィールドを変更することができます：

デバイスが IoT Hub に接続するために使用できるエンドポイントを選択します。デフォルト設定である **Public access** を選択するか、**Private access** を選択します。この例ではデフォルト設定を受け入れます。

- **Pricing and scale tier**

選択したティア。必要な機能の数やソリューションを通じて1日に送信するメッセージ数に応じて、いくつかのティアから選択できます。無料ティアはテストと評価を目的としており、ハブに500台のデバイスを接続し、1日に最大8,000メッセージを送信できます。各 Azure サブスクリプションは無料ティアで1つの IoT Hub を作成できます。

IoT Hub device streams のクイックスタートを進めている場合は、無料ティアを選択してください。

- **IoT Hub units**

ハブの価格ティアに応じて、1日あたりのユニットごとのメッセージ数が決まります。例えば、700,000メッセージの受信をサポートするハブを希望する場合、S1ティアのユニットを2つ選択します。他のティアオプションの詳細については、[適切な IoT Hub ティアの選択](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-scaling)を参照してください。

- **Microsoft Defender for IoT**

IoT とデバイスに追加の脅威保護層を追加するためにこれをオンにします。このオプションは無料ティアのハブでは利用できません。Defender for IoT における IoT Hub のセキュリティ推奨事項について詳しく学んでください。

- **Role-based access control**

IoT Hub へのアクセスを管理する方法を選択します。共有アクセスポリシーを許可するか、ロールベースのアクセス制御のみをサポートするかを選択します。詳細については、[Azure Active Directory を使用して IoT Hub へのアクセスを制御する](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-dev-guide-azure-ad-rbac)を参照してください。

- **Device-to-cloud partitions**

このプロパティは、デバイスからクラウドへのメッセージをメッセージの同時リーダー数に関連付けます。ほとんどのハブでは4つのパーティションが必要です。

**Next: Tags** を選択して次の画面に進みます。

タグは名前/値のペアです。同じタグを複数のリソースやリソースグループに割り当てて、リソースを分類し、請求を統合することができます。このドキュメントではタグを追加しません。詳細については、[Azure リソースを整理するためのタグの使用](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources)を参照してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/151.png" /></div>

**Next: Review + create** を選択して選択内容を確認します。ハブを作成する際に選択した値が表示されます。

残りの内容はデフォルトのままにし、変更しません。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/33.jpg" /></div>

**Create** を選択して新しいハブのデプロイを開始します。デプロイが完了するまで数分かかります。デプロイが完了したら、**Go to resource** を選択して新しいハブを開きます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/16.jpg" /></div>

既存の IoT Hub の設定は、作成後に IoT Hub ペインから変更することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/17.jpg" /></div>

## 共有秘密鍵の作成

**Add Shared Access Policy** をクリックし、以下の権限を持つ新しいアクセス ポリシーを作成します: **Registry Read**、**Registry Write**、**Device Connect**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/35.jpg" /></div>

作成後、自動的に4つの秘密鍵が生成されます。その中でコピーする必要があるのは **Primary connection string** です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/154.png" /></div>

:::note
**Primary connection string** を漏洩しないようにしてください。他人があなたの Azure IoT Hub にいつでもアクセスでき、設定したすべての権限を取得する可能性があります。
:::

## Helium への統合

ここで [Helium コンソール](https://console.helium.com/integrations) に戻り、Azure から Helium への統合を作成します。

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/152.png" /></div>

新しいページで **Add Integration** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/153.png" /></div>

新しいページで、上記で生成された **Primary connection string** を入力すると、Helium が残りの内容を自動的に生成します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/155.png" /></div>

最後に、この統合に名前を付けます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/156.png" /></div>

## 統合の接続

次に、Helium コンソールのクリック＆ドラッグインターフェースを使用して、デバイスを関数（デコーダー）に接続し、Azure 統合に接続します。詳細は[こちら](https://wiki.seeedstudio.com/ja/Helium-Introduction/#helium-console-flows)をご覧ください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/21.jpg" /></div>

この時点で、[以前の手順](https://wiki.seeedstudio.com/ja/Connecting-to-Helium/#upload-code-send-data-to-helium)に従ってコードを再度アップロードし、Wio Terminal が Helium に再接続してデータをアップロードします。

統合が完了し、デバイスが LoRaWAN® に参加して常に Helium にデータを送信するようになると、Azure IoT Hub のデバイス ペインに Helium ネットワークからのデバイス ID を持つデバイスが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/37.jpg" /></div>

また、シリアルモニターで返されたデータを確認することで、データ送信が成功したかどうかを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/24.jpg" /></div>

IoT Hub の「Overview」をクリックすると、IoT Hub を通じてメッセージが流れていることや、「Connected」としてリストされているデバイスを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/23.jpg" /></div>

- **Number of messages used:** 使用されたメッセージの総数（最大値）。
- **Device to cloud messages:** 送信されたテレメトリ メッセージ（カウント）。
- **Connected Devices:** 接続されたデバイス（最大値）。
- **Total IoT Devices:** 総デバイス数（最大値）。

これで、このチュートリアルの時点で、ローカルセンサーを Azure クラウドに完全にデプロイする手順を完了しました。次に、必要に応じてデータ処理をカスタマイズするオプションがあります。詳細は[こちら](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-messaging)をご覧ください。

もちろん、チュートリアルの内容を続けて、Microsoft の Web APP 統合を使用してデータの可視化を完了する方法を学ぶこともできます。

<table align="center">
  <tbody><tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/webapp.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Web APP 可視化の設定</strong><br /><br />このセクションでは、Microsoft Azure が受信したデータ情報を無料の Web APP 統合を使用して可視化する方法について説明します。<br /><br /><a href="https://wiki.seeedstudio.com/ja/Configuring-Web-APP-Visualization">始めましょう &gt;</a></td>
    </tr>
  </tbody></table>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 声明

- LoRa® マークは Semtech Corporation またはその子会社の商標です。
- LoRaWAN® は LoRa Alliance® からのライセンスの下で使用されるマークです。