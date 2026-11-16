---
title: Wio-LR2021 Dev Kit 入门指南
description: '开始使用 Wio-LR2021 Dev Kit'
keywords:
  - Wio-LR2021
  - Semtech LR2021
  - ESP32-S3
  - LoRa
  - FLRC
  - Dev Kit
image: https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp
slug: /wio_lr2021_dev_kit_getting_started
sku: 100038329
sidebar_position: 1
last_update:
  date: 11/02/2026
  author: David Du
createdAt: '2026-11-02'
updatedAt: '2026-11-02'
url: https://wiki.seeedstudio.com/cn/wio_lr2021_dev_kit_getting_started/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Wio-LR2021 Dev Kit 入门指南

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp" style={{width:600, height:'auto'}}/>
</div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Wio-LR2021-Dev-Kit-p-7040.html"
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
  </table>
</div>

## 介绍

**Wio-LR2021 Dev Kit** 是一款双频段 LoRa 开发套件，将 Semtech 的 LR2021 收发器与 **ESP32-S3** 组合在一起。射频模块在单一封装内覆盖 150 ~ 960 MHz 以及 2400 ~ 2500 MHz 频段，因此只需一块板卡即可通过软件在远距离链路和全球通用信道之间切换。FLRC 支持最高 2.6 Mbps 的突发速率，可传输图像和音频，而配备 8 MB PSRAM 和 16 MB Flash 的 ESP32-S3R8 能在图像帧上空传输前先在本地进行判断。

一个可拆卸的 Media HAT 搭载了 **2 MP GC2145 摄像头**、**MEMS 麦克风**、**ES8311 编解码器**以及带扬声器连接器的 **NS4150B 功放**。在主板上，你还可以获得一个 128 × 64 OLED、一个用于切换四路外设电源轨的 **PCA9535 扩展器**、一个通过 CN3165 充电芯片连接的 3.7 V 锂电池和 5 V 太阳能输入、一个 Grove 接口以及两个 16 针排针。

套件预装了出厂固件，因此在编写任何固件之前，你就可以通过终端检查射频、摄像头、显示屏、音频链路以及电池状态。

### 规格参数

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>数值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MCU</td>
      <td>**ESP32-S3R8**，双核 Xtensa LX7，最高 240 MHz</td>
    </tr>
    <tr>
      <td>射频收发器</td>
      <td>Semtech LR2021，集成在 **Wio-LR2021 模组**中</td>
    </tr>
    <tr>
      <td>频段</td>
      <td>150 ~ 960 MHz 和 2400 ~ 2500 MHz</td>
    </tr>
    <tr>
      <td>调制方式</td>
      <td>LoRa (SF5 ~ SF12)、(G)FSK、FLRC、LR-FHSS</td>
    </tr>
    <tr>
      <td>发射功率</td>
      <td>最高 `+22` dBm（亚 GHz），最高 `+12` dBm（2.4 GHz）</td>
    </tr>
    <tr>
      <td>Wi-Fi 和 Bluetooth</td>
      <td>802.11 b/g/n 2.4 GHz，Bluetooth 5 LE</td>
    </tr>
    <tr>
      <td>天线连接器</td>
      <td>2 × SMA（亚 GHz、2.4 GHz）外加 3 × U.FL</td>
    </tr>
    <tr>
      <td>Type-C 接口</td>
      <td>带原生 USB-Serial-JTAG 的 USB-C，无桥接芯片</td>
    </tr>
    <tr>
      <td>Grove 接口</td>
      <td>Grove 端口以及 2 × 16 针 2.54 mm 排针</td>
    </tr>
    <tr>
      <td>按键和 LED</td>
      <td>USER、BOOT 和 RESET 按钮；1 个电源 LED；1 个用户 LED</td>
    </tr>
    <tr>
      <td>I/O 扩展器</td>
      <td>**PCA9535**，16 路 I/O，I2C 地址：`0x21`</td>
    </tr>
    <tr>
      <td>OLED</td>
      <td>128 × 64 单色，0.96 英寸，**CH1116** 驱动，I2C 地址：`0x3D`</td>
    </tr>
    <tr>
      <td>摄像头（HAT）</td>
      <td>**GC2145**，2 MP，8 位 DVP 接口</td>
    </tr>
    <tr>
      <td>音频（HAT）</td>
      <td>**ES8311** 编解码器、**NS4150B** 功放、MEMS 麦克风、扬声器连接器</td>
    </tr>
    <tr>
      <td>电源接口</td>
      <td>USB-C 5 V、太阳能 5 V（JST）、3.7 V 锂电池（JST）</td>
    </tr>
    <tr>
      <td>充电 IC</td>
      <td>**CN3165**，495 mA 充电电流</td>
    </tr>
    <tr>
      <td>稳压器</td>
      <td>**TPS62A03** 降压（3.3 V 系统）、**SGM2059** LDO（射频电源轨）</td>
    </tr>
    <tr>
      <td>尺寸</td>
      <td>55 × 38.5 mm 主板，55 × 38.5 mm Media HAT</td>
    </tr>
    <tr>
      <td>安装孔</td>
      <td>3 × M2 安装孔</td>
    </tr>
  </tbody>
