---
description: SenseCAP Watcher 的操作指南。
title: 操作指南
image: https://files.seeedstudio.com/wiki/watcher_getting_started/0_1.webp
slug: /cn/watcher_operation_guideline
sidebar_position: 2
last_update:
  date: 10/18/2024
  author: Citric
---

# SenseCAP Watcher 操作指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/0.JPG" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcher 视频</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Github 仓库</font></span></strong>
    </a>
</div>

在 Wiki 的这一部分中，我们将为您提供有关 SenseCAP Watcher 操作逻辑、任务设置和设备功能使用的信息。

## 基本操作

请阅读此处以学习和了解 Watcher 的基本操作，以便您能够成功掌握使用 Watcher 的思路和方法。

### 开机

:::caution
请使用与 Watcher 兼容的电源插头；Watcher 必须使用 5V 电源供电，如果您使用不符合规格的电源适配器或电压大于 5V 的电源，可能会烧坏设备！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/adapter.jpg" style={{width:350, height:'auto'}}/></div>

上图显示了推荐的适配器规格。如果您不知道在哪里可以购买合适的适配器，您可以选择通过下面的链接直接购买。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/USB-Power-Adapter-for-Raspberry-Pi-4-5V-3A-p-4089.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>
:::

要开启您的 Watcher 设备，请按住位于右上角的滚轮按钮约 3 秒钟，直到屏幕上出现 Seeed Studio 标志。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_on.gif" style={{width:650, height:'auto'}}/></div>

<br />

一旦显示标志，松开按钮并让设备完成其初始化过程。几分钟后，Watcher 将显示其主菜单，表明它已准备好使用。

:::tip
如果设备长按后无法开机，设备可能电量不足，您可能需要连接电缆为其供电，然后才能唤醒 Watcher。
:::

### 关机

要关闭 Watcher，您需要访问设置菜单。使用滚轮按钮，导航到设置选项并按下按钮进入菜单。进入后，向下滚动到关机选项并按下滚轮按钮选择它。最后，从左到右滑动滑块以确认关机过程，Watcher 将关机。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_off.gif" style={{width:650, height:'auto'}}/></div>

:::tip
如果您的 Watcher 连接了电源线，设备的关机按钮会变成重启按钮，此时设备不允许关机。同样，关机的设备在连接电源线时会自动开机。
:::

在您的 Watcher 设备底部，您会发现一个小孔。这个孔提供了对硬件关机按钮的访问，允许您在需要时关闭设备。

要使用硬件按钮关闭您的 Watcher，请按照以下步骤操作：

1. 找到一个细尖的物体，如回形针或小针。

2. 小心地将尖锐物体插入 Watcher 底部的小孔中。

3. 轻轻按下孔内的关机按钮，您的 Watcher 将关机。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_off_button.gif" style={{width:650, height:'auto'}}/></div><br />

:::note
使用尖锐物体按下重置按钮时务必小心。要轻柔，避免施加过大的力以防止损坏设备。

请注意，执行硬件重置不会擦除存储在您的 Watcher 上的任何用户数据。重置操作旨在在出现任何软件相关问题或设备无响应时重启设备。

如果您遇到硬件重置无法解决的 Watcher 持续问题，您可能需要考虑通过设备设置菜单执行恢复出厂设置。但是，请记住恢复出厂设置将擦除所有用户数据，因此只应作为最后的手段使用。

请记住小心处理您的 Watcher，只在必要时使用硬件重置按钮，以确保设备的使用寿命和正常功能。
:::

### 操作逻辑

Watcher 的操作逻辑围绕滚轮按钮展开，它是导航和选择的主要方式。逆时针旋转滚轮按钮允许您在菜单中向上或向左移动，而顺时针旋转则使您能够向下或向右移动。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/logic.gif" style={{width:650, height:'auto'}}/></div>

<br />

要确认选择或进入子菜单，只需按下滚轮按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/enter.gif" style={{width:650, height:'auto'}}/></div>

<br />

但是，需要注意的是，在某些可能存在操作歧义的情况下，滚轮按钮的选择和确认逻辑可能会偏离这个标准。在这种情况下，触摸屏界面提供了另一种交互方式，允许您通过点击相应的屏幕元素来完成所需的操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/touch.gif" style={{width:650, height:'auto'}}/></div><br />

在整个Wiki中，将为每个菜单内的导航和选项选择提供具体说明，同时考虑到通用滚轮按钮逻辑的任何例外情况。通过熟悉滚轮按钮和触摸屏控制，您将能够高效地操作您的Watcher设备并访问其各种功能和设置。

### 按键通话

Watcher的按键通话功能允许您在任何屏幕或界面上使用语音命令与设备交互。只需按住位于设备右上角的滚轮按钮即可激活语音输入界面。按住按钮时，说出您的命令或消息，例如分配任务或发起对话。松开按钮后，Watcher将处理您的语音输入并做出相应响应。如果需要进一步澄清，请再次按住按钮以提供额外的语音输入。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif" style={{width:650, height:'auto'}}/></div><br />

