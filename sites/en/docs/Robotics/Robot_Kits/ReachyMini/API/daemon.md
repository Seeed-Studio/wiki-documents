---
description: Daemon API reference for Reachy Mini covering core daemon classes, robot app lock, backend classes, and all router endpoints.
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
url: https://wiki.seeedstudio.com/reachymini_api_daemon/
---

# Daemon

## Core Daemon Classes

### `reachy_mini.daemon.daemon.Daemon`

Main daemon class for controlling the Reachy Mini robot.

### Methods

#### `start`

Start the daemon and all its components.

---

#### `stop`

Stop the daemon and all its components.

---

#### `restart`

Restart the daemon.

---

#### `get_status`

Get the current status of the daemon.

**Returns:**

`DaemonStatus` — Current status of the daemon.

---

#### `is_running`

Check if the daemon is running.

**Returns:**

`bool` — True if the daemon is running.

---

### `reachy_mini.daemon.daemon.DaemonState`

Enum representing the state of the daemon.

### Values

| Value | Description |
|-------|-------------|
| `STOPPED` | Daemon is not running. |
| `STARTING` | Daemon is starting up. |
| `RUNNING` | Daemon is running normally. |
| `STOPPING` | Daemon is shutting down. |
| `ERROR` | Daemon encountered an error. |

---

### `reachy_mini.daemon.daemon.DaemonStatus`

Status object containing daemon state and information.

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `state` | `DaemonState` | Current state of the daemon. |
| `uptime` | `float` | Time since daemon started in seconds. |
| `version` | `str` | Daemon version string. |
| `robot_connected` | `bool` | Whether a robot is connected. |

---

## Robot App Lock

The robot *app lock* is the daemon's single source of truth for which
managed app currently holds the robot. It serializes the two managed
entry points — local Python apps launched by :class:`AppManager` and
remote WebRTC clients routed through the central signaling relay.

It does **not** gate every code path that can drive the robot: SDK
clients talking to the daemon directly over LAN/WebSocket bypass it.
The name uses "app" deliberately to reflect that narrower scope.

### Concurrency model

Two managed entry points can open a session with the robot:

1. **Local path** — a Python app launched via
   ``POST /api/apps/start``. Runs as a subprocess of the daemon,
   talks to the backend directly.
2. **Remote path** — a browser client authenticated through the
   HuggingFace central signaling server, routed to the robot over
   WebRTC. Handled by ``CentralSignalingRelay`` in its own thread.

Without coordination, both paths can grab the robot at the same time
and fight over motor commands, camera, and audio. :class:`RobotAppLock`
prevents that with three mutually exclusive states:

- ``free`` — no managed app holds the slot.
- ``local_app(name)`` — a Python app is running.
- ``remote_session(name)`` — a remote WebRTC client is connected.

**Acquire rules:**

- The local path uses :meth:`RobotAppLock.acquire_local_evicting_remote`.
  If a remote session is active, the lock is transitioned atomically
  to ``local_app`` and the relay is asked to send ``endSession`` to
  the remote peer and to local GStreamer so the existing WebRTC
  connection tears down cleanly. If another Python app already holds
  the lock, the acquire raises ``RuntimeError``.
- The remote path uses :meth:`RobotAppLock.try_acquire_remote`. This
  fails fast (returns ``False``) whenever the lock is not ``free`` —
  incoming remote sessions are refused with
  ``{"type": "endSession", "reason": "robot_busy_local_app"}``.

**Release rules:**

- :meth:`RobotAppLock.release_local` is called from the subprocess
  monitor's ``finally`` block, so clean exits, crashes, ``SIGKILL``,
  OOM and task cancellation all release the lock.
- :meth:`RobotAppLock.release_remote` is called from every
  ``endSession`` handler (both directions), from
  ``_close_connections`` on disconnect/reconnect, and from the relay's
  ``stop()``. All release calls are idempotent — they no-op if the
  lock is not in the corresponding state.

**Cross-thread considerations:** the lock state is guarded by a
``threading.Lock``. The eviction callback is registered by the relay
and invoked by AppManager from the main asyncio loop, but dispatches
the actual session tear-down onto the relay's own event loop via
``asyncio.run_coroutine_threadsafe``. AppManager awaits the tear-down
before spawning the Python subprocess, so the remote peer has
released its media handles before the local app opens them.