</table>

### 特性

- **双频段射频：** 亚 GHz 和 2.4 GHz 共用一个模组，因此单一设计即可覆盖全球频段。
- **高速突发：** FLRC 以最高 2.6 Mbps 传输图像，然后在需要距离时切换回 LoRa。
- **端侧视觉：** 8 MB PSRAM 用于缓存摄像头帧，因此射频发送的是结论而不是像素。
- **可拆卸 Media HAT：** 摄像头、麦克风、编解码器和功放通过两个 16 针连接器连接。
- **野外供电：** 5 V 太阳能输入和 3.7 V 锂电池连接器让节点可在离网环境下持续运行。
- **可切换电源轨：** PCA9535 通过软件控制 HAT 上摄像头、音频、OLED 和 Grove 电源轨。
- **板载显示：** 共享 I2C 总线上的 128 × 64 OLED 可在无需额外硬件的情况下显示读数或链路状态。
- **原生 USB：** USB-Serial-JTAG 无需桥接芯片，因此烧录和控制台共用一根线缆。

## 硬件概览

该套件包含两块尺寸为 55 × 38.5 mm 的板卡。主板承载射频、显示和电源链路；Media HAT 则增加摄像头和音频链路。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/Wio-LR2021_Dev_Kit_hardware.webp" style={{width:1000, height:'auto'}}/>
</div>

### 主板正面

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/main_board_front.webp" style={{width:1000, height:'auto'}}/>
</div>

1. 带 16 MB SPI NOR Flash 的 **ESP32-S3R8**
2. 搭载 LR2021 收发器并集成 32 MHz TCXO 的 **Wio-LR2021 模组**
3. 用于 150 ~ 960 MHz 端口的 **亚 GHz SMA 连接器**
4. 用于 2400 ~ 2500 MHz 端口的 **2.4 GHz SMA 连接器**
5. **三个 U.FL 焊盘：** ESP32-S3 2.4 GHz、LR2021 2.4 GHz 和 LR2021 亚 GHz
6. 带原生 USB-Serial-JTAG 的 **USB-C 接口**
7. 标记为 `Solar-5V` 的 **太阳能输入**，使用 2 针 JST 连接器
8. 标记为 `BAT-3.7V` 的 **电池输入**，使用 2 针 JST 连接器
9. **两个 16 针 2.54 mm 排针**，分别位于两条长边

:::note
SMA 连接器和 U.FL 焊盘通过 0 Ω 电阻连接到同一对射频网络。默认情况下，**SMA 连接器**是启用的。若要改用 U.FL 接口，请将 0 Ω 电阻重新焊接到对应的备用焊盘上。
:::

### 主板背面

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/main_board_back.webp" style={{width:1000, height:'auto'}}/>
</div>

