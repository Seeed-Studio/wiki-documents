---
description: 概述
title: Seeed Studio XIAO RP2040 入门指南
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao-rp2040-45font_1.webp
slug: /XIAO-RP2040
sku: 102010428, 100045204
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-08-07'
url: https://wiki.seeedstudio.com/cn/XIAO-RP2040/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Seeed Studio XIAO RP2040 入门指南

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao-rp2040-45font_1.jpg" alt="pir" width={400} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 概述

Seeed Studio XIAO RP2040 系列包括 **XIAO RP2040** 和 **XIAO RP2040 Plus**。两块开发板都由相同的 Raspberry Pi RP2040 微控制器驱动，该芯片配备双核 Arm Cortex-M0+ 处理器，最高运行频率 133 MHz，并集成 264 KB SRAM。每块板载还包含 2 MB Flash 存储。因此，它们具备相同的核心处理性能，并共享同一套 RP2040 软件生态。

两块开发板的主要区别在于可用的 GPIO 数量、外设连接能力以及板载电源管理特性。

标准版 XIAO RP2040 采用常见的 14 针 XIAO 封装，引出 11 个 GPIO 引脚和 3 个电源引脚。其 11 个数字 I/O 引脚均支持 PWM，其中有 4 个还支持模拟输入。该板在紧凑的 21 × 17.8 mm 尺寸中提供 I2C、UART、SPI 和 SWD 接口。

XIAO RP2040 Plus 保留了相同的 14 针 XIAO 引脚布局，并在板背面和侧边增加了 15 个 GPIO 焊盘，使可用数字 I/O 引脚总数从 11 个增加到 26 个。它还增加了第二路 I2C 接口、独立的 USB D+/D− 焊盘，以及包括 BAT+、BAT− 和 BAT_EN 在内的电池相关连接。

对于电池供电应用，XIAO RP2040 Plus 集成了板载 PMIC、电池充电指示灯以及 BAT 到 3V3 的回流保护。这些附加特性使 Plus 版本更适合用于自定义载板、贴片组装、电池供电设备以及需要更多 I/O 资源的项目。

Seeed Studio XIAO RP2040 兼容 Seeed Studio XIAO 扩展板。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 特性

- **强大的 RP2040 MCU：** 双核 Arm Cortex-M0+ 处理器，最高运行频率 133 MHz
- **丰富的存储资源：** 264 KB SRAM 和 2 MB 片上 Flash 存储
- **广泛的软件兼容性：** 支持 Arduino、PlatformIO、MicroPython、CircuitPython、TinyGo、Rust、Zephyr 等
- **通用 XIAO 封装：** 两个版本都保留标准 14 针 XIAO 布局，包括 11 个 GPIO 引脚和 3 个电源引脚
- **紧凑外形尺寸：** 拇指大小的 21 × 17.8 mm 设计，适用于可穿戴设备和空间受限的应用
- **标准 XIAO RP2040 接口：** 11 个数字 I/O 引脚、4 个模拟输入引脚、11 个支持 PWM 的引脚，以及 I2C、UART、SPI 和 SWD 接口
- **扩展的 XIAO RP2040 Plus I/O：** 额外增加 15 个 GPIO 焊盘，总计 26 个数字 I/O 引脚，并提供第二路 I2C 接口和专用 USB D+/D− 焊盘
- **集成电池管理：** XIAO RP2040 Plus 集成板载 PMIC、电池充电指示、专用电池连接以及 BAT 到 3V3 的回流保护
- **灵活的组装方式：** 兼容面包板的通用引脚结合半孔和适用于贴片的焊盘，便于定制载板

## 规格参数

