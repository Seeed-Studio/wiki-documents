---
title: Seeed Studio XIAO MG24 入门指南
description: ''
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg
slug: /xiao_mg24_getting_started
sku: 102010590,102010610,102010693,102010690,102010691,102010692
keywords:
  - XIAO
  - MG24
last_update:
  date: 10/17/2024
  author: Jason
sidebar_position: 0
createdAt: '2024-11-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/xiao_mg24_getting_started/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg" style={{width:600, height:'auto'}}/></div>
<br />

# Seeed Studio XIAO MG24(Sense) 入门指南

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO MG24</th>
   <th>Seeed Studio XIAO MG24 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop0.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 介绍

**Seeed Studio XIAO MG24** 是一款基于 Silicon Labs MG24 的迷你开发板。XIAO MG24 采用 **ARM Cortex-M33 内核**、**32 位 RISC** 架构，最高主频 78MHz，支持 DSP 指令和 FPU 浮点运算，具备强大的计算能力，并内置 **AI/ML 硬件加速器 MVP**，可高效处理 AI/机器学习算法。其次，它具有出色的射频性能，发射**功率最高可达 +19.5 dBm**，接收灵敏度**低至 -105.4 dBm**。它支持多种物联网和无线传输协议，例如 **Matter、Thread、Zigbee、Bluetooth LE 5.3、Bluetooth mesh** 等。

### 规格参数

<table>
  <tr>
    <th>产品</th>
    <td>XIAO MG24</td>
    <td><a href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html">XIAO MG24 Sense</a></td>
  </tr>
  <tr>
    <th>处理器</th>
    <td colspan="2">Silicon Labs EFR32MG24<br/>ARM Cortex-M33 @ 78MHz</td>
  </tr>
  <tr>
    <th>RAM</th>
    <td colspan="2">256kB</td>
  </tr>
  <tr>
    <th>Flash</th>
    <td colspan="2">1536KB + 4MB 板载</td>
  </tr>
  <tr>
    <th>LED</th>
    <td colspan="2">1x 用户 LED<br/>1x 电源 LED</td>
  </tr>
  <tr>
    <th>传感器</th>
    <td>-</td>
    <td>1x 板载模拟麦克风<br/>1x 板载 6 轴 IMU</td>
  </tr>
  <tr>
    <th>接口</th>
    <td colspan="2">22 个引脚（全部支持 PWM）：<br/>19x 模拟<br/>19x 数字<br/>1x I²C<br/>2x UART<br/>2x SPI</td>
  </tr>
  <tr>
    <th>按键</th>
    <td colspan="2">1x RESET 按键</td>
  </tr>
  <tr>
    <th>安全性</th>
    <td colspan="2">硬件加密加速器、真随机数发生器、ARM® TrustZone®、安全启动、安全调试解锁等。</td>
  </tr>
  <tr>
    <th>低功耗（典型值）</th>
    <td colspan="2">1.95μA</td>
  </tr>
  <tr>
    <th>正常工作（典型值）</th>
    <td colspan="2">6.71mA</td>
  </tr>
  <tr>
    <th>睡眠（典型值）</th>
    <td colspan="2">1.91mA</td>
  </tr>
  <tr>
    <th>软件兼容性</th>
    <td colspan="2">Arduino IDE</td>
  </tr>
  <tr>
    <th>支持的天线</th>
    <td colspan="2">最大 2.4GHz 陶瓷天线：4.97dBi</td>
  </tr>
  <tr>
    <th>工作温度</th>
    <td colspan="2">-20°C~70°C</td>
  </tr>
  <tr>
    <th>尺寸</th>
    <td colspan="2">21×17.8 mm</td>
  </tr>
</table>

### 特性

- **强大的 CPU**：ARM Cortex-M33 内核，最高主频 78MHz，支持 DSP 指令和 FPU 浮点运算，32 位 RISC 架构。
- **超低功耗**：接收电流 4.6mA/发射电流 5mA（0dBm），支持多种低功耗睡眠模式。
- **强大的 AI 能力**：内置 AI/ML 硬件加速器 MVP，能够高效处理 AI/机器学习算法。
- **多样的无线传输方式**：集成 2.4GHz 多协议无线收发器，支持 Matter、OpenThread、Zigbee、Bluetooth LE 5.3、Bluetooth mesh 等多种物联网协议。
- **更佳的射频性能**：出色的射频性能，发射功率最高可达 +19.5 dBm，接收灵敏度低至 -105.4 dBm（250kbps DSSS）。
- **强大的安全性**：具备 Secure Vault 的强大安全特性，包括安全启动、加密、随机数生成、防篡改、安全调试等。
- **超小尺寸**：21 x 17.8mm。
- **丰富的片上资源**：最大 1536KB Flash 和 256KB RAM，存储空间充足。
- **丰富的接口**：集成 12 位 1Msps ADC、温度传感器、模拟比较器、DCDC 等丰富外设，并提供多达 22 个引脚、2 个 USART、2 个低功耗 UART、1 个 IIC 等接口。

