---
description: Grove 入门套件适用于 Azure Sphere MT3620 开发套件
title: Grove 入门套件适用于 Azure Sphere MT3620 开发套件
keywords:
- Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit.jpg)

该产品是一个适用于 [Azure Sphere MT3620 开发套件](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html) 的基础入门套件。该套件集成了 SeeedStudio 最受欢迎的即插即用模块——[Grove](https://www.seeedstudio.com/grove.html)，旨在帮助开发者快速入门并体验 Azure Sphere 解决方案。

Microsoft Azure Sphere 是一个用于创建高度安全、连接的 MCU 驱动设备的解决方案。Azure Sphere 将 Microsoft 在云、软件和芯片领域的专业知识结合在一起，提供了一种独特的安全方法，从芯片开始延伸到云端。Azure Sphere 认证的 MCU、Azure Sphere 操作系统和 Azure Sphere 安全服务共同为您提供信心和能力，重新构想您的业务并创造未来。

:::caution
请注意，Azure Sphere MT3620 开发套件是必需的，但不包含在此入门套件中。您可以在 [这里](https://www.seeedstudio.com/s/Azure%20Sphere%20MT3620.html) 购买。
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Starter-Kit-for-Azure-Sphere-MT3620-Development-Kit-p-3150.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## 特性

- Azure Sphere：物联网设备的端到端安全
- Microsoft Visual Studio 开发环境
- 设备生命周期的在线认证与更新

## 硬件概述

**MT3620 Grove 扩展板**

由于 [Azure Sphere SDK](http://aka.ms/AzureSphereSDK) 尚未支持 MT3620 上的 ADC 和 I2C，此扩展板充当 MT3620 UART 端口与外部 I2C 设备（如 I2C 温度传感器）之间的接口。扩展板的基本功能是帮助连接外部 I2C 设备。通过使用兼容 I2C 的 ADC 芯片，开发者还可以从模拟端口读取模拟数据。

[MT3620 Grove 扩展板](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html) 包含两个芯片，AD7992（模拟转 I2C）和 SC18IM700（I2C 转 UART），以从硬件方面实现 ADC 和 I2C 功能。因此，模拟传感器的信号通过 AD7992 和 SC18IM700 传输到开发板的 UART。I2C 传感器也通过 SC18IM700 传输到开发板的 UART。

[AD7992](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/AD7992.pdf) 是一个 12 位、低功耗、逐次逼近 ADC，具有 I2C 兼容接口。它将模拟信号 A0、A1 转换为 I2C 数据。

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/ADC_2_I2C.png)

[SC18IM700](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/SC18IM700.pdf) 设计为标准 UART 端口与串行 I2C 总线之间的接口，使微控制器或微处理器能够直接与其他 I2C 总线设备通信。它将 SDA/SCL 信号转换为 GPIO26_TXD0 和 GPIO28_RXD0。

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/I2C_2_UART.png)

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/MT3620_Grove_Shield-2018-09-11.png)

<div style={{textAlign: 'center'}}>MT3620 Grove 扩展板硬件概述</div>

**部件清单**

<table class="tg">
  <tr>
    <th class="tg-xldj">类别</th>
    <th class="tg-xldj">模块</th>
    <th class="tg-0pky">描述</th>
  </tr>
  <tr>
    <td class="tg-xldj">扩展板</td>
    <td class="tg-xldj">MT3620 Grove 扩展板</td>
    <td class="tg-0pky">提供 1 x UART，2 x I2C，1 x 模拟，4 x GPIO</td>
  </tr>
  <tr>
    <td class="tg-xldj" rowspan="2">模拟输入</td>
    <td class="tg-xldj">Grove - 旋转角度传感器</td>
    <td class="tg-0pky">生成模拟值，可通过 ADC 读取。</td>
  </tr>
  <tr>
    <td class="tg-xldj">Grove - 光传感器 v1.2</td>
    <td class="tg-0pky">测量光照强度</td>
  </tr>
  <tr>
    <td class="tg-0pky" rowspan="2">数字输出</td>
    <td class="tg-0pky">Grove – 蜂鸣器</td>
    <td class="tg-0pky">由数字信号驱动并发出音调</td>
  </tr>
  <tr>
    <td class="tg-0pky">Grove - 继电器</td>
    <td class="tg-0pky">由数字信号驱动并切换更高电压</td>
  </tr>
  <tr>
    <td class="tg-0pky">数字 I/O</td>
    <td class="tg-0pky">Grove - 蓝色 LED 按钮</td>
    <td class="tg-0pky">按钮作为输入，LED 作为输出设备</td>
  </tr>
  <tr>
    <td class="tg-0pky">传感器</td>
    <td class="tg-0pky">Grove - 温湿度传感器 (SHT31)</td>
    <td class="tg-0pky">收集温度数据，可通过 I2C 接口读取</td>
  </tr>
  <tr>
    <td class="tg-0pky">显示</td>
    <td class="tg-0pky">Grove - OLED 显示屏 1.12'' V2</td>
    <td class="tg-0pky">OLED 可显示字符和图片</td>
  </tr>
