---
description: UartSB 框架
title: UartSB 框架
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/UartSB_Frame
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/Seeeduino_Frame_UarSBs_Top.jpg)

**UartSB 框架** 是一个基于 USB 的编程适配器，适用于配备 FPC 插座的 **Seeeduino Film**。集成的 USB UART IC **FT232RL** 可用于编程或与具有 3.3V 逻辑的 MCU 通信。它还可以作为“FT232RL”低电压（3.3V）分线板使用。**UartSB 框架** 还提供了 **FT232RL** 的位操作模式引脚的分线。这些位操作模式引脚（8 个 I/O 引脚）可以替代如今稀缺的 PC 并口应用。

**型号：[PGM31058P](https://www.seeedstudio.com/depot/seeeduino-frame-uartsbs-p-778.html?cPath=132_135)**

## 特性

*   兼容 USB 2.0 的串行接口。
*   20 针 FPC 连接器，用于连接 **Seeeduino Film**。
*   兼容 3.3V 的 I/O。
*   提供 3.3V 和 5V 双电源输出。
*   支持位操作模式（8 个串行 I/O 或作为 SPI）。
*   配备 TxD、RxD 和电源指示灯。

## 应用场景

*   **Seeeduino Film** 和兼容 3.3V 的板的编程器。
*   用于与 3.3V 电平串行设备通信的 USB 转串行适配器。
*   使用 ISP（在线串行编程）对微控制器 / CPLD 进行编程。
*   用于面包板 MCU 应用的 3.3V / 5V 电源。
*   5V 电源可用于为 Seeeduino Film 电池充电。（请勿使用 FPC 连接进行此应用）
*   在 FT232RL 位操作模式下作为基于 USB 的并行设备的无限可能性——已知可用作 **AVR-ISP**、低速 **JTAG**（使用 OpenOCD）以及 **I2C**。

## 注意事项

<font color="red">**
**</font>

*   仅按照 **Seeeduino Film 编程器** "UartSB_Frame#Seeeduino_Film_Programmer" 部分所示连接 UartSB 框架到 Seeeduino Film。
*   请勿使用 FFC（柔性扁平电缆）直接连接 UartSB 框架到 Seeeduino Film。这会导致 20 针 FPC 连接反向。
*   小心操作 20 针 FPC 连接器。
*   仅在 3.3V I/O 下使用 **UartSB 框架**。

## 原理图

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_Schematic_1.png)

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_Scehmatic_2.png)

## 规格

### 关键规格

<table cellpadding="1" cellspacing="1">
<tr>
<th scope="row">微处理器</th>
<td>FT232RL</td>
</tr>
<tr>
<th scope="row">PCB 尺寸</th>
<td>35mm x 20mm</td>
</tr>
<tr>
<th scope="row">指示灯</th>
<td>电源 - 绿色 LED，RX 和 TX - 红色 LED</td>
</tr>
<tr>
<th scope="row">电源</th>
<td>3.3V 和 5V DC</td>
</tr>
<tr>
<th scope="row">接口</th>
<td>Mini-B USB，2.54mm 间距针脚头</td>
</tr>
<tr>
<th scope="row">Seeeduino 编程端口</th>
<td>20 针 FPC 插座</td>
</tr>
<tr>
<th scope="row">连接性</th>
<td>USB</td>
</tr>
<tr>
<th scope="row">通信协议</th>
<td>UART，位操作 I/O，SPI</td>
</tr>
</table>

### 电气特性

<table>
<tr>
<th>规格</th>
<th>最小值</th>
<th>典型值</th>
<th>最大值</th>
<th>单位</th>
</tr>
<tr>
<td>输入电压</td>
<td>-</td>
<td>5</td>
<td>5</td>
<td>Vdc</td>
</tr>
<tr>
<td>电流消耗</td>
<td>-</td>
<td>-</td>
<td>500</td>
<td>mA</td>
</tr>
<tr>
<td>输出电压</td>
<td>3.3</td>
<td>-</td>
<td>5</td>
<td>Vdc</td>
</tr>
</table>

## 引脚定义和额定值  

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_Outline_35mmx20mm.png)

