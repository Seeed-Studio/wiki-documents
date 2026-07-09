---
description: Reachy Mini 向けの Daemon API リファレンス。コア daemon クラス、ロボットアプリロック、バックエンドクラス、およびすべてのルーターエンドポイントを網羅します。
title: Daemon API
slug: /reachymini_api_daemon
keywords:
  - daemon
  - api
  - backend
  - app lock
  - router
  - motors
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/ja/reachymini_api_daemon/
---

# Daemon

## コア Daemon クラス

### `reachy_mini.daemon.daemon.Daemon`

Reachy Mini ロボットを制御するためのメイン daemon クラスです。

### メソッド

#### `start`

daemon とそのすべてのコンポーネントを起動します。

---

#### `stop`

daemon とそのすべてのコンポーネントを停止します。

---

#### `restart`

daemon を再起動します。

---

#### `get_status`

daemon の現在のステータスを取得します。

**戻り値:**

`DaemonStatus` — daemon の現在のステータス。

---

#### `is_running`

daemon が実行中かどうかを確認します。

**戻り値:**

`bool` — daemon が実行中の場合は True。

---

### `reachy_mini.daemon.daemon.DaemonState`

daemon の状態を表す列挙型です。

### 値

| Value | Description |
|-------|-------------|
| `STOPPED` | Daemon が実行されていない状態。 |
| `STARTING` | Daemon が起動中の状態。 |
| `RUNNING` | Daemon が通常どおり実行中の状態。 |
| `STOPPING` | Daemon がシャットダウン中の状態。 |
| `ERROR` | Daemon でエラーが発生した状態。 |

---

### `reachy_mini.daemon.daemon.DaemonStatus`

daemon の状態と情報を含むステータスオブジェクトです。

### プロパティ

| Property | Type | Description |
|----------|------|-------------|
| `state` | `DaemonState` | daemon の現在の状態。 |
| `uptime` | `float` | daemon が起動してからの経過時間（秒）。 |
| `version` | `str` | daemon のバージョン文字列。 |
| `robot_connected` | `bool` | ロボットが接続されているかどうか。 |

---

## ロボットアプリロック

ロボットの *アプリロック* は、どの管理対象アプリが現在ロボットを保持しているかについての daemon の単一の信頼できる情報源です。
管理対象アプリは 2 つのエントリポイントをシリアライズします —
ローカルの Python アプリ（:class:`AppManager` によって起動される）と、
中央シグナリングリレーを経由してルーティングされるリモート WebRTC クライアントです。

これは、ロボットを駆動できるすべてのコードパスを制御するわけでは**ありません**。
daemon と LAN / WebSocket 経由で直接通信する SDK クライアントはこれをバイパスします。
名称に「app」を用いているのは、そのより狭いスコープを意図的に反映するためです。

### 並行性モデル

2 つの管理対象エントリポイントがロボットとのセッションを開くことができます：

1. **ローカルパス** — ``POST /api/apps/start`` を介して起動される Python アプリ。
   daemon のサブプロセスとして実行され、バックエンドと直接通信します。
   2. **リモートパス** — HuggingFace の中央シグナリングサーバーを通じて認証され、
   WebRTC 経由でロボットにルーティングされるブラウザクライアント。
   独自スレッド内の ``CentralSignalingRelay`` によって処理されます。

調整がなければ、両方のパスが同時にロボットをつかみ、
モーターコマンド、カメラ、オーディオを巡って競合する可能性があります。
:class:`RobotAppLock`
は、次の 3 つの相互排他的な状態によってそれを防ぎます：

- ``free`` — どの管理対象アプリもスロットを保持していない。
- ``local_app(name)`` — Python アプリが実行中。
- ``remote_session(name)`` — リモート WebRTC クライアントが接続中。

**取得ルール:**

- ローカルパスは :meth:`RobotAppLock.acquire_local_evicting_remote` を使用します。
  リモートセッションがアクティブな場合、ロックはアトミックに
  ``local_app`` に遷移し、リレーに対してリモートピアおよびローカル GStreamer に
  ``endSession`` を送信するよう要求します。これにより既存の WebRTC
  接続がクリーンに切断されます。別の Python アプリがすでにロックを保持している場合、
  取得は ``RuntimeError`` を送出します。
