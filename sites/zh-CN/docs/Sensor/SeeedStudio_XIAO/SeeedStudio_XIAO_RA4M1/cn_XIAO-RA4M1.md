---
title: Seeed Studio XIAO RA4M1 入门指南
description: |
  XIAO RA4M1 - 基于 32 位 Renesas RA4M1 的最小开发板，支持 Arduino IDE，19 个 GPIO，RGB LED，CAN BUS，USB 2.0
image: https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/1-102010551-Seeed-Studio-XIAO-RA4M1.jpg
slug: /getting_started_xiao_ra4m1
sku: 102010551,102010638
keywords:
  - XIAO
  - RA4M1
last_update:
  date: 08/15/2024
  author: Carla
sidebar_position: 0
createdAt: '2024-08-06'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/cn/getting_started_xiao_ra4m1/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Product Description -->

<div style={{ textAlign: 'center' }}>
  <img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{ width: 480, height: 'auto', "border-radius": '12.8px' }} />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
  <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
  </a>
</div><br></br>

## 介绍

XIAO RA4M1 将 Renesas 的 RA4M1 芯片（32 位 ARM® Cortex®-M4 MCU，最高 48 MHz）集成到经典的 XIAO 外形中。该开发板提供 256KB Flash、32KB SRAM、8KB EEPROM、一个 USB 2.0 接口、复位和启动按键、3 个 LED、14 位 A/D 转换器、12 位 D/A 转换器以及 CAN BUS 接口。凭借板载充电电路和低功耗模式（最低可达 45μA），非常适合电池供电应用。它与 Arduino Uno R4 采用相同的 32 位 R7FA4M1AB3CNE 微控制器，原生兼容 Arduino IDE 和丰富的 XIAO 配件，是电子项目的理想起点。

### 特性

<!-- Key Features with bullet -->

- **流行微控制器板载：** 由 Renesas RA4M1 提供动力，这是一款 32 位 ARM® Cortex®-M4 R7FA4M1AB3CNE MCU，最高运行频率 48 MHz，配备 256 KB Flash 存储和 32 KB SRAM。
- **突出的板载资源：** 配备 14 位 ADC、12 位 DAC、CAN BUS、USB 2.0 和板载 RGB LED。
- **扩展 8 个新 IO：** 与之前的 XIAO 板相比，在背面新增 8 个 IO 引脚（共 19 个 GPIO），可实现更复杂的应用。
- **强大的安全特性：** 内置硬件加密、安全启动、密钥存储等功能，确保应用安全。
- **软件兼容性：** 与 Arduino IDE 完全兼容，可无缝进行项目开发和原型制作。
- **高效电源设计：** 提供 4 种工作模式，在深度睡眠时功耗低至 45μA，并支持锂电池充电管理。
- **紧凑拇指大小设计：** 尺寸为 21 x 17.8mm，采用 Seeed Studio 经典 XIAO 外形，非常适合对空间敏感的应用。
- **便于量产：** 采用表面贴装器件（SMD）设计，所有元件位于正面，两侧带有邮票孔，便于高效量产。

### 规格

