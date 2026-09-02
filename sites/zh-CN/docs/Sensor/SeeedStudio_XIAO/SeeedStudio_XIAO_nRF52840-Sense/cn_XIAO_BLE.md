---
description: Seeed Studio XIAO nRF52840 系列入门指南
title: Seeed Studio XIAO nRF52840 系列入门指南
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg
slug: /XIAO_BLE
sku: 102010448, 102010469, 102010632, 102010631, 102010672, 102010694, 101991463, 101991465
last_update:
  date: 9/2/2026
  author: Clara
createdAt: '2023-01-16'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/cn/XIAO_BLE/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

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
                <font color={'FFFFFF'} size={"4"}> 立即获取 🖱</font>
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
                <font color={'FFFFFF'} size={"4"}> 立即获取 🖱</font>
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
                <font color={'FFFFFF'} size={"4"}> 立即获取 🖱</font>
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
                <font color={'FFFFFF'} size={"4"}> 立即获取 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

作为 Seeed Studio XIAO 家族中的首款无线产品，**Seeed Studio XIAO nRF52840** 搭载了强大的 **Nordic nRF52840 MCU**，集成了 **Bluetooth 5.0** 连接功能。同时，它具有**小巧精致的外形尺寸**，可用于可穿戴设备和物联网项目。其**单面贴片设计**以及板载 **Bluetooth 天线**，可以极大地加速物联网项目的快速部署。

此外，该开发板还有一个进阶版本 **Seeed  Studio XIAO nRF52840 Sense**。它集成了两个额外的板载传感器。其中之一是 **脉冲密度调制 (PDM) 数字麦克风**，可以实时接收音频数据，从而用于语音/音频识别。另一个是 **6 轴惯性测量单元 (IMU)**，在诸如手势识别等 TinyML 项目中非常有用。这些板载传感器在开发板体积极小的前提下，为用户提供了极大的便利。

新升级的 **XIAO nRF52840 Plus 和 XIAO nRF52840 Sense Plus** 在功能性和易用性方面都有显著提升。多功能引脚数量增加到 **20 个**，新增了 **I2S** 和 **SPI** 资源以支持更复杂的项目，**NFC 引脚** 被引出以便更轻松地集成到物联网和智能卡应用中，同时 **BAT 引脚** 重新布局以提升焊接便利性，从而带来更友好的硬件使用体验。

与 Seeed Studio XIAO RP2040 相比，Seeed Studio XIAO nRF52840 拥有**更丰富的接口**。首先需要注意的是，板载的 **近场通信 (NFC) 接口** 是可用的。其次，在 Type-C 接口一侧配有一个小型**复位按钮**。在另一侧，有一个**三合一 LED（用户 LED）**以及一个**充电 LED**，在连接电池时用于指示充电状态。它提供 **11 个数字 I/O** 可用作 **PWM 引脚**，以及 **6 个模拟 I/O** 可用作 **ADC 引脚**。它支持 **UART、I2C 和 SPI** 三种常见串行接口。与 Seeed Studio XIAO RP2040 相同，它配备了**板载 2 MB Flash**，这意味着它同样可以使用 **Arduino、MicroPython、CircuitPython 或其他编程语言** 进行编程。

Seeed Studio XIAO nRF52840 Sense 与 Seeed Studio XIAO 扩展板兼容。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 特性

- 强大的无线能力：Bluetooth 5.0，板载天线
- 强劲 CPU：Nordic nRF52840，ARM® Cortex®-M4 32 位处理器，带 FPU，64 MHz
- 超低功耗：待机功耗小于 5μA
- 电池充电芯片：支持锂电池充放电管理
- 板载 2 MB Flash
- 板载 PDM 麦克风（仅在 Seeed Studio XIAO nRF52840 Sense 上）
- 板载 6 轴 LSM6DS3TR-C IMU（仅在 Seeed Studio XIAO nRF52840 Sense 上）
- 超小尺寸：21 x 17.8mm，Seeed Studio XIAO 系列可穿戴设备经典外形尺寸
- 丰富接口：XIAO nRF52840（Sense）上提供 1xUART、1xI2C、1xSPI、1xNFC、1xSWD、11xGPIO(PWM)、6xADC；XIAO nRF52840（Sense）Plus 上提供 2xUART、1xI2C、2xSPI、1xI2S、1xNFC、1xSWD、18xGPIO(PWM)、6xADC
- 单面贴片、表面贴装设计

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
      <td colspan="4" align="center">Nordic nRF52840, ARM® Cortex®-M4 32-bit processor with FPU, 64 MHz</td>
  </tr>
  <tr>
      <th>无线连接</th>
      <td colspan="4" align="center">Bluetooth Low Energy 5.4/
