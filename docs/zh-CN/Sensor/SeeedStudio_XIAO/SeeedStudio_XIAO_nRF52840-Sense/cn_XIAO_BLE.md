---
description: Seeed Studio XIAO nRF52840 系列入门指南
title: Seeed Studio XIAO nRF52840 系列入门指南
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg
slug: /cn/XIAO_BLE
last_update:
  date: 2024-11-28T11:15:24+08:00
  author: Clara
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seeed Studio XIAO nRF52840 系列入门指南

<meta name="google-site-verification" content="2bq3L0F_PFVokQM-qT-al7x9FcSNJOO8TtJfAHW43lE" />

<div className="w-full overflow-x-auto">
  <table className="min-w-full">
    <tr>
      <th>XIAO nRF52840</th>
      <th>XIAO nRF52840 Sense</th>
      <th>XIAO nRF52840 Plus</th>
      <th>XIAO nRF52840 Sense Plus</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/nrf52840_front.jpg"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840sence.png"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840plus.png"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840senceplus.png"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> 立即购买 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> 立即购买 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> 立即购买 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> 立即购买 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

作为 Seeed Studio XIAO 系列中的首款无线产品，**Seeed Studio XIAO nRF52840** 配备了强大的 **Nordic nRF52840 MCU**，集成了 **Bluetooth 5.0** 连接功能。同时，它具有**小巧精致的外形尺寸**，可用于可穿戴设备和物联网项目。**单面表贴设计**和板载**蓝牙天线**可以极大地促进物联网项目的快速部署。

此外，还有这款开发板的高级版本，**Seeed Studio XIAO nRF52840 Sense**。它集成了两个额外的板载传感器。其中一个是**脉冲密度调制 (PDM) 数字麦克风**。它可以实时接收音频数据，允许用于音频识别。另一个是**6轴惯性测量单元 (IMU)**，这个IMU在TinyML项目（如手势识别）中非常有用。这些板载传感器为用户提供了极大的便利，同时开发板超小型化。

新升级的 **XIAO nRF52840 Plus 和 XIAO nRF52840 Sense Plus** 在功能性和可用性方面提供了显著的提升。多功能引脚数量增加到了 **20** 个，增加了 **I2S** 和 **SPI** 资源以支持更复杂的项目，**NFC 引脚**已暴露以便更容易集成到物联网和智能卡应用中，**BAT 引脚**已重新定位以提供更好的焊接便利性，从而带来更友好的硬件体验。

与 Seeed Studio XIAO RP2040 相比，Seeed Studio XIAO nRF52840 包含**更丰富的接口**。首先要注意的是，**近场通信 (NFC) 接口**在开发板上是功能性的。其次，在 Type-C 接口侧面有一个小型**复位按钮**。在另一侧，有一个 **3合1 LED（用户 LED）**以及一个**充电 LED**，用于在连接电池时指示充电状态。有 **11 个数字 I/O** 可用作 **PWM 引脚**和 **6 个模拟 I/O** 可用作 **ADC 引脚**。它支持所有三种常见的串行接口，如 **UART、I2C 和 SPI**。与 Seeed Studio XIAO RP2040 相同，它有一个**板载 2 MB 闪存**，这意味着它也可以使用 **Arduino、MicroPython、CircuitPython 或其他编程语言**进行编程。

Seeed Studio XIAO nRF52840 Sense 与 Seeed Studio XIAO 扩展板兼容。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 特性

- 强大的无线功能：Bluetooth 5.0 配备板载天线
- 强大的 CPU：Nordic nRF52840，ARM® Cortex®-M4 32位处理器带 FPU，64 MHz
- 超低功耗：待机功耗小于 5μA
- 电池充电芯片：支持锂电池充放电管理
- 板载 2 MB 闪存
- 板载 PDM 麦克风（仅在 Seeed Studio XIAO nRF52840 Sense 中）
- 板载 6轴 LSM6DS3TR-C IMU（仅在 Seeed Studio XIAO nRF52840 Sense 中）
- 超小尺寸：21 x 17.8mm，Seeed Studio XIAO 系列经典外形尺寸，适用于可穿戴设备
- 丰富的接口：XIAO nRF52840 (Sense) 中有 1xUART、1xI2C、1xSPI、1xNFC、1xSWD、11xGPIO(PWM)、6xADC；XIAO nRF52840 (Sense) Plus 中有 2xUART、1xI2C、2xSPI、1xI2S、1xNFC、1xSWD、18xGPIO(PWM)、6xADC
- 单面元件，表贴设计

