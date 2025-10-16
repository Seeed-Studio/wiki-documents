---
description: Watcherが実行できるさまざまなタイプのタスクと、それらがSenseCraftエコシステム内でどのように組織化されているかについて、しっかりとした基盤を得ることができます。
title: タスク割り当てガイドライン
image: https://files.seeedstudio.com/wiki/watcher_getting_started/85_1.webp
slug: /ja/getting_started_with_watcher_task
sidebar_position: 3
last_update:
  date: 10/18/2024
  author: Citric
---


# SenseCAP Watcher タスク割り当てガイドライン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/85.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcherの動画</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Githubリポジトリ</font></span></strong>
    </a>
</div><br />

Watcherにタスクを割り当てるチュートリアルへようこそ。このガイドでは、Watcherにコマンドを発行するプロセスを説明し、監視ニーズに対してその機能を効果的に活用できるようにします。

Watcherは、さまざまな監視および分析タスクを実行するためにユーザーが発行するコマンドに依存する強力なツールです。Watcherに正確な指示を送信することで、特定のターゲットに焦点を当て、データを収集し、価値のある洞察を提供するよう指示できます。

以下のセクションでは、タスクの分類、モデル選択、価格情報の詳細について詳しく説明します。私たちの目標は、Watcherにタスクを効率的に割り当て、その機能を最大限に活用するために必要な知識とスキルを身につけることです。利用可能なさまざまなタイプのタスクを探索し、要件に適したモデルの選択をガイドし、関連するコストについて明確にします。

このチュートリアルの終わりまでに、監視ニーズをWatcherに効果的に伝える方法をしっかりと理解できるでしょう。自信を持ってタスクを割り当て、設定をカスタマイズし、望ましい結果を得ることができるようになります。

Watcherをコントロールし、その全ポテンシャルを解き放つ準備をしましょう。このタスク割り当ての旅に乗り出し、Watcherが監視目標の達成にどのように役立つかを発見しましょう！

## SenseCAP Watcher 高度な設定

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ono_v759R0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

SenseCAP Watcherは、インテリジェントな場所のための最初の物理的LLMエージェントで、シーンの監視、アクションのトリガー、コマンドに基づく相互作用が可能です。この動画では、SenseCAP Watcherがタスク分析に基づいてシーントリガーモデルを選択する方法を紹介します：オンデバイスモデルとLLMモデル。また、RGBライトとディスプレイ＆サウンドアラートの設定方法、および通知プッシュモード：APP、UART、HTTPについても説明します。

## タスクの概念

Watcherを使い始めるため、そしてWatcherがあなたの望むことを理解できるようにするために、タスクについてとタスクの配置における注意事項について説明したこの記事を読む必要があります。

### タスクの3つの主要コンポーネント

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_1.png" style={{width:1000, height:'auto'}}/></div>

Watcherタスクは3つの主要コンポーネントで構成されています：

- **オブジェクト**: 指定されたオブジェクトは、Watcherによって呼び出されるローカル認識タスクモデルに直接影響します。選択されたモデルがSenseCraft AIで利用できない場合、クラウドベースの大規模モデルエンジンが認識のために直接呼び出されます。

- **何かをしている（オプション）**: タスク指示にアクションの説明があるかどうかによって、Watcherがクラウドベースの大規模言語モデルエンジンを呼び出すかどうかが決まります。

- **アクション**: Watcherのタスクがトリガーされた際に実行されるアクション。アクションの例には、RGBライトの点滅、プッシュ通知、Watcherサウンド、SNSなどがあります。

これらのコンポーネントが連携して、特定のタスクがトリガーされた際のWatcherの動作を定義します。オブジェクト、オプションのアクション説明、および望ましいアクションを組み合わせることで、ユーザーは監視ニーズに合わせたカスタムタスクを作成できます。

:::caution
図に示されているタスクの例は、読みやすさと理解しやすさのためのものであり、構文と条件は必ずしも図に示されている通りである必要はありませんが、提供するタスク指示には上記の3つのコンポーネントが含まれていることを確認してください。
:::

次に、いくつかのタスクの例を通して、概念と呼び出されるサービスについて理解していきます。

### Watcherローカル AI サービス

