---
description: Example demonstrating how to control Reachy Mini's head yaw angle using a joystick (PS4 or Xbox controller) for intuitive real-time control.
title: Joystick Controller
slug: /reachymini_examples_joy_controller
keywords:
  - joystick
  - controller
  - ps4
  - xbox
  - pygame
  - real-time control
  - head yaw
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-18'
url: https://wiki.seeedstudio.com/reachymini_examples_joy_controller/
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

See the full example at: [joy_controller.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/joy_controller.py)