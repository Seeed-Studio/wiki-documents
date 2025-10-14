---
description: MT3620 Mini 开发板
title: MT3620 Mini 开发板
keywords:
- Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/MT3620_Mini_Dev_Board
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

![输入图片描述](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product.png)

MT3620 Mini 开发板是 Seeed 之前 [Azure Sphere MT3620 开发套件](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html) 的简化版本。关于 Azure Sphere 的介绍，请参考此链接 [Azure Sphere](https://azure.microsoft.com/en-us/services/azure-sphere/)。

我们开发这款开发板是为了满足开发者对更小尺寸、更高扩展性以及更低成本的需求。该开发板基于 MT3620 模块，极大简化了硬件设计的难度。[MT3620 模块](https://www.seeedstudio.com/MT3620-Module-AI-Link-WF-M620-RSC1-p-2920.html)由我们的合作伙伴 [AI-Link](http://www.ilinkthings.com/microsoft) 开发。开发者可以轻松地将此设计复用到自己的项目中。开发板采用两个单排针脚设计，方便插入其他主板或扩展板。与功能齐全的 Azure Sphere MT3620 开发套件不同，这款开发板通过减少一些系统硬件外设资源来优化设计，仅向开发者提供必要的硬件资源。在硬件规格方面，我们仅支持 2.4G Wi-Fi，并减少了 I2S 和部分 GPIO 端口。

**MT3620 Mini 开发板的新特点**

- 基于 MT3620 模块 (WF-M620-RSA1)
- 将板尺寸从 50mm*80mm*16mm 缩小到 34mm*60mm*19mm
- 保留必要的 LED 指示灯和按钮
- 板型设计更易于附加使用

下图展示了功能齐全的开发板与新的 Mini 开发板尺寸对比：

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/compare.png)

MT3620 上预装了 Azure Sphere 操作系统，该系统旨在与 Azure Sphere 安全服务协作，创建一个安全的物联网平台。Azure Sphere 操作系统和安全服务共同提供：

- 基于证书的设备认证，可连接到任何网络服务
- 软件证明和安全启动
- 通过故障报告进行威胁检测
- 持续的安全更新
- 集成的安全端到端物联网解决方案

MT3620 的软件开发支持使用强大的 Microsoft Visual Studio IDE：安装 Visual Studio 和 Azure Sphere 扩展，通过 USB 将开发板连接到 PC，即可开始开发具有前所未有安全级别的物联网应用。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

:::caution

1. 退货政策：此产品只能激活一次。一旦包装被打开，Seeed 将不接受退货。查看保修与退货政策。如果打开包装后发现任何质量问题，请联系 Seeed 支持团队 support@seeed.cc。

2. 开源许可证：此产品中包含的软件包含受版权保护的软件，这些软件根据 GPL、LGPL 或其他开源许可证授权，具体列表请访问 aka.ms/AzureSphereSDK。您可以通过 aka.ms/AzureSphereSDK 或发送电子邮件至 order@seeed.cc 获取适用软件的源代码。
:::

## 特性

- Azure Sphere：为物联网设备提供端到端的安全保障。
- Wi-Fi 802.11 b/g/n。
- 三核微控制器，集成片上 RAM 和闪存。
- Microsoft Visual Studio 开发环境。
- 设备生命周期内的在线认证与更新。
- 在针脚头上扩展 UART、I2C、SPI、ADC、GPIO 资源。

## 规格

**硬件**

<table class="tg">
  <tr>
    <th class="tg-0pky">描述</th>
    <th class="tg-0pky">参数</th>
  </tr>
  <tr>
    <td class="tg-c3ow" rowspan="2">MCU<br />(使用 MT3620 模块)</td>
    <td class="tg-0pky">1 *ARM Cortex A7 核心 @500MHz，4MB RAM</td>
  </tr>
  <tr>
    <td class="tg-0pky">2 *ARM Cortex M4 核心 @200MHz，64KB RAM</td>
  </tr>
  <tr>
    <td class="tg-c3ow" rowspan="4">ISU</td>
    <td class="tg-0pky">ISU 0 配置为 SPI0 或 UART0 或 I2C0，ISU 1 配置为 SPI1 或 UART1 或 I2C1</td>
  </tr>
  <tr>
    <td class="tg-0pky">- I2C 最高运行频率为 1MHz</td>
  </tr>
  <tr>
    <td class="tg-0pky">- SPI 最高运行频率为 40MHz</td>
  </tr>
  <tr>
    <td class="tg-0pky">- UART 最高运行频率为 3Mbps</td>
  </tr>
  <tr>
    <td class="tg-0pky">连接性</td>
    <td class="tg-0pky">802.11 b/g/n Wi-Fi</td>
  </tr>
  <tr>
    <td class="tg-0pky">ADC</td>
    <td class="tg-0pky">3 *12 位 ADC 输入 I/O</td>
  </tr>
  <tr>
    <td class="tg-0pky">RTC</td>
    <td class="tg-0pky">1 *RTC，带 CR1220 3V 电池座</td>
  </tr>
  <tr>
    <td class="tg-0pky">USB</td>
    <td class="tg-0pky">1 *Micro USB 端口，用于电源供给和调试，5V/1A</td>
  </tr>
  <tr>
    <td class="tg-0pky" rowspan="3">LED</td>
    <td class="tg-0pky">1 *红色 LED -&gt; 电源</td>
  </tr>
  <tr>
    <td class="tg-0lax">1 *绿色 LED -&gt; FTDI 状态</td>
  </tr>
  <tr>
    <td class="tg-0lax">1 *绿色 LED -&gt; 用户可控（可配置为 Wi-Fi 状态或其他用途）</td>
  </tr>
  <tr>
    <td class="tg-0lax">按钮</td>
    <td class="tg-0lax">1 *复位按钮</td>
  </tr>
  <tr>
    <td class="tg-0pky">工作温度</td>
    <td class="tg-0pky">-40~85°C</td>
  </tr>
  <tr>
    <td class="tg-0pky">尺寸</td>
    <td class="tg-0pky">长：34mm * 宽：60mm * 高：19mm<br /></td>
  </tr>
  <tr>
    <td class="tg-0pky">认证</td>
    <td class="tg-0pky">CE / FCC / MIC / RoHS<br /></td>
  </tr>
</table>

**软件**

<table class="tg">
  <tr>
    <td class="tg-0pky">IDE</td>
    <td class="tg-0pky">Visual Studio</td>
  </tr>
  <tr>
    <td class="tg-0lax">系统</td>
    <td class="tg-0lax">Windows10</td>
  </tr>
  <tr>
    <td class="tg-0lax">编程语言</td>
    <td class="tg-0lax">C</td>
  </tr>
</table>

## 支持功能

如果构建实时应用程序，现在可以编程以下功能：

- I2C
- 2xARM Cortex-M4 with FPU
- ADC
- PWM
- I2S（请参考 [M4 with FPU](https://d86o2zu8ugzlg.cloudfront.net/mediatek-craft/documents/MT3620-M4-User-Manual.pdf)）

如果构建高层操作系统应用程序，可以使用 ADC 和 PWM。

## 硬件概览

**板图**

<a href="https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/sys.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/sys.jpg"/></a>

**板针脚图**

<a href="https://files.seeedstudio.com/products/102110267/img/MT3620 Mini Dev Board Pinmap-20200331.jpg" target="_blank"><img src="https://files.seeedstudio.com/products/102110267/img/MT3620 Mini Dev Board Pinmap-20200331.jpg"/></a>

## 应用场景

- 家庭/建筑/设施
- 自动化
- 安全
- 设备管理
- 公用事业
- 公共安全

:::提示
要了解 Azure Sphere 在实际环境中的工作方式，请参考 [Contoso, Ltd 场景](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere)。
:::

## 安装 Azure Sphere

如果您拥有尚未使用的 MT3620 Mini Dev Board，请首先完成 [这些步骤](https://docs.microsoft.com/en-us/azure-sphere/install/overview) 以开始使用。

## MT3620 Mini Dev Board 演示

我们构建了以下演示，结合 MT3620 Mini Dev Board 和 [Seeed Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)。

**演示#1**：MT3620 Mini Dev Board 作为 MCU，连接 Grove-Button 和 USB 到 TTL 适配器。然后将 MT3620 Mini Dev Board 和 USB 到 TTL 适配器连接到 PC 的 USB 端口。下载代码后，按下 Grove-Button 并通过 USB 到 TTL 适配器输入 "Hello World!"，您可以在 Visual Studio 输出窗口中接收到 "Hello World!"。

**演示#2**：MT3620 Mini Dev Board 作为 MCU，连接 Grove-Light Sensor 和 USB 到 Grove-Rotary Sensor。然后将 MT3620 Mini Dev Board 连接到 PC 的 USB 端口。下载代码后，您可以通过在 Grove-Light Sensor 上移动手或旋转 Grove-Rotary Sensor，在 Visual Studio 输出窗口中看到两个传感器的模拟输出。

**演示#3**：MT3620 Mini Dev Board 作为 MCU，连接 Grove - OLED Display 1.12"。然后将 MT3620 Mini Dev Board 连接到 PC 的 USB 端口。下载代码后，按下 Grove-Button 并通过 USB 到 TTL 适配器输入 "Hello World!"，您可以在 Visual Studio 输出窗口中接收到 "Hello World!"。

**MT3620 Grove 扩展板**：MT3620 Mini Dev Board 支持 SPI、UART、I2C、数字功能，但不支持 ADC 功能。因此，MT3620 Grove 扩展板包含 [AD7992](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/AD7992.pdf) 芯片，这是一个具有 I2C 兼容接口的 12 位低功耗逐次逼近 ADC。然后连接到 MT3620 Mini Dev Board 的 I2C 接口。

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/adc_i2c.png)

### 演示#1 数字和 UART

**部件清单**

| MT3620 Mini Dev Board | MT3620 Grove 扩展板 | Grove - Button | USB 到 UART 5V&3V3 |
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/button_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/usb_2_ttl_s.jpg)|
|[立即购买](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[立即购买](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[立即购买](https://www.seeedstudio.com/Grove-Button-p-766.html)|[立即购买](https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html)|

**硬件连接**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo1_connection.png)

- 步骤 1. 将 Grove-Button 连接到 MT3620 Grove 扩展板的 D1。
- 步骤 2. 通过 [Grove-Cable](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html) 将 USB 到 UART 适配器连接到 MT3620 Grove 扩展板的 UART0。
- 步骤 3. 将 MT3620 Grove 扩展板插入 MT3620 Mini Dev Board。
- 步骤 4. 将 MT3620 Mini Dev Board 和 USB 到 TTL 适配器连接到 PC 的 USB 端口。

:::注意
请确保 USB 到 TTL 适配器上的电压开关设置为 **5v**。将 USB 到 TTL 适配器的 RX 连接到 MT3620 Grove 扩展板的 TX，将 USB 到 TTL 适配器的 TX 连接到 MT3620 Grove 扩展板的 RX，同时连接 GND。不要连接 5V。
:::

**软件**

- 步骤 1. 下载 [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- 步骤 2. 打开 Azure_Sphere_Demo 下的 **Samples\UART0**
- 步骤 3. 双击 **UART0.sln**
- 步骤 4. 右键单击应用程序的项目名称，选择 **Properties > C/C++ > General > Additional Include Directories**
- 步骤 5. 点击 **下拉箭头 > Edit... > New Line** 图标，修改 **UART0** 的路径，点击 **Select Folder** > **OK** > **OK**
- 步骤 6. 转到应用程序项目，右键单击 **References** > **Add References**，选择 **Projects**，勾选 **UART0**，然后点击 **OK**
- 步骤 7. 右键单击应用程序的项目名称，选择 **General** > **Target API Set**，勾选并设置为 **1+Beta1902**（如果您使用的是 Visual Studio Community 版本），如果您使用的是 Enterprise 版本，请跳过此步骤。
- 步骤 8. 点击 **Remote GDB Debugger**。
- 步骤 9. 打开 COM 监视工具并选择 USB 到 TTL 适配器的串口。
- 步骤 10. 按下 Grove-Button 并从 COM 监视工具发送 "Hello World!"。
- 步骤 11. 您可以在 Visual Studio 输出窗口中看到以下消息：

```
UART received 12 bytes: 'Hello World!'.
UART received 2 bytes: '
'.
UART received 12 bytes: 'Hello World!'.
UART received 2 bytes: '
'.
UART received 12 bytes: 'Hello World!'.
UART received 2 bytes: '
```

### 演示#2 模拟

**部件清单**

| MT3620 Mini 开发板 | MT3620 Grove 扩展板 | Grove-光传感器 | Grove-旋转角度传感器 |
|--------------|-------------|-----------------|-----------------|
|![图片描述](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![图片描述](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![图片描述](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/light_sensor_s.jpg)|![图片描述](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Rotary_Angle_Sensor_s.jpg)|
|[立即购买](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[立即购买](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[立即购买](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)|[立即购买](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html)|

**硬件连接**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo2_connection.png)

- 步骤 1. 将 Grove-旋转角度传感器连接到 MT3620 Grove 扩展板的 A0。
- 步骤 2. 将 Grove-光传感器连接到 MT3620 Grove 扩展板的 A1。
- 步骤 3. 将 MT3620 Grove 扩展板插入 MT3620 Mini 开发板。
- 步骤 4. 将 MT3620 Mini 开发板连接到 PC 的 USB 端口。

**软件**

- 步骤 1. 下载 [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- 步骤 2. 打开 Azure_Sphere_Demo 下的 **Samples\AD7991_I2C**
- 步骤 3. 双击 **AD7991_I2C.sln**
- 步骤 4. 右键单击应用程序的项目名称，选择 **Properties > C/C++ > General > Additional Include Directories**
- 步骤 5. 点击 **下拉箭头 > 编辑... > 新行** 图标，修改 **AD7991_I2C** 的路径，点击 **Select Folder > OK > OK**
- 步骤 6. 在应用程序项目中右键单击 **References > Add References**，选择 **Projects**，勾选 **AD7991_I2C**，然后点击 **OK**
- 步骤 7. 右键单击应用程序的项目名称，选择 **General > Target API Set**，勾选并设置为 **1+Beta1902**（如果您使用的是 Visual Studio Community 版本），如果您使用的是 Enterprise 版本，请跳过此步骤。
- 步骤 8. 点击 **Remote GDB Debugger**，当您将手移动到 Grove-光传感器上方或旋转 Grove-旋转角度传感器时，您可以在 Visual Studio 的输出窗口中看到两个传感器的模拟输出。

```
A0: 192 A1: 2646
A0: 162 A1: 2644
A0: 1489 A1: 2647
A0: 621 A1: 2644
A0: 227 A1: 2648
A0: 33 A1: 2644
A0: 0 A1: 2647
A0: 0 A1: 2647
A0: 0 A1: 2647
A0: 0 A1: 2644
A0: 373 A1: 2643
A0: 885 A1: 2646
A0: 1717 A1: 2647
A0: 2057 A1: 2647
```

### 演示#3 I2C

**部件清单**

| MT3620 Mini 开发板 | MT3620 Grove 扩展板 | Grove-OLED 显示屏 1.12'' V2 |
|--------------|-------------|-----------------|
|![图片描述](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![图片描述](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![图片描述](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/oled_s.jpg)|
|[立即购买](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[立即购买](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[立即购买](https://www.seeedstudio.com/Grove-OLED-Display-1-12-V2.html)|

**硬件连接**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo3_connection.png)

- 步骤 1. 将 Grove-OLED 显示屏 1.12'' V2 连接到 MT3620 Grove 扩展板的 I2C。
- 步骤 2. 将 MT3620 Grove 扩展板插入 MT3620 Mini 开发板。
- 步骤 3. 将 MT3620 Mini 开发板连接到 PC 的 USB 端口。

**软件**

- 步骤 1. 下载 [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- 步骤 2. 打开 Azure_Sphere_Demo 下的 **Samples\SeeedOLED_I2C**
- 步骤 3. 双击 **SeeedOLED_I2C.sln**
- 步骤 4. 右键单击应用程序的项目名称，选择 **Properties > C/C++ > General > Additional Include Directories**
- 步骤 5. 点击 **下拉箭头 > 编辑... > 新行** 图标，修改 **SeeedOLED_I2C** 的路径，点击 **Select Folder > OK > OK**
- 步骤 6. 在应用程序项目中右键单击 **References > Add References**，选择 **Projects**，勾选 **SeeedOLED_I2C**，然后点击 **OK**
- 步骤 7. 右键单击应用程序的项目名称，选择 **General > Target API Set**，勾选并设置为 **1+Beta1902**（如果您使用的是 Visual Studio Community 版本），如果您使用的是 Enterprise 版本，请跳过此步骤。
- 步骤 8. 点击 **Remote GDB Debugger**，您将看到信息显示在 OLED 上。

```
Remote debugging from host 192.168.35.1
Seeed oled 96*96 demo.
```

## 门远程控制项目

这是 Azure Sphere 安全锁演示项目。我们使用新的 MT3620 Mini 开发板及其 Grove 扩展板构建了这个盒子。MT3620 作为设备微控制器，提供安全的云端访问。

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure_Sphere_Demo_Secure_Lock.jpg)

<div align="center">安全锁示意图<b></b><i></i></div>

**1. 让我们了解硬件如何工作：**

在盒子顶部，有一个警示灯，当门打开时会闪烁。MT3620 读取微动开关状态，判断门是否打开。门通过电磁锁锁定。有两个继电器，它们都由 MT3620 的 GPIO 驱动。一个继电器控制电磁锁的电源，通过打开继电器，电磁锁将被打开。另一个继电器控制警示灯。

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure%20Sphere%20Mini%20Dev%20Board%20Demo4.jpg)

<div align="center"><b>正面视图</b><i></i></div>

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure%20Sphere%20Mini%20Dev%20Board%20Demo2.jpg)

<div align="center"><b>顶部视图</b><i></i></div>

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure%20Sphere%20Mini%20Dev%20Board%20Demo5.jpg)

<div align="center"><b>侧面视图</b><i></i></div>

**2. MT3620 Mini 开发板**

- 第一步：下载 [Azure Sphere 演示项目](https://github.com/Seeed-Studio/Azure_Sphere_Demo)。
- 第二步：按照 Azure Sphere 快速入门指南打开 **Azure_Sphere_Demo\Demostrations\RemoteControlDoor\RemoteControlDoor.sln** 项目。
- 第三步：打开 Source Files 下的 main.c 文件。
- 第四步：修改第 28 和 29 行的 wifiSsid 和 wifiPsk。
- 第五步：将演示项目连接到 Azure IoT。
- 第六步：直接点击 Build -> Rebuild Solution，将项目部署到设备。
- 第七步：使用远程调试工具访问设备。
- 第八步：按照视频教程以三种不同方式操作示例。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/NgH3Ot9pM1Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 资源

<!-- - **[产品]** [MT3620 Mini 开发板产品简介](https://files.seeedstudio.com/products/102110267/document/MT3620_Mini_Dev_Board_Product_Brief-2019-03-15.pdf)链接有误 -->
- **[产品]** [欢迎使用 Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/)
- **[库]** [Azure Sphere 演示库](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- **[PDF]** [MT3620 Mini 开发板原理图](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/MT3620%20Dev%20Board%20V2.pdf)
- **[数据表]** [MediaTek MT3620 产品简介](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/MediaTek%20MT3620%20Product%20Brief.pdf)
- **[数据表]** [WF-M620 RSC1 数据表](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/WF-M620-RSC1_datasheet_20190314.pdf)
- **[FAQ 网页]** [Azure Sphere 论坛](https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere)
- **[FAQ 网页]** [Azure Sphere Github 问题](https://github.com/MicrosoftDocs/azure-sphere-issues/issues?utf8=%E2%9C%93&q=is%3Aissue)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>