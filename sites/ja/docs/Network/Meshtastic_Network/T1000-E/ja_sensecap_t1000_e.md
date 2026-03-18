---
description: Meshtastic 用 SenseCAP Card Tracker T1000-E の使用を開始する
title: T1000-E Tracker を使い始める
keywords:
  - Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecap_t1000_e
sku: 114993369
sidebar_position: 2
last_update:
  date: 3/11/2026
  author: Michelle Huang
createdAt: '2024-07-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/sensecap_t1000_e/
---
:::danger note
デバイスが以下の状態にあるときは、手動で再起動したり電源を切ったりしないでください。そうしないとデバイスが故障する可能性があります。
1. メッセージ送信プロセスが完了していない
2. 設定中
:::
## ビデオチュートリアル

### パート 1: 開封とセットアップ

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/9sCHpWPSPcw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### パート 2: ステータスインジケーター

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/8p34S_9DDEQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### パート 3: 新しいファームウェアを書き込む

:::caution note
ファームウェアを書き込む前に、購入したデバイスが `T1000-E for Meshtastic` であることを必ず確認してください。Meshtastic をサポートしていない他のトラッカーモデルにファームウェアを書き込まないでください。また、ファームウェアの更新に `don't use NRF-OTA` を使用しないでください。デバイスが完全に故障する可能性があります。
:::

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/li6DTOeXK3M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### パート 4: トラブルシューティング手順

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/iWahTuXwYnU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## はじめに

`Meshtastic` アプリをダウンロードします:

