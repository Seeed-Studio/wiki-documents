---
description: reTerminal DM 硬件指南
title: reTerminal DM 硬件指南
keywords:
  - Edge
  - reTerminal-DM
  - 硬件指南
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reterminal-dm-hardware-guide
last_update:
  date: 05/19/2023
  author: Peter Pan
---
# reTerminal DM 硬件概览

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg" alt="pir" width="600" height="auto"/></p>

reTerminal DM 是一款 10.1 英寸的开源工业 HMI——一个集成设备主控，用于统一数据流并管理现场设备。

基于 Raspberry Pi CM4，作为一体化设备的面板电脑、HMI、PLC 和 IIoT 网关，reTerminal DM 是新一代的交互式感应中心，配备 IP65 工业级大屏幕。

它具有丰富的扩展性和混合连接能力，支持 CAN 总线、RS485、RS232、千兆以太网端口等接口，以及强大的无线通信能力，如 4G、LoRa®、WiFi 和 BLE。

> \*4G 和 LoRa® 模块默认不随 reTerminal DM 提供，请根据需要购买相关模块，详情请见 
> [4G 套装](https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

本 Wiki 将向您展示如何组装和拆卸设备以安装外围组件，以及安装选项。

## 硬件准备
您需要准备以下硬件：

- reTerminal DM x 1
- 螺丝刀套装
  * 十字 + 3.5 号头
  * 十字 + 3.0 号头
  * 一字 - 2.5 号头

### 后盖组装与拆卸指南

**步骤 1：** 请将 reTerminal DM 屏幕朝下，小心地放置在平坦的表面上。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/facedown.png" alt="pir" width="800" height="auto"/></p>

**步骤 2：** 拧松螺丝并取下后盖。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/back_screw.png" alt="pir" width="800" height="auto"/></p>

### WiFi/BLE 天线组装

**步骤 1：** 取下后盖，取出硅胶塞。

**步骤 2：** 将天线 SMA 接头装入后盖，并将天线拧入 SMA 接头。

**步骤 3：** 将天线馈线的另一端（IPEX 插头）插入 CM4 的 IPEX 插座。

**步骤 4：** 盖上后盖并锁紧螺丝。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/wifi-antenna.png" alt="pir" width="800" height="auto"/></p>

### 4G 模块和天线组装

**步骤 1：** 取下后盖，取出硅胶塞。

**步骤 2：** 将天线 SMA 接头装入后盖，并将天线拧入 SMA 接头。

**步骤 3：** 将 4G 模块插入主板插座并锁紧螺丝。

**步骤 4：** 将天线馈线的另一端（IPEX 插头）插入 4G 模块的 IPEX 插座。

**步骤 5：** 盖上后盖并锁紧螺丝。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/4g-antenna.png" alt="pir" width="800" height="auto"/></p>

### LoRa® 模块和天线组装

**步骤 1：** 取下后盖，取出硅胶塞。

**步骤 2：** 将天线 SMA 接头装入后盖，并将天线拧入 SMA 接头。

**步骤 3：** 将 LoRa® 模块插入主板插座并锁紧螺丝。

**步骤 4：** 将天线馈线的另一端（IPEX 插头）插入 LoRa® 模块的 IPEX 插座。

**步骤 5：** 盖上后盖并锁紧螺丝。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/lora-antenna.png" alt="pir" width="800" height="auto"/></p>

### 安装 PCIe 扩展模块

:::note
PCIe 扩展模块即将发布，敬请期待。
:::

**步骤 1：** 取下后盖。

**步骤 2：** 将两组 16pin 电缆插入 PCIe 扩展模块板和双网络端口板的插座。

**步骤 3：** 将 PCIe 扩展模块板装入主板并锁紧螺丝。

**步骤 4：** 将双网络端口板装入 DM 前盖，并锁紧螺丝。

**步骤 5：** 取下扩展槽的网络端口挡板。

**步骤 6：** 盖上后盖并锁紧螺丝。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/PCIe.png" alt="pir" width="800" height="auto"/></p>

### 安装 SSD

**步骤 1：** 取下后盖。

**步骤 2：** 将 [PCIe 扩展模块板](https://www.seeedstudio.com/reTerminal-DM-Dual-LAN-and-SSD-extension-p-5766.html) 装入主板并锁紧螺丝。

**步骤 3：** 重新盖上后盖并锁紧螺丝。

**步骤 4：** 拧下快速拆卸盖板的螺丝并取下快速拆卸盖板。

**步骤 5：** 将 SSD 装入 M.2 插座并锁紧螺丝。

**步骤 6：** 将快速拆卸盖板装回并锁紧螺丝。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/ssd.png" alt="pir" width="800" height="auto"/></p>

### 安装摄像头

:::note

PiCamera V2 模块已在 reTerminal DM 上测试并可正常工作。您需要为 reTerminal DM 配备定制的长 FPC 摄像头模块。

:::

**步骤 1：** 取下后盖。

**步骤 2：** 将摄像头插入摄像头底板。

**步骤 3：** 将摄像头 FPC 电缆插入摄像头底板的插座。

**步骤 4：** 将摄像头安装到前盖并贴上固定贴纸。

**步骤 5：** 将摄像头模块组装到前盖，并锁紧螺丝。

**步骤 6：** 将 FPC 插入主板插座，盖上后盖并锁紧螺丝

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/camera.png" alt="pir" width="800" height="auto"/></p>

### 安装 PoE 模块

**步骤 1：** 移除后盖并取出主板。

**步骤 2：** 根据点标将 PoE 插入主板。

**步骤 3：** 将 PoE 模块焊接到主板背面。

**步骤 4：** 装回主板，盖上后盖并锁紧螺丝。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/poe.png" alt="pir" width="800" height="auto"/></p>

### RTC 电池更换

**步骤 1：** 移除后盖。

**步骤 2：** 将 RTC 电池线缆插入 RTC 电池插座，并将 RTC 电池固定到网络端口。

**步骤 3：** 盖上后盖并锁紧螺丝。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/RTC_battery.png" alt="pir" width="800" height="auto"/></p>

### 保险丝更换

**步骤 1：** 移除后盖。

**步骤 2：** 从主板保险丝插座中取出旧保险丝并放入新保险丝。

**步骤 3：** 盖上后盖并锁紧螺丝。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/fuse.png" alt="pir" width="800" height="auto"/></p>

### 底盘接地指南

**步骤 1：** 松开接地螺丝。

**步骤 2：** 安装接地连接器并拧紧螺丝。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/grounding.png" alt="pir" width="800" height="auto"/></p>

### 端子连接指南

**步骤 1：** 按下图所示方向插入电源连接器。

**步骤 2：** 按下图所示方向插入线缆连接器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/terminal_block.png" alt="pir" width="800" height="auto"/></p>

## 安装指南

reTerminal DM 支持多种安装方式，用户可以根据使用场景灵活选择。需要注意的是，标准产品不附带面板安装和导轨安装所需的配件，需单独购买相关配件进行安装。有关配件的详细信息，请参阅第 2.3 节可选接口和模块。

### 面板安装

面板安装需要为 reTerminal DM 配备面板安装套件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/panel_mount.png" alt="pir" width="800" height="auto"/></p>

### VESA 安装

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/VESA.png" alt="pir" width="800" height="auto"/></p>

### 导轨安装

导轨安装需要配备线性导轨滑块。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070181-sliding-block-for-linear-guideway-rail_including-screws_-45font.jpg" alt="pir" width="400" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Sliding-block-for-linear-guideway-rail-including-screws-p-5527.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
    </a>
</div>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/DIN.png" alt="pir" width="800" height="auto"/></p>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>