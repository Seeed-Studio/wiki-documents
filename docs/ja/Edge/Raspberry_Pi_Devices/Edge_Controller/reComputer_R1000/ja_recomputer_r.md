---
description: reComputer R1000 入門ガイド
title: reComputer R1000 入門ガイド
keywords:
  - Edge
  - reComputer R1000
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/113991274-2_3.webp
slug: /ja/recomputer_r
last_update:
  date: 09/15/2025
  author: Kasun Thushara
---

<!-- ---
name: The reComputer R1000 edge IoT controller is built on the high-performance Raspberry Pi CM4 platform, featuring a quad-core A72 processor with a maximum support of 8GB RAM and 32GB eMMC.
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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

<br />

reComputer R1000 エッジ IoT コントローラーは、高性能な Raspberry Pi CM4 プラットフォーム上に構築されており、クアッドコア A72 プロセッサを搭載し、最大 8GB RAM と 32GB eMMC をサポートします。柔軟に設定可能なデュアル Ethernet インターフェースを装備し、BACnet、Modbus RTU、Modbus TCP/IP プロトコルをサポートする 3 つの絶縁された RS485 チャンネルも含まれています。
堅牢な IoT ネットワーク通信機能を備えた R1000 シリーズは、4G、LoRa®、Wi-Fi/BLE を含む複数のワイヤレス通信オプションをサポートし、対応するワイヤレスゲートウェイとして機能する柔軟な設定を可能にします。このコントローラーは、リモートデバイス管理、エネルギー管理、およびスマートビルディング分野のその他様々なシナリオに適しています。

## 特徴

### ビルディングオートメーションシステム向け設計

- 複数の絶縁された RS485 チャンネルが高速・低速通信をサポート。

- BACnet、Modbus RTU、Modbus TCP/IP プロトコルをサポート
- 最大 8GB RAM が数千のデータポイントの処理をサポートし、効率的なパフォーマンスを保証
- 明確な両面 LED インジケーターが動作状態の迅速な確認を支援
- 高品質な金属ケース、DIN レールおよび壁面取り付けに対応
- カスタマイズされた OS 用に Yocto と Buildroot をサポート

### 強力なパフォーマンス

- Raspberry Pi CM4 を搭載

- Broadcom BCM2711 クアッドコア Cortex-A72 (ARM v8) 64 ビット SoC @ 1.5GHz
- 最大 8GB RAM と 32GB eMMC

### 豊富なワイヤレス機能

- オンチップ Wi-Fi

- オンチップ BLE
- Mini-PCIe1: LTE、USB LoRa®、USB Zigbee
- Mini-PCIe2: SPI LoRa®、USB LoRa®、USB Zigbee

### 豊富なインターフェース

- 3x RS485（絶縁）

- 1x 10M/100M/1000M Ethernet（PoE サポート）
- 1x 10M/100M Ethernet
- 1x HDMI 2.0
- 2x Type-A USB2.0
- 1x Type-C USB2.0（OS アップデート用 USB コンソール）
- 1x SIM カードスロット

### 安全性と信頼性

- ハードウェアウォッチドッグ

- UPS スーパーキャパシタ（オプション）
- PC サイドパネル付き金属筐体
- ESD: EN61000-4-2、レベル 3
- EFT: EN61000-4-4、レベル 2
- サージ: EN61000-4-5、レベル 2
- 製品寿命: reComputer R1000 は少なくとも 2030 年 12 月まで生産継続予定

> \*4G と LoRa® モジュールは reComputer R1000 にデフォルトで付属していません。関連モジュールを別途ご購入ください。

## 命名規則

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig11.png" alt="pir" width="800" height="auto"/></p>

## 仕様

<div class="table-center">
<table >
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Raspberry Pi CM4、クアッドコア Cortex-A72@ 1.5GHz</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>オペレーティングシステム</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Raspberry Pi OS、Ubuntu</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 ピン端子台</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>PoE（受電デバイスとして）</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>アイドル: 2.88W; フル負荷: 5.52W</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>Ethernet</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps（PoE* サポート）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100 Mbps IEEE802.3/802.3u</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>USB</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 x USB-A 2.0 ホスト</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x USB-C 2.0（OS フラッシュ用）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RS485</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>3 x 3 ピン端子台（絶縁）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>SIM カードスロット</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>標準SIMカードをサポート</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>M.2スロット</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>M.2 NVMe SSDをサポート</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LED</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6個のLEDインジケータ</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>LCD*をサポート（筐体内のボード上）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>スピーカー（予約済み）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>マイクロフォン*をサポート（筐体内のボード上）</td>
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
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>規格</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={3} style={{height: 18, width: '35.4622%'}}>EMC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>ESD: EN61000-4-2、レベル3</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>EFT: EN61000-4-4、レベル2</td>
    </tr>
     <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>サージ: EN61000-4-5、レベル2</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={4} style={{height: 18, width: '35.4622%'}}>認証</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>CE、FCC</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>保護等級</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>保存温度</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>-40~80 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>その他</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>スーパーキャパシタUPS</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>SuperCAP UPS LTC3350モジュール*</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>暗号化チップTPM 2.0*</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2年</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>製品寿命</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2030年12月まで</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>注記</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>*印のオプションは、アクセサリリストに従って別途購入が必要です。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>コンポーネントとインターフェース状態説明</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>予約済み</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>将来の使用または拡張のために指定されています。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>オプション</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>必須ではないコンポーネント、ユーザーが含めるか除外するかを選択できます。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>使用中</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>現在使用中で、製品機能に不可欠です。</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6061アルミニウム合金ケーシング、透明PCサイドパネル付き</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>取り付け</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>DINレール/壁面</td>
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

reComputer R1000は3つの電源供給オプションをサポートしています：AC、DCターミナル、PoEポート。デフォルトでは、reComputer R1000はAC/DCターミナル（公式地域別電源アダプタSKU：110061505/110061506）を通じて電源供給されますが、**PoE電源供給（PoEモジュール、SKU：110991925）はオプション**です。これにより電源供給の選択に柔軟性が提供され、様々な電源との簡単な統合が可能になります。

### 2ピン電源ターミナル

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

reComputer R1000は公称AC電圧12〜24VまたはDC電圧9〜36Vで供給されます。電源は2ピン電源ターミナルブロックコネクタを介して接続されます。reComputer R1000をアースするには、電源ターミナルの左上角にあるネジにアース線を固定できます。

:::note
電源ソリューションは逆極性保護のためにブリッジ整流ダイオードを使用し、ACとDCの両方の入力に対応しています。これにより、**電源の正極と負極の端子がどのように接続されても**、回路が損傷することはありません。ブリッジ整流器を使用することで、入力DC極性に関係なく出力電圧極性が固定され、効果的な逆極性保護が提供されます。
:::

### POE（オプション）