## 规格对比

<div class="table-center">
 <table align="center">
  <tr>
      <th>项目</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840 Sense</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840 Plus</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840 Sense Plus</th>
  </tr>
  <tr>
      <th>处理器</th>
      <td colspan="4" align="center">Nordic nRF52840，ARM® Cortex®-M4 32位处理器，带FPU，64 MHz</td>
  </tr>
  <tr>
      <th>无线连接</th>
      <td colspan="4" align="center">Bluetooth LE 5.2/NFC</td>
  </tr>
  <tr>
      <th>内存</th>
      <td colspan="4" align="center">256 KB RAM，1MB Flash 2MB板载Flash</td>
  </tr>
  <tr>
      <th>内置传感器</th>
      <td align="center">无</td>
      <td align="center">6轴IMU (LSM6DS3TR-C)，PDM麦克风</td>
      <td align="center">无</td>
      <td align="center">6轴IMU (LSM6DS3TR-C)，PDM麦克风</td>
  </tr>
  <tr>
      <th>接口</th>
      <td colspan="2" align="center">1xI2C，1xUART，1xSPI</td>
      <td colspan="2" align="center">1xI2C，2xUART，2xSPI，1xI2S</td>
  </tr>
  <tr>
      <th>PWM/模拟引脚</th>
      <td colspan="2" align="center">11/6</td>
      <td colspan="2" align="center">20/6</td>
  </tr>
  <tr>
      <th>板载按钮</th>
      <td colspan="4" align="center">复位按钮</td>
  </tr>
  <tr>
      <th>板载LED</th>
      <td colspan="4" align="center">三合一LED/充电LED</td>
  </tr>
  <tr>
      <th>电池充电芯片</th>
      <td colspan="4" align="center">BQ25101</td>
  </tr>
  <tr>
      <th>编程语言</th>
      <td colspan="4" align="center">Arduino/MicroPython/CircuitPython</td>
  </tr>
  </table>
</div>

## 硬件概述

<Tabs>
<TabItem  value="52540(Sense)" label="XIAO nRF52840/XIAO nRF52840 Sense" default>

<table align="center">
  <tr>
    <th>XIAO nRF52840/XIAO nRF52840 Sense 正面指示图</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/front-pinout-4.jpg" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF52840/XIAO nRF52840 Sense 背面指示图</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/back-pinout-5.jpg" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF52840/XIAO nRF52840 Sense 引脚列表</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/pinout2.png" style={{width:1000, height:'auto'}}/></div></td>
  </tr>
</table>

</TabItem>
 <TabItem value="52840Plus" label="XIAO nRF52840 Plus/XIAO nRF52840 Sense Plus" default>

 <table align="center">
  <tr>
    <th>XIAO nRF52840 Plus 正面指示图</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/plus_front.png" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF52840 Plus 背面指示图</th>
  </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/plus_back.png" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF52840 Plus 引脚列表</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/plus_pinout.png" style={{width:1000, height:'auto'}}/></div></td>
  </tr>
 </table>

</TabItem>

</Tabs>

## 两个Arduino库

Seeed Studio XIAO nRF52840在一个小巧的板子上集成了许多功能，有时可能无法发挥每个功能的最佳性能。因此，Seeed发布了两个Arduino库，让它能够**最大化发挥每个功能的能力**。因此：

- 如果您想要应用**蓝牙功能**和"**低功耗功能**"，建议使用`Seeed nRF52 Boards`库。
- 如果您想要在**嵌入式机器学习应用**中使用它或应用"**IMU和PDM高级功能**"，建议使用`Seeed nRF52 mbed-enabled Boards`库。
- 当涉及到基本用法时，两个库都支持得很好，例如**LED、数字、模拟、串口、I2C、SPI**。

