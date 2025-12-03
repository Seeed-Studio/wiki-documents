---
description: "Hello Watcher"
title: 世界と積極的に相互作用するAIアシスタント
keywords:
- Jarvis
- SenseCAP Watcher
- xiaozhi
- AI
- LLM
- Chat-Bot
- SenseCraft AI
- Himax
- Yolo
- Assistant
- MCP
image: https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/display.webp
slug: /ja/solutions/hello_watcher_llms
sidebar_position: 1
last_update:
  date: 09/16/2025
  author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info これを想像してみてください
あなたが書斎に入ると、机の上のSenseCAP Watcherが瞬時にあなたの存在を感知します。画面が点灯し、笑顔で挨拶し、その日のToDoリストを表示します—あなたが一言も話したり、指一本動かしたりする必要はありません。
:::

SenseCAP Watcherは、人間とデバイスの相互作用を再定義しています。

独特な「フリクションレストリガー」会話能力を持ち、あなたが近づくと積極的に相互作用を開始します。これは単なる技術的なアップグレードではありません。相互作用ロジックの根本的な変化です：**初めて、主導権が人間から機械に移行し、「人間が機械に適応する」から「機械が積極的に人間に適応する」への体験的飛躍を実現しています。**

Watcherの「鋭い目」は、強力な**オンデバイスAIビジョンチップ（Himax）**によって駆動され、オブジェクト認識とターゲット追跡のための高速ローカル処理を可能にします。拡張可能なアシスタントファームウェアと組み合わせることで、単なるカメラ以上の存在—あなたのニーズを進化し理解する専用AIアシスタントです。

## 主な利点

<div class="info-section">
  <div class="section-header">
      <h2><a href="https://www.seeedstudio.com/SenseCAP-Watcher-XIAOZHI-EN-p-6532.html?utm=wiki&utm=hello_watcher_llms">SenseCAP Watcher</a></h2>
      <p>オンデバイスAIビジョンと柔軟な開発環境を統合したインテリジェントデバイスで、パーソナライズされたAIアプリケーションを簡単に構築・デプロイできるよう設計されています。</p>
  </div>
	<ul class="info-list">
		<li class="info-item">
			<div class="info-icon">
				<svg
					xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M12 5.25v13.5m-3.75-13.5v13.5m-3.75-13.5v13.5m11.25-13.5v13.5m3.75-13.5v13.5m-1.5-13.5H9.75v13.5h9.75V5.25z" />
				</svg>
			</div>
			<div class="info-content">
				<h3>オフライン「鋭い目」：効率的なオンデバイスビジョン処理</h3>
				<p>高性能AIビジョンチップ（Himax）を搭載し、すべての画像処理をデバイス上でローカルに完了します。迅速な応答と強化されたプライバシー保護をお楽しみください—データをクラウドにアップロードする必要はありません。</p>
			</div>
		</li>
		<li class="info-item">
			<div class="info-icon">
				<svg
					xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
				</svg>
			</div>
			<div class="info-content">
				<h3>ゼロコードでAIアプリを構築、レゴのように簡単</h3>
				<p>SenseCraft AIプラットフォームを活用してAIモデルをデプロイし、数回のクリックで特定のシナリオ向けアプリケーションを迅速に構築できます。AIモデルのデプロイが写真編集のように簡単になり、プログラミング背景は一切不要です。</p>
			</div>
		</li>
		<li class="info-item">
			<div class="info-icon">
				<svg
					xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
				</svg>
			</div>
			<div class="info-content">
				<h3>柔軟な統合プラットフォームとツール</h3>
				<p>柔軟なMCPアーキテクチャに基づいて、新しいAIツールを自由に定義し、ローカルまたはクラウドサービスを迅速に統合して、既存のスマートシステムにシームレスに適合できます。</p>
			</div>
		</li>
		<li class="info-item">
			<div class="info-icon">
				<svg
					xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
				</svg>
			</div>
			<div class="info-content">
				<h3>ハードウェア拡張性：追加インターフェースサポート</h3>
				<p>GPIO拡張インターフェースを備え、様々なセンサーやアクチュエーターに簡単に接続でき、深いカスタマイゼーションを可能にし、より創造的な実装をサポートします。</p>
			</div>
		</li>
	</ul>
