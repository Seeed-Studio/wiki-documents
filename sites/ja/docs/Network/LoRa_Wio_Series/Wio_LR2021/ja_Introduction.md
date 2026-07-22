---
description: Wio-LR2021 の紹介
title: Wio-LR2021 の概要
keywords:
  - Wio-LR2021
  - LoRa
  - LR2021
  - Semtech
  - Sub-GHz
  - 2.4GHz
  - LoRaWAN
  - BLE 5.0
  - Transceiver
  - Wio
image: https://files.seeedstudio.com/wiki/Wio-LR2021/img/1-100058045-Seeed-Studio-Wio-LR2021-Wireless-module-masked.jpg
slug: /wio_lr2021_introduction
sku: 100058045
sidebar_position: 1
last_update:
  date: 06/03/2026
  author: David Du
createdAt: '2026-06-03'
updatedAt: '2026-06-22'
url: https://wiki.seeedstudio.com/ja/wio_lr2021_introduction/
---

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/1-100058045-Seeed-Studio-Wio-LR2021-Wireless-module-masked.jpg" style={{width:900, height:'auto'}}/></div></td>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Wio-LR2021-Wireless-module-868-915MHz-Tape-reel-p-6831.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 1. はじめに
**Wio-LR2021 Wireless Module** は、Semtech の第 4 世代 LR2021 チップセットを搭載した次世代マルチバンド無線トランシーバモジュールです。**Sub-GHz (863-928MHz)** と **2.4GHz ISM** 動作を 1 つのコンパクトなサブシステムに統合し、地域やアプリケーションの違いによる複数の無線設計の必要性をなくします。

IoT 開発者、LPWAN ソリューションプロバイダ、資産トラッキングエンジニア、スマート農業システムインテグレータ、産業用 IoT プロダクトマネージャ向けに設計された Wio-LR2021 は、超長距離 Sub-GHz 通信と高速 2.4GHz データリンクのギャップを埋め、開発者が複数の RF ハードウェアバリアントを維持することなく、グローバルに展開可能な製品を構築できるようにします。

## 2. 特長

### 2.1. 統合マルチバンド RF アーキテクチャ

Wio-LR2021 は、複数の異なる RF バンドを 1 つのコンパクトなサブシステムに統合しています。Sub-GHz カバレッジ (863-928MHz) は世界中の地域無線免許不要バンドへの準拠を保証し、2.4GHz ISM 動作はより高いデータレートとグローバルな調和を提供します。

:::info 技術詳細
Semtech LR2021 チップセットは、外付け RF スイッチを不要にする **Switchless Direct-Tie** マッチングネットワークアーキテクチャを採用しています。PA 出力と LNA 入力は Sub-GHz ポート上の同一 RF ノードを共有し、BOM 点数と基板の複雑さを低減します。+6dBm を超えて送信する場合は、追加のフロントエンド保護が必要です。絶対最大入力は +10dBm です。
:::

:::caution
本モジュールの RF インターフェースの最大入力電力は **+10dBm** です。これを超えると不可逆的な損傷を引き起こす可能性があります。入力電力が **+6dBm** を超える場合は、RF フロントエンドに追加の保護回路を設けることを推奨します。高出力送信機の近くでモジュールを使用する際は特に注意してください。
:::

### 2.2. 超低消費電力設計

ディープスリープ電流はわずか **583nA**、アイドル電流は **960uA** で、Wio-LR2021 はバッテリ駆動およびエナジーハーベスティングアプリケーション向けに最適化されています。 

:::info 省電力化のヒント
バッテリ寿命を最大化するには、ウェイクサイクル間で DIO 設定を保持する Warm Sleep モードを活用してください。
:::

| モード | 電流 | 条件 |
|------|---------|------------|
| TX (868MHz, +22dBm) | 116.0 mA | Sub-GHz 最大出力 |
| TX (915MHz, +22dBm) | 119.4 mA | Sub-GHz 最大出力 |
| TX (2.4GHz, +12dBm) | 28.4 mA | 2.4GHz 最大出力 |
| RX (Sub-GHz, LoRa SF12/125kHz) | 8.19 mA | 最大感度モード |
| RX (2.4GHz, LoRa SF12/125kHz) | 8.59 mA | 最大感度モード |
| Deep Sleep | 583 nA | すべての機能オフ、設定保持 |
| Idle / Standby | 960 uA | RC オシレータ動作中、レジスタ保持 |

### 2.3. 高度な変調方式とプロトコル対応

本モジュールは、長距離 LPWAN 用の **LoRa**、最大 2.6Mbps の高速リンク向け **FLRC** (Fast Long Range Communication)、レガシー互換性のための **(G)FSK** および **(G)MSK**、標準化プロトコル向けの **4-FSK** および **O-QPSK**、さらに堅牢な衛星 IoT 接続向けの LR-FHSS など、幅広い変調方式をサポートします。

:::info プロトコルの柔軟性
ネイティブなハードウェアサポートにより、ハードウェアを変更することなく、LoRaWAN、BLE 5.0、IEEE 802.15.4 (Thread/Zigbee)、Wi-SUN、Wireless M-BUS、Amazon Sidewalk 間をソフトウェア定義で移行できます。これにより、進化する規格や地域要件に対して設計を将来にわたって保護できます。
:::

