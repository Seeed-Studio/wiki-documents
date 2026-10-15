---
description: reComputer R1000 入門ガイド
title: reComputer R1000 入門ガイド
keywords:
  - エッジ
  - reComputer R1000
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/113991274-2_3.webp
slug: /recomputer_r
sku: 113991274,E24010521,113991314,113991294,113991295
last_update:
  date: 09/15/2025
  author: Kasun Thushara
createdAt: '2024-05-10'
updatedAt: '2026-05-21'
url: https://wiki.seeedstudio.com/ja/recomputer_r/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

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

reComputer R1000 エッジ IoT コントローラは、高性能な Raspberry Pi CM4 プラットフォーム上に構築されており、最大 8GB RAM と 32GB eMMC をサポートするクアッドコア A72 プロセッサを搭載しています。柔軟に設定可能なデュアル Ethernet インターフェースを備え、さらに BACnet、Modbus RTU、Modbus TCP/IP プロトコルをサポートする 3 系統の絶縁 RS485 チャネルを搭載しています。
強力な IoT ネットワーク通信機能を備えた R1000 シリーズは、4G、LoRa®、Wi-Fi/BLE など複数の無線通信オプションをサポートし、対応する無線ゲートウェイとして柔軟に構成できます。このコントローラは、遠隔デバイス管理、エネルギー管理、その他スマートビルディング分野のさまざまなシナリオに最適です。

:::note
カスタマイズ可能なオプション：ロゴブランディング、パッケージング、ファームウェア書き込み。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>今すぐカスタマイズ ➜</font></span></strong></a>
</div>

## 特長

### ビルオートメーションシステム向けに設計

- 複数の絶縁 RS485 チャネルにより、高速および低速通信をサポート

- BACnet、Modbus RTU、Modbus TCP/IP プロトコルをサポート
- 最大 8GB RAM により数千のデータポイント処理をサポートし、高効率なパフォーマンスを実現
- 両面のわかりやすい LED インジケータにより、動作状態を素早く確認可能
- 高品質な金属ケースで、DIN レールおよび壁面取り付けに対応
- カスタマイズ OS 用に Yocto と Buildroot をサポート

### 強力なパフォーマンス

- Raspberry Pi CM4 搭載

- Broadcom BCM2711 クアッドコア Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz
- 最大 8GB RAM および 32GB eMMC

### 充実した無線機能

- オンチップ Wi-Fi

- オンチップ BLE
- Mini-PCIe1: LTE、USB LoRa®
- Mini-PCIe2: SPI LoRa®、USB LoRa®

### 豊富なインターフェース

- 3x RS485（絶縁）

- 1x 10M/100M/1000M Ethernet（PoE 対応）
- 1x 10M/100M Ethernet
- 1x HDMI 2.0
- 2x Type-A USB2.0
- 1x Type-C USB2.0（OS 更新用 USB コンソール）
- 1x SIM カードスロット

### 安全性と信頼性

- ハードウェアウォッチドッグ

- UPS スーパーキャパシタ（オプション）
- 金属筐体（PC サイドパネル付き）
- ESD: EN61000-4-2, レベル 3
- EFT: EN61000-4-4, レベル 2
- サージ: EN61000-4-5, レベル 2
- 生産寿命: reComputer R1000 は少なくとも 2030 年 12 月まで生産継続予定

> \*4G および LoRa® モジュールは reComputer R1000 には標準では付属しません。必要に応じて該当モジュールを別途ご購入ください。

## 型番ルール

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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>IEEE 802.3af 規格 12.95W PoE*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>電源電圧（AC/DC）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>12\~24V AC/9\~36V DC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>過電圧保護</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>40V</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>消費電力</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>アイドル時:2.88W; フルロード時:5.52W</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps（PoE* 対応）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100 Mbps IEEE802.3/802.3u</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>USB</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 x USB-A 2.0 ホスト</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x USB-C 2.0（OS 書き込み用）</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>SIM Card Slot</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>標準SIMカード対応</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>M.2 Slot</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>M.2 NVMe SSD 対応</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LED</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>LED インジケータ × 6</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>LCD 対応*（筐体内のオンボード）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>スピーカー（予約済み）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>マイク対応*（筐体内のオンボード）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>無線通信</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>Wi-Fi 2.4/5.0 GHz</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>オンチップ Wi-Fi*</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>なし</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>BLE 5.0</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>オンチップ BLE*</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>なし</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LoRa®</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>USB LoRa®/SPI LoRa®*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>4G セルラー</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>4G LTE*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>規格</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={3} style={{height: 18, width: '35.4622%'}}>EMC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>ESD：EN61000-4-2、レベル 3</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>EFT：EN61000-4-4、レベル 2</td>
    </tr>
     <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>サージ：EN61000-4-5、レベル 2</td>
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
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>周囲条件</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>保護等級</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>IP40</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>動作温度</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>-30～70 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>動作湿度</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>10～95% RH</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>保管温度</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>-40～80 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>その他</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>スーパーキャパシタ UPS</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>SuperCAP UPS LTC3350 モジュール*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>ハードウェアウォッチドッグ</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1～255s</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RTC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>高精度 RTC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>セキュリティ</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>暗号チップ TPM 2.0*</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 年</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>製品ライフタイム</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2030 年 12 月まで</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>注記</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>＊印のオプションは、アクセサリ一覧に従って追加購入が必要です。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>コンポーネントおよびインターフェース状態に関する説明</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>予約済み</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>将来の使用または拡張用に確保されています。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>オプション</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>必須ではないコンポーネントであり、ユーザーが含めるかどうかを選択できます。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>占有</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>現在使用中であり、製品機能に不可欠です。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>同梱</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>標準パッケージに含まれる必須コンポーネント。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>機械仕様</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>寸法 (W x H x D)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>130 mm x 93 mm x 49.6 mm</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>筐体</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6061 アルミニウム合金ケース（透明 PC サイドパネル付き）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>取り付け方法</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>DIN レール / 壁面</td>
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

