---
description: Reachy Mini の Daemon API リファレンス。コア daemon クラス、ロボットアプリロック、バックエンドクラス、およびすべてのルーターエンドポイントを網羅します。
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

[[autodoc]] reachy_mini.daemon.daemon.Daemon

[[autodoc]] reachy_mini.daemon.daemon.DaemonState

[[autodoc]] reachy_mini.daemon.daemon.DaemonStatus

## ロボットアプリロック

ロボットの *app lock* は、どのマネージドアプリが現在ロボットを保持しているかについての、daemon における唯一の信頼できる情報源です。
マネージドアプリがロボットを保持しているかについての唯一の情報源です。これは 2 つのマネージド
エントリポイントを直列化します — :class:`AppManager` によって起動されるローカル Python アプリと、
中央シグナリングリレーを経由してルーティングされるリモート WebRTC クライアントです。

これは、ロボットを駆動できるすべてのコードパスを制御するわけでは**ありません**。
daemon と LAN/WebSocket 経由で直接通信する SDK クライアントはこれをバイパスします。
名称に「app」を用いているのは、そのより狭いスコープを意図的に反映するためです。

### 並行性モデル

2 つのマネージドエントリポイントがロボットとのセッションを開くことができます：

1. **ローカルパス** — 
   ``POST /api/apps/start`` によって起動される Python アプリ。daemon のサブプロセスとして実行され、
   バックエンドと直接通信します。
2. **リモートパス** — 
   HuggingFace の中央シグナリングサーバーで認証され、WebRTC 経由でロボットにルーティングされるブラウザクライアント。
   独自のスレッド内で ``CentralSignalingRelay`` によって処理されます。

調整がなければ、両方のパスが同時にロボットをつかみ、
モーターコマンド、カメラ、オーディオを奪い合う可能性があります。:class:`RobotAppLock` は、
次の 3 つの相互排他的な状態によってそれを防ぎます：

- ``free`` — どのマネージドアプリもスロットを保持していません。
- ``local_app(name)`` — Python アプリが実行中です。
- ``remote_session(name)`` — リモート WebRTC クライアントが接続されています。

**取得ルール:**

- ローカルパスは :meth:`RobotAppLock.acquire_local_evicting_remote` を使用します。
  リモートセッションがアクティブな場合、ロックはアトミックに
  ``local_app`` に遷移し、リレーに対してリモートピアおよびローカル GStreamer に
  ``endSession`` を送信するよう要求します。これにより既存の WebRTC
  接続がクリーンに切断されます。別の Python アプリがすでにロックを保持している場合、
  取得は ``RuntimeError`` を送出します。
- リモートパスは :meth:`RobotAppLock.try_acquire_remote` を使用します。これは
  ロックが ``free`` でない場合は常にすぐに失敗（``False`` を返す）し、
  受信したリモートセッションは次のメッセージで拒否されます：
  ``{"type": "endSession", "reason": "robot_busy_local_app"}``。

**解放ルール:**

- :meth:`RobotAppLock.release_local` はサブプロセス
  モニターの ``finally`` ブロックから呼び出されるため、正常終了、クラッシュ、``SIGKILL``、
  OOM、およびタスクキャンセルのすべてでロックが解放されます。
- :meth:`RobotAppLock.release_remote` はすべての
  ``endSession`` ハンドラー（両方向）から、
  切断/再接続時の ``_close_connections`` から、そしてリレーの
  ``stop()`` から呼び出されます。すべての解放呼び出しは冪等であり、
  ロックが対応する状態でない場合は何もしません。

**スレッド間の考慮事項:** ロック状態は
``threading.Lock`` によって保護されています。退去コールバックはリレーによって登録され、
AppManager によってメインの asyncio ループから呼び出されますが、実際のセッション終了処理は
リレー自身のイベントループ上で ``asyncio.run_coroutine_threadsafe`` を介してディスパッチされます。
AppManager は Python サブプロセスを生成する前にセッション終了処理を待機するため、
ローカルアプリがメディアハンドルを開く前に、リモートピアはメディアハンドルを
解放済みとなります。

### API リファレンス

[[autodoc]] reachy_mini.daemon.robot_app_lock.RobotAppLock

[[autodoc]] reachy_mini.daemon.robot_app_lock.RobotAppLockState

[[autodoc]] reachy_mini.daemon.robot_app_lock.RobotAppLockStatus

## バックエンドクラス

### 抽象バックエンド

[[autodoc]] reachy_mini.daemon.backend.abstract.MotorControlMode

### ロボットバックエンド

[[autodoc]] reachy_mini.daemon.backend.robot.RobotBackend

[[autodoc]] reachy_mini.daemon.backend.robot.RobotBackendStatus

### MuJoCo バックエンド

[[autodoc]] reachy_mini.daemon.backend.mujoco.MujocoBackend

[[autodoc]] reachy_mini.daemon.backend.mujoco.MujocoBackendStatus

### モックアップシミュレーションバックエンド

[[autodoc]] reachy_mini.daemon.backend.mockup_sim.MockupSimBackend

[[autodoc]] reachy_mini.daemon.backend.mockup_sim.MockupSimBackendStatus

## Daemon ユーティリティ

[[autodoc]] reachy_mini.daemon.utils.find_serial_port

[[autodoc]] reachy_mini.daemon.utils.get_ip_address

## アプリ

### モデル

[[autodoc]] reachy_mini.daemon.app.models.Matrix4x4Pose

[[autodoc]] reachy_mini.daemon.app.models.XYZRPYPose

[[autodoc]] reachy_mini.daemon.app.models.FullBodyTarget

[[autodoc]] reachy_mini.daemon.app.models.DoAInfo

[[autodoc]] reachy_mini.daemon.app.models.FullState

### 依存関係

