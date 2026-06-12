---
description: XIAO nRF52840 & Wio-SX1262 キットで始める Meshtastic
title: XIAO nRF52840 & Wio-SX1262 キット入門ガイド
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-kit.webp
slug: /xiao_nrf52840&_wio_SX1262_kit_for_meshtastic
sidebar_position: 2
sku: 102010710
last_update:
  date: 12/11/2025
  author: Michelle Huang
createdAt: '2025-03-13'
updatedAt: '2026-05-09'
url: https://wiki.seeedstudio.com/ja/xiao_nrf52840&_wio_SX1262_kit_for_meshtastic/
---


<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-102010710-nrf52840_wio-sx1262-kit_1.jpg" alt="pir" width={800} height="auto" /></p>

このキットは XIAO nRF52840 と Wio-SX1262 を組み合わせたもので、BLE5.0、Thread、Zigbee、LoRa（862〜930MHz）をサポートし、低消費電力で動作します。[Meshtastic®](https://meshtastic.org/)、センサーネットワーク、環境モニタリング、資産追跡、教育、イノベーションなど、さまざまな分野に応用できます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF52840-Wio-SX1262-Kit-for-Meshtastic-p-6400.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

<br></br>

## 概要

### 特長

- **多用途マイコン**：Nordic nRF52840 チップ（FPU 搭載、最大 64 MHz 動作）を採用し、複数の開発ポートを実装、Arduino / CircuitPython / Micropython に対応
- **強力な LoRa 性能**：Semtech SX1262 による長距離 LoRa 通信、868/915 MHz 帯をサポート。
- **デュアルコア通信**：Bluetooth と LoRa のデュアルモードに対応し、クロスドメインな相互接続を実現。
- サイズはわずか **8mm × 22mm × 23mm** で、一体型アンテナ設計を採用しています。

### 仕様

| **製品** | **仕様** |  
| :- | :- |  
| [XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) | **MCU：** Nordic nRF52840  <br /> **コア：** ARM® Cortex®-M4（FPU 搭載）、最大 64 MHz |  
| [Wio-SX1262](https://www.seeedstudio.com/Wio-SX1262-for-XIAO-p-6379.html) | **LoRa モジュール：** Semtech SX1262  <br /> **周波数：** 862&#126;930MHz |  
| **無線** | Bluetooth 5.0 / NFC |  
| **インターフェース** | **XIAO nRF52840：**  <br /> - 1x UART、1x I²C、1x SPI（SX1262 に接続）  <br /> - 1x NFC、1x SWD、11x GPIO（PWM）  <br /> - 6x ADC  <br /> **Wio-SX1262：**  <br />  - 1x SPI（XIAO nRF52840 に接続） |  
| **電源** | **入力電圧：**  <br /> - Type-C：5V  <br /> - バッテリー（BAT）：4.2V  <br /> **バッテリー充電電流：** 50mA / 100mA  <br /> **待機時消費電力：** &lt;5µA |  
| **動作温度** | -40°C &#126; 65°C |  
| **寸法** | 21 x 17.8mm |  

### ピン配置

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/imageXIAO_nRF52840-2.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image_Wio-SX1262_-1.png" alt="pir" width={800} height="auto" /></p>

## はじめに

XIAO nRF52840 & Wio-SX1262 キットにはあらかじめ Meshtastic ファームウェアが書き込まれており、すぐに使い始めることができます。

### ファームウェアを書き込む

:::caution note
ファームウェアの更新には `don't use NRF-OTA` を使用しないでください。デバイスが完全に動作不能になる可能性があります。
:::

**動画による手順：**

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/li6DTOeXK3M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[Meshtastic Web Flasher](https://flasher.meshtastic.org/) にアクセスします。

キットを PC に接続し、デバイスを `Seeed` → `Seeed XIAO nRF52840 Kit` に設定し、最新のファームウェアを選択してから `Flash` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-device.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/filw-flash.png" alt="pir" width={800} height="auto" /></p>

`Enter DFU Mode` をクリックすると、`XIAO-xxx` という名前のシリアルポートが表示されます。それをクリックして接続すると、`XIAO-xxx` という名前のドライブが表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

UF2 ファイルを DFU ドライブにドラッグします。ファイルのコピー完了後、デバイスが再起動するとファームウェアの書き込みが完了します。

### ノード名を確認する

[Meshtastic Flasher](https://flasher.meshtastic.org/) にアクセスし、`Serial Monitor` を開いて `nodenum` を検索し、対応するノード ID を確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name3.png" alt="pir" width={800} height="auto" /></p>

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

### パラメータを設定する

メッシュ通信を開始するには、まずリージョンを設定する必要があります。この設定はデバイスが使用する周波数帯域を制御するもので、お住まいの地域に合わせて設定してください。

<Tabs>
<TabItem value="ios" label="IOS アプリ">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**リージョン一覧**

|**リージョンコード**|**説明**|**周波数範囲 (MHz)**|**デューティサイクル (%)**|**出力制限 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902.0 - 928.0|100|30|
|EU_868|欧州連合 868MHz|869.4 - 869.65|10|27|

より包括的な一覧については、[LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) を参照してください。

:::info
**EU_868** は、1 時間あたり 10% のデューティサイクル制限を順守する必要があり、1 時間のローリングウィンドウに対して毎分計算されます。この制限に達すると、再び送信が許可されるまでデバイスは送信を停止します。
:::

デバイスの LoRa リージョンを設定したら、ニーズに合わせて任意の [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) を続けて設定できます。

#### GNSS センサー設定

[L76K GNSS Module](https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html) を接続して、トラッカーを作成します。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image_102010710.gif" alt="pir" width={600} height="auto" /></p>


### 互換性のある SX-1262
[Click here](https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html) から、単体販売されている SX1262 を入手できます。

## リソース
### ファイルリソース

- **[PDF]** [Xiao リファレンスデザイン](https://files.seeedstudio.com/wiki/XIAO/XIAO-Reference-Design.pdf)
- **[PDF]** [Seeed Studio XlAO nRF52840 BLE 通信距離テストレポート](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_XIAO_BLE_nRF52840_BLE_Communication_Distance_Test_Report.pdf)
- **[ZIP]** [Seeed Studio XlAO nRF52840 CE |FCC|MIC](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-CE-FCC-MIC.zip)
- **[PDF]** [nRF52840 データシート](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)
- **[PDF]** [Seeed Studio XIAO nRF52840 回路図](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)
- **[ZIP]** [Seeed Studio XIAO nRF52840 KiCAD ファイル](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_SCH&PCB.zip)
- **[ZIP]** [Seeed Studio XIAO nRF52840 Eagle ファイル](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_KiCAD.zip)
- **[DXF]** [Seeed Studio XIAO nRF52840 DXF 形式寸法図](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-DXF.zip)
- **[LBR]** [Seeed Studio XIAO nRF52840 Eagle フットプリント](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-footprint-eagle.lbr)
- **[XLSX]** [Seeed Studio XIAO nRF52840 ピン配置シート](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-pinout_sheet.xlsx)
- 🔗 **[Kicad]** [Seeed Studio XIAO nRF52840 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- **[RAR]** [Wio SX-1262 for XIAO 3D ファイル](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)
- **[PDF]** [Xiao nRF52840 と互換性のある SX1262 の回路図](https://files.seeedstudio.com/products/113010003/Wio-SX1262%20for%20XIAO%20V1.0.pdf)
- **[PDF]** [Wio SX-1262 モジュールデータシート](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf
)

### コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

