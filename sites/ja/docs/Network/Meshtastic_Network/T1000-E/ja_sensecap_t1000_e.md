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
  date: 09/01/2026
  author: Advent Jiang
createdAt: '2024-07-24'
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/ja/sensecap_t1000_e/
---
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

:::danger note
デバイスが以下の状態にあるときは、手動で再起動したり電源を切ったりしないでください。そうしないとデバイスが故障する可能性があります。

1. メッセージ送信プロセスが完了していない
2. 設定中である
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

### パート 3: 新しいファームウェアの書き込み

:::caution note
ファームウェアを書き込む前に、`T1000-E for Meshtastic` を購入していることを確認してください。Meshtastic をサポートしていない他のトラッカーモデルにはファームウェアを書き込まないでください。また、ファームウェアの更新に `don't use NRF-OTA` を使用しないでください。デバイスが完全に故障する可能性があります。
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

ボタンを 1 回押してデバイスの電源を入れます。上昇するメロディーが鳴り、LED ライトが約 1 秒間点灯します。

:::tip
ボタンを押してもデバイスが反応しない場合は、まず充電してください。急速充電器は使用しないでください。
:::

### アプリ経由で接続する

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS アプリ">

- Bluetooth パネルで対象デバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/device_select123.jpeg" alt="pir" width={300} height="auto" /></p>

- コード（デフォルトコードは `123456`）を入力し、`OK` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/pairing_code123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">

- `+` をクリックし、対象デバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-choose-new.png" alt="pir" width={600} height="auto" /></p>

- コード（デフォルトコードは `123456`）を入力し、`OK` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-click-ok-new.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### LoRa の設定

メッシュ上で通信を開始するには、リージョンを設定する必要があります。この設定はデバイスが使用する周波数帯を制御し、お住まいの地域に合わせて設定する必要があります。

<Tabs>
<TabItem value="ios" label="IOS アプリ">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/configure_LoRa123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-region-new.png" alt="pir" width={300} height="auto" /></p>

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
**EU_868** は、1 時間あたり 10% のデューティサイクル制限を順守する必要があり、1 分ごとに直近 1 時間を対象として計算されます。この制限に達すると、再び許可されるまでデバイスは送信を停止します。
:::

デバイスで LoRa リージョンを設定したら、ニーズに合わせて任意の [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) を続けて設定できます。

## 詳細設定

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

    デバイスが一覧に表示されます。クリックして接続します。接続が成功すると、Web サイト上でデバイスのステータスを直接確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### センサーの設定

|センサー|説明|
|-|-|
|Temperature|✅|
|Light|現在アプリではサポートされていません|
|Accelerometer|今後対応予定|

**温度センサー設定**

<Tabs>
<TabItem value="ios" label="IOS アプリ">

`Settings` -> `Telemetry(Sensors)` -> センサーを有効化、の順に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/temp_sensor123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">

`Settings` -> `Telemetry(Sensors)` -> センサーを有効化、の順に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/temp-an-new.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

**ブザーと LED の設定**

||タイプ|出力 PIN|
|-|-|-|
|ブザー|PWM ブザー|25|
|LED|-|24|

<Tabs>
<TabItem value="ios" label="IOS アプリ">

`Settings` -> `External Notification` -> `GPIO` を有効化 -> `Output Pin GPIO` を設定、の順に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/buzzer123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">

`Settings` -> `External Notification` -> `GPIO` を有効化 -> `Output Pin GPIO` を設定、の順に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