### API reference

### `reachy_mini.daemon.robot_app_lock.RobotAppLock`

Robot application lock for managing access to the robot.

### Methods

#### `acquire_local_evicting_remote`

Acquire the lock for a local Python app, evicting any remote session.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `app_name` | `str` | Name of the app acquiring the lock. |

**Returns:**

`bool` — True if the lock was acquired successfully.

---

#### `try_acquire_remote`

Try to acquire the lock for a remote WebRTC session.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `session_name` | `str` | Name of the session acquiring the lock. |

**Returns:**

`bool` — True if the lock was acquired successfully.

---

#### `release_local`

Release the lock from a local Python app.

---

#### `release_remote`

Release the lock from a remote session.

---

#### `get_status`

Get the current status of the robot app lock.

**Returns:**

`RobotAppLockStatus` — Current status of the lock.

---

#### `is_free`

Check if the lock is free.

**Returns:**

`bool` — True if no app holds the lock.

---

#### `is_local_app`

Check if a local app currently holds the lock.

**Returns:**

`bool` — True if a local app holds the lock.

---

#### `is_remote_session`

Check if a remote session currently holds the lock.

**Returns:**

`bool` — True if a remote session holds the lock.

---

### `reachy_mini.daemon.robot_app_lock.RobotAppLockState`

Enum representing the state of the robot app lock.

### Values

| Value | Description |
|-------|-------------|
| `free` | No managed app holds the slot. |
| `local_app` | A Python app is running. |
| `remote_session` | A remote WebRTC client is connected. |

---

### `reachy_mini.daemon.robot_app_lock.RobotAppLockStatus`

Status object containing robot app lock state and information.

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `state` | `RobotAppLockState` | Current state of the lock. |
| `holder_name` | `str \| None` | Name of the current holder (if any). |
| `holder_type` | `str \| None` | Type of holder ("local_app" or "remote_session"). |

---

## Backend Classes

### Abstract Backend

### `reachy_mini.daemon.backend.abstract.MotorControlMode`

Enum representing the motor control mode.

### Values

| Value | Description |
|-------|-------------|
| `enabled` | Motors are fully enabled and responding to commands. |
| `disabled` | Motors are disabled and not responding to commands. |
| `gravity_compensation` | Motors are in gravity compensation mode. |

---

### Robot Backend

### `reachy_mini.daemon.backend.robot.RobotBackend`

Backend for controlling the actual physical robot.

### Methods

#### `connect`

Connect to the robot hardware.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `port` | `str` | Serial port to connect to. |

---

#### `disconnect`

Disconnect from the robot hardware.

---

#### `get_motor_status`

Get the status of all motors.

**Returns:**

`Dict` — Dictionary of motor statuses.

---

#### `set_motor_mode`

Set the control mode for motors.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `mode` | `MotorControlMode` | The control mode to set. |

---

#### `send_position_command`

Send position commands to motors.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `positions` | `Dict` | Dictionary of motor positions. |

---

#### `get_joint_positions`

Get current joint positions from the robot.

**Returns:**

`Dict` — Dictionary of current joint positions.

---

### `reachy_mini.daemon.backend.robot.RobotBackendStatus`

Status object containing robot backend state and information.

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `connected` | `bool` | Whether the backend is connected to the robot. |
| `motor_mode` | `MotorControlMode` | Current motor control mode. |
| `last_update` | `float` | Timestamp of last update. |

---

### MuJoCo Backend

### `reachy_mini.daemon.backend.mujoco.MujocoBackend`

Backend for MuJoCo simulation of the robot.

### Methods

#### `load_model`

Load the MuJoCo robot model.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `model_path` | `str` | Path to the MuJoCo model file. |

---

#### `step`

Step the simulation forward.

---

#### `get_state`

Get the current simulation state.

**Returns:**

`Dict` — Current state of the simulation.

---

#### `set_control`

Set control targets for the simulation.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `targets` | `Dict` | Dictionary of control targets. |

---

#### `reset`

Reset the simulation to initial state.

---

### `reachy_mini.daemon.backend.mujoco.MujocoBackendStatus`

Status object containing MuJoCo backend state and information.

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `model_loaded` | `bool` | Whether a model is loaded. |
| `simulation_time` | `float` | Current simulation time. |
| `real_time_factor` | `float` | Real-time factor of the simulation. |