<table>
  <thead>
    <tr>
      <th>产品名称</th>
      <th>Seeed Studio XIAO RP2040</th>
      <th>Seeed Studio XIAO RP2040 Plus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>芯片组</strong></td>
      <td colspan="2">
        <a href="https://www.raspberrypi.com/documentation/microcontrollers/silicon.html#rp2040">
          Raspberry Pi RP2040
        </a>
      </td>
    </tr>
    <tr>
      <td><strong>处理器</strong></td>
      <td colspan="2">双核 Cortex-M0+，最高 133 MHz</td>
    </tr>
    <tr>
      <td><strong>RAM</strong></td>
      <td colspan="2">264 KB SRAM</td>
    </tr>
    <tr>
      <td><strong>Flash</strong></td>
      <td colspan="2">2 MB 板载 Flash</td>
    </tr>
    <tr>
      <td><strong>接口</strong></td>
      <td>
        GPIO 引脚 × 14<br/>
        数字引脚 × 11<br/>
        模拟引脚 × 4<br/>
        PWM 引脚 × 11<br/>
        I2C × 1<br/>
        UART × 1<br/>
        SPI × 1
      </td>
      <td>
        GPIO 引脚 × 29<br/>
        额外 GPIO 焊盘 × 15<br/>
        数字引脚 × 26<br/>
        模拟引脚 × 4<br/>
        PWM × 26<br/>
        I2C × 2<br/>
        UART × 1<br/>
        SPI × 1
      </td>
    </tr>
    <tr>
      <td><strong>板载器件</strong></td>
      <td>
        用户 LED × 1<br/>
        电源 LED × 1<br/>
        绿色 LED × 1<br/>
        蓝色 LED × 1<br/>
        红色 LED × 1<br/>
        RGB LED × 1<br/>
        复位按钮 × 1<br/>
        Boot 按钮 × 1
      </td>
      <td>
        用户 LED × 1<br/>
        电源 LED × 1<br/>
        充电 LED（电池充电指示灯）× 1<br/>
        RGB LED × 1<br/>
        复位按钮 × 1<br/>
        Boot 按钮 × 1
      </td>
    </tr>
    <tr>
      <td><strong>电池管理（PMIC）</strong></td>
      <td>无</td>
      <td>板载 PMIC</td>
    </tr>
    <tr>
      <td><strong>电源</strong></td>
      <td colspan="2">
        输入电压（Type-C）：5V<br/>
        输入电压（BAT）：5V
      </td>
    </tr>
    <tr>
      <td><strong>BAT 到 3V3 回流保护</strong></td>
      <td>否</td>
      <td>是</td>
    </tr>
    <tr>
      <td><strong>软件兼容性</strong></td>
      <td colspan="2">
        Arduino、PlatformIO、MicroPython、CircuitPython、TinyGo、Rust、Zephyr，以及
        <a href="https://wiki.seeedstudio.com/cn/xiao_topic_page/">更多即将支持</a>
      </td>
    </tr>
    <tr>
      <td><strong>工作温度</strong></td>
      <td colspan="2">-40°C 至 85°C</td>
    </tr>
    <tr>
      <td><strong>尺寸</strong></td>
      <td colspan="2">21 x 17.8mm</td>
    </tr>
    <tr>
      <td><strong>产品版本</strong></td>
      <td>
        <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-3PCS-p-5942.html">
          Seeed Studio XIAO RP2040 3 片装套件
        </a>
        <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-Pre-Soldered-p-6333.html">
          Seeed Studio XIAO RP2040 预焊接版
        </a>
      </td>
      <td>Seeed Studio XIAO RP2040 Plus</td>
    </tr>
  </tbody>
</table>

## 硬件概览

<Tabs>
<TabItem value="XIAO RP2040" label="XIAO RP2040" default>

### XIAO RP2040 正面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/XIAO_RP2040_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO RP2040 背面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/XIAO_RP2040_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>

<TabItem value="XIAO RP2040 Plus" label="XIAO RP2040 Plus">

### XIAO RP2040 Plus 正面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/XIAO-RP2040-Plus-Front.png" style={{width:1000, height:'auto'}}/></div>

### XIAO RP2040 Plus 背面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/XIAO-RP2040-Plus-Back.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

:::caution
对于通用 I/O 引脚：
MCU 的工作电压为 3.3V。如果接入通用 I/O 引脚的电压高于 3.3V，可能会导致芯片损坏。

对于电源引脚：
内置的 DC-DC 转换电路可以将 5V 转换为 3.3V，允许通过 VIN-PIN 和 5V-PIN 使用 5V 电源为设备供电。

