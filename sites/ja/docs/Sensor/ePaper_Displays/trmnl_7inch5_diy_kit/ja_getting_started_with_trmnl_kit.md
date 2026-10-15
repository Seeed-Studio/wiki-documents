---
description: このページは TRMNL 7inch5(OG) DIY Kit のナビゲーションページです。
title: TRMNL 7.5inch(OG) DIY Kit 入門ガイド
image: https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/head.webp
slug: /trmnl_7inch5_diy_kit_main_page
sidebar_position: 1
last_update:
  date: 06/29/2025
  author: Allen
createdAt: '2025-07-16'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/ja/trmnl_7inch5_diy_kit_main_page/
---

# TRMNL 7.5" (OG) DIY Kit 入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/head.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/TRMNL-7-5-Inch-OG-DIY-Kit-p-6481.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

### 製品概要

TRMNL 7.5" (OG) DIY Kit は、Seeed Studio と TRMNL が共同開発した多用途な電子ペーパー開発ソリューションです。7.5 インチ 800×480 モノクロ電子ペーパーディスプレイ、XIAO ESP32-S3 PLUS ドライバボード、2000mAh 充電式バッテリー、10cm FPC 延長ケーブルを組み合わせています。TRMNL BYOD エコシステムと完全互換で、375 以上のプラグインと 8 種類のレイアウトを用いたノーコードダッシュボード構築が可能であり、DIY 愛好家、スマートホームインターフェース、クリエイティブなデジタルサイネージに最適です。

### 特長

<!-- :::tip
To celebrate the collaboration, Team TRMNL offers 30% off on TRMNL BYOD firmware access (35 dollar, usually for 50 dollar). Use code **trmnl-seeed-diy** at checkout (first 200 customers, 1 per customer). First come, first serve!
::: -->

- **TRMNL BYOD 互換性**: 375 以上のプラグインと 8 種類のノーコードレイアウト（カレンダー、Shopify、GitHub など）を備えた TRMNL 7.5'' OG デバイスを構築するための公式キット
- **7.5" 電子ペーパーディスプレイ**: 部分更新（0.34 秒）および全画面更新（3.5 秒）に対応した 800×480 モノクロディスプレイ
- **省エネ設計**: 2000mAh バッテリーにより、ディープスリープモード（6 時間ごとの更新）で最大 3 か月動作
- **デュアルエコシステム対応**: Home Assistant（ESPHome 経由）および Arduino IDE に対応し、カスタム開発が可能
- **オープンソース筐体**: Printables と Thingiverse で入手可能で、簡単にカスタマイズ可能

### 仕様

| パラメータ | 説明 |
| --- | --- |
| MCU | XIAO ESP32-S3 Plus 搭載 XIAO 電子ペーパーディスプレイ開発ボード |
| ディスプレイ | 7.5 インチ単色電子ペーパーディスプレイ |
| 解像度 | 800x480 |
| 動作電圧 | 5V |
| バッテリー | 2000mAh 充電式リチウムイオンバッテリー（ディープスリープモードで最大 3 か月のバッテリー寿命） |
| 動作温度 | -40°C ～ 85°C |
| エンクロージャ | 付属しません（Printables および Thingiverse 上のオープンソース設計を利用） |

## ハードウェア概要

### 構成部品図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/overview.png" style={{width:600, height:'auto'}}/></div>

### 同梱物一覧

| 製品 | 数量 |
| --- | --- |
| XIAO 電子ペーパーディスプレイ開発ボード（XIAO ESP32-S3 Plus 搭載） | 1 |
| 7.5 インチ単色電子ペーパーディスプレイ（800×480） | 1 |
| FPC 延長ケーブル（10 cm） | 1 |
| FPC コネクタ | 1 |
| 2000mAh 充電式リチウムイオンバッテリー | 1 |

## セットアップ

### 機器の取り付け

**ステップ 1. ディスプレイをドライバボードに接続する**  
FPC ケーブルを XIAO 電子ペーパーディスプレイボード上のコネクタに合わせ、ラッチを固定して確実に接続してください。  

:::tip
FPC ケーブルの金属面は上向きにする必要があります。向きが逆だと、画面に何も表示されません。

多くの方が間違える箇所なので、必ず以下の取り付けチュートリアルに従ってください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**ステップ 2. バッテリーを取り付ける**  
バッテリーケーブルをドライバボード上の JST コネクタに接続し、極性が正しいことを確認します（赤い線を +、黒い線を - に接続）。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**ステップ 3. エンクロージャの組み立て（任意）**  

:::tip
画面のフレキシブルケーブルは非常に繊細です。作業時は十分注意してください。損傷すると、画面全体が動作しなくなります。
:::
下記の [Resource part](#resource) からオープンソースのエンクロージャ部品を印刷し、その中に各コンポーネントを組み込んでください。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:600, height:'auto'}}/></div>

まず、ドライバボードとバッテリーを組み立てます。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/base.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

TRMNL キットが正常に動作するかテストします。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/test.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

画面をケースに差し込み、FPC が外に出せるようにします。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/cable.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

FPC 延長ケーブルを接続し、ケース全体を組み立てます。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/assembly.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

L 字型エンクロージャもほぼ同様です。

<div class="table-center">
<iframe width="300" height="500" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/Lshape.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
TRMNL キットがルーターから遠い場合は、アンテナをケースの外に出すことができます。その方が性能が向上します。
:::

## Wiki センター

### 詳細ガイドを探索する

#### 1. [TRMNL BYOD エコシステムチュートリアル](https://wiki.seeedstudio.com/ja/reterminal_e10xx_trmnl/)

TRMNL BYOD プラットフォームを使って 375 以上のプラグインを活用し、仕事や生活のためのノーコードダッシュボードを作成する方法を学びましょう。

#### 2. [Home Assistant との連携](https://wiki.seeedstudio.com/ja/ogdiy_kit_works_with_esphome)

ESPHome を介して Home Assistant と TRMNL キットを連携させる方法を、ファームウェアの書き込みや基本的なプログラミングを含めて解説します。

#### 3. [Arduino との連携](https://wiki.seeedstudio.com/ja/ogdiy_kit_works_with_arduino/)

Arduino を用いて TRMNL キットを制御する方法を、リフレッシュ機構、グラフィックス描画、電源管理を含めてマスターしましょう。

## <span id="resource">リソース</span>

- **[Firmware]** [TRMNL ePaper Library (GitHub)](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)
- **[Hardware]** [Driver Board SCH](https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/XIAO_ePaper_driver_board_sch.pdf)
- **[Printable]** [三角ベース](https://www.printables.com/model/1354873)  
- **[Printable]** [保護付き三角ベース](https://www.printables.com/model/1361112-upgrated-triangular-prism-3d-enclosure-for-trmnl-7)  
- **[Printable]** [L 字型ベース](https://www.printables.com/model/1354879)  
- **[Thingiverse]** [三角ベース](https://www.thingiverse.com/thing:7091094)
- **[Thingiverse]** [保護付き三角ベース](https://www.thingiverse.com/thing:7097231)
- **[Thingiverse]** [L 字型ベース](https://www.thingiverse.com/thing:7091096)
- **[Makerworld]** [三角ベース](https://makerworld.com/en/models/1625037-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [保護付き三角ベース](https://makerworld.com/en/models/1625119-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [L 字型ベース](https://makerworld.com/en/models/1625065-trmnl-7-5-og-diy-l-shaped-case-kit)

## 技術サポート & 製品ディスカッション

当社製品をお選びいただきありがとうございます。以下の複数のサポートチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
