---
description: UartSBee V3.1
title: UartSBee V3.1
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/UartSBee_V3.1
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/Uartsb31.jpg)

UartSBee v3.1 是一款功能齐全的 USB 转串口适配器，配备 BEE 插座（20针 2.0mm）。集成的 FT232RL 可用于编程或与 MCU 通信。此外，您还可以通过 Bee 兼容模块将您的 PC 连接到各种无线应用。UartSBee 还为 FT232RL 的位操作模式引脚提供了分线。这些位操作模式引脚（8个 I/O 引脚）可以用作替代应用，例如如今稀缺的 PC 并口。

型号：[INT110B2P](https://www.seeedstudio.com/depot/uartsbee-v31-p-688.html?cPath=104_109)

##   特性   ##

- 兼容 USB 2.0 的串行接口。

- 兼容 3.3V 和 5V 的 I/O。

- 提供 3.3V 和 5V 双电源输出。

- 为 BEE 模块提供复位按钮。

- 支持位操作模式（8个串行 I/O 或作为 SPI）。

- 为 UART 和 BEE 操作提供 LED 指示灯。

##   应用场景   ##

- 用于与 TTL/CMOS 电平串行设备通信的 USB 转串口适配器。

- Arduino / Seeeduino 及兼容板的编程器。

- 使用 ISP（在线串行编程）对微控制器 / CPLD 进行编程。

- 用于面包板 MCU 应用的 3.3V / 5V 电源。

- 用于 BEE 模块的 USB 适配器（用于 PC 无线功能）。

- 在 FT232RL 位操作模式下作为基于 USB 的并行设备的无限可能——已知可用作 **AVR-ISP**、低速 **JTAG**（使用 OpenOCD）、以及 **I2C**。

##   注意事项   ##

- **UartSBee v3.1** 提供了一个 **电源选择**（3.3V 或 5V）**切换开关**。在将板连接到任何其他设备之前，请确保将电源选择开关设置为 3.3V 或 5V。

##   原理图   ##

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSbee_Schematic.png)

##   规格参数   ##

###   关键规格   ###

 |微处理器|FT232RL|
 |---|---|
 |PCB 尺寸| 3.1cm x 4.1cm|
 |指示灯| POWER，绿色 LED。用于 Txd 和 Rxd 的 LED|
 |电源|3.3V 和 5V DC|
 |接口| Mini-B USB，2.54mm 间距针头|
|适配器插座|兼容 XBee 的 2.0mm 间距母针头|
|连接方式|USB|
 |通信协议| UART，位操作 I/O，SPI|
| ROHS|是|

###   电气特性   ###

 |规格| 最小值| 典型值| 最大值|单位|
 |---|---|---|---|---|
 |输入电压| -| 5|5|Vdc|
 |电流消耗|-|-|500|mA|
 |输出电压|3.3|-|5|Vdc|

##   系统框图   ##

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/Uartsbee-block-diagram.jpg)

- 提供一个微型复位开关，用于复位 Bee 兼容设备。

- 除了为 BEE 兼容模块提供的 2 x 10 分线外，还提供了额外的 2 x 10 针头和 2 x 3 ISP 针头焊盘。用户可以适当焊接针头。

##  应用   ##

###   USB – 串口   ###

**UartSBee** 通常用作 USB 转串口（COM 端口）接口。这种配置可以用于与 MCU 串口通信或编程支持 UART 基于 ISP 的 MCU。

#### Windows ####

- 在 Windows 操作系统中，首次插入设备时，可能会要求安装驱动程序。

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSbee_Detected_Windows.JPG)

从 FTDI 网站下载并安装 **虚拟 COM 端口**驱动程序：

[https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm)

- 打开安装驱动程序的向导。选择“从列表或特定位置安装”。

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSbee_Driver_install_1.JPG)

- 选择下载的驱动程序路径。

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSbee_Driver_install_2.JPG)

- 如果您下载了未签名的驱动程序，会出现以下窗口。只需点击“仍然继续”。

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSbee_Driver_install_2.1.JPG)

- **UartSBee 驱动程序**成功安装。Windows 会为 FT232RL 分配一个 COM 端口名称，例如 COM10、COM11 等。请在设备管理器中检查确切的名称。在此示例中，“COM16”被分配给 UartSBee。

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSbee_Driver_install_3.JPG)

#### GNU/Linux ####

所有现代 **GNU/Linux 操作系统**都自带 FT232RL 驱动程序。要检查是否检测到 UartSBee，请执行 lsusb 命令。输出应类似于以下内容。

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/Lsub.png)

**GNU/Linux** 会分配 **/dev/ttyUSB0**、**/dev/ttyUSB1** 等作为设备名称。

要验证串口的工作情况，请连接 UartSBee 的 **TxD** 和 **RxD** 引脚，并使用像 cutecom 这样的终端应用程序配置设备参数，如下所示：

