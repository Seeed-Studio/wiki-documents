---
description: Seeed Studio XIAO ESP32S3 系列入门指南。
title: Seeed Studio XIAO ESP32S3 系列入门指南
keywords:
- esp32s3
- xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32s3_getting_started
sku: 113991114, 113991115, 114010001, 102010634, 102010635, 102010671
type: gettingstarted
last_update:
  date: 08/14/2024
  author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seeed Studio XIAO ESP32S3 系列入门指南

<table align="center">
 <tr>
  <th>Seeed Studio XIAO ESP32S3</th>
  <th>Seeed Studio XIAO ESP32S3 Sense</th>
  <th>Seeed Studio XIAO ESP32S3 Plus</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3plus.png" style={{width:250, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
   <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
   </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
   <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
   </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html" target="_blank">
   <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>

## 简介

Seeed Studio XIAO 系列是小型开发板，具有相似的硬件结构，尺寸真正达到拇指大小。代号"XIAO"代表其一半特性"Tiny"（微小），另一半则是"Puissant"（强大）。

Seeed Studio XIAO ESP32S3 Sense 集成了摄像头传感器、数字麦克风和 SD 卡支持。结合嵌入式机器学习计算能力和摄影功能，这款开发板可以成为您开始智能语音和视觉 AI 的绝佳工具。

:::tip
**OV2640 摄像头**已停产，后续的 XIAO ESP32S3 Sense 使用 **OV3660 摄像头**型号。但是，Wiki 中的摄像头示例代码仍然适用。
:::

### 规格参数

<table align="center">
 <tr>
     <th>项目</th>
     <th style={{width:300, height:'auto'}}>Seeed Studio XIAO ESP32S3</th>
        <th style={{width:300, height:'auto'}}>Seeed Studio XIAO ESP32S3 Sense</th>
  <th style={{width:300, height:'auto'}}>Seeed Studio XIAO ESP32S3 Plus</th>
 </tr>
 <tr>
     <th>处理器</th>
     <td align="center" colspan="3">ESP32-S3R8 <br></br> Xtensa LX7 双核，32 位处理器，运行频率高达 240 MHz </td>
 </tr>
 <tr>
     <th>无线连接</th>
     <td align="center" colspan="3">完整的 2.4GHz Wi-Fi 子系统 <br></br> BLE：蓝牙 5.0，蓝牙网格</td>
 </tr>
    <tr>
     <th>内置传感器</th>
     <td align="center"> - </td>
        <td align="center">OV2640 摄像头传感器，分辨率 1600 * 1200 <br></br>OV3660 摄像头传感器，分辨率 2048 * 1536<br></br>数字麦克风</td>
  <td align="center"> - </td>
 </tr>
    <tr>
     <th>内存</th>
     <td align="center">片上 8M PSRAM 和 8MB Flash</td>
        <td align="center">片上 8M PSRAM 和 8MB Flash <br></br> 板载 SD 卡插槽，支持 32GB FAT</td>
  <td align="center">片上 8M PSRAM 和 <strong>16MB</strong> Flash</td>
 </tr>
    <tr>
     <th>接口</th>
     <td>1x UART，1x IIC，1x IIS，1x SPI，11x GPIOs (PWM)，9x ADC，1x 用户 LED，1x 充电 LED  <br></br> 1x 复位按钮，1x 启动按钮</td>
        <td>1x UART，1x IIC，1x IIS，1x SPI，11x GPIOs (PWM)，9x ADC，1x 用户 LED，1x 充电 LED，1x B2B 连接器（带 2 个额外 GPIOs），1x 复位按钮，1x 启动按钮</td>
  <td><strong>2</strong>x UART，1x IIC，1x IIS，<strong>2</strong>x SPI，<strong>18</strong>x GPIOs (PWM)，9x ADC，1x 用户 LED，1x 充电 LED，1x B2B 连接器，1x 复位按钮，1x 启动按钮</td>
 </tr>
    <tr>
     <th>尺寸</th>
     <td align="center">21 x 17.8mm</td>
        <td align="center">21 x 17.8 x 15mm（带扩展板）</td>
  <td align="center">21 x 17.8mm</td>
 </tr>
    <tr>
     <th rowspan="5">电源</th>
     <td colspan="3" align="center">输入电压（Type-C）：5V <br></br> 输入电压（BAT）：4.2V</td>
 </tr>
    <tr>
     <td>电路工作电压（准备运行）： <br></br> - Type-C：5V@<strong>19mA</strong> <br></br> - BAT：3.8V@<strong>22mA</strong></td>
        <td>电路工作电压（准备运行）： <br></br> - Type-C：5V@<strong>38.3mA</strong> <br></br> - BAT：3.8V@<strong>43.2mA</strong>（带扩展板）</td>
  <td>电路工作电压（准备运行）： <br></br> - Type-C：5V@<strong>28mA</strong> <br></br> - BAT：3.8V@<strong>35mA</strong></td>
 </tr>
 <tr>
     <td align="center"> - </td>
        <td align="center">网络摄像头 Web 应用： <br></br> - Type-C： <br></br> - - 平均功耗：5V/<strong>220mA</strong> <br></br> - 电池： <br></br> - - 平均功耗：4.2V/<strong>212mA</strong></td>
  <td align="center"> - </td>
 </tr>
 <tr>
     <td align="center"> - </td>
        <td align="center">麦克风录音和 SD 卡写入：  <br></br> - Type-C： <br></br> - - 平均功耗：5V/<strong>46.5mA</strong> <br></br> - - 峰值功耗：5V/<strong>89.6mA</strong> <br></br> - 电池： <br></br> - - 平均功耗：3.8V/<strong>54.4mA</strong> <br></br> - - 峰值功耗：3.8V/<strong>108mA</strong></td>
  <td align="center"> - </td>
 </tr>
    <tr>
  <td align="center" colspan="3">电池充电电流：<strong>100mA</strong></td>
 </tr>
    <tr>
        <th>低功耗模式</th>
        <td>调制解调器睡眠模式：<strong>3.8V/25 mA</strong> <br></br> 轻度睡眠模式：<strong>3.8V/2 mA</strong> <br></br> 深度睡眠模式：<strong>3.8V/14 μA</strong></td>
        <td>无任何外设： <br></br> - 调制解调器睡眠模式：<strong>3.8V/25.5 mA</strong> <br></br> - 轻度睡眠模式：<strong>3.8V/2.4 mA</strong> <br></br> - 深度睡眠模式：<strong>3.8V/63.768 μA</strong> <br></br> 连接摄像头： <br></br> - 调制解调器睡眠模式：<strong>3.8V/44.57 mA</strong> <br></br> - 轻度睡眠模式：<strong>3.8V/5.47 mA</strong> <br></br> - 深度睡眠模式：<strong>3.8V/3.00 mA</strong> <br></br> 连接 SD 卡： <br></br> - 调制解调器睡眠模式：<strong>3.8V/32.8 mA</strong> <br></br> - 轻度睡眠模式：<strong>3.8V/3.48 mA</strong> <br></br> - 深度睡眠模式：<strong>3.8V/1.08 mA</strong><br></br> 同时连接摄像头和 SD 卡： <br></br> - 调制解调器睡眠模式：<strong>3.8V/55.72 mA</strong> <br></br> - 轻度睡眠模式：<strong>3.8V/6.56 mA</strong> <br></br> - 深度睡眠模式：<strong>3.8V/3.98 mA</strong></td>
  <td>调制解调器睡眠模式：<strong>3.8V/26.5 mA</strong> <br></br> 轻度睡眠模式：<strong>3.8V/2.2 mA</strong> <br></br> 深度睡眠模式：<strong>3.8V/69 μA</strong></td>
    </tr>
    <tr>
        <th>Wi-Fi 启用功耗</th>
        <td align="center">活动模式：<strong>~ 100 mA</strong></td>
        <td align="center">活动模式：<strong>~ 110 mA</strong>（带扩展板）</td>
  <td align="center">活动模式：<strong>~ 85 mA</strong></td>
    </tr>
    <tr>
        <th>BLE 启用功耗</th>
        <td align="center">活动模式：<strong>~ 85 mA</strong></td>
        <td align="center">活动模式：<strong>~ 102 mA</strong>（带扩展板）</td>
  <td align="center">活动模式：<strong>~ 77 mA</strong></td>
    </tr>
    <tr>
        <th>工作温度</th>
        <td colspan="3" align="center">-40°C ~ 65°C</td>
    </tr>
