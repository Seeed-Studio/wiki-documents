---
description: ODYSSEY - X86J4105
title: LinkStar 紹介
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Linkstar_Datasheet
last_update:
  date: 05/15/2025
  author: w0x7ce
---


<!-- ---
name: 
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 
tags:
--- -->

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/OVerview.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H68K-1432-p-5501.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 紹介

LinkStar-H68Kルーターは、クアッドコアCortex-A55 RK3568チップを搭載し、デュアル2.5Gおよびデュアル1Gの4つのイーサネットインターフェースを備えています。Wi-Fi 6技術（オプション）を提供し、高いストレージ容量とメディアプレーヤー機能を備えています。このWikiでは、LinkStarのハードウェア概要と迅速なセットアップ方法を紹介します。

## ハードウェア概要

こちらはLinkStar - H68Kのハードウェア概要です。各コンポーネントの詳細を説明します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/hardware_overview1.jpg" /></div>

### 電源供給

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-y6fn{background-color:#c0c0c0;text-align:left;vertical-align:top}\n.tg .tg-0lax{text-align:left;vertical-align:top}\n" }} /> -->

<table className="tg">
  <thead>
    <tr>
      <th className="tg-y6fn">動作電圧</th>
      <th className="tg-0lax">5V~24V DC (推奨: 12V-1A DC)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-y6fn">DC電源アダプター</td>
      <td className="tg-0lax">12V-1A DC (推奨)</td>
    </tr>
    <tr>
      <td className="tg-y6fn">DC電源アダプター</td>
      <td className="tg-0lax">追加のハードウェアドライバー用に12-2A DC (推奨)</td>
    </tr>
    <tr>
      <td className="tg-y6fn"><span style={{fontWeight: 400, fontStyle: 'normal'}}>Type-C電源供給</span></td>
      <td className="tg-0lax">5V以下 (急速充電非対応)</td>
    </tr>
  </tbody>
</table>

### イーサネットネットワーキング

<div align="center"><img width={700} src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEyMg_968748_fi2e0dpZ5__TlzPp_1668582262?w=960&h=500" /></div>

### チップ性能

RK3568は、SWICKが所有する高コストパフォーマンスの4KフラッグシップSoCチップです。ARMアーキテクチャを採用し、クアッドコアCortex-A55と独立したNEONコプロセッサを統合しており、4Kビデオデコードと3Kビデオエンコードをサポートします。多くの強力な組み込みハードウェアエンジンが高性能アプリケーション向けに最適化された性能を提供します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/chip_performance.png" /></div>

### インターフェース

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n.tg .tg-w2ai{background-color:#FFF;border-color:inherit;color:#3D3D3D;text-align:left;vertical-align:top}\n.tg .tg-2e9t{background-color:#FFF;color:#3D3D3D;text-align:left;vertical-align:top}\n" }} /> -->

<table class="tg">
<tbody>
  <tr>
    <td class="tg-0pky">ETH0</td>
    <td class="tg-0pky">RTL8211F PHYチップを使用した1Gイーサネットをサポート</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH1</td>
    <td class="tg-0pky">RTL8211F PHYチップを使用した1Gイーサネットをサポート</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH2</td>
    <td class="tg-0pky">RTL8211F PHYチップを使用した2.5G/1Gイーサネットをサポート</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH3</td>
    <td class="tg-0pky">RTL8211F PHYチップを使用した2.5G/1Gイーサネットをサポート</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB3.0 Type-C</td>
    <td class="tg-0pky">5V電源供給でIOを直通 (急速充電非対応)</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB 3.0 Type-A</td>
    <td class="tg-0pky">x1</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB 2.0 Type-A</td>
    <td class="tg-0pky">x2</td>
  </tr>
  <tr>
    <td class="tg-0pky">M2 WIFI (オプション)</td>
    <td class="tg-0pky">PCIE2.0インターフェースを備えたMT7921モジュール</td>
  </tr>
    <tr>
    <td class="tg-0pky">HDMI</td>
    <td class="tg-0pky">4K出力対応のHDMI 2.0、音声と映像の両方をサポート</td>
  </tr>
  <tr>
    <td class="tg-0pky">3.5mmオーディオ入力/出力</td>
    <td class="tg-0pky">RK809-5電源供給チップによる実装</td>
  </tr>
  <tr>
    <td class="tg-0pky">赤外線受信機</td>
    <td class="tg-0pky">IRM-3638モデル</td>
  </tr>
  <tr>
    <td class="tg-0pky">TFカードスロット</td>
    <td class="tg-0pky">SDIO信号SDMMC0</td>
  </tr>
</tbody>
</table>

### インジケーターライト

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/indicator.png" /></div>

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-y698{background-color:#efefef;border-color:inherit;text-align:left;vertical-align:top}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n" }} /> -->

<table class="tg">
<thead>
  <tr>
    <th class="tg-y698">STA</th>
    <th class="tg-y698">ハードディスクインジケーター</th>
    <th class="tg-y698">ETHインジケーター</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">動作/アクティブインジケーター</td>
    <td class="tg-0pky">ハードディスク接続指示</td>
    <td class="tg-0pky">ネットワーク接続指示</td>
  </tr>
</tbody>
</table>

## クイックスタート

LinkStarはAndroid 11システムがプリインストールされているため、受け取った後すぐに使用できます。

### 準備物

- LinkStar
- HDMIコネクター
- モニター
- マウス
- 12V1A電源アダプター

### インストール

- **ステップ1**. LinkStarをモニターとマウスに接続します。

- **ステップ2**. 12V1A電源アダプターを接続し、電源ボタンを押して起動します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/power.png" /></div>

- **ステップ3**. モニターには以下のように表示されます：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/display.png" /></div>

:::note
右クリックは「戻る」を表します。右クリックするとページが戻りますのでご注意ください。
:::

これで準備完了です！

## リソース

- [RK3568 データシート](https://files.seeedstudio.com/wiki/LinkStar/RK3568_Brief_Datasheet.pdf)
- [M7921E Wi-Fi モジュール](https://files.seeedstudio.com/wiki/LinkStar/M7921E_Wi-Fi_Module.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>