## 電源構成図

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig13.png" /></div>

reComputer R1000 は、AC、DC 端子、および PoE ポートの 3 種類の電源供給オプションをサポートします。デフォルトでは、reComputer R1000 は AC/DC 端子（公式地域別電源アダプタ SKU:110061505/110061506）から給電されますが、**PoE 給電（PoE モジュール、SKU:110991925）はオプションです**。これにより、電源の選択に柔軟性が生まれ、さまざまな電源ソースとの容易な統合が可能になります。

### 2 ピン電源端子

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

reComputer R1000 は、公称 AC 電圧 12～24 V または DC 電圧 9～36 V で給電されます。電源は 2 ピン電源端子ブロックコネクタを介して接続されます。reComputer R1000 を接地するには、電源端子左上にあるネジにアース線を固定します。

:::note
この電源ソリューションは、逆極性保護のためにブリッジ整流ダイオードを使用しており、AC と DC の両方の入力に対応しています。これにより、**電源のプラス端子とマイナス端子がどのように接続されていても**回路が損傷することはありません。ブリッジ整流器を使用することで、入力 DC の極性に関係なく出力電圧の極性が一定に保たれ、効果的な逆極性保護が実現されます。
:::

### POE（オプション）

PoE モジュールを搭載すると、reComputer R1000 の ETH0 ポートは PoE 給電をサポートし、Ethernet 経由でデバイスに電力を供給する便利で効率的な方法を提供します。このオプションにより、設置プロセスが簡素化され、必要な配線の量が削減されるため、電源が限られている、または電源コンセントが容易に利用できない用途に最適なソリューションとなります。

- PoE 入力：範囲 44～57V、標準 48V
- PoE 出力：12V、最大 1.1A

:::note
reComputer R1000 に付属する PoE モジュールは IEEE 802.3af 規格に準拠しており、最大 12.95W の電力を供給できます。そのため、SSD や 4G モジュールなどの高消費電力の周辺機器を接続する必要がある場合、PoE 給電だけでは十分でない可能性があります。この場合は、デバイスの安定かつ信頼性の高い動作を確保するために、代わりに AC/DC 端子から給電することを推奨します。
:::

### 消費電力

以下の表は、Seeed Studio のラボで測定した reComputer R1000 の消費電力です。なお、この値はあくまで参考値であり、テスト方法や環境によって結果が変動する可能性があります。

| 状態   | 電圧 | 電流 | 消費電力 | 説明 |
|   ---      |    ---    |   ---      |         ---          |        ---    |
|シャットダウン  |24V      |  51mA  |    1.224W         | シャットダウンおよび電源オフ状態での静的消費電力テスト。|
|アイドル      |24V      |  120mA |    2.88W          | reComputer R1000 デバイスに 24V 電源を供給し、テストプログラムを実行していない状態での入力電流を測定。|
|フルロード |24V      |  230mA  |    5.52W          | 「stress -c 4」コマンドを使用して CPU をフルロードで動作させた構成。外部デバイスは未接続。 |

### 電源オンおよび電源オフ

reComputer R1000 にはデフォルトで電源ボタンは搭載されておらず、電源が接続されるとシステムは自動的に起動します。シャットダウンする際は、オペレーティングシステムでシャットダウンオプションを選択し、電源を切る前にシステムが完全にシャットダウンするまでお待ちください。システムを再起動するには、電源を再接続するだけです。

:::note
シャットダウン後は、内部コンデンサが完全に放電するまで少なくとも 10 秒待ってからシステムを再起動してください。
:::

## ブロック図

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig12.png" /></div>

### IIC 図

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig10.png" /></div>

## インターフェース

<div class="table-center">
<table >
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>インターフェース</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>Ethernet</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps IEEE 1588-2008（PoE* 対応）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100 Mbps IEEE802.3/802.3u</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>USB</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 x USB-A 2.0 ホスト</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x USB-C 2.0（OS 書き込み用）</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>標準 SIM カード対応</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>M.2 スロット</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>M.2 NVMe SSD 対応</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LED</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6 x LED インジケータ</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>LCD をサポート*(筐体内のオンボード)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Speaker*</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Microphone をサポート*(筐体内のオンボード)</td>
    </tr>
  </tbody>
</table>
</div>

GPIO のマッピングとオフセットを確認するには、次のコマンドを使用してください：