- リモートパスは :meth:`RobotAppLock.try_acquire_remote` を使用します。
  これはロックが ``free`` でない場合は常にすぐに失敗（``False`` を返す）し、
  受信したリモートセッションは
  ``{"type": "endSession", "reason": "robot_busy_local_app"}`` によって拒否されます。

**解放ルール:**

- :meth:`RobotAppLock.release_local` はサブプロセスモニタの
  ``finally`` ブロックから呼び出されるため、正常終了、クラッシュ、``SIGKILL``、
  OOM、およびタスクキャンセルのすべてでロックが解放されます。
- :meth:`RobotAppLock.release_remote` はすべての
  ``endSession`` ハンドラー（両方向）から、
  切断 / 再接続時の ``_close_connections`` から、そしてリレーの
  ``stop()`` から呼び出されます。すべての解放呼び出しは冪等であり、
  ロックが対応する状態でない場合は何もしません。

**スレッド間の考慮事項:** ロック状態は ``threading.Lock`` によって保護されています。
退去コールバックはリレーによって登録され、
AppManager によってメインの asyncio ループから呼び出されますが、
実際のセッション終了処理はリレー自身のイベントループ上で
``asyncio.run_coroutine_threadsafe`` を介してディスパッチされます。
AppManager は Python サブプロセスを生成する前に終了処理を待機するため、
ローカルアプリがメディアハンドルを開く前にリモートピアはそれらを解放しています。

### API リファレンス

### `reachy_mini.daemon.robot_app_lock.RobotAppLock`

ロボットへのアクセスを管理するためのロボットアプリケーションロックです。

### メソッド

#### `acquire_local_evicting_remote`

任意のリモートセッションを退去させつつ、ローカル Python アプリ用にロックを取得します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `app_name` | `str` | ロックを取得するアプリの名前。 |

**戻り値:**

`bool` — ロックの取得に成功した場合は True。

---

#### `try_acquire_remote`

リモート WebRTC セッション用にロックの取得を試みます。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `session_name` | `str` | ロックを取得しようとするセッションの名前。 |

**戻り値:**

`bool` — ロックの取得に成功した場合は True。

---

#### `release_local`

ローカル Python アプリからロックを解放します。

---

#### `release_remote`

リモートセッションからロックを解放します。

---

#### `get_status`

ロボットアプリロックの現在のステータスを取得します。

**戻り値:**

`RobotAppLockStatus` — ロックの現在のステータス。

---

#### `is_free`

ロックが空いているかどうかを確認します。

**戻り値:**

`bool` — どのアプリもロックを保持していない場合は True。

---

#### `is_local_app`

ローカルアプリが現在ロックを保持しているかどうかを確認します。

**戻り値:**

`bool` — ローカルアプリがロックを保持している場合は True。

---

#### `is_remote_session`

リモートセッションが現在ロックを保持しているかどうかを確認します。

**戻り値:**

`bool` — リモートセッションがロックを保持している場合は True。

---

### `reachy_mini.daemon.robot_app_lock.RobotAppLockState`

ロボットアプリロックの状態を表す列挙型です。

### 値

| Value | Description |
|-------|-------------|
| `free` | どの管理対象アプリもスロットを保持していない。 |
| `local_app` | Python アプリが実行中。 |
| `remote_session` | リモート WebRTC クライアントが接続中。 |

---

### `reachy_mini.daemon.robot_app_lock.RobotAppLockStatus`

ロボットアプリロックの状態と情報を含むステータスオブジェクトです。

### プロパティ

| Property | Type | Description |
|----------|------|-------------|
| `state` | `RobotAppLockState` | ロックの現在の状態。 |
| `holder_name` | `str \| None` | 現在のホルダーの名前（存在する場合）。 |
| `holder_type` | `str \| None` | ホルダーの種類（"local_app" または "remote_session"）。 |

---

## バックエンドクラス

### 抽象バックエンド

### `reachy_mini.daemon.backend.abstract.MotorControlMode`

モーター制御モードを表す列挙型です。

### 値

