---
description: Wio Tracker L1 系列の使用開始
title:  Wio Tracker L1 の使用開始
keywords:
- Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /ja/get_started_with_meshtastic_wio_tracker_l1
sidebar_position: 2
last_update:
  date: 11/12/2025
  author: Michelle Huang
---

:::tip
Wio Tracker L1 系列は同じハードウェアフレームワークを共有しています。ビデオガイドはL1 Pro向けでしたが、L1系列の他のすべての製品にも適用できます。
:::
## ビデオチュートリアル

### パート1 開封

L1、L1 Lite、またはL1 E-Inkモデルを初めて使用する際は、USB電源に接続した後、電源スイッチを上に持ち上げて電源を入れてください。

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/Wi_YmE76YcY?si=Ad-pUhle5X9QppPR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



### パート2 ファームウェアフラッシュ

:::caution note
ファームウェアの更新に`NRF-OTAを使用しないでください`。デバイスが完全に動作しなくなる可能性があります。
:::

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/hcjai4J1894?si=S_jaEfXVThWXscVJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### パート3 デバイス使用方法

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/Q97w2ompPtI?si=yLbAgE4cBbT6NbHS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### 4方向ジョイスティック
L1 E-Inkファームウェアは現在4方向ジョイスティックをサポートしていません。ジョイスティックを使用したい場合は、他のモデルをご購入ください。

