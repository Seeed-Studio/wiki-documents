---
description: 'このページはTRMNL 7inch5(OG) DIY Kitのナビゲーションページです。'
title: TRMNL 7.5inch(OG) DIY Kitを始める
image: https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/head.webp
slug: /ja/trmnl_7inch5_diy_kit_main_page
sidebar_position: 1
last_update:
  date: 06/29/2025
  author: Allen
---

# TRMNL 7.5" (OG) DIY キット

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/head.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/TRMNL-7-5-Inch-OG-DIY-Kit-p-6481.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

## はじめに

### 製品概要

TRMNL 7.5" (OG) DIY Kitは、Seeed StudioとTRMNLが共同開発した多用途なe-ink開発ソリューションです。7.5インチ800×480モノクロームe-inkディスプレイ、XIAO ESP32-S3 PLUSドライバーボード、2000 mAh充電式バッテリー、10cm FPC延長ケーブルを組み合わせています。TRMNL BYODエコシステムと完全に互換性があり、このキットは375以上のプラグインと8つのレイアウトでノーコードダッシュボード構築を可能にし、DIY愛好家、スマートホームインターフェース、創造的なデジタルサイネージに最適です。

### 特徴

:::tip
コラボレーションを記念して、Team TRMNLはTRMNL BYODファームウェアアクセスを30%オフで提供しています（35ドル、通常50ドル）。チェックアウト時にコード **trmnl-seeed-diy** を使用してください（先着200名様、お一人様1回限り）。先着順です！
:::

- **TRMNL BYOD互換性**: 375以上のプラグインと8つのノーコードレイアウト（例：Calendar、Shopify、GitHub）でTRMNL 7.5'' OGデバイスを構築するための公式キット
- **7.5" E-Inkディスプレイ**: 部分リフレッシュ（0.34秒）と完全リフレッシュ（3.5秒）対応の800×480モノクロームディスプレイ
- **省エネ設計**: 2000mAhバッテリーでディープスリープモード（6時間リフレッシュ間隔）で最大3ヶ月の動作が可能
- **デュアルエコシステムサポート**: Home Assistant（ESPHome経由）とArduino IDEによるカスタム開発に対応
- **オープンソースエンクロージャー**: 簡単なカスタマイズのためにPrintablesとThingiverse上で利用可能

### 仕様

| パラメータ | 説明 |
| --- | --- |
| MCU | XIAO ESP32-S3 Plus搭載のXIAO ePaper Display Dev Board |
| ディスプレイ | 7.5インチモノカラーePaperディスプレイ |
| 解像度 | 800x480 |
| 動作電圧 | 5V |
| バッテリー | 2000mAh充電式リチウムイオンバッテリー（ディープスリープモードで3ヶ月のバッテリー寿命） |
| 動作温度 | -40°C～85°C |
| エンクロージャー | 含まれていません（PrintablesとThingiverse上でオープンソース設計） |

## ハードウェア概要

### コンポーネント図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/overview.png" style={{width:600, height:'auto'}}/></div>

### パーツリスト

| 製品 | 数量 |
| --- | --- |
| XIAO ePaper Display Dev Board (XIAO ESP32-S3 Plus) | 1 |
| 7.5インチ モノカラー ePaper ディスプレイ (800×480) | 1 |
| FPC 延長ケーブル (10 cm) | 1 |
| FPC コネクタ | 1 |
| 2000mAh 充電式リチウムイオンバッテリー | 1 |

## はじめに

### 機器の取り付け

**ステップ 1. ディスプレイをドライバーボードに接続**  
FPCケーブルをXIAO ePaper Display Boardのコネクタに合わせ、ラッチを固定して確実に接続します。

:::tip
FPCケーブルの金属面は上向きにする必要があります。そうでないと、コンテンツが表示されません。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**ステップ 2. バッテリーの取り付け**  
バッテリーケーブルをドライバーボードのJSTコネクタに接続し、極性が正しいことを確認します（赤線を+、黒線を-に）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**ステップ 3. エンクロージャーの組み立て（オプション）**  

:::tip
スクリーンのフレキシブルケーブルは非常に壊れやすいことにご注意ください。操作時は注意してください。損傷すると、スクリーン全体が動作しなくなります。
:::
[リソース部分](#resources)からオープンソースのエンクロージャーパーツを印刷し、内部にコンポーネントを組み立てます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:600, height:'auto'}}/></div>

まず、ドライバーボードとバッテリーを組み立てます。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/base.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

TRMNLキットが正常に動作するかテストします。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/test.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

スクリーンをケースに差し込み、FPCを外に出します。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/cable.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

FPC延長ケーブルを接続し、ケース全体を組み立てます。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/assembly.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

L字型エンクロージャーも非常に似ています。

<div class="table-center">
<iframe width="300" height="500" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/Lshape.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
TRMNLキットがルーターから遠い場合は、アンテナをケースの外に移動できます。より良いパフォーマンスが得られます。
:::

## Wikiセンター

### 詳細ガイドを探索

#### 1. [TRMNL BYODエコシステムチュートリアル](https://wiki.seeedstudio.com/ja/ogdiy_kit_works_with_trmnl/)

375以上のプラグインを備えたTRMNL BYODプラットフォームの使用方法を発見し、仕事と生活のためのノーコードダッシュボード作成を含みます。

#### 2. [Home Assistantとの連携](https://wiki.seeedstudio.com/ja/ogdiy_kit_works_with_esphome)

ESPHomeを介してTRMNLキットをHome Assistantでセットアップする方法を学び、ファームウェアのアップロードと基本的なプログラミングを含みます。

#### 3. [Arduinoとの連携](https://wiki.seeedstudio.com/ja/ogdiy_kit_works_with_arduino/)

リフレッシュメカニズム、グラフィックスレンダリング、電源管理を含む、ArduinoでのTRMNLキット制御をマスターします。

## <span id="resource">リソース</span>

- **[ファームウェア]** [TRMNL ePaper Library (GitHub)](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)
- **[ハードウェア]** [Driver Board SCH](https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/XIAO_ePaper_driver_board_sch.pdf)
- **[3Dプリント可能]** [三角形ベース](https://www.printables.com/model/1354873)  
- **[3Dプリント可能]** [保護付き三角形ベース](https://www.printables.com/model/1361112-upgrated-triangular-prism-3d-enclosure-for-trmnl-7)  
- **[3Dプリント可能]** [L字型ベース](https://www.printables.com/model/1354879)  
- **[Thingiverse]** [三角形ベース](https://www.thingiverse.com/thing:7091094)
- **[Thingiverse]** [保護付き三角形ベース](https://www.thingiverse.com/thing:7097231)
- **[Thingiverse]** [L字型ベース](https://www.thingiverse.com/thing:7091096)
- **[Makerworld]** [三角形ベース](https://makerworld.com/en/models/1625037-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [保護付き三角形ベース](https://makerworld.com/en/models/1625119-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [L字型ベース](https://makerworld.com/en/models/1625065-trmnl-7-5-og-diy-l-shaped-case-kit)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！複数のサポートチャンネルを提供しています：

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