詳細については [External Notification Config](https://meshtastic.org/docs/configuration/module/external-notification/) を確認してください。

:::tip
デバイス設定を更新した後、デバイスは再起動します。完了までに少し時間がかかる場合があります。
:::

### 着信音の設定

`Settings` -> `Ringtone Config` に移動し、外部通知に使用したい RTTTL 着信音文字列を入力します。

<Tabs>
<TabItem value="ios" label="IOS アプリ">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/configure_ringtone123.png" alt="pir" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/ringtonex1.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="13" label="ゼルダの伝説: アイテム入手">

```plain
24:d=16,o=5,b=120:g,c6,d6,2g6
```
</TabItem>

<TabItem value="14" label="スーパーマリオ テーマ（ショート）">

```plain
24:d=4,o=5,b=100:16e6,16e6,32p,8e6,16c6,8e6,8g6,8p,8g
```
</TabItem>

<TabItem value="15" label="マリオ コイン">

```plain
24:d=8,o=6,b=200:b,e7
```
</TabItem>

<TabItem value="16" label="Nokia 着信音">

```plain
24:d=4,o=5,b=180:8e6,8d6,f#,g#,8c#6,8b,d,e,8b,8a,c#,e,2a
```
</TabItem>

<TabItem value="17" label="マリオ パワーアップ">

```plain
powerup:d=16,o=5,b=200:g,a,b,c6,d6,e6,f#6,g6,a6,b6,2c7
```
</TabItem>

<TabItem value="18" label="モールス信号 CQ">

```plain
24:d=16,o=6,b=120:8c,p,c,p,8c,p,c,4p,8c,p,8c,p,c,p,8c,8p
```
</TabItem>

</Tabs>

### GPS の設定

GPS を有効にしてください。より最新の位置情報を取得するために、更新間隔とブロードキャスト間隔を調整できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

IOS の場合は、`Accurate Location` をオンにしてください。そうしないと、位置情報がずれる可能性があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

### ブザーの設定

ブザーはデフォルトで有効になっています。ブザーを無効にしたい場合は、`Alert Message buzzer`、`Alert bell buzzer`、`Use PWM bizzer` を次のスクリーンショットのように設定してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/buzzer.png" alt="pir" width={200} height="auto" /></p>

## ファームウェアの書き込み

### ファームウェアバージョンの確認

`Settings` -> `Firmware Updates` に移動し、現在のファームウェアバージョンを確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/check_firmware123.png" alt="pir" width={400} height="auto" /></p>

### <div class="danger">⚠️以下のファームウェアは絶対に書き込まないでください</div>

:::danger
T1000-E ファームウェア以外のファームウェアを絶対に書き込まないでください。デバイスがフリーズする可能性があります。
:::

以下のファームウェアはデバイスをブリックさせます：

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
:::caution note
ファームウェアを書き込む前に、`T1000-E for Meshtastic` を購入したことを必ず確認してください。Meshtastic をサポートしていない他のトラッカーモデルにはファームウェアを書き込まないでください。また、ファームウェアの更新に `don't use NRF-OTA` を使用しないでください。デバイスが完全に動作不能になる可能性があります。
:::
#### ステップ 1: DFU モードに入る

<Tabs>
<TabItem value="method1" label="方法 1">

[Meshtastic Web Flasher](https://flasher.meshtastic.org/) にアクセスします。

デバイスを PC に接続し、デバイスを `Seeed Card Tracker T1000-E` に選択して最新のファームウェアを選び、`Flash` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-2.png" alt="pir" width={800} height="auto" /></p>

`Enter DFU Mode` をクリックすると、`T1000-E xxx` という名前のシリアルポートが表示されます。それをクリックして接続すると、緑色の LED が点灯し、`T1000-E` という名前のドライバが表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-serial.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="method2" label="方法 2">

USB ケーブルを PC に接続し、デバイスボタンを押し続けたまま、**素早く** 充電ケーブルを 2 回接続します。緑色の LED が点灯し、`T1000-E` という名前のドライバが表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={800} height="auto" /></p>

#### ステップ 2: Flash Erase

:::caution note
ファームウェアを書き込む前に、必ず先に消去用ファームウェアを書き込んでください！
:::

`trash` のアイコンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase1.png" alt="pir" width={800} height="auto" /></p>

消去用ファームウェアをダウンロードし、ドライブにコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase-uf2.png" alt="pir" width={800} height="auto" /></p>

この処理には時間がかかる場合があります。ドライブが消えるまで待ち、その後シリアルモニタを開いて消去プロセスを完了させます。

#### ステップ 3: ファームウェアの書き込み

最新のファームウェアを選択し、`UF2` ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/down-uf2.png" alt="pir" width={800} height="auto" /></p>

UF2 ファイルを DFU ドライブにコピーします。ファイルのコピー完了後、デバイスが再起動するとファームウェアの書き込みが完了します。

## FAQ

### デバイス名の確認方法

 [Meshtastic Web Flasher](https://flasher.meshtastic.org/) にアクセスします。<br/>

 `Open Serial Monitor` をクリックし、デバイスを PC に接続してシリアルログを確認し、`using nodenum` というキーワードを探します。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name3.png" alt="pir" width={800} height="auto" /></p>

### デバイスの再起動方法

 ボタンを押し続けたまま、充電ケーブルを接続します。

## トラブルシューティング

### デバイスの電源が入らない

- LED インジケータとブザーが動作していない場合、デバイスの電源が切れているように見えることがあります。以下の手順を実行する前に、`check the following parameters` を確認することをお勧めします。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/LEDLightEnable.png" alt="pir" width={600} height="auto" /></p>

- 動作確認済みの USB ケーブルを使用して、`charge the device` を 1〜2 時間連続して行い、システムを起動するのに十分なバッテリー残量があることを確認します。

:::note
リチウム電池は、電源が切れていてもゆっくりと自己放電します。そのため、長期間使用せずに保管されたデバイスは深刻に放電され、電源が入らなかったり、起動中に再起動を繰り返したりすることがあります。これはリチウム電池搭載デバイスに共通する現象であり、T1000-E の欠陥ではありません。
:::

- デバイスを長期間使用せずに保管していて起動できない場合は、最大 24 時間連続で充電してから再度試してください。24 時間の充電は深刻に放電されたバッテリーを回復させるためのものであり、通常の充電時間ではありません。

- それでも起動中に再起動を繰り返す場合は、ケーブルを外してデバイスを約 7 日間放置し、その後再度充電して電源投入を試してください。

- 深刻な放電を避けるため、バッテリー残量が空または非常に少ない状態で長期間保管しないでください。残量が 20% を下回ったら充電し、長期保管中も定期的に充電してください。

- 充電後もデバイスが反応しない場合は、次の手順で `perform a hard reset` を実行します。USB ケーブルを抜きます。ボタンを押し続けたまま、ボタンを押した状態で USB ケーブルを接続します。約 3 秒間そのまま押し続けてから離します。これによりシステムリセットが強制的に行われます。

- それでも改善しない場合は、`re-install the bootloader` を試してください。USB ケーブルをコンピュータに接続します。デバイスボタンを押し続けたまま、デバイスをコンピュータに接続し、PC にディスクが表示されるかどうか確認します。表示された場合は、[re-install the bootloader](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#flash-the-bootloader) を実行します。

### デバイスがブートループに陥る

**説明：**

デバイスが繰り返し再起動し、シリアルポートが接続と切断を繰り返します。

**解決方法：**

:::note
デバイスが長期間使用されていない場合、深刻に放電したバッテリーが原因で起動中に再起動を繰り返すこともあります。以下のファームウェア復旧を行う前に、[Device never turns on](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#デバイスの電源が入らない) のバッテリー回復手順を試してください。
:::

- ステップ 1: 手動で DFU モードに入ることを試します。デバイスボタンを押し続けたまま、**素早く** 充電ケーブルを 2 回接続します。緑色の LED が点灯します。

:::note
DFU モードに正常に入るには、この操作を素早く行う必要があります。複数回試す必要があるかもしれません。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

- ステップ 2: [Erase Flash](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#step-2-flash-erase) を実行します。

- ステップ 3: [Flash Firmware](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#step-3-flash-firmware) を実行します。

### デバイスがブリックした

#### 説明

デバイスが反応せず、LED も点灯せず、アプリとペアリングできません。

**1) デバイスがまだ DFU モードに入れる場合は、ブートローダーの書き込みを試してください。**

#### ブートローダーの書き込み

- [ブートローダーのダウンロード](https://files.seeedstudio.com/wiki/SenseCAP/lorahub/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip)

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash%20bootloader.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::danger note
ブートローダーを書き込んでいる間は、ケーブル接続が安定していることを確認し、書き込み処理中に **絶対に** ケーブルを抜かないでください。
:::

**ステップ 1: Adafruit-nrfutil のインストール**

Windows ユーザーは、「Win」キーと「r」キーを押し、ポップアップウィンドウに「cmd」と入力して「Enter」を押します。これでコマンドラインを開くことができます。

Mac ユーザーは、「Command」キーと「Space」キーを押して Spotlight を開きます。その後「termial」と入力して「Return」を押します。これでコマンドラインを開くことができます。

**前提条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

コマンドラインで、python と pip が正しくインストールされているかどうかを確認します。

```
python --version
```

```
python -m pip --version
```

その後、「Python xxx」および「pip xxx」と表示されるはずです。表示されない場合は、Python を再インストールしてみてください。

<Tabs>
<TabItem value="pypi" label="PyPI からインストール">

これは推奨される方法で、最新バージョンをインストールします：

```
pip3 install --user adafruit-nrfutil
```

インストールパスを確認します：

```
python -m pip show adafruit-nrfutil
```

これがインストール場所です：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

Windows ユーザーは、パスを手動で追加する必要がある場合があります。前のステップで表示されたインストール場所をコピーし、次のように追加します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

</TabItem>

<TabItem value="sou" label="ソースからインストール">

PyPi でのインストールに問題がある場合や、ツールを変更したい場合はこの方法を使用します。まずこのリポジトリをクローンし、そのフォルダに移動します。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意：以下のコマンドでは `python3` を使用していますが、Windows の場合は `python` に変更する必要があるかもしれません。これは、Windows 版の Python 3.x のインストールでは依然として python.exe という名前が使われているためです。

ホームディレクトリのユーザースペースにインストールするには：

```
pip3 install -r requirements.txt
python3 setup.py install
```

`pip3 install` 実行時にパーミッションエラーが発生する場合、`pip3` が古いか、システムディレクトリにインストールしようとする設定になっています。その場合は `--user` フラグを使用してください：

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

.exe ファイルは `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` にあります（Windows の場合は `.exe` が付きます）。
使いやすいように、%PATH% に含まれるディレクトリなど、別の場所にコピーまたは移動してください。

</TabItem>
</Tabs>

**ステップ2：ポート番号を確認する**

デバイスを PC に接続し、ポート番号を確認します。

Windows ユーザーの場合は、デバイスマネージャーを開き「ポート」に移動します。デバイス接続後に新しく表示されたポート番号が、そのデバイスのポート番号です。

Mac ユーザーの場合、例えば：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

Windows ユーザーの場合、例えば：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

**ステップ3：ブートローダーを書き込む**

ターミナルまたはコマンドプロンプトで、ブートローダーの zip パッケージをダウンロードしたディレクトリに移動し、次のコマンドを実行します。その際、デバイスに合った正しいポートに置き換えてください：

- **Windows の場合**：

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```

COMXX を自分の COM 番号に変更してください。例えば、デバイスが com6 の場合、コマンドを次のように変更します：

`adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 このコマンドを入力した後、一部のデバイスではポート番号が変わることがあります。そのため、インストールに失敗した場合は、もう一度ポート番号を確認してください。

- **その他の OS の場合**：

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

上記の手順を完了したら、この[ステップ](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#アプリケーションファームウェアを書き込む)に従ってアプリケーションファームウェアを書き込むことができます。

**2) デバイスが DFU モードに入れないが、シリアルポートは検出できる場合**

- シリアルポートツールを開きます

- ボーレートを `1200` に設定します。

- デバイスを接続します。
   接続するとライトが一瞬点滅します。ライトが点灯したままになるまでこれを繰り返してください。ライトが点灯したままになれば、デバイスが DFU モードに戻れたことを意味します。その後、[ブートローダーを書き込む](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#ブートローダーを書き込む) -> [フラッシュを消去](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#ステップ-2-フラッシュ消去) -> [ファームウェアを書き込む](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#ステップ-3-ファームウェア書き込み) を行います。

<div class="video-container">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/reset%20via%20serial%20tool.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**3) デバイスが DFU モードに入れず、シリアルポートも表示されない場合**

- デバイスボタンを押し続けたまま、充電ケーブルを接続します。PC にディスクが表示された後、シリアルポートが見える場合があります。

- それでもうまくいかない場合は、充電ケーブルを外し、バッテリーが完全に放電するまで数日間デバイスを放置してから、再度充電ケーブルを接続し、ペアリングを試してください。

**4) 上記のいずれの手順でも解決しない場合は、テクニカルサポート（support@sensecapmx.com）にお問い合わせください。**

### ファームウェアの書き込みに失敗する

- **シリアルポートでデータを受信しない**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 デバイスが DFU モードになっているか確認してください。DFU モードのときは緑色のライトが点灯し続けます。

- **シリアルポートを開けない**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 ポートが正しいか確認するか、別のポートを試してください。

### プライマリチャンネルで通信できない

デバイスが近くのノードと通信できない、またはメッセージを送信できない場合は、まず LoRa リージョンとモデムプリセットが周囲のノードと一致しているか確認してください。また、デフォルトの **PSK** が変更されていないかも確認する必要があります。プライマリチャンネルで PSK が異なると、そのチャンネル上の他のノードとデバイスが通信できなくなります。

この問題を見つける最も簡単な方法はモバイルアプリを使うことです。アプリを開き、対象デバイスに接続してから、`Settings` -> `Channels` に移動します。プライマリチャンネルを選択し、**PSK** の値を確認します。周囲のノードと異なる場合は、同じ PSK に更新してチャンネル設定を保存してください。

<Tabs>
<TabItem value="ios" label="iOS アプリ">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problems_ios.png" alt="Check primary channel PSK in the iOS app" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problem_and.png" alt="Check primary channel PSK in the Android app" width={900} height="auto" /></p>

</TabItem>
</Tabs>

**解決方法**

どの設定が変更されたかわからない場合は、[Factory Reset](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#factory-reset) ガイドに従ってデバイスをデフォルト設定に戻してください。PSK だけが変更された場合は、`AQ==` に戻してください。

### デバイスが自動的に電源オフになる

#### 説明

- デバイスの電源を入れた後、しばらくすると自動的に電源が切れる、または再起動します。
- シリアルポートのログがしばらく動作した後に停止します。

 これは、デバイスが次の状態にあるときに、手動で強制的に再起動または電源オフしたことが原因の可能性があります：メッセージ送信プロセスが完了していない、設定中である、など……

#### トラブルシューティング

 [ここをクリック](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#ステップ-2-フラッシュ消去)してフラッシュ消去を実行します。

### Factory Reset

デフォルト設定に戻したい場合は、Factory Reset を実行できます。Factory Reset を行う方法は 2 つあります。

- [ここをクリック](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#ステップ-2-フラッシュ消去)してデバイスをフラッシュ消去します。その後、最新のファームウェアを書き込みます。

- アプリで `Factory Reset` ボタンをクリックします。デバイスは自動的に工場出荷時の設定で再起動します。
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### メッセージ通信の失敗

#### NodeDB リセット

NodeDB は、現在の Mesh ネットワークで検出されたノードに関する情報を保存するローカルデータベースです。特定のノードと通信できない状況に遭遇した場合、そのノードに対して nodedB に古い情報が保存されている可能性があります。更新する必要があります。

アプリを開いて対象デバイスに接続します。**Settings**->**Device**->**Device Config**->**Reset NodeDB** に進みます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/sending_failed123.png" alt="Device settings and Reset NodeDB button in the app" width={600} height="auto" /></p>

#### ユーザー情報の交換

各ノードは定期的に自分自身のノード情報を送信し、他のノードがメッシュ内でそれを「見て」「認識」できるようにします。2 つのノードが互いに通信できるようにするには、お互いのノード情報を交換する必要があります。リスト上の別のノードとプライベートメッセージを送受信できない場合は、アプリで手動で情報交換を促すことができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Device entry in Settings" width={300} height="auto" /></p>

#### 秘密鍵の再生成

2 つのノードが互いに通信できるようにするには、お互いの秘密鍵を知っている必要があります。あるノードがプライベートメッセージ送信に失敗し続ける場合は、そのノードの秘密鍵を再生成してみてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Device entry in Settings" width={600} height="auto" /></p>

不具合のあるデバイスを再起動して設定を有効にします。鍵を再生成した後は、他のデバイスがそのノードに再接続する必要があります。そのため、他のデバイスのノードリストからそのノードを削除しておくとよいでしょう。

:::note
他の LoRa チップとの通信に関する詳細は、こちらを参照してください：[link](https://meshtastic.org/docs/hardware/devices/seeed-studio/sensecap/card-tracker/)

:::

### 信号品質

- **SNR** は通信リンクの品質を反映します。通常のデバイスは -7 dB 以上で動作します。SNR が -10 dB 未満のデバイスは性能が低いことを示します。

- **RSSI** はデバイスとその周囲の環境の両方によって決まります。通常のデバイスは -110 dBm 以上で動作します。RSSI が -115 dBm 未満のデバイスは性能が低いと見なされます。

      最良の信号効果を得るために、開けていて障害物が少なく、干渉が最小限の場所でデバイスを使用してください。

### ポゴピン定義

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/PogoPin4.png" alt="pir" width={900} height="auto" /></p>

## リソース

- [Meshtastic ドキュメント](https://meshtastic.org/docs/introduction/)
- [SenseCAP T1000 Tracker データシート](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker_T1000_Datasheet.pdf)
- [UN38.3](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/UN38.3.zip)

## 技術サポート & 製品ディスカッション

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

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