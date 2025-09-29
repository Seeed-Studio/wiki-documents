---
description: SenseCAP_T1000_tracker_and_Wialon_Integrated
title:  Wialon Integrated
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_tracker_Wialon
last_update:
  date: 6/4/2024
  author: Jessie
---


[Wialon](https://wialon.com/) は、GPS監視とIoTのためのフリート管理ソフトウェアプラットフォームで、世界150カ国以上で370万台以上のモバイルおよび固定ユニットを追跡し、2,500社以上のパートナー企業、700社のハードウェアメーカー、数百のWialonベースのソリューション開発者で構成されています。

この章の内容では、SenseCAP [T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) をWialonプラットフォームに接続する方法をユーザーに案内します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wialon-sensecap.png" alt="pir" width={800} height="auto" /></p>

セットアップを開始する前に、[Get Started](https://wiki.seeedstudio.com/ja/Get_Started_with_SenseCAP_T1000_tracker) を確認して、まずSenseCAP T1000 TrackerをSenseCAP Cloudに接続してください。

## SenseCAP PortalでSenseCAP APIを取得

[SenseCAP Portal](https://sensecap.seeed.cc/portal) にログインし、`Access API keys` に移動して、`Create Access Key` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensecap-api.png" alt="pir" width={800} height="auto" /></p>

すると `API ID` と `Access API keys` が取得できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensecap-api2.png" alt="pir" width={800} height="auto" /></p>

## Wialon設定

[Wialon Hosting](https://hosting.wialon.com/?lang=en) にログインします。

**Wialon Hosting** は、GPS監視とIoTのためのプラットフォームで、当社のデータセンターに保存・管理されています。

### ユニットの追加

**Units** タブに移動し、**New** をクリックして新しいユニットを追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/-add.png" alt="pir" width={800} height="auto" /></p>

ユニットに名前を付け、`Device Type` を `SenseCAP API` に選択し、レンチアイコンをクリックしてプロパティを入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-news.png" alt="pir" width={800} height="auto" /></p>

**API host**: sensecap.seeed.cc<br/>
**API ID**: SenseCAP PortalのAPI ID<br/>
**API Password**: SenseCAP PortalのAccess API keys<br/>
**Unique ID**: デバイスのEUI

デバイスをオンライン状態に保つと、マップ上で位置を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data-monitor.png" alt="pir" width={800} height="auto" /></p>

### ジオフェンス（オプション）

ジオフェンスは、監視目的で使用できるマップ上の制限エリアです。

`Geofences` タブに移動し、`New` をクリックして新しいジオフェンスを追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence-set2.png" alt="pir" width={800} height="auto" /></p>

* ジオフェンス名を指定します。
* タイプを選択します。
* マップ上でジオフェンスの中心をマークします（必要な場所をダブルクリック）。
* ジオフェンスの半径を指定します。
* `Save` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence-set.png" alt="pir" width={800} height="auto" /></p>