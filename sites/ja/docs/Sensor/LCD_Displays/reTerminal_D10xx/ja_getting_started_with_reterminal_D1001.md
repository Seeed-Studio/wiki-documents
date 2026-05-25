---
description: この記事では、reTerminal D1001 をすばやく使い始める方法を案内します。
title: reTerminal D1001 入門ガイド
image: https://files.seeedstudio.com/wiki/reTerminal_d10xx/1-reTeriminal-D1001.webp
slug: /getting_started_with_reterminal_d1001
sku: 100058144
sidebar_position: 2
last_update:
  date: 03/06/2026
  author: Jackson.Li
createdAt: '2026-03-06'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_d1001/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reTerminal D1001 入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/1-reTeriminal-D1001.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=D1001" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div><br />

## 製品紹介

### 概要
reTerminal D1001 は、Espressif の最新ハイパフォーマンスチップ **ESP32-P4** を搭載したインテリジェントな大画面インタラクション端末です。高性能なグラフィックス表示、動画処理、音声インタラクションを必要とする AIoT アプリケーションシナリオ向けに設計されており、ESP32-P4 の強力な 400MHz デュアルコア RISC-V プロセッサと豊富なマルチメディア周辺インターフェースを活用して、複雑なエッジコンピューティングやマルチメディアタスクを容易に処理できます。

### 主要特長
*   **リッチなインターフェースを支える強力な処理性能**: 32 MB PSRAM を備えた 32 ビット RISC-V デュアルコアプロセッサである ESP32-P4 を搭載し、グラフィックスが豊富なインターフェース、滑らかなリアルタイムインタラクション、さらに多くのエッジアプリケーションに必要な性能を提供します。
*   **無線通信の統合**: オンボードの ESP32-C6 により、Wi-Fi 6、Bluetooth 5 (LE)、および 802.15.4 (Zigbee/Thread/Matter) に対応した無線通信が可能です。メインプロセッサは SDIO インターフェースを介して通信サブシステムと接続され、接続デバイスや IoT アプリケーション向けに信頼性の高い無線ネットワークを実現します。
*   **現場対応のセルラー拡張**: USB 2.0 信号をサポートする内蔵 mPCIe スロットを備え、シームレスな 4G LTE 接続を実現し、遠隔地環境でも信頼性の高いネットワーク接続を提供します。フィールドでの展開、遠隔監視、安定した無線通信が不可欠な常時接続エッジアプリケーションに最適です。
*   **豊富な HMI をサポートする 8 インチタッチディスプレイ**: MIPI-DSI 接続で駆動され、縦向き・横向きの両方をサポートする 8 インチ 800 × 1280 静電容量式 LCD ディスプレイにより、洗練されたダッシュボード、スマートコントロールパネル、その他 UI 重視の組み込み機器を構築するための十分な表示領域を提供します。
*   **ビジョン開発向けカメラインターフェース**: SC2356 センサーベースの MIPI-CSI カメラを搭載し、最大 1600 × 1200 / 30 fps に対応しているため、箱から出してすぐに画像キャプチャ、ライブプレビュー、組み込みビジョン開発に利用できます。
*   **音声・オーディオ機能**: デュアルマイクと内蔵スピーカーにより、音声入力、サウンドキャプチャ、および再生が可能です。ES7210 オーディオ ADC によるエコーキャンセレーションに対応し、AI アシスタントや音声対応アプリケーション向けに、よりクリアな音声取得を実現します。

### ハードウェア仕様

