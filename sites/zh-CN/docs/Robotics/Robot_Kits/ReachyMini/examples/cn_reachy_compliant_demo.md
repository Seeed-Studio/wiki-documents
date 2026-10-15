---
description: 演示Reachy Mini在带有重力补偿的顺从模式下的演示，允许机器人跟随轻推并在释放时保持在原位。
title: 顺从模式演示
slug: /reachymini_examples_reachy_compliant_demo
keywords:
  - compliant mode
  - gravity compensation
  - placo
  - kinematics
  - human-robot interaction
  - soft mode
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-18'
url: https://wiki.seeedstudio.com/cn/reachymini_examples_reachy_compliant_demo/
---

# 顺从模式演示

此演示将Reachy Mini置于顺从模式并补偿机器人平台的重力，防止其倒下。

您可以轻轻推动机器人，它会跟随您的动作。当您停止推动时，它会保持在原位。这对于人机交互等应用很有用，您希望机器人顺从并跟随用户的动作。

注意：此演示目前仅在使用Placo作为运动学引擎时有效。

请参阅完整示例：[reachy_compliant_demo.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/reachy_compliant_demo.py)