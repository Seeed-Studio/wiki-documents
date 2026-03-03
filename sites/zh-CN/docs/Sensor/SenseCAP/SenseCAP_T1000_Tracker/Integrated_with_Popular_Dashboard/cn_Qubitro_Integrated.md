---
description: SenseCAP_T1000_tracker_and_Qubitro_Integrated
title: Qubitro 集成（通过 TTS）
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_T1000_tracker_Qubitro_TTS
last_update:
  date: 8/15/2023
  author: Jessie
---


[Qubitro](https://www.qubitro.com/) 是一个面向开发者的设备数据平台（DDP），提供您快速开发解决方案所需的工具、工作流程和基础设施，无需手动集成多个服务。Qubitro 开箱即用地支持流行的数据源，并提供实时协作工具和可扩展的基础设施。

本章内容将指导用户如何通过 TTN 将 SenseCAP [T1000 追踪器](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)连接到 Qubitro。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/qubitro_in1.png" alt="pir" width={800} height="auto" /></p>

在开始设置之前，请查看[将 SenseCAP T1000 连接到 TTS](https://wiki.seeedstudio.com/cn/SenseCAP_T1000_tracker_TTN)，首先将您的 SenseCAP T1000 追踪器连接到 TTS。

## 配置 Qubitro 

首先，在 [Qubitro](https://portal.qubitro.com/login) 创建一个账户。创建账户后，您将自动获得入门计划。


### 从 Qubitro 仪表板获取凭据

创建一个新项目。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_new_project.png" alt="pir" width={800} height="auto" /></p>


点击 **New source** 按钮，然后在列表中点击 **The Things Stack**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_source.png" alt="pir" width={800} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_TTS.png" alt="pir" width={800} height="auto" /></p>

然后您将获得项目 ID 和 Webhook 签名密钥。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTN_source.png" alt="pir" width={800} height="auto" /></p>


## 配置 The Things Stack

导航到 [TTS 控制台](https://eu1.cloud.thethings.network/console/)来配置 webhook 集成。

在 The Things Stack 上，导航到 **Integrations** → **Webhooks**，然后点击 **Add Webhook**。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

选择 Qubitro Webhook 模板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTN_Q.png" alt="pir" width={800} height="auto" /></p>

通过填写 Webhook ID 来命名您的集成，并粘贴在 Qubitro 门户第一步中提供的值。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_kyes.png" alt="pir" width={800} height="auto" /></p>

点击 **Create Qubitro Webhook** 按钮，然后返回 Qubitro 门户。


## 设备状态

点击 **Go to project** 按钮，然后点击 **Refresh** 按钮来验证设备是否成功列出。


:::info 提示
一旦配置了集成，连接到 The Things Stack 上同一项目的所有设备将自动同步。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_status_device.png" alt="pir" width={800} height="auto" /></p>

## 在 Qubitro 上配置解码器

导航到您的设备页面，点击 **Create function button**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_create_function.png" alt="pir" width={800} height="auto" /></p>

选择 **Decoder function**，然后点击 **Get started**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_function.png" alt="pir" width={800} height="auto" /></p>


我们为用户上传了一个模板，您只需选择产品型号即可快速设置。

:::info
**格式化类型**: 设备模板<br />
**制造商品牌**: Seeed Studio<br />
**型号**: SenseCAP_T1000
:::

然后点击 **Save and complete**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/function_setup.png" alt="pir" width={800} height="auto" /></p>


## 检查数据

导航到设备并点击 **Data** 选项卡来验证传入的数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_data_view.png" alt="pir" width={800} height="auto" /></p>


## 自定义仪表板（可选）

**位置仪表板**

导航到您的仪表板页面，点击 **Create new**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dash.png" alt="pir" width={800} height="auto" /></p>

命名您的仪表板并点击 **Create**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_dash.png" alt="pir" width={800} height="auto" /></p>


为小部件类型选择 **Map**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_setmap.png" alt="pir" width={800} height="auto" /></p>

选择您的设备和 **coordinates** 值。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/coordi.png" alt="pir" width={800} height="auto" /></p>


然后您可以在仪表板上查看您的位置。
您也可以自定义其他小部件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dashboard_view.png" alt="pir" width={800} height="auto" /></p>