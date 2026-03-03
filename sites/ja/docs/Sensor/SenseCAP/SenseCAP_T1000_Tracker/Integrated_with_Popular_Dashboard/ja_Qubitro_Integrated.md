---
description: SenseCAP_T1000_tracker_and_Qubitro_Integrated
title: Qubitro統合（TTS経由）
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_tracker_Qubitro_TTS
last_update:
  date: 8/15/2023
  author: Jessie
---


[Qubitro](https://www.qubitro.com/)は、開発者向けのデバイスデータプラットフォーム（DDP）で、複数のサービスの手動統合を必要とせずに、より迅速にソリューションを開発するために必要なツール、ワークフロー、インフラストラクチャを提供します。Qubitroは人気のあるデータソースをすぐに使えるようサポートし、スケーラブルなインフラストラクチャと組み合わせたプロジェクトでのリアルタイムコラボレーションのためのツールを提供します。

この章の内容では、SenseCAP [T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)をTTN経由でQubitroに接続する方法をユーザーに案内します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/qubitro_in1.png" alt="pir" width={800} height="auto" /></p>

セットアップを開始する前に、[SenseCAP T1000をTTSに接続](https://wiki.seeedstudio.com/ja/SenseCAP_T1000_tracker_TTN)を確認して、まずSenseCAP T1000 TrackerをTTSに接続してください。

## Qubitroの設定

開始するには、[Qubitro](https://portal.qubitro.com/login)でアカウントを作成してください。アカウントを作成することで、自動的にStarterプランになります。


### Qubitroダッシュボードから認証情報を取得

新しいプロジェクトを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_new_project.png" alt="pir" width={800} height="auto" /></p>


**New source**ボタンをクリックし、リストから**The Things Stack**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_source.png" alt="pir" width={800} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_TTS.png" alt="pir" width={800} height="auto" /></p>

そうすると、Project IDとWebhook Signing Keysが取得できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTN_source.png" alt="pir" width={800} height="auto" /></p>


## The Things Stackの設定

[TTSコンソール](https://eu1.cloud.thethings.network/console/)に移動してWebhook統合を設定します。

The Things Stackで、**Integrations** → **Webhooks**に移動し、**Add Webhook**をクリックします。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

QubitroのWebhookテンプレートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTN_Q.png" alt="pir" width={800} height="auto" /></p>

Webhook IDを入力して統合に名前を付け、Qubitroポータルの最初のステップで提供された値を貼り付けます。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_kyes.png" alt="pir" width={800} height="auto" /></p>

**Create Qubitro Webhook**ボタンをクリックし、Qubitroポータルに戻ります。


## デバイスステータス

**Go to project**ボタンをクリックし、次に**Refresh**ボタンをクリックして、デバイスが正常にリストされていることを確認します。


:::info ヒント
統合が設定されると、The Things Stackの同じプロジェクトに接続されているすべてのデバイスが自動的に同期されます。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_status_device.png" alt="pir" width={800} height="auto" /></p>

## Qubitroでデコーダーを設定

デバイスページに移動し、**Create function button**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_create_function.png" alt="pir" width={800} height="auto" /></p>

**Decoder function**を選択し、**Get started**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_function.png" alt="pir" width={800} height="auto" /></p>


ユーザー向けにテンプレートをアップロードしました。製品モデルを選択するだけで迅速にセットアップできます。

:::info
**Formatter type**: Device template<br />
**Manufacturer Brand**: Seeed Studio<br />
**Model**: SenseCAP_T1000
:::

次に**Save and complete**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/function_setup.png" alt="pir" width={800} height="auto" /></p>


## データの確認

デバイスに移動し、**Data**タブをクリックして受信データを確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_data_view.png" alt="pir" width={800} height="auto" /></p>


## ダッシュボードのカスタマイズ（オプション）

**位置情報ダッシュボード**

ダッシュボードページに移動し、**Create new**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dash.png" alt="pir" width={800} height="auto" /></p>

ダッシュボードに名前を付けて**Create**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_dash.png" alt="pir" width={800} height="auto" /></p>


ウィジェットタイプとして**Map**を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_setmap.png" alt="pir" width={800} height="auto" /></p>

デバイスと**coordinates**値を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/coordi.png" alt="pir" width={800} height="auto" /></p>


これで、ダッシュボードで位置情報を確認できます。
他のウィジェットもカスタマイズできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dashboard_view.png" alt="pir" width={800} height="auto" /></p>