这两个库支持的引脚定义可能略有不同，Seeed将持续更新wiki直到明确为止。

:::tip

1. 如果您使用Seeed nRF52 Boards的板载包，串口功能可能无法编译。解决方案是在您的代码中添加`#include <Adafruit_TinyUSB.h>`这一行。您可以从以下地址下载此包：https://github.com/adafruit/Adafruit_TinyUSB_Arduino

2. 如果您喜欢更简单的方法，可以从一开始就选择Seeed nRF52 mbed-enabled Boards。它支持串口功能的编译，无需额外修改。

:::

## 入门指南

首先，我们将把Seeed Studio XIAO nRF52840 (Sense)连接到计算机，并从Arduino IDE上传一个简单的代码来检查板子是否正常工作。

### 硬件设置

您需要准备以下物品：

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) 或 [Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x 计算机
- 1 x USB Type-C数据线

:::tip
某些USB线只能供电而无法传输数据。如果您没有USB线或不知道您的USB线是否可以传输数据，可以查看[Seeed USB Type-C支持USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)。
:::
通过USB Type-C数据线将Seeed Studio XIAO nRF52840 (Sense)连接到您的计算机。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/bletpyecconnect.png" alt="pir" width={500} height="auto" /></p>

### 软件设置

- **步骤1.** 根据您的操作系统下载并安装最新版本的Arduino IDE

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width={700} height="auto" /></a></p>

- **步骤2.** 启动Arduino应用程序

- **步骤3.** 将Seeed Studio XIAO nRF52840 (Sense)板包添加到您的Arduino IDE

导航到**文件 > 首选项**，在**"附加开发板管理器网址"**中填入以下网址：
    *https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json*

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width="700" height="auto" /></p>

导航到**工具 > 开发板 > 开发板管理器...**，在搜索框中输入关键词"**seeed nrf52**"，选择您想要的板子的最新版本并安装。您可以同时安装两个。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528401.png" alt="pir" width={700} height="auto" /></p>

- **步骤4.** 选择您的开发板和端口

**开发板**

安装板包后，导航到**工具 > 开发板**并选择您想要的板子，继续选择"**Seeed XIAO nRF52840 Sense**"。现在我们已经完成了为Arduino IDE设置Seeed Studio XIAO nRF52840 (Sense)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528402.png" alt="pir" width={700} height="auto" /></p>

**端口**

导航到**工具 > 端口**并选择已连接的Seeed Studio XIAO nRF52840 (Sense)的串口名称。这通常是COM3或更高（**COM1**和**COM2**通常保留给硬件串口）。已连接的Seeed Studio XIAO nRF52840 (Sense)的串口通常包含括号，其中写着**Seeed Studio XIAO nRF52840**（对于**Seeed Studio XIAO nRF52840**）或**Seeed Studio XIAO nRF52840 Sense**（对于**Seeed Studio XIAO nRF52840 Sense**）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/port.png" alt="pir" width={550} height="auto" /></p>

- **步骤5.** 导航到**文件 > 示例 > 01.Basics > Blink**打开**Blink**示例

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={550} height="auto" /></p>

- **步骤6.** 点击**上传**按钮将Blink示例代码上传到板子

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={500} height="auto" /></p>

上传完成后，您将看到内置的红色LED以每次闪烁间隔1秒的频率闪烁。这意味着连接成功，现在您可以使用Seeed Studio XIAO nRF52840 (Sense)探索更多项目！

## 使用内置三合一LED

Seeed Studio XIAO nRF52840 (Sense) 具有一个**板载三合一LED**，用户可以对其进行编程。现在您将学习如何使用Arduino逐一控制RGB颜色！

您首先需要了解，当通过代码控制时，这个LED的行为与通常情况不同。当我们给出**低电平信号**时**LED点亮**，当我们给出**高电平信号**时**LED熄灭**。这是因为这个LED由共阳极控制，只有在低电平信号下才会点亮。

示例代码如下：

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   
}
```

在这里，即使使用了 **HIGH**，LED 也会是 **关闭** 状态。您需要将 **HIGH** 替换为 **LOW** 来 **打开** LED。

请参考以下 LED 的引脚映射，并在您的代码中使用它们：

- 红色 LED = LED_BUILTIN 或 LED_RED
- 蓝色 LED = LED_BLUE
- 绿色 LED = LED_GREEN

## 功耗验证

Seeed Studio XIAO nRF52840 具有低功耗特性，这里我们提供一种验证方法。强烈建议在此处使用 `Seeed nRF52 Boards` 库。

- **步骤 1.** 使用 **JLink** 下载器为 Seeed Studio XIAO nRF52840 (Sense) 刷写[引导加载程序固件](https://github.com/0hotpotman0/BLE_52840_Core/blob/main/bootloader/Seeed_XIAO_nRF52840_Sense/Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex)。

:::note
如果您使用的是 Seeed Studio XIAO nRF52840 的出厂固件，或者从未对 Seeed Studio XIAO nRF52840 的固件进行过更改，您可以跳过此步骤。
:::

- **步骤 2.** 在此处使用 `Seeed nRF52 Boards` 库。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528403.png" alt="pir" width={800} height="auto" /></p>

- **步骤 3.** 在此处上传 deep_sleep 演示程序并使用 **Arduino** 运行它

```cpp
// The MIT License (MIT)
// Copyright (c) 2019 Ha Thach for Adafruit Industries

