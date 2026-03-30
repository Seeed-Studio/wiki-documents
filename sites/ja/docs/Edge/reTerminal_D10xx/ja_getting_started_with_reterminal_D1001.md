---
description: この記事では、reTerminal D1001 をすばやく使い始めるための手順を案内します。
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
reTerminal D1001 は、Espressif の最新高性能チップ **ESP32-P4** を搭載したインテリジェント大画面インタラクション端末です。高性能なグラフィック表示、ビデオ処理、音声インタラクションを必要とする AIoT アプリケーションシナリオ向けに設計されており、ESP32-P4 の強力な 400MHz デュアルコア RISC-V プロセッサと豊富なマルチメディア周辺インターフェースを活用して、複雑なエッジコンピューティングやマルチメディアタスクを容易に処理します。

### 主な特長
*   **リッチなインターフェースを支える強力な処理能力**: 32 ビット RISC-V デュアルコアプロセッサ（HP コア 400MHz）、32 MB PSRAM、内蔵 JPEG コーデックエンジンを備えた ESP32-P4 を搭載し、グラフィックリッチなインターフェース、スムーズなリアルタイムインタラクション、複雑なエッジ AI タスクに必要な性能を提供します。
*   **8 インチタッチディスプレイと充実した HMI サポート**: MIPI-DSI 接続の 8 インチ 800 × 1280 静電容量式タッチディスプレイは、IMU による縦向き・横向きの両モードに対応し、洗練されたダッシュボード、スマートコントロールパネル、その他 UI 重視の組み込み機器を構築するための十分な表示領域を提供します。
*   **無線通信機能の統合**: オンボードの ESP32-C6 により、Wi-Fi 6（2.4 GHz）および Bluetooth 5（LE）による無線通信を実現します。メインプロセッサは SDIO インターフェースを介して通信サブシステムと接続されており、接続デバイスや IoT アプリケーション向けに信頼性の高い無線ネットワーキングを可能にします。
*   **ビジョン開発向けカメラインターフェース**: 最大 1600 × 1200@30 fps をサポートする 2MP MIPI-CSI カメラ（SC2356）を搭載しており、箱から出してすぐに画像キャプチャ、ライブプレビュー、組み込みビジョン開発を行うことができます。
*   **音声・オーディオ機能**: デュアルマイクと内蔵スピーカーにより、音声入力、サウンドキャプチャ、マルチメディア再生が可能です。ES7210 オーディオ ADC によるエコーキャンセレーションに対応しており、AI アシスタントや音声対応アプリケーション向けにクリアな音声キャプチャを実現します。
*   **豊富な拡張性**: GPIO、I2C、UART などの拡張インターフェースを備え、多様なセンサーやアクチュエータの接続ニーズに対応します。

<!--
### Target Users & Applications
*   **Target Users**:
    *   **Embedded Developers**: Professionals seeking high-performance, low-cost HMI solutions to replace Linux/Android.
    *   **Smart Home Integrators**: Teams needing customized central control panels and smart switches.
    *   **Geeks & Makers**: Enthusiasts exploring the limits of ESP32 performance and developing desktop gadgets or smart terminals.
*   **Applications**: Smart Home Control Panels, Industrial HMI Panels, AI Voice Assistants, Video Surveillance Terminals, Educational Development Kits.
-->


### ハードウェア仕様

| 機能モジュール | 詳細パラメータ | 備考 |
| :--- | :--- | :--- |
| **メインプロセッサ** | **ESP32-P4NRW32** | 400MHz デュアルコア RISC-V、32MB PSRAM |
| **ストレージ** | 32MB Nor Flash | MicroSD カード拡張対応 |
| **無線接続** | Wi-Fi 6 & Bluetooth 5 (LE) | ESP32-C6（SDIO インターフェース）によって提供 |
| **ディスプレイ** | 8 インチ MIPI-DSI タッチスクリーン | 解像度: 800x1280 <br /> 輝度: 250 cd/㎡ <br /> ドライバ IC: 9365DA-H3 <br /> タッチ IC: GSL3670（静電容量式） |
| **カメラ** | 2MP (SC2356) | 解像度: 1608x1208 <br /> インターフェース: MIPI-CSI |
| **オーディオ** | **Codec**: ES8311 <br /> **ADC**: ES7210 <br /> **PA**: NS4150B (2W@8Ω) <br /> **入力**: デュアルマイクアレイ | 高忠実度オーディオ入出力 |
| **ネットワーク拡張** | mPCIe スロット | USB 2.0 信号対応、オプションの 4G モジュール |
| **センサー** | 6 軸 IMU (LSM6DS3TR) | 加速度センサー + ジャイロスコープ、画面自動回転対応 |
| **インターフェース & ボタン** | USB Type-C（電源/デバッグ）<br /> 2 列 2.54mm 拡張ヘッダ <br /> BOOT/Reset（ピンホール）<br /> 電源ボタン | 短押しでスリープ / 長押しで電源オン/オフに対応 |
| **電源管理** | 2500mAh リチウムバッテリ <br /> RTC コインセルホルダ | USB Type-C 5V 入力 <br /> 充電インジケータ & ステータス RGB LED |


## ESP-IDF で始める

このセクションでは、開発環境のセットアップと、工場出荷時デモファームウェアの実行によって reTerminal D1001 の強力な機能を体験する手順を説明します。