<table>
<tr>
<th>引脚名称</th>
<th>描述</th>
</tr>
<tr>
<td width="100px">GND</td>
<td width="450px">地线引脚</td>
</tr>
<tr>
<td width="100px">3v3</td>
<td width="450px">3.3V电源</td>
</tr>
<tr>
<td width="100px">5V</td>
<td width="450px">来自USB端口的5V电源</td>
</tr>
<tr>
<td>RXD</td>
<td>UART数据输入</td>
</tr>
<tr>
<td>TXD</td>
<td>UART数据输出</td>
</tr>
<tr>
<td width="100px">CTS</td>
<td width="450px">UART清除发送信号</td>
</tr>
<tr>
<td width="100px">RTS</td>
<td width="450px">UART请求发送信号</td>
</tr>
<tr>
<td width="100px">DTR</td>
<td width="450px">UART数据终端就绪信号</td>
</tr>
<tr>
<td width="100px">DCD</td>
<td width="450px">UART数据载波检测信号</td>
</tr>
<tr>
<td width="100px">DSR</td>
<td width="450px">UART数据设置就绪信号</td>
</tr>
</table>

## 使用方法

### Seeeduino Film 编程器

**UartSB Frame** 专为烧录 **Seeeduino Film** 而设计。当连接到PC时，它作为USB到串口（COM端口）接口工作。这种配置可以用于与MCU串口通信，也可以用于支持基于UART的ISP的MCU编程。

* 如果尚未安装FT232RL驱动程序，请按照下一节中的步骤配置UartSB Frame。

* 按如下所示连接Seeeduino Film到UartSB Frame：

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/Seeeduino_Film_with_UartSB_Frame.jpg)

* 在Arduino IDE中将板类型设置为Arduino Pro或Pro Mini (3.3V, 8MHz) w/ATMega168。

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/SeeeduinoFilm_Arduino_Board_Selection.jpg)

* 上传代码。

#### 在 **Windows** 中配置 UartSB Frame

* 在Windows操作系统中，首次插入设备时，可能会要求安装驱动程序。

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Detected_Windows.JPG)

从FTDI网站下载并安装 **虚拟COM端口** 驱动程序：

[https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm)

* 打开安装驱动程序的向导。选择“从列表或特定位置安装”。

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Driver_install_1.JPG)

* 选择下载的驱动程序路径。

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Driver_install_2.JPG)

* 如果下载了未签名的驱动程序，会出现以下窗口。点击“仍然继续”。

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Driver_install_2.1.JPG)

* **UartSB Frame** 驱动程序成功安装。Windows会为 **FT232RL** 分配一个 **COM** 端口名称，例如 **COM10**、**COM11** 等。请在设备管理器中检查确切的名称。在此情况下，**COM16** 被分配给UartSB Frame。

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Driver_install_3.JPG)

#### 在 **GNU/Linux** 中配置 UartSB Frame

所有现代 **GNU/Linux 操作系统** 都自带FT232RL驱动程序。要检查是否检测到UartSB Frame，请执行 **lsusb** 命令。输出应类似于以下内容。

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/Lsub.png)

**GNU/Linux** 会分配 **/dev/ttyUSB0**、**/dev/ttyUSB1** 等作为设备名称。

要验证串口的工作情况，请连接UartSB Frame的 **TxD** 和 **RxD** 引脚，并使用类似 **cutecom** 的终端应用程序配置设备参数，如下所示。

**波特率**：9600，**数据位**：8，**停止位**：无，且无握手。

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_Txd_Rxd_connected.jpg)

在终端中输入的任何字符都会被回显，如下所示。

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartsBee-CuteCom.png)

同样的功能也可以在 **Windows** 的 **Hyperterminal** 中验证。

### Seeeduino Film 的电池充电器  

**UartSB Frame** 扩展板上的USB 5V电源可以用于为 **Seeeduino Film** 的电池充电。

* 将 **Seeeduino Film** 电源连接器焊接到 **UartSB Frame** 的5V和GND引脚。

* 将电源连接器连接到 **CHG** 插孔。

* 将电池连接到 Seeeduino Film 的 **BAT** 插孔。

