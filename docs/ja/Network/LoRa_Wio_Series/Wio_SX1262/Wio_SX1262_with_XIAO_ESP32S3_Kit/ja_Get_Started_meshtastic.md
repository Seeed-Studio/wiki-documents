---
description: Wio-SX1262とXIAO esp32s3モジュールベースのMeshtastic
title: Meshtasticの始め方
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /ja/wio_sx1262_xiao_esp32s3_for_meshtastic
sidebar_position: 2
last_update:
  date: 09/30/2024
  author: Evelyn Chen
---

Meshtasticは、手頃な価格で低消費電力のデバイス上で動作するように構築された、オープンソース、オフグリッド、分散型のメッシュネットワークです。Seeed Studioは、ホビイストや産業ユーザー向けに、すぐに使えるMeshtasticデバイスの包括的な範囲を提供しています。XIAO ESP32S3 & Wio-SX1262キットは、meshtastic開発者やメーカーにとって柔軟なソリューションです。

## ファームウェアのフラッシュ

:::note
**2024年10月24日**より前にXIAO ESP32S3 & Wio-SX1262キットを購入された場合は、このステップバイステップチュートリアルに従ってデバイスにファームウェアをフラッシュしてください。
:::

**ステップ1**: まず、ブラウザを開いてhttps://flasher.meshtastic.org/#にアクセスします。ChromeまたはEdgeブラウザが必要です。

**ステップ2**: 次に、適切なUSBケーブルを使用してデバイスをPCに接続します。電源を切ってから、USBケーブルを接続する際に**BOOTボタンを押し続ける**必要がある場合があります。

**ステップ3**: 以下の指示に従って、その後のフラッシュ操作を実行します。デバイスとして「**Seeed XIAO S3**」を選択し、ファームウェアとして**最新**のものを選択してから、「**Flash**」をクリックします。以前のファームウェアを上書きしたい場合は、「**Full Erase and Install**」にチェックを入れることを忘れないでください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div>

## ソフトウェア概要

Meshtasticは、Androidアプリ、Appleアプリ、Webクライアントなど、ユーザーが選択できる複数のプラットフォームソフトウェアを提供しています。また、開発者が使用するためのPython CLI、Linux Native、統合方法も提供しています。