XIAO RP2040 目前仅支持电池供电，在连接电池时不能再连接 Type-C，否则可能存在安全风险。

请注意使用安全，请勿撬起屏蔽罩。
:::

## **引脚映射**

| XIAO 引脚 | 功能                  | XIAO RP2040  | XIAO RP2040 Plus | 描述                                                           |
| :--------- | :--------------------- | :----------- | :---------------- | :----------------------------------------------------------- |
| 5V         | VBUS                   | VBUS         | VBUS              | USB 5 V 电源输入/输出                                         |
| GND        | GND                    | GND          | GND               | 地                                                            |
| 3V3        | 3V3_OUT                | 3V3_OUT      | 3V3_OUT           | 3.3 V 电源输出                                                |
| D0         | A0                     | GPIO26       | GPIO26            | GPIO，ADC0                                                    |
| D1         | A1                     | GPIO27       | GPIO27            | GPIO，ADC1                                                    |
| D2         | A2                     | GPIO28       | GPIO28            | GPIO，ADC2                                                    |
| D3         | A3                     | GPIO29       | GPIO29            | GPIO，ADC3                                                    |
| D4         | SDA0                   | GPIO6        | GPIO6             | GPIO，I2C0 数据                                               |
| D5         | SCL0                   | GPIO7        | GPIO7             | GPIO，I2C0 时钟                                               |
| D6         | TX                     | GPIO0        | GPIO0             | GPIO，UART 发送                                               |
| D7         | RX                     | GPIO1        | GPIO1             | GPIO，UART 接收                                               |
| D8         | SCK                    | GPIO2        | GPIO2             | GPIO，SPI 时钟                                                |
| D9         | MISO                   | GPIO4        | GPIO4             | GPIO，SPI 数据输入                                            |
| D10        | MOSI                   | GPIO3        | GPIO3             | GPIO，SPI 数据输出                                            |
| D11        | —                      | —            | —                 | 不作为外部引脚提供                                            |
| D12        | GPIO                   | —            | GPIO18            | 仅 Plus 版本的扩展 GPIO                                       |
| D13        | SCL1                   | —            | GPIO21            | 仅 Plus 版本的 I2C1 时钟                                      |
| D14        | SDA1                   | —            | GPIO20            | 仅 Plus 版本的 I2C1 数据                                      |
| D15        | GPIO                   | —            | GPIO19            | 仅 Plus 版本的扩展 GPIO                                       |
| D16        | GPIO                   | —            | GPIO22            | 仅 Plus 版本的扩展 GPIO                                       |
| D17        | GPIO                   | —            | GPIO23            | 仅 Plus 版本的扩展 GPIO                                       |
| D18        | —                      | —            | —                 | 不作为外部引脚提供                                            |
| D19        | GPIO                   | —            | GPIO5             | 仅 Plus 版本的扩展 GPIO                                       |
| D20        | GPIO                   | —            | GPIO13            | 仅 Plus 版本的扩展 GPIO                                       |
| D21        | GPIO                   | —            | GPIO14            | 仅 Plus 版本的扩展 GPIO                                       |
| D22        | GPIO                   | —            | GPIO15            | 仅 Plus 版本的扩展 GPIO                                       |
| D23        | GPIO                   | —            | GPIO16            | 仅 Plus 版本的扩展 GPIO                                       |
| D24        | GPIO                   | —            | GPIO17            | 仅 Plus 版本的扩展 GPIO                                       |
| D25        | GPIO                   | —            | GPIO10            | 仅 Plus 版本的扩展 GPIO                                       |
| D26        | GPIO                   | —            | GPIO9             | 仅 Plus 版本的扩展 GPIO                                       |
| D27        | GPIO                   | —            | GPIO8             | 仅 Plus 版本的扩展 GPIO                                       |
| Reset      | RUN                    | RUN          | RUN               | 复位输入                                                       |
| Boot       | RP2040_BOOT            | RP2040_BOOT  | RP2040_BOOT       | 进入 bootloader 模式                                          |
| USER_LED_R | 红色通道               | GPIO17       | —                 | 在 XIAO RP2040 上直接控制 RGB LED 红色通道                    |
| USER_LED_G | 绿色通道               | GPIO16       | —                 | 在 XIAO RP2040 上直接控制 RGB LED 绿色通道                    |
| USER_LED_G | 蓝色通道               | GPIO25       | —                 | 在 XIAO RP2040 上直接控制 RGB LED 蓝色通道                    |
| RGB_LED    | WS2812B 数据           | —            | GPIO12/NEOPIX     | 单线 WS2812B 彩色数据控制                                    |
| RGB_EN     | WS2812B 使能           | —            | GPIO11            | 使能 WS2812B 供电；不是颜色数据引脚                           |
| User LED   | 用户控制 LED           | —            | GPIO25            | XIAO RP2040 Plus 上的独立用户 LED                             |
| BAT_EN     | 电池使能               | —            | GPIO24            | Plus 版本上的电池电源控制                                     |
| CHARGE_LED | 充电指示灯             | —            | —                 | 硬件控制的充电状态 LED；不是用户 GPIO                         |
| SWDIO      | SWD 调试               | SWDIO        | RP2040_SWDIO      | 串行线调试数据                                                |
| SWCLK      | SWD 调试               | SWCLK        | RP2040_SWCLK      | 串行线调试时钟                                                |
| USB_D+     | USB                    | -            | USB_DP      | USB 1.1 全速正向数据线                                        |
| USB_D-     | USB                    | -            | USB_DM      | USB 1.1 全速负向数据线                                        |

