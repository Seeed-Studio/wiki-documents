---
description: EdgeBox-ESP-100 Arduino 入门指南
title: EdgeBox-ESP-100 Arduino 入门指南
keywords:
  - Edge
  - PLC Control
  - Control system
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Edgebox-ESP-100-Arduino
last_update:
  date: 03/10/2023
  author: Peter Pan
---

## Edgebox-ESP-100

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/e/d/edgebox-esp100_1.jpg" style={{width: 600}}/></div>

EdgeBox-ESP-100 是一款基于 ESP32 的控制器，专为轻量级自动化解决方案而设计。它支持模拟输入，能够在远程环境中有效监控和控制，非常适合 PID 控制回路、逻辑顺序控制，或作为具有灵活无线和现场传感器扩展功能的网关。

除了 EdgeBox-ESP-100，我们还有另外 2 款 Edge 系列产品，由 Raspberry Pi 驱动，为不同的解决方案提供支持。为了帮助您深入了解差异并为您的项目选择最合适的产品，请参考 Seeed Studio [Edge 系列页面](https://www.seeedstudio.com/raspberrypi/device/industry.html)。

它提供隔离的 CAN、RS485 现场总线连接，以及丰富的 IO 资源，用于广泛的设施和传感器输入，支持数字和模拟信号。它完全满足 PLC 和现场自动化应用的需求。

由于它包含片上 Wi-Fi 和 BLE 功能，还包括 4G LTE 模块蜂窝网络，EdgeBox-ESP-100 可用于建立工业网关，使原有的 PLC 能够连接网络或云端。

这款便携式设备采用坚固的硬件、电气设计和铝合金外壳，使其能够在宽温度范围内保持功能，并提供高浪涌和短路保护，支持基于您业务需求的多样化部署方式。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-ESP-100-p-5490.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

> ⚠️ **重要提示：USB 编程/调试功能可用性**
>
> - **USB 编程/调试功能仅在** **EdgeBox-ESP-100** 的**最新版本**上**可用**。
> - **旧版本**仅支持**通过 USB-A 端口供电**，**不支持**编程或调试。

---

> ❗**警告：请勿将旧版本的 USB-A 端口连接到 PC**
>
> - 将**旧版本**的 USB-A 端口连接到 PC USB 端口可能导致**异常行为**。
> - 如果您计划通过 USB 编程或调试设备，请仅使用**新版本**。

---

> **🔍 如何识别新版本**
>
> 检查设备外壳上的**序列号 (SN)** 标签：
>
> **旧版本序列号**：
>
> - 所有带有 `2437` 或**更早**的序列号
> - 示例：`102991735243700001`、`102991735243700093`
> - `2437` = 在**2024 年第 37 周**生产
>
> **新版本序列号**：
>
> - 所有带有 `2438` 或**更晚**的序列号
> - 示例：`102991735243800001`、`102991735243800093`
> - `2438` = 从**2024 年第 38 周开始**生产

- 多现场总线支持：CAN、RS485、以太网
- 多无线功能：片上 Wifi、BLE 连接；内置蜂窝 4G LTE 模块
- 可靠的硬件设计：坚固、减少维护的结构
- 可靠的电气设计：高隔离、高浪涌和短路保护
- 支持 IEC 61131-3 兼容程序（开发中）
- 可使用 ESP-IDF、Arduino 编程

## 规格对比

<div class="table-center">

<table data-style="height: 1345px;">
  <tbody>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p><strong>参数</strong></p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p><strong>详细信息</strong></p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 629px;" colSpan={2} style={{height: 46, width: 629}}>
        <p><strong>基本配置</strong></p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>CPU</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>ESP32S3</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>内存</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>512KB + 8MB RAM</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>存储</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>16MB Flash</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 629px;" colSpan={2} style={{height: 46, width: 629}}>
        <p><strong>无线通信</strong></p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>WiFi</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>片上 2.4 GHz</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>蓝牙</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>片上蓝牙 5.0, BLE</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>蜂窝网络</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>4G - A7670G SIMCom LTE Cat 1 模块</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>LoRa</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>支持*</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 629px;" colSpan={2} style={{height: 46, width: 629}}>
        <p><strong>接口</strong></p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>以太网</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>100M RJ45 *1</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>USB</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>USB2.0 A*1</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>CAN BUS</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>CAN BUS *1 (隔离)</p>
      </td>
    </tr>
    <tr data-style="height: 39px;" style={{height: 39}}>
      <td data-style="height: 39px; width: 132px;" style={{height: 39, width: 132}}>
        <p>RS 串口</p>
      </td>
      <td data-style="height: 39px; width: 491px;" style={{height: 39, width: 491}}>
        <p>RS485 *1 (隔离)</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 92px; width: 132px;" rowSpan={2} style={{height: 92, width: 132}}>
        <p>数字输入</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>4 (隔离) 板载</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <div>
          <div className="document">
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">直流输入电压 - 24V</p>
          </div>
        </div>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 92px; width: 132px;" rowSpan={2} style={{height: 92, width: 132}}>
        <p>数字输出</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>6 (隔离)</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>推荐电压 - 24V</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 92px; width: 132px;" rowSpan={2} style={{height: 92, width: 132}}>
        <p>模拟输入</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>4 (隔离)</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <div>
          <div className="document">
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">输入：0 ~ 20 mA 默认，0-10V 可选</p>
          </div>
        </div>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 92px; width: 132px;" rowSpan={2} style={{height: 92, width: 132}}>
        <p>模拟输出</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>2 (隔离)</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>输出：0 ~ 5 V</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>电源供应</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>10.8 ~ 36 V</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 629px;" colSpan={2} style={{height: 46, width: 629}}>
        <p><strong>额外功能</strong></p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>RTC</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>RTC</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>加密芯片</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>Atecc608a(可选)</p>
      </td>
    </tr>
    <tr data-style="height: 64px;" style={{height: 64}}>
      <td data-style="height: 64px; width: 132px;" style={{height: 64, width: 132}}>
        <p>工作温度</p>
      </td>
      <td data-style="height: 64px; width: 491px;" style={{height: 64, width: 491}}>
        <p>-20 到 +60 °C</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>认证</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>RoHS, CE, FCC, UKCA</p>
      </td>
    </tr>
    <tr>
      <td data-style="width: 132px;" style={{width: 132}}>
        <p>保修</p>
      </td>
      <td data-style="width: 491px;" style={{width: 491}}>
        <p>2 年</p>
      </td>
    </tr>
  </tbody>
</table>
</div>

## 硬件概述

### 正面概述

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/edge_box_esp/font-port.png" /></div>

### 侧面端口

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/edge_box_esp/connector_side.png" /></div>

1. 4 X LED指示灯
2. 以太网端口
3. CAN总线和RS485端口
4. 多功能凤凰连接器

#### LED指示灯：

<div align="center"><img style={{background: 'rgb(255, 255, 255)', border: '10px solid transparent'}} width={300}src="https://files.seeedstudio.com/wiki/edge_box_esp/LED.png" /></div>

<div class="table-center">

| LED名称 | 信号        | 描述            |
|  :---:   |  :---:        |    :---:               |
|   PWR    | 电源状态  |                        |
| Cellular | 4G/LTE        |                        |
|   ACT    | 串口TX状态 | 与U0TXD复用 |
|   ERR    | 串口RX状态 | 与U0RXD复用 |

</div>

#### 以太网端口：

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/eth.png" alt="pir" width={300} height="auto" /></div>

<div class="table-center">

| 引脚#          |  信号      | 描述                               |
|  :---:        |  :---:       |    :---:                                  |
|      1        |      TXP     |                                           |
|      2        |      TXN     |                                           |
|      3        |      RXP     |                                           |
|      4        |      N.C.    |                                           |
|      5        |      N.C.    |                                           |
|      6        |      RXN     |                                           |
|      7        |      N.C.    |                                           |
|      8        |      N.C.    |                                           |
|   黄色LED  |    ACTIVE    |  当有TX和RX数据通过时激活  |
|   绿色LED   |     LINK     |          当链路连接时激活              |

</div>

#### CAN总线和RS485端口：

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/eth.png" alt="pir" width={300} height="auto" /></div>

<div class="table-center">

| 引脚#          |  信号      | 描述                               |
|  :---:        |  :---:       |    :---:                                  |
|      1        |      N.C.     |                                           |
|      2        |      N.C.     |                                           |
|      3        |      N.C.     |                                           |
|      4        |      CAN_H    |                                           |
|      5        |      CAN_L    |                                           |
|      6        |      N.C.     |                                           |
|      7        |      RS485_A  |                                           |
|      8        |      RS485_B  |                                           |
|   黄色LED  |    ACTIVE     |  当有CAN总线数据TX和RX通过时激活  |
|   绿色LED   |     LINK      |  当有RS485数据TX和RX通过时激活    |

</div>

:::note

    1. RS485的120欧姆终端电阻已安装在内部。
    2. CAN总线的120欧姆终端电阻已安装在内部。

:::

#### 多功能凤凰连接器

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/multi-func-connector.png" alt="pir" width={500} height="auto" /></div>

<div class="table-center">

| 功能  | 引脚编号  |  引脚编号 | 功能  |
|:---:      | :---: | :---: | :---: |
|  S/S      | 2  | 1  | DO_24V  |
|  DI0      | 4  | 3  | DO_0V  |
|  DI1      | 6  | 5  | DO0  |
|  DI2      | 8  | 7  | DO1  |
|  DI3      | 10  | 9 | DO2  |
|  AGND     | 12 | 11 | DO3  |
|  AI0      | 14 | 13 | DO4  |
|  AI1      | 16 | 15 | DO5  |
|  AI2      | 18 | 17 | AO0  |
|  AI3      | 20 | 29 | AO1  |
|  AGND     | 22 | 21 | AGND  |
|  GND      | 24 | 23 | +24V  |

</div>

:::note
    1. 建议使用24AWG到16AWG电缆
    2. GND和AGND是隔离的
    3. 所有AGND信号在内部连接
    4. 输入直流电压为24V(+- 10%)
    5. 输出直流电压应为24V(+- 10%)。电流容量为1A。
:::

### 顶部端口

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/connector_top.png" alt="pir" width={500} height="auto" /></div>

1. Wi-Fi天线端口（SMA母头）
2. SIM卡
3. 复位
4. USB端口（仅5V电源输出）
5. 4G/LTE天线端口（SMA母头）

### GPIO复用

<div class="table-center">
 <table className="tg">
  <thead>
    <tr>
      <th className="tg-3gxb"><span style={{fontWeight: 'var(--ifm-table-head-font-weight)'}}>引脚名称</span></th>
      <th className="tg-3gxb"><span style={{fontWeight: 'var(--ifm-table-head-font-weight)'}}>ESP32S3 IO</span></th>
      <th className="tg-3gxb"><span style={{fontWeight: 'var(--ifm-table-head-font-weight)'}}>类型</span></th>
      <th className="tg-3gxb"><span style={{fontWeight: 'var(--ifm-table-head-font-weight)'}}>功能</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-lhaa">DO0</td>
      <td className="tg-lhaa">IO40</td>
      <td className="tg-lhaa">数字输出</td>
      <td className="tg-lhaa">数字输出 0</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO1</td>
      <td className="tg-lhaa">IO39</td>
      <td className="tg-lhaa">数字输出</td>
      <td className="tg-lhaa">数字输出 1</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO2</td>
      <td className="tg-lhaa">IO38</td>
      <td className="tg-lhaa">数字输出</td>
      <td className="tg-lhaa">数字输出 2</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO3</td>
      <td className="tg-lhaa">IO37</td>
      <td className="tg-lhaa">数字输出</td>
      <td className="tg-lhaa">数字输出 3</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO4</td>
      <td className="tg-lhaa">IO36</td>
      <td className="tg-lhaa">数字输出</td>
      <td className="tg-lhaa">数字输出 4</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO5</td>
      <td className="tg-lhaa">IO35</td>
      <td className="tg-lhaa">数字输出</td>
      <td className="tg-lhaa">数字输出 5</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DI0</td>
      <td className="tg-lhaa">IO4</td>
      <td className="tg-lhaa">数字输入</td>
      <td className="tg-lhaa">数字输入 0</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DI1</td>
      <td className="tg-lhaa">IO5</td>
      <td className="tg-lhaa">数字输入</td>
      <td className="tg-lhaa">数字输入 1</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DI2</td>
      <td className="tg-lhaa">IO6</td>
      <td className="tg-lhaa">数字输入</td>
      <td className="tg-lhaa">数字输入 2</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DI3</td>
      <td className="tg-lhaa">IO7</td>
      <td className="tg-lhaa">数字输入</td>
      <td className="tg-lhaa">数字输入 3</td>
    </tr>
    <tr>
      <td className="tg-lhaa" rowSpan={2}>AO0</td>
      <td className="tg-lhaa">IO42</td>
      <td className="tg-lhaa">模拟输出</td>
      <td className="tg-lhaa">模拟输出 0</td>
    </tr>
    <tr>
      <td className="tg-lhaa">IO41</td>
      <td className="tg-lhaa">模拟输出</td>
      <td className="tg-lhaa">模拟输出 1</td>
    </tr>
    <tr>
      <td className="tg-rzif" rowSpan={3}>RS485 </td>
      <td className="tg-rzif">IO17</td>
      <td className="tg-rzif">U1TXD</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif">IO18</td>
      <td className="tg-rzif">U1RXD</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif">IO8</td>
      <td className="tg-rzif">RS485_RTS</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif" rowSpan={4}>4G/LTE</td>
      <td className="tg-rzif">IO48</td>
      <td className="tg-rzif">U2TXD</td>
      <td className="tg-rzif" rowSpan={4}>WWAN</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO47</td>
      <td className="tg-rzif">U2RXD</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO21</td>
      <td className="tg-rzif">PWR_KEY</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO16</td>
      <td className="tg-rzif">PWR_EN</td>
    </tr>
    <tr>
      <td className="tg-rzif" rowSpan={6}>以太网 </td>
      <td className="tg-rzif">IO10</td>
      <td className="tg-rzif">FSPI_CS0</td>
      <td className="tg-rzif" rowSpan={6}>连接到 W5500</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO11</td>
      <td className="tg-rzif">FSPI_MISO</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO12</td>
      <td className="tg-rzif">FSPI_MOSI</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO13</td>
      <td className="tg-rzif">FSPI_SCLK</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO14</td>
      <td className="tg-rzif">INT #</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO15</td>
      <td className="tg-rzif">RST #</td>
    </tr>
    <tr>
      <td className="tg-rzif">CAN_TXD</td>
      <td className="tg-rzif">IO1</td>
      <td className="tg-rzif">CAN BUS TX</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif">CAN_RXD</td>
      <td className="tg-rzif">IO2</td>
      <td className="tg-rzif">CAN BUS RX</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif">TXD0/LED_ACT#</td>
      <td className="tg-rzif">U0TXD</td>
      <td className="tg-rzif" />
      <td className="tg-rzif">编程/调试和LED驱动</td>
    </tr>
    <tr>
      <td className="tg-rzif">RXD0/LED_ERR#</td>
      <td className="tg-rzif">U0RXD</td>
      <td className="tg-rzif" />
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif">Beep</td>
      <td className="tg-rzif">IO45</td>
      <td className="tg-rzif">蜂鸣器</td>
      <td className="tg-rzif">高电平有效 启用蜂鸣器</td>
    </tr>
    <tr>
      <td className="tg-rzif">Reset</td>
      <td className="tg-rzif">IO0</td>
      <td className="tg-rzif">复位按钮</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif" rowSpan={3}>I2C </td>
      <td className="tg-rzif">IO19</td>
      <td className="tg-rzif" />
      <td className="tg-rzif">I2C_SCL</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO20</td>
      <td className="tg-rzif" />
      <td className="tg-rzif">I2C_SDA</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO9</td>
      <td className="tg-rzif" />
      <td className="tg-rzif">来自 PCF8563 的报警或唤醒</td>
    </tr>
  </tbody>
</table>
</div>

#### 编程/调试端口

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/programming_port.png" alt="pir" width={300} height="auto" /></div>

<div class="table-center">

| 调试端口 | ESP32 IO | 其他功能 |
| :---:      | :---:    | :---:          |
| RXD        | RXD0     | LED_ACT#       |
| TXD        | TXD0     | LED_ERR#       |
| GND        | GND      |                |
| GPIO0      | IO0      | 复位按钮   |

</div>

:::note

GIPIO0 也连接到复位按钮。UART0 的 RXD、TXD 在下载模式下使用。
这些允许用户在裸机环境下开发 EdgeBox-ESP-100。

:::

### 内置设备

#### I2C 引脚映射和内置 I2C 设备

- I2C 引脚映射：

<div class="table-center">

| I2C 引脚 | ESP32 IO |
|  :---:  |  :---:   |  
| I2C_SDA |   IO20   |
| I2C_SCL |   IO19   |
| I2C_INT |   IO9    |

</div>

- 内置 I2C 设备和地址：

<div class="table-center">

|  设备              | 地址 | 功能      |
|  :---:               | :---:   | :---:         |
|  FM24CL64B           |  0x50   | 保持存储器 |
|  PCF8563             |  0x51   |   RTC         |
|  Atecc608a           |  0x68   | 加密设备 |
|  SGM58031            |  0x48   |   ADC         |

</div>

#### 4G LTE

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/4glte.png" alt="pir" width={300} height="auto" /></div>

<div class="table-center">

| A7670G 4G 模块  | ESP32 IO| 功能                                |
|  :---:            |  :---:  |  :---:                                  |
|  PWR_EN           |  IO16   | 通过 SY8089A 为 A7670G 启用电源 |
|  PWRKEY           |  IO21   | PWR_KEY                                 |
|  RXD              |  IO48   | U2TXD                                   |
|  TXD              |  IO47   | U2RXD                                   |

</div>

#### 模拟输入 (SGM58031)

<div class="table-center">

| SGM58031 (I2C 地址 0x48)  |  IO            |
|   :---:                      |   :---:        |
| CH1+                         |  AI0           |
| CH2+                         |  AI1           |
| CH3+                         |  AI2           |
| CH4+                         |  AI3           |
| SDA                          |  IO20/I2C_SDA  |
| SCL                          |  IO19/I2C_SCL  |

</div>

:::note
  
  默认输入类型为 4-20ma。
  0-10V 输入类型为可选项。

:::

#### 模拟输出

 双模拟输出通道采用 PWM 和 LPF 技术制成。

<div class="table-center">

| 模拟输出 | ESP32 IO |
|  :---:        |  :---:   |
|  AO0          |   IO42   |
|  AO1          |   IO41   |

</div>

## 电气规格

### 供电方式

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/Edgebox-esp-how-to-power.png" alt="pir" width={500} height="auto" /></div>

### 功耗

 EdgeBox-ESP-100 的功耗很大程度上取决于应用、操作模式和连接的外围设备。给出的数值应视为近似值。

:::note

在 24V 电源供电条件下

:::

<div class="table-center">

| 操作模式 | 电流(ma) |
| :---:             | :---:       |
| 空闲              | 81          |

</div>

## Arduino 编程入门

### 要求

#### 硬件要求

您需要准备以下物品：

- 1 x [EdgeBox-ESP-100](https://www.seeedstudio.com/EdgeBox-ESP-100-p-5490.html)
- 1 x PC
- 1 x USB 转串口适配器
- 1 x PH2 十字螺丝刀（可选）
- 1 x 内六角扳手 H2.5
- 1 x 12V3A（最低输入功率要求）电源

#### 软件要求

- [Arduino IDE](https://www.arduino.cc/en/software)

### 准备工作

#### 硬件

- 步骤 1：拆除外壳并找到编程端口

- 步骤 1-1：请找到并拆除两颗黑色内六角螺钉

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/remove_case.png" alt="pir" width={500} height="auto" /></div>

- 步骤 1-2：然后拆除 3 颗 M.3 PH2 十字螺钉。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/remove_PH.png" alt="pir" width={500} height="auto" /></div>

- 步骤 1-3：现在您应该能够找到编程端口。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/programming_port.png" alt="pir" width={300} height="auto" /></div>

- 步骤 2：将 USB 转串口适配器连接到 Edgebox-ESP-100

连接应按照以下方式进行

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/programming.png" alt="pir" width={800} height="auto" /></div>

:::caution

确保连接正确，在连接过程中 Edgebox-ESP-100 应处于断电状态。

:::

<div class="table-center">
<table className="tg">
  <thead>
    <tr>
      <th className="tg-wp8o">Edgebox-ESP-100</th>
      <th className="tg-c3ow">USB 转串口</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-wp8o">RXD</td>
      <td className="tg-c3ow">TX</td>
    </tr>
    <tr>
      <td className="tg-wp8o">TXD</td>
      <td className="tg-c3ow">RX</td>
    </tr>
    <tr>
      <td className="tg-wp8o">GND</td>
      <td className="tg-c3ow">GND</td>
    </tr>
    <tr>
      <td className="tg-c3ow" rowSpan={2}>GPIO0</td>
      <td className="tg-c3ow">GND（程序下载模式）<br /></td>
    </tr>
    <tr>
      <td className="tg-c3ow">用作串口调试器时不连接<br /></td>
    </tr>
  </tbody>
</table>
</div>

#### 软件

- 步骤 1：从 [Arduino 官方网站](https://www.arduino.cc/en/software) 下载 Arduino IDE 2.0.X 并安装。

- 步骤 2：从开发板管理器中查找并安装 ESP32。

- 步骤 2-1：打开 Arduino IDE 并点击 `Board Tab`（第二个标签页）以打开 `Board Manager`
  
- 步骤 2-2：在搜索栏中输入 **`ESP32`** 并按回车键，现在您应该能够看到列出的 esp32 开发板库。

- 步骤 2-3：从版本下拉菜单中选择最新版本，例如在编写本 wiki 时，最新版本是 **`version 2.0.7`**

:::note

请安装 esp32 开发板库的 **`2.0.7`** 或更高版本。

:::

- 步骤 2-4：点击 `Install`

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/download_board.png" alt="pir" width="auto" height="auto" /></div>

### Edgebox-ESP-100 使用 Arduino 控制电磁阀

#### 接线图

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/connection.png" alt="pir" width={400} height="auto" /></div>

#### 代码

以下是循环控制所有电磁阀的代码，请将代码复制到 Arduino IDE 代码编辑器中

```c
void setup() {
  //setup DO pins to output mode
  pinMode(DO0, OUTPUT);
  pinMode(DO1, OUTPUT);
  pinMode(DO2, OUTPUT);
  pinMode(DO3, OUTPUT);
  //setup DO pins default to Logic LOW
  digitalWrite(DO0, LOW);
  digitalWrite(DO1, LOW);
  digitalWrite(DO2, LOW);
  digitalWrite(DO3, LOW);
}

void loop() {
  //Switch on DO0 and Swith off DO3
  digitalWrite(DO0, HIGH);
  digitalWrite(DO3, LOW);
  delay(2000);

  //Switch on DO1 and Swith off DO0
  digitalWrite(DO0, LOW);
  digitalWrite(DO1, HIGH);
  delay(2000);

  //Switch on DO2 and Swith off DO1
  digitalWrite(DO1, LOW);
  digitalWrite(DO2, HIGH);
  delay(2000);
  
  //Switch on DO3 and Swith off DO2
  digitalWrite(DO2, LOW);
  digitalWrite(DO3, HIGH);
  delay(2000);
}

```

#### 上传代码

- 步骤 1：现在请将 USB 转串口适配器插入您的 PC，并将 Edgebox-ESP-100 与 USB 转串口转换器的连接设置为下载程序模式。

:::note

在下一步之前不要给 Edgebox-ESP-100 上电

:::

- 步骤 2：给 Edgebox-ESP-100 上电

- 步骤 3：选择开发板和端口

- 步骤 3-1：打开开发板和端口选择窗口

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/select_boardandport.png" alt="pir" width="auto" height="auto" /></div>

- 步骤 3：从`开发板和端口选择窗口`中选择开发板和端口，在这种情况下，我们可以在搜索栏中输入 edgebox 并选择 Edgebox-ESP-100 作为开发板，并根据您的 USB 转串口适配器选择端口。然后按**`确定`**进行确认。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/selectboard.png" alt="pir" width="auto" height="auto" /></div>

- 步骤 4：按上传代码按钮上传代码。
  
<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/uploadcode.png" alt="pir" width="auto" height="auto" /></div>

- 步骤 5：重置电源以监控 Edgebox-ESP-100 控制电磁阀。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/demo.gif" alt="pir" width="auto" height="auto" /></div>

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
