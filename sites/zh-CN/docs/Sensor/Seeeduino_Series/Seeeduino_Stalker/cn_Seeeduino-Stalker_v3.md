---
description: Seeeduino Stalker V3
title: Seeeduino Stalker V3
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino-Stalker_v3
last_update:
  date: 1/31/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeed_Stalker_v3-6.png)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeed_Stalker_v3-7.png)

Seeeduino Stalker v3.0 是一个功能丰富的 Arduino 兼容**无线传感器网络节点**，特别适用于户外**数据记录**应用。它有一个 X-Bee 载板，可与 X-Bee 模块一起使用，如 GPS Bee、Bluetooth Bee 和 Wifi Bee 等。其模块化结构和板载外设使其能够方便地定期记录带时间戳的传感器数据。Seeeduino Stalker 配备了带备用电源的 RTC、SD 卡插槽、Bee 插槽和基于太阳能的锂离子电池充电器。Seeeduino Stalker 是您所有跟踪、监控和控制项目的理想选择。

**注意：** Seeeduino Stalker v3.0 是此板的最新版本。请查看[这里](https://seeeddoc.github.io/Seeeduino_Stalker/#Comparison_between_various_versions_of_Seeeduino_Stalker)了解与此板旧版本的比较。Seeeduino Stalker V3 具有许多功能，并提供通过焊接或断开 PCB 跳线来修改功能的方法。请在编程前理解本文档并参考原理图。

<span >注意</span>我们已经更新并对 Seeeduino Stalker 进行了一些修改。我们将在本页的**硬件概述**部分稍后介绍。

### 版本跟踪

| 产品版本                                    | 发布日期      | 支持状态       | 备注  |
|-------------------------------------------|--------------|----------------|-------|
| Seeeduino Stalker v3(v3.0, 旧版本)        | 2015年10月    | 2015年10月     | 无    |
| Seeeduino Stalker v3(v3.1, 旧版本)        | 2016年7月     | 支持           | 无    |

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Seeeduino-Stalker-v3-p-1882.html)  

## 特性

* 兼容 Seeeduino（I/O 端口使用 3.3V 逻辑）。可以用 Arduino Processing 语言编程。

* 板载微控制器：**ATMega328P**

* 板载实时时钟芯片 DS1337S（CR1220 纽扣电池插槽，作为 RTC 的备用电源）

