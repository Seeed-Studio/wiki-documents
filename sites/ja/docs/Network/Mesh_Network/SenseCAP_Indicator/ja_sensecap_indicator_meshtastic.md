---
description: Meshtastic 用 SenseCAP Indicator の使用を開始する
title: Meshtastic 用 Indicator 入門
keywords:
  - Meshtastic
  - Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-page_1.webp
slug: /sensecap_indicator_meshtastic
sku: 114993532
last_update:
  date: 11/26/2026
  author: Advent Jiang
createdAt: '2024-10-29'
updatedAt: '2026-11-26'
url: https://wiki.seeedstudio.com/ja/sensecap_indicator_meshtastic/
---


<div className="table-center">
  <video width="730" height="500" controls autoPlay muted>
    <source
      src="https://media-cdn.seeedstudio.com/media/catalog/product/1/-/1-114993532_sensecap_indicator_for_meshtastic_lora__2.mp4"
      type="video/mp4"
    />
  </video>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1L-for-Meshtastic-p-6304.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

SenseCAP Indicator は、[Meshtastic®](https://meshtastic.org/) 用に設計された 4 インチタッチスクリーンデバイスで、ESP32 と RP2040 のデュアル MCU を搭載し、Wi-Fi、BLE、LoRa® をサポートします。オープンソースで強力な IoT 開発プラットフォームです。

## はじめに

### 特長

- **Meshtastic 対応:** Meshtastic ファームウェアがあらかじめ書き込まれており、電源を入れるだけですぐに動作します。Meshtastic Flasher を使用してファームウェアをアップグレードすることもできます。<br/>
- **デュアル MCU と豊富な GPIO:** 高性能な ESP32S3 と RP2040 のデュアル MCU を搭載し、400 以上の Grove 互換 GPIO により柔軟な拡張が可能です。<br/>
- **IoT 接続のためのローカル LoRa® ハブ:** Semtech SX1262 LoRa® チップを内蔵しており、チュートリアルに従うことで LoRaWAN® シングルチャネルゲートウェイに変換できます。あるいは、Wi-Fi 経由で LoRa® デバイスを Matter などの一般的な IoT プラットフォームに接続できます。<br/>
- **完全オープンソースプラットフォーム:** 充実した ESP32 および Raspberry Pi のオープンソースエコシステムを活用して、無限のアプリケーションの可能性を実現できます。<br/>
- **多様なアプリケーションシナリオに対応:** Meshtastic のデスクトップノードや車載ノードとして、また LoRaWAN® シングルチャネルゲートウェイとして使用できます。

### 仕様

|Screen|3.95 インチ、静電容量式 RGB タッチスクリーン|
| :- | :- |
|**Screen Resolution**|480 x 480 ピクセル|
|**Power Supply**|5V-DC, 1A|
|**Battery**|N/A|
|**Processor**|<p>**ESP32-S3:** Xtensa® デュアルコア 32-bit 最大 240 MHz</p><p>**RP2040:** デュアル ARM Cortex-M0+ 最大 133MHz</p>|
|**Flash**|<p>**ESP32-S3:** 8MB</p><p>**RP2040:** 2MB</p>|
|**External Storage**|最大 32GB の Micro SD カードに対応（別売）|
|**Wi-Fi**|802.11b/g/n, 2.4GHz|
|**Bluetooth**|Bluetooth 5.0 LE|
|**LoRa(SX1262**)|862-930MHz 対応|
|**Buzzer(Not developed yet)**|MLT-8530, 共振周波数：2700Hz|
|**Certification**|CE/FCC|

### ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/HO-114993532.png" alt="pir" width={800} height="auto" /></p>

## クイックスタート
:::danger note
デバイスが以下の状態にあるときは、手動で再起動したり電源を切ったりしないでください。そうしないとデバイスが故障する可能性があります。
1. メッセージ送信処理が完了していない
2. 設定中である
:::

### アプリケーションファームウェアの書き込み

:::caution note
ファームウェアを書き込む前に、ご購入いただいた Indicator が Meshtastic 用バージョンであることを必ず確認してください。Meshtastic に対応していない Indicator に Meshtastic ファームウェアを書き込まないでください。ハードウェアの損傷を引き起こす可能性があります。ファームウェアの更新には `don't use NRF-OTA` を使用しないでください。デバイスが完全に動作不能になるおそれがあります。
:::

**動画による手順説明**

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/55Sz8kHSyV4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[Meshtastic Web Flasher](https://flasher.meshtastic.org/) にアクセスします。

対象デバイスとして `Seeed SenseCAP Indicator` を選択し、最新のファームウェアを選んでから `Flash` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-flash.png" alt="pir" width={800} height="auto" /></p>

ボタンを押し続けたまま、USB ケーブルを接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/press-button.png" alt="pir" width={400} height="auto" /></p>

`Full Erase and Install` を有効にし、`Erase Flash and Install` をクリックします。

2 つのポートが表示されるので、`USB serial port` を選択して `Connect` をクリックします。

:::caution note
INDICATOR RP2040 ではなく、必ず `USB Serial` の方を選択してください。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect11.png" alt="pir" width={800} height="auto" /></p>

### GPS ファームウェアの書き込み（オプション）

SenseCAP Indicator には GPS が内蔵されていないため、GPS 位置情報を取得するには [Grove GPS Module](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html) が必要です。<br/>
GPS モジュールを Grove ポートに接続し、GPS ファームウェアを書き込みます。

- **[GPS ファームウェアのダウンロード](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/meshtastic_gps.ino.uf2)**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-connect.png" alt="pir" width={800} height="auto" /></p>

針などを使ってこの内部ボタンを長押しし、その状態で付属の USB Type-C ケーブルでデバイスを PC に接続し、接続されたらボタンを離します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png" alt="pir" width={600} height="auto" /></p>

`UF2` ファイルをダウンロードし、それを `RPI-RP2` ドライブにコピーします。ファイルのコピー完了後、デバイスが再起動するとファームウェアの書き込みが行われます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png" alt="pir" width={600} height="auto" /></p>

`Meshtastic` アプリをダウンロードします：

- [IOS アプリ](https://meshtastic.org/docs/category/apple-apps/)
- [Android アプリ](https://meshtastic.org/docs/category/android-app/)

### アプリ経由で接続

- デバイスの電源を入れると、デバイス画面に現在のデバイスの MAC アドレスが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name4.png" alt="pir" width={700} height="auto" /></p>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS アプリ">

- Bluetooth パネルで対象デバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- コードを入力し、`Pair` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair111.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">

- `+` をクリックし、対象デバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-choose-new.png" alt="pir" width={600} height="auto" /></p>

- コード（デフォルトコードは `123456`）を入力し、`OK` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-click-ok-new.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### パラメータの設定

メッシュ上で通信を開始するには、まずリージョンを設定する必要があります。この設定はデバイスが使用する周波数帯域を制御し、自分がいる地域に合わせて設定する必要があります。

<Tabs>
<TabItem value="ios" label="IOS アプリ">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

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

より包括的な一覧については、[LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) を参照してください。

:::info
**EU_868** は、1 時間あたり 10% のデューティサイクル制限を順守する必要があり、ローリング 1 時間ベースで毎分計算されます。この制限に達すると、再び許可されるまでデバイスは送信を停止します。
:::

デバイスで LoRa リージョンを設定したら、自分の用途に合わせて任意の [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) の設定を続けることができます。

### キーボード

:::tip note
バージョン 2.5.xx（工場出荷時ファームウェアは v2.5.11）と 2.6.xx 以降のバージョンでは、キーボードの使い方が異なります。現在のファームウェアバージョンに応じて、以下を確認してください。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-ve.png" alt="pir" width={400} height="auto" /></p>

#### バージョン 2.5.xx の場合

<div class="table-center">
<iframe width="500" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-usage.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

#### バージョン 2.6 以降の場合

<div class="table-center">
<iframe width="500" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-usage2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### FAQ

#### RP2040 パート

RP2040 はまだ開発中のため、`buzzer` / `SD card` / `map` 機能はまだ利用できません。現在、Meshtastic と協力して最適化を進めています。

#### ロールの選択

:::caution
`Repeater` ロールは絶対に選択しないでください。デバイスが繰り返し再起動する原因となります。
:::

#### GPS モジュール

GPS モジュールを接続していない場合は、`Meshtastic` アプリで GPS 機能を無効にしてください。そうしないと、デバイスは GPS モジュールを探し続け、画面の起動に非常に長い時間がかかる原因となります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-module.png" alt="pir" width={600} height="auto" /></p>

#### 他のノード上で自分の位置がずれて表示されるのはなぜですか？

これは想定された動作であり、GPS やハードウェアの故障ではありません。各チャンネルには **Position precision** 設定があり、デフォルトでは **13 bits** に設定されています。この設定により、あなたがブロードキャストする位置はすべて約 ±2.9 km のグリッドに丸められます（共有チャンネル向けのプライバシー保護のデフォルト）。一方、あなた自身のデバイスでは Bluetooth 経由でフル精度の測位結果が表示されるため、自分の位置は正確に見えますが、他のノードからは位置がずれて見えます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS/meshtastic-faq-precise-location-off.png" alt="Precise location off, slider at ±2.9 km" width={600} height="auto" /></p>

フル精度で送信するには、**すべての**デバイスで有効にする必要があります：

1. Meshtastic アプリで **Channels** を開き、使用しているチャンネルをタップします。
2. **Precise location** をオンにします（precision を 32 = フル精度 に設定）。
3. 各デバイスで同じ操作を繰り返します — この設定は送信側のデバイスに対して有効になります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS/meshtastic-faq-precise-location-on.jpg" alt="Precise location on (full precision)" width={600} height="auto" /></p>

CLI の代替方法：`meshtastic --ch-set module_settings.position_precision 32 --ch-index 0`

**注意（ファームウェア 2.8 以降）：** パブリックチャンネル（キーなし、デフォルトキー、または 1 バイトキー）は 15 bits（約 729 m）に制限されます。フル精度を使用するには、**ランダムキーを使用したプライベートチャンネル**を利用してください。

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

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>