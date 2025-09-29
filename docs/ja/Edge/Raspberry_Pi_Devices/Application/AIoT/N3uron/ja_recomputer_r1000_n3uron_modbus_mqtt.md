---
description: N3uronとMQTTおよびModbusを統合してシームレスなデータ取得を実現し、AWSクラウドに公開する方法を学びます。このガイドでは、産業オートメーションプロジェクトを最適化するためのセットアップ、設定、データ前処理について説明します
title: N3uron、MQTT、Modbusを使用した産業データのAWSクラウドへの公開
keywords:
  - reComputer R1000
  - MQTT
  - IIoT
  - Industrial 
  - N3uron
  - Modbus
  - AWS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/recomputer_r1000_n3uron_modbus_mqtt_aws
last_update:
  date: 7/12/2024
  author: Kasun Thushara
---
## はじめに

産業オートメーションにおいて、Modbusは最も一般的なプロトコルの一つとして際立っています。MQTTは、多くの特性により産業オートメーションにおけるIoTの主要プロトコルとして台頭してきました。その軽量設計、効率性、スケーラビリティ、非同期メッセージングのサポートが注目されています。MQTTでは、デバイスは報告可能なイベントがある場合にのみ通信を行い、これは常時更新チェックを行うのとは対照的です。このイベント駆動型アプローチは、例外による報告（データが標準から逸脱した場合や特定のトリガーでのみデータを送信）と組み合わされることで、帯域幅とリソースを節約し、重要なIoTアプリケーションのデータ伝送を最適化します。

