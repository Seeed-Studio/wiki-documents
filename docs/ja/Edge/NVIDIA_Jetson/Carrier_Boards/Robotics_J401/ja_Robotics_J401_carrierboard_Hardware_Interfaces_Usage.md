---
description: このウィキでは、reComputer Jetson Robotics J401キャリアボードのハードウェアとインターフェースについて紹介します。
title: インターフェースの使用方法
tags:
  - Robotics J401キャリアボード
  - Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/recomputer_jetson_robotics_j401_getting_started
last_update:
  date: 05/15/2025
  author: Yaohui
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputer Jetson Robotics J401 ハードウェアと入門ガイド

reComputer Robotics J401は、先進的なロボティクス向けに設計されたコンパクトで高性能なエッジAIキャリアボードです。NVIDIA Jetson Orin Nano/Orin NXモジュール（Super/MAXNモード）に対応し、最大157 TOPSのAI性能を発揮します。デュアルギガビットイーサネットポート、5GおよびWi-Fi/BTモジュール用のM.2スロット、6つのUSB 3.2ポート、CAN、GMSL2（オプションの拡張経由）、I2C、UARTなど、豊富な接続オプションを備え、さまざまなセンサーからの複雑なデータを処理できる強力なロボットの頭脳として機能します。JetPack 6およびLinux BSPがプリインストールされており、シームレスな展開を実現します。

NVIDIA Isaac ROS、Hugging Face、PyTorch、ROS 2/1などのフレームワークをサポートし、reComputer Robotics J401は、大規模言語モデル駆動の意思決定と物理的なロボティクス制御（モーションプランニングやセンサーフュージョンなど）を橋渡しします。自律ロボットの迅速な開発に最適で、すぐに使用できるインターフェースと最適化されたAIフレームワークにより、製品化までの時間を短縮します。

## reComputer Jetson Robotics J401 キャリアボード概要

| **トップビュー** |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/top.png) |
| **トップビュー** |
| ![fig2](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/fornt.png) |
| **トップビュー** |
| ![fig3](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/bottom.png) |

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱</font></span></strong>
    </a>
</div>

## パーツリスト
- reComputer Robotics J401キャリアボード x 1
- 電源供給およびJST拡張ボード x 1
- XT30からDCケーブル x 1
- USBケーブル（Type A to Type C） x 1
- 拡張ボード用ヒートシンク x 1
- スタッド（M3*30） x 5
- M3六角ナット x 5
- JetsonモジュールおよびM.2 Key M用ネジ（CM2.5*L.4） x 3
- M.2 Key E用ネジ（CM2*3.0） x 1
- M.2 Key B用スタッド（M2*2.0） x 1
- M.2 Key B用ネジ（CM3*4.0） x 1
- ユーザーマニュアル x 1

:::note
1. 高電圧電源供給および動作温度時には、Thermal Design Guideに従って堅牢な放熱ソリューションを設計してください。
2. モジュールの性能を向上させるために、ヒートシンクを取り付けてください。
3. 高電圧入力および高負荷での動作中は、やけどを防ぐためにヒートシンクに触れないでください。
4. 検証用の電源アダプター推奨事項：Seeed公式ウェブサイトで推奨されている電源アダプターを使用してください。
  - 19V/4.74A 5525バレルジャック電源アダプター
  - 最大消費電力要件を満たすことを確認してください。
2. AC電源コードの互換性
  - 地域に応じたACクローバーリーフ電源コードを購入してください。
3. アクセサリーの互換性
  - 最適な性能と互換性を確保するために、公式に推奨されているアクセサリー（例：ワイヤレスモジュール、カメラ、周辺機器）のみを使用してください。
:::



## 仕様

### キャリアボード仕様

<table border="1" cellPadding="8" cellSpacing="0">
  <thead>
    <tr>
      <th>カテゴリ</th>
      <th>項目</th>
      <th>詳細</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowSpan="1">ストレージ</th>
      <td>M.2 KEY M PCIe</td>
      <td>1x M.2 KEY M PCIe (M.2 NVMe 2242 SSD 128G 同梱)</td>
    </tr>
    <tr>
      <th rowSpan="3">ネットワーキング</th>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E (WiFi/Bluetooth モジュール用)</td>
    </tr>
    <tr>
      <td>M.2 KEY B</td>
      <td>1x M.2 Key B (5G モジュール用)</td>
    </tr>
    <tr>
      <td>イーサネット</td>
      <td>2x RJ45 ギガビットイーサネット</td>
    </tr>
    <tr>
      <th rowSpan="13">I/O</th>
      <td>USB</td>
      <td>6x USB 3.2 Type-A (5Gbps);<br />1x USB 3.0 Type-C (ホスト/DP 1.4);<br />1x USB 2.0 Type-C (デバイスモード/デバッグ)</td>
    </tr>
    <tr>
      <td>カメラ</td>
      <td>1x 4 in 1 GMSL2 (mini fakra) (オプションボード)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2x CAN0 (XT30(2+2));<br />3x CAN1 (4ピン JST ヘッダー)</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td>1x DP1.4 (Type C ホスト)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>1x UART 4ピン JST ヘッダー</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td>2x I2C 4ピン JST ヘッダー</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td>1x 4ピンファンコネクタ (5V PWM);<br />1x 4ピンファンコネクタ (12V PWM)</td>
    </tr>
    <tr>
      <td>拡張ポート</td>
      <td>1x カメラ拡張ヘッダー (GMSL2 ボード用)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2ピン;<br />1x RTC ソケット</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>3x LED (PWR, ACT, ユーザーLED)</td>
    </tr>
    <tr>
      <td>ピンホールボタン</td>
      <td>1x PWR;<br />1x RESET</td>
    </tr>
    <tr>
      <td>DIPスイッチ</td>
      <td>1x REC</td>
    </tr>
    <tr>
      <td>アンテナホール</td>
      <td>5x アンテナホール</td>
    </tr>
    <tr>
      <th rowSpan="1">電源</th>
      <td colSpan="2">19-54V XT30(2+2) (XT30 to 5525 DC ジャックケーブル同梱)</td>
    </tr>
    <tr>
      <th rowSpan="1">Jetpack バージョン</th>
      <td colSpan="2">Jetpack 6</td>
    </tr>
    <tr>
      <th rowSpan="3">機械的仕様</th>
      <td>寸法 (W x D x H)</td>
      <td>115mm x 115mm x 38mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td>141g</td>
    </tr>
    <tr>
      <td>設置方法</td>
      <td>デスク、壁取り付け</td>
    </tr>
    <tr>
      <th rowSpan="1">動作温度</th>
      <td colSpan="2">-20℃~60℃ (25W モード);<br />-20℃~55℃ (MAXN モード);<br />(reComputer Robotics ヒートシンクとファン使用時)</td>
    </tr>
    <tr>
      <th rowSpan="1">保証</th>
      <td colSpan="2">2年間</td>
    </tr>
    <tr>
      <th rowSpan="1">認証</th>
      <td colSpan="2">RoHS, REACH, CE, FCC, UKCA, Telec, KC</td>
    </tr>
  </tbody>
</table>

## リソース
- [reComputer Robotics J401 キャリアボードバザールバンドルページ](https://www.seeedstudio.com/reComputer-Robotics-Bundle.html)
- [reComputer Robotics J401 キャリアボードデータシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>