## 硬件概览

<table align="center">
 <tr>
     <th>XIAO MG24 Sense 示意图</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24sense_pinlist.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
   <tr>
     <th>XIAO MG24 示意图</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24_pinlist.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO MG24/ XIAO MG24(Sense) 引脚列表</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/modifyMG24.png" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

:::tip
  这两款开发板的区别在于：MG24 Sense 带有麦克风传感器和六轴加速度传感器，而 MG24 不带这些传感器。
:::

- 5V - 这是来自 USB 端口的 5V 输出。你也可以将其作为电压输入使用，但必须在外部电源和该引脚之间串联某种二极管（肖特基、信号或功率二极管），二极管阳极接电池，阴极接 5V 引脚。
- 3V3 - 这是板载稳压器的稳压输出。
- GND - 电源/数据/信号地

## **引脚映射**
| XIAO 引脚               | 功能             | 芯片引脚 | 复用功能             | 描述                                   |
| :---------------------: | :-------------: | :-------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS             |           |                    | 电源输入/输出                         |
| GND                     |                  |           |                    |                                      |
| 3V3                     | 3V3_OUT          |           |                    | 电源输出                             |
| D0                      | Analog          | PC00      |                    | GPIO, ADC                            |
| D1                      | Analog          | PC01      |                    | GPIO, ADC                            |
| D2                      | Analog          | PC02      |                    | GPIO, ADC                            |
| D3                      | Analog          | PC03      |                    | GPIO, SPI, ADC                       |
| D4                      | Analog,SDA       | PC04      |                    | GPIO, I2C Data, ADC                  |
| D5                      | Analog,SCL       | PC05      |                    | GPIO, I2C Clock, ADC                 |
| D6                      | Analog,TX0       | PC06      |                    | GPIO, UART Transmit, ADC             |
| D7                      | Analog,RX0       | PC07      |                    | GPIO, UART Receive, ADC              |
| D8                      | Analog,SCK0      | PA03      |                    | GPIO, SPI Clock, ADC                 |
| D9                      | Analog,MISO0     | PA04      |                    | GPIO, SPI Data, ADC                  |
| D10                     | Analog,MOSI0     | PA05      |                    | GPIO, SPI Data, ADC                  |
| D11                     | Analog          | PA09      | SAMD11_TX          | GPIO, UART Receive, ADC              |
| D12                     | Analog          | PA08      | SAMD11_RX          | GPIO, UART Transmit, ADC             |
| D13                     | Analog          | PB02      |                    | GPIO, I2C Clock, ADC                 |
| D14                     | Analog          | PB03      |                    | GPIO, I2C Data, ADC                  |
| D15                     | Analog,MOSI1     | PB00      |                    | GPIO, SPI Data, ADC                  |
| D16                     | Analog,MISO1     | PB01      |                    | GPIO, SPI Data, ADC                  |
| D17                     | Analog,SCK1      | PA00      |                    | GPIO, SPI Clock, ADC                 |
| D18                     | Analog,CS        | PD02      | Csn                | GPIO, Csn, ADC               |
| ADC_BAT                 |                  | PD04      |                    | 读取电池电压值                        |
| RF Switch Port Select   |                  | PB04      |                    | 切换板载天线和 UFL 天线               |
| RF Switch Power         |                  | PB05      |                    | 射频电源                             |
| Reset                   |                  | RESET     |                    | 复位                                  |
| CHARGE_LED              |                  | VBUS      |                    | CHG-LED_Red                          |
| USER_LED                |                  | PA07      |                    | 用户指示灯_黄色                       |


## 入门

为了帮助你更快地上手 XIAO MG24，请先阅读下面的硬件和软件准备内容，以完成对 XIAO 的准备工作。