PoEモジュールが取り付けられている場合、reComputer R1000のETH0ポートはPoE電源供給をサポートし、イーサネット経由でデバイスに電力を供給する便利で効率的な方法を提供します。このオプションにより設置プロセスが簡素化され、必要なケーブル配線量が削減されるため、電源が限られているアプリケーションや電源コンセントが容易に利用できない場所での理想的なソリューションとなります。

- PoE入力：範囲44〜57V；標準48V
- PoE出力：12V、1.1A最大

:::note
reComputer R1000に提供されるPoEモジュールはIEEE 802.3af規格に準拠しており、最大12.95Wの電源供給が可能であることは注目に値します。したがって、SSDや4Gモジュールなどの高電力周辺機器を接続する必要がある場合、PoE電源供給では不十分な場合があります。この場合、デバイスの安定した信頼性のある動作を確保するために、代わりにAC/DCターミナルを電源供給に使用することをお勧めします。
:::

### 消費電力

Seeed Studioの実験室でテストされたreComputer R1000の消費電力については、以下の表を参照してください。テスト方法と環境により結果に変動が生じる可能性があるため、この値は参考値であることにご注意ください。

| ステータス   | 電圧 | 電流 | 消費電力 | 説明 |
|   ---      |    ---    |   ---      |         ---          |        ---    |
|シャットダウン  |24V      |  51mA  |    1.224W         | シャットダウンおよび電源オフ状態での静的消費電力テスト。|
|アイドル      |24V      |  120mA |    2.88W          | テストプログラムを実行せずにreComputer R1000デバイスに24V電源を供給した際の入力電流をテスト。|
|フル負荷 |24V      |  230mA  |    5.52W          | "stress -c 4"コマンドを使用してCPUをフル負荷で動作するよう設定。外部デバイスは接続なし。 |

### 電源オンと電源オフ

reComputer R1000にはデフォルトで電源ボタンが付属しておらず、電源が接続されるとシステムが自動的に起動します。シャットダウン時は、オペレーティングシステムでシャットダウンオプションを選択し、電源を切断する前にシステムが完全にシャットダウンするまで待ってください。システムを再起動するには、単に電源を再接続してください。

:::note
シャットダウン後は、内部コンデンサが完全に放電されるよう、システムを再起動する前に少なくとも10秒間待ってください。
:::

## ブロック図

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig12.png" /></div>

### IIC図

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig10.png" /></div>

## インターフェース

<div class="table-center">
<table >
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>インターフェース</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>イーサネット</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>3 x 3ピンターミナルブロック（絶縁）</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6 x LEDインジケータ</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>LCD*をサポート（筐体内のボード上）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Speaker*</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>マイク*をサポート（筐体内のボード上）</td>
    </tr>
  </tbody>
</table>
</div>

GPIOマッピングとオフセットを照会するには、以下のコマンドを使用してください：

```bash
cat /sys/kernel/debug/gpio
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/16.png" /></div>

### LEDインジケータステータス

reComputer R1000には、マシンの動作状態を示す6つのLEDインジケータが搭載されています。各LEDの具体的な機能とステータスについては、以下の表を参照してください：

| LEDインジケータ | 色             | ステータス | 説明                                                         |
| --------------- | -------------- | ---------- | ------------------------------------------------------------ |
| PWR             | 緑             | 点灯       | デバイスが電源に接続されています。                           |
|                 |                | 消灯       | デバイスが電源に接続されていません。                         |
| ACT             | 緑             |            | Linuxでは、このピンがeMMCアクセスを示すために点滅します。<br />起動中にエラーが発生した場合、このLEDは<br />[Raspberry Piウェブサイトの表](https://www.raspberrypi.com/documentation/computers/configuration.html#led-warning-flash-codes)を使用してデコードできるエラーパターンで点滅します。 |
| USER            | 緑/赤/青       |            | ユーザーによって定義される必要があります。                   |
| RS485-1         | 緑             | 消灯       | RS485チャンネル1でデータ転送がありません。                   |
|                 |                | 点滅       | RS485チャンネル1がデータを受信または送信しています。         |
| RS485-2         | 緑             | 消灯       | RS485チャンネル2でデータ転送がありません。                   |
|                 |                | 点滅       | RS485チャンネル2がデータを受信または送信しています。         |
| RS485-3         | 緑             | 消灯       | RS485チャンネル3でデータ転送がありません。                   |
|                 |                | 点滅       | RS485チャンネル3がデータを受信または送信しています。         |

**ACTステータス表**

| **長い点滅**     | **短い点滅**      | **ステータス**                      |
| ---------------- | ----------------- | ----------------------------------- |
| 0                | 3                 | 一般的な起動失敗                    |
| 0                | 4                 | start*.elfが見つかりません          |
| 0                | 7                 | カーネルイメージが見つかりません    |
| 0                | 8                 | SDRAM障害                           |
| 0                | 9                 | SDRAM不足                           |
| 0                | 10                | HALT状態                            |
| 2                | 1                 | パーティションがFATではありません   |
| 2                | 2                 | パーティションからの読み取り失敗    |
| 2                | 3                 | 拡張パーティションがFATではありません |
| 2                | 4                 | ファイル署名/ハッシュ不一致 - Pi 4  |
| 4                | 4                 | サポートされていないボードタイプ    |
| 4                | 5                 | 致命的なファームウェアエラー        |
| 4                | 6                 | 電源障害タイプA                     |
| 4                | 7                 | 電源障害タイプB                     |

ACT LEDが規則的な4回点滅パターンで点滅する場合、ブートコード（start.elf）が見つかりません
ACT LEDが不規則なパターンで点滅する場合、起動が開始されています。
ACT LEDが点滅しない場合、EEPROMコードが破損している可能性があります。何も接続せずに再試行して確認してください。詳細については、Raspberry Piフォーラムを確認してください：
STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums
詳細については、[Raspberry Piフォーラム](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151)を確認してください。

ユーザーLEDを制御するには、Linuxカーネルが提供する疑似ファイルシステムであるsysfsの使用をお勧めします。これは、さまざまなカーネルサブシステム、ハードウェアデバイス、および関連するドライバーに関する情報を公開します。ReComputer R1000では、ユーザーLEDインターフェースを3つのデバイスファイル（led-red、led-blue、led-green）に抽象化し、ユーザーがこれらのファイルと対話するだけでLEDライトを制御できるようにしています。例は以下の通りです：

1. 赤色LEDを点灯するには、ターミナルで以下のコマンドを入力してください：

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
```

2. 赤色LEDを消灯するには、ターミナルで以下のコマンドを入力してください：

```bash
echo 0 | sudo tee /sys/class/leds/led-red/brightness
```

