---
description: reTerminal E1004は、ESP32-S3を搭載した13.3インチのオープンソースフルカラーePaperディスプレイで、E Ink® Spectra™ 6技術とSenseCraft HMIサポートを特徴としています。
title: reTerminal E1004の入門ガイド
sidebar_position: 4
keywords:
  - reTerminal E1004
  - ePaper Display
  - ESP32-S3
  - SenseCraft HMI
  - E Ink Spectra 6
  - Smart Home Dashboard
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.webp
slug: /ja/getting_started_with_reterminal_e1004
sku: 100064156
last_update:
  date: 1/28/2026
  author: Allen
---

# reTerminal E1004の入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg" style={{width:1000, height:'auto'}}/></div>

## はじめに

reTerminal E1004は、最大3ヶ月のバッテリー寿命を持つ13.3インチのオープンソースフルカラーePaperディスプレイです。ESP32-S3を搭載し、簡単なダッシュボード作成のためのSenseCraft HMIノーコードUIプラットフォームをネイティブサポートし、さらなる開発のためにHome Assistant、Arduino、ESP-IDFをサポートしています。E Ink® Spectra™ 6フルカラーePaperディスプレイにより、デジタルフレームやカラフルなダッシュボード可視化に最適です。

### 特徴

-   **高解像度カラーディスプレイ：** 1200x1600ピクセルの高解像度を持つ13.3インチE Ink® Spectra™ 6フルカラーePaperディスプレイ。
-   **強力な処理能力：** 8MB PSRAMと32MB Flashを搭載したESP32-S3による堅牢なパフォーマンス。
-   **超低消費電力：** 内蔵5000mAhバッテリーで1回の充電で最大3ヶ月の使用をサポート（ディープスリープモード）。
-   **ノーコードUI開発：** デフォルトファームウェアはドラッグアンドドロップダッシュボード作成とAI支援設計のためのSenseCraft HMIをサポート。
-   **幅広い互換性：** Home Assistant（ESPHome）、Arduino、PlatformIO、ESP-IDFをサポート。
-   **豊富な接続性：** 統合された2.4GHz Wi-Fi（802.11 b/g/n）とBluetooth 5.0。
-   **統合センサー＆オーディオ：** 内蔵温度・湿度センサー、アラート用ブザー、将来の音声アプリケーション用予約マイク。
-   **すぐに使えるストレージ：** 16GB Micro SDカード付属（最大32GBまでサポート）。

## 仕様

| 項目 | 説明 |
| :--- | :--- |
| **製品名** | reTerminal E1004 |
| **プロセッサ** | ESP32-S3（8MB PSRAM搭載） |
| **ストレージ** | 32MB Flash、Micro SDカードサポート（最大32GB、16GB付属） |
| **ディスプレイ** | 13.3インチSpectra™ 6フルカラーePaper |
| **解像度** | 1200 x 1600ピクセル |
| **ワイヤレス接続** | 2.4GHz 802.11 b/g/n Wi-Fi、Bluetooth 5.0 |
| **センサー** | 温度、湿度センサー |
| **オーディオ** | ブザー（音声アラート）、マイク（予約） |
| **バッテリー** | 5000mAh |
| **電源入力** | USB-C 5V/1A |
| **ソフトウェアサポート** | SenseCraft HMI（デフォルト）、ESPHome、Arduino、PlatformIO、ESP-IDF |
| **動作温度** | 0-40°C |
| **寸法** | 376mm x 311mm x 40mm |

## アプリケーション

-   **低消費電力電子フォトフレーム：** 毎日の充電を心配することなく、紙のような品質で高解像度の家族写真やアートを表示。
-   **家族情報ボード：** カレンダー、通知、天気、ニュースをスタイリッシュで常時表示形式で追跡。
-   **ホームオートメーションダッシュボード：** Home Assistant経由でリアルタイムスマートホームデータ（温度、湿度、空気質）を可視化。
-   **スマートオフィスディスプレイ：** 会議室スケジュール、空き状況、または案内表示。
-   **小売・公共サイネージ：** エネルギー効率的なメニュー、スケジュール、または占有率表示。
-   **教育・プロトタイピング：** IoT、組み込みシステム、UI設計学習のための理想的なプラットフォーム。

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/specification.jpg" style={{width:1000, height:'auto'}}/></div>

1. **ページアップ・ダウンボタン：** ナビゲーションとページめくりに使用。
2. **画面更新ボタン：** E-inkディスプレイを手動で更新するために使用。
3. **赤色電源LED：** デバイスの電源状態を示す。
4. **USB-Cデータ・充電ポート：** デバイスの充電とデータ転送用。
5. **電源スイッチ：** デバイスの電源をオン・オフするため。
6. **緑色ステータスLED：** 現在の動作またはシステム状態を示す。
7. **Boot：** システム起動またはブートモード入力に使用。
8. **Reset：** ハードウェアコンポーネントのリセット用。
9. **拡張ポート：** 外部拡張モジュールまたは周辺機器の接続用。
10. **スタンド取り付けネジ：** デバイスをスタンドに固定するために使用。
11. **メタルスタンド：** デバイスの物理的サポートと安定性を提供。

## SenseCraft HMIの入門

reTerminal E1004には、パーソナライズされたダッシュボードを簡単に設計・展開できるノーコードプラットフォーム**SenseCraft HMI**をサポートするファームウェアがプリロードされています。

### ステップ1. 電源投入とネットワーク設定

1.  **電源ボタン**をオンにしてreTerminal E1004を起動します。
2.  スマートフォンを使用してデバイスのホットスポット（APモード）に接続し、Wi-Fi認証情報を設定します。
3.  画面に「ネットワーク設定」QRコードが表示されるか、ブラウザで192.168.4.1ページを開きます。
4.  インターネットに接続されると、デバイスは**デバイスコード**または**バインディングQRコード**を表示します。

<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/4.jpg" style={{ width: '49%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/code2.jpg" style={{ width: '49%', height: 'auto' }} />
</div>
### ステップ2. デバイスのバインド

1.  コンピュータのブラウザで[SenseCraft HMIプラットフォーム](https://sensecraft.seeed.cc/)にアクセスします。
2.  アカウントにログインします（まだお持ちでない場合は作成してください）。
3.  **Device Management**セクションに移動し、**Add Device**をクリックします。
4.  reTerminal E1004画面に表示された**デバイスコード**を入力してバインドプロセスを完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/12.jpg" style={{width:1000, height:'auto'}}/></div>

### ステップ3. プラットフォームでコンテンツを作成

1.  **Home Page**に移動して希望のテンプレートを選択するか、**Wrokspace**でゼロから作業を作成します。
2.  [質問がある場合は、このリンクをクリックしてHMIプラットフォームの使用方法を学んでください。](https://sensecraft-hmi-docs.seeed.cc/en/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2.jpg" style={{width:1000, height:'auto'}}/></div>

### ステップ4. デバイスにコンテンツを展開

1.  デザインが完成したら、**Preview**ボタンをクリックして外観を確認します。
2.  **Save**または**deploy**ボタンをクリックします。
3.  リストからバインドされたreTerminal E1004を選択します。
4.  プラットフォームはWi-Fi経由でデバイスにデータを送信します。ePaper画面が更新されて新しいダッシュボードが表示されます。

:::note
E Ink技術の性質上、画面の更新には画像を完全に更新し、ゴーストを除去するために数秒かかる場合があります。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/10.jpg" style={{width:1000, height:'auto'}}/></div>

## 技術サポート・製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>