具体的な情報については、[Meshtasticの公式ウェブサイト](https://meshtastic.org/docs/software/)を参照してください。

- [Androidアプリ](https://meshtastic.org/docs/category/android-app/): AndroidアプリケーションはF-DroidリポジトリとGoogle Play Storeで利用できます。これにより、Bluetooth、Wi-Fi（同じネットワーク上の場合）、またはUSB On-The-Go（OTG）を介してAndroid携帯からMeshtasticデバイスに接続できます。
- [Appleアプリ](https://meshtastic.org/docs/category/apple-apps/): App Storeで利用できます。デフォルトでは、iOS用のMeshtasticアプリは、ネイティブオフラインApple Mapsの使用をサポートしています。
- [Webクライアント](https://meshtastic.org/docs/software/web-client/): Meshtastic Webは、ブラウザで直接実行されるMeshtasticクライアントです。
- [Python CLI](https://meshtastic.org/docs/software/python/cli/): python pipパッケージは「meshtastic」コマンドライン実行可能ファイルをインストールし、ネットワーク経由で送信されたパケットをJSONとして表示し、meshtasticデバイスからのシリアルデバッグ情報を確認できます。
- [Linux Native](https://meshtastic.org/docs/software/linux-native/): デバイスソフトウェアは、Portduinoフレームワークのおかげで、ネイティブLinuxマシン上でも実行できます。
- [Meshtastic統合](https://meshtastic.org/docs/software/integrations/): Meshtasticエコシステムは高度に拡張可能で、多数の既存のソフトウェア製品やプロジェクトとの簡単な統合を可能にします。

## デバイス接続

Meshtasticを使用する前に、まずデバイスを接続する必要があります。接続方法は2つあります。1つ目は拡張ボードを使用する方法で、対応する情報がディスプレイに表示されます。その後、表示された情報に従って対応するプラットフォームで設定を行うことができます。2つ目はXIAOとWio-SX1262モジュールを接続し、シリアルポートツールを使用してノードIDとパスワードを取得する方法です。

### 方法1：拡張ボードに接続

ファームウェアをフラッシュしてMeshtasticアプリをダウンロードした後、拡張ボードは接続や、groveセンサーやモジュールを簡単に追加するなどの追加アプリケーションに適したツールになります。

**ステップ1**：接続するデバイス（「device」など）の電源が入っており、検出可能な状態であることを確認します。そして、携帯電話でMeshtasticアプリを開きます。

**ステップ2**：Meshtasticアプリで、右下に「+」アイコンがあります。それをクリックして、アプリが近くの接続可能なデバイスをスキャンを開始させます。その後、OLEDディスプレイに表示されている対応するデバイスIDを選択します。

**ステップ3**：正しく選択されたら、OLEDディスプレイに表示されているコードを入力します。ボタンを押してディスプレイを切り替えます。

**ボタン機能：**

- 1回押すとスクリーンを切り替えます。
- 2回押すとブロードキャストします。
- 3回押すとGPSモードを切り替えます。

**ステップ4**：Loraリージョンを設定すると、デバイスが再起動します。

**ステップ5**：再起動が完了すると、デバイスの状態をMeshtasticアプリとOLEDディスプレイで確認できます。

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/dzqx32lBJso" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 方法2：シリアルポートツール

お好みのシリアルポートデバッグツールを選択してください。以下では、mac上のComtoolを例に説明します。**serial**接続を選択し、**対応するポート**を選択し、ボーレートを**115200**に設定し、**RTSとDTR**をオンにします。接続を開くと、接続データを確認できます。
「**nodenum**」を検索して、対応するノードIDを見つけます。デフォルトの**パスワードは123456**です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/11.png" style={{width:700, height:'auto'}}/></div>

:::tip
nodenumの最後の4桁は、meshtasticアプリによって発見されるデバイス番号IDです。例えば、「nodenum 0x9e20d02c」は、meshtasticでは「Meshtastic_d02c」になります。
:::

## Wio Tracker T1000-Eとの通信

**ステップ1**. [wiki](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#get-started-1)に従ってWio Tracker T1000-Eを接続します。

**ステップ2**. 以下の設定がMeshatastic用のXIAO ESP32S3での設定と同じであることを確認します。

1. デバイスのアクティベーションとセットアップ

- 両方のデバイスの電源が入っており、正常に動作していることを確認します。
- デバイスの無線通信機能（Bluetooth、LoRaなど）が有効になっている必要があります。関連する設定を確認して、誤ってオフにされたり制限されたりしていないことを確認します。

2. 距離と信号強度

- 2つのデバイス間の距離が遠すぎてはいけません。初期テストの結果、2 dbm IPEXアンテナを使用したMeshtastic用XIAO ESP32S3の通信距離は2.5 km以上です。一般的に、より開放的な環境では、20 km以上になることがあります。

3. ネットワーク設定

- デバイスが同じネットワークモードまたはチャネル設定にあることを確認します。Meshtastic APPを使用して、同じ「lora region」と「Modem preset」に簡単に設定できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/12.png" style={{width:350, height:'auto'}}/></div>

**ステップ3**. Wio Tracker T1000-Eとの通信

接続されると、Meshtasticネットワークを通じてメッセージの送受信を開始できます。メッセージはテキストベースであったり、デバイスとアプリの機能に応じて追加機能をサポートしたりする場合があります。また、ネットワークアクティビティを監視し、現在接続されてアクティブなデバイスを確認することもできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/3.gif" style={{width:350, height:'auto'}}/></div>

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/vJN_4A8s4z0" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## センサー接続

meshtasticアプリケーションにおいて、XIAO esp32s3キットを搭載したWio-SX1262は、幅広いセンサーをサポートすることができます。XIAO拡張ボードと組み合わせて使用する場合、多数のgroveセンサーをサポートできます。詳細は[こちら](https://github.com/meshtastic/firmware/blob/3f1c86f9535279fd17eaaab6e10a06f09915b7e4/src/detect/ScanI2C.h#L10)をご確認ください。さらに、GNSSアドオンモジュールと組み合わせることで、GPS機能を持つmeshtastic内で最小のモジュールを構成します。

### 温湿度センサー

<div class="table-center">
  <table align="center">
    <tr>
      <th>DHT20 温湿度センサー</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

**ステップ 1**: XIAO拡張ボードのGrove DHT20センサーを接続する

**ステップ 2**: MeshtasticアプリでDetection Sensorを有効にする

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/13.PNG" style={{width:350, height:'auto'}}/></div>

### GNSSセンサー

<div class="table-center">
  <table align="center">
    <tr>
      <th>L76K GNSS Module for XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## 初期設定

:::note
詳細については、[Meshtastic](https://meshtastic.org/docs)を参照してください。
:::

### 無線設定

Meshtasticファームウェアには複数の設定セクションがあり、これらはメッシュ上で小さな管理メッセージとして送信できるように分割されています。

| 名前 | 説明 |
| ---- | ---- |
| [Bluetooth](https://meshtastic.org/docs/configuration/radio/bluetooth/) | Bluetooth設定オプション：有効化、ペアリングモード、固定PIN。 |
| [Channels](https://meshtastic.org/docs/configuration/radio/channels/) | チャンネル設定オプション：インデックス、役割、設定。 |
| [Device](https://meshtastic.org/docs/configuration/radio/device/) | デバイス設定オプション：デバイス役割、シリアル出力、デバッグログ、工場出荷時リセット。 |
| [Display](https://meshtastic.org/docs/configuration/radio/display/) | ディスプレイ設定オプション：画面点灯時間、自動カルーセル間隔、常に北を指す、GPS形式。 |
| [LoRa](https://meshtastic.org/docs/configuration/radio/lora/) | LoRa設定オプション：地域、モデムプリセット、最大ホップ数、送信電力、帯域幅、拡散係数、符号化率、周波数オフセット、送信無効、受信配列無視。 |
| [Network](https://meshtastic.org/docs/configuration/radio/network/) | ネットワーク設定オプション：WiFi有効化、WiFi SSID、WiFi PSK、WiFiモード、NTPサーバー。 |
| [Position](https://meshtastic.org/docs/configuration/radio/position/) | 位置設定オプション：GPS有効化、GPS更新間隔、GPS試行時間、固定位置、スマートブロードキャスト、ブロードキャスト間隔、位置パケットフラグ。 |
| [Power](https://meshtastic.org/docs/configuration/radio/power/) | 電源設定オプション：充電電流、省電力、電源喪失後のシャットダウン、ADC乗数オーバーライド、Bluetooth待機間隔、軽スリープ間隔、最小ウェイク間隔。 |
| [User](https://meshtastic.org/docs/configuration/radio/user/) | ユーザー設定オプション：長い名前、短い名前、ライセンス有無。 |

### モジュール設定

モジュールはファームウェアに含まれており、ユーザーがメッシュやデバイスの機能を拡張することを可能にします。

| 名前 | 説明 |
| ---- | ---- |
| [Ambient Lighting](https://meshtastic.org/docs/configuration/module/ambient-lighting/) | NCP5623 I2C RGB LEDの明度を調整します。 |
| [Audio](https://meshtastic.org/docs/configuration/module/audio/) | 特定のデバイスでCodec2音声通信のサポートを有効にします。 |
| [Canned Message](https://meshtastic.org/docs/configuration/module/canned-message/) | ロータリーエンコーダーなどの入力デバイスを使用して、デバイスから直接送信する定型メッセージを設定します。 |
| [Detection Sensor](https://meshtastic.org/docs/configuration/module/detection-sensor/) | GPIOピンを設定して、指定されたハイ/ロー状態を監視し、テキストアラートを送信します。 |
| [External Notification](https://meshtastic.org/docs/configuration/module/external-notification/) | 受信メッセージは、デバイスに接続した回路（LED、ブザーなど）を使用してアラートを出すことができます。 |
| [MQTT](https://meshtastic.org/docs/configuration/module/mqtt/) | パケットをMQTTサーバーに転送します。これにより、ローカルメッシュのユーザーがインターネット経由で別のメッシュのユーザーと通信できます。 |
| [Neighbor Info](https://meshtastic.org/docs/configuration/module/neighbor-info/)| 0ホップ隣接ノードの情報をメッシュに送信します。 |
| [Paxcounter](https://meshtastic.org/docs/configuration/module/paxcounter/) | ノードを通過するBLEおよびWifiデバイスの数をカウントします。 |
| [Range Test](https://meshtastic.org/docs/configuration/module/range-test/) | GPS位置情報付きのメッセージを一定間隔で送信して、デバイス間の通信可能距離をテストします。（少なくとも）1台のデバイスを送信者として、1台を受信者として設定する必要があります。受信者はすべての受信メッセージをCSVにログ記録します。 |
| [Remote Hardware](https://meshtastic.org/docs/configuration/module/remote-hardware/) | メッシュ経由でGPIOの状態をリモートで設定・読み取りします。 |
| [Serial Module](https://meshtastic.org/docs/configuration/module/serial/) | シリアルポート経由で文字列を送信することで、メッシュ間でメッセージを送信します。 |
| [Store & Forward](https://meshtastic.org/docs/configuration/module/store-and-forward-module/) | 切断されたクライアントがメッシュに再接続した後の配信のため、デバイスにメッセージを保存します。 |
| [Telemetry](https://meshtastic.org/docs/configuration/module/telemetry/) | デバイスにセンサーを接続し、定期的にメッシュに測定値を送信します。 |
| [Traceroute](https://meshtastic.org/docs/configuration/module/traceroute/) | 特定の宛先にメッセージをホップするために使用されるノードを追跡します。 |

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
