---
description: reComputer R1100 は、Raspberry Pi CM4 を搭載した AI 対応の IoT ゲートウェイおよびコントローラーです。2GB RAM、8GB eMMC、デュアルイーサネット、USB、RS485、RS232、DI/DO、無線接続（4G、LoRa®、Wi-Fi/BLE）を備え、産業オートメーションやエッジコンピューティングに最適です。
title: reComputer R1100 入門ガイド
keywords:
- Raspberry pi
- エッジコントローラー
- reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/recomputer2.jpg
slug: /ja/recomputer_r1100_intro
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 概要

reComputer R1100 は、Raspberry Pi CM4 を搭載した多用途なエッジ IoT ゲートウェイで、AI 対応機能を備えています。**2x Ethernet、2x USB、2x RS485、2x RS232、2x DI、2x DO** などの幅広い産業用インターフェースを備え、**4G、LoRa®、Wi-Fi/BLE** などの柔軟な無線接続オプションを提供します。これらの機能により、さまざまな産業用途に最適な選択肢となります。  
reComputer R1100 シリーズは、**データ収集とプロセス監視、オートメーションおよびロボット制御、インテリジェント製造、産業通信およびネットワーキング** などの IoT アプリケーションで広く使用されています。そのコンパクトなサイズ、柔軟性、低コスト、プログラム可能性により、**オートメーション、IoT システムなど**を強力にサポートします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴

**オートメーション & IoT システム向けに設計**  
- **BACnet、Modbus RTU、Modbus TCP/IP、KNX** プロトコルをサポート  
- **Node-RED、CODESYS、Balena** などに対応  
- **両面 LED インジケーター** による迅速なステータス確認  
- **耐久性のある金属製ケース**、**DINレールおよび壁取り付け**に対応  
- **Yocto および Buildroot** をサポートし、カスタマイズ可能な OS を提供  

**強力なパフォーマンス**  
- **Raspberry Pi CM4** 搭載  
- **Broadcom BCM2711** クアッドコア **Cortex-A72 (ARM v8) 64ビット SoC @ 1.5GHz**  
- 最大 **8GB RAM** および **32GB eMMC ストレージ**  

**豊富な無線機能**  
- **オンチップ Wi-Fi および BLE**  
- **Mini-PCIe 1**: **LTE、USB LoRa®、USB Zigbee** をサポート  
- **Mini-PCIe 2**: **SPI LoRa®、USB LoRa®、USB Zigbee** をサポート  

**包括的なインターフェース**  
- **2x RS485 (絶縁)、2x RS232 (絶縁)、2x 絶縁 DI ポート、2x 絶縁 DO ポート**  
- **1x 10M/100M/1000M Ethernet** (**PoE** 対応)  
- **1x 10M/100M Ethernet**  
- **1x HDMI 2.0**  
- **2x Type-A USB 2.0**  
- **1x Type-C USB 2.0** (OS 更新用 USB コンソール)  
- **1x MicroSD カードスロット**  
- **1x Nano SIM カードスロット (内部)**  

**安全性と信頼性**  
- **ハードウェアウォッチドッグ**  
- **オプションの UPS スーパーキャパシタ**  
- **金属製ケースと PC サイドパネル**  
- **電磁適合性 (EMC) 規格**:  
  - **ESD**: EN61000-4-2, レベル 3  
  - **EFT**: EN61000-4-4, レベル 2  
  - **サージ保護**: EN61000-4-5, レベル 2  
