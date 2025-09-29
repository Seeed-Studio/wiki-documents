---
description: Power BI を使用したデータ可視化
title: Power BI を使用したデータ可視化
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/K1100_Azure_to_PowerBI
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Microsoft Azure IoT を使用した Power BI でのデータ可視化

**SenseCAP K1100 - センサープロトタイプキット**は、Seeed Studio が LoRa® 通信技術とエッジインテリジェンス製品のエッセンスを凝縮し、LoRa® および IoT アプリケーションの最も簡単な展開と習得を可能にするものです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## 産業用センサーへのアップグレードが可能

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングを支援するだけでなく、堅牢な [産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) を備えた SenseCAP シリーズを使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そしてアプリからの強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用のセンサーが含まれています。次の産業プロジェクトで最新の SenseCAP S210x をお試しください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>SenseCAP 産業用センサー</strong></font></td></tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> データロガー</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 空気温度 &amp; 湿度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光強度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 空気温度 &amp; 湿度 &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> 土壌水分 &amp; 温度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壌水分 &amp; 温度 &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® コントローラー</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8-in-1 気象ステーション</strong></a></td>
    </tr>
  </tbody></table>

## Microsoft Azure IoT

[Microsoft Azure IoT](https://azure.microsoft.com/en-us/overview/iot) は、Microsoft が管理するクラウドサービスのコレクションであり、数十億の IoT 資産を接続、監視、制御します。これには、デバイスや機器のセキュリティおよびオペレーティングシステム、さらに IoT アプリケーションの構築、展開、管理を支援するデータと分析が含まれています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png" alt="pir" width={1200} height="auto" /></p>

## Power BI

Power BI と Azure 分析サービス（Azure Synapse Analytics や Azure Data Lake Storage を含む）を組み合わせることで、データ資産全体を接続して分析できます。ペタバイト規模のデータを分析し、高度な AI 機能を活用し、追加のデータ保護を適用し、組織全体でインサイトを簡単に共有できます。

Power BI と Azure を組み合わせてデータ資産全体を接続、統合、分析することで、データを競争優位性に変えることができます。

このチュートリアルでは、IoT Central アプリケーションを構成してデバイスから収集したテレメトリをエクスポートします。その後、Power BI を使用して、テレメトリから得られたインサイトを店舗管理者が視覚化できるカスタムダッシュボードを作成します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_powerbi/powerbi_logo.png" /></div>

このチュートリアルでは以下を学びます：

- IoT Central アプリケーションを構成して、テレメトリをイベントハブにエクスポートする方法。
- Logic Apps を使用してイベントハブから Power BI ストリーミングデータセットにデータを送信する方法。
- ストリーミングデータセットのデータを視覚化する Power BI ダッシュボードを作成する方法。

## 事前準備

このチュートリアルを完了するには、以下が必要です：

- Azure サブスクリプション。Azure サブスクリプションをお持ちでない場合は、開始する前に [無料アカウント](https://azure.microsoft.com/free/?WT.mc_id=A261C142F) を作成してください。
- Power BI アカウント。Power BI アカウントをお持ちでない場合は、開始する前に [無料の Power BI Pro トライアル](https://app.powerbi.com/signupredirect?pbi_source=web) にサインアップしてください。
- 以下のいずれかの Wiki で、Azure IoT Central にデータを正常にアップロードしていること。
  - [Node-RED を介して SenseCAP を Azure IoT Central に接続する](https://wiki.seeedstudio.com/ja/K1100_SenseCAP_to_Azure_IoT_Central/)
  - [Wio Terminal を Microsoft Azure IoT Central に接続する (WiFi)](https://wiki.seeedstudio.com/ja/Connect-Wio-Terminal-to-Azure-IoT-Central/)

## リソースグループを作成する

イベントハブとロジックアプリを作成する前に、それらを管理するための **リソースグループ** を作成する必要があります。リソースグループは、In-store analytics - checkout IoT Central アプリケーションと同じ場所にある必要があります。リソースグループを作成するには：

**ステップ 1.** [Azure ポータル](https://portal.azure.com/) にサインインします。

**ステップ 2.** 左側のナビゲーションで **リソースグループ** を選択します。その後、**作成** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/1.png" /></div>

- **サブスクリプション** には、IoT Central アプリケーションを作成する際に使用した Azure サブスクリプションの名前を選択します。
- **リソースグループ** の名前には **retail-store-analysis** を入力します。
- **リージョン** には、IoT Central アプリケーションで選択したものと同じリージョンを選択します。

**ステップ 3.** [レビュー + 作成] を選択します。

レビュー + 作成ページで [作成] を選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/2.png" /></div>

これで、サブスクリプション内に retail-store-analysis という名前のリソースグループが作成されました。

## イベントハブの設定

小売モニタリングアプリケーションでテレメトリをエクスポートするように設定する前に、エクスポートされたデータを受信するためのイベントハブを作成する必要があります。以下の手順に従って、イベントハブを作成してください：

**ステップ 4.** [Azure ポータル](https://portal.azure.com/)で、画面左上の **リソースの作成** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/3.png" /></div>

**ステップ 5.** Marketplace を検索で「Event Hubs」と入力し、Enter キーを押します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/4.png" /></div>

**ステップ 6.** イベントハブを作成する

Event Hubs ページで **作成** を選択します。Create Namespace ページで以下の手順を実行します：

- IoT Central アプリケーションを作成したのと同じ **サブスクリプション** を選択します。
- **retail-store-analysis** リソースグループを選択します。
- **k1100-retail-store-analysis** のような一意の名前を名前空間に入力します。
- IoT Central アプリケーションで使用したのと同じ場所を選択します。
- Basic プライシング層を選択します。

**確認および作成** を選択します。リソースのプロビジョニングには数分かかる場合があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/5.png" /></div>

**ステップ 7.** イベントハブの共有キーを取得する

[Azure ポータル](https://portal.azure.com/)で、**retail-store-analysis** リソースグループに移動します。

デプロイメントが完了するのを待ちます。デプロイメントのステータスを更新するには、**更新** を選択する必要がある場合があります。また、通知でイベントハブ名前空間の作成ステータスを確認することもできます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/6.png" /></div>

**retail-store-analysis** リソースグループで、**Event Hubs Namespace** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/7.png" /></div>

ポータルで Event Hubs Namespace のホームページが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/8.png" /></div>

IoT Central から接続するには、送信権限を持つ **接続文字列** が必要です。接続文字列を作成するには：

- Azure ポータルの Event Hubs 名前空間で、**共有アクセス ポリシー** を選択します。**+ 追加** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/9.png" /></div>

- ポリシー名として **SendPolicy** を入力し、**送信** を選択してから **作成** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/10.png" /></div>

- ポリシーのリストで **SendPolicy** を選択します。**接続文字列-主キー** の値をメモしておきます。この値は、IoT Central でエクスポート先を設定する際に使用します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/11.png" /></div>

**ステップ 8.** イベントハブの管理およびリッスンキーを取得する

ロジックアプリからイベントハブに接続するには、管理およびリッスン権限を持つ接続文字列が必要です。接続文字列を取得するには：

- Azure ポータルの Event Hubs 名前空間で、**共有アクセス ポリシー** を選択します。

- ポリシーのリストで **RootManageSharedAccessKey** を選択します。
**接続文字列-主キー** の値をメモしておきます。この値は、ロジックアプリでイベントハブからテレメトリを取得する際に使用します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/12.png" /></div>

**ステップ 8.** 使用するイベントハブを作成する

Event Hubs Namespace を作成したので、IoT Central アプリケーションで使用するイベントハブを作成できます：

- ポータルの Event Hubs Namespace のホームページで、**+ Event Hub** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/13.png" /></div>

- Create Event Hub ページで、名前として **store-telemetry** を入力し、**作成** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/14.png" /></div>

これで、IoT Central アプリケーションからデータをエクスポートする際に使用できるイベントハブが作成されました。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/15.png" /></div>

## データエクスポートの設定

イベントハブを作成したら、接続されたデバイスからのテレメトリをエクスポートするように IoT Central アプリケーションを設定できます。以下の手順でエクスポートを設定する方法を説明します。

**ステップ 1.** [IoT Central アプリケーション](https://apps.azureiotcentral.com/home) にサインインします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/16.png" /></div>

**ステップ 2.** データエクスポート

左側のペインで **Data export** を選択します。次に **+ New export** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/18.png" /></div>

- エクスポート名として **Telemetry export** を入力します。
- エクスポートするデータの種類として **Telemetry** を選択します。
- Destinations セクションで **create a new one** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/19.png" /></div>

- 新しい宛先
  - **Destination name** に **Store data event hub** を入力します。
  - **Destination type** に **Azure Event Hubs** を選択します。
  - **Authorization** に **Connection string** を選択します。
  - イベントハブを作成した際に保存した **SendPolicy** の接続文字列を貼り付けます。
  - Event Hub に **store-telemetry** を入力します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/20.png" /></div>

**Create** を選択し、次に **Save** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/21.png" /></div>

Telemetry export ページで、エクスポートステータスが Healthy に変わるのを待ちます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/22.png" /></div>

データエクスポートがイベントハブにテレメトリを送信し始めるまで数分かかる場合があります。Data exports ページでエクスポートのステータスを確認できます。

## Power BI データセットの作成

Power BI ダッシュボードは、小売監視アプリケーションからのデータを表示します。このソリューションでは、Power BI ダッシュボードのデータソースとして Power BI ストリーミングデータセットを使用します。このセクションでは、ストリーミングデータセットのスキーマを定義し、ロジックアプリがイベントハブからデータを転送できるようにします。以下の手順で、環境センサー用の 2 つのストリーミングデータセットと、占有センサー用の 1 つのストリーミングデータセットを作成する方法を説明します。

**ステップ 1.** [Power BI アカウント](https://app.powerbi.com/) にサインインします。

**ステップ 2.** ワークスペースを作成します。

**Workspaces** を選択し、次に **Create a workspace** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/23.png" /></div>

Create a workspace ページで、Workspace name に **In-store analytics - checkout** を入力します。**Save** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/24.png" /></div>

**ステップ 3.** ストリーミングデータセットを作成します。

ワークスペースページで、**+ New** > **Streaming dataset** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/25.png" /></div>

New streaming dataset ページで、API を選択し、次に **Next** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/26.png" /></div>

**Dataset name** に **Sensor** を入力します。

以下の表に示す 3 つのストリーム値を入力します。

| 値の名前                | 値のタイプ                   |
|-------------------------|------------------------------|
| Timestamp               | DataTime                     |
| Light                   | Number                       |
| Acceleration X          | Number                       |
| Acceleration Y          | Number                       |
| Acceleration Z          | Number                       |
| Sound                   | Number                       |

これでストリーミングデータセットが作成されました。ロジックアプリは、In-store analytics - checkout アプリケーションに接続された Wio Terminal からのテレメトリをデータセットにルーティングします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/27.png" /></div>

## ロジックアプリを作成する

このソリューションでは、ロジックアプリがイベントハブからテレメトリを読み取り、データを解析し、作成した Power BI ストリーミングデータセットに送信します。

ロジックアプリを作成する前に、IoT Central アプリケーションに接続した Wio Terminal のデバイス ID が必要です。

**ステップ 1.** デバイス ID を確認する

- [IoT Central アプリケーション](https://apps.azureiotcentral.com/myapps) にサインインします。左側のペインで **Devices** を選択し、次に **Seeed Wio Terminal** を選択します。

**Device ID** をメモしてください。以下のスクリーンショットでは、ID は **k1100** です：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/28.png" /></div>

**ステップ 2.** ロジックアプリを作成する

- [Azure ポータル](https://portal.azure.com/) にサインインし、画面左上の **Create a resource** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/3.png" /></div>

- Marketplace を検索する際に **Logic App** と入力し、Enter を押します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/29.png" /></div>

Logic App 作成ページで以下を設定します：

- IoT Central アプリケーションを作成したのと同じ **Subscription** を選択します。
- **retail-store-analysis** リソースグループを選択します。
- ロジックアプリの一意の名前を入力します（例：**yourname-retail-store-analysis**）。
- IoT Central アプリケーションを作成したのと同じ場所を選択します。
- **Type** を **Consumption** に設定します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/30.png" /></div>

**Create** を選択します。リソースのプロビジョニングには数分かかる場合があります。

**ステップ 2.** Logic Apps Designer を構成する

Azure ポータルで新しいロジックアプリに移動します。Logic Apps Designer ページで下にスクロールし、**Blank Logic App** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/31.png" /></div>

- **Search connectors and triggers** に **Event Hubs** と入力します。
- **Triggers** で **When events are available in Event Hub** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/32.png" /></div>

- **Connection name** に **Store telemetry** を入力します。
- **Authentication Type** として **Access key** を選択します。
- 以前にメモした **RootManageSharedAccessKey** ポリシーのイベントハブ接続文字列を貼り付け、**Create** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/33.png" /></div>

Event Hub アクションで以下を設定します：

- **Event Hub name** に **store-telemetry** を選択します。
- **Content type** に **application/json** を選択します。
- Interval を 3 に、Frequency を seconds に設定します。
- **Save** を選択してロジックアプリを保存します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/34.png" /></div>

ロジックアプリデザインにロジックを追加するには、**Code view** を選択します：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/35.png" /></div>

`"actions: {},"` を以下の JSON に置き換えます。その後、プレースホルダー `[YOUR RUUVITAG DEVICE ID]` を Wio Terminal の ID に置き換えます。

```JSON
"actions": {
            "Initialize_Device_ID_variable": {
                "inputs": {
                    "variables": [
                        {
                            "name": "DeviceID",
                            "type": "String"
                        }
                    ]
                },
                "runAfter": {},
                "type": "InitializeVariable"
            },
            "Parse_Telemetry": {
                "inputs": {
                    "content": "@triggerBody()?['ContentData']",
                    "schema": {
                        "properties": {
                            "deviceId": {
                                "type": "string"
                            },
                            "enqueuedTime": {
                                "type": "string"
                            },
                            "telemetry": {
                                "properties": {
                                    "accelX": {
                                        "type": "number"
                                    },
                                    "accelY": {
                                        "type": "number"
                                    },
                                    "accelZ": {
                                        "type": "number"
                                    }
                                },
                                "type": "object"
                            },
                            "templateId": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    }
                },
                "runAfter": {
                    "Initialize_Device_ID_variable": [
                        "Succeeded"
                    ]
                },
                "type": "ParseJson"
            },
            "Set_Device_ID_variable": {
                "inputs": {
                    "name": "DeviceID",
                    "value": "@body('Parse_Telemetry')?['deviceId']"
                },
                "runAfter": {
                    "Parse_Telemetry": [
                        "Succeeded"
                    ]
                },
                "type": "SetVariable"
            },
            "Switch_by_DeviceID": {
                "cases": {
                    "Occupancy": {
                        "actions": {},
                        "case": "Occupancy"
                    },
                    "Sensor_environment": {
                        "actions": {},
                        "case": "k1100"
                    }
                },
                "default": {
                    "actions": {}
                },
                "expression": "@variables('DeviceID')",
                "runAfter": {
                    "Set_Device_ID_variable": [
                        "Succeeded"
                    ]
                },
                "type": "Switch"
            }
        },
```

**保存**を選択し、次に**デザイナー**を選択して、追加したロジックのビジュアルバージョンを確認します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/36.png" /></div>

**Switch by DeviceID**を選択してアクションを展開します。その後、**Sensor environment**を選択し、**アクションを追加**を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/37.png" /></div>

**Search connectors and actions**で、**Add rows to a dataset**を入力します。**Power BI Add rows to a dataset**アクションを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/38.png" /></div>

**サインイン**を選択し、指示に従ってPower BIアカウントにサインインします。サインインプロセスが完了したら、Add rows to a datasetアクションで以下を設定します：

- **Workspace**として**In-store analytics - checkout**を選択します。
- **Dataset**として**Sensor**を選択します。
- **Table**として**RealTimeData**を選択します。
- **Add new parameter**を選択し、**Timestamp**、**Light**、**Acceleration X**、**Acceleration Y**、**Acceleration Z**、および**Sound**フィールドを選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/40.png" /></div>

- **Timestamp**フィールドを選択し、Dynamic contentリストから**enqueuedTime**を選択します。
- **Light**フィールドを選択し、Parse Telemetryの横にある**See more**を選択します。その後、Lightを選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/41.png" /></div>

- **Acceleration X**フィールドを選択し、Parse Telemetryの横にある**See more**を選択します。その後、accelXを選択します。
- **Acceleration Y**フィールドを選択し、Parse Telemetryの横にある**See more**を選択します。その後、accelYを選択します。
- **Acceleration Z**フィールドを選択し、Parse Telemetryの横にある**See more**を選択します。その後、accelZを選択します。
- **Sound**フィールドを選択し、Parse Telemetryの横にある**See more**を選択します。その後、Soundを選択します。

**保存**を選択して変更を保存します。Sensor environmentアクションは以下のスクリーンショットのようになります。

Zone 2 environmentアクションを選択し、**アクションを追加**を選択します。

**Search connectors and actions**で、**Add rows to a dataset**を入力します。

ロジックアプリは自動的に実行されます。各実行のステータスを確認するには、Azureポータルのロジックアプリの概要ページに移動し、**Runs history**を選択します。**更新**を選択して実行リストを更新します。

## Power BIダッシュボードを作成する

これで、IoT Centralアプリケーションからイベントハブを通じてテレメトリが流れています。その後、ロジックアプリがイベントハブメッセージを解析し、それをPower BIストリーミングデータセットに追加します。次に、テレメトリを視覚化するためのPower BIダッシュボードを作成します：

**ステップ1.** [Power BIアカウント](https://app.powerbi.com/)にサインインします。

**ステップ2.** **Workspaces** > **In-store analytics - checkout**を選択します。

**ステップ3.** **+ New** > **Dashboard**を選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/50.png" /></div>

**Store analytics**をダッシュボード名として入力し、**作成**を選択します。

### 折れ線グラフを追加する

Wio Terminalの内蔵センサーからの三軸データを表示する折れ線グラフタイルを追加します。以下の表の情報を使用してタイルを作成します。各タイルを追加するには、**編集** > **タイルを追加**を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/51.png" /></div>

**Custom Streaming Data**を選択し、次に**次へ**を選択します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_powerbi/52.png" /></div>

水平座標にタイムスタンプを表示し、垂直座標にX、Y、Z軸のデータ値を表示するように設定します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/53.png" /></div>

データストリームが転送を開始すると、ダッシュボードが折れ線グラフとして表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/55.png" /></div>

<!--### 環境データを表示するカードを追加する

### チェックアウト占有データを表示するタイルを追加する-->

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>