---
description: Reachy Mini デーモンの完全な API リファレンス。コアデーモンクラス、バックエンドクラス、デーモンユーティリティ、アプリモデル、およびアプリルーターを含みます。
title: デーモン API リファレンス
slug: /reachymini_api_daemon
keywords:
  - api
  - daemon
  - backend
  - app models
  - app routers
  - fastapi
  - rest
  - websocket
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-02-28'
url: https://wiki.seeedstudio.com/ja/reachymini_api_daemon/
---
# デーモン

## コアデーモンクラス

### `reachy_mini.daemon.daemon.Daemon`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L37)**

シミュレーションまたは実機の Reachy Mini ロボット用デーモン。

適切なバックエンド（シミュレーション用の Mujoco または実機用の RobotBackend）でサーバーを実行します。

### メソッド

#### `restart`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L366)**

Reachy Mini デーモンを再起動します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `sim` | `bool` | True の場合、Mujoco を使用したシミュレーションモードで実行します。デフォルトは None（前回の値を使用）。 |
| `mockup_sim` | `bool` | True の場合、軽量シミュレーションモード（MuJoCo なし）で実行します。デフォルトは None（前回の値を使用）。 |
| `serialport` | `str` | 実機モーター用のシリアルポート。デフォルトは None（前回の値を使用）。 |
| `scene` | `str` | シミュレーションモードで読み込むシーン名（"empty" または "minimal"）。デフォルトは None（前回の値を使用）。 |
| `headless` | `bool` | True の場合、Mujoco をヘッドレスモード（GUI なし）で実行します。デフォルトは None（前回の値を使用）。 |
| `use_audio` | `bool` | True の場合、オーディオを有効にします。デフォルトは None（前回の値を使用）。 |
| `localhost_only` | `bool` | True の場合、サーバーを localhost のクライアントのみに制限します。デフォルトは None（前回の値を使用）。 |
| `wake_up_on_start` | `bool` | True の場合、起動時に Reachy Mini を起こします。デフォルトは None（起こさない）。 |
| `goto_sleep_on_stop` | `bool` | True の場合、停止時に Reachy Mini をスリープさせます。デフォルトは None（スリープさせない）。 |

**戻り値:**

| Type | Description |
|------|-------------|
| `DaemonState` | 再起動を試行した後のデーモンの現在の状態。 |

---

#### `run4ever`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L462)**

Reachy Mini デーモンを無期限に実行します。

最初にデーモンを起動し、その後ステータスを継続的に確認し、ユーザー割り込み（Ctrl+C）によるグレースフルシャットダウンを可能にします。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `sim` | `bool` | True の場合、Mujoco を使用したシミュレーションモードで実行します。デフォルトは False。 |
| `mockup_sim` | `bool` | True の場合、軽量シミュレーションモード（MuJoCo なし）で実行します。デフォルトは False。 |
| `serialport` | `str` | 実機モーター用のシリアルポート。デフォルトは "auto" で、自動的にポート検出を試みます。 |
| `scene` | `str` | シミュレーションモードで読み込むシーン名（"empty" または "minimal"）。デフォルトは "empty"。 |
| `localhost_only` | `bool` | True の場合、サーバーを localhost のクライアントのみに制限します。デフォルトは True。 |
| `wake_up_on_start` | `bool` | True の場合、起動時に Reachy Mini を起こします。デフォルトは True。 |
| `goto_sleep_on_stop` | `bool` | True の場合、停止時に Reachy Mini をスリープさせます。デフォルトは True。 |
| `check_collision` | `bool` | True の場合、衝突判定を有効にします。デフォルトは False。 |
| `kinematics_engine` | `str` | 使用する運動学エンジン。デフォルトは "AnalyticalKinematics"。 |
| `headless` | `bool` | True の場合、Mujoco をヘッドレスモード（GUI なし）で実行します。デフォルトは False。 |
| `use_audio` | `bool` | True の場合、オーディオを有効にします。デフォルトは True。 |

---

#### `start`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L144)**

