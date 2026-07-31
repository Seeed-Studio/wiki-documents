---
description: Meshtastic 向け SenseCAP Card Tracker T1000-E の紹介
title: T1000-E Tracker の紹介
keywords:
  - Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /t1000_e_intro
sidebar_position: 1
last_update:
  date: 7/1/2024
  author: Jessie
createdAt: '2024-09-05'
updatedAt: '2026-06-03'
url: https://wiki.seeedstudio.com/ja/t1000_e_intro/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/intro-e.png" alt="pir" width={800} height="auto" /></p>

これは、[Meshtastic®](https://meshtastic.org/) 向けに設計された高性能トラッカーで、クレジットカードほどの小ささであり、ポケットに簡単に収まるほか、資産に取り付けて使用することもできます。Semtech の LR1110、Nordic の nRF52840、Mediatek の AG3335 GPS モジュールを内蔵しており、[Meshtastic®](https://meshtastic.org/) ユーザーに高精度かつ低消費電力の測位および通信ソリューションを提供します。

:::note
カスタマイズ可能なオプション：ロゴブランディング、パッケージング、ファームウェア書き込み。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>今すぐカスタマイズ ➜</font></span></strong></a>
</div>

<br></br>

:::tip バージョン比較
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/versions-duibi.png" alt="pir" width={600} height="auto" /></p>
:::

### 特長

- **マルチプロトコル対応**：nRF52840 と LR1110 を搭載し、Bluetooth 5.0、Thread、Zigbee、LoRa をサポートすることで、幅広いデバイスやネットワークとの互換性を実現します。
- **強力な測位機能**：Mediatek の AG3335 GPS チップを統合し、高精度な測位サービスを提供します。
- **拡張可能なインターフェース**：4 つのポゴピンを備え、DFU（Device Firmware Upgrade）、シリアルログ、API インターフェース用の USB インターフェースをサポートし、デバイス管理とデバッグを容易にします。
- **オープンソース対応**：Meshtastic オープンソースメッシュネットワーキングプロトコルと互換性があり、長距離かつ低消費電力の通信ニーズに適しています。

### 仕様

**一般**

|**ネットワークプロトコル**|LoRa, Bluetooth v5.1|
| :- | :- |
|**温度**|<p>範囲：-20 ～ 60℃;</p><p>精度：± 1℃（最小 ±0.5℃、最大 ±1℃）</p><p>分解能：0.1℃</p>|
|**光**|0 ～ 100%（0% は暗く、100% は最も明るい状態）|
|**LED とブザー**|状態表示用 1\*LED および 1\* ブザー|
|**ボタン**|操作用 1\* ボタン|
|**アンテナ**|内蔵（GNSS/LoRa/Wi-Fi/BLE）|
|**通信距離**|2 ～ 5km（アンテナ、設置方法、環境に依存）|
|**IP 等級**|IP65|
|**寸法**|85 \* 55 \* 6.5 mm|
|**デバイス重量**|32g|
|**動作温度**|-20℃ ～ +60℃|
|**動作湿度**|5% - 95%（結露なきこと）|
|**認証**|CE /FCC|

**バッテリー**

|**バッテリー容量**|充電式リチウムバッテリー、700mAh|
| :- | :- |
|**バッテリー寿命モニタリング**|バッテリーレベルの定期アップリンク|
|<p>**充電ケーブル**</p><p>**（アダプターは含まれません）**</p>|USB マグネット充電ケーブル、1 メートル|
|**電源入力電圧**|4.7 ～ 5.5V DC|
|**充電温度範囲**|0 ～ +45℃|

### ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/4-pogo.png" alt="pir" width={800} height="auto" /></p>

### ピン一覧

||||
|- |- |- |
|センサーへの電源|P0.4|GPIO|
|温度|P0.31|NTC（アナログ）|
|光|P0.29|LUX（アナログ）|
|3 軸加速度センサー<br/>(Meshtastic ファームウェアでは現在未使用)|SDA: P0.26<br/>SCL: P0.27|IIC 経由|
|加速度センサーへの電源|P1.7|GPIO|
|LED|P0.24  |GPIO|
|ブザー|P0.25|GPIO|
|ブザー有効化|P1.05|GPIO|
|ボタン|P0.6|GPIO|
|センサーへの電源|P1.6|GPIO|
|LR1110|P1.08: SPI MISO<br/>P1.09: SPI MOSI<br/>P0.11: SPI Clock<br/>P0.12: SPI NSS<br/>P1.10: LoRa Reset<br/>P1.01: LoRa DIO1<br/>P0.07: LoRa DIO2<br/>LR11X0_DIO3_TCXO_VOLT<br/>AGE 1.6V|SPI|
|GPS|RX: P0.14<br/>TX: P0.13|Serial1 <br/>BAUDRATE:115200|

### ボタン

|ボタン操作|説明|ブザー|
|- |- |- |
|1 回押す|電源オン|上昇メロディー|
|2 回押す|ノード／位置情報を更新|-|
|3 回押す|GPS のオン／オフを切り替え|-|
|5 秒間長押し|電源オフ|下降メロディー|

### LED

|デバイス動作|説明|
|- |- |
|電源オン|点灯後、すばやく点滅|
|DFU モード|点灯しっぱなし|
|動作中|ランダムに点滅|
|充電中|0.5 Hz で点滅し、1 秒ごとにオン／オフが切り替わる|

## 技術サポート & 製品ディスカッション

<p style={{textAlign: 'center'}}><a href="https://www.facebook.com/groups/1755190828846458" target="_blank"><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Banner_QRCode_FB.jpg" border="0" /></a></p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>