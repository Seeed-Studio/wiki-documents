---
description: Reachy Mini 守护进程 API 参考，涵盖核心守护进程类、机器人应用锁、后端类及所有路由端点。
title: 守护进程 API
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

### `reachy_mini.daemon.daemon.Daemon`

用于控制 Reachy Mini 机器人的主守护进程类。

### 方法

#### `start`

启动守护进程及其所有组件。

---

#### `stop`

停止守护进程及其所有组件。

---

#### `restart`

重启守护进程。

---

#### `get_status`

获取守护进程的当前状态。

**返回：**

`DaemonStatus` — 守护进程的当前状态。

---

#### `is_running`

检查守护进程是否正在运行。

**返回：**

`bool` — 如果守护进程正在运行则为 True。

---

### `reachy_mini.daemon.daemon.DaemonState`

表示守护进程状态的枚举。

### 值

| 值 | 描述 |
|-------|-------------|
| `STOPPED` | 守护进程未运行。 |
| `STARTING` | 守护进程正在启动。 |
| `RUNNING` | 守护进程正常运行。 |
| `STOPPING` | 守护进程正在关闭。 |
| `ERROR` | 守护进程遇到错误。 |

---

### `reachy_mini.daemon.daemon.DaemonStatus`

包含守护进程状态和信息的状态对象。

### 属性

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `state` | `DaemonState` | 守护进程的当前状态。 |
| `uptime` | `float` | 守护进程启动后的时间（秒）。 |
| `version` | `str` | 守护进程版本字符串。 |
| `robot_connected` | `bool` | 机器人是否已连接。 |

---

## 机器人应用锁

机器人 *应用锁* 是守护进程关于当前持有机器人的托管应用的唯一真实来源。它将两个托管入口点序列化——由 :class:`AppManager` 启动的本地 Python 应用和通过中央信令中继路由的远程 WebRTC 客户端。

它**不会**对每个可以驱动机器人的代码路径进行门控：直接通过 LAN/WebSocket 与守护进程通信的 SDK 客户端会绕过它。名称中使用"app"是特意为了反映这个较窄的范围。

### 并发模型

两个托管入口点可以与机器人建立会话：

1. **本地路径** — 通过 ``POST /api/apps/start`` 启动的 Python 应用。作为守护进程的子进程运行，直接与后端通信。
2. **远程路径** — 通过 HuggingFace 中央信令服务器进行身份验证的浏览器客户端，通过 WebRTC 路由到机器人。由 ``CentralSignalingRelay`` 在自己的线程中处理。

如果没有协调，两个路径可以同时获取机器人并争夺电机命令、摄像头和音频。:class:`RobotAppLock` 通过三种互斥状态来防止这种情况：

- ``free`` — 没有托管应用持有该槽。
- ``local_app(name)`` — 一个 Python 应用正在运行。
- ``remote_session(name)`` — 一个远程 WebRTC 客户端已连接。

**获取规则：**

- 本地路径使用 :meth:`RobotAppLock.acquire_local_evicting_remote`。如果有远程会话活跃，锁会原子性地转换为 ``local_app``，并且中继会被要求向远程对等方发送 ``endSession``，同时向本地 GStreamer 发送，以便现有的 WebRTC 连接能够干净地拆除。如果另一个 Python 应用已经持有锁，获取操作会抛出 ``RuntimeError``。
- 远程路径使用 :meth:`RobotAppLock.try_acquire_remote`。每当锁不是 ``free`` 时，它会快速失败（返回 ``False``）—— 传入的远程会话会被拒绝，并返回 ``{"type": "endSession", "reason": "robot_busy_local_app"}``。

**释放规则：**

- :meth:`RobotAppLock.release_local` 从子进程监视器的 ``finally`` 块中调用，因此干净的退出、崩溃、``SIGKILL``、OOM 和任务取消都会释放锁。
- :meth:`RobotAppLock.release_remote` 从每个 ``endSession`` 处理程序（双向）、从 ``_close_connections`` 在断开/重新连接时、以及从中继的 ``stop()`` 中调用。所有释放调用都是幂等的——如果锁不在相应状态，它们会静默忽略。