Reachy Mini デーモンを起動します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `sim` | `bool` | True の場合、Mujoco を使用したシミュレーションモードで実行します。デフォルトは False。 |
| `mockup_sim` | `bool` | True の場合、軽量シミュレーションモード（MuJoCo なし）で実行します。デフォルトは False。 |
| `serialport` | `str` | 実機モーター用のシリアルポート。デフォルトは "auto" で、自動的にポート検出を試みます。 |
| `scene` | `str` | シミュレーションモードで読み込むシーン名（"empty" または "minimal"）。デフォルトは "empty"。 |
| `localhost_only` | `bool` | True の場合、サーバーを localhost のクライアントのみに制限します。デフォルトは True。 |
| `wake_up_on_start` | `bool` | True の場合、起動時に Reachy Mini を起こします。デフォルトは True。 |
| `check_collision` | `bool` | True の場合、衝突判定を有効にします。デフォルトは False。 |
| `kinematics_engine` | `str` | 使用する運動学エンジン。デフォルトは "AnalyticalKinematics"。 |
| `headless` | `bool` | True の場合、Mujoco をヘッドレスモード（GUI なし）で実行します。デフォルトは False。 |
| `use_audio` | `bool` | True の場合、オーディオを有効にします。デフォルトは True。 |
| `hardware_config_filepath` | `str \| None` | ハードウェア構成 YAML ファイルへのパス。デフォルトは None。 |

**戻り値:**

| Type | Description |
|------|-------------|
| `DaemonState` | 起動を試行した後のデーモンの現在の状態。 |

---

#### `status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L436)**

Reachy Mini デーモンの現在のステータスを取得します。

---

#### `stop`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L287)**

Reachy Mini デーモンを停止します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `goto_sleep_on_stop` | `bool` | True の場合、停止時に Reachy Mini をスリープさせます。デフォルトは True。 |

**戻り値:**

| Type | Description |
|------|-------------|
| `DaemonState` | 停止を試行した後のデーモンの現在の状態。 |

---

### `reachy_mini.daemon.daemon.DaemonState`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L591)**

Reachy Mini デーモンの状態を表す Enum。

---

### `reachy_mini.daemon.daemon.DaemonStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L603)**

Reachy Mini デーモンのステータスを表す Dataclass。

---

## バックエンドクラス

### 抽象バックエンド

#### `reachy_mini.daemon.backend.abstract.MotorControlMode`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/abstract.py#L43)**

モーター制御モード用の Enum。

---

### ロボットバックエンド

#### `reachy_mini.daemon.backend.robot.RobotBackend`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L28)**

Reachy Mini 用の実機ロボットバックエンド。

### メソッド

#### `close`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L316)**

モーターコントローラとの接続を閉じ、リソースを解放します。

---

#### `compensate_head_gravity`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L513)**

重力を補償するために必要な電流を計算します。

---

#### `disable_motors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L336)**

トルクをオフにしてモーターを無効化します。

---

#### `enable_motors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L329)**

トルクをオンにしてモーターを有効化します。

---

#### `get_all_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L438)**

ロボットの現在の関節位置を取得します。

**戻り値:**

| Type | Description |
|------|-------------|
| `tuple` | 2 つのリストを含むタプル。1 つ目のリストは頭部の関節位置、2 つ目のリストはアンテナの関節位置です。 |

---

#### `get_imu_data`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L477)**

現在の IMU データ（加速度計、ジャイロスコープ、クォータニオン、温度）を取得します。

**戻り値:**

| Type | Description |
|------|-------------|
| `dict \| None` | 'accelerometer'、'gyroscope'、'quaternion'、'temperature' キーを持つ dict、または IMU が利用できない場合は None。 |

---

#### `get_present_antenna_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L466)**

アンテナの現在の関節位置を取得します。

**戻り値:**

| Type | Description |
|------|-------------|
| `list` | アンテナの関節位置のリスト。 |

---

#### `get_present_head_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L455)**

頭部の現在の関節位置を取得します。

**戻り値:**

| Type | Description |
|------|-------------|
| `list` | 体の回転を含む、頭部の関節位置のリスト。 |

---

#### `get_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L323)**

ロボットバックエンドの現在のステータスを取得します。

---

