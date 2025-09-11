---
description: 为您的 SenseCAP Watcher Agent 刷写固件的指南
title: 刷写 Watcher Agent 固件
sidebar_position: 1
keywords:
- SenseCAP
- Watcher
- Agent
- Firmware
- Flash
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /cn/flash_watcher_agent_firmware
last_update:
  date: 2025/09/04
  author: Twelve
---

# 刷写 Watcher Agent 固件

## 概述

特别感谢 [XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) 的开源贡献，使这个项目成为可能。

本指南提供了使用乐鑫 Flash Download Tool 为您的 SenseCAP Watcher 设备刷写 Watcher Agent 固件的说明。

:::danger 注意
本指南中提供的固件可能需要认证信息。如有需要，请联系 [sensecap@seeed.cc](mailto:sensecap@seeed.cc)。
:::

## 前提条件

### 所需硬件

- SenseCAP Watcher 设备
- USB Type-C 数据线
- Windows PC

### 所需软件

- [Flash Download Tool](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip) (3.9.6 或更高版本)
- [Watcher Agent 固件二进制文件](http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/watcher_agent_firmware.bin)

:::note
如果您已经拥有 Watcher 设备且其型号**不是 -EN**，您需要在刷写固件后手动刷写认证信息。
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/en_panel.jpg" style={{width:300, height:'auto'}}/></div>
详情请查看[刷写认证信息](#flashing-authentication-info)。
:::

## 刷写过程

### 步骤 1. 下载并安装 Flash Download Tool

1. 从乐鑫官方网站下载 Flash Download Tool：
   [Flash Download Tool v3.9.6](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip)
2. 将下载的 zip 文件解压到您选择的目录
3. 无需安装 - 只需双击可执行文件即可运行工具

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/flash%20download%20tool.jpg" style={{width:500, height:'auto'}}/></div>

### 步骤 2. 准备固件文件

1. 下载 Watcher Agent 固件[二进制文件](http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/watcher_agent_firmware.bin)
:::caution 注意
确保所有路径不包含特殊符号。
:::

### 步骤 3. 连接设备

1. 使用设备底部的 Type-C 端口将您的 Watcher 连接到计算机
2. 双击 `flash_download_tool_3.9.7.exe` 启动工具
3. 配置以下设置：
   - ChipType：选择 `ESP32-S3`
   - WorkMode：选择 `Develop`
   - LoadMode：选择 `UART`

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting1.jpg" style={{width:300, height:'auto'}}/></div>

### 步骤 4. 配置固件设置

1. 点击第一行的"..."按钮浏览并选择您下载的固件二进制文件
2. 确保固件文件旁边的复选框已选中
3. 在固件文件选择后的地址字段中输入 `0x0`

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting2.jpg" style={{width:600, height:'auto'}}/></div>

### 步骤 5. 选择 COM 端口和刷写设置

配置以下设置：

- SPI SPEED：80MHz
- SPI MODE：DIO
- FLASH SIZE：32Mbit
- COM：在设备管理器中，找到名称以"B"结尾的 COM 端口 — 选择此端口进行刷写。

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting4.jpg" style={{width:500, height:'auto'}}/></div>

:::note
如果点击 START 后刷写没有开始，请点击 STOP 并确认您已选择以"B"结尾的 COM 端口。
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>
:::

### 步骤 6. 擦除闪存

1. 点击 `ERASE` 按钮清除现有固件
2. 等待擦除过程完成

### 步骤 7. 刷写固件

1. 点击 `START` 按钮开始刷写
2. 您应该在日志窗口中看到进度信息
3. 如果没有进度显示或失败，请尝试其他 COM 端口

### 步骤 8. 验证成功

当您在日志窗口中看到成功消息时，刷写过程就完成了。

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish1.jpg" style={{width:300, height:'auto'}}/></div>

### 步骤 9. 重启设备

1. 找到您的 Watcher 设备上的复位孔
2. 使用针轻轻按下复位按钮
3. 设备将使用新固件重启

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:500, height:'auto'}}/></div>

## 故障排除

### 常见问题

1. **未检测到 COM 端口**
   - 确保您使用的是底部的 Type-C 端口
   - 尝试使用不同的 USB 线缆
   - 检查 USB 驱动程序是否正确安装

2. **烧录失败**
   - 尝试另一个 COM 端口
   - 检查地址 (0x0) 是否正确输入

3. **设备无响应**
   - 使用针轻轻按下复位按钮
   - 尝试在烧录前先擦除

### 烧录认证信息

如果您的 Watcher 型号**不是 -EN**，您必须在烧录固件后手动烧录认证信息。

**步骤：**

1. 检查您的设备 **MAC 地址**。
   - 您可以在产品标签上或通过串口找到它。
   - 如果您使用的是原生固件，您也可以在设备的**设置->关于设备->WI-FI Mac**中找到它。

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/en_panel.jpg" style={{width:300, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/mac.jpg" style={{width:600, height:'auto'}}/></div>
2. 发送邮件至 **sensecap@seeed.cc**，提供您的 STA MAC 地址并请求认证文件和烧录工具。此脚本将包含在我们发送给您的包中。
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools.jpg" style={{width:500, height:'auto'}}/></div>
3. 进入 esp-idf 终端并导航到我们发送给您的文件夹，运行 **Python 烧录脚本**。
:::note
如果您尚未安装 esp-idf，请访问 [ESP-IDF 网站](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/windows-setup.html) 并按照官方指南下载和安装。
:::
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/authentication_flash1.jpg" style={{width:500, height:'auto'}}/></div>
4. 按照程序说明输入相应的串口、serialB 并输入 ""BURN"" 进行烧录。
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/authentication_flash5.jpg" style={{width:800, height:'auto'}}/></div>
5. 过程完成后，按下设备上的复位按钮。
6. 完成上述步骤后，您将能够在 [SenseCraft AI-Watcher Agent 平台](https://sensecraft.seeed.cc/ai/watcher-agent) 上注册

:::note
如果您遇到以下问题，请进入 esp-idf 终端并导航到文件夹，手动输入以下两个命令：
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/authentication_flash4.jpg" style={{width:800, height:'auto'}}/></div>

```bash
espefuse.py -p <your_correct_serial_port> burn_block_data BLOCK_USR_DATA serial_number
espefuse.py -p <your_correct_serial_port> burn_key BLOCK_KEY0 license_key HMAC_UP
```

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/authentication_flash2.jpg" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/authentication_flash3.jpg" style={{width:800, height:'auto'}}/></div>
:::

## 技术支持

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
