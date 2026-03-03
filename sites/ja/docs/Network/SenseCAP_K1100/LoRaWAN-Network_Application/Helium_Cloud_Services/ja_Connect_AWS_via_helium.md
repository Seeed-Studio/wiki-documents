---
description: AWS IoTプラットフォーム統合
title: AWS IoTプラットフォーム統合
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Connect_AWS_via_helium
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Heliumを介してAWS IoT Coreに接続する

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Connect_AWS_via_Helium/AWS_IOT_Monitor.png" /></div>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66のハウジング、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そしてAPPからの強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトには最新のSenseCAP S210xを試してみてください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>SenseCAP産業用センサー</strong></font></td></tr>
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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8-in-1気象ステーション</strong></a></td>
    </tr>
  </tbody></table>

## AWS IoT Core の紹介

AWS IoT Core は、IoT デバイスを他のデバイスや AWS クラウドサービスに接続するクラウドサービスを提供します。AWS IoT は、IoT デバイスを AWS IoT ベースのソリューションに統合するのに役立つデバイスソフトウェアを提供します。デバイスが AWS IoT に接続できる場合、AWS IoT はそれらを AWS が提供するクラウドサービスに接続することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Connect_AWS_via_Helium/what-is-aws-iot.png" /></div>

AWS IoT は、ソリューションに最も適した最新技術を選択することを可能にします。フィールドで IoT デバイスを管理およびサポートするために、AWS IoT Core は以下のプロトコルをサポートしています：

- MQTT (Message Queuing and Telemetry Transport)
- MQTT over WSS (Websockets Secure)
- HTTPS (Hypertext Transfer Protocol - Secure)
- LoRaWAN® (Long Range Wide Area Network)

AWS IoT Core は、開発者が AWS クラウド上でデバイスベースのアプリケーションやサービスを構築できる強力なソリューションを提供します。そして、この Helium コンソールを介した統合により、デバイスを AWS IoT Core に安全に接続する複雑さが自動化されます。

