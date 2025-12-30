---
description: 为您的 SenseCAP Watcher Agent 刷写固件的指南
title: 视觉触发和 AI 刷写
sidebar_position: 4
keywords:
- SenseCAP
- Watcher
- Agent
- Firmware
- Flash
- Visual
- Activate
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /cn/visual_trigger_and_ai_flash
last_update:
  date: 12/04/2025
  author: Twelve
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 在 SenseCAP Watcher 上刷写 AI 模型

## 概述

特别感谢 [XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) 的开源贡献，使这个项目成为可能。

本指南重点介绍如何为 SenseCAP Watcher 刷写视觉识别触发对话固件，以及如何替换或更新设备上的 AI 模型。这是一个针对这些操作的实践指导指南。

有关 Watcher 功能、应用和用例的完整介绍，请参考：[SenseCAP Watcher - 主动与世界交互的 AI 助手](https://wiki.seeedstudio.com/cn/solutions/hello_watcher_llms/)

## 前提条件

### 所需硬件

- SenseCAP Watcher 设备  
- USB Type-C 数据线  
- Windows PC  

## 固件刷写过程

<Tabs>
<TabItem value="sensecraft" label="SenseCraft AI 官网(仅英文版)" default>

<!-- :::caution Note
The following guide is for an internal testing website that has not yet been released.
The official version will be available soon.
Please use another method to flash the firmware for now.
::: -->

- 前提条件

  - [SenseCraft AI 平台](https://sensecraft.seeed.cc/ai/home)

- 步骤 1. 打开我们的平台并在工作区中选择 SenseCAP Watcher

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI1.png" style={{width:800, height:'auto'}}/></div>

- 步骤 2. 通过串口连接到我们的平台

  -  点击 `Connect` 

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI2.png" style={{width:800, height:'auto'}}/></div>

  - 选择正确的串口（以 "A" 结尾）

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI3.png" style={{width:500, height:'auto'}}/></div>

  :::note
  如果你正在使用Linux或macOS操作系统，请选择较小号的串口端口
  :::

  - 点击 `Connect`

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI4.png" style={{width:500, height:'auto'}}/></div>

- 步骤 3. 检查并更新设备版本

  - 点击 `Update`

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI9.png" style={{width:500, height:'auto'}}/></div>

  - 选择正确的串口（以 "B" 结尾）
  :::note
  如果你正在使用Linux或macOS操作系统，请选择较大号的串口端口
  :::

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI10.png" style={{width:500, height:'auto'}}/></div>

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div> 

  - 点击 'Connect'

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI11.png" style={{width:500, height:'auto'}}/></div>

  - 选择您要刷写的版本并点击 `Confirm`

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI12.png" style={{width:500, height:'auto'}}/></div>

  - 等待更新和重启过程

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI13.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value="flasher1" label="Flash Download Tool 烧录工具">

- 前提条件

  - **视觉触发固件 v2.0.4**：[下载链接](https://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/merged-binary-cn.bin)

  - [Flash Download Tool](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip)（3.9.6 或更高版本）

- 步骤 1. 连接设备（设备底部的 Type-C 端口）并打开您的 Flash Download Tool

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting1.jpg" style={{width:300, height:'auto'}}/></div>

- 步骤 2. 配置固件设置

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting2.jpg" style={{width:600, height:'auto'}}/></div>

- 步骤 3. 选择 COM 端口和刷写设置

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting4.jpg" style={{width:500, height:'auto'}}/></div>

  - 如果点击 START 后刷写没有开始，请点击 STOP 并确认您已选择以 "B" 结尾的 COM 端口。
    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>

- 步骤 4. 擦除和刷写
  - 点击 `ERASE` 按钮清除现有固件
  - 等待擦除过程完成
  - 点击 `START` 按钮开始刷写
  - 您应该在日志窗口中看到进度信息
  - 如果没有进度显示或失败，请尝试其他 COM 端口

- 步骤 5. 验证成功

  - 当您在日志窗口中看到成功消息时，刷写过程就完成了。

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish1.jpg" style={{width:300, height:'auto'}}/></div>

- 步骤 6. 重启设备

  - 找到您的 Watcher 设备上的复位孔
  - 使用针轻轻按下复位按钮
  - 设备将使用新固件重启

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:300, height:'auto'}}/></div>

</TabItem>

<TabItem value="flasher2" label="命令行" default>

- 前提条件

  - **视觉触发固件 v2.0.4**：[下载链接](https://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/merged-binary-cn.bin)

  - [esptool.py](https://github.com/espressif/esptool)

- 步骤 1. 解压下载的固件包并使用 esptool.py 执行刷写

  ```shell
  esptool.py -p /dev/ttyACM0 -b 2000000 write_flash 0 merged-binary.bin
  ```
  *（注意：根据您的系统调整端口 `/dev/ttyACM0`，例如 Windows 上的 `COM3`）*

- 步骤 2. 重启设备

  - 找到您的 Watcher 设备上的复位孔
  - 使用针轻轻按下复位按钮
  - 设备将使用新固件重启

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:300, height:'auto'}}/></div>

</TabItem>

<TabItem value="compile" label="从源码编译（开发者）">
- 前提条件

  - [ESP-IDF v5.5.1](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html#manual-installation)

  - [开源仓库（小智 AI 合作）](https://github.com/Wvirgil123/xiaozhi-esp32/tree/main)

- 步骤 1. 打开 ESP-IDF CMD 并导航到项目文件夹
  ```shell
  cd xiaozhi-esp32
  ```

- 步骤 2. 设置目标芯片
  ```shell
  idf.py set-target esp32s3
  ```

- 步骤 3. 打开配置菜单
  ```shell
  idf.py menuconfig
  ```

- 步骤 4. 将板型设置为 SenseCAP Watcher

  - 选择小智助手

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig1.png" style={{width:700, height:'auto'}}/></div>

  - 选择板型

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig2.png" style={{width:700, height:'auto'}}/></div>

  - 选择 SenseCAP Watcher

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig3.png" style={{width:700, height:'auto'}}/></div>

- 步骤 5. 根据您的需求配置其他设置（可选）

  - 默认显示语言和 AEC（自动回声消除/语音中断处理）

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig4.png" style={{width:700, height:'auto'}}/></div>

  - 唤醒词和触发器

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig5.png" style={{width:700, height:'auto'}}/></div>

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig6.png" style={{width:700, height:'auto'}}/></div>

  - 其他特定于您应用的可选参数

  - 完成配置后，保存并退出菜单

- 步骤 7. 构建和刷写固件
  ```shell
  idf.py build flash
  ```

</TabItem>
</Tabs>

:::note
v1.8.8 以上版本的固件才有视觉识别唤醒的功能。
v2.0.3 以上版本的固件需要对小智说 "打开推理开关" 来启用视觉识别唤醒功能。
:::

## AI 模型刷写过程

### 前提条件
- [SenseCraft AI 平台](https://sensecraft.seeed.cc/ai/home)

### 步骤 1. 打开我们的平台并在工作区中选择 SenseCAP Watcher

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI1.png" style={{width:800, height:'auto'}}/></div>

### 步骤 2. 通过串口连接到我们的平台

-  点击 `Connect` 
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI2.png" style={{width:800, height:'auto'}}/></div>

- 选择正确的串口（以 "A" 结尾）
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI3.png" style={{width:500, height:'auto'}}/></div>

:::note
如果你正在使用Linux或macOS操作系统，请选择较小号的串口端口
:::

- 点击 `Connect`
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI4.png" style={{width:500, height:'auto'}}/></div>

### 步骤 3. 查看现有模型并更换新模型

- 查看模型名称和模型版本

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI5.png" style={{width:500, height:'auto'}}/></div>

- 点击 `Select Model...` 并点击您想要刷写的模型

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI6.png" style={{width:500, height:'auto'}}/></div>

- 点击 `Confirm`

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI7.png" style={{width:500, height:'auto'}}/></div>

### 步骤 4. 预览效果并调整参数

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI8.png" style={{width:400, height:'auto'}}/></div>

此外，您可以通过与智能体对话来调整参数

当前的视觉唤醒功能提供以下配置选项：

- **目标ID** (`target`): 指定需要检测的目标ID。该ID取决于使用的视觉模型，默认值为0。

- **检测持续时间** (`duration`): 单位为秒，用于调整视觉唤醒的灵敏度。默认值为1秒（此默认不包括1秒的去抖动处理）。

- **置信度阈值** (`threshold`): 视觉模型识别物体的最低置信度，用于调整检测灵敏度。以百分比表示，默认值为75%。

- **冷却时间** (`interval`): 单位为秒，表示一次对话结束后需要等待的时间，防止同一物体频繁打断。默认值为8秒。

例如，您可以通过修改**置信度阈值参数**来调整模型的灵敏度。如果您觉得当前的阈值过于严格，可以对Watcher说：“请将置信度阈值设置为60%”。


## 故障排除

### 常见问题

1. **未检测到 COM 端口**
   - 确保您使用的是底部的 Type-C 端口
   - 尝试使用不同的 USB 线缆
   - 检查 USB 驱动程序是否正确安装

2. **刷写失败**
   - 刷写 Himax 时，选择以"A"结尾的 COM 端口。
   - 刷写 ESP32-S3 时，选择以"B"结尾的 COM 端口。

3. **设备无响应**
   - 使用针轻轻按下复位按钮
   - 尝试在刷写前先擦除

4. **设备无法通过视觉检测唤醒**
   - 检查串口输出中是否有相关的日志消息。
   - 固件版本高于 v2.0.3 需要对小智说"打开推理开关"来启用此功能。

5. **串口显示视觉识别日志但设备仍无法唤醒**
   - 前往 SenseCraft AI 平台并将 Person 模型刷写到 AI 芯片。

## Q&A

**提问: 我可以烧录其他的AI视觉模型进入Himax芯片中吗？**

回答: 目前仅支持烧录人脸和人物的视觉模型，其他的模型的烧录请等待AI官网更新。

## 技术支持

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>