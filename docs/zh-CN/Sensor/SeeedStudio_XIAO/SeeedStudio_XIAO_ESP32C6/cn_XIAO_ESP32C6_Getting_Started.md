---
description: Seeed Studio XIAO ESP32C6 入门指南。
title: Seeed Studio XIAO ESP32C6 入门指南
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113991254-seeedxiao-esp32c6-font.jpg
keywords:
- XIAO
- ESP32C6
- Seeeduino
slug: /cn/xiao_esp32c6_getting_started
sku: 113991254,102010636,101991470
toc_max_heading_level: 4
sidebar_position: 1
last_update:
  date: 08/05/2024
  author: Spencer
---

# Seeed Studio XIAO ESP32C6 入门指南

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 介绍

Seeed Studio XIAO ESP32C6 由高度集成的 [ESP32-C6 SoC](https://www.espressif.com/en/products/socs/esp32-c6) 提供动力，基于**两个 32 位 RISC-V 处理器**构建，其中高性能（HP）处理器**最高运行频率可达 160 MHz**，低功耗（LP）32 位 RISC-V 处理器最高可达 20 MHz。芯片上集成有 **512KB SRAM 和 4 MB Flash**，为编程提供了更大的空间，为物联网控制场景带来更多可能性。

XIAO ESP32C6 **凭借其增强的无线连接能力，原生支持 Matter**。其无线协议栈支持 **2.4 GHz WiFi 6、Bluetooth® 5.3、Zigbee 和 Thread (802.15.4)**。作为首款兼容 Thread 的 XIAO 成员，它非常适合构建符合 Matter 标准的项目，从而在智能家居中实现互操作性。

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

### 规格参数
<table>
  <tr>
    <th>产品</th>
    <td>XIAO ESP32-C6</td>
    <td><a href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html ">XIAO ESP32-C3</a></td>
    <td><a href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html ">XIAO ESP32-S3</a></td>
  </tr>
  <tr>
    <th>处理器</th>
    <td>Espressif ESP32-C6 SoC<br/>两个 32 位 RISC-V 处理器，高性能内核最高运行频率 160 MHz，低功耗内核最高时钟频率 20 MHz</td>
    <td>Espressif ESP32-C3 SoC<br/>RISC-V 单核 32 位芯片处理器，四级流水线，最高运行频率 160 MHz</td>
    <td>Espressif ESP32-S3R8 SoC<br/>Xtensa LX7 双核 32 位处理器，最高运行频率 240 MHz</td>
  </tr>
  <tr>
    <th rowspan="3">无线</th>
    <td>完整的 2.4GHz Wi-Fi 6 子系统</td>
    <td>完整的 2.4GHz Wi-Fi 子系统</td>
    <td>完整的 2.4GHz Wi-Fi 子系统</td>
  </tr>
  <tr>
    <td colspan="3">Bluetooth Low Energy 5.0</td>
  </tr>
  <tr>
    <td>Zigbee, Thread, IEEE 802.15.4</td>
    <td>/</td>
    <td>/</td>
  </tr>
  <tr>
    <th>片上内存</th>
    <td>512KB SRAM &amp; 4MB Flash</td>
    <td>400KB SRAM &amp; 4MB Flash</td>
    <td>8MB PSRAM &amp; 8MB Flash</td>
  </tr>
  <tr>
    <th rowspan="2">接口</th>
    <td>1x UART<br/>1x LP_UART<br/>1x IIC<br/>1x LP_IIC<br/>1x SPI<br/>11x GPIO(PWM)<br/>7x ADC<br/>1x SDIO</td>
    <td>1x UART<br/>1x IIC<br/>1x SPI<br/>11x GPIO(PWM)<br/>4x ADC</td>
    <td>1x UART<br/>1x IIC<br/>1x SPI<br/>11x GPIO(PWM)<br/>9x ADC<br/>1x User LED<br/>1x Charge LED</td>
  </tr>
  <tr>
    <td colspan="3">1x Reset button<br/>1x Boot button</td>
  </tr>
  <tr>
    <th>尺寸</th>
    <td colspan="3">21 x 17.8mm</td>
  </tr>
  <tr>
    <th>电源</th>
    <td colspan="3">输入电压 (Type-C)：5V<br/>输入电压 (BAT)：3.7V</td>
  </tr>
  <tr>
    <th>功耗模式（典型值）<br/>(供电电压：3.8V)</th>
    <td>Modem-sleep 模式：30 mA<br/>Light-sleep 模式：3.1 mA<br/>Deep Sleep 模式：15 μA</td>
    <td>Modem-sleep 模式：24 mA<br/>Light-sleep 模式：3 mA<br/>Deep Sleep 模式：44 μA</td>
    <td>Modem-sleep 模式：27 mA<br/>Light-sleep 模式：2 mA<br/>Deep Sleep 模式：14 μA</td>
  </tr>
  <tr>
    <th>工作温度</th>
    <td>-40°C ~ 85°C</td>
    <td>-40°C ~ 85°C</td>
    <td>-40°C ~ 65°C</td>
  </tr>
</table>

> [XIAO ESP32-S3 vs ESP32-C3 vs ESP32-C6：哪个更适合你的项目？](https://www.seeedstudio.com/blog/2026/01/14/xiao-esp32-s3-c3-c6-comparison/)

### 特性

- **增强的连接性**：集成 ***2.4*** GHz Wi-Fi 6 (802.11ax)、Bluetooth 5(LE) 和 IEEE 802.15.4 射频连接，支持 **Thread** 和 **Zigbee** 协议的应用。
- **原生 Matter 支持**：支持构建符合 Matter 标准的智能家居项目，确保不同智能设备之间的互操作性。
- **芯片级安全加密**：利用 ESP32-C6 提供安全启动、加密以及可信执行环境（TEE）等特性，增强智能家居项目的安全性。
- **出色的射频性能**：配备板载天线，BLE/Wi-Fi 覆盖范围可达 *80m*，并提供连接外部 UFL 天线的接口，确保可靠的连接。
- **优化功耗表现**：提供四种工作模式，其中深度睡眠模式功耗低至 *15* μA，并支持锂电池充电管理。
- **双 RISC-V 处理器**：集成两个 32 位 RISC-V 处理器，高性能处理器最高运行频率 160 MHz，低功耗处理器最高 *20 MHz*。
- **经典 XIAO 设计**：延续 21 x 17.8mm 拇指大小的外形和单面贴装设计，非常适合可穿戴设备等空间受限的项目。

## 硬件概览

<table align="center">
 <tr>
     <th>XIAO ESP32C6 示意图</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_556525_Slxs4ARdyuXRrJK-_1711096256?w=9854&h=3367&type=image/png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32C6 引脚列表</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_318648_dMoXitoaQiq2N3-a_1711678067?w=1486&h=1228" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

:::tip RF Switch

**RF Switch** 功能允许你通过配置 `GPIO14` 在板载陶瓷天线和外部天线之间切换。要启用此功能，*必须先将 `GPIO3` 设置为低电平*，以激活射频开关控制。  

- **GPIO14 低电平（默认设置）**：设备使用板载陶瓷天线。
- **GPIO14 高电平**：设备切换为外部天线。  

默认情况下，`GPIO14` 被设置为低电平，启用板载天线。若要使用外部天线，请将 `GPIO14` 设置为高电平。请参考下面的示例代码，了解如何配置 `GPIO3` 和 `GPIO14` 以激活外部天线：

```cpp
void setup() {
  pinMode(WIFI_ENABLE, OUTPUT); // pinMode(3, OUTPUT);
  digitalWrite(WIFI_ENABLE, LOW); // digitalWrite(3, LOW); // Activate RF switch control

  delay(100);

  pinMode(WIFI_ANT_CONFIG, OUTPUT); // pinMode(14, OUTPUT);
  digitalWrite(WIFI_ANT_CONFIG, HIGH); // digitalWrite(14, HIGH); // Use external antenna
}
```


:::

## **引脚映射**

| XIAO 引脚               | 功能       | 芯片引脚  | 复用功能              | 描述                                  |
| :---------------------: | :-------: | :-------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS      |           |                    | 电源输入/输出                         |
| GND                     |           |           |                    |                                      |
| 3V3                     | 3V3_OUT   |           |                    | 电源输出                             |
| D0                      | Analog    | GPIO0     | LP_GPIO0           | GPIO, ADC                            |
| D1                      | Analog    | GPIO1     | LP_GPIO1           | GPIO, ADC                            |
| D2                      | Analog    | GPIO2     | LP_GPIO2           | GPIO, ADC                            |
| D3                      | Digital   | GPIO21    | SDIO_DATA1         | GPIO                                 |
| D4                      | SDA       | GPIO22    | SDIO_DATA2         | GPIO, I2C Data                       |
| D5                      | SCL       | GPIO23    | SDIO_DATA3         | GPIO, I2C Clock                      |
| D6                      | TX        | GPIO16    |                    | GPIO, UART Transmit                  |
| D7                      | RX        | GPIO17    |                    | GPIO, UART Receive                   |
| D8                      | SCK       | GPIO19    | SPI_CLK           | GPIO, SPI Clock                      |
| D9                      | MISO      | GPIO20    | SPI_MISO          | GPIO, SPI Data                       |
| D10                     | MOSI      | GPIO18    | SPI_MOSI           | GPIO, SPI Data                       |
| MTDO                    |           | GPIO7     |                    | JTAG                                 |
| MTDI                    |           | GPIO5     |                    | JTAG, ADC                            |
| MTCK                    |           | GPIO6     |                    | JTAG, ADC                            |
| MTMS                    |           | GPIO4     |                    | JTAG, ADC                            |
| EN                      |           | CHIP_PU   |                    | 复位                                  |
| Boot                    |           | GPIO9     |                    | 进入 Boot 模式                       |
| RF Switch Port Select   |           | GPIO14    |                    | 在板载天线和 UFL 天线之间切换        |
| RF Switch Power         |           | GPIO3     |                    | 供电                                  |
| Light                   |           | GPIO15    |                    | 用户指示灯                           |
## 入门

为了帮助你更快地上手 XIAO ESP32C6，请先阅读下面的硬件和软件准备内容，对 XIAO 进行相应准备。

### 硬件准备

你需要准备以下物品：

- 1 x [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- 1 x 电脑
- 1 x USB Type-C 线缆

:::tip
有些 USB 线缆只能供电，不能传输数据。如果你没有 USB 线缆，或者不确定你的 USB 线缆是否可以传输数据，可以查看 [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)。
:::

#### 焊接排针

XIAO ESP32C6 默认出厂不焊接排针，你需要自备排针并将其焊接到 XIAO 对应的引脚上，这样才能连接扩展板或传感器。

由于 XIAO ESP32C6 体积非常小，在焊接排针时请务必小心，不要将不同的引脚焊接到一起，也不要让焊锡粘到屏蔽罩或其他元器件上。否则可能导致 XIAO 短路或无法正常工作，由此造成的后果将由用户自行承担。

#### BootLoader 模式

有时由于我们烧录了错误的程序，会导致 XIAO 看起来丢失端口或无法正常工作。具体表现为：

- 已连接电脑，但找不到 XIAO 的端口号。
- 电脑已连接且端口号出现，但上传程序失败。

当你遇到以上两种情况时，可以尝试让 XIAO 进入 BootLoader 模式，这可以解决大部分设备无法识别和上传失败的问题。具体方法如下：

- **步骤 1**. 按住 XIAO ESP32C6 上的 BOOT 按钮不要松开。
- **步骤 2**. 保持按住 BOOT 按钮，然后通过数据线连接电脑，连接电脑后再松开 BOOT 按钮。
- **步骤 3**. 上传 **Blink** 程序以检查 XIAO ESP32C6 的运行情况。

#### 复位

当程序运行异常时，你可以在上电时按一次 Reset 按钮，让 XIAO 重新执行已上传的程序。

当你在上电时按住 BOOT 键，然后再按一次 Reset 键，也可以进入 BootLoader 模式。

### 软件准备

XIAO ESP32C6 推荐使用 Arduino IDE 作为编程工具，因此你需要在软件准备阶段完成 Arduino 的安装。

:::tip
如果这是你第一次使用 Arduino，我们强烈建议你参考 [Getting Started with Arduino](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。

并且 XIAO ESP32C6 的板卡包至少需要 **2.0.8** 版本才可用。

:::

- **步骤 1.** 根据你的操作系统下载并安装稳定版本的 Arduino IDE。

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>

  <br></br>
- **步骤 2.** 启动 Arduino 应用程序。
- **[步骤 3](#add-board).**  在 Arduino IDE 中添加 XIAO ESP32C6 板卡包并点击 `OK`。
- **步骤 4.** 关闭 Arduino IDE 并重新打开。

#### 添加 XIAO-C6 开发板 {#add-board}

要安装 XIAO ESP32C6 开发板，请按照以下步骤操作：

```
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

1. 将上述开发板管理器 URL 添加到 Arduino IDE 的首选项中，该链接取自 [Installing - Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html#installing-using-arduino-ide)。

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/boards_url.png" style={{width: 'auto', height: 'auto'}}/></div>

2. 下载 XIAO ESP32C6 开发板包。

:::note
仅当 esp32 开发板版本大于 `3.0.0` 时可用。
:::

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/install_board.png" style={{width: 'auto', height: 'auto'}}/></div>

3. 选择 `XIAO_ESP32C6` 变体。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/select_xiao_c6.png" style={{width:1000, height:'auto'}}/></div>

现在开始享受编程的乐趣吧 ✨。

#### 运行你的第一个 Blink 程序

- **步骤 1.** 启动 Arduino 应用程序。

- **步骤 2.** 依次进入 **File > Examples > 01.Basics > Blink**，打开该示例程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **步骤 3.** 将开发板型号选择为 **XIAO ESP32C6**，并选择正确的端口号后上传程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/upload_program.png" style={{width:1000, height:'auto'}}/></div>

当程序成功上传后，你会看到如下输出信息，并且可以观察到 XIAO ESP32C6 右侧的橙色 LED 正在闪烁。

<table>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6_flash_firmware.png" style={{width:680, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6-blink.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

## 电池使用

XIAO ESP32C6 系列内置电源管理芯片，可通过电池独立供电，也可以通过 USB 接口为电池充电。

在为你的 XIAO 连接电池时，我们建议使用合格的可充电 3.7V 锂电池。焊接电池时，请仔细区分正负极。负极焊盘位于丝印 “D8” 附近的左侧，而正极焊盘位于丝印 “D5” 附近的右侧。

:::caution
当使用电池供电时，5V 引脚上不会有电压输出。
:::

:::tip 红色指示灯

XIAO ESP32C6 具有一个用于电池充电的红色指示灯，与 [XIAO ESP32S3](/cn/xiao_esp32s3_getting_started/#电池使用) 类似：

XIAO ESP32C6 的红灯状态如下：

- 未连接电池时：
  - 插入 Type-C 线缆时红灯点亮，30 秒后熄灭。
- 连接电池并插入 Type-C 线缆进行充电时：
  - 红灯闪烁。
- 通过 Type-C 连接将电池充满时：
  - 红灯熄灭。

:::

## 读取电池电压

要在 XIAO ESP32C6 上监测电池电压，与 [XIAO ESP32C3](/cn/XIAO_ESP32C3_Getting_Started/#检查电池电压) 类似，你需要焊接一个 200k 电阻组成 1:2 分压结构。该设置会将电压减半，从而可以通过 A0 模拟端口安全地进行监测。

### 示例代码

下面的代码在 A0 端口初始化 ADC，并对 16 次读数取平均来计算电池电压，同时根据 1:2 的分压比进行修正。

```cpp
#include <Arduino.h>

void setup() {
  Serial.begin(115200);
  pinMode(A0, INPUT);         // Configure A0 as ADC input
}

void loop() {
  uint32_t Vbatt = 0;
  for(int i = 0; i < 16; i++) {
    Vbatt += analogReadMilliVolts(A0); // Read and accumulate ADC voltage
  }
  float Vbattf = 2 * Vbatt / 16 / 1000.0;     // Adjust for 1:2 divider and convert to volts
  Serial.println(Vbattf, 3);                  // Output voltage to 3 decimal places
  delay(1000);                                // Wait for 1 second
}
```

这段代码从 ADC 进行 16 次测量并取平均值，然后根据 1:2 的分压比进行补偿，以三位小数的精度输出以伏特为单位的电池电压。

## 深度睡眠模式与唤醒

XIAO ESP32C6 具有完整的深度睡眠模式和唤醒功能。这里我们将展示 ESP 提供的两个较为常见的示例。

### 示例 1：外部唤醒的深度睡眠

此示例代码展示了如何使用外部触发作为唤醒源进入深度睡眠，以及如何在 RTC 内存中存储数据以便在重启后继续使用。

```cpp
/*
Hardware Connections
======================
Push Button to GPIO 0 pulled down with a 10K Ohm
resistor

NOTE:
======
Bit mask of GPIO numbers which will cause wakeup. Only GPIOs
which have RTC functionality can be used in this bit map.
For different SoCs, the related GPIOs are:
- ESP32: 0, 2, 4, 12-15, 25-27, 32-39
- ESP32-S2: 0-21
- ESP32-S3: 0-21
- ESP32-C6: 0-7
- ESP32-H2: 7-14
*/

#define BUTTON_PIN_BITMASK (1ULL << GPIO_NUM_0) // GPIO 0 bitmask for ext1

RTC_DATA_ATTR int bootCount = 0;

/*
Method to print the reason by which ESP32
has been awaken from sleep
*/
void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("Wakeup caused by ULP program"); break;
    default : Serial.printf("Wakeup was not caused by deep sleep: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000); //Take some time to open up the Serial Monitor

  //Increment boot number and print it every reboot
  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));

  //Print the wakeup reason for ESP32
  print_wakeup_reason();

  /*
  First we configure the wake up source
  We set our ESP32 to wake up for an external trigger.
  There are two types for ESP32, ext0 and ext1, ext0 
  don't support ESP32C6 so we use ext1.
  */

  //If you were to use ext1, you would use it like
  esp_sleep_enable_ext1_wakeup(BUTTON_PIN_BITMASK,ESP_EXT1_WAKEUP_ANY_HIGH);

  //Go to sleep now
  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}

void loop(){
  //This is not going to be called
}
```

### 示例 2：使用定时器唤醒的深度睡眠

ESP32 提供了深度睡眠模式，以实现高效节能，因为功耗是物联网应用中的一个重要因素。在这种模式下，CPU、大部分 RAM，以及所有由 APB_CLK 提供时钟的数字外设都会断电。芯片中唯一仍可保持上电的部分是：RTC 控制器、RTC 外设和 RTC 存储器。

此代码展示了最基础的使用定时器唤醒的深度睡眠，以及如何在 RTC 存储器中存储数据以在重启后继续使用。

```cpp
/*
Simple Deep Sleep with Timer Wake Up
=====================================
This code is under Public Domain License.

Author:
Pranav Cherukupalli <cherukupallip@gmail.com>
*/

#define uS_TO_S_FACTOR 1000000ULL  /* Conversion factor for micro seconds to seconds */
#define TIME_TO_SLEEP  5        /* Time ESP32 will go to sleep (in seconds) */

RTC_DATA_ATTR int bootCount = 0;

/*
Method to print the reason by which ESP32
has been awaken from sleep
*/
void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("Wakeup caused by ULP program"); break;
    default : Serial.printf("Wakeup was not caused by deep sleep: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000); //Take some time to open up the Serial Monitor

  //Increment boot number and print it every reboot
  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));

  //Print the wakeup reason for ESP32
  print_wakeup_reason();

  /*
  First we configure the wake up source
  We set our ESP32 to wake up every 5 seconds
  */
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
  Serial.println("Setup ESP32 to sleep for every " + String(TIME_TO_SLEEP) +
  " Seconds");

  /*
  Next we decide what all peripherals to shut down/keep on
  By default, ESP32 will automatically power down the peripherals
  not needed by the wakeup source, but if you want to be a poweruser
  this is for you. Read in detail at the API docs
  http://esp-idf.readthedocs.io/en/latest/api-reference/system/deep_sleep.html
  Left the line commented as an example of how to configure peripherals.
  The line below turns off all RTC peripherals in deep sleep.
  */
  //esp_deep_sleep_pd_config(ESP_PD_DOMAIN_RTC_PERIPH, ESP_PD_OPTION_OFF);
  //Serial.println("Configured all RTC Peripherals to be powered down in sleep");

  /*
  Now that we have setup a wake cause and if needed setup the
  peripherals state in deep sleep, we can now start going to
  deep sleep.
  In the case that no wake up sources were provided but deep
  sleep was started, it will sleep forever unless hardware
  reset occurs.
  */
  Serial.println("Going to sleep now");
  Serial.flush(); 
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}

void loop(){
  //This is not going to be called
}
```

:::tip
如果你想学习更多关于深度睡眠模式和唤醒功能的用法，可以在 Arduino IDE 中找到由 ESP 官方为该芯片编写的更多示例程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/16.png" style={{width:600, height:'auto'}}/></div>
:::

## 资源

**硬件设计**
- **📄[Datasheet]** [Espressif ESP32-C6 数据手册](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/esp32-c6_datasheet_en.pdf )
- **📄[Schematic]** [XIAO ESP32-C6 原理图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO_ESP32_C6_v1.0_SCH_260114.pdf )
- **🗃️[PCB Design Files]** [XIAO ESP32-C6 KiCad 工程](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO_ESP32_C6_v1.0_SCH&PCB_260114.zip )
- **🗃️[PCB Design Libraries]** 
  - [XIAO 系列 KiCad 封装库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO 系列 KiCad 原理图符号库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Diagram]** [XIAO ESP32-C6 引脚分布表](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/XIAO_ESP32C6_Pinout.xlsx )

**结构设计**
- **📄[3D Model]** [XIAO ESP32-C6 三维模型](https://grabcad.com/library/seeed-studio-xiao-esp32-c6-1 )

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
