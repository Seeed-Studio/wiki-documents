---
description: Reachy Mini アプリ向けの完全な API リファレンス。コアアプリクラス、アプリ管理、アプリ情報、アプリアシスタント、およびアプリソースを含みます。
title: アプリ API リファレンス
slug: /reachymini_api_apps
keywords:
  - api
  - apps
  - app management
  - app assistant
  - hugging face
  - app sources
  - app utilities
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/reachymini_api_apps/
---

# アプリ

## コアアプリクラス

### `reachy_mini.ReachyMiniApp`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/app.py#L27)**

Reachy Mini アプリケーションの基底クラスです。

### メソッド

#### `run`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/app.py#L143)**

アプリのメインロジックを実行します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `reachy_mini` | `ReachyMini` | 操作対象の Reachy Mini インスタンス。 |
| `stop_event` | `threading.Event` | アプリを安全に停止するためにセットできるイベント。 |

---

#### `stop`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/app.py#L154)**

アプリを安全に停止します。

---

#### `wrapped_run`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/app.py#L90)**

Reachy Mini のコンテキスト管理付きで `run` メソッドをラップして実行します。

---

### `reachy_mini.apps.manager.AppManager`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L51)**

Reachy Mini アプリのマネージャです。

### メソッド

#### `close`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L68)**

実行中のアプリを停止し、AppManager をクリーンアップします。

---

#### `current_app_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L276)**

現在のアプリのステータスを取得します。

---

#### `install_new_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L306)**

名前を指定して新しいアプリをインストールします。

---

#### `is_app_running`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L88)**

アプリが現在実行中または停止処理中かどうかを確認します。

---

#### `list_all_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L283)**

利用可能なアプリを一覧表示します（並列非同期）。

---

#### `list_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L290)**

指定したソース種別に対して利用可能なアプリを一覧表示します。

---

#### `remove_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L317)**

インストール済みのアプリを名前で削除します。

---

#### `restart_current_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L262)**

現在のアプリを再起動します。

---

#### `start_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L97)**

アプリをサブプロセスとして起動します。すでにアプリが実行中の場合は RuntimeError を送出します。

---

#### `stop_current_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L194)**

現在のアプリのサブプロセスを停止します。

---

#### `update_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L328)**

HuggingFace から再インストールすることで、インストール済みアプリを更新します。

元のソース情報を保持したまま再インストールし、最新バージョンを取得します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `app_name` | `str` | 更新するアプリの名前。 |
| `logger` | `logging.Logger` | 進行状況を出力するためのロガー。 |

---

## アプリ管理

### `reachy_mini.apps.manager.AppState`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L24)**

実行中アプリの状態。

---

### `reachy_mini.apps.manager.AppStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L34)**

アプリのステータス。

---

### `reachy_mini.apps.manager.RunningApp`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L43)**

実行中アプリに関する情報。

---

## アプリ情報

### `reachy_mini.apps.AppInfo`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/__init__.py#L18)**

アプリに関するメタデータ。

---

### `reachy_mini.apps.SourceKind`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/__init__.py#L8)**

アプリソースの種類。

---

## アプリアシスタント

### アシスタント関数

#### `reachy_mini.apps.assistant.validate_app_name`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L21)**

アプリ名を検証します。

---

#### `reachy_mini.apps.assistant.is_git_repo`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L36)**

指定されたパスが git リポジトリ内かどうかを確認します。

---

#### `reachy_mini.apps.assistant.validate_location`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L48)**

アプリプロジェクトを作成する場所を検証します。

---

#### `reachy_mini.apps.assistant.validate_location_and_git_repo`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L57)**

アプリプロジェクトを作成する場所を検証し、git リポジトリ内でないことを保証します。

---

#### `reachy_mini.apps.assistant.create_cli`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L68)**

CLI を使用して新しい Reachy Mini アプリプロジェクトを作成します。

---

#### `reachy_mini.apps.assistant.create`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L131)**

指定された名前とパスで新しい Reachy Mini アプリプロジェクトを作成します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `console` | `Console` | メッセージを表示するためのコンソールオブジェクト。 |
| `app_name` | `str` | 作成するアプリの名前。 |
| `app_path` | `Path` | アプリプロジェクトを作成するディレクトリ。 |

**戻り値:**

| Type | Description |
|------|-------------|
| `Path` | 作成されたアプリプロジェクトへのパス。 |

---

#### `reachy_mini.apps.assistant.install_app_with_progress`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L210)**

一時的な仮想環境にアプリをインストールし、プログレススピナーを表示します。

---

#### `reachy_mini.apps.assistant.check`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L251)**

既存の Reachy Mini アプリプロジェクトをチェックします。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `console` | `Console` | メッセージを表示するためのコンソールオブジェクト。 |
| `app_path` | `str` | チェック対象アプリへのローカルパス。 |

---

