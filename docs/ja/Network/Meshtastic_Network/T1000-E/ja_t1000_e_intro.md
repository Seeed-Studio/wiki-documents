---
description: SenseCAP Card Tracker T1000-E for Meshtastic の紹介
title: T1000-E トラッカーの紹介
keywords:
- トラッカー
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/t1000_e_intro
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/intro-e.png" alt="pir" width={800} height="auto" /></p>



これはMeshtastic向けに設計された高性能トラッカーで、クレジットカードほどの小ささで、ポケットに簡単に収まるか、資産に取り付けることができます。SemtechのLR1110、NordicのnRF52840、MediatekのAG3335 GPSモジュールを搭載しており、Meshtasticユーザーに高精度で低消費電力の位置情報および通信ソリューションを提供します。


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<br></br>

:::tip バージョン比較
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/versions-duibi.png" alt="pir" width={600} height="auto" /></p>
:::



### 特徴

* **マルチプロトコル対応**: nRF52840とLR1110を搭載し、Bluetooth 5.0、Thread、Zigbee、LoRaをサポートし、幅広いデバイスやネットワークとの互換性を確保。
* **強力な位置情報機能**: MediatekのAG3335 GPSチップを統合し、高精度の位置情報サービスを提供。
* **拡張可能なインターフェース**: 4つのポゴピンを備え、DFU（デバイスファームウェアアップグレード）、シリアルログ、APIインターフェースをサポートし、デバイス管理とデバッグを簡素化。
* **オープンソース対応**: Meshtasticオープンソースメッシュネットワーキングプロトコルと互換性があり、長距離および低消費電力通信ニーズに適合。


### 仕様

**一般仕様**

|**ネットワークプロトコル**|LoRa、Bluetooth v5.1|
| :- | :- |
|**温度**|<p>範囲: -20～60℃;</p><p>精度: ± 1℃ (最小 ±0.5℃、最大 ±1℃)</p><p>分解能: 0.1℃</p>|
|**光**|0～100% (0%は暗闇、100%は最も明るい)|
|**LEDとブザー**|1\*LEDと1\*ブザーでステータスを表示|
|**ボタン**|1\*ボタンで操作|
|**アンテナ**|内部 (GNSS/LoRa/Wi-Fi/BLE)|
|**通信距離**|2～5km (アンテナ、設置、環境に依存)|
|**IP等級**|IP65|
|**寸法**|85 \* 55 \* 6.5 mm|
|**デバイス重量**|32g|
|**動作温度**|-20℃～+60℃|
|**動作湿度**|5% - 95% (結露なし)|
|**認証**|CE /FCC|

**バッテリー**

|**バッテリー容量**|充電式リチウムバッテリー、700mAh|
| :- | :- |
|**バッテリー寿命監視**|定期的なアップリンクバッテリーレベル|
|<p>**充電ケーブル**</p><p>**(アダプターは含まれません)**</p>|USB磁気充電ケーブル、1メートル|
|**電源入力電圧**|4\.7～5.5V DC|
|**充電温度制限**|0～+45℃|

### ハードウェア概要



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/4-pogo.png" alt="pir" width={800} height="auto" /></p>


### ピンリスト


||||
|- |- |- |
|センサーへの電源供給|P0.4|GPIO|
|温度|P0.31|NTC (アナログ)|
|光|P0.29|LUX(アナログ)|
|3軸加速度計<br/>(Meshtasticファームウェアでは現在使用されていません)|SDA: P0.26<br/>SCL: P0.27|IIC経由|
|加速度計への電源供給|P1.7|GPIO|
|LED|P0.24  |GPIO|
|ブザー|P0.25|GPIO|
|ブザーの有効化|P1.05|GPIO|
|ボタン|P0.6|GPIO|
|センサーへの電源供給|P1.6|GPIO|
|LR1110|P1.08: SPI MISO<br/>P1.09: SPI MOSI<br/>P0.11: SPI Clock<br/>P0.12: SPI NSS<br/>P1.10: LoRa Reset<br/>P1.01: LoRa DIO1<br/>P0.07: LoRa DIO2<br/>LR11X0\_DIO3\_TCXO\_VOLT<br/>AGE 1.6V|SPI|
|GPS|RX: P0.14<br/>TX: P0.13|Serial1 <br/>BAUDRATE:115200|





### ボタン

|ボタン操作|説明|ブザー|
|- |- |- |
|1回押す|電源オン|上昇メロディ|
|2回押す|ノード/位置情報を更新|-|
|3回押す|GPSのオン/オフ切り替え|-|
|5秒間押し続ける|電源オフ|下降メロディ|



### LED

|デバイス動作|説明|
|- |- |
|電源オン|点灯後、素早く点滅|
|DFUモード|点灯|
|動作中|ランダム点滅|