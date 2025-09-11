---
description: LoRaWAN トラッカーの使用開始
title: LoRaWAN トラッカーの使用開始
keywords:
- Tracker
- LoRaWAN
image: https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/intro-e.webp
slug: /ja/get_started_with_lorawan_tracker
sidebar_position: 1
last_update:
  date: 2/27/2025
  author: Jessie
---


<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993591-t1000-e-lorawan.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-LoRaWAN-p-6408.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

T1000-E for LoRaWAN は完全にオープンソースのファームウェアを搭載しています。ユーザーエクスペリエンスを向上させるため、工場出荷時のデバイスにはデモファームウェアがプリインストールされています。ユーザーは初期体験としてデモファームウェアを探索し、独自のカスタムファームウェアを開発することもできます。カスタム開発の詳細については、[LoRaWAN オープンソースファームウェア](https://wiki.seeedstudio.com/open_source_lorawan/)を参照してください。

**T1000 シリーズバージョン比較**

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image2_20.png" alt="pir" width={800} height="auto" /></p>

## ハードウェア概要

### 図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/diagram.png" alt="pir" width={800} height="auto" /></p>

### ピン説明

|No.|名前|機能|説明|
| :- | :- | :- | :- |
|1|P0.00|XL1|32.768 kHz クリスタル接続|
|2|P0.01|XL2|32.768 kHz クリスタル接続|
|3|P0.02|<p>デジタル I/O</p><p>アナログ入力</p>|バッテリーレベル検出|
|4|P0.03|<p>デジタル I/O</p><p>アナログ入力</p>|赤色 LED IO|
|5|P0.04|<p>デジタル I/O</p><p>アナログ入力</p>|VCC 電圧検出|
|6|P0.05|<p>デジタル I/O</p><p>アナログ入力</p>|充電器挿入検出、プルアップまたはプルダウンなしで設定する必要があります|
|7|P0.06|デジタル I/O|キー IO、input_pulldown として設定する必要があります|
|8|P0.07|デジタル I/O|LR1110 BUSY|
|9|P0.08|デジタル I/O|AG3335 VRTC EN|
|10|P0.09|NFC 入力|NC|
|11|P0.10|NFC 入力|NC|
|12|P0.11|デジタル I/O|SPI SCK|
|13|P0.12|デジタル I/O|SPI CS|
|14|P0.13|デジタル I/O|UART1 TX For AG3335|
|15|P0.14|デジタル I/O|UART1 RX For AG3335|
|16|P0.15|デジタル I/O|AG3335 RTC 割り込み|
|17|P0.16|デジタル I/O|UART1 TX For debug|
|18|P0.17|デジタル I/O|UART1 RX For debug|
|19|P0.18|リセット|リセット|
|20|P0.19|デジタル I/O|QSPI Clock for FLASH|
|21|P0.20|デジタル I/O|QSPI CS for FLASH|
|22|P0.21|デジタル I/O|QSPI IO0 for FLASH|
|23|P0.22|デジタル I/O|QSPI IO1 for FLASH|
|24|P0.23|デジタル I/O|QSPI IO2 for FLASH|
|25|P0.24|デジタル I/O|緑色 LED IO|
|26|P0.25|デジタル I/O|ブザー PWM|
|27|P0.26|デジタル I/O|I2C SDA|
|28|P0.27|デジタル I/O|I2C SCL|
|29|P0.28|<p>デジタル I/O</p><p>アナログ入力</p>|NC|
|30|P0.29|<p>デジタル I/O</p><p>アナログ入力</p>|光センサー ADC 入力|
|31|P0.30|<p>デジタル I/O</p><p>アナログ入力</p>|NC|
|32|P0.31|<p>デジタル I/O</p><p>アナログ入力</p>|温度センサー ADC 入力|
|33|P1.00|デジタル I/O|QSPI IO3 for FLASH|
|34|P1.01|デジタル I/O|LR1110 DIO9|
|35|P1.02|デジタル I/O|加速度計割り込み|
|36|P1.03|デジタル I/O|充電器状態|
|37|P1.04|デジタル I/O|充電器完了|
|38|P1.05|デジタル I/O|ブザー有効|
|39|P1.06|デジタル I/O|センサー VCC 有効|
|40|P1.07|デジタル I/O|加速度計有効|
|41|P1.08|デジタル I/O|SPI MISO|
|42|P1.09|デジタル I/O|SPI MOSI|
|43|P1.10|デジタル I/O|LR1110 RESET|
|44|P1.11|デジタル I/O|AG3335 PWR EN|
|45|P1.12|デジタル I/O|AG3335 SLEEP 割り込み|
|46|P1.13|デジタル I/O|Flash 有効|
|47|P1.14|デジタル I/O|AG3335 RESETB OUT|
|48|P1.15|デジタル I/O|AG3335 Reset|

## デモファームウェア概要

### 位置情報の説明

|**位置**|**説明**|
| - | - |
|GNSS|経度と緯度の情報をアップロードします。<br/>（通常、屋内ではGPS信号がないため、位置情報を取得するには屋外でデバイスをテストすることをお勧めします）|
|Wi-Fi|Wi-Fi APのMACアドレスとRSSI情報をアップロードします。|
|Bluetooth|BluetoothビーコンのMACアドレスとRSSI情報をアップロードします。|

### ボタン

|**ボタン操作**|**説明**|
| - | - |
|3秒間長押し|電源オン/オフ|
|ボタンを3回クリック|Bluetoothのオン/オフを切り替え|-|
|ダブルクリック|SOSアラートのオン/オフを切り替え|
|1回クリック|位置情報/バッテリー/センサーデータをアップロード|

### LED

<table>
  <tr>
    <th colspan="2" valign="top"><b>LEDステータス</b></th>
    <th colspan="1" valign="top"><b>説明</b></th>
  </tr>
  <tr>
    <td colspan="1" rowspan="2">赤色LED</td>
    <td colspan="1" valign="top">点灯</td>
    <td colspan="1" valign="top">充電中</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">点滅</td>
    <td colspan="1" valign="top">充電異常</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="4">緑色LED</td>
    <td colspan="1" valign="top">点灯</td>
    <td colspan="1" valign="top">
      <p>デバイスがDFUモードです。</p>
      <p>DFUモードを終了するにはデバイスを再起動してください（ボタンを長押しし、充電ケーブルを接続した直後にボタンを離してください）</p>
    </td>
  </tr>
  <tr>
    <td colspan="1" valign="top">
      <p>500ms点灯/1s消灯</p>
    </td>
    <td colspan="1" valign="top">Bluetoothオン</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">呼吸点滅</td>
    <td colspan="1" valign="top">LoRaWANネットワークに接続中</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">2秒間高速点滅後消灯</td>
    <td colspan="1" valign="top">LoRaWANネットワークへの接続成功</td>
  </tr>
</table>

### センサー機能

SenseCAP T1000 Trackerには3つのセンサーが搭載されています：温度センサー、光センサー、3軸加速度計。
これらのセンサーの有効/無効を選択できます：

:::note
センサーがオンになっている場合、デバイスはより多くの電力を消費します。
:::

|**センサー**|**説明**|
| - | - |
|温度|<p>オンボード独立温度センサー。</p><p>筐体から分離されているため、温度測定に遅延が生じる場合があります。</p><p>範囲：-20～60℃；精度：± 1℃（最小0.5℃、最大1℃）；分解能：0.1℃</p>|
|光|<p>光センサーは実際のルーメン値を監視するのではなく、暗闇から明るさまでの光の割合を示します。主に破壊防止監視や光感度監視に使用できます。</p><p>範囲：0～100%（0%は暗闇、100%は最も明るい状態）</p>|
|3軸加速度計|加速度の値を設定することで、動作イベントと衝撃イベントがトリガーされます。|

### バッテリー

バッテリー寿命は、アップリンク間隔、センサー使用、LoRa伝送距離、動作温度などの要因に依存します。予測されるバッテリー寿命は、典型的な作業環境（25°C）に基づいており、参考として提供されます。実際のバッテリー寿命は異なる場合があります。

**EU868(1C/SF12)**

|アップロード間隔|1分|5分|60分|1日|
|--|--|--|--|--|
|バッテリー寿命（日）|2.46|11.72|84.68|184.86|

**US915(1C/SF9)**

|アップロード間隔|1分|5分|60分|1日|
|--|--|--|--|--|
|バッテリー寿命（日）|2.89|13.66|92.59|186.83|

## 開始方法

ボタンを3秒間押してデバイスの電源を入れます。上昇メロディーが鳴ると、デバイスが正常に電源オンされたことを示します。

### アプリ経由で接続

- **ステップ1：** `SenseCraft`アプリをダウンロード

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={500} height="auto" /></p>

SenseCraft APPにログインします。

:::tip
サーバーの場所として`Global`を選択してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/global-version.png" alt="pir" width={200} height="auto" /></p>
:::

- **ステップ2：** デバイスを追加

右上の`Add Device`タブをクリックし、デバイスラベルのQRコードをスキャンします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config.png" alt="pir" width={800} height="auto" /></p>

### デバイスの設定

- `User` -> `Device Bluetooth Configuration`ページに移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/config-ppa.png" alt="pir" width={200} height="auto" /></p>

- **ボタンを3回クリック**して設定モードに入ります。デバイス名：**T1000-E xxxx**（MACアドレスの下4桁）。

#### クイック設定

`SenseCAP cloud`でクイックスタートする場合は、`Quick Configuration`を選択できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/quick-config.png" alt="pir" width={800} height="auto" /></p>

お住まいの地域に応じて`Frequency Plan`を設定し、希望する`Uplink Interval`を設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/quick-1.png" alt="pir" width={200} height="auto" /></p>

#### 高度な設定

高度な使用方法については、`Advanced Configuration`を選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/advan-config.png" alt="pir" width={800} height="auto" /></p>

現在のデバイス情報を確認できます。これには`device EUI`、`ハードウェア/ソフトウェアバージョン`、`バッテリー`などが含まれます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/info-dev.png" alt="pir" width={250} height="auto" /></p>

`Settings`に移動してパラメータを設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/setting-page.png" alt="pir" width={600} height="auto" /></p>

- **LoRa設定**

<table>
  <tr>
    <th colspan="1"></th>
    <th colspan="1" valign="top"><b>パラメータ</b></th>
    <th colspan="1" valign="top"><b>説明</b></th>
  </tr>
  <tr>
    <td colspan="1" rowspan="5">プラットフォーム</td>
    <td colspan="1" valign="top">SenseCAP for The Things Network（デフォルト）</td>
    <td colspan="1" valign="top">
      <p>SenseCAP独自のTTNサーバー。SenseCAPゲートウェイとペアリングした場合、すぐに使用可能。</p>
      <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCAP Outdoor Gateway</span></a><br />
      <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCAP Indoor Gateway</span></a>
    </td>
  </tr>
  <tr>
    <td colspan="1" valign="top">SenseCAP for Helium</td>
    <td colspan="1" valign="top">
      <p>SenseCAPのプライベートHeliumコンソール。</p>
      <p>SenseCAP Mate AppとPortalですぐに使用可能。</p>
    </td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Helium</td>
    <td colspan="1" valign="top">パブリックHeliumサーバー</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">The Things Network</td>
    <td colspan="1" valign="top">パブリックTTNサーバー</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Other Platform</td>
    <td colspan="1" valign="top">その他のLoRaWANネットワークサーバー</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">周波数プラン</td>
    <td colspan="1" valign="top">EU868/US915/AU915/KR920/IN865/AS923-1/AS923-2/AS923-3/AS923-4</td>
    <td colspan="1" valign="top">デフォルトはEU868</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">パケットポリシー</td>
    <td colspan="1" valign="top">1C</td>
    <td colspan="1" valign="top">デフォルトで有効</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">LoRaWAN ADR</td>
    <td colspan="1" valign="top">デフォルトで有効</td>
    <td colspan="1" valign="top">デフォルトで有効</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">LoRa設定の復元</td>
    <td colspan="1" valign="top">デフォルトで有効</td>
    <td colspan="1" valign="top">デフォルトで有効</td>
  </tr>
</table>

- **一般設定**

<table>
  <tr>
    <th colspan="1"></th>
    <th colspan="1" valign="top"><b>パラメータ</b></th>
    <th colspan="1" valign="top"><b>説明</b></th>
  </tr>
  <tr>
    <td colspan="1">3軸加速度計</td>
    <td colspan="1" valign="top">有効/無効、デフォルトで無効</td>
    <td colspan="1" valign="top">3軸加速度計のデータをアップロード</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="2">SOSレポートモード</td>
    <td colspan="1" valign="top">シングル（デフォルト）</td>
    <td colspan="1" valign="top">データをアップロードし、SOSイベントを1回レポート。<br/>ブザーアラームが3秒間</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">連続</td>
    <td colspan="1" valign="top">データをアップロードし、SOSイベントを毎分レポート、30回後に終了。<br/>ブザーアラームが30秒間</td>
  </tr>
  <tr>
    <td colspan="1">アップリンク間隔（分）</td>
    <td colspan="1" valign="top">1-10080分、デフォルト60分</td>
    <td colspan="1" valign="top">間隔でデータをアップロード。<br/>頻度が高いほど消費電力が高くなる</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="7">位置情報戦略</td>
    <td colspan="1" valign="top">GNSSのみ（デフォルト）</td>
    <td colspan="1" valign="top">GPS衛星システムのみを使用して位置を決定</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Wi-Fiのみ</td>
    <td colspan="1" valign="top">Wi-Fi APのMACアドレスとRSSI情報をアップロード</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Bluetoothのみ</td>
    <td colspan="1" valign="top">BluetoothビーコンのMACアドレスとRSSI情報をアップロード</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">GNSS + Wi-Fi</td>
    <td colspan="1" valign="top">最初にGPS測位を使用し、GPSが失敗した場合、1つの位置情報サイクルでWi-Fiを使用</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Bluetooth + GNSS</td>
    <td colspan="1" valign="top">最初にBluetooth測位を使用し、Bluetoothが失敗した場合、1つの位置情報サイクルでGNSSを使用</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Bluetooth + Wi-Fi</td>
    <td colspan="1" valign="top">最初にBluetooth測位を使用し、Bluetoothが失敗した場合、1つの位置情報サイクルでWi-Fiを使用</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Bluetooth + Wi-Fi + GNSS</td>
    <td colspan="1" valign="top">Bluetooth、Wi-Fi、GNSSを順番に測位に使用（1つの測位タイプが失敗した後、次の測位タイプに切り替え）</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">GNSS(GPS)</td>
    <td colspan="1" valign="top">GNSS最大スキャン時間（秒）</td>
    <td colspan="1" valign="top">10-120秒、デフォルト30秒</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">iBeaconスキャン</td>
    <td colspan="1" valign="top">BLEスキャンの最大回数</td>
    <td colspan="1" valign="top">3-5、デフォルト3</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">スキャンタイムアウト（秒）</td>
    <td colspan="1" valign="top">3-10秒、デフォルト3秒</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">グループUUID（16進）</td>
    <td colspan="1" valign="top">UUIDフィルターを設定、最大16バイト。<br/>例えば、'01 020304'に設定すると、パターン'0102 03 04 xx xx xx ...'のビーコンをフィルタリング</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Wi-Fiスキャン</td>
    <td colspan="1" valign="top">Wi-Fiスキャンの最大回数</td>
    <td colspan="1" valign="top">3-5、デフォルト3</td>
  </tr>
</table>

### デバイスデータビュー

#### SenseCAP Mate App

アプリで位置を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_view.png" alt="pir" width={800} height="auto" /></p>

#### SenseCAP Portal

SenseCAP Portalの主な機能は、SenseCAPデバイスを管理し、データを保存することです。これはMicrosoftの安全で信頼性の高いクラウドサービスであるAzure上に構築されています。ユーザーはアカウントを申請し、すべてのデバイスをこのアカウントにバインドできます。SenseCAP Portalは、WebポータルとAPIを提供します。WebポータルにはDashboard、Device Management、Data Management、Access Key Managementが含まれます。APIはユーザーのさらなる開発のために公開されています。

- **Dashboard:** Device Overview、Announcement、Scene Data、Data Chartなどを含みます。
- **Device Management:** SenseCAPデバイスを管理します。
- **Data Management:** Data TableとGraphセクションを含むデータを管理し、データを検索する方法を提供します。
- **Subaccount System:** 異なる権限を持つサブアカウントを登録します。
- **Access Key Management:** Access Key（APIサービスにアクセスするため）を管理し、Key Create、Key Update、Key Checkを含みます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### デバイスデータビュー

[SenseCAP Portal](http://sensecap.seeed.cc)にログインしてください

アプリでアカウントを作成済みの場合は、直接ログインできます。

1) アカウント登録を選択し、メール情報を入力して「register」をクリックすると、登録メールがユーザーのメールボックスに送信されます

2) 「SenseCAP…」メールを開き、ジャンプリンクをクリックして、関連情報を入力し、登録を完了します

