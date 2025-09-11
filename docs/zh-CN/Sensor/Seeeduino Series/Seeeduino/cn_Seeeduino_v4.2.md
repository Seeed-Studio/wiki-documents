---
description: Seeeduino v4.2
title: Seeeduino v4.2
keywords:
- Seeeduino_Series
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino_v4.2
last_update:
  date: 1/12/2022
  author: jianjing Huang
---


![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/cover.JPG)

Seeeduino v4.2 是一款开源的、Arduino 兼容的 ATmega328 MCU 开发板。我们认为 Seeeduino v4.2 是最好的 Arduino 衍生/兼容板之一。Seeeduino v4.2 功能丰富、更加稳定、易于使用，甚至外观精美。

Seeeduino v4.2 基于 Arduino UNO 引导程序，使用 ATmega16U2 作为 UART 到 USB 转换器（基本上像 FTDI USB2UART 芯片一样工作）。该板为所有引脚提供了额外的通孔焊盘。这些焊盘按 0.1" 网格对齐。这使得焊接额外的排针插入面包板或使用 0.1" 点阵通用 PCB 创建自己的附件/扩展板变得容易。

您可以通过 micro-USB 线缆对板子进行编程。此外，您还可以通过 DC 插孔输入为板子供电（可接受 7 到 15V DC）。有一个开关可以选择系统的供电电压为 3.3V 或 5V，如果您想将系统设置为 3.3V 以与低电压传感器交互，这非常有用。

最后，三个板载 Grove 接口可以让您的板子轻松连接到 Grove 模块。想要制作一些令人惊叹的东西，也许只需要一个 Seeeduino v4.2 和一些 Grove 模块就足够了。

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" /></a></p>

