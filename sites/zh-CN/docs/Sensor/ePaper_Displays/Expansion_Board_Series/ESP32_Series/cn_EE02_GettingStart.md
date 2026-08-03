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
  date: 12/20/2025
  author: Allen
createdAt: '2025-12-19'
updatedAt: '2026-04-27'
url: https://wiki.seeedstudio.com/cn/getting_started_with_ee02/
---

# XIAO 电子纸显示板 EE02 快速上手

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE02</th>
        <th>13.3" spectra™ 6 E-Ink Display</th>
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

**EE02** 是一款专为 **13.3 英寸**电子纸显示屏设计的高性能电子墨水屏驱动板。其搭载 ESP32-S3 芯片，支持 Wi-Fi 和 Bluetooth 连接，非常适合用于无线显示应用。

与其兄弟产品 EE04（为小尺寸屏幕设计）类似，EE02 为希望在物联网项目中集成大尺寸电子墨水屏的开发者提供了流畅的使用体验。它简化了驱动流程，并支持 SenseCraft HMI 平台，方便进行内容管理。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/1.jpg" style={{width:800, height:'auto'}}/></div>

### 特性

- **强大的控制器**：基于 ESP32-S3 构建，提供强劲的处理能力和无线功能。
- **专为大屏设计**：专门优化用于驱动 13.3 英寸电子墨水屏，具有高稳定性和高清晰度。
- **无线连接**：支持 Wi-Fi 和 Bluetooth 5.0（LE），可实现远程数据更新和云端集成。
- **低功耗**：针对能效进行设计，适用于电池供电应用。
- **易于集成**：兼容 SenseCraft HMI，可进行拖拽式界面设计和远程管理。
- **多样接口**：包括用于供电/烧录的 Type-C 接口以及用于电子墨水屏的标准连接器。

### 规格

| 项目 | 描述 |
| :--- | :--- |
| **控制器** | XIAO ESP32-S3 Plus |
| **支持屏幕尺寸** | 13.3 英寸电子墨水屏 |
| **连接方式** | Wi-Fi 802.11 b/g/n，Bluetooth 5.0（LE） |
| **电源供给** | 通过 USB Type-C 提供 5V 电源 |
| **工作电压** | 3.3V |
| **接口** | USB Type-C，电子墨水屏 FPC 连接器 |
| **尺寸** | 80x43 mm |
| **工作温度** | -20°C 至 70°C |

### 应用

- **数字标牌**：非常适合餐厅菜单、会议室门牌和零售价签。
- **智能家居**：用于天气、日历和家庭自动化状态的信息看板。
- **工业 HMI**：用于机械设备和仓储管理的低功耗状态显示。
- **教育**：电子书阅读器或教室信息公告板。
- **办公**：桌面名牌或公告板。

## 硬件概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/overview.png" style={{width:800, height:'auto'}}/></div>

- **USB Type-C**：用于供电和固件烧录。
- **FPC 连接器**：用于连接 13.3 英寸电子墨水屏。
- **复位按钮**：用于重置开发板。
- **按键**：分别为“刷新页面”、“切换上一页”和“切换下一页”。
- **开关**：控制电池电源的开/关。
- **Boot 按钮**：用于进入 bootloader 模式。
- **LED 指示灯**：闪烁表示未连接电池，绿灯常亮表示电池正在充电。
- **JST 连接器**：2 针 JST 2.0mm 接口，用于连接电池。

## SenseCraft HMI 快速上手

本节将指导你将 EE02 连接到 SenseCraft HMI 平台，从而可以轻松地通过无线方式更新屏幕内容。

### 设备安装

**步骤 1. 连接屏幕和开发板**
小心地将 13.3 英寸电子墨水屏的 FPC 线缆连接到 EE02 驱动板上的连接器，确保锁扣机构已牢固锁紧。

**步骤 2. 上电**
使用 USB Type-C 线将 EE02 开发板连接到电源（电脑或 USB 适配器）。上电后，屏幕会刷新并显示欢迎图像。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/4.JPG" style={{width:300,height:'auto'}}/></div>

**步骤 3. 进入网络配置模式**
在欢迎图像之后，屏幕会自动刷新并显示网络配置界面，这表示设备已准备好连接 Wi-Fi。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/5.JPG" style={{width:300,height:'auto'}}/></div>

### 网络配置

**步骤 4. 通过手机配置 Wi-Fi**
使用手机扫描屏幕上显示的二维码（或连接到屏幕上提示的热点）。根据手机上的提示输入本地 Wi-Fi 的 SSID 和密码，使 EE02 连接到互联网。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/6.JPG" style={{width:300,height:'auto'}}/></div> -->

