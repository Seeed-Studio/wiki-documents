---
description: reTerminal E1004 是一款 13.3 英寸开源全彩 ePaper 显示器，由 ESP32-S3 驱动，具有 E Ink® Spectra™ 6 技术和 SenseCraft HMI 支持。
title: reTerminal E1004 入门指南
sidebar_position: 4
keywords:
  - reTerminal E1004
  - ePaper Display
  - ESP32-S3
  - SenseCraft HMI
  - E Ink Spectra 6
  - Smart Home Dashboard
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.webp
slug: /cn/getting_started_with_reterminal_e1004
sku: 100064156
last_update:
  date: 1/28/2026
  author: Allen
---

# reTerminal E1004 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg" style={{width:1000, height:'auto'}}/></div>

## 简介

reTerminal E1004 是一款 13.3 英寸开源全彩 ePaper 显示器，电池续航可达 3 个月。由 ESP32-S3 驱动，原生支持我们的 SenseCraft HMI 无代码 UI 平台，可轻松创建仪表板，同时支持 Home Assistant、Arduino 和 ESP-IDF 进行进一步开发。配备 E Ink® Spectra™ 6 全彩 ePaper 显示屏，非常适合数字相框和彩色仪表板可视化。

### 特性

-   **高清彩色显示：** 13.3 英寸 E Ink® Spectra™ 6 全彩 ePaper 显示屏，分辨率高达 1200x1600 像素。
-   **强大处理能力：** 由 ESP32-S3 驱动，配备 8MB PSRAM 和 32MB Flash，性能强劲。
-   **超低功耗：** 内置 5000mAh 电池，单次充电可支持长达 3 个月的使用（深度睡眠模式）。
-   **无代码 UI 开发：** 默认固件支持 SenseCraft HMI，可拖拽创建仪表板并提供 AI 辅助设计。
-   **广泛兼容性：** 支持 Home Assistant (ESPHome)、Arduino、PlatformIO 和 ESP-IDF。
-   **丰富连接性：** 集成 2.4GHz Wi-Fi (802.11 b/g/n) 和蓝牙 5.0。
-   **集成传感器和音频：** 内置温湿度传感器、用于警报的蜂鸣器，以及为未来语音应用预留的麦克风。
-   **即用存储：** 包含 16GB Micro SD 卡（支持最大 32GB）。

## 规格参数

| 项目 | 描述 |
| :--- | :--- |
| **产品名称** | reTerminal E1004 |
| **处理器** | ESP32-S3 配备 8MB PSRAM |
| **存储** | 32MB Flash，支持 Micro SD 卡（最大 32GB，包含 16GB） |
| **显示屏** | 13.3" Spectra™ 6 全彩 ePaper |
| **分辨率** | 1200 x 1600 像素 |
| **无线连接** | 2.4GHz 802.11 b/g/n Wi-Fi，蓝牙 5.0 |
| **传感器** | 温度、湿度传感器 |
| **音频** | 蜂鸣器（声音警报），麦克风（预留） |
| **电池** | 5000mAh |
| **电源输入** | USB-C 5V/1A |
| **软件支持** | SenseCraft HMI（默认）、ESPHome、Arduino、PlatformIO、ESP-IDF |
| **工作温度** | 0-40°C |
| **尺寸** | 376mm x 311mm x 40mm |

## 应用场景

-   **低功耗电子相框：** 以纸质般的质量显示高分辨率家庭照片或艺术作品，无需担心每日充电。
-   **家庭信息板：** 以时尚、常亮的格式跟踪日历、通知、天气和新闻。
-   **家庭自动化仪表板：** 通过 Home Assistant 可视化实时智能家居数据（温度、湿度、空气质量）。
-   **智能办公显示：** 显示会议室日程、可用性或方向指引。
-   **零售和公共标牌：** 节能菜单、时间表或占用指示器。
-   **教育和原型制作：** 学习物联网、嵌入式系统和 UI 设计的理想平台。

## 硬件概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/specification.jpg" style={{width:1000, height:'auto'}}/></div>

1. **上下翻页按钮：** 用于导航和翻页。
2. **屏幕刷新按钮：** 用于手动刷新 E-ink 显示屏。
3. **红色电源 LED：** 指示设备的电源状态。
4. **USB-C 数据和充电端口：** 用于设备充电和数据传输。
5. **电源开关：** 用于开启或关闭设备电源。
6. **绿色状态 LED：** 指示当前操作或系统状态。
7. **Boot：** 用于系统启动或进入启动模式。
8. **Reset：** 用于重置硬件组件。
9. **扩展端口：** 用于连接外部扩展模块或外设。
10. **支架安装螺丝：** 用于将设备固定到支架上。
11. **金属支架：** 为设备提供物理支撑和稳定性。

## SenseCraft HMI 入门

reTerminal E1004 预装了支持 **SenseCraft HMI** 的固件，这是一个无代码平台，允许您轻松设计和部署个性化仪表板。

### 步骤 1. 开机和网络配置

1.  打开**电源按钮**以启动 reTerminal E1004。
2.  使用您的智能手机连接到设备的热点（AP 模式）以配置 Wi-Fi 凭据。
3.  屏幕将显示"网络配置"二维码或使用浏览器打开 192.168.4.1 页面。
4.  连接到互联网后，设备将显示**设备代码**或**绑定二维码**。

<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/4.jpg" style={{ width: '49%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/code2.jpg" style={{ width: '49%', height: 'auto' }} />
</div>
### 步骤 2. 绑定设备

1.  在您的计算机浏览器中访问 [SenseCraft HMI 平台](https://sensecraft.seeed.cc/)。
2.  登录您的账户（如果没有账户请先创建）。
3.  导航到**设备管理**部分并点击**添加设备**。
4.  输入您的 reTerminal E1004 屏幕上显示的**设备代码**以完成绑定过程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/12.jpg" style={{width:1000, height:'auto'}}/></div>

### 步骤 3. 在平台上创建内容

1.  转到**主页**选择您想要的模板或**工作区**从头开始创建您的作品。
2.  [如果您有疑问，请点击此链接了解如何使用 HMI 平台。](https://sensecraft-hmi-docs.seeed.cc/en/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2.jpg" style={{width:1000, height:'auto'}}/></div>

### 步骤 4. 将内容部署到设备

1.  设计完成后，点击**预览**按钮查看效果。
2.  点击**保存**或**部署**按钮。
3.  从列表中选择您绑定的 reTerminal E1004。
4.  平台将通过 Wi-Fi 将数据发送到您的设备。ePaper 屏幕将刷新以显示您的新仪表板。

:::note
由于 E Ink 技术的特性，屏幕刷新可能需要几秒钟才能完全更新图像并清除任何残影。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/10.jpg" style={{width:1000, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>