### 2.4. マルチメディアストリーミング向け高速 FLRC

FLRC 変調は最大 2.6Mbps のデータレートを実現し、従来の LoRa の能力をはるかに上回ります。これにより、Wio-LR2021 は、LoRa の測距性能と堅牢性の特長を活かしつつ、ビデオプレビュー、オーディオストリーミング、ワイヤレス経由での大容量ファームウェア更新を必要とするアプリケーションに適したモジュールとなります。

### 2.5. 世界トップクラスの受信感度

Wio-LR2021 は、Sub-GHz SF12/125kHz 帯域幅で **-141.1dBm** の感度を達成し、良好な条件下では 160dBm を超えるリンクバジェットを実現します。2.4GHz では SF12/400kHz で感度 **-133dBm** に達し、ほとんどの競合するデュアルバンドソリューションを上回ります。

### 2.6. 事前認証取得済みコンパクト SMT パッケージ

22 ピン SMT パッケージでサイズはわずか 17.07x10.42x2.8mm の Wio-LR2021 は、基板スペースを最小限に抑えつつ高い機能性を提供します。FCC および CE の事前認証により、ホストデバイスの認証プロセスが簡素化され、市場投入までの時間を短縮できます。

:::note ホスト MCU が必要
Wio-LR2021 はアプリケーションプロセッサを内蔵しない純粋な RF トランシーバモジュールです。SPI インターフェース経由で制御するために、STM32、nRF52、ESP32、RP2040 などの外部ホスト MCU が必要です。
:::

## 3. ハードウェア概要

### 3.1. 回路図

<td><div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/Wio-LR2021-pinout-5-mask.jpg" style={{width:950, height:'auto'}}/></div></td>

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/WIO-LR2021_Pinout-3.png" style={{width:900, height:'auto'}}/></div></td>

### 3.2. ピン配置
| ピン番号| ピン名 | 種類 | 説明 |
|-----|----------|------|-------------|
|1| VCC_IN | 電源入力 | 1.8V - 3.7V 電源入力 |
|2| DIO5 | デジタル I/O | IRQ、RF スイッチ制御、クロック出力、リセット時に VCC_IN への内部弱プルアップ |
|3| RESET | デジタル入力 | **アクティブ LOW** |
|4| SPI_MISO | デジタル出力 | 3.3V ロジック、NSS が非アサート (HIGH) のとき Hi-Z |
|5| SPI_MOSI | デジタル入力 | 3.3V ロジック、NSS が非アサート (HIGH) のとき Hi-Z |
|6| SPI_SCK | デジタル入力 | 最大 16MHz、モード 0 (CPOL=0, CPHA=0)。 |
|7| SPI_NSS | デジタル入力 | **アクティブ LOW** |
|8| BUSY | デジタル出力 | オープンドレイン出力、ホスト PCB 上に外部プルアップが必要。LOW = レディ、HIGH = 処理中。NSS 立下りエッジで自動的に HIGH にプルアップ。 |
|9| GND | グランド | 共通グランドリファレンス |
|10| SubG_RF | RF | Sub-GHz RF ピン |
|11| GND | グランド | 共通グランドリファレンス |
|12| GND | グランド | 共通グランドリファレンス |
|13| 2.4G_RF | RF | 2.4GHz RF ピン |
|14| GND | グランド | 共通グランドリファレンス |
|15| GND | グランド | 共通グランドリファレンス |
|16| DIO11 | デジタル I/O | リセット時ハイインピーダンス |
|17| DIO10 | デジタル I/O | リセット時ハイインピーダンス |
|18| DIO9 | デジタル I/O | リセット時ハイインピーダンス |
|19| DIO8 | デジタル I/O | リセット時ハイインピーダンス |
|20| GND | グランド | 共通グランドリファレンス |
|21| DIO6 | デジタル I/O | リセット時に VCC_IN への内部弱プルアップ |
|22| DIO7 | デジタル I/O | リセット時ハイインピーダンス |

<br />

:::tip DIO 設定
すべての DIO 機能は、STDBY_RC モード中に SPI `SetDioFunction` コマンドを介して設定する必要があります。設定は Warm Sleep サイクル間で保持されます。ホストファームウェアでは、モジュールリセット直後に DIO を設定するよう計画してください。
:::



## リソース

- **[PDF]** [Wio-LR2021 モジュール データシート](https://files.seeedstudio.com/wiki/Wio-LR2021/res/Wio-LR2021%20Module%20Datasheet.pdf)

- **[STEP]** [Wio-LR2021 モジュール 3D モデル](https://files.seeedstudio.com/wiki/Wio-LR2021/res/Wio-LR2021_3D%20Model.step)

- **[DXF]** [Wio-LR2021 モジュール 機械図面](https://files.seeedstudio.com/wiki/Wio-LR2021/res/Wio-LR2021_Mechanical%20Drawing.dxf)

- **[ZIP]** [Wio-LR2021 モジュール KiCad ライブラリ](https://files.seeedstudio.com/wiki/Wio-LR2021/res/kicad-library.zip)

- **[ZIP]** [Wio-LR2021 モジュール Allegro ライブラリ](https://files.seeedstudio.com/wiki/Wio-LR2021/res/allegro-library.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>