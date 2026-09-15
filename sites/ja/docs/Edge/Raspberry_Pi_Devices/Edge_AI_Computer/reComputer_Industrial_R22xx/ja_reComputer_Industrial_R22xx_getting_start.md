---
description: reComputer Industrial R22xx は、Raspberry Pi CM5 をベースに Hailo-8 AI アクセラレータを搭載し、最大 26 TOPS を実現する産業グレードの AI 搭載 NVR です。PoE PSE 対応の 4 つのギガビット Ethernet ポートに加え、さらに 1 つのギガビット Ethernet ポートを備え、高帯域幅のビデオストリーミングと IP カメラ向けのシンプルな PoE 展開を可能にします。豊富な産業用 I/O、柔軟なワイヤレス接続、ファンレス熱設計、-20 °C から 50 °C までの広い動作温度範囲を備え、要求の厳しいシナリオにおいても信頼性の高い AI ビデオ解析と連続した安定動作を実現します。
title: reComputer Industrial R22xx 入門ガイド
keywords:
  - エッジ AI NVR
  - Raspberry pi
  - エッジ AI NVR
  - reComputer Industrial R22xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg
slug: /recomputer_industrial_r22xx_getting_start
sku: 100077451,100079040
last_update:
  date: 02/09/2026
  author: Nolan Chen
createdAt: '2025-09-28'
updatedAt: '2026-05-21'
url: https://wiki.seeedstudio.com/ja/recomputer_industrial_r22xx_getting_start/
---

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg" style={{width:800, height:'auto'}}/></div>

Raspberry Pi CM5 を搭載した reComputer Industrial R22xx は、AI 機能を備えた柔軟なエッジ AI NVR です。包括的な産業用インターフェース **(5x Ethernet, 4xUSB, 2x RS485, 1x RS232, 1x CAN FD, 4x DI and 4x DO)** と柔軟なワイヤレス接続オプション (4G/5G, LoRa®, Wi-Fi/BLE) を備えており、多様な産業用途に最適です。

reComputer Industrial R22xx シリーズは、産業用 AI アプリケーションでの利用に最適です。データ収集およびプロセス監視、自動化およびロボット制御、インテリジェント製造、産業用通信およびネットワーキングなどの分野で使用できます。小型、柔軟性、低コスト、プログラマビリティを兼ね備え、自動化および IoT システムなどを強力にサポートします。

:::note
カスタマイズ可能なオプション：ロゴブランディング、パッケージング、ファームウェア書き込み。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2235-12-p-6654.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>今すぐカスタマイズ ➜</font></span></strong></a>
</div>

## 特長

**産業グレードの信頼性**

- -20°C 〜 50°C の広い温度範囲をサポートするファンレス小型 PC
- ハードウェアウォッチドッグ
- UPS スーパーキャパシタ（オプション）
- 高品質な金属ケース、DIN レールおよび壁面取り付けに対応
- 製品ライフタイム：reComputer Industrial R22xx は少なくとも 2036 年 1 月まで生産が継続されます

**高効率 AI コンピューティング**

- Raspberry Pi CM5 搭載
- Broadcom BCM2711 クアッドコア Cortex-A72 (ARM v8) 64 ビット SoC @ 1.5GHz
- 最大 16GB RAM および 64GB eMMC
- 最大 26 TOPS の Hailo-8 AI アクセラレータを搭載

**豊富なワイヤレス機能**

- オンチップ Wi-Fi
- オンチップ BLE
- Mini-PCIe: LTE, USB LoRa®
- M.2 KEY-B: 4G/5G

**豊富なインターフェース**

- 2x RS485（アイソレート）、1x RS232（アイソレート）、4x アイソレート DI ポート、4x アイソレート DO ポート
- 4 x 10/100/1000 Mbps（PoE PSE 対応）
- 1 x 10/100/1000 Mbps IEEE 802.3/802.3u
- 2x HDMI 2.0
- 4x Type-A USB3.0
- 1x Type-C USB2.0（OS 更新用 USB コンソール）
- 1x Nano SIM カードスロット

