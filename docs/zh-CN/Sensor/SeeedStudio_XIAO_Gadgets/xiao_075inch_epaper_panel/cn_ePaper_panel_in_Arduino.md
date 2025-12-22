---
description: XIAO ESP32C3 驱动的 7.5 英寸电子墨水显示屏是一个紧凑、节能的解决方案，可通过 Arduino 展示数据。
title: 与 Arduino 配合使用
keywords:
- ePaper display
- arduino
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/cover2.webp
slug: /cn/xiao_075inch_epaper_panel_arduino
sidebar_position: 3
last_update:
  date: 03/26/2025
  author: Allen
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/203.png" style={{width:900, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
</div>

## 概述

XIAO 7.5" 电子纸面板可以使用 Arduino IDE 进行编程，这使得熟悉 Arduino 生态系统的制造商和开发者能够轻松使用。本指南将引导您设置 Arduino 开发环境并开始使用基本示例。

电子纸面板的特点：

- 7.5" 单色电子纸显示屏，分辨率为 800x480
- XIAO ESP32-C3 微控制器，支持无线连接
- 内置 2000mAh 电池，便于携带使用
- USB Type-C 接口，用于编程和供电
- 紧凑设计，集成支架

通过 Arduino 编程，您可以：

- 显示文本和图形
- 创建自定义用户界面
- 显示实时数据和传感器读数
- 构建交互式应用程序
- 利用电子纸的零功耗保持特性实现低功耗应用

本指南涵盖了初始设置过程，并提供示例代码来帮助您开始为电子纸面板开发自己的 Arduino 应用程序。

## 入门指南

### 步骤 1. 下载 Arduino IDE

首先，如果您还没有 Arduino IDE，请前往 [Arduino IDE](https://www.arduino.cc/en/software) 下载最新版本。

:::tip
如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 步骤 2. 安装 ESP32 开发板支持

转到 **文件** -> **首选项**，并将以下 URL 添加到 **附加开发板管理器网址**，[点击此处查看详细步骤。](http://localhost:3000/XIAO_ESP32C3_Getting_Started/#software-setup)

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

### 步骤 3. 安装 Seeed GFX 库

:::tip
此库与 TFT 库具有相同功能，但不兼容。如果您已安装 TFT 库或其他类似的显示库，请先卸载它们。
:::

从 GitHub 下载并安装 Seeed GFX 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>点击此处下载</button></p>
</a>
</div>

向下滚动并打开此链接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

选择您的设备类型，它将生成一些代码。复制这些代码，我们稍后会使用它们。

:::tip
如果您选择错误，屏幕将不显示任何内容。

所以请确保您的设备或组件类型正确。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix6.jpg" style={{width:800, height:'auto'}}/></div>

下载库后，转到 **Sketch** -> **Include Library** -> **Add .ZIP Library** 并选择下载的库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

有 4 个基本示例，打开您喜欢的基本示例：

1. Bitmap：显示位图图像。
2. Clock：显示时钟。
3. Clock_digital：显示数字时钟。
4. Shape：随机显示不同大小的文字和形状。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

### 步骤 4. 上传代码

创建一个**新的 "driver.h" 文件**并将这些代码粘贴到其中。代码应该如下所示：

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DRIVER_BOARD
```

之后，转到 **Tools** -> **Board** -> **XIAO ESP32C3** 和 **Tools** -> **Port** -> **选择您的开发板连接的端口**。然后点击 **Upload** 上传代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix7.jpg" style={{width:800, height:'auto'}}/></div>

现在您将在电子纸屏幕上看到反馈！以下是位图和时钟示例的结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/56.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/57.png" style={{width:800, height:'auto'}}/></div>

## 资源

- **[STP]**: [3D 模型外壳](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [电子纸驱动板原理图 PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