3. 赤色と緑色のLEDを同時に点灯することができます。ターミナルで以下のコマンドを入力してください：

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
echo 1 | sudo tee /sys/class/leds/led-green/brightness
```

### ブザー

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig07.png" /></div>

reComputer R1000にはアクティブブザーが搭載されており、アラームやイベント通知など様々な目的で使用できます。ブザーはreComputer R1000 v1.0ではGPIO21を通じてCM4に制御され、reComputer R1000 1.1ではGPIO20を通じてCM4に制御されます。

:::note
ハードウェアリビジョン（v1.0とv1.1）を区別するには、[reComputer R1000 V1.1製品変更詳細](https://wiki.seeedstudio.com/ja/recomputer_r1000_v1_1_description/)を参照してください。
:::

reComputer R1000 v1.0ユーザーの場合、ブザーはGPIO-21に接続されています。ブザーをオン/オフするには、ターミナルで以下のコマンドを入力してください：

```bash
raspi-gpio set 21 op dh # turn on
raspi-gpio set 21 op dl # turn off
```

reComputer R1000 v1.1ユーザーの場合、ブザーはPCA9535 P15に接続されています。ブザーをオフ（オン）するには、ターミナルで以下のコマンドを入力してください：

```bash
echo 591 | sudo tee /sys/class/gpio/export
echo out | sudo tee /sys/class/gpio/gpio591/direction
echo 1 | sudo tee /sys/class/gpio/gpio591/value # turn on
echo 0 | sudo tee /sys/class/gpio/gpio591/value # turn off
```

### RS485

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig21.png" /></div>

reComputer R1000には3ピンコネクタを使用した3セットのRS485インターフェースが搭載されており、産業および自動化アプリケーションでの安全で信頼性の高い動作を確保するために、信号と電源の両方が絶縁されています。RS485AとRS485B信号は容量絶縁を使用して絶縁されており、優れたEMI耐性を提供し、RS485インターフェースの高速通信要件を満たします。
デフォルトでは、120Ω終端抵抗は取り付けられていません。ただし、パッケージボックスには5つの表面実装抵抗器が含まれています。必要に応じて、ユーザーは抵抗器をデバイスに自分ではんだ付けする必要があります。

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position.png" /></div>

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position2.png" /></div>

:::note
RS485インターフェースは絶縁電源を使用しているため、RS485インターフェースに接続される外部デバイスのグランド信号はGND_ISOピンに接続する必要があります。

:::

これらは、データ表のreComputerの485インターフェースに関連するピンです。

| RS485         | RS485_POWER_EN         | OSデバイスファイル | P14         | デフォルト（High） |
| ------------- | ---------------------- | ------------------ | ----------- | ------------------ |
| TX5           |                        | /dev/ttyAMA5       | GPIO12      |                    |
| RX5           |                        |                    | GPIO13      |                    |
| TX2           | ID_SD                  | /dev/ttyAMA2       | GPIO0/ID_SD |                    |
| RX2           | ID_SC                  |                    | GPIO1/ID_SC |                    |
| TX3           |                        | /dev/ttyAMA3       | GPIO4       |                    |
| RX3           |                        |                    | GPIO5       |                    |
| RS485_1_DE/RE | (High/DE \|\| Low/RE)  | /dev/ttyAMA2       | GPIO6       | デフォルトLow      |
| RS485_2_DE/RE |                        | /dev/ttyAMA3       | GPIO17      | デフォルトLow      |
| RS485_3_DE/RE |                        | /dev/ttyAMA5       | GPIO24      | デフォルトLow      |

デフォルトでは、RS485ポートの電源イネーブルポートはHighです。そして各RS485インターフェースは受信状態にあります。簡単な実験を行うことができます。

PCをreComputer-Rに接続する485ポート。

reComputerのターミナルで入力：

```shell
cat /dev/ttyAMA2
```

次に、コンピューターのシリアルデバッグツールでデータを送信すると、reComputerのターミナルウィンドウでデータを観察できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/21.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/22.png" /></div>

### ブートスイッチ

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" /></div>

reComputer R1000のブートスイッチは、CM4のnRPI_BOOTピンに接続されています。このスイッチは、ユーザーにeMMCとUSBの間でブートソースを選択するオプションを提供します。通常モードでは、スイッチを「BOOT」ラベルのある側から離れた位置に設定し、システムがeMMCから起動できるようにします。逆に、ユーザーがシステムイメージをフラッシュする必要がある場合は、スイッチを「BOOT」ラベル側に設定し、システムがType-C USBインターフェースから起動できるようにします。

<div class="table-center">

| スイッチ位置                                              | モード        | 説明    | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | ノーマルモード | eMMCから起動 | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | フラッシュモード  | USBから起動  | High      |

</div>

### USB

<div align="left"><img width={150} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig20.png" /></div>

reComputer R1000には、1つのUSB Type-Cポートと2つのUSB Type-Aポートが搭載されています。それらの機能と説明については、以下の表を参照してください。

| **タイプ**   | **数量** | **プロトコル** | **機能** | **説明**                                              |
| ---------- | ------------ | ------------ | ------------ | ------------------------------------------------------------ |
| **Type-C** | *1           | USB2.0       | USB-Device   | シリアルポートデバッグ、イメージ書き込みなどに使用          |
| **Type-A** | *2           | USB2.0       | USB-Host     | フラッシュドライブ、<br />USBキーボードやマウスなど、さまざまなUSBデバイスを接続 |

**lsusb**コマンドを実行して、USBハブが検出されているかどうかを確認します。このコマンドは、ハブを含む接続されているすべてのUSBデバイスをリストします。

```shell
lsusb
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/23.png" /></div>

このコマンドを実行すると、存在するUSBハブを含む、システムに接続されているUSBデバイスに関する情報が表示されます。

USBハブが正常に機能している場合、**lsusb**コマンドの出力にその詳細がリストされているはずです。リストされていない場合は、ハブまたはシステムへの接続に問題がある可能性があります。そのような場合は、USBハブまたはその接続のトラブルシューティングが必要になる場合があります。

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
reComputer R1000は、産業用アプリケーションで一般的に使用される標準サイズのSIMカードスロットを使用しており、25mm x 15mmの寸法の標準SIMカードが必要です。
:::note
reComputer R1000の標準バージョンには4Gモジュールが付属していないことにご注意ください。4G機能が必要な場合は、追加の4Gモジュールを別途購入する必要があります。
:::

### SSDスロット

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig08.png" /></div>
<br />
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig04.png" /></div>
reComputer R1000のSSDスロットは、128GB、256GB、512GB、1TBの容量のNVMe M.2 2280 SSDに対応するように設計されています。このスロットにより高速ストレージの拡張が可能になり、ユーザーはシステムのパフォーマンスと容量を向上させることができます。

SSDを含むディスクをリストするには、*fdisk -l*コマンドを使用できます。方法は次のとおりです：

```bash
sudo fdisk -l
```

このコマンドは、SSDが適切に検出されている場合はそれを含む、システムに接続されているすべてのディスクのリストを表示します。SSDを表すエントリを探してください。通常、/dev/sdの後に文字が続きます（例：/dev/sda、/dev/sdbなど）。
SSDに対応するエントリを特定したら、必要に応じてパーティション分割やフォーマットを進めることができます。