#### メニューバー
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/Menu.jpeg" alt="pir" width={600} height="auto" /></p>
2.7ファームウェアのみがメニューバーをサポートしています。メニューバーを使用したい場合は、[ファームウェアフラッシュチュートリアル](http://localhost:3000/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware)に従ってファームウェアを更新してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

#### ブザー

ブザーをオンまたはオフにしたい場合は、まず`ファームウェアを更新`して`2.7`バージョンにしてください。2.7バージョンのファームウェアのみがメニューバーを持っているためです。
- ブザーをオンにする
Setting（歯車の形のアイコン）-> Notification -> Buzzer Action -> Disable
- ブザーをオフにする
Setting（歯車の形のアイコン）-> Notification -> Buzzer Action -> All enabled

<div class="table-center">
<iframe width="350" height="450" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer%20_turnonturnoff.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### パート4 スマートフォン接続

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/OFtUwN3z0tI?si=9zr3j-hLuoj0-CXi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### パート5 異なる状態

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/eZa8kfUD2e4?si=3Fe_30obcercIXXO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 使用開始

### ファームウェアフラッシュ

:::caution note
ファームウェアの更新に`NRF-OTAを使用しないでください`。デバイスが完全に動作しなくなる可能性があります。
:::

[Meshtastic Web Flasher](https://flasher.meshtastic.org/)にアクセスしてください。

L1、L1 Lite、L1 Proの場合、ターゲットデバイスを`Seeed Wio Tracker L1`に選択し、最新のファームウェアを選択してから`Flash`をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

L1 E-Inkの場合、ターゲットデバイスを`Seeed Wio Tracker L1 E-Ink`に選択し、最新のファームウェアを選択してから`Flash`をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%201.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%202.png" alt="pir" width={800} height="auto" /></p>


デバイスの電源を入れ、`Enter DFU Mode`をクリックすると、`Tracker L1`という名前のシリアルポートが表示されます。それをクリックして接続すると、`Tracker L1`という名前のドライバが表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

UF2ファイルをDFUドライブにドラッグしてください。ファイルがダウンロードされ、デバイスが再起動した後、ファームウェアがフラッシュされるはずです。

### デバイスの電源を入れる

USBケーブルを接続してデバイスをアクティベートしてください。電源スイッチを上に持ち上げて電源を入れてください。

:::tip
ボタンを押してもデバイスが反応しない場合は、まず充電してください。急速充電器は使用しないでください。
:::

### アプリ経由で接続

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="iOS アプリ">

- Bluetoothパネルでターゲットデバイスを選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- ディスプレイに表示されたコードを入力し、`OK`をクリックしてデバイスに接続してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">

- `+`をクリックしてターゲットデバイスを選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- コード（デフォルトコードは`123456`）を入力し、`OK`をクリックしてデバイスに接続してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### ウェブサイト経由で接続

ウェブサイトでテキストメッセージを送信し、他のノードと通信したい場合は、デバイスを[Meshtastic Website](https://client.meshtastic.org/messages/broadcast/0)に接続できます。

  ステップ1：ウェブサイトを開く

[こちらをクリック](https://client.meshtastic.org/messages/broadcast/0)してウェブサイトにアクセスしてください。
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  ステップ2：新しいデバイスを追加

    "+ New Connection"をクリックしてください。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    接続方法は2つあります。お好みの方法を選択してください。

 方法1：Bluetooth経由

    Bluetooth方法を選択してください。ポップアップウィンドウでデバイスIDを選択してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 方法2：シリアル経由

    シリアル方法を選択してください。デバイスマネージャーを開いて、デバイスがどのポートに接続されているかを確認してください。ポップアップウィンドウでそのポートを選択してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    デバイスがリストに表示されます。クリックして接続してください。接続が成功すると、ウェブサイト上でデバイスの状態を直接確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>


### パラメータの設定

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

|**地域コード**|**説明**|**周波数範囲（MHz）**|**デューティサイクル（%）**|**電力制限（dBm）**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902.0 - 928.0|100|30|
|EU_868|欧州連合 868MHz|869.4 - 869.65|10|27|

より包括的なリストについては、[国別LoRa地域](https://meshtastic.org/docs/configuration/region-by-country/)を参照してください。

:::info
**EU_868**は、1時間のローリングベースで毎分計算される10%の時間デューティサイクル制限を遵守する必要があります。制限に達すると、再び許可されるまでデバイスは送信を停止します。
:::

デバイスにLoRa地域を設定したので、ニーズに合わせて[LoRa設定](https://meshtastic.org/docs/configuration/radio/lora/)の設定を続けることができます。

### センサー接続

Groveインターフェース経由でデバイスにセンサーを追加できます。以下のセンサーは、デバイスのGroveインターフェースとの互換性が確認されています。

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
    <td>[MCP9808](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html) 、PCT2075</td>
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
    <td>I2C キーボード</td>
    <td>CardKB</td>
  </tr>
</table>


### バーチャルキーボード
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/virtual_keyboard.jpeg" alt="pir" width={600} height="auto" /></p>
2.7 バージョンのファームウェアでバーチャルキーボードがサポートされました！デバイス上で直接メッセージを入力して他のデバイスと通信できます。ファームウェアを更新するには、[Flash Firmware Tutorial](http://localhost:3000/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware) に従ってください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

## FAQ

### DFU モードの手動入力

デバイスを PC に接続し、`Reset` ボタンを 2 回押します。黄色の LED が点灯し続け、PC に `Tracker L1` という名前の新しい USB ドライブが表示されます。

### DFU モードの終了

DFU モードを終了するには、`Reset` ボタンを 1 回押します。

### 信号品質

- **SNR** は通信リンクの品質を反映します。通常のデバイスは -7 dB 以上で動作します。SNR が -10 dB 未満のデバイスは性能が悪いことを示します。

- **RSSI** はデバイスとその周辺環境によって決まります。通常のデバイスは -110 dBm 以上で動作します。RSSI が -115 dBm 未満のデバイスは性能が悪いと考えられます。

      最良の信号効果を得るために、干渉が最小限で障害物のない開放的なエリアでデバイスを使用してください。
## リソース
- [(V1) 3D プリント参考ファイル](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing) 
- [(V2 新しい 4 方向ジョイスティック) 3D プリント参考ファイル](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip) 
- [アウトラインファイル](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [FCC 認証](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [CE 認証](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [消費電力テストとバッテリー寿命計算](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)