#### `read_hardware_errors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L614)**

モーターコントローラからハードウェアエラーを読み取ります。

---

#### `run`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L136)**

ロボットバックエンドの制御ループを実行します。

このメソッドは、指定された周波数でモーターコントローラを継続的に更新します。関節位置を読み取り、モーターコントローラを更新し、関節位置をパブリッシュします。また、モーターコントローラが応答しない場合のエラー処理とリトライも行います。

---

#### `set_antennas_operation_mode`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L398)**

アンテナモーターの動作モードを変更します。

:::warning

このメソッドは現在の feetech モーターではうまく動作しません。これらはトルク制御をサポートしていないためです。そのため、このメソッドはトルク制御モードではアンテナを無効化します。

:::

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `mode` | `int` | アンテナモーターの動作モード（0: トルク制御、3: 位置制御、5: 電流ベース位置制御）。 |

---

#### `set_head_operation_mode`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L343)**

ヘッドモーターの動作モードを変更します。

動作モードは次のとおりです：
- 0: トルク制御
- 3: 位置制御
- 5: 電流ベース位置制御

:::warning

このメソッドは、現在のfeetechモーター（ボディ回転）ではトルク制御をサポートしていないため、うまく動作しません。そのため、このメソッドはトルク制御モードのときにアンテナを無効にします。ヘッドに使用されているdynamixelモーターはトルク制御をサポートしているため、このメソッドは期待どおりに動作します。

:::

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `mode` | `int` | ヘッドモーターの動作モード。 |

---

#### `set_motor_torque_ids`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L579)**

特定のモーター名に対してトルク状態を設定します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `ids` | `list[int]` | トルク状態を設定するモーターIDのリスト。 |
| `on` | `bool` | トルクを有効にする場合はTrue、無効にする場合はFalse。 |

---

### `reachy_mini.daemon.backend.robot.RobotBackendStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L678)**

Robot Backendのステータス。

---

### MuJoCo Backend

#### `reachy_mini.daemon.backend.mujoco.MujocoMockupBackend`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mujoco/__init__.py#L15)**

MuJoCoがインストールされていない場合にインポートエラーを回避するためのモックアップクラス。

---

#### `reachy_mini.daemon.backend.mujoco.MujocoMockupBackendStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mujoco/__init__.py#L28)**

MuJoCoがインストールされていない場合にインポートエラーを回避するためのモックアップクラス。

---

### モックアップシミュレーションBackend

#### `reachy_mini.daemon.backend.mockup_sim.MockupSimBackend`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L21)**

MuJoCoなしで動作する軽量なReachy Miniシミュレーション。

このバックエンドは、物理シミュレーションを行わずに目標位置が即座に適用されるシンプルなシミュレーションを提供します。アプリはウェブカメラ/マイクに直接アクセスします（UDPストリーミング経由ではありません）。

### メソッド

#### `get_present_antenna_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L149)**

アンテナの現在の関節位置を取得します。

---

#### `get_present_head_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L143)**

ヘッドの現在の関節位置を取得します。

---

#### `get_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L139)**

バックエンドのステータスを取得します。

---

#### `run`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L68)**

シミュレーションループを実行します。

mockup-simモードでは、目標位置は即座に適用されます。

---

#### `set_motor_torque_ids`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L163)**

特定のモーター名に対してモータートルク状態を設定します。

:::note

mockup-simモードでは何もしません。

:::

---

### `reachy_mini.daemon.backend.mockup_sim.MockupSimBackendStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L172)**

MockupSimバックエンドのステータス。

---

## Daemonユーティリティ

### `reachy_mini.daemon.utils.convert_enum_to_dict`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/utils.py#L164)**

Enumを含むデータクラスを、Enumの値を持つ辞書に変換します。

---

### `reachy_mini.daemon.utils.find_serial_port`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/utils.py#L101)**

VIDとPID、またはワイヤレス版用のRaspberry Pi UARTに基づいてReachy Miniのシリアルポートを検索します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `wireless_version` | `bool` | Raspberry Pi UARTを使用してワイヤレス版を探すかどうか。 |
| `vid` | `str` | デバイスのベンダーID（例: "1a86"）。 |
| `pid` | `str` | デバイスのプロダクトID（例: "55d3"）。 |
| `pi_uart` | `str` | Raspberry Pi UARTデバイスへのパス（例: "/dev/ttyAMA3"）。 |