:::note
SSDカードには主に2つの用途があります：<br />
1.大容量ストレージ：SSDカードは大容量ストレージのニーズに利用できます。<br />
2.イメージ付きブートドライブ：もう一つの用途は、SSDを大容量ストレージとシステムイメージの保存の両方に使用し、SSDカードから直接起動できるようにすることです。<br />
市場で入手可能なすべてのSSDカードが2番目の用途をサポートしているわけではないことに注意することが重要です。したがって、ブートドライブとして使用することを意図しており、どのモデルを購入すべきかわからない場合は、推奨する1TB SSD（SKU 112990267）を選択することをお勧めします。このモデルは起動機能についてテストおよび検証されており、互換性の問題のリスクを軽減し、試行錯誤のコストを最小限に抑えます。
:::

### Mini-PCleスロット

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig06.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/slot.png" /></div>
<br />
<div class="table-center">

| スロット        | サポートプロトコル |
| ----------- | ------------------ |
| Mini-PCIe 1 | 4G LTE             |
|             | USB LoRa®          |
|             | USB Zigbee         |
| Mini-PCIe 2 | SPI LoRa®          |
|             | USB LoRa®          |
|             | USB Zigbee         |

</div>

このデバイスには、Mini-PCIeスロット1とMini-PCIeスロット2という2つのMini-PCIeインターフェースが搭載されています。スロット1はSIMカードスロットに接続されUSBプロトコルをサポートし、スロット2はUSBとSPIの両方のプロトコルをサポートしますがSIMカードスロットには接続されません。したがって、4G LTE、USB LoRa®、USB Zigbeeなどのデバイスはスロット1を通じて接続でき、SPI LoRa®、USB LoRa®、USB Zigbeeデバイスはスロット2を通じて接続できます。

### リセット穴

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig16.png" /></div>

reComputer R1000のリセット穴には、ミニプッシュボタンスイッチがあります。細い物体でこのボタンを押すことで、CM4をリセットできます。このピンがハイの時はCM4が開始されたことを示します。このピンをローにするとモジュールがリセットされます。

### イーサネット RJ45

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig15.png" /></div>
<br />
<div class="table-center">

| 名前 | タイプ                        | 速度             | PoE                                |
| ---- | --------------------------- | ------------------ | ---------------------------------- |
| ETH0 | CM4ネイティブギガビットイーサネット | 10/100/1000 Mbit/s | サポート（追加モジュール付き） |
| ETH1 | USBから変換          | 10/100 Mbit/s      | サポートなし                      |

</div>

reComputer R1000には2つのイーサネットRJ45ポートが付属しています。ETH0は、10/100/1000 Mbit/sの3つの異なる速度をサポートするCM4ネイティブギガビットイーサネットインターフェースです。追加のPoEモジュールを購入することで、このインターフェースを通じてパワーオーバーイーサネット（PoE）配信を有効にし、reComputer R1000に電力を供給できます。もう一つのETH1は、USBから変換された10/100 Mbit/sをサポートします。

### HDMI

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig17.png" /></div>

reComputer R1000は、CM4からのネイティブHDMIインターフェースを搭載し、最大4K @ 60 fpsのビデオ出力をサポートします。複数のディスプレイが必要なアプリケーションに最適で、ユーザーはコンテンツを外部の大画面に出力できます。

### RTC

reComputer R1000には、CR2032バッテリーが事前に取り付けられたRTC回路が搭載されており、電源が失われた場合でも時刻保持機能を維持できます。

リアルタイムクロック（RTC）機能をテストするには、以下の手順に従ってください：

1. 自動時刻同期を無効にします：

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
```

2. 時刻を2024年3月20日午後12:00に設定します：

```bash
sudo hwclock --set --date "2024-03-20 12:00:00"
```

3. RTC時刻をシステムに同期します：

```bash
sudo hwclock --hctosys
```

4. RTC時刻を確認します：

```bash
sudo hwclock -r
```

このコマンドは、RTCに保存されている時刻を読み取って表示します。
5. RTCから電源を切断し、数分待ってから再接続し、RTC時刻を再度確認して正しい時刻が保持されているかどうかを確認します。

### ウォッチドッグ

reComputer R1000には、システムの異常クラッシュが発生した場合に自動的にシステムを再起動する独立したハードウェアウォッチドッグ回路が搭載されています。ウォッチドッグ回路はRTCを通じて実装され、1秒から255秒までの柔軟な給餌時間を可能にします。

ウォッチドッグテストを実行するには、以下の手順に従ってください：

1. ウォッチドッグソフトウェアをインストールします：

```bash
sudo apt install watchdog 
```

2. ウォッチドッグ設定ファイルを編集します：

```bash
# make sure you install vim already, if haven't, can install by the command below
sudo apt-get install vim
sudo vim /etc/watchdog.conf
```

設定を以下のように変更します：

```bash
watchdog-device  = /dev/watchdog
# Uncomment and edit this line for hardware timeout values that differ
# from the default of one minute.vi
watchdog-timeout = 120
# If your watchdog trips by itself when the first timeout interval
# elapses then try uncommenting the line below and changing the
# value to 'yes'.
#watchdog-refresh-use-settimeout = auto
# If you have a buggy watchdog device (e.g. some IPMI implementations)
# try uncommenting this line and setting it to 'yes'.
#watchdog-refresh-ignore-errors = no
# ====================== Other system settings ========================
#
# Interval between tests. Should be a couple of seconds shorter than
# the hardware time-out value.
interval  = 15
max-load-1  = 24
#max-load-5  = 18
#max-load-15  = 12
realtime  = yes
priority  = 1
```

必要に応じて他の設定を調整できます。
3. ウォッチドッグサービスが実行されていることを確認します：

```bash
sudo systemctl start watchdog
```

4. ウォッチドッグ機能をテストするには、以下のコマンドを実行してシステムハングをシミュレートします：

```bash
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

:::warning
このコマンドはカーネルクラッシュを引き起こし、ウォッチドッグがシステムを再起動させるはずです。
:::

5. 指定されたタイムアウト期間後にシステムが再起動することを確認するため、システムを監視します。
これらの手順は、システム上のウォッチドッグタイマーの機能をテストし、確認するのに役立ちます。

## オプションインターフェースとモジュール

reComputer R1000は豊富な拡張モジュールとアクセサリの選択をサポートしており、幅広いシナリオと要件に適しています。reComputer R1000のカスタマイズにご興味がある場合は、詳細についてodm@seeed.ccまでお問い合わせください。
以下がアクセサリとオプションモジュールのリストです：

