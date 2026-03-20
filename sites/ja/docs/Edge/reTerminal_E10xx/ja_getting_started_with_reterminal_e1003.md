---
description: reTerminal E1003 は、16 階調グレースケールと 1404×1872 ピクセルの高解像度を備え、最大 6 か月のバッテリー駆動が可能な、10.3 インチのタッチ対応オープンソース白黒 ePaper ディスプレイです。
sku: 100090602
title: reTerminal E1003 入門ガイド
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.webp
slug: /getting_started_with_reterminal_e1003
last_update:
  date: 3/19/2026
  author: Jackson.Li
---

# reTerminal E1003 入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=e1003" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

reTerminal E1003 は、16 階調グレースケールと 1404×1872 ピクセルの高解像度を備え、最大 6 か月のバッテリー駆動が可能な、10.3 インチのタッチ対応オープンソース白黒 ePaper ディスプレイです。ESP32-S3 を搭載し、ダッシュボードを簡単に作成できるノーコード UI プラットフォームである SenseCraft HMI をネイティブサポートするほか、さらなる開発のために Home Assistant（ESPHome & Open Display 経由）、Arduino、PlatformIO にも対応しています。スマートホームのダッシュボードの可視化と制御、オフィスの情報表示、教育プロジェクトなど、あらかじめ使えるタッチ対応デバイスとして、美しい表示と柔軟なカスタマイズ性を提供し、あらゆるニーズに応えます。

## 特長

- **最大 16 階調のグレースケールによる高い視認性:** 16 階調の繊細なグレースケールにより、テキストやグラフィックスのあらゆるディテールが非常にシャープかつクリアに表示されます。
- **超低消費電力:** ePaper は更新時のみ電力を消費するため、バッテリー寿命が長くなり、省エネルギー性も向上します。
- **SenseCraft HMI 対応:** reTerminal E シリーズ ディスプレイは、標準ファームウェアで SenseCraft HMI をサポートします。
- **幅広い用途:** TTL パラレルインターフェース（マルチライン・高スループット）による高速リフレッシュをサポートし、低レイテンシな更新が可能なため、スマートホーム用コントロールパネルに最適です。
- **高解像度タッチ ePaper ディスプレイ:** 10.3 インチ 1404×1872 白黒 ePaper ディスプレイに、高感度タッチスクリーンを組み合わせ、直感的なフルスクリーン操作を実現します。
- **インテリアニーズへの適応:** 配線不要で自由度が高く、壁掛けとデスクトップ設置に対応し、縦向き・横向きの柔軟な切り替えが可能です。

:::note
SenseCraft HMI プラットフォームは現在ベータトライアル段階であり、機能は継続的に改善されます。現時点では、AI 生成および UI 生成の回数に制限があります。今後、SenseCraft HMI キャンバスはタッチインタラクション設定を順次サポートしていく予定です。続報をお待ちください。
:::

## 仕様

