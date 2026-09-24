---
description: EE03 10.3 英寸电子墨水驱动板快速上手
title: EE03 快速上手
keywords:
  - 电子墨水
  - 驱动板
  - 10.3 英寸
  - ESP32
  - SenseCraft Seeedash
image: https://files.seeedstudio.com/wiki/Epaper/EE03/3-XIAO-ePaper-Display-Board-EE03-kit.webp
slug: /getting_started_with_ee03
sidebar_position: 2
sku: 100080566
last_update:
  date: 09/10/2026
  author: Luki
createdAt: '2026-03-02'
updatedAt: '2026-09-10'
url: https://wiki.seeedstudio.com/cn/getting_started_with_ee03/
---

# XIAO 电子墨水显示板 EE03 快速上手

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO 电子墨水显示板 EE03</th>
        <th>10.3" 单色电子墨水显示屏</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE03/01.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-ESP32-S3-EE03-p-6638.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div align="center"><img width ={300} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-100071485-10.3-monochrome-epaper-display.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/10-3inch-Monochrome-eInk-ePaper-Display-with-1404x1872-Pixels-p-6568.html?qid=BB9L37_r6uwit7x_1772441061474" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## 介绍

由 **XIAO ESP32-S3 Plus** 提供算力，电子墨水驱动板 EE03 支持 **10.3 英寸单色电子墨水显示屏**。它配备带电源开关的 JST 2.0 mm 电池接口、板载充电 IC，并带有 1 个复位按键和 3 个用户按键。非常适合用于低功耗电子墨水项目，例如电子相框和信息公告板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/1.jpg" style={{width:800, height:'auto'}}/></div>

### 特性

- **内置 XIAO ESP32-S3 Plus：** 连接兼容的电子墨水屏即可立即工作。
- **专用 10.3" 单色电子墨水显示屏支持：** 专为 10.3" 高速刷新电子墨水屏设计，确保快速上手和稳定运行。
- **支持高速刷新：** 集成 T-CON 时序控制，确保精确的高速驱动，同时板载 SHT40 提供实时温度感知，用于波形补偿。
- **带开关的电池接口：** 提供简单的电池连接并集成开关，实现高效电源管理和节能。
- **用户友好按键：** 配备 1 个复位按键和 3 个用户可编程按键，为项目加速和自定义功能提供灵活性。
- **预烧录 SenseCraft Seeedash 固件：** 即插即用，直接搭配 SenseCraft Seeedash——我们基于 AI 的零代码 UI 设计平台使用。可从丰富模板中选择，或通过拖拽式 UI 搭建（可选 AI 辅助），仅需几次点击即可将界面部署到电子墨水屏上。

### 规格

| 参数 | 描述 |
| :--- | :--- |
| **处理器** | XIAO ESP32-S3 Plus |
| **电子墨水接口** | FPC 40 Pin 0.5mm |
| **电池接口** | JST 2.0mm |
| **开关** | 电池电源开/关 |
| **电源供给** | - 3.7V 锂电池<br/>- USB Type-C |
| **按键** | - 1x 复位按键<br/>- 3x 用户按键 |

### 应用

- **数字电子书阅读器：** 提供纸质般的单色阅读体验，具备 16 级灰度和快速刷新，实现更顺畅的翻页和更灵敏的内容更新。
- **实时信息看板：** 显示天气更新、日程安排、关键通知以及能耗、传感器状态或 KPI 等数据组件。
- **安防告警：** 显示关于安防事件的告警和通知，例如运动检测或门/窗传感器触发。
- **公共交通到站信息牌：** 一目了然地显示实时公交/地铁到站时间、线路状态和服务告示，方便日常通勤。

## 硬件概览
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/2.png" style={{width:800, height:'auto'}}/></div>

- **USB Type-C**：用于供电和固件烧录。
- **FPC 接口**：用于连接电子墨水显示屏。
- **复位按键**：用于复位开发板。
- **用户按键**：用于用户交互的可编程按键。
- **电源开关**：控制电池电源的开/关。
- **Boot 按键**：用于进入 bootloader 模式。
- **LED 指示灯**：用于指示电源和充电状态。
- **JST 接口**：2 针 JST 2.0mm 接口，用于连接电池。

## 搭配 SenseCraft Seeedash 快速上手

本节将引导你将 EE03 连接到 SenseCraft Seeedash 平台，从而轻松实现无线更新屏幕内容。

### 设备安装

**步骤 1. 连接屏幕与开发板**
小心地将电子墨水屏的 FPC 线缆连接到 EE03 驱动板上的连接器，确保锁扣机构已牢固锁紧。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/01.gif" style={{width:800, height:'auto'}}/></div>

**步骤 2. 上电**
使用 USB Type-C 线将 EE03 开发板连接到电源（电脑或 USB 适配器）。上电后，屏幕会刷新并显示欢迎界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_7.jpg" style={{width:300,height:'auto'}}/></div>