<div class="table-center">
<table >
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
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>地域オプション LoRaWAN ゲートウェイモジュール(SPI)-US915</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992969</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>地域オプション LoRaWAN ゲートウェイモジュール(SPI)-EU868</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993268</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>地域オプション LoRaWAN ゲートウェイモジュール(USB)-US915</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992991</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>地域オプション LoRaWAN ゲートウェイモジュール(USB)-EU868</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992628</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>LoRa®アンテナ</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LoRa アンテナキット - 868-915 MHz</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061501</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Zigbeeモジュール</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Mini-PCIe USB Zigbee モジュール</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992005</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Zigbeeアンテナ</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>reComputer R用Zigbeeアンテナキット</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061641</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>このアクセサリはWi-Fi機能に必要です</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Wi-Fi/BLEアンテナ</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Raspberry Pi Compute Module 4 アンテナキット</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992364</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={8} style={{height: 18, width: '25%'}}>4G機能のための4Gモジュール付き4Gアンテナ、GPS機能のための4Gモジュール付きGPSアンテナ</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={6} style={{height: 18, width: '25%'}}>4Gモジュール</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-AFXGA-Mini-PCIe モジュール - 北米向け</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991134</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-EUXGR-Mini-PCIe モジュール - EMEA・タイ向け</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991135</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-AUXGR-Mini-PCIe モジュール - オーストラリア向け</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991174</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-EFA-Mini-PCIe モジュール - タイ向け</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991214</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-EMGA-Mini-PCIe モジュール - マレーシア向け</td>
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
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>infineon SLB9670搭載TPM 2.0モジュール</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993114</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>SSDカード</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>NVMe M.2 2280 SSD 1TB</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990267</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>512GB NVMe M.2 PCle Gen3x4 2280 内蔵SSD</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990247</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>256GB NVMe M.2 PCle Gen3x4 2280 内蔵SSD</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990246</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>128GB NVMe M.2 PCle Gen3x4 2280 内蔵SSD</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990226</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>このモジュールはreComputer R1000のキャリアボードにはんだ付けする必要があります</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>PoE</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>MQ7813T120 PoE モジュールキット（reTerminal DM用）</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110991925</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>UPS</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>SuperCAP UPS LTC3350 モジュール</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992004</td>
    </tr>
  </tbody>
</table>
</div>

reComputer R1000メインボードには2つのMini-PCIeスロットが搭載されています。Mini-PCIeスロット1は4Gモジュール、USBプロトコルを使用するLoRa®モジュール、USBプロトコルを使用するZigbeeモジュールをサポートします。一方、Mini-PCIeスロット2はUSBおよびSPIプロトコルを使用するLoRa®モジュールとUSBプロトコルを使用するZigbeeモジュールをサポートします。

:::note
ボード上に2つのLoRa®モジュールを同時に接続することはできません。
:::

### Wi-Fi/BLE

reComputer R1000-10は、オンボードWi-Fi/BLE版のCM4を搭載しており、CM4と同じWi-Fi/BLEパラメータを提供します。詳細なパラメータ情報については、Raspberry Pi公式ウェブサイトをご参照ください。

