---
description: reComputer R1100 は Raspberry Pi CM4 を搭載した、AI 機能を備える IoT ゲートウェイ兼コントローラです。2GB RAM、8GB eMMC、デュアル Ethernet、USB、RS485、RS232、DI/DO、そして 4G、LoRa®、Wi-Fi/BLE などの無線接続に対応し、産業オートメーションやエッジコンピューティングに最適です。
title: reComputer R1100 入門ガイド
keywords:
  - Raspberry pi
  - エッジコントローラ
  - reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/recomputer2.jpg
slug: /recomputer_r1100_intro
sku: 113991334,113991374,113991375
last_update:
  date: 2/25/2024
  author: Kasun Thushara
createdAt: '2025-02-27'
updatedAt: '2026-04-21'
url: https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

## 概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

Raspberry Pi CM4 を搭載した reComputer R1100 は、AI 機能を備えた多用途なエッジ IoT ゲートウェイです。**2x Ethernet、2x USB、2x RS485、2x RS232、2x DI、2x DO** といった幅広い産業用インターフェースに加え、**4G、LoRa®、Wi-Fi/BLE** など柔軟な無線接続オプションを備えています。これらの特長により、さまざまな産業用途に最適な選択肢となります。
reComputer R1100 シリーズは、**データ収集とプロセス監視、オートメーションおよびロボット制御、インテリジェント製造、産業用通信およびネットワーキング** などの IoT アプリケーションで広く利用されています。そのコンパクトなサイズ、柔軟性、低コスト、プログラマビリティにより、**オートメーション、IoT システムなど** を強力にサポートします。

:::note
カスタマイズ可能なオプション：ロゴブランディング、パッケージング、ファームウェア書き込み。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>今すぐカスタマイズ ➜</font></span></strong></a>
</div>

## 特長

**オートメーション & IoT システム向けに設計**  

- **BACnet、Modbus RTU、Modbus TCP/IP、KNX** プロトコルをサポート  
- **Node-RED、CODESYS、Balena など** と互換性あり  
- 状態を素早く確認できる **両面 LED インジケータ**  
- **堅牢な金属筐体**、**DIN レールおよび壁掛け** に対応  
- カスタマイズ OS 用に **Yocto と Buildroot** をサポート  

**高いパフォーマンス**  

- **Raspberry Pi CM4** を搭載  
- **Broadcom BCM2711** クアッドコア **Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz**  
- 最大 **8GB RAM** と **32GB eMMC ストレージ**  

**豊富な無線機能**  

- **オンチップ Wi-Fi および BLE**  
- **Mini-PCIe 1**: **LTE、USB LoRa® 
- **Mini-PCIe 2**: **SPI LoRa®、USB LoRa®

**充実したインターフェース**  

- **2x RS485（アイソレート）、2x RS232（アイソレート）、2x アイソレート DI ポート、2x アイソレート DO ポート**  
- **1x 10M/100M/1000M Ethernet**（**PoE** 対応）  
- **1x 10M/100M Ethernet**  
- **1x HDMI 2.0**  
- **2x Type-A USB 2.0**  
- **1x Type-C USB 2.0**（OS 更新用 USB コンソール）  
- **1x MicroSD カードスロット**  
- **1x Nano SIM カードスロット（内部）**  

**安全性と信頼性**  

- **ハードウェアウォッチドッグ**  
- **オプションの UPS スーパーキャパシタ**  
- **金属筐体と PC サイドパネル**  
- **電磁両立性（EMC）規格**:  
  - **ESD**: EN61000-4-2, レベル 3  
  - **EFT**: EN61000-4-4, レベル 2  
  - **サージ保護**: EN61000-4-5, レベル 2  
- **製品ライフタイム**: **reComputer R1100** は **少なくとも 2030 年 12 月まで** 生産が継続されます  

## 仕様

