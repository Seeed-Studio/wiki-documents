---
description: Meshtastic用SenseCAP Card Tracker T1000-E 紹介
title: T1000-E Tracker 紹介
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/t1000_e_intro
sidebar_position: 1
last_update:
  date: 7/1/2024
  author: Jessie
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/intro-e.png" alt="pir" width={800} height="auto" /></p>

これは[Meshtastic®](https://meshtastic.org/)向けに設計された高性能トラッカーで、クレジットカードほどの小さなサイズで、ポケットに簡単に収まったり、資産に取り付けたりできます。Semtech社のLR1110、Nordic社のnRF52840、Mediatek社のAG3335 GPSモジュールを内蔵し、[Meshtastic®](https://meshtastic.org/)ユーザーに高精度、低消費電力の測位・通信ソリューションを提供します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

<br></br>

:::tip バージョン比較
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/versions-duibi.png" alt="pir" width={600} height="auto" /></p>
:::

### 特徴

- **マルチプロトコル対応**: nRF52840とLR1110を搭載し、Bluetooth 5.0、Thread、Zigbee、LoRaをサポートし、幅広いデバイスとネットワークとの互換性を確保します。
- **強力な測位機能**: Mediatek社のAG3335 GPSチップを統合し、高精度の測位サービスを提供します。
- **拡張可能なインターフェース**: 4つのポゴピンで設計され、DFU（Device Firmware Upgrade）、シリアルログ、APIインターフェース用のUSBインターフェースをサポートし、デバイス管理とデバッグを簡素化します。
- **オープンソース対応**: Meshtasticオープンソースメッシュネットワーキングプロトコルと互換性があり、長距離・低消費電力通信ニーズに適しています。

### 仕様

**一般**

|**ネットワークプロトコル**|LoRa, Bluetooth v5.1|
| :- | :- |
|**温度**|<p>範囲: -20 to 60℃;</p><p>精度: ± 1℃ (最小 ±0.5℃, 最大 ±1℃)</p><p>分解能: 0.1℃</p>|
|**光**|0 to 100% (0%は暗闇、100%は最も明るい)|
|**LEDとブザー**|ステータス表示用1個のLEDと1個のブザー|
|**ボタン**|操作用1個のボタン|
|**アンテナ**|内蔵 (GNSS/LoRa/Wi-Fi/BLE)|
|**通信距離**|2 to 5km (アンテナ、設置、環境に依存)|
|**IP等級**|IP65|
|**寸法**|85 \* 55 \* 6.5 mm|
|**デバイス重量**|32g|
|**動作温度**|-20℃ to +60℃|
|**動作湿度**|5% - 95% (結露なし)|
|**認証**|CE /FCC|

**バッテリー**

|**バッテリー容量**|充電式リチウムバッテリー、700mAh|
| :- | :- |
|**バッテリー残量監視**|定期的なアップリンクバッテリーレベル|
|<p>**充電ケーブル**</p><p>**(アダプター別売)**</p>|USB磁気充電ケーブル、1メートル|
|**電源入力電圧**|4.7 to 5.5V DC|
|**充電温度制限**|0 to +45℃|

### ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/4-pogo.png" alt="pir" width={800} height="auto" /></p>

### ピンリスト

||||
|- |- |- |
|センサー電源|P0.4|GPIO|
|温度|P0.31|NTC (アナログ)|
|光|P0.29|LUX(アナログ)|
|3軸加速度計<br/>(現在Meshtasticファームウェアでは未使用)|SDA: P0.26<br/>SCL: P0.27|IIC経由|
|加速度計電源|P1.7|GPIO|
|LED|P0.24  |GPIO|
|ブザー|P0.25|GPIO|
|ブザー有効化|P1.05|GPIO|
|ボタン|P0.6|GPIO|
|センサー電源|P1.6|GPIO|
|LR1110|P1.08: SPI MISO<br/>P1.09: SPI MOSI<br/>P0.11: SPI Clock<br/>P0.12: SPI NSS<br/>P1.10: LoRa Reset<br/>P1.01: LoRa DIO1<br/>P0.07: LoRa DIO2<br/>LR11X0_DIO3_TCXO_VOLT<br/>AGE 1.6V|SPI|
|GPS|RX: P0.14<br/>TX: P0.13|Serial1 <br/>BAUDRATE:115200|

### ボタン

|ボタン操作|説明|ブザー|
|- |- |- |
|1回押し|電源オン|上昇メロディー|
|2回押し|ノード/位置情報更新|-|
|3回押し|GPSのオン/オフ切り替え|-|
|5秒間長押し|電源オフ|下降メロディー|

### LED

|デバイス動作|説明|
|- |- |
|電源オン|点灯後、素早く点滅|
|DFUモード|常時点灯|
|動作中|ランダム点滅|
