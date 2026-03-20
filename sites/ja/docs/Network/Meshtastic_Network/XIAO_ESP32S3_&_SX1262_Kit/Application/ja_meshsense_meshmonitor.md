---
description: Meshtastic Network Monitor は、Meshtastic メッシュネットワーク内のノードを可視化、管理、監視できるツールです。
title: Meshtastic Network Monitor
keywords:
  - Meshtastic
  - ソースコード
  - Xiao ESP32s3
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MeshsenseScreenshot.png
slug: /xiao_esp32s3_&_wio_sx1262_kit_meshmonitor
sku: 102010611,113110064
sidebar_position: 2
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-03-19'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/xiao_esp32s3_&_wio_sx1262_kit_mqtt/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Meshtastic Network Monitor の概要

[Meshtastic](https://meshtastic.org/docs/introduction/) Network Monitor は、Meshtastic メッシュネットワーク内のノードを可視化、管理、監視できるツールです。デバイス間のステータス、ルーティング、通信に関するリアルタイム情報を提供します。このモニタは、接続されたゲートウェイまたは MQTT サーバーを介してデータを収集し、ネットワークトポロジを可視化し、バッテリー状態、信号強度、GPS 位置などのノード情報を表示する Meshtastic アナライザーです。Meshtastic ノードマップとしても機能します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MeshsenseScreenshot.png" style={{width:900, height:'auto'}}/></div>

**ユースケース**

* Meshtastic ノードマップ。遠隔地の屋外ノードを追跡および可視化します。
* Meshtastic アナライザー。メッシュネットワーク内の通信性能とルーティングを監視します。
* Meshtatsic モニタ。Meshtastic デバイスのネットワーク接続性のデバッグとテストを行います。

**一般的な Meshtastic モニタ**

* Meshsense: 詳細は [click here](https://affirmatech.com/meshsense)
* Meshmonitor: 詳細は [click here](https://meshmonitor.org/) をご覧ください

**Meshtastic モニタへの接続方法**

1. Meshtastic ノードをセットアップし、正常に動作するメッシュを形成していることを確認します。
2. 少なくとも 1 つのノードをゲートウェイ（例：MQTT Gateway）として構成します。
3. モニタアプリをゲートウェイまたは MQTT サーバーに接続します。
4. モニタのインターフェース上でノードが表示され、ステータスを報告していることを確認します。

## Meshsense を使い始める

### 設定

#### アプリの準備

ご利用のプラットフォーム向けの **Meshsense** アプリをダウンロードしてインストールします: [Meshsense App Download](https://affirmatech.com/meshsense)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/APPDownload.png" style={{width:900, height:'auto'}}/></div>

#### デバイスの準備

MQTT ゲートウェイとして構成された **Seeed Xiao ESP32S3 & SX1262 Meshtastic Kit** が必要です。これにより、Meshtastic ネットワークと Meshsense 間のリアルタイム通信が可能になります。位置情報も監視および表示したい場合は、GPS モジュールを追加してください。

<table align="center">
<tbody><tr>
<th>Meshtastic & LoRa 用 XIAO ESP32S3 & Wio-SX1262 キット</th>
<th>（オプション）L76K GNSS モジュール</th>
</tr>
<tr>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:350, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> 詳細を見る🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

#### MQTT ゲートウェイの設定

公式の設定チュートリアルに従って mqtt をセットアップします: [Xiao ESP32S3 & SX1262 MQTT Gateway Setup](https://wiki.seeedstudio.com/ja/xiao_esp32s3_&_wio_sx1262_kit_mqtt/)

:::tip
リアルタイムの GPS 位置を表示するには、ノードで GPS が有効になっていることを確認してください。また、MQTT を設定する際に、位置情報の送信が許可されていることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MapDisplay.png" style={{width:500, height:'auto'}}/></div>

:::

#### ネットワーク接続

パソコンを Xiao ESP32S3 キットと同じ Wi-Fi ネットワークに接続します。2.4G wifi であることを確認してください。

シリアルターミナル（例：Arduino Serial Monitor や PuTTY）を開き、Xiao デバイスの IP アドレスを確認します。[Meshtastic web serial monitor](https://flasher.meshtastic.org/) を使用することもできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/IPAdress.png" style={{width:500, height:'auto'}}/></div>

この IP アドレスを Meshsense のデバイス接続フィールドに入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/IPInput.png" style={{width:500, height:'auto'}}/></div>

接続されると、Meshtastic ノードが Meshsense に表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/Connected.png" style={{width:500, height:'auto'}}/></div>

### 位置情報の表示

#### ハードウェアのセットアップ

ノードの位置を表示するには、**L76K GPS モジュール** を Xiao ESP32S3 キットに接続します。[Click here](https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html) から今すぐ入手できます。

#### ソフトウェアのセットアップ

* Meshsense アプリで、GPS レポートが有効になっていることを確認します。
* 接続されると、アプリは各ノードのリアルタイム位置を地図上に表示します。APP 上でノードの位置を直接確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/APPPPosition.png" style={{width:500, height:'auto'}}/></div>

また、Meshsense のウェブサイト上の地図でも、リアルタイムの位置を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MapDisplay.png" style={{width:500, height:'auto'}}/></div>


このセットアップにより、プライベートな Meshtastic ネットワークを効率的に管理し、ノードの動作を Meshsense 上で直接可視化できます。
