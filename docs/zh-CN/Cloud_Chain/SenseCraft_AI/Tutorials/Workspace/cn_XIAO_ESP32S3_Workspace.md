---
description: SenseCraft AI 平台上的 XIAO ESP32S3 工作区
title: SenseCraft AI 平台上的 XIAO ESP32S3 工作区
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
sidebar_class_name: hidden
slug: /cn/sensecraft-ai/xiao-esp32s3-workspace
last_update:
  date: 08/22/2024
  author: Frank
---

## 入门指南

### 连接 XIAO ESP32S3

1. 将摄像头传感器扩展板上的连接器与 XIAO ESP32S3 Sense 上的 B2B 连接器对齐并按下以安装摄像头传感器。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image4.png)

2. 通过 USB 将 XIAO ESP32S3 Sense 连接到您的计算机，并选择 USB JAG/串行调试单元来连接设备。

:::note

请使用 Chrome、Opera 或 Edge 浏览器将 AI 模型部署到 XIAO ESP32S3 Sense 和 Grove Vision AI v2。

:::

3. 连接到设备后，它将读取设备信息、模型信息，并运行模型进行推理。用户可以调整置信度和 IoU 设置来微调模型推理的准确性。

- 置信度：置信度是指模型对其预测结果分配的确定性或概率水平
- IoU：IoU 用于评估预测边界框与真实边界框相比的准确性

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image5.png)

### 替换 AI 模型

如果您需要替换设备当前运行的模型，SenseCrfat AI 平台提供两种方式来实现

1. 选择 SenseCraft AI 平台上公开可用的模型或用户账户下的模型来替换。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image6.png)

2. 直接上传模型进行替换。

- 模型名称：输入名称
- 模型文件：上传 tflite 格式的模型
- ID 对象：模型识别的类别

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image7.png)

### 输出

设置一个条件，当检测到的目标满足条件时，XIAO ESP32S3 上的黄色 LED 将点亮。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image8.png)

示例：如果设备检测到人脸且置信度大于 43，则点亮设备的黄色 LED

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image9.png)

## **技术支持**

**需要 SenseCAP Indicator 的帮助？我们随时为您提供协助！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
