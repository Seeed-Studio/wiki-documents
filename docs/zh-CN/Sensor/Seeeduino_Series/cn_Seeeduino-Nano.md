---
description: Seeeduino Nano
title: Seeeduino Nano
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino-Nano
last_update:
  date: 1/31/2023
  author: shuxu hu
---
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/seeeduino-Nano-wiki.jpg)

Seeeduino Nano 是一款紧凑型开发板，类似于 [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)/Arduino UNO，在引脚排列和尺寸上完全兼容 [Arduino Nano](https://store.arduino.cc/usa/arduino-nano)。

与 Seeedunio V4.2 相同，Seeeduino Nano 基于 Atmega328P -- 8位 AVR 微控制器构建。因此您可以在两个开发板上使用相同的程序代码。然而，两者的尺寸差异显著。尺寸不到四分之一，但具有几乎相同的功能，Seeeduino Nano 将为您的项目节省更多空间，更适合空间受限的场景。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/seeeduino-Nano-compare-2.jpg)

Seeeduino Nano 以不到一半的价格提供与 Arduino Nano 相同的功能和高质量体验。另一方面，与 Arduino Nano 相比，Seeeduino Nano 还进行了以下改进。1-将 Mini-USB 更改为 Type-C，对称且可反转。2- 添加一个 Grove I2C 连接器，借助 Grove 系统，您只需插入即可使用数百种传感器和执行器。

还有一点，我们知道仅有一个板载 Grove 连接器可能不够，所以我们制作了这个 [Arduino Nano Grove 扩展板](https://www.seeedstudio.com/Grove-Shield-for-Arduino-Nano-p-4112.html)，它有 3 个 Grove 数字连接器、3 个 Grove 模拟连接器、1 个 Grove I2C 连接器和 1 个 Grove UART 连接器。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html)

## 特性

- 43mm*18mm 小型开发板
- 16M ATmega328P
- 完全兼容 Arduino Nano
- USB Type C 用于编程和供电
- 板载 Grove I2C 连接器
- 面包板友好型

## 规格参数

|项目|值|
|------------|-----------|
|微控制器|ATmega328P|
|电源输入|USB Type C|
|工作电压|USB:5V|
|数字 I/O 引脚|14|
|PWM 通道|6|
|模拟输入通道|8|
|每个 I/O 引脚直流电流|40 mA|
|IO 输入电压|5V|
|SRAM|2 KB|
|闪存|32KB|
|最大 CPU 频率|16 MHz|

## 硬件概述

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/pinout-1.jpg)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/pinout-2.png)

:::note
    I2C 接口未配备上拉电阻。建议在使用时使用 4.7k 电阻上拉至 VCC。
:::

### 电源

除了通过 **Type C** 端口供电外，您还可以使用 **VIN** 和 **GND** 引脚为 Seeeduino Nano 供电。VIN 的输入范围为 7V ~ 12 V。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/Power-1.jpg)
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/Power-1.jpg)

最大功率参数

|项目|值|
|---|---|
|USB Type C 最大输入电流|2A|
|VCC 最大输出电流|1A|
|3V3 引脚最大输出电流|200mA|

## 入门指南

### 硬件

**所需材料**

- Seeeduino Nano x1
- 计算机 x1
- USB type-c 数据线 x1

:::tip
    某些 USB 数据线只能供电而无法传输数据。如果您没有 USB 数据线或不确定您的 USB 数据线是否能传输数据，您可以查看 [seeed USB type C support USB 3.1 ](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html)。
:::

使用 USB 数据线将 Seeeduino Nano 连接到您的计算机。蓝色电源 LED（标记为 **PWR**）应该会亮起。

### 软件

- **步骤 1. 您需要安装 Arduino 软件。**

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**启动 Arduino 应用程序**

双击您之前下载的 Arduino 应用程序（arduino.exe）。

:::note
    如果 Arduino 软件以不同的语言加载，您可以在首选项对话框中更改它。详情请参见 [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages)。
:::

- **步骤 2. 打开 Blink 示例**  
打开 LED 闪烁示例程序：**File > Examples >01.Basics > Blink**。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" />
    <figcaption><b>图 9</b>. <i>Blink 路径</i></figcaption>
  </figure>
</div>

- **步骤 3. 添加 Seeed 开发板**  
请按照 [Seeed Board Intallation Guide](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Boards/) 并搜索关键词 **Seeeduino AVR** 来将 **Seeeduino Nano** 添加到您的 Arduino IDE 中。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/IDE-1.jpg" />
    <figcaption><b>图 10</b>. <i>关键词是 **Seeeduino Nano**</i></figcaption>
  </figure>
</div>

:::tip
    当您安装 Seeeduino AVR 开发板时，请确保选择版本 1.2.1 或更高版本。
:::

- **步骤 4. 选择您的开发板和端口**  
您需要在 **Tools > Board** 菜单中选择与您的 Arduino 对应的条目。
选择 **Seeeduino Nano**。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/IDE-2.jpg" />
    <figcaption><b>图 11</b>. <i>选择正确的开发板</i></figcaption>
  </figure>
</div>

从 Tools | Serial Port 菜单中选择 Arduino 开发板的串行设备。这很可能是 COM3 或更高（**COM1** 和 **COM2** 通常为硬件串行端口保留）。要找出端口，您可以断开 Arduino 开发板的连接并重新打开菜单；消失的条目应该就是 Arduino 开发板。重新连接开发板并选择该串行端口。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/IDE-3.jpg" />
    <figcaption><b>图 12</b>. <i>选择正确的端口</i></figcaption>
  </figure>
</div>

- **步骤 5. 上传程序**  
现在，只需点击环境中的"Upload"按钮。等待几秒钟，如果上传成功，状态栏中将显示"Done uploading."消息。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" />
    <figcaption><b>图 13</b>. <i>上传代码</i></figcaption>
  </figure>
</div>

上传完成几秒钟后，您应该会看到开发板上的引脚 13 (L) LED 开始闪烁（橙色）。如果是这样，恭喜您！您已经成功运行了 Arduino。如果遇到问题，请参阅故障排除建议。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/res/Seeeduino%20nano.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Seeeduino nano Eagle 文件](https://files.seeedstudio.com/wiki/Seeeduino-Nano/res/Seeeduino%20nano.zip)
- **[PDF]** [ATmega328 数据手册](https://files.seeedstudio.com/wiki/Seeeduino-Nano/res/ATmega328-datasheet.pdf)

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
