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
  date: 11/26/2025
  author: Janet
---


<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993591-t1000-e-lorawan.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-LoRaWAN-p-6408.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

T1000-E for LoRaWAN は完全にオープンソースのファームウェアを搭載しています。ユーザーエクスペリエンスを向上させるため、工場出荷時のデバイスにはデモファームウェアがプリインストールされています。ユーザーは初期体験のためにデモファームウェアを探索し、独自のカスタムファームウェアを開発することもできます。カスタム開発の詳細については、[LoRaWAN オープンソースファームウェア](https://wiki.seeedstudio.com/ja/open_source_lorawan/)を参照してください。

:::caution note
ファームウェアをフラッシュする前に、お使いのデバイスが `T1000-E for LoRaWAN` バージョンであることを確認してください。Meshtastic をサポートしていないこのトラッカーモデルに他の Meshtastic ファームウェアをフラッシュしないでください。デバイスが完全に動作しなくなる可能性があります。
:::

**T1000 系列バージョン比較**

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image2_20.png" alt="pir" width={800} height="auto" /></p>

## ハードウェア概要

### 図表

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
|14|P0.13|デジタル I/O|AG3335 用 UART1 TX|
|15|P0.14|デジタル I/O|AG3335 用 UART1 RX|
|16|P0.15|デジタル I/O|AG3335 RTC 割り込み|
|17|P0.16|デジタル I/O|デバッグ用 UART1 TX|
|18|P0.17|デジタル I/O|デバッグ用 UART1 RX|
|19|P0.18|リセット|リセット|
|20|P0.19|デジタル I/O|FLASH 用 QSPI クロック|
|21|P0.20|デジタル I/O|FLASH 用 QSPI CS|
|22|P0.21|デジタル I/O|FLASH 用 QSPI IO0|
|23|P0.22|デジタル I/O|FLASH 用 QSPI IO1|
|24|P0.23|デジタル I/O|FLASH 用 QSPI IO2|
|25|P0.24|デジタル I/O|緑色 LED IO|
|26|P0.25|デジタル I/O|ブザー PWM|
|27|P0.26|デジタル I/O|I2C SDA|
|28|P0.27|デジタル I/O|I2C SCL|
|29|P0.28|<p>デジタル I/O</p><p>アナログ入力</p>|NC|
|30|P0.29|<p>デジタル I/O</p><p>アナログ入力</p>|光センサー ADC 入力|
|31|P0.30|<p>デジタル I/O</p><p>アナログ入力</p>|NC|
|32|P0.31|<p>デジタル I/O</p><p>アナログ入力</p>|温度センサー ADC 入力|
|33|P1.00|デジタル I/O|FLASH 用 QSPI IO3|
|34|P1.01|デジタル I/O|LR1110 DIO9|
|35|P1.02|デジタル I/O|加速度計割り込み|
|36|P1.03|デジタル I/O|充電器状態|
|37|P1.04|デジタル I/O|充電完了|
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
|48|P1.15|デジタル I/O|AG3335 リセット|

## デモファームウェア概要

### 位置情報説明

|**位置情報**|**説明**|
| - | - |
|GNSS|経度と緯度の情報をアップロードします。<br/>（通常、屋内では GPS 信号がないため、位置情報を取得するには屋外でデバイスをテストすることをお勧めします）|
|Wi-Fi|Wi-Fi AP の MAC アドレスと RSSI 情報をアップロードします。|
|Bluetooth|Bluetooth ビーコンの MAC アドレスと RSSI 情報をアップロードします。|

### ボタン

|**ボタン操作**|**説明**|
| - | - |
|3秒間長押し|電源オン/オフ|
|ボタンを3回クリック|Bluetooth のオン/オフ切り替え|-|
|ダブルクリック|SOS アラートのオン/オフ切り替え|
|1回クリック|位置情報/バッテリー/センサーデータのアップロード|

### LED

<table>
  <tr>
    <th colspan="2" valign="top"><b>LED 状態</b></th>
    <th colspan="1" valign="top"><b>説明</b></th>
  </tr>
  <tr>
    <td colspan="1" rowspan="2">赤色 LED</td>
    <td colspan="1" valign="top">点灯</td>
    <td colspan="1" valign="top">充電中</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">点滅</td>
    <td colspan="1" valign="top">充電異常</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="4">緑色 LED</td>
    <td colspan="1" valign="top">点灯</td>
    <td colspan="1" valign="top">
      <p>デバイスが DFU モードです。</p>
      <p>DFU モードを終了するにはデバイスを再起動してください（ボタンを押し続け、充電ケーブルを接続した直後にボタンを離してください）</p>
    </td>
  </tr>
  <tr>
    <td colspan="1" valign="top">
      <p>500ms オン/1秒オフ</p>
    </td>
    <td colspan="1" valign="top">Bluetooth オン</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">呼吸</td>
    <td colspan="1" valign="top">LoRaWAN ネットワークに接続中</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">2秒間高速点滅後消灯</td>
    <td colspan="1" valign="top">LoRaWAN ネットワークに正常に接続</td>
  </tr>
</table>

### センサー機能

SenseCAP T1000 トラッカーには3つのセンサーが搭載されています：温度センサー、光センサー、3軸加速度計。
これらのセンサーを有効または無効にすることができます：

:::note
センサーがオンになっている場合、デバイスはより多くの電力を消費します。
:::

|**センサー**|**説明**|
| - | - |
|温度|<p>オンボード独立温度センサー。</p><p>シェルから分離されているため、温度測定に遅延が生じる場合があります。</p><p>範囲：-20 から 60℃；精度：± 1℃（最小 0.5℃、最大 1℃）；分解能：0.1℃</p>|
|光|<p>光センサーは実際のルーメン値を監視するのではなく、暗闇から明るさまでの光の割合です。主に破壊防止監視や光感知監視に使用できます。</p><p>範囲：0 から 100%（0% は暗闇、100% は最も明るい）</p>|
|3軸加速度計|加速度の値を設定することで、動作イベントと衝撃イベントがトリガーされます。|

### バッテリー

バッテリー寿命は、アップリンク間隔、センサー使用、LoRa 送信距離、動作温度などの要因によって異なります。予測されるバッテリー寿命は、典型的な作業環境（25°C）に基づいており、参考として提供されています。実際のバッテリー寿命は異なる場合があります。

**EU868(1C/SF12)**

|アップロード間隔|1分|5分|60分|1日|
|--|--|--|--|--|
|バッテリー寿命（日）|2.46|11.72|84.68|184.86|

**US915(1C/SF9)**

|アップロード間隔|1分|5分|60分|1日|
|--|--|--|--|--|
|バッテリー寿命（日）|2.89|13.66|92.59|186.83|

## 使用開始

ボタンを3秒間押してデバイスの電源を入れます。上昇するメロディーがデバイスが正常に電源オンされたことを示します。

### アプリ経由で接続

- **ステップ 1：** `SenseCraft` アプリをダウンロード

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={500} height="auto" /></p>

SenseCraft アプリにログインします。

:::tip
サーバーの場所として `Global` を選択してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/global-version.png" alt="pir" width={200} height="auto" /></p>
:::

- **ステップ 2：** デバイスを追加

右上の `Add Device` タブをクリックし、デバイスラベルの QR コードをスキャンします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config.png" alt="pir" width={800} height="auto" /></p>

### デバイスの設定

- `User` -> `Device Bluetooth Configuration` ページに移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/config-ppa.png" alt="pir" width={200} height="auto" /></p>

- **ボタンを3回クリック**して設定モードに入ります。デバイス名：**T1000-E xxxx**（MAC アドレスの下4桁）。

#### クイック設定

`SenseCAP クラウド`でのクイックスタートには、`Quick Configuration` を選択できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/quick-config.png" alt="pir" width={800} height="auto" /></p>

お住まいの地域に応じて `Frequency Plan` を設定し、希望する `Uplink Interval` を設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/quick-1.png" alt="pir" width={200} height="auto" /></p>

#### 高度な設定

高度な使用については、`Advanced Configuration` を選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/advan-config.png" alt="pir" width={800} height="auto" /></p>

現在のデバイス情報を確認できます。これには `device EUI`、`ハードウェア/ソフトウェアバージョン`、`バッテリー` などが含まれます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/info-dev.png" alt="pir" width={250} height="auto" /></p>

`Settings` に移動してパラメータを設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/setting-page.png" alt="pir" width={600} height="auto" /></p>

- **LoRa セットアップ**

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
      <p>SenseCAP の専用 TTN サーバー。SenseCAP ゲートウェイとペアリングすることで、すぐに使用できます。</p>
      <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCAP 屋外ゲートウェイ</span></a><br />
      <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCAP 屋内ゲートウェイ</span></a>
    </td>
  </tr>
  <tr>
    <td colspan="1" valign="top">SenseCAP for Helium</td>
    <td colspan="1" valign="top">
      <p>SenseCAP のプライベート Helium コンソール。</p>
      <p>SenseCAP Mate App と Portal ですぐに使用できます。</p>
    </td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Helium</td>
    <td colspan="1" valign="top">パブリック Helium サーバー</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">The Things Network</td>
    <td colspan="1" valign="top">パブリック TTN サーバー</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">その他のプラットフォーム</td>
    <td colspan="1" valign="top">その他の LoRaWAN ネットワークサーバー</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">周波数プラン</td>
    <td colspan="1" valign="top">EU868/US915/AU915/KR920/IN865/AS923-1/AS923-2/AS923-3/AS923-4</td>
    <td colspan="1" valign="top">デフォルトは EU868</td>
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
    <td colspan="1" valign="top">LoRa 設定の復元</td>
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
    <td colspan="1" valign="top">有効/無効、デフォルトは無効</td>
    <td colspan="1" valign="top">3軸加速度計のデータをアップロード</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="2">SOS レポートモード</td>
    <td colspan="1" valign="top">単発（デフォルト）</td>
    <td colspan="1" valign="top">データをアップロードし、SOS イベントを一度報告。<br/>ブザーアラームが3秒間</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">連続</td>
    <td colspan="1" valign="top">毎分データをアップロードし、SOS イベントを報告、30回後に終了。<br/>ブザーアラームが30秒間</td>
  </tr>
  <tr>
    <td colspan="1">アップリンク間隔（分）</td>
    <td colspan="1" valign="top">1-10080分、デフォルトは60分</td>
    <td colspan="1" valign="top">間隔でデータをアップロード。<br/>頻度が高いほど、消費電力が高くなります</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="7">位置情報戦略</td>
    <td colspan="1" valign="top">GNSS のみ（デフォルト）</td>
    <td colspan="1" valign="top">GPS 衛星システムのみを使用して位置を決定</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Wi-Fi のみ</td>
    <td colspan="1" valign="top">Wi-Fi AP の MAC アドレスと RSSI 情報をアップロード</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Bluetooth のみ</td>
    <td colspan="1" valign="top">Bluetooth ビーコンの MAC アドレスと RSSI 情報をアップロード</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">GNSS + Wi-Fi</td>
    <td colspan="1" valign="top">まず GPS 測位を使用し、GPS が失敗した場合、1つの位置情報サイクルで Wi-Fi を使用</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Bluetooth + GNSS</td>
    <td colspan="1" valign="top">まず Bluetooth 測位を使用し、Bluetooth が失敗した場合、1つの位置情報サイクルで GNSS を使用</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Bluetooth + Wi-Fi</td>
    <td colspan="1" valign="top">まず Bluetooth 測位を使用し、Bluetooth が失敗した場合、1つの位置情報サイクルで Wi-Fi を使用</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Bluetooth + Wi-Fi + GNSS</td>
    <td colspan="1" valign="top">Bluetooth、Wi-Fi、GNSS を順番に測位に使用（1つの測位タイプが失敗した後、次のタイプの測位に切り替え）</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">GNSS（GPS）</td>
    <td colspan="1" valign="top">GNSS 最大スキャン時間（秒）</td>
    <td colspan="1" valign="top">10-120秒、デフォルトは30秒</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">iBeacon スキャン</td>
    <td colspan="1" valign="top">BLE スキャンの最大回数</td>
    <td colspan="1" valign="top">3-5、デフォルトは3</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">スキャンタイムアウト（秒）</td>
    <td colspan="1" valign="top">3-10秒、デフォルトは3秒</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">グループ UUID（16進）</td>
    <td colspan="1" valign="top">UUID フィルターを設定、最大16バイト。<br/>例えば、'01 020304' に設定すると、パターン '0102 03 04 xx xx xx ...' のビーコンをフィルタリングします</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Wi-Fi スキャン</td>
    <td colspan="1" valign="top">Wi-Fi スキャンの最大回数</td>
    <td colspan="1" valign="top">3-5、デフォルトは3</td>
  </tr>
</table>

### デバイスデータビュー

#### SenseCAP Mate App

アプリで位置情報を確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_view.png" alt="pir" width={800} height="auto" /></p>

#### SenseCAP Portal

SenseCAP Portal の主な機能は、SenseCAP デバイスを管理し、データを保存することです。Microsoft の安全で信頼性の高いクラウドサービスである Azure 上に構築されています。ユーザーはアカウントを申請し、すべてのデバイスをこのアカウントにバインドできます。SenseCAP Portal は Web ポータルと API を提供します。Web ポータルには、ダッシュボード、デバイス管理、データ管理、アクセスキー管理が含まれます。API はさらなる開発のためにユーザーに公開されています。

- **ダッシュボード：** デバイス概要、お知らせ、シーンデータ、データチャートなどを含みます。
- **デバイス管理：** SenseCAP デバイスを管理します。
- **データ管理：** データテーブルとグラフセクションを含むデータを管理し、データを検索する方法を提供します。
- **サブアカウントシステム：** 異なる権限を持つサブアカウントを登録します。
- **アクセスキー管理：** アクセスキー（API サービスにアクセスするため）を管理し、キー作成、キー更新、キー確認を含みます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### デバイスデータビュー

[SenseCAP Portal](http://sensecap.seeed.cc) にログインします

アプリでアカウントを作成している場合は、直接ログインできます。

1) アカウント登録を選択し、メール情報を入力して「register」をクリックすると、登録メールがユーザーのメールボックスに送信されます

2) 「SenseCAP…」メールを開き、ジャンプリンクをクリックし、関連情報を入力して登録を完了します