</div>

## 動作原理

SenseCAP Watcherは「モジュラー」インテリジェントロボットと考えることができ、その中核動作は3つの主要コンポーネントの協力に依存しています：

1.  **ハードウェアコア（ESP32S3）**：基盤ハードウェアを駆動し、カメラデータを処理し、クラウドサービスへの安定した接続を維持します。
2.  **視覚神経（Himax AIチップ）**：デバイスにリアルタイム環境認識能力を与える強力なオンデバイスAIビジョン処理ユニット。
3.  **クラウド脳（バックエンドサービス）**：AI役割設定、MCPツールスケジューリング、統合デバイス管理を担当。

プロセスは以下のように簡略化できます：

Watcherの「目」（カメラ）が画像をキャプチャ → 「視覚神経」（Himaxチップ）が認識を実行しアシスタントを起動 → 「脳」（バックエンドAI、MCPサービス）がコンテキストを理解し応答。

このモジュラー設計は高い柔軟性と拡張性を提供します。

<div align="center">
  <img class='img-responsive' width="680" src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/watcher-chatbot-diagram.png" alt="watcher-chatbot-diagram"/>
</div>

## 入門ガイド

### 3ステップクイックスタート

わずか3ステップでWatcherをアクティベートできます：

1.  **デバイスの電源投入**：Type-Cデータケーブルで電源を供給。バッテリーを使用する場合は、サイドボタンを長押しして電源を入れます。
2.  **ネットワーク接続**：起動後、デバイスはWi-Fiホットスポットを生成します。お使いの携帯電話またはコンピューターをこのホットスポットに接続してください。| 「[Watcherネットワーク設定](/ja/device_network_setup)」
3.  **設定とアクティベーション**：ブラウザで`192.168.4.1`にアクセスしてWatcherのWi-Fiを設定し、SenseCraft AIプラットフォームの指示に従ってアクティベーションを完了してください。| 「[Watcher Webコントロールパネル](/ja/watcher_web_control_panel/)」

:::info[アクティベーションのヒント]
アクティベーションが失敗した場合は、認証コードが正しく、デバイス認証情報が失われていないことを確認してください。以下の操作は通常、認証情報の損失を引き起こします：

1.  ファームウェアが別のプログラムによって上書きされた。
2.  認証情報をバックアップせずに大規模なファームウェア更新が実行された。
3.  完全に新しいファームウェアがフラッシュされた。

