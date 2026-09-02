---
description: reSpeaker Clip AI エージェントチャットシステムの仕組みを平易な言葉で説明します。ルーティングフロー、LangGraph アーキテクチャ、ツール利用、メモリリコール、ベクター検索、音声パイプライン、保存される会話コンテキストを扱います。
title: reSpeaker Clip AI チャットシステムアーキテクチャ
keywords:
  - reSpeaker Clip
  - AI チャットシステム
  - LangGraph
  - LLM
  - speech-to-text
  - text-to-speech
  - ベクター検索
  - メモリリコール
  - Flask
  - エージェントワークフロー
slug: /respeaker_clip_ai_chat_system_architecture
sku: 100020126
last_update:
  date: 09/01/2026
  author: Kasun Thushara
createdAt: '2026-09-01'
updatedAt: '2026-09-01'
url: https://wiki.seeedstudio.com/ja/respeaker_clip_ai_chat_system_architecture/
---

reSpeaker Clip AI エージェントチャットシステムの動作を説明する平易なガイドです。ここに書かれている内容はすべて、`backend/` 内の README と実際のコードに基づいています。

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png" alt="reSpeaker Clip" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
    </a>
</div>

## 1. 概要

このシステムは Flask + LangGraph + Groq 上に構築された、音声ファーストの AI アシスタントです。あなたが音声またはテキストでメッセージを送ると、エージェントがその扱い方を判断し、必要に応じてツールを呼び出し、回答を生成し、その返信を音声で話します。

パイプラインの概要は次のとおりです：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-chat-overview.png" alt="pir" width={800} height="auto" /></p>

この仕組みを成り立たせているのは次の 3 つの考え方です：

- ルーターがすべてのリクエストを 3 つのパスのいずれかに分類します。
- それぞれのパス上のエージェントは、ツール（ウェブ検索、電卓、Notion、過去会話検索）を呼び出せます。
- ベクターストア + メモリレイヤーにより、エージェントはあなたの過去の会話や長期的な事実を思い出せます。

---

## 2. システムアーキテクチャ図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-chat-extened.png" alt="pir" width={800} height="auto" /></p>

各コンポーネントは次のように組み合わさっています：

- Flask は API の表面（チャット、ストリーミング、音声、TTS）です。
- LangGraph は、リクエストをルーティングし、選択されたノードを実行するステートマシンです。
- Groq は LLM、音声認識（Whisper）、音声合成（Orpheus）を提供します。
- Mem0 が長期メモリを提供し、Pinecone + ローカル埋め込みが過去会話検索を提供します。
- Supabase（SQLite フォールバック付き）が会話、メッセージ、要約を保存します。

---

## 3. 3 つのルーティングパス

すべてのリクエストは、3 つのノードのうちちょうど 1 つにルーティングされます。コードでは、ルート文字列を `backend/graph/graph.py` 内のノードにマッピングしています：


### `simple` — コンテキストなしチャット

- 素の LLM 応答です。ツールも特別な人格もありません。
- 一般的な質問、説明、通常の会話に使われます。
- ノード：`simple_node`（`backend/graph/nodes/simple.py`）、LLM = メインの Groq モデル。

### `context` — エージェント（ツール対応）

- リクエストに外部情報やツール（ウェブ、数学、Notion、過去の会話）が必要になる場合があります。
- このノードは `create_agent` で LangChain エージェントを構築し、モデルがループ内でツールを呼び出せるようにします。
- ノード：`agentic_node`（`backend/graph/nodes/agentic.py`）、LLM = ツール呼び出し専用モデル（`gpt-oss-20b`）。

### `persona` — スタイル付き

- ユーザーが明示的にスタイル、人格、役割、教え方などを求めた場合に使われます。
- 仕組みは `simple` と同じですが、モデルに口調を変えるよう指示する別のシステムプロンプトを使います。
- ノード：`persona_node`（`backend/graph/nodes/persona.py`）、LLM = メインの Groq モデル。

---

## 4. 分類ロジック

ルーティングは、キーワードの事前チェックと LLM による分類を組み合わせて、`router_node`（`backend/graph/router.py`）内で行われます。

1. キーワード事前チェック（高速パス）。書き起こしテキストをツール用キーワードでスキャンします。どれかに一致した場合、ルートは強制的に `context` になり、LLM は完全にスキップされます：

   ```text
   notion, to-do, todo, task list, to do list, calendar,
   schedule, reminder, note down, create a task, add a task
   ```

   例：「add a task to my to-do list」は分類器に送られることすらありません。

