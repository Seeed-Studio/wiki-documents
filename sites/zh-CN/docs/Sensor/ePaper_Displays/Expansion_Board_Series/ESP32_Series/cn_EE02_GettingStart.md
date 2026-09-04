---
description: EE02 13.3 英寸电子墨水驱动板快速上手
title: EE02 快速上手
keywords:
  - 电子墨水
  - 驱动板
  - 13.3 英寸
  - ESP32
  - SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE02/ee02head.webp
sidebar_position: 1
slug: /getting_started_with_ee02
sku: 100067144
last_update:
  date: 8/18/2026
  author: Nemo
createdAt: '2025-12-19'
updatedAt: '2026-08-25'
url: https://wiki.seeedstudio.com/cn/getting_started_with_ee02/
---

# XIAO ePaper Display Board - EE02 快速上手

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE02</th>
        <th>13.3" spectra™ 6 电子墨水屏</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-xiao-epaper-display-board-ee02.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-ESP32-S3-EE02-p-6639.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div align="center"><img width ={300} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100088646-13.3-elnk-spectra-6-color-display.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/13-3inch-Six-Color-eInk-ePaper-Display-with-1200x1600-Pixels-p-6569.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## 介绍

**XIAO ePaper Display Board EE02** 是一款高性能电子纸屏驱动板，专为 **13.3 英寸 Spectra™ 6 六色**电子纸显示屏设计。其核心搭载 **XIAO ESP32-S3 Plus**，支持 Wi-Fi 和 Bluetooth 连接，并且**预装了 SenseCraft HMI 固件**——无需编程即可实现由 AI 加持的拖拽式 UI 设计。它是实时看板、数字标牌和智能家居控制面板等无线显示应用的理想解决方案。

与其兄弟产品 EE04（为小尺寸屏幕设计）类似，EE02 为希望在物联网项目中集成大尺寸电子纸显示屏的开发者提供了流畅的体验。它简化了驱动流程，并支持 SenseCraft HMI 平台，方便进行内容管理。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/1.jpg" style={{width:800, height:'auto'}}/></div>

### 特性

- **内置 XIAO ESP32-S3 Plus：** 连接兼容的电子纸显示屏后即可立即工作。
- **专用 13.3" Spectra™ 6 电子墨水支持：** 专为 13.3" Spectra™ 6 显示屏设计，确保快速上手和稳定运行。
- **带开关的 BAT 接口：** 提供简单的电池连接并集成开关，实现高效电源管理和节能。
- **用户友好按键：** 配备 1 个复位按键和 3 个用户可编程按键，为项目加速和自定义功能提供灵活性。
- **预烧录 SenseCraft HMI 固件：** 即插即用，直接使用 SenseCraft HMI——我们的 AI 加持零代码 UI 设计平台。可从丰富模板中选择，或通过拖拽式 UI 搭建（可选 AI 辅助），仅需几次点击即可将界面部署到电子纸显示屏。

### 规格

| 参数 | 描述 |
| :--- | :--- |
| **控制器** | XIAO ESP32-S3 Plus |
| **电子纸连接器** | FPC 60 Pin，0.5mm 间距 |
| **支持屏幕尺寸** | 13.3 英寸电子墨水屏 |
| **连接方式** | Wi-Fi 802.11 b/g/n，Bluetooth 5.0（LE） |
| **电源供给** | 通过 USB Type-C 提供 5V / 3.7V 锂电池（JST 2.0mm） |
| **电池接口** | JST 2.0mm 2 针 |
| **工作电压** | 3.3V |
| **接口** | USB Type-C，电子纸 FPC 连接器 |
| **尺寸** | 80mm x 43mm x 7mm |
| **工作温度** | -20°C 至 70°C |
| **开关** | 电池电源开/关 |
| **按键** | 1x 复位按键 <br/> 3x 用户按键 |

### 应用

- **实时仪表盘**：用于天气、股票、交通或家庭自动化数据的实时信息显示。
- **安全告警**：用于安全系统状态和告警信息的低功耗通知显示。
- **电子相框**：具备柔和刷新和超低功耗的电子纸相框。
- **公共交通到站牌**：用于车站和站点的公交/列车到站信息显示。
- **数字标牌**：餐厅菜单、会议室门牌和零售价签。
- **智能家居**：用于天气、日历和家庭自动化状态的信息看板。
- **工业 HMI**：用于机械设备和仓储管理的低功耗状态显示。
- **教育**：电子书阅读器或教室信息公告板。
- **办公**：桌牌或公告板。

## 硬件概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/overview.png" style={{width:800, height:'auto'}}/></div>

- **USB Type-C**：用于供电和固件烧录。
- **FPC 连接器**：用于连接 13.3 英寸电子墨水屏。
- **复位按键**：用于复位开发板。
- **按键**：分别为“刷新页面”、“切换上一页”和“切换下一页”。
- **开关**：控制电池电源的开/关。
- **Boot 按键**：用于进入 bootloader 模式。
- **LED 指示灯**：闪烁表示未连接电池。绿灯常亮表示电池正在充电。
- **JST 接口**：2 针 JST 2.0mm 接口，用于连接电池。

## SenseCraft HMI 快速上手

本节将指导你将 EE02 连接到 SenseCraft HMI 平台，从而轻松实现无线更新屏幕内容。

### 前置准备

在开始之前，请确保你已经具备以下条件：

