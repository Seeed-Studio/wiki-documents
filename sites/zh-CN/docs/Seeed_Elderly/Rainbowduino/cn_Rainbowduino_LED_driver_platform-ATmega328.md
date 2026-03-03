---
description: Rainbowduino_LED驱动平台-ATmega328
title: Rainbowduino LED驱动平台-ATmega328
keywords:
- Rainbowduino_LED_driver_platform-ATmega328
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Rainbowduino_LED_driver_platform-ATmega328
last_update:
  date: 01/20/2023
  author: Matthew
---

|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Rainbowduino_LRG.jpg) |![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Rainbowduino_01_LRG.jpg)
|---|---|

Rainbowduino板是一款与Arduino兼容的控制板，具有专业的LED驱动能力。它可以驱动一个8x8 RGB LED矩阵（共阳极）。

* 无需外部电路，插入即可发光！

* 24个恒流通道，每个通道120mA

* 8个超强源驱动通道，每个通道500mA

* 宽输出电压适应范围：6.5V-12VDC

* 专用GPIO和ADC

* 硬件UART和I2C通信

* 易于级联

* 小巧轻便

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Rainbowduino-LED-driver-platform-Atmega-328-p-371.html)

## 独立模式（插入即可发光）

---
所需硬件：

* 1 x Rainbowduino

* 1 x RGB LED矩阵

最简单的工作模式，无需外部系统（仅需一个TTL串行适配器上传固件）。LED矩阵内容由Rainbowduino自身生成。

使用场景：

* Rainbowduino计算的简单实时动画

* 显示预存的动画，受限于Rainbowduino的32kb ROM

## UART模式

---
所需硬件：

* 1 x Rainbowduino

* 1 x RGB LED矩阵

* 1 x TTL电平转换器

* 1 x UART发送单元（Arduino、PC等）

从计算机向Rainbowduino发送数据（LED矩阵内容）。由于Rainbowduino没有USB连接器，而是使用TTL串行连接，因此需要一个TTL串行电平转换器（如BusPirate、UartSBee、Arduino等）。

**使用场景：**

由PC或Arduino生成的帧显示在一个LED矩阵上

## I2C模式

---
所需硬件：

* 1..n x Rainbowduino

* 1..n x RGB LED矩阵

* 1 x I2C主设备（例如Arduino）

* 一些电缆

从计算机向多个Rainbowduino发送数据（LED矩阵内容）。如果使用带有FTDI USB到串行适配器的Arduino（如Duemillanove、Diecimila等），需要注意从计算机向Arduino发送数据时会有约16ms的延迟。而新的Arduino UNO延迟较低，约为4ms。

使用场景：

由PC或Arduino生成的帧显示在**多个**LED矩阵上

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-i2c-cabling.png)

## I2C级联

---
Rainbowduino设计为易于级联。物理连接后，电源会被传递，并且可以通过I2C控制整个链条。请注意，每个Rainbowduino必须分配一个唯一的地址以进行I2C通信。

准备电源连接：

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-chain-prepare.png)

Rainbowduino级联：

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-chained.png)

## 规格

---
* 微处理器：Atmega 328

* PCB尺寸：60mm * 60mm * 1.6mm

* 指示灯：复位、供电、Pin 13 LED

* 电源：6.5-12 VDC（推荐9 VDC）

* 电源连接器：2针JST端子块，3mm DC插孔

* 级联电源连接器：端子块

* 程序接口：UART / ISP

* LED点阵插座：32个

* 扩展插座：2.54mm弯曲针脚对接头

* 通信协议：I2C / UART

* RHOS：支持

* 输入电压：6.5~12V

* 总电流消耗：600~2000mA

* 恒流通道（阴极）：24个

* 每通道恒流（阴极）：20~120mA

* 每通道源驱动电流（共阳极）：500mA

* 每通道源驱动电压（共阳极）：9~12V

* 源驱动通道：8个

* 驱动LED数量：192个

* 电路响应时间：10ns

* RGB LED矩阵每点颜色分辨率：4096

* UART波特率：115200baud

## LED设备兼容性

---
在直接插入母针头之前，请确认RGB点阵是否兼容。主要关注点在于针脚排列，其中同色LED是否成簇排列。以下附上针脚方案和照片演示。颜色顺序可能会改变，因为控制逻辑是开源的并且可以轻松重新编程。

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-ledmatrix-schema.png)

