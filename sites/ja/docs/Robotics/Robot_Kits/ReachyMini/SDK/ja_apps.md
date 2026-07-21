---
description: Reachy Mini アプリの構築と公開に関する完全ガイド。アプリの作成、テスト、デバッグ、および Hugging Face Spaces への公開までを網羅します。
title: アプリの構築と公開
slug: /reachymini_sdk_apps
keywords:
  - apps
  - building
  - publishing
  - python apps
  - hugging face spaces
  - ReachyMiniApp
  - app assistant
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/ja/reachymini_sdk_apps/
---

# アプリの構築と公開

Reachy Mini には Hugging Face Spaces によって支えられたアプリエコシステムがあります。Python アプリを作成して公開すると、どの Reachy Mini オーナーもダッシュボードからワンクリックでインストールできます。


<div align="center">
  <a href="https://www.youtube.com/watch?v=h2lyqR2eMyM" target="_blank">
    <img src="https://img.youtube.com/vi/h2lyqR2eMyM/maxresdefault.jpg" width="560" alt="点击观看视频" style={{border: "1px solid #ddd", borderRadius: "8px"}} />
    <p><i>▶️ 点击在 YouTube 上观看：Reachy Mini SDK 运行指南</i></p>
  </a>
</div>

> スクリーンショット付きのステップバイステップチュートリアルについては、ブログ記事 [Make and Publish Your Reachy Mini Apps](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps) を参照してください。

---

## AI エージェントの利用

AI コーディングエージェント（Claude Code、Cursor、Copilot など）を使う場合、アプリを自動で構築させることができます。プロジェクトの [AGENTS.md](https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md) を読ませてください：

> *Reachy Mini アプリを作成したいです。まず https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md を読んでください*

リポジトリには、AI エージェントが正しくアプリを構築するために使用する詳細なガイドを含む `skills/` ディレクトリがあります：

| スキル | 内容 |
|-------|---------------|
| `create-app.md` | アプリ作成ワークフローとテンプレート |
| `ai-integration.md` | LLM を利用したアプリの構築 |
| `control-loops.md` | リアルタイムリアクティブアプリ（トラッキング、ゲーム） |
| `motion-philosophy.md` | `goto_target` と `set_target` の使い分け |
| `interaction-patterns.md` | アンテナをボタンとして使う、頭部をコントローラとして使う |
| `symbolic-motion.md` | 動きを数学的に定義する（ダンス、リズム） |

---

## アプリの仕組み

Reachy Mini デーモンは、アプリのライフサイクル全体を管理します：

1. （ダッシュボードまたは REST API から）「アプリ開始」リクエストを送信します。
2. デーモンはアプリを **Python サブプロセス**（`python -u -m your_app.main`）として起動します。
3. アプリは接続済みの `ReachyMini` インスタンスと `stop_event` を受け取ります。
4. 停止時には、デーモンがプロセスに `SIGINT` を送信し、これによりグレースフルシャットダウンがトリガーされます。
5. アプリ終了後、デーモンはロボットをデフォルトの姿勢に戻します。

**主な制約事項：**
- 同時に実行できるアプリは **1 つだけ** です。
- アプリはデーモンのサブプロセス内で動作し、自身でハードウェア接続を管理しません。
- Wireless ロボットでは、アプリは `/venvs/apps_venv/` にある共有仮想環境内で実行されます。

---

## アプリの作成

常に CLI ツールを使ってアプリを作成してください。これにより、正しい構造、メタデータ、エントリポイントが自動生成されます：

```bash
# Install reachy-mini if not already done
uv pip install reachy-mini

# Create and publish in one step (recommended)
reachy-mini-app-assistant create my_app_name /path/to/destination --publish

# Or create locally first
reachy-mini-app-assistant create my_app_name /path/to/destination
```

> **アプリフォルダを手動で作成しないでください。** アシスタントがボイラープレート、Hugging Face タグ、エントリポイント、および正しいパッケージ構造を処理します。手動作成は、デバッグが難しい微妙な問題につながります。

### テンプレートを選ぶ

