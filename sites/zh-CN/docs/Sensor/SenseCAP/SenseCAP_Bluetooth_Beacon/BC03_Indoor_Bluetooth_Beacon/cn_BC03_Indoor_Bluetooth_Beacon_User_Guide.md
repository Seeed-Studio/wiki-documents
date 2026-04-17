---
title: 用户指南
description: SenseCAP_Bluetooth_Beacon_for_Tracker_User_Guide
keywords:
  - Beacon
  - SenseCAP
  - BLE
  - 定位
image: https://files.seeedstudio.com/wiki/BC03/1-BC03-Bluetooth-Beacon.webp
slug: /bluetooth_beacon03_for_tracker_user_guide
sku: 100085893
last_update:
  date: 3/24/2026
  author: Janet
createdAt: '2026-03-24'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/cn/bluetooth_beacon03_for_tracker_user_guide/
---

# BC03 室内蓝牙 Beacon 用户指南

![BC03](https://files.seeedstudio.com/wiki/BC03/6-BC03-Bluetooth-Beacon.jpg)

## 电源与指示灯

* **开机**：只需拉出背面的电池拉片。BC03 会自动开机，设备的 LED 指示灯会点亮。
* **关机**：设备设计为持续运行，没有物理电源按键。若需关机，必须手动取出电池。

## 部署指南

* 推荐安装高度：距地面 **2.5–3 m**
* 推荐间距：**5–10 m**，视精度要求而定
* 部署方式：
  * 开阔区域采用三角网格部署
  * 走廊采用单排或双排部署

![Deployment Example 1](https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble1.png)

补充说明：

* 在楼层高度超过 **4 m** 的环境中避免安装在天花板上
* 避免将 Beacon 安装在**金属表面、玻璃遮挡物以及墙角附近**
* 在潮湿环境中，请考虑环境防护要求

![Deployment Example 2](https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble2.png)

*红色示例为错误安装方式，蓝色示例为正确安装方式。*

:::note
部署指南仅供参考。实际部署应根据定位算法和现场测试结果进行优化。
:::

## 安装说明

### 3M 胶粘安装

#### 安装条件

* 适用表面：陶瓷、玻璃、环氧树脂、亚克力、ABS、PC、硬质 PVC
* 不推荐用于粗糙、潮湿或老化表面（如水泥、石膏板）
* 推荐安装温度：**20–40°C**

#### 安装步骤

1. 清洁并擦干安装表面
2. 拉出绝缘膜，即可进行粘贴安装
3. 用力按压 1–2 秒，多次重复以确保粘贴牢固

:::note
对于低温或恶劣环境，建议使用双面胶配合强力免钉胶。
:::

## 配置

BC03 支持通过 **SenseCraft APP** 和生产工具进行参数配置和批量下发。

- **步骤 1**：下载 `SenseCraft` APP

    - 对于 iOS，请在 App Store 中搜索 “SenseCraft” 并下载。
    - 对于 Android，请在 Google Store 中搜索 “SenseCraft” 并下载。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/App_Download.png" alt="pir" width={600} height="auto" /></p>


- **步骤 2**：连接 Beacon 并进行配置

在用户页面点击 `Device Bluetooth Configuration`，然后选择 `Bluetooth Beacon` 并选择 `BC03`。随后进入设备列表页面。

![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_configuration.png)

根据设备的 MAC 地址，选择需要配置的 Beacon。

![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_configuration2.png)

你可以修改设备的 UUID、MAJOR、MINOR、发射功率、广播间隔以及密码。

![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_configuration3.png)

**批量配置**

点击 Save & Batch Configuration，输入设备数量和密码，然后开始批量配置。进度条完成后，你可以下载批量配置的 Beacon 文件并查看配置状态。

![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_configuration4.png)


- **步骤 3**：查看 RSSI 曲线

选择 Beacon，点击 RSSI Curve。你可以查看动态 RSSI 曲线。

![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_view.png)

:::tip
对于数量较少的设备（≤ 7-8 台），建议逐台手动配置。对于大规模部署，请使用批量配置功能，在处理多台设备时其稳定性更高。
:::

## 蓝牙室内定位系统

GPS 在室外表现良好，但在办公室、仓库、医院或商场等室内环境中，卫星信号往往会被阻挡。为了实现精确的室内定位，我们将 BC03 蓝牙 Beacon 与 SenseCAP 追踪器结合使用。

**工作原理**

**1. 部署 BC03 Beacon**
将 BC03 Beacon 安装在固定位置。请严格遵循   
[部署指南](#部署指南)，否则部署效果可能不理想。 
每个 Beacon 会持续广播蓝牙信号。

**2. 追踪器扫描 Beacon 信号**
SenseCAP LoRaWAN 追踪器会扫描附近的 Beacon 信号并测量 RSSI。

**3. 距离估算**
系统根据 RSSI 值估算追踪器与各个 Beacon 之间的相对距离。

**4. 位置计算**
系统利用定位算法计算设备的位置。

结合定位算法，可实现**米级室内定位精度（约 2–3 米）**。

典型应用场景包括：

* **资产追踪：** 在仓库或工厂中定位高价值设备。
* **人员定位：** 在医院、矿井或施工现场保障工作人员安全。
* **路径分析：** 分析零售或办公空间中的人流轨迹和热力分布。
* **室内导航：** 为大型场馆中的访客提供实时定位导航。

该解决方案可以集成到云平台、移动应用和小程序中。

![BC03](https://files.seeedstudio.com/wiki/BC03/beacon3.png)

我们提供了一个开源的蓝牙室内定位系统，可与 SenseCAP BLE Beacon 和 SenseCAP LoRaWAN 追踪器无缝协同工作。

该解决方案完全开源且可定制，用户可以基于我们的 GitHub 仓库构建、修改并集成自己的后端服务。

![Indoor Positioning System](https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-preview.png)


:::tip
更多详情请查看 [Indoor Positioning System](https://wiki.seeedstudio.com/cn/solutions/indoor-positioning-bluetooth-lorawan-tracker/)。
:::

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>