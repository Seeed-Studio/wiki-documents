---
description: Wio Tracker L1 シリーズの使用開始
title:  Wio Tracker L1 の使用開始
keywords:
- Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /ja/get_started_with_meshtastic_wio_tracker_l1
sidebar_position: 2
last_update:
  date: 12/24/2025
  author: Michelle Huang
---

:::tip
Wio Tracker L1 シリーズは同じハードウェアフレームワークを共有しています。ビデオガイドは L1 Pro 向けでしたが、L1 シリーズの他のすべての製品にも適用できます。
:::
## ビデオチュートリアル

### パート 1 開封

L1、L1 Lite、または L1 E-Ink モデルを初めて使用する際は、USB 電源に接続した後、電源スイッチを上に持ち上げて電源を入れてください。

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/Wi_YmE76YcY?si=Ad-pUhle5X9QppPR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### パート 2 ファームウェアフラッシュ

:::caution note
ファームウェアの更新に `NRF-OTA を使用しないでください`。デバイスが完全に動作しなくなる可能性があります。
:::

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/hcjai4J1894?si=S_jaEfXVThWXscVJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### パート 3 デバイス使用方法

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/Q97w2ompPtI?si=yLbAgE4cBbT6NbHS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### 4方向ジョイスティック
L1 E-Ink ファームウェアは現在4方向ジョイスティックをサポートしていません。ジョイスティックを使用したい場合は、他のモデルをご購入ください。

