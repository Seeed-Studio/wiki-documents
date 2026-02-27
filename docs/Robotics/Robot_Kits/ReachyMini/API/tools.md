---
description: Complete API reference for Reachy Mini tools including motor setup tools, scanning tools, and reflashing tools.
title: Tools API Reference
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
  skip: [zh-CN]
---
# Tools

## Motor Setup Tools

### `reachy_mini.tools.setup_motor`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L55)**

Set up the motor with the given configuration.

---

### `reachy_mini.tools.setup_motor.lookup_for_motor`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L144)**

Check if a motor with the given ID is reachable on the specified serial port.

---

### `reachy_mini.tools.setup_motor.disable_torque`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L165)**

Disable the torque of the motor with the given ID on the specified serial port.

---

### `reachy_mini.tools.setup_motor.change_baudrate`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L177)**

Change the baudrate of the motor with the given ID on the specified serial port.

---

### `reachy_mini.tools.setup_motor.change_id`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L191)**

Change the ID of the motor with the given current ID on the specified serial port.

---

### `reachy_mini.tools.setup_motor.change_offset`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L203)**

Change the offset of the motor with the given ID on the specified serial port.

---

### `reachy_mini.tools.setup_motor.change_operating_mode`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L215)**

Change the operating mode of the motor with the given ID on the specified serial port.

---

### `reachy_mini.tools.setup_motor.change_angle_limits`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L233)**

Change the angle limits of the motor with the given ID on the specified serial port.

---

### `reachy_mini.tools.setup_motor.change_shutdown_error`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L256)**

Change the shutdown error of the motor with the given ID on the specified serial port.

---

### `reachy_mini.tools.setup_motor.change_return_delay_time`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L274)**

Change the return delay time of the motor with the given ID on the specified serial port.

---

### `reachy_mini.tools.setup_motor.light_led_up`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L292)**

Light the LED of the motor with the given ID on the specified serial port.

---

### `reachy_mini.tools.setup_motor.light_led_down`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L311)**

Light the LED of the motor with the given ID on the specified serial port.

---

### `reachy_mini.tools.setup_motor.check_configuration`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L329)**

Check the configuration of the motor with the given ID on the specified serial port.

---

## Motor Scanning Tools

### `reachy_mini.tools.scan_motors.scan`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/scan_motors.py#L48)**

Scan the bus at the given baudrate and return detected IDs.

---

## Motor Reflashing Tools

### `reachy_mini.tools.reflash_motors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/reflash_motors.py#L40)**

:::warning

Reflash Reachy Mini's motors.

This is a potentially dangerous operation that should only be performed by experienced users.

:::
