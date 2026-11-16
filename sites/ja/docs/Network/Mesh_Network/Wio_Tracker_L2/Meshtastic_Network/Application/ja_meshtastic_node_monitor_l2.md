---
description: Meshtastic Network Monitor は、Meshtastic メッシュネットワーク内のノードを可視化、管理、監視できるツールです。
title: Meshtastic Network Monitor
keywords:
  - Meshtastic
  - ソースコード
  - Wio Tracker L2 Pro
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MeshsenseScreenshot.png
slug: /meshtastic_node_monitor_l2
sku: 100029766
sidebar_position: 5
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-03-19'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/ja/meshtastic_node_monitor_l2/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Meshtastic Network Monitor の概要

[Meshtastic](https://meshtastic.org/docs/introduction/) Network Monitor は、Meshtastic メッシュネットワーク内のノードを可視化、管理、監視できるツールです。デバイス間のステータス、ルーティング、通信に関するリアルタイム情報を提供します。このモニターは、接続されたゲートウェイまたは MQTT サーバーを介してデータを収集し、ネットワークトポロジを可視化し、バッテリー状態、信号強度、GPS 位置などのノード情報を表示する Meshtastic アナライザーです。Meshtastic ノードマップとしても機能します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MeshsenseScreenshot.png" style={{width:900, height:'auto'}}/></div>

**ユースケース**

* Meshtastic ノードマップ。遠隔地の屋外ノードを追跡および可視化します。
* Meshtastic アナライザー。メッシュネットワーク内の通信性能とルーティングを監視します。
* Meshtatsic モニター。Meshtastic デバイスのネットワーク接続性のデバッグとテストに使用します。

**一般的な Meshtastic モニター**

* Meshsense: 詳しく見るには [click here](https://affirmatech.com/meshsense)
* Meshmonitor: 詳しく見るには [click here](https://meshmonitor.org/) をクリックしてください

**Meshtastic モニターへの接続方法**

1. Meshtastic ノードをセットアップし、正常に動作するメッシュを形成していることを確認します。
2. 少なくとも 1 つのノードをゲートウェイ（例：MQTT Gateway）として構成します。
3. モニターアプリをゲートウェイまたは MQTT サーバーに接続します。
4. モニターインターフェース上でノードが表示され、ステータスを報告していることを確認します。

## Meshsense を使い始める

### 設定

#### アプリの準備

ご使用のプラットフォーム向けの **Meshsense** アプリをダウンロードしてインストールします: [Meshsense App Download](https://affirmatech.com/meshsense)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/APPDownload.png" style={{width:900, height:'auto'}}/></div>

#### デバイスの準備

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手🖱️</font></span></strong>
</a>
</div>

#### MQTT ゲートウェイ設定

公式の設定チュートリアルに従って mqtt をセットアップします: [Wio Trcker L2 MQTT Gateway Setup](https://wiki.seeedstudio.com/ja/set_up_mqtt_gateway_l2/)

:::tip
リアルタイムの GPS 位置を表示するには、ノードで GPS が有効になっていることを確認してください。また、MQTT を設定する際に、位置情報の送信が許可されていることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MapDisplay.png" style={{width:500, height:'auto'}}/></div>

:::

#### ネットワーク接続

パソコンを Xiao ESP32S3 キットと同じ Wi-Fi ネットワークに接続します。2.4G Wi-Fi であることを確認してください。

シリアルターミナル（例：Arduino Serial Monitor や PuTTY）を開き、Xiao デバイスの IP アドレスを確認します。[Meshtastic web serial monitor](https://flasher.meshtastic.org/) を使用することもできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/IPAdress.png" style={{width:500, height:'auto'}}/></div>

この IP アドレスを Meshsense のデバイス接続フィールドに入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/IPInput.png" style={{width:500, height:'auto'}}/></div>

接続されると、Meshtastic ノードが Meshsense に表示されるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/Connected.png" style={{width:500, height:'auto'}}/></div>

### 位置情報の表示

位置情報を取得するには GPS を有効にする必要があります。これは `long pressing the position icon` によってデバイス上で直接設定できます。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

また、スマートフォンの APP から設定することもできます。

* Meshsense アプリで、GPS レポートが有効になっていることを確認します。
* 接続されると、アプリは各ノードのリアルタイム位置を地図上に表示します。APP 上でノードの位置を直接確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/APPPPosition.png" style={{width:500, height:'auto'}}/></div>

また、Meshsense のウェブサイトの地図上でも、リアルタイムの位置を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MapDisplay.png" style={{width:500, height:'auto'}}/></div>


このセットアップにより、プライベートな Meshtastic ネットワークを効率的に管理し、Meshsense 上でノードの動作を直接可視化できます。

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

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
