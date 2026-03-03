---
description: SenseCAP_T1000_tracker_and_TagoIO_Integrated
title: TagoIO 集成（通过 TTS）
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_T1000_tracker_TagoIO_TTS
last_update:
  date: 8/18/2023
  author: Jessie
---


[TagoIO](https://tago.io/) 是一个面向企业的物联网云平台，用于管理设备、数据、用户、分析和集成。其直观的界面使各种规模的企业都能轻松构建和部署创新的物联网解决方案。


本章内容将指导用户如何通过 TTN 将 [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 连接到 TagoIO。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio.png" alt="pir" width={800} height="auto" /></p>

在开始设置之前，请查看[将 SenseCAP T1000 连接到 TTS](https://wiki.seeedstudio.com/cn/SenseCAP_T1000_tracker_TTN) 以首先将您的 SenseCAP T1000 Tracker 连接到 TTS。


## 配置 TagoIO

首先，在 [TagoIO](https://admin.tago.io/signup) 创建一个账户。


### 添加设备

导航到 **Devices** 选项卡并点击 **Add Device**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_device.png" alt="pir" width={800} height="auto" /></p>


搜索 **Seeed SenseCAP T1000** 进行快速设置。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_template.png" alt="pir" width={800} height="auto" /></p>

为您的设备命名并粘贴您的设备 EUI，然后点击 **Create my Device**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/c_my_device.png" alt="pir" width={800} height="auto" /></p>


### 生成授权

点击 **Generate authorization** 并复制您的授权。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/authorization.png" alt="pir" width={800} height="auto" /></p>


## 配置 The Things Stack


在 The Things Stack 上，导航到 **Integrations** → **Webhooks**，并点击 **Add Webhook**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>


选择 TaoIO Webhook 模板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTS_web_IO.png" alt="pir" width={800} height="auto" /></p>


通过填写 Webhook ID 为您的集成命名，并粘贴 Plugin ID 和 TagoIO token。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/webhook_TTS.png" alt="pir" width={800} height="auto" /></p>


设备连接后，您可以在 TagoIO 的 **Live Inspector** 选项卡中检查所有连接。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/live_inspec.png" alt="pir" width={800} height="auto" /></p>

## TagoIO 仪表板（可选）

仪表板是您放置小部件以实时可视化和交互数据的地方。您可以根据需要自定义仪表板。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_dash.png" alt="pir" width={800} height="auto" /></p>


导航到 **Dashboard** 选项卡，为您的仪表板命名并点击 **Create my Dashboard**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dashfortagoio.png" alt="pir" width={800} height="auto" /></p>


**位置仪表板**

点击 **Add widget**，选择 **Map** 类型。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/maptagoio.png" alt="pir" width={800} height="auto" /></p>


**Data from**：您的设备 -- location

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_done_io.png" alt="pir" width={800} height="auto" /></p>