---
description: XIAO ESP32S3 & Wio-SX1262 キットベースの Meshtastic
title: XIAO ESP32-S3&Wio SX1262 キット
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /ja/xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic
last_update:
  date: 12/11/2025
  author: Michelle Huang
---


[Meshtastic®](https://meshtastic.org/) は、手頃な価格で低消費電力のデバイス上で動作するように構築された、オープンソースでオフグリッド、分散型のメッシュネットワークです。Seeed Studio は、ホビイストや産業ユーザー向けに、すぐに使える Meshtastic デバイスの包括的な範囲を提供しています。XIAO ESP32S3 & Wio-SX1262 キットは、meshtastic 開発者やメーカーにとって柔軟なソリューションです。
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
    </a>
</div>
## ファームウェアのフラッシュ

:::note
**2024年10月24日**より前に XIAO ESP32S3 & Wio-SX1262 キットを購入された場合は、このステップバイステップのチュートリアルに従ってデバイスにファームウェアをフラッシュしてください。ファームウェアの更新に `NRF-OTA を使用しないでください`。デバイスが完全に動作しなくなる可能性があります。
:::

**ステップ 1**: まず、ブラウザを開いて https://flasher.meshtastic.org/# にアクセスします。Chrome または Edge ブラウザが必要です。

**ステップ 2**: 次に、適切な USB ケーブルを使用してデバイスを PC に接続します。電源を切ってから、USB ケーブルを接続する際に **BOOT ボタンを押し続ける**必要がある場合があります。

**ステップ 3**: 以下の指示に従って、その後のフラッシュ操作を実行します。デバイスとして "**Seeed XIAO S3**"、ファームウェアとして**最新**のものを選択し、"**Flash**" をクリックします。以前のファームウェアを上書きしたい場合は、"**Full Erase and Install**" にチェックを入れることを忘れないでください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div>

## ソフトウェア概要

Meshtastic は、Android アプリ、Apple アプリ、ウェブクライアントなど、ユーザーが選択できる複数のプラットフォームソフトウェアを提供しています。また、開発者が使用するための Python CLI、Linux Native、統合方法も提供しています。

具体的な情報については、[Meshtastic の公式ウェブサイト](https://meshtastic.org/docs/software/)を参照してください。

- [Android App](https://meshtastic.org/docs/category/android-app/): Android アプリケーションは F-Droid リポジトリと Google Play Store で利用できます。これにより、Bluetooth、Wi-Fi（同じネットワーク上の場合）、または USB On-The-Go（OTG）を介して Android フォンから Meshtastic デバイスに接続できます。
- [Apple App](https://meshtastic.org/docs/category/apple-apps/): App Store で利用できます。デフォルトでは、iOS 用 Meshtastic アプリはネイティブオフライン Apple Maps の使用をサポートしています。
- [Web Client](https://meshtastic.org/docs/software/web-client/): Meshtastic Web は、ブラウザで直接実行される Meshtastic クライアントです。
- [Python CLI](https://meshtastic.org/docs/software/python/cli/): python pip パッケージは "meshtastic" コマンドライン実行可能ファイルをインストールし、ネットワーク上で送信されたパケットを JSON として表示し、meshtastic デバイスからのシリアルデバッグ情報を確認できます。
- [Linux Native](https://meshtastic.org/docs/software/linux-native/): デバイスソフトウェアは、Portduino フレームワークのおかげでネイティブ Linux マシン上でも実行できます。
- [Meshtastic Integrations](https://meshtastic.org/docs/software/integrations/): Meshtastic エコシステムは高度に拡張可能で、多数の既存のソフトウェア製品やプロジェクトとの簡単な統合を可能にします。

## デバイス接続

Meshtastic を使用する前に、まずデバイスを接続する必要があります。接続方法は2つあります。1つ目は拡張ボードを使用する方法で、対応する情報がディスプレイに表示されます。その後、反映された情報に従って対応するプラットフォームで設定を行うことができます。2つ目は XIAO と Wio-SX1262 モジュールを接続し、シリアルポートツールを使用してノード ID とパスワードを取得する方法です。

### バッテリーへの接続

XIAO ESP32S3 には内蔵の電源管理チップがあり、バッテリーを使用して XIAO ESP32S3 を独立して電源供給したり、XIAO ESP32S3 の USB ポートを通じてバッテリーを充電したりできます。

XIAO にバッテリーを接続したい場合は、`保護回路`付きの適格な充電式`3.7V リチウム`バッテリーの購入をお勧めします。バッテリーをはんだ付けする際は、正極と負極を区別するよう注意してください。電源の負極は USB ポートに最も近い側で、電源の正極は USB ポートから離れた側です。



<div class="table-center">
<iframe width="730" height="420" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Xiao%20Esp32S3%20Battery%20Connection.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>


### 拡張ボードへの接続

ファームウェアをフラッシュして Meshtastic アプリをダウンロードした後、拡張ボードは接続や Grove センサーやモジュールを簡単に追加するなどの追加アプリケーションに適したツールになります。

**ステップ 1**: 接続するデバイス（「device」など）の電源が入っており、検出可能な状態であることを確認します。そして、携帯電話で Meshtastic アプリを開きます。

**ステップ 2**: Meshtastic アプリで、右下に "+" アイコンがあります。それをクリックして、アプリが近くの接続可能なデバイスのスキャンを開始させます。その後、OLED ディスプレイに表示されている対応するデバイス ID を選択します。

**ステップ 3**: 正しく選択されたら、OLED ディスプレイに表示されているコードを入力します。ボタンを押してディスプレイを切り替えます。

**ボタン機能:**

- 1回押すと画面を切り替えます。
- 2回押すとブロードキャストします。
- 3回押すと GPS モードを切り替えます。

**ステップ 4**: LoRa 地域を設定すると、デバイスが再起動します。

**ステップ 5**: 再起動が完了すると、デバイスの状態を Meshtastic アプリと OLED ディスプレイで確認できます。

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/dzqx32lBJso" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### シリアルポートツール

お好みのシリアルポートデバッグツールを選択してください。以下では Mac の Comtool を例に説明します。**serial** 接続を選択し、**対応するポート**を選択し、ボーレートを **115200** に設定し、**RTS と DTR** をオンにします。接続を開くと、接続データを確認できます。
"**nodenum**" を検索して、対応するノード ID を見つけます。デフォルトの**パスワードは 123456** です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/11.png" style={{width:700, height:'auto'}}/></div>

:::tip
nodenum の下4桁は、meshtastic アプリによって発見されるデバイス番号 ID です。例えば、"nodenum 0x9e20d02c" は meshtastic では "Meshtastic_d02c" になります。
:::


### SX-1262 への接続

SX-1262 は B2B インターフェースを介して Xiao ESP32-S3 に接続できます。SX-1262 は SPI を使用して Xiao ESP32-S3 と通信します。
:::warning
互換性のある SX-1262 はキット内でのみ購入できます。
:::
## Wio Tracker T1000-E との通信

**ステップ 1**. [wiki](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#get-started-1) に従って Wio Tracker T1000-E を接続します。

**ステップ 2**. 以下の設定が Meshatastic 用 XIAO ESP32S3 の設定と同じであることを確認してください。

1. デバイスのアクティベーションとセットアップ

- 両方のデバイスの電源が入っており、正常な動作状態であることを確認してください。
- デバイスの無線通信機能（Bluetooth、LoRa など）が有効になっている必要があります。関連する設定を確認して、誤ってオフにされたり制限されたりしていないことを確認してください。

2. 距離と信号強度

- 2つのデバイス間の距離が遠すぎてはいけません。初期テストの結果、2 dbm IPEX アンテナを使用した Meshtastic 用 XIAO ESP32S3 の通信距離は 2.5 km を超えています。一般的に、より開放的な環境では、20 km を超えることができます。

3. ネットワーク設定

- デバイスが同じネットワークモードまたはチャンネル設定にあることを確認してください。Meshtastic APP を使用して同じ 'lora region' と 'Modem preset' に簡単に設定できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/12.png" style={{width:350, height:'auto'}}/></div>

**ステップ 3**. Wio Tracker T1000-E との通信

接続されると、Meshtastic ネットワークを通じてメッセージの送受信を開始できます。メッセージはテキストベースであったり、デバイスとアプリの機能に応じて追加機能をサポートしたりする場合があります。また、ネットワークアクティビティを監視し、現在接続されてアクティブなデバイスを確認することもできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/3.gif" style={{width:350, height:'auto'}}/></div>

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/vJN_4A8s4z0" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## センサー接続

meshtastic アプリケーションでは、XIAO esp32s3 キット付き Wio-SX1262 は幅広いセンサーをサポートできます。XIAO 拡張ボードと組み合わせて使用すると、多数の Grove センサーをサポートできます。[こちら](https://github.com/meshtastic/firmware/blob/3f1c86f9535279fd17eaaab6e10a06f09915b7e4/src/detect/ScanI2C.h#L10)をご確認ください。さらに、GNSS アドオンモジュールと組み合わせると、GPS 機能を持つ meshtastic 内で最小のモジュールを形成します。

### 温度・湿度センサー

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
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

**ステップ 1**: Grove DHT20 センサーを XIAO 拡張ボードに接続します

**ステップ 2**: Meshtastic アプリで `Detection Sensor` を有効にします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/13.PNG" style={{width:350, height:'auto'}}/></div>

### GNSS センサー

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

Meshtastic ファームウェアには複数の設定セクションがあり、これらは小さな管理メッセージとしてメッシュ経由で送信できるように分割されています。

| 名前 | 説明 |
| ---- | ---- |
| [Bluetooth](https://meshtastic.org/docs/configuration/radio/bluetooth/) | Bluetooth 設定オプション：有効、ペアリングモード、固定 PIN。 |
| [Channels](https://meshtastic.org/docs/configuration/radio/channels/) | チャンネル設定オプション：インデックス、役割、設定。 |
| [Device](https://meshtastic.org/docs/configuration/radio/device/) | デバイス設定オプション：デバイス役割、シリアル出力、デバッグログ、工場出荷時リセット。 |
| [Display](https://meshtastic.org/docs/configuration/radio/display/) | ディスプレイ設定オプション：画面オン時間、自動カルーセル間隔、常に北を指す、GPS フォーマット。 |
| [LoRa](https://meshtastic.org/docs/configuration/radio/lora/) | LoRa 設定オプション：地域、モデムプリセット、最大ホップ数、送信電力、帯域幅、拡散係数、符号化率、周波数オフセット、送信無効、受信配列無視。 |
| [Network](https://meshtastic.org/docs/configuration/radio/network/) | ネットワーク設定オプション：WiFi 有効、WiFi SSID、WiFi PSK、WiFi モード、NTP サーバー。 |
| [Position](https://meshtastic.org/docs/configuration/radio/position/) | 位置設定オプション：GPS 有効、GPS 更新間隔、GPS 試行時間、固定位置、スマートブロードキャスト、ブロードキャスト間隔、位置パケットフラグ。 |
| [Power](https://meshtastic.org/docs/configuration/radio/power/) | 電源設定オプション：充電電流、省電力、電源喪失後のシャットダウン、ADC 乗数オーバーライド、Bluetooth 待機間隔、軽量スリープ間隔、最小ウェイク間隔。 |
| [User](https://meshtastic.org/docs/configuration/radio/user/) | ユーザー設定オプション：長い名前、短い名前、ライセンス有無。 |

### モジュール設定

モジュールはファームウェアに含まれており、ユーザーがメッシュやデバイスの機能を拡張できます。

| 名前 | 説明 |
| ---- | ---- |
| [Ambient Lighting](https://meshtastic.org/docs/configuration/module/ambient-lighting/) | NCP5623 I2C RGB LED の明度を調整します。 |
| [Audio](https://meshtastic.org/docs/configuration/module/audio/) | 特定のデバイスで Codec2 音声通信のサポートを有効にします。 |
| [Canned Message](https://meshtastic.org/docs/configuration/module/canned-message/) | ロータリーエンコーダーなどの入力デバイスを使用して、デバイスから直接送信する定型メッセージを設定します。 |
| [Detection Sensor](https://meshtastic.org/docs/configuration/module/detection-sensor/) | 指定された高/低状態を監視する GPIO ピンを設定し、テキストアラートを送信します。 |
| [External Notification](https://meshtastic.org/docs/configuration/module/external-notification/) | 受信メッセージは、デバイスに接続した回路（LED、ブザーなど）を使用してアラートできます。 |
| [MQTT](https://meshtastic.org/docs/configuration/module/mqtt/) | パケットを MQTT サーバーに転送します。これにより、ローカルメッシュのユーザーがインターネット経由で別のメッシュのユーザーと通信できます。 |
| [Neighbor Info](https://meshtastic.org/docs/configuration/module/neighbor-info/)| 0 ホップ隣接ノードの情報をメッシュに送信します。 |
| [Paxcounter](https://meshtastic.org/docs/configuration/module/paxcounter/) | ノードを通過する BLE および WiFi デバイスの数をカウントします。 |
| [Range Test](https://meshtastic.org/docs/configuration/module/range-test/) | GPS 位置情報付きメッセージを一定間隔で送信し、デバイス間の通信距離をテストします。送信者として設定されたデバイスと受信者として設定されたデバイスが（少なくとも）1 台ずつ必要です。受信者は受信したすべてのメッセージを CSV にログ記録します。 |
| [Remote Hardware](https://meshtastic.org/docs/configuration/module/remote-hardware/) | メッシュ経由で GPIO 状態をリモートで設定・読み取りします。 |
| [Serial Module](https://meshtastic.org/docs/configuration/module/serial/) | シリアルポート経由で文字列を送信することで、メッシュ間でメッセージを送信します。 |
| [Store & Forward](https://meshtastic.org/docs/configuration/module/store-and-forward-module/) | 切断されたクライアントがメッシュに再参加した後の配信のため、デバイスにメッセージを保存します。 |
| [Telemetry](https://meshtastic.org/docs/configuration/module/telemetry/) | デバイスにセンサーを接続し、定期的にメッシュに測定値を送信します。 |
| [Traceroute](https://meshtastic.org/docs/configuration/module/traceroute/) | 特定の宛先へのメッセージのホップに使用されるノードを追跡します。 |
## リソース
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
## コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)
## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
