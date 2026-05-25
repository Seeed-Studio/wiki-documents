---
description: 示例演示使用Reachy Mini的麦克风阵列进行到达方向（DoA）检测，以自动看向说话者。
title: 声音到达方向
slug: /reachymini_examples_sound_doa
keywords:
  - doa
  - direction of arrival
  - microphone array
  - speech detection
  - sound localization
  - look at
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/reachymini_examples_sound_doa/
---

# 声音到达方向（DoA）

此示例演示如何使用麦克风阵列检测语音的到达方向（DoA）。机器人使用FastAPI端点获取DoA信息，计算声源位置，将其转换为世界坐标，并自动看向说话者。

**工作原理：**
1. 持续轮询`/api/state/doa`端点以获取语音方向
2. 当检测到语音时，计算声源的3D位置
3. 将位置从头部坐标转换为世界坐标
4. 使用`look_at_world()`命令机器人看向说话者

**功能：**
- 自动检测机器人IP（本地或无线）
- 基于阈值的过滤以避免过多的头部运动
- 从头部到世界坐标的实时转换

请参阅完整示例：[sound_doa.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/sound_doa.py)