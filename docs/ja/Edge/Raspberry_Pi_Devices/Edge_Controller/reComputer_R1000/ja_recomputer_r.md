---
description: reComputer R1000 入門ガイド
title: reComputer R1000 入門ガイド
keywords:
  - Edge
  - reComputer R1000
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/113991274-2_3.webp
slug: /ja/recomputer_r
last_update:
  date: 05/15/2025
  author: Joshua Lee
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- ---
name: reComputer R1000 エッジ IoT コントローラーは、高性能な Raspberry Pi CM4 プラットフォームを基盤としており、最大8GB RAMと32GB eMMCをサポートするクアッドコア A72 プロセッサを搭載しています。
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 113991274
tags:
--- -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<br />

reComputer R1000 エッジ IoT コントローラーは、高性能な Raspberry Pi CM4 プラットフォームを基盤としており、クアッドコア A72 プロセッサを搭載し、最大8GB RAMと32GB eMMCをサポートします。柔軟に構成可能なデュアルイーサネットインターフェースを備え、さらにBACnet、Modbus RTU、Modbus TCP/IPプロトコルをサポートする3つの絶縁RS485チャネルを含んでいます。  
強力なIoTネットワーク通信機能を備えたR1000シリーズは、4G、LoRa®、Wi-Fi/BLEなどの複数の無線通信オプションをサポートし、対応する無線ゲートウェイとして柔軟に構成できます。このコントローラーは、リモートデバイス管理、エネルギー管理、スマートビルディング分野のさまざまなシナリオに適しています。

## 特徴

### ビルディングオートメーションシステム向けに設計
* 複数の絶縁RS485チャネルが高速および低速通信をサポート
* BACnet、Modbus RTU、およびModbus TCP/IPプロトコルをサポート
* 最大8GB RAMにより、数千のデータポイントの処理をサポートし、効率的なパフォーマンスを実現
* 両面LEDインジケーターにより、動作状態を迅速に確認可能
* 高品質の金属ケースで、DINレールおよび壁取り付けに対応
* カスタマイズされたOSのためにYoctoおよびBuildrootをサポート

### 強力なパフォーマンス
* Raspberry Pi CM4を搭載
* Broadcom BCM2711 クアッドコア Cortex-A72 (ARM v8) 64ビット SoC @ 1.5GHz
* 最大8GB RAMおよび32GB eMMC

### 豊富な無線機能
* オンチップWi-Fi
* オンチップBLE
* Mini-PCIe1: LTE、USB LoRa®、USB Zigbee
* Mini-PCIe2: SPI LoRa®、USB LoRa®、USB Zigbee

### 豊富なインターフェース
* 3x RS485（絶縁）
* 1x 10M/100M/1000M イーサネット（PoE対応）
* 1x 10M/100M イーサネット
* 1x HDMI 2.0
* 2x Type-A USB2.0
* 1x Type-C USB2.0（OS更新用USBコンソール）
* 1x SIMカードスロット

### 安全性と信頼性
* ハードウェアウォッチドッグ
* UPSスーパーキャパシタ（オプション）
* 金属ケースとPCサイドパネル
* ESD: EN61000-4-2, レベル3
* EFT: EN61000-4-4, レベル2
* サージ: EN61000-4-5, レベル2
* 製品寿命: reComputer R1000は少なくとも2030年12月まで生産が継続されます

> \*4GおよびLoRa®モジュールはreComputer R1000にデフォルトでは付属していません。関連モジュールを別途購入してください。

## 命名規則
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig11.png" alt="pir" width="800" height="auto"/></p>

## 仕様

<div class="table-center">

<table>
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>パラメータ</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>説明</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>ハードウェア仕様</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>製品シリーズ</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>R10xx-10</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>R10xx-00</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>CPU</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Raspberry Pi CM4, Quad-core Cortex-A72@ 1.5GHz</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>オペレーティングシステム</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Raspberry Pi OS, Ubuntu</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RAM</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1GB/2GB/4GB/8GB</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>eMMC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>8GB/16GB/32GB</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>システム仕様</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>入力</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2ピン端子ブロック</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>PoE（給電デバイスとして）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>IEEE 802.3af 標準 12.95W PoE*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>供給電圧（AC/DC）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>12~24V AC/9~36V DC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>過電圧保護</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>40V</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>消費電力</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>アイドル時: 2.88W; フルロード時: 5.52W</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>電源スイッチ</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>なし</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>再起動スイッチ</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>あり</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>インターフェース</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>イーサネット</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps（PoE*対応）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100 Mbps IEEE802.3/802.3u</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>USB</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 x USB-A 2.0 ホスト</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x USB-C 2.0（OSフラッシュ用）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RS485</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>3 x 3ピン端子ブロック（絶縁）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>SIMカードスロット</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>標準SIMカード対応</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>M.2スロット</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>M.2 NVMe SSD対応</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LED</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6 x LEDインジケーター</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>ブザー</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>リセットボタン</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>DSI（予約済み）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>LCD対応*（筐体内に搭載）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>スピーカー（予約済み）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>マイク対応*（筐体内に搭載）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>ワイヤレス通信</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>Wi-Fi 2.4/5.0 GHz</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>オンチップWi-Fi*</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>なし</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>BLE 5.0</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>オンチップBLE*</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>なし</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LoRa®</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>USB LoRa®/SPI LoRa®*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>4Gセルラー</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>4G LTE*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Zigbee</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>USB Zigbee*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>標準</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={3} style={{height: 18, width: '35.4622%'}}>EMC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>ESD: EN61000-4-2, レベル3</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>EFT: EN61000-4-4, レベル2</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>サージ: EN61000-4-5, レベル2</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={4} style={{height: 18, width: '35.4622%'}}>認証</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>CE, FCC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>TELEC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>RoHS</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>REACH</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>環境条件</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>防塵防水性能</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>IP40</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>動作温度</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>-30~70 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>動作湿度</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>10~95% RH</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>保管温度</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>-40~80 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>その他</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>スーパーキャパシタUPS</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>SuperCAP UPS LTC3350 モジュール*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>ハードウェアウォッチドッグ</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1~255秒</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RTC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>高精度RTC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>セキュリティ</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>暗号化チップ TPM 2.0*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>ATECC608A</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>放熱</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>ファンレス</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>保証</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2年間</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>製品寿命</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2030年12月まで</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>声明</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>「*」が付いたオプションは、アクセサリーリストに従って追加購入が必要です。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>コンポーネントおよびインターフェース状態の声明</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>予約済み</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>将来の使用または拡張のために指定されています。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>オプション</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>必須ではないコンポーネントで、ユーザーが含めるか除外するかを選択できます。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>占有済み</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>現在使用中で、製品の機能に不可欠です。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>含まれる</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>標準パッケージに含まれる必須コンポーネント。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>機械的仕様</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>寸法（幅 x 高さ x 奥行き）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>130 mm x 93 mm x 49.6 mm</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>筐体</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6061アルミニウム合金ケース、透明PCサイドパネル付き</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>取り付け</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>DINレール/壁</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>重量（正味）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>560g</td>
    </tr>
  </tbody>
