---
description: reComputer Industrial R21xx は Raspberry Pi CM5 を搭載した、AI 機能を備える IoT ゲートウェイ兼コントローラです。2GB RAM、8GB eMMC、デュアル Ethernet、USB、RS485、RS232、DI/DO、およびワイヤレス接続（4G、5G、LoRa®、Wi-Fi/BLE）を備え、産業オートメーションやエッジコンピューティングに最適です。
title: reComputer Industrial R21xx 入門ガイド
keywords:
  - エッジコントローラ
  - Raspberry pi
  - エッジコントローラ
  - reComputer Industrial R21xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg
slug: /recomputer_industrial_R21xx_getting_start
sku: 100099044,100061305,100091962,100097052,E2025091902
last_update:
  date: 09/28/2025
  author: Nolan Chen
createdAt: '2025-09-28'
updatedAt: '2026-05-21'
url: https://wiki.seeedstudio.com/ja/recomputer_industrial_R21xx_getting_start/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:800, height:'auto'}}/></div>

Raspberry Pi CM5 を搭載した reComputer Industrial R21xx は、AI 機能を備えた柔軟なエッジ AI コンピュータです。包括的な産業用インターフェース **（2x Ethernet、4xUSB、2x RS485、2x RS232、2x CAN FD、4x DI、4x DO）** と柔軟なワイヤレス接続オプション（4G/5G、LoRa®、Wi-Fi/BLE）を備え、多様な産業アプリケーションに最適です。

reComputer Industrial R21xx シリーズは、産業用 AI アプリケーションでの利用に最適です。データ収集とプロセス監視、自動化およびロボット制御、インテリジェント製造、産業用通信およびネットワーキングなどの分野で使用できます。小型で柔軟性が高く、低コストかつプログラマブルであるため、自動化および IoT システムなどを強力にサポートします。

:::note
カスタマイズ可能なオプション：ロゴブランディング、パッケージング、ファームウェア書き込み。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>今すぐカスタマイズ ➜</font></span></strong></a>
</div>

## 特長

**産業グレードの信頼性**

- -20°C ～ 60°C の広い温度範囲をサポートするファンレス小型 PC
- ハードウェアウォッチドッグ
- UPS スーパーキャパシタ（オプション）
- 高品質な金属筐体、DIN レールおよび壁面取り付けに対応
- 生産ライフタイム：reComputer Industrial R21xx は少なくとも 2030 年 12 月まで生産継続予定

**高効率 AI コンピューティング**

- Raspberry Pi CM5 搭載
- Broadcom BCM2711 クアッドコア Cortex-A72 (ARM v8) 64 ビット SoC @ 1.5GHz
- 最大 16GB RAM および 64GB eMMC
- 最大 26 TOPS の Hailo-8 AI アクセラレータ搭載（オプション）

**豊富なワイヤレス機能**

- オンチップ Wi-Fi
- オンチップ BLE
- Mini-PCIe：LTE、USB LoRa®
- M.2 KEY-B：4G/5G

**豊富なインターフェース**

- 2x RS485（アイソレート）、2x RS232（アイソレート）、4x 絶縁 DI ポート、4x 絶縁 DO ポート
- 1x 10M/100M/1000M Ethernet（PoE PD 対応）
- 1x 10M/100M Ethernet
- 2x HDMI 2.0
- 3x Type-A USB3.0
- 1x Type-A USB2.0
- 1x Type-C USB2.0（OS アップデート用 USB コンソール）
- 1x Nano SIM カードスロット

## 仕様

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>Parameter </th>
        <th colspan="2">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="3">ハードウェア仕様</td>
      </tr>
      <tr>
        <td>**製品シリーズ**</td>
        <td>R21xx-12</td>
        <td>R21xx-10</td>
      </tr>
      <tr>
        <td> **CPU** </td>
        <td colspan="2">Raspberry Pi Compute Module 5、2.4GHz クアッドコア 64 ビット Arm Cortex-A76</td>
      </tr>
      <tr>
        <td> **AI プロセッサ** </td>
        <td>1x Hailo-8 M.2 AI アクセラレーション 26TOPS をプレインストール</td>
        <td>*</td>
      </tr>
      <tr>
        <td> **オペレーティングシステム** </td>
        <td colspan="2">Raspbian、Debian </td>
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
        <td colspan="2">DC 9V～36V、2 ピン端子台</td>
      </tr>
      <tr>
        <td>PoE（受電デバイスとして）</td>
        <td colspan="2">IEEE 802.3at 規格 25.5W PoE</td>
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
        <td rowspan="2"> Ethernet </td>
        <td colspan="3"> 1 x 10/100/1000 Mbps（PoE PD 対応） </td>
      </tr>
      <tr>
        <td colspan="3"> 1 x 10/100 Mbps IEEE 802.3/802.3u </td>
      </tr>
      <tr>
        <td rowspan="2"> USB </td>
        <td colspan="3"> 3 x USB-A 3.0 ホスト、1 x USB-A 2.0 ホスト </td>
      </tr>
      <tr>
        <td colspan="3"> 1 x USB-C 2.0（OS 書き込み & デバッグ用） </td>
      </tr>
      <tr>
        <td> RS485 </td>
        <td colspan="3"> 2x RS485（アイソレート） </td>
      </tr>
      <tr>
        <td> RS232 </td>
        <td colspan="3"> 2x RS232（アイソレート） </td>
      </tr>
      <tr>
        <td> CAN </td>
        <td colspan="3"> 2x CAN（アイソレート） </td>
      </tr>
      <tr>
        <td rowspan="2"> DI </td>
        <td colspan="3"> 4 x 絶縁 DI ポート </td>
      </tr>
      <tr>
        <td colspan="3"> 入力電圧：5～24V DC </td>
      </tr>
      <tr>
        <td rowspan="2"> DO </td>
        <td colspan="3"> 4 x 絶縁 DO ポート </td>
      </tr>
      <tr>
        <td colspan="3"> 出力電圧：60V DC 以下 </td>
      </tr>
      <tr>
        <td>SIM カード</td>
        <td colspan="3">1x Nano SIM カードスロット</td>
      </tr>
      <tr>
        <td>M.2 スロット</td>
        <td>1x M.2 M-KEY 2280 スロット（NVMe SSD 用）；
