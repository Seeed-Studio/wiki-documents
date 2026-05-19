---
description: Reachy Mini守护进程API参考，涵盖核心守护进程类、机器人应用锁、后端类和所有路由器端点。
title: 守护进程API
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
url: https://wiki.seeedstudio.com/reachymini_api_daemon/
---

# 守护进程

## 核心守护进程类

[[autodoc]] reachy_mini.daemon.daemon.Daemon

[[autodoc]] reachy_mini.daemon.daemon.DaemonState

[[autodoc]] reachy_mini.daemon.daemon.DaemonStatus

## 机器人应用锁

机器人*应用锁*是守护进程关于当前持有机器人的托管应用的唯一真实来源。它序列化两个托管入口点——由:class:`AppManager`启动的本地Python应用和通过中央信号继电器路由的远程WebRTC客户端。

它**不会**阻塞每个可以驱动机器人的代码路径：直接通过LAN/WebSocket与守护进程通信的SDK客户端会绕过它。名称特意使用"app"来反映这个较窄的范围。

### 并发模型

两个托管入口点可以打开与机器人的会话：

1. **本地路径** — 通过``POST /api/apps/start``启动的Python应用。作为守护进程的子进程运行，直接与后端通信。
2. **远程路径** — 通过HuggingFace中央信号服务器认证的浏览器客户端，通过WebRTC路由到机器人。由``CentralSignalingRelay``在自己的线程中处理。

如果没有协调，两个路径可以同时获取机器人并在电机命令、摄像头和音频上产生竞争。:class:`RobotAppLock`通过三种互斥状态来防止这种情况：

- ``free`` — 没有托管应用持有该槽。
- ``local_app(name)`` — 一个Python应用正在运行。
- ``remote_session(name)`` — 远程WebRTC客户端已连接。

**获取规则：**

- 本地路径使用:meth:`RobotAppLock.acquire_local_evicting_remote`。如果有远程会话处于活动状态，锁会原子地转换到``local_app``，并要求继电器向远程对等方发送``endSession``，并向本地GStreamer发送，以使现有的WebRTC连接干净地断开。如果另一个Python应用已经持有锁，获取会抛出``RuntimeError``。
- 远程路径使用:meth:`RobotAppLock.try_acquire_remote`。当锁不是``free``时，此操作会快速失败（返回``False``）——传入的远程会话会被拒绝，并显示``{"type": "endSession", "reason": "robot_busy_local_app"}``。

**释放规则：**

- :meth:`RobotAppLock.release_local`从子进程监视器的``finally``块调用，因此干净的退出、崩溃、``SIGKILL``、OOM和任务取消都会释放锁。
- :meth:`RobotAppLock.release_remote`从每个``endSession``处理程序（两个方向）、``_close_connections``在断开/重连时以及继电器的``stop()``调用。所有释放调用都是幂等的——如果锁不在相应状态，它们会直接返回。

**跨线程注意事项：** 锁状态由``threading.Lock``保护。驱逐回调由继电器注册，由AppManager从主asyncio循环调用，但将实际的会话拆除分派到继电器自己的事件循环上，通过``asyncio.run_coroutine_threadsafe``。AppManager在生成Python子进程之前等待拆除完成，因此远程对等方在其本地应用打开它们之前已经释放了其媒体句柄。

### API参考

[[autodoc]] reachy_mini.daemon.robot_app_lock.RobotAppLock

[[autodoc]] reachy_mini.daemon.robot_app_lock.RobotAppLockState

[[autodoc]] reachy_mini.daemon.robot_app_lock.RobotAppLockStatus

## 后端类

### 抽象后端

[[autodoc]] reachy_mini.daemon.backend.abstract.MotorControlMode

### 机器人后端

[[autodoc]] reachy_mini.daemon.backend.robot.RobotBackend

[[autodoc]] reachy_mini.daemon.backend.robot.RobotBackendStatus

### MuJoCo后端

[[autodoc]] reachy_mini.daemon.backend.mujoco.MujocoBackend

[[autodoc]] reachy_mini.daemon.backend.mujoco.MujocoBackendStatus

### Mockup仿真后端

[[autodoc]] reachy_mini.daemon.backend.mockup_sim.MockupSimBackend

[[autodoc]] reachy_mini.daemon.backend.mockup_sim.MockupSimBackendStatus

## 守护进程工具

[[autodoc]] reachy_mini.daemon.utils.find_serial_port

[[autodoc]] reachy_mini.daemon.utils.get_ip_address

## 应用

### 模型

[[autodoc]] reachy_mini.daemon.app.models.Matrix4x4Pose

[[autodoc]] reachy_mini.daemon.app.models.XYZRPYPose

[[autodoc]] reachy_mini.daemon.app.models.FullBodyTarget

[[autodoc]] reachy_mini.daemon.app.models.DoAInfo

[[autodoc]] reachy_mini.daemon.app.models.FullState