---

### Mockup Simulation Backend

### `reachy_mini.daemon.backend.mockup_sim.MockupSimBackend`

Backend for mockup simulation (no actual physics).

### Methods

#### `start`

Start the mockup simulation.

---

#### `stop`

Stop the mockup simulation.

---

#### `get_state`

Get the current mockup state.

**Returns:**

`Dict` — Current state of the mockup.

---

#### `set_positions`

Set target positions for mockup.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `positions` | `Dict` | Dictionary of target positions. |

---

### `reachy_mini.daemon.backend.mockup_sim.MockupSimBackendStatus`

Status object containing mockup simulation state and information.

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `running` | `bool` | Whether the mockup is running. |
| `positions` | `Dict` | Current target positions. |

---

## Daemon Utilities

### `reachy_mini.daemon.utils.find_serial_port`

Find the serial port connected to the Reachy Mini robot.

**Returns:**

`str` — Path to the serial port, or None if not found.

---

### `reachy_mini.daemon.utils.get_ip_address`

Get the IP address of the current machine.

**Returns:**

`str` — IP address string.

---

## App

### Models

### `reachy_mini.daemon.app.models.Matrix4x4Pose`

4x4 matrix pose representation for robot positioning.

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `matrix` | `np.ndarray` | 4x4 transformation matrix. |
| `translation` | `np.ndarray` | Translation vector (x, y, z). |
| `rotation` | `np.ndarray` | 3x3 rotation matrix. |

---

### `reachy_mini.daemon.app.models.XYZRPYPose`

Pose representation using XYZ+RPY (position and Euler angles).

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `x` | `float` | X position in meters. |
| `y` | `float` | Y position in meters. |
| `z` | `float` | Z position in meters. |
| `roll` | `float` | Roll angle in radians. |
| `pitch` | `float` | Pitch angle in radians. |
| `yaw` | `float` | Yaw angle in radians. |

---

### `reachy_mini.daemon.app.models.FullBodyTarget`

Full body target pose including head and antennas.

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `head` | `Matrix4x4Pose \| None` | Target head pose. |
| `antennas` | `List[float] \| None` | Target antenna positions. |
| `body_yaw` | `float \| None` | Target body yaw angle. |

---

### `reachy_mini.daemon.app.models.DoAInfo`

Direction of Arrival information for audio.

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `doa_angle` | `float` | Direction of arrival angle in degrees. |
| `energy` | `float` | Audio energy level. |

---

### `reachy_mini.daemon.app.models.FullState`

Complete state of the robot including all sensors and motors.

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `joint_positions` | `Dict` | Current joint positions. |
| `head_pose` | `Matrix4x4Pose` | Current head pose. |
| `antennas` | `List[float]` | Current antenna positions. |
| `body_yaw` | `float` | Current body yaw angle. |
| `motor_mode` | `MotorControlMode` | Current motor control mode. |

---

### Dependencies

### `reachy_mini.daemon.app.dependencies.get_daemon`

Dependency provider for the Daemon instance.

**Returns:**

`Daemon` — The singleton Daemon instance.

---

### `reachy_mini.daemon.app.dependencies.get_backend`

Dependency provider for the current backend.

**Returns:**

`RobotBackend \| MujocoBackend \| MockupSimBackend` — The current backend instance.

---

### `reachy_mini.daemon.app.dependencies.get_app_manager`

Dependency provider for the AppManager instance.

**Returns:**

`AppManager` — The AppManager instance.

---

### `reachy_mini.daemon.app.dependencies.ws_get_backend`

WebSocket dependency provider for the backend.

**Returns:**

`RobotBackend \| MujocoBackend \| MockupSimBackend` — The current backend instance.

---

### Jobs

### `reachy_mini.daemon.app.bg_job_register.JobStatus`

Enum representing the status of a background job.

### Values

| Value | Description |
|-------|-------------|
| `PENDING` | Job is waiting to start. |
| `RUNNING` | Job is currently executing. |
| `COMPLETED` | Job completed successfully. |
| `FAILED` | Job failed with an error. |
| `CANCELLED` | Job was cancelled. |

---

### `reachy_mini.daemon.app.bg_job_register.JobInfo`

