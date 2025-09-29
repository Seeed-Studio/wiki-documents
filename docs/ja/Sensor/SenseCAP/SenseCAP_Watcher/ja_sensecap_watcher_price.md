---
description: この記事では、SenseCraft AIを使用するWatcherの料金プランについて説明します。
title: 価格と特典
image: https://files.seeedstudio.com/wiki/watcher_getting_started/price_month_simpler_1.webp
slug: /ja/watcher_price
sidebar_position: 3
last_update:
  date: 10/18/2024
  author: Citric
---

# SenseCraft AI for Watcher プランと特典

Watcherでは、開発者がプロジェクトに人工知能を統合するための明確で透明性のある価格体系を提供することを信念としています。すべての開発者には独自の要件があることを理解しているため、さまざまなニーズと予算に対応するよう設計された幅広い料金プランを提供しています。情報に基づいた決定を下せるよう、価格モデルの主要な側面と各プランに含まれる具体的な機能について概説しました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/price_month_simpler.png" style={{width:1000, height:'auto'}}/></div>

## 料金プラン

<div class="table-center">
 <table align="center">
  <tr>
   <th> </th>
      <th>オンプレミス</th>
   <th>SenseCraft Standard</th>
      <th>SenseCraft Pro</th>
  </tr>
  <tr>
   <th>データ保持</th>
   <td align="center">ユーザーによる保存</td>
   <td align="center">3ヶ月</td>
   <td align="center">3ヶ月</td>
  </tr>
  <tr>
   <th>データAPI</th>
   <td align="center">ローカルHTTP API</td>
   <td align="center">MQTT/HTTP API</td>
   <td align="center">MQTT/HTTP API</td>
  </tr>
  <tr>
   <th>タスク分析</th>
   <td align="center">無制限</td>
   <td align="center">無制限</td>
   <td align="center">無制限</td>
  </tr>
  <tr>
   <th>画像分析</th>
   <td align="center">無制限</td>
   <td align="center">15分/リクエスト</td>
   <td align="center">20000リクエスト</td>
  </tr>
  <tr>
   <th>LLMとのチャット</th>
   <td align="center">無制限</td>
   <td align="center">200リクエスト/月</td>
   <td align="center">1000リクエスト</td>
  </tr>
  <tr>
   <th>TinyMLモデルとモデルトレーニング</th>
   <td align="center">無制限</td>
   <td align="center">無制限</td>
   <td align="center">無制限</td>
  </tr>
    <tr>
   <th>価格</th>
   <td align="center">無料</td>
   <td align="center">無料</td>
   <td align="center">1回無料トライアル & 6.9 USDプラン</td>
  </tr>
 </table>
</div>

:::caution

1. SenseCraft Proの有料プランは、各デバイスのEUIに紐づけられています。つまり、SenseCraft Proを使用したい5台のデバイスがある場合、それぞれに対して個別に料金を支払う必要があります。

2. SenseCraft Proの課金サービスは、リクエスト数に基づいています。サービスを購入すると、サービスが提供するリクエスト数を取得でき、有効期限はありません。

3. SenseCraft Proは、デバイスがSenseCraft APPに接続されると、自動的にトライアルサービスを有効化します。

4. SenseCraft Proは、トライアルを有効化し、フォーム内のすべてのリクエストを一度に計上し、使用完了後に自動的にSenseCraft Standardに切り替わります。

:::

Watcherでは、開発者がAI統合で成功するために必要な柔軟性とスケーラビリティを提供することを信念としています。私たちの料金プランは、カジュアルな実験から大規模な展開まで、幅広いニーズに対応するよう設計されています。あなたのAI使用強度とプロジェクト要件に最も適したプランを選択し、WatcherがSenseCraft AIの潜在能力を最大限に引き出すお手伝いをさせてください。今すぐ始めて、あなた自身の条件でAIの力を体験してください！

## 料金モデルの理解

### データストレージ

すべてのプランには、アラーム画像、タイムスタンプ、アラーム回数のストレージを含む、寛大な**3ヶ月間**のデータストレージが付属しています。

### タスク分析

タスク分析とは、ユーザーが割り当てたタスクを理解し解釈し、それらをより小さな実行可能なコンポーネントに分解するWatcherの能力を指します。これには、タスクが小さなモデルを使用して実行できるかどうかの判断、使用する特定のモデルの識別、検出すべき行動の認識、実行すべきアクションの定義が含まれます。Watcherの機能の基盤として、すべてのプランでタスク分析を無料で提供するよう努めています。

### 画像分析

画像分析は、Watcherが撮影した画像の高度な検査を含み、画像内のオブジェクト、活動、コンテキストの識別を可能にします。この機能は大きなモデルの使用を必要とし、使用料金が発生します。タスクが画像分析のために大きなモデルの使用を必要とする場合、リクエストとしてカウントされます。

- **[純粋なクラウドベースLLMサービス](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/#pure-cloud-based-llm-service)**を使用している場合、リクエストは設定した**キャプチャ頻度**に基づいてカウントされます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/llm-app.png" style={{width:1000, height:'auto'}}/></div>

- **[ローカルAI + クラウドベースLLMサービス](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/#local-ai--cloud-based-llm-service)**の場合、小さなモデルが検出をトリガーした後に大きなモデルが画像認識のために呼び出されるとリクエストとしてカウントされます。リクエスト間の最小間隔は、設定した**キャプチャ頻度**より短くならないことにご注意ください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local_llm-app.png" style={{width:1000, height:'auto'}}/></div>

画像分析もWatcherの非常に重要な機能の一つです。そのため、SenseCraft Proにサブスクリプションしていない場合でも、最低15分間の画像分析サービスを使用できることを保証しています。

### 大規模言語モデルとのチャット

私たちの強力な大規模言語モデルとの会話的なやり取りは、使用料金が発生するプレミアム機能です。SenseCraftがWatcherとの会話が双方向のやり取りであると判断し、Watcherが応答を生成した場合、単一のリクエストとしてカウントされます。

このカウントが尽きると、Watcherとチャットすることはできません。

### モデルリポジトリ、トレーニング、アップロード

私たちの広範な[モデルリポジトリ](https://sensecraft.seeed.cc/ai/#/model?redirect=%2Fdevice)へのアクセス、および独自のモデルをトレーニングしアップロードする機能は、すべてのプランで無料で提供されています。

## 購読方法は？

SenseCraft Proを購読する必要がある場合は、SenseCraft APP内で行う必要があります。最初のステップは、APP上で[SenseCAP Watcherをバインド](https://wiki.seeedstudio.com/ja/getting_started_with_watcher/#step-3-device-binding)することです。現在、SenseCraft Proの購読はSenseCAP Watcherユーザーのみが利用できます。

SenseCAP Watcherのチャット画面に移動し、右上角の設定歯車ボタンをクリックし、下部近くに**Subscription**のオプションがあります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/subscription.png" style={{width:250, height:'auto'}}/></div>

ここで現在の購読サービスで残っているリクエスト数を確認できます。そして、ここで購読を完了できます。現在、購読サービスには3つの異なる価格を提供しており、実際の使用状況に応じて異なるプランを選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page1.png" style={{width:250, height:'auto'}}/></div>

希望するプランを確認したら、サービス契約に同意して支払い画面に進んでください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page2.png" style={{width:250, height:'auto'}}/></div>

現在、SenseCraft APPはPaypalを使用した支払いをサポートしています。支払いが成功すると、Subscriptionページで購入したリクエストが更新されたことを確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page3.png" style={{width:250, height:'auto'}}/></div>

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