#### メニューバー
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/Menu.jpeg" alt="pir" width={600} height="auto" /></p>
2.7 ファームウェアのみがメニューバーをサポートしています。メニューバーを使用したい場合は、[ファームウェアフラッシュチュートリアル](http://localhost:3000/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware)に従ってファームウェアを更新してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

#### ブザー

ブザーをオンまたはオフにしたい場合は、まず `ファームウェアを` `2.7` バージョンに `更新してください`。2.7 バージョンのファームウェアのみがメニューバーを持っているためです。
- ブザーをオンにする
Setting（歯車の形のアイコン）-> Notification -> Buzzer Action -> Disable
- ブザーをオフにする
Setting（歯車の形のアイコン）-> Notification -> Buzzer Action -> All enabled

<div class="table-center">
<iframe width="350" height="450" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer%20_turnonturnoff.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### パート 4 スマートフォン接続

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/OFtUwN3z0tI?si=9zr3j-hLuoj0-CXi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### パート 5 異なる状態

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/eZa8kfUD2e4?si=3Fe_30obcercIXXO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 使用開始

:::danger note
デバイスが以下の状態にある場合は、手動で再起動または電源を切らないでください。そうしないとデバイスが動作しなくなる可能性があります。
1. メッセージ送信プロセスが完了していない
2. 設定中
:::

### ファームウェアフラッシュ

:::caution note
ファームウェアの更新に `NRF-OTA を使用しないでください`。デバイスが完全に動作しなくなる可能性があります。
:::

[Meshtastic Web Flasher](https://flasher.meshtastic.org/)にアクセスしてください。

L1、L1 Lite、L1 Pro の場合、ターゲットデバイスを `Seeed Wio Tracker L1` に選択し、最新のファームウェアを選択してから `Flash` をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

L1 E-Ink の場合、ターゲットデバイスを `Seeed Wio Tracker L1 E-Ink` に選択し、最新のファームウェアを選択してから `Flash` をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%201.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%202.png" alt="pir" width={800} height="auto" /></p>


デバイスの電源を入れ、`Enter DFU Mode` をクリックすると、`Tracker L1` という名前のシリアルポートが表示されるので、それをクリックして接続すると、`Tracker L1` という名前のドライバが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

UF2 ファイルを DFU ドライブにドラッグしてください。ファイルがダウンロードされ、デバイスが再起動した後、ファームウェアがフラッシュされます。

### デバイスの電源を入れる

USB ケーブルを接続してデバイスをアクティベートしてください。電源スイッチを上に持ち上げて電源を入れてください。

:::tip
ボタンを押してもデバイスが反応しない場合は、まず充電してください。急速充電器は使用しないでください。
:::

### アプリ経由で接続

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="iOS アプリ">

- Bluetooth パネルでターゲットデバイスを選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- ディスプレイに表示されたコードを入力し、`OK` をクリックしてデバイスに接続してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">

- `+` をクリックしてターゲットデバイスを選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- コードを入力し（デフォルトコードは `123456`）、`OK` をクリックしてデバイスに接続してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### ウェブサイト経由で接続

ウェブサイトでテキストメッセージを送信し、他のノードと通信したい場合は、デバイスを [Meshtastic Website](https://client.meshtastic.org/messages/broadcast/0) に接続できます。

  ステップ 1：ウェブサイトを開く

[こちらをクリック](https://client.meshtastic.org/messages/broadcast/0)してウェブサイトにアクセスしてください。
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  ステップ 2：新しいデバイスを追加

    "+ New Connection" をクリックしてください。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    接続方法は2つあります。お好みの方法を選択してください。

 方法 1：Bluetooth 経由

    Bluetooth 方法を選択してください。ポップアップウィンドウでデバイス ID を選択してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 方法 2：シリアル経由

    シリアル方法を選択してください。デバイスマネージャーを開いて、デバイスがどのポートに接続されているかを確認してください。ポップアップウィンドウでそのポートを選択してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    デバイスがリストに表示されます。クリックして接続してください。接続が成功すると、ウェブサイト上でデバイスの状態を直接確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>


### LoRa の設定

メッシュ通信を開始するには、地域を設定する必要があります。この設定は、デバイスが使用する周波数範囲を制御し、地域の場所に応じて設定する必要があります。

<Tabs>
<TabItem value="ios" label="iOS アプリ">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**地域リスト**

|**地域コード**|**説明**|**周波数範囲 (MHz)**|**デューティサイクル (%)**|**電力制限 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902.0 - 928.0|100|30|
|EU_868|欧州連合 868MHz|869.4 - 869.65|10|27|

より包括的なリストについては、[国別 LoRa 地域](https://meshtastic.org/docs/configuration/region-by-country/)を参照してください。

:::info
**EU_868** は、1時間のローリングベースで毎分計算される10%の時間あたりデューティサイクル制限を遵守する必要があります。制限に達すると、再び許可されるまでデバイスは送信を停止します。
:::

デバイスでLoRa地域を設定したので、必要に応じて[LoRa設定](https://meshtastic.org/docs/configuration/radio/lora/)を構成することができます。

### GPS設定

GPSを有効にしてください。更新間隔とブロードキャスト間隔を調整して、より最新の位置情報を取得できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

iOSの場合は、`Accurate Location`をオンにしてください。そうしないと、位置情報がずれる可能性があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>


### センサー接続

Groveインターフェースを介してデバイスにセンサーを追加できます。以下のセンサーは、デバイスのGroveインターフェースとの互換性が確認されています。

<table>
  <tr>
    <th colspan="2">センサータイプ</th>
    <th colspan="1">センサーモデル</th>
  </tr>
  <tr>
    <td rowspan="4">環境センサー</td>
    <td>圧力</td>
    <td>BMP085</td>
  </tr>
  <tr>
    <td>温度</td>
    <td>[MCP9808](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html)、PCT2075</td>
  </tr>
  <tr>
    <td>温度・湿度</td>
    <td>[SHT31](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)/SHTC3/[SHT4X](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html)、AHT10</td>
  </tr>
  <tr>
    <td>温度・湿度・圧力</td>
    <td>[BME280](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)</td>
  </tr>
  <tr>
    <td rowspan="2">その他</td>
    <td>心拍数・SpO₂</td>
    <td>[MAX30102](https://www.seeedstudio.com/MAXREFDES117-HEART-RATE-AND-PULSE-OXIMETRY-MONITOR-p-2762.html)</td>
  </tr>
  <tr>
    <td>I2Cキーボード</td>
    <td>CardKB</td>
  </tr>
</table>

### スクリーン接続
 - E-Inkスクリーン
  [こちらをクリック](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html)して、互換性のあるE-Inkスクリーンを入手してください。
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/E-Ink_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>

- OLEDスクリーン
[こちらをクリック](https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html)して、互換性のあるOLEDスクリーンを入手してください。現在のOLEDドライバーはSSD1306です。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/OLED_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>


### バーチャルキーボード
<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html" alt="pir" width={600} height="auto" /></p>
2.7バージョンのファームウェアでバーチャルキーボードがサポートされました！デバイス上で直接メッセージを入力して、他のデバイスと通信できます。[ファームウェアフラッシュチュートリアル](http://localhost:3000/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware)に従ってファームウェアを更新してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

## FAQ

### デバイスの故障とブートローダーのインストール

**説明：**

デバイスが応答しない、LEDが点灯しない、アプリとペアリングできない。独自のファームウェアをフラッシュした後にデバイスが完全に動作しなくなった場合は、ブートローダーの再インストールを試すこともできます。

:::danger note
ブートローダーをフラッシュする際は、ケーブル接続が安定していることを確認し、フラッシュプロセス中は**絶対に**切断しないでください。
:::

- ステップ1：[こちらをクリックしてブートローダーをダウンロード](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)

- ステップ2：DFUモードに入る

  RSTボタンをダブルクリックしてDFUモードに入ります。「Tracker L1」という名前のディスクが表示されます。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1RstButton.png" alt="pir" width={300} height="auto" /></p>

- ステップ3：ブートローダーファイルを貼り付ける

  ディスク内のすべてのファイルをダウンロードしたブートローダーファイルで上書きします。

- ステップ4：ファームウェアをフラッシュする

  上記の手順を完了したら、この[ステップ](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware)に従ってアプリケーションファームウェアをフラッシュできます。[手動でDFUモードに入る](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#unable-to-enter-dfu--entering-dfu-mode-manually)必要がある場合があります。


### DFUに入れない・手動でDFUモードに入る

デバイスをPCに接続し、`Reset`ボタンをダブルプレスします。黄色のLEDが点灯し続け、PC上に`Tracker L1`という名前の新しいUSBドライブが表示されます。

### DFUモードの終了

`Reset`ボタンを一度押してDFUモードを終了します。

 ### デバイスの自動電源オフ

 #### 説明

 - デバイスの電源を入れた後、しばらくすると自動的に電源が切れたり再起動したりします。
 - シリアルポートログがしばらく実行された後、停止します。

 これは、デバイスが次の状態にあるときに手動で強制的に再起動または電源を切ったことが原因である可能性があります：メッセージ送信プロセスが完了していない、設定中......

 #### トラブルシューティング

[こちらをクリック](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing)してビデオをご覧ください。フラッシュ消去を実行し、最新のファームウェアを再フラッシュする必要があります。

### ファクトリーリセット
デフォルト設定に復元したい場合は、ファクトリーリセットを実行できます。ファクトリーリセットを実行する方法は2つあります。

- [こちらをクリック](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing)してビデオをご覧ください。フラッシュ消去を実行し、最新のファームウェアを再フラッシュする必要があります。

- アプリの`Factory Reset`ボタンをクリックします。デバイスは工場出荷時設定で自動的に再起動します。
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>


### 信号品質

- **SNR**は通信リンクの品質を反映します。通常のデバイスは-7 dB以上で動作します。SNRが-10 dB未満のデバイスは性能が悪いことを示します。

- **RSSI**はデバイスとその周囲環境によって共同で決定されます。通常のデバイスは-110 dBm以上で動作します。RSSIが-115 dBm未満のデバイスは性能が悪いと考えられます。

      最高の信号効果を得るために、開放的で障害物のない、干渉の少ない場所でデバイスを使用してください。

### 互換性のあるアンテナ

L1 Proのアンテナ交換が必要な場合は、[こちらをクリック](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html)して入手してください。

## リソース
- [ブートローダー](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)
- [(V1) 3Dプリント参考ファイル](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing)
- [(V2 新4方向ジョイスティック) 3Dプリント参考ファイル](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip)
- [L1エンクロージャーデザインチャレンジ](https://www.hackster.io/contests/SeeedMeshtasticDeviceDesign2025/hardware_applications#challengeNav)
- [アウトラインファイル](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [TELEC認証](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/WioL1series-TELEC.pdf)
- [FCC認証](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [CE認証](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [消費電力テストとバッテリー寿命計算](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)