**跨线程注意事项：** 锁状态由 ``threading.Lock`` 保护。驱逐回调由中继注册并由 AppManager 从主 asyncio 循环调用，但通过 ``asyncio.run_coroutine_threadsafe`` 将实际的会话拆除分派到中继自己的事件循环。AppManager 在生成 Python 子进程之前等待拆除完成，因此远程对等方在本地应用打开其媒体句柄之前已释放了其媒体句柄。

### API 参考

### `reachy_mini.daemon.robot_app_lock.RobotAppLock`

用于管理机器人访问的机器人应用锁。

### 方法

#### `acquire_local_evicting_remote`

为本地 Python 应用获取锁，驱逐任何远程会话。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `app_name` | `str` | 获取锁的应用名称。 |

**返回：**

`bool` — 如果锁成功获取则为 True。

---

#### `try_acquire_remote`

尝试为远程 WebRTC 会话获取锁。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `session_name` | `str` | 获取锁的会话名称。 |

**返回：**

`bool` — 如果锁成功获取则为 True。

---

#### `release_local`

从本地 Python 应用释放锁。

---

#### `release_remote`

从远程会话释放锁。

---

#### `get_status`

获取机器人应用锁的当前状态。

**返回：**

`RobotAppLockStatus` — 锁的当前状态。

---

#### `is_free`

检查锁是否空闲。

**返回：**

`bool` — 如果没有应用持有锁则为 True。

---

#### `is_local_app`

检查本地应用是否当前持有锁。

**返回：**

`bool` — 如果本地应用持有锁则为 True。

---

#### `is_remote_session`

检查远程会话是否当前持有锁。

**返回：**

`bool` — 如果远程会话持有锁则为 True。

---

### `reachy_mini.daemon.robot_app_lock.RobotAppLockState`

表示机器人应用锁状态的枚举。

### 值

| 值 | 描述 |
|-------|-------------|
| `free` | 没有托管应用持有该槽。 |
| `local_app` | 一个 Python 应用正在运行。 |
| `remote_session` | 一个远程 WebRTC 客户端已连接。 |

---

### `reachy_mini.daemon.robot_app_lock.RobotAppLockStatus`

包含机器人应用锁状态和信息的状态对象。

### 属性

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `state` | `RobotAppLockState` | 锁的当前状态。 |
| `holder_name` | `str \| None` | 当前持有者的名称（如果有）。 |
| `holder_type` | `str \| None` | 持有者类型（"local_app" 或 "remote_session"）。 |

---

## 后端类

### 抽象后端

### `reachy_mini.daemon.backend.abstract.MotorControlMode`

表示电机控制模式的枚举。

### 值

| 值 | 描述 |
|-------|-------------|
| `enabled` | 电机已完全启用并响应命令。 |
| `disabled` | 电机已禁用，不响应命令。 |
| `gravity_compensation` | 电机处于重力补偿模式。 |

---

### 机器人后端

### `reachy_mini.daemon.backend.robot.RobotBackend`

用于控制实际物理机器人的后端。

### 方法

#### `connect`

连接到机器人硬件。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `port` | `str` | 要连接的串口。 |

---

#### `disconnect`

断开与机器人硬件的连接。

---

#### `get_motor_status`

获取所有电机的状态。

**返回：**

`Dict` — 电机状态字典。

---

#### `set_motor_mode`

设置电机的控制模式。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `mode` | `MotorControlMode` | 要设置的控制模式。 |

---

#### `send_position_command`

向电机发送位置命令。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `positions` | `Dict` | 电机位置字典。 |

---

#### `get_joint_positions`

从机器人获取当前关节位置。

**返回：**

`Dict` — 当前关节位置字典。

---

### `reachy_mini.daemon.backend.robot.RobotBackendStatus`

