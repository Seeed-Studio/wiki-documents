---
description: Seeed Studio の ePaper ディスプレイ製品マトリクスを完全に概観します。統合型 reTerminal E シリーズ端末から、ドライバボード、DIY キット、それらを動かすアプリケーションフレームワークまでを網羅しています。
title: Seeed ePaper ディスプレイ
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png
slug: /seeed_epaper_displays
sidebar_position: 1
last_update:
  date: 05/18/2026
  author: dimo
createdAt: '2026-04-28'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/ja/seeed_epaper_displays/
---

# Seeed ePaper ディスプレイ — 製品マトリクス概要

## はじめに

ePaper（電子ペーパー）は、表示内容を変更するときにのみ電力を消費するため、**常時表示の情報パネル**（デジタルサイネージ、スマートホームダッシュボード、電子棚札、会議室ボード、フォトフレームなど）に最適なディスプレイ技術です。

Seeed Studio は、次の 3 つの製品ラインを中心に構成されたエンドツーエンドの ePaper ポートフォリオを提供しています。

1. **reTerminal E シリーズ** — 完全統合型のすぐに使える ePaper 端末（電源を入れるだけ）。
2. **ドライバ / 拡張ボード** — MCU とユニバーサルまたは大判 ePaper スクリーンを組み合わせて、独自の製品を構築。
3. **DIY キット & ベアパネル** — メイカーコミュニティ向けに設計され、TRMNL や XIAO など特定プラットフォーム向けに最適化。

これら 3 つのラインはすべて、同じ**ソフトウェアエコシステム**を共有しています。SenseCraft HMI（ノーコード）、Home Assistant / ESPHome、TRMNL、Arduino / ESP-IDF / PlatformIO に加え、SquareLine Vision、EEZ Studio、Lopaka などのビジュアル UI ツールが利用できます。ハードウェアファミリを 1 つ選べば、残りのツールチェーンは共通です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

## フォームファクタから選ぶ

どこから始めればよいか迷う場合は、この意思決定マトリクスを参考にしてください。

<div class="table-center">
  <table align="center">
    <tr>
      <th>やりたいこと…</th>
      <th>推奨製品ライン</th>
      <th>理由</th>
    </tr>
    <tr>
      <td>箱から出してすぐに ePaper ダッシュボードを起動したい。はんだ付けや追加配線は不要</td>
      <td><a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_main_page" target="_blank" rel="noopener noreferrer"><strong>reTerminal E シリーズ →</strong></a></td>
      <td>バッテリ、筐体、温湿度センサ、ブザー、ボタン、Wi-Fi をすべて統合。SenseCraft HMI ファームウェアをプリインストール。</td>
    </tr>
    <tr>
      <td>既存の ePaper スクリーン（24 ピン、50 ピン、13.3 インチ、10.3 インチなど）を MCU とバッテリに組み合わせたい</td>
      <td><a href="https://wiki.seeedstudio.com/ja/xiao_epaper_display_board_overview" target="_blank" rel="noopener noreferrer"><strong>ドライバ / 拡張ボードシリーズ →</strong></a></td>
      <td>ドライバボード（ESP32-S3 向け EE0x、nRF52840 向け EN0x）は JST バッテリコネクタ、充電 IC、リセットボタン、ユーザボタンを搭載。</td>
    </tr>
    <tr>
      <td>メイカー向け DIY キットで TRMNL 互換のダッシュボードを構築したい</td>
      <td><a href="https://wiki.seeedstudio.com/ja/trmnl_7inch5_diy_kit_main_page" target="_blank" rel="noopener noreferrer"><strong>TRMNL 7.5" (OG) DIY キット →</strong></a></td>
      <td>TRMNL プラットフォーム向けに事前調整済み。ESPHome と Arduino にも対応。</td>
    </tr>
    <tr>
      <td>7.5 インチ ePaper パネルを Seeed Studio XIAO モジュールに直接接続したい</td>
      <td><a href="https://wiki.seeedstudio.com/ja/xiao_075inch_epaper_panel" target="_blank" rel="noopener noreferrer"><strong>XIAO 7.5" ePaper パネル →</strong></a></td>
      <td>任意の XIAO ボードと接続できるベアパネル + ブレイクアウト。フットプリント最小。</td>
    </tr>
  </table>
</div>

## reTerminal E シリーズ — 統合型 ePaper 端末

