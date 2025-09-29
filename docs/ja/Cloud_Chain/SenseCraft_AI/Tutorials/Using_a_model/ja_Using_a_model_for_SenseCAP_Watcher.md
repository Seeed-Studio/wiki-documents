---
sidebar_position: 3
description: SenseCAP Watcherでモデルを使用する方法
title: SenseCAP Watcherでモデルを使用する
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/32.webp
slug: /ja/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-watcher
aliases:
  - /ja/sensecraft_ai_pretrained_models_for_watcher
last_update:
  date: 12/03/2024
  author: Citric
---

SenseCAP Watcherは、特定のオブジェクトを認識し、ユーザー定義のタスクに基づいてアラームをトリガーするように設定できる強力な監視デバイスです。Watcherのオブジェクト認識機能を強化するために、ユーザーはSenseCraft AIモデルリポジトリからカスタムモデルを活用できます。このwiki記事では、Watcherの監視タスクでこれらのカスタムモデルを使用するプロセスをガイドします。

## 前提条件

SenseCraft AIモデルリポジトリからカスタムモデルを使用する前に、以下の条件を満たしていることを確認してください：

- **SenseCAP Watcher**：SenseCAP Watcherデバイスをセットアップし、使用準備が整っている必要があります。まだセットアップしていない場合は、[SenseCAP Watcherクイックスタートガイド](https://wiki.seeedstudio.com/ja/getting_started_with_watcher/)の手順に従ってデバイスをセットアップしてください。

- **SenseCraft APP**：モバイルデバイスにSenseCraft APPをインストールしてください。このアプリはiOSとAndroidの両プラットフォームで利用可能で、それぞれのアプリストアからダウンロードできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download APP 🖱️</font></span></strong>
    </a>
</div>

<br />

- **SenseCraftアカウント**：SenseCraft AIモデルリポジトリにアクセスしてカスタムモデルを使用するには、SenseCraft AIアカウントが必要です。アカウントをお持ちでない場合は、SenseCraft APPまたは公式SenseCraft AIウェブサイトからサインアップしてください。

- **ネットワーク接続**：SenseCAP WatcherデバイスとSenseCraft APPを実行するモバイルデバイスがインターネットに接続されていることを確認してください。SenseCraft AIモデルリポジトリにアクセスしてカスタムモデルをダウンロードするには、安定したネットワーク接続が必要です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcher's Video</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Github Repository</font></span></strong>
    </a>
</div>

## ステップ1. SenseCraft APPを通じてWatcherに監視タスクを発行する

まず、SenseCraft APPを開き、設定したいWatcherデバイスに移動します。このアプリは、監視タスクの作成と管理のための直感的なインターフェースを提供します。この例では、*キーボードが認識されたら「Keyboard is awesome」という音声を再生する*というタスクを作成しましょう。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/31.png" style={{width:250, height:'auto'}}/></div>

タスクを作成する際は、Watcherに認識させたいオブジェクトと、そのオブジェクトが検出されたときに実行させたいアクションについて、明確で具体的に指定することが重要です。これにより、Watcherがタスクを正確に理解し実行することができます。

Watcherが適切なタスクを配置する方法について十分に理解していない場合は、[タスク割り当てガイドライン](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)をお読みください。

## ステップ2. カスタムTinyMLモデルの使用を有効にする

APPを通じてタスクを発行した後、タスクカードをクリックして**詳細設定**ページに入ります。このページでは、カスタムTinyMLモデルの選択を含む、監視タスクの様々な側面を細かく調整できます。

ページ上部の**シナリオ**セクションで、**TinyMLモデルを使用**オプションを見つけることができます。このオプションをチェックすることで、WatcherがSenseCraft AIモデルリポジトリからカスタムモデルを使用してオブジェクト認識を行うことができるようになります。モデル名フィールドをクリックして、**キーボード検出**モデルなど、希望するモデルを検索または直接選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/32.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft AIモデルリポジトリには、様々なオブジェクト認識タスクに使用できる幅広い事前訓練済みモデルがホストされています。これらのモデルはWatcherでの使用に最適化されており、高い精度とパフォーマンスを保証します。

:::note

1. モデルを選択した後、Watcherのアラーム語句がクリアされる場合があり、「タスクを実行」ボタンをクリックする前に再入力する必要があります。

2. モデルを選択した後、モデル下部の信頼度閾値を適切に設定してください。デフォルト値は0です。閾値を0のままタスクに直接送信すると、何でも間違ったオブジェクトとして認識される可能性があります。実際の状況に応じてこの値を調整し、最適な検出効果を実現してください。

:::

SenseCraft AIモデルリポジトリで利用可能な事前訓練済みモデルに加えて、独自のカスタム訓練済みモデルを使用することもできます。既存のモデルでカバーされていない特定のオブジェクトやシナリオがある場合は、独自のモデルを訓練してSenseCraft AIコミュニティと共有することができます。

:::tip
Watcherは同じSenseCraftアカウント下のプライベートモデルを検索して使用できます。モデルを公開しないことを選択した場合でも、Watcherがあなたのアカウントにバインドされている限り、プライベートモデルを使用できます。
:::

## ステップ3. タスクの確認と監視の開始

カスタムモデルを選択し、その他のタスク設定詳細を確認した後、「タスクを実行」ボタンをクリックして監視タスクを開始します。このアクションにより、タスクがWatcherデバイスにデプロイされ、監視プロセスが開始されます。

タスクを受信すると、Watcherは自動的にSenseCraft AIモデルリポジトリから選択されたモデルをダウンロードし、アラームアクションをトリガーする基準として使用します。このシームレスな統合により、Watcherが正確なオブジェクト認識のための最新かつ関連性の高いモデルを確実に持つことができます。

カスタムモデルが配置されると、Watcherは指定されたオブジェクトの存在を環境内で継続的に監視します。この例では、Watcherが選択されたモデルを使用してキーボードを認識すると、指定されたアラームアクション（「Keyboard is awesome」という音声の再生）をトリガーします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/33.png" style={{width:600, height:'auto'}}/></div>

カスタムモデルとユーザー定義タスクの組み合わせにより、Watcherは幅広い監視シナリオに適応できます。SenseCraft AIモデルリポジトリの力とSenseCraft APPの柔軟性を活用することで、ユーザーはWatcherの機能を特定のニーズに合わせて調整し、信頼性の高い正確なオブジェクト認識とアラームトリガーを確保できます。

## 結論

SenseCraft AIモデルリポジトリのカスタムモデルを使用することで、SenseCAP Watcherユーザーはデバイスの物体認識機能を強化し、監視およびアラームアプリケーションのシナリオを拡張できます。SenseCraft APPは、これらのカスタムモデルを検索、選択し、Watcherの監視タスクに適用するための直感的なインターフェースを提供します。このwiki記事で説明した手順に従うことで、ユーザーは特定の物体を認識し、独自の要件に基づいてアラームをトリガーするようにWatcherを簡単に設定できます。事前訓練されたモデルを使用する場合でも、SenseCraft AIコミュニティと共有されたカスタム訓練モデルを使用する場合でも、Watcherは様々な監視ニーズに対応する強力で適応性のあるソリューションを提供します。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、様々なサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
