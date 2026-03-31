---
description: Complete API reference for Reachy Mini daemon including core daemon classes, backend classes, daemon utilities, app models, and app routers.
title: Daemon API Reference
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
updatedAt: '2026-02-27'
url: https://wiki.seeedstudio.com/reachymini_api_daemon/
---
# Daemon

## Core Daemon Classes

### `reachy_mini.daemon.daemon.Daemon`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L37)**

Daemon for simulated or real Reachy Mini robot.

Runs the server with the appropriate backend (Mujoco for simulation or RobotBackend for real hardware).

### Methods

#### `restart`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L366)**

Restart the Reachy Mini daemon.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `sim` | `bool` | If True, run in simulation mode using Mujoco. Defaults to None (uses the previous value). |
| `mockup_sim` | `bool` | If True, run in lightweight simulation mode (no MuJoCo). Defaults to None (uses the previous value). |
| `serialport` | `str` | Serial port for real motors. Defaults to None (uses the previous value). |
| `scene` | `str` | Name of the scene to load in simulation mode ("empty" or "minimal"). Defaults to None (uses the previous value). |
| `headless` | `bool` | If True, run Mujoco in headless mode (no GUI). Defaults to None (uses the previous value). |
| `use_audio` | `bool` | If True, enable audio. Defaults to None (uses the previous value). |
| `localhost_only` | `bool` | If True, restrict the server to localhost only clients. Defaults to None (uses the previous value). |
| `wake_up_on_start` | `bool` | If True, wake up Reachy Mini on start. Defaults to None (don't wake up). |
| `goto_sleep_on_stop` | `bool` | If True, put Reachy Mini to sleep on stop. Defaults to None (don't go to sleep). |

**Returns:**

| Type | Description |
|------|-------------|
| `DaemonState` | The current state of the daemon after attempting to restart it. |

---

#### `run4ever`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L462)**

Run the Reachy Mini daemon indefinitely.

First, it starts the daemon, then it keeps checking the status and allows for graceful shutdown on user interrupt (Ctrl+C).

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `sim` | `bool` | If True, run in simulation mode using Mujoco. Defaults to False. |
| `mockup_sim` | `bool` | If True, run in lightweight simulation mode (no MuJoCo). Defaults to False. |
| `serialport` | `str` | Serial port for real motors. Defaults to "auto", which will try to find the port automatically. |
| `scene` | `str` | Name of the scene to load in simulation mode ("empty" or "minimal"). Defaults to "empty". |
| `localhost_only` | `bool` | If True, restrict the server to localhost only clients. Defaults to True. |
| `wake_up_on_start` | `bool` | If True, wake up Reachy Mini on start. Defaults to True. |
| `goto_sleep_on_stop` | `bool` | If True, put Reachy Mini to sleep on stop. Defaults to True. |
| `check_collision` | `bool` | If True, enable collision checking. Defaults to False. |
| `kinematics_engine` | `str` | Kinematics engine to use. Defaults to "AnalyticalKinematics". |
| `headless` | `bool` | If True, run Mujoco in headless mode (no GUI). Defaults to False. |
| `use_audio` | `bool` | If True, enable audio. Defaults to True. |

---

#### `start`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L144)**

Start the Reachy Mini daemon.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `sim` | `bool` | If True, run in simulation mode using Mujoco. Defaults to False. |
| `mockup_sim` | `bool` | If True, run in lightweight simulation mode (no MuJoCo). Defaults to False. |
| `serialport` | `str` | Serial port for real motors. Defaults to "auto", which will try to find the port automatically. |
| `scene` | `str` | Name of the scene to load in simulation mode ("empty" or "minimal"). Defaults to "empty". |
| `localhost_only` | `bool` | If True, restrict the server to localhost only clients. Defaults to True. |
| `wake_up_on_start` | `bool` | If True, wake up Reachy Mini on start. Defaults to True. |
| `check_collision` | `bool` | If True, enable collision checking. Defaults to False. |
| `kinematics_engine` | `str` | Kinematics engine to use. Defaults to "AnalyticalKinematics". |
| `headless` | `bool` | If True, run Mujoco in headless mode (no GUI). Defaults to False. |
| `use_audio` | `bool` | If True, enable audio. Defaults to True. |
| `hardware_config_filepath` | `str \| None` | Path to the hardware configuration YAML file. Defaults to None. |

**Returns:**

| Type | Description |
|------|-------------|
| `DaemonState` | The current state of the daemon after attempting to start it. |

---

#### `status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L436)**

Get the current status of the Reachy Mini daemon.

---

#### `stop`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L287)**

Stop the Reachy Mini daemon.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `goto_sleep_on_stop` | `bool` | If True, put Reachy Mini to sleep on stop. Defaults to True. |

**Returns:**

| Type | Description |
|------|-------------|
| `DaemonState` | The current state of the daemon after attempting to stop it. |

---

### `reachy_mini.daemon.daemon.DaemonState`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L591)**

Enum representing the state of the Reachy Mini daemon.

---

### `reachy_mini.daemon.daemon.DaemonStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/daemon.py#L603)**

Dataclass representing the status of the Reachy Mini daemon.

---

## Backend Classes

### Abstract Backend

#### `reachy_mini.daemon.backend.abstract.MotorControlMode`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/abstract.py#L43)**

Enum for motor control modes.

---

### Robot Backend

#### `reachy_mini.daemon.backend.robot.RobotBackend`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L28)**

Real robot backend for Reachy Mini.

### Methods

#### `close`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L316)**

Close the motor controller connection and release resources.

---

#### `compensate_head_gravity`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L513)**

Calculate the currents necessary to compensate for gravity.

---

#### `disable_motors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L336)**

Disable the motors by turning the torque off.

---

#### `enable_motors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L329)**

Enable the motors by turning the torque on.

---

#### `get_all_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L438)**

Get the current joint positions of the robot.

**Returns:**

| Type | Description |
|------|-------------|
| `tuple` | A tuple containing two lists - the first list is for the head joint positions, and the second list is for the antenna joint positions. |

---

#### `get_imu_data`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L477)**

Get current IMU data (accelerometer, gyroscope, quaternion, temperature).

**Returns:**

| Type | Description |
|------|-------------|
| `dict \| None` | Dict with 'accelerometer', 'gyroscope', 'quaternion', and 'temperature' keys, or None if IMU is not available. |

---

#### `get_present_antenna_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L466)**

Get the current joint positions of the antennas.

**Returns:**

| Type | Description |
|------|-------------|
| `list` | A list of joint positions for the antennas. |

---

#### `get_present_head_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L455)**

Get the current joint positions of the head.

**Returns:**

| Type | Description |
|------|-------------|
| `list` | A list of joint positions for the head, including the body rotation. |

---

#### `get_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L323)**

Get the current status of the robot backend.

---

#### `read_hardware_errors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L614)**

Read hardware errors from the motor controller.

---

#### `run`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L136)**

Run the control loop for the robot backend.

This method continuously updates the motor controller at a specified frequency. It reads the joint positions, updates the motor controller, and publishes the joint positions. It also handles errors and retries if the motor controller is not responding.

---

#### `set_antennas_operation_mode`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L398)**

Change the operation mode of the antennas motors.

:::warning

This method does not work well with the current feetech motors, as they do not support torque control. So the method disables the antennas when in torque control mode.

:::

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `mode` | `int` | The operation mode for the antennas motors (0: torque control, 3: position control, 5: current-based position control). |

---

#### `set_head_operation_mode`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L343)**

Change the operation mode of the head motors.

The operation modes can be:
- 0: torque control
- 3: position control
- 5: current-based position control

:::warning

This method does not work well with the current feetech motors (body rotation), as they do not support torque control. So the method disables the antennas when in torque control mode. The dynamixel motors used for the head do support torque control, so this method works as expected.

:::

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `mode` | `int` | The operation mode for the head motors. |

---

#### `set_motor_torque_ids`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L579)**

Set the torque state for specific motor names.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ids` | `list[int]` | List of motor IDs to set the torque state for. |
| `on` | `bool` | True to enable torque, False to disable. |

---

### `reachy_mini.daemon.backend.robot.RobotBackendStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/robot/backend.py#L678)**

Status of the Robot Backend.

---

### MuJoCo Backend

#### `reachy_mini.daemon.backend.mujoco.MujocoMockupBackend`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mujoco/__init__.py#L15)**

Mockup class to avoid import errors when MuJoCo is not installed.

---

#### `reachy_mini.daemon.backend.mujoco.MujocoMockupBackendStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mujoco/__init__.py#L28)**

Mockup class to avoid import errors when MuJoCo is not installed.

---

### Mockup Simulation Backend

#### `reachy_mini.daemon.backend.mockup_sim.MockupSimBackend`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L21)**

Lightweight simulated Reachy Mini without MuJoCo.

This backend provides a simple simulation where target positions are applied immediately without physics simulation. Apps access webcam/microphone directly (not via UDP streaming).

### Methods

#### `get_present_antenna_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L149)**

Get the current joint positions of the antennas.

---

#### `get_present_head_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L143)**

Get the current joint positions of the head.

---

#### `get_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L139)**

Get the status of the backend.

---

#### `run`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L68)**

Run the simulation loop.

In mockup-sim mode, target positions are applied immediately.

---

#### `set_motor_torque_ids`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L163)**

Set the motor torque state for specific motor names.

:::note

No-op in mockup-sim mode.

:::

---

### `reachy_mini.daemon.backend.mockup_sim.MockupSimBackendStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/backend/mockup_sim/backend.py#L172)**

Status of the MockupSim backend.

---

## Daemon Utilities

### `reachy_mini.daemon.utils.convert_enum_to_dict`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/utils.py#L164)**

Convert a dataclass containing Enums to a dictionary with enum values.

---

### `reachy_mini.daemon.utils.find_serial_port`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/utils.py#L101)**

Find the serial port for Reachy Mini based on VID and PID or the Raspberry Pi UART for the wireless version.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `wireless_version` | `bool` | Whether to look for the wireless version using the Raspberry Pi UART. |
| `vid` | `str` | Vendor ID of the device. (eg. "1a86"). |
| `pid` | `str` | Product ID of the device. (eg. "55d3"). |
| `pi_uart` | `str` | Path to the Raspberry Pi UART device. (eg. "/dev/ttyAMA3"). |

---

### `reachy_mini.daemon.utils.get_ip_address`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/utils.py#L129)**

Get the IP address of a specific network interface (Linux and Windows).

---

## App

### Models

#### `reachy_mini.daemon.app.models.Matrix4x4Pose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/models.py#L14)**

Represent a 3D pose by its 4x4 transformation matrix (translation is expressed in meters).

---

#### `reachy_mini.daemon.app.models.XYZRPYPose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/models.py#L68)**

Represent a 3D pose using position (x, y, z) in meters and orientation (roll, pitch, yaw) angles in radians.

---

#### `reachy_mini.daemon.app.models.FullBodyTarget`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/models.py#L116)**

Represent the full body including the head pose and the joints for antennas.

---

#### `reachy_mini.daemon.app.models.DoAInfo`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/models.py#L144)**

Direction of Arrival info from the microphone array.

---

#### `reachy_mini.daemon.app.models.FullState`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/models.py#L151)**

Represent the full state of the robot including all joint positions and poses.

---

### Dependencies

#### `reachy_mini.daemon.app.dependencies.get_daemon`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/dependencies.py#L10)**

Get the daemon as request dependency.

---

#### `reachy_mini.daemon.app.dependencies.get_backend`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/dependencies.py#L16)**

Get the backend as request dependency.

---

#### `reachy_mini.daemon.app.dependencies.get_app_manager`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/dependencies.py#L27)**

Get the app manager as request dependency.

---

#### `reachy_mini.daemon.app.dependencies.ws_get_backend`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/dependencies.py#L33)**

Get the backend as websocket dependency.

---

### Jobs

#### `reachy_mini.daemon.app.bg_job_register.JobStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L15)**

Enum for job status.

---

#### `reachy_mini.daemon.app.bg_job_register.JobInfo`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L24)**

Pydantic model for install job status.

---

#### `reachy_mini.daemon.app.bg_job_register.JobHandler`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L33)**

Handler for background jobs.

---

#### `reachy_mini.daemon.app.bg_job_register.run_command`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L44)**

Start a background job, with a custom logger and return its job_id.

---

#### `reachy_mini.daemon.app.bg_job_register.get_info`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L93)**

Get the info of a job by its ID.

---

#### `reachy_mini.daemon.app.bg_job_register.ws_poll_info`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/bg_job_register.py#L103)**

WebSocket endpoint to stream job logs in real time.

---

### Main Application

#### `reachy_mini.daemon.app.main.Args`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/main.py#L54)**

Arguments for configuring the Reachy Mini daemon.

---

#### `reachy_mini.daemon.app.main.create_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/main.py#L91)**

Create and configure the FastAPI application.

---

#### `reachy_mini.daemon.app.main.run_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/main.py#L264)**

Run the FastAPI app with Uvicorn.

---

#### `reachy_mini.daemon.app.main`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/main.py#L383)**

Run the FastAPI app with Uvicorn.

---

## App Routers

### Daemon Router

#### `reachy_mini.daemon.app.routers.daemon.start_daemon`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/daemon.py#L19)**

Start the daemon.

---

#### `reachy_mini.daemon.app.routers.daemon.stop_daemon`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/daemon.py#L48)**

Stop the daemon, optionally putting the robot to sleep.

---

#### `reachy_mini.daemon.app.routers.daemon.restart_daemon`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/daemon.py#L64)**

Restart the daemon.

---

#### `reachy_mini.daemon.app.routers.daemon.get_daemon_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/daemon.py#L80)**

Get the current status of the daemon.

---

### State Router

#### `reachy_mini.daemon.app.routers.state.get_head_pose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L21)**

Get the present head pose.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `use_pose_matrix` | `bool` | Whether to use the pose matrix representation (4x4 flattened) or the translation + Euler angles representation (x, y, z, roll, pitch, yaw). |
| `backend` | `Backend` | The backend instance. |

**Returns:**

| Type | Description |
|------|-------------|
| `AnyPose` | The present head pose. |

---

#### `reachy_mini.daemon.app.routers.state.get_body_yaw`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L39)**

Get the present body yaw (in radians).

---

#### `reachy_mini.daemon.app.routers.state.get_antenna_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L47)**

Get the present antenna joint positions (in radians) - (left, right).

---

#### `reachy_mini.daemon.app.routers.state.get_doa`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L57)**

Get the Direction of Arrival from the microphone array.

Returns the angle in radians (0=left, π/2=front, π=right) and speech detection status. Returns None if the audio device is not available.

---

#### `reachy_mini.daemon.app.routers.state.get_full_state`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L74)**

Get the full robot state, with optional fields.

---

#### `reachy_mini.daemon.app.routers.state.ws_full_state`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/state.py#L130)**

WebSocket endpoint to stream the full state of the robot.

---

### Motors Router

#### `reachy_mini.daemon.app.routers.motors.get_motor_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/motors.py#L27)**

Get the current status of the motors.

---

#### `reachy_mini.daemon.app.routers.motors.set_motor_mode`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/motors.py#L33)**

Set the motor control mode.

---

### Move Router

#### `reachy_mini.daemon.app.routers.move.get_running_moves`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L131)**

Get a list of currently running move tasks.

---

#### `reachy_mini.daemon.app.routers.move.goto`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L137)**

Request a movement to a specific target.

---

#### `reachy_mini.daemon.app.routers.move.play_wake_up`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L152)**

Request the robot to wake up.

---

#### `reachy_mini.daemon.app.routers.move.play_goto_sleep`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L158)**

Request the robot to go to sleep.

---

#### `reachy_mini.daemon.app.routers.move.list_recorded_move_dataset`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L164)**

List available recorded moves in a dataset.

---

#### `reachy_mini.daemon.app.routers.move.play_recorded_move_dataset`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L177)**

Request the robot to play a predefined recorded move from a dataset.

---

#### `reachy_mini.daemon.app.routers.move.stop_move`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L195)**

Stop a running move task.

---

#### `reachy_mini.daemon.app.routers.move.set_target`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L216)**

POST route to set a single FullBodyTarget.

---

#### `reachy_mini.daemon.app.routers.move.ws_move_updates`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/move.py#L201)**

WebSocket route to stream move updates.

---

### Apps Router

#### `reachy_mini.daemon.app.routers.apps.list_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L46)**

List available apps (including not installed).

---

#### `reachy_mini.daemon.app.routers.apps.list_all_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L55)**

List all available apps (including not installed).

---

#### `reachy_mini.daemon.app.routers.apps.install_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L63)**

Install a new app by its info (background, returns job_id).

---

#### `reachy_mini.daemon.app.routers.apps.remove_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L78)**

Remove an installed app by its name (background, returns job_id).

---

#### `reachy_mini.daemon.app.routers.apps.job_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L91)**

Get status/logs for a job.

---

#### `reachy_mini.daemon.app.routers.apps.ws_apps_manager`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L101)**

WebSocket route to stream live job status/logs for a job, sending updates as soon as new logs are available.

---

#### `reachy_mini.daemon.app.routers.apps.start_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L109)**

Start an app by its name.

---

#### `reachy_mini.daemon.app.routers.apps.restart_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L121)**

Restart the currently running app.

---

#### `reachy_mini.daemon.app.routers.apps.stop_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L132)**

Stop the currently running app.

---

#### `reachy_mini.daemon.app.routers.apps.current_app_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L143)**

Get the status of the currently running app, if any.

---

#### `reachy_mini.daemon.app.routers.apps.install_private_space`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/apps.py#L157)**

Install a private HuggingFace space.

Requires HF token to be stored via /api/hf-auth/save-token first.

---

### Update Router

#### `reachy_mini.daemon.app.routers.update.available`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/update.py#L32)**

Check if an update is available for Reachy Mini Wireless.

---

#### `reachy_mini.daemon.app.routers.update.start_update`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/update.py#L58)**

Start the update process for Reachy Mini Wireless version.

---

#### `reachy_mini.daemon.app.routers.update.get_update_info`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/update.py#L117)**

Get the info of an update job.

---

#### `reachy_mini.daemon.app.routers.update.websocket_logs`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/update.py#L126)**

WebSocket endpoint to stream update logs in real time.

---

### Cache Router

#### `reachy_mini.daemon.app.routers.cache.clear_huggingface_cache`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/cache.py#L13)**

Clear HuggingFace cache directory.

---

#### `reachy_mini.daemon.app.routers.cache.reset_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/cache.py#L32)**

Remove applications virtual environment directory.

---

### Kinematics Router

#### `reachy_mini.daemon.app.routers.kinematics.get_kinematics_info`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/kinematics.py#L29)**

Get the current information of the kinematics.

---

#### `reachy_mini.daemon.app.routers.kinematics.get_urdf`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/kinematics.py#L42)**

Get the URDF representation of the robot.

---

#### `reachy_mini.daemon.app.routers.kinematics.get_stl_file`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/kinematics.py#L48)**

Get the path to an STL asset file.

---

### Volume Router

#### `reachy_mini.daemon.app.routers.volume.get_volume`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/volume.py#L79)**

Get the current output volume level.

---

#### `reachy_mini.daemon.app.routers.volume.set_volume`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/volume.py#L86)**

Set the output volume level and play a test sound.

---

#### `reachy_mini.daemon.app.routers.volume.play_test_sound`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/volume.py#L107)**

Play a test sound.

---

#### `reachy_mini.daemon.app.routers.volume.get_microphone_volume`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/volume.py#L139)**

Get the current microphone input volume level.

---

#### `reachy_mini.daemon.app.routers.volume.set_microphone_volume`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/volume.py#L146)**

Set the microphone input volume level.

---

### Logs Router

#### `reachy_mini.daemon.app.routers.logs.websocket_daemon_logs`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/logs.py#L15)**

WebSocket endpoint to stream journalctl logs for reachy-mini-daemon service in real time.

---

### HF Auth Router

#### `reachy_mini.daemon.app.routers.hf_auth.save_token`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/hf_auth.py#L33)**

Save HuggingFace token after validation.

---

#### `reachy_mini.daemon.app.routers.hf_auth.get_auth_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/hf_auth.py#L49)**

Check if user is authenticated with HuggingFace.

---

#### `reachy_mini.daemon.app.routers.hf_auth.delete_token`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/daemon/app/routers/hf_auth.py#L79)**

Delete stored HuggingFace token.
