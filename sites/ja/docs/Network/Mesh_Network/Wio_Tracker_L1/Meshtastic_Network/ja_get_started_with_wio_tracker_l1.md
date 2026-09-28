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
  date: 09/03/2026
  author: Advent Jiang
createdAt: '2025-06-17'
updatedAt: '2026-09-21'
url: https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

:::tip
Wio Tracker L1 シリーズは同じハードウェアフレームワークを共有しています。動画ガイドは L1 Pro 向けですが、L1 シリーズの他のすべての製品にも適用できます。
:::

## ビデオチュートリアル

### パート 1 開封

L1、L1 Lite または L1 E-Ink モデルを初めて使用する場合は、USB 電源に接続した後、電源スイッチを上に持ち上げて電源を入れてください。

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/Wi_YmE76YcY?si=Ad-pUhle5X9QppPR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### パート 2 ファームウェア書き込み

:::caution note
ファームウェアを更新する際は、`don't use NRF-OTA` を使用しないでください。デバイスが完全に動作不能になる可能性があります。
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

ブザーをオンまたはオフにしたい場合は、まずファームウェアをバージョン `2.7` に `update the firmware` してください。メニューバーがあるのは 2.7 バージョンのファームウェアのみです。

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

### パート 5 さまざまな状態

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
ファームウェアを更新する際は、`don't use NRF-OTA` を使用しないでください。デバイスが完全に動作不能になる可能性があります。
:::

