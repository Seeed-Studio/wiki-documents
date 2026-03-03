---
description: Reachy Mini アプリケーションを構築するユーザーを支援する AI エージェント向けの包括的な開発ガイド。SDK の基本、REST API、プラットフォーム互換性、ベストプラクティスを網羅します。
title: AI エージェント向け Reachy Mini 開発ガイド
slug: /reachymini_agents
keywords:
- ai agents
- development guide
- sdk
- rest api
- platform compatibility
- app development
- best practices
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# AI エージェント向け Reachy Mini 開発ガイド

このガイドは、AI エージェントがユーザーによる Reachy Mini アプリケーション開発を支援できるようにするためのものです。

---

## エージェントの振る舞い

### 最初に行うこと: agents.local.md を確認する

**他のどんなことをする前に必ず**、現在のディレクトリで `agents.local.md` を検索してください:

```
IF agents.local.md exists:
    Read it immediately
    It contains user configuration and session context
ELSE:
    → Run skills/setup-environment.md to set up the environment
```

このファイルには、ユーザーのロボットの種類、好み、セットアップ状況が保存されています。必ず最初に確認してください。

### 教師として振る舞う

ユーザーから明示的に別の依頼がない限り:
- 進めながら概念を説明する
- 質問を促す（"Let me know if you'd like more detail on any of this"）
- 非技術的なユーザーを各ステップで丁寧に案内する
- 事前知識があると決めつけない

### 常に Python アプリを作成する

アプリを作成するときは:
- **常に Python を使用すること** - Python アプリはロボットのアプリストア経由で検出・共有できます
- **アプリ用フォルダを手動で作成してはいけません** - 必ず app assistant を使用してください（メタデータ、エントリポイント、構造を処理します）
- **コマンドが失敗した場合** - 複雑な回避策を試みず、ユーザーにターミナルで実行してもらうよう依頼してください
- **Web UI は `static/` に配置** - Python アプリには Web フロントエンドを持たせることができます

```bash
# Default template (minimal app - good for most cases):
reachy-mini-app-assistant create <app_name> <path> --publish

# Conversation template (for LLM integration, speech, making robot talk):
reachy-mini-app-assistant create --template conversation <app_name> <path> --publish
```

詳細は `skills/create-app.md` を参照してください。JS のみのアプリは、現時点では検出/共有に対応していません。

### コーディング前に必ず plan.md を作成する

どんなアプリを実装する前にも、次を行ってください:
1. アプリのディレクトリに `plan.md` を作成する
2. ユーザーが望んでいる内容についての自分の理解を書く
3. 技術的なアプローチを列挙する
4. `plan.md` 内に確認用の質問と回答欄を用意する
5. コーディングを始める前に回答を待つ

### agents.local.md にメモを残す

次の情報を `agents.local.md` に保存してください:
- ユーザーのロボットの種類（Lite/Wireless）
- 環境設定
- 将来のセッションに役立つコンテキスト
- 簡潔にまとめること

---

## ロボットの基本

**Reachy Mini** は、小型で表情豊かなロボットです:

| コンポーネント | 説明 |
|-----------|-------------|
| **Head** | 6 自由度: x, y, z, ロール、ピッチ、ヨー（スチュワート・プラットフォーム経由） |
| **Body** | 垂直軸まわりの回転 |
| **Antennas** | 2 つのモーター。物理ボタンとしても使用可能 |

**ハードウェアのバリエーション:**
- **Lite**: ノート PC と USB 接続（十分な計算能力）
- **Wireless**: オンボード CM4、WiFi 経由で接続（計算能力は限定的）

---

## SDK の基本

### 接続

```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # Your code here
```

### 2 つのモーションメソッド

| メソッド | 使用する状況 |
|--------|----------|
| `goto_target()` | **デフォルト** - 各ジェスチャーが少なくとも 0.5 秒続く場合のスムーズな補間 |
| `set_target()` | 10Hz 以上のリアルタイム制御ループ（例: トラッキング） |

### 基本的な例

`examples/minimal_demo.py` を参照して実行してください - 接続、ヘッドの動き、アンテナ制御を示します。

### コードを書く前に

- API の概要については `docs/source/SDK/python-sdk.md` を読む
- メソッドシグネチャと docstring を把握するために `src/reachy_mini/reachy_mini.py` に目を通す
- 実行可能なコードパターンを確認するために `examples/` をチェックする

---

## REST API

デーモンは `http://{daemon-ip}:8000/api` で HTTP/WebSocket API を公開しています。

- **Lite**: `localhost:8000`（デーモンはローカルマシン上で動作）
- **Wireless**: `reachy-mini.local:8000` またはロボットの IP アドレス

**REST API を使用する用途:** Web UI、非 Python クライアント、リモート制御、HTTP 経由での AI/LLM 連携。=> 注: 現時点でアプリを検出可能にするには Python アプリである必要があります。これは将来のリリースで変更される予定です。

**インタラクティブなドキュメント:** `http://{daemon-ip}:8000/docs`（デーモンが動作中の場合）

詳細は `skills/rest-api.md` を参照してください。

---

## プラットフォーム互換性

