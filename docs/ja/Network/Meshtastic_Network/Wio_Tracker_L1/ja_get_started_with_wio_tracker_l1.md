---
description: Wio Tracker L1 シリーズの使用開始
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
Wio Tracker L1 シリーズは同じハードウェアフレームワークを共有しています。ビデオガイドは L1 Pro 向けでしたが、L1 シリーズの他のすべての製品にも適用できます。
:::
## ビデオチュートリアル

### パート 1 開封

L1、L1 Lite、または L1 E-Ink モデルを初めて使用する際は、USB 電源に接続した後、電源スイッチを上に持ち上げて電源を入れてください。

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/Wi_YmE76YcY?si=Ad-pUhle5X9QppPR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



### パート 2 ファームウェアの書き込み

:::caution note
ファームウェアの更新に `NRF-OTA を使用しないでください`。デバイスが完全に動作しなくなる可能性があります。
:::

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/hcjai4J1894?si=S_jaEfXVThWXscVJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### パート 3 デバイスの使用

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/Q97w2ompPtI?si=yLbAgE4cBbT6NbHS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### 4方向ジョイスティック
L1 E-Ink ファームウェアは現在、4方向ジョイスティックをサポートしていません。ジョイスティックを使用したい場合は、他のモデルをご購入ください。

#### メニューバー
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/Menu.jpeg" alt="pir" width={600} height="auto" /></p>
2.7 ファームウェアのみがメニューバーをサポートしています。メニューバーを使用したい場合は、[ファームウェア書き込みチュートリアル](http://localhost:3000/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware)に従ってファームウェアを更新してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

### パート 4 スマートフォン接続

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/OFtUwN3z0tI?si=9zr3j-hLuoj0-CXi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### パート 5 異なる状態

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/eZa8kfUD2e4?si=3Fe_30obcercIXXO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 使用開始

### ファームウェアの書き込み

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


デバイスの電源を入れ、`Enter DFU Mode` をクリックすると、`Tracker L1` という名前のシリアルポートが表示されるので、それをクリックして接続してください。`Tracker L1` という名前のドライバが表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

UF2 ファイルを DFU ドライブにドラッグしてください。ファイルがダウンロードされ、デバイスが再起動した後、ファームウェアが書き込まれます。

### デバイスの電源を入れる

USB ケーブルを接続してデバイスをアクティベートしてください。電源スイッチを上に持ち上げて電源を入れてください。

:::tip
ボタンを押してもデバイスが反応しない場合は、まず充電してください。急速充電器は使用しないでください。
:::

### アプリ経由での接続

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

- コード（デフォルトコードは `123456`）を入力し、`OK` をクリックしてデバイスに接続してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

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

|**地域コード**|**説明**|**周波数範囲 (MHz)**|**デューティサイクル (%)**|**電力制限 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902.0 - 928.0|100|30|
|EU_868|欧州連合 868MHz|869.4 - 869.65|10|27|

より包括的なリストについては、[国別 LoRa 地域](https://meshtastic.org/docs/configuration/region-by-country/)を参照してください。

:::info
**EU_868** は、1時間ごとのデューティサイクル制限 10% を遵守する必要があり、これは1時間のローリングベースで毎分計算されます。制限に達した場合、再び許可されるまでデバイスは送信を停止します。
:::

デバイスに LoRa 地域を設定したので、ニーズに合わせて [LoRa 設定](https://meshtastic.org/docs/configuration/radio/lora/)の設定を続けることができます。

### センサー接続

Grove インターフェース経由でデバイスにセンサーを追加できます。以下のセンサーは、デバイスの Grove インターフェースとの互換性が確認されています。

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
    <td>温度・湿度</td>
    <td>[SHT31](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)/SHTC3/[SHT4X](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html)、AHT10</td>
  </tr>
  <tr>
    <td>温度・湿度・気圧</td>
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


### 仮想キーボード
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/virtual_keyboard.jpeg" alt="pir" width={600} height="auto" /></p>
2.7 バージョンのファームウェアは仮想キーボードをサポートしています！デバイス上で直接メッセージを入力して他のデバイスと通信できます。[ファームウェア書き込みチュートリアル](http://localhost:3000/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware)に従ってファームウェアを更新してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

## FAQ

### DFU モードへの手動入力

デバイスを PC に接続し、`Reset` ボタンをダブルクリックしてください。黄色の LED が点灯し続け、`Tracker L1` という名前の新しい USB ドライブが PC に表示されます。

### DFU モードの終了

DFU モードを終了するには、`Reset` ボタンを一度押してください。

### 信号品質

- **SNR** は通信リンクの品質を反映します。通常のデバイスは -7 dB 以上で動作します。SNR が -10 dB 未満のデバイスは性能が悪いことを示します。

- **RSSI** はデバイスとその周囲環境によって共同で決定されます。通常のデバイスは -110 dBm 以上で動作します。RSSI が -115 dBm 未満のデバイスは性能が悪いと考えられます。

      最適な信号効果を得るために、干渉が最小限の開放的で障害物のない場所でデバイスを使用してください。
## リソース
- [(V1) 3Dプリント参考ファイル](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing) 
- [(V2 新しい4方向ジョイスティック) 3Dプリント参考ファイル](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip) 
- [アウトラインファイル](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [FCC認証](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [CE認証](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [消費電力テストとバッテリー寿命計算](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)