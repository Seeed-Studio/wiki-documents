---
description: 示例演示如何使用操纵杆（PS4或Xbox控制器）控制Reachy Mini的头部偏航角，以实现直观的实时控制。
title: 操纵杆控制器
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
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/reachymini_examples_joy_controller/
---

# 操纵杆控制器

此示例演示如何使用操纵杆（PS4或Xbox控制器）控制Reachy Mini的头部偏航角。左操纵杆控制头部的左右旋转，提供直观的机器人实时控制。

**控制：**
- **左操纵杆（左/右）**：控制头部偏航角
- **圆形/B按钮**：安全退出应用
- **CTRL-C**：退出应用

**要求：**
- 安装pygame：`pip install pygame`
- 将PS4或Xbox控制器连接到您的电脑

**控制器映射：**
- PS4：按钮1 = 圆形(O)，轴0 = 左操纵杆水平
- Xbox：按钮1 = B，轴0 = 左操纵杆水平

请参阅完整示例：[joy_controller.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/joy_controller.py)