:::note
reComputer R1000の金属筐体により、Wi-Fi/BLE信号が金属外装を透過しにくい場合があることにご注意ください。Wi-Fi/BLE機能が必要な場合は、外部アンテナの購入をお勧めします。[組み立て手順についてはこちらをクリック](/ja/recomputer_r1000_assembly_guide/#assemble-wi-fible-antenna)してください。
:::

#### Wi-Fiに接続する

ステップ1. Wi-Fiネットワークをスキャンするには：

```bash
nmcli dev wifi list
```

ステップ2. Wi-Fiネットワークに接続します：

```bash
sudo nmcli dev wifi connect network-ssid password "network-password"
sudo nmcli --ask dev wifi connect network-ssid #If you don't want to write your password on the screen, you can use the --ask option.
```

ステップ3. デバイスの電源を入れると、自動的にWi-Fiに接続されます。保存されたWiFi情報を削除したい場合は：

```bash
nmcli con del network-ssid
```

接続が切断された後、別のWi-Fiに接続します。

#### Bluetoothデバイスに接続する

Bluetoothデバイスを追加する前に、コンピュータのBluetoothサービスが開始され、実行されている必要があります。これはsystemctlコマンドで確認できます。

```bash
sudo systemctl status bluetooth
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/32.png" /></div>
<br />
Bluetoothサービスのステータスがアクティブでない場合は、まずそれを有効にする必要があります。その後、デバイスの起動時に自動的に開始されるようにサービスを開始します。

```bash
sudo systemctl enable bluetooth
sudo systemctl start bluetooth
```

bluetoothctlツールを使用してBluetoothの接続と管理を行うことができます。以下は一般的なコマンドとコメントです：

```bash
#Scan attachments to the device
bluetoothctl scan on

#To make your Bluetooth adapter discoverable to other devices, use the following command:
bluetoothctl discoverable on


#Replace A4:C1:38:F4:83:2E below with the Media Access Control (MAC) address you want to connect to
#Pair a new Bluetooth device
bluetoothctl pair A4:C1:38:F4:83:2E

#Connect previously paired devices
bluetoothctl connect A4:C1:38:F4:83:2E

#View the list of devices paired with the system
bluetoothctl paired-devices

#When a Bluetooth device is trusted, the system automatically connects to it after discovering it
bluetoothctl trust A4:C1:38:F4:83:2E

#Cancel trust
bluetoothctl untrust A4:C1:38:F4:83:2E

#Remove a paired Bluetooth device
bluetoothctl remove A4:C1:38:F4:83:2E

#Disconnect the Bluetooth connection, but do not remove it from the paired list
bluetoothctl disconnect A4:C1:38:F4:83:2E

#Block specific devices from connecting to your system
bluetoothctl block A4:C1:38:F4:83:2E

#Unblock device
bluetoothctl unblock A4:C1:38:F4:83:2E


#Use interactive mode and exit
bluetoothctl
exit 
```

### 4Gモジュール

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113991135--lte-cat-4-ec25-eux-mini-pcie-font_1.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

reComputer R1000メインボードには2つのMini-PCIeスロットが搭載されており、Mini-PCIeスロット1はUSBプロトコルを使用する4Gモジュールをサポートします。QuectelのEC25 4GモジュールはreComputer R1000との互換性が完全にテストされています。

:::note
4G機能が必要な場合は、対応する4Gモジュールと外部アンテナを購入する必要があることにご注意ください。[組み立て手順についてはこちらをクリック](/ja/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna)してください。
:::

#### ECMモードで4Gモジュールに接続する

minicomを介してATコマンドを使用して4Gモジュールと対話するには、以下の手順に従ってください：

**ステップ1.** システムの電源を入れる前に、4G対応のSIMカードを[SIMカードスロット](/ja/recomputer_r/#sim-slot)に挿入してください。

**ステップ2.** ```lsusb```を使用してEC25-EUXが検出されているかを確認します

```
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

**ステップ3.** シリアル通信ツールminicomをインストールします。

```sh
sudo apt install minicom
```

**ステップ4.** minicomを通じてEC25-EUX 4Gモジュールに接続します。

```sh
sudo minicom -D /dev/ttyUSB2 -b 1152008n1
```

シリアル接続が開いたら、ATと入力してEnterキーを押すと、OKが表示されるはずです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**ステップ5.** 4Gモジュールを有効にして4Gネットワークに接続します

同じminicomシリアルウィンドウで以下を入力してください：

```sh
AT+QCFG="usbnet"
```

```+QCFG: "usbnet",0,```のような結果が返されますが、これを1（ECMモード）に設定する必要があるため、以下のコマンドを入力します：

```sh
AT+QCFG="usbnet",1
```

次に、以下のコマンドを入力してモデムを強制的に再起動します：

```sh
AT+CFUN=1,1
```

その後、再起動するか、モジュールがSIMカードキャリアからインターネットを取得するまでしばらく待つことができます。

`ifconfig`コマンドを使用してreComputer R1000のネットワーク状態を確認することもできます。

ECMモードでは、使用するための新しいネットワークインターフェース`usb0`が作成されます。


#### QMIモードで4Gモジュールに接続する

qmicliを介してQMIプロトコルを使用して4Gモジュールと対話するには、以下の手順に従ってください：

**ステップ1.** quectel-CMツールを`/usr/bin/`ディレクトリにダウンロードします。

```sh
# Use wget to download the compiled quectel-CM to /usr/bin/
sudo wget -O /usr/bin/quectel-CM https://files.seeedstudio.com/wiki/reComputer-R1000/network/quectel-CM
# Add execution permission
sudo chmod 777 /usr/bin/quectel-CM
```

**ステップ2.** 4GネットワークカードモードをQMIに設定します。

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200

# Enter the following command
AT+QCFG="usbnet",0
# Enter the following command to verify
AT+QCFG="usbnet"
# Successful configuration is indicated by the following response
AT+QCFG="usbnet",0

# Enter the command to restart and enable the module
AT+CFUN=1,1
```

**ステップ3.** ネットワーク接続をテストします。

```sh
# Use the -s parameter to specify the APN for the data connection
sudo ./quectel-CM -s APN

# APN settings for different carriers
China Mobile: "cmnet"
China Unicom: "3gnet"
China Telecom: "ctnet"
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/get_start/image-1.png"/></div>

ifconfigを入力してIPアドレスが割り当てられているかを確認します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/get_start/image-2.png"/></div>

ネットワーク接続テストが成功した後、システム起動時に4Gモジュールが自動的に接続されるようにsystemdサービスを作成できます。

**ステップ4.** systemdサービスファイルを作成します。

自動起動スクリプトを作成します：

```sh
sudo vi /opt/auto_4G.sh
```

以下の内容を入力します。APNはSIMカードのキャリアに基づいて決定する必要があります。ここでは、`3gnet`は中国聯通のAPNです。

```sh
#!/bin/bash
sudo quectel-CM -s 3gnet
```

実行権限を追加します：

```bash
sudo chmod 0755 /opt/auto_4G.sh
```

自動起動サービスファイルを作成します：

```bash
sudo vi /etc/systemd/system/auto_4G.service
```

サービスファイルの内容：

```bash
[Unit]
Description = auto_4G daemon

[Service]
ExecStart = /opt/auto_4G.sh
Restart = always
Type = simple

[Install]
WantedBy = multi-user.target
```

auto_4G.serviceを有効にして開始します：

```bash
sudo systemctl enable auto_4G
sudo systemctl start auto_4G
```

その後、再起動するか、モジュールがSIMカードキャリアからインターネットを取得するまでしばらく待つことができます。

また、`ifconfig` コマンドを使用して reComputer R1000 のネットワーク状態を確認することもできます。

QMI モードでは、使用するための新しいネットワークインターフェース `wwan0` が作成されます。




### LoRa® モジュール

:::note
両方の Mini-PCIe スロットは USB プロトコルを使用した LoRa® モジュールをサポートしています。一方、Mini-PCIe スロット2 は SPI プロトコルを使用した LoRa® モジュールをサポートしています。Seeed Studio の WM1302 モジュールは reComputer R1000 との完全な互換性がテストされています。ただし、USB バージョンは 4G モジュール用に設計された Mini PCIe を利用する必要があるため、4G モジュールと LoraWAN® モジュールの両方を使用したい場合は、WM1302 LoraWAN® モジュールの SPI バージョンを選択してください。
<br />
LoRa® 機能が必要な場合は、対応する LoRa® モジュールと外部アンテナを購入する必要があることにご注意ください。
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 SPI Module" label="WM1302 SPI モジュール">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992967-spi-us915.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1302-LoRaWAN-Gateway-Module-SPI-US-915-p-5454.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

<br />

**ステップ 1.** [LoraWAN® モジュールハードウェア組み立て](/ja/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna) ガイドを参照して、`WM1302 SPI LoraWAN® モジュール` を *`Lora`* シルクスクリーンが表示されている `LoraWAN® Mini PCIe スロット` にインストールしてください。

**ステップ 2.** コマンドラインで `sudo raspi-config` と入力して Raspberry Pi ソフトウェア設定ツールを開きます：

- Interface Options を選択
- SPI を選択し、**Yes** を選択して有効にします
- I2C を選択し、**Yes** を選択して有効にします
- Serial Port を選択し、"Would you like a login shell..." に対して **No** を選択し、"Would you like the serial port hardware..." に対して **Yes** を選択します

この後、これらの設定が動作することを確認するために Raspberry Pi を再起動してください。

**ステップ 3.** [WM1302 コード](https://github.com/Lora-net/sx1302_hal) を reComputer R1000 にダウンロードしてコンパイルします。

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo vim ./libloragw/inc/loragw_i2c.h
```

`#define I2C_DEVICE "/dev/i2c-1"` を `#define I2C_DEVICE "/dev/i2c-3"` に変更します。

:::important
バージョン 1.1 の reComputer R1000 を使用している場合は、`#define I2C_DEVICE "/dev/i2c-6"` に変更してください
:::

```bash
sudo make
```

**ステップ 4.** reset_lgw.sh スクリプトをコピーします

```bash
vim ./tools/reset_lgw.sh
```

コードを修正します：

```bash
SX1302_RESET_PIN=580     # SX1302 reset
SX1302_POWER_EN_PIN=578  # SX1302 power enable
SX1261_RESET_PIN=579     # SX1261 reset (LBT / Spectral Scan)
// AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

```
cp ./tools/reset_lgw.sh ./packet_forwarder/
```

**ステップ 5.** `global_conf.json.sx1250.EU868` 設定ファイルの内容を修正します：

```sh
cd packet_forwarder
vim global_conf.json.sx1250.EU868
```

`"com_path": "/dev/spidev0.0"` を `"com_path": "/dev/spidev0.1"` に変更します

:::important
バージョン 1.1 の reComputer R1000 を使用している場合は、`"com_path": "/dev/spidev1.1"` に変更してください
:::

**ステップ 6.** LoraWAN® モジュールを開始します

次に、WM1302 の動作周波数バージョンに応じて以下のコードを実行して LoraWAN® モジュールを開始します。

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.EU868
```

</TabItem>
<TabItem value="WM1302 USB Module" label="WM1302 USB モジュール">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

**ステップ 1.** [LoraWAN® モジュールハードウェア組み立て](/ja/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna) ガイドを参照して、`WM1302 USB LoraWAN® モジュール` を *`4G`* シルクスクリーンが表示されている `4G Mini PCIe スロット` にインストールしてください。

**ステップ 2.** コマンドラインで `sudo raspi-config` と入力して Raspberry Pi ソフトウェア設定ツールを開きます：

- Interface Options を選択
- I2C を選択し、**Yes** を選択して有効にします
- Serial Port を選択し、"Would you like a login shell..." に対して **No** を選択し、"Would you like the serial port hardware..." に対して **Yes** を選択します

この後、これらの設定が動作することを確認するために Raspberry Pi を再起動してください。

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

**ステップ 4.** reset_lgw.sh スクリプトをコピーします

```bash
vim ./tools/reset_lgw.sh
```

コードを修正します：

```bash
SX1302_RESET_PIN=580     # SX1302 reset
SX1302_POWER_EN_PIN=578  # SX1302 power enable
SX1261_RESET_PIN=579     # SX1261 reset (LBT / Spectral Scan)
// AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

```
cp ./tools/reset_lgw.sh ./packet_forwarder/
```

**ステップ 5.** WM1302-USB モジュールをロードします

```bash
# Check the device
lsusb
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/check_lora_device.png" /></div>

```bash
# Use the ID number to find the port number
sudo dmesg | grep 5740
# Load ACM module 
sudo modprobe cdc_acm
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/load_lora_device.png" /></div>

**ステップ 6.** デバイスファイルを見つけます

```bash
sudo dmesg | grep 1-1.3.3
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/ACM.png" /></div>

**ステップ 7.** `global_conf.json.sx1250.EU868.USB` 設定ファイルの内容を修正します：

```sh
cd packet_forwarder
vim global_conf.json.sx1250.EU868.USB
```

`"com_path": "/dev/ttyACM0"` を `"com_path": "/dev/ttyACM4"` に変更します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/change_file.png" /></div>

**ステップ 8.** LoraWAN® モジュールを開始します

次に、WM1302 の動作周波数バージョンに応じて以下のコードを実行して LoraWAN® モジュールを開始します。

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

このコマンドは LoRa® USB に使用する設定ファイルを指定します。

</TabItem>
</Tabs>

<!-- Code END -->

### Zigbee モジュール

Mini-PCIe スロットは USB プロトコルを利用した Zigbee モジュールをサポートし、互換性のあるデバイスへの Zigbee 機能のシームレスな統合を可能にします。この機能により、Zigbee ネットワーク内での効率的な通信と制御が可能になり、システムの汎用性と接続性が向上します。Zigbee モジュール用に 2 つの Mini-PCIe スロットが利用可能で、ユーザーは信頼性向上のために多様なアプリケーションを実装する柔軟性があります。

:::note
Zigbee 機能が必要な場合は、対応する Zigbee モジュールと外部アンテナを購入する必要があることにご注意ください。
[組み立て手順についてはこちらをクリックしてください](/ja/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna)。
:::

#### Zigbee モジュールを使用した reComputer R1000 を Zigbee コーディネーターとして設定する

**ステップ 1.** シリアルポートを確認します：
以下のコマンドを使用して利用可能なシリアルポートを確認します：

```bash
cat /dev/ttyACM*
```

**ステップ 2.** シリアル通信ツールをインストールし、*cutecom* と入力して UI を開きます：

```bash
sudo apt-get install cutecom
```

**ステップ 3.** 設定を構成して通信を開きます：

- ボーレートを 115200 に設定
- 下部の 'Hex output' にチェックを入れる
- 正しいデバイスポートを選択（例：/dev/ttyACM0）
- 'Open' をクリックして通信を設定

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbee1.png" /></div>

:::note
詳細情報については、[E18-MS1PA2-IPX](https://www.ebyte.com/product-view-news.html?id=894) を参照してください。Hex コマンド指示については、[Ebyte Zigbee 3.0 Module HEX Command Standard Specification](https://www.ebyte.com/pdf-down.aspx?id=2936) を参照してください。
:::

**ステップ 4.** Zigbee モジュールをコーディネーターとして設定します
モジュールが HEX コードモードであることを確認した後、最初の Zigbee モジュールを設定するには以下の手順に従ってください：

- コーディネーターとして設定：コマンド `55 04 00 05 00 05` を送信し、レスポンス `55 04 00 05 00 05` を期待します。<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand.png" /></div>

- デバイスをリセット：リセットボタンを押すか、コマンド `55 07 00 04 00 FF FF 00 04` を送信します。<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand2.png" /></div>

- ネットワーク形成：コマンド `55 03 00 02 02` を送信します。<br />
  <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand3.png" /></div>

:::note
チェックディジット計算には、[Block Check Character calculator](https://bcc.beyerleinf.de/) などのツールを使用できます。BCC 計算機能付きの SSCOM や XCOM などのシリアル通信ツールも使用できます。
:::

**ステップ 5.** デバイス状態を確認します：
コマンド `5 03 00 00 00` を送信してデバイス状態を確認します。`55 2a 00 00 00 01 XX XX XX XX` のようなレスポンスを期待します。ここで `XX` はデバイス情報を表します。

**ステップ 6.** 透過モードに入る：
ネットワーク形成が成功した場合、コマンド `55 07 00 11 00 03 00 01 13` を送信して透過モードに入ります。直接通信のために両方のモジュールが透過モードである必要があります。入力モードを *None* に設定することを忘れないでください。透過モードを終了するには、`+++` を送信します。
 <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand4.png" /></div>

**ステップ 7.** 追加の注意事項：

- ルーター設定が失敗した場合、デバイスは既にコーディネーターである可能性があります。コマンド `55 07 00 04 02 xx xx xx` を使用してネットワークから離脱してください。
- コマンド `55 04 0D 00 00 0D`（クエリ）と `55 04 0D 01 XX XX`（設定）を使用して送信電力をテストします。

その後、ZHA、zigbee2mqtt、Tasmotaプラットフォームなどを介してZigbeeデバイスをreComputer R1000に接続できます。

### PoE

reComputer R1000は受電デバイスとして動作し、PoE電源モジュールを追加することでIEEE 802.3af標準をサポートできます。ユーザーはEthernet PoE機能のためにPoEモジュールを取り付けるためにデバイスを分解する必要があります。

:::note
reComputer R1000はPoE電源をサポートしていますが、標準製品にはデフォルトでPoEモジュールが含まれていません。Seeedはバッチカスタマイズ注文に対してPoEはんだ付けおよび組み立てサービスを提供できます。ただし、お客様がサンプルをテストしている場合は、[PoEモジュールを自分ではんだ付けして組み立てる](/ja/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module)必要があります。
:::

### M.2 スロット

reComputer R1000は、ボード上の2つのMini-PCIeスロットの下にあるPCIeスロット（J62）を使用して2280 NVMe SSDとAIアクセラレータ（Hailo）をサポートします。CM4のPCIeはgen2.0で最大理論速度5Gbpsであることに注意することが重要です。Gen3.0以上のSSDを使用している場合、SSDの最大速度を達成できない可能性があります。テスト後、SSDを搭載したreTerminal DMは最大書き込み速度230MB/s、最大読み取り速度370MB/sを達成できます。どのSSDが互換性があるか不明な場合は、以下のアクセサリリストに従って購入できます。

[組み立て手順についてはこちらをクリックしてください](/ja/recomputer_r1000_assembly_guide/#assemble-ssd)。

<div class="table-center">

<table >
  <tbody>
  <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>SSDカード</td>
      <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>NVMe M.2 2280 SSD 1TB</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html">112990267</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>512GB NVMe M.2 PCle Gen3x4 2280 内蔵SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html">112990247</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>256GB NVMe M.2 PCle Gen3x4 2280 内蔵SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html">112990246</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>128GB NVMe M.2 PCle Gen3x4 2280 内蔵SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html">112990226</a></td>
  </tr>
  </tbody>
</table>
</div>

:::note
以下の点にご注意ください：<br />
1- 速度テスト結果は、SSDモデル、テスト方法、テスト環境によって異なる場合があります。ここで提供される値は参考目的のみであり、Seeedの研究室で取得されたものです。<br />

SSDカードには主に2つの用途があります：<br />
1.大容量ストレージ：SSDカードは大容量ストレージのニーズに利用できます。<br />
2.イメージ付きブートドライブ：もう一つの用途は、SSDを大容量ストレージとシステムイメージの保存の両方に使用し、SSDカードから直接ブートできるようにすることです。<br />
市場で入手可能なすべてのSSDカードが2番目の用途をサポートしているわけではないことに注意することが重要です。したがって、ブートドライブとして使用する予定で、どのモデルを購入すべきか不明な場合は、推奨する**1TB SSD（SKU [112990267](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)）**を選択することをお勧めします。このモデルはブート機能についてテストおよび検証されており、互換性の問題のリスクを軽減し、試行錯誤のコストを最小限に抑えます。
:::

### 暗号化チップ TPM 2.0

TPMは、Trusted Computing Group（TCG）TPM 2.0仕様に準拠したInfineonのOPTIGA™ TPM SLB9670を特徴とし、reComputer R1000の暗号化チップとして推奨されています。このチップは、ボード上のポートJ13に適用されるSPIインターフェースを特徴とし、プラットフォーム整合性、リモート証明、暗号化サービスの信頼の根拠を可能にします。

:::note
[組み立て手順についてはこちらをクリックしてください](/ja/recomputer_r1000_assembly_guide/#assemble-tpm-20-module)。
:::

TPM 2.0モジュールをデバイスに接続した場合、以下のコードがTPM接続の確認に役立ちます。

```bash
ls /dev | grep tpm
```

出力に**tpm0**と**tpmrm0**が表示される場合、TPM（Trusted Platform Module）デバイスが検出され、システムで利用可能であることを意味します。これは、TPMハードウェアが認識され、アクセス可能であることを示しており、良い兆候です。デバイスが存在し、アクセス可能であることを知って、TPM関連の機能やアプリケーションの使用を続行できます。

### UPS

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/30.png" /></div>

UPSは7Fで、直列で動作します。UPSモジュールはDC5VとCM4コンポーネントの間に配置され、5V電源からの電力損失の際にCPUに警告するためにGPIO信号が利用されます。この信号を受信すると、CPUはスーパーキャパシタのエネルギーが枯渇する前に緊急スクリプトを実行し、「$ shutdown」コマンドを開始します。
<br />
UPSによって提供されるバックアップ時間は、システム負荷に大きく依存します。以下は、4GB RAM、32GB eMMCストレージ、Wi-Fiモジュールを搭載したCM4モジュールでテストされた典型的なシナリオです。
<br />

| 動作モード | 時間（秒） | 備考                                                       |
| ----------------- | ------- | ------------------------------------------------------------ |
| アイドル              | 37      | 公式ドライバープログラムがロードされたアイドル状態でのテスト |
| CPU フル負荷  | 18      | stress -c 4 -t 10m -v &                                      |

:::note
UPS機能については詳細情報をお問い合わせください。アラーム信号はアクティブLOWです。
[組み立て手順についてはこちらをクリックしてください](/ja/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module)。
:::

CPUとDC/AC電源入力の間のGPIO25は、5V電源がダウンした際にCPUに警告するために使用されます。その後、CPUはスーパーキャパシタのエネルギー枯渇前にスクリプトで緊急処理を行い、`$ shutdown`を実行する必要があります。
<br />
この機能を使用する別の方法は、GPIOピンの変化時にシャットダウンを開始することです。指定されたGPIOピンは、KEY_POWERイベントを生成する入力キーとして設定されます。このイベントは、シャットダウンを開始することでsystemd-logindによって処理されます。
参考として`/boot/overlays/README`を使用し、`/boot/config.txt`を変更します。

```bash
dtoverlay=gpio-shutdown,gpio_pin=25,active_low=1
```

:::note

1. UPS機能については詳細情報をお問い合わせください。
2. アラーム信号はアクティブLOWです。

:::

以下のPythonコードは、GPIO25を通じてスーパーキャパシタUPSの動作モードを検出し、システムの電源が切れた際に自動的にデータを保存してシャットダウンするデモです。

```python
import RPi.GPIO as GPIO
import time,os

num = 0

GPIO.setmode(GPIO.BCM)
#set GPIO25 as input mode
#add 500ms jitter time for software stabilization
GPIO.setup(25,GPIO.IN,pull_up_down = GPIO.PUD_UP)
GPIO.add_event_detect(25,GPIO.FALLING, bouncetime = 500) 
while True:
  if GPIO.event_detected(25):
    print('...External power off...')
    print('')
    os.system('sync')
    print('...Data saving...')
    print('')
    time.sleep(3)
    os.system('sync')
    #saving two times
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

1つのDSI（J24）と1つの4ピンスピーカー（J7）インターフェースがボード上に特別な用途のために予約されています。ユーザーは自分のニーズに応じてプラグインを購入する必要があります。

## 追加リソース

- [ユーザーマニュアル-reComputer R1000](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputerR_UserManual_version01.pdf)
- [ユーザーマニュアル-reComputer R1000 中国語版](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputerR_UserManual_CN_version01.pdf )
- [reComputer R1000 3Dファイル](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000.stp)
- [reComputer R1000 回路図設計、PCB設計](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_schematic_design_files.zip)
- [reComputer R1000 フライヤー](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_flyer.pdf)
- [reComputer R1000 フライヤー 中国語版](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_flyer_CN.pdf)
- [reComputer R1000 v1.1 ピン配置](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_v1_1_Pin_Assignment.xlsx)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
