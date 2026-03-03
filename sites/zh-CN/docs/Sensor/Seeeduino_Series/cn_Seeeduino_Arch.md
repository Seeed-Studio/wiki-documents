---
description: Seeeduino Arch
title: Seeeduino Arch
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino_Arch
last_update:
  date: 1/31/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Arch_01.jpg)

**Seeeduino Arch** 是一个支持 [mbed](http://mbed.org/handbook/mbed-SDK) 的开发板，结合了 mbed SDK 的优势和 Arduino 外形规格。使用 Seeeduino Arch，您可以使用 mbed C/C++ SDK、库和优化的在线开发工具来快速构建原型。
Seeeduino Arch 具有标准的 Arduino 外观和 Grove 连接器。将现有的扩展板和 Grove 产品连接到 Seeeduino Arch 非常方便。

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/seeeduino-arch-p-1561.html)  

## 特性

* 支持 mbed

       1.在线开发工具

       2.易于使用的 C/C++ SDK

       3.大量已发布的库和项目

* 标准 Arduino 外观，两个 Grove 连接器

    1.兼容 3.3V 扩展板

    2.大量的 grove 模块

* 拖拽式编程

* NXP LPC11U24 MCU

     1.低功耗 ARM Cortex-M0 内核

     2.48MHz，32KB Flash，8KB RAM，4KB EEPROM

     3.USB 设备，2xSPI，UART，I2C

## 规格参数

<table  cellspacing="0" width="100%">
<tr>
<th scope="col">项目</th>
<th scope="col">典型值</th>
</tr>
<tr>
<th scope="row">工作电压</th>
<td>7 ~ 12V</td>
</tr>
<tr>
<th scope="row">微控制器</th>
<td>LPC11U24</td>
</tr>
<tr>
<th scope="row">Flash 存储器</th>
<td>32kB</td>
</tr>
<tr>
<th scope="row">EEPROM</th>
<td>4kB</td>
</tr>
<tr>
<th scope="row">RAM</th>
<td>8kB</td>
</tr>
<tr>
<th scope="row">UART</th>
<td>1</td>
</tr>
<tr>
<th scope="row">I2C</th>
<td>1</td>
</tr>
<tr>
<th scope="row">ADC 通道</th>
<td>8</td>
</tr>
<tr>
<th scope="row">I/O 引脚</th>
<td>40</td>
</tr>
<tr>
<th scope="row">数字 I/O 最大输入电压</th>
<td>5.0V</td>
</tr></table>

## 引脚图

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Arch_Pinout.png)

这里有一个**单色版本**供您打印。

## Seeeduino Arch 与 Arduino 对比

