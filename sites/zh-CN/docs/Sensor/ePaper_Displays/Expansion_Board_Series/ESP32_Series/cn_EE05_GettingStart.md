---
description: XIAO ePaper Display Board(ESP32-S3) - EE05 入门指南
sku: 100057220
title: EE05 入门指南
image: https://files.seeedstudio.com/wiki/Epaper/EE05/22_2.webp
slug: /epaper_ee05
sidebar_position: 4
last_update:
  date: 09/22/2026
  author: Nemo
createdAt: '2026-04-07'
url: https://wiki.seeedstudio.com/cn/epaper_ee05/
updatedAt: '2026-09-22'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# XIAO ePaper Display Board - EE05 入门指南

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE05</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE05/22_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE05-p-6755.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## 介绍

由 **XIAO ESP32-S3 Plus** 提供算力，显示板 EE05 支持多种 24 针 ePaper 显示屏，并可通过 SenseCraft Seeedash 实现零代码的 UI 设计与部署。借助扩展 IO 和带电池连接器的电源开关，它非常适合低功耗智能显示应用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/4.jpg" style={{width:800, height:'auto'}}/></div>

### 特性

- **由 XIAO ESP32-S3 Plus 驱动：** 连接兼容的 ePaper 显示屏后即可立即工作。
- **多样化显示支持：** 兼容多种 24 针 ePaper 显示屏，以满足不同项目需求。
- **扩展 IO 端口：** 可连接额外的传感器，如温湿度传感器，以增强功能。
- **带开关的电池连接器：** 提供简单的电池连接并集成开关，实现高效电源管理和节能。
- **基于 SenseCraft Seeedash 的零代码 UI 设计与部署：** 借助全新的 AI 驱动零代码平台 SenseCraft Seeedash，轻松设计并部署个性化仪表盘。通过简单的拖拽元素创建 UI，从丰富模板中进行选择，或让 AI 帮助你完成设计。可连接来自 Web API 的实时数据，然后只需几次点击即可将完成的仪表盘部署到 ePaper 显示屏。从设计到数据配置再到部署，全流程都在同一平台上无缝完成。

### 规格参数

| 参数 | 描述 |
|---|---|
| **处理器** | XIAO ESP32-S3 Plus |
| **ePaper 连接器** | SPI FPC 24 针 0.5mm |
| **电池连接器** | JST 2.0mm |
| **开关** | 硬件电源滑动开关 |
| **电源供给** | 3.7V 锂电池 / USB Type-C |
| **按键** | 1x 复位按键（侧边安装） <br/> 3x 用户按键（侧边安装） |

### 应用场景

- **智能家居仪表盘**：显示天气更新、日历事件以及来自各类智能家居设备的通知等实时信息。
- **能耗监测**：显示来自智能电表的能耗数据，帮助用户更高效地跟踪和管理能源使用。
- **安防告警**：显示关于安防事件的告警和通知，例如运动检测或门窗传感器触发。
- **电子相框**：创建一款支持 WiFi 的电子相框，用于显示来自智能家居网络的图片。

## 硬件概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_Pin.png" style={{width:900, height:'auto'}}/></div>

### 支持的 ePaper 显示屏

EE05 支持多种 24 针 SPI ePaper 显示屏，包括但不限于：

