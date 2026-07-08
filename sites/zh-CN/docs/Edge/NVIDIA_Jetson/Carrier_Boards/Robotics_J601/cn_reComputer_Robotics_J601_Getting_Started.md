---
description: 为 NVIDIA Jetson AGX Thor 模组设计的 reComputer Robotics J601 载板的预备入门页面。
title: reComputer Robotics J601 入门指南
keywords:
  - reComputer Robotics J601
  - AGX Thor
  - Jetson
  - Carrier Board
  - Robotics
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ai_robotics_recomputer_robotics_j601_carrier_board_getting_started
sku: 100060965
last_update:
  date: 04/24/2026
  author: Dayu
createdAt: '2026-04-24'
updatedAt: '2026-04-24'
url: https://wiki.seeedstudio.com/cn/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started/
---

# reComputer Robotics J601 入门指南

:::note
本页面是即将推出的、面向 NVIDIA Jetson AGX Thor 模组的 reComputer Robotics J601 载板的预备草稿。规格、软件支持、配件套装以及机械结构细节仍有可能变更。
:::

<div align="center">
  <img width="700" src="https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png"/>
</div>

reComputer Robotics J601 是一款面向机器人应用的 NVIDIA Jetson AGX Thor 模组载板。它面向需要高速网络、工业 I/O、GMSL 摄像头扩展以及宽范围直流输入的高性能具身 AI 与机器人控制负载，并采用紧凑的载板形态。

## 初步特性

- 支持 **NVIDIA Jetson AGX Thor** 模组
- 用于 NVMe 2280 SSD 的 **M.2 Key M** 插槽
- 用于 Wi-Fi/Bluetooth 模组的 **M.2 Key E** 插槽
- 用于 5G 模组的 **M.2 Key B** 插槽，并支持 **Nano SIM**
- 高速以太网，计划支持 **PTP** 和 **EtherCAT**
- 丰富的机器人 I/O，包括 **CAN**、**RS-232/422/485**、**DI/DO**、**I2C**、**I2S**、**SPI** 和 **GPIO**
- **GMSL 扩展**，最多支持 **8 路摄像头**
- 通过 **XT30** 提供宽范围 **19V 至 48V 直流** 输入
- 目标软件平台：**JetPack 7**

## 初步规格

下表有意仅保留当前硬件定义中较为明确的部分，将尚未确定的项目保留为 TBD。

<div class="table-center">
<table>
  <tbody>
    <tr>
      <td>模组</td>
      <td>NVIDIA Jetson AGX Thor x 1</td>
    </tr>
    <tr>
      <td>存储</td>
      <td>1x M.2 Key M，用于 M.2 NVMe 2280 SSD</td>
    </tr>
    <tr>
      <td>网络</td>
      <td>以太网定义仍在进行中；初步计划包括支持 PTP 和 EtherCAT 的高速 RJ45 接口</td>
    </tr>
    <tr>
      <td>无线扩展</td>
      <td>1x M.2 Key E（用于 Wi-Fi/Bluetooth），1x M.2 Key B（用于 5G），1x Nano SIM</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>最多 4x USB 3.2 Type-A（主机），1x USB 2.0 Type-C（调试 UART / 设备模式），1x USB 3.0 Type-C（用于刷机）</td>
    </tr>
    <tr>
      <td>显示</td>
      <td>1x HDMI</td>
    </tr>
    <tr>
      <td>散热</td>
      <td>1x 4 针风扇连接器（12V PWM）；计划将载板和风扇分开销售</td>
    </tr>
    <tr>
      <td>摄像头</td>
      <td>GMSL 扩展，最多 8 路摄像头</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>4x CAN，通过 JST 连接器</td>
    </tr>
    <tr>
      <td>串口</td>
      <td>1x RS-232/422/485（DB9 连接器），1x RS-485（JST 连接器）</td>
    </tr>
    <tr>
      <td>数字 I/O</td>
      <td>4x DI 和 4x DO，通过 JST 端子连接器</td>
    </tr>
    <tr>
      <td>音频</td>
      <td>1x I2S，2x 功放输出，1x 麦克风输入</td>
    </tr>
    <tr>
      <td>低速扩展</td>
      <td>1x I2C，1x SPI，通过 JST/排针提供 GPIO</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2 针接口</td>
    </tr>
    <tr>
      <td>按键</td>
      <td>Recovery 和 Reset</td>
    </tr>
    <tr>
      <td>指示灯</td>
      <td>PWR、ACT 和用户自定义 RGB LED</td>
    </tr>
    <tr>
      <td>电源输入</td>
      <td>XT30，19V 至 48V 直流</td>
    </tr>
    <tr>
      <td>电流 / 功率</td>
      <td>最大电流 10A，系统功率定义为 160W</td>
    </tr>
    <tr>
      <td>工作温度</td>
      <td>-10°C 至 +60°C</td>
    </tr>
    <tr>
      <td>湿度</td>
      <td>10% 至 95% RH</td>
    </tr>
    <tr>
      <td>认证</td>
      <td>CE、FCC、RoHS，目标 EMI 等级：Class A</td>
    </tr>
    <tr>
      <td>机械尺寸</td>
      <td>目标载板尺寸控制在 150 mm x 130 mm 以内</td>
    </tr>
  </tbody>
</table>
</div>

## 指示灯与按键定义

### 按键

| 按键 | 引脚 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- | --- |
| RECOVERY | 240 | - | CMOS-5V | 用于系统恢复 / 底层配置流程 |
| RESET | 239 | SYS_RESET* | 开漏，1.8V | 拉低以复位模组；当模组电源就绪时，高电平可用作载板电源使能 |

### 指示灯

| 指示灯 | 颜色 | 状态 | 描述 |
| --- | --- | --- | --- |
| PWR | 绿色 | On | 设备已连接电源 |
| PWR | 绿色 | Off | 设备未连接电源 |
| ACT | 绿色 | Flashing | SSD 活动状态 |
| USER | R / G / B | TBD | 用户自定义行为 |

## 软件

- 计划的软件基线：**JetPack 7**
- 计划的以太网能力：**EtherCAT**
- 详细刷机指南、BSP 包和验证步骤：**TBD**

## 计划支持的摄像头适配

当前需求列表包括以下 GMSL 摄像头型号：

- Senyun `SG3S-ISX031C-GMSL2F`
- Senyun `SG2-AR0233C-5200-G2A`
- Senyun `SG2-IMX390C-5200-G2A`
- Senyun `SG8S-AR0820C-5300-G2A`
- Orbbec `335LG`

## 热设计

该载板预期用于人形机器人机体内部，客户可以自行设计散热方案。Seeed 计划为基于 AGX Thor 的部署提供热设计指导。

参考文档：

- `Jetson_Thor_Thermal_DG_TDG12271001_v1.0.pdf`

## 初步装箱清单

### 配件

- XT30 转 DC 线缆，200 mm x 1
- JST 散线线束，100 mm x 10
- USB Type-C 转 Type-A 线缆，1 m x 1
- Key E 固定螺丝 x 1
- Key M 固定螺丝 x 1
- Key B 固定螺丝 x 1
- AGX Thor SOM 固定螺丝 x 4
- 载板支撑柱 x 4
- 支撑柱固定螺丝 x 4
- 用户手册 x 1

### 包装

- 飞机盒
- 用于放置载板和配件的内托盘
- 顶部放置用户手册，并增加一层泡棉
- 包装风格与 mini J501 载板类似

## 资源

- 详细硬件布局：TBD
- 刷机指南：TBD
- BSP 发行说明：TBD

## 技术支持

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺利。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
