---
description: SenseCAP_T1000_tracker_and_Wialon_Integrated
title: Wialon統合
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_tracker_Wialon
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

[Wialon](https://wialon.com/)は、GPSモニタリングおよびIoT向けのフリート管理ソフトウェアプラットフォームであり、世界150以上の国で370万以上の移動および固定ユニットを追跡しています。このプラットフォームは、2,500以上のパートナー企業、700のハードウェアメーカー、数百のWialonベースのソリューション開発者で構成されています。

この章の内容では、SenseCAP [T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)をWialonプラットフォームに接続する方法をユーザーに案内します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wialon-sensecap.png" alt="pir" width={800} height="auto" /></p>

セットアップを開始する前に、まず[Get Started](https://wiki.seeedstudio.com/ja/Get_Started_with_SenseCAP_T1000_tracker)を確認し、SenseCAP T1000 TrackerをSenseCAP Cloudに接続してください。

## SenseCAPポータルでSenseCAP APIを取得する

[SenseCAP Portal](https://sensecap.seeed.cc/portal)にログインし、`Access API keys`に移動して`Create Access Key`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensecap-api.png" alt="pir" width={800} height="auto" /></p>

その後、`API ID`と`Access API keys`を取得できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensecap-api2.png" alt="pir" width={800} height="auto" /></p>

## Wialonの設定

[Wialon Hosting](https://hosting.wialon.com/?lang=en)にログインします。

**Wialon Hosting**は、GPSモニタリングおよびIoT向けのプラットフォームであり、データセンターで保存および管理されています。

### ユニットを追加する

**Units**タブに移動し、**New**をクリックして新しいユニットを追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/-add.png" alt="pir" width={800} height="auto" /></p>

ユニットに名前を付け、`Device Type`を`SenseCAP API`に選択し、レンチアイコンをクリックしてプロパティを入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-news.png" alt="pir" width={800} height="auto" /></p>

**API host**: sensecap.seeed.cc<br/>
**API ID**: SenseCAPポータルのAPI ID<br/>
**API Password**: SenseCAPポータルのAccess API keys<br/>
**Unique ID**: デバイスのEUI

デバイスをオンライン状態に保つと、地図上で位置を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data-monitor.png" alt="pir" width={800} height="auto" /></p>

### ジオフェンス（オプション）

ジオフェンスは、監視目的で使用できる地図上の制限されたエリアです。

`Geofences`タブに移動し、`New`をクリックして新しいジオフェンスを追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence-set2.png" alt="pir" width={800} height="auto" /></p>

* ジオフェンス名を指定します。
* タイプを選択します。
* 地図上でジオフェンスの中心をマークします（必要な場所をダブルクリック）。
* ジオフェンスの半径を指定します。
* `Save`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence-set.png" alt="pir" width={800} height="auto" /></p>