---

### `reachy_mini.daemon.utils.get_ip_address`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/utils.py#L129)**

特定のネットワークインターフェース（LinuxおよびWindows）のIPアドレスを取得します。

---

## アプリ

### モデル

#### `reachy_mini.daemon.app.models.Matrix4x4Pose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/models.py#L14)**

4x4変換行列によって3Dポーズを表します（並進はメートル単位で表現されます）。

---

#### `reachy_mini.daemon.app.models.XYZRPYPose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/models.py#L68)**

位置（x, y, z、メートル単位）と姿勢（roll, pitch, yaw、ラジアン単位の角度）を用いて3Dポーズを表します。

---

#### `reachy_mini.daemon.app.models.FullBodyTarget`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/models.py#L116)**

ヘッドポーズとアンテナの関節を含む全身を表します。

---

#### `reachy_mini.daemon.app.models.DoAInfo`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/models.py#L144)**

マイクアレイからの到来方向（Direction of Arrival）情報。

---

#### `reachy_mini.daemon.app.models.FullState`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/models.py#L151)**

すべての関節位置とポーズを含むロボットの完全な状態を表します。

---

### 依存関係

#### `reachy_mini.daemon.app.dependencies.get_daemon`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/dependencies.py#L10)**

リクエスト依存関係としてdaemonを取得します。

---

#### `reachy_mini.daemon.app.dependencies.get_backend`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/dependencies.py#L16)**

リクエスト依存関係としてバックエンドを取得します。

---

#### `reachy_mini.daemon.app.dependencies.get_app_manager`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/dependencies.py#L27)**

リクエスト依存関係としてアプリマネージャーを取得します。

---

#### `reachy_mini.daemon.app.dependencies.ws_get_backend`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/dependencies.py#L33)**

WebSocket依存関係としてバックエンドを取得します。

---

### ジョブ

#### `reachy_mini.daemon.app.bg_job_register.JobStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L15)**

ジョブステータス用のEnum。

---

#### `reachy_mini.daemon.app.bg_job_register.JobInfo`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L24)**

インストールジョブのステータス用Pydanticモデル。

---

#### `reachy_mini.daemon.app.bg_job_register.JobHandler`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L33)**

バックグラウンドジョブのハンドラー。

---

#### `reachy_mini.daemon.app.bg_job_register.run_command`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L44)**

バックグラウンドジョブを開始し、カスタムロガーを使用して、そのjob_idを返します。

---

#### `reachy_mini.daemon.app.bg_job_register.get_info`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L93)**

IDによってジョブの情報を取得します。

---

#### `reachy_mini.daemon.app.bg_job_register.ws_poll_info`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L103)**

ジョブログをリアルタイムでストリーミングするWebSocketエンドポイント。

---

### メインアプリケーション

#### `reachy_mini.daemon.app.main.Args`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/main.py#L54)**

Reachy Mini daemonを構成するための引数。

---

#### `reachy_mini.daemon.app.main.create_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/main.py#L91)**

FastAPIアプリケーションを作成して構成します。

---

#### `reachy_mini.daemon.app.main.run_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/main.py#L264)**

FastAPIアプリをUvicornで実行します。

---

#### `reachy_mini.daemon.app.main`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/main.py#L383)**

FastAPIアプリをUvicornで実行します。

---

## アプリルーター

### Daemonルーター

#### `reachy_mini.daemon.app.routers.daemon.start_daemon`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/daemon.py#L19)**

daemonを起動します。

---

#### `reachy_mini.daemon.app.routers.daemon.stop_daemon`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/daemon.py#L48)**

必要に応じてロボットをスリープ状態にしてdaemonを停止します。

---

#### `reachy_mini.daemon.app.routers.daemon.restart_daemon`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/daemon.py#L64)**

デーモンを再起動します。

---

