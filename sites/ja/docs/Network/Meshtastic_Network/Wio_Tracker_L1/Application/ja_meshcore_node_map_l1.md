---
description: このガイドでは、MeshCore ノードマップ上に MeshCore デバイスの位置を表示する方法を説明します。
title: MeshCore ノードマップ
keywords:
  - MeshCore
  - MeshMap
  - MeshCore Node Map
  - Wio Tracker L1
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MAPPP.jpg
slug: /meshcore_node_map_l1
sku: 114993648,114993649,114993653,114993654
sidebar_position: 2
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: 2026-04-3
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/ja/meshcore_node_map_l1/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## なぜ MeshCore ノードマップを使うのか

ノードマップはノードの位置をプロットすることで [MeshCore](https://meshcore.io/#hardware) ネットワークの状況をリアルタイムに可視化し、ユーザーがネットワークトポロジーとノード分布を把握できるようにします。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMAPFirst.png" style={{width:900, height:'auto'}}/></div>

MeshCore ノードマップは、ノードが定期的に自分の地理的な位置をネットワークへ報告することに依存しています。特に以下の用途に有用です：

- **近くのリピーターの発見**: 利用可能なリピーターを特定して接続性を拡張する
- **自分のネットワークの監視**: ノードのステータスと位置を追跡する
- **デバッグと最適化**: リピーターやゲートウェイの配置を最適化する


## MeshCore 公式マップのチュートリアル

最も一般的に利用されている MeshCore ノードマップは公式の `MeshCore Node Map` です。[Click here](https://map.meshcore.io/) をクリックしてウェブサイトにアクセスします。

### コンパニオンの設定

コンパニオンノードを MeshCore ノードマップ上に表示するには、デバイスが位置情報を報告するように正しく設定されている必要があります。次のように設定します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMap.png" style={{width:1000, height:'auto'}}/></div>

### リピーターまたはルームサーバーの設定

リピーターまたはルームサーバーを MeshCore ノードマップ上に表示するには、デバイスが位置情報を報告するように正しく設定されている必要があります。 

まずリピーターにログインします。リピーターのデフォルト管理者パスワードは `password` です。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={900} height="auto" /></p>

GPS を有効にして位置情報を取得します（一部のリピーターファームウェアはリアルタイム位置情報の更新をサポートしていないため、その場合は手動で位置を選択する必要があります）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreGPSSnciny.png" alt="pir" width={900} height="auto" /></p>

### ノードを検索する

設定が完了したら数分待つと、マップ上に自分のノードが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MAPPP.jpg" style={{width:1000, height:'auto'}}/></div>

デバイス名、ロール、設定情報を確認できます。このマップを使用することで、生存しているノードがどこにあるのかを簡単に把握できます。

## （上級者向け）独自のノードマップフロントエンドを構築する

上級ユーザーであれば、カスタムのノードマップフロントエンドを構築することも可能です。以下のワークフローを使用することを推奨します： 

[Normal MeshCore Node] → [Mesh Nodes set with MQTT] → [Backend API / Database] → [Frontend Map UI]