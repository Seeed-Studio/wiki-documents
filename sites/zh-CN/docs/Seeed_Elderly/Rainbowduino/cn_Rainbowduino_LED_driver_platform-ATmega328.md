---
description: Rainbowduino_LED_driver_platform-ATmega328
title: Rainbowduino LED 驱动平台-ATmega328
keywords:
  - Rainbowduino_LED_driver_platform-ATmega328
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Rainbowduino_LED_driver_platform-ATmega328
last_update:
  date: 01/20/2023
  author: Matthew
createdAt: '2023-02-16'
updatedAt: '2025-07-11'
url: https://wiki.seeedstudio.com/cn/Rainbowduino_LED_driver_platform-ATmega328/
---

|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Rainbowduino_LRG.jpg) |![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Rainbowduino_01_LRG.jpg)
|---|---|

Rainbowduino 板是一款兼容 Arduino 的控制板，具备专业的 LED 驱动能力。它可以驱动一个 8x8 RGB LED 点阵（共阳极）。

* 无需外部电路，插上就亮！

* 24 路恒流通道，每路 120mA

* 8 路大电流源极驱动通道，每路 500mA

* 宽输出电压适配范围 6.5V-12VDC

* 专用 GPIO 和 ADC

* 硬件 UART 和 I2C 通信

* 易于级联

* 体积小、重量轻

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Rainbowduino-LED-driver-platform-Atmega-328-p-371.html)

## 独立模式（插上就亮）

---
所需硬件：

* 1 x Rainbowduino

* 1 x RGB LED 点阵

最简单的工作模式，不需要外部系统（只需一个 TTL 串口适配器来上传固件）。LED 点阵的显示内容由 Rainbowduino 自行生成。

使用场景：

* 由 Rainbowduino 计算的简单实时动画

* 显示预存动画，但受限于 Rainbowduino 的 32kb ROM

## UART 模式

---
所需硬件：

* 1x Rainbowduino

* 1x RGB LED 点阵

* 1x TTL 电平转换器

* 1x UART 发送单元（Arduino、PC 等）

从你的电脑向一个 Rainbowduino 发送数据（LED 点阵内容）。由于 Rainbowduino 没有 USB 接口而是 TTL 串口连接，你需要一个 TTL 串口电平转换器（BusPirate、UartSBee、Arduino 等）。

**使用场景：**

由 PC 或 Arduino 生成的帧显示在一个 LED 点阵上

## I2C 模式

---
所需硬件：

* 1..n x Rainbowduino

* 1..n x RGB LED 点阵

* 1 x I2C 主设备（例如 Arduino）

* 若干导线

从你的电脑向多个 Rainbowduino 发送数据（LED 点阵内容）。如果你使用带 FTDI USB 转串口适配器的 Arduino（Duemillanove、Diecimila 等），有一点需要注意——从电脑向 Arduino 发送数据存在约 16ms 的延迟。新的 Arduino UNO 延迟要小得多，约 4ms。

使用场景：

由 PC 或 Arduino 生成的帧显示在**多个** LED 点阵上

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-i2c-cabling.png)

## I2C 级联

---
Rainbowduino 被设计为易于级联。物理连接完成后，电源会被传递下去，你可以通过 I2C 控制整条链。请注意，每个 Rainbowduino 必须分配一个唯一地址用于 I2C 通信。

准备电源连接：

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-chain-prepare.png)

Rainbowduino 级联后：

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-chained.png)

## 规格参数

---
* 微处理器：Atmega 328

* PCB 尺寸：60mm *60mm* 1.6mm

* 指示灯：复位、电源、Pin 13 LED

* 电源：6.5-12 VDC（推荐 9 VDC）

* 电源连接器：2 针 JST 端子、3mm DC 插座

* 级联电源连接器：端子

* 编程接口：UART / ISP

* LED 点阵插座：32

* 扩展插座：2.54mm 弯排针对

* 通信协议：I2C / UART

* RHOS：是