```bash
cat /sys/kernel/debug/gpio
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/16.png" /></div>

### LED インジケータの状態

reComputer R1000 には 6 つの LED インジケータが搭載されており、機器の動作状態を示します。各 LED の具体的な機能と状態については、以下の表を参照してください。

| LED インジケータ | 色             | 状態 | 説明                                                           |
| ------------- | -------------- | ------ | ------------------------------------------------------------ |
| PWR           | 緑             | On     | デバイスが電源に接続されています。                            |
|               |                | Off    | デバイスが電源に接続されていません。                         |
| ACT           | 緑             |        | Linux では、このピンは eMMC アクセスを示すために点滅します。<br /> 起動中にエラーが発生した場合、この LED はエラー<br />パターンで点滅し、[Raspberry Pi のウェブサイト上の表](https://www.raspberrypi.com/documentation/computers/configuration.html#led-warning-flash-codes)を使用して解読できます。 |
| USER          | 緑/赤/青       |        | ユーザーによって定義する必要があります。                      |
| RS485-1       | 緑             | Off    | RS485 チャネル 1 でデータ転送が行われていません。            |
|               |                | Blink  | RS485 チャネル 1 がデータを送受信しています。                |
| RS485-2       | 緑             | Off    | RS485 チャネル 2 でデータ転送が行われていません。            |
|               |                | Blink  | RS485 チャネル 2 がデータを送受信しています。                |
| RS485-3       | 緑             | Off    | RS485 チャネル 3 でデータ転送が行われていません。            |
|               |                | Blink  | RS485 チャネル 3 がデータを送受信しています。                |

**ACT ステータス表**

| **長い点滅** | **短い点滅** | **ステータス**                    |
| ---------------- | ----------------- | ----------------------------------- |
| 0                | 3                 | 一般的な起動失敗                   |
| 0                | 4                 | start*.elf が見つかりません        |
| 0                | 7                 | カーネルイメージが見つかりません   |
| 0                | 8                 | SDRAM 障害                         |
| 0                | 9                 | SDRAM 不足                         |
| 0                | 10                | HALT 状態                          |
| 2                | 1                 | パーティションが FAT ではありません |
| 2                | 2                 | パーティションからの読み取りに失敗 |
| 2                | 3                 | 拡張パーティションが FAT ではありません |
| 2                | 4                 | ファイル署名/ハッシュの不一致 - Pi 4 |
| 4                | 4                 | 非対応のボードタイプ               |
| 4                | 5                 | 致命的なファームウェアエラー       |
| 4                | 6                 | 電源障害タイプ A                   |
| 4                | 7                 | 電源障害タイプ B                   |

ACT LED が規則的な 4 回点滅パターンで点滅する場合、bootcode (start.elf) が見つかりません。
ACT LED が不規則なパターンで点滅する場合は、起動が開始されています。
ACT LED が点滅しない場合、EEPROM コードが破損している可能性があります。何も接続せずに再度試して確認してください。詳細については Raspberry Pi フォーラムを確認してください。
STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums
詳細については [Raspberry Pi forum](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151) を確認してください。

ユーザー LED を制御するには、Linux カーネルが提供する疑似ファイルシステムであり、さまざまなカーネルサブシステム、ハードウェアデバイス、およびそれらに関連するドライバに関する情報を公開する sysfs の使用を推奨します。ReComputer R1000 では、ユーザー LED インターフェースを 3 つのデバイスファイル (led-red、led-blue、led-green) に抽象化しており、これらのファイルを操作するだけで LED ライトを簡単に制御できます。例は次のとおりです。

1. 赤色 LED を点灯するには、Terminal で次のコマンドを入力してください。

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
```

2. 赤色 LED を消灯するには、Terminal で次のコマンドを入力してください。

```bash
echo 0 | sudo tee /sys/class/leds/led-red/brightness
```

3. 赤色と緑色の LED を同時に点灯させるには、Terminal で次のコマンドを入力してください。

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
echo 1 | sudo tee /sys/class/leds/led-green/brightness
```

### ブザー

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig07.png" /></div>

reComputer R1000 にはアクティブブザーが搭載されており、アラームやイベント通知など、さまざまな用途に使用できます。reComputer R1000 v1.0 ではブザーは GPIO21 から CM4 に接続されており、reComputer R1000 1.1 では GPIO20 から CM4 に接続されています。

:::note
ハードウェアリビジョン (v1.0 と v1.1) を区別するには、[reComputer R1000 V1.1 Product change details](https://wiki.seeedstudio.com/ja/recomputer_r1000_v1_1_description/) を参照してください。
:::

reComputer R1000 v1.0 ユーザーの場合、ブザーは GPIO-21 に接続されています。ブザーをオン/オフにするには、Terminal で次のコマンドを入力してください。

```bash
raspi-gpio set 21 op dh # turn on
raspi-gpio set 21 op dl # turn off
```

reComputer R1000 v1.1 ユーザーの場合、ブザーは PCA9535 P15 に接続されています。ブザーをオフ(オン)にするには、Terminal で次のコマンドを入力してください。

```bash
echo 591 | sudo tee /sys/class/gpio/export
echo out | sudo tee /sys/class/gpio/gpio591/direction
echo 1 | sudo tee /sys/class/gpio/gpio591/value # turn on
echo 0 | sudo tee /sys/class/gpio/gpio591/value # turn off
```

### RS485

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig21.png" /></div>

reComputer R1000 には 3 ピンコネクタを使用した 3 組の RS485 インターフェースが搭載されており、信号と電源の両方が絶縁されているため、産業用およびオートメーション用途において安全かつ信頼性の高い動作を実現します。RS485A および RS485B 信号は容量結合によるアイソレーションを使用しており、優れた EMI 耐性を提供し、RS485 インターフェースの高速通信要件を満たします。
デフォルトでは、120Ω の終端抵抗は実装されていません。ただし、パッケージボックスには 5 個の表面実装抵抗が同梱されています。必要に応じて、ユーザー自身でデバイスに抵抗をはんだ付けする必要があります。

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position.png" /></div>

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position2.png" /></div>

:::note
RS485 インターフェースは絶縁電源を使用しているため、RS485 インターフェースに接続される外部デバイスの GND 信号は GND_ISO ピンに接続する必要があります。

:::

以下は、データテーブル用の reComputer の 485 インターフェースに関連するピンです。

| RS485         | RS485_POWER_EN         | OS デバイスファイル | P14         | デフォルト(High) |
| ------------- | ---------------------- | -------------- | ----------- | ------------- |
| TX5           |                        | /dev/ttyAMA5   | GPIO12      |               |
| RX5           |                        |                | GPIO13      |               |
| TX2           | ID_SD                  | /dev/ttyAMA2   | GPIO0/ID_SD |               |
| RX2           | ID_SC                  |                | GPIO1/ID_SC |               |
| TX3           |                        | /dev/ttyAMA3   | GPIO4       |               |
| RX3           |                        |                | GPIO5       |               |
| RS485_1_DE/RE | (Hight/DE \|\| Low/RE) | /dev/ttyAMA2   | GPIO6       | デフォルト Low |
| RS485_2_DE/RE |                        | /dev/ttyAMA3   | GPIO17      | デフォルト Low |
| RS485_3_DE/RE |                        | /dev/ttyAMA5   | GPIO24      | デフォルト Low |

デフォルトでは、RS485 ポートの電源イネーブルポートは High であり、各 RS485 インターフェースは受信状態になっています。簡単な実験を行うことができます。

PC と reComputer-R を接続する 485 ポート。

reComputer の Terminal で次を入力します。

```shell
cat /dev/ttyAMA2
```

その後、コンピュータのシリアルデバッグツールでいくつかのデータを送信すると、reComputer のターミナルウィンドウでデータを確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/21.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/22.png" /></div>

### ブートスイッチ

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" /></div>

reComputer R1000 の Boot Switch は CM4 の nRPI_BOOT ピンに接続されています。このスイッチにより、ユーザーは eMMC と USB のどちらをブートソースとして選択するかを切り替えることができます。通常モードでは、スイッチを「BOOT」ラベル側から離した位置に設定し、システムを eMMC から起動させます。逆に、システムイメージを書き込む必要がある場合は、スイッチを「BOOT」ラベル側に倒し、システムを Type-C USB インターフェースから起動させます。

<div class="table-center">

| スイッチ位置                                                     | モード      | 説明           | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | 通常モード  | eMMC から起動 | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | フラッシュモード | USB から起動  | High      |

</div>

### USB

<div align="left"><img width={150} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig20.png" /></div>

reComputer R1000 には USB Type-C ポートが 1 つと USB Type-A ポートが 2 つ搭載されています。それぞれの機能と説明については、以下の表を参照してください。

| **タイプ** | **数量** | **プロトコル** | **機能**     | **説明**                                                      |
| ---------- | -------- | -------------- | ------------ | ------------------------------------------------------------ |
| **Type-C** | *1       | USB2.0         | USB-Device   | シリアルポートデバッグ、イメージの書き込みなどに使用します。 |
| **Type-A** | *2       | USB2.0         | USB-Host     | フラッシュドライブ、<br /> USB キーボードやマウスなど、さまざまな USB デバイスを接続します。 |

**lsusb** コマンドを実行して、USB ハブが検出されているか確認します。このコマンドは、ハブを含む接続されているすべての USB デバイスを一覧表示します。

```shell
lsusb
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/23.png" /></div>