</table>

### 特性

- **强大的 MCU 板**：集成 ESP32S3 32 位双核 Xtensa 处理器芯片，运行频率高达 240 MHz，配备多个开发端口，支持 Arduino / MicroPython
- **高级功能**（适用于 Sense）：可拆卸的 **OV2640 摄像头传感器，分辨率 1600x1200** 和 **OV3660 摄像头传感器，分辨率 2048x1536**，兼容 OV5640 摄像头传感器，集成额外的数字麦克风
- **精心设计的电源**：锂电池充电管理功能，提供 4 种功耗模式，允许深度睡眠模式，功耗低至 14μA
- **大容量内存带来更多可能性**：提供 8MB PSRAM 和 8MB FLASH（**Plus** 版本为 16MB），支持 SD 卡插槽用于外部 32GB FAT 内存（仅适用于 XIAO ESP32S3）
- **出色的射频性能**：支持 2.4GHz Wi-Fi 和 BLE 双无线通信，连接 U.FL 天线时支持 100m+ 远程通信
- **拇指大小的紧凑设计**：21 x 17.8mm，采用 XIAO 的经典外形，适用于空间受限的项目，如可穿戴设备

<table align="center">
 <tr>
     <th>项目</th>
     <th style={{width:300, height:'auto'}}>OV3660 摄像头</th>
        <th style={{width:300, height:'auto'}}>OV2640 摄像头</th>
 </tr>
    <tr>
        <th>最大功耗（640*480）</th>
        <td align="center">活动模式：<strong>~ 0.6A</strong></td>
        <td align="center">活动模式：<strong>~ 0.65A</strong></td>
    </tr>
    <tr>
        <th>平均功耗（640*480）</th>
        <td align="center">活动模式：<strong>~ 0.12A</strong></td>
        <td align="center">活动模式：<strong>~ 0.24A</strong></td>
    </tr>
    <tr>
        <th>最小功耗（640*480）</th>
        <td align="center">活动模式：<strong>~ 0.12A</strong></td>
        <td align="center">活动模式：<strong>~ 0.15A</strong></td>
    </tr>
</table>

## 硬件概述

在开始之前，了解产品的一些基本参数是非常重要的。下表提供了 Seeed Studio XIAO ESP32S3 特性的信息。