- [1.54-inch E-paper - Dotmatix 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch E-Paper -Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13-inch E-Paper - Quadruple 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9 inch E-paper - Monocolor 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [4.2-inch E-Paper - Monocolor 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch E-Paper - Monocolor 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch E-paper - Monocolor 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch Monochrome ePaper Display with 800x480 Pixels](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)

### 按键

EE05 具有 3 个用户按键和 1 个复位按键，全部侧边安装，便于操作：

- **Key1 / Key2 / Key3**：三个可编程用户按键，用于自定义交互和导航。它们分别映射到 XIAO ESP32-S3 Plus 的 **D1 (GPIO2)**、**D2 (GPIO3)** 和 **D9 (GPIO8)**，每个按键都带有 10k 外部上拉（按下时为低电平有效）。
- **RESET**：硬件复位按键，连接到 EN 引脚，用于重启设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_Buttons.jpg" style={{width:700, height:'auto'}}/></div>

### 扩展 IO 端口

EE05 包含一个扩展 IO 端口，可连接额外的传感器和模块，将功能扩展到显示之外。你可以连接温湿度传感器、运动传感器或其他 I2C/SPI 外设，以构建更高级的项目。

### 电池连接器

该板载有 JST 2.0mm 电池连接器和硬件电源滑动开关，可方便地使用 3.7V 锂电池为设备供电，适用于便携和低功耗应用。

:::note
以下现象是 SenseCraft Seeedash 固件本身固有的正常行为：

- 为 ePaper 显示应用优化的低功耗设计
- 电池寿命取决于刷新频率（在默认设置下，满电情况下通常可使用 3 个月）
- 当电池电量低于 20% 时，屏幕上会显示低电量指示图标
:::

## SenseCraft Seeedash 入门

:::note
本指南以 **7.5 英寸单色 ePaper（800 x 480）** 为示例。本节中的所有截图均为该屏幕型号。如果你使用的是其他屏幕型号，只需在步骤 2 中选择对应的屏幕固件——其余步骤完全相同。
:::

:::caution
XIAO EE05 DIY 套件出厂时未预装与屏幕型号对应的固件。首次连接屏幕并上电时，**屏幕很可能保持黑屏——这是正常现象，并非故障**。你必须先使用 SenseCraft Seeedash Firmware Flasher 烧录与你屏幕型号对应的固件。烧录完成后，将会显示欢迎界面和设置界面。
:::

### 前置条件

- XIAO ePaper Display Board - EE05
- 一块兼容的 ePaper 显示屏
- USB Type-C 线缆
- 一台带有网页浏览器的电脑（推荐使用 Chrome 或 Edge）

### 设备安装

**步骤 1. 连接显示屏并供电**

1. 将 ePaper 显示屏连接到 EE05 板上的 24 针 FPC 连接器，确保连接器已牢固锁紧。
2. 使用 USB Type-C 线缆将 EE05 板连接到电脑。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/Connect.gif" style={{width:800, height:'auto'}}/></div>

:::tip
如果通过电池为开发板供电，请确保硬件滑动开关处于 **ON** 位置。
:::

**步骤 2. 烧录屏幕固件**

在使用 SenseCraft Seeedash 之前，你需要为所使用的屏幕型号烧录对应固件。

1. 在浏览器中打开 [SenseCraft Seeedash](https://sensecraft.seeed.cc/hmi) 网站。
2. 点击左侧边栏中的 **Tools**，然后选择 **Firmware Flasher**。
3. 在 **Device** 下拉菜单中选择 **XIAO EE05 DIY Kit**，然后在列表中选择你的屏幕型号（例如 “7.5 inch Monochrome ePaper Display with 800*480”）。
4. 点击 **Flash** 按钮，选择 EE05 板对应的串口，并开始固件烧录过程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_6.png" style={{width:800,height:'auto'}}/></div>

:::tip
如果串口未显示，尝试按下板上的 **RESET** 按键，或更换一根 USB 线缆（确保其支持数据传输而不仅仅是充电）。
:::

**步骤 3. 欢迎界面**

固件烧录完成后，开发板会自动重启。你应当会看到 SenseCraft Seeedash 欢迎界面，随后进入 Wi-Fi 设置界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_1.png" style={{width:300,height:'auto'}}/></div>

### 网络配置

**步骤 4. 连接 Wi-Fi**

使用手机扫描屏幕上显示的二维码。根据手机上的提示输入本地 Wi-Fi 的 SSID 和密码，将 EE05 连接到互联网。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/Step_4.png" style={{width:600,height:'auto'}}/></div>

**步骤 5. 绑定设备**

网络配置成功后，屏幕会再次刷新并显示一个唯一的 **Pair Code**。你将在下一步中用到该配对码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_2.png" style={{width:300,height:'auto'}}/></div>

### 平台绑定与更新

**步骤 6. 在 SenseCraft Seeedash 上绑定设备**

前往 [SenseCraft Seeedash Platform](https://sensecraft.seeed.cc/hmi/device)。登录你的账号。进入设备管理部分并选择 **New Device**。输入在电子墨水屏上显示的 Pair Code。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.png" style={{width:500, height:'auto'}}/></div>

**步骤 7. 创建并推送新界面**

在 SenseCraft Seeedash 平台上，选择适用于 7.5 英寸屏幕的模板来创建新界面或上传图片。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_4.png" style={{width:500, height:'auto'}}/></div>

**步骤 8. 应用你的图片**

完成后，点击 "Apply" 按钮并选择你的 EE05 设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_5.png" style={{width:800, height:'auto'}}/></div>

**步骤 9. 在屏幕上显示**

最后，EE05 将接收数据并用你的新内容刷新 7.5 英寸屏幕。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_3.png" style={{width:300, height:'auto'}}/></div>

## Arduino 入门指南

### 安装 Seeed GFX2 库

:::tip
该库与 TFT 库具有相同的功能，并且**不**与其兼容。如果你已经安装了 TFT 库或其他类似的显示库，请先卸载它们。
:::

从 GitHub 下载并安装 Seeed GFX2 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_GFX2" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>点击此处下载</button></p>
</a>
</div>

下载库文件后，依次进入 **Sketch** -> **Include Library** -> **Add .ZIP Library**，然后选择下载的库文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:500, height:'auto'}}/></div>


### 配置并烧录程序

如图所示，通过以下菜单路径找到示例：
File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → ESP32 Series → XIAO ePaper Display Board - EE05 → 7.5-inch ePaper - Monochrome 800x480 → HelloWorld

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_Arduino_2.png" style={{width:800, height:'auto'}}/></div>

:::note
本指南以 **7.5-inch Monochrome ePaper (800 x 480)** 为示例。如果你使用的是其他屏幕，请在 `EE05` 下打开与你的面板型号相匹配的示例文件夹。
:::

之后，依次进入 **Tools** -> **Board** -> **XIAO ESP32S3 Plus** 和 **Tools** -> **Port** -> **选择你的开发板所连接的端口**。

请注意必须启用 PSRAM。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/17.png" style={{width:400, height:'auto'}}/></div>

然后点击 **Upload** 上传代码。
现在你就可以在电子纸屏幕上看到反馈了！下面是 HelloWorld 示例的运行效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_Arduino_1.png" style={{width:500, height:'auto'}}/></div>

## 软件概览

### 按键测试示例

EE05 上有三个用户按键（丝印：Key1 / Key2 / Key3），你可以在项目中使用它们。根据原理图，它们分别映射到 D1（GPIO2）、D2（GPIO3）和 D9（GPIO8），并通过外部 10k 上拉到 3.3V —— 按下按键会将引脚拉低。下面是一个简单的按键测试示例：

```cpp
#define KEY1_PIN  2  // Key1 -> D1 (GPIO2)
#define KEY2_PIN  3  // Key2 -> D2 (GPIO3)
#define KEY3_PIN  8  // Key3 -> D9 (GPIO8)

void setup() {
  Serial.begin(115200);
  pinMode(KEY1_PIN, INPUT_PULLUP);
  pinMode(KEY2_PIN, INPUT_PULLUP);
  pinMode(KEY3_PIN, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(KEY1_PIN) == LOW) {
    Serial.println("Key1 (GPIO2) pressed");
    delay(200);
  }
  if (digitalRead(KEY2_PIN) == LOW) {
    Serial.println("Key2 (GPIO3) pressed");
    delay(200);
  }
  if (digitalRead(KEY3_PIN) == LOW) {
    Serial.println("Key3 (GPIO8) pressed");
    delay(200);
  }
}
```

## 资源

- **[PDF]** [XIAO ePaper Display Board Ex05 原理图](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_Ex05_V1.0.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE05 SCH&PCB](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_EE05_V1.11_SCH&PCB_260420.zip)
- **[GitHub]** [Seeed_GFX2 库](https://github.com/Seeed-Studio/Seeed_GFX2)
- **[Website]** [SenseCraft Seeedash](https://sensecraft.seeed.cc/hmi)

## 故障排查

**Q1：上传代码后屏幕没有任何显示。**

- **检查 FPC 线缆**：确保电子纸 FPC 线缆插入方向正确，并且已经牢固锁紧在连接器中。
- **确认已启用 PSRAM**：确保你在 Arduino IDE 的 Tools → PSRAM 中选择了 "OPI PSRAM"。
- **检查屏幕型号选择**：再次确认你选择了与你具体屏幕型号相对应的示例。

**Q2：颜色反转或显示异常图案。**

- **选择完全匹配的型号**：不同的屏幕尺寸或 IC 版本需要特定的配置。请确保你使用的是与你屏幕型号相匹配的示例。
- **检查电源供给**：对于较大的屏幕（如 7.5 英寸），请确保电源在屏幕刷新期间能够提供足够的电流。

**Q3：连接电池后开发板无法上电。**

- **硬件开关**：确认板载拨动开关已切换到 **ON** 位置。
- **电池连接**：检查 JST 2.0mm 接插件的极性，确保与开发板设计相匹配。
- **电池电量**：确保电池有足够电量。尝试通过 USB-C 给电池充电。

**Q4：SenseCraft Seeedash 固件烧录工具无法检测到我的开发板。**

- **按下 RESET**：在烧录工具搜索设备时，尝试按下板载 RESET 按钮。
- **检查 USB 线缆**：确保你使用的是支持数据传输的 USB 线缆（而不仅仅是充电线）。

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
