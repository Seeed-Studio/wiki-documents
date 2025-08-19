---
description: MeshtasticをベースにしたXIAO ESP32S3 & Wio-SX1262キット
title: XIAO ESP32-S3&Wio SX1262キット
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /ja/xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic
last_update:
  date: 05/15/2025
  author: Evelyn Chen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

Meshtasticは、手頃な価格で低消費電力のデバイス上で動作するように設計された、オープンソースのオフグリッド分散型メッシュネットワークです。Seeed Studioは、ホビイストや産業ユーザー向けに、すぐに使用可能なMeshtasticデバイスの包括的なラインナップを提供しています。XIAO ESP32S3 & Wio-SX1262キットは、Meshtasticの開発者やメーカーにとって柔軟なソリューションです。

## ファームウェアの書き込み

:::note
**2024年10月24日**以前にXIAO ESP32S3 & Wio-SX1262キットを購入した場合は、このステップバイステップのチュートリアルに従ってデバイスにファームウェアを書き込んでください。
:::

**ステップ 1**: まず、ブラウザを開き、https://flasher.meshtastic.org/ にアクセスします（ChromeまたはEdgeブラウザが必要です）。

**ステップ 2**: 次に、適切なUSBケーブルを使用してデバイスをPCに接続します。この際、デバイスをオフにしてから**BOOTボタンを押し続けながら**USBケーブルを接続する必要がある場合があります。

**ステップ 3**: 提供される指示に従って、次のフラッシュ操作を実行します。デバイスを「**Seeed XIAO S3**」、ファームウェアを**最新**のものに選択し、「**Flash**」をクリックします。以前のファームウェアを上書きしたい場合は、「**Full Erase and Install**」にチェックを入れることを忘れないでください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div>

## ソフトウェア概要

Meshtasticは、ユーザーが選択できる複数のプラットフォームソフトウェアを提供しています。これには、Androidアプリ、Appleアプリ、Webクライアントが含まれます。また、開発者向けにはPython CLI、Linux Native、統合方法も提供されています。

