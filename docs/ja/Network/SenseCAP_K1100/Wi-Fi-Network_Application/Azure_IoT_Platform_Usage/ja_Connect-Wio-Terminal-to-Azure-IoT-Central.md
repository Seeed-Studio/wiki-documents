---
description: Microsoft Azure IoT Central の使い方を始める
title: Microsoft Azure IoT Central の使い方を始める
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Connect-Wio-Terminal-to-Azure-IoT-Central
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Wio Terminal を Microsoft Azure IoT Central に接続する

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングをサポートするだけでなく、SenseCAP シリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そして強力な APP サポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトには最新の SenseCAP S210x を試してみてください。

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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光</strong></a></td>
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

## はじめに

このチュートリアルでは、Wio Terminal を Microsoft Azure IoT Central に接続し、Wio Terminal のオンボードセンサーやハードウェア（3軸加速度センサー、光センサー、3つのボタンなど）からのテレメトリーデータを Microsoft Azure IoT Central に送信する方法を説明します。その後、インタラクティブなダッシュボードでセンサーデータを視覚化できるようになります。また、Azure IoT Central を使用して、Wio Terminal のオンボードブザーを鳴らすなどのハードウェア制御も可能になります。Microsoft Azure IoT Central は HTTP、MQTT、AMQP プロトコルをサポートしていますが、このチュートリアルでは MQTT プロトコルを使用します。

### Microsoft Azure とは？

