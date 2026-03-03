---
description: reComputer R1100は、Raspberry Pi CM4を搭載したAI機能付きIoTゲートウェイ＆コントローラーです。2GB RAM、8GB eMMC、デュアルイーサネット、USB、RS485、RS232、DI/DO、ワイヤレス接続（4G、LoRa®、Wi-Fi/BLE）を特徴とし、産業オートメーション＆エッジコンピューティングに最適です。
title: reComputer R1100 スタートガイド
keywords:
- Raspberry pi
- Edge Controller
- reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/recomputer2.jpg
slug: /ja/recomputer_r1100_intro
last_update:
  date: 2/25/2024
  author: Kasun Thushara
---

## 概要

Raspberry Pi CM4を搭載したreComputer R1100は、AI機能を備えた多用途エッジIoTゲートウェイです。**2x イーサネット、2x USB、2x RS485、2x RS232、2x DI、2x DO**を含む包括的な産業用インターフェースと、**4G、LoRa®、Wi-Fi/BLE**などの柔軟なワイヤレス接続オプションを特徴としています。これらの機能により、様々な産業用アプリケーションに理想的な選択肢となっています。
reComputer R1100シリーズは、**データ取得とプロセス監視、オートメーションとロボティクス制御、インテリジェント製造、産業通信とネットワーキング**を含むIoTアプリケーションで広く使用されています。そのコンパクトなサイズ、柔軟性、低コスト、プログラマビリティは、**オートメーション、IoTシステム、そしてそれ以上**に強力なサポートを提供します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴

**オートメーション＆IoTシステム向け設計**  

- **BACnet、Modbus RTU、Modbus TCP/IP、KNX**プロトコルをサポート  
- **Node-RED、CODESYS、Balena、その他**と互換性  
- 迅速なステータス確認のための**両面LEDインジケーター**  
- **耐久性のある金属筐体**、**DINレールと壁面取り付け**に対応  
- カスタマイズされたOSのための**YoctoとBuildroot**をサポート  

**強力なパフォーマンス**  

- **Raspberry Pi CM4**を搭載  
- **Broadcom BCM2711** クアッドコア **Cortex-A72 (ARM v8) 64ビット SoC @ 1.5GHz**  
- 最大**8GB RAM**と**32GB eMMCストレージ**  

**豊富なワイヤレス機能**  

- **オンチップWi-FiとBLE**  
- **Mini-PCIe 1**: **LTE、USB LoRa®、USB Zigbee**をサポート  
- **Mini-PCIe 2**: **SPI LoRa®、USB LoRa®、USB Zigbee**をサポート  

**包括的なインターフェース**  

- **2x RS485（絶縁）、2x RS232（絶縁）、2x 絶縁DIポート、2x 絶縁DOポート**  
- **1x 10M/100M/1000M イーサネット**（**PoE**をサポート）  
- **1x 10M/100M イーサネット**  
- **1x HDMI 2.0**  
- **2x Type-A USB 2.0**  
- **1x Type-C USB 2.0**（OSアップデート用USBコンソール）  
- **1x MicroSDカードスロット**  
- **1x Nano SIMカードスロット（内蔵）**  

**安全性と信頼性**  

- **ハードウェアウォッチドッグ**  
- **オプションのUPSスーパーキャパシタ**  
- **PCサイドパネル付き金属筐体**  
- **電磁両立性（EMC）規格**:  
  - **ESD**: EN61000-4-2、レベル3  
  - **EFT**: EN61000-4-4、レベル2  
  - **サージ保護**: EN61000-4-5、レベル2  
- **製品寿命**: **reComputer R1100**は**少なくとも2030年12月まで**製造を継続します

## 仕様

