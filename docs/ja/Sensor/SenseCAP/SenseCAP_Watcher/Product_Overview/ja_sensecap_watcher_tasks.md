---
description: SenseCraftエコシステム内でWatcherが実行できるさまざまなタスクの種類とその整理方法についての確固たる基礎を築くことができます。
title: タスク割り当てガイドライン
image: https://files.seeedstudio.com/wiki/watcher_getting_started/85_1.webp
slug: /ja/getting_started_with_watcher_task
sidebar_position: 3
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# SenseCAP Watcher タスク割り当てガイドライン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/85.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcherのビデオを見る</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Githubリポジトリ</font></span></strong>
    </a>
</div><br />

Watcherへのタスク割り当てに関するチュートリアルへようこそ。このガイドでは、Watcherにコマンドを発行するプロセスを説明し、監視ニーズに応じてその機能を効果的に活用する方法を学びます。

Watcherは、ユーザーが発行するコマンドに基づいてさまざまな監視および分析タスクを実行する強力なツールです。正確な指示を送ることで、特定のターゲットに集中し、データを収集し、貴重な洞察を提供するようにWatcherを指示できます。

以下のセクションでは、タスクの分類、モデル選択、および価格情報の詳細について説明します。このガイドの目的は、Watcherに効率的にタスクを割り当て、その機能を最大限に活用するための知識とスキルを提供することです。利用可能なタスクの種類を探り、要件に適したモデルを選択する方法を案内し、関連するコストについて明確にします。

このチュートリアルを終える頃には、監視ニーズをWatcherに効果的に伝える方法をしっかりと理解できるようになります。自信を持ってタスクを割り当て、設定をカスタマイズし、望む結果を得ることができるようになります。

Watcherを完全にコントロールし、その潜在能力を解き放つ準備をしましょう。タスク割り当ての旅に出発し、Watcherが監視目標の達成にどのように役立つかを発見しましょう！

## SenseCAP Watcher 高度な設定

<div class="table-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ono_v759R0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

SenseCAP Watcherは、インテリジェントな場所向けの初の物理的LLMエージェントであり、シーンの監視、アクションのトリガー、コマンドに基づくインタラクションが可能です。このビデオでは、SenseCAP Watcherがタスク分析に基づいてシーントリガーモデルを選択する方法を紹介します：オンデバイスモデルとLLMモデル。また、RGBライトの設定、ディスプレイ＆サウンドアラートの構成、通知プッシュモード（APP、UART、HTTP）の設定方法についても説明します。

## タスクの概念

Watcherを使い始めるにあたり、Watcherがあなたの指示を理解できるようにするためには、タスクの概要とタスク設定時の注意点について記載されたこの記事を読む必要があります。

### タスクの3つの主要な構成要素

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_1.png" style={{width:1000, height:'auto'}}/></div>

Watcherのタスクは以下の3つの主要な構成要素で構成されています：

- **オブジェクト**: 指定されたオブジェクトは、Watcherが呼び出すローカル認識タスクモデルに直接影響を与えます。SenseCraft AIに選択されたモデルが存在しない場合、クラウドベースの大規模モデルエンジンが直接呼び出されて認識が行われます。

- **何かをする（オプション）**: タスク指示にアクションの説明が含まれるかどうかによって、Watcherがクラウドベースの大規模言語モデルエンジンを呼び出すかどうかが決まります。

- **アクション**: Watcherのタスクがトリガーされた際に実行されるアクション。例として、RGBライトの点滅、プッシュ通知、Watcherの音声、SNSなどがあります。

これらの構成要素は、特定のタスクがトリガーされた際のWatcherの動作を定義するために連携します。オブジェクト、オプションのアクション説明、そして希望するアクションを組み合わせることで、ユーザーは監視ニーズに合わせたカスタムタスクを作成できます。

:::caution
画像に示されているタスク例は、読みやすさと理解を助けるためのものであり、必ずしも画像に示された通りの構文や条件である必要はありません。ただし、提供するタスク指示には上記の3つの構成要素が含まれていることを確認してください。
:::

次に、いくつかのタスク例を通じて、関連する概念やサービスについて理解を深めていきます。

### WatcherのローカルAIサービス