### 出厂流程

我们为每一块新的 XIAO MG24 和 XIAO MG24 Sense 预先烧录了一个简单的出厂程序。

1. **XIAO MG24**

常规版本中预设的出厂程序是 Blink Light。当你给 XIAO 上电时，橙色的用户指示灯会亮起。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/00.gif" style={{width:500, height:'auto'}}/></div>

2. **XIAO MG24 Sense**

常规版本中预设的出厂程序是：你喊得越大声，灯就会越亮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/99.gif" style={{width:500, height:'auto'}}/></div>

### 硬件准备

您需要准备以下物品：

- 1 x [Seeed Studio XIAO MG24](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- 1 x 计算机
- 1 x USB Type-C 数据线

:::tip
某些 USB 数据线只能供电而无法传输数据。如果您没有 USB 数据线或不知道您的 USB 数据线是否可以传输数据，您可以查看 [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)。
:::

### 软件准备

XIAO MG24 推荐使用的编程工具是 Arduino IDE，因此你需要完成 Arduino 的安装作为软件准备的一部分。

:::tip
如果这是你第一次使用 Arduino，我们强烈建议你参考 [Getting Started with Arduino](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **Step 1.** 根据你的操作系统下载并安装稳定版本的 Arduino IDE。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong>
    </a>
</div>

<br></br>

- **Step 2.** 启动 Arduino 应用程序。
- **[Step 3](#添加-XIAO-MG24-开发板).**  在 Arduino IDE 中添加 XIAO MG24 板载包并点击 `OK`。
- **Step 4.** 关闭 Arduino IDE 并重新打开。

#### 添加 XIAO MG24 开发板 {#添加-XIAO-MG24-开发板}

要安装 XIAO MG24 开发板，请按照以下步骤操作：

```
https://siliconlabs.github.io/arduino/package_arduinosilabs_index.json 
```

1. 将上述开发板管理器 URL 添加到 Arduino IDE 的首选项中。

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/13(1).png" style={{width: 'auto', height: 'auto'}}/></div>

2. 下载 XIAO MG24 开发板包。

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/14(1).png" style={{width: 'auto', height: 'auto'}}/></div>

:::tip
如果输入后仍然找不到，请重新打开 Arduino IDE。
:::

3. 选择 `XIAO_MG24` 变体。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/15.png" style={{width:1000, height:'auto'}}/></div>

现在开始享受编程的乐趣吧 ✨。

#### 运行你的第一个 Blink 程序

- **Step 1.** 启动 Arduino 应用程序。

- **Step 2.** 依次进入 **File > Examples > 01.Basics > Blink**，打开该程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/12(1).png" style={{width:1000, height:'auto'}}/></div>

- **Step 3.** 将开发板型号选择为 **XIAO MG24**，并选择正确的端口号上传程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/16.png" style={{width:1000, height:'auto'}}/></div>

程序成功上传后，你会看到如下输出信息，并且可以观察到 XIAO MG24 右侧的橙色 LED 在闪烁。

<div class="table-center">
 <table align="center">
  <tr>
   <th>MG24 BLink 代码</th>
   <th>LED BLink 显示</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/7.png" style={{width:700, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/8.gif" style={{width:400, height:'auto'}}/></div></td>
  </tr>
 </table>
</div>

## 电池使用

XIAO MG24 内置电源管理芯片，可以通过电池为 XIAO MG24 独立供电，或者通过 XIAO MG24 的 USB 接口为电池充电。

如果你想为 XIAO 接电池，我们建议你购买合格的可充电 3.7V 锂电池。焊接电池时，请注意区分正负极。电源负极应为靠近 USB 接口的一侧，电源正极为远离 USB 接口的一侧。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/4444.png" alt="pir" width="800" height="auto"/></div>

:::caution
焊接时请注意不要将正负极短路，以免烧毁电池和设备。
:::

**电池使用说明：**

1. 请使用符合规格要求的合格电池。
2. 使用电池时，XIAO 仍可以通过数据线连接到你的计算机设备，请放心，XIAO 内置电路保护芯片，是安全的。
3. 当 XIAO MG24 使用电池供电时，不会有任何 LED 亮起（除非你编写了特定程序），请不要通过 LED 的状态来判断 XIAO MG24 是否在工作，请根据你的程序合理判断。
4. 很抱歉，目前我们无法通过软件帮助你查看电池剩余电量（因为没有多余的芯片引脚可用），你需要定期为电池充电或使用万用表检测电池电量。

同时，我们为电池充电设计了一个红色指示灯，通过指示灯的显示来告知用户当前电池的充电状态。

1. 当 XIAO MG24 未连接电池时，连接 Type-C 线缆后红灯会亮起，并在 30 秒后熄灭。
2. 当连接电池并连接 Type-C 线缆进行充电时，红灯会闪烁。
3. 当连接 Type-C 将电池充满电后，红灯熄灭。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/battery_mg24.jpg" style={{width:600, height:'auto'}}/></div>

## 读取电池电压

**软件代码**

```cpp
/*
  AnalogReadSerial

  Reads an analog input on pin 0, prints the result to the Serial Monitor.
  Graphical representation is available using Serial Plotter (Tools > Serial Plotter menu).
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

  This example code is in the public domain.

  https://www.arduino.cc/en/Tutorial/BuiltInExamples/AnalogReadSerial
*/

// the setup routine runs once when you press reset:
void setup() {
  Serial.begin(115200);
  pinMode(PD3, OUTPUT);
  digitalWrite(PD3, HIGH);
}

void loop() {
  int voltageValue = analogRead(PD4);
  float voltage = voltageValue * (2 * 3.3 / 4095.0);

  Serial.print("Voltage: ");
  Serial.print(voltage, 2);
  Serial.println(" V");
  delay(1000);  // delay in between reads for stability
}
```

**显示结果**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/55.png" alt="pir" width="800" height="auto"/></div>

## 深度睡眠与睡眠示例

#### 示例 1：睡眠模式与唤醒

```cpp

/*
   ArduinoLowPower timed sleep example

   The example shows the basic usage of the Arduino Low Power library by putting the device to sleep for a period of time.
   The device will enter sleep mode for 2000ms. During sleep the CPU is stopped but the RAM retains its contents.

   This example is compatible with all Silicon Labs Arduino boards.

   Author: Tamas Jozsi (Silicon Labs)
 */

#include "ArduinoLowPower.h"

void setup()
{
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.println("Sleep with timed wakeup");
}

void loop()
{
  digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
  delay(500);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  delay(500);

  Serial.printf("Going to sleep at %lu\n", millis());
  LowPower.sleep(2000);
  Serial.printf("Woke up at %lu\n", millis());
}
```

#### 示例 2：深度睡眠模式与唤醒

```cpp
/*
   ArduinoLowPower deep sleep example with external or timed wakeup

   The example shows the basic usage of the Arduino Low Power library by putting the device into deep sleep.
   The device will remain in deep sleep until the sleep timer expires.
   During deep sleep the whole device is powered down except for a minimal set of peripherals (like the Back-up RAM and RTC).
   This means that the CPU is stopped and the RAM contents are lost - the device will start from the beginning of the sketch after waking up.

   This example is compatible with all Silicon Labs Arduino boards.

   Author: Tamas Jozsi (Silicon Labs)
 */

#include "ArduinoLowPower.h"

void setup()
{
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.println("Deep sleep timed wakeup");
}

void loop()
{
  digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
  delay(500);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  delay(500);

  Serial.printf("Going to deep sleep for 10s at %lu\n", millis());
  LowPower.deepSleep(10000);
}


```

#### 示例 3：带 flash 的深度睡眠模式与唤醒

:::tip
如果你想让 flash 进入深度睡眠，需要使能 0xb9 寄存器
:::

```cpp
/*
   ArduinoLowPower deep sleep example with external or timed wakeup

   The example shows the basic usage of the Arduino Low Power library by putting the device into deep sleep.
   The device will remain in deep sleep until the sleep timer expires.
   During deep sleep the whole device is powered down except for a minimal set of peripherals (like the Back-up RAM and RTC).
   This means that the CPU is stopped and the RAM contents are lost - the device will start from the beginning of the sketch after waking up.

   This example is compatible with all Silicon Labs Arduino boards.

   Author: Tamas Jozsi (Silicon Labs)
 */
#include <Arduino.h>
#include "ArduinoLowPower.h"

#define CS_PIN PA6
#define CLK_PIN PA3
#define MOSI_PIN PA5
#define MISO_PIN PA4

#define READ_DATA 0x03
#define WRITE_ENABLE 0x06
#define PAGE_PROGRAM 0x02
#define SECTOR_ERASE 0x20

void sendSPI(byte data) {
  for (int i = 0; i < 8; i++) {
    digitalWrite(MOSI_PIN, data & 0x80);
    data <<= 1;
    digitalWrite(CLK_PIN, HIGH);
    delayMicroseconds(1);
    digitalWrite(CLK_PIN, LOW);
    delayMicroseconds(1);
  }
}

void writeEnable() {
  digitalWrite(CS_PIN, LOW);
  sendSPI(WRITE_ENABLE);
  digitalWrite(CS_PIN, HIGH);
}

void setup()
{
  //Serial.begin(115200);
  pinMode(PA7, OUTPUT);
  digitalWrite(PA7, LOW);

  pinMode(CS_PIN, OUTPUT);
  pinMode(CLK_PIN, OUTPUT);
  pinMode(MOSI_PIN, OUTPUT);
  pinMode(MISO_PIN, INPUT);


  //SW
  pinMode(PD3, OUTPUT);
  pinMode(PB5, OUTPUT);
  pinMode(PB1, OUTPUT);
  pinMode(PB0, OUTPUT);
  pinMode(PA6, OUTPUT);
  digitalWrite(PD3, LOW); //VBAT
  digitalWrite(PB5, LOW); //RF_SW
  digitalWrite(PB1, LOW); //IMU
  digitalWrite(PB0, LOW); //MIC
  digitalWrite(PA6, HIGH);  //FLASH

  //Serial.println("Deep sleep timed wakeup");
  writeEnable();
  digitalWrite(CS_PIN, LOW);
  sendSPI(0xB9);
  digitalWrite(CS_PIN, HIGH);
}

void loop()
{
  delay(12000);  
  digitalWrite(PA7, HIGH);
  delay(500);

  //Serial.printf("Going to deep sleep for 10s at %lu\n", millis());
  LowPower.deepSleep(600000);
}

```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/100.png" style={{width:1000, height:'auto'}}/></div>

### 防止 XIAO MG24 在深度睡眠时变砖

**XIAO MG24** 是 Seeed Studio 推出的一款功能强大的微控制器开发板，但有用户反馈在进入深度睡眠模式后，设备会变得无响应（“变砖”）。本教程将解释问题的原因，提供详细的恢复方法，并给出预防措施，帮助你避免让 XIAO MG24 变砖。

XIAO MG24 会进入一种用于节省电能的 **深度睡眠模式**（EM4），但在某些情况下，它无法正常唤醒，从而导致无法上传新的草图程序。与其他 XIAO 开发板不同，MG24 没有专用的 **BOOT 按钮**，也没有文档化的进入 boot 模式的方法，这使得恢复过程更加困难。

#### 预防措施

为了在使用深度睡眠模式时避免让 XIAO MG24 变砖，请遵循以下步骤：

1. 使用逃生引脚（PC1）

XIAO MG24 内置了一个防止变砖的 **逃生机制**。如果在复位期间将 **PC1** 拉为 **LOW**，设备会进入一个无限循环，从而允许你上传新的草图程序。  

- 在复位设备之前，将 **PC1** 连接到 **GND**。  
- 复位后，在设备处于循环状态时上传你的草图程序。  

2. 修改你的草图程序
在草图程序中添加以下代码，用于检测用户开关，如果按下则进入无限循环。这样在设备循环时，你就可以上传新的草图程序：

```cpp
#define USER_SW  PC3   // Example pin for user switch

void setup() {
  // Other setup code...

  pinMode(USER_SW, INPUT_PULLUP);
  if (digitalRead(USER_SW) == LOW) {
    Serial.println("Enable to upload new sketch");
    while (true) {
      digitalWrite(LED_BUILTIN, LOW);
      delay(50);
      digitalWrite(LED_BUILTIN, HIGH);
      delay(50);
    }
  }
}
```

3. 避免不必要的 Flash 睡眠

确保你的草图程序不会在非绝对必要的情况下让 Flash 存储器进入睡眠模式（`Deep Power Down`）。这可以避免在上传新草图程序时出现问题。

#### 致谢

特别感谢 **Seeed Studio 社区** 为解决该问题提供的宝贵经验和方案。本教程中提到的恢复方法和预防措施，基于社区成员 **[msfujino](https://forum.seeedstudio.com/u/msfujino)** 和 **[PJ_Glasso](https://forum.seeedstudio.com/u/PJ_Glasso)** 等人的见解整理而成。  

更多细节和讨论内容，请访问原始论坛帖子：  
[DeepSleep bricks XIAO_MG24 - Seeed Studio Forum](https://forum.seeedstudio.com/t/deepsleep-bricks-xiao-mg24/284889)

## 解除变砖

XIAO MG24 目前是唯一配备串口芯片的 XIAO 型号。与其他 XIAO 型号不同，它没有 BOOT 按钮，也没有 BOOT 恢复方法。这个设计疏漏会在设备进入睡眠模式或遇到软件异常时带来问题，使得无法通过串口上传程序。为了解决这一问题，我们提供了一种唤醒串口并恢复功能的方法。

### Windows 解决方案

1. **下载并解压压缩包**  
   - 下载提供的 ZIP 压缩包。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_MG24/xiao_mg24_flash_erase_windows.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download the ZIP 🖱️</font></span></strong>
    </a>
</div><br />
   - 将压缩包内容解压到电脑上的某个文件夹。

2. **连接 XIAO MG24**  
   - 使用 USB 线将无响应的 XIAO MG24 连接到电脑。

3. **运行脚本**  
   - 打开解压后的文件夹，找到脚本 `flash_erase.bat`。  
   - 双击脚本运行它。  
   - 脚本会擦除 Flash 存储器并复位设备。

4. **验证恢复情况**  
   - 脚本执行完成后，XIAO MG24 应该已经恢复并可以正常使用。

### macOS 解决方案

1. **下载并解压压缩包**  
   - 下载提供的 ZIP 压缩包（链接将会在此处添加）。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_MG24/xiao_mg24_flash_erase_macos.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download the ZIP 🖱️</font></span></strong>
    </a>
</div><br />
   - 将压缩包内容解压到电脑上的某个文件夹。

2. **连接 XIAO MG24**  
   - 使用 USB 线将无响应的 XIAO MG24 连接到电脑。

3. **允许 Terminal 访问权限**  
   - 打开 **System Preferences** > **Security & Privacy** > **Privacy**。  
   - 在 **Accessibility** 下，确保 **Terminal** 被允许控制你的电脑。  
   - 如果列表中没有 Terminal，点击 **+** 按钮手动添加。

4. **运行脚本**  
   - 打开 **Terminal**。  
   - 使用 `cd` 命令进入解压后的文件夹。例如：  

     ```bash
     cd /path/to/extracted/folder
     ```  

   - 使用以下命令运行脚本 `xiao_mg24_erase.sh`：  

     ```bash
     ./xiao_mg24_erase.sh
     ```  

   - 脚本会使用 OpenOCD 擦除 Flash 存储器并复位设备。  

5. **验证恢复情况**  
   - 脚本执行完成后，XIAO MG24 应该已经恢复并可以正常使用。

:::note

- 如果 macOS 无法识别 OpenOCD，请确保已安装 OpenOCD，并在脚本中使用了正确的路径。  
- 提供的脚本是专门为 XIAO MG24 设计的，不应在其他 XIAO 型号上使用。  

:::

## 资源

### 适用于 Seeed Studio XIAO MG24

**硬件设计**
- **📄[Datasheet]** [Silicon Labs EFR32MG24 Datasheet](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24-group-datasheet.PDF )
- **📄[Reference Manual]** [Silicon Labs EFR32MG24 Reference Manual](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/efr32xg24_rm.pdf )
- **📄[Schematic]** [XIAO MG24 Schematic](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MGM240S_KICAD_Prj.pdf )
- **🗃️[PCB Design Files]** [XIAO MG24 KiCad Project](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MG24_v1.0_KiCad_260114.zip )
- **🗃️[PCB Design Libraries]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )

### 适用于 Seeed Studio XIAO MG24 Sense

**硬件设计**
- **📄[Datasheet]** [Silicon Labs EFR32MG24 Datasheet](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24-group-datasheet.PDF )
- **📄[Reference Manual]** [Silicon Labs EFR32MG24 Reference Manual](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/efr32xg24_rm.pdf )
- **📄[Schematic]** [XIAO MG24 Sense Schematic](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MGM240S_KICAD_Prj.pdf )
- **🗃️[PCB Design Files]** [XIAO MG24 Sense KiCad Project](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MG24_v1.0_KiCad_260114.zip )
- **🗃️[PCB Design Libraries]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