<Tabs>
<TabItem  value="(Sense)" label="XIAO ESP32S3/XIAO ESP32S3 Sense" default>

<table align="center">
 <tr>
     <th>XIAO ESP32S3/XIAO ESP32S3 Sense 正面指示图</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32S3/XIAO ESP32S3 Sense 背面指示图</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32S3/XIAO ESP32S3 Sense 引脚列表</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

**引脚映射**
| XIAO 引脚                 | 功能         | 芯片引脚                                                | 备用功能 | 描述                          |
| :---------------------: | :-------------: | :----------------------------------------------------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS             |                                                        |                    | 电源输入/输出                   |
| GND                     |                  |                                                        |                    |                                      |
| 3V3                     | 3V3_OUT          |                                                        |                    | 电源输出                         |
| D0                      | Analog          | GPIO1                                                  | TOUCH1             | GPIO, ADC                            |
| D1                      | Analog          | GPIO2                                                  | TOUCH2             | GPIO, ADC                            |
| D2                      | Analog          | GPIO3                                                  | TOUCH3             | GPIO, ADC                            |
| D3                      | Analog          | GPIO4                                                  | TOUCH4             | GPIO, ADC                            |
| D4                      | Analog,SDA       | GPIO5                                                  | TOUCH5             | GPIO, I2C 数据, ADC                  |
| D5                      | Analog,SCL       | GPIO6                                                  | TOUCH6             | GPIO, I2C 时钟, ADC                 |
| D6                      | TX               | GPIO43                                                 |                    | GPIO, UART 发送                  |
| D7                      | RX               | GPIO44                                                 |                    | GPIO, UART 接收                   |
| D8                      | Analog,SCK       | GPIO7                                                  | TOUCH7             | GPIO, SPI 时钟, ADC                 |
| D9                      | Analog,MISO      | GPIO8                                                  | TOUCH8             | GPIO, SPI 数据, ADC                  |
| D10                     | Analog,MOSI      | GPIO10                                                 | TOUCH9             | GPIO, SPI 数据, ADC                  |
| D11                     | Analog          | GPIO42                                                 | TOUCH12            | GPIO, ADC                            |
| D12                     | Analog          | GPIO41                                                 | TOUCH13            | GPIO, ADC                            |
| MTDO                    |                  | GPIO40                                                 |                    | JTAG                                 |
| MTDI                    |                  | GPIO41                                                 |                    | JTAG, ADC                            |
| MTCK                    |                  | GPIO39                                                 |                    | JTAG, ADC                            |
| MTMS                    |                  | GPIO42                                                 |                    | JTAG, ADC                            |
| Reset                   |                  | EN                                                |                    | EN                                   |
| Boot                    |                  | GPIO0                                                  |                    | 进入启动模式                      |
| U.FL-R-SMT1             |                  | LNA_IN                                                 |                    | UFL 天线                          |
| CHARGE_LED              |                  |                                                |                    | CHG-LED                              |
| USER_LED                |                  | GPIO21                                                 |                    | 用户指示灯                           |
| Digital microphone_CLK  |                  | GPIO42                                                 |                    | MIC 的 PDM 时钟引脚                |
| Digital microphone_DATA |                  | GPIO41                                                 |                    | MIC 的 PDM 数据引脚                 |
| Onboard SD Card__CS     |                  | GPIO3                                                  |                    | SD 卡片选引脚              |
| Onboard SD Card_SCK     |                  | GPIO7                                                  |                    | SD 卡时钟引脚                    |
| Onboard SD Card_MISO    |                  | GPIO8                                                  |                    | SD 卡数据输入引脚               |
| Onboard SD Card Slot_MOSI |                | GPIO10                                                 |          |      SD 卡数据输出引脚              |

**摄像头**
| 芯片引脚  | 描述                          |
| :-------: | :---------------------------------- |
| GPIO10    | 摄像头相关时钟引脚            |
| GPIO11    | 摄像头视频数据引脚 (Y8)          |
| GPIO12    | 摄像头视频数据引脚 (Y7)          |
| GPIO13    | 摄像头像素时钟引脚              |
| GPIO14    | 摄像头视频数据引脚 (Y6)          |
| GPIO15    | 摄像头视频数据引脚 (Y2)          |
| GPIO16    | 摄像头视频数据引脚 (Y5)          |
| GPIO17    | 摄像头视频数据引脚 (Y3)          |
| GPIO18    | 摄像头视频数据引脚 (Y4)          |
| GPIO40    | 摄像头的 I2C 数据引脚             |
| GPIO39    | 摄像头的 I2C 时钟引脚            |
| GPIO38    | 摄像头垂直同步引脚            |
| GPIO47    | 摄像头水平同步引脚          |
| GPIO48    | 摄像头视频数据引脚 (Y9)          |
</TabItem>
<TabItem value="Plus" label="XIAO ESP32S3 Plus" default>

<table align="center">
 <tr>
  <th>XIAO ESP32S3 Plus 正面指示图</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_front.png
  " style={{width:700, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <th>XIAO ESP32S3 Plus 背面指示图</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_back.png
  " style={{width:700, height:'auto'}}/></div></td>
 </tr>
 <tr>
 <th>XIAO ESP32S3 Plus 引脚列表</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_pinout.png
  " style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

:::tip
XIAO ESP32S3 Plus 的 B2B 连接器与 [Wio-SX1262 扩展板](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) 兼容，但与插入式摄像头传感器板不兼容。
:::
**引脚映射**