#include "SdFat.h"
#include "Adafruit_SPIFlash.h"

// Uncomment to run example with custom SPI and SS e.g with FRAM breakout
// #define CUSTOM_CS   A5
// #define CUSTOM_SPI  SPI

#if defined(CUSTOM_CS) && defined(CUSTOM_SPI)
  Adafruit_FlashTransport_SPI flashTransport(CUSTOM_CS, CUSTOM_SPI);

#elif defined(ARDUINO_ARCH_ESP32)
  // ESP32 use same flash device that store code.
  // Therefore there is no need to specify the SPI and SS
  Adafruit_FlashTransport_ESP32 flashTransport;

#else
  // On-board external flash (QSPI or SPI) macros should already
  // defined in your board variant if supported
  // - EXTERNAL_FLASH_USE_QSPI
  // - EXTERNAL_FLASH_USE_CS/EXTERNAL_FLASH_USE_SPI
  #if defined(EXTERNAL_FLASH_USE_QSPI)
    Adafruit_FlashTransport_QSPI flashTransport;

  #elif defined(EXTERNAL_FLASH_USE_SPI)
    Adafruit_FlashTransport_SPI flashTransport(EXTERNAL_FLASH_USE_CS, EXTERNAL_FLASH_USE_SPI);

  #else
    #error No QSPI/SPI flash are defined on your board variant.h !
  #endif
#endif

Adafruit_SPIFlash flash(&flashTransport);


/*  If you want to use a specific flash device, for example for a custom built board, first look for it in Adafruit_SPIFlash\src\flash_devices.h
 *  If it isn't in there you need to create your own definition like the W25Q80DLX_EXAMPLE example below.
 *  These definitions need to be edited to match information on the data sheet of the flash device that you want to use.
 *  If you are not sure what the manufacture ID, memory type and capacity values should be, try running the sketch anyway and look at the serial output
 *  The flash device will report these values to you as a single hexadecimal value (the JDEC ID)
 *  For example, the first device on the list - the W25Q80DLX - will report its JDEC ID as 0xef4014, which is made of these three values:
 *  manufacturer_id = 0xef
 *  memory_type     = 0x40
 *  capacity        = 0x14
 *  With this macro properly defined you can then create an array of device definitions as shown below, this can include any from the list of devices in flash_devices.h, and any you define yourself here
 *  You need to update the variable on line 71 to reflect the number of items in the array
 *  You also need to uncomment line 84 and comment out line 81 so this array will be passed to the flash memory driver. 
 */
