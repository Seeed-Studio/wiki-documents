---
description: SenseCAP_T1000_tracker_and_TagoIO_Integrated
title: TagoIO 統合 (TTS 経由)
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_tracker_TagoIO_TTS
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

[TagoIO](https://tago.io/) は、デバイス、データ、ユーザー、分析、および統合を管理するためのビジネス向け IoT クラウドプラットフォームです。その直感的なインターフェースにより、あらゆる規模の企業が革新的な IoT ソリューションを簡単に構築および展開できます。

この章の内容では、[SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) を TTN を通じて TagoIO に接続する方法を案内します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio.png" alt="pir" width={800} height="auto" /></p>

セットアップを開始する前に、まず [SenseCAP T1000 を TTS に接続する](https://wiki.seeedstudio.com/ja/SenseCAP_T1000_tracker_TTN) を確認して、SenseCAP T1000 Tracker を TTS に接続してください。

## TagoIO の設定

まず、[TagoIO](https://admin.tago.io/signup) にアカウントを作成してください。

### デバイスの追加

**Devices** タブに移動し、**Add Device** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_device.png" alt="pir" width={800} height="auto" /></p>

**Seeed SenseCAP T1000** を検索して、簡単にセットアップを行います。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_template.png" alt="pir" width={800} height="auto" /></p>

デバイスに名前を付け、デバイス EUI を貼り付けてから、**Create my Device** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/c_my_device.png" alt="pir" width={800} height="auto" /></p>

### 認証の生成

**Generate authorization** をクリックして、認証情報をコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/authorization.png" alt="pir" width={800} height="auto" /></p>

## The Things Stack の設定

The Things Stack で、**Integrations** → **Webhooks** に移動し、**Add Webhook** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

TaoIO Webhook テンプレートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTS_web_IO.png" alt="pir" width={800} height="auto" /></p>

Webhook ID を入力して統合に名前を付け、Plugin ID と TagoIO トークンを貼り付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/webhook_TTS.png" alt="pir" width={800} height="auto" /></p>

デバイスが接続された後、TagoIO の **Live Inspector** タブですべての接続を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/live_inspec.png" alt="pir" width={800} height="auto" /></p>

## TagoIO Dashboard (オプション)

ダッシュボードは、データをリアルタイムで視覚化および操作するためのウィジェットを配置する場所です。必要に応じてダッシュボードをカスタマイズできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_dash.png" alt="pir" width={800} height="auto" /></p>

**Dashboard** タブに移動し、ダッシュボードに名前を付けて **Create my Dashboard** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dashfortagoio.png" alt="pir" width={800} height="auto" /></p>

**Location Dashboard**

**Add widget** をクリックし、**Map** タイプを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/maptagoio.png" alt="pir" width={800} height="auto" /></p>

**Data from**: あなたのデバイス -- location

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_done_io.png" alt="pir" width={800} height="auto" /></p>