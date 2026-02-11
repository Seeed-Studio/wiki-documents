---
description: Example providing a GUI using Tkinter to interactively control Reachy Mini's head position and orientation using sliders.
title: Head Position GUI
keywords:
- Reachy Mini
- Example
- GUI
- Tkinter
- Head Control
- Sliders
- Real-time
- 3D View
slug: /reachymini/examples/mini_head_position_gui
last_update:
  date: 02/11/2026
  author: Tienjui Wong
translation:
  skip: [zh-CN]
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

A GUI window will open with sliders for all controllable parameters. Adjust sliders to see the robot respond in real-time.

```python title="mini_head_position_gui.py"
# See ../../../examples/mini_head_position_gui.py for the full code
# This example provides a GUI for interactive head position control
```