//Example of a user defined flash memory device:
//#define W25Q80DLX_EXAMPLE                                                               \
//  {                                                                            \
//    .total_size = (1 << 20), /* 1 MiB */                                       \
//        .start_up_time_us = 5000, .manufacturer_id = 0xef,                     \
//    .memory_type = 0x40, .capacity = 0x14, .max_clock_speed_mhz = 80,         \
//    .quad_enable_bit_mask = 0x02, .has_sector_protection = false,              \
//    .supports_fast_read = true, .supports_qspi = true,                         \
//    .supports_qspi_writes = false, .write_status_register_split = false,       \
//    .single_status_byte = false, .is_fram = false,                             \
//  }

/*
 * Create an array of data structures and fill it with the settings we defined above.
 * We are using two devices, but more can be added if you want.
 */
//static const SPIFlash_Device_t my_flash_devices[] = {
//    W25Q80DLX_EXAMPLE,
//};
/*
 * Specify the number of different devices that are listed in the array we just created. If you add more devices to the array, update this value to match.
 */
//const int flashDevices = 1;


#include <bluefruit.h>

bool deepPowerDown(Adafruit_SPIFlash& flash, Adafruit_FlashTransport& transport) {
  uint32_t id_before = flash.getJEDECID();

  transport.begin();
  transport.runCommand(0xB9);  // SPI deep power-down command
  delay(10);

  uint32_t id_after = flash.getJEDECID();

  return (id_after == 0xFFFFFF || id_after == 0xFFFFFFFF);
}

void setup() {
  flash.begin();
  Bluefruit.begin();

  if (!deepPowerDown(flash, flashTransport)) {
    pinMode(LED_BUILTIN, OUTPUT);
    digitalWrite(LED_BUILTIN, LOW);
    while (1) {
      yield();
    }
  }

  flash.end();

  sd_power_system_off();
}