## 仕様

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>Parameter </th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="2">ハードウェア仕様</td>
      </tr>
      <tr>
        <td>**製品シリーズ**</td>
        <td>R22xx-12</td>
      </tr>
      <tr>
        <td> **CPU** </td>
        <td>Raspberry Pi Compute Module 5、2.4GHz クアッドコア 64 ビット Arm Cortex-A76</td>
      </tr>
      <tr>
        <td> **AI プロセッサ** </td>
        <td>1x Hailo-8 M.2 AI アクセラレーション 26TOPS をプレインストール</td>
      </tr>
      <tr>
        <td> **オペレーティングシステム** </td>
        <td>Raspbian, Debian </td>
      </tr>
      <tr>
        <td> **RAM** </td>
        <td>2GB/4GB/8GB/16GB</td>
      </tr>
      <tr>
        <td> **eMMC** </td>
        <td>16GB/32GB/64GB</td>
      </tr>
      <tr>
        <td colspan="2"> **システム仕様** </td>
      </tr>
      <tr>
        <td> 電源入力 </td>
        <td>DC 9V~36V、2 ピン端子台</td>
      </tr>
      <tr>
        <td>PoE（受電デバイスとして）</td>
        <td>IEEE 802.3at 規格 25.5W PoE</td>
      </tr>
      <tr>
        <td>電源スイッチ</td>
        <td>なし</td>
      </tr>
      <tr>
        <td>再起動スイッチ</td>
        <td>あり</td>
      </tr>
      <tr>
        <td colspan="2"> **インターフェース** </td>
      </tr>
      <tr>
        <td rowspan="2"> Ethernet </td>
        <td colspan="2"> 1 x 10/100/1000 Mbps（PoE PD 対応） </td>
      </tr>
      <tr>
        <td colspan="2"> 1 x 10/100 Mbps IEEE 802.3/802.3u </td>
      </tr>
      <tr>
        <td rowspan="2"> USB </td>
        <td colspan="2"> 4 x USB-A 3.0 ホスト</td>
      </tr>
      <tr>
        <td colspan="2"> 1 x USB-C 2.0 （OS 書き込み & デバッグ用） </td>
      </tr>
      <tr>
        <td> RS485 </td>
        <td colspan="2"> 2x RS485（アイソレート） </td>
      </tr>
      <tr>
        <td> RS232 </td>
        <td colspan="2"> 1x RS232（アイソレート） </td>
      </tr>
      <tr>
        <td rowspan="2"> DI </td>
        <td colspan="3"> 4 x アイソレート DI ポート </td>
      </tr>
      <tr>
        <td colspan="3"> 入力電圧: 5~24V DC </td>
      </tr>
      <tr>
        <td rowspan="2"> DO </td>
        <td colspan="2"> 4 x アイソレート DO ポート </td>
      </tr>
      <tr>
        <td colspan="2"> 出力電圧: 60V DC 未満 </td>
      </tr>
      <tr>
        <td>SIM カード</td>
        <td colspan="2">1x Nano SIM カードスロット</td>
      </tr>
      <tr>
        <td>M.2 スロット</td>
        <td>2x M.2 M-key 2280 スロット（NVMe SSD 用）；
1x M.2 M-key 2240 スロット（AI アクセラレータ用）
（1x Hailo-8 M.2 AI アクセラレーション 26TOPS をプレインストール）;
1x M.2 B-key 3042/3052 スロット（5G/4G LTE 用）</td>
      </tr>
      <tr>
        <td>Mini-PCIe</td>
        <td>LoRa モジュール用 1x Mini-PCIe</td>
      </tr>
      <tr>
        <td>LED</td>
        <td>4 x LED インジケータ</td>
      </tr>
      <tr>
        <td>ブザー</td>
        <td>1</td>
      </tr>
      <tr>
        <td>リセットボタン</td>
        <td>1</td>
      </tr>
      <tr>
        <td>HDMI</td>
        <td>2 x HDMI 2.0</td>
      </tr>
      <tr>
        <td colspan="2">ワイヤレス通信</td>
      </tr>
      <tr>
        <td>Wi-Fi 2.4/5.0 GHz</td>
        <td>オンチップ Wi-Fi</td>
      </tr>
      <tr>
        <td>BLE 5.0</td>
        <td>オンチップ BLE</td>
      </tr>
      <tr>
        <td>LoRa®</td>
        <td>USB LoRa®*/SPI LoRa®*</td>
      </tr>
      <tr>
        <td>4G/5G セルラー</td>
        <td>4G LTE/5G*</td>
      </tr>
      <tr>
        <td colspan="2">**規格**</td>
      </tr>
      <tr>
        <td rowspan="3">EMC</td>
        <td>ESD: EN61000-4-2, レベル 3</td>
      </tr>
      <tr>
        <td>EFT: EN61000-4-4, レベル 2</td>
      </tr>
      <tr>
        <td>サージ: EN61000-4-5, レベル 2</td>
      </tr>
      <tr>
        <td rowspan="4">認証</td>
        <td>CE, FCC</td>
      </tr>
      <tr>
        <td>TELEC</td>
      </tr>
      <tr>
        <td>RoHS</td>
      </tr>
      <tr>
        <td>REACH</td>
      </tr>
      <tr>
        <td colspan="2">**周囲条件**</td>
      </tr>
      <tr>
        <td>保護等級</td>
        <td>IP40</td>
      </tr>
      <tr>
        <td>動作温度</td>
        <td>-20~50 °C</td>
      </tr>
      <tr>
        <td>動作湿度</td>
        <td>10~95% RH</td>
      </tr>
      <tr>
        <td>保管温度</td>
        <td>-40~85 °C</td>
      </tr>
      <tr>
        <td colspan="2">その他</td>
      </tr>
      <tr>
        <td>スーパーキャパシタ UPS</td>
        <td>SuperCAP UPS LTC3350 モジュール*</td>
      </tr>
      <tr>
        <td>ハードウェアウォッチドッグ</td>
        <td>1~255s</td>
      </tr>
      <tr>
        <td>RTC</td>
        <td>高精度 RTC</td>
      </tr>
      <tr>
        <td rowspan="2">セキュリティ</td>
        <td>暗号化チップ TPM 2.0*</td>
      </tr>
      <tr>
        <td>ATECC608A</td>
      </tr>
      <tr>
        <td>放熱</td>
        <td>ファンレス</td>
      </tr>
      <tr>
        <td>保証</td>
        <td>2 年</td>
      </tr>
      <tr>
        <td>製品ライフタイム</td>
        <td>2036 年 1 月まで</td>
      </tr>
      <tr>
        <td>**注記**</td>
        <td>* が付いているオプションは、アクセサリ一覧に従って追加購入が必要です。</td>
      </tr>
    </tbody>
  </table>
