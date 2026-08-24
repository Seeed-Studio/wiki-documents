---
description: Wio Tracker L1 シリーズの使用を開始する
title: Wio Tracker L1 を使い始める
keywords:
  - Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /get_started_with_meshtastic_wio_tracker_l1
sku: 114993648,114993649,114993653,114993654
sidebar_position: 2
last_update:
  date: 07/31/2026
  author: Advent Jiang
createdAt: '2025-06-17'
updatedAt: '2026-08-03'
url: https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

:::tip
Wio Tracker L1 シリーズは同じハードウェアフレームワークを共有しています。ビデオガイドは L1 Pro 向けですが、L1 シリーズの他のすべての製品にも適用できます。
:::

## ビデオチュートリアル

### パート 1 開封

L1、L1 Lite または L1 E-Ink モデルを初めて使用する場合は、USB 電源に接続した後、電源スイッチを上に持ち上げて電源を入れてください。

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/Wi_YmE76YcY?si=Ad-pUhle5X9QppPR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### パート 2 ファームウェア書き込み

:::caution note
ファームウェアの更新には `don't use NRF-OTA` を使用しないでください。デバイスが完全に動作不能になる可能性があります。
:::

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/hcjai4J1894?si=S_jaEfXVThWXscVJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### パート 3 デバイスの使用方法

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/Q97w2ompPtI?si=yLbAgE4cBbT6NbHS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### 4 方向ジョイスティック