- 一个用于 SenseCraft HMI 平台的 Seeed Studio 账号（如果还没有，请[点击此处注册](https://sensecraft.seeed.cc/hmi)）
- 一个 2.4GHz Wi-Fi 网络（不支持 5GHz）

### 设备安装

**步骤 1. 连接屏幕和开发板**
小心地将 13.3 英寸电子墨水屏的 FPC 线缆连接到 EE02 驱动板上的连接器，确保锁扣机构已牢固锁紧。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/1.gif" style={{width:800, height:'auto'}}/></div>

**步骤 2. 上电**
使用 USB Type-C 线将 EE02 开发板连接到电源（电脑或 USB 适配器）。上电后，屏幕会刷新并显示欢迎界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/4.JPG" style={{width:300,height:'auto'}}/></div>

**步骤 3. 进入网络配置模式**
在欢迎界面之后，屏幕会自动刷新并显示网络配置界面，这表示设备已准备好连接 Wi-Fi。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/5.JPG" style={{width:300,height:'auto'}}/></div>

### 网络配置

**步骤 4. 通过手机配置 Wi-Fi**
使用手机扫描屏幕上显示的二维码（或连接到屏幕上提示的热点）。按照手机上的提示输入本地 Wi-Fi 的 SSID 和密码，将 EE02 连接到互联网。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/Step_4.png" style={{width:600,height:'auto'}}/></div>

**步骤 5. 获取配对码**
网络配置成功后，屏幕会再次刷新并显示一个唯一的 **配对码**（或设备 ID）。你将在下一步中用到此代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/7.jpg" style={{width:300,height:'auto'}}/></div>

### 平台绑定与更新

**步骤 6. 在 SenseCraft HMI 上绑定设备**
前往 [SenseCraft HMI 平台](https://sensecraft.seeed.cc/hmi/device)。登录你的账号，进入设备管理页面并选择“New Device”。输入电子墨水屏上显示的配对码，将设备绑定到你的账号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.png" style={{width:500, height:'auto'}}/></div>

**步骤 7. 创建并推送新界面**
在 SenseCraft HMI 平台上，使用编辑器创建一个新界面（例如上传一张图片或设计一个仪表盘）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/11.png" style={{width:500, height:'auto'}}/></div>

**步骤 8. 应用你的图片**
完成后，点击右上角的 "Apply" 按钮，然后选择你希望接收图片的设备。EE02 将接收数据并刷新 13.3 英寸屏幕，显示你的新内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/12.png" style={{width:800, height:'auto'}}/></div>

**步骤 9. 在屏幕上显示**

最后，EE02 将接收数据并刷新 13.3 英寸屏幕，显示你的新内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/13.png" style={{width:300, height:'auto'}}/></div>

## Arduino 快速上手

### 安装 Seeed GFX2 库

:::tip
该库与 TFT 库具有相同功能，但**不**兼容。如果你已经安装了 TFT 库或其他类似的显示库，请先卸载它们。
:::

从 GitHub 下载并安装 Seeed GFX2 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_GFX2" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>点击此处下载</button></p>
</a>
</div>

下载库文件后，依次点击 **Sketch** -> **Include Library** -> **Add .ZIP Library**，然后选择下载好的库文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:500, height:'auto'}}/></div>

### 配置并烧录程序

如图所示，通过以下菜单路径找到示例：
File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → ESP32 Series → EE02 → 13.3-inch ePaper Displays → 13_3_inch_Spectra6_HelloWorld


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/16.png" style={{width:800, height:'auto'}}/></div>

之后，依次点击 **Tools** -> **Board** -> **XIAO ESP32S3 Plus** 和 **Tools** -> **Port** -> **选择你的开发板所连接的端口**。 

请注意必须启用 PSRAM。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/17.png" style={{width:400, height:'auto'}}/></div>

然后点击 **Upload** 上传代码。
现在你就可以在电子纸屏幕上看到反馈了！下面是 HelloWorld 示例的运行效果。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/18.png" style={{width:500, height:'auto'}}/></div>

## 故障排查

**Q1：上电后屏幕没有刷新。**
*   检查 FPC 线缆是否正确插入并锁紧。
*   确保 USB Type-C 线缆提供了足够的电源。
*   按下 Reset 按钮重新启动开发板。
*   确认在 Arduino IDE 的 Tools 菜单中已启用 PSRAM。

**Q2：Wi-Fi 配置失败。**
*   确保你的 Wi-Fi 网络为 2.4GHz（不支持 5GHz）。
*   检查 Wi-Fi 密码是否输入正确。
*   靠近路由器以确保信号强度足够。

**Q3：屏幕显示模糊或有残影。**
*   如果长时间未刷新屏幕或电源不稳定，可能会出现这种情况。请尝试通过 HMI 平台再次刷新屏幕。

**Q4：运行过程中听到高频声音。**
*   这是正常现象！在刷新过程中，电子纸电源电路可能会偶尔产生高频声音，这不会影响性能或产品寿命。

**Q5：无法在 SenseCraft HMI 上绑定设备 / 配对失败。**
*   仔细检查是否正确输入了配对码（区分大小写）。
*   确保 EE02 已上电并连接到 Wi-Fi（查看屏幕状态）。
*   在配对设置过程中，确保手机和 EE02 处于同一个 2.4GHz Wi-Fi 网络。
*   如果设备显示为离线，按下 Reset 按钮后重新尝试配对。

## 资源
- **[PDF]** [13.3 E6 eInk Display module Datasheet](https://files.seeedstudio.com/wiki/Epaper/EE02/13_3_E6_eInk_Display_module_Datasheet.pdf)
- **[PDF]** [Seeed Studio XIAO ePaper Display EE02 Schematic](https://files.seeedstudio.com/wiki/Epaper/EE02/202000224_XIAO_ePaper_Display_Board_EE02_V1.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE02 PCBA&SCH](https://files.seeedstudio.com/wiki/Epaper/EE02/XIAO_ePaper_Display_Board_EE02_V1.0_final_SCH_and_PCB_251202.zip)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

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