---
description: reTerminal DM ハードウェアガイド
title: reTerminal DM ハードウェアガイド
keywords:
  - Edge
  - reTerminal-DM
  - Hardware Guide
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reterminal-dm-hardware-guide
last_update:
  date: 05/19/2023
  author: Peter Pan
---
# reTerminal DM ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg" alt="pir" width="600" height="auto"/></p>

reTerminal DMは10.1インチのオープンソース産業用HMI - データフローを統合し、現場デバイスを管理する統合デバイスマスターです。

Raspberry Pi CM4をベースとし、パネルPC、HMI、PLC、IIoTゲートウェイのオールインワンデバイスとして、reTerminal DMはIP65産業グレードの大型スクリーンを備えた新世代のインタラクティブセンシングハブです。

豊富な拡張性とハイブリッド接続性を備え、CANバス、RS485、RS232、ギガビットイーサネットポート、その他のインターフェースをサポートし、4G、LoRa®、WiFi、BLEなどの強力なワイヤレス通信機能も搭載しています。

> \*4GおよびLoRa®モジュールはreTerminal DMにデフォルトで付属していません。関連モジュールを別途購入してください。
> [4Gバンドル](https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

このWikiでは、周辺コンポーネントを取り付けるためのユニットの組み立てと分解方法、および取り付けオプションについて説明します。

## ハードウェア前提条件

以下のハードウェアを準備する必要があります

- reTerminal DM x 1
- ドライバーセット
  - Phillips + 3.5 bit
  - Phillips + 3.0 bit
  - Slotted - 2.5 bit

### 背面カバーの組み立て・分解ガイド

**ステップ1:** reTerminal DMを平らな面に画面を下にして慎重に置いてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/facedown.png" alt="pir" width="800" height="auto"/></p>

**ステップ2:** ネジを緩めて背面カバーを取り外します。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/back_screw.png" alt="pir" width="800" height="auto"/></p>

### WiFi/BLEアンテナの組み立て

**ステップ1:** 背面カバーを取り外し、シリコンプラグを取り出します。

**ステップ2:** アンテナSMAコネクタを背面カバーに装着し、アンテナをSMAコネクタにねじ込みます。

**ステップ3:** アンテナフィーダーの反対側（IPEXプラグ）をCM4のIPEXソケットに挿入します。

**ステップ4:** 背面カバーを取り付け、ネジを締めます。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/wifi-antenna.png" alt="pir" width="800" height="auto"/></p>

### 4Gモジュールとアンテナの組み立て

**ステップ1:** 背面カバーを取り外し、シリコンプラグを取り出します。

**ステップ2:** アンテナSMAコネクタを背面カバーに装着し、アンテナをSMAコネクタにねじ込みます。

**ステップ3:** 4Gモジュールをメインボードソケットに挿入し、ネジを締めます。

**ステップ4:** アンテナフィーダーの反対側（IPEXプラグ）を4GモジュールのIPEXソケットに挿入します。

**ステップ5:** 背面カバーを取り付け、ネジを締めます。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/4g-antenna.png" alt="pir" width="800" height="auto"/></p>

### LoRa®モジュールとアンテナの組み立て

**ステップ1:** 背面カバーを取り外し、シリコンプラグを取り出します。

**ステップ2:** アンテナSMAコネクタを背面カバーに装着し、アンテナをSMAコネクタにねじ込みます。

**ステップ3:** LoRa®モジュールをメインボードソケットに挿入し、ネジを締めます。

**ステップ4:** アンテナフィーダーの反対側（IPEXプラグ）をLoRa®モジュールのIPEXソケットに挿入します。

**ステップ5:** 背面カバーを取り付け、ネジを締めます。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/lora-antenna.png" alt="pir" width="800" height="auto"/></p>

### PCIe拡張モジュールの取り付け

:::note
PCIe拡張モジュールは近日リリース予定です。お楽しみにお待ちください。
:::

**ステップ1:** 背面カバーを取り外します。

**ステップ2:** 2セットの16ピンケーブルをPCIe拡張モジュールボードとデュアルネットワークポートボードのソケットに挿入します。

**ステップ3:** PCIe拡張モジュールボードをメインボードに装着し、ネジを締めます。

**ステップ4:** デュアルネットワークポートボードをDMフロントカバーに取り付け、ネジを締めます。

**ステップ5:** 拡張スロットからネットワークポートバッフルを取り外します。

**ステップ6:** 背面ケースを取り付け、ネジを締めます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/PCIe.png" alt="pir" width="800" height="auto"/></p>

### SSDの取り付け

**ステップ1:** 背面カバーを取り外します。

**ステップ2:** [PCIe拡張モジュールボード](https://www.seeedstudio.com/reTerminal-DM-Dual-LAN-and-SSD-extension-p-5766.html)をメインボードに装着し、ネジを締めます。

**ステップ3:** 背面ケースを取り付け、ネジを締めます。

**ステップ4:** クイックリムーブカバーのネジを外し、クイックリムーブカバーを取り出します。

**ステップ5:** SSDをM.2ソケットに装着し、ネジを締めます。

**ステップ6:** クイックリムーブカバーを元に戻し、ネジを締めます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/ssd.png" alt="pir" width="800" height="auto"/></p>

### カメラの取り付け

:::note

PiCamera V2モジュールはreTerminal DMでテスト済みで動作します。reTerminal DMで使用するには、カスタマイズされた長いFPCカメラモジュールが必要です。

:::

**ステップ1:** 背面カバーを取り外します。

**ステップ2:** カメラをカメラボトムボードに挿入します。

**ステップ3:** カメラFPCケーブルをカメラボトムボードのソケットに挿入します。

**ステップ4:** カメラをフロントカバーに取り付け、ステッカーを貼って固定します。

**ステップ5:** カメラモジュールをフロントカバーに組み立て、ネジを締めます。

**ステップ 6:** FPCをメインボードソケットに差し込み、背面カバーを戻してネジを締めます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/camera.png" alt="pir" width="800" height="auto"/></p>

### PoEモジュールの取り付け

**ステップ 1:** 背面カバーを取り外し、メインボードを取り出します。

**ステップ 2:** ドットマークに従ってPoEをメインボードに挿入します。

**ステップ 3:** メインボードの背面にPoEモジュールをはんだ付けします。

**ステップ 4:** メインボードを固定し直し、背面カバーを戻してネジを締めます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/poe.png" alt="pir" width="800" height="auto"/></p>

### RTCバッテリーの交換

**ステップ 1:** 背面カバーを取り外します。

**ステップ 2:** RTCバッテリーケーブルをRTCバッテリーソケットに挿入し、RTCバッテリーをネットワークポートに取り付けます。

**ステップ 3:** 背面カバーを戻してネジを締めます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/RTC_battery.png" alt="pir" width="800" height="auto"/></p>

### ヒューズの交換

**ステップ 1:** 背面カバーを取り外します。

**ステップ 2:** メインボードのヒューズソケットから古いヒューズを取り出し、新しいヒューズを入れます。

**ステップ 3:** 背面カバーを戻してネジを締めます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/fuse.png" alt="pir" width="800" height="auto"/></p>

### シャーシ接地ガイド

**ステップ 1:** 接地ネジを緩めます。

**ステップ 2:** 接地コネクタを取り付けてネジを締めます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/grounding.png" alt="pir" width="800" height="auto"/></p>

### 端子接続ガイド

**ステップ 1:** 下図に示す方向に電源コネクタを挿入します。

**ステップ 2:** 下図に示す方向にケーブルコネクタを挿入します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/terminal_block.png" alt="pir" width="800" height="auto"/></p>

## 取り付けガイド

reTerminal DMは複数の取り付け方法をサポートしており、ユーザーは使用シナリオに応じて柔軟に選択できます。標準製品にはPanel MountとDin Rail Mountに必要なアクセサリは付属していないため、定義されたアクセサリを購入して取り付ける必要があることに注意してください。アクセサリの詳細については、セクション2.3のオプションインターフェースとモジュールを参照してください。

### パネルマウント

パネル取り付けにはreTerminal DM用のパネルマウントキットが必要です

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/panel_mount.png" alt="pir" width="800" height="auto"/></p>

### VESAマウント

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/VESA.png" alt="pir" width="800" height="auto"/></p>

### DINレールマウント

DINレール取り付けにはリニアガイドウェイレール用スライディングブロックが必要です

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070181-sliding-block-for-linear-guideway-rail_including-screws_-45font.jpg" alt="pir" width="400" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Sliding-block-for-linear-guideway-rail-including-screws-p-5527.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/DIN.png" alt="pir" width="800" height="auto"/></p>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
