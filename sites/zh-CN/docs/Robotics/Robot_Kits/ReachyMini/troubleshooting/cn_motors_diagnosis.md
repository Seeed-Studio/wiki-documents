---
description: 使用Testbench应用对Reachy Mini进行电机诊断和故障排除的综合指南，以检测和修复电机问题。
title: 电机诊断和故障排除
slug: /reachymini_troubleshooting_motors_diagnosis
keywords:
  - 电机
  - 诊断
  - 故障排除
  - 测试台
  - dynamixel
  - 电机检测
  - 刷新固件
  - 维修
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-18'
url: https://wiki.seeedstudio.com/cn/reachymini_troubleshooting_motors_diagnosis/
---

# 电机诊断和故障排除指南

本指南提供诊断和排除Reachy Mini机器人电机常见问题的指南。

## Reachy Mini Testbench应用
为了帮助诊断电机问题，我们开发了[Reachy Mini Testbench应用](https://huggingface.co/spaces/pollen-robotics/reachy_mini_testbench)。此应用允许您测试单个电机、检查其状态并识别潜在问题。

使用前您需要使用Reachy Mini Control安装此应用（请参阅[安装指南](https://huggingface.co/docs/reachy_mini/platforms/reachy_mini/usage#2-installation)）。

![Reachy Mini Testbench应用](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-testbench.png)

## 电机典型故障排除流程
如果您有以下任何症状，请按照下面的诊断步骤操作。
- 电机红灯闪烁且无响应/不移动。
- 没有错误但电机不响应命令。
- 电机显示"过载错误"等错误。
- 电机缺失："在端口上未找到电机"、"电机缺失"等。

### 诊断
- 打开机器人电源。
- 打开Reachy Mini Testbench应用。
- 通过点击"Scan Motors"按钮进行电机扫描。

### 可能的结果

**1. 检测到所有电机：**
那么所有电机在物理上都已连接并正常工作。

![所有电机被检测到](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/all_motors_found.png)

如果您仍然有问题，可能是顺序或配置不正确。
请点击"Check all motors"来验证所有电机配置是否与预期值匹配。

![检查所有电机](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/check_motor_configuration.png)

=> 如果有任何不正确的内容，守护进程在您重启时会刷新所有电机。
如果一切都正确，但您仍然有问题，请参阅下面的验证。

**电机反转：** 如果您在**首次**启动机器人后几秒钟出现"电机硬件错误：['过载错误']"并且有两个电机臂向上指。
很可能有电机没有放在正确的插槽中，例如电机1放在插槽2中。

![电机反转症状](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/motors_upward.png)

**检查电机 horn 上的臂方向**：
拆下故障电机，然后将臂向上放置在附图中。检查是否可以看到两条线标记对齐如下：

![标记对齐](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/marks_aligned.png)

如果没有对齐，请拆下固定臂的两颗螺丝，然后重新安装，使两条线匹配。

**检查头部内USB线的额外长度：**
如果头部内的线太长，底部可能没有足够的松弛空间，头部无法自由移动。
所以电机会用力过大，可能会损坏。

![USB线长度](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/usb_cable_length.jpg)

请让USB线有一些松弛，以允许头部自由移动，即使在其最大高度位置。

**某个电机感觉坏了：**
我们发现一批有限生产的Reachy Mini机器人存在问题，与一批有故障的Dynamixel电机有关。

在大多数报告的案例中，问题影响4号电机或带有QC标签n°2544的电机。

如果您的某个电机，**在关闭时红灯闪烁并且转动时感觉异常硬**（[示例视频在此](https://drive.google.com/file/d/1UHTqUcb21aFThqlr2Qcx23VWqvj_y-ly/view?usp=sharing)），并且您100%确定电机在正确的插槽中。

那很可能是一个坏电机。

首先，尝试将机器人更新到最新软件版本，然后重启它。这将刷新您的电机。
如果问题持续存在，请联系支持。

**2. 有些电机未检测到：**

![某些电机缺失](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/missing_motors.png)

- 仅一个电机缺失：按照组装说明检查该电机的物理连接。
如果您100%确定连接是正确的，也可能是电机固件刷新不正确。请参阅下面的**刷新问题**部分。

- 如果连续ID的电机缺失（例如电机1-2-3，或4-5-6，或17-18缺失），请检查脚部电源板与电机3和4之间的物理连接。如果问题发生在17-18上，请检查头部PCB板上"R"电机与PCB板之间的连接。

- 如果**两个电机缺失**但连接是正确的，那么您的套件中可能有两个相同ID的电机。三个电机同时缺失的可能性很小。请参阅下面的"刷新问题"部分。

- 如果**所有电机都缺失**，请检查"F"中央电机（ID10）的连接。这个电机是链中的第一个，如果它没有被检测到，那么所有后续电机都不会被检测到。
该电机必须用100mm线缆连接到脚部，用300mm线缆连接到头部。确保这些线缆在两侧都连接良好且没有损坏。

### 刷新问题
如果一个或多个电机未被检测到，可能是由于影响电机ID或波特率的刷新问题。

要解决此问题，您需要：
1. 在Testbench应用中点击"Scan all baudrates"按钮。
电机必须在波特率1000000下被检测到。
电机ID必须是从10到18，没有重复或缺失的数字。

2. 如果有电机的波特率或/和ID错误，您需要使用正确的参数刷新它。
请按照下面的刷新程序操作：
- 在电机刷新部分，选择ID或波特率错误的电机。
- 选择电机应该是的预设（例如，电机10用于基座旋转）。
- 点击"Reflash motor"。

![刷新电机](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/reflash_motors.png)

3. 如果您有多个电机缺失且确定连接是正确的，您需要逐一刷新所有故障/缺失的电机，方法与上述相同，但请拔掉所有其他故障电机的插头以避免ID冲突。