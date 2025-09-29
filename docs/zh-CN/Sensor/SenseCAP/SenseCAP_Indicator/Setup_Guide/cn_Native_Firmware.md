---
description: 开始使用 SenseCAP Indicator 原生固件
title: 原生固件
keywords:
- SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_Native_Firmware
sidebar_position: 1
last_update:
  date: 11/16/2023
  author: Spencer
---

# **原生固件**

SenseCAP Indicator D1S 和 D1Pro 版本内置了 tVOC 和 CO2 传感器，以及一个外部 Grove 温湿度传感器用于精确的数据读取。SenseCAP 原生固件提供空气质量检测器 UI 来显示传感器数据。对于不包含传感器的 D1 和 D1L 版本，数据页面将显示 N/A。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_8.png"/></div>

在设置页面配置 SenseCAP Indicator 的简单步骤。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/setting.png"/></div>

## **Wi-Fi 设置**

选择 Wi-Fi 名称并输入密码进行连接。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_9.png"/></div>
一旦您看到绿色的 Wi-Fi 图标，就表示设置完成了。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_10.png"/></div>

## **显示设置**

- **亮度**：调整屏幕亮度。
- **睡眠模式**：根据您设置的间隔时间关闭屏幕。在睡眠模式下，屏幕关闭且不显示任何内容。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_15.png"/></div>

## **日期和时间设置**

- **时间格式：** 您可以设置 24 小时或 12 小时格式。
- **时间自动更新/时区自动更新**：当设备连接到 WiFi 时，它将自动获取相应的时区和日期。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_16.png"/></div>

**手动设置**：如果通过时区获取的时间无法自动识别冬令时或设备离线，那么您可以手动设置时区

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_17.png"/></div>

## **传感器数据**

我们提供四个不同版本：D1、D1S、D1L 和 D1Pro。每个版本都旨在满足不同的应用需求，而不会因不必要的硬件产生额外成本。以下是各版本之间的差异：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/version.png"/></div>

设备固件有两个页面显示 tVOC、CO2、温度和湿度数据。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_12.png"/></div>

:::caution **注意：**
SenseCAP Indicator 所有版本的原生固件 UI 保持相同。对于没有内置传感器的 D1 和 D1L 版本，传感器数据将显示 'N/A'。您可以连接其他 Grove 传感器并创建自己的定制 UI。
:::

点击指定传感器进入详细信息页面，您可以选择显示过去 24 小时或一周的数值。数据将保存一周内。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_13.png"/></div>

:::tip 寻找 ChatGPT x DALL·E？
前往 [SenseCAP Indicator X OpenAI](/cn/SenseCAP_Indicator_OpenAI_X_Overview)
:::