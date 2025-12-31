---
description: Meshtastic 対応 SenseCAP Card Tracker T1000-E の使用開始
title: T1000-E トラッカーの使用開始
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/sensecap_t1000_e
sidebar_position: 2
last_update:
  date: 12/24/2025
  author: Michelle Huang
---
:::danger note
デバイスが以下の状態にある場合は、手動で再起動または電源を切らないでください。そうしないとデバイスが故障する可能性があります。
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

### パート 3: 新しいファームウェアのフラッシュ

:::caution note
ファームウェアをフラッシュする前に、`T1000-E for Meshtastic` を購入したことを確認してください。Meshtastic をサポートしていない他のトラッカーモデルにファームウェアをフラッシュしないでください。ファームウェアの更新に `NRF-OTA` を使用しないでください。デバイスが完全に故障する可能性があります。
:::

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/li6DTOeXK3M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### パート 4: トラブルシューティング手順

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/iWahTuXwYnU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 使用開始

`Meshtastic` アプリをダウンロード：

- [IOS アプリ](https://meshtastic.org/docs/category/apple-apps/)
- [Android アプリ](https://meshtastic.org/docs/category/android-app/)

### デバイスの電源を入れる

一度押してデバイスの電源を入れると、上昇メロディーが鳴り、LED ライトが約 1 秒間点灯します。

:::tip
ボタンを押してもデバイスが反応しない場合は、まず充電してください。急速充電器は使用しないでください。
:::

### アプリ経由で接続

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS アプリ">

- Bluetooth パネルでターゲットデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- コードを入力し（デフォルトコードは `123456`）、`OK` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">

- `+` をクリックしてターゲットデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- コードを入力し（デフォルトコードは `123456`）、`OK` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### ウェブサイト経由で接続

ウェブサイトでテキストメッセージを送信し、他のノードと通信したい場合は、デバイスを [Meshtastic ウェブサイト](https://client.meshtastic.org/messages/broadcast/0) に接続できます。

  ステップ 1: ウェブサイトを開く

[こちらをクリック](https://client.meshtastic.org/messages/broadcast/0) してウェブサイトにアクセスします。
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  ステップ 2: 新しいデバイスを追加

    "+ New Connection" をクリックします。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    接続方法は 2 つあります。お好みの方法を選択できます。

 方法 1: Bluetooth 経由

    Bluetooth 方法を選択します。ポップアップウィンドウでデバイス ID を選択します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 方法 2: シリアル経由

    シリアル方法を選択します。デバイスマネージャーを開いて、デバイスが接続されているポートを確認します。ポップアップウィンドウでそのポートを選択します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    デバイスがリストに表示されます。クリックして接続します。接続が成功すると、ウェブサイト上でデバイスのステータスを直接確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### LoRa の設定

メッシュ通信を開始するには、地域を設定する必要があります。この設定は、デバイスが使用する周波数範囲を制御し、地域の場所に応じて設定する必要があります。

<Tabs>
<TabItem value="ios" label="IOS アプリ">

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

より包括的なリストについては、[国別 LoRa 地域](https://meshtastic.org/docs/configuration/region-by-country/) を参照してください。

:::info
**EU_868** は、1 時間のローリングベースで毎分計算される 10% の時間デューティサイクル制限に従う必要があります。制限に達すると、再び許可されるまでデバイスは送信を停止します。
:::

デバイスで LoRa 地域を設定したので、ニーズに合わせて [LoRa 設定](https://meshtastic.org/docs/configuration/radio/lora/) を構成できます。

### センサーの設定

|センサー|説明|
|-|-|
|温度|✅|
|光|現在アプリではサポートされていません|
|加速度計|継続予定|

**温度センサー設定**

<Tabs>
<TabItem value="ios" label="IOS アプリ">

`Settings` -> `Telemetry(Sensors)` に移動し、センサーを有効にします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-ios.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">

`Settings` -> `Telemetry(Sensors)` に移動し、センサーを有効にします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

**ブザーと LED の設定**

||タイプ|出力ピン|
|-|-|-|
|ブザー|PWM ブザー|25|
|LED|-|24|

<Tabs>
<TabItem value="ios" label="IOS アプリ">

`Settings` -> `External Notification` に移動し、`GPIO` を有効にして、`Output Pin GPIO` を設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-en.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">

`Settings` -> `External Notification` に移動し、`GPIO` を有効にして、`Output Pin GPIO` を設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

詳細については、[外部通知設定](https://meshtastic.org/docs/configuration/module/external-notification/) を確認してください。

:::tip
デバイス設定を更新すると、デバイスが再起動し、時間がかかる場合があります。
:::

### GPS の設定

GPS を有効に設定してください。更新間隔とブロードキャスト間隔を調整して、より最新の位置情報を取得できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

IOS の場合は、`Accurate Location` をオンにしてください。そうしないと、測位が偏差する可能性があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

## ファームウェアのフラッシュ

### ファームウェアバージョンの確認

`Settings` -> `Firmware Updates` に移動し、現在のファームウェアバージョンを確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/check-version.png" alt="pir" width={400} height="auto" /></p>

### <div class="danger">⚠️以下のファームウェアをフラッシュしないでください</div>

:::danger
T1000-E ファームウェア以外のファームウェアをフラッシュしないでください。デバイスがフリーズする可能性があります。
:::

以下のファームウェアはデバイスを故障させます：

- nrf52_promicro_diy_tcxo<br/>
- nrf52_promicro_diy_xtal<br/>
- Dongle_nRF52840-pca10059-v1<br/>
- feather_diy<br/>
- TWC_mesh_v4<br/>
- wio-sdk-wm1110<br/>
- wio-tracker-wm1110<br/>
- xiao_ble

### アプリケーションファームウェアのフラッシュ

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Flash%20Firmware.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
:::caution note
ファームウェアをフラッシュする前に、`T1000-E for Meshtastic` を購入したことを確認してください。Meshtastic をサポートしていない他のトラッカーモデルにファームウェアをフラッシュしないでください。ファームウェアの更新に `NRF-OTA` を使用しないでください。デバイスが完全に故障する可能性があります。
:::
#### ステップ 1: DFU モードに入る

<Tabs>
<TabItem value="method1" label="方法 1">

[Meshtastic Web Flasher](https://flasher.meshtastic.org/)にアクセスします。

デバイスをPCに接続し、デバイスを`Seeed Card Tracker T1000-E`に選択し、最新のファームウェアを選択してから、`Flash`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-2.png" alt="pir" width={800} height="auto" /></p>

`Enter DFU Mode`をクリックすると、`T1000-E xxx`という名前のシリアルポートが表示されます。それをクリックして接続すると、緑色のLEDが点灯し、`T1000-E`という名前のドライバが表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-serial.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="method2" label="方法 2">

USBケーブルをPCに接続し、デバイスボタンを押し続けながら、充電ケーブルを**素早く**2回接続します。緑色のLEDが点灯し、`T1000-E`という名前のドライバが表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={800} height="auto" /></p>

#### ステップ 2: フラッシュ消去

:::caution note
ファームウェアをフラッシュする前に、まず消去ファームウェアをフラッシュしてください！
:::

`ゴミ箱`シンボルをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase1.png" alt="pir" width={800} height="auto" /></p>

消去ファームウェアをダウンロードし、ドライバにコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase-uf2.png" alt="pir" width={800} height="auto" /></p>

この処理には時間がかかる場合があります。ドライブが消えるまで待ってから、シリアルモニターを開いて消去プロセスを完了してください。

#### ステップ 3: ファームウェアのフラッシュ

最新のファームウェアを選択し、`UF2`ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/down-uf2.png" alt="pir" width={800} height="auto" /></p>

UF2ファイルをDFUドライブにコピーします。ファイルがダウンロードされ、デバイスが再起動した後、ファームウェアがフラッシュされるはずです。

## FAQ

### デバイス名の確認方法

 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)にアクセスします。<br/>

 `Open Serial Monitor`をクリックし、デバイスをPCに接続し、シリアルログを確認します。キーワードは`using nodenum`です。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name3.png" alt="pir" width={800} height="auto" /></p>

### デバイスの再起動方法

 ボタンを押し続けながら、充電ケーブルを接続します。

## トラブルシューティング

### デバイスが全く起動しない

- デバイスを1〜2時間充電してください

- 充電ケーブルを交換してください

- 電源が切れているように見えることがありますが、実際にはLEDとブザーが有効になっていないためです。以下のパラメータを確認してください：

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/LEDLightEnable.png" alt="pir" width={800} height="auto" /></p>

 - それでもうまくいかない場合は、デバイスボタンを押し続けながら充電ケーブルを接続し、PCにディスクがポップアップするかどうかを確認してください。そうであれば、[こちらをクリック](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#device-bricked)してブートローダーを再インストールしてください

### デバイスがブートループに陥る

**説明：**

デバイスが繰り返し再起動し、シリアルポートが繰り返し接続・切断されます。

**解決策：**

- ステップ 1: 手動でDFUモードに入ってみてください：デバイスボタンを押し続けながら、充電ケーブルを**素早く**2回接続します。緑色のLEDが点灯します。

:::note
DFUモードに正常に入るには、この操作を素早く行う必要があります。何度か試す必要があるかもしれません。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

- ステップ 2: [フラッシュ消去](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#step-2-flash-erase)を行います。

- ステップ 3: [ファームウェアのフラッシュ](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#step-3-flash-firmware)を行います。

### デバイスが故障した

#### 説明

デバイスが応答せず、LEDが点灯せず、アプリとペアリングできません。

**1) デバイスがまだDFUモードに入れる場合は、ブートローダーをフラッシュしてみてください**。

#### ブートローダーのフラッシュ

- [ブートローダーダウンロード](https://files.seeedstudio.com/wiki/SenseCAP/lorahub/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip)

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash%20bootloader.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::danger note
ブートローダーをフラッシュする際は、ケーブル接続が安定していることを確認し、フラッシュプロセス中は**絶対に**切断しないでください。
:::

**ステップ1: Adafruit-nrfutilのインストール**

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

PyPiでのインストールに問題がある場合やツールを変更したい場合は、この方法を使用してください。まず、このリポジトリをクローンし、そのフォルダに移動します。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意：以下のコマンドは`python3`を使用していますが、Windowsの場合、python 3.xのWindowsインストールではまだpython.exeという名前を使用しているため、`python`に変更する必要があるかもしれません。

ホームディレクトリのユーザー空間にインストールするには：

```
pip3 install -r requirements.txt
python3 setup.py install
```

`pip3 install`を実行する際に権限エラーが発生する場合、`pip3`が古いか、システムディレクトリにインストールしようとしています。その場合は`--user`フラグを使用してください：

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

システムディレクトリにインストールしたい場合（一般的には推奨されません）：

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

ユーティリティの自己完結型実行可能バイナリを生成するには（WindowsとMacOS）、以下のコマンドを実行します：

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

.exeは`Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil`にあります（Windowsの場合は`.exe`付き）。
便宜上、%PATH%内のディレクトリなど、他の場所にコピーまたは移動してください。

</TabItem>
</Tabs>

**ステップ2: ポート番号の確認**

デバイスをPCに接続し、ポート番号を確認します。

例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**ステップ3: ブートローダーのフラッシュ**

ターミナルまたはコマンドプロンプトで、ブートローダーzipパッケージをダウンロードしたディレクトリに移動し、以下のコマンドを実行します。デバイスの正しいポートに置き換えてください：

- **Windows の場合**：

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```

- **その他の場合**：

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

上記の手順を完了したら、この[ステップ](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#flash-the-application-firmware)に従ってアプリケーションファームウェアをフラッシュできます。

**2) デバイスがDFUモードに入れないが、シリアルポートが検出される場合**。

- シリアルポートツールを開きます

- ボーレートを`1200`に設定します。

- デバイスを接続します。
   接続時にライトが短時間点滅します。ライトが点灯し続けるまでこれを繰り返してください。これはデバイスがDFUモードに戻ったことを意味します。その後、[ブートローダーのフラッシュ](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#flash-the-bootloader) -> [フラッシュ消去](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#step-2-flash-erase) -> [ファームウェアのフラッシュ](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#step-3-flash-firmware)を行います。

<div class="video-container">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/reset%20via%20serial%20tool.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**3) デバイスがDFUモードに入れず、シリアルポートも表示されない場合**

- デバイスボタンを押し続けながら、充電ケーブルを接続します。PCにディスクがポップアップした後、シリアルポートが表示される場合があります。

- それでもうまくいかない場合は、充電ケーブルを切断し、バッテリーが完全に消耗するまで数日間デバイスを放置してから、充電ケーブルを接続して再度ペアリングを試してください。

**4) 上記の手順がすべて機能しない場合は、技術サポートにお問い合わせください：support@sensecapmx.com**

### ファームウェアのフラッシュに失敗した

- **シリアルポートでデータが受信されない**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 デバイスがDFUモードになっているかを確認してください。デバイスがDFUモードの時は緑色のライトが点灯します。

- **シリアルポートを開けない**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 ポートが正しいかどうかを確認するか、別のポートを試してください。

 ### デバイスが自動的に電源オフになる

 #### 説明

 - デバイスの電源を入れた後、しばらくすると自動的に電源が切れたり再起動したりします。
 - シリアルポートログがしばらく実行された後、停止しました。

 これは、デバイスが次の状態にあるときに手動で強制的に再起動または電源オフした場合に発生する可能性があります：メッセージ送信プロセスが完了していない、設定中......

 #### トラブルシューティング

 [ここをクリック](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#step-2-flash-erase)してフラッシュ消去を実行してください。

 ### ファクトリーリセット
デフォルト設定に復元したい場合は、ファクトリーリセットを実行できます。ファクトリーリセットを実行する方法は2つあります。

- [ここをクリック](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#step-2-flash-erase)してデバイスのフラッシュ消去を実行してください。その後、最新のファームウェアを再フラッシュしてください。

- アプリの`Factory Reset`ボタンをクリックしてください。デバイスは工場出荷時設定で自動的に再起動します。
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### 信号品質

  - **SNR**は通信リンクの品質を反映します。通常のデバイスは通常-7 dB以上で動作します。SNRが-10 dB未満のデバイスは性能が悪いことを示します。

  - **RSSI**はデバイスとその周囲環境によって共同で決定されます。通常のデバイスは通常-110 dBm以上で動作します。RSSIが-115 dBm未満のデバイスは性能が悪いと考えられます。

      最高の信号効果を得るために、干渉が最小限の開放的で障害物のないエリアでデバイスを使用してください。

## リソース

- [Meshtastic Doc](https://meshtastic.org/docs/introduction/)
- [SenseCAP T1000 Tracker データシート](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker_T1000_Datasheet.pdf)


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
