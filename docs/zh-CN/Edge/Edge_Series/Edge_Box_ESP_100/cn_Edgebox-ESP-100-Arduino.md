---
description: EdgeBox-ESP-100 使用 Arduino 入门
title: EdgeBox-ESP-100 使用 Arduino 入门
keywords:
  - Edge
  - PLC 控制
  - 控制系统
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Edgebox-ESP-100-Arduino
last_update:
  date: 03/10/2023
  author: Peter Pan
---

## Edgebox-ESP-100

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/e/d/edgebox-esp100_1.jpg" style={{width: 600}}/></div>

EdgeBox-ESP-100 是一款基于 ESP32 的控制器，专为轻量级自动化解决方案设计。它支持模拟输入，可在远程环境中有效监控和控制，非常适合用于 PID 控制回路、逻辑顺序控制或作为具有灵活无线和现场传感器扩展功能的网关。

除了 EdgeBox-ESP-100，我们还提供了其他两款基于 Raspberry Pi 的 Edge 系列产品，以满足不同的解决方案需求。为了帮助您深入了解差异并选择最适合您项目的产品，请参考 Seeed Studio 的 [Edge 系列页面](https://www.seeedstudio.com/raspberrypi/device/industry.html)。

它提供了隔离的 CAN、RS485 现场总线连接，以及丰富的 IO 资源，可用于数字和模拟信号的广泛设施和传感器输入，非常适合 PLC 和现场自动化应用。

由于其内置的 Wi-Fi 和 BLE 功能，以及包含的 4G LTE 模块，EdgeBox-ESP-100 可用作工业网关，使原有的 PLC 能够连接网络或云端。

这款便携式设备配备了坚固的硬件、电气设计和铝合金外壳，能够在宽温范围内保持功能，并提供高浪涌和短路保护，适用于基于业务的多种部署方式。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-ESP-100-p-5490.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

> ⚠️ **重要通知：USB 编程/调试功能可用性**
>
> - **USB 编程/调试功能仅适用于** **最新版本** 的 **EdgeBox-ESP-100**。
> - **旧版本** 仅支持通过 USB-A 接口供电，**不支持编程或调试**。

---

> ❗**警告：请勿将旧版本的 USB-A 接口连接到 PC**
>
> - 将 **旧版本** 的 USB-A 接口连接到 PC 的 USB 接口可能会导致 **不正常行为**。
> - 如果计划通过 USB 编程或调试设备，请仅使用 **新版本**。

---

> **🔍 如何识别新版本**
>
> 检查设备外壳上的 **序列号 (SN)** 标签：
>
> **旧版本 SN**:
>
>  - 所有序列号为 `2437` 或 **更早**
>  - 示例：`102991735243700001`，`102991735243700093`
> - `2437` = **2024 年第 37 周**生产
>
> **新版本 SN**:
> - 所有序列号为 `2438` 或 **更晚**
>  - 示例：`102991735243800001`，`102991735243800093`
> - `2438` = **2024 年第 38 周及以后**生产

- 多现场总线支持：CAN、RS485、以太网
- 多无线功能：内置 Wi-Fi、BLE 连接；内置 4G LTE 模块
- 可靠的硬件设计：坚固、低维护结构
- 可靠的电气设计：高隔离、高浪涌和短路保护
- 支持 IEC 61131-3 标准程序（开发中）
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
        <p><strong>详情</strong></p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 629px;" colSpan={2} style={{height: 46, width: 629}}>
        <p><strong>基本信息</strong></p>
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
        <p><strong>无线连接</strong></p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>WiFi</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>芯片内置 2.4 GHz</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>蓝牙</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>芯片内置 Bluetooth 5.0, BLE</p>
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
        <p>CAN 总线</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>CAN 总线 *1 (隔离)</p>
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
        <p>电源</p>
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
        <p>-20 至 +60 °C</p>
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

## 硬件概览

### 前视图

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/edge_box_esp/font-port.png" /></div>

### 侧面接口

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/edge_box_esp/connector_side.png" /></div>

1. 4 个 LED 指示灯
2. 以太网接口
3. CAN 总线和 RS485 接口
4. 多功能凤凰端子

#### LED 指示灯：

<div align="center"><img style={{background: 'rgb(255, 255, 255)', border: '10px solid transparent'}} width={300}src="https://files.seeedstudio.com/wiki/edge_box_esp/LED.png" /></div>

<div class="table-center">

| LED 名称 | 信号        | 描述                  |
|  :---:   |  :---:      |    :---:             | 
|   PWR    | 电源状态    |                      |
| Cellular | 4G/LTE      |                      |
|   ACT    | 串口 TX 状态 | 与 U0TXD 复用        |
|   ERR    | 串口 RX 状态 | 与 U0RXD 复用        |

</div>

#### 以太网接口：

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/eth.png" alt="pir" width={300} height="auto" /></div>


<div class="table-center">

| 引脚编号   |  信号      | 描述                                   |
|  :---:     |  :---:     |    :---:                              | 
|      1     |      TXP   |                                       |
|      2     |      TXN   |                                       |
|      3     |      RXP   |                                       |
|      4     |      N.C.  |                                       |
|      5     |      N.C.  |                                       |
|      6     |      RXN   |                                       |
|      7     |      N.C.  |                                       |
|      8     |      N.C.  |                                       |
|   黄色 LED |    ACTIVE  | 当 TX 和 RX 数据通过时激活            |
|   绿色 LED |     LINK   | 当连接建立时激活                      |

</div>

#### CAN 总线和 RS485 接口：

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/eth.png" alt="pir" width={300} height="auto" /></div>

<div class="table-center">

| 引脚编号   |  信号      | 描述                                   |
|  :---:     |  :---:     |    :---:                              | 
|      1     |      N.C.  |                                       |
|      2     |      N.C.  |                                       |
|      3     |      N.C.  |                                       |
|      4     |      CAN_H |                                       |
|      5     |      CAN_L |                                       |
|      6     |      N.C.  |                                       |
|      7     |      RS485_A|                                      |
|      8     |      RS485_B|                                      |
|   黄色 LED |    ACTIVE  | 当 CAN 总线数据的 TX 和 RX 通过时激活 |
|   绿色 LED |     LINK   | 当 RS485 数据的 TX 和 RX 通过时激活|

</div>

:::note

    1. RS485 的 120 欧姆终端电阻已内置。
    2. CAN 总线的 120 欧姆终端电阻已内置。

:::

#### 多功能凤凰端子

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/multi-func-connector.png" alt="pir" width={500} height="auto" /></div>


<div class="table-center">

| 功能       | 引脚编号 | 引脚编号 | 功能       |
|:---:       | :---:    | :---:    | :---:      |
|  S/S       | 2        | 1        | DO_24V     |
|  DI0       | 4        | 3        | DO_0V      |
|  DI1       | 6        | 5        | DO0        |
|  DI2       | 8        | 7        | DO1        |
|  DI3       | 10       | 9        | DO2        |
|  AGND      | 12       | 11       | DO3        |
|  AI0       | 14       | 13       | DO4        |
|  AI1       | 16       | 15       | DO5        |
|  AI2       | 18       | 17       | AO0        |
|  AI3       | 20       | 29       | AO1        |
|  AGND      | 22       | 21       | AGND       |
|  GND       | 24       | 23       | +24V       | 

</div>

:::note
    1. 建议使用 24AWG 至 16AWG 的电缆
    2. GND 和 AGND 是隔离的
    3. 所有 AGND 信号内部连接
    4. 输入的直流电压为 24V（±10%）
    5. 输出的直流电压应为 24V（±10%），电流容量为 1A。
:::

### 顶部接口

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/connector_top.png" alt="pir" width={500} height="auto" /></div>


1. Wi-Fi 天线接口（SMA 母头）
2. SIM 卡
3. 复位按钮
4. USB 接口（仅 5V 电源输出）
5. 4G/LTE 天线接口（SMA 母头）

### GPIO 多路复用
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
      <td className="tg-rzif">CAN 总线 TX</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif">CAN_RXD</td>
      <td className="tg-rzif">IO2</td>
      <td className="tg-rzif">CAN 总线 RX</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif">TXD0/LED_ACT#</td>
      <td className="tg-rzif">U0TXD</td>
      <td className="tg-rzif" />
      <td className="tg-rzif">编程/调试和 LED 驱动</td>
    </tr>
    <tr>
      <td className="tg-rzif">RXD0/LED_ERR#</td>
      <td className="tg-rzif">U0RXD</td>
      <td className="tg-rzif" />
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif">蜂鸣器</td>
      <td className="tg-rzif">IO45</td>
      <td className="tg-rzif">蜂鸣器</td>
      <td className="tg-rzif">高电平激活启用蜂鸣器</td>
    </tr>
    <tr>
      <td className="tg-rzif">复位</td>
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

| 调试端口 | ESP32 IO | 其他功能       |
| :---:    | :---:    | :---:          |
| RXD      | RXD0     | LED_ACT#       |
| TXD      | TXD0     | LED_ERR#       |
| GND      | GND      |                |
| GPIO0    | IO0      | 重置按钮       |

</div>

:::note

GPIO0 也连接到重置按钮。而 UART0 的 RXD 和 TXD 在下载模式下使用。
这些功能允许用户以裸机方式开发 EdgeBox-ESP-100。

:::

### 内置设备

#### I2C 引脚映射及内置 I2C 设备

* I2C 引脚映射：

<div class="table-center">

| I2C 引脚 | ESP32 IO |
|  :---:   |  :---:   |  
| I2C_SDA  |   IO20   |
| I2C_SCL  |   IO19   |
| I2C_INT  |   IO9    |

</div>

* 内置 I2C 设备及地址：

<div class="table-center">

|  设备                | 地址   | 功能            |
|  :---:               | :---:  | :---:           |
|  FM24CL64B           |  0x50  | 保持内存        |
|  PCF8563             |  0x51  | RTC             |
|  Atecc608a           |  0x68  | 加密设备        |
|  SGM58031            |  0x48  | ADC             |

</div>

#### 4G LTE

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/4glte.png" alt="pir" width={300} height="auto" /></div>

<div class="table-center">

| A7670G 4G 模块       | ESP32 IO | 功能                                   |
|  :---:               |  :---:   |  :---:                                |
|  PWR_EN              |  IO16    | 通过 SY8089A 为 A7670G 启用电源       |
|  PWRKEY              |  IO21    | PWR_KEY                               |
|  RXD                 |  IO48    | U2TXD                                 |
|  TXD                 |  IO47    | U2RXD                                 |

</div>

#### 模拟输入 (SGM58031)

<div class="table-center">

| SGM58031 (I2C 地址 0x48) | IO             |
|   :---:                  |   :---:        |
| CH1+                     |  AI0           |
| CH2+                     |  AI1           |
| CH3+                     |  AI2           |
| CH4+                     |  AI3           |
| SDA                      |  IO20/I2C_SDA  |
| SCL                      |  IO19/I2C_SCL  |

</div>

:::note
  
  默认输入类型为 4-20mA。
  0-10V 输入类型为可选。

:::

#### 模拟输出

双通道模拟输出由 PWM 和低通滤波器 (LPF) 技术组成。

<div class="table-center">

| 模拟输出 | ESP32 IO |
|  :---:   |  :---:   |
|  AO0     |   IO42   |
|  AO1     |   IO41   |

</div>

## 电气规格

### 如何供电

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/Edgebox-esp-how-to-power.png" alt="pir" width={500} height="auto" /></div>

### 功耗

EdgeBox-ESP-100 的功耗强烈依赖于应用、操作模式以及连接的外设设备。以下值为近似值。

:::note

在 24V 电源条件下

:::

<div class="table-center">

| 操作模式 | 电流 (mA) |
| :---:    | :---:     |
| 空闲     | 81        |

</div>

## 开始使用 Arduino 编程

### 要求

#### 硬件要求

您需要准备以下物品：

- 1 x [EdgeBox-ESP-100](https://www.seeedstudio.com/EdgeBox-ESP-100-p-5490.html)
- 1 x 电脑
- 1 x USB 转串口适配器
- 1 x PH2 十字螺丝刀（可选）
- 1 x H2.5 内六角扳手
- 1 x 12V3A（最低输入电源要求）电源

#### 软件要求

- [Arduino IDE](https://www.arduino.cc/en/software)

### 准备工作

#### 硬件

* 第一步：拆下外壳并找到编程端口

* 第 1-1 步：找到并拆下两个黑色内六角螺钉

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/remove_case.png" alt="pir" width={500} height="auto" /></div>

* 第 1-2 步：然后拆下 3 个 M.3 PH2 十字螺钉。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/remove_PH.png" alt="pir" width={500} height="auto" /></div>

* 第 1-3 步：现在您应该能够找到编程端口。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/programming_port.png" alt="pir" width={300} height="auto" /></div>

* 第二步：将 USB 转串口适配器连接到 EdgeBox-ESP-100

连接方式如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/programming.png" alt="pir" width={800} height="auto" /></div>

:::caution

确保连接正确，并且在连接过程中 EdgeBox-ESP-100 处于断电状态。

:::

<div class="table-center">
<table className="tg">
  <thead>
    <tr>
      <th className="tg-wp8o">EdgeBox-ESP-100</th>
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
      <td className="tg-c3ow">用作串口调试时不连接<br /></td>
    </tr>
  </tbody>
</table>
</div>

#### 软件

* 第一步：从 [Arduino 官方网站](https://www.arduino.cc/en/software) 下载 Arduino IDE 2.0.X 并安装。

* 第二步：从板管理器中查找并安装 ESP32。

* 第 2-1 步：打开 Arduino IDE，点击 `板卡选项卡`（第二个选项卡）以打开 `板管理器`。

* 第 2-2 步：在搜索栏中输入 **`ESP32`** 并按回车键，现在您应该能看到列出的 ESP32 板库。

* 第 2-3 步：从版本下拉菜单中选择最新版本，例如，在撰写本文时，最新版本是 **`版本 2.0.7`**。

:::note

请安装版本 >= **`2.0.7`** 的 ESP32 板库。

:::

* 第 2-4 步：点击 `安装`。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/download_board.png" alt="pir" width="auto" height="auto" /></div>

### 使用 Arduino 控制 EdgeBox-ESP-100 的电磁阀

#### 接线图

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/connection.png" alt="pir" width={400} height="auto" /></div>

#### 代码

以下是循环控制所有电磁阀的代码，请将代码复制到 Arduino IDE 的代码编辑器中。

```c
void setup() {
  // 设置 DO 引脚为输出模式
  pinMode(DO0, OUTPUT);
  pinMode(DO1, OUTPUT);
  pinMode(DO2, OUTPUT);
  pinMode(DO3, OUTPUT);
  // 设置 DO 引脚默认逻辑为 LOW
  digitalWrite(DO0, LOW);
  digitalWrite(DO1, LOW);
  digitalWrite(DO2, LOW);
  digitalWrite(DO3, LOW);
}

void loop() {
  // 打开 DO0 并关闭 DO3
  digitalWrite(DO0, HIGH);
  digitalWrite(DO3, LOW);
  delay(2000);

  // 打开 DO1 并关闭 DO0
  digitalWrite(DO0, LOW);
  digitalWrite(DO1, HIGH);
  delay(2000);

  // 打开 DO2 并关闭 DO1
  digitalWrite(DO1, LOW);
  digitalWrite(DO2, HIGH);
  delay(2000);
  
  // 打开 DO3 并关闭 DO2
  digitalWrite(DO2, LOW);
  digitalWrite(DO3, HIGH);
  delay(2000);
}
```

#### 上传代码

* 第一步：现在请将 USB 转串口适配器插入电脑，并将 EdgeBox-ESP-100 的连接设置为程序下载模式。

:::note

在下一步之前不要给 EdgeBox-ESP-100 通电。

:::

* 第二步：给 EdgeBox-ESP-100 通电。

* 第三步：选择板卡和端口。

* 第 3-1 步：打开板卡和端口选择窗口。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/select_boardandport.png" alt="pir" width="auto" height="auto" /></div>

* 第 3-2 步：从 `板卡和端口选择窗口` 中选择板卡和端口。在搜索栏中输入 EdgeBox 并选择 EdgeBox-ESP-100 作为板卡，并根据您的 USB 转串口适配器选择端口。然后按 **`OK`** 确认。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/selectboard.png" alt="pir" width="auto" height="auto" /></div>

* 第四步：点击上传代码按钮上传代码。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/uploadcode.png" alt="pir" width="auto" height="auto" /></div>

* 第五步：重置电源以监控 EdgeBox-ESP-100 控制电磁阀的情况。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/demo.gif" alt="pir" width="auto" height="auto" /></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>