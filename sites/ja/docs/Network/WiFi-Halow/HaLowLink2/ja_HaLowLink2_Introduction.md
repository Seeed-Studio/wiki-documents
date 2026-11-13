---
description: HaLowLink 2 Wi-Fi HaLow Gateway の概要 — 特長、仕様、ハードウェア概要、同梱物、リソース
title: HaLowLink 2 Wi-Fi HaLow Gateway
keywords:
  - HaLowLink 2
  - Wi-Fi HaLow
  - Wio-WM8108
  - MM8108
  - IEEE 802.11ah
  - OpenWrt
  - Gateway
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /halowlink2_introduction
sku: 100072966
last_update:
  date: 11/12/2026
  author: Advent Jiang
createdAt: '2026-11-06'
updatedAt: '2026-11-12'
url: https://wiki.seeedstudio.com/ja/halowlink2_introduction/
---

# HaLowLink 2 Wi-Fi HaLow Gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-hero.png" alt="HaLowLink 2 Wi-Fi HaLow Gateway standing on a desk with its antenna attached" width={700} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>地域別アンテナを装着し、スタンドに立てた HaLowLink 2。</em></p>

## はじめに

**HaLowLink 2** は、Seeed Studio が販売する Wi-Fi HaLow（IEEE 802.11ah）ゲートウェイ（SKU **100072966**）です。Wi-Fi HaLow の **ルーター、アクセスポイント、またはエクステンダー** として動作し、新しい HaLow ネットワークを作成したり、既存ネットワークに HaLow 接続性を追加したり、2 台をペアリングして最長 1 km 離れた遠隔拠点（見通し距離・環境依存）まで接続したりできます。サブ 1 GHz 無線の **MM8108** が HaLow リンクを提供します。

2 台目をエクステンダーとして使用すると、HaLow リンクを介して **2.4 GHz Wi-Fi ホットスポットと有線 Ethernet を遠隔拠点まで中継** できるため、一般的なスマートフォン、ノート PC、IoT デバイスも同じネットワークに参加できます。ルーター構成とアクセスポイント構成は OpenWrt ベースのセットアップウィザードで選択し、筐体の Mode ボタンでエクステンダーモードへの切り替え、ペアリングの開始、または工場出荷時設定へのリセットを行います。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/HaLowLink-2-Wi-Fi-Halow-Gateway-p-7025.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 特長

<!-- Internal note: features below are taken from the Seeed product page and the official Morse Micro HaLowLink 2 Product Brief (Rev 9), which agree with each other. -->

- **長距離サブ 1 GHz Wi-Fi HaLow** — MM8108 無線による IEEE 802.11ah：最長 1 km の見通し距離、2.4 GHz Wi-Fi より優れた浸透性、1 / 2 / 4 / 8 MHz のチャネル帯域幅、最大 43.3 Mbps の PHY レート。
- **3 つのモード、ウィザードまたはボタンで切替** — Wi-Fi HaLow ルーター、アクセスポイント、エクステンダーとして動作します。セットアップウィザードでルーターまたはアクセスポイントを選択し、Mode ボタンでユニットをエクステンダーモードに切り替えてペアリングします。
- **HaLow と 2.4 GHz 接続性** — Wi-Fi HaLow に加え、2.4 GHz（802.11n、2×2）のアクセスポイントを搭載しているため、HaLow 非対応デバイスもネットワークに参加できます。
- **ギガビット有線インターフェース** — 2× ギガビット Ethernet ポート（WAN と LAN）と、電源と Ethernet データの両方を運ぶ USB-C ポート。
- **OpenWrt ベースの管理** — OpenWrt 23.05 をベースとし、Web UI、セットアップウィザード、診断機能、SSH/CLI、オンラインアップグレードを備えています。

:::note
43.3 Mbps は 8 MHz 帯域幅における最大 **PHY（物理層）データレート** であり、実際に測定されるアプリケーションスループットではありません。「最長 1 km」は見通し距離での最大値であり、すべての環境で保証されるものではありません。
:::

## 仕様