</table>

</div>

## ハードウェア概要

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig03.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig031.png" /></div>

## メインボード概要

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig02.png" /></div>

## 電源図

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig13.png" /></div>

reComputer R1000 は、AC、DC端子、PoEポートの3つの電源供給オプションをサポートしています。デフォルトでは、reComputer R1000 は AC/DC 端子（公式地域電源アダプタ SKU:110061505/110061506）を通じて電源供給されますが、**PoE電源供給（PoEモジュール、SKU:110991925）はオプション**です。これにより、電源供給の選択肢が柔軟になり、さまざまな電源ソースとの統合が容易になります。

### 2ピン電源端子

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

reComputer R1000 は、12〜24V の公称AC電圧または9〜36V のDC電圧で供給されます。電源は2ピン電源端子ブロックコネクタを介して接続されます。reComputer R1000 を接地するには、接地線を電源端子の左上隅にあるネジに固定することができます。

:::note
この電源ソリューションは、逆極性保護のためにブリッジ整流ダイオードを利用しており、ACおよびDC入力の両方に対応しています。これにより、**電源供給の正極と負極がどのように接続されても**回路が損傷することはありません。ブリッジ整流器を使用することで、入力DCの極性に関係なく出力電圧の極性が固定され、効果的な逆極性保護が提供されます。
:::

### POE（オプション）

PoEモジュールをインストールすることで、reComputer R1000 の ETH0 ポートは PoE 電源供給をサポートし、イーサネット経由でデバイスに電力を供給する便利で効率的な方法を提供します。このオプションは、設置プロセスを簡素化し、必要な配線量を削減するため、電源ソースが限られているアプリケーションや電源コンセントが容易に利用できない場合に理想的なソリューションです。

* PoE入力: 範囲 44〜57V; 標準 48V 
* PoE出力: 12V, 最大1.1A

:::note
提供されるreComputer R1000 の PoEモジュールは IEEE 802.3af 標準に準拠しており、最大12.95Wの電力供給が可能です。そのため、SSDや4Gモジュールなどの高電力周辺機器を接続する必要がある場合、PoE電源供給では十分でない可能性があります。この場合、デバイスの安定した信頼性のある動作を確保するために、AC/DC端子を使用して電源供給することをお勧めします。
:::

### 消費電力

Seeed Studio のラボでテストされた reComputer R1000 の消費電力については、以下の表を参照してください。この値は参考値であり、テスト方法や環境によって結果が異なる場合があります。

| 状態       | 電圧   | 電流   | 消費電力         | 説明 |
|   ---      |    ---    |   ---      |         ---          |        ---    |
| シャットダウン | 24V      |  51mA  |    1.224W         | シャットダウンおよび電源オフ状態での静的消費電力テスト。|
| アイドル    | 24V      |  120mA |    2.88W          | reComputer R1000 デバイスに24V電力を供給し、テストプログラムを実行しない状態での入力電流をテスト。|
| フルロード  | 24V      |  230mA  |    5.52W          | CPUを「stress -c 4」コマンドでフルロード状態に設定。外部デバイスは接続されていない。|

### 電源オンと電源オフ

reComputer R1000 にはデフォルトで電源ボタンが付属しておらず、電源が接続されるとシステムは自動的に起動します。シャットダウンする際は、オペレーティングシステムのシャットダウンオプションを選択し、システムが完全にシャットダウンするのを待ってから電源を切断してください。システムを再起動するには、電源を再接続するだけです。

:::note
シャットダウン後、システムを再起動する前に、内部コンデンサが完全に放電するのを待つために、少なくとも10秒間待機してください。
:::

## ブロック図

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig12.png" /></div>

### IIC 図

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig10.png" /></div>

## インターフェース

<div class="table-center">

<table>
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>インターフェース</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>Ethernet</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps IEEE 1588-2008（PoE*対応）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100 Mbps IEEE802.3/802.3u</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>USB</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 x USB-A 2.0 ホスト</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x USB-C 2.0（OS書き込み用）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RS485</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>3 x 3ピン端子ブロック（絶縁）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>SIMカードスロット</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>標準SIMカード対応</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>M.2スロット</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>M.2 NVMe SSD対応</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LED</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6 x LEDインジケーター</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>ブザー</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>リセットボタン</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>DSI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>LCD対応*（筐体内に搭載）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>スピーカー*</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>マイク対応*（筐体内に搭載）</td>
    </tr>
  </tbody>
</table>

</div>

GPIOのマッピングとオフセットを照会するには、以下のコマンドを使用してください：

```bash
cat /sys/kernel/debug/gpio
```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/16.png" /></div>

### LEDインジケーターの状態

reComputer R1000には、機器の動作状態を示す6つのLEDインジケーターが搭載されています。各LEDの具体的な機能と状態については、以下の表を参照してください：