再アクティベーションが必要な場合は、デバイスのSTA Macアドレス（シリアルログから取得可能）をsensecap@seeed.ccまでお送りください。参照：[認証情報のフラッシュ](/ja/flash_watcher_agent_firmware/#flashing-authentication-info)。
:::

以下のビデオで詳細なチュートリアルをご覧いただけます：

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/6UDVsv953Tw?si=6OYFfx4orpC5p90d" title="SenseCAP Watcher for Xiaozhi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## モデルとファームウェアの更新：専用スキルのカスタマイズ

開発者や上級ユーザーは、異なるモデルやファームウェアをフラッシュして、Watcherにより強力で専用の機能を与えることができます。

詳細な手順については、包括的ガイドの関連セクションを参照してください：
- **[AIモデルフラッシュプロセス](/ja/visual_trigger_and_ai_flash#ai-model-flashing-process)**
- **[ファームウェアフラッシュプロセス](/ja/visual_trigger_and_ai_flash#firmware-flashing-process)**

## 会話を始める

SenseCAP Watcherの基本的な理解ができたので、カメラ機能の使用や積極的な相互作用のための時間ベース戦略の設定など、その会話機能とツール呼び出し機能を探索できます。

例えば、私のエージェントの役割名が`Watcher`に設定されている場合、設定は次のようになります：

<div align="center">
<img class='img-responsive' width="800" src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/watcher-agent-role.png" alt="watcher-agent-role"/>
</div>

### デバイスの起動

デバイスは起動されていない時はスタンバイ状態を維持し、周囲の会話を聞いていません。起動されると、聞き取りを開始し、ユーザーの指示に基づいて対話や操作を実行できます。

<Tabs>
<TabItem value="vision" label="視覚起動" default>

<div style={{ textAlign: 'center' }}>
<video width="auto" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/vision-trigger-watcher.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

:::info[視覚起動を有効にする方法]
デフォルトでは、視覚起動機能は無効になっています。有効にするには、Watcherが起動している時に次のように言ってください：

**「Hey Watcher, turn on model inference.」**
:::

現在の視覚起動機能は以下の設定オプションを提供します：

- **ターゲットID**（`target`）：検出するターゲットIDを指定します。このIDは使用される視覚モデルに依存し、デフォルト値は0です。
- **検出持続時間**（`duration`）：単位は秒で、視覚起動の感度を調整するために使用されます。デフォルトは1秒です（このデフォルトには1秒のデバウンス処理は含まれません）。
- **信頼度閾値**（`threshold`）：視覚モデルがオブジェクトを認識するための信頼度下限で、検出感度を調整するために使用されます。パーセンテージで表され、デフォルトは75%です。
- **クールダウン期間** (`interval`): 単位は秒で、1つの会話が終了した後、再度トリガーされるまでに必要な待機時間を示し、同じオブジェクトによる頻繁な中断を避けるために使用されます。デフォルトは8秒です。

例えば、`threshold`パラメータを変更することでモデルの感度を調整できます。現在の閾値が厳しすぎると感じる場合は、Watcherに「信頼度の閾値を60%に設定してください」と言うだけです。

</TabItem>

<TabItem value="voice" label="音声ウェイクアップ">

<div style={{ textAlign: 'center' }}>
<video width="auto" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/voice-trigger-watcher.mov" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

</TabItem>

<TabItem value="button" label="ボタンウェイクアップ">
  <div style={{ textAlign: 'center' }}>
  <video width="auto" height="320" controls>
    <source src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/click-trigger-watcher.mov" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  </div>
</TabItem>
</Tabs>

### カメラの使用

Watcherに話しかけてください：

- `Please turn on the camera`
- `What can you see?`
- `What's in front of you?`

<div style={{ textAlign: 'center' }}>
<video width="auto" height="320" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/watcher-activate-camera.mov" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

## リソース

オンプレミス展開、プライバシー保護、パーソナライズされた知識ベースの構築など、お客様のニーズに応じてSenseCAP Watcherのアプリケーション境界をさらに拡張するのに役立つ高度なリソースをご紹介します：

- [AI会話駆動スマートホーム](/ja/ha_dify_watcher_llms) - SenseCAP Watcherを通じて音声で照明、エアコン、カーテンなどのスマートホームデバイスを直接制御し、手動操作にさよならを告げます。
<!--- [Knowledge Based chatbots](/ja/knowledge_watcher_llms) - Transform SenseCAP Watcher into a virtual exhibition secretary, automatically explaining products and solutions for businesses, with the ability to intelligently identify customer points of interest.-->

## 参考資料

- [SenseCAP Watcher ハードウェア概要](/ja/watcher_hardware_overview) - SenseCAP Watcherのハードウェアリソース、構造設計など。
- [SenseCAP Watcher 操作ガイドライン](/ja/watcher_operation_guideline) - SenseCAP Watcherのオン・オフの基本ロジック。
- [SenseCAP Watcher用オンデバイス視覚モデルのトレーニング](/ja/training_model_for_watcher) - データ準備、モデルトレーニング、デプロイメントを含む、SenseCAP Watcher用オンデバイス視覚モデルのトレーニングガイド。
- [SenseCAP Watcher - Webコントロールパネル](/ja/watcher_web_control_panel)
- [SenseCAP Watcher - デバイスネットワーク設定ガイド](/ja/device_network_setup/)