* 带 DTR 的串行接口，在独立模式下运行时可在编程期间自动复位。（编程时，需要单独购买 [UartSBee](https://seeeddoc.github.io/UartSBee/)）。

* microSD 卡插槽
* I2C 引脚排针（工作电压可选：5.0V 或 3.3V）

* Grove 接口（工作电压可选：5.0V 或 3.3V）

* XBee 模块和 ATMega328P 的复位按钮

* **Bee 系列插槽** - 2*10 引脚 2.0mm 间距（可与以下任一无线模块配合使用：**XBee**、[BluetoothBee](/cn/Bluetooth_Bee "Bluetooth Bee")、[GPSBee](https://seeeddoc.github.io/Bluetooth_Bee/) 或 [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/)。）

## 规格

<table >
<tr>
<th>参数</th>
<th>值</th>
</tr>
<tr>
<td>MCU</td>
<td>ATmega328</td>
</tr>
<tr>
<td>晶体振荡器</td>
<td>8 MHz</td>
</tr>
<tr>
<td>RTC</td>
<td>DS1337S</td>
</tr>
<tr>
<td>I/O 逻辑</td>
<td>3.3v</td>
</tr>
<tr>
<td>Arduino IDE 开发板</td>
<td>Arduino Pro or Pro Mini (**3.3v** , 8 MHz)w/ATmega328</td>
</tr>
<tr>
<td>电源供应</td>
<td>3.7v 锂聚合物电池，使用 5VDC 太阳能板为电池充电。</td>
</tr>
<tr>
<td>电源连接器</td>
<td>2 针 JST/ USB</td>
</tr>
<tr>
<td>连接性</td>
<td>I<sup>2</sup>C, UART, SPI</td>
</tr>
<tr>
<td>开路电流</td>
<td>最大 6 mA</td>
</tr>
<tr>
<td>充电电流</td>
<td>300mA</td>
</tr>
<tr>
<td>3.3v 端口最大电流</td>
<td>800mA</td>
</tr>
<tr>
<td>PCB 尺寸</td>
<td>86.74mm x 60.96mm</td>
</tr>
</table>

## 应用创意  

* 无线传感器网络（使用 **XBee** - 需单独购买）

* GPS 记录（使用 [GPSBee](https://seeeddoc.github.io/GPS_Bee_kit/) - 需单独购买）

* 能够与运行在 iPhone/Android 手机上的应用程序通信的数据采集系统（使用 [BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/) - 需单独购买）。

* RF 遥控器（使用 [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/) - 需单独购买）。

* 作为简单的独立 Arduino 兼容物理计算平台（必须单独购买 [UartSBee](https://seeeddoc.github.io/UartSBee/) 用于编程）。

## 硬件概述

<span >注意</span>我们已经更新并对 Seeeduino Stalker 进行了一些修改（从版本 v3.0 到 v3.1）。

 1. 我们添加了一个开关来选择硬件串口（通过 D0, D1）和软件串口（即虚拟串口；通过 D5, D6）。开关用蓝色矩形标记，如下所示。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.1_serial_port_switch_1200_s.jpg)

2. 对于 RTC 电路，现在只有一个电源供应（来自锂电池）。适用的锂聚合物电池型号是 CR1120。

3. 对于 RTC 电路，我们添加了两个拨动开关来启用两个中断（RTC 的 INT A 和 INT B 对应 MCU 的 INT0 和 INT1）到 MCU。两个中断都用于从睡眠模式激活 MCU。在想要发送中断之前，您需要将这些开关拨到 **ON**。

4. 当 MCU 处于睡眠模式时，您可以通过 D9 引脚发送信号来控制（启用或禁用）Bee 连接器和所有 3.3 V 或 5V VCC 引脚的电源输入。
5. 在睡眠模式下（对于所有模块），工作电流将低至 100 μA。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeed_Stalker_v3.png)

* **Bee 复位按钮：** 按下此按钮可复位 Bee 模块。但是，此复位按钮不会影响主板（ATmega328）的状态。

* **ATmega328 复位按钮：** 按下此按钮可复位主板。

* **ATmega328：** 主板的微控制器。晶体振荡器为 8MHz。

* **SD 卡槽：** 在 SD 卡上存储数据很方便。**有一个焊盘（P2）用于焊接，通过数字引脚 **D4** 来打开或关闭 SD 卡的电源供应**。

* **Bee 插座：** 主板可以通过 Bee 插座与其他无线模块通信。**有一个焊盘（P1）通过数字引脚 **D5** 来打开或关闭电源供应**。

* **太阳能板：** 通过太阳能板捕获阳光并转换为电力，无需 USB 线缆的约束。

* **锂聚合物电池：** 通过锂聚合物电池为主板提供电源供应；电池可以通过太阳能板充电。

* **CN3065：** 用于太阳能供电系统的锂离子电池充电器。板上还有两个指示灯，它们是位于锂聚合物电池侧的"**OK**"和"**CH**"，分别表示"**已充电**"和"**充电中**"。

* **TD6810：** 1.5MHz 800mA 同步降压稳压器，为主板提供 3.3v 电源供应。

* **RTC：** I2C 串行实时时钟 -- DS1337S。**两个可选的中断信号引脚已作为焊盘（P3 和 P4）引出。** 这些跳线焊盘可用于将 RTC /INTA 引脚连接到数字引脚 **D2**，将 RTC /INTB 连接到数字引脚 **D3**。

* **RTC 电池：** CR1220 电池，为 RTC 独立提供电源供应。

* **Grove 连接器：**  板上有两个 Grove 连接器，即 I2C 和 D7。您可以通过这些 Grove 连接器直接将 Grove 产品插到板上。

* **UartSBee 接头：** UartSBee 接头与 UartSBee v4 配合使用，您可以通过这些接头向主板上传程序。

### PCB 跳线焊盘

Seeeduino Stalker V3 的底面有许多 PCB 跳线焊盘，可选择性地改变配置/功能。下表提供了相关详细信息。

| 跳线焊盘名称 | 应用                                                                                                                                                                                                                                                                                                                                                 | 电路                                                                                                             |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| P1               | 焊接这些跳线使数字引脚 D5 能够打开或关闭 Bee 插座的电源供应                                                                                                                                                                                                                                                                       | ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pad_P1.jpg)       |
| P2               | 焊接这些跳线焊盘使数字引脚 D4 能够打开或关闭 SD 的电源供应。                                                                                                                                                                                                                                                                                  | ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pad_P2.jpg)       |
| P3               | 焊接这些跳线焊盘将 RTC /INTA 引脚连接到数字引脚 **D2(INT0)**。                                                                                                                                                                                                                                                                                             | ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pad_P3.jpg)       |
| P4               | 焊接这些跳线焊盘将 RTC /INTB 连接到数字引脚 **D3(INT1)**。                                                                                                                                                                                                                                                                                                 | ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pad_P4.jpg)       |
| P5               | 此跳线默认将 BEE_TXD 连接到数字引脚 D0（硬件 UART TXD）。通过切断现有的 PCB 连接并焊接到相邻焊盘，BEE_TXD 可以连接到数字引脚 **D7** 用于软件串口。**注意**：存在已知的硬件错误。请阅读[这里](https://seeeddoc.github.io/Seeeduino-Stalker_v3/#Known_Issue)了解解决方法。 | ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pads_P5andP6.jpg) |
| P6               | 此跳线默认将 BEE_RXD 连接到数字引脚 D0（硬件 UART RXD）。通过切断现有的 PCB 连接并焊接到相邻焊盘，BEE_RXD 可以连接到数字引脚 **D6** 用于软件串口。                                                                                                                                              | ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pads_P5andP6.jpg) |

