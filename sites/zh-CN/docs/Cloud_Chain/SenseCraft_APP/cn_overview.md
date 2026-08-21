---
sidebar_position: 1
description: 下载 SenseCraft App，连接支持的设备，管理传感器数据，配置设备设置，并查看事件。
title: SenseCraft App 概览
keywords:
  - App
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-app/overview
aliases:
  - /sensecraft_app
last_update:
  date: 1/7/2026
  author: Janet
createdAt: '2024-07-26'
updatedAt: '2026-08-04'
url: https://wiki.seeedstudio.com/cn/sensecraft-app/overview/
---

:::tip note
SenseCAP Mate App 已正式更名为 SenseCraft App。
:::

<a id="introduction-and-usage"></a>

# SenseCraft App 概览

SenseCraft App 是一款用于数据可视化和设备管理的移动应用。

## App 亮点

- 节省时间 - 提供扫码即用的体验，使用户可以在 4 个步骤内完成整个配置
- 适用于技术背景较少或没有技术背景的用户，轻松上手传感器数据
- 在简洁的用户界面中采集和查看数据
- 设置时间间隔：提升电池使用效率
- 设置阈值：聚焦于你需要采取行动的数据 - 即将上线
- 当数据超出安全范围时发送告警 - 即将上线

## 下载

SenseCraft App 提供 iOS 和 Android 两个版本。

[从 SenseCraft 官方下载中心下载 SenseCraft 应用](https://sensecraft.seeed.cc/en/download?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_data_app)。

## 账号

SenseCraft 支持设备配置和远程管理。要使用 SenseCraft Data Platform（原 SenseCAP Portal）和其他功能，请注册账号。

:::tip Note
请选择 `Global` 作为 Server Location。你也可以通过 <a href="https://sensecap.seeed.cc">SenseCraft Data Platform</a> 创建账号。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/login-page.PNG" alt="SenseCraft App account login screen" width={300} height="auto" /></p>

## 设备

- 在设备页面，你可以点击右上角的 `+` 添加新设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/add-new.png" alt="Add a new device in SenseCraft App" width={500} height="auto" /></p>

- 点击目标设备即可查看数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/data.png" alt="View device measurements in SenseCraft App" width={500} height="auto" /></p>

- 点击右上角的铃铛图标进入消息中心。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/message-center.png" alt="Open the SenseCraft App message center" width={500} height="auto" /></p>

## MALL

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/MAll.PNG" alt="SenseCraft App mall page" width={300} height="auto" /></p>

## 事件

添加事件以接收通知。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/add-event.PNG" alt="Create an event alert in SenseCraft App" width={300} height="auto" /></p>

1. 点击添加图标或 Add Event 按钮创建事件告警，在 Add Event 页面中通过 Conditions 添加条件选项，并点击 Add 按钮选择设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_2.png" alt="Select a device when creating an event" style={{width:1000, height:'auto'}}/></div>

2. 选择设备，选择测量类型，设置告警条件，选择大于或小于等条件，拖动进度条设置数值，点击下一步。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_3.png" alt="Configure an event measurement and threshold" style={{width:1000, height:'auto'}}/></div>

3. 在 Add Event 页面中配置恢复正常时的动作（设备恢复正常），选择是否发送通知，点击 Save，输入事件名称，点击 Submit 即可成功添加事件告警并返回事件列表。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_4.png" alt="Configure event recovery actions and notifications" style={{width:1000, height:'auto'}}/></div>

4. 在设备页面，点击消息中心查看告警消息，其中 Device warning 为设备触发告警推送消息，System notification 为系统消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_5.png" alt="View event notifications in the message center" style={{width:1000, height:'auto'}}/></div>

5. 点击告警消息，查看设备触发的条件项和推送的告警消息，点击可查看告警详情。返回告警列表后状态变为已读，点击编辑按钮选择消息，可以进行标记已读、删除等操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_6.png" alt="View and manage an event alarm message" style={{width:1000, height:'auto'}}/></div>

6. 切换到系统消息，点击查看系统推送消息详情。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_7.png" alt="View a system notification in SenseCraft App" style={{width:1000, height:'auto'}}/></div>

## 用户

账号详情和设置、App 版本等。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/user-page.PNG" alt="SenseCraft App user settings page" width={300} height="auto" /></p>

**删除账号**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/delete.png" alt="Delete a SenseCraft account" width={600} height="auto" /></p>

## 蓝牙配置

选择对应的产品进行快速绑定。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/configuration.png" alt="Select a device for Bluetooth configuration" width={500} height="auto" /></p>

## 模板

SenseCraft App 提供了一套模板功能，包括 **Add New Template、Import Template、Download Template 和 Apply Preset Template**，以简化并加速设备配置。这些功能可以高效帮助用户减少设置时间，并简化大规模部署。

### Add New Template

新增模板有两种方式。

**Method 1** <br />

1. 进入 `User` → `Device Bluetooth Configuration`。<br />
2. 点击右上角的 `Template` 按钮。<br />
3. 点击 `+` 图标 → `Add New Template`。<br />
4. 选择 Device Type。<br />
5. 根据你的需求配置模板参数。<br />
6. 点击 `Confirm` 保存模板。<br />
7. 返回 Template 页面，你可以看到 `Save successful`。<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/App_Template/add_new_template1.png" alt="Open the template page from Bluetooth configuration" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/App_Template/add_new_template2.png" alt="Add a new device configuration template" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/App_Template/add_new_template3.png" alt="Confirm a new device configuration template" width={300} height="auto" /></p>

**Method 2** <br />

1. 进入蓝牙配置模式并选择 `Advanced Configuration`。<br />
2. 进入 `Setting` 页面。<br />
3. 点击右上角的 `Template` 图标。<br />
4. 按需调整模板参数。<br />
5. 选择 `Save as Template`。<br />
6. 输入 Template Name。<br />
7. 点击 `Confirm` 保存。<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/App_Template/add_new_template4.png" alt="Save Bluetooth configuration settings as a template" width={800} height="auto" /></p>

### Download Template

1. 进入 `Template` 页面，选择你想要下载的模板。<br />
2. 点击右上角的三点菜单。<br />
3. 选择 `Download Template`。<br />
4. 将文件保存到你的移动设备存储中。<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/App_Template/downlaod_template.png" alt="Download a device configuration template" width={800} height="auto" /></p>

### Import Template

1. 进入 `User` → `Device Bluetooth Configuration`。<br />
2. 点击右上角的 `Template`。<br />
3. 在 Template 页面，点击 `+` 图标。<br />
4. 选择 `Import Template`。<br />
5. 点击 `file` 图标。<br />
6. 在系统文件管理器中，选择扩展名为 `“.seeed”` 的配置文件。<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/App_Template/import_template.png" alt="Import a Seeed device configuration template" width={800} height="auto" /></p>

### Apply Preset Template

1. 进入设备的蓝牙配置模式并选择 `Advanced Configuration`。<br />
2. 打开 `Settings` 页面并点击右上角的 `Template` 图标。<br />
3. 选择 `Choose Template`。<br />
4. 在 Preset Template 页面中选择所需模板。<br />
5. 返回 Settings 页面并点击 `Send` 以应用配置。<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/App_Template/apply_template.png" alt="Choose a preset device configuration template" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/App_Template/apply_template2.png" alt="Apply a preset template to a device" width={600} height="auto" /></p>
