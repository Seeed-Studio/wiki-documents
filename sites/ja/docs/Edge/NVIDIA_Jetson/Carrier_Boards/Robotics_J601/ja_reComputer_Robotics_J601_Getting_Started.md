---
description: NVIDIA Jetson AGX Thor モジュール向けに設計された reComputer Robotics J601 キャリアボードの、予備的な入門ページです。
title: reComputer Robotics J601 入門ガイド
keywords:
  - reComputer Robotics J601
  - AGX Thor
  - Jetson
  - Carrier Board
  - Robotics
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ai_robotics_recomputer_robotics_j601_carrier_board_getting_started
sku: 100060965
last_update:
  date: 04/24/2026
  author: Dayu
createdAt: '2026-04-24'
updatedAt: '2026-04-24'
url: https://wiki.seeedstudio.com/ja/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started/
---

# reComputer Robotics J601 入門ガイド

:::note
このページは、NVIDIA Jetson AGX Thor モジュール向けの今後発売予定の reComputer Robotics J601 キャリアボードに関する予備ドラフトです。仕様、ソフトウェアサポート、アクセサリバンドル、およびメカニカル仕様は今後変更される可能性があります。
:::

<div align="center">
  <img width="700" src="https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png"/>
</div>

reComputer Robotics J601 は、NVIDIA Jetson AGX Thor モジュール向けのロボティクス特化型キャリアボードです。高速ネットワーキング、産業用 I/O、GMSL カメラ拡張、および広い範囲の DC 入力を、コンパクトなキャリアボードフォームファクタで必要とする高性能エンボディド AI およびロボット制御ワークロードを対象としています。

## 予備的な特長

- **NVIDIA Jetson AGX Thor** モジュールをサポート
- NVMe 2280 SSD 用 **M.2 Key M** スロット
- Wi-Fi/Bluetooth モジュール用 **M.2 Key E** スロット
- 5G モジュール用 **M.2 Key B** スロットおよび **Nano SIM** 対応
- **PTP** および **EtherCAT** 対応を予定した高速 Ethernet
- **CAN**、**RS-232/422/485**、**DI/DO**、**I2C**、**I2S**、**SPI**、**GPIO** を含む豊富なロボティクス向け I/O
- 最大 **8 台のカメラ** に対応する **GMSL 拡張**
- **XT30** 経由の広範囲 **19V ～ 48V DC** 入力
- 対象ソフトウェアプラットフォーム：**JetPack 7**

## 予備的な仕様

以下の表では、現在のハードウェア定義のうち明確な部分のみを意図的に記載し、未確定項目は TBD としています。

<div class="table-center">
<table>
  <tbody>
    <tr>
      <td>モジュール</td>
      <td>NVIDIA Jetson AGX Thor x 1</td>
    </tr>
    <tr>
      <td>ストレージ</td>
      <td>1x M.2 Key M（M.2 NVMe 2280 SSD 用）</td>
    </tr>
    <tr>
      <td>ネットワーキング</td>
      <td>Ethernet の定義は進行中。現時点の計画では、PTP および EtherCAT 対応の高速 RJ45 ポートを含みます。</td>
    </tr>
    <tr>
      <td>無線拡張</td>
      <td>1x M.2 Key E（Wi-Fi/Bluetooth 用）、1x M.2 Key B（5G 用）、1x Nano SIM</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>最大 4x USB 3.2 Type-A（ホスト）、1x USB 2.0 Type-C（Debug UART / デバイスモード）、1x USB 3.0 Type-C（フラッシング用）</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td>1x HDMI</td>
    </tr>
    <tr>
      <td>冷却</td>
      <td>1x 4 ピンファンコネクタ（12V PWM）。キャリアボードとファンは別売りとなる予定です。</td>
    </tr>
    <tr>
      <td>カメラ</td>
      <td>GMSL 拡張、最大 8 台のカメラ</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>4x CAN（JST コネクタ経由）</td>
    </tr>
    <tr>
      <td>シリアル</td>
      <td>2x RS-232/422/485（DB9 経由）、1x RS-232/422/485（DB9 経由）、1x RS-485（JST 4 ピン経由）</td>
    </tr>
    <tr>
      <td>デジタル I/O</td>
      <td>4x DI および 4x DO（JST 端子コネクタ経由）</td>
    </tr>
    <tr>
      <td>オーディオ</td>
      <td>1x I2S、2x アンプ出力、1x マイク入力</td>
    </tr>
    <tr>
      <td>低速拡張</td>
      <td>1x I2C、1x SPI、GPIO（JST/ピンヘッダ経由）</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2 ピン</td>
    </tr>
    <tr>
      <td>ボタン</td>
      <td>Recovery および Reset</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>PWR、ACT、およびユーザー定義 RGB LED</td>
    </tr>
    <tr>
      <td>電源入力</td>
      <td>XT30、19V ～ 48V DC</td>
    </tr>
    <tr>
      <td>電流 / 電力</td>
      <td>最大電流 10A、システム電力定義 160W</td>
    </tr>
    <tr>
      <td>動作温度</td>
      <td>-10°C ～ +60°C</td>
    </tr>
    <tr>
      <td>湿度</td>
      <td>10% ～ 95% RH</td>
    </tr>
    <tr>
      <td>認証</td>
      <td>CE、FCC、RoHS、目標 EMI クラス：Class A</td>
    </tr>
    <tr>
      <td>メカニカル</td>
      <td>キャリアボードサイズの目標：150 mm x 130 mm 以内</td>
    </tr>
  </tbody>
