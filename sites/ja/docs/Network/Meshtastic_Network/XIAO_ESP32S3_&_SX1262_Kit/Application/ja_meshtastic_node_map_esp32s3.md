---
description: このガイドでは、Meshtastic デバイスの位置情報を Meshtastic Node Map 上に表示する方法を説明します。
title: Meshtastic Node Map
keywords:
  - Meshtastic
  - MeshMap
  - Meshtastic Node Map
  - Xiao ESP32S3
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMap.png
slug: /meshtastic_node_map_esp32s3
sku: 102010611,113110064,102010710
sidebar_position: 3
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-03-19'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/meshtastic_node_map_esp32s3/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


このガイドでは、[Meshtastic](https://meshtastic.org/docs/introduction/) ファームウェアを書き込んだ [Wio Tracker L1 Pro](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html) および [T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html) デバイスを使用して、Meshtastic デバイスの位置情報を Meshtastic Node Map 上に表示する方法を説明します。

## Meshtastic ネットワークモニターの概要

Meshtastic Node Map は、Meshtastic デバイスの位置を地図上に可視化するオンラインインターフェースです。メッシュネットワーク内のデバイスのリアルタイムな位置を監視でき、ネットワークのカバレッジや接続状況を把握するのに役立ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMap.png" style={{width:900, height:'auto'}}/></div>

Meshtastic デバイスは、MQTT を介して Meshtastic サーバーに定期的に位置情報を報告します。Node Map はこれらのレポートを取得し、各ノードの位置、経路、電波到達範囲を表示します。デバイスは次の方法で位置情報を報告できます：

- **MapReport による直接報告:** デバイスが位置データをサーバーに直接送信します。
- **他のノード経由の間接報告:** 近隣ノードを経由して位置情報が中継されます。

**適したユースケース**

Meshtastic Node Map は次のような用途に最適です：

- ハイキング、サイクリング、遠征などのアウトドアアクティビティ。
- 分散配置された IoT デバイスのリモート監視。
- セルラーネットワークに依存せずに資産やチームメンバーを追跡する用途。

### 一般的な Meshtastic Node Map

| Node Map | 特徴 | 最適なユーザー | 備考 |
|----------|----------|-----------|-------|
| [MeshMap](https://meshmap.net/) | リアルタイムノードトラッキング、メッシュ経路表示、電波到達範囲表示 | 一般ユーザー、初心者 | シンプルなインターフェース、デフォルトの Meshtastic サーバーを使用 |
| [Liam Cottle's Meshtastic Map](https://meshtastic.liamcottle.net/) | リアルタイムトラッキング、履歴経路表示、電波到達範囲表示 | 上級ユーザー、データ解析 | カスタム MQTT サーバーを使用 |

## MeshMap を使い始める

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

地図上にすべてのノードが表示されます。**via MapReport** として報告されるノードは、デバイスからの直接更新です。**via other nodes** として報告されるノードは、中継された更新です。

任意のノードをクリックすると、詳細情報（デバイス ID、バッテリーレベルなど）、メッシュ経路、電波カバレッジを表示できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMapPositionDisplay.png" style={{width:900, height:'auto'}}/></div>

## Liam Cottle's Meshtastic Map を使い始める

### 設定

**LoRa 設定**
   - デバイスを正しい LoRa 周波数帯に設定します。
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
   - `MapReport` を有効にし、`I agree` にチェックを入れます。お好みのレポート間隔を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/LiamMQTT.png" style={{width:600, height:'auto'}}/></div>

### デバイス位置の表示

Web ブラウザで **Liam Cottle's Meshtastic Map** を開きます: [Liam Cottle's Map Link](https://meshtastic.liamcottle.net/)。地図上にすべてのノードが表示されます。

任意のノードをクリックすると、デバイスの詳細情報、電波到達範囲、履歴経路、および過去の位置更新を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/LiamPosition.png" style={{width:600, height:'auto'}}/></div>
