---
description: reComputer Industrial R20xxは、Raspberry Pi CM5を搭載したAI機能付きIoTゲートウェイ＆コントローラーです。2GB RAM、8GB eMMC、デュアルイーサネット、USB、RS485、RS232、DI/DO、ワイヤレス接続（4G、5G、LoRa®、Wi-Fi/BLE）を搭載し、産業オートメーション＆エッジコンピューティングに最適です。
title: reComputer Industrial R20xx 入門ガイド
keywords:
- Edge Controller
- Raspberry pi
- Edge Controller
- reComputer Industrial R20xx
image: https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/recomputer-industrail-r2000.webp
slug: /ja/recomputer_industrial_r20xx_getting_start
last_update:
  date: 09/28/2025
  author: Nolan Chen
---

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2045-12-p-6544.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

Raspberry Pi CM5を搭載したreComputer Industrial R20xxは、AI機能を備えた適応性の高いエッジAI/IoTコントローラーです。包括的な産業用インターフェース**（2x イーサネット、4x USB、3x RS485、1x RS232、8x DI、8x DO）**と柔軟なワイヤレス接続オプション**（4G/5G、LoRa®、Wi-Fi/BLE）**を搭載し、多様な産業用アプリケーションに最適です。
reComputer Industrial R20xxシリーズは、産業用AIアプリケーションでの使用に最適です。データ取得とプロセス監視、オートメーションとロボット制御、インテリジェント製造、産業通信とネットワーキングなどの分野で使用できます。小型サイズ、柔軟性、低コスト、プログラマビリティにより、オートメーション＆IoTシステムなどに強力なサポートを提供します。

## 特徴

**産業グレードの信頼性**

- ファンレスコンパクトPCで広い温度範囲をサポート（-20°C～60°C）
- ハードウェアウォッチドッグ
- UPSスーパーキャパシタ（オプション）
- 高品質メタルケース、DINレールと壁面設置に対応
- 製品寿命：reComputer Industrial R2000は少なくとも2030年12月まで製造継続

**高効率AIコンピューティング**

- Raspberry Pi CM5を搭載
- Broadcom BCM2711クアッドコアCortex-A72（ARM v8）64ビットSoC @ 1.5GHz
- 最大16GB RAMと64GB eMMC
- Hailo-8 AIアクセラレータにより最大26 TOPS（オプション）

**豊富なワイヤレス機能**

- オンチップWi-Fi
- オンチップBLE
- Mini-PCIe：LTE、USB LoRa®、USB Zigbee
- M.2 KEY-B：4G/5G

**豊富なインターフェース**

- 3x RS485（絶縁）、1x RS232（絶縁）、8x 絶縁DIポート、8x 絶縁DOポート
- 1x 10M/100M/1000M イーサネット（PoE PD対応）
- 1x 10M/100M イーサネット
- 2x HDMI 2.0
- 3x Type-A USB3.0
- 1x Type-A USB2.0
- 1x Type-C USB2.0（OS更新用USBコンソール）
- 1x Nano SIMカードスロット

## 仕様
<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>パラメータ</th>
        <th colspan="2">説明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="3">ハードウェア仕様</td>
      </tr>
      <tr>
        <td>**製品シリーズ**</td>
        <td>R20xx-12</td>
        <td>R20xx-10</td>
      </tr>
      <tr>
        <td> **CPU** </td>
        <td colspan="2">Raspberry Pi Compute Module 5、2.4GHzクアッドコア64ビットArm Cortex-A76</td>
      </tr>
      <tr>
        <td> **AIプロセッサ** </td>
        <td>プリインストール1x Hailo-8 M.2 AIアクセラレーション26TOPS</td>
        <td>*</td>
      </tr>
      <tr>
        <td> **オペレーティングシステム** </td>
        <td colspan="2">Raspbian、Debian</td>
      </tr>
      <tr>
        <td> **RAM** </td>
        <td colspan="2">2GB/4GB/8GB/16GB</td>
      </tr>
      <tr>
        <td> **eMMC** </td>
        <td colspan="2">16GB/32GB/64GB</td>
      </tr>
      <tr>
        <td colspan="3"> **システム仕様** </td>
      </tr>
      <tr>
        <td> 電源入力 </td>
        <td colspan="2">DC 9V~36V、2ピン端子台</td>
      </tr>
      <tr>
        <td>PoE（受電デバイスとして）</td>
        <td colspan="2">IEEE 802.3at標準25.5W PoE</td>
      </tr>
      <tr>
        <td>電源スイッチ</td>
        <td colspan="2">なし</td>
      </tr>
      <tr>
        <td>再起動スイッチ</td>
        <td colspan="2">あり</td>
      </tr>
      <tr>
        <td colspan="3"> **インターフェース** </td>
      </tr>
      <tr>
        <td rowspan="2"> イーサネット </td>
        <td colspan="3"> 1 x 10/100/1000 Mbps（PoE PD対応） </td>
      </tr>
      <tr>
        <td colspan="3"> 1 x 10/100 Mbps IEEE 802.3/802.3u </td>
      </tr>
      <tr>
        <td rowspan="2"> USB </td>
        <td colspan="3"> 3 x USB-A 3.0 ホスト；1 x USB-A 2.0 ホスト </td>
      </tr>
      <tr>
        <td colspan="3"> 1 x USB-C 2.0（OS書き込み＆デバッグ用） </td>
      </tr>
      <tr>
        <td> RS485 </td>
        <td colspan="3"> 3x RS485（絶縁） </td>
      </tr>
      <tr>
        <td> RS232 </td>
        <td colspan="3"> 1x RS232（絶縁） </td>
      </tr>
      <tr>
        <td rowspan="2"> DI </td>
        <td colspan="3"> 8 x 絶縁DIポート </td>
      </tr>
      <tr>
        <td colspan="3"> 入力電圧：5~24V DC </td>
      </tr>
      <tr>
        <td rowspan="2"> DO </td>
        <td colspan="3"> 8 x 絶縁DOポート </td>
      </tr>
      <tr>
        <td colspan="3"> 出力電圧：60V DC以下 </td>
      </tr>
      <tr>
        <td>SIMカード</td>
        <td colspan="3">1x Nano SIMカードスロット</td>
      </tr>
      <tr>
        <td>M.2スロット</td>
        <td>1x M.2 M-KEY 2280スロット（NVMe SSD用）；