* 输入电压：6.5~12V

* 总电流消耗：600~2000mA

* 恒流通道（阴极）：24

* 每路恒流（阴极）：20~120mA

* 每路源极驱动电流（共阳极）：500mA

* 每路源极驱动电压（共阳极）：9~12V

* 源极驱动通道：8

* 可驱动 LED 数量：192

* 电路响应时间：10ns

* RGB LED 点阵每点颜色分辨率：4096：Uart 波特率：115200baud

## LED 器件兼容性

---
在直接插入母排针之前，请确认 RGB 点阵已被证明兼容。主要关注的是引脚排列，同一颜色的 LED 是否成组，这里我们附上原理图和照片示例。颜色顺序可能会变化，因为控制逻辑是开源的且易于重新编程。

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-ledmatrix-schema.png)

Rainbowduino 的驱动能力远不止驱动一个 RGB 点阵。凭借 192 路输出和最高 120mA 的恒流能力，你可以轻松搭建大规模 LED 阵列。

每个通道的输出电流（IOUT）由一个外部电阻 Rext 设置。Iout 与 Rext 的关系如下面的图所示。更多细节请参考 MBI5168 数据手册。顺时针调节 1k 电位器可以减小输出电流（RGB 点阵默认最小 20mA），逆时针旋转可以增大输出电流。电位器是单圈的，请注意用力过大可能会使其损坏成可无限旋转，这种情况下你就需要用万用表来重新调节。:)

这意味着你可以在不使用任何额外电阻的情况下自制 LED 点阵。

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-ledmatrix-voltage.png)

## 演示

---
<big>需求 </big>

* Rainbowduino 板

* 一个共阳极 RGB 点阵

* 一块 Arduino 板（可选）

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-connected-matrix.png)

<big>准备 Rainbowduino 硬件 </big>

将 RGB LED 点阵连接到 Rainbowduino，并将“Pin 1”连接到红色接线端子。Pin1 通过方形焊盘标记，而其他引脚使用圆形焊盘。

<big>上传固件  </big>

1. 先向 Arduino 上传一段代码：
为了使用 Arduino 向 Rainbowduino 上传固件，请确保 Arduino 是“干净”的——我们需要像下面所示那样向其上传一个空的固件草图。

```
void setup() {}

void loop() {}
```

2. 向 Rainbowduino 上传固件

打开 Rainbowduino 固件，**选择正确的开发板**（Tools--&gt;board--&gt; Arduino Duemilanove or Nano w/ ATmega328），然后上传固件。至少理论上是这样的 ;)
 为了便于你查看，这里是连接示意图：
![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-fritz-uploadfw.png)

我们使用外部电源，不过你也可以使用来自 Arduino 的 5V。

**注意：** 如果你拥有的是 Rainbowduino v1 板，你需要选择 "Arduino Diecimila, Duemilanove, or Nano w/ ATmega168"！

<table >
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

3. 使用 UartSB 上传固件

下面这些截图展示了如何将 UartSBee 连接到 Rainbowduino：

| ![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-beeONE.jpg)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-beeTWO.jpg)
|---|---|

如果你将 UartSBee 连接到 USB 总线，它应该会注册一个新的串口。现在只需使用这个新的串口上传你的固件即可。

4. 使用 Buspirate 上传固件 / 引导加载程序

我将说明三种编程方法（都使用 Buspirate）：

* 通过 ISP 编程。
* 使用 avrdude 和手动复位进行编程（无需打补丁）
* 通过带有小补丁的 avrdude 编程。

将 RAINBOWDUINO 与显示屏和电源断开连接。

