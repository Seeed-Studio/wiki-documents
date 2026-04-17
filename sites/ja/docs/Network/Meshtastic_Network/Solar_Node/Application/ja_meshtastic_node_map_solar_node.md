---
description: このガイドでは、Meshtastic ファームウェアを書き込んだデバイスで Meshtastic Node Map を使い、Meshtastic デバイスの位置を表示する方法を説明します。
title: Meshtastic Node Map
keywords:
  - Meshtastic
  - MeshMap
  - Meshtastic Node Map
  - Solar Node
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMap.png
slug: /meshtastic_node_map_solar_node
sku: 114993643,114993633
sidebar_position: 1
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-03-19'
updatedAt: '2026-04-07'
url: https://wiki.seeedstudio.com/ja/meshtastic_node_map_solar_node/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

このガイドでは、[Meshtastic](https://meshtastic.org/docs/introduction/) ファームウェアがすでに書き込まれていることを前提として、[Wio Tracker L1 Pro](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html) と [T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html) デバイスを使用し、Meshtastic Node Map 上に Meshtastic デバイスの位置を表示する方法を説明します。

## Meshtastic ネットワークモニターの概要

Meshtastic Node Map は、Meshtastic デバイスの位置を地図上に可視化するオンラインインターフェースです。メッシュネットワーク内のデバイスのリアルタイムな位置を監視でき、ネットワークのカバレッジや接続状況を把握するのに役立ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMap.png" style={{width:900, height:'auto'}}/></div>

Meshtastic デバイスは、MQTT を介して Meshtastic サーバーに定期的に位置情報を報告します。Node Map はこれらのレポートを取得し、各ノードの位置、経路、電波到達範囲を表示します。デバイスは次の方法で位置を報告できます：

- **MapReport を介した直接報告:** デバイスがサーバーに直接位置データを送信します。
- **他のノードを介した間接報告:** 近隣ノードを経由して位置情報が中継されます。

**適したユースケース**

Meshtastic Node Map は、次のような用途に最適です：

- ハイキングやサイクリング、遠征などのアウトドアアクティビティ。
- 分散配置された IoT デバイスのリモート監視。
- 携帯電話ネットワークに依存せずに資産やチームメンバーを追跡する用途。

### 一般的な Meshtastic Node Map

| Node Map | 特徴 | 最適なユーザー | 備考 |
|----------|----------|-----------|-------|
| [MeshMap](https://meshmap.net/) | リアルタイムノードトラッキング、メッシュ経路表示、電波到達範囲の表示 | カジュアルユーザー、初心者 | シンプルなインターフェース、デフォルトの Meshtastic サーバーを使用 |
| [Liam Cottle's Meshtastic Map](https://meshtastic.liamcottle.net/) | リアルタイムトラッキング、過去の経路表示、電波到達範囲の表示 | 上級ユーザー、データ分析 | カスタム MQTT サーバーを使用 |

## MeshMap を使ってみる

### 設定

**LoRa 設定**
   - お住まいの地域に合った LoRa 周波数帯にデバイスを設定します。
   - レポートを許可するために **OK to MQTT** を有効にします。

**MQTT 設定**
   - デバイスで MQTT を有効にします。
   - デフォルトの Meshtastic サーバー、ユーザー名、パスワードを使用します。
   - **MapReport** を有効にし、**I agree** にチェックを入れます。ニーズに応じてレポート間隔を選択します。

### デバイス位置の表示

Web ブラウザで **MeshMap** を開きます: [MeshMap Link](https://meshmap.net/)。 

地図上にすべてのノードが表示されます。**via MapReport** と表示されるノードはデバイスからの直接更新です。**via other nodes** と表示されるノードは他のノードを経由した中継更新です。

任意のノードをクリックすると、詳細情報（デバイス ID、バッテリーレベルなど）、メッシュ経路および電波カバレッジを確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMapPositionDisplay.png" style={{width:900, height:'auto'}}/></div>

## Liam Cottle's Meshtastic Map を使ってみる

### 設定

**LoRa 設定**
   - デバイスを適切な LoRa 周波数帯に設定します。
   - **OK to MQTT** を有効にします。

**MQTT 設定**
   - MQTT を有効にします。
   - 次のパラメータを設定します：
     - Address: `mqtt.meshtastic.liamcottle.net`
     - Username: `uplink`
     - Password: `uplink`
     - Encryption Enabled: Yes
     - JSON Output: No
     - TLS Enabled: No
   - `MapReport` を有効にし、`I agree` にチェックを入れます。好みのレポート間隔を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/LiamMQTT.png" style={{width:600, height:'auto'}}/></div>

### デバイス位置の表示

Web ブラウザで **Liam Cottle's Meshtastic Map** を開きます: [Liam Cottle's Map Link](https://meshtastic.liamcottle.net/)。地図上にすべてのノードが表示されます。

任意のノードをクリックすると、デバイスの詳細情報、電波到達範囲、過去の経路や以前の位置更新を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/LiamPosition.png" style={{width:600, height:'auto'}}/></div>
