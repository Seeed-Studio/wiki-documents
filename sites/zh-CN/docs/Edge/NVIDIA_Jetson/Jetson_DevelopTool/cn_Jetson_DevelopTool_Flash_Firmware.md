---
description: 使用 Seeed Jetson DevelopTool 中的 Flash Center，将 JetPack 固件刷写到 Seeed Studio Jetson 设备的分步指南。
title: 刷写固件
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - Flash Center
  - JetPack
  - firmware flash
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_flash_firmware
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/cn/jetson_developtool_flash_firmware/
---

**Flash Center** 模块让你可以通过单一工作流，将官方 JetPack 固件下载并刷写到任意受支持的 Seeed Studio Jetson 设备上——无需使用命令行 BSP 脚本。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-flash-center.png" style={{width:800, height:'auto'}}/></div>

## 演示：完整刷机教程

<div style={{textAlign:'center'}}>
  <video width="800" controls>
    <source src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/flash-firmware-tutorial-en.mp4" type="video/mp4"/>
  </video>
</div>

## 开始之前

- 强烈建议使用原生 Linux 主机（Ubuntu 20.04/22.04/24.04）。USB Recovery 模式的设置请参考 [连接设备](/cn/jetson_developtool_connect_device)。
- 请确保至少有 **20 GB** 的可用磁盘空间，用于固件下载和解压。

## 刷写流程

**步骤 1. 选择你的设备和 L4T 版本。**

在 **Flash Center** 选项卡中，从下拉菜单中选择你的设备型号（例如 `J4012s`）和目标 L4T 版本。完整兼容列表请参见 [支持的设备](/cn/jetson_developtool_supported_devices)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/flash-step1-select-device.png" style={{width:800, height:'auto'}}/></div>

**步骤 2. 下载并校验固件。**

点击 **Download / Extract BSP**。该工具将会：

- 以支持断点续传的方式下载固件包（中断后可安全继续）
- 通过 SHA256 校验和验证下载完整性
- 自动解压 BSP

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/flash-step1-prepare-bsp.png" style={{width:800, height:'auto'}}/></div>

**步骤 3. 将设备置于 Recovery 模式。**

在将 USB-C 线连接到主机电脑（或开机）时，按住设备上的 **Recovery** 按钮。约 2 秒后松开。

**步骤 4. 检测设备。**

在工具中点击 **Detect Device**。你应当能看到通过 USB 检测到的设备。如果未发现设备，请重新检查 USB 线缆和 Recovery 模式的操作步骤。

**步骤 5. 开始刷写。**

点击 **Start Flash**。该过程大约需要 **2–10 分钟**，具体取决于固件大小和 USB 速度。刷写过程中请勿断电或拔掉 USB。

完成后，设备会自动重启并进入新的固件系统。

:::tip
如果你在 Windows 上使用该工具且 USB 检测失败，请尝试 WSL2 + usbipd 的工作流。工具会引导你将 USB 设备附加到 WSL2。
:::

:::caution
刷写操作会清除 Jetson 上 eMMC/NVMe 中的所有数据。请在继续之前备份重要数据。
:::

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
