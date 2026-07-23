---
description: Reachy Mini无线版设置指南，包括组装说明、首次启动、Wi-Fi配置、系统更新和SSH访问。
title: Reachy Mini无线版设置指南
slug: /reachymini_platforms_reachy_mini_get_started
keywords:
  - wireless
  - setup
  - assembly
  - wi-fi
  - first boot
  - configuration
  - ssh
  - update
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/cn/reachymini_platforms_reachy_mini_get_started/
---

# Reachy Mini（无线版）- 设置指南

**Reachy Mini（无线版）**是由Raspberry Pi Compute Module 4（CM4）驱动的自主版本。它使用内部电池和Wi-Fi连接独立运行。

## 1. 🔧 组装

Reachy Mini以套件形式提供。构建它是您旅程的第一步！

* **所需时间：** 2到3小时。
* **工具：** 一切都包含在盒子中。
* **说明：** 我强烈建议随手册一起观看视频指南。

:::tip 专业提示
我们强烈建议将**在线指南**或**组装视频**与纸质手册一起打开（见下文）。在线版本包括每个步骤的短视频片段，这使组装更容易理解。
:::

| **📖 交互式数字指南** | **📺 完整组装视频** |
| :---: | :---: |
| [![组装指南](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/digital_assembly_guide_preview_mini.jpg)](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)<br/>[**打开分步指南**](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)<br/>*（包括短视频循环）* | [![在YouTube上观看](https://img.youtube.com/vi/WeKKdnuXca4/maxresdefault.jpg)](https://www.youtube.com/watch?v=WeKKdnuXca4)<br/>[**在YouTube上观看**](https://www.youtube.com/watch?v=WeKKdnuXca4)<br/>*（每个步骤都有部分）* |

## 2. 🛜 首次启动和Wi-Fi配置

组装完成后，您需要将机器人连接到您的Wi-Fi网络。

1. **开机：** 打开您的Reachy Mini。
2. **下载Reachy Mini Control：** 如果您还没有下载，请从[官方网站](https://hf.co/reachy-mini/#/download)下载并安装**Reachy Mini Control**应用。
3. **运行应用：** 打开**Reachy Mini Control**并点击底部链接**"首次连接..."**。
![首次连接](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/first-setup-wifi-1.png)
4. **按照说明操作：** 应用将引导您完成连接过程。它会要求您连接到机器人的Wi-Fi AP，然后配置您的Wi-Fi。
![配置您的WiFi](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/first-setup-wifi-2.png)

## 3. 🔄 更新系统

在继续之前，强烈建议将您的机器人更新到最新版本。

1. 使用**Reachy Mini Control**连接到您的机器人。
2. 连接后，点击**"⚙️"**设置标签。
![设置标签](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-settings.png)
3. 进入**系统更新**部分。
![系统更新部分](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-update.png)
4. **安装：** 如果有新版本可用，请按照屏幕上的说明进行安装。

## 4. 🕹️ 下一步：使用机器人

现在您的机器人已上线并保持最新，您可以开始控制它！

👉 **[进入使用指南](/reachymini_platforms_reachy_mini_usage)**了解如何：
* 使用**Reachy Mini Control**。
* 安装和运行**应用**（如对话或游戏）。
* 使用**Python**对Reachy进行编程。

## 5. 💻 高级：通过SSH直接连接到内部Raspberry Pi

如果您需要通过SSH连接到Reachy Mini的内部Raspberry Pi，凭证是：

```
用户名：pollen
密码：root
```

通过SSH连接后，您可以使用以下命令检查Raspberry Pi和机器人设置的完整性：

```bash
reachyminios_check
```

## ❓ 故障排除

遇到问题了吗？👉 **[查看故障排除和常见问题指南](/reachymini_troubleshooting)**

## 专家模式

如果您需要从头重新安装Raspberry Pi或创建自定义镜像，请按照专家指南操作。

**[重新刷新ISO](/reachymini_platforms_reachy_mini_reflash_the_rpi_iso)**

**[从特定分支安装守护进程](/reachymini_platforms_reachy_mini_install_daemon_from_branch)**

**[开发工作流](/reachymini_platforms_reachy_mini_development_workflow)** - 在无线Reachy Mini上开发和测试代码的最佳实践