L1 E-Ink ファームウェアの `latest Alpha firmware` は現在、4 方向ジョイスティックをサポートしています。ジョイスティックを使用したい場合は、[こちらをクリック](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#パート-2-ファームウェア書き込み)してファームウェアをアップグレードしてください。 

#### メニューバー

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/Menu.jpeg" alt="pir" width={600} height="auto" /></p>
メニューバーをサポートしているのは 2.7 ファームウェアのみです。メニューバーを使用したい場合は、[Flash Firmware Tutorial](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#パート-2-ファームウェア書き込み) に従ってファームウェアを更新してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

#### ブザー

ブザーをオンまたはオフにしたい場合は、まずファームウェアをバージョン `2.7` に `update the firmware` してください。2.7 バージョンのファームウェアのみがメニューバーを備えているためです。

- ブザーをオンにする
Setting（歯車の形をしたアイコン） -> Notification -> Buzzer Action -> Disable
- ブザーをオフにする
Setting（歯車の形をしたアイコン） -> Notification -> Buzzer Action -> All enabled

<div class="table-center">
<iframe width="350" height="450" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer%20_turnonturnoff.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### パート 4 スマートフォンとの接続

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/OFtUwN3z0tI?si=9zr3j-hLuoj0-CXi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### パート 5 さまざまな状態

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/eZa8kfUD2e4?si=3Fe_30obcercIXXO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## はじめに

:::danger note
デバイスが以下の状態にあるときは、手動で再起動したり電源を切ったりしないでください。そうしないとデバイスが故障する可能性があります。

1. メッセージ送信プロセスが完了していない
2. 設定中である
:::

### ファームウェアの書き込み

:::caution note
ファームウェアの更新には `don't use NRF-OTA` を使用しないでください。デバイスが完全に動作不能になる可能性があります。
:::

[Meshtastic Web Flasher](https://flasher.meshtastic.org/) にアクセスします。

L1、L1 Lite および L1 Pro の場合は、ターゲットデバイスとして `Seeed Wio Tracker L1` を選択し、最新のファームウェアを選んでから `Flash` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

L1 E-Ink の場合は、ターゲットデバイスとして `Seeed Wio Tracker L1 E-Ink` を選択し、最新のファームウェアを選んでから `Flash` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%201.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%202.png" alt="pir" width={800} height="auto" /></p>

デバイスの電源を入れ、`Enter DFU Mode` をクリックします。`Tracker L1` という名前のシリアルポートが表示されるので、それをクリックして接続すると、`Tracker L1` という名前のドライブが表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

UF2 ファイルを DFU ドライブにドラッグします。ファイルのコピー完了後、デバイスが再起動するとファームウェアの書き込みが完了します。

### デバイスの電源を入れる

USB ケーブルを接続してデバイスを起動します。電源スイッチを上に持ち上げて電源を入れてください。

:::tip
ボタンを押してもデバイスが反応しない場合は、まず充電してください。急速充電器は使用しないでください。
:::

### アプリ経由で接続する

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS アプリ">

- Bluetooth パネルでターゲットデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/device_select123.jpeg" alt="pir" width={300} height="auto" /></p>

- ディスプレイに表示されているコードを入力し、`OK` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/pairing_code123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">

- `+` をクリックし、ターゲットデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-choose-new.png" alt="pir" width={600} height="auto" /></p>

- コード（デフォルトコードは `123456`）を入力し、`OK` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-click-ok-new.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### LoRa を設定する

メッシュ上で通信を開始するには、まずリージョンを設定する必要があります。この設定はデバイスが使用する周波数帯域を制御し、自分の地域に合わせて設定する必要があります。

<Tabs>
<TabItem value="ios" label="IOS アプリ">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/configure_LoRa123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-region-new.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**リージョン一覧**

|**リージョンコード**|**説明**|**周波数帯域 (MHz)**|**デューティサイクル (%)**|**出力制限 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902.0 - 928.0|100|30|
|EU_868|欧州連合 868MHz|869.4 - 869.65|10|27|

より包括的な一覧については、[LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) を参照してください。

:::info
**EU_868** は、1 時間あたり 10% のデューティサイクル制限を順守する必要があり、1 時間のローリングウィンドウに対して毎分計算されます。この制限に達すると、再び許可されるまでデバイスは送信を停止します。
:::

これでデバイス上の LoRa リージョンを設定できたので、必要に応じて任意の [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) を続けて設定できます。

## 詳細設定

### Web サイト経由で接続する

Web サイト上でメッセージを送信し、他のノードと通信したい場合は、デバイスを [Meshtastic Website](https://client.meshtastic.org/messages/broadcast/0) に接続できます。

  ステップ 1: Web サイトを開く

[ここをクリック](https://client.meshtastic.org/messages/broadcast/0)して Web サイトに移動します。
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  ステップ 2: 新しいデバイスを追加する

    「+ New Connection」をクリックします。 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    接続方法は 2 通りあります。お好みの方法を選択できます。

 方法 1: Bluetooth 経由

    Bluetooth 方法を選択します。ポップアップウィンドウでデバイス ID を選択します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 方法 2: シリアル経由

    シリアル方法を選択します。デバイスマネージャーを開き、デバイスがどのポートに接続されているかを確認します。ポップアップウィンドウでそのポートを選択します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    デバイスがリストに表示されます。クリックして接続します。接続に成功すると、ウェブサイト上でデバイスのステータスを直接確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### GPS の設定

GPS を有効にしてください。より最新の位置情報を取得するために、更新間隔とブロードキャスト間隔を調整できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

iOS の場合は、`Accurate Location` をオンにしてください。そうしないと、位置がずれる可能性があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

### センサー接続

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/SensorConnection.jpg" alt="pir" width={700} height="auto" /></p>

Grove インターフェースを介してデバイスにセンサーを追加できます。以下のセンサーは、デバイス上の Grove インターフェースとの互換性が確認されています。

<table>
  <tr>
    <th colspan="2">センサータイプ</th>
    <th colspan="1">センサーモデル</th>
  </tr>
  <tr>
    <td rowspan="4">環境センサー</td>
    <td>気圧</td>
    <td>BMP085</td>
  </tr>
  <tr>
    <td>温度</td>
    <td>[MCP9808](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html) 、PCT2075</td>
  </tr>
  <tr>
    <td>温度 & 湿度</td>
    <td>[SHT31](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)/SHTC3/[SHT4X](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html)、AHT10</td>
  </tr>
  <tr>
    <td>温度 & 湿度 & 気圧</td>
    <td>[BME280](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)</td>
  </tr>
  <tr>
    <td rowspan="2">その他</td>
    <td>心拍数 & SpO₂</td>
    <td>[MAX30102](https://www.seeedstudio.com/MAXREFDES117-HEART-RATE-AND-PULSE-OXIMETRY-MONITOR-p-2762.html)</td>
  </tr>
  <tr>
    <td>I2C キーボード</td>
    <td>CardKB</td>
  </tr>
</table>

<Tabs>

<TabItem value="ios" label="IOS">

- Telemetry を有効にしてセンサーデータを取得します。センサーデータを OLED 画面に表示したい場合は、`on screen` を有効にします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/temp_sensor123.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="Android" label="Android">

- Telemetry を有効にしてセンサーデータを取得します。センサーデータを OLED 画面に表示したい場合は、`on screen` を有効にします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/TelemetryAndroid.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

`on screen` を有効にすると、OLED にセンサーデータが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Telemetryscreen.jpg" alt="pir" width={800} height="auto" /></p>

### 画面接続

- E-Ink スクリーン
  互換性のある E-Ink スクリーンを入手するには、[Click here](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html) をクリックしてください。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/E-Ink_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>

- OLED スクリーン
[Click here](https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html) をクリックして、互換性のある OLED スクリーンを入手してください。現在の OLED ドライバは SSD1306 です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/OLED_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>

### バーチャルキーボード

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html" alt="pir" width={600} height="auto" /></p>
バージョン 2.7 のファームウェアではバーチャルキーボードがサポートされました！デバイス上で直接メッセージを入力して、他のデバイスと通信できます。ファームウェアを更新するには、[Flash Firmware Tutorial](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) に従ってください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

### 着信音の設定

`Settings` -> `Ringtone Config` に移動し、外部通知に使用したい RTTTL 着信音文字列を入力します。

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/configure_ringtone123.png" alt="pir" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/ringtonex1.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="13" label="ゼルダの伝説：アイテム入手">

```plain
24:d=16,o=5,b=120:g,c6,d6,2g6
```
</TabItem>

<TabItem value="14" label="スーパーマリオのテーマ（ショート）">

```plain
24:d=4,o=5,b=100:16e6,16e6,32p,8e6,16c6,8e6,8g6,8p,8g
```
</TabItem>

<TabItem value="15" label="マリオコイン">

```plain
24:d=8,o=6,b=200:b,e7
```
</TabItem>

<TabItem value="16" label="Nokia 着信音">

```plain
24:d=4,o=5,b=180:8e6,8d6,f#,g#,8c#6,8b,d,e,8b,8a,c#,e,2a
```
</TabItem>

<TabItem value="17" label="マリオパワーアップ">

```plain
powerup:d=16,o=5,b=200:g,a,b,c6,d6,e6,f#6,g6,a6,b6,2c7
```
</TabItem>

<TabItem value="18" label="モールス信号 CQ">

```plain
24:d=16,o=6,b=120:8c,p,c,p,8c,p,c,4p,8c,p,8c,p,c,p,8c,8p
```
</TabItem>

</Tabs>

## FAQ

### デバイスがブリックした場合 & ブートローダーのインストール

**説明：**

デバイスが反応せず、LED も点灯せず、アプリとペアリングできません。独自のファームウェアを書き込んだ後にデバイスが完全に動作しなくなった場合は、ブートローダーを再インストールしてみてください。

:::danger note
ブートローダーを書き込む際は、ケーブル接続が安定していることを確認し、書き込み処理の途中で **絶対に** 取り外さないでください。
:::

- ステップ 1: [Click here to download Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)

- ステップ 2: DFU モードに入る

  RST ボタンをダブルクリックして DFU モードに入ります。"Tracker L1" という名前のディスクが表示されます。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1RstButton.png" alt="pir" width={300} height="auto" /></p>

- ステップ 3: ブートローダーファイルを貼り付ける

  ディスク内のすべてのファイルを、ダウンロードしたブートローダーファイルで上書きします。

- ステップ 4: ファームウェアを書き込む

  上記の手順を完了したら、この[手順](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware)に従ってアプリケーションファームウェアを書き込むことができます。[DFU モードに手動で入る](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#unable-to-enter-dfu--entering-dfu-mode-manually)必要がある場合もあります。

### DFU に入れない & DFU モードへの手動移行

デバイスを PC に接続し、`Reset` ボタンを 2 回押します。黄色の LED が点灯したままになり、`Tracker L1` という名前の新しい USB ドライブが PC に表示されます。

### DFU モードの終了

`Reset` ボタンを 1 回押して DFU モードを終了します。

### プライマリチャンネルで通信できない

デバイスが近くのノードと通信できない、またはメッセージを送信できない場合は、まず LoRa リージョンとモデムプリセットが周囲のノードと一致しているか確認してください。また、デフォルトの **PSK** が変更されていないかも確認する必要があります。プライマリチャンネルで PSK が異なると、そのチャンネル上の他のノードとデバイスが通信できなくなります。

この問題を見つける最も簡単な方法はモバイルアプリを使用することです。アプリを開き、対象デバイスに接続してから、`Settings` -> `Channels` に移動します。プライマリチャンネルを選択し、**PSK** の値を確認します。周囲のノードと異なる場合は、同じ PSK に更新してチャンネル設定を保存してください。

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problems_ios.png" alt="Check primary channel PSK in the iOS app" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problem_and.png" alt="Check primary channel PSK in the Android app" width={900} height="auto" /></p>

</TabItem>
</Tabs>

**解決策**

どの設定が変更されたかわからない場合は、[Factory Reset](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#factory-reset) ガイドに従って、デバイスをデフォルト設定に復元してください。PSK のみが変更された場合は、`AQ==` に戻してください。

### デバイスが自動的に電源オフになる

#### 説明

- デバイスの電源を入れた後、しばらくすると自動的に電源が切れる、または再起動します。
- シリアルポートログがしばらく動作した後に停止します。

 これは、メッセージ送信プロセスが完了していない、設定中であるなど、デバイスが以下の状態にあるときに、手動で強制的に再起動または電源オフしたことが原因の可能性があります。

#### トラブルシューティング

[click here](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) をクリックして動画を確認してください。フラッシュの消去を実行し、その後最新のファームウェアを書き込み直す必要があります。

### Factory Reset

デフォルト設定に戻したい場合は、Factory Reset を実行できます。Factory Reset を行う方法は 2 つあります。

- [click here](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) をクリックして動画を確認してください。フラッシュの消去を実行し、その後最新のファームウェアを書き込み直す必要があります。

- アプリで `Factory Reset` ボタンをクリックします。デバイスは自動的に工場出荷時の設定で再起動します。
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### ダイレクトメッセージ失敗

#### NodeDB リセット

NodeDB は、現在のメッシュネットワーク内で検出されたノードに関する情報を保存するローカルデータベースです。特定のノードと通信できない状況に遭遇した場合、そのノードに対して NodeDB に古い情報が保存されている可能性があります。その場合は更新する必要があります。

アプリを開いて対象デバイスに接続します。**Settings**->**Device**->**Device Config**->**Reset NodeDB** に進みます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/sending_failed123.png" alt="Device settings and Reset NodeDB button in the app" width={600} height="auto" /></p>

#### ユーザー情報の交換

各ノードは定期的に自分自身のノード情報を送信し、メッシュ内の他のノードがそれを「見て」「認識」できるようにします。2 つのノードが互いに通信できるようにするには、互いのノード情報を交換する必要があります。リスト上の別のノードとプライベートメッセージの送受信ができない場合は、アプリで手動で情報交換を促すことができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Device entry in Settings" width={300} height="auto" /></p>

#### 秘密鍵の再生成

2 つのノードが互いに通信できるようにするには、互いの秘密鍵を知っている必要があります。あるノードがプライベートメッセージの送信に失敗し続ける場合は、そのノードの秘密鍵を再生成してみてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Device entry in Settings" width={600} height="auto" /></p>

設定を有効にするため、不具合のあるデバイスを再起動します。

:::note
鍵を再生成した後は、他のデバイスがそのノードに再接続する必要があります。そのため、他のデバイスのノードリストからそのノードを削除しておくことをお勧めします。
:::

### 信号品質

- **SNR** は通信リンクの品質を反映します。通常のデバイスは -7 dB 以上で動作します。SNR が -10 dB 未満のデバイスは性能が低いことを示します。

- **RSSI** はデバイスとその周囲の環境の両方によって決まります。通常のデバイスは -110 dBm 以上で動作します。RSSI が -115 dBm 未満のデバイスは性能が低いと見なされます。

      最良の信号効果を得るために、干渉が最小限で、開けていて障害物のない場所でデバイスを使用してください。

### 互換アンテナ

L1 Pro 用にアンテナの交換が必要な場合は、[こちらをクリック](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html)して入手してください。

## リソース

- [ブートローダー](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)
- [(V1) 3D プリント参照ファイル](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing)
- [(V2 新しい 4 方向ジョイスティック) 3D プリント参照ファイル](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip)
- [L1 エンクロージャーデザインチャレンジ](https://www.hackster.io/contests/SeeedMeshtasticDeviceDesign2025/hardware_applications#challengeNav)
- [外形ファイル](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [TELEC 認証](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/WioL1series-TELEC.pdf)
- [FCC 認証](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [CE 認証](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [消費電力テストとバッテリー寿命計算](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)


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