---
description: SenseCAP_T1000_tracker_Introduction
title: 介绍
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_T1000_tracker/Introduction
last_update:
  date: 10/11/2025
  author: Twelve
---


[**SenseCAP T1000**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 是一款紧凑型 LoRaWAN® 追踪器，利用 GNSS/Wi-Fi/蓝牙实现精确的室内外位置追踪。它具有自适应地理能力、本地数据存储功能，以及令人印象深刻的数月电池续航时间。此外，它还配备了温度、光照和运动传感器，使其成为各种基于位置的应用的理想选择。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_1.png" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 </font></span></strong>
    </a>
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

### 精确定位

GNSS、Wi-Fi、BLE，三种定位技术提供室内外解决方案。

**GNSS 定位（户外）**

追踪器将通过卫星系统（GPS/北斗/更多）在户外获取位置，然后通过 LoRa 无线将数据上传到服务器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/located_by_Gnss.png" alt="pir" width={800} height="auto" /></p>

**Wi-Fi / 蓝牙定位（室内）**

追踪器扫描附近 Wi-Fi/蓝牙的 MAC 地址和 RSSI，并通过 LoRaWAN 上传。应用服务器需要根据 MAC 地址和信号强度（RSSI）计算真实的地理位置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/by_wifi.png" alt="pir" width={800} height="auto" /></p>

### 离线数据存储

能够在本地存储 1000+ 条记录。1 小时上传间隔的存储容量超过 40 天。

当 LoRaWAN 信号覆盖较弱或没有网络覆盖时，数据将被保存并在下一个周期中输入。当设备返回到有 LoRaWAN 网络覆盖的区域时，它将自动发送离线数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### 跨区域适应性

T1000 提供无缝的全球 LoRaWAN® 区域切换，根据检测到的位置坐标自动调整到适当的 LoRaWAN® 频率计划，确保在欧洲、泛美洲及其他地区的最佳性能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/earth.gif" alt="pir" width={800} height="auto" /></p>

### 数月电池续航

由 LR1110 供电并具有低功耗特性，大多数型号在仅 GNSS 模式下以 1 小时上传间隔运行时，在禁用运动传感器的情况下，电池续航时间可超过 3 个月。
（电池续航时间可能因频段、定位模式和数据上传间隔等配置参数而有所不同。详细参考请查看[电池续航计算](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/Trcaker_Battery_%20Life_Calculation_T1000_AB.xlsx)）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/battery_life_new_ABE.png" alt="pir" width={800} height="auto" /></p>

### 温度、光照、运动传感器

包含温度和光照传感器，可在移动过程中跟踪环境数据。例如，温度数据可用于推断食物/疫苗是否变质的可能性。光照数据显示是否被不必要的眼睛看到。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensor.png" alt="pir" width={800} height="auto" /></p>

### 用于位置溯源的去中心化网关网络

Helium 的去中心化网络建立在信任机制上，每个网关都共享其位置，Helium 验证这些位置的真实性。当将 Helium 与 T1000 一起使用时，通过交叉检查网关的位置，您可以获得 T1000 的大致位置。这提供了额外的验证层，与其他网络相比，增加了数据的有效性。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/helium_map.png" alt="pir" width={800} height="auto" /></p>

### 紧急报告

运动传感器检测异常，SOS 按钮用于紧急报告并自动切换到高频数据传输

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%94%BB%E6%9D%BF-4@1.5x.png" alt="pir" width={800} height="auto" /></p>

## 架构

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/framework_new.png" alt="pir" width={800} height="auto" /></p>

## 应用

- 国际资产追踪
- 搜索救援
- 设备监控

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/applications.png" alt="pir" width={800} height="auto" /></p>

## 规格

### 型号规格

我们为用户提供两种不同的解决方案，有三个版本：A、B 和 E。

- **T1000-A/T1000-B**：这两个版本专为 **LoRaWAN 网络**设计，支持室内（Wi-Fi + 蓝牙）+ 户外定位（GNSS）。T1000-A 配备了基本功能，包括温度传感器、光照传感器、运动传感器，而 T1000-B 不带这些传感器。

- **T1000-E**：它具有开源软件，有两个独立版本：一个用于 **LoRaWAN**，另一个用于 **Meshtastic**。两者都提供完整的源代码，使开发者能够自由定制和扩展其功能。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image2_20.png" alt="pir" width={800} height="auto" /></p>

### 通用参数

|产品型号|T1000-A/T1000-B/T1000-E|
| :- | :- |
|回传|LoRaWAN® (v1.0.4 Class A)|
|蓝牙|蓝牙 v5.1，通过 App 设置|
|LoRaWAN 信道计划|IN865/EU868/US915/AU915/AS923/KR920/RU864|
|温度|<p>范围：-20 到 60℃；</p><p>精度：± 1℃（最小 ±0.5℃，最大 ±1℃）</p><p>分辨率：0.1℃</p>|
|光照|0 到 100%（0% 为黑暗，100% 为最亮）|
|3 轴加速度计|3 轴加速度计检测运动|
|LED 和蜂鸣器|1 个 LED 和 1 个蜂鸣器指示状态|
|按钮|1 个按钮用于操作和触发事件（SOS）|
|天线|内置（GNSS/LoRa/Wi-Fi/BLE）|
|通信距离|2 到 5 公里（取决于网关天线、安装和环境）|
|IP 等级|IP65|
|尺寸|85 x 55 x 6.5 毫米|
|设备重量|32 克|
|工作温度|-20℃ 到 +60<a name="ole_link12"></a>℃|
|工作湿度|5% - 95%（无冷凝）|
|认证|CE /FCC /TELEC /RoHS /REACH|

**位置**

|GNSS 星座|GPS/GLONASS/Galileo/BeiDou/QZSS|
| :- | :- |
|GNSS 灵敏度|-145dBm 冷启动 / -160 dBm 跟踪|
|GNSS 位置精度|2\.5m CEP 50%|
|Wi-Fi 定位|被动扫描，上传扫描到的 4 个 MAC 地址|
|蓝牙定位|上传扫描到的 3 个最佳信号 Beacon 的 MAC 地址|
|数据缓存|在没有 LoRaWAN 网络时缓存 1000 条数据|

**电池**

|电池容量|可充电锂电池，700mAh|
| :- | :- |
|\*电池续航估计|单次充电 4 个月（每小时上传一次，仅 GNSS 数据）|
|电池续航监控|定期上传电池电量|
|充电线（不含适配器）|USB 磁吸充电线，1 米|
|<a name="ole_link9"></a>电源输入电压|4\.7 到 5.5V DC|
|充电温度限制|0 到 +45℃（超出温度范围，充电将受限，LED 将快速闪烁）|
