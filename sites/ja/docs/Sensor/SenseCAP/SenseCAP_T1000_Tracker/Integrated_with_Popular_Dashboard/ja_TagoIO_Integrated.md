---
description: SenseCAP_T1000_tracker_and_TagoIO_Integrated
title: TagoIO統合（TTS経由）
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_tracker_TagoIO_TTS
last_update:
  date: 8/18/2023
  author: Jessie
---


[TagoIO](https://tago.io/)は、企業がデバイス、データ、ユーザー、分析、統合を管理するためのIoTクラウドプラットフォームです。直感的なインターフェースにより、あらゆる規模の企業が革新的なIoTソリューションを簡単に構築・展開できます。

この章では、[SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)をTTN経由でTagoIOに接続する方法をユーザーに説明します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio.png" alt="pir" width={800} height="auto" /></p>

セットアップを開始する前に、[SenseCAP T1000をTTSに接続](https://wiki.seeedstudio.com/ja/SenseCAP_T1000_tracker_TTN)を確認して、まずSenseCAP T1000 TrackerをTTSに接続してください。

## TagoIOの設定

開始するには、[TagoIO](https://admin.tago.io/signup)でアカウントを作成してください。

### デバイスの追加

**Devices**タブに移動し、**Add Device**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_device.png" alt="pir" width={800} height="auto" /></p>

クイックセットアップのために**Seeed SenseCAP T1000**を検索します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_template.png" alt="pir" width={800} height="auto" /></p>

デバイスに名前を付け、デバイスEUIを貼り付けて、**Create my Device**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/c_my_device.png" alt="pir" width={800} height="auto" /></p>

### 認証の生成

**Generate authorization**をクリックし、認証をコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/authorization.png" alt="pir" width={800} height="auto" /></p>

## The Things Stackの設定

The Things Stackで、**Integrations** → **Webhooks**に移動し、**Add Webhook**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

TagoIO Webhookテンプレートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTS_web_IO.png" alt="pir" width={800} height="auto" /></p>

Webhook IDを入力して統合に名前を付け、Plugin IDとTagoIOトークンを貼り付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/webhook_TTS.png" alt="pir" width={800} height="auto" /></p>

デバイスが接続された後、TagoIOの**Live Inspector**タブですべての接続を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/live_inspec.png" alt="pir" width={800} height="auto" /></p>

## TagoIOダッシュボード（オプション）

ダッシュボードは、データをリアルタイムで視覚化し、操作するためのウィジェットを配置する場所です。ニーズに合わせてダッシュボードをカスタマイズできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_dash.png" alt="pir" width={800} height="auto" /></p>

**Dashboard**タブに移動し、ダッシュボードに名前を付けて**Create my Dashboard**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dashfortagoio.png" alt="pir" width={800} height="auto" /></p>

**位置情報ダッシュボード**

**Add widget**をクリックし、**Map**タイプを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/maptagoio.png" alt="pir" width={800} height="auto" /></p>

**Data from**: あなたのデバイス -- location

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_done_io.png" alt="pir" width={800} height="auto" /></p>
