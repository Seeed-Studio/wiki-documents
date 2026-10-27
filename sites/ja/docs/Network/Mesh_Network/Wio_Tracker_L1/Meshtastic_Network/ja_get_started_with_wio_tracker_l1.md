---
description: Wio Tracker L1 シリーズの使用を開始する
title: Meshtastic を使い始める
keywords:
  - Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /get_started_with_meshtastic_wio_tracker_l1
sku: 114993648,114993649,114993653,114993654
sidebar_position: 2
last_update:
  date: 10/26/2026
  author: Advent Jiang
createdAt: '2025-06-17'
updatedAt: '2026-10-26'
url: https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

:::tip
Wio Tracker L1 シリーズは同じハードウェアフレームワークを共有しています。動画ガイドは L1 Pro 向けですが、L1 シリーズの他のすべての製品にも適用できます。
:::

## ビデオチュートリアル

### パート 1 開封

L1、L1 Lite、L1 E-Ink モデルを初めて使用する場合は、USB 電源に接続した後、電源スイッチを上に持ち上げて電源を入れてください。

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

L1 E-Ink ファームウェアの `latest Alpha firmware` は現在、4 方向ジョイスティックをサポートしています。ジョイスティックを使用したい場合は、[ここをクリック](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#パート-2-ファームウェア書き込み)してファームウェアをアップグレードしてください。 

#### メニューバー

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/Menu.jpeg" alt="pir" width={600} height="auto" /></p>
メニューバーをサポートしているのは 2.7 ファームウェアのみです。メニューバーを使用したい場合は、[Flash Firmware Tutorial](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#パート-2-ファームウェア書き込み) に従ってファームウェアを更新してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

#### ブザー

ブザーをオンまたはオフにしたい場合は、まずファームウェアをバージョン `2.7` に `update the firmware` してください。メニューバーがあるのは 2.7 バージョンのファームウェアのみだからです。

- ブザーをオンにする
Setting（歯車の形をしたアイコン） -> Notification -> Buzzer Action -> Disable
- ブザーをオフにする
Setting（歯車の形をしたアイコン） -> Notification -> Buzzer Action -> All enabled

<div class="table-center">
<iframe width="350" height="450" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer%20_turnonturnoff.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### パート 4 スマートフォン接続

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/OFtUwN3z0tI?si=9zr3j-hLuoj0-CXi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### パート 5 各種ステータス

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/eZa8kfUD2e4?si=3Fe_30obcercIXXO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## はじめに

:::danger note
デバイスが以下の状態にあるときは、手動で再起動したり電源を切ったりしないでください。そうしないとデバイスが故障する可能性があります。

1. メッセージ送信プロセスが完了していない
2. 設定中
:::

### ファームウェアを書き込む

:::caution note
ファームウェアの更新には `don't use NRF-OTA` を使用しないでください。デバイスが完全に動作不能になる可能性があります。
:::

[Meshtastic Web Flasher](https://flasher.meshtastic.org/) にアクセスします。

L1、L1 Lite、L1 Pro の場合は、ターゲットデバイスとして `Seeed Wio Tracker L1` を選択し、最新のファームウェアを選んでから `Flash` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

L1 E-Ink の場合は、ターゲットデバイスとして `Seeed Wio Tracker L1 E-Ink` を選択し、最新のファームウェアを選んでから `Flash` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%201.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%202.png" alt="pir" width={800} height="auto" /></p>

デバイスの電源を入れ、`Enter DFU Mode` をクリックします。`Tracker L1` という名前のシリアルポートが表示されるので、それをクリックして接続します。`Tracker L1` という名前のドライブが表示されるはずです。

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

メッシュ上で通信を開始するには、まずリージョンを設定する必要があります。この設定はデバイスが使用する周波数帯域を制御し、自分がいる地域に合わせて設定する必要があります。

<Tabs>
<TabItem value="ios" label="IOS アプリ">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/configure_LoRa123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-region-new.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**リージョン一覧**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902.0 - 928.0|100|30|
|EU_868|欧州連合 868MHz|869.4 - 869.65|10|27|

より包括的な一覧については、[LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) を参照してください。

:::info
**EU_868** は、1 時間あたり 10% のデューティサイクル制限を順守する必要があり、ローリング 1 時間ベースで毎分計算されます。この制限に達すると、再び許可されるまでデバイスは送信を停止します。
:::

これでデバイスの LoRa リージョンを設定できたので、自分の用途に合わせて任意の [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) を続けて設定できます。

## 詳細設定

### Web サイト経由で接続する

Web サイト上でメッセージを送信し、他のノードと通信したい場合は、デバイスを [Meshtastic Website](https://client.meshtastic.org/messages/broadcast/0) に接続できます。

  ステップ 1: Web サイトを開く

[Click here](https://client.meshtastic.org/messages/broadcast/0) をクリックして Web サイトに移動します。
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  ステップ 2: 新しいデバイスを追加する

    "+ New Connection" をクリックします。 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    接続方法は 2 通りあります。好みの方法を選択できます。

 方法 1: Bluetooth 経由

    bluetooth 方法を選択します。ポップアップウィンドウでデバイス ID を選択します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 方法 2: シリアル経由

    serial 方法を選択します。デバイスマネージャーを開き、デバイスがどのポートに接続されているかを確認します。ポップアップウィンドウでそのポートを選択します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    デバイスがリストに表示されます。クリックして接続します。接続に成功すると、ウェブサイト上でデバイスのステータスを直接確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### GPS の設定

GPS を有効に設定してください。より最新の位置情報を取得するために、更新間隔とブロードキャスト間隔を調整できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

IOS の場合は、`Accurate Location` をオンにしてください。そうしないと、位置がずれる可能性があります。

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

- Telemetry を有効にしてセンサーデータを取得します。OLED 画面にセンサーデータを表示したい場合は、`on screen` を有効にします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/temp_sensor123.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="Android" label="Android">

- Telemetry を有効にしてセンサーデータを取得します。OLED 画面にセンサーデータを表示したい場合は、`on screen` を有効にします

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
<TabItem value="ios" label="IOS アプリ">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/configure_ringtone123.png" alt="pir" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/ringtonex1.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="13" label="ゼルダの伝説：アイテム入手">

```plain
24:d=16,o=5,b=120:g,c6,d6,2g6
```
</TabItem>

<TabItem value="14" label="スーパーマリオ テーマ（ショート）">

```plain
24:d=4,o=5,b=100:16e6,16e6,32p,8e6,16c6,8e6,8g6,8p,8g
```
</TabItem>

<TabItem value="15" label="マリオ コイン">

```plain
24:d=8,o=6,b=200:b,e7
```
</TabItem>

<TabItem value="16" label="Nokia 着信音">

```plain
24:d=4,o=5,b=180:8e6,8d6,f#,g#,8c#6,8b,d,e,8b,8a,c#,e,2a
```
</TabItem>

<TabItem value="17" label="マリオ パワーアップ">

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

### ファームウェア更新の失敗 / OTA 復旧

NRF-OTA ファームウェア更新後に Wio Tracker L1 が反応しなくなった場合は、次のことを試してください。

1. USB データケーブルでデバイスをコンピュータに接続し、Reset ボタンを 2 回押して[手動で DFU モードに入ります](#DFU-モードに入れない--DFU-モードへの手動移行)。
2. UF2 ドライブが表示されたら、[Flash Firmware](#ファームウェアの書き込み) ガイドに従って、適切なアプリケーションファームウェアを再インストールします。
3. それでもデバイスを復旧できず DFU シリアルポートが利用可能な場合は、[デバイスがブリックした場合 & ブートローダーの復旧](#デバイスがブリックした場合--ブートローダーのインストール) に従い、その後アプリケーションファームウェアを再インストールします。

デバイスが DFU モードに入れない、またはコンピュータに認識されない場合は、テクニカルサポートにお問い合わせください。

### デバイスがブリックした場合 & ブートローダーの復旧 {#device-bricked--bootloader-installation}

**説明：**

デバイスが反応せず、LED も点灯せず、アプリとペアリングできません。独自のファームウェアを書き込んだ後にデバイスが完全に動作しなくなった場合は、ブートローダーの再インストールも試すことができます。

ブートローダーは、`adafruit-nrfutil` を使用して USB シリアルポート（Serial DFU）経由で復元します。

:::danger note
書き込み中は、ケーブル接続を安定させ、シリアルポート番号が変わったとしても **絶対に** 取り外さないでください。
:::

**ステップ 1：準備**

- Wio Tracker L1 シリーズデバイス（L1 / L1 Pro）
- 動作確認済みの USB データケーブル（充電専用ケーブルは不可）
- Python 3 と pip がインストールされた Windows、macOS または Linux PC
- ブートローダーパッケージ：[Click here to download Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip) — ZIP を展開しないでください。`adafruit-nrfutil` は ZIP のまま使用します

**ステップ 2：adafruit-nrfutil をインストール**

<Tabs>
<TabItem value="windows" label="Windows">

Python 3 と pip が利用可能か確認します（pip がない場合は、先に `python -m ensurepip --upgrade` を実行します）。

```
python --version
python -m pip --version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/00_python_pip_check.png" alt="Check Python and pip on Windows" width={600} height="auto" /></p>

次にインストールして確認します（このガイドでテストしたバージョンは `0.5.3.post16` です）。

```
python -m pip install --user adafruit-nrfutil
adafruit-nrfutil version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/01_nrfutil_version.png" alt="adafruit-nrfutil version output on Windows" width={600} height="auto" /></p>

</TabItem>

<TabItem value="macos" label="macOS">

```
python3 --version
python3 -m pip install --user adafruit-nrfutil
adafruit-nrfutil version
```

pip がない場合は、先に `python3 -m ensurepip --upgrade` を実行してください。

</TabItem>

<TabItem value="linux" label="Linux">

Ubuntu/Debian では、`adafruit-nrfutil` を pipx でインストールします。これにより、ツールがシステムの Python 環境から分離され、`externally-managed-environment` エラーを回避できます。

```bash
sudo apt update
sudo apt install pipx
pipx install adafruit-nrfutil
pipx ensurepath
```

Fedora では、apt の代わりに `sudo dnf install pipx` を使用します。ターミナルを再起動してから、次を確認します。

```
adafruit-nrfutil version
```

</TabItem>
</Tabs>

:::note
常に `adafruit-nrfutil version` でバージョンを確認してください。`adafruit-nrfutil --version` は使用しないでください。
:::

**ステップ 3：シリアルポートを確認**

デバイスのシリアルポートを確認します — 以下の例は PC によって異なります。

<Tabs>
<TabItem value="windows" label="Windows">

**デバイス マネージャー → ポート (COM と LPT)** を開きます。例：

```
USB Serial Device (COM43)
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/02_normal_com_port.png" alt="Wio Tracker L1 serial port in Windows Device Manager" width={600} height="auto" /></p>

</TabItem>

<TabItem value="macos" label="macOS">

```
ls /dev/cu.*
```

デバイスは `/dev/cu.usbmodemXXXX` として表示されます。

</TabItem>

<TabItem value="linux" label="Linux">

```
ls /dev/ttyACM*
```

デバイスは通常 `/dev/ttyACM0` として表示されます。何も表示されない場合は、`ls /dev/ttyUSB*` も試してください。デバイスを接続する前後の結果を比較して、ポートを特定します。DFU モードに入った後は、ポート番号が変わる可能性があるため、もう一度確認してください。

実際のポートに合わせて `/dev/ttyACM0` を置き換え、ポートのパーミッションを確認します：

```bash
ls -l /dev/ttyACM0
```

Ubuntu/Debian では、シリアルポートは通常 `dialout` グループに属します。`Permission denied` が表示され、ポートが `dialout` に属している場合は、次のようにユーザーをそのグループに追加します：

```bash
sudo usermod -aG dialout "$USER"
```

変更を有効にするには、一度ログアウトしてから再度ログインしてください。他のディストリビューションでは、`ls -l` に表示されるシリアルアクセス用グループを使用し、そのディストリビューションの手順に従ってください。

</TabItem>
</Tabs>

**ステップ 4: ブートローダを書き込む**

ステップ 3 で見つけたポートに置き換えてください：

デバイスに接続しているシリアルモニタやブラウザフラッシャをすべて閉じてください。すでに `Reset` を 2 回押して DFU モードに入っている場合は、現在の DFU ポートを使用し、以下のコマンドから `--touch 1200` を省略します。

<Tabs>
<TabItem value="windows" label="Windows">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p COM43 -b 115200 --singlebank --touch 1200
```

ZIP ファイルがターミナルのカレントフォルダにない場合は、`--package` にそのフルパスを指定します。例: `"C:\path\to\wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip"`。

</TabItem>

<TabItem value="macos" label="macOS">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/cu.usbmodemXXXX -b 115200 --singlebank --touch 1200
```

</TabItem>

<TabItem value="linux" label="Linux">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/ttyACM0 -b 115200 --singlebank --touch 1200
```

</TabItem>
</Tabs>

**ステップ 5: シリアルポートの変更に対応する**

`--touch 1200` は、シリアルポートを 1200 ボーで開閉することで DFU モードを要求します。その後、OS が別のポートを割り当てる場合があり、最初のコマンドが次のようなトレースバックで停止することがあります：

```
Touched serial port COM43
...
FileNotFoundError: could not open port 'COM43'
```

再試行する前に、新しい DFU ポートが現れていないか確認してください。このエラーだけでは、デバイスが DFU モードに入ったことや、ブートローダが正常に書き込まれたことは確認できません。テストした Windows PC では、ポートが `COM43` から `COM45` に変わりました：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/03_dfu_com_port.png" alt="Windows のデバイスマネージャで再列挙後に表示される DFU シリアルポート" width={600} height="auto" /></p>

**USB ケーブルは接続したままにしてください。** 新しいポートを探し（**デバイスマネージャ → ポート (COM と LPT)** を更新するか、`ls /dev/cu.*` / `ls /dev/ttyACM*` を再実行します）、その新しいポートに対して `--touch 1200` なしで再度フラッシュします：

<Tabs>
<TabItem value="windows" label="Windows">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p COM45 -b 115200 --singlebank
```

</TabItem>

<TabItem value="macos" label="macOS">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/cu.usbmodemXXXX -b 115200 --singlebank
```

</TabItem>

<TabItem value="linux" label="Linux">

例えば、新しい DFU ポートが `/dev/ttyACM1` の場合は、次のコマンドを使用します。実際のポートに置き換えてください：

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/ttyACM1 -b 115200 --singlebank
```

</TabItem>
</Tabs>

**ステップ 6: 結果を確認する**

出力の最後が `Device programmed.` で終わっていれば、書き込みは成功しています：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/04_flash_success.png" alt="Device programmed で終わる adafruit-nrfutil の出力" width={600} height="auto" /></p>

その後、PC 上に UF2 ドライブが表示されます（スクリーンショットはテストした Windows PC のものです）。ボリュームラベルはブートローダビルドによって異なります（テストした個体では `XIAO-BOOT` と表示されました）が、これは合否判定の基準ではありません。ドライブ名や `INFO_UF2.TXT` で結果を判断しないでください：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/05_uf2_drive.png" alt="ブートローダ書き込み後に表示される UF2 ドライブ" width={600} height="auto" /></p>

**ステップ 7: アプリケーションファームウェアを再インストールする**

:::warning
ブートローダを復元しても、アプリケーションファームウェアは再インストールされません — 再度ファームウェアを書き込むまで、デバイスには動作するファームウェアがありません。
:::

上記の手順を完了したら、[Flash Firmware](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware) に従ってアプリケーションファームウェアを書き込んでください。

**トラブルシューティング**

- インストール後に `adafruit-nrfutil` が認識されない：Python のユーザースクリプトディレクトリを PATH に追加します（Windows では `Scripts`、macOS ではホームディレクトリ配下の `bin`）。Linux では、`pipx ensurepath` の後にターミナルを開き直してください。
- ポートがビジー / アクセス拒否：シリアルモニタ、Web フラッシャのタブ、Arduino IDE など、そのポートを使用しているものをすべて閉じてください。Linux では、ステップ 3 で説明したようにシリアルポートのパーミッションとグループ所属も確認してください。
- `Touched serial port ...` の後に `FileNotFoundError: could not open port ...` が表示される：新しい DFU ポートが現れていないか確認し、ステップ 5 に従ってください。DFU ポートが現れない場合は、以下の手動 DFU 復旧を試してください。
- DFU モードに入れない：[Unable to enter DFU & Entering DFU Mode Manually](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#unable-to-enter-dfu--entering-dfu-mode-manually) を参照してください。

**手動 DFU 復旧**

ファームウェアが完全に応答しないなどの理由で `--touch 1200` でデバイスを DFU モードにできない場合は、手動で DFU モードに入ります。デバイスを接続し、`Reset` を 2 回押します（黄色の LED が点灯し続けます）。ステップ 3 と同様に DFU シリアルポートを探し、そのポートに対して `--touch 1200` なしでステップ 5 のコマンドを実行します。成功時の見た目はステップ 6 と同じです。

### DFU モードに入れない & 手動で DFU モードに入る

デバイスを PC に接続し、`Reset` ボタンを 2 回押します。黄色の LED が点灯し続け、PC 上に DFU シリアルポートが表示されます。

このモードでブートローダを書き込むには、[Device Bricked & Bootloader Recovery](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#device-bricked--bootloader-installation) に従いますが、`--touch 1200` は省略してください — デバイスはすでに DFU モードに入っています。

### DFU モードの終了

DFU モードを終了するには、`Reset` ボタンを 1 回押します。

### プライマリチャンネルで通信できない

デバイスが近くのノードと通信できない、またはメッセージを送信できない場合は、まず LoRa リージョンとモデムプリセットが周囲のノードと一致しているか確認してください。デフォルトの **PSK** が変更されていないかも確認する必要があります。プライマリチャンネルで PSK が異なると、そのチャンネル上の他のノードと通信できなくなります。

この問題を見つける最も簡単な方法はモバイルアプリを使うことです。アプリを開き、対象デバイスに接続してから、`Settings` -> `Channels` に移動します。プライマリチャンネルを選択し、**PSK** の値を確認します。周囲のノードと異なる場合は、同じ PSK に更新してチャンネル設定を保存してください。

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problems_ios.png" alt="iOS アプリでプライマリチャンネルの PSK を確認する" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problem_and.png" alt="Android アプリでプライマリチャンネルの PSK を確認する" width={900} height="auto" /></p>

</TabItem>
</Tabs>

**解決方法**

どの設定が変更されたか分からない場合は、[Factory Reset](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#factory-reset) ガイドに従って、デバイスをデフォルト設定に復元してください。PSK だけが変更された場合は、`AQ==` に戻してください。

### デバイスが自動的に電源オフになる

#### 説明

- デバイスの電源を入れた後、しばらくすると自動的に電源が切れる、または再起動します。
- シリアルポートログがしばらく動作した後に停止します。

 これは、メッセージ送信処理が完了していない、設定中であるなど、デバイスが次の状態にあるときに、手動で強制的に再起動または電源オフしたことが原因の可能性があります。

#### トラブルシュート

[click here](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) をクリックして動画を確認してください。フラッシュの消去を実行し、その後最新のファームウェアを書き込み直す必要があります。

### Factory Reset

デフォルト設定に戻したい場合は、Factory Reset を実行できます。Factory Reset を行う方法は 2 つあります。

- [click here](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) をクリックして動画を確認してください。フラッシュの消去を実行し、その後最新のファームウェアを書き込み直す必要があります。

- アプリで `Factory Reset` ボタンをクリックします。デバイスは工場出荷時の設定で自動的に再起動します。
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### ダイレクトメッセージが失敗する

#### NodeDB のリセット

NodeDB は、現在の Mesh ネットワークで検出されたノードに関する情報を保存するローカルデータベースです。特定のノードと通信できない状況に遭遇した場合、そのノードに対して NodeDB に古い情報が保存されている可能性があります。更新する必要があります。

アプリを開いて対象デバイスに接続します。**Settings**->**Device**->**Device Config**->**Reset NodeDB** に進みます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/sending_failed123.png" alt="アプリ内のデバイス設定と Reset NodeDB ボタン" width={600} height="auto" /></p>

#### ユーザー情報の交換

各ノードは自分自身のノード情報を定期的に送信し、メッシュ内の他のノードがそれを「見て」「認識」できるようにします。2つのノードが互いに通信できるようにするには、互いのノード情報を交換する必要があります。リスト内の別のノードとプライベートメッセージの送受信ができない場合は、アプリで手動で情報交換を促すことができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Device entry in Settings" width={300} height="auto" /></p>

#### 秘密鍵の再生成

各ノードは公開鍵/秘密鍵ペアを所有しています。暗号化されたプライベートメッセージを交換するには、送信者は受信者の公開鍵でメッセージを暗号化し、その受信者の秘密鍵だけが復号できます。2つのノードは互いの公開鍵を知ることで、プライベートに通信できるようになります。あるノードがプライベートメッセージの送信に繰り返し失敗する場合は、そのノードの秘密鍵を再生成してみてください。再生成後は、他のデバイスのノードリストからそのノードを削除し、再接続して新しい公開鍵を取得できるようにします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Device entry in Settings" width={600} height="auto" /></p>

不具合のあるデバイスを再起動して、設定を有効にしてください。

:::note
鍵を再生成した後は、他のデバイスがそのノードと再接続する必要があります。そのため、他のデバイスのノードリストからそのノードを削除しておくことをお勧めします。
:::

### 信号品質

- **SNR** は通信リンクの品質を反映します。通常のデバイスは -7 dB 以上で動作します。SNR が -10 dB 未満のデバイスは性能が低いことを示します。

- **RSSI** はデバイスとその周囲の環境の両方によって決まります。通常のデバイスは -110 dBm 以上で動作します。RSSI が -115 dBm 未満のデバイスは性能が低いと見なされます。

      最良の信号状態を得るために、開けた障害物の少ない場所で、干渉が最小限となる環境でデバイスを使用してください。

### 対応アンテナ

L1 Pro 用にアンテナの交換が必要な場合は、[click here](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html) から入手できます。

## リソース

- [ブートローダー（Serial DFU パッケージ）](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip)
- [(V1) 3D プリント参照ファイル](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing)
- [(V2 新しい 4 方向ジョイスティック) 3D プリント参照ファイル](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip)
- [L1 エンクロージャーデザインチャレンジ](https://www.hackster.io/contests/SeeedMeshtasticDeviceDesign2025/hardware_applications#challengeNav)
- [外形ファイル](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [TELEC 認証](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/WioL1series-TELEC.pdf)
- [FCC 認証](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [CE 認証](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [消費電力テストおよびバッテリー寿命計算](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)


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

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>