- [IOS アプリ](https://meshtastic.org/docs/category/apple-apps/)
- [Android アプリ](https://meshtastic.org/docs/category/android-app/)

### デバイスの電源を入れる

ボタンを 1 回押してデバイスの電源を入れると、上昇するメロディーが鳴り、LED ライトが約 1 秒間点灯します。

:::tip
ボタンを押してもデバイスが反応しない場合は、まず充電してください。急速充電器は使用しないでください。
:::

### アプリ経由で接続する

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS アプリ">

- Bluetooth パネルで対象デバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- コード（デフォルトコードは `123456`）を入力し、`OK` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">

- `+` をクリックし、対象デバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- コード（デフォルトコードは `123456`）を入力し、`OK` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Web サイト経由で接続する

Web サイト上でメッセージを送信し、他のノードと通信したい場合は、デバイスを [Meshtastic Web サイト](https://client.meshtastic.org/messages/broadcast/0) に接続できます。 

  ステップ 1: Web サイトを開く

[ここをクリック](https://client.meshtastic.org/messages/broadcast/0)して Web サイトに移動します。 
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  ステップ 2: 新しいデバイスを追加する 

    「+ New Connection」をクリックします。 

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

### LoRa の設定

メッシュ通信を開始するには、リージョンを設定する必要があります。この設定はデバイスが使用する周波数帯域を制御し、お住まいの地域に合わせて設定する必要があります。

<Tabs>
<TabItem value="ios" label="IOS アプリ">

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

より包括的な一覧については、[国別 LoRa リージョン](https://meshtastic.org/docs/configuration/region-by-country/) を参照してください。

:::info
**EU_868** は、1 時間あたり 10% のデューティサイクル制限を順守する必要があり、1 時間のローリングウィンドウに対して毎分計算されます。この制限に達すると、再び許可されるまでデバイスは送信を停止します。
:::

デバイスで LoRa リージョンを設定したので、必要に応じて任意の [LoRa 設定](https://meshtastic.org/docs/configuration/radio/lora/) を続けて構成できます。

### センサーの設定

|センサー|説明|
|-|-|
|Temperature|✅|
|Light|現在アプリではサポートされていません|
|Accelerometer|今後対応予定|

**温度センサー設定**

<Tabs>
<TabItem value="ios" label="IOS アプリ">

`Settings` -> `Telemetry(Sensors)` -> Enable sensors に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-ios.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">

`Settings` -> `Telemetry(Sensors)` -> Enable sensors に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

**ブザーと LED の設定**

||タイプ|出力 PIN|
|-|-|-|
|ブザー|PWM ブザー|25|
|LED|-|24|

<Tabs>
<TabItem value="ios" label="IOS アプリ">

`Settings` -> `External Notification` -> `GPIO` を有効化 -> `Output Pin GPIO` を設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-en.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">

`Settings` -> `External Notification` -> `GPIO` を有効化 -> `Output Pin GPIO` を設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

詳細については [External Notification Config](https://meshtastic.org/docs/configuration/module/external-notification/) を確認してください。

:::tip
デバイス設定を更新すると、デバイスは再起動します。これには少し時間がかかる場合があります。
:::

### GPS の設定

GPS を有効にしてください。更新間隔とブロードキャスト間隔を調整して、より最新の位置情報を取得できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

IOS の場合は、`Accurate Location` をオンにしてください。そうしないと、位置情報がずれる可能性があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

## ファームウェアの書き込み

### ファームウェアバージョンを確認する

`Settings` -> `Firmware Updates` に移動し、現在のファームウェアバージョンを確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/check-version.png" alt="pir" width={400} height="auto" /></p>

### <div class="danger">⚠️以下のファームウェアは絶対に書き込まないでください</div>

:::danger
T1000-E ファームウェア以外のファームウェアを絶対に書き込まないでください。デバイスがフリーズする可能性があります。
:::

以下のファームウェアはデバイスをブリックします：

- nrf52_promicro_diy_tcxo<br/>
- nrf52_promicro_diy_xtal<br/>
- Dongle_nRF52840-pca10059-v1<br/>
- feather_diy<br/>
- TWC_mesh_v4<br/>
- wio-sdk-wm1110<br/>
- wio-tracker-wm1110<br/>
- xiao_ble

### アプリケーションファームウェアを書き込む

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Flash%20Firmware.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
:::caution note
ファームウェアを書き込む前に、購入したデバイスが `T1000-E for Meshtastic` であることを必ず確認してください。Meshtastic をサポートしていない他のトラッカーモデルにファームウェアを書き込まないでください。また、ファームウェアの更新に `don't use NRF-OTA` を使用しないでください。デバイスが完全に故障する可能性があります。
:::
#### ステップ 1: DFU モードに入る

<Tabs>
<TabItem value="method1" label="方法 1">

[Meshtastic Web Flasher](https://flasher.meshtastic.org/) にアクセスします。

デバイスをPCに接続し、デバイスを `Seeed Card Tracker T1000-E` に選択して最新のファームウェアを選び、`Flash` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-2.png" alt="pir" width={800} height="auto" /></p>

`Enter DFU Mode` をクリックすると、`T1000-E xxx` という名前のシリアルポートが表示されます。それをクリックして接続すると、緑色のLEDが点灯し、`T1000-E` という名前のドライバが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-serial.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="method2" label="方法 2">

USBケーブルをPCに接続し、デバイスボタンを押し続けたまま、**素早く** 充電ケーブルを2回接続します。緑色のLEDが点灯し、`T1000-E` という名前のドライバが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={800} height="auto" /></p>

#### ステップ 2: フラッシュ消去

:::caution note
ファームウェアを書き込む前に、必ず消去用ファームウェアを先に書き込んでください！
:::

`trash` のアイコンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase1.png" alt="pir" width={800} height="auto" /></p>

消去用ファームウェアをダウンロードし、ドライブにコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase-uf2.png" alt="pir" width={800} height="auto" /></p>

この処理には時間がかかる場合があります。ドライブが消えるまで待ち、その後シリアルモニタを開いて消去プロセスを完了させます。

#### ステップ 3: ファームウェアの書き込み

最新のファームウェアを選択し、`UF2` ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/down-uf2.png" alt="pir" width={800} height="auto" /></p>

UF2ファイルをDFUドライブにコピーします。ファイルのコピー完了後、デバイスが再起動するとファームウェアの書き込みが完了します。

## FAQ

### デバイス名の確認方法

 [Meshtastic Web Flasher](https://flasher.meshtastic.org/) にアクセスします。<br/>

 `Open Serial Monitor` をクリックし、デバイスをPCに接続してシリアルログを確認し、`using nodenum` というキーワードを探します。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name3.png" alt="pir" width={800} height="auto" /></p>

### デバイスの再起動方法

 ボタンを押し続けたまま、充電ケーブルを接続します。

## トラブルシューティング

### デバイスの電源が入らない

- デバイスを1〜2時間充電します

- USBケーブルを抜き、ボタンを押し続けたままUSBケーブルを再接続し、そのまま5秒間ボタンを押し続けます。

- 充電ケーブルを交換します

- 電源が切れているように見えても、実際にはLEDとブザーが有効になっていないだけの場合があります。次のパラメータを確認してください：

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/LEDLightEnable.png" alt="pir" width={800} height="auto" /></p>

 - それでも解決しない場合は、デバイスボタンを押し続けたまま充電ケーブルを接続し、PCにディスクが表示されるか確認してください。表示された場合は、[ここをクリック](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#device-bricked) してブートローダーを再インストールしてください

### デバイスがブートループに陥る

**説明:**

デバイスが繰り返し再起動し、シリアルポートが接続と切断を繰り返します。

**解決方法:**

- ステップ 1: 手動でDFUモードに入ることを試します。デバイスボタンを押し続けたまま、**素早く** 充電ケーブルを2回接続すると、緑色のLEDが点灯したままになります。

:::note
DFUモードに正常に入るには、この操作を素早く行う必要があります。複数回試す必要があるかもしれません。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

- ステップ 2: [フラッシュ消去](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#step-2-flash-erase) を行います。

- ステップ 3: [ファームウェアの書き込み](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#step-3-flash-firmware) を行います。

### デバイスが文鎮化した場合

#### 説明

デバイスが反応せず、LEDも点灯せず、アプリとペアリングできません。

**1) デバイスがまだDFUモードに入れる場合は、ブートローダーの書き込みを試してください。**

#### ブートローダーの書き込み

- [ブートローダーのダウンロード](https://files.seeedstudio.com/wiki/SenseCAP/lorahub/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip)

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash%20bootloader.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::danger note
ブートローダーを書き込む際は、ケーブル接続が安定していることを確認し、書き込み中に**絶対に**切断しないでください。
:::

**ステップ1: Adafruit-nrfutil のインストール**

**前提条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

<Tabs>
<TabItem value="pypi" label="PyPI からインストール">

これは推奨される方法で、最新バージョンをインストールするには次のようにします：

```
pip3 install --user adafruit-nrfutil
```

</TabItem>

<TabItem value="sou" label="ソースからインストール">

PyPi でのインストールに問題がある場合や、ツールを変更したい場合はこの方法を使用します。まずこのリポジトリをクローンし、そのフォルダに移動します。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意: 以下のコマンドでは `python3` を使用していますが、Windows の場合は `python` に変更する必要があるかもしれません。これは、Windows の Python 3.x のインストールでは依然として python.exe という名前が使われているためです。

ホームディレクトリのユーザースペースにインストールするには:

```
pip3 install -r requirements.txt
python3 setup.py install
```

`pip3 install` 実行時にパーミッションエラーが発生する場合、`pip3` が古いか、システムディレクトリにインストールしようと設定されている可能性があります。その場合は `--user` フラグを使用してください:

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

システムディレクトリにインストールしたい場合（一般的には非推奨）:

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

ユーティリティの自己完結型実行バイナリ（Windows および MacOS）を生成するには、次のコマンドを実行します:

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

`.exe` ファイルは `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil`（Windows の場合は `.exe` 付き）にあります。
利便性のために、%PATH% に含まれるディレクトリなど、別の場所にコピーまたは移動してください。

</TabItem>
</Tabs>

**ステップ2: ポート番号の確認**

デバイスをPCに接続し、ポート番号を確認します。

例:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**ステップ3: ブートローダーの書き込み**

ターミナルまたはコマンドプロンプトで、ブートローダーのzipパッケージをダウンロードしたディレクトリに移動し、以下のコマンドを実行します。その際、デバイスに合った正しいポートに置き換えてください:

- **Windows の場合**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```

- **その他のOSの場合**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

上記の手順が完了したら、この[手順](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#flash-the-application-firmware)に従ってアプリケーションファームウェアを書き込むことができます。

**2) デバイスがDFUモードに入れないが、シリアルポートは検出できる場合**

- シリアルポートツールを開きます

- ボーレートを `1200` に設定します。

- デバイスを接続します。
   接続するとライトが一瞬点滅します。ライトが点灯したままになるまでこの操作を繰り返してください。点灯したままになれば、デバイスはDFUモードに戻ることができます。その後、[ブートローダーの書き込み](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#flash-the-bootloader) -> [フラッシュ消去](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#step-2-flash-erase) -> [ファームウェアの書き込み](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#step-3-flash-firmware) を行います。

<div class="video-container">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/reset%20via%20serial%20tool.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**3) デバイスがDFUモードに入れず、シリアルポートも表示されない場合**

- デバイスボタンを押し続けたまま充電ケーブルを接続します。PCにディスクが表示された後、シリアルポートが見える場合があります。

- それでも解決しない場合は、充電ケーブルを外し、バッテリーが完全に放電するまで数日間デバイスを放置してから、再度充電ケーブルを接続し、ペアリングを試してください。

**4) 上記のいずれの手順でも解決しない場合は、テクニカルサポート support@sensecapmx.com までご連絡ください。**

### ファームウェアの書き込みに失敗する

- **シリアルポートでデータを受信しない**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 デバイスがDFUモードになっているか確認してください。DFUモード中は緑色のライトが点灯したままになります。

- **シリアルポートを開けない**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 ポートが正しいか確認するか、別のポートを試してください。

 ### デバイスが自動的に電源オフになる

 #### 説明

 - デバイスの電源を入れた後、しばらくすると自動的に電源が切れる、または再起動します。 
 - シリアルポートのログがしばらく動作した後に停止します。

 これは、デバイスが次の状態にあるときに、メッセージ送信プロセスが完了していない、設定中であるなどの状況で、手動かつ強制的に再起動または電源オフしたことが原因の可能性があります。

 #### トラブルシューティング

 フラッシュ消去を実行するには[こちらをクリック](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#step-2-flash-erase)してください。 

 ### 工場出荷時設定へのリセット
デフォルト設定に戻したい場合は、工場出荷時リセットを実行できます。工場出荷時リセットを行う方法は 2 つあります。

- デバイスをフラッシュ消去するには[こちらをクリック](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#step-2-flash-erase)してください。その後、最新のファームウェアを書き込み直します。

- アプリで `Factory Reset` ボタンをクリックします。デバイスは工場出荷時の設定で自動的に再起動します。 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### 信号品質

  - **SNR** は通信リンクの品質を反映します。通常のデバイスは -7 dB 以上で動作します。SNR が -10 dB 未満のデバイスは性能が低いことを示します。

  - **RSSI** はデバイスとその周囲の環境の両方によって決まります。通常のデバイスは -110 dBm 以上で動作します。RSSI が -115 dBm 未満のデバイスは性能が低いと見なされます。 

      最良の信号効果を得るために、開けていて障害物が少なく、干渉の少ない場所でデバイスを使用してください。

### ポゴピン定義

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/PogoPin4.png" alt="pir" width={900} height="auto" /></p>

## リソース

- [Meshtastic ドキュメント](https://meshtastic.org/docs/introduction/)
- [SenseCAP T1000 Tracker データシート](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker_T1000_Datasheet.pdf)
- [UN38.3](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/UN38.3.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
