---
description: 使用 OpenDisplay 套件安装并配置 OpenDisplay
title: 使用 OpenDisplay 套件安装并配置 OpenDisplay 固件
keywords:
  - epaper
  - opendisplay
  - en04
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
sidebar_position: 1
slug: /EN04_opendisplay
sku: E25120101
last_update:
  date: 01/13/2026
  author: Tomasz/Allen/Jackson.li
createdAt: '2026-01-09'
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/cn/EN04_opendisplay/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# 使用 OpenDisplay 套件安装并配置 OpenDisplay 固件

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper 显示板 EN04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/diy_kit_pic.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-DIY-Kit-EN04.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## 介绍

在 **XIAO nRF52840** Plus 的驱动下，XIAO EN04 ePaper 显示板是使用 OpenDisplay 固件快速上手支持蓝牙的电子墨水屏的最简便方式。与需要配备 802.15.4 无线电的专用接入点的传统系统不同，此开发板使用低功耗蓝牙（Bluetooth Low Energy），即可从手机、电脑或 Home Assistant 实现直接无线控制。

### 应用场景

- **智能家居仪表盘**：显示天气更新、日历事件以及来自各类智能家居设备的通知等实时信息。
- **能耗监控**：显示来自智能电表的能耗数据，帮助用户更高效地追踪和管理能源使用情况。
- **安防告警**：显示安防事件的告警和通知，例如移动侦测或门/窗传感器被触发。
- **智能恒温器显示屏**：显示温度和湿度数值，并可展示智能恒温器的控制设置。

## 什么是 [OpenDisplay](https://opendisplay.org)？

OpenDisplay 是一个为电子墨水屏提供固件和协议的开源项目。它专门为使用 nRF52840 和 ESP32 等微控制器的自定义硬件设计。

