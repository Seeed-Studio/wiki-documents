---
description: Reachy Mini 运动 API 参考，涵盖移动基础类、goto 移动和录制移动。
title: 运动 API
slug: /reachymini_api_motion
keywords:
  - motion
  - api
  - goto
  - recorded moves
  - move
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-20'
url: https://wiki.seeedstudio.com/cn/reachymini_api_motion/
---

# 运动

## 基础类

### `reachy_mini.motion.move.Move`

Reachy Mini 运动系统中所有移动类型的基础类。

### 方法

#### `goto_target`

使用任务空间插值移动到目标姿态。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `head` | `Optional[np.ndarray]` | 表示目标头部姿态的 4x4 姿态矩阵。 |
| `antennas` | `Optional[Union[np.ndarray, List[float]]]` | 表示天线角度的一维数组，两个元素（弧度）。 |
| `duration` | `float` | 移动持续时间（秒）。 |
| `method` | `InterpolationTechnique` | 要使用的插值方法（"linear"、"minjerk"、"ease_in_out"、"cartoon"）。 |
| `body_yaw` | `float \| None` | 身体偏航角（弧度）。 |

---

#### `set_target`

设置头部和/或天线的目标姿态（实时控制）。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `head` | `Optional[np.ndarray]` | 表示头部姿态的 4x4 姿态矩阵。 |
| `antennas` | `Optional[Union[np.ndarray, List[float]]]` | 表示天线角度的一维数组，两个元素（弧度）。 |
| `body_yaw` | `Optional[float]` | 身体偏航角（弧度）。 |

---

## Goto 移动

### `reachy_mini.motion.goto.GotoMove`

使用任务空间插值的移动 GotoMove 类。

### 方法

#### `play`

使用指定的持续时间和插值方法播放 goto 移动。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `duration` | `float` | 移动持续时间（秒）。 |
| `method` | `str` | 要使用的插值方法。 |

---

## 录制移动

### `reachy_mini.motion.recorded_move.RecordedMove`

可在机器人上回放的单个录制移动。

### 方法

#### `evaluate`

在特定时间评估录制移动。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `t` | `float` | 评估移动的时间（秒）。 |

**返回：**

`Dict` — 包含时间 t 时的头部姿态、天线位置和身体偏航角的字典。

---

#### `play`

在机器人上播放录制移动。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `play_frequency` | `float` | 评估移动的频率（Hz）。 |
| `initial_goto_duration` | `float` | 前往起始位置的初始 goto 持续时间（秒）。 |
| `sound` | `bool` | 是否播放关联的声音。 |

---

### `reachy_mini.motion.recorded_move.RecordedMoves`

录制移动的集合，通常从 HuggingFace 数据集加载。

### 方法

#### `get`

按名称获取特定的录制移动。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `name` | `str` | 要检索的录制移动的名称。 |

**返回：**

`RecordedMove` — 请求的录制移动。

---

#### `list`

列出所有可用的录制移动名称。

**返回：**

`List[str]` — 可用移动名称列表。