**波特率**：9600，**数据位**：8，**停止位**：无，且无握手。

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/Uartsbee-txd-rxd-connected.JPG)

在终端中输入的任何字符都会被回显，如下所示。

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartsBee-CuteCom.png)

同样的功能也可以在 Windows 的 Hyperterminal 中检查。

###   3.3V / 5V 电源用于 MCU 面包板微控制器和微控制器 / CPLD 编程器   ###

除了 UartSBee 提供的 3.3V 和 5V 电源输出外，I/O 引脚的逻辑电平也可以选择为 **5.0VTTL** 或 **3.3V CMOS** 操作。在下面的示例中，展示了一个基于面包板的微控制器应用。一个 LPC1343 ARM Cortex-M3 MCU 连接到 UartSBee。由于这是一个 3.3V 设备，电源切换开关设置为 3.3V。LPC1343 可以通过 UART 进行编程。此应用可以扩展到任何支持 UART 或 SPI 基于闪存编程的 MCU / CPLD（需要 FT232R 位操作模式）。

**面包板原型：UartSBee v3.1** 作为 3.3V 电源和 LPC1343 的 3.3V UART 闪存编程端口。

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSBee_as_uCPowerSupplyAndProgPort_BreadBoard.JPG)
开关：选择 3.3V I/O

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UarSBee-Switch_3.3V_selected.jpg)

###   Bee模块与PC无线应用的接口   ###

#### PC无线扩展

UartSBee提供的Bee兼容接口可用于将Bee模块（如 **XBee、Bluetooth Bee、RF Bee、Wifi Bee、GPS Bee**）连接到PC的USB端口。这使得基于Bee模块的PC无线应用更加简单。由于大多数这些Bee模块支持UART接口，PC编程也变得非常容易。

#### MCU无线扩展

这种配置也可以用于与微控制器（如Seeeduino）的UART接口连接。

请参考Bee模块的文档以获取更多信息。

- XBee连接到UartSBee      
- BluetoothBee连接到UartSBee

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSBee-hardware.jpg)
![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/BluetoothBee_with_UartSBee.JPG)

###   BitBang模式   ###

与其他基于FT232RL的USB-串口设备相比，UartSBee v3.1的一个显著特点是所有Bit-Bang I/O都被引出到针脚。

Bit-Bang模式是FT232RL的一项特殊功能，其中8个I/O线（**D0 - D7**）可以用作通用双向I/O线。FT232RL支持三种Bit-Bang模式：

- **异步Bit-Bang模式** 

任何写入设备的数据都会被时钟发送到配置的输出针脚。数据传输速率基于波特率生成器配置。在此模式下，8个I/O线中的任何一个都可以配置为输入或输出。

- **同步Bit-Bang模式**

在此模式下，数据以同步方式发送。在发送输出字节到设备之前会读取输入。因此，要读取输入，必须执行写操作。

- **CBUS Bit-Bang模式**

这是一个特殊模式，需要重新编程FT232RL的EEPROM。此模式使用信号 **C0 - C3**。

**FT232RL的Bit-Bang模式**在应用笔记中有详细记录[[1]](https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf)。

**表：Bit-Bang I/O映射**

 |UartSBee信号| BitBang I/O信号|
 |---|---|
 |TxD|D0|
 |RxD|D1|
| RTS| D2|
| CTS| D3|
| DTR| D4|
| DSR| D5|
|DCD|D6|
 |RI| D7|

**BitBang模式操作：**

以下面包板连接演示了一个简单的异步Bit-Bang模式操作，其中DTR（D4）针脚连接到一个LED。LED的闪烁速率由PC端的应用程序控制。

**LED闪烁电路**   
                                                         **UartSBee V3.1的BitBang I/O - 底部**

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSBee_bit-bang-DTR.jpg) ![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSBee_Bottom_Bit_Bang.png)

