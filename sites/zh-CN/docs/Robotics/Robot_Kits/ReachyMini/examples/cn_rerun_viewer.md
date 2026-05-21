---
description: 示例演示Rerun工具用于在带有重力补偿的顺从模式下实时可视化和记录Reachy Mini状态。
title: Rerun查看器
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
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/reachymini_examples_rerun_viewer/
---

# Rerun查看器

此示例展示如何使用Rerun工具实时记录和可视化Reachy Mini的状态。机器人将处于带有重力补偿的顺从模式，使其易于移动，同时可视化其配置。

要求：
- 安装：`pip install reachy-mini[rerun,placo_kinematics]`
- 启动守护进程：`reachy-mini-daemon --kinematics-engine Placo`

请参阅完整示例：[rerun_viewer.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/rerun_viewer.py)