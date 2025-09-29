---
description: Seeed Studio XIAO ESP32C6 与 PlatformIO
title: XIAO ESP32C6 与 PlatformIO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/esp32c6_circuitpython/title.png
slug: /cn/xiao_esp32c6_with_platform_io
last_update:
  date: 08/13/2024
  author: Jason
---

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_platformio/7.png" /></div>

## PlatformIO 介绍

PlatformIO 是一个集成了多种类型开发板的开发平台，具有良好的可扩展性。如果平台没有您需要的类型，您可以手动添加开发板类型。您在 Arduino 上编写的代码可以在其上使用，只需添加相应的库即可。

在本教程中，我们将介绍如何在 PlatformIO 中安装并运行示例代码。

## 在 XIAO ESP32C6 上使用 PlatformIO

### 步骤 1. 从官方网站安装 [PlatformIO](https://platformio.org/platformio-ide)

如果您还没有安装 PlatformIO 软件，可以点击上面的链接。

### 步骤 2. 在 PlatformIO 中创建任意项目

由于平台已经有我们的 XIAO ESP32S3 和 XIAO ESP32C3 开发板选项，我们可以选择其中一个来创建我们的文件。当然，其他文件也可以，没关系。项目名称也可以任意选择。这里我以 XIAO ESP32 C3 为例。

<table align="center">
  <tr>
      <th>操作一</th>
        <th>操作二</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_platformio/4.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_platformio/3.png" style={{width:700, height:'auto'}}/></div></td>
  </tr>
</table>

:::tip
在此之前，我已经安装了 XIAO ESP32C6 安装包，所以您可以看到操作二的图像中有 XIAO ESP32C6 的选项，但您在执行操作时没有这个选项
:::

### 步骤 3. 修改 platformio.ini 文件

当您成功创建 PlatformIO 文件后，左侧栏会出现许多文件。我们可以看到一个名为 platform.ini 的文件。接下来，我们需要替换其中的内容。
<table align="center">
  <tr>
      <th>操作三</th>
  </tr>
  <tr>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/platformIO_file.jpg" /></div>
  </tr>
</table>

您需要复制以下代码并替换 platform.ini 文件中的内容

```
[env:seeed_xiao_esp32_c6]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-c6
framework = arduino
```
:::tip
记得保存文件，按 ctrl+s，它会开始加载
:::

### 步骤 4. 编译和烧录

<table align="center">
  <tr>
      <th>操作四</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c6_platformio/setup3.png" /></div>
  </tr>
</table>

最后，如果您得到与下图相同的结果，这意味着您已成功添加了 XIAO ESP32C6 开发板。当您再次创建项目时，就会有 XIAO ESP32C6 选项。

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