Information about a background job.

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `id` | `str` | Unique job identifier. |
| `name` | `str` | Name of the job. |
| `status` | `JobStatus` | Current job status. |
| `created_at` | `float` | Timestamp when job was created. |
| `started_at` | `float \| None` | Timestamp when job started. |
| `completed_at` | `float \| None` | Timestamp when job completed. |
| `error` | `str \| None` | Error message if job failed. |

---

### `reachy_mini.daemon.app.bg_job_register.JobHandler`

Handler for managing background job execution.

### Methods

#### `start`

Start the job handler.

---

#### `stop`

Stop the job handler.

---

#### `submit`

Submit a new job for execution.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `job_id` | `str` | Unique job identifier. |
| `func` | `Callable` | Function to execute. |
| `args` | `List` | Positional arguments for the function. |
| `kwargs` | `Dict` | Keyword arguments for the function. |

---

#### `cancel`

Cancel a running job.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `job_id` | `str` | Unique job identifier. |

---

#### `get_status`

Get the status of a job.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `job_id` | `str` | Unique job identifier. |

**Returns:**

`JobInfo` — Current status of the job.

---

### `reachy_mini.daemon.app.bg_job_register.run_command`

Run a shell command as a background job.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `command` | `str` | Command to execute. |
| `job_id` | `str` | Unique job identifier. |

**Returns:**

`JobInfo` — Information about the started job.

---

### `reachy_mini.daemon.app.bg_job_register.get_info`

Get information about a specific job.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `job_id` | `str` | Unique job identifier. |

**Returns:**

`JobInfo \| None` — Job information if found.

---

### `reachy_mini.daemon.app.bg_job_register.ws_poll_info`

WebSocket endpoint for polling job information.

---

### Main Application

### `reachy_mini.daemon.app.main.Args`

Command line arguments for the daemon application.

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `host` | `str` | Host to bind to (default: "0.0.0.0"). |
| `port` | `int` | Port to bind to (default: 8000). |
| `backend` | `str` | Backend type to use ("robot", "mujoco", "mockup"). |
| `debug` | `bool` | Enable debug mode. |

---

### `reachy_mini.daemon.app.main.create_app`

Create the FastAPI application.

**Returns:**

`FastAPI` — The configured FastAPI application.

---

### `reachy_mini.daemon.app.main.run_app`

Run the FastAPI application.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `app` | `FastAPI` | The FastAPI application to run. |
| `host` | `str` | Host to bind to. |
| `port` | `int` | Port to bind to. |

---

### `reachy_mini.daemon.app.main.main`

Main entry point for the daemon application.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `args` | `Args` | Command line arguments. |

---

## App Routers

### Daemon Router

#### `reachy_mini.daemon.app.routers.daemon.start_daemon`

Start the daemon service.

**Returns:**

`Dict` — Status message indicating daemon started.

---

#### `reachy_mini.daemon.app.routers.daemon.stop_daemon`

Stop the daemon service.

**Returns:**

`Dict` — Status message indicating daemon stopped.

---

#### `reachy_mini.daemon.app.routers.daemon.restart_daemon`

Restart the daemon service.

**Returns:**

`Dict` — Status message indicating daemon restarted.

---

#### `reachy_mini.daemon.app.routers.daemon.get_daemon_status`

Get the current status of the daemon.

**Returns:**

`DaemonStatus` — Current daemon status.

---

#### `reachy_mini.daemon.app.routers.daemon.get_robot_app_lock_status`

Get the current status of the robot app lock.

**Returns:**

`RobotAppLockStatus` — Current robot app lock status.

---

### State Router

#### `reachy_mini.daemon.app.routers.state.get_head_pose`

Get the current head pose.

**Returns:**

`Matrix4x4Pose` — Current head pose matrix.

---

#### `reachy_mini.daemon.app.routers.state.get_body_yaw`

Get the current body yaw angle.

**Returns:**

`float` — Current body yaw in radians.

---

#### `reachy_mini.daemon.app.routers.state.get_antenna_joint_positions`

Get the current antenna joint positions.

**Returns:**

`List[float]` — Current antenna positions in radians.

---

#### `reachy_mini.daemon.app.routers.state.get_doa`

Get the current direction of arrival information.

**Returns:**

`DoAInfo` — Current DOA information.

---

#### `reachy_mini.daemon.app.routers.state.get_full_state`

Get the complete robot state.

