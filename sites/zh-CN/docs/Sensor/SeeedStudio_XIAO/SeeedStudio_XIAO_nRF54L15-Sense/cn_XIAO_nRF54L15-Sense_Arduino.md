---
description: '本文基于开发者 lolren 为 nRF54L15 编写的 Arduino 内核开发，旨在为 XIAO nRF54L15 用户在 Arduino IDE 上进行开发提供参考教程。'
title: 适用于 Seeed Studio XIAO nRF54L15 的 Arduino
keywords:
  - nRF54L15
  - xiao
  - Arduino
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_6.webp
slug: /xiao_nrf54l15_sense_arduino
last_update:
  date: 4/22/2026
  author: Zeller
createdAt: '2025-04-22'
updatedAt: '2026-04-24'
url: https://wiki.seeedstudio.com/cn/xiao_nrf54l15_sense_arduino/
---

本文基于 XIAO nRF54L15 Sense 与 Arduino 平台进行开发。

## 致谢

特别感谢开发者 **[lolren](https://github.com/lolren)** 为 nRF54L15 芯片提供 Arduino 适配支持。这使得 XIAO nRF54L15 能够在 Arduino 生态中进行开发与实际应用。同时也感谢他在相关开源生态建设中持续付出的努力与贡献。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/lolren/nrf54-arduino-core" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> lolren 的仓库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## 入门指南

### 硬件准备

在开始之前，请准备 XIAO nRF54L15 或 XIAO nRF54L15 Sense 硬件中的任意一款。

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15</th>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991421-XIAO-nRF54L14.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-p-6493.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### 软件

:::tip
如果这是你第一次使用 Arduino，我们强烈建议你参考[Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 根据你的操作系统下载并安装稳定版本的 Arduino IDE。

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>
  <br></br>

- **步骤 2.** 添加开发板管理器 URL

  打开 File → Preferences

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_1.png" style={{width:400, height:'auto'}}/></div><br/>

  在 Additional Boards Manager URLs 字段中添加用于支持 XIAO nRF54L15 的 URL。

```js
https://raw.githubusercontent.com/lolren/nrf54-arduino-core/main/package_nrf54l15clean_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_2.png" style={{width:800, height:'auto'}}/></div><br/>

- **步骤 3.** 选择 **XIAO nRF54L15 / Sense** 和串口

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_3.png" style={{width:800, height:'auto'}}/></div><br/>

- **步骤 4.** 上传程序

```c
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, LOW);
  delay(500);
  digitalWrite(LED_BUILTIN, HIGH);
  delay(500);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_4.png" style={{width:800, height:'auto'}}/></div><br/>

结果：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light3.gif" style={{width:400, height:'auto'}}/></div>

## 数字接口

数字引脚是 MCU 用于读写高/低电平逻辑的接口，可以获取外部数据并控制外设。本节通过实现 LED 的开关控制和 PWM 呼吸灯效果来说明数字引脚的功能。

### 硬件准备

你需要准备 XIAO nRF54L15 Sense 和 Grove 器件。

<table align="center">
  <tr>
      <th>Seeed Studio XIAO nRF54L15 Sense</th>
        <th>Seeed Studio Grove Base for XIAO</th>
         <th>Grove – Chainable RGB LED</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2017-07bazaar501790_10402004845.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="Grove – Chainable RGB LED V2.0" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Chainable-RGB-Led-V2-0.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

### 软件

在 lolren 的仓库中，XIAO nRF54L15 的 D0 到 D10 引脚被重新定义为 PIN_D0 到 PIN_D10。

```c
void setup() {
  pinMode(PIN_D0, OUTPUT);
}

void loop() {
  digitalWrite(PIN_D0, LOW);
  delay(500);
  digitalWrite(PIN_D0, HIGH);
  delay(500);

  for (int i = 0; i <= 255; i++) {
      analogWrite(PIN_D0, i);  // The duty cycle increases gradually.
      delay(5);
    }

  for (int i = 255; i >= 0; i--) {
        analogWrite(PIN_D0, i);  // The duty cycle decreases gradually.
        delay(5);
    }
}
```

### 结果

将 Grove – Chainable RGB LED 连接到 Seeed Studio Grove Base for XIAO 的 0 号引脚。Grove – Chainable RGB LED 将呈现闪烁和渐亮渐暗的呼吸效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_2.gif" style={{width:800, height:'auto'}}/></div><br/>

## UART

UART 是一种异步半双工通信协议，常用于设备调试、日志输出和数据传输。XIAO nRF54L15 提供了一组 UART 引脚。本节通过串口数据打印来演示 UART 的使用方法。

### 硬件准备

你需要准备 XIAO nRF54L15 和 CH340 器件。

<table align="center">
 <tr>
        <th>Seeed Studio XIAO nRF54L15 Sense</th>
        <th>CH340G USB to Serial (TTL) Module&Adapter</th>
 </tr>
 <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-317990026-ch340g-usb-to-serial-_ttl_-module_adapter_1.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### 软件

在 XIAO nRF54L15 上，D6 和 D7 分别对应 TX 和 RX 引脚。在 lolren 的引脚重定义文件中，D6 和 D7 被定义为 **PIN_SERIAL1_RX** 和 **PIN_SERIAL1_TX**。可用的串口为 **Serial1** 或 **Serial2**。

:::tip
如果你不熟悉 XIAO nRF54L15 的引脚分布，请点击 [XIAO nRF54L15 Pin List](https://wiki.seeedstudio.com/cn/xiao_nrf54l15_sense_getting_started/#硬件概述) 查看。
:::

:::caution
不要将 `PIN_SERIAL1_RX` 和 `PIN_SERIAL1_TX` 用于 `Serial`（USB 串口）。
这会干扰默认的下载和调试通道，并可能导致程序烧录失败（SWD/CDC 故障）。
:::

```c
#define RX_PIN PIN_SERIAL1_RX
#define TX_PIN PIN_SERIAL1_TX
#define BAUD 115200

void setup() {
    // Set RX and TX pins
    Serial1.setPins(RX_PIN, TX_PIN);

    // Initialize baud rate and communication configuration
    Serial1.begin(BAUD, SERIAL_8N1); 
}

void loop() {
    Serial1.print("Hello XIAO nRF54L15!\n");
    delay(1000);
}
```

### 结果

:::tip
<br/>
接线
<table align="center">
 <tr>
     <th>XIAO nRF54L15</th>
     <th>CH340G USB 转串口 (TTL) 模块与适配器</th>
 </tr>
  <tr>
     <th>RX</th>
     <th>TX</th>
 </tr>
  <tr>
     <th>TX</th>
     <th>RX</th>
 </tr>
  <tr>
     <th>GND</th>
     <th>GND</th>
 </tr>
   <tr>
     <th>VBUS</th>
     <th>5V</th>
 </tr>
</table>
:::

打开任意串口监视工具，将波特率设置为 115200，即可观察输出数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_5.png" style={{width:800, height:'auto'}}/></div><br/>

## 模拟量

模拟引脚用于通过 ADC 读取连续的电压信号。它们可以连接到各种传感器，例如电位器、光敏电阻、用于温度检测的热敏电阻、模拟灰度传感器和红外传感器。本节通过读取电位器旋钮的调节值来演示模拟引脚的功能。

### 硬件准备

你需要准备 XIAO nRF54L15 Sense 和 Grove 设备。

<table align="center">
 <tr>
     <th>Seeed Studio XIAO nRF54L15 Sense</th>
     <th>Grove-旋转角度传感器</th>
     <th>Seeed Studio Grove Base for XIAO </th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/rotary.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### 软件

在 XIAO nRF54L15 上有四组模拟引脚，即 A0 到 A3。在 lolren 提供的引脚重定义中，这些引脚被定义为 PIN_A0 到 PIN_A3。

:::tip
如果你不熟悉 XIAO nRF54L15 的引脚分布，请点击 [XIAO nRF54L15 Pin List](https://wiki.seeedstudio.com/cn/xiao_nrf54l15_sense_getting_started/#硬件概述) 查看。
:::

```c
const int analogPin = PIN_A0;

void setup() {
  Serial.begin(115200);
  analogReadResolution(12);
}

void loop() {
  int analogValue = analogRead(analogPin);

  // Assume reference voltage is 3.3V
  int voltage_mv = analogValue * 3300 / 4095;

  Serial.printf("ADC value = %d\n", analogValue);
  Serial.printf("Voltage = %d mV\n", voltage_mv);

  delay(1000);
}
```

### 结果

将 Grove-旋转角度传感器连接到 Seeed Studio Grove Base for XIAO。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_5.jpg" style={{width:800, height:'auto'}}/></div><br/>

旋转旋钮，Arduino 串口监视器会打印 ADC 读数值和换算后的模拟电压。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_3.png" style={{width:800, height:'auto'}}/></div><br/>

## I2C

I2C 是一种同步串行通信协议，它通过 SCL 时钟线和 SDA 数据线实现主从设备之间的多设备通信。XIAO nRF54L15 / Sense 提供了两组 I2C 接口。本节通过控制 Expansion Board Base for XIAO 上的 OLED 显示屏来演示 I2C 的功能。

### 硬件准备

你需要准备 XIAO nRF54L15 Sense 和带有 I2C 接口的设备。

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
   <th>Seeed Studio Expansion Board Base for XIAO</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
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
</div>

### 软件

在 XIAO nRF54L15 上，D4 和 D5 分别作为 SCL 和 SDA 引脚。
在 lolren 框架中，引脚 D4 被重定义为 **PIN_WIRE_SCL**，引脚 D5 被重定义为 **PIN_WIRE_SDA**。

:::tip
如果你不熟悉 XIAO nRF54L15 的引脚分布，请点击 [XIAO nRF54L15 Pin List](https://wiki.seeedstudio.com/cn/xiao_nrf54l15_sense_getting_started/#硬件概述) 查看。
:::

```c
#include <U8x8lib.h>
#include <Wire.h>

#define SCL PIN_WIRE_SCL
#define SDA PIN_WIRE_SDA

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(0);
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);

  u8x8.setCursor(2, 10);
  u8x8.print("Hello World!");
  u8x8.setCursor(1, 28);
  u8x8.print("XIAO nRF54L15!");
}
```

### 结果

上传程序后，Expansion Board Base for XIAO 上会显示 “Hello World!” 和 “XIAO nRF54L15!” 这两行文字。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_4.jpg" style={{width:800, height:'auto'}}/></div><br/>

## SPI

SPI 是一种同步串行、全双工通信协议。它通常使用四根线——SCK 时钟、MOSI、MISO 和 CS——在主从设备之间实现高速数据传输。与 I2C 相比，SPI 具有更高的传输速率、更低的延迟以及更简单直观的通信方式。但它需要更多的引脚，每个从设备通常占用一条独立的片选线。它常用于连接 Flash 存储器、SD 卡、LCD/OLED 显示屏、ADC/DAC 模块和高速传感器等高速外设。本节通过连接一块电子纸显示屏来演示 SPI 的用法。

### 硬件准备

你需要准备一块 XIAO nRF54L15 和一款支持 SPI 通信的设备。

 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
   <th>ePaper Driver Board for Seeed Studio XIAO</th>
   <th>2.9" Monochrome eInk</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/epaper-driver-board-for-xiao.jpg" style={{width:250, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-104990853-2.9-monochrome-eink--epaper-display.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>

### 软件

- 安装 GxEPD2 库

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_6.png" style={{width:400, height:'auto'}}/></div><br/>

根据 Lolren 的引脚重定义文件，修改并宏定义 SPI 引脚。

```c
#include <Arduino.h>
#include <SPI.h>
#include <GxEPD2_BW.h>
#include <Fonts/FreeMonoBold9pt7b.h>
#include <Fonts/FreeMonoBold12pt7b.h>

// -------- Pin Definitions (from pins_arduino.h) --------
// PIN_D0=RST, PIN_D1=CS, PIN_D3=DC, PIN_D5=BUSY
// SPI: SCK=PIN_D8, MISO=PIN_D9, MOSI=PIN_D10 (macros are already defined)
#define EPD_RST  PIN_D0   // 0
#define EPD_CS   PIN_D1   // 1
#define EPD_DC   PIN_D3   // 3
#define EPD_BUSY PIN_D2   // 5

// -------- 029BN-T94-D2 Driver --------
GxEPD2_BW<GxEPD2_290_T94_V2, GxEPD2_290_T94_V2::HEIGHT> display(
  GxEPD2_290_T94_V2(EPD_CS, EPD_DC, EPD_RST, EPD_BUSY)
);

const char* LINE1 = "Hello XIAO nRF54L15";

void setup() {
  Serial.begin(115200);
  delay(2000);
  Serial.println("=== EPaper Start ===");

  // Close serial port to avoid TX(D1) interfering with CS(D1)
  delay(100);
  Serial.end();

  // Directly specify using macros, fully consistent with pins_arduino.h
  SPI.setPins(PIN_SPI_SCK, PIN_SPI_MISO, PIN_SPI_MOSI, -1);
  SPI.begin();

  // Pass 0 to disable GxEPD2 internal serial debug output
  display.init(0);
  display.setRotation(1);  // Landscape 296×128
  display.setTextColor(GxEPD_BLACK);
  display.setFullWindow();

  display.firstPage();
  do {
    display.fillScreen(GxEPD_WHITE);

    // ---- LINE1: Large font, upper half ----
    display.setFont(&FreeMonoBold12pt7b);
    int16_t tbx, tby;
    uint16_t tbw, tbh;
    display.getTextBounds(LINE1, 0, 0, &tbx, &tby, &tbw, &tbh);
    uint16_t x1 = (display.width()  - tbw) / 2 - tbx;
    uint16_t y1 = display.height() / 2 - 4;
    display.setCursor(x1, y1);
    display.print(LINE1);

  } while (display.nextPage());

  display.hibernate();

  // Reopen serial port for confirmation after screen refresh
  Serial.begin(115200);
  delay(100);
  Serial.println("=== Done ===");
}

void loop() {
  delay(1000000);
}
```

### 结果

上传程序后，`Hello XIAO nRF54L15` 将显示在电子纸屏幕上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_6.jpg" style={{width:800, height:'auto'}}/></div>

## 常见问题

- Q1：上传程序时，提示没有 py 的路径。

- A：C:\Users\yourname\AppData\Local\Arduino15\packages\nrf54l15clean\hardware\nrf54l15clean\0.6.27\platform.txt。
  - 将 `tools.python3.cmd.windows=py` 修改为 `tools.python3.cmd.windows=python`。
  - 将 `tools.python3.args.windows=-3` 修改为 `tools.python3.args.windows=`。

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