[Microsoft Azure](https://azure.microsoft.com) は、Microsoft が提供するパブリッククラウドコンピューティングプラットフォームです。Microsoft Azure を使用すると、Microsoft が管理するデータセンターを通じて、アプリケーションやサービスの構築、テスト、デプロイ、管理が可能です。

また、コンピューティング、分析、ストレージ、ネットワーキングなど、さまざまなクラウドサービスを提供しています。Microsoft Azure は、ソフトウェア・アズ・ア・サービス（SaaS）、プラットフォーム・アズ・ア・サービス（PaaS）、インフラストラクチャ・アズ・ア・サービス（IaaS）、サーバーレスを提供します。さらに、多くのプログラミング言語、ツール、フレームワークをサポートしています。

### Microsoft Azure IoT とは？

[Microsoft Azure IoT](https://azure.microsoft.com/en-us/overview/iot) は、数十億の IoT デバイスを接続、監視、制御するための Microsoft 管理のクラウドサービスのコレクションです。これには、デバイスや機器のセキュリティおよびオペレーティングシステム、データおよび分析が含まれ、企業が IoT アプリケーションを構築、展開、管理するのを支援します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png" alt="pir" width={1200} height="auto" /></p>

### Microsoft Azure IoT Central とは？

[Microsoft Azure IoT Central](https://azure.microsoft.com/en-us/services/iot-central) は、完全に管理されたグローバル IoT SaaS（ソフトウェア・アズ・ア・サービス）ソリューションであり、大規模な IoT アセットの接続、監視、管理を簡単に行えるようにします。高いセキュリティを備え、ビジネスの成長に応じてスケールし、投資の再利用性を確保し、既存のビジネスアプリケーションと統合します。また、ビジネスアプリケーションと IoT データのギャップを埋める役割を果たします。さらに、デバイスの再構成や更新を一元管理する機能を提供します。

### IoT Plug and Play とは？

[IoT Plug and Play](https://docs.microsoft.com/en-us/azure/iot-pnp) は、ソリューションビルダーがスマートデバイスを手動設定なしでソリューションに統合できるようにする機能です。IoT Plug and Play の中心には、デバイスが IoT Plug and Play 対応アプリケーションにその機能を通知するために使用するデバイスモデルがあります。このデバイスモデルには以下が含まれます：

- プロパティ：デバイスやその他のエンティティの読み取り専用または書き込み可能な状態を表します
- テレメトリ：デバイスから送信されるデータ
- コマンド：デバイスで実行可能な機能や操作を記述します

IoT Plug and Play 認定デバイスは、Azure IoT Central でのデバイス設定（テンプレートの作成や機能・インターフェースの追加など）の手間を省きます。

### IoT Plug and Play 認定デバイス

IoT Plug and Play 認定デバイスは、[Azure Certified Device Catalog](https://devicecatalog.azure.com) に IoT Plug and Play バッジ付きで掲載されているデバイスです。

[Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) は、IoT Plug and Play 認定デバイスです。

<p style={{textAlign: 'center'}}><a href="https://devicecatalog.azure.com/devices/8b9c5072-68fd-4fc3-8e5f-5b15e3a20bd9"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" alt="pir" width={650} height="auto" /></a></p>

IoT Plug and Play 認定を受けるには、いくつかの基準をクリアする必要があります。その一つが、デバイスの機能を定義する DTDL（Digital Twins Definition Language）モデルを GitHub 上の [Azure/ iot-plugandplay-models (DMR)](https://github.com/Azure/iot-plugandplay-models) に公開することです。

これにより、IoT Plug and Play 認定デバイスを使用するクラウドサービスが、このリポジトリからデバイスの機能について学ぶことができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/PnP_devices.png" alt="pir" width={850} height="auto" /></p>

## Microsoft Azure IoT Central に MQTT を使用して Wio Terminal を接続する

前述のとおり、Wio Terminal と Microsoft Azure IoT Central 間の通信には MQTT を使用します。ただし、必要に応じて HTTP ブリッジを使用することも可能です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_receive.png" alt="pir" width={1200} height="auto" /></p>

### Microsoft Azure IoT Central のセットアップ

まず、Microsoft Azure IoT Central にアクセスし、Microsoft アカウントにログインして、プロジェクト用の新しいアプリケーションを作成します。

**ステップ 1.** Azure IoT Central にログインする

公式の [Azure IoT Central](https://apps.azureiotcentral.com/home) ウェブサイトにアクセスし、左側のナビゲーションメニューから **Build** をクリックし、**Custom apps** を選択します。

まだ Azure IoT Central にログインしていない場合は、この時点で登録/ログインを完了するよう求められます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/1.png" /></div>

**ステップ 2.** **Application name** を入力し、**Pricing plan** で **Standard 0** を選択します。アプリケーション名を入力すると、自動的にアプリケーション URL が作成されます。この例では、最小限のコストでタスクを完了します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/2.png" /></div>

:::note
Azure IoT Central を初めて使用する場合は、**Free** を選択することをお勧めします。これにより料金が発生しません。
:::
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_azure_central/9.png" /></div>

**ステップ 3.** デバイステンプレートを作成する

左側のメニューバーで **Device templates** をクリックして、新しいデバイステンプレートを作成してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/2.png" /></div>

テンプレートとして **Wio Terminal** を選択してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/3.png" /></div>

その後、**Create** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/4.png" /></div>

これで、準備済みのテンプレートが作成されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/5.png" /></div>

**ステップ 5.** デバイスを作成する

左側のメニューバーで **Devices -> Seeed Wio Terminal** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/6.png" /></div>

**New** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/7.png" /></div>

**Create** ボタンをクリックしてデバイスの作成を完了します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/8.png" /></div>

デバイスを作成すると、**Device** の下に作成したデバイスが表示されます。デバイスをクリックして、左上の **Connect** ボタンをクリックしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/9.png" /></div>

ここで以下の情報が必要になります。

```
ID scope
Device ID
Primary key
```

この情報をメモしておいてください。次のステップで使用します。

### Wio Terminal のセットアップ

**ステップ 1.** ファームウェアをコンピュータにダウンロードする

2 番目のファームウェアリリースである SenseCraft は、Azure IoT Central を最も簡単にサポートします。

**Latest release** の下で **SenseCraft-vx.x.uf2** をクリックして .uf2 ファイルをダウンロードしてください。

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**ステップ 2.** ファームウェアを Wio Terminal にアップロードする

Wio Terminal を PC に接続して電源を入れ、**Bootloader モード** に入ります。電源スイッチを「ON」位置からさらに下にスライドさせて離し、再度スライドさせて離します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" alt="pir" width={500} height="auto" /></p>

:::note
Wio Terminal が Bootloader モードに入ると、青色の LED が点滅とは異なる方法で呼吸するように点灯します。
:::
PC のファイルエクスプローラーを開くと、**Arduino** という名前の新しい外部ドライブが表示されます。先ほどダウンロードした **.uf2 ファイル** をこの **Arduino ドライブ** にドラッグしてください。

これで、ファームウェアを Wio Terminal に正常にアップロードしました。

**ステップ 3.** Wi-Fi と Azure IoT の設定

**SenseCraft** ファームウェアを使用すると、Wio Terminal をコンピュータに接続した際に USB スティックが表示されます。

:::note
これは、Wio Terminal をコンピュータに接続すると USB スティックが表示されることを意味し、**サイドボタンを追加で 2 回切り替える必要はありません**！
:::
この時点で、USB スティック内に **config.txt** ファイルが存在します。適切なテキストエディタで開き、必要な設定を追加してください。

```
SSID=WiFi_Name                        // ここに WiFi 名を入力してください
PASSWORD=WiFi_Password                // ここに WiFi パスワードを入力してください          
ID_SCOPE=Default_ID_Scope             // ここに ID Scope を入力してください
DEVICE_ID=Device_ID                   // ここにデバイス ID を入力してください
PRIMARY_KEY=Primary_Key               // ここにデバイスの Primary key を入力してください
```

上記を完了したら保存してください。Wio Terminal を再起動して設定を有効にします。

### Microsoft Azure IoT Central でテレメトリデータを表示する

**ステップ 1.** Wio Terminal を WiFi に接続する

**Network** タブに入り、**WiFi** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/51.png" /></div>

これで設定が読み込まれるのを待ちます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/52.png" /></div>

WiFi設定が読み込まれると、まずWiFiネットワークに接続し、その後Azure IoT Centralに接続します。Azure IoT Centralとの接続が成功すると、以下の画面が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/53.png" /></div>

**ステップ 2.** Wio Terminal データの解析

**テンプレート**に表示されるテンプレートスタイルを変更する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/26.png" /></div>

SenseCraftのデータ型に適応し、適切なデータ表示を実現するために、以下の表に従って生データを入力する必要があります。

| 表示名           | 名前        | 機能タイプ       | セマンティックタイプ |
|------------------|-------------|------------------|------------------|
| 加速度 X         | IMU0        | テレメトリ       | なし             |
| 加速度 Y         | IMU1        | テレメトリ       | なし             |
| 加速度 Z         | IMU2        | テレメトリ       | なし             |
| 光               | Light       | テレメトリ       | なし             |
| 音               | Sound       | テレメトリ       | なし             |
| 温度             | Temp_Humi0  | テレメトリ       | なし             |
| 湿度             | Temp_Humi1  | テレメトリ       | なし             |
| CO2              | CO2_VOC0    | テレメトリ       | なし             |
| VOC              | CO2_VOC1    | テレメトリ       | なし             |
| 土壌湿度         | Soil        | テレメトリ       | なし             |
| Vision AI 1      | Vision0     | テレメトリ       | なし             |
| Vision AI 2      | Vision1     | テレメトリ       | なし             |
| Vision AI 3      | Vision2     | テレメトリ       | なし             |
| Vision AI 4      | Vision3     | テレメトリ       | なし             |
| Vision AI 5      | Vision4     | テレメトリ       | なし             |
| Vision AI 6      | Vision5     | テレメトリ       | なし             |
| Vision AI 7      | Vision6     | テレメトリ       | なし             |
| Vision AI 8      | Vision7     | テレメトリ       | なし             |
| Vision AI 9      | Vision8     | テレメトリ       | なし             |
| Vision AI 10     | Vision9     | テレメトリ       | なし             |

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/68.png" /></div>

フォームの入力が完了したら、**Save** ボタンをクリックしてください。

左側のナビゲーションメニューから **Overview** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/16.png" /></div>

**select a telemetry** ドロップダウンメニューを展開し、可視化したいテレメトリを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/70.png" /></div>

**Add tile** をクリックすると、Azure IoT Centralの Dashboard にタイルが追加されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/71.png" /></div>

**注意:** タイルのサイズ変更や可視化の変更は、好みに応じて行うことができます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_azure_central/19.png" /></div>

**Save** をクリックし、次に **Publish** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/27.png" /></div>

以前訪れたAzure IoT Centralの Dashboard を開きます。左側のナビゲーションメニューから **Devices** をクリックします。デバイスの下に **Seeed Wio Terminal** が表示されます。それをクリックしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/14.png" /></div>

以前に設定した **デバイス名** のエントリをクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/23.png" /></div>

**Raw data** タブをクリックすると、すべてのテレメトリデータをリアルタイムで確認することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/28.png" /></div>

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験をしていただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>