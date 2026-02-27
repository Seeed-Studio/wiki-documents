---
description: Demo showing Reachy Mini in compliant mode with gravity compensation, allowing the robot to follow gentle pushes and stay in place when released.
title: Compliant Mode Demo
keywords:
- compliant mode
- gravity compensation
- placo
- kinematics
- human-robot interaction
- soft mode
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Compliant Mode Demo

This demo turns the Reachy Mini into compliant mode and compensates for the gravity of the robot platform to prevent it from falling down.

You can gently push the robot and it will follow your movements. When you stop pushing it, it will stay in place. This is useful for applications like human-robot interaction, where you want the robot to be compliant and follow the user's movements.

Note: This demo currently only works with Placo as the kinematics engine.

See the full example at: [reachy_compliant_demo.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/reachy_compliant_demo.py)