### 依赖项

[[autodoc]] reachy_mini.daemon.app.dependencies.get_daemon

[[autodoc]] reachy_mini.daemon.app.dependencies.get_backend

[[autodoc]] reachy_mini.daemon.app.dependencies.get_app_manager

[[autodoc]] reachy_mini.daemon.app.dependencies.ws_get_backend

### 作业

[[autodoc]] reachy_mini.daemon.app.bg_job_register.JobStatus

[[autodoc]] reachy_mini.daemon.app.bg_job_register.JobInfo

[[autodoc]] reachy_mini.daemon.app.bg_job_register.JobHandler

[[autodoc]] reachy_mini.daemon.app.bg_job_register.run_command

[[autodoc]] reachy_mini.daemon.app.bg_job_register.get_info

[[autodoc]] reachy_mini.daemon.app.bg_job_register.ws_poll_info

### 主应用

[[autodoc]] reachy_mini.daemon.app.main.Args

[[autodoc]] reachy_mini.daemon.app.main.create_app

[[autodoc]] reachy_mini.daemon.app.main.run_app

[[autodoc]] reachy_mini.daemon.app.main.main

## 应用路由器

### 守护进程路由器

[[autodoc]] reachy_mini.daemon.app.routers.daemon.start_daemon

[[autodoc]] reachy_mini.daemon.app.routers.daemon.stop_daemon

[[autodoc]] reachy_mini.daemon.app.routers.daemon.restart_daemon

[[autodoc]] reachy_mini.daemon.app.routers.daemon.get_daemon_status

[[autodoc]] reachy_mini.daemon.app.routers.daemon.get_robot_app_lock_status

### 状态路由器

[[autodoc]] reachy_mini.daemon.app.routers.state.get_head_pose

[[autodoc]] reachy_mini.daemon.app.routers.state.get_body_yaw

[[autodoc]] reachy_mini.daemon.app.routers.state.get_antenna_joint_positions

[[autodoc]] reachy_mini.daemon.app.routers.state.get_doa

[[autodoc]] reachy_mini.daemon.app.routers.state.get_full_state

[[autodoc]] reachy_mini.daemon.app.routers.state.ws_full_state

### 电机路由器

[[autodoc]] reachy_mini.daemon.app.routers.motors.get_motor_status

[[autodoc]] reachy_mini.daemon.app.routers.motors.set_motor_mode

### 移动路由器

[[autodoc]] reachy_mini.daemon.app.routers.move.get_running_moves

[[autodoc]] reachy_mini.daemon.app.routers.move.goto

[[autodoc]] reachy_mini.daemon.app.routers.move.play_wake_up

[[autodoc]] reachy_mini.daemon.app.routers.move.play_goto_sleep

[[autodoc]] reachy_mini.daemon.app.routers.move.list_recorded_move_dataset

[[autodoc]] reachy_mini.daemon.app.routers.move.play_recorded_move_dataset

[[autodoc]] reachy_mini.daemon.app.routers.move.stop_move

[[autodoc]] reachy_mini.daemon.app.routers.move.set_target

[[autodoc]] reachy_mini.daemon.app.routers.move.ws_move_updates

### 应用路由器

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

### 更新路由器

[[autodoc]] reachy_mini.daemon.app.routers.update.available

[[autodoc]] reachy_mini.daemon.app.routers.update.start_update

[[autodoc]] reachy_mini.daemon.app.routers.update.get_update_info

[[autodoc]] reachy_mini.daemon.app.routers.update.websocket_logs

### 缓存路由器

[[autodoc]] reachy_mini.daemon.app.routers.cache.clear_huggingface_cache

[[autodoc]] reachy_mini.daemon.app.routers.cache.reset_apps

### 运动学路由器

[[autodoc]] reachy_mini.daemon.app.routers.kinematics.get_kinematics_info

[[autodoc]] reachy_mini.daemon.app.routers.kinematics.get_urdf

[[autodoc]] reachy_mini.daemon.app.routers.kinematics.get_stl_file

### 音量路由器

[[autodoc]] reachy_mini.daemon.app.routers.volume.get_volume

[[autodoc]] reachy_mini.daemon.app.routers.volume.set_volume

[[autodoc]] reachy_mini.daemon.app.routers.volume.play_test_sound

[[autodoc]] reachy_mini.daemon.app.routers.volume.get_microphone_volume

[[autodoc]] reachy_mini.daemon.app.routers.volume.set_microphone_volume

### 日志路由器

[[autodoc]] reachy_mini.daemon.app.routers.logs.websocket_daemon_logs

### HF认证路由器

[[autodoc]] reachy_mini.daemon.app.routers.hf_auth.save_token

[[autodoc]] reachy_mini.daemon.app.routers.hf_auth.get_auth_status

[[autodoc]] reachy_mini.daemon.app.routers.hf_auth.delete_token