Bluetooth Mesh/NFC</td>
  </tr>
  <tr>
      <th>存储器</th>
      <td colspan="4" align="center">256 KB RAM,1MB Flash 2MB onboard Flash</td>
  </tr>
  <tr>
      <th>板载传感器</th>
      <td align="center">N/A</td>
      <td align="center">6 自由度 IMU (LSM6DS3TR-C), PDM 麦克风</td>
      <td align="center">N/A</td>
      <td align="center">6 自由度 IMU (LSM6DS3TR-C), PDM 麦克风</td>
  </tr>
  <tr>
      <th>接口</th>
      <td colspan="2" align="center">1xI2C, 1xUART, 1xSPI</td>
      <td colspan="2" align="center">1xI2C, 2xUART, 2xSPI, 1xI2S</td>
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
      <th>板载 LED</th>
      <td colspan="4" align="center">三合一 LED / 充电 LED</td>
  </tr>
  <tr>
      <th>电池充电芯片</th>
      <td colspan="4" align="center">BQ25101</td>
  </tr>
  <tr>
      <th>编程语言</th>
      <td colspan="4" align="center">Arduino/ MicroPython/ CircuitPython</td>
  </tr>
  </table>
</div>

## 硬件概览

<Tabs>
<TabItem value="nRF52840" label="XIAO nRF52840" default>

### XIAO nRF52840 正面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO nRF52840 背面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**引脚映射**

| XIAO 引脚              | 功能             | 芯片引脚       | 描述                                                | Arduino 名称 |
| :---------------------: | :-------------: | :-------:     | :-------------------------------------------------- | :-------:    |
| 5V                      | VBUS             |               | 电源输入/输出                                       |              |
| GND                     |                  |               |                                                      |              |
| 3V3                     | 3V3_OUT          |               | 电源输出                                            |              |
| D0                      | 模拟             | P0.02         | GPIO, AIN0                                           | 0            |
| D1                      | 模拟             | P0.03         | GPIO, AIN1                                           | 1            |
| D2                      | 模拟             | P0.28         | GPIO, AIN4                                           | 2            |
| D3                      | 模拟             | P0.29         | GPIO, AIN5                                           | 3            |
| D4                      | 模拟, SDA        | P0.04         | GPIO, I2C 数据, AIN2                                 | 4            |
| D5                      | 模拟, SCL        | P0.05         | GPIO, I2C 时钟, AIN3                                 | 5            |
| D6                      | TX               | P1.11         | GPIO, UART 发送                                      | 7/6          |
| D7                      | RX               | P1.12         | GPIO, UART 接收                                      | 8/7          |
| D8                      | SPI_SCK          | P1.13         | GPIO, SPI 时钟                                      | 9/8          |
| D9                      | SPI_MISO         | P1.14         | GPIO, SPI 数据                                      | 10/9         |
| D10                     | SPI_MOSI         | P1.15         | GPIO, SPI 数据                                      | 11/10        |
| NFC1                    |                  | P0.09         | NFC                                                  |              |
| NFC2                    |                  | P0.10         | NFC                                                  |              |
| Reset                   |                  | P0.18         | 复位                                                 |              |
| ADC_BAT                 | READ_BAT_ENABLE  | P0.14         | 电池电压读取使能控制                                 |              |
| RF Switch Port Select   |                  | P2.05         | 切换板载天线                                        |              |
| RF Switch Power         |                  | P2.03         | 电源                                                |              |
| CHARGE_LED              |                  | P0.17         | CHG-LED_Red                                          |              |
| USER_LED_R              |                  | P0.26         | 用户控制的红色 RGB LED 引脚                         | 11           |
| USER_LED_B              |                  | P0.06         | 用户控制的蓝色 RGB LED 引脚                         | 13/12        |
| USER_LED_G              |                  | P0.30         | 用户控制的绿色 RGB LED 引脚                         | 12/13        |