包含机器人后端状态和信息的状态对象。

### 属性

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `connected` | `bool` | 后端是否已连接到机器人。 |
| `motor_mode` | `MotorControlMode` | 当前电机控制模式。 |
| `last_update` | `float` | 最后更新的时间戳。 |

---

### MuJoCo 后端

### `reachy_mini.daemon.backend.mujoco.MujocoBackend`

用于机器人 MuJoCo 仿真的后端。

### 方法

#### `load_model`

加载 MuJoCo 机器人模型。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `model_path` | `str` | MuJoCo 模型文件的路径。 |

---

#### `step`

步进仿真。

---

#### `get_state`

获取当前仿真状态。

**返回：**

`Dict` — 仿真的当前状态。

---

#### `set_control`

设置仿真的控制目标。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `targets` | `Dict` | 控制目标字典。 |

---

#### `reset`

将仿真重置为初始状态。

---

### `reachy_mini.daemon.backend.mujoco.MujocoBackendStatus`

包含 MuJoCo 后端状态和信息的状态对象。

### 属性

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `model_loaded` | `bool` | 是否已加载模型。 |
| `simulation_time` | `float` | 当前仿真时间。 |
| `real_time_factor` | `float` | 仿真的实时因子。 |

---

### 模拟仿真后端

### `reachy_mini.daemon.backend.mockup_sim.MockupSimBackend`

用于模拟仿真的后端（无实际物理）。

### 方法

#### `start`

启动模拟仿真。

---

#### `stop`

停止模拟仿真。

---

#### `get_state`

获取当前模拟状态。

**返回：**

`Dict` — 模拟的当前状态。

---

#### `set_positions`

设置模拟的目标位置。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `positions` | `Dict` | 目标位置字典。 |

---

### `reachy_mini.daemon.backend.mockup_sim.MockupSimBackendStatus`

包含模拟仿真状态和信息的状态对象。

### 属性

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `running` | `bool` | 模拟是否正在运行。 |
| `positions` | `Dict` | 当前目标位置。 |

---

## 守护进程工具

### `reachy_mini.daemon.utils.find_serial_port`

查找连接到 Reachy Mini 机器人的串口。

**返回：**

`str` — 串口路径，如果未找到则为 None。

---

### `reachy_mini.daemon.utils.get_ip_address`

获取当前机器的 IP 地址。

**返回：**

`str` — IP 地址字符串。

---

## 应用

### 模型

### `reachy_mini.daemon.app.models.Matrix4x4Pose`

用于机器人定位的 4x4 矩阵姿态表示。

### 属性

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `matrix` | `np.ndarray` | 4x4 变换矩阵。 |
| `translation` | `np.ndarray` | 平移向量 (x, y, z)。 |
| `rotation` | `np.ndarray` | 3x3 旋转矩阵。 |

---

### `reachy_mini.daemon.app.models.XYZRPYPose`

使用 XYZ+RPY（位置和欧拉角）的姿态表示。

### 属性

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `x` | `float` | X 位置（米）。 |
| `y` | `float` | Y 位置（米）。 |
| `z` | `float` | Z 位置（米）。 |
| `roll` | `float` | 横滚角（弧度）。 |
| `pitch` | `float` | 俯仰角（弧度）。 |
| `yaw` | `float` | 偏航角（弧度）。 |

---

### `reachy_mini.daemon.app.models.FullBodyTarget`

包括头部和天线的完整身体目标姿态。

### 属性

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `head` | `Matrix4x4Pose \| None` | 目标头部姿态。 |
| `antennas` | `List[float] \| None` | 目标天线位置。 |
| `body_yaw` | `float \| None` | 目标身体偏航角。 |

---

### `reachy_mini.daemon.app.models.DoAInfo`

音频的到达方向信息。

### 属性

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `doa_angle` | `float` | 到达方向角度（度）。 |
| `energy` | `float` | 音频能量级别。 |

---

### `reachy_mini.daemon.app.models.FullState`

