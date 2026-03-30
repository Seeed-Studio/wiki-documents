---
description: Complete API reference for Reachy Mini utils including interpolation functions, hardware configuration, rerun visualization, and core utilities.
title: Utils API Reference
slug: /reachymini_api_utils
keywords:
  - api
  - utils
  - interpolation
  - hardware config
  - visualization
  - urdf
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-02-27'
url: https://wiki.seeedstudio.com/reachymini_api_utils/
---
# Utils

## Interpolation Functions

### `reachy_mini.utils.interpolation.minimum_jerk`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L13)**

Compute the minimum jerk interpolation function from starting position to goal position.

---

### `reachy_mini.utils.interpolation.linear_pose_interpolation`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L58)**

Linearly interpolate between two poses in 6D space.

---

### `reachy_mini.utils.interpolation.time_trajectory`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L96)**

Compute the time trajectory value based on the specified interpolation method.

---

### `reachy_mini.utils.interpolation.delta_angle_between_mat_rot`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L135)**

Compute the angle (in radians) between two 3x3 rotation matrices `P` and `Q`.

This is equivalent to the angular distance in axis-angle space. It is computed via the trace of the relative rotation matrix.

**Parameters:**

| Name | Description |
|------|-------------|
| `P` | A 3x3 rotation matrix. |
| `Q` | Another 3x3 rotation matrix. |

**Returns:**

The angle in radians between the two rotations.

