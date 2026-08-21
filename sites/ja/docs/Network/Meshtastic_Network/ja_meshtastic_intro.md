---
description: Meshtastic® ネットワーク概要
title: Meshtastic® ネットワーク概要
keywords:
  - Meshtastic
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /meshtastic_introduction
sidebar_position: 1
last_update:
  date: 12/11/2025
  author: Michelle
createdAt: '2024-06-17'
updatedAt: '2026-08-07'
url: https://wiki.seeedstudio.com/ja/meshtastic_introduction/
---

[Meshtastic®](https://meshtastic.org/) は、オープンソースで、オフグリッドかつ分散型のメッシュネットワークであり、手頃な低消費電力デバイス上で動作するように構築されています。既存の、あるいは信頼できる通信インフラがない地域でも、安価な LoRa 無線機を長距離オフグリッド通信プラットフォームとして利用できるようにします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/FrameworkMeshtasticccc.png" alt="pir" width={900} height="auto" /></p>

## 特長

- **長距離通信**（[MartinR7 & alleg による 331km の記録](https://meshtastic.org/docs/overview/range-tests/#current-ground-record-331km)）
- **分散型通信** - 専用ルーター不要
- **暗号化通信** 

## 仕組み

Meshtastic は LoRa という長距離無線プロトコルを利用しており、多くの地域で追加の免許や認証を必要とせずに広く利用できます。これはアマチュア無線の運用とは異なります。

さらに、Meshtastic 無線機は 1 台のスマートフォンとペアリングでき、友人や家族があなたの特定の無線機に直接メッセージを送信できるようになります。なお、各デバイスは同時に 1 人のユーザーからの接続しかサポートできない点に注意してください。

Meshtastic ネットワークについて詳しく知るには[こちら](https://meshtastic.org/docs/)をクリックしてください。

## 対応ハードウェア

### 開発キット

<table align="center">
<tbody><tr>
<th>Xiao ESP32 キット（ケースなし）</th>
<th>Xiao nRF52840 キット（ケースなし）</th>
<th>Xiao ESP32 キット（ケース付き）</th>
</tr>
<tr>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102010611-wio-sx1262-with-xiao-esp32s3.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-102010710-nrf52840_wio-sx1262-kit_1.jpg" style={{width:350, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113110064-xiao-esp32s3-for-meshtastic-_-lora-with-3d-printed-enclosure-45font.jpg" style={{width:350, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> もっと見る🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF52840-Wio-SX1262-Kit-for-Meshtastic-p-6400.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> もっと見る🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-for-Meshtastic-LoRa-with-3D-Printed-Enclosure-p-6314.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> もっと見る🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>


### 開発ボード

<table align="center">
<tbody><tr>
<th>L1 Lite（OLED なし）</th>
<th>L1（OLED 付き）</th>
<th>L1 E-Ink（E-Ink 付き）</th>
</tr>
<tr>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-114993653-wio-tracker-l1-lite.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-114993648-wio-tracker-l1.jpg" style={{width:350, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-114993654-wio-tracker-l1-e-ink.jpg" style={{width:350, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-Lite-p-6455.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> もっと見る🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-p-6453.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> もっと見る🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-E-ink-p-6456.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> もっと見る🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

### GNSS トラッカー

<table align="center">
<tbody><tr>
<th>SenseCAP MeshTracker X1</th>
<th>SenseCAP Card Tracker T1000-E</th>
<th>SenseCAP Wio Tracker L1 Pro</th>
</tr>
<tr>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100093876._._.png" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993369-sensecap-card-tracker-t1000-e-for-meshtastic.jpg" style={{width:350, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/0/20260408-135305.jpg" style={{width:350, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/sensecap-meshtracker-x1-meshtastic-gps-tracker-p-6935.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> もっと見る🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> もっと見る🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/sensecap-meshtracker-x1-meshtastic-gps-tracker-p-6935.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> もっと見る🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

### ソーラーノード

<table align="center">
<tbody><tr>
<th>SenseCAP Solar Node（バッテリー & GNSS なし）</th>
<th>SenseCAP Solar Node（バッテリー & GNSS あり）</th>
</tr>
<tr>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993643-sensecap-solar-node-p1-for-meshtastic-1_1.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993643-sensecap-solar-node-p1-for-meshtastic-1_1.jpg" style={{width:350, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-for-Meshtastic-LoRa-p-6425.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> もっと見る🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshtastic-LoRa-p-6412.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> もっと見る🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

## アプリケーション

### エンクロージャ設計

詳しいチュートリアルを読むには[こちらをクリック](https://wiki.seeedstudio.com/ja/xiao_esp32s3_&_wio_sx1262_kit_mqtt/)してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki%20images/3d%20Enclosure/6.23dimage1.png" alt="Magnetic Wireless Charger" width={800} height="auto" /></p>

### Meshtastic ノードマップ

Meshtastic ノードマップは、地図上に Meshtastic デバイスの位置を可視化するオンラインインターフェースです。メッシュネットワーク内のデバイスのリアルタイムな位置を監視でき、ネットワークのカバレッジや接続状況を把握するのに役立ちます。

詳しいチュートリアルを読むには[こちらをクリック](https://wiki.seeedstudio.com/ja/meshtastic_node_map_t1000_e/)してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMap.png" style={{width:600, height:'auto'}}/></div>

### Meshtastic ノードモニター

[Meshtastic](https://meshtastic.org/docs/introduction/) ネットワークモニターは、Meshtastic メッシュネットワーク内のノードを可視化、管理、監視できるツールです。デバイス間のステータス、ルーティング、通信に関するリアルタイム情報を提供します。このモニターは Meshtastic アナライザーとして、接続されたゲートウェイまたは MQTT サーバーを介してデータを収集し、ネットワークトポロジを可視化するとともに、バッテリー状態、信号強度、GPS 位置などのノード情報を表示します。Meshtastic ノードマップとして機能させることもできます。

詳しいチュートリアルを読むには[こちらをクリック](https://wiki.seeedstudio.com/ja/xiao_esp32s3_&_wio_sx1262_kit_meshmonitor/)してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MeshsenseScreenshot.png" style={{width:600, height:'auto'}}/></div>

### Meshtastic MQTT ゲートウェイ

MQTT を Meshtastic と統合することで、離れたネットワーク同士をブリッジし、オフグリッド通信を拡張できます。これにより、グローバルなメッセージングが可能になり、メッシュ信号が弱い場合のバックアップとして機能し、インターネット経由でより高速なメッセージ配信を実現します。遠隔地や緊急時の利用に最適です。

[詳細なチュートリアルを読むにはこちらをクリック](https://wiki.seeedstudio.com/ja/xiao_esp32s3_&_wio_sx1262_kit_mqtt/)してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTFramework.png" style={{width:600, height:'auto'}}/></div>

### その他のコミュニティ製ファームウェア

当社ハードウェア上でより多くのコミュニティ製ファームウェアを使用するには[こちら](https://wiki.seeedstudio.com/ja/get_started_with_meshcore_solar_node/)をクリックしてください。


## 技術サポート & 製品ディスカッション

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