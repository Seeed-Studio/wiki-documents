---
description: Seeed Studio XIAO nRF52840 与 PlatformIO
title: XIAO nRF52840-Sense 与 PlatformIO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/nRF52840_PlatformIO/1.png
slug: /cn/xiao_nrf52840_with_platform_io
last_update:
  date: 08/14/2024
  author: Jason
---

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/nRF52840_PlatformIO/1.png" /></div>

# **Seeed Studio XIAO nRF52840 与 PlatformIO**

PlatformIO 是一个集成了多种开发板类型的开发平台，具有良好的可扩展性。如果平台没有您需要的类型，您可以手动添加开发板类型。您在 Arduino 上编写的代码可以使用它，只需添加相应的库即可。

在本教程中，我们将介绍如何在 PlatformIO 中安装和运行示例代码。

## 在 XIAO nRF52840 上使用 PlatformIO

### 步骤 1. 从官方网站安装 [PlatformIO](https://platformio.org/platformio-ide)

如果您尚未安装 PlatformIO 软件，可以点击上面的链接。

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
在此之前，我已经安装了 XIAO ESP32C6 和 XIAO nRF52840 安装包，所以您可以看到操作二中的图像有 XIAO ESP32C6 和 XIAO nRF52840 的选项，但您在执行操作时没有这些选项
:::

### 步骤 3. 修改 platformio.ini 文件

当您成功创建 PlatformIO 文件后，左侧栏会出现许多文件。我们可以看到一个名为 platform.ini 的文件。接下来，我们需要替换其中的内容
<table align="center">
  <tr>
      <th>操作三</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/platformIO_file.jpg" /></div>
  </tr>
</table>

您需要复制以下代码并替换 platform.ini 文件中的内容

```
[env:seeed_xiao_nrf52840_sense]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-afruitnrf52-nrf52840
framework = arduino
```
:::tip
记住保存文件，按 ctrl+s，它会开始加载
:::

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