#### `reachy_mini.daemon.app.routers.daemon.get_daemon_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/daemon.py#L80)**

デーモンの現在のステータスを取得します。

---

### State Router

#### `reachy_mini.daemon.app.routers.state.get_head_pose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L21)**

現在のヘッドポーズを取得します。

**パラメータ:**

| 名前 | 型 | 説明 |
|------|------|-------------|
| `use_pose_matrix` | `bool` | ポーズを行列表現（4x4 をフラット化）で使用するか、並進 + オイラー角表現（x, y, z, roll, pitch, yaw）で使用するかを指定します。 |
| `backend` | `Backend` | backend インスタンス。 |

**戻り値:**

| 型 | 説明 |
|------|-------------|
| `AnyPose` | 現在のヘッドポーズ。 |

---

#### `reachy_mini.daemon.app.routers.state.get_body_yaw`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L39)**

現在のボディヨー角（ラジアン）を取得します。

---

#### `reachy_mini.daemon.app.routers.state.get_antenna_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L47)**

現在のアンテナ関節位置（ラジアン）（left, right）を取得します。

---

#### `reachy_mini.daemon.app.routers.state.get_doa`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L57)**

マイクアレイからの到来方向（Direction of Arrival）を取得します。

角度をラジアンで返します（0=left、π/2=front、π=right）および音声検出ステータスを返します。オーディオデバイスが利用できない場合は None を返します。

---

#### `reachy_mini.daemon.app.routers.state.get_full_state`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L74)**

オプションフィールドを含むロボットの完全な状態を取得します。

---

#### `reachy_mini.daemon.app.routers.state.ws_full_state`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L130)**

ロボットの完全な状態をストリーミングするための WebSocket エンドポイント。

---

### Motors Router

#### `reachy_mini.daemon.app.routers.motors.get_motor_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/motors.py#L27)**

モーターの現在のステータスを取得します。

---

#### `reachy_mini.daemon.app.routers.motors.set_motor_mode`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/motors.py#L33)**

モーターの制御モードを設定します。

---

### Move Router

#### `reachy_mini.daemon.app.routers.move.get_running_moves`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L131)**

現在実行中の move タスクの一覧を取得します。

---

#### `reachy_mini.daemon.app.routers.move.goto`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L137)**

特定のターゲットへの移動を要求します。

---

#### `reachy_mini.daemon.app.routers.move.play_wake_up`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L152)**

ロボットに wake up を実行するよう要求します。

---

#### `reachy_mini.daemon.app.routers.move.play_goto_sleep`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L158)**

ロボットに sleep 状態へ移行するよう要求します。

---

#### `reachy_mini.daemon.app.routers.move.list_recorded_move_dataset`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L164)**

データセット内で利用可能な recorded move の一覧を取得します。

---

#### `reachy_mini.daemon.app.routers.move.play_recorded_move_dataset`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L177)**

データセットから事前定義された recorded move を再生するようロボットに要求します。

---

#### `reachy_mini.daemon.app.routers.move.stop_move`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L195)**

実行中の move タスクを停止します。

---

#### `reachy_mini.daemon.app.routers.move.set_target`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L216)**

単一の FullBodyTarget を設定するための POST ルート。

---

#### `reachy_mini.daemon.app.routers.move.ws_move_updates`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L201)**

move の更新をストリーミングするための WebSocket ルート。

---

### Apps Router

#### `reachy_mini.daemon.app.routers.apps.list_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L46)**

利用可能なアプリ（未インストールを含む）の一覧を取得します。

---

#### `reachy_mini.daemon.app.routers.apps.list_all_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L55)**

すべての利用可能なアプリ（未インストールを含む）の一覧を取得します。

---

#### `reachy_mini.daemon.app.routers.apps.install_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L63)**

アプリ情報に基づいて新しいアプリをインストールします（バックグラウンドで実行され、job_id を返します）。

---

#### `reachy_mini.daemon.app.routers.apps.remove_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L78)**

名前を指定してインストール済みアプリを削除します（バックグラウンドで実行され、job_id を返します）。

---

#### `reachy_mini.daemon.app.routers.apps.job_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L91)**

ジョブのステータス／ログを取得します。