<!-- Internal note (Specifications Audit): every row below was cross-checked between the Seeed product page (primary baseline) and the Morse Micro HaLowLink 2 Product Brief (Rev 9). No conflicts were found as of 2026-11-06. Audit table: D:\SeeedWiki\notes\halowlink2\SPEC_AUDIT.md. Never populate this table with HaLowLink 1 values. -->

### 無線

| 項目 | 値 |
|:----:|:-----:|
| Wi-Fi HaLow 規格 | IEEE 802.11ah |
| HaLow モジュール / 無線 | AzureWave AW-HM677 / Morse Micro MM8108 |
| チャネル帯域幅 | 1 / 2 / 4 / 8 MHz（地域に依存） |
| 最大 PHY データレート | 8 MHz 帯域幅で 43.3 Mbps（PHY レートであり、アプリケーションスループットではない） |
| 送信電力 (TX Power) | 最大 26 dBm（地域に依存） |
| 2.4 GHz Wi-Fi | IEEE 802.11n、MediaTek MT7603E、2×2（内蔵アンテナ） |
| ネットワークモード | Wi-Fi HaLow ルーター / アクセスポイント / エクステンダー |
| 通信距離 | 見通し距離で最長 1 km（環境に依存し、保証値ではない） |

### ハードウェア

| 項目 | 値 |
|:----:|:-----:|
| CPU | MediaTek MT7621 |
| メモリ / ストレージ | 256 MB DRAM / 32 MB NAND フラッシュ |
| 電源入力 | 5 V ⎓ 2 A（USB-C） |
| 動作温度 | 0–40 °C、5–95% RH（結露なきこと） |
| 寸法 / 重量 | 88 × 68 × 24 mm / 102 g（スタンドとアンテナ装着時 168 g） |

### インターフェース & ソフトウェア

| 項目 | 値 |
|:----:|:-----:|
| Ethernet | 2× ギガビット Ethernet ポート（WAN および LAN と表示） |
| USB-C | 1× USB-C ポート（電源および Ethernet データ） |
| アンテナコネクタ | SMA（地域別外付けアンテナ同梱） |
| 操作 / インジケータ | Mode ボタン；Status、Wi-Fi HaLow、Wi-Fi 2.4 GHz LED |
| オペレーティングシステム | OpenWrt 23.05 ベース（ファームウェア更新により変更される場合あり） |
| 設定方法 | Web UI（HTTPS）および SSH/CLI（SSH はデフォルトで無効） |
| 管理アドレス | `https://192.168.12.1`（デフォルト） |

:::note Regional Information
本製品ファミリは、**米国、カナダ、オーストラリア、英国、欧州、日本** などの地域市場をサポートしています。送信電力は EU/UK では 14 dBm、日本では 16 dBm に制限されます。利用可能なバンド、チャネル、帯域幅は地域モデルによって異なり、EU および UK では EasyMesh / 802.11s メッシュ動作はサポートされません。お住まいの国や地域向けのモデルを、同梱のアンテナと電源アダプタとともに使用してください。規制対象地域は、サポートされるユーザー設定から変更することはできません。認証および適合宣言は特定のモデルおよび地域に対して適用されます。購入前に、該当する地域バリアントを必ず確認してください。
:::

<!-- Requires Verification (internal): confirm the manufacturer regional part number for Seeed SKU 100072966 and archive the applicable FCC, EU DoC, Japan MIC/Giteki, and Wi-Fi CERTIFIED documents before listing them as certifications of this SKU. The existing specification audit records source agreement, not certificate coverage verification. -->

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-ports.jpg" alt="HaLowLink 2 rear panel with WAN and LAN Ethernet ports and the USB-C power port" width={500} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>背面パネル：WAN および LAN ギガビット Ethernet ポートと USB-C 電源ポート（5 V ⎓ 2 A）。SMA アンテナコネクタは上部エッジにあります。</em></p>

