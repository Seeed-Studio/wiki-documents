---
description: XIAO ESP32S3 と Wio-SX1262 Kit を基盤とした Meshtastic
title: XIAO ESP32-S3 と Wio SX1262 Kit
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic
last_update:
  date: 12/11/2025
  author: Michelle Huang
createdAt: '2024-10-09'
updatedAt: '2025-12-11'
url: https://wiki.seeedstudio.com/ja/xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic/
---


[Meshtastic®](https://meshtastic.org/) は、低コストかつ低電力のデバイス上で動作するオープンソースのオフグリッド分散型メッシュネットワークです。Seeed Studio は、趣味として楽しむ人や産業ユーザー向けに、幅広いすぐに使える Meshtastic デバイスを提供しています。XIAO ESP32S3 と Wio-SX1262 Kit は、Meshtastic 開発者やメーカーにとって柔軟なソリューションです。
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
    </a>
</div>
## ファームウェアの書き込み

:::note
**2024年10月24日以前**に XIAO ESP32S3 と Wio-SX1262 Kit を購入した場合は、このステップバイステップチュートリアルに従ってファームウェアをデバイスに書き込んでください。`NRF-OTA`を使用してファームウェアを更新することは避けてください、デバイスが完全に故障する可能性があります。
:::

**Step 1**: まず、ブラウザを開いて https://flasher.meshtastic.org/# を訪問します。Chrome または Edge ブラウザが必要です。

**Step 2**: 次に、適切な USB ケーブルを使用してデバイスを PC に接続します。電源をオフにしてから、USB ケーブルを挿入する際に**BOOT ボタンを押し続ける**必要があるかもしれません。

**Step 3**: 提供された指示に従って、以降の書き込み操作を行います。デバイスを "**Seeed XIAO S3**" として選択し、ファームウェアを**最新**のものとして選択し、その後 "**Flash**" をクリックします。以前のファームウェアを上書きしたい場合は、"**Full Erase and Install**" をチェックすることを忘れないでください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div>

## ソフトウェア概要

Meshtastic は、Android アプリ、Apple アプリ、Web クライアントを含む、ユーザーが選択できる複数のプラットフォームソフトウェアを提供しています。また、開発者が利用できる Python CLI、Linux Native および統合方法も提供しています。

詳細については、[Meshtastic の公式ウェブサイト](https://meshtastic.org/docs/software/)をご参照ください。

- [Android App](https://meshtastic.org/docs/category/android-app/): Android アプリケーションは F-Droid リポジトリと Google Play Store で入手できます。これにより、Android スマートフォンから Bluetooth、Wi-Fi（同じネットワーク上の場合）、または USB On-The-Go（OTG）を通じて Meshtastic デバイスに接続できます。
- [Apple App](https://meshtastic.org/docs/category/apple-apps/): アプリストアで入手できます。iOS 用 Meshtastic アプリは、ネイティブのオフライン Apple Maps の使用をデフォルトでサポートしています。
- [Web Client](https://meshtastic.org/docs/software/web-client/): Meshtastic Web はブラウザ内で直接実行される Meshtastic クライアントです。
- [Python CLI](https://meshtastic.org/docs/software/python/cli/): python pip パッケージは "meshtastic" コマンドライン実行ファイルをインストールします。これはネットワーク経由で送信されたパケットを JSON として表示し、Meshtastic デバイスからのシリアルデバッグ情報を見ることができます。
- [Linux Native](https://meshtastic.org/docs/software/linux-native/): デバイスソフトウェアは Portduino フレームワークにより、ネイティブ Linux マシン上でも実行できます。
- [Meshtastic Integrations](https://meshtastic.org/docs/software/integrations/): Meshtastic エコシステムは高度に拡張可能であり、多くの既存のソフトウェア製品やプロジェクトと簡単に統合できます。

## デバイスの接続

Meshtastic を使用する前に、まずデバイスを接続する必要があります。接続方法は2つあります。一つは拡張ボードを使用する方法で、対応する情報がディスプレイ上に表示されます。その後、反映された情報に基づいて対応するプラットフォームで設定を行います。もう一つは XIAO と Wio-SX1262 モジュールを接続し、シリアルポートツールを使用してノード ID とパスワードを取得する方法です。

### バッテリーへの接続

XIAO ESP32S3 には内蔵の電力管理チップがあり、バッテリーを使用して XIAO ESP32S3 を独立して電源供給したり、XIAO ESP32S3 の USB ポートを通じてバッテリーを充電することができます。

XIAO にバッテリーを接続したい場合、保護回路付きの適格な `3.7V リチウム` 充電式バッテリーを購入することをお勧めします。バッテリーを接続する際は、正極と負極を区別するように注意してください。電源の負極は USB ポートに最も近い側で、電源の正極は USB ポートから離れた側です。



<div class="table-center">
<iframe width="730" height="420" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Xiao%20Esp32S3%20Battery%20Connection.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
[EMPTY_LIRN]

### 拡張ボードへの接続

ファームウェアを書き込み、Meshtastic アプリをダウンロードした後、拡張ボードは接続や grove センサーやモジュールを簡単に追加するといった追加アプリケーションに便利なツールとなります。

**Step 1**: 接続対象のデバイス（例えば "device"）が電源オンかつ検出可能な状態であることを確認してください。そして、スマートフォン上で Meshtastic アプリを開きます。

**Step 2**: Meshtastic アプリでは、右下に "+" アイコンがあります。クリックすると、アプリが近くの接続可能なデバイスをスキャン開始します。その後、OLED ディスプレイに表示されている対応するデバイス ID を選択します。

**Step 3**: 正しく選択したら、OLED ディスプレイに表示されているコードを入力します。ボタンを押してディスプレイを切り替えます。

**ボタン機能:**

- 一度押すと画面を切り替えます。
- 二度押すとブロードキャストします。
- 三度押すと GPS モードを切り替えます。

**Step 4**: LoRa 地域を設定すると、デバイスが再起動します。

**Step 5**: 再起動が完了すると、デバイスの状態は Meshtastic アプリと OLED ディスプレイで確認できます。

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/dzqx32lBJso" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### シリアルポートツール

好きなシリアルポートデバッグツールを選択します。以下では mac 上の Comtool を例として説明します。**serial** 接続を選択し、**対応するポート**を選択し、ボーレートを **115200** に設定し、**RTS と DTR** をオンにしてください。接続を開くと、接続データを見ることができます。
"**nodenum**" を検索して対応するノード ID を探します。そのデフォルトの**パスワードは 123456**です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/11.png" style={{width:700, height:'auto'}}/></div>

:::tip
nodenum の最後4桁は、meshtastic アプリによって発見されたデバイス番号 ID です。例えば、"nodenum 0x9e20d02c" は meshtastic では "Meshtastic_d02c" となります。
:::


### SX-1262への接続

SX-1262 は B2B インターフェースを通じて Xiao ESP32-S3 に接続できます。SX-1262 は SPI を使用して Xiao ESP32-S3 と通信します。

以下の図は XIAO ESP32S3 と Wio-SX1262 間の B2B ピンマッピングを示しています。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/ESP32-S3B2B%E5%BA%A7%E5%AD%90%E5%BC%95%E8%84%9A%E5%9B%BE.png" style={{width:700, height:'auto'}} alt="B2B pin mapping between XIAO ESP32S3 and Wio-SX1262"/>
</div>
:::warning
互換性のある SX-1262 はキット内でしか購入できません。
:::
## Wio Tracker T1000-Eとの通信

**Step 1**. [wiki](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#get-started-1)に従って Wio Tracker T1000-E を接続します。

**Step 2**. Meshatastic 用の XIAO ESP32S3 設定と同じになるように、以下の設定を確認してください。

1. デバイスの起動と設定

- 両デバイスが電源オンかつ通常稼働状態であることを確認してください。
- デバイスの無線通信機能（Bluetooth、LoRa など）は有効になっているべきです。関連設定をチェックして、誤ってオフになっているまたは制限されていることを確認してください。

2. 距離と信号強度

- 両デバイス間の距離はあまり遠くではいけません。初期テストによると、2 dbm IPEX アンテナを持つ Meshtastic 用 XIAO ESP32S3 の通信距離は 2.5 km 以上です。一般的には、より開けた環境では 20 km 以上になります。

3. ネットワーク設定

- デバイスが同じネットワークモードまたはチャンネル設定にあることを確認してください。Meshtastic APP を使用して同じ 'lora region' と 'Modem preset' に簡単に設定できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/12.png" style={{width:350, height:'auto'}}/></div>

**Step 3**. Wio Tracker T1000-E との通信

接続後、Meshtastic ネットワークを通じてメッセージの送受信を開始できます。メッセージはテキストベースまたは、デバイスとアプリの機能に依存して追加機能をサポートするかもしれません。また、ネットワーク活動を監視し、現在接続されているかつ稼働しているデバイスを確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/3.gif" style={{width:350, height:'auto'}}/></div>

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/vJN_4A8s4z0" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## センサー接続

Meshtastic アプリケーションにおいて、XIAO esp32s3 キット搭載の Wio-SX1262 は幅広いセンサーをサポートすることができます。XIAO 拡張ボードと組み合わせて使用すると、多数の grove センサーをサポートできます。[こちら](https://github.com/meshtastic/firmware/blob/3f1c86f9535279fd17eaaab6e10a06f09915b7e4/src/detect/ScanI2C.h#L10)をご確認ください。また、GNSS 追加モジュールと組み合わせると、GPS 機能を持つ meshtastic 内最小モジュールになります。
[
]]></translation_rules>

<task>
  请翻译以下内容，严格遵守所有规则。
    </task>
      
    <content>
    ---
      title: "reTerminal E Series"
    description: "reTerminal E Series is a powerful and versatile embedded computer designed for industrial applications. It features a 5-inch IPS touchscreen, a quad-core ARM Cortex-A55 processor, and a wide range of connectivity options, including Wi-Fi, Bluetooth, Ethernet, and USB. The device is built to withstand harsh environments and is ideal for use in automation, IoT, and edge computing projects."
    slug: /reTerminal-E-Series
      ---
        ---
        title: "reTerminal E Series"
        description: "reTerminal E Series is a powerful and versatile embedded computer designed for industrial applications. It features a 5-inch IPS touchscreen, a quad-core ARM Cortex-A55 processor, and a wide range of connectivity options, including Wi-Fi, Bluetooth, Ethernet, and USB. The device is built to withstand harsh environments and is ideal for use in automation, IoT, and edge computing projects."
      slug: /reTerminal-E-Series
    ---

import DocCardList from '@theme/DocCardList';

<DocCardList />

</content>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/13.PNG" style={{width:350, height:'auto'}}/></div>

### GNSS Sensor

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
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Initial Configuration

:::note
For more details, please refer to [Meshtastic](https://meshtastic.org/docs).
:::

### Radio Configuration

There are several config sections in the Meshtastic firmware, these are broken out so they can be sent as small admin messages over the mesh.

| Name | Description |
| ---- | ---- |
| [Bluetooth](https://meshtastic.org/docs/configuration/radio/bluetooth/) | Bluetooth config options are: Enabled, Pairing Mode and Fixed PIN. |
| [Channels](https://meshtastic.org/docs/configuration/radio/channels/) | Channels config options are: Index, Role and Settings. |
| [Device](https://meshtastic.org/docs/configuration/radio/device/) | Device config options are: Device Role, Serial Output, Debug Log and Factory Reset. |
| [Display](https://meshtastic.org/docs/configuration/radio/display/) | Display config options are: Screen On Duration, Auto Carousel Interval, Always Point North, and GPS Format. |
| [LoRa](https://meshtastic.org/docs/configuration/radio/lora/) | The LoRa config options are: Region, Modem Preset, Max Hops, Transmit Power, Bandwidth, Spread Factor, Coding Rate, Frequency Offset, Transmit Disabled and Ignore Incoming Array. |
| [Network](https://meshtastic.org/docs/configuration/radio/network/) | Network config options are: WiFi Enabled, WiFi SSID, WiFi PSK, WiFi Mode and NTP Server. |
| [Position](https://meshtastic.org/docs/configuration/radio/position/) | Position config options are: GPS Enabled, GPS Update Interval, GPS Attempt Time, Fixed Position, Smart Broadcast, Broadcast Interval and Position Packet Flags. |
| [Power](https://meshtastic.org/docs/configuration/radio/power/) | Power config options are: Charge Current, Power Saving, Shutdown after losing power, ADC Multiplier Override Wait Bluetooth Interval, Light Sleep Interval and Minimum Wake Interval. |
| [User](https://meshtastic.org/docs/configuration/radio/user/) | User config options are: Long Name, Short Name, and Is Licensed. |

### Module Configuration

Modules are included in the firmware and allow users to extend the functionality of their mesh or device.

| Name | Description |
| ---- | ---- |
| [Ambient Lighting](https://meshtastic.org/docs/configuration/module/ambient-lighting/) | Adjust the brightness of NCP5623 I2C RGB LEDs. |
| [Audio](https://meshtastic.org/docs/configuration/module/audio/) | Enable Support for Codec2 Voice Comms on certain devices. |
| [Canned Message](https://meshtastic.org/docs/configuration/module/canned-message/) | Set a number of predefined messages to send out directly from the device with the use of an input device like a rotary encoder. |
| [Detection Sensor](https://meshtastic.org/docs/configuration/module/detection-sensor/) | Configure a GPIO pin to be monitored for specified high/low status and send text alerts. |
| [External Notification](https://meshtastic.org/docs/configuration/module/external-notification/) | Incoming messages are able to alert you using circuits you attach to the device (LEDs, Buzzers, etc). |
| [MQTT](https://meshtastic.org/docs/configuration/module/mqtt/) | Forward packets along to an MQTT server. This allows users on the local mesh to communicate with users on another mesh over the internet. |
| [Neighbor Info](https://meshtastic.org/docs/configuration/module/neighbor-info/)| Send info on 0-hop neighbors to the mesh. |
| [Paxcounter](https://meshtastic.org/docs/configuration/module/paxcounter/) | Count the number of BLE and Wifi devices passing by a node. |
| [Range Test](https://meshtastic.org/docs/configuration/module/range-test/) | Send messages with GPS location at an interval to test the distance your devices can communicate. Requires (at least) one device set up as a sender and one as a receiver. The receiver(s) will log all incoming messages to a CSV. |
| [Remote Hardware](https://meshtastic.org/docs/configuration/module/remote-hardware/) | Set and read a GPIO status remotely over the mesh. |
| [Serial Module](https://meshtastic.org/docs/configuration/module/serial/) | Send messages across the mesh by sending strings over a serial port. |
| [Store & Forward](https://meshtastic.org/docs/configuration/module/store-and-forward-module/) | Stores messages on a device for delivery after disconnected clients rejoin the mesh. |
| [Telemetry](https://meshtastic.org/docs/configuration/module/telemetry/) | Attach sensors to the device and transmit readings on a regular interval to the mesh. |
| [Traceroute](https://meshtastic.org/docs/configuration/module/traceroute/) | Track which nodes are used to hop a message to a certain destination. |
## Resource
- **[PDF]**[The Schematic Diagram of the SX1262 compatible with Xiao ESP32-S3](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- **[PDF]**[Wio-SX1262 Module Datasheet](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
- **[RAR]**[Wio-SX1262 for XlAO 3D file](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)
- **[PDF]** [Seeed Studio XIAO ESP32S3 Schematic](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)
- [XIAO ESP32S3 Kit Kicad Library](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20Wio%20SX1262%20for%20XIAO%20ESP32S3)
- **[STEP]** [Seeed Studio XIAO ESP32S3 3D Model](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Eagle Libraries](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)
- **[DXF]** [Seeed Studio XIAO ESP32S3 Dimension in DXF](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)
- **[LBR]** [Seeed Studio XIAO ESP32S3 Eagle footprint](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Factory firmware](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip)
- **[XLSX]** [Seeed Studio XIAO ESP32S3 pinout sheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32S3 FootPrint](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- [Casing 3D file](https://www.thingiverse.com/thing:6888371)
## Course Resources

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)
## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
