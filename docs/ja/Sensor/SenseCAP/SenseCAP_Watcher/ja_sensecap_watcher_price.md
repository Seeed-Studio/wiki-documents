---
description: この記事では、SenseCraft AI を利用する際の Watcher の料金プランについて説明します。
title: 価格とメリット
image: https://files.seeedstudio.com/wiki/watcher_getting_started/price_month_simpler_1.webp
slug: /ja/watcher_price
sidebar_position: 3
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Watcher 向け SenseCraft AI のプランとメリット

Watcher では、開発者がプロジェクトに人工知能を統合する際に、明確で透明性のある料金体系を提供することを信条としています。開発者ごとに異なるニーズがあることを理解しているため、さまざまなニーズや予算に対応する料金プランを用意しています。ここでは、料金モデルの主要なポイントと各プランに含まれる具体的な機能について説明します。

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
			<th>データ保持期間</th>
			<td align="center">ユーザーごとに保存</td>
			<td align="center">3ヶ月</td>
			<td align="center">3ヶ月</td>
		</tr>
		<tr>
			<th>データ API</th>
			<td align="center">ローカル HTTP API</td>
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
			<td align="center">20,000リクエスト</td>
		</tr>
		<tr>
			<th>LLMとのチャット</th>
			<td align="center">無制限</td>
			<td align="center">200リクエスト/月</td>
			<td align="center">1,000リクエスト</td>
		</tr>
		<tr>
			<th>TinyML モデルとモデルトレーニング</th>
			<td align="center">無制限</td>
			<td align="center">無制限</td>
			<td align="center">無制限</td>
		</tr>
    <tr>
			<th>価格</th>
			<td align="center">無料</td>
			<td align="center">無料</td>
			<td align="center">1回の無料トライアル & 6.9 USD プラン</td>
		</tr>
	</table>
</div>

:::caution
1. SenseCraft Pro の有料プランは各デバイスの EUI に紐づけられています。つまり、SenseCraft Pro を利用したいデバイスが5台ある場合、それぞれ個別に料金を支払う必要があります。

2. SenseCraft Pro の課金サービスはリクエスト数に基づいています。このサービスを購入すると、提供されるリクエスト数を取得できますが、有効期限はありません。

3. SenseCraft Pro は、デバイスが SenseCraft アプリに接続されると自動的にトライアルサービスを有効化します。

4. SenseCraft Pro はトライアルを有効化すると同時に、フォームに記載されたすべてのリクエストを一括でカウントし、使用が終了すると自動的に SenseCraft Standard に切り替わります。
:::

Watcher では、開発者が AI 統合で成功するために必要な柔軟性とスケーラビリティを提供することを目指しています。料金プランは、カジュアルな実験から大規模な展開まで、幅広いニーズに対応するよう設計されています。AI の使用頻度やプロジェクト要件に最適なプランを選択し、SenseCraft AI の可能性を最大限に引き出しましょう。今すぐ始めて、自分のペースで AI の力を体験してください！

## 料金モデルの理解

### データストレージ

すべてのプランには、アラーム画像、タイムスタンプ、アラーム数の保存を含む、**3か月間**のデータストレージが付属しています。

### タスク分析

タスク分析とは、Watcherがユーザーが割り当てたタスクを理解し解釈し、それを小さな実行可能なコンポーネントに分解する能力を指します。これには、タスクが小型モデルを使用して実行可能かどうかの判断、使用する特定のモデルの識別、検出すべき行動の認識、実行すべきアクションの定義が含まれます。Watcherの機能の基盤として、タスク分析はすべてのプランで無料で提供することを目指しています。

### 画像分析

画像分析は、Watcherがキャプチャした画像を高度に解析し、画像内のオブジェクト、活動、コンテキストを識別する機能を指します。この機能は大型モデルの使用を必要とし、使用料が発生します。大型モデルを使用して画像分析を行うタスクが要求されると、リクエストとしてカウントされます。

- **[純粋なクラウドベースのLLMサービス](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/#pure-cloud-based-llm-service)**を使用している場合、リクエストは設定された**キャプチャ頻度**に基づいてカウントされます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/llm-app.png" style={{width:1000, height:'auto'}}/></div>

- **[ローカルAI + クラウドベースのLLMサービス](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/#local-ai--cloud-based-llm-service)**を使用している場合、小型モデルが検出をトリガーした後に大型モデルが画像認識のために呼び出されるとリクエストがカウントされます。リクエスト間の最小間隔は設定された**キャプチャ頻度**より短くなることはありません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local_llm-app.png" style={{width:1000, height:'auto'}}/></div>

画像分析はWatcherの非常に重要な機能の1つでもあります。そのため、SenseCraft Proのサブスクリプションがない場合でも、最低15分間の画像分析サービスを保証しています。

### 大型言語モデルとのチャット

強力な大型言語モデルとの会話型インタラクションは、プレミアム機能であり使用料が発生します。SenseCraftがWatcherとの会話を双方向のやり取りと判断し、Watcherが応答を生成すると、それが1回のリクエストとしてカウントされます。

このカウントが尽きると、Watcherとのチャットはできなくなります。

### モデルリポジトリ、トレーニング、およびアップロード

広範な[モデルリポジトリ](https://sensecraft.seeed.cc/ai/#/model?redirect=%2Fdevice)へのアクセス、ならびに独自のモデルをトレーニングおよびアップロードする機能は、すべてのプランで無料で提供されます。

## サブスクリプション方法

SenseCraft Proをサブスクライブする必要がある場合は、SenseCraft APP内で行う必要があります。最初のステップとして、APPで[SenseCAP Watcherをバインド](https://wiki.seeedstudio.com/ja/getting_started_with_watcher/#step-3-device-binding)する必要があります。現在、SenseCraft ProのサブスクリプションはSenseCAP Watcherユーザーのみ利用可能です。

SenseCAP Watcherのチャット画面に移動し、右上の設定ギアボタンをクリックします。その後、画面下部付近に**サブスクリプション**のオプションが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/subscription.png" style={{width:250, height:'auto'}}/></div>

ここで現在のサブスクリプションサービスの残りリクエスト数を確認できます。また、ここでサブスクリプションを完了することができます。現在、サブスクリプションサービスには3つの異なる価格プランを提供しており、実際の使用状況に応じて異なるプランを選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page1.png" style={{width:250, height:'auto'}}/></div>

希望するプランを確認したら、サービス契約に同意して支払い画面に進んでください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page2.png" style={{width:250, height:'auto'}}/></div>

現在、SenseCraft APPはPaypalを使用した支払いをサポートしています。支払いが成功すると、購入したリクエストがサブスクリプションページに更新されて表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page3.png" style={{width:250, height:'auto'}}/></div>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>