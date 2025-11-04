---
description: この記事では、Cloud Efficient Processing Flow、Hybrid Smart Processing Flow、Local Secure Processing Flowの3つの異なる処理デプロイメントフローでWatcherデバイスを設定するための詳細なセットアップガイドを提供します。Watcherソフトウェアサービスフレームワークの概要を提供し、ユーザー、SenseCraft Mateアプリ、Watcherデバイス間の相互作用を説明します。
title: Watcherソフトウェアサービス紹介
image: https://files.seeedstudio.com/wiki/watcher_getting_started/50.jpg
slug: /ja/watcher_software_service_framework
sidebar_position: 2
last_update:
  date: 10/09/2024
  author: Evelyn Chen
---


## フレームワーク概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/1.png" style={{width:800, height:'auto'}}/></div>

これはWatcherのソフトウェアサービスフレームワークで、ユーザー、SenseCraft Mateアプリ、Watcherデバイス間の相互作用とタスクフローを示しています。データセキュリティとサービス品質の要件に基づいて、ユーザーがサービスデプロイメントをカスタマイズできる複数の設定オプションを提供しています。

このフレームワークは、クラウドAIサービスとローカルAIデプロイメントを統合し、データサービス、デバイス通信サービス、タスクオーケストレーション、画像解析サービス、アラートチャネルエージェント、モデルトレーニングサービスと組み合わせています。
LLMをクラウドまたはオンプレミスインフラストラクチャにデプロイすることを選択できます。元のデータと結果も、クラウドまたはオンプレミスデバイスでの保存または送信を選択できます。
GPU対応仮想マシン内でのより高性能なストレージの必要性と同様に、クラウドとオンプレミスストレージソリューションを比較できます。

これらのコンポーネントは、ユーザーが選択できる3つのデプロイメントオプションを形成します：

1. **Cloud Efficient Processing Flow**
2. **Hybrid Smart Processing Flow**
3. **Local Secure Processing Flow**

以下のセクションでは、フレームワークの詳細な説明を提供し、3つのデプロイメントオプションのそれぞれを設定するためのガイドを提供します。

**データサービス**

Watcherは柔軟なデータサービスを提供し、SenseCraftデータプラットフォームに接続してアラートデータ、デバイスステータス、プレビュー画像をアップロードできます。SenseCraftプラットフォームは、HTTPリクエストを通じてMQTTブローカーアドレスとトークンを提供します。または、アプリでのBluetooth設定を通じて、SenseCraftプラットフォームを完全にバイパスして、サードパーティプラットフォームにデータをアップロードすることを選択できます。

**デバイス通信サービス**

デバイス通信において、WatcherはMQTTを通じてリモートタスクフローとファームウェアOTAアップデートをサポートします。SenseCraft Mateアプリを使用してタスクを作成し、SenseCraftプラットフォームを通じてデバイスに送信できます。アプリは最新のファームウェアバージョンもチェックし、利用可能な場合は通知します。確認後、プラットフォームはデバイスにアップデートを送信します。

**タスクオーケストレーションサービス**

Watcherのタスクオーケストレーションサービスは、直接的な音声インタラクションを可能にし、対話がHTTPを介してサービスに送信され、処理され、タスクフローがデバイスに返されます。SenseCraft Mateアプリもタスクフローを取得し、リモートでデバイスに送信できます。

**ビジョン解析サービス**

ビジョン解析において、Watcherは統一された画像解析サービスを提供します。Bluetooth設定を通じてSenseCraft、OpenAI、またはサードパーティAIエージェントから選択し、関連するAPIキーを入力できます。デバイスが画像を送信すると、選択されたサービス、ローカルllamaまたはOpenAIなどのサードパーティサービスを利用します。

**アラート通知サービス**

アラート通知において、Watcherは、SenseCraftクラウドからのアプリプッシュ通知、他のハードウェアへのUART接続、ローカルサーバーまたはサードパーティプラットフォームへのHTTP接続など、複数のオプションを許可します。アラートは、標準データ形式を使用してDiscordなどのプラットフォームにも送信できます。さらに、Watcherは、互換性のある形式を使用して、Home Assistant、IFTTT、Webhooksなどの他のプラットフォームにこれらの通知を転送できます。詳細については、HTTP Proxyアプリケーションを参照してください。

複数のデプロイメントオプションから選択し、パーソナライズされたWatcherアシスタントを簡単に設定する柔軟性があります。データセキュリティまたは処理効率のどちらを優先するかに関係なく、3つの適応可能なソリューションを提供します：Cloud Efficient Processing Flow、Hybrid Smart Processing Flow、Local Secure Processing Flow。Watcherアシスタントをカスタマイズして、最高のスマートサービス体験を提供してください！

## クラウド効率処理フロー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/20.png" style={{width:500, height:'auto'}}/></div>

