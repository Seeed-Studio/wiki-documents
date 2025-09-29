---
description: MT3620 Grove 扩展板
title: MT3620 Grove 扩展板
keywords:
- Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/MT3620_Grove_Breakout
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

![输入图片描述](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/MT3620-Grove-Breakout-front.jpg)

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/MT3620-Grove-Breakout-back.jpg)

[Azure Sphere MT3620 开发套件](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html) 和 [MT3620 Mini 开发板](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html) 均由 [Microsoft Azure Sphere](https://azure.microsoft.com/en-us/services/azure-sphere/) 技术支持，MT3620 Grove 扩展板是专为全新的 MT3620 Mini 开发板设计的扩展板。  
MT3620 Grove 扩展板使用户能够快速将传感器模块 - [SeeedStudio Groves](https://www.seeedstudio.com/grove.html) 应用于基于 MT3620 Mini 开发板构建的快速原型应用。

由于 [Azure Sphere SDK](http://aka.ms/AzureSphereSDK) 尚未支持 MT3620 上的 ADC，此扩展板充当 MT3620 I2C 端口与外部 ADC 之间的接口，提供了一种从模拟端口读取模拟数据的方法。除了模拟端口外，此扩展板还具有 UART、SPI、I2C 和 GPIO 端口。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 12 位 ADC，兼容 I2C 的串行接口
- 8 个 Grove 接口
  - 2 x UART
  - 2 x I2C
  - 2 x 模拟
  - 2 x 数字（4 GPIO）

## 硬件概览

**接口**

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/103100123_hardware_overview.png)

- **<font face="" size="3" font color="ff0000">①</font> 扩展头 1：**  
24 个引脚，请参考板载引脚图了解详细的引脚定义。

- **<font face="" size="3" font color="ff0000">②</font> 模拟：**  
2 个 Grove 模拟端口，输入信号电压必须小于 3.3V。

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/Analog.png)

- **<font face="" size="3" font color="ff0000">③</font> I2C：**  
2 个 Grove I2C 端口，I2C 端口与 UART1 共享相同的引脚，因此一次只能选择 I2C 或 UART1。

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/I2C.png)

- **<font face="" size="3" font color="ff0000">④</font> UART：**  
2 个 Grove UART 端口，I2C 端口与 UART1 共享相同的引脚，因此一次只能选择 I2C 或 UART1。SPI0 端口与 UART0 共享相同的引脚，因此一次只能选择 SPI0 或 UART0。

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/UART.png)

- **<font face="" size="3" font color="ff0000">⑤</font> 数字：**  
4 个数字 GPIO 端口，工作电压为 3.3V。

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/GPIO.png)

- **<font face="" size="3" font color="ff0000">⑥</font> 扩展头 2：**  
这是扩展头 1 的重复部分。您可以将线焊接到头部。有两个引脚未与扩展头 1 连接。J5 的 Pin1 直接连接到 3.3V，J5 的 Pin6 未连接。

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/extention_header_1.png)

- **<font face="" size="3" font color="ff0000">⑦</font> SPI：**  
SPI0 端口与 UART0 共享相同的引脚，因此一次只能选择 SPI0 或 UART0。

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/SPI.png)

- **<font face="" size="3" font color="ff0000">⑧</font> AD7992BRMZ-1：**  
MT3620 Mini 开发板支持 SPI、UART、I2C 和数字功能，但不支持 ADC 功能。因此，MT3620 Grove 扩展板包含 [AD7992](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/AD7992.pdf) 芯片，它是一款 12 位、低功耗、逐次逼近 ADC，具有兼容 I2C 的接口。然后连接到 MT3620 Mini 开发板的 I2C 接口。

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/I2C_ADC.png)

- **<font face="" size="3" font color="ff0000">⑨</font> I2C 地址选择：**  
作为逻辑输入。地址选择输入，用于为 AD7992 选择三个 I2C 地址之一。如果连接到 GND，则 I2C 地址为 0x23。如果连接到 3.3V，则 I2C 地址为 0x24。

**板载引脚图**

<a href="https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/pinmap2.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/pinmap2.png"/></a>

**板载尺寸**

长：57mm 宽：52mm 高：10mm

## 应用场景

- 家庭/建筑/设施
- 自动化
- 安全
- 设备管理
- 公用事业
- 公共安全

:::提示
为了了解 Azure Sphere 在实际环境中的工作方式，请参考 [Contoso, Ltd 的场景](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere)。
:::

## 安装 Azure Sphere

