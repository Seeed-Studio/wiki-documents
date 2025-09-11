---
description: Wio Tracker Dev Kit を使用して Meshtastic® を始めましょう
title:  Meshtastic® キットの使い方
keywords:
- Meshtastic
- トラッカー
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/meshtastic_kit_wio_tracker_1110
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/mesh-kit.gif" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Kit-for-Meshtastic.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

Wio Tracker 1110 Dev Board（Nordic nRF52840 をベースとした BLE、Semtech LR1110 をベースとした LoRa）、[Grove Air530 GPS モジュール](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html)、[Grove 0.96" OLED ディスプレイ](https://www.seeedstudio.com/Grove-OLED-Display-0-96.html) を搭載し、Meshtastic ファームウェアとネイティブに互換性があります。この開発キットは、低消費電力の Meshtastic トラッカー デバイスを構築するためのプラグアンドプレイのソリューションです。

### 特徴

* **簡単なセットアップ**: ファームウェアをフラッシュするだけで、Meshtastic ネットワークの強力な機能を体験できます。
* **リアルタイム位置情報**: 高精度 GPS 位置情報をサポートする GPS (Air530) モジュールを搭載。
* **情報表示**: Grove - OLED Display 0.96" スクリーンを搭載し、リアルタイムデータを明確に可視化。
* **拡張性の高いインターフェース**: Grove エコシステムと互換性があり、センサーやモジュールの簡単な拡張が可能。
* **オープンソースのハードウェアとソフトウェア**: 二次開発やカスタマイズをサポートし、豊富な開発リソースと Meshtastic コミュニティのサポートを提供。

### 仕様

<table>
<tr><th colspan="3"><b>一般仕様</b></th></tr>
<tr><td colspan="1" rowspan="2"><b>電圧 - 供給</b></td><td colspan="2">5V (USB 2.0 Type-C)</td></tr>
<tr><td colspan="1">バッテリーコネクタ</td><td colspan="1">3.7V</td></tr>
<tr><td colspan="1" rowspan="3"><b>インターフェース</b></td><td colspan="1">RFIO</td><td colspan="1"><p>GNSS アンテナコネクタ * 1</p><p>LoRa アンテナコネクタ * 1</p></td></tr>
<tr><td colspan="1">USB Type-C</td><td colspan="1">* 1</td></tr>
<tr><td colspan="1">Grove インターフェース</td><td colspan="1"><p>ADC * 1 I2C * 1 UART * 1</p><p>デジタル * 3</p></td></tr>
<tr><td colspan="1" rowspan="2"><b>ボタン</b></td><td colspan="1">USER</td><td colspan="1">設定可能なボタン</td></tr>
<tr><td colspan="1">RESET</td><td colspan="1">リセット</td></tr>
<tr><td colspan="1"><b>外部フラッシュメモリ</b></td><td colspan="2">4M</td></tr>
<tr><td colspan="3"><b>LoRa® と位置情報 (Semtech LR1110)</b></td></tr>
<tr><td colspan="1"><b>LoRaWAN® プロトコル</b></td><td colspan="2">V1.0.4</td></tr>
<tr><td colspan="1"><b>周波数プラン</b></td><td colspan="2">863&#126;928MHz</td></tr>
<tr><td colspan="1"><b>感度</b></td><td colspan="2"><p>-125dBm @125K/SF7</p><p>-141dBm @125K/SF12</p></td></tr>
<tr><td colspan="1"><b>出力電力</b></td><td colspan="2">20dBm max @LoRa®</td></tr>
<tr><td colspan="1"><b>位置情報技術</b></td><td colspan="2">GNSS(GPS/BeiDou)、WiFi スニファー</td></tr>
<tr><td colspan="1"><b>通信範囲</b></td><td colspan="2">2&#126;10km (アンテナと環境に依存)</td></tr>
<tr><td colspan="3"><b>Bluetooth (Nordic nRF52840)</b></td></tr>
<tr><td colspan="1"><b>Bluetooth</b></td><td colspan="2">Bluetooth 5.3</td></tr>
<tr><td colspan="1"><b>フラッシュ</b></td><td colspan="2">1MB</td></tr>
<tr><td colspan="1"><b>RAM</b></td><td colspan="2">256KB</td></tr>
<tr><td colspan="1"><b>プロトコル</b></td><td colspan="2">Bluetooth LE、Bluetooth メッシュ、Thread、Zigbee、802.15.4、ANT、および 2.4 GHz 独自スタック</td></tr>
<tr><td colspan="1"><b>出力電力</b></td><td colspan="2">6dBm max @Bluetooth</td></tr>
<tr><td colspan="3"><b>オンボードセンサー -- 温湿度センサー (SHT41)</b></td></tr>
<tr><td colspan="1"></td><td colspan="1"><b>範囲</b></td><td colspan="1"><b>精度</b></td></tr>
<tr><td colspan="1"><b>温度</b></td><td colspan="1">-40&#126;85°C</td><td colspan="1">± 0.2°C</td></tr>
<tr><td colspan="1"><b>湿度</b></td><td colspan="1">0&#126;100%RH</td><td colspan="1">±1.8%RH</td></tr>
<tr><td colspan="3"><b>オンボードセンサー -- 3軸加速度計 (未使用)</b></td></tr>
<tr><td colspan="1"><b>範囲</b></td><td colspan="2">±2g, 4g, 8g, 16g</td></tr>
<tr><td colspan="1"><b>帯域幅</b></td><td colspan="2">0.5Hz &#126; 625Hz</td></tr>
<tr><td colspan="1"><b>感度 (LSB/g)</b></td><td colspan="2">1000 (±2g) &#126; 83 (±16g)</td></tr>
</table>

**Grove - OLED ディスプレイ 0.96 インチ**

|**電源電圧 (VCC)**|3.3 / 5 V|
| :- | :- |
|**ドライバ IC**|SSD1308Z|
|**表示色**|白|
|**ドットマトリックス**|128×64|
|**パネルサイズ**|26.7(W)×19.26(H) mm|
|**アクティブエリア**|21.74(W)×11.175(H) mm|
|**ドットピッチ**|0.17(W)×0.175(H) mm|
|**ドットサイズ**|0.15(W)×0.15(H) mm|
|**広い動作温度範囲**|-20&#126;70 ℃|

## はじめに

### ハードウェア接続

`Grove-GPS モジュール`を`UART`ポートに接続し、`Grove-OLED ディスプレイ`を`I2C`ポートに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/mesh-grove.png" alt="pir" width={800} height="auto" /></p>

ボードの電源をオンにします。

### 設定

#### デバイス接続

接続タイプに応じて、最適なクライアントを選択してください。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS アプリ">

* `Meshtastic`アプリをダウンロードします。<br/>

* Bluetooth パネルでターゲットデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

* ディスプレイに名前と PIN コードが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pin-code.png" alt="pir" width={400} height="auto" /></p>

* コードを入力し、`ペアリング`をクリックしてデバイスを接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">

* `Meshtastic`アプリをダウンロードします。<br/>

* `+`をクリックしてターゲットデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

* ディスプレイに名前と PIN コードが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pin-code.png" alt="pir" width={400} height="auto" /></p>

* コードを入力し、`OK`をクリックしてデバイスを接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>

<TabItem value="web" label="Web クライアント">

[Web クライアント](https://client.meshtastic.org/)を開き、`新しい接続`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-new.png" alt="pir" width={600} height="auto" /></p>

* **Bluetooth 経由で接続**

PC の Bluetooth を有効にし、`Bluetooth`タブを選択して新しいデバイスを接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/ble-new.png" alt="pir" width={600} height="auto" /></p>

デバイスを選択し、ディスプレイに表示される PIN コードを入力してデバイスを接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-ble-pair.png" alt="pir" width={600} height="auto" /></p>

* **シリアル経由で接続**

ボードを PC に接続し、`Serial`タブを選択して新しいデバイスを接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-serial-new.png" alt="pir" width={600} height="auto" /></p>

ポートを確認するには以下を使用します：
```
ls /dev/cu.*
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-serial-connect.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="cli" label="CLI">

このライブラリは、Meshtasticノードのユーザー設定を管理するためのコマンドラインインターフェイス（CLI）を提供し、メッシュラジオを介してメッセージを送受信するための簡単な API を提供します。

</TabItem>
</Tabs>

#### パラメーター設定

メッシュ通信を開始するには、地域を設定する必要があります。この設定はデバイスが使用する周波数範囲を制御し、地域に応じて設定する必要があります。

<Tabs>
<TabItem value="ios" label="IOS アプリ">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
<TabItem value="web" label="Web クライアント">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-lora-config.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="cli" label="CLI">

以下のコマンドを実行し、`REGION-CODE`を地域に応じたコードに置き換えてください。

```
meshtastic --set lora.region <REGION-CODE>
```

例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/cli-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

**地域コード一覧**

より包括的なリストについては、[LoRa 地域別国リスト](https://meshtastic.org/docs/configuration/region-by-country/)を参照してください。

|**地域コード**|**説明**|**周波数範囲 (MHz)**|**デューティサイクル (%)**|**出力制限 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902\.0 - 928.0|100|30|
|EU\_433|欧州連合 433MHz|433\.0 - 434.0|10|12|
|EU\_868|欧州連合 868MHz|869\.4 - 869.65|10|27|
|CN|中国|470\.0 - 510.0|100|19|
|JP|日本|920\.8 - 927.8|100|16|
|ANZ|オーストラリア & ニュージーランド|915\.0 - 928.0|100|30|
|KR|韓国|920\.0 - 923.0|100||
|TW|台湾|920\.0 - 925.0|100|27|
|RU|ロシア|868\.7 - 869.2|100|20|
|IN|インド|865\.0 - 867.0|100|30|
|NZ\_865|ニュージーランド 865MHz|864\.0 - 868.0|100|36|
|TH|タイ|920\.0 - 925.0|100|16|
|UA\_433|ウクライナ 433MHz|433\.0 - 434.7|10|10|
|UA\_868|ウクライナ 868MHz|868\.0 - 868.6|1|14|
|MY\_433|マレーシア 433MHz|433\.0 - 435.0|100|20|
|MY\_919|マレーシア 919MHz|919\.0 - 924.0|100|27|
|SG\_923|シンガポール 923MHz|917\.0 - 925.0|100|20|
|LORA\_24|2\.4 GHz バンド全世界|2400\.0 - 2483.5|100|10|

:::info
**EU_433**および**EU_868**は、1時間あたりのデューティサイクル制限10%を遵守する必要があります。この制限は、1時間のローリングベースで毎分計算されます。制限に達すると、許可されるまでデバイスは送信を停止します。
:::

これでデバイスのLoRaリージョンを設定したので、必要に応じて[追加の設定](https://meshtastic.org/docs/configuration/)を行い、ニーズに合わせて調整することができます。

## リソース

[Wio Tracker 1110 Dev Board v1.0_SCH](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%201110%20v1.0_SCH_PDF_20230822.pdf)

[Meshtastic ドキュメント](https://meshtastic.org/docs/introduction/)

[Github-Meshtastic ファームウェア](https://github.com/meshtastic/firmware/blob/master/boards/wio-tracker-wm1110.json)

[筐体ファイル(3Dプリント)](https://files.seeedstudio.com/products/E24070201/wio%20tracker%20723.stp)

[筐体ファイル(アクリル)](https://files.seeedstudio.com/products/114993370/%E4%BA%9A%E5%85%8B%E5%8A%9B%E5%A4%96%E5%A3%B3%E5%9B%BE%E7%BA%B8.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>