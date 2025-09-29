---
description: SenseCAP_Tracker_T1000-A/B_IPS
title: SenseCAP T1000 室内定位系统指南
keywords:
- Tracker
- BLE
- Positioning
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/IPS_For_SenseCAP_T1000_Traker
last_update:
  date: 10/20/2023
  author: Jessie
---


本章将提供关于如何使用 Traxmate 将 [SenseCAP T1000 追踪器](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 集成到室内定位解决方案中的整体指导。

[Traxmate](https://traxmate.io/) 是一个物联网平台，使您或您的客户能够轻松高效地部署全面的物联网追踪解决方案，具备无缝的室内外定位、追踪和路由功能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/system-archi.png" alt="pir" width={800} height="auto" /></p>

## 架构概述

以下是简要总结，但请阅读文档的其余部分以获得完整的了解。

● 登录 Traxmate 并创建您的建筑物。<br/>
● 部署更多 Wi-Fi 和/或 [E5 蓝牙定位信标部署](https://wiki.seeedstudio.com/cn/bluetooth_beacon_for_SenseCAP_Traker/#deployment-guidelines)（如果需要）。<br/>
● 执行室内勘测以检查已安装的 Wi-Fi 和/或蓝牙基础设施提供的精度。<br/>
● 进行新的室内勘测以验证。<br/>
● 重复上述步骤或开始使用室内定位解决方案。<br/>
● 将设备连接到 [TTN](https://www.thethingsnetwork.org/) 并将数据发送到 Traxmate。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/flow.png" alt="pir" width={800} height="auto" /></p>

## 部署 Wi-Fi/蓝牙信标

如果您还没有已安装的 Wi-Fi 接入点和/或蓝牙信标基础设施，您可以进行针对定位优化的部署。大多数已部署的 Wi-Fi 接入点基础设施的放置很可能是为了优化数据连接的范围和性能。当同时考虑定位时 - 请考虑"分散部署并保持靠近角落和墙壁，在需要更高精度的区域保持更高密度"。

:::tip
蓝牙信标通常由电池供电，因此可以更容易地部署。Wi-Fi 接入点具有更长的范围。密集的蓝牙信标网格比稀疏的 Wi-Fi 接入点网格提供更好的精度。
:::

查看 [E5 蓝牙定位信标部署](https://wiki.seeedstudio.com/cn/bluetooth_beacon_for_SenseCAP_Traker/#deployment-guidelines) 了解更多详情。

## 添加地点

导航到 `Places` -> `Add New`，然后点击地图或搜索地址或名称，点击 `Add place` 弹窗并提交详细信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-place.png" alt="pir" width={800} height="auto" /></p>

下一步是指定建筑物的楼层数，并将楼层地图上传到您希望启用室内定位的楼层。楼层地图上传支持 PNG 和 JPEG 文件。上传文件后，您可以使用工具来缩放、旋转并正确放置在地图上。还有一个工具可以沿着建筑物的形状裁剪 PNG/JPEG 文件。

设置建筑物后，点击 `SAVE`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buildings.png" alt="pir" width={800} height="auto" /></p>

## 进行调研

一旦建筑物已添加并上传了楼层地图，就可以使用 Traxmate 应用程序（Android 版本）进行调研了。

:::note
无法使用 iOS 版本的 Traxmate 应用程序，因为 iOS 不支持第三方应用程序进行 Wi-Fi 扫描。
:::

:::tip
Android 通常对应用程序扫描 Wi-Fi 的频率有限制，设置为每 30 秒一次。为了获得更准确的调研结果，建议您关闭此限制。您必须将 Android 设置为开发者模式才能执行此操作。

转到 `设置` > `开发者选项` > 找到"Wi-Fi 扫描限制" > 禁用它（或设置>系统>高级>开发者选项）。
在您的 Android 上禁用 WiFi 扫描限制后，您可以确保 NetSpot 在调研、扫描和分析您的无线网络区域时会尽其所能。<br/>
查看更多信息请点击[这里](https://developer.android.com/guide/topics/connectivity/wifi-scan
)。
:::

打开应用程序并登录，选择 `Places` -> `Select your Place` -> `Select Floor` -> `Start Survey`。

应用程序将持续扫描 Wi-Fi 和蓝牙。您应该通过反复放置参考点来训练室内定位系统。参考点越多越好。参考点应放置在地图上代表您实际所在位置的地方。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/survey1.png" alt="pir" width={600} height="auto" /></p>

● 您通过缩放和平移地图来放置参考点，使您所在的位置位于十字准线下方。当您瞄准正确时，点击带有加号（+）的按钮。<br/><br/>
● 然后您继续行走，尽力以恒定速度直线行走。
建议速度比正常步行速度稍慢。瞄准一个新的好位置作为参考点。好的位置是在地图上容易识别的地方，如角落、十字路口、门、电梯、楼梯等类似位置。<br/><br/>
● 至少每 5-10 米放置一个参考点。您放置参考点越精确，室内定位就越准确。<br/><br/>
● 当您调研完整个区域或楼层后，按红色停止按钮停止调研。调研数据将发送到服务器端进行处理。在一到几分钟内，将为您的建筑物自动发布一个新的建筑模型（请参阅关于建筑模型的章节）（如果调研以良好的方式贡献并提高了准确性）。

## 评估当前提供的准确性

一旦您完成了室内调研，就需要评估结果。您登录到 [Traxmate 门户](https://online.traxmate.io/) 并访问您的场所/建筑物的定位选项卡。
来自调研的原始数据将由后端服务器处理，结果将作为建筑模型提供。最新发布的建筑模型的详细信息显示在定位选项卡中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/51.png" alt="pir" width={800} height="auto" /></p>

<center><i>此图显示中位误差为 4.33 米。已执行的调研覆盖了建筑物的 51%，发现 Wi-Fi 和蓝牙（RF 覆盖）覆盖了建筑物的 13%</i></center>

### 建筑模型和中位误差

建筑模型是信标在建筑物内放置位置的电子表示。当用户（或多个用户）执行调研或参考轨迹时，会生成建筑模型。一旦这些完成，它们就会被发送到系统中计算成建筑模型。

为每个建筑模型计算中位误差。中位误差基于地面真实/参考轨迹（由调研期间放置的参考点生成）与计算轨迹（基于 Combain 位置 API 提供的室内定位）之间的差异（误差）。系统自动选择发布最佳可用的建筑模型。"最佳"的算法基于覆盖率和中位误差的组合。

自动过程可以通过手动发布选定的建筑模型来覆盖。建筑模型可以编辑。用户能够添加或编辑信标以进一步增强定位效果。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model98.png" alt="pir" width={400} height="auto" /></p>

<center><i>显示建筑物 Mattehuset1 的已发布建筑模型 1892。总共有 98 个可用的建筑模型。当前建筑模型包括 179 个唯一的 Wi-Fi MAC 地址，覆盖 6 层中的 4 层。所有楼层的中位误差为 4.33 米。最佳楼层（见图 9）是第 3 层，中位误差为 3.9 米。</i></center>

### 调研覆盖、RF 覆盖和中位误差地图

在评估特定建筑模型时，要查看准确性是否以及如何改进，查看调研覆盖、RF 覆盖和中位误差地图会很有用。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sc-rf.png" alt="pir" width={800} height="auto" /></p>

### 如何提高室内定位准确性

当查看中位误差地图时，如果您发现提供的中位误差不符合您用例的要求，那么就该研究如何提高准确性了。

●  **步骤 1** - 更多调研<br/>
您是否在建筑物中打算使用室内定位的所有区域都进行了调研？
如果没有，请进行更多调研。

●  **步骤 2** - 增加 Wi-Fi 和蓝牙覆盖<br/>
您是否在建筑物中打算使用室内定位的所有区域都有 Wi-Fi 和蓝牙？
如果没有，请在这些区域部署更多 Wi-Fi 和蓝牙信标，并在这些区域进行调研。

●  **步骤 3** - 增加 Wi-Fi 和蓝牙密度<br/>
您在建筑物的所有区域都有 Wi-Fi 和蓝牙，但精度仍然不够好。
检查这些区域中 Wi-Fi 和蓝牙的密度。与附录 1 中的表格进行比较，看看从理论和仿真角度是否建议您增加 Wi-Fi 和蓝牙的密度以满足您的要求。如果是这样，请在这些区域部署更多的 Wi-Fi 和蓝牙信标。

●  **步骤 4** - 提高测量精度<br/>
您在建筑物的所有区域都有 Wi-Fi 和蓝牙，密度也符合附录 1 建议的理论水平以满足您的要求，但精度仍然不够好。
执行更详细的测量。确保您尽可能频繁地放置参考点（每平方米一次是最佳的）并尽可能准确。在地图中放置参考点时，精确和正确是很重要的。很容易犯错误，将它们放置在与您实际所在位置不同的地方。

## 开始使用

SenseCAP T1000 Tracker 收集 Wi-Fi 和蓝牙扫描信息、MAC 地址和信号强度，并将其发送到 The Things Stack，然后通过 API 发送到 Traxmate 门户。

请先查看[连接到 TTN](https://wiki.seeedstudio.com/cn/SenseCAP_T1000_tracker_TTN/)以正确设置跟踪器。

### 添加设备

登录 Traxmate 门户，导航到 `Devices` -> `Add new` -> `Device`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-devices.png" alt="pir" width={800} height="auto" /></p>

### TTS 配置

登录 [The Things Stack](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3)，导航到 `Integrations` → `Webhooks`，然后点击 `Add Webhook`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

选择 `Custom Webhook` 模板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-web.png" alt="pir" width={800} height="auto" /></p>

命名您的 Webhook ID 并选择格式为 `JSON`，然后复制 Base URL。

```cpp
https://capture.v1.traxmate.io/service/<Service Token>/device
```

:::tip
导航到 `Settings` -> `Account`，并复制服务令牌。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/service-token.png" alt="pir" width={800} height="auto" /></p>
:::

启用以下推荐的事件类型，然后点击 `Add webhook`。

- Uplink message
- Normalized uplink

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/websettings.png" alt="pir" width={800} height="auto" /></p>

### 检查设备数据

当设备成功连接后，我们返回到 traxmate 门户，您将看到设备的数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-data.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-map.png" alt="pir" width={800} height="auto" /></p>

## 附录

### 精度要求

**我们在本章中描述的方法和技术适用于需要大约 2-10 米中位误差的使用场景。**

所有精度要求都应基于使用场景的需求。某些使用场景比其他场景有更高的要求，某些使用场景比其他场景有更高的室内定位基础设施可用预算。解决方案应旨在在精度要求和可用预算之间找到平衡。经验法则是，投入基础设施的资金和精力越多，精度越好。但请注意，许多使用场景可以通过使用现有基础设施来支持。

以下图表显示了如果您在一定平方米范围内拥有一定数量的 Wi-Fi/蓝牙设备，可以期望的精度。

### 估计室内精度矩阵

下表显示了在室内环境中使用基于 AI (ANN) 的室内定位可以期望的估计精度。精度将取决于要覆盖的区域和部署的 Wi-Fi 接入点 (AP) 或蓝牙信标的数量。

中位误差精度为：

● 绿色从 1 到 5 米<br/>
● 黄色 5 到 10 米<br/>
● 红色 10 米<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table1.png" alt="pir" width={700} height="auto" /></p><center><i>表格显示了如果您执行了非常详细的调查，每平方米有一个参考点时的精度。</i></center>
<br/>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table2.png" alt="pir" width={700} height="auto" /></p><center><i>表格显示了如果您执行了详细的调查，每 4 平方米有一个参考点时的精度。</i></center>
<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table3.png" alt="pir" width={700} height="auto" /></p><center><i>表格显示了如果您执行了稀疏调查，每 100 平方米有一个参考点时的精度。</i></center>