* 打开USB电源。

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/SeeeduinoFilm_Battery_Charging_with_UartSBFrame.jpg)

### BitBang 模式  

与其他基于FT232RL的USB-串口设备相比，UartSB Frame的一个优点是所有Bit-Bang I/O都被引出到接头引脚。

Bit-Bang模式是FT232RL的一项特殊功能，其中8个I/O线（**D0 - D7**）可以用作通用双向I/O线。FT232RL支持三种Bit-Bang模式：

* **异步Bit-Bang模式**

任何写入设备的数据都会以配置的输出引脚时钟输出。数据传输速率基于波特率生成器配置。在此模式下，8个I/O线中的任何一个都可以配置为输入或输出。

* **同步Bit-Bang模式**

在此模式下，数据以同步方式发送。在发送输出字节到设备之前会读取输入。因此，要读取输入，必须执行写操作。

* **CBUS Bit-Bang模式**

这是一个特殊模式，需要重新编程FT232RL EEPROM。此模式使用信号 **C0 - C3**。

**FT232RL** 的 **Bit-Bang模式** 在应用笔记中有详细记录[[1]](https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf)。

**表：Bit-Bang I/O 映射**

<table>
<tr>
<th>UartSB Frame 信号</th>
<th>BitBang I/O 信号</th>
</tr>
<tr>
<td>TxD</td>
<td>D0</td>
</tr>
<tr>
<td>RxD</td>
<td>D1</td>
</tr>
<tr>
<td>RTS</td>
<td>D2</td>
</tr>
<tr>
<td>CTS</td>
<td>D3</td>
</tr>
<tr>
<td>DTR</td>
<td>D4</td>
</tr>
<tr>
<td>DSR</td>
<td>D5</td>
</tr>
<tr>
<td>DCD</td>
<td>D6</td>
</tr>
<tr>
<td>RI</td>
<td>D7</td>
</tr>
</table>

**BitBang 模式操作：**

一个简单的异步 Bit-Bang 模式操作在以下面包板布置中演示，其中 DTR (D4) 引脚连接到一个 LED。LED 的闪烁速率由 PC 端应用程序控制。

**LED 闪烁电路**

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_BitBang_demo.jpg)

上述图片使用 Fritzing.org 制作。

**Bit Bang I/O 引脚（ISP 接头）显示在底层**

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/Seeeduino_Frame_UarSBs_Bottom.jpg)

