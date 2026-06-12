---
description: 使用 OpenEPaperLink (OEPL) 和 OpenDisplay 开源生态系统，通过蓝牙低功耗驱动 Seeed ePaper 硬件——涵盖 XIAO ePaper Display Board EN04 和适用于 Seeed Studio XIAO 的 ePaper Breakout Board。
title: 搭配 OpenEPaperLink / OpenDisplay 使用
keywords:
  - ePaper 显示屏
  - OpenEPaperLink
  - OEPL
  - OpenDisplay
  - EN04
  - ePaper Breakout Board
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
slug: /EN04_opendisplay
sidebar_position: 9
last_update:
  date: 04/28/2026
  author: dimo
aliases:
  - /epaper_breakout_board_with_oepl
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/cn/EN04_opendisplay/
updatedAt: '2026-04-28'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 搭配 OpenEPaperLink / OpenDisplay 使用

[OpenEPaperLink (OEPL)](https://openepaperlink.de/) 生态系统以及相关的 [OpenDisplay](https://opendisplay.org/) 项目，是用于驱动电子纸显示屏的开源固件/协议栈。最新版本运行在 **Bluetooth Low Energy** 之上——你的手机、电脑或 Home Assistant 可以直接与设备通信，无需专用的 802.15.4 接入点。

本指南介绍两种进入该生态系统的 Seeed 硬件路径：

- **XIAO ePaper Display Board EN04** —— 运行 OpenDisplay 固件的集成套件，通过 BLE 工作。
- **适用于 Seeed Studio XIAO 的 ePaper Breakout Board** —— 更模块化的 DIY 路径，搭配 OEPL Config Builder + OEPL Image Uploader 以及 XIAO nRF52840 系列开发板使用。

这两种流程在理念上是一致的（BLE 配置、基于 Web 的工具、低功耗），但硬件以及固件/网页工具有所不同。请在整篇文章中选择与你的硬件相匹配的选项卡。

## 兼容硬件

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="XIAO ePaper Display Board EN04" default>

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EN04</th>
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

由 **XIAO nRF52840 Plus** 提供算力，XIAO EN04 ePaper Display Board 是体验支持蓝牙的电子纸显示屏的最简单方式。可从手机、电脑或 Home Assistant 直接进行无线控制——无需专用 AP。

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

<table align="center">
  <tr>
    <th>4.26" Monochrome ePaper Display</th>
    <th>ePaper Breakout Board for Seeed Studio XIAO</th>
    <th>Seeed Studio XIAO nRF52840 Sense Plus</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993631-4.26-monochrome-eink--epaper-display.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102010694-seeedstudio-xiao-nrf52840-sense-plus-45font_1.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-Breakout-Board-p-5804.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

:::tip
整个 **XIAO nRF52840 系列** 都可以驱动这个 DIY 套件——不仅限于上图所示的 Sense Plus。社区 OEPL 项目开箱即支持 4.26" 屏幕；未来会逐步加入更多屏幕尺寸。
:::

</TabItem>
</Tabs>

## 为什么使用 OpenEPaperLink / OpenDisplay？

- **无需接入点** —— 使用 Bluetooth Low Energy 进行直接通信，无需 802.15.4 硬件。
- **基于 Web 的工具** —— 直接在浏览器中安装固件、配置设备并上传图像。
- **专为硬件打造的支持** —— XIAO nRF52840 系列、EN04、EE04 等。
- **开源且免费** —— 在 GitHub 上持续开发。
- **支持多种微控制器** —— nRF52840、ESP32-S3、ESP32-C6、ESP32-C3。
- **流程简单** —— 拖放固件安装，通过网页配置，无需复杂编程。
- **电池友好** —— 针对低功耗电子纸进行了优化。
- **活跃的社区** —— [OpenDisplay Discord](https://discord.gg/WG7tbTzF9Z)。

## 步骤 1：硬件连接

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="XIAO ePaper Display Board EN04" default>

**步骤 1. 将显示屏连接到驱动板**  
将 FPC 软排线与 XIAO EN04 板上的连接器对齐，然后扣上卡扣固定。

:::tip
FPC 软排线的金属面应朝上，否则不会显示任何内容。大多数显示屏在 FPC 上印有 `1` 和 `50`，请将它们与板子上对应的数字对齐。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/hardware.jpg" style={{width:600, height:'auto'}}/></div>

**步骤 2. 连接电池**  
将电池线缆插入驱动板上的 JST 接插件。红线接 **+**，黑线接 **−**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/battery.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
请再次确认极性。不同电池的线序可能不同。若线序不对，可以用针从 JST 接插件中顶出端子，再以正确顺序重新插入。
:::

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

将 **XIAO nRF52840（Sense Plus）** 连接到 **ePaper Breakout Board**，然后将 **4.26" 单色电子纸屏幕** 接入 FPC 连接器。使用 USB-C 数据线将 XIAO 连接到电脑。

</TabItem>
</Tabs>

## 步骤 2：烧录固件

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="XIAO ePaper Display Board EN04" default>

最简单的方式是使用 OpenDisplay Web 安装器。

**步骤 1.** 在浏览器中打开 [OpenDisplay Web Installer](https://opendisplay.org/firmware/install/index.html)。

**步骤 2.** 在设备列表中选择 **Seeed EN04 4.26** 或 **Seeed EN04 7.3**（或与你的显示屏匹配的预设）。

**步骤 3.** 点击 **Download Firmware** 并将 `NRF52840.uf2` 保存到本地。

**步骤 4.** 通过 USB-C 连接 EN04 板。

**步骤 5.** 连续按下复位按钮 **两次**。电脑上会出现一个 USB 驱动器（处于 DFU 模式的 EN04）。将 `NRF52840.uf2` 复制到该驱动器中。

:::tip
如果安装器失败：

- 尝试更换 USB 线缆（有些线缆仅支持供电——请使用数据线）。
- 在 EN04 上按两次复位按钮以重新进入 DFU 模式。
- 尝试更换 USB 接口。
:::

**步骤 6.** 打开 [OpenDisplay Configuration Page](https://opendisplay.org/firmware/config/?config=nrf52840-en04-s6) 并连接到你的开发板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step6.png" style={{width:600, height:'auto'}}/></div>

如果你选择了 **Seeed EN04 4.26** 或 **Seeed EN04 7.3**，你会看到 **Auto Install to Device** —— 这是配置套件的最简单方式。

**步骤 7.** 点击 **Connect** 按钮。在配对对话框中选择新设备并点击 **Pair**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step7.png" style={{width:500, height:'auto'}}/></div>

**步骤 8.** 点击 **Auto Install to Device** 将配置保存到开发板。

完成安装和配置后，显示屏会显示启动画面，并准备好通过 BLE 接收内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/boot_screen.jpg" style={{width:500, height:'auto'}}/></div>

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

在 OEPL Config Builder 能与之通信之前，XIAO nRF52840 需要先烧录 **OEPL_BLE** 固件。

**步骤 1.** 从官方 OEPL 发布页面下载最新的 `OEPL_BLE` 固件。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/OpenEPaperLink/OEPL_BLE/releases/tag/test7" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the firmware</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/hub_oepl.png" style={{width:700, height:'auto'}}/></div>

**步骤 2.** 连接 XIAO nRF52840 + Breakout Board + 屏幕，通过 USB-C 将 XIAO 插入电脑，然后 **按下复位按钮两次**。XIAO 会在电脑上显示为一个 USB 驱动器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/file_pic.png" style={{width:700, height:'auto'}}/></div>

**步骤 3.** 将下载好的 `.uf2` 固件拖放到该 USB 驱动器中。XIAO 会重启，并在下一次上电时运行新固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/firmware.jpg" style={{width:700, height:'auto'}}/></div>

</TabItem>
</Tabs>

## 步骤 3：通过 BLE 配置设备

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="XIAO ePaper Display Board EN04" default>

前面烧录流程中的 OpenDisplay 配置步骤已经处理好了这些内容——你的 EN04 现在应该会启动到 OpenDisplay 启动画面，并且可以接收图像上传。

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

打开 [OEPL Config Builder](https://config.openepaperlink.org/)，然后通过 BLE 连接到你的 XIAO。（如果没有设备显示出来，请重新烧录固件后再试一次。）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Connect_demo_2.png" style={{width:700, height:'auto'}}/></div>

当你在终端中看到 "Connected" 时，你可以使用：

- **Read Config** — 从 MCU 读取当前配置。
- **Write Config** — 将新配置写入 MCU。
- **Reboot** — 重启 MCU。

### Builder 面板

在面板中选择变量和参数来组合你的配置。

- **system_config** — 主控 IC 和电源管理引脚。
- **manufacturer_data** — 制造商标识和板卡信息。
- **power_option** — 电源供给和休眠设置。
- **display** — 显示屏 / 面板信息（可为多个显示屏重复配置）。
- **led** — 可选的 LED 配置（可重复）。
- **sensor_data** — 可选的传感器读数 / 定义（可重复）。
- **data_bus** — 总线定义（I2C / SPI / …）。
- **binary_inputs** — 按钮、开关。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Builder_demo_1.png" style={{width:700, height:'auto'}}/></div>

你可以将配置导出为 `.bin`、`Hex` 或 `JSON`，也可以导入已保存的 JSON。下面提供了一个适用于 4.26" 屏幕的现成配置。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>4.26" 示例配置（JSON）</button></p>
</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Package_import_1.png" style={{width:700, height:'auto'}}/></div>

在调整好配置后，点击 **Write Config** 将其保存到 MCU。

</TabItem>
</Tabs>

## 步骤 4：上传图像

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="XIAO ePaper Display Board EN04" default>

OpenDisplay 项目提供了一个专用的基于浏览器的上传工具。

**步骤 1.** 打开 [OpenDisplay BLE Tester](https://opendisplay.org/firmware/display/index.html)。

**步骤 2.** 点击 **Connect**，然后在 BLE 配对对话框中选择你的 OpenDisplay 设备。

**步骤 3.** 点击 **Select Image** 并从电脑中选择一个文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/upload_image.png" style={{width:500, height:'auto'}}/></div>

:::tip
为了获得最佳效果：

- 使用与显示屏分辨率匹配的图像（7.3" 面板为 800×480 像素）。
- 黑白图像在单色显示屏上的显示效果最佳。
- 该工具会自动转换并抖动处理彩色图像。
:::

**步骤 4.** 点击 **Upload Image**。电子墨水屏会刷新并显示你的图像。

你也可以使用图像编辑器（GIMP、Photoshop）、Python + Pillow 脚本、基于 Web 的图像生成器，或者 Home Assistant 集成（见下文）来创建自定义内容。

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

OEPL Image Uploader 同样是一个基于 BLE 的 Web 工具。其引脚分配与 Config Builder 固件不同，因此你需要先烧录一个略有不同的图像上传固件。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>点击此处获取固件</button></p>
</a>
</div>

在 **E-Paper prefix filter(s)** 字段中，将值改为 `OEPL`——否则上传工具无法找到设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_4.png" style={{width:350, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_6.png" style={{width:500, height:'auto'}}/></div>

点击 **Select File** 选择一个本地文件进行上传。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_2.png" style={{width:550, height:'auto'}}/></div>

文件传输完成后，点击 **Upload Image** 将其推送到电子墨水屏。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_5.png" style={{width:350, height:'auto'}}/></div>

当你看到 **Upload Complete** 时，电子墨水屏已经刷新为新图像。

</TabItem>
</Tabs>

## Home Assistant 集成（仅限 EN04 / OpenDisplay）

:::tip
要与 Home Assistant 集成，你需要一个支持蓝牙的环境：

- **Home Assistant Green**（内置蓝牙）
- 运行在支持蓝牙硬件上的 **Home Assistant OS / Supervised**
- **ESPHome Bluetooth Proxy**（推荐用于获得更好的覆盖范围——见下文）

**注意：** 作为蓝牙代理的 Shelly 设备**不**支持 OpenDisplay 所需的主动连接，因此不能使用。
:::

**步骤 1. 安装集成**

有关详细安装说明，请参阅 [OpenDisplay Home Assistant Integration 仓库](https://github.com/OpenEPaperLink/Home_Assistant_Integration?tab=readme-ov-file#getting-help)。

最简单的方式是通过 **HACS**（Home Assistant Community Store）：

[![打开你的 Home Assistant 实例，并在 Home Assistant Community Store 中打开一个仓库。](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=OpenEpaperLink&repository=Home_Assistant_Integration)

:::info
通过 HACS 安装自定义集成后，**重启 Home Assistant** 以使更改生效。
:::

**步骤 2. 添加已发现的设备**

当 Home Assistant 重启完成后：

1. 进入 **Settings → Devices & services**。
2. 在 **Discovered** 下找到你的 OpenDisplay 设备。
3. 点击 **Add**。
4. 设置 **Name** 和 **Area**，然后点击 **Finish**。

显示屏上会出现一张新图像，以确认 Home Assistant 已连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pair_ha.jpg" style={{width:500, height:'auto'}}/></div>

### 自动更新显示内容

主要的服务是 `open_epaper_link.drawcustom`，它允许你绘制文本、图标、图像和形状。完整的类型 / 参数参考请参阅 [drawcustom 文档](https://github.com/OpenDisplay-org/Home_Assistant_Integration/blob/main/docs/drawcustom/supported_types.md)。

#### 示例 1 —— 显示传感器数据（可视化编辑器）

1. 进入 **Settings → Automations & Scenes** 并点击 **Create Automation**。
2. 添加一个 **Time Pattern** 触发器（例如每 10 分钟）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_trigger.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/fill_trigger.png" style={{width:800, height:'auto'}}/></div>

3. 添加一个 **Action** → **OpenDisplay: Draw Custom Image**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_action.png" style={{width:800, height:'auto'}}/></div>

4. 选择目标设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pick_target.png" style={{width:800, height:'auto'}}/></div>

5. 在 **Payload** 字段中输入布局配置：

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

:::caution 实体 ID
上面的实体 ID（例如 `sensor.living_room_temperature`）只是占位符。请将它们替换为你在 Home Assistant 中实际使用的实体 ID。
:::

#### 示例 2 —— 倒计时定时器（YAML）

对于高级用户，可以将自动化编辑为 YAML。下面的示例会对某个日期进行倒计时，并将结果渲染到显示屏上。

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

:::caution 设备 ID
上面的 `device_id` 是一个占位符。通过以下方式查找你的实际设备 ID：

1. 在可视化编辑器中创建一个新的自动化。
2. 在动作设置中选择你的 OpenDisplay 设备。
3. 切换到 **YAML 模式**（动作卡片中的三点菜单）。
4. 复制 `device_id` 并将其粘贴到你的自动化中。
:::

## 额外内容

在寻找一种时尚的方式来安装显示屏吗？这个 3D 打印的嵌件适配宜家 RODÅLM 相框，让安装变得轻松：

- **[MakerWorld]** [Seeed 7.3" Spectra Insert for IKEA RODALM Frame](https://makerworld.com/pl/models/2103122-seeed-7-3-spectra-insert-for-ikea-rodalm-frame)

## 故障排查

### 固件安装问题

**问题**：连接开发板后，电脑没有检测到新的 USB 驱动器。

- 尝试使用另一根 USB 线（数据线，而不是仅供电线）。
- 连接开发板后，按两次复位按钮。

### 配置问题

**问题**：开发板无法被发现。

- 检查开发板上的 LED 是否闪烁——以确认设备已通电。
- 尝试重启开发板。
- 重新烧录固件。

**问题**：安装固件后，显示屏没有任何显示。

- 检查 FPC 线缆方向（金属触点朝上）。
- 确认线缆已完全插入并锁紧。
- 通过配置工具重新检查配置。

### 蓝牙连接问题

**问题**：在蓝牙配对中找不到设备。

- 确保设备已通电并已安装固件。
- 靠近一些（在 2–3 米范围内）。
- 确认电脑 / 手机已启用蓝牙。

**问题**：在上传图像过程中连接中断。

- 上传期间保持靠近设备。
- 确保电池电量充足或通过 USB 供电。
- 避免上传非常大的图像。
- 在蓝牙环境不那么拥挤的情况下重试。

### 电池和电源问题

**问题**：电池续航时间短。

- 在配置工具中设置更长的休眠间隔。
- 始终运行最新固件（每个版本都会改进功耗）。
- 降低显示刷新频率。
- 确认电池已完全充电（锂聚合物电池为 4.2 V）。

**问题**：设备无法充电。

- 检查极性（红色 = +，黑色 = −）。
- 确认充电线缆可提供 ≥500 mA 电流。
- 确保电源开关处于 **ON** 状态。
- 尝试使用不同的 USB 电源。

### Home Assistant / 集成问题

**问题**：通过 Raspberry Pi + HA 添加设备时出现 "Insufficient connection slots"。

这通常是因为 Raspberry Pi 内置的蓝牙适配器达到了并发连接数量上限。

![Error: Insufficient connection slots](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/1.png)
*"Insufficient connection slots" 提示示例。*

**推荐解决方案**：使用 ESP32 设备（例如 XIAO ESP32S3）作为 **ESPHome Bluetooth Proxy**。这样可以将蓝牙连接从 Pi 上卸载，为你的电子纸显示屏提供更稳定的“连接槽位”。

## 使用 ESPHome Bluetooth Proxy

如果你在使用带有 Home Assistant 的 Raspberry Pi 时遇到 "Insufficient connection slots"，ESPHome Bluetooth Proxy 是最有效的解决方案。

### 前提条件

- 一块 ESP32 设备（例如 XIAO ESP32S3）。
- 在 Home Assistant 中已安装 ESPHome。
- 一根用于将 ESP32 连接到你的 Pi 的 USB 数据线（用于首次烧录）。

### 分步配置

1. **连接设备**——将 XIAO ESP32S3 插入 Raspberry Pi 的 USB 端口。

2. 使用下面的 YAML **创建一个新的 ESPHome 配置**：

   ![ESPHome YAML Configuration](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/2.png)

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
   bluetooth_proxy:
     active: true

   api:
     encryption:
       key: "YOUR_ENCRYPTION_KEY"

   ota:
     - platform: esphome
       password: "YOUR_OTA_PASSWORD"

   wifi:
     ssid: "YOUR_WIFI_SSID"
     password: "YOUR_WIFI_PASSWORD"

   captive_portal:
   ```

3. **安装 / 烧录**：

   - 选择 **Install → Plug into this computer**（或运行 ESPHome 的设备）。

     ![ESPHome flashing process](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/4.png)

   - 在首次烧录时，ESPHome 可能会下载 `esp-idf` 工具链。请确保你的环境可以稳定访问 GitHub。
   - 编译完成后，日志会显示 "WiFi connected" 和蓝牙扫描活动。

4. **将代理添加到 Home Assistant**：

   - Home Assistant 会自动发现新的 Bluetooth Proxy。
   - 添加完成后，你的电子纸显示屏应当可以通过代理被发现，而不会再出现 "insufficient slots" 错误。

   ![Success: Bluetooth Proxy connected](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/5.png)

   ![Success: e-paper display added](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/6.png)

## 资源

- **[GitHub]** [OpenDisplay firmware](https://github.com/OpenDisplay-org/Firmware)
- **[GitHub]** [OEPL_BLE firmware](https://github.com/OpenEPaperLink/OEPL_BLE)
- **[Web Tool]** [OpenDisplay firmware web installer](https://opendisplay.org/firmware/install/index.html)
- **[Web Tool]** [OpenDisplay configuration builder](https://opendisplay.org/firmware/config/index.html)
- **[Web Tool]** [OpenDisplay display tester](https://opendisplay.org/firmware/display/index.html)
- **[Web Tool]** [OEPL Config Builder](https://config.openepaperlink.org/)
- **[Web Tool]** [OEPL Image Uploader](https://atc1441.github.io/ATC_BLE_OEPL_Image_Upload.html)
- **[Discord]** [OpenDisplay Community](https://discord.gg/WG7tbTzF9Z)
- **[Website]** [OpenDisplay Official Site](https://opendisplay.org)
- **[Website]** [OpenEPaperLink Official Site](https://openepaperlink.de/)

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