**Returns:**

`FullState` — Complete current robot state.

---

#### `reachy_mini.daemon.app.routers.state.ws_full_state`

WebSocket endpoint for streaming full robot state updates.

---

### Motors Router

#### `reachy_mini.daemon.app.routers.motors.get_motor_status`

Get the status of all motors.

**Returns:**

`Dict` — Dictionary of motor statuses including position, velocity, and torque.

---

#### `reachy_mini.daemon.app.routers.motors.set_motor_mode`

Set the motor control mode.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `mode` | `str` | Motor control mode ("enabled", "disabled", "gravity_compensation"). |

**Returns:**

`Dict` — Status message confirming the mode change.

---

### Move Router

#### `reachy_mini.daemon.app.routers.move.get_running_moves`

Get list of currently running moves.

**Returns:**

`List[Dict]` — List of running moves with their IDs and progress.

---

#### `reachy_mini.daemon.app.routers.move.goto`

Send a goto command to move the robot.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `head` | `List[List[float]]` | 4x4 head pose matrix (16 values). |
| `antennas` | `List[float]` | Antenna target positions [left, right] in radians. |
| `body_yaw` | `float` | Body yaw target in radians. |
| `duration` | `float` | Movement duration in seconds. |
| `method` | `str` | Interpolation method ("linear", "minjerk", "ease_in_out", "cartoon"). |

**Returns:**

`Dict` — Move ID and status.

---

#### `reachy_mini.daemon.app.routers.move.play_wake_up`

Play the wake up animation to bring robot to ready state.

**Returns:**

`Dict` — Status message confirming wake up started.

---

#### `reachy_mini.daemon.app.routers.move.play_goto_sleep`

Play the goto sleep animation to put robot in sleep pose.

**Returns:**

`Dict` — Status message confirming sleep started.

---

#### `reachy_mini.daemon.app.routers.move.list_recorded_move_dataset`

List available recorded move datasets.

**Returns:**

`List[str]` — List of available dataset names.

---

#### `reachy_mini.daemon.app.routers.move.play_recorded_move_dataset`

Play a recorded move from a dataset.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `dataset` | `str` | Name of the dataset containing the move. |
| `move_name` | `str` | Name of the specific move to play. |
| `initial_goto_duration` | `float` | Duration for initial goto to starting position. |
| `sound` | `bool` | Whether to play associated sound. |

**Returns:**

`Dict` — Status message confirming move started.

---

#### `reachy_mini.daemon.app.routers.move.stop_move`

Stop the currently running move.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `move_id` | `str` | ID of the move to stop. |

**Returns:**

`Dict` — Status message confirming move stopped.

---

#### `reachy_mini.daemon.app.routers.move.set_target`

Set real-time target positions for continuous control.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `head` | `List[List[float]]` | 4x4 head pose matrix (16 values). |
| `antennas` | `List[float]` | Antenna target positions [left, right] in radians. |
| `body_yaw` | `float` | Body yaw target in radians. |

**Returns:**

`Dict` — Status message confirming target set.

---

#### `reachy_mini.daemon.app.routers.move.ws_move_updates`

WebSocket endpoint for streaming move updates.

---

### Apps Router

#### `reachy_mini.daemon.app.routers.apps.list_available_apps`

List apps available for installation.

**Returns:**

`List[Dict]` — List of available apps with metadata.

---

#### `reachy_mini.daemon.app.routers.apps.list_all_available_apps`

List all apps including installed and available.

**Returns:**

`List[Dict]` — Complete list of all apps.

---

#### `reachy_mini.daemon.app.routers.apps.install_app`

Install an app from a source.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `source` | `str` | Source URL or path of the app. |

**Returns:**

`Dict` — Installation status and job ID.

---

#### `reachy_mini.daemon.app.routers.apps.remove_app`

Remove an installed app.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `app_name` | `str` | Name of the app to remove. |

**Returns:**

`Dict` — Removal status.

---

#### `reachy_mini.daemon.app.routers.apps.job_status`

Get the status of an app operation job.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `job_id` | `str` | ID of the job to check. |

**Returns:**

`JobInfo` — Current job status.

---

#### `reachy_mini.daemon.app.routers.apps.ws_apps_manager`

WebSocket endpoint for apps manager updates.

---

#### `reachy_mini.daemon.app.routers.apps.start_app`