| テンプレート | コマンド | 使用タイミング |
|----------|---------|----------|
| **Default** | `reachy-mini-app-assistant create my_app .` | ほとんどのアプリ向け。最小限の動作する構造。 |
| **Conversation** | `reachy-mini-app-assistant create --template conversation my_app .` | LLM 連携、音声、ロボットに話をさせる場合。オーディオパイプライン、LLM ツール、モーション融合など必要な配線一式を含みます。 |

### 生成される構造

```
my_app/
├── index.html              # Hugging Face Space landing page
├── style.css               # Landing page styles
├── pyproject.toml          # Package config with entry points
├── README.md               # Must contain reachy_mini_python_app tag
└── my_app/
    ├── __init__.py
    ├── main.py             # Your app logic
    └── static/             # Optional web UI
        ├── index.html
        ├── style.css
        └── main.js
```

---

## ReachyMiniApp の契約

アプリは `ReachyMiniApp` を継承し、`run()` メソッドを実装するクラスです。最小構造は次のとおりです：

```python
import threading
import time

import numpy as np

from reachy_mini import ReachyMini, ReachyMiniApp
from reachy_mini.utils import create_head_pose


class MyApp(ReachyMiniApp):
    def run(self, reachy_mini: ReachyMini, stop_event: threading.Event):
        t0 = time.time()

        while not stop_event.is_set():
            t = time.time() - t0

            # Move the head
            yaw = 30.0 * np.sin(2.0 * np.pi * 0.2 * t)
            head_pose = create_head_pose(yaw=yaw, degrees=True)

            # Move the antennas
            a = np.deg2rad(25.0 * np.sin(2.0 * np.pi * 0.5 * t))
            antennas = np.array([a, -a])

            reachy_mini.set_target(head=head_pose, antennas=antennas)
            time.sleep(0.02)


if __name__ == "__main__":
    app = MyApp()
    try:
        app.wrapped_run()
    except KeyboardInterrupt:
        app.stop()
```

### 重要なポイント

- **`run(reachy_mini, stop_event)`**: 実装が必須の唯一のメソッドです。`ReachyMini` インスタンスはすでに接続済みで、すぐに使用できます。メインループ内で `stop_event` をポーリングし、グレースフルに終了してください。
- **`wrapped_run()`**: `__main__` ブロックから呼び出されます。ロボットへの接続、オプションサービスの開始、そして `run()` メソッドの呼び出しを処理します。
- **`stop()`**: `stop_event` をセットします。デーモンはアプリ停止時に `SIGINT` を通じてこれを呼び出します。
- **`__main__` ブロック**: 必須です。デーモンはアプリをモジュールとして（`python -m my_app.main`）実行するため、このブロックが実際のエントリポイントになります。

### `pyproject.toml` のエントリポイント

デーモンは標準的な Python エントリポイントを通じてアプリを検出します。アシスタントがこれを自動生成します：

```toml
[project.entry-points."reachy_mini_apps"]
my_app = "my_app.main:MyApp"
```

グループ名は `reachy_mini_apps`（アンダースコア区切り）です。値はクラス（`module.main:ClassName`）を指します。

プロジェクトに追加の依存関係がある場合は、このファイルに追記してください。

---

## オプション：アプリ用 Web UI

アプリに設定ページや任意の Web インターフェースを持たせたい場合は、クラスで `custom_app_url` を設定します：

```python
class MyApp(ReachyMiniApp):
    custom_app_url: str | None = "http://0.0.0.0:8042"

    def run(self, reachy_mini: ReachyMini, stop_event: threading.Event):
        # Define FastAPI routes on self.settings_app
        @self.settings_app.post("/my_endpoint")
        def my_endpoint():
            return {"status": "ok"}

        # Your main loop...
```

`custom_app_url` が設定されている場合、アプリは自動的に FastAPI Web サーバーを起動し、パッケージ内の `static/` ディレクトリからファイルを配信します。ダッシュボードには、この UI を開くための設定アイコンが表示されます。ページには lite の場合 `http://localhost:8042`、wireless の場合 `http://reachy-mini.local:8042` からアクセスできます。

アプリに Web UI が不要な場合は、`custom_app_url = None` を設定してください。

