---
description: XIAO 7.5インチ ePaper パネル向けのエンドツーエンド Arduino クックブック - XIAO ESP32-C3 固有の Arduino IDE セットアップ、Seeed_GFX の設定、Hello World の手順解説。
title: Arduino クックブック
keywords:
  - ePaper ディスプレイ
  - arduino
  - XIAO ESP32-C3
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/cover2.webp
slug: /xiao_075inch_epaper_panel_arduino
sidebar_position: 1
last_update:
  date: 04/28/2026
  author: Allen
createdAt: '2025-03-27'
updatedAt: '2026-04-28'
---

# Arduino クックブック: XIAO 7.5" ePaper パネル

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/203.png" style={{width:900, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
</div>

:::tip まずはメインの Arduino ガイドをお読みください
このページは **XIAO 7.5" パネル専用のクックブック**です。共通の手順 ― Arduino IDE のセットアップ、ESP32 ボードパッケージ、`Seeed_GFX` のインストール、Configuration Tool からの `driver.h` 生成 ― は **[Work with Arduino](/ja/epaper_work_with_arduino)** にまとめられています。Seeed の ePaper で Arduino を使うのが初めての場合は、まずそちらに目を通してください。このページでは、XIAO ESP32-C3 ベースのパネルで異なる点に焦点を当てて説明します。
:::

## 概要

XIAO 7.5" ePaper パネルは Arduino IDE を使ってプログラムできるため、Arduino エコシステムに慣れたメイカーや開発者にとって扱いやすい製品です。本ガイドでは、Arduino 開発環境のセットアップ方法と、基本的なサンプルから始める手順を説明します。

ePaper パネルの特長:

- 800x480 解像度の 7.5 インチ モノクロ ePaper ディスプレイ
- 無線接続用の XIAO ESP32-C3 マイコン
- ポータブル用途向けの 2000mAh 内蔵バッテリー
- プログラミングと電源供給用の USB Type-C インターフェース
- スタンド一体型のコンパクトなデザイン

Arduino でプログラミングすることで、次のようなことが可能です:

- テキストやグラフィックの表示
- カスタムユーザーインターフェースの作成
- リアルタイムデータやセンサー値の表示
- インタラクティブなアプリケーションの構築
- ePaper のゼロ電力保持を活かした低消費電力アプリケーションの実装

本ガイドでは、初期セットアップ手順を説明し、ePaper パネル向けに独自の Arduino アプリケーション開発を始めるためのサンプルコードを提供します。

## はじめに

### ステップ 1. Arduino IDE をダウンロード

まだ Arduino IDE をお持ちでない場合は、[Arduino IDE](https://www.arduino.cc/en/software) にアクセスして最新バージョンをダウンロードしてください。

:::tip
Arduino を初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くお勧めします。
:::

### ステップ 2. ESP32 ボードサポートをインストール

**File** -> **Preferences** に進み、**Additional Boards Manager URLs** に次の URL を追加します。[詳細な手順はこちらをクリックしてください。](http://localhost:3000/XIAO_ESP32C3_Getting_Started/#software-setup)

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

### ステップ 3. Seeed GFX ライブラリをインストール

:::tip
このライブラリは TFT ライブラリと同じ機能を持ちますが、互換性はありません。TFT ライブラリや類似のディスプレイライブラリをインストールしている場合は、先にアンインストールしてください。
:::

GitHub から Seeed GFX ライブラリをダウンロードしてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>ここをクリックしてダウンロード</button></p>
</a>
</div>

下にスクロールして、このリンクを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

お使いのデバイスタイプを選択すると、いくつかのコードが生成されます。そのコードをコピーしておき、後で使用します。

:::tip
誤った選択をすると、画面には何も表示されません。

そのため、ご使用のデバイスやコンポーネントの種類を必ず確認してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix6.jpg" style={{width:800, height:'auto'}}/></div>

ライブラリをダウンロードしたら、**Sketch** -> **Include Library** -> **Add .ZIP Library** に進み、ダウンロードしたライブラリを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

基本サンプルが 4 つあります。好みの基本サンプルを開いてください:

1. Bitmap: ビットマップ画像を表示します。
2. Clock: アナログ時計を表示します。
3. Clock_digital: デジタル時計を表示します。
4. Shape: さまざまなサイズの文字と図形をランダムに表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

### ステップ 4. コードを書き込む

**新しい "driver.h" ファイル**を作成し、先ほどのコードを貼り付けます。コードは次のようになります:

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DRIVER_BOARD
```

その後、**Tools** -> **Board** -> **XIAO ESP32C3** と、**Tools** -> **Port** -> **ボードが接続されているポートを選択** に進みます。次に **Upload** をクリックしてコードを書き込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix7.jpg" style={{width:800, height:'auto'}}/></div>

これで ePaper 画面にフィードバックが表示されるはずです！以下は Bitmap と Clock サンプルの結果です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/56.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/57.png" style={{width:800, height:'auto'}}/></div>

## リソース

- **[STP]**: [3D モデル筐体](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [ePaper ドライバーボード SCH PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