void loop() {
  // nothing to do
}
```

:::tip
在此，我们要特别感谢代码作者 → ***daCoder*** ←
:::

**如果您想了解此示例的更多详细信息，请点击[这里](https://forum.seeedstudio.com/t/xiao-sense-accelerometer-examples-and-low-power/270801)**

## 电池充电电流

电池充电电流可选择50mA或100mA，您可以将**Pin13**设置为高电平或低电平来将其更改为50mA或100mA。低电流充电电流在输入模式下设置为高电平，高电流充电电流在输出模式下设置为低电平。

**低充电电流**

```cpp
void setup(){
pinMode (P0_13, OUTPUT);
}
void loop() {
digitalWrite(P0_13, HIGH);
}
```

**High Charging Current**

```cpp
void setup(){
pinMode (P0_13, OUTPUT);
}
void loop() {
digitalWrite(P0_13, LOW);
}
```

## 访问 SWD 引脚进行调试和重新刷写引导程序

**所需硬件**

- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- Jlink

**所需软件**

需要从网站下载 [Segger](https://www.segger.com/downloads/jlink/) 软件。

- **步骤 1.** 使用 Jlink 连接以下引脚：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD1.png" alt="pir" width={300} height="auto" /></p>

- **步骤 2.** 启动 J-Flash 并搜索 nRF52840，创建一个新项目：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD2.png" alt="pir" width={500} height="auto" /></p>

- **步骤 3.** 点击"Target"然后选择"Connect"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD3.png" alt="pir" width={500} height="auto" /></p>

- **步骤 4.** 将 bin 或 [hex 文件](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex)拖拽到软件中。然后依次按 F4 和 F5。重新刷写完成。

## 常见问题

### Q1：我的 Arduino IDE 在上传代码到开发板时卡住了

您可以首先尝试通过单击一次"复位按钮"来**复位**开发板。如果不起作用，快速双击进入**引导程序模式**。如果这也不起作用，请断开开发板与 PC 的连接，然后重新连接开发板。

### Q2：我的开发板在 Arduino IDE 中没有显示为串行设备

您可以首先尝试通过单击一次"复位按钮"来**复位**开发板。如果不起作用，快速双击进入**引导程序模式**。

### Q3：使用 XIAO nRF52840 (Sense) 进行电池充电时有什么注意事项？

当 P0.14 (D14) 在 3.3V 高电平时关闭 ADC 功能时，P0.31 将处于 3.6V 的输入电压限制。存在烧毁 P0.31 引脚的风险。

目前对于这个问题，我们建议用户在电池充电期间不要关闭 P0.14 (D14) 的 ADC 功能或将 P0.14 (D14) 设置为高电平。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/14.png" alt="pir" width={800} height="auto" /></p>

### Q4：通电时绿灯如何表现？

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/nRF_RGB.png" alt="nRF52840 RGB 原理图" width="120" height="auto" /></p>

`P0.17` 引脚用于控制绿色指示灯行为，指示充电状态：

- 低电平：当**充电**正在进行时。
- 高电平：当电池**未充电**或**充满电**时。

当处于低电平时，`RED_CHG` LED 将点亮。

更多详细信息，请查看 PMIC 数据手册：[BQ25100](https://www.ti.com/lit/ds/symlink/bq25100a.pdf) 和 [XIAO nRF52840 数据手册](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)。

## 资源

### Seeed Studio XIAO nRF52840

- **[电子书]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

- **[PDF]** [nRF52840 数据手册](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)

- **[PDF]** [Seeed Studio XIAO nRF52840 原理图](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF52840 KiCAD 文件](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_SCH&PCB.zip)

- **[ZIP]** [Seeed Studio XIAO nRF52840 Eagle 文件](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_KiCAD.zip)

- **[DXF]** [Seeed Studio XIAO nRF52840 DXF 尺寸图](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-DXF.zip)

- **[LBR]** [Seeed Studio XIAO nRF52840 Eagle 封装](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO nRF52840 引脚图表](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-pinout_sheet.xlsx)

- 🔗 **[Kicad]** [Seeed Studio XIAO nRF52840 封装](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### Seeed Studio XIAO nRF52840 Sense

- **[PDF]** [nRF52840 数据手册](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)

- **[PDF]** [Seeed Studio XIAO nRF52840 Sense 原理图](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF52840 KiCAD 文件](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_KiCAD.zip)

- **[ZIP]** [Seeed Studio XIAO nRF52840 Eagle 文件](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_SCH&PCB.zip)

- **[DXF]** [Seeed Studio XIAO nRF52840 Sense DXF 尺寸图](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Sense-DXF.zip)

- **[LBR]** [Seeed Studio XIAO nRF52840 Sense Eagle 封装](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO nRF52840 Sense 引脚图表](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Senese-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO nRF52840 Sense 3D 模型](https://files.seeedstudio.com/wiki/XIAO-BLE/seeed-studio-xiao-nrf52840-3d-model.zip)

- 🔗 **[Kicad]** [Seeed Studio XIAO nRF52840 Sense 封装](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### Seeed Studio XIAO nRF52840 (Sense) Plus

- **[PDF]** [nRF52840 数据手册](https://files.seeedstudio.com/wiki/XIAO-BLE/nrf52840_datasheet.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF52840 (Sense) Plus 原理图](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_nRF52840_Plus_SCH_PCB_v1.1.zip)

- **[ZIP]** [Seeed Studio XIAO nRF52840 (Sense) Plus KiCAD 文件](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XlAO_nRF52840_Plus_KiCAD_file.zip)

- **[DXF]** [Seeed Studio XIAO nRF52840 Sense DXF 尺寸图](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XlA0_nRF52840_Sense_Dimension_in_DXF.dxf)

- **[ZIP]** [Seeed Studio XIAO Plus 底板（带底部焊盘引出）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_with_botton_pad_lead_out_V1.0.zip)

- **[ZIP]** [Seeed Studio XIAO Plus 底板（不带底部焊盘引出）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_without_botton_pad_lead_out_V1.0.zip)

- **[Kicad]** [Seeed Studio XIAO nRF52840 (Sense) Plus 封装](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Plus-SMD.kicad_mod)

- **[Kicad]** [Seeed Studio XIAO nRF52840 (Sense) Plus 符号](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_Series.kicad_sym)

## 课程资源

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[电子书]** [XIAO: 小板大能量 掌握 Arduino 和 TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

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