| **パラメータ**          | **説明** |
|------------------------|----------------|
| **ハードウェア仕様** | |
| **製品シリーズ** | R11xx-10, R11xx-00 |
| **CPU** | Raspberry Pi CM4, Quad-core Cortex-A72 @ 1.5GHz |
| **オペレーティングシステム** | Raspbian, Debian, Yocto, Buildroot |
| **RAM** | 1GB / 2GB / 4GB / 8GB |
| **eMMCストレージ** | 8GB / 16GB / 32GB |
| **システム仕様** | |
| **電源入力** | DC 9V~36V, 2ピン端子台 |
| **PoE（受電デバイスとして）** | IEEE 802.3af標準 12.95W PoE* |
| **過電圧保護** | 40V |
| **消費電力** | アイドル時: 2.88W; フル負荷時: 5.52W |
| **電源スイッチ** | なし |
| **リブートスイッチ** | あり |
| **インターフェース** | |
| **Ethernet** | 1x 10/100/1000Mbps（PoE対応*）, 1x 10/100Mbps IEEE 802.3/802.3u |
| **USB** | 2x USB-A 2.0ホスト, 1x USB-C 2.0（OS書き込み用） |
| **RS485** | 2x RS485（絶縁） |
| **RS232** | 2x RS232（絶縁） |
| **DI（デジタル入力）** | 2x 絶縁DIポート, 入力電圧: 5~24V DC |
| **DO（デジタル出力）** | 2x 絶縁DOポート, 出力電圧: &lt;60V DC |
| **SIMカード** | 1x Nano SIMカードスロット（内蔵） |
| **SDカード** | 1x MicroSDカードスロット |
| **SSD** | 1x M.2 NVMe SSDスロット（2280-Mキー） |
| **LEDインジケータ** | 12x LEDインジケータ |
| **ブザー** | 1 |
| **リセットボタン** | 1 |
| **HDMI** | 1x HDMI 2.0 |
| **無線通信** | |
| **Wi-Fi 2.4/5.0GHz** | オンチップWi-Fi* |
| **BLE 5.0** | オンチップBLE* |
| **LoRa®** | USB LoRa®*/ SPI LoRa®* |
| **4Gセルラー** | 4G LTE* |
| **Zigbee** | USB Zigbee* |
| **規格** | |
| **EMC適合性** | ESD: EN61000-4-2, レベル3; EFT: EN61000-4-4, レベル2; サージ: EN61000-4-5, レベル2 |
| **認証** | CE, FCC, TELEC, RoHS, REACH |
| **環境条件** | |
| **防塵防水等級** | IP40 |
| **動作温度** | -30 ~ 70°C |
| **動作湿度** | 10 ~ 95% RH |
| **保存温度** | -40 ~ 80°C |
| **その他の機能** | |
| **スーパーキャパシタUPS** | SuperCAP UPS LTC3350モジュール* |
| **ハードウェアウォッチドッグ** | 1 ~ 255秒 |
| **RTC** | 高精度RTC |
| **セキュリティ** | |
| **暗号化チップ** | TPM 2.0*, ATECC608A |
| **冷却システム** | ファンレス |
| **保証** | 2年 |
| **製品寿命** | 2030年12月まで |
| **注記** | *印のオプションは、アクセサリリストに従って別途購入が必要です。 |
| **コンポーネント・インターフェース状態** | |
| **予約済み** | 将来の使用または拡張のために指定されています。 |
| **オプション** | 必須ではないコンポーネント；ユーザーは含めるか除外するかを選択できます。 |
| **使用中** | 現在使用中で、製品機能に不可欠です。 |
| **含まれる** | 標準パッケージに含まれる必須コンポーネントです。 |

**声明**: `*` でマークされたオプションは、アクセサリリストに従って追加購入が必要です。

## 機械的寸法  

| **パラメータ** | **説明** |
|--------------|----------------|
| **寸法 (W x H x D)** | 130 mm x 93 mm x 49.6 mm |
| **筐体** | 6061アルミニウム合金ケーシング、透明PCサイドパネル |
| **取り付け** | DINレール / 壁面 |
| **重量 (正味)** | 560g |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/dimensions.PNG" style={{width:800, height:'auto'}}/></div>

## ハードウェア概要

### システム概要

#### インターフェース概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/interface.PNG" style={{width:800, height:'auto'}}/></div>

#### メインボード概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/mainboard.PNG" style={{width:800, height:'auto'}}/></div>

#### 電源図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power.PNG" style={{width:800, height:'auto'}}/></div>

reComputer R1100は2つの電源供給オプションを提供します：DCターミナルとPoEポートです。デフォルトでは、公式地域別電源アダプター（SKU: 110061505/110061506）を使用してDCターミナル経由で電源供給されます。または、オプションのPoE電源（PoEモジュール、SKU: 110991925）も利用可能です。この柔軟性により、さまざまな電源との seamless な統合が可能となり、多様なアプリケーションニーズに対応できます。

**2ピン電源ターミナル**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:400, height:'auto'}}/></div>

reComputer R1100は9〜36VのDC電圧供給で動作し、2ピン電源ターミナルブロックを通じて接続されます。接地については、接地線を電源ターミナルの左上角にあるネジに確実に取り付けることができます。

**PoE**

PoEモジュールが取り付けられている場合、reComputer R1100のETH0ポートはPoE電源供給をサポートし、イーサネット経由でデバイスに電源を供給する便利で効率的な方法を提供します。このオプションは設置を簡素化し、配線を最小限に抑えるため、電源が限られているアプリケーションや、電源コンセントが容易に利用できない場所に最適です。

- **PoE入力**: 44~57V（標準: 48V）
- **PoE出力**: 12V、1.1A最大

:::note
付属のPoEモジュールはIEEE 802.3af規格に準拠し、最大12.95Wの電力出力を提供します。ただし、SSDや4Gモジュールなどの高電力周辺機器の場合、PoE電源では不十分な場合があります。そのような場合は、安定した信頼性のあるデバイス動作を確保するため、DCターミナルを使用した電源供給を推奨します。
:::

**消費電力**

以下の表は、Seeed Studioの研究室で実施された測定に基づく、reComputer R1100のテスト済み消費電力値を示しています。これらの値は参考用であり、テスト方法や環境条件の違いが結果に影響を与える可能性があることにご注意ください。