</TabItem>
<TabItem value="nRF52840Plus" label="XIAO nRF52840 Plus">

### XIAO nRF52840 Plus 正面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Plus_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO nRF52840 Plus 背面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Plus_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**引脚映射**

| XIAO 引脚               | 功能                 | 芯片引脚 | 复用功能               | 描述                                      | Arduino 名称 |
| :---------------------: | :-----------------: | :-------: | :----------------: | :-------------------------------------- | :-------:    |
| 5V                      | VBUS                 |           |                    | 电源输入/输出                             |              |
| GND                     |                      |           |                    |                                          |              |
| 3V3                     | 3V3_OUT              |           |                    | 电源输出                                  |              |
| D0                      | 模拟                 | P0.02     |                    | GPIO，ADC                                | 0            |
| D1                      | 模拟                 | P0.03     |                    | GPIO，ADC                                | 1            |
| D2                      | 模拟                 | P0.28     |                    | GPIO，ADC                                | 2            |
| D3                      | 模拟                 | P0.29     |                    | GPIO，ADC                                | 3            |
| D4                      | 模拟，SDA            | P0.04     |                    | GPIO，I2C 数据，ADC                       | 4            |
| D5                      | 模拟，SCL            | P0.05     |                    | GPIO，I2C 时钟，ADC                       | 5            |
| D6                      | TX                   | P1.11     |                    | GPIO，UART 发送                           | 7/6          |
| D7                      | RX                   | P1.12     |                    | GPIO，UART 接收                           | 8/7          |
| D8                      | SPI_SCK              | P1.13     |                    | GPIO，SPI 时钟                            | 9/8          |
| D9                      | SPI_MISO             | P1.14     |                    | GPIO，SPI 数据                            | 10/9         |
| D10                     | SPI_MOSI             | P1.15     |                    | GPIO，SPI 数据                            | 11/10        |
| D11                     | I2S_SD               | P0.15     |                    | GPIO，I2S，ADC                           |              |
| D12                     | I2S_SCK              | P0.19     |                    | GPIO，I2S，ADC                           |              |
| D13                     | I2S_WS               | P1.01     |                    | GPIO，I2S，ADC                           |              |
| D14                     | RX1                  | P0.09     | NFC1               | GPIO，UART 接收，ADC                      |              |
| D15                     | TX1                  | P0.10     | NFC2               | GPIO，UART 发送，ADC                      |              |
| D16                     | AIN7_BAT             | P0.31     |                    | 电池电压 ADC 读取引脚                     |              |
| D17                     | SCK1                 | P1.03     |                    | GPIO，SPI                                |              |
| D18                     | MISO1                | P1.05     |                    | GPIO，SPI                                |              |
| D19                     | MOSI1                | P1.07     |                    | GPIO，SPI                                |              |
| ADC_BAT                 | READ_BAT_ENABLE      | P0.14     |                    | 电池电压读取使能控制                      |              |
| Reset                   |                      | P0.18     |                    | 复位                                     |              |
| RF Switch Port Select   |                      | P2.05     |                    | 切换板载天线                              |              |
| RF Switch Power         |                      | P2.03     |                    | 电源                                     |              |
| CHARGE_LED              |                      | P0.17     |                    | CHG-LED_Red                              |              |
| USER_LED_R              |                      | P0.26     |                    | 用户控制的红色 RGB LED 引脚               | 11           |
| USER_LED_B              |                      | P0.06     |                    | 用户控制的蓝色 RGB LED 引脚               | 13/12        |
| USER_LED_G              |                      | P0.30     |                    | 用户控制的绿色 RGB LED 引脚               | 12/13        |

</TabItem>
<TabItem value="nRF52840Sense" label="XIAO nRF52840 Sense">

### XIAO nRF52840 Sense 正面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO nRF52840 Sense 背面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**引脚映射**