このコマンドを実行すると、システムに接続されている USB デバイスに関する情報が表示され、接続されている USB ハブも含まれます。

USB ハブが正常に動作している場合、**lsusb** コマンドの出力にその詳細が表示されます。表示されない場合は、ハブまたはシステムとの接続に問題がある可能性があります。そのような場合は、USB ハブやその接続をトラブルシューティングする必要があります。

### SIM スロット

<div style={{ position: 'relative', left: '150px' }}>
    <img
        width="40"
        src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig19.png"
        style={{ transform: 'rotate(90deg)', position: 'absolute', top: '0', left: '0', transformOrigin: 'left top' }}
    />
</div>
<br />
<br />
reComputer R1000 は、産業用途で一般的に使用される標準サイズの SIM カードスロットを採用しており、25mm x 15mm の標準 SIM カードが必要です。
:::note
標準版の reComputer R1000 には 4G モジュールは付属していません。4G 機能が必要な場合は、別途 4G モジュールを追加購入する必要があります。
:::

### SSD スロット

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig08.png" /></div>
<br />
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig04.png" /></div>
reComputer R1000 の SSD スロットは、容量 128GB、256GB、512GB、1TB の NVMe M.2 2280 SSD を搭載できるように設計されています。このスロットにより、高速なストレージ拡張が可能となり、システムの性能と容量を向上させることができます。

SSD を含むディスクを一覧表示するには、*fdisk -l* コマンドを使用します。手順は次のとおりです。

```bash
sudo fdisk -l
```

このコマンドは、システムに接続されているすべてのディスクの一覧を表示し、SSD が正しく検出されていればそれも含まれます。SSD を表すエントリを探してください。通常、/dev/sd に続いて文字が付いた形式（例：/dev/sda、/dev/sdb など）になります。
SSD に対応するエントリを特定したら、必要に応じてパーティション作成やフォーマットを行うことができます。

:::note
SSD カードには主に 2 つの用途があります。<br />
1.大容量ストレージ：SSD カードは大容量ストレージ用途に利用できます。<br />
2.イメージを格納したブートドライブ：もう 1 つの用途は、SSD を大容量ストレージとして使用すると同時にシステムイメージを保存し、SSD カードから直接起動できるようにすることです。<br />
市場に出回っているすべての SSD カードが 2 番目の用途をサポートしているわけではないことに注意が必要です。そのため、ブートドライブとして使用する予定で、どのモデルを購入すべきか不明な場合は、当社推奨の 1TB SSD（SKU 112990267）を選択することをお勧めします。このモデルはブート機能についてテストおよび検証済みであり、互換性問題のリスクを軽減し、試行錯誤にかかるコストを最小限に抑えます。
:::

### Mini-PCle スロット

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig06.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/slot.png" /></div>
<br />
<div class="table-center">

| スロット      | 対応プロトコル      |
| ------------- | ------------------ |
| Mini-PCIe 1   | 4G LTE             |
|               | USB LoRa®          |
| Mini-PCIe 2   | SPI LoRa®          |
|               | USB LoRa®          |

</div>

このデバイスには、Mini-PCIe スロット 1 と Mini-PCIe スロット 2 の 2 つの Mini-PCIe インターフェースがあります。スロット 1 は SIM カードスロットに接続され、USB プロトコルをサポートします。一方、スロット 2 は USB と SPI の両方のプロトコルをサポートしますが、SIM カードスロットには接続されていません。そのため、4G LTE や USB LoRa® などのデバイスはスロット 1 に接続でき、SPI LoRa® および USB LoRa® デバイスはスロット 2 に接続できます。

### リセットホール

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig16.png" /></div>

reComputer R1000 のリセットホール内にはミニプッシュボタンスイッチがあります。このボタンを細い物で押すことで、CM4 をリセットできます。このピンが High のときは CM4 が起動したことを示し、このピンを Low にするとモジュールがリセットされます。

### Ethernet RJ45

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig15.png" /></div>
<br />
<div class="table-center">

