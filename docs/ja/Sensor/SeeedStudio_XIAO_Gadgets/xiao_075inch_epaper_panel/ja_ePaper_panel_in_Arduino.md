---
description: XIAO ESP32C3 搭載の 7.5 インチ E-Ink ディスプレイは、Arduino を使用してデータを表示するためのコンパクトで省エネルギーなソリューションです。
title: Arduino での ePaper パネル
keywords:
- ePaper ディスプレイ
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/cover2.webp
slug: /ja/xiao_075inch_epaper_panel_arduino
sidebar_position: 2
last_update:
  date: 05/15/2025
  author: Allen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/cover2.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

## ハードウェア概要

### はじめに

7.5 インチ E-Ink ディスプレイは、Arduino ユーザーにとって画期的な製品です。Arduino とシームレスに統合され、さまざまなデータを簡単に表示できます。配線が簡単でコードもわかりやすいため、初心者でもすぐに始められます。低消費電力で、どんな光の下でも優れた視認性を提供します。この手軽で多用途なディスプレイを使って、無限のクリエイティブなプロジェクトを実現しましょう！

### 特徴

1. **省エネルギー E-Ink スクリーン**: 低消費電力で、直射日光下でも優れた視認性を提供。
2. **シームレスな統合**: Home Assistant や Arduino と簡単に統合可能で、カスタマイズが可能。
3. **コンパクトなデザイン**: スマートホームアプリケーションに最適なコンパクトサイズ。
4. **ユーザーフレンドリーなセットアップ**: 初心者から上級者まで、簡単に設定して使用可能。
5. **耐久性と信頼性**: 高品質な部品で構成され、長期間の使用に対応。

### 仕様
| 項目 | 説明 |
| --- | --- |
| MCU | XIAO ESP32 C3 |
| ディスプレイ | 7.5 インチ ePaper ディスプレイ |
| 解像度 | 800x480 |
| バッテリー | 3.7V 2000mAh |
| 寸法 | 180x20x130mm |
| 動作温度 | -40°C ～ 85°C |
| 動作電圧 | 3.3V ～ 5V |

## はじめに

### ステップ 1. Arduino IDE をダウンロード

まず、Arduino IDE をまだお持ちでない場合は、[Arduino IDE](https://www.arduino.cc/en/software) にアクセスして最新バージョンをダウンロードしてください。

### ステップ 2. ESP32 ボードサポートをインストール

**ファイル** -> **環境設定** に移動し、**追加のボードマネージャ URL** に以下の URL を追加してください。[詳細手順はこちらをクリック](http://localhost:3000/XIAO_ESP32C3_Getting_Started/#software-setup)。

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

### ステップ 3. Seeed Arduino LCD ライブラリをインストール

:::tip
このライブラリは TFT ライブラリと同じ機能を持ちますが、互換性はありません。TFT ライブラリをインストールしている場合は、まずアンインストールしてください。
:::

GitHub から Seeed Arduino LCD ライブラリをダウンロードしてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/50.png" style={{width:800, height:'auto'}}/></div>  

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>ここをクリックしてダウンロード</button></p>
</a>
</div>

ライブラリをダウンロードした後、**スケッチ** -> **ライブラリをインクルード** -> **.ZIP ライブラリを追加** に移動し、ダウンロードしたライブラリを選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

4 つの基本的な例が用意されています。お好みの基本例を開いてください：
1. Bitmap: ビットマップ画像を表示。
2. Clock: 時計を表示。
3. Clock_digital: デジタル時計を表示。
4. Shape: ランダムに異なるサイズの文字や形を表示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/52.png" style={{width:800, height:'auto'}}/></div>

### ステップ 4. コードをアップロード

コードをアップロードする前に、Seeed_Arduino_LCD ライブラリ内の **User_Setup_Select.h** を開く必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/53.png" style={{width:800, height:'auto'}}/></div>

160 行目をコメントアウトし、163 行目のコメントを解除してから、**ファイルを保存** してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/54.png" style={{width:800, height:'auto'}}/></div>

その後、**ツール** -> **ボード** -> **Seeeduino XIAO ESP32C3** を選択し、**ツール** -> **ポート** -> **接続されているボードのポートを選択** します。その後、**アップロード** をクリックしてコードをアップロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/55.png" style={{width:800, height:'auto'}}/></div>

これで ePaper スクリーンにフィードバックが表示されます！以下は Bitmap と Clock の例の結果です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/56.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/57.png" style={{width:800, height:'auto'}}/></div>

## リソース

- **[STP]**: [3Dモデルエンクロージャー](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [ePaper_Breakout_Board_for_XIAO_V2_PCBA.pdf](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Breakout_Board_for_XIAO_V2_PCBA.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>