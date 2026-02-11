---
description: Demo that turns Reachy Mini into compliant mode and compensates for the gravity of the robot platform to prevent it from falling down.
title: Compliant Mode Demo
keywords:
- Reachy Mini
- Example
- Compliant Mode
- Gravity Compensation
- Placo
- Soft Control
- Interaction
slug: /reachymini/examples/reachy_compliant_demo
last_update:
  date: 02/11/2026
  author: Tienjui Wong
translation:
  skip: [zh-CN]
---

# Compliant Mode Demo

This demo turns Reachy Mini into compliant mode and compensates for the gravity of the robot platform to prevent it from falling down.

You can gently push the robot and it will follow your movements. When you stop pushing it, it will stay in place. This is useful for applications like human-robot interaction, where you want the robot to be compliant and follow the user's movements.

Note: This demo currently only works with Placo as the kinematics engine.

```python title="reachy_compliant_demo.py"
# See ../../../examples/reachy_compliant_demo.py for the full code
# This demo enables compliant mode with gravity compensation
```