[Meshtastic Web Flasher](https://flasher.meshtastic.org/) にアクセスします。

L1、L1 Lite および L1 Pro の場合は、ターゲットデバイスとして `Seeed Wio Tracker L1` を選択し、最新のファームウェアを選んでから `Flash` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

L1 E-Ink の場合は、ターゲットデバイスとして `Seeed Wio Tracker L1 E-Ink` を選択し、最新のファームウェアを選んでから `Flash` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%201.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%202.png" alt="pir" width={800} height="auto" /></p>

デバイスの電源を入れ、`Enter DFU Mode` をクリックします。`Tracker L1` という名前のシリアルポートが表示されるので、それをクリックして接続します。`Tracker L1` という名前のドライブが表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

UF2 ファイルを DFU ドライブにドラッグします。ファイルのコピーが完了し、デバイスが再起動すると、ファームウェアの書き込みが完了します。

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

メッシュ上で通信を開始するには、リージョンを設定する必要があります。この設定はデバイスが使用する周波数帯域を制御し、お住まいの地域に応じて設定する必要があります。

<Tabs>
<TabItem value="ios" label="IOS アプリ">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/configure_LoRa123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-region-new.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**リージョン一覧**

|**リージョンコード**|**説明**|**周波数範囲 (MHz)**|**デューティサイクル (%)**|**出力制限 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902.0 - 928.0|100|30|
|EU_868|欧州連合 868MHz|869.4 - 869.65|10|27|

より包括的な一覧については、[LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) を参照してください。

:::info
**EU_868** は、1 時間あたり 10% のデューティサイクル制限を順守する必要があり、1 時間のローリングウィンドウに対して毎分計算されます。この制限に達すると、再び許可されるまでデバイスは送信を停止します。
:::

デバイスで LoRa リージョンを設定したので、必要に応じて任意の [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) を続けて設定できます。

## 詳細設定

### Web サイト経由で接続する

Web サイト上でメッセージを送信し、他のノードと通信したい場合は、デバイスを [Meshtastic Website](https://client.meshtastic.org/messages/broadcast/0) に接続できます。

  ステップ 1: Web サイトを開く

[Click here](https://client.meshtastic.org/messages/broadcast/0) をクリックして Web サイトに移動します。
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  ステップ 2: 新しいデバイスを追加する

    "+ New Connection" をクリックします。 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    接続方法は 2 通りあります。お好みの方法を選択できます。

 方法 1: Bluetooth 経由

    bluetooth 方法を選択します。ポップアップウィンドウでデバイス ID を選択します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 方法 2: シリアル経由

    serial 方法を選択します。デバイスマネージャーを開き、デバイスがどのポートに接続されているかを確認します。ポップアップウィンドウでそのポートを選択します。
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

- Telemetry を有効にしてセンサーデータを取得します。OLED 画面にセンサーデータを表示したい場合は、`on screen` を有効にしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/temp_sensor123.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="Android" label="Android">

- Telemetry を有効にしてセンサーデータを取得します。OLED 画面にセンサーデータを表示したい場合は、`on screen` を有効にしてください。

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
[Click here](https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html) をクリックして、互換性のある OLED スクリーンを入手してください。現在の OLED ドライバーは SSD1306 です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/OLED_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>

### バーチャルキーボード

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html" alt="pir" width={600} height="auto" /></p>
バージョン 2.7 のファームウェアではバーチャルキーボードがサポートされました！デバイス上で直接メッセージを入力し、他のデバイスと通信できます。[Flash Firmware Tutorial](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) に従ってファームウェアを更新してください。
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

### デバイスがブリックした場合 & ブートローダーの復旧 {#device-bricked--bootloader-installation}

**説明：**

デバイスが反応せず、LED も点灯せず、アプリとペアリングできません。独自のファームウェアを書き込んだ後にデバイスが完全に動作しなくなった場合は、ブートローダーの再インストールも試すことができます。

ブートローダーは、`adafruit-nrfutil` を使用して USB シリアルポート（Serial DFU）経由で復元します。

:::danger note
書き込み中はケーブル接続を安定させ、シリアルポート番号が変わったとしても **絶対に** ケーブルを抜かないでください。
:::

**ステップ 1: 準備**

- Wio Tracker L1 シリーズデバイス（L1 / L1 Pro）
- 動作確認済みの USB データケーブル（充電専用ケーブルは不可）
- Python 3 と pip がインストールされた Windows、macOS または Linux PC
- ブートローダーパッケージ：[Click here to download Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip) — ZIP を展開しないでください。`adafruit-nrfutil` は ZIP のまま使用します。

**ステップ 2: adafruit-nrfutil をインストール**

<Tabs>
<TabItem value="windows" label="Windows">

Python 3 と pip が利用可能か確認します（pip がない場合は、まず `python -m ensurepip --upgrade` を実行してください）:

```
python --version
python -m pip --version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/00_python_pip_check.png" alt="Check Python and pip on Windows" width={600} height="auto" /></p>

次にインストールして確認します（このガイドでテストしたバージョンは `0.5.3.post16` です）:

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

pip がない場合は、まず `python3 -m ensurepip --upgrade` を実行してください。

</TabItem>

<TabItem value="linux" label="Linux">

Ubuntu/Debian では、`adafruit-nrfutil` を pipx でインストールします。これにより、ツールがシステムの Python 環境から分離され、`externally-managed-environment` エラーを回避できます。

```bash
sudo apt update
sudo apt install pipx
pipx install adafruit-nrfutil
pipx ensurepath
```

Fedora では、apt の代わりに `sudo dnf install pipx` を使用します。ターミナルを再起動し、次に確認します。

```
adafruit-nrfutil version
```

</TabItem>
</Tabs>

:::note
常に `adafruit-nrfutil version` でバージョンを確認してください。`adafruit-nrfutil --version` は使用しないでください。
:::

**ステップ 3: シリアルポートを確認**

PC によって異なるため、デバイスのシリアルポートを確認します。

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

デバイスは通常 `/dev/ttyACM0` として表示されます。何も表示されない場合は、`ls /dev/ttyUSB*` も試してください。デバイス接続前後の結果を比較してポートを特定します。DFU モードに入った後はポート番号が変わる可能性があるため、再度確認してください。

実際のポート名で `/dev/ttyACM0` を置き換えて、ポートのパーミッションを確認します。

```bash
ls -l /dev/ttyACM0
```

Ubuntu/Debian では、シリアルポートは通常 `dialout` グループに属します。`Permission denied` が表示され、ポートが `dialout` に属している場合は、次のようにユーザーをそのグループに追加します。

```bash
sudo usermod -aG dialout "$USER"
```

変更を有効にするには、一度ログアウトしてから再度ログインしてください。他のディストリビューションでは、`ls -l` に表示されるシリアルアクセス用グループを使用し、そのディストリビューションの手順に従ってください。

</TabItem>
</Tabs>

**ステップ4：ブートローダーを書き込む**

ステップ3で確認したポートに置き換えてください：

デバイスに接続されているシリアルモニタやブラウザフラッシャをすべて閉じます。すでに `Reset` をダブルクリックしてDFUモードに入っている場合は、現在のDFUポートを使用し、以下のコマンドから `--touch 1200` を省略してください。

<Tabs>
<TabItem value="windows" label="Windows">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p COM43 -b 115200 --singlebank --touch 1200
```

ZIPファイルがターミナルのカレントフォルダにない場合は、`--package` にそのフルパスを指定します（例：`"C:\path\to\wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip"`）。

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

**ステップ5：シリアルポートの変更に対応する**

`--touch 1200` は、シリアルポートを1200ボーで開閉することでDFUモードを要求します。その後、OSが別のポートを割り当てる場合があり、最初のコマンドが次のようなトレースバックで停止することがあります：

```
Touched serial port COM43
...
FileNotFoundError: could not open port 'COM43'
```

再試行する前に、新しいDFUポートが現れていないか確認してください。このエラーだけでは、デバイスがDFUモードに入ったことや、ブートローダーが正常に書き込まれたことは確認できません。テストしたWindows PCでは、ポートは `COM43` から `COM45` に変わりました：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/03_dfu_com_port.png" alt="Windows デバイスマネージャーで再列挙後の DFU シリアルポート" width={600} height="auto" /></p>

**USBケーブルは接続したままにしてください。** 新しいポートを探し（**デバイス マネージャー → ポート (COM と LPT)** を更新するか、`ls /dev/cu.*` / `ls /dev/ttyACM*` を再実行します）、その新しいポートで `--touch 1200` なしでもう一度フラッシュします：

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

たとえば、新しいDFUポートが `/dev/ttyACM1` の場合は、次のコマンドを使用します。実際のポートに置き換えてください：

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/ttyACM1 -b 115200 --singlebank
```

</TabItem>
</Tabs>

**ステップ6：結果を確認する**

出力の末尾が `Device programmed.` で終わっていれば、書き込みは成功しています：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/04_flash_success.png" alt="末尾が Device programmed で終わる adafruit-nrfutil の出力" width={600} height="auto" /></p>

その後、PC上にUF2ドライブが表示されます（テストしたWindows PCのスクリーンショット）。ボリュームラベルはブートローダービルドによって異なり、テストしたユニットでは `XIAO-BOOT` と表示されました。これは合否判定の基準ではなく、ドライブ名や `INFO_UF2.TXT` で結果を判断しないでください：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/05_uf2_drive.png" alt="ブートローダー書き込み後に表示される UF2 ドライブ" width={600} height="auto" /></p>

**ステップ7：アプリケーションファームウェアを再インストールする**

:::warning
ブートローダーを復元してもアプリケーションファームウェアは再インストールされません — 再度ファームウェアを書き込むまで、デバイスには動作するファームウェアがありません。
:::

上記の手順を完了したら、[Flash Firmware](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware) に従ってアプリケーションファームウェアを書き込んでください。

**トラブルシューティング**

- インストール後に `adafruit-nrfutil` が認識されない：PythonユーザースクリプトディレクトリをPATHに追加します（Windowsでは `Scripts`、macOSではホームディレクトリ配下の `bin`）。Linuxでは、`pipx ensurepath` の後にターミナルを再度開きます。
- ポートがビジー / アクセス拒否：シリアルモニタ、Webフラッシャのタブ、Arduino IDE、その他ポートを占有しているものを閉じてください。Linuxでは、ステップ3で説明したようにシリアルポートのパーミッションとグループメンバーシップも確認します。
- `Touched serial port ...` の後に `FileNotFoundError: could not open port ...`：新しいDFUポートが現れていないか確認し、ステップ5に従ってください。DFUポートが現れない場合は、以下の手動DFU復旧を試してください。
- DFUモードに入れない：[Unable to enter DFU & Entering DFU Mode Manually](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#unable-to-enter-dfu--entering-dfu-mode-manually) を参照してください。

**手動DFU復旧**

ファームウェアが完全に応答しないなどの理由で `--touch 1200` でデバイスをDFUモードにできない場合は、手動でDFUモードに入ります：デバイスを接続し、`Reset` をダブルクリックします（黄色LEDが点灯し続けます）。ステップ3と同様にDFUシリアルポートを探し、そのポートで `--touch 1200` なしのステップ5のコマンドを実行します。成功時の見え方はステップ6と同じです。

### DFUモードに入れない & DFUモードへの手動移行

デバイスをPCに接続し、`Reset` ボタンをダブルクリックします — 黄色LEDが点灯し続け、PC上にDFUシリアルポートが現れます。

このモードでブートローダーを書き込むには、[Device Bricked & Bootloader Recovery](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#device-bricked--bootloader-installation) に従いますが、`--touch 1200` は省略します — デバイスはすでにDFUモードにあります。

### DFUモードの終了

DFUモードを終了するには、`Reset` ボタンを1回押します。

### プライマリチャンネルで通信できない

デバイスが近くのノードと通信できない、またはメッセージを送信できない場合は、まずLoRaリージョンとモデムプリセットが周囲のノードと一致しているか確認してください。また、デフォルトの **PSK** が変更されていないかも確認する必要があります。プライマリチャンネルでPSKが異なると、そのチャンネル上の他のノードと通信できなくなります。

この問題を見つける最も簡単な方法はモバイルアプリを使うことです。アプリを開き、対象デバイスに接続してから、`Settings` -> `Channels` に移動します。プライマリチャンネルを選択し、**PSK** の値を確認します。周囲のノードと異なる場合は、同じPSKに更新してチャンネル設定を保存してください。

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problems_ios.png" alt="iOS アプリでプライマリチャンネルの PSK を確認する" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problem_and.png" alt="Android アプリでプライマリチャンネルの PSK を確認する" width={900} height="auto" /></p>

</TabItem>
</Tabs>

**解決策**

どの設定が変更されたか分からない場合は、[Factory Reset](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#factory-reset) ガイドに従ってデバイスをデフォルト設定に復元してください。PSKだけが変更された場合は、`AQ==` に戻してください。

### デバイスが自動的に電源オフになる

#### 説明

- デバイスの電源を入れた後、しばらくすると自動的に電源が切れる、または再起動します。
- シリアルポートログはしばらく動作した後、停止します。

 これは、メッセージ送信プロセスが完了していない、設定中である、などの状態のときに、手動で強制的に再起動または電源オフしたことが原因の可能性があります。

#### トラブルシュート

ビデオを見るには[click here](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) をクリックしてください。フラッシュの消去を実行し、その後最新のファームウェアを書き込み直す必要があります。

### 工場出荷時リセット

デフォルト設定に戻したい場合は、工場出荷時リセットを行うことができます。工場出荷時リセットを行う方法は2つあります。

- ビデオを見るには[click here](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) をクリックしてください。フラッシュの消去を実行し、その後最新のファームウェアを書き込み直す必要があります。

- アプリで `Factory Reset` ボタンをクリックします。デバイスは工場出荷時の設定で自動的に再起動します。
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### ダイレクトメッセージの失敗

#### NodeDB のリセット

NodeDB は、現在のメッシュネットワークで検出されたノードに関する情報を保存するローカルデータベースです。特定のノードと通信できない状況に遭遇した場合、そのノードに対してNodeDBが古い情報を保持している可能性があります。更新する必要があります。

アプリを開き、対象デバイスに接続します。**Settings**->**Device**->**Device Config**->**Reset NodeDB** に進みます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/sending_failed123.png" alt="アプリ内のデバイス設定と Reset NodeDB ボタン" width={600} height="auto" /></p>

#### ユーザー情報の交換

各ノードは定期的に自分自身のノード情報を送信し、メッシュ内の他のノードがそれを「見て」「認識」できるようにします。2つのノードが互いに通信できるようになるには、お互いのノード情報を交換する必要があります。リスト上の別のノードとプライベートメッセージを送受信できない場合は、アプリで手動で情報交換を促すことができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="設定内のデバイス項目" width={300} height="auto" /></p>

#### 秘密鍵の再生成

各ノードは公開鍵/秘密鍵ペアを持っています。暗号化されたプライベートメッセージを交換する際、送信者は受信者の公開鍵でメッセージを暗号化し、その受信者の秘密鍵だけが復号できます。したがって、2つのノードは互いの公開鍵を知っていればプライベートに通信できます。あるノードがプライベートメッセージ送信に失敗し続ける場合は、そのノードの秘密鍵を再生成してみてください。再生成後は、他のデバイスのノードリストからそのノードを削除し、再接続して新しい公開鍵を取得できるようにします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Device entry in Settings" width={600} height="auto" /></p>

不具合のあるデバイスを再起動して、設定を有効にします。

:::note
キーを再生成した後は、他のデバイスはノードへの再接続が必要になります。そのため、他のデバイスのノード一覧から該当ノードを削除しておくことをおすすめします。
:::

### 信号品質

- **SNR** は通信リンクの品質を表します。通常のデバイスは -7 dB 以上で動作します。SNR が -10 dB 未満のデバイスは性能が低いことを示します。

- **RSSI** はデバイスとその周囲の環境の両方によって決まります。通常のデバイスは -110 dBm 以上で動作します。RSSI が -115 dBm 未満のデバイスは性能が低いと見なされます。

      最良の信号状態を得るために、干渉が最小限で、開けていて遮蔽物のない場所でデバイスを使用してください。

### 対応アンテナ

L1 Pro 用のアンテナ交換が必要な場合は、[click here](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html) から入手できます。

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