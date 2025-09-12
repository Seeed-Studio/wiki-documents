---
description: 使用 SenseCAP Watcher Agent 的 Web 控制面板指南
title: Web 控制面板(β)
sidebar_position: 3
keywords:
- SenseCAP
- Watcher
- Web Control Panel
- Agent Configuration
- Device Management
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /cn/watcher_web_control_panel
last_update:
  date: 2025/08/20
  author: Twelve
---

# Web 控制面板 Beta 指南

## 概述

SenseCAP Watcher Web 控制面板（Beta）提供了一个基于 Web 的界面，用于管理您的 Watcher 设备并配置其 Agent 设置。此 Beta 版本包含设备管理和 Agent 自定义的基本功能。

## 当前功能

Web 控制面板的 Beta 版本包含以下关键功能：

1. 设备绑定
2. Agent 配置
3. LLM 模型选择
4. 聊天历史管理
5. 设备信息显示

## 设备绑定

### 绑定流程
1. 进入 [SenseCraft AI 平台](https://sensecraft.seeed.cc/ai/home)
2. 要访问控制面板，请点击页面右上角的 Watcher Agent。
   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/navigate.jpg" style={{width:800, height:'auto'}}/></div>
3. 点击"绑定设备"按钮
   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/page1.jpg" style={{width:300, height:'auto'}}/></div> 
4. 按照屏幕上的说明，输入设备上显示的 6 位验证码


<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/activation.jpg" style={{width:300, height:'auto'}}/></div> 

## Agent 配置

   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/agent%20conf.jpg" style={{width:300, height:'auto'}}/></div> 

### 角色模板
- 我们提供预设模板，您也可以创建自己的模板或在预设模板基础上进行修改。

### 助手昵称
- 自定义您的 Agent 名称。
:::note
此功能不会更改 Agent 的唤醒词。
Agent 唤醒词只能在编译固件时修改。
默认唤醒词是"Jarvis"。
:::


### 角色语音
- 选择不同的语音

### 角色介绍/提示词
1. 从预定义的角色模板中选择
2. 创建自定义角色模板
3. 修改现有模板
:::note
上面设置的助手昵称只有在角色介绍中添加 `assistant nickname` 时才会生效。
要获取当前时间，您需要添加：__DATE__
:::


### 查看历史记录
- 访问聊天日志
- 查看单个消息
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/history%20del.jpg" style={{width:600, height:'auto'}}/></div> 

## 设备信息

   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/device%20list.jpg" style={{width:800, height:'auto'}}/></div> 

控制面板显示基本设备信息，包括：

- 板卡名称
- MAC 地址
- APP 版本
- 最后连接时间
- 自动升级开关
- 操作

:::note
这是 Web 控制面板的 Beta 版本，功能可能会在未来版本中更新或更改。请定期检查更新以获取最新功能。
:::

## 技术支持

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>