除了这些之外，还有其他用于 WIRELESS_PROGRAMMING、RSSI_STATUS 和 CH_STATUS 的跳线焊盘。这些默认是连接的，如果您想修改任何功能，请参考原理图。

## 入门指南

如果您是"物理计算"世界的新手，并且 **Seeeduino Stalker v3.0** 是您想要开始使用的第一个物理计算平台，那么我们建议您从 [Seeeduino](https://seeeddoc.github.io/Seeeduino_v4.0/) 开始。

以下步骤将帮助您组装硬件和软件资源，让您开始使用 **Seeeduino Stalker v3.0**。

#### 步骤 1. 获取硬件

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeed_Stalker_v3-1.png)

上图显示了 Seeeduino Stalker v3 与 PC 通信所需的硬件和组件。Stalker 没有 USB 转串口功能。因此，**UartSBee** 对于通过 PC 编程 Stalker 是必需的。其他 USB 转串口转换器板可以用来替代 UartSBee v4。

**注意：UartSBee v4 需要单独购买**。

#### 步骤 2：安装驱动程序并连接硬件

1. [UartSBee](https://seeeddoc.github.io/UartSBee/) 就像物理计算世界的多功能瑞士军刀。[这里](https://seeeddoc.github.io/UartSBee/) 有针对 Windows 和 GNU/Linux 用户使用 UartSBee 的非常详细的程序。在我们的情况下，它将执行三个功能：
    * 编程 Seeeduino Stalker。
    * 与 Seeeduino Stalker 通信。
    * 为 Seeeduino Stalker（包括连接到它的任何外设）提供电源（来自 PC 的 USB 电源）。

2. UartSBee 有一个板载电压调节器和一个开关来选择目标板电压（5.0V 或 3.3V）。对于 Seeeduino Stalker，将此滑动开关设置为 5.0V。

3. 硬件的接线连接方案是 **"<font >计算机</font><font >→（Mini USB 线缆）→</font><font >UartSBee </font><font >→（扁平带状电缆）→</font><font >Seeeduino Stalker</font>"**。在将 UartSBee 连接到计算机之前，必须在 UartSBee 和 Seeeduino Stalker 之间连接跳线。**注意：TXD 和 RXD 引脚必须交叉连接，如表中所示**。
4. 将 Mini USB 线缆从 UartSBee 连接到 PC。如果您使用的是基于 Windows 的 PC，将弹出"发现新硬件"气球提示，几分钟内将安装 FT232 驱动程序。

<font >**下表显示了 Seeeduino Stalker v3 和 UartSBee v4 之间的连接。**</font>

<table >
<caption>引脚连接</caption>
<tr><th>Seeeduino Stalker v3</th><th></th><th>UartSBee v4</th></tr>
<tr><td>5V</td><td>↔</td><td>VCC</td></tr>
<tr><td><font>RXD</font></td><td>↔</td><td><font>TXD</font></td></tr>
<tr><td><font>TXD</font></td><td>↔</td><td><font>RXD</font></td></tr>
<tr><td>GND</td><td>↔</td><td>GND</td></tr>
<tr><td>DTR</td><td>↔</td><td>DTR</td></tr>
</table>

## 演示

下载并安装资源部分中提供的 DS1337 库和示例程序。DS1337 库包含由 [JeeLabs](http://jeelabs.net/projects/cafe/wiki/) 的 Jean-Claude Wippler 修改的 DateTime 类版本。

* 数据记录器演示示例程序使用 Arduino SD 库。

### 1.RTC

<font >**请注意：在使用"中断"演示时，您需要焊接一些焊盘**</font>

<table >
<caption><font>如何焊接</font></caption>
<tr><th>RTC 上的引脚</th><th>Seeeduino Stalker v3 上的焊盘</th><th>ATmega328 上的引脚</th></tr>
<tr><td>INTA</td><td>P3</td><td>digital 2</td></tr>
<tr><td>INTB</td><td>P4</td><td>digital 3</td></tr>
</table>

#### 调整日期/时间

* * *

* 将 Arduino 板设置为 `**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**`。

* 从 DS1337 库中打开 **adjust.ino** 示例

* 在示例中使用 DateTime 类对象 **dt** 设置当前日期/时间：

  * `DateTime dt(year, month, date, hour, min, sec,week-day(starts from 0 and goes to 6));`

    * **例如：** `DateTime dt(2015, 10, 1, 11, 43, 0, 4);`

* 编译并上传到 **Seeeduino-Stalker v3**

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3_adjust.png)

#### 获取当前日期/时间

* * *

* 将 Arduino 板设置为 `**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**`。

* 从 DS1337 库中打开 **now.ino** 示例

* 使用 ` RTC.now() ` 函数从 DS1337 读取当前日期/时间。

  * **例如：`DateTime now = RTC.now();`**

* 编译并上传到 **Seeeduino-Stalker v3**

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3_now.png)