Bit-Bang模式需要特殊的FTDI直接驱动程序[D2XX](https://www.ftdichip.com/Drivers/D2XX.htm)。在安装此驱动程序之前，需要移除FT232RL芯片的虚拟COM端口驱动程序。在GNU/Linux中，此驱动程序运行于内核模式。作为D2XX的替代方案，可以使用一个免费的开源驱动程序[libFTDI](http://www.intra2net.com/en/developer/libftdi/)。此驱动程序适用于Windows、GNU/Linux和Mac OS。在GNU/Linux中，它运行于用户模式，因此无需移除现有的FT232RL驱动程序。

libFTDI

[http://www.intra2net.com/en/developer/libftdi/](http://www.intra2net.com/en/developer/libftdi/)

libUSB libFTDI需要libusb，可以从以下地址下载：

[http://www.libusb.org/](http://www.libusb.org/)

以下示例代码可以按照libFTDI示例文件的方式进行编译。一个简单的方法是将以下代码内容复制到现有的示例.c文件中，并通过以下命令构建整个驱动程序：

./configure

make

**代码示例**

```
/*
Blinky.C: UartSBee v3.1 (FT232RL) Bit-Bang模式 - LED闪烁。

电路：
将DTR连接到LED的正极，将电阻的一端连接到GND，另一端连接到LED的负极。
*/

#ifdef __WIN32__
#define sleep(x) Sleep(x)
#endif

// 8位针脚掩码用于I/O针脚
#define TXD 0x01  
#define RXD 0x02  
#define RTS 0x04  
#define CTS 0x08  
#define DTR 0x10
#define DSR 0x20
#define DCD 0x40
#define RI  0x80

#include <stdio.h>
#include <ftdi.h>    

int main()
{
    unsigned char ouputState = 0;
    struct ftdi_context ftdic;

    /* 1. 初始化ftdi设备上下文 */
    ftdi_init(&ftdic);  

    /* 2. 根据VID/PID对打开设备 */

    if(ftdi_usb_open(&ftdic, 0x0403, 0x6001) < 0)
    {
        printf("无法打开UartSBee v3.1");
        return 1;
    }

    /* 3. 启用Bit-Bang模式以控制DTR线 */
    ftdi_set_bitmode(&ftdic, DTR, BITMODE_BITBANG);

    /* 4. 每秒闪烁LED */
    while(1) {
        ouputState ^= DTR;
        ftdi_write_data(&ftdic, &ouputState, 1);
        sleep(1);
    }
}
```

FT232RL的Bit-Bang模式可以用于构建AVR ISP、JTAG、SPI和I2C端口。请参考以下外部链接。

AVR-ISP连接示意图

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSbee_ISP_Connection_BitBang.jpg)

## 支持 ##

如果您有任何问题或更好的设计想法，可以前往我们的 [论坛](https://www.seeedstudio.com/forum) 或 **愿望** 页面进行讨论。

## 许可 ##

本文档采用 [Creative Commons Attribution-Noncommercial-Share Alike License 3.0](http://creativecommons.org/licenses/by-nc-sa/3.0/) 授权。源代码和库文件采用 **GPL**/**LGPL** 授权，详情请参阅源代码文件。

## 文档版本追踪 ##

|版本|描述|编辑者|发布日期|
|---|---|---|---|
|V0.9d|详细应用说明|Visweswara R|2010年12月23日|

## 硬件版本追踪 ##

|版本|描述|发布日期|
|---|---|---|
|UartSBee V3.1|删除底部的蓝牙分线板，缩小尺寸|2010年9月2日|
|UartSBee V2.3|为3.3V引脚提供高达500mA的直流电流，以更好地支持XBee Pro|2009年7月21日|
|UartSBee V2.1|首次公开发布|2009年2月1日|

## Bug追踪 ##

Bug追踪是您可以发布在使用过程中发现的任何问题的地方。请写下您的意见，您的反馈将帮助我们改进产品。

## 额外想法 ##

额外想法是您可以记录关于该产品的项目创意或其他用途的地方。或者，您也可以将它们写在项目页面上。

## 在线原理图查看器 ##

<div className="altium-ecad-viewer" data-project-src="http://garden.seeedstudio.com/images/b/b4/Uartsbee31_Schematic_Board.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源 ##

原理图和板文件 [[[2]](http://garden.seeedstudio.com/images/b/b4/Uartsbee31_Schematic_Board.zip)];

## 外部链接 ##

- [[3]](https://www.ftdichip.com/Products/ICs/FT232R.htm)[FTDI FT232RL 产品页面](https://www.ftdichip.com/Products/ICs/FT232R.htm)
- [https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm) FTDI 虚拟串口 (VCP) 驱动

- [FTDI D2XX 驱动](https://www.ftdichip.com/Drivers/D2XX.htm)
- [FTDI Bit-Bang 模式应用说明](https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf)

**开源驱动**

- [libFTDI](http://www.intra2net.com/en/developer/libftdi/)
- [libUSB](http://www.libusb.org/)

**其他 FT232RL 应用信息来源**

- [Hackaday - Bit-Bang 模式介绍](http://hackaday.com/2009/09/22/introduction-to-ftdi-bitbang-mode/)
- [使用 OpenOCD 实现 FT232R JTAG](http://vak.ru/doku.php/proj/bitbang/bitbang-jtag)
- [FT232R SPI Bit-Bang 模式示例](http://openschemes.com/2009/11/05/bit-banging-spi-on-arduinos-ft232rl/)
- [使用 FT232R Bit-Bang 模式刷写 Arduino](http://www.geocities.co.jp/arduino_diecimila/bootloader/index_en.html)

## 如何购买 ##

您可以在以下链接购买 UartSBee V3.1：[https://www.seeedstudio.com/depot/uartsbee-v31-p-688.html?cPath=104_109](https://www.seeedstudio.com/depot/uartsbee-v31-p-688.html?cPath=104_109)

## 许可 ##

本文档依据 Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) 授权。源代码和库依据 [GPL/LGPL](http://www.gnu.org/licenses/gpl.html) 授权，详情请参阅源代码文件。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>