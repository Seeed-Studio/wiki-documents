---
description: SenseCAP_Tracker_Bluetooth_Beacon
title: BC02 室外蓝牙 Beacon
keywords:
  - BLE
  - 定位
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/bc02-outdoor-bluetooth-beacon.webp
slug: /bluetooth_beacon02_for_sensecap_tracker
sku: 113991456
last_update:
  date: 04/02/2026
  author: Janet
createdAt: '2026-03-24'
updatedAt: '2026-04-02'
url: https://wiki.seeedstudio.com/cn/bluetooth_beacon02_for_sensecap_tracker/
---
BLE（低功耗蓝牙）定位 Beacon 是一种小型无线设备，会以固定时间间隔发射蓝牙信号。这些信号可以被支持蓝牙的设备检测到，例如 [**SenseCAP T1000 Tracker**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)、[**SenseCAP T2000 Tracker**](https://www.seeedstudio.com/SenseCAP-Asset-Tracker-T2000-A-p-6580.html)，从而让这些设备判断自己与 Beacon 的距离，构建用于室内定位、资产追踪等应用的基于位置的解决方案。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/5/-/5-113991456-outdoor-bluetooth-beacon.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Outdoor-Bluetooth-Beacon-p-6468.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
    </a>
</div>
<br />

:::tip 版本对比
![版本对比](https://files.seeedstudio.com/wiki/BC03/beacon_version.png)
:::

### 特性

- **Bluetooth® LE 5.0**
- **电池寿命长**：可更换 Li/SOCl2 电池，在默认配置下可使用超过 7 年。
- **远距离传输**：在空旷区域最远可达 75 米。
- **坚固耐用**：IP68 防水、防尘，IK08 抗冲击，可适应恶劣环境

## 部署指南

- 蓝牙 Beacon 通常安装在距地面 2.5–3m 的高度，水平方向间距为 5–10m。根据环境不同，这些 Beacon 可以以列阵形式部署，或者以三角形均匀分布。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble1.png" alt="pir" width={600} height="auto" /></p>

- 不同场景的部署策略各不相同。例如，室内环境可以采用集中（密集）布设或三角网格（稀疏）布设。在室内走廊中，可选择中线布设（约 3m 宽的走廊）或双列布设（更宽的走廊）。在高层建筑中（层高 > 4m），应避免安装在天花板上，而应选择墙面或较低位置安装，间隔约 5m。室外开阔区域则建议使用三角网格布设。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble2.png" alt="pir" width={700} height="auto" /></p>

<center><i>红色的是错误示例，蓝色的是正确示例。</i></center>

- 在潮湿环境中部署时，需要考虑产品的防水等级，以避免长时间浸水。

- 安装产品时应与金属、玻璃或其他遮挡物保持一定距离，不应靠近墙角。

:::tip
上述部署指南仅供参考。实际部署应根据客户的定位算法、产品安装周边环境以及测试条件进行定制化设计。
:::

### 磁吸式安装说明

#### 安装条件

- 产品安装所用的工具或平台材质表面，应为可被磁铁吸附的设备或支架表面；
- 建议安装的环境温度范围：20~40°C；
- 安装产品时尽量远离拐角、周围其他磁场及大型障碍物。

#### 安装步骤

将产品的磁吸接触面直接吸附在需要安装的支架或设备表面即可。

:::tip
由于带磁产品的体积和重量通常大于普通产品（无磁吸），建议不要将此类产品安装在天花板等位置，以避免掉落风险。
:::

### 3M 胶/免钉胶安装说明

#### 安装条件

- 产品安装所依附的平台材料表面应为陶瓷、玻璃/环氧树脂、亚克力、PBT、ABS、PC、硬质 PVC 等平整、干燥的表面。由于不同型号双面胶的粘性和可安装性存在差异，不建议在有灰纹理、未完全干燥、老化、潮湿等墙面（如水泥、石膏板等）上使用默认双面胶，否则存在脱落风险；
- 建议安装的环境温度范围：20~40℃；
- 产品应远离金属、玻璃屏蔽或其他障碍物安装；产品不应靠近墙角部署。

#### 安装步骤

- 安装前：清洁需要粘贴的应用平台或工具表面，确保粘贴表面干燥、无灰尘；
- 粘贴时，用手或工具将双面胶粘在设备上并按压 1–2 秒，多次重复按压，使产品的双面胶或免钉胶与应用粘贴表面更好地结合。

:::tip
如果需要在低温或恶劣环境中安装产品，建议采用双面胶 + 强力免钉胶的方式进行安装，以获得最佳效果。关于免钉胶的更多信息，请联系我方销售人员。
:::

### 规格

**通用规格**

|参数| 数值 |
| :-: | :-: |
|材料| ABS+PC |
|颜色|黄色|
|防护等级（IP）| IP68 |
|防护等级（IK）| IK08 |
|尺寸（长\*宽\*高）|115\*100\*29mm|
|重量| 169.1g（含电池）|
|电池|Li/SOCl2 电池，4000mAh|
|芯片|nRF52 series|
|蓝牙版本|BLE 5.0|
|蓝牙协议|iBeacon|
|工作温度|-40~85°C|
|工作湿度| 0~95%RH，无冷凝|
|发射功率| -40~+4dBm|
|广播间隔|  100ms~5s|
|广播距离| 在空旷区域最远可达 75 米|
|电池寿命|<p>超过 7 年</p><p>（在默认配置下）。</p><p></p>|

**默认广播参数**

|**参数**|**默认值**|
| :-: | :-: |
|UUID|FDA50693-A4E2-4FB1-AFCF-C6EB07647825|
|Major|10001|
|Minor|19641|
|测量功率|-59dBm|
|发射功率|0dBm|
|广播间隔|300ms|
|密码|seeed123 （字母和数字）|

**兼容性信息**

|**系统**|**设备**|
| :-: | :-: |
|BLE|BLE 4.2+|
|IOS 7.0+|<p>iPhone 4S、iPhone 5/5C/5S，</p><p>iPhone 6/6Plus/6S/6SPlus、iPhone 7/7Plus，</p><p>iPad mini/mini2/4/Air/Pro 等。</p><p></p>|
|Android 4.3+|<p>三星、小米、华为、OnePlus、vivo、OPPO 等。</p><p></p>|


## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持方式，以确保您在使用产品的过程中体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>