步骤 1：要使用 Buspirate，你需要一个新版本的 avrdude [[1]](http://download.savannah.gnu.org/releases/avrdude/)。我使用的是 5.10 版本，它支持 '-c buspirate' 编程器选项。你可以用下面的命令测试

```
./avrdude -c buspirate -C ./avrdude.conf
```

如果它对编程器报错，那么你需要一个更新版本的 Buspirate。

步骤 2：按如下方式将 Buspirate 连接到 Rainbowduino 的 ISP 接口：

<table >
<tr>
<th> Buspirate</th>
<th> ISP</th>
<th> ISP pin</th>
</tr>
<tr>
<td width="80px"> GND</td>
<td width="80px"> GND</td>
<td width="80px"> 6</td>
</tr>
<tr>
<td> +5V</td>
<td> Vcc</td>
<td> 2</td>
</tr>
<tr>
<td> CS</td>
<td> RESET</td>
<td> 5</td>
</tr>
<tr>
<td> MOSI</td>
<td> MOSI</td>
<td> 4</td>
</tr>
<tr>
<td> MISO</td>
<td> MISO</td>
<td> 1</td>
</tr>
<tr>
<td> SCL/CLK</td>
<td> SCK</td>
<td> 3</td>
</tr>
</table>

步骤 3：找到正确的引导加载程序（我使用的是精简的 optiboot 固件）。将该文件复制到你新编译的 avrdude 目录中。

步骤 4：使用以下命令对 atmega 328p 进行编程

```
./avrdude -v -c buspirate -p m328p -C ./avrdude.conf -P /dev/ttyUSB0 -U flash:w:optiboot_atmega328.hex
```

这会花费很长时间……

我一开始是在没有引导加载程序的情况下上传固件的，这样也能正常工作。诀窍是从 Arduino IDE 中获取 HEX 文件。在 0.22-Linux 版本中，它们存储在 /tmp/buildXXXXXXXXXXXX 中，而不是 sketches 目录。只需在没有连接任何编程器的情况下执行“Upload”命令（在按下“upload”按钮时按住 &lt;shift&gt;，即可从 Arduino IDE 获得更多调试信息）。

在你将引导加载程序写入 Rainbowduino 之后，你就可以使用 Buspirate 的透明串口接口。将波特率设置为 115200，并输入 '(3)' 宏以激活透明模式。此时 Buspirate 就像一个 USB-串口转换器（也可以使用其他任何类似 FTDI 的 USB-串口转换器）。使用 Buspirate 的问题在于它没有 DTR 信号来复位 Arduino。你现在必须手动把握复位和上传的时机。在开始上传后按下复位似乎效果最好。

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

之后，你就可以使用引导加载程序来为 Arduino 编程了：

```
./avrdude -v -c stk500v1 -p m328p -b 115200 -F -C ./avrdude.conf -P /dev/ttyUSB0 -U flash:w:Rainbow_Plasma.cpp.hex
```

更进一步的一步是修改文件“arduino.c”中的 avrdude。Buspirate 向 Arduino 发送的“rts”信号极性是错误的，但通过将 1 和 0 互换就可以修复。从那以后，你必须选择“arduino”作为编程器，而不是“stk500v1”。

```
static int arduino_open(PROGRAMMER * pgm, char * port)
{
    fprintf(stderr, "arduino_open...\n");
    strcpy(pgm->port, port);
    serial_open(port, pgm->baudrate? pgm->baudrate: 115200, &pgm->fd);

  /* Clear DTR and RTS to unload the RESET capacitor
   * (for example in Arduino) */
    serial_set_dtr_rts(&pgm->fd, 1);
    usleep(50*1000);
  /* Set DTR and RTS back to high */
    serial_set_dtr_rts(&pgm->fd, 0);
    usleep(50*1000);

  /*
   * drain any extraneous input
   */
    stk500_drain(pgm, 0);

    if (stk500_getsync(pgm) < 0)
    return -1;

    return 0;
}
```

_注意：在“boards.txt”文件中更改 Arduino IDE 使用的编程器类型。_

来源：buspirate-avr-programming [[2]](http://hintshop.ludvig.co.nz/show/buspirate-avr-programming/)，Bus_Pirate_AVR_Programming [[3]](http://dangerousprototypes.com/docs/Bus_Pirate_AVR_Programming)，Optiboot [[4]](http://code.google.com/p/optiboot/)

## Rainbowdunio 固件

<big>Neorainbowduino 固件</big>

这个固件包包含两个固件（一个用于 Arduino，一个用于 Rainbowduino）以及一个 Processing 库。你可以通过串行线从任意应用程序向 Arduino 发送数据——Arduino 然后将图像发送到对应的 Rainbowduino 设备。我创建了一个易于使用的 Processing 库用于入门。

来源：[http://code.google.com/p/neorainbowduino/](http://code.google.com/p/neorainbowduino/)

**特性：**

* 支持 I2C 的固件（支持多个 Rainbowduino）

* Processing 库，因此你可以很容易地从 Processing 控制你的 Rainbowduino！

* 从 Processing 向 Rainbowduino 发送完整帧

* 从 Processing 向你的 RGB 点阵发送帧，每一帧大小为 8x8 像素，12 位颜色分辨率（4096 种颜色）。颜色转换由库来处理

* 优化的 Processing 库——只在需要时向 Rainbowduino 发送帧（节省约 50% 的通信量——当然这取决于你的帧）

* 修复了缓冲区交换（不再闪烁）

* 增加了 I2C 总线扫描器，如果你忘记了 Rainbowduino 的地址，可以用它来查找

支持的工作模式：I2C

<big>需求</big>

这个固件允许你使用 Processing 控制 Rainbowduino，所以很明显你需要：

* Processing 软件，从 [http://processing.org/](http://processing.org/) 获取

<big>Arduino IDE 补丁</big>

因为 neorainbowduino 固件通过 I2C 发送完整帧（92 字节），我们需要为 Arduino 修改 I2C 缓冲区大小（以优化传输速度）。我希望 Arduino 在不久的将来能支持可变缓冲区大小。在打补丁之前，请确保你的 **Arduino IDE 已关闭**！

**需要打补丁的文件：**Java/libraries/Wire/utility/twi.h

**原因：**将 I2C 速度从 100kHz 提升到 400kHz，将 I2C 缓冲区大小从 32 字节增加到 98 字节

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

x

**需要打补丁的文件：**Java/libraries/Wire/Wire.h

**原因：**将串口缓冲区大小从 32 字节增加到 98 字节

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

<big>向 Rainbowduino 上传固件</big>

上传固件（参见“上传固件”），你需要的固件文件是 **rainbowduinoFw/Rainbow_V2_71/Rainbow_V2_71.pde**。

**注意：**此固件使用 I2C 协议进行通信——每个 Rainbowduino 都需要一个唯一的 I2C 地址。可以通过编辑 Rainbowduino.h 文件（`#define I2C_DEVICE_ADDRESS 0x06`）来配置地址。所以如果你将此固件上传到多个 Rainbowduino 上，别忘了更改地址！

<big>向 Arduino 上传固件</big>

断开 Rainbowduino 和 Arduino 之间的 RX/TX 线。将 Arduino 固件 **arduinoFw/neoLed/neoLed.pde** 上传到 Arduino。

<big>与 Rainbowduino 交互</big>

本章将向你展示一种**与 Rainbowduino 通信的简单方式**。你需要一个 Arduino（作为串口到 I2C 网关工作）以及一个 I2C 地址为 0x06 的 Rainbowduino。

Rainbowduino 与 Arduino 之间的连接应如下所示：
![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-neorainbow.png)

我们使用外部电源，不过你也可以使用来自 Arduino 的 5V。

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

安装 Processing 软件之后，你需要安装 neorainbowduino 库。你可以在 **processingLib\distribution\neorainbowduino-x.y\download** 目录中找到 Processing 库。将 zip 文件解压到你的 Processing 主目录（其中有一个 README.TXT 文件，里面有关于如何安装的详细说明）。

当你启动 Processing 时，你应该能够导入 neorainbowduino 库：

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-processing-lib.png)

**简单示例**

下面是一个非常简单的 Processing 草图，用来向 Rainbowduino 发送一些随机矩形。

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

    //initialize rainbowduino
    List<Integer> list = new ArrayList<Integer>();
    list.add(6);         //use rainbowduino with slave id 6
    try {
        r = new Rainbowduino(this, list);
        System.out.println("ping: "+r.ping());
    } catch (Exception e) {
        println("FAILED to open serial port!!");
        e.printStackTrace();
    }

    smooth();
    noStroke();
}

void draw() {
    //draw some simple stuff on screen
    color c1 = color(128+(int)random(64), 128, (int)random(255));
    fill(c1);

    int size = 80+(int)random(80);
    int x = (int)random(SIZE);
    int y = (int)random(SIZE);
    rect(x, y, size, size);<br>
    //send PApplet to the Rainbowduino lib - and send it to slave id 6
    r.sendRgbFrame((byte)6, this);
}
```

待办：添加一些截图

**图像缩放的工作原理**

图像将使用面积平均滤波器进行缩放。因此，重要的是要知道图像应该正确对齐。对齐意味着，当图像可以被 8 整除时，结果看起来很好。下面是一个好的和不好的示例：

|良好示例（已对齐）|不良示例（未对齐）
|---|---|
|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-good-src.png)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-bad-src.png)
| ![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-good-dst.png)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-bad-dst.png)

## mtXcontrol 固件

来源：[http://www.rngtng.com/mtxcontrol/](http://www.rngtng.com/mtxcontrol/)

**特性：**

* mtXcontrol 是一个用 Processing 编写的编辑器，用于轻松为多个包含多色 LED 点阵的输出设备创建图像序列。

支持的工作模式：？？？

## 固件 3

来源：[http://code.google.com/p/rainbowduino-firmware/](http://code.google.com/p/rainbowduino-firmware/)

**特性：**

* 与刷新率同步的双缓冲

* 4 个辅助缓冲区

* 高级指令集

* 多个受控硬件

* I2C 通信协议

* 在 Eeprom 中永久存储数据

支持的工作模式：I2C

## RainbowDashboard

来源：[http://code.google.com/p/rainbowdash/](http://code.google.com/p/rainbowdash/)

**特性：**

* 简洁、易维护的代码库。

* 与标准固件兼容。

* 支持 UART 模式（不需要 Arduino 主机——可直接与 Rainbowduino 通信）。

* 双缓冲图形操作。

* 软件实时时钟。

* 由 Rainbowduino 自身驱动的动画。

* 完整的 Windows ANSI（CP1252）字符集。

* 高级命令集。

支持的工作模式：UART

可以很容易地改为使用 I2C；只需要修改一个文件（RainbowDash.pde）。

## rainbowduino-rs

> **注意：**`rainbowduino-rs` 是由 [jecaro](https://github.com/jecaro) 为 Rainbowduino v2.0 创建的一个独立的、社区开发的固件项目。它并非由 Seeed Studio 官方维护或支持。用户在烧录固件前应确认硬件兼容性，并自行承担使用风险。

![Plasma on a 16x16 square of four boards](https://raw.githubusercontent.com/jecaro/rainbowduino-rs/284b365f7b7f1e9db90c1e7e6695163262a58217/plasma.webp)

来源：[https://github.com/jecaro/rainbowduino-rs](https://github.com/jecaro/rainbowduino-rs)

**特性：**

* 使用 Rust 编写的固件

* 通过 I2C 接收完整帧缓冲区并持续显示

* 每种颜色 16 级亮度（4 位）

* 主控库可以将多个串联的板子作为一个显示屏来驱动，以任意排列方式（例如 32x8 灯带或 16x16 方阵，板子可以倒置）

* 适用于 Arduino Uno 的示例主控固件

支持的工作模式：I2C

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

**PORTB** 映射到 Arduino 数字引脚 8 到 13。两个高位（6 和 7）映射到晶振引脚，不能使用。

**PORTC** 映射到 Arduino 模拟引脚 0 到 5。引脚 6 和 7 只能在 Arduino Mini 上访问。

**PORTD** 映射到 Arduino 数字引脚 0 到 7。

<big>恒流 LED 驱动器</big>

该驱动器使用 MBI5168。MBI5168 是一个 8 位[移位寄存器](https://en.wikipedia.org/wiki/Shift_register)。它将串行数据转换为并行数据。所有 3 个 MBI5168 共享 LE、CLK 和 OE 输入。

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Mbi-schema.png)

<table>
<tr>
<th> Name</th>
<th> Desc</th>
</tr>
<tr>
<td width="50px">OE</td>
<td width="950px">输出使能，当为（有效）低电平时，输出驱动器被使能；当为高电平时，所有输出驱动器关闭（熄灭）。</td>
</tr>
<tr>
<td>LE</td>
<td>数据选通信号输入端，当 LE 为高电平时，串行数据被传输到相应的锁存器。当 LE 变为低电平时，数据被锁存。</td>
</tr>
<tr>
<td>SDI</td>
<td>移位寄存器的串行数据输入。</td>
</tr>
<tr>
<td>SDO</td>
<td>到下一个驱动 IC 的 SDI 的串行数据输出。</td>
</tr>
<tr>
<td>R-EXT</td>
<td>用于连接外部电阻的输入端子，用于设置所有输出通道的输出电流。</td>
</tr>
<tr>
<td>CLK</td>
<td>用于在上升沿移位数据的时钟输入端子</td>
</tr>
</table>

<big>Super Source Driver</big>

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-schema-M5456.png)

<big>移出数据</big>

要在 LED 点阵上显示一整帧，Rainbowduino 中断方法需要被调用 128 次。有 8 行和 16 个亮度级别。每次调用 displayNextLine() 方法时，一行会按当前亮度级别被更新。所有 8 行更新完成后，亮度级别会更新。这就是为什么该函数需要 128 个周期，才能在 LED 点阵上填充完整的一帧。

下面你可以看到 LED 点阵在 32、64、96 和 128 个周期后的显示效果。你会注意到亮度是如何逐渐增加的。
![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-fw.1.png)

<big>支持超过 4096 种颜色（12bit）</big>

原厂固件（以及大多数第三方固件）支持 12bit 颜色分辨率。可以将其提高：

<table>
<tr>
<th> Color Resolution</th>
<th> Payload</th>
<th> Brightness Level</th>
</tr>
<tr>
<td width="250px">12 bit（每种颜色 4bit），4096 种颜色</td>
<td width="250px">96 字节（12bit*64=768bit）</td>
<td>16</td>
</tr>
<tr>
<td>15 bit（每种颜色 5bit），32768 种颜色</td>
<td>120 字节（15bit*64=960bit）</td>
<td>32</td>
</tr>
</table>

每种颜色使用 4bit 的好处在于数据存储，一个字节包含 2 个颜色值——因此很容易从字节缓冲区中获取颜色。每种颜色使用 5bit 则需要更多的 CPU 运算能力或更多的缓冲区空间（使用 2 个字节存储 3 个颜色值——每种颜色浪费 1bit）。

为了实现 15 bit 颜色分辨率，固件需要做两处修改：

* 循环 32 个亮度级别而不是 16 个

* 修改移出数据函数

## 资源

---

* [一个巨大的 DIY LED 点阵](http://www.neophob.com/2010/11/huge-rgb-led-matrix/)

* [通用 Rainbowduino 信息](http://www.neophob.com/2010/07/rainbowduino-fun-aka-neorainbowduino/)

* [File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/res/RAINBOW-MBI5168_Datasheet_VA.02-English.pdf "File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf")

* [prod_documents](http://www.atmel.com/dyn/resources/prod_documents/doc2545.pdf)

* [File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/res/RAINBOW-MBI5168_Datasheet_VA.02-English.pdf "File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf")

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
