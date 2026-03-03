---
description: reComputer R1225 LoRaWAN ゲートウェイ概要
title: reComputer R1225 LoRaWAN ゲートウェイ概要
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/r1225_introduction
last_update:
  date: 01/04/2026
  author: Kian
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Appearance_Image/R1225_White_Background.png" alt="pir" width={500} height="auto" /></p>

<!--缺少商详链接，待产品上架后补上-->
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 概要
reComputer R1225は、強力で柔軟な産業用Raspberry Pi IoT LoRaWANゲートウェイ＆コントローラーで、CM4を搭載し、AI機能を備えています。3つのRS485、デュアルイーサネット、BACnet、Modbusサポートを備え、堅牢で信頼性の高い産業用エッジIoTデバイスに必要なすべての機能を装備しています。AI NPUアクセラレータとの互換性により、リモートアクセス制御、特にBMS、BAS、iBMSに最適です。


## 特徴

### ビルディングオートメーションシステム向け設計

- 複数の絶縁RS485チャンネルが高速・低速通信をサポート。

- BACnet、Modbus RTU、Modbus TCP/IPプロトコルをサポート
- 最大4GB RAMが数千のデータポイントの処理をサポートし、効率的なパフォーマンスを保証
- 明確な両面LEDインジケータが動作状況を素早く確認可能
- 高品質メタルケース、DINレールおよび壁面取り付けに対応
- オープンソースソフトウェアSeeed Gateway OS、ChirpStack、Basics™ Station、Packet Forward内蔵。カスタマイズと派生開発をサポート。

### 強力なパフォーマンス

- Raspberry Pi CM4搭載

- Broadcom BCM2711 クアッドコア Cortex-A72 (ARM v8) 64ビット SoC @ 1.5GHz
- 最大4GB RAMおよび32GB eMMC

### 豊富なワイヤレス機能

- オンチップWi-Fi

- オンチップBLE

- Mini-PCIe1: LTE
  - 4Gバージョンには LTEモジュールがプリインストール：
    - EU868: EC25-EUX-mini-PCIe (LTE Cat 4)
    - US915: EC25-AFXGA-mini-PCIe (LTE Cat 4)

- Mini-PCIe2: SPI LoRa®モジュールプリインストール
  - EU868: Wio-WM1302 LoRaWAN Gateway Module (SPI) - EU868
  - US915: Wio-WM1302 LoRaWAN Gateway Module (SPI) - US915 

### 豊富なインターフェース

- 3x RS485（絶縁）

- 1x 10M/100M/1000M イーサネット（PoEサポート）
- 1x 10M/100M イーサネット
- 1x HDMI 2.0
- 2x Type-A USB2.0
- 1x Type-C USB2.0（OS更新用USBコンソール）
- 1x SIMカードスロット

### 安全性と信頼性

- ハードウェアウォッチドッグ

- UPSスーパーキャパシタ（**付属**）
- PCサイドパネル付きメタルケーシング
- ESD: EN61000-4-2、レベル3
- EFT: EN61000-4-4、レベル2
- サージ: EN61000-4-5、レベル2
- 製品寿命: reComputer R1225は少なくとも2030年12月まで生産継続予定



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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2ピン端子台</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>PoE（受電デバイスとして）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>IEEE 802.3af 標準 12.95W PoE</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>供給電圧（AC/DC）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>12&#126;24V AC/9&#126;36V DC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>過電圧保護</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>40V</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>消費電力</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>アイドル：2.88W；フル負荷：5.52W</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps（PoE*サポート）</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>3 x 3ピン端子台（絶縁）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>SIMカードスロット</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>標準SIMカードサポート</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>M.2スロット</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>M.2 NVMe SSDサポート</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>DSI（予約済み）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>LCD*をサポート（筐体内のボード上）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>ワイヤレス通信</strong></td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LoRa®（使用中）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>SPI LoRa®</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>4G セルラー（オプション）</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>4G LTE*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>規格</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={3} style={{height: 18, width: '35.4622%'}}>EMC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>ESD: EN61000-4-2、レベル 3</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>EFT: EN61000-4-4、レベル 2</td>
    </tr>
     <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>サージ: EN61000-4-5、レベル 2</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={3} style={{height: 18, width: '35.4622%'}}>認証</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>CE、FCC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>RoHS</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>環境条件</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>防塵防水等級</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>スーパーキャパシタ UPS</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>SuperCAP UPS LTC3350 モジュール</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>ハードウェアウォッチドッグ</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1~255秒</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2年</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>製品寿命</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2030年12月まで</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>再計量して補足予定</td>
    </tr>
  </tbody>