reComputer R1000と[N3uron](https://n3uron.com/) Duoの強力な組み合わせは、堅牢な接続性とデータ操作機能を提供することで、効率的なプラント管理を促進します。このWikiは、産業環境におけるModbus TCPの重要性を強調し、接続性をさらに向上させるためのMQTTデバイスのシームレスな統合をハイライトしています。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### ソフトウェア

[N3uronを始める](https://wiki.seeedstudio.com/ja/recomputer_r1000_n3uron/)ガイドを学習することを強くお勧めします。このガイドでは、N3uronのWebインターフェースのナビゲーション、Web UIやWeb Visionモジュールなどの概念の理解、タグの概念の把握、基本的なダッシュボードの作成に関する重要な洞察を提供しています。これらの基礎をまだ探索していない場合は、さらに進む前に探索することをお勧めします。提供されたリンクからガイドにアクセスできます。

### Modbus TCP/IP用のイーサネット設定を構成する

PLC/デバイスのIPドメインがワイヤレス設定と異なるため、IP設定を手動で変更する必要がある場合があります。そのために、

- **ステップ01**: **Bullseye**を実行している場合は、以下のコマンドを実行してください：

```sh
sudo nano /etc/dhcpcd.conf
```

- **ステップ 02**: 次に、PLC/デバイスのネットワークドメインに応じてイーサネットポートの設定を構成し、**metric** コマンドを使用して優先度を設定します。最も低いメトリック値が最も高い優先度を持ちます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/ipconfig.PNG" /></center>

- **ステップ 01**: **Bookworm OS** を実行している場合は、GUIを使用してネットワークアイコンをクリックできます。詳細オプションの下で、「Edit Connections」を選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network1.PNG" /></center>

- **ステップ 02**: 「Wired Connection 2」（ETH 1）を選択し、IPv4設定の下でアドレス、ネットマスク、ゲートウェイを追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network2.PNG" /></center>

## Modbusモジュールの作成と設定

N3uronのWebUIインターフェース内でモジュールインスタンスを作成する

- ステップ 01: ナビゲーションパネルで、**Config** を選択します。
- ステップ 02: エクスプローラーパネルで、**Modules** を選択します。
- ステップ 03: Modelメニューをクリックし、**New Module** を選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/modbusmodule.PNG" /></center>

- ステップ 04: インスタンスには任意の名前を付けることができますが、この例では **ModbusClient** を使用します。
- ステップ 05: Module Typeプロパティを **ModbusClient** に設定します。残りのプロパティはデフォルト値のままにして、**Save** をクリックします。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/modbusmodule2.PNG" /></center>

### チャンネルの作成と設定

- ステップ 01: 作成したModbus Clientとモデルの下で、**New Channel** を選択します。チャンネル名を **Client** とします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/newmodbuschannel.PNG" /></center>

- ステップ 02: 次に、Modbus TCPを使用してPLCと通信します。PLCの **IPアドレス** と **ポートアドレス** を提供してください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/clientconfig.PNG" /></center>

:::note
 Modbus RTUを使用している場合は、考慮すべき様々な設定があります。そのためには、COMポート、ボーレートなどの詳細を提供する必要があります。N3uronでModbus RTUとTCPプロトコルの両方を設定する詳細については、提供された[ガイド](https://docs.n3uron.com/docs/modbus-client-configuration)を参照してください。
:::

- ステップ 03: デバイスを追加する: 各チャンネルは1つ以上のデバイスを持つことができます。デバイスの **名前** を設定し、設定を続行します。この場合、デバイス名は **PLC** です。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/adddevice.PNG" /></center>

- ステップ 04: このインターフェースを通じて調整できる設定がいくつかあります。詳細についてはこのリンクから確認できます。ただし、この場合はそのままにしておきます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/deviceconfig.PNG" /></center>

## タグ設定

- ステップ01: **WebUI**に移動し、**Config**を選択し、**Tag**をクリックします。Modelセクションで、メニューをクリックして**New Tag**を選択します。Q1と名前を付けます。通常、Qは出力コイルを示すために使用されます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/addtag.PNG" /></center>

- ステップ02: 次に、以下の設定を行う必要があります。
  - Source : Enabled/Yes
  - Module Type : ModbusClient
  - ModuleName: ModbusClient
  - Config: Device: Client/PLC
  - Modbusアドレス: 008931
  - Data type: Boolean
そして**Save**します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/tagconfig.PNG" /></center>

:::note
 Modbusアドレスについては、PLCまたはデバイスメーカーのデータシートを参照することをお勧めします。そこには、入力、出力、保持アドレスの詳細が記載されています。これらの仕様に従って、タグ設定のModbusアドレス行で調整を行う必要があります。例えば、メーカーが出力コイルQ1を8193と表記している場合、アドレスは008193として設定する必要があります。同様に、ネットワーク入力が1として表記され、それがコイルタイプの場合、アドレスは000001として設定する必要があります。
:::

- ステップ03: リアルタイムシミュレーション

システムに接続すると、出力コイルと入力コイルのリアルタイムステータスを表示できます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/realtimeview.PNG" /></center>

:::note
 N3uronインターフェースを介してPLCと相互作用するには、読み取りと書き込みの両方の機能を含む適切なアクセス許可が必要です。
:::

## N3uronのWebUIインターフェース内でMQTTモジュールインスタンスを作成する

- ステップ01: Navigationパネルで、**Config**を選択します。
- ステップ02: Explorerパネルで、**Modules**を選択します。
- ステップ03: Modelメニューをクリックして**New Module**を選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqqtmodule.PNG" /></center>

- ステップ04: インスタンスには任意の名前を付けることができますが、この例では**MQTT**を使用します。
- ステップ05: Module Typeプロパティを**MqttClient**に設定します。残りのプロパティはデフォルト値のままにして、**Save**をクリックします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqqtmodule2.PNG" /></center>

## N3uronのMQTTモジュールを設定する

- ステップ01: Explorerパネルで、作成したばかりのMQTTインスタンスを選択します。
- ステップ02: Modelメニューボタンをクリックして、New Connectionを選択します。
- ステップ03: 新しい接続に名前を付けます。この例では、**MqttClient**と名前が付けられています：

  - Destination broker : Custom
  - Authentication mode: Password
  - Username : Your Broker Username
  - Password: Your Broker Password
  - Protocol:MQTT
  - Broker URL:Broker ip
設定を**Save**します

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqttchannelconfig.PNG" /></center>

## N3uronのMQTTモジュールを使用してトピックを購読する

- ステップ01: Modelパネルで、AWS Connectionを右クリックし、New Subscriberを選択して名前を付けます。この例では、単純にSubscriberを使用します。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqttconnection.PNG" /></center>

- ステップ02: それをクリックして、Topicフィールドに名前を追加します。この例では、device/dataを使用しています。

:::note
テストと実践的な体験のために、XIAOで実行できる[Arduinoコード](https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/MQTT_N3uron.ino)を提供しています。さらに、アップロードする前に、このコードに独自の認証情報を入力する必要があります。
:::

- ステップ03: 以下に示す値を使用して次のプロパティを設定し、残りはデフォルト値のままにします：

  - Qos: Qos 0.
  - Encoding: UTF8
  - Compression: None
  - Serialization: JSON
  - Data parser/Type: MqttClient JSON
そして**Save**します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/subscriberconfig.PNG" /></center>

:::note
 ここでは、MQTTClient JSON形式用に設定されたデータパーサーを利用します。XIAOデバイスは、この形式でブローカーにデータを公開します。デバイスがこの特定の形式でデータを公開しない場合は、使用している形式を特定し、デバイスを適切に処理するためのカスタムJavaScriptコードスニペットを作成する必要があります。詳細なガイダンスについては、提供された[ガイドライン](https://docs.n3uron.com/docs/mqtt-client-custom-parser)を参照してください。
:::

## タグを作成する

- ステップ01: Explorerパネル内で、**Tags**を選択します。
- ステップ02: Modelメニューで、フォルダアイコンを右クリックし、**New Tag**を選択して名前を付けます。この例では、**test**を使用します。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqtttag.PNG" /></center>

- ステップ03: Configurationパネルで、以下の値を使用して次のプロパティを設定し、残りはデフォルト値のままにします：

  - Type: Number.
  - Source/Enabled: Yes
  - Module Type: MqttClient
  - Module name: MQTT
  - Config/Subscriber: MqttClient/Subscriber
**Save**をクリックします。

<center><img width={500} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqtttagconfig.PNG" /></center>

- ステップ04: リアルタイムシミュレーション
システムに接続すると、MQTTブローカーからの出力のリアルタイムステータスを表示できます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/realtimeview2.PNG" /></center>

## ボーナス : AWSで工場のステータスを公開しよう

:::note
 [AWSクラウドをreComputer R1000デバイスに接続する方法](https://wiki.seeedstudio.com/ja/recomputer_r1000_n3uron_aws/)について、ステップバイステップの手順を提供しています。このwikiが初めての場合は、このリンクを参照してください。

:::

- ステップ01: Explorerパネルで、作成したばかりの**MQTT**インスタンスを選択します。
- ステップ02: Modelメニューボタンをクリックし、**New Connection**を選択します。
- ステップ03: 新しい接続に名前を付けます。この例では、**MqttPublisher**と名付けられています。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/newpublisher.PNG" /></center>

- ステップ04: 接続プロパティを設定します：

  - A: **Destination Broker**ドロップダウンメニューから**Amazon Web Services**を選択します。**Authentication mode**は**Certificate**になります。また、この例では**Client Id**は**N3uron**です。
  - B: AWS IoTコンソールでThingを作成したときにダウンロードして保存した**Certificate、Private key、CA certificate**をロードします。
  - C: AWS IoTコンソールで、左側のメニューから**Settings**に移動し、**Device Data Endpoint**をコピーします。N3uronに戻り、**Broker URL**フィールドに貼り付けます。
  - D: 残りのプロパティはデフォルト値のままにして、**Save**をクリックします。

<center><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/publisherconfig.PNG" /></center>

- ステップ05: Modelパネル内で、設定したばかりの**MqttPublisher**接続を右クリックし、**New Publisher**を選択して名前を付けます。この例では、単純に**AWS**を使用します。

<center><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/newpublisheraws.PNG" /></center>

- ステップ06: それをクリックし、**Topic**フィールドに名前を追加します。この例では、**N3uron**を使用しています。

- ステップ07: **Tag Filter**ボタンをクリックし、**New Tag Filter**を選択してデフォルト名を変更します。この例では**TagFilter**を使用しています。Mode、Path、Regex patternはデフォルト値のままにします。この設定により、N3uronで設定されたすべてのタグがAWSブローカーに公開されます。

<center><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/awssettings.PNG" /></center>

- ステップ08: AWS IoTコンソールに移動し、左側のメニューで**MQTT test client**を選択します。**Subscribe to a topic**タブをクリックし、Topic filterに**N3uron**と入力してすべてを購読し、**Subscribe**をクリックします。

<center><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/awsend.PNG" /></center>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