2. LLM による分類。それ以外の場合、リクエストは `ROUTER_PROMPT` とともにメインの Groq モデルに送られます。これは、ちょうど 1 語だけを返す分類用プロンプトです：

   | ルート | トリガーとなる入力 |
   | --- | --- |
   | `simple` | 一般的な質問、説明、通常の会話。ツールや persona は不要 |
   | `context` | 外部情報/ツールが必要になり得るもの、データ管理（Notion/カレンダー）、ユーザーのデバイス/ファイル/保存情報に関する質問 |
   | `persona` | ユーザーがスタイル、人格、教え方、役割や振る舞いを明示的に要求する場合 |

3. フォールバック。出力は小文字化され、前後の空白が削除されます。`{simple, context, persona}` に含まれないものはすべて `simple` にフォールバックします。


## 5. エージェント型ツールシステム

### ツール呼び出しの仕組み

`context` パスは LangChain の `create_agent`（`backend/graph/nodes/agentic.py`）を使います。ループは次のような形です：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-chat-tools.png" alt="pir" width={800} height="auto" /></p>

注目すべき詳細：

- エージェントはキャッシュされ、ツールのシグネチャが変わった場合にのみ再構築されます（`_get_agent`）。
- リトライロジック：最大 `MAX_RETRIES = 3` 回試行し、一時的な `tool_use_failed` エラーは 1 秒スリープして再試行します。
- ガードレール：再帰は `MAX_AGENT_ITERATIONS = 10` に制限されています。上限に達した場合、エージェントはクラッシュする代わりに固定の「上限に達しました…」メッセージを返します。
- システムプロンプトは、モデルに対してツール呼び出し回数を最小限に抑え、十分な情報が得られたらすぐに回答するよう指示します。
- SSE ストリーミング中は、各ツール呼び出しが `thinking` イベント（`{"tool": "web_search"}`）として UI に表示されます。

### 利用可能なツール

`get_available_tools()`（`backend/tools/registry.py`）は、エージェントが呼び出せるすべてのツールを返します：

| ツール | バックエンドサービス | 目的 | 設定キー |
| --- | --- | --- | --- |
| `web_search` | Tavily | 最新/現在のウェブ情報（ニュース、ファームウェア、製品詳細） | `TAVILY_API_KEY` |
| `calculator` | ローカル、安全な AST 評価 | ホワイトリストされた `+ - * / ** %` 評価器による計算 | —（常に利用可能） |
| `search_conversations` | Pinecone + ローカル埋め込み | ユーザー自身の過去の会話を関連度で検索 | `PINECONE_API_KEY` |
| `add_todo` | Notion | To-Do リストにタスクを追加 | `NOTION_API_KEY` / `NOTION_DATABASE_ID` |
| `list_todos` | Notion | ステータス付きでタスクを一覧表示 | 同上 |
| `complete_todo` | Notion | タスクを完了済みにする（名前/キーワードで一致） | 同上 |
| `delete_todo` | Notion | タスクを削除（名前/キーワードで一致） | 同上 |

- Notion ツールは、Notion が設定されている場合にのみ追加されます。
- 未設定のツールは（たとえば「Web search is unavailable…」のような）フレンドリーなメッセージを返すため、システムは優雅に機能低下します。

---

## 6. ベクター検索の詳細

### 設定

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-chat-vector.png" alt="pir" width={800} height="auto" /></p>

すべてのベクター関連設定は `config.py` / `.env` にあります：

| 設定 | デフォルト | 意味 |
| --- | --- | --- |
| `PINECONE_API_KEY` | — | ベクター検索を有効化 |
| `PINECONE_INDEX_NAME` | `conversations` | Pinecone インデックス名 |
| `PINECONE_CLOUD` | `aws` | サーバーレスのクラウドプロバイダ |
| `PINECONE_REGION` | `us-east-1` | サーバーレスリージョン |
| `EMBEDDING_MODEL` | `all-MiniLM-L6-v2` | ローカル sentence-transformers モデル |
| `EMBEDDING_DIM` | `384` | ベクター次元（インデックスと一致している必要あり） |

起動時に、`init_index()` が Pinecone インデックスを自動作成します（存在しない場合）。次元は `384`、メトリックは `cosine`、サーバーレスです。

### 埋め込まれるものとメタデータとして保存されるもの

設計として、ベクターは小さく保ち、それ以外はすべてメタデータに入れています：