包含所有传感器和电机的机器人完整状态。

### 属性

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `joint_positions` | `Dict` | 当前关节位置。 |
| `head_pose` | `Matrix4x4Pose` | 当前头部姿态。 |
| `antennas` | `List[float]` | 当前天线位置。 |
| `body_yaw` | `float` | 当前身体偏航角。 |
| `motor_mode` | `MotorControlMode` | 当前电机控制模式。 |

---

### 依赖项

### `reachy_mini.daemon.app.dependencies.get_daemon`

守护进程实例的依赖提供器。

**返回：**

`Daemon` — 单例守护进程实例。

---

### `reachy_mini.daemon.app.dependencies.get_backend`

当前后端的依赖提供器。

**返回：**

`RobotBackend \| MujocoBackend \| MockupSimBackend` — 当前后端实例。

---

### `reachy_mini.daemon.app.dependencies.get_app_manager`

AppManager 实例的依赖提供器。

**返回：**

`AppManager` — AppManager 实例。

---

### `reachy_mini.daemon.app.dependencies.ws_get_backend`

后端的 WebSocket 依赖提供器。

**返回：**

`RobotBackend \| MujocoBackend \| MockupSimBackend` — 当前后端实例。

---

### 作业

### `reachy_mini.daemon.app.bg_job_register.JobStatus`

表示后台作业状态的枚举。

### 值

| 值 | 描述 |
|-------|-------------|
| `PENDING` | 作业正在等待启动。 |
| `RUNNING` | 作业正在执行。 |
| `COMPLETED` | 作业成功完成。 |
| `FAILED` | 作业失败并出错。 |
| `CANCELLED` | 作业已被取消。 |

---

### `reachy_mini.daemon.app.bg_job_register.JobInfo`

关于后台作业的信息。

### 属性

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `id` | `str` | 唯一作业标识符。 |
| `name` | `str` | 作业名称。 |
| `status` | `JobStatus` | 当前作业状态。 |
| `created_at` | `float` | 作业创建时的时间戳。 |
| `started_at` | `float \| None` | 作业启动时的时间戳。 |
| `completed_at` | `float \| None` | 作业完成时的时间戳。 |
| `error` | `str \| None` | 作业失败时的错误消息。 |

---

### `reachy_mini.daemon.app.bg_job_register.JobHandler`

用于管理后台作业执行的处理程序。

### 方法

#### `start`

启动作业处理程序。

---

#### `stop`

停止作业处理程序。

---

#### `submit`

提交新作业以执行。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `job_id` | `str` | 唯一作业标识符。 |
| `func` | `Callable` | 要执行的函数。 |
| `args` | `List` | 函数的位置参数。 |
| `kwargs` | `Dict` | 函数的关键字参数。 |

---

#### `cancel`

取消正在运行的作业。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `job_id` | `str` | 唯一作业标识符。 |

---

#### `get_status`

获取作业的状态。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `job_id` | `str` | 唯一作业标识符。 |

**返回：**

`JobInfo` — 作业的当前状态。

---

### `reachy_mini.daemon.app.bg_job_register.run_command`

作为后台作业运行 shell 命令。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `command` | `str` | 要执行的命令。 |
| `job_id` | `str` | 唯一作业标识符。 |

**返回：**

`JobInfo` — 关于已启动作业的信息。

---

### `reachy_mini.daemon.app.bg_job_register.get_info`

获取特定作业的信息。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `job_id` | `str` | 唯一作业标识符。 |

**返回：**

`JobInfo \| None` — 如果找到则返回作业信息。

---

### `reachy_mini.daemon.app.bg_job_register.ws_poll_info`

用于轮询作业信息的 WebSocket 端点。

---

### 主应用

### `reachy_mini.daemon.app.main.Args`

守护进程应用的命令行参数。

### 属性

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `host` | `str` | 要绑定的主机（默认："0.0.0.0"）。 |
| `port` | `int` | 要绑定的端口（默认：8000）。 |
| `backend` | `str` | 要使用的后端类型（"robot"、"mujoco"、"mockup"）。 |
| `debug` | `bool` | 启用调试模式。 |

