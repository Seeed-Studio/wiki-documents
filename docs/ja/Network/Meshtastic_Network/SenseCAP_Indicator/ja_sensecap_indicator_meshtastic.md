---
description: SenseCAP Indicator for Meshtastic の使用開始
title: Indicator for Meshtastic の使用開始
keywords:
- Meshtastic
- Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-page_1.webp
slug: /ja/sensecap_indicator_meshtastic
last_update:
  date: 12/3/2024
  author: Michelle Huang
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

SenseCAP Indicator は、[Meshtastic®](https://meshtastic.org/) 向けに設計された 4 インチタッチスクリーンデバイスで、ESP32 と RP2040 のデュアル MCU を搭載し、Wi-Fi、BLE、LoRa® をサポートしています。オープンソースの強力な IoT 開発プラットフォームです。

## 概要

### 特徴

- **Meshtastic サポート：** Meshtastic ファームウェアがプリフラッシュされており、電源を入れるだけですぐに動作します。Meshtastic Flasher を使用してファームウェアをアップグレードすることも可能です。<br/>
- **デュアル MCU と豊富な GPIO：** 強力な ESP32S3 と RP2040 デュアル MCU、および 400 以上の Grove 互換 GPIO を搭載し、柔軟な拡張オプションを提供します。<br/>
- **IoT 接続用ローカル LoRa® ハブ：** Semtech SX1262 LoRa® チップを統合し、チュートリアルを通じて LoRaWAN® シングルチャネルゲートウェイに変換できます。または、Wi-Fi 経由で LoRa® デバイスを Matter などの人気 IoT プラットフォームに接続できます。<br/>
- **完全オープンソースプラットフォーム：** 広範な ESP32 と Raspberry Pi オープンソースエコシステムを活用し、無限のアプリケーション可能性を提供します。<br/>
- **複数のアプリケーションシナリオに適用：** Meshtastic デスクトップノードやカーノード、LoRaWAN® シングルチャネルゲートウェイとして使用できます。

### 仕様

|スクリーン|3.95 インチ、静電容量式 RGB タッチスクリーン|
| :- | :- |
|**スクリーン解像度**|480 x 480 ピクセル|
|**電源供給**|5V-DC、1A|
|**バッテリー**|N/A|
|**プロセッサ**|<p>**ESP32-S3：** Xtensa® デュアルコア 32 ビット最大 240 MHz</p><p>**RP2040：** デュアル ARM Cortex-M0+ 最大 133MHz</p>|
|**フラッシュ**|<p>**ESP32-S3：** 8MB</p><p>**RP2040：** 2MB</p>|
|**外部ストレージ**|最大 32GB Micro SD カードをサポート（別売り）|
|**Wi-Fi**|802.11b/g/n、2.4GHz|
|**Bluetooth**|Bluetooth 5.0 LE|
|**LoRa(SX1262**)|862-930MHz をサポート|
|**ブザー（未開発）**|MLT-8530、共振周波数：2700Hz|
|**認証**|CE/FCC|

### ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/HO-114993532.png" alt="pir" width={800} height="auto" /></p>

## 使用開始
:::danger note
デバイスが以下の状態にある場合は、手動で再起動または電源を切らないでください。そうしないとデバイスが故障する可能性があります。
1. メッセージ送信プロセスが完了していない
2. 設定中
:::

### アプリケーションファームウェアのフラッシュ

:::caution note
ファームウェアをフラッシュする前に、購入したインジケータが Meshtastic 対応バージョンであることを確認してください。Meshtastic と互換性のないインジケータに Meshtastic ファームウェアをフラッシュしないでください。これによりハードウェアが損傷する可能性があります。ファームウェアの更新に `NRF-OTA を使用しないでください`。デバイスが完全に故障する可能性があります。
:::

**ビデオ説明**

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/55Sz8kHSyV4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[Meshtastic Web Flasher](https://flasher.meshtastic.org/) にアクセスしてください。

ターゲットデバイスを `Seeed SenseCAP Indicator` に選択し、最新のファームウェアを選択して、`Flash` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-flash.png" alt="pir" width={800} height="auto" /></p>

USB ケーブルを接続しながらボタンを押し続けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/press-button.png" alt="pir" width={400} height="auto" /></p>

`Full Erase and Install` を有効にし、`Erase Flash and Install` をクリックします。

2 つのポートが表示されるので、`USB serial port` を選択して `Connect` をクリックします。

:::caution note
INDICATOR RP2040 ではなく、`USB Serial` を選択してください。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect11.png" alt="pir" width={800} height="auto" /></p>

### GPS ファームウェアのフラッシュ（オプション）

SenseCAP Indicator には GPS が内蔵されていないため、GPS 位置を取得するには [Grove GPS モジュール](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html) が必要です。<br/>
GPS モジュールを Grove ポートに接続してから、GPS ファームウェアをフラッシュします。

- **[GPS ファームウェアダウンロード](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/meshtastic_gps.ino.uf2)**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-connect.png" alt="pir" width={800} height="auto" /></p>

針を使用してこの内部ボタンを長押しし、付属の USB Type-C ケーブルでデバイスを PC に接続し、接続後にボタンを離します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png" alt="pir" width={600} height="auto" /></p>

`UF2` ファイルをダウンロードし、`RPI-RP2` ドライブにコピーします。ファイルがダウンロードされ、デバイスが再起動した後、ファームウェアがフラッシュされます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png" alt="pir" width={600} height="auto" /></p>

`Meshtastic` アプリをダウンロード：

- [IOS App](https://meshtastic.org/docs/category/apple-apps/)
- [Android App](https://meshtastic.org/docs/category/android-app/)

### アプリ経由での接続

- デバイスの電源を入れると、デバイスページに現在のデバイスの MAC アドレスが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name4.png" alt="pir" width={700} height="auto" /></p>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS アプリ">

- Bluetooth パネルでターゲットデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- コードを入力し、`Pair` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair111.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">

- `+` をクリックしてターゲットデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- コード（デフォルトコードは `123456`）を入力し、`OK` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### パラメータの設定

メッシュ通信を開始するには、地域を設定する必要があります。この設定により、デバイスが使用する周波数範囲が制御され、地域の場所に応じて設定する必要があります。

<Tabs>
<TabItem value="ios" label="IOS アプリ">

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

より包括的なリストについては、[国別 LoRa 地域](https://meshtastic.org/docs/configuration/region-by-country/) を参照してください。

:::info
**EU_868** は、1 時間のローリングベースで毎分計算される 10% の時間デューティサイクル制限に従う必要があります。制限に達すると、再び許可されるまでデバイスは送信を停止します。
:::

デバイスに LoRa 地域を設定したので、ニーズに合わせて [LoRa 設定](https://meshtastic.org/docs/configuration/radio/lora/) の設定を続けることができます。

### キーボード

:::tip note
バージョン 2.5.xx（工場出荷時ファームウェアは v2.5.11）とバージョン 2.6.xx 以降のキーボード使用方法は異なります。現在のファームウェアバージョンに応じて以下を確認してください。
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

#### RP2040 部分

RP2040 はまだ開発されていないため、`ブザー`/`SD カード`/`マップ` 機能はまだ利用できません。Meshtastic と協力して最適化を進めています。

#### 役割選択

:::caution
`Repeater` 役割を選択しないでください。デバイスが繰り返し再起動する原因となります。
:::

#### GPS モジュール

GPS モジュールを接続していない場合は、`Meshtastic` アプリで GPS 機能を無効にしてください。そうしないと、デバイスが GPS モジュールを探し続け、画面の起動に長時間かかる原因となります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-module.png" alt="pir" width={600} height="auto" /></p>
