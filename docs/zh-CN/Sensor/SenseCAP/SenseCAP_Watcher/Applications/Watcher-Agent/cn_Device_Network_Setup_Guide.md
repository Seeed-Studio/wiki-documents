---
description: 本指南将帮助您为 SenseCAP Watcher Agent 设置和配置网络连接
title: 设备网络设置指南
sidebar_position: 2
keywords:
  - SenseCAP
  - Watcher Agent
  - Network Setup
  - IoT Configuration
  - WiFi Configuration
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /cn/device_network_setup
last_update:
  date: 10/13/2025
  author: Twelve
---

# 设备网络设置指南

本文档将指导您完成 SenseCAP Watcher Agent 的网络配置过程。按照这些步骤，您可以轻松地将设备连接到网络并开始使用。

## 前提条件

在开始配置之前，请确保您具备以下条件：

- 已安装 Agent 固件的 SenseCAP Watcher
- 可用的 2.4GHz Wi-Fi 网络（除了需要二次认证的网络，例如企业网络）
- 用于配置的移动设备或计算机

## 网络配置步骤

### 初始设置

步骤 1. 为设备通电
- 将设备连接到电源，或按住右上角的滚轮按钮 5 秒钟然后松开。
:::tip 注意
如果在刷写固件后立即开始配置，请使用针轻轻按下复位按钮。
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:200, height:'auto'}}/></div>
:::
- 设备将开机并进入 Wi-Fi 配置模式



### WiFi 配置

步骤 1. 连接到设备热点
- 在您的移动设备或计算机上，查找名为"Watcher-XXXX"的 WiFi 网络
- 连接到此网络
- 等待几秒钟以建立连接
- 配置界面应该会在您的浏览器中自动打开
:::note
如果配置页面没有自动打开，请确保您仍然连接到"Watcher-XXXX"网络，并在网络浏览器中手动导航到 `http://192.168.4.1`。
:::

步骤 2. 配置 WiFi 连接
- 等待大约 5 秒钟以完成 WiFi 扫描
- 从可用的 2.4GHz 网络列表中，选择您的家庭 Wi-Fi 网络
- SSID 将自动填入
- 输入所选 WiFi 网络的密码
- 点击"连接"按钮提交

:::note
仅支持 2.4GHz 网络
如果使用 iPhone 热点，请启用"最大兼容性"选项
WiFi 扫描页面可能需要大约 5 秒钟加载 - 请不要关闭或取消页面
:::

步骤 3. 完成连接过程
- 如果 WiFi 凭据正确，设备将自动连接
- 将出现绿色对勾，表示网络配置成功
- 设备将在 3 秒后自动重启
- 重启后，设备将自动连接到配置的 WiFi 网络

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/wifi%20done.jpeg" style={{width:500, height:'auto'}}/></div> 


### 设备注册

步骤 1. 设备显示验证码
- 听取/查看 6 位数验证码
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/activation.jpg" style={{width:300, height:'auto'}}/></div> 

步骤 2. 注册设备
- 访问 [小智AI 官方平台](https://xiaozhi.me)
- 根据此 [WiKi](https://wiki.seeedstudio.com/cn/watcher_web_control_panel/) 配置您的 Agent

### 基本操作

1. 开机
   - 按住滚轮 3-5 秒钟，然后松开

2. 关机
   - 拔掉电源
   - 按住滚轮 3 秒钟，然后松开

3. 重启
   - 使用针轻轻按下复位按钮

4. 恢复出厂设置
   - 按住滚轮 10 秒钟

5. 重新进入网络配置模式
   - 当设备显示"扫描 Wi-Fi"状态时
   - 按一次滚轮
   - 设备将重新进入网络配置模式

6. 唤醒词
   - 设备待命时，可通过“你好小智”唤醒词唤醒设备。 

## 故障排除

如果您遇到连接问题：

1. 常见问题
   - 仔细检查 Wi-Fi 名称和密码
   - 确保您连接的是 2.4GHz 网络


## 常见问题

**问：为什么找不到 Watcher-XXXX 网络？**

答：尝试使用针轻轻按下复位按钮重新启动设备并进入配置模式。
如果您之前已配对到网络，请重启设备并在设备显示"扫描 Wi-Fi"时按一次滚轮以重新进入配对模式

**问：如果配置页面没有自动加载，我应该怎么办？**

答：在连接到 Watcher-XXXX 网络时，在网络浏览器中手动导航到 `http://192.168.4.1`。

**问:如何接入其他Wi-Fi网络？**

答：开机显示“扫描Wi-Fi”时按下滚轮，即可进入配网模式。已配置网络会保存。

## 技术支持

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>