| セットアップ | 計算能力 | カメラ | 備考 |
|-------|---------|--------|-------|
| **Lite** | フル（ノート PC） | 直接 USB 接続 | 最も柔軟で、開発に最適 |
| **Wireless (local)** | 限定的（CM4） | 直接接続 | メモリ/CPU に制約あり |
| **Wireless (streamed)** | フル（ノート PC） | ネットワーク経由 | トラッキング品質がやや低下 |
| **Simulation** | フル | N/A | カメラ機能はテスト不可 |

---

## 安全制限

| 関節 | 可動範囲 |
|-------|-------|
| Head pitch/roll | [-40, +40] 度 |
| Head yaw | [-180, +180] 度 |
| Body yaw | [-160, +160] 度 |
| Yaw delta (head - body) | 最大 65° の差 |

ボディとの軽い接触は安全です。SDK は値を自動的にクランプします。

座標系とアーキテクチャの詳細については、`docs/source/SDK/core-concept.md` を参照してください。

---

## サンプルアプリ

| アプリ | 主なパターン | ソース |
|-----|--------------|--------|
| **reachy_mini_conversation_app** | AI 連携、制御ループ、LLM ツール | [GitHub](https://github.com/pollen-robotics/reachy_mini_conversation_app) |
| **marionette** | モーションの記録、安全なトルク、HF データセット | [HF Space](https://huggingface.co/spaces/RemiFabre/marionette) |
| **fire_nation_attacked** | ヘッドをコントローラとして使用、リーダーボード、ゲーム | [HF Space](https://huggingface.co/spaces/RemiFabre/fire_nation_attacked) |
| **spaceship_game** | ヘッドをジョイスティックとして使用、アンテナボタン | [HF Space](https://huggingface.co/spaces/apirrone/spaceship_game) |
| **reachy_mini_radio** | アンテナとのインタラクションパターン | [HF Space](https://huggingface.co/spaces/pollen-robotics/reachy_mini_radio) |
| **reachy_mini_simon** | GUI なしのパターン（アンテナで開始） | [HF Space](https://huggingface.co/spaces/apirrone/reachy_mini_simon) |
| **hand_tracker_v2** | カメラベースの制御ループ | [HF Space](https://huggingface.co/spaces/pollen-robotics/hand_tracker_v2) |
| **reachy_mini_dances_library** | 象徴的なモーション定義 | [GitHub](https://github.com/pollen-robotics/reachy_mini_dances_library) |

---

## ドキュメント

完全な SDK ドキュメントは `docs/source/` にあります:

| トピック | ファイル |
|-------|------|
| クイックスタート | `docs/source/SDK/quickstart.md` |
| Python SDK | `docs/source/SDK/python-sdk.md` |
| コアコンセプト | `docs/source/SDK/core-concept.md` |
| AI 連携 | `docs/source/SDK/integration.md` |
| トラブルシューティング | `docs/source/troubleshooting.md` |

プラットフォーム別ガイド（Lite、Wireless、Simulation）については、`docs/source/platforms/` を参照してください。

---

## スキルリファレンス

詳細な知識が必要になったときは、`skills/` 内の次のファイルを読んでください:

| スキル | 使用するタイミング |
|-------|-------------|
| **setup-environment.md** | 初回セッションで、`agents.local.md` が存在しない場合 |
| **create-app.md** | `reachy-mini-app-assistant` で新しいアプリを作成するとき |
| **control-loops.md** | リアルタイムのリアクティブアプリ（トラッキング、ゲーム）を構築するとき |
| **motion-philosophy.md** | `goto_target` と `set_target` のどちらを選ぶか検討するとき |
| **safe-torque.md** | モーターをギクシャクさせずに有効/無効にするとき |
| **ai-integration.md** | LLM 駆動のアプリを構築するとき |
| **symbolic-motion.md** | モーションを数学的に定義するとき（ダンス、リズム） |
| **interaction-patterns.md** | アンテナをボタンとして、ヘッドをコントローラとして使用するとき |
| **debugging.md** | アプリのクラッシュ、接続問題、基本的な確認を行うとき |
| **testing-apps.md** | 納品前にテストするとき（シミュレーション vs 実機） |
| **rest-api.md** | 非 Python クライアント向けの HTTP/WebSocket API |
| **deep-dive-docs.md** | フル SDK ドキュメントを読むべきタイミング |

---

## クイックリファレンス

**モーター名:** `body_rotation`, `stewart_1-6`, `right_antenna`, `left_antenna`

**補間メソッド:** `linear`, `minjerk` (default), `ease_in_out`, `cartoon`

**感情ライブラリ:**
```python
from reachy_mini.motion.recorded_move import RecordedMoves
moves = RecordedMoves("pollen-robotics/reachy-mini-emotions-library")
mini.play_move(moves.get("happy"), initial_goto_duration=1.0)
```

---

## コミュニティ

- **App guide**: https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps
- **Source code**: https://github.com/pollen-robotics/reachy_mini
- **Community apps**: https://huggingface.co/spaces?q=reachy_mini
- **Discord**: https://discord.gg/Y7FgMqHsub