[[autodoc]] reachy_mini.daemon.app.dependencies.get_daemon

[[autodoc]] reachy_mini.daemon.app.dependencies.get_backend

[[autodoc]] reachy_mini.daemon.app.dependencies.get_app_manager

[[autodoc]] reachy_mini.daemon.app.dependencies.ws_get_backend

### ジョブ

[[autodoc]] reachy_mini.daemon.app.bg_job_register.JobStatus

[[autodoc]] reachy_mini.daemon.app.bg_job_register.JobInfo

[[autodoc]] reachy_mini.daemon.app.bg_job_register.JobHandler

[[autodoc]] reachy_mini.daemon.app.bg_job_register.run_command

[[autodoc]] reachy_mini.daemon.app.bg_job_register.get_info

[[autodoc]] reachy_mini.daemon.app.bg_job_register.ws_poll_info

### メインアプリケーション

[[autodoc]] reachy_mini.daemon.app.main.Args

[[autodoc]] reachy_mini.daemon.app.main.create_app

[[autodoc]] reachy_mini.daemon.app.main.run_app

[[autodoc]] reachy_mini.daemon.app.main.main

## アプリルーター

### Daemon ルーター

[[autodoc]] reachy_mini.daemon.app.routers.daemon.start_daemon

[[autodoc]] reachy_mini.daemon.app.routers.daemon.stop_daemon

[[autodoc]] reachy_mini.daemon.app.routers.daemon.restart_daemon

[[autodoc]] reachy_mini.daemon.app.routers.daemon.get_daemon_status

[[autodoc]] reachy_mini.daemon.app.routers.daemon.get_robot_app_lock_status

### State ルーター

[[autodoc]] reachy_mini.daemon.app.routers.state.get_head_pose

[[autodoc]] reachy_mini.daemon.app.routers.state.get_body_yaw

[[autodoc]] reachy_mini.daemon.app.routers.state.get_antenna_joint_positions

[[autodoc]] reachy_mini.daemon.app.routers.state.get_doa

[[autodoc]] reachy_mini.daemon.app.routers.state.get_full_state

[[autodoc]] reachy_mini.daemon.app.routers.state.ws_full_state

### Motors ルーター


[[autodoc]] reachy_mini.daemon.app.routers.motors.get_motor_status

[[autodoc]] reachy_mini.daemon.app.routers.motors.set_motor_mode

### Move ルーター



[[autodoc]] reachy_mini.daemon.app.routers.move.get_running_moves

[[autodoc]] reachy_mini.daemon.app.routers.move.goto

[[autodoc]] reachy_mini.daemon.app.routers.move.play_wake_up

[[autodoc]] reachy_mini.daemon.app.routers.move.play_goto_sleep

[[autodoc]] reachy_mini.daemon.app.routers.move.list_recorded_move_dataset

[[autodoc]] reachy_mini.daemon.app.routers.move.play_recorded_move_dataset

[[autodoc]] reachy_mini.daemon.app.routers.move.stop_move

[[autodoc]] reachy_mini.daemon.app.routers.move.set_target

[[autodoc]] reachy_mini.daemon.app.routers.move.ws_move_updates

### Apps ルーター

[[autodoc]] reachy_mini.daemon.app.routers.apps.list_available_apps

[[autodoc]] reachy_mini.daemon.app.routers.apps.list_all_available_apps

[[autodoc]] reachy_mini.daemon.app.routers.apps.install_app

[[autodoc]] reachy_mini.daemon.app.routers.apps.remove_app

[[autodoc]] reachy_mini.daemon.app.routers.apps.job_status

[[autodoc]] reachy_mini.daemon.app.routers.apps.ws_apps_manager

[[autodoc]] reachy_mini.daemon.app.routers.apps.start_app

[[autodoc]] reachy_mini.daemon.app.routers.apps.restart_app

[[autodoc]] reachy_mini.daemon.app.routers.apps.stop_app

[[autodoc]] reachy_mini.daemon.app.routers.apps.current_app_status

[[autodoc]] reachy_mini.daemon.app.routers.apps.install_private_space

### Update ルーター

[[autodoc]] reachy_mini.daemon.app.routers.update.available

[[autodoc]] reachy_mini.daemon.app.routers.update.start_update

[[autodoc]] reachy_mini.daemon.app.routers.update.get_update_info

[[autodoc]] reachy_mini.daemon.app.routers.update.websocket_logs

### Cache ルーター

[[autodoc]] reachy_mini.daemon.app.routers.cache.clear_huggingface_cache

[[autodoc]] reachy_mini.daemon.app.routers.cache.reset_apps

### Kinematics ルーター


[[autodoc]] reachy_mini.daemon.app.routers.kinematics.get_kinematics_info

[[autodoc]] reachy_mini.daemon.app.routers.kinematics.get_urdf

[[autodoc]] reachy_mini.daemon.app.routers.kinematics.get_stl_file

### Volume ルーター


[[autodoc]] reachy_mini.daemon.app.routers.volume.get_volume

[[autodoc]] reachy_mini.daemon.app.routers.volume.set_volume

[[autodoc]] reachy_mini.daemon.app.routers.volume.play_test_sound

[[autodoc]] reachy_mini.daemon.app.routers.volume.get_microphone_volume

[[autodoc]] reachy_mini.daemon.app.routers.volume.set_microphone_volume

### Logs ルーター

[[autodoc]] reachy_mini.daemon.app.routers.logs.websocket_daemon_logs

### HF Auth ルーター

[[autodoc]] reachy_mini.daemon.app.routers.hf_auth.save_token

[[autodoc]] reachy_mini.daemon.app.routers.hf_auth.get_auth_status

[[autodoc]] reachy_mini.daemon.app.routers.hf_auth.delete_token