---
description: 'このページはXIAO 7.5インチ電子ペーパーパネルのナビゲーションページです。'
title: XIAO 7.5インチ電子ペーパーパネルの使用開始
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.webp
slug: /ja/xiao_075inch_epaper_panel
sidebar_position: 1
last_update:
  date: 05/19/2025
  author: Citric
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

## 概要

XIAO ESP32-C3を搭載したこの7.5インチ電子ペーパーディスプレイは、多用途でエネルギー効率の高いスマートE Ink®スクリーンです。[Home Assistant](https://www.home-assistant.io/)、[TRMNL](https://trmnl.app/)、Arduino、その他多くの人気コミュニティアプリケーションをサポートしています。この柔軟なディスプレイソリューションは、ダッシュボードデータ、天気予報、スケジュール、カスタム情報の表示に最適です。鮮明な視覚効果、ディープスリープモードでの優れた3ヶ月のバッテリー寿命（2000mAh）、豊富なカスタマイズ可能性を備えたこのコンパクトなデバイスは、多様な用途に適応します。現代の生活空間やプロジェクト環境に最適で、複数のプラットフォームにわたって機能性とエレガントなデザインを組み合わせ、視覚体験を向上させます。

### 特徴

- ネイティブHome Assistant統合
- ホームオートメーション用7.5インチE Ink®ディスプレイ
- 低消費電力設計によるエネルギー効率
- Arduino開発サポート
- エレガントなフォームファクター

### 仕様

<div class="table-center">
 <table align="center">
  <tr>
   <th>項目</th>
   <th>説明</th>
  </tr>
  <tr>
   <td>MCU</td>
   <td><a href="https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/">XIAO ESP32-C3</a></td>
  </tr>
  <tr>
   <td>ディスプレイ</td>
   <td>7.5インチ モノクロ電子ペーパーディスプレイ</td>
  </tr>
  <tr>
   <td>解像度</td>
   <td>800 x 480</td>
  </tr>
  <tr>
   <td>バッテリー</td>
   <td>2000mAh</td>
  </tr>
  <tr>
   <td>寸法</td>
   <td>178 x 131 x 19 mm</td>
  </tr>
  <tr>
   <td>重量</td>
   <td>218g</td>
  </tr>
  <tr>
   <td>動作温度</td>
   <td>-25°C から 50°C</td>
  </tr>
  <tr>
   <td>電源供給</td>
   <td>USB Type-C 5V</td>
  </tr>
        <tr>
            <td>筐体</td>
            <td>3Dプリント（PLA）</td>
        </tr>
 </table>
</div>

## ハードウェア概要

XIAO 7.5" ePaper Panelは、分解図に示すように、いくつかの主要コンポーネントで構成されています：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/207.jpg" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/208.jpg" style={{width:800, height:'auto'}}/></div>

- **7.5" モノクロ ePaper ディスプレイ**: 800 × 480 解像度のディスプレイで、リフレッシュ後は電力消費なしで画像を維持します
- **ePaper ドライバーボード**: ディスプレイを制御し、マイクロコントローラーとの通信を処理します
- **XIAO ESP32-C3**: ファームウェアを実行し、接続を管理するメインマイクロコントローラー
- **2000 mAh バッテリー**: 特にスリープモード中の長時間動作に電力を供給します
- **USB Type-C ポート**: 電源供給とプログラミング用
- **エンクロージャー**: すべてのコンポーネントを収納するPLA 3Dプリントケース

デバイスは、ePaper ディスプレイを前面に配置し、ドライバーボード、バッテリー、XIAO ESP32-C3をエンクロージャー内で背面に積み重ねた層状の内部設計を使用しています。

## はじめに

XIAO 7.5" ePaper Panelを使い始めるには：

1. **スタンドを開く**: 底部の切り欠きを使用してスクリーンを優しく持ち上げ、内蔵スタンドを露出させます。スタンドを伸ばした状態でデバイスを平らな面に置きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/206.gif" style={{width:500, height:'auto'}}/></div>

2. **電源オン**: ディスプレイを正面に向けた状態で、左下角にある電源スイッチを見つけます。「ON」位置にスライドします（ONラベルはスタンドの後ろに隠れており、ディスプレイを正面に向けたときの右側にあります）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/205.jpg" style={{width:600, height:'auto'}}/></div>

3. **初期起動**: 電源を入れると、デバイスは自動的に機能を実演するための3つの紹介ページのシーケンスを表示し始めます。

これらの手順を完了すると、ePaper Panelは設定と、お好みのプログラミングプラットフォームでの使用の準備が整います。

### プログラミングボタン

XIAO 7.5" ePaper Panelには、プログラミングとトラブルシューティングに役立つ2つの重要なボタンがスタンドの後ろに配置されています：

- **Bootボタン**: デバイスにシリアル接続がない場合やスリープモードでプログラムをアップロードできない場合に使用します。ブートローダーモードに入るには：
  1. USBケーブルを接続
  2. Bootボタンを押し続ける
  3. Bootを押し続けながらResetボタンを一度押す
  4. Resetを離し、次にBootを離す
  5. 電源ケーブルを抜いて再度接続

- **Resetボタン**: プログラムを再起動するために使用します。一度押すだけでリセットされます。

これらのボタンは、デバイスプログラミング、ファームウェア更新、およびデバイスが応答しなくなった場合の復旧に重要です。

## Wikiセンター

以下のWikiページでは、XIAO 7.5" ePaper Panelをプログラムして使用するさまざまな方法について詳細な情報を提供しています：

- [**Home AssistantでESPHomeと連携**](https://wiki.seeedstudio.com/ja/xiao_075inch_epaper_panel_esphome) - ESPHome統合を通じてePaper Panelを設定・制御し、Home Assistantユーザーがカスタムダッシュボードを作成するのに最適です。

- [**Arduinoと連携**](https://wiki.seeedstudio.com/ja/xiao_075inch_epaper_panel_arduino/) - カスタムアプリケーション用のライブラリと例を使用してArduino IDEでデバイスをプログラムします。

- [**TRMNLと連携**](https://wiki.seeedstudio.com/ja/xiao_7_5_inch_epaper_panel_with_trmnl) - スマートビジュアルダッシュボード管理のためのオープンソースプラットフォームであるtrmnlでディスプレイを制御します。

## リソース

- **[STP]**: [3Dモデル筐体](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [ePaperドライバーボード回路図PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)
- **[BAMBU]** [Jonathan Thomson - XIAO 7.5" ePaperパネル壁掛けマウント](https://makerworld.com/en/models/1487711-seeed-studio-xiao-7-5-epaper-panel-wall-mount#profileId-1554538)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
