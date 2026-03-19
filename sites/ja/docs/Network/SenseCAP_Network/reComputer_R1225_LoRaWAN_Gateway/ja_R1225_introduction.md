---
description: reComputer R1225 LoRaWAN ゲートウェイ概要
title: reComputer R1225 LoRaWAN ゲートウェイ概要
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /r1225_introduction
last_update:
  date: 01/04/2026
  author: Kian
createdAt: '2026-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/r1225_introduction/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Appearance_Image/R1225_White_Background.png" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1225-LoRaWAN-Gateway-Industrial-Controller-US915-p-6722.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 説明

reComputer R1225 は、Raspberry Pi をベースにした強力で柔軟な産業用 IoT LoRaWAN ゲートウェイ兼コントローラであり、CM4 を搭載し AI 機能に対応しています。3 系統の RS485、デュアル Ethernet、BACnet および Modbus をサポートし、堅牢で信頼性の高い産業用エッジ IoT デバイスに必要な機能をすべて備えています。AI NPU アクセラレータとの互換性により、特に BMS、BAS、iBMS などのリモートアクセス制御に最適です。

## 特長

### ビルオートメーションシステム向けに設計

- 複数の絶縁 RS485 チャネルにより、高速および低速通信をサポート

- BACnet、Modbus RTU、および Modbus TCP/IP プロトコルをサポート
- 最大 4GB RAM により数千のデータポイント処理をサポートし、高効率なパフォーマンスを実現
- 両面のわかりやすい LED インジケータにより、動作状態を素早く確認可能
- 高品質な金属筐体で、DIN レールおよび壁面取り付けに対応
- オープンソースソフトウェア Seeed Gateway OS、ChirpStack、Basics™ Station、Packet Forward を内蔵。カスタマイズや派生開発をサポート

### 強力なパフォーマンス

- Raspberry Pi CM4 搭載

- Broadcom BCM2711 クアッドコア Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz
- 最大 4GB RAM および 32GB eMMC

### 充実した無線機能

- オンチップ Wi-Fi

- オンチップ BLE

- Mini-PCIe1: LTE
  - 4G バージョンは LTE モジュールをプリインストール:
    - EU868: EC25-EUX-mini-PCIe (LTE Cat 4)
    - US915: EC25-AFXGA-mini-PCIe (LTE Cat 4)

- Mini-PCIe2: SPI LoRa® モジュールをプリインストール
  - EU868: Wio-WM1302 LoRaWAN Gateway Module (SPI) - EU868
  - US915: Wio-WM1302 LoRaWAN Gateway Module (SPI) - US915

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
- UPS スーパーキャパシタ（**同梱**）
- 金属筐体（側面パネルは PC）
- ESD: EN61000-4-2, レベル 3
- EFT: EN61000-4-4, レベル 2
- サージ: EN61000-4-5, レベル 2
- 生産ライフタイム: reComputer R1225 は少なくとも 2030 年 12 月まで生産継続予定

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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>CPU</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Raspberry Pi CM4、クアッドコア Cortex-A72@ 1.5GHz</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>オペレーティングシステム</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Raspberry Pi OS、Ubuntu</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RAM</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>4GB</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>eMMC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>32GB</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>IEEE 802.3af 規格 12.95W PoE</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>電源電圧（AC/DC）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>12&#126;24V AC/9&#126;36V DC</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps（PoE 対応*）</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>DSI(予約済み)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>LCD をサポート*(筐体内のオンボード)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>無線通信</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>Wi-Fi 2.4/5.0 GHz</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>オンチップ Wi-Fi</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>あり</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>BLE 5.0</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>オンチップ BLE</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>あり</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LoRa®(使用中)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>SPI LoRa®</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>4G セルラー(オプション)</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={3} style={{height: 18, width: '35.4622%'}}>認証</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>CE、FCC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>RoHS</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>SuperCAP UPS LTC3350 モジュール</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 年</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>製品ライフタイム</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2030 年 12 月まで</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>コンポーネントおよびインターフェースの状態に関する説明</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>予約済み</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>将来の使用または拡張のために確保されています。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>オプション</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>必須ではないコンポーネントであり、ユーザーが含めるか除外するかを選択できます。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>使用中</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>現在使用されており、製品機能に不可欠です。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>同梱</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>標準パッケージに含まれる必須コンポーネント。</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>機構</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>寸法(W x H x D)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>130 mm x 93 mm x 49.6 mm</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>筐体</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6061 アルミニウム合金ケース（透明 PC サイドパネル付き）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>取り付け</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>DIN レール/壁面</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>重量(正味)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>           </td>
    </tr>
  </tbody>
