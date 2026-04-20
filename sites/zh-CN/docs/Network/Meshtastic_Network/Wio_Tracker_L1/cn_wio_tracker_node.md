---
description: Wio Tracker L1 介绍
title: Wio Tracker L1 介绍
keywords:
  - Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-L1.webp
slug: /wio_tracker_l1_node
sidebar_position: 1
last_update:
  date: 12/18/2025
  author: Michelle Huang
createdAt: '2025-05-23'
updatedAt: '2025-12-18'
url: https://wiki.seeedstudio.com/cn/wio_tracker_l1_node/
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg" alt="pir" width={600} height="auto" /></p>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-p-6453.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
    </a>
</div>
Wio Tracker L1 系列是一款低功耗、高可扩展性的 [Meshtastic®](https://meshtastic.org/) 节点，具备 LoRa（862–930 MHz）、用于高效处理的 nRF52840，以及用于精准定位追踪的 L76K GPS 模块。其设计灵活，支持 OLED 和电子墨水屏，同时兼容太阳能板和电池供电，非常适合广泛的物联网和离网应用场景。

## L1 系列型号

:::tip
Wio Tracker L1 系列提供 4 个版本——请选择最符合你需求的型号。
:::

### 系列介绍

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/TTiDN3h7cNk?si=2F0PXFlQmDSefCdX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 版本对比

|产品名称|Wio Tracker L1 Lite|Wio Tracker L1|Wio Tracker L1 Pro|Wio Tracker L1 E-Ink|
|------------------|------------------|--------------------------|-----------------------|-----------------------|
|图片|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993653-wio-tracker-l1-lite.jpg" alt="pir" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993648-wio-tracker-l1.jpg" alt="pir" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993649-wio-tracker-l1-pro.jpg" alt="pir" width={300} height="auto" />|<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/L1-e-ink.png" alt="pir" width={300} height="auto" />|
|购买链接|<p style={{textAlign: 'center'}}>[立即获取!](https://www.seeedstudio.com/Wio-Tracker-L1-Lite-p-6455.html)</p>|<p style={{textAlign: 'center'}}>[立即获取!](https://www.seeedstudio.com/Wio-Tracker-L1-p-6453.html)</p>|<p style={{textAlign: 'center'}}>[立即获取!](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html)</p>|<p style={{textAlign: 'center'}}>[立即获取!](https://www.seeedstudio.com/Wio-Tracker-L1-E-ink-p-6456.html)</p>|
|LoRa|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|GPS|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|屏幕|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>1.3 英寸 OLED</p><br/><p style={{textAlign: 'center'}}>分辨率：128 × 64 像素</p>|<p style={{textAlign: 'center'}}>1.3 英寸 OLED</p><br/><p style={{textAlign: 'center'}}>分辨率：128 × 64 像素</p>|<p style={{textAlign: 'center'}}>2.13 英寸电子墨水屏</p><br/><p style={{textAlign: 'center'}}>分辨率：122 × 250 像素</p>|
|太阳能+电池接口|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>内置 2000mAh 电池</p>|<p style={{textAlign: 'center'}}>✅</p>|
|外壳|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>-</p>|

## 概览

### 特性

- **预刷入 Meshtastic 固件**
开箱即用，预装 Meshtastic 固件，便于快速、无缝地完成设置。

- **三重供电方式**
支持 Type-C 快速充电、太阳能输入和锂电池供电，可在多种环境中灵活部署——非常适合户外和移动应用。

- **灵活的显示支持**
可选 1.3 英寸 OLED 和 2.13 英寸电子墨水屏，为不同功耗和视觉反馈需求提供多样化显示方案。

- **高扩展性**
与 Grove 生态系统完全兼容，并提供 PTH 过孔排针和 SWD 调试接口，方便进行自定义硬件扩展和高级开发。

### 规格

:::tip
最新批次的 L1、L1 Lite 和 L1 E-Ink 均配备电池转接线，可将 1mm 接口转换为 2mm 接口，为你提供更多电池选择。
:::

<table>
  <tr>
    <th colspan="1">处理器</th>
    <th colspan="1">
      Nordic nRF52840<br />ARM® Cortex®-M4 with FPU runs up to 64 MHz
    </th>
  </tr>
  <tr>
    <td colspan="1">片上存储器</td>
    <td colspan="1">1 MB flash 和 256 kB RAM</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">无线</td>
    <td colspan="1">LoRa：基于 <a href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html">Wio-SX1262</a>，支持 862-930MHz</td>
  </tr>
   <tr>
  <td colspan="1">L1 Pro 的 LoRa 天线：3dBi</td>
  </tr>
  <tr>
    <td colspan="1">Bluetooth 5.0</td>
  </tr>
  <tr>
    <td colspan="1">GPS</td>
    <td colspan="1">L76K（GPS、北斗、GLONASS、QZSS）</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">接口</td>
    <td colspan="1">Grove *1：UART/IIC/GPIO</td>
  </tr>
  <tr>
    <td colspan="1">过孔镀铜（PTH）：UART/IIC/GPIO/模拟量</td>
  </tr>
  <tr>
    <td colspan="1">预留 SWD 焊盘</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">电源输入</td>
    <td colspan="1">USB Type-C：5V — 1A</td>
  </tr>
  <tr>
    <td colspan="1">太阳能板（2.0mm 2p）：5V — 1A</td>
  </tr>
  <tr>
    <td colspan="1">锂电池（1mm 2p JST）：3.7V — 1A</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">[OLED Screen](https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html)</td>
    <td colspan="1">尺寸：1.3 英寸</td>
  </tr>
  <tr>
    <td colspan="1">分辨率：128 × 64 像素</td>
  </tr>
  <tr>
    <td colspan="1">有效显示区域（mm）：34.5 × 23.0</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">[E-Ink Screen](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html)</td>
    <td colspan="1">尺寸：2.13 英寸</td>
  </tr>
  <tr>
    <td colspan="1">分辨率：122 × 250 像素</td>
  </tr>
  <tr>
    <td colspan="1">有效显示区域（mm）：48.55 × 23.7046</td>
  </tr>
  <tr>
    <td colspan="1">认证</td>
    <td colspan="1">FCC、CE、RoHS</td>
  </tr>
</table>

### 硬件概览

**Wio Tracker L1**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio_tracker-l1.png" alt="pir" width={800} height="auto" /></p>

**Wio Tracker L1 Lite**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio_tracker_l1_lite.png" alt="pir" width={800} height="auto" /></p>

**Wio Tracker L1 Pro**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio_tracker_l1-pro.png" alt="pir" width={800} height="auto" /></p>

**结构示意图**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1%20Diagram.png" alt="pir" width={800} height="auto" /></p>