### 进入 Bootloader 模式

有时当用户烧录程序失败时，Seeed Studio XIAO RP2040 的端口可能会消失。我们可以通过以下操作来解决这个问题：

- 长按 **B** 按钮。
- 将 Seeed Studio XIAO PR2040 连接到你的电脑。
- 电脑上会出现一个磁盘驱动器。

此时，芯片进入 Bootloader 模式，烧录端口会再次出现。由于 RP2040 芯片有两个分区，一个是 Bootloader，另一个是用户程序。产品在出厂时会在系统存储器中烧录一段 Bootloader 代码。我们可以通过执行上述步骤在模式之间切换。

### 复位

如果你想复位 Seeed Studio XIAO RP2040，请执行以下步骤：

- 将 Seeed Studio XIAO RP2040 连接到你的电脑。
- **按下** **R** 引脚 **一次**。

请注意：内置可编程单色 LED（红色、蓝色和绿色）的行为与 Arduino 上的是相反的。在 Seeed Studio XIAO RP2040 上，需要将引脚拉低才能使其点亮。

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.png" alt="pir" width={800} height="auto" /></p>

## 电池使用

:::note

只有 XIAO RP2040 Plus 在背面配备了 BAT 电池连接器，请注意区分。

:::

XIAO RP2040 Plus 可以使用 3.7V 锂电池作为电源输入。你可以参考下图了解接线方式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_plus_battery.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::caution

焊接时请务必注意不要让正负极短路，以免烧毁电池和设备。如果电池本身带电，切勿直接将其焊接到电路板上，否则可能烧毁电路板。在电路上电的情况下发生短路风险极大，建议使用适配器。

:::

### 电池电压读取示例

根据原理图，XIAO RP2040 Plus 使用 **SGM40567-4.2XG/TR** 锂离子电池充电 IC，为单节锂离子电池提供恒流和恒压充电。充电状态由闪烁的 **Charge_LED** 指示。<br/>

电池电压测量电路使用 **TPS22916CNYFPR** 负载开关来使能或关闭测量通路。当需要测量电池电压时，MCU 通过 **BAT_EN (GPIO24)** 使能测量通路，从而在设备处于待机模式时降低电池消耗。<br/>

此外，还使用了 **SGM4875XXDM6G/TR** 模拟开关来切换 ADC 输入通道。通过 **GPIO24/BAT_EN** 控制，选择将电池测量信号或其他模拟输入信号连接到 **A3 (GPIO29) ADC** 引脚，从而实现 ADC 引脚的复用。

:::tip