| XIAO 引脚                 | 功能         | 芯片引脚  | 备用功能 | 描述                          |
| :---------------------: | :-------------: | :-------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS             |           |                    | 电源输入/输出                   |
| GND                     |                  |           |                    |                                      |
| 3V3                     | 3V3_OUT          |           |                    | 电源输出                         |
| D0                      | Analog          | GPIO1     |                    | GPIO, ADC                            |
| D1                      | Analog          | GPIO2     |                    | GPIO, ADC                            |
| D2                      | Analog          | GPIO3     |                    | GPIO, ADC                            |
| D3                      | Analog          | GPIO4     |                    | GPIO, ADC                            |
| D4                      | Analog,SDA       | GPIO5     |                    | GPIO, I2C 数据, ADC                  |
| D5                      | Analog,SCL       | GPIO6     |                    | GPIO, I2C 时钟, ADC                 |
| D6                      | TX               | GPIO43    |                    | GPIO, UART 发送                  |
| D7                      | RX               | GPIO44    |                    | GPIO, UART 接收                   |
| D8                      | Analog,SCK       | GPIO7     |                    | GPIO, SPI 时钟, ADC                 |
| D9                      | Analog,MISO      | GPIO8     |                    | GPIO, SPI 数据, ADC                  |
| D10                     | Analog,MOSI      | GPIO10    |                    | GPIO, SPI 数据, ADC                  |
| D11                     |                  | GPIO38    |                    | GPIO, ADC                            |
| D12                     |                  | GPIO39    |                    | GPIO, ADC                            |
| D13                     |                  | GPIO40    |                    |                                      |
| D14                     |                  | GPIO41    |                    |                                      |
| D15                     |                  | GPIO42    |                    |                                      |
| D16                     |                  | GPIO10    |                    |                                      |
| D17                     |                  | GPIO13    |                    |                                      |
| D18                     |                  | GPIO12    |                    |                                      |
| D19                     |                  | GPIO11    |                    |                                      |
| MTDO                    |                  | GPIO40    |                    | JTAG                                 |
| MTDI                    |                  | GPIO41    |                    | JTAG, ADC                            |
| MTCK                    |                  | GPIO39    |                    | JTAG, ADC                            |
| MTMS                    |                  | GPIO42    |                    | JTAG, ADC                            |
| Reset                   |                  | CHIP_EN   |                    | EN                                   |
| Boot                    |                  | GPIO0     |                    | 进入启动模式                      |
| ADC_BAT                 |                  | GPIO10    |                    | 读取电池电压值           |
| U.FL-R-SMT1             |                  | LNA_IN    |                    | UFL 天线                          |
| CHARGE_LED              |                  | VCC_3V3   |                    | CHG-LED                              |
| USER_LED                |                  | GPIO21    |                    | 用户指示灯                           |

</TabItem>

</Tabs>

:::caution
虽然 XIAO ESP32-S3 将 GPIO41 和 GPIO42 分配给引脚 A11 和 A12，但由于 ESP32-S3 芯片的特性，引脚 A11 和 A12 不支持 ADC 功能。请务必区分和辨别它们。
:::

### 电源引脚

- 5V - 这是来自 USB 端口的 5V 输出。您也可以将其用作电压输入，但必须在外部电源和此引脚之间使用某种二极管（肖特基、信号、功率），阳极连接电池，阴极连接 5V 引脚。
- 3V3 - 这是板载稳压器的稳压输出。您可以获得 700mA 电流
- GND - 电源/数据/信号地

### 启动引脚

在每次启动或复位时，芯片需要一些初始配置参数，例如以哪种启动模式加载芯片、闪存电压等。这些参数通过启动引脚传递。复位后，启动引脚作为常规 IO 引脚运行。

芯片复位时由给定启动引脚控制的参数如下：

- **芯片启动模式** – GPIO0 和 GPIO46
- **VDD_SPI 电压** – GPIO45
- **ROM 消息打印** – GPIO46
- **JTAG 信号源** – GPIO3

GPIO0、GPIO45 和 GPIO46 在芯片复位时连接到芯片内部的弱上拉/下拉电阻。
这些电阻决定启动引脚的默认位值。此外，如果启动引脚连接到外部高阻抗电路，这些电阻也决定位值。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/110.png" style={{width:400, height:'auto'}}/></div>

要改变位值，启动引脚应连接到外部下拉/上拉电阻。如果 ESP32-S3 被主机 MCU 用作设备，启动引脚电压电平也可以由主机 MCU 控制。

所有启动引脚都有锁存器。在系统复位时，锁存器采样各自启动引脚的位值并存储它们，直到芯片断电或关闭。锁存器的状态不能以任何其他方式改变。这使得启动引脚值在整个芯片运行期间可用，并且引脚在复位后被释放用作常规 IO 引脚。

关于启动引脚的时序要求，有建立时间和保持时间等参数。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/111.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/112.png" style={{width:600, height:'auto'}}/></div>

## 入门指南

为了让您更快地开始使用 XIAO ESP32S3，请阅读下面的硬件和软件准备来准备 XIAO。

1. **XIAO ESP32S3**

常规版本中预设的出厂程序是触摸引脚点亮程序。当您给 XIAO 通电时，触摸其某些引脚，橙色用户指示灯将点亮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/105.jpg" style={{width:600, height:'auto'}}/></div>

2. **XIAO ESP32S3 Sense**