</table>
</div>

### 注意事項

**「*」が付いたオプションは、アクセサリリストに従って追加購入が必要です。**


## ハードウェア概要

<!--缺少3天线接口照片，待更新后补充-->
<div align="center"><img width={800} src="" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig031.png" /></div>

## 電源図

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig13.png" /></div>

reComputer R1225は3つの電源供給オプションをサポートしています：AC、DCターミナル、PoEポート。デフォルトでは、reComputer R1225はAC/DCターミナル（公式地域別電源アダプタSKU:110061505/110061506）を通じて電源供給されますが、**PoE電源供給（PoEモジュール、SKU:110991925）が含まれています**。これにより電源供給の選択に柔軟性を提供し、様々な電源との簡単な統合を可能にします。

### 2ピン電源ターミナル

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

reComputer R1225は、公称AC電圧12&#126;24VまたはDC電圧9&#126;36Vで供給されます。電源は2ピン電源ターミナルブロックコネクタを介して接続されます。reComputer R1225をアースするには、アース線を電源ターミナルの左上角にあるネジに固定できます。

:::note
電源ソリューションは逆極性保護のためにブリッジ整流ダイオードを使用し、ACとDCの両方の入力に対応しています。これにより、**電源の正極と負極の端子がどのように接続されても**、回路が損傷することはありません。ブリッジ整流器を使用することで、入力DC極性に関係なく出力電圧極性が固定され、効果的な逆極性保護を提供します。
:::

### POE（付属）

PoEモジュールが取り付けられた状態で、reComputer R1225のETH0ポートはPoE電源供給をサポートし、イーサネット経由でデバイスに電力を供給する便利で効率的な方法を提供します。このオプションは設置プロセスを簡素化し、必要なケーブル配線量を削減するため、電源が限られているアプリケーションや電源コンセントが容易に利用できない場所での理想的なソリューションとなります。

- PoE入力：範囲44~57V；標準48V
- PoE出力：12V、1.1A最大

:::note
reComputer R1225に付属するPoEモジュールはIEEE 802.3af規格に準拠しており、最大12.95Wの電源供給が可能であることは注目に値します。**したがって、SSDや4Gモジュールなどの高電力周辺機器を接続する必要がある場合、PoE電源供給では不十分な場合があります**。この場合、デバイスの安定した信頼性のある動作を確保するために、代わりにAC/DCターミナルを使用した電源供給を推奨します。
:::

### 消費電力

Seeed Studioの実験室でテストされたreComputer R1225の消費電力については、以下の表を参照してください。テスト方法と環境により結果に変動が生じる可能性があるため、この値は参考値であることにご注意ください。

待测试

| ステータス | 電圧 | 電流 | 消費電力 | 説明 |
|   ---    |    ---  |   ---   |         ---       |      ---    |
|シャットダウン  |24V      |  mA   |    W         | シャットダウンおよび電源オフ状態での静的消費電力テスト。|
|アイドル      |24V      |  mA  |    W          | テストプログラムを実行せずにreComputer R1225デバイスに24V電源を供給した際の入力電流をテスト。|
|フル負荷 |24V      |  mA  |    W          | "stress -c 4"コマンドを使用してCPUをフル負荷で動作するよう設定。外部デバイスは接続なし。 |

### 電源オンと電源オフ

