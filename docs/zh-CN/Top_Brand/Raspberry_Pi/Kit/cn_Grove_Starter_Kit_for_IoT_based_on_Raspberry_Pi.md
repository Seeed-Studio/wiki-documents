---
description: 基于树莓派的物联网 Grove 入门套件
title: 基于树莓派的物联网 Grove 入门套件
keywords:
- Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: 基于树莓派的物联网 Grove 入门套件
category: Raspberry Pi
bzurl: https://www.seeedstudio.com/Microsoft-IoT-Grove-Kit-(Azure-Certified)-p-2694.html
prodimagename: cover.jpg
sku: 110060482
--- -->

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/cover.jpg)

对于许多开发者来说，在树莓派上构建物联网项目从来都不是一件容易的事情。这是由于涉及复杂的硬件连接和复杂的软件编程。Seeed 和微软合作，通过推出微软物联网 Grove 套件来缓解这些挑战。

套件中包含的 GrovePi+ 扩展板完全兼容运行 Windows 10 IoT Core 的树莓派 3 和树莓派 2。借助易于使用的 Grove 系统，您现在可以通过 GrovePi+ 上的 Grove 接口将多达 15 个 Grove 模块简单地连接到您的树莓派。

除了高性能传感器和执行器外，该套件还包含一个 5 英寸 HDMI 显示屏和一个带背光的 RGB LCD。微软物联网 Grove 套件是一个强大的平台，可以开始您对物联网的探索。