同一の筐体ファミリ、ソフトウェアスタック、バッテリ設計を共有する、ESP32-S3 搭載の 4 つの端末です。違いは画面サイズ、カラーかモノクロか、タッチ対応、バッテリ寿命です。

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:240, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center"><strong>7.5" モノクロ</strong><br/>4 階調グレースケール<br/>約 3 か月バッテリ</td>
      <td align="center"><strong>7.3" フルカラー</strong><br/>E Ink Spectra 6<br/>約 3 か月バッテリ</td>
      <td align="center"><strong>10.3" モノクロ</strong><br/>16 階調グレースケール + タッチ<br/>約 6 か月バッテリ</td>
      <td align="center"><strong>13.3" フルカラー</strong><br/>E Ink Spectra 6<br/>約 6 か月バッテリ</td>
    </tr>
    <tr>
      <td align="center"><a href="https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1001" target="_blank" rel="noopener noreferrer"><strong>E1001 Wiki →</strong></a></td>
      <td align="center"><a href="https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1002" target="_blank" rel="noopener noreferrer"><strong>E1002 Wiki →</strong></a></td>
      <td align="center"><a href="https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1003" target="_blank" rel="noopener noreferrer"><strong>E1003 Wiki →</strong></a></td>
      <td align="center"><a href="https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1004" target="_blank" rel="noopener noreferrer"><strong>E1004 Wiki →</strong></a></td>
    </tr>
  </table>
</div>

