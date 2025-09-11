---
description: SenseCAP M1 概要
title: SenseCAP M1 概要
keywords:
- SenseCAP ネットワーク
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Overview
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

**SenseCAP M1** は高性能で、すぐに使用可能な **LoRaWAN 屋内ゲートウェイ** であり、**Helium LongFi™ ネットワーク** に接続されています。  
Raspberry Pi 4 をベースにしており、WM1302/WM1303 (Semtech SX1302/SX1303) LoRa コンセントレーターを組み込んでいます。内蔵の BLE を備えており、簡単な手順でデバイスをセットアップでき、Wi-Fi または Ethernet を介してインターネットに接続することが可能です。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapm1.webp" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-M1-LoRaWAN-Indoor-Gateway-EU868-p-5022.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 </font></span></strong>
    </a>
</div>

**特徴**
============

![SenseCAP M1 特徴](https://www.sensecapmx.com/wp-content/uploads/2022/06/features.jpg)

*   **簡単な Helium ネットワークへのセットアップ:** 簡単な手順で準備完了。
*   **成熟したハードウェアソリューションによる駆動:** Raspberry Pi 4 (2G/4G/8G RAM, 64G ストレージ) と WM1302/WM1303 (Semtech SX1302/SX1303) ベースバンド LoRa チップ。
*   **安全で信頼性の高い:** 内蔵 ECC608 暗号チップ、高セキュリティ認証、信頼性の高い接続。
*   **自動オンラインアップグレード:** 手動操作なしで自動 OTA アップグレード。
*   **リモート診断:** 内蔵リモート診断機構、効率的なオンラインサポート。
*   **64GB の大容量ストレージ:** 64GB MicroSD カードの大容量ストレージにより、ゲートウェイの寿命を延ばし、潜在的なアップグレードのメモリ要件を満たします。
*   **効率的な冷却ソリューション:** アルミニウム筐体、ヒートシンク、冷却ファンを内蔵し、長期的で安定した動作を保証。
*   **多様なアクセサリー:** ガラス繊維アンテナ、スライドロッド設置用スライダーパッド、今後登場予定の屋外筐体など。
*   **FCC および CE 認証:** 個人および商業利用が可能。

* * *

**パッケージ内容**
====================

*   SenseCAP M1 LoRaWAN 屋内ゲートウェイ (EU868/US915) \*1
*   電源アダプター (EU/US) \*1
*   アンテナ (EU868/US915) \*1
*   64GB MicroSD カード \*1
*   クイックスタートガイド \*1

![SenseCAP M1 パッケージ内容](https://www.sensecapmx.com/wp-content/uploads/2022/06/package-contents.png)

* * *

**概要**
====================

![SenseCAP M1 概要](https://www.sensecapmx.com/wp-content/uploads/2022/06/overview-1.webp)

![SenseCAP M1 分解図](https://www.sensecapmx.com/wp-content/uploads/2022/06/overview-2.webp)

![SenseCAP M1 分解図 2](https://www.sensecapmx.com/wp-content/uploads/2022/06/overview-3.webp)

* * *

**インターフェース**
=============

![SenseCAP M1 インターフェース](https://www.sensecapmx.com/wp-content/uploads/2022/06/interface-1.webp)

* * *

**寸法**
==============

![SenseCAP M1 寸法](https://www.sensecapmx.com/wp-content/uploads/2022/06/dimensions-1.webp)

*   **デバイスサイズ (/pcs):** 154\*100\*44 mm
*   **デバイス重量 (/pcs):** 370g
*   **パッケージサイズ (/pcs):** 274\*175\*60 mm
*   **パッケージ重量 (/pcs):** 675g

* * *

**ブロック図**
=================

![SenseCAP M1 ブロック図](https://www.sensecapmx.com/wp-content/uploads/2022/06/block-diagram.webp)

* * *

**システム構造**
====================

![SenseCAP M1 システム構造](https://www.sensecapmx.com/wp-content/uploads/2022/06/system-structure.webp)

* * *

**LED ステータス**
==============

![SenseCAP M1 LED ステータス](https://www.sensecapmx.com/wp-content/uploads/2022/06/LED-status.webp)

* * *

**ユニット情報**
====================

![SenseCAP M1 ユニット情報](https://www.sensecapmx.com/wp-content/uploads/2022/06/unit-info.webp)

底面にある2つのラベルには、以下のようなユニットの重要な情報が記載されています：

*   モデル
*   S/N
*   WiFi MAC
*   ETH MAC
*   CPU ID

この情報は **SenseCAP Dashboard** に登録する際に必要となります。

* * *

**データシート**
=============

<table style={{width: '45.6785%'}} border={0} cellSpacing={0} cellPadding={0}><tbody><tr><td style={{width: '28.2523%'}} valign="top">プロセッサ</td><td style={{width: '71.4849%'}} valign="top">Raspberry Pi 4 (Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz)</td></tr><tr><td style={{width: '28.2523%'}} valign="top">RAM</td><td style={{width: '71.4849%'}} valign="top">2GB / 4GB / 8GB</td></tr><tr><td style={{width: '28.2523%'}} valign="top">ストレージ</td><td style={{width: '71.4849%'}} valign="top">64GB MicroSD カード</td></tr><tr><td style={{width: '28.2523%'}} valign="top">周波数</td><td style={{width: '71.4849%'}} valign="top">EU868 バージョン: 863MHz ~ 870MHz<br />AS923 バージョン: 902MHz ~ 928MHz<br />US915 バージョン: 902MHz ~ 928MHz</td></tr><tr><td style={{width: '28.2523%'}} rowSpan={2} valign="top">感度</td><td style={{width: '71.4849%'}} valign="top">-125dBm @125KHz/SF7</td></tr><tr><td style={{width: '71.4849%'}} valign="top">-139dBm @125KHz/SF12</td></tr><tr><td style={{width: '28.2523%'}} valign="top">TX パワー</td><td style={{width: '71.4849%'}} valign="top">最大 26 dBm</td></tr><tr><td style={{width: '28.2523%'}} valign="top">アンテナゲイン</td><td style={{width: '71.4849%'}} valign="top"><p>US915: 2.6 dBi</p><p>EU868: 2.8 dBi</p></td></tr><tr><td style={{width: '28.2523%'}} valign="top">アンテナインピーダンス</td><td style={{width: '71.4849%'}} valign="top">50 オーム</td></tr><tr><td style={{width: '28.2523%'}} valign="top">アンテナ放射パターン</td><td style={{width: '71.4849%'}} valign="top">全方向性</td></tr><tr><td style={{width: '28.2523%'}} valign="top">Wi-Fi</td><td style={{width: '71.4849%'}} valign="top">2.4 GHz および 5.0 GHz IEEE 802.11ac ワイヤレス</td></tr><tr><td style={{width: '28.2523%'}} valign="top">Bluetooth</td><td style={{width: '71.4849%'}} valign="top">Bluetooth 5.0, BLE</td></tr><tr><td style={{width: '28.2523%'}} valign="top">LoRaWAN</td><td style={{width: '71.4849%'}} valign="top">クラス A, C をサポート</td></tr><tr><td style={{width: '28.2523%'}} valign="top">入力電圧</td><td style={{width: '71.4849%'}} valign="top">DC 5V - 3A</td></tr><tr><td style={{width: '28.2523%'}} valign="top">インターフェース</td><td style={{width: '71.4849%'}} valign="top"><p>USB Type-C (電源供給) * 1</p><p>Ethernet RJ45 * 1</p><p>RP-SMA メスアンテナコネクタ * 1</p></td></tr><tr><td style={{width: '28.2523%'}} valign="top">動作温度</td><td style={{width: '71.4849%'}} valign="top">0°C ～ 50°C</td></tr><tr><td style={{width: '28.2523%'}} valign="top">相対湿度</td><td style={{width: '71.4849%'}} valign="top">0% ～ 90% (結露しないこと)</td></tr><tr><td style={{width: '28.2523%'}} valign="top">熱放散</td><td style={{width: '71.4849%'}} valign="top">アルミニウム筐体、ヒートシンク、冷却ファン</td></tr><tr><td style={{width: '28.2523%'}} valign="top">IP 等級</td><td style={{width: '71.4849%'}} valign="top">IP20</td></tr><tr><td style={{width: '28.2523%'}} valign="top">認証</td><td style={{width: '71.4849%'}} valign="top">FCC / CE / RCM / ROHS / UKCA...</td></tr></tbody></table>