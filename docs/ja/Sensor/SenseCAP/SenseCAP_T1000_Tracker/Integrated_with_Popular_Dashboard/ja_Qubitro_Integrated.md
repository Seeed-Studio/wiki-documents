---
description: SenseCAP_T1000_tracker_and_Qubitro_Integrated
title: Qubitro 統合 (via TTS)
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_tracker_Qubitro_TTS
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

[Qubitro](https://www.qubitro.com/) は開発者向けのデバイスデータプラットフォーム (DDP) であり、複数のサービスを手動で統合する必要なく、ソリューションを迅速に開発するために必要なツール、ワークフロー、およびインフラストラクチャを提供します。Qubitro は、人気のあるデータソースを標準でサポートし、スケーラブルなインフラストラクチャと組み合わせてプロジェクトでリアルタイムのコラボレーションを可能にするツールを提供します。

この章の内容では、SenseCAP [T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) を TTN を介して Qubitro に接続する方法をユーザーに案内します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/qubitro_in1.png" alt="pir" width={800} height="auto" /></p>

セットアップを開始する前に、まず [SenseCAP T1000 を TTS に接続する](https://wiki.seeedstudio.com/ja/SenseCAP_T1000_tracker_TTN) を確認して、SenseCAP T1000 Tracker を TTS に接続してください。

## Qubitro の設定

まず、[Qubitro](https://portal.qubitro.com/login) にアカウントを作成してください。アカウントを作成すると、自動的にスタータープランに登録されます。

### Qubitro Dashboard から資格情報を取得する

新しいプロジェクトを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_new_project.png" alt="pir" width={800} height="auto" /></p>

**New source** ボタンをクリックし、リスト内の **The Things Stack** を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_source.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_TTS.png" alt="pir" width={800} height="auto" /></p>

その後、プロジェクト ID と Webhook Signing Keys を取得します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTN_source.png" alt="pir" width={800} height="auto" /></p>

## The Things Stack の設定

Webhook 統合を設定するために [TTS Console](https://eu1.cloud.thethings.network/console/) に移動します。

The Things Stack で、**Integrations** → **Webhooks** に移動し、**Add Webhook** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

Qubitro Webhook テンプレートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTN_Q.png" alt="pir" width={800} height="auto" /></p>

Webhook ID を入力して統合に名前を付け、Qubitro ポータルの最初のステップで提供された値を貼り付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_kyes.png" alt="pir" width={800} height="auto" /></p>

**Create Qubitro Webhook** ボタンをクリックし、Qubitro ポータルに戻ります。

## デバイスステータス

**Go to project** ボタンをクリックし、その後 **Refresh** ボタンをクリックして、デバイスが正常にリストされていることを確認します。

:::info Tip
統合が設定されると、The Things Stack 上の同じプロジェクトに接続されているすべてのデバイスが自動的に同期されます。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_status_device.png" alt="pir" width={800} height="auto" /></p>

## Qubitro でデコーダーを設定する

デバイスページに移動し、**Create function button** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_create_function.png" alt="pir" width={800} height="auto" /></p>

**Decoder function** を選択し、**Get started** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_function.png" alt="pir" width={800} height="auto" /></p>

ユーザー向けにテンプレートをアップロードしました。製品モデルを選択するだけで迅速に設定できます。

:::info
**Formatter type**: Device template<br />
**Manufacturer Brand**: Seeed Studio<br />
**Model**: SenseCAP_T1000
:::

その後、**Save and complete** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/function_setup.png" alt="pir" width={800} height="auto" /></p>

## データを確認する

デバイスに移動し、**Data** タブをクリックして受信データを確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_data_view.png" alt="pir" width={800} height="auto" /></p>

## ダッシュボードをカスタマイズする (オプション)

**Location Dashboard**

ダッシュボードページに移動し、**Create new** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dash.png" alt="pir" width={800} height="auto" /></p>

ダッシュボードに名前を付け、**Create** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_dash.png" alt="pir" width={800} height="auto" /></p>

ウィジェットタイプとして **Map** を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_setmap.png" alt="pir" width={800} height="auto" /></p>

デバイスと **coordinates** 値を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/coordi.png" alt="pir" width={800} height="auto" /></p>

その後、ダッシュボードで位置情報を確認できます。
他のウィジェットもカスタマイズすることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dashboard_view.png" alt="pir" width={800} height="auto" /></p>