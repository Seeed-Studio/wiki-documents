---
sidebar_position: 1
title: 概述
description: SenseCraft Data Platform 快速入门指南——使用安全可靠的云平台管理 SenseCAP 设备并可视化传感器数据。
keywords:
  - Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cloud/sensecraft-data/sensecraft-data-platform/overview
aliases:
  - /Cloud_Chain/SenseCAP_Portal/QuickStart
last_update:
  date: 06/06/2025
  author: Matthew
createdAt: '2023-03-01'
updatedAt: '2025-07-10'
url: https://wiki.seeedstudio.com/cn/cloud/sensecraft-data/sensecraft-data-platform/overview/
---

# SenseCraft Data Platform 快速入门

:::tip
**注意：**  
自 2025 年起，**SenseCAP Portal** 已正式更名为 **SenseCraft Data Platform**。功能保持不变，并将持续增强，以更好地支持 AIoT 和多传感器场景。
:::

如何使用 SenseCraft Data Platform？让我们开始吧！

## 介绍

SenseCraft Data Platform 的主要功能是管理 SenseCAP 设备并存储数据。它构建在微软安全可靠的云服务 Azure 之上。你可以申请一个账号，并将所有设备绑定到该账号。SenseCraft 提供 Web 平台和 API。Web 平台包括仪表盘、设备管理、数据管理和访问密钥管理，而 API 对用户开放以便进行进一步开发。

## 网站

- 全球站点：<a href="https://sensecap.seeed.cc/">https://sensecap.seeed.cc</a>

## 创建新账号

① 选择“Register Account”，输入邮箱信息并点击“Register”。一封注册邮件将发送到你的邮箱。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-1.jpg)

② 打开 "SenseCAP..." 或 "SenseCraft…" 邮件，点击链接，填写相关信息并完成注册。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-2.jpg)

③ 返回登录界面并完成登录。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-3.jpg)

:::note
如果找不到邮件，可能被自动识别为“垃圾邮件”并放入“垃圾箱”。<br />
如果登录时忘记密码，可以通过邮箱找回。
:::

## 下载 SenseCAP App

安装 `SenseCraft App` 并登录。

- Android：在<a href="http://sensecap-app-download.seeed.cn/">Download App</a>这里下载，并扫描二维码。
- iOS：在 App Store 中搜索 “SenseCraft”。

## 绑定设备

每个 SenseCAP 设备的外壳上都有一个标签，如下图所示。EUI 是 SenseCAP 设备的唯一编码。Key 是加密字段，可以忽略。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/label.jpg)


在 SenseCAP App 主页面，点击“Bind”按钮，然后扫描二维码以绑定设备。

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Overview/SenseCAP-Platform-overview1.png" /></div>

在 SenseCAP Platform 上，进入 Dashboard 页面并点击 **Bind Device**。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Overview/SenseCAP-Platform-overview2.png" /></div>

输入设备 EUI 和 KEY 完成绑定。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Overview/SenseCAP-Platform-overview3.png" /></div>

## 查看数据

登录 `SenseCraft Data Platform`，在 “Device/Sensor Node” 部分查看设备状态和基本信息，在 “Data/Table” 部分查看传感器数据。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Overview/SenseCAP-Platform-overview4.png" /></div>