> トグルとサウンド再生を備えた動作例については、[template app](https://huggingface.co/spaces/pollen-robotics/reachy_mini_template_app) を参照してください。

---

## アプリのテスト

### 1. 構造を検証する

```bash
reachy-mini-app-assistant check /path/to/my_app
```

これにより、アプリが正しい構造、エントリポイント、メタデータを持っているかをチェックします。

### 2. 直接実行する

素早く反復するために、アプリの `main.py` を直接実行できます（デーモンが動作していることを確認してください）：

```bash
python -m my_app.main
```

### 3. ダッシュボード経由でテストする

アプリをローカルにインストールし、ユーザーと同じようにダッシュボード経由でテストします：

```bash
# Install in development mode
uv pip install -e /path/to/my_app

# Start the daemon
reachy-mini-daemon          # Lite
reachy-mini-daemon --sim    # Simulation
```

その後、[http://127.0.0.1:8000/](http://127.0.0.1:8000/) を開きます — インストール済みリストにアプリが表示されます。

---

## Hugging Face への公開

### 1. Hugging Face にログイン

```bash
uv pip install --upgrade huggingface_hub
hf auth login
```

**Write** 権限を持つトークンを使用してください。

### 2. 公開

アプリ作成時に `--publish` を使用していれば、すでに Git リモートを持つ Hugging Face Space になっています。あとは push するだけです：

```bash
git add . && git commit -m "my changes" && git push
```

`--publish` なしで作成した場合は、後から公開できます：

```bash
reachy-mini-app-assistant publish /path/to/my_app
```

### 3. 発見可能性

アプリを Reachy Mini アプリストアに表示させるには、`README.md` の YAML frontmatter に `reachy_mini_python_app` タグを含める必要があります：

```yaml
---
tags:
  - reachy_mini_python_app
---
```

アシスタントはこれを自動的に追加します。README を手動で作成する場合は、忘れずに追加してください。

---

## アプリのインストール

### ダッシュボードから

Reachy Mini ダッシュボードを開き、任意のコミュニティアプリで **Install** をクリックします。これが最も簡単な方法です。

### REST API 経由

```bash
# Install from Hugging Face
curl -X POST http://localhost:8000/api/apps/install \
  -H "Content-Type: application/json" \
  -d '{"url": "https://huggingface.co/spaces/<user>/<app_name>"}'

# Start an app
curl -X POST http://localhost:8000/api/apps/start-app/<app_name>

# Stop the current app
curl -X POST http://localhost:8000/api/apps/stop-current-app

# List installed apps
curl http://localhost:8000/api/apps/list
```

Wireless バージョンの場合は、`localhost` を `reachy-mini.local` またはロボットの IP アドレスに置き換えてください。

### Wireless ユニット向けのオフライン / 手動デプロイ

（カンファレンスなどで）ロボットにインターネット接続がない場合は、アプリを直接インストールできます：

```bash
# Copy and install your app on the robot
scp -r /path/to/my_app pollen@reachy-mini.local:/tmp/my_app
ssh pollen@reachy-mini.local "/venvs/apps_venv/bin/pip install /tmp/my_app"
```

コードを手動で更新した後は、変更を反映させるためにデーモンまたはアプリを再起動してください。

---

## アプリのデバッグ

### ログの確認

:::info Lite / Simulation
デーモンをターミナルで実行している場合、アプリのログ（stdout/stderr）はそのままそこに表示されます。

```bash
reachy-mini-daemon          # Lite
reachy-mini-daemon --sim    # Simulation
# App logs will print here
```
:::

:::info Wireless
アプリの出力はデーモンによって取得され、`journalctl` から参照できます：

```bash
ssh pollen@reachy-mini.local

# Live logs
sudo journalctl -u reachy-mini-daemon -f

# Recent logs, filtered (daemon logs are noisy with HTTP access logs)
sudo journalctl -u reachy-mini-daemon --since '5 min ago' | grep -v "uvicorn\|GET \|POST "
```
:::

### よくある問題

| 問題 | 解決策 |
|---------|----------|
| 「An app is already running」 | 先に現在のアプリを停止します：`curl -X POST http://localhost:8000/api/apps/stop-current-app` |
| デーモンの状態が不安定 | 再起動します：`sudo systemctl restart reachy-mini-daemon`（アプリを起動する前に約 30 秒待ちます） |
| アプリがコード変更を反映しない | アプリを再起動します。手動でデプロイした場合は、バイトコードも削除します：`rm -rf __pycache__` |

### ヒント：起動時にすべてをログに出力する

便利なデバッグ手法として、アプリ起動時に設定内容をログ出力する方法があります：

```python
import logging
import sys

logger = logging.getLogger(__name__)

def run(self, reachy_mini, stop_event):
    logger.info("=" * 50)
    logger.info("MY APP STARTING")
    logger.info(f"  Python: {sys.version}")
    logger.info("=" * 50)
    # ...
```

---

## アプリの設定

アプリのサブプロセスは、**デーモンの環境変数を継承します**。特別な注入メカニズムはなく、アプリからはデーモンプロセスが見ているものと同じ環境が見えます。

アプリが実行時設定（API キー、サーバー URL など）を必要とする場合、推奨される方法は **アプリの Web UI を使うこと** です。クラスに `custom_app_url` を設定し、ユーザーがブラウザから直接値（API キー、サーバーアドレスなど）を入力できる設定ページを追加します。これは最もユーザーフレンドリーな方法で、すべてのプラットフォームで動作します。これを設定する方法については、上記の [Optional: Web UI for Your App](#optional-web-ui-for-your-app) を参照してください。

その他のアプローチ：

- **設定ファイル**：既知のパスから読み込みます（例：`.env`、[こちらの例](https://github.com/pollen-robotics/reachy_mini_conversation_app/blob/main/.env.example) を参照）。
- **ハードコードされたデフォルト**：開発時にはシンプルでデバッグしやすい方法です。

---

## アプリでのオーディオの使用

音声の録音、再生、および到来方向検出は、スタンドアロンのスクリプト内と同じ方法でアプリ内でも動作します — SDK のメソッド（`start_recording()`, `get_audio_sample()`, `push_audio_sample()`, `play_sound()`）を直接使用します。

動作するコードについては公式サンプルを参照してください：

- **[Sound Recording](/ja/reachymini_examples_sound_record)**：マイクアレイから録音し、WAV として保存します。
- **[Sound Playback](/ja/reachymini_examples_sound_play)**：WAV ファイルを再生するか、TTS エンジンなどからのリアルタイム音声をプッシュします。
- **[Sound Direction of Arrival](/ja/reachymini_examples_sound_doa)**：誰が話しているかを検出し、ロボットをその人の方向に向けます。

Wireless と Lite の間でオーディオストリームがどのように異なるかの詳細については、[Media Architecture](/ja/reachymini_sdk_media-architecture) を参照してください。

---

## さらに読む

- **ブログ記事**：[Make and Publish Your Reachy Mini Apps](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps) — スクリーンショット付きの完全なウォークスルー
- **API リファレンス**：[Apps API](/ja/reachymini_api_apps) — `ReachyMiniApp`、`AppManager` および関連クラスの自動生成リファレンス
- **REST API**：[REST API Reference](/ja/reachymini_api_rest-api) — すべての HTTP エンドポイントのドキュメント
- **サンプルアプリ**：インスピレーションのために [Hugging Face 上のコミュニティアプリ](https://hf.co/reachy-mini/#/apps) を参照してください

| アプリ | 主なパターン | リンク |
|-----|-------------|------|
| Conversation App | LLM ツール、オーディオパイプライン、制御ループ | [GitHub](https://github.com/pollen-robotics/reachy_mini_conversation_app) |
| Marionette | モーション記録、安全なトルク、HF データセット | [HF Space](https://huggingface.co/spaces/RemiFabre/marionette) |
| Radio | アンテナとのインタラクションパターン | [HF Space](https://huggingface.co/spaces/pollen-robotics/reachy_mini_radio) |
| Simon | GUI なしパターン（アンテナで開始） | [HF Space](https://huggingface.co/spaces/apirrone/reachy_mini_simon) |
| Hand Tracker | カメラベースのリアルタイム制御ループ | [HF Space](https://huggingface.co/spaces/pollen-robotics/hand_tracker_v2) |
| Spaceship Game | ジョイスティックとしての頭部、アンテナボタン | [HF Space](https://huggingface.co/spaces/apirrone/spaceship_game) |