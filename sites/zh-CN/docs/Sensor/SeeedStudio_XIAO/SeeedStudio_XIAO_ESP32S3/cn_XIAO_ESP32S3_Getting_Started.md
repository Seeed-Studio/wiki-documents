---
description: Seeed Studio XIAO ESP32-S3 系列快速上手。
title: Seeed Studio XIAO ESP32-S3 系列快速上手
keywords:
  - esp32s3
  - xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_getting_started
sku: 113991114, 113991115, 114010001, 102010634, 102010635, 102010671
type: gettingstarted
last_update:
  date: 03/13/2026
  author: Spencer
createdAt: '2023-03-22'
updatedAt: '2026-03-31'
url: https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Seeed Studio XIAO ESP32-S3 系列快速上手

<table align="center">
 <tr>
  <th>Seeed Studio XIAO ESP32-S3</th>
  <th>Seeed Studio XIAO ESP32-S3 Sense</th>
  <th>Seeed Studio XIAO ESP32-S3 Plus</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3plus.png" style={{width:250, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
   <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
   </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
   <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
   </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html" target="_blank">
   <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>

## 介绍

Seeed Studio XIAO 系列是袖珍型开发板，具有相似的硬件结构，尺寸真正做到了拇指大小。这里的代号 “XIAO” 代表其一半特性是 “微小”，而另一半则是 “强大”。

Seeed Studio XIAO ESP32-S3 Sense 集成了摄像头传感器、数字麦克风和 SD 卡支持。结合嵌入式机器学习算力与成像能力，这块开发板可以成为你入门智能语音与视觉 AI 的绝佳工具。

:::tip
**OV2640 摄像头**已停产，后续的 XIAO ESP32-S3 Sense 使用 **OV3660 摄像头**型号。不过，Wiki 上的摄像头示例代码仍然适用。
:::

### 规格
<table>
  <tr>
    <th>产品</th>
    <td><a href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">XIAO ESP32-S3</a></td>
    <td><a href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">XIAO ESP32-S3 Sense</a></td>
    <td><a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html">XIAO ESP32-S3 Plus</a></td>
  </tr>
  <tr>
    <th>处理器</th>
    <td colspan="3">ESP32-S3R8<br/>Xtensa LX7 双核 32 位处理器，最高运行频率 240 MHz</td>
  </tr>
  <tr>
    <th>无线</th>
    <td colspan="3">完整的 2.4GHz Wi-Fi 子系统<br/>Bluetooth Low Energy 5.0 / Bluetooth Mesh</td>
  </tr>
  <tr>
    <th>板载传感器</th>
    <td>/</td>
    <td>1x OV3660 摄像头传感器<br/>1x 数字麦克风</td>
    <td>/</td>
  </tr>
  <tr>
    <th>存储</th>
    <td>片上 8MB PSRAM 和 8MB Flash</td>
    <td>片上 8MB PSRAM 和 8MB Flash<br/>板载 SD 卡槽，支持 32GB FAT</td>
    <td>片上 8MB PSRAM 和 16MB Flash</td>
  </tr>
  <tr>
    <th>接口</th>
    <td>1x UART<br/>1x IIC<br/>1x SPI<br/>11x GPIO(PWM)<br/>9x ADC<br/>1x 用户 LED<br/>1x 充电 LED<br/>1x 复位按钮<br/>1x Boot 按钮</td>
    <td>1x UART<br/>1x IIC<br/>1x IIS<br/>1x SPI<br/>11x GPIO（PWM）<br/>9x ADC<br/>1x 用户 LED<br/>1x 充电 LED<br/>1x 板对板连接器（带 2 个额外 GPIO）<br/>1x 复位按钮<br/>1x Boot 按钮</td>
    <td>2x UART<br/>1x IIC<br/>1x IIS<br/>2x SPI<br/>18x GPIO（PWM）<br/>9x ADC<br/>1x 用户 LED<br/>1x 充电 LED<br/>1x 板对板连接器<br/>1x 复位按钮<br/>1x Boot 按钮</td>
  </tr>
  <tr>
    <th>尺寸</th>
    <td>21 x 17.8mm</td>
    <td>21 x 17.8 x 15mm（带扩展板）</td>
    <td>21 x 17.8mm</td>
  </tr>
  <tr>
    <th>供电（典型值）</th>
    <td colspan="3">输入电压（Type-C）：5V<br/>输入电压（BAT）：3.7V</td>
  </tr>
  <tr>
    <th rowspan="4">功耗</th>
    <td>电路工作电压：<br/>- Type-C: 5V@19mA<br/>- BAT: 3.8V@22mA</td>
    <td>电路工作电压：<br/>`- Type-C: 5V@38.3mA`<br/>`- BAT: 3.8V@43.2mA (with expansion board)`</td>
    <td>电路工作电压：<br/>- Type-C: 5V@28mA<br/>- BAT: 3.8V@35mA</td>
  </tr>
  <tr>
    <td>/</td>
    <td>Webcam Web 应用：<br/>- Type-C：<br/>-- 平均功耗：5V/~140mA<br/>-- 峰值功耗（图像采集）：5V/~347mA<br/>- 电池：<br/>-- 平均功耗：3.8V/~155mA<br/>-- 峰值功耗（图像采集）：3.8V/~366mA</td>
    <td>/</td>
  </tr>
  <tr>
    <td>/</td>
    <td>麦克风录音 &amp; SD 卡写入：<br/>- Type-C：<br/>-- 平均功耗：5V/54.58mA<br/>-- 峰值功耗：5V/86.7mA<br/>- 电池：<br/>-- 平均功耗：3.8V/64.5mA<br/>-- 峰值功耗：3.8V/109.3mA</td>
    <td>/</td>
  </tr>
  <tr>
    <td>50mA（快速）/ 3.8mA（涓流）</td>
    <td>/</td>
    <td>充电电流：<br/>100mA（快速）/ 0.9mA（涓流）</td>
  </tr>
  <tr>
    <th>低功耗模式（典型值）<br/>(供电电压：3.8V)</th>
    <td>Modem-sleep 模式：27mA<br/>Light-sleep 模式：2mA<br/>Deep Sleep 模式：14μA</td>
    <td>Modem-sleep 模式：44mA<br/>Light-sleep 模式：5mA<br/>Deep Sleep 模式：3mA</td>
    <td>Modem-sleep 模式：3.8V/31.6 mA<br/>Light-sleep 模式：3.8V/2.45 mA<br/>Deep Sleep 模式：3.8V/33.51 μA</td>
  </tr>
  <tr>
    <th>Wi-Fi 使能功耗（典型值）</th>
    <td>Active 模式：100 mA</td>
    <td>Active 模式：110 mA（带扩展板）</td>
    <td>Active 模式：81 mA</td>
  </tr>
  <tr>
    <th>BLE 使能功耗（典型值）</th>
    <td>Active 模式：85 mA</td>
    <td>Active 模式：102 mA（带扩展板）</td>
    <td>Active 模式：101 mA</td>
  </tr>
  <tr>
    <th>工作温度</th>
    <td colspan="3">-20°C ~ 65°C</td>
  </tr>