**步骤 3. 进入网络配置模式**
在欢迎界面之后，屏幕会自动刷新并显示网络配置界面，这表示设备已准备好连接 Wi-Fi。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_3.png" style={{width:300,height:'auto'}}/></div>


### 网络配置

**步骤 4. 通过手机配置 Wi-Fi**
使用手机扫描屏幕上显示的二维码。根据手机上的提示输入本地 Wi-Fi 的 SSID 和密码，将 EE03 连接到互联网。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/Step_4.png" style={{width:600,height:'auto'}}/></div>

**步骤 5. 获取配对码**
网络配置成功后，屏幕会再次刷新并显示一个唯一的 **Pair Code（配对码）**。你将在下一步中用到此配对码。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_2.png" style={{width:300,height:'auto'}}/></div>

### 平台绑定与更新

**步骤 6. 在 SenseCraft Seeedash 上绑定设备**
前往 [SenseCraft Seeedash 平台](https://sensecraft.seeed.cc/hmi/device)。登录你的账号，进入设备管理页面并选择 "New Device"。输入电子墨水屏上显示的配对码（Pair Code）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.png" style={{width:500, height:'auto'}}/></div>

**步骤 7. 创建并推送新界面**     
在 SenseCraft Seeedash 平台上，选择适用于 10.3 英寸屏幕的模板来创建新界面，或上传一张图片。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/5.png" style={{width:500, height:'auto'}}/></div>

**步骤 8. 应用你的图片**
完成后，点击 "Apply" 按钮并选择你的 EE03 设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/6.png" style={{width:800, height:'auto'}}/></div>

**步骤 9. 在屏幕上显示**
最后，EE03 将接收数据并刷新 10.3 英寸屏幕，显示你的新内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_7.png" style={{width:300, height:'auto'}}/></div>


## 搭配 Arduino 快速上手

### 安装 Seeed GFX2 库

:::tip
该库与 TFT 库功能相同，但**不**兼容。如果你已经安装了 TFT 库或其他类似的显示库，请先卸载它们。
:::

从 GitHub 下载并安装 Seeed GFX2 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_GFX2" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Click here to download</button></p>
</a>
</div>

下载库文件后，依次点击 **Sketch** -> **Include Library** -> **Add .ZIP Library**，然后选择下载好的库文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:500, height:'auto'}}/></div>


### 配置并烧录程序

如图所示，通过以下菜单路径找到示例程序：
File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → ESP32 Series → EE03 → 10.3 Monochrome ePaper Display → 10_3_inch_Monochrome_HelloWorld


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/8.png" style={{width:800, height:'auto'}}/></div>

之后，依次点击 **Tools** -> **Board** -> **XIAO ESP32S3 Plus**，以及 **Tools** -> **Port** -> **选择你的开发板所连接的端口**。 

请注意必须启用 PSRAM。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/17.png" style={{width:400, height:'auto'}}/></div>

然后点击 **Upload** 上传代码。
现在你会在电子纸屏幕上看到反馈！下面是 HelloWorld 示例的运行结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/7.png" style={{width:500, height:'auto'}}/></div>


## 故障排查

**Q1：上电后屏幕没有刷新。**
*   检查 FPC 线缆是否正确插入并锁紧。
*   确保 USB Type-C 线缆提供的电源充足。
*   按下 Reset 按钮重新启动开发板。
*   对于 Arduino 用户：确保在 **Tools** → **PSRAM** → **OPI PSRAM** 中启用了 PSRAM。

**Q2：Wi-Fi 配置失败。**
*   确保你的 Wi-Fi 网络为 2.4GHz。
*   检查 Wi-Fi 密码是否输入正确。

**Q3：屏幕显示模糊或有残影。**
*   如果长时间未刷新屏幕或电源不稳定，可能会出现这种情况。请尝试通过 Seeedash 平台再次刷新屏幕。

**Q4：刷新过程中屏幕发出高频嗡嗡声。**
*   对于电子纸显示屏来说这是正常现象。高压驱动电路在刷新过程中会产生可听见的声音，尤其是在大尺寸屏幕上。这并不表示硬件故障，刷新完成后声音会停止。

**Q5：SenseCraft Seeedash 设备绑定失败。**
*   仔细检查 Pair Code 是否输入正确（区分大小写）。
*   设备绑定过程中，请确保手机和设备处于同一个 2.4GHz Wi-Fi 网络。
*   如果设备显示为离线，按下 Reset 按钮，然后再次尝试绑定设备。

## 资源
- **[PDF]** [Seeed Studio XIAO ePaper Display EE03 原理图](https://files.seeedstudio.com/wiki/Epaper/EE03/XIAO_ePaper_Display_Board_EE03_V1.0_SCH_251217.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE03 PCBA&原理图](https://files.seeedstudio.com/wiki/Epaper/EE03/XIAO_ePaper_Display_Board_EE03_V1.0_SCH_&_PCB_251217.zip)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时拥有尽可能顺畅的体验。

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