[OpenDisplay 固件](https://github.com/OpenDisplay-org/Firmware) 可以实现：
- **低功耗蓝牙（BLE）通信**：无需专用接入点即可直接进行无线控制
- **专用硬件支持**：支持 XIAO ePaper Board EN04、EE04 等专用板卡
- **基于 Web 的烧录与配置**：通过 Web 界面轻松完成安装和图片上传，访问 [https://opendisplay.org/firmware/install](https://opendisplay.org/firmware/install/index.html)
- **多种显示屏支持**：兼容多种尺寸和不同控制器的电子墨水屏


## 为什么要使用 OpenDisplay 固件？

OpenDisplay 固件为自定义电子墨水屏项目带来了多项优势：

- **无需接入点**：使用低功耗蓝牙实现直接通信，无需额外硬件
- **基于 Web 的工具**：通过浏览器工具即可轻松完成固件安装、配置及图片上传
- **专用硬件设计**：针对 EN04 等板卡设计，而不是仅限于商用 ESL 价签
- **开源且免费**：完全开源的项目，并在 GitHub 上持续开发
- **多种微控制器支持**：支持 nRF52840、ESP32-S3、ESP32-C6 和 ESP32-C3
- **简单上手**：只需将一个文件拖放到开发板中即可上传固件，通过 Web 界面完成配置，无需复杂编程
- **节能省电**：针对电子墨水屏进行了低功耗优化
- **活跃社区**：可通过 [OpenDisplay Discord](https://discord.gg/WG7tbTzF9Z) 获取支持并参与开发


## OpenDisplay 固件快速入门

### 硬件组装

**步骤 1. 将显示屏连接到驱动板**  
将 FPC 线缆与 XIAO EN04 板上的连接器对齐，然后扣上卡扣以确保连接牢固。  

:::tip
FPC 线缆的金属面应朝上，否则不会显示任何内容。多数显示屏的 FPC 线上会标有 1 和 50，这两个数字必须与板子上的标记对齐！

请参考下方安装教程，很多人会在这一步出错。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/hardware.jpg" style={{width:600, height:'auto'}}/></div>

**步骤 2. 连接电池**  
将电池线缆连接到驱动板上的 JST 接口，注意确认正负极方向（红线接 +，黑线接 -）。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/battery.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
请再次确认极性，不同电池的线序可能不一致。如果红线和黑线接反，可以使用针从 JST 接头中轻轻顶出端子，然后重新插入到正确的位置。
:::


### Web 安装器方法（推荐）

安装 OpenDisplay 固件的最简单方式是使用基于 Web 的安装器。

**步骤 1. 打开 Web 安装器**  
在浏览器中访问 [OpenDisplay Web Installer](https://opendisplay.org/firmware/install/index.html)。

**步骤 2. 选择你的板卡**  
在设备列表中选择 **"Seeed EN04 4.26"** 或 **"Seeed EN04 7.3"**（或任何与你硬件匹配的预设），具体取决于套件中显示屏的尺寸。

**步骤 3. 下载固件**  
点击 **"Download Firmware"** 按钮，并将 **"NRF52840.uf2"** 保存到你的硬盘中。

**步骤 4. 连接你的板卡**  
使用 USB-C 线缆将 XIAO ePaper Board EN04 连接到电脑。

**步骤 5. 安装固件**  
连续按下两次复位按钮。你会在电脑上看到文件管理器弹出。将刚下载的 **"NRF52840.uf2"** 文件复制到弹出的 USB 驱动器中（该 USB 驱动器就是处于 DFU 模式下的 EN04 板）。

:::tip
如果安装失败，可以尝试：
- 更换一根 USB 线缆（有些线只支持供电，不支持数据）
- 在 EN04 板上连续按下两次复位按钮
- 更换一个 USB 接口
:::

**步骤 6. 配置板卡**  
打开 [OpenDisplay 配置页面](https://opendisplay.org/firmware/config/?config=nrf52840-en04-s6) 并连接到你的板卡。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step6.png" style={{width:600, height:'auto'}}/></div>


如果你选择了 **"Seeed EN04 4.26"** 或 **"Seeed EN04 7.3"**，你会看到 **"Auto Install to Device"**。
这是配置你的套件的最简单方法。

**步骤 7. 连接到板卡**
在页面上按下 **""Connect** 按钮。你将看到一个窗口展示可用的 OpenDisplay 设备，选择新设备并点击 **"Pair"**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step7.png"  style={{width:500, height:'auto'}}/></div>


**步骤 8. 将配置保存到板卡**  
最后一步是点击 **"Auto Install to Device"** 按钮，这将把配置保存到设备上。


### 验证配置

在完成安装和配置后，显示屏应当显示启动画面。设备现在已经可以通过蓝牙显示内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/boot_screen.jpg" style={{width:500, height:'auto'}}/></div>




### 向显示屏上传图片

**使用 Web 显示工具**  

**步骤 1. 打开 OpenDisplay 工具**  
在浏览器中访问 [OpenDisplay BLE Tester](https://opendisplay.org/firmware/display/index.html)。

**步骤 2. 连接到设备**  
点击 **"Connect"** 并在蓝牙配对对话框中选择你的 OpenDisplay 设备。

**步骤 3. 选择图片**  
点击 **"Select Image"** 并从电脑中选择一个图片文件。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/upload_image.png" style={{width:500, height:'auto'}}/></div>




:::tip
为了获得最佳效果：
- 使用与显示屏分辨率匹配的图片（7.3" 显示屏为 800x480 像素）
- 对于单色显示屏，黑白图片效果最佳
- 工具会自动转换并抖动处理彩色图片
:::

**步骤 4. 上传图片**  
点击 **"Upload Image"** 将图片发送到显示屏。电子墨水屏会刷新并显示你的图片。



### 创建自定义内容

你可以通过以下方式创建自定义显示内容：
- 图像编辑软件（GIMP、Photoshop 等）
- 使用 PIL/Pillow 库的 Python 脚本
- 基于 Web 的图片生成器
- 与 Home Assistant 集成


## 与 Home Assistant 集成
:::tip
要与 Home Assistant 集成，你需要具备蓝牙能力的环境：
- **Home Assistant Green**（内置蓝牙）
- 运行在支持蓝牙硬件上的 **Home Assistant OS/Supervised**
- **ESPHome Bluetooth Proxy**（推荐，覆盖范围更好）

**注意**：作为蓝牙代理的 Shelly 设备**不支持** OpenDisplay 所需的主动连接，因此不能用于本集成。
:::

**步骤 1. 安装集成**

有关详细的安装说明，请参考 [OpenDisplay Home Assistant 集成仓库](https://github.com/OpenEPaperLink/Home_Assistant_Integration?tab=readme-ov-file#getting-help)。

安装该集成的最简单方式是通过 **HACS**（Home Assistant Community Store）。点击下方按钮，在 HACS 中直接打开该仓库：

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=OpenEpaperLink&repository=Home_Assistant_Integration)

:::info
通过 HACS 安装自定义集成后，你必须**重启 Home Assistant**，更改才会生效。
:::

**步骤 2. 添加已发现的设备**

Home Assistant 重启后：
1. 进入 **Settings > Devices & services**。
2. 你应该能在 **Discovered** 下看到你的 OpenDisplay 设备。
3. 点击**Add**。
4. 会弹出一个对话框，允许你设置设备的 **Name** 和 **Area**。
5. 点击 **Finish**。你将被重定向到设备详情页面，在那里你可以管理你的电子纸显示屏。

你会看到显示屏上显示了一张新图像，表明设备已连接到 Home Assistant。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pair_ha.jpg" style={{width:500, height:'auto'}}/></div>

## 搭配 Home Assistant 使用

当你将 OpenDisplay 设备集成到 Home Assistant 后，你可以创建自动化，根据传感器数据、时间或其他事件动态更新显示内容。

### 自动更新显示内容

用于更新显示的主要服务是 `open_epaper_link.drawcustom`。该服务允许你在显示屏上绘制文本、图标、图片和形状。有关支持的类型和参数的完整列表，请参阅 [drawcustom 文档](https://github.com/OpenDisplay-org/Home_Assistant_Integration/blob/main/docs/drawcustom/supported_types.md)。

你可以在 Home Assistant 中使用 **Visual Editor**（可视化编辑器）或直接编写 **YAML** 代码来创建自动化。下面是这两种方法的示例。

#### 示例 1：显示传感器数据（Visual Editor）

1.  进入 **Settings > Automations & Scenes**，并点击 **Create Automation**。
2.  添加一个 **Time Pattern** 触发器（例如，每 10 分钟）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_trigger.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/fill_trigger.png" style={{width:800, height:'auto'}}/></div>

3.  添加一个 **Action** 并选择 **OpenDisplay: Draw Custom Image**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_action.png" style={{width:800, height:'auto'}}/></div>

4.  选择你的目标设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pick_target.png" style={{width:800, height:'auto'}}/></div>

5.  在 **Payload** 字段中输入显示元素的配置。

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

:::caution 重要：Entity ID
上方的 Payload 中所使用的实体 ID（例如 `sensor.living_room_temperature`、`sensor.living_room_humidity`）只是示例。你**必须**将它们替换为你在 Home Assistant 中传感器的实际实体 ID。
:::

#### 示例 2：倒计时计时器（YAML）

对于高级用户，你可以在 YAML 模式下编辑自动化。此自动化会计算距离某个特定日期（例如圣诞节）还剩多少天，并将其显示出来。

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

:::caution 重要：Device ID
上面示例中的 `device_id`（`2ad706d4aa7c657b6fe99a733cef2253`）只是一个示例。你**必须**将其替换为你自己 OpenDisplay 显示屏的实际 Device ID。

查找你的 Device ID 的方法：
1. 使用 Visual Editor 在 Home Assistant 中创建一个新的自动化。
2. 在动作设置中选择你的 OpenDisplay 设备。
3. 切换到 **YAML 模式**（点击动作卡片右上角的三个点）。
4. 从 YAML 代码中复制 `device_id`，并将其粘贴到你的自动化中。
:::

## 额外内容

如果你在寻找一种时尚的方式来安装你的显示屏，可以看看这个适用于 IKEA RODALM 相框的 3D 打印内衬。它可以方便地安装显示屏。

- **[MakerWorld]** [Seeed 7.3" Spectra Insert for IKEA RODALM Frame](https://makerworld.com/pl/models/2103122-seeed-7-3-spectra-insert-for-ikea-rodalm-frame)

## 故障排查

### 固件安装问题

**问题**：连接 EN04 板后，电脑未检测到新的 USB 驱动器
- **解决方案**： 
  - 尝试使用另一根 USB 线（数据线，不是仅供电线）
  - 连接开发板后，按两次重置按钮


### 配置问题

**问题**：EN04 板未被发现
- **解决方案**：
  - 确认板子上的 LED 在闪烁——这可确认设备已通电
  - 尝试重启开发板
  - 确认固件是否正确安装，或者重新拷贝文件

**问题**：安装固件后显示屏没有任何显示
- **解决方案**：
  - 确认 FPC 线缆插入方向正确（金属触点朝上）
  - 检查线缆是否完全插入并锁紧
  - 确认配置是否正确（你可以通过配置器连接到开发板并读取配置）


### 蓝牙连接问题

**问题**：在蓝牙配对中找不到 OpenDisplay 设备
- **解决方案**：
  - 确保设备已上电且固件已安装
  - 靠近设备（2-3 米范围内）
  - 检查你的电脑/手机是否已启用蓝牙

**问题**：图像上传过程中连接中断
- **解决方案**：
  - 上传过程中保持靠近设备
  - 确保电池电量充足，或通过 USB 为设备供电
  - 避免上传非常大的图片
  - 在更稳定的蓝牙环境下重试

### 电池与电源问题

**问题**：电池续航时间短
- **解决方案**：
  - 在配置器中设置更长的休眠间隔
  - 始终使用最新版本的固件；每个版本都会优化电池使用
  - 降低显示刷新频率
  - 确认电池已完全充电（锂聚合物电池为 4.2V）

**问题**：设备无法充电
- **解决方案**：
  - 检查电池极性（红：+，黑：-）
  - 确认充电线能够提供足够的电流（至少 500mA）
  - 确保电源开关处于 ON 位置
  - 使用不同的 USB 电源进行测试

### Home Assistant 与集成问题

**问题**：通过 Raspberry Pi + HA + OpenDisplay 添加设备时出现 "Insufficient connection slots" 错误
- **解决方案**：
  - 此错误通常在 Raspberry Pi 内置的蓝牙适配器达到了并发连接上限时出现。

  ![错误：Insufficient connection slots](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/1.png)  
  "Insufficient connection slots" 错误消息示例。

  - **推荐修复方法**：使用 ESP32 设备（例如 XIAO ESP32S3）作为 **ESPHome Bluetooth Proxy**。这样可以将蓝牙连接从 Raspberry Pi 转移到 ESP32，为你的电子纸显示屏提供更稳定的连接“槽位”。
  - 有关详细的设置说明，请参阅下方的 [Using ESPHome Bluetooth Proxy](#使用-esphome-bluetooth-proxy) 章节。

## 使用 ESPHome Bluetooth Proxy

如果你在将 Raspberry Pi 与 Home Assistant 一起使用时遇到 "Insufficient connection slots" 问题，搭建一个 Bluetooth Proxy 是最有效的解决方案。这允许 HA 使用外部 ESP32 设备作为桥接，与电子纸显示屏进行通信。

### 前置条件
- 一块 ESP32 设备（例如 XIAO ESP32S3）
- 在 Home Assistant 中安装好 ESPHome
- 一根用于首次烧录、将 ESP32 连接到 Raspberry Pi 的 USB 数据线

### 分步配置

1. **连接设备**：将 XIAO ESP32S3 插入 Raspberry Pi 的一个 USB 端口。
2. **创建新配置**：在 ESPHome 仪表板中创建一个新设备，并使用以下 YAML 配置作为模板：

   ![ESPHome YAML Configuration](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/2.png)
   Bluetooth Proxy 的 ESPHome YAML 配置。

```yaml
esphome:
  name: esps3-proxy
  friendly_name: ESP32S3 Bluetooth Proxy

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# 1. Enable detailed logging (useful for debugging)
logger:
  level: VERY_VERBOSE

# 2. Core: Enable Bluetooth Tracker
esp32_ble_tracker:
  scan_parameters:
    active: true

# 3. Core: Enable Bluetooth Proxy
# This allows HA to control the e-Paper display through this device
bluetooth_proxy:
  active: true

api:
  encryption:
    key: "YOUR_ENCRYPTION_KEY" # Generate your own key

ota:
  - platform: esphome
    password: "YOUR_OTA_PASSWORD" # Set your own password

wifi:
  ssid: "YOUR_WIFI_SSID"
  password: "YOUR_WIFI_PASSWORD"

# Recommended: Enable captive portal for fallback access
captive_portal:
```

3. **安装/烧录**：
     - 选择 **Install** -> **Plug into this computer**（或运行 ESPHome 的设备）。

     ![ESPHome Flashing Process](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/4.png)
      通过 Raspberry Pi 将固件烧录到 XIAO ESP32S3。

    - 如果是第一次使用，ESPHome 可能会下载 `esp-idf` 工具链。请确保你的环境具备连接 GitHub 的稳定网络。
    - 编译完成后，日志会显示 “WiFi connected” 以及蓝牙扫描活动。

4. **集成**：
     - Home Assistant 将会自动发现新的 Bluetooth Proxy。
     - 添加完成后，你的电子墨水屏现在应该能通过这个代理被发现，而不会再出现 “insufficient slots” 错误。

     ![Success: Bluetooth Proxy Connected](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/5.png)
      Home Assistant 已成功发现 Bluetooth Proxy。

      ![Success: e-Paper Display Added](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/6.png)
      测试屏幕能否正常显示；如果可以，则说明配置成功。

## 资源

- **[GitHub]** [OpenDisplay 固件代码仓库](https://github.com/OpenDisplay-org/Firmware)
- **[Web Tool]** [固件 Web 安装工具](https://opendisplay.org/firmware/install/index.html)
- **[Web Tool]** [配置生成器](https://opendisplay.org/firmware/config/index.html)
- **[Web Tool]** [显示测试工具](https://opendisplay.org/firmware/display/index.html)
- **[Discord]** [OpenDisplay 社区](https://discord.gg/WG7tbTzF9Z)
- **[Website]** [OpenDisplay 官网](https://opendisplay.org)



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

