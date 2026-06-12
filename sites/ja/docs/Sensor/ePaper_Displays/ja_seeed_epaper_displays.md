---
description: Seeed Studio の ePaper ディスプレイ製品マトリクスを、統合型 reTerminal E シリーズ端末からドライバボード、DIY キット、それらを支えるアプリケーションフレームワークまで網羅的に紹介します。
title: Seeed ePaper ディスプレイ
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png
slug: /seeed_epaper_displays
sidebar_position: 1
last_update:
  date: 05/18/2026
  author: dimo
createdAt: '2026-04-28'
updatedAt: '2026-05-20'
url: https://wiki.seeedstudio.com/ja/seeed_epaper_displays/
---

# Seeed ePaper ディスプレイ — 製品マトリクス概要

## はじめに

ePaper（電子ペーパー）は、表示内容を変更するときにのみ電力を消費するため、**常時表示の情報パネル**に最適なディスプレイ技術です。デジタルサイネージ、スマートホームダッシュボード、電子棚札、会議室ボード、フォトフレームなど、さまざまな用途に利用できます。

Seeed Studio は、次の 3 つの製品ラインを中心に構成されたエンドツーエンドの ePaper ポートフォリオを提供しています：

1. **reTerminal E シリーズ** — 完全統合型のすぐに使える ePaper 端末（電源を入れるだけ）。
2. **ドライバ / 拡張ボード** — MCU とユニバーサルまたは大判の ePaper スクリーンを組み合わせて、独自の製品を構築。
3. **DIY キット & ベアパネル** — メイカーコミュニティ向けに設計され、TRMNL や XIAO など特定プラットフォーム向けに最適化。

これら 3 つのラインはすべて、同じ**ソフトウェアエコシステム**を共有しています：SenseCraft HMI（ノーコード）、Home Assistant / ESPHome、TRMNL、Arduino / ESP-IDF / PlatformIO に加え、SquareLine Vision、EEZ Studio、Lopaka などのビジュアル UI ツールです。ハードウェアファミリを 1 つ選べば、残りのツールチェーンは共通のままです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

## フォームファクタから選ぶ

どこから始めればよいか迷う場合は、この意思決定マトリクスを参考にしてください：

<div class="table-center">
  <table align="center">
    <tr>
      <th>やりたいこと…</th>
      <th>推奨製品ライン</th>
      <th>理由</th>
    </tr>
    <tr>
      <td>箱から出してすぐに ePaper ダッシュボードを起動したい（はんだ付けや追加配線は不要）</td>
      <td><a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_main_page" target="_blank" rel="noopener noreferrer"><strong>reTerminal E シリーズ →</strong></a></td>
      <td>バッテリ、筐体、温湿度センサ、ブザー、ボタン、Wi-Fi をすべて統合。SenseCraft HMI ファームウェアをプリインストールして出荷。</td>
    </tr>
    <tr>
      <td>既存の ePaper スクリーン（24 ピン、50 ピン、13.3 インチ、10.3 インチなど）を MCU とバッテリに組み合わせたい</td>
      <td><a href="https://wiki.seeedstudio.com/ja/xiao_epaper_display_board_overview" target="_blank" rel="noopener noreferrer"><strong>ドライバ / 拡張ボード シリーズ →</strong></a></td>
      <td>ドライバボード（ESP32-S3 向け EE0x、nRF52840 向け EN0x）は JST バッテリコネクタ、充電 IC、リセットボタン、ユーザボタンを備えています。</td>
    </tr>
    <tr>
      <td>メイカー向け DIY キットで TRMNL 互換のダッシュボードを構築したい</td>
      <td><a href="https://wiki.seeedstudio.com/ja/trmnl_7inch5_diy_kit_main_page" target="_blank" rel="noopener noreferrer"><strong>TRMNL 7.5" (OG) DIY キット →</strong></a></td>
      <td>TRMNL プラットフォーム向けに事前調整済みで、ESPHome や Arduino にも対応。</td>
    </tr>
    <tr>
      <td>7.5 インチ ePaper パネルを Seeed Studio XIAO モジュールに直接接続したい</td>
      <td><a href="https://wiki.seeedstudio.com/ja/xiao_075inch_epaper_panel" target="_blank" rel="noopener noreferrer"><strong>XIAO 7.5" ePaper パネル →</strong></a></td>
      <td>ベアパネル + 任意の XIAO ボードと接続できるブレークアウト基板で、フットプリントを最小限に抑えます。</td>
    </tr>
  </table>
