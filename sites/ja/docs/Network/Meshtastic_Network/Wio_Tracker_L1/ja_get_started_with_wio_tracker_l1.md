---
description: Wio Tracker L1 シリーズの使用を開始する
title:  Wio Tracker L1 を使い始める
keywords:
- Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /get_started_with_meshtastic_wio_tracker_l1
sku: 114993648,114993649,114993653,114993654
sidebar_position: 2
last_update:
  date: 12/24/2025
  author: Michelle Huang
---

:::tip
Wio Tracker L1 シリーズは同じハードウェアフレームワークを共有しています。ビデオガイドは L1 Pro 向けですが、L1 シリーズの他のすべての製品にも適用できます。
:::
## ビデオチュートリアル

### パート 1 開封

L1、L1 Lite または L1 E-Ink モデルを初めて使用する場合は、USB 電源に接続した後、電源スイッチを上に持ち上げて電源を入れてください。

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/Wi_YmE76YcY?si=Ad-pUhle5X9QppPR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### パート 2 ファームウェアの書き込み

:::caution note
ファームウェアを更新するために `don't use NRF-OTA` を使用しないでください。デバイスが完全に動作しなくなる可能性があります。
:::

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/hcjai4J1894?si=S_jaEfXVThWXscVJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### パート 3 デバイスの使用方法

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/Q97w2ompPtI?si=yLbAgE4cBbT6NbHS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### 4 方向ジョイスティック
L1 E-Ink ファームウェアは現在、4 方向ジョイスティックをサポートしていません。ジョイスティックを使用したい場合は、他のモデルを購入してください。