| XIAO 引脚               | 功能             | 芯片引脚      | 描述                                                | Arduino 名称 |
| :---------------------: | :-------------: | :-------:     | :-------------------------------------------------- | :-------:    |
| 5V                      | VBUS             |               | 电源输入/输出                                       |              |
| GND                     |                  |               |                                                      |              |
| 3V3                     | 3V3_OUT          |               | 电源输出                                             |              |
| D0                      | 模拟             | P0.02         | GPIO，AIN0                                          | 0            |
| D1                      | 模拟             | P0.03         | GPIO，AIN1                                          | 1            |
| D2                      | 模拟             | P0.28         | GPIO，AIN4                                          | 2            |
| D3                      | 模拟             | P0.29         | GPIO，AIN5                                          | 3            |
| D4                      | 模拟，SDA        | P0.04         | GPIO，I2C 数据，AIN2                                 | 4            |
| D5                      | 模拟，SCL        | P0.05         | GPIO，I2C 时钟，AIN3                                 | 5            |
| D6                      | TX               | P1.11         | GPIO，UART 发送                                      | 7/6          |
| D7                      | RX               | P1.12         | GPIO，UART 接收                                      | 8/7          |
| D8                      | SPI_SCK          | P1.13         | GPIO，SPI 时钟                                       | 9/8          |
| D9                      | SPI_MISO         | P1.14         | GPIO，SPI 数据                                       | 10/9         |
| D10                     | SPI_MOSI         | P1.15         | GPIO，SPI 数据                                       | 11/10        |
| NFC1                    |                  | P0.09         | NFC                                                  |              |
| NFC2                    |                  | P0.10         | NFC                                                  |              |
| Reset                   |                  | P0.18         | 复位                                                 |              |
| ADC_BAT                 | READ_BAT_ENABLE  | P0.14         | 电池电压读取使能控制                                 |              |
| 6 DOF IMU_PWR           |                  | P1.08         | 6D 模块的电源开关                                    |              |
| 6 DOF IMU__INT1         |                  | P0.11         | 6D 模块的中断信号引脚                                |              |
| PDM Microphone_DATA     |                  | P0.16         | PDM 音频数据输入引脚                                 |              |
| PDM Microphone_CLK      |                  | P1.00         | PDM 音频时钟输出引脚                                 |              |
| RF Switch Port Select   |                  | P2.05         | 切换板载天线                                         |              |
| RF Switch Power         |                  | P2.03         | 电源                                                 |              |
| CHARGE_LED              |                  | P0.17         | CHG-LED_Red                                          |              |
| USER_LED_R              |                  | P0.26         | 用户控制的红色 RGB LED 引脚                          | 11           |
| USER_LED_B              |                  | P0.06         | 用户控制的蓝色 RGB LED 引脚                          | 13/12        |
| USER_LED_G              |                  | P0.30         | 用户控制的绿色 RGB LED 引脚                          | 12/13        |

</TabItem>
<TabItem value="nRF52840SensePlus" label="XIAO nRF52840 Sense Plus">

### XIAO nRF52840 Sense Plus 正面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_Plus_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO nRF52840 Sense Plus 背面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_Plus_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**引脚映射**

