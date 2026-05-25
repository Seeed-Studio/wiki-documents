---
description: SenseCAP_T1000_tracker_Introduction
title: 介绍
keywords:
  - SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker/Introduction
sku: 114993073, 114993169, 114993168, 113991194, 114993207, 114993208, 114993106, E2025081201, E2025081501
last_update:
  date: 10/11/2025
  author: Twelve
createdAt: '2023-08-14'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/SenseCAP_T1000_tracker/Introduction/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_1.png" alt="pir" width={800} height="auto" /></p>

[**SenseCAP T1000**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 是一款紧凑型 LoRaWAN® 追踪器，利用 GNSS/Wi-Fi/Bluetooth 实现精确的室内和室外位置追踪。它具备自适应地理能力、本地数据存储以及令人印象深刻的数月级电池续航。此外，它还配备温度、光照和运动传感器，非常适合各种基于位置的应用场景。

:::note
可定制选项：Logo 品牌定制、包装和固件烧录。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>立即定制 ➜</font></span></strong></a>
</div>

---

:::tip 版本对比

||兼容网络|温度|光照|加速度计|
|--|--|--|--|--|
|[SenseCAP T1000-A](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)|<ul><li>LoRaWAN</li><li>Helium</li></ul>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|[SenseCAP T1000-B](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-B-p-5698.html)|<ul><li>LoRaWAN</li><li>Helium</li></ul>|||
|[SenseCAP T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html)|<ul><li>LoRaWAN</li><li>Meshtastic</li></ul>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
:::

## 特性

### 精准定位

GNSS、WiFi、BLE 三种定位技术，适用于室内和室外方案。

**GNSS 定位（室外）**

追踪器通过卫星系统（GPS/北斗/更多）获取室外位置，然后通过 LoRa 无线将数据上传到服务器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/located_by_Gnss.png" alt="pir" width={800} height="auto" /></p>

**Wi-Fi / Bluetooth 定位（室内）**

追踪器扫描附近 Wi-Fi/Bluetooth 的 MAC 地址和 RSSI，并通过 LoRaWAN 上传。应用服务器需要根据 MAC 地址和信号强度（RSSI）计算出真实的地理位置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/by_wifi.png" alt="pir" width={800} height="auto" /></p>

### 离线数据存储

支持本地存储 1000+ 条记录。在 1 小时上传间隔的情况下，存储容量可超过 40 天。

当 LoRaWAN 信号覆盖较弱或无网络覆盖时，数据会被保存并在下一个周期写入。当设备返回到有 LoRaWAN 网络覆盖的区域时，会自动发送离线数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### 跨区域自适应能力

T1000 提供无缝的全球 LoRaWAN® 区域切换功能，可根据检测到的位置坐标自动调整到合适的 LoRaWAN® 频段规划，确保在欧洲、泛美地区及其他区域都能获得最佳性能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/earth.gif" alt="pir" width={800} height="auto" /></p>

### 数月级电池续航

得益于 LR1110 芯片以及低功耗设计，大多数型号在仅 GNSS 模式、关闭运动传感器、1 小时上传间隔的配置下，电池续航可超过 3 个月。
(电池寿命会随频段、定位模式、数据上传间隔等配置参数的不同而变化。详细参考请查看 [Battery Life Calculation](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/Trcaker_Battery_%20Life_Calculation_T1000_AB.xlsx))

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/battery_life_new_ABE.png" alt="pir" width={800} height="auto" /></p>

### 温度、光照、运动传感器

内置温度和光照传感器，可随时记录环境数据。例如，温度数据可用于推断食品/疫苗是否可能变质；光照数据则可显示是否被非授权人员查看。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensor.png" alt="pir" width={800} height="auto" /></p>

### 去中心化网关网络实现位置可信

Helium 的去中心化网络基于一种信任机制，每个网关都会共享其位置，Helium 会验证这些位置的真实性。当 T1000 搭配 Helium 使用时，通过交叉核对网关的位置，可以获得 T1000 的大致位置。这提供了额外的验证层级，相比其他网络提升了数据的可信度。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/helium_map.png" alt="pir" width={800} height="auto" /></p>

### 紧急上报

通过运动传感器检测异常，SOS 按钮用于紧急上报，并自动切换为高频数据传输。

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%94%BB%E6%9D%BF-4@1.5x.png" alt="pir" width={800} height="auto" /></p>

## 架构

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/framework_new.png" alt="pir" width={800} height="auto" /></p>

## 应用场景

- 国际资产追踪
- 搜救
- 设备监控

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/applications.png" alt="pir" width={800} height="auto" /></p>

## 规格参数

### 型号规格

我们为用户提供两种不同的解决方案，并包含 A、B 和 E 三个版本。

- **T1000-A/T1000-B**：这两个版本面向 **LoRaWAN 网络**，支持室内（Wi-Fi + Bluetooth）+ 室外定位（GNSS）。T1000-A 配备温度传感器、光照传感器、运动传感器等关键功能，而 T1000-B 不带这些传感器。

- **T1000-E**：其软件为开源，提供两个独立版本：一个用于 **LoRaWAN**，另一个用于 **Meshtastic**。两者均提供完整源代码，方便开发者自由定制和扩展功能。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image2_20.png" alt="pir" width={800} height="auto" /></p>

### 通用参数

|产品型号|T1000-A/T1000-B/T1000-E|
| :- | :- |
|回传网络|LoRaWAN® (v1.0.4 Class A)|
|Bluetooth|Bluetooth v5.1，通过 App 设置|
|LoRaWAN 频段规划|IN865/EU868/US915/AU915/AS923/KR920/RU864|
|温度|<p>范围：-20 至 60℃；</p><p>精度：± 1℃（最小 ±0.5℃，最大 ±1℃）</p><p>分辨率：0.1℃</p>|
|光照|0 至 100%（0% 为全暗，100% 为最亮）|
|三轴加速度计|三轴加速度计用于检测运动|
|LED 和蜂鸣器|1 个 LED 和 1 个蜂鸣器用于状态指示|
|按键|1 个按键用于操作和触发事件（SOS）|
|天线|内置（GNSS/LoRa/Wi-Fi/BLE）|
|通信距离|2 至 5km（取决于网关天线、安装方式和环境）|
|防护等级|IP65|
|尺寸|85 x 55 x 6.5 mm|
|设备重量|32g|
|工作温度|-20℃ 至 +60<a name="ole_link12"></a>℃|
|工作湿度|5% - 95%（无冷凝）|
|认证|CE /FCC /TELEC /RoHS /REACH|

**定位**

|GNSS 星座|GPS/GLONASS/Galileo/BeiDou/QZSS|
| :- | :- |
|GNSS 灵敏度|-145dBm 冷启动 / -160 dBm 跟踪|
|GNSS 定位精度|2\.5m CEP 50%|
|Wi-Fi 定位|被动扫描，上报扫描到的 4 个 MAC 地址|
|Bluetooth 定位|上报扫描到的信号最强的 3 个 Beacon MAC 地址|
|数据缓存|在无 LoRaWAN 网络时缓存 1000 条数据|

**电池**

|电池容量|可充电锂电池，700mAh|
| :- | :- |
|\*电池寿命预估|单次充电可使用 4 个月（每 1 小时上行一次，仅 GNSS 数据）|
|电池寿命监测|周期性上报电池电量|
|充电线（不含适配器）|USB 磁吸充电线，1 米|
|<a name="ole_link9"></a>电源输入电压|4\.7 至 5.5V DC|
|充电温度限制|0 至 +45℃（超出该温度范围时，将限制充电，且 LED 会快速闪烁）|