| 項目 | 説明 |
| :--- | :--- |
| **製品名** | reTerminal E1003 |
| **プロセッサ** | ESP32-S3（8MB PSRAM 搭載） |
| **ストレージ** | 32MB Flash、Micro SD カード対応 |
| **ディスプレイ** | 10.3" 白黒 / 16 階調グレースケール |
| **解像度** | 1404x1872 ピクセル |
| **Micro SD カード** | 最大 32GB SD カード対応、FAT32 フォーマット |
| **無線接続** | 2.4GHz 802.11 b/g/n Wi-Fi、Bluetooth 5.0 |
| **センサ** | 温度・湿度センサ |
| **マイク** | 音声インタラクション用途向けに予約 |
| **オーディオ** | ブザーによるサウンドアラート |
| **バッテリー** | 3000mAh |
| **電源入力** | USB-C 5V/1A |
| **ソフトウェアサポート** | 標準ファームウェアで SenseCraft HMI(https://sensecraft.seeed.cc/hmi/) をサポート<br />Arduino/PlatformIO 開発プラットフォームをサポート |
| **動作温度** | 0-40°C |
| **寸法** | 224mm*187mm*18.6mm |

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2.jpg" style={{width:1000, height:'auto'}}/></div>

1. **画面リフレッシュボタン**
2. **ページアップ / ダウンボタン**
3. **Wi-Fi アンテナエリア**
4. **MicroSD カード / TF カードポート**
5. **電源スイッチ**
6. **赤色電源 LED**
7. **緑色ステータス LED**
8. **USB-C データ・充電ポート**
9. **拡張ポート**
10. **スタンド取り付け用ネジ穴**
11. **スタンド**
12. **スタンド取り付けネジ**

## アプリケーション

- **ホームオートメーションダッシュボード:** Home Assistant を介して、温度、湿度、空気質などのスマートホームデータをリアルタイムに表示します。
- **低消費電力白黒電子フォトフレーム:** SenseCraft HMI またはアプリを使用して、アルバム内の写真をオンラインでリモートアップロードできます。大型・高解像度の白黒電子ペーパー画面と組み合わせることで、超低消費電力の画像表示を実現し、バッテリー寿命を心配する必要がなくなります。
- **スマートオフィスディスプレイ:** 会議室の空き状況、オフィスのスケジュール、案内表示などを、低消費電力で常時表示可能な ePaper ディスプレイに表示します。
- **小売・公共情報ディスプレイ:** メニュー、時刻表、在室状況表示などに適した、長時間駆動の低消費電力 ePaper サインとして利用できます。

## SenseCraft HMI を使い始める

reTerminal E1003 には、ノーコードプラットフォーム **SenseCraft HMI** をサポートするファームウェアがプリインストールされており、パーソナライズされたダッシュボードを簡単に設計・デプロイできます。

### ステップ 1. 電源オンとネットワーク設定

1. **電源ボタン** をオンにして reTerminal E1003 の電源を入れます。
2. スマートフォンを使用して、デバイスのホットスポット（AP モード）に接続し、Wi-Fi の認証情報を設定します。
3. 画面に「Network Configuration」の QR コードが表示されるか、ブラウザで 192.168.4.1 ページを開きます。
4. インターネットに接続されると、デバイスに **Device Code** または **Binding QR Code** が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/3.jpg" style={{width:800, height:'auto'}}/></div>

### ステップ 2. デバイスをバインドする

1. パソコンのブラウザで [SenseCraft HMI Platform](https://sensecraft.seeed.cc/) にアクセスします。
2. アカウントにログインします（まだお持ちでない場合は作成してください）。
3. **Device Management** セクションに移動し、**Add Device** をクリックします。
4. reTerminal E1003 の画面に表示されている **Device Code** を入力して、バインド処理を完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/5.jpg" style={{width:1000, height:'auto'}}/></div>

### ステップ 3. プラットフォーム上でコンテンツを作成する

1. **Home Page** で使用したいテンプレートを選択するか、**Workspace** で一から作品を作成します。
2. [HMI Platform の使い方に関して質問がある場合は、このリンクをクリックして学習してください。](https://sensecraft-hmi-docs.seeed.cc/en/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2.jpg" style={{width:1000, height:'auto'}}/></div>

### ステップ 4. コンテンツをデバイスにデプロイする

1. デザインが完成したら、**Preview** ボタンをクリックして見た目を確認します。
2. **Save** または **deploy** ボタンをクリックします。
3. 一覧からバインド済みの reTerminal E1003 を選択します。
4. プラットフォームが Wi-Fi 経由でデータをデバイスに送信します。ePaper 画面がリフレッシュされ、新しいダッシュボードが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/6.jpg" style={{width:1000, height:'auto'}}/></div>

## リソース

- [reTerminal E1003 回路図 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/202004522_reTerminal_E1003_V1.0_SCH_251231.pdf)

## 技術サポート & 製品ディスカッション

当社製品をお選びいただきありがとうございます。お客様が当社製品をスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