Seeedduino 和 Arduino 都是用于快速原型制作的平台。然而，它们之间仍然存在差异。我们可以通过以下表格的对比来获得更多关于它们的信息。
<center>
<table  cellspacing="0" width="100%">
<tr>
<th scope="col">项目</th>
<th scope="col">Seeeduino Arch</th>
<th scope="col">Arduino</th>
</tr>
<tr>
<th scope="row">微控制器</th>
<td>ARM Cortex-M 系列 MCU</td>
<td>主要是 AVR 8位 MCU，使用新的 Due Cortex-M3 MCU 系列。</td>
</tr>
<tr>
<th scope="row">硬件规格</th>
<td>标准化尺寸和引脚，便于模块化构建原型</td>
<td>标准化尺寸和引脚，便于模块化构建原型</td>
</tr>
<tr>
<th scope="row">开发环境</th>
<td>在线开发工具，便于协作和分享，可以导出项目到本地进行开发和调试。功能强大，同时也很简单。</td>
<td>Arduino IDE，易于使用，简单但功能齐全。</td>
</tr>
<tr>
<th scope="row">开发和调试</th>
<td>支持库导入、导出项目、版本控制、调试等功能。</td>
<td>库和应用程序代码是分离的，适合编写简单代码，没有调试功能。</td>
</tr>
</table>
</center>
Seeeduino Arch 在硬件上与 Arduino 兼容。现在我们分享它们的引脚分布。
<center>
<table cellspacing="0" width="100%">
<tr>
<th scope="col">Arduino</th>
<th scope="col">Seeeduino Arch</th>
<th scope="col">描述</th>
</tr>
<tr>
<th scope="row">D0</th>
<td>P0_18</td>
<td rowspan="14">数字 I/O</td>
</tr>
<tr>
<th scope="row">D1</th>
<td>P0_19</td>
</tr>
<tr>
<th scope="row">D2</th>
<td>P0_17</td>
</tr>
<tr>
<th scope="row">D3</th>
<td>P1_17</td>
</tr>
<tr>
<th scope="row">D4</th>
<td>P1_18</td>
</tr>
<tr>
<th scope="row">D5</th>
<td>P1_24</td>
</tr>
<tr>
<th scope="row">D6</th>
<td>P1_25</td>
</tr>
<tr>
<th scope="row">D7</th>
<td>P1_5</td>
</tr>
<tr>
<th scope="row">D8</th>
<td>P1_26</td>
</tr>
<tr>
<th scope="row">D9</th>
<td>P1_27</td>
</tr>
<tr>
<th scope="row">D10</th>
<td>P0_2</td>
</tr>
<tr>
<th scope="row">D11</th>
<td>P1_29</td>
</tr>
<tr>
<th scope="row">D12</th>
<td>P0_8</td>
</tr>
<tr>
<th scope="row">D13</th>
<td>P0_9</td>
</tr>
<tr>
<th scope="row">SDA</th>
<td>P0_5</td>
<td rowspan="2">I2C</td>
</tr>
<tr>
<th scope="row">SCL</th>
<td>P0_4</td>
</tr>
<tr>
<th scope="row">A0</th>
<td>P0_11</td>
<td rowspan="7">模拟</td>
</tr>
<tr>
<th scope="row">A1</th>
<td>P0_12</td>
</tr>
<tr>
<th scope="row">A2</th>
<td>P0_13</td>
</tr>
<tr>
<th scope="row">A3</th>
<td>P0_14</td>
</tr>
<tr>
<th scope="row">A4</th>
<td>P0_16</td>
</tr>
<tr>
<th scope="row">A5</th>
<td>P0_22</td>
</tr>
<tr>
<th scope="row">A6</th>
<td>P0_23</td>
</tr>
<tr>
<th scope="row">1-MISO1</th>
<td>P1_21</td>
<td rowspan="6">SPI1</td>
</tr>
<tr>
<th scope="row">2-SCK</th>
<td>P1_20</td>
</tr>
<tr>
<th scope="row">3-RESET</th>
<td>P1_23</td>
</tr>
<tr>
<th scope="row">4-GND</th>
<td>/</td>
</tr>
<tr>
<th scope="row">5-MOSI</th>
<td>P1_22</td>
</tr>
<tr>
<th scope="row">6-VCC</th>
<td>/</td>
</tr>
<tr>
<th scope="row">1-SWDIO</th>
<td>P0_15</td>
<td rowspan="6">2X3 SWD 接口</td>
</tr>
<tr>
<th scope="row">2-VCC</th>
<td>/</td>
</tr>
<tr>
<th scope="row">3-SWCLK</th>
<td>P0_10</td>
</tr>
<tr>
<th scope="row">4-</th>
<td>P1_4</td>
</tr>
<tr>
<th scope="row">5-nRET</th>
<td>P0_0</td>
</tr>
<tr>
<th scope="row">6-GND</th>
<td>/</td>
</tr>
<tr>
<th scope="row">D+</th>
<td>USB_DP</td>
<td rowspan="5">USB&amp;ISP</td>
</tr>
<tr>
<th scope="row">D-</th>
<td>USB_DM</td>
</tr>
<tr>
<th scope="row">VBUS</th>
<td>P0_3</td>
</tr>
<tr>
<th scope="row">CONNECT</th>
<td>P0_6</td>
</tr>
<tr>
<th scope="row">ISP</th>
<td>P0_1</td>
</tr>
<tr>
<th scope="row">RX</th>
<td>P1_14</td>
<td rowspan="2">UART Grove</td>
</tr>
<tr>
<th scope="row">TX</th>
<td>P1_13</td>
</tr>
<tr>
<th scope="row">AREF</th>
<td>P0_7</td>
<td>/</td>
</tr>
</table>
</center>

## 入门指南

**Seeeduino Arch** 在软件方面与 **mbed** 兼容。您可以使用 mbed SDK 提供的全面固件库和大量示例代码。如果您不熟悉 **mbed** 平台和 **mbed** SDK，请点击[这里](https://mbed.org/handbook/mbed-NXP-LPC11U24-Getting-Started)来获得良好的理解。

**Seeeduino Arch** 可以使用 mbed 提供的免费在线 IDE 和 C++ 编译器。该编译器基于优化的 ARMCC 编译器引擎构建。这有助于您快速启动和运行程序，无需安装软件。下载程序就像使用 USB 闪存驱动器一样简单（无需外部编程器）。

除了在线 IDE 和编译器外，用户还可以使用许多可用于 ARM Cortex M 微控制器的离线编译器/IDE，如 ARM Embedded GCC、Keil MDK ARM IAR Embedded Workbench 等。

此外，对于初学者来说，编写库并不是一项困难的任务。您可以点击[这里](http://mbed.org/cookbook/Writing-a-Library)学习如何编写 mbed 库。

这里我们为您展示一个简单的演示：使用 Seeeduino Arch 制作**流水灯**来帮助您入门。

### 演示：流水灯

* 点击"mbed Enabled"标志为 Seeeduino Arch 注册账户。
[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Mbedenabled.jpg)](https://mbed.org/account/login/?next=/start?auth=104000000000000000000002F7F0F640e640d504b45e111da24094a9d300da46&amp;firmware=999999)

* 打开 [https://mbed.org/compiler/](https://mbed.org/compiler/)，您将获得 mbed 在线 IDE。在编程之前，您最好阅读 mbed 编译器入门指南。
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Open_Compiler.jpg)

* 点击"New"创建新程序并选择设备"mbed NXP LPC11U24"。我相信这张图片能更好地解释。
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Compiler.jpg)

以下是我控制 seeeduino arch 四个 LED 的代码。

```c
#include "mbed.h"
DigitalOut  led1(LED1);
DigitalOut  led2(LED2);
DigitalOut  led3(LED3);
DigitalOut  led4(LED4);


int main() {
while(1) {
led1 = !led1;
wait(0.5);
led2 = !led2;
wait(0.5);
led3 = !led3;
wait(0.5);
led4 = !led4;
wait(0.5);


```

* 现在您可以编译代码。如果代码有错误，它会提示您并给您帮助。您可能会发现这些帮助正是您所需要的。
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Error_prompt.jpg)