</div>


<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th colspan="3">コンポーネントおよびインターフェース状態の説明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Reserved</td>
        <td colspan="2">将来の使用または拡張のために予約されています。</td>
      </tr>
      <tr>
        <td> Optional </td>
        <td colspan="2">将来の使用または拡張のために指定されています。</td>
      </tr>
      <tr>
        <td> **AI Processor** </td>
        <td colspan="2">必須ではないコンポーネントであり、ユーザーは有無を選択できます。</td>
      </tr>
      <tr>
        <td> Occupied </td>
        <td colspan="2">現在使用中であり、製品機能に不可欠です。</td>
      </tr>
      <tr>
        <td>Included</td>
        <td colspan="2">標準パッケージに含まれる必須コンポーネントです。</td>
      </tr>
    </tbody>
  </table>
</div>

<div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Njc4ODc5NDY4NA_832447_3YqS-tCWChlrd6Y9_1767151175?w=2929&h=1991&type=image/png" style={{width:800, height:'auto'}}/></div>

## Hailo の紹介

### ハードウェアの紹介

[Hailo](https://hailo.ai/) は、エッジデバイス上での高性能ディープラーニングアプリケーション向けに特化した最先端の AI プロセッサを提供しています。同社のソリューションは、高度な AI アクセラレータとビジョンプロセッサにより、エッジにおける次世代の生成 AI に加え、認識およびビデオ強調を実現することに重点を置いています。そして Hailo-8 NPU アクセラレータを搭載し 26 TOPs の AI 性能を提供する reComputer_R22xx は、YOLOv8s で 200 FPS 以上を達成することが可能です。

### ソフトウェアの紹介

![](https://seeed-projects.github.io/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/assets/images/architecture-2bfc6ed440e1add56388738e87558050.png)

Hailo AI Software Suite は、ハードウェアアクセラレータ上で AI モデルを効率的に実行するための強力なツールを提供します。既存のディープラーニングフレームワークとシームレスに統合されるよう設計されており、開発者にスムーズなワークフローを提供します。このプロセスでは、まず Model Build Environment で ONNX ファイルから HEF（Hailo 実行バイナリファイル）を生成します。作成された HEF ファイルは推論マシン（Runtime Environment）に転送され、そこで HailoRT API を用いて推論を実行するために使用されます。提供されているスクリプトは、Model Build Environment 内で ONNX ファイルを HEF ファイルに変換する作業を支援します。

> **注:**
> **Hailo NPU の使用例についてさらに知りたい場合は、この [リンク](https://github.com/Seeed-Projects/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero) をクリックしてください。**

## ハードウェア概要

### システム概要

#### インターフェース概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.1.1-1.png" style={{width:800, height:'auto'}}/></div>

#### メインボード概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.1.2-1.png" style={{width:800, height:'auto'}}/></div>

#### 電源ブロック図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.1.3-1.png" style={{width:800, height:'auto'}}/></div>

reComputer Industrial R22xx は、DC 端子と PoE ポートの 2 つの電源オプションをサポートしています。これにより、電源の選択に柔軟性が生まれ、さまざまな電源との容易な統合が可能になります。

**2 ピン電源端子**

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:100, height:'auto'}}/></div>

reComputer Industrial R22xx は、9～36V の端子 DC 電圧で給電されます。電源は 2 ピン電源端子ブロックコネクタを介して接続されます。
<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2-pin_power_terminal_2.png" style={{width:100, height:'auto'}}/></div>

reComputer Industrial R22xx を接地するには、電源端子の右側にあるネジにアース線を固定します。

**PoE**

reComputer Industrial R22xx の ETH1～4（PoE PSE）ポートは、最大 40W の高出力入力をサポートします。これにより、Ethernet 経由で便利かつ効率的にデバイスへ給電でき、設置作業を大幅に簡素化し、配線の必要性を減らします。電源が限られている、または従来の電源コンセントへのアクセスが困難な産業用途での導入に最適なソリューションです。


- PoE PSE（Power Sourcing Equipment）

> 注:
> ETH0 ポートは堅牢な 40W PoE 入力をサポートしますが、reComputer Industrial R2235-12 には高性能な Raspberry Pi CM5 と 26 TOPS の Hailo-8 AI アクセラレータが統合されています。アプリケーションで、フルロードの AI 推論を行いながら、4G/5G モジュールや NVMe SSD などの大電力周辺機器を同時に使用したり、PSE ポート経由で複数の高出力カメラを駆動したりする必要がある場合は、電源として DC 端子（9～36V）を使用することを推奨します。これにより、高負荷動作時でも最大限の安定性とピーク性能が確保されます。

**消費電力**

reComputer Industrial R22xx には標準で電源ボタンは搭載されておらず、電源が接続されるとシステムは自動的に起動します。シャットダウンする際は、オペレーティングシステム上でシャットダウンオプションを選択し、システムが完全に停止するまで待ってから電源を切ってください。システムを再起動するには、電源を再接続するだけです。

#### ブロック図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.1.4-1.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.1.4-2.png" style={{width:800, height:'auto'}}/></div>


## インターフェース説明

| 種類            | 説明                                                                           |
|-----------------|---------------------------------------------------------------------------------------|
| **Ethernet**    | 4 x 10/100/1000 Mbps（PoE PSE 対応）; 1 x 10/100/1000 Mbps IEEE 802.3/802.3u       |
| **USB**         | 4 x USB-A 3.0 ホスト ; 1 x USB-C 2.0（OS のフラッシュおよびデバッグ用）                        |
| **RS485**       | 2x RS485（絶縁）                                                                   |
| **RS232**       | 1x RS232（絶縁）                                                                   |
| **CAN**         | 1x 絶縁 CAN FD ポート                                                              |
| **DI**          | 4 x 絶縁 DI ポート（入力電圧: 5–24V DC）                                      |
| **DO**          | 4 x 絶縁 DO ポート（出力電圧: < 60V DC）                                     |
| **HDMI**        | 2 x HDMI 2.0                                                                          |
| **LED**         | 4 x LED インジケータ                                                                    |
| **SIM Card Slot**   | Nano SIM カード対応                                                            |
| **M.2 M-KEY Slot**  | 2x M.2 M-key 2280 スロット（NVMe SSD 用）；1x M.2 M-key 2240 スロット（AI アクセラレータ用、1x Hailo-8 M.2 AI アクセラレーション 26TOPS をあらかじめ搭載） |
| **M.2 B-KEY Slot**  | 1x（5G/4G LTE 用）                                                                  |
| **ブザー**          | 1                                                                                 |
| **リセットボタン**    | 1                                                                                 |

### LED インジケータの状態

reComputer Industrial R22xx には 4 つの LED インジケータが搭載されており、装置の動作状態を示します。各 LED の具体的な機能と状態については、以下の表を参照してください。
<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>名称 </th>
        <th>色</th>
        <th>状態</th>
        <th>説明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2"> **PWR** </td>
        <td rowspan="2">緑 </td>
        <td>On</td>
        <td>デバイスが電源に接続されています。</td>
      </tr>
      <tr>
        <td>Off</td>
        <td>デバイスが電源に接続されていません。</td>
      </tr>
      <tr>
        <td> **ACT** </td>
        <td>オレンジ</td>
        <td>On</td>
        <td>Linux では、このピンは eMMC アクセスを示すために点滅します。ブート中にエラーが発生した場合、この LED はエラー・パターンで点滅し、Raspberry Pi のウェブサイトにあるルックアップテーブル（[Raspberry Pi Documentation - Configuration](https://www.raspberrypi.com/documentation/computers/configuration.html)）を使用して解読できます。</td>
      </tr>
      <tr>
        <td> **USER** </td>
        <td>緑/赤/青</td>
        <td></td>
        <td>ユーザーによって定義する必要があります。</td>
      </tr>
      <tr>
        <td rowspan="2"> **4G/5G** </td>
        <td rowspan="2">緑 </td>
        <td>On</td>
        <td>ダイヤルアップが成功し、接続が正常です。</td>
      </tr>
      <tr>
        <td>Off</td>
        <td>4G/5G 信号が接続されていないか、デバイスの電源が入っていません。</td>
      </tr>
    </tbody>
  </table>
</div>

4G/5G ステータスインジケータの点灯状態は、使用するモジュールの仕様に依存します。表中の情報は参考値です。

#### ACT ステータス表

| 長い点滅 | 短い点滅 | 状態                               |
|--------------|---------------|-------------------------------------|
| 0            | 3             | 一般的なブート失敗              |
| 0            | 4             | start*.elf が見つかりません                 |
| 0            | 7             | カーネルイメージが見つかりません               |
| 0            | 8             | SDRAM 障害                        |
| 0            | 9             | SDRAM 不足                   |
| 0            | 10            | HALT 状態                        |
| 2            | 1             | パーティションが FAT ではありません                    |
| 2            | 2             | パーティションからの読み取りに失敗        |
| 2            | 3             | 拡張パーティションが FAT ではありません           |
| 2            | 4             | ファイル署名/ハッシュの不一致 - Pi 4  |
| 4            | 4             | 未サポートのボードタイプ               |
| 4            | 5             | 致命的なファームウェアエラー                 |
| 4            | 6             | 電源障害タイプ A                 |
| 4            | 7             | 電源障害タイプ B                 |

ACT LED が規則的な 4 回点滅パターンで点滅する場合、bootcode（start.elf）を見つけられていません。
ACT LED が不規則なパターンで点滅する場合は、ブートが開始されています。
ACT LED が点滅しない場合、EEPROM コードが破損している可能性があります。何も接続しない状態でもう一度試して確認してください。詳細については Raspberry Pi フォーラムを参照してください:
STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums.
詳細については、[Raspberry Pi forum](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151) を参照してください。

#### USER インジケータ

reComputer Industrial R22xx には USER インジケータが搭載されており、ユーザーは実際のニーズに応じてその状態をカスタマイズできます。

### ブザー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.2-1.png" style={{width:800, height:'auto'}}/></div>

reComputer Industrial R22xx にはアクティブブザーが搭載されており、アラームやイベント通知など、さまざまな用途に使用できます。reComputer Industrial R22xx のターミナルで次を入力します:

```bash
cat /sys/kernel/debug/gpio
```

このコマンドは、Buzzer_EN に対応する GPIO が gpio627 であることを出力します。

### RS485

reComputer Industrial R2200 シリーズ機器には 2x RS485 ポートがあり、6 ピン 3.5mm ピッチの Phoenix 端子が使用されています。
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
        <td rowspan="6"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.3-table-1.png" style={{width:300, height:'auto'}}/></td>
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

**接続ケーブル**
RS485 配線の回路図は次のとおりです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.3-1.png" style={{width:800, height:'auto'}}/></div>

注意：製品パッケージには 120 オームの終端抵抗がいくつか含まれています。RS485 で通信する際に、必要に応じて使用できます。

### RS232

reComputer Industrial R22xx シリーズ機器には、6 ピン 3.5mm ピッチのフェニックス端子を備えた RS232 ポートが 1 つ含まれています。
単一 RS232 のシルク印刷は「TX/RX/GND」です。

**ピン定義**

端子ピンの定義は次のとおりです：

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
        <td rowspan="6"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.4-table-1.png" style={{width:300, height:'auto'}}/></td>
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
RS232 配線の回路図は次のとおりです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.4-1.png" style={{width:800, height:'auto'}}/></div>

### DI（デジタル入力）

reComputer Industrial R2000 シリーズ機器には、3 ピン 3.5mm ピッチのフェニックス端子を備えた DI ポートが 4 つ含まれています。
 単一 DI のシルク印刷は「DI/G_DI」です。

**ピン定義**

端子ピンの定義は次のとおりです：

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
        <td rowspan="5"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.5-table-5.png" style={{width:300, height:'auto'}}/></td>
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

**接続ケーブル**
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

> 注記
> DI テストの詳細については、[link](https://wiki.seeedstudio.com/ja/recomputer_industrial_R22xx_configure_system/di-(digital-input)-testing) セクションを参照してください。

### DO（デジタル出力）

reComputer Industrial R22xx シリーズ機器には、3 ピン 3.5mm ピッチのフェニックス端子を備えた DO ポートが 4 つ含まれています。
単一 DO のシルク印刷は「DO/G_DO」です。
**ピン定義**
端子ピンの定義は次のとおりです：
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
        <td rowspan="5"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.6-table-1.png" style={{width:300, height:'auto'}}/></td>
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

**接続ケーブル**

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

reComputer Industrial R2200 シリーズ機器には、6 ピン 3.5mm ピッチのフェニックス端子を備えた CAN FD ポートが 1 つ含まれています。
単一 CAN FD のシルク印刷は「CANH/CANL/GND」です。
**ピン定義**
端子ピンの定義は次のとおりです：

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
        <td rowspan="6"><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.7-table-1.png" style={{width:900, height:'auto'}}/></td>
        <td>8</td>
        <td>CAN-0_H</td>
      </tr>
      <tr>
        <td>10</td>
        <td>CAN-0_L</td>
      </tr>
      <tr>
        <td>12</td>
        <td>CAN-0_GND</td>
      </tr>
    </tbody>
  </table>
</div>

接続ケーブル
CAN FD 配線の回路図は次のとおりです：
<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.7-1.png" style={{width:800, height:'auto'}}/></div>

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
  <img width={250} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.8-3.png" />
  </div>

reComputer Industrial R22xx には、USB Type-C ポートが 1 つと USB Type-A ポートが 4 つ搭載されています。それぞれの機能と説明については、以下の表を参照してください。

| **タイプ区分**   | **数量** | **プロトコル** | **機能**   | **説明** |
|-----------|------------|------------|--------------|---------------|
| Type-C   | *1       | USB 2.0    | USB-Device   | シリアルポートデバッグ、イメージ書き込みなどに使用します。 |
| Type-A   | *4       | USB 3.0    | USB-Host     | フラッシュドライブ、USB キーボード、マウスなど、さまざまな USB デバイスを接続します。 |

### SIM スロット（内部）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.9-1.png" style={{width:900, height:'auto'}}/></div>

reComputer Industrial R2000 シリーズ機器には内部 Nano SIM カードスロットがあり、Nano SIM カードを装着して 5G/4G 信号を取得するために使用されます。
標準 SIM、Micro SIM、Nano SIM カードのサイズの違いは次のとおりです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/2.2.9_sim_slot(internal)_2.png" style={{width:900, height:'auto'}}/></div>

> **注記**  
> reComputer Industrial R2000 の標準バージョンには 5G/4G モジュールは付属していません。
> 5G/4G 機能が必要な場合は、別途 5G/4G モジュールを追加購入する必要があります。

### M.2 M-KEY スロット

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.10-table-1.png" style={{width:400, height:'auto'}}/>
  <img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.10-table-2.png" style={{width:400, height:'auto'}}/>
 </div>

| **スロット**       | **対応プロトコル**   |  
|---------------|--------------------------|  
| **M.2 M-KEY 2280** | 2 x M.2 NVMe SSD        |  
| **M.2 M-KEY 2240** | 1 x M.2 AI  Accelerator |  

reComputer Industrial R22xx の M.2 M-KEY 2280 スロットは、容量 128GB、256GB、512GB、1TB、2TB の NVMe M.2 2280 SSD を搭載できるように設計されています。このスロットにより、高速なストレージ拡張が可能となり、システムの性能と容量を向上させることができます。

> **Note**  
> SSD カードには主に 2 つの用途があります：
>
> 1. **大容量ストレージ：** SSD カードは大容量ストレージ用途に使用できます。
> 2. **イメージ入りブートドライブ：** もう 1 つの用途として、SSD を大容量ストレージとして使用すると同時にシステムイメージを保存し、SSD カードから直接ブートできるようにする方法があります。
>  
> 市場に出回っているすべての SSD カードが 2 番目の用途をサポートしているわけではないことに注意が必要です。そのため、ブートドライブとして使用する予定で、どのモデルを購入すべきか不明な場合は、当社推奨の 2TB SSD（SKU 114993467）を選択することをお勧めします。このモデルはブート機能についてテストおよび検証済みであり、互換性問題のリスクを軽減し、試行錯誤にかかるコストを最小限に抑えることができます。

reComputer Industrial R22xx の M.2 M-KEY 2240 スロットは、PCIE M.2 AI アクセラレータを搭載できるように設計されています。また、R22xx-12 シリーズには最大 26TOPS の Hailo-8 M.2 AI アクセラレーションがあらかじめ搭載されています。

### Mini-PCIe スロット

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.11-1.png" style={{width:800, height:'auto'}}/></div>
reComputer Industrial R22xx の MiniPCIe スロットは、4G LTE や USB LoRaWAN® などのデバイスを搭載できるように設計されています。

### リセットホール

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/reset.jpg" style={{width:200, height:'auto'}}/></div>

reComputer AI Industrial R22xx のリセットホール内にはミニプッシュボタンスイッチがあります。このボタンを細い物で押すことで、CM4 をリセットできます。このピンが High のときは CM4 が起動したことを示し、このピンを Low にするとモジュールがリセットされます。

### M.2 B-KEY スロット

reComputer Industrial R22xx の M.2 B-KEY スロットは、5G/4G LTE を搭載できるように設計されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.12-1.png" style={{width:800, height:'auto'}}/></div>

### Ethernet RJ45 

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.14-1.png" style={{width:400, height:'auto'}}/></div>

**reComputer R1100** には 2 つの Ethernet ポートが搭載されています：  

| **Name**  | **Type**                     | **Speeds**          | **PoE PSE**
|-------|------------------------------|---------------------|----------------------------|
| ETH0  | CM5 ネイティブ Gigabit Ethernet  | 10/100/1000 Mbit/s  | 非対応       |
| ETH1  | USB から変換                  | 10/100/1000 Mbit/s  | 非対応       |
| ETH2-4|	PCIe から変換                 | 10/100/1000 Mbit/s	 | 対応           |

reComputer Industrial R2200 には複数の Ethernet RJ45 ポートが搭載されており、多様な接続が可能です。ETH0 は CM5 ネイティブの Gigabit Ethernet インターフェースで、10/100/1000 Mbit/s と PoE PD 機能をサポートしており、このポートから本体へ給電することができます。ETH1 は USB から変換され、10/100/1000 Mbit/s をサポートします。一方、ETH2、ETH3、ETH4 は PCIe から変換され、高速なパフォーマンスを実現します。特筆すべき点として、拡張ポート（ETH1〜ETH4）はすべて PoE PSE をサポートしており、R2200 から外部接続機器へ電力を供給することができます。

### HDMI

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.15-1.png" style={{width:200, height:'auto'}}/></div>

reComputer Industrial R2200 は CM5 からのネイティブ HDMI インターフェースを 2 系統備えており、最大 4K @ 60 fps のビデオ出力をサポートします。複数ディスプレイを必要とするアプリケーションに最適で、外部の大型スクリーンへコンテンツを出力することができます。


### RTC

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.2.16-1.png" style={{width:200, height:'auto'}}/></div>
reComputer Industrial R2200 にはコンデンサで給電される RTC 回路が搭載されており、電源が失われた場合でも時刻保持機能を維持することができます。

:::note
RTC を使用している場合、デバイスが突然電源を失ったときは、RTC が完全に放電するまで待ってから電源を再接続して再起動してください。完全に放電していないと、デバイスが再起動条件を満たせず、正常に起動できない場合があります。
:::

### ウォッチドッグ

reComputer Industrial R2000 には独立したハードウェアウォッチドッグ回路が搭載されており、システムが異常クラッシュした場合に自動的にシステムを再起動します。ウォッチドッグ回路は RTC によって実装されており、1〜255 秒の柔軟な給餌時間を設定できます。

## オプションインターフェースおよびモジュール  

reComputer Industrial R2000 は豊富な拡張モジュールとアクセサリをサポートしており、幅広いシナリオや要件に対応できます。reComputer Industrial R2000 のカスタマイズにご興味がある場合は、詳細について odm@seeed.cc までお問い合わせください。
以下はアクセサリおよびオプションモジュールの一覧です：

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>Remark</th>
        <th>Item</th>
        <th>Product Name</th>
        <th>SKU</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="7">LoRa®WAN 機能には一緒に使用する必要があります</td>
        <td rowspan="6">LoRa® モジュール</td>
        <td>地域別 LoRaWAN Gateway Module (USB) - US915</td>
        <td>114992969</td>
      </tr>
      <tr>
        <td>地域別 LoRaWAN Gateway Module(USB)-US915</td>
        <td>114992629</td>
      </tr>
      <tr>
        <td>地域別 LoRaWAN Gateway Module(USB)-US915</td>
        <td>114992991</td>
      </tr>
      <tr>
        <td>地域別 LoRaWAN Gateway Module(SPI)-EU868</td>
        <td>114993268</td>
      </tr>
      <tr>
        <td>地域別 LoRaWAN Gateway Module(SPI)-EU868</td>
        <td>114992549</td>
      </tr>
      <tr>
        <td>地域別 LoRaWAN Gateway Module(USB)-EU868</td>
        <td>114992628</td>
      </tr>
      <tr>
        <td>LoRa® アンテナ</td>
        <td>LoRa Antenna Kit - 868-915 MHz</td>
        <td>110061501</td>
      </tr>
      <tr>
        <td rowspan="8">4G 機能には 4G モジュールと 4G アンテナを、GPS 機能には 4G モジュールと GPS アンテナを使用します</td>
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
        <td>4G モジュール用 4G Antenna Kit</td>
        <td>110061502</td>
      </tr>
      <tr>
        <td>GPS アンテナ</td>
        <td>EC25 4G モジュール用 GPS Antenna Kit</td>
        <td>110061521</td>
      </tr>
      <tr>
        <td></td>
        <td>暗号化チップ TPM 2.0</td>
        <td>infineon SLB9670 搭載 TPM 2.0 Module</td>
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
        <td>512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD</td>
        <td>112990247</td>
      </tr>
      <tr>
        <td>256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD</td>
        <td>112990246</td>
      </tr>
      <tr>
        <td>128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD</td>
        <td>112990226</td>
      </tr>
      <tr>
        <td>このモジュールは reComputer Industrial R22xx のキャリアボードに半田付けする必要があります</td>
        <td>PoE</td>
        <td>reTerminal DM 用 MQ7813T120 PoE Module Kit</td>
        <td>110991925</td>
      </tr>
      <tr>
        <td></td>
        <td>UPS</td>
        <td>SuperCAP UPS LTC3350 Module</td>
        <td>110992004</td>
      </tr>
    </tbody>
  </table>
</div>

reComputer Industrial R22xx メインボードには 2 つの Mini-PCIe スロットがあります。Mini-PCIe スロット 1 は USB プロトコルを使用する 4G モジュールおよび LoRa® モジュールをサポートし、Mini-PCIe スロット 2 は USB および SPI プロトコルを使用する LoRa® モジュールをサポートします。さらに、4G モジュールと LoRa® モジュールは同時に使用すべきではなく、基板上に 2 つの LoRa® モジュールを挿すことはできません。

> Note
> 基板上に 2 つの LoRa® モジュールを挿すことはできません。

### Wi-Fi/BLE  

reComputer Industrial R22xx は、オンボード Wi-Fi/BLE バージョンを備えた CM5 を搭載しており、Wi-Fi/BLE のパラメータは CM5 と同一です。詳細なパラメータ情報については、Raspberry Pi 公式ウェブサイトを参照してください。  

### 4G モジュール

reComputer Industrial R22xx メインボードには 1 つの M.2 B-KEY スロットと 1 つの Mini-PCIe スロットがあり、M.2 B-KEY スロットと Mini-PCIe スロットの両方が 4G モジュールをサポートします。Quectel 社の EC25 4G モジュールは、reComputer Industrial R22xx との互換性について十分なテストが行われています。

### 5G モジュール

reComputer Industrial R22xx メインボードには 1 つの M.2 B-KEY スロットがあり、USB プロトコルを使用する 4G/5G モジュールをサポートします。Quectel 社の EC25 4G モジュールは、reComputer Industrial R22xx との互換性について十分なテストが行われています。

> Note
> 4G/5G 機能が必要な場合は、対応する 4G モジュールと外部アンテナを購入し、4.5 章「4G/LoRa® モジュールとアンテナの組み立て」の手順に従ってください。

### LoRa® モジュール  

Mini-PCIe スロットは、USB および SPI プロトコルを使用する LoRa® モジュールをサポートします。Seeed Studio の WM1302 モジュールは、reComputer Industrial R2000 との互換性について十分なテストが行われています。

> Note
> LoRa® 機能が必要な場合は、対応する LoRa® モジュールと外部アンテナを購入し、4.5 章「4G/LoRa® モジュールとアンテナの組み立て」の手順に従ってください。

### SSD

reComputer Industrial R2000 は、PCIe スロット（J7）を使用して 2280 NVMe SSD をサポートします。CM5 の PCIe は Gen2.0 であり、理論上の最大速度は 5Gbps であることに注意してください。Gen3.0 以上の SSD を使用する場合、SSD の最大速度を発揮できない可能性があります。テストの結果、SSD を搭載した reTerminal DM は、最大書き込み速度 230MB/s、最大読み出し速度 370MB/s を達成できます。どの SSD が互換性があるか不明な場合は、以下のアクセサリリストに従って購入することをお勧めします。

> Note
> 次の点に注意してください：
> 速度テストの結果は、SSD のモデル、テスト方法、およびテスト環境によって異なる場合があります。ここで示す値は参考値であり、Seeed のラボで取得されたものです。

> Note
> SSD カードには主に 2 つの用途があります：
>
> 1. **大容量ストレージ：** SSD カードは大容量ストレージ用途に使用できます。
> 2. **イメージを格納するブートドライブ：** もう 1 つの用途は、SSD を大容量ストレージとして使用すると同時にシステムイメージを保存し、SSD カードから直接起動できるようにすることです。
> 市場に出回っているすべての SSD カードが 2 つ目の用途をサポートしているわけではないことに注意が必要です。そのため、ブートドライブとして使用する予定で、どのモデルを購入すべきか分からない場合は、当社推奨の 1TB SSD（SKU 112990267）をお選びいただくことをお勧めします。このモデルはブート機能についてテストおよび検証済みであり、互換性問題のリスクを軽減し、試行錯誤にかかるコストを最小限に抑えます。

### 暗号化チップ TPM 2.0

TPM には、Trusted Computing Group（TCG）TPM 2.0 仕様に準拠した Infineon の OPTIGA™ TPM SLB9670 が搭載されており、reComputer Industrial R2000 向けの暗号化チップとして推奨されています。このチップはボード上のポート J26 に接続される SPI インターフェースを備えており、プラットフォームの完全性のためのルート・オブ・トラスト、リモート認証、および暗号サービスを実現します。

### UPS（無停電電源装置）モジュール

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/2.3.8-1.png" style={{width:900, height:'auto'}}/></div>

UPS は 7F で、直列で動作します。UPS モジュールは DC5V と CM5 コンポーネントの間に配置されており、5V 電源からの電力喪失時に CPU に通知するための GPIO 信号が使用されます。CPU はこの信号を受信すると、スーパーキャパシタのエネルギーが枯渇する前に緊急スクリプトを実行し、"$ shutdown" コマンドを実行します。
UPS によって提供されるバックアップ時間は、システム負荷に大きく依存します。以下は、4GB RAM、32GB eMMC ストレージ、および Wi-Fi モジュールを備えた CM5 モジュールでテストした代表的なシナリオです。

| **動作モード** | **時間(s)**  | **備考**          |
|-----------------------|------------------------------|---------------------|
| アイドル                  | 15           | 公式ドライバプログラムをロードしたアイドル状態でのテスト  |
| CPU フルロード      | 6            | stress -c 4 -t 10m -v &       |

:::note
UPS 機能については、詳細情報を得るために当社までお問い合わせください。また、アラーム信号はアクティブ Low です。
:::


## 技術サポートと製品ディスカッション

当社製品をお選びいただきありがとうございます。お客様が当社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
