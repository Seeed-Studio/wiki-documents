---
description: Meshtastic用SenseCAP Card Tracker T1000-Eの使用開始
title: T1000-E Trackerの使用開始
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/sensecap_t1000_e
sidebar_position: 2
last_update:
  date: 7/1/2024
  author: Jessie
---

## ビデオチュートリアル

### パート1：開封とセットアップ

<iframe width="100%" height="500" src="https://www.youtube.com/embed/9sCHpWPSPcw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### パート2：ステータスインジケーター

<iframe width="100%" height="500" src="https://www.youtube.com/embed/8p34S_9DDEQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### パート3：新しいファームウェアのフラッシュ

<iframe width="100%" height="500" src="https://www.youtube.com/embed/li6DTOeXK3M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### パート4：トラブルシューティング手順

<iframe width="100%" height="500" src="https://www.youtube.com/embed/iWahTuXwYnU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 使用開始

`Meshtastic`アプリをダウンロード：

- [IOSアプリ](https://meshtastic.org/docs/category/apple-apps/)
- [Androidアプリ](https://meshtastic.org/docs/category/android-app/)

### デバイスの電源を入れる

一度押してデバイスの電源を入れると、上昇メロディーが鳴り、LEDライトが約1秒間点灯します。

:::tip
ボタンを押してもデバイスが反応しない場合は、まず充電してください。
:::

### アプリ経由で接続

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOSアプリ">

- Bluetoothパネルでターゲットデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- コードを入力し（デフォルトコードは`123456`）、`OK`をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Androidアプリ">

- `+`をクリックしてターゲットデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- コードを入力し（デフォルトコードは`123456`）、`OK`をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### パラメーターの設定

メッシュ通信を開始するには、地域を設定する必要があります。この設定はデバイスが使用する周波数範囲を制御し、地域の場所に応じて設定する必要があります。

<Tabs>
<TabItem value="ios" label="IOSアプリ">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Androidアプリ">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**地域リスト**

|**地域コード**|**説明**|**周波数範囲 (MHz)**|**デューティサイクル (%)**|**電力制限 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902．0 - 928.0|100|30|
|EU_868|欧州連合 868MHz|869．4 - 869.65|10|27|

より包括的なリストについては、[LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/)を参照してください。

:::info
**EU_868**は、1時間ごとの10%のデューティサイクル制限に従う必要があり、これは1時間のローリングベースで毎分計算されます。制限に達した場合、再び許可されるまでデバイスは送信を停止します。
:::

デバイスにLoRa地域を設定したので、ニーズに合わせて[LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/)の設定を続けることができます。

### センサー設定

|センサー|説明|
|-|-|
|温度|✅|
|光|現在アプリではサポートされていません|
|加速度計|続く予定|

**温度センサー設定**

<Tabs>
<TabItem value="ios" label="IOS App">

`Settings` -> `Telemetry(Sensors)` -> センサーを有効にする に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-ios.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

`Settings` -> `Telemetry(Sensors)` -> センサーを有効にする に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

**ブザーとLED設定**

||タイプ|出力PIN|
|-|-|-|
|ブザー|PWMブザー|25|
|LED|-|24|

<Tabs>
<TabItem value="ios" label="IOS App">

`設定` -> `外部通知` -> `GPIO` を有効にする -> `出力ピン GPIO` を設定する に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-en.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

`設定` -> `外部通知` -> `GPIO` を有効にする -> `出力ピン GPIO` を設定する に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

詳細については、[外部通知設定](https://meshtastic.org/docs/configuration/module/external-notification/)を確認してください。

:::tip
デバイス設定を更新した後、デバイスが再起動します。これには時間がかかる場合があります。
:::

## ファームウェアのフラッシュ

### ファームウェアバージョンの確認

`設定` -> `ファームウェア更新` に移動し、現在のファームウェアバージョンを確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/check-version.png" alt="pir" width={400} height="auto" /></p>

### <div class="danger">⚠️以下のファームウェアをフラッシュしないでください</div>

:::danger
T1000-E ファームウェア以外のファームウェアをフラッシュしないでください。デバイスがフリーズする可能性があります。
:::

以下のファームウェアはデバイスを破損させます：

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

#### ステップ 1: DFU モードに入る

<Tabs>
<TabItem value="method1" label="方法 1">

[Meshtastic Web Flasher](https://flasher.meshtastic.org/)にアクセスします。

デバイスをPCに接続し、デバイスを`Seeed Card Tracker T1000-E`に選択し、最新のファームウェアを選択して、`Flash`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-2.png" alt="pir" width={800} height="auto" /></p>

`Enter DFU Mode`をクリックすると、`T1000-E xxx`という名前のシリアルポートが表示されます。それをクリックして接続すると、緑色のLEDが点灯し、`T1000-E`という名前のドライバが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-serial.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="method2" label="方法 2">

USBケーブルをPCに接続し、デバイスボタンを押し続けながら、充電ケーブルを**素早く**2回接続します。緑色のLEDが点灯し、`T1000-E`という名前のドライバが表示されます。

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

この処理には時間がかかる場合があります。ドライブが消えるまで待ち、その後シリアルモニターを開いて消去プロセスを完了します。

#### ステップ 3: ファームウェアのフラッシュ

最新のファームウェアを選択し、`UF2`ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/down-uf2.png" alt="pir" width={800} height="auto" /></p>

UF2ファイルをDFUドライブにコピーします。ファイルがダウンロードされ、デバイスが再起動した後、ファームウェアがフラッシュされます。

## FAQ

- **デバイス名の確認方法**

 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)にアクセスしてください。<br/>

 `Open Serial Monitor`をクリックし、デバイスをPCに接続して、シリアルログを確認し、キーワード`using nodenum`を探してください。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name3.png" alt="pir" width={800} height="auto" /></p>

- **デバイスの再起動方法**

 ボタンを長押しし、その後充電ケーブルを接続してください。

## トラブルシューティング

### デバイスが起動しない

- デバイスを1〜2時間充電してください

- 充電ケーブルを交換してください

### デバイスがブートループに陥る

**説明:**

デバイスが繰り返し再起動し、シリアルポートが繰り返し接続・切断されます。

**解決方法:**

- ステップ1: 手動でDFUモードに入ってみてください：デバイスのボタンを長押しし、その後充電ケーブルを**素早く**2回接続すると、緑色のLEDが点灯します。

:::note
DFUモードに正常に入るには、この操作を素早く行う必要があります。複数回試す必要があるかもしれません。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

- ステップ2: [フラッシュ消去](https://wiki.seeedstudio.com/sensecap_t1000_e/#step-2-flash-erase)。

- ステップ3: [ファームウェアフラッシュ](https://wiki.seeedstudio.com/sensecap_t1000_e/#step-3-flash-firmware)。

### デバイスがブリック状態

**説明:**

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

PyPiでのインストールに問題がある場合や、ツールを修正したい場合は、この方法を使用してください。まず、このリポジトリをクローンして、そのフォルダに移動します。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意：以下のコマンドは `python3` を使用していますが、Windowsを使用している場合は、Windows版のPython 3.xのインストールでは依然として python.exe という名前を使用しているため、`python` に変更する必要があるかもしれません。

ホームディレクトリのユーザー空間にインストールするには：

```
pip3 install -r requirements.txt
python3 setup.py install
```

`pip3 install` の実行時に権限エラーが発生する場合、お使いの `pip3` が古いか、システムディレクトリにインストールしようとする設定になっています。その場合は `--user` フラグを使用してください：

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

システムディレクトリにインストールしたい場合（一般的には推奨されません）：

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

ユーティリティの自己完結型実行可能バイナリを生成するには（WindowsおよびMacOS）、以下のコマンドを実行してください：

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

.exe ファイルは `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` にあります（Windows の場合は `.exe` 付き）。
便利なように、%PATH% 内のディレクトリなど、他の場所にコピーまたは移動してください。

</TabItem>
</Tabs>

**Step2: ポート番号を確認する**

デバイスを PC に接続し、ポート番号を確認します。

例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**Step3: ブートローダーをフラッシュする**

ターミナルまたはコマンドプロンプトで、ブートローダーの zip パッケージをダウンロードしたディレクトリに移動し、以下のコマンドを実行します。デバイスの正しいポートに置き換えてください：

- **Windows の場合**：

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```

- **その他の場合**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

上記の手順を完了したら、この[手順](https://wiki.seeedstudio.com/sensecap_t1000_e/#flash-the-application-firmware)に従ってアプリケーションファームウェアをフラッシュできます。

**2) デバイスがDFUモードに入れないが、シリアルポートは検出できる場合**

- シリアルポートツールを開く

- ボーレートを`1200`に設定する

- デバイスを接続する
   接続時にライトが短時間点滅します。ライトが点灯し続けるまでこれを繰り返してください。これはデバイスがDFUモードに戻ったことを意味します。その後、[ブートローダーをフラッシュ](https://wiki.seeedstudio.com/sensecap_t1000_e/#flash-the-bootloader) -> [フラッシュを消去](https://wiki.seeedstudio.com/sensecap_t1000_e/#step-2-flash-erase) -> [ファームウェアをフラッシュ](https://wiki.seeedstudio.com/sensecap_t1000_e/#step-3-flash-firmware)してください。

<div class="video-container">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/reset%20via%20serial%20tool.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**3) デバイスがDFUモードに入れず、シリアルポートも表示されない場合**

- 充電ケーブルを取り外し、バッテリーが完全に放電するまで数日間デバイスを放置してから、充電ケーブルを接続して再度ペアリングを試してください。

**4) 上記の手順がすべて機能しない場合は、技術サポートにお問い合わせください: support@sensecapmx.com**

### ファームウェアフラッシュの失敗

- **シリアルポートでデータを受信しない**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 デバイスがDFUモードになっているかを確認してください。デバイスがDFUモードの時は緑色のライトが点灯し続けます。

- **シリアルポートを開けない**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 ポートが正しいかを確認するか、別のポートを試してください。

## リソース

[Meshtastic Doc](https://meshtastic.org/docs/introduction/)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