**References:**
- [https://math.stackexchange.com/questions/2113634/comparing-two-rotation-matrices](https://math.stackexchange.com/questions/2113634/comparing-two-rotation-matrices)
- [http://www.boris-belousov.net/2016/12/01/quat-dist/](http://www.boris-belousov.net/2016/12/01/quat-dist/)

---

### `reachy_mini.utils.interpolation.distance_between_poses`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L161)**

Compute three types of distance between two 4x4 homogeneous transformation matrices.

The result combines translation (in mm) and rotation (in degrees) using an arbitrary but emotionally satisfying equivalence: **1 degree ≈ 1 mm**.

**Parameters:**

| Name | Description |
|------|-------------|
| `pose1` | A 4x4 homogeneous transformation matrix representing the first pose. |
| `pose2` | A 4x4 homogeneous transformation matrix representing the second pose. |

**Returns:**

A tuple of:
- translation distance in meters
- angular distance in radians
- unhinged distance in magic-mm (translation in mm + rotation in degrees)

---

### `reachy_mini.utils.interpolation.compose_world_offset`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L187)**

Compose an absolute world-frame pose with a world-frame offset.

- **translations add in world:** `t_final = t_abs + t_off`
- **rotations compose in world:** `R_final = R_off @ R_abs`

This rotates the frame in place (about its own origin) by a rotation defined in world axes, and shifts it by a world translation.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `T_abs` | `(4,4) ndarray` | Absolute pose in world frame. |
| `T_off_world` | `(4,4) ndarray` | Offset transform specified in world axes (dx,dy,dz in world; dR about world axes). |
| `reorthonormalize` | `bool` | If True, SVD-orthonormalize the resulting rotation to fight drift. |

**Returns:**

| Name | Type | Description |
|------|------|-------------|
| `T_final` | `(4,4) ndarray` | Resulting pose in world frame. |

---

### `reachy_mini.utils.interpolation.InterpolationTechnique`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L87)**

Enumeration of interpolation techniques.

---

## Hardware Configuration

### `reachy_mini.utils.hardware_config.parser.MotorConfig`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/hardware_config/parser.py#L9)**

Motor configuration.

---

### `reachy_mini.utils.hardware_config.parser.SerialConfig`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/hardware_config/parser.py#L23)**

Serial configuration.

---

### `reachy_mini.utils.hardware_config.parser.ReachyMiniConfig`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/hardware_config/parser.py#L30)**

Reachy Mini configuration.

---

### `reachy_mini.utils.hardware_config.parser.parse_yaml_config`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/hardware_config/parser.py#L38)**

Parse the YAML configuration file and return a `ReachyMiniConfig`.

---

## Rerun Visualization

### `reachy_mini.utils.rerun.Rerun`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L28)**

Rerun logging for Reachy Mini.

### Methods

#### `log_camera`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L126)**

Log the camera image to Rerun.

---

#### `log_movements`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L203)**

Log the movement data to Rerun.

---

#### `set_absolute_path_to_urdf`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L97)**

Set the absolute paths in the URDF file. Rerun cannot read the `"package://"` paths.

---

#### `start`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L107)**

Start the Rerun logging thread.

---

#### `stop`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L113)**

Stop the Rerun logging thread.

---

### `reachy_mini.utils.rerun.UrdfEntityPaths`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L276)**

Helper for constructing link/joint entity paths that match the native URDF logger.

---

## Wireless Version Utilities

### `reachy_mini.utils.wireless_version.utils.call_logger_wrapper`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/utils.py#L8)**

Run a command asynchronously, streaming stdout and stderr to logger in real time.

**Parameters:**

| Name | Description |
|------|-------------|
| `command` | list or tuple of command arguments (not a string) |
| `logger` | logger object with `.info` and `.error` methods |

---

### `reachy_mini.utils.wireless_version.update.update_reachy_mini`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/update.py#L12)**

Update reachy_mini package and restart daemon.

**Parameters:**

| Name | Description |
|------|-------------|
| `logger` | Logger for streaming output. |
| `pre_release` | If True, install pre-release from PyPI (ignored if git_ref set). |
| `git_ref` | If set, install from this GitHub tag/branch instead of PyPI. |

---

### `reachy_mini.utils.wireless_version.startup_check.check_and_fix_venvs_ownership`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/startup_check.py#L17)**

For wireless units, check if files under venvs_path are owned by user pollen and fix if needed.

**Parameters:**

| Name | Description |
|------|-------------|
| `venvs_path` | Path to the virtual environments directory (default: /venvs) |
| `custom_logger` | Optional logger to use instead of the module logger |

---

### `reachy_mini.utils.wireless_version.startup_check.check_and_update_bluetooth_service`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/startup_check.py#L80)**

:::info

Check if bluetooth service needs updating and update if different.

Compares the source `bluetooth_service.py` with the installed version at `/bluetooth/bluetooth_service.py`. If they differ, copies the new version and restarts the bluetooth service. Also syncs the `commands/` folder.

:::

---

### `reachy_mini.utils.wireless_version.startup_check.check_and_update_wireless_launcher`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/startup_check.py#L190)**

:::info

Check if wireless daemon service needs updating and update if different.

Compares the source `reachy-mini-daemon.service` with the installed version. If they differ, copies the new version and reloads systemd.

:::

---

### `reachy_mini.utils.wireless_version.startup_check.check_and_sync_apps_venv_sdk`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/startup_check.py#L255)**

:::info

Check if apps_venv SDK matches daemon install source and sync if needed.

Compares both version AND install source (PyPI vs git ref). If daemon was installed from a git ref, apps_venv will be synced to the same ref.

:::

---

### `reachy_mini.utils.wireless_version.update_available.is_update_available`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/update_available.py#L36)**

Check if an update is available for the given package.

---

### `reachy_mini.utils.wireless_version.update_available.get_pypi_version`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/update_available.py#L47)**

Get the latest version of a package from PyPI.

---

### `reachy_mini.utils.wireless_version.update_available.get_local_version`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/update_available.py#L65)**

Get the currently installed version of a package.

---

## Core Utilities

### `reachy_mini.utils.create_head_pose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/__init__.py#L13)**

Create a homogeneous transformation matrix representing a pose in 6D space (position and orientation).

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `x` | `float` | X coordinate of the position. |
| `y` | `float` | Y coordinate of the position. |
| `z` | `float` | Z coordinate of the position. |
| `roll` | `float` | Roll angle |
| `pitch` | `float` | Pitch angle |
| `yaw` | `float` | Yaw angle |
| `mm` | `bool` | If True, convert position from millimeters to meters. |
| `degrees` | `bool` | If True, interpret roll, pitch, and yaw as degrees; otherwise as radians. |

**Returns:**

`np.ndarray` — A 4x4 homogeneous transformation matrix representing the pose.

---

## URDF Parsing

### `reachy_mini.utils.parse_urdf_for_kinematics.get_data`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/parse_urdf_for_kinematics.py#L17)**

Generate the `urdf_kinematics.json` file.