| Value | Description |
|-------|-------------|
| `enabled` | モーターが完全に有効化され、コマンドに応答している状態。 |
| `disabled` | モーターが無効化され、コマンドに応答しない状態。 |
| `gravity_compensation` | モーターが重力補償モードになっている状態。 |

---

### ロボットバックエンド

### `reachy_mini.daemon.backend.robot.RobotBackend`

実際の物理ロボットを制御するためのバックエンドです。

### メソッド

#### `connect`

ロボットハードウェアに接続します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `port` | `str` | 接続するシリアルポート。 |

---

#### `disconnect`

ロボットハードウェアから切断します。

---

#### `get_motor_status`

すべてのモーターのステータスを取得します。

**戻り値:**

`Dict` — モーターのステータスのディクショナリ。

---

#### `set_motor_mode`

モーターの制御モードを設定します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `mode` | `MotorControlMode` | 設定する制御モード。 |

---

#### `send_position_command`

モーターに位置コマンドを送信します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `positions` | `Dict` | モーター位置のディクショナリ。 |

---

#### `get_joint_positions`

ロボットから現在の関節位置を取得します。

**戻り値:**

`Dict` — 現在の関節位置のディクショナリ。

---

### `reachy_mini.daemon.backend.robot.RobotBackendStatus`

ロボットバックエンドの状態と情報を含むステータスオブジェクトです。

### プロパティ

| Property | Type | Description |
|----------|------|-------------|
| `connected` | `bool` | バックエンドがロボットに接続されているかどうか。 |
| `motor_mode` | `MotorControlMode` | 現在のモーター制御モード。 |
| `last_update` | `float` | 最終更新のタイムスタンプ。 |

---

### MuJoCo バックエンド

### `reachy_mini.daemon.backend.mujoco.MujocoBackend`

ロボットの MuJoCo シミュレーション用バックエンドです。

### メソッド

#### `load_model`

MuJoCo ロボットモデルを読み込みます。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `model_path` | `str` | MuJoCo モデルファイルへのパス。 |

---

#### `step`

シミュレーションを前進させます。

---

#### `get_state`

現在のシミュレーション状態を取得します。

**戻り値:**

`Dict` — シミュレーションの現在の状態。

---

#### `set_control`

シミュレーションの制御ターゲットを設定します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `targets` | `Dict` | 制御ターゲットのディクショナリ。 |

---

#### `reset`

シミュレーションを初期状態にリセットします。

---

### `reachy_mini.daemon.backend.mujoco.MujocoBackendStatus`

MuJoCo バックエンドの状態と情報を含むステータスオブジェクトです。

### プロパティ

| Property | Type | Description |
|----------|------|-------------|
| `model_loaded` | `bool` | モデルが読み込まれているかどうか。 |
| `simulation_time` | `float` | 現在のシミュレーション時間。 |
| `real_time_factor` | `float` | シミュレーションの実時間係数。 |

---

### モックアップシミュレーションバックエンド

### `reachy_mini.daemon.backend.mockup_sim.MockupSimBackend`

モックアップシミュレーション用バックエンド（実際の物理演算はなし）です。

### メソッド

#### `start`

モックアップシミュレーションを開始します。

---

#### `stop`

モックアップシミュレーションを停止します。

---

#### `get_state`

現在のモックアップ状態を取得します。

**戻り値:**

`Dict` — モックアップの現在の状態。

---

#### `set_positions`

モックアップのターゲット位置を設定します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `positions` | `Dict` | ターゲット位置のディクショナリ。 |

---

### `reachy_mini.daemon.backend.mockup_sim.MockupSimBackendStatus`

モックアップシミュレーションの状態と情報を含むステータスオブジェクト。

### プロパティ

| プロパティ | 型 | 説明 |
|----------|------|-------------|
| `running` | `bool` | モックアップが実行中かどうか。 |
| `positions` | `Dict` | 現在の目標位置。 |

---

## デーモンユーティリティ

### `reachy_mini.daemon.utils.find_serial_port`

Reachy Mini ロボットに接続されているシリアルポートを検索します。

**戻り値:**

`str` — シリアルポートへのパス。見つからない場合は None。

---

### `reachy_mini.daemon.utils.get_ip_address`

現在のマシンの IP アドレスを取得します。

