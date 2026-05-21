---
description: 面向 Meshtastic 的 SenseCAP Card Tracker T1000-E 介绍
title: T1000-E Tracker 介绍
keywords:
  - Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /t1000_e_intro
sidebar_position: 1
last_update:
  date: 7/1/2024
  author: Jessie
createdAt: '2024-09-05'
updatedAt: '2025-09-29'
url: https://wiki.seeedstudio.com/cn/t1000_e_intro/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/intro-e.png" alt="pir" width={800} height="auto" /></p>

这是一款为 [Meshtastic®](https://meshtastic.org/) 设计的高性能追踪器，小巧如信用卡，可轻松放入口袋或固定在资产上。其内置 Semtech 的 LR1110、Nordic 的 nRF52840 和 Mediatek 的 AG3335 GPS 模块，为 [Meshtastic®](https://meshtastic.org/) 用户提供高精度、低功耗的定位与通信解决方案。

:::note
可定制选项：Logo 品牌定制、包装和固件烧录。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>立即定制 ➜</font></span></strong></a>
</div>

<br></br>

:::tip 版本对比
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/versions-duibi.png" alt="pir" width={600} height="auto" /></p>
:::

### 特性

- **多协议支持**：搭载 nRF52840 和 LR1110，支持 Bluetooth 5.0、Thread、Zigbee 和 LoRa，确保与多种设备和网络兼容。
- **强大的定位能力**：集成 Mediatek 的 AG3335 GPS 芯片，提供高精度定位服务。
- **可扩展接口**：设计有 4 个 pogo pin，支持用于 DFU（设备固件升级）、串口日志和 API 接口的 USB 接口，简化设备管理和调试。
- **开源支持**：兼容 Meshtastic 开源自组网协议，适用于远距离、低功耗通信需求。

### 规格

**通用参数**

|**网络协议**|LoRa, Bluetooth v5.1|
| :- | :- |
|**温度**|<p>范围：-20 至 60℃；</p><p>精度：± 1℃（最小 ±0.5℃，最大 ±1℃）</p><p>分辨率：0.1℃</p>|
|**光照**|0 至 100%（0% 为最暗，100% 为最亮）|
|**LED 和蜂鸣器**|1\*LED 和 1\* 蜂鸣器用于状态指示|
|**按键**|1\* 按键用于操作|
|**天线**|内置（GNSS/LoRa/Wi-Fi/BLE）|
|**通信距离**|2 至 5km（取决于天线、安装方式和环境）|
|**防护等级**|IP65|
|**尺寸**|85 \* 55 \* 6.5 mm|
|**设备重量**|32g|
|**工作温度**|-20℃ 至 +60℃|
|**工作湿度**|5% - 95%（无冷凝）|
|**认证**|CE /FCC|

**电池**

|**电池容量**|可充电锂电池，700mAh|
| :- | :- |
|**电池寿命监测**|周期性上行电池电量|
|<p>**充电线缆**</p><p>**（不含适配器）**</p>|USB 磁吸充电线，1 米|
|**电源输入电压**|4.7 至 5.5V DC|
|**充电温度范围**|0 至 +45℃|

### 硬件概览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/4-pogo.png" alt="pir" width={800} height="auto" /></p>

### 引脚列表

||||
|- |- |- |
|传感器电源|P0.4|GPIO|
|温度|P0.31|NTC（模拟）|
|光照|P0.29|LUX（模拟）|
|三轴加速度计<br/>(当前在 Meshtastic 固件中未使用)|SDA: P0.26<br/>SCL: P0.27|通过 IIC|
|加速度计电源|P1.7|GPIO|
|LED|P0.24  |GPIO|
|蜂鸣器|P0.25|GPIO|
|蜂鸣器使能|P1.05|GPIO|
|按键|P0.6|GPIO|
|传感器电源|P1.6|GPIO|
|LR1110|P1.08: SPI MISO<br/>P1.09: SPI MOSI<br/>P0.11: SPI Clock<br/>P0.12: SPI NSS<br/>P1.10: LoRa Reset<br/>P1.01: LoRa DIO1<br/>P0.07: LoRa DIO2<br/>LR11X0_DIO3_TCXO_VOLT<br/>AGE 1.6V|SPI|
|GPS|RX: P0.14<br/>TX: P0.13|Serial1 <br/>BAUDRATE:115200|

### 按键

|按键操作|说明|蜂鸣器|
|- |- |- |
|按一次|开机|上升音调|
|按两次|更新节点/位置信息|-|
|按三次|打开/关闭 GPS|-|
|长按 5 秒|关机|下降音调|

### LED

|设备动作|说明|
|- |- |
|开机|先常亮后快速闪烁|
|DFU 模式|常亮|
|工作中|随机闪烁|