| 名称 | タイプ                      | 速度               | PoE                                  |
| ---- | --------------------------- | ------------------ | ------------------------------------ |
| ETH0 | CM4 ネイティブギガビット Ethernet | 10/100/1000 Mbit/s | 対応（追加モジュールが必要）        |
| ETH1 | USB から変換                | 10/100 Mbit/s      | 非対応                               |

</div>

reComputer R1000 には 2 つの Ethernet RJ45 ポートが搭載されています。ETH0 は CM4 ネイティブのギガビット Ethernet インターフェースで、10/100/1000 Mbit/s の 3 つの速度に対応しています。追加の PoE モジュールを購入することで、このインターフェースを介して電力供給（PoE）を行い、reComputer R1000 に給電することができます。もう一方の ETH1 は USB から変換されたインターフェースで、10/100 Mbit/s に対応しています。

### HDMI

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig17.png" /></div>

reComputer R1000 は CM4 からのネイティブ HDMI インターフェースを備えており、最大 4K @ 60 fps のビデオ出力をサポートします。複数ディスプレイを必要とするアプリケーションに最適で、外部の大型スクリーンにコンテンツを出力できます。

### RTC

reComputer R1000 には RTC 回路が搭載されており、CR2032 バッテリーがあらかじめ装着されているため、電源が失われた場合でも時刻保持機能を維持できます。

リアルタイムクロック（RTC）の機能をテストするには、次の手順に従います。

1. 自動時刻同期を無効にします。

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
```

2. 2024 年 3 月 20 日の 12:00 PM に時刻を設定します。

```bash
sudo hwclock --set --date "2024-03-20 12:00:00"
```

3. RTC の時刻をシステムに同期します。

```bash
sudo hwclock --hctosys
```

4. RTC の時刻を確認します。

```bash
sudo hwclock -r
```

このコマンドは、RTC に保存されている時刻を読み取り、表示します。
5. RTC から電源を取り外し、数分待ってから再接続し、RTC の時刻が正しく保持されているか再度確認します。

### ウォッチドッグ

reComputer R1000 には独立したハードウェアウォッチドッグ回路が搭載されており、システムが異常クラッシュした場合に自動的に再起動を行います。ウォッチドッグ回路は RTC を通じて実装されており、1 ～ 255 秒の柔軟な給電（キック）時間を設定できます。

ウォッチドッグテストを実行するには、次の手順に従います。

1. ウォッチドッグソフトウェアをインストールします。

```bash
sudo apt install watchdog 
```

2. ウォッチドッグの設定ファイルを編集します。

```bash
# make sure you install vim already, if haven't, can install by the command below
sudo apt-get install vim
sudo vim /etc/watchdog.conf
```

設定を次のように変更します。

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

必要に応じて、他の設定を調整することもできます。
3. ウォッチドッグサービスが実行中であることを確認します。

```bash
sudo systemctl start watchdog
```

4. ウォッチドッグ機能をテストするには、次のコマンドを実行してシステムハングをシミュレートします。

```bash
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

:::warning
このコマンドはカーネルクラッシュを引き起こし、ウォッチドッグによってシステムが再起動されるはずです。
:::

5. システムを監視し、指定したタイムアウト時間の後に再起動することを確認します。
これらの手順により、システム上のウォッチドッグタイマーの機能をテストし、確実に動作していることを確認できます。

## オプションインターフェースおよびモジュール

reComputer R1000 は、豊富な拡張モジュールとアクセサリをサポートしており、幅広いシナリオや要件に対応できます。reComputer R1000 のカスタマイズにご興味がある場合は、詳細について odm@seeed.cc までお問い合わせください。
アクセサリおよびオプションモジュールの一覧は次のとおりです：

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
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={5} style={{height: 18, width: '25%'}}>LoRa®WAN 機能には一緒に使用する必要があります</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>LoRa® モジュール</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>地域オプション LoRaWAN ゲートウェイモジュール（SPI）-US915</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992969</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>地域オプション LoRaWAN ゲートウェイモジュール（SPI）-EU868</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993268</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>地域オプション LoRaWAN ゲートウェイモジュール（USB）-US915</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992991</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>地域オプション LoRaWAN ゲートウェイモジュール（USB）-EU868</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992628</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>LoRa® アンテナ</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LoRa アンテナキット - 868-915 MHz</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061501</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>このアクセサリは Wi-Fi 機能に必要です</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Wi-Fi/BLE アンテナ</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Raspberry Pi Compute Module 4 アンテナキット</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992364</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={8} style={{height: 18, width: '25%'}}>4G 機能には 4G モジュールと 4G アンテナが、GPS 機能には 4G モジュールと GPS アンテナが必要です</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={6} style={{height: 18, width: '25%'}}>4G モジュール</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-AFXGA-Mini-PCIe モジュール - 北米向け</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991134</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-EUXGR-Mini-PCIe モジュール - EMEA およびタイ向け</td>
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
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>4G アンテナ</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>4G モジュール用 4G アンテナキット</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061502</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>GPS アンテナ</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>EC25 4G モジュール用 GPS アンテナキット</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061521</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>暗号化チップ TPM 2.0</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>infineon SLB9670 搭載 TPM 2.0 モジュール</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993114</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>SSD カード</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>NVMe M.2 2280 SSD 1TB</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990267</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>512GB NVMe M.2 PCle Gen3x4 2280 内蔵 SSD</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990247</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>256GB NVMe M.2 PCle Gen3x4 2280 内蔵 SSD</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990246</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>128GB NVMe M.2 PCle Gen3x4 2280 内蔵 SSD</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990226</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>このモジュールは reComputer R1000 のキャリアボードに半田付けする必要があります</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>PoE</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>reTerminal DM 用 MQ7813T120 PoE モジュールキット</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110991925</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>UPS</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>SuperCAP UPS LTC3350 Module</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992004</td>
    </tr>
  </tbody>
</table>
</div>

reComputer R1000 メインボードには 2 つの Mini-PCIe スロットがあります。Mini-PCIe スロット 1 は USB プロトコルを使用する 4G モジュールと LoRa® モジュールをサポートし、Mini-PCIe スロット 2 は USB および SPI プロトコルを使用する LoRa® モジュールをサポートします。

