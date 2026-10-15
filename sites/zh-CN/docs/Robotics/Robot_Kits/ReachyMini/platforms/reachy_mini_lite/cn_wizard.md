---
description: 使用Dynamixel Wizard 2.0软件读取电机参数以诊断和配置Reachy Mini Lite电机的指南。
title: 使用Dynamixel Wizard读取电机参数
slug: /reachymini_platforms_reachy_mini_lite_wizard
keywords:
  - dynamixel wizard
  - motor parameters
  - diagnosis
  - configuration
  - usb connection
  - scan
  - read
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-18'
url: https://wiki.seeedstudio.com/cn/reachymini_platforms_reachy_mini_lite_wizard/
---

# 如何使用Dynamixel Wizard读取电机参数

## 安装Dynamixel Wizard
您可以从以下链接下载Dynamixel Wizard：
- [Dynamixel Wizard](https://emanual.robotis.com/docs/en/software/dynamixel/dynamixel_wizard2/)

## 连接到Reachy Mini Lite
1. 使用提供的电源适配器打开Reachy Mini Lite的电源。
2. 使用USB-C电缆将您的计算机连接到Reachy Mini Lite。
3. 打开Dynamixel Wizard应用程序。
4. 点击"连接按钮"旁边的"选项"，然后转到"扫描"标签，并检查以下信息以便能够检测所有电机。
    - 协议版本：2.0
    - 波特率：1000000
    - 端口：为您的USB连接选择适当的端口（例如Windows上的COM3或Linux/Mac上的/dev/ttyUSB0）。

![Dynamixel_Wizard_Scan_Settings](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/scan_parameters.png)

5. 点击"扫描"按钮检测所有连接的电机。向导将显示检测到的电机列表及其ID。

## 读取电机参数
1. 从检测到的电机列表中选择一个电机。
2. 勾选您想要读取的参数（例如：当前位置、当前速度、当前负载等）

![Dynamixel_Wizard_Read_Settings](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/wizard_parameters.png)