#### DS1337 中断示例

* * *

此示例演示了从 DS1337 <span >INT</span> 输出检测中断。此功能对于数据记录器功能很有用，其中 MCU 在不使用时进入睡眠模式，DS1337 <span >INT</span> 定期唤醒 CPU。这延长了电池电量。完整的操作在代码中有文档说明。

* 焊接 P3 跳线。

  * 这将 DS1337 中断输出引脚连接到 ATmega328 INT0 引脚。

* 将 Arduino 板设置为 `**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**`。

* 从 DS1337 库中打开 **interrupts.ino** 示例

* 编译并上传到 **Seeeduino-Stalker v3**

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3_interrupt.png)

#### 数据记录器示例

* * *

Seeeduino Stalker v3.0 的主要应用是记录传感器信号（如电池电压等）的数据以及时间戳。此示例程序在不执行数据采样/记录操作时将 MCU 置于睡眠模式。完整的实现在代码中有很好的文档说明。以下部分给出了概述：

1. **StalkerV30_DataLogger_10Sec.ino**

    * 此示例程序将电池电压数据记录到由 **`RTC.enableInterrupts(_h, m, s_)`** 函数配置的 SD 卡。
    * _周期性_ 通过 h、m 和 s 提供。一旦检测到中断，下一个中断时间通过推进 h、m 和 s 值来更新。DateTime 类在这方面很有用。

* 例如：`interruptTime = DateTime(interruptTime.get() + interruptInterval);  //决定下次中断的时间`

        * 这个示例程序还会产生详细输出，即在串口终端中显示MCU内部发生的各种事件。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Stalker_v3.0_datalogger_flowchart.png)

### 读取充电状态

* * *

可以使用以下示例程序读取电池充电状态。电池可以通过将太阳能电池板插入板子或通过UartSBee进行充电。

```
void setup()
{
  Serial.begin(57600);
  analogReference(INTERNAL);
  //analogRead(6);
}

void loop()
{
  char CH_status_print[][4]=
  {
    "off","on ","ok ","err"
  };
  unsigned char CHstatus = read_charge_status();//读取充电状态
  Serial.print("charge status -->");
  Serial.println(CH_status_print[CHstatus]);
  delay(500);
}


unsigned char read_charge_status(void)
{
  unsigned char CH_Status=0;
  unsigned int ADC6=analogRead(6);
  if(ADC6>900)
  {
    CH_Status = 0;//休眠
  }
  else if(ADC6>550)
  {
    CH_Status = 1;//充电中
  }
  else if(ADC6>350)
  {
    CH_Status = 2;//完成
  }
  else
  {
    CH_Status = 3;//错误
  }
  return CH_Status;
}
```