:::note
ボード上に 2 つの LoRa® モジュールを同時に挿すことはできません。
:::

### Wi-Fi/BLE

reComputer R1000-10 は、オンボード Wi-Fi/BLE バージョンの CM4 を搭載しており、CM4 と同じ Wi-Fi/BLE パラメータを提供します。詳細なパラメータ情報については、Raspberry Pi 公式ウェブサイトを参照してください。

:::note
reComputer R1000 の金属製筐体のため、Wi-Fi/BLE 信号が金属外装を通過しにくい場合がある点に注意が必要です。Wi-Fi/BLE 機能が必要な場合は、外部アンテナを購入し、[組み立て手順についてはこちらをクリックしてください](/ja/recomputer_r1000_assembly_guide/#assemble-wi-fible-antenna)。
:::

#### Wi-Fi に接続する

ステップ 1. Wi-Fi ネットワークをスキャンします：

```bash
nmcli dev wifi list
```

ステップ 2. Wi-Fi ネットワークに接続します：

```bash
sudo nmcli dev wifi connect network-ssid password "network-password"
sudo nmcli --ask dev wifi connect network-ssid #If you don't want to write your password on the screen, you can use the --ask option.
```

ステップ 3. デバイスの電源を入れると、自動的に Wi-Fi に接続されます。保存されている Wi-Fi 情報を削除したい場合は：

```bash
nmcli con del network-ssid
```

接続が切断された後、別の Wi-Fi に接続します。

#### Bluetooth デバイスに接続する

Bluetooth デバイスを追加する前に、コンピュータ上の Bluetooth サービスが起動して実行中である必要があります。これは systemctl コマンドで確認できます。

```bash
sudo systemctl status bluetooth
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/32.png" /></div>
<br />
Bluetooth サービスのステータスが active でない場合は、まず有効にする必要があります。その後、デバイス起動時に自動的に開始されるようにサービスを開始します。

```bash
sudo systemctl enable bluetooth
sudo systemctl start bluetooth
```

bluetoothctl ツールを使用して Bluetooth に接続および管理できます。以下は、いくつかの一般的なコマンドとその説明です：

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

### 4G モジュール

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113991135--lte-cat-4-ec25-eux-mini-pcie-font_1.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

reComputer R1000 メインボードには 2 つの Mini-PCIe スロットがあり、Mini-PCIe スロット 1 は USB プロトコルを使用する 4G モジュールをサポートします。Quectel 社の EC25 4G モジュールは、reComputer R1000 との互換性が十分にテストされています。

:::note
4G 機能が必要な場合は、対応する 4G モジュールと外部アンテナを購入する必要があることに注意してください。[組み立て手順についてはこちらをクリックしてください](/ja/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna)。
:::

#### ECM モードで 4G モジュールに接続する

minicom を介して AT コマンドを使用して 4G モジュールとやり取りするには、次の手順に従います：

**ステップ 1.** システムの電源を入れる前に、[SIM カードスロット](/ja/recomputer_r/#sim-slot) に 4G 対応の SIM カードを挿入してください。

**ステップ 2.** ```lsusb``` を使用して EC25-EUX が検出されているか確認します。

```
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

**ステップ 3.** シリアル通信ツール minicom をインストールします。

```sh
sudo apt install minicom
```

**ステップ 4.** minicom を介して EC25-EUX 4G モジュールに接続します。

```sh
sudo minicom -D /dev/ttyUSB2 -b 1152008n1
```

シリアル接続が開いたら、AT と入力して Enter キーを押すと、OK と表示されるはずです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**ステップ 5.** 4G モジュールが 4G ネットワークに接続できるようにします

同じ minicom のシリアルウィンドウで、次のように入力してください：

```sh
AT+QCFG="usbnet"
```

```+QCFG: "usbnet",0,``` のような応答が返ってきますが、これを 1（ECM モード）に設定する必要があるため、次のコマンドを入力します：

```sh
AT+QCFG="usbnet",1
```

次に、モデムの再起動を強制するために、次のコマンドを入力します：

```sh
AT+CFUN=1,1
```

その後、再起動するか、モジュールが SIM カードのキャリアからインターネット接続を取得するまでしばらく待ちます。

reComputer R1000 のネットワーク状態を確認するには、`ifconfig` コマンドを使用することもできます。

ECM モードでは、使用できる新しいネットワークインターフェース `usb0` が作成されます。


#### QMI モードで 4G モジュールに接続する

qmicli を介して QMI プロトコルを使用して 4G モジュールとやり取りするには、次の手順に従います：

**ステップ 1.** quectel-CM ツールを `/usr/bin/` ディレクトリにダウンロードします。

```sh
# Use wget to download the compiled quectel-CM to /usr/bin/
sudo wget -O /usr/bin/quectel-CM https://files.seeedstudio.com/wiki/reComputer-R1000/network/quectel-CM
# Add execution permission
sudo chmod 777 /usr/bin/quectel-CM
```

**ステップ 2.** 4G ネットワークカードのモードを QMI に設定します。

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

**ステップ 3.** ネットワーク接続をテストします。

```sh
# Use the -s parameter to specify the APN for the data connection
sudo ./quectel-CM -s APN

# APN settings for different carriers
China Mobile: "cmnet"
China Unicom: "3gnet"
China Telecom: "ctnet"
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/get_start/image-1.png"/></div>

ifconfig を入力して、IP アドレスが割り当てられているか確認します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/get_start/image-2.png"/></div>

ネットワーク接続テストが成功したら、システム起動時に 4G モジュールが自動的に接続されるように、systemd サービスを作成できます。

**ステップ 4.** systemd サービスファイルを作成します。

自動起動スクリプトを作成します：

```sh
sudo vi /opt/auto_4G.sh
```

次の内容を入力します。APN は使用している SIM カードのキャリアに基づいて決定する必要があります。ここでは、`3gnet` は China Unicom の APN です。

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

auto_4G.service を有効化して起動します：

```bash
sudo systemctl enable auto_4G
sudo systemctl start auto_4G
```

その後、再起動するか、モジュールが SIM カードのキャリアからインターネット接続を取得するまでしばらく待ちます。

reComputer R1000 のネットワーク状態を確認するには、`ifconfig` コマンドを使用することもできます。

QMI モードでは、使用できる新しいネットワークインターフェース `wwan0` が作成されます。




### LoRa® モジュール

:::note
2 つの Mini-PCIe スロットはいずれも USB プロトコルを使用する LoRa® モジュールをサポートします。一方、Mini-PCIe スロット 2 は SPI プロトコルを使用する LoRa® モジュールもサポートします。Seeed Studio の WM1302 モジュールは、reComputer R1000 との互換性が十分にテストされています。ただし、USB バージョンは 4G モジュール用に設計された Mini PCIe を使用する必要があるため、4G モジュールと LoraWAN® モジュールの両方を使用したい場合は、WM1302 LoraWAN® モジュールの SPI バージョンを選択してください。
<br />
LoRa® 機能が必要な場合は、対応する LoRa® モジュールと外部アンテナを購入する必要があることに注意してください。
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

**Step 1.** `Lora` シルクスクリーンが見えるはずの `LoraWAN® Mini PCIe slot` に `WM1302 SPI LoraWAN® Module` を取り付けるには、[LoraWAN® Module Hardware assembly](/ja/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna) ガイドを参照してください。

**Step 2.** コマンドラインで `sudo raspi-config` と入力して、Raspberry Pi Software Configuration Tool を開きます：

- Interface Options を選択します
- SPI を選択し、**Yes** を選択して有効にします
- I2C を選択し、**Yes** を選択して有効にします
- Serial Port を選択し、"Would you like a login shell..." には **No** を選択し、"Would you like the serial port hardware..." には **Yes** を選択します

その後、これらの設定が有効になるように Raspberry Pi を再起動してください。

**Step 3.** [WM1302 code](https://github.com/Lora-net/sx1302_hal) を reComputer R1000 にダウンロードしてコンパイルします。

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

**Step 4.** reset_lgw.sh スクリプトをコピーします

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

**Step 5.** `global_conf.json.sx1250.EU868` 設定ファイルの内容を変更します：

```sh
cd packet_forwarder
vim global_conf.json.sx1250.EU868
```

`"com_path": "/dev/spidev0.0"` を `"com_path": "/dev/spidev0.1"` に変更します

:::important
バージョン 1.1 の reComputer R1000 を使用している場合は、`"com_path": "/dev/spidev1.1"` に変更してください
:::

**Step 6.** LoraWAN® Module を起動します

次に、WM1302 の動作周波数バージョンに応じて、以下のコードを実行して LoraWAN® Module を起動します。

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.EU868
```

</TabItem>
<TabItem value="WM1302 USB Module" label="WM1302 USB Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

**Step 1.** `4G` シルクスクリーンが見えるはずの `4G Mini PCIe slot` に `WM1302 USB LoraWAN®  Module` を取り付けるには、[LoraWAN® Module Hardware assembly](/ja/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna) ガイドを参照してください。

**Step 2.** コマンドラインで `sudo raspi-config` と入力して、Raspberry Pi Software Configuration Tool を開きます：

- Interface Options を選択します
- I2C を選択し、**Yes** を選択して有効にします
- Serial Port を選択し、"Would you like a login shell..." には **No** を選択し、"Would you like the serial port hardware..." には **Yes** を選択します

その後、これらの設定が有効になるように Raspberry Pi を再起動してください。

**Step 3.** [WM1302 code](https://github.com/Lora-net/sx1302_hal) を reTerminal にダウンロードしてコンパイルします。

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

**Step 4.** reset_lgw.sh スクリプトをコピーします

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

**Step 5.** WM1302-USB モジュールをロードします

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

**Step 6.** デバイスファイルを探します

```bash
sudo dmesg | grep 1-1.3.3
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/ACM.png" /></div>

**Step 7.** `global_conf.json.sx1250.EU868.USB` 設定ファイルの内容を変更します：

```sh
cd packet_forwarder
vim global_conf.json.sx1250.EU868.USB
```

`"com_path": "/dev/ttyACM0"` を `"com_path": "/dev/ttyACM4"` に変更します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/change_file.png" /></div>

**Step 8.** LoraWAN® Module を起動します

次に、WM1302 の動作周波数バージョンに応じて、以下のコードを実行して LoraWAN® Module を起動します。

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

このコマンドは、LoRa® USB に使用する設定ファイルを指定します。

</TabItem>
</Tabs>

<!-- Code END -->

### PoE

給電デバイスとして動作する reComputer R1000 は、PoE 電源モジュールを追加することで IEEE 802.3af 規格をサポートできます。ユーザーは、Ethernet PoE 機能を実現するために PoE モジュールを取り付ける際、デバイスを分解する必要があります。

:::note
reComputer R1000 は PoE 電源供給をサポートしていますが、標準製品にはデフォルトで PoE モジュールは含まれていません。Seeed はバッチカスタマイズ注文向けに PoE のはんだ付けおよび組立サービスを提供できます。ただし、顧客がサンプルを評価している場合は、[PoE モジュールを自分ではんだ付けおよび組み立てる](/ja/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module) 必要があります。
:::

### M.2 スロット

reComputer R1000 は、基板上の 2 つの Mini-PCIe スロットの下にある PCIe スロット (J62) を使用することで、2280 NVMe SSD および AI アクセラレータ (Hailo) をサポートします。CM4 の PCIe は Gen2.0 であり、理論上の最大速度は 5Gbps であることに注意することが重要です。Gen3.0 以上の SSD を使用している場合、SSD の最大速度を発揮できない可能性があります。テストの結果、SSD を搭載した reTerminal DM は、最大書き込み速度 230MB/s、最大読み取り速度 370MB/s を達成できます。どの SSD が互換性があるか不明な場合は、以下のアクセサリリストに従って購入することができます。

[組み立て手順についてはこちらをクリックしてください](/ja/recomputer_r1000_assembly_guide/#assemble-ssd).

<div class="table-center">

<table >
  <tbody>
  <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>SSD カード</td>
      <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>NVMe M.2 2280 SSD 1TB</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html">112990267</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html">112990247</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html">112990246</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html">112990226</a></td>
  </tr>
  </tbody>
</table>
</div>

:::note
次の点にご注意ください：<br />
1- 速度テストの結果は、SSD モデル、テスト方法、およびテスト環境によって異なる場合があります。ここで示す値は Seeed のラボで取得した参考値です。<br />

SSD カードには主に 2 つの用途があります：<br />
1.大容量ストレージ：SSD カードは大容量ストレージ用途に利用できます。<br />
2.イメージを格納したブートドライブ：もう 1 つの用途は、SSD を大容量ストレージとして使用すると同時にシステムイメージを保存し、SSD カードから直接起動できるようにすることです。<br />
市場に出回っているすべての SSD カードが 2 番目の用途をサポートしているわけではないことに注意が必要です。そのため、ブートドライブとして使用する予定で、どのモデルを購入すべきか分からない場合は、当社推奨の **1TB SSD(SKU [112990267](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html))** を選択することをお勧めします。このモデルはブート機能についてテストおよび検証済みであり、互換性問題のリスクを軽減し、試行錯誤にかかるコストを最小限に抑えることができます。
:::

### 暗号化チップ TPM 2.0

TPM は、Trusted Computing Group (TCG) TPM 2.0 仕様に準拠した Infineon の OPTIGA™ TPM SLB9670 を搭載しており、reComputer R1000 向けの暗号化チップとして推奨されています。このチップは、基板上のポート J13 に適用される SPI インターフェースを備えており、プラットフォームの完全性のための信頼の基点、リモート認証、および暗号サービスを有効にします。

:::note
[組み立て手順についてはこちらをクリックしてください](/ja/recomputer_r1000_assembly_guide/#assemble-tpm-20-module).
:::

TPM 2.0 モジュールをデバイスに接続した場合、以下のコードで TPM 接続を確認できます。

```bash
ls /dev | grep tpm
```

出力に **tpm0** と **tpmrm0** が表示されていれば、TPM（Trusted Platform Module）デバイスが検出され、システム上で利用可能であることを意味します。これは TPM ハードウェアが認識されアクセス可能であることを示しており、良好な状態です。デバイスが存在しアクセス可能であることを確認したうえで、TPM 関連の機能やアプリケーションを使用に進むことができます。

### UPS

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/30.png" /></div>

UPS は 7F で、直列動作します。UPS モジュールは DC5V と CM4 コンポーネントの間に配置されており、5V 電源が失われた場合に CPU に通知するための GPIO 信号が使用されます。CPU はこの信号を受信すると、スーパーキャパシタのエネルギーが枯渇する前に緊急スクリプトを実行し、"$ shutdown" コマンドを実行します。
<br />
UPS によって提供されるバックアップ時間は、システム負荷に大きく依存します。以下は、4GB RAM、32GB eMMC ストレージ、Wi-Fi モジュールを備えた CM4 モジュールでテストした代表的なシナリオです。
<br />

| 動作モード | 時間(s) | 備考                                                       |
| ----------------- | ------- | ------------------------------------------------------------ |
| アイドル              | 37      | 公式ドライバプログラムをロードしたアイドル状態でのテスト |
| CPU フルロード  | 18      | stress -c 4 -t 10m -v &                                      |

:::note
UPS 機能については、詳細情報を入手するためにお問い合わせください。アラーム信号はアクティブ Low です。
[組み立て手順についてはこちらをクリックしてください](/ja/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module).
:::

CPU と DC/AC 電源入力の間の GPIO25 は、5V 電源が落ちたときに CPU にアラームを出すために使用されます。その後、CPU はスーパーキャパシタのエネルギーが尽きる前にスクリプト内で緊急処理を行い、`$ shutdown` を実行する必要があります。
<br />
この機能を使用する別の方法として、GPIO ピンの変化をトリガとしてシャットダウンを開始する方法があります。指定された GPIO ピンは、KEY_POWER イベントを生成する入力キーとして設定されます。このイベントは systemd-logind によって処理され、シャットダウンが開始されます。
`/boot/overlays/README` を参照し、`/boot/config.txt` を変更します。

```bash
dtoverlay=gpio-shutdown,gpio_pin=25,active_low=1
```

:::note

1. UPS 機能については、詳細情報を入手するためにお問い合わせください。
2. アラーム信号はアクティブ Low です。

:::

以下の Python コードは、GPIO25 を介してスーパーキャパシタ UPS の動作モードを検出し、システムの電源が切れたときに自動的にデータを保存してシャットダウンするデモです。

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

### DSI & Speaker

1 つの DSI（J24）と 1 つの 4 ピンスピーカー（J7）インターフェースが、特別な用途のために基板上に予約されています。ユーザーは自身のニーズに応じてプラグインを購入する必要があります。

## 追加リソース

- [ユーザーマニュアル - reComputer R1000](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputerR_UserManual_version01.pdf)
- [ユーザーマニュアル - reComputer R1000（中国語）](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputerR_UserManual_CN_version01.pdf )
- [reComputer R1000 3D ファイル](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000.stp)
- [reComputer R1000 回路図設計、PCB 設計](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_schematic_design_files.zip)
- [reComputer R1000 フライヤー](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_flyer.pdf)
- [reComputer R1000 フライヤー（中国語）](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_flyer_CN.pdf)
- [reComputer R1000 v1.1 ピン割り当て](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_v1_1_Pin_Assignment.xlsx)



## リソース

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## 技術サポート & 製品ディスカッション

当社製品をお選びいただきありがとうございます。お客様が当社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
