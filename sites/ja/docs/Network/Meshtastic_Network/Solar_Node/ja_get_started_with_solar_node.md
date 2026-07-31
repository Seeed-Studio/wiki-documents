---
description: SenseCAP Solar Node for Meshtastic & LoRa の使用を開始する
title: SenseCAP Solar Node を使い始める
keywords:
  - Meshtastic
  - Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /get_started_with_meshtastic_solar_node
sku: 114993633,114993643
sidebar_position: 2
last_update:
  date: 3/10/2026
  author: Michelle Huang
createdAt: '2025-05-13'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_solar_node/
---

:::danger note
デバイスが以下のいずれかの状態にあるときは、手動で再起動したり電源を切ったりしないでください。そうしないと、デバイスが動作不能になる可能性があります。
1. メッセージ送信プロセスが完了していない
2. 設定中である
:::
## はじめに

本格的な設置の前に、まずノードのテストと設定を行ってください。

### ファームウェアを書き込む

:::caution note
ファームウェアの更新に `NRF-OTA` を使用しないでください。デバイスが完全に反応しなくなる可能性があります。
ファームウェアを書き込む前に、必ず最初にフラッシュ消去の手順を実行してください！
:::

[Meshtastic Web Flasher](https://flasher.meshtastic.org/) にアクセスします。ターゲットデバイスとして `Seeed SenseCAP Solar Node` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-solar.png" alt="pir" width={800} height="auto" /></p>

#### フラッシュ消去

`trash` シンボルをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/FlashEraseIcon.png" alt="pir" width={800} height="auto" /></p>

消去用ファームウェアをダウンロードしてコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

`Enter DFU Mode` をクリックし、`XIAO-xxx` という名前のシリアルポートを選択して接続します。`XIAO-xxx` という名前のドライブが表示されるはずです。消去用ファームウェアをそのドライブにコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

この処理には時間がかかる場合があります。"XIAO-XXX" ドライブが消えるまでお待ちください。

#### アプリケーションファームウェアの書き込み

使用したいファームウェアバージョンを選択し、`flash` をクリックします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/3-steps.png" alt="pir" width={800} height="auto" /></p>

UF2 ファイルをダウンロードして DFU モードに入ります。UF2 ファイルを DFU ドライブにドラッグします。ファイルのコピー完了後、デバイスが再起動するとファームウェアの書き込みが完了します。

### バッテリーと GPS モジュールの取り付け（オプション）

:::tip
バッテリーを取り付ける、または交換する必要がある場合は、`button-top` 18650（3.6 V）バッテリーを使用してください。
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-battery.png" alt="pir" width={500} height="auto" /></p>
P1-Pro バージョンにはバッテリーと GPS モジュールが内蔵されています。P1 バージョンでは、必要に応じてユーザーがバッテリーと GPS モジュールを手動で取り付ける必要があります。
:::



- ステップ 1: すべてのネジとカバーを取り外します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- ステップ 2: バッテリーと GPS モジュールを取り付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- ステップ 3: ケースを組み立てます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
防水性能を維持するため、ケースが正しく取り付けられ、ネジがしっかりと締め付けられていることを確認してください。
:::

### デバイスの電源を入れる

初回使用前に、USB ケーブルを接続してデバイスをアクティベートする必要があります。青い Mesh ライトが点滅すれば、下の動画のようにデバイスの電源が正常に入っています。

<div class="table-center">
<iframe width="700" height="250" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solarnodeturnon.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
ボタンを押してもデバイスが反応しない場合は、まず充電してください。急速充電器は使用しないでください。
:::

### アプリ経由で接続する

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="iOS アプリ">

- Bluetooth パネルでターゲットデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- コード（デフォルトコードは `123456`）を入力し、`OK` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">

- `+` をクリックし、ターゲットデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- コード（デフォルトコードは `123456`）を入力し、`OK` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>


### Web サイト経由で接続する

Web クライアントでテキストメッセージを送信し、他のノードと通信したい場合は、デバイスを [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) に接続できます。

  ステップ 1: Web サイトを開く

[ここをクリック](https://client.meshtastic.org/messages/broadcast/0)して Web サイトにアクセスします。
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  ステップ 2: 新しいデバイスを追加する 

    "+ New Connection" をクリックします。 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    接続方法は 2 通りあります。お好みの方法を選択してください。

 方法 1: Bluetooth 経由

    Bluetooth 方法を選択します。ポップアップウィンドウでデバイス ID を選択します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 方法 2: シリアル経由

    シリアル方法を選択します。デバイスマネージャーを開き、デバイスがどのポートに接続されているかを確認します。ポップアップウィンドウでそのポートを選択します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    デバイスがリストに表示されます。クリックして接続します。接続に成功すると、Web サイト上でデバイスのステータスを直接確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### LoRa を設定する

メッシュ通信を開始するには、リージョンを設定する必要があります。この設定はデバイスが使用する周波数帯域を制御し、お住まいの地域に合わせて設定する必要があります。

<Tabs>
<TabItem value="ios" label="iOS アプリ">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**リージョン一覧**

|**Region Code**|**説明**|**周波数帯域 (MHz)**|**デューティサイクル (%)**|**出力制限 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902.0 - 928.0|100|30|
|EU_868|欧州連合 868MHz|869.4 - 869.65|10|27|

より包括的な一覧については、[LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) を参照してください。

:::info
**EU_868** は、1 時間あたり 10% のデューティサイクル制限を順守する必要があり、1 時間のローリングウィンドウに対して毎分計算されます。この制限に達すると、再び許可されるまでデバイスは送信を停止します。
:::

デバイスで LoRa リージョンを設定したら、ニーズに合わせて任意の [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) を続けて設定できます。

### GPS を設定する

GPS を有効にしてください。更新間隔とブロードキャスト間隔を調整して、より最新の位置情報を取得できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

iOS の場合は、`Accurate Location` をオンにしてください。そうしないと、位置情報が不正確になる可能性があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

### ボタン

|ボタン操作|説明|
|--|--|
|PWR を 3 秒押す|電源オン|
|PWR を 2 回押す|ノード／位置情報を更新|
|PWR を 3 回押す|GPS のオン／オフを切り替え|
|PWR を 5 秒押す|電源オフ|
|RST を 2 回押す|手動で DFU に入る|

## 取り付け

:::danger note
デバイスは長期間屋外で使用されるため、パネルを水平に設置することは避けてください。水たまりを防ぐため、傾斜または斜めに設置することを推奨します。さらに、すべてのネジが確実に締め付けられ、カバーが正しく取り付けられていることを確認してください。防水性をさらに高めるために、追加のシーリング処理を検討してもよいでしょう。
:::

- **パーツリスト**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>



### 手順付き取り付けガイド

- ステップ 1: ワッシャーとネジを使って、パーツ 1 をデバイス底面に取り付けます。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ 2：ユニバーサルジョイント（パーツ 2）とブラケット（パーツ 3）をネジで固定します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ 3：RF ケーブル（パーツ 4）とアンテナ（パーツ 5）を接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ 4：フープリングを適切な位置に取り付けます。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/hoop-ring.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ 5：ユニバーサルジョイントブラケットを接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connector.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ 6：ネジを緩めてユニバーサルジョイントを適切な位置に調整し、その後ネジを締めます。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- ステップ 7：アンテナをデバイスに接続します。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 取り付け完了までのガイド

- 動画を通して、インストールと初期化の全工程を完了できます。

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/smQe7G0Bbsk?si=kcB8BdoxiwpZqB4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Solar Node にセンサーを追加する（オプション）

- この動画に従ってセンサーを取り付けることができます。

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/AUFAdRgOCK8?si=9P-X1B7g8unZvVqb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

- 以下のセンサーは、本デバイス上の Grove インターフェースとの互換性が検証されています。

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
    <td>[MCP9808](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html)、PCT2075</td>
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

### アンテナをアップグレードする（オプション）

- この動画を見ながら、アンテナをグラスファイバー製のものに交換できます。

より高い利得のアンテナが必要な場合は、[860-930MHz 3dBi fiberglass](https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-with-base-860-930MHz-3dBi-360mm-p-5315.html) アンテナと [902-928MHz 5.8dBi fiberglass](https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html) アンテナをお勧めします。

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/uCUq7VrNkzc?si=9uiAAZY45B-Sg-wD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## FAQ

### ブートループ

- 原因 

これは通常、ファームウェアの書き込み失敗によって発生します。ファームウェアを書き込む際は、接続を安定した状態に保ってください。

- トラブルシューティング

[ここをクリック](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_solar_node/#flash-firmware)して、ファームウェアを書き込み直してください。

### デバイスが文鎮化した場合

#### 説明

デバイスが反応せず、LED も点灯せず、アプリとペアリングできません。

**1) デバイスがまだ DFU モードに入れる場合は、ブートローダーの書き込みを試してください。**

#### ブートローダーを書き込む

- [ブートローダーのダウンロード](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/xiao_nrf52840_ble_bootloader.zip)

:::danger note
ブートローダーを書き込む際は、ケーブル接続が安定していることを確認し、書き込み中に**絶対に**切断しないでください。
:::

**ステップ 1：Adafruit-nrfutil のインストール**

Windows ユーザーは、「Win」キーと「R」キーを押し、ポップアップウィンドウに「cmd」と入力して「Enter」を押します。これでコマンドラインが開きます。

Mac ユーザーは、「Command」キーと「Space」キーを押して Spotlight を開き、「terminal」と入力して「Return」を押します。これでコマンドラインが開きます。

**前提条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)


コマンドラインで、Python と pip が正しくインストールされているか確認します。

```
python --version
```

```
python -m pip --version
```

その後、「Python xxx」と「pip xxx」が表示されるはずです。表示されない場合は、Python を再インストールしてみてください。

<Tabs>
<TabItem value="pypi" label="PyPI からインストール">

これは最新バージョンをインストールするための推奨方法です：

```
pip3 install --user adafruit-nrfutil
```


インストールパスを確認します：

```
python -m pip show adafruit-nrfutil
```

これがインストール場所です：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

Windows ユーザーは、パスを手動で追加する必要がある場合があります。前の手順で表示されたインストール場所をコピーし、次のように追加します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>


</TabItem>

<TabItem value="sou" label="ソースからインストール">

PyPI でのインストールに問題がある場合や、ツールを変更したい場合はこの方法を使用します。まず、このリポジトリをクローンし、そのフォルダに移動します。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意：以下のコマンドでは `python3` を使用していますが、Windows の場合は `python` に変更する必要があるかもしれません。これは、Windows の Python 3.x インストールでは依然として `python.exe` という名前が使われているためです。

ホームディレクトリのユーザースペースにインストールするには：

```
pip3 install -r requirements.txt
python3 setup.py install
```

`pip3 install` 実行時にパーミッションエラーが発生する場合、`pip3` が古いか、システムディレクトリにインストールしようと設定されている可能性があります。その場合は `--user` フラグを使用してください：

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

システムディレクトリにインストールしたい場合（一般的には非推奨）：

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

ユーティリティの自己完結型実行バイナリ（Windows および MacOS）を生成するには、次のコマンドを実行します：

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

実行ファイルは `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil`（Windows の場合は `.exe` 付き）にあります。
利便性のために、`%PATH%` 内のディレクトリなど、別の場所にコピーまたは移動してください。

</TabItem>
</Tabs>

**ステップ 2：ポート番号を確認する**

デバイスを PC に接続し、ポート番号を確認します。

Windows ユーザーの例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

Mac ユーザーの例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**ステップ 3：ブートローダーを書き込む**

ターミナルまたはコマンドプロンプトで、ブートローダーの zip パッケージをダウンロードしたディレクトリに移動し、以下のコマンドを実行します。その際、ポートはお使いのデバイスに合ったものに置き換えてください：

- **Windows の場合**：

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COMXX -b 115200 --singlebank --touch 1200
```
COMXX をお使いの COM ポート番号に変更してください。例えば、デバイスが COM6 の場合、コマンドを次のように変更します：

`adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COM6 -b 115200 --singlebank --touch 1200`

 このコマンドを入力すると、一部のデバイスではポート番号が変わることがあります。インストールに失敗した場合は、もう一度ポート番号を確認してください。


- **その他の OS の場合**：

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/BootloaderSolar.png" alt="pir" width={800} height="auto" /></p>

上記の手順を完了したら、この[手順](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_solar_node/#ファームウェアを書き込む)に従ってアプリケーションファームウェアを書き込みます。

### プライマリチャネルで通信できない

デバイスが近くのノードと通信できない、またはメッセージを送信できない場合は、まず LoRa リージョンとモデムプリセットが周囲のノードと一致しているか確認してください。また、デフォルトの **PSK** が変更されていないかも確認する必要があります。プライマリチャネルで異なる PSK を使用していると、そのチャネル上で他のノードと通信できなくなります。

この問題を見つける最も簡単な方法はモバイルアプリを使用することです。アプリを開き、対象デバイスに接続してから、`Settings` -> `Channels` に移動します。プライマリチャネルを選択し、**PSK** の値を確認します。周囲のノードと異なる場合は、同じ PSK に更新してチャネル設定を保存してください。

<Tabs>
<TabItem value="ios" label="iOS アプリ">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problems_ios.png" alt="iOS アプリでプライマリチャネルの PSK を確認する" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problem_and.png" alt="Android アプリでプライマリチャネルの PSK を確認する" width={900} height="auto" /></p>

</TabItem>
</Tabs>

**解決方法**

どの設定を変更したか分からない場合は、[Factory Reset](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_solar_node/#factory-reset) ガイドに従ってデバイスをデフォルト設定に復元してください。PSK だけを変更した場合は、`AQ==` に戻してください。

 ### デバイスが自動的に電源オフになる

 #### 説明

 - デバイスの電源を入れた後、しばらくすると自動的に電源が切れる、または再起動します。
 - シリアルポートログがしばらく動作した後に停止します。

 これは、メッセージ送信プロセスが完了していない、または設定中のいずれかの状態にあるときに、手動で強制的に再起動または電源オフしたことが原因である可能性があります。

 #### トラブルシューティング

フラッシュ消去を実行するには[ここをクリック](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_solar_node/#フラッシュ消去)し、その後最新のファームウェアを書き込んでください。


### Factory Reset

デフォルト設定を復元したい場合は、Factory Reset を実行できます。Factory Reset を行う方法は 2 つあります。

- [ここをクリック](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_solar_node/#フラッシュ消去)してフラッシュ消去を実行し、その後最新のファームウェアを書き込んでください。

- アプリ内の `Factory Reset` ボタンをクリックします。デバイスは工場出荷時の設定で自動的に再起動します。
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### ダイレクトメッセージの失敗

#### NodeDB のリセット

NodeDB は、現在の Mesh ネットワークで検出されたノードに関する情報を保存するローカルデータベースです。特定のノードと通信できない状況に遭遇した場合、そのノードに対して nodedB に古い情報が保存されている可能性があります。更新する必要があります。

NodeDB には次のような詳細が保存されます：

- **ノード ID**
- **ユーザー名**
- **位置情報**
- **信号情報 (SNR)**
- **最終検出時刻**

アプリを開いて対象デバイスに接続します。**Settings**->**Device**->**Device Config**->**Reset NodeDB** に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDBmerge.png" alt="アプリ内のデバイス設定と Reset NodeDB ボタン" width={600} height="auto" /></p>

#### ユーザー情報の交換

各ノードは自分自身のノード情報を定期的に送信し、メッシュ内の他のノードがそれを「見て」「認識」できるようにします。2 つのノードが互いに通信できるようにするには、お互いのノード情報を交換する必要があります。リスト上の別のノードとプライベートメッセージを送受信できない場合は、アプリ内で手動で情報交換を促すことができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Settings 内のデバイス項目" width={300} height="auto" /></p>

#### 秘密鍵の再生成

2 つのノードが互いに通信できるようにするには、お互いの秘密鍵を知っている必要があります。あるノードがプライベートメッセージの送信に失敗し続ける場合は、そのノードの秘密鍵を再生成してみてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Settings 内のデバイス項目" width={600} height="auto" /></p>

不具合のあるデバイスを再起動して、設定を有効にします。

:::note
鍵を再生成した後は、他のデバイスがそのノードに再接続する必要があります。そのため、他のデバイスのノードリストからそのノードを削除しておくことをお勧めします。
:::

:::tip
次のオプションの違いに注意してください：

- **Reset NodeDB**: ノードデータベースのみを消去します。
- **Factory Reset**: デバイスを工場出荷時設定に復元し、追加の設定データを削除します。
:::

### 消費電力

消費電力は主に、データ送信頻度や GPS 更新レートなどの要因に依存します。
以下の数値はあくまで参考値であり、実際の消費電力は実使用環境によって異なる場合があります。

- **シャットダウンスリープモード時の消費電力**

|説明|消費電流|
|---|---|
|GPS_LED 動作電流|1.02 mA|
|給電されているがアクティブでない状態|56.195 μA|
|給電されアクティブな状態|611 μA|

**例：**

|バッテリー容量 |バッテリー寿命|
|---|---|
|3350|136.8|
|12000|490.2|

- **アクティブモード時の消費電力**

|モード|電流|
|---|---|
|静止電流|10.65 mA|
|EU868 送信電流|157.74 mA|
|US915 送信電流|205.22 mA|
|GPS 動作電流|50 mA|
|GPS_LED 動作電流|1.02 mA|

### 信号品質

- **SNR** は通信リンクの品質を反映します。通常のデバイスは -7 dB 以上で動作します。SNR が -10 dB 未満のデバイスは性能が低いことを示します。

- **RSSI** はデバイスとその周囲の環境によって決まります。通常のデバイスは -110 dBm 以上で動作します。RSSI が -115 dBm 未満のデバイスは性能が低いと見なされます。

      最良の信号性能を得るために、干渉が少なく障害物のない開けた場所でデバイスを使用してください。

### 充電電流

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>

Xiao nRF-52840 Plus の最大充電電流は 200 mA です。CN3165 充電管理チップは 0.99 A をサポートします。したがって、最大充電電流は 1 A です。

## リソース
- [Solar Node バッテリー寿命計算表](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Solar%20Node%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)

## 技術サポート & 製品ディスカッション

<p style={{textAlign: 'center'}}><a href="https://www.facebook.com/groups/1755190828846458" target="_blank"><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Banner_QRCode_FB.jpg" border="0" /></a></p>

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