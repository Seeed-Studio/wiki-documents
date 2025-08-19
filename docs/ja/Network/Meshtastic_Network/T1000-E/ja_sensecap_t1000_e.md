---
description: SenseCAP Card Tracker T1000-E を使用して Meshtastic を始める
title: T1000-E トラッカーの使い方
keywords:
- トラッカー
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/sensecap_t1000_e
sidebar_position: 2
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## ビデオチュートリアル

### パート 1: 開封とセットアップ

<iframe width="100%" height="500" src="https://www.youtube.com/embed/9sCHpWPSPcw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### パート 2: ステータスインジケーター

<iframe width="100%" height="500" src="https://www.youtube.com/embed/8p34S_9DDEQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### パート 3: 新しいファームウェアの書き込み

<iframe width="100%" height="500" src="https://www.youtube.com/embed/li6DTOeXK3M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### パート 4: トラブルシューティングの手順

<iframe width="100%" height="500" src="https://www.youtube.com/embed/iWahTuXwYnU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 始める

`Meshtastic` アプリをダウンロードしてください：

- [IOS アプリ](https://meshtastic.org/docs/category/apple-apps/)
- [Android アプリ](https://meshtastic.org/docs/category/android-app/)

### デバイスの電源を入れる

デバイスの電源を入れるには、ボタンを一度押してください。上昇するメロディーが鳴り、LED ライトが約 1 秒間点灯します。

:::tip
ボタンを押してもデバイスが反応しない場合は、まず充電してください。
:::

### アプリを使った接続

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS アプリ">

- Bluetooth パネルでターゲットデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- コード（デフォルトコードは `123456`）を入力し、`OK` をクリックしてデバイスを接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">

- `+` をクリックしてターゲットデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- コード（デフォルトコードは `123456`）を入力し、`OK` をクリックしてデバイスを接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### パラメータの設定

メッシュ通信を開始するには、地域を設定する必要があります。この設定はデバイスが使用する周波数範囲を制御し、地域に応じて設定する必要があります。

<Tabs>
<TabItem value="ios" label="IOS アプリ">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**地域リスト**

|**地域コード**|**説明**|**周波数範囲 (MHz)**|**デューティサイクル (%)**|**出力制限 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902\.0 - 928.0|100|30|
|EU\_868|欧州連合 868MHz|869\.4 - 869.65|10|27|

より包括的なリストについては、[LoRa 地域別リスト](https://meshtastic.org/docs/configuration/region-by-country/) を参照してください。

:::info
**EU_868** は、1 時間あたりのデューティサイクル制限 10% を守る必要があります。この制限は 1 時間のローリングベースで毎分計算されます。制限に達すると、デバイスは再び許可されるまで送信を停止します。
:::

デバイスで LoRa 地域を設定したら、必要に応じて [LoRa 設定](https://meshtastic.org/docs/configuration/radio/lora/) を構成することができます。

### センサー設定

|センサー|説明|
|-|-|
|温度|✅|
|光|現在アプリではサポートされていません|
|加速度計|今後対応予定|

**温度センサー設定**

<Tabs>
<TabItem value="ios" label="IOS アプリ">

`設定` -> `テレメトリ（センサー）` -> センサーを有効化 に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-ios.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">

`設定` -> `テレメトリ（センサー）` -> センサーを有効化 に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

**ブザーと LED 設定**

||タイプ|出力 PIN|
|-|-|-|
|ブザー|PWM ブザー|25|
|LED|-|24|

<Tabs>
<TabItem value="ios" label="IOS アプリ">

`設定` -> `外部通知` -> `GPIO` を有効化 -> `出力ピン GPIO` を設定 に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-en.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">

`設定` -> `外部通知` -> `GPIO` を有効化 -> `出力ピン GPIO` を設定 に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

詳細については、[外部通知設定](https://meshtastic.org/docs/configuration/module/external-notification/) を確認してください。

:::tip
デバイス設定を更新した後、デバイスは再起動します。これには時間がかかる場合があります。
:::

## ファームウェアの書き込み

### ファームウェアバージョンの確認

`Settings` -> `Firmware Updates` に移動し、現在のファームウェアバージョンを確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/check-version.png" alt="pir" width={400} height="auto" /></p>

### <div class="danger">⚠️以下のファームウェアを書き込まないでください</div>

:::danger
T1000-E ファームウェア以外のファームウェアを書き込まないでください。これによりデバイスがフリーズする可能性があります。
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

### アプリケーションファームウェアの書き込み

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Flash%20Firmware.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

#### ステップ 1: DFU モードに入る

<Tabs>
<TabItem value="method1" label="方法 1">

[Meshtastic Web Flasher](https://flasher.meshtastic.org/) にアクセスしてください。

デバイスを PC に接続し、デバイスを `Seeed Card Tracker T1000-E` に選択して最新のファームウェアを選び、`Flash` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-2.png" alt="pir" width={800} height="auto" /></p>

`Enter DFU Mode` をクリックすると、`T1000-E xxx` という名前のシリアルポートが表示されます。それをクリックして接続してください。緑色の LED が点灯し、`T1000-E` という名前のドライバーが表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-serial.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="method2" label="方法 2">

USB ケーブルを PC に接続し、デバイスのボタンを押し続けたまま、充電ケーブルを **素早く** 2回接続してください。緑色の LED が点灯し、`T1000-E` という名前のドライバーが表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={800} height="auto" /></p>

#### ステップ 2: フラッシュ消去

:::caution note
ファームウェアを書き込む前に、まず消去ファームウェアをフラッシュしてください！
:::

`ゴミ箱` のシンボルをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase1.png" alt="pir" width={800} height="auto" /></p>

消去ファームウェアをダウンロードしてドライバーにコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase-uf2.png" alt="pir" width={800} height="auto" /></p>

このプロセスには時間がかかる場合があります。ドライブが消えるのを待ち、次にシリアルモニターを開いて消去プロセスを完了してください。

#### ステップ 3: ファームウェアの書き込み

最新のファームウェアを選択し、`UF2` ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/down-uf2.png" alt="pir" width={800} height="auto" /></p>

UF2 ファイルを DFU ドライブにコピーします。ファイルがダウンロードされ、デバイスが再起動するとファームウェアが書き込まれるはずです。

## FAQ

- **デバイス名を確認する方法**

 [Meshtastic Web Flasher](https://flasher.meshtastic.org/) を訪問してください。<br/>

 `Open Serial Monitor` をクリックし、デバイスをPCに接続して、シリアルログを確認し、キーワード `using nodenum` を探します。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name3.png" alt="pir" width={800} height="auto" /></p>

- **デバイスを再起動する方法**

 ボタンを押し続けたまま、充電ケーブルを接続してください。

## トラブルシューティング

### デバイスが全く起動しない

- デバイスを1～2時間充電してください。

- 充電ケーブルを交換してください。

### デバイスがブートループに陥る

**説明:**

デバイスが繰り返し再起動し、シリアルポートが繰り返し接続および切断されます。

**解決策:**

- ステップ1: 手動でDFUモードに入ることを試みます。デバイスのボタンを押し続けたまま、充電ケーブルを**素早く**2回接続してください。緑色のLEDが点灯します。

:::note
DFUモードに成功するには、この操作を迅速に行う必要があります。複数回試す必要があるかもしれません。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

- ステップ2: [フラッシュの消去](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#step-2-flash-erase)。

- ステップ3: [ファームウェアのフラッシュ](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#step-3-flash-firmware)。

### デバイスが壊れた（ブリック状態）

**説明:**

デバイスが応答せず、LEDが点灯せず、アプリとペアリングできません。

**1) デバイスがまだDFUモードに入れる場合、ブートローダーをフラッシュしてください。**

#### ブートローダーのフラッシュ

- [ブートローダーダウンロード](https://files.seeedstudio.com/wiki/SenseCAP/lorahub/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip)

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash%20bootloader.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::danger note
ブートローダーをフラッシュする際は、ケーブル接続が安定していることを確認し、フラッシュプロセス中に**絶対に**接続を切断しないでください。
:::

**ステップ1: Adafruit-nrfutil のインストール**

**前提条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

<Tabs>
<TabItem value="pypi" label="PyPIからのインストール">

最新バージョンをインストールする推奨方法です:

```
pip3 install --user adafruit-nrfutil
```

</TabItem>

<TabItem value="sou" label="ソースからのインストール">

PyPIでのインストールに問題がある場合やツールを変更したい場合に使用します。まず、このリポジトリをクローンしてフォルダに移動します。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意: 以下のコマンドでは `python3` を使用していますが、Windowsでは `python` に変更する必要がある場合があります。WindowsのPython 3.xインストールでは依然として `python.exe` という名前を使用しています。

ホームディレクトリのユーザースペースにインストールするには:

```
pip3 install -r requirements.txt
python3 setup.py install
```

`pip3 install` 実行時に権限エラーが発生する場合、`pip3` が古いか、システムディレクトリにインストールしようとしている可能性があります。その場合は `--user` フラグを使用してください:

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

システムディレクトリにインストールする場合（一般的には推奨されません）:

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

WindowsおよびMacOSでユーティリティの自己完結型実行可能バイナリを生成するには、以下のコマンドを実行します:

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

`.exe` ファイルは `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` にあります（Windowsの場合は `.exe` が付きます）。
便利なように、%PATH% にあるディレクトリにコピーまたは移動してください。

</TabItem>
</Tabs>

**ステップ2: ポート番号を確認する**

デバイスをPCに接続し、ポート番号を確認してください。

例:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**ステップ3: ブートローダーをフラッシュする**

ターミナルまたはコマンドプロンプトで、ブートローダーZIPパッケージをダウンロードしたディレクトリに移動し、以下のコマンドを実行します。デバイスに適したポートを置き換えてください。

- **Windowsの場合**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```

- **その他の場合**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

上記の手順を完了したら、この[手順](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#flash-the-application-firmware)に従ってアプリケーションファームウェアをフラッシュしてください。

**2) デバイスがDFUモードに入れないが、シリアルポートが検出される場合。**

- シリアルポートツールを開きます。

- ボーレートを `1200` に設定します。

- デバイスを接続します。
   接続時にライトが一瞬点滅します。ライトが点灯し続けるまで試行を繰り返してください。これによりデバイスがDFUモードに戻ることを意味します。その後、[ブートローダーをフラッシュ](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#flash-the-bootloader) -> [フラッシュの消去](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#step-2-flash-erase) -> [ファームウェアのフラッシュ](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#step-3-flash-firmware)を行います。

<div class="video-container">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/reset%20via%20serial%20tool.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**3) デバイスが DFU モードに入らず、シリアルポートが表示されない場合**

- 充電ケーブルを外し、数日間放置してバッテリーが完全に放電するまで待ってから、再び充電ケーブルを接続して再ペアリングを試してください。

**4) 上記の手順がすべてうまくいかない場合は、テクニカルサポートにご連絡ください：support@sensecapmx.com**

### ファームウェアの書き込みに失敗しました

- **シリアルポートでデータが受信されない**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 デバイスがDFUモードにあるか確認してください。デバイスがDFUモードにある場合、緑色のライトが点灯します。

- **シリアルポートを開けない**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 ポートが正しいか確認するか、別のポートを試してください。

## リソース

[Meshtastic ドキュメント](https://meshtastic.org/docs/introduction/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
