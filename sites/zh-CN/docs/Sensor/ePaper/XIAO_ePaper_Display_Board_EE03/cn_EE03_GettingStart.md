---
description: EE03 10.3 英寸电子墨水驱动板快速上手
title: XIAO 电子纸显示板 EE03 快速上手
keywords:
  - E-ink
  - Driver Board
  - 10.3 inch
  - ESP32
  - SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE03/3-XIAO-ePaper-Display-Board-EE03-kit.jpg
slug: /getting_started_with_ee03
sku: 100080566
last_update:
  date: 2026-03-1
  author: Jackson.Li
createdAt: '2026-03-02'
updatedAt: '2026-03-04'
url: https://wiki.seeedstudio.com/cn/getting_started_with_ee03/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE03</th>
        <th>10.3" Monochrome ePaper Display</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE03/1.jpg"/></div>
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

由 **XIAO ESP32-S3 Plus** 提供算力，电子纸驱动板 EE03 支持 **10.3 英寸黑白电子纸显示屏**。它配备带电源开关的 JST 2.0 mm 电池接口、内置充电 IC，并带有一个复位按键和三个用户按键。非常适合用于低功耗电子纸项目，例如数码相框和信息看板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/1.jpg" style={{width:800, height:'auto'}}/></div>

### 特性

- **内置 XIAO ESP32-S3 Plus：** 连接兼容的电子纸显示屏即可立即工作。
- **专为 10.3" 黑白电子纸显示屏设计：** 专门针对 10.3" 高速刷新电子纸显示屏设计，确保快速上手和稳定运行。
- **支持高速刷新：** 集成 T-CON 时序控制，确保精确的高速驱动，同时板载 SHT40 提供实时温度感应，用于波形补偿。
- **带开关的电池接口：** 提供简单的电池连接并集成开关，实现高效电源管理和节能。
- **用户友好按键：** 配备 1 个复位按键和 3 个用户可编程按键，为项目加速和自定义功能提供灵活性。
- **预烧录 SenseCraft HMI 固件：** 即插即用，直接搭配 SenseCraft HMI——我们基于 AI 的零代码 UI 设计平台使用。可从丰富模板中选择，或通过拖拽式 UI 搭建（可选 AI 辅助），仅需几次点击即可部署到电子纸显示屏。

### 规格

| 参数 | 描述 |
| :--- | :--- |
| **处理器** | XIAO ESP32-S3 Plus |
| **电子纸接口** | FPC 40 Pin 0.5mm |
| **电池接口** | JST 2.0mm |
| **开关** | 电池电源 ON/OFF |
| **电源供给** | - 3.7V 锂电池<br/>- USB Type-C |
| **按键** | - 1x 复位按键<br/>- 3x 用户按键 |

### 应用

- **数字电子书阅读器：** 提供纸质般的黑白阅读体验，支持 16 级灰度和快速刷新，实现更顺畅的翻页和更灵敏的内容更新。
- **实时信息看板：** 显示天气更新、日程安排、关键通知以及能耗、传感器状态或 KPI 等数据小组件。
- **安防告警：** 显示关于安防事件的告警和通知，例如运动检测或门/窗传感器触发。
- **公共交通到站信息牌：** 一目了然地显示公交/地铁的实时到站时间、线路状态和服务提醒，方便日常通勤。

## 硬件概览
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/2.png" style={{width:800, height:'auto'}}/></div>

- **USB Type-C**：用于供电和烧录固件。
- **FPC 接口**：用于连接电子纸显示屏。
- **复位按键**：用于复位开发板。
- **用户按键**：用于用户交互的可编程按键。
- **电源开关**：控制电池电源的开/关。
- **Boot 按键**：用于进入 bootloader 模式。
- **LED 指示灯**：用于指示电源和充电状态。
- **JST 接口**：2 针 JST 2.0mm 接口，用于连接电池。

## SenseCraft HMI 快速上手

本节将指导你将 EE03 连接到 SenseCraft HMI 平台，从而可以轻松实现无线更新屏幕内容。

### 设备安装

**步骤 1. 连接屏幕和开发板**
小心地将电子纸屏幕的 FPC 线缆连接到 EE03 驱动板上的连接器，确保锁扣机构已牢固锁紧。