Rainbowduino的驱动能力远超RGB点阵。凭借192个输出通道和高达120mA的恒流能力，您可以轻松构建大规模LED设置。

每个通道的输出电流（IOUT）由外部电阻Rext设置。以下图表展示了IOUT与Rext的关系。请参考MBI5168数据表以获取更多详细信息。顺时针调整1k电位器以减少输出电流（RGB点阵默认最小值为20mA），逆时针旋转以增加输出电流。电位器为单圈，请注意强力旋转可能会导致其损坏为无限旋转状态，此时您需要使用万用表进行调整。:)

这意味着您可以无需额外电阻构建自己的LED矩阵。

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-ledmatrix-voltage.png)

## 演示

---
<big>需求</big>

* Rainbowduino板

* 一个共阳极RGB矩阵

* 一个Arduino板（可选）

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-connected-matrix.png)

<big>准备Rainbowduino硬件</big>

将RGB LED矩阵连接到Rainbowduino，并将“Pin 1”连接到红色连接块。Pin 1通过方形焊点标记，而其他针脚使用圆形焊点。

<big>上传固件</big>

1. 首先将代码上传到Arduino：
为了使用Arduino将固件上传到Rainbowduino，请确保Arduino是干净的——我们需要上传一个空的固件草图，如下所示：

```
void setup() {}

void loop() {}
```

2. 将固件上传到Rainbowduino

打开Rainbowduino固件，**选择正确的板子**（工具--&gt;板子--&gt; Arduino Duemilanove或Nano w/ ATmega328），然后上传固件。理论上就是这样 ;)
为了方便查看，这里是连接方案：
![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-fritz-uploadfw.png)

我们使用外部电源，但您也可以使用Arduino的5V电源。

**注意：** 如果您拥有Rainbowduino v1板，则需要选择“Arduino Diecimila, Duemilanove, or Nano w/ ATmega168”！

<table>
<tr>
<th>Arduino</th>
<th>Rainbowduino</th>
<th>RESET</th>
<th>DTR</th>
<th>GND</th>
<th>GND</th>
<th>RX</th>
<th>RX</th>
<th>TX</th>
<th>TX</th>
</tr>
</table>

3. 使用UartSB上传固件

以下截图展示了如何将UartSBee连接到Rainbowduino：

| ![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-beeONE.jpg)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-beeTWO.jpg)
|---|---|

如果您将UartSBee连接到USB总线，它应该会注册一个新的串口。现在只需使用新的串口上传固件。

4. 使用Buspirate上传固件/引导程序

我将解释三种使用Buspirate编程的方法：

* 通过ISP编程。
* 使用avrdude和手动复位编程（无需补丁）。
* 使用avrdude和一个小补丁进行编程。

断开Rainbowduino与显示屏和电源的连接。

