---
description: SenseCAP Solar Node for Meshtastic & LoRa 入门指南
title:  SenseCAP Solar Node 入门指南
keywords:
- Meshtastic
- Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /cn/get_started_with_meshtastic_solar_node
sidebar_position: 2
last_update:
  date: 10/29/2025
  author: Michelle
---


## 入门指南

在正式部署之前，请先测试和配置节点。

### 刷写固件

:::caution note
请`不要使用 NRF-OTA`来更新固件，这可能会导致设备完全损坏。
:::

访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)。

选择目标设备为 `Seeed SenseCAP Solar Node` 并选择最新固件，然后点击 `Flash`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-solar.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/3-steps.png" alt="pir" width={800} height="auto" /></p>

点击 `Enter DFU Mode`，会出现一个名为 `XIAO-xxx` 的串口，点击并连接它，应该会显示一个名为 `XIAO-xxx` 的驱动器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

将 UF2 文件拖拽到 DFU 驱动器中。文件下载完成后，固件应该会被刷写，设备会重启。

### 安装电池和 GPS 模块（可选）

:::tip
当您需要安装或更换电池时，请使用 `Button-top` 18650（3.6V）电池。
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-battery.png" alt="pir" width={500} height="auto" /></p>
P1-Pro 版本内置电池和 GPS 模块，对于 P1 版本，如果需要，用户需要手动安装电池和 GPS 模块。
:::



- 步骤 1：拆下所有螺丝和外壳。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- 步骤 2：安装电池和 GPS 模块。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- 步骤 3：组装外壳。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
确保外壳正确安装，螺丝牢固拧紧，以保持设备的防水完整性。
:::

### 设备开机

设备首次使用时需要通过连接 USB 线缆来激活。

:::tip
如果按下按钮时设备没有响应，请先充电。请勿使用快充充电器。
:::

### 通过应用连接

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS 应用">

- 在蓝牙面板上选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- 输入代码（默认代码是 `123456`），然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android 应用">

- 点击 `+` 并选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- 输入代码（默认代码是 `123456`），然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### 配置参数

为了开始通过网格进行通信，您必须设置您的区域。此设置控制您的设备使用的频率范围，应根据您的地理位置进行设置。

<Tabs>
<TabItem value="ios" label="IOS 应用">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android 应用">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**区域列表**

|**区域代码**|**描述**|**频率范围 (MHz)**|**占空比 (%)**|**功率限制 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未设置|N/A|N/A|N/A|
|US|美国|902.0 - 928.0|100|30|
|EU_868|欧盟 868MHz|869.4 - 869.65|10|27|

参考 [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) 获取更全面的列表。

:::info
**EU_868** 必须遵守每小时 10% 的占空比限制，基于滚动 1 小时基础每分钟计算。如果达到限制，您的设备将停止传输，直到再次被允许。
:::

现在您已经在设备上设置了 LoRa 区域，您可以继续配置任何 [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) 以满足您的需求。

## 安装

:::danger note
由于设备将在户外长期使用，请避免将面板水平安装。建议倾斜或对角安装以防止积水。此外，确保所有螺丝牢固拧紧，外壳正确安装。为了增强防水保护，您还可以考虑采用额外的密封措施。
:::

- **零件清单**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>

### 分步安装指导

- 步骤 1：使用垫圈和螺丝将零件 1 连接到设备底部。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- 步骤 2：用螺丝连接万向节（零件 2）和支架（零件 3）。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- 步骤 3：连接射频线缆（零件 4）和天线（零件 5）。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- 步骤 4：在适当位置安装环形圈。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/hoop-ring.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- 步骤 5：连接万向节支架。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connector.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- 步骤 6：松开螺丝，将万向节调整到适当位置，然后拧紧螺丝。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- 步骤 7：将天线连接到设备。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 完整安装指导

- 您可以通过视频完成整个安装和初始化过程。

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/smQe7G0Bbsk?si=kcB8BdoxiwpZqB4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 为太阳能节点添加传感器（可选）

- 您可以通过此视频安装传感器。

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/AUFAdRgOCK8?si=9P-X1B7g8unZvVqb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

- 以下传感器已验证与设备上的 Grove 接口兼容。

<table>
  <tr>
    <th colspan="2">传感器类型</th>
    <th colspan="1">传感器型号</th>
  </tr>
  <tr>
    <td rowspan="4">环境传感器</td>
    <td>压力</td>
    <td>BMP085</td>
  </tr>
  <tr>
    <td>温度</td>
    <td>[MCP9808](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html)、PCT2075</td>
  </tr>
  <tr>
    <td>温度和湿度</td>
    <td>[SHT31](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)/SHTC3/[SHT4X](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html)、AHT10</td>
  </tr>
  <tr>
    <td>温度、湿度和压力</td>
    <td>[BME280](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)</td>
  </tr>
  <tr>
    <td rowspan="2">其他</td>
    <td>心率和血氧</td>
    <td>[MAX30102](https://www.seeedstudio.com/MAXREFDES117-HEART-RATE-AND-PULSE-OXIMETRY-MONITOR-p-2762.html)</td>
  </tr>
  <tr>
    <td>I2C 键盘</td>
    <td>CardKB</td>
  </tr>
</table>

### 升级天线（可选）

- 您可以通过观看此视频将天线更换为玻璃纤维天线。

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/uCUq7VrNkzc?si=9uiAAZY45B-Sg-wD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 常见问题

### 功耗

功耗主要取决于数据传输频率和 GPS 更新速率等因素。
以下数据仅供参考；实际功耗可能因实际使用条件而有所不同。

- **关机睡眠模式功耗**

|描述|功耗|
|---|---|
|GPS_LED 工作电流|1.02 mA|
|已供电但未激活|56.195 μA|
|已供电且已激活|611 μA|

**示例：**

|电池容量|电池寿命|
|---|---|
|3350|136.8|
|12000|490.2|

- **活动模式功耗**

|模式|电流|
|---|---|
|静态电流|10.65 mA|
|EU868 传输电流|157.74 mA|
|US915 传输电流|205.22 mA|
|GPS 工作电流|50 mA|
|GPS_LED 工作电流|1.02 mA|

### 信号质量

- **SNR** 反映通信链路的质量。正常设备通常在 -7 dB 以上工作。SNR 低于 -10 dB 的设备表示性能较差。

- **RSSI** 由设备及其周围环境共同决定。正常设备通常在 -110 dBm 以上工作。RSSI 低于 -115 dBm 的设备被认为性能较差。

      为了获得最佳信号效果，请在开阔、无遮挡且干扰最小的区域使用设备。

## 资源
- [太阳能节点电池寿命计算表](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Solar%20Node%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