---

#### `reachy_mini.daemon.app.routers.apps.ws_apps_manager`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L101)**

ジョブのライブステータス／ログをストリーミングするための WebSocket ルートで、新しいログが利用可能になり次第更新を送信します。

---

#### `reachy_mini.daemon.app.routers.apps.start_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L109)**

名前を指定してアプリを起動します。

---

#### `reachy_mini.daemon.app.routers.apps.restart_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L121)**

現在実行中のアプリを再起動します。

---

#### `reachy_mini.daemon.app.routers.apps.stop_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L132)**

現在実行中のアプリを停止します。

---

#### `reachy_mini.daemon.app.routers.apps.current_app_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L143)**

現在実行中のアプリがあれば、そのステータスを取得します。

---

#### `reachy_mini.daemon.app.routers.apps.install_private_space`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L157)**

プライベートな HuggingFace space をインストールします。

事前に HF トークンを /api/hf-auth/save-token 経由で保存しておく必要があります。

---

### Update Router

#### `reachy_mini.daemon.app.routers.update.available`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/update.py#L32)**

Reachy Mini Wireless 用のアップデートが利用可能かどうかを確認します。

---

#### `reachy_mini.daemon.app.routers.update.start_update`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/update.py#L58)**

Reachy Mini Wireless バージョンのアップデート処理を開始します。

---

#### `reachy_mini.daemon.app.routers.update.get_update_info`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/update.py#L117)**

アップデートジョブの情報を取得します。

---

#### `reachy_mini.daemon.app.routers.update.websocket_logs`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/update.py#L126)**

アップデートログをリアルタイムでストリーミングするための WebSocket エンドポイント。

---

### Cache Router

#### `reachy_mini.daemon.app.routers.cache.clear_huggingface_cache`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/cache.py#L13)**

HuggingFace のキャッシュディレクトリをクリアします。

---

#### `reachy_mini.daemon.app.routers.cache.reset_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/cache.py#L32)**

アプリケーションの仮想環境ディレクトリを削除します。

---

### Kinematics Router

#### `reachy_mini.daemon.app.routers.kinematics.get_kinematics_info`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/kinematics.py#L29)**

現在の運動学情報を取得します。

---

#### `reachy_mini.daemon.app.routers.kinematics.get_urdf`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/kinematics.py#L42)**

ロボットの URDF 表現を取得します。

---

#### `reachy_mini.daemon.app.routers.kinematics.get_stl_file`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/kinematics.py#L48)**

STL アセットファイルへのパスを取得します。

---

### Volume Router

#### `reachy_mini.daemon.app.routers.volume.get_volume`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/volume.py#L79)**

現在の出力ボリュームレベルを取得します。

---

#### `reachy_mini.daemon.app.routers.volume.set_volume`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/volume.py#L86)**

出力音量レベルを設定し、テストサウンドを再生します。

---

#### `reachy_mini.daemon.app.routers.volume.play_test_sound`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/volume.py#L107)**

テストサウンドを再生します。

---

#### `reachy_mini.daemon.app.routers.volume.get_microphone_volume`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/volume.py#L139)**

現在のマイク入力音量レベルを取得します。

---

#### `reachy_mini.daemon.app.routers.volume.set_microphone_volume`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/volume.py#L146)**

マイク入力音量レベルを設定します。

---

### ログルーター

#### `reachy_mini.daemon.app.routers.logs.websocket_daemon_logs`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/logs.py#L15)**

reachy-mini-daemon サービスの journalctl ログをリアルタイムでストリーミングする WebSocket エンドポイントです。

---

### HF 認証ルーター

#### `reachy_mini.daemon.app.routers.hf_auth.save_token`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/hf_auth.py#L33)**

検証後に HuggingFace トークンを保存します。

---

#### `reachy_mini.daemon.app.routers.hf_auth.get_auth_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/hf_auth.py#L49)**

ユーザーが HuggingFace で認証されているかどうかを確認します。

---

#### `reachy_mini.daemon.app.routers.hf_auth.delete_token`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/hf_auth.py#L79)**

保存されている HuggingFace トークンを削除します。