请注意，此套件不包含树莓派开发板。请访问[这里](https://www.seeedstudio.com/Boards-for-Raspberry-pi-c-25.html)单独购买。

:::note
GrovePi+ 和一些代码是由 [Dexter Industry](http://www.dexterindustries.com/) 设计的。点击获取更多关于 Dexter 的信息。
:::

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Microsoft-IoT-Grove-Kit-(Azure-Certified)-p-2694.html)

## 特性

* 易于使用的 GrovePi+，兼容树莓派 B/B+/A+/2/3
* 即插即用的 Grove 模块，用于快速原型制作

## 零件清单

| SKU | 零件名称 | 数量 | 链接 |
|------|--------------|------|-------|
|103010002 | GrovePi+ | 1 | [立即购买](https://www.seeedstudio.com/GrovePi.html) |
|104990243| 5 英寸 HDMI 显示屏带 USB 触摸屏 | 1 | [立即购买](https://www.seeedstudio.com/5-Inch-HDMI-Display-with-USB-TouchScreen-p-2638.html) |
|103020005| Grove - 继电器 | 1 | [立即购买](https://www.seeedstudio.com/Grove-Relay-p-769.html) |
|101020011| Grove - 温湿度传感器| 1 | [立即购买](https://www.seeedstudio.com/Grove-Temp&Humi-Sensor-p-745.html) |
|101020010| Grove - 超声波测距仪 | 1 | [立即购买](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html) |
|104020006| Grove LED Bar v2.0 | 1 | [立即购买](https://www.seeedstudio.com/Grove-LED-Bar-v2.0-p-2474.html) |
|101020048| Grove - 旋转角度传感器(P)| 1 | [立即购买](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor%28P%29-p-1242.html) |
|107020000| Grove - 蜂鸣器| 1 | [立即购买](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) |
|101020023| Grove - 声音传感器| 1 | [立即购买](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html) |
|101020014 | Grove - 光线传感器 v1.2 | 1 | [立即购买](https://www.seeedstudio.com/Grove-%E2%80%93-Light-Sensor-%28P%29-v1.1-p-2693.html) |
|101020003| Grove - 按钮| 1 | [立即购买](https://www.seeedstudio.com/Grove-Button-p-766.html) |
|104030001| Grove - LCD RGB 背光| 1 | [立即购买](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html) |
|109990056| HDMI 线缆| 1 | [立即购买](https://www.seeedstudio.com/Flat-HDMI-Male-to-Male-Cable-1M,Support-3D-For-HDTV-computer-&-tablets-cable-p-2142.html) |
|321010007| Micro USB 线缆 - 48cm| 1 | [立即购买](https://www.seeedstudio.com/Micro-USB-Cable-1200px-p-1475.html) |

## GrovePi+ 硬件连接

**1.1 将 GrovePi+ 连接到 Raspberry Pi**

首先，将您的 GrovePi+ 安装到 Raspberry Pi 上。GrovePi+ 滑动安装在 Raspberry Pi 的顶部，如下图所示。

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/1_1_1.png)

在堆叠 GrovePi+ 时，请确保引脚正确对齐。

**为 Raspberry Pi 供电**

要为 GrovePi+ 和 Raspberry Pi 供电，您可以使用 Raspberry Pi 上的 micro USB 电源端口。
请记住使用能够提供 5V 2A 电流的优质电源适配器。如果您想在独立配置中运行 GrovePi+，那么您可能需要一个 USB 移动电源。

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/1_2_1.png)

## 为 Raspberry Pi 安装 GrovePi C# 库

GrovePi 可以用 C# 编程，但首先您应该为 GrovePi 安装 Windows 10 IoT C# 驱动程序库，有两种方法可以做到这一点：安装 NuGet 包和使用由 Dexter 提供的 GrovePi C# 库代码。

**安装 NuGet 包**

当前版本的 GrovePi NuGet 包已经可用。
要为 Windows IoT 安装 GrovePi，请按照以下步骤操作。

**步骤1.**

从工具菜单中，选择库包管理器，然后点击包管理器控制台。

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_1_1.png)

显示**包管理器控制台窗口**。

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_1_2.png)

**步骤2.**

在包管理器控制台中运行以下命令。

    PM> Install-Package GrovePi

更多详情请访问 [https://www.nuget.org/packages/GrovePi/](https://www.nuget.org/packages/GrovePi/)。

**使用 GrovePi C# 库代码**

如果您是高级程序员或无法成功安装 GrovePi NuGet 包，您可以通过点击此链接下载库代码 [https://github.com/DexterInd/GrovePi/tree/master/Software/CSharp](https://github.com/DexterInd/GrovePi/tree/master/Software/CSharp)。

**步骤1.**

将两个 C# 库项目"GrovePi"和"Driver"移动到您的项目所在的文件夹中。并在解决方案资源管理器中将它们添加到您的项目中。
例如，右键点击解决方案"GrovePiExamples"，添加 | 现有项目，如下所示。

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_2_1.png)

然后将"GrovePi"和"Driver"添加到解决方案资源管理器中。

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_2_2.png)

**步骤2.**

将 C# 库设置为引用项目。右键点击引用并点击添加引用

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_2_3.png)

点击项目 | 解决方案，并勾选下面红框中显示的复选框。然后点击确定。

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_2_4.png)

现在，您已经成功安装了 GrovePi C# 库。

所有支持的传感器都可以通过 DeviceFactory 类获得。

**示例**

以下是一些如何使用该库的简单示例。

* **测量距离**

超声波传感器插入数字引脚 2 (D2)

    var distance = DeviceFactory.Build.UltraSonicSensor(Pin.DigitalPin2).MeasureInCentimeters();

* **显示 Hello World**

       DeviceFactory.Build.RgbLcdDisplay().SetText("Hello World").SetBacklightRgb(0, 255, 255);

* **蜂鸣器发声**

让插入数字引脚 2 (D2) 的蜂鸣器发声。

    DeviceFactory.Build.Buzzer(Pin.DigitalPin2).ChangeState(SensorStatus.On);

## 在 Rpi3 上运行 Win10 IoT 示例

这里我们提供了一系列示例项目，展示了使用树莓派开始项目是多么简单。这些树莓派项目将易于使用的 Grove 传感器与强大的树莓派相结合。
您可以点击[这里](https://github.com/Seeed-Studio/GrovePiExamples_win10)下载适用于 win10 的 GrovePi 示例代码。您需要按右侧的绿色按钮"Clone or download"并选择"Download ZIP"。然后您需要将 ZIP 文件解压到您选择的位置。
使用 Visual Studio 2015 打开 GrovePiExamples(win10).sln，您可以在解决方案资源管理器中看到 12 个项目，如下图所示。

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/3_0_1.png)

在开始之前，请先构建 **GrovePi** 项目。这是因为其他项目都依赖于它。

**来自 RGB LCD 的 Hello World**

此示例旨在成为您使用 GrovePi+ 的第一个项目。此项目中使用的所有部件都包含在 GrovePi+ 入门套件中。一旦掌握，您就可以继续进行更复杂的项目，如将显示器或其他传感器连接到树莓派。

* **步骤1：** 将 HelloWorld(LCD) 项目设置为启动项目。
* **步骤2：** 硬件连接。

使用 Grove 线缆连接器将 RGB LCD 连接到端口 I2C-1 并为树莓派供电。

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/3_1_1.png)

* **步骤3：** 部署您的应用程序。

1) 在 Visual Studio 中打开应用程序后，在工具栏下拉菜单中设置架构。选择 ARM。

2) 接下来，在 Visual Studio 工具栏中，点击本地计算机下拉菜单并选择远程计算机。

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/3_1_2.png)

