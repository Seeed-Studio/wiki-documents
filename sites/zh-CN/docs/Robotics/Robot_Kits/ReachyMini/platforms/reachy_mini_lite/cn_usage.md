---
description: Reachy Mini Lite使用指南，涵盖桌面应用仪表板、快速操作演示、应用安装和Python SDK快速入门。
title: 使用Reachy Mini Lite
slug: /reachymini_platforms_reachy_mini_lite_usage
keywords:
  - usage
  - dashboard
  - desktop app
  - applications
  - demos
  - python
  - sdk
  - control
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/reachymini_platforms_reachy_mini_lite_usage/
---

# 使用Reachy Mini Lite

现在您的机器人已连接，以下是如何与它交互。您可以使用**Reachy Mini Control**直观地控制它，或使用**Python**编程控制。

如果您尚未安装应用，请参阅[此指南](/reachymini_platforms_reachy_mini_lite_get_started)。

## 1. Reachy Mini Control 🖥️

**Reachy Mini Control**是您机器人的桌面应用。它允许您检查机器人的状态、更新系统和管理应用。

打开**Reachy Mini Control**并通过USB连接您的机器人。连接后，您将看到有关机器人的实时信息。

* **状态和可视化器（左侧面板）：**
    * **3D视图：** 显示机器人的实时位置。
    * **就绪/未就绪：** 指示机器人是否通过USB正确连接。
    * **传感器：** 监控麦克风输入和扬声器音量。
    * **日志：** 在底部查看技术细节和连接事件。

### 功能

* 使用*控制器*标签控制**头部**和**天线**。

![控制器标签](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-controller.png)

* 使用**表情**玩耍：让您的机器人开心、悲伤、愤怒等，使用内置表情。

![表情标签](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-expressions.png)

## 2. 应用 📱

Reachy Mini可以运行"应用"——为机器人打包的自主行为（如对话演示、游戏或舞蹈）。

### 如何使用应用
1.  **浏览：** 在Reachy Mini Control的*应用*标签中点击"发现应用"。这将打开Hugging Face Spaces生态系统，您可以找到与您的机器人兼容的应用。
2.  **安装：** 在应用上点击"安装"按钮，将其添加到您的机器人。
3.  **启动：** 在已安装的应用上点击"开始▶️"按钮。机器人将立即开始行为。
4.  **停止：** 点击"停止"⏹️按钮停止应用。

> **注意：** 当应用运行时，它会控制机器人。您无法在应用活动时运行Python脚本。

## 3. 编码快速入门 🐍

准备好编写您自己的逻辑了吗？Reachy Mini通过简单的Python SDK控制。

👉 **[进入SDK文档](/reachymini_sdk_readme)**获取完整概述。

## ❓ 故障排除

遇到问题了吗？👉 **[查看故障排除和常见问题指南](/reachymini_troubleshooting)**