| **状態**   | **電圧** | **電流** | **消費電力** | **説明** |
|-------------|------------|------------|----------------------|----------------|
| **シャットダウン** | 24V | 51mA | 1.224W | シャットダウンおよび電源オフ状態での静的消費電力テスト。 |
| **アイドル** | 24V | 120mA | 2.88W | テストプログラムを実行せずに24V電源を供給した際の入力電流を測定。 |
| **フル負荷** | 24V | 230mA | 5.52W | `"stress -c 4"` コマンドを使用してCPUをフル負荷で実行、外部デバイスは接続なし。 |

**電源オンと電源オフ**  
reComputer R1100にはデフォルトで電源ボタンが含まれていません。システムは電源に接続すると自動的に電源がオンになります。

- シャットダウンするには、オペレーティングシステムのシャットダウンオプションを使用し、プロセスが完了するまで待ってから電源を切断してください。
- システムを再起動するには、単純に電源を再接続してください。

これにより、安全な動作が保証され、潜在的なデータ損失やシステムの問題を防ぐことができます。

#### ブロック図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:400, height:'auto'}}/></div>

#### IIC図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/IIC.PNG" style={{width:600, height:'auto'}}/></div>

## インターフェース説明

| **インターフェース** | **説明** |
|--------------|----------------|
| **Ethernet** | 1 × 10/100/1000 Mbps (PoE*対応) , 1 × 10/100 Mbps (IEEE 802.3/802.3u) |
| **USB** | 2 × USB-A 2.0 (ホスト) , 1 × USB-C 2.0 (OS書き込み用) |
| **RS485** | 2 × RS485 (絶縁) |
| **RS232** | 2 × RS232 (絶縁) |
| **DI (デジタル入力)** | 2 × 絶縁DIポート , 入力電圧: 5~24V DC |
| **DO (デジタル出力)** | 2 × 絶縁DOポート ,  出力電圧: < 60V DC |
| **HDMI** | 1 × HDMI 2.0 |
| **SDカードスロット** | MicroSDカード対応 |
| **SIMカードスロット** | Nano SIMカード対応 |
| **M.2スロット** | M.2 NVMe SSD対応 |
| **LEDインジケーター** | 12 × LEDインジケーター |
| **ブザー** | 1 |
| **リセットボタン** | 1 |

### LED インジケータステータス

R1100 コンピュータは、システムステータス表示用に12個のLEDを搭載しています。それぞれの具体的な機能を以下の表に示します。

以下は構造化された形式での **LED インジケータステータス** 表です：

| **LED インジケータ** | **色** | **ステータス** | **説明** |
|------------------|---------|-----------|----------------|
| **PWR** | 緑 | 点灯 | デバイスが電源に接続されています。 |
| | | 消灯 | デバイスが電源に接続されていません。 |
| **ACT** | 緑 | 点滅 | Linux下でのeMMCアクセスを示します。起動中にエラーが発生した場合、エラーパターンで点滅します（Raspberry Piドキュメントを参照）。 |
| **USER** | 緑/赤/青 | ユーザー定義 | ユーザーがプログラム可能です。 |
| **4G** | 緑 | 点灯 | ダイヤルアップが成功し、接続が正常です。 |
| | | 消灯 | 4G信号が接続されていない、またはデバイスの電源が入っていません。 |
| **DI1** | 緑 | 点灯/点滅 | 入力信号が検出されました。 |
| | | 消灯 | 電源なし、またはデータ伝送なし。 |
| **DI2** | 緑 | 点灯/点滅 | 入力信号が検出されました。 |
| | | 消灯 | 電源なし、またはデータ伝送なし。 |
| **DO1** | 緑 | 点灯/点滅 | 出力信号が検出されました。 |
| | | 消灯 | 電源なし、またはデータ伝送なし。 |
| **DO2** | 緑 | 点灯/点滅 | 出力信号が検出されました。 |
| | | 消灯 | 電源なし、またはデータ伝送なし。 |
| **COM1 (RS485 チャンネル1)** | 緑 | 点灯/点滅 | データの受信または送信中。 |
| | | 消灯 | RS485 チャンネル1でのデータ転送なし。 |
| **COM2 (RS485 チャンネル2)** | 緑 | 点灯/点滅 | データの受信または送信中。 |
| | | 消灯 | RS485 チャンネル2でのデータ転送なし。 |
| **COM3 (RS232 チャンネル1)** | 緑 | 点灯/点滅 | データの受信または送信中。 |
| | | 消灯 | RS232 チャンネル1でのデータ転送なし。 |
| **COM4 (RS232 チャンネル2)** | 緑 | 点灯/点滅 | データの受信または送信中。 |
| | | 消灯 | RS232 チャンネル2でのデータ転送なし。 |

### ACTステータスコード

**ACTステータスコード**の構造化されたテーブルは以下の通りです：

