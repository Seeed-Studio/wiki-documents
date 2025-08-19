---
description: N3uronを使用してMQTTとModbusを統合し、シームレスなデータ収集を実現し、AWSクラウドに公開する方法を学びます。このガイドでは、セットアップ、構成、およびデータの前処理をカバーし、産業オートメーションプロジェクトを最適化します。
title: N3uron、MQTT、およびModbusを使用して産業データをAWSクラウドに公開する
keywords:
  - reComputer R1000
  - MQTT
  - IIoT
  - 産業
  - N3uron
  - Modbus
  - AWS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/recomputer_r1000_n3uron_modbus_mqtt_aws
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

産業オートメーションにおいて、Modbusは最も一般的なプロトコルの1つとして際立っています。一方、MQTTはその多くの特性により、産業オートメーションにおけるIoTの主要なプロトコルとして浮上しています。その軽量設計、効率性、スケーラビリティ、非同期メッセージングのサポートが注目に値します。MQTTでは、デバイスは報告可能なイベントがある場合にのみ通信を行い、定期的な更新チェックとは対照的です。このイベント駆動型アプローチは、例外による報告（データが基準から逸脱した場合や特定のトリガーでのみデータを送信）と組み合わさり、帯域幅とリソースを節約し、重要なIoTアプリケーション向けにデータ伝送を最適化します。

