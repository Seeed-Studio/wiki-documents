---
description: Example showing how to use the Rerun utility to log and visualize Reachy Mini's state in real-time while the robot moves.
title: Rerun Viewer
keywords:
- Reachy Mini
- Example
- Rerun
- Visualization
- Real-time
- Logging
- State Viewer
slug: /reachymini/examples/rerun_viewer
last_update:
  date: 02/11/2026
  author: Tienjui Wong
translation:
  skip: [zh-CN]
---

# Rerun Viewer

This example shows how to use the Rerun utility to log and visualize Reachy Mini's state in real-time. The robot will be in compliant mode with gravity compensation, making it easy to move around while visualizing its configuration.

Requirements:
- Install with: `pip install reachy-mini[rerun,placo_kinematics]`
- Start the daemon with: `reachy-mini-daemon --kinematics-engine Placo`

```python title="rerun_viewer.py"
# See ../../../examples/rerun_viewer.py for the full code
# This example uses Rerun utility to log and visualize robot state in real-time
```