| 長い点滅 | 短い点滅 | ステータス説明 |
|-------------|--------------|--------------------|
| 0 | 3 | 一般的な起動失敗 |
| 0 | 4 | `start*.elf` が見つからない |
| 0 | 7 | カーネルイメージが見つからない |
| 0 | 8 | SDRAM障害 |
| 0 | 9 | SDRAM不足 |
| 0 | 10 | HALT状態 |
| 2 | 1 | パーティションがFATではない |
| 2 | 2 | パーティションからの読み取りに失敗 |
| 2 | 3 | 拡張パーティションがFATではない |
| 2 | 4 | ファイル署名/ハッシュの不一致（Pi 4） |
| 4 | 4 | サポートされていないボードタイプ |
| 4 | 5 | 致命的なファームウェアエラー |
| 4 | 6 | 電源障害タイプA |
| 4 | 7 | 電源障害タイプB |

**追加注意事項：**

- **ACT LEDが規則的な4回点滅パターンで点滅する場合**、ブートコード（`start.elf`）が不足していることを示しています。
- **ACT LEDが不規則なパターンで点滅する場合**、ブートプロセスが開始されています。
- **ACT LEDが全く点滅しない場合**、EEPROMコードが破損している可能性があります。接続された周辺機器なしでブートを試してください。
- 詳細については、**Raspberry Pi Forum**を参照してください：[Is your Pi not booting? (Boot Problems Sticky)](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151)。

**USERインジケーター**

reComputer R1100には**USER**インジケーターが含まれており、ユーザーの要件に基づいてカスタマイズできます。

