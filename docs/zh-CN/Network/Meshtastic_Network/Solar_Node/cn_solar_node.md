---
description: SenseCAP Solar Node for Meshtastic & LoRa
title: SenseCAP Solar Node
keywords:
- Meshtastic
- Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /cn/meshtastic_solar_node
sidebar_position: 1
last_update:
  date: 12/16/2025
  author: Michelle Huang
---



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png" alt="pir" width={800} height="auto" /></p>

这是一个基于 [Meshtastic®](https://meshtastic.org/) 的经济型太阳能通信节点或中继器，集成了 XIAO nRF52840 Plus 主控制器和 Wio-SX1262 LoRa 模块。它专为无网络覆盖区域设计，支持长距离通信、精确定位和低功耗运行，适用于扩展户外区域的网络覆盖。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshtastic-LoRa-p-6412.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 </font></span></strong>
    </a>
</div>

## 版本对比

Solar Node 有两个版本：[SenseCAP Solar Node P1](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-for-Meshtastic-LoRa-p-6425.html) 和 [SenseCAP Solar Node P1-Pro](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshtastic-LoRa-p-6412.html)。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114993633-1_1.jpeg" alt="pir" width={800} height="auto" /></p>

## 概述

### 特性

- 集成 5W 太阳能板，支持外接电池（需用户自行提供）。
- 设备出厂预装 Meshtastic 固件，可无缝集成到 Meshtastic 生态系统中。
- 兼容 Grove 生态系统，支持温湿度传感器、光传感器等传感器的即插即用。
- 适用于长期户外使用。
- 在开阔区域支持 8 到 9 公里传输距离。可用作户外节点或中继器，轻松扩展 Mesh 网络并增强网络覆盖。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114993633-3.png" alt="pir" width={800} height="auto" /></p>

### 规格参数

<table>
  <tr>
    <th><b>主控制器</b></th>
    <th>
      <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html" target="_blank">XIAO nRF52840 Plus</a><br />
      (Nordic nRF52840, ARM® Cortex®-M4 32 位处理器带 FPU, 64 MHz, 256KB RAM, 1MB Flash, 2MB 板载 Flash)
    </th>
  </tr>
  <tr>
    <td><b>LoRa 模块</b></td>
    <td>
      <a href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html" target="_blank">Wio-SX1262 模块</a><br />
      (Semtech SX1262, TXOP=22dBm@862-930MHz)
    </td>
  </tr>
  <tr>
    <td><b>GPS 模块（P1-Pro 版本）</b></td>
    <td>
      <a href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">XIAO L76K</a><br />
      (支持 GPS/GLONASS/Galileo)
    </td>
  </tr>
  <tr>
    <td rowSpan="3"><b>天线</b></td>
    <td>
      <p>LoRa:</p>
      <p>类型：棒状橡胶天线</p>
      <p>频率范围：868-915MHz</p>
      <p>增益：2dBi</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>GNSS:</p>
      <p>GPS L1 C/A: 1575.42MHz</p>
      <p>GLONASS L1: 1602MHz</p>
      <p>BeiDou B1: 1561.098MHz</p>
    </td>
  </tr>
  <tr>
    <td>Bluetooth 5.0</td>
  </tr>
  <tr>
    <td><b>太阳能板</b></td>
    <td>5W</td>
  </tr>
  <tr>
    <td rowSpan="2"><b>接口</b></td>
    <td>Grove *1: IIC/GPIO/UART</td>
  </tr>
  <tr>
    <td>USB-C 调试</td>
  </tr>
  <tr>
    <td rowSpan="3"><b>按钮</b></td>
    <td>电源开/关</td>
  </tr>
  <tr>
    <td>复位</td>
  </tr>
  <tr>
    <td>用户自定义</td>
  </tr>
  <tr>
    <td rowSpan="4"><b>LED</b></td>
    <td>充电状态指示灯 *2</td>
  </tr>
  <tr>
    <td>太阳能板状态指示灯 *1</td>
  </tr>
  <tr>
    <td>Mesh 心跳灯 *1</td>
  </tr>
  <tr>
    <td>用户自定义 *1</td>
  </tr>
  <tr>
    <td><b>电源供应</b></td>
    <td>Type-C: 5V 1A</td>
  </tr>
  <tr>
    <td></td>
    <td>太阳能供电：5V 1A</td>
  </tr>
  <tr>
    <td><b>防水等级</b></td>
    <td>IPX5</td>
  </tr>
  <tr>
    <td><b>电池（P1-Pro 版本）</b></td>
    <td>
      <p>- 4 x 18650 锂电池（每个 3350mAh）</p>
      <p>- 支持 Type-C 和太阳能充电</p>
      <p>- 放电环境：-40～60°C</p>
      <p>- 充电环境：0-50°C</p>
    </td>
  </tr>
  <tr>
    <td><b>认证</b></td>
    <td>FCC、CE</td>
  </tr>
  <tr>
    <td><b>尺寸</b></td>
    <td>191.2 x 201.2 x 42.1 mm</td>
  </tr>
</table>



### 硬件概述

**交互组件**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/interactive.png" alt="pir" width={800} height="auto" /></p>

**配件**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/accessory.png" alt="pir" width={800} height="auto" /></p>

**示意图**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>