---

### `reachy_mini.daemon.app.main.create_app`

创建 FastAPI 应用。

**返回：**

`FastAPI` — 配置好的 FastAPI 应用。

---

### `reachy_mini.daemon.app.main.run_app`

运行 FastAPI 应用。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `app` | `FastAPI` | 要运行的 FastAPI 应用。 |
| `host` | `str` | 要绑定的主机。 |
| `port` | `int` | 要绑定的端口。 |

---

### `reachy_mini.daemon.app.main.main`

守护进程应用的主入口点。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `args` | `Args` | 命令行参数。 |

---

## 应用路由

### 守护进程路由

#### `reachy_mini.daemon.app.routers.daemon.start_daemon`

启动守护进程服务。

**返回：**

`Dict` — 指示守护进程已启动的状态消息。

---

#### `reachy_mini.daemon.app.routers.daemon.stop_daemon`

停止守护进程服务。

**返回：**

`Dict` — 指示守护进程已停止的状态消息。

---

#### `reachy_mini.daemon.app.routers.daemon.restart_daemon`

重启守护进程服务。

**返回：**

`Dict` — 指示守护进程已重启的状态消息。

---

#### `reachy_mini.daemon.app.routers.daemon.get_daemon_status`

获取守护进程的当前状态。

**返回：**

`DaemonStatus` — 当前守护进程状态。

---

#### `reachy_mini.daemon.app.routers.daemon.get_robot_app_lock_status`

获取机器人应用锁的当前状态。

**返回：**

`RobotAppLockStatus` — 当前机器人应用锁状态。

---

### 状态路由

#### `reachy_mini.daemon.app.routers.state.get_head_pose`

获取当前头部姿态。

**返回：**

`Matrix4x4Pose` — 当前头部姿态矩阵。

---

#### `reachy_mini.daemon.app.routers.state.get_body_yaw`

获取当前身体偏航角。

**返回：**

`float` — 当前偏航角（弧度）。

---

#### `reachy_mini.daemon.app.routers.state.get_antenna_joint_positions`

获取当前天线关节位置。

**返回：**

`List[float]` — 当前天线位置（弧度）。

---

#### `reachy_mini.daemon.app.routers.state.get_doa`

获取当前到达方向信息。

**返回：**

`DoAInfo` — 当前 DOA 信息。

---

#### `reachy_mini.daemon.app.routers.state.get_full_state`

获取完整的机器人状态。

**返回：**

`FullState` — 完整的当前机器人状态。

---

#### `reachy_mini.daemon.app.routers.state.ws_full_state`

用于流式传输完整机器人状态更新的 WebSocket 端点。

---

### 电机路由

#### `reachy_mini.daemon.app.routers.motors.get_motor_status`

获取所有电机的状态。

**返回：**

`Dict` — 包含位置、速度和扭矩的电机状态字典。

---

#### `reachy_mini.daemon.app.routers.motors.set_motor_mode`

设置电机控制模式。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `mode` | `str` | 电机控制模式（"enabled"、"disabled"、"gravity_compensation"）。 |

**返回：**

`Dict` — 确认模式更改的状态消息。

---

### 移动路由

#### `reachy_mini.daemon.app.routers.move.get_running_moves`

获取当前正在运行的移动列表。

**返回：**

`List[Dict]` — 包含其 ID 和进度的运行中移动列表。

---

#### `reachy_mini.daemon.app.routers.move.goto`

发送 goto 命令以移动机器人。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `head` | `List[List[float]]` | 4x4 头部姿态矩阵（16 个值）。 |
| `antennas` | `List[float]` | 天线目标位置 [左, 右]（弧度）。 |
| `body_yaw` | `float` | 身体偏航目标（弧度）。 |
| `duration` | `float` | 移动持续时间（秒）。 |
| `method` | `str` | 插值方法（"linear"、"minjerk"、"ease_in_out"、"cartoon"）。 |