**步骤 2. 上电**
使用 USB Type-C 线将 EE03 板连接到电源（电脑或 USB 适配器）。上电后，屏幕会刷新并显示欢迎界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_1.jpg" style={{width:300,height:'auto'}}/></div>

**步骤 3. 进入网络配置模式**
在欢迎界面之后，屏幕会自动刷新并显示 Network Configuration 界面，这表示设备已准备好连接 Wi-Fi。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_3.jpg" style={{width:300,height:'auto'}}/></div>


### 网络配置

**步骤 4. 使用手机配置 Wi-Fi**
使用手机扫描屏幕上显示的二维码。根据手机上的提示输入本地 Wi-Fi 的 SSID 和密码，将 EE03 连接到互联网。

**步骤 5. 获取配对码**
网络配置成功后，屏幕会再次刷新并显示一个唯一的 **Pairing Code**。你将在下一步中用到此配对码。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_2.jpg" style={{width:300,height:'auto'}}/></div>

### 平台绑定与更新

**步骤 6. 在 SenseCraft HMI 上绑定设备**
前往 [SenseCraft HMI Platform](https://sensecraft.seeed.cc/hmi/device)。登录你的账号，进入设备管理页面并选择 "Add Device"。输入你的电子墨水屏上显示的 Pairing Code。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_4.jpg" style={{width:800, height:'auto'}}/></div>
**步骤 7. 创建并推送新界面**     
在 SenseCraft HMI 平台上，选择适用于 10.3 英寸屏幕的模板来创建新界面，或上传一张图片。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_8.jpg" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_5.jpg" style={{width:800, height:'auto'}}/></div>

**步骤 8. 应用你的图片**
完成后，点击 "Apply" 按钮并选择你的 EE03 设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_6.jpg" style={{width:800, height:'auto'}}/></div>

**步骤 9. 在屏幕上显示**
最后，EE03 将接收数据并刷新 10.3 英寸屏幕，显示你的新内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_7.jpg" style={{width:300, height:'auto'}}/></div>


## Arduino 快速上手

### 安装 Seeed GFX 库

:::tip
该库与 TFT 库具有相同功能，但与其不兼容。如果你已经安装了 TFT 库或其他类似的显示库，请先卸载它们。
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

所以请务必确认你选择了正确的设备或元件类型。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/3.png" style={{width:800, height:'auto'}}/></div>

下载库之后，依次点击 **Sketch** -> **Include Library** -> **Add .ZIP Library**，然后选择下载好的库文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>


### 配置并烧录程序
选择图中所示的示例

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/4.png" style={{width:800, height:'auto'}}/></div>

新建一个 "driver.h" 文件，并将这些代码粘贴进去。代码应类似如下：
```cpp
#define BOARD_SCREEN_COMBO 511 // 10.3 inch monochrome ePaper Screen（ED103TC2）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE03
```


之后，前往 **Tools** -> **Board** -> **XIAO ESP32S3 Plus** 和 **Tools** -> **Port** -> **Select the port your board is connected to**。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/5.jpg" style={{width:1000, height:'auto'}}/></div>

请注意必须启用 PSAM。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/6.jpg" style={{width:1000, height:'auto'}}/></div>

然后点击 **Upload** 上传代码。
现在你会在电子纸屏幕上看到反馈！下面是 Bitmap 示例的显示效果。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/7.jpg" style={{width:500, height:'auto'}}/></div>


## 故障排查

**Q1：上电后屏幕没有刷新。**
*   检查 FPC 线缆是否正确插入并锁紧。
*   确保 USB Type-C 线缆提供足够的电源。
*   按下 Reset 按钮重新启动开发板。

**Q2：Wi-Fi 配置失败。**
*   确保你的 Wi-Fi 网络为 2.4GHz。
*   检查 Wi-Fi 密码是否输入正确。

**Q3：屏幕显示模糊或有残影。**
*   如果长时间未刷新屏幕或电源不稳定，可能会出现这种情况。请尝试通过 HMI 平台再次刷新屏幕。

## 资源
- **[PDF]** [Seeed Studio XIAO ePaper Display EE03 原理图](https://files.seeedstudio.com/wiki/Epaper/EE03/XIAO_ePaper_Display_Board_EE03_V1.0_SCH_251217.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE03 PCBA&SCH](https://files.seeedstudio.com/wiki/Epaper/EE03/XIAO_ePaper_Display_Board_EE03_V1.0_SCH_&_PCB_251217.zip)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。

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