当 A3 引脚用作 ADC 输入以测量电池电压时，不能同时作为通用 I/O 引脚使用。请在分配引脚时务必考虑这一点。

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_plus_battery_charge.png" style={{width:800, height:'auto'}}/></div>
<br/>

电池电压是通过电阻分压电路进行测量的。ADC 读取到的电压是实际电池电压的一半，因此软件必须将 ADC 测量值乘以 2 才能得到实际电池电压。

<details>

<summary>Battery read example</summary>

```c
constexpr float ADC_VREF = 3.3f;
constexpr float ADC_MAX  = 4095.0f;
constexpr float DIVIDER_RATIO = 2.0f;  // 10k / 10k voltage divider

float readBatteryVoltage() {
  // Enable voltage divider circuit and analog switch simultaneously
  digitalWrite(BAT_EN, HIGH);

  // Wait for U2 output, RC filter and ADC input to stabilize
  delay(10);

  // Discard one possibly stale ADC reading
  analogRead(A3);

  // Multiple sampling and averaging to reduce noise
  uint32_t sum = 0;
  constexpr int samples = 16;

  for (int i = 0; i < samples; i++) {
    sum += analogRead(A3);
    delay(2);
  }

  // Turn off immediately after measurement to avoid continuous power consumption by divider resistors
  digitalWrite(BAT_EN, LOW);

  float adcRaw = sum / (float)samples;
  float a3Voltage = adcRaw * ADC_VREF / ADC_MAX;

  return a3Voltage * DIVIDER_RATIO;
}

void setup() {
  Serial.begin(115200);

  pinMode(BAT_EN, OUTPUT);
  digitalWrite(BAT_EN, LOW);  // Disable detection circuit by default

  analogReadResolution(12);   // RP2040 Plus ADC: 0~4095
}

void loop() {
  float batteryVoltage = readBatteryVoltage();

  Serial.print("Battery: ");
  Serial.print(batteryVoltage, 3);
  Serial.println(" V");

  delay(1000);
}
```

</details>
<br/>
:::note

对于低功耗应用，在完成电池电压测量后，请关闭 **BAT_EN**，以减少由分压电阻引起的静态功耗。

:::

- 电池充电时，**Charge_LED** 会闪烁。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_plus_detection.gif" style={{width:400, height:'auto'}}/></div>
<br/>

- 电池电压测量结果：锂离子电池的实测电压可能与电池上标称的额定电压不同，请始终以实际测量值为准。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_plus_battery_detection.png" style={{width:800, height:'auto'}}/></div>
<br/>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

### XIAO RP2040

**硬件设计**
- **📄[Datasheet]** [Raspberry Pi RP2040 数据手册](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf )
- **📄[Schematic]** [XIAO RP2040 原理图](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf )
- **🗃️[PCB Design Files]** 
  - [ XIAO RP2040 KiCad 工程](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.3_SCH&PCB_20260304.zip )
  - [XIAO RP2040 Eagle 工程](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip )
- **🗃️[PCB Design Libraries]** 
  - [XIAO 系列 KiCad 封装库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO 系列 KiCad 原理图符号库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Diagram]** [XIAO RP2040 引脚分布表](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx )

**结构设计**
- **📄[2D Dimensions]** [DXF 格式的 XIAO RP2040 尺寸图](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip )
- **📄[3D Model]** [ XIAO RP2040 3D 模型](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip )

### XIAO RP2040 Plus

**硬件设计**
- **📄[Datasheet]** [Raspberry Pi RP2040 数据手册](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf )
- **📄[Schematic]** [XIAO RP2040 Plus 原理图](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040-Plus_SCH.pdf )
- **🗃️[PCB Design Files]** 
  - [ XIAO RP2040 Plus KiCad 工程](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040-Plus_V1.0_SCH&PCB.zip)
  - [XIAO RP2040 Plus Eagle 工程](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040-Plus_V1.0_SCH&PCB.zip)
- **🗃️[PCB Design Libraries]** 
  - [XIAO 系列 KiCad 封装库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO 系列 KiCad 原理图符号库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Diagram]** [XIAO RP2040 Plus 引脚分布表](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-Plus-pinout.xlsx)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## 课程资源

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[电子书]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

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
