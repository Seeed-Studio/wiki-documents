---
description: Example demonstrating Rerun utility for real-time visualization and logging of Reachy Mini's state in compliant mode with gravity compensation.
title: Rerun Viewer
slug: /reachymini_examples_rerun_viewer
keywords:
  - rerun
  - visualization
  - logging
  - real-time
  - compliant mode
  - gravity compensation
  - placo
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/reachymini_examples_rerun_viewer/
---

# Rerun Viewer

This example shows how to use the Rerun utility to log and visualize Reachy Mini's state in real-time. The robot will be in compliant mode with gravity compensation, making it easy to move around while visualizing its configuration.

Requirements:
- Install with: `pip install reachy-mini[rerun,placo_kinematics]`
- Start the daemon with: `reachy-mini-daemon --kinematics-engine Placo`

See the full example at: [rerun_viewer.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/rerun_viewer.py)