**返回：**

`Dict` — 移动 ID 和状态。

---

#### `reachy_mini.daemon.app.routers.move.play_wake_up`

播放唤醒动画以将机器人置于就绪状态。

**返回：**

`Dict` — 确认唤醒已开始的状态消息。

---

#### `reachy_mini.daemon.app.routers.move.play_goto_sleep`

播放进入睡眠动画以将机器人置于睡眠姿态。

**返回：**

`Dict` — 确认睡眠已开始的状态消息。

---

#### `reachy_mini.daemon.app.routers.move.list_recorded_move_dataset`

列出可用的录制移动数据集。

**返回：**

`List[str]` — 可用数据集名称列表。

---

#### `reachy_mini.daemon.app.routers.move.play_recorded_move_dataset`

从数据集中播放录制移动。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `dataset` | `str` | 包含该移动的数据集名称。 |
| `move_name` | `str` | 要播放的具体移动名称。 |
| `initial_goto_duration` | `float` | 前往起始位置的初始 goto 持续时间。 |
| `sound` | `bool` | 是否播放关联的声音。 |

**返回：**

`Dict` — 确认移动已开始的状态消息。

---

#### `reachy_mini.daemon.app.routers.move.stop_move`

停止当前正在运行的移动。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `move_id` | `str` | 要停止的移动的 ID。 |

**返回：**

`Dict` — 确认移动已停止的状态消息。

---

#### `reachy_mini.daemon.app.routers.move.set_target`

设置实时目标位置以进行连续控制。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `head` | `List[List[float]]` | 4x4 头部姿态矩阵（16 个值）。 |
| `antennas` | `List[float]` | 天线目标位置 [左, 右]（弧度）。 |
| `body_yaw` | `float` | 身体偏航目标（弧度）。 |

**返回：**

`Dict` — 确认目标已设置的状态消息。

---

#### `reachy_mini.daemon.app.routers.move.ws_move_updates`

用于流式传输移动更新的 WebSocket 端点。

---

### 应用路由

#### `reachy_mini.daemon.app.routers.apps.list_available_apps`

列出可供安装的应用。

**返回：**

`List[Dict]` — 包含元数据的可用应用列表。

---

#### `reachy_mini.daemon.app.routers.apps.list_all_available_apps`

列出所有应用，包括已安装和可用的。

**返回：**

`List[Dict]` — 所有应用的完整列表。

---

#### `reachy_mini.daemon.app.routers.apps.install_app`

从源安装应用。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `source` | `str` | 应用的源 URL 或路径。 |

**返回：**

`Dict` — 安装状态和作业 ID。

---

#### `reachy_mini.daemon.app.routers.apps.remove_app`

移除已安装的应用。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `app_name` | `str` | 要移除的应用名称。 |

**返回：**

`Dict` — 移除状态。

---

#### `reachy_mini.daemon.app.routers.apps.job_status`

获取应用操作作业的状态。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `job_id` | `str` | 要检查的作业的 ID。 |

**返回：**

`JobInfo` — 当前作业状态。

---

#### `reachy_mini.daemon.app.routers.apps.ws_apps_manager`

用于应用管理器更新的 WebSocket 端点。

---

#### `reachy_mini.daemon.app.routers.apps.start_app`

启动已安装的应用。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `app_name` | `str` | 要启动的应用名称。 |

**返回：**

`Dict` — 启动状态和会话信息。

---

#### `reachy_mini.daemon.app.routers.apps.restart_app`

重启正在运行的应用。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `app_name` | `str` | 要重启的应用名称。 |

**返回：**

`Dict` — 重启状态。

---

#### `reachy_mini.daemon.app.routers.apps.stop_app`

停止正在运行的应用。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `app_name` | `str` | 要停止的应用名称。 |

**返回：**

`Dict` — 停止状态。

---

#### `reachy_mini.daemon.app.routers.apps.current_app_status`