- **製品寿命**: **reComputer R1100** は **2030年12月まで** 生産が継続される予定です  



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
| **消費電力** | 待機時: 2.88W; フルロード時: 5.52W |
| **電源スイッチ** | なし |
| **再起動スイッチ** | あり |
| **インターフェース** | |
| **イーサネット** | 1x 10/100/1000Mbps（PoE*対応）, 1x 10/100Mbps IEEE 802.3/802.3u |
| **USB** | 2x USB-A 2.0ホスト, 1x USB-C 2.0（OS書き込み用） |
| **RS485** | 2x RS485（絶縁） |
| **RS232** | 2x RS232（絶縁） |
| **DI（デジタル入力）** | 2x 絶縁DIポート, 入力電圧: 5~24V DC |
| **DO（デジタル出力）** | 2x 絶縁DOポート, 出力電圧: &lt;60V DC |
| **SIMカード** | 1x ナノSIMカードスロット（内部） |
| **SDカード** | 1x MicroSDカードスロット |
| **SSD** | 1x M.2 NVMe SSDスロット（2280-Mキー） |
| **LEDインジケーター** | 12x LEDインジケーター |
| **ブザー** | 1 |
| **リセットボタン** | 1 |
| **HDMI** | 1x HDMI 2.0 |
| **無線通信** | |
| **Wi-Fi 2.4/5.0GHz** | オンチップWi-Fi* |
| **BLE 5.0** | オンチップBLE* |
| **LoRa®** | USB LoRa®* / SPI LoRa®* |
| **4Gセルラー** | 4G LTE* |
| **Zigbee** | USB Zigbee* |
| **規格** | |
| **EMC準拠** | ESD: EN61000-4-2, レベル3; EFT: EN61000-4-4, レベル2; サージ: EN61000-4-5, レベル2 |
| **認証** | CE, FCC, TELEC, RoHS, REACH |
| **環境条件** | |
| **防塵防水等級** | IP40 |
| **動作温度** | -30 ~ 70°C |
| **動作湿度** | 10 ~ 95% RH |
| **保管温度** | -40 ~ 80°C |
| **その他の特徴** | |
| **スーパーキャパシタUPS** | SuperCAP UPS LTC3350モジュール* |
| **ハードウェアウォッチドッグ** | 1 ~ 255秒 |
| **RTC** | 高精度RTC |
| **セキュリティ** | |
| **暗号化チップ** | TPM 2.0*, ATECC608A |
| **冷却システム** | ファンレス |
| **保証期間** | 2年 |
| **製品寿命** | 2030年12月まで |
| **注意事項** | `*`が付いているオプションは、アクセサリリストに基づき追加購入が必要です。 |
| **コンポーネントとインターフェースの状態** | |
| **予約済み** | 将来の使用または拡張用に指定されています。 |
| **オプション** | 必須ではないコンポーネントで、ユーザーが選択可能です。 |
| **占有済み** | 現在使用中で、製品の機能に不可欠です。 |
| **含まれる** | 標準パッケージに含まれる必須コンポーネントです。 |

**注意事項**: `*`が付いているオプションは、アクセサリリストに基づき追加購入が必要です。

## 機械的寸法  

| **パラメータ** | **説明** |
|--------------|----------------|
| **寸法（幅 x 高さ x 奥行き）** | 130 mm x 93 mm x 49.6 mm |
| **筐体** | 6061アルミニウム合金ケース、透明PCサイドパネル付き |
| **取り付け方法** | DINレール / 壁取り付け |
| **重量（正味）** | 560g |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/dimensions.PNG" style={{width:800, height:'auto'}}/></div>

## ハードウェア概要

### システム概要

#### インターフェース概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/interface.PNG" style={{width:800, height:'auto'}}/></div>

#### メインボード概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/mainboard.PNG" style={{width:800, height:'auto'}}/></div>

#### 電源図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power.PNG" style={{width:800, height:'auto'}}/></div>

reComputer R1100 は、DC端子とPoEポートの2つの電源供給オプションを提供します。デフォルトでは、公式の地域別電源アダプタ（SKU: 110061505/110061506）を使用してDC端子から電源を供給します。代替として、オプションのPoE電源供給（PoEモジュール、SKU: 110991925）も利用可能です。この柔軟性により、さまざまな電源ソースにシームレスに統合でき、さまざまなアプリケーションニーズに対応します。

**2ピン電源端子**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:400, height:'auto'}}/></div>

reComputer R1100 は、9～36VのDC電圧供給で動作し、2ピンの電源端子ブロックを介して接続されます。接地のため、アース線を電源端子の左上隅にあるネジにしっかりと取り付けることができます。

**PoE**

PoEモジュールをインストールすると、reComputer R1100 のETH0ポートがPoE電源供給をサポートし、イーサネット経由でデバイスに電力を供給する便利で効率的な方法を提供します。このオプションは、電源が限られているアプリケーションや、電源コンセントが容易に利用できない場所に最適で、設置を簡素化し配線を最小限に抑えます。
- **PoE入力**: 44～57V（標準: 48V）
- **PoE出力**: 12V、最大1.1A

:::note
付属のPoEモジュールはIEEE 802.3af規格に準拠しており、最大12.95Wの電力を供給します。ただし、SSDや4Gモジュールなどの高電力周辺機器には、PoE電源が十分でない場合があります。その場合は、DC端子を使用して電源を供給し、デバイスの安定した信頼性の高い動作を確保することをお勧めします。
:::

**消費電力**

以下の表は、Seeed Studioのラボで実施された測定に基づくreComputer R1100のテスト済み消費電力値を示しています。これらの値は参考値であり、テスト方法や環境条件の違いによって結果が異なる場合があります。

| **状態**   | **電圧** | **電流** | **消費電力** | **説明** |
|-------------|------------|------------|----------------------|----------------|
| **シャットダウン** | 24V | 51mA | 1.224W | シャットダウンおよび電源オフ状態での静的消費電力テスト。 |
| **アイドル** | 24V | 120mA | 2.88W | 24V電源を供給し、テストプログラムを実行しない状態での入力電流を測定。 |
| **フルロード** | 24V | 230mA | 5.52W | CPUが`"stress -c 4"`コマンドでフルロード状態で動作し、外部デバイスが接続されていない場合。 |

**電源オンと電源オフ**  
reComputer R1100 にはデフォルトで電源ボタンが含まれていません。システムは電源に接続されると自動的に起動します。