詳細については、[Meshtastic公式ウェブサイト](https://meshtastic.org/docs/software/)をご参照ください。

* [Androidアプリ](https://meshtastic.org/docs/category/android-app/): AndroidアプリケーションはF-DroidリポジトリおよびGoogle Playストアで利用可能です。これにより、Bluetooth、Wi-Fi（同じネットワーク上の場合）、またはUSB On-The-Go（OTG）を介してAndroidスマートフォンからMeshtasticデバイスに接続できます。
* [Appleアプリ](https://meshtastic.org/docs/category/apple-apps/): App Storeで利用可能です。デフォルトでは、iOS用MeshtasticアプリはネイティブのオフラインApple Mapsの使用をサポートしています。
* [Webクライアント](https://meshtastic.org/docs/software/web-client/): Meshtastic Webは、ブラウザ上で直接動作するMeshtasticクライアントです。
* [Python CLI](https://meshtastic.org/docs/software/python/cli/): Pythonのpipパッケージを使用して「meshtastic」というコマンドライン実行可能ファイルをインストールできます。これにより、ネットワーク上で送信されたパケットをJSON形式で表示し、Meshtasticデバイスからのシリアルデバッグ情報を確認できます。
* [Linux Native](https://meshtastic.org/docs/software/linux-native/): Portduinoフレームワークのおかげで、デバイスソフトウェアはネイティブLinuxマシン上でも動作します。
* [Meshtastic統合](https://meshtastic.org/docs/software/integrations/): Meshtasticエコシステムは非常に拡張性が高く、既存の多くのソフトウェア製品やプロジェクトとの簡単な統合を可能にします。

## デバイス接続

Meshtastic を使用する前に、デバイスを接続する必要があります。接続方法は2つあります。1つ目は拡張ボードを使用する方法で、対応する情報がディスプレイに表示されます。その後、表示された情報に基づいて対応するプラットフォームで設定を行うことができます。2つ目は、XIAO と Wio-SX1262 モジュールを接続し、シリアルポートツールを使用してノードIDとパスワードを取得する方法です。

### 方法1: 拡張ボードに接続

ファームウェアをフラッシュし、Meshtastic アプリをダウンロードした後、拡張ボードは接続や、Groveセンサーやモジュールを簡単に追加するための便利なツールとなります。

**ステップ1**: 接続するデバイス（例: "device"）が電源オンで検出可能な状態であることを確認します。そして、スマートフォンで Meshtastic アプリを開きます。

**ステップ2**: Meshtastic アプリの右下にある "+" アイコンをクリックします。これにより、アプリが近くの接続可能なデバイスをスキャンし始めます。その後、OLEDディスプレイに表示されている対応するデバイスIDを選択します。

**ステップ3**: 正しく選択したら、OLEDディスプレイに表示されているコードを入力します。ボタンを押して表示を切り替えます。

**ボタンの機能:**

- 1回押すと画面を切り替えます。
- 2回押すとブロードキャストします。
- 3回押すとGPSモードを切り替えます。

**ステップ4**: LoRaリージョンを設定すると、デバイスが再起動します。

**ステップ5**: 再起動が完了したら、デバイスの状態を Meshtastic アプリとOLEDディスプレイで確認できます。

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/dzqx32lBJso" title="XIAO ESP32S3キットを使用してWio-SX1262をMeshtasticデバイスとして設定する" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 方法2: シリアルポートツール

お好みのシリアルポートデバッグツールを選択してください。以下では、MacでのComtoolを例に説明します。**シリアル**接続を選択し、**対応するポート**を選択、ボーレートを**115200**に設定し、**RTSとDTR**をオンにします。接続を開くと、接続データが表示されます。  
"**nodenum**" を検索して対応するノードIDを見つけます。デフォルトの**パスワードは123456**です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/11.png" style={{width:700, height:'auto'}}/></div>

:::tip
nodenumの最後の4桁は、Meshtastic アプリで検出されたデバイス番号IDです。例えば、"nodenum 0x9e20d02c" は Meshtastic では "Meshtastic_d02c" となります。
:::

## Wio Tracker T1000-Eとの通信

**ステップ1**. [wiki](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#get-started-1) に従って Wio Tracker T1000-E を接続します。

**ステップ2**. 以下の設定が XIAO ESP32S3 for Meshtastic の設定と一致していることを確認します。

1. デバイスのアクティベーションとセットアップ
- 両方のデバイスが電源オンで正常に動作していることを確認します。
- デバイスの無線通信機能（Bluetooth、LoRaなど）が有効になっていることを確認します。設定を確認し、誤ってオフまたは制限されていないことを確認してください。

2. 距離と信号強度
- 2つのデバイス間の距離が遠すぎないことを確認します。初期テストでは、2 dBm IPEXアンテナを使用した XIAO ESP32S3 for Meshtastic の通信距離は2.5 kmを超えます。一般的に、より開けた環境では20 km以上の通信が可能です。

3. ネットワーク設定
- デバイスが同じネットワークモードまたはチャンネル設定にあることを確認します。Meshtastic アプリを使用して、簡単に同じ「LoRaリージョン」と「モデムプリセット」に設定できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/12.png" style={{width:350, height:'auto'}}/></div>

**ステップ3**. Wio Tracker T1000-Eとの通信

接続が完了すると、Meshtastic ネットワークを通じてメッセージの送受信を開始できます。メッセージはテキストベースである場合もあれば、デバイスやアプリの機能に応じて追加機能をサポートする場合もあります。また、ネットワークアクティビティを監視し、現在接続されているアクティブなデバイスを確認することもできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/3.gif" style={{width:350, height:'auto'}}/></div>

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/vJN_4A8s4z0" title="XIAO ESP32S3キットを使用してWio-SX1262をMeshtasticデバイスとして設定する" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## センサー接続

Meshtasticアプリケーションでは、XIAO esp32s3キットを搭載したWio-SX1262が幅広いセンサーをサポートできます。XIAO拡張ボードと組み合わせることで、多数のGroveセンサーをサポートできます。詳細は[こちら](https://github.com/meshtastic/firmware/blob/3f1c86f9535279fd17eaaab6e10a06f09915b7e4/src/detect/ScanI2C.h#L10)をご確認ください。さらに、GNSSアドオンモジュールと組み合わせることで、GPS機能を備えたMeshtastic内で最小のモジュールを形成します。

### 温度と湿度センサー

<div class="table-center">
  <table align="center">
    <tr>
      <th>DHT20 温度・湿度センサー</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

**ステップ 1**: Grove DHT20センサーをXIAO拡張ボードに接続します。

**ステップ 2**: Meshtasticアプリで`Detection Sensor`を有効にします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/13.PNG" style={{width:350, height:'auto'}}/></div>

### GNSSセンサー

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO用L76K GNSSモジュール</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## 初期設定

:::note
詳細については、[Meshtastic](https://meshtastic.org/docs)をご参照ください。
:::

### 無線設定

Meshtasticファームウェアにはいくつかの設定セクションがあり、これらはメッシュ上で小さな管理メッセージとして送信できるように分割されています。

| 名前 | 説明 |
| ---- | ---- |
| [Bluetooth](https://meshtastic.org/docs/configuration/radio/bluetooth/) | Bluetooth設定オプション: 有効化、ペアリングモード、固定PIN。 |
| [Channels](https://meshtastic.org/docs/configuration/radio/channels/) | チャンネル設定オプション: インデックス、役割、設定。 |
| [Device](https://meshtastic.org/docs/configuration/radio/device/) | デバイス設定オプション: デバイス役割、シリアル出力、デバッグログ、工場出荷時リセット。 |
| [Display](https://meshtastic.org/docs/configuration/radio/display/) | ディスプレイ設定オプション: スクリーンオン時間、自動カルーセル間隔、常に北を指す、GPSフォーマット。 |
| [LoRa](https://meshtastic.org/docs/configuration/radio/lora/) | LoRa設定オプション: 地域、モデムプリセット、最大ホップ数、送信電力、帯域幅、拡散率、符号化率、周波数オフセット、送信無効化、受信配列無視。 |
| [Network](https://meshtastic.org/docs/configuration/radio/network/) | ネットワーク設定オプション: WiFi有効化、WiFi SSID、WiFi PSK、WiFiモード、NTPサーバー。 |
| [Position](https://meshtastic.org/docs/configuration/radio/position/) | 位置設定オプション: GPS有効化、GPS更新間隔、GPS試行時間、固定位置、スマートブロードキャスト、ブロードキャスト間隔、位置パケットフラグ。 |
| [Power](https://meshtastic.org/docs/configuration/radio/power/) | 電源設定オプション: 充電電流、省電力、電力喪失後のシャットダウン、ADC乗数オーバーライド待機Bluetooth間隔、ライトスリープ間隔、最小ウェイク間隔。 |
| [User](https://meshtastic.org/docs/configuration/radio/user/) | ユーザー設定オプション: 長い名前、短い名前、ライセンス有効。 |

### モジュール設定

モジュールはファームウェアに含まれており、ユーザーがメッシュやデバイスの機能を拡張することを可能にします。

| 名前 | 説明 |
| ---- | ---- |
| [Ambient Lighting](https://meshtastic.org/docs/configuration/module/ambient-lighting/) | NCP5623 I2C RGB LEDの明るさを調整します。 |
| [Audio](https://meshtastic.org/docs/configuration/module/audio/) | 特定のデバイスでCodec2音声通信をサポートします。 |
| [Canned Message](https://meshtastic.org/docs/configuration/module/canned-message/) | ロータリーエンコーダーなどの入力デバイスを使用して、デバイスから直接送信するための定義済みメッセージを設定します。 |
| [Detection Sensor](https://meshtastic.org/docs/configuration/module/detection-sensor/) | 指定された高/低ステータスを監視するGPIOピンを設定し、テキストアラートを送信します。 |
| [External Notification](https://meshtastic.org/docs/configuration/module/external-notification/) | 受信メッセージがデバイスに接続された回路（LED、ブザーなど）を使用して通知します。 |
| [MQTT](https://meshtastic.org/docs/configuration/module/mqtt/) | パケットをMQTTサーバーに転送します。これにより、ローカルメッシュのユーザーがインターネットを介して別のメッシュのユーザーと通信できます。 |
| [Neighbor Info](https://meshtastic.org/docs/configuration/module/neighbor-info/) | 0ホップ隣接ノードの情報をメッシュに送信します。 |
| [Paxcounter](https://meshtastic.org/docs/configuration/module/paxcounter/) | ノードを通過するBLEおよびWiFiデバイスの数をカウントします。 |
| [Range Test](https://meshtastic.org/docs/configuration/module/range-test/) | GPS位置情報を含むメッセージを一定間隔で送信し、デバイス間の通信距離をテストします。送信者として設定されたデバイスと受信者として設定されたデバイスが必要です。受信者はすべての受信メッセージをCSVに記録します。 |
| [Remote Hardware](https://meshtastic.org/docs/configuration/module/remote-hardware/) | メッシュを介してGPIOステータスをリモートで設定および読み取ります。 |
| [Serial Module](https://meshtastic.org/docs/configuration/module/serial/) | シリアルポート経由で文字列を送信し、メッシュ上でメッセージを送信します。 |
| [Store & Forward](https://meshtastic.org/docs/configuration/module/store-and-forward-module/) | 切断されたクライアントがメッシュに再接続した後にメッセージを配信するためにデバイスにメッセージを保存します。 |
| [Telemetry](https://meshtastic.org/docs/configuration/module/telemetry/) | デバイスにセンサーを接続し、定期的にメッシュに測定値を送信します。 |
| [Traceroute](https://meshtastic.org/docs/configuration/module/traceroute/) | 特定の宛先にメッセージをホップするために使用されるノードを追跡します。 |

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>