### ESP-IDF 開発環境の構成

**ステップ 1. ESP-IDF をインストールする**

Espressif の最新クロスプラットフォームインストールツール **ESP-IDF Installation Manager** を使用します。

1.  **ESP-IDF をダウンロード**: [ESP-IDF Installation Manager Download Page](https://dl.espressif.cn/dl/eim/) にアクセスし、**Offline Installer** タブを選択して、**Windows** 版（v5.4.2 以上を推奨）を選び、**Download** をクリックして `.zst` ファイルと `.exe` ファイルの両方を取得します。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/1.png" style={{width:600, height:'auto'}}/></div>
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/2.png" style={{width:600, height:'auto'}}/></div>

2.  **アーカイブからインストール**: インストーラ（`eim-gui-windows-x64.exe`）を実行し、**Install from archive** を選択します（オフラインパッケージは自動検出されます）。インストールパスを選択し（デフォルト推奨。日本語やスペースの使用は避けてください）、**Start Installation** をクリックします。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/3.png" style={{width:800, height:'auto'}}/></div>
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/4.png" style={{width:800, height:'auto'}}/></div>
3.  **インストール完了**: 完了したら **Install Driver** をクリックしてセットアップを完了します。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/0_5.png" style={{width:800, height:'auto'}}/></div>

**ステップ 2. Visual Studio Code と ESP-IDF 拡張機能をインストールする**

1.  [Visual Studio Code](https://code.visualstudio.com/) をダウンロードしてインストールします。
    *   インストール中に、プロジェクトフォルダを素早く開けるように **"Add 'Open with Code' action to Windows Explorer file context menu"** にチェックを入れることを推奨します。
2.  VS Code を開き、サイドバーの **Extensions** アイコンをクリックするか（または `Ctrl + Shift + X` を使用）、Extensions ビューを開きます。
3.  検索ボックスに `ESP-IDF` と入力し、**ESP-IDF** 拡張機能を見つけて **Install** をクリックします。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/5.png" style={{width:600, height:'auto'}}/></div>

### ファームウェアリポジトリを取得する
GitHub から公式の reTerminal D1001 リポジトリをダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/6.png" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/reTerminal-D1001" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>ここをクリックしてダウンロード</button></p>
</a>
</div>

### デモファームウェアのビルドと書き込み
1.  **プロジェクトを開く**: VS Code を使用して、クローンした `reTerminal-D1001` フォルダを開きます。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/7.png" style={{width:600, height:'auto'}}/></div>

    :::tip
    プロジェクト内の `examples/factory_firmware` ディレクトリを開いていることを必ず確認してください。ルートディレクトリを開くとコンパイルエラーの原因になる場合があります。
    :::

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/8.png" style={{width:800, height:'auto'}}/></div>
2.  **ターゲットチップを設定**:
    *   VS Code 下部のステータスバーで、ターゲットチップとして `esp32p4` を選択します。
    *   またはターミナルで `idf.py set-target esp32p4` を実行します。
3.  **書き込みモードを選択**:
    *   書き込み前に正しい書き込みモードを選択します。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/uart.jpg" style={{width:800, height:'auto'}}/></div>
4.  **ビルド、書き込み、モニタ**:
    *   USB Type-C 経由でデバイスをコンピュータに接続します。
    *   VS Code のステータスバーにある **"Flash"（炎のアイコン）** ボタンをクリックして、ビルド、書き込み、モニタの起動をワンステップで実行します。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/9.jpg" style={{width:800, height:'auto'}}/></div>

### デモ機能を体験する
ファームウェアの書き込みが正常に完了すると、デバイスは自動的に再起動します。次のようにデバイスとインタラクションできます。

*   **電源と画面の制御**: 緑色のボタンを 3 秒以上長押しして電源をオンにします。ボタンを短押しすると画面がオフになり、再度短押しすると復帰します。
*   **スムーズな UI インタラクション**: スムーズなスライド遷移やアプリ起動アニメーションを体験できます。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/UI.gif" style={{width:300, height:'auto'}}/></div>
*   **カメラプレビュー**: Camera App を開いてリアルタイム映像を確認します。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/10.jpg" style={{width:300, height:'auto'}}/></div>
*   **センサーデモ**: デバイスを回転させて画面自動回転の効果を確認したり、その他のセンサーデータを確認したりできます。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/sensor.gif" style={{width:300, height:'auto'}}/></div>


## リソース

*   **ハードウェアドキュメント**：
    *   [reTerminal D1001 メインボード V1.0 SCH & PCB](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/reTerminal_D1001_main_board_V1.0_SCH_&_PCB_251128.zip)
    *   [reTerminal D1001 回路図 (PDF)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/reTerminal%20D1001_sch.pdf)
*   **データシート**：
    *   [ESP32-P4NRW32 データシート](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/Espressif_ESP32-P4NRW32_Datasheet.pdf)
    *   [ESP32-C6 データシート](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/esp32-c6_datasheet_en.pdf)
    *   [ディスプレイ データシート (GJX080C13-31BY)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/GangJingXin_GJX080C13-31BY_Datasheet.pdf.pdf)
    *   [IMU センサーデータシート (LSM6DS3TR)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/ST_LSM6DS3TR_Datasheet.pdf)
    *   [カメラモジュール データシート (SC2356)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/ZD2481-D1001-V2.0_Datasheet.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