| **パラメータ**          | **説明** |
|------------------------|----------------|
| **ハードウェア仕様** | |
| **製品シリーズ** | R11xx-10, R11xx-00 |
| **CPU** | Raspberry Pi CM4, クアッドコア Cortex-A72 @ 1.5GHz |
| **オペレーティングシステム** | Raspbian, Debian, Yocto, Buildroot |
| **RAM** | 1GB / 2GB / 4GB / 8GB |
| **eMMC ストレージ** | 8GB / 16GB / 32GB |
| **システム仕様** | |
| **電源入力** | DC 9V~36V, 2 ピン端子台 |
| **PoE（受電機器として）** | IEEE 802.3af 規格 12.95W PoE* |
| **過電圧保護** | 40V |
| **消費電力** | アイドル: 2.88W; フルロード: 5.52W |
| **電源スイッチ** | なし |
| **再起動スイッチ** | あり |
| **インターフェース** | |
| **Ethernet** | 1x 10/100/1000Mbps（PoE* 対応）、1x 10/100Mbps IEEE 802.3/802.3u |
| **USB** | 2x USB-A 2.0 ホスト、1x USB-C 2.0（OS 書き込み用） |
| **RS485** | 2x RS485（アイソレート） |
| **RS232** | 2x RS232（アイソレート） |
| **DI（デジタル入力）** | 2x アイソレート DI ポート、入力電圧: 5~24V DC |
| **DO（デジタル出力）** | 2x アイソレート DO ポート、出力電圧: &lt;60V DC |
| **SIM カード** | 1x Nano SIM カードスロット（内部） |
| **SD カード** | 1x MicroSD カードスロット |
| **SSD** | 1x M.2 NVMe SSD スロット（2280-M Key） |
| **LED インジケータ** | 12x LED インジケータ |
| **ブザー** | 1 |
| **リセットボタン** | 1 |
| **HDMI** | 1x HDMI 2.0 |
| **無線通信** | |
| **Wi-Fi 2.4/5.0GHz** | オンチップ Wi-Fi* |
| **BLE 5.0** | オンチップ BLE* |
| **LoRa®** | USB LoRa®*/ SPI LoRa®* |
| **4G セルラー** | 4G LTE* |
| **規格** | |
| **EMC 準拠** | ESD: EN61000-4-2, レベル 3; EFT: EN61000-4-4, レベル 2; サージ: EN61000-4-5, レベル 2 |
| **認証** | CE, FCC, TELEC, RoHS, REACH |
| **環境条件** | |
| **保護等級** | IP40 |
| **動作温度** | -30 ~ 70°C |
| **動作湿度** | 10 ~ 95% RH |
| **保管温度** | -40 ~ 80°C |
| **その他の機能** | |
| **スーパーキャパシタ UPS** | SuperCAP UPS LTC3350 モジュール* |
| **ハードウェアウォッチドッグ** | 1 ~ 255s |
| **RTC** | 高精度 RTC |
| **セキュリティ** | |
| **暗号化チップ** | TPM 2.0*、ATECC608A |
| **冷却システム** | ファンレス |
| **保証** | 2 年 |
| **製品ライフタイム** | 2030 年 12 月まで |
| **注記** | * が付いているオプションは、アクセサリ一覧に従って別途購入が必要です。 |
| **コンポーネント & インターフェース状態** | |
| **Reserved** | 将来の使用または拡張用に予約されています。 |
| **Optional** | 必須ではないコンポーネントであり、ユーザーが有無を選択できます。 |
| **Occupied** | 現在使用中であり、製品機能に不可欠です。 |
| **Included** | 標準パッケージに含まれる必須コンポーネントです。 |

**注記**: `*` が付いているオプションは、アクセサリ一覧に従って別途購入が必要です。

## 機構寸法  

| **パラメータ** | **説明** |
|--------------|----------------|
| **寸法 (W x H x D)** | 130 mm x 93 mm x 49.6 mm |
| **筐体** | 6061 アルミニウム合金ケース（透明 PC サイドパネル付き） |
| **取り付け方法** | DIN レール / 壁掛け |
| **重量（正味）** | 560g |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/dimensions.PNG" style={{width:800, height:'auto'}}/></div>

## ハードウェア概要

### システム概要

#### インターフェース概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/interface.PNG" style={{width:800, height:'auto'}}/></div>

#### メインボード概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/mainboard.PNG" style={{width:800, height:'auto'}}/></div>

#### 電源ブロック図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power.PNG" style={{width:800, height:'auto'}}/></div>

reComputer R1100 は、DC 端子と PoE ポートの 2 種類の電源供給オプションを提供します。デフォルトでは、公式の地域別電源アダプタ（SKU: 110061505/110061506）を使用して DC 端子から給電します。代替として、オプションの PoE 電源（PoE モジュール、SKU: 110991925）も利用できます。この柔軟性により、さまざまな電源ソースとのシームレスな統合が可能となり、多様なアプリケーションニーズに対応できます。

**2 ピン電源端子**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:400, height:'auto'}}/></div>

reComputer R1100 は、9～36V の DC 電圧で動作し、2 ピン電源端子台を介して接続されます。アース接続については、電源端子左上にあるネジにアース線をしっかりと固定することができます。

**PoE**

PoE モジュールを搭載すると、reComputer R1100 の ETH0 ポートは PoE 給電に対応し、Ethernet 経由で便利かつ効率的にデバイスへ電力を供給できます。このオプションにより、設置が簡素化され配線も最小限となるため、電源が限られているアプリケーションや、容易に電源コンセントを確保できない場所に最適です。

- **PoE 入力**: 44~57V（標準: 48V）
- **PoE 出力**: 12V, 最大 1.1A

:::note
同梱の PoE モジュールは IEEE 802.3af 規格に準拠し、最大 12.95W の電力を供給します。ただし、SSD や 4G モジュールなどの高消費電力ペリフェラルに対しては、PoE 電源だけでは不十分な場合があります。そのような場合は、安定かつ信頼性の高い動作を確保するために、DC 端子からの給電を推奨します。
:::

**消費電力**