| カテゴリ | パラメータ | 説明 |
| :--- | :--- | :--- |
| **基本** | プロセッサ | ESP32-P4NRW32（32MB PSRAM 搭載） |
| | 無線 SoC | ESP32-C6 |
| | ストレージ | 32MB QSPI Flash、Micro SD カード対応 |
| **ディスプレイ** | サイズ | 8” |
| | 解像度 | 800×1280 |
| | 輝度 (cd/㎡) | 250 |
| | 最適視野角 (時方向) | 全方位 |
| | インターフェース | MIPI-DSI |
| | ドライバ IC | 9365DA-H3 |
| | タッチ方式 | 静電容量式タッチ |
| | タッチ IC | GSL3670 |
| | 向き | 縦/横回転に対応 |
| **カメラ** | センサー | SC2356 |
| | 有効画素数 | 1608×1208 |
| | 最大フレームレート | (1600*1200)30fps 10bit |
| | インターフェース | MIPI-CSI |
| **オーディオ** | マイク | デュアルマイク |
| | スピーカー | 2W@8Ω NS4150B |
| | オーディオ IC | Codec: ES8311 <br /> Audio ADC: ES7210 |
| **無線通信** | Wi-Fi | Wi-Fi 6 (2.4GHz) |
| | BLE | Bluetooth 5 (LE) |
| | セルラー | 4G 用 Mini-PCIe（オプション） |
| | アンテナ | オンボードアンテナおよび外部アンテナ |
| **電源** | バッテリー | 2500mAh |
| | 電源入力 | USB Type-C 5V |
| **その他** | RTC | PCF8563T（タイマー割り込みによるウェイクアップ対応） |
| | モーションセンサー | LSM6DS3TR 6 軸 |

### ハードウェア概要
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/hardware.webp" style={{width:800, height:'auto'}}/></div>

### アプリケーション
*   **スマートホーム中央ハブ**: 照明、セキュリティ、ホームオートメーションシステムを管理するためのオールインワン HMI デバイス。
*   **ビデオインターホンシステム**: スマートエントリー、ドアベル、セキュリティアクセス向けのリアルタイム映像コミュニケーション。
*   **インタラクティブ AI アシスタント**: 直感的なビジュアルフィードバックとレスポンシブな操作を提供する音声対応スマートディスプレイ。
*   **産業用データダッシュボード**: リアルタイムの装置トラッキングと商用データの可視化を行うプロフェッショナルな監視端末。
*   **エッジビジョン端末**: 画像キャプチャ、スキャン、インタラクティブなリテールキオスク向けのコンパクトなソリューション。


## ESP-IDF を使った入門

このセクションでは、開発環境の構築と、工場出荷時デモファームウェアの実行手順を説明し、reTerminal D1001 の強力な機能を体験できるようにします。

### ESP-IDF 開発環境の構成

**ステップ 1. ESP-IDF をインストールする**

Espressif の最新クロスプラットフォームインストールツール **ESP-IDF Installation Manager** を使用します。

