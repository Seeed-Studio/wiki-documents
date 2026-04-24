---
description: reTerminal E1004 は、ESP32-S3 を搭載し、E Ink® Spectra™ 6 テクノロジーと SenseCraft HMI サポートを備えた、13.3 インチのオープンソースフルカラー電子ペーパーディスプレイです。
title: reTerminal E1004 入門ガイド
sidebar_position: 5
keywords:
  - reTerminal E1004
  - 電子ペーパーディスプレイ
  - ESP32-S3
  - SenseCraft HMI
  - E Ink Spectra 6
  - スマートホームダッシュボード
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg
slug: /getting_started_with_reterminal_e1004
sku: 100064156
last_update:
  date: 1/28/2026
  author: Allen
createdAt: '2026-01-29'
updatedAt: '2026-03-31'
url: https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1004/
---
# reTerminal E1004 入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

reTerminal E1004 は、最大 6 か月のバッテリー駆動が可能な 13.3 インチのオープンソースフルカラー電子ペーパーディスプレイです。ESP32-S3 を搭載し、ダッシュボードを簡単に作成できるノーコード UI プラットフォームである SenseCraft HMI をネイティブサポートするほか、さらなる開発のために Home Assistant、Arduino、ESP-IDF にも対応しています。E Ink® Spectra™ 6 フルカラー電子ペーパーディスプレイにより、デジタルフォトフレームやカラフルなダッシュボードの可視化に最適です。

### 特長

- **高精細カラーディスプレイ:** 13.3 インチ E Ink® Spectra™ 6 フルカラー電子ペーパーディスプレイ、1200x1600 ピクセルの高解像度。
- **高性能プロセッシング:** ESP32-S3（8MB PSRAM、32MB Flash 搭載）による高い処理性能。
- **超低消費電力:** 内蔵 5000mAh バッテリーにより、1 回の充電で最大 6 か月使用可能（6 時間ごとにリフレッシュした場合）。
- **ノーコード UI 開発:** 既定のファームウェアで SenseCraft HMI をサポートし、ドラッグ＆ドロップでのダッシュボード作成と AI 支援デザインが可能。
- **幅広い互換性:** Home Assistant（ESPHome）、Arduino、PlatformIO、ESP-IDF をサポート。
- **豊富な接続性:** 2.4GHz Wi-Fi（802.11 b/g/n）および Bluetooth 5.0 を内蔵。
- **センサーとオーディオを統合:** 温度・湿度センサーおよびアラート用ブザーを内蔵。
- **すぐに使えるストレージ:** 16GB Micro SD カードを同梱（最大 32GB まで対応）。

## 仕様

| 項目 | 説明 |
| :--- | :--- |
| **製品名** | reTerminal E1004 |
| **プロセッサ** | ESP32-S3（8MB PSRAM 搭載） |
| **ストレージ** | 32MB Flash、Micro SD カード対応（最大 32GB、16GB 同梱） |
| **ディスプレイ** | 13.3" Spectra™ 6 フルカラー電子ペーパー |
| **解像度** | 1200 x 1600 ピクセル |
| **無線接続** | 2.4GHz 802.11 b/g/n Wi-Fi、Bluetooth 5.0 |
| **センサー** | 温度・湿度センサー |
| **オーディオ** | ブザー（サウンドアラート） |
| **バッテリー** | 5000mAh |
| **電源入力** | USB-C 5V/1A |
| **ソフトウェアサポート** | SenseCraft HMI（デフォルト）、ESPHome、Arduino、PlatformIO、ESP-IDF |
| **動作温度** | 0-40°C |
| **寸法** | 376mm x 311mm x 40mm |

## アプリケーション

- **低消費電力電子フォトフレーム:** 高解像度の家族写真やアートを、紙のような質感で表示し、毎日の充電を気にせず使用できます。
- **ファミリーインフォメーションボード:** カレンダー、通知、天気、ニュースを、スタイリッシュで常時表示の形式で確認できます。
- **ホームオートメーションダッシュボード:** Home Assistant を介して、スマートホームのリアルタイムデータ（温度、湿度、空気質）を可視化します。
- **スマートオフィスディスプレイ:** 会議室のスケジュール、空き状況、案内表示などを表示します。
- **小売・公共サイネージ:** 省エネなメニュー、時刻表、占有状況インジケーターなどに利用できます。
- **教育・プロトタイピング:** IoT、組み込みシステム、UI デザイン学習に最適なプラットフォームです。

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/specification.jpg" style={{width:1000, height:'auto'}}/></div>

1. **ページアップ／ダウンボタン:** ナビゲーションやページ送りに使用します。
2. **画面リフレッシュボタン:** E-ink ディスプレイを手動でリフレッシュするために使用します。
3. **赤色電源 LED:** デバイスの電源状態を示します。
4. **USB-C データ・充電ポート:** デバイスの充電およびデータ転送に使用します。
5. **電源スイッチ:** デバイスの電源をオン／オフします。
6. **緑色ステータス LED:** 現在の動作状態またはシステムステータスを示します。
7. **Boot:** システムのブートやブートモードへの移行に使用します。
8. **Reset:** ハードウェアコンポーネントをリセットします。
9. **拡張ポート:** 外部拡張モジュールや周辺機器を接続するためのポートです。
10. **スタンド固定用ネジ:** デバイスをスタンドに固定するために使用します。
11. **金属スタンド:** デバイスに物理的な支持と安定性を提供します。

## SenseCraft HMI を使ったセットアップ

reTerminal E1004 には、ノーコードプラットフォームである **SenseCraft HMI** をサポートするファームウェアがプリインストールされており、パーソナライズされたダッシュボードを簡単に設計・展開できます。