**戻り値:**

`str` — IP アドレス文字列。

---

## アプリ

### モデル

### `reachy_mini.daemon.app.models.Matrix4x4Pose`

ロボットの位置決め用 4x4 行列姿勢表現。

### プロパティ

| プロパティ | 型 | 説明 |
|----------|------|-------------|
| `matrix` | `np.ndarray` | 4x4 変換行列。 |
| `translation` | `np.ndarray` | 並進ベクトル (x, y, z)。 |
| `rotation` | `np.ndarray` | 3x3 回転行列。 |

---

### `reachy_mini.daemon.app.models.XYZRPYPose`

XYZ+RPY（位置とオイラー角）による姿勢表現。

### プロパティ

| プロパティ | 型 | 説明 |
|----------|------|-------------|
| `x` | `float` | X 位置（メートル）。 |
| `y` | `float` | Y 位置（メートル）。 |
| `z` | `float` | Z 位置（メートル）。 |
| `roll` | `float` | ロール角（ラジアン）。 |
| `pitch` | `float` | ピッチ角（ラジアン）。 |
| `yaw` | `float` | ヨー角（ラジアン）。 |

---

### `reachy_mini.daemon.app.models.FullBodyTarget`

頭部とアンテナを含む全身の目標姿勢。

### プロパティ

| プロパティ | 型 | 説明 |
|----------|------|-------------|
| `head` | `Matrix4x4Pose \| None` | 目標頭部姿勢。 |
| `antennas` | `List[float] \| None` | 目標アンテナ位置。 |
| `body_yaw` | `float \| None` | 目標ボディヨー角。 |

---

### `reachy_mini.daemon.app.models.DoAInfo`

音声の到来方向（Direction of Arrival）情報。

### プロパティ

| プロパティ | 型 | 説明 |
|----------|------|-------------|
| `doa_angle` | `float` | 到来方向角度（度）。 |
| `energy` | `float` | 音声エネルギーレベル。 |

---

### `reachy_mini.daemon.app.models.FullState`

すべてのセンサーとモーターを含むロボットの完全な状態。

### プロパティ

| プロパティ | 型 | 説明 |
|----------|------|-------------|
| `joint_positions` | `Dict` | 現在の関節位置。 |
| `head_pose` | `Matrix4x4Pose` | 現在の頭部姿勢。 |
| `antennas` | `List[float]` | 現在のアンテナ位置。 |
| `body_yaw` | `float` | 現在のボディヨー角。 |
| `motor_mode` | `MotorControlMode` | 現在のモーター制御モード。 |

---

### 依存関係

### `reachy_mini.daemon.app.dependencies.get_daemon`

Daemon インスタンスの依存性プロバイダ。

**戻り値:**

`Daemon` — シングルトンの Daemon インスタンス。

---

### `reachy_mini.daemon.app.dependencies.get_backend`

現在のバックエンドの依存性プロバイダ。

**戻り値:**

`RobotBackend \| MujocoBackend \| MockupSimBackend` — 現在のバックエンドインスタンス。

---

### `reachy_mini.daemon.app.dependencies.get_app_manager`

AppManager インスタンスの依存性プロバイダ。

**戻り値:**

`AppManager` — AppManager インスタンス。

---

### `reachy_mini.daemon.app.dependencies.ws_get_backend`

バックエンド用の WebSocket 依存性プロバイダ。

**戻り値:**

`RobotBackend \| MujocoBackend \| MockupSimBackend` — 現在のバックエンドインスタンス。

---

### ジョブ

### `reachy_mini.daemon.app.bg_job_register.JobStatus`

バックグラウンドジョブのステータスを表す列挙型。

### 値

| 値 | 説明 |
|-------|-------------|
| `PENDING` | ジョブが開始待ち。 |
| `RUNNING` | ジョブが実行中。 |
| `COMPLETED` | ジョブが正常に完了。 |
| `FAILED` | ジョブがエラーで失敗。 |
| `CANCELLED` | ジョブがキャンセルされた。 |

---

### `reachy_mini.daemon.app.bg_job_register.JobInfo`

バックグラウンドジョブに関する情報。

### プロパティ