以下の表は、Seeed Studio のラボで測定された reComputer R1100 の消費電力値を示しています。これらの値はあくまで参考値であり、測定方法や環境条件の違いにより結果が変動する可能性がある点にご注意ください。  

| **状態**   | **電圧** | **電流** | **消費電力** | **説明** |
|-------------|------------|------------|----------------------|----------------|
| **シャットダウン** | 24V | 51mA | 1.224W | シャットダウンおよび電源オフ状態での静的消費電力テスト。 |
| **アイドル** | 24V | 120mA | 2.88W | 24V 電源を供給し、テストプログラムを実行していない状態での入力電流を測定。 |
| **フルロード** | 24V | 230mA | 5.52W | 外部デバイスを接続せず、`"stress -c 4"` コマンドで CPU をフルロード動作させた状態。 |

 **電源オンと電源オフ**  
reComputer R1100 には、標準では電源ボタンは搭載されていません。電源に接続されると、自動的にシステムが起動します。  

- シャットダウンする場合は、オペレーティングシステムのシャットダウンオプションを使用し、処理が完了してから電源を切断してください。  
- システムを再起動するには、電源を再接続するだけで構いません。  

これにより、安全な動作が確保され、データ損失やシステムトラブルの可能性を防ぐことができます。

#### ブロック図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:400, height:'auto'}}/></div>

#### IIC 図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/IIC.PNG" style={{width:600, height:'auto'}}/></div>

## インターフェースの説明

| **インターフェース** | **説明** |
|--------------|----------------|
| **Ethernet** | 1 × 10/100/1000 Mbps（PoE* 対応）、1 × 10/100 Mbps（IEEE 802.3/802.3u） |
| **USB** | 2 × USB-A 2.0（ホスト）、1 × USB-C 2.0（OS 書き込み用） |
| **RS485** | 2 × RS485（絶縁） |
| **RS232** | 2 × RS232（絶縁） |
| **DI (Digital Input)** | 2 × 絶縁 DI ポート、入力電圧：5～24V DC |
| **DO (Digital Output)** | 2 × 絶縁 DO ポート、出力電圧：< 60V DC |
| **HDMI** | 1 × HDMI 2.0 |
| **SD Card Slot** | MicroSD カード対応 |
| **SIM Card Slot** | Nano SIM カード対応 |
| **M.2 Slot** | M.2 NVMe SSD 対応 |
| **LED Indicators** | 12 × LED インジケータ |
| **Buzzer** | 1 |
| **Reset Button** | 1 |  

### LED インジケータの状態

R1100 コンピュータには、システムステータス表示用に 12 個の LED が搭載されています。それぞれの具体的な機能は、以下の表に示します。

以下は、構造化された形式での **LED インジケータ状態** の表です。  

| **LED インジケータ** | **色** | **状態** | **説明** |
|------------------|---------|-----------|----------------|
| **PWR** | 緑 | On | デバイスが電源に接続されています。 |
| | | Off | デバイスが電源に接続されていません。 |
| **ACT** | 緑 | 点滅 | Linux 上での eMMC アクセスを示します。起動中にエラーが発生した場合は、エラーパターンで点滅します（Raspberry Pi のドキュメントを参照）。 |
| **USER** | 緑/赤/青 | ユーザー定義 | ユーザーによってプログラム可能です。 |
| **4G** | 緑 | On | ダイヤルアップが成功し、接続が正常です。 |
| | | Off | 4G 信号が接続されていない、またはデバイスの電源が入っていません。 |
| **DI1** | 緑 | On/Blink | 入力信号を検出しました。 |
| | | Off | 電源がない、またはデータ伝送がありません。 |
| **DI2** | 緑 | On/Blink | 入力信号を検出しました。 |
| | | Off | 電源がない、またはデータ伝送がありません。 |
| **DO1** | 緑 | On/Blink | 出力信号を検出しました。 |
| | | Off | 電源がない、またはデータ伝送がありません。 |
| **DO2** | 緑 | On/Blink | 出力信号を検出しました。 |
| | | Off | 電源がない、またはデータ伝送がありません。 |
| **COM1 (RS485 Channel 1)** | 緑 | On/Blink | データの送受信中です。 |
| | | Off | RS485 チャネル 1 でデータ転送がありません。 |
| **COM2 (RS485 Channel 2)** | 緑 | On/Blink | データの送受信中です。 |
| | | Off | RS485 チャネル 2 でデータ転送がありません。 |
| **COM3 (RS232 Channel 1)** | 緑 | On/Blink | データの送受信中です。 |
| | | Off | RS232 チャネル 1 でデータ転送がありません。 |
| **COM4 (RS232 Channel 2)** | 緑 | On/Blink | データの送受信中です。 |
| | | Off | RS232 チャネル 2 でデータ転送がありません。 |

### ACT ステータスコード

以下は、構造化された形式での **ACT ステータスコード** の表です。  

