---
description: SenseCAP Solar Node for Meshtastic & LoRa の使用開始
title:  SenseCAP Solar Node の使用開始
keywords:
- Meshtastic
- Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /ja/get_started_with_meshtastic_solar_node
sidebar_position: 2
last_update:
  date: 12/24/2025
  author: Michelle Huang
---

:::danger note
デバイスが以下の状態にある場合は、手動で再起動または電源を切らないでください。そうしないと、デバイスが故障する可能性があります。
1. メッセージ送信プロセスが完了していない
2. 設定中
:::
## 使用開始

正式な展開の前に、まずノードをテストして設定してください。

### ファームウェアのフラッシュ

:::caution note
ファームウェアの更新に `NRF-OTA を使用しないでください`。デバイスが完全に故障する可能性があります。
ファームウェアをフラッシュする前に、まず消去ファームウェアをフラッシュしてください！
:::

[Meshtastic Web Flasher](https://flasher.meshtastic.org/) にアクセスしてください。対象デバイスを `Seeed SenseCAP Solar Node` に選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-solar.png" alt="pir" width={800} height="auto" /></p>

#### フラッシュ消去

`ゴミ箱` シンボルをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/FlashEraseIcon.png" alt="pir" width={800} height="auto" /></p>

消去ファームウェアをダウンロードしてコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

`Enter DFU Mode` をクリックすると、`XIAO-xxx` という名前のシリアルポートが表示されます。それをクリックして接続すると、`XIAO-xxx` という名前のドライバが表示されるはずです。消去ファームウェアをディスクに貼り付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

このプロセスには時間がかかる場合があります。「XIAO-XXX」ディスクが消えるまでお待ちください。

#### アプリケーションファームウェアのフラッシュ

希望するファームウェアバージョンを選択します。`flash` をクリックします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/3-steps.png" alt="pir" width={800} height="auto" /></p>

UF2ファイルをダウンロードしてDFUに入ります。UF2ファイルをDFUドライブにドラッグします。ファイルがダウンロードされ、デバイスが再起動した後、ファームウェアがフラッシュされるはずです。

### バッテリーとGPSモジュールの取り付け（オプション）

:::tip
バッテリーを取り付けまたは交換する必要がある場合は、`Button-top` 18650（3.6V）バッテリーを使用してください。
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-battery.png" alt="pir" width={500} height="auto" /></p>
P1-Proバージョンには内蔵バッテリーとGPSモジュールがあります。P1バージョンの場合、必要に応じてユーザーがバッテリーとGPSモジュールを手動で取り付ける必要があります。
:::



- ステップ1：すべてのネジとカバーを取り外します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- ステップ2：バッテリーとGPSモジュールを取り付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- ステップ3：シェルを組み立てます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
シェルが適切に取り付けられ、ネジがしっかりと締められていることを確認して、デバイスの防水性を維持してください。
:::

### デバイスの電源投入

初回使用時は、USBケーブルを接続してデバイスをアクティベートする必要があります。青いMeshライトが点滅すれば、デバイスが正常に電源投入されたことを意味します。以下の動画のとおりです：

<div class="table-center">
<iframe width="700" height="250" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solarnodeturnon.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
ボタンを押してもデバイスが応答しない場合は、まず充電してください。急速充電器は使用しないでください。
:::

### アプリ経由での接続

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="iOS アプリ">

- Bluetoothパネルで対象デバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- コードを入力し（デフォルトコードは `123456`）、`OK` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">

- `+` をクリックして対象デバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- コードを入力し（デフォルトコードは `123456`）、`OK` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>


### ウェブサイト経由での接続

ウェブサイトでテキストメッセージを送信し、他のノードと通信したい場合は、デバイスを [Meshtastic Website](https://client.meshtastic.org/messages/broadcast/0) に接続できます。

  ステップ1：ウェブサイトを開く

[こちらをクリック](https://client.meshtastic.org/messages/broadcast/0) してウェブサイトにアクセスします。
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  ステップ2：新しいデバイスを追加

    "+ New Connection" をクリックします。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    接続方法は2つあります。お好みの方法を選択できます。

 方法1：Bluetooth経由

    Bluetooth方法を選択します。ポップアップウィンドウでデバイスIDを選択します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 方法2：シリアル経由

    シリアル方法を選択します。デバイスマネージャーを開いて、デバイスが接続されているポートを確認します。ポップアップウィンドウでそのポートを選択します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    デバイスがリストに表示されます。クリックして接続します。接続が成功すると、ウェブサイト上でデバイスの状態を直接確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### LoRaの設定

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

より包括的なリストについては、[国別LoRa地域](https://meshtastic.org/docs/configuration/region-by-country/) を参照してください。

:::info
**EU_868** は、1時間ごとのデューティサイクル制限10%を遵守する必要があり、これは1時間のローリングベースで毎分計算されます。制限に達すると、再び許可されるまでデバイスは送信を停止します。
:::

デバイスでLoRa地域を設定したので、ニーズに合わせて [LoRa設定](https://meshtastic.org/docs/configuration/radio/lora/) の設定を続けることができます。

### GPSの設定

GPSを有効に設定してください。更新間隔とブロードキャスト間隔を調整して、より最新の位置情報を取得できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

iOSの場合は、`Accurate Location` をオンにしてください。そうしないと、測位が偏差する可能性があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

### ボタン

|ボタン操作|説明|
|--|--|
|PWRを3秒間押す|電源オン|
|PWRを2回押す|ノード/位置情報の更新|
|PWRを3回押す|GPSのオン/オフ切り替え|
|PWRを5秒間押す|電源オフ|
|RSTを2回押す|手動でDFUに入る|

## 設置

:::danger note
デバイスは長期間屋外で使用されるため、パネルを水平位置に設置することは避けてください。水の蓄積を防ぐため、傾斜または斜めの設置をお勧めします。さらに、すべてのネジがしっかりと締められ、カバーが適切に設置されていることを確認してください。防水保護を強化するため、追加のシール対策を検討することもできます。
:::

- **部品リスト**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>



### ステップバイステップ設置ガイド

- ステップ1：ワッシャーとネジを使用して、パーツ1をデバイスの底部に接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ2：ユニバーサルジョイント（パーツ2）とブラケット（パーツ3）をネジで接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ3：RFケーブル（パーツ4）とアンテナ（パーツ5）を接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ4：フープリングを適切な位置に取り付けます。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/hoop-ring.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ5：ユニバーサルジョイントブラケットを接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connector.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ6：ネジを緩め、ユニバーサルジョイントを適切な位置に調整してから、ネジを締めます。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ7：アンテナをデバイスに接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 完全なインストールガイダンス

- ビデオを通じて、インストールと初期化プロセス全体を完了できます。

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/smQe7G0Bbsk?si=kcB8BdoxiwpZqB4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### ソーラーノードにセンサーを追加（オプション）

- このビデオを通じてセンサーを取り付けることができます。

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/AUFAdRgOCK8?si=9P-X1B7g8unZvVqb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

- 以下のセンサーは、デバイス上の Grove インターフェースとの互換性が確認されています。

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

### アンテナのアップグレード（オプション）

- このビデオを見て、アンテナをファイバーグラス製のものに交換できます。

より高いゲインのアンテナが必要な場合は、[860-930MHz 3dBi ファイバーグラス](https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-with-base-860-930MHz-3dBi-360mm-p-5315.html)アンテナと[902-928MHz 5.8dBi ファイバーグラス](https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html)アンテナをお勧めします。

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/uCUq7VrNkzc?si=9uiAAZY45B-Sg-wD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## FAQ

### ブートループ

- 原因

これは通常、ファームウェアの書き込み失敗によって引き起こされます。ファームウェアを書き込む際は、安定した接続を維持してください。

- トラブルシューティング

[こちらをクリック](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_solar_node/#flash-firmware)してファームウェアを再書き込みしてください。

### デバイスの故障

#### 説明

デバイスが応答しない、LEDが点灯しない、アプリとペアリングできない。

**1) デバイスがまだDFUモードに入ることができる場合は、ブートローダーの書き込みを試してください**。

#### ブートローダーの書き込み

- [ブートローダーダウンロード](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/xiao_nrf52840_ble_bootloader.zip)

:::danger note
ブートローダーを書き込む際は、ケーブル接続が安定していることを確認し、書き込みプロセス中は**絶対に**切断しないでください。
:::

**ステップ1：Adafruit-nrfutilのインストール**

**前提条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

<Tabs>
<TabItem value="pypi" label="PyPIからのインストール">

これは推奨される方法で、最新バージョンをインストールします：

```
pip3 install --user adafruit-nrfutil
```

</TabItem>

<TabItem value="sou" label="ソースからのインストール">

PyPiでのインストールに問題がある場合やツールを変更したい場合は、この方法を使用してください。まず、このリポジトリをクローンしてそのフォルダに移動します。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意：以下のコマンドは`python3`を使用していますが、Windowsの場合、Python 3.xのWindowsインストールではまだpython.exeという名前を使用しているため、`python`に変更する必要がある場合があります。

ホームディレクトリのユーザー空間にインストールするには：

```
pip3 install -r requirements.txt
python3 setup.py install
```

`pip3 install`を実行する際に権限エラーが発生する場合、`pip3`が古いかシステムディレクトリにインストールしようとしています。その場合は`--user`フラグを使用してください：

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

システムディレクトリにインストールしたい場合（一般的には推奨されません）：

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

ユーティリティの自己完結型実行可能バイナリを生成するには（WindowsとmacOS）、以下のコマンドを実行します：

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

.exeは`Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil`にあります（Windowsの場合は`.exe`付き）。
便利なように、%PATH%内のディレクトリなど、他の場所にコピーまたは移動してください。

</TabItem>
</Tabs>

**ステップ2：ポート番号の確認**

デバイスをPCに接続し、ポート番号を確認します。

例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**ステップ3：ブートローダーの書き込み**

ターミナルまたはコマンドプロンプトで、ブートローダーzipパッケージをダウンロードしたディレクトリに移動し、デバイスの正しいポートに置き換えて以下のコマンドを実行します：

- **Windows用**：

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COMXX -b 115200 --singlebank --touch 1200
```

- **その他**：

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/BootloaderSolar.png" alt="pir" width={800} height="auto" /></p>

上記の手順を完了したら、この[ステップ](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_solar_node/#flash-firmware)に従ってアプリケーションファームウェアを書き込むことができます。

 ### デバイスの自動電源オフ

 #### 説明

 - デバイスの電源を入れた後、しばらくすると自動的に電源が切れたり再起動したりします。
 - シリアルポートログがしばらく実行された後、停止します。

 これは、デバイスが以下の状態にあるときに手動で強制的に再起動または電源を切ったことが原因である可能性があります：メッセージ送信プロセスが完了していない、設定中......

 #### トラブルシューティング

[こちらをクリック](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_solar_node/#flash-erase)してフラッシュ消去を実行してください。その後、最新のファームウェアを再書き込みしてください。


### ファクトリーリセット

デフォルト設定に復元したい場合は、ファクトリーリセットを実行できます。ファクトリーリセットを実行する方法は2つあります。

- [こちらをクリック](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_solar_node/#flash-erase)してフラッシュ消去を実行してください。その後、最新のファームウェアを再書き込みしてください。

- アプリの`Factory Reset`ボタンをクリックします。デバイスは工場出荷時設定で自動的に再起動します。
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### 消費電力

消費電力は主にデータ送信頻度やGPS更新レートなどの要因に依存します。
以下の数値は参考値のみです。実際の消費量は実際の使用条件によって異なる場合があります。

- **シャットダウンスリープモード消費電力**

|説明|消費電力|
|---|---|
|GPS_LED動作電流|1.02 mA|
|電源投入済みだが非アクティブ|56.195 μA|
|電源投入済みでアクティブ|611 μA|

**例：**

|バッテリー容量|バッテリー寿命|
|---|---|
|3350|136.8|
|12000|490.2|

- **アクティブモード消費電力**

|モード|電流|
|---|---|
|静的電流|10.65 mA|
|EU868送信電流|157.74 mA|
|US915送信電流|205.22 mA|
|GPS動作電流|50 mA|
|GPS_LED動作電流|1.02 mA|

### 信号品質

- **SNR**は通信リンクの品質を反映します。通常のデバイスは-7 dB以上で動作します。SNRが-10 dB未満のデバイスは性能が悪いことを示します。

- **RSSI**はデバイスとその周辺環境によって共同で決定されます。通常のデバイスは-110 dBm以上で動作します。RSSIが-115 dBm未満のデバイスは性能が悪いと考えられます。

      最良の信号効果を得るために、干渉が最小限で開放的で障害物のない場所でデバイスを使用してください。

## リソース
- [ソーラーノードバッテリー寿命計算表](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Solar%20Node%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