| プロパティ | 型 | 説明 |
|----------|------|-------------|
| `id` | `str` | 一意のジョブ識別子。 |
| `name` | `str` | ジョブ名。 |
| `status` | `JobStatus` | 現在のジョブステータス。 |
| `created_at` | `float` | ジョブが作成されたタイムスタンプ。 |
| `started_at` | `float \| None` | ジョブが開始されたタイムスタンプ。 |
| `completed_at` | `float \| None` | ジョブが完了したタイムスタンプ。 |
| `error` | `str \| None` | ジョブが失敗した場合のエラーメッセージ。 |

---

### `reachy_mini.daemon.app.bg_job_register.JobHandler`

バックグラウンドジョブの実行を管理するハンドラ。

### メソッド

#### `start`

ジョブハンドラを開始します。

---

#### `stop`

ジョブハンドラを停止します。

---

#### `submit`

新しいジョブを実行用に送信します。

**パラメータ:**

| 名前 | 型 | 説明 |
|------|------|-------------|
| `job_id` | `str` | 一意のジョブ識別子。 |
| `func` | `Callable` | 実行する関数。 |
| `args` | `List` | 関数の位置引数。 |
| `kwargs` | `Dict` | 関数のキーワード引数。 |

---

#### `cancel`

実行中のジョブをキャンセルします。

**パラメータ:**

| 名前 | 型 | 説明 |
|------|------|-------------|
| `job_id` | `str` | 一意のジョブ識別子。 |

---

#### `get_status`

ジョブのステータスを取得します。

**パラメータ:**

| 名前 | 型 | 説明 |
|------|------|-------------|
| `job_id` | `str` | 一意のジョブ識別子。 |

**戻り値:**

`JobInfo` — ジョブの現在のステータス。

---

### `reachy_mini.daemon.app.bg_job_register.run_command`

シェルコマンドをバックグラウンドジョブとして実行します。

**パラメータ:**

| 名前 | 型 | 説明 |
|------|------|-------------|
| `command` | `str` | 実行するコマンド。 |
| `job_id` | `str` | 一意のジョブ識別子。 |

**戻り値:**

`JobInfo` — 開始されたジョブに関する情報。

---

### `reachy_mini.daemon.app.bg_job_register.get_info`

特定のジョブに関する情報を取得します。

**パラメータ:**

| 名前 | 型 | 説明 |
|------|------|-------------|
| `job_id` | `str` | 一意のジョブ識別子。 |

**戻り値:**

`JobInfo \| None` — 見つかった場合のジョブ情報。

---

### `reachy_mini.daemon.app.bg_job_register.ws_poll_info`

ジョブ情報をポーリングするための WebSocket エンドポイント。

---

### メインアプリケーション

### `reachy_mini.daemon.app.main.Args`

デーモンアプリケーションのコマンドライン引数。

### プロパティ

| プロパティ | 型 | 説明 |
|----------|------|-------------|
| `host` | `str` | バインドするホスト（デフォルト: "0.0.0.0"）。 |
| `port` | `int` | バインドするポート（デフォルト: 8000）。 |
| `backend` | `str` | 使用するバックエンドタイプ（"robot"、"mujoco"、"mockup"）。 |
| `debug` | `bool` | デバッグモードを有効にするかどうか。 |

---

### `reachy_mini.daemon.app.main.create_app`

FastAPI アプリケーションを作成します。

**戻り値:**

`FastAPI` — 設定済みの FastAPI アプリケーション。

---

### `reachy_mini.daemon.app.main.run_app`

FastAPI アプリケーションを実行します。

**パラメータ:**

| 名前 | 型 | 説明 |
|------|------|-------------|
| `app` | `FastAPI` | 実行する FastAPI アプリケーション。 |
| `host` | `str` | バインドするホスト。 |
| `port` | `int` | バインドするポート。 |

---

### `reachy_mini.daemon.app.main.main`

デーモンアプリケーションのメインエントリポイント。

**パラメータ:**

| 名前 | 型 | 説明 |
|------|------|-------------|
| `args` | `Args` | コマンドライン引数。 |

---

## アプリルーター

### デーモンルーター

#### `reachy_mini.daemon.app.routers.daemon.start_daemon`

デーモンサービスを開始します。