步骤1：要使用Buspirate，您需要一个新版的avrdude [[1]](http://download.savannah.gnu.org/releases/avrdude/)。我使用的是版本5.10，它支持“-c buspirate”编程器选项。您可以通过以下命令测试：

```
./avrdude -c buspirate -C ./avrdude.conf
```

如果此命令提示编程器错误，则需要更新Buspirate版本。

步骤2：将Buspirate连接到Rainbowduino的ISP连接器，如下所示：

<table>
<tr>
<th>Buspirate</th>
<th>ISP</th>
<th>ISP针脚</th>
</tr>
<tr>
<td width="80px">GND</td>
<td width="80px">GND</td>
<td width="80px">6</td>
</tr>
<tr>
<td>+5V</td>
<td>Vcc</td>
<td>2</td>
</tr>
<tr>
<td>CS</td>
<td>RESET</td>
<td>5</td>
</tr>
<tr>
<td>MOSI</td>
<td>MOSI</td>
<td>4</td>
</tr>
<tr>
<td>MISO</td>
<td>MISO</td>
<td>1</td>
</tr>
<tr>
<td>SCL/CLK</td>
<td>SCK</td>
<td>3</td>
</tr>
</table>

步骤3：找到正确的引导程序（我使用的是tiny optiboot固件）。将此文件复制到您新编译的avrdude目录。

步骤4：使用以下命令为ATmega 328p编程：

```
./avrdude -v -c buspirate -p m328p -C ./avrdude.conf -P /dev/ttyUSB0 -U flash:w:optiboot_atmega328.hex
```

此过程需要很长时间...

我开始上传没有引导程序的固件，这一过程运行良好。诀窍是从 Arduino IDE 获取 HEX 文件。在 0.22-Linux 版本中，它们存储在 `/tmp/buildXXXXXXXXXXXX` 中，而不是在 sketches 目录中。只需在没有连接任何编程器的情况下发出“上传”命令（按住 `<shift>` 键同时按下“上传”按钮，可以从 Arduino IDE 获取更多调试信息）。

在 Rainbowduino 上安装引导程序后，可以使用 Bus Pirate 的透明串行接口。将波特率设置为 115200，并输入 `(3)` 宏以激活透明模式。此时，Bus Pirate 充当 USB-串行转换器（也可以使用其他类似 FTDI 的 USB-串行转换器）。Bus Pirate 的问题在于没有 DTR 信号来重置 Arduino。因此，您需要手动定时重置和上传。在开始上传后按下重置按钮似乎效果最好。

```
HiZ>m
1. HiZ
2. 1-WIRE
3. UART
4. I2C
5. SPI
6. JTAG
7. RAW2WIRE
8. RAW3WIRE
9. PC KEYBOARD
10. LCD
(1) >3
Mode selected
Set serial port speed: (bps)
1. 300
2. 1200
3. 2400
4. 4800
5. 9600
6. 19200
7. 38400
8. 57600
9. 115200
10. 31250 (MIDI)
(1) >9
Data bits and parity:
1. 8, NONE *default
2. 8, EVEN
3. 8, ODD
4. 9, NONE
(1) >
Stop bits:
1. 1 *default
2. 2
(1) >
Receive polarity:
1. Idle 1 *default
2. Idle 0
(1) >
Select output type:
1. Open drain (H=Hi-Z, L=GND)
2. Normal (H=3.3V, L=GND)
(1) >2
READY
UART>(3)
UART bridge. Space continues, anything else exits.
Reset to exit.
```

之后，您可以使用引导程序对 Arduino 进行编程：

```
./avrdude -v -c stk500v1 -p m328p -b 115200 -F -C ./avrdude.conf -P /dev/ttyUSB0 -U flash:w:Rainbow_Plasma.cpp.hex
```

更进一步，可以在文件 `arduino.c` 中对 avrdude 进行补丁。Bus Pirate 发送的 `rts` 信号极性错误，通过将 1 替换为 0 和 0 替换为 1，可以修复此问题。从那时起，您需要选择“arduino”作为编程器，而不是“stk500v1”。

```
static int arduino_open(PROGRAMMER * pgm, char * port)
{
    fprintf(stderr, "arduino_open...\n");
    strcpy(pgm->port, port);
    serial_open(port, pgm->baudrate? pgm->baudrate: 115200, &pgm->fd);

  /* 清除 DTR 和 RTS 以卸载 RESET 电容
   * （例如在 Arduino 中） */
    serial_set_dtr_rts(&pgm->fd, 1);
    usleep(50*1000);
  /* 将 DTR 和 RTS 设置回高电平 */
    serial_set_dtr_rts(&pgm->fd, 0);
    usleep(50*1000);

  /*
   * 清除任何多余的输入
   */
    stk500_drain(pgm, 0);

    if (stk500_getsync(pgm) < 0)
    return -1;

    return 0;
}
```

_注意：在 `boards.txt` 文件中更改 Arduino IDE 使用的编程器类型。_

来源：buspirate-avr-programming [[2]](http://hintshop.ludvig.co.nz/show/buspirate-avr-programming/)，Bus_Pirate_AVR_Programming [[3]](http://dangerousprototypes.com/docs/Bus_Pirate_AVR_Programming)，Optiboot [[4]](http://code.google.com/p/optiboot/)

## Rainbowduino 固件

<big>Neorainbowduino 固件</big>

此固件包包含两个固件（一个用于 Arduino，一个用于 Rainbowduino）以及一个 Processing 库。您可以通过串行线路从任何应用程序向 Arduino 发送数据——Arduino 然后将图像发送到相应的 Rainbowduino 设备。我创建了一个易于使用的 Processing 库以便快速入门。

来源：[http://code.google.com/p/neorainbowduino/](http://code.google.com/p/neorainbowduino/)

**功能：**

* 支持 I2C 的固件（支持多个 Rainbowduino）

* Processing 库，因此您可以轻松地从 Processing 控制您的 Rainbowduino！

* 从 Processing 向 Rainbowduino 发送完整帧

* 从 Processing 向您的 RGB 矩阵发送帧，每帧大小为 8x8 像素，12 位颜色分辨率（4096 种颜色）。颜色转换由库处理

* 优化的 Processing 库——仅在需要时向 Rainbowduino 发送帧（节省约 50% 的流量——当然这取决于您的帧）

* 修复了缓冲区交换（不再闪烁）

* 添加了 i2c 总线扫描器，如果您忘记了 Rainbowduino 的地址，可以找到它们

支持的工作模式：I2C

<big>需求</big>

此固件允许您使用 Processing 控制 Rainbowduino，因此显而易见您需要：

* Processing 软件，从 [http://processing.org/](http://processing.org/) 获取

<big>Arduino IDE 的补丁</big>

由于 neorainbowduino 固件通过 I2C 发送完整帧（92 字节），我们需要为 Arduino 的 I2C 缓冲区大小打补丁（以优化传输速度）。在打补丁时，请确保您的 **Arduino IDE 已关闭**！

**需要打补丁的文件：** Java/libraries/Wire/utility/twi.h

**原因：** 将 I2C 速度从 100kHz 增加到 400kHz，将 I2C 缓冲区大小从 32 字节增加到 98 字节

<big>原始文件</big>

```c
#ifndef TWI_FREQ
#define TWI_FREQ 100000L
#endif

#ifndef TWI_BUFFER_LENGTH
#define TWI_BUFFER_LENGTH 32
#endif
```

<big>打过补丁的文件</big>

```c
#ifndef TWI_FREQ
#define TWI_FREQ **400000L**
#endif

#ifndef TWI_BUFFER_LENGTH
#define TWI_BUFFER_LENGTH **98**
#endif
```

**需要打补丁的文件：** Java/libraries/Wire/Wire.h

**原因：** 将串行缓冲区大小从 32 字节增加到 98 字节

<table>
<tr>
<th>原始文件</th>
<th>打过补丁的文件</th>
</tr>
<tr>
<td width="300px"></td>
<td width="300px"></td>
</tr>
</table>

<pre>#define BUFFER_LENGTH 32</pre>

<pre>#define BUFFER_LENGTH **98**</pre>

<big>上传固件到 Rainbowduino</big>

上传固件（参见上传固件），您需要的固件文件是 **rainbowduinoFw/Rainbow_V2_71/Rainbow_V2_71.pde**。

**注意：** 此固件使用 I2C 协议进行通信——每个 Rainbowduino 需要一个唯一的 I2C 地址。地址可以通过编辑 Rainbowduino.h 文件来配置（`#define I2C_DEVICE_ADDRESS 0x06`）。因此，如果您将此固件上传到多个 Rainbowduino，请不要忘记更改地址！

<big>上传固件到 Arduino</big>

断开 Rainbowduino 和 Arduino 之间的 RX/TX 线路。将 Arduino 固件 **arduinoFw/neoLed/neoLed.pde** 上传到 Arduino。

<big>与 Rainbowduino 交互</big>

本章将向您展示一种**简单的方式与 Rainbowduino 通信**。您需要一个 Arduino（作为串口到 I2C 网关）和一个 I2C 地址为 0x06 的 Rainbowduino。

Rainbowduino 和 Arduino 之间的连接应如下所示：
![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-neorainbow.png)

我们使用外部电源，但您也可以使用 Arduino 的 5V 电源。

<table>
<tr>
<th> Arduino</th>
<th> Rainbowduino</th>
</tr>
<tr>
<td width="150px">RESET</td>
<td width="150px">DTR</td>
</tr>
<tr>
<td>GND</td>
<td>GND</td>
</tr>
<tr>
<td>Analog IN 4</td>
<td>SDA</td>
</tr>
<tr>
<td>Analog IN 5</td>
<td>SDL</td>
</tr>
</table>

<big>安装 Processing 库</big>

安装 Processing 软件后，您需要安装 neorainbowduino 库。您可以在 **processingLib\distribution\neorainbowduino-x.y\download** 目录中找到该库。将 zip 文件解压到您的 Processing 主文件夹中（文件夹内有 README.TXT 文件，提供详细的安装说明）。

启动 Processing 后，您应该能够导入 neorainbowduino 库：

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-processing-lib.png)

**简单示例**

以下是一个非常简单的 Processing 示例代码，用于向 Rainbowduino 发送一些随机矩形。

```c
import processing.serial.*;
import com.neophob.lib.rainbowduino.test.*;
import com.neophob.lib.rainbowduino.*;

static final int SIZE = 400;
Rainbowduino r;

void setup() {
    frameRate(15);
    background(0);
    size(SIZE, SIZE);

    //初始化 Rainbowduino
    List<Integer> list = new ArrayList<Integer>();
    list.add(6);         //使用 ID 为 6 的 Rainbowduino
    try {
        r = new Rainbowduino(this, list);
        System.out.println("ping: "+r.ping());
    } catch (Exception e) {
        println("无法打开串口！！");
        e.printStackTrace();
    }

    smooth();
    noStroke();
}

void draw() {
    //在屏幕上绘制一些简单的内容
    color c1 = color(128+(int)random(64), 128, (int)random(255));
    fill(c1);

    int size = 80+(int)random(80);
    int x = (int)random(SIZE);
    int y = (int)random(SIZE);
    rect(x, y, size, size);<br>
    //将 PApplet 发送到 Rainbowduino 库，并发送到 ID 为 6 的从设备
    r.sendRgbFrame((byte)6, this);
}
```

TODO 添加一些截图

**图像缩放的工作原理**

图像将使用区域平均滤波器进行缩放。因此，重要的是要确保图像正确对齐。对齐意味着，如果图像可以被 8 整除，结果看起来会很好。以下是一个好的和不好的示例：

|好的示例（对齐）|不好的示例（未对齐）
|---|---|
|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-good-src.png)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-bad-src.png)
| ![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-good-dst.png)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-bad-dst.png)

