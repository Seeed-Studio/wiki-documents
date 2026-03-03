---
description: SeeedStudio BeagleBone® Green
title: SeeedStudio BeagleBone® Green
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/BeagleBone_Green
sku: 102010027
last_update:
  date: 1/10/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/cover.jpg" /></div>

Seeed Studio BeagleBone® Green 是一个低成本、开源、社区支持的开发平台，适合开发者和爱好者使用。它是 [BeagleBoard.org](https://beagleboard.org/) 和 Seeed Studio 的联合成果。基于经典的 [BeagleBone® Black](https://beagleboard.org/black) 开源硬件设计，开发出了这一差异化版本。Seeed Studio BeagleBone® Green 包含两个 Grove 接口，使得连接到庞大的 Grove 传感器家族更加方便。板载 HDMI 被移除，为这些 Grove 接口腾出了空间。

在不到 10 秒内启动 Linux，并通过一根 USB 数据线在不到 5 分钟内开始开发。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-p-2504.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.amazon.com/dp/B01AIC5AP4" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 在 amazon.com 上购买 </font></span></strong>
    </a>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.amazon.com/dp/B01AIC5AP4" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/amaon.png"  width="300" height="48"  border="0"/></a></p>

## 特性

* **完全兼容 BeagleBone® Black**
* **处理器：AM335x 1GHz ARMR Cortex-A8**
  * 512MB DDR3 RAM
  * 板载 4GB 8-bit eMMC 闪存
  * 3D 图形加速器
  * NEON 浮点加速器
  * 2x PRU 32 位微控制器
* **连接性**
  * USB 客户端用于供电和通信
  * USB 主机
  * 以太网
  * 2x 46 针接头
  * 2x Grove 接口（I2C 和 UART）
* **软件兼容性**
  * Debian
  * Android
  * Ubuntu
  * 基于 Node.js 的 Cloud9 IDE，带有 BoneScript 库
  * 以及更多

## 规格

|项目|参数|
|----|------|
|处理器| AM335x 1GHz ARMR Cortex-A8|
|RAM| 512MB DDR3|
|板载闪存 |4GB eMMC|
|CPU 支持 |NEON 浮点 & 3D 图形加速器|
|Micro USB 支持 |供电 & 通信|
|USB |主机 1 个|
|Grove 接口 |2 个（一个 I2C 和一个 UART） |
|GPIO |2 x 46 针接头|
|以太网 |1 个|
|工作温度 |0 ~ 75 |

## 应用场景

* 物联网
* 智能家居
* 工业
* 自动化与过程控制
* 人机界面
* 传感器集线器
* 机器人

以下是一些有趣的项目供您参考。

|家庭中心|复古灯|驱动电机|
|---------------|-----|--------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project3.jpg" /></div>|
|[立即制作！](https://www.instructables.com/id/Home-Control-Center-Using-BeagleBone-Green-Wireles/)|[立即制作！](https://www.instructables.com/id/DIY-a-Retro-Wooden-Lamp-with-BBG/)|[立即制作！](https://www.instructables.com/id/A-BeagleBone-Tutorial-Getting-Started-With-Motor-B/)|

|Seeed Studio BeagleBone® Green 亚克力外壳|GPIO 控制|智能灯|
|---------------|-----|--------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project5.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project6.png" /></div>|
|[立即制作！](https://www.instructables.com/id/5-Design-of-Laser-Cut-Cases-for-5-Popular-Platform/)|[立即制作！](https://community.seeedstudio.com/How-to-use-the-Grove-UART-port-as-a-GPIO-on-BBG-p-365.html)|[立即制作！](https://community.seeedstudio.com/Smart-Light-Demo-with-BBG-%26amp%3B-BBG-Start-Kit(HA)-p-366.html)|

## 硬件概览

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/10201002703.jpg" /></div>

* **USB 主机** - USB 主机
* **DC 电源和 USB 客户端** - 为板子供电并充当客户端
* **LED 指示灯**
  * **D2** 在启动时配置为以心跳模式闪烁
  * **D3** 在启动时配置为在 microSD 卡访问期间点亮
  * **D4** 在启动时配置为在 CPU 活动期间点亮
  * **D5** 在启动时配置为在 eMMC 访问期间点亮
* **启动按钮**
  * 当插入 SD 卡时，系统将优先从 SD 卡启动。如果您希望从 eMMC 启动，请按下此按钮然后上电。
  * 启动后作为普通按钮使用，连接到 **GPIO_72**
* **I2C Grove 接口** - 连接到 **I2C2**
* **Uart Grove 接口** - 连接到 **UART2**
* **串行调试** - 连接到 **UART0**，PIN1~PIN6：GND, NC, NC, RX, TX, NC，注意 PIN1 靠近 USB。

**引脚映射**

每个数字 I/O 引脚有 8 种不同的模式可供选择，包括 GPIO。

**65 个可能的数字 I/O**

:::note
    在 GPIO 模式下，每个数字 I/O 都可以产生中断。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_IO.png" /></div>

**PWM 和定时器**

:::note
最多可以将 8 个数字 I/O 引脚配置为脉宽调制器 (PWM)，以生成信号来控制电机或创建伪模拟电压水平，而无需占用额外的 CPU 周期。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_TIMER.png" /></div>

**模拟输入**

:::note
请确保不要向模拟输入引脚输入超过 1.8V 的电压。这是一个单通道 12 位模数转换器，具有 8 个通道，其中 7 个通道可通过引脚头访问。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_ANALOG.png" /></div>

**UART**

:::note
有一个专用的引脚头用于连接到 UART0 引脚并连接调试电缆。扩展引脚头提供了另外五个串行端口，但其中一个端口仅有单向连接到引脚头。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_UART.png" /></div>

**I2C**

:::note
第一个 I2C 总线用于读取扩展板上的 EEPROM，不能用于其他数字 I/O 操作，否则会干扰其功能，但您仍然可以在可用地址上添加其他 I2C 设备。第二个 I2C 总线可供您配置和使用。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_I2C.png" /></div>

**SPI**

:::note
    如果需要快速输出数据，可以考虑使用 SPI 端口。
:::

![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_SPI.png)

## 机械图纸

![](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/BBG_drawing_1.png)

![](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/BBG_drawing_2.png)

<iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=26887ef4-fe20-4d82-b4dc-25f58774d64f" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="800" height="450" allowfullscreen></iframe>

## 入门指南

:::note
本章节基于 Win10 编写。其他操作系统的步骤类似。
:::

**步骤1. 通过 USB 连接 Seeed Studio BeagleBone® Green**

使用提供的 micro USB 数据线将 Seeed Studio BeagleBone® Green 连接到您的电脑。这将为开发板供电并提供开发接口。Seeed Studio BeagleBone® Green 将从板载的 2GB 或 4GB eMMC 启动 Linux。

Seeed Studio BeagleBone® Green 将作为一个闪存驱动器运行，为您提供本地文档和驱动程序的副本。请注意，此接口不能用于通过 microSD 卡重新配置新镜像，但可以通过 uEnv.txt 文件更新启动参数。

您会看到 PWR LED 持续点亮。在 10 秒内，您应该会看到其他 LED 按默认配置闪烁。

* D2 在启动时配置为以心跳模式闪烁
* D3 在启动时配置为在 microSD 卡访问期间点亮
* D4 在启动时配置为在 CPU 活动期间点亮
* D5 在启动时配置为在 eMMC 访问期间点亮

**步骤2. 安装驱动程序**

为您的操作系统安装驱动程序，以便通过 USB 网络访问 Beagle。额外的驱动程序可以为您提供对开发板的串行访问。

| 操作系统 | USB 驱动程序 | 备注 |
|---------------------|---------|------------|
| Windows (64 位) | [64 位安装程序](https://beagleboard.org/static/Drivers/Windows/BONE_D64.exe)  | |
| Windows (32 位) | [32 位安装程序](https://beagleboard.org/static/Drivers/Windows/BONE_DRV.exe)||
| Mac OS X|[网络驱动](https://beagleboard.org/static/Drivers/MacOSX/RNDIS/HoRNDIS.pkg) [串行驱动](https://beagleboard.org/static/Drivers/MacOSX/FTDI/EnergiaFTDIDrivers2.2.18.pkg) | 请安装两组驱动程序。|
| Linux|[mkudevrule.sh](https://beagleboard.org/static/Drivers/Linux/FTDI/mkudevrule.sh)|不需要安装驱动程序，但您可能会发现一些 udev 规则有用。|

:::note
    对于 Windows 系统，请注意：

* Windows 驱动程序认证警告可能会弹出两到三次。点击“忽略”、“安装”或“运行”。
* 要检查您运行的是 32 位还是 64 位 Windows，请参阅 [此处](https://support.microsoft.com/kb/827218)。
* 在没有最新服务版本的系统上，您可能会遇到错误 (0xc000007b)。在这种情况下，请[安装](https://www.microsoft.com/en-us/download/confirmation.aspx?id=13523)并重试。
* 您可能需要重启 Windows。
* 这些驱动程序已测试可在 Windows 10 上运行。
:::

:::note
更多关于 FTDI USB 转串行/JTAG 的信息和驱动程序，请访问 [https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm)。
:::

:::note
更多关于 USB 转虚拟以太网的信息和驱动程序，请访问 [https://www.linux-usb.org/gadget/](https://www.linux-usb.org/gadget/) 和 [https://joshuawise.com/horndis](https://joshuawise.com/horndis)。
:::

**步骤3. 访问您的 Beagle**

使用 Chrome 或 Firefox 浏览器（Internet Explorer 不支持），访问运行在开发板上的 Web 服务器。它将加载一个展示开发板功能的演示文稿。使用键盘上的方向键导航演示文稿。

点击 [http://192.168.7.2](http://192.168.7.2) 访问您的 Seeed Studio BeagleBone® Green。
旧版软件镜像需要您弹出 BeagleBone® 驱动器以启动网络。使用最新的软件镜像，不再需要此步骤。

[![点击查看大图](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/launch.png)](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/launch.png)

**步骤4. Cloud9 IDE**

要开始编辑存储在开发板上的程序，您可以通过点击以下链接使用 Cloud9 IDE：

[![点击进入 Cloud9 IDE](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/cloud9.png)](http://192.168.7.2:3000/ide.html)

## 更新到最新软件

您需要将开发板更新到最新的软件以保持更好的性能，以下是逐步操作指南。

**步骤1. 下载最新的软件镜像**

首先，您需要在此处下载适合的镜像。

[![点击下载](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/down_latest_image.png)](https://beagleboard.org/latest-images)

:::note
由于文件较大，下载可能需要大约30分钟或更长时间。
:::

您下载的文件将具有 **.img.xz** 扩展名。这是SD卡的压缩扇区镜像。

**步骤2. 安装解压工具并解压镜像**

下载并安装 [7-zip](http://www.7-zip.org/download.html)。

:::note
选择适合您系统的版本。
:::

使用 7-zip 解压 SD 卡的 **.img 文件**。

**步骤3. 安装SD卡写入工具**

下载并安装 [Image Writer for Windows](https://sourceforge.net/projects/win32diskimager/files/latest/download)。请确保下载的是二进制发行版。

**步骤4. 将镜像写入SD卡**

首先，您需要一个SD卡适配器将microSD卡连接到计算机。然后使用 Image Writer for Windows 软件将解压后的镜像写入SD卡。

![写入镜像](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/win32_disk_image.png)

点击 **Write** 按钮，开始写入过程。

![写入过程](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/win32_disk_image_process.png)

:::note

* 您可能会看到关于设备损坏的警告。只要您选择的是SD卡进行写入，这个警告是可以接受的。
* 此时不要将 BeagleBone® 连接到计算机。
* 该过程可能需要长达10分钟。
:::

**步骤5. 从SD卡启动开发板**

将SD卡插入（先关闭电源）开发板中。然后开发板将从SD卡启动。

:::note
如果您不需要将镜像写入板载eMMC，则无需阅读本章的最后部分。否则，请继续。
:::

如果您希望将镜像写入板载eMMC，您需要启动开发板并修改一个文件。

在 **/boot/uEnv.txt** 中：

  ##启用 BeagleBone® Black: eMMC 刷写器：
  #cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh

修改为：

  ##启用 BeagleBone® Black: eMMC 刷写器：
  cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh

然后您会看到4个用户LED灯如下图所示：

![闪烁过程](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/flashing.gif)

:::note
如果您没有看到上述的闪烁灯光，请按下 RESET 按钮重置开发板。
:::

当闪存写入完成时，所有4个USRx LED将会 **熄灭**。最新的Debian闪存镜像会在完成后自动关闭开发板电源。这可能需要长达 **10分钟**。关闭开发板电源，移除SD卡并重新上电即可完成。

## Grove 模块适配 Seeed Studio BeagleBone® Green

Grove 是一种模块化、标准化连接器的原型系统。Grove 采用积木式的方法来组装电子元件。与基于跳线或焊接的系统相比，它更容易连接、实验和构建，同时简化了学习过程，但并未降低到过于简单的程度。其他一些原型系统可能将复杂度降低到积木的水平，这种方式也有其学习价值，但 Grove 系统允许您构建真正的系统。它需要一定的学习和专业知识来连接组件。

以下列出了与 Seeed Studio BeagleBone® Green 兼容的 Grove 模块。

|SKU        |名称|接口|链接|
|-----------|-----|-----|----------|
|101020054  |Grove - 3轴数字加速度计(+16g)     | I2C| [链接](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B116g%29-p-1156.html)|
|101020071  |Grove - 3轴数字加速度计(+400g)    | I2C| [链接](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B1400g%29-p-1897.html)|
|101020034  |Grove - 3轴数字罗盘                 | I2C| [链接](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html)|
|101020050  |Grove - 3轴数字陀螺仪                    | 模拟| [链接](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html)|
|101020081 |Grove - 6轴加速度计和罗盘 v2.0      | I2C| [链接](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer&Compass-v2.0-p-2476.html)|
|101020072 |Grove - 气压传感器(BMP180)              | I2C| [链接](https://www.seeedstudio.com/Grove-Barometer-Sensor-%28BMP180%29-p-1840.html)|
|104030010 |Grove - 蓝色LED                               | I/O| [链接](https://www.seeedstudio.com/Grove-Blue-LED-p-1139.html)|
|101020003 |Grove - 按钮                                 |I/O| [链接](https://www.seeedstudio.com/Grove-Button-p-766.html)|
|111020000 |Grove - 按钮(P)                             |I/O| [链接](https://www.seeedstudio.com/Grove-Button%28P%29-p-1243.html)|
|107020000 |Grove - 蜂鸣器                                 |I/O| [链接](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|
|104030006 |Grove - 可串联RGB LED                     |I2C| [链接](https://www.seeedstudio.com/Grove-Chainable-RGB-LED-p-850.html)|
|101020030 |Grove - 数字光传感器                 |I2C| [链接](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|
|103020024 |Grove - 指夹式心率传感器         |I2C| [链接](https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-p-2425.html)|
|101020082 |Grove - 带外壳的指夹式心率传感器 |I2C|[链接](https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-with-shell-p-2420.html)|
|113020003 |Grove - GPS                         |UART| [链接](https://www.seeedstudio.com/Grove-GPS-p-959.html)|
|104030007 |Grove - 绿色LED |I/O| [链接](https://www.seeedstudio.com/Grove-Green-LED-p-1144.html)|
|103020013 |Grove - I2C ADC |I2C| [链接](https://wiki.seeedstudio.com/cn/Grove-I2C_ADC/)|
|103020006 |Grove - I2C 集线器 |I2C| [链接](https://www.seeedstudio.com/Grove-I2C-Hub-p-851.html)|
|101020079 |Grove - IMU 10DOF |I2C| [链接](https://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html)|
|101020080 |Grove - IMU 9DOF v2.0 |I2C| [链接](https://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)|
|101020040 |Grove - 红外距离中断器 |I/O| [链接](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html)|
|104030011 |Grove - OLED 显示屏 0.96'' |I2C| [链接](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|
|104030008 |Grove - OLED 显示屏 1.12'' |I2C| [链接](https://www.seeedstudio.com/Grove-OLED-Display-0.96%22-p-781.html)|
|104030005 |Grove - 红色LED |I/O| [链接](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|
|103020005 |Grove - 继电器 |I/O| [链接](https://www.seeedstudio.com/Grove-Relay-p-769.html)|
|316010005 |Grove - 舵机 |I/O| [链接](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|
|101020023 |Grove - 声音传感器 |模拟| [链接](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|
|101020004 |Grove - 开关(P) |I/O| [链接](https://www.seeedstudio.com/Grove-Switch%28P%29-p-1252.html)|
|101020015 |Grove - 温度传感器 |模拟| [链接](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|
|101020019 |Grove - 温湿度传感器 Pro |模拟| [链接](https://www.seeedstudio.com/Grove-Temperature&Humidity-Sensor-Pro-p-838.html)|

## Seeed Studio BeagleBone® Green 的扩展板（Cape）

当您开始一个项目时，可能需要一些扩展板。目前已经有许多适用于 Seeed Studio BeagleBone® Green 的扩展板，包括 LCD 显示屏、电机驱动器以及 HDMI 扩展等。以下是一些推荐的扩展板。

|Grove Cape| 电机桥接扩展板 (Motor Bridge Cape)|HDMI 扩展板 (HDMI Cape)|
|------------|----------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product3.jpg)|
|[立即购买！](https://www.seeedstudio.com/Grove-Cape-for-BeagleBone-Series-p-1718.html)|[立即购买！](https://www.seeedstudio.com/Motor-Bridge-Cape-p-2569.html)|[立即购买！](https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-HDMI-Cape-p-2570.html)|

|Grove Cape| 5 英寸 LCD|7 英寸 LCD|
|------------|----------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product6.jpg)|
|[立即购买！](https://www.seeedstudio.com/Grove-Base-Cape-for-Beaglebone-v2.0-p-2644.html)|[立即购买！](https://www.seeedstudio.com/5-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2642.html)|[立即购买！](https://www.seeedstudio.com/7-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2643.html)|

## 常见问题解答 (FAQ)

**1. Seeed Studio BeagleBone® Green 1 和 Seeed Studio BeagleBone® Green 2 有什么区别？**

我们在 2016 年更新了 Seeed Studio BeagleBone® Green 的 eMMC。因此，Seeed Studio BeagleBone® Green 1 的旧固件无法在 Seeed Studio BeagleBone® Green 2 上运行，但新固件可以同时兼容 Seeed Studio BeagleBone® Green 1 和 Seeed Studio BeagleBone® Green 2。

![](https://files.seeedstudio.com/wiki/BeagleBone_Green/bbg12.png)

**2. 有时 Seeed Studio BeagleBone® Green 的网络端口无法工作，必须重启才能恢复。这种情况偶尔会发生。**

请更换一个稳定的电源后再试。通常手机 USB 电源适配器比电脑 USB 更稳定。或者，您可以移除电容 C162。

![](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/Capatictor.png)

:::note
BeagleBone Green 在 2021 年进行了修订，上述提到的电容 C162 在更新后的版本中已被移除。本常见问题仅适用于 2021 年之前发布的 BeagleBone Green 版本。
:::

**3. Seeed Studio BeagleBone® Green 的工作温度范围是多少？**

BeagleBone® Green 的工作温度范围为 0-75 摄氏度。

## 参考资料

以下是一些参考资料，可以帮助您获取更多关于该开发板的信息。

* [BeagleBoard 主页面](https://beagleboard.org/)
* [BeagleBoard 页面上的 Seeed Studio BeagleBone® Green 信息](https://beagleboard.org/green)
* [BeagleBoard 入门指南](https://beagleboard.org/getting-started)
* [故障排除](https://beagleboard.org/getting-started#troubleshooting)
* [硬件文档](https://beagleboard.org/getting-started#hardware)
* [BeagleBoard 项目](https://beagleboard.org/project)
* [Seeed Studio BeagleBone® Green 的 CE 认证](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/CE.zip)
* [Seeed Studio BeagleBone® Green 的 FCC 认证](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/FCC.zip)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BeagleBone_Green_v1c.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* **[PDF]** [Seeed Studio BeagleBone® Green SRM(v1a)](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BBG_SRM_V1a_20151009.pdf)
* **[PDF]** [Seeed Studio BeagleBone® Green SRM(v3)](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BBG_SRM_V3_20150804.pdf)
* **[PDF]** [Seeed Studio BeagleBone® Green 原理图 v1.1](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BeagleBone_Green_REV1.1_SCH.pdf)
* **[ZIP]** [Seeed Studio BeagleBone® Green 原理图 v1.1](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BeagleBone_Green_REV1.1_SCH.zip)
* **[PDF]** [Seeed Studio BeagleBone® Green 原理图 v1](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BEAGLEBONE_GREEN_V1.pdf)
* **[Zip]** [Seeed Studio BeagleBone® Green 原理图(OrCAD) v1c](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BeagleBone_Green_v1c.zip)
* **[RAR]** [Seeed Studio BeagleBone® Green 原理图(OrCAD)](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BEAGLEBONE_GREEN_V1_166%28sch%29.rar)
* **[RAR]** [Seeed Studio BeagleBone® Green PCB(OrCAD)](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BeagleBone_Green_v1.166%28board%29.rar)
* **[Zip]** [AM335X 数据手册](https://files.seeedstudio.com/wiki/Bazaar_file/102010027/AM335x.pdf)
* **[3D]** [Seeed Studio BeagleBone® Green 3D 模型](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BBG.zip)
* **[PDF]** [Seeed Studio BeagleBone® Green 机械图纸](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BBG-PCBA.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>