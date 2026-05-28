---
description: Motion API reference for Reachy Mini covering move base classes, goto moves, and recorded moves.
title: Motion API
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
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-20'
url: https://wiki.seeedstudio.com/reachymini_api_motion/
---

# Motion

## Base Classes

### `reachy_mini.motion.move.Move`

Base class for all move types in the Reachy Mini motion system.

### Methods

#### `goto_target`

Go to a target pose using task space interpolation.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `head` | `Optional[np.ndarray]` | 4x4 pose matrix representing the target head pose. |
| `antennas` | `Optional[Union[np.ndarray, List[float]]]` | 1D array with two elements representing the angles of the antennas in radians. |
| `duration` | `float` | Duration of the movement in seconds. |
| `method` | `InterpolationTechnique` | Interpolation method to use ("linear", "minjerk", "ease_in_out", "cartoon"). |
| `body_yaw` | `float \| None` | Body yaw angle in radians. |

---

#### `set_target`

Set the target pose of the head and/or the target position of the antennas (real-time control).

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `head` | `Optional[np.ndarray]` | 4x4 pose matrix representing the head pose. |
| `antennas` | `Optional[Union[np.ndarray, List[float]]]` | 1D array with two elements representing the angles of the antennas in radians. |
| `body_yaw` | `Optional[float]` | Body yaw angle in radians. |

---

## Goto Moves

### `reachy_mini.motion.goto.GotoMove`

GotoMove class for movements using task space interpolation.

### Methods

#### `play`

Play the goto move with specified duration and interpolation method.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `duration` | `float` | Duration of the movement in seconds. |
| `method` | `str` | Interpolation method to use. |

---

## Recorded Moves

### `reachy_mini.motion.recorded_move.RecordedMove`

A single recorded move that can be played back on the robot.

### Methods

#### `evaluate`

Evaluate the recorded move at a specific time.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `t` | `float` | Time in seconds to evaluate the move. |

**Returns:**

`Dict` — Dictionary containing head pose, antennas positions, and body yaw at time t.

---

#### `play`

Play the recorded move on the robot.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `play_frequency` | `float` | Frequency at which to evaluate the move (in Hz). |
| `initial_goto_duration` | `float` | Duration for the initial goto to the starting position (in seconds). |
| `sound` | `bool` | Whether to play the associated sound. |

---

### `reachy_mini.motion.recorded_move.RecordedMoves`

Collection of recorded moves, typically loaded from a HuggingFace dataset.

### Methods

#### `get`

Get a specific recorded move by name.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `name` | `str` | Name of the recorded move to retrieve. |

**Returns:**

`RecordedMove` — The requested recorded move.

---

#### `list`

List all available recorded move names.

**Returns:**

`List[str]` — List of available move names.