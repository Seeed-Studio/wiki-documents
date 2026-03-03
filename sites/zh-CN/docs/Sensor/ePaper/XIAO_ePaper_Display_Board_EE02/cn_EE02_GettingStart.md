---
description: EE02 13.3 英寸电子墨水屏驱动板入门指南
title: XIAO ePaper Display Board - EE02 入门指南
keywords:
  - E-ink
  - Driver Board
  - 13.3 inch
  - ESP32
  - SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE02/ee02head.webp
slug: /cn/getting_started_with_ee02
sku: 100067144
last_update:
  date: 2025-12-20
  author: Allen
---

## 简介

**EE02** 是一款专为 **13.3 英寸** 电子纸显示屏设计的高性能电子墨水屏驱动板。它采用 ESP32-S3 芯片，支持 Wi-Fi 和蓝牙连接，是无线显示应用的理想解决方案。

与其兄弟产品 EE04（专为小尺寸屏幕设计）类似，EE02 为希望将大尺寸电子墨水屏集成到物联网项目中的开发者提供了无缝体验。它简化了驱动过程，并支持 SenseCraft HMI 平台，便于内容管理。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/1.jpg" style={{width:800, height:'auto'}}/></div>

### 特性

- **强大的控制器**：基于 ESP32-S3 构建，提供强大的处理能力和无线功能。
- **专为大屏设计**：专门优化用于驱动 13.3 英寸电子墨水屏，具有高稳定性和清晰度。
- **无线连接**：支持 Wi-Fi 和蓝牙 5.0 (LE)，实现远程数据更新和云集成。
- **低功耗**：专为能效设计，适用于电池供电应用。
- **易于集成**：兼容 SenseCraft HMI，支持拖拽式界面设计和远程管理。
- **多样化接口**：包括用于供电/编程的 Type-C 接口和用于电子墨水屏的标准连接器。

### 规格参数

| 项目 | 描述 |
| :--- | :--- |
| **控制器** | ESP32-S3 |
| **支持屏幕尺寸** | 13.3 英寸电子墨水屏 |
| **连接性** | Wi-Fi 802.11 b/g/n，蓝牙 5.0 (LE) |
| **电源供应** | 通过 USB Type-C 5V |
| **工作电压** | 3.3V |
| **接口** | USB Type-C，用于电子墨水屏的 FPC 连接器 |
| **尺寸** | 80x40 mm |
| **工作温度** | -20°C 至 70°C |

### 应用场景

- **数字标牌**：适用于餐厅菜单、会议室标识和零售价格标签。
- **智能家居**：天气、日历和家庭自动化状态的信息仪表板。
- **工业人机界面**：机械和仓库管理的低功耗状态显示。
- **教育**：电子书阅读器或教室信息板。
- **办公**：桌牌或公告板。

## 硬件概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/overview.png" style={{width:800, height:'auto'}}/></div>

- **USB Type-C**：用于供电和固件烧录。
- **FPC 连接器**：连接 13.3 英寸电子墨水屏。
- **复位按钮**：重置开发板。
- **按钮**：分别是"刷新页面"、"切换上一页"和"切换下一页"
- **开关**：控制电池电源开/关。
- **Boot 按钮**：用于进入引导加载程序模式。
- **LED 指示灯**：闪烁表示没有电池连接。绿灯亮起表示电池正在充电。
- **JST 连接器**：2 针 JST 2.0mm 连接器，用于连接电池。

## SenseCraft HMI 入门指南

本节将指导您将 EE02 连接到 SenseCraft HMI 平台，让您能够轻松地无线更新屏幕内容。

### 设备安装

**步骤 1. 连接屏幕和开发板**
小心地将 13.3 英寸电子墨水屏的 FPC 线缆连接到 EE02 驱动板上的连接器。确保锁定机制牢固。

**步骤 2. 上电**
使用 USB Type-C 线缆将 EE02 开发板连接到电源（计算机或 USB 适配器）。上电后，屏幕将刷新并显示欢迎图像。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/4.JPG" style={{width:300,height:'auto'}}/></div>

**步骤 3. 进入网络配置模式**
欢迎图像显示后，屏幕将自动刷新显示网络配置界面。这表示设备已准备好连接 Wi-Fi。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/5.JPG" style={{width:300,height:'auto'}}/></div>

### 网络配置