## 版本

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#ccc;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#fff;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#6ab0de;}
.tg .tg-yw4l{vertical-align:top;width:20%}
.tg .tg-yw42{vertical-align:top;width:50%}
.tg .tg-4eph{background-color:#f9f9f9;}
.tg .tg-b7b8{background-color:#f9f9f9;vertical-align:top}
</style> -->

<table className="tg" align={"center"} width = {"100%"}>
  <tbody><tr>
      <th className="tg-yw4l">产品版本</th>
      <th className="tg-yw42">变更</th>
      <th className="tg-yw4l">发布日期</th>
    </tr>
    <tr>
      <td className="tg-4eph">Seeeduino V4.0</td>
      <td className="tg-4eph">初始版本</td>
      <td className="tg-b7b8">2014年8月15日</td>
    </tr>
    <tr>
      <td className="tg-031e">Seeeduino V4.2</td>
      <td className="tg-031e">
        1.取消左上角的一些焊盘。<br />
        <br />
        2.将USB位置改到中间<br />
        <br />
        3.改进DCDC电路以获得更好的性能<br />
        <br />
        4.添加一个I2C Grove 连接器<br />
        <br />
        5.更改一些丝印和元件位置
      </td>
      <td className="tg-yw4l">2015年8月24日</td>
    </tr>
      <tr>
    <td>Seeeduino V4.3</td>
    <td>在V4.2中从<strong>ATMEGA328P-MU</strong>更改为ATMEGA328P-AU<br />将串行芯片替换为<strong>cp2102</strong></td>
    <td>2022年11月</td>
  </tr>
  </tbody></table>

## 特性

- 完全兼容 Arduino UNO
- ATmega328 微控制器
- 14个数字I/O引脚（6个PWM输出）
- 6个模拟输入
- ISP接口
- Arduino UNO-R3扩展板兼容
- Micro USB编程和供电
- 板载Grove连接器
- 3.3/5V系统工作电源开关
- 额外焊盘对齐到0.1"网格

## 规格参数

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#6ab0de;}
.tg .tg-vn4c{background-color:#D2E4FC}
.tg .tg-yw4l{vertical-align:top}
.tg .tg-6k2t{background-color:#D2E4FC;vertical-align:top}
</style> -->

<table class="tg" align={"center"} width = {"100%"}>
  <tr>
    <th class="tg-yw4l">  参数</th>
    <th class="tg-yw4l">  数值/范围</th>
  </tr>
  <tr>
    <td class="tg-vn4c">  DC插座输入 </td>
    <td class="tg-vn4c">  7-12V</td>
  </tr>
  <tr>
    <td class="tg-031e" rowspan="2">  DC输出电流-5V引脚 </td>
    <td class="tg-031e">  使用Micro USB时最大500mA</td>
  </tr>
  <tr>
    <td class="tg-vn4c">  使用DC插座供电时最大2000mA  </td>
  </tr>
  <tr>
    <td class="tg-031e">  DC输出电流-3V3引脚  </td>
    <td class="tg-031e">  最大500mA</td>
  </tr>
  <tr>
    <td class="tg-vn4c">  每个I/O引脚的DC电流</td>
    <td class="tg-vn4c">  40mA</td>
  </tr>
  <tr>
    <td class="tg-031e">  闪存</td>
    <td class="tg-031e">  32 KB</td>
  </tr>
  <tr>
    <td class="tg-vn4c">  RAM</td>
    <td class="tg-vn4c">  2 KB</td>
  </tr>
  <tr>
    <td class="tg-yw4l">  EEPROM</td>
    <td class="tg-yw4l">  1 KB</td>
  </tr>
  <tr>
    <td class="tg-6k2t">  时钟速度</td>
    <td class="tg-6k2t">  16 MHz</td>
  </tr>
  <tr>
    <td class="tg-yw4l">  尺寸</td>
    <td class="tg-yw4l">  68.6mm x 53.4mm</td>
  </tr>
  <tr>
    <td class="tg-6k2t">  重量</td>
    <td class="tg-6k2t">  26g</td>
  </tr>
</table>

## 硬件概述

下面的图片展示了Seeeduino v4.2硬件特性的概述。引脚图显示了Seeeduino v4.2各个引脚的引脚分布和替代功能。这可以用作快速参考。

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/hardware_seeed.png)

- **<font face="" size="5" font color="00b0f0">❶</font> USB输入：**
USB端口用于将开发板连接到PC进行编程和供电。

- **<font face="" size="5" font color="00b0f0">❷</font> DC输入：**
DC电源插座允许您的Seeeduino开发板通过墙式适配器供电，这样您可以在需要时为项目提供更多电力。例如，当使用直流电机或其他大功率设备时。DC输入可以是7V-15V。

- **<font face="" size="5" font color="00b0f0">❸</font> Grove连接器：**
SeeedStudio有各种传感器/设备可以使用这个I2C或UART连接。此外，我们还销售独立的Grove连接器来帮助您制作自己的传感器连接。如果您想使用这些引脚，I2C Grove连接器也连接到模拟引脚A4和A5，分别用于SDA和SCL。UART Grove连接器连接到数字引脚0和1，分别用于RX和TX。

- **<font face="" size="5" font color="00b0f0">❹</font> ICSP：**
这是ATmega328P的ICSP连接，它位于Arduino Uno、Due、Mega和Leonardo兼容硬件（例如扩展板）的标准ICSP/SPI位置，这些硬件可能使用此连接器。此端口中的SPI引脚：MISO、SCK和MOSI，也分别连接到数字引脚12、13和11，就像Arduino Uno一样。

- **<font face="" size="5" font color="00b0f0">❺</font> USB 2 Uart：**
USB-2-Uart的引脚分布。通过将板载ATmega328置于复位模式，这些焊盘可用于与其他UART设备交互。这使得Seeeduino V4.2可以用作USB2UART实用工具板。

- **<font face="" size="5" font color="00b0f0">❻</font> 系统电源开关：**
滑动开关用于将开发板的逻辑电平和工作电压更改为5V或3.3V。

- **<font face="" size="5" font color="00b0f0">❼</font> 复位：**
这个按钮方便地放置在侧面，即使在顶部放置扩展板时也能让您复位Seeeduino开发板。这与其他Arduino开发板不同，其他开发板的按钮放在顶部，难以访问。

- **<font face="" size="5" font color="00b0f0">❽</font> LED-D13：**
LED连接到开发板的D13引脚。这可以用作程序/草图的板载LED指示器。

- **<font face="" size="5" font color="00b0f0">❾</font> RX/TX指示器：**
TX和RX LED指示器连接到USB转UART芯片的TX和RX。它们自动工作，分别让您知道开发板何时发送或接收数据。

## 入门指南

### 硬件

- 步骤 1. 准备一个 Seeeduino V4.2 和一根 Micro-USB 数据线。
- 步骤 2. 使用 Micro-USB 数据线将 Seeeduino V4.2 连接到您的计算机。
然后绿色电源 LED（标记为 PWR）应该会亮起。

![](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/connect.jpg)

:::caution

请轻柔地插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，2 根线的数据线无法传输数据。如果您不确定手头的数据线是否合适，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买。
:::

### 软件

:::note
如果这是您第一次使用 Arduino，我们强烈建议您参考[Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino)
:::

**步骤 1. 安装驱动程序**

- **对于 Seeeduino V4.2**

对于 Windows

此驱动程序适用于 Windows XP、Windows Vista、Windows 7、Windows 8/8.1。

:::note
在 Windows 10 中安装 Arduino IDE 时，驱动程序会自动安装。
:::

[![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/download_driver.png)](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver/archive/master.zip)

- 插入您的开发板，等待 Windows 开始驱动程序安装过程。几分钟后，尽管尽了最大努力，该过程仍会失败。
- 点击开始菜单，打开控制面板。
- 在控制面板中，导航到系统和安全。接下来，点击系统。系统窗口打开后，打开**设备管理器**。
- 查看端口 (COM & LPT)。您应该会找到一个名为"Seeeduino v4.2"的开放端口。如果没有 COM & LPT 部分，请在"其他设备"下查找"未知设备"。
- 右键点击"Seeeduino v4.2"端口，选择"更新驱动程序软件"选项。
- 接下来，选择"浏览我的计算机以查找驱动程序软件"选项。
- 最后，导航到并选择名为"seeed_usb_serial.inf"的驱动程序文件
- Windows 将从那里完成驱动程序安装。

对于 Mac OSX 和 Linux，您无需安装任何驱动程序。

- **对于 Seeeduino v4.3**

您需要安装 cp2102 驱动程序才能使用 Seeeduino V4.3 的串口。

您可以点击[这里](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/CP210x_Universal_Windows_Driver.zip)下载并解压 cp2102 的 Windows 驱动程序。

如果您使用的是其他操作系统，可以在[官方网站](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)上获取驱动程序。

**步骤 2. 启动 Arduino 应用程序。**

双击您之前安装的 Arduino 应用程序 (arduino.exe)。

:::note
如果 Arduino 软件以不同语言加载，您可以在首选项对话框中更改它。详情请参见 [Arduino 软件 (IDE) 页面](https://www.arduino.cc/en/Guide/Environment#languages)。
:::

**步骤 3. 打开 Blink 示例。**

找到 LED 闪烁示例代码：**文件 > 示例 >01.Basics > Blink**。

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/blink.png)

**步骤 4. 选择您的开发板。**

您需要在**工具 > 开发板**菜单中选择与您的 Arduino 对应的条目。选择 **Seeeduino v4.2**。

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/select_board.png)

如果您找不到 Seeeduino v4.2，请查看[如何将 Seeed 开发板添加到 Arduino IDE](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Boards/)

**步骤 5. 选择您的串口。**

从工具 | 串口菜单中选择 Arduino 开发板的串行设备。这很可能是 COM3 或更高（**COM1** 和 **COM2** 通常为硬件串口保留）。要找出正确的端口，您可以断开 Arduino 开发板的连接并重新打开菜单；消失的条目应该就是 Arduino 开发板。重新连接开发板并选择该串口。

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/select_port.png)

:::note
在 Mac 或 Linux 上，这应该是类似 **`/dev/tty.USBmodem`** 的内容。
:::

**步骤 6. 上传程序。**

现在，只需点击环境中的"上传"按钮。等待几秒钟 - 您应该会看到开发板上的 RX 和 TX LED 指示灯闪烁。如果上传成功，会显示消息"上传完成。"

上传完成几秒钟后，您应该会看到开发板上的引脚 13 (L) LED 开始闪烁（橙色）。如果是这样，恭喜！您已经成功运行了 Arduino。如果遇到问题，请参阅故障排除建议。

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/Seeeduino_v4_2_L.jpg)

