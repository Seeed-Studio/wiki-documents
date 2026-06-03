---
description: SenseCAP_Tracker_T1000-A/B_IPS
title: SenseCAP T1000 室内定位系统指南
keywords:
  - 追踪器
  - BLE
  - 定位
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /IPS_For_SenseCAP_T1000_Traker
sku: E2025081201,E2025081501
last_update:
  date: 10/20/2023
  author: Jessie
createdAt: '2023-10-19'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/IPS_For_SenseCAP_T1000_Traker/
---


本章节将提供整体指导，说明如何使用 Traxmate 将 [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 集成到室内定位解决方案中。

[Traxmate](https://traxmate.io/) 是一个 IoT 平台，使你或你的客户能够轻松高效地部署一套完整的 IoT 追踪解决方案，具备无缝的室内外定位、跟踪和路径规划能力。

:::tip 在寻找自建部署的替代方案？
如果你更希望在没有第三方平台订阅的情况下运行自己的仪表盘，可以查看 **[Campus-level BLE Beacon Positioning System](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan)** —— 一套可一键部署的 BLE 信标 + LoRaWAN 解决方案，你可以通过 SenseCraft Solution 启动（或通过 Docker 自建部署）。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/system-archi.png" alt="pir" width={800} height="auto" /></p>

## 架构概览

下面是简要说明，但请阅读文档的其余部分以获得完整的理解。

● 登录 Traxmate 并创建你的建筑。<br/>
● 部署更多 Wi-Fi 和/或 [E5 Bluetooth Location Beacon Deployment](https://wiki.seeedstudio.com/cn/bluetooth_beacon_for_SenseCAP_Traker/#deployment-guidelines)（如有需要）。<br/>
● 执行一次室内勘测，以检查你已安装的 Wi-Fi 和/或 Bluetooth 基础设施所能提供的精度。<br/>
● 再进行一次新的室内勘测以进行验证。<br/>
● 重复上述步骤，或开始使用室内定位解决方案。<br/>
● 将设备连接到 [TTN](https://www.thethingsnetwork.org/)，并将数据发送到 Traxmate。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/flow.png" alt="pir" width={800} height="auto" /></p>

## 部署 Wi-Fi/Bluetooth 信标

如果你尚未部署 Wi-Fi 接入点和/或 Bluetooth 信标的基础设施，你可以进行一次针对定位优化的部署。大多数已部署的 Wi-Fi 接入点基础设施，其放置位置很可能是为了优化数据连接的覆盖范围和性能。在同时考虑定位时——请记住“把它们分散开来，尽量靠近拐角和墙壁布置，并在你希望获得更高精度的区域提高密度”。

:::tip
Bluetooth 信标通常由电池供电，因此更容易部署。Wi-Fi 接入点的覆盖范围更长。相比稀疏的 Wi-Fi 接入点网格，密集的 Bluetooth 信标网格能提供更好的精度。
:::

更多详情请查看 [E5 Bluetooth Location Beacon Deployment](https://wiki.seeedstudio.com/cn/bluetooth_beacon_for_SenseCAP_Traker/#deployment-guidelines)。

## 添加地点

导航到 `Places` -> `Add New`，然后点击地图或搜索地址或名称，点击 `Add place` 弹出窗口并提交详细信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-place.png" alt="pir" width={800} height="auto" /></p>

下一步是指定建筑的楼层数量，并为你希望启用室内定位的楼层上传楼层平面图。上传楼层平面图支持 PNG 和 JPEG 文件。上传文件后，你可以使用工具对其进行缩放、旋转并在地图上正确放置。还有一个工具可以沿着建筑的轮廓裁剪 PNG/JPEG 文件。

在完成建筑设置后，点击 `SAVE`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buildings.png" alt="pir" width={800} height="auto" /></p>

## 进行勘测

在添加建筑并上传楼层平面图后，就可以使用 Traxmate App（Android 版本）进行勘测了。

:::note
Traxmate App 的 iOS 版本无法使用，因为 iOS 不支持第三方应用进行 Wi-Fi 扫描。
:::

:::tip
Android 通常会限制应用进行 Wi-Fi 扫描的频率，默认设置为每 30 秒一次。为了获得更精确的勘测，建议你关闭这种节流限制。你需要将 Android 设置为开发者模式才能进行此操作。

前往 `Settings` > `Developer options` > 找到 "Wi-Fi scan throttling" > 将其禁用（或 Settings>System>Advanced>Developer options）。
在你的 Android 上禁用 WiFi 扫描节流后，你可以确保 NetSpot 在勘测、扫描和分析你的无线网络区域时发挥最大能力。<br/>
在[这里](https://developer.android.com/guide/topics/connectivity/wifi-scan
)查看更多信息。
:::

打开应用并登录，选择 `Places` -> `Select your Place` -> `Select Floor` -> `Start Survey`。

应用随后会持续扫描 Wi-Fi 和 Bluetooth。你应通过反复放置参考点来训练室内定位系统。参考点越多越好。参考点应放置在地图上与你实际所在位置相对应的位置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/survey1.png" alt="pir" width={600} height="auto" /></p>

● 你通过缩放和拖动地图，将你所在的位置移动到十字准线下方来放置参考点。当你准确对准后，点击带加号 (+) 的按钮。<br/><br/>
● 然后继续行走，尽量以恒定速度直线行走。
建议比正常步行速度稍慢一些。以一个适合作为参考点的新位置为目标。好的位置是那些在地图上容易识别的地方，例如拐角、交叉口、门、电梯、楼梯等类似位置。<br/><br/>
● 每隔至少 5-10 米放置一个参考点。参考点放置得越精确，室内定位就会越准确。<br/><br/>
● 当你完成整个区域或楼层的勘测后，按下红色停止按钮结束勘测。勘测数据将被发送到服务器端并进行处理。一两分钟后，将会为你的建筑自动发布一个新的建筑模型（参见关于建筑模型的章节），前提是该勘测有良好贡献并提升了精度。

## 评估当前提供的精度

在完成室内勘测后，需要对结果进行评估。登录 [Traxmate portal](https://online.traxmate.io/)，并访问你的地点/建筑的 Positioning 选项卡。
勘测的原始数据将由后端服务器处理，结果将以建筑模型的形式提供。最新发布的建筑模型的详细信息会显示在 Positioning 选项卡中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/51.png" alt="pir" width={800} height="auto" /></p>

<center><i>此图显示其中位误差为 4.33 米。已执行的勘测覆盖了建筑的 51%，并且发现 Wi-Fi 和 Bluetooth（射频覆盖）覆盖了建筑的 13%。</i></center>

### 建筑模型与中位误差

建筑模型是对建筑内信标放置位置的电子化表示。当用户（一个或多个）执行勘测或参考轨迹时，就会生成建筑模型。一旦这些操作完成，它们会被发送到系统中，计算生成一个建筑模型。

对于每个建筑模型，都会计算一个中位误差。中位误差基于真实轨迹/参考轨迹（由勘测过程中放置的参考点生成）与计算轨迹（基于 Combain Location API 提供的室内定位）之间的差异（误差）。系统会自动选择发布当前可用的最佳建筑模型。“最佳”的算法基于覆盖率和中位误差的组合。

该自动流程可以通过手动发布选定的建筑模型来覆盖。建筑模型可以被编辑。用户可以添加或编辑信标，以进一步提升定位效果。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model98.png" alt="pir" width={400} height="auto" /></p>

<center><i>图中显示的是建筑 Mattehuset1 已发布的建筑模型 1892。它总共有 98 个可用建筑模型。当前建筑模型包含 179 个唯一的 Wi-Fi MAC 地址，并覆盖了 6 层中的 4 层。所有楼层的中位误差为 4.33 米。最佳楼层（见图 9）是 3 楼，其中位误差为 3.9 米。</i></center>

### 勘测覆盖率、射频覆盖率和中位误差地图

在评估特定建筑模型、查看是否以及如何提升精度时，查看勘测覆盖率、射频覆盖率和中位误差地图会很有帮助。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sc-rf.png" alt="pir" width={800} height="auto" /></p>

### 如何提升室内定位精度

在查看中位误差地图时，如果发现当前提供的中位误差与您的使用场景需求不符，那么就需要考虑如何提升精度。

●  **步骤 1** - 更多勘测<br/>
你是否已经在计划使用室内定位的建筑所有区域进行了勘测？
如果没有，请进行更多勘测。

●  **步骤 2** - 提升 Wi-Fi 和 Bluetooth 覆盖率<br/>
你是否在计划使用室内定位的建筑所有区域都部署了 Wi-Fi 和 Bluetooth？
如果没有，请在这些区域部署更多 Wi-Fi 和 Bluetooth 信标，并在这些区域进行勘测。

●  **步骤 3** - 提升 Wi-Fi 和 Bluetooth 密度<br/>
你已经在建筑的所有区域部署了 Wi-Fi 和 Bluetooth，但精度仍然不够理想。
检查这些区域中 Wi-Fi 和蓝牙的密度。与附录 1 中的表格进行比较，从理论和仿真的角度判断是否建议增加 Wi-Fi 和蓝牙的密度以满足你的需求。如果是，则在这些区域部署更多的 Wi-Fi 和蓝牙信标。

●  **步骤 4** - 提高测绘精度<br/>
你已经在建筑物的所有区域部署了 Wi-Fi 和蓝牙，并且密度符合附录 1 中为满足你需求而建议的理论水平，但精度仍然不够好。
执行更为详细的测绘。确保尽可能频繁地放置参考点（每平方米一个是最优的），并尽可能精确。将参考点放置在地图上时，精确和正确非常重要。很容易出错，把参考点放在与你实际所在位置不同的地方。

## 开始使用

SenseCAP T1000 Tracker 收集 Wi-Fi 和蓝牙扫描信息、MAC 地址和信号强度，并将其发送到 The Things Stack，然后通过 API 发送到 Traxmate 门户。

请先查看 [Connect to TTN](https://wiki.seeedstudio.com/cn/SenseCAP_T1000_tracker_TTN/) 以正确设置追踪器。

### 添加设备

登录 Traxmate 门户，导航到 `Devices` -> `Add new` -> `Device`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-devices.png" alt="pir" width={800} height="auto" /></p>

### TTS 配置

登录 [The Things Stack](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3)，导航到 `Integrations` → `Webhooks`，然后点击 `Add Webhook`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

选择 `Custom Webhook` 模板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-web.png" alt="pir" width={800} height="auto" /></p>

为你的 Webhook ID 命名并将格式选择为 `JSON`，然后复制 Base URL。

```cpp
https://capture.v1.traxmate.io/service/<Service Token>/device
```

:::tip
导航到 `Settings` -> `Account`，并复制 Service Token。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/service-token.png" alt="pir" width={800} height="auto" /></p>
:::

启用以下推荐的事件类型，然后点击 `Add webhook`。

- 上行消息
- 规范化上行

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/websettings.png" alt="pir" width={800} height="auto" /></p>

### 检查设备数据

当设备成功连接后，返回 traxmate 门户，你将看到该设备的数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-data.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-map.png" alt="pir" width={800} height="auto" /></p>

## 附录

### 精度要求

**本章中我们描述的方法和技术适用于中位误差大约在 2-10 米范围内的使用场景。**

所有精度要求都应基于使用场景的需求。一些使用场景的要求比其他场景更高，一些使用场景在室内定位基础设施上的可用预算也比其他场景更高。解决方案应致力于在精度要求和可用预算之间找到平衡。经验法则是，投入到基础设施中的资金和精力越多，精度就越高。但请注意，许多使用场景可以通过利用已有的基础设施来实现。

下图显示了在一定面积内拥有一定数量的 Wi-Fi/蓝牙时，你可以期望获得的精度。

### 预估室内精度矩阵

下表显示了在室内环境中使用基于 AI（ANN）的室内定位时，你可以期望获得的预估精度。精度将取决于需要覆盖的区域以及部署的 Wi-Fi 接入点（AP）或蓝牙信标的数量。

中位误差精度为：

●  绿色 1 到 5 米<br/>
● 黄色 5 到 10 米<br/>
● 红色 10 米<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table1.png" alt="pir" width={700} height="auto" /></p><center><i>表格显示了在每 1 平方米设置一个参考点、执行非常详细的测绘时的精度。</i></center>
<br/>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table2.png" alt="pir" width={700} height="auto" /></p><center><i>表格显示了在每 4 平方米设置一个参考点、执行详细测绘时的精度。</i></center>
<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table3.png" alt="pir" width={700} height="auto" /></p><center><i>表格显示了在每 100 平方米设置一个参考点、执行稀疏测绘时的精度。</i></center>
