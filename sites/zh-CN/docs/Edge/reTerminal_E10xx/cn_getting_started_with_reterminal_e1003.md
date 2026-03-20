---
description: reTerminal E1003 是一款支持触控的 10.3 英寸开源黑白电子纸显示屏，具备 16 级灰度和 1404×1872 像素高分辨率，电池续航最长可达 6 个月。
sku: 100090602
title: reTerminal E1003 入门指南
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.webp
slug: /getting_started_with_reterminal_e1003
last_update:
  date: 3/19/2026
  author: Jackson.Li
---

# reTerminal E1003 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=e1003" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 介绍

reTerminal E1003 是一款支持触控的 10.3 英寸开源黑白电子纸显示屏，具备 16 级灰度和 1404×1872 像素高分辨率，电池续航最长可达 6 个月。其由 ESP32-S3 提供算力，原生支持我们的 SenseCraft HMI 零代码 UI 平台，可轻松创建仪表盘，同时也支持 Home Assistant（通过 ESPHome 与 Open Display）、Arduino、PlatformIO 等进行进一步开发。无论是智能家居仪表盘可视化与控制、办公信息显示，还是教育项目，这款开箱即用的触控设备都能提供出色的显示效果和灵活的自定义能力，满足你的各种需求。

## 特性

- **最高 16 级灰度清晰度：** 拥有 16 级精细灰度，文本和图形的每一个细节都能被极为清晰锐利地呈现。
- **超低功耗：** 电子纸仅在刷新时消耗电能，从而实现更长的电池续航和更高的能效。
- **SenseCraft HMI 支持：** reTerminal E 系列显示屏在默认固件中支持 SenseCraft HMI。
- **广泛的应用场景：** 通过 TTL 并行接口（多线、高吞吐）支持高速刷新和低延迟更新——是智能家居控制面板的理想选择。
- **高分辨率触控电子纸显示屏：** 10.3 英寸 1404×1872 黑白电子纸显示屏配备内置响应式触摸屏，实现直观的全屏交互。
- **适配多种装饰需求：** 无需布线，使用更自由；支持壁挂和桌面放置，并可灵活切换横屏与竖屏方向。

:::note
SenseCraft HMI 平台目前处于测试试用阶段，功能将持续完善。目前对 AI 生成和 UI 生成的次数有一定限制。SenseCraft HMI 画布未来将逐步支持触控交互设置，敬请期待。
:::

## 规格参数

| 项目 | 描述 |
| :--- | :--- |
| **产品名称** | reTerminal E1003 |
| **处理器** | ESP32-S3，带 8MB PSRAM |
| **存储** | 32MB Flash，支持 Micro SD 卡 |
| **显示** | 10.3" 黑白 / 16 级灰度 |
| **分辨率** | 1404x1872 像素 |
| **Micro SD 卡** | 最大支持 32GB SD 卡，FAT32 格式 |
| **无线连接** | 2.4GHz 802.11 b/g/n Wi-Fi，Bluetooth 5.0 |
| **传感器** | 温度、湿度传感器 |
| **麦克风** | 预留，用于语音交互应用 |
| **音频** | 蜂鸣器，用于声音提醒 |
| **电池** | 3000mAh |
| **电源输入** | USB-C 5V/1A |
| **软件支持** | 默认固件支持 SenseCraft HMI(https://sensecraft.seeed.cc/hmi/)<br />支持 Arduino/PlatformIO 开发平台 |
| **工作温度** | 0-40°C |
| **尺寸** | 224mm*187mm*18.6mm |

## 硬件概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2.jpg" style={{width:1000, height:'auto'}}/></div>

1. **屏幕刷新按键**
2. **翻页按键（上一页 / 下一页）**
3. **Wi-Fi 天线区域**
4. **MicroSD 卡 / TF 卡接口**
5. **电源开关**
6. **红色电源指示灯**
7. **绿色状态指示灯**
8. **USB-C 数据与充电接口**
9. **扩展接口**
10. **支架安装螺丝孔**
11. **支架**
12. **支架安装螺丝**

## 应用场景

- **家庭自动化仪表盘：** 通过 Home Assistant 显示温度、湿度、空气质量等智能家居实时数据。
- **低功耗黑白电子相框：** 借助 SenseCraft HMI 或 App，你可以轻松在网上远程上传相册中的一系列照片。配合大尺寸、高分辨率的黑白电子墨水屏，实现超低功耗的图像显示，再也不用担心电池续航。
- **智能办公信息屏：** 在低功耗、常亮的电子纸显示屏上显示会议室占用情况、办公日程或指引信息。
- **零售与公共信息显示：** 用于菜单、时刻表或占用指示等的低功耗电子纸标牌，具备长续航能力。

## SenseCraft HMI 入门

reTerminal E1003 预装了支持 **SenseCraft HMI** 的固件，这是一个零代码平台，可让你轻松设计并部署个性化仪表盘。

### 步骤 1. 开机与网络配置

1. 打开 **电源按键**，启动 reTerminal E1003。
2. 使用你的智能手机连接设备的热点（AP 模式），配置 Wi-Fi 凭据。
3. 屏幕会显示“Network Configuration”二维码，或者在浏览器中打开 192.168.4.1 页面。
4. 连接到互联网后，设备会显示 **Device Code** 或 **Binding QR Code**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/3.jpg" style={{width:800, height:'auto'}}/></div>

### 步骤 2. 绑定设备

1. 在电脑浏览器中访问 [SenseCraft HMI Platform](https://sensecraft.seeed.cc/)。
2. 登录你的账号（如果还没有，请先创建一个）。
3. 进入 **Device Management**（设备管理）部分并点击 **Add Device**（添加设备）。
4. 输入显示在 reTerminal E1003 屏幕上的 **Device Code**，完成绑定流程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/5.jpg" style={{width:1000, height:'auto'}}/></div>

### 步骤 3. 在平台上创建内容

1. 前往 **Home Page**（主页）选择你想要的模板，或进入 **Workspace**（工作区）从零开始创建你的作品。
2. [如果你有疑问，请点击此链接了解如何使用 HMI Platform。](https://sensecraft-hmi-docs.seeed.cc/en/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2.jpg" style={{width:1000, height:'auto'}}/></div>

### 步骤 4. 将内容部署到设备

1. 设计完成后，点击 **Preview** 按钮预览效果。
2. 点击 **Save** 或 **deploy** 按钮。
3. 从列表中选择你已绑定的 reTerminal E1003。
4. 平台会通过 Wi-Fi 将数据发送到你的设备，电子纸屏幕会刷新并显示你的新仪表盘。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/6.jpg" style={{width:1000, height:'auto'}}/></div>

## 资源

- [reTerminal E1003 原理图 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/202004522_reTerminal_E1003_V1.0_SCH_251231.pdf)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
