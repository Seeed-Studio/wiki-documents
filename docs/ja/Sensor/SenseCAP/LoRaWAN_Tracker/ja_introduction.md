---
description: LoRaWAN トラッカー紹介
title: 紹介
keywords:
- Tracker
- LoRaWAN
image: https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/intro-e.webp
slug: /ja/t1000e_for_lorawan_introduction
sku: 114993591
sidebar_position: 1
last_update:
  date: 1/9/2026
  author: Janet
---

# T1000-E for LoRaWAN 紹介 

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993591-t1000-e-lorawan.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-LoRaWAN-p-6408.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>
<br />

T1000-E for LoRaWAN は完全にオープンソースのファームウェアを搭載しています。ユーザーエクスペリエンスを向上させるため、工場出荷時のデバイスにはデモファームウェアがプリインストールされています。ユーザーは初期体験としてデモファームウェアを探索し、独自のカスタムファームウェアを開発することもできます。カスタム開発の詳細については、[LoRaWAN オープンソースファームウェア](https://wiki.seeedstudio.com/ja/open_source_lorawan/)を参照してください。

:::caution note
ファームウェアをフラッシュする前に、お使いのデバイスが `T1000-E for LoRaWAN` バージョンであることを確認してください。Meshtastic をサポートしていないこのトラッカーモデルに他の Meshtastic ファームウェアをフラッシュしないでください。デバイスが完全に動作しなくなる可能性があります。
:::

**T1000 シリーズ バージョン比較**

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image2_20.png" alt="pir" width={800} height="auto" /></p>

## 特徴
- **オープンソースソフトウェア**: 完全なソースコードを提供し、コミュニティの貢献とカスタムデバイスを可能にします。
- **マルチセンサー統合**: 温度、光、3軸加速度センサーを統合。屋内/屋外測位のためのGNSS、WiFi、Bluetoothをサポート。
- **簡単な設定**: [SenseCraft App](https://wiki.seeedstudio.com/ja/sensecraft-app/overview/)を通じて、ユーザーはデバイスパラメータを簡単に設定できます。
- **強力なLoRaWANサポート**: デバイスの迅速なネットワークアクセスと設定を保証します。
- **ユーザーフレンドリーなボタン**: 電源オン/オフ、Bluetooth設定、SOSアラームなどのシンプルなボタンオプション。

## 仕様

### 一般パラメータ

| 製品モデル          | T1000-E for LoRaWAN                                                  |
|--|--|
| バックホール               | LoRaWAN® (v1.0.4 Class A)                                            |
| Bluetooth              | Bluetooth v5.1、SenseCraft App経由で設定                           |
| LoRaWAN チャンネルプラン   | IN865 / EU868 / US915 / AU915 / AS923 / KR920 / RU864                |
| 温度            | 範囲: -20 to 60°C; Δ 精度: ±1°C; 分解能: 0.1°C              |
| 光                  | 0 to 100% (0は暗い、100%は最も明るい)                            |
| 3軸加速度計   | 動きを検出する3軸加速度計                              |
| LEDとブザー         | ステータスを示すLEDとブザー                                    |
| ボタン                 | 操作とイベント(SOS)をトリガーする1つのボタン                          |
| アンテナ                | 内蔵 (GNSS/LoRa/Wi-Fi/BLE)                                       |
| 通信距離 | 2 to 5km (ゲートウェイアンテナ、設置、環境に依存) |
| IP等級              | IP65                                                                 |
| 寸法             | 85 x 55 x 6.5 mm                                                     |
| デバイス重量          | 32g                                                                  |
| 動作温度  | -20°C to +60°C                                                       |
| 動作湿度     | 5% - 95% (結露なし)                                           |
| 認証          | CE / FCC / RoHS                                                      |


### 位置情報

| 機能                         | 説明                                           |
|--|--|
| GNSS 衛星群     | GPS / GLONASS / Galileo / BeiDou / QZSS                        |
| GNSS 感度       | -145dBm コールドスタート / -160 dBm トラッキング                         |
| GNSS 位置精度 | ~10m CEP、GPS、-130dBm                                         |
| Wi-Fi 測位      | パッシブスキャン、スキャンした3~5個のMACアドレスをアップロード        |
| Bluetooth 測位  | ビーコンの最良信号3個のMACアドレスをアップロード      |


### バッテリー

| 機能                         | 説明                                                         |
|--|--|
| バッテリー容量                 | 充電式リチウムバッテリー、700mAh                               |
| バッテリー寿命推定           | 1回の充電で3ヶ月 (1時間ごとのアップリンク、GNSSデータのみ)  |
| バッテリー寿命監視          | 定期的なアップリンクバッテリーレベル                                      |
| 充電ケーブル (アダプター別売) | USB磁気充電ケーブル、1メートル                            |
| 電源入力電圧              | 4.7 to 5.5V DC                                                     |
| 充電温度             | 0 ~ +45°C                                                         |



## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/t1000e_for_lorawan_hardware_overview.webp" alt="pir" width={800} height="auto" /></p>


## アプリケーション

- **資産追跡**: 資産の状態と位置をリモートで監視。LoRaWAN経由で位置データをクラウドに送信。ユーザーはモバイルまたはPC管理プラットフォームでリアルタイムの位置と軌跡を表示できます。
- **環境監視**: 内蔵の熱センサー、光センサー、3軸加速度計を活用。LoRaWAN経由でリアルタイムに環境データを収集・アップロードし、リモートパラメータ監視を行います。
- **物流管理**: 車両や荷物に設置。貨物輸送状況（ルート、停車、定時到着）をリアルタイムで追跡し、物流会社のスケジューリングと管理を支援します。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品でのご体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
