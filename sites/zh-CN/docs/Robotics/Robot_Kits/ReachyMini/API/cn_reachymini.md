---
description: ReachyMini主类完整API参考，包括电机控制、运动和状态管理的方法。
title: ReachyMini API参考
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
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-02-27'
url: https://wiki.seeedstudio.com/reachymini_api_reachymini/
---
# Reachy Mini

## 主类

### `reachy_mini.ReachyMini`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L56)**

用于控制仿真或真实Reachy Mini机器人的类。

### 方法

#### `async_play_move`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L856)**

异步播放`Move`。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `move` | `Move` | 要播放的Move对象。 |
| `play_frequency` | `float` | 评估移动的频率（以Hz为单位）。 |
| `initial_goto_duration` | `float` | 移动起始位置的初始goto持续时间（以秒为单位）。如果为0，则不执行初始goto。 |
| `sound` | `bool` | 如果为True，则播放与移动关联的声音（如果有）。 |

---

#### `disable_gravity_compensation`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L843)**

禁用头部电机的重力补偿。

---

#### `disable_motors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L825)**

禁用电机。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `ids` | `List[str] \| None` | 要禁用的电机名称列表。如果为None，则所有电机都将被禁用。有效名称匹配`src/reachy_mini/assets/config/hardware_config.yaml`：`body_rotation`、`stewart_1`…`stewart_6`、`right_antenna`、`left_antenna`。 |

---

#### `enable_gravity_compensation`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L839)**

启用头部电机的重力补偿。

---

#### `enable_motors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L814)**

启用电机。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `ids` | `List[str] \| None` | 要启用的电机名称列表。如果为None，则所有电机都将被启用。有效名称匹配`src/reachy_mini/assets/config/hardware_config.yaml`：`body_rotation`、`stewart_1`…`stewart_6`、`right_antenna`、`left_antenna`。 |

---

#### `get_current_head_pose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L698)**

获取当前头部姿态作为4x4矩阵。

**返回：**

`np.ndarray` — 表示当前头部姿态的4x4矩阵。

---

#### `get_current_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L674)**

获取头部和天线的当前关节位置（以弧度为单位）。

**返回：**

`tuple` — 包含两个列表的元组：
- 头部关节位置列表（弧度）（长度7）
- 天线关节位置列表（弧度）（长度2）

---

#### `get_present_antenna_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L687)**

获取天线的当前关节位置（以弧度为单位）。

**返回：**

`list` — 天线关节位置列表（弧度）（长度2）。

---

#### `goto_sleep`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L449)**

通过将头部和天线移动到预定义的睡眠位置来让机器人入睡。

---

#### `goto_target`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L381)**

使用任务空间插值在"持续时间"秒内将头部和/或天线移动到目标姿态。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `head` | `Optional[np.ndarray]` | 表示目标头部姿态的4x4姿态矩阵。 |
| `antennas` | `Optional[Union[np.ndarray, List[float]]]` | 包含两个元素的1D数组，表示天线的角度（以弧度为单位）。 |
| `duration` | `float` | 运动持续时间（以秒为单位）。 |
| `method` | `InterpolationTechnique` | 要使用的插值方法（"linear"、"minjerk"、"ease_in_out"、"cartoon"）。默认为"minjerk"。 |
| `body_yaw` | `float \| None` | 身体偏航角（以弧度为单位）。使用None保持当前偏航。 |

---

#### `look_at_image`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L481)**

使机器人头部看向由像素位置(u,v)定义的点。

:::tip

TODO：reachy mini坐标系图像

:::

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `u` | `int` | 图像帧中的水平坐标。 |
| `v` | `int` | 图像帧中的垂直坐标。 |
| `duration` | `float` | 运动持续时间（以秒为单位）。如果为0，头部将立即捕捉到位置。 |
| `perform_movement` | `bool` | 如果为True，则执行运动。如果为False，则仅计算并返回姿态。 |

**返回：**

`np.ndarray` — 计算出的头部姿态作为4x4矩阵。

---

#### `look_at_world`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L546)**

使机器人看向Reachy Mini参考帧中3D空间中的特定点。

:::tip

TODO：包含reachy mini坐标系的图像

:::

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `x` | `float` | X坐标（以米为单位）。 |
| `y` | `float` | Y坐标（以米为单位）。 |
| `z` | `float` | Z坐标（以米为单位）。 |
| `duration` | `float` | 运动持续时间（以秒为单位）。如果为0，头部将立即捕捉到位置。 |
| `perform_movement` | `bool` | 如果为True，则执行运动。如果为False，则仅计算并返回姿态。 |

**返回：**

`np.ndarray` — 计算出的头部姿态作为4x4矩阵。

---

#### `play_move`

异步播放`Move`。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `move` | `Move` | 要播放的Move对象。 |
| `play_frequency` | `float` | 评估移动的频率（以Hz为单位）。 |
| `initial_goto_duration` | `float` | 移动起始位置的初始goto持续时间（以秒为单位）。如果为0，则不执行初始goto。 |
| `sound` | `bool` | 如果为True，则播放与移动关联的声音（如果有）。 |

---

#### `set_automatic_body_yaw`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L847)**

设置自动身体偏航。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `body_yaw` | `float` | 身体偏航角（以弧度为单位）。 |

---

#### `set_target`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L320)**

设置头部和/或天线目标位置的目标姿态。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `head` | `Optional[np.ndarray]` | 表示头部姿态的4x4姿态矩阵。 |
| `antennas` | `Optional[Union[np.ndarray, List[float]]]` | 包含两个元素的1D数组，表示天线的角度（以弧度为单位）。 |
| `body_yaw` | `Optional[float]` | 身体偏航角（以弧度为单位）。 |

---

#### `set_target_antenna_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L767)**

设置天线的目标关节位置。

---

#### `set_target_body_yaw`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L772)**

设置目标身体偏航。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `body_yaw` | `float` | 身体偏航角（以弧度为单位）。 |

---

#### `set_target_head_pose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L743)**

将头部姿态设置为特定的4x4矩阵。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `pose` | `np.ndarray` | 表示所需头部姿态的4x4矩阵。 |
| `body_yaw` | `float` | 身体的偏航角，用于调整头部姿态。 |

---

#### `start_recording`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L782)**

开始录制数据。

---

#### `stop_recording`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L787)**

停止录制数据并返回录制的龙8。

---

#### `wake_up`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L433)**

唤醒机器人 - 将头部移动到初始位置并播放唤醒表情和声音。