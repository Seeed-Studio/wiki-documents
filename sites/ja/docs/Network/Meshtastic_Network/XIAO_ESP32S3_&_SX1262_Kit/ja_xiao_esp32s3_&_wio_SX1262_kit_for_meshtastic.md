---
description: XIAO ESP32S3 & Wio-SX1262 キットをベースにした Meshtastic
title: XIAO ESP32-S3 & Wio-SX1262 キットで始める Meshtastic
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic
sidebar_position: 1
last_update:
  date: 12/11/2025
  author: Michelle Huang
createdAt: '2024-10-09'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/ja/xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic/
---


[Meshtastic®](https://meshtastic.org/) は、手頃な価格で低消費電力のデバイス上で動作するように構築された、オープンソースのオフグリッド・分散型メッシュネットワークです。Seeed Studio は、ホビーユーザーおよび産業ユーザー向けに、すぐに使える Meshtastic デバイスを幅広く提供しています。XIAO ESP32S3 & Wio-SX1262 キットは、Meshtastic 開発者およびメイカー向けの柔軟なソリューションです。
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
    </a>
</div>
## ファームウェアを書き込む

:::note
このステップバイステップチュートリアルに従って、**2024 年 10 月 24 日** より前に XIAO ESP32S3 & Wio-SX1262 キットを購入した場合は、デバイスにファームウェアを書き込んでください。ファームウェアの更新には `don't use NRF-OTA` を使用しないでください。デバイスが完全に動作不能になる可能性があります。
:::

**ステップ 1**: まず、ブラウザを開き https://flasher.meshtastic.org/# にアクセスします。Chrome または Edge ブラウザが必要です。

**ステップ 2**: 次に、適切な USB ケーブルを使用してデバイスを PC に接続します。電源を切ったうえで、USB ケーブルを接続しながら **BOOT ボタンを押し続ける** 必要がある場合があります。

**ステップ 3**: 表示される手順に従って、後続の書き込み操作を行います。Device は "**Seeed XIAO S3**"、Firmware は **最新** のものを選択し、"**Flash**" をクリックします。以前のファームウェアを上書きしたい場合は、"**Full Erase and Install**" にチェックを入れることを忘れないでください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div>

## ソフトウェア概要

Meshtastic は、ユーザーが選択できる複数のプラットフォーム向けソフトウェアを提供しており、Android アプリ、Apple アプリ、Web クライアントなどがあります。さらに、開発者向けには Python CLI、Linux ネイティブ版、および各種統合方法も提供されています。

詳細については、[Meshtastic の公式ウェブサイト](https://meshtastic.org/docs/software/)を参照してください。

- [Android App](https://meshtastic.org/docs/category/android-app/): Android アプリケーションは F-Droid リポジトリおよび Google Play ストアで入手可能です。これにより、Android スマートフォンから Bluetooth、同一ネットワーク上であれば Wi-Fi、または USB On-The-Go (OTG) を介して Meshtastic デバイスに接続できます。
- [Apple App](https://meshtastic.org/docs/category/apple-apps/): App Store から入手できます。デフォルトでは、iOS 向け Meshtastic アプリはネイティブのオフライン Apple マップの使用をサポートしています。
- [Web Client](https://meshtastic.org/docs/software/web-client/): Meshtastic Web は、ブラウザ上で直接動作する Meshtastic クライアントです。
- [Python CLI](https://meshtastic.org/docs/software/python/cli/): Python の pip パッケージをインストールすると "meshtastic" というコマンドライン実行ファイルが追加され、ネットワーク上で送受信されるパケットを JSON 形式で表示したり、Meshtastic デバイスからのシリアルデバッグ情報を確認したりできます。
- [Linux Native](https://meshtastic.org/docs/software/linux-native/): Portduino フレームワークのおかげで、デバイスソフトウェアはネイティブの Linux マシン上でも動作させることができます。
- [Meshtastic Integrations](https://meshtastic.org/docs/software/integrations/): Meshtastic エコシステムは拡張性が高く、多数の既存ソフトウェア製品やプロジェクトとの容易な統合を可能にします。

## デバイス接続

Meshtastic を使用する前に、まずデバイスを接続する必要があります。接続方法は 2 つあります。1 つ目は拡張ボードを使用する方法で、対応する情報がディスプレイに表示されます。その後、表示された情報に従って、対応するプラットフォーム上で設定を行うことができます。2 つ目は XIAO と Wio-SX1262 モジュールを接続し、シリアルポートツールを使用してノード ID とパスワードを取得する方法です。

### バッテリーへの接続

XIAO ESP32S3 には電源管理チップが内蔵されており、バッテリーを使用して XIAO ESP32S3 に単独で給電したり、XIAO ESP32S3 の USB ポートを介してバッテリーを充電したりすることができます。

XIAO にバッテリーを接続したい場合は、`protection circuit` 付きの、適合した充電式 `3.7V lithium` バッテリーの購入を推奨します。バッテリーをはんだ付けする際は、必ず正極と負極を正しく区別してください。電源の負極端子は USB ポートに最も近い側であり、電源の正極端子は USB ポートから離れた側になります。



<div class="table-center">
<iframe width="730" height="420" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Xiao%20Esp32S3%20Battery%20Connection.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>


### 拡張ボードへの接続

ファームウェアを書き込み、Meshtastic アプリをダウンロードした後は、拡張ボードを使用することで、接続や Grove センサー・モジュールの追加などの応用を簡単に行うことができます。

**ステップ 1**: 接続したいデバイス（例:「device」）の電源が入っており、検出可能な状態になっていることを確認します。そして、スマートフォンで Meshtastic アプリを開きます。

**ステップ 2**: Meshtastic アプリの右下には "+" アイコンがあります。これをクリックして、アプリに近くの接続可能なデバイスのスキャンを開始させます。その後、OLED ディスプレイに表示されている対応するデバイス ID を選択します。

**ステップ 3**: 正しく選択できたら、OLED ディスプレイに表示されているコードを入力します。ボタンを押して表示を切り替えます。

**ボタンの機能:**

- 1 回押すと画面を切り替えます。
- 2 回押すとブロードキャストします。
- 3 回押すと GPS モードを切り替えます。

**ステップ 4**: LoRa リージョンを設定すると、デバイスが再起動します。

**ステップ 5**: 再起動が完了すると、Meshtastic アプリおよび OLED ディスプレイ上でデバイスの状態を確認できます。

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/dzqx32lBJso" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### シリアルポートツール

好みのシリアルポートデバッグツールを選択します。ここでは例として mac 上の Comtool を使用します。**serial** 接続を選択し、**対応するポート** を選び、ボーレートを **115200** に設定し、**RTS と DTR** を有効にします。接続を開くと、通信データを確認できます。
"**nodenum**" を検索して、対応するノード ID を見つけます。デフォルトの **パスワードは 123456** です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/11.png" style={{width:700, height:'auto'}}/></div>

:::tip
nodenum の下 4 桁は、Meshtastic アプリで検出されるデバイス番号 ID です。たとえば、"nodenum 0x9e20d02c" は Meshtastic 上では "Meshtastic_d02c" となります。
:::


### SX-1262 への接続

SX-1262 は B2B インターフェースを介して Xiao ESP32-S3 に接続できます。SX-1262 は SPI を使用して Xiao ESP32-S3 と通信します。

次の図は、XIAO ESP32S3 と Wio-SX1262 間の B2B ピンマッピングを示しています。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/ESP32-S3B2B%E5%BA%A7%E5%AD%90%E5%BC%95%E8%84%9A%E5%9B%BE.png" style={{width:700, height:'auto'}} alt="XIAO ESP32S3 と Wio-SX1262 間の B2B ピンマッピング"/>
</div>
:::warning
互換性のある SX-1262 は、このキット内でのみ購入できます。
:::
## Wio Tracker T1000-E との通信

**ステップ 1**. [wiki](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#入門ガイド-1) に従って Wio Tracker T1000-E を接続します。

**ステップ 2**. 次の設定が、XIAO ESP32S3 for Meshatastic 上の設定と同じであることを確認します。

1. デバイスの起動とセットアップ

- 両方のデバイスの電源が入っており、正常に動作していることを確認します。
- デバイスの無線通信機能（Bluetooth、LoRa など）が有効になっている必要があります。誤ってオフになっていたり、制限されていないか関連設定を確認してください。

2. 距離と信号強度

- 2 台のデバイス間の距離が離れすぎていてはいけません。初期テストの結果、2 dBm IPEX アンテナを使用した XIAO ESP32S3 for Meshtastic の通信距離は 2.5 km を超えています。一般的に、より開けた環境では 20 km 以上になる場合もあります。

3. ネットワーク設定

- デバイスが同じネットワークモードまたはチャネル設定になっていることを確認します。Meshtastic APP を使用して、同じ「lora region」と「Modem preset」に簡単に設定できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/12.png" style={{width:350, height:'auto'}}/></div>

**ステップ 3**. Wio Tracker T1000-E と通信する

一度接続されると、Meshtastic ネットワークを介してメッセージの送受信を開始できます。メッセージはテキストベースのものや、デバイスおよびアプリの機能に応じて追加機能をサポートするものもあります。また、ネットワークのアクティビティを監視し、現在どのデバイスが接続されアクティブになっているかを確認することもできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/3.gif" style={{width:350, height:'auto'}}/></div>

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/vJN_4A8s4z0" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## センサー接続

Meshtastic アプリケーションでは、Wio-SX1262 と XIAO esp32s3 キットは幅広いセンサーをサポートできます。XIAO 拡張ボードと組み合わせて使用すると、多数の Grove センサーをサポートできます。詳細は[こちら](https://github.com/meshtastic/firmware/blob/3f1c86f9535279fd17eaaab6e10a06f09915b7e4/src/detect/ScanI2C.h#L10)を確認してください。さらに、GNSS アドオンモジュールと組み合わせることで、Meshtastic 内で GPS 機能を備えた最小のモジュールを構成できます。

### 温度および湿度センサー

<div class="table-center">
  <table align="center">
    <tr>
      <th>DHT20 温度 & 湿度センサー</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

**ステップ 1**: XIAO Expansion Board の Grove DHT20 センサーを接続します

**ステップ 2**: Meshtastic APP で `Detection Sensor` を有効にします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/13.PNG" style={{width:350, height:'auto'}}/></div>

### GNSS センサー

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO 用 L76K GNSS モジュール</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## 初期設定

:::note
詳細については、[Meshtastic](https://meshtastic.org/docs) を参照してください。
:::

### 無線設定

Meshtastic ファームウェアにはいくつかの設定セクションがあり、メッシュ上で小さな管理メッセージとして送信できるように分割されています。

| 名前 | 説明 |
| ---- | ---- |
| [Bluetooth](https://meshtastic.org/docs/configuration/radio/bluetooth/) | Bluetooth 設定オプションは、Enabled、Pairing Mode、Fixed PIN です。 |
| [Channels](https://meshtastic.org/docs/configuration/radio/channels/) | Channels 設定オプションは、Index、Role、Settings です。 |
| [Device](https://meshtastic.org/docs/configuration/radio/device/) | Device 設定オプションは、Device Role、Serial Output、Debug Log、Factory Reset です。 |
| [Display](https://meshtastic.org/docs/configuration/radio/display/) | Display 設定オプションは、Screen On Duration、Auto Carousel Interval、Always Point North、GPS Format です。 |
| [LoRa](https://meshtastic.org/docs/configuration/radio/lora/) | LoRa 設定オプションは、Region、Modem Preset、Max Hops、Transmit Power、Bandwidth、Spread Factor、Coding Rate、Frequency Offset、Transmit Disabled、Ignore Incoming Array です。 |
| [Network](https://meshtastic.org/docs/configuration/radio/network/) | Network 設定オプションは、WiFi Enabled、WiFi SSID、WiFi PSK、WiFi Mode、NTP Server です。 |
| [Position](https://meshtastic.org/docs/configuration/radio/position/) | Position 設定オプションは、GPS Enabled、GPS Update Interval、GPS Attempt Time、Fixed Position、Smart Broadcast、Broadcast Interval、Position Packet Flags です。 |
| [Power](https://meshtastic.org/docs/configuration/radio/power/) | Power 設定オプションは、Charge Current、Power Saving、Shutdown after losing power、ADC Multiplier Override Wait Bluetooth Interval、Light Sleep Interval、Minimum Wake Interval です。 |
| [User](https://meshtastic.org/docs/configuration/radio/user/) | User 設定オプションは、Long Name、Short Name、Is Licensed です。 |

### モジュール設定

モジュールはファームウェアに含まれており、ユーザーはメッシュやデバイスの機能を拡張できます。

| 名前 | 説明 |
| ---- | ---- |
| [Ambient Lighting](https://meshtastic.org/docs/configuration/module/ambient-lighting/) | NCP5623 I2C RGB LED の明るさを調整します。 |
| [Audio](https://meshtastic.org/docs/configuration/module/audio/) | 特定のデバイスで Codec2 音声通信のサポートを有効にします。 |
| [Canned Message](https://meshtastic.org/docs/configuration/module/canned-message/) | ロータリーエンコーダーのような入力デバイスを使用して、デバイスから直接送信するあらかじめ定義されたメッセージを複数設定します。 |
| [Detection Sensor](https://meshtastic.org/docs/configuration/module/detection-sensor/) | 監視する GPIO ピンを設定し、指定された High/Low 状態を検出してテキストアラートを送信します。 |
| [External Notification](https://meshtastic.org/docs/configuration/module/external-notification/) | デバイスに接続した回路（LED、ブザーなど）を使って、受信メッセージで通知できるようにします。 |
| [MQTT](https://meshtastic.org/docs/configuration/module/mqtt/) | パケットを MQTT サーバーに転送します。これにより、ローカルメッシュ上のユーザーがインターネット経由で別のメッシュ上のユーザーと通信できます。 |
| [Neighbor Info](https://meshtastic.org/docs/configuration/module/neighbor-info/)| 0 ホップの近隣ノードに関する情報をメッシュに送信します。 |
| [Paxcounter](https://meshtastic.org/docs/configuration/module/paxcounter/) | ノードの近くを通過する BLE および WiFi デバイスの数をカウントします。 |
| [Range Test](https://meshtastic.org/docs/configuration/module/range-test/) | デバイス間で通信できる距離をテストするために、GPS 位置情報付きメッセージを一定間隔で送信します。少なくとも 1 台を送信側、1 台を受信側として設定する必要があります。受信側はすべての受信メッセージを CSV に記録します。 |
| [Remote Hardware](https://meshtastic.org/docs/configuration/module/remote-hardware/) | メッシュ経由で GPIO の状態をリモートで設定および読み取りできます。 |
| [Serial Module](https://meshtastic.org/docs/configuration/module/serial/) | シリアルポート経由で文字列を送信することで、メッシュ全体にメッセージを送信します。 |
| [Store & Forward](https://meshtastic.org/docs/configuration/module/store-and-forward-module/) | 切断されたクライアントがメッシュに再参加した後に配信するため、メッセージをデバイスに保存します。 |
| [Telemetry](https://meshtastic.org/docs/configuration/module/telemetry/) | センサーをデバイスに接続し、メッシュに対して定期的に測定値を送信します。 |
| [Traceroute](https://meshtastic.org/docs/configuration/module/traceroute/) | 特定の宛先にメッセージをホップさせる際に使用されるノードを追跡します。 |
## リソース
- **[PDF]**[Xiao ESP32-S3 と互換性のある SX1262 の回路図](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- **[PDF]**[Wio-SX1262 モジュール データシート](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
- **[RAR]**[Wio-SX1262 for XlAO 3D ファイル](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)
- **[PDF]** [Seeed Studio XIAO ESP32S3 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)
- [XIAO ESP32S3 キット Kicad ライブラリ](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20Wio%20SX1262%20for%20XIAO%20ESP32S3)
- **[STEP]** [Seeed Studio XIAO ESP32S3 3D モデル](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Eagle ライブラリ](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)
- **[DXF]** [Seeed Studio XIAO ESP32S3 DXF 形式寸法図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)
- **[LBR]** [Seeed Studio XIAO ESP32S3 Eagle フットプリント](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip)
- **[XLSX]** [Seeed Studio XIAO ESP32S3 ピン配置シート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32S3 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- ケース 3D ファイル](https://www.thingiverse.com/thing:6888371)
## コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技術サポート & 製品ディスカッション

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>
