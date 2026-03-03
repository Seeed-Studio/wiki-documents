---
description: SenseCAP_T1000_tracker_and_Datacake_Integrated
title: Datacake 集成（通过 TTS）
keywords:
- SenseCAP
- tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_T1000_tracker_Datacake_TTS
last_update:
  date: 8/15/2023
  author: Jessie
---

[Datacake](https://datacake.co/) 是一个多用途的物联网平台，提供构建自定义物联网应用程序的可能性，无需编程技能。

为了满足构建物联网应用程序日益增长的需求，我们一直在与 Datacake 合作创建模板，使社区能够方便轻松地通过 The Things Network 将 [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 添加到 Datacake。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_sense.png" alt="pir" width={800} height="auto" /></p>

在开始设置之前，请查看[将 SenseCAP T1000 连接到 TTS](https://wiki.seeedstudio.com/cn/SenseCAP_T1000_tracker_TTN) 以首先将您的 SenseCAP T1000 Tracker 连接到 TTS。

## 配置 Datacake

首先，在 [Datacake](https://app.datacake.de/signup) 上注册一个账户。

### 创建工作区

首先，通过导航到左上角的**创建工作区**按钮在 Datacake 上创建一个工作区。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake-workspace.png" alt="pir" width={800} height="auto" /></p>

### 添加设备

点击左侧菜单中的**设备**。
要添加新设备，请点击右侧的**添加设备**按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_add.png" alt="pir" width={800} height="auto" /></p>

选择 **LoRaWAN** 来添加 LoRaWAN 设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/lorawan.png" alt="pir" width={800} height="auto" /></p>

我们为用户上传了一个模板，您只需选择产品型号并粘贴您的设备 EUI 即可快速设置。

:::info
设备模板：Seeed SenseCAP T1000
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_tem.png" alt="pir" width={800} height="auto" /></p>

### 获取 API 令牌

导航到您的 Datacake 工作区中的**账户设置**，并复制您的 API 令牌。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_api.png" alt="pir" width={800} height="auto" /></p>

## 配置 The Things Stack

在 The Things Stack 上，导航到**集成** → **Webhooks**，然后点击**添加 Webhook**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

选择 Datacake Webhook 模板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_ts.png" alt="pir" width={800} height="auto" /></p>

通过填写 Webhook ID 来命名您的集成，并粘贴来自 Datacake 的 API 令牌进行授权。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_webhook2.png" alt="pir" width={800} height="auto" /></p>

## Datacake 仪表板

然后您可以在仪表板上查看您的设备数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_dashbaord.png" alt="pir" width={800} height="auto" /></p>