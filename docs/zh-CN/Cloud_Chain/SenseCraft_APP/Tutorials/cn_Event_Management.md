---
sidebar_position: 1
description: SenseCraft App Event Version 2.9.0 User Manual
title: 事件管理
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/sensecraft-app/tutorials/event-management
aliases:
  - /cn/sensecap_mate_app_event
last_update:
  date: 03/20/2023
  author: Matthew
---

# SenseCraft App 中的事件管理

## 事件功能

SenseCraft App 版本 2.9.0 引入了新的事件报警功能，允许用户创建事件并设置设备触发条件。当设备满足这些条件时，报警消息将推送给用户。设备页面现在包含一个新的消息中心功能，您可以在其中查看设备触发的报警消息和系统通知，实现实时警报、远程监控和远程管理。

### 安装 SenseCraft App V2.9.0

- 在 SenseCraft App 中登录您的账户并导航到事件页面
- 按照以下步骤配置事件警报：

#### 步骤 1：创建事件警报

点击添加图标或"添加事件"按钮来创建事件警报。在添加事件页面，转到条件部分添加条件选项，然后点击添加按钮选择设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_2.png" style={{width:1000, height:'auto'}}/></div>

#### 步骤 2：配置设备和条件

选择设备并选择测量类型。通过选择"大于"或"小于"等选项设置报警条件，然后拖动进度条设置阈值。点击"下一步"继续。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_3.png" style={{width:1000, height:'auto'}}/></div>

#### 步骤 3：设置恢复操作

在添加事件页面，为设备恢复正常条件时配置"恢复正常操作"。选择是否发送通知，然后点击"保存"。输入事件名称并点击"提交"以成功添加事件警报并返回事件列表。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_4.png" style={{width:1000, height:'auto'}}/></div>

#### 步骤 4：查看报警消息

在设备页面，点击"消息中心"查看报警消息。这显示两种类型的消息：

- **设备警告**：设备触发的报警通知
- **系统通知**：系统消息

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_5.png" style={{width:1000, height:'auto'}}/></div>

#### 步骤 5：管理报警消息

当设备触发配置的条件时，点击报警消息查看详细信息。查看后，返回报警列表，状态变为"已读"。点击编辑按钮选择消息进行各种操作，如标记为已读或删除。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_6.png" style={{width:1000, height:'auto'}}/></div>

#### 步骤 6：查看系统消息

导航到系统消息并点击查看详细的系统通知。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_7.png" style={{width:1000, height:'auto'}}/></div>
