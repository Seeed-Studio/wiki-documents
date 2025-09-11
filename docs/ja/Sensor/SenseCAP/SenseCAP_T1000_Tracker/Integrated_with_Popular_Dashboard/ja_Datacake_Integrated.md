---
description: SenseCAP_T1000_tracker_and_Datacake_Integrated
title: Datacake 統合 (via TTS)
keywords:
- SenseCAP
- トラッカー
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_tracker_Datacake_TTS
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

[Datacake](https://datacake.co/) は多目的な IoT プラットフォームであり、プログラミングスキルを必要とせずにカスタム IoT アプリケーションを構築する可能性を提供します。

IoT アプリケーション構築の需要が増加していることに対応するため、Datacake と協力してテンプレートを作成し、コミュニティが [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) を The Things Network 経由で Datacake に簡単かつ便利に追加できるようにしました。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_sense.png" alt="pir" width={800} height="auto" /></p>

セットアップを開始する前に、まず [SenseCAP T1000 を TTS に接続する](https://wiki.seeedstudio.com/ja/SenseCAP_T1000_tracker_TTN) を確認して、SenseCAP T1000 Tracker を TTS に接続してください。

## Datacake の設定

まず、[Datacake](https://app.datacake.de/signup) でアカウントを登録します。

### ワークスペースを作成する

最初に、Datacake の左上にある **Create Workspace** ボタンをクリックしてワークスペースを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake-workspace.png" alt="pir" width={800} height="auto" /></p>

### デバイスを追加する

左側のメニューで **Devices** をクリックします。  
新しいデバイスを追加するには、右側の **Add Device** ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_add.png" alt="pir" width={800} height="auto" /></p>

**LoRaWAN** を選択して LoRaWAN デバイスを追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/lorawan.png" alt="pir" width={800} height="auto" /></p>

ユーザー向けにテンプレートをアップロードしましたので、製品モデルを選択し、デバイス EUI を貼り付けるだけで簡単に設定できます。

:::info
デバイステンプレート: Seeed SenseCAP T1000
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_tem.png" alt="pir" width={800} height="auto" /></p>

### API トークンを取得する

Datacake ワークスペースの **Account Settings** に移動し、API トークンをコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_api.png" alt="pir" width={800} height="auto" /></p>

## The Things Stack の設定

The Things Stack で **Integrations** → **Webhooks** に移動し、**Add Webhook** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

Datacake Webhook テンプレートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_ts.png" alt="pir" width={800} height="auto" /></p>

Webhook ID を入力して統合に名前を付け、Datacake の API トークンを貼り付けて認証を行います。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_webhook2.png" alt="pir" width={800} height="auto" /></p>

## Datacake ダッシュボード

その後、ダッシュボード でデバイスデータを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_dashbaord.png" alt="pir" width={800} height="auto" /></p>