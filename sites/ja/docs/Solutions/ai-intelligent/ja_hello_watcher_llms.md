---
description: "Hello Watcher"
title: 世界と能動的に対話する AI アシスタント
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
slug: /solutions/hello_watcher_llms
sidebar_position: 1
last_update:
  date: 09/16/2025
  author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info 想像してみてください
書斎に入ると、机の上の SenseCAP Watcher があなたの存在を即座に感知します。画面が点灯し、笑顔で挨拶し、その日の ToDo リストを表示してくれます――あなたは一言も発さず、指一本動かす必要もありません。
:::

SenseCAP Watcher は、人とデバイスのインタラクションのあり方を再定義します。

それは独自の「Frictionless Trigger（摩擦のないトリガー）」会話機能を備えており、あなたが近づくと自律的にインタラクションを開始します。これは単なる技術的アップグレードではなく、インタラクションロジックそのものの根本的な転換です。**人が機械に合わせる」から「機械が能動的に人に合わせる」へと、主導権が人間からマシンへと初めて移行し、体験が飛躍的に進化します。**

Watcher の「Keen Eye（鋭い眼）」は強力な **オンデバイス AI ビジョンチップ（Himax）** によって駆動され、物体認識やターゲット追跡を高速にローカル処理します。拡張可能なアシスタントファームウェアと組み合わせることで、単なるカメラを超え、進化しながらあなたのニーズを理解する専用 AI アシスタントとなります。

## コアとなる優位性

<div class="info-section">
  <div class="section-header">
      <h2><a href="https://www.seeedstudio.com/SenseCAP-Watcher-XIAOZHI-EN-p-6532.html?utm=wiki&utm=hello_watcher_llms">SenseCAP Watcher</a></h2>
      <p>オンデバイス AI ビジョンと柔軟な開発環境を統合したインテリジェントデバイスで、パーソナライズされた AI アプリケーションを簡単に構築・デプロイできるよう設計されています。</p>
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
				<h3>オフラインの「Keen Eye」：効率的なオンデバイスビジョン処理</h3>
				<p>高性能な AI ビジョンチップ（Himax）を搭載し、すべての画像処理をデバイス上でローカルに完結します。高速な応答と強化されたプライバシー保護を実現し、データをクラウドにアップロードする必要はありません。</p>
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
				<h3>ノーコードで AI アプリを構築、レゴのようにシンプル</h3>
				<p>SenseCraft AI プラットフォームを活用して AI モデルをデプロイし、数回のクリックだけで特定シナリオ向けアプリケーションを素早く構築できます。AI モデルのデプロイは写真編集と同じくらい簡単になり、プログラミングの知識は一切不要です。</p>
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
				<p>柔軟な MCP アーキテクチャに基づき、新しい AI ツールを自由に定義し、ローカルまたはクラウドサービスを素早く統合でき、既存のスマートシステムにシームレスに組み込めます。</p>
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
				<h3>ハードウェア拡張性：追加インターフェースのサポート</h3>
				<p>GPIO 拡張インターフェースを備え、さまざまなセンサーやアクチュエータを容易に接続できるため、深いカスタマイズが可能で、より多くのクリエイティブな実装をサポートします。</p>
			</div>
		</li>
	</ul>
</div>

## 動作の仕組み

SenseCAP Watcher は「モジュール式」のインテリジェントロボットと考えることができ、その中核動作は 3 つの主要コンポーネントの連携に依存しています。

1.  **ハードウェアコア（ESP32S3）**：基盤となるハードウェアを駆動し、カメラデータを処理し、クラウドサービスとの安定した接続を維持します。
2.  **視覚神経（Himax AI チップ）**：デバイスにリアルタイムな環境認識能力を与える強力なオンデバイス AI ビジョン処理ユニットです。
3.  **クラウドブレイン（バックエンドサービス）**：AI ロール設定、MCP ツールのスケジューリング、デバイスの一元管理を担当します。

プロセスは次のように単純化できます。

Watcher の「目」（カメラ）が画像を取得 → 「視覚神経」（Himax チップ）が認識を行いアシスタントを起床 → 「脳」（バックエンド AI、MCP サービス）がコンテキストを理解して応答します。

このモジュール設計により、高い柔軟性と拡張性が実現されています。

<div align="center">
  <img class='img-responsive' width="680" src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/watcher-chatbot-diagram.png" alt="watcher-chatbot-diagram"/>
</div>

## はじめに

### 3 ステップでクイックスタート

3 ステップで Watcher をアクティベートできます。

1.  **デバイスの電源を入れる**：Type-C データケーブルで給電します。バッテリーを使用する場合は、側面のボタンを長押しして電源を入れます。
2.  **ネットワークに接続**：起動後、デバイスは Wi-Fi ホットスポットを生成します。スマートフォンまたはコンピュータをこのホットスポットに接続します。 | 「[Watcher Network Setup](/ja/device_network_setup)」
3.  **設定とアクティベーション**：ブラウザで `192.168.4.1` にアクセスして Watcher の Wi-Fi を設定し、SenseCraft AI プラットフォーム上の指示に従ってアクティベーションを完了します。 | 「[Watcher Web Control Panel](/ja/watcher_web_control_panel/)」

:::info[アクティベーションのヒント]
アクティベーションに失敗する場合は、認証コードが正しいこと、およびデバイスの認証情報が失われていないことを確認してください。以下の操作は通常、認証情報の消失を引き起こします。

1.  ファームウェアが別のプログラムによって上書きされた。
2.  認証情報をバックアップせずに大規模なファームウェアアップデートを実行した。
3.  完全に新しいファームウェアを書き込んだ。

