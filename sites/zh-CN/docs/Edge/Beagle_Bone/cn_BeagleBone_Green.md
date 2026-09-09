---
description: SeeedStudio BeagleBone® Green
title: SeeedStudio BeagleBone® Green
keywords:
  - Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /BeagleBone_Green
sku: 102010027
last_update:
  date: 9/2/2026
  author: jianjing Huang
createdAt: '2023-01-10'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/BeagleBone_Green/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/cover.jpg" /></div>

Seeed Studio BeagleBone® Green 是一款面向开发者和爱好者的低成本、开源、由社区支持的开发平台。它由 [BeagleBoard.org](https://beagleboard.org/) 与 Seeed Studio 联合打造。该板基于经典的 [BeagleBone® Black](https://beagleboard.org/black) 开源硬件设计，并在此基础上开发出了这一差异化版本。Seeed Studio BeagleBone® Green 集成了两个 Grove 接口，使其更容易连接到庞大的 Grove 传感器家族。板载 HDMI 被移除，为这些 Grove 接口腾出了空间。

在 10 秒内启动 Linux，只需一根 USB 线即可在不到 5 分钟内开始开发。


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-p-2504.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.amazon.com/dp/B01AIC5AP4" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 在 amazon.com 购买 </font></span></strong>
    </a>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.amazon.com/dp/B01AIC5AP4" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/amaon.png"  width="300" height="48"  border="0"/></a></p>

## 特性

* **与 BeagleBone® Black 完全兼容**
* **处理器：AM335x 1GHz ARMR Cortex-A8**
  * 512MB DDR3 RAM
  * 板载 4GB 8-bit eMMC 闪存存储
  * 3D 图形加速器
  * NEON 浮点加速器
  * 2x PRU 32 位微控制器
* **连接性**
  * 用于供电和通信的 USB 客户端
  * USB 主机
  * 以太网
  * 2x 46 针排针
  * 2x Grove 接口（I2C 和 UART）
* **软件兼容性**
  * Debian
  * Android
  * Ubuntu
  * 基于 Node.js 的 Cloud9 IDE，配套 BoneScript 库
  * 以及更多

## 规格参数

|Item|Value|
|----|------|
|Processor| AM335x 1GHz ARMR Cortex-A8|
|RAM| 512MB DDR3|
|on-board Flash Storage |4GB eMMC|
|CPU Supports |NEON floating-point & 3D graphics accelerator|
|Micro USB Supports |powering & communications|
|USB |Host 1|
|Grove Connectors |2 (One I2C and One UART) |
|GPIO |2 x 46 pin headers|
|Ethernet |1|
|Operating Temperature |0 ~ 75 |

## 应用构想

* 物联网
* 智能家居
* 工业
* 自动化与过程控制
* 人机界面
* 传感器集线器
* 机器人

这里有一些有趣的项目供你参考。

|Home Center|Retro Lamp|Drive a Motor|
|---------------|-----|--------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project3.jpg" /></div>|
|[立即制作！](https://www.instructables.com/id/Home-Control-Center-Using-BeagleBone-Green-Wireles/)|[立即制作！](https://www.instructables.com/id/DIY-a-Retro-Wooden-Lamp-with-BBG/)|[立即制作！](https://www.instructables.com/id/A-BeagleBone-Tutorial-Getting-Started-With-Motor-B/)|

|Seeed Studio BeagleBone® Green Acrylic Case|GPIO Control|Smart Light|
|---------------|-----|--------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project5.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project6.png" /></div>|
|[立即制作！](https://www.instructables.com/id/5-Design-of-Laser-Cut-Cases-for-5-Popular-Platform/)|[立即制作！](https://community.seeedstudio.com/How-to-use-the-Grove-UART-port-as-a-GPIO-on-BBG-p-365.html)|[立即制作！](https://community.seeedstudio.com/Smart-Light-Demo-with-BBG-%26amp%3B-BBG-Start-Kit(HA)-p-366.html)|

## 硬件概览

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/10201002703.jpg" /></div>

* **USB Host** - USB 主机
* **DC Power and USB Client** - 为开发板供电并作为客户端
* **LED 指示灯**
  * **D2** 在启动时被配置为以心跳模式闪烁
  * **D3** 在启动时被配置为在 microSD 卡访问期间点亮
  * **D4** 在启动时被配置为在 CPU 活动期间点亮
  * **D5** 在启动时被配置为在 eMMC 访问期间点亮
* **启动按键**
  * 当插入 SD 卡时，系统会优先从 SD 卡启动，如果你想从 eMMC 启动，请按下此按钮然后上电。
  * 启动后可作为普通按键使用，连接到 **GPIO_72**
* **I2C Grove 接口** - 连接到 **I2C2**
* **Uart Grove 接口** - 连接到 **UART2**
* **串口调试** - 连接到 **UART0**，PIN1~PIN6：GND、NC、NC、RX、TX、NC，注意 pin1 靠近 USB。

**引脚分布图**

每个数字 I/O 引脚都有 8 种不同的模式可供选择，包括 GPIO。

**65 个可用数字 I/O**

:::note
    在 GPIO 模式下，每个数字 I/O 都可以产生中断。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_IO.png" /></div>

**PWM 和定时器**

:::note
最多可以将 8 个数字 I/O 引脚配置为脉宽调制器（PWM），用于产生控制电机的信号或创建伪模拟电压电平，而不会占用任何额外的 CPU 周期。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_TIMER.png" /></div>

**模拟输入**

:::note
确保输入到模拟输入引脚的电压不超过 1.8V。该板载一个 12 位模数转换器，具有 8 个通道，其中 7 个通过排针引出可用。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_ANALOG.png" /></div>

**UART**

:::note
有一个专用排针用于连接到 UART0 引脚并接入调试线缆。还有 5 个额外串口被引出到扩展排针，但其中一个只有单向信号被引出到排针。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_UART.png" /></div>

**I2C**

:::note
第一个 I2C 总线用于读取 cape 扩展板上的 EEPROM，如果将其用于其他数字 I/O 操作会干扰该功能，但你仍然可以在空闲地址上添加其他 I2C 设备。第二个 I2C 总线可供你自行配置和使用。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_I2C.png" /></div>

**SPI**

:::note
    如果需要高速移出数据，你可以考虑使用其中一个 SPI 端口。
:::

![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_SPI.png)

## 机械图纸

![](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/BBG_drawing_1.png)

![](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/BBG_drawing_2.png)

<iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=26887ef4-fe20-4d82-b4dc-25f58774d64f" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="800" height="450" allowfullscreen></iframe>

## 入门指南

:::note
本章节以 Win10 为例编写，其他操作系统的步骤也大同小异。
:::

**步骤 1. 通过 USB 连接你的 Seeed Studio BeagleBone® Green**

使用随附的 micro USB 线将 Seeed Studio BeagleBone® Green 插入你的电脑。这既会为开发板供电，也会提供开发接口。Seeed Studio BeagleBone® Green 将从板载 2GB 或 4GB eMMC 启动 Linux。

Seeed Studio BeagleBone® Green 会作为一个 U 盘运行，为你提供文档和驱动程序的本地副本。请注意，该接口不能用于通过新镜像重新配置 microSD 卡，但可以通过 `uEnv.txt` 文件更新启动参数。

你会看到 PWR 指示灯常亮。在 10 秒内，你应该会看到其他指示灯按默认配置开始闪烁。

* D2 在启动时被配置为以心跳模式闪烁
* D3 在启动时被配置为在 microSD 卡访问期间点亮
* D4 在启动时被配置为在 CPU 活动期间点亮
* D5 在启动时被配置为在 eMMC 访问期间点亮

**步骤 2. 安装驱动**

为你的操作系统安装驱动，以便通过 USB 网络访问你的 Beagle。额外的驱动可以让你通过串口访问你的开发板。

|Operating System | USB Drivers | Comments |
|---------------------|---------|------------|
|Windows (64-bit) | [64-bit installer](https://beagleboard.org/static/Drivers/Windows/BONE_D64.exe)  | |
|Windows (32-bit) | [32-bit installer](https://beagleboard.org/static/Drivers/Windows/BONE_DRV.exe)||
|Mac OS X|[Network](https://beagleboard.org/static/Drivers/MacOSX/RNDIS/HoRNDIS.pkg) [Serial](https://beagleboard.org/static/Drivers/MacOSX/FTDI/EnergiaFTDIDrivers2.2.18.pkg) | 请安装这两套驱动。|
|Linux|[mkudevrule.sh](https://beagleboard.org/static/Drivers/Linux/FTDI/mkudevrule.sh)|不强制要求安装驱动，但你可能会发现一些 udev 规则很有帮助。|

:::note
    对于 Windows 系统，请注意：

* Windows 驱动认证警告可能会弹出两到三次。点击 "Ignore"、"Install" 或 "Run"
* 要检查你运行的是 32 位还是 64 位 Windows，请参考[这里](https://support.microsoft.com/kb/827218)。
* 在没有安装最新服务版本的系统上，您可能会遇到错误（0xc000007b）。在这种情况下，请先[安装](https://www.microsoft.com/en-us/download/confirmation.aspx?id=13523)然后重试：
* 您可能需要重启 Windows。
* 这些驱动已经测试可在 Windows 10 上正常工作
:::

:::note
更多 FTDI USB 转串口/JTAG 信息和驱动可从 [https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm) 获取。
:::

:::note
更多 USB 转虚拟以太网的信息和驱动可从 [https://www.linux-usb.org/gadget/](https://www.linux-usb.org/gadget/) 和 [https://joshuawise.com/horndis](https://joshuawise.com/horndis) 获取。
:::

**步骤 3. 访问你的 Beagle**

使用 Chrome 或 Firefox（Internet Explorer 将无法工作），访问运行在你开发板上的 Web 服务器。它会加载一个演示文稿，向你展示开发板的功能。使用键盘上的方向键浏览演示文稿。

点击 [http://192.168.7.2](http://192.168.7.2) 以启动你的 Seeed Studio BeagleBone® Green。
较旧的软件镜像需要你弹出 BeagleBone® 驱动器以启动网络。使用最新的软件镜像时，不再需要这一步。

[![点击查看大图](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/launch.png)](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/launch.png)

**步骤 4. Cloud9 IDE**

要开始编辑存储在开发板上的程序，你可以点击使用 Cloud9 IDE

[![在此输入图片描述](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/cloud9.png)](http://192.168.7.2:3000/ide.html)

## 更新到最新软件

你需要将开发板更新到最新软件以保持更好的性能，这里我们将一步一步向你展示如何操作。

**步骤 1. 下载最新软件镜像**

首先，你需要在这里下载合适的镜像。

[![在此输入图片描述](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/down_latest_image.png)](https://beagleboard.org/latest-images)

:::note
由于文件较大，下载可能需要大约 30 分钟或更长时间。
:::

你下载的文件扩展名为 **.img.xz**。这是 SD 卡的压缩扇区镜像。

**步骤 2. 安装压缩工具并解压镜像**

下载并安装 [7-zip.](http://www.7-zip.org/download.html)

:::note
    选择一个适合你系统的版本。
:::

使用 7-zip 解压 SD 卡的 **.img 文件**

**步骤 3. 安装 SD 卡烧录工具**

下载并安装 [Image Writer for Windows](https://sourceforge.net/projects/win32diskimager/files/latest/download)。请务必下载二进制发行版。

**步骤 4. 将镜像写入 SD 卡**

首先你需要一个 SD 转接器将 microSD 卡连接到电脑。然后使用 Image Write for Windows 软件将解压后的镜像写入 SD 卡。

![在此输入图片描述](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/win32_disk_image.png)

点击 **Write** 按钮，然后进程就会开始。

![在此输入图片描述](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/win32_disk_image_process.png)

:::note

* 你可能会看到有关损坏设备的警告。只要你选择的是 SD 卡作为写入目标，接受该警告是没有问题的。
* 此时你不应将 BeagleBone® 连接到电脑。
* 此过程可能需要长达 10 分钟。
:::

**步骤 5. 从 SD 卡启动你的开发板**

将 SD 卡插入（先断电的）开发板。然后开发板将从 SD 卡启动。

:::note
如果你不需要将镜像写入板载 eMMC，则不需要阅读本章剩余内容。否则请继续。
:::

如果你希望将镜像写入板载 eMMC，你需要登录到开发板并修改一个文件。

在 **/boot/uEnv.txt** 中：

    ##enable BeagleBone® Black: eMMC Flasher:
    #cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh
修改为：

    ##enable BeagleBone® Black: eMMC Flasher:
    cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh

然后你会看到 4 个用户 LED 如下图所示点亮

![在此输入图片描述](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/flashing.gif)

:::note
如果你没有看到上面的流水灯效果，请按下 RESET 按钮重置开发板。
:::

当烧录完成时，4 个 USRx LED 都会**熄灭**。最新的 Debian 烧录镜像会在完成后自动关闭开发板电源。这可能需要长达 **10 分钟**。关闭开发板电源，取出 SD 卡，再次上电即可完成。

## 适用于 Seeed Studio BeagleBone® Green 的 Grove

Grove 是一种模块化、标准化连接器的原型系统。Grove 采用搭积木的方式来组装电子电路。与基于跳线或焊接的系统相比，它更易于连接、实验和搭建，并简化了学习过程，但又不会简单到一无所学。市面上一些其他原型系统把难度降到了积木级别，那样也有很多值得学习的内容，但 Grove 系统允许你构建真正的系统。要把东西连接起来，仍然需要一定的学习和经验。

下面列出了与 Seeed Studio BeagleBone® Green 配合良好的 Grove 模块。

|SKU        |Name|Interface|link|
|-----------|-----|-----|----------|
|101020054  |Grove - 3-Axis Digital Accelerometer(+16g)     | I2C| [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B116g%29-p-1156.html)|
|101020071  |Grove - 3-Axis Digital Accelerometer(+400g)    | I2C| [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B1400g%29-p-1897.html)|
|101020034  |Grove - 3-Axis Digital Compass                 | I2C| [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html)|
|101020050  |Grove - 3-Axis Digital Gyro                    | Analog| [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html)|
|101020081 |Grove - 6-Axis Accelerometer&Compass v2.0      | I2C| [link](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer&Compass-v2.0-p-2476.html)|
|101020072 |Grove - Barometer Sensor(BMP180)              | I2C| [link](https://www.seeedstudio.com/Grove-Barometer-Sensor-%28BMP180%29-p-1840.html)|
|104030010 |Grove - Blue LED                               | I/O| [link](https://www.seeedstudio.com/Grove-Blue-LED-p-1139.html)|
|101020003 |Grove - Button                                 |I/O| [link](https://www.seeedstudio.com/Grove-Button-p-766.html)|
|111020000 |Grove - Button(P)                             |I/O| [link](https://www.seeedstudio.com/Grove-Button%28P%29-p-1243.html)|
|107020000 |Grove - Buzzer                                 |I/O| [link](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|
|104030006 |Grove - Chainable RGB LED                     |I2C| [link](https://www.seeedstudio.com/Grove-Chainable-RGB-LED-p-850.html)|
|101020030 |Grove - Digital Light Sensor                 |I2C| [link](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|
|103020024 |Grove - Finger-clip Heart Rate Sensor         |I2C| [link](https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-p-2425.html)|
|101020082 |Grove - Finger-clip Heart Rate Sensor with shell |I2C|[link](https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-with-shell-p-2420.html)|
|113020003 |Grove - GPS                         |UART| [link](https://www.seeedstudio.com/Grove-GPS-p-959.html)|
|104030007 |Grove - Green LED |I/O| [link](https://www.seeedstudio.com/Grove-Green-LED-p-1144.html)|
|103020013 |Grove - I2C ADC |I2C| [link](https://wiki.seeedstudio.com/cn/Grove-I2C_ADC/)|
|103020006 |Grove - I2C Hub |I2C| [link](https://www.seeedstudio.com/Grove-I2C-Hub-p-851.html)|
|101020079 |Grove - IMU 10DOF |I2C| [link](https://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html)|
|101020080 |Grove - IMU 9DOF v2.0 |I2C| [link](https://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)|
|101020040 |Grove - IR Distance Interrupter |I/O| [link](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html)|
|104030011 |Grove - OLED Display 0.96'' |I2C| [link](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|
|104030008 |Grove - OLED Display 1.12'' |I2C| [link](https://www.seeedstudio.com/Grove-OLED-Display-0.96%22-p-781.html)|
|104030005 |Grove - Red LED |I/O| [link](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|
|103020005 |Grove - Relay |I/O| [link](https://www.seeedstudio.com/Grove-Relay-p-769.html)|
|316010005 |Grove - Servo |I/O| [link](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|
|101020023 |Grove - Sound Sensor |Analog| [link](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|
|101020004 |Grove - Switch(P) |I/O| [link](https://www.seeedstudio.com/Grove-Switch%28P%29-p-1252.html)|
|101020015 |Grove - Temperature Sensor |Analog| [link](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|
|101020019 |Grove - Temperature&Humidity Sensor Pro |Analog| [link](https://www.seeedstudio.com/Grove-Temperature&Humidity-Sensor-Pro-p-838.html)|

## 适用于 Seeed Studio BeagleBone® Green 的 Cape

当你开始一个项目时，你会需要一些扩展板。已经有许多适用于 Seeed Studio BeagleBone® Green 的 cape，它们包括 LCD 显示屏、电机驱动以及 HDMI 扩展等。下面是其中一些推荐的产品。

|Grove Cape| Motor Bridge Cape|HDMI Cape|
|------------|----------------|----------|
|![在此输入图片描述](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product1.jpg)|![在此输入图片描述](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product2.jpg)|![在此输入图片描述](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product3.jpg)|
|[GET ONE NOW!](https://www.seeedstudio.com/Grove-Cape-for-BeagleBone-Series-p-1718.html)|[GET ONE NOW!](https://www.seeedstudio.com/Motor-Bridge-Cape-p-2569.html)|[GET ONE NOW!](https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-HDMI-Cape-p-2570.html)|

|Grove Cape| 5 英寸 LCD|7 英寸 LCD|
|------------|----------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product6.jpg)|
|[GET ONE NOW!](https://www.seeedstudio.com/Grove-Base-Cape-for-Beaglebone-v2.0-p-2644.html)|[GET ONE NOW!](https://www.seeedstudio.com/5-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2642.html)|[GET ONE NOW!](https://www.seeedstudio.com/7-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2643.html)|

## 常见问题

**1. Seeed Studio BeagleBone® Green 1 和 Seeed Studio BeagleBone® Green 2 有什么区别？**

 我们在 2016 年更新了 Seeed Studio Beaglebone® Green 上的 eMMC。因此，适用于 Seeed Studio BeagleBone® Green 1 的旧固件无法在 Seeed Studio BeagleBone® Green 2 上使用，但新固件可以在 Seeed Studio BeagleBone® Green 1 和 Seeed Studio BeagleBone® Green 2 上正常使用。

![](https://files.seeedstudio.com/wiki/BeagleBone_Green/bbg12.png)

 **2. 有时 Seeed Studio BeagleBone® Green 的网络端口不工作，必须重启后才能恢复工作。偶尔会发生这种情况。**

请更换一个稳定的电源再试一次。通常手机 USB 电源适配器比电脑 USB 供电更稳定。或者你可以移除电容 C162。

![](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/Capatictor.png)

:::note
BeagleBone Green 于 2021 年进行了修订，上述提到的电容 C162 在更新后的板子上已不存在。此常见问题仅适用于 2021 年之前发布的 BeagleBone Green 版本。
:::

**3. Seeed Studio BeagleBone® Green 的工作温度范围是多少？**

BeagleBone® Green 的工作温度范围为 0-75 摄氏度。

## 参考资料

有许多参考资料可以帮助你获取更多关于该开发板的信息。

* [BeagleBoard 主页](https://beagleboard.org/)
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
* **[PDF]** [Seeed Studio BeagleBone® Green 原理图 v1.2](https://files.seeedstudio.com/products/102010027/Res/BeagleBone_Green_REV1.2_SCH_240816.pdf)
* **[ZIP]** [Seeed Studio BeagleBone® Green 原理图 v1.2](https://files.seeedstudio.com/products/102010027/Res/202003277_BeagleBone_Green_REV1.2.zip)
* **[PDF]** [Seeed Studio BeagleBone® Green 原理图 v1](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BEAGLEBONE_GREEN_V1.pdf)
* **[Zip]** [Seeed Studio BeagleBone® Green 原理图(OrCAD) v1c](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BeagleBone_Green_v1c.zip)
* **[RAR]** [Seeed Studio BeagleBone® Green 原理图(OrCAD)](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BEAGLEBONE_GREEN_V1_166%28sch%29.rar)
* **[RAR]** [Seeed Studio BeagleBone® Green PCB(OrCAD)](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BeagleBone_Green_v1.166%28board%29.rar)
* **[Zip]** [AM335X 数据手册](https://files.seeedstudio.com/wiki/Bazaar_file/102010027/AM335x.pdf)
* **[3D]** [Seeed Studio BeagleBone® Green 3D 模型](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BBG.zip)
* **[PDF]** [Seeed Studio BeagleBone® Green 机械图纸](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BBG-PCBA.pdf)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