- 埋め込み（ベクター）：`"<title>\n\n<overview>"` — 会話の短い意味的要約。
- メタデータ：`user_id`、`conversation_id`、`title`、`created_at`。
- ベクターストアには一切入れないもの：完全な書き起こし。実際の会話ターンは Supabase/SQLite に保存されており、一致後に id で取得されます。

ベクター id は `"{user_id}-{conversation_id}"` であり、ユーザーごとの会話ごとに安定しています。

### ベクター作成（書き込みパス）

すべてのチャット/音声ターンの後に、システムはバックグラウンドスレッドを起動します（`index_conversation_async` → `summarize_and_index` in `backend/services/conversation_service.py`）：



詳細：

- `MIN_TURNS = 2` 未満のターン数しかない会話はスキップされます。
- タイトル/概要は、メインの Groq LLM が 2 行のプロンプト（`Title:` / `Overview:`）を使って生成します。
- 埋め込みは正規化されます（cosine に適した形）。
- これらはすべて非同期（デーモンスレッド）で行われるため、ユーザーへの応答がインデックス作成でブロックされることはありません。

### ベクタークエリ（読み取りパス）

エージェントが `search_conversations` を呼び出すときのフローは次のとおりです：



重要なポイント：

- クエリは同じローカルモデルで埋め込まれ、その後 `user_id` フィルタ付きで検索されるため、ユーザーは自分自身の会話しか見ることができません。
- 一致結果には id + スコア + メタデータが含まれ、完全な要約はリレーショナルストアから id で取得されます。
- 一致結果は類似度スコア付きで整形されるため、エージェントは関連度を判断できます。

---

## 7. メモリシステム

長期メモリには Mem0 を使用し、単一ユーザー（`MEM0_USER_ID`、デフォルトは `user-1`）にスコープされています。

### メモリカテゴリ

コード内にハードコードされたバケットはありません。その代わりに、`MEM0_CUSTOM_INSTRUCTIONS` が Mem0 に対して、どの永続的な事実を優先順で抽出するかを指示します：

1. 健康上の制約とアレルギー — 特に医師から助言された内容（ユーザーに適用されるものとして解釈）。
2. スケジュール — 会議、予定、リマインダー。
3. 嗜好や個人的な詳細。

明示的に除外されるもの：アシスタント自身の応答/レシピ/説明、および一時的な単発リクエスト。

### チャットにおけるメモリ取得

プロアクティブなリコールは、ルーティングの前に毎回のリクエストで行われます（`backend/routes/chat.py` 内の `recall(text)`）：

1. 受信メッセージが Mem0 のセマンティック検索（`top_k = 5`）に送られます。
2. 結果はスコアの内訳に対する 2 段階の関連度チェックでフィルタされます：
   - `semantic ≥ 0.28` → 採用、または
   - `semantic ≥ 0.24` かつ `bm25 > 0.01`（キーワードでブーストされたヒット）→ 採用。
3. 残ったメモリは `created_at`（新しいものが先）でソートされ、次の形式で整形されます：

   ```text
   Relevant context from your past conversations:
   - <memory text> (created 2026-08-30)
   ```

4. そのブロックは、どのノードに届く前にもユーザーメッセージの前に付加されます。つまり、LLM はそれをコンテキストとして受け取りますが、トピックに直接関連する場合にのみ使うよう指示されます。

書き込みはすべてのやり取りの後（`save_exchange`）に行われます：ユーザー/アシスタントのペアがカスタムインストラクションとともに Mem0 に送信されます。Mem0 キーが存在しない場合、メモリの保存と呼び出しはどちらもエラーを記録して無視され、正常にフォールバックします。



---

## 8. チャットセッションとコンテキスト

### セッション構造

「セッション」とは、リレーショナルに保存された会話（Supabase PostgreSQL、または SQLite フォールバック）を指します。スキーマは次のとおりです：

- `users` — `id`, `email`（単一ユーザー、`user-1` をシード）。
- `conversations` — `id`, `user_id`, `title`, `overview`, `action_items`, timestamps。
- `messages`/`turns` — `conversation_id`, `role`（`user`/`assistant`）, `content`, timestamp。

1 ターンのフロー：

1. 会話を作成（または再利用）して `conversation_id` を取得。
2. コンテキストを読み込む：`recall()` メモリ + `get_recent_messages(conversation_id, 10)` による履歴。
3. `AgentState` を構築し、LangGraph に通す。
4. 応答後：両方のターンを保存し、やり取りを Mem0 に保存し、非同期のベクトルインデックス作成を開始。