## 应用创意

- DIY
- 物联网和智能家居
- 机器人
- 学习

以下是一些有趣的项目供您参考。

|纸人|指纹锁|显示器支架|
|-------|-------|-------|
|![](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project3.jpg)|
| [立即制作](https://www.instructables.com/id/Paper-Man-a-machine-created-by-Arduino-and-NFC/) | [立即制作](https://www.instructables.com/id/Door-to-Open-Source-Hardware-A-fingerprint-lock-so/) | [立即制作](https://www.instructables.com/id/DIY-a-Programmable-Acrylic-Monitor-Stand/)|

|桌面推广|老虎机|彩色金字塔|
|-------|-------|-------|
|![](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project6.jpg)|
| [立即制作](https://www.instructables.com/id/Desk-promo/) | [立即制作](https://www.instructables.com/id/How-to-Make-Your-Tiny-Tiger-Machine/) | [立即制作](https://www.instructables.com/id/DIY-a-colorful-pyramid/)|

## 常见问题

**Q1：在Ubuntu中，我遇到错误'avrdue: ser_open(): can't open device `dev/tty/ACM0`: Permission denied'。如何将Seeeduino V4连接到Linux PC？**

A1：请阅读[这里](http://playground.arduino.cc/Linux/Debian)的说明，以便在Ubuntu中让Arduino IDE在没有root权限的情况下工作。请查看下面的相关部分。

**Q2：Arduino UNO和Seeeduino v4.2之间有什么区别？**

A2：Seeeduino v4.2与Arduino UNO完全兼容。主要区别如下：

- 使用micro USB为开发板供电和编程
- 3个板载Grove连接器
- 3.3/5V系统电源开关
- DCDC电路代替LDO，效率更高
- 其他电路改进

**Q3：下载`<http://downloads.arduino.cc/packages/package_index.json>`时出错**

A3：请按照以下步骤解决问题。

- 点击文件 -> 首选项
- 在首选项窗口底部点击URL C:\Users...\AppData\Local\Arduino15\preferences.txt
- 删除除preferences.txt、staging和packages之外的所有文件
- 关闭并重新打开IDE窗口，应该就能正常工作了

## Seeeduino V4.2 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/SeeeduinoV4.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[PDF]** [下载Wiki PDF](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.2.pdf)
- **[Eagle]** [Seeeduino V4.2 EAGLE文件](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/SeeeduinoV4.2.zip)
- **[PDF]** [Seeeduino V4.2 PDF格式](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.2_sch.pdf)
- **[Eagle]** [Seeeduino V4.0 EAGLE文件](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.0_sch.pdf)
- **[PDF]** [Seeeduino V4.0 PDF格式](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.0_sch.pdf)
- **[数据手册]** [ATmega328P](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/ATmega328.pdf)
- **[数据手册]** [ATmega16U2](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/ATmega16u2.pdf)
- **[延伸阅读]** [Arduino入门指南](https://www.arduino.cc/en/Guide/HomePage)
- **[延伸阅读]** [Arduino语言参考](https://www.arduino.cc/en/Reference/HomePage)
- **[延伸阅读]** [下载Arduino软件(IDE)](https://www.arduino.cc/en/Main/Software)
- **[延伸阅读]** [Arduino常见问题](https://www.arduino.cc/en/Main/FAQ)
- **[延伸阅读]** [Arduino介绍](https://www.arduino.cc/en/guide/introduction)
- **[延伸阅读]** [Arduino维基百科页面](https://en.wikipedia.org/wiki/Arduino)
- **[延伸阅读]** [如何在Seeeduino上安装RF Explorer 3G+ IoT模块](http://j3.rf-explorer.com/60-rfe/specifications/184-rf-explorer-3g-iot-for-seeeduino)
- **[固件]** [如何烧录引导程序](https://files.seeedstudio.com/wiki/forum_doc/reg/seeeduino_boot.zip)

## 项目

**改造 Seeed 新办公室的楼梯**：将办公室的楼梯改造成互动装置，甚至是向访客传达"仅限员工"信息的酷炫方式。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/stairs-hackers/hacking-the-stairs-at-seeed-s-new-office-9ef30b/embed' width='350'></iframe>

**使用 Seeeduino/Arduino 制作互动彩色矩阵**：这是一个由 Seeeduino 4.2 开发板制作的互动艺术项目，外观精美且易于制作！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/78141/make-an-interactive-color-matrix-with-seeeduino-arduino-f9f3c0/embed' width='350'></iframe>

## 技术支持与产品讨论


感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>