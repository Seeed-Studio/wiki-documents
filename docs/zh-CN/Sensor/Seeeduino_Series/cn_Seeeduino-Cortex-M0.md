---
description: Seeeduino Cortex M0
title: Seeeduino Cortex M0
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino-Cortex-M0
last_update:
  date: 1/31/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/102010248-wiki.jpg)

Seeeduino Cortex-M0+ 采用基于 32 位 ARM® Cortex®-M0+ 处理器的 Atmel SAMD21 MCU。借助这个强大的内核，SAMD21 比 AVR 更加强大，可以实现许多功能和更复杂的计算，这些是 AVR 芯片无法实现的。

[Seeeduino M0+](https://www.seeedstudio.com/tag/Seeeduino-M0%2B.html) 是一个全新的产品线，完全兼容 Arduino Zero，我们目前在这个系列中有 Seeeduino Cortex-M0+ 和 [Seeeduino Lotus Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)。

Seeeduino Cortex-M0+ 与 Seeeduino Lotus Cortex-M0+ 具有相同的引脚布局，包括 14 个数字 I/O（10 个 PWM 输出）和 6 个模拟 I/O。同时，它提供 3 个板载 Grove 连接器：两个 I2C 和 1 个 UART。如果您想使用更多 grove 端口，可以使用 [Base Shield V2](https://www.seeedstudio.com/Base-Shield-V2.html) 与此板配合使用。

除此之外，Seeeduino Cortex-M0+ 是第一个采用 USB Type C 接口的 Seeeduino 开发板。USB Type C 是未来的趋势：插头可逆、更高的数据传输速率和更多可扩展功能。我们将推出更多采用 Type C 的开发板。您可以使用 Type C 供电和传输数据，或使用 7~15V DC 插孔为此板供电。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

<a href="https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></a>

## 特性

- ARM Cortex-M0+ CPU，运行频率高达 48MHz
- 256KB 系统内自编程 Flash
- 32KB SRAM 内存
- 兼容 Arduino Zero
- 10 位，350ksps 数模转换器（DAC）
- 一个 12 位，350ksps 模数转换器（ADC），最多支持 20 个通道
- USB Type C 用于供电和数据传输

## 规格参数

|项目|值|
|------------|-----------|
|微控制器|SAM D21|
|电源输入|USB Type C|
|工作电压|USB:5V|
|数字 I/O 引脚|14|
|PWM 通道|10|
|模拟输入通道|6|
|每个 I/O 引脚直流电流|40 mA|
|IO 输入电压|3.3V|
|SRAM|32 KB|
|Flash 内存|256KB|
|最大 CPU 频率|48 MHz|

## 硬件概述

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/hardware.png)

### UART

对于 [Seeed M0 系列板](https://www.seeedstudio.com/tag/SEEEDUINO-M0%2B.html)，有 3 个 UART 端口，如下图所示。当您使用 Arduino IDE 编程时，应该使用相应的端口名称：

```
SerialUSB or Serial
```

用于 Type C 端口；

```
Serial1
```

用于 Grove UART 端口；

以及

```
Serial2
```

用于引脚排针中的 UART 引脚

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/UART(1).jpg)

### 引脚图

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/102010248-pinout.jpg)

## 入门指南

### 硬件

**所需材料**

- Seeeduino Cortex-M0+ x1
- 计算机 x1
- USB type-c 数据线 x1

:::tip
    某些 USB 数据线只能供电而无法传输数据。如果您没有 USB 数据线或不确定您的 USB 数据线是否能传输数据，您可以查看 [seeed USB type C support USB 3.1 ](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html)。
:::

使用 USB 数据线将 Seeeduino Cortex-M0+ 连接到您的计算机。蓝色电源 LED（标记为 **PWR**）应该会亮起。

### 软件

- **步骤 1. 您需要安装 Arduino 软件。**

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**启动 Arduino 应用程序**

双击您之前下载的 Arduino 应用程序（arduino.exe）。

:::note
    如果 Arduino 软件以不同语言加载，您可以在首选项对话框中更改它。详情请参见 [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages)。
:::

- **步骤 2. 打开 Blink 示例**  
打开 LED 闪烁示例程序：**File > Examples >01.Basics > Blink**。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" />
    <figcaption><i>Blink 路径</i></figcaption>
  </figure>
</div>

- **步骤 3. 添加 Seeed 开发板**  
请按照 [Seeed Board Intallation Guide](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Boards/) 并搜索关键词 **Seeeduino samd** 来将 **Seeeduino Zero** 添加到您的 Arduino IDE 中。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/board2.png" />
    <figcaption><i>关键词是 <b>samd_zero</b> </i></figcaption>
  </figure>
</div>

- **步骤 4. 选择您的开发板和端口**  
您需要在 **Tools > Board** 菜单中选择与您的 Arduino 对应的条目。
选择 **Seeeduino zero**。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/board1.png" />
    <figcaption> <i>选择正确的开发板</i></figcaption>
  </figure>
</div>

从 Tools | Serial Port 菜单中选择 Arduino 开发板的串行设备。这很可能是 COM3 或更高（**COM1** 和 **COM2** 通常为硬件串行端口保留）。要找出端口，您可以断开 Arduino 开发板的连接并重新打开菜单；消失的条目应该就是 Arduino 开发板。重新连接开发板并选择该串行端口。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/port.png" />
    <figcaption><i>选择正确的端口</i></figcaption>
  </figure>
</div>

- **步骤 5. 上传程序**  
现在，只需点击环境中的"Upload"按钮。等待几秒钟，如果上传成功，状态栏中将显示"Done uploading."消息。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" />
    <figcaption><i>上传代码</i></figcaption>
  </figure>
</div>

上传完成几秒钟后，您应该会看到开发板上的引脚 13 (L) LED 开始闪烁。如果是这样，恭喜您！您已经成功运行了 Arduino。如果遇到问题，请参阅故障排除建议。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/res/Seeeduino%20Cortex-M0%2B%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Seeeduino Cortex-M0+ v1.0 Eagle 文件](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/res/Seeeduino%20Cortex-M0%2B%20v1.0.zip)
- **[PDF]** [SAMD21-数据手册](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/res/SAM-D21-Datasheet.pdf)

:::note
        要使用 Seeeduino Cortex-M0+ 的 UART，您需要使用 ``
:::

## 技术支持与产品讨论

<div>

  <br />感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
</div>
