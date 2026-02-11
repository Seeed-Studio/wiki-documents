---
description: Example demonstrating how to control Reachy Mini's head yaw angle using a joystick (PS4 or Xbox controller) for intuitive real-time control.
title: Joystick Controller
keywords:
- Reachy Mini
- Example
- Joystick
- Controller
- PS4
- Xbox
- Head Yaw
- Real-time Control
slug: /reachymini/examples/joy_controller
last_update:
  date: 02/11/2026
  author: Tienjui Wong
translation:
  skip: [zh-CN]
---

# Joystick Controller

This example demonstrates how to control Reachy Mini's head yaw angle using a joystick (PS4 or Xbox controller). The left joystick controls the head's left-right rotation, providing intuitive real-time control of the robot.

**Controls:**
- **LEFT JOYSTICK (Left/Right)**: Control head yaw angle
- **CIRCLE / B BUTTON**: Quit the application safely
- **CTRL-C**: Quit the application

**Requirements:**
- Install pygame: `pip install pygame`
- Connect a PS4 or Xbox controller to your computer

**Controller mappings:**
- PS4: Button 1 = Circle (O), Axis 0 = Left Stick Horizontal
- Xbox: Button 1 = B, Axis 0 = Left Stick Horizontal

```python title="joy_controller.py"
# See ../../../examples/joy_controller.py for the full code
# This example demonstrates joystick control (PS4/Xbox) for head yaw angle
```