1x M.2 M-KEY 2280スロット（AIアクセラレータ用）
1x M.2 NVMeスロット、M.2 M-KEY 2280
（プリインストール1x Hailo-8 M.2 AIアクセラレーション26TOPS）；
1x M.2 B-KEY 3042/3052スロット（5G/4G LTE用）；</td>
        <td>1x M.2 M-KEY 2280スロット（NVMe SSD用）；
1x M.2 M-KEY 2280スロット（AIアクセラレータ用）；
1x M.2 B-KEY 3042/3052スロット（5G/4G LTE用）
2x M.2 NVMeスロット、M.2 M-KEY 2280；
1x M.2 NVMeスロット、M.2 B-KEY </td>
      </tr>
      <tr>
        <td>Mini-PCIe</td>
        <td colspan="2">1x Mini-PCIe（LoRaモジュール用）</td>
      </tr>
      <tr>
        <td>LED</td>
        <td colspan="2">4 x LEDインジケータ</td>
      </tr>
      <tr>
        <td>ブザー</td>
        <td colspan="2">1</td>
      </tr>
      <tr>
        <td>リセットボタン</td>
        <td colspan="2">1</td>
      </tr>
      <tr>
        <td>HDMI</td>
        <td colspan="2">2 x HDMI 2.0</td>
      </tr>
      <tr>
        <td colspan="3">ワイヤレス通信</td>
      </tr>
      <tr>
        <td>Wi-Fi 2.4/5.0 GHz</td>
        <td colspan="2">オンチップWi-Fi</td>
      </tr>
      <tr>
        <td>BLE 5.0</td>
        <td colspan="2">オンチップBLE</td>
      </tr>
      <tr>
        <td>LoRa®</td>
        <td colspan="2">USB LoRa®*/SPI LoRa®*</td>
      </tr>
      <tr>
        <td>4G/5Gセルラー</td>
        <td colspan="2">4G LTE/5G*</td>
      </tr>
      <tr>
        <td>Zigbee</td>
        <td colspan="2">USB Zigbee*</td>
      </tr>
      <tr>
        <td colspan="3">**規格**</td>
      </tr>
      <tr>
        <td rowspan="3">EMC</td>
        <td colspan="2">ESD：EN61000-4-2、レベル3</td>
      </tr>
      <tr>
        <td colspan="2">EFT：EN61000-4-4、レベル2</td>
      </tr>
      <tr>
        <td colspan="2">サージ：EN61000-4-5、レベル2</td>
      </tr>
      <tr>
        <td rowspan="3">認証</td>
        <td colspan="2">CE、FCC</td>
      </tr>
      <tr>
        <td colspan="2">TELEC</td>
      </tr>
      <tr>
        <td colspan="2">RoHS</td>
      </tr>
      <tr>
        <td colspan="3">REACH</td>
      </tr>
      <tr>
        <td colspan="3">**環境条件**</td>
      </tr>
      <tr>
        <td>侵入保護</td>
        <td colspan="2">IP40</td>
      </tr>
      <tr>
        <td>動作温度</td>
        <td colspan="2">-20~65 °C</td>
      </tr>
      <tr>
        <td>動作湿度</td>
        <td colspan="2">10~95% RH</td>
      </tr>
      <tr>
        <td>保存温度</td>
        <td colspan="2">-40~85 °C</td>
      </tr>
      <tr>
        <td colspan="3">その他</td>
      </tr>
      <tr>
        <td>スーパーキャパシタUPS</td>
        <td colspan="2">SuperCAP UPS LTC3350モジュール*</td>
      </tr>
      <tr>
        <td>ハードウェアウォッチドッグ</td>
        <td colspan="2">1~255秒</td>
      </tr>
      <tr>
        <td>RTC</td>
        <td colspan="2">高精度RTC</td>
      </tr>
      <tr>
        <td rowspan="2">セキュリティ</td>
        <td colspan="2">暗号化チップTPM 2.0*</td>
      </tr>
      <tr>
        <td colspan="2">ATECC608A</td>
      </tr>
      <tr>
        <td>放熱</td>
        <td colspan="2">ファンレス</td>
      </tr>
      <tr>
        <td>保証</td>
        <td colspan="2">2年</td>
      </tr>
      <tr>
        <td>製品寿命</td>
        <td colspan="2">2036年12月まで</td>
      </tr>
      <tr>
        <td>**注記**</td>
        <td colspan="2">*印のオプションは、アクセサリリストに従って追加購入が必要です。</td>
      </tr>
    </tbody>
  </table>
</div>


<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th colspan="2">コンポーネントとインターフェース状態説明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>予約済み</td>
        <td>将来の使用または拡張用に指定。</td>
      </tr>
      <tr>
        <td> オプション </td>
        <td colspan="2">将来の使用または拡張用に指定。</td>
      </tr>
      <tr>
        <td> **AIプロセッサ** </td>
        <td>必須ではないコンポーネント、ユーザーは含めるか除外するかを選択可能。</td>
      </tr>
      <tr>
        <td> 占有済み </td>
        <td>現在使用中で製品機能に不可欠。</td>
      </tr>
      <tr>
        <td>含まれる</td>
        <td colspan="2">標準パッケージに含まれる必須コンポーネント。</td>
      </tr>
    </tbody>
  </table>