</div>

## reTerminal E シリーズ — 統合型 ePaper 端末

同一の筐体ファミリ、ソフトウェアスタック、バッテリ設計を共有する、ESP32-S3 搭載の 4 つの端末です。異なるのは画面サイズ、カラーかモノクロか、タッチ対応の有無、バッテリ寿命です。

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
      <td align="center"><strong>7.5" モノクロ</strong><br/>4 階調グレースケール<br/>約 3 か月のバッテリ駆動</td>
      <td align="center"><strong>7.3" フルカラー</strong><br/>E Ink Spectra 6<br/>約 3 か月のバッテリ駆動</td>
      <td align="center"><strong>10.3" モノクロ</strong><br/>16 階調グレースケール + タッチ<br/>約 6 か月のバッテリ駆動</td>
      <td align="center"><strong>13.3" フルカラー</strong><br/>E Ink Spectra 6<br/>約 6 か月のバッテリ駆動</td>
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
解像度、リフレッシュ時間、部分更新対応、認証、MSRP などの仕様を横並びで比較できる詳細なスペック表と、ソフトウェアサポートマトリクスについては、専用ページ **[reTerminal E シリーズ概要](https://wiki.seeedstudio.com/ja/reterminal_e10xx_main_page)** を参照してください。
:::

## ドライバ / 拡張ボード シリーズ — 画面は自前で用意（BYO Screen）

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
      <td>大判カラー向け専用ドライバ。Wi-Fi + BLE 搭載で、デジタルサイネージに最適。</td>
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
      <td align="center">24 ピン / 50 ピン ユニバーサル</td>
      <td>ジャンパで選択可能なピン配置により、市販の小型 ePaper スクリーンのほとんどに対応。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/ja/epaper_ee04" target="_blank" rel="noopener noreferrer">EE04 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>EE05</strong></td>
      <td align="center">24 ピン ユニバーサル（最新）</td>
      <td>EE04 のレイアウトを刷新し、同じ XIAO ESP32-S3 ベースで最新ファームウェアをサポート。</td>
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
      <td align="center">24 ピン / 50 ピン ユニバーサル</td>
      <td>Bluetooth LE + NFC、XIAO nRF52840 Plus 搭載で、ESL やオフラインタグに最適。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/ja/epaper_EN04" target="_blank" rel="noopener noreferrer">EN04 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>EN05</strong></td>
      <td align="center">24 ピン ユニバーサル（最新）</td>
      <td>EN04 のレイアウトを刷新し、同じ nRF52840 ベースで最新ファームウェアをサポート。</td>
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
      <td>任意の XIAO モジュール向けのプラグアンドプレイ拡張ボードで、一般的な小型 ePaper スクリーンをサポートします。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/ja/xiao_eink_expansion_board_v2" target="_blank" rel="noopener noreferrer">v2 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>XIAO ePaper Breakout Board</strong></td>
      <td>XIAO + ePaper 用のオリジナルブレークアウトボードで、OpenEpaperLink（OEPL）対応を含めドキュメントが充実しています。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/ja/XIAO-eInk-Expansion-Board" target="_blank" rel="noopener noreferrer">Breakout →</a></td>
    </tr>
  </table>
</div>

:::tip
各ドライバボードの機能一覧を横並びで確認できる、統合ページ **[ePaper ドライバボード概要](https://wiki.seeedstudio.com/ja/xiao_epaper_display_board_overview)** も用意されています。
:::

## DIY キット & ベアパネル

すべてを自分で組み立てたいメイカー向けに、柔軟な 2 つのオプションがあります：

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
      <td>7.5インチモノクロ電子ペーパー + ESP32ドライバボード + アクリルスタンド。TRMNLクラウドプラットフォーム向けに事前調整済みで、ESPHomeやArduinoも実行できます。</td>
      <td>最小限のBOMコストでTRMNLスタイルのダッシュボードを実現する最速の方法です。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/ja/trmnl_7inch5_diy_kit_main_page" target="_blank" rel="noopener noreferrer">TRMNL Kit →</a></td>
    </tr>
    <tr>
      <td><strong>XIAO 7.5" ePaper Panel</strong><br/><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.webp" style={{width:200, height:'auto'}}/></div></td>
      <td>XIAOモジュールのフットプリントに直接接続できるFPCコネクタ付きの7.5インチ電子ペーパーパネル単体です。</td>
      <td>すでにXIAOをお持ちで、そこに画面を追加したいコンパクトかつ低コストなプロジェクトに最適です。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/ja/xiao_075inch_epaper_panel" target="_blank" rel="noopener noreferrer">XIAO Panel →</a></td>
    </tr>
  </table>
</div>

## ソフトウェアエコシステムの概要

すべてのSeeed電子ペーパー製品は、同じソフトウェアエコシステムに収束します。自分のスキルレベルに合ったワークフローを選択してください — 組み合わせて使うこともできます：

<div class="table-center">
  <table align="center">
    <tr>
      <th>ツール / プラットフォーム</th>
      <th>タイプ</th>
      <th>機能</th>
      <th>対応製品</th>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/ja/sensecraft_hmi_overview" target="_blank" rel="noopener noreferrer"><strong>SenseCraft HMI</strong></a></td>
      <td align="center">ノーコード（クラウド）</td>
      <td>AIジェネレーター、ギャラリー、キャンバス、RSS / Webコンテンツ、OTAデプロイメント。reTerminal E シリーズのデフォルトファームウェアです。</td>
      <td>reTerminal E1001 / E1002 / E1003 / E1004 · EE02 · EE03 · EE04 · EE05</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/ja/epaper_work_with_esphome" target="_blank" rel="noopener noreferrer"><strong>ESPHome / Home Assistant</strong></a></td>
      <td align="center">YAMLベース</td>
      <td>Home Assistantとネイティブに連携し、YAMLで宣言的にダッシュボードを構築します。</td>
      <td>reTerminal E1001 / E1002 / E1004 · EE04 · TRMNL DIY Kit · XIAO 7.5" Panel</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_trmnl" target="_blank" rel="noopener noreferrer"><strong>TRMNL</strong></a></td>
      <td align="center">クラウドダッシュボード</td>
      <td>プラグイン駆動のダッシュボード（カレンダー、ニュース、天気、金融、カスタムデータ）。</td>
      <td>reTerminal E1001 · E1002（モノクロモード）· TRMNL 7.5" DIY Kit · XIAO 7.5" Panel</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino" target="_blank" rel="noopener noreferrer"><strong>Arduino / PlatformIO / ESP-IDF</strong></a></td>
      <td align="center">コード（C/C++）</td>
      <td>GPIO、センサー、ネットワーク、カスタムレンダリングなどを完全にプログラム制御できます。</td>
      <td>すべてのESP32-S3製品（E1001–E1004、EE02–EE05、TRMNL Kit、XIAO Panel）</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_squareline_vision" target="_blank" rel="noopener noreferrer"><strong>SquareLine Vision</strong></a></td>
      <td align="center">ビジュアルUIデザイン</td>
      <td>ブラウザ上でドラッグ＆ドロップでLVGL UIを作成し、そのままコンパイル可能なコードとしてエクスポートします。</td>
      <td>reTerminal E1001 / E1002</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_eezstudio" target="_blank" rel="noopener noreferrer"><strong>EEZ Studio</strong></a></td>
      <td align="center">ビジュアルUIデザイン</td>
      <td>HMI画面をビジュアルに設計し、Arduino IDE経由でデプロイします。</td>
      <td>reTerminal E1001 / E1002 · EE04</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_lopaka" target="_blank" rel="noopener noreferrer"><strong>Lopaka</strong></a></td>
      <td align="center">ビジュアルUIデザイン</td>
      <td>モノクロおよびカラー電子ペーパーのレイアウト用コードをエクスポートできる、Webベースのドローイングツールです。</td>
      <td>reTerminal E1001 / E1002</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/ja/EN04_opendisplay" target="_blank" rel="noopener noreferrer"><strong>OpenEPaperLink / OpenDisplay</strong></a></td>
      <td align="center">オープンソースファームウェア（BLE）</td>
      <td>BLE駆動のオープンソース電子ペーパーファームウェアです。OpenDisplayはEN04をすぐに利用できる形でサポートし、OEPL Config BuilderはBreakout Board + XIAO nRF52840によるDIYパスを対象とします。</td>
      <td>EN04 · XIAO ePaper Breakout Board</td>
    </tr>
  </table>
</div>

## アプリケーションチュートリアル索引

以下の各チュートリアルでは、1つのプラットフォームをエンドツーエンドで解説します：

### スマートホーム & ダッシュボードフレームワーク

- [Work with ESPHome](https://wiki.seeedstudio.com/ja/epaper_work_with_esphome) — 主要なリファレンス：書き込みパス、汎用YAMLスケルトン、Home Assistant連携。製品別クックブック：[reTerminal E（Basic）](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_esphome)、[reTerminal E（Advanced）](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_esphome_advanced)、[EE04](https://wiki.seeedstudio.com/ja/EE04_with_esphome_advanced)、[XIAO 7.5" Panel](https://wiki.seeedstudio.com/ja/xiao_075inch_epaper_panel_esphome)、[TRMNL DIY Kit](https://wiki.seeedstudio.com/ja/ogdiy_kit_works_with_esphome)。
- [Work with TRMNL](https://wiki.seeedstudio.com/ja/reterminal_e10xx_trmnl) — TRMNLクラウドプラットフォームを通じてE-Inkダッシュボードをデプロイします。1つの記事でreTerminal E1001/E1002、TRMNL DIY Kit、XIAO 7.5" ePaper Panelをまとめて扱っており、タブで使用するハードウェアを選択できます。

### ノーコード / ビジュアルUIデザインツール

- [Work with SenseCraft HMI](https://wiki.seeedstudio.com/ja/EE04_with_hmi) — Seeedのノーコードビジュアルインターフェースプラットフォーム。reTerminal E シリーズおよびEE0xドライバボードをカバーします。
- [Work with SquareLine Vision](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_squareline_vision)
- [Work with EEZ Studio](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_eezstudio) — reTerminal E シリーズ + EE04の統合LVGLワークフロー。
- [Work with Lopaka](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_lopaka)

### コードベース開発

- [Work with Arduino](https://wiki.seeedstudio.com/ja/epaper_work_with_arduino) — 主要なリファレンス：IDEセットアップ、`Seeed_GFX`ライブラリ、`driver.h`生成。製品別クックブック：reTerminal E シリーズ — [ePaper Display](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino) & [Onboard Peripherals](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino_peripherals)、[TRMNL DIY Kit](https://wiki.seeedstudio.com/ja/ogdiy_kit_works_with_arduino)、[XIAO 7.5" Panel](https://wiki.seeedstudio.com/ja/xiao_075inch_epaper_panel_arduino)。
- [Work with PlatformIO](https://wiki.seeedstudio.com/ja/epaper_work_with_platformio) — 主要なリファレンス：VS Codeセットアップ、`platformio.ini`設定、`Seeed_GFX`セットアップ、および製品別のPlatformIO環境選択。製品別クックブック：[EE04 / EE0x PlatformIO](https://wiki.seeedstudio.com/ja/ee04_with_platformio)。

### オープンソースESL / OEPL

- [Work with OpenEPaperLink / OpenDisplay](https://wiki.seeedstudio.com/ja/EN04_opendisplay) — EN04 BLEキットと、ePaper Breakout Board + XIAO nRF52840によるDIYパスを1つの記事でカバーします。

## リソース

- [SenseCraft HMI Documentation](https://wiki.seeedstudio.com/ja/sensecraft_hmi_overview/)
- [ESP32-S3 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [XIAO Series Overview](https://wiki.seeedstudio.com/ja/xiao_topic_page/)
- [Seeed Studio ePaper Category Store](https://www.seeedstudio.com/catalogsearch/result/?q=epaper)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
