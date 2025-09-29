---
description: SenseCAP M1 概要
title: SenseCAP M1 概要
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview
last_update:
  date: 02/14/2023
  author: Matthew
---


**SenseCAP M1** は、**Helium LongFi™ ネットワーク**に接続された高性能で即座に使用可能な **LoRaWAN 屋内ゲートウェイ**です。  
Raspberry Pi 4 をベースとし、WM1302/WM1303 (Semtech SX1302/SX1303) LoRa コンセントレータを内蔵しています。内蔵 BLE により、数ステップでデバイスのセットアップが可能で、Wi-Fi またはイーサネット経由でのインターネット接続をサポートします。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapm1.webp" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-M1-LoRaWAN-Indoor-Gateway-EU868-p-5022.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 </font></span></strong>
    </a>
</div>

**特徴**
============

![SenseCAP M1 Features](https://www.sensecapmx.com/wp-content/uploads/2022/06/features.jpg)

- **Helium ネットワークへの簡単セットアップ:** 簡単なステップですぐに使用開始。
- **成熟したハードウェアソリューション:** Raspberry Pi 4（2G/4G/8G RAM、64G ストレージ）と WM1302/WM1303 (Semtech SX1302/SX1303) ベースバンド LoRa チップを搭載。
- **安全で信頼性の高い:** 内蔵 ECC608 暗号チップ、高セキュリティ認証、信頼性の高い接続性。
- **自動オンラインアップグレード**: 手動操作不要の自動 OTA アップグレード。
- **リモート診断**: 内蔵リモート診断メカニズム、効率的なオンラインサポート。
- **64GB 大容量ストレージ**: 64GB MicroSD カード大容量ストレージ、ゲートウェイの寿命を延長し、将来のアップグレードのメモリ要件を満たします。
- **効率的な冷却ソリューション**: アルミニウム筐体にヒートシンクと冷却ファンを内蔵、長期間安定した動作を保証。
- **複数のアクセサリ**: ファイバーグラスアンテナ、スライドロッド設置用スライダーパッド、今後の屋外筐体など。
- **FCC および CE 認証取得**: 個人および商用利用が可能。  

    * * *

**パッケージ内容**
====================

- SenseCAP M1 LoRaWAN 屋内ゲートウェイ (EU868/US915) \*1
- 電源アダプタ (EU/US)\*1
- アンテナ (EU868/US915) \*1
- 64GB MicroSD カード \*1
- クイックスタートガイド \*1

![SenseCAP M1 Package Contents](https://www.sensecapmx.com/wp-content/uploads/2022/06/package-contents.png)

* * *

**全体概要**
====================

![SenseCAP M1 General Overview](https://www.sensecapmx.com/wp-content/uploads/2022/06/overview-1.webp)

![SenseCAP M1 Breakdown](https://www.sensecapmx.com/wp-content/uploads/2022/06/overview-2.webp)

![SenseCAP M1 Breakdown 2](https://www.sensecapmx.com/wp-content/uploads/2022/06/overview-3.webp)

* * *

**インターフェース**
=============

![SenseCAP M1 Interface](https://www.sensecapmx.com/wp-content/uploads/2022/06/interface-1.webp)

* * *

**寸法**
==============

![SenseCAP M1 Dimensions](https://www.sensecapmx.com/wp-content/uploads/2022/06/dimensions-1.webp)

- **デバイスサイズ (/個):** 154\*100\*44 mm
- **デバイス重量 (/個)**: 370g
- **パッケージサイズ (/個)**: 274\*175\*60 mm
- **パッケージ重量 (/個)**: 675g  

    * * *

**ブロック図**
=================

![SenseCAP M1 Block Diagram](https://www.sensecapmx.com/wp-content/uploads/2022/06/block-diagram.webp)

* * *

**システム構造**
====================

![SenseCAP M1 System Structure](https://www.sensecapmx.com/wp-content/uploads/2022/06/system-structure.webp)

* * *

**LED ステータス**
==============

![SenseCAP M1 LED Status](https://www.sensecapmx.com/wp-content/uploads/2022/06/LED-status.webp)

* * *

**ユニット情報**
====================

![SenseCAP M1 Unit Information](https://www.sensecapmx.com/wp-content/uploads/2022/06/unit-info.webp)

底面のこれら2つのラベルは、以下を含むユニットの重要な情報を示しています：

- モデル
- S/N
- WiFi MAC
- ETH MAC
- CPU ID

この情報は **SenseCAP Dashboard** への登録時に必要となります。

* * *

**データシート**
=============

<table style={{width: '45.6785%'}} border={0} cellSpacing={0} cellPadding={0}><tbody><tr><td style={{width: '28.2523%'}} valign="top">プロセッサ</td><td style={{width: '71.4849%'}} valign="top">Raspberry Pi 4 (Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz)</td></tr><tr><td style={{width: '28.2523%'}} valign="top">RAM</td><td style={{width: '71.4849%'}} valign="top">2GB / 4GB / 8GB</td></tr><tr><td style={{width: '28.2523%'}} valign="top">ストレージ</td><td style={{width: '71.4849%'}} valign="top">64GB MicroSD Card</td></tr><tr><td style={{width: '28.2523%'}} valign="top">周波数</td><td style={{width: '71.4849%'}} valign="top">EU868 Version: 863MHz ~ 870MHz<br />AS923 Version: 902MHz ~ 928MHz<br />US915 Version: 902MHz ~ 928MHz</td></tr><tr><td style={{width: '28.2523%'}} rowSpan={2} valign="top">感度</td><td style={{width: '71.4849%'}} valign="top">-125dBm @125KHz/SF7</td></tr><tr><td style={{width: '71.4849%'}} valign="top">-139dBm @125KHz/SF12</td></tr><tr><td style={{width: '28.2523%'}} valign="top">送信電力</td><td style={{width: '71.4849%'}} valign="top">最大 26 dBm</td></tr><tr><td style={{width: '28.2523%'}} valign="top">アンテナゲイン</td><td style={{width: '71.4849%'}} valign="top"><p>US915: 2.6 dBi</p><p>EU868: 2.8 dBi</p></td></tr><tr><td style={{width: '28.2523%'}} valign="top">アンテナインピーダンス</td><td style={{width: '71.4849%'}} valign="top">50 Ohm</td></tr><tr><td style={{width: '28.2523%'}} valign="top">アンテナ放射パターン</td><td style={{width: '71.4849%'}} valign="top">無指向性</td></tr><tr><td style={{width: '28.2523%'}} valign="top">Wi-Fi</td><td style={{width: '71.4849%'}} valign="top">2.4 GHz and 5.0 GHz IEEE 802.11ac wireless</td></tr><tr><td style={{width: '28.2523%'}} valign="top">Bluetooth</td><td style={{width: '71.4849%'}} valign="top">Bluetooth 5.0, BLE</td></tr><tr><td style={{width: '28.2523%'}} valign="top">LoRaWAN</td><td style={{width: '71.4849%'}} valign="top">Class A、C をサポート</td></tr><tr><td style={{width: '28.2523%'}} valign="top">入力電圧</td><td style={{width: '71.4849%'}} valign="top">DC 5V - 3A</td></tr><tr><td style={{width: '28.2523%'}} valign="top">インターフェース</td><td style={{width: '71.4849%'}} valign="top"><p>USB Type-C (電源供給) * 1</p><p>Ethernet RJ45 * 1</p><p>RP-SMA Female Antenna Connector* 1</p></td></tr><tr><td style={{width: '28.2523%'}} valign="top">動作温度</td><td style={{width: '71.4849%'}} valign="top">0°C to 50°C</td></tr><tr><td style={{width: '28.2523%'}} valign="top">相対湿度</td><td style={{width: '71.4849%'}} valign="top">0% - 90% (結露なし)</td></tr><tr><td style={{width: '28.2523%'}} valign="top">放熱</td><td style={{width: '71.4849%'}} valign="top">アルミニウム筐体、ヒートシンク、冷却ファン</td></tr><tr><td style={{width: '28.2523%'}} valign="top">IP等級</td><td style={{width: '71.4849%'}} valign="top">IP20</td></tr><tr><td style={{width: '28.2523%'}} valign="top">認証</td><td style={{width: '71.4849%'}} valign="top">FCC / CE / RCM / ROHS / UKCA...</td></tr></tbody></table>