如果您拥有尚未使用过的 MT3620 Mini 开发板，请首先完成 [这些步骤](https://docs.microsoft.com/en-us/azure-sphere/install/overview) 以开始使用。

## MT3620 Mini 开发板演示

我们构建了以下演示，结合 MT3620 Mini 开发板和 [Seeed Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)。

**演示#1**：MT3620 Mini 开发板作为 MCU，与 Grove-按钮和 USB 到 TTL 适配器连接。然后将 MT3620 Mini 开发板和 USB 到 TTL 适配器连接到 PC 的 USB 端口。下载代码后，按下 Grove-按钮并通过 USB 到 TTL 适配器输入 "Hello World!"，您可以在 Visual Studio 输出窗口中接收到 "Hello World!"。

**演示#2**：MT3620 Mini 开发板作为 MCU，与 Grove-光传感器和 USB 到 Grove-旋转传感器连接。然后将 MT3620 Mini 开发板连接到 PC 的 USB 端口。下载代码后，在 Grove-光传感器上移动手或旋转 Grove-旋转传感器，您可以在 Visual Studio 输出窗口中看到两个传感器的模拟输出。

**演示#3**：MT3620 Mini 开发板作为 MCU，与 Grove - OLED 显示屏 1.12" 连接。然后将 MT3620 Mini 开发板连接到 PC 的 USB 端口。下载代码后，按下 Grove-按钮并通过 USB 到 TTL 适配器输入 "Hello World!"，您可以在 Visual Studio 输出窗口中接收到 "Hello World!"。

### 演示#1 数字和 UART

**部件清单**

| MT3620 Mini 开发板 | MT3620 Grove 扩展板 | Grove - 按钮 | USB 到 UART 5V&3V3 |
|--------------|-------------|-----------------|-----------------|
|![输入图片描述](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![输入图片描述](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![输入图片描述](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/button_s.jpg)|![输入图片描述](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/usb_2_ttl_s.jpg)|
|[立即购买](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[立即购买](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[立即购买](https://www.seeedstudio.com/Grove-Button-p-766.html)|[立即购买](https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html)|

**硬件连接**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo1_connection.png)

:::注意
请确保以正确方式将 MT3620 Mini 开发板插入 MT3620 Grove 扩展板。MT3620 Grove 扩展板上有 USB 丝印，请确保它与 MT3620 Mini 开发板的 USB 端口位于同一侧。
:::

- 步骤 1. 将 Grove-按钮连接到 MT3620 Grove 扩展板的 D1。
- 步骤 2. 通过 [Grove-电缆](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html) 将 USB 到 UART 适配器连接到 MT3620 Grove 扩展板的 UART0。
- 步骤 3. 将 MT3620 Grove 扩展板插入 MT3620 Mini 开发板。
- 步骤 4. 将 MT3620 Mini 开发板和 USB 到 TTL 适配器连接到 PC 的 USB 端口。

:::注意
请确保 USB 到 TTL 适配器上的电压开关设置为 **5v**。将 USB 到 TTL 适配器的 RX 连接到 MT3620 Grove 扩展板的 TX，将 USB 到 TTL 适配器的 TX 连接到 MT3620 Grove 扩展板的 RX，并连接 GND。不要连接 5V。
:::

**软件**

- 步骤 1. 下载 [Azure Sphere 演示](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- 步骤 2. 打开 Azure_Sphere_Demo 下的 **Samples\UART0**
- 步骤 3. 双击 **UART0.sln**
- 步骤 4. 右键单击应用程序的项目名称，选择 **属性 > C/C++ > 常规 > 附加包含目录**
- 步骤 5. 点击 **下拉箭头 > 编辑... > 新行** 图标，修改 **UART0** 的路径，点击 **选择文件夹** > **确定** > **确定**
- 步骤 6. 转到应用程序项目，右键单击 **引用** > **添加引用**，选择 **项目**，勾选 **UART0**，然后点击 **确定**
- 步骤 7. 右键单击应用程序的项目名称，选择 **常规** > **目标 API 集**，勾选并设置为 **1+Beta1902**（如果您使用的是 Visual Studio Community 版本），如果您使用的是 Enterprise 版本，请跳过此步骤。
- 步骤 8. 点击 **远程 GDB 调试器**。
- 步骤 9. 打开 COM 监视工具并选择 USB 到 TTL 适配器的串口。
- 步骤 10. 按下 Grove-按钮并从 COM 监视工具发送 "Hello World!"。
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

| MT3620 Mini 开发板 | MT3620 Grove 扩展板 | Grove-光传感器 | Grove - 旋转角度传感器 |
|--------------|-------------|-----------------|-----------------|
|![输入图片描述](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![输入图片描述](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![输入图片描述](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/light_sensor_s.jpg)|![输入图片描述](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Rotary_Angle_Sensor_s.jpg)|
|[立即购买](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[立即购买](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[立即购买](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)|[立即购买](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html)|

**硬件连接**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo2_connection.png)

:::caution
请确保以正确的方式将 MT3620 Mini 开发板插入 MT3620 Grove 扩展板。MT3620 Grove 扩展板上有 USB 丝印标记，请确保它与 MT3620 Mini 开发板的 USB 端口位于同一侧。
:::

- 步骤 1. 将 Grove-旋转角度传感器连接到 MT3620 Grove 扩展板的 A0。
- 步骤 2. 将 Grove-光传感器连接到 MT3620 Grove 扩展板的 A1。
- 步骤 3. 将 MT3620 Grove 扩展板插入 MT3620 Mini 开发板。
- 步骤 4. 将 MT3620 Mini 开发板连接到 PC 的 USB 端口。

**软件**

- 步骤 1. 下载 [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- 步骤 2. 打开 Azure_Sphere_Demo 下的 **Samples\AD7991_I2C**
- 步骤 3. 双击 **AD7991_I2C.sln**
- 步骤 4. 右键单击应用程序的项目名称，选择 **Properties > C/C++ > General > Additional Include Directories**
- 步骤 5. 点击 **下拉箭头 > Edit... > New Line** 图标，修改 **AD7991_I2C** 的路径，点击 **Select Folder > OK > OK**
- 步骤 6. 转到应用程序项目，右键单击 **References > Add References**，选择 **Projects**，勾选 **AD7991_I2C**，然后点击 **OK**
- 步骤 7. 右键单击应用程序的项目名称，选择 **General > Target API Set**，勾选并设置为 **1+Beta1902**（如果使用的是 Visual Studio Community 版本），如果使用的是 Enterprise 版本，请跳过此步骤。
- 步骤 8. 点击 **Remote GDB Debugger**，将手放在 Grove-光传感器上方或旋转 Grove-旋转角度传感器，可以在 Visual Studio 的输出窗口中看到两个传感器的模拟输出。

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
|--------------------|--------------------|-------------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/oled_s.jpg)|
|[立即购买](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[立即购买](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[立即购买](https://www.seeedstudio.com/Grove-OLED-Display-1-12-V2.html)|

**硬件连接**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo3_connection.png)

:::caution
请确保以正确的方式将 MT3620 Mini 开发板插入 MT3620 Grove 扩展板。MT3620 Grove 扩展板上有 USB 丝印标记，请确保它与 MT3620 Mini 开发板的 USB 端口位于同一侧。
:::

- 步骤 1. 将 Grove-OLED 显示屏 1.12'' V2 连接到 MT3620 Grove 扩展板的 I2C。
- 步骤 2. 将 MT3620 Grove 扩展板插入 MT3620 Mini 开发板。
- 步骤 3. 将 MT3620 Mini 开发板连接到 PC 的 USB 端口。

**软件**

- 步骤 1. 下载 [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- 步骤 2. 打开 Azure_Sphere_Demo 下的 **Samples\SeeedOLED_I2C**
- 步骤 3. 双击 **SeeedOLED_I2C.sln**
- 步骤 4. 右键单击应用程序的项目名称，选择 **Properties > C/C++ > General > Additional Include Directories**
- 步骤 5. 点击 **下拉箭头 > Edit... > New Line** 图标，修改 **SeeedOLED_I2C** 的路径，点击 **Select Folder > OK > OK**
- 步骤 6. 转到应用程序项目，右键单击 **References > Add References**，选择 **Projects**，勾选 **SeeedOLED_I2C**，然后点击 **OK**
- 步骤 7. 右键单击应用程序的项目名称，选择 **General > Target API Set**，勾选并设置为 **1+Beta1902**（如果使用的是 Visual Studio Community 版本），如果使用的是 Enterprise 版本，请跳过此步骤。
- 步骤 8. 点击 **Remote GDB Debugger**，您将看到信息显示在 OLED 上。

```
Remote debugging from host 192.168.35.1
Seeed oled 96*96 demo.
```

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/MT3620%20grove%20breakout%20v1.0.sch.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[产品]** [欢迎使用 Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/)
- **[库]** [Azure Sphere 演示库](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- **[Eagle]** [MT3620 Grove 扩展板原理图](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/MT3620%20grove%20breakout%20v1.0.sch.zip)
- **[PDF]** [MT3620 Grove 扩展板原理图](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/MT3620%20grove%20breakout%20v1.0.pdf)
- **[数据手册]** [WF-M620 RSC1 数据手册](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/WF-M620-RSC1_datasheet_20190314.pdf)
- **[数据手册]** [AD7992 数据手册](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/AD7992.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>