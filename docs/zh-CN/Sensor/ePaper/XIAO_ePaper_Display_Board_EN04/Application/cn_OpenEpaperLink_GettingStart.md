---
description: 使用 OpenEPaperLink BLE DIY 套件设置和配置 OpenEPaperLink
title: 使用 Open Display DIY 套件设置和配置 Open Display 固件
keywords:
  - epaper
  - oepl
  - en04
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
sidebar_position: 1
slug: /cn/epaper_EN04_OEPL
sku: E25120101
last_update:
  date: 12/10/2025
  author: Tomasz/Allen
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# 使用 Open Display DIY 套件设置和配置 Open Display 固件

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EN04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/diy_kit_pic.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-DIY-Kit-EN04.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## 简介

由 **XIAO nRF52840** Plus 驱动，XIAO EN04 ePaper Display Board 是使用 OEPL_BLE 固件开始蓝牙电子纸显示屏的最简单方式。与需要专用 802.15.4 无线电接入点的传统 OpenEPaperLink 系统不同，该板使用低功耗蓝牙从您的手机、计算机或 Home Assistant 进行直接无线控制。

### 应用

- **智能家居仪表板**：显示实时信息，如天气更新、日历事件和来自各种智能家居设备的通知。
- **能耗监控**：显示来自智能电表的能耗数据，帮助房主更有效地跟踪和管理他们的能源使用。
- **安全警报**：显示有关安全事件的警报和通知，如运动检测或门窗传感器激活。
- **智能恒温器显示**：显示温度和湿度水平，以及智能恒温器的控制设置。

## 什么是 [Open Display](https://openepaperlink.de/)？

OpenEPaperLink (OEPL) 是一个为电子纸显示屏提供固件和协议的开源项目。虽然主要的 OEPL 项目专注于重新利用商业电子货架标签 (ESL)，但 **OEPL_BLE 固件** 专门为使用 nRF52840 和 ESP32 等微控制器的定制硬件构建而设计。

