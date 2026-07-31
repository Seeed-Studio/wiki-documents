---
description: このガイドでは、MeshCore Node Map 上に MeshCore デバイスの位置を表示する方法を説明します。
title: MeshCore Node Map
keywords:
  - MeshCore
  - MeshMap
  - MeshCore Node Map
  - SenseCAP T1000-E
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MAPPP.jpg
slug: /meshcore_node_map_t1000e
sku: 114993369,114993649
sidebar_position: 2
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: 2026-04-3
updatedAt: '2026-04-07'
url: https://wiki.seeedstudio.com/ja/meshcore_node_map_t1000e/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## なぜ MeshCore Node Map を使うのか

Node Map は、ノードの位置をプロットすることで [MeshCore](https://meshcore.io/#hardware) ネットワークをリアルタイムに可視化し、ユーザーがネットワークトポロジーとノード分布を把握できるようにします。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMAPFirst.png" style={{width:900, height:'auto'}}/></div>

MeshCore Node Map は、ノードが定期的に地理的位置をネットワークに報告することに依存しています。特に次の用途に有用です：

- **近くのリピーターの発見**：利用可能なリピーターを特定して接続性を拡張する
- **自分のネットワークの監視**：ノードのステータスと位置を追跡する
- **デバッグと最適化**：リピーターやゲートウェイの配置を最適化する


## MeshCore 公式マップのチュートリアル

最も一般的に使われている MeshCore Node Map は公式の `MeshCore Node Map` です。[Click here](https://map.meshcore.io/) からウェブサイトにアクセスできます。

### コンパニオンの設定

コンパニオンノードを MeshCore Node Map 上に表示するには、デバイスが位置情報を報告するよう正しく設定されている必要があります。次のように設定します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMap.png" style={{width:1000, height:'auto'}}/></div>

### リピーターまたはルームサーバーの設定

リピーターまたはルームサーバーを MeshCore Node Map 上に表示するには、デバイスが位置情報を報告するよう正しく設定されている必要があります。 

まずリピーターにログインします。リピーターのデフォルト管理者パスワードは `password` です。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={900} height="auto" /></p>

GPS を有効にして位置情報を取得します（一部のリピーターファームウェアはリアルタイム位置の更新をサポートしていないため、その場合は手動で位置を選択する必要があります）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreGPSSnciny.png" alt="pir" width={900} height="auto" /></p>

### ノードを検索する

設定後、数分待つと、マップ上に自分のノードが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MAPPP.jpg" style={{width:1000, height:'auto'}}/></div>

デバイス名、ロール、設定情報を確認できます。このマップを使用することで、生存しているノードがどこにあるかを簡単に把握できます。

## （上級者向け）独自の Node Map フロントエンドを構築する

上級ユーザー向けに、カスタム Node Map フロントエンドを構築することも可能です。次のワークフローを使用することを推奨します： 

[Normal MeshCore Node] → [Mesh Nodes set with MQTT] → [Backend API / Database] → [Frontend Map UI]

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