:::note
このチュートリアルの完全な内容を体験するには、AWS IoT Core の料金を支払う必要がある場合があります。支払いとコストの詳細なリストは [こちら](https://calculator.aws/#/estimate) で概算できます。

提供されたコードの送信頻度（約 15 秒間隔でデータを送信）に基づくと、1 か月で約 178,560 件のメッセージが送信され、メッセージサイズは約 3 ～ 4 KB、月額コストは 0.18 USD となります。
<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/K1100/66.png"/></div>
:::

## AWS IoT Core の登録

[AWS IoT Core のウェブサイト](https://portal.aws.amazon.com/billing/signup#/start/email) にアクセスし、アカウントを登録してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/45.png" /></div>

登録したメールアドレスとユーザー名を入力すると、AWS から 6 桁の確認コードが記載されたメールが届きます。

確認コードを入力すると登録が完了します。先ほど入力したメールアドレスで AWS IoT Core にサインインしてください。

ログイン後、パスワードや連絡先などの個人情報を引き続き入力する必要があります。その後、個人情報を確認するためにクレジットカードをリンクする必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/46.png" /></div>

AWS IoT Core コンソールにログインする際は、**Root user** を選択してログインします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/48.png" /></div>

## AWS IoT Core へのアクセスを作成

この統合で使用する制限付き権限を持つ新しいユーザーを AWS 上で作成します。

1. [AWS コンソール](https://console.aws.amazon.com/) を開きます。

2. 左上の **Services** メニューをクリックし、**Security, Identity, & Compliance** に移動して **IAM** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/47.png" /></div>

次に、新しい **User** を作成します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/49.png" /></div>

ユーザー名を設定し、**Access key - Programmatic access** のみを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/50.png" /></div>

次のページでは、**Attach existing policies directly** を選択し、**Filter Policies** ボックスに **AWSIoTConfigAccess** と入力して、行の左側のチェックボックスをオンにします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/55.png" /></div>

その他のページではデフォルトのまま、または空のままにして、右下の **Next** をクリックし続けます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/51.png" /></div>

新しく作成したユーザーに、保持する権限を定義するポリシーをアタッチします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/52.png" /></div>

:::note

これらのキーを安全に記録して保存してください。一度作成すると再度アクセスする機会はありません！
:::
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1100/56.png" /></div>

## Helium に AWS IoT Core 統合を追加する

[Helium コンソール](https://console.helium.com/integrations)に戻り、AWS IoT Core を Helium に統合する設定を作成します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/43.png" /></div>

新しいページで **Add Integration** をクリックします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/44.png" /></div>

**Create access to AWS IoT Core** の内容で生成された Access Key と Secret Key をそれぞれ入力して、Helium AWS IoT Core 統合を設定します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/57.png" /></div>

**Region** には、AWS IoT Core サーバーが配置されているアドレスと同じリージョンコードを入力する必要があります。これは、AWS IoT Core コンソールの右上隅にあるユーザー名の横に表示されています。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1100/61.png" /></div>

ハイライトされた部分はユーザーが調整可能です。例えば、サーバーが配置されているリージョンを **US East (N. Virginia)** と選択し、リージョンコードを **us-east-1** とした場合、Helium の Region には対応する **us-east-1** を入力する必要があります。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1100/62.png" /></div>

**Topic** フィールドは、この統合がデバイスからのアップリンクメッセージを公開する AWS IoT MQTT トピックを指します。

最後に、新しい統合に名前を付けて **Create Integration** をクリックします。これで新しい統合が使用可能になります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/58.png" /></div>

## デバイスへの統合の接続

次に、Helium コンソールのクリック＆ドラッグインターフェースを使用して、デバイスを関数（デコーダー）および AWS IoT Core に接続します。詳細は[以前の説明](https://wiki.seeedstudio.com/ja/Helium-Introduction/#helium-console-flows)を参照してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/59.png" /></div>

この時点で、[以前の手順](https://wiki.seeedstudio.com/ja/Connecting-to-Helium/#upload-code-send-data-to-helium)に従ってコードを再度アップロードし、Wio Terminal が Helium に再接続してデータをアップロードします。

シリアルモニターで返されるデータを確認することで、データ送信の成功を確認することもできます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/24.jpg" /></div>

AWS IoT Core コンソールで **IoT Core** を検索してデータ管理インターフェースにアクセスします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/60.png" /></div>

- **Monitor** パネルでは、いくつかのデータ検出パネルを設定して、センサーデータがどのように受信されているかを視覚的に確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Connect_AWS_via_Helium/Final_1.png" /></div>

- **AWS IOT core -> All devices -> Things** では、現在のデバイスの ID 情報や、**AWS IOT core -> All devices -> Things -> Activity** におけるデータのアクティビティステータスを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/63.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Connect_AWS_via_Helium/Final_4.png" /></div>

- データのアップリンクメッセージは **AWS IOT core -> MQTT test client** で確認できます。

**Subscribe to a topic** タブで、デバイスがメッセージを公開するトピックにサブスクライブするために topicName を入力します。入門用サンプルアプリでは、すべてのメッセージトピックにサブスクライブする **#** を入力します。

トピックメッセージログページ **#** が開き、**#** が **Subscriptions** リストに表示されます。デバイスが設定され、サンプルプログラムを実行している場合、AWS IoT に送信されたメッセージが **#** メッセージログに表示されます。メッセージログエントリは、サブスクライブされたトピックのメッセージが AWS IoT に受信されると、Publish セクションの下に表示されます。

サブスクライブされたトピックに公開されたメッセージは、受信時にメッセージログに表示され、最新のメッセージが最初に表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/64.png" /></div>

受信したメッセージは以下のような形式になります。一般的に、センサーの値を示す **payload** に続く内容が有用なデータです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/65.png" /></div>

これで、Helium の AWS IoT Core への統合がすべて完了しました。AWS IoT Core を通じてデータをさらに活用したい場合は、[AWS IoT Core のドキュメントセンター](https://docs.aws.amazon.com/iot/index.html)を参照して、さらに深く学習してください。

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>