1x M.2 M-KEY 2280 スロット（AI アクセラレータ用）
1x M.2 NVMe スロット、t、M.2 M-KEY 2280
（1x Hailo-8 M.2 AI アクセラレーション 26TOPS をプレインストール）;
1x M.2 B-KEY 3042/3052 スロット（5G/4G LTE 用）；</td>
        <td>1x M.2 M-KEY 2280 スロット（NVMe SSD 用）；
1x M.2 M-KEY 2280 スロット（AI アクセラレータ用）;
1x M.2 B-KEY 3042/3052 スロット（5G/4G LTE 用）
2x M.2 NVMe スロット、t、M.2 M-KEY 2280;
1x M.2 NVMe スロット、t、M.2 B-KEY </td>
      </tr>
      <tr>
        <td>Mini-PCIe</td>
        <td colspan="2">1x Mini-PCIe（LoRa モジュール用）</td>
      </tr>
      <tr>
        <td>LED</td>
        <td colspan="2">4 x LED インジケータ</td>
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
        <td colspan="2">オンチップ Wi-Fi</td>
      </tr>
      <tr>
        <td>BLE 5.0</td>
        <td colspan="2">オンチップ BLE</td>
      </tr>
      <tr>
        <td>LoRa®</td>
        <td colspan="2">USB LoRa®*/SPI LoRa®*</td>
      </tr>
      <tr>
        <td>4G/5G セルラー</td>
        <td colspan="2">4G LTE/5G*</td>
      </tr>
      <tr>
        <td colspan="3">**規格**</td>
      </tr>
      <tr>
        <td rowspan="3">EMC</td>
        <td colspan="2">ESD：EN61000-4-2、レベル 3</td>
      </tr>
      <tr>
        <td colspan="2">EFT：EN61000-4-4、レベル 2</td>
      </tr>
      <tr>
        <td colspan="2">サージ：EN61000-4-5、レベル 2</td>
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
        <td colspan="3">**周囲条件**</td>
      </tr>
      <tr>
        <td>保護等級</td>
        <td colspan="2">IP40</td>
      </tr>
      <tr>
        <td>動作温度</td>
        <td colspan="2">-20～65 °C</td>
      </tr>
      <tr>
        <td>動作湿度</td>
        <td colspan="2">10～95% RH</td>
      </tr>
      <tr>
        <td>保管温度</td>
        <td colspan="2">-40～85 °C</td>
      </tr>
      <tr>
        <td colspan="3">その他</td>
      </tr>
      <tr>
        <td>スーパーキャパシタ UPS</td>
        <td colspan="2">SuperCAP UPS LTC3350 モジュール*</td>
      </tr>
      <tr>
        <td>ハードウェアウォッチドッグ</td>
        <td colspan="2">1～255s</td>
      </tr>
      <tr>
        <td>RTC</td>
        <td colspan="2">高精度 RTC</td>
      </tr>
      <tr>
        <td rowspan="2">セキュリティ</td>
        <td colspan="2">暗号化チップ TPM 2.0*</td>
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
        <td colspan="2">2 年</td>
      </tr>
      <tr>
        <td>生産ライフタイム</td>
        <td colspan="2">2036 年 12 月まで</td>
      </tr>
      <tr>
        <td>**注記**</td>
        <td colspan="2">* が付いているオプションは、アクセサリ一覧に従って追加購入が必要です。</td>
      </tr>
    </tbody>
  </table>
</div>


<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th colspan="2">コンポーネントおよびインターフェース状態の説明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Reserved</td>
        <td>将来の使用または拡張のために予約されています。</td>
      </tr>
      <tr>
        <td> Optional </td>
        <td colspan="2">将来の使用または拡張のために指定されています。</td>
      </tr>
      <tr>
        <td> **AI Processor** </td>
        <td>必須ではないコンポーネントであり、ユーザーは有無を選択できます。</td>
      </tr>
      <tr>
        <td> Occupied </td>
        <td>現在使用中であり、製品機能に不可欠です。</td>
      </tr>
      <tr>
        <td>Included</td>
        <td colspan="2">標準パッケージに含まれる必須コンポーネントです。</td>
      </tr>
    </tbody>
  </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/1.4_dimension_1.png" style={{width:800, height:'auto'}}/></div>

## Hailo の概要

### ハードウェアの概要