<!-- If reactivation is needed, please send the device's STA Mac address (can be obtained from serial logs) to sensecap@seeed.cc for assistance. Please refer to: [Flashing Authentication Info](/ja/flash_watcher_agent_firmware/#flashing-authentication-info). -->
:::

以下の動画で、詳細なチュートリアルをご覧いただけます。

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/6UDVsv953Tw?si=6OYFfx4orpC5p90d" title="SenseCAP Watcher for Xiaozhi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## モデルとファームウェアの更新：専用スキルをカスタマイズ

開発者や上級ユーザーは、異なるモデルやファームウェアを書き込むことで、Watcher により強力で専用の機能を持たせることができます。

詳細な手順については、包括的なガイド内の関連セクションを参照してください。
- **[AI Model Flashing Process](/ja/visual_trigger_and_ai_flash#AI-モデル書き込みプロセス)**
- **[Firmware Flashing Process](/ja/visual_trigger_and_ai_flash#ファームウェア書き込みプロセス)**

## 会話を始める

SenseCAP Watcher の基本を理解したら、カメラ機能の利用や、能動的なインタラクションのための時間ベースの戦略設定など、その会話機能やツール呼び出し機能を探索できます。

たとえば、エージェントのロール名を `Watcher` に設定した場合、設定画面は次のようになります。

<div align="center">
<img class='img-responsive' width="800" src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/watcher-agent-role.png" alt="watcher-agent-role"/>
</div>

### デバイスを起こす

デバイスは起床していないときは待機状態にあり、周囲の会話を聞き取りません。一度起床するとリスニングを開始し、ユーザーの指示に基づいて対話したり操作を実行したりできます。

<Tabs>
<TabItem value="vision" label="ビジュアル起床" default>

<div style={{ textAlign: 'center' }}>
<video width="auto" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/vision-trigger-watcher.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

:::info[ビジュアル起床を有効にする方法]
デフォルトでは、ビジュアル起床機能は無効になっています。有効にするには、Watcher が起床しているときに次のように話しかけてください。

**"Hey Watcher, turn on model inference."**
:::

現在のビジュアル起床機能では、次の設定オプションが利用できます。

- **ターゲット ID**（`target`）：検出するターゲット ID を指定します。この ID は使用するビジュアルモデルに依存し、デフォルト値は 0 です。
- **検出継続時間**（`duration`）：単位は秒で、ビジュアル起床の感度を調整するために使用します。デフォルトは 1 秒です（このデフォルトには 1 秒のデバウンス処理は含まれません）。
- **信頼度しきい値**（`threshold`）：ビジュアルモデルが物体を認識するための信頼度の下限で、検出感度の調整に使用します。パーセンテージで表され、デフォルトは 75% です。
- **クールダウン期間**（`interval`）：単位は秒で、1回の会話が終了してから再度トリガーされるまでに必要な待機時間を示します。同じ対象による頻繁な割り込みを避けるために使用されます。デフォルトは 8 秒です。

例えば、`threshold` パラメータを変更することでモデルの感度を調整できます。現在のしきい値が厳しすぎると感じた場合は、Watcher に「Please set the confidence threshold to 60%」と言うだけで構いません。

</TabItem>

<TabItem value="voice" label="音声ウェイクアップ">

<div style={{ textAlign: 'center' }}>
<video width="auto" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/voice-trigger-watcher.mov" type="video/mp4" />
  お使いのブラウザは video タグをサポートしていません。
</video>
</div>

</TabItem>

<TabItem value="button" label="ボタンウェイクアップ">
  <div style={{ textAlign: 'center' }}>
  <video width="auto" height="320" controls>
    <source src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/click-trigger-watcher.mov" type="video/mp4" />
    お使いのブラウザは video タグをサポートしていません。
  </video>
  </div>
</TabItem>
</Tabs>

### カメラの使用

Watcher に次のように話しかけてください：

- `Please turn on the camera`
- `What can you see?`
- `What's in front of you?`

<div style={{ textAlign: 'center' }}>
<video width="auto" height="320" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/watcher-activate-camera.mov" type="video/mp4" />
  お使いのブラウザは video タグをサポートしていません。
</video>
</div>

## リソース

ここでは、オンプレミス展開、プライバシー保護、パーソナライズされたナレッジベースの構築など、ニーズに応じて SenseCAP Watcher のアプリケーションの境界をさらに拡張するのに役立つ高度なリソースを紹介します：

- [AI Conversation-Driven Smart Home](/ja/ha_dify_watcher_llms) - SenseCAP Watcher を通じて音声で直接ライト、エアコン、カーテンなどのスマートホームデバイスを制御し、手動操作に別れを告げましょう。
<!--- [Knowledge Based chatbots](/ja/knowledge_watcher_llms) - Transform SenseCAP Watcher into a virtual exhibition secretary, automatically explaining products and solutions for businesses, with the ability to intelligently identify customer points of interest.-->

## 参考資料

- [SenseCAP Watcher Hardware Overview](/ja/watcher_hardware_overview) - SenseCAP Watcher のハードウェアリソース、構造設計など。
- [SenseCAP Watcher Operation Guideline](/ja/watcher_operation_guideline) - SenseCAP Watcher の電源オン／オフの基本ロジック。
- [Training On-Device Vision Models for SenseCAP Watcher](/ja/training_model_for_watcher) - データ準備、モデル学習、デプロイを含む、SenseCAP Watcher 向けオンデバイスビジョンモデルの学習ガイド。
- [SenseCAP Watcher - Web Control Panel](/ja/watcher_web_control_panel)
- [SenseCAP Watcher - Device Network Setup Guide](/ja/device_network_setup/)
