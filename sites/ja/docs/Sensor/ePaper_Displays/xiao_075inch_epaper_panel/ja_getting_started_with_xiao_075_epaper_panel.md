---
description: このページは XIAO 7.5" ePaper Panel のナビゲーションページです。
title: XIAO 7.5" ePaper Panel 入門ガイド
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.webp
slug: /xiao_075inch_epaper_panel
sku: 114993635
sidebar_position: 1
last_update:
  date: 05/19/2025
  author: Citric
createdAt: '2025-05-21'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/xiao_075inch_epaper_panel/
---

# XIAO 7.5" ePaper Panel 入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
</div>

## はじめに

XIAO ESP32-C3 を搭載したこの 7.5 インチ ePaper ディスプレイは、[Home Assistant](https://www.home-assistant.io/)、[TRMNL](https://trmnl.app/)、Arduino など、幅広い人気コミュニティアプリケーションをサポートする多用途で省エネルギーなスマート E Ink® スクリーンです。この柔軟なディスプレイソリューションは、ダッシュボードデータ、天気情報、スケジュール、カスタム情報の表示に最適です。鮮明な表示、ディープスリープモードで 3 か月（2000mAh）という優れたバッテリー寿命、そして幅広いカスタマイズ性により、このコンパクトなデバイスは多様なユースケースに対応します。現代的な生活空間やプロジェクト環境に最適で、機能性と洗練されたデザインを兼ね備え、複数のプラットフォームにわたって優れたビジュアル体験を提供します。

### 特長

- Home Assistant とのネイティブ連携
- ホームオートメーション向け 7.5" E Ink® ディスプレイ
- 低消費電力の省エネルギーデザイン
- Arduino 開発サポート
- 洗練されたフォームファクタ

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
   <td>7.5" モノクロ ePaper ディスプレイ</td>
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
   <td>-25°C ～ 50°C</td>
  </tr>
  <tr>
   <td>電源</td>
   <td>USB Type-C 5V</td>
  </tr>
        <tr>
            <td>筐体</td>
            <td>3D プリント (PLA)</td>
        </tr>
 </table>
</div>

## ハードウェア概要

XIAO 7.5" ePaper Panel は、分解図に示すように、いくつかの主要コンポーネントで構成されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/207.jpg" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/208.jpg" style={{width:800, height:'auto'}}/></div>

- **7.5" モノクロ ePaper ディスプレイ**: リフレッシュ後は電力を消費せずに画像を保持する 800 × 480 解像度ディスプレイ
- **ePaper ドライバボード**: ディスプレイを制御し、マイコンとの通信を処理します
- **XIAO ESP32-C3**: ファームウェアを実行し、接続性を管理するメインマイコン
- **2000 mAh バッテリー**: 特にスリープモード時に長時間動作のための電力を供給します
- **USB Type-C ポート**: 電源供給およびプログラミング用
- **筐体**: すべてのコンポーネントを収める PLA 製 3D プリントケース

本デバイスは、前面に ePaper ディスプレイを配置し、その背面に筐体内でドライバボード、バッテリー、XIAO ESP32-C3 を積層するレイヤー構造の内部設計を採用しています。

## セットアップ

XIAO 7.5" ePaper Panel を使い始めるには、次の手順に従ってください。

1. **スタンドを開く**: 下部の切り欠きを使って画面をそっと持ち上げ、内蔵スタンドを引き出します。スタンドを伸ばした状態で、平らな場所に本体を設置します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/206.gif" style={{width:500, height:'auto'}}/></div>

2. **電源オン**: ディスプレイを正面に向けた状態で、左下にある電源スイッチを探します。スイッチを "ON" 位置にスライドします（ON のラベルはスタンドの裏側、ディスプレイ正面から見て右側に隠れています）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/205.jpg" style={{width:600, height:'auto'}}/></div>

3. **初回起動**: 電源を入れると、自動的に 3 つのイントロダクションページが順番に表示され、機能がデモされます。

これらの手順を完了すると、ePaper Panel はお好みのプログラミングプラットフォームでの設定と使用を行う準備が整います。

### プログラミング用ボタン

XIAO 7.5" ePaper Panel には、スタンドの裏側にプログラミングやトラブルシューティングに役立つ 2 つの重要なボタンが搭載されています。

- **Boot ボタン**: デバイスにシリアル接続がない場合やスリープモードでプログラムをアップロードできない場合に使用します。Bootloader モードに入るには:
  1. USB ケーブルを接続する
  2. Boot ボタンを押し続ける
  3. Boot を押したまま Reset ボタンを 1 回押す
  4. Reset を離し、その後 Boot を離す
  5. 電源ケーブルを抜き、再度接続する

- **Reset ボタン**: プログラムを再起動するために使用します。1 回押すだけでリセットされます。

これらのボタンは、デバイスのプログラミング、ファームウェアの更新、およびデバイスが応答しなくなった場合の復旧に不可欠です。

## Wiki センター

以下の Wiki ページでは、XIAO 7.5" ePaper Panel をプログラムして使用するさまざまな方法について、詳しい情報を提供しています。

- [**Home Assistant の ESPHome で動作**](https://wiki.seeedstudio.com/ja/xiao_075inch_epaper_panel_esphome) - ESPHome 連携を通じて ePaper Panel を設定・制御します。Home Assistant ユーザーがカスタムダッシュボードを作成するのに最適です。

- [**Arduino で動作**](https://wiki.seeedstudio.com/ja/xiao_075inch_epaper_panel_arduino/) - Arduino IDE とライブラリ、サンプルを使用して、カスタムアプリケーション向けにデバイスをプログラムします。

- [**TRMNL で動作**](https://wiki.seeedstudio.com/ja/xiao_7_5_inch_epaper_panel_with_trmnl) - オープンソースプラットフォームである trmnl を使用してディスプレイを制御し、スマートなビジュアルダッシュボード管理を行います。

## リソース

- **[STP]**: [3D モデル筐体](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [ePaper ドライバボード SCH PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)
- **[BAMBU]** [Jonathan Thomson - XIAO 7.5" ePaper Panel 壁掛けマウント](https://makerworld.com/en/models/1487711-seeed-studio-xiao-7-5-epaper-panel-wall-mount#profileId-1554538)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