[Hailo](https://hailo.ai/) は、エッジデバイス上での高性能ディープラーニングアプリケーション向けに特化した最先端の AI プロセッサを提供しています。同社のソリューションは、高度な AI アクセラレータとビジョンプロセッサによって、エッジにおける次世代の生成 AI に加え、認識および映像強調を実現することに重点を置いています。そして、26 TOPS の AI 性能を提供する Hailo-8 NPU アクセラレータを搭載した reComputer_R21xx は、YOLOv8s で 200 FPS 以上を達成することが可能です。

### ソフトウェアの概要

![](https://seeed-projects.github.io/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/assets/images/architecture-2bfc6ed440e1add56388738e87558050.png)

Hailo AI Software Suite は、ハードウェアアクセラレータ上で AI モデルを効率的に実行するための強力なツール群を提供します。既存のディープラーニングフレームワークとシームレスに統合できるよう設計されており、開発者にスムーズなワークフローを提供します。このプロセスでは、まず Model Build Environment で ONNX ファイルから HEF（Hailo Executable Binary File）を生成します。作成された HEF ファイルは推論マシン（Runtime Environment）に転送され、そこで HailoRT API を用いて推論を実行するために使用されます。提供されているスクリプトは、Model Build Environment 内で ONNX ファイルを HEF ファイルへ変換する作業を支援します。

> **Note:**
> **Hailo NPU の使用例についてさらに知りたい場合は、この [link](https://github.com/Seeed-Projects/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero) をクリックしてください。**

## ハードウェア概要

### システム概要

#### インターフェース概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/2.1.1.png" style={{width:800, height:'auto'}}/></div>

#### メインボード概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.1.2_mainboard_overview_1.png" style={{width:800, height:'auto'}}/></div>

#### 電源ブロック図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.1.3_power_diagram_1.png" style={{width:800, height:'auto'}}/></div>

reComputer Industrial R21xx は、DC 端子と PoE ポートの 2 種類の電源供給方式に対応しています。これにより電源選択の柔軟性が高まり、さまざまな電源ソースとの容易な統合が可能になります。

**2 ピン電源端子**

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:100, height:'auto'}}/></div>

reComputer Industrial R21xx は、9～36V の端子 DC 電圧で給電されます。電源は 2 ピン電源端子ブロックコネクタを介して接続します。
<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2-pin_power_terminal_2.png" style={{width:100, height:'auto'}}/></div>

reComputer Industrial R21xx をアース接続するには、電源端子の右側にあるネジにアース線を固定します。

**PoE**

reComputer Industrial R21xx の ETH0(PoE PD) ポートは PoE 給電に対応しており、Ethernet 経由で装置に電源を供給する便利で効率的な方法を提供します。このオプションにより、設置作業が簡素化され、必要な配線本数も削減されるため、電源が限られているアプリケーションやコンセントが容易に確保できない環境に最適なソリューションとなります。

- PoE PD: IEEE 802.3at, 最大 25.5W

> Note:
> reComputer Industrial R21xx に搭載されている PoE モジュールは IEEE 802.3at 規格に準拠しており、最大 25W の電力供給が可能です。そのため、5G や 4G モジュールなどの高消費電力の周辺機器を接続する必要がある場合、PoE 給電だけでは十分でない可能性があります。この場合は、装置の安定かつ信頼性の高い動作を確保するために、DC 端子からの給電を使用することを推奨します。

**消費電力**

reComputer Industrial R21xx には標準で電源ボタンは搭載されておらず、電源が接続されるとシステムは自動的に起動します。シャットダウンする際は、オペレーティングシステム上でシャットダウンオプションを選択し、システムが完全に停止するまで待ってから電源を切ってください。システムを再起動するには、再度電源を接続するだけです。

#### ブロック図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.1.4_block_diagram_1.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/2.1.4_block_diagram_2.png" style={{width:800, height:'auto'}}/></div>

#### IIC 図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.1.5_iic_diagram_1.png" style={{width:800, height:'auto'}}/></div>

## インターフェース説明

| Type            | Description                                                                           |
|-----------------|---------------------------------------------------------------------------------------|
| **Ethernet**    | 1 x 10/100/1000 Mbps（POE PD 対応）; 1 x 10/100 Mbps IEEE802.3/802.3u                |
| **USB**         | 3 x USB-A 3.0 Host ; 1 x USB-C 2.0（OS のフラッシュおよびデバッグ用）               |
| **RS485**       | 2x RS485（アイソレート）                                                              |
| **RS232**       | 2x RS232（アイソレート）                                                              |
| **CAN**         | 2x 絶縁 CAN FD ポート                                                                 |
| **DI**          | 4 x 絶縁 DI ポート（入力電圧: 5–24V DC）                                             |
| **DO**          | 4 x 絶縁 DO ポート（出力電圧: < 60V DC）                                             |
| **HDMI**        | 2 x HDMI 2.0                                                                          |
| **LED**         | 4 x LED インジケータ                                                                 |
| **SIM Card Slot**   | Nano SIM カード対応                                                              |
| **M.2 M-KEY Slot**  | 1x 2280（M.2 NVMe SSD 用）; 1x 2280（AI アクセラレータ用）                        |
| **M.2 B-KEY Slot**  | 1x 5G/4G LTE 用                                                                    |
| **Buzzer**          | 1                                                                                 |
| **Reset Button**    | 1                                                                                 |

### LED インジケータの状態

reComputer Industrial R21xx には 4 つの LED インジケータが搭載されており、装置の動作状態を示します。各 LED の具体的な機能と状態については、以下の表を参照してください。
<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>Name </th>
        <th>Color</th>
        <th>Status</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2"> **PWR** </td>
        <td rowspan="2">Green </td>
        <td>On</td>
        <td>装置が電源に接続されています。</td>
      </tr>
      <tr>
        <td>Off</td>
        <td>装置が電源に接続されていません。</td>
      </tr>
      <tr>
        <td> **ACT** </td>
        <td>Orange</td>
        <td>On</td>
        <td>Linux では、このピンは eMMC アクセスを示すために点滅します。ブート中にエラーが発生した場合、この LED はエラーコードに対応したパターンで点滅し、そのパターンは Raspberry Pi のウェブサイトにあるルックアップテーブル（[Raspberry Pi Documentation - Configuration](https://www.raspberrypi.com/documentation/computers/configuration.html)）を用いて読み取ることができます。</td>
      </tr>
      <tr>
        <td> **USER** </td>
        <td>Green/Red/Blue</td>
        <td></td>
        <td>ユーザーによって定義する必要があります。</td>
      </tr>
      <tr>
        <td rowspan="2"> **4G/5G** </td>
        <td rowspan="2">Green </td>
        <td>On</td>
        <td>ダイヤルアップに成功し、接続が正常です。</td>
      </tr>
      <tr>
        <td>Off</td>
        <td>4G/5G 信号が接続されていないか、装置の電源が入っていません。</td>
      </tr>
    </tbody>
  </table>
</div>

#### ACT ステータス表

| Long flashes | Short flashes | Status                               |
|--------------|---------------|-------------------------------------|
| 0            | 3             | 一般的なブート失敗                  |
| 0            | 4             | start*.elf が見つかりません         |
| 0            | 7             | カーネルイメージが見つかりません    |
| 0            | 8             | SDRAM 障害                          |
| 0            | 9             | SDRAM 不足                          |
| 0            | 10            | HALT 状態                           |
| 2            | 1             | パーティションが FAT ではありません |
| 2            | 2             | パーティションからの読み取りに失敗  |
| 2            | 3             | 拡張パーティションが FAT ではありません |
| 2            | 4             | ファイル署名/ハッシュの不一致 - Pi 4 |
| 4            | 4             | 非対応のボードタイプ                |
| 4            | 5             | 致命的なファームウェアエラー        |
| 4            | 6             | 電源障害タイプ A                    |
| 4            | 7             | 電源障害タイプ B                    |

ACT LED が規則的な 4 回点滅パターンで点滅する場合、bootcode(start.elf) を見つけられていません。
ACT LED が不規則なパターンで点滅する場合は、ブートが開始されています。
ACT LED が点滅しない場合、EEPROM コードが破損している可能性があります。何も接続しない状態でもう一度試してください。詳細については Raspberry Pi フォーラムを参照してください。
STICKY: あなたの Pi が起動しませんか？（ブート問題 STICKY）- Raspberry Pi Forums.
詳細については [Raspberry Pi forum](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151) を確認してください

#### USER インジケータ

reComputer Industrial R21xx には USER インジケータが搭載されており、ユーザーは実際のニーズに応じてステータスをカスタマイズできます。

### ブザー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.2_buzzer_1.png" style={{width:800, height:'auto'}}/></div>

reComputer Industrial R21xx にはアクティブブザーが搭載されており、アラームやイベント通知などさまざまな用途に使用できます。reComputer Industrial R21xx のターミナルで次を入力します：

```bash
cat /sys/kernel/debug/gpio
```

このコマンドは、Buzzer_EN に対応する GPIO が gpio627 であることを出力します。

### RS485

reComputer Industrial R2100 シリーズ機器には、2× RS485 ポート（6 ピン 3.5mm ピッチのフェニックス端子）が含まれます。
単一 RS485 のシルク印刷は「A/B/GND」です。

**ピン定義**  
端子のピン割り当ては次のとおりです。  

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
        <td rowspan="6"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/485_1.png" style={{width:300, height:'auto'}}/></td>
        <td>1</td>
        <td>RS485-3_A </td>
      </tr>
      <tr>
        <td>3</td>
        <td>RS485-3_B</td>
      </tr>
      <tr>
        <td>5</td>
        <td>RS485-3_GND </td>
      </tr>
      <tr>
        <td>7</td>
        <td>RS485-4_A </td>
      </tr>
      <tr>
        <td>9</td>
        <td>RS485-4_B</td>
      </tr>
      <tr>
        <td>11</td>
        <td>RS485-4_GND </td>
      </tr>
    </tbody>
  </table>
</div>

**ケーブル接続**
RS485 配線の回路図は次のとおりです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/485_2.png" style={{width:800, height:'auto'}}/></div>

注意：製品パッケージには 120 オームの終端抵抗がいくつか含まれています。RS485 で通信する際に、必要に応じて使用できます。

### RS232

reComputer Industrial R21xx シリーズ機器には、1× RS232 ポート（6 ピン 3.5mm ピッチのフェニックス端子）が含まれます。
単一 RS232 のシルク印刷は「TX/RX/GND」です。

**ピン定義**

端子ピンは次のように定義されています：

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
        <td rowspan="6"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/232_1.png" style={{width:300, height:'auto'}}/></td>
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
      <tr>
        <td>8</td>
        <td>RS232-2_TX </td>
      </tr>
      <tr>
        <td>10</td>
        <td>RS232-2_RX </td>
      </tr>
      <tr>
        <td>12</td>
        <td>RS232-2_GND </td>
      </tr>
    </tbody>
  </table>
</div>

**ケーブル接続**
RS232 配線の回路図は次のとおりです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/21-rs232.png" style={{width:800, height:'auto'}}/></div>

### DI（デジタル入力）

reComputer Industrial R2000 シリーズ機器には、4× DI ポート（3 ピン 3.5mm ピッチのフェニックス端子）が含まれます。
 The silkscreen of single DI is "DI/G_DI".

**ピン定義**

端子ピンは次のように定義されています：

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
        <td rowspan="5"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/DI_1.png" style={{width:300, height:'auto'}}/></td>
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
        <td>G_DI</td>
      </tr>
    </tbody>
  </table>
</div>

**ケーブル接続**
単一 DI 配線の回路図は次のとおりです：

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
        <td>DI から G_DI まで</td>
        <td>ON 状態：5～30 VDC</td>
      </tr>
    </tbody>
  </table>
</div>

> Note
> DI テストの詳細については、[link](https://wiki.seeedstudio.com/ja/recomputer_industrial_R21xx_configure_system/di-(digital-input)-testing) セクションを参照してください。

### DO（デジタル出力）

reComputer Industrial R2000 シリーズ機器には、4× DO ポート（3 ピン 3.5mm ピッチのフェニックス端子）が含まれます。
単一 DO のシルク印刷は「DO/G_DO」です。
**ピン定義**
端子ピンは次のように定義されています：
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
        <td rowspan="5"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/OD_1.png" style={{width:300, height:'auto'}}/></td>
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
        <td>G_DO</td>
      </tr>
    </tbody>
  </table>
</div>

**ケーブル接続**

単一 DO 配線の回路図は次のとおりです：

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
        <td rowspan="3"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/DO_2.png" style={{width:900, height:'auto'}}/></td>
        <td>出力タイプ</td>
        <td>トランジスタ</td>
      </tr>
      <tr>
        <td>絶縁保護</td>
        <td>5 kV</td>
      </tr>
      <tr>
        <td>出力</td>
        <td> < 60V DC </td>
      </tr>
    </tbody>
  </table>
</div>

### CAN FD

reComputer Industrial R2100 シリーズ機器には、2× CAN FD ポート（6 ピン 3.5mm ピッチのフェニックス端子）が含まれます。
単一 CAN FD のシルク印刷は「CANH/CANL/GND」です。
**ピン定義**
端子ピンは次のように定義されています：

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
        <td rowspan="6"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/CAN_1.png" style={{width:900, height:'auto'}}/></td>
        <td>23</td>
        <td>CAN-0_H</td>
      </tr>
      <tr>
        <td>25</td>
        <td>CAN-0_L</td>
      </tr>
      <tr>
        <td>27</td>
        <td>CAN-0_GND</td>
      </tr>
      <tr>
        <td>24</td>
        <td>CAN-1_GND</td>
      </tr>
      <tr>
        <td>26</td>
        <td>CAN-1_GND</td>
      </tr>
      <tr>
        <td>28</td>
        <td>CAN-1_GND</td>
      </tr>
    </tbody>
  </table>
</div>

ケーブル接続
CAN FD 配線の回路図は次のとおりです：
<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/CAN_2.jpg" style={{width:800, height:'auto'}}/></div>

### ブートスイッチ

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.7_boot_switch_1.png" style={{width:100, height:'auto'}}/></div>

reComputer Industrial R2000 のブートスイッチは、CM5 の nRPI_BOOT ピンに接続されています。このスイッチにより、ユーザーは eMMC と USB の間でブートソースを選択できます。通常モードでは、スイッチを「BOOT」ラベル側から離した位置に設定し、システムを eMMC から起動できるようにします。逆に、システムイメージを書き込む必要がある場合は、スイッチを「BOOT」ラベル側に切り替え、システムを Type-C USB インターフェースから起動できるようにします。

| スイッチ位置 | モード         | 説明      | nRPI-BOOT |
|----------------|--------------|-----------------|-----------|
|      <img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/HIGH.png" alt="image" width="80"/>            | 通常モード  | eMMC から起動   | Low       |
|     <img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/LOW.png" alt="image" width="80"/>             | フラッシュモード   | USB から起動    | High      |

### USB

<div align="left">
  <img width={205} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.8_usb_1.png" />
  <img width={250} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.8_usb_2.png" />
  </div>

reComputer Industrial R21xx には、1× USB Type-C ポートと 4× USB Type-A ポートが搭載されています。それぞれの機能と説明については、以下の表を参照してください。

| **タイプ区別**   | **数量** | **プロトコル** | **機能**   | **説明** |
|-----------|------------|------------|--------------|---------------|
| Type-C   | *1       | USB 2.0    | USB-Device   | シリアルポートのデバッグ、イメージの書き込みなどに使用されます。 |
| Type-A   | *1       | USB 2.0    | USB-Host     | フラッシュドライブ、USB キーボード、マウスなど、さまざまな USB デバイスを接続します。 |
| Type-A   | *3       | USB 3.0    | USB-Host     | フラッシュドライブ、USB キーボード、マウスなど、さまざまな USB デバイスを接続します。 |

### SIM スロット（内部）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.9_sim_slot(internal)_1.png" style={{width:900, height:'auto'}}/></div>

reComputer Industrial R2000 シリーズ機器には内部 Nano SIM カードスロットが搭載されており、Nano SIM カードを装着して 5G/4G 信号を取得するために使用されます。
標準 SIM、Micro SIM、Nano SIM カードのサイズの違いは次のとおりです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.9_sim_slot(internal)_2.png" style={{width:900, height:'auto'}}/></div>

> **注意**  
> reComputer Industrial R2000 の標準バージョンには 5G/4G モジュールは付属していません。
> 5G/4G 機能が必要な場合は、別途 5G/4G モジュールを追加購入する必要があります。

### M.2 M-KEY スロット

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/M.2_1.png" style={{width:400, height:'auto'}}/>
  <img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/M.2_2.png" style={{width:400, height:'auto'}}/>
 </div>

| **スロット**       | **対応プロトコル**   |  
|---------------|--------------------------|  
| **M.2 M-KEY 2280** | M.2 NVMe SSD        |  
| **M.2 M-KEY 2280** | M.2 AI  Accelerator |  

reComputer Industrial R2000 の M.2 M-KEY 2280 スロットは、容量 128GB、256GB、512GB、1TB、2TB の NVMe M.2 2280 SSD を搭載できるように設計されています。このスロットにより、高速なストレージ拡張が可能となり、システムの性能と容量を向上させることができます。

> **注意**  
> SSD カードには主に 2 つの用途があります。
>
> 1. **大容量ストレージ：** SSD カードは大容量ストレージ用途に使用できます。
> 2. **イメージを格納したブートドライブ：** もう 1 つの用途は、SSD を大容量ストレージとして使用すると同時にシステムイメージを保存し、SSD カードから直接起動できるようにすることです。
>  
> 市販されているすべての SSD カードが 2 番目の用途をサポートしているわけではないことに注意してください。そのため、ブートドライブとして使用する予定で、どのモデルを購入すべきか不明な場合は、当社推奨の 2TB SSD（SKU 114993467）をお選びいただくことをお勧めします。このモデルはブート機能についてテストおよび検証済みであり、互換性問題のリスクを軽減し、試行錯誤にかかるコストを最小限に抑えることができます。

reComputer Industrial R2000 の M.2 M-KEY 2280 スロットは、PCIE M.2 AI Accelerator を搭載できるように設計されています。また、R21xx-12 シリーズには最大 26TOPS の Hailo-8 M.2 AI アクセラレーションがあらかじめ搭載されています。

### Mini-PCIe スロット

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.11_mini-pcie__slot_1.png" style={{width:800, height:'auto'}}/></div>
reComputer Industrial R2000 の MiniPCIe スロットは、4G LTE、USB LoRaWAN® などのデバイスを搭載できるように設計されています。

### リセットホール

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/reset.jpg" style={{width:200, height:'auto'}}/></div>

reComputer AI Industrial R2135 のリセットホール内にはミニプッシュボタンスイッチがあります。細い物でこのボタンを押すことで、CM4 をリセットできます。このピンが High のときは CM4 が起動したことを示します。このピンを Low にするとモジュールがリセットされます。

### M.2 B-KEY スロット

reComputer Industrial R2000 の M.2 B-KEY スロットは、5G/4G LTE を搭載できるように設計されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.12_m.2_b-key__slot_1.png" style={{width:800, height:'auto'}}/></div>

### Ethernet RJ45  

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.14_ethernet_rj45_1.png" style={{width:200, height:'auto'}}/></div>

**reComputer R1100** には 2 つの Ethernet ポートが搭載されています。  

| **名称**  | **タイプ**                     | **速度**          | **PoE PD**
|-------|------------------------------|---------------------|----------------------------|
| ETH0  | CM5 ネイティブ Gigabit Ethernet  | 10/100/1000 Mbit/s  | 対応       |
| ETH1  | USB から変換           | 10/100 Mbit/s       | 非対応   |

reComputer Industrial R2000 には 2 つの Ethernet RJ45 ポートが搭載されています。ETH0 は CM5 ネイティブの Gigabit Ethernet インターフェースで、10/100/1000 Mbit/s の 3 つの速度に対応しています。このインターフェースを介して PoE（Power over Ethernet）給電を有効にでき、reComputer Industrial R2000 に電力を供給できます。もう一方の ETH1 は USB から変換された 10/100 Mbit/s に対応しています。

### HDMI

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.15_hdmi_1.png" style={{width:200, height:'auto'}}/></div>

reComputer Industrial R2000 は CM5 からのネイティブ HDMI インターフェースを 2 系統備えており、最大 4K @ 60 fps のビデオ出力をサポートします。複数ディスプレイを必要とするアプリケーションに最適で、外部の大型スクリーンにコンテンツを出力できます。

### RTC

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.16_rtc_1.png" style={{width:200, height:'auto'}}/></div>
reComputer Industrial R2000 にはコンデンサで駆動される RTC 回路が搭載されており、電源喪失時でも時刻保持機能を維持できます。

:::note
RTC を使用している場合、デバイスが突然電源を失ったときは、RTC が完全に放電するまで待ってから電源を再接続して再起動してください。完全に放電していないと、デバイスが再起動条件を満たせず、正常に起動できない場合があります。
:::

### ウォッチドッグ

reComputer Industrial R2000 には独立したハードウェアウォッチドッグ回路が搭載されており、システムが異常クラッシュした場合に自動的にシステムを再起動します。ウォッチドッグ回路は RTC によって実装されており、1～255 秒の柔軟な給電時間（ウォッチドッグの餌やり時間）を設定できます。

## オプションインターフェースおよびモジュール  

reComputer Industrial R2000 は豊富な拡張モジュールとアクセサリをサポートしており、幅広いシナリオや要件に対応できます。reComputer Industrial R2000 のカスタマイズにご興味がある場合は、詳細について odm@seeed.cc までお問い合わせください。
以下はアクセサリおよびオプションモジュールの一覧です。

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
        <td rowspan="7">LoRa®WAN 機能には一緒に使用する必要があります</td>
        <td rowspan="6">LoRa® モジュール</td>
        <td>地域別オプション LoRaWAN Gateway Module (USB) - US915</td>
        <td>114992969</td>
      </tr>
      <tr>
        <td>地域別オプション LoRaWAN Gateway Module(USB)-US915</td>
        <td>114992629</td>
      </tr>
      <tr>
        <td>地域別オプション LoRaWAN Gateway Module(USB)-US915</td>
        <td>114992991</td>
      </tr>
      <tr>
        <td>地域別オプション LoRaWAN Gateway Module(SPI)-EU868</td>
        <td>114993268</td>
      </tr>
      <tr>
        <td>地域別オプション LoRaWAN Gateway Module(SPI)-EU868</td>
        <td>114992549</td>
      </tr>
      <tr>
        <td>地域別オプション LoRaWAN Gateway Module(USB)-EU868</td>
        <td>114992628</td>
      </tr>
      <tr>
        <td>LoRa® アンテナ</td>
        <td>LoRa アンテナキット - 868-915 MHz</td>
        <td>110061501</td>
      </tr>
      <tr>
        <td rowspan="8">4G 機能には 4G モジュールと 4G アンテナを、GPS 機能には 4G モジュールと GPS アンテナを一緒に使用する必要があります</td>
        <td rowspan="6">4G モジュール</td>
        <td>LTE Cat 4 EC25-AFXGA-Mini-PCIe Module - 北米向け</td>
        <td>113991134</td>
      </tr>
      <tr>
        <td>LTE Cat 4 EC25-EUXGR-Mini-PCIe Module - EMEA およびタイ向け</td>
        <td>113991135</td>
      </tr>
      <tr>
        <td>LTE Cat 4 EC25-AUXGR-Mini-PCIe Module - オーストラリア向け</td>
        <td>113991174</td>
      </tr>
      <tr>
        <td>LTE Cat 4 EC25-EFA-Mini-PCIe Module - タイ向け</td>
        <td>113991214</td>
      </tr>
      <tr>
        <td>LTE Cat 4 EC25-EMGA-Mini-PCIe Module - マレーシア向け</td>
        <td>113991234</td>
      </tr>
      <tr>
        <td>LTE Cat 4 EC25-JFA-mini-PCIe</td>
        <td>113991296</td>
      </tr>
      <tr>
        <td>4G アンテナ</td>
        <td>4G モジュール用 4G アンテナキット</td>
        <td>110061502</td>
      </tr>
      <tr>
        <td>GPS アンテナ</td>
        <td>EC25 4G モジュール用 GPS アンテナキット</td>
        <td>110061521</td>
      </tr>
      <tr>
        <td></td>
        <td>暗号化チップ TPM 2.0</td>
        <td>infineon SLB9670 搭載 TPM 2.0 モジュール</td>
        <td>114993114</td>
      </tr>
      <tr>
        <td rowspan="5"></td>
        <td rowspan="5">SSD カード</td>
        <td>NVMe M.2 2280 SSD 2TB</td>
        <td>114993467</td>
      </tr>
      <tr>
        <td>NVMe M.2 2280 SSD 1TB</td>
        <td>114993467</td>
      </tr>
      <tr>
        <td>512GB NVMe M.2 PCle Gen3x4 2280 内蔵 SSD</td>
        <td>112990247</td>
      </tr>
      <tr>
        <td>256GB NVMe M.2 PCle Gen3x4 2280 内蔵 SSD</td>
        <td>112990246</td>
      </tr>
      <tr>
        <td>128GB NVMe M.2 PCle Gen3x4 2280 内蔵 SSD</td>
        <td>112990226</td>
      </tr>
      <tr>
        <td>このモジュールは reComputer Industrial R21xx のキャリアボードに半田付けする必要があります</td>
        <td>PoE</td>
        <td>reTerminal DM 用 MQ7813T120 PoE モジュールキット</td>
        <td>110991925</td>
      </tr>
      <tr>
        <td></td>
        <td>UPS</td>
        <td>SuperCAP UPS LTC3350 モジュール</td>
        <td>110992004</td>
      </tr>
    </tbody>
  </table>
</div>

reComputer Industrial R21xx メインボードには 2 つの Mini-PCIe スロットがあります。Mini-PCIe スロット 1 は USB プロトコルを使用する 4G モジュールおよび LoRa® モジュールをサポートし、Mini-PCIe スロット 2 は USB および SPI プロトコルを使用する LoRa® モジュールをサポートします。さらに、4G モジュールと LoRa® モジュールは同時に使用すべきではなく、ボード上に 2 つの LoRa® モジュールを挿すことはできません。

> Note
> ボード上に 2 つの LoRa® モジュールを挿すことはできません。

### Wi-Fi/BLE  

reComputer Industrial R21xx は、オンボード Wi-Fi/BLE バージョンを備えた CM5 を搭載しており、CM5 と同じ Wi-Fi/BLE パラメータを提供します。詳細なパラメータ情報については、Raspberry Pi 公式ウェブサイトを参照してください。  

### 4G モジュール

reComputer Industrial R21xx メインボードには 1 つの M.2 B-KEY スロットと 1 つの Mini-PCIe スロットがあり、M.2 B-KEY スロットと Mini-PCIe スロットの両方が 4G モジュールをサポートします。Quectel 社の EC25 4G モジュールは、reComputer Industrial R21xx との互換性が完全にテストされています。

### 5G モジュール

reComputer Industrial R21xx メインボードには 1 つの M.2 B-KEY スロットがあり、USB プロトコルを使用する 4G/5G モジュールをサポートします。Quectel 社の EC25 4G モジュールは、reComputer Industrial R21xx との互換性が完全にテストされています。

> Note
> 4G/5G 機能が必要な場合は、対応する 4G モジュールと外部アンテナを購入し、4.5 章「4G/LoRa® モジュールとアンテナの組み立て」の手順に従う必要があることに注意してください。

### LoRa® モジュール  

Mini-PCIe スロットは、USB および SPI プロトコルを使用する LoRa® モジュールをサポートします。Seeed Studio の WM1302 モジュールは、reComputer Industrial R2000 との互換性が完全にテストされています。

> Note
> LoRa® 機能が必要な場合は、対応する LoRa® モジュールと外部アンテナを購入し、4.5 章「4G/LoRa® モジュールとアンテナの組み立て」の手順に従う必要があることに注意してください。

### SSD

reComputer Industrial R2000 は、PCIe スロット（J7）を使用して 2280 NVMe SSD をサポートします。CM5 の PCIe は最大理論速度 5Gbps の Gen2.0 であることに注意することが重要です。Gen3.0 以上の SSD を使用している場合、SSD の最大速度を達成できない可能性があります。テストの結果、SSD を搭載した reTerminal DM は、最大書き込み速度 230MB/s、最大読み取り速度 370MB/s を達成できます。どの SSD が互換性があるか不明な場合は、以下のアクセサリリストに従って購入することができます。

> Note
> 次の点に注意してください：
> 速度テストの結果は、SSD モデル、テスト方法、およびテスト環境によって異なる場合があります。ここで示す値は参考値であり、Seeed のラボで取得されたものです。

> Note
> SSD カードには主に 2 つの用途があります：
>
> 1. **大容量ストレージ：** SSD カードは大容量ストレージのニーズに利用できます。
> 2. **イメージを格納するブートドライブ：** もう 1 つの用途は、SSD を大容量ストレージとして使用すると同時にシステムイメージを保存し、SSD カードから直接起動できるようにすることです。
> 市場に出回っているすべての SSD カードが 2 番目の用途をサポートしているわけではないことに注意することが重要です。そのため、ブートドライブとして使用する予定で、どのモデルを購入すべきか不明な場合は、当社推奨の 1TB SSD（SKU 112990267）を選択することをお勧めします。このモデルはブート機能についてテストおよび検証されており、互換性の問題のリスクを軽減し、試行錯誤のコストを最小限に抑えます。

### 暗号化チップ TPM 2.0

TPM には Infineon の OPTIGA™ TPM SLB9670 が搭載されており、Trusted Computing Group（TCG）TPM 2.0 仕様に準拠しており、reComputer Industrial R2000 用の暗号化チップとして推奨されます。このチップはボード上のポート J26 に適用される SPI インターフェースを備えており、プラットフォームの完全性のための信頼のルート、リモート認証、および暗号サービスを有効にします。

### UPS（無停電電源装置）モジュール

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/UPS_2.png" style={{width:900, height:'auto'}}/></div>

UPS は 7F で直列動作します。UPS モジュールは DC5V と CM5 コンポーネントの間に配置されており、5V 電源からの電力喪失時に CPU に警告するために GPIO 信号が使用されます。この信号を受信すると、CPU はスーパーキャパシタのエネルギーが枯渇する前に緊急スクリプトを実行し、`$ shutdown` コマンドを実行します。
UPS によって提供されるバックアップ時間は、システム負荷に大きく依存します。以下は、4GB RAM、32GB eMMC ストレージ、および Wi-Fi モジュールを備えた CM5 モジュールでテストされた代表的なシナリオです。

| **動作モード** | **時間(s)**  | **備考**          |
|-----------------------|------------------------------|---------------------|
| アイドル                  | 15           | 公式ドライバプログラムをロードしたアイドル状態でのテスト  |
| CPU フルロード      | 6            | stress -c 4 -t 10m -v &       |

:::note
UPS 機能については、詳細情報についてお問い合わせください。アラーム信号はアクティブ Low です。
:::

## 追加リソース

- [reComputer Industrial R21xx フライヤー](https://files.seeedstudio.com/wiki/raspberry-pi/Seeed_Raspberry_Pi_Flyer.pdf)



## リソース

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## 技術サポート & 製品ディスカッション

当社製品をお選びいただきありがとうございます。お客様が当社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択できるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