| 長い点滅回数 | 短い点滅回数 | ステータスの説明 |
|-------------|--------------|--------------------|
| 0 | 3 | 一般的な起動失敗 |
| 0 | 4 | `start*.elf` が見つかりません |
| 0 | 7 | カーネルイメージが見つかりません |
| 0 | 8 | SDRAM 障害 |
| 0 | 9 | SDRAM 不足 |
| 0 | 10 | HALT 状態 |
| 2 | 1 | パーティションが FAT ではありません |
| 2 | 2 | パーティションからの読み取りに失敗しました |
| 2 | 3 | 拡張パーティションが FAT ではありません |
| 2 | 4 | ファイル署名/ハッシュの不一致（Pi 4） |
| 4 | 4 | 非対応のボードタイプ |
| 4 | 5 | 致命的なファームウェアエラー |
| 4 | 6 | 電源障害タイプ A |
| 4 | 7 | 電源障害タイプ B |

**補足メモ：**  

- **ACT LED が規則的な 4 回点滅パターンで点滅する場合**、bootcode（`start.elf`）が欠落していることを示します。  
- **ACT LED が不規則なパターンで点滅する場合**、ブートプロセスが開始していることを示します。  
- **ACT LED がまったく点滅しない場合**、EEPROM コードが破損している可能性があります。周辺機器を一切接続せずに起動してみてください。  
- 詳細については、**Raspberry Pi Forum** を参照してください：[Is your Pi not booting? (Boot Problems Sticky)](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151).

**USER インジケータ**

reComputer R1100 には **USER** インジケータが搭載されており、ユーザーの要件に応じてカスタマイズできます。  

