---
description: Reachy Mini工具完整API参考，包括电机设置工具、扫描工具和重新刷写工具。
title: 工具API参考
slug: /reachymini_api_tools
keywords:
  - api
  - tools
  - motor setup
  - scanning
  - reflashing
  - utilities
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-02-27'
url: https://wiki.seeedstudio.com/reachymini_api_tools/
---
# 工具

## 电机设置工具

### `reachy_mini.tools.setup_motor`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L55)**

使用给定配置设置电机。

---

### `reachy_mini.tools.setup_motor.lookup_for_motor`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L144)**

检查在指定串行端口上是否可以找到具有给定ID的电机。

---

### `reachy_mini.tools.setup_motor.disable_torque`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L165)**

禁用具有给定ID的电机在指定串行端口上的扭矩。

---

### `reachy_mini.tools.setup_motor.change_baudrate`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L177)**

更改具有给定ID的电机在指定串行端口上的波特率。

---

### `reachy_mini.tools.setup_motor.change_id`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L191)**

更改具有给定当前ID的电机在指定串行端口上的ID。

---

### `reachy_mini.tools.setup_motor.change_offset`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L203)`

更改具有给定ID的电机在指定串行端口上的偏移量。

---

### `reachy_mini.tools.setup_motor.change_operating_mode`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L215)**

更改具有给定ID的电机在指定串行端口上的操作模式。

---

### `reachy_mini.tools.setup_motor.change_angle_limits`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L233)**

更改具有给定ID的电机在指定串行端口上的角度限制。

---

### `reachy_mini.tools.setup_motor.change_shutdown_error`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L256)**

更改具有给定ID的电机在指定串行端口上的关闭错误。

---

### `reachy_mini.tools.setup_motor.change_return_delay_time`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L274)**

更改具有给定ID的电机在指定串行端口上的返回延迟时间。

---

### `reachy_mini.tools.setup_motor.light_led_up`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L292)**

点亮具有给定ID的电机在指定串行端口上的LED。

---

### `reachy_mini.tools.setup_motor.light_led_down`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L311)**

熄灭具有给定ID的电机在指定串行端口上的LED。

---

### `reachy_mini.tools.setup_motor.check_configuration`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L329)**

检查具有给定ID的电机在指定串行端口上的配置。

---

## 电机扫描工具

### `reachy_mini.tools.scan_motors.scan`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/scan_motors.py#L48)**

在给定波特率扫描总线并返回检测到的ID。

---

## 电机重新刷写工具

### `reachy_mini.tools.reflash_motors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/reflash_motors.py#L40)**

:::warning

重新刷写Reachy Mini的电机。

这是一个潜在的危险操作，只应由有经验的用户执行。

:::