</div>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/1.4_dimension_1.png" style={{width:800, height:'auto'}}/></div>

## Hailo紹介

### ハードウェア紹介

[Hailo](https://hailo.ai/)は、エッジデバイス上での高性能ディープラーニングアプリケーション向けに独自に調整された最先端のAIプロセッサを提供しています。同社のソリューションは、高度なAIアクセラレータとビジョンプロセッサによって駆動される、知覚とビデオ強化と並んで、エッジでの次世代生成AIを可能にすることに焦点を当てています。そして、26 TOPsのAI性能を提供するHailo-8 NPUアクセラレータを搭載したreComputer_R2000は、YOLOv8sで200 FPS以上を達成することができます。

### ソフトウェア紹介

![](https://seeed-projects.github.io/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/assets/images/architecture-2bfc6ed440e1add56388738e87558050.png)

Hailo AI Software Suiteは、ハードウェアアクセラレータ上でAIモデルを効率的に実行するための強力なツールを提供します。既存の深層学習フレームワークとシームレスに統合するよう設計されており、開発者にスムーズなワークフローを提供します。このプロセスでは、Model Build EnvironmentでONNXファイルからHEF（Hailo Executable Binary File）を生成します。作成されたHEFファイルは推論マシン（Runtime Environment）に転送され、HailoRT APIを使用して推論を実行するために使用されます。提供されたスクリプトは、Model Build Environment内でONNXファイルをHEFファイルに変換することを容易にします。

> **注意：**
> **Hailo NPUの使用例についてさらに学びたい場合は、この[リンク](https://github.com/Seeed-Projects/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero)をクリックしてください。**

## ハードウェア概要

### システム概要

#### インターフェース概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/2.1.1-1.png" style={{width:800, height:'auto'}}/></div>

#### メインボード概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.1.2_mainboard_overview_1.png" style={{width:800, height:'auto'}}/></div>

#### 電源図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.1.3_power_diagram_1.png" style={{width:800, height:'auto'}}/></div>

reComputer Industrial R20xxは、DCターミナルとPoEポートの2つの電源供給オプションをサポートしています。これにより電源供給の選択に柔軟性が提供され、様々な電源との簡単な統合が可能になります。

**2ピン電源ターミナル**

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:100, height:'auto'}}/></div>

reComputer Industrial R2000は、9〜36VのターミナルDC電圧で供給されます。電源は2ピン電源ターミナルブロックコネクタを介して接続されます。
<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2-pin_power_terminal_2.png" style={{width:100, height:'auto'}}/></div>

reComputer Industrial R2000をアースするには、電源ターミナルの右側にあるネジにアース線を固定できます。

**PoE**

reComputer Industrial R2000のETH0（PoE PD）ポートはPoE電源供給をサポートし、イーサネット経由でデバイスに電力を供給する便利で効率的な方法を提供します。このオプションは設置プロセスを簡素化し、必要なケーブル配線量を削減するため、電源が限られているアプリケーションや電源コンセントが容易に利用できない場所での理想的なソリューションとなります。

- PoE PD：IEEE 802.3at、最大25.5W

> 注意：
> reComputer Industrial R2000に提供されるPoEモジュールはIEEE 802.3at規格に準拠しており、最大25Wの電源供給が可能であることは注目に値します。したがって、5Gや4Gモジュールなどの高電力周辺機器を接続する必要がある場合、PoE電源供給では不十分な場合があります。この場合、デバイスの安定した信頼性のある動作を確保するために、代わりにDCターミナルを使用した電源供給を推奨します。

**電源オンと電源オフ**

reComputer Industrial R2000にはデフォルトで電源ボタンが付属しておらず、電源が接続されるとシステムが自動的に起動します。シャットダウン時は、オペレーティングシステムでシャットダウンオプションを選択し、電源を切断する前にシステムが完全にシャットダウンするまで待ってください。システムを再起動するには、単に電源に再接続してください。

#### ブロック図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.1.4_block_diagram_1.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.1.4_block_diagram_2.png" style={{width:800, height:'auto'}}/></div>

#### IIC図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.1.5_iic_diagram_1.png" style={{width:800, height:'auto'}}/></div>

## インターフェース説明

| タイプ            | 説明                                                                           |
|-----------------|---------------------------------------------------------------------------------------|
| **イーサネット**    | 1 x 10/100/1000 Mbps（POE PDサポート）; 1 x 10/100 Mbps IEEE802.3/802.3u             |
| **USB**         | 3 x USB-A 3.0 ホスト ; 1 x USB-C 2.0（OS書き込みとデバッグ用）                        |
| **RS485**       | 3x RS485（絶縁）                                                                   |
| **RS232**       | 1x RS232（絶縁）                                                                   |
| **DI**          | 8 x 絶縁DIポート（入力電圧：5-24V DC）                                      |
| **DO**          | 8 x 絶縁DOポート（出力電圧：60V DC）                                       |
| **HDMI**        | 2 x HDMI 2.0                                                                          |
| **LED**        | 4 x LEDインジケータ                                                                     |
| **SIMカードスロット** | Nano SIMカードサポート                                                              |
| **M.2 M-KEYスロット**  | 1x 2280 M.2 NVMe SSD用 ; 1x 2280 AIアクセラレータ用                             |
| **M.2 B-KEYスロット**  | 1x 5G/4G LTE用                                                                  |
| **mini PCIeスロット**  | 1x 4G LTE/LoRa/Zigbee用                                                         |
| **ブザー**          | 1                                                                                 |
| **リセットボタン**    | 1                                                                                 |

### LEDインジケータステータス

reComputer Industrial R2000は、マシンの動作状態を示す4つのLEDインジケータを備えています。各LEDの具体的な機能とステータスについては、以下の表を参照してください：
<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>名前 </th>
        <th>色</th>
        <th>ステータス</th>
        <th>説明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2"> **PWR** </td>
        <td rowspan="2">緑 </td>
        <td>点灯</td>
        <td>デバイスが電源に接続されています。</td>
      </tr>
      <tr>
        <td>消灯</td>
        <td>デバイスが電源に接続されていません。</td>
      </tr>
      <tr>
        <td> **ACT** </td>
        <td>緑</td>
        <td>点灯</td>
        <td>Linux下では、このピンはeMMCアクセスを示すために点滅します。起動中にエラーが発生した場合、このLEDはエラーパターンで点滅し、Raspberry Piウェブサイトのルックアップテーブル（[Raspberry Pi Documentation - Configuration](https://www.raspberrypi.com/documentation/computers/configuration.html)）を使用してデコードできます。</td>
      </tr>
      <tr>
        <td> **USER** </td>
        <td>緑/赤/青</td>
        <td></td>
        <td>ユーザーによって定義される必要があります。</td>
      </tr>
      <tr>
        <td rowspan="2"> **4G/5G** </td>
        <td rowspan="2">緑 </td>
        <td>点灯</td>
        <td>ダイヤルアップが成功し、接続が正常です。</td>
      </tr>
      <tr>
        <td>消灯</td>
        <td>4G/5G信号が接続されていないか、デバイスの電源が入っていません。</td>
      </tr>
    </tbody>
  </table>
</div>

#### ACTステータステーブル

| 長い点滅 | 短い点滅 | ステータス                               |
|--------------|---------------|-------------------------------------|
| 0            | 3             | 一般的な起動失敗              |
| 0            | 4             | start*.elfが見つかりません                 |
| 0            | 7             | カーネルイメージが見つかりません               |
| 0            | 8             | SDRAM障害                        |
| 0            | 9             | SDRAM不足                   |
| 0            | 10            | HALT状態                        |
| 2            | 1             | パーティションがFATではありません                    |
| 2            | 2             | パーティションからの読み取りに失敗        |
| 2            | 3             | 拡張パーティションがFATではありません           |
| 2            | 4             | ファイル署名/ハッシュ不一致 - Pi 4  |
| 4            | 4             | サポートされていないボードタイプ               |
| 4            | 5             | 致命的なファームウェアエラー                 |
| 4            | 6             | 電源障害タイプA                 |
| 4            | 7             | 電源障害タイプB                 |

ACT LEDが規則的な4回点滅パターンで点滅する場合、bootcode（start.elf）が見つかりません。
ACT LEDが不規則なパターンで点滅する場合、起動が開始されています。
ACT LEDが点滅しない場合、EEPROMコードが破損している可能性があります。何も接続せずに再度試して確認してください。詳細については、Raspberry Piフォーラムを確認してください：
STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums。
詳細については、[Raspberry Piフォーラム](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151)を確認してください

#### USERインジケータ

reComputer Industrial R2000にはUSERインジケータが含まれており、ユーザーは実際のニーズに応じてステータスをカスタマイズできます。

### ブザー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.2_buzzer_1.png" style={{width:800, height:'auto'}}/></div>

reComputer Industrial R2000にはアクティブブザーが含まれており、アラームやイベント通知など様々な目的に使用できます。reComputer Industrial R2000のターミナルで以下を入力してください：

```bash
cat /sys/kernel/debug/gpio
```

このコマンドは、Buzzer_ENに対応するGPIOがgpio627であることを出力します。

### RS485

reComputer Industrial R20xx シリーズ機器には、3x RS485 ポート、6ピン 3.5mm 間隔のフェニックス端子が含まれています。
単一 RS485 のシルクスクリーンは「A/B/GND」です。

**ピン定義**  
端子ピンの割り当ては以下の通りです：  

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>回路図</th>
        <th>ピン ID</th>
        <th>ピン名</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="9"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/discord_2.png" style={{width:500, height:'auto'}}/></td>
        <td>1</td>
        <td>RS485-2_A </td>
      </tr>
      <tr>
        <td>3</td>
        <td>RS485-2_B</td>
      </tr>
      <tr>
        <td>5</td>
        <td>RS485-2_GND </td>
      </tr>
      <tr>
        <td>7</td>
        <td>RS485-3_A </td>
      </tr>
      <tr>
        <td>9</td>
        <td>RS485-3_B</td>
      </tr>
      <tr>
        <td>11</td>
        <td>RS485-3_GND </td>
      </tr>
      <tr>
        <td>8</td>
        <td>RS485-4_A </td>
      </tr>
      <tr>
        <td>10</td>
        <td>RS485-4_B</td>
      </tr>
      <tr>
        <td>12</td>
        <td>RS485-4_GND </td>
      </tr>
    </tbody>
  </table>
</div>

**接続ケーブル**
RS485 配線の回路図は以下の通りです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.3_rs485_1.png" style={{width:800, height:'auto'}}/></div>

注意：製品パッケージには 120 Ohm 終端抵抗器が含まれています。RS485 通信時に必要に応じてご使用ください。

### RS232

reComputer Industrial R2000 シリーズ機器には、1x RS232 ポート、6ピン 3.5mm 間隔のフェニックス端子が含まれています。
単一 RS232 のシルクスクリーンは「TX/RX/GND」です。

**ピン定義**

端子ピンは以下のように定義されています：

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>回路図</th>
        <th>ピン ID</th>
        <th>ピン名</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="3"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/232_introduction_1.png" style={{width:300, height:'auto'}}/></td>
        <td>2</td>
        <td>RS232-1_TX </td>
      </tr>
      <tr>
        <td>4</td>
        <td>RS232-1_RX</td>
      </tr>
      <tr>
        <td>6</td>
        <td>RS232-1_GND </td>
      </tr>
    </tbody>
  </table>
</div>

**接続ケーブル**
RS232 配線の回路図は以下の通りです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.4_rs232_1.png" style={{width:800, height:'auto'}}/></div>

### DI（デジタル入力）

reComputer Industrial R2000 シリーズ機器には、8x DI ポート、3ピン 3.5mm 間隔のフェニックス端子が含まれています。
 単一 DI のシルクスクリーンは「DI/G_DI」です。

**ピン定義**

端子ピンは以下のように定義されています：

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>回路図</th>
        <th>ピン ID</th>
        <th>ピン名</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="9"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/DI_DO_1.png" style={{width:300, height:'auto'}}/></td>
        <td>13</td>
        <td>DI1</td>
      </tr>
      <tr>
        <td>15</td>
        <td>DI2</td>
      </tr>
      <tr>
        <td>17</td>
        <td>DI3</td>
      </tr>
      <tr>
        <td>19</td>
        <td>DI4</td>
      </tr>
      <tr>
        <td>21</td>
        <td>DI5</td>
      </tr>
      <tr>
        <td>23</td>
        <td>DI6</td>
      </tr>
      <tr>
        <td>25</td>
        <td>DI7</td>
      </tr>
      <tr>
        <td>27</td>
        <td>DI8</td>
      </tr>
      <tr>
        <td>29</td>
        <td>G_DI</td>
      </tr>
    </tbody>
  </table>
</div>

**接続ケーブル**
単一 DI 配線の回路図は以下の通りです：

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>**回路図**</th>
        <th>**パラメータ**</th>
        <th>**説明**</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="3"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.5_di_1.png" style={{width:900, height:'auto'}}/></td>
        <td>入力タイプ</td>
        <td>PNP</td>
      </tr>
      <tr>
        <td>絶縁保護</td>
        <td>5kV</td>
      </tr>
      <tr>
        <td>DI から G_DI</td>
        <td>ON 状態：5~30 VDC</td>
      </tr>
    </tbody>
  </table>
</div>

> 注意
> DI テストの詳細については、セクション [link](https://wiki.seeedstudio.com/ja/recomputer_industrial_r20xx_configure_system/di-(digital-input)-testing) を参照してください。

### DO（デジタル出力）

reComputer Industrial R2000 シリーズ機器には、8x DO ポート、3ピン 3.5mm 間隔のフェニックス端子が含まれています。
単一 DO のシルクスクリーンは「DO/G_DO」です。
**ピン定義**
端子ピンは以下のように定義されています：
<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>**回路図**</th>
        <th>**ピン ID**</th>
        <th>**ピン名**</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="9"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/DO_INTRODUCION_20.png" style={{width:500, height:'auto'}}/></td>
        <td>14</td>
        <td>DO1</td>
      </tr>
      <tr>
        <td>16</td>
        <td>DO2</td>
      </tr>
      <tr>
        <td>18</td>
        <td>DO3</td>
      </tr>
      <tr>
        <td>20</td>
        <td>DO4</td>
      </tr>
      <tr>
        <td>22</td>
        <td>DO5</td>
      </tr>
      <tr>
        <td>24</td>
        <td>DO6</td>
      </tr>
      <tr>
        <td>26</td>
        <td>DO7</td>
      </tr>
      <tr>
        <td>28</td>
        <td>DO8</td>
      </tr>
      <tr>
        <td>30</td>
        <td>G_DO</td>
      </tr>
    </tbody>
  </table>
</div>

**接続ケーブル**

単一 DO 配線の回路図は以下の通りです：

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>**回路図**</th>
        <th>**パラメータ**</th>
        <th>**説明**</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="3"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.6_do_1.png" style={{width:900, height:'auto'}}/></td>
        <td>出力タイプ</td>
        <td>トランジスタ</td>
      </tr>
      <tr>
        <td>絶縁保護</td>
        <td>5kV</td>
      </tr>
      <tr>
        <td>出力</td>
        <td> < 60V DC </td>
      </tr>
    </tbody>
  </table>
</div>

### ブートスイッチ

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.7_boot_switch_1.png" style={{width:100, height:'auto'}}/></div>

reComputer Industrial R20xx のブートスイッチは CM5 の nRPI_BOOT ピンに接続されています。このスイッチは、ユーザーが eMMC と USB の間でブートソースを選択するオプションを提供します。通常モードでは、スイッチを「BOOT」ラベルのある側から離れた位置に設定し、システムが eMMC からブートできるようにします。逆に、ユーザーがシステムイメージを書き込む必要がある場合は、スイッチを「BOOT」ラベル側に設定し、システムが Type-C USB インターフェースからブートできるようにします。

| スイッチ位置 | モード         | 説明      | nRPI-BOOT |
|----------------|--------------|-----------------|-----------|
|      <img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/HIGH.png" alt="image" width="80"/>            | 通常モード  | eMMC からブート   | Low       |
|     <img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/LOW.png" alt="image" width="80"/>             | フラッシュモード   | USB からブート    | High      |

### USB

<div align="left">
  <img width={205} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.8_usb_1.png" />
  <img width={250} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.8_usb_2.png" />
  </div>

reComputer Industrial R20xx には、1x USB Type-C ポートと 4x USB Type-A ポートが搭載されています。機能と説明については、以下の表を参照してください。

| **タイプ区分**   | **数量** | **プロトコル** | **機能**   | **説明** |
|-----------|------------|------------|--------------|---------------|
| Type-C   | *1       | USB 2.0    | USB-Device   | シリアルポートデバッグ、イメージ書き込みなどに使用。 |
| Type-A   | *1       | USB 2.0    | USB-Host     | フラッシュドライブ、USB キーボード、マウスなど、さまざまな USB デバイスを接続。 |
| Type-A   | *3       | USB 3.0    | USB-Host     | フラッシュドライブ、USB キーボード、マウスなど、さまざまな USB デバイスを接続。 |

### SIM スロット（内部）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.9_sim_slot(internal)_1.png" style={{width:900, height:'auto'}}/></div>

reComputer Industrial R2000 シリーズ機器には、5G/4G 信号を取得するための Nano SIM カードを取り付けるために使用される内部 Nano SIM カードスロットが含まれています。
標準 SIM、Micro SIM、Nano SIM カードのサイズの違いは以下の通りです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.9_sim_slot(internal)_2.png" style={{width:900, height:'auto'}}/></div>

> **注意**  
> reComputer Industrial R2000 の標準バージョンには 5G/4G モジュールは付属していないことにご注意ください。
> 5G/4G 機能が必要な場合は、追加の 5G/4G モジュールを別途購入する必要があります。

### M.2 M-KEY スロット

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/M.2_1.png" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/M.2_2.png" style={{width:400, height:'auto'}}/></div>

| **スロット**       | **対応プロトコル**   |  
|---------------|--------------------------|  
| **M.2 M-KEY 2280** | M.2 NVMe SSD        |  
| **M.2 M-KEY 2280** | M.2 AI アクセラレータ |  

reComputer Industrial R2000のM.2 M-KEY 2280スロットは、128GB、256GB、512GB、1TB、2TBの容量のNVMe M.2 2280 SSDに対応するよう設計されています。このスロットにより高速ストレージ拡張が可能となり、ユーザーはシステムのパフォーマンスと容量を向上させることができます。

> **注意**  
> SSDカードには主に2つの用途があります：
>
> 1. **大容量ストレージ：** SSDカードは大容量ストレージのニーズに利用できます。
> 2. **イメージ付きブートドライブ：** もう一つの用途は、SSDを大容量ストレージとシステムイメージの保存の両方に使用し、SSDカードから直接ブートできるようにすることです。
>  
> 市場で入手可能なすべてのSSDカードが2番目の用途をサポートしているわけではないことに注意することが重要です。そのため、ブートドライブとして使用する予定で、どのモデルを購入すべきか不明な場合は、推奨する2TB SSD（SKU 114993467）を選択することをお勧めします。このモデルはブート機能についてテストおよび検証済みで、互換性の問題のリスクを軽減し、試行錯誤のコストを最小限に抑えます。

reComputer Industrial R2000のM.2 M-KEY 2280スロットは、PCIE M.2 AI アクセラレータに対応するよう設計されています。R20xx-12シリーズには、最大26TOPSのHailo-8 M.2 AI アクセラレーションが事前にインストールされています。

### Mini-PCIeスロット

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.11_mini-pcie__slot_1.png" style={{width:800, height:'auto'}}/></div>
reComputer Industrial R2000のMiniPCIeスロットは、4G LTE、USB LoRaWAN®、USB Zigbeeなどのデバイスに対応するよう設計されています。


### M.2 B-KEYスロット

reComputer Industrial R2000のM.2 B-KEYスロットは、5G/4G LTEに対応するよう設計されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.12_m.2_b-key__slot_1.png" style={{width:800, height:'auto'}}/></div>

### リセット穴

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.13_reset_hole_1.png" style={{width:200, height:'auto'}}/></div>
reComputer Industrial R2000のリセット穴には、ミニプッシュボタンスイッチがあります。細い物体でこのボタンを押すことで、CM5をリセットできます。このピンがハイの時、CM5が開始したことを示します。このピンをローにドライブすると、モジュールがリセットされます。

### Ethernet RJ45  

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.14_ethernet_rj45_1.png" style={{width:200, height:'auto'}}/></div>

**reComputer R1100**は2つのEthernetポートを搭載しています：  

| **名前**  | **タイプ**                     | **速度**          | **PoE PD**
|-------|------------------------------|---------------------|----------------------------|
| ETH0  | CM5ネイティブギガビットEthernet  | 10/100/1000 Mbit/s  | サポート       |
| ETH1  | USBから変換           | 10/100 Mbit/s       | サポートなし   |

reComputer Industrial R2000には2つのEthernet RJ45ポートが付属しています。ETH0は、10/100/1000 Mbit/sの3つの異なる速度をサポートするCM5ネイティブギガビットEthernetインターフェースです。このインターフェースを通じてPower-over-Ethernet（PoE）配信を有効にし、reComputer Industrial R2000に電力を供給できます。もう一つのETH1は、USBから変換された10/100 Mbit/sをサポートします。

### HDMI

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.15_hdmi_1.png" style={{width:200, height:'auto'}}/></div>

reComputer Industrial R2000は、CM5からの2つのネイティブHDMIインターフェースを搭載し、最大4K @ 60 fpsのビデオ出力をサポートします。複数のディスプレイが必要なアプリケーションに最適で、ユーザーは外部の大画面にコンテンツを出力できます。

### RTC

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.16_rtc_1.png" style={{width:200, height:'auto'}}/></div>
reComputer Industrial R2000は、コンデンサによって電力供給されるRTC回路を搭載しており、電力損失の場合でも時刻保持機能を維持できます。

### ウォッチドッグ

reComputer Industrial R2000には、異常なシステムクラッシュの場合に自動システム再起動を保証する独立したハードウェアウォッチドッグ回路が搭載されています。ウォッチドッグ回路はRTCを通じて実装され、1秒から255秒までの柔軟な給餌時間を可能にします。

## オプションインターフェースとモジュール  

reComputer Industrial R2000は、豊富な拡張モジュールとアクセサリの選択をサポートし、幅広いシナリオと要件に適しています。reComputer Industrial R2000のカスタマイズに興味がある場合は、詳細についてodm@seeed.ccまでお問い合わせください。
以下はアクセサリとオプションモジュールのリストです：

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>備考</th>
        <th>項目</th>
        <th>製品名</th>
        <th>SKU</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="7">LoRa®WAN機能のために一緒に使用する必要があります</td>
        <td rowspan="6">LoRa®モジュール</td>
        <td>地域オプション LoRaWAN ゲートウェイモジュール（USB）- US915</td>
        <td>114992969</td>
      </tr>
      <tr>
        <td>地域オプション LoRaWAN ゲートウェイモジュール（USB）- US915</td>
        <td>114992629</td>
      </tr>
      <tr>
        <td>地域オプション LoRaWAN ゲートウェイモジュール（USB）- US915</td>
        <td>114992991</td>
      </tr>
      <tr>
        <td>地域オプション LoRaWAN ゲートウェイモジュール（SPI）- EU868</td>
        <td>114993268</td>
      </tr>
      <tr>
        <td>地域オプション LoRaWAN ゲートウェイモジュール（SPI）- EU868</td>
        <td>114992549</td>
      </tr>
      <tr>
        <td>地域オプション LoRaWAN ゲートウェイモジュール（USB）- EU868</td>
        <td>114992628</td>
      </tr>
      <tr>
        <td>LoRa®アンテナ</td>
        <td>LoRa アンテナキット - 868-915 MHz</td>
        <td>110061501</td>
      </tr>
      <tr>
        <td></td>
        <td>Zigbeeモジュール</td>
        <td>Mini-PCIe USB Zigbee モジュール</td>
        <td>110992005</td>
      </tr>
      <tr>
        <td></td>
        <td>Zigbeeアンテナ</td>
        <td>reComputer R用Zigbeeアンテナキット</td>
        <td>110061641</td>
      </tr>
      <tr>
        <td rowspan="8">4G機能のための4Gモジュール付き4Gアンテナ、GPS機能のための4Gモジュール付きGPSアンテナ</td>
        <td rowspan="6">4Gモジュール</td>
        <td>LTE Cat 4 EC25-AFXGA-Mini-PCIe モジュール - 北米向け</td>
        <td>113991134</td>
      </tr>
      <tr>
        <td>LTE Cat 4 EC25-EUXGR-Mini-PCIe モジュール - EMEA・タイ向け</td>
        <td>113991135</td>
      </tr>
      <tr>
        <td>LTE Cat 4 EC25-AUXGR-Mini-PCIe モジュール - オーストラリア向け</td>
        <td>113991174</td>
      </tr>
      <tr>
        <td>LTE Cat 4 EC25-EFA-Mini-PCIe モジュール - タイ向け</td>
        <td>113991214</td>
      </tr>
      <tr>
        <td>LTE Cat 4 EC25-EMGA-Mini-PCIe モジュール - マレーシア向け</td>
        <td>113991234</td>
      </tr>
      <tr>
        <td>LTE Cat 4 EC25-JFA-mini-PCIe</td>
        <td>113991296</td>
      </tr>
      <tr>
        <td>4Gアンテナ</td>
        <td>4Gモジュール用4Gアンテナキット</td>
        <td>110061502</td>
      </tr>
      <tr>
        <td>GPSアンテナ</td>
        <td>EC25 4GモジュールのGPSアンテナキット</td>
        <td>110061521</td>
      </tr>
      <tr>
        <td></td>
        <td>暗号化チップTPM 2.0</td>
        <td>infineon SLB9670搭載TPM 2.0モジュール</td>
        <td>114993114</td>
      </tr>
      <tr>
        <td rowspan="5"></td>
        <td rowspan="5">SSDカード</td>
        <td>NVMe M.2 2280 SSD 2TB</td>
        <td>114993467</td>
      </tr>
      <tr>
        <td>NVMe M.2 2280 SSD 1TB</td>
        <td>114993467</td>
      </tr>
      <tr>
        <td>512GB NVMe M.2 PCle Gen3x4 2280 内蔵SSD</td>
        <td>112990247</td>
      </tr>
      <tr>
        <td>256GB NVMe M.2 PCle Gen3x4 2280 内蔵SSD</td>
        <td>112990246</td>
      </tr>
      <tr>
        <td>128GB NVMe M.2 PCle Gen3x4 2280 内蔵SSD</td>
        <td>112990226</td>
      </tr>
      <tr>
        <td>このモジュールはreComputer Industrial R20xxのキャリアボードにはんだ付けする必要があります</td>
        <td>PoE</td>
        <td>reTerminal DM用MQ7813T120 PoEモジュールキット</td>
        <td>110991925</td>
      </tr>
      <tr>
        <td></td>
        <td>UPS</td>
        <td>SuperCAP UPS LTC3350モジュール</td>
        <td>110992004</td>
      </tr>
    </tbody>
  </table>
</div>

reComputer Industrial R20xxメインボードには2つのMini-PCIeスロットがあります。Mini-PCIeスロット1は4Gモジュール、USBプロトコルを使用するLoRa®モジュール、USBプロトコルを使用するZigbeeモジュールをサポートします。一方、Mini-PCIeスロット2はUSBおよびSPIプロトコルを使用するLoRa®モジュールとUSBプロトコルを使用するZigbeeモジュールをサポートします。さらに、4GモジュールとLoRa®モジュールは同時に使用すべきではなく、ボード上に2つのLoRa®モジュールを接続することはできません。

> 注意
> ボード上に2つのLoRa®モジュールを接続することはできません。

### Wi-Fi/BLE  

reComputer Industrial R20xxは、オンボードWi-Fi/BLEバージョンのCM5によって駆動され、CM5と同じWi-Fi/BLEパラメータを提供します。詳細なパラメータ情報については、Raspberry Pi公式ウェブサイトを参照してください。  

### 4Gモジュール

reComputer Industrial R20xxメインボードには1つのM.2 B-KEYスロットと1つのMini-PCIeスロットがあり、M.2 B-KEYスロットとMini-PCIeスロットの両方が4Gモジュールをサポートします。QuectelのEC25 4GモジュールはreComputer Industrial R20xxとの互換性が完全にテストされています。

### 5Gモジュール

reComputer Industrial R20xxメインボードには1つのM.2 B-KEYスロットがあり、USBプロトコルを使用する4G/5Gモジュールをサポートします。QuectelのEC25 4GモジュールはreComputer Industrial R20xxとの互換性が完全にテストされています。

> 注意
> 4G/5G機能が必要な場合は、対応する4Gモジュールと外部アンテナを購入し、セクション4.5「4G/LoRa®/Zigbeeモジュールとアンテナの組み立て」の手順に従う必要があります。

### LoRa® モジュール  

Mini-PCIeスロットは、USBおよびSPIプロトコルを使用するLoRa®モジュールをサポートします。Seeed StudioのWM1302モジュールは、reComputer Industrial R2000との互換性が完全にテストされています。

> 注意
> LoRa®機能が必要な場合は、対応するLoRa®モジュールと外部アンテナを購入し、セクション4.5「4G/LoRa®/Zigbeeモジュールとアンテナの組み立て」の手順に従う必要があります。

### Zigbeeモジュール

Mini-PCIeスロットは、USBプロトコルを利用するZigbeeモジュールをサポートし、互換性のあるデバイスにZigbee機能をシームレスに統合できます。この機能により、Zigbeeネットワーク内での効率的な通信と制御が可能になり、システムの汎用性と接続性が向上します。ZigbeeモジュールにMini-PCIeスロットが利用できることで、ユーザーは信頼性を向上させるための多様なアプリケーションを実装する柔軟性を持てます。

> 注意  
> Zigbee機能が必要な場合は、対応するZigbeeモジュールと外部アンテナを購入し、セクション4.5「4G/LoRa®/Zigbeeモジュールとアンテナの組み立て」の手順に従う必要があります。

### SSD

reComputer Industrial R2000は、PCIeスロット（J7）を使用して2280 NVMe SSDをサポートします。CM5のPCIeはgen2.0で、最大理論速度は5Gbpsであることに注意が必要です。Gen3.0以上のSSDを使用している場合、SSDの最大速度を達成できない可能性があります。テスト後、SSDを搭載したreTerminal DMは最大書き込み速度230MB/s、最大読み取り速度370MB/sを達成できます。どのSSDが互換性があるか不明な場合は、以下のアクセサリリストに従って購入できます。

> 注意
> 以下の点にご注意ください：
> 速度テスト結果は、SSDモデル、テスト方法、テスト環境によって異なる場合があります。ここで提供される値は参考目的のみであり、Seedの研究室で取得されたものです。

> 注意
> SSDカードには主に2つの用途があります：
>
> 1. **大容量ストレージ：** SSDカードは大容量ストレージのニーズに利用できます。
> 2. **イメージ付きブートドライブ：** もう一つの用途は、SSDを大容量ストレージとシステムイメージの保存の両方に使用し、SSDカードから直接ブートできるようにすることです。
> 市場で入手可能なすべてのSSDカードが2番目の用途をサポートしているわけではないことに注意が必要です。したがって、ブートドライブとして使用する予定で、どのモデルを購入すべきか不明な場合は、推奨する1TB SSD（SKU 112990267）を選択することをお勧めします。このモデルはブート機能についてテストおよび検証されており、互換性の問題のリスクを軽減し、試行錯誤のコストを最小限に抑えます。

### 暗号化チップ TPM 2.0

TPMは、Trusted Computing Group（TCG）TPM 2.0仕様に準拠したInfineonのOPTIGA™ TPM SLB9670を特徴とし、reComputer Industrial R2000の暗号化チップとして推奨されます。このチップは、ボード上のポートJ26に適用されるSPIインターフェースを特徴とし、プラットフォームの整合性、リモート証明、暗号化サービスの信頼の根拠を可能にします。

### UPS（無停電電源装置）モジュール

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/UPS_2.png" style={{width:900, height:'auto'}}/></div>

UPSは7Fで、直列で動作します。UPSモジュールはDC5VとCM5コンポーネントの間に配置され、5V電源からの電力損失の際にCPUに警告するためにGPIO信号が利用されます。この信号を受信すると、CPUはスーパーキャパシタのエネルギーが枯渇する前に緊急スクリプトを実行し、「$ shutdown」コマンドを開始します。
UPSによって提供されるバックアップ時間は、システム負荷に大きく依存します。以下は、4GB RAM、32GB eMMCストレージ、Wi-Fiモジュールを搭載したCM5モジュールでテストされた典型的なシナリオです。

| **動作モード** | **時間（秒）**  | **備考**          |
|-----------------------|------------------------------|---------------------|
| アイドル                  | 15           | 公式ドライバープログラムがロードされたアイドル状態でのテスト  |
| CPUフル負荷      | 6            | stress -c 4 -t 10m -v &       |

:::note
UPS機能については詳細情報をお問い合わせください。アラーム信号はアクティブLOWです。
:::

## 追加リソース

- [reComputer Industrial R20xx フライヤー](https://files.seeedstudio.com/wiki/raspberry-pi/Seeed_Raspberry_Pi_Flyer.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品でのご体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
