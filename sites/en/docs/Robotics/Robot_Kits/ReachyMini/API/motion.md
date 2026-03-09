---
description: Complete API reference for Reachy Mini motion including base classes, goto moves, and recorded moves.
title: Motion API Reference
slug: /reachymini_api_motion
keywords:
  - api
  - motion
  - moves
  - goto
  - interpolation
  - recording
  - playback
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/reachymini_api_motion/
---
# Motion

## Base Classes

### `reachy_mini.motion.move.Move`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/move.py#L11)**

Abstract base class for defining a move on the `ReachyMini` robot.

### Methods

#### `evaluate`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/move.py#L25)**

Evaluate the move at time t, typically called at a high-frequency (eg. 100Hz).

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `t` | `float` | The time at which to evaluate the move (in seconds). It will always be between 0 and duration. |

**Returns:**

| Name | Type | Description |
|------|------|-------------|
| `head` | - | The head position (4x4 homogeneous matrix). |
| `antennas` | - | The antennas positions (rad). |
| `body_yaw` | - | The body yaw angle (rad). |

---

## Goto Moves

### `reachy_mini.motion.goto.GotoMove`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/goto.py#L15)**

A goto move to a target head pose and/or antennas position.

### Methods

#### `evaluate`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/goto.py#L51)**

Evaluate the goto at time t.

---

## Recorded Moves

### `reachy_mini.motion.recorded_move.RecordedMove`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L70)**

Represent a recorded move.

### Methods

#### `evaluate`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L98)**

Evaluate the move at time t.

**Returns:**

| Name | Type | Description |
|------|------|-------------|
| `head` | - | The head position (4x4 homogeneous matrix). |
| `antennas` | - | The antennas positions (rad). |
| `body_yaw` | - | The body yaw angle (rad). |

---

### `reachy_mini.motion.recorded_move.RecordedMoves`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L156)**

Load a library of recorded moves from a HuggingFace dataset.

:::info

Uses local cache only to avoid blocking network calls during playback.

The dataset should be pre-downloaded at daemon startup via `preload_default_datasets()`.

If not cached, falls back to network download (which may cause delays).

:::

### Methods

#### `get`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L209)**

Get a recorded move by name.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `move_name` | `str` | The name of the move to retrieve. |

---

#### `list_moves`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L218)**

List all moves in the loaded library.

---

#### `process`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L189)**

Populate recorded moves and sounds.
