---
description: reTerminal E1004 是一款 13.3 英寸开源全彩电子纸显示屏，由 ESP32-S3 驱动，采用 E Ink® Spectra™ 6 技术，并支持 SenseCraft HMI。
title: reTerminal E1004 入门指南
sidebar_position: 5
keywords:
  - reTerminal E1004
  - 电子纸显示屏
  - ESP32-S3
  - SenseCraft HMI
  - E Ink Spectra 6
  - 智能家居仪表盘
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg
slug: /getting_started_with_reterminal_e1004
sku: 100064156
last_update:
  date: 1/28/2026
  author: Allen
createdAt: '2026-01-29'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1004/
---

# reTerminal E1004 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg" style={{width:1000, height:'auto'}}/></div>

## 介绍

reTerminal E1004 是一款 13.3 英寸开源全彩电子纸显示屏，单次充电电池续航最长可达 6 个月。其由 ESP32-S3 驱动，原生支持我们的 SenseCraft HMI 零代码 UI 平台，可轻松创建仪表盘，同时也支持 Home Assistant、Arduino 和 ESP-IDF 进行进一步开发。凭借 E Ink® Spectra™ 6 全彩电子纸显示技术，它非常适合作为数码相框、多彩仪表盘可视化设备。

### 特性

- **高清彩色显示：** 13.3 英寸 E Ink® Spectra™ 6 全彩电子纸显示屏，分辨率高达 1200x1600 像素。
- **强大处理能力：** 由 ESP32-S3 驱动，配备 8MB PSRAM 和 32MB Flash，性能强劲。
- **超低功耗：** 内置 5000mAh 电池，单次充电可支持最长 6 个月使用（每 6 小时刷新一次）。
- **零代码 UI 开发：** 默认固件支持 SenseCraft HMI，可通过拖拽方式创建仪表盘，并支持 AI 辅助设计。
- **广泛兼容性：** 支持 Home Assistant（ESPHome）、Arduino、PlatformIO 和 ESP-IDF。
- **丰富连接性：** 集成 2.4GHz Wi-Fi（802.11 b/g/n）和 Bluetooth 5.0。
- **集成传感器与音频：** 内置温湿度传感器和用于告警的蜂鸣器。
- **开箱即用的存储：** 随机附带 16GB Micro SD 卡（最高支持 32GB）。

## 规格参数

| 项目 | 描述 |
| :--- | :--- |
| **产品名称** | reTerminal E1004 |
| **处理器** | ESP32-S3，带 8MB PSRAM |
| **存储** | 32MB Flash，支持 Micro SD 卡（最高 32GB，内含 16GB） |
| **显示屏** | 13.3" Spectra™ 6 全彩电子纸 |
| **分辨率** | 1200 x 1600 像素 |
| **无线连接** | 2.4GHz 802.11 b/g/n Wi-Fi，Bluetooth 5.0 |
| **传感器** | 温度、湿度传感器 |
| **音频** | 蜂鸣器（声音告警） |
| **电池** | 5000mAh |
| **电源输入** | USB-C 5V/1A |
| **软件支持** | SenseCraft HMI（默认）、ESPHome、Arduino、PlatformIO、ESP-IDF |
| **工作温度** | 0-40°C |
| **尺寸** | 376mm x 311mm x 40mm |

## 应用场景

- **低功耗电子相框：** 以纸张般的显示效果呈现高分辨率家庭照片或艺术作品，无需担心每日充电。
- **家庭信息板：** 以时尚、常显的形式展示日历、通知、天气和新闻。
- **家庭自动化仪表盘：** 通过 Home Assistant 可视化实时智能家居数据（温度、湿度、空气质量）。
- **智能办公显示：** 显示会议室日程、使用状态或指引信息。
- **零售与公共标牌：** 用于菜单、时刻表或占用状态指示的节能显示方案。
- **教育与原型开发：** 学习物联网、嵌入式系统和 UI 设计的理想平台。

## 硬件概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/specification.jpg" style={{width:1000, height:'auto'}}/></div>

1. **上下翻页按键：** 用于导航和翻页。
2. **屏幕刷新按键：** 用于手动刷新电子墨水屏。
3. **红色电源指示灯：** 指示设备的电源状态。
4. **USB-C 数据与充电接口：** 用于给设备充电和进行数据传输。
5. **电源开关：** 用于打开或关闭设备电源。
6. **绿色状态指示灯：** 指示当前运行状态或系统状态。
7. **Boot：** 用于系统启动或进入启动模式。
8. **Reset：** 用于重置硬件组件。
9. **扩展接口：** 用于连接外部扩展模块或外设。
10. **支架安装螺丝：** 用于将设备固定在支架上。
11. **金属支架：** 为设备提供物理支撑和稳定性。

## 搭配 SenseCraft HMI 使用入门

reTerminal E1004 预装了支持 **SenseCraft HMI** 的固件，这是一个零代码平台，可让你轻松设计并部署个性化仪表盘。

### 步骤 1. 开机与网络配置

1. 打开 **电源按键** 以启动 reTerminal E1004。
2. 使用你的智能手机连接到设备的热点（AP 模式），以配置 Wi-Fi 凭据。
3. 屏幕会显示一个“Network Configuration”二维码，或者在浏览器中打开 192.168.4.1 页面。
4. 连接到互联网后，设备会显示 **Device Code** 或 **Binding QR Code**。

<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/4.jpg" style={{ width: '49%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/code2.jpg" style={{ width: '49%', height: 'auto' }} />
</div>
### 步骤 2. 绑定设备

1. 在电脑浏览器中访问 [SenseCraft HMI Platform](https://sensecraft.seeed.cc/)。
2. 登录你的账号（如果没有账号，请先创建）。
3. 进入 **Device Management** 部分并点击 **Add Device**。
4. 输入显示在 reTerminal E1004 屏幕上的 **Device Code** 以完成绑定流程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/12.jpg" style={{width:1000, height:'auto'}}/></div>

### 步骤 3. 在平台上创建内容

1. 进入 **Home Page**，选择你想要的模板，或进入 **Wrokspace** 从零开始创建你的作品。
2. [如果你有疑问，请点击此链接了解如何使用 HMI Platform。](https://sensecraft-hmi-docs.seeed.cc/en/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2.jpg" style={{width:1000, height:'auto'}}/></div>

### 步骤 4. 将内容部署到设备

1. 当你的设计完成后，点击 **Preview** 按钮预览效果。
2. 点击 **Save** 或 **deploy** 按钮。
3. 从列表中选择你已绑定的 reTerminal E1004。
4. 平台会通过 Wi-Fi 将数据发送到你的设备，电子纸屏幕会刷新以显示你的新仪表盘。

:::note
由于 E Ink 技术的特性，屏幕刷新可能需要几秒钟才能完全更新图像并清除残影。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/10.jpg" style={{width:1000, height:'auto'}}/></div>

## 资源

- [reTerminal E1004 原理图 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004523_reTerminal%20E1004_V1.0_SCH_260105.pdf)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
