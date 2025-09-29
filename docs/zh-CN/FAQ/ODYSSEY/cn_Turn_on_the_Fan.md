---
description: 风扇未启动
title: 风扇未启动
#keywords:
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /cn/Turn_on_the_Fan
last_update:
  date: 2023.6.25   
  author: cheng.tang
---

ODYSSEY - X86J41x5 的风扇由嵌入式控制器（EC）控制，其作用是在系统启动之前初始化设备。BIOS 中的温度由 EC 检测，温度传感器放置在靠近 Intel CPU 的位置，但该 CPU 没有传感器引脚。换句话说，温度并不是 CPU 的直接值，可能存在 5 摄氏度的误差。您在系统中看到的温度值是由 CPU 内部反馈的，而 BIOS 屏幕中的温度值是由 EC 反馈的，风扇的运行或停止取决于 EC 的检测值。

- EC 检测值（BIOS 屏幕）和风扇速度表如下：

**风扇关闭状态**：停止

**正常风扇状态**：低于 40°C–停止，45-50°C–50%，50-60°C–60%，高于 60°C–80%

**积极风扇状态**：低于 40°C–停止，45-50°C–70%，50-60°C–80%，高于 60°C–100%