| XIAO 引脚               | 功能                 | 芯片引脚  | 复用功能             | 描述                                      | Arduino 名称 |
| :---------------------: | :-----------------: | :-------: | :----------------: | :-------------------------------------- | :-------:    |
| 5V                      | VBUS                 |           |                    | 电源输入/输出                             |              |
| GND                     |                      |           |                    |                                          |              |
| 3V3                     | 3V3_OUT              |           |                    | 电源输出                                  |              |
| D0                      | 模拟                 | P0.02     |                    | GPIO，ADC                                | 0            |
| D1                      | 模拟                 | P0.03     |                    | GPIO，ADC                                | 1            |
| D2                      | 模拟                 | P0.28     |                    | GPIO，ADC                                | 2            |
| D3                      | 模拟                 | P0.29     |                    | GPIO，ADC                                | 3            |
| D4                      | 模拟, SDA            | P0.04     |                    | GPIO，I2C 数据，ADC                      | 4            |
| D5                      | 模拟, SCL            | P0.05     |                    | GPIO，I2C 时钟，ADC                      | 5            |
| D6                      | TX                   | P1.11     |                    | GPIO，UART 发送                          | 7/6          |
| D7                      | RX                   | P1.12     |                    | GPIO，UART 接收                          | 8/7          |
| D8                      | SPI_SCK              | P1.13     |                    | GPIO，SPI 时钟                           | 9/8          |
| D9                      | SPI_MISO             | P1.14     |                    | GPIO，SPI 数据                           | 10/9         |
| D10                     | SPI_MOSI             | P1.15     |                    | GPIO，SPI 数据                           | 11/10        |
| D11                     | I2S_SD               | P0.15     |                    | GPIO，I2S，ADC                           |              |
| D12                     | I2S_SCK              | P0.19     |                    | GPIO，I2S，ADC                           |              |
| D13                     | I2S_WS               | P1.01     |                    | GPIO，I2S，ADC                           |              |
| D14                     | RX1                  | P0.09     | NFC1               | GPIO，UART 接收，ADC                     |              |
| D15                     | TX1                  | P0.10     | NFC2               | GPIO，UART 发送，ADC                     |              |
| D16                     | AIN7_BAT             | P0.31     |                    | 电池电压 ADC 读取引脚                    |              |
| D17                     | SCK1                 | P1.03     |                    | GPIO，SPI                                |              |
| D18                     | MISO1                | P1.05     |                    | GPIO，SPI                                |              |
| D19                     | MOSI1                | P1.07     |                    | GPIO，SPI                                |              |
| ADC_BAT                 | READ_BAT_ENABLE      | P0.14     |                    | 电池电压读取使能控制引脚                 |              |
| 6 DOF IMU_PWR           |                      | P1.08     |                    | 6D 模块电源开关                          |              |
| 6 DOF IMU__INT1         |                      | P0.11     |                    | 6D 模块中断信号引脚                      |              |
| PDM Microphone_DATA     |                      | P0.16     |                    | PDM 音频数据输入引脚                     |              |
| PDM Microphone_CLK      |                      | P1.00     |                    | PDM 音频时钟输出引脚                     |              |
| Reset                   |                      | P0.18     |                    | 复位                                     |              |
| RF Switch Port Select   |                      | P2.05     |                    | 切换板载天线                             |              |
| RF Switch Power         |                      | P2.03     |                    | 电源                                     |              |
| CHARGE_LED              |                      | P0.17     |                    | CHG-LED_红                               |              |
| USER_LED_R              |                      | P0.26     |                    | 用户控制的红色 RGB LED 引脚              | 11           |
| USER_LED_B              |                      | P0.06     |                    | 用户控制的蓝色 RGB LED 引脚              | 13/12        |
| USER_LED_G              |                      | P0.30     |                    | 用户控制的绿色 RGB LED 引脚              | 12/13        |

</TabItem>
</Tabs>


## 两个 Arduino 库

Seeed Studio XIAO nRF52840 在一块小小的板子上集成了许多功能，有时可能无法让每个功能都发挥最佳性能。因此，Seeed 发布了两个 Arduino 库，以便**最大化每个功能的性能**。因此：

- 如果你想使用**蓝牙功能**和“**低功耗功能**”，推荐使用 `Seeed nRF52 Boards` 库。
- 如果你想在**嵌入式机器学习应用**中使用它，或使用“**IMU & PDM 高级功能**”，推荐使用 `Seeed nRF52 mbed-enabled Boards` 库。
- 在基础用法方面，例如 **LED、数字、模拟、串口、I2C、SPI**，这两个库都提供了很好的支持。

这两个库所支持的引脚定义可能会有些许不同，Seeed 会持续更新本 wiki，直到内容清晰为止。

:::tip

1. 如果你使用 Seeed nRF52 Boards 的板载包，Serial 功能可能无法编译。解决方法是在代码中添加一行 `#include <Adafruit_TinyUSB.h>`。你可以从以下地址下载该包：https://github.com/adafruit/Adafruit_TinyUSB_Arduino

2. 如果你更喜欢简单的方法，可以一开始就选择 Seeed nRF52 mbed-enabled Boards。它支持 Serial 功能的编译，而无需额外修改。

:::

## 入门指南

首先，我们将把 Seeed Studio XIAO nRF52840（Sense）连接到电脑，并从 Arduino IDE 上传一个简单的代码，以检查开发板是否工作正常。

### 硬件准备

