---
description: SenseCAP_Tracker_Bluetooth_Beacon
title: BC01 室内蓝牙 Beacon
keywords:
  - BLE
  - 定位
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/BC01_Indoor_Bluetooth_Beacon.webp
slug: /bluetooth_beacon01_for_sensecap_tracker
sku: 113991194
last_update:
  date: 04/02/2026
  author: Janet
createdAt: '2023-10-19'
updatedAt: '2026-04-02'
url: https://wiki.seeedstudio.com/cn/bluetooth_beacon01_for_sensecap_tracker/
---
BLE（低功耗蓝牙）定位 Beacon 是一种小型无线设备，会以固定时间间隔发送蓝牙信号。这些信号可以被支持蓝牙的设备（例如 [**SenseCAP T1000 Tracker**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)、[**SenseCAP T2000 
Tracker**](https://www.seeedstudio.com/SenseCAP-Asset-Tracker-T2000-A-p-6580.html)）检测到，从而使其能够判断与 Beacon 的距离，实现室内定位、资产追踪等基于位置的解决方案。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_169626_-1Pgt7bfhzJ786G5_1693376261?w=1400&h=1050&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/E5-Location-Beacon-p-5791.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
    </a>
</div>
<br />

:::tip 版本对比
![版本对比](https://files.seeedstudio.com/wiki/BC03/beacon_version.png)
:::

### 蓝牙室内定位系统

GPS 已经证明了其在室外定位方面的能力。现在，我们也倾向于转向室内定位，而蓝牙 Beacon 让室内精确定位成为可能。结合 SenseCAP T1000 Tracker，可以构建室内定位解决方案。

在目标区域内部署蓝牙 Beacon，Tracker 接收 Beacon 发送的信号，定位精度可达到米级（2-3 米）。可以实现资产追踪、路线规划、反向寻车等功能，并可以集成到小程序和 APP 中。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_594585_HptIoexn6zqh4-oS_1692694140?w=1424&h=328&type=image/png" alt="pir" width={800} height="auto" /></p>

:::tip
更多详情请查看 [室内定位系统](https://wiki.seeedstudio.com/cn/IPS_For_SenseCAP_T1000_Traker)。
:::

### 特性

- **Bluetooth® LE 5.0**
- **长电池寿命**：可更换 Li/SOCl2 电池，续航超过 5 年（默认配置 0dBm/500ms）。
- **远距离传输**：在空旷区域最远可达 120 米。
- **高兼容性**：兼容 iOS 7.0+ 和 Android 4.3+ 系统

### 按键功能

|开机|关机|
| :-: | :-: |
|打开产品后盖，长按按钮 3 秒，蓝色 LED 灯亮起 5 秒，表示开机成功。|在开机状态下，打开产品后盖，长按按钮 3 秒，蓝色 LED 灯闪烁 5 次，表示关机成功。|

## 部署指南

- 蓝牙 Beacon 通常安装在距离地面 2.5-3m 位置，水平间距为 5-10m。根据环境情况，这些 Beacon 可以按列部署，或以三角形均匀散布。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble1.png" alt="pir" width={600} height="auto" /></p>

- 不同场景的部署策略各不相同。例如，室内场景可采用中央（窄）布置或三角网格（稀疏）分布。在室内走廊中，可选择中线布置（约 3m 宽的走廊）或双列布置（更宽的走廊）。在高层建筑中（层高 > 4m）避免吊顶安装，改为墙面或低位安装，间距约 5m。室外开阔区域则使用三角网格布置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble2.png" alt="pir" width={700} height="auto" /></p>

<center><i>红色为错误示例，蓝色为正确示例。</i></center>

- 在潮湿环境中部署时，需要考虑产品的防水等级，避免长时间浸水。

- 安装产品时应与金属、玻璃或其他遮挡物保持一定距离，且不应靠近墙角。

:::tip
本部署指南仅供参考。实际部署应根据客户的定位算法、产品安装环境及测试条件进行定制。
:::

### 磁吸式安装说明

#### 安装条件

- 产品安装所用的工具或平台材质，应为设备或支架表面，可被磁铁吸附；
- 建议安装温度范围：20~40°C；
- 安装产品时，应尽量远离拐角、其他周围磁场以及大型障碍物。

#### 安装步骤

将产品的磁性接触面直接吸附在待安装的支架或设备表面即可。

:::tip
由于带磁产品的重量比普通产品（无磁吸）更重，建议不要将此类产品安装在天花板等表面，以避免掉落风险。
:::

### 3M 胶 / 免钉胶安装说明

#### 安装条件

- 产品所安装的平台材质表面应为平整、干燥的表面，例如陶瓷、玻璃 / 环氧树脂、亚克力、PBT、ABS、PC 和硬质 PVC。由于不同型号双面胶的粘性和可安装性存在差异，不建议在灰质墙面、未完全干燥、老化及潮湿的墙体（如水泥、石膏板等）上使用默认双面胶，存在脱落风险；
- 建议安装温度范围：20~40℃；
- 产品应安装在远离金属、玻璃屏蔽或其他障碍物的位置；产品不应部署在靠近墙角的位置。

#### 安装步骤

- 安装前：清理需要粘贴的应用平台或工具表面，确保粘贴面干燥且无灰尘；
- 粘贴时，用手或工具将双面胶贴在设备上并按压 1-2 秒，多次重复按压，使产品的双面胶或免钉胶与应用粘贴表面粘合得更牢固。

:::tip
如需在低温环境或恶劣环境中安装产品，建议使用双面胶 + 强力免钉胶的方式进行安装，以获得最佳效果。关于免钉胶的更多信息，请联系我司销售人员。
:::

### 规格

**通用规格**

|材质|PC|
| :-: | :-: |
|颜色|白色|
|防护等级（IP）|无|
|尺寸(L\*W\*H)|Φ50\*20.5mm|
|重量|39g（含电池）|
|电池|Li/SOCl2 电池，2400mAh|
|芯片|nRF52 系列|
|蓝牙版本|BLE 5.0|
|蓝牙协议|iBeacon|
|传感器|支持加速度计|
|LED|内置|
|APP|BeaconSET|
|工作温度|-30~60°C|
|电池寿命|<p>超过 5 年</p><p>（默认配置 0dBm/500ms）。</p><p></p>|

**默认广播参数**

|**参数**|**默认值**|
| :-: | :-: |
|UUID|FDA50693-A4E2-4FB1-AFCF-C6EB07647825|
|Major|10001|
|Minor|19641|
|测量功率|-59dBm|
|发射功率|‑30 - +4dBm，默认 0dBm|
|广播间隔|100ms~10s，默认 500ms|
|密码|seeed123（字母与数字）|
|序列 ID|无|
|设备名称|BC01（1-7 个字符）|
|连接模式|是 / 否|
|软重启|seeed123（与密码相同）|
|电池服务|<p>电池图标显示，实时检测</p><p>满格为 100%</p>|

**兼容性信息**

|**系统**|**设备**|
| :-: | :-: |
|BLE|BLE 4.2+|
|IOS 7.0+|<p>iPhone 4S、iPhone 5/5C/5S，</p><p>iPhone 6/6Plus/6S/6SPlus、iPhone 7/7Plus，</p><p>iPad mini/mini2/4/Air/Pro 等。</p><p></p>|
|Android 4.3+|<p>三星、XIAOMI、HUAWEI、ONEPLUS、ViVO、OPPO 等。</p><p></p>|

## 配置

- **步骤 1**：下载 `Beaconset` APP

- **步骤 2**：连接 Beacon，可以通过同时贴在 Beacon 标签上的 MAC 地址来区分它们。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/set-beacon2.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3**：设置

根据你的需求修改参数并点击 `Save`。当出现提示时，输入密码 `seeed123` 以确认。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setting-beacon.png" alt="pir" width={600} height="auto" /></p>