この図は、クラウド効率処理フローの概要を示し、ユーザー、クラウドサービス、ローカルアプリケーション間の相互作用を説明しています。この設定では、すべてのサービスがSenseCraftクラウドを通じて実行され、合理化された効率的なワークフローを提供します。開始してデバイスバインディングを完了した後、ニーズに基づいて適切なクラウドまたはローカルサービスを選択できます。

以下のセクションでは、クラウド効率処理フローの各部分を説明し、その設定に関するガイダンスを提供します：

**ステップ1**. 初期設定：
[セットアップ](https://www.seeedstudio.com/getting_started_with_watcher/#device-binding-and-ota-upgrade)を完了し、SenseCraft AIサービスを選択した後、Watcherのクラウドサービスの使用を開始できます。

**ステップ2**. ユーザーインタラクション：
SenseCraftサービスを有効化し、Watcherにタスクを割り当てる方法は2つあります。詳細は以下の通りです（セクションXXXを参照）：

* オプション1：アプリ経由：ユーザーはモバイルアプリケーションを通じてSenseCraft AIサービスを有効化できます。その後、チャットでタスクメッセージを送信します。
* オプション2：音声コマンド経由：ユーザーはWatcherと直接音声チャットを通じてタスクを割り当てることができます。

**ステップ3**. タスクオーケストレーション：
SenseCraftが有効化されると、Platform-as-a-Service（PaaS）として機能し、タスクオーケストレーションサービスを提供します。これには3つの核となる要素が含まれます：

* STT（Speech-to-Text）：音声コマンドをテキストに変換します。
* TTS（Text-to-Speech）：テキストベースの応答を音声出力に変換します。
* AIサービス：タスクの理解、処理、オーケストレーションを担当します。タスクの内容に基づいて、サービスはSenseCraftモデルリポジトリから最適なモデルを選択します。これには大規模言語モデル（LLM）とTinyMLモデルが含まれます。

手動設定でローカルTinyMLモデルを手動選択することに加えて、入力プロンプトに基づいてタスクを自動的に処理することもできます。タスクオーケストレーションモデルがプロンプトを解釈した後、SenseCraftライブラリから適切なTinyMLモデルを呼び出すことができます。例えば、ユーザーが「鳥を見たら通知して」と要求した場合、タスクオーケストレーションサービスは応答速度を最適化するためにTinyMLライブラリから鳥認識モデルを選択します。

*手動設定*では、**Vision LLM**（より高い精度）または**TinyMLモデル**（より高速な処理）を選択できます。

**ステップ4**. オーケストレーション後のタスク配信
タスクオーケストレーションが完了すると、タスクを配信する方法はSenseCraftリモートコントロール機能の状態によって決まります：

* リモートコントロールが有効な場合：システムはPaaSデータサービスとデバイス通信サービスを利用して、MQTTブローカー経由でタスク結果をWatcherに送信します。
* リモートコントロールが無効な場合：タスクはBluetooth経由でWatcherに配信されます。デバイスがBluetoothの範囲外にある場合、タスク送信のためにリモートコントロールを有効にする必要があります。

**ステップ5**. 視覚分析タスク処理

SenseCraftからタスクを受信した後、Watcherデバイスは視覚分析サービスを呼び出します。ユーザーが選択したAIモデルまたはタスクオーケストレーションサービスによって決定されたAIモデルを使用してタスクを分析します。

**ステップ6**. システム通知
Watcherは様々な方法でユーザーまたはローカルシステムに通知できます：

* アプリプッシュ通知
* シリアルポート/UART出力
* HTTPプッシュ通知

Watcherはローカルサーバー、サードパーティアプリケーション、またはDiscord、Home Assistant、IFTTTなどのアラートサービスにデータを送信することもできます。
詳細については、HTTPプロキシアプリケーションのセクションを参照してください。

## ハイブリッドスマート処理フロー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/3.png" style={{width:800, height:'auto'}}/></div>

この図は、ユーザーインタラクション、一部のクラウドサービス、およびローカルアプリケーションを含むハイブリッドスマート処理フローを示しています。このハイブリッドアプローチは、クラウドベースのタスクオーケストレーションとローカル視覚モデルを組み合わせることで、データセキュリティ、ユーザーエクスペリエンス、効率性のバランスを取ります。

**ステップ1**. 初期設定
[はじめに・デバイスバインディング](https://wiki.seeedstudio.com/ja/getting_started_with_watcher/#device-binding-and-ota-upgrade)の後、ユーザーはニーズに基づいて適切なローカルサービスを選択し、プライベートWatcherサービスを有効にして、WatcherサーバーURLを入力できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/1.gif" style={{width:400, height:'auto'}}/></div>

**ステップ2**. ユーザーインタラクション：
ユーザーはSenseCraftアプリを介してタスクを送信でき、これによりプラットフォーム内のタスクオーケストレーションサービスが開始されます。

**ステップ3**. タスクオーケストレーション：
タスクが受信されると、PaaS（Platform-as-a-Service）として機能するSenseCraftプラットフォームは、3つのコアサービスを使用してタスクをオーケストレーションします：

* STT（音声テキスト変換サービス）
* TTS（テキスト音声変換サービス）
* 理解、処理、タスクオーケストレーション用のAIサービス

タスクオーケストレーションサービスはタスクを解釈し、タスク要件に応じてSenseCraftモデルライブラリまたはLLM（大規模言語モデル）から適切なモデルを選択します。

手動設定でローカルTinyMLモデルを手動選択することに加えて、入力プロンプトに基づいてタスクを自動的に処理することもできます。タスクオーケストレーションモデルがプロンプトを解釈した後、SenseCraftライブラリから適切なTinyMLモデルを呼び出すことができます。例えば、ユーザーが「鳥を見たら通知して」と要求した場合、タスクオーケストレーションサービスは応答速度を最適化するためにTinyMLライブラリから鳥認識モデルを選択します。

*手動設定*では、**Vision LLM**（より高い精度）または**TinyMLモデル**（より高速な処理）を選択できます。

**ステップ4**. オーケストレーション後のタスク配信
タスクオーケストレーション後、システムはSenseCraftリモートコントロールの状態に応じて配信方法を選択します：

* リモートコントロールが有効な場合：システムはPaaSデータサービスとデバイス通信サービスを使用して、MQTTブローカー経由でWatcherにタスク結果を送信します。
* リモートコントロールが無効な場合：タスクはBluetooth経由でWatcherに配信されます。デバイスがBluetoothの範囲外にある場合、継続的な動作にはリモートコントロールを有効にする必要があります。

**ステップ5**. 視覚解析タスク処理
Watcherがタスクを受信すると、ローカルサーバーに展開されたローカル視覚解析サービスを呼び出します。タスクは、ユーザーが選択したAIモデルまたはSenseCraftタスクサービスによってオーケストレーションされたモデルを使用して解析されます。

**ステップ6**. システム通知
Watcherは、さまざまな方法でユーザーまたはローカルシステムに通知できます：

* アプリプッシュ通知
* シリアルポート/UART出力
* HTTPプッシュ通知

Watcherは、ローカルサーバー、サードパーティアプリケーション、またはDiscord、Home Assistant、IFTTTなどのアラートサービスにデータを送信することもできます。
詳細については、HTTPプロキシアプリケーションのセクションを参照してください。

## ローカルセキュア処理フロー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/4.png" style={{width:800, height:'auto'}}/></div>

この図は「ローカルセキュア処理フロー」を概説しており、ローカルにデプロイされたアプリケーションとの完全なユーザーインタラクションに焦点を当てています。データプライバシーを確保するため、タスクオーケストレーションと画像解析サービスは完全にローカルサーバーにデプロイされ、完全なプライバシー保護を提供します。ただし、この方法は機能を制限し、SenseCraftクラウドサービスは利用できません。タスクは現場での音声コマンドでのみ開始でき、ユーザーは履歴データを表示するために通知サービスを設定する必要があります。

**ステップ1**. 初期設定
[はじめに・デバイスバインディング](https://wiki.seeedstudio.com/ja/getting_started_with_watcher/#device-binding-and-ota-upgrade)の後、ユーザーはニーズに基づいて適切なローカルサービスを選択し、プライベートWatcherサービスを有効にして、WatcherサーバーURLを入力できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/1.gif" style={{width:400, height:'auto'}}/></div>

**ステップ2**. ユーザーインタラクション：
ユーザーはWatcherデバイスのホイールボタンを押してタスクを発行し、音声チャットでコマンドを送信できます。

**ステップ3**. タスクオーケストレーション：

ローカルサーバーでホストされるWatcherサーバーは、SenseCraftタスクオーケストレーションシステムと同様のタスクオーケストレーションサービスを提供します。このローカルシステムは3つのコアサービスで構成されています：

* STT（音声テキスト変換サービス）
* TTS（テキスト音声変換サービス）
* タスクの理解、処理、オーケストレーションのためのAIサービス

タスクを解釈した後、ローカルタスクオーケストレーションサービスはWatcherにタスクを送信します。

**ステップ4**. ビジョン解析タスク処理
Watcherがタスクを受信すると、ローカルサーバーにデプロイされたローカル視覚解析サービスを呼び出します。タスクは、タスクオーケストレーション中に選択されたAIモデルを使用して解析されます。

**ステップ5**. システム通知
Watcherは以下の方法でユーザーまたはローカルシステムに通知できます：

* シリアルポート/UART出力
* HTTPプッシュ通知

さらに、Watcherはローカルサーバー、サードパーティアプリケーション、またはDiscord、Home Assistant、IFTTTなどのアラートサービスにデータを送信できます。
詳細については、HTTPプロキシアプリケーションのセクションを参照してください。

## 技術サポート・製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