</table>

### 特性

- **强大的 MCU 开发板**：集成 ESP32S3 32 位双核 Xtensa 处理器芯片，最高运行频率 240 MHz，板载多种开发接口，支持 Arduino / MicroPython
- **高级功能**（适用于 Sense）：可拆卸的 **OV2640 摄像头传感器，分辨率 1600x1200**，以及 **OV3660 摄像头传感器，分辨率 2048x1536**，兼容 OV5640 摄像头传感器，并集成额外的数字麦克风
- **精心设计的电源方案**：具备锂电池充电管理能力，提供 4 种功耗模式，在深度睡眠模式下功耗低至 14μA
- **充裕存储，释放更多可能**：提供 8MB PSRAM 和 8MB FLASH（**Plus** 版本为 16MB），支持 SD 卡槽扩展 32GB FAT 存储（仅适用于 XIAO ESP32-S3）
- **出色的射频性能**：支持 2.4GHz Wi-Fi 和 BLE 双无线通信，连接 U.FL 天线时支持 100m+ 远距离通信
- **拇指大小的紧凑设计**：21 x 17.8mm，采用 XIAO 经典外形尺寸，适用于可穿戴设备等空间受限项目

<table align="center">
 <tr>
     <th>项目</th>
     <th style={{width:300, height:'auto'}}>OV3660 摄像头</th>
        <th style={{width:300, height:'auto'}}>OV2640 摄像头</th>
 </tr>
    <tr>
        <th>在 (640*480) 下的最大功耗</th>
        <td align="center">Active 模式：<strong>~ 0.6A</strong></td>
        <td align="center">Active 模式：<strong>~ 0.65A</strong></td>
    </tr>
    <tr>
        <th>在 (640*480) 下的平均功耗</th>
        <td align="center">Active 模式：<strong>~ 0.12A</strong></td>
        <td align="center">Active 模式：<strong>~ 0.24A</strong></td>
    </tr>
    <tr>
        <th>在 (640*480) 下的最小功耗</th>
        <td align="center">Active 模式：<strong>~ 0.12A</strong></td>
        <td align="center">Active 模式：<strong>~ 0.15A</strong></td>
    </tr>
</table>

## 硬件概览

在开始之前，了解一些产品的基本参数非常重要。下表提供了 Seeed Studio XIAO ESP32-S3 的特性信息。

<Tabs>
<TabItem  value="(Sense)" label="XIAO ESP32-S3/XIAO ESP32-S3 Sense" default>

<table align="center">
 <tr>
     <th>XIAO ESP32-S3/XIAO ESP32-S3 Sense 正面标注示意图</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32-S3/XIAO ESP32-S3 Sense 背面标注示意图</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32-S3/XIAO ESP32-S3 Sense 引脚列表</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