</table>
</div>

## LED とボタンの定義

### ボタン

| ボタン | ピン | 信号 | タイプ | 説明 |
| --- | --- | --- | --- | --- |
| RECOVERY | 240 | - | CMOS-5V | システムリカバリ / 低レベル設定フローに使用 |
| RESET | 239 | SYS_RESET* | オープンドレイン、1.8V | Low に引き下げるとモジュールをリセット。モジュール電源が準備完了のとき、High レベルはキャリアボード電源イネーブルとして使用可能。 |

### LED インジケータ

| LED | 色 | 状態 | 説明 |
| --- | --- | --- | --- |
| PWR | 緑 | On | デバイスが電源に接続されています |
| PWR | 緑 | Off | デバイスが電源に接続されていません |
| ACT | 緑 | 点滅 | SSD アクティビティ |
| USER | R / G / B | TBD | ユーザー定義の動作 |

## ソフトウェア

- 計画中のソフトウェアベースライン：**JetPack 7**
- 計画中の Ethernet 機能：**EtherCAT**
- 詳細なフラッシングガイド、BSP パッケージ、および検証手順：**TBD**

## 計画中のカメラ対応

現在の要件リストには、以下の GMSL カメラモデルが含まれています：

- Senyun `SG3S-ISX031C-GMSL2F`
- Senyun `SG2-AR0233C-5200-G2A`
- Senyun `SG2-IMX390C-5200-G2A`
- Senyun `SG8S-AR0820C-5300-G2A`
- Orbbec `335LG`

## 熱設計

このキャリアボードはヒューマノイドロボットの筐体内での使用を想定しており、顧客側で独自の熱ソリューションを設計する場合があります。Seeed は、AGX Thor ベースの展開向けに熱設計ガイダンスを提供する予定です。

参考ドキュメント：

- `Jetson_Thor_Thermal_DG_TDG12271001_v1.0.pdf`

## 予備的な同梱物リスト

### アクセサリ

- XT30 から DC へのケーブル、200 mm x 1
- JST バラ線ハーネス、100 mm x 10
- USB Type-C to Type-A ケーブル、1 m x 1
- Key E 用ネジ x 1
- Key M 用ネジ x 1
- Key B 用ネジ x 1
- AGX Thor SOM 用ネジ x 4
- キャリアボード支持用スタッド x 4
- スタッド用ネジ x 4
- ユーザーマニュアル x 1

### パッケージ

- エアプレーンボックス
- キャリアボードおよびアクセサリ用インナートレイ
- 追加のフォーム層付きで一番上に配置されたユーザーマニュアル
- mini J501 キャリアボードと同様のパッケージスタイル

## リソース

- 詳細なハードウェアレイアウト：TBD
- フラッシングガイド：TBD
- BSP リリースノート：TBD

## 技術サポート

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