:::tip
解像度、リフレッシュ時間、部分更新対応、認証、MSRP などの仕様比較や、詳細なソフトウェア対応マトリクスについては、専用ページ **[reTerminal E シリーズ概要](https://wiki.seeedstudio.com/ja/reterminal_e10xx_main_page)** を参照してください。
:::

## ドライバ / 拡張ボードシリーズ — 画面は自前で用意

すでに 24 ピン、50 ピン、10.3 インチ、13.3 インチの ePaper パネルを持っている、または別途調達したい場合、ドライバボードファミリがバッテリマネジメント、ボタン、充電 IC、MCU などのキャリア回路を提供します。

### ESP32-S3 ドライバボード（Wi-Fi / BLE、SenseCraft HMI）

<div class="table-center">
  <table align="center">
    <tr>
      <th>ボード</th>
      <th>対応スクリーン</th>
      <th>特長</th>
      <th>Wiki</th>
    </tr>
    <tr>
      <td align="center"><strong>EE02</strong></td>
      <td align="center">13.3" Spectra 6</td>
      <td>大判カラー専用ドライバ。Wi-Fi + BLE 搭載で、デジタルサイネージに最適。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/ja/getting_started_with_ee02" target="_blank" rel="noopener noreferrer">EE02 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>EE03</strong></td>
      <td align="center">10.3" モノクロ（高速リフレッシュ）</td>
      <td>内蔵 T-CON タイミング、オンボード SHT40 による波形補償、XIAO ESP32-S3 Plus 搭載。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/ja/getting_started_with_ee03" target="_blank" rel="noopener noreferrer">EE03 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>EE04</strong></td>
      <td align="center">24 ピン / 50 ピン汎用</td>
      <td>ジャンパでピン配置を選択可能。市販の小型 ePaper スクリーンのほとんどで動作。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/ja/epaper_ee04" target="_blank" rel="noopener noreferrer">EE04 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>EE05</strong></td>
      <td align="center">24 ピン汎用（最新）</td>
      <td>EE04 のレイアウトを刷新。同じ XIAO ESP32-S3 ベースで、最新ファームウェアに対応。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/ja/epaper_ee05" target="_blank" rel="noopener noreferrer">EE05 →</a></td>
    </tr>
  </table>
</div>

### nRF52840 ドライバボード（BLE / NFC、超低消費電力）

<div class="table-center">
  <table align="center">
    <tr>
      <th>ボード</th>
      <th>対応スクリーン</th>
      <th>特長</th>
      <th>Wiki</th>
    </tr>
    <tr>
      <td align="center"><strong>EN04</strong></td>
      <td align="center">24 ピン / 50 ピン汎用</td>
      <td>Bluetooth LE + NFC、XIAO nRF52840 Plus 搭載で、ESL やオフラインタグに最適。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/ja/epaper_EN04" target="_blank" rel="noopener noreferrer">EN04 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>EN05</strong></td>
      <td align="center">24 ピン汎用（最新）</td>
      <td>EN04 のレイアウトを刷新。同じ nRF52840 ベースで、最新ファームウェアに対応。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/ja/epaper_en05" target="_blank" rel="noopener noreferrer">EN05 →</a></td>
    </tr>
  </table>
</div>

### XIAO モジュール向けに設計されたボード

<div class="table-center">
  <table align="center">
    <tr>
      <th>ボード</th>
      <th>説明</th>
      <th>Wiki</th>
    </tr>
    <tr>
      <td align="center"><strong>XIAO eInk Expansion Board v2</strong></td>
      <td>任意の XIAO モジュール向けのプラグアンドプレイ拡張ボード。一般的な小型 ePaper スクリーンに対応。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/ja/xiao_eink_expansion_board_v2" target="_blank" rel="noopener noreferrer">v2 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>XIAO ePaper Breakout Board</strong></td>
      <td>XIAO + ePaper 用のオリジナルブレイクアウトボード。OpenEpaperLink（OEPL）対応でドキュメントも充実。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/ja/XIAO-eInk-Expansion-Board" target="_blank" rel="noopener noreferrer">Breakout →</a></td>
    </tr>
  </table>
</div>

:::tip
各ボードの機能一覧を横並びで確認できる、統合ページ **[ePaper ドライバボード概要](https://wiki.seeedstudio.com/ja/xiao_epaper_display_board_overview)** も用意されています。
:::

## DIY キット & ベアパネル

すべてを自分で組み立てたいメイカー向けに、柔軟な 2 つのオプションがあります。

<div class="table-center">
  <table align="center">
    <tr>
      <th>製品</th>
      <th>同梱物 / 製品内容</th>
      <th>最適な用途</th>
      <th>Wiki</th>
    </tr>
    <tr>
      <td><strong>TRMNL 7.5" (OG) DIY Kit</strong><br/><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/head.webp" style={{width:200, height:'auto'}}/></div></td>
      <td>7.5インチモノクロ電子ペーパー + ESP32ドライバボード + アクリルスタンド。TRMNLクラウドプラットフォーム向けに事前調整済みで、ESPHome や Arduino も実行できます。</td>
      <td>最小限のBOMコストで TRMNL スタイルのダッシュボードを実現する最速の方法です。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/ja/trmnl_7inch5_diy_kit_main_page" target="_blank" rel="noopener noreferrer">TRMNL キット →</a></td>
    </tr>
    <tr>
      <td><strong>XIAO 7.5" ePaper Panel</strong><br/><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.webp" style={{width:200, height:'auto'}}/></div></td>
      <td>XIAO モジュールのフットプリントに直接接続できるFPCコネクタ付きの 7.5インチ電子ペーパーパネル単体。</td>
      <td>すでに XIAO を持っていて、そこに画面を追加したいコンパクトで低コストなプロジェクト向け。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/ja/xiao_075inch_epaper_panel" target="_blank" rel="noopener noreferrer">XIAO パネル →</a></td>
    </tr>
  </table>
</div>

## ソフトウェアエコシステムの概要

すべての Seeed 製電子ペーパー製品は、同じソフトウェアエコシステムに収束します。自分のスキルレベルに合ったワークフローを選択してください — 組み合わせて使うこともできます：

<div class="table-center">
  <table align="center">
    <tr>
      <th>ツール / プラットフォーム</th>
      <th>種類</th>
      <th>機能</th>
      <th>対応製品</th>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/ja/sensecraft_hmi_overview" target="_blank" rel="noopener noreferrer"><strong>SenseCraft HMI</strong></a></td>
      <td align="center">ノーコード（クラウド）</td>
      <td>AI ジェネレーター、ギャラリー、キャンバス、RSS / Web コンテンツ、OTA デプロイメント。reTerminal E シリーズのデフォルトファームウェアです。</td>
      <td>reTerminal E1001 / E1002 / E1003 / E1004 · EE02 · EE03 · EE04 · EE05</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/ja/epaper_work_with_esphome" target="_blank" rel="noopener noreferrer"><strong>ESPHome / Home Assistant</strong></a></td>
      <td align="center">YAML ベース</td>
      <td>Home Assistant とのネイティブ連携；YAML で宣言的にダッシュボードを構築します。</td>
      <td>reTerminal E1001 / E1002 / E1004 · EE04 · TRMNL DIY キット · XIAO 7.5" パネル</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_trmnl" target="_blank" rel="noopener noreferrer"><strong>TRMNL</strong></a></td>
      <td align="center">クラウドダッシュボード</td>
      <td>プラグイン駆動のダッシュボード（カレンダー、ニュース、天気、金融、カスタムデータ）。</td>
      <td>reTerminal E1001 · E1002（モノクロモード）· TRMNL 7.5" DIY キット · XIAO 7.5" パネル</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino" target="_blank" rel="noopener noreferrer"><strong>Arduino / PlatformIO / ESP-IDF</strong></a></td>
      <td align="center">コード（C/C++）</td>
      <td>GPIO、センサー、ネットワーク、カスタムレンダリングなど、完全なプログラム制御。</td>
      <td>すべての ESP32-S3 製品（E1001–E1004、EE02–EE05、TRMNL キット、XIAO パネル）</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_squareline_vision" target="_blank" rel="noopener noreferrer"><strong>SquareLine Vision</strong></a></td>
      <td align="center">ビジュアル UI デザイン</td>
      <td>ブラウザ上でドラッグ＆ドロップで LVGL UI を作成し、そのままコンパイル可能なコードとしてエクスポートします。</td>
      <td>reTerminal E1001 / E1002</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_eezstudio" target="_blank" rel="noopener noreferrer"><strong>EEZ Studio</strong></a></td>
      <td align="center">ビジュアル UI デザイン</td>
      <td>HMI 画面をビジュアルに設計し、Arduino IDE を通してデプロイします。</td>
      <td>reTerminal E1001 / E1002 · EE04</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_lopaka" target="_blank" rel="noopener noreferrer"><strong>Lopaka</strong></a></td>
      <td align="center">ビジュアル UI デザイン</td>
      <td>モノクロおよびカラー電子ペーパーのレイアウト用コードをエクスポートできる、Web ベースのドローイングツール。</td>
      <td>reTerminal E1001 / E1002</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/ja/EN04_opendisplay" target="_blank" rel="noopener noreferrer"><strong>OpenEPaperLink / OpenDisplay</strong></a></td>
      <td align="center">オープンソースファームウェア（BLE）</td>
      <td>BLE 駆動のオープンソース電子ペーパーファームウェア。OpenDisplay は EN04 をすぐに利用できる形でサポートし、OEPL Config Builder は Breakout Board + XIAO nRF52840 の DIY パスを対象とします。</td>
      <td>EN04 · XIAO ePaper Breakout Board</td>
    </tr>
  </table>
</div>

## アプリケーションチュートリアル索引

以下の各チュートリアルは、それぞれ1つのプラットフォームをエンドツーエンドで解説します：

### スマートホーム & ダッシュボードフレームワーク

- [ESPHome を使う](https://wiki.seeedstudio.com/ja/epaper_work_with_esphome) — 主要なリファレンス：フラッシュ手順、汎用 YAML スケルトン、Home Assistant 連携。製品別クックブック：[reTerminal E（Basic）](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_esphome)、[reTerminal E（Advanced）](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_esphome_advanced)、[EE04](https://wiki.seeedstudio.com/ja/EE04_with_esphome_advanced)、[XIAO 7.5" パネル](https://wiki.seeedstudio.com/ja/xiao_075inch_epaper_panel_esphome)、[TRMNL DIY キット](https://wiki.seeedstudio.com/ja/ogdiy_kit_works_with_esphome)。
- [TRMNL を使う](https://wiki.seeedstudio.com/ja/reterminal_e10xx_trmnl) — TRMNL クラウドプラットフォームを通じて E-Ink ダッシュボードをデプロイします。1つの記事で reTerminal E1001/E1002、TRMNL DIY キット、XIAO 7.5" ePaper パネルをまとめて扱っており、タブでハードウェアを選択します。

### ノーコード / ビジュアル UI デザインツール

- [SenseCraft HMI を使う](https://wiki.seeedstudio.com/ja/EE04_with_hmi) — Seeed のノーコードビジュアルインターフェースプラットフォーム；reTerminal E シリーズと EE0x ドライバボードをカバーします。
- [SquareLine Vision を使う](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_squareline_vision)
- [EEZ Studio を使う](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_eezstudio) — reTerminal E シリーズ + EE04 の統合 LVGL ワークフロー。
- [Lopaka を使う](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_lopaka)

### コードベース開発

- [Arduino を使う](https://wiki.seeedstudio.com/ja/epaper_work_with_arduino) — 主要なリファレンス：IDE セットアップ、`Seeed_GFX` ライブラリ、`driver.h` 生成。製品別クックブック：reTerminal E シリーズ — [ePaper Display](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino) と [Onboard Peripherals](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino_peripherals)、[TRMNL DIY キット](https://wiki.seeedstudio.com/ja/ogdiy_kit_works_with_arduino)、[XIAO 7.5" パネル](https://wiki.seeedstudio.com/ja/xiao_075inch_epaper_panel_arduino)。
- [PlatformIO を使う — EE04](https://wiki.seeedstudio.com/ja/ee04_with_platformio)

### オープンソース ESL / OEPL

- [OpenEPaperLink / OpenDisplay を使う](https://wiki.seeedstudio.com/ja/EN04_opendisplay) — EN04 BLE キットと ePaper Breakout Board + XIAO nRF52840 の DIY パスを1つの記事でカバーします。

## リソース

- [SenseCraft HMI ドキュメント](https://wiki.seeedstudio.com/ja/sensecraft_hmi_overview/)
- [ESP32-S3 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [XIAO シリーズ概要](https://wiki.seeedstudio.com/ja/xiao_topic_page/)
- [Seeed Studio 電子ペーパーカテゴリストア](https://www.seeedstudio.com/catalogsearch/result/?q=epaper)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