- シャットダウンするには、オペレーティングシステムのシャットダウンオプションを使用し、プロセスが完了するまで待ってから電源を切断してください。  
- システムを再起動するには、電源を再接続するだけです。

これにより、安全な操作が保証され、データ損失やシステムの問題を防ぐことができます。

#### ブロック図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:400, height:'auto'}}/></div>

#### IIC図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/IIC.PNG" style={{width:600, height:'auto'}}/></div>

## インターフェース説明

| **インターフェース** | **説明** |
|---------------------|----------|
| **Ethernet** | 1 × 10/100/1000 Mbps (PoE*対応), 1 × 10/100 Mbps (IEEE 802.3/802.3u) |
| **USB** | 2 × USB-A 2.0 (ホスト), 1 × USB-C 2.0 (OS書き込み用) |
| **RS485** | 2 × RS485 (絶縁型) |
| **RS232** | 2 × RS232 (絶縁型) |
| **DI (デジタル入力)** | 2 × 絶縁型DIポート, 入力電圧: 5~24V DC |
| **DO (デジタル出力)** | 2 × 絶縁型DOポート, 出力電圧: &lt;60V DC |
| **HDMI** | 1 × HDMI 2.0 |
| **SDカードスロット** | MicroSDカード対応 |
| **SIMカードスロット** | Nano SIMカード対応 |
| **M.2スロット** | M.2 NVMe SSD対応 |
| **LEDインジケーター** | 12 × LEDインジケーター |
| **ブザー** | 1 |
| **リセットボタン** | 1 |

### LEDインジケーターの状態

R1100コンピュータには、システム状態を示すための12個のLEDが搭載されています。それぞれの具体的な機能は以下の表に記載されています。

以下は**LEDインジケーターの状態**を示す構造化された表です：

| **LEDインジケーター** | **色** | **状態** | **説明** |
|----------------------|-------|---------|----------|
| **PWR** | 緑 | 点灯 | デバイスが電源に接続されています。 |
| | | 消灯 | デバイスが電源に接続されていません。 |
| **ACT** | 緑 | 点滅 | LinuxでeMMCアクセスを示します。起動中にエラーが発生した場合、エラーパターンが点滅します（Raspberry Piのドキュメントを参照）。 |
| **USER** | 緑/赤/青 | ユーザー定義 | ユーザーによってプログラム可能です。 |
| **4G** | 緑 | 点灯 | ダイヤルアップが成功し、接続が正常です。 |
| | | 消灯 | 4G信号が接続されていない、またはデバイスが電源オフです。 |
| **DI1** | 緑 | 点灯/点滅 | 入力信号が検出されました。 |
| | | 消灯 | 電源がない、またはデータ送信がありません。 |
| **DI2** | 緑 | 点灯/点滅 | 入力信号が検出されました。 |
| | | 消灯 | 電源がない、またはデータ送信がありません。 |
| **DO1** | 緑 | 点灯/点滅 | 出力信号が検出されました。 |
| | | 消灯 | 電源がない、またはデータ送信がありません。 |
| **DO2** | 緑 | 点灯/点滅 | 出力信号が検出されました。 |
| | | 消灯 | 電源がない、またはデータ送信がありません。 |
| **COM1 (RS485 チャンネル1)** | 緑 | 点灯/点滅 | データの受信または送信中。 |
| | | 消灯 | RS485チャンネル1でデータ転送がありません。 |
| **COM2 (RS485 チャンネル2)** | 緑 | 点灯/点滅 | データの受信または送信中。 |
| | | 消灯 | RS485チャンネル2でデータ転送がありません。 |
| **COM3 (RS232 チャンネル1)** | 緑 | 点灯/点滅 | データの受信または送信中。 |
| | | 消灯 | RS232チャンネル1でデータ転送がありません。 |
| **COM4 (RS232 チャンネル2)** | 緑 | 点灯/点滅 | データの受信または送信中。 |
| | | 消灯 | RS232チャンネル2でデータ転送がありません。 |

### ACTステータスコード

以下は**ACTステータスコード**を示す構造化された表です：

| 長い点滅 | 短い点滅 | ステータス説明 |
|----------|----------|----------------|
| 0 | 3 | 起動失敗（一般的なエラー） |
| 0 | 4 | `start*.elf`が見つかりません |
| 0 | 7 | カーネルイメージが見つかりません |
| 0 | 8 | SDRAMエラー |
| 0 | 9 | SDRAMが不足しています |
| 0 | 10 | HALT状態 |
| 2 | 1 | パーティションがFATではありません |
| 2 | 2 | パーティションからの読み取り失敗 |
| 2 | 3 | 拡張パーティションがFATではありません |
| 2 | 4 | ファイル署名/ハッシュ不一致（Pi 4） |
| 4 | 4 | サポートされていないボードタイプ |
| 4 | 5 | 致命的なファームウェアエラー |
| 4 | 6 | 電源障害タイプA |
| 4 | 7 | 電源障害タイプB |