* 成功编译代码后，保存 bin 文件。

* 现在您需要长按复位按钮，它会自动显示为名为 CRP DISABLD 的 USB 驱动器。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/A_usb_device.jpg)

* 进入 CRP DISABLD。现在您需要删除固件文件并将 waterLights_LPC11U24 bin 文件添加到 CRP DISABLD。记住在下载新程序后要复位微控制器以启动运行，现在 seeeduino arch 将运行流水灯程序。您可以试一试。

mbed C/C++ SDK 提供了软件平台和[库](http://mbed.org/cookbook/Homepage)，这些也可以应用于 seeeduino Arch。因此您可以使用这些可用资源来构建您的应用程序。我们期待着分享您更多结合 Seeeduino arch、Shield 和 Grove 模块的程序。

**注意：**

如果您在 MAC 或 Linux 上使用 Seeeduino Arch，请阅读应用说明 --- [USB ISP 编程](http://www.lpcware.com/content/nxpfile/an11305-usb-system-programming-lpc11u3xlpc11u2x)。

## 在 Windows、Linux 或 Mac 上编程 Seeeduino Arch

Seeeduino Arch 没有 mbed 接口。它使用 USB 在系统编程(ISP) 来升级固件。

要进入 USB ISP 模式，将 Arch 连接到您的计算机并长按其按钮，然后会出现一个名为 "CRP DISABLD" 的磁盘。

* 在 windows 上

1. 删除 "CRP DISABLD" 磁盘中的 firmware.bin。

2. 将新固件复制到磁盘中。

* 在 linux 上

1. 如果磁盘未挂载，将磁盘挂载到 **\{mnt_dir\}**

2. **dd if=\{new_firmware.bin\} of=\{mnt_dir\}/firmware.bin conv=notrunc**

* 在 mac 上，您需要使用终端运行以下脚本将您的 .bin 文件复制到您的 Arch

1. **dd if=\{new_firmare.bin\} of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc**

     如果您愿意，您也可以创建一个 **Automator** 应用程序来支持将文件拖放到您的开发板上。只需创建一个 "_运行 Shell 脚本_"，使用以下命令：

    if=$* of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc

     您还需要将 `"传递输入"` 选项从 `"到 stdin"` 更改为 `"作为参数"`--没有这个您会得到错误 `"操作 'Run Shell Script' 遇到错误"` 或日志中的 `"dd: no value specified for if (1)"`。

    另外，脚本的改进形式是：

    **`dd if="${1}" of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc`**

    这应该能处理文件路径中的空格，并且只使用提供的第一个文件。

_非常_ 快速按下按钮来运行新固件。

## 板载按钮的多功能

默认情况下，板载按钮有两个功能：快速按下重置，长按进入 ISP 模式。我们可以添加更多功能！

例如，使用 [multifunction_for_reset_button](http://developer.mbed.org/users/yihui/code/multifunction_for_reset_button/) 来获得：

1. 单击 - 打开 LED1

2. 双击 - 打开 LED2

3. 长按   - 重置

4. 点击然后上电 - 进入 ISP 模式

## 应用

* [使用 Seeeduino Arch 作为调试适配器来调试另一个 Seeeduino Arch](https://mbed.org/users/yihui/notebook/debug-seeeduino-arch-using-cmsis-dap/)

* [感知环境](https://mbed.org/users/yihui/notebook/sense-environment/)

* [玩转 Grove RTC](https://mbed.org/cookbook/seeed-grove-RTC)

* [玩转 Grove - 超声波测距仪](https://mbed.org/cookbook/Seeed-grove-ultrasonic-ranger)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/Seeeduino_Arch_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* **[Eagle]**   [Seeeduino Arch Eagle 文件](https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/Seeeduino_Arch_Eagle_files.zip)

* **[PDF]**[Seeeduino_Arch_V1.0 pdf](https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/Seeeduino_Arch_V1.0.pdf)

* **[数据手册]**  [LPC11U2x 数据手册](https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/LPC11U2x_datasheet.pdf)

* **[PDF]**   [LPC11Uxx 用户手册](https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/LPC11UxxUserManual.pdf)

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