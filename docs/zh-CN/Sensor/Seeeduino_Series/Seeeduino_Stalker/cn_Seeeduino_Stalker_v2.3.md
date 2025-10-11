---
description: Seeeduino Stalker v2.3
title: Seeeduino Stalker v2.3
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino_Stalker_v2.3
last_update:
  date: 1/31/2023
  author: shuxu hu
---


![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeduino_Stalker_v2.2.jpg)

Seeeduino Stalker 是一个功能丰富的 Arduino 兼容**无线传感器网络节点**。其模块化结构和板载外设使其能够方便地定期记录带时间戳的传感器数据。Seeeduino Stalker 配备了温度传感器、带备用电源的 RTC、SD 卡插槽、Bee 插槽和太阳能锂聚合物离子电池充电器。Seeeduino Stalker 是您所有跟踪、监控和控制项目的理想选择。
版本 2.3 与版本 2.2 几乎相同，我们升级它的原因是通过在 LI_BAT 和 USB5V 之间添加整流二极管来修复错误。

型号：[ARD104D2P](https://www.seeedstudio.com/depot/seeeduino-stalker-v2-p-727.html?cPath=80)

**以下是之前的版本：**

- [Seeeduino Stalker v1.0](https://seeeddoc.github.io/Seeeduino_Stalker_v1.0/)
- **Seeeduino Stalker v2.0b**：具有更多功能的新改进版本的测试版

  - [Seeeduino Stalker v2.0](https://seeeddoc.github.io/Seeeduino_Stalker_v2.0/)：最终非测试版（底部丝印的小改进）

  - [Seeeduino Stalker v2.1](https://seeeddoc.github.io/Seeeduino_Stalker_v2.1/)：RTC DS3231、CR2032 电池座、新 SD 卡插槽

  - [Seeeduino_Stalker_v2.2](https://seeeddoc.github.io/Seeeduino_Stalker_v2.2/)：更改电池充电状态读取方法

  - [Seeeduino_Stalker_v2.3](https://seeeddoc.github.io/Seeeduino_Stalker_v2.3/)：在 LI_BAT 和 USB5V 之间添加整流二极管。

**Seeeduino Stalker 在以下领域是一个很好的工具：**

- 无线传感器网络（使用 **XBee** - 需单独购买）

- GPS 记录（使用 **GPSBee** - 需单独购买）

- 能够与运行在 iPhone/Android 手机/诺基亚手机上的应用程序通信的数据采集系统（使用 [BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/) - 需单独购买）

- RF 遥控（使用 [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/) - 需单独购买）

- 作为简单的独立 Arduino 兼容物理计算平台（必须单独购买 [UartSBee](https://seeeddoc.github.io/UartSBee/) 用于编程）

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Stalker_v2.1_and_the_Bees.jpg)

**注意：**

- 请注意 [UartSBee](https://seeeddoc.github.io/UartSBee/) 不能插入 Seeeduino Stalker 上的 Bee 系列插槽。[UartSBee](https://seeeddoc.github.io/UartSBee/) 用于将其他 Bee 模块（如上图所示）连接到计算机，本身不能插入为这些其他 Bee 模块设计的插槽。UartSBee 和 Seeeduino Stalker 上都有一个单独的 5 针排针用于相互连接。这个排针包括：VCC（为 Stalker 供电）、TXD、RXD、DTR（用于控制 Stalker 的复位信号）和 GND。

- 产品不带绝缘外壳。请注意静电防护，特别是在干燥（低湿度）天气中。

- 在使用基于 Windows 的开发机器时，请禁用蓝牙串口以防止 Arduino IDE 冻结。

##   规格   ##

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Stalker_v2.2_diagram.jpg)

- 微控制器：ATmega328P

- 板载晶振：8 MHz

- PCB 尺寸：92.71mm X 60.96mm

- 指示灯：复位、电源、PB5 上的 LED（Arduino 引脚 13）

- 电源供应：3.7-5V

- 电源连接器：2.0mm JST/ USB

- I/O 数量：20

- ADC 输入：专用 4 通道（ADC0~ADC3，10 位分辨率）

- 连接性：I2C、UART、SPI

- RTC 精度：0°C 到 +40°C 时 ±2ppm / -40°C 到 +85°C 时 ±3.5ppm

- DS3231 温度传感器精度：±3°C

- 电池 JST 输入电压：3.5-4.2V

- 太阳能 JST 输入电压：4.6-6V

- 全局电流消耗：参见 [注释](https://wiki.seeedstudio.com/cn/Seeeduino_Stalker_v2.3)

- UART 波特率（编程时）：115200 bps

##   演示   ##

###   入门指南   ###

以下步骤将帮助您组装硬件和软件资源，让您开始使用 Seeeduino Stalker

####   步骤 1：获取硬件   ####

运行您的第一个程序需要以下硬件。

|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeduino_Stalker_v2.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Uartsb40.jpg)|
|---|---|
|**Seeeduino Stalker v2.e**|**UartsBee v4.0**    编程 Seeeduino Stalker 所需。[在此购买](https://www.seeedstudio.com/depot/uartsbee-v31-p-688.html)|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Miniusb.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/JumperWire100n.jpg)|
|**Mini USB 线缆**      您可能已经有一根了，如果没有，可以在[这里](https://www.seeedstudio.com/depot/mini-usb-cable-110cm-p-252.html)购买一根。我们将使用它将 UartsBee 连接到您计算机上的一个 USB 端口。|**1 针双母头跳线**  连接 UartsBee 到 Seeeduino Stalker 所需。您的工作台上可能已经有几根了。如果没有，您可以在[这里](https://www.seeedstudio.com/depot/1-pin-dualfemale-jumper-wire-100mm-50pcs-pack-p-260.html?cPath=175_187)购买彩色的。|

####   步骤 2：安装驱动程序并连接硬件   ####

1.[UartSBee](https://seeeddoc.github.io/UartSBee/) 就像物理计算世界的多功能瑞士军刀。这里有一个非常详细的程序，供 Windows 和 GNU/Linux 用户使用 UartSBee [这里](https://seeeddoc.github.io/UartSBee/)。在我们的情况下，它将执行三个功能：

- 允许我们对 Seeeduino Stalker 进行编程。

- 允许我们与 Seeeduino Stalker 通信。

- 为 Seeeduino Stalker（包括连接到它的任何外设）提供电源（来自您计算机的 USB 电源）。

2.UartSBee 的前两个功能（编程和通信）是通过其上的一个名为 FT232RL 的集成电路实现的。在 FT232RL 可以用于这些目的之前，必须在您的 Windows/Ubuntu PC 上安装其驱动程序（来自 FT232RL 制造商的某些免费可用程序）。因此，在继续之前，请从[这里](https://www.ftdichip.com/Drivers/VCP.htm)下载驱动程序安装文件并将其安装在您的 Windows PC 上。（OS X 驱动程序也可用，OS X 也需要）

3.UartSBee 有一个板载电压调节器和一个开关，允许您选择要向目标电路板提供什么电压（5.0V 或 3.3V）。在我们的情况下，目标电路板是 Seeeduino Stalker，因此您需要将此滑动开关设置为 5.0 伏

4.我们硬件的接线连接方案是"**计算机**→（Mini USB 线缆）→**UartSBee** →（扁平带状电缆）→**Seeeduino Stalker**"。在将 UartSBee 连接到计算机之前，必须在 UartSBee 和 Seeeduino Stalker 之间连接跳线。参考下面的照片，确保信号线如表中所示对齐（**注意：TXD 和 RXD 引脚必须如表中所示交叉连接**）。

5.接下来将 Mini USB 线缆从 UartSBee 连接到您的计算机。如果您使用的是基于 Windows 的 PC，"发现新硬件"气球将弹出，在几分钟内 FT232RL（即 UartSBee）的驱动程序将被安装。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_Uartsbee_3.1_Connection.jpg)

 跳线连接


 |Seeeduino Stalker||UartSBee|
 |---|---|---|
 |USB5V| ↔  |VCC|
|RXD  |  ↔  |TXD|
| TXD  |  ↔  |RXD|
| GND| ↔  |GND|
 |DTR| ↔  |DTR|

###   连接说明   ###

- **Bee 系列插座** - 2*10 针 2.0mm 间距（将与任何一个**无线模块**配合使用 - 一次一个 - ：**XBee**、[BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/)、**GPSBee** 或 **RFBee**。）与这些模块的通信通过 UART 完成。

- **串行接口** – 为了节省空间和降低成本，默认情况下不提供 USB&lt;-&gt;串行连接。您可以使用基于 FT232 的 [UartSBee](https://seeeddoc.github.io/UartSBee/) 或其他 USB 转串行适配器板来进行编程或与 PC 通信。

- **用户 LED** – 板上提供了一个 LED，供您在应用中根据需要使用。

- **I2C 接口**：板载 I2C 电平转换器 IC 在 3.3V 和 5V 设备之间提供电压转换。这允许您在 Stalker 以 3.3 伏运行时将 I2C 设备连接到 Stalker。I2C 设备工作电压取决于外部电压（LIPO_BAT 和 USB5V）。

- **Grove 接口** – 添加使用 D7/D8 的 Grove 接口。这允许您在 Stalker 以 3.3 伏运行时将 3.3V 和 5.0V Grove 模块连接到 Stalker。Grove 模块工作电压取决于外部电压（LIPO_BAT 和 USB5V）。

###   跳线和连接器   ###

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Stalker_v2.3_bottom.jpg)

####   microSD 卡（TransFlash 卡）相关   ####

- **CS_TF**（跳线类型：**旧式桥接器 - 2路**，位置：**底部**，出厂状态：**SS和PB2通过细导线连接**）
此跳线是由三个焊盘组成的双路跳线：PB1、SS和PB2。SS是microSD卡的片选信号。默认情况下，SS通过细导线连接到PB2 - 微控制器的数字引脚10（PB2）。如果您想将microSD卡的片选信号连接到数字引脚9（PB1），只需切断PB2和SS之间的导线，并在SS和PB1之间放置焊料球。

- **POWER_TF**（跳线类型：**焊接桥**，位置：**底部**，出厂状态：**断开**）

  默认情况下，EN连接到VCC以始终为TF卡供电。如果您想用微控制器的数字引脚4（PD4）控制TF卡电源，只需在EN和PD4之间放置焊料球。相反，如果您希望TF卡始终可用并默认供电，请切断您放置的焊料。

####   Bee模块相关   ####

- **POWER_BEE**（跳线类型：**焊接桥**，位置：**底部**，出厂状态：**断开**）
默认情况下，EN连接到VCC以始终为xbee供电。如果您想用微控制器的数字引脚5（PD5）控制xbee电源，只需在EN和PD5之间放置焊料球。相反，如果您希望xbee始终可用并默认供电，请切断您放置的焊料。

####   Bee模块相关 - 仅限XBee相关   ####

- **WIRELESS_PROGRAMMING**（跳线类型：**焊接桥**，位置：**底部**，出厂状态：**通过细导线连接**）
您可以使用Digi的XBee模块无线编程Seeeduino Stalker上的ATmega328P。必须在您的Seeeduino Stalker上配置并安装一个XBee模块，另一个XBee模块必须通过UartSBee连接到您的笔记本电脑。Seeeduino Stalker上的引脚DIO3将用于控制ATmega328P的复位引脚。此跳线允许您启用或禁用（默认：启用）XBee模块的DIO3引脚对ATmega328P复位引脚的控制。如果您不希望DIO3引脚控制ATmega328P的复位引脚，可以切断此跳线焊盘之间的导线。Lady Ada有一个很好的[教程](http://www.ladyada.net/make/xbee/arduino.html)，介绍如何使用XBee远程编程基于Arduino的产品。（注意：XBee - Stalker上的和连接到PC的都必须在使用前使用X-CTU软件预先配置一次。）

- **RSSI_STATUS**（跳线类型：**焊接桥**，位置：**顶部**，出厂状态：**通过细导线连接**）
PCB顶部的红色LED连接到XBee模块的RSSI（接收信号强度指示器）引脚。XBee在此引脚上输出PWM信号，该信号与接收最后一个数据包时RF链路的质量成正比。当此PWM信号施加到LED时，会根据RF链路的质量改变其亮度 - 链路越好，LED越亮。由于此LED会消耗电力，您可以切断此跳线焊盘之间的导线以在野外节省电池电力。RSSI值也可以通过UART使用DB命令获得（以-dBm为单位测量）。（注意：DB值仅指示最后一跳的接收信号强度。如果传输跨越多个跳，DB值不能指示整个传输路径或最差链路的质量 - 它仅指示最后一个链路的质量，应谨慎使用。）

####   用户LED相关   ####

- **D13_LED**（跳线类型：**焊接桥**，位置：**底部**，出厂状态：**通过细导线连接**）
PCB顶部的红色LED连接到微控制器的数字引脚13（PB5）。LED可供您在程序中用于任何您想要的目的。由于此LED会消耗电力，您可以切断此跳线焊盘之间的导线以在野外节省电池电力，并将数字引脚13用于其他目的，如控制扩展板。

####   电池相关   ####

- **CH_STATUS**（跳线类型：**焊接桥**，位置：**顶部**，出厂状态：**通过细导线连接**）
Seeeduino Stalker板上的两个LED指示锂聚合物电池的充电状态。红色SMD LED连接到锂电池充电器IC（CN3083或CN3063）的CHRG（或CH）引脚，当发光时，表示电池的充电周期处于活动状态。绿色SMD LED连接到锂电池充电器IC（CN3083或CN3063）的DONE（或OK）引脚，当发光时，表示电池现在已完全充电。当在野外操作Seeeduino Stalker时，您可以切断连接CH_STATUS焊盘的导线，以断开这些LED与C_VIN的连接，从而节省原本会消耗在点亮这些LED上的电力。

####   实时时钟（RTC）相关   ####

- **INT**（跳线类型：**焊接桥**，位置：**底部**，出厂状态：**断开**）
闭合此跳线以允许实时时钟（RTC）在指定时间唤醒ATmega328P。此跳线将RTC芯片（DS3231）的INT连接到ATmega328P的PD2（INT0）。

- **RST/32K**（跳线类型：**焊接桥 - 2路**，位置：**底部**，出厂状态：**断开**）
如果焊接桥连接到RST，当PD3（数字引脚3）变为低电平时，RTC将被复位。
32K是RTC在PD3（数字引脚3 / INT1）上的32kHz输出。

##   编程   ##

您必须将板类型设置为 **Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**

###   RTC 和温度   ###

- 下载并安装资源部分提供的 DS3231 库和示例代码。DS3231 库包含由 **JeeLabs** 的 Jean-Claude Wippler 修改的 DateTime 类版本
- 演示示例使用 fat16lib Arduino 库来访问 SD 卡。请从 **fat16lib 的项目页面** 安装 FAT16 库。

####   调整日期/时间   ####

- 在 Arduino IDE 的 Tools-->Board 菜单中将 Arduino 板设置为 `Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328`。

- 从 DS3231 库中打开 adjust.pde 示例

- 在示例中使用 DateTime 类对象 dt 设置当前日期/时间：

- `DateTime dt(year, month, date, hour, min, sec,week-day(starts from 0 and goes to 6)); `
    例如：`DateTime dt(2011, 11, 10, 15, 18, 0, 5);`
- `DateTime dt(__DATE__, __TIME__); // 使用编译时间来设置时钟`

- 编译并上传到 Stalker。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_adjust.png)


####   获取当前日期/时间   ####


- 在 Arduino IDE 的 Tools-->Board 菜单中将 Arduino 板设置为 `Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328`。

- 从 DS3231 库中打开 now.pde 示例

- 使用 `RTC.now() ` 函数从 DS3231 读取当前日期/时间。

    例如：`DateTime now = RTC.now();`

- 编译并上传到 Stalker。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_now.png)


####   DS3231 读取温度   ####

---

- 在 Arduino IDE 的 Tools-->Board 菜单中将 Arduino 板设置为 `Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328`。

- 从 DS3231 库中打开 temperature.pde 示例

- 使用 `RTC.getTemperature() ` 函数从 DS3231 读取当前摄氏度温度。

- DS3231 的温度寄存器通常只在 64 秒内更新一次。

- 因此，必须使用 `RTC.convertTemperature()` 启动强制转换
- 例如：

```
RTC.convertTemperature();             //将当前温度转换到寄存器中
Serial.print(RTC.getTemperature());   //读取寄存器并显示温度
Serial.println("deg C");

```

- 编译并上传到 Stalker。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_temp.png)


####   DS3231 中断   ####

此示例演示了从 DS3231 INT 输出检测中断。此功能对于数据记录器功能很有用，其中 MCU 在不使用时进入睡眠模式，DS3231 INT 定期唤醒 CPU。这延长了电池电量。完整的操作在代码中有文档说明。

- 焊接 INT 跳线的 PD2 和 INT 引脚。

- 这将 DS3231 中断输出引脚连接到 ATmega328 INT0 引脚。

- 在 Arduino IDE 的 Tools-->Board 菜单中将 Arduino 板设置为 `Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328`。

- 从 DS3231 库中打开 interrupts.pde 示例

- 编译并上传到 Stalker。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_interrupts.png)

###   读取充电状态   ###

将电池和太阳能板连接到 Stalker，电池可以通过太阳能板和 USB5v 充电。充电电池的最低输入电压为 4.4v，所以如果您使用太阳能板，应该将其放在有足够阳光的露天场所。之后，将以下代码上传到 Stalker 以读取 Stalker 的充电状态。

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
    CH_Status = 0;//睡眠
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

###   读取电池电压   ###

如果您想知道模拟引脚 7 上的电池电压，这是一个简单的示例。

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

###   使用电池库   ###

有一个可用于电池电压、百分比等的库。

```
/*
Battery.cpp (Version 0.3) - Seeeduino Stalker V2.3 电池信息库
由 Stefan 创建，2013年3月。

注意：
 - 读取锂电池电压 -> 模拟引脚 7
 - 当前容量（百分比）
 - 充电状态 -> 模拟引脚 6
 - 电池指示闪烁 LED
*/

#include <Battery.h>

int LEDPin=13;
int flashesforfull=10; // 1 次闪烁 =10%
int chcnt=0;

Battery battery;

void setup(){
  Serial.begin(57600);
  Serial.println("Battery Library for Seeeduino Stalker V2.3");
}

void loop(){
  battery.update();
  battery.ledflashStatus(LEDPin,flashesforfull);
  float voltage = battery.getVoltage();
  int percentage = battery.getPercentage();
  char* CS = battery.getChStatus();
  bool ch = battery.isCharging();
  if(ch) chcnt++;

  Serial.print("battery: ");
  Serial.print(voltage);
  Serial.print("V  -> ");
  Serial.print(percentage);
  Serial.print("%     Charge Status: ");
  Serial.print(CS);
  Serial.print("     charging counter: ");
  Serial.println(chcnt);
  delay(2000);

}
```

###   数据记录器示例   ###

Stalker的主要应用是传感器信号的数据记录，如温度记录以及时间戳。我们提供了3个示例程序以及DS3231库，演示了3种不同的实现方式。这些示例程序在不执行数据采样/记录操作时将MCU置于睡眠模式。完整的实现在代码中有很好的文档说明。以下部分给出概述：

![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_SolarPanel.png)
Seeeduino Stalker v2.1 SolarPanel.png

1.StalkerV21_DataLogger_Periodic.pde
  - 此示例程序通过`RTC.enableInterrupts(periodicity)`函数配置，定期将温度数据记录到SD卡。
  - 周期性通过预定义常量EverySecond或EveryMinute或EveryHour提供
  - 此示例程序产生详细输出，即MCU内部发生的各种事件会显示在串行终端中。

2.StalkerV21_DataLogger_5min.pde
  - 此示例程序通过`RTC.enableInterrupts(h, m, s)`函数配置，将温度数据记录到SD卡。
  - 周期性通过h、m和s提供。一旦检测到中断，下一个中断时间通过推进h、m和s值来更新。DateTime类在此处很有用。
  - 例如：`interruptTime = DateTime(interruptTime.get() + 300); //决定下一次中断的时间`
  - 此示例程序也产生详细输出，即MCU内部发生的各种事件会显示在串行终端中。

3.StalkerV21_DataLogger_15Sec_NoSerialPort.pde
  - 这与前一个示例程序类似，但数据记录间隔不同。所有串行端口相关代码都被注释掉以减少功耗。
  - 通过移除串行端口相关代码，功耗没有显著降低。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Stalker_v2.1_datalogger_flowchart.png)

#####   功耗说明   #####

以下截图显示了**Stalker**在3.3V输入连接到LIPO_BAT时的电流消耗测量。在实际应用中，LIPO_BAT连接到3.7V锂聚合物电池。因此，请对以下测量结果持保留态度！！！
在[论坛](https://forum.seeedstudio.com/viewtopic.php?f=16&amp;t=3911&amp;hilit=Stalker)中有一些关于功耗的讨论。
看起来仅RTC就有110µA的待机供电电流。[这里](http://www.gammon.com.au/forum/?id=11497)有一些关于低功耗的信息。

但现在不要难过，即使你将平均电流降到1mA，你也能得到980 mAh/1 mA = 980h = **40.8**天的无充电使用时间

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_datalogger_15S_Current_Measurement.png)

- 我们看到每15秒有活动模式峰值。在活动模式下，MCU采样温度并将其存储到SD卡中。

- 睡眠模式下的电流消耗为**95.82 uA** @ 3.3V（即**316.206 uW**功耗）。请注意，在此演示中SD卡VCC仍然供电。要进一步降低睡眠模式电流，请通过重新配置POWER_TF跳线使用LDO使能引脚关闭SD卡。这也可能增加施加VCC时SD卡稳定所需的时间。

- 活动模式峰值时的电流消耗为**22.43 mA** @ 3.3V（即**74.019 mW**功耗）

- 活动模式第二峰值时的电流消耗为**3.64 mA** @ 3.3V（即**12.012 mW**功耗）

- 活动模式持续**400mS**或0.4秒。

 注意：如果您购买"microSD卡读卡器（胶囊式）"，您就不需要"Mini USB线缆"，因为前者也可以兼作

##   资源   ##

###  配件 ###

|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/StalkerEnclosure600.jpg) |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Microsdcard2gb.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Smartcable_04_LRG.jpg) |
|---|---|---|
|[Seeeduino Stalker v2.0 防水外壳](https://www.seeedstudio.com/depot/seeeduino-stalker-v2-enclosure-p-734.html?cPath=178_184) | [SanDisk 2GB microSD 卡](https://www.seeedstudio.com/depot/sandisk-microsd-card-2gb-p-546.html?cPath=178_182)|[microSD 读卡器（胶囊式）](https://www.seeedstudio.com/depot/sd-card-reading-miniusb-cable-in-a-capsule-p-575.html?cPath=190)|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Miniusbcable.jpg) |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/JumperWire100n.jpg)|
|[与 UartSBee 配合编程使用的 Mini USB 线](https://www.seeedstudio.com/depot/mini-usb-cable-100cm-p-252.html?cPath=178_179)|[单线 - 跳线](https://www.seeedstudio.com/depot/6-pin-dualfemale-jumper-wire-100mm-5-pcs-pack-p-129.html?cPath=175_187)|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Lithium-lon-polymer-batteries2A.jpg) |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Solar-panel55.jpg) |
|[锂聚合物 (LiPo) 电池](https://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&amp;search_in_description=0&amp;keyword=Lithium+Ion+polymer+Battery&amp;x=51&amp;y=12)|[通过 Stalker 为 LiPo 电池充电的太阳能板](https://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&amp;search_in_description=0&amp;keyword=solar+panel&amp;x=0&amp;y=0)|


###   元件数据手册   ###


- [DS3231 ](http://datasheets.maxim-ic.com/en/ds/DS3231.pdf) - Seeeduino Stalker v2.1 板载带数字温度传感器的实时时钟
-  [CN3063](http://www.openhacks.com/uploadsproductos/dse-cn3063.pdf) - 锂电池充电控制器（使用太阳能板充电）
- [Si2305DS](http://www.vishay.com/docs/70833/70833.pdf) - P 沟道 1.25-W, 1.8-V (G-S) MOSFET。

##   常见问题   ##

这里是 Seeeduino Stalker 常见问题，用户可以在此列出常见问题，示例如下：

1.Seeeduino Stalker 2.x 版本是否移除了用户自定义开关？

   是的，我们在 2.x 版本中移除了用户按钮

2.在 Seeeduino Stalker 1.0 版本中，微控制器可以通过 Bee 模块的中断从睡眠模式唤醒。2.0 版本是否也有相同功能？

   在之前的版本（即 1.0）中，微控制器可以通过 Bee 模块的引脚 15 在接收到 RF 数据包时被唤醒，该引脚连接到微控制器的 INT0 (PD2)。在新版本中，微控制器的 INT0 (PD2) 引脚通过跳线（[INT_RTC](https://seeeddoc.github.io/Seeeduino_Stalker_v2.0/#Real_Time_Clock_.28RTC.29_Related)）连接到 RTC 芯片的 INT 引脚，可以在预配置的时间（或周期性地）唤醒它。由于 Seeeduino Stalker 旨在用作无线传感器网络节点，这种修改在微控制器必须周期性唤醒以传输传感器读数然后再次进入睡眠的情况下会很有用。

3.Seeeduino Stalker 1.0 版本上的 I2C 引脚排针允许轻松连接外部 3.3V 和 5.0V 设备。2.x 版本是否有相同功能？

   是的，实际上我们已经改进了它 - 之前在 I2C 总线上使用 PCA9306 进行电平转换。但现在我们使用 N 沟道 MOSFET 进行转换 - 这种技术有很多优势（参考 NXP 的应用笔记 **AN97055**）。

4.CN3083 没有英文数据手册，我该怎么办？

   我们在 Seeeduino Stalker 2.1 版本（v2.1）的测试版本中使用了 CN3083。最终的 v2.0 版本将使用 CN3063。CN3083 的数据手册只有中文版本。另一方面，CN3063 有英文数据手册，已在上面附上。两个器件：CN3063 和 CN3083 在操作上非常相似。

5.我觉得上面给出的电池相关跳线的解释有点令人困惑，我需要更简单的解释。

  BAT_READ - 允许您使用微控制器内置的模数转换器通过模拟引脚 7 读取电池电压。

  CH_READ 和 CH_STATUS 不再连接到数字引脚（6 和 7），而是连接到模拟引脚 6，每个都有一个电阻，所以它们的工作方式如上面的示例所示

   CH_STATUS - 上述两个信号（CH_READ 和 OK_READ）也连接了 LED。CH_STATUS 跳线允许您禁用这些 LED 并降低功耗。

##   许可证   ##

本文档采用知识共享 [署名-相同方式共享许可证 3.0](http://creativecommons.org/licenses/by-sa/3.0/) 进行许可。源代码和库采用各种开源许可证，详情请参见源代码文件。


## Stalker v2.3 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker_v2.3_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Stalker v2.2 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker_v2.2_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


###  库文件和Eagle文件 ###
**注意：** 如果您想使用数据记录器示例代码，您应该首先从 **fat16lib** 下载并安装 Fat16lib Arduino 1.0 版本

- **[软件]** [SeeeduinoStalker_Software(Arduino_1.0).zip](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/SeeeduinoStalkerV2.1_Software-Arduino_1.0-.zip)

- **[软件]** [SeeeduinoStalker_BatteryLibrary_V0.3](https://drive.google.com/file/d/0B_woEJs7VW-hc2dBcUJfOVlDTk0/edit?usp=sharing)

- **[Eagle]**[Stalker v2.3 Eagle Files.zip](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker_v2.3_Eagle_Files.zip)

- **[PDF]**[Stalker v2.3 PCB](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker%20v2.3.pdf)

- **[PDF]**[Stalker v2.3 SCH](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker%20v2.3%20SCH.pdf)

- **[Eagle]**[Stalker v2.2 Eagle Files.zip](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker_v2.2_eagle.zip)

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