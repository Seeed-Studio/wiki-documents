---
description: SenseCAP Solar Node for Meshtastic & LoRa
title:  SenseCAP Solar Node
keywords:
- Meshtastic
- Solar
image: https://files.seeedstudio.com/wiki/wiki-platform/solar-node.webp
slug: /ja/meshtastic_solar_node
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png" alt="pir" width={800} height="auto" /></p>

これは、Meshtastic をベースにした経済的なソーラーパワー通信ノードまたはリピーターであり、XIAO nRF52840 Plus メインコントローラーと Wio-SX1262 LoRa モジュールを統合しています。ネットワークカバレッジがない地域向けに特別に設計されており、長距離通信、正確な位置決定、低消費電力動作をサポートします。屋外エリアでのネットワークカバレッジ拡張に適しています。

## バージョン比較

Solar Node は、[SenseCAP Solar Node P1](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-for-Meshtastic-LoRa-p-6425.html) と [SenseCAP Solar Node P1-Pro](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshtastic-LoRa-p-6412.html) の2つのバリエーションで提供されています。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114993633-1_1.jpeg" alt="pir" width={800} height="auto" /></p>

## 概要

### 特徴

* 5W ソーラーパネルを統合し、外部バッテリー（ユーザーが別途提供する必要があります）をサポート。
* デバイスは工場出荷時に Meshtastic ファームウェアがプリインストールされています。Meshtastic エコシステムにシームレスに統合可能。
* Grove エコシステムと互換性があり、温湿度センサーや光センサーなどのセンサーをプラグアンドプレイでサポート。
* 長期的な屋外使用に適しています。
* 開けた場所で 8～9KM の通信をサポート。屋外ノードまたはリピーターとして使用でき、メッシュネットワークを簡単に拡張し、ネットワークカバレッジを向上させます。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114993633-3.png" alt="pir" width={800} height="auto" /></p>

### 仕様

<table>
  <tr>
    <th><b>メインコントローラー</b></th>
    <th>
      <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html" target="_blank">XIAO nRF52840 Plus</a><br />
      (Nordic nRF52840、ARM® Cortex®-M4 32ビットプロセッサ、FPU付き、64 MHz、256KB RAM、1MB フラッシュ、2MB オンボードフラッシュ)
    </th>
  </tr>
  <tr>
    <td><b>LoRa モジュール</b></td>
    <td>
      <a href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html" target="_blank">Wio-SX1262 モジュール</a><br />
      (Semtech SX1262、TXOP=22dBm@862-930MHz)
    </td>
  </tr>
  <tr>
    <td><b>GPS モジュール（P1-Pro バージョン用）</b></td>
    <td>
      <a href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">XIAO L76K</a><br />
      (GPS/GLONASS/Galileo をサポート)
    </td>
  </tr>
  <tr>
    <td rowSpan="3"><b>アンテナ</b></td>
    <td>
      <p>LoRa:</p>
      <p>タイプ: ロッド型ゴムアンテナ</p>
      <p>周波数範囲: 868-915MHz</p>
      <p>ゲイン: 2dBi</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>GNSS:</p>
      <p>GPS L1 C/A: 1575.42MHz</p>
      <p>GLONASS L1: 1602MHz</p>
      <p>BeiDou B1: 1561.098MHz</p>
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
    <td>Grove *1: IIC/GPIO/UART</td>
  </tr>
  <tr>
    <td>USB-C デバッグ</td>
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
    <td>メッシュハートビートライト *1</td>
  </tr>
  <tr>
    <td>ユーザー定義 *1</td>
  </tr>
  <tr>
    <td><b>電源供給</b></td>
    <td>Type-C: 5V 1A</td>
  </tr>
  <tr>
    <td></td>
    <td>ソーラー電源供給: 5V 1A</td>
  </tr>
  <tr>
    <td><b>防水等級</b></td>
    <td>IPX5</td>
  </tr>
  <tr>
    <td><b>バッテリー（P1-Pro バージョン用）</b></td>
    <td>
      <p>- 4 x 18650 リチウムバッテリー（各3350mAh）</p>
      <p>- Type-C およびソーラー充電をサポート。</p>
      <p>- 放電環境: -40～60°C</p>
      <p>- 充電環境: 0-50°C</p>
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
|3回押す|GPS のオン/オフを切り替え|
|5秒間押す|電源オフ|

### ハードウェア概要

**インタラクティブ項目**  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/interactive.png" alt="pir" width={800} height="auto" /></p>

**付属品**  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/accessory.png" alt="pir" width={800} height="auto" /></p>

**図解**  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>