**戻り値:**

`Dict` — デーモンが開始されたことを示すステータスメッセージ。

---

#### `reachy_mini.daemon.app.routers.daemon.stop_daemon`

デーモンサービスを停止します。

**戻り値:**

`Dict` — デーモンが停止したことを示すステータスメッセージ。

---

#### `reachy_mini.daemon.app.routers.daemon.restart_daemon`

デーモンサービスを再起動します。

**戻り値:**

`Dict` — デーモンが再起動したことを示すステータスメッセージ。

---

#### `reachy_mini.daemon.app.routers.daemon.get_daemon_status`

デーモンの現在のステータスを取得します。

**戻り値:**

`DaemonStatus` — 現在のデーモンステータス。

---

#### `reachy_mini.daemon.app.routers.daemon.get_robot_app_lock_status`

ロボットアプリロックの現在のステータスを取得します。

**戻り値:**

`RobotAppLockStatus` — 現在のロボットアプリロックステータス。

---

### ステートルーター

#### `reachy_mini.daemon.app.routers.state.get_head_pose`

現在の頭部姿勢を取得します。

**戻り値:**

`Matrix4x4Pose` — 現在の頭部姿勢行列。

---

#### `reachy_mini.daemon.app.routers.state.get_body_yaw`

現在のボディヨー角を取得します。

**戻り値:**

`float` — 現在のボディヨー（ラジアン）。 |

---

#### `reachy_mini.daemon.app.routers.state.get_antenna_joint_positions`

現在のアンテナ関節位置を取得します。

**戻り値:**

`List[float]` — 現在のアンテナ位置（ラジアン）。 |

---

#### `reachy_mini.daemon.app.routers.state.get_doa`

現在の到来方向情報を取得します。

**戻り値:**

`DoAInfo` — 現在の DOA 情報。

---

#### `reachy_mini.daemon.app.routers.state.get_full_state`

ロボットの完全な状態を取得します。

**戻り値:**

`FullState` — 現在のロボットの完全な状態。

---

#### `reachy_mini.daemon.app.routers.state.ws_full_state`

ロボットの完全な状態更新をストリーミングするための WebSocket エンドポイント。

---

### モータールーター

#### `reachy_mini.daemon.app.routers.motors.get_motor_status`

すべてのモーターのステータスを取得します。

**戻り値:**

`Dict` — 位置、速度、トルクを含むモーターステータスのディクショナリ。

---

#### `reachy_mini.daemon.app.routers.motors.set_motor_mode`

モーター制御モードを設定します。

**パラメータ:**

| 名前 | 型 | 説明 |
|------|------|-------------|
| `mode` | `str` | モーター制御モード（"enabled"、"disabled"、"gravity_compensation"）。 |

**戻り値:**

`Dict` — モード変更を確認するステータスメッセージ。

---

### ムーブルーター

#### `reachy_mini.daemon.app.routers.move.get_running_moves`

現在実行中のムーブの一覧を取得します。

**戻り値:**

`List[Dict]` — 実行中ムーブの ID と進行状況を含むリスト。

---

#### `reachy_mini.daemon.app.routers.move.goto`

ロボットを動かすための goto コマンドを送信します。

**パラメータ:**

| 名前 | 型 | 説明 |
|------|------|-------------|
| `head` | `List[List[float]]` | 4x4 頭部姿勢行列（16 個の値）。 |
| `antennas` | `List[float]` | アンテナの目標位置 [left, right]（ラジアン）。 |
| `body_yaw` | `float` | ボディヨーの目標値（ラジアン）。 |
| `duration` | `float` | 動作時間（秒）。 |
| `method` | `str` | 補間方法（"linear"、"minjerk"、"ease_in_out"、"cartoon"）。 |

**戻り値:**

`Dict` — Move ID とステータス。

---

#### `reachy_mini.daemon.app.routers.move.play_wake_up`

ロボットを準備完了状態にするためのウェイクアップアニメーションを再生します。

**戻り値:**

`Dict` — ウェイクアップが開始されたことを確認するステータスメッセージ。

---

#### `reachy_mini.daemon.app.routers.move.play_goto_sleep`

ロボットをスリープ姿勢にするためのスリープアニメーションを再生します。

