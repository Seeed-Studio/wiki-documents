---
description: XIAO ESP32C3搭載の7.5インチE-Inkディスプレイは、Arduino経由でデータを表示するためのコンパクトで省エネルギーなソリューションです。
title: Arduinoとの連携
keywords:
- ePaper display
- arduino
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/cover2.webp
slug: /ja/xiao_075inch_epaper_panel_arduino
sidebar_position: 3
last_update:
  date: 03/26/2025
  author: Allen
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/203.png" style={{width:900, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

## 概要

XIAO 7.5" ePaper PanelはArduino IDEを使用してプログラミングできるため、Arduinoエコシステムに慣れ親しんだメーカーや開発者にとってアクセスしやすいものとなっています。このガイドでは、Arduino開発環境のセットアップと基本的な例を使った入門方法について説明します。

ePaper Panelの特徴：

- 800x480解像度の7.5"モノクロームePaperディスプレイ
- ワイヤレス接続用のXIAO ESP32-C3マイクロコントローラー
- ポータブル使用のための内蔵2000mAhバッテリー
- プログラミングと電源供給用のUSB Type-Cインターフェース
- 統合スタンド付きのコンパクトデザイン

Arduinoプログラミングを通じて、以下のことができます：

- テキストとグラフィックの表示
- カスタムユーザーインターフェースの作成
- リアルタイムデータとセンサー読み取り値の表示
- インタラクティブアプリケーションの構築
- ePaperのゼロ電力保持を活用した低消費電力アプリケーションの実装

このガイドでは、初期セットアッププロセスをカバーし、ePaper Panel用の独自のArduinoアプリケーション開発を始めるためのサンプルコードを提供します。

## はじめに

### ステップ1. Arduino IDEのダウンロード

まず、Arduino IDEをまだお持ちでない場合は、[Arduino IDE](https://www.arduino.cc/en/software)にアクセスして最新バージョンをダウンロードしてください。

:::tip
Arduinoを初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

### ステップ2. ESP32ボードサポートのインストール

**File** -> **Preferences**に移動し、**Additional Boards Manager URLs**に以下のURLを追加してください。[詳細な手順はこちらをクリックしてください。](http://localhost:3000/XIAO_ESP32C3_Getting_Started/#software-setup)

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

### ステップ 3. Seeed GFX ライブラリのインストール

:::tip
このライブラリはTFTライブラリと同じ機能を持ちますが、互換性はありません。TFTライブラリや他の類似のディスプレイライブラリをインストールしている場合は、まずそれらをアンインストールしてください。
:::

GitHubからSeeed GFXライブラリをダウンロードしてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>ここをクリックしてダウンロード</button></p>
</a>
</div>

下にスクロールしてこのリンクを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

デバイスタイプを選択すると、コードが生成されます。そのコードをコピーして、後で使用します。

:::tip
間違った選択をすると、画面に何も表示されません。

そのため、デバイスやコンポーネントのタイプを確認してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix6.jpg" style={{width:800, height:'auto'}}/></div>

ライブラリをダウンロードした後、**Sketch** -> **Include Library** -> **Add .ZIP Library** に移動し、ダウンロードしたライブラリを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

4つの基本的な例があります。お好みの基本例を開いてください：

1. Bitmap: ビットマップ画像を表示します。
2. Clock: 時計を表示します。
3. Clock_digital: デジタル時計を表示します。
4. Shape: 異なるサイズの文字と図形をランダムに表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

### ステップ 4. コードのアップロード

**新しい「driver.h」ファイル**を作成し、そのコードを貼り付けます。コードは次のようになります：

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DRIVER_BOARD
```

その後、**Tools** -> **Board** -> **XIAO ESP32C3** と **Tools** -> **Port** -> **ボードが接続されているポートを選択** に移動します。次に **Upload** をクリックしてコードをアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix7.jpg" style={{width:800, height:'auto'}}/></div>

これで電子ペーパー画面にフィードバックが表示されます！以下はBitmapとClockの例の結果です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/56.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/57.png" style={{width:800, height:'auto'}}/></div>

## リソース

- **[STP]**: [3Dモデルエンクロージャ](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [ePaperドライバーボード回路図PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