Start an installed app.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `app_name` | `str` | Name of the app to start. |

**Returns:**

`Dict` — Startup status and session info.

---

#### `reachy_mini.daemon.app.routers.apps.restart_app`

Restart a running app.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `app_name` | `str` | Name of the app to restart. |

**Returns:**

`Dict` — Restart status.

---

#### `reachy_mini.daemon.app.routers.apps.stop_app`

Stop a running app.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `app_name` | `str` | Name of the app to stop. |

**Returns:**

`Dict` — Stop status.

---

#### `reachy_mini.daemon.app.routers.apps.current_app_status`

Get the status of the currently running app.

**Returns:**

`Dict` — Current app status including name, state, and session info.

---

#### `reachy_mini.daemon.app.routers.apps.install_private_space`

Install a private HuggingFace Space as an app.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `space_id` | `str` | HuggingFace Space identifier. |

**Returns:**

`Dict` — Installation status and job ID.

---

### Update Router

#### `reachy_mini.daemon.app.routers.update.available`

Check for available updates.

**Returns:**

`Dict` — Available update information including version and changelog.

---

#### `reachy_mini.daemon.app.routers.update.start_update`

Start the update process.

**Returns:**

`Dict` — Update status and progress.

---

#### `reachy_mini.daemon.app.routers.update.get_update_info`

Get detailed information about the update.

**Returns:**

`Dict` — Detailed update information including download size and estimated time.

---

#### `reachy_mini.daemon.app.routers.update.websocket_logs`

WebSocket endpoint for streaming update logs.

---

### Cache Router

#### `reachy_mini.daemon.app.routers.cache.clear_huggingface_cache`

Clear the HuggingFace cache to free up disk space.

**Returns:**

`Dict` — Cache clearing status and freed space amount.

---

#### `reachy_mini.daemon.app.routers.cache.reset_apps`

Reset all apps to initial state.

**Returns:**

`Dict` — Reset status.

---

### Kinematics Router

#### `reachy_mini.daemon.app.routers.kinematics.get_kinematics_info`

Get kinematics information for the robot.

**Returns:**

`Dict` — Kinematics parameters including DH parameters and joint limits.

---

#### `reachy_mini.daemon.app.routers.kinematics.get_urdf`

Get the URDF robot description.

**Returns:**

`str` — URDF XML string describing the robot.

---

#### `reachy_mini.daemon.app.routers.kinematics.get_stl_file`

Get the STL mesh file for a robot component.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `component` | `str` | Name of the component (e.g., "head", "antenna"). |

**Returns:**

`bytes` — STL file data.

---

### Volume Router

#### `reachy_mini.daemon.app.routers.volume.get_volume`

Get the current speaker volume.

**Returns:**

`int` — Current volume level (0-100).

---

#### `reachy_mini.daemon.app.routers.volume.set_volume`

Set the speaker volume.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `volume` | `int` | Volume level (0-100). |

**Returns:**

`int` — Actual volume set (may be clamped).

---

#### `reachy_mini.daemon.app.routers.volume.play_test_sound`

Play a test sound to verify audio output.

**Returns:**

`Dict` — Status message confirming test sound played.

---

#### `reachy_mini.daemon.app.routers.volume.get_microphone_volume`

Get the current microphone volume.

**Returns:**

`int` — Current microphone volume (0-100).

---

#### `reachy_mini.daemon.app.routers.volume.set_microphone_volume`

Set the microphone volume.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `volume` | `int` | Volume level (0-100). |

**Returns:**

`int` — Actual volume set (may be clamped).

---

### Logs Router

#### `reachy_mini.daemon.app.routers.logs.websocket_daemon_logs`

WebSocket endpoint for streaming daemon logs.

---

### HF Auth Router

#### `reachy_mini.daemon.app.routers.hf_auth.save_token`

Save the HuggingFace authentication token.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `token` | `str` | HuggingFace API token. |

**Returns:**

`Dict` — Save status.

---

#### `reachy_mini.daemon.app.routers.hf_auth.get_auth_status`

Get the current authentication status.

**Returns:**

`Dict` — Authentication status including whether token is valid and user info.

---

#### `reachy_mini.daemon.app.routers.hf_auth.delete_token`

Delete the saved authentication token.

**Returns:**

`Dict` — Deletion status.