</table>
</div>
<!--待重新称重后补充-->

### 免責事項

**「*」が付いているオプションは、付属品リストに従って追加購入が必要です。**

## ハードウェア概要

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Details_Image/Hardware_Overview03.jpg" /></div>

## メインボード概要

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Details_Image/Mainboard_Overview02.jpg" /></div>

## 電源回路図

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Details_Image/Power_Diagram04.jpg" /></div>

reComputer R1225 は、AC、DC 端子、PoE ポートの 3 種類の電源供給オプションをサポートしています。デフォルトでは、reComputer R1225 は AC/DC 端子（公式地域別電源アダプタ SKU:110061505/110061506）から給電されますが、**PoE 電源供給（PoE モジュール、SKU:110991925）が同梱されています**。これにより、電源の選択に柔軟性が生まれ、さまざまな電源ソースとの容易な統合が可能になります。

### 2 ピン電源端子

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

reComputer R1225 は、公称 AC 電圧 12&#126;24V または DC 電圧 9&#126;36V で給電されます。電源は 2 ピン電源端子ブロックコネクタを介して接続されます。reComputer R1225 をアースするには、アース線を電源端子左上のネジに固定します。

:::note
この電源ソリューションは、逆極性保護のためにブリッジ整流ダイオードを使用しており、AC と DC の両方の入力に対応しています。これにより、**電源のプラス端子とマイナス端子がどのように接続されていても**回路が損傷することはありません。ブリッジ整流器を使用することで、入力 DC の極性に関係なく出力電圧の極性が一定に保たれ、効果的な逆極性保護が実現されます。
:::

### POE（同梱）

PoE モジュールを取り付けることで、reComputer R1225 の ETH0 ポートは PoE 給電をサポートし、Ethernet 経由でデバイスに電源を供給する便利で効率的な方法を提供します。このオプションにより、設置プロセスが簡素化され、必要な配線の量が削減されるため、電源が限られているアプリケーションや電源コンセントが容易に利用できない環境に最適なソリューションとなります。

- PoE 入力：範囲 44~57V、標準 48V
- PoE 出力：12V、最大 1.1A

:::note
reComputer R1225 に付属する PoE モジュールは IEEE 802.3af 規格に準拠しており、最大 12.95W の電力供給が可能である点に注意してください。**そのため、SSD や 4G モジュールなどの高消費電力の周辺機器を接続する必要がある場合、PoE 電源だけでは十分でない可能性があります。**この場合、デバイスの安定かつ信頼性の高い動作を確保するために、代わりに AC/DC 端子から給電することを推奨します。
:::

### 消費電力

reComputer R1225 の消費電力については、Seeed Studio のラボで測定した下記の表を参照してください。この値はあくまで参考値であり、テスト方法や環境によって結果が変動する可能性がある点にご注意ください。

待テスト

| 状態      | 電圧  | 電流  | 消費電力 | 説明                                                                                                              |
|   ---    |   --- |  ---  |   ---    |   ---                                                                                                             |
|シャットダウン|24V   |  mA   |    W     | シャットダウンおよび電源オフ状態での静的消費電力テスト。                                                         |
|アイドル  |24V    |  mA   |    W     | テストプログラムを実行せずに、reComputer R1225 デバイスへ 24V 電源を供給した際の入力電流をテストします。        |
|フルロード|24V    |  mA   |    W     | 「stress -c 4」コマンドを使用して CPU をフルロードで動作させます。外部デバイスは未接続。                         |

### 電源オンおよび電源オフ

reComputer R1225 にはデフォルトで電源ボタンが搭載されておらず、電源が接続されるとシステムは自動的に起動します。シャットダウンする際は、オペレーティングシステム上でシャットダウンオプションを選択し、システムが完全に停止するまで待ってから電源を切ってください。システムを再起動するには、電源を再接続するだけです。

