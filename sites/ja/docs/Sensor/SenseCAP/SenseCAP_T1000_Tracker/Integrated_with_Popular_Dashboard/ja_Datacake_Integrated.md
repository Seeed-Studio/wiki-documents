---
description: SenseCAP_T1000_tracker_and_Datacake_Integrated
title: Datacake統合（TTS経由）
keywords:
- SenseCAP
- tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_tracker_Datacake_TTS
last_update:
  date: 8/15/2023
  author: Jessie
---

[Datacake](https://datacake.co/)は多目的IoTプラットフォームで、プログラミングスキルを必要とせずにカスタムIoTアプリケーションを構築する可能性を提供します。

IoTアプリケーション構築の需要の高まりに応えるため、私たちはDatacakeと協力してテンプレートを作成し、コミュニティが[SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)をThe Things Network経由でDatacakeに便利かつ簡単に追加できるようにしました。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_sense.png" alt="pir" width={800} height="auto" /></p>

セットアップを開始する前に、[SenseCAP T1000をTTSに接続](https://wiki.seeedstudio.com/ja/SenseCAP_T1000_tracker_TTN)を確認して、まずSenseCAP T1000 TrackerをTTSに接続してください。

## Datacakeの設定

まず、[Datacake](https://app.datacake.de/signup)でアカウントを登録してください。

### ワークスペースの作成

まず、左上角の**Create Workspace**ボタンに移動してDatacakeでワークスペースを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake-workspace.png" alt="pir" width={800} height="auto" /></p>

### デバイスの追加

左側のメニューで**Devices**をクリックします。
新しいデバイスを追加するには、右側の**Add Device**ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_add.png" alt="pir" width={800} height="auto" /></p>

LoRaWANデバイスを追加するために**LoRaWAN**を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/lorawan.png" alt="pir" width={800} height="auto" /></p>

ユーザー向けにテンプレートをアップロードしました。製品モデルを選択してデバイスEUIを貼り付けるだけで、迅速にセットアップできます。

:::info
デバイステンプレート: Seeed SenseCAP T1000
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_tem.png" alt="pir" width={800} height="auto" /></p>

### APIトークンの取得

Datacakeワークスペースの**Account Settings**に移動し、APIトークンをコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_api.png" alt="pir" width={800} height="auto" /></p>

## The Things Stackの設定

The Things Stackで、**Integrations** → **Webhooks**に移動し、**Add Webhook**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

Datacake Webhookテンプレートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_ts.png" alt="pir" width={800} height="auto" /></p>

Webhook IDを入力して統合に名前を付け、認証用にDatacakeからのAPIトークンを貼り付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_webhook2.png" alt="pir" width={800} height="auto" /></p>

## Datacakeダッシュボード

その後、ダッシュボードでデバイスデータを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_dashbaord.png" alt="pir" width={800} height="auto" /></p>