3) 此时，Visual Studio 将显示远程连接对话框。如果您之前使用 [PowerShell](http://ms-iot.github.io/content/en-US/win10/samples/PowerShell.htm) <!-- 源文件链接有误 -->为您的设备设置了唯一名称，您可以在此处输入（在此示例中，我们使用 my-device）。否则，请使用您的 Windows IoT Core 设备的 IP 地址。输入设备名称/IP 后，为 Windows 身份验证选择无，然后点击选择。

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/3_1_3.png)

4) 您可以通过导航到项目属性（在解决方案资源管理器中选择属性）并在左侧选择调试选项卡来验证或修改这些值。

当一切设置完成后，您应该能够在 Visual Studio 中按 F5。如果有任何您在设置期间未安装的缺失包，Visual Studio 可能会提示您现在获取这些包。
HelloWorld 应用程序将部署并在 Windows IoT 设备上启动，您将在 Grove RGB LCD 上看到 HelloWorld。

**Grove 旋转角度传感器**

此示例可以按照与 HelloWorld(LCD) 相同的方式设置。

* **步骤1：** 将 GroveAngleSensor 项目设置为启动项目。
* **步骤2：** 硬件连接。
将 Grove 角度传感器连接到端口 A0，并通过 HDMI 线缆将树莓派连接到 LCD 屏幕。
* **步骤3：** 部署您的应用程序。参考 HelloWorld(LCD) 示例的步骤3。

当一切设置完成后，您应该能够在 Visual Studio 中按 F5。如果有任何您在设置期间未安装的缺失包，Visual Studio 可能会提示您现在获取这些包。
GroveAngleSensor 应用程序将部署并在 Windows IoT 设备上启动。您可以在 LCD 屏幕上看到 Grove 角度传感器的值。

**Grove LED 条**

此示例可以按照与 HelloWorld(LCD) 相同的方式设置。

* **步骤1：** 将 GroveLedBar 项目设置为启动项目。
* **步骤2：** 硬件连接。
将 Grove Led 条连接到端口 D5。
* **步骤3：** 部署您的应用程序。参考 HelloWorld(LCD) 示例的步骤3。

当一切设置完成后，您应该能够在 Visual Studio 中按 F5。如果有任何您在设置期间未安装的缺失包，Visual Studio 可能会提示您现在获取这些包。
GroveLedBar 应用程序将部署并在 Windows IoT 设备上启动。您可以看到 Grove Led 条将循环点亮。

**Grove - 光传感器**

此示例的使用方法与 HelloWorld(LCD) 相同。

* **步骤1**：将 GroveLightSensor 项目设置为启动项目。
* **步骤2**：硬件连接。
将 Grove 光传感器连接到端口 A2，并通过 HDMI 线缆将树莓派连接到 LCD 屏幕。
* **步骤3**：部署您的应用程序。参考 HelloWorld(LCD) 示例的步骤3。

当一切设置完成后，您应该能够在 Visual Studio 中按 F5。如果有任何您在设置期间未安装的缺失包，Visual Studio 可能会提示您现在获取这些包。
GroveLightSensor 应用程序将部署并在 Windows IoT 设备上启动。您可以在 LCD 屏幕上看到 Grove 光传感器的值。

**Grove - 继电器**

此示例的使用方法与 HelloWorld(LCD) 相同。

* **步骤1**：将 GroveRelay 项目设置为启动项目。
* **步骤2**：硬件连接。
将 Grove 继电器连接到端口 D2。
* **步骤3**：部署您的应用程序。参考 HelloWorld(LCD) 示例的步骤3。

当一切设置完成后，您应该能够在 Visual Studio 中按 F5。如果有任何您在设置期间未安装的缺失包，Visual Studio 可能会提示您现在获取这些包。
GroveRelay 应用程序将部署并在 Windows IoT 设备上启动。您可以看到 Grove 继电器将每 1 秒开启和关闭一次。

**Grove - 声音传感器**

此示例的使用方法与 HelloWorld(LCD) 相同。

* **步骤1**：将 GroveSoundSensor 项目设置为启动项目。
* **步骤2**：硬件连接。
将 Grove 声音传感器连接到端口 A1，并通过 HDMI 线缆将树莓派连接到 LCD 屏幕。
* **步骤3**：部署您的应用程序。参考 HelloWorld(LCD) 示例的步骤3。

