---
description: SenseCAP_T1000_tracker_Introduction
title: 介绍
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_T1000_tracker/Introduction
last_update:
  date: 9/11/2023
  author: Jessie
---


[**SenseCAP T1000**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 是一款紧凑型 LoRaWAN® 追踪器，利用 GNSS/Wi-Fi/蓝牙实现精确的室内外位置追踪。它具有自适应地理定位能力、本地数据存储功能，以及令人印象深刻的数月电池续航时间。此外，它还配备了温度、光照和运动传感器，使其非常适合各种基于位置的应用。

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
|[SenseCAP T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html)|<ul><li>Meshtastic</li></ul>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|

:::

## 功能特性

### 精确定位

GNSS、Wi-Fi、BLE，3种定位技术适用于室内外解决方案。

**GNSS定位（户外）**

追踪器将通过卫星系统（GPS/北斗/更多）在户外获取位置，然后通过LoRa无线将数据上传到服务器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/located_by_Gnss.png" alt="pir" width={800} height="auto" /></p>

**Wi-Fi定位（室内）**

追踪器扫描附近Wi-Fi/蓝牙的MAC地址和RSSI，并通过LoRaWAN上传。应用服务器需要根据MAC地址和信号强度（RSSI）计算真实地理位置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/by_wifi.png" alt="pir" width={800} height="auto" /></p>

### 离线数据存储

能够在本地存储1000+条记录。1小时上传间隔的存储容量超过40天。

当LoRaWAN信号覆盖较弱或没有网络覆盖时，数据将被保存并在下一个周期中输入。当设备返回到有LoRaWAN网络覆盖的区域时，它将自动发送离线数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### 跨区域适应性

T1000提供无缝的全球LoRaWAN®区域切换，根据检测到的位置坐标自动调整到适当的LoRaWAN®频率计划，确保在欧洲、泛美洲及其他地区的最佳性能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/earth.gif" alt="pir" width={800} height="auto" /></p>

### 数月电池续航

由LR1110供电，具有低功耗特性，在仅GPS模式下以1小时上传间隔，电池可持续3个月。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/battery_life.png" alt="pir" width={800} height="auto" /></p>

### 温度、光照、运动传感器

包含温度和光照传感器，可在移动过程中跟踪环境数据。例如，温度数据可用于推断食物/疫苗变质的可能性。光照数据显示是否被不必要的眼睛看到。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensor.png" alt="pir" width={800} height="auto" /></p>

### 用于位置溯源的去中心化网关网络

Helium的去中心化网络建立在信任机制上，每个网关都共享其位置，Helium验证这些位置的真实性。当将Helium与T1000一起使用时，通过交叉检查网关的位置，您可以获得T1000的大致位置。这提供了额外的验证层，与其他网络相比，增加了数据的有效性。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/helium_map.png" alt="pir" width={800} height="auto" /></p>

### 紧急报告

运动传感器检测异常，SOS按钮用于紧急报告，并自动切换到高频数据传输

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%94%BB%E6%9D%BF-4@1.5x.png" alt="pir" width={800} height="auto" /></p>

## 架构

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%B4%A0%E6%9D%9033.png" alt="pir" width={800} height="auto" /></p>

## 应用场景

- 国际资产追踪
- 搜索救援
- 设备监控

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/applications.png" alt="pir" width={800} height="auto" /></p>

## 规格参数

### 型号规格

我们为用户提供两种不同的解决方案，共有四个版本：A、B、C 和 D。T1000 A/B 支持常规 GNSS 定位，而 T1000 C/D 支持 LoRa Cloud 地理定位服务。

- **T1000-A/T1000-B**：GNSS 数据无特殊加密。

- **T1000-C/T1000-D**：GNSS 数据通过 Semtech LoRa Edge 加密，GNSS 数据需要通过 [LoRa Cloud](https://www.loracloud.com/) 解密。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model_spec2.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%94%BB%E6%9D%BF-11@1.5x.png" alt="pir" width={800} height="auto" /></p>

### 通用参数

|产品型号|T1000-A/T1000-B/T1000-C/T1000-D|
| :- | :- |
|回传方式|LoRaWAN® (v1.0.4 Class A)|
|蓝牙|Bluetooth v5.1，通过 App 设置|
|LoRaWAN 信道计划|IN865/EU868/US915/AU915/AS923/KR920/RU864|
|温度|<p>范围：-20 到 60℃；</p><p>精度：± 1℃（最小 ±0.5℃，最大 ±1℃）</p><p>分辨率：0.1℃</p>|
|光照|0 到 100%（0% 为黑暗，100% 为最亮）|
|三轴加速度计|三轴加速度计检测运动|
|LED 和蜂鸣器|1个 LED 和 1个蜂鸣器指示状态|
|按钮|1个按钮用于操作和触发事件（SOS）|
|天线|内置（GNSS/LoRa/Wi-Fi/BLE）|
|通信距离|2 到 5km（取决于网关天线、安装和环境）|
|IP 等级|IP65|
|尺寸|85 x 55 x 6.5 mm|
|设备重量|32g|
|工作温度|-20℃ 到 +60<a name="ole_link12"></a>℃|
|工作湿度|5% - 95%（无冷凝）|
|认证|CE /FCC /TELEC /RoHS /REACH|

**位置定位**

|GNSS 星座|<p>T1000-A/B: GPS/GLONASS/Galileo/北斗/QZSS</p><p>T1000-C/D: GPS/北斗</p>|
| :- | :- |
|GNSS 灵敏度|-145dBm 冷启动 / -160 dBm 跟踪|
|GNSS 定位精度|2.5m CEP 50%|
|Wi-Fi 定位|被动扫描，上传扫描到的 4 个 MAC 地址|
|蓝牙定位|上传扫描到的 3 个信号最强的 Beacon MAC 地址|
|数据缓存|当没有 LoRaWAN 网络时缓存 1000 条数据|

**电池**

|电池容量|可充电锂电池，700mAh|
| :- | :- |
|\*电池续航估算|单次充电 4 个月（每 1 小时上传一次，仅 GNSS 数据）|
|电池电量监控|定期上传电池电量|
|充电线（不含适配器）|USB 磁吸充电线，1 米|
|<a name="ole_link9"></a>电源输入电压|4.7 到 5.5V DC|

|充电温度限制|0 到 +45℃（超出温度范围时，充电将受限，LED 将快速闪烁）|