**步骤 4. 通过手机配置 Wi-Fi**
使用手机扫描屏幕上显示的二维码（或连接到指示的热点）。按照手机上的提示输入您的本地 Wi-Fi SSID 和密码，将 EE02 连接到互联网。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/6.JPG" style={{width:300,height:'auto'}}/></div> -->

**步骤 5. 获取配对码**
网络配置成功后，屏幕将再次刷新并显示唯一的**配对码**（或设备 ID）。您在下一步中需要使用此代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/7.JPG" style={{width:300,height:'auto'}}/></div>

### 平台绑定与更新

**步骤 6. 在 SenseCraft HMI 上绑定设备**
访问 [SenseCraft HMI 平台](https://sensecraft.seeed.cc/hmi/device)。登录您的账户。导航到设备管理部分并选择"Add Device"。输入电子墨水屏上显示的配对码，将设备绑定到您的账户。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.jpg" style={{width:800, height:'auto'}}/></div>

**步骤 7. 创建并推送新界面**
在 SenseCraft HMI 平台上，使用编辑器创建新界面（例如，上传图像或设计仪表板）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.jpg" style={{width:800, height:'auto'}}/></div>

**步骤 8. 应用您的图像**
完成后，点击右上角的"Apply"按钮，然后选择您希望接收图像的设备。EE02 将接收数据并用您的新内容刷新 13.3 英寸屏幕。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.jpg" style={{width:800, height:'auto'}}/></div>

**步骤 9. 在屏幕上显示**

最后，EE02 将接收数据并用您的新内容刷新 13.3 英寸屏幕。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/11.jpg" style={{width:300, height:'auto'}}/></div>

## Arduino 入门指南

### 安装 Seeed GFX 库

:::tip
此库具有与 TFT 库相同的功能，但与其不兼容。如果您已安装 TFT 库或其他类似的显示库，请先卸载它们。
:::

从 GitHub 下载并安装 Seeed GFX 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>点击此处下载</button></p>
</a>
</div>

向下滚动并打开此链接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

选择您的设备类型，它将生成一些代码。复制这些代码，我们稍后会使用它们。

:::tip
如果您选择错误，屏幕将不显示任何内容。

所以请确保您的设备或组件类型正确。
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_1.png" style={{width:800, height:'auto'}}/></div>

下载库后，转到 **Sketch** -> **Include Library** -> **Add .ZIP Library** 并选择下载的库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

### 配置并烧录程序

选择图中显示的示例

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_2.png" style={{width:800, height:'auto'}}/></div>

创建一个新的"driver.h"文件并将这些代码粘贴到其中。代码应该如下所示：
```cpp
#define BOARD_SCREEN_COMBO 510 // 13.3 inch six-color ePaper Screen（T133A01）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE02
```


之后，转到 **Tools** -> **Board** -> **XIAO ESP32S3 Plus** 和 **Tools** -> **Port** -> **选择您的开发板连接的端口**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_3.png" style={{width:1000, height:'auto'}}/></div>

注意必须启用 PSAM。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_4.png" style={{width:1000, height:'auto'}}/></div>

然后点击 **Upload** 上传代码。
现在您将在电子纸屏幕上看到反馈！以下是位图示例的结果。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_5.jpg" style={{width:500, height:'auto'}}/></div>

## 故障排除

**问题 1：上电后屏幕不刷新。**
*   检查 FPC 线缆是否正确插入并锁定。
*   确保 USB Type-C 线缆提供足够的电力。
*   按下复位按钮重启开发板。

**问题 2：Wi-Fi 配置失败。**
*   确保您的 Wi-Fi 网络是 2.4GHz（不支持 5GHz）。
*   检查 Wi-Fi 密码是否输入正确。
*   靠近路由器以确保信号强度。

**问题 3：屏幕显示模糊或有重影。**
*   如果屏幕长时间未刷新或电源供应不稳定，可能会出现这种情况。尝试通过 HMI 平台再次刷新屏幕。

## 资源
- **[PDF]** [13.3 E6 eInk Display module Datasheet](https://files.seeedstudio.com/wiki/Epaper/EE02/13_3_E6_eInk_Display_module_Datasheet.pdf)
- **[PDF]** [Seeed Studio XIAO ePaper Display EE02 Schematic](https://files.seeedstudio.com/wiki/Epaper/EE02/202000224_XIAO_ePaper_Display_Board_EE02_V1.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE02 PCBA&SCH](https://files.seeedstudio.com/wiki/Epaper/EE02/XIAO_ePaper_Display_Board_EE02_V1.0_final_SCH_and_PCB_251202.zip)

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