reComputer R1225にはデフォルトで電源ボタンが付属しておらず、電源が接続されるとシステムが自動的に起動します。シャットダウン時は、オペレーティングシステムでシャットダウンオプションを選択し、電源を切断する前にシステムが完全にシャットダウンするまで待ってください。システムを再起動するには、単に電源を再接続してください。

:::note
シャットダウン後は、内部コンデンサが完全に放電されるよう、システムを再起動する前に**少なくとも10秒間**待ってください。
:::

## ブロック図
<!--缺少最新照片，待更新后补充-->
<div align="center"><img width={800} src="" /></div>

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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps IEEE 1588-2008（PoEサポート）</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>標準SIMカードサポート</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>M.2スロット</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>M.2 NVMe SSDサポート</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>LCD*サポート（筐体内のボード上）</td>
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

reComputer R1225は、マシンの動作状態を示す6つのLEDインジケータを備えています。各LEDの具体的な機能とステータスについては、以下の表を参照してください：

| LEDインジケータ | 色          | ステータス | 説明                                                  |
| ------------- | -------------- | ------ | ------------------------------------------------------------ |
| PWR           | 緑          | オン     | デバイスが電源に接続されています。                      |
|               |                | オフ    | デバイスが電源に接続されていません。                       |
| ACT           | 緑          |        | Linuxでは、このピンはeMMCアクセスを示すために点滅します。<br />起動中にエラーが発生した場合、このLEDはエラーパターンで点滅し、<br />[Raspberry Piウェブサイトの参照テーブル](https://www.raspberrypi.com/documentation/computers/configuration.html#led-warning-flash-codes)を使用してデコードできます。 |
| USER          | 緑/赤/青 |        | ユーザーによって定義される必要があります。                                  |
| RS485-1       | 緑          | オフ    | RS485チャンネル1でデータ転送なし。                         |
|               |                | 点滅  | RS485チャンネル1がデータを受信または送信中。               |
| RS485-2       | 緑          | オフ    | RS485チャンネル2でデータ転送なし。                         |
|               |                | 点滅  | RS485チャンネル2がデータを受信または送信中。               |
| RS485-3       | 緑          | オフ    | RS485チャンネル3でデータ転送なし。                         |
|               |                | 点滅  | RS485チャンネル3がデータを受信または送信中。               |

**ACT ステータステーブル**

| **長い点滅** | **短い点滅** | **ステータス**                          |
| ---------------- | ----------------- | ----------------------------------- |
| 0                | 3                 | 一般的な起動失敗             |
| 0                | 4                 | start*.elf が見つからない                |
| 0                | 7                 | カーネルイメージが見つからない              |
| 0                | 8                 | SDRAM 障害                       |
| 0                | 9                 | SDRAM 不足                  |
| 0                | 10                | HALT 状態                       |
| 2                | 1                 | パーティションが FAT ではない                   |
| 2                | 2                 | パーティションからの読み取りに失敗       |
| 2                | 3                 | 拡張パーティションが FAT ではない          |
| 2                | 4                 | ファイル署名/ハッシュの不一致 - Pi 4 |
| 4                | 4                 | サポートされていないボードタイプ              |
| 4                | 5                 | 致命的なファームウェアエラー                |
| 4                | 6                 | 電源障害タイプ A                |
| 4                | 7                 | 電源障害タイプ B                |

ACT LED が規則的な4回点滅パターンで点滅する場合、ブートコード（start.elf）が見つかりません
ACT LED が不規則なパターンで点滅する場合、起動が開始されています。
ACT LED が点滅しない場合、EEPROM コードが破損している可能性があります。何も接続せずに再度試してください。詳細については、Raspberry Pi フォーラムをご確認ください：
STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums
詳細については、[Raspberry Pi フォーラム](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151)をご確認ください。


#### Luci インターフェース経由でのカスタマイズ可能な LED ライト

#### コマンド経由での LED ライト制御

ユーザー LED を制御するために、Linux カーネルが提供する疑似ファイルシステムである sysfs の使用をお勧めします。これは、さまざまなカーネルサブシステム、ハードウェアデバイス、および関連するドライバーに関する情報を公開します。reComputer R1225 では、ユーザー LED インターフェースを3つのデバイスファイル（led-red、led-blue、led-green）に抽象化し、ユーザーがこれらのファイルとやり取りするだけで LED ライトを制御できるようにしています。例は以下の通りです：

1. 赤色 LED を点灯するには、ターミナルで以下のコマンドを入力してください：

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
```

2. 赤色 LED を消灯するには、ターミナルで以下のコマンドを入力してください：

```bash
echo 0 | sudo tee /sys/class/leds/led-red/brightness
```

3. 赤色と緑色の LED を同時に点灯することができます。ターミナルで以下のコマンドを入力してください：

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
echo 1 | sudo tee /sys/class/leds/led-green/brightness
```

### ブザー

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig07.png" /></div>

reComputer R1225 にはアクティブブザーが搭載されており、アラームやイベント通知など、さまざまな目的に使用できます。

reComputer R1225 ユーザー（**R1225 は R1000 v1.1 ハードウェアプラットフォームに基づいています**）の場合、ブザーは PCA9535 P15 に接続されています。ブザーをオフ（オン）にするには、ターミナルで以下のコマンドを入力してください：

```bash
echo 591 | sudo tee /sys/class/gpio/export
echo out | sudo tee /sys/class/gpio/gpio591/direction
echo 1 | sudo tee /sys/class/gpio/gpio591/value # turn on
echo 0 | sudo tee /sys/class/gpio/gpio591/value # turn off
```

### RS485

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig21.png" /></div>

reComputer R1225 には、3ピンコネクタを使用した3セットの RS485 インターフェースが装備されており、産業および自動化アプリケーションでの安全で信頼性の高い動作を確保するために、信号と電源の両方が絶縁されています。RS485A および RS485B 信号は容量絶縁を使用して絶縁されており、優れた EMI 耐性を提供し、RS485 インターフェースの高速通信要件を満たします。
**デフォルトでは、120Ω 終端抵抗は取り付けられていません。ただし、パッケージボックスには5つの表面実装抵抗器が含まれています。必要に応じて、ユーザーが自分で抵抗器をデバイスにはんだ付けする必要があります。**

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position.png" /></div>

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position2.png" /></div>

:::note
RS485 インターフェースは絶縁電源を使用しているため、RS485 インターフェースに接続される外部デバイスのグランド信号は GND_ISO ピンに接続する必要があります。

:::

これらは、データテーブル用の reComputer の 485 インターフェースに関連するピンです。

| RS485         | RS485_POWER_EN         | OS デバイスファイル | P14         | デフォルト（High） |
| ------------- | ---------------------- | -------------- | ----------- | ------------- |
| TX5           |                        | /dev/ttyAMA5   | GPIO12      |               |
| RX5           |                        |                | GPIO13      |               |
| TX2           | ID_SD                  | /dev/ttyAMA2   | GPIO0/ID_SD |               |
| RX2           | ID_SC                  |                | GPIO1/ID_SC |               |
| TX3           |                        | /dev/ttyAMA3   | GPIO4       |               |
| RX3           |                        |                | GPIO5       |               |
| RS485_1_DE/RE | (Hight/DE \|\| Low/RE) | /dev/ttyAMA2   | GPIO6       | デフォルト Low   |
| RS485_2_DE/RE |                        | /dev/ttyAMA3   | GPIO17      | デフォルト Low   |
| RS485_3_DE/RE |                        | /dev/ttyAMA5   | GPIO24      | デフォルト Low   |

デフォルトでは、RS485 ポートの電源イネーブルポートは High です。そして各 RS485 インターフェースは受信状態にあります。簡単な実験を行うことができます。

PC を reComputer-R に接続する 485 ポート。

reComputer のターミナルで入力：

```shell
cat /dev/ttyAMA2
```

次に、コンピューターのシリアルデバッグツールでデータを送信すると、reComputer のターミナルウィンドウでデータを観察できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/21.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/22.png" /></div>

### ブートスイッチ

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" /></div>

reComputer R1225 のブートスイッチは CM4 の nRPI_BOOT ピンに接続されています。このスイッチは、ユーザーに eMMC と USB 間でブートソースを選択するオプションを提供します。通常モードでは、スイッチを "BOOT" ラベルのある側から離して設定し、システムが eMMC から起動できるようにします。逆に、ユーザーがシステムイメージをフラッシュする必要がある場合は、スイッチを "BOOT" ラベルの方向に設定し、システムが Type-C USB インターフェースから起動できるようにします。

<div class="table-center">

| スイッチ位置                                              | モード        | 説明    | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | 通常モード | eMMC から起動 | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | フラッシュモード  | USB から起動  | High      |

</div>

:::note
**ブートモードでは、POE 電源供給機能は利用できません。**
:::

### USB

<div align="left"><img width={150} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig20.png" /></div>

reComputer R1225 には、1つの USB Type-C ポートと2つの USB Type-A ポートが装備されています。機能と説明については、以下の表を参照してください。

| **タイプ**   | **数量** | **プロトコル** | **機能** | **説明**                                              |
| ---------- | ------------ | ------------ | ------------ | ------------------------------------------------------------ |
| **Type-C** | *1           | USB2.0       | USB-Device   | シリアルポートデバッグ、イメージ書き込みなどに使用          |
| **Type-A** | *2           | USB2.0       | USB-Host     | フラッシュドライブ、USB キーボード、<br />マウスなどの異なる USB デバイスを接続 |

**lsusb** コマンドを実行して、USB ハブが検出されているかどうかを確認します。このコマンドは、ハブを含む接続されているすべての USB デバイスをリストします。

```shell
lsusb
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/23.png" /></div>

このコマンドを実行すると、存在する USB ハブを含む、システムに接続されている USB デバイスに関する情報が表示されます。

USB ハブが正常に機能している場合、**lsusb** コマンドの出力にその詳細がリストされているはずです。リストされていない場合、ハブまたはシステムへの接続に問題がある可能性があります。そのような場合は、USB ハブまたはその接続のトラブルシューティングが必要になる場合があります。

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
reComputer R1225 は、産業用アプリケーションで一般的に見られる標準サイズの SIM カードスロットを使用しており、25mm x 15mm の寸法の標準 SIM カードが必要です。
:::note
reComputer R1225は4Gバージョンが利用可能です。標準版（4Gモジュールなし）を購入した場合、4Gモジュールを別途購入してインストールできます。Bazaar Mallでは現在2つの4Gモジュールを提供しています：ヨーロッパ（EMEA & Thai <a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">**SKU 113991135**</a>）とアメリカ（北米 **<a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">SKU 113991134</a>**）
:::

### SSDスロット

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig08.png" /></div>
<br />
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig04.png" /></div>
reComputer R1225のSSDスロットは、128GB、256GB、512GB、1TBの容量のNVMe M.2 2280 SSDに対応するよう設計されています。このスロットにより高速ストレージ拡張が可能で、ユーザーはシステムのパフォーマンスと容量を向上させることができます。

SSDを含むディスクをリストするには、*fdisk -l*コマンドを使用できます。方法は以下の通りです：

```bash
sudo fdisk -l
```

このコマンドは、SSDが正しく検出されている場合はそれを含む、システムに接続されているすべてのディスクのリストを表示します。SSDを表すエントリを探してください。通常、/dev/sdの後に文字が続きます（例：/dev/sda、/dev/sdb など）。
SSDに対応するエントリを特定したら、必要に応じてパーティション分割やフォーマットを進めることができます。

:::note
SSDカードには主に2つの用途があります：<br />
1.大容量ストレージ：SSDカードは大容量ストレージのニーズに利用できます。<br />
2.イメージ付きブートドライブ：もう一つの用途は、SSDを大容量ストレージとシステムイメージの保存の両方に使用し、SSDカードから直接ブートできるようにすることです。<br />
市場で入手可能なすべてのSSDカードが2番目の用途をサポートしているわけではないことに注意することが重要です。そのため、ブートドライブとして使用する予定で、どのモデルを購入すべきか不明な場合は、推奨する1TB SSD（SKU 112990267）を選択することをお勧めします。このモデルはブート機能についてテストおよび検証済みで、互換性の問題のリスクを軽減し、試行錯誤のコストを最小限に抑えます。
:::

### Mini-PCleスロット

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig06.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/slot.png" /></div>
<br />
<div class="table-center">

|         スロット         | サポートプロトコル |
| -------------------- | ------------------ |
|       Mini-PCIe 1    |       4G LTE       |
|       Mini-PCIe 2    |      SPI LoRa®     |

</div>

:::note
reComputer R1225には標準版と4G版があります：標準版では、Mini-PCIe 1は空いています；4G版では、Mini-PCIe 1に4G LTEが事前にインストールされています。
:::



この装置には2つのMini-PCIeインターフェース、すなわちMini-PCIeスロット1とMini-PCIeスロット2があります。スロット1はSIMカードスロットに接続されUSBプロトコルをサポートし、スロット2はUSBとSPIの両方のプロトコルをサポートしますがSIMカードスロットには接続されません。そのため、4G LTEなどのデバイスはスロット1を通じて接続でき、SPI LoRa®デバイスはスロット2を通じて接続できます。

### リセット穴

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig16.png" /></div>

reComputer R1225のリセット穴にはミニプッシュボタンスイッチがあります。細い物体でこのボタンを押すことで、CM4をリセットできます。このピンがハイの時はCM4が開始したことを示します。このピンをローにするとモジュールがリセットされます。

### イーサネット RJ45

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig15.png" /></div>
<br />
<div class="table-left">

| 名前 | タイプ                        | 速度             | PoE                                |
| ---- | --------------------------- | ------------------ | ---------------------------------- |
| ETH0 | CM4ネイティブギガビットイーサネット | 10/100/1000 Mbit/s | 事前インストール済み                      |
| ETH1 | USBから変換          | 10/100 Mbit/s      | サポートなし                      |

</div>

reComputer R1225には2つのイーサネットRJ45ポートが付属しています。ETH0は3つの異なる速度（10/100/1000 Mbit/s）をサポートするCM4ネイティブギガビットイーサネットインターフェースです。追加のPoEモジュールを購入することで、このインターフェースを通じてパワーオーバーイーサネット（PoE）配信を有効にし、reComputer R1225に電力を供給できます。もう一つのETH1は10/100 Mbit/sをサポートし、USBから変換されています。

### HDMI

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig17.png" /></div>

reComputer R1225はCM4からのネイティブHDMIインターフェースを備え、最大4K @ 60 fpsのビデオ出力をサポートします。複数のディスプレイが必要なアプリケーションに最適で、ユーザーは外部の大画面にコンテンツを出力できます。

### RTC

reComputer R1225はCR2032バッテリーが事前にインストールされたRTC回路を備えており、電源喪失時でも時刻保持機能を維持できます。

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

このコマンドはRTCに保存されている時刻を読み取り表示します。
5. RTCから電源を切断し、数分待ってから再接続し、RTCが正しい時刻を保持しているかどうかを確認するためにRTC時刻を再度チェックします。

### ウォッチドッグ

reComputer R1225は、システムの異常クラッシュ時に自動システム再起動を保証する独立したハードウェアウォッチドッグ回路を搭載しています。ウォッチドッグ回路はRTCを通じて実装され、1秒から255秒までの柔軟な給餌時間を可能にします。

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

5. 指定されたタイムアウト期間後にシステムが再起動することを確認するためにシステムを監視します。
これらの手順は、システム上のウォッチドッグタイマーの機能をテストし確認するのに役立ちます。

## オプションインターフェースとモジュール

### Wi-Fi/BLE（含まれています）

reComputer R1225は、オンボードWi-Fi/BLEバージョンのCM4によって駆動され、CM4と同じWi-Fi/BLEパラメータを提供します。詳細なパラメータ情報については、Raspberry Pi公式ウェブサイトを参照してください。

:::note
reComputer R1225の金属筐体により、Wi-Fi/BLE信号が金属外装を貫通するのが困難な場合があることに注意することが重要です。そのため、この機能が必要な場合は、用意した外部アンテナの取り付けをお勧めします。
:::

#### Wi-Fiに接続

##### Luci UIを介してWi-Fiに接続

##### Wi-Fiに接続するコマンド

ステップ1. Wi-Fiネットワークをスキャンするには：

  ```bash
  nmcli dev wifi list
  ```

ステップ2. Wi-Fiネットワークに接続します：

  ```bash
  sudo nmcli dev wifi connect network-ssid password "network-password"
  sudo nmcli --ask dev wifi connect network-ssid
  ```

ステップ3. デバイスの電源を入れると、自動的にWi-Fiに接続されます。  
  保存されたWiFi情報を削除したい場合：

  ```bash
  nmcli con del network-ssid
  ```

  接続が切断された後、別のWi-Fiに接続します。


#### Bluetoothデバイスに接続

Bluetoothデバイスを追加する前に、コンピュータのBluetoothサービスが開始され実行されている必要があります。これはsystemctlコマンドで確認できます。

```bash
sudo systemctl status bluetooth
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/32.png" /></div>
<br />
Bluetoothサービスのステータスがアクティブでない場合は、まずそれを有効にする必要があります。その後、デバイスを起動したときに自動的に開始されるようにサービスを開始します。

```bash
sudo systemctl enable bluetooth
sudo systemctl start bluetooth
```

bluetoothctlツールを使用してBluetoothを接続および管理できます。以下は一般的なコマンドとコメントです：

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

### 4Gモジュール（オプション）

reComputer R1225 LoRaWAN ゲートウェイは、標準版と4G版で利用可能です。標準版のMini-PCIeスロット1は空いていますが、4G版にはヨーロッパ（EMEA & Thai <a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">**SKU 113991135**</a>）とアメリカ（北米 **<a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">SKU 113991134</a>**）向けにそれぞれ調整されたMini-PCIeモジュールが事前にインストールされています。

### LoRa®モジュール（付属）

reComputer R1225 LoRaWAN ゲートウェイのMini-PCIeスロット2は、SPI LoRa®モジュールによって占有されています。

### PoE（付属）

reComputer R1225 LoRaWAN ゲートウェイにはPoEモジュールが搭載されており、ユーザーが自分で購入、はんだ付け、組み立てを行う必要がありません。

### M.2スロット（オプション）

reComputer R1225は、基板上の2つのMini-PCIeスロットの下にあるPCIeスロット（J62）を使用して、2280 NVMe SSDとAIアクセラレータ（Hailo）をサポートします。CM4のPCIeはgen2.0で最大理論速度が5Gbpsであることに注意することが重要です。Gen3.0以上のSSDを使用している場合、SSDの最大速度を達成できない可能性があります。テスト後、SSDを搭載したreTerminal DMは最大書き込み速度230MB/s、最大読み取り速度370MB/sを達成できます。どのSSDが互換性があるか不明な場合は、以下のアクセサリリストに従って購入できます。

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
1- 速度テストの結果は、SSDモデル、テスト方法、テスト環境によって異なる場合があります。ここで提供される値は参考目的のみであり、Seedの研究室で取得されたものです。<br />

SSDカードには主に2つの用途があります：<br />
1.大容量ストレージ：SSDカードは大容量ストレージのニーズに利用できます。<br />
2.イメージ付きブートドライブ：もう一つの用途は、SSDを大容量ストレージとシステムイメージの保存の両方に使用し、SSDカードから直接ブートできるようにすることです。<br />
市場で入手可能なすべてのSSDカードが2番目の用途をサポートしているわけではないことに注意することが重要です。したがって、ブートドライブとして使用する予定で、どのモデルを購入すべきか不明な場合は、推奨する**1TB SSD（<a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html">SKU [112990267]</a>）**を選択することをお勧めします。このモデルはブート機能についてテストおよび検証されており、互換性の問題のリスクを軽減し、試行錯誤のコストを最小限に抑えます。
:::


### 暗号化チップTPM 2.0（オプション）

TPMは、Trusted Computing Group（TCG）TPM 2.0仕様に準拠したInfineonのOPTIGA™ TPM SLB9670を特徴とし、reComputer R1225の暗号化チップとして推奨されます。このチップは基板上のポートJ13に適用されるSPIインターフェースを特徴とし、プラットフォームの整合性、リモート認証、暗号化サービスの信頼の根拠を可能にします。

:::note
[組み立て手順についてはこちらをクリックしてください](https://wiki.seeedstudio.com/ja/recomputer_r1000_assembly_guide/#assemble-tpm-20-module)。
:::

TPM 2.0モジュールをデバイスに接続した場合、以下のコードがTPM接続の確認に役立ちます。

```bash
ls /dev | grep tpm
```

出力に**tpm0**と**tpmrm0**が表示される場合、TPM（Trusted Platform Module）デバイスが検出され、システムで利用可能であることを意味します。これは、TPMハードウェアが認識され、アクセス可能であることを示しており、良い兆候です。デバイスが存在し、アクセス可能であることを知って、TPM関連の機能やアプリケーションの使用を続行できます。

### UPS（付属）

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/30.png" /></div>

UPSは7Fで、直列で動作します。UPSモジュールはDC5VとCM4コンポーネントの間に配置され、5V電源からの電力損失の際にCPUに警告するためにGPIO信号が利用されます。この信号を受信すると、CPUはスーパーキャパシタのエネルギーが枯渇する前に緊急スクリプトを実行し、「$ shutdown」コマンドを開始します。
<br />
UPSによって提供されるバックアップ時間は、システム負荷に大きく依存します。以下は、4GB RAM、32GB eMMCストレージ、Wi-Fiモジュールを搭載したCM4モジュールでテストされた典型的なシナリオです。
<br />

| 動作モード | 時間（秒） | 備考                                                       |
| ----------------- | ------- | ------------------------------------------------------------ |
| アイドル              | 37      | 公式ドライバープログラムがロードされたアイドル状態でのテスト |
| CPUフル負荷  | 18      | stress -c 4 -t 10m -v &                                      |

:::note
UPS機能については詳細情報をお問い合わせください。アラーム信号はアクティブLOWです。
:::

CPUとDC/AC電源入力の間のGPIO25は、5V電源がダウンした際にCPUに警告するために使用されます。その後、CPUはスーパーキャパシタのエネルギー枯渇前にスクリプトで緊急処理を行い、`$ shutdown`を実行する必要があります。
<br />
この機能を使用するもう一つの方法は、GPIOピンの変化時にシャットダウンを開始することです。指定されたGPIOピンは、KEY_POWERイベントを生成する入力キーとして設定されます。このイベントはsystemd-logindによってシャットダウンを開始することで処理されます。
参考として`/boot/overlays/README`を使用し、`/boot/config.txt`を変更します。

```bash
dtoverlay=gpio-shutdown,gpio_pin=25,active_low=1
```

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

### DSI（オプション） 

基板上に1つのDSI（J24）が特別な用途のために予約されています。ユーザーは自分のニーズに応じてプラグインを購入することが求められます。

## 追加リソース

- [reComputer R1225 3Dファイル](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000.stp)
- [reComputer R1225 回路図設計、PCB設計](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_schematic_design_files.zip)
- [reComputer R1225（R1000 v1.1）ピン配置](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_v1_1_Pin_Assignment.xlsx)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