Watcherタスクでオブジェクトとして人が設定されると、デバイスは自動的にローカル AI サービスモードを選択します。このモードでは、Watcherはまず、SenseCraft AI ライブラリに人検出用の事前訓練済みモデルが利用可能かどうかを確認します。モデルが存在する場合、Watcherはそれをダウンロードし、クラウドベースのサービスに依存することなく、デバイス自体でローカルに検出を実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_2.png" style={{width:1000, height:'auto'}}/></div>

画像はこのプロセスを示しています。オブジェクトとして人が指定されると、Watcherは人検出のために**ローカル AI モデル**を呼び出します。モデルはデバイスのカメラによってキャプチャされたビデオフィードを分析し、**リアルタイム**で人の存在を検出します。人が識別されると、Watcherは指定されたアクションをトリガーし、この場合はデバイスのスピーカーを通して「Hi, I'm Watcher」という音を再生します。

ローカル AI サービスを活用することで、Watcherは効率的かつ独立して人検出を実行でき、クラウドへの常時接続や大規模言語モデル（LLM）の使用を必要としません。これにより、高速な応答時間を確保し、すべての処理がデバイス上でローカルに行われるため、ユーザーのプライバシーを維持します。

ただし、必要なオブジェクトモデルがSenseCraft AI ライブラリで利用できない場合、Watcherはクラウドベースの LLM サービスを使用して検出を実行するように切り替わります。このフォールバック機能により、特定のモデルがローカルに存在しない場合でも、デバイスはタスクを実行できます。[純粋な LLM モード](#pure-llm-mode)を参照してください。

そして、ローカル AI サービスを使用すると判断されるタスクを配置した場合、SenseCraft APP上で、タスク設定ページは以下のように表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local-app.png" style={{width:1000, height:'auto'}}/></div>

### Watcherクラウドベース LLM サービス

#### 純粋なクラウドベース LLM サービス

Watcherタスクでオブジェクトとして「candle」を設定したが、SenseCraft AI ライブラリにキャンドル検出用の事前訓練済みモデルが利用できない場合、デバイスは**検出のためにクラウドベースの大規模言語モデル（LLM）サービスを使用するように自動的に切り替わります**。

:::danger
SenseCraft AI の一部のサービスの使用には料金が発生する場合があります。詳細については以下のドキュメントを参照してください：

**[SenseCraft AI for Watcher プランと特典](https://wiki.seeedstudio.com/ja/watcher_price/)**
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_3.png" style={{width:1000, height:'auto'}}/></div>

画像に示されているように、WatcherがLLMサービスを使用してキャンドルを検出すると、指定されたアクションを実行します。この場合は、接続されたモバイルアプリにプッシュ通知を送信します。**これにより、デバイスがローカルで検出を実行できなかった場合でも、ユーザーはキャンドルの存在について迅速に警告を受けることができます**。

クラウドベースのLLMサービスの力を活用することで、特定のモデルがSenseCraft AI ライブラリで利用できない場合でも、Watcherは正確にオブジェクトを識別し、適切なアクションをトリガーできます。このフォールバック機能により、デバイスの汎用性が向上し、幅広い検出シナリオに適応できることが保証されます。

ただし、クラウドベースのLLMサービスを使用する場合、データをリモートで処理する必要があるため、ローカル検出と比較してわずかに応答時間が遅くなる可能性があることに注意することが重要です。さらに、このモードでは、デバイスがクラウドサービスと通信するためにアクティブなインターネット接続が必要です。

:::note
ユーザーは、完全なプロセスと複雑な詳細を掘り下げることなく、これら3つのタスクモードの基本的な理解を持つだけで十分です。これらのモードの紹介は、タスク設定中に異なるユーザーインターフェースに遭遇した際に、ユーザーが混乱したり心配したりしないようにするためです。各モードには独自のアプリ設定ページがあり、選択されたモードによって異なる場合があります。ユーザーは、Watcherタスクを効果的に設定するために、特定の要件に基づいて指示に従う必要があります。
:::

純粋なLLMを使用すると判断されるタスクを配置した場合、SenseCraft APP上で、タスク設定ページは以下のように表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/llm-app.png" style={{width:1000, height:'auto'}}/></div>

タスクの設定と実行機能に加えて、Pure Cloud-based LLM Serviceは、ユーザーが言語学習モデル（LLM）と純粋にテキストベースの会話を行うことも可能にします。

この機能により、Watcherデバイスや画像ベースの入力を必要とせずに、LLMと直接やり取りすることができます。チャットインターフェースにメッセージやクエリを入力するだけで、LLMが適切に応答します。詳細については[Type the task](#type-the-task)を参照してください。

#### ローカル AI + クラウドベース LLM サービス

Watcherデバイスの第3の動作モードは、Local AIサービスとクラウドベースのLLMサービスの組み合わせです。**このモードは、WatcherのローカルAIサービスが指定されたオブジェクトを認識したが、オブジェクトの行動や状態を判断するためにLLMクラウドサービスからのさらなる分析が必要な場合に作動します**。

:::danger
SenseCraft AIの一部のサービスの使用には料金が発生する場合があります。詳細については以下のドキュメントを参照してください：

**[SenseCraft AI for Watcher Plans and Benefits](https://wiki.seeedstudio.com/ja/watcher_price/)**
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_4.png" style={{width:1000, height:'auto'}}/></div>

画像に示されている例では、オブジェクトが「cat」に設定され、アクションが「flashing light」に設定されています。Watcherがペット検出用のローカルAIモデルを使用して猫を検出すると、LLMクラウドサービスを呼び出して猫の行動を分析し、それが「eating」しているかどうかを判断します。

LLMクラウドサービスが猫が実際に食事をしていることを確認すると、Watcherは指定されたアクションを実行します。この場合、デバイスのRGBライトを点滅させます。ローカルとクラウドベースのサービスの組み合わせにより、より高度な検出と分析が可能になり、Watcherはオブジェクトを識別するだけでなく、その行動や状態も理解できるようになります。

Local AIサービスとLLMクラウドサービスの両方を活用することで、Watcherは複数レベルの分析を必要とする複雑なシナリオを処理できます。ローカルAIモデルがまず指定されたオブジェクトの存在を検出し、LLMクラウドサービスがオブジェクトの行動に関する追加のコンテキストと理解を提供します。

ローカル + LLMを使用すると判断されるタスクを配置した場合、SenseCraft APPでは、タスク設定ページが以下のように表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local_llm-app.png" style={{width:1000, height:'auto'}}/></div>

### まとめ

効率性、コスト、選択に基づく3つのモードの比較表は以下の通りです：

<div class="table-center">
	<table align="center">
		<tr>
            <th rowspan="2"> </th>
			<th>完全ローカルサービス</th>
			<th colspan="2">クラウドサービスへの依存</th>
		</tr>
        <tr>
            <th>Local AI Service</th>
			<th>Cloud-based LLM Service</th>
			<th>Local AI + Cloud-based LLM Service</th>
		</tr>
		<tr>
            <th>効率性</th>
			<td align="center">アラーム時間：<strong>2秒</strong><br />アラーム発動の最小時間間隔：<strong>5秒</strong></td>
			<td align="center">アラーム時間：<strong>10秒</strong><br />アラーム発動の最小時間間隔：<strong>30秒</strong></td>
			<td align="center">アラーム時間：<strong>10秒</strong><br />アラーム発動の最小時間間隔：<strong>30秒</strong></td>
		</tr>
		<tr>
            <th>コスト</th>
			<td align="center">❎</td>
			<td align="center">☑️</td>
			<td align="center">☑️</td>
		</tr>
		<tr>
            <th>選択方法</th>
            <td><strong>利点</strong>：WatcherのローカルAIサービスに完全に依存し、追加費用がなく、より高速な認識と応答時間を持ちます。対象となるモデルがある場合、理論的にはより高い認識精度も得られます。<br /><strong>欠点</strong>：モデルがない場合、サービスを使用できません。オブジェクトの行動分析が必要な場合も、ローカルサービスのみを使用することはできません。</td>
            <td><strong>利点</strong>：SenseCraft AIライブラリに事前訓練されたモデルが利用できない場合でも、幅広いオブジェクトを認識できます。オブジェクトの行動分析を必要とするタスクに適しています。<br /><strong>欠点</strong>：アクティブなインターネット接続が必要です。特に無料の公開テスト段階が終了した後、クラウドベースサービスの使用に追加コストが発生する可能性があります。Local AI Serviceモードと比較して応答時間がわずかに遅くなります。</td>
            <td><strong>利点</strong>：Cloud-based LLM Serviceモードと比較して、このモードはCloud-based LLM Serviceを呼び出す前に、Local AI Serviceを使用して特定でないオブジェクトをフィルタリングします。常に存在するわけではないが利用可能なモデルがあるオブジェクトの場合、このモードは識別されたオブジェクトを含む画像でのみ行動分析を実行することで、Cloud-based LLM Serviceの呼び出しコストを大幅に削減できます。<br /><strong>欠点</strong>：ローカルAIサービスと組み合わせてクラウドベースLLMサービスを使用するための追加コストが発生する可能性がありますが、Cloud-based LLM Serviceモードを独占的に使用するよりもコストは低くなります。クラウドベースの行動分析にはアクティブなインターネット接続が必要です。Local AI Serviceモードと比較して全体的な応答時間がわずかに遅くなります。</td>
		</tr>
	</table>

</div>

1. 「アラーム時間」の意味はモードによって異なります：

    - **ローカルAIサービスモード**：
        「アラーム時間」は、アラームがトリガーされた後にWatcherのRGBライトまたはスピーカーがアクティブな状態を維持する時間を指します。

    - **クラウドベースLLMサービスモード**：
        「アラーム時間」は、RGBライトとスピーカーのアクティベーション時間だけでなく、表示されるカメラ画面が一時停止される時間の長さも示します。この一時停止は、画像を分析のためにクラウドサーバーに転送するのに必要な時間を考慮しています。

2. 「アラームトリガーの最小時間間隔」設定は「アラーム時間」とは独立しており、連続的な関係を表すものではありません。この設定は、2つの連続するアラームトリガー間に経過しなければならない最小時間を指定します。タスクを設定する際、ユーザーはこの最小間隔よりも短いアラーム時間を設定することは**許可されません**。この制限により、システムが別のアラームをトリガーする前に、各アラームイベントを処理し応答するのに十分な時間を確保できます。この制限により、システムは十分な処理時間を確保し、過度または連続的なアラームトリガーを防ぎ、安定した信頼性の高い動作を促進します。

:::danger
SenseCraft AIの一部のサービスの使用には料金が発生する場合があります。詳細については以下のドキュメントを参照してください：

**[SenseCraft AI for Watcher Plans and Benefits](https://wiki.seeedstudio.com/ja/watcher_price/)**
:::


## SenseCraft APPを介したタスクの配置

タスクの分類と基本概念を理解した後、SenseCraft APPでWatcherにコマンドを発行する方法について詳しく見ていきましょう。Watcherのマッチングプロセスを完了し、Watcherチャットページに到達したと仮定します。デバイスのバインド方法がまだわからない場合は、[デバイスバインディングとOTAアップグレード](https://wiki.seeedstudio.com/ja/getting_started_with_watcher/#device-binding-and-ota-upgrade)を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/workflow.png" style={{width:1000, height:'auto'}}/></div>

### タスクの入力

各WatcherデバイスはSenseCraft APP内に専用のチャットウィンドウを持っています。特定のWatcherにコマンドを発行するには、そのチャットウィンドウに移動し、入力フィールドを使用して希望するコマンドを入力します。コマンドを手動で入力するか、キーボードの音声入力機能を使用して便利に入力できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/21.png" style={{width:250, height:'auto'}}/></div>

コマンドを作成する際は、Watcherがタスクを正確に理解し実行できるよう、明確で詳細な指示を提供することが重要です。コマンドには以下の情報を含める必要があります：

- Watcherに認識させたい特定のオブジェクトまたは複数のオブジェクト。

- 該当する場合、オブジェクトに関連する追加のアクションや動作。

- 認識が成功した際にWatcherに期待する希望するアクションまたは応答。

包括的な指示を提供することで、Watcherが割り当てられたタスクを効果的に理解し実行できるようになります。最良の結果を得るために、可能な限り具体的で説明的であることを心がけてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/22.png" style={{width:250, height:'auto'}}/></div>

タスクの設定と実行機能に加えて、Pure Cloud-based LLM Serviceでは、ユーザーが言語学習モデル（LLM）と純粋なテキストベースの会話を行うことも可能です。

Pure Cloud-based LLM Serviceのテキストベースチャット機能は、ユーザーがLLMと直接対話する新しい可能性を開きます。物理的なWatcherデバイスを必要とせずに、LLMの知識と機能にアクセスする便利な方法を提供します。

質問がある場合、特定のトピックについて支援が必要な場合、またはLLMの機能を探索したい場合など、テキストベースチャット機能はAIモデルとコミュニケーションを取るためのシームレスで直感的な方法を提供します。

情報、ガイダンスが必要な場合、またはLLMとの有益な会話に参加したい場合は、この機能を自由に活用してください。

:::danger
SenseCraft AIの一部のサービスの使用には料金が発生する場合があります。詳細については以下のドキュメントを参照してください：

**[SenseCraft AI for Watcher Plans and Benefits](https://wiki.seeedstudio.com/ja/watcher_price/)**
:::

### タスクの分解の識別または設定

タスクコマンドの入力を完了した後、以下の手順に従ってコマンドを確認し実行します：

1. チャットウィンドウの右下にある**送信**ボタンをクリックして、コマンドを送信します。

2. バックエンドシステムがタスクコマンドを処理し、構成要素に分解します。

3. 小さなカードが返され、Watcherのタスクの解釈が表示されます。カードには主に以下の情報が表示されます：

   - **When**：タスクの実行を開始する条件またはトリガー。
   - **Do**：オブジェクトの認識が成功した際にWatcherが実行するアクションまたは応答。
   - **Capture Frequency**：タスクがトリガーされ実行される時間間隔。

4. カードの情報を確認し、Watcherがタスクの指示を正しく理解していることを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/23.png" style={{width:250, height:'auto'}}/></div>

5. Watcherの解釈に満足している場合は、カードの**Run**ボタンをクリックしてタスクをWatcherにデプロイし、実行を開始します。

6. （オプション）タスクの分解をより詳細に確認するには、カードの**Detail Config**ボタンをクリックします。これにより、タスク設定に関する追加情報が提供されます。

タスク設定に誤解を発見したり、変更を加えたい場合は、「詳細設定」オプションを使用して、要件に応じて設定を手動で変更してください。[タスクの概念の章](#concept-of-the-task)で説明されているように、詳細設定ページはモードによって異なります。実際の状況に応じて設定項目を選択または変更するだけです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/24.png" style={{width:800, height:'auto'}}/></div>

「詳細設定」セクションでは、タスク設定を細かく調整できる様々な設定を見つけることができます。利用可能な設定の概要は以下の通りです：

1. **ローカルモデルを使用**：
- この設定は、タスクがローカルAIサービスの使用を必要とする場合に表示されます。
- システムは、提供されたタスクに基づいてSenseCraft AIライブラリから適切なモデルを自動的に選択します。
- ローカルAIサービスの使用を無効にするオプションがあり、これにより画像解析にクラウドベースのサービスが直接利用されます。
- また、モデル選択を手動で変更し、SenseCraft AIライブラリで公開されているモデルから選択することもできます。
- タスクが完全にローカルの場合、「ローカルモデルを使用」オプションを無効にすることはできません。<br /><br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/25.png" style={{width:250, height:'auto'}}/></div>

2. **シナリオ**：
- このセクションでは、アクションのトリガー条件が表示されます。
- 要件に応じてクラス数を調整し、トリガーステートメントを変更できます。
- より複雑なシナリオが関わる場合、条件を追加することで柔軟に調整できます。<br /><br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/26.png" style={{width:600, height:'auto'}}/></div>

3. **アクション**：
- ここでは、アラームがトリガーされた後のWatcherの動作を設定できます。
- RGBライトの点灯、スピーカーからの音声再生、通知の送信など、Watcherに実行させたいアクションを指定します。<br /><br />

4. **キャプチャ頻度**：
   - この設定は、タスクが実行される時間間隔を決定します。
   - 希望する監視間隔とタスクの特定の要件に基づいて頻度を調整します。<br /><br />

:::caution
「詳細設定」セクションでは、**キャプチャ頻度**のデフォルト値が自動的に設定されます。Watcherクラウドベース LLM サービスの場合、「キャプチャ頻度」は**60秒未満に設定することはできません**。Watcherローカル AI サービスを使用している場合、デバイスがリアルタイムアラートを提供するため、「キャプチャ頻度」設定は利用できません。
:::

5. **作業時間枠**：
- この設定により、タスクがアクティブになる時間範囲を定義できます。
- タスクの動作の開始時刻と終了時刻を指定し、指定された時間枠内でのみ監視が行われるようにします。
- この設定が正しく機能するためには、Watcherの内部時計がモバイルデバイスのシステム時刻と同期している必要があることに注意してください。両者の間の不整合は、タスクフローの問題を引き起こす可能性があります。<br />

「詳細設定」セクションでこれらの設定を探索し、設定することで、特定のニーズに合わせてタスクをカスタマイズできます。最適なパフォーマンスと監視目標との整合性を確保するために、各設定を慎重に確認し、調整する時間を取ってください。

7. すべてが正しく設定され、期待に合致することを確認したら、**実行**ボタンをクリックしてタスクの実行を開始します。

これらの手順に従うことで、Watcherがタスクコマンドを正確に理解し、実行が意図した目標と一致することを確認できます。確認プロセスにより、最終的なレビューとタスクをWatcherにデプロイする前に必要な調整を行う機会が提供されます。

### タスクの実行

「詳細設定」セクションでタスク設定を慎重に確認し、設定した後、Watcherデバイスにタスクをデプロイする準備が整います。タスクの実行を開始するには、以下の手順に従ってください：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/27.png" style={{width:800, height:'auto'}}/></div>

1. タスク設定カードにある「実行」ボタンをクリックします。

2. 「実行」をクリックすると、設定されたタスクがネットワーク経由でWatcherに送信されます。

3. タスクのデプロイプロセスには時間がかかる場合があります。これは2つの主要な段階を含むためです：

   - タスク受信：WatcherはSenseCraft APPから送信されたタスク設定データを受信し、処理する必要があります。

   - モデルダウンロード（該当する場合）：タスクがローカルAIサービスの使用を必要とする場合、Watcherはタスクをローカルで実行するために必要なAIモデルをダウンロードする必要がある場合があります。

4. タスクデプロイプロセス中は、SenseCraft APPを通じて進行状況を監視できます：

   - タスクカードのステータスが変更され、デプロイの現在の段階を示します。

   - ステータス更新に注意して、タスク受信とモデルダウンロード（該当する場合）の進行状況を追跡してください。

5. タスクデプロイが完了すると、Watcherの動作に変化が観察されます：

   - Watcherは自動的に監視表現を表示するか、タスクを開始する準備ができていることを示します。

   - Watcherの様子のこの変化は、タスクの実行が開始されたことを意味します。

### 現在のタスクの表示とアラームの確認

SenseCraft APPは、実行中のタスクの進行状況とステータスを監視し、トリガーされたアラームと関連するキーフレームを確認する便利な方法を提供します。

- このセクションでは、Watcherデバイスで現在実行中のタスクに関する情報を見つけることができます。

- 現在のタスクは小さなカードで表示され、タスク名と関連するWatcherデバイスが表示されます。

- カードは、タスクが現在進行中かどうかを示し、タスクのステータスの概要を素早く提供します。

設定された条件に基づいてタスクがアラームをトリガーすると、SenseCraft APPはプッシュ通知またはアプリ内アラートを通じて通知します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/28.png" style={{width:250, height:'auto'}}/></div>

「Detect History」セクションでは、実行中のタスクによってトリガーされたすべてのアラームのリストを見つけることができます。各アラームはカードまたはリスト項目で表示され、タスク名、Watcherデバイス、タイムスタンプ、トリガー条件の簡単な説明などの情報が表示されます。アラームカードをタップすると、関連するキーフレーム画像を含む、アラームに関するより詳細な情報を表示できます。

キーフレーム画像は、アラームがトリガーされた瞬間にWatcherデバイスによってキャプチャされ、検出されたシナリオの視覚的証拠を提供します。キーフレーム画像を確認して状況を分析し、必要に応じて適切な措置を講じることができます。アプリは、お客様の設定や状況の深刻度に応じて、アラームを確認または却下するオプションも提供する場合があります。

### タスクの終了

Watcherデバイスで現在実行中のタスクを停止する必要がある場合、2つの便利なオプションが利用できます：

オプション1：SenseCraft APPを通じてタスクを終了する
1. モバイルデバイスでSenseCraft APPを開き、「Current Tasks」セクションに移動します。
2. Watcherデバイスで現在実行中のタスクを表すタスクカードを見つけて、「END」ボタンをタップします。
3. アプリはWatcherデバイスにタスクを停止するリクエストを送信し、タスクカードはタスクの終了ステータスを反映するように更新されます。

オプション2：Watcherデバイスで直接タスクを終了する
1. Watcherデバイスの画面を軽くタップするか、スクロールホイールボタンを押してメニューまたはオプションを表示します。
2. 「End Task」オプションを選択すると、Watcherデバイスは即座にタスクを終了し、アイドル状態に戻ります。
3. SenseCraft APPのタスクカードは、タスクの終了ステータスを反映するように自動的に更新されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/29.png" style={{width:250, height:'auto'}}/></div><br />

どちらの方法も、必要に応じてタスクの実行を停止するシンプルで直感的な方法を提供します。現在の状況とWatcherデバイスとの距離に基づいて、最も便利な方法を選択してください。

## 音声によるタスク送信

Watcherは「Push to Talk」機能により、音声コマンドを使用してタスクを送信する便利で直感的な方法を提供します。この機能はデバイスの任意の画面やインターフェースからアクセス可能で、メニューを操作することなくWatcherと簡単にやり取りできます。この機能の使用方法について、ステップバイステップのガイドをご紹介します：

1. Push to Talkを有効にする：

   - Watcherの右上角にあるホイールボタンを見つけます。
   - ホイールボタンを長押しして音声入力インターフェースに入ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif" style={{width:650, height:'auto'}}/></div><br />

2. コマンドまたはメッセージを話す：

   - ホイールボタンを押し続けながら、Watcherにタスクまたはメッセージを明確に話しかけます。
   - 「赤ちゃんが泣いているか教えて」や「犬が食べ物を盗んでいたら、やめなさいと言って」などのタスクを割り当てることができます。
   - または、「ジョークを教えて」などの質問や発言をして会話に参加することもできます。

3. ホイールボタンを離す：

   - 話し終わったら、ホイールボタンを離します。
   - Watcherは音声入力を処理し、それがタスクの割り当てか会話かを判断します。

4. タスクの割り当て：

   - Watcherが音声入力をタスクの割り当てとして認識した場合、自動的にタスクを関連するコンポーネントに分解します。
   - Watcherは画面にカードを表示し、**Object**（監視対象）、**Behavior**（探すべき行動）、**Notification**（通知方法）、**Time Range**（監視時間）、**Frequency**（監視頻度）を示します。
   - 表示された情報を確認して、意図したタスクを正確に表しているかを確認します。
   - 詳細が正しい場合は、タスクを確認すると、Watcherは指定されたパラメータに従ってタスクの実行を開始します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/80.jpg" style={{width:650, height:'auto'}}/></div>

最適な使用のためのヒント：

- 正確な音声認識を確保するため、明確に適度なペースで話してください。
- 話すときは、Watcherにできるだけ近づいてください。約**3〜10cm**の距離で話すと認識精度が最高になります。
- Watcherが音声コマンドを理解する能力を向上させるため、背景ノイズを最小限に抑えてください。
- Watcherが意図を正確に解釈できるよう、タスクを割り当てる際は具体的で簡潔にしてください。
- Watcherがタスクや会話を誤解した場合は、ホイールボタンを再度長押しして説明や修正を提供してください。

Push to Talk機能を活用することで、Watcherにタスクを送信し、会話に参加することが簡単にでき、デバイスとのやり取りがより自然で効率的になります。

:::note
**0x7002**のエラーが発生した場合、現在のWatcherのネットワーク状態が良くなく、音声サービスの呼び出しが失敗したことを意味します。ネットワークまたは場所を変更して再試行してください。
:::

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


