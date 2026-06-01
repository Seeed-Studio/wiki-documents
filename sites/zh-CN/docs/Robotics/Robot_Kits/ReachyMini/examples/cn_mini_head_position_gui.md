---
description: 使用Tkinter的交互式GUI示例，通过roll、pitch、yaw、X、Y、Z和身体偏航的滑块控制Reachy Mini的头部位置和方向。
title: 头部位置GUI
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

# 头部位置GUI

此示例提供使用Tkinter的图形用户界面（GUI）来交互式控制Reachy Mini的头部位置和方向。您可以使用滑块调整头部的roll、pitch、yaw角度和X、Y、Z位置，还可以控制身体偏航并查看动画天线运动。

**功能：**
- 头部方向（roll、pitch、yaw）的实时控制
- 头部位置（X、Y、Z）的实时控制
- 身体偏航控制
- 动画天线运动（正弦波振荡）
- 以50Hz更新的交互式滑块

**用法：**
```bash
python mini_head_position_gui.py
```

将打开一个GUI窗口，其中包含所有可控参数的滑块。调整滑块以查看机器人实时响应。

请参阅完整示例：[mini_head_position_gui.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/mini_head_position_gui.py)