**戻り値:**

`Dict` — スリープが開始されたことを確認するステータスメッセージ。

---

#### `reachy_mini.daemon.app.routers.move.list_recorded_move_dataset`

利用可能な記録済みモーションデータセットを一覧表示します。

**戻り値:**

`List[str]` — 利用可能なデータセット名のリスト。

---

#### `reachy_mini.daemon.app.routers.move.play_recorded_move_dataset`

データセットから記録済みモーションを再生します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `dataset` | `str` | モーションを含むデータセットの名前。 |
| `move_name` | `str` | 再生する特定のモーションの名前。 |
| `initial_goto_duration` | `float` | 開始姿勢への初期移動の時間。 |
| `sound` | `bool` | 関連するサウンドを再生するかどうか。 |

**戻り値:**

`Dict` — モーションが開始されたことを確認するステータスメッセージ。

---

#### `reachy_mini.daemon.app.routers.move.stop_move`

現在実行中のモーションを停止します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `move_id` | `str` | 停止するモーションの ID。 |

**戻り値:**

`Dict` — モーションが停止したことを確認するステータスメッセージ。

---

#### `reachy_mini.daemon.app.routers.move.set_target`

連続制御のためにリアルタイムの目標位置を設定します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `head` | `List[List[float]]` | 4x4 のヘッド姿勢行列（16 個の値）。 |
| `antennas` | `List[float]` | アンテナの目標位置 [左, 右]（ラジアン）。 |
| `body_yaw` | `float` | ボディヨーの目標値（ラジアン）。 |

**戻り値:**

`Dict` — 目標が設定されたことを確認するステータスメッセージ。

---

#### `reachy_mini.daemon.app.routers.move.ws_move_updates`

モーション更新をストリーミングするための WebSocket エンドポイント。

---

### Apps Router

#### `reachy_mini.daemon.app.routers.apps.list_available_apps`

インストール可能なアプリを一覧表示します。

**戻り値:**

`List[Dict]` — メタデータ付きの利用可能なアプリのリスト。

---

#### `reachy_mini.daemon.app.routers.apps.list_all_available_apps`

インストール済みおよび利用可能なすべてのアプリを一覧表示します。

**戻り値:**

`List[Dict]` — すべてのアプリの完全なリスト。

---

#### `reachy_mini.daemon.app.routers.apps.install_app`

ソースからアプリをインストールします。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `source` | `str` | アプリのソース URL またはパス。 |

**戻り値:**

`Dict` — インストールステータスとジョブ ID。

---

#### `reachy_mini.daemon.app.routers.apps.remove_app`

インストール済みアプリを削除します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `app_name` | `str` | 削除するアプリの名前。 |

**戻り値:**

`Dict` — 削除ステータス。

---

#### `reachy_mini.daemon.app.routers.apps.job_status`

アプリ操作ジョブのステータスを取得します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `job_id` | `str` | 確認するジョブの ID。 |

**戻り値:**

`JobInfo` — 現在のジョブステータス。

---

#### `reachy_mini.daemon.app.routers.apps.ws_apps_manager`

アプリマネージャの更新をストリーミングするための WebSocket エンドポイント。

---

#### `reachy_mini.daemon.app.routers.apps.start_app`

インストール済みアプリを起動します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `app_name` | `str` | 起動するアプリの名前。 |

**戻り値:**

`Dict` — 起動ステータスとセッション情報。

---

#### `reachy_mini.daemon.app.routers.apps.restart_app`

実行中のアプリを再起動します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `app_name` | `str` | 再起動するアプリの名前。 |

**戻り値:**

`Dict` — 再起動ステータス。

---

#### `reachy_mini.daemon.app.routers.apps.stop_app`

実行中のアプリを停止します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `app_name` | `str` | 停止するアプリの名前。 |

**戻り値:**

`Dict` — 停止ステータス。

---

#### `reachy_mini.daemon.app.routers.apps.current_app_status`

現在実行中のアプリのステータスを取得します。

**戻り値:**

`Dict` — 名前、状態、セッション情報を含む現在のアプリステータス。

---

#### `reachy_mini.daemon.app.routers.apps.install_private_space`