**注意：**
**USER LED**テストの詳細については、[このセクション](https://wiki.seeedstudio.com/ja/recomputer_r1100_configure_system/#control-led-indicators)を参照してください。

### ブザー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/buzzer.PNG" style={{width:600, height:'auto'}}/></div>

reComputer R1100にはアクティブブザーが搭載されており、アラームやイベント通知に使用できます。

**Buzzer_EN**に対応するGPIOを確認するには、ターミナルで以下のコマンドを入力してください：  

```
cat /sys/kernel/debug/gpio
```

これにより、ブザー用に割り当てられたGPIOとして**gpio587**が出力されます。

**注意：**  
**ブザーテスト**の詳細については、[このセクション](https://wiki.seeedstudio.com/ja/recomputer_r1100_configure_system/#controlling-the-buzzer-via-gpio)を参照してください。

### RS485

reComputer R1100シリーズは、**6ピン3.5mmピッチのPhoenix端子**を持つ**2つのRS485ポート**を搭載しています。各RS485ポートには、識別しやすいように**「A/B/GND」**のシルクスクリーン表記が付いています。

**ピン定義**  
端子のピン割り当ては以下の通りです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs485.PNG" style={{width:600, height:'auto'}}/></div>

| **ピンID** | **ピン名**  |  
|-----------|-------------|  
| 1         | RS485-1_A   |  
| 2         | RS485-2_A   |  
| 3         | RS485-1_B   |  
| 4         | RS485-2_B   |  
| 5         | GND         |  
| 6         | GND         |

ケーブルの接続
RS485配線の回路図は以下の通りです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs485_connection.PNG" style={{width:600, height:'auto'}}/></div>

:::note
製品パッケージには120オーム終端抵抗が含まれており、RS485通信に必要に応じて使用できます。
:::

RS485テストの詳細については、[このセクション](https://wiki.seeedstudio.com/ja/recomputer_r1100_configure_system/#rs485-testing)を参照してください。

### RS232

reComputer R1100シリーズは、6ピン3.5mmピッチのPhoenix端子を持つ2x RS232ポートを搭載しています。
単一のRS232ポートのシルクスクリーン表示は**TX/RX/GND**です。

**ピン定義**

端子ピンは以下のように定義されています：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs285.PNG" style={{width:600, height:'auto'}}/></div>

RS232ピン定義の表は以下の通りです：

| **Pin ID** | **Pin Name**  |
|-----------|--------------|
| 13        | R232-3_RX    |
| 14        | R232-4_RX    |
| 15        | R232-3_TX    |
| 16        | R232-4_TX    |
| 17        | GND          |
| 18        | GND          |

**ケーブルの接続**

RS232配線の回路図を以下に示します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs285_connection.PNG" style={{width:600, height:'auto'}}/></div>

:::note
詳細なRS232テスト手順については、RS485テストの詳細については、[このセクション](https://wiki.seeedstudio.com/ja/recomputer_r1100_configure_system/#rs232-testing)を参照してください。

:::

### DI (デジタル入力)

reComputer R1100シリーズには、3ピン3.5mmピッチPhoenix端子を持つ2つのDIポートが含まれています。  
単一のDIポートのシルクスクリーンラベルは**"DI/G_DI"**です。  

**ピン定義**

端子ピンは以下のように定義されています：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DI.PNG" style={{width:600, height:'auto'}}/></div>

以下は**DI (デジタル入力) ピン定義**の表です：  

| **ピンID** | **ピン名** |
|-----------|------------|
| 7         | DI1        |
| 9         | DI2        |
| 11        | G_DI       |

**ケーブルの接続**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DI_connect.PNG" style={{width:600, height:'auto'}}/></div>

以下は **DI（デジタル入力）パラメータ** の表です：

| **パラメータ**           | **説明**    |
|------------------------|-------------------|
| 入力タイプ            | PNP               |
| 絶縁保護  | 5 kV              |
| DI to G_DI（ON状態） | 5~30 VDC          |

:::note
DIテストの詳細については、[このセクション](https://wiki.seeedstudio.com/ja/recomputer_r1100_configure_system/#di-digital-input-testing)を参照してください。
:::

### DO（デジタル出力）

reComputer R1100シリーズ機器には2x DOポート、3ピン3.5mmピッチフェニックス端子が含まれています。単一DOのシルクスクリーンは **"DO/G_DO"** です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DO.PNG" style={{width:600, height:'auto'}}/></div>

**ピン定義表**

| ピンID | ピン名 |  
|--------|------------|  
| 8      | DO1       |  
| 10     | DO2       |  
| 12     | G_DO      |

**ケーブルの接続**

単一DOワイヤの回路図は以下の通りです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DO_connect.PNG" style={{width:600, height:'auto'}}/></div>

**DOポートパラメータ**

| パラメータ            | 説明     |  
|----------------------|----------------|  
| 出力タイプ         | トランジスタ      |  
| 絶縁保護 | 5 kV           |  
| 出力注意事項        | &lt; 60VDC         |

:::note
DOテストの詳細については、[このセクション](https://wiki.seeedstudio.com/ja/recomputer_r1100_configure_system/#do-digital-output)を参照してください。
:::

### ブートスイッチ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/Boot.PNG" style={{width:200, height:'auto'}}/></div>

reComputer R1100のブートスイッチは、CM4モジュールのnRPI_BOOTピンに接続されています。このスイッチにより、ユーザーはeMMCとUSBの間でブートソースを選択できます。

- **通常モード：** スイッチを「BOOT」ラベルから**離して**設定し、eMMCからブートします。
- **フラッシュモード：** スイッチを「BOOT」ラベルに**向けて**設定し、システムイメージのフラッシュ用にType-C USBインターフェースからブートします。

以下は、ブートスイッチの位置と対応するモードの表です：

| **スイッチ位置** | **モード**       | **説明**      | **nRPI-BOOT** |
|---------------------|---------------|----------------------|---------------|
| 「BOOT」から離す   | 通常モード    | eMMCからブート       | Low           |
| 「BOOT」に向ける     | フラッシュモード     | USBからブート        | High          |

### USB

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/usb.PNG" style={{width:200, height:'auto'}}/></div>

reComputer R1100は1つのUSB Type-Cポートと2つのUSB Type-Aポートを搭載しています。以下の表は、それらの機能と説明を示しています。

以下はUSBポートとその機能の表です：

| **タイプ**   | **数量** | **プロトコル** | **機能**   | **説明** |
|-----------|------------|------------|--------------|---------------|
| Type-C   | 1          | USB 2.0    | USB-Device   | シリアルポートデバッグ、イメージ書き込みなどに使用されます。 |
| Type-A   | 2          | USB 2.0    | USB-Host     | フラッシュドライブ、USBキーボード、マウスなどの異なるUSBデバイスを接続します。 |

### SDスロット

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SD.PNG" style={{width:200, height:'auto'}}/></div>

reComputer R1100シリーズ機器には、ユーザーデータを保存するためのmicro SDカードを取り付けるためのmicro SDカードスロットが含まれています。

### SIMスロット（内蔵）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/simslot.PNG" style={{width:600, height:'auto'}}/></div>

reComputer R1100シリーズには、4G接続を可能にするためのNano SIMカードを取り付けるように設計された内蔵Nano SIMカードスロットが含まれています。下の表は、標準SIM、Micro SIM、Nano SIMカードのサイズの違いを示しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SIMsizes.PNG" style={{width:400, height:'auto'}}/></div>

:::note
reComputer R1100の標準バージョンには、内蔵4Gモジュールは含まれていません。4G機能が必要な場合は、追加の4Gモジュールを別途購入する必要があります。詳細については、[このセクション](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/#optional-interfaces-and-modules)を参照してください。
:::

### SSDスロット

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SSD.PNG" style={{width:600, height:'auto'}}/></div>

reComputer R1100には**NVMe M.2 2280 SSDスロット**が搭載されており、**128GB、256GB、512GB、1TB**のストレージ容量をサポートしています。このスロットにより高速ストレージ拡張が可能になり、ユーザーはシステムの**パフォーマンス**と**容量**の両方を向上させることができます。

**注意：**  
SSDカードには主に2つの用途があります：

1. **大容量ストレージ** – SSDは大容量ストレージのニーズに使用できます。
2. **システムイメージ付きブートドライブ** – 一部のSSDは大容量ストレージとシステムのブートドライブの両方として使用できます。

ただし、すべてのSSDがブート機能をサポートしているわけではありません。SSDをブートドライブとして使用する予定で、どのモデルを購入すべきかわからない場合は、ブート機能がテストされ検証済みの**1TB SSD（SKU112990267）**をお勧めします。これにより互換性の問題が軽減され、試行錯誤のコストが最小限に抑えられます。

### reComputer R1100のMini-PCIeスロット

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/pci.PNG" style={{width:600, height:'auto'}}/></div>

reComputer R1100には**2つのMini-PCIeスロット**が搭載されており、さまざまな通信プロトコルをサポートしています。下の表は、各スロットでサポートされているプロトコルの概要を示しています：

| **スロット**       | **サポートされているプロトコル**   |  
|---------------|--------------------------|  
| **Mini-PCIe 1** | 4G LTE、USB LoRa®、USB Zigbee |  
| **Mini-PCIe 2** | SPI LoRa®、USB LoRa®、USB Zigbee |

これらのスロットにより、ユーザーは接続オプションを拡張でき、必要に応じて**4G LTE、LoRa®、およびZigbee**モジュールとの統合が可能になります。

このデバイスには2つの**Mini-PCIeインターフェース**が含まれています：**スロット1**と**スロット2**です。

- **Mini-PCIeスロット1**は**SIMカードスロット**に接続されており、**USBプロトコル**をサポートしているため、**4G LTE、USB LoRa®、およびUSB Zigbee**モジュールの接続に適しています。
- **Mini-PCIeスロット2**は**USBとSPIプロトコルの両方**をサポートしていますが、SIMカードスロットには**接続されていません**。**SPI LoRa®、USB LoRa®、およびUSB Zigbee**デバイスを収容できます。

これらのスロットは、さまざまなワイヤレス通信モジュールに対して柔軟な拡張オプションを提供します。

### リセットホール

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reset.PNG" style={{width:200, height:'auto'}}/></div>

reComputer R1100には、リセットホール内に配置された**ミニプッシュボタンスイッチ**が搭載されています。細い物体でこのボタンを押すことで、ユーザーは**CM4をリセット**できます。

- このピンが**ハイ**の場合、**CM4が開始された**ことを示します。
- このピンが**ローに駆動**されると、**モジュールがリセット**されます。

### イーサネットRJ45

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/eth.PNG" style={{width:200, height:'auto'}}/></div>

**reComputer R1100**には2つのイーサネットポートが装備されています：

| 名前  | タイプ                        | 速度                | PoEサポート                |
|-------|------------------------------|---------------------|----------------------------|
| ETH0  | CM4ネイティブギガビットイーサネット | 10/100/1000 Mbit/s  | サポート（追加モジュール付き） |
| ETH1  | USBから変換                   | 10/100 Mbit/s       | サポートなし               |

**reComputer R1100**は2つのイーサネットRJ45ポートを搭載しています：

- **ETH0**: **CM4ネイティブギガビットイーサネット**インターフェースで、**10/100/1000 Mbit/s**の速度をサポートします。追加の**PoEモジュール**でアップグレードして、デバイスの電源供給のための**Power over Ethernet (PoE)**を有効にできます。
- **ETH1**: **USB変換イーサネット**インターフェースで、**10/100 Mbit/s**の速度をサポートしますが、**PoEはサポートされていません**。

**注意**  
PoEの詳細については、[このセクション](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/#poe-power-over-ethernet)を参照してください。

### HDMI

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/display.PNG" style={{width:200, height:'auto'}}/></div>

reComputer R1100は、CM4からのネイティブHDMIインターフェースを搭載し、最大**4K@60fps**のビデオ出力をサポートします。複数のディスプレイが必要なアプリケーションに最適で、ユーザーが外部の大画面にコンテンツを出力できます。

### RTC  

reComputer R1100には、**CR2032バッテリー**が事前にインストールされた**RTC（リアルタイムクロック）回路**が含まれており、電源喪失時でも正確な時刻管理を保証します。

:::note
RTCテストの詳細については、[このセクション](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/#rtc-real-time-clock-testing)を参照してください。
:::  

### ウォッチドッグ  

reComputer R1100は、システムクラッシュ時に自動的にシステムを再起動する**独立したハードウェアウォッチドッグ回路**を搭載しています。このウォッチドッグは**RTC**を通じて実装され、**1秒から255秒までの柔軟な給餌時間**を可能にします。

:::note
ウォッチドッグテストの詳細については、[このセクション](https://wiki.seeedstudio.com/ja/recomputer_r/#watchdog)を参照してください。
:::

## オプションインターフェースとモジュール  

reComputer R1100は**幅広い拡張モジュールとアクセサリ**をサポートし、様々な用途に適応できます。reComputer R1100のカスタマイズに興味がある場合は、詳細について**odm@seeed.cc**にお問い合わせください。

#### アクセサリとオプションモジュールのリスト

読みやすさを向上させるためにフォーマットされた表は以下の通りです：

| **備考**                                     | **項目**               | **製品名**                                      | **SKU**         |
|------------------------------------------------|------------------------|------------------------------------------------------|----------------|
| **LoRa® WAN機能には一緒に使用する必要があります** | LoRa®モジュール           | 地域選択可能LoRaWANゲートウェイモジュール（SPI）- US915 | 114992969      |
|                                                |                        | 地域選択可能LoRaWANゲートウェイモジュール（SPI）- EU868 | 114993268      |
|                                                |                        | 地域選択可能LoRaWANゲートウェイモジュール（USB）- US915 | 114992991      |
|                                                |                        | 地域選択可能LoRaWANゲートウェイモジュール（USB）- EU868 | 114992628      |
| **LoRa®アンテナ**                              | LoRa®アンテナ          | LoRaアンテナキット - 868-915MHz                        | 110061501      |
| **Zigbeeモジュール**                              | Zigbeeモジュール         | Mini-PCIe USB Zigbeeモジュール                          | 110992005      |
| **Zigbeeアンテナ**                             | Zigbeeアンテナ        | reComputer R1100用Zigbeeアンテナキット             | 110061641      |
| **このアクセサリはWi-Fi機能に必要です** | Wi-Fi/BLEアンテナ     | Raspberry Pi Compute Module 4 アンテナキット           | 114992364      |
| **4G機能には4Gモジュールと4Gアンテナ、GPS機能には4GモジュールとGPSアンテナが必要です** | 4Gモジュール | LTE Cat 4 EC25-AFXGA Mini-PCIeモジュール - 北米 | 113991134      |
|                                                |                        | LTE Cat 4 EC25-EUXGR Mini-PCIeモジュール - EMEA & タイ  | 113991135      |
|                                                |                        | LTE Cat 4 EC25-AUXGR Mini-PCIeモジュール - オーストラリア    | 113991174      |
|                                                |                        | LTE Cat 4 EC25-EFA Mini-PCIeモジュール - タイ       | 113991214      |
|                                                |                        | LTE Cat 4 EC25-EMGA Mini-PCIeモジュール - マレーシア      | 113991234      |
|                                                |                        | LTE Cat 4 EC25-JFA Mini-PCIeモジュール - 日本          | 113991296      |
| **4Gアンテナ**                                 | 4Gアンテナ            | 4Gモジュール用4Gアンテナキット                        | 110061502      |
| **GPSアンテナ**                                | GPSアンテナ           | EC25 4Gモジュール用GPSアンテナキット                  | 110061521      |
| **暗号化チップ**                            | TPM 2.0               | Infineon SLB9670搭載TPM 2.0モジュール                | 114993114      |
| **SSDストレージ**                                | SSDカード              | NVMe M.2 2280 SSD 1TB                               | 112990267      |
|                                                |                        | 512GB NVMe M.2 PCIe Gen3x4 2280 内蔵SSD        | 112990247      |
|                                                |                        | 256GB NVMe M.2 PCIe Gen3x4 2280 内蔵SSD        | 112990246      |
|                                                |                        | 128GB NVMe M.2 PCIe Gen3x4 2280 内蔵SSD        | 112990226      |
| **このモジュールはreComputer R1100のキャリアボードにはんだ付けする必要があります** | PoE | reTerminal DM用MQ7813T120 PoEモジュールキット | 110991925 |
| **UPS**                                        | UPS                   | SuperCAP UPS LTC3350モジュール                         | 110992004      |

**reComputer R1100** メインボードには **2つのMini-PCIeスロット** があり、以下の互換性があります：

- **Mini-PCIeスロット1** は以下をサポートします：
  - **4Gモジュール** (USBプロトコル)
  - **LoRa®モジュール** (USBプロトコル)
  - **Zigbeeモジュール** (USBプロトコル)

- **Mini-PCIeスロット2** は以下をサポートします：
  - **LoRa®モジュール** (USB & SPIプロトコル)
  - **Zigbeeモジュール** (USBプロトコル)

:::note
 **4GとLoRa®モジュールは同時に使用できません。**
 **ボード上に2つのLoRa®モジュールを接続することはできません。**

:::

これは、**4GまたはLoRa®** のいずれかを選択する必要があり、**1つ** のLoRa®モジュールのみを同時にインストールできることを意味します。

### Wi-Fi/BLE

**reComputer R1100-10** は、オンボード **Wi-Fi/BLEバージョン** を搭載した **CM4** によって駆動され、CM4と同じWi-Fi/BLEパラメータを提供します。詳細な仕様については、**Raspberry Pi公式ウェブサイト** を参照してください。

### 4Gモジュール

**reComputer R1100** メインボードには **2つのMini-PCIeスロット** があり、**Mini-PCIeスロット1** は **USBプロトコル経由の4Gモジュール** をサポートします。**Quectel EC25 4Gモジュール** は、reComputer R1100との互換性について完全にテストされています。

:::note
**4G機能** が必要な場合は、**対応する4Gモジュールと外部アンテナを購入** し、[4G/LoRa®/Zigbeeモジュールとアンテナの組み立て](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-4glorazigbee-module-and-antenna)の手順に従ってください。
:::

### LoRa®モジュール

**両方のMini-PCIeスロット** は **USBプロトコル経由のLoRa®モジュール** をサポートします。さらに、**Mini-PCIeスロット2** は **SPIプロトコルを使用するLoRa®モジュール** をサポートします。Seeed Studioの **WM1302モジュール** は、reComputer R1100との互換性について完全にテストされています。

:::note
**LoRa®機能** が必要な場合は、**対応するLoRa®モジュールと外部アンテナを購入** し、[4G/LoRa®/Zigbeeモジュールとアンテナの組み立て](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-4glorazigbee-module-and-antenna)の手順に従ってください。
:::

### Zigbeeモジュール

Mini-PCIeスロットは **USBプロトコルを使用するZigbeeモジュール** をサポートし、互換性のあるデバイスにZigbee機能をシームレスに統合できます。これにより、Zigbeeネットワーク内での効率的な通信と制御が可能になり、システムの汎用性と接続性が向上します。Zigbeeモジュール用に2つのMini-PCIeスロットが利用可能で、ユーザーは信頼性を向上させるために多様なアプリケーションを実装する柔軟性があります。

:::note
**Zigbee機能** が必要な場合は、**対応するZigbeeモジュールと外部アンテナを購入** し、[4G/LoRa®/Zigbeeモジュールとアンテナの組み立て](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-4glorazigbee-module-and-antenna)の手順に従ってください。
:::

### PoE（Power over Ethernet）

**reComputer R1100は、PoE電源モジュールを追加することでIEEE 802.3af PD (Powered Devices) 標準をサポート** します。**PoEソケットはボード上に事前にはんだ付けされています** が、ユーザーはEthernet PoE機能のために **デバイスを分解してPoEモジュールをインストールする必要があります**。

分解ガイダンスについては、[分解ガイド](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-ups-and-poe-module)を参照してください

:::note

- **reComputer R1100はPoE電源をサポートしますが、標準製品にはデフォルトでPoEモジュールが含まれていません。**
- **Seedはバッチカスタマイズ注文に対してPoEはんだ付けと組み立てサービスを提供しています。**
- サンプルテストの場合、お客様は **PoEモジュールを自分ではんだ付けして組み立てる必要があります**。手順は **「PoEモジュールの組み立て」** で利用可能です。

:::

### SSD (ストレージ拡張)

**reComputer R1100は、ボード上の2つのMini-PCIeスロットの下にあるPCIeスロット（J62）経由で2280 NVMe SSDをサポート** します。

:::note

- **CM4のPCIeインターフェースはGen 2.0** で、**最大理論速度は5Gbps** です。
- **Gen 3.0以上のSSD** を使用する場合、最大速度に達しない可能性があります。
- **reTerminal DMからのテスト結果は以下の通りです：**
  - **最大書き込み速度：** 230MB/s
  - **最大読み取り速度：** 370MB/s
- SSDの互換性は異なる場合があるため、**承認されたアクセサリリストからSSDを購入することをお勧めします**。

:::

**SSD使用シナリオ：**

- **大容量ストレージ** – SSDはストレージ容量を拡張するために使用できます。
- **システムイメージ付きブートドライブ** – 一部のSSDはシステムイメージを保存し、**SSDから直接ブート** できます。

:::note
**すべてのSSDがブート機能をサポートしているわけではありません！**
ブート用のSSDが必要で、どれを購入すべきかわからない場合、Seedは **1TB SSD (SKU: 112990267)を推奨** します。これは **ブート機能についてテストおよび検証済み** で、互換性リスクとトラブルシューティングコストを最小限に抑えます。
:::

### 暗号化チップ - TPM 2.0

reComputer R1100は **Infineonの OPTIGA™ TPM SLB9670** をサポートし、**Trusted Computing Group (TCG) TPM 2.0** 仕様に準拠しています。

**主な機能：**

- **セキュリティ用暗号化チップ**
- **SPIインターフェース** (ボード上の **ポートJ13** に接続)
- 以下のための **信頼の基点を提供**：
  - **プラットフォーム整合性**
  - **リモート証明**
  - **暗号化サービス**

:::note
インストール手順については、[TPM 2.0モジュールの組み立て](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-tpm-20-module)を参照してください

:::

### UPS (無停電電源装置) モジュール

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/UPS.PNG" style={{width:600, height:'auto'}}/></div>

reComputer R1100の **UPSモジュール** は、**直列で動作** する **7Fスーパーキャパシタベース** の電源バックアップシステムです。

**動作原理：**

1. **DC 5V電源** と **CM4** の間に配置されます。
2. **GPIO信号** を使用して **5V電源が故障** したときに **CPU** に通知します。
3. CPUは電力枯渇前に **緊急スクリプト** を実行します。
4. スクリプトは安全なシステムシャットダウンのために **「$ shutdown」コマンド** を実行します。

**バックアップ持続時間:**  
**UPS稼働時間**は**システム負荷**に依存します。以下は次の条件でのテスト結果です：  

- **CM4 (4GB RAM、32GB eMMC、Wi-Fiモジュール)。**  

## 追加リソース

- [reComputer R1100 3Dファイル](https://files.seeedstudio.com/R11/reComputer%20R1100_3D.stp)
- [reComputer R1100 回路図設計、PCB設計](https://files.seeedstudio.com/R11/reComputer%20R1100_schematic_design_files.zip)
- [reComputer R1100 フライヤー](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer-R1100/reComputer-R1100-flyer.pdf)
- [ユーザーマニュアル](https://files.seeedstudio.com/R11/reComputer%20R1100%20User%20Manual-V1.0.pdf)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
