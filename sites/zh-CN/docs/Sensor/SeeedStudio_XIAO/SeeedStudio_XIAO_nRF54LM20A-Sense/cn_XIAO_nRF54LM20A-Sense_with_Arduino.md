---
title: 使用 Arduino 开发 XIAO nRF54LM20A Sense
description: 本文介绍如何使用 Arduino IDE 开发 Seeed Studio XIAO nRF54LM20A Sense。
keywords:
  - xiao
  - nrf54lm20a
  - Arduino
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_with_arduino
sku: 100018440
last_update:
  date: 06/22/2026
  author: Brandy
createdAt: '2025-07-15'
updatedAt: '2026-07-21'
url: https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_with_arduino/
---

# 使用 Arduino 开发 Seeed Studio XIAO nRF54LM20A Sense

本节将引导你完成 Arduino 开发所需的硬件和软件准备。按照以下步骤操作，你将完成开发环境搭建、Arduino IDE 配置，并让你的 XIAO 开发板做好编程准备。完成设置后，你可以快速构建、上传并测试提供的示例草图。

## 入门指南

### 硬件准备

你需要准备以下物品：

- 1 x [Seeed Studio XIAO nRF54LM20A Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html)
- 1 x 电脑
- 1 x USB Type-C 线缆

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54LM20A Sense</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  立即获取 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>


### 软件

XIAO nRF54LM20A 支持使用 Arduino IDE 进行开发。开始之前，请先安装并配置 Arduino IDE。

