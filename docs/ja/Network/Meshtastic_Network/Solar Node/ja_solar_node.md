---
description: SenseCAP Solar Node for Meshtastic & LoRa
title:  SenseCAP Solar Node
keywords:
- Meshtastic
- Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /ja/meshtastic_solar_node
sidebar_position: 1
last_update:
  date: 4/1/2025
  author: Jessie
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png" alt="pir" width={800} height="auto" /></p>


これは、Meshtasticベースの経済的なソーラー駆動通信ノードまたはリピーターで、XIAO nRF52840 Plusメインコントローラー、Wio-SX1262 LoRaモジュールを統合しています。ネットワークカバレッジのないエリア専用に設計されています。長距離通信、精密な位置決定、低消費電力動作をサポートします。屋外エリアでのネットワークカバレッジ拡張に適しています。

## バージョン比較
 
Solar Nodeは2つのバリエーションで利用可能です：[SenseCAP Solar Node P1](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-for-Meshtastic-LoRa-p-6425.html)と[SenseCAP Solar Node P1-Pro](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshtastic-LoRa-p-6412.html)。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114993633-1_1.jpeg" alt="pir" width={800} height="auto" /></p>


## 概要

### 特徴

* 5Wソーラーパネルを統合し、外部バッテリーをサポート（ユーザー自身で提供する必要があります）。
* デバイスには工場でMeshtasticファームウェアがプリインストールされています。Meshtasticエコシステムにシームレスに統合できます。
* Groveエコシステムと互換性があり、温湿度センサー、光センサーなどのセンサーのプラグアンドプレイをサポートします。
* 長期間の屋外使用に適しています。
* 開放エリアで8〜9KMの伝送をサポート。屋外ノードまたはリピーターとして使用でき、Meshネットワークを簡単に拡張し、ネットワークカバレッジを向上させます。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114993633-3.png" alt="pir" width={800} height="auto" /></p>


### 仕様


<table>
  <tr>
    <th><b>メインコントローラー</b></th>
    <th>
      <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html" target="_blank">XIAO nRF52840 Plus</a><br />
      (Nordic nRF52840、ARM® Cortex®-M4 32ビットプロセッサー（FPU付き）、64 MHz、256KB RAM、1MB Flash、2MBオンボードFlash)
    </th>
  </tr>
  <tr>
    <td><b>LoRaモジュール</b></td>
    <td>
      <a href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html" target="_blank">Wio-SX1262モジュール</a><br />
      (Semtech SX1262、TXOP=22dBm@862-930MHz)
    </td>
  </tr>
  <tr>
    <td><b>GPSモジュール（P1-Proバージョン用）</b></td>
    <td>
      <a href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">XIAO L76K</a><br />
      (GPS/GLONASS/Galileoサポート)
    </td>
  </tr>
  <tr>
    <td rowSpan="3"><b>アンテナ</b></td>
    <td>
      <p>LoRa:</p>
      <p>タイプ：ロッド型ラバーアンテナ</p>
      <p>周波数範囲：868-915MHz</p>
      <p>ゲイン：2dBi</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>GNSS:</p>
      <p>GPS L1 C/A：1575.42MHz</p>
      <p>GLONASS L1：1602MHz</p>
      <p>BeiDou B1：1561.098MHz</p>
    </td>
  </tr>
  <tr>
    <td>Bluetooth 5.0</td>
  </tr>
  <tr>
    <td><b>ソーラーパネル</b></td>
    <td>5W</td>
  </tr>
  <tr>
    <td rowSpan="2"><b>インターフェース</b></td>
    <td>Grove *1：IIC/GPIO/UART</td>
  </tr>
  <tr>
    <td>USB-Cデバッグ</td>
  </tr>
  <tr>
    <td rowSpan="3"><b>ボタン</b></td>
    <td>電源オン/オフ</td>
  </tr>
  <tr>
    <td>リセット</td>
  </tr>
  <tr>
    <td>ユーザー定義</td>
  </tr>
  <tr>
    <td rowSpan="4"><b>LED</b></td>
    <td>充電状態インジケーターライト *2</td>
  </tr>
  <tr>
    <td>ソーラーパネル状態インジケーターライト *1</td>
  </tr>
  <tr>
    <td>Meshハートビートライト *1</td>
  </tr>
  <tr>
    <td>ユーザー定義 *1</td>
  </tr>
  <tr>
    <td><b>電源供給</b></td>
    <td>Type-C：5V 1A</td>
  </tr>
  <tr>
    <td></td>
    <td>ソーラー電源供給：5V 1A</td>
  </tr>
  <tr>
    <td><b>防水等級</b></td>
    <td>IPX5</td>
  </tr>
  <tr>
    <td><b>バッテリー（P1-Proバージョン用）</b></td>
    <td>
      <p>- 4 x 18650リチウムバッテリー（各3350mAh）</p>
      <p>- Type-Cおよびソーラー充電をサポート。</p>
      <p>- 放電環境：-40～60°C</p>
      <p>- 充電環境：0-50°C</p>
    </td>
  </tr>
  <tr>
    <td><b>認証</b></td>
    <td>FCC、CE</td>
  </tr>
  <tr>
    <td><b>寸法</b></td>
    <td>191.2 x 201.2 x 42.1 mm</td>
  </tr>
</table>


### ボタン

|ボタン操作|説明|
|--|--|
|3秒間押す|電源オン|
|2回押す|ノード/位置情報を更新|
|3回押す|GPSのオン/オフを切り替え|
|5秒間押す|電源オフ|


### ハードウェア概要

**インタラクティブアイテム**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/interactive.png" alt="pir" width={800} height="auto" /></p>

**アクセサリー**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/accessory.png" alt="pir" width={800} height="auto" /></p>

**図表**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>