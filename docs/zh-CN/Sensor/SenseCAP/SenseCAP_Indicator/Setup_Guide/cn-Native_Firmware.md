---
description: Get Started with SenseCAP Indicator Native Firmware
title: Native Firmware
keywords:
- SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_Native_Firmware
sidebar_position: 1
last_update:
  date: 3/3/2024
  author: DuKaiyin
---

# **Native Firmware**



SenseCAP Indicator D1S和D1Pro版本内置tVOC和CO2传感器，以及外部的Grove TH传感器用于准确的数据读取。SenseCAP本机固件提供了空气质量检测器界面，显示传感器数据。对于不包含传感器的D1和D1L版本，数据页面将显示N/A。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_8.png"/></div>

在设置页面配置 SenseCAP Indicator 的简单步骤

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/setting.png"/></div>

## **Wi-Fi 设置**

选择Wi-Fi名称，输入密码并连接。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_9.png"/></div>

一旦看到绿色的Wi-Fi图标，您就设置好了。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_10.png"/></div>

## **显示设置**

- **亮度**: 调整屏幕亮度。
- **睡眠模式**: 根据您设置的间隔关闭屏幕。在睡眠模式下，屏幕关闭，不显示任何内容。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_15.png"/></div>

## **日期和时间设置**

- **时间格式:** 您可以设置为24小时制或12小时制
- **时间自动更新/时区自动更新**: 当设备连接到WiFi时，它将自动获取相应的时区和日期。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_16.png"/></div>

**手动设置**: 如果通过时区获取的时间无法自动识别夏令时，或者设备离线，则可以手动设置时区。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_17.png"/></div>

## **传感器数据**

我们提供四个不同版本：D1、D1S、D1L和D1Pro。每个版本都设计用于满足不同的应用需求，而无需支付不必要的硬件成本。以下是各版本之间的区别：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/version.png"/></div>


该设备的固件有两个页面，分别显示tVOC、CO2、温度和湿度的数据。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_12.png"/></div>

:::caution **注意:**
所有版本的SenseCAP Indicator的本机固件UI保持一致。对于没有嵌入传感器的D1和D1L版本，传感器数据将显示为'N/A'。您可以连接其他Grove传感器并创建自己定制的UI。
:::

点击指定的传感器进入详细信息页面，您可以选择显示过去24小时或一周的数值。数据将在一周内保留。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_13.png"/></div>

:::
提示 寻找ChatGPT x DALL·E？
前往[SenseCAP Indicator X OpenAI](/SenseCAP_Indicator_OpenAI_X_Overview)
:::
