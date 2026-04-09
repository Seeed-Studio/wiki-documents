---
description: このガイドでは、MeshCore Node Map 上に MeshCore デバイスの位置を表示する方法を説明します。
title: MeshCore Node Map
keywords:
  - MeshCore
  - MeshMap
  - MeshCore Node Map
  - SenseCAP Solar Node
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MAPPP.jpg
slug: /meshcore_node_map_solar_node
sku: 114993643,114993633
sidebar_position: 2
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: 2026-04-3
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/ja/meshcore_node_map_solar_node/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## MeshCore Node Map を使う理由

Node Map は、ノードの位置をプロットすることで [MeshCore](https://meshcore.io/#hardware) ネットワークをリアルタイムに可視化し、ユーザーがネットワークトポロジーやノード分布を把握できるようにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMAPFirst.png" style={{width:900, height:'auto'}}/></div>

MeshCore Node Map は、ノードが定期的に自分の地理的位置をネットワークに報告することに依存しています。特に、次のような用途に有用です：

- **近くのリピーターの検出**：利用可能なリピーターを特定して接続性を拡張する
- **自分のネットワークの監視**：ノードのステータスと位置を追跡する
- **デバッグと最適化**：リピーターやゲートウェイの配置を最適化する

## MeshCore 公式マップのチュートリアル

最も一般的な MeshCore Node Map は公式の `MeshCore Node Map` です。[Click here](https://map.meshcore.io/) をクリックして Web サイトにアクセスします。

### Companion の設定

Companion ノードを MeshCore Node Map 上に表示するには、そのデバイスが位置情報を報告するよう正しく設定されている必要があります。以下のように設定してください：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMap.png" style={{width:1000, height:'auto'}}/></div>

### Repeater または Room Server の設定

Repeater または Room Server を MeshCore Node Map 上に表示するには、そのデバイスが位置情報を報告するよう正しく設定されている必要があります。

まず Repeater にログインします。Repeater のデフォルトの管理者パスワードは `password` です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={900} height="auto" /></p>

GPS を有効にして位置情報を取得します（一部の Repeater ファームウェアはリアルタイム位置の更新をサポートしていないため、その場合は手動で位置を選択する必要があります）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreGPSSnciny.png" alt="pir" width={900} height="auto" /></p>

### ノードを検索する

設定後、数分待つと、マップ上に自分のノードが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MAPPP.jpg" style={{width:1000, height:'auto'}}/></div>

デバイス名、ロール、および設定情報を確認できます。このマップを使用することで、稼働中のノードがどこにあるかを簡単に把握できます。

## （上級）独自の Node Map フロントエンドを構築する

上級ユーザー向けに、カスタムの Node Map フロントエンドを構築することも可能です。次のワークフローを使用することを推奨します：

[Normal MeshCore Node] → [Mesh Nodes set with MQTT] → [Backend API / Database] → [Frontend Map UI]
