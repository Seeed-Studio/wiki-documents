---
description: Interactive GUI example using Tkinter to control Reachy Mini's head position and orientation with sliders for roll, pitch, yaw, X, Y, Z, and body yaw.
title: Head Position GUI
slug: /reachymini_examples_mini_head_position_gui
keywords:
  - gui
  - tkinter
  - head position
  - orientation
  - sliders
  - real-time control
  - interactive
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/reachymini_examples_mini_head_position_gui/
---

# Head Position GUI

This example provides a graphical user interface (GUI) using Tkinter to interactively control Reachy Mini's head position and orientation. You can adjust the head's roll, pitch, yaw angles, and X, Y, Z position using sliders, as well as control the body yaw and see animated antenna movements.

**Features:**
- Real-time control of head orientation (roll, pitch, yaw)
- Real-time control of head position (X, Y, Z)
- Body yaw control
- Animated antenna movements (sine wave oscillation)
- Interactive sliders with live updates at 50Hz

**Usage:**
```bash
python mini_head_position_gui.py
```

A GUI window will open with sliders for all controllable parameters. Adjust the sliders to see the robot respond in real-time.

See the full example at: [mini_head_position_gui.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/mini_head_position_gui.py)