| LEDインジケーター | 色             | 状態   | 説明                                                         |
| ----------------- | -------------- | ------ | ------------------------------------------------------------ |
| PWR              | 緑             | 点灯   | デバイスが電源に接続されています。                           |
|                  |                | 消灯   | デバイスが電源に接続されていません。                         |
| ACT              | 緑             |        | Linuxでは、このピンはeMMCアクセスを示すために点滅します。<br /> 起動中にエラーが発生した場合、このLEDは<br />エラーパターンを点滅し、[Raspberry Piのウェブサイト](https://www.raspberrypi.com/documentation/computers/configuration.html#led-warning-flash-codes)でデコードできます。 |
| USER             | 緑/赤/青       |        | ユーザーによって定義する必要があります。                     |
| RS485-1          | 緑             | 消灯   | RS485チャネル1でデータ転送がありません。                     |
|                  |                | 点滅   | RS485チャネル1がデータを受信または送信しています。           |
| RS485-2          | 緑             | 消灯   | RS485チャネル2でデータ転送がありません。                     |
|                  |                | 点滅   | RS485チャネル2がデータを受信または送信しています。           |
| RS485-3          | 緑             | 消灯   | RS485チャネル3でデータ転送がありません。                     |
|                  |                | 点滅   | RS485チャネル3がデータを受信または送信しています。           |

**ACT ステータステーブル**

| **長い点滅** | **短い点滅** | **ステータス**                          |
| ------------ | ------------ | --------------------------------------- |
| 0            | 3            | 起動に失敗（一般的なエラー）             |
| 0            | 4            | start*.elf が見つからない                |
| 0            | 7            | カーネルイメージが見つからない           |
| 0            | 8            | SDRAM の障害                            |
| 0            | 9            | SDRAM が不足している                     |
| 0            | 10           | HALT 状態                               |
| 2            | 1            | パーティションが FAT ではない            |
| 2            | 2            | パーティションからの読み取りに失敗       |
| 2            | 3            | 拡張パーティションが FAT ではない        |
| 2            | 4            | ファイル署名/ハッシュの不一致 - Pi 4     |
| 4            | 4            | サポートされていないボードタイプ         |
| 4            | 5            | 致命的なファームウェアエラー             |
| 4            | 6            | 電源障害タイプ A                        |
| 4            | 7            | 電源障害タイプ B                        |

ACT LED が規則的な4回点滅パターンの場合、bootcode（start.elf）が見つからない可能性があります。  
ACT LED が不規則なパターンで点滅する場合、起動が開始されています。  
ACT LED が点滅しない場合、EEPROM コードが破損している可能性があります。何も接続せずに再試行してください。詳細については Raspberry Pi フォーラムを確認してください：  
STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums  
詳細については [Raspberry Pi フォーラム](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151) を確認してください。

ユーザー LED を制御するには、Linux カーネルが提供する擬似ファイルシステムである sysfs を使用することをお勧めします。sysfs は、さまざまなカーネルサブシステム、ハードウェアデバイス、およびそれに関連するドライバに関する情報を公開します。ReComputer R1000 では、ユーザー LED インターフェースを3つのデバイスファイル（led-red、led-blue、led-green）に抽象化しており、これらのファイルを操作するだけで LED ライトを簡単に制御できます。以下は例です：

1. 赤色 LED を点灯するには、ターミナルで以下のコマンドを入力してください：

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
```

2. 赤色 LED を消灯するには、ターミナルで以下のコマンドを入力してください：

```bash
echo 0 | sudo tee /sys/class/leds/led-red/brightness
```

3. 赤色 LED と緑色 LED を同時に点灯するには、ターミナルで以下のコマンドを入力してください：

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
echo 1 | sudo tee /sys/class/leds/led-green/brightness
```

### ブザー

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig07.png" /></div>

reComputer R1000 にはアクティブブザーが搭載されており、アラームやイベント通知などのさまざまな目的で使用できます。ブザーは reComputer R1000 v1.0 では GPIO21、reComputer R1000 v1.1 では GPIO20 を介して CM4 によって制御されます。

:::note
ハードウェアのリビジョン（v1.0 と v1.1）を区別するには、[reComputer R1000 V1.1 製品変更詳細](https://wiki.seeedstudio.com/ja/recomputer_r1000_v1_1_description/) を参照してください。
:::

reComputer R1000 v1.0 ユーザーの場合、ブザーは GPIO-21 に接続されています。ブザーをオン/オフするには、ターミナルで以下のコマンドを入力してください：

```bash
raspi-gpio set 21 op dh # オンにする
raspi-gpio set 21 op dl # オフにする
```

reComputer R1000 v1.1 ユーザーの場合、ブザーは PCA9535 P15 に接続されています。ブザーをオン（オフ）にするには、ターミナルで以下のコマンドを入力してください：

```bash
echo 591 | sudo tee /sys/class/gpio/export
echo out | sudo tee /sys/class/gpio/gpio591/direction
echo 1 | sudo tee /sys/class/gpio/gpio591/value # オンにする
echo 0 | sudo tee /sys/class/gpio/gpio591/value # オフにする
```

### RS485

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig21.png" /></div>

reComputer R1000 には、3ピンコネクタを使用した3セットの RS485 インターフェースが搭載されており、信号と電力の両方が絶縁されているため、産業および自動化アプリケーションで安全で信頼性の高い動作を保証します。RS485A および RS485B 信号は容量性絶縁を使用して絶縁されており、優れた EMI 耐性を提供し、RS485 インターフェースの高速通信要件を満たします。  
デフォルトでは、120Ω 終端抵抗は取り付けられていません。ただし、梱包箱には5つの表面実装抵抗が含まれています。必要に応じて、ユーザーは抵抗をデバイスに自分でハンダ付けする必要があります。

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position.png" /></div>

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position2.png" /></div>

:::note
RS485 インターフェースは絶縁電源を使用しているため、RS485 インターフェースに接続される外部デバイスのグランド信号は GND_ISO ピンに接続する必要があります。
:::

以下は reComputer の 485 インターフェースに関連するピンのデータテーブルです。

| RS485         | RS485_POWER_EN         | OS デバイスファイル | P14         | デフォルト（High） |
| ------------- | ---------------------- | ------------------- | ----------- | ------------------ |
| TX5           |                        | /dev/ttyAMA5        | GPIO12      |                    |
| RX5           |                        |                     | GPIO13      |                    |
| TX2           | ID_SD                  | /dev/ttyAMA2        | GPIO0/ID_SD |                    |
| RX2           | ID_SC                  |                     | GPIO1/ID_SC |                    |
| TX3           |                        | /dev/ttyAMA3        | GPIO4       |                    |
| RX3           |                        |                     | GPIO5       |                    |
| RS485_1_DE/RE | (High/DE \|\| Low/RE)  | /dev/ttyAMA2        | GPIO6       | デフォルト Low     |
| RS485_2_DE/RE |                        | /dev/ttyAMA3        | GPIO17      | デフォルト Low     |
| RS485_3_DE/RE |                        | /dev/ttyAMA5        | GPIO24      | デフォルト Low     |

デフォルトでは、RS485ポートの電源イネーブルポートは高状態です。そして、各RS485インターフェースは受信状態にあります。簡単な実験を行うことができます。

PCをreComputer-Rに接続する485ポートを使用します。

reComputerのターミナルで以下を入力します：

```shell
cat /dev/ttyAMA2
```

その後、コンピュータのシリアルデバッグツールでデータを送信すると、reComputerのターミナルウィンドウでデータを観察することができます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/21.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/22.png" /></div>

### ブートスイッチ

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" /></div>

reComputer R1000のブートスイッチはCM4のnRPI_BOOTピンに接続されています。このスイッチは、eMMCとUSBの間でブートソースを選択するオプションをユーザーに提供します。通常モードでは、スイッチを「BOOT」ラベルのある側から離れた位置に設定し、システムをeMMCから起動できるようにします。逆に、システムイメージをフラッシュする必要がある場合は、スイッチを「BOOT」ラベルのある側に設定し、Type-C USBインターフェースからシステムを起動できるようにします。

<div class="table-center">

| スイッチ位置                                                | モード       | 説明           | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | 通常モード   | eMMCから起動   | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | フラッシュモード | USBから起動    | High      |

</div>


### USB

<div align="left"><img width={150} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig20.png" /></div>

reComputer R1000は1つのUSB Type-Cポートと2つのUSB Type-Aポートを備えています。以下の表にそれぞれの機能と説明を示します。

| **タイプ**   | **数量**     | **プロトコル** | **機能**       | **説明**                                                  |
| ------------ | ------------ | -------------- | -------------- | --------------------------------------------------------- |
| **Type-C**   | *1           | USB2.0         | USB-デバイス   | シリアルポートデバッグ、イメージの書き込みなどに使用       |
| **Type-A**   | *2           | USB2.0         | USB-ホスト     | フラッシュドライブ、<br />USBキーボードやマウスなどのUSBデバイスを接続 |

USBハブが検出されているか確認するには、**lsusb**コマンドを実行します。このコマンドは、ハブを含む接続されているすべてのUSBデバイスを一覧表示します。

```shell
lsusb
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/23.png" /></div>

このコマンドを実行すると、システムに接続されているUSBデバイスの情報が表示され、USBハブが存在する場合はその詳細が表示されます。

USBハブが正常に機能している場合、**lsusb**コマンドの出力にその詳細が表示されます。表示されない場合は、ハブまたはシステムへの接続に問題がある可能性があります。その場合、USBハブまたはその接続をトラブルシューティングする必要があります。


### SIMスロット

<div style={{ position: 'relative', left: '150px' }}>
    <img 
        width="40" 
        src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig19.png" 
        style={{ transform: 'rotate(90deg)', position: 'absolute', top: '0', left: '0', transformOrigin: 'left top' }} 
    />
</div>
<br />
<br />
reComputer R1000は、工業用途で一般的に使用される標準サイズのSIMカードスロットを採用しており、25mm x 15mmの標準SIMカードが必要です。
:::note
標準版reComputer R1000には4Gモジュールが付属していません。4G機能が必要な場合は、別途4Gモジュールを購入する必要があります。
:::

### SSDスロット

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig08.png" /></div>
<br />
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig04.png" /></div>
reComputer R1000のSSDスロットは、128GB、256GB、512GB、1TBの容量を持つNVMe M.2 2280 SSDを収容するように設計されています。このスロットは高速ストレージ拡張を可能にし、ユーザーがシステムの性能と容量を向上させることができます。

ディスクを一覧表示するには、*fdisk -l*コマンドを使用します。以下の手順を参照してください：

```bash
sudo fdisk -l
```

このコマンドは、接続されているすべてのディスクの一覧を表示し、SSDが正しく検出されている場合はそのエントリが表示されます。通常、SSDを表すエントリは/dev/sdで始まり、その後に文字が続きます（例：/dev/sda、/dev/sdbなど）。
SSDに対応するエントリを特定したら、必要に応じてパーティションを作成したりフォーマットしたりすることができます。

:::note
SSDカードには主に以下の2つの用途があります：<br />
1. 高容量ストレージ：SSDカードは高容量ストレージニーズに利用できます。<br />
2. イメージを含むブートドライブ：もう1つの用途は、SSDを高容量ストレージとして使用するだけでなく、システムイメージを保存してSSDカードから直接起動することです。<br />
市場に出回っているすべてのSSDカードがこの2番目の用途をサポートしているわけではありません。そのため、ブートドライブとして使用する予定があり、どのモデルを購入すべきか不明な場合は、当社推奨の1TB SSD（SKU 112990267）を選択することをお勧めします。このモデルはブート機能についてテスト済みであり、互換性の問題を減らし、試行錯誤のコストを最小限に抑えることができます。
:::

### Mini-PCleスロット

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig06.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig05.png" /></div>
<br />
<div class="table-center">

| スロット        | 対応プロトコル       |
| --------------- | ------------------ |
| Mini-PCIe 1    | 4G LTE             |
|                 | USB LoRa®          |
|                 | USB Zigbee         |
| Mini-PCIe 2    | SPI LoRa®          |
|                 | USB LoRa®          |
|                 | USB Zigbee         |

</div>

このデバイスには、Mini-PCIe スロット 1 と Mini-PCIe スロット 2 の 2 つの Mini-PCIe インターフェースがあります。スロット 1 は SIM カードスロットに接続され、USB プロトコルをサポートします。一方、スロット 2 は USB と SPI プロトコルの両方をサポートしますが、SIM カードスロットには接続されていません。そのため、4G LTE、USB LoRa®、USB Zigbee などのデバイスはスロット 1 を介して接続でき、SPI LoRa®、USB LoRa®、USB Zigbee デバイスはスロット 2 を介して接続できます。

### リセットホール

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig16.png" /></div>

reComputer R1000 のリセットホールには、ミニプッシュボタンスイッチが配置されています。このボタンを細い物体で押すことで、CM4 をリセットできます。このピンがハイになると、CM4 が起動したことを示します。このピンをローにすると、モジュールがリセットされます。

### Ethernet RJ45

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig15.png" /></div>
<br />
<div class="table-center">

| 名前  | タイプ                        | スピード          | PoE                                |
| ---- | --------------------------- | ------------------ | ---------------------------------- |
| ETH0 | CM4 ネイティブギガビットイーサネット | 10/100/1000 Mbit/s | サポート (追加モジュールが必要)       |
| ETH1 | USB から変換                  | 10/100 Mbit/s      | サポートされていない                |

</div>

reComputer R1000 には 2 つの Ethernet RJ45 ポートが搭載されています。ETH0 は CM4 ネイティブのギガビットイーサネットインターフェースで、10/100/1000 Mbit/s の 3 種類の速度をサポートします。このインターフェースを通じて PoE (Power-over-Ethernet) を有効にするためには、追加の PoE モジュールを購入する必要があります。もう一方の ETH1 は USB から変換されており、10/100 Mbit/s をサポートします。

### HDMI

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig17.png" /></div>

reComputer R1000 は CM4 からのネイティブ HDMI インターフェースを備えており、最大 4K @ 60 fps のビデオ出力をサポートします。複数のディスプレイを必要とするアプリケーションに最適で、外部の大型スクリーンにコンテンツを出力することができます。

### RTC

reComputer R1000 は RTC 回路を備えており、CR2032 バッテリーが事前にインストールされています。これにより、電源が失われた場合でも時刻保持機能を維持できます。

RTC (リアルタイムクロック) 機能をテストするには、以下の手順に従ってください：
1. 自動時刻同期を無効にします：

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
```

2. 2024年3月20日午後12:00に時刻を設定します：

```bash
sudo hwclock --set --date "2024-03-20 12:00:00"
```

3. RTC 時刻をシステムに同期します：

```bash
sudo hwclock --hctosys
```

4. RTC 時刻を確認します：

```bash
sudo hwclock -r
```

このコマンドは、RTC に保存されている時刻を読み取り、表示します。
5. RTC の電源を切断し、数分待ってから再接続し、RTC 時刻が正しい時刻を保持しているか確認します。

### ウォッチドッグ

reComputer R1000 は独立したハードウェアウォッチドッグ回路を備えており、異常なシステムクラッシュ時に自動的にシステムを再起動します。このウォッチドッグ回路は RTC を通じて実装されており、1 秒から 255 秒までの柔軟なフィードタイムを設定できます。

ウォッチドッグテストを実行するには、以下の手順に従ってください：

1. ウォッチドッグソフトウェアをインストールします：

```bash
sudo apt install watchdog 
```

2. ウォッチドッグ設定ファイルを編集します：

```bash
# 事前に vim をインストールしていない場合は、以下のコマンドでインストールしてください
sudo apt-get install vim
sudo vim /etc/watchdog.conf
```

設定を以下のように変更します：

```bash
watchdog-device		= /dev/watchdog
# デフォルトの 1 分以外のハードウェアタイムアウト値を使用する場合は、この行をアンコメントして編集してください。
watchdog-timeout	= 120
# ウォッチドッグが最初のタイムアウト間隔で自動的にトリップする場合は、以下の行をアンコメントして 'yes' に設定してください。
#watchdog-refresh-use-settimeout	= auto
# バグのあるウォッチドッグデバイス (例: 一部の IPMI 実装) を使用している場合は、この行をアンコメントして 'yes' に設定してください。
#watchdog-refresh-ignore-errors	= no
# ====================== その他のシステム設定 ========================
#
# テスト間隔。ハードウェアタイムアウト値より数秒短くする必要があります。
interval		= 15
max-load-1		= 24
#max-load-5		= 18
#max-load-15		= 12
realtime		= yes
priority		= 1
```

必要に応じて他の設定を調整してください。
3. ウォッチドッグサービスが実行中であることを確認します：

```bash
sudo systemctl start watchdog
```

4. システムハングをシミュレートしてウォッチドッグ機能をテストするには、以下のコマンドを実行します：

```bash
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

:::warning
このコマンドはカーネルクラッシュを引き起こし、ウォッチドッグがシステムを再起動するはずです。
:::

5. 指定したタイムアウト期間後にシステムが再起動することを確認します。
これらの手順に従うことで、システム上のウォッチドッグタイマーの機能をテストし、確認することができます。

## オプションインターフェースとモジュール

reComputer R1000 は豊富な拡張モジュールとアクセサリーをサポートしており、さまざまなシナリオや要件に適しています。reComputer R1000 をカスタマイズすることに興味がある場合は、odm@seeed.cc にお問い合わせください。  
以下はアクセサリーおよびオプションモジュールのリストです：

<div class="table-center">

<table>
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><strong>備考</strong></td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><strong>項目</strong></td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}><strong>製品名</strong></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}><strong>SKU</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={5} style={{height: 18, width: '25%'}}>LoRa®WAN機能のために一緒に使用する必要があります</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>LoRa®モジュール</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>地域選択可能 LoRaWAN ゲートウェイモジュール(SPI)-US915</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992969</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>地域選択可能 LoRaWAN ゲートウェイモジュール(SPI)-EU868</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993268</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>地域選択可能 LoRaWAN ゲートウェイモジュール(USB)-US915</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992991</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>地域選択可能 LoRaWAN ゲートウェイモジュール(USB)-EU868</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992628</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>LoRa®アンテナ</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LoRaアンテナキット - 868-915 MHz</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061501</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Zigbeeモジュール</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Mini-PCIe USB Zigbeeモジュール</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992005</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Zigbeeアンテナ</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Zigbeeアンテナキット for reComputer R</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061641</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Wi-Fi機能に必要なアクセサリ</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Wi-Fi/BLEアンテナ</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Raspberry Pi Compute Module 4 アンテナキット</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992364</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={8} style={{height: 18, width: '25%'}}>4G機能には4Gモジュールと4Gアンテナが必要、GPS機能には4GモジュールとGPSアンテナが必要</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={6} style={{height: 18, width: '25%'}}>4Gモジュール</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-AFXGA-Mini-PCIeモジュール - 北米向け</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991134</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-EUXGR-Mini-PCIeモジュール - EMEAおよびタイ向け</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991135</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-AUXGR-Mini-PCIeモジュール - オーストラリア向け</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991174</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-EFA-Mini-PCIeモジュール - タイ向け</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991214</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-EMGA-Mini-PCIeモジュール - マレーシア向け</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991234</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-JFA-mini-PCIe</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991296</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>4Gアンテナ</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>4Gモジュール用4Gアンテナキット</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061502</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>GPSアンテナ</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>EC25 4Gモジュール用GPSアンテナキット</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061521</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>暗号化チップ TPM 2.0</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>TPM 2.0モジュール with infineon SLB9670</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993114</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>SSDカード</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>NVMe M.2 2280 SSD 1TB</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990267</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>512GB NVMe M.2 PCle Gen3x4 2280 内部SSD</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990247</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>256GB NVMe M.2 PCle Gen3x4 2280 内部SSD</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990246</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>128GB NVMe M.2 PCle Gen3x4 2280 内部SSD</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990226</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>このモジュールはreComputer R1000のキャリアボードにハンダ付けする必要があります</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>PoE</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>MQ7813T120 PoEモジュールキット for reTerminal DM</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110991925</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>UPS</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>SuperCAP UPS LTC3350モジュール</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992004</td>
    </tr>
  </tbody>
</table>

</div>

reComputer R1000 メインボードには 2 つの Mini-PCIe スロットが搭載されています。Mini-PCIe スロット 1 は USB プロトコルを使用する 4G モジュール、LoRa® モジュール、および USB プロトコルを使用する Zigbee モジュールをサポートします。一方、Mini-PCIe スロット 2 は USB および SPI プロトコルを使用する LoRa® モジュールと USB プロトコルを使用する Zigbee モジュールをサポートします。

:::note
ボード上に 2 つの LoRa® モジュールを挿入することはできません。
:::

### Wi-Fi/BLE

reComputer R1000-10 は、オンボード Wi-Fi/BLE バージョンを備えた CM4 によって駆動されており、CM4 と同じ Wi-Fi/BLE パラメータを提供します。詳細なパラメータ情報については、Raspberry Pi の公式ウェブサイトを参照してください。

:::note
reComputer R1000 の金属製ケースのため、Wi-Fi/BLE 信号が金属外装を通過するのが難しい場合があります。Wi-Fi/BLE 機能が必要な場合は、外部アンテナを購入し、[こちらの組み立て手順](/ja/recomputer_r1000_assembly_guide/#assemble-wi-fible-antenna)を参照することをお勧めします。
:::

#### Wi-Fi に接続する

ステップ 1. Wi-Fi ネットワークをスキャンするには、以下を実行します：

```bash
nmcli dev wifi list
```

ステップ 2. Wi-Fi ネットワークに接続する：

```bash
sudo nmcli dev wifi connect network-ssid password "network-password"
sudo nmcli --ask dev wifi connect network-ssid # パスワードを画面に表示したくない場合は --ask オプションを使用できます。
```

ステップ 3. デバイスの電源を入れると、自動的に Wi-Fi に接続されます。保存された Wi-Fi 情報を削除したい場合は：

```bash
nmcli con del network-ssid
```

接続が切断された後、別の Wi-Fi に接続してください。

#### Bluetooth デバイスに接続する

Bluetooth デバイスを追加する前に、コンピュータ上で Bluetooth サービスが開始され、実行中である必要があります。これは systemctl コマンドで確認できます。

```bash
sudo systemctl status bluetooth
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/32.png" /></div>
<br />
Bluetooth サービスのステータスがアクティブでない場合、まず有効にする必要があります。その後、デバイスの起動時に自動的に開始するようにサービスを開始します。

```bash
sudo systemctl enable bluetooth
sudo systemctl start bluetooth
```

bluetoothctl ツールを使用して Bluetooth を接続および管理できます。以下は一般的なコマンドとコメントです：

```bash
# デバイスにアタッチされたものをスキャン
bluetoothctl scan on

# Bluetooth アダプタを他のデバイスから検出可能にするには、次のコマンドを使用します：
bluetoothctl discoverable on

# 以下の A4:C1:38:F4:83:2E を接続したい Media Access Control (MAC) アドレスに置き換えます
# 新しい Bluetooth デバイスをペアリング
bluetoothctl pair A4:C1:38:F4:83:2E

# 以前にペアリングしたデバイスに接続
bluetoothctl connect A4:C1:38:F4:83:2E

# システムとペアリングされたデバイスのリストを表示
bluetoothctl paired-devices

# Bluetooth デバイスが信頼されている場合、システムはそれを検出後に自動的に接続します
bluetoothctl trust A4:C1:38:F4:83:2E

# 信頼をキャンセル
bluetoothctl untrust A4:C1:38:F4:83:2E

# ペアリングされた Bluetooth デバイスを削除
bluetoothctl remove A4:C1:38:F4:83:2E

# Bluetooth 接続を切断するが、ペアリングリストからは削除しない
bluetoothctl disconnect A4:C1:38:F4:83:2E

# 特定のデバイスがシステムに接続するのをブロック
bluetoothctl block A4:C1:38:F4:83:2E

# デバイスのブロックを解除
bluetoothctl unblock A4:C1:38:F4:83:2E

# インタラクティブモードを使用して終了
bluetoothctl
exit 
```

### 4G モジュール

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113991135--lte-cat-4-ec25-eux-mini-pcie-font_1.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

reComputer R1000 メインボードには 2 つの Mini-PCIe スロットが搭載されており、Mini-PCIe スロット 1 は USB プロトコルを使用する 4G モジュールをサポートします。Quectel の EC25 4G モジュールは、reComputer R1000 との互換性が完全にテストされています。

:::note
4G 機能が必要な場合は、対応する 4G モジュールと外部アンテナを購入する必要があります。[こちらの組み立て手順](/ja/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna)を参照してください。
:::

AT コマンドを使用して minicom 経由で 4G モジュールと対話するには、以下の手順に従ってください：

**ステップ 1.** システムの電源を入れる前に、4G 対応の SIM カードを [SIM カードスロット](/ja/recomputer_r/#sim-slot) に挿入してください。

**ステップ 2.** ```lsusb``` を使用して EC25-EUX が検出されるか確認します。

```
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

**ステップ 3.** シリアル通信ツール minicom をインストールします。

```sh
sudo apt install minicom
```

**ステップ 4.** minicom を使用して EC25-EUX 4G モジュールに接続します。

```sh
sudo minicom -D /dev/ttyUSB2 -b 1152008n1
```

シリアル接続が開いたら、「AT」と入力して「Enter」を押すと、「OK」と表示されるはずです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**ステップ 5.** 4G モジュールを有効にして 4G ネットワークに接続します。

同じ minicom シリアルウィンドウで以下を入力してください：

```sh
AT+QCFG="usbnet"
```

```+QCFG: "usbnet",0,``` のような結果が返されますが、これを 1（ECM モード）に設定する必要があります。以下のコマンドを入力してください：

```sh
AT+QCFG="usbnet",1
```

次に、モデムを再起動するために以下のコマンドを入力します：

```sh
AT+CFUN=1,1
```

その後、再起動するか、モジュールが SIM カードキャリアからインターネットを取得するまでしばらく待ちます。

`ifconfig` コマンドを使用して reComputer R1000 のネットワーク状態を確認することもできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image33.png"/></div>

### LoRa® モジュール

:::note
2 つの Mini-PCIe スロットの両方が USB プロトコルを使用する LoRa® モジュールをサポートします。一方、Mini-PCIe スロット 2 は SPI プロトコルを使用する LoRa® モジュールもサポートします。Seeed Studio の WM1302 モジュールは、reComputer R1000 との互換性が完全にテストされています。ただし、USB バージョンを使用する場合は、4G モジュール用に設計された Mini PCIe を利用する必要があります。そのため、4G モジュールと LoRaWAN® モジュールの両方を使用したい場合は、WM1302 LoRaWAN® モジュールの SPI バージョンを選択してください。
<br />
LoRa® 機能が必要な場合は、対応する LoRa® モジュールと外部アンテナを購入する必要があります。
:::

<!-- コード -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 SPI Module" label="WM1302 SPI Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992967-spi-us915.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1302-LoRaWAN-Gateway-Module-SPI-US-915-p-5454.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<br />

**ステップ 1.** [LoraWAN® Module Hardware assembly](/ja/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna) ガイドを参照して、`WM1302 SPI LoraWAN® Module` を `LoraWAN® Mini PCIe スロット` に取り付けてください。このスロットには *`Lora`* のシルクスクリーンが見えるはずです。

**ステップ 2.** コマンドラインで `sudo raspi-config` を入力して Raspberry Pi ソフトウェア設定ツールを開きます：

- Interface Options を選択
- SPI を選択し、**Yes** を選択して有効化
- I2C を選択し、**Yes** を選択して有効化
- Serial Port を選択し、「ログインシェルを使用しますか？」には **No** を選択し、「シリアルポートハードウェアを使用しますか？」には **Yes** を選択

これが完了したら、これらの設定が有効になるよう Raspberry Pi を再起動してください。

**ステップ 3.** [WM1302 コード](https://github.com/Lora-net/sx1302_hal) を reComputer R1000 にダウンロードしてコンパイルします。

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo vim ./libloragw/inc/loragw_i2c.h
```

`#define I2C_DEVICE "/dev/i2c-1"` を `#define I2C_DEVICE "/dev/i2c-3"` に変更します。

```bash
sudo make
```

**ステップ 4.** reset_lgw.sh スクリプトをコピーします。

```bash
vim ./tools/reset_lgw.sh
```

コードを修正します：

```bash
SX1302_RESET_PIN=580     # SX1302 リセット
SX1302_POWER_EN_PIN=578  # SX1302 電源有効化
SX1261_RESET_PIN=579     # SX1261 リセット (LBT / スペクトルスキャン)
// AD5338R_RESET_PIN=13    # AD5338R リセット (全二重 CN490 リファレンスデザイン)
```

```
cp ./tools/reset_lgw.sh ./packet_forwarder/
```

**ステップ 5.** `global_conf.json.sx1250.EU868` 設定ファイルの内容を修正します：

```sh
cd packet_forwarder
vim global_conf.json.sx1250.EU868
```

`"com_path": "/dev/spidev0.0"` を `"com_path": "/dev/spidev0.1"` に変更します。

**ステップ 6.** LoraWAN® モジュールを起動します。

以下のコードを実行して、WM1302 の動作周波数バージョンに応じて LoraWAN® モジュールを起動します。

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.EU868
```

</TabItem>
<TabItem value="WM1302 USB Module" label="WM1302 USB Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

**ステップ 1.** [LoraWAN® Module Hardware assembly](/ja/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna) ガイドを参照して、`WM1302 USB LoraWAN® Module` を `4G Mini PCIe スロット` に取り付けてください。このスロットには *`4G`* のシルクスクリーンが見えるはずです。

**ステップ 2.** コマンドラインで `sudo raspi-config` を入力して Raspberry Pi ソフトウェア設定ツールを開きます：

- Interface Options を選択
- I2C を選択し、**Yes** を選択して有効化
- Serial Port を選択し、「ログインシェルを使用しますか？」には **No** を選択し、「シリアルポートハードウェアを使用しますか？」には **Yes** を選択

これが完了したら、これらの設定が有効になるよう Raspberry Pi を再起動してください。

**ステップ 3.** [WM1302 コード](https://github.com/Lora-net/sx1302_hal) を reTerminal にダウンロードしてコンパイルします。

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo vim ./libloragw/inc/loragw_i2c.h
```

`#define I2C_DEVICE "/dev/i2c-1"` を `#define I2C_DEVICE "/dev/i2c-3"` に変更します。

```bash
sudo make
```

**ステップ 4.** reset_lgw.sh スクリプトをコピーします。

```bash
vim ./tools/reset_lgw.sh
```

コードを修正します：

```bash
SX1302_RESET_PIN=580     # SX1302 リセット
SX1302_POWER_EN_PIN=578  # SX1302 電源有効化
SX1261_RESET_PIN=579     # SX1261 リセット (LBT / スペクトルスキャン)
// AD5338R_RESET_PIN=13    # AD5338R リセット (全二重 CN490 リファレンスデザイン)
```

```
cp ./tools/reset_lgw.sh ./packet_forwarder/
```

**ステップ 5.** `global_conf.json.sx1250.EU868.usb` 設定ファイルの内容を修正します：

```sh
cd packet_forwarder
vim global_conf.json.sx1250.EU868.usb
```

`"com_path": "/dev/spidev0.0"` を `"com_path": "/dev/spidev0.1"` に変更します。

**ステップ 6.** LoraWAN® モジュールを起動します。

以下のコードを実行して、WM1302 の動作周波数バージョンに応じて LoraWAN® モジュールを起動します。

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.usb
```

このコマンドは、LoRa® USB 用の設定ファイルを指定します。

</TabItem>
</Tabs>

<!-- コード終了 -->

### Zigbee モジュール

Mini-PCIe スロットは USB プロトコルを利用する Zigbee モジュールをサポートしており、対応デバイスへの Zigbee 機能のシームレスな統合を可能にします。この機能により、Zigbee ネットワーク内での効率的な通信と制御が実現し、システムの多様性と接続性が向上します。Zigbee モジュール用に 2 つの Mini-PCIe スロットが利用可能であり、ユーザーは多様なアプリケーションを柔軟に実装して信頼性を向上させることができます。

:::note
Zigbee 機能が必要な場合は、対応する Zigbee モジュールと外部アンテナを購入する必要があることにご注意ください。
[組み立て手順はこちらをクリックしてください](/ja/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna)。
:::

#### Zigbee コーディネーターとして Zigbee モジュールを使用して reComputer R1000 をセットアップする：

**ステップ 1.** シリアルポートを確認：
以下のコマンドを使用して利用可能なシリアルポートを確認します：

```bash
cat /dev/ttyACM*
```

**ステップ 2.** シリアル通信ツールをインストールし、*cutecom* を起動してUIを開きます：

```bash
sudo apt-get install cutecom
```

**ステップ 3.** 設定を構成して通信を開始します：
* ボーレートを115200に設定します
* 下部の「Hex output」にチェックを入れます
* 正しいデバイスポートを選択します（例：/dev/ttyACM0）
* 「Open」をクリックして通信を設定します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbee1.png" /></div>

:::note
詳細情報については、[E18-MS1PA2-IPX](https://www.ebyte.com/product-view-news.html?id=894) を参照してください。Hexコマンドの指示については、[Ebyte Zigbee 3.0 Module HEX Command Standard Specification](https://www.ebyte.com/pdf-down.aspx?id=2936) を参照してください。
:::

**ステップ 4.** Zigbeeモジュールをコーディネーターとして設定します  
モジュールがHEXコードモードであることを確認した後、以下の手順で最初のZigbeeモジュールを設定します：

- コーディネーターとして設定：コマンド `55 04 00 05 00 05` を送信し、応答として `55 04 00 05 00 05` を期待します。<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand.png" /></div>

- デバイスをリセット：リセットボタンを押すか、コマンド `55 07 00 04 00 FF FF 00 04` を送信します。<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand2.png" /></div>

- ネットワーク形成：コマンド `55 03 00 02 02` を送信します。<br />
  <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand3.png" /></div>

:::note
チェックディジット計算には、[Block Check Character calculator](https://bcc.beyerleinf.de/) ツールを使用できます。また、SSCOMやXCOMなどのシリアル通信ツールを使用してBCCを計算することも可能です。
:::

**ステップ 5.** デバイスの状態を確認します：  
コマンド `5 03 00 00 00` を送信してデバイスの状態を確認します。応答として `55 2a 00 00 00 01 XX XX XX XX` のような形式を期待します。ここで `XX` はデバイス情報を表します。

**ステップ 6.** 透過モードに入ります：  
ネットワーク形成が成功した場合、コマンド `55 07 00 11 00 03 00 01 13` を送信して透過モードに入ります。両方のモジュールが直接通信のために透過モードにある必要があります。入力モードを *None* に設定することを忘れないでください。透過モードを終了するには、`+++` を送信します。  
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand4.png" /></div>

**ステップ 7.** 追加の注意事項：  
- ルーター設定が失敗した場合、デバイスはすでにコーディネーターである可能性があります。コマンド `55 07 00 04 02 xx xx xx` を使用してネットワークを離脱します。
- コマンド `55 04 0D 00 00 0D`（クエリ）および `55 04 0D 01 XX XX`（設定）を使用して送信電力をテストします。

その後、ZigbeeデバイスをreComputer R1000にZHA、zigbee2mqtt、Tasmotaプラットフォームなどを介して接続できます。

### PoE

reComputer R1000は、PoE電源モジュールを追加することでIEEE 802.3af標準をサポートする給電デバイスとして動作します。PoE機能を使用するには、デバイスを分解してPoEモジュールを取り付ける必要があります。

:::note
reComputer R1000はPoE電源供給をサポートしていますが、標準製品にはPoEモジュールがデフォルトで含まれていません。Seeedはバッチカスタマイズ注文向けにPoEのはんだ付けおよび組み立てサービスを提供できます。ただし、顧客がサンプルをテストする場合は、[PoEモジュールを自分ではんだ付けおよび組み立てる必要があります](/ja/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module)。
:::

### M.2スロット

reComputer R1000は、基板上の2つのMini-PCIeスロットの下にあるPCIeスロット（J62）を使用して、2280 NVMe SSDおよびAIアクセラレータ（Hailo）をサポートします。CM4のPCIeはGen2.0で、理論上の最大速度は5Gbpsです。Gen3.0以上のSSDを使用する場合、SSDの最大速度を達成できない可能性があります。テストの結果、SSDを搭載したreTerminal DMは、最大書き込み速度230MB/s、最大読み取り速度370MB/sを達成しました。どのSSDが互換性があるかわからない場合は、以下のアクセサリリストに従って購入できます。

[組み立て手順はこちらをクリックしてください](/ja/recomputer_r1000_assembly_guide/#assemble-ssd)。

<div class="table-center">

<table >
  <tbody>
  <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>SSDカード</td>
      <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>NVMe M.2 2280 SSD 1TB</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html">112990267</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>512GB NVMe M.2 PCle Gen3x4 2280 内部SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html">112990247</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>256GB NVMe M.2 PCle Gen3x4 2280 内部SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html">112990246</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>128GB NVMe M.2 PCle Gen3x4 2280 内部SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html">112990226</a></td>
  </tr>
  </tbody>
</table>

</div>

:::note
ご注意ください：<br />
1- スピードテストの結果は、SSDモデル、テスト方法、およびテスト環境によって異なる場合があります。ここで提供されている値は参考目的のみであり、Seeedのラボで取得されたものです。<br />

SSDカードには主に2つの用途があります：<br />
1. **大容量ストレージ**: SSDカードは大容量ストレージのニーズに利用できます。<br />
2. **イメージ付きのブートドライブ**: もう1つの用途は、SSDを大容量ストレージとして使用するだけでなく、システムイメージを保存して直接SSDカードからブートすることです。<br />
ただし、市場に出回っているすべてのSSDカードがこの2番目の用途をサポートしているわけではありません。そのため、ブートドライブとして使用する予定があり、どのモデルを購入すべきか迷っている場合は、弊社推奨の**1TB SSD(SKU [112990267](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html))**を選択することをお勧めします。このモデルはブート機能についてテストおよび検証済みであり、互換性の問題を減らし、試行錯誤のコストを最小限に抑えることができます。
:::

### 暗号化チップ TPM 2.0

TPMには、Trusted Computing Group (TCG) TPM 2.0仕様に準拠したInfineonのOPTIGA™ TPM SLB9670が搭載されています。この暗号化チップは、reComputer R1000に推奨されており、SPIインターフェースを備え、ボード上のJ13ポートに適用されます。これにより、プラットフォームの整合性のルートオブトラスト、リモート認証、および暗号化サービスが可能になります。

:::note
[組み立て手順はこちらをクリックしてください](/ja/recomputer_r1000_assembly_guide/#assemble-tpm-20-module)。
:::

TPM 2.0モジュールをデバイスに接続した場合、以下のコードを使用してTPM接続を確認できます。

```bash
ls /dev | grep tpm
```

出力に**tpm0**および**tpmrm0**が表示された場合、TPM（Trusted Platform Module）デバイスが検出され、システムで利用可能であることを意味します。これは、TPMハードウェアが認識され、アクセス可能であることを示しており、良好な状態を示します。これにより、TPM関連の機能やアプリケーションを安心して使用することができます。


### UPS

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/30.png" /></div>

UPSは7Fで、直列で動作します。UPSモジュールはDC5VとCM4コンポーネントの間に配置されており、GPIO信号を使用して5V電源が失われた場合にCPUに警告を送ります。この信号を受信すると、CPUはスーパーキャパシタのエネルギーが枯渇する前に緊急スクリプトを実行し、"$ shutdown"コマンドを開始します。
<br />
UPSによって提供されるバックアップ時間は、システム負荷に大きく依存します。以下は、4GB RAM、32GB eMMCストレージ、Wi-Fiモジュールを搭載したCM4モジュールでテストされた典型的なシナリオです。
<br />

| 動作モード         | 時間(s) | 備考                                                         |
| ----------------- | ------- | ------------------------------------------------------------ |
| アイドル状態       | 37      | 公式ドライバープログラムをロードしたアイドル状態でのテスト       |
| CPUフルロード      | 18      | `stress -c 4 -t 10m -v &`                                    |

:::note
UPS機能については、詳細情報をお問い合わせください。アラーム信号はアクティブLOWです。
[組み立て手順はこちらをクリックしてください](/ja/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module)。
:::

CPUとDC/AC電源間のGPIO25は、5V電源がダウンした際にCPUに警告を送るために使用されます。その後、CPUはスーパーキャパシタのエネルギーが枯渇する前にスクリプトで緊急処理を行い、`$ shutdown`を実行する必要があります。
<br />
この機能を使用するもう1つの方法は、GPIOピンの変化時にシャットダウンを開始することです。指定されたGPIOピンは、KEY_POWERイベントを生成する入力キーとして構成されます。このイベントはsystemd-logindによって処理され、シャットダウンが開始されます。`/boot/overlays/README`を参照し、`/boot/config.txt`を変更してください。

```bash
dtoverlay=gpio-shutdown,gpio_pin=25,active_low=1
```

:::note
1. UPS機能については、詳細情報をお問い合わせください。
2. アラーム信号はアクティブLOWです。
:::

以下のPythonコードは、GPIO25を介してスーパーキャパシタUPSの動作モードを検出し、システムの電源がオフになった際にデータを自動的に保存してシャットダウンするデモです。

```python
import RPi.GPIO as GPIO
import time,os

num = 0

GPIO.setmode(GPIO.BCM)
# GPIO25を入力モードに設定
# ソフトウェア安定化のために500msのジッター時間を追加
GPIO.setup(25,GPIO.IN,pull_up_down = GPIO.PUD_UP)
GPIO.add_event_detect(25,GPIO.FALLING, bouncetime = 500) 
while True:
  if GPIO.event_detected(25):
    print('...外部電源オフ...')
    print('')
    os.system('sync')
    print('...データ保存中...')
    print('')
    time.sleep(3)
    os.system('sync')
    # 2回データ保存
    while num<5:
      print('-----------')
      s = 5-num
      print('---' + str(s) + '---')
      num = num + 1
      time.sleep(1)
    print('---------')
    os.system('sudo shutdown -h now')
```



### DSI & スピーカー

1つのDSI（J24）および1つの4ピンスピーカー（J7）インターフェースがボード上に予約されており、特別な用途に使用できます。ユーザーは自身のニーズに応じてプラグインを購入する必要があります。

## 追加リソース

*  [ユーザーマニュアル-reComputer R1000](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputerR_UserManual_version01.pdf)
*  [ユーザーマニュアル-reComputer R1000（中国語）](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputerR_UserManual_CN_version01.pdf)
*  [reComputer R1000 3Dファイル](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000.stp)
*  [reComputer R1000 回路図設計、PCB設計](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_schematic_design_files.zip)
*  [reComputer R1000 フライヤー](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_flyer.pdf)
*  [reComputer R1000 フライヤー（中国語）](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_flyer_CN.pdf)
*  [reComputer R1000 v1.1 ピンアサインメント](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_v1_1_Pin_Assignment.xlsx)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>