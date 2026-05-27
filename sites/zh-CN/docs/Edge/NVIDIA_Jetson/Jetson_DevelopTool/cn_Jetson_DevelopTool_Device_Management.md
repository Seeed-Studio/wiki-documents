---
description: 在 Seeed Jetson DevelopTool 中使用 Device Management 模块运行诊断、检测外设并监控设备实时状态。
title: 设备管理
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - device management
  - diagnostics
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_device_management
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/cn/jetson_developtool_device_management/
---

**Device Management** 模块提供了一个快速仪表盘，用于了解已连接 Jetson 设备的当前状态——硬件诊断、外设检测以及实时系统指标——且无需打开终端。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-devices.png" style={{width:800, height:'auto'}}/></div>

## 连接设备

在连接面板中输入 Jetson 的 IP 地址、SSH 用户名和密码，然后点击 **Connect**。有关网络设置的详细信息，请参阅 [Connect Device](/cn/jetson_developtool_connect_device)。

## 功能特性

### 系统信息

连接成功后，仪表盘会显示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/devices-info-cards.png" style={{width:800, height:'auto'}}/></div>

| 信息 | 描述 |
|------|-------------|
| 设备型号 | 例如 reComputer Super J4012s |
| JetPack / L4T 版本 | 当前固件版本 |
| CPU 使用率 | 各核心实时利用率 |
| GPU 使用率 | 当前 GPU 负载百分比 |
| 内存 | 已用 / 总 RAM |
| 磁盘 | 已用 / 总存储空间 |
| 温度 | CPU、GPU 和主板热区温度 |

### 外设检测

点击 **Detect Peripherals** 扫描已连接的硬件：

- USB 设备（摄像头、Wi-Fi 适配器、存储设备）
- NVMe / M.2 硬盘
- 显示输出
- GPIO / I2C / SPI 接口

### 快速诊断

点击 **Run All Checks** 运行一键健康检查。该工具会自动检查 Network、GPU / Torch、Docker、jtop、USB Camera、Boot Disk 以及其他关键组件，并以内联方式显示每项结果的通过 / 失败状态以及快速修复入口。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/devices-diagnostics-full.png" style={{width:800, height:'auto'}}/></div>

### 外设检测

点击 **Peripherals Only** 扫描已连接的硬件——USB-WiFi、5G 模组、蓝牙、NVMe SSD、摄像头以及 HDMI 显示器——而无需运行完整诊断套件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/devices-peripherals.png" style={{width:800, height:'auto'}}/></div>

### 安装 PyTorch

如果 **GPU / Torch** 检查显示 "Not installed"，点击 **Install PyTorch** 按钮打开安装向导。该工具会自动检测你的 JetPack 版本并选择匹配的 NVIDIA PyTorch wheel。你也可以选择 Python 目标环境（系统 Python 或新的 Miniforge conda 环境）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/devices-install-pytorch.png" style={{width:600, height:'auto'}}/></div>

点击 **Start Install** 开始安装。安装过程在后台运行——点击 **Run in Background** 可在安装完成前继续使用该工具。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