#### メニューバー
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/Menu.jpeg" alt="pir" width={600} height="auto" /></p>
メニューバーをサポートしているのは 2.7 ファームウェアのみです。メニューバーを使用したい場合は、[Flash Firmware Tutorial](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#パート-2-ファームウェアの書き込み) に従ってファームウェアを更新してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

#### ブザー

ブザーをオンまたはオフにしたい場合は、まずファームウェアをバージョン `2.7` に `update the firmware` してください。2.7 バージョンのファームウェアのみがメニューバーを備えているためです。
- ブザーをオンにする
Setting (icon shaped like the gear) -> Notification -> Buzzer Action -> Disable
- ブザーをオフにする
Setting (icon shaped like the gear) -> Notification -> Buzzer Action -> All enabled

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
デバイスが以下の状態にあるときは、手動で再起動したり電源を切ったりしないでください。そうしないとデバイスが動作不能になる可能性があります。
1. メッセージ送信プロセスが完了していない
2. 設定中である
:::

### ファームウェアの書き込み

:::caution note
ファームウェアを更新するために `don't use NRF-OTA` を使用しないでください。デバイスが完全に動作しなくなる可能性があります。
:::

[Meshtastic Web Flasher](https://flasher.meshtastic.org/) にアクセスします。

L1、L1 Lite および L1 Pro の場合は、ターゲットデバイスとして `Seeed Wio Tracker L1` を選択し、最新のファームウェアを選んでから `Flash` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

L1 E-Ink の場合は、ターゲットデバイスとして `Seeed Wio Tracker L1 E-Ink` を選択し、最新のファームウェアを選んでから `Flash` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%201.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%202.png" alt="pir" width={800} height="auto" /></p>


デバイスの電源を入れ、`Enter DFU Mode` をクリックします。`Tracker L1` という名前のシリアルポートが表示されるので、それをクリックして接続します。`Tracker L1` という名前のドライバが表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

UF2 ファイルを DFU ドライブにドラッグします。ファイルのダウンロードが完了しデバイスが再起動すると、ファームウェアの書き込みが完了します。

### デバイスの電源を入れる

USB ケーブルを接続してデバイスを起動します。電源スイッチを上に持ち上げて電源を入れてください。

:::tip
ボタンを押してもデバイスが反応しない場合は、まず充電してください。急速充電器は使用しないでください。
:::

### アプリ経由で接続する

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

- Bluetooth パネルでターゲットデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- ディスプレイに表示されるコードを入力し、`OK` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- `+` をクリックし、ターゲットデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- コード（デフォルトコードは `123456`）を入力し、`OK` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

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

    Bluetooth の方法を選択します。ポップアップウィンドウでデバイス ID を選択します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 方法 2: シリアル経由

    シリアルの方法を選択します。デバイスマネージャーを開き、デバイスがどのポートに接続されているかを確認します。ポップアップウィンドウでそのポートを選択します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    デバイスがリストに表示されます。クリックして接続します。接続に成功すると、Web サイト上でデバイスのステータスを直接確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>


### LoRa を設定する

メッシュ通信を開始するには、リージョンを設定する必要があります。この設定はデバイスが使用する周波数帯域を制御し、自分の地域の場所に応じて設定する必要があります。

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**リージョン一覧**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Unset|N/A|N/A|N/A|
|US|United States|902.0 - 928.0|100|30|
|EU_868|European Union 868MHz|869.4 - 869.65|10|27|

より包括的な一覧については、[LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) を参照してください。

:::info
**EU_868** は、1 時間あたり 10% のデューティサイクル制限を順守する必要があり、1 時間のローリングウィンドウに対して毎分計算されます。この制限に達すると、再び許可されるまでデバイスは送信を停止します。
:::

デバイスでLoRaリージョンを設定したので、ニーズに合わせて任意の[LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/)を続けて設定できます。

### GPS の設定

GPS を有効にしてください。より最新の位置情報を取得するために、更新間隔とブロードキャスト間隔を調整できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

iOS の場合は、`Accurate Location` をオンにしてください。そうしないと、位置がずれる可能性があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>


### センサー接続

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

### 画面接続
 - E-Ink スクリーン
  互換性のある E-Ink スクリーンを入手するには[Click here](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html)をクリックします。
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/E-Ink_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>

- OLED スクリーン
互換性のある OLED スクリーンを入手するには[Click here](https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html)をクリックします。現在の OLED ドライバは SSD1306 です。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/OLED_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>


### バーチャルキーボード
<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html" alt="pir" width={600} height="auto" /></p>
バージョン 2.7 のファームウェアではバーチャルキーボードがサポートされました！デバイス上で直接メッセージを入力して、他のデバイスと通信できます。ファームウェアを更新するには、[Flash Firmware Tutorial](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing)に従ってください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

## FAQ

### デバイスがブリックした & ブートローダーのインストール

**説明：**

デバイスが反応せず、LED も点灯せず、App とペアリングできません。独自のファームウェアを書き込んだ後にデバイスが完全に動作しなくなった場合は、ブートローダーの再インストールも試すことができます。

:::danger note
ブートローダーを書き込むときは、ケーブル接続が安定していることを確認し、書き込み処理の途中で**絶対に**取り外さないでください。
:::

- ステップ 1: [Click here to download Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)

- ステップ 2: DFU モードに入る

  RST ボタンをダブルクリックして DFU モードに入ります。"Tracker L1" という名前のディスクが表示されます。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1RstButton.png" alt="pir" width={300} height="auto" /></p>

- ステップ 3: ブートローダーファイルを貼り付ける

  ディスク内のすべてのファイルを、ダウンロードしたブートローダーファイルで上書きします。

- ステップ 4: ファームウェアを書き込む

  上記の手順を完了したら、この[step](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware)に従ってアプリケーションファームウェアを書き込むことができます。[enter the DFUmode manually](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#unable-to-enter-dfu--entering-dfu-mode-manually)が必要になる場合があります。


### DFU に入れない & 手動で DFU モードに入る

デバイスを PC に接続し、`Reset` ボタンを 2 回押します。黄色の LED が点灯したままになり、`Tracker L1` という名前の新しい USB ドライブが PC に表示されます。

### DFU モードの終了

DFU モードを終了するには、`Reset` ボタンを 1 回押します。

 ### デバイスが自動的に電源オフになる

 #### 説明

 - デバイスの電源を入れた後、しばらくすると自動的に電源が切れる、または再起動します。 
 - シリアルポートログはしばらく動作した後、停止します。

 これは、メッセージ送信プロセスが完了していない、設定中であるなど、以下の状態にあるときに手動で強制的に再起動または電源オフしたことが原因の可能性があります。

 #### トラブルシューティング

動画を見るには[click here](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing)をクリックしてください。フラッシュの消去を実行し、その後最新のファームウェアを書き込み直す必要があります。

### 工場出荷時設定へのリセット
デフォルト設定に戻したい場合は、工場出荷時設定へのリセットを行うことができます。工場出荷時設定へのリセットを行う方法は 2 つあります。

- 動画を見るには[click here](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing)をクリックしてください。フラッシュの消去を実行し、その後最新のファームウェアを書き込み直す必要があります。

- App 上の `Factory Reset` ボタンをクリックします。デバイスは自動的に工場出荷時の設定で再起動します。 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>


### 信号品質

- **SNR** は通信リンクの品質を反映します。通常のデバイスは -7 dB 以上で動作します。SNR が -10 dB 未満のデバイスは性能が低いことを示します。

- **RSSI** はデバイスとその周囲の環境の両方によって決まります。通常のデバイスは -110 dBm 以上で動作します。RSSI が -115 dBm 未満のデバイスは性能が低いと見なされます。

      最良の信号効果を得るために、干渉が最小限で、開けていて障害物のない場所でデバイスを使用してください。

### 互換アンテナ

L1 Pro 用のアンテナ交換が必要な場合は、[click here](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html)をクリックして入手してください。

## リソース
- [Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)
- [(V1) 3D printing reference file](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing) 
- [(V2 New Four-way Joystick) 3D printing reference file](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip) 
- [L1 Enclosure Design Challenge](https://www.hackster.io/contests/SeeedMeshtasticDeviceDesign2025/hardware_applications#challengeNav)
- [Outline File](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [TELEC 認証](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/WioL1series-TELEC.pdf)
- [FCC 認証](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [CE 認証](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [消費電力テストおよびバッテリー寿命計算](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