你需要准备以下物品：

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) 或 [Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x 电脑
- 1 x USB Type-C 线缆

:::tip
有些 USB 线缆只能供电，不能传输数据。如果你没有 USB 线缆，或者不知道你的 USB 线缆是否可以传输数据，你可以查看 [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)。
:::
通过 USB Type-C 线缆将 Seeed Studio XIAO nRF52840（Sense）连接到电脑。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/bletpyecconnect.png" alt="pir" width={500} height="auto" /></p>

### 软件准备

- **步骤 1.** 根据你的操作系统下载并安装最新版本的 Arduino IDE

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width={700} height="auto" /></a></p>

- **步骤 2.** 启动 Arduino 应用程序

- **步骤 3.** 将 Seeed Studio XIAO nRF52840（Sense）板卡包添加到 Arduino IDE

进入 **File > Preferences**，在 **"Additional Boards Manager URLs"** 中填入以下链接：
    *https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json*

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width="700" height="auto" /></p>

进入 **Tools > Board > Boards Manager...**，在搜索框中输入关键字“**seeed nrf52**”，选择你想要的最新版本板卡并安装。你也可以两个都安装。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528401.png" alt="pir" width={700} height="auto" /></p>

- **步骤 4.** 选择你的开发板和端口

**开发板**

安装好板卡包后，进入 **Tools > Board** 并选择你想要的开发板，继续选择“**Seeed XIAO nRF52840 Sense**”。现在我们已经完成了在 Arduino IDE 中对 Seeed Studio XIAO nRF52840（Sense）的设置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528402.png" alt="pir" width={700} height="auto" /></p>

**端口**

进入 **Tools > Port**，选择已连接的 Seeed Studio XIAO nRF52840（Sense）的串口名称。它很可能是 COM3 或更高（**COM1** 和 **COM2** 通常保留给硬件串口）。已连接的 Seeed Studio XIAO nRF52840（Sense）的串口名称通常会带有括号，其中写着 **Seeed Studio XIAO nRF52840**（对应 **Seeed Studio XIAO nRF52840**）或 **Seeed Studio XIAO nRF52840 Sense**（对应 **Seeed Studio XIAO nRF52840 Sense**）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/port.png" alt="pir" width={550} height="auto" /></p>

- **步骤 5.** 进入 **File > Examples > 01.Basics > Blink** 打开 **Blink** 示例

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={550} height="auto" /></p>

- **步骤 6.** 点击 **Upload** 按钮，将 Blink 示例代码上传到开发板

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={500} height="auto" /></p>

上传完成后，你会看到板载红色 LED 以 1 秒的间隔闪烁一次。这意味着连接成功，现在你可以使用 Seeed Studio XIAO nRF52840 (Sense) 探索更多项目了！

## 玩转板载三合一 LED

Seeed Studio XIAO nRF52840 (Sense) 具有一个**板载三合一 LED**，用户可编程控制。现在你将学习如何使用 Arduino 逐个控制 RGB 颜色！

首先你需要了解，这个 LED 在通过代码控制时的行为与通常情况不同。当我们给出**低电平信号**时，**LED 会点亮**，而当我们给出**高电平信号**时，它会**熄灭**。这是因为该 LED 由共阳极控制，只会在低电平信号下点亮。

一个示例代码如下：

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   
}
```

在这里，即使使用了 **HIGH**，LED 也会**熄灭**。你需要将 **HIGH** 替换为 **LOW** 才能**点亮** LED。

请参考下面 LED 的引脚映射，并在你的代码中使用它们：

- 红色 LED = LED_BUILTIN 或 LED_RED
- 蓝色 LED = LED_BLUE
- 绿色 LED = LED_GREEN

## 功耗验证

Seeed Studio XIAO nRF52840 具有低功耗特性，这里我们提供一种验证方法。强烈建议在此处使用 `Seeed nRF52 Boards` 库。

- **步骤 1.** 使用 **JLink** 下载器为 Seeed Studio XIAO nRF52840 (Sense) 烧录[bootloader 固件](https://github.com/0hotpotman0/BLE_52840_Core/blob/main/bootloader/Seeed_XIAO_nRF52840_Sense/Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex)。

:::note
如果你正在使用 Seeed Studio XIAO nRF52840 的出厂固件，或者从未对 Seeed Studio XIAO nRF52840 的固件进行过更改，则可以跳过此步骤。
:::

- **步骤 2.** 在此处使用 `Seeed nRF52 Boards` 库。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528403.png" alt="pir" width={800} height="auto" /></p>

- **步骤 3.** 在此处上传 deep_sleep 示例，并使用 **Arduino** 运行

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
在这里，我们要对提供代码的作者表示特别感谢 → ***daCoder*** ←
:::

**如果你想更详细地了解这个示例，请点击[这里](https://forum.seeedstudio.com/t/xiao-sense-accelerometer-examples-and-low-power/270801)** 

## 电池充电电流

电池充电电流可选择为 50mA 或 100mA，你可以将 **Pin13** 设置为高电平或低电平，以将其更改为 50mA 或 100mA。低电流充电时，在输入模式下设置为高电平；高电流充电时，在输出模式下设置为低电平。

**低充电电流**

```cpp
void setup(){
pinMode (P0_13, OUTPUT);
}
void loop() {
digitalWrite(P0_13, HIGH);
}
```

**高充电电流**

```cpp
void setup(){
pinMode (P0_13, OUTPUT);
}
void loop() {
digitalWrite(P0_13, LOW);
}
```

## 访问 SWD 引脚进行调试和重新烧录 Bootloader

**所需硬件**

- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- Jlink

**所需软件**

需要从官网下载安装 [Segger](https://www.segger.com/downloads/jlink/) 软件。

- **步骤 1.** 使用 Jlink 连接以下引脚：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD1.png" alt="pir" width={300} height="auto" /></p>

- **步骤 2.** 启动 J-Flash 并搜索 nRF52840，创建一个新项目：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD2.png" alt="pir" width={500} height="auto" /></p>

- **步骤 3.** 点击 "Target"，然后选择 "Connect"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD3.png" alt="pir" width={500} height="auto" /></p>

- **步骤 4.** 将 bin 或 [hex 文件](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex) 拖入软件中。然后依次按下 F4 和 F5。重新烧录即完成。

## 常见问题

### Q1: 向开发板上传代码时，我的 Arduino IDE 卡住了

你可以先尝试点击一次“Reset Button”来**复位**开发板。如果这不起作用，快速点击两次以进入**bootloader 模式**。如果仍然无效，请将开发板与电脑断开连接，然后重新连接开发板。

### Q2: 我的开发板没有在 Arduino IDE 中显示为串口设备

你可以先尝试点击一次“Reset Button”来**复位**开发板。如果这不起作用，快速点击两次以进入**bootloader 模式**。

### Q3: 使用 XIAO nRF52840 (Sense) 进行电池充电时需要注意什么？

在 XIAO nRF52840 Sense 的电池电路中，**P0.14** 是 **READ_BAT_ENABLE** 控制引脚，**P0.31** 是用于测量电池电压的 **AIN7_BAT** ADC 读取引脚。

当 P0.14 设为 HIGH 时，电池电压读取通路被禁用，P0.31 可能会达到 3.6V 的输入电压上限，从而有损坏 P0.31 引脚的风险。为了安全地读取电池电压，请将 P0.14 设为 LOW（以启用读取通路），然后读取 P0.31 上的 ADC 值。

我们建议用户在读取电池电压时始终将 P0.14 保持为 LOW，并避免在电池充电期间将 P0.14 设为 HIGH。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/14.png" alt="pir" width={800} height="auto" /></p>

### Q4：上电时绿色指示灯如何工作？

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/nRF_RGB.png" alt="nRF52840 RGB Schematic" width="120" height="auto" /></p>

`P0.17` 引脚用于控制绿色指示灯的行为，用于指示充电状态：

- 低电平：表示正在**充电**。
- 高电平：表示电池**未在充电**或已**充满电**。

当为低电平时，`RED_CHG` LED 会点亮。

更多详情请查看 PMIC 数据手册：[BQ25100](https://www.ti.com/lit/ds/symlink/bq25100a.pdf) 和 [XIAO nRF52840 数据手册](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)。

## 资源

### Seeed Studio XIAO nRF52840

**硬件设计**
- **📄[数据手册]** [Nordic nRF52840 数据手册](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf )
- **📄[数据手册]** [Flash P25Q16H-UXH-IR 数据手册](https://files.seeedstudio.com/wiki/github_weiruanexample/Flash_P25Q16H-UXH-IR_Datasheet.pdf )
- **📄[原理图]** [XIAO nRF52840 原理图](https://files.seeedstudio.com/wiki/XIAO-BLE/Res/260828_XIAO_nRF52840.pdf)
- **🗃️[PCB 设计文件]** 
  - [XIAO nRF52840 KiCad 工程](https://files.seeedstudio.com/wiki/XIAO-BLE/Res/260828_Seeed_Studio_XIAO_nRF52840_v1.2.zip)
- **🗃️[PCB 设计库]** 
  - [XIAO 系列 KiCad 封装库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO 系列 KiCad 原理图符号库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[引脚图]** [XIAO nRF52840 引脚分布表](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-pinout_sheet.xlsx )

**结构设计**
- **📄[2D 尺寸]** [DXF 格式的 XIAO nRF52840 尺寸图](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-DXF.zip )
- **📄[2D 尺寸]** [XIAO nRF52840 焊盘底部数据](https://files.seeedstudio.com/wiki/XIAO-BLE/Bottom-pad-positioning.zip )

### Seeed Studio XIAO nRF52840 Sense

**硬件设计**
- **📄[数据手册]** [Nordic nRF52840 数据手册](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf )
- **📄[数据手册]** [Flash-P25Q16H-UXH-IR 数据手册](https://files.seeedstudio.com/wiki/github_weiruanexample/Flash_P25Q16H-UXH-IR_Datasheet.pdf )
- **📄[数据手册]** [充电 IC-BQ25101 数据手册](https://files.seeedstudio.com/wiki/XIAO-BLE/BQ25101.pdf )
- **📄[数据手册]** [IMU-LSM6DS3TR 数据手册](https://files.seeedstudio.com/wiki/XIAO-BLE/ST_LSM6DS3TR_Datasheet.pdf )
- **📄[数据手册]** [Mic-MSM261D3526H1CPM 数据手册](https://files.seeedstudio.com/wiki/XIAO-BLE/mic-MSM261D3526H1CPM-ENG.pdf )
- **📄[原理图]** [XIAO nRF52840 Sense 原理图](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_nRF52840_PDF.pdf )
- **🗃️[PCB 设计文件]** 
  - [XIAO nRF52840 Sense KiCad 工程](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840V1.1-KiCad-Project-260105.zip )
- **🗃️[PCB 设计库]** 
  - [XIAO 系列 KiCad 封装库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO 系列 KiCad 原理图符号库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[引脚图]** [XIAO nRF52840 Sense 引脚分布表](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Senese-pinout_sheet.xlsx )

**结构设计**
- **📄[2D 尺寸]** [DXF 格式的 XIAO nRF52840 Sense 尺寸图](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Sense-DXF.zip )
- **📄[2D 尺寸]** [XIAO nRF52840 焊盘底部数据](https://files.seeedstudio.com/wiki/XIAO-BLE/Bottom-pad-positioning.zip )
- **📄[3D 模型]** [XIAO nRF52840 Sense 3D 模型](https://files.seeedstudio.com/wiki/XIAO-BLE/seeed-studio-xiao-nrf52840-3d-model.zip )

**其他**
- **📄[文档]** [XIAO nRF52840 Sense BLE 通信距离测试报告](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_XIAO_BLE_nRF52840_BLE_Communication_Distance_Test_Report.pdf )

### Seeed Studio XIAO nRF52840（Sense）Plus

**硬件设计**
- **📄[数据手册]** [Nordic nRF52840 数据手册](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf )
- **📄[数据手册]** [Flash-P25Q16H-UXH-IR 数据手册](https://files.seeedstudio.com/wiki/github_weiruanexample/Flash_P25Q16H-UXH-IR_Datasheet.pdf )
- **🗃️[原理图]** [XIAO nRF52840（Sense）Plus 原理图](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_nRF52840_Plus_SCH_PCB_v1.1.zip )
- **🗃️[PCB 设计文件]** 
  - [XIAO nRF52840（Sense）Plus KiCad 工程](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_nRF52840_Plus.zip )
  - [XIAO Plus Base（带底部焊盘引出）KiCad 工程](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_with_botton_pad_lead_out_V1.0.zip )
  - [XIAO Plus Base（不带底部焊盘引出）KiCad 工程](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_without_botton_pad_lead_out_V1.0.zip )
- **🗃️[PCB 设计库]** 
  - [XIAO 系列 KiCad 封装库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO 系列 KiCad 原理图符号库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )

**结构设计**
- **🗃️[2D 尺寸]** [DXF 格式的 XIAO nRF52840 Sense 尺寸图](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Sense-DXF.zip )

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

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