### ステップ 1. 電源オンとネットワーク設定

1. **Power Button** をオンにして reTerminal E1004 の電源を入れます。
2. スマートフォンを使用してデバイスのホットスポット（AP モード）に接続し、Wi-Fi の認証情報を設定します。
3. 画面に「Network Configuration」の QR コードが表示されるか、ブラウザで 192.168.4.1 ページを開きます。
4. インターネットに接続されると、デバイスに **Device Code** または **Binding QR Code** が表示されます。

<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/4.jpg" style={{ width: '49%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/code2.jpg" style={{ width: '49%', height: 'auto' }} />
</div>
### ステップ 2. デバイスをバインドする

1. パソコンのブラウザで [SenseCraft HMI Platform](https://sensecraft.seeed.cc/) にアクセスします。
2. アカウントにログインします（未作成の場合は新規作成します）。
3. **Device Management** セクションに移動し、**Add Device** をクリックします。
4. reTerminal E1004 の画面に表示されている **Device Code** を入力して、バインド処理を完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/12.jpg" style={{width:1000, height:'auto'}}/></div>

### ステップ 3. プラットフォーム上でコンテンツを作成する

1. **Home Page** に移動し、使用したいテンプレートを選択するか、**Wrokspace** で一から作品を作成します。
2. [HMI Platform の使い方に関して質問がある場合は、このリンクをクリックして学習してください。](https://sensecraft-hmi-docs.seeed.cc/en/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2.jpg" style={{width:1000, height:'auto'}}/></div>

### ステップ 4. コンテンツをデバイスにデプロイする

1. デザインが完成したら、**Preview** ボタンをクリックして見た目を確認します。
2. **Save** または **deploy** ボタンをクリックします。
3. 一覧からバインド済みの reTerminal E1004 を選択します。
4. プラットフォームが Wi-Fi 経由でデータをデバイスに送信します。電子ペーパースクリーンがリフレッシュされ、新しいダッシュボードが表示されます。

:::note
E Ink テクノロジーの特性上、画像が完全に更新されゴーストが消えるまで、画面のリフレッシュに数秒かかる場合があります。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/10.jpg" style={{width:1000, height:'auto'}}/></div>

## トラブルシューティング

### Q1: デバイスの電源が入らない

- 電源スイッチが ON の位置にあることを確認します
- USB-C ケーブルを接続してデバイスを充電します
- 赤色 LED が常時点灯しているか確認します（充電中を示します）
- バッテリー駆動の場合は、バッテリーが正しく接続され、充電されていることを確認します

### Q2: Wi-Fi に接続できない

- 正しい Wi-Fi パスワードを入力しているか確認します
- Wi-Fi ネットワークが正常に動作しているか確認します
- Wi-Fi ルーターが 2.4GHz ネットワークをサポートしているか確認します（5GHz はサポートされていません）
- デバイスを Wi-Fi ルーターの近くに移動してみます

### Q3: ディスプレイが更新されない

- リフレッシュボタンを押して手動で更新をトリガーします
- デバイスが Wi-Fi に接続されているか確認します（隅に切断アイコンが表示されていないこと）
- SenseCraft アカウントで、ダッシュボードが正しくデプロイされているか確認します
- 問題が解決しない場合は、デバイスを再起動してみます
- 再起動後もデバイスが反応しない場合は、SenseCraft HMI プラットフォームで対応するファームウェアを書き込み直し、デバイスが正常にリフレッシュできるか確認します

### Q4: ネットワーク接続が失われた

- デバイスは既知のネットワークへの再接続を自動的に試行します
- 再接続されると、Wi-Fi 切断アイコンは消えます
- 再接続できない場合は、上記のネットワークリセット手順に従ってください

### Q5: macOS でシリアルポート（COM）が見つからない

Mac が USB 経由で reTerminal を認識しない場合は、次の簡易ガイドに従って CH340/CH340K ドライバーをインストールしてください。

**ステップ 1. ドライバーのダウンロードとインストール**
[official WCH page](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html) からドライバーをダウンロードし、`CH34xVCPDriver.pkg` を実行します。 
:::tip
macOS によってインストールがブロックされた場合は、**System Settings → Privacy & Security** に移動し、ブロックされた WCH ソフトウェアを探して **Allow** をクリックします。
:::
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/02_installer_welcome.jpg" style={{ width: '48%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/03_install_success.jpg" style={{ width: '48%', height: 'auto' }} />
</div>

**ステップ 2. ドライバー拡張機能を有効化する（重要）**
Launchpad から **CH34xVCPDriver** アプリを開き、**Install** をクリックしてから、**System Settings → General → Login Items & Extensions → Driver Extensions** に移動します。**CH34xVCPDriver Extensions** を **ON**（青）に切り替えます。
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle1.jpg" style={{ width: '48%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle2.jpg" style={{ width: '48%', height: 'auto' }} />
</div>

**ステップ 3. 接続と確認**
デバイスの **power switch is ON** であることを確認し、**data USB-C cable**（充電専用ではないもの）を使用します。Terminal を開き、次を実行します:
```bash
ls /dev/tty.wch*
# Expected output: /dev/tty.wchusbserialxxx
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/06_check%20installation.jpg" style={{width:500, height:'auto'}}/></div>

出力にデバイスパスが表示されていれば、ドライバは正しくインストールされており、reTerminal を使用する準備が整っています！

## リソース

- [reTerminal E1004 回路図 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004523_reTerminal%20E1004_V1.0_SCH_260105.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