:::note
シャットダウン後は、内部コンデンサが完全に放電されるよう、システムを再起動する前に**少なくとも 10 秒**お待ちください。
:::

## ブロック図

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Details_Image/Block_Diagram05.jpg" /></div>

### IIC 回路図

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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps IEEE 1588-2008（PoE 対応）</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>3 x 3 ピン端子ブロック（絶縁）</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>LCD* 対応（筐体内にオンボード搭載）</td>
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

reComputer R1225 には 6 つの LED インジケータが搭載されており、機器の動作状態を示します。各 LED の具体的な機能と状態については、以下の表を参照してください。

| LED インジケータ | 色             | 状態 | 説明                                                                         |
| ------------- | -------------- | ---- | ---------------------------------------------------------------------------- |
| PWR           | 緑             | On   | デバイスが電源に接続されています。                                          |
|               |                | Off  | デバイスが電源に接続されていません。                                        |
| ACT           | 緑             |      | Linux では、このピンは eMMC アクセスを示すために点滅します。<br /> 起動中にエラーが発生した場合、この LED はエラーコードに対応したパターンで点滅し、<br />そのパターンは[Raspberry Pi のウェブサイト上の表](https://www.raspberrypi.com/documentation/computers/configuration.html#led-warning-flash-codes)を使用して読み取ることができます。 |
| USER          | 緑/赤/青       |      | ユーザーによって定義する必要があります。                                    |
| RS485-1       | 緑             | Off  | RS485 チャンネル 1 でデータ転送が行われていません。                         |
|               |                | Blink| RS485 チャンネル 1 がデータを送受信しています。                             |
| RS485-2       | 緑             | Off  | RS485 チャンネル 2 でデータ転送が行われていません。                         |
|               |                | Blink| RS485 チャンネル 2 がデータを送受信しています。                             |
| RS485-3       | 緑             | Off  | RS485 チャンネル 3 でデータ転送が行われていません。                         |
|               |                | Blink| RS485 チャンネル 3 がデータを送受信しています。                             |

#### ACT ステータス表

| **長い点滅** | **短い点滅** | **ステータス**                      |
| ---------------- | ----------------- | ----------------------------------- |
| 0                | 3                 | 一般的な起動失敗                   |
| 0                | 4                 | start*.elf が見つかりません        |
| 0                | 7                 | カーネルイメージが見つかりません   |
| 0                | 8                 | SDRAM 障害                         |
| 0                | 9                 | SDRAM 不足                         |
| 0                | 10                | HALT 状態                          |
| 2                | 1                 | パーティションが FAT ではありません |
| 2                | 2                 | パーティションからの読み取り失敗   |
| 2                | 3                 | 拡張パーティションが FAT ではありません |
| 2                | 4                 | ファイル署名/ハッシュ不一致 - Pi 4 |
| 4                | 4                 | 非対応のボードタイプ               |
| 4                | 5                 | 致命的なファームウェアエラー       |
| 4                | 6                 | 電源障害タイプ A                   |
| 4                | 7                 | 電源障害タイプ B                   |

ACT LED が規則的な 4 回点滅パターンで点滅する場合、ブートコード（start.elf）を見つけられていません。
ACT LED が不規則なパターンで点滅する場合は、起動が開始されています。
ACT LED が点滅しない場合、EEPROM コードが破損している可能性があります。何も接続しない状態でもう一度試して確認してください。詳細については Raspberry Pi フォーラムを参照してください：
STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums
詳細については [Raspberry Pi forum](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151) を参照してください。

#### Luci インターフェースによるカスタマイズ可能な LED ライト

#### コマンドによる LED ライトの制御

ユーザー LED を制御するには、Linux カーネルが提供する疑似ファイルシステムである sysfs の使用を推奨します。sysfs は、さまざまなカーネルサブシステム、ハードウェアデバイス、およびそれらに関連するドライバに関する情報を公開します。reComputer R1225 では、ユーザー LED インターフェースを 3 つのデバイスファイル（led-red、led-blue、led-green）に抽象化しており、これらのファイルを操作するだけで LED ライトを簡単に制御できるようになっています。例は次のとおりです：

1. 赤色 LED を点灯するには、ターミナルに次のコマンドを入力してください：

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
```

2. 赤色 LED を消灯するには、ターミナルに次のコマンドを入力してください：

```bash
echo 0 | sudo tee /sys/class/leds/led-red/brightness
```

3. 赤色 LED と緑色 LED を同時に点灯させることもできます。ターミナルに次のコマンドを入力してください：

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
echo 1 | sudo tee /sys/class/leds/led-green/brightness
```

### ブザー

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig07.png" /></div>

reComputer R1225 にはアクティブブザーが搭載されており、アラームやイベント通知などさまざまな用途に使用できます。

reComputer R1225 ユーザー向け（**R1225 は R1000 v1.1 ハードウェアプラットフォームに基づいています**）に、ブザーは PCA9535 P15 に接続されています。ブザーをオフ（オン）にするには、ターミナルに次のコマンドを入力してください：

```bash
echo 591 | sudo tee /sys/class/gpio/export
echo out | sudo tee /sys/class/gpio/gpio591/direction
echo 1 | sudo tee /sys/class/gpio/gpio591/value # turn on
echo 0 | sudo tee /sys/class/gpio/gpio591/value # turn off
```

### RS485

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig21.png" /></div>

reComputer R1225 には 3 ピンコネクタを使用した 3 組の RS485 インターフェースが搭載されており、信号と電源の両方が絶縁されているため、産業用および自動化アプリケーションにおいて安全かつ信頼性の高い動作を実現します。RS485A および RS485B 信号は容量結合によるアイソレーションが施されており、優れた EMI 耐性を提供し、RS485 インターフェースの高速通信要件を満たします。
**デフォルトでは、120Ω の終端抵抗は実装されていません。ただし、パッケージボックスには表面実装抵抗が 5 個同梱されています。必要に応じて、ユーザー自身でデバイスに抵抗をはんだ付けしてください。**

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position.png" /></div>

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position2.png" /></div>

:::note
RS485 インターフェースは絶縁電源を使用しているため、RS485 インターフェースに接続される外部デバイスのグランド信号は GND_ISO ピンに接続する必要があります。

:::

以下は、reComputer の 485 インターフェースに関連するピンのデータテーブルです。

| RS485         | RS485_POWER_EN         | OS デバイスファイル | P14         | 既定値(High) |
| ------------- | ---------------------- | -------------- | ----------- | ------------- |
| TX5           |                        | /dev/ttyAMA5   | GPIO12      |               |
| RX5           |                        |                | GPIO13      |               |
| TX2           | ID_SD                  | /dev/ttyAMA2   | GPIO0/ID_SD |               |
| RX2           | ID_SC                  |                | GPIO1/ID_SC |               |
| TX3           |                        | /dev/ttyAMA3   | GPIO4       |               |
| RX3           |                        |                | GPIO5       |               |
| RS485_1_DE/RE | (Hight/DE \|\| Low/RE) | /dev/ttyAMA2   | GPIO6       | default Low   |
| RS485_2_DE/RE |                        | /dev/ttyAMA3   | GPIO17      | default Low   |
| RS485_3_DE/RE |                        | /dev/ttyAMA5   | GPIO24      | default Low   |

デフォルトでは、RS485 ポートの電源イネーブルポートは High であり、各 RS485 インターフェースは受信状態になっています。簡単な実験を行うことができます。

PC と reComputer-R を接続する 485 ポート。

reComputer のターミナルで次を入力します：

```shell
cat /dev/ttyAMA2
```

その後、コンピュータのシリアルデバッグツールでいくつかのデータを送信すると、reComputer のターミナルウィンドウでそのデータを確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/21.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/22.png" /></div>

### ブートスイッチ

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" /></div>

reComputer R1225 のブートスイッチは CM4 の nRPI_BOOT ピンに接続されています。このスイッチにより、ユーザーは eMMC と USB のどちらから起動するかを選択できます。通常モードでは、スイッチを「BOOT」ラベル側から離した位置に設定し、システムを eMMC から起動させます。逆に、システムイメージを書き込む必要がある場合は、スイッチを「BOOT」ラベル側に倒し、システムを Type-C USB インターフェースから起動させます。

<div class="table-center">

| スイッチ位置                                                                                                        | モード      | 説明              | nRPI-BOOT |
| ---------------------------------------------------------------------------------------------------------------------- | ----------- | ----------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | 通常モード  | eMMC から起動     | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | フラッシュモード | USB から起動  | High      |

</div>

:::note
**ブートモードでは、POE 電源供給機能は使用できません。**
:::

### USB

<div align="left"><img width={150} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig20.png" /></div>

reComputer R1225 には USB Type-C ポートが 1 つと USB Type-A ポートが 2 つ搭載されています。それぞれの機能と説明については、以下の表を参照してください。

| **タイプ**   | **数量** | **プロトコル** | **機能**     | **説明**                                                                            |
| ---------- | ------------ | ------------ | ------------ | ---------------------------------------------------------------------------------- |
| **Type-C** | *1           | USB2.0       | USB-Device   | シリアルポートデバッグ、イメージ書き込みなどに使用します。                         |
| **Type-A** | *2           | USB2.0       | USB-Host     | フラッシュドライブ、<br /> USB キーボードやマウスなど、さまざまな USB デバイスを接続します。 |

**lsusb** コマンドを実行して、USB ハブが検出されているか確認します。このコマンドは、ハブを含む接続されているすべての USB デバイスを一覧表示します。

```shell
lsusb
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/23.png" /></div>

このコマンドを実行すると、システムに接続されている USB デバイスに関する情報が表示され、その中に存在する USB ハブも含まれます。

USB ハブが正常に動作している場合、**lsusb** コマンドの出力にその詳細が表示されます。表示されない場合は、ハブまたはシステムとの接続に問題がある可能性があります。そのような場合は、USB ハブまたはその接続をトラブルシューティングする必要があります。

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
reComputer R1225 は、産業用途で一般的に使用される標準サイズの SIM カードスロットを採用しており、25mm x 15mm の標準 SIM カードが必要です。
:::note
reComputer R1225 には 4G バージョンがあります。標準版（4G モジュールなし）を購入した場合は、4G モジュールを別途購入して取り付けることができます。Bazaar Mall では現在、2 種類の 4G モジュールを提供しています：ヨーロッパ向け（EMEA & Thai <a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">**SKU 113991135**</a>）とアメリカ向け（北米 **<a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">SKU 113991134</a>**）
:::

### SSD スロット

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig08.png" /></div>
<br />
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig04.png" /></div>
reComputer R1225 の SSD スロットは、容量 128GB、256GB、512GB、1TB の NVMe M.2 2280 SSD を収容できるように設計されています。このスロットにより、高速なストレージ拡張が可能となり、システムの性能と容量を向上させることができます。

SSD を含むディスクを一覧表示するには、*fdisk -l* コマンドを使用できます。手順は次のとおりです：

```bash
sudo fdisk -l
```

このコマンドは、システムに接続されているすべてのディスクの一覧を表示し、正しく認識されていれば SSD も含まれます。SSD を表すエントリを探してください。通常、/dev/sd に続く文字（例：/dev/sda、/dev/sdb など）で始まります。
SSD に対応するエントリを特定したら、必要に応じてパーティション作成やフォーマットを行うことができます。

:::note
SSD カードには主に 2 つの用途があります：<br />
1.大容量ストレージ：SSD カードは大容量ストレージ用途に利用できます。<br />
2.イメージ入りブートドライブ：もう 1 つの用途は、SSD を大容量ストレージとして使用すると同時にシステムイメージを保存し、SSD カードから直接ブートできるようにすることです。<br />
市場に出回っているすべての SSD カードが 2 番目の用途をサポートしているわけではないことに注意が必要です。そのため、ブートドライブとして使用する予定で、どのモデルを購入すべきか不明な場合は、当社推奨の 1TB SSD（SKU 112990267）を選択することをお勧めします。このモデルはブート機能についてテストおよび検証済みであり、互換性問題のリスクを軽減し、試行錯誤にかかるコストを最小限に抑えます。
:::

### Mini-PCle スロット

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig06.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/slot.png" /></div>
<br />
<div class="table-center">

|         スロット         | 対応プロトコル |
| -------------------- | ------------------ |
|       Mini-PCIe 1    |       4G LTE       |
|       Mini-PCIe 2    |      SPI LoRa®     |

</div>

:::note
reComputer R1225 には標準版と 4G 版があります。標準版では Mini-PCIe 1 は空きスロットのままですが、4G 版では Mini-PCIe 1 に 4G LTE があらかじめ搭載されています。
:::

このデバイスには 2 つの Mini-PCIe インターフェース、すなわち Mini-PCIe スロット 1 と Mini-PCIe スロット 2 が搭載されています。スロット 1 は SIM カードスロットに接続され、USB プロトコルをサポートします。一方、スロット 2 は USB と SPI の両方のプロトコルをサポートしますが、SIM カードスロットには接続されていません。そのため、4G LTE などのデバイスはスロット 1 に接続でき、SPI LoRa® デバイスはスロット 2 に接続できます。

### リセットホール

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig16.png" /></div>

reComputer R1225 のリセットホール内にはミニプッシュボタンスイッチがあります。このボタンを細い物で押すことで、CM4 をリセットできます。このピンが High のときは CM4 が起動したことを示し、このピンを Low にするとモジュールがリセットされます。

### Ethernet RJ45

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig15.png" /></div>
<br />
<div class="table-left">

| 名称 | 種類                        | 速度               | PoE                                |
| ---- | --------------------------- | ------------------ | ---------------------------------- |
| ETH0 | CM4 ネイティブ ギガビット Ethernet | 10/100/1000 Mbit/s | 事前インストール済み               |
| ETH1 | USB から変換                | 10/100 Mbit/s      | 非対応                             |

</div>

reComputer R1225 には 2 つの Ethernet RJ45 ポートが搭載されています。ETH0 は CM4 ネイティブのギガビット Ethernet インターフェースで、10/100/1000 Mbit/s の 3 種類の速度をサポートします。このインターフェースに PoE モジュールを追加購入して取り付けることで、電源供給を兼ねた PoE（Power over Ethernet）給電により reComputer R1225 に電力を供給できます。もう一方の ETH1 は USB から変換されたインターフェースで、10/100 Mbit/s をサポートします。

### HDMI

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig17.png" /></div>

reComputer R1225 は CM4 からのネイティブ HDMI インターフェースを備えており、最大 4K @ 60 fps のビデオ出力をサポートします。複数ディスプレイを必要とするアプリケーションに最適で、外部の大型スクリーンにコンテンツを出力できます。

### RTC

reComputer R1225 には RTC 回路が搭載されており、CR2032 バッテリーがあらかじめ装着されているため、電源喪失時でも時刻保持機能を維持できます。

リアルタイムクロック（RTC）機能をテストするには、次の手順に従ってください：

1. 自動時刻同期を無効にします：

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
```

2. 時刻を 2024 年 3 月 20 日の 12:00 PM に設定します：

```bash
sudo hwclock --set --date "2024-03-20 12:00:00"
```

3. RTC の時刻をシステムに同期します：

```bash
sudo hwclock --hctosys
```

4. RTC の時刻を確認します：

```bash
sudo hwclock -r
```

このコマンドは、RTC に保存されている時刻を読み出して表示します。
5. RTC から電源を取り外し、数分待ってから再接続し、RTC の時刻が正しく保持されているか再度確認します。

### ウォッチドッグ

reComputer R1225 には独立したハードウェアウォッチドッグ回路が搭載されており、システムが異常クラッシュした場合に自動的にシステムを再起動します。ウォッチドッグ回路は RTC を通じて実装されており、1～255 秒の柔軟な給電（キック）時間を設定できます。

ウォッチドッグテストを実行するには、次の手順に従ってください：

1. ウォッチドッグソフトウェアをインストールします：

```bash
sudo apt install watchdog 
```

2. ウォッチドッグの設定ファイルを編集します：

```bash
# make sure you install vim already, if haven't, can install by the command below
sudo apt-get install vim
sudo vim /etc/watchdog.conf
```

設定を次のように変更します：

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
3. ウォッチドッグサービスが実行中であることを確認します：

```bash
sudo systemctl start watchdog
```

4. ウォッチドッグ機能をテストするには、次のコマンドを実行してシステムハングをシミュレートします：

```bash
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

:::warning
このコマンドはカーネルクラッシュを引き起こし、ウォッチドッグによってシステムが再起動されるはずです。
:::

5. 指定したタイムアウト時間後にシステムが再起動することを確認するため、システムを監視します。
これらの手順により、システム上のウォッチドッグタイマーの機能をテストし、確認することができます。

## オプションのインターフェースとモジュール

### Wi-Fi/BLE（同梱）

reComputer R1225 は、オンボード Wi-Fi/BLE バージョンの CM4 を搭載しており、CM4 と同じ Wi-Fi/BLE パラメータを提供します。詳細なパラメータ情報については、Raspberry Pi 公式サイトを参照してください。

:::note
reComputer R1225 の金属筐体のため、Wi-Fi/BLE 信号が金属外装を透過しにくい場合があることに注意が必要です。そのため、この機能が必要な場合は、当社が用意した外部アンテナを取り付けることをお勧めします。
:::

#### Wi-Fi に接続

##### Luci UI 経由で Wi-Fi に接続

##### コマンドで Wi-Fi に接続

step1. Wi-Fi ネットワークをスキャンします：

  ```bash
  nmcli dev wifi list
  ```

step2. Wi-Fi ネットワークに接続します：

  ```bash
  sudo nmcli dev wifi connect network-ssid password "network-password"
  sudo nmcli --ask dev wifi connect network-ssid
  ```

step3. デバイスの電源投入後、自動的に Wi-Fi に接続されます。  
  保存された WiFi 情報を削除したい場合：

  ```bash
  nmcli con del network-ssid
  ```

  接続が切断された後、別の Wi-Fi に接続します。

#### Bluetooth デバイスに接続

Bluetooth デバイスを追加する前に、コンピュータ上で Bluetooth サービスが起動して実行中である必要があります。systemctl コマンドで確認できます。

```bash
sudo systemctl status bluetooth
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/32.png" /></div>
<br />
Bluetooth サービスのステータスが active でない場合は、まず有効化する必要があります。その後、デバイス起動時に自動的に開始されるようサービスを開始します。

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

### 4G モジュール（オプション）

reComputer R1225 LoRaWAN Gateway には Standard バージョンと 4G バージョンがあります。Standard バージョンでは Mini-PCIe スロット 1 は空きですが、4G バージョンにはヨーロッパ（EMEA & Thai <a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">**SKU 113991135**</a>）およびアメリカ（北米 **<a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">SKU 113991134</a>**）向けに最適化された Mini-PCIe モジュールがあらかじめ搭載されています。

### LoRa® モジュール（同梱）

reComputer R1225 LoRaWAN Gateway の Mini-PCIe スロット 2 には、SPI LoRa® モジュールが装着されています。

### PoE（同梱）

reComputer R1225 LoRaWAN Gateway には PoE モジュールが搭載されており、ユーザーが自分で購入・はんだ付け・組み立てを行う必要はありません。

### M.2 スロット（オプション）

reComputer R1225 は、基板上の 2 つの Mini-PCIe スロットの下にある PCIe スロット（J62）を使用することで、2280 NVMe SSD と AI アクセラレータ（Hailo）をサポートします。CM4 の PCIe は Gen2.0 であり、理論上の最大速度は 5Gbps であることに注意してください。Gen3.0 以上の SSD を使用する場合、SSD の最大速度を発揮できない可能性があります。テストの結果、SSD を搭載した reTerminal DM は、最大書き込み速度 230MB/s、最大読み出し速度 370MB/s を達成できます。どの SSD が互換性があるか不明な場合は、以下のアクセサリリストに従って購入することをお勧めします。

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
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>512GB NVMe M.2 PCle Gen3x4 2280 内蔵 SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html">112990247</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>256GB NVMe M.2 PCle Gen3x4 2280 内蔵 SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html">112990246</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>128GB NVMe M.2 PCle Gen3x4 2280 内蔵 SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html">112990226</a></td>
  </tr>
  </tbody>
</table>
</div>

:::note
次の点にご注意ください：<br />
1- 速度テストの結果は、SSD モデル、テスト方法、およびテスト環境によって異なる場合があります。ここで示す値は参考値であり、Seeed のラボで取得されたものです。<br />

SSD カードには主に 2 つの用途があります：<br />
1.大容量ストレージ：SSD カードは大容量ストレージ用途に利用できます。<br />
2.イメージを格納したブートドライブ：もう 1 つの用途は、SSD を大容量ストレージとして使用すると同時にシステムイメージを保存し、SSD カードから直接起動できるようにすることです。<br />
市場に出回っているすべての SSD カードが 2 番目の用途をサポートしているわけではないことに注意してください。そのため、ブートドライブとして使用する予定で、どのモデルを購入すべきか分からない場合は、当社推奨の **1TB SSD（<a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html">SKU [112990267]</a>）** をお選びいただくことをお勧めします。このモデルはブート機能についてテストおよび検証済みであり、互換性問題のリスクを軽減し、試行錯誤にかかるコストを最小限に抑えます。
:::

### 暗号化チップ TPM 2.0（オプション）

TPM には、Trusted Computing Group（TCG）TPM 2.0 仕様に準拠した Infineon の OPTIGA™ TPM SLB9670 が採用されており、reComputer R1225 用の暗号化チップとして推奨されています。このチップはボード上のポート J13 に接続される SPI インターフェースを備えており、プラットフォームの完全性のための信頼の基点、リモート認証、および暗号サービスを実現します。

:::note
[組み立て手順についてはこちらをクリックしてください](https://wiki.seeedstudio.com/ja/recomputer_r1000_assembly_guide/#assemble-tpm-20-module).
:::

TPM 2.0 モジュールをデバイスに接続した場合、以下のコードで TPM 接続を確認できます。

```bash
ls /dev | grep tpm
```

出力に **tpm0** と **tpmrm0** が表示される場合、TPM（Trusted Platform Module）デバイスがシステム上で検出され、利用可能であることを意味します。これは TPM ハードウェアが認識されアクセス可能であることを示しており、良好な状態です。TPM 関連の機能やアプリケーションを、デバイスが存在しアクセス可能であることを確認したうえで使用することができます。

### UPS（同梱）

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/30.png" /></div>

UPS は 7F のスーパーキャパシタで、直列動作します。UPS モジュールは DC5V と CM4 コンポーネントの間に配置されており、5V 電源が失われた場合に CPU に警告するための GPIO 信号が使用されます。CPU はこの信号を受信すると、スーパーキャパシタのエネルギーが枯渇する前に緊急スクリプトを実行し、「$ shutdown」コマンドを実行します。
<br />
UPS によって提供されるバックアップ時間は、システム負荷に大きく依存します。以下は、4GB RAM、32GB eMMC ストレージ、および Wi-Fi モジュールを備えた CM4 モジュールでテストした代表的なシナリオです。
<br />

| 動作モード | 時間（秒） | 備考                                                            |
| ----------------- | ------- | ----------------------------------------------------------------- |
| アイドル          | 37      | 公式ドライバプログラムをロードしたアイドル状態でのテスト         |
| CPU フルロード    | 18      | stress -c 4 -t 10m -v &                                           |

:::note
UPS 機能の詳細についてはお問い合わせください。アラーム信号はアクティブ Low です。
:::

CPU と DC/AC 電源入力の間の GPIO25 は、5V 電源がダウンしたときに CPU に警告するために使用されます。その後、CPU はスーパーキャパシタのエネルギーが枯渇する前にスクリプト内で緊急処理を行い、`$ shutdown` を実行する必要があります。
<br />
この機能を使用するもう 1 つの方法は、GPIO ピンの状態変化時にシャットダウンを開始することです。指定された GPIO ピンは KEY_POWER イベントを生成する入力キーとして設定されます。このイベントは systemd-logind によって処理され、シャットダウンが開始されます。
`/boot/overlays/README` を参照し、その後 `/boot/config.txt` を変更します。

```bash
dtoverlay=gpio-shutdown,gpio_pin=25,active_low=1
```

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

### DSI（オプション）

特別な用途のために、基板上には 1 つの DSI（J24）が予約されています。ユーザーは自身のニーズに応じてプラグインを購入する必要があります。

## 追加リソース

- [reComputer R1225 3D ファイル](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000.stp)
- [reComputer R1225 回路図設計、PCB 設計](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_schematic_design_files.zip)
- [reComputer R1225（R1000 v1.1）ピンアサイン](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_v1_1_Pin_Assignment.xlsx)

## 技術サポート & 製品ディスカッション

当社製品をお選びいただきありがとうございます。お客様が当社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
