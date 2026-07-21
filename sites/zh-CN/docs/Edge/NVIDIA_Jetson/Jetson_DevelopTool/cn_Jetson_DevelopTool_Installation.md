---
description: 如何在 Ubuntu 或 Windows 上使用 pip 或从源码安装并启动 Seeed Jetson DevelopTool。
title: 安装
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - 安装
  - pip
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_installation
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/cn/jetson_developtool_installation/
---

## 环境要求

| 项目 | 要求 |
|------|-------------|
| 主机操作系统 | Ubuntu 20.04 / 22.04 / 24.04，或 Windows 10/11 |
| Python | 3.8 或更高版本 |

## 选项 1 — 通过 pip 安装（推荐）

```bash
pip install seeed-jetson-developer
```

然后启动图形界面（GUI）：

```bash
seeed-jetson-developer
```

## 选项 2 — 从源码安装

```bash
git clone https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool.git
cd Seeed-Jetson-DevelopTool
pip install .
```

安装完成后启动：

```bash
seeed-jetson-developer
```

## 选项 3 — 直接运行（无需安装）

如果你更倾向于在不安装的情况下直接运行：

```bash
git clone https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool.git
cd Seeed-Jetson-DevelopTool
pip install PyQt5 paramiko requests
python3 run_v2.py
```

## 验证安装

启动后，主窗口应显示，并且可以看到全部 8 个模块标签页。如果窗口没有打开，请检查是否已安装 PyQt5：

```bash
pip show PyQt5
```

:::tip
在 Ubuntu 上，如果你遇到 `cannot connect to X server` 之类的显示错误，请确保你正在图形桌面会话中运行，而不是在没有 X 转发的 SSH 终端中运行。
:::

## 后续步骤

- [连接你的设备 →](/cn/jetson_developtool_connect_device)
- [烧录固件 →](/cn/jetson_developtool_flash_firmware)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