### コンテキストウィンドウ

LLM 用に組み立てられるコンテキストは、意図的に小さくレイヤー構造になっています：

| コンポーネント | ソース | サイズ |
| --- | --- | --- |
| システムプロンプト | パスごとの定数（`simple`/`persona`/agent `SYSTEM_PROMPT`） | 固定 |
| 会話履歴 | `get_recent_messages(conversation_id, 10)` | 直近 10 ターン（ユーザー 10 件 + アシスタント 10 件）、時系列順 |
| リコールされたメモリ | Mem0 `recall()`、上位 5 件、フィルタ済み | 最大 5 件のメモリ |
| 現在のユーザーメッセージ | `format_memories(...) + transcript` | リクエスト本体 |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-chat-context.png" alt="pir" width={800} height="auto" /></p>


注意：

- 履歴はベクトルストアではなくリレーショナルストアから取得します（ベクトルストアにはターンではなく要約が保存されます）。
- メモリはユーザーメッセージにインラインで挿入されるため、モデルはそれらを「過去の会話からの関連コンテキスト」として扱います。
- エージェントパスはメッセージを `[history..., ("user", memories + transcript)]` の形で構築し、ツールを用いたエージェントループに任せます。

---

## 9. システムプロンプト構成

システムプロンプトは 4 種類あります：

| プロンプト | 位置 | 使用箇所 | 役割 |
| --- | --- | --- | --- |
| `ROUTER_PROMPT` | `backend/graph/router.py` | ルーター分類 | 1 語で返答：`simple` / `context` / `persona` |
| `SIMPLE_PROMPT` (`simple.py`) | `backend/graph/nodes/simple.py` | `simple_node` | 役立つ音声アシスタント、通常のチャット |
| `PERSONA_PROMPT` (`persona.py`) | `backend/graph/nodes/persona.py` | `persona_node` | simple と同様だが、ユーザーのリクエストに合わせてスタイル/教え方を調整 |
| `SYSTEM_PROMPT`（エージェント） | `backend/graph/nodes/agentic.py` | agent | ツール対応アシスタント；各ツールとその使用タイミングを説明 |

simple、persona、agentic の各プロンプトは、共通のハウススタイルの末尾を共有します：

- 最大 2〜3 個の短い文で応答すること。
- プレーンテキストのみ — markdown、アスタリスク、絵文字は禁止。
- リコールされたメモリは、トピックに直接関連する場合にのみ使用すること（スケジュールと食事の分離は明示的に強制）。
- 矛盾がある場合は、最も最近作成されたメモリを信頼すること。
- ユーザーが新しい事実を述べたときは、その事実だけを認識し、無関係なメモリを反復しないこと。

agentic プロンプトではさらに次の点を指定します：

- ツールに名前を付ける（`web_search`, `calculator`, `search_conversations`, Notion ツール）。
- ツール呼び出しを最小限にするよう指示し、十分な情報が集まったら停止する。
- 短くプレーンテキストの回答形式を維持する。

---

## 10. 使用している LLM モデル

すべてのモデルは Groq 上で動作します。`backend/llm/client.py`、`config.py`、`groq_client.py` で定義されています：

| 役割 | 環境変数 | デフォルトモデル | Temperature | 備考 |
| --- | --- | --- | --- | --- |
| メイン LLM（router、simple、persona、要約） | `GROQ_LLM_MODEL` | `qwen/qwen3.6-27b` | 0.7 | `ChatGroq` インスタンス `llm` |
| エージェント / ツール呼び出し用 LLM | `GROQ_AGENT_MODEL` | `openai/gpt-oss-20b` | 0.0 | `ChatGroq` インスタンス `agent_llm`、`create_agent` で使用 |
| 音声認識（Speech-to-text） | `GROQ_STT_MODEL` | `whisper-large-v3` | 0.0 | Whisper 文字起こし |
| 音声合成（Text-to-speech） | `GROQ_TTS_MODEL` | `canopylabs/orpheus-v1-english` | — | Voice = `TTS_VOICE`（`autumn`） |
| 埋め込み（ローカル、非 Groq） | `EMBEDDING_MODEL` | `all-MiniLM-L6-v2` | — | `sentence-transformers`、384 次元、正規化済み |

LLM 推論のデフォルト値（`groq_client.chat` 経由）：`max_completion_tokens = 2048`、`top_p = 1.0`、temperature は上書き可能。



## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>