:::tip
1. 目前语音对话仅支持使用英语。请注意，如果您使用其他语言，可能会出现意外情况。

2. 如果您在Watcher运行任务时开始对话，那么Watcher将首先暂停当前任务，然后在对话结束后重新进入您的原始任务。

3. 要了解如何分配任务，请先阅读**[如何为Watcher分配任务](https://wiki.seeedstudio.com/cn/getting_started_with_watcher_task/)**教程。
:::

## 功能概述

Watcher提供四个主要菜单选项：**任务模板**、**当前任务**、**扩展**和**设置**。这些菜单提供对设备各种特性和功能的访问。

### 任务模板

任务模板菜单包含一系列预配置的任务，可以直接使用。这些任务包括人体检测、宠物检测和手势检测。通过选择其中一个模板，您可以快速设置Watcher执行所需的任务，无需进行大量配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_templates.gif" style={{width:700, height:'auto'}}/></div>

### 当前任务

当前任务菜单选项提供了一种便捷的方式来访问和管理Watcher上正在运行的任务。如果您需要离开当前任务来调整设备设置（如音量、亮度或LED灯开关），您可以通过从主菜单中选择当前任务选项轻松返回到您的任务，确保无缝高效的用户体验。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/current_task.gif" style={{width:700, height:'auto'}}/></div>

### 扩展

扩展菜单目前在Watcher上可访问，作为显示来自特定范围连接的Grove传感器数据的中心，具体包括**[Grove SHT41](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT41-p-5383.html)**、**[Grove SHT40](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html)**和**[Grove SCD41](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html)**。

此功能允许用户一次将这些支持的Grove传感器之一与他们的Watcher设备无缝集成，实现传感器数据的实时监控和可视化。通过导航到扩展菜单，用户可以查看来自其连接传感器的数值和读数，使他们能够收集洞察并基于收集的数据做出明智的决策。

随着Watcher平台的持续发展，扩展菜单可能会扩展以包括对更广泛的Grove传感器阵列的支持以及额外的特性和功能，进一步增强设备的能力和用户体验。请关注有关扩展菜单未来增强功能的更新和公告。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/connect_grove.gif" style={{width:700, height:'auto'}}/></div>

### 设置

最后，设置菜单是您可以访问和修改Watcher常规设置的地方。此菜单提供自定义设备各个方面的选项，如显示亮度、音量、连接设置等。通过探索设置菜单，您可以根据自己的偏好调整Watcher的性能和行为，确保个性化的用户体验。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/settings.gif" style={{width:700, height:'auto'}}/></div>

## Watcher 设置

本指南将带您了解 Watcher 设备上的各种设置选项并解释其功能。

- **连接应用**：
   - 连接应用设置允许您在 Watcher 和配套移动应用程序之间建立连接。
   - 通过将 Watcher 连接到应用程序，您可以访问额外功能、远程控制功能，并在移动设备上接收通知。

- **Wi-Fi**：
   - Watcher 设备上的 Wi-Fi 设置显示当前连接的无线网络信息。
   - 如果没有配置网络，Wi-Fi 设置将不会显示任何信息。
   - 请注意，配置 Wi-Fi 网络只能通过配套移动应用程序完成，Watcher 设备本身不支持此功能。

- **蓝牙**：
   - 蓝牙设置允许您打开或关闭蓝牙功能。

- **声音**：
   - 声音设置让您调整 Watcher 的音频输出音量。
   - 您可以增加或减少音量以适应您的偏好或环境。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/sound_setting.gif" style={{width:650, height:'auto'}}/></div>

<br />

- **亮度**：
   - 亮度设置允许您控制 Watcher 显示屏的亮度级别。
   - 调整亮度可以帮助改善不同光照条件下的可见性并节省电池寿命。

- **RGB 灯**：
   - RGB 灯设置是一个切换开关，允许您打开或关闭 LED 指示灯。

- **关于设备**：
   - 关于设备部分提供有关您的 Watcher 的重要信息，如型号、固件版本和序列号。
   - 这些信息在故障排除或检查可用更新时很有帮助。

- **关机/重启**：
   - 关机/重启设置允许您重启或关闭 Watcher 设备，具体取决于电源。
   - 当 Watcher 连接到电源时，将显示"重启"选项，允许您重启设备。连接电源时不允许关机。
   - 当 Watcher 使用电池供电时，将提供"关机"选项，使您能够关闭设备。

- **恢复出厂设置**：
   - 恢复出厂设置选项将您的 Watcher 恢复到原始出厂设置。
   - 此操作将清除所有用户数据、偏好设置和配置，将设备恢复到默认状态。
   - 请谨慎使用此选项，因为它无法撤销，恢复出厂设置后您需要重新设置 Watcher。

通过熟悉这些设置选项，您可以自定义和优化您的 Watcher 体验以最好地满足您的需求。请记住，某些设置（如 Wi-Fi 和蓝牙配置）只能通过配套移动应用程序访问和修改。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