プライベート HuggingFace Space をアプリとしてインストールします。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `space_id` | `str` | HuggingFace Space の識別子。 |

**戻り値:**

`Dict` — インストールステータスとジョブ ID。

---

### Update Router

#### `reachy_mini.daemon.app.routers.update.available`

利用可能なアップデートを確認します。

**戻り値:**

`Dict` — バージョンや変更履歴を含む利用可能なアップデート情報。

---

#### `reachy_mini.daemon.app.routers.update.start_update`

アップデート処理を開始します。

**戻り値:**

`Dict` — アップデートステータスと進行状況。

---

#### `reachy_mini.daemon.app.routers.update.get_update_info`

アップデートに関する詳細情報を取得します。

**戻り値:**

`Dict` — ダウンロードサイズや推定時間を含む詳細なアップデート情報。

---

#### `reachy_mini.daemon.app.routers.update.websocket_logs`

アップデートログをストリーミングするための WebSocket エンドポイント。

---

### Cache Router

#### `reachy_mini.daemon.app.routers.cache.clear_huggingface_cache`

ディスク容量を確保するために HuggingFace キャッシュをクリアします。

**戻り値:**

`Dict` — キャッシュクリアのステータスと解放された容量。

---

#### `reachy_mini.daemon.app.routers.cache.reset_apps`

すべてのアプリを初期状態にリセットします。

**戻り値:**

`Dict` — リセットステータス。

---

### Kinematics Router

#### `reachy_mini.daemon.app.routers.kinematics.get_kinematics_info`

ロボットの運動学情報を取得します。

**戻り値:**

`Dict` — DH パラメータや関節リミットを含む運動学パラメータ。

---

#### `reachy_mini.daemon.app.routers.kinematics.get_urdf`

URDF ロボット記述を取得します。

**戻り値:**

`str` — ロボットを記述する URDF XML 文字列。

---

#### `reachy_mini.daemon.app.routers.kinematics.get_stl_file`

ロボットコンポーネントの STL メッシュファイルを取得します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `component` | `str` | コンポーネント名（例: "head", "antenna"）。 |

**戻り値:**

`bytes` — STL ファイルデータ。

---

### Volume Router

#### `reachy_mini.daemon.app.routers.volume.get_volume`

現在のスピーカーボリュームを取得します。

**戻り値:**

`int` — 現在のボリュームレベル（0-100）。

---

#### `reachy_mini.daemon.app.routers.volume.set_volume`

スピーカーボリュームを設定します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `volume` | `int` | ボリュームレベル（0-100）。 |

**戻り値:**

`int` — 実際に設定されたボリューム（クリップされる場合があります）。

---

#### `reachy_mini.daemon.app.routers.volume.play_test_sound`

テストサウンドを再生してオーディオ出力を確認します。

**戻り値:**

`Dict` — テストサウンドが再生されたことを確認するステータスメッセージ。

---

#### `reachy_mini.daemon.app.routers.volume.get_microphone_volume`

現在のマイクボリュームを取得します。

**戻り値:**

`int` — 現在のマイクボリューム（0-100）。

---

#### `reachy_mini.daemon.app.routers.volume.set_microphone_volume`

マイクボリュームを設定します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `volume` | `int` | ボリュームレベル（0-100）。 |

**戻り値:**

`int` — 実際に設定されたボリューム（クリップされる場合があります）。

---

### Logs Router

#### `reachy_mini.daemon.app.routers.logs.websocket_daemon_logs`

デーモンログをストリーミングするための WebSocket エンドポイント。

---

### HF Auth Router

#### `reachy_mini.daemon.app.routers.hf_auth.save_token`

HuggingFace 認証トークンを保存します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `token` | `str` | HuggingFace API トークン。 |

**戻り値:**

`Dict` — 保存ステータス。

---

#### `reachy_mini.daemon.app.routers.hf_auth.get_auth_status`

現在の認証ステータスを取得します。

**戻り値:**

`Dict` — トークンが有効かどうかやユーザー情報を含む認証ステータス。

---

#### `reachy_mini.daemon.app.routers.hf_auth.delete_token`

保存されている認証トークンを削除します。

**戻り値:**

`Dict` — 削除ステータス。