**引脚映射**
| XIAO 引脚               | 功能             | 芯片引脚                                                | 复用功能           | 描述                                  |
| :---------------------: | :-------------: | :----------------------------------------------------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS             |                                                        |                    | 电源输入/输出                         |
| GND                     |                  |                                                        |                    |                                      |
| 3V3                     | 3V3_OUT          |                                                        |                    | 电源输出                             |
| D0                      | 模拟             | GPIO1                                                  | TOUCH1             | GPIO，ADC                            |
| D1                      | 模拟             | GPIO2                                                  | TOUCH2             | GPIO，ADC                            |
| D2                      | 模拟             | GPIO3                                                  | TOUCH3             | GPIO，ADC                            |
| D3                      | 模拟             | GPIO4                                                  | TOUCH4             | GPIO，ADC                            |
| D4                      | 模拟，SDA        | GPIO5                                                  | TOUCH5             | GPIO，I2C 数据，ADC                  |
| D5                      | 模拟，SCL        | GPIO6                                                  | TOUCH6             | GPIO，I2C 时钟，ADC                  |
| D6                      | TX               | GPIO43                                                 |                    | GPIO，UART 发送                      |
| D7                      | RX               | GPIO44                                                 |                    | GPIO，UART 接收                      |
| D8                      | 模拟，SCK        | GPIO7                                                  | TOUCH7             | GPIO，SPI 时钟，ADC                  |
| D9                      | 模拟，MISO       | GPIO8                                                  | TOUCH8             | GPIO，SPI 数据，ADC                  |
| D10                     | 模拟，MOSI       | GPIO9                                                 | TOUCH9             | GPIO，SPI 数据，ADC                  |
| D11                     | 模拟             | GPIO42                                                 | TOUCH12            | GPIO，ADC                            |
| D12                     | 模拟             | GPIO41                                                 | TOUCH13            | GPIO，ADC                            |
| MTDO                    |                  | GPIO40                                                 |                    | JTAG                                 |
| MTDI                    |                  | GPIO41                                                 |                    | JTAG，ADC                            |
| MTCK                    |                  | GPIO39                                                 |                    | JTAG，ADC                            |
| MTMS                    |                  | GPIO42                                                 |                    | JTAG，ADC                            |
| Reset                   |                  | CHIP_PU                                                |                    |                                    |
| Boot                    |                  | GPIO0                                                  |                    | 进入 Boot 模式                       |
| U.FL-R-SMT1             |                  | LNA_IN                                                 |                    | UFL 天线                             |
| CHARGE_LED              |                  |                                                |                    | 充电指示灯                            |
| USER_LED                |                  | GPIO21                                                 |                    | 用户指示灯                           |
| Digital microphone_CLK  |                  | GPIO42                                                 |                    | MIC 的 PDM 时钟引脚                  |
| Digital microphone_DATA |                  | GPIO41                                                 |                    | MIC 的 PDM 数据信号引脚              |
| Onboard SD Card__CS     |                  | GPIO3                                                  |                    | SD 卡片选引脚                        |
| Onboard SD Card_SCK     |                  | GPIO7                                                  |                    | SD 卡时钟引脚                        |
| Onboard SD Card_MISO    |                  | GPIO8                                                  |                    | SD 卡数据输入引脚                    |
| Onboard SD Card Slot_MOSI |                | GPIO10                                                 |          |      SD 卡数据输出引脚              |

**摄像头**
| 芯片引脚  | 描述                                  |
| :-------: | :---------------------------------- |
| GPIO10    | 摄像头相关时钟引脚                  |
| GPIO11    | 摄像头视频数据引脚 (Y8)             |
| GPIO12    | 摄像头视频数据引脚 (Y7)             |
| GPIO13    | 摄像头像素时钟引脚                  |
| GPIO14    | 摄像头视频数据引脚 (Y6)             |
| GPIO15    | 摄像头视频数据引脚 (Y2)             |
| GPIO16    | 摄像头视频数据引脚 (Y5)             |
| GPIO17    | 摄像头视频数据引脚 (Y3)             |
| GPIO18    | 摄像头视频数据引脚 (Y4)             |
| GPIO40    | 摄像头 I2C 数据引脚                 |
| GPIO39    | 摄像头 I2C 时钟引脚                 |
| GPIO38    | 摄像头垂直同步引脚                  |
| GPIO47    | 摄像头水平同步引脚                  |
| GPIO48    | 摄像头视频数据引脚 (Y9)             |
</TabItem>
<TabItem value="Plus" label="XIAO ESP32-S3 Plus" default>

<table align="center">
 <tr>
  <th>XIAO ESP32-S3 Plus 正面标注示意图</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_front.png
  " style={{width:700, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <th>XIAO ESP32-S3 Plus 背面标注示意图</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_back.png
  " style={{width:700, height:'auto'}}/></div></td>
 </tr>
 <tr>
 <th>XIAO ESP32-S3 Plus 引脚列表</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_pinout.png
  " style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>


**引脚映射**

| XIAO 引脚               | 功能             | 芯片引脚  | 复用功能              | 描述                                  |
| :---------------------: | :-------------: | :-------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS             |           |                    | 电源输入/输出                        |
| GND                     |                  |           |                    |                                      |
| 3V3                     | 3V3_OUT          |           |                    | 电源输出                             |
| D0                      | 模拟             | GPIO1     |                    | GPIO，ADC                            |
| D1                      | 模拟             | GPIO2     |                    | GPIO，ADC                            |
| D2                      | 模拟             | GPIO3     |                    | GPIO，ADC                            |
| D3                      | 模拟             | GPIO4     |                    | GPIO，ADC                            |
| D4                      | 模拟，SDA        | GPIO5     |                    | GPIO，I2C 数据，ADC                  |
| D5                      | 模拟，SCL        | GPIO6     |                    | GPIO，I2C 时钟，ADC                  |
| D6                      | TX               | GPIO43    |                    | GPIO，UART 发送                      |
| D7                      | RX               | GPIO44    |                    | GPIO，UART 接收                      |
| D8                      | 模拟，SCK        | GPIO7     |                    | GPIO，SPI 时钟，ADC                  |
| D9                      | 模拟，MISO       | GPIO8     |                    | GPIO，SPI 数据，ADC                  |
| D10                     | 模拟，MOSI       | GPIO9    |                    | GPIO，SPI 数据，ADC                  |
| D11                     |                  | GPIO38    |                    | GPIO，ADC                            |
| D12                     |                  | GPIO39    |                    | GPIO，ADC                            |
| D13                     |                  | GPIO40    |                    |                                      |
| D14                     |                  | GPIO41    |                    |                                      |
| D15                     |                  | GPIO42    |                    |                                      |
| D16                     |                  | GPIO10    |                    |                                      |
| D17                     |                  | GPIO13    |                    |                                      |
| D18                     |                  | GPIO12    |                    |                                      |
| D19                     |                  | GPIO11    |                    |                                      |
| MTDO                    |                  | GPIO40    |                    | JTAG                                 |
| MTDI                    |                  | GPIO41    |                    | JTAG，ADC                            |
| MTCK                    |                  | GPIO39    |                    | JTAG，ADC                            |
| MTMS                    |                  | GPIO42    |                    | JTAG，ADC                            |
| Reset                   |                  | CHIP_PU   |                    | 复位                                  |
| Boot                    |                  | GPIO0     |                    | 进入 Boot 模式                       |
| ADC_BAT                 |                  | GPIO10    |                    | 读取电池电压值                       |
| U.FL-R-SMT1             |                  | LNA_IN    |                    | UFL 天线                             |
| CHARGE_LED              |                  | VCC_3V3   |                    | 充电指示灯                           |
| USER_LED                |                  | GPIO21    |                    | 用户指示灯                           |

