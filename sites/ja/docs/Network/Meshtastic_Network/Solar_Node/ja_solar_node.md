---
description: Meshtastic & LoRa 向け SenseCAP ソーラーノード
title: SenseCAP ソーラーノード概要
keywords:
  - Meshtastic
  - Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /meshtastic_solar_node
sidebar_position: 1
last_update:
  date: 3/10/2026
  author: Michelle Huang
createdAt: '2025-04-08'
updatedAt: '2026-05-29'
url: https://wiki.seeedstudio.com/ja/meshtastic_solar_node/
---



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png" alt="pir" width={800} height="auto" /></p>

これは [Meshtastic®](https://meshtastic.org/) をベースにした、経済的なソーラー駆動の通信ノード／リピーターで、XIAO nRF52840 Plus メインコントローラと Wio-SX1262 LoRa モジュールを統合しています。ネットワークカバレッジのないエリア向けに特別に設計されており、長距離通信、高精度測位、低消費電力動作をサポートします。屋外エリアでのネットワークカバレッジ拡張に適しています。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshtastic-LoRa-p-6412.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
    </a>
</div>

## バージョン比較

Solar Node には、[SenseCAP Solar Node P1](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-for-Meshtastic-LoRa-p-6425.html) と [SenseCAP Solar Node P1-Pro](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshtastic-LoRa-p-6412.html) の 2 種類があります。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114993633-1_1.jpeg" alt="pir" width={800} height="auto" /></p>

## 概要

### 特長

- 5W ソーラーパネルを内蔵し、外部バッテリー（ユーザー自身で用意する必要があります）にも対応します。
- 工場出荷時に Meshtastic ファームウェアがプリインストールされており、Meshtastic エコシステムにシームレスに統合できます。
- Grove エコシステムと互換性があり、温湿度センサー、照度センサーなどのセンサーをプラグアンドプレイで接続できます。
- 長期の屋外使用に適しています。
- 開けた場所で 8～9km の通信距離をサポートします。屋外ノードまたはリピーターとして使用でき、Mesh ネットワークを容易に拡張し、ネットワークカバレッジを強化します。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114993633-3.png" alt="pir" width={800} height="auto" /></p>

### 仕様

<table>
  <tr>
    <td><b>メインコントローラ</b></td>
    <th>
      <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html" target="_blank">XIAO nRF52840 Plus</a><br />
      (Nordic nRF52840、FPU 搭載 ARM® Cortex®-M4 32-bit プロセッサ、64 MHz、256KB RAM、1MB Flash、2MB オンボード Flash)
    </th>
  </tr>
  <tr>
    <td><b>充電管理チップ</b></td>
    <td>CN3165 (0.99A)</td>
  </tr>
  <tr>
    <td><b>LoRa モジュール</b></td>
    <td>
      <a href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html" target="_blank">Wio-SX1262 Module</a><br />
      (Semtech SX1262、TXOP=22dBm@862-930MHz)
    </td>
  </tr>
  <tr>
    <td><b>GPS モジュール（P1-Pro バージョン）</b></td>
    <td>
      <a href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">XIAO L76K</a><br />
      (GPS/GLONASS/Galileo をサポート)
    </td>
  </tr>
  <tr>
    <td rowSpan="3"><b>アンテナ</b></td>
    <td>
      <p>LoRa：</p>
      <p>タイプ：ロッド型ラバーアンテナ</p>
      <p>周波数範囲：868-915MHz</p>
      <p>利得：2dBi</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>GNSS：</p>
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
    <td>USB-C デバッグ</td>
  </tr>
  <tr>
    <td rowSpan="3"><b>ボタン</b></td>
    <td>電源オン／オフ</td>
  </tr>
  <tr>
    <td>リセット</td>
  </tr>
  <tr>
    <td>ユーザー定義</td>
  </tr>
  <tr>
    <td rowSpan="4"><b>LED</b></td>
    <td>充電状態インジケーターランプ *2</td>
  </tr>
  <tr>
    <td>ソーラーパネル状態インジケーターランプ *1</td>
  </tr>
  <tr>
    <td>Mesh ハートビートランプ *1</td>
  </tr>
  <tr>
    <td>ユーザー定義 *1</td>
  </tr>
  <tr>
    <td><b>電源</b></td>
    <td>Type-C：5V 1A</td>
  </tr>
  <tr>
    <td></td>
    <td>ソーラー電源：5V 1A</td>
  </tr>
  <tr>
    <td><b>防水等級</b></td>
    <td>IPX6</td>
  </tr>
  <tr>
    <td><b>バッテリー（P1-Pro バージョン）</b></td>
    <td>
      <p>- 18650 リチウム（NMC）バッテリー 4 本（各 3350mAh）</p>
      <p>- Type-C およびソーラー充電に対応。</p>
      <p>- 放電環境：-40～60°C</p>
      <p>- 充電環境：0～50°C</p>
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



### ハードウェア概要

**インタラクティブ項目**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/interactive.png" alt="pir" width={800} height="auto" /></p>

**付属品**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/accessory.png" alt="pir" width={800} height="auto" /></p>

**構成図**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>

## 技術サポートと製品ディスカッション

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

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