[OEPL_BLE 固件](https://github.com/OpenEPaperLink/OEPL_BLE) 支持：
- **低功耗蓝牙 (BLE) 通信**：无需专用接入点的直接无线控制
- **专用硬件支持**：适用于专门构建的板，如 XIAO ePaper Board EN04、EE04 等
- **基于 Web 的刷写和配置**：通过 [openepaperlink.org/ble](https://openepaperlink.org/ble/) 的 Web 界面轻松设置和图像上传
- **多显示屏支持**：兼容各种电子纸尺寸和控制器


### 为什么使用 Open Display 固件？

OEPL_BLE 固件为定制电子纸显示项目提供了几个优势：

- **无需接入点**：使用低功耗蓝牙进行直接通信 - 无需额外硬件
- **基于 Web 的工具**：通过基于浏览器的工具轻松进行固件安装、配置和图像上传
- **专用硬件**：为 EN04 等板设计，不限于商业 ESL 标签
- **开源且免费**：完全开源项目，在 GitHub 上积极开发
- **多微控制器支持**：适用于 nRF52840、ESP32-S3、ESP32-C6 和 ESP32-C3
- **简单设置**：通过拖放单个文件到您的板上传固件，通过 Web 界面配置，无需复杂编程
- **电池高效**：针对电子纸显示屏的低功耗操作进行优化
- **活跃社区**：通过 [OpenEPaperLink Discord](https://discord.gg/fekcBc5RN5) 提供支持和开发


## Open Display 固件入门

### 硬件组装

**步骤 1. 将显示屏连接到驱动板**  
将 FPC 电缆与 XIAO EN04 板上的连接器对齐，然后固定锁扣以确保牢固连接。  

:::tip
FPC 电缆的金属面应朝上，否则不会显示任何内容。大多数显示屏在 FPC 电缆上有 1 和 50，这些数字必须与板上的数字对齐！

请按照下面的安装教程，很多人都弄错了。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/hardware.jpg" style={{width:600, height:'auto'}}/></div>

**步骤 2. 连接电池**  
将电池电缆连接到驱动板上的 JST 连接器，确保极性正确（红线接 +，黑线接 -）。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/battery.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
请仔细检查极性，不同的电池可能有混合接线。如果红线和黑线不对齐，可以使用针轻松从 JST 连接器中取出，然后正确定位。
:::



## 安装 OEPL_BLE 固件

### Web 安装器方法（推荐）

安装 OEPL_BLE 固件的最简单方法是使用基于 Web 的安装器。

**步骤 1. 打开 Web 安装器**  
在浏览器中访问 [OEPL Web 安装器](https://openepaperlink.org/ble/install/)。

**步骤 2. 选择您的板**  
从设备列表中选择 **"Seeed EN04 4.26"** 或 **"Seeed EN04 7.3"**（或任何适合您硬件的预设）（基于套件中的显示屏尺寸）。

**步骤 3. 下载固件**  
点击 **"Download Firmware"** 按钮并将 **"NRF52840.uf2"** 保存到您的硬盘上。

**步骤 4. 连接您的板**  
使用 USB-C 电缆将 XIAO ePaper Board EN04 连接到您的计算机。

**步骤 5. 安装固件**  
连续按两次复位按钮。您将看到文件管理器在您的 PC 上弹出。将下载的 **"NRF52840.uf2"** 文件复制到出现的 USB 驱动器（USB 驱动器是处于 DFU 模式的 EN04 板）

:::tip
如果安装失败，请尝试：
- 使用不同的 USB 电缆（某些电缆仅供电）
- 在 EN04 板上按两次复位按钮
- 使用不同的 USB 端口
:::

**步骤 6. 配置板**  
打开 [OEPL 配置页面](https://openepaperlink.org/ble/config/?config=nrf52840-en04-s6) 并连接到您的板。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step6.png" style={{width:600, height:'auto'}}/></div>


如果您选择了 **"Seeed EN04 4.26"** 或 **"Seeed EN04 7.3"**，您将看到 **"Auto Install to Device"**。
这是配置您的 DIY 套件的最简单方法。

**步骤 7. 连接到板**
按页面上的 **"Connect"** 按钮。您应该看到一个显示可用 OEPL 设备的窗口，选择新设备并按 **"Pair"**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step7.png"  style={{width:500, height:'auto'}}/></div>


**步骤 8. 将配置保存到板**  
最后要做的是按 **"Auto Install to Device"** 按钮，这将把配置保存到设备。


### 验证配置

安装和配置后，显示屏应显示启动屏幕。设备现在准备通过蓝牙显示内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/boot_screen.jpg" style={{width:500, height:'auto'}}/></div>




## 上传图像到显示屏

### 使用 Web 显示工具

**步骤 1. 打开显示工具**  
在浏览器中访问 [OpenEPaperLink BLE 测试器](https://openepaperlink.org/ble/display/)。

**步骤 2. 连接到设备**  
点击 **"Connect"** 并从蓝牙配对对话框中选择您的 OEPL 设备。

**步骤 3. 选择图像**  
点击 **"Select Image"** 并从您的计算机中选择图像文件。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/upload_image.png" style={{width:500, height:'auto'}}/></div>




:::tip
为获得最佳效果：
- 使用与您的显示分辨率匹配的图像（7.3" 显示屏为 800x480 像素）
- 黑白图像在单色显示屏上效果最佳
- 该工具将自动转换和抖动彩色图像
:::

**步骤 4. 上传图像**  
点击 **"Upload Image"** 将图像发送到您的显示屏。电子纸将刷新并显示您的图像。



### 创建自定义内容

您可以使用以下方式创建自定义显示内容：
- 图像编辑软件（GIMP、Photoshop 等）
- 使用 PIL/Pillow 库的 Python 脚本
- 基于 Web 的图像生成器
- Home Assistant 集成


### Home Assistant 集成
:::tip
要与 Home Assistant 集成，您需要支持蓝牙的设置：
- **Home Assistant Green**（内置蓝牙）
- **Home Assistant OS/Supervised** 在支持蓝牙的硬件上
- **ESPHome 蓝牙代理**（推荐以获得更好的范围）

**注意**：作为蓝牙代理的 Shelly 设备 **不支持 OEPL 所需的主动连接**，因此不能用于此集成。
:::

**步骤 1. 安装集成**

有关详细安装说明，请参阅 [OpenEPaperLink Home Assistant 集成存储库](https://github.com/OpenEPaperLink/Home_Assistant_Integration?tab=readme-ov-file#getting-help)。

安装集成的最简单方法是通过 **HACS**（Home Assistant 社区商店）。点击下面的按钮直接在 HACS 中打开存储库：

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=OpenEpaperLink&repository=Home_Assistant_Integration)

:::info
通过 HACS 安装自定义集成后，您必须 **重启 Home Assistant** 以使更改生效。
:::

**步骤 2. 添加发现的设备**

Home Assistant 重启后：
1. 导航到 **Settings > Devices & services**。
2. 您应该在 **Discovered** 下看到您的 OEPL 设备。
3. 点击 **Add**。
4. 将出现一个对话框，允许您设置设备的 **Name** 和 **Area**。
5. 点击 **Finish**。您将被重定向到设备详情页面，在那里您可以管理您的电子纸显示器。

您将看到显示器上显示了一张新图像，表明设备已连接到 Home Assistant。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pair_ha.jpg" style={{width:500, height:'auto'}}/></div>

## 与 Home Assistant 配合使用

一旦您将 OpenEPaperLink 设备与 Home Assistant 集成，您就可以创建自动化来根据传感器数据、时间或其他事件动态更新显示内容。

### 自动化显示更新

更新显示的主要服务是 `open_epaper_link.drawcustom`。此服务允许您在显示器上绘制文本、图标、图像和形状。有关支持的类型和参数的完整列表，请参阅 [drawcustom 文档](https://github.com/OpenEPaperLink/Home_Assistant_Integration/blob/main/docs/drawcustom/supported_types.md)。

您可以使用 **Visual Editor** 或直接编写 **YAML** 代码在 Home Assistant 中创建自动化。以下是两种方法的示例。

#### 示例 1：显示传感器数据（可视化编辑器）

1.  转到 **Settings > Automations & Scenes** 并点击 **Create Automation**。
2.  添加一个 **Time Pattern** 触发器（例如，每 10 分钟）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_trigger.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/fill_trigger.png" style={{width:800, height:'auto'}}/></div>

3.  添加一个 **Action** 并选择 **OpenEPaperLink: Draw Custom Image**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_action.png" style={{width:800, height:'auto'}}/></div>

4.  选择您的目标设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pick_target.png" style={{width:800, height:'auto'}}/></div>

5.  在 **Payload** 字段中，输入显示元素的配置。

<!-- <div style={{textAlign:'center'}}><img src={require('./ha_automation_visual.jpg').default} style={{width:800, height:'auto'}}/></div> -->

**Payload 配置：**

```yaml
- type: "text"
  value: "Living Room"
  x: "50%"
  y: 50
  anchor: "mm"
  size: 70
  color: "red"
- type: "icon"
  value: "mdi:thermometer"
  x: "35%"
  y: 200
  anchor: "mm"
  size: 100
  color: "black"
- type: "text"
  value: "{{ states('sensor.living_room_temperature') }}°C"
  x: "65%"
  y: 200
  anchor: "mm"
  size: 100
  color: "black"
- type: "icon"
  value: "mdi:water-percent"
  x: "35%"
  y: 350
  anchor: "mm"
  size: 100
  color: "black"
- type: "text"
  value: "{{ states('sensor.living_room_humidity') }}%"
  x: "65%"
  y: 350
  anchor: "mm"
  size: 100
  color: "black"
```

:::caution 重要提示：实体 ID
上述 payload 中使用的实体 ID（例如，`sensor.living_room_temperature`、`sensor.living_room_humidity`）仅为示例。您**必须**将它们替换为您在 Home Assistant 中传感器的实际实体 ID。
:::

#### 示例 2：倒计时器（YAML）

对于高级用户，您可以在 YAML 模式下编辑自动化。此自动化计算到特定日期（例如，圣诞节）的剩余天数并显示它。

```yaml
alias: Update ePaper Display - Countdown
description: Displays days until Christmas
triggers:
  - at: "00:00:00"
    trigger: time
actions:
  - variables:
      days_left: "{{ (as_datetime('2025-12-24').date() - now().date()).days }}"
  - action: open_epaper_link.drawcustom
    data:
      background: white
      payload:
        - type: text
          value: "{{ 'Christmas Countdown' if days_left > 0 else '' }}"
          x: 50%
          "y": 50
          anchor: mm
          size: 60
          color: black
        - type: text
          value: "{{ days_left if days_left > 0 else '' }}"
          x: 50%
          "y": 240
          anchor: mm
          size: 250
          color: red
        - type: text
          value: >-
            {{ 'Day Left' if days_left == 1 else ('Days Left' if days_left > 0
            else '') }}
          x: 50%
          "y": 430
          anchor: mm
          size: 60
          color: black
        - type: text
          value: "{{ 'It''s Christmas!!!' if days_left == 0 else '' }}"
          x: 50%
          "y": 50%
          anchor: mm
          size: 100
          color: red
    target:
      device_id: 2ad706d4aa7c657b6fe99a733cef2253
```

:::caution 重要提示：设备 ID
上述示例中显示的 `device_id`（`2ad706d4aa7c657b6fe99a733cef2253`）仅为示例。您**必须**将其替换为您自己的 OpenEPaperLink 显示器的实际设备 ID。

要查找您的设备 ID：
1. 使用可视化编辑器在 Home Assistant 中创建新的自动化。
2. 在操作设置中选择您的 OpenEPaperLink 设备。
3. 切换到 **YAML mode**（点击操作卡片右上角的三个点）。
4. 从 YAML 代码中复制 `device_id` 并将其粘贴到您的自动化中。
:::

## 额外内容

如果您正在寻找一种时尚的方式来安装您的显示器，请查看这个用于 IKEA RODALM 相框的 3D 打印插件。它允许轻松安装显示器。

- **[MakerWorld]** [Seeed 7.3" Spectra Insert for IKEA RODALM Frame](https://makerworld.com/pl/models/2103122-seeed-7-3-spectra-insert-for-ikea-rodalm-frame)

## 故障排除

### 固件安装问题

**问题**：连接 EN04 板后 PC 未检测到新的 USB 驱动器
- **解决方案**：
  - 尝试不同的 USB 线缆（数据线，而非仅供电线）
  - 连接板子后按两次复位按钮


### 配置问题

**问题**：未发现 EN04 板
- **解决方案**：
  - 验证板上的 LED 是否闪烁 - 这确认设备已通电
  - 尝试重启板子
  - 验证固件安装或重新复制文件

**问题**：固件安装后显示器无显示
- **解决方案**：
  - 验证 FPC 线缆是否正确插入（金属触点朝上）
  - 检查线缆是否完全插入并锁定
  - 验证配置是否正确（您可以通过配置器连接到板子并读取配置）


### 蓝牙连接问题

**问题**：在蓝牙配对中找不到 OEPL 设备
- **解决方案**：
  - 确保设备已开机且固件已安装
  - 靠近设备（2-3 米内）
  - 检查您的计算机/手机是否已启用蓝牙

**问题**：图像上传过程中连接断开
- **解决方案**：
  - 上传过程中保持靠近设备
  - 确保电池电量充足或通过 USB 为设备供电
  - 避免上传非常大的图像
  - 在更稳定的蓝牙环境中重试

### 电池和电源问题

**问题**：电池续航时间短
- **解决方案**：
  - 在配置器中配置更长的睡眠间隔
  - 始终使用最新版本的固件；每个版本都会优化电池使用
  - 减少显示刷新频率
  - 验证电池是否完全充电（锂聚合物电池为 4.2V）

**问题**：设备无法充电
- **解决方案**：
  - 检查电池极性（红色：+，黑色：-）
  - 验证充电线缆提供足够的电流（最小 500mA）
  - 确保电源开关处于 ON 位置
  - 使用不同的 USB 电源测试

## 资源

- **[GitHub]** [OEPL_BLE Firmware Repository](https://github.com/OpenEPaperLink/OEPL_BLE)
- **[Web Tool]** [Firmware Web Installer](https://openepaperlink.org/ble/install/)
- **[Web Tool]** [Configuration Builder](https://openepaperlink.org/ble/config/)
- **[Web Tool]** [Display Tester](https://openepaperlink.org/ble/display/)
- **[Discord]** [OpenEPaperLink Community](https://discord.gg/fekcBc5RN5)
- **[Website]** [OpenEPaperLink Official Site](https://openepaperlink.de/)
- **[Documentation]** [OpenEPaperLink Wiki](https://github.com/OpenEPaperLink/OpenEPaperLink/wiki)



## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>