---
description: LinkStar-V2 マニュアル説明書
title: LinkStar-V2 紹介
keywords:
- ネットワーク
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/h68kv2_datasheet
last_update:
  date: 05/15/2025
  author: Parker
---


<!-- ---
name: 
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 102110958
tags:
--- -->

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/01.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H68K-1432-V2-p-5886.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 紹介

LinkStar-H68K-V2 ルーターは、クアッドコア Cortex-A55 RK3568 チップを搭載し、デュアル 2.5G とデュアル 1G の 4 つのイーサネットインターフェースを備え、Wi-Fi 6 技術を採用しています。また、高いストレージ容量とメディアプレーヤー機能を提供し、屋内使用に推奨されます。初代 H68K 世代と比較して、通信性能と放熱効果が向上しているだけでなく、インターフェースの配置がより合理的で便利になっています。この Wiki では、LinkStar-V2 のハードウェア概要と迅速なセットアップ方法を紹介します。

## ハードウェア概要

これは LinkStar-H68K-V2 のハードウェア概要です。各コンポーネントの詳細を以下に示します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/02.jpg" /></div>

### 電源供給

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-y6fn{background-color:#c0c0c0;text-align:left;vertical-align:top}\n.tg .tg-0lax{text-align:left;vertical-align:top}\n" }} /> -->

<table className="tg">
  <thead>
    <tr>
      <th className="tg-y6fn">動作電圧</th>
      <th className="tg-0lax">5V-20V の広範囲 DC 入力をサポート、電力要件 >10W</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-y6fn">DC 電源アダプター</td>
      <td className="tg-0lax">12V DC インターフェース電源供給が廃止</td>
    </tr>
    <tr>
      <td className="tg-y6fn"><span style={{fontWeight: 400, fontStyle: 'normal'}}>Type-C 電源供給</span></td>
      <td className="tg-0lax">CC ライン PD 急速充電をサポート</td>
    </tr>
  </tbody>
</table>

### イーサネットネットワーキング

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/03.jpg" /></div>

### チップ性能

RK3568 は SWICK による高コストパフォーマンスの 4K フラッグシップ SoC チップです。ARM アーキテクチャを採用し、クアッドコア Cortex-A55 を統合し、独立した NEON コプロセッサを備えて 4K ビデオデコードと 3K ビデオエンコードをサポートします。多くの強力な組み込みハードウェアエンジンが高性能アプリケーション向けに最適化された性能を提供します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/04.png" /></div>
<br/>
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/05.png" /></div>

### インターフェース

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n.tg .tg-w2ai{background-color:#FFF;border-color:inherit;color:#3D3D3D;text-align:left;vertical-align:top}\n.tg .tg-2e9t{background-color:#FFF;color:#3D3D3D;text-align:left;vertical-align:top}\n" }} /> -->

<table class="tg">
<tbody>
  <tr>
    <td class="tg-0pky">ETH0</td>
    <td class="tg-0pky">RTL8211F PHY チップを使用した 1G イーサネットをサポート</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH1</td>
    <td class="tg-0pky">RTL8211F PHY チップを使用した 1G イーサネットをサポート</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH2</td>
    <td class="tg-0pky">RTL8211F PHY チップを使用した 2.5G/1G イーサネットをサポート</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH3</td>
    <td class="tg-0pky">RTL8211F PHY チップを使用した 2.5G/1G イーサネットをサポート</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB3.0 Type-C</td>
    <td class="tg-0pky">CC ライン PD 急速充電と 5V-20V の広範囲 DC 入力をサポート</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB 3.0 Type-A</td>
    <td class="tg-0pky">x1</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB 2.0 Type-A</td>
    <td class="tg-0pky">x1</td>
  </tr>
  <tr>
    <td class="tg-0pky">M2 WIFI</td>
    <td class="tg-0pky">PCIE2.0 インターフェースを備えた MT7921 モジュール</td>
  </tr>
    <tr>
    <td class="tg-0pky">HDMI</td>
    <td class="tg-0pky">4K 出力対応 HDMI 2.0、音声と映像の両方をサポート</td>
  </tr>
  <tr>
    <td class="tg-0pky">赤外線受信機</td>
    <td class="tg-0pky">IRM-3638 モデル</td>
  </tr>
  <tr>
    <td class="tg-0pky">TF カードスロット</td>
    <td class="tg-0pky">SDIO 信号 SDMMC0</td>
  </tr>
</tbody>
</table>

### インジケーターライト

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar_V2/06.png" /></div>

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-y698{background-color:#efefef;border-color:inherit;text-align:left;vertical-align:top}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n" }} /> -->

<table class="tg">
<thead>
  <tr>
    <th class="tg-y698">電源</th>
    <th class="tg-y698">ハードディスクインジケーター</th>
    <th class="tg-y698">ETHインジケーター</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">動作中/アクティブインジケーター</td>
    <td class="tg-0pky">ハードディスク接続指示</td>
    <td class="tg-0pky">ネットワーク接続指示</td>
  </tr>
</tbody>
</table>

## クイックスタート

OpenWRTシステムが事前にインストールされているため、パッケージを受け取ったらすぐにLinkStarを使用できます。

### 準備

- LinkStar-H68K-V2
- ネットワークケーブル x2
- CCラインPD急速充電対応電源アダプター

### インストール

- **ステップ1**. ETH0はWANポートで、他のネットワークポートはLANポートです。ネットワークケーブルを使用してLinkStar-V2のOpenWRTを管理したい場合は、ETH0以外のLANポートにネットワークケーブルを接続してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar_V2/33.png" /></div>

- **ステップ2**. CCラインPD急速充電対応電源アダプターを接続して電源を入れます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar_V2/32.png" /></div>

**ステップ3.** OpenWRTバックエンドを管理する

ネットワークケーブルを使用してLinkStar-V2のETH1/ETH2/ETH3ネットワークポートに接続します。その後、ブラウザでアドレス`192.168.100.1`を入力して管理バックエンドにアクセスします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/31.png" /></div>

システムの初期アカウントとパスワードは以下の通りです。

```text
アカウント: root
パスワード: password
```

## リソース

LinkStar H68K-V2はオープンソースハードウェアです。関連資料のダウンロードリンクを以下に示します。

| バージョン                     | 説明              | ダウンロード                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| OpenWRT R22.11.18           | Dockerサポート追加 | [ダウンロード](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |
| Armbian 24.5.0 デスクトップ (オプション)|-| [ダウンロード](https://files.seeedstudio.com/wiki/LinkStar_V2/download/Armbian_community_24.5.0_trunk.389_h68k_desktop.zip) |
| eMMCフラッシュツール & ドライバー | - | [ダウンロード](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip) |
| balenaEtcher                | ISO書き込みツール  | [ダウンロード](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| H68K-V2-SCH                    | H68K回路図        | [ダウンロード](https://files.seeedstudio.com/wiki/LinkStar_V2/H68K_V2_Schematic.pdf) |
| RK3568 データシート            | - | [ダウンロード](https://files.seeedstudio.com/wiki/LinkStar/RK3568_Brief_Datasheet.pdf) |
| M7921E Wi-Fiモジュール         | - | [ダウンロード](https://files.seeedstudio.com/wiki/LinkStar/M7921E_Wi-Fi_Module.pdf) |

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>