当一切设置完成后，您应该能够从 Visual Studio 按 F5。如果有任何您在设置过程中未安装的缺失包，Visual Studio 可能会提示您现在获取这些包。
GroveSoundSensor 应用程序将部署并在 Windows IoT 设备上启动。您可以在 LCD 屏幕上看到 Grove 声音传感器的值。

**Grove - 温湿度传感器**

此示例的使用方法与 HelloWorld(LCD) 相同。

* **步骤1**：将 GroveTempAndHumi 项目设置为启动项目。
* **步骤2**：硬件连接。
将 Grove 温湿度传感器连接到端口 D3，并通过 HDMI 线缆将 Raspberry Pi 连接到 LCD 屏幕。
* **步骤3**：部署您的应用程序。参考 HelloWorld(LCD) 示例的步骤3。

当一切设置完成后，您应该能够从 Visual Studio 按 F5。如果有任何您在设置过程中未安装的缺失包，Visual Studio 可能会提示您现在获取这些包。
GroveTempAndHumi 应用程序将部署并在 Windows IoT 设备上启动。您可以在 LCD 屏幕上看到温度和湿度值。

**Grove - 超声波测距仪**

此示例的使用方法与 HelloWorld(LCD) 相同。

* **步骤1**：将 GroveUltrasonicSensor 项目设置为启动项目。
* **步骤2**：硬件连接。
将 Grove 超声波测距仪连接到端口 D4，并通过 HDMI 线缆将 Raspberry Pi 连接到 LCD 屏幕。
* **步骤3**：部署您的应用程序。参考 HelloWorld(LCD) 示例的步骤3。

当一切设置完成后，您应该能够从 Visual Studio 按 F5。如果有任何您在设置过程中未安装的缺失包，Visual Studio 可能会提示您现在获取这些包。
GroveUltrasonicSensor 应用程序将部署并在 Windows IoT 设备上启动。您可以在 LCD 屏幕上看到距离值。

**家庭天气显示**

此示例的使用方法与 HelloWorld(LCD) 相同。

* **步骤1**：将 HomeWeatherDisplay 项目设置为启动项目。
* **步骤2**：硬件连接。
将 Grove 温湿度传感器连接到端口 D3，使用 Grove 线缆连接器将 RGB LCD 连接到端口 I2C。
* **步骤3**：部署您的应用程序。参考 Blink 示例的步骤5。

当一切设置完成后，您应该能够从 Visual Studio 按 F5。如果有任何您在设置过程中未安装的缺失包，Visual Studio 可能会提示您现在获取这些包。
家庭天气显示应用程序将部署并在 Windows IoT 设备上启动，您可以在 RGB LCD 上看到温度。

**一个项目中的所有模块**

此示例的使用方法与 HelloWorld(LCD) 相同。

* **步骤1**：将 All_in_One 项目设置为启动项目。
* **步骤2**：硬件连接。
  * Grove - 继电器 > D2
  * Grove - 温湿度传感器 > D3
  * Grove - 超声波测距仪 > D4
  * Grove - LED 条 V2.0 > D5
  * Grove - 蜂鸣器 > D6
  * Grove - 按钮 > D7
  * Grove - 旋转角度传感器 > A0
  * Grove - 声音传感器 > A1
  * Grove - 光线传感器 > A2

按照表格所示将 Grove 模块连接到 GrovePi+。并通过 HDMI 线缆将 Raspberry Pi 连接到 LCD 屏幕。

* **步骤3**：部署您的应用程序。参考 HelloWorld(LCD) 示例的步骤3。

当一切设置完成后，您应该能够从 Visual Studio 按 F5。如果有任何您在设置过程中未安装的缺失包，Visual Studio 可能会提示您现在获取这些包。
All_in_One 应用程序将部署并在 Windows IoT 设备上启动。
您可以在 LCD 屏幕上看到距离、声音、光线值和继电器状态。角度传感器将在屏幕上显示为图表。LED 条指示角度传感器的值。按下并按住按钮，Grove 继电器将打开。

## 另请参阅

* [Windows Dev Center](https://dev.windows.com/en-us/iot)
* [GrovePi C# 库代码](https://github.com/DexterInd/GrovePi/tree/master/Software/CSharp)
* [示例代码](https://github.com/Seeed-Studio/GrovePiExamples_win10)

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