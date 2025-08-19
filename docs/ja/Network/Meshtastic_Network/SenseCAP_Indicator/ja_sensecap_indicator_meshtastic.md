---
description: Meshtastic用SenseCAPインジケーターの使い方
title: Meshtastic用インジケーターの使い方
keywords:
- Meshtastic
- インジケーター
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-page_1.webp
slug: /ja/sensecap_indicator_meshtastic
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>



SenseCAPインジケーターは、Meshtastic®用に設計された4インチのタッチスクリーンデバイスで、ESP32とRP2040のデュアルMCUを搭載し、Wi-Fi、BLE、LoRa®をサポートしています。これはオープンソースで強力なIoT開発プラットフォームです。


## はじめに

### 特徴


* **Meshtastic対応:** Meshtasticファームウェアがプリインストールされており、電源を入れるだけですぐに使用できます。また、Meshtastic Flasherを使用してファームウェアをアップグレードすることも可能です。<br/>
* **デュアルMCUと豊富なGPIO:** 強力なESP32S3とRP2040デュアルMCUを搭載し、400以上のGrove互換GPIOを備え、柔軟な拡張が可能です。<br/>
* **ローカルLoRa®ハブによるIoT接続:** Semtech SX1262 LoRa®チップを統合し、チュートリアルを通じてLoRaWAN®シングルチャネルゲートウェイに変換可能です。また、Wi-Fiを介してMatterなどの人気IoTプラットフォームにLoRa®デバイスを接続できます。<br/>
* **完全オープンソースプラットフォーム:** 広範なESP32およびRaspberry Piオープンソースエコシステムを活用し、無限のアプリケーション可能性を提供します。<br/>
* **多用途なアプリケーションシナリオに対応:** Meshtasticデスクトップノードや車載ノード、LoRaWAN®シングルチャネルゲートウェイとして使用可能です。

### 仕様

|画面|3.95インチ、静電容量式RGBタッチスクリーン|
| :- | :- |
|**画面解像度**|480 x 480ピクセル|
|**電源供給**|5V-DC、1A|
|**バッテリー**|なし|
|**プロセッサ**|<p>**ESP32-S3:** Xtensa®デュアルコア32ビット、最大240MHz</p><p>**RP2040:** デュアルARM Cortex-M0+、最大133MHz</p>|
|**フラッシュ**|<p>**ESP32-S3:** 8MB</p><p>**RP2040:** 2MB</p>|
|**外部ストレージ**|最大32GBのMicro SDカードをサポート（別売り）|
|**Wi-Fi**|802.11b/g/n、2.4GHz|
|**Bluetooth**|Bluetooth 5.0 LE|
|**LoRa(SX1262)**|862-930MHz対応|
|**ブザー（未開発）**|MLT-8530、共振周波数：2700Hz|
|**認証**|CE/FCC|

### ハードウェア概要


<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/HO-114993532.png" alt="pir" width={800} height="auto" /></p>



## ファームウェアの書き込み

:::tip 新しいMUI（Fancy UI）
2.6 MUIプレビューページに入るには、コンピュータのキーボードで次のキーを押してください：↑&nbsp;↑&nbsp;↓&nbsp;↓&nbsp;←&nbsp;→&nbsp;←&nbsp;→&nbsp;b&nbsp;a<br/>
するとページが黒くなり、プレリリースオプションが表示されます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/2.6-ver.png" alt="pir" width={800} height="auto" /></p>
:::

### アプリケーションファームウェアの書き込み

**ビデオ説明**

<iframe width="100%" height="500" src="https://www.youtube.com/embed/55Sz8kHSyV4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


[Meshtastic Web Flasher](https://flasher.meshtastic.org/)にアクセスしてください。

ターゲットデバイスを`Seeed SenseCAP Indicator`に選択し、最新のファームウェアを選択して`Flash`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-flash.png" alt="pir" width={800} height="auto" /></p>



USBケーブルを接続しながらボタンを押し続けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/press-button.png" alt="pir" width={400} height="auto" /></p>



`Full Erase and Install`を有効にし、`Erase Flash and Install`をクリックします。



2つのポートが表示されますので、`USB serial port`を選択して`Connect`をクリックします。

:::caution 注意
`USB Serial`を選択してください。INDICATOR RP2040ではありません。
:::



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect11.png" alt="pir" width={800} height="auto" /></p>



### GPSファームウェアの書き込み


SenseCAPインジケーターにはGPSが内蔵されていないため、GPS位置情報を取得するには[Grove GPSモジュール](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html)が必要です。<br/>
GPSモジュールをGroveポートに接続し、GPSファームウェアを書き込んでください。

* **[GPSファームウェアダウンロード](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/meshtastic_gps.ino.uf2)**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-connect.png" alt="pir" width={800} height="auto" /></p>



針を使って内部ボタンを長押しし、その後付属のUSB Type-CケーブルでデバイスをPCに接続します。接続後にボタンを離します。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png" alt="pir" width={600} height="auto" /></p>


`UF2`ファイルをダウンロードし、それを`RPI-RP2`ドライブにコピーします。ファイルがダウンロードされ、デバイスが再起動するとファームウェアが書き込まれます。



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png" alt="pir" width={600} height="auto" /></p>

## はじめに

`Meshtastic` アプリをダウンロードしてください：

* [IOS アプリ](https://meshtastic.org/docs/category/apple-apps/)
* [Android アプリ](https://meshtastic.org/docs/category/android-app/)



### アプリを介して接続する

* デバイスの電源を入れると、デバイスページに現在のデバイスのMACアドレスが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name4.png" alt="pir" width={700} height="auto" /></p>


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS アプリ">

* Bluetoothパネルでターゲットデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>


* コードを入力し、`ペアリング` をクリックしてデバイスを接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair111.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">


* `+` をクリックしてターゲットデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>


* コード（デフォルトコードは `123456`）を入力し、`OK` をクリックしてデバイスを接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

  
</TabItem>
</Tabs>





### パラメータの設定



メッシュ通信を開始するには、地域を設定する必要があります。この設定はデバイスが使用する周波数範囲を制御し、地域の位置に応じて設定する必要があります。



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


より包括的なリストについては、[LoRa 地域別国リスト](https://meshtastic.org/docs/configuration/region-by-country/) を参照してください。


:::info
**EU_868** は、1時間あたりのデューティサイクル制限10%を遵守する必要があります。この制限は1時間のローリングベースで毎分計算されます。制限に達すると、デバイスは許可されるまで送信を停止します。
:::


デバイスでLoRa地域を設定したら、必要に応じて任意の [LoRa設定](https://meshtastic.org/docs/configuration/radio/lora/) を構成することができます。



### 注意事項

#### 役割の選択

:::caution
リピーター役割を選択しないでください。これによりデバイスが繰り返し再起動する原因となります。
:::


#### GPSモジュール


GPSモジュールを接続していない場合は、`Meshtastic` アプリでGPS機能を無効にしてください。そうしないと、デバイスがGPSモジュールを探し続け、画面の起動に時間がかかる原因となります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-module.png" alt="pir" width={600} height="auto" /></p>