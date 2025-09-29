---
description: SenseCraft AI 平台上的 Grove Vision AI v2 工作区
title: SenseCraft AI 平台上的 Grove Vision AI v2 工作区
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
sidebar_class_name: hidden
slug: /cn/sensecraft-ai/grove-vision-ai-v2-workspace
aliases:
  - /cn/grove_vision_ai_v2_workspace
last_update:
  date: 08/22/2024
  author: Frank
---

## 入门指南

### 连接 Grove-Vision AI v2

1. 通过 CSI 连接线将 Grove - Vision AI V2 连接到摄像头。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image10.png)

2. 通过 USB 将 Grove - Vision AI V2 连接到您的计算机，并选择 USB Single/serial debug unit 进行连接

:::note

请使用 Chrome、Opera 或 Edge 浏览器将 AI 模型部署到 XIAO ESP32S3 Sense 和 Grove Vision AI v2。

:::

3. 连接到设备后，它将读取设备信息、模型信息，并运行模型进行推理。用户可以调整置信度和 IoU 设置来微调模型推理的准确性。

- 置信度：置信度是指模型对其预测结果分配的确定性或概率水平
- IoU：IoU 用于评估预测边界框与真实边界框相比的准确性

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image11.png)

### 替换 AI 模型

如果您需要替换设备当前运行的模型，SenseCrfat AI 平台提供两种方式来实现

1. 选择 SenseCraft AI 平台上的公开可用模型或用户账户下的模型进行替换。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image12.png)

2. 直接上传模型进行替换。

- 模型名称：输入名称
- 模型文件：上传 tflite 格式的模型
- ID 对象：模型识别的类别

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image13.png)

### 配置

如果您需要将设备的推理结果推送到您自己的 MQTT 服务或 Sensecraft Data 平台，请配置 Wi-Fi 和 MQTT。接下来，我们将以 Sensecraft Data 平台为例。

1. 输入有效的 2.4G Wi-Fi。
2. 访问 [SenseCraft Data 平台](https://sensecap.seeed.cc/portal/#/login) 并登录。

:::note

您可以使用同一个账户登录 Sensecraft AI 和 Sensecraft Data 平台。

:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image14.png)

3. 访问开发套件页面并点击"创建开发套件"按钮。
4. 输入设备名称并选择"Grove-Vision AI v2"作为设备类型。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image15.png)

5. 创建设备后，点击"连接"，然后依次复制并粘贴 Host、Port、clientId、Username 和 Password。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image16.jpg)

6. 完成表单后，点击保存按钮。设备成功应用更改后，转到处理页面。您将看到 IP 地址和服务状态：MQTT 已连接。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image17.png)

7. 现在您可以返回 Sensecraft Data 平台的开发套件页面。点击设备的 EUI 进入设备详情，您将能够看到推理结果。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image18.png)

### 输出

设置一个条件，当检测到的目标满足条件时，XIAO ESP32S3 上的黄色 LED 将点亮。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image19.png)

示例：如果设备检测到人脸且置信度大于 43，则点亮设备的黄色 LED

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image20.png)

### 训练

SenseCraft AI 集成了 YoLo-World，可以根据用户输入的类别快速生成单类 AI 模型，可以直接部署到 Grove-Vision AI v2 设备。

### 快速生成

1. 输入类别，点击快速生成按钮，等待模型生成。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image21.png)

2. 模型生成后，您可以选择模型并点击部署到设备按钮，将生成的模型刷写到设备上。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image22.jpg)

3. 查看推理结果

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image23.png)

### 捕获训练

快速生成的模型可能准确度不高。您可以点击捕获训练来拍摄和收集目标图像。将收集的图像提交给 Yolo-World 进行优化训练。优化后的模型将具有更好的准确性。

1. 使用 Grove-Vision AI v2 摄像头对准目标，点击捕获按钮收集图像。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image24.png)

2. 在捕获的图像中选择并确认目标。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image25.png)

3. 重复步骤 1-2 收集至少 10 张照片进行训练。收集图像后，点击训练模型按钮。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image26.png)

4. 模型生成后，选择新生成的模型，将其部署到设备，并检查推理结果。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image27.png)

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
