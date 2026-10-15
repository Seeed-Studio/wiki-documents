---
description: Complete API reference for ReachyMini main class including methods for motor control, movement, and state management.
title: ReachyMini API Reference
slug: /reachymini_api_reachymini
keywords:
  - api
  - reachymini
  - motor control
  - movement
  - state
  - main class
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-02-27'
url: https://wiki.seeedstudio.com/reachymini_api_reachymini/
---
# Reachy Mini

## Main class

### `reachy_mini.ReachyMini`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L56)**

Reachy Mini class for controlling a simulated or real Reachy Mini robot.

### Methods

#### `async_play_move`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L856)**

Asynchronously play a `Move`.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `move` | `Move` | The Move object to be played. |
| `play_frequency` | `float` | The frequency at which to evaluate the move (in Hz). |
| `initial_goto_duration` | `float` | Duration for the initial goto to the starting position of the move (in seconds). If 0, no initial goto is performed. |
| `sound` | `bool` | If True, play the sound associated with the move (if any). |

---

#### `disable_gravity_compensation`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L843)**

Disable gravity compensation for the head motors.

---

#### `disable_motors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L825)**

Disable the motors.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ids` | `List[str] \| None` | List of motor names to disable. If None, all motors will be disabled. Valid names match `src/reachy_mini/assets/config/hardware_config.yaml`: `body_rotation`, `stewart_1` … `stewart_6`, `right_antenna`, `left_antenna`. |

---

#### `enable_gravity_compensation`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L839)**

Enable gravity compensation for the head motors.

---

#### `enable_motors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L814)**

Enable the motors.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ids` | `List[str] \| None` | List of motor names to enable. If None, all motors will be enabled. Valid names match `src/reachy_mini/assets/config/hardware_config.yaml`: `body_rotation`, `stewart_1` … `stewart_6`, `right_antenna`, `left_antenna`. |

---

#### `get_current_head_pose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L698)**

Get the current head pose as a 4x4 matrix.

**Returns:**

`np.ndarray` — A 4x4 matrix representing the current head pose.

---

#### `get_current_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L674)**

Get the current joint positions of the head and antennas (in rad).

**Returns:**

`tuple` — A tuple containing two lists:
- List of head joint positions (rad) (length 7)
- List of antennas joint positions (rad) (length 2)

---

#### `get_present_antenna_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L687)**

Get the present joint positions of the antennas (in rad).

**Returns:**

`list` — A list of antennas joint positions (rad) (length 2).

---

#### `goto_sleep`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L449)**

Put the robot to sleep by moving the head and antennas to a predefined sleep position.

---

#### `goto_target`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L381)**

Go to a target head pose and/or antennas position using task space interpolation, in "duration" seconds.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `head` | `Optional[np.ndarray]` | 4x4 pose matrix representing the target head pose. |
| `antennas` | `Optional[Union[np.ndarray, List[float]]]` | 1D array with two elements representing the angles of the antennas in radians. |
| `duration` | `float` | Duration of the movement in seconds. |
| `method` | `InterpolationTechnique` | Interpolation method to use ("linear", "minjerk", "ease_in_out", "cartoon"). Default is "minjerk". |
| `body_yaw` | `float \| None` | Body yaw angle in radians. Use None to keep the current yaw. |

---

#### `look_at_image`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L481)**

Make the robot head look at a point defined by a pixel position (u,v).

:::tip

TODO: image of reachy mini coordinate system

:::

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `u` | `int` | Horizontal coordinate in image frame. |
| `v` | `int` | Vertical coordinate in image frame. |
| `duration` | `float` | Duration of the movement in seconds. If 0, the head will snap to the position immediately. |
| `perform_movement` | `bool` | If True, perform the movement. If False, only calculate and return the pose. |

**Returns:**

`np.ndarray` — The calculated head pose as a 4x4 matrix.

---

#### `look_at_world`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L546)**

Look at a specific point in 3D space in Reachy Mini's reference frame.

:::tip

TODO: include image of reachy mini coordinate system

:::

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `x` | `float` | X coordinate in meters. |
| `y` | `float` | Y coordinate in meters. |
| `z` | `float` | Z coordinate in meters. |
| `duration` | `float` | Duration of the movement in seconds. If 0, the head will snap to the position immediately. |
| `perform_movement` | `bool` | If True, perform the movement. If False, only calculate and return the pose. |

**Returns:**

`np.ndarray` — The calculated head pose as a 4x4 matrix.

---

#### `play_move`

Asynchronously play a `Move`.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `move` | `Move` | The Move object to be played. |
| `play_frequency` | `float` | The frequency at which to evaluate the move (in Hz). |
| `initial_goto_duration` | `float` | Duration for the initial goto to the starting position of the move (in seconds). If 0, no initial goto is performed. |
| `sound` | `bool` | If True, play the sound associated with the move (if any). |

---

#### `set_automatic_body_yaw`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L847)**

Set the automatic body yaw.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `body_yaw` | `float` | The yaw angle of the body in radians. |

---

#### `set_target`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L320)**

Set the target pose of the head and/or the target position of the antennas.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `head` | `Optional[np.ndarray]` | 4x4 pose matrix representing the head pose. |
| `antennas` | `Optional[Union[np.ndarray, List[float]]]` | 1D array with two elements representing the angles of the antennas in radians. |
| `body_yaw` | `Optional[float]` | Body yaw angle in radians. |

---

#### `set_target_antenna_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L767)**

Set the target joint positions of the antennas.

---

#### `set_target_body_yaw`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L772)**

Set the target body yaw.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `body_yaw` | `float` | The yaw angle of the body in radians. |

---

#### `set_target_head_pose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L743)**

Set the head pose to a specific 4x4 matrix.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `pose` | `np.ndarray` | A 4x4 matrix representing the desired head pose. |
| `body_yaw` | `float` | The yaw angle of the body, used to adjust the head pose. |

---

#### `start_recording`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L782)**

Start recording data.

---

#### `stop_recording`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L787)**

Stop recording data and return the recorded data.

---

#### `wake_up`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L433)**

Wake up the robot - go to the initial head position and play the wake up emote and sound.