3) ログイン画面に戻り、ログインを完了します

詳細については[SenseCAP Portal User Guide](https://sensecap-docs.seeed.cc/quickstart.html)を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portaldata1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_view2.png" alt="pir" width={800} height="auto" /></p>

## SenseCAP API

SenseCAP APIは、ユーザーがIoTデバイスとデータを管理するためのものです。HTTPプロトコル、MQTTプロトコル、Websocketプロトコルの3種類のAPIメソッドが含まれています。

- HTTP APIを使用すると、ユーザーはLoRaデバイスを管理し、生データや履歴データを取得できます。
- MQTT APIを使用すると、ユーザーはMQTTプロトコルを通じてセンサーのリアルタイム測定データを購読できます。
- Websocket APIを使用すると、ユーザーはWebsocketプロトコルを通じてセンサーのリアルタイム測定データを取得できます。

詳細については[API User Guide](https://sensecap-docs.seeed.cc/)を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>

## デコーダー

- **[TTN用デコーダー](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/TTN/SenseCAP_T1000E_TTN_Decoder.js)**
- **[Helium用デコーダー](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/Helium/SenseCAP_T1000E_Helium_Decoder.js)**

## リソース

[GitHub](https://github.com/Seeed-Studio/Seeed-Tracker-T1000-E-for-LoRaWAN-dev-board)