:::tip
如果你是第一次使用 Arduino，我们强烈建议你参考文档 [Getting Started with Arduino](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 根据你的操作系统下载并安装稳定版本的 Arduino IDE。

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>
  <br></br>

- **步骤 2.** 启动 Arduino 应用程序。

- **步骤 3.** 打开 **Arduino IDE** > **Settings**，找到 **Additional Boards Manager URLs**，并添加以下 URL：

```shell
https://raw.githubusercontent.com/lolren/nrf54-arduino-core/main/package_nrf54l15clean_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/1.png" style={{width:800, height:'auto'}}/></div>

- **步骤 4.** 进入 **Tools** > **Board** > **Boards Manager**，搜索 **nRF54L15 Boards** 并安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/2.png" style={{width:800, height:'auto'}}/></div>

- **步骤 5.** 连接开发板后，在 Arduino IDE 中选择以下开发板：

**Tools** > **Board** > **nRF54L15 Boards** > **XIAO nRF54LM20A**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/3.png" style={{width:800, height:'auto'}}/></div>

### 上传程序

下面的示例使用一个简单的闪烁程序。

**步骤 1.** 选择 **Blink** 示例代码进行测试。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/4.png" style={{width:800, height:'auto'}}/></div>

**步骤 2.** 点击 **Upload** 编译并上传草图。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/6.png" style={{width:800, height:'auto'}}/></div><br/>

效果演示：

上传程序并按下复位按钮后，L 指示灯将以 1 秒的间隔闪烁。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/7.gif" style={{width:800, height:'auto'}}/></div>



## 数字

数字引脚通常通过在高、低逻辑电平之间切换来控制外部传感器和执行器。本节使用 Grove Button 和 Grove Buzzer 搭配 Grove Base for XIAO，演示在 XIAO nRF54LM20A 上进行基本的数字输入和输出。

### 硬件准备

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Piezo Buzzer</th>
        <th>Grove - Button</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-08bazaar897330_2.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/p/e/perspectiive.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Buzzer.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
          <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Button.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### 软件准备

根据 XIAO nRF54LM20A 的引脚定义，**D0 / P1.00** 可用于连接 Grove Button，**D1 / P1.31** 可用于连接 Grove Buzzer。

:::tip

- 关于 XIAO nRF54LM20A 的引脚定义，请点击 [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_getting_started/#硬件概述) 查看详情。

:::

新建一个 Arduino 草图并上传以下代码。

```cpp
#define BUTTON_PIN 0
#define BUZZER_PIN 1

int last_val = LOW;

void setup() {
  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  Serial.println("=== Grove Button + Buzzer (Digital Mode) ===");

  pinMode(BUTTON_PIN, INPUT);

  pinMode(BUZZER_PIN, OUTPUT);
  digitalWrite(BUZZER_PIN, LOW);

  Serial.println("Button:  D0 (input)");
  Serial.println("Buzzer:  D1 (output)");
  Serial.println("Press the button to turn on the buzzer...");
}

void loop() {
  int val = digitalRead(BUTTON_PIN);

  digitalWrite(BUZZER_PIN, val);

  if (val != last_val) {
    Serial.print("Button ");
    Serial.print(val ? "PRESSED " : "released");
    Serial.print(" -> Buzzer ");
    Serial.println(val ? "ON" : "OFF");

    last_val = val;
  }

  delay(10);
}
```

### 结果

上传草图后，按下按钮，蜂鸣器会发声，同时串口监视器会打印按钮和蜂鸣器的状态。

:::tip

将串口监视器的波特率设置为 **115200**。

:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_1.png" style={{width:800, height:'auto'}}/></div>

## PWM

PWM 会在固定频率下输出定时数字波形，并通过改变占空比来近似模拟控制信号。它通常用于舵机角度控制、LED 亮度调节、电机转速控制等需要平滑输出控制的应用。

### 硬件准备

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Servo</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedimg2016-06rjmxymiq9lqxkkxxwg6udxfm.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### 软件准备

根据 XIAO nRF54LM20A 的引脚分布，**D0 / P1.00** 可以用作 **Grove Servo** 的 PWM 控制引脚。

:::tip

- 关于 XIAO nRF54LM20A 的引脚分布，点击 [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_getting_started/#硬件概述) 查看详情。

:::

新建一个 Arduino 草稿（sketch），实现 PWM 舵机控制，并配置 PWM 周期等参数。

```cpp
#include <Arduino.h>

#define SERVO_PIN PIN_D0

#define SERVO_FREQ_HZ      50
#define SERVO_PERIOD_US    20000
#define SERVO_MIN_US       500
#define SERVO_MAX_US       2500

#define STEP_FWD_MS        30
#define STEP_RET_MS        30

#define PWM_RESOLUTION     16
#define PWM_MAX_VALUE      65535UL

static void set_angle(int degrees)
{
  if (degrees < 0) degrees = 0;
  if (degrees > 180) degrees = 180;

  uint32_t pulse_us = SERVO_MIN_US +
                      (uint32_t)((uint64_t)degrees *
                                 (SERVO_MAX_US - SERVO_MIN_US) / 180UL);

  uint32_t duty = (uint32_t)((uint64_t)pulse_us *
                             PWM_MAX_VALUE / SERVO_PERIOD_US);

  analogWrite(SERVO_PIN, duty);
}

void setup()
{
  Serial.begin(115200);
  delay(1000);

  Serial.println("=== boot ===");
  Serial.println("Servo control started on P1.0 / PIN_D0");

  pinMode(SERVO_PIN, OUTPUT);

  analogWriteResolution(PWM_RESOLUTION);
  analogWritePinFrequency(SERVO_PIN, SERVO_FREQ_HZ);

  set_angle(0);
  delay(500);
}

void loop()
{
  for (int a = 0; a <= 180; a++) {
    set_angle(a);

    Serial.print("Angle: ");
    Serial.print(a);
    Serial.println(" deg");

    delay(STEP_FWD_MS);
  }

  for (int a = 180; a >= 0; a--) {
    set_angle(a);

    Serial.print("Angle: ");
    Serial.print(a);
    Serial.println(" deg");

    delay(STEP_RET_MS);
  }
}
```

### 结果

上传草稿后，舵机会以大约每秒 33 度的速度从 0° 旋转到 180°，然后再旋转回 0°。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_1.gif" style={{width:800, height:'auto'}}/></div>

同时，当前舵机角度会通过 USB 串口打印输出。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_2.png" style={{width:800, height:'auto'}}/></div>

## 模拟量

模拟输入基于模数转换器（ADC），它将来自外部传感器的连续电压转换为数字值。原始 ADC 数值随后可以映射为实际测量量，例如土壤湿度、电池电压或温度。

### 硬件准备

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Capacitive Soil Moisture Sensor</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/_/2_1_1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Capacitive-Moisture-Sensor-Corrosion-Resistant-p-2580.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### 软件准备

根据 XIAO nRF54LM20A 的引脚分布，**A0 / P1.00** 可以用作模拟输入引脚。

:::tip

- 关于 XIAO nRF54LM20A 的引脚分布，点击 [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_getting_started/#硬件概述) 查看详情。

:::

新建一个 Arduino 草稿，从 **A0 / P1.00** 读取模拟值，并通过 USB 串口每 500 ms 打印一次原始 ADC 数值。

```cpp
#include <Arduino.h>

#define ADC_PIN A0

void setup()
{
  Serial.begin(115200);
  delay(1000);

  Serial.println("ADC demo - XIAO nRF54LM20A Arduino");
  Serial.println("Reading analog input on P1.00 / AIN0 / A0");

  analogReadResolution(12);
}

void loop()
{
  int raw = analogRead(ADC_PIN);

  Serial.print("ADC raw: ");
  Serial.println(raw);

  delay(500);
}
```

### 结果

烧录程序后，将 Grove-Capacitive Soil Moisture Sensor 插入家用盆栽植物中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_3.jpg" style={{width:800, height:'auto'}}/></div>
<br/>
在电脑上打开串口助手，观察输出数值。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_4.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip

电压参考读数表
| 状态     | 传感器输出电压 | 预期 ADC 原始数值|
| -------------- | -------------- | ---------------- |
| 空气中（干燥） | ~2.0–2.4V      | ~3400–4095       |
| 潮湿土壤中       | ~1.3–1.8V      | ~2200–3000       |
| 完全浸没在水中   | ~0.8–1.2V      | ~1365–2048       |

:::

:::caution

由于元器件存在个体差异，不同模块在相同环境下的测量结果可能会有所不同。

:::

## UART

通用异步收发器（UART）是一种标准的异步串行协议。它不需要共享时钟，双方设备使用相同配置的波特率进行通信。通过 TX 与 RX 交叉连接并共地，UART 为控制台日志、模块调试和低带宽点对点通信提供了一种简单的全双工链路。

### 硬件准备

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>USB to TTL Converter</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-317990026-ch340g-usb-to-serial-_ttl_-module_adapter.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
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

### 软件准备

根据 XIAO nRF54LM20A 的引脚分布，**D6 / P1.08** 和 **D7 / P1.09** 可以用作外部 UART 通信的 TX 和 RX 引脚。

:::tip

- 关于 XIAO nRF54LM20A 的引脚分布，点击 [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_getting_started/#硬件概述) 查看详情。

:::

新建一个 Arduino 草稿。该示例通过外部 UART 发送启动消息，回显接收到的字符，并周期性打印心跳消息。

<details>

<summary>Arduino 草稿</summary>

```cpp
#include <Arduino.h>

#define RX_BUF_SIZE 128
#define TX_BUF_SIZE 256
#define HEARTBEAT_INTERVAL_MS 5000

static char rx_buf[RX_BUF_SIZE];
static size_t rx_buf_pos = 0;
static char tx_buf[TX_BUF_SIZE];

static uint32_t heartbeat_count = 0;
static unsigned long last_heartbeat = 0;

static void uart_send_string(const char *str)
{
  Serial1.print(str);
}

static void handle_complete_line()
{
  rx_buf[rx_buf_pos] = '\0';

  if (rx_buf_pos > 0) {
    Serial.print("Received: ");
    Serial.println(rx_buf);

    uart_send_string("\r\nYou sent: ");
    uart_send_string(rx_buf);
  }

  uart_send_string("\r\n");
  rx_buf_pos = 0;
  memset(rx_buf, 0, sizeof(rx_buf));
}

static void process_rx_byte(char c)
{
  static bool last_was_cr = false;

  if (c == '\r' || c == '\n') {
    if (c == '\n' && last_was_cr) {
      last_was_cr = false;
      return;
    }

    uart_send_string("\r\n");
    handle_complete_line();
    last_was_cr = (c == '\r');
    return;
  }

  last_was_cr = false;

  Serial1.write(c);

  if (rx_buf_pos < RX_BUF_SIZE - 1) {
    rx_buf[rx_buf_pos++] = c;
    return;
  }

  uart_send_string("\r\n[Warning] Input too long, buffer cleared.\r\n");
  rx_buf_pos = 0;
  memset(rx_buf, 0, sizeof(rx_buf));
}

void setup()
{
  Serial.begin(115200);
  delay(1000);

  Serial.println("========================================");
  Serial.println("  UART demo for XIAO nRF54LM20A");
  Serial.println("========================================");

  Serial1.begin(115200);

  uart_send_string("\r\n");
  uart_send_string("========================================\r\n");
  uart_send_string("  UART demo for XIAO nRF54LM20A\r\n");
  uart_send_string("========================================\r\n");
  uart_send_string("\r\n");
  uart_send_string("Pin Configuration:\r\n");
  uart_send_string("  TX: P1.08 / D6\r\n");
  uart_send_string("  RX: P1.09 / D7\r\n");
  uart_send_string("  Baud Rate: 115200\r\n");
  uart_send_string("\r\n");
  uart_send_string("Type something and press Enter to see it echoed.\r\n");
  uart_send_string("\r\n");

  Serial.println("UART demo started. Waiting for data...");
  Serial.println("Connect USB-TTL RX to D6/TX, TX to D7/RX, and GND to GND.");

  last_heartbeat = millis();
}

void loop()
{
  while (Serial1.available() > 0) {
    char c = (char)Serial1.read();
    process_rx_byte(c);
  }

  unsigned long now = millis();
  if (now - last_heartbeat >= HEARTBEAT_INTERVAL_MS) {
    last_heartbeat = now;
    heartbeat_count++;

    snprintf(tx_buf, sizeof(tx_buf),
             "\r\n[Heartbeat #%lu] UART running...\r\n",
             (unsigned long)heartbeat_count);

    uart_send_string(tx_buf);

    Serial.print("Heartbeat #");
    Serial.print(heartbeat_count);
    Serial.println(" sent");
  }

  delay(10);
}

```

</details>

### 结果

1. 按照下表顺序进行接线

| XIAO nRF54LM20A | CH340 |
| --------------- | ----- |
| VBUS            | 5V    |
| GND             | GND   |
| P1.08 - TX      | RX    |
| P1.09 - RX      | TX    |

2. 在电脑上打开串口监控软件。外部 UART 会在启动时打印已配置的引脚信息。默认情况下，会周期性打印字符串 `[Heartbeat #number] UART running...`。如果你在外部串口工具中输入字符并按下回车，开发板会回显接收到的整行数据。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_uart_1.png" style={{width:800, height:'auto'}}/></div>

## I2C

I2C 是一种同步、半双工通信协议，使用两根线：SDA 用于数据，SCL 用于时钟。多个设备可以通过地址共享同一总线，使得 I2C 成为传感器、IMU、温湿度模块和小型 OLED 显示屏的常见选择。

### 硬件准备

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Expansion Board Base for XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/z/h/zheng2.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
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

### 软件准备

根据 XIAO nRF54LM20A 的引脚分布，**D4 / P1.03** 和 **D5 / P1.07** 可以配置为 I2C 的 SDA 和 SCL 引脚。

:::tip

- 关于 XIAO nRF54LM20A 的引脚分布，点击 [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_getting_started/#硬件概述) 查看详情。

:::

1. 通过 **Arduino IDE** > **Tools** > **Manage Libraries...** 安装以下库：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/11.png" style={{width:400, height:'auto'}}/></div>

- Adafruit SSD1306
- Adafruit GFX Library
- Adafruit BusIO

2. 新建一个 Arduino 草稿，用于初始化 OLED 并显示文本。

<details>

<summary>Arduino 草稿</summary>

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define OLED_W 128
#define OLED_H 64
#define OLED_ADDR 0x3C
#define OLED_RESET -1

#define OLED_SDA PIN_D4
#define OLED_SCL PIN_D5

Adafruit_SSD1306 display(OLED_W, OLED_H, &Wire, OLED_RESET);

void setup() {
  Serial.begin(115200);
  delay(1000);

  Serial.println("SSD1306 OLED test with pull-ups");

  Wire.setPins(OLED_SDA, OLED_SCL);
  Wire.begin();
  Wire.setClock(100000);

  pinMode(OLED_SDA, INPUT_PULLUP);
  pinMode(OLED_SCL, INPUT_PULLUP);
  delay(20);

  Serial.print("SDA idle = ");
  Serial.println(digitalRead(OLED_SDA));
  Serial.print("SCL idle = ");
  Serial.println(digitalRead(OLED_SCL));

  if (!display.begin(SSD1306_SWITCHCAPVCC, OLED_ADDR, true, false)) {
    Serial.println("SSD1306 init failed");
    while (1) {
      delay(1000);
    }
  }

  Serial.println("SSD1306 init OK");

  display.clearDisplay();
  display.setTextColor(SSD1306_WHITE);
  display.setTextSize(1);

  display.setCursor(28, 20);
  display.println("Hello XIAO");

  display.setCursor(24, 36);
  display.println("nRF54LM20A");

  display.display();
}

void loop() {
}
```

</details>

### 结果

程序运行后，文本 **Hello XIAO nRF54LM20A** 将显示在 OLED 上，同时初始化状态会通过 USB 串口打印出来。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_5.jpg" style={{width:800, height:'auto'}}/></div>

## SPI

SPI 是一种高速、同步、全双工通信协议。它使用专用的 SCLK 线进行定时，MOSI 和 MISO 线进行数据传输，以及 CS/SS 线选择目标设备。由于 SPI 能以简单的硬件实现高吞吐量，因此被广泛用于闪存、SD 卡、高刷新率显示屏和高速传感器。

### 硬件准备

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Round Display for Seeed Studio XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-104030087-seeed-studio-round-display-for-xiao-new-font.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/1-28-Round-Touch-Display-for-Seeed-Studio-XIAO-ESP32.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### 软件准备

:::tip

- 关于 XIAO nRF54LM20A 的引脚分布，点击 [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_getting_started/#硬件概述) 查看详情。

:::

1. 通过 **Arduino IDE** > **Tools** > **Manage Libraries...** 安装以下库：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/10.png" style={{width:400, height:'auto'}}/></div>

- Adafruit GC9A01A
- Adafruit GFX Library
- Adafruit BusIO

2. 新建一个 Arduino 草稿，并编写纯色填充屏幕的逻辑。

<details>

<summary>Arduino 草稿</summary>

```cpp
#include <Arduino.h>
#include <Adafruit_GFX.h>
#include <Adafruit_GC9A01A.h>

#define TFT_CS    PIN_D1
#define TFT_DC    PIN_D3
#define TFT_MOSI  PIN_D10
#define TFT_SCLK  PIN_D8
#define TFT_RST   -1
#define TFT_BL    PIN_D6

#define LCD_W  240
#define LCD_H  240

#define COLOR_BLACK   0x0000U
#define COLOR_WHITE   0xFFFFU
#define COLOR_RED     0xF800U
#define COLOR_GREEN   0x07E0U
#define COLOR_BLUE    0x001FU
#define COLOR_YELLOW  0xFFE0U
#define COLOR_CYAN    0x07FFU
#define COLOR_MAGENTA 0xF81FU
#define COLOR_ORANGE  0xFD20U

Adafruit_GC9A01A tft(TFT_CS, TFT_DC, TFT_MOSI, TFT_SCLK, TFT_RST);

static void fill_screen(uint16_t color)
{
  tft.fillScreen(color);
}

static void demo_solid_colors()
{
  static const uint16_t colors[] = {
    COLOR_RED, COLOR_ORANGE, COLOR_YELLOW,
    COLOR_GREEN, COLOR_CYAN, COLOR_BLUE, COLOR_MAGENTA,
  };

  static const char *names[] = {
    "RED", "ORANGE", "YELLOW", "GREEN", "CYAN", "BLUE", "MAGENTA",
  };

  for (int i = 0; i < 7; i++) {
    Serial.print("Solid: ");
    Serial.println(names[i]);

    fill_screen(colors[i]);
    delay(600);
  }
}

static void demo_color_bars()
{
  static const uint16_t bar_colors[] = {
    COLOR_RED, COLOR_ORANGE, COLOR_YELLOW,
    COLOR_GREEN, COLOR_BLUE, COLOR_MAGENTA,
  };

  const int BAR_W = LCD_W / 6;

  for (int i = 0; i < 6; i++) {
    tft.fillRect(i * BAR_W, 0, BAR_W, LCD_H, bar_colors[i]);
  }

  Serial.println("Color bars");
  delay(2000);
}

void setup()
{
  Serial.begin(115200);
  delay(1000);

  Serial.println("GC9A01 demo - XIAO nRF54LM20A Arduino");

  pinMode(TFT_BL, OUTPUT);
  digitalWrite(TFT_BL, HIGH);

  tft.begin();
  tft.setRotation(0);
  tft.fillScreen(COLOR_BLACK);

  Serial.println("Display ready, starting demo loop");
}

void loop()
{
  demo_solid_colors();
  demo_color_bars();
}
```

</details>
<br/>

### 结果

上传草稿后，程序会按红、橙、黄、绿、青、蓝、品红的顺序刷新屏幕，然后显示彩色条纹图案。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_spi_1.gif" style={{width:600, height:'auto'}}/></div>

串口监视器输出如下所示：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/8-spi-4.png" style={{width:600, height:'auto'}}/></div>

## 特别鸣谢

特别感谢 **lolren** 为 XIAO nRF54LM20A 贡献 Arduino 适配。其代码和 README 清晰且非常有帮助。如果你想进一步了解如何在 Arduino 中使用 XIAO nRF54LM20A，请参考下面的 GitHub 链接。

- [Arduino Core Repository](https://github.com/lolren/nrf54-arduino-core)
- [Author's GitHub Homepage](https://github.com/lolren)


## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