1.  **ESP-IDF をダウンロード**: [ESP-IDF Installation Manager ダウンロードページ](https://dl.espressif.cn/dl/eim/)にアクセスし、**Offline Installer** タブを選択して、**Windows** 版（v5.4.2 以上を推奨）を選び、**Download** をクリックして `.zst` ファイルと `.exe` ファイルの両方を取得します。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/1.png" style={{width:600, height:'auto'}}/></div>
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/2.png" style={{width:600, height:'auto'}}/></div>

2.  **アーカイブからインストール**: インストーラー（`eim-gui-windows-x64.exe`）を実行し、**Install from archive** を選択します（オフラインパッケージは自動的に検出されます）。インストールパスを選択し（デフォルトを推奨。中国語文字やスペースは避けてください）、**Start Installation** をクリックします。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/3.png" style={{width:800, height:'auto'}}/></div>
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/4.png" style={{width:800, height:'auto'}}/></div>
3.  **インストール完了**: 完了したら、**Install Driver** をクリックしてセットアップを完了します。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/0_5.png" style={{width:800, height:'auto'}}/></div>

**ステップ 2. Visual Studio Code と ESP-IDF 拡張機能をインストールする**

1.  [Visual Studio Code](https://code.visualstudio.com/) をダウンロードしてインストールします。
    *   インストール中に、プロジェクトフォルダを素早く開くため **"Add 'Open with Code' action to Windows Explorer file context menu"** にチェックを入れることを推奨します。
2.  VS Code を開き、サイドバーの **Extensions** アイコンをクリックするか（または `Ctrl + Shift + X` を使用）、Extensions ビューを開きます。
3.  検索ボックスに `ESP-IDF` と入力し、**ESP-IDF** 拡張機能を見つけて **Install** をクリックします。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/5.png" style={{width:600, height:'auto'}}/></div>

### ファームウェアリポジトリを取得する
GitHub から公式の reTerminal D1001 リポジトリをダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/6.png" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/reTerminal-D1001" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>クリックしてダウンロード</button></p>
</a>
</div>

### デモファームウェアをビルドして書き込む
1.  **プロジェクトを開く**: VS Code を使ってクローンした `reTerminal-D1001` フォルダを開きます。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/7.png" style={{width:600, height:'auto'}}/></div>

    :::tip
    プロジェクト内の `examples/factory_firmware` ディレクトリを必ず開いてください。ルートディレクトリを開くとコンパイルエラーの原因になる場合があります。
    :::

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/8.png" style={{width:800, height:'auto'}}/></div>
2.  **ターゲットチップを設定**:
    *   VS Code 画面下部のステータスバーで、ターゲットチップとして `esp32p4` を選択します。
    *   あるいはターミナルで次を実行します: `idf.py set-target esp32p4`。
3.  **書き込みモードを選択**:
    *   書き込み前に正しい書き込みモードを選択します。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/uart.jpg" style={{width:800, height:'auto'}}/></div>
4.  **ビルド、書き込み、モニター**:
    *   USB Type-C でデバイスをコンピュータに接続します。
    *   VS Code のステータスバーにある **"Flash"（炎のアイコン）** ボタンをクリックすると、ビルド、書き込み、モニター起動を 1 ステップで実行できます。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/9.jpg" style={{width:800, height:'auto'}}/></div>

### デモ機能を体験する
ファームウェアの書き込みが正常に完了すると、デバイスは自動的に再起動します。次のようにデバイスとインタラクションできます。

*   **電源と画面の制御**: 緑のボタンを 3 秒以上長押しして電源を入れます。短く押すと画面がオフになり、もう一度短く押すと復帰します。
*   **スムーズな UI インタラクション**: スムーズなスライド遷移やアプリ起動アニメーションを体験できます。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/UI.gif" style={{width:300, height:'auto'}}/></div>
*   **カメラプレビュー**: Camera App を開いてリアルタイム映像を表示します。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/10.jpg" style={{width:300, height:'auto'}}/></div>
*   **センサーデモ**: デバイスを回転させて、画面の自動回転効果やその他のセンサーデータを確認します。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/sensor.gif" style={{width:300, height:'auto'}}/></div>


## リソース

*   **ハードウェア資料**:
    *   [reTerminal D1001 メインボード V1.0 SCH & PCB](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/reTerminal_D1001_main_board_V1.0_SCH_&_PCB_251128.zip)
    *   [reTerminal D1001 回路図 (PDF)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/reTerminal%20D1001_sch.pdf)
*   **データシート**:
    *   [ESP32-P4NRW32 データシート](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/Espressif_ESP32-P4NRW32_Datasheet.pdf)
    *   [ESP32-C6 データシート](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/esp32-c6_datasheet_en.pdf)
    *   [ディスプレイ データシート (GJX080C13-31BY)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/GangJingXin_GJX080C13-31BY_Datasheet.pdf.pdf)
    *   [IMU センサー データシート (LSM6DS3TR)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/ST_LSM6DS3TR_Datasheet.pdf)
    *   [カメラモジュール データシート (SC2356)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/ZD2481-D1001-V2.0_Datasheet.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、お客様ができる限りスムーズに製品をご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