| インターフェース | 役割 |
|:---------:|:-----|
| Ethernet ポート（WAN） | アップリンク — 既存のルーターまたはネットワークに接続 |
| Ethernet ポート（LAN） | ローカルネットワーク — 設定用のコンピュータまたは下流デバイスを接続 |
| USB-C ポート | 電源入力（5 V ⎓ 2 A）、およびコンピュータ接続時の Ethernet データ |
| SMA コネクタ | 地域別外付け Wi-Fi HaLow アンテナ（電源投入前に接続） |
| Mode ボタン | エクステンダーモードに入る（Status LED がアクア色で高速点滅するまで押し続けてから離す）；ペアリングを開始（短押し）；工場出荷時設定にリセット（Status LED が緑色で低速点滅するまで押し続けてから離す） |

3 つの LED（**Status**、**Wi-Fi HaLow**、**Wi-Fi 2.4 GHz**）でデバイスの状態を表示します。Status LED は、ルーター構成またはアクセスポイント構成（どちらも HaLow AP をホスト）では緑色点灯、エクステンダーモードではアクア色点灯になります。エクステンダー側では、Wi-Fi HaLow LED が紫色点灯していると HaLow 経由で接続されていることを意味しますが、アクセスポイント側では紫色点灯は HaLow が有効であることのみを示すため、接続デバイス一覧でクライアントを確認してください。ラベル付きクローズアップは [Pair the Devices](/ja/halowlink2_getting_started#デバイスをペアリングする) に、LED の動作全体は [Getting Started](/ja/halowlink2_getting_started#ネットワーク構成) に記載されています。

## 同梱物

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-package.png" alt="HaLowLink 2 retail box with the package contents laid out beside it" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>リテールボックスの横に並べた同梱物：本体、スタンド、地域別アンテナ、USB-C–USB-C ケーブル、Ethernet ケーブル、地域別プラグアダプタ付き電源アダプタ、印刷ドキュメント（クイックスタートガイドおよびサポート & 保証カード）。</em></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-box-diagram.png" alt="Official What's in the box diagram with labelled ports, dimensions and included accessories" width={700} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>公式パッケージ図：ラベル付きポート（SMA コネクタ、WAN、LAN、USB-C）、本体寸法（88 × 68 mm、スタンド高さ 94 mm）、および同梱されるすべてのアクセサリとその地域別プラグアダプタ。</em></p>

<!-- Internal note: box contents below are from the official Morse Micro HaLowLink 2 Product Brief (Rev 9); the retail-package photo above (provided 2026-11-11) shows the same items in a Seeed-branded retail box. -->

- HaLowLink 2 本体
- HaLowLink 2 スタンド
- 電源アダプタ
- USB-C–USB-C ケーブル
- Ethernet ケーブル
- 地域別アンテナ（SMA）
- 地域別プラグアダプタ：USA、AU、UK、EU
- クイックスタートガイド
- サポート & 保証カード

## リソース

- [Seeed Studio 製品ページ — HaLowLink 2 Wi-Fi HaLow Gateway](https://www.seeedstudio.com/HaLowLink-2-Wi-Fi-Halow-Gateway-p-7025.html)（SKU 100072966）
- [HaLowLink 2 Product Brief (PDF)](https://www.morsemicro.com/resources/product_brief/HaLowLink-2_Product-Brief.pdf)
- [HaLowLink User Guide (PDF)](https://www.morsemicro.com/resources/user_guides/HaLowLink-User-Guide.pdf)
- [HaLowLink 2 software release notes](https://docs.morsemicro.com/software-releases/halowlink2-software-release-notes)
- [Morse Micro OpenWrt source code (GitHub)](https://github.com/MorseMicro/openwrt)

**関連する Seeed Studio Wiki チュートリアル：**

- [Getting Started with Wi-Fi HaLow Module for XIAO](/ja/getting_started_with_wifi_halow_module_for_xiao)（Wio-WM6180）
- [Getting Started with Wi-Fi HaLow Mini PCIe Module](/ja/getting_started_with_wifi_halow_mini_pcie_module)（Wio-WM6108 ファミリ）

**次のステップ：** [Getting Started](/ja/halowlink2_getting_started) に進み、HaLowLink 2 を初期セットアップしましょう。

## テクニカルサポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせてお選びいただけるよう、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
