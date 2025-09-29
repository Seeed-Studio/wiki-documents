---
description: 连接到 The Things Network
title: 连接到 The Things Network
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_T1000_tracker_TTN
last_update:
  date: 8/15/2023
  author: Jessie
---


The Things Stack(TTS) 是一个 LoRaWAN® 网络服务器堆栈，是任何 LoRaWAN 解决方案的关键组件。在本章中，我们将指导用户将 [SenseCAP T100 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 连接到 The Things Network。


## 设备配置

在连接到 TTS 之前，您需要在 SenseCAP Mate APP 上配置设备的基本参数，查看[快速入门](https://wiki.seeedstudio.com/cn/Get_Started_with_SenseCAP_T1000_tracker)了解更多详情。

* 将平台设置为 TTN，然后复制 Device EUI/APP EUI/APP Key。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>

## The Things Network

The Things Stack(TTS) 是一个企业级 LoRaWAN 网络服务器，基于开源核心构建。The Things Stack 允许您在自己的硬件上或在云中构建和管理 LoRaWAN 网络。

首先，在 [The Things Network](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3) 上注册一个账户。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/003.png" alt="pir" width={800} height="auto" /></p>


### 步骤 1：创建应用程序

导航到应用程序页面，点击"+Create application"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

输入应用程序 ID，点击 Create Application 保存您的更改。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>


### 步骤 2：注册设备

我们为用户上传了一个模板，您只需选择产品型号即可快速设置。
选择输入方法为 'Select the end device in the LoRaWAN Device Repository'

:::info
**End device brand**：SenseCAP<br />
**Model**：SenseCAP T1000 Tracker A/B
:::

根据您的设备选择频率计划。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model_setup.png" alt="pir" width={800} height="auto" /></p>


从 SenseCraft App 粘贴 Device EUI/APP EUI/APP Key，然后点击 `Register end device`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_new.png" alt="pir" width={800} height="auto" /></p>

:::note
上面的"JoinEUI"类似于"AppEUI"。
:::


### 步骤 3：检查数据

当设备尝试连接到网络时，呼吸灯会闪烁。如果设备成功加入网络，呼吸灯会快速闪烁，并会有轻快愉悦的旋律。

然后您可以在 TTS 控制台上查看数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_check.png" alt="pir" width={800} height="auto" /></p>


## 资源

[SenseCAP T1000 Tracker 解码器用于 TTN](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/T1000/TTN)