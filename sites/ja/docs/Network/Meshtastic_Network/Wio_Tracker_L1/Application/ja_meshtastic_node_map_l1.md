---
description: このガイドでは、Meshtastic デバイス（Meshtastic ファームウェアが書き込まれていることを前提）を Meshtastic Node Map 上の位置情報として表示する方法を説明します。
title: Meshtastic Node Map
keywords:
  - Meshtastic
  - MeshMap
  - Meshtastic Node Map
  - Wio Tracker L1
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMap.png
slug: /meshtastic_node_map_l1
sku: 114993648,114993649,114993653,114993654
sidebar_position: 1
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-03-19'
updatedAt: '2026-04-07'
url: https://wiki.seeedstudio.com/ja/meshtastic_node_map_l1/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

このガイドでは、[Meshtastic](https://meshtastic.org/docs/introduction/) デバイス（すでに Meshtastic ファームウェアを書き込んであることを前提）を、[Wio Tracker L1 Pro](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html) と [T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html) を用いて Meshtastic Node Map 上に表示する方法を説明します。

## Meshtastic ネットワークモニタの概要

Meshtastic Node Map は、Meshtastic デバイスの位置を地図上に可視化するオンラインインターフェースです。これにより、メッシュネットワーク内のデバイスのリアルタイムな位置を監視し、ネットワークのカバレッジや接続状況を把握できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMap.png" style={{width:900, height:'auto'}}/></div>

Meshtastic デバイスは定期的に、自身の位置情報を MQTT 経由で Meshtastic サーバーに報告します。Node Map はこれらのレポートを取得し、各ノードの位置、ルート、電波到達範囲を表示します。デバイスは次のいずれかの方法で位置を報告できます：

- **MapReport による直接送信:** デバイスが位置情報をサーバーへ直接送信します。
- **他のノード経由の間接送信:** 近隣ノードを経由して位置情報が中継されます。

**適したユースケース**

Meshtastic Node Map は次のような用途に最適です：

- ハイキング、サイクリング、探検などのアウトドアアクティビティ
- 分散した IoT デバイスの遠隔監視
- セルラーネットワークに依存しない資産やチームメンバーの追跡

### 一般的な Meshtastic Node Map

| Node Map | 特徴 | 最適なユーザー | 備考 |
|----------|----------|-----------|-------|
| [MeshMap](https://meshmap.net/) | リアルタイムノードトラッキング、メッシュルート表示、電波到達範囲表示 | カジュアルユーザー、初心者 | シンプルなインターフェース、デフォルト Meshtastic サーバーを使用 |
| [Liam Cottle の Meshtastic Map](https://meshtastic.liamcottle.net/) | リアルタイムトラッキング、履歴ルート表示、電波到達範囲表示 | 上級ユーザー、データ解析 | カスタム MQTT サーバーを使用 |

## MeshMap を使い始める

### 設定

**LoRa 設定**
   - 使用地域に合わせて、デバイスの LoRa 周波数帯を正しく設定します。
   - レポートを許可するために **OK to MQTT** を有効にします。

**MQTT 設定**
   - デバイスで MQTT を有効にします。
   - デフォルトの Meshtastic サーバー、ユーザー名、パスワードを使用します。
   - **MapReport** を有効にし、**I agree** にチェックを入れます。用途に応じてレポート間隔を選択します。

### デバイス位置の表示

Web ブラウザで **MeshMap** を開きます: [MeshMap Link](https://meshmap.net/)。 

すべてのノードが地図上に表示されます。**via MapReport** として報告されるノードは、デバイスからの直接更新です。**via other nodes** として報告されるノードは、中継された更新です。

任意のノードをクリックすると、詳細情報（デバイス ID、バッテリー残量など）、メッシュルート、電波カバレッジを確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMapPositionDisplay.png" style={{width:900, height:'auto'}}/></div>

## Liam Cottle の Meshtastic Map を使い始める

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

Web ブラウザで **Liam Cottle の Meshtastic Map** を開きます: [Liam Cottle's Map Link](https://meshtastic.liamcottle.net/)。すべてのノードが地図上に表示されます。

任意のノードをクリックすると、デバイスの詳細情報、電波到達範囲、履歴ルート、過去の位置更新を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/LiamPosition.png" style={{width:600, height:'auto'}}/></div>
