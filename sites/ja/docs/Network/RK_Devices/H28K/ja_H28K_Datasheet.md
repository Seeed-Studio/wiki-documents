---
description: H28K データシート
title: H28K 紹介
keywords:
- ネットワーク
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/H28K_Datasheet
last_update:
  date: 05/15/2025
  author: Parker
---


<!-- ---
name: H28K ルーター（8GB eMMC、QWRT対応）
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: *******
tags:
--- -->

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/Overview.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H28K-0208-p-5848.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 紹介

LinkStar-H28K は、PCIE/RGMII ギガビット技術を使用した 2 つのギガビットネットワークポートとクアッドコアチップを備えています。LPDDR4X 4GB メモリと 8GB eMMC ストレージを搭載しており、TF カードを使用して最大 512GB まで拡張可能です。また、PD（Power Delivery）機能を備えた 5V-12V Type-C 接続も備えています。この Wiki では、ハードウェアの概要を紹介します。

## ハードウェア概要

こちらは H28K のハードウェア概要です。各コンポーネントの詳細を以下に示します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/29.png" /></div>

## 特徴

- **高速で安定したネットワークポート**: PCIE/RGMII 技術を備えたデュアルギガビットイーサネットポートを搭載。アダプタ不要のネットワークポートにより、速度がより安定します。
- **高度なクアッドコアプロセッサ**: 高性能な RK3528 クアッドコア ARM Cortex-A53 @1.5 GHz チップを搭載し、スムーズで信頼性の高い動作を実現します。
- **PD（Power Delivery）対応**: 最先端の PD（Power Delivery）対応 5V-12V Type-C ポートを搭載。
- **拡張可能なストレージとメモリ**: LPDDR4 2GB メモリと 8GB eMMC ストレージを搭載。TF カードによる最大 512GB の拡張が可能です。
- **コンパクトでポケットサイズのデザイン**: サイズはわずか 55.2 x 65.15 x 22.6 mm。コンパクトなサイズでどんな場所にも簡単に組み込めます。
- **オペレーティングシステム**: QWRT（OpenWRT ベース）

## 仕様

| **パラメータ** | **詳細**                                                   |
| -------------- | ----------------------------------------------------------- |
| プロセッサ     | RK3528 クアッドコア ARM Cortex-A53 @1.5 GHz                 |
| メモリ         | 2GB/4GB LPDDR4X                                             |
| ストレージ     | オンボード 8GB eMMC                                         |
|                | ストレージ拡張用 1× TF カードスロット（最大 512GB 対応）    |
| ネットワーク   | 1x PCIe + 1x RGMII ギガビットイーサネットポート             |
| USB            | 1x USB Type-C（電源供給用）、1x USB 2.0 Type-A             |
| 電源供給       | 5V-12V Type-C（PD）                                         |
| 寸法           | 55.2\*65.15\*22.6mm                                        |

## インジケータライト

| 電源インジケータ         | 動作インジケータ         | WAN インジケータ             | LAN インジケータ             |
| ------------------------- | ------------------------ | ----------------------------- | ----------------------------- |
| 正常な電源接続インジケータ | システム動作インジケータ | WAN ポート接続インジケータ   | LAN ポート接続インジケータ   |

## クイックスタート

H28K ルーターには事前にインストールされたシステムが付属していません。以下のチュートリアルに従って、オペレーティングシステムを手動でインストールしてください。[H28K-install-system](/ja/H28K-install-system)

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>