**注意：**  
**USER LED** のテストの詳細については、[This Section](https://wiki.seeedstudio.com/ja/recomputer_r1100_configure_system/#control-led-indicators) を参照してください。

### ブザー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/buzzer.PNG" style={{width:600, height:'auto'}}/></div>

reComputer R1100 にはアクティブブザーが搭載されており、アラームやイベント通知に使用できます。  

**Buzzer_EN** に対応する GPIO を確認するには、ターミナルで次のコマンドを入力します。  

```
cat /sys/kernel/debug/gpio
```

これにより、ブザーに割り当てられた GPIO として **gpio587** が出力されます。  

**注意：**  
**ブザーのテスト** の詳細については、[This Section](https://wiki.seeedstudio.com/ja/recomputer_r1100_configure_system/#controlling-the-buzzer-via-gpio) を参照してください。

### RS485

reComputer R1100 シリーズには、**2 つの RS485 ポート** と **6 ピン 3.5mm ピッチの Phoenix 端子台** が搭載されています。各 RS485 ポートには、識別しやすいようにシルク印刷で **「A/B/GND」** と表示されています。  

**ピン定義**  
端子台のピン割り当ては次のとおりです。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs485.PNG" style={{width:600, height:'auto'}}/></div>

| **ピン ID** | **ピン名**  |  
|-----------|-------------|  
| 1         | RS485-1_A   |  
| 2         | RS485-2_A   |  
| 3         | RS485-1_B   |  
| 4         | RS485-2_B   |  
| 5         | GND         |  
| 6         | GND         |  

ケーブル接続
RS485 配線の回路図は次のとおりです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs485_connection.PNG" style={{width:600, height:'auto'}}/></div>

:::note
製品パッケージには 120 オームの終端抵抗が含まれており、RS485 通信に必要に応じて使用できます。
:::

RS485 テストの詳細については、[This Section](https://wiki.seeedstudio.com/ja/recomputer_r1100_configure_system/#rs485-testing) を参照してください。

### RS232

reComputer R1100 シリーズには、6 ピン 3.5mm ピッチの Phoenix 端子台を備えた 2 つの RS232 ポートがあります。
単一の RS232 ポートのシルク印刷表示は **TX/RX/GND** です。

**ピン定義**

端子台のピン定義は次のとおりです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs285.PNG" style={{width:600, height:'auto'}}/></div>

以下は RS232 ピン定義の表です。

| **ピン ID** | **ピン名**  |
|-----------|--------------|
| 13        | R232-3_RX    |
| 14        | R232-4_RX    |
| 15        | R232-3_TX    |
| 16        | R232-4_TX    |
| 17        | GND          |
| 18        | GND          |

**ケーブル接続**

RS232 配線の回路図は次のとおりです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs285_connection.PNG" style={{width:600, height:'auto'}}/></div>

:::note
RS232 テストの詳細な手順については、RS485 テストの詳細については [This Section](https://wiki.seeedstudio.com/ja/recomputer_r1100_configure_system/#rs232-testing) を参照してください。

:::

### DI (Digital Input)

reComputer R1100 シリーズには、3 ピン 3.5mm ピッチの Phoenix 端子台を備えた 2 つの DI ポートが含まれています。  
単一の DI ポートのシルク印刷表示は **「DI/G_DI」** です。  

**ピン定義**

端子台のピン定義は次のとおりです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DI.PNG" style={{width:600, height:'auto'}}/></div>

以下は **DI (Digital Input) ピン定義** の表です。  

| **ピン ID** | **ピン名** |
|-----------|------------|
| 7         | DI1        |
| 9         | DI2        |
| 11        | G_DI       |

**ケーブル接続**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DI_connect.PNG" style={{width:600, height:'auto'}}/></div>

以下は **DI (Digital Input) パラメータ** の表です。  

| **パラメータ**           | **説明**    |
|------------------------|-------------------|
| 入力タイプ            | PNP               |
| 絶縁保護              | 5 kV              |
| DI と G_DI（ON 状態） | 5～30 VDC         |

:::note
DI テストの詳細については、[This Section](https://wiki.seeedstudio.com/ja/recomputer_r1100_configure_system/#di-digital-input-testing) を参照してください。
:::

### DO (Digital Output)

reComputer R1100 シリーズ機器には 2 つの DO ポートがあり、3 ピン 3.5mm ピッチの Phoenix 端子台を備えています。単一の DO のシルク印刷表示は **「DO/G_DO」** です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DO.PNG" style={{width:600, height:'auto'}}/></div>

**ピン定義表**

| Pin ID | Pin Name |  
|--------|------------|  
| 8      | DO1       |  
| 10     | DO2       |  
| 12     | G_DO      |

 **ケーブル接続**

 単一の DO 配線の回路図は次のとおりです。

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DO_connect.PNG" style={{width:600, height:'auto'}}/></div>

**DO ポートパラメータ**

| パラメータ            | 説明     |  
|----------------------|----------------|  
| 出力タイプ           | トランジスタ      |  
| 絶縁保護             | 5 kV           |  
| 出力注記             | &lt; 60VDC         |

:::note
DO テストの詳細については、[This Section](https://wiki.seeedstudio.com/ja/recomputer_r1100_configure_system/#do-digital-output) を参照してください。
:::

### ブートスイッチ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/Boot.PNG" style={{width:200, height:'auto'}}/></div>

reComputer R1100 のブートスイッチは、CM4 モジュールの nRPI_BOOT ピンに接続されています。このスイッチにより、ユーザーは eMMC と USB の間でブートソースを選択できます。  

- **通常モード：** スイッチを "BOOT" ラベルから**離す**ことで、eMMC から起動します。  
- **書き込みモード：** スイッチを "BOOT" ラベルの**方向へ**倒すことで、システムイメージ書き込み用に Type-C USB インターフェースから起動します。

以下は、ブートスイッチ位置とそれに対応するモードの表です。  

| **スイッチ位置** | **モード**       | **説明**      | **nRPI-BOOT** |
|---------------------|---------------|----------------------|---------------|
| "BOOT" から離す   | 通常モード    | eMMC から起動       | Low           |
| "BOOT" 方向へ倒す  | 書き込みモード | USB から起動        | High          |

### USB

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/usb.PNG" style={{width:200, height:'auto'}}/></div>

reComputer R1100 には USB Type-C ポートが 1 つと USB Type-A ポートが 2 つ搭載されています。以下の表に、それぞれの機能と説明を示します。

USB ポートとその機能をまとめた表は次のとおりです。  

| **タイプ**   | **数量** | **プロトコル** | **機能**   | **説明** |
|-----------|------------|------------|--------------|---------------|
| Type-C   | 1          | USB 2.0    | USB-Device   | シリアルポートのデバッグ、イメージの書き込みなどに使用します。 |
| Type-A   | 2          | USB 2.0    | USB-Host     | フラッシュドライブ、USB キーボード、マウスなど、さまざまな USB デバイスを接続します。 |

### SD スロット

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SD.PNG" style={{width:200, height:'auto'}}/></div>

reComputer R1100 シリーズ機器には micro SD カードスロットが搭載されており、ユーザーデータを保存するための micro SD カードを装着することができます。

### SIM スロット（内部）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/simslot.PNG" style={{width:600, height:'auto'}}/></div>

reComputer R1100 シリーズには内部 Nano SIM カードスロットが搭載されており、Nano SIM カードを装着して 4G 接続を有効にするために設計されています。以下の表は、Standard SIM、Micro SIM、Nano SIM カードのサイズの違いを示しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SIMsizes.PNG" style={{width:400, height:'auto'}}/></div>

:::note
reComputer R1100 の標準バージョンには 4G モジュールは内蔵されていません。4G 機能が必要な場合は、別途 4G モジュールを購入する必要があります。詳細については[このセクション](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/#optional-interfaces-and-modules)を参照してください。
:::

### SSD スロット

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SSD.PNG" style={{width:600, height:'auto'}}/></div>

reComputer R1100 には **NVMe M.2 2280 SSD スロット**が搭載されており、**128GB、256GB、512GB、1TB** の容量に対応しています。このスロットにより、高速なストレージ拡張が可能となり、システムの**性能**と**容量**の両方を強化できます。  

**注意：**  
SSD カードには主に 2 つの用途があります。  

1. **大容量ストレージ** – SSD は大容量のストレージ用途に使用できます。  
2. **システムイメージを格納するブートドライブ** – 一部の SSD は、大容量ストレージとしてだけでなく、システムのブートドライブとしても使用できます。  

ただし、すべての SSD がブート機能をサポートしているわけではありません。SSD をブートドライブとして使用する予定で、どのモデルを購入すべきか分からない場合は、ブート機能についてテストおよび検証済みの **1TB SSD（SKU112990267）** を推奨します。これにより、互換性の問題が軽減され、試行錯誤にかかるコストを最小限に抑えることができます。

### reComputer R1100 上の Mini-PCIe スロット

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/pci.PNG" style={{width:600, height:'auto'}}/></div>

reComputer R1100 には **2 つの Mini-PCIe スロット**が搭載されており、さまざまな通信プロトコルをサポートします。各スロットでサポートされるプロトコルは、以下の表のとおりです。  

| **スロット**       | **サポートされるプロトコル**   |  
|---------------|--------------------------|  
| **Mini-PCIe 1** | 4G LTE, USB LoRa® |  
| **Mini-PCIe 2** | SPI LoRa®, USB LoRa® |  

これらのスロットにより、ユーザーは必要に応じて **4G LTE および LoRa® モジュール**を統合し、接続オプションを拡張できます。

本機には **Mini-PCIe インターフェース**が 2 つ、**スロット 1** と **スロット 2** が搭載されています。  

- **Mini-PCIe スロット 1** は **SIM カードスロット**に接続されており、**USB プロトコル**をサポートするため、**4G LTE および USB LoRa® モジュール**の接続に適しています。  
- **Mini-PCIe スロット 2** は **USB と SPI の両プロトコル**をサポートしますが、SIM カードスロットには**接続されていません**。**SPI LoRa® および USB LoRa® デバイス**を搭載できます。  

これらのスロットにより、さまざまな無線通信モジュールに対して柔軟な拡張オプションが提供されます。

### リセットホール  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reset.PNG" style={{width:200, height:'auto'}}/></div>

reComputer R1100 には、リセットホール内に **ミニプッシュボタンスイッチ**が搭載されています。このボタンを細い物で押すことで、ユーザーは **CM4 をリセット**できます。  

- このピンが**High**のときは、**CM4 が起動している**ことを示します。  
- このピンが**Low に駆動**されると、**モジュールがリセット**されます。

### Ethernet RJ45  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/eth.PNG" style={{width:200, height:'auto'}}/></div>

**reComputer R1100** には 2 つの Ethernet ポートが搭載されています。  

| 名称  | タイプ                         | 速度              | PoE サポート                |
|-------|------------------------------|---------------------|----------------------------|
| ETH0  | CM4 ネイティブ Gigabit Ethernet  | 10/100/1000 Mbit/s  | サポート（追加モジュールが必要） |
| ETH1  | USB 変換 Ethernet           | 10/100 Mbit/s       | 非対応             |

**reComputer R1100** には 2 つの Ethernet RJ45 ポートが搭載されています。  

- **ETH0**：**CM4 ネイティブ Gigabit Ethernet** インターフェースで、**10/100/1000 Mbit/s** の速度をサポートします。追加の **PoE モジュール**を搭載することで、デバイスに電力を供給する **Power over Ethernet（PoE）** を有効にできます。  
- **ETH1**：**USB 変換 Ethernet** インターフェースで、**10/100 Mbit/s** の速度をサポートしますが、**PoE には対応していません**。

**注意**  
PoE の詳細については、[このセクション](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/#poe-power-over-ethernet)を参照してください。

### HDMI

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/display.PNG" style={{width:200, height:'auto'}}/></div>

reComputer R1100 には CM4 からのネイティブ HDMI インターフェースが搭載されており、最大 **4K@60fps** のビデオ出力をサポートします。複数ディスプレイを必要とするアプリケーションに最適で、外部の大型スクリーンへのコンテンツ出力が可能です。

### RTC  

reComputer R1100 には **RTC（Real-Time Clock）回路**が搭載されており、あらかじめ装着された **CR2032 バッテリ**によって、電源喪失時でも正確な時刻保持が可能です。  

:::note
RTC テストの詳細については、[このセクション](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/#rtc-real-time-clock-testing)を参照してください。
:::  

### ウォッチドッグ  

reComputer R1100 には、システムがクラッシュした場合に自動的に再起動を行う **独立したハードウェアウォッチドッグ回路**が搭載されています。このウォッチドッグは **RTC** を介して実装されており、**1 ～ 255 秒の柔軟な給電（フィード）時間**を設定できます。  

:::note
ウォッチドッグテストの詳細については、[このセクション](https://wiki.seeedstudio.com/ja/recomputer_r/#ウォッチドッグ)を参照してください。
:::

## オプションインターフェースおよびモジュール  

reComputer R1100 は、**幅広い拡張モジュールおよびアクセサリ**をサポートしており、さまざまなユースケースに適応できます。reComputer R1100 のカスタマイズに興味がある場合は、詳細について **odm@seeed.cc** までお問い合わせください。  

#### アクセサリおよびオプションモジュール一覧

読みやすさを高めるために整形した表を以下に示します。  

| **備考**                                     | **項目**               | **製品名**                                      | **SKU**         |
|------------------------------------------------|------------------------|------------------------------------------------------|----------------|
| **LoRa® WAN 機能には一緒に使用する必要があります** | LoRa® モジュール           | 地域選択可能 LoRaWAN Gateway Module (SPI) - US915 | 114992969      |
|                                                |                        | 地域選択可能 LoRaWAN Gateway Module (SPI) - EU868 | 114993268      |
|                                                |                        | 地域選択可能 LoRaWAN Gateway Module (USB) - US915 | 114992991      |
|                                                |                        | 地域選択可能 LoRaWAN Gateway Module (USB) - EU868 | 114992628      |
| **LoRa® アンテナ**                              | LoRa® アンテナ          | LoRa アンテナキット - 868-915MHz                        | 110061501      |
| **Wi-Fi 機能にはこのアクセサリが必要です** | Wi-Fi/BLE アンテナ     | Raspberry Pi Compute Module 4 アンテナキット           | 114992364      |
| **4G 機能には 4G モジュールと 4G アンテナが、GPS 機能には 4G モジュールと GPS アンテナが必要です** | 4G モジュール | LTE Cat 4 EC25-AFXGA Mini-PCIe Module - North America | 113991134      |
|                                                |                        | LTE Cat 4 EC25-EUXGR Mini-PCIe Module - EMEA & Thai  | 113991135      |
|                                                |                        | LTE Cat 4 EC25-AUXGR Mini-PCIe Module - Australia    | 113991174      |
|                                                |                        | LTE Cat 4 EC25-EFA Mini-PCIe Module - Thailand       | 113991214      |
|                                                |                        | LTE Cat 4 EC25-EMGA Mini-PCIe Module - Malaysia      | 113991234      |
|                                                |                        | LTE Cat 4 EC25-JFA Mini-PCIe Module - Japan          | 113991296      |
| **4G アンテナ**                                 | 4G アンテナ            | 4G モジュール用 4G アンテナキット                        | 110061502      |
| **GPS アンテナ**                                | GPS アンテナ           | EC25 4G モジュール用 GPS アンテナキット                  | 110061521      |
| **暗号化チップ**                            | TPM 2.0               | Infineon SLB9670 搭載 TPM 2.0 モジュール                | 114993114      |
| **SSD ストレージ**                                | SSD カード              | NVMe M.2 2280 SSD 1TB                               | 112990267      |
|                                                |                        | 512GB NVMe M.2 PCIe Gen3x4 2280 内蔵 SSD        | 112990247      |
|                                                |                        | 256GB NVMe M.2 PCIe Gen3x4 2280 内蔵 SSD        | 112990246      |
|                                                |                        | 128GB NVMe M.2 PCIe Gen3x4 2280 内蔵 SSD        | 112990226      |
| **このモジュールは reComputer R1100 のキャリアボードに半田付けする必要があります** | PoE | MQ7813T120 PoE Module Kit for reTerminal DM | 110991925 |
| **UPS**                                        | UPS                   | SuperCAP UPS LTC3350 モジュール                         | 110992004      |

**reComputer R1100** メインボードには **2 つの Mini-PCIe スロット** があり、以下の互換性があります。  

- **Mini-PCIe スロット 1** は次をサポートします：  
  - **4G モジュール**（USB プロトコル）  
  - **LoRa® モジュール**（USB プロトコル）  

- **Mini-PCIe スロット 2** は次をサポートします：  
  - **LoRa® モジュール**（USB & SPI プロトコル）  

:::note
 **4G と LoRa® モジュールは同時に使用できません。**  
 **ボード上に 2 つの LoRa® モジュールを挿すことはできません。**  

:::

つまり、**4G か LoRa® のどちらか一方**を選択する必要があり、同時に搭載できる LoRa® モジュールは **1 つだけ** です。

### Wi-Fi/BLE  

**reComputer R1100-10** は、オンボードに **Wi-Fi/BLE バージョン** を備えた **CM4** を搭載しており、CM4 と同じ Wi-Fi/BLE パラメータを提供します。詳細な仕様については、**Raspberry Pi 公式サイト** を参照してください。  

### 4G モジュール

**reComputer R1100** メインボードには **2 つの Mini-PCIe スロット** があり、そのうち **Mini-PCIe スロット 1** は **USB プロトコル経由の 4G モジュール** をサポートします。**Quectel EC25 4G モジュール** は reComputer R1100 との互換性が完全にテストされています。  

:::note
**4G 機能** が必要な場合は、**対応する 4G モジュールと外部アンテナを購入** し、[Assemble 4G/LoRa® and Antenna](https://wiki.seeedstudio.com/ja/recomputer_r1100_assembly_guide/) の手順に従ってください。
:::

### LoRa® モジュール  

両方の **Mini-PCIe スロット** は **USB プロトコル経由の LoRa® モジュール** をサポートします。さらに、**Mini-PCIe スロット 2** は **SPI プロトコルを使用する LoRa® モジュール** をサポートします。**Seeed Studio 製 WM1302 モジュール** は reComputer R1100 との互換性が完全にテストされています。

:::note
**LoRa® 機能** が必要な場合は、**対応する LoRa® モジュールと外部アンテナを購入** し、[Assemble 4G/LoRa® and Antenna](https://wiki.seeedstudio.com/ja/recomputer_r1100_assembly_guide/) の手順に従ってください。
:::

### PoE（Power over Ethernet）

**reComputer R1100 は PoE 電源モジュールを追加することで IEEE 802.3af PD（Powered Devices）規格に対応** します。**PoE ソケットはあらかじめボード上に半田付けされています** が、Ethernet PoE 機能を使用するには、ユーザーが **装置を分解して PoE モジュールを取り付ける必要があります**。  

分解手順については、[Disassembly Guide](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-ups-and-poe-module) を参照してください。  

:::note  

- **reComputer R1100 は PoE 給電に対応していますが、標準製品には PoE モジュールは同梱されていません。**  
- **Seeed はバッチカスタマイズ注文向けに PoE の半田付けおよび組立サービスを提供しています。**  
- サンプル評価の場合、お客様は **PoE モジュールを自分で半田付けおよび組み立てる必要があります**。手順は **「Assemble PoE Module」** に記載されています。  

:::

### SSD（ストレージ拡張）

**reComputer R1100 は 2280 NVMe SSD** をサポートしており、これは **ボード上の 2 つの Mini-PCIe スロットの下にある PCIe スロット（J62）** を介して接続されます。  

:::note

- **CM4 の PCIe インターフェースは Gen 2.0** であり、**理論上の最大速度は 5Gbps** です。  
- **Gen 3.0 以上の SSD** を使用した場合、その最大速度に達しない可能性があります。  
- **reTerminal DM のテスト結果は次のとおりです：**  
  - **最大書き込み速度：** 230MB/s  
  - **最大読み取り速度：** 370MB/s  
- SSD の互換性は製品によって異なる可能性があるため、**承認済みアクセサリリストに掲載されている SSD の購入を推奨します**。  

:::

**SSD の利用シナリオ：**  

- **大容量ストレージ** – SSD を使用してストレージ容量を拡張できます。  
- **システムイメージを格納するブートドライブ** – 一部の SSD はシステムイメージを保存し、**SSD から直接ブート** できます。  

:::note
**すべての SSD がブート機能をサポートしているわけではありません！**  
ブート用 SSD が必要で、どれを購入すべきか分からない場合、Seeed は **1TB SSD（SKU: 112990267）** を推奨します。これは **ブート機能についてテストおよび検証済み** であり、互換性リスクとトラブルシューティングコストを最小限に抑えます。  
:::

### 暗号化チップ - TPM 2.0  

reComputer R1100 は、**Infineon の OPTIGA™ TPM SLB9670** をサポートしており、**Trusted Computing Group（TCG）TPM 2.0** 仕様に準拠しています。  

**主な特長：**  

- **セキュリティ向け暗号化チップ**  
- **SPI インターフェース**（ボード上の **ポート J13** に接続）  
- 次のための **信頼の基点（Root of Trust）** を提供：
  - **プラットフォームの完全性**
  - **リモート認証**
  - **暗号サービス**  

:::note  
取り付け手順については、[Assemble TPM 2.0 Module](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-tpm-20-module) を参照してください。  

:::

### UPS（無停電電源装置）モジュール

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/UPS.PNG" style={{width:600, height:'auto'}}/></div>

reComputer R1100 の **UPS モジュール** は、**7F スーパーキャパシタベース** の電源バックアップシステムで、**直列** で動作します。  

**動作概要：**  

1. **DC 5V 電源** と **CM4** の間に配置されます。  
2. **GPIO 信号** を使用して、**5V 電源が失われたとき** に **CPU** に通知します。  
3. CPU は電源が尽きる前に **緊急スクリプト** を実行します。  
4. スクリプトは安全なシステムシャットダウンのために **"$ shutdown"** コマンドを実行します。  

**バックアップ時間：**  
**UPS の動作時間** は **システム負荷** に依存します。以下は次の構成でのテスト結果です：  

- **CM4（4GB RAM、32GB eMMC、Wi-Fi モジュール）**。  

## 追加リソース

- [reComputer R1100 3D ファイル](https://files.seeedstudio.com/R11/reComputer%20R1100_3D.stp)
- [reComputer R1100 回路図設計、PCB 設計](https://files.seeedstudio.com/R11/reComputer%20R1100_schematic_design_files.zip)
- [reComputer R1100 フライヤー](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer-R1100/reComputer-R1100-flyer.pdf)
- [ユーザーマニュアル](https://files.seeedstudio.com/R11/reComputer%20R1100%20User%20Manual-V1.0.pdf)



## リソース

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、お客様が弊社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