XIAO ESP32S3 Sense 出厂时预装了 WebCam 示例程序。您可以通过给 XIAO 安装好天线并通电来使用此程序。详细信息，您可以阅读关于此程序的 Wiki。

- [视频流](https://wiki.seeedstudio.com/cn/xiao_esp32s3_camera_usage#project-ii-video-streaming)

:::note
从 **2025 年 6 月** 开始，XIAO ESP32S3 Sense 的出厂固件启用默认 AP Wi‑Fi，凭据如下：

- **SSID：** `XIAO_ESP32S3_Sense`
- **密码：** `seeedstudio`
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/98.png" style={{width:900, height:'auto'}}/></div>

### 硬件准备

#### 焊接排针

XIAO ESP32S3 默认出厂时不带排针，您需要准备自己的排针并将其焊接到 XIAO 的相应引脚上，这样您就可以连接到扩展板或传感器。

由于 XIAO ESP32S3 的微型尺寸，焊接排针时请小心，不要将不同的引脚粘在一起，也不要将焊料粘到屏蔽层或其他组件上。否则，可能导致 XIAO 短路或无法正常工作，由此造成的后果将由用户承担。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/4.jpg" style={{width:400, height:'auto'}}/></div>

#### 天线安装

在 XIAO ESP32S3 正面的左下角，有一个独立的"WiFi/BT 天线连接器"。为了获得更好的 WiFi/蓝牙信号，您需要取出包装内的天线并将其安装在连接器上。

天线的安装有一个小技巧，如果您直接用力按下，您会发现很难按下，手指会疼！正确的天线安装方法是先将天线连接器的一侧放入连接器块中，然后在另一侧稍微按下，天线就安装好了。

拆卸天线也是如此，不要用蛮力直接拉天线，一侧用力抬起，天线很容易取下。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

#### 扩展板安装（适用于 Sense）

如果您购买的是 XIAO ESP32S3 Sense，那么您还应该包含一个扩展板。这个扩展板有一个 1600x1200 OV2640/2048x1536 OV3660 摄像头传感器、板载 SD 卡插槽和数字麦克风。

通过将扩展板与 XIAO ESP32S3 Sense 安装，您可以使用扩展板上的功能。

安装扩展板非常简单，您只需要将扩展板上的连接器与 XIAO ESP32S3 上的 B2B 连接器对齐，用力按下并听到"咔嗒"声，安装就完成了。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

我们现在有一个新的完全兼容 XIAO ESP32S3 Sense 的强大摄像头 OV5640 在我们的货架上，如果您购买它，您可以更换摄像头来使用它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

如果您需要了解 ov5640 的详细参数信息，可以参考以下图表。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/datasheet.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Wiki 中关于摄像头的所有程序都兼容 OV5640、OV2640 和 OV3660 摄像头。
:::

#### 安装升级版散热器

通过安装我们的升级版散热器，确保您的 XIAO ESP32S3 Sense 获得最佳散热效果。这种新设计专门针对之前型号观察到的散热不足问题，特别是在摄像头使用等密集操作期间。反馈表明原始散热器没有充分散热，因此开发了更有效的解决方案。

<details>
<summary>点击查看性能对比</summary>

我们的测试证明了升级版散热器相对于原始设置的优势：

| 测试样本           | 背面峰值温度 |
| --------------------- | ---------------------------- |
| **无散热器** | 63.6°C                       |
| **双散热器** | 53.5°C (🔻10°C)           |

***测试详情：***

- **环境**：空调房间（约 27°C）
- **温度测量工具**：OMEGA CL3515R 热电偶
- **测量位置**：XIAO ESP32S3 背面散热垫
- **测试固件**：WebCamera
- **电源**：Type-C 5V
- **运行时长**：1 小时

***关键结果：***

- 配备散热器的设备保持稳定运行超过一小时，达到峰值温度而无性能下降。
- 在 SVGA (800x600) 模式下使用 WebCamera 测试期间：
  - XIAO ESP32S3 运行平稳。
  - 视频输出流畅。
  - 温度显著降低，确保可靠性能，无任何帧丢失或断开连接。

</details>

***开始安装前请准备以下物品：***

- 选定的散热器（单个或双个）
- 一个干净的 ESP32S3

开始之前，请确保您的设备已关闭电源并从任何电源中拔出。

:::tip notice

***购买说明：*** 购买 XIAO ESP32S3 Sense 时，需要注意的是，只有**配备摄像头的型号**才包含散热器。如果您的 ESP32S3 版本不包含摄像头，您需要单独购买散热器。

***安装提示：*** 优先用散热器覆盖散热垫，因为它直接位于 ESP32S3 芯片上方，这是主要的热源。正确对齐确保最佳散热，并注意尽可能保持 BAT 引脚不被遮挡。
:::

现在，让我们开始安装过程：

***步骤 1. 准备散热器：***
首先从散热器上撕掉保护膜以露出导热胶。这将为散热器与 ESP32S3 芯片的牢固连接做好准备。

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/heat-sink.jpg" style={{width:400, height:'auto'}}/></div></td>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/remove-heat-sink-cover.jpg" style={{width:400, height:'auto'}}/></div></td>

***步骤 2. 组装散热器：***

<Tabs>
  <TabItem value="single" label="单散热器" default>

这个更小、更紧凑的选项足以满足常规使用，并允许完全访问所有 GPIO 引脚。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/pin-single-heat-sink-install.jpg" style={{width:400, height:'auto'}}/></div>

  </TabItem>
  <TabItem value="dual" label="双散热器">

更大的选项提供卓越的散热效果，非常适合高性能任务，但可能会限制对某些 GPIO 引脚的访问。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/pin-dual-heat-sink-install.png" style={{width:400, height:'auto'}}/></div>

:::note
如果您想使用 XIAO ESP32S3 Plus 的 BAT 引脚，这种双散热器外壳不适合。
:::

  </TabItem>
</Tabs>

***步骤 3：最终检查和测试***

安装后，确保所有部件都已正确固定，没有短路风险。验证散热器是否正确对齐并牢固连接。

### 软件准备

XIAO ESP32S3 推荐的编程工具是 Arduino IDE，因此作为软件准备的一部分，您需要完成 Arduino 的安装。

:::tip
如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 根据您的操作系统下载并安装稳定版本的 Arduino IDE。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong></a>
</div>

- **步骤 2.** 启动 Arduino 应用程序。

- **步骤 3.** 将 ESP32 开发板包添加到您的 Arduino IDE。

<Tabs>
<TabItem value='适用于 Windows'>

导航到 **File > Preferences**，并在 **"Additional Boards Manager URLs"** 中填入以下网址：

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/6.png" style={{width:800, height:'auto'}}/></div>

导航到 **Tools > Board > Boards Manager...**，在搜索框中输入关键词 **esp32**，选择最新版本的 **esp32**，然后安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
XIAO ESP32S3 的开发板包需要 **2.0.8** 及以上版本才可用。
:::

- **步骤 4.** 选择您的开发板和端口。

在 Arduino IDE 顶部，您可以直接选择端口。这通常是 COM3 或更高（**COM1** 和 **COM2** 通常保留给硬件串口）。

</TabItem>
<TabItem value='适用于 Mac OS'>

导航到 **Arduino IDE > Preferences**，并在 **"Additional Boards Manager URLs"** 中填入以下网址：

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_29.png" style={{width:680, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_80.png" style={{width:680, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

导航到 **Tools > Board > Boards Manager...**，在搜索框中输入关键词 **esp32**，选择最新版本的 **esp32**，然后安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
XIAO ESP32S3 的开发板包需要 **2.0.8** 及以上版本才可用。
:::

- **步骤 4.** 选择您的开发板和端口。

在 Arduino IDE 顶部，您可以直接选择端口。这通常是名称中包含 "usbmodem" 或 "usbserial" 的端口。如果不确定，可以拔掉再插入，看看哪个端口消失了。

</TabItem>
</Tabs>

<!-- :::tip
We have now submitted a merge request to ESP32 and will be able to search and use XIAO ESP32S3 in the Arduino IDE when ESP32 releases the next version of the on-board package update.

Until then, you can manually add the XIAO ESP32S3 on-board package to the Arduino directory to use it.
:::

<div class="github_container" style={{textAlign: 'center'}}><a class="github_item" href="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32S3_Package.zip" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Download the Package</font></span></strong></a></div>

After you have downloaded the above zip, please unzip it and you will see two files. One is the **XIAO_ESP32S3 folder**, and the other is **boards.txt**.

- **Under Windows PC**

    The default onboard package storage path for ESP32 in Windows is:

    `C:\Users\${UserName}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7`

    We need to copy the download **boards.txt** file to the above path, overwriting the original **boards.txt** file in this path.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/8.png" style={{width:600, height:'auto'}}/></div>

    `C:\Users\${UserName}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7\variants`

    Then go to the **variants folder** and copy the **XIAO_ESP32S3 folder** to it.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/7.png" style={{width:800, height:'auto'}}/></div>

- **Under MacOS PC**

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7`

    We need to copy the download **boards.txt** file to the above path, overwriting the original **boards.txt** file in this path.

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7/variants`

    Then go to the **variants folder** and copy the **XIAO_ESP32S3 folder** to it.

- **Step 4.** Close the Arduino IDE and reopen it.-->

<Tabs>
<TabItem value="(Sense)" label="适用于 XIAO ESP32S3 (Sense)" default>

同时，在左侧的开发板中搜索 **xiao**。选择 **XIAO_ESP32S3**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/10.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Plus" label="适用于 XIAO ESP32S3 Plus" default>

即将发布；请关注未来的更新。

</TabItem>
</Tabs>

完成这些准备工作后，您就可以开始为 XIAO ESP32S3 编写程序进行编译和上传了。

### BootLoader 模式

有时，使用错误的程序可能会导致 XIAO 丢失端口或无法正常工作。常见问题包括：

- XIAO 连接到计算机，但*找不到端口号*。
- XIAO 已连接，出现端口号，但*程序上传失败*。

当您遇到上述两种情况时，可以尝试将 XIAO 置于 BootLoader 模式，这可以解决大多数设备无法识别和上传失败的问题。具体方法是：

- **步骤 1**. 按住 XIAO ESP32S3 上的 `BOOT` 按钮不松开。
- **步骤 2**. 保持按住 `BOOT` 按钮，然后通过数据线连接到计算机。连接到计算机后松开 `BOOT` 按钮。
- **步骤 3**. 上传 **File > Examples > 01.Basics > Blink** 程序来检查 XIAO ESP32S3 的运行情况。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>

### 复位

当程序运行异常时，您可以在上电期间按一次 `Reset` 让 XIAO 重新执行已上传的程序。

当您在上电时按住 `BOOT` 键，然后按一次 `Reset` 键，也可以进入 BootLoader 模式。

### 运行您的第一个 Blink 程序

到现在，我相信您已经对 XIAO ESP32S3 的功能和硬件有了很好的了解。接下来，让我们以最简单的 Blink 程序为例，为您的 XIAO ESP32S3 执行第一次闪烁！

- **步骤 1.** 启动 Arduino 应用程序。
- **步骤 2.** 导航到 **File > Examples > 01.Basics > Blink**，打开程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **步骤 3.** 选择开发板型号为 **XIAO ESP32S3**，并选择正确的端口号来上传程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/12.png" style={{width:1000, height:'auto'}}/></div>

程序成功上传后，您将看到以下输出信息，并且可以观察到 XIAO ESP32S3 右侧的橙色 LED 正在闪烁。

<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/13.png" style={{width:800, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/14.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

恭喜，您已经学会了如何为 XIAO ESP32S3 编写和上传程序！

:::note
只有当 XIAO ESP32S3 上的用户 LED 引脚设置为高电平时，LED 才会熄灭，只有当引脚设置为低电平时，LED 才会点亮。
:::

## 电池使用

XIAO ESP32S3 系列内置电源管理芯片，允许 XIAO ESP32S3 通过电池独立供电，或通过 XIAO ESP32S3 的 USB 端口为电池充电。

如果您想为 XIAO 连接电池，我们建议您购买合格的可充电 3.7V 锂电池。焊接电池时，请注意区分正负极。电源的负极应该是靠近 USB 端口的一侧，电源的正极是远离 USB 端口的一侧。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/16.jpg" style={{width:400, height:'auto'}}/></div>

:::note
由于 XIAO ESP32S3 的所有 GPIO 引脚都分配了各自的功能，我们没有为电池引脚配置 GPIO。这意味着我们无法通过读取其中一个 GPIO 的模拟值在软件层面获取电池电压。如有必要，您可以考虑将电池的正负极连接到两个引脚来测量电池电压。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/17.png" style={{width:800, height:'auto'}}/></div>
:::

:::caution
当您使用电池供电时，5V 引脚上将没有电压。
:::

同时，我们为电池充电设计了一个红色指示灯，通过指示灯显示来告知用户电池当前的充电状态。

1. 当 XIAO ESP32S3 未连接电池时，连接 Type-C 线缆时红灯亮起，30 秒后熄灭。
2. 连接电池并连接 Type-C 线缆充电时，红灯闪烁。
3. 连接 Type-C 为电池充满电时，红灯熄灭。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/104.jpg" style={{width:600, height:'auto'}}/></div>

## UF2 引导加载器

我们了解到一些用户希望直接将 UF2 文件刷写到 XIAO，这将实现批量刷写程序的过程。这里我们将描述这种方法。

<Tabs>
<TabItem value="method1" label="方法一" default>

:::note
此方法目前仅适用于 Windows 系统。
:::

**步骤 1**：下载并解压脚本

下载所需的脚本压缩文件并解压到您的本地机器：

*https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/xiaos3-bin2uf2.zip*

**步骤 2**：将 BIN 文件转换为 UF2 文件

编译并保存 Arduino 程序后，您可以导出二进制 `BIN` 文件。此文件将在您的 Arduino 项目文件夹中生成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/106.png" style={{width:600, height:'auto'}}/></div>

将 `BIN` 文件复制到您之前解压的 **xiaos3-bin2uf2** 目录中。然后，运行 **convert_uf2.bat** 脚本生成 UF2 文件，这将需要您的 `bin` 文件名。

**步骤 3**：进入 UF2 引导加载器模式

将 XIAO 连接到您的计算机并运行 **boot_uf2.bat** 脚本。XIAO 将在您的计算机上显示为 USB 驱动器，表明它已成功进入 UF2 引导加载器模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/107.png" style={{width:800, height:'auto'}}/></div>

**步骤 4**：将 UF2 文件复制到 XIAO ESP32S3

访问 XIAO ESP32S3 的 USB 驱动器并将转换后的 UF2 文件复制到其中。复制完成后，XIAO USB 驱动器将自动消失，程序将开始运行。

:::tip

1. 确保您的程序已编译并正确运行；否则，UF2 文件可能无法按预期执行。
2. **xiaos3-bin2uf2** 文件夹中提供了一个 Blink 的示例 UF2 文件。上传后，XIAO ESP32S3 上的橙色 LED 将闪烁。您可以使用此 UF2 文件进行测试。

:::

**步骤 5**：重新进入 UF2 引导加载器模式

如果您需要重新进入 UF2 引导加载器模式以上传另一个 UF2 文件，请快速按下 **Reset** 按钮，然后按下 **Boot** 按钮。无需再次运行 boot_uf2.bat 脚本。

:::note
先按 Reset，然后快速按 Boot！
:::

</TabItem>

<TabItem value="method2" label="方法二" >

该项目由自定义 IDF 的第二阶段引导加载器和作为第三阶段引导加载器的 UF2 工厂应用程序组成。

**注意：** 由于 IDF 正在积极开发且变化非常频繁，它作为子模块包含在 lib/esp-idf 中，请在那里运行导出脚本以正确设置您的环境。

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://github.com/adafruit/tinyuf2/tree/master/ports/espressif" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div>

</TabItem>
</Tabs>

## 故障排除

### Q1：如果上传程序失败/程序运行异常/找不到设备端口，我应该怎么办？

如果您遇到上述问题，建议您首先尝试按下 XIAO ESP32S3 上的复位按钮，尝试让程序重新运行。如果问题仍然存在，请重新检查您的程序并阅读 **[引导加载器模式](#bootloader-mode)** 中提供的方法来恢复设备。

### Q2：为什么我的 XIAO 在圆角处有不齐平的问题？这是质量问题吗？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/corners.png" style={{width:500, height:'auto'}}/></div>

首先，需要说明的是，这不是质量问题，不会影响 XIAO 的正常功能。

XIAO ESP32S3 由于高度集成，是所有 XIAO 中最复杂的一个，PCB 需要在工厂生产中拼接在一起。由于高度集成，拼接板连接只能放置在四个圆角处，这会导致图片上圆角不平整的问题。我们将尝试改进工艺，确保在后续生产中解决这个问题。

### Q3：如何将资源部分提供的出厂固件刷写到 XIAO ESP32S3？

资源部分提供的脚本支持 Windows。下载压缩文件后，您会找到以下文件：

<Tabs>
<TabItem value="normal" label="XIAO ESP32S3 出厂固件" >

```shell
.
├── boot_app0.bin
├── esp32_flasher.py
├── esptool.exe
├── project_config.json
├── xiao_esp32s3_firmware.bin
├── xiao_esp32s3_firmware.bootloader.bin
├── xiao_esp32s3_firmware.partitions.bin
└── xiao_esp32s3_firmware_win.bat
```

</TabItem>
<TabItem value="sense" label="XIAO ESP32S3 Sense 出厂固件" >

```shell
.
├── CameraWebServer.bin
├── boot_app0.bin
├── bootloader.bin
├── esp32_flasher.py
├── esptool.exe
├── partition-table.bin
├── project_config.json
└── xiao_esp32s3_sense_firmware_win.bat
```

</TabItem>
</Tabs>

要刷写固件，只需运行相应的 `.bat` 文件。如果刷写过程失败，请从提示中复制命令行并在文件所在的终端中手动运行。

## 资源

[PDF] **[ESP32-S3 数据手册](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)**

### 适用于 Seeed Studio XIAO ESP32S3

- **[PDF]** [Seeed Studio XIAO ESP32S3 原理图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Eagle 库](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)
- **[DXF]** [Seeed Studio XIAO ESP32S3 DXF 尺寸图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)
- **[LBR]** [Seeed Studio XIAO ESP32S3 Eagle 封装](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 出厂固件](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip)
- **[XLSX]** [Seeed Studio XIAO ESP32S3 引脚图表](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- **[STEP]** [Seeed Studio XIAO ESP32S3 3D 模型](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip)

- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32S3 封装](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### 适用于 Seeed Studio XIAO ESP32S3 Sense

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->
- **[PDF]** [Seeed Studio XIAO ESP32S3 Sense 原理图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH.pdf)
- **[电子书]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense KiCAD 库](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeeduino-xiao-ESP32S3-KiCAD-Library.zip)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense Eagle 库](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH&PCB_230324.zip)
- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense DXF 尺寸图（顶部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_top.dxf)
- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense DXF 尺寸图（底部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_bot.dxf)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense 出厂固件](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-firmware-20240814.zip)
- **[XLSX]** [Seeed Studio XIAO ESP32S3 Sense 引脚图表](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- **[STEP]** [Seeed Studio XIAO ESP32S3 Sense 3D 模型](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-sense-3d_model.zip)
- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32S3 Sense 封装](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### 适用于 Seeed Studio XIAO ESP32S3 Plus

- **[PDF]** [Seeed Studio XIAO ESP32S3 Plus 原理图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Plus_SCH_PDF.pdf)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Plus KiCAD 库](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_KiCAD_Library2.zip)
- **[DXF]** [Seeed Studio XIAO ESP32S3 Plus DXF 尺寸图（顶部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/TOP.dxf)
- **[DXF]** [Seeed Studio XIAO ESP32S3 Plus DXF 尺寸图（底部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/BOTTOM.dxf)
- **[XLSX]** [Seeed Studio XIAO ESP32S3 Plus 引脚图表](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_Pinout.xlsx)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Plus KiCAD 文件](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Plus_V1_SCH_PCB.zip)
- **[ZIP]** [Seeed Studio XIAO Plus 底板（带底部焊盘引出）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_with_botton_pad_lead_out_V1.0.zip)
- **[ZIP]** [Seeed Studio XIAO Plus 底板（不带底部焊盘引出）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_without_botton_pad_lead_out_V1.0.zip)
- **[STEP]** [Seeed Studio XIAO ESP32S3 Sense 3D 模型](https://grabcad.com/library/seeed-studio-xiao-esp32s3-plus-1/files)

### 适用于 Seeed Studio XIAO ESP32S3 Sense 摄像头

- **[PDF]** [OV3660 数据手册](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/OV3660_datasheet.pdf)
- **[PDF]** [OV5640 数据手册](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/OV5640_datasheet.pdf)
- **[PDF]** [OV2640 数据手册](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/OV2640_datasheet.pdf)

## 课程资源

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[电子书]** [XIAO：小板大能量，掌握 Arduino 和 TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

### 其他

- **[STP]** [XIAO ESP32S3 Sense 外壳设计（顶部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp)
- **[STP]** [XIAO ESP32S3 Sense 外壳设计（底部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp)

*其余开源资料正在整理中，敬请期待！*

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
