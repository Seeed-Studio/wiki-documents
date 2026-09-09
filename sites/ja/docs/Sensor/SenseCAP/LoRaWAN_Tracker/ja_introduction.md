---
description: LoRaWAN トラッカー概要
title: 概要
keywords:
  - トラッカー
  - LoRaWAN
image: https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/intro-e.webp
slug: /t1000e_for_lorawan_introduction
sku: 114993591
sidebar_position: 1
last_update:
  date: 9/1/2026
  author: Advent Jiang
createdAt: '2026-01-09'
updatedAt: '2026-05-21'
url: https://wiki.seeedstudio.com/ja/t1000e_for_lorawan_introduction/
---

# LoRaWAN 向け T1000-E 概要 

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993591-t1000-e-lorawan.jpg" alt="pir" width={800} height="auto" /></p>

:::note
カスタマイズ可能なオプション：ロゴブランディング、パッケージング、ファームウェア書き込み。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-LoRaWAN-p-6408.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>今すぐカスタマイズ ➜</font></span></strong></a>
</div>
<br />

LoRaWAN 向け T1000-E は、完全なオープンソースファームウェアを備えています。ユーザー体験を向上させるため、工場出荷時のデバイスにはデモファームウェアをプリインストールしています。ユーザーはまずデモファームウェアで体験したうえで、独自のカスタムファームウェアを開発することもできます。カスタム開発の詳細については、[LoRaWAN Open Source Firmware](https://wiki.seeedstudio.com/ja/open_source_lorawan/) を参照してください。

:::caution note
ファームウェアを書き込む前に、お使いのデバイスが `T1000-E for LoRaWAN` バージョンであることを必ず確認し、このトラッカーモデルに他の Meshtastic または MeshCore ファームウェアを書き込まないでください。デバイスが完全に動作不能になる可能性があります。
:::

**T1000 シリーズ バージョン比較**

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image2_20.png" alt="pir" width={800} height="auto" /></p>

## 特長
- **オープンソースソフトウェア**：完全なソースコードを提供し、コミュニティによる貢献やデバイスのカスタマイズを可能にします。
- **マルチセンサー統合**：温度、照度、3 軸加速度センサーを統合。GNSS、WiFi、Bluetooth をサポートし、屋内外での測位が可能です。 
- **簡単な設定**：[SenseCraft App](https://wiki.seeedstudio.com/ja/sensecraft-app/overview/) を介して、ユーザーはデバイスパラメータを簡単に設定できます。 
- **強力な LoRaWAN サポート**：デバイスの迅速なネットワーク接続と設定を実現します。
- **使いやすいボタン**：電源オン/オフ、Bluetooth 設定、SOS アラームなどのシンプルなボタン操作に対応します。

## 仕様

### 一般パラメータ

| 製品モデル              | T1000-E for LoRaWAN                                                  |
|--|--|
| バックホール             | LoRaWAN® (v1.0.4 Class A)                                            |
| Bluetooth              | Bluetooth v5.1、SenseCraft App による設定                           |
| LoRaWAN チャネルプラン  | IN865 / EU868 / US915 / AU915 / AS923 / KR920 / RU864                |
| 温度                    | 範囲：-20 ～ 60°C；Δ 精度：±1°C；分解能：0.1°C                      |
| 照度                    | 0 ～ 100%（0 は暗、100% は最も明るい）                              |
| 3 軸加速度センサー      | 動きを検知する 3 軸加速度センサー                                  |
| LED とブザー            | 状態を示す LED とブザー                                             |
| ボタン                  | 操作およびイベント（SOS）をトリガーするボタン 1 個                  |
| アンテナ                | 内蔵（GNSS/LoRa/Wi-Fi/BLE）                                         |
| 通信距離                | 2 ～ 5km（ゲートウェイアンテナ、設置条件、環境に依存）              |
| IP 等級                 | IP65                                                                 |
| 寸法                    | 85 x 55 x 6.5 mm                                                     |
| デバイス重量            | 32g                                                                  |
| 動作温度                | -20°C ～ +60°C                                                       |
| 動作湿度                | 5% ～ 95%（結露なきこと）                                           |
| 認証                    | CE / FCC / RoHS                                                      |


### 位置情報

| 機能                            | 説明                                                   |
|--|--|
| GNSS コンステレーション | GPS / GLONASS / Galileo / BeiDou / QZSS                        |
| GNSS 感度              | -145dBm コールドスタート / -160 dBm トラッキング              |
| GNSS 位置精度          | 約 10m CEP、GPS、-130dBm                                     |
| Wi-Fi 測位             | パッシブスキャンにより、検出した 3～5 個の MAC アドレスを送信 |
| Bluetooth 測位         | 検出した Beacon のうち信号が最も強い 3 つの MAC アドレスを送信 |


### バッテリー

| 機能                            | 説明                                                                 |
|--|--|
| バッテリー容量                  | 充電式リチウムバッテリー、700mAh                                   |
| バッテリー寿命の目安            | 1 回の充電で約 3 か月（1 時間ごとにアップリンク、GNSS データのみ） |
| バッテリー寿命モニタリング      | バッテリーレベルを定期的にアップリンク                             |
| 充電ケーブル（アダプタ別売）    | USB マグネット充電ケーブル、1 メートル                             |
| 電源入力電圧                    | 4.7 ～ 5.5V DC                                                       |
| 充電温度                        | 0 ～ +45°C                                                           |



## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/t1000e_for_lorawan_hardware_overview.webp" alt="pir" width={800} height="auto" /></p>


## アプリケーション

- **資産トラッキング**：資産の状態と位置を遠隔で監視します。位置データを LoRaWAN 経由でクラウドに送信し、ユーザーはモバイルまたは PC の管理プラットフォーム上でリアルタイムの位置と軌跡を確認できます。
- **環境モニタリング**：内蔵の温度、照度センサーおよび 3 軸加速度センサーを活用します。環境データをリアルタイムで収集し、LoRaWAN 経由でアップロードして、遠隔からパラメータを監視します。
- **物流管理**：車両や荷物に取り付けて使用します。貨物輸送状況（ルート、停車、定時到着）をリアルタイムで追跡し、物流企業の配車や管理を支援します。

## 技術サポートと製品ディスカッション

当社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