#### `reachy_mini.apps.assistant.request_app_addition`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L562)**

新しいアプリを公式 Reachy Mini アプリストアに追加するようリクエストします。

---

#### `reachy_mini.apps.assistant.try_to_push`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L639)**

変更をリモートリポジトリに push しようとします。

---

#### `reachy_mini.apps.assistant.publish`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L656)**

アプリを Reachy Mini アプリストアに公開します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `console` | `Console` | メッセージを表示するためのコンソールオブジェクト。 |
| `app_path` | `str` | 公開するアプリへのローカルパス。 |
| `commit_message` | `str` | アプリ公開用のコミットメッセージ。 |
| `official` | `bool` | アプリを公式 Reachy Mini アプリとして公開するかどうかのリクエスト。 |
| `no_check` | `bool` | 公開前のチェックを実行しない場合は True。 |
| `private` | `bool \| None` | True の場合は非公開、False の場合は公開、None の場合はプロンプトで確認。 |

---

## アプリソース

### `reachy_mini.apps.sources.hf_auth.save_hf_token`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_auth.py#L384)**

HuggingFace アクセストークンを安全に保存します。

トークンを Hugging Face API に対して検証し、有効な場合は標準の Hugging Face 認証メカニズムを用いて保存し、セッション間で再利用できるようにします。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `token` | `str` | 保存する HuggingFace アクセストークン。 |

**戻り値:**

| Type | Description |
|------|-------------|
| `dict` | 次を含む dict: "status"（"success" または "error"）、"username"（成功時の関連付けられた Hugging Face ユーザー名）、"message"（失敗時のエラー内容）。 |

---

### `reachy_mini.apps.sources.hf_auth.get_hf_token`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_auth.py#L430)**

保存済みの HuggingFace トークンを取得します。

**戻り値:**

| Type | Description |
|------|-------------|
| `str \| None` | 保存されているトークン。トークンがない場合は None。 |

---

### `reachy_mini.apps.sources.hf_auth.delete_hf_token`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_auth.py#L440)**

保存されている HuggingFace トークンを削除します。

:::note

引数なしの logout() は、保存されているすべてのアクセストークンからログアウトします。

:::

---

### `reachy_mini.apps.sources.hf_auth.check_token_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_auth.py#L454)**

トークンが保存されており有効かどうかを確認します。

**戻り値:**

| Type | Description |
|------|-------------|
| `dict` | is_logged_in と username を含むステータス dict。 |

---

### `reachy_mini.apps.sources.hf_space.list_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_space.py#L35)**

Hugging Face Spaces で利用可能なアプリを一覧表示します。

---

### `reachy_mini.apps.sources.hf_space.list_all_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_space.py#L78)**

Hugging Face Spaces で利用可能なすべてのアプリ（非公式なものも含む）を一覧表示します。

---

### `reachy_mini.apps.sources.local_common_venv.get_app_site_packages`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L126)**

指定されたアプリの venv に対する site-packages ディレクトリを取得するための公開 API です。

:::info

- 個別の venv の場合：アプリの venv の site-packages を返します
- 共有環境（SDK モード）の場合：現在の環境の site-packages を返します

:::

---

### `reachy_mini.apps.sources.local_common_venv.get_app_python`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L145)**

アプリ用の Python 実行ファイルのパスを取得します（クロスプラットフォーム）。

:::info

- 個別の venv の場合：アプリの venv の Python を返します
- 共有環境の場合：現在の Python インタプリタを返します

:::

---

### `reachy_mini.apps.sources.local_common_venv.list_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L344)**

エントリポイントまたは個別の venv から利用可能なアプリを一覧表示します。

---

### `reachy_mini.apps.sources.local_common_venv.install_package`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L460)**

AppInfo オブジェクトを指定してパッケージをインストールし、ログをストリーミングします。

**パラメータ:**

| 名前 | 型 | 説明 |
|------|------|-------------|
| `app` | `AppInfo` | パッケージの詳細を含む AppInfo。 |
| `logger` | `logging.Logger` | 進行状況を出力するためのロガー。 |
| `wireless_version` | `bool` | ワイヤレス版で実行しているかどうか。 |
| `desktop_app_daemon` | `bool` | デスクトップアプリのデーモンとして実行しているかどうか。 |
| `force_reinstall` | `bool` | `True` の場合、すでにインストール済みでも（アップデートのために）再インストールを強制します。 |

---

### `reachy_mini.apps.sources.local_common_venv.get_app_module`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L731)**

サブプロセス実行用に、アプリをロードせずにモジュール名を取得します。

---

### `reachy_mini.apps.sources.local_common_venv.uninstall_package`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L764)**

アプリ名を指定してパッケージをアンインストールします。

---

## アプリユーティリティ

### `reachy_mini.apps.utils.running_command`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/utils.py#L7)**

シェルコマンドを実行し、その出力を指定されたロガーにストリーミングします。