reComputer R1000と[N3uron](https://n3uron.com/) Duoの強力な組み合わせは、堅牢な接続性とデータ操作機能を提供することで効率的なプラント管理を可能にします。このWikiでは、産業環境におけるModbus TCPの重要性を強調し、接続性をさらに向上させるためのMQTTデバイスのシームレスな統合について説明します。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### ソフトウェア

[N3uronの使い方](https://wiki.seeedstudio.com/ja/recomputer_r1000_n3uron/)ガイドを学習することを強くお勧めします。このガイドでは、N3uronのWebインターフェースの操作、Web UIおよびWeb Visionモジュールの概念の理解、タグの概念の把握、基本的なダッシュボードの作成など、重要な洞察を提供します。これらの基本をまだ学んでいない場合は、先に進む前にこれらを確認することをお勧めします。リンクを通じてガイドにアクセスできます。

### Modbus TCP/IPのためのイーサネット設定の構成

PLC/デバイスのIPドメインが無線設定と異なるため、IP構成を手動で変更する必要がある場合があります。そのためには、

- **ステップ01**: **Bullseye**を実行している場合、以下のコマンドを実行します：

```sh
sudo nano /etc/dhcpcd.conf
```

- **ステップ02**: 次に、PLC/デバイスのネットワークドメインに従ってイーサネットポート設定を構成し、**metric**コマンドを使用して優先順位を設定します。最も低いメトリックが最も高い優先順位を持ちます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/ipconfig.PNG" /></center>

- **ステップ01**: **Bookworm OS**を実行している場合、GUIを使用してネットワークアイコンをクリックします。詳細オプションの下で「接続を編集」を選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network1.PNG" /></center>

- **ステップ02**: 「Wired Connection 2」（ETH 1）を選択し、IPv4設定の下でアドレス、ネットマスク、およびゲートウェイを追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network2.PNG" /></center>

## Modbusモジュールの作成と設定

N3uronのWebUIインターフェースでモジュールインスタンスを作成する

- ステップ01: ナビゲーションパネルで**Config**を選択します。
- ステップ02: エクスプローラーパネルで**Modules**を選択します。
- ステップ03: モデルメニューをクリックし、**New Module**を選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/modbusmodule.PNG" /></center>

- ステップ04: インスタンスには任意の名前を付けることができますが、この例では**ModbusClient**を使用します。
- ステップ05: モジュールタイププロパティを**ModbusClient**に設定します。他のプロパティはデフォルト値のままにして、**Save**をクリックします。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/modbusmodule2.PNG" /></center>

### チャンネルの作成と設定

- ステップ01: 作成したModbusクライアントとモデルの下で、**New Channel**を選択します。チャンネル名を**Client**とします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/newmodbuschannel.PNG" /></center>

- ステップ02: 次に、Modbus TCPを使用してPLCと通信します。PLCの**IPアドレス**と**ポートアドレス**を入力してください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/clientconfig.PNG" /></center>

:::note
 Modbus RTUを使用する場合、考慮すべきさまざまな設定があります。その場合、COMポート、ボーレートなどの詳細を入力する必要があります。N3uronでのModbus RTUおよびTCPプロトコルの設定に関する詳細は、提供された[ガイド](https://docs.n3uron.com/docs/modbus-client-configuration)を参照してください。
:::

- ステップ03: デバイスを追加します。各チャンネルには1つ以上のデバイスを設定できます。デバイスに**名前**を付けて設定を進めます。この例では、デバイス名を**PLC**とします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/adddevice.PNG" /></center>

- ステップ04: このインターフェースを通じて調整できるいくつかの設定があります。詳細はリンクから確認できます。ただし、このケースでは設定をそのままにしておきます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/deviceconfig.PNG" /></center>

## タグの設定

- ステップ01: **WebUI**に移動し、**Config**を選択してから**Tag**をクリックします。モデルセクションでメニューをクリックし、**New Tag**を選択します。名前をQ1とします。通常、Qは出力コイルを示すために使用されます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/addtag.PNG" /></center>

- ステップ02: 次に、以下の設定を行います。
    - Source : Enabled/Yes
    - Module Type : ModbusClient 
    - ModuleName: ModbusClient
    - Config: Device: Client/PLC
    - Modbus address: 008931
    - Data type: Boolean 
そして**Save**します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/tagconfig.PNG" /></center>

:::note
 Modbusアドレスに関しては、PLCまたはデバイスメーカーのデータシートを参照することをお勧めします。そこには入力、出力、および保持アドレスに関する詳細が記載されています。これらの仕様に基づいて、タグ設定のModbusアドレス行を調整する必要があります。たとえば、メーカーが出力コイルQ1を8193として記載している場合、アドレスは008193として設定する必要があります。同様に、ネットワーク入力が1として記載されており、それがコイルタイプである場合、アドレスは000001として設定する必要があります。
:::

- ステップ03: リアルタイムシミュレーション

システムに接続すると、出力コイルと入力コイルのリアルタイムステータスを確認できます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/realtimeview.PNG" /></center>

:::note
 N3uronインターフェースを介してPLCとやり取りするには、読み取りおよび書き込みの両方の権限を含む適切なアクセス権が必要です。
:::

## N3uronのWebUIインターフェースでMQTTモジュールインスタンスを作成する

- ステップ 01: ナビゲーションパネルで **Config** を選択します。
- ステップ 02: エクスプローラーパネルで **Modules** を選択します。
- ステップ 03: モデルメニューをクリックし、**New Module** を選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqqtmodule.PNG" /></center>

- ステップ 04: インスタンスには任意の名前を付けることができますが、この例では **MQTT** を使用します。
- ステップ 05: モジュールタイププロパティを **MqttClient** に設定します。他のプロパティはデフォルト値のままにして、**Save** をクリックします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqqtmodule2.PNG" /></center>

## N3uronのMQTTモジュールを設定する

- ステップ 01: エクスプローラーパネルで、先ほど作成したMQTTインスタンスを選択します。
- ステップ 02: モデルメニューボタンをクリックし、**New Connection** を選択します。
- ステップ 03: 新しい接続に名前を付けます。この例では **MqttClient** と名付けています：

    - 宛先ブローカー: Custom
    - 認証モード: Password
    - ユーザー名: ブローカーのユーザー名
    - パスワード: ブローカーのパスワード
    - プロトコル: MQTT
    - ブローカーURL: ブローカーのIP
**Save** 設定を保存します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqttchannelconfig.PNG" /></center>

## N3uronのMQTTモジュールを使用してトピックを購読する

- ステップ 01: モデルパネルでAWS接続を右クリックし、**New Subscriber** を選択して名前を付けます。この例では単に **Subscriber** を使用します。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqttconnection.PNG" /></center>

- ステップ 02: それをクリックし、トピックフィールドに名前を追加します。この例では **device/data** を使用しています。

:::note
テストと実践のために、[Arduinoコード](https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/MQTT_N3uron.ino) を提供しています。このコードは XIAO で実行できます。アップロードする前に、コードに自身の認証情報を入力する必要があります。
:::

- ステップ 03: 以下のプロパティを設定し、残りのプロパティはデフォルト値のままにします：

    - Qos: Qos 0
    - エンコーディング: UTF8
    - 圧縮: None
    - シリアライゼーション: JSON
    - データパーサー/タイプ: MqttClient JSON
**Save** をクリックして保存します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/subscriberconfig.PNG" /></center>

:::note
ここでは、MQTTClient JSON形式に設定されたデータパーサーを使用しています。XIAO デバイスはこの形式でブローカーにデータを公開します。デバイスがこの特定の形式でデータを公開しない場合は、使用している形式を特定し、デバイスに対応するカスタムJavaScriptコードスニペットを作成する必要があります。詳細については、提供された[ガイドライン](https://docs.n3uron.com/docs/mqtt-client-custom-parser)を参照してください。
:::

## タグを作成する

- ステップ 01: エクスプローラーパネルで **Tags** を選択します。
- ステップ 02: モデルメニューでフォルダーアイコンを右クリックし、**New Tag** を選択して名前を付けます。この例では **test** を使用します。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqtttag.PNG" /></center>

- ステップ 03: 設定パネルで以下のプロパティを設定し、残りのプロパティはデフォルト値のままにします：

    - タイプ: Number
    - ソース/有効化: Yes
    - モジュールタイプ: MqttClient
    - モジュール名: MQTT
    - 設定/サブスクライバー: MqttClient/Subscriber
**Save** をクリックして保存します。

<center><img width={500} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqtttagconfig.PNG" /></center>

- ステップ 04: リアルタイムシミュレーション  
システムに接続すると、MQTTブローカーからの出力のリアルタイムステータスを確認できます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/realtimeview2.PNG" /></center>

## ボーナス : AWS を使用して工場のステータスを公開する

:::note
[AWS クラウドを reComputer R1000 デバイスに接続する方法](https://wiki.seeedstudio.com/ja/recomputer_r1000_n3uron_aws/)について、ステップバイステップの手順を提供しています。この Wiki を初めて利用する場合は、このリンクを参照してください。

:::

- ステップ 01: Explorer パネルで、先ほど作成した **MQTT** インスタンスを選択します。
- ステップ 02: **Model** メニューボタンをクリックし、**New Connection** を選択します。
- ステップ 03: 新しい接続に名前を付けます。この例では、**MqttPublisher** と名付けています。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/newpublisher.PNG" /></center>

- ステップ 04: 接続プロパティを設定します：

    - A: **Destination Broker** ドロップダウンメニューから **Amazon Web Services** を選択します。**Authentication mode** は **Certificate** になります。また、この例では **Client Id** は **N3uron** です。
    - B: AWS IoT コンソールで Thing を作成した際にダウンロードして保存した **Certificate、Private key、CA certificate** を読み込みます。
    - C: AWS IoT コンソールの左側メニューで **Settings** に移動し、**Device Data Endpoint** をコピーします。それを N3uron に戻り、**Broker URL** フィールドに貼り付けます。
    - D: 他のプロパティはデフォルト値のままにして、**Save** をクリックします。

<center><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/publisherconfig.PNG" /></center>

- ステップ 05: Model パネル内で、先ほど設定した **MqttPublisher** 接続を右クリックし、**New Publisher** を選択して名前を付けます。この例では、単に **AWS** としています。

<center><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/newpublisheraws.PNG" /></center>

- ステップ 06: それをクリックし、**Topic** フィールドに名前を追加します。この例では **N3uron** を使用しています。

- ステップ 07: **Tag Filter** ボタンをクリックし、**New Tag Filter** を選択してデフォルト名を変更します。この例では **TagFilter** を使用しています。Mode、Path、Regex pattern はデフォルト値のままにします。この設定により、N3uron に設定されたすべてのタグが AWS Broker に公開されます。

<center><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/awssettings.PNG" /></center>

- ステップ 08: AWS IoT コンソールに移動し、左側メニューで **MQTT test client** を選択します。**Subscribe to a topic** タブをクリックし、Topic filter に **N3uron** を入力してすべてを購読し、**Subscribe** をクリックします。

<center><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/awsend.PNG" /></center>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>