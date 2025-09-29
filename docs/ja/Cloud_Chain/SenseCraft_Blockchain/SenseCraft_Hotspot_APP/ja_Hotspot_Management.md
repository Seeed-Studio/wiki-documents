---
description: ホットスポット管理
title: ホットスポット管理
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/sensecraft-blockchain/sensecraft-hotspot-app/hotspot-management
aliases:
  - /ja/Cloud_Chain/cloud/sensecraft-data/sensecraft-hotspot/sensecraft-hotspot-app/hotspot_management
last_update:
  date: 02/14/2023
  author: Matthew
---

**ホットスポット管理**
======================

**ホットスポット情報**
=======================

SenseCAP Hotspot Appは、SenseCAP Dashboardとあなたのウォレットの両方にあるホットスポットを管理します。あなたのホットスポットがSenseCAP Dashboardアカウントに追加されている場合、SenseCAP Appはあなたのホットスポットに関するすべての情報（報酬、オンライン状態、P2P状態、ウィットネス、位置など）を提供します。

SenseCAP Appがホットスポットに提供する情報と操作を決定する4つのステータスがあります。

1.  **SenseCAP**: SenseCAP ホットスポットがDashboardアカウントに追加されているだけでなく、ホットスポットが属するHeliumウォレットもSenseCAP Appに追加されている
2.  **ウォレットのみ**: SenseCAP ホットスポットのウォレットがSenseCAP Appに追加されている
3.  **ダッシュボードのみ**: SenseCAP ホットスポットがDashboardアカウントに追加されている
4.  **他のメーカー**: SenseCAP ホットスポットではなく、そのウォレットがSenseCAP Appに追加されている

<table style={{borderCollapse: 'collapse', width: '100%', height: 105}} border={1}><tbody><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>ステータスタイプ</strong></td><td style={{width: '33.3333%', height: 21}}><strong>情報</strong></td><td style={{width: '33.3333%', height: 21}}><strong>操作</strong></td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}>SenseCAP</td><td style={{width: '33.3333%', height: 21}}>すべての情報</td><td style={{width: '33.3333%', height: 21}}>すべての操作</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}>ウォレットのみ</td><td style={{width: '33.3333%', height: 21}}>報酬<br />スケール<br />位置<br />リレー<br />ウィットネス<br />Heliumオンライン状態</td><td style={{width: '33.3333%', height: 21}}>すべての操作</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}>ダッシュボードのみ</td><td style={{width: '33.3333%', height: 21}}>すべての情報</td><td style={{width: '33.3333%', height: 21}}>タグ設定<br />フォロー<br />アドレスコピー<br />ダッシュボードに追加</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}>他のメーカー</td><td style={{width: '33.3333%', height: 21}}>-</td><td style={{width: '33.3333%', height: 21}}>-</td></tr></tbody></table>


![SesneCAP Hotspto App](https://www.sensecapmx.com/wp-content/uploads/2022/07/hotspot-app-sensecap.png)

**ホットスポット操作**
=====================

SenseCAP AppはHelium Hotspot AppとSenseCAP Dashboardを組み合わせ、ホットスポットと報酬の管理を支援する以下の操作を提供します。

*   **位置更新**: ホットスポットの位置をHeliumブロックチェーンに更新
*   **アンテナ更新**: ホットスポットのアンテナをHeliumブロックチェーンに更新
*   **ペアリング（Wi-Fi更新または診断実行）**: BluetoothによるホットスポットのWi-Fi設定と診断実行
*   **タグ**: SenseCAP Dashboardのようなタグ設定
*   **アドレスコピー**: ホットスポットアドレスまたはオーナーアドレスのコピー
*   その他...