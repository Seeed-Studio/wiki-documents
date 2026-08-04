---
description: 在 SenseCraft AI 平台上使用 Grove Vision AI v2 工作区
title: 在 SenseCraft AI 平台上使用 Grove Vision AI v2 工作区
keywords:
  - Cloud and Chain
  - SenseCraft
  - SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
sidebar_class_name: hidden
slug: /sensecraft-ai/grove-vision-ai-v2-workspace
aliases:
  - /grove_vision_ai_v2_workspace
last_update:
  date: 08/22/2024
  author: Frank
createdAt: '2024-08-21'
updatedAt: '2025-09-04'
url: https://wiki.seeedstudio.com/cn/sensecraft-ai/grove-vision-ai-v2-workspace/
---

## 入门指南

### 连接 Grove-Vision AI v2

1. 通过 CSI 连接线将 Grove - Vision AI V2 连接到摄像头。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image10.png)

2. 通过 USB 将 Grove - Vision AI V2 连接到你的电脑，并选择 USB Single/serial debug unit 进行连接。

:::note

请使用 Chrome、Opera 或 Edge 将 AI 模型部署到 XIAO ESP32S3 Sense 和 Grove Vision AI v2。

:::

3. 连接设备后，将读取设备信息、模型信息，并运行模型进行推理。用户可以调整 Confidence 和 IoU 设置，以微调模型推理的准确性。

- Confidence：Confidence 指的是模型对其预测结果所赋予的确定性或概率水平
- IoU：IoU 用于评估预测边界框与真实边界框相比的准确性

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image11.png)

### 替换 AI 模型

如果你需要替换设备当前运行的模型，SenseCrfat AI 平台提供了两种方式来实现。

1. 在 SenseCraft AI 平台上选择一个公开可用的模型，或选择用户账号下的模型进行替换。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image12.png)

2. 直接上传一个模型进行替换。

- Model Name：输入一个名称
- Model File ：上传一个 tflite 格式的模型
- ID Object: 模型识别的类别

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image13.png)

### 配置

如果你需要将设备的推理结果推送到你自己的 MQTT 服务或 Sensecraft Data 平台，请配置 Wi-Fi 和 MQTT。接下来，我们将以 Sensecraft Data 平台为例进行说明。

1. 输入一个可用的 2.4G Wi-Fi。
2. 访问 [SenseCraft Data 平台](https://sensecap.seeed.cc/portal/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_data_portal#/login) 并登录。

:::note

你可以使用同一个账号登录 Sensecraft AI 和 Sensecraft Data 平台。

:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image14.png)

3. 进入 Development Kit 页面并点击 "Create Development Kit" 按钮。
4. 输入设备名称，并选择 "Grove-Vision AI v2" 作为设备类型。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image15.png)

5. 设备创建完成后，点击 "connect"，然后依次复制并粘贴 Host、Port、clientId、Username 和 Password。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image16.jpg)

6. 完成表单后，点击 Save 按钮。设备成功应用更改后，前往 Process 页面。你将看到 IP Address 和 Service Status: MQTT connected。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image17.png)

7. 现在你可以返回 Sensecraft Data 平台的 Development Kit 页面。点击设备的 EUI 进入设备详情页面，在这里你将能够看到推理结果。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image18.png)

### 输出

设置一个条件，使当检测到的目标满足条件时，XIAO ESP32S3 上的黄色 LED 会点亮。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image19.png)

示例：如果设备检测到人脸且置信度大于 43，则点亮设备的黄色 LED。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image20.png)

### 训练

SenseCraft AI 集成了 YoLo-World，可根据用户输入的类别快速生成单类别 AI 模型，并可直接部署到 Grove-Vision AI v2 设备上。

### 快速生成

1. 输入类别，点击 Quick Generate 按钮，等待模型生成。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image21.png)

2. 模型生成后，你可以选择该模型并点击 Deploy to device 按钮，将生成的模型烧录到设备上。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image22.jpg)

3. 查看推理结果

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image23.png)

### 采集训练

快速生成的模型可能精度不高。你可以点击 Capture to Train 来拍摄并采集目标图像，将采集到的图像提交给 Yolo-World 进行优化训练，优化后的模型将具有更好的精度。

1. 使用 Grove-Vision AI v2 摄像头对准目标，并点击 Capture 按钮采集图像。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image24.png)

2. 在采集到的图像中选择并确认目标。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image25.png)

3. 重复步骤 1-2，至少采集 10 张照片用于训练。采集完成后，点击 Train Model 按钮。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image26.png)

4. 模型生成后，选择新生成的模型，将其部署到设备上，并检查推理结果。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image27.png)

## **技术支持**

**需要 SenseCAP Indicator 的帮助吗？我们随时为你提供支持！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
