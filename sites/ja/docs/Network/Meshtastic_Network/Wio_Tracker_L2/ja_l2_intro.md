---
description: Wio Tracker L2 シリーズの概要。機能、特長、パラメータおよびシリーズ比較を含みます。
title: Wio Tracker L2 概要
keywords:
  - Meshtastic
  - Wio Tracker L2
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png
slug: /meshtastic_wio_tracker_l2_intro
sku: 100029766
sidebar_position: 0
last_update:
  date: 3/13/2026
  author: Michelle Huang
createdAt: '2025-06-17'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/ja/meshtastic_wio_tracker_l2_intro/
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png" alt="pir" width={900} height="auto" /></p>

Wio Tracker L2 シリーズは、高い拡張性を備えた [Meshtastic®](https://meshtastic.org/) ノードで、LoRa（862–930 MHz）、効率的な処理を行う ESP32S3、そして高精度な位置追跡のための L76K GPS モジュールを搭載しています。柔軟性を重視した設計により、QSPI タッチスクリーン、E-Ink ディスプレイ、TF カードに加え、ソーラーパネルおよびバッテリー電源をサポートし、幅広い IoT およびオフグリッド用途に最適です。

## 特長

- **3.2インチ高品質タッチスクリーン**：320×240 の高精細ディスプレイを備え、MUI と Base UI を切り替え可能で、メッセージング、マッピング、制御をモバイルフォンなしでスムーズに行えるオンデバイス操作を実現します。

- **ESP32S3 搭載で拡張に最適**：デュアルコア ESP32-S3（Wi-Fi および Bluetooth LE 搭載）により駆動される L2 Pro は、UI カスタマイズ、機能拡張、オープンソースアプリケーションに柔軟なプラットフォームを提供します。

- **GNSS 位置情報付きオフラインマップ**：オフラインマップをあらかじめ MicroSD カードにダウンロードしておけば、携帯電話回線やインターネット接続がなくても、デバイス上でリアルタイムの GNSS 位置を直接確認できます。

- **3000mAh の長時間駆動バッテリー**：充電頻度を抑えつつ、長時間のデイリーユースをサポートし、-10°C ～ 55°C の環境で動作します。

- **携帯しやすく、柔軟な設置が可能**：折りたたみ式アンテナにより携帯性が向上し、1/4インチマウントインターフェースにより、対応アクセサリを用いた柔軟な設置が可能です。

## 仕様

<table>
  <tr>
    <th colspan="1">**項目**</th>
    <th colspan="1">**パラメータ**</th>
  </tr>
  <tr>
    <td colspan="1">**プロセッサ**</td>
    <td colspan="1">Wio-S3 (ESP32S3 + SX1262 Module)</td>
  </tr>
    <tr>
    <td colspan="1">**LoRa**</td>
    <td colspan="1">863-928 MHz<br/>最大送信電力: 20dBm@US915,14dBm@EU868</td>
  </tr>
    <tr>
    <td colspan="1">**GNSS**</td>
    <td colspan="1">L76K (GPS, BeiDou, GLONASS, QZSS)</td>
  </tr>
  <tr>
    <td colspan="1">**オンチップメモリ**</td>
    <td colspan="1">16MB Flash / 8MB PSRAM</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">**アンテナ**</td>
    <td colspan="1">LoRa: </td>
  </tr>
   <tr>
    <td colspan="1">Wifi/BLE 5.0: FPC アンテナ</td>
  </tr>
  <tr>
    <td colspan="1">GPS: セラミックアンテナ</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">**インターフェース**</td>
    <td colspan="1">Grove *1: </td>
  </tr>
  <tr>
    <td colspan="1">MicroSD カードスロット</td>
  </tr>
  <tr>
    <td colspan="1">1/4インチねじ穴</td>
  </tr>
   <tr>
    <td colspan="1">**QSPI インターフェース**</td>
    <td colspan="1">IPS スクリーン & E-INK スクリーンに対応</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">**電源入力**</td>
    <td colspan="1">USB Type-C: 5V — 1A</td>
  </tr>
  <tr>
    <td colspan="1">ソーラー:JST-PH 2P-2.0mm, 5V ~ 13V</td>
  </tr>
  <tr>
    <td colspan="1">リチウムイオンバッテリー (2P-1.25mm): 3.7V</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="2">**IPS タッチスクリーン**</td>
    <td colspan="1">サイズ: 3.2 インチ</td>
  </tr>
  <tr>
    <td colspan="1">解像度: 240 × 320 ピクセル</td>
  </tr>
    <tr>
    <td colspan="1">**LED**</td>
    <td colspan="1">Mesh LED * 1<br/>充電 LED * 1</td>
  </tr>
  <tr>
    <td colspan="1">**ボタン**</td>
    <td colspan="1">WAKE-UP * 1<br/>User/Boot * 1<br/>RST * 1<br/>電源スイッチ * 1</td>
  </tr>
    <tr>
    <td colspan="1" rowspan="3">**オーディオ**</td>
    <td colspan="1">I2S コーデック: ES8311</td>
  </tr>
  <tr>
    <td colspan="1">MIC: ピン予約済み</td>
  </tr>
    <tr>
    <td colspan="1">スピーカー: 6Ω 0.8W</td>
  </tr>
    <tr>
    <td colspan="1">**通信距離**</td>
    <td colspan="1">最大 5.8 km</td>
  </tr>
    <tr>
    <td colspan="1">**寸法**</td>
    <td colspan="1"></td>
  </tr>
  <tr>
    <td colspan="1">**デバイス重量**</td>
    <td colspan="1"></td>
  </tr>
    <tr>
    <td colspan="1">**動作温度**</td>
    <td colspan="1">-10℃ ～ +55℃</td>
  </tr>
  <tr>
    <td colspan="1">**認証**</td>
    <td colspan="1">FCC,CE,RoHS,Telec</td>
  </tr>
</table>

**バッテリー**

|項目|パラメータ|
| :- | :- |
|**バッテリー容量**|充電式リチウムイオンバッテリー, 3000mAh|
|**バッテリー寿命モニタリング**|バッテリーレベルの定期アップリンク|
|**充電プロトコル**|USB Type-C|
|**デバイス電源入力**|5V, 1A|
|**満充電カットオフ電圧**|4.2V|
|**充電温度範囲**|0 ～ +45℃|

## ピン一覧

<table>
  <tr>
    <th>コンポーネント</th>
    <th>ピン</th>
    <th>ピン番号</th>
    <th>プロトコル</th>
  </tr>
  <tr>
    <td rowspan="9">ディスプレイ</td>
    <td>QSPI_CLK</td>
    <td>GPIO42</td>
    <td rowspan="6">QSPI</td>
  </tr>
  <tr>
    <td>QSPI_DAT0</td>
    <td>GPIO41</td>
  </tr>
  <tr>
    <td>QSPI_DAT1</td>
    <td>GPIO40</td>
  </tr>
  <tr>
    <td>QSPI_DAT2</td>
    <td>GPIO39</td>
  </tr>
  <tr>
    <td>QSPI_DAT3</td>
    <td>GPIO38</td>
  </tr>
  <tr>
    <td>QSPI_CS</td>
    <td>GPIO46</td>
  </tr>
  <tr>
    <td>LCD_EN</td>
    <td>EXP_P05</td>
    <td rowspan="2">GPIO</td>
  </tr>
  <tr>
    <td>QSPLRST</td>
    <td>EXP_P06</td>
  </tr>
  <tr>
    <td>QSPLTE</td>
    <td>NC</td>
    <td>NC</td>
  </tr>
  <tr>
    <td rowspan="5">E-INK</td>
    <td>E_INK_SCK</td>
    <td>GPIO42</td>
    <td rowspan="3">SPI</td>
  </tr>
  <tr>
    <td>E_INK_MOSI</td>
    <td>GPIO41</td>
  </tr>
  <tr>
    <td>E_INK_CS</td>
    <td>GPIO40</td>
  </tr>
  <tr>
    <td>E_INK_DC</td>
    <td>GPIO39</td>
    <td rowspan="2">GPIO</td>
  </tr>
  <tr>
    <td>E_INK_BUSY</td>
    <td>GPIO38</td>
  </tr>
  <tr>
    <td rowspan="2">IIC</td>
    <td>IIC0_SCL</td>
    <td>GPIO48</td>
    <td rowspan="2">IIC</td>
  </tr>
  <tr>
    <td>IIC0_SDA</td>
    <td>GPIO47</td>
  </tr>
  <tr>
    <td rowspan="7">LoRa</td>
    <td>LoRa_CS</td>
    <td>GPIO21</td>
    <td rowspan="4">SPI</td>
  </tr>
  <tr>
    <td>LoRa_SCK</td>
    <td>GPIO4</td>
  </tr>
  <tr>
    <td>LoRa_MISO</td>
    <td>GPIO5</td>
  </tr>
  <tr>
    <td>LoRa_MOSI</td>
    <td>GPIO6</td>
  </tr>
  <tr>
    <td>LoRa_RST</td>
    <td>GPIO7</td>
    <td rowspan="3">GPIO</td>
  </tr>
  <tr>
    <td>LoRa_BUSY</td>
    <td>GPIO8</td>
  </tr>
  <tr>
    <td>LoRa_DIO1</td>
    <td>GPIO9</td>
  </tr>
  <tr>
    <td rowspan="3">Grove</td>
    <td>GROVE_DAT_1</td>
    <td>GPIO14</td>
    <td rowspan="3">GPIO</td>
  </tr>
  <tr>
    <td>GROVE_DAT_2</td>
    <td>GPIO13</td>
  </tr>
  <tr>
    <td>GROVE_EN</td>
    <td>EXP_P07</td>
  </tr>
  <tr>
    <td rowspan="4">GNSS</td>
    <td>GNSS_RX</td>
    <td>GPIO18</td>
    <td rowspan="2">UART</td>
  </tr>
  <tr>
    <td>GNSS_TX</td>
    <td>GPIO17</td>
  </tr>
  <tr>
    <td>GNSS_EN</td>
    <td>EXP_P15</td>
    <td rowspan="2">GPIO</td>
  </tr>
  <tr>
    <td>GNSS_RST</td>
    <td>EXP_P11</td>
  </tr>
  <tr>
    <td rowspan="5">I2S</td>
    <td>CODEC_I2S0_MCLK</td>
    <td>GPIO10</td>
    <td rowspan="5">I2S</td>
  </tr>
  <tr>
    <td>CODEC_I2S0_LRCK</td>
    <td>GPIO12</td>
  </tr>
  <tr>
    <td>CODEC_I2S0_SCLK</td>
    <td>GPIO11</td>
  </tr>
  <tr>
    <td>CODEC_I2S0_DSDIN</td>
    <td>GPIO16</td>
  </tr>
  <tr>
    <td>CODEC_I2S0_SDOUT</td>
    <td>GPIO15</td>
  </tr>
  <tr>
    <td rowspan="4">SD</td>
    <td>SD_CMD</td>
    <td>GPIO03</td>
    <td rowspan="3">SD</td>
  </tr>
  <tr>
    <td>SD_CLK</td>
    <td>GPIO02</td>
  </tr>
  <tr>
    <td>SD_DAT0</td>
    <td>GPIO01</td>
  </tr>
  <tr>
    <td>SD_DET</td>
    <td>EXP_P02</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td rowspan="2">USB</td>
    <td>USB_N</td>
    <td>GPIO19</td>
    <td rowspan="2">USB</td>
  </tr>
  <tr>
    <td>USB_P</td>
    <td>GPIO20</td>
  </tr>
  <tr>
    <td rowspan="2">LED</td>
    <td>MESH LED</td>
    <td>GPIO43</td>
    <td rowspan="2">GPIO</td>
  </tr>
  <tr>
    <td>USER_LED</td>
    <td>EXP_P12</td>
  </tr>
  <tr>
    <td>ボタン</td>
    <td>WAKEUP_BUTTON</td>
    <td>EXP_P00</td>
    <td>GPIO</td>
  </tr>
</table>


## ハードウェア概要

**Wio Tracker L2 Pro**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2DeviceComponent9.7(1).png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2DeviceComponent29.7(2).png" alt="pir" width={800} height="auto" /></p>

**回路図**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SchematicDiagram9.7(1).png" alt="pir" width={800} height="auto" /></p>