<!-- Technical Specifications | Table | or bullet -->
| 产品 | XIAO RA4M1 |
|---------|-----------|
| **处理器** | [RA4M1 - 32-bit Microcontrollers with 48MHz Arm Cortex-M4 and LCD Controller and Cap Touch for HMI - Renesas](https://www.renesas.com/us/en/products/microcontrollers-microprocessors/ra-cortex-m-mcus/ra4m1-32-bit-microcontrollers-48mhz-arm-cortex-m4-and-lcd-controller-and-cap-touch-hmi) <br/>48-MHz Arm® Cortex®-M4 内核，带 FPU <br/>|
| **RAM** | 32 KB SRAM |
| **Flash** | 256 KB |
| **LED** | 1x 用户 LED<br/>1x 电源 LED<br/>1x RGB LED |
| **接口** | 19 个 IO：<br/>6x 模拟<br/>19x 数字<br/>2x IIC<br/>2x UART<br/>2x SPI |
| **按键** | 1x RESET 按键<br/>1x BOOT 按键 |
| **安全性** | AES128/256 |
| **低功耗（典型）** | `42.6μA@3.7V` |
| **软件兼容性** | Arduino IDE |
| **工作温度** | -20°C~70°C |
| **尺寸** | 21×17.8 mm |

## 硬件概览

在开始之前，了解产品的一些基本参数非常重要。下表提供了 Seeed Studio XIAO RA4M1 的特性信息。

### 正面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/XIAO_RA4M1_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### 背面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/XIAO_RA4M1_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

## **引脚映射**
| XIAO 引脚        | 功能         | 芯片引脚  | 复用功能                  | 描述                          | Arduino 名称 |
| :-------------: | :-------------: | :-------: | :---------------------------------: | :---------------------------------: | :----------: |
| 5V              | VBUS             |           |                                     | 电源输入/输出                   |             |
| GND             |                  |           |                                     |                                      |              |
| 3V3             | 3V3_OUT          |           |                                     | 电源输出                         |              |
| D0              | 模拟          | P014      | AN009                               | GPIO，ADC                            |       0   |
| D1              | 模拟          | P000      | AN000                               | GPIO，ADC                            |          1     |
| D2              | 模拟          | P001      | AN001                               | GPIO，ADC                            |        2       |
| D3              | 模拟          | P002      | AN002                              | GPIO，ADC                            |        3   |
| D4              | SDA1      | P206      |                                            | GPIO，I2C 数据             |               4   |
| D5              | 模拟,SCL1      | P100      |                                     | GPIO，I2C 时钟，ADC                 |     5    |
| D6              | TXD2             | P302      | SDA2                                | GPIO，UART 发送，I2C              |    6     |
| D7              | RXD2             | P301      | SCL2                                | GPIO，UART 接收，I2C               |       7  |
| D8              | SPI1_SCK         | P111      |                                     | GPIO，SPI 时钟                      |   8      |
| D9              | SPI1_MISO        | P110      | CRX0                                | GPIO，SPI 数据，UART                  |   9      |
| D10             | SPI1_MOSI        | P109      | CTX0                                | GPIO，SPI 数据，UART                  |    10    |
| D11             | RX9              | P408      |                                     | GPIO，UART                           |        |
| D12             | TX9              | P409      |                                     | GPIO，UART                            |        |
| D13             | GPIO             | P013      |                                     | GPIO                                 |        |
| D14             | GPIO             | P012      |                                     | GPIO                                 |        |
| D15             | TXD0             | P101      | SDA0,AN021,SPI0_MOSI                | GPIO，UART 发送，ADC，SPI，I2C     |       |
| D16             | RXD0             | P104      | SCL0,SPI0_MISO                      | GPIO，UART， SPI，I2C                   |       |
| D17             | CRX0             | P102      | AN020,SPI0_SCK                      | GPIO， UART ， ADC，SPI                 |       |
| D18             | CTX0             | P103      | AN019                               | GPIO， SPI ，ADC，UART                  |       |
| ADC_BAT         |                  | P400      |                                     | 读取电池电压值           |       |
| Reset           |                  | RES       |                                     | 复位                                |       |
| Boot            |                  | P201      |                                     | 进入 Boot 模式                      |       |
| RGB LED         |                  | P112      |                                     | RGB LED                              |    20   |
| RGB LED         |                  | P500      |                                     | RGB LED   使能                            |    21   |
| CHARGE_LED      |                  | VBUS      |                                     | CHG-LED_红                          |       |
| USER_LED        |                  | P011      |                                     | 用户指示灯（黄）                      |    19    |
## 入门指南

### 硬件准备

你需要准备以下物品：

- 1 x [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1)
- 1 x 电脑
- 1 x USB Type-C 线缆

<br></br>

:::tip
有些 USB 线缆只能供电，不能传输数据。如果你没有 USB 线缆，或者不确定你的 USB 线缆是否可以传输数据，可以查看 [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)。
:::

### 软件准备

XIAO RA4M1 推荐使用 Arduino IDE 作为编程工具，因此在软件准备部分，你需要完成 Arduino 的安装。

:::tip
如果这是你第一次使用 Arduino，我们强烈建议你参考 [Getting Started with Arduino](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 根据你的操作系统下载并安装稳定版本的 Arduino IDE。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

- **步骤 2.** 启动 Arduino 应用程序。

- **步骤 3.** 在 Arduino IDE 中添加 RA4M1 开发板包。

    依次进入 **File > Preferences**，并在 **"Additional Boards Manager URLs"** 中填入以下链接：
    *https://files.seeedstudio.com/arduino/package_renesas_1.2.0_index.json*

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/arduino_preference.png" style={{width:800, height:'auto'}}/></div>

    进入 **Tools > Board > Boards Manager...**，在搜索框中输入关键字 **RA4M1**，选择最新版本的 **Seeed Renesas Board** 并安装。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/board_manager.png" style={{width:600, height:'auto'}}/></div>
- **Step 4.** 选择你的开发板和端口。

    在 Arduino IDE 顶部，你可以在左侧的开发板中搜索 **xiao**，选择 XIAO_RA4M1，并直接选择端口。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/select_port.png" style={{width:800, height:'auto'}}/></div>

## BootLoader 模式

有时，使用错误的程序会导致 XIAO 丢失端口或无法正常工作。常见问题包括：

- XIAO 已连接到电脑，但找不到端口号。
- XIAO 已连接并出现端口号，但程序上传失败。

当你遇到以上两种情况时，可以尝试让 XIAO 进入 BootLoader 模式，这可以解决大多数设备无法识别和上传失败的问题。具体方法如下：

- **Method 1.** 按住 XIAO RA4M1 上的 `BOOT` 按钮不要松开。
- **Method 2.** 按住 `BOOT` 按钮，然后通过数据线连接电脑，连接电脑后再松开 BOOT 按钮。

## 复位

当程序运行异常时，你可以在上电时按一次 `Reset`，让 XIAO 重新执行已上传的程序。
当你在上电时按住 `BOOT` 键，然后再按一次 `Reset` 键，也可以进入 BootLoader 模式。

## 运行你的第一个 Blink 程序

到现在为止，我相信你已经对 XIAO RA4M1 的特性和硬件有了比较全面的了解。接下来，我们以最简单的 Blink 程序为例，为你的 XIAO RA4M1 完成第一次闪烁！

- **Step 1.** 启动 Arduino 应用程序。
- **Step 2.** 进入 **File > Examples > 01.Basics > Blink**，打开该程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/blink_code.png" style={{width:700, height:'auto'}}/></div>

- **Step 3.** 将开发板型号选择为 **XIAO RA4M1**，并选择正确的端口号上传程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/choose_board.png" style={{width:700, height:'auto'}}/></div>

程序成功上传后，你会看到如下输出信息，并且可以观察到 XIAO RA4M1 右侧的橙色 LED 正在闪烁。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/blink.gif" style={{width:700, height:'auto'}}/></div>

恭喜，你已经学会了如何为 XIAO RA4M1 编写并上传程序！
:::note
只有当 XIAO RA4M1 上的用户 LED 引脚被设置为高电平时，LED 才会熄灭；而当该引脚被设置为低电平时，LED 才会点亮。
:::

## 玩转 RGB LED

XIAO RA4M1 自带一个可控的内置 RGB LED，下面是一个示例，用于在红、绿和蓝三种颜色之间平滑地改变 LED 颜色。

- **Step 1.** 下载 `Adafruit_NeoPixel` 库

进入 **Sketch > Include Liarbry > Manage Libraries...**，搜索 **Adafruit_NeoPixel**，安装最新版本。

- **Step 2.** 将以下代码复制到一个新的草稿中：

```cpp
#include <Adafruit_NeoPixel.h>

#define LED_PIN RGB_BUILTIN  // Define the pin for the built-in RGB LED
#define NUM_PIXELS 1         // Number of WS2812 LEDs

Adafruit_NeoPixel pixels(NUM_PIXELS, LED_PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pinMode(PIN_RGB_EN, OUTPUT); // Set up the power pin
  digitalWrite(PIN_RGB_EN, HIGH); //Turn on power to the LED
  pixels.begin();  // Initialize the NeoPixel library
}

void loop() {
    // Transition from Red to Green
  for (int i = 0; i <= 255; i++) {
    pixels.setPixelColor(0, pixels.Color(255 - i, i, 0));  // Red decreases, Green increases
    pixels.show();
    delay(10);  // Adjust delay for smoothness
  }

  // Transition from Green to Blue
  for (int i = 0; i <= 255; i++) {
    pixels.setPixelColor(0, pixels.Color(0, 255 - i, i));  // Green decreases, Blue increases
    pixels.show();
    delay(10);  // Adjust delay for smoothness
  }

  // Transition from Blue to Red
  for (int i = 0; i <= 255; i++) {
    pixels.setPixelColor(0, pixels.Color(i, 0, 255 - i));  // Blue decreases, Red increases
    pixels.show();
    delay(10);  // Adjust delay for smoothness
  }
}

```

- **Step 3.** 将开发板型号选择为 **XIAO RA4M1**，并选择正确的端口号上传程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/rgb_led.gif" style={{width:600, height:'auto'}}/></div>

## 电池与电源管理

是否可以在不增加额外元件的情况下读取电池电压？可以，在 XIAO RA4M1 上，这比以往更简单。在之前的 XIAO 系列成员（例如 [XIAO ESP32C3](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage)）中，读取电池电压需要通过电阻手动连接到 A0。

但在 XIAO RA4M1 上，这个过程被简化了。你现在可以直接使用 `BAT_DET_PIN/P105` 引脚读取电池电压等级，从而简化你的设计和开发。只需记得将 `BAT_READ_EN/P400` 引脚设置为高电平，因为这是启用电池电量读取所必需的。

- **Step 1.** 硬件准备

<table align="center">
 <tr>
     <th>Seeed Studio XIAO RA4M1</th>
        <th>Seeed Studio XIAO 扩展基板（带 Grove OLED）</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

XIAO 扩展板上的 OLED 显示屏使用 I2C 协议，并通过板载的 I2C 电路连接到 XIAO 的 I2C 接口。因此，我们可以直接将 XIAO 插在扩展板上，并通过编程在屏幕上显示内容。

- **Step 2.** 安装 u8g2 库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

- **Step 3.** 复制代码并粘贴到 Arduino IDE 中。

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ WIRE_SCL_PIN, /* data=*/ WIRE_SDA_PIN, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

#define enablePin  BAT_READ_EN  // Pin for enabling battery voltage reading
#define adcPin BAT_DET_PIN     // Analog input pin (GPIO29 in your case)
const float referenceVoltage = 3.3;  // Reference voltage for the ADC
const float voltageDivider = 2.0;    // Voltage divider factor

void setup() {
  Serial.begin(9600);          // Initialize serial communication at 9600 baud
  pinMode(enablePin, OUTPUT);  // Set the enable pin as an output
  digitalWrite(enablePin, HIGH); // Set the pin high to enable battery voltage reading
  u8x8.begin();
  u8x8.setFlipMode(1);   // set number from 1 to 3, the screen word will rotary 180
  u8x8.setFont(u8x8_font_chroma48medium8_r);
}

void loop() {
  int rawValue = analogRead(adcPin);    // Read the analog input value
  float voltage = rawValue * (referenceVoltage / 1023.0) * voltageDivider; // Calculate the voltage
  // Print the raw value and the calculated voltage
  u8x8.setCursor(0, 0);
  u8x8.print("Raw value:0x");
  u8x8.print(rawValue, HEX);
  u8x8.setCursor(0, 2);
  u8x8.print("Voltage:");
  u8x8.print(voltage, 2);
  u8x8.print("V");

  delay(500); // Delay for 500 milliseconds
}

```

- **步骤 4.** 将开发板型号选择为 **XIAO RA4M1**，并选择正确的端口号来上传程序

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/voltage.png" style={{width:600, height:'auto'}}/></div>

## 资源

**硬件设计**
- **📄[数据手册]** [Renesas RA4M1 Datasheet](https://www.renesas.com/us/en/document/dst/ra4m1-group-datasheet )
- **📄[原理图]** [XIAO RA4M1 Schematic](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/XIAO%20RA4M1%20V1.01_SCH_PDF_260114%20.pdf.pdf )
- **🗃️[PCB 设计文件]** [XIAO RA4M1 KiCad Project](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/202003977_XIAO%20RA4M1%20v1.01_SCH&PCB_260114.zip )
- **🗃️[PCB 设计库]** 
  - [XIAO 系列 KiCad 封装库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO 系列 KiCad 原理图符号库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
## 故障排查

### Q1：焊接引脚时我应该注意什么

由于 XIAO RA4M1 体积非常小，在焊接排针时请务必小心，不要将不同的引脚焊接在一起，也不要让焊锡粘到屏蔽罩或其他元器件上。否则可能导致 XIAO 短路或无法正常工作，由此造成的后果将由用户自行承担。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