1. **128 × 64 OLED**，通过 I2C 驱动，地址为 `0x3D`
2. **USER 按钮**，连接到 `GPIO46`，带 10 kΩ 上拉和 100 nF 去抖电容
3. **BOOT 按钮**，连接到 `GPIO0`，在复位时若被拉低则将芯片拉入下载模式
4. **RESET 按钮**，连接到 ESP32-S3 的使能引脚（低电平有效）
5. **Grove 连接器**，4 针 2.0 mm 标准插座
6. **用户 LED**，由 PCA9535 的 `P06` 控制（低电平点亮）
7. **电源 LED**，当板卡有电源供给时点亮

:::caution
USER 按钮位于 `GPIO46` 上，这是 ESP32-S3 的一根配置引脚。如果在释放 RESET 时一直按住该按钮，芯片会在采样到该配置引脚为低电平后进入下载模式，而不是正常启动。请在复位前松开该按钮。
:::

### Media HAT

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/media_hat_front.webp" style={{width:1000, height:'auto'}}/>
</div>

1. **GC2145 摄像头**，2 MP，通过 `8-bit DVP` 总线连接，使用 24 针 FPC
2. 带模拟输出的 **MEMS 麦克风**，连接到编解码器
3. **ES8311 编解码器**，I2S 音频输入输出，通过 I2C 配置
4. 驱动标记为 `SPK` 的扬声器连接器的 **NS4150B D 类功放**

## 引脚映射

主板引出两个 **16 针排针**，间距为 2.54 mm。Media HAT 引出两个 **14 针排母**，间距同为 2.54 mm，可插入主板上的两个排针。

:::caution
由于**主板（Main Board）**使用的是 `16‑pin header`，而 **Media Hat** 扩展板仅使用 `14‑pin socket`，在安装过程中必须特别注意方向，确保引脚正确**对齐（ALIGNED）**。错误的安装可能导致功能异常，甚至对设备造成不可逆的损坏。
:::

<br />

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/pinout_1.webp" style={{width:1000, height:'auto'}}/>
</div>


| 索引 | 功能 | ESP32-S3 引脚 | 描述 |
| --- | --- | --- | --- |
| 1 | VSYS | — | 系统电源轨，来自 USB 或太阳能的 5 V，电池供电时为 3.0 ~ 4.2 V |
| 2 | GND | — | 地 |
| 3 | IIC0_SCL | GPIO48 | 共享 I2C 总线：OLED、PCA9535、HAT 编解码器 |
| 4 | IIC0_SDA | GPIO47 | 共享 I2C 总线：OLED、PCA9535、HAT 编解码器 |
| 5 | CODEC_I2S0_MCLK | GPIO41 | ES8311 的音频主时钟 |
| 6 | CODEC_I2S0_LRCK | GPIO42 | 左右声道选择信号 |
| 7 | GROVE_DAT_2 | GPIO43 | Grove 数据位 2，UART0_TXD |
| 8 | GROVE_DAT_1 | GPIO44 | Grove 数据位 1，UART0_RXD |
| 9 | CODEC_I2S0_SCLK | GPIO9 | 音频位时钟 |
| 10 | CODEC_I2S0_DSDIN | GPIO1 | 送入编解码器的播放数据 |
| 11 | CODEC_I2S0_SDOUT | GPIO2 | 来自编解码器的录音数据 |
| 12 | EXP_PWR_AUDIO_EN | PCA9535 `P02` | 使能 HAT 上的音频电源轨 |
| 13 | EXP_CAM_RESET | PCA9535 `P07` | 摄像头复位引脚 |
| 14 | EXP_PWR_CAM_EN | PCA9535 `P01` | 使能 HAT 上的摄像头电源轨 |
| 15 | EXP_GPIO_P16 | PCA9535 `P16` | 通过扩展器引出的备用 I/O |
| 16 | EXP_GPIO_P17 | PCA9535 `P17` | 通过扩展器引出的备用 I/O |

