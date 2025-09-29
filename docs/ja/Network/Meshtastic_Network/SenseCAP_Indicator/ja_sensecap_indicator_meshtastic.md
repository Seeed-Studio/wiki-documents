---
description: SenseCAP Indicator for Meshtastic の使用開始
title: Indicator for Meshtastic の使用開始
keywords:
- Meshtastic
- Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-page_1.webp
slug: /ja/sensecap_indicator_meshtastic
last_update:
  date: 10/29/2024
  author: Jessie
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
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

SenseCAP Indicator は、[Meshtastic®](https://meshtastic.org/) 向けに設計された4インチタッチスクリーンデバイスで、ESP32とRP2040のデュアルMCUを搭載し、Wi-Fi、BLE、LoRa® をサポートしています。オープンソースの強力なIoT開発プラットフォームです。

## 概要

### 特徴

- **Meshtastic サポート：** Meshtastic ファームウェアがプリフラッシュされており、電源を入れるだけですぐに動作します。Meshtastic Flasher を使用してファームウェアをアップグレードすることも可能です。<br/>
- **デュアル MCU と豊富な GPIO：** 強力な ESP32S3 と RP2040 デュアル MCU を搭載し、400以上の Grove 互換 GPIO により柔軟な拡張オプションを提供します。<br/>
- **IoT 接続用ローカル LoRa® ハブ：** Semtech SX1262 LoRa® チップを統合し、チュートリアルを通じて LoRaWAN® シングルチャネルゲートウェイに変換できます。または、Wi-Fi 経由で LoRa® デバイスを Matter などの人気 IoT プラットフォームに接続できます。<br/>
- **完全オープンソースプラットフォーム：** 広範な ESP32 と Raspberry Pi オープンソースエコシステムを活用して、無限のアプリケーション可能性を実現します。<br/>
- **複数のアプリケーションシナリオに適用：** Meshtastic デスクトップノードやカーノード、LoRaWAN® シングルチャネルゲートウェイとして使用できます。

### 仕様

|スクリーン|3.95インチ、静電容量式RGBタッチスクリーン|
| :- | :- |
|**スクリーン解像度**|480 x 480 ピクセル|
|**電源供給**|5V-DC、1A|
|**バッテリー**|N/A|
|**プロセッサ**|<p>**ESP32-S3:** Xtensa® デュアルコア 32ビット 最大240MHz</p><p>**RP2040:** デュアル ARM Cortex-M0+ 最大133MHz</p>|
|**フラッシュ**|<p>**ESP32-S3:** 8MB</p><p>**RP2040:** 2MB</p>|
|**外部ストレージ**|最大32GB Micro SDカードをサポート（別売り）|
|**Wi-Fi**|802.11b/g/n、2.4GHz|
|**Bluetooth**|Bluetooth 5.0 LE|
|**LoRa(SX1262**)|862-930MHzをサポート|
|**ブザー（未開発）**|MLT-8530、共振周波数：2700Hz|
|**認証**|CE/FCC|

### ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/HO-114993532.png" alt="pir" width={800} height="auto" /></p>

## ファームウェアのフラッシュ

### アプリケーションファームウェアのフラッシュ

**ビデオ説明**

<iframe width="100%" height="500" src="https://www.youtube.com/embed/55Sz8kHSyV4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Meshtastic Web Flasher](https://flasher.meshtastic.org/) にアクセスしてください。

ターゲットデバイスを `Seeed SenseCAP Indicator` に選択し、最新のファームウェアを選択して、`Flash` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-flash.png" alt="pir" width={800} height="auto" /></p>

USBケーブルを接続しながらボタンを押し続けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/press-button.png" alt="pir" width={400} height="auto" /></p>

`Full Erase and Install` を有効にし、`Erase Flash and Install` をクリックします。

2つのポートが表示されるので、`USB serial port` を選択して `Connect` をクリックします。

:::caution note
INDICATOR RP2040 ではなく、`USB Serial` を選択してください。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect11.png" alt="pir" width={800} height="auto" /></p>

### GPS ファームウェアのフラッシュ（オプション）

SenseCAP Indicator には GPS が内蔵されていないため、GPS 位置情報を取得するには [Grove GPS Module](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html) が必要です。<br/>
GPS モジュールを Grove ポートに接続してから、GPS ファームウェアをフラッシュします。

- **[GPS ファームウェアダウンロード](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/meshtastic_gps.ino.uf2)**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-connect.png" alt="pir" width={800} height="auto" /></p>

針を使ってこの内部ボタンを長押しし、付属のUSB Type-Cケーブルでデバイスをパソコンに接続し、接続後にボタンを離します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png" alt="pir" width={600} height="auto" /></p>

`UF2` ファイルをダウンロードして `RPI-RP2` ドライブにコピーします。ファイルがダウンロードされ、デバイスが再起動した後にファームウェアがフラッシュされます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png" alt="pir" width={600} height="auto" /></p>

## 使用開始

`Meshtastic` アプリをダウンロード：

- [IOS App](https://meshtastic.org/docs/category/apple-apps/)
- [Android App](https://meshtastic.org/docs/category/android-app/)

### アプリ経由での接続

- デバイスの電源を入れると、デバイスページに現在のデバイスのMACアドレスが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name4.png" alt="pir" width={700} height="auto" /></p>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

- Bluetooth パネルでターゲットデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- コードを入力して `Pair` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair111.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- `+` をクリックしてターゲットデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- コード（デフォルトコードは `123456`）を入力して `OK` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### パラメータの設定

メッシュ通信を開始するには、地域を設定する必要があります。この設定は、デバイスが使用する周波数範囲を制御し、地域の場所に応じて設定する必要があります。

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
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
**EU_868** は、1時間ごとのデューティサイクル制限10%を遵守する必要があり、これは1時間のローリングベースで毎分計算されます。制限に達すると、再び許可されるまでデバイスは送信を停止します。
:::

デバイスで LoRa 地域を設定したので、ニーズに合わせて [LoRa 設定](https://meshtastic.org/docs/configuration/radio/lora/) を構成することができます。

### キーボード

:::tip note
バージョン2.5.xx（工場出荷時ファームウェアはv2.5.11）とバージョン2.6.xx以降では、キーボードの使用方法が異なります。現在のファームウェアバージョンに応じて以下を確認してください。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-ve.png" alt="pir" width={400} height="auto" /></p>

#### バージョン2.5.xx用

<div class="table-center">
<iframe width="500" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-usage.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

#### バージョン2.6以降用

<div class="table-center">
<iframe width="500" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-usage2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### FAQ

#### RP2040 部分

RP2040 はまだ開発されていないため、`ブザー`/`SD カード`/`マップ` 機能はまだ利用できません。Meshtastic と協力して最適化を進めています。

#### ロール選択

:::caution
`Repeater` ロールを選択しないでください。デバイスが繰り返し再起動する原因となります。
:::

#### GPS モジュール

GPS モジュールを接続していない場合は、`Meshtastic` アプリで GPS 機能を無効にしてください。そうしないと、デバイスが GPS モジュールを探し続け、画面の起動に長時間かかる原因となります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-module.png" alt="pir" width={600} height="auto" /></p>
