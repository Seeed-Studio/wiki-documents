---
title: 介绍
description: SenseCAP_Bluetooth_Beacon_for_Tracker_Introduction
keywords:
  - Beacon
  - SenseCAP
  - BLE
  - 定位
image: https://files.seeedstudio.com/wiki/BC03/1-BC03-Bluetooth-Beacon.webp
slug: /bluetooth_beacon03_for_tracker_introduction
sku: 100085893
last_update:
  date: 3/24/2026
  author: Janet
createdAt: '2026-03-24'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/cn/bluetooth_beacon03_for_tracker_introduction/
---

# BC03 室内 Bluetooth Beacon 介绍

SenseCAP BC03 室内 Bluetooth Beacon 是一款小型无线设备，会以固定时间间隔发射 Bluetooth 信号。这些信号可以被支持 Bluetooth 的设备检测到，例如 [**SenseCAP T1000 Tracker**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)、[**SenseCAP T2000 
Tracker**](https://www.seeedstudio.com/SenseCAP-Asset-Tracker-T2000-A-p-6580.html)，从而让这些设备判断与 Beacon 的距离，构建用于室内定位、资产追踪等应用的基于位置的解决方案，实现接近检测和米级室内定位。


![BC03](https://files.seeedstudio.com/wiki/BC03/1-BC03-Bluetooth-Beacon.jpg)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Indoor-Bluetooth-Beacon-BC03-p-6732.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
    </a>
</div>
<br />

:::tip 版本对比
![Version Comparison](https://files.seeedstudio.com/wiki/BC03/beacon_version.png)
:::

## Bluetooth 室内定位系统

GPS 在室外表现良好，但在室内性能受限。通过在室内环境中部署 BC03 Bluetooth Beacon，SenseCAP Tracker 可以扫描 Beacon 信号，并根据 RSSI 值估算距离。结合定位算法，可实现**米级室内定位精度（约 2–3 米）**。

典型应用场景包括：

* 资产追踪
* 人员定位
* 路线分析
* 室内导航

该解决方案可以集成到云平台、移动应用和小程序中。

![Indoor Positioning](https://files.seeedstudio.com/wiki/BC03/beacon3.png)

我们提供了一个开源的 Bluetooth 室内定位系统，可与 SenseCAP BLE Beacon 和 SenseCAP LoRaWAN Tracker 无缝协同工作。
该解决方案完全开源且可定制，用户可以基于我们的 GitHub 仓库构建、修改并集成自己的后端服务。

![Indoor Positioning System](https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-preview.png)


:::tip
更多详情请查看 [Indoor Positioning System](https://wiki.seeedstudio.com/cn/solutions/indoor-positioning-bluetooth-lorawan-tracker/)。
:::

## 特性
---

* **Bluetooth® LE 5.0**
* **超低功耗**：可更换锂电池，电池寿命超过 **5 年**（0 dBm / 500 ms，默认配置）
* **远距离传输**：在空旷区域最远可达 **130 m**
* **安装简单**：拉出绝缘片即可粘贴安装，降低施工成本。
* **抗紫外线**：适用于紫外线消毒灯等场景，且外观不受影响。
* **配置灵活**：可配置广播间隔和发射功率
* **高度兼容**：兼容 iOS 7.0+ 和 Android 4.3+
* **可选加速度计支持**：预留 PCBA 焊盘，可用于运动或振动检测

---
:::info
BC03 具备高增益全向 BLE 天线、低功耗设计以及用户交互能力：

* **增强的 Beacon 广播能力**
优化了 BLE 广播稳定性和 RSSI 一致性，提高了在复杂环境中的室内定位精度和鲁棒性。
* **天线设计**
具有优异的辐射效率和方向一致性，采用板载天线，无需精确调整安装方向即可实现更远的通信距离和更稳定的通信。
* **更长的电池寿命**
进一步优化了低功耗设计。在相同配置（0 dBm / 500 ms）下，BC03 可实现大规模、长期部署。
* **新增 LED 状态指示**
蓝色 LED 在上电和运行过程中提供直观的设备状态反馈，用于显示设备上电和升级状态。
:::

## 规格参数

### 通用规格

| 项目                | 描述                          |
| ------------------- | ----------------------------- |
| 材质                | ABS（抗紫外线）               |
| 颜色                | 白色                          |
| 防护等级            | 无                            |
| 尺寸(L\*W\*H)        | Φ50*20.5mm                    |
| 重量                | ~45 g（含电池）               |
| 电池                | 锂离子电池，2400 mAh          |
| 芯片                | nRF52 系列                    |
| Bluetooth 版本      | BLE 5.0（向下兼容 BLE 4.1）   |
| Bluetooth 协议      | iBeacon                       |
| 传感器              | 加速度计（可选）              |
| LED                 | 1 × 蓝色 LED                  |
| App                 | SenseCraft APP                |
| 工作温度            | -20 ~ 60 °C                   |
| 电池寿命            | > 5 年（默认配置 0 dBm / 500 ms） |

### 默认广播参数

| 参数                 | 默认值                         |
| -------------------- | ------------------------------ |
| UUID                 | 5EEEDBCA-AC02-43B0-B0CF-C6EB07647825
 |
| Major                | 自动从设备 MAC 地址分配（低 2 字节） |
| Minor                | 自动从设备 MAC 地址分配（高 2 字节） |
| Measured Power       | -59 dBm                        |
| Tx Power             | -40 ~ +4dBm（默认 0dBm）       |
| Advertising Interval | 20ms ~ 30s（默认 500ms）       |
| Password             | 12345678                       |
| Device Name          | 03                             |

### 兼容性信息

| 系统         | 设备                                      |
| ------------ | ----------------------------------------- |
| BLE          | BLE 4.1+                                  |
| iOS 7.0+     | iPhone 4S、iPhone 5/5C/5S、iPhone 6/6Plus/6S/6S Plus、iPhone 7/7Plus、iPad mini/mini2/4/Air/Pro 等 |
| Android 4.3+ | Samsung、XIAOMI、HUAWEI、ONEPLUS、vivo、OPPO 等 |

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>