获取当前正在运行的应用的状态。

**返回：**

`Dict` — 当前应用状态，包括名称、状态和会话信息。

---

#### `reachy_mini.daemon.app.routers.apps.install_private_space`

将私有 HuggingFace Space 安装为应用。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `space_id` | `str` | HuggingFace Space 标识符。 |

**返回：**

`Dict` — 安装状态和作业 ID。

---

### 更新路由

#### `reachy_mini.daemon.app.routers.update.available`

检查可用的更新。

**返回：**

`Dict` — 可用的更新信息，包括版本和变更日志。

---

#### `reachy_mini.daemon.app.routers.update.start_update`

开始更新过程。

**返回：**

`Dict` — 更新状态和进度。

---

#### `reachy_mini.daemon.app.routers.update.get_update_info`

获取关于更新的详细信息。

**返回：**

`Dict` — 详细的更新信息，包括下载大小和估计时间。

---

#### `reachy_mini.daemon.app.routers.update.websocket_logs`

用于流式传输更新日志的 WebSocket 端点。

---

### 缓存路由

#### `reachy_mini.daemon.app.routers.cache.clear_huggingface_cache`

清除 HuggingFace 缓存以释放磁盘空间。

**返回：**

`Dict` — 缓存清除状态和释放的空间量。

---

#### `reachy_mini.daemon.app.routers.cache.reset_apps`

将所有应用重置为初始状态。

**返回：**

`Dict` — 重置状态。

---

### 运动学路由

#### `reachy_mini.daemon.app.routers.kinematics.get_kinematics_info`

获取机器人的运动学信息。

**返回：**

`Dict` — 运动学参数，包括 DH 参数和关节限制。

---

#### `reachy_mini.daemon.app.routers.kinematics.get_urdf`

获取 URDF 机器人描述。

**返回：**

`str` — 描述机器人的 URDF XML 字符串。

---

#### `reachy_mini.daemon.app.routers.kinematics.get_stl_file`

获取机器人组件的 STL 网格文件。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `component` | `str` | 组件名称（例如，"head"、"antenna"）。 |

**返回：**

`bytes` — STL 文件数据。

---

### 音量路由

#### `reachy_mini.daemon.app.routers.volume.get_volume`

获取当前扬声器音量。

**返回：**

`int` — 当前音量级别（0-100）。

---

#### `reachy_mini.daemon.app.routers.volume.set_volume`

设置扬声器音量。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `volume` | `int` | 音量级别（0-100）。 |

**返回：**

`int` — 实际设置的音量（可能被限制）。

---

#### `reachy_mini.daemon.app.routers.volume.play_test_sound`

播放测试声音以验证音频输出。

**返回：**

`Dict` — 确认测试声音已播放的状态消息。

---

#### `reachy_mini.daemon.app.routers.volume.get_microphone_volume`

获取当前麦克风音量。

**返回：**

`int` — 当前麦克风音量（0-100）。

---

#### `reachy_mini.daemon.app.routers.volume.set_microphone_volume`

设置麦克风音量。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `volume` | `int` | 音量级别（0-100）。 |

**返回：**

`int` — 实际设置的音量（可能被限制）。

---

### 日志路由

#### `reachy_mini.daemon.app.routers.logs.websocket_daemon_logs`

用于流式传输守护进程日志的 WebSocket 端点。

---

### HF 认证路由

#### `reachy_mini.daemon.app.routers.hf_auth.save_token`

保存 HuggingFace 认证令牌。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `token` | `str` | HuggingFace API 令牌。 |

**返回：**

`Dict` — 保存状态。

---

#### `reachy_mini.daemon.app.routers.hf_auth.get_auth_status`

获取当前认证状态。

**返回：**

`Dict` — 认证状态，包括令牌是否有效和用户信息。

---

#### `reachy_mini.daemon.app.routers.hf_auth.delete_token`

删除保存的认证令牌。

**返回：**

`Dict` — 删除状态。