</TabItem>

</Tabs>

:::caution
- 尽管 XIAO ESP32-S3 将 GPIO41 和 GPIO42 分配给 A11 和 A12 引脚，但由于 ESP32-S3 芯片本身的特性，A11 和 A12 引脚不支持 ADC 功能。请务必加以区分和辨别。

- XIAO ESP32-S3 Plus 的 B2B 连接器兼容 [Wio-SX1262 extension board](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html)，但不兼容插接式摄像头传感器板。
:::

### 电源引脚

- 5V - 这是来自 USB 接口的 5V 输出。你也可以将其用作电压输入，但必须在外部电源和该引脚之间串联某种二极管（肖特基、小信号、功率二极管），二极管阳极接电池，阴极接 5V 引脚。
- 3V3 - 这是板载稳压器的稳压输出。你可以从中汲取 700mA 电流
- GND - 电源/数据/信号地

### 启动配置引脚（Strapping Pins）

在每次上电或复位时，芯片都需要一些初始配置参数，例如以哪种启动模式加载芯片、闪存电压等。这些参数通过启动配置引脚传递。复位之后，这些引脚会作为普通 IO 引脚工作。

在芯片复位时，由相应启动配置引脚控制的参数如下：

- **芯片启动模式** – GPIO0 和 GPIO46
- **VDD_SPI 电压** – GPIO45
- **ROM 信息打印** – GPIO46
- **JTAG 信号源** – GPIO3

在芯片复位时，GPIO0、GPIO45 和 GPIO46 连接到芯片内部的弱上拉/下拉电阻。
这些电阻决定了启动配置引脚的默认位值。如果启动配置引脚连接到外部高阻抗电路，这些电阻也会决定其位值。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/110.png" style={{width:400, height:'auto'}}/></div>

若要改变位值，应将启动配置引脚连接到外部下拉/上拉电阻。如果将 ESP32-S3 作为从设备由主 MCU 控制，则也可以由主 MCU 控制启动配置引脚的电压电平。

所有启动配置引脚都带有锁存器。在系统复位时，锁存器会采样各自启动配置引脚的位值，并将其保存，直到芯片断电或关机。锁存器状态不能通过其他方式改变。这样可以在整个芯片运行期间保持启动配置引脚的值，并在复位后释放这些引脚，用作普通 IO 引脚。

关于启动配置引脚的时序要求，包括建立时间和保持时间等参数。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/111.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/112.png" style={{width:600, height:'auto'}}/></div>

## 入门指南

为了让你更快上手 XIAO ESP32-S3，请先阅读下面的软硬件准备内容，对 XIAO 进行准备。

1. **XIAO ESP32-S3**

常规版本中预置的出厂程序是触摸引脚点亮指示灯程序。当你给 XIAO 上电后，触摸它的一些引脚，橙色用户指示灯就会亮起。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/105.jpg" style={{width:600, height:'auto'}}/></div>

2. **XIAO ESP32-S3 Sense**

XIAO ESP32-S3 Sense 出厂时预装了 WebCam 示例程序。你只需为 XIAO 安装好天线并上电即可使用该程序。详细信息可以阅读关于此程序的 Wiki。

