---
description: SenseCAP_Tracker_T1000-A/B_Bluetooth_Beacon
title: BC01 室内蓝牙信标
keywords:
- BLE
- Positioning
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/BC01_Indoor_Bluetooth_Beacon.webp
slug: /cn/bluetooth_beacon_for_SenseCAP_Traker
last_update:
  date: 05/29/2025
  author: Zeke
---

BLE（低功耗蓝牙）定位信标是一种小型无线设备，定期发送蓝牙信号。这些信号可以被支持蓝牙的设备（如 SenseCAP T1000 Tracker）检测到，使它们能够确定与信标的距离，为室内定位、资产跟踪和其他应用构建基于位置的解决方案。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_169626_-1Pgt7bfhzJ786G5_1693376261?w=1400&h=1050&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/E5-Location-Beacon-p-5791.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 </font></span></strong>
    </a>
</div>

### 蓝牙室内定位系统

GPS 已经证明了其在户外定位的能力。现在，我们也倾向于转向室内定位，蓝牙信标使室内精确定位成为可能。结合 SenseCAP T1000 Tracker 构建室内定位解决方案。

在目标区域部署蓝牙信标，跟踪器接收信标发送的信号，定位精度达到米级（2-3 米）。可以实现资产跟踪、路线规划、反向寻车等功能，并可集成到小程序和 APP 中。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_594585_HptIoexn6zqh4-oS_1692694140?w=1424&h=328&type=image/png" alt="pir" width={800} height="auto" /></p>

:::tip
查看[室内定位系统](https://wiki.seeedstudio.com/cn/IPS_For_SenseCAP_T1000_Traker)了解更多详情。
:::

### 特性

- **Bluetooth® LE 5.0**
- **长电池寿命**：可更换锂电池，超过 5 年（默认配置下 0dBm/500ms）。
- **长距离传输**：在开阔区域可达 120 米。
- **高兼容性**：兼容 iOS 7.0+ 和 Android 4.3+ 系统

### 按钮功能

|开机|关机|
| :-: | :-: |
|打开产品后盖，按住按钮 3 秒，蓝色 LED 亮起 5 秒，表示开机成功。|在开机状态下，打开产品后盖，按住按钮 3 秒，蓝色 LED 闪烁 5 次表示关机成功。|

## 部署指南

- 蓝牙信标通常安装在距离地面 2.5-3 米的高度，水平间距为 5-10 米。这些信标可以采用列阵形式部署，也可以根据环境以三角形模式均匀分布。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble1.png" alt="pir" width={600} height="auto" /></p>

- 不同场景的部署策略有所不同。例如，室内环境可能涉及中央（密集）放置或三角网格分布（稀疏）。在室内走廊中，选项包括中心线部署（适用于约 3 米宽的走廊）或双列布置（较宽的走廊）。避免在高层建筑中进行天花板安装（层高 > 4 米）。应选择墙面或低位安装，间距约 5 米。在户外，对于开阔空间使用三角网格模式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble2.png" alt="pir" width={700} height="auto" /></p>

<center><i>红色的是错误示例，蓝色的是正确示例。</i></center>

- 在潮湿环境中，部署时要考虑产品的防水等级，以防止长时间接触水分。

- 放置产品时要与金属、玻璃或其他阻挡物保持距离，不应靠近角落。

:::tip
部署指南仅供参考。实际部署应根据客户定位算法、产品安装环境和测试条件进行定制。
:::

### 磁吸安装说明

#### 安装条件

- 产品安装的工具或平台材料表面应为能被磁铁吸引的设备或支架表面；
- 推荐安装温度范围：20~40°C；
- 安装产品时，尽量远离角落、其他周围磁场和大型障碍物。

#### 安装步骤

产品的磁性接触面可以直接吸附到要安装的支架或设备表面。

:::tip
由于磁性产品的体积比一般产品（无磁吸）更重，建议不要将此类产品安装在天花板等表面，以避免跌落风险。
:::

### 3M 胶/免钉胶安装说明

#### 安装条件

- 产品安装的平台材料表面应为陶瓷、玻璃/环氧树脂、丙烯酸、PBT、ABS、PC 和硬质 PVC 等平整、干燥的表面。由于不同双面胶型号的粘性和可安装性存在差异，不建议在有灰色纹理、未完全干燥、老化和潮湿的墙面（如水泥、石膏板等）上使用默认双面胶。存在脱落风险；
- 推荐安装温度范围：20~40℃；
- 产品应安装在远离金属、玻璃遮挡或其他障碍物的地方；产品不应部署在靠近角落的位置。

#### 安装步骤

- 安装前：清洁要粘贴的应用平台或工具表面，确保粘贴表面干燥无尘；
- 粘贴时，用手或工具将双面胶贴到设备上并按压 1-2 秒。重复按压几次，使产品的双面胶或免钉胶与应用粘贴表面更好地结合。

:::tip
如果需要在低温环境或恶劣环境中安装产品，建议使用双面胶 + 强力免钉胶安装产品以获得最佳效果。有关免钉胶的更多信息，请联系我们的销售人员。
:::

### 规格

**一般规格**

|UUID|PC|
| :-: | :-: |
|颜色|白色|
|IP 等级|无|
|尺寸(L\*W\*H)|Φ50\*20.5mm|
|重量|39g（含电池）|
|电池|锂电池，2400mAh|
|芯片|nRF52 系列|
|蓝牙版本|BLE 5.0|
|蓝牙协议|iBeacon|
|传感器|支持加速度计|
|LED|包含|
|APP|BeaconSET|
|工作温度|-30~60°C|
|电池寿命|<p>超过 5 年</p><p>（默认配置下 0dBm/500ms）。</p><p></p>|

**默认广播参数**

|**参数**|**默认值**|
| :-: | :-: |
|UUID|FDA50693-A4E2-4FB1-AFCF-C6EB07647825|
|Major|10001|
|Minor|19641|
|测量功率|-59dBm|
|发射功率|-30 - +4dBm，默认 0dBm|
|广播间隔|100ms~10s，默认 500ms|
|密码|seeed123（字母和数字）|
|序列号|无|
|设备名称|BC01（1-7 个字符）|
|连接模式|是/否|
|软重启|seeed123（与密码相同）|
|电池服务|<p>电池图标显示，实时检测</p><p>满格为 100%</p>|

**兼容性信息**

|**系统**|**设备**|
| :-: | :-: |
|BLE|BLE 4.2+|
|IOS 7.0+|<p>iPhone 4S,iPhone 5/5C/5S, </p><p>iPhone 6/6Plus/6S/6SPlus,iPhone 7/7Plus, </p><p>iPad mini/mini2/4/Air/Pro,等。</p><p></p>|
|Android 4.3+|<p>Samsung，XIAOMI，HUAWEI，ONEPLUS，ViVO，OPPO，等。</p><p></p>|

## 配置

- **步骤 1**：下载 `Beaconset` APP

- **步骤 2**：连接信标，您可以通过 MAC 地址来区分它们，MAC 地址也贴在信标标签上。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/set-beacon2.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3**：设置

根据您的需要修改参数并点击 `Save`。出现提示时，输入密码 `seeed123` 确认。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setting-beacon.png" alt="pir" width={600} height="auto" /></p>
