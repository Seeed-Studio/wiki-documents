---
description: SenseCAP Watcher 用モデルの使用方法
title: SenseCAP Watcher 用
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/32.webp
slug: /ja/sensecraft_ai_pretrained_models_for_watcher
sidebar_position: 3
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

SenseCAP Watcher は、特定のオブジェクトを認識し、ユーザー定義のタスクに基づいてアラームをトリガーするように設定できる強力な監視デバイスです。Watcher のオブジェクト認識能力を強化するために、SenseCraft AI モデルリポジトリからカスタムモデルを活用することができます。本記事では、これらのカスタムモデルを Watcher の監視タスクで使用する方法を説明します。

## 前提条件

SenseCraft AI モデルリポジトリからカスタムモデルを使用する前に、以下を確認してください：

- **SenseCAP Watcher**: SenseCAP Watcher デバイスをセットアップして使用可能な状態にしてください。まだセットアップしていない場合は、[SenseCAP Watcher クイックスタートガイド](https://wiki.seeedstudio.com/ja/getting_started_with_watcher/)の手順に従ってデバイスをセットアップしてください。

- **SenseCraft APP**: SenseCraft APP をモバイルデバイスにインストールしてください。このアプリは iOS および Android プラットフォームで利用可能で、それぞれのアプリストアからダウンロードできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> アプリをダウンロード 🖱️</font></span></strong>
    </a>
</div>

<br />

- **SenseCraft アカウント**: SenseCraft AI モデルリポジトリにアクセスしてカスタムモデルを使用するには、SenseCraft AI アカウントが必要です。アカウントをお持ちでない場合は、SenseCraft APP または公式 SenseCraft AI ウェブサイトを通じてサインアップしてください。

- **ネットワーク接続**: SenseCAP Watcher デバイスと SenseCraft APP を実行しているモバイルデバイスがインターネットに接続されていることを確認してください。SenseCraft AI モデルリポジトリにアクセスしてカスタムモデルをダウンロードするには、安定したネットワーク接続が必要です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcher のビデオを見る</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Github リポジトリ</font></span></strong>
    </a>
</div>

## ステップ 1. SenseCraft APP を使用して Watcher に監視タスクを発行する

まず、SenseCraft APP を開き、設定したい Watcher デバイスに移動します。このアプリは、監視タスクを作成および管理するための直感的なインターフェースを提供します。この例では、「キーボードが認識された場合、『Keyboard is awesome』という音を再生する」というタスクを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/31.png" style={{width:250, height:'auto'}}/></div>

タスクを作成する際には、Watcher に認識させたいオブジェクトと、そのオブジェクトが検出された際に実行させたいアクションを明確かつ具体的に指定することが重要です。これにより、Watcher がタスクを正確に理解し実行できるようになります。

Watcher に適切なタスクを割り当てる方法について詳しく知りたい場合は、[タスク割り当てガイドライン](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)を参照してください。

## ステップ 2. カスタム TinyML モデルの使用を有効化する

APP を通じてタスクを発行した後、タスクカードをクリックして **詳細設定** ページに移動します。このページでは、監視タスクのさまざまな側面を微調整でき、カスタム TinyML モデルの選択も含まれます。

ページ上部の **シナリオ** セクションに **TinyML モデルを使用** オプションがあります。このオプションをチェックすることで、SenseCraft AI モデルリポジトリからカスタムモデルを使用してオブジェクト認識を行うように Watcher を設定できます。モデル名フィールドをクリックして検索するか、直接希望するモデルを選択します。例えば、**キーボード検出**モデルなどです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/32.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft AI モデルリポジトリには、さまざまなオブジェクト認識タスクに使用できる幅広い事前学習済みモデルがホストされています。これらのモデルは Watcher での使用に最適化されており、高い精度とパフォーマンスを保証します。

:::note
1. モデルを選択した後、Watcher のアラームワードがクリアされる可能性があり、タスクを実行する前に再入力する必要があります。

2. モデルを選択した後、モデルの下にある信頼度閾値を適切に設定してください。デフォルト値は 0 です。閾値を 0 のままタスクに送信すると、誤ったオブジェクトとして認識される可能性があります。最適な検出効果を得るために、実際の状況に応じてこの値を調整してください。
:::

SenseCraft AI モデルリポジトリにある事前学習済みモデルに加えて、独自にカスタムトレーニングしたモデルを使用することもできます。既存のモデルでカバーされていない特定のオブジェクトやシナリオがある場合は、独自のモデルをトレーニングして SenseCraft AI コミュニティと共有することができます。

:::tip
Watcher は同じ SenseCraft アカウント内でプライベートモデルを検索して使用することができます。モデルを公開しない選択をした場合でも、Watcher がアカウントに紐付けられている限り、プライベートモデルを使用することが可能です。
:::

## ステップ 3. タスクの確認と監視の開始

カスタムモデルを選択し、その他のタスク設定の詳細を確認した後、「Run Task」ボタンをクリックして監視タスクを開始します。この操作により、タスクが Watcher デバイスにデプロイされ、監視プロセスが開始されます。

タスクを受信すると、Watcher は SenseCraft AI モデルリポジトリから選択したモデルを自動的にダウンロードし、それを基にアラームアクションをトリガーします。このシームレスな統合により、Watcher は正確なオブジェクト認識のために最新かつ関連性の高いモデルを使用できます。

カスタムモデルが設定されると、Watcher は指定されたオブジェクトの存在を継続的に監視します。この例では、Watcher が選択したモデルを使用してキーボードを認識すると、「Keyboard is awesome」という音声を再生する指定されたアラームアクションをトリガーします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/33.png" style={{width:600, height:'auto'}}/></div>

カスタムモデルとユーザー定義タスクの組み合わせにより、Watcher は幅広い監視シナリオに適応できます。SenseCraft AI モデルリポジトリのパワーと SenseCraft APP の柔軟性を活用することで、ユーザーは Watcher の機能を特定のニーズに合わせて調整し、信頼性の高い正確なオブジェクト認識とアラームトリガーを実現できます。

## 結論

SenseCraft AIモデルリポジトリからカスタムモデルを使用することで、SenseCAP Watcherユーザーはデバイスの物体認識能力を向上させ、監視およびアラームの適用シナリオを拡張することができます。SenseCraft APPは、これらのカスタムモデルをWatcherの監視タスクに適用するための検索、選択、適用を直感的に行えるインターフェースを提供します。このWiki記事で説明されている手順に従うことで、ユーザーはWatcherを簡単に設定し、特定の物体を認識し、独自の要件に基づいてアラームをトリガーすることができます。事前にトレーニングされたモデルを使用する場合でも、SenseCraft AIコミュニティと共有されたカスタムトレーニングモデルを使用する場合でも、Watcherはさまざまな監視ニーズに対応する強力で柔軟なソリューションを提供します。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>