- [视频流传输](https://wiki.seeedstudio.com/cn/xiao_esp32s3_camera_usage#project-ii-video-streaming)

:::note
自 **2025 年 6 月** 起，XIAO ESP32-S3 Sense 的出厂固件会启用一个默认的 AP Wi‑Fi，凭据如下：

- **SSID:** `XIAO_ESP32S3_Sense`
- **Password:** `seeedstudio`
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/98.png" style={{width:900, height:'auto'}}/></div>

### 硬件准备

#### 焊接排针

XIAO ESP32-S3 默认不焊接排针出厂，你需要自备排针并将其焊接到 XIAO 对应的引脚上，这样才能连接扩展板或传感器。

由于 XIAO ESP32-S3 体积非常小，在焊接排针时请务必小心，不要把不同的引脚焊连在一起，也不要让焊锡粘到屏蔽罩或其他元器件上。否则可能导致 XIAO 短路或无法正常工作，由此造成的后果需由用户自行承担。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/4.jpg" style={{width:400, height:'auto'}}/></div>

#### 天线安装

在 XIAO ESP32-S3 正面左下角，有一个独立的 “WiFi/BT Antenna Connector”。为了获得更好的 WiFi/Bluetooth 信号，你需要取出包装内附带的天线，并将其安装到该连接器上。

天线的安装有一个小技巧，如果直接用力向下按，你会发现非常难按下去，而且手指会很疼！正确的安装方式是先将天线连接器的一侧卡入连接器座中，然后再轻轻按下另一侧，天线就能安装到位。

拆卸天线也是同样的道理，不要用蛮力直接往外拽天线，而是从一侧用力向上撬起，这样天线就很容易取下。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

#### 扩展板安装（适用于 Sense）

如果你购买的是 XIAO ESP32-S3 Sense，那么你还会得到一块扩展板。该扩展板上集成了 1600x1200 OV2640/2048x1536 OV3660 摄像头传感器、板载 SD 卡槽以及数字麦克风。

通过将扩展板与 XIAO ESP32-S3 Sense 连接，你就可以使用扩展板上的各项功能。

安装扩展板非常简单，你只需要将扩展板上的连接器与 XIAO ESP32-S3 上的 B2B 连接器对齐，用力按下并听到 “咔哒” 一声，安装就完成了。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

我们现在上架了一款全新、与 XIAO ESP32-S3 Sense 完全兼容的高性能摄像头 OV5640，如果你购买它，就可以更换摄像头来使用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

如果你需要了解 OV5640 的详细参数信息，可以参考下表。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/datasheet.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Wiki 中所有与摄像头相关的程序都兼容 OV5640、OV2640 和 OV3660 摄像头。
:::

#### 安装升级版散热片

通过安装我们升级版的散热片，为你的 XIAO ESP32-S3 Sense 提供最佳散热效果。这个全新设计专门用来解决旧款在高强度运行（如使用摄像头）时散热不足的问题。根据反馈，原有散热片无法充分散热，因此我们开发了更高效的解决方案。

<details>
<summary>点击查看性能对比</summary>

我们的测试结果表明，升级版散热片相较原始方案具有明显优势：

| 测试样本              | 背面峰值温度              |
| --------------------- | ------------------------- |
| **无散热片**          | 63.6°C                    |
| **双散热片**          | 53.5°C (🔻10°C)           |

***测试详情：***

- **环境**：空调房（约 27°C）
- **测温工具**：OMEGA CL3515R 热电偶
- **测量位置**：XIAO ESP32-S3 背面散热焊盘
- **测试固件**：WebCamera
- **供电方式**：Type-C 5V
- **运行时长**：1 小时

***关键结果：***

- 安装散热片的设备在运行超过一小时后仍保持稳定，在达到峰值温度时也没有出现性能下降。
- 在使用 WebCamera 的 SVGA（800x600）模式测试时：
  - XIAO ESP32-S3 运行流畅；
  - 视频输出顺滑；
  - 温度显著降低，确保了可靠性能，没有出现掉帧或断连情况。

</details>

***在开始安装前，请先准备以下物品：***

- 选定的散热片（单散热片或双散热片）
- 一块干净的 ESP32S3

在开始之前，请确保设备已断电并从所有电源上拔下。

:::tip notice

***购买说明：*** 在购买 XIAO ESP32-S3 Sense 时，需要注意只有**带摄像头的型号**才会附带散热片。如果你购买的是不带摄像头的 ESP32S3 版本，则需要单独购买散热片。

***安装提示：*** 安装时请优先确保散热片覆盖在 Thermal PAD 上，因为它正好位于 ESP32S3 芯片上方，是主要的发热源。正确对齐可以保证最佳散热效果，同时请尽量保持 BAT 引脚不被遮挡。
:::

现在，让我们开始安装过程：

***步骤 1. 准备散热片：***
首先撕下散热片上的保护膜，露出导热胶面，为牢固贴合 ESP32S3 芯片做好准备。

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/heat-sink.jpg" style={{width:400, height:'auto'}}/></div></td>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/remove-heat-sink-cover.jpg" style={{width:400, height:'auto'}}/></div></td>

***步骤 2. 安装散热片：***

<Tabs>
  <TabItem value="single" label="单散热片" default>

这种更小、更紧凑的方案足以应对日常使用，并且可以完全访问所有 GPIO 引脚。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/pin-single-heat-sink-install.jpg" style={{width:400, height:'auto'}}/></div>

  </TabItem>
  <TabItem value="dual" label="双散热片">

这种更大的方案提供更强的散热能力，非常适合高性能任务，但可能会限制对部分 GPIO 引脚的访问。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/pin-dual-heat-sink-install.png" style={{width:400, height:'auto'}}/></div>

:::note
如果你想使用 XIAO ESP32-S3 Plus 的 BAT 引脚，那么这种双散热片方案并不适用。
:::

  </TabItem>
</Tabs>

***步骤 3. 最终检查与测试***

安装完成后，请确认所有部件都已牢固固定，不存在短路风险。检查散热片是否对齐正确并牢固贴合。

### 软件准备

XIAO ESP32-S3 推荐使用 Arduino IDE 作为编程工具，因此在软件准备阶段，你需要先完成 Arduino 的安装。

:::tip
如果这是你第一次使用 Arduino，我们强烈建议你参考文档 [Getting Started with Arduino](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 根据你的操作系统下载并安装稳定版本的 Arduino IDE。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

- **步骤 2.** 启动 Arduino 应用程序。

- **步骤 3.** 在 Arduino IDE 中添加 ESP32 开发板包。

<Tabs>
<TabItem value='For Windows'>

依次进入 **File > Preferences**，在 **"Additional Boards Manager URLs"** 中填入以下链接：

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/6.png" style={{width:800, height:'auto'}}/></div>

依次进入 **Tools > Board > Boards Manager...**，在搜索框中输入关键字 **esp32**，选择最新版本的 **esp32** 并安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
XIAO ESP32-S3 的板载支持包要求版本为 **2.0.8** 及以上。
:::

- **步骤 4.** 选择你的开发板和端口。

在 Arduino IDE 顶部，你可以直接选择端口。该端口通常为 COM3 或更高（**COM1** 和 **COM2** 通常保留给硬件串口）。

</TabItem>
<TabItem value='For Mac OS'>

依次进入 **Arduino IDE > Preferences**，在 **"Additional Boards Manager URLs"** 中填入以下链接：

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

导航到 **Tools > Board > Boards Manager...**，在搜索框中输入关键字 **esp32**，选择最新版本的 **esp32** 并进行安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
XIAO ESP32-S3 的板载包需要 **2.0.8** 及以上版本才可用。
:::

- **步骤 4.** 选择你的开发板和端口。

在 Arduino IDE 顶部你可以直接选择端口。通常名称中会带有 "usbmodem" 或 "usbserial"。如果不确定，可以先拔掉再插上，查看是哪个端口消失了。

</TabItem>
</Tabs>

<!-- :::tip
我们已经向 ESP32 提交了合并请求，当 ESP32 发布下一版板载包更新时，就可以在 Arduino IDE 中搜索并使用 XIAO ESP32-S3。

在此之前，你可以手动将 XIAO ESP32-S3 板载包添加到 Arduino 目录中来使用它。
:::

<div class="github_container" style={{textAlign: 'center'}}><a class="github_item" href="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32S3_Package.zip" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Download the Package</font></span></strong></a></div>

下载上述 zip 文件后，请解压，你会看到两个文件。一个是 **XIAO_ESP32S3 文件夹**，另一个是 **boards.txt**。

- **在 Windows PC 下**

    Windows 中 ESP32 默认的板载包存储路径为：

    `C:\Users\${UserName}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7`

    我们需要将下载的 **boards.txt** 文件复制到上述路径，覆盖此路径下原有的 **boards.txt** 文件。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/8.png" style={{width:600, height:'auto'}}/></div>

    `C:\Users\${UserName}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7\variants`

    然后进入 **variants 文件夹**，将 **XIAO_ESP32S3 文件夹** 复制进去。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/7.png" style={{width:800, height:'auto'}}/></div>

- **在 MacOS PC 下**

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7`

    我们需要将下载的 **boards.txt** 文件复制到上述路径，覆盖此路径下原有的 **boards.txt** 文件。

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7/variants`

    然后进入 **variants 文件夹**，将 **XIAO_ESP32S3 文件夹** 复制进去。

- **步骤 4.** 关闭 Arduino IDE 并重新打开。-->

<Tabs>
<TabItem value="(Sense)" label="适用于 XIAO ESP32-S3 (Sense)" default>

同样，在左侧的开发板中搜索 **xiao**，选择 **XIAO_ESP32S3**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/10.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Plus" label="适用于 XIAO ESP32-S3 Plus" default>

它将很快发布，请持续关注后续更新。

</TabItem>
</Tabs>

完成以上准备后，你就可以开始为 XIAO ESP32-S3 编写程序并进行编译和上传了。

### BootLoader 模式

有时，使用了错误的程序会导致 XIAO 丢失端口或无法正常工作。常见问题包括：

- XIAO 已连接到电脑，但*找不到端口号*。
- XIAO 已连接并出现端口号，但*程序上传失败*。

当你遇到以上两种情况时，可以尝试让 XIAO 进入 BootLoader 模式，这可以解决大多数设备无法识别和上传失败的问题。具体方法如下：

- **步骤 1**. 按住 XIAO ESP32-S3 上的 `BOOT` 按钮不要松开。
- **步骤 2**. 保持按住 `BOOT` 按钮，然后通过数据线连接电脑，连接电脑后再松开 `BOOT` 按钮。
- **步骤 3**. 上传 **File > Examples > 01.Basics > Blink** 程序来检查 XIAO ESP32-S3 的运行情况。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>

### 复位

当程序运行异常时，你可以在上电时按一次 `Reset`，让 XIAO 重新执行已上传的程序。

当你在上电时按住 `BOOT` 键，然后再按一次 `Reset` 键，也可以进入 BootLoader 模式。

### 运行你的第一个 Blink 程序

到现在为止，相信你已经对 XIAO ESP32-S3 的特性和硬件有了比较全面的了解。接下来，我们以最简单的 Blink 程序为例，为你的 XIAO ESP32-S3 完成第一次闪烁！

- **步骤 1.** 启动 Arduino 应用程序。
- **步骤 2.** 导航到 **File > Examples > 01.Basics > Blink**，打开该程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **步骤 3.** 将开发板型号选择为 **XIAO ESP32-S3**，并选择正确的端口号上传程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/12.png" style={{width:1000, height:'auto'}}/></div>

当程序成功上传后，你会看到如下输出信息，并且可以观察到 XIAO ESP32-S3 右侧的橙色 LED 正在闪烁。

<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/13.png" style={{width:800, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/14.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

恭喜你，已经学会如何为 XIAO ESP32-S3 编写并上传程序！

:::note
只有当 XIAO ESP32-S3 上的用户 LED 引脚被设置为高电平时，LED 才会熄灭；只有当该引脚被设置为低电平时，LED 才会点亮。
:::

## 电池使用

XIAO ESP32-S3 系列内置了电源管理芯片，使 XIAO ESP32-S3 可以通过电池独立供电，或者通过 XIAO ESP32-S3 的 USB 端口为电池充电。

如果你想为 XIAO 接入电池，我们建议你购买合格的可充电 3.7V 锂电池。焊接电池时，请注意区分正负极。电源负极应连接在靠近 USB 端口的一侧，电源正极则连接在远离 USB 端口的一侧。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/16.jpg" style={{width:400, height:'auto'}}/></div>

:::note
由于 XIAO ESP32-S3 的所有 GPIO 引脚都已分配了各自的功能，我们没有为电池引脚配置单独的 GPIO。这意味着我们无法通过读取某个 GPIO 的模拟值在软件层面获取电池电压。如有需要，你可以考虑将电池的正负极连接到其中两个引脚上来测量电池电压。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/17.png" style={{width:800, height:'auto'}}/></div>
:::

:::caution
当你使用电池供电时，5V 引脚上将不会有电压。
:::

同时，我们为电池充电设计了一个红色指示灯，通过指示灯的显示来告知用户当前电池的充电状态。

1. 当 XIAO ESP32-S3 未连接电池时，连接 Type-C 线后红灯会亮起，并在 30 秒后熄灭。
2. 当连接电池并插入 Type-C 线进行充电时，红灯会闪烁。
3. 当通过 Type-C 为电池充满电后，红灯会熄灭。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/104.jpg" style={{width:600, height:'auto'}}/></div>

## UF2 BootLoader

我们了解到，一些用户希望可以将 UF2 文件直接烧录到 XIAO 上，以实现批量烧录程序的流程。这里我们将介绍这种方法。

<Tabs>
<TabItem value="method1" label="方法一" default>

:::note
该方法目前仅适用于 Windows 系统。
:::

**步骤 1**：下载并解压脚本

下载所需的脚本压缩包，并将其解压到本地电脑：

*https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/xiaos3-bin2uf2.zip*

**步骤 2**：将 BIN 文件转换为 UF2 文件

在编译并保存 Arduino 程序后，你可以导出二进制 `BIN` 文件。该文件会生成在你的 Arduino 项目文件夹中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/106.png" style={{width:600, height:'auto'}}/></div>

将 `BIN` 文件复制到之前解压得到的 **xiaos3-bin2uf2** 目录中。然后运行 **convert_uf2.bat** 脚本来生成 UF2 文件，过程中会需要你输入 `bin` 文件的名称。

**步骤 3**：进入 UF2 BootLoader 模式

将 XIAO 连接到电脑并运行 **boot_uf2.bat** 脚本。XIAO 会在电脑上显示为一个 USB 驱动器，这表明它已成功进入 UF2 BootLoader 模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/107.png" style={{width:800, height:'auto'}}/></div>

**步骤 4**：将 UF2 文件复制到 XIAO ESP32-S3

打开 XIAO ESP32-S3 的 USB 驱动器，并将转换后的 UF2 文件复制到其中。复制完成后，XIAO 的 USB 驱动器会自动消失，程序将开始运行。

:::tip

1. 请确保你的程序已正确编译并能正常运行，否则 UF2 文件可能无法按预期执行。
2. 在 **xiaos3-bin2uf2** 文件夹中提供了一个用于 Blink 的示例 UF2 文件。上传后，XIAO ESP32-S3 上的橙色 LED 将会闪烁。你可以使用此 UF2 文件进行测试。

:::

**步骤 5**：重新进入 UF2 BootLoader 模式

如果你需要重新进入 UF2 BootLoader 模式来上传另一个 UF2 文件，请快速按下 **Reset** 按钮，然后按下 **Boot** 按钮。无需再次运行 boot_uf2.bat 脚本。

:::note
快速按下 Reset，然后按下 Boot！
:::

</TabItem>

<TabItem value="method2" label="方法 II" >

该项目由来自 IDF 的自定义第二阶段引导加载程序和作为第三阶段引导加载程序的 UF2 工厂应用程序组成。

**注意：** 由于 IDF 正在积极开发且经常变更，它作为子模块包含在 lib/esp-idf 中，请在该目录下运行导出脚本以正确完成环境配置。

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://github.com/adafruit/tinyuf2/tree/master/ports/espressif" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div>

</TabItem>
</Tabs>

## 故障排查

### Q1：如果上传程序失败 / 程序运行异常 / 找不到设备端口，我该怎么办？

如果你遇到上述问题，建议你先尝试按下 XIAO ESP32-S3 上的复位按钮，尝试让程序重新运行。如果问题仍然存在，请重新检查你的程序，并阅读 **[BootLoader 模式](#bootloader-模式)** 中提供的方法来恢复设备。

### Q2：为什么我的 XIAO 在圆角处有不平齐的问题？这是质量问题吗？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/corners.png" style={{width:500, height:'auto'}}/></div>

首先需要说明的是，这不是质量问题，也不会影响 XIAO 的正常功能。

由于高度集成，XIAO ESP32-S3 是所有 XIAO 中最复杂的一款，PCB 在工厂生产时需要拼板。由于集成度高，拼板连接只能放在四个圆角处，这就会导致图片中所示的圆角不平整问题。我们会努力改进工艺，确保在后续生产中解决这一问题。

### Q3：如何将资源部分提供的出厂固件烧录到 XIAO ESP32-S3？

资源部分提供的脚本支持 Windows。下载 zip 文件后，你会看到以下文件：

<Tabs>
<TabItem value="normal" label="XIAO ESP32-S3 出厂固件" >

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
<TabItem value="sense" label="XIAO ESP32-S3 Sense 出厂固件" >

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

要烧录固件，只需运行相应的 `.bat` 文件即可。如果烧录过程失败，请从提示中复制命令行，并在文件所在的终端中手动运行。

## 资源

### 适用于 Seeed Studio XIAO ESP32-S3

**硬件设计**
- **📄[数据手册]** [Espressif ESP32-S3 数据手册](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf )
- **📄[原理图]** [XIAO ESP32-S3 原理图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_V1.3_SCH_260115.pdf )
- **🗃️[PCB 设计文件]** 
  - [XIAO ESP32-S3 KiCad 工程](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_V1.3_SCH&PCB_260115.7z )
- **🗃️[PCB 设计库]** 
  - [XIAO 系列 KiCad 封装库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO 系列 KiCad 原理图符号库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[引脚图]** [XIAO ESP32-S3 引脚分布表](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx )

**结构设计**
- **📄[2D 尺寸]** [XIAO ESP32-S3 DXF 尺寸图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf )
- **🗃️[3D 模型]** [XIAO ESP32-S3 3D 模型](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip )

**软件与工具**
- **🗃️[出厂固件]** [XIAO ESP32-S3 出厂固件](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip )

### 适用于 Seeed Studio XIAO ESP32-S3 Sense

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->
**硬件设计**
- **📄[数据手册]** [Espressif ESP32-S3 数据手册](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf )
- **📄[原理图]** [XIAO ESP32-S3 Sense 原理图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/new-res/new-XIAO%20ESP32S3%20Sense_v1.3_SCH_260210(1).pdf)
- **🗃️[PCB 设计文件]** 
  - [XIAO ESP32-S3 Sense KiCad 工程](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/new-res/new-XIAO%20ESP32S3%20Sense_v1.3_SCH&PCB_260210(1).zip )
- **🗃️[PCB 设计库]** 
  - [XIAO 系列 KiCad 封装库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO 系列 KiCad 原理图符号库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[引脚图]** [XIAO ESP32-S3 Sense 引脚分布表](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx )

**结构设计**
- **📄[2D 尺寸]** [XIAO ESP32-S3 Sense DXF 尺寸图（顶层）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_top.dxf )
- **📄[2D 尺寸]** [XIAO ESP32-S3 Sense DXF 尺寸图（底层）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_bot.dxf )
- **🗃️[3D 模型]** [XIAO ESP32-S3 Sense 3D 模型](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-sense-3d_model.zip )
- **📄[3D 模型]** [XIAO ESP32-S3 Sense 3D 打印紫色外壳（顶盖）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp )
- **📄[3D 模型]** [XIAO ESP32-S3 Sense 3D 打印紫色外壳（底盖）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp )

**软件与工具**
- **🗃️[出厂固件]** [XIAO ESP32-S3 Sense 出厂固件](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-firmware-20240814.zip )

### 适用于 Seeed Studio XIAO ESP32-S3 Plus

**硬件设计**
- **📄[数据手册]** [Espressif ESP32-S3 数据手册](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf )
- **📄[原理图]** [XIAO ESP32-S3 Plus 原理图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Plus_V1.1_SCH_260115.pdf )
- **🗃️[PCB 设计文件]** 
  - [XIAO ESP32-S3 Plus KiCad 工程](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Plus_V1.1_KiCad_260115.zip )
  - [XIAO Plus Base（带底部焊盘引出）KiCad 工程](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_with_botton_pad_lead_out_V1.0.zip )
  - [XIAO Plus Base（不带底部焊盘引出）KiCad 工程](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_without_botton_pad_lead_out_V1.0.zip )
- **🗃️[PCB 设计库]** 
  - [XIAO 系列 KiCad 封装库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO 系列 KiCad 原理图符号库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[引脚图]** [XIAO ESP32-S3 Plus 引脚分布表](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_Pinout.xlsx )

**结构设计**
- **📄[2D 尺寸]** [XIAO ESP32-S3 Plus DXF 尺寸图（顶层）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/TOP.dxf )
- **📄[2D 尺寸]** [XIAO ESP32-S3 Plus DXF 尺寸图（底层）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/BOTTOM.dxf )
- **🔗[3D 模型]** [XIAO ESP32-S3 Plus 3D 模型](https://grabcad.com/library/seeed-studio-xiao-esp32s3-plus-1/files )

### 适用于 Seeed Studio XIAO ESP32-S3 Sense Camera

**硬件设计**
- **[OV3660]** 
  - **📄[数据手册]** [OV3660 摄像头模组规格书](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/new-res/OV3660_Camera_Module_Specification.pdf)
  - **📄[数据手册]** [OV3660 CMOS 传感器数据手册](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/OV3660_datasheet.pdf )
- **[OV5640]** 
  - **📄[数据手册]** [OV5640 摄像头模组规格书](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/new-res/OV5640_Camera_Module_Specification.pdf )
  - **📄[数据手册]** [OV5640 CMOS 传感器数据手册](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/OV5640_datasheet.pdf )
- **[OV2640]** 
  - **📄[数据手册]** [OV2640 CMOS 传感器数据手册](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/OV2640_datasheet.pdf )

<JetsonLeadQuote
  buttonText="定制报价请求"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="XIAO 报价请求"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## 课程资源

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[电子书]** [XIAO：强大性能，小巧主板——精通 Arduino 与 TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

### 其他

- **[STP]** [XIAO ESP32-S3 Sense 外壳设计（上部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp)
- **[STP]** [XIAO ESP32-S3 Sense 外壳设计（下部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp)

*其余开源资料正在整理中，敬请期待！*

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
