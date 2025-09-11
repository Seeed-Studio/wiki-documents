---
description: reTerminal DM ハードウェアガイド
title: reTerminal DM ハードウェアガイド
keywords:
  - Edge
  - reTerminal-DM
  - ハードウェアガイド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reterminal-dm-hardware-guide
last_update:
  date: 05/15/2025
  author: Peter Pan
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

#  reTerminal DM ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg" alt="pir" width="600" height="auto"/></p>

reTerminal DM は、10.1インチのオープンソース産業用HMIであり、データフローを統一し、現場デバイスを管理する統合デバイスマスターです。

Raspberry Pi CM4 をベースにしたパネルPC、HMI、PLC、IIoTゲートウェイのオールインワンデバイスとして、reTerminal DM はIP65産業グレードの大型スクリーンを備えた新世代のインタラクティブセンシングハブです。

CANバス、RS485、RS232、ギガビットイーサネットポートなどのインターフェースをサポートする豊富な拡張性とハイブリッド接続性を備え、4G、LoRa®、WiFi、BLEなどの強力な無線通信機能も提供します。

> \*4GおよびLoRa®モジュールはデフォルトではreTerminal DMに付属していません。関連するモジュールを別途購入してください。  
> [4Gバンドル](https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

このWikiでは、周辺機器コンポーネントを取り付けるためのユニットの組み立ておよび分解方法、ならびに取り付けオプションについて説明します。

## ハードウェアの準備
以下のハードウェアを準備してください。

- reTerminal DM x 1
- ドライバーセット
  * プラス + 3.5 ビット
  * プラス + 3.0 ビット
  * マイナス - 2.5 ビット

### 背面カバーの組み立ておよび分解ガイド

**STEP 1:** reTerminal DM を画面を下にして平らな面に慎重に置いてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/facedown.png" alt="pir" width="800" height="auto"/></p>

**STEP 2:** ネジを緩めて背面カバーを取り外します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/back_screw.png" alt="pir" width="800" height="auto"/></p>

### WiFi/BLE アンテナの取り付け

**STEP 1:** 背面カバーを取り外し、シリコンプラグを取り出します。

**STEP 2:** アンテナSMAコネクタを背面カバーに取り付け、アンテナをSMAコネクタにねじ込みます。

**STEP 3:** アンテナフィーダーのもう一方の端（IPEXプラグ）をCM4のIPEXソケットに挿入します。

**STEP 4:** 背面カバーを取り付け、ネジを締めます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/wifi-antenna.png" alt="pir" width="800" height="auto"/></p>

### 4Gモジュールとアンテナの取り付け

**STEP 1:** 背面カバーを取り外し、シリコンプラグを取り出します。

**STEP 2:** アンテナSMAコネクタを背面カバーに取り付け、アンテナをSMAコネクタにねじ込みます。

**STEP 3:** 4Gモジュールをメインボードソケットに挿入し、ネジを締めます。

**STEP 4:** アンテナフィーダーのもう一方の端（IPEXプラグ）を4GモジュールのIPEXソケットに挿入します。

**STEP 5:** 背面カバーを取り付け、ネジを締めます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/4g-antenna.png" alt="pir" width="800" height="auto"/></p>

### LoRa®モジュールとアンテナの取り付け

**STEP 1:** 背面カバーを取り外し、シリコンプラグを取り出します。

**STEP 2:** アンテナSMAコネクタを背面カバーに取り付け、アンテナをSMAコネクタにねじ込みます。

**STEP 3:** LoRa®モジュールをメインボードソケットに挿入し、ネジを締めます。

**STEP 4:** アンテナフィーダーのもう一方の端（IPEXプラグ）をLoRa®モジュールのIPEXソケットに挿入します。

**STEP 5:** 背面カバーを取り付け、ネジを締めます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/lora-antenna.png" alt="pir" width="800" height="auto"/></p>

### PCIe拡張モジュールの取り付け

:::note
PCIe拡張モジュールは近日中にリリース予定です。続報をお待ちください。
:::

**STEP 1:** 背面カバーを取り外します。

**STEP 2:** 16ピンケーブル2セットをPCIe拡張モジュールボードとデュアルネットワークポートボードのソケットに挿入します。

**STEP 3:** PCIe拡張モジュールボードをメインボードに取り付け、ネジを締めます。

**STEP 4:** デュアルネットワークポートボードをDM前面カバーに取り付け、ネジを締めます。

**STEP 5:** 拡張スロットからネットワークポートバッフルを取り外します。

**STEP 6:** 背面ケースを取り付け、ネジを締めます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/PCIe.png" alt="pir" width="800" height="auto"/></p>

### SSDの取り付け

:::note
M.2 SSDは、近日中にリリース予定のPCIe拡張モジュールに取り付けられます。続報をお待ちください。
:::

**STEP 1:** 背面カバーを取り外します。

**STEP 2:** PCIe拡張モジュールボードをメインボードに取り付け、ネジを締めます。

**STEP 3:** 背面ケースを元に戻し、ネジを締めます。

**STEP 4:** クイックリムーブカバーのネジを外し、カバーを取り外します。

**STEP 5:** SSDをM.2ソケットに取り付け、ネジを締めます。

**STEP 6:** クイックリムーブカバーを元に戻し、ネジを締めます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/ssd.png" alt="pir" width="800" height="auto"/></p>

### カメラの取り付け

:::note
PiCamera V2モジュールはreTerminal DMでテスト済みで動作します。reTerminal DMで使用するためには、カスタマイズされた長いFPCカメラモジュールが必要です。
:::

**STEP 1:** 背面カバーを取り外します。

**STEP 2:** カメラをカメラボトムボードに取り付けます。

**STEP 3:** カメラFPCケーブルをカメラボトムボードのソケットに挿入します。

**STEP 4:** カメラを前面カバーに取り付け、固定用のステッカーを貼ります。

**STEP 5:** カメラモジュールをフロントカバーに組み込み、ネジで固定します。

**STEP 6:** FPCをメインボードのソケットに差し込み、バックカバーを元に戻してネジで固定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/camera.png" alt="pir" width="800" height="auto"/></p>

### PoEモジュールの取り付け

**STEP 1:** バックカバーを取り外し、メインボードを取り出します。

**STEP 2:** ドットマークに従ってPoEをメインボードに挿入します。

**STEP 3:** PoEモジュールをメインボードの裏側にハンダ付けします。

**STEP 4:** メインボードを元に戻し、バックカバーを取り付けてネジで固定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/poe.png" alt="pir" width="800" height="auto"/></p>

### RTCバッテリーの交換

**STEP 1:** バックカバーを取り外します。

**STEP 2:** RTCバッテリーケーブルをRTCバッテリーソケットに差し込み、RTCバッテリーをネットワークポートに取り付けます。

**STEP 3:** バックカバーを元に戻し、ネジで固定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/RTC_battery.png" alt="pir" width="800" height="auto"/></p>

### ヒューズの交換

**STEP 1:** バックカバーを取り外します。

**STEP 2:** メインボードのヒューズソケットから古いヒューズを取り出し、新しいヒューズを取り付けます。

**STEP 3:** バックカバーを元に戻し、ネジで固定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/fuse.png" alt="pir" width="800" height="auto"/></p>

### シャーシ接地ガイド

**STEP 1:** 接地ネジを緩めます。

**STEP 2:** 接地コネクタを取り付け、ネジを締めます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/grounding.png" alt="pir" width="800" height="auto"/></p>

### 端子接続ガイド

**STEP 1:** 下図の方向に従って電源コネクタを挿入します。

**STEP 2:** 下図の方向に従ってケーブルコネクタを挿入します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/terminal_block.png" alt="pir" width="800" height="auto"/></p>

## 取り付けガイド

reTerminal DMは複数の取り付け方法をサポートしており、使用シナリオに応じて柔軟に選択できます。  
ただし、標準製品にはパネルマウントおよびDINレールマウントに必要なアクセサリは付属していないため、取り付けには専用アクセサリを購入する必要があります。アクセサリの詳細については、セクション2.3「オプションインターフェースとモジュール」を参照してください。

### パネルマウント

reTerminal DMのパネルマウントには、パネルマウントキットが必要です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/panel_mount.png" alt="pir" width="800" height="auto"/></p>

### VESAマウント

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/VESA.png" alt="pir" width="800" height="auto"/></p>

### DINレールマウント

DINレールマウントには、リニアガイドウェイレール用のスライディングブロックが必要です。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070181-sliding-block-for-linear-guideway-rail_including-screws_-45font.jpg" alt="pir" width="400" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Sliding-block-for-linear-guideway-rail-including-screws-p-5527.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/DIN.png" alt="pir" width="800" height="auto"/></p>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>