---
description: 面向 XIAO 7.5" ePaper Panel 的端到端 Arduino 使用手册——针对 XIAO ESP32-C3 的 Arduino IDE 设置、Seeed_GFX 配置以及 Hello World 演示讲解。
title: Arduino 使用手册
keywords:
  - ePaper 显示屏
  - arduino
  - XIAO ESP32-C3
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/cover2.webp
slug: /xiao_075inch_epaper_panel_arduino
sidebar_position: 1
last_update:
  date: 04/28/2026
  author: Allen
createdAt: '2025-03-27'
updatedAt: '2026-04-28'
---

# Arduino 使用手册：XIAO 7.5" ePaper Panel

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/203.png" style={{width:900, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
</div>

:::tip 请先阅读主 Arduino 指南
本页面是**针对 XIAO 7.5" Panel 的专用使用手册**。通用的基础内容——Arduino IDE 设置、ESP32 开发板包、安装 `Seeed_GFX`、使用配置工具生成 `driver.h`——都在 **[Work with Arduino](/cn/epaper_work_with_arduino)** 中。如果你是第一次在 Seeed ePaper 上使用 Arduino，建议先快速浏览那一页；本页主要讲解基于 XIAO ESP32-C3 的面板与通用部分不同之处。
:::

## 概述

XIAO 7.5" ePaper Panel 可以通过 Arduino IDE 进行编程，非常适合熟悉 Arduino 生态的创客和开发者使用。本指南将带你完成 Arduino 开发环境的搭建，并从基础示例开始上手。

该 ePaper Panel 具备以下特性：

- 7.5" 单色 ePaper 显示屏，分辨率 800x480
- 搭载 XIAO ESP32-C3 微控制器，支持无线连接
- 内置 2000mAh 电池，便于便携使用
- USB Type-C 接口，用于编程和供电
- 结构紧凑，集成支架设计

通过 Arduino 编程，你可以：

- 显示文本和图形
- 创建自定义用户界面
- 显示实时数据和传感器读数
- 构建交互式应用
- 利用 ePaper 的零功耗保持特性实现低功耗应用

本指南涵盖初始的环境搭建流程，并提供示例代码，帮助你开始为 ePaper Panel 开发自己的 Arduino 应用。

## 入门

### 步骤 1. 下载 Arduino IDE

首先，如果你还没有安装 Arduino IDE，请前往 [Arduino IDE](https://www.arduino.cc/en/software) 下载最新版本。

:::tip
如果这是你第一次使用 Arduino，我们强烈建议你参考 [Getting Started with Arduino](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 步骤 2. 安装 ESP32 开发板支持

进入 **File** -> **Preferences**，在 **Additional Boards Manager URLs** 中添加以下 URL，[点击此处查看详细步骤。](http://localhost:3000/XIAO_ESP32C3_Getting_Started/#software-setup)

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

### 步骤 3. 安装 Seeed GFX 库

:::tip
此库与 TFT 库功能相同，但与其不兼容。如果你已经安装了 TFT 库或其他类似的显示库，请先卸载它们。
:::

从 GitHub 下载并安装 Seeed GFX 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Click here to download</button></p>
</a>
</div>

向下滚动并打开这个链接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

选择你的设备类型，它会生成一些代码。复制这些代码，我们稍后会用到。

:::tip
如果你选择错误，屏幕将不会显示任何内容。

所以请务必确认你的设备或元件类型。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix6.jpg" style={{width:800, height:'auto'}}/></div>

下载库之后，依次进入 **Sketch** -> **Include Library** -> **Add .ZIP Library**，然后选择刚刚下载的库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

这里有 4 个基础示例，打开一个你喜欢的基础示例：

1. Bitmap：显示位图图像。
2. Clock：显示时钟。
3. Clock_digital：显示数字时钟。
4. Shape：随机显示不同大小的文字和图形。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

### 步骤 4. 上传代码

创建一个**新的 "driver.h" 文件**，并将这些代码粘贴进去。代码应类似如下：

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DRIVER_BOARD
```

完成后，依次进入 **Tools** -> **Board** -> **XIAO ESP32C3** 和 **Tools** -> **Port** -> **选择你的开发板所连接的端口**。然后点击 **Upload** 上传代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix7.jpg" style={{width:800, height:'auto'}}/></div>

现在你就能在 ePaper 屏幕上看到反馈了！下面是 Bitmap 和 Clock 示例的显示效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/56.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/57.png" style={{width:800, height:'auto'}}/></div>

## 资源

- **[STP]**: [3D 模型外壳](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [ePaper 驱动板原理图 PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
