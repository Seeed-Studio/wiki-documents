---
description: Wio Tracker L2 系列介绍。包括特性、功能、参数和系列对比。
title: Wio Tracker L2 介绍
keywords:
  - Meshtastic
  - Wio Tracker L2
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png
slug: /meshtastic_wio_tracker_l2_intro
sku: 100029766
sidebar_position: 0
last_update:
  date: 3/13/2026
  author: Michelle Huang
createdAt: '2025-06-17'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/cn/meshtastic_wio_tracker_l2_intro/
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png" alt="pir" width={900} height="auto" /></p>

Wio Tracker L2 系列是一款高度可扩展的 [Meshtastic®](https://meshtastic.org/) 节点，具备 LoRa（862–930 MHz）、用于高效处理的 ESP32S3，以及用于精准定位的 L76K GPS 模组。其设计灵活，支持 QSPI 触摸屏、E-Ink 显示屏、TF 卡，以及太阳能板和电池供电，非常适合广泛的物联网和离网应用场景。

## 特性

- **3.2 英寸高品质触摸屏**：配备 320×240 高清晰度显示屏，支持可切换的 MUI 和 Base UI，在无需手机的情况下，即可在设备上实现流畅的消息、地图和控制交互。

- **ESP32S3 驱动，随时可二次开发**：由集成 Wi-Fi 和 Bluetooth LE 的双核 ESP32-S3 提供算力，L2 Pro 为 UI 自定义、功能开发和开源应用提供了灵活的平台。

- **离线地图与 GNSS 定位**：可预先将离线地图下载到 MicroSD 卡，即使在没有蜂窝网络或互联网接入的情况下，也能在设备上查看实时 GNSS 位置。

- **3000mAh 长续航电池**：支持长时间日常使用，减少充电频率；可在 -10°C 至 55°C 环境下工作。

- **便于携带，安装灵活**：可折叠天线提升便携性，1/4 英寸安装接口可搭配兼容配件实现灵活安装。

## 规格

<table>
  <tr>
    <th colspan="1">**项目**</th>
    <th colspan="1">**参数**</th>
  </tr>
  <tr>
    <td colspan="1">**处理器**</td>
    <td colspan="1">Wio-S3（ESP32S3 + SX1262 模组）</td>
  </tr>
    <tr>
    <td colspan="1">**LoRa**</td>
    <td colspan="1">863-928 MHz<br/>最大发射功率：20dBm@US915，14dBm@EU868</td>
  </tr>
    <tr>
    <td colspan="1">**GNSS**</td>
    <td colspan="1">L76K（GPS、北斗、GLONASS、QZSS）</td>
  </tr>
  <tr>
    <td colspan="1">**片上存储**</td>
    <td colspan="1">16MB Flash / 8MB PSRAM</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">**天线**</td>
    <td colspan="1">LoRa：</td>
  </tr>
   <tr>
    <td colspan="1">Wifi/BLE 5.0：FPC 天线</td>
  </tr>
  <tr>
    <td colspan="1">GPS：陶瓷天线</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">**接口**</td>
    <td colspan="1">Grove *1：</td>
  </tr>
  <tr>
    <td colspan="1">MicroSD 卡槽</td>
  </tr>
  <tr>
    <td colspan="1">四分之一英寸螺纹孔</td>
  </tr>
   <tr>
    <td colspan="1">**QSPI 接口**</td>
    <td colspan="1">兼容 IPS 屏和 E-INK 屏</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">**电源输入**</td>
    <td colspan="1">USB Type-C：5V — 1A</td>
  </tr>
  <tr>
    <td colspan="1">太阳能：JST-PH 2P-2.0mm，5V ~ 13V</td>
  </tr>
  <tr>
    <td colspan="1">锂离子电池（2P-1.25mm）：3.7V</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="2">**IPS 触摸屏**</td>
    <td colspan="1">尺寸：3.2 英寸</td>
  </tr>
  <tr>
    <td colspan="1">分辨率：240 × 320 像素</td>
  </tr>
    <tr>
    <td colspan="1">**LED**</td>
    <td colspan="1">Mesh 指示灯 * 1<br/>充电指示灯 * 1</td>
  </tr>
  <tr>
    <td colspan="1">**按键**</td>
    <td colspan="1">WAKE-UP * 1<br/>User/Boot * 1<br/>RST * 1<br/>电源开关 * 1</td>
  </tr>
    <tr>
    <td colspan="1" rowspan="3">**音频**</td>
    <td colspan="1">I2S Codec：ES8311</td>
  </tr>
  <tr>
    <td colspan="1">MIC：预留引脚</td>
  </tr>
    <tr>
    <td colspan="1">扬声器：6Ω 0.8W</td>
  </tr>
    <tr>
    <td colspan="1">**通信距离**</td>
    <td colspan="1">最远 5.8 km</td>
  </tr>
    <tr>
    <td colspan="1">**尺寸**</td>
    <td colspan="1"></td>
  </tr>
  <tr>
    <td colspan="1">**设备重量**</td>
    <td colspan="1"></td>
  </tr>
    <tr>
    <td colspan="1">**工作温度**</td>
    <td colspan="1">-10℃ 至 +55℃</td>
  </tr>
  <tr>
    <td colspan="1">**认证**</td>
    <td colspan="1">FCC、CE、RoHS、Telec</td>
  </tr>
</table>

**电池**

|项目|参数|
| :- | :- |
|**电池容量**|可充电锂离子电池，3000mAh|
|**电池寿命监测**|周期性上行电池电量|
|**充电协议**|USB Type-C|
|**设备电源输入**|5V，1A|
|**满充截止电压**|4.2V|
|**充电温度范围**|0 至 +45℃|

## 引脚列表

<table>
  <tr>
    <th>组件</th>
    <th>引脚</th>
    <th>引脚号</th>
    <th>协议</th>
  </tr>
  <tr>
    <td rowspan="9">显示屏</td>
    <td>QSPI_CLK</td>
    <td>GPIO42</td>
    <td rowspan="6">QSPI</td>
  </tr>
  <tr>
    <td>QSPI_DAT0</td>
    <td>GPIO41</td>
  </tr>
  <tr>
    <td>QSPI_DAT1</td>
    <td>GPIO40</td>
  </tr>
  <tr>
    <td>QSPI_DAT2</td>
    <td>GPIO39</td>
  </tr>
  <tr>
    <td>QSPI_DAT3</td>
    <td>GPIO38</td>
  </tr>
  <tr>
    <td>QSPI_CS</td>
    <td>GPIO46</td>
  </tr>
  <tr>
    <td>LCD_EN</td>
    <td>EXP_P05</td>
    <td rowspan="2">GPIO</td>
  </tr>
  <tr>
    <td>QSPLRST</td>
    <td>EXP_P06</td>
  </tr>
  <tr>
    <td>QSPLTE</td>
    <td>NC</td>
    <td>NC</td>
  </tr>
  <tr>
    <td rowspan="5">E-INK</td>
    <td>E_INK_SCK</td>
    <td>GPIO42</td>
    <td rowspan="3">SPI</td>
  </tr>
  <tr>
    <td>E_INK_MOSI</td>
    <td>GPIO41</td>
  </tr>
  <tr>
    <td>E_INK_CS</td>
    <td>GPIO40</td>
  </tr>
  <tr>
    <td>E_INK_DC</td>
    <td>GPIO39</td>
    <td rowspan="2">GPIO</td>
  </tr>
  <tr>
    <td>E_INK_BUSY</td>
    <td>GPIO38</td>
  </tr>
  <tr>
    <td rowspan="2">IIC</td>
    <td>IIC0_SCL</td>
    <td>GPIO48</td>
    <td rowspan="2">IIC</td>
  </tr>
  <tr>
    <td>IIC0_SDA</td>
    <td>GPIO47</td>
  </tr>
  <tr>
    <td rowspan="7">LoRa</td>
    <td>LoRa_CS</td>
    <td>GPIO21</td>
    <td rowspan="4">SPI</td>
  </tr>
  <tr>
    <td>LoRa_SCK</td>
    <td>GPIO4</td>
  </tr>
  <tr>
    <td>LoRa_MISO</td>
    <td>GPIO5</td>
  </tr>
  <tr>
    <td>LoRa_MOSI</td>
    <td>GPIO6</td>
  </tr>
  <tr>
    <td>LoRa_RST</td>
    <td>GPIO7</td>
    <td rowspan="3">GPIO</td>
  </tr>
  <tr>
    <td>LoRa_BUSY</td>
    <td>GPIO8</td>
  </tr>
  <tr>
    <td>LoRa_DIO1</td>
    <td>GPIO9</td>
  </tr>
  <tr>
    <td rowspan="3">Grove</td>
    <td>GROVE_DAT_1</td>
    <td>GPIO14</td>
    <td rowspan="3">GPIO</td>
  </tr>
  <tr>
    <td>GROVE_DAT_2</td>
    <td>GPIO13</td>
  </tr>
  <tr>
    <td>GROVE_EN</td>
    <td>EXP_P07</td>
  </tr>
  <tr>
    <td rowspan="4">GNSS</td>
    <td>GNSS_RX</td>
    <td>GPIO18</td>
    <td rowspan="2">UART</td>
  </tr>
  <tr>
    <td>GNSS_TX</td>
    <td>GPIO17</td>
  </tr>
  <tr>
    <td>GNSS_EN</td>
    <td>EXP_P15</td>
    <td rowspan="2">GPIO</td>
  </tr>
  <tr>
    <td>GNSS_RST</td>
    <td>EXP_P11</td>
  </tr>
  <tr>
    <td rowspan="5">I2S</td>
    <td>CODEC_I2S0_MCLK</td>
    <td>GPIO10</td>
    <td rowspan="5">I2S</td>
  </tr>
  <tr>
    <td>CODEC_I2S0_LRCK</td>
    <td>GPIO12</td>
  </tr>
  <tr>
    <td>CODEC_I2S0_SCLK</td>
    <td>GPIO11</td>
  </tr>
  <tr>
    <td>CODEC_I2S0_DSDIN</td>
    <td>GPIO16</td>
  </tr>
  <tr>
    <td>CODEC_I2S0_SDOUT</td>
    <td>GPIO15</td>
  </tr>
  <tr>
    <td rowspan="4">SD</td>
    <td>SD_CMD</td>
    <td>GPIO03</td>
    <td rowspan="3">SD</td>
  </tr>
  <tr>
    <td>SD_CLK</td>
    <td>GPIO02</td>
  </tr>
  <tr>
    <td>SD_DAT0</td>
    <td>GPIO01</td>
  </tr>
  <tr>
    <td>SD_DET</td>
    <td>EXP_P02</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td rowspan="2">USB</td>
    <td>USB_N</td>
    <td>GPIO19</td>
    <td rowspan="2">USB</td>
  </tr>
  <tr>
    <td>USB_P</td>
    <td>GPIO20</td>
  </tr>
  <tr>
    <td rowspan="2">LED</td>
    <td>MESH LED</td>
    <td>GPIO43</td>
    <td rowspan="2">GPIO</td>
  </tr>
  <tr>
    <td>USER_LED</td>
    <td>EXP_P12</td>
  </tr>
  <tr>
    <td>按键</td>
    <td>WAKEUP_BUTTON</td>
    <td>EXP_P00</td>
    <td>GPIO</td>
  </tr>
</table>


## 硬件概览

**Wio Tracker L2 Pro**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2DeviceComponent9.7(1).png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2DeviceComponent29.7(2).png" alt="pir" width={800} height="auto" /></p>

**原理图**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SchematicDiagram9.7(1).png" alt="pir" width={800} height="auto" /></p>