Bit-Bang 模式需要特殊的 FTDI 直接驱动程序 [D2XX](https://www.ftdichip.com/Drivers/D2XX.htm)。在安装此驱动程序之前，需要先卸载 FT232RL 芯片的虚拟 COM 端口驱动程序。在 GNU/Linux 中，此驱动程序运行于内核模式。作为 D2XX 的替代方案，可以使用开源驱动程序 [libFTDI](http://www.intra2net.com/en/developer/libftdi/)。此驱动程序适用于 Windows、GNU/Linux 和 Mac OS。在 GNU/Linux 中，它运行于用户模式，因此无需卸载现有的 FT232RL 驱动程序。

**libFTDI**

[http://www.intra2net.com/en/developer/libftdi/](http://www.intra2net.com/en/developer/libftdi/)

**libUSB**  
libFTDI 需要 libusb，可以从以下地址下载：

[http://www.libusb.org/](http://www.libusb.org/)

以下示例代码可以像 libFTDI 示例文件一样进行编译。一个简单的方法是将以下代码内容复制到现有的示例 .c 文件中，并使用以下命令构建整个驱动程序：

```bash
./configure
make
```

**代码示例**

Blinky.C: UartSBee v3.1 (FT232RL) Bit-Bang 模式 - 闪烁。

电路：
将 TXD 连接到 LED 的正极，将电阻的一端连接到 GND，另一端连接到 LED 的负极。

```c
#ifdef __WIN32__
#define sleep(x) Sleep(x)
#endif

// 8 位 I/O 引脚掩码
#define TXD 0x01  
#define RXD 0x02  
#define RTS 0x04  
#define CTS 0x08  
#define DTR 0x10
#define DSR 0x20
#define DCD 0x40
#define RI  0x80

#include <stdio.h>;
#include <ftdi.h>;    

int main
{ 
    unsigned char ouputState =0;
    struct ftdi_context ftdic;

    /* 1. 初始化 ftdi 设备上下文 */
    ftdi_init(&ftdic);  

    /* 2. 根据 VID/PID 对打开设备 */

    if(ftdi_usb_open(&ftdic, 0x0403, 0x6001) < 0)
    {
        printf("无法打开 UartSBs Frame");
        return 1;
    }

    /* 3. 启用 DTR 线的 Bit-Bang 模式 */
    ftdi_set_bitmode(&ftdic, TXD, BITMODE_BITBANG);

    /* 4. 每秒闪烁 LED */
    while(1)
    {
        ouputState ^= TXD;
        ftdi_write_data(&ftdic, &ouputState, 1);
        sleep(1);
    }
}
```

FT232RL 的 Bit-Bang 模式可以用于构建 AVR ISP、JTAG、SPI 和 I2C 端口。请参考外部链接。

## 图片库

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSBFrame_SeeeduinoFilm_Programming.jpg)

## 常见问题

请在此列出您的问题：

## 支持

如果您有问题或更好的设计想法，可以访问我们的 [论坛](https://www.seeedstudio.com/forum) 或 **许愿** 进行讨论。

## 文档版本追踪

<table>
<tr>
<th>版本</th>
<th>描述</th>
<th>编辑者</th>
<th>发布日期</th>
</tr>
<tr>
<td>V0.9b</td>
<td>详细应用说明</td>
<td>Visweswara R</td>
<td>2010年2月22日</td>
</tr>
</table>

## 硬件版本追踪  

<table>
<tr>
<th>版本</th>
<th>描述</th>
<th>发布日期</th>
</tr>
<tr>
<td>UartSBs Frame</td>
<td>0.9b</td>
<td>2010年2月22日</td>
</tr>
</table>

## Bug追踪  

Bug追踪是一个可以发布您在使用过程中发现的任何问题的地方。请写下您的意见，您的反馈将帮助我们改进产品。

## 额外创意  

额外创意是一个记录您关于该产品的项目创意或其他用途的地方，或者您可以将它们写在项目页面上。

## 资源  

- **[Eagle]** [Eagle中的原理图和板文件](https://wiki.seeedstudio.com/cn/images/d/d3/UartSBs_Frame_Schematic_Board.zip)

- **[PDF]** [PDF原理图](https://wiki.seeedstudio.com/cn/images/9/91/UartSBs_0.9b_Schematic.pdf)

## 如何购买  

点击这里购买 [UartSB Frame](https://www.seeedstudio.com/depot/seeeduino-frame-uartsbs-p-778.html?cPath=132_135)

## 许可协议  

本文档采用 [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) 许可协议。源代码和库采用 [GPL/LGPL](http://www.gnu.org/licenses/gpl.html) 许可协议，详情请参阅源代码文件。

## 外部链接  

* **[[2]](https://www.ftdichip.com/Products/ICs/FT232R.htm)** [FTDI FT232RL产品页面](https://www.ftdichip.com/Products/ICs/FT232R.htm)

* [[https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm)] FTDI虚拟COM端口(VCP)驱动程序  
* [FTDI D2XX驱动程序](https://www.ftdichip.com/Drivers/D2XX.htm)

* [FTDI Bit-Bang模式应用说明](https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf)

**开源驱动**

* [libFTDI](http://www.intra2net.com/en/developer/libftdi/)

* [libUSB](http://www.libusb.org/)

**其他FT232RL应用信息来源**

* [Hackaday - Bit-Bang模式简介](http://hackaday.com/2009/09/22/introduction-to-ftdi-bitbang-mode/)

* [使用OpenOCD实现FT232R JTAG](http://vak.ru/doku.php/proj/bitbang/bitbang-jtag)

* [FT232R SPI Bitbang模式示例](http://openschemes.com/2009/11/05/bit-banging-spi-on-arduinos-ft232rl/)

## 技术支持与产品讨论  

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>