<br />

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/pinout_2.webp" style={{width:1000, height:'auto'}}/>
</div>

| 索引 | 功能 | ESP32-S3 引脚 | 描述 |
| --- | --- | --- | --- |
| 1 | VCC_3V3 | — | 3.3 V 系统电源轨 |
| 2 | GND | — | 地 |
| 3 | DVP_VSYNC | GPIO38 | 摄像头垂直同步信号，对应 HAT 上的 `VSYNC` |
| 4 | DVP_HSYNC | GPIO39 | 摄像头水平同步信号，对应 HAT 上的 `HSYNC` |
| 5 | DVP_D7 | GPIO21 | 摄像头数据位 7 |
| 6 | DVP_D6 | GPIO18 | 摄像头数据位 6 |
| 7 | DVP_D5 | GPIO17 | 摄像头数据位 5 |
| 8 | DVP_D4 | GPIO16 | 摄像头数据位 4 |
| 9 | DVP_D0 | GPIO15 | 摄像头数据位 0 |
| 10 | DVP_D3 | GPIO14 | 摄像头数据位 3 |
| 11 | DVP_PCLK | GPIO13 | 摄像头像素时钟 |
| 12 | DVP_D1 | GPIO12 | 摄像头数据位 1 |
| 13 | DVP_D2 | GPIO11 | 摄像头数据位 2 |
| 14 | DVP_XCLK | GPIO10 | 摄像头主时钟，由 ESP32-S3 生成 |
| 15 | EXP_GPIO_P14 | PCA9535 `P14` | 通过扩展器引出的备用 I/O |
| 16 | EXP_GPIO_P15 | PCA9535 `P15` | 通过扩展器引出的备用 I/O |

<br />

### I/O 扩展器

**PCA9535** 使用 I2C 地址 `0x21`，其中断线连接到 `GPIO3`。上电时所有 16 个引脚都为输入，因此在固件驱动之前，下面的所有电源轨和复位信号都保持不活动状态。

| 端口 | 功能 | 说明 |
| --- | --- | --- |
| P00 | — | 未连接 |
| P01 | EXP_PWR_CAM_EN | 摄像头电源轨使能 |
| P02 | EXP_PWR_AUDIO_EN | 音频电源轨使能 |
| P03 | EXP_PWR_OLED_EN | OLED 电源轨使能 |
| P04 | EXP_PWR_GROVE_EN | Grove 电源轨使能 |
| P05 | EXP_OLED_RST | OLED 复位 |
| P06 | EXP_User_LED | 用户 LED（低电平有效） |
| P07 | EXP_CAM_RESET | 摄像头复位 |
| P10 | EXP_BAT_ADC_CTR | 将电池分压器接入 `GPIO8` |
| P11 | EXP_Sig_CHG_Done | 来自 CN3165 的充电完成标志 |
| P12 | EXP_Sig_CHGING | 来自 CN3165 的充电进行中标志 |
| P13 | EXP_LoRa_RST | Wio-LR2021 复位 |
| P14 | EXP_GPIO_P14 | PCA9535 `P14` |
| P15 | EXP_GPIO_P15 | PCA9535 `P15` |
| P16 | EXP_GPIO_P16 | PCA9535 `P16` |
| P17 | EXP_GPIO_P17 | PCA9535 `P17` |

<br />

### 电源

| 电源轨 | 范围 | 说明 |
| --- | --- | --- |
| VSYS | 3.0 ~ 5.5 V | 当有 USB 或太阳能时跟随其电压，否则跟随电池电压 |
| VCC_3V3 | 3.3 V | 降压输出，电流上限由稳压器限制 |
| VCC_Grove | 3.3 V | 由 `P04` 控制开关，并由 350 mA 保险丝保护 |
| Solar+ | 标称 5.0 V | 具备反向阻断和过压保护 |
| BAT+ | 3.0 ~ 4.2 V | 锂离子电池，由 CN3165 充电 |