</table>

## 应用场景

- 家庭/建筑/设施
- 自动化
- 安全
- 设备管理
- 公用事业
- 公共安全

:::提示
要了解 Azure Sphere 在实际环境中的工作方式，请参考 [Contoso, Ltd 的场景](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere)。
:::

## 入门指南

### 前置条件

**安装 Azure Sphere**

如果您有尚未使用过的 Azure Sphere 开发套件，请首先完成[这些步骤](https://docs.microsoft.com/en-us/azure-sphere/install/overview)以开始使用。

**MT3620 Grove Shield 库**

这是 Azure Sphere MT3620 Grove Shield 的库，该扩展板通过添加 I2C 接口和模拟输入增强了 Azure Sphere。以下是如何使用 [MT3620 Grove Shield 库](https://github.com/Seeed-Studio/MT3620_Grove_Shield/blob/master/README.md)的[教程](https://github.com/Seeed-Studio/MT3620_Grove_Shield)。

### 模拟输入

以下是通过 MT3620 Base Shield 读取模拟信号的示例。

**硬件连接**

| MT3620 开发套件 | MT3620 Grove Shield | Grove - 旋转角度传感器 |
|------------------|-------------------------|-----------------------------|
|![图片](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![图片](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/mt3620groveshieldb_s.jpg)|![图片](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/rotation.jpg)|
|[立即购买](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[立即购买](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html)|[立即购买](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html)|

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/Rotation_shield.jpg)

- 第一步：将 Grove - 旋转角度传感器连接到 MT3620 Grove Shield 的模拟端口。
- 第二步：将 MT3620 Base Shield 插入 Azure Sphere MT3620 开发板。
- 第三步：将 USB 数据线连接到 Azure Sphere MT3620 开发板和 PC。

**软件**

- 第一步：下载 [MT3620 Grove Shield 库](https://github.com/Seeed-Studio/MT3620_Grove_Shield)
- 第二步：打开 MT3620 Grove Shield 下的 **Samples/GroveRotaryAngleSensor**
- 第三步：双击 **GroveRotaryAngleSensor.sln**
- 第四步：右键单击您的应用程序项目名称，选择 **Properties > C/C++ > General > Additional Include Directories**
- 第五步：点击 **下拉箭头 > 编辑... > 新行** 图标，修改 **MT3620_Grove_Shield_Library** 的路径，点击 **选择文件夹 > 确定 > 确定**
- 第六步：进入应用程序项目，右键单击 **References** > **Add References**，选择 **Projects**，勾选 **MT3620_Grove_Shield_Library**，然后点击 **确定**
- 第七步：右键单击您的应用程序项目名称，选择 **General** > **Target API Set**，勾选并设置为 **1**（如果您使用的是 Visual Studio Community 版本），如果您使用的是 Enterprise 版本，请跳过此步骤。
- 第八步：点击 **Remote GDB Debugger**，然后旋转传感器，您将看到如下输出：

```
Remote debugging from host 192.168.35.1
Application starting
Angle Value 0.85
Angle Value 0.85
Angle Value 0.94
Angle Value 1.00
Angle Value 0.41
Angle Value 0.31
Angle Value 0.00
Angle Value 0.11
Angle Value 0.39
```

### 数字输出

以下是通过 MT3620 Base Shield 写入数字信号的示例。

**硬件连接**

| MT3620 开发套件 | MT3620 Grove Shield | Grove - 蜂鸣器 |
|------------------|-------------------------|---------------------|
|![图片](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![图片](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/mt3620groveshieldb_s.jpg)|![图片](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/buzzer.jpg)|
|[立即购买](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[立即购买](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html)|[立即购买](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/buzzer_shield.jpg)

- 第一步：将 Grove - 蜂鸣器连接到 MT3620 Grove Shield 的 GPIO 端口。
- 第二步：将 MT3620 Base Shield 插入 Azure Sphere MT3620 开发板。
- 第三步：将 USB 数据线连接到 Azure Sphere MT3620 开发板和 PC。

**软件**

- 第一步：下载 [MT3620 Grove Shield 库](https://github.com/Seeed-Studio/MT3620_Grove_Shield)
- 第二步：打开 MT3620 Grove Shield 下的 **Samples/Grove_Buzzer**
- 第三步：双击 **Grove_Buzzer.sln**
- 第四步：右键单击您的应用程序项目名称，选择 **Properties > C/C++ > General > Additional Include Directories**
- 第五步：点击 **下拉箭头 > 编辑... > 新行** 图标，修改 **MT3620_Grove_Shield_Library** 的路径，点击 **选择文件夹 > 确定 > 确定**
- 第六步：进入应用程序项目，右键单击 **References** > **Add References**，选择 **Projects**，勾选 **MT3620_Grove_Shield_Library**，然后点击 **确定**
- 第七步：右键单击您的应用程序项目名称，选择 **General** > **Target API Set**，勾选并设置为 **1**（如果您使用的是 Visual Studio Community 版本），如果您使用的是 Enterprise 版本，请跳过此步骤。
- 第八步：点击 **Remote GDB Debugger**，您将看到如下输出：

```
Remote debugging from host 192.168.35.1
Application starting
Relay on
Relay off
Relay on
Relay off
```

### I2C

以下是通过 MT3620 Base Shield 读取 Grove - 温湿度传感器 (SHT31) 的 I2C 信号的示例。

**硬件连接**

| MT3620 开发套件 | MT3620 Grove 扩展板 | Grove - 温湿度传感器(SHT31) |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/mt3620groveshieldb_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/SHT3_s.jpg)|
|[立即购买](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[立即购买](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html)|[立即购买](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT3-p-2655.html)|

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/sht31_shield.jpg)

- 第一步：将 Grove - 温湿度传感器(SHT31)连接到 MT3620 Grove 扩展板的 I2C 接口。
- 第二步：将 MT3620 扩展板插入 Azure Sphere MT3620 开发板。
- 第三步：将 USB 数据线连接到 Azure Sphere MT3620 开发板和电脑。

**软件**

- 第一步：下载 [MT3620 Grove 扩展板库](https://github.com/Seeed-Studio/MT3620_Grove_Shield)
- 第二步：打开 MT3620 Grove 扩展板库中的 **Samples/Temp_and_Humidity_SHT31** 文件夹
- 第三步：双击 **Temp_and_Humidity_SHT31.sln**
- 第四步：右键点击应用程序的项目名称，选择 **Properties > C/C++ > General > Additional Include Directories**
- 第五步：点击 **下拉箭头 > Edit... > New Line** 图标，修改 **MT3620_Grove_Shield_Library** 的路径，点击 **Select Folder** > **OK** > **OK**
- 第六步：在应用程序项目中右键点击 **References** > **Add References**，选择 **Projects**，勾选 **MT3620_Grove_Shield_Library**，然后点击 **OK**
- 第七步：右键点击应用程序的项目名称，选择 **General** > **Target API Set**，勾选并设置为 **1**（如果使用的是 Visual Studio Community 版本），如果使用的是 Enterprise 版本，请跳过此步骤。
- 第八步：点击 **Remote GDB Debugger**，您将看到如下输出：

```
Remote debugging from host 192.168.35.1
Application starting
Hello world
Temperature: 19.2C
Humidity: 53.7%
Hello world
Temperature: 19.2C
Humidity: 53.7%
Hello world
Temperature: 19.1C
Humidity: 53.7%
Hello world
Temperature: 19.2C
Humidity: 53.8%
```

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/res/MT3620GroveShield%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle&PDF]** [MT3620 Grove 扩展板 v1.0 原理图和 PCB](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/res/MT3620GroveShield%20v1.0.zip)
- **[Library]** [MT3620 Grove 扩展板库](https://github.com/Seeed-Studio/MT3620_Grove_Shield)
- **[Product]** [Azure Sphere MT3620 开发套件产品简介](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/product_document/Azure%20Sphere%20MT3620%20Development%20Kit%20Product%20Brief-2018-09-10.pdf)
- **[Product]** [欢迎使用 Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/)
- **[DataSheet]]** [MediaTek MT3620 产品简介](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/MediaTek%20MT3620%20Product%20Brief.pdf)
- **[DataSheet]** [DS_FT4232H](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/DS_FT4232H.pdf)
- **[Mechanical]** [Azure Sphere MT3620 开发板二维图纸](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/tree/master/mechanical)
- **[FAQ Web]** [Azure Sphere 论坛](https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere)
- **[FAQ Web]** [Azure Sphere Github 问题](https://github.com/MicrosoftDocs/azure-sphere-issues/issues?utf8=%E2%9C%93&q=is%3Aissue)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>