**步骤 5. 获取配对码**
网络配置成功后，屏幕会再次刷新并显示一个唯一的 **Pairing Code**（或设备 ID）。你将在下一步中用到此代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/7.jpg" style={{width:300,height:'auto'}}/></div>

### 平台绑定与更新

**步骤 6. 在 SenseCraft HMI 上绑定设备**
前往 [SenseCraft HMI Platform](https://sensecraft.seeed.cc/hmi/device)。登录你的账号，进入设备管理页面并选择“Add Device”。输入电子墨水屏上显示的 Pairing Code，将设备绑定到你的账号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.jpg" style={{width:800, height:'auto'}}/></div>

**步骤 7. 创建并推送新界面**
在 SenseCraft HMI 平台上，使用编辑器创建一个新界面（例如上传一张图片或设计一个仪表盘）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.jpg" style={{width:800, height:'auto'}}/></div>

**步骤 8. 应用你的图片**
完成后，点击右上角的 "Apply" 按钮，然后选择你希望接收图片的设备。EE02 将接收数据并刷新 13.3 英寸屏幕，显示你的新内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.jpg" style={{width:800, height:'auto'}}/></div>

**步骤 9. 在屏幕上显示**

最后，EE02 将接收数据并刷新 13.3 英寸屏幕，显示你的新内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/11.jpg" style={{width:300, height:'auto'}}/></div>

## Arduino 快速上手

### 安装 Seeed GFX 库

:::tip
此库与 TFT 库具有相同功能，但与其不兼容。如果你已经安装了 TFT 库或其他类似的显示库，请先卸载它们。
:::

从 GitHub 下载并安装 Seeed GFX 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Click here to download</button></p>
</a>
</div>

向下滚动并打开此链接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

选择你的设备类型，它会生成一些代码。复制这些代码，我们稍后会用到。

:::tip
如果选择错误，屏幕将不会显示任何内容。

所以请务必确认你的设备或元件类型。
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_1.png" style={{width:800, height:'auto'}}/></div>

下载库之后，依次点击 **Sketch** -> **Include Library** -> **Add .ZIP Library**，然后选择下载好的库文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

### 配置并烧录程序

选择图中所示的示例

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_2.png" style={{width:800, height:'auto'}}/></div>

新建一个名为 "driver.h" 的文件，并将这些代码粘贴进去。代码应类似如下：
```cpp
#define BOARD_SCREEN_COMBO 510 // 13.3 inch six-color ePaper Screen（T133A01）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE02
```


之后，前往 **Tools** -> **Board** -> **XIAO ESP32S3 Plus** 和 **Tools** -> **Port** -> **选择你的开发板所连接的端口**。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_3.png" style={{width:1000, height:'auto'}}/></div>

请注意必须启用 PSAM。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_4.png" style={{width:1000, height:'auto'}}/></div>

然后点击 **Upload** 上传代码。
现在你将在电子纸屏幕上看到反馈！下面是 Bitmap 示例的显示效果。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_5.jpg" style={{width:500, height:'auto'}}/></div>

## 故障排查

**Q1：上电后屏幕没有刷新。**
*   检查 FPC 线缆是否正确插入并锁紧。
*   确保 USB Type-C 线缆提供足够的电力。
*   按下 Reset 按钮重新启动开发板。

**Q2：Wi-Fi 配置失败。**
*   确保你的 Wi-Fi 网络为 2.4GHz（不支持 5GHz）。
*   检查 Wi-Fi 密码是否输入正确。
*   靠近路由器以确保信号强度。

**Q3：屏幕显示模糊或有残影。**
*   如果长时间未刷新屏幕或电源不稳定，可能会出现这种情况。请尝试通过 HMI 平台再次刷新屏幕。

## 资源
- **[PDF]** [13.3 E6 电子墨水显示模块数据手册](https://files.seeedstudio.com/wiki/Epaper/EE02/13_3_E6_eInk_Display_module_Datasheet.pdf)
- **[PDF]** [Seeed Studio XIAO 电子纸显示 EE02 原理图](https://files.seeedstudio.com/wiki/Epaper/EE02/202000224_XIAO_ePaper_Display_Board_EE02_V1.pdf)
- **[ZIP]** [Seeed Studio XIAO 电子纸显示 EE02 PCBA&SCH](https://files.seeedstudio.com/wiki/Epaper/EE02/XIAO_ePaper_Display_Board_EE02_V1.0_final_SCH_and_PCB_251202.zip)

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