3) ログイン画面に戻り、ログインを完了します

詳細については、[SenseCAP Portal ユーザーガイド](https://sensecap-docs.seeed.cc/quickstart.html)をご確認ください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portaldata1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_view2.png" alt="pir" width={800} height="auto" /></p>

## SenseCAP API

SenseCAP API は、ユーザーが IoT デバイスとデータを管理するためのものです。HTTP プロトコル、MQTT プロトコル、Websocket プロトコルの3種類の API メソッドが含まれています。

- HTTP API を使用すると、ユーザーは LoRa デバイスを管理し、生データや履歴データを取得できます。
- MQTT API を使用すると、ユーザーは MQTT プロトコルを通じてセンサーのリアルタイム測定データを購読できます。
- Websocket API を使用すると、ユーザーは Websocket プロトコルを通じてセンサーのリアルタイム測定データを取得できます。

詳細については、[API ユーザーガイド](https://sensecap-docs.seeed.cc/)をご確認ください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>

## デコーダー

- **[TTN 用デコーダー](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/TTN/SenseCAP_T1000E_TTN_Decoder.js)**
- **[Helium 用デコーダー](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/Helium/SenseCAP_T1000E_Helium_Decoder.js)**

## リソース

[GitHub](https://github.com/Seeed-Studio/Seeed-Tracker-T1000-E-for-LoRaWAN-dev-board)
