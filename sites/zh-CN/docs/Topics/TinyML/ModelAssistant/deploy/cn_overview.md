---
description: 模型助手部署
title: 部署
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ModelAssistant_Deploy_Overview
last_update:
  date: 01/11/2024
  author: LynnL4
---

# 部署

SSCMA 是一个开源项目，提供了无代码可视化模型部署工具和基于 CPP 的 SDK。它允许用户轻松地将模型部署到不同平台，无需编写复杂的代码。

目前支持的平台包括：

| 设备 | SenseCraft-AI | SSCMA-Micro SDK |
| :--- | :--- | :--- |
| [Xiao ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html) | ✅ | ✅ |
| [Grove Vision AI V2](https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html) | ✅ | ✅ |

## SenseCraft-AI

SenseCraft-AI 是 SSCMA 提供的可视化模型部署工具。通过这个工具，用户可以通过简单的操作轻松地将模型部署到各种平台。该工具提供了用户友好的界面，不需要任何编码。

[SenseCraft-AI](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/) 的主要特性包括：

- 无需编码技能的可视化界面
- 快速将模型部署到不同平台
- 支持 TFLite 模型

步骤 1. 打开 SenseCraft-AI 网站

<div align="center">
  <a href="https://seeed-studio.github.io/SenseCraft-Web-Toolk"><img width="10%" src="https://files.seeedstudio.com/sscma/docs/images/SSCMA-Hero.png"/></a>
</div>

步骤 2. 将设备连接到您的计算机

使用具有数据传输功能的数据线将您的设备连接到计算机。

步骤 3. 选择并连接您的设备

进入 SenseCraft-AI 主页后，我们需要首先连接设备。请点击连接按钮。

![步骤3-1](https://files.seeedstudio.com/sscma/docs/static/deploy/step3-1.png)

然后，浏览器中会弹出一个窗口。我们需要在这里选择正确的 Xiao 端口。对于 Windows 系统，端口通常以 COM 开头，而对于 MacOS 系统，端口通常以 /dev/tty 开头并带有 USB JTAG 标签。如果您不确定正确的端口，请在连接设备后刷新此页面并再次点击连接按钮，您将看到新端口出现在下拉列表中。

![步骤3-2](https://files.seeedstudio.com/sscma/docs/static/deploy/step3-2.png)

步骤 4. 选择您的模型

一旦连接按钮变成红色的断开连接按钮，我们就可以从"可用 AI 模型"列表中选择模型。在这里，我选择了人脸识别作为演示。选择后，点击发送按钮并等待几秒钟。

![步骤4-1](https://files.seeedstudio.com/sscma/docs/static/deploy/step4-1.png)

步骤 5. 部署您的模型

![步骤5-1](https://files.seeedstudio.com/sscma/docs/static/deploy/step5-1.png)

最后，我们来到预览部分。在右上角点击一次停止按钮，然后点击调用按钮。如果一切顺利，您可以看到实时屏幕效果。

![步骤5-2](https://files.seeedstudio.com/sscma/docs/static/deploy/step5-2.png)

## SSCMA-Micro SDK

SSCMA 还提供了一个基于 CPP 的 SDK，称为 SSCMA-Micro，使用户能够将模型部署到自己的项目中。通过集成 SSCMA-Micro，用户可以在其应用程序中方便地使用已部署的模型。

[SSCMA-Micro](https://github.com/Seeed-Studio/SSCMA-Micro) SDK 的特性包括：

- 基于 CPP，适用于各种嵌入式系统和平台
- 提供简单而强大的 API 用于模型调用和推理
- 支持 TFLite 模型


:::tip
更多示例即将推出，敬请关注。
:::