## mtXcontrol 固件

来源: [http://www.rngtng.com/mtxcontrol/](http://www.rngtng.com/mtxcontrol/)

**功能特点:**

* mtXcontrol 是一个使用 Processing 编写的编辑器，可轻松为包含多色 LED 矩阵的多个输出设备创建图像序列。

支持的工作模式: ???

## 固件 3

来源: [http://code.google.com/p/rainbowduino-firmware/](http://code.google.com/p/rainbowduino-firmware/)

**功能特点:**

* 与刷新率同步的双缓冲

* 4 个辅助缓冲区

* 高级指令集

* 多硬件控制

* I2C 通信协议

* 数据永久存储在 Eeprom 中

支持的工作模式: I2C

## RainbowDashboard

来源: [http://code.google.com/p/rainbowdash/](http://code.google.com/p/rainbowdash/)

**功能特点:**

* 干净、可维护的代码库。

* 兼容标准固件。

* 支持 UART 模式（无需 Arduino 主机 - 可直接与 Rainbowduino 通信）。

* 双缓冲图形操作。

* 软件实时时钟。

* 动画由 Rainbowduino 自身驱动。

* 完整的 Windows ANSI (CP1252) 字符集。

* 高级命令集。

支持的工作模式: UART

可以轻松更改为使用 I2C；只需更改一个文件 (RainbowDash.pde)。

## 固件工作原理

<big>微处理器 - Atmega 168/328</big>

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Schema.png)

<table>
<tr>
<th> PORTD</th>
<th> PORTB</th>
<th> PORTC</th>
</tr>
<tr>
<td width="150px">pin02 / PD0 / RXD</td>
<td width="150px">pin14 / PB0 / INT0</td>
<td width="150px">pin23 / PC0 / SDI</td>
</tr>
<tr>
<td>pin03 / PD1 / TXD</td>
<td>pin15 / PB1 / INT1</td>
<td>pin24 / PC1 / CLK</td>
</tr>
<tr>
<td>pin04 / PD2 / INT0</td>
<td>pin16 / PB2 / INT2</td>
<td>pin25 / PC2 / LE</td>
</tr>
<tr>
<td>pin05 / PD3 / INT19</td>
<td>pin17 / PB3 / INT3</td>
<td>pin26 / PC3 / OE</td>
</tr>
<tr>
<td>pin06 / PD4 / INT20</td>
<td>pin18 / PB4 / INT4</td>
<td>pin27 / PC4 / SDA</td>
</tr>
<tr>
<td>pin11 / PD5 / INT21</td>
<td>pin19 / PB5 / INT5/SCK</td>
<td>pin28 / PC5 / SDL</td>
</tr>
<tr>
<td>pin12 / PD6 / INT22</td>
<td></td>
<td></td>
</tr>
<tr>
<td>pin13 / PD7 / INT23</td>
<td></td>
<td></td>
</tr>
</table>

**PORTB** 映射到 Arduino 数字引脚 8 到 13。两个高位（6 和 7）映射到晶体引脚，无法使用。

**PORTC** 映射到 Arduino 模拟引脚 0 到 5。引脚 6 和 7 仅在 Arduino Mini 上可访问。

**PORTD** 映射到 Arduino 数字引脚 0 到 7。

<big>恒流 LED 驱动器</big>

此驱动器使用 MBI5168。MBI5168 是一个 8 位[移位寄存器](https://en.wikipedia.org/wiki/Shift_register)。它将串行数据转换为并行数据。所有 3 个 MBI5168 共享 LE、CLK 和 OE 输入。

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Mbi-schema.png)

<table>
<tr>
<th> 名称</th>
<th> 描述</th>
</tr>
<tr>
<td width="50px">OE</td>
<td width="950px">输出使能，当为（有效）低时，输出驱动器被启用；当为高时，所有输出驱动器关闭（空白）。</td>
</tr>
<tr>
<td>LE</td>
<td>数据选通输入端，当 LE 为高时，串行数据传输到相应的锁存器。当 LE 变为低时，数据被锁存。</td>
</tr>
<tr>
<td>SDI</td>
<td>移位寄存器的串行数据输入。</td>
</tr>
<tr>
<td>SDO</td>
<td>串行数据输出到下一个驱动器 IC 的 SDI。</td>
</tr>
<tr>
<td>R-EXT</td>
<td>用于连接外部电阻以设置所有输出通道的输出电流的输入端。</td>
</tr>
<tr>
<td>CLK</td>
<td>用于数据移位的时钟输入端，在上升沿触发。</td>
</tr>
</table>

<big>超级源驱动器</big>

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-schema-M5456.png)

<big>移出数据</big>

为了在 LED 矩阵上显示完整帧，Rainbowduino 中断方法需要调用 128 次。矩阵有 8 行和 16 个亮度级别。每次调用 displayNextLine() 方法时，当前亮度级别会更新一行。所有 8 行更新后，亮度级别会更新。因此，该函数需要 128 个周期才能在 LED 矩阵上填充完整帧。

下图显示了 LED 矩阵在 32、64、96 和 128 个周期后的显示效果。可以看到亮度逐渐增加。
![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-fw.1.png)

<big>支持超过 4096 种颜色（12 位）</big>

默认固件（以及大多数第三方固件）支持 12 位颜色分辨率。可以进一步提升：

<table>
<tr>
<th> 颜色分辨率</th>
<th> 数据负载</th>
<th> 亮度级别</th>
</tr>
<tr>
<td width="250px">12 位（每种颜色 4 位），4096 种颜色</td>
<td width="250px">96 字节 (12bit*64=768bit)</td>
<td>16</td>
</tr>
<tr>
<td>15 位（每种颜色 5 位），32768 种颜色</td>
<td>120 字节 (15bit*64=960bit)</td>
<td>32</td>
</tr>
</table>

使用每种颜色 4 位的优势在于数据存储，一个字节包含 2 个颜色值，因此可以轻松从字节缓冲区获取颜色值。使用每种颜色 5 位需要更多的 CPU 功率或更多的缓冲空间（使用 2 个字节存储 3 个颜色值 - 每种颜色浪费 1 位）。

要实现 15 位颜色分辨率，固件需要进行以下两项更改：

* 循环亮度级别从 16 改为 32

* 修改移出数据的函数

## 资源

---

* [一个巨大的 DIY LED 矩阵](http://www.neophob.com/2010/11/huge-rgb-led-matrix/)

* [通用 Rainbowduino 信息](http://www.neophob.com/2010/07/rainbowduino-fun-aka-neorainbowduino/)

* [文件:RAINBOW-MBI5168 Datasheet VA.02-English.pdf](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/res/RAINBOW-MBI5168_Datasheet_VA.02-English.pdf "文件:RAINBOW-MBI5168 Datasheet VA.02-English.pdf")

* [prod_documents](http://www.atmel.com/dyn/resources/prod_documents/doc2545.pdf)

* [文件:RAINBOW-MBI5168 Datasheet VA.02-English.pdf](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/res/RAINBOW-MBI5168_Datasheet_VA.02-English.pdf "文件:RAINBOW-MBI5168 Datasheet VA.02-English.pdf")

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时拥有尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>