Watcherタスクでオブジェクトとして「人」を設定すると、デバイスは自動的にローカルAIサービスモードを選択します。このモードでは、WatcherはまずSenseCraft AIライブラリに人検出用の事前学習モデルが存在するかどうかを確認します。モデルが存在する場合、Watcherはそれをダウンロードし、クラウドベースのサービスに依存せずにデバイス上でローカルに検出を行います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_2.png" style={{width:1000, height:'auto'}}/></div>

画像はこのプロセスを示しています。「人」がオブジェクトとして指定されると、Watcherは**ローカルAIモデル**を呼び出して人検出を行います。モデルはデバイスのカメラで撮影されたビデオフィードを分析し、**リアルタイム**で人の存在を検出します。人が識別されると、Watcherは指定されたアクションをトリガーします。この例では、デバイスのスピーカーを通じて「こんにちは、私はWatcherです」という音声を再生します。

ローカルAIサービスを活用することで、Watcherはクラウドや大規模言語モデル（LLM）を使用せずに効率的かつ独立して人検出を行うことができます。これにより、迅速な応答時間が確保され、すべての処理がデバイス上で行われるため、ユーザーのプライバシーが保護されます。

ただし、必要なオブジェクトモデルがSenseCraft AIライブラリに存在しない場合、WatcherはクラウドベースのLLMサービスを使用して検出を行います。このフォールバックメカニズムにより、特定のモデルがローカルに存在しない場合でもデバイスがタスクを実行できるようになります。[Pure LLMモード](#pure-llm-mode)を参照してください。

ローカルAIサービスを使用すると判断されるタスクを設定した場合、SenseCraft APPのタスク設定ページは以下のように表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local-app.png" style={{width:1000, height:'auto'}}/></div>

### WatcherのクラウドベースLLMサービス

#### 純粋なクラウドベースLLMサービス

Watcherタスクでオブジェクトとして「ろうそく」を設定した場合、SenseCraft AIライブラリにろうそく検出用の事前学習モデルが存在しない場合、デバイスは**自動的にクラウドベースの大規模言語モデル（LLM）サービスを使用して検出を行います**。

:::danger
SenseCraft AIの一部のサービスを使用する際には料金が発生する場合があります。詳細については以下のドキュメントを参照してください：

**[SenseCraft AI for Watcherのプランと特典](https://wiki.seeedstudio.com/ja/watcher_price/)**
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_3.png" style={{width:1000, height:'auto'}}/></div>

画像に示されているように、WatcherがLLMサービスを使用してろうそくを検出すると、指定されたアクションを実行します。この例では、接続されたモバイルアプリにプッシュ通知を送信します。**これにより、デバイスがローカルで検出を行えなかった場合でも、ユーザーにろうそくの存在を迅速に通知することができます**。

クラウドベースのLLMサービスの力を活用することで、SenseCraft AIライブラリに特定のモデルが存在しない場合でも、Watcherはオブジェクトを正確に識別し、適切なアクションをトリガーすることができます。このフォールバックメカニズムにより、デバイスの汎用性が向上し、幅広い検出シナリオに対応できるようになります。

ただし、クラウドベースのLLMサービスを使用する場合、データがリモートで処理されるため、ローカル検出と比較して応答時間が若干遅くなる可能性があります。また、このモードではデバイスがクラウドサービスと通信するためにアクティブなインターネット接続が必要です。

:::note
ユーザーはこれら3つのタスクモードについて基本的な理解を持つだけで十分であり、完全なプロセスや詳細な仕組みを深く掘り下げる必要はありません。これらのモードを紹介する目的は、タスク設定時に異なるユーザーインターフェースに遭遇した際に混乱や不安を感じないようにすることです。各モードには独自のアプリ設定ページがあり、選択したモードに応じて異なる場合があります。ユーザーは特定の要件に基づいて指示に従い、Watcherタスクを効果的に設定してください。
:::

純粋なLLMを使用すると判断されるタスクを設定した場合、SenseCraft APPのタスク設定ページは以下のように表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/llm-app.png" style={{width:1000, height:'auto'}}/></div>

タスクの設定および実行機能に加えて、完全クラウドベースのLLMサービスでは、ユーザーが言語学習モデル（LLM）と純粋なテキストベースの会話を行うことも可能です。

この機能により、Watcherデバイスや画像ベースの入力を必要とせずに、LLMと直接対話することができます。チャットインターフェースにメッセージや質問を入力するだけで、LLMがそれに応じて回答します。詳細については[タスクを入力する](#type-the-task)を参照してください。

#### ローカルAI + クラウドベースLLMサービス

Watcherデバイスの3番目の動作モードは、ローカルAIサービスとクラウドベースLLMサービスの組み合わせです。**このモードは、WatcherのローカルAIサービスが指定されたオブジェクトを認識したものの、そのオブジェクトの動作や状態を判断するためにLLMクラウドサービスによるさらなる分析が必要な場合に使用されます**。

:::danger
SenseCraft AIの一部のサービスを利用する際には料金が発生する場合があります。詳細については以下のドキュメントを参照してください：

**[SenseCraft AI for Watcher Plans and Benefits](https://wiki.seeedstudio.com/ja/watcher_price/)**
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_4.png" style={{width:1000, height:'auto'}}/></div>

画像に示されている例では、オブジェクトが「猫」に設定され、アクションが「ライトの点滅」に設定されています。Watcherがペット検出用のローカルAIモデルを使用して猫を検出すると、LLMクラウドサービスを呼び出して猫の動作を分析し、「食事中」であるかどうかを判断します。

LLMクラウドサービスが猫が食事中であることを確認すると、Watcherは指定されたアクションを実行します。この場合、デバイスのRGBライトを点滅させます。このローカルおよびクラウドベースのサービスの組み合わせにより、Watcherはオブジェクトを識別するだけでなく、その動作や状態を理解する高度な検出と分析が可能になります。

ローカルAIサービスとLLMクラウドサービスの両方を活用することで、Watcherは複数のレベルの分析を必要とする複雑なシナリオに対応できます。ローカルAIモデルはまず指定されたオブジェクトの存在を検出し、LLMクラウドサービスがオブジェクトの動作に関する追加のコンテキストと理解を提供します。

ローカル+LLMを使用すると判断されるタスクを配置した場合、SenseCraft APPのタスク設定ページは以下のように表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local_llm-app.png" style={{width:1000, height:'auto'}}/></div>

### 要約

効率、コスト、選択基準に基づく3つのモードの比較表を以下に示します：

<div class="table-center">
	<table align="center">
		<tr>
            <th rowspan="2"> </th>
			<th>完全ローカルサービス</th>
			<th colspan="2">クラウドサービス依存</th>
		</tr>
        <tr>
            <th>ローカルAIサービス</th>
			<th>クラウドベースLLMサービス</th>
			<th>ローカルAI + クラウドベースLLMサービス</th>
		</tr>
		<tr>
            <th>効率</th>
			<td align="center">アラーム時間: <strong>2秒</strong><br />アラームをトリガーする最小時間間隔: <strong>5秒</strong></td>
			<td align="center">アラーム時間: <strong>10秒</strong><br />アラームをトリガーする最小時間間隔: <strong>30秒</strong></td>
			<td align="center">アラーム時間: <strong>10秒</strong><br />アラームをトリガーする最小時間間隔: <strong>30秒</strong></td>
		</tr>
		<tr>
            <th>コスト</th>
			<td align="center">❎</td>
			<td align="center">☑️</td>
			<td align="center">☑️</td>
		</tr>
		<tr>
            <th>選択方法</th>
            <td><strong>利点</strong>: 完全にWatcherのローカルAIサービスに依存し、追加費用が発生せず、認識および応答時間が速い。ターゲットモデルがある場合、理論的には認識精度も高くなる。<br /><strong>欠点</strong>: モデルがない場合はサービスを利用できない。オブジェクトの動作分析が必要な場合、ローカルサービスのみでは利用できない。</td>
            <td><strong>利点</strong>: SenseCraft AIライブラリに事前学習モデルがなくても、幅広いオブジェクトを認識可能。オブジェクトの動作分析が必要なタスクに適している。<br /><strong>欠点</strong>: インターネット接続が必要。クラウドベースサービスの利用には追加費用が発生する可能性があり、特に無料の公開テストフェーズ終了後に費用がかかる。ローカルAIサービスモードと比較して応答時間がやや遅い。</td>
            <td><strong>利点</strong>: クラウドベースLLMサービスモードと比較して、このモードではローカルAIサービスを使用して非特定オブジェクトをフィルタリングした後にクラウドベースLLMサービスを呼び出す。常に存在するわけではないがモデルが利用可能なオブジェクトの場合、このモードは特定されたオブジェクトを含む画像に対してのみ動作分析を行うことでクラウドベースLLMサービスの呼び出しコストを大幅に削減できる。<br /><strong>欠点</strong>: ローカルAIサービスと組み合わせてクラウドベースLLMサービスを使用する場合でも、追加費用が発生する可能性がある。ただし、クラウドベースLLMサービスモードを単独で使用する場合よりも費用は低くなる。クラウドベースの動作分析にはインターネット接続が必要。ローカルAIサービスモードと比較して全体的な応答時間がやや遅い。</td>
		</tr>
	</table>
</div>

1. 「アラーム時間」の意味はモードによって異なります：

    - **ローカルAIサービスモード**:
        「アラーム時間」は、アラームがトリガーされた後にWatcherのRGBライトまたはスピーカーがアクティブな状態を維持する時間を指します。

    - **クラウドベースLLMサービスモード**:
        「アラーム時間」は、RGBライトとスピーカーのアクティブ時間だけでなく、表示されているカメラスクリーンが一時停止される時間も含みます。この一時停止は、画像をクラウドサーバーに転送して分析するために必要な時間を考慮しています。

2. 「アラームをトリガーする最小時間間隔」の設定は「アラーム時間」とは独立しており、連続的な関係を表しているわけではありません。この設定は、2つの連続したアラームトリガーの間に経過しなければならない最小時間を指定します。タスクを設定する際、ユーザーはこの最小間隔より短いアラーム時間を設定することは**許可されていません**。この制限により、システムが各アラームイベントを処理し応答するための十分な時間を確保し、次のアラームがトリガーされる前に準備が整うようにします。この制限は、システムの処理時間を確保し、過剰または連続的なアラームトリガーを防止することで、安定性と信頼性の高い運用を促進します。

:::danger
SenseCraft AIの一部のサービスを利用する際には料金が発生する場合があります。詳細については以下のドキュメントをご参照ください：

**[SenseCraft AI for Watcher Plans and Benefits](https://wiki.seeedstudio.com/ja/watcher_price/)**
:::

## SenseCraft APPを使用してタスクを配置する

タスクの分類と基本概念を理解した後、SenseCraft APPでWatcherにコマンドを発行する方法を詳しく見ていきましょう。Watcherのマッチングプロセスを完了し、Watcherのチャットページに到達したと仮定します。まだデバイスをバインドする方法がわからない場合は、[デバイスのバインドとOTAアップグレード](https://wiki.seeedstudio.com/ja/getting_started_with_watcher/#device-binding-and-ota-upgrade)をご参照ください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/workflow.png" style={{width:1000, height:'auto'}}/></div>

### タスクを入力する

各Watcherデバイスには、SenseCraft APP内に専用のチャットウィンドウがあります。特定のWatcherにコマンドを発行するには、そのチャットウィンドウに移動し、入力フィールドを使用して希望のコマンドを入力します。コマンドを手動で入力するか、キーボードの音声入力機能を使用して便利に入力することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/21.png" style={{width:250, height:'auto'}}/></div>

コマンドを作成する際には、Watcherがタスクを正確に理解し実行できるよう、明確で詳細な指示を提供することが重要です。コマンドには以下の情報を含める必要があります：

- Watcherに認識させたい特定のオブジェクトまたはオブジェクト群。

- 該当する場合、オブジェクトに関連する追加のアクションや動作。

- オブジェクトを認識した際にWatcherに期待するアクションや応答。

包括的な指示を提供することで、Watcherが割り当てられたタスクを効果的に理解し実行できるようになります。最良の結果を得るために、できるだけ具体的かつ詳細に記述してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/22.png" style={{width:250, height:'auto'}}/></div>

タスクの設定および実行機能に加えて、Pure CloudベースのLLMサービスを使用すると、ユーザーは言語学習モデル（LLM）と純粋なテキストベースの会話を行うこともできます。

Pure CloudベースのLLMサービスのテキストベースのチャット機能により、ユーザーはLLMと直接対話する新しい可能性が開かれます。物理的なWatcherデバイスを必要とせずに、LLMの知識や機能にアクセスする便利な方法を提供します。

質問がある場合、特定のトピックについての支援が必要な場合、またはLLMの機能を探求したい場合、このテキストベースのチャット機能はAIモデルとシームレスかつ直感的にコミュニケーションを取る方法を提供します。

情報が必要なとき、ガイダンスが必要なとき、または単にLLMとの有益な会話を楽しみたいときは、この機能を自由に活用してください。

:::danger
SenseCraft AIの一部のサービスを利用する際には料金が発生する場合があります。詳細については以下のドキュメントをご参照ください：

**[SenseCraft AI for Watcher Plans and Benefits](https://wiki.seeedstudio.com/ja/watcher_price/)**
:::

### 分解タスクを識別または設定する

タスクコマンドの入力を完了したら、以下の手順に従ってコマンドを確認し実行してください：

1. チャットウィンドウの右下にある**送信**ボタンをクリックして、コマンドを送信します。

2. バックエンドシステムがタスクコマンドを処理し、その構成要素に分解します。

3. 小さなカードが返され、Watcherがタスクをどのように解釈したかが表示されます。このカードには主に以下の情報が表示されます：

   - **When**: タスク実行を開始する条件またはトリガー。
   - **Do**: オブジェクト認識が成功した際にWatcherが実行するアクションまたは応答。
   - **Capture Frequency**: タスクがトリガーされ実行される時間間隔。

4. カードに表示された情報を確認し、Watcherがタスク指示を正しく理解していることを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/23.png" style={{width:250, height:'auto'}}/></div>

5. Watcherの解釈に満足した場合は、カード上の**実行**ボタンをクリックしてタスクをWatcherにデプロイし、実行を開始します。

6. （オプション）タスク分解の詳細を確認するには、カード上の**詳細設定**ボタンをクリックします。これにより、タスク設定に関する追加情報が提供されます。

    タスク設定に誤解がある場合や設定を変更したい場合は、「詳細設定」オプションを使用して設定を手動で変更してください。[タスクの概念](#concept-of-the-task)の章で説明されているように、詳細設定ページはモードによって異なります。実際の状況に応じて設定項目を選択または変更するだけです。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/24.png" style={{width:800, height:'auto'}}/></div>

    「詳細設定」セクションでは、タスク設定を微調整するためのさまざまな設定を見つけることができます。以下は利用可能な設定の概要です：

    1. **ローカルモデルを使用**:
    - この設定は、タスクがローカルAIサービスの使用を必要とする場合に表示されます。
    - システムは、提供されたタスクに基づいてSenseCraft AIライブラリから適切なモデルを自動的に選択します。
    - ローカルAIサービスの使用を無効にするオプションがありますが、これにより画像分析のためにクラウドベースのサービスが直接利用されます。
    - モデル選択を手動で変更し、SenseCraft AIライブラリ内の公開モデルから選択することもできます。
    - タスクが完全にローカルである場合、「ローカルモデルを使用」オプションを無効にすることは許可されていません。<br /><br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/25.png" style={{width:250, height:'auto'}}/></div>

2. **シナリオ**:
- このセクションでは、アクションのトリガー条件を表示します。
- 必要に応じて、クラスの数を調整したり、トリガー文を変更したりできます。
- より複雑なシナリオが関与する場合は、条件を追加することで柔軟に調整できます。<br /><br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/26.png" style={{width:600, height:'auto'}}/></div>

3. **アクション**:
- ここでは、アラームがトリガーされた後の Watcher の動作を設定できます。
- RGB ライトの点灯、スピーカーを通じた音の再生、通知の送信など、Watcher に実行させたいアクションを指定します。<br /><br />

4. **キャプチャ頻度**:
- この設定は、タスクが実行される時間間隔を決定します。
- 監視間隔やタスクの具体的な要件に基づいて頻度を調整してください。<br /><br />

:::caution
「詳細設定」セクションでは、**キャプチャ頻度**のデフォルト値が自動的に設定されます。Watcher Cloud ベースの LLM サービスでは、「キャプチャ頻度」を**60 秒未満に設定することはできません**。Watcher Local AI サービスを使用している場合、「キャプチャ頻度」の設定は利用できません。デバイスはリアルタイムでアラートを提供します。
:::

5. **作業時間枠**:
- この設定では、タスクがアクティブになる時間範囲を定義できます。
- タスクの開始時刻と終了時刻を指定し、指定された時間枠内でのみ監視が行われるようにします。
- この設定が正しく機能するためには、Watcher の内部時計がモバイルデバイスのシステム時間と同期している必要があります。両者の間に不一致があると、タスクフローに問題が生じる可能性があります。<br />

「詳細設定」セクションでこれらの設定を探索し、構成することで、タスクを特定のニーズに合わせてカスタマイズできます。各設定を慎重に確認し調整することで、最適なパフォーマンスと監視目標との整合性を確保してください。

7. すべてが正しく設定され、期待に合致していることを確認したら、**実行**ボタンをクリックしてタスクの実行を開始します。

これらの手順に従うことで、Watcher がタスクコマンドを正確に理解し、実行が意図した目的に沿っていることを確認できます。確認プロセスでは、最終的なレビューと必要に応じた調整を行う機会が得られます。

### タスクの実行

「詳細設定」セクションでタスク設定を慎重に確認し構成した後、Watcher デバイスにタスクをデプロイする準備が整います。タスクの実行を開始するには、以下の手順に従ってください：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/27.png" style={{width:800, height:'auto'}}/></div>

1. タスク設定カードにある「実行」ボタンをクリックします。

2. 「実行」をクリックすると、設定されたタスクがネットワークを介して Watcher に送信されます。

3. タスクのデプロイプロセスには時間がかかる場合があります。これは主に以下の2つの段階を含みます：

   - タスク受信：Watcher は SenseCraft アプリから送信されたタスク設定データを受信し、処理する必要があります。

   - モデルダウンロード（該当する場合）：タスクがローカル AI サービスの使用を必要とする場合、Watcher はタスクをローカルで実行するために必要な AI モデルをダウンロードする必要があります。

4. タスクのデプロイプロセス中、SenseCraft アプリを通じて進行状況を監視できます：

   - タスクカードのステータスが変更され、現在のデプロイ段階を示します。

   - ステータス更新を確認し、タスク受信およびモデルダウンロード（該当する場合）の進行状況を追跡してください。

5. タスクのデプロイが完了すると、Watcher の動作に変化が見られます：

   - Watcher は自動的に監視表情を表示するか、タスクの開始準備が整ったことを示します。

   - Watcher のこの変化は、タスクの実行が開始されたことを意味します。

### 現在のタスクの確認とアラームのチェック

SenseCraft アプリは、実行中のタスクの進行状況とステータスを監視し、トリガーされたアラームや関連するキーフレームを確認する便利な方法を提供します。

- このセクションでは、Watcher デバイスで現在実行中のタスクに関する情報が表示されます。

- 現在のタスクは、小さなカードで表され、タスク名と関連する Watcher デバイスが表示されます。

- カードには、タスクが現在進行中かどうかが示され、タスクのステータスを簡単に把握できます。

タスクが設定された条件に基づいてアラームをトリガーすると、SenseCraft アプリはプッシュ通知やアプリ内アラートを通じて通知します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/28.png" style={{width:250, height:'auto'}}/></div>

「検出履歴」セクションでは、実行中のタスクによってトリガーされたすべてのアラームのリストが表示されます。各アラームはカードまたはリスト項目で表され、タスク名、Watcher デバイス、タイムスタンプ、トリガー条件の簡単な説明などの情報が表示されます。アラームカードをタップすると、アラームに関する詳細情報や関連するキーフレーム画像を確認できます。

キーフレーム画像は、アラームがトリガーされた瞬間に Watcher デバイスによってキャプチャされ、検出されたシナリオの視覚的な証拠を提供します。キーフレーム画像を確認して状況を分析し、必要に応じて適切な対応を取ることができます。また、アプリは、状況の深刻度や好みに応じて、アラームを確認または無視するオプションを提供する場合があります。

### タスクの終了

Watcher デバイスで現在実行中のタスクを停止する必要がある場合、以下の2つの便利なオプションが利用可能です：

オプション 1: SenseCraft APP を使用してタスクを終了する方法  
1. モバイルデバイスで SenseCraft APP を開き、「現在のタスク」セクションに移動します。  
2. Watcher デバイスで現在実行中のタスクを表すタスクカードを見つけ、「終了」ボタンをタップします。  
3. アプリは Watcher デバイスにタスク停止のリクエストを送信し、タスクカードはタスクが終了した状態を反映するように更新されます。  

オプション 2: Watcher デバイス上で直接タスクを終了する方法  
1. Watcher デバイスの画面を軽くタップするか、スクロールホイールボタンを押してメニューまたはオプションを表示します。  
2. 「タスク終了」オプションを選択すると、Watcher デバイスは即座にタスクを終了し、アイドル状態に戻ります。  
3. SenseCraft APP のタスクカードは自動的に更新され、タスクが終了した状態を反映します。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/29.png" style={{width:250, height:'auto'}}/></div><br />

これらの方法は、必要に応じてタスクの実行を停止するための簡単で直感的な方法を提供します。現在の状況や Watcher デバイスへの近さに応じて、最も便利な方法を選択してください。

## 音声でタスクを送信する

Watcher は「Push to Talk」機能のおかげで、音声コマンドを使用してタスクを送信する便利で直感的な方法を提供します。この機能はデバイスのどの画面やインターフェースからでもアクセス可能で、メニューをナビゲートすることなく Watcher と簡単に対話できます。以下は、この機能を使用するためのステップバイステップガイドです：

1. Push to Talk をアクティブ化する：

   - Watcher の右上隅にあるホイールボタンを見つけます。  
   - ホイールボタンを押し続けて音声入力インターフェースに入ります。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif" style={{width:650, height:'auto'}}/></div><br />

2. コマンドまたはメッセージを話す：

   - ホイールボタンを押し続けながら、Watcher に対してタスクやメッセージを明確に話します。  
   - 例えば、「赤ちゃんが泣いているか教えて」や「犬が食べ物を盗んでいる場合、ストップと言って」といったタスクを割り当てることができます。  
   - または、「ジョークを教えて」といった質問や会話をすることも可能です。  

3. ホイールボタンを離す：

   - 話し終えたら、ホイールボタンを離します。  
   - Watcher は音声入力を処理し、それがタスクの割り当てか会話かを判断します。  

4. タスクの割り当て：

   - Watcher が音声入力をタスクの割り当てとして認識した場合、タスクを関連するコンポーネントに自動的に分解します。  
   - Watcher の画面にカードが表示され、**対象**（監視するもの）、**行動**（監視する動作）、**通知**（通知方法）、**時間範囲**（監視する時間）、**頻度**（監視頻度）が示されます。  
   - 表示された情報が意図したタスクを正確に表しているか確認してください。  
   - 詳細が正しければタスクを確認し、Watcher は指定されたパラメータに従ってタスクを実行し始めます。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/80.jpg" style={{width:650, height:'auto'}}/></div>

最適な使用のためのヒント：

- 音声認識の精度を高めるために、明瞭に適度なペースで話してください。  
- 話す際は Watcher にできるだけ近づき、約 **3 ~ 10cm** の距離で話すと認識精度が最適です。  
- 背景ノイズを最小限に抑え、Watcher が音声コマンドを正確に理解できるようにしてください。  
- タスクを割り当てる際は具体的かつ簡潔に話し、Watcher が意図を正確に解釈できるようにしてください。  
- Watcher がタスクや会話を誤解した場合は、ホイールボタンを再度押し続けて修正や補足を提供してください。  

Push to Talk 機能を活用することで、タスクを簡単に送信したり、Watcher と自然かつ効率的に対話することができます。

:::note  
**0x7002** エラーが発生した場合、現在の Watcher のネットワーク状態が良くないことを意味し、音声サービスの呼び出しが失敗しています。ネットワークまたは場所を変更して再試行してください。  
:::

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを提供しております。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>