### 读取锂聚合物电池电压

* * *

连接到Seeeduino Stalker V3的锂聚合物电池电压可以通过模拟引脚A7读取。以下示例程序演示了这一点。

```
void setup(){
    Serial.begin(57600);
    analogReference(INTERNAL);
}

void loop() {

float voltage;
int BatteryValue;

    BatteryValue = analogRead(A7);
    voltage = BatteryValue * (1.1 / 1024)* (10+2)/2;  //电压分压器

    Serial.print("Battery Voltage -> ");
    Serial.print(voltage);
    Serial.print("V   ");
    Serial.println();

    delay(500);
}
```

_参考：[analogReference](https://arduino.cc/en/Reference/AnalogReference)_

## 使用Bee模块的附加信息

下表显示了Bee插座和ATMega328 MCU之间的默认UART连接。

<table>
<caption><font>使用方法</font></caption>
<tr><th>Bee插座上的引脚</th><th>ATmega328上的引脚</th></tr>
<tr><td>BEE_TXD</td><td>数字引脚0</td></tr>
<tr><td>BEE_RXD</td><td>数字引脚1</td></tr>
</table>

此外，您还可以通过可选焊盘打开或关闭Bee模块的电源供应。

<font >操作：在Seeeduino Stalker v3的背面，您可以找到一个焊盘"P1"。焊接P1并使用以下代码切断电源供应。</font>

<pre>
digitalWrite(5,HIGH);
</pre>

## 已知问题

**受影响用户**：此问题影响那些希望使用可选功能将Bee插座连接到软件串口而不是硬件串口（默认）的用户。

**问题**：跳线P5无法通过切断默认连接并重新焊接来配置为使用软件串口（即）BEE_RXD无法通过简单地按照[P5描述](https://seeeddoc.github.io/Seeeduino-Stalker_v3/#PCB_Jumper_Pads)切断/焊接跳线来连接到PD7而不是默认的PD1。这是一个硬件错误。

**解决方法**：

1. 在顶层切断从PD1/TXD信号到R16电阻的走线，如下图所示。请使用锋利的刀片轻轻切断连接：

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/StalkerV3.0_P6Issue_1.jpg)

修改前

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/StalkerV3.0_P6Issue_Workaround.jpg)

修改后

2.现在应用<a href="/cn/Seeeduino-Stalker_v3#pcb-jumper-pads" ><span><font size={"3"}> Seeeduino-Stalker v3 </font></span></a>中提到的程序（即）切断跳线并将跳线P5的中间焊盘焊接到PD7。

## 板子布局

图片来自 EAGLE 文件

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.0_Board.PNG)

Seeeduino_Stalker_v3.0_Board

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.0_Sceme_1.PNG)

电源

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.0_Sceme_2.PNG)

Arduino

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.0_Sceme_3.PNG)

BEE TF

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.0_Sceme_4.PNG)

RTC I2C

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/Seeeduino_Stalker_v3.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* 软件：

  * [Seeeduino Stalker V3 - DS1337 RTC 库](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/DS1337.zip)

  * [Seeeduino Stalker V3.0 - 数据记录器示例](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/StalkerV30_DataLogger_10Sec.zip)

* 设计：

  * [Seeeduino Stalker v3.0 - PDF 原理图和 EAGLE 文件](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/Seeeduino_Stalker_v3.0.zip)

  * [Seeeduino Stalker v3.0 pdf](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/Seeeduino%20Stalker%20v3.0.pdf)

* [Seeeduino Stalker v3.0 sch](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/Seeeduino%20Stalker%20v3.0.sch)

* 数据手册：

  * [DS1337S 数据手册](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/DS1337-DS1337C-99519.pdf)

  * [CN3065 数据手册](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/CN3065.pdf)
  * [CN3065 数据手册（英文）](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/DSE-CN3065.pdf)

  * [TD6810 数据手册](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/TD6810.pdf)

* 其他：

  * [通过 AVRISP MKII 的引导程序](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/ATmegaBOOT_168_atmega328_pro_8MHz.hex.zip)

  * [通过离线 AVRISP 的完整文件](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/Stalker_V2_Final.Prjt.zip)

## 技术支持和产品讨论

   <br />
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>