:::caution
`VSYS` 不是固定的 3.3 V 电源轨。当连接 USB 或太阳能时，它会接近 5.0 V，并会损坏仅支持 3.3 V 的外设。
:::

<br />

### 启动配置引脚

ESP32-S3 在复位时会采样四个引脚：`GPIO0`、`GPIO3`、`GPIO45` 和 `GPIO46`。其中有两个被引出到主板上。

| 引脚 | 连接到 | 描述 |
| --- | --- | --- |
| GPIO0 | BOOT 按钮 | 与 USER 按钮一起保持为 **低电平** 时，芯片会进入串口下载模式，而不是启动固件 |
| GPIO46 | USER 按钮 | 与 BOOT 按钮一起保持为 **低电平** 时，芯片会进入串口下载模式，而不是启动固件 |
| GPIO3 | 未引出 | 用作 PCA9535 的 `INTERRUPT` 引脚 |
| GPIO45 | 未引出 | 用作 Wio-LR2021 的 `IRQ` 引脚 |

## 入门指南

### 硬件准备

#### 步骤 1 — 安装天线

将 Sub-GHz 天线拧到标有 `SUB-1G` 的连接器上，将 2.4 GHz 天线拧到标有 `LR-2.4G` 的连接器上。只需手动拧紧即可。如果改用 U.FL 天线，请将 0 Ω 电阻重新焊接到相应焊盘上，并将 SMA 连接器留空。

:::caution
切勿在没有天线的情况下发射。LR2021 对开路端口没有保护，将连续波或长时间发射接到开路负载上会损坏功率放大器。
:::

#### 步骤 2 — 安装 Media HAT（可选）

将 HAT 上的两个 14 针插座与主板上的两个 16 针排针对齐，并同时按压两端使其插紧。HAT 的电源由主板提供，因此不需要额外的电源线。拆卸时同样同时抬起两端。

:::note
扩展板背面标注了主板上对应 USB Type‑C 接口的位置，可用于判断正确的安装方向。接下来根据 PCB 上引脚的丝印来找到对应的引脚。
:::

插座位于 Media HAT 上，每个插座旁边的丝印都标出了对应的 ESP32-S3 引脚编号，因此无需示意图也可以确认方向。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/media_hat_back.webp" style={{width:1000, height:'auto'}}/>
</div>

#### 步骤 3 — 选择电源

三种输入中的任意一种都可以为开发板供电：5 V 的 USB-C、接在 `Solar-5V` JST 连接器上的 5 V 太阳能板，或接在 `BAT-3.7V` 连接器上的 3.7 V 锂离子电池。首次上电时推荐使用 USB-C，因为它同时提供串口控制台。

## 资源

- 📄 [ESP32-S3 数据手册](https://documentation.espressif.com/esp32-s3_datasheet_en.pdf)

- 📄 [Wio-LR2021 模组数据手册](https://files.seeedstudio.com/products/100058045/Wio-LR2021%20Module%20Datasheet.pdf)

- 📄 [Wio-LR2021 开发套件主板原理图](https://files.seeedstudio.com/products/100038329/doc/Wio-LR2021_Dev_Kit_Schematic.pdf)

- 📄 [Wio-LR2021 开发套件 Media HAT 原理图](https://files.seeedstudio.com/products/100038329/doc/Wio-LR2021_Dev_Kit_Media_HAT_Schematic.pdf)

- 📄 [Wio-LR2021 开发套件主板 3D 模型](https://files.seeedstudio.com/products/100038329/doc/Wio-LR2021_Dev_Kit_Main_Board.step)

- 📄 [Wio-LR2021 开发套件 Media HAT 3D 模型](https://files.seeedstudio.com/products/100038329/doc/Wio-LR2021_Dev_Kit_Media_HAT.step)

- 🗃️ [硬件组件文档](https://files.seeedstudio.com/products/100038329/doc/Hardware_Component_Documentation.zip)

- 📄 [引脚分布图](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/pinout_diagram.webp)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>