**追加の注意事項:**  
- **ACT LEDが規則的な4回点滅パターン**の場合、bootcode（`start.elf`）が欠落していることを示します。  
- **ACT LEDが不規則なパターンで点滅**する場合、起動プロセスが開始されています。  
- **ACT LEDが全く点滅しない**場合、EEPROMコードが破損している可能性があります。周辺機器を接続せずに起動を試みてください。  
- 詳細については、**Raspberry Piフォーラム**を参照してください：[Piが起動しない場合？（Boot Problems Sticky）](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151)。

**USERインジケーター**

reComputer R1100には、ユーザーの要件に基づいてカスタマイズ可能な**USERインジケーター**が含まれています。

**注意:**  
**USER LED**のテストに関する詳細は、[このセクション](https://wiki.seeedstudio.com/ja/recomputer_r1100_configure_system/#control-led-indicators)を参照してください。

### ブザー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/buzzer.PNG" style={{width:600, height:'auto'}}/></div>

reComputer R1100にはアクティブブザーが搭載されており、アラームやイベント通知に使用できます。

**Buzzer_EN**に対応するGPIOを確認するには、ターミナルで以下のコマンドを入力してください：

```
cat /sys/kernel/debug/gpio
```

これにより、ブザーに割り当てられたGPIOとして**gpio587**が出力されます。

**注意:**  
**ブザーのテスト**に関する詳細は、[このセクション](https://wiki.seeedstudio.com/ja/recomputer_r1100_configure_system/#controlling-the-buzzer-via-gpio)を参照してください。

### RS485

reComputer R1100シリーズは、**6ピン3.5mm間隔のPhoenix端子**を備えた**2つのRS485ポート**を搭載しています。各RS485ポートは、簡単に識別できるようにシルクスクリーンで**"A/B/GND"**とラベル付けされています。

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

**ケーブル接続**  
RS485配線の回路図は以下の通りです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs485_connection.PNG" style={{width:600, height:'auto'}}/></div>

:::note
製品パッケージには120オームの終端抵抗が含まれており、RS485通信に必要に応じて使用できます。
:::

RS485のテストに関する詳細は、[このセクション](https://wiki.seeedstudio.com/ja/recomputer_r1100_configure_system/#rs485-testing)を参照してください。

### RS232

reComputer R1100シリーズは、**6ピン3.5mm間隔のPhoenix端子**を備えた**2つのRS232ポート**を搭載しています。各RS232ポートは、シルクスクリーンで**TX/RX/GND**とラベル付けされています。

**ピン定義**  
端子のピン割り当ては以下の通りです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs285.PNG" style={{width:600, height:'auto'}}/></div>

以下はRS232ピン定義の表です：

| **ピンID** | **ピン名**       |
|-----------|------------------|
| 13        | R232-3_RX        |
| 14        | R232-4_RX        |
| 15        | R232-3_TX        |
| 16        | R232-4_TX        |
| 17        | GND              |
| 18        | GND              |

**ケーブル接続**

RS232配線の回路図は以下の通りです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs285_connection.PNG" style={{width:600, height:'auto'}}/></div>

:::note
RS232の詳細なテスト手順については、RS485テストの詳細については[こちらのセクション](https://wiki.seeedstudio.com/ja/recomputer_r1100_configure_system/#rs232-testing)をご参照ください。
:::

### DI (デジタル入力)
reComputer R1100シリーズには、3ピン3.5mm間隔のPhoenix端子を備えた2つのDIポートが含まれています。  
単一DIポートのシルクスクリーンラベルは**"DI/G_DI"**です。

**ピン定義**

端子ピンの定義は以下の通りです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DI.PNG" style={{width:600, height:'auto'}}/></div>

以下は**DI (デジタル入力) ピン定義**の表です：  

| **ピンID** | **ピン名** |
|-----------|------------|
| 7         | DI1        |
| 9         | DI2        |
| 11        | G_DI       |

**ケーブル接続**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DI_connect.PNG" style={{width:600, height:'auto'}}/></div>

以下は**DI (デジタル入力) パラメータ**の表です：  

| **パラメータ**           | **説明**          |
|------------------------|-------------------|
| 入力タイプ             | PNP               |
| 絶縁保護              | 5 kV              |
| DIからG_DI (ON状態)   | 5~30 VDC          |

:::note 
DIテストの詳細については[こちらのセクション](https://wiki.seeedstudio.com/ja/recomputer_r1100_configure_system/#di-digital-input-testing)をご参照ください。
:::

### DO (デジタル出力)

reComputer R1100シリーズ機器には、3ピン3.5mm間隔のPhoenix端子を備えた2つのDOポートが含まれています。単一DOのシルクスクリーンラベルは**"DO/G_DO"**です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DO.PNG" style={{width:600, height:'auto'}}/></div>

**ピン定義表**

| ピンID | ピン名       |  
|--------|------------|  
| 8      | DO1        |  
| 10     | DO2        |  
| 12     | G_DO       |

**ケーブル接続**

単一DO配線の回路図は以下の通りです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DO_connect.PNG" style={{width:600, height:'auto'}}/></div>

**DOポートパラメータ**

| パラメータ            | 説明             |  
|----------------------|----------------|  
| 出力タイプ           | トランジスタ      |  
| 絶縁保護             | 5 kV           |  
| 出力ノート           | &lt;60VDC        |

:::note
DOテストの詳細については[こちらのセクション](https://wiki.seeedstudio.com/ja/recomputer_r1100_configure_system/#do-digital-output)をご参照ください。
:::

### ブートスイッチ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/Boot.PNG" style={{width:200, height:'auto'}}/></div>

reComputer R1100のブートスイッチはCM4モジュールのnRPI_BOOTピンに接続されています。このスイッチにより、eMMCとUSBの間でブートソースを選択できます。

- **通常モード:** スイッチを「BOOT」ラベルから**離す**ことでeMMCから起動します。  
- **フラッシュモード:** スイッチを「BOOT」ラベルに**近づける**ことでType-C USBインターフェースからシステムイメージをフラッシュします。

以下はブートスイッチの位置と対応するモードの表です：  

| **スイッチ位置**       | **モード**       | **説明**             | **nRPI-BOOT** |
|---------------------|---------------|----------------------|---------------|
| 「BOOT」から離す     | 通常モード      | eMMCから起動         | Low           |
| 「BOOT」に近づける   | フラッシュモード | USBから起動          | High          |

### USB

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/usb.PNG" style={{width:200, height:'auto'}}/></div>

reComputer R1100には1つのUSB Type-Cポートと2つのUSB Type-Aポートが搭載されています。以下の表はそれらの機能と説明を示しています。

以下はUSBポートとその機能の表です：  

| **タイプ**   | **数量**     | **プロトコル** | **機能**       | **説明**                           |
|-----------|------------|------------|--------------|-----------------------------------|
| Type-C   | 1          | USB 2.0    | USB-デバイス | シリアルポートデバッグ、イメージ書き込みなどに使用 |
| Type-A   | 2          | USB 2.0    | USB-ホスト   | フラッシュドライブ、USBキーボード、マウスなどの接続 |

### SDスロット
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SD.PNG" style={{width:200, height:'auto'}}/></div>

reComputer R1100シリーズ機器にはmicro SDカードスロットが含まれており、ユーザーデータを保存するためにmicro SDカードを挿入することができます。

### SIMスロット（内部）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/simslot.PNG" style={{width:600, height:'auto'}}/></div>

reComputer R1100シリーズには内部Nano SIMカードスロットが含まれており、Nano SIMカードを挿入して4G接続を可能にします。以下の表は標準SIM、Micro SIM、Nano SIMカードのサイズの違いを示しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SIMsizes.PNG" style={{width:400, height:'auto'}}/></div>

:::note
reComputer R1100の標準バージョンには内蔵4Gモジュールが含まれていません。4G機能が必要な場合は、追加の4Gモジュールを別途購入する必要があります。詳細については[こちらのセクション](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/#optional-interfaces-and-modules)をご参照ください。
:::

### SSDスロット

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SSD.PNG" style={{width:600, height:'auto'}}/></div>
 

reComputer R1100 は、**NVMe M.2 2280 SSDスロット**を搭載しており、**128GB、256GB、512GB、1TB**のストレージ容量をサポートしています。このスロットにより、高速なストレージ拡張が可能となり、システムの**性能**と**容量**を向上させることができます。  

**注意:**  
SSDカードには主に2つの用途があります:  
1. **大容量ストレージ** – SSDは大容量のストレージニーズに対応できます。  
2. **システムイメージを持つブートドライブ** – 一部のSSDは、大容量ストレージとしてだけでなく、システムのブートドライブとしても使用できます。  

ただし、すべてのSSDがブート機能をサポートしているわけではありません。SSDをブートドライブとして使用する予定で、どのモデルを購入すべきか不明な場合は、**1TB SSD (SKU112990267)** をお勧めします。このモデルはブート機能がテストおよび検証されており、互換性の問題を減らし、試行錯誤のコストを最小限に抑えることができます。

### reComputer R1100 の Mini-PCIe スロット

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/pci.PNG" style={{width:600, height:'auto'}}/></div>

reComputer R1100 は、**2つの Mini-PCIe スロット**を搭載しており、さまざまな通信プロトコルをサポートしています。以下の表は、各スロットでサポートされているプロトコルを示しています:  

| **スロット**       | **サポートされているプロトコル**   |  
|------------------|------------------------------|  
| **Mini-PCIe 1** | 4G LTE、USB LoRa®、USB Zigbee |  
| **Mini-PCIe 2** | SPI LoRa®、USB LoRa®、USB Zigbee |  

これらのスロットにより、ユーザーは必要に応じて**4G LTE、LoRa®、Zigbee**モジュールを統合し、接続オプションを拡張することができます。

このデバイスには、**Mini-PCIeインターフェース**が2つ含まれています: **スロット1**と**スロット2**。  

- **Mini-PCIe スロット1**は**SIMカードスロット**に接続されており、**USBプロトコル**をサポートしています。これにより、**4G LTE、USB LoRa®、USB Zigbee**モジュールを接続するのに適しています。  
- **Mini-PCIe スロット2**は、**USBおよびSPIプロトコル**の両方をサポートしていますが、**SIMカードスロットには接続されていません**。これにより、**SPI LoRa®、USB LoRa®、USB Zigbee**デバイスを収容することができます。  

これらのスロットは、さまざまなワイヤレス通信モジュールに対する柔軟な拡張オプションを提供します。

### リセットホール  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reset.PNG" style={{width:200, height:'auto'}}/></div>


reComputer R1100 には、リセットホール内に**ミニプッシュボタンスイッチ**が搭載されています。このボタンを細い物体で押すことで、ユーザーは**CM4をリセット**することができます。  

- このピンが**ハイ**の場合、**CM4が起動している**ことを示します。  
- このピンが**ローに駆動**されると、モジュールが**リセット**されます。

### Ethernet RJ45  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/eth.PNG" style={{width:200, height:'auto'}}/></div>

**reComputer R1100** には、2つのEthernetポートが搭載されています:  

| 名前  | タイプ                         | スピード              | PoEサポート                |
|-------|------------------------------|---------------------|----------------------------|
| ETH0  | CM4ネイティブギガビットEthernet  | 10/100/1000 Mbit/s  | サポート (追加モジュールが必要) |
| ETH1  | USBから変換されたEthernet       | 10/100 Mbit/s       | サポートされていない             |

**reComputer R1100** には、2つのEthernet RJ45ポートが搭載されています:  

- **ETH0**: **CM4ネイティブギガビットEthernet**インターフェースで、**10/100/1000 Mbit/s**の速度をサポートしています。追加の**PoEモジュール**を使用することで、デバイスに電力を供給するための**Power over Ethernet (PoE)** を有効にすることができます。  
- **ETH1**: **USBから変換されたEthernet**インターフェースで、**10/100 Mbit/s**の速度をサポートしていますが、**PoEはサポートされていません**。

**注意**  
PoEの詳細については、[このセクション](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/#poe-power-over-ethernet)を参照してください。

### HDMI

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/display.PNG" style={{width:200, height:'auto'}}/></div>

reComputer R1100 は、CM4からのネイティブHDMIインターフェースを備えており、**4K@60fps**までのビデオ出力をサポートしています。複数のディスプレイを必要とするアプリケーションに最適で、外部の大画面にコンテンツを出力することができます。

### RTC  
reComputer R1100 には、**RTC (リアルタイムクロック)回路**が含まれており、事前にインストールされた**CR2032バッテリー**によって、電源が失われた場合でも正確な時刻を保持します。  

:::note
RTCテストの詳細については、[このセクション](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/#rtc-real-time-clock-testing)を参照してください。
:::  

### ウォッチドッグ  
reComputer R1100 には、独立した**ハードウェアウォッチドッグ回路**が搭載されており、クラッシュ時にシステムを自動的に再起動します。このウォッチドッグは**RTC**を通じて実装されており、**1秒から255秒**の範囲で柔軟なフィード時間を設定できます。  

:::note 
ウォッチドッグテストの詳細については、[このセクション](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/#watchdog-timer-testing)を参照してください。
:::

## オプションインターフェースとモジュール  
reComputer R1100は、**幅広い拡張モジュールとアクセサリー**をサポートしており、さまざまな用途に適応可能です。reComputer R1100をカスタマイズしたい場合は、**odm@seeed.cc**までお問い合わせください。  

#### アクセサリーとオプションモジュールの一覧

以下は読みやすさを向上させたフォーマットの表です：  

| **備考**                                       | **アイテム**           | **製品名**                                           | **SKU**         |
|------------------------------------------------|------------------------|------------------------------------------------------|----------------|
| **LoRa® WAN機能には一緒に使用する必要があります** | LoRa®モジュール         | 地域選択可能 LoRaWAN ゲートウェイモジュール (SPI) - US915 | 114992969      |
|                                                |                        | 地域選択可能 LoRaWAN ゲートウェイモジュール (SPI) - EU868 | 114993268      |
|                                                |                        | 地域選択可能 LoRaWAN ゲートウェイモジュール (USB) - US915 | 114992991      |
|                                                |                        | 地域選択可能 LoRaWAN ゲートウェイモジュール (USB) - EU868 | 114992628      |
| **LoRa®アンテナ**                              | LoRa®アンテナ          | LoRaアンテナキット - 868-915MHz                     | 110061501      |
| **Zigbeeモジュール**                           | Zigbeeモジュール       | Mini-PCIe USB Zigbeeモジュール                      | 110992005      |
| **Zigbeeアンテナ**                             | Zigbeeアンテナ         | reComputer R1100用Zigbeeアンテナキット             | 110061641      |
| **Wi-Fi機能にはこのアクセサリーが必要です**      | Wi-Fi/BLEアンテナ      | Raspberry Pi Compute Module 4アンテナキット         | 114992364      |
| **4Gモジュール用4Gアンテナ、GPS機能用GPSアンテナ** | 4Gモジュール           | LTE Cat 4 EC25-AFXGA Mini-PCIeモジュール - 北米      | 113991134      |
|                                                |                        | LTE Cat 4 EC25-EUXGR Mini-PCIeモジュール - EMEA & タイ | 113991135      |
|                                                |                        | LTE Cat 4 EC25-AUXGR Mini-PCIeモジュール - オーストラリア | 113991174      |
|                                                |                        | LTE Cat 4 EC25-EFA Mini-PCIeモジュール - タイ        | 113991214      |
|                                                |                        | LTE Cat 4 EC25-EMGA Mini-PCIeモジュール - マレーシア | 113991234      |
|                                                |                        | LTE Cat 4 EC25-JFA Mini-PCIeモジュール - 日本        | 113991296      |
| **4Gアンテナ**                                 | 4Gアンテナ             | 4Gモジュール用4Gアンテナキット                      | 110061502      |
| **GPSアンテナ**                                | GPSアンテナ            | EC25 4Gモジュール用GPSアンテナキット                | 110061521      |
| **暗号化チップ**                               | TPM 2.0               | Infineon SLB9670搭載TPM 2.0モジュール               | 114993114      |
| **SSDストレージ**                              | SSDカード              | NVMe M.2 2280 SSD 1TB                               | 112990267      |
|                                                |                        | 512GB NVMe M.2 PCIe Gen3x4 2280内部SSD              | 112990247      |
|                                                |                        | 256GB NVMe M.2 PCIe Gen3x4 2280内部SSD              | 112990246      |
|                                                |                        | 128GB NVMe M.2 PCIe Gen3x4 2280内部SSD              | 112990226      |
| **このモジュールはreComputer R1100のキャリアボードにハンダ付けする必要があります** | PoE | MQ7813T120 PoEモジュールキット reTerminal DM用 | 110991925 |
| **UPS**                                        | UPS                   | SuperCAP UPS LTC3350モジュール                      | 110992004      |


**reComputer R1100**のメインボードには**2つのMini-PCIeスロット**があり、以下の互換性があります：  

- **Mini-PCIeスロット1**がサポートするもの：  
  - **4Gモジュール** (USBプロトコル)  
  - **LoRa®モジュール** (USBプロトコル)  
  - **Zigbeeモジュール** (USBプロトコル)  

- **Mini-PCIeスロット2**がサポートするもの：  
  - **LoRa®モジュール** (USB & SPIプロトコル)  
  - **Zigbeeモジュール** (USBプロトコル)  

:::note
 **4GモジュールとLoRa®モジュールは同時に使用できません。**  
 **ボードに2つのLoRa®モジュールを挿入することはできません。**  

:::

つまり、**4GまたはLoRa®のどちらかを選択する必要があり、LoRa®モジュールは**1つだけ**インストール可能です。

### Wi-Fi/BLE  
**reComputer R1100-10**は、オンボードの**Wi-Fi/BLEバージョン**を備えた**CM4**によって駆動されており、CM4と同じWi-Fi/BLEパラメータを提供します。詳細な仕様については、**Raspberry Pi公式ウェブサイト**を参照してください。  



### 4Gモジュール  
**reComputer R1100**のメインボードには**2つのMini-PCIeスロット**があり、**Mini-PCIeスロット1**は**USBプロトコルを介した4Gモジュール**をサポートします。**Quectel EC25 4Gモジュール**はreComputer R1100との互換性が完全にテストされています。  

:::note 
**4G機能**が必要な場合は、**対応する4Gモジュールと外部アンテナを購入**し、[4G/LoRa®/Zigbeeモジュールとアンテナの組み立て](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-4glorazigbee-module-and-antenna)の手順に従ってください。 
:::


### LoRa®モジュール  
**Mini-PCIeスロット**の両方が**USBプロトコルを介したLoRa®モジュール**をサポートします。さらに、**Mini-PCIeスロット2**は**SPIプロトコルを使用するLoRa®モジュール**をサポートします。**Seeed StudioのWM1302モジュール**はreComputer R1100との互換性が完全にテストされています。

:::note 
**LoRa®機能**が必要な場合は、**対応するLoRa®モジュールと外部アンテナを購入**し、[4G/LoRa®/Zigbeeモジュールとアンテナの組み立て](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-4glorazigbee-module-and-antenna)の手順に従ってください。 
:::

### Zigbeeモジュール
Mini-PCIeスロットは**USBプロトコルを使用するZigbeeモジュール**をサポートしており、互換性のあるデバイスにZigbee機能をシームレスに統合できます。これにより、Zigbeeネットワーク内で効率的な通信と制御が可能となり、システムの汎用性と接続性が向上します。2つのMini-PCIeスロットがZigbeeモジュール用に利用可能であるため、ユーザーは多様なアプリケーションを柔軟に実装し、信頼性を向上させることができます。

:::note  
**Zigbee機能**が必要な場合は、**対応するZigbeeモジュールと外部アンテナを購入**し、[4G/LoRa®/Zigbeeモジュールとアンテナの組み立て](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-4glorazigbee-module-and-antenna)の指示に従ってください。  
:::

### PoE (Power over Ethernet)

**reComputer R1100はIEEE 802.3af PD (Powered Devices)標準**をサポートしており、**PoE電源供給モジュール**を追加することで機能します。**PoEシートは基板上に事前にハンダ付けされています**が、PoE機能を利用するには**デバイスを分解してPoEモジュールを取り付ける必要があります**。

分解手順については、[分解ガイド](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-ups-and-poe-module)を参照してください。

:::note  
- **reComputer R1100はPoE電源供給をサポートしていますが、標準製品にはPoEモジュールが含まれていません。**  
- **Seeedはバッチカスタマイズ注文向けにPoEのハンダ付けおよび組み立てサービスを提供しています。**  
- サンプルテストの場合、顧客は**PoEモジュールを自分でハンダ付けおよび組み立てる必要があります**。手順は**「PoEモジュールの組み立て」**に記載されています。  
:::

### SSD (ストレージ拡張)
**reComputer R1100は2280 NVMe SSD**をサポートしており、**基板上の2つのMini-PCIeスロットの下にあるPCIeスロット (J62)** を介して接続できます。

:::note
- **CM4のPCIeインターフェースはGen 2.0**であり、**理論上の最大速度は5Gbps**です。  
- **Gen 3.0以上のSSD**を使用する場合、最大速度に達しない可能性があります。  
- **reTerminal DMのテスト結果:**  
  - **最大書き込み速度:** 230MB/s  
  - **最大読み取り速度:** 370MB/s  
- SSDの互換性は異なる場合があるため、**承認されたアクセサリリストからSSDを購入することを推奨します。**  
:::

**SSD使用シナリオ:**  
- **大容量ストレージ** – SSDを使用してストレージ容量を拡張できます。  
- **システムイメージを含むブートドライブ** – 一部のSSDはシステムイメージを保存し、**SSDから直接ブート**することができます。  

:::note
**すべてのSSDがブート機能をサポートするわけではありません！**  
ブート用SSDが必要で、どれを購入すべきか不明な場合、Seeedは**1TB SSD (SKU: 112990267)**を推奨します。このSSDは**ブート機能がテストおよび検証されており**、互換性リスクとトラブルシューティングコストを最小限に抑えます。  
:::

### 暗号化チップ - TPM 2.0

reComputer R1100は**InfineonのOPTIGA™ TPM SLB9670**をサポートしており、**Trusted Computing Group (TCG) TPM 2.0**仕様に準拠しています。

**主な特徴:**  
- **セキュリティのための暗号化チップ**  
- **SPIインターフェース** (基板上の**ポートJ13**に接続)  
- 以下のための**信頼の基盤**を提供:  
  - **プラットフォームの整合性**  
  - **リモート認証**  
  - **暗号化サービス**  

:::note  
インストール手順については、[TPM 2.0モジュールの組み立て](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-tpm-20-module)を参照してください。  
:::

### UPS (無停電電源装置)モジュール

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/UPS.PNG" style={{width:600, height:'auto'}}/></div>

reComputer R1100の**UPSモジュール**は、**7Fスーパーキャパシタベース**の電源バックアップシステムで、**直列**で動作します。

**動作方法:**  
1. **DC 5V電源**と**CM4**の間に配置されます。  
2. **GPIO信号**を使用して、**5V電源が故障した際にCPUに通知**します。  
3. CPUは**緊急スクリプト**を実行し、電力が尽きる前に対応します。  
4. スクリプトは安全なシステムシャットダウンのために**"$ shutdown"**コマンドを実行します。  

**バックアップ持続時間:**  
**UPSの稼働時間**は**システム負荷**に依存します。以下はテスト結果です:  
- **CM4 (4GB RAM, 32GB eMMC, Wi-Fiモジュール)**。  

## 追加リソース

- [reComputer R1100 3Dファイル](https://files.seeedstudio.com/R11/reComputer%20R1100_3D.stp)
- [reComputer R1100 回路図設計、PCB設計](https://files.seeedstudio.com/R11/reComputer%20R1100_schematic_design_files.zip)
- [reComputer R1100 フライヤー](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer-R1100/reComputer-R1100-flyer.pdf)
- [ユーザーマニュアル](https://files.seeedstudio.com/R11/reComputer%20R1100%20User%20Manual-V1.0.pdf)

  
## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>