---
description: 从 Arduino IDE 驱动任意兼容的 Seeed ePaper 产品的参考指南——Arduino IDE 设置、Seeed_GFX 库安装、driver.h 生成。与硬件相关的深入内容位于各产品的 cookbook 中。
title: 使用 Arduino
keywords:
  - ePaper 显示屏
  - Arduino
  - Seeed_GFX
  - GxEPD2
  - reTerminal
  - XIAO
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /epaper_work_with_arduino
sidebar_position: 4
last_update:
  date: 04/28/2026
  author: dimo
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 使用 Arduino

本页是从 Arduino IDE 驱动任意兼容 Seeed ePaper 产品的**参考手册**。它涵盖了所有硬件之间相同的部分：

1. 设置 Arduino IDE 和 ESP32 开发板支持。
2. 安装 **Seeed_GFX** 库——我们维护的 `TFT_eSPI` 分支，对 Seeed ePaper 提供一流支持。
3. 使用 [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) 为你的开发板 + 屏幕组合生成 `driver.h`。
4. （可选）使用第三方 **GxEPD2** 库作为替代驱动。

如果你需要的是**从“开箱、烧录 Hello World、点亮传感器和按键”的端到端演练**，请跳转到你所用硬件的 **cookbook**——这些页面会复用本参考中的样板代码，并在此基础上添加产品特定示例（外设、代码示例、故障排查）：

- [reTerminal E 系列 Arduino cookbook](/cn/reterminal_e10xx_with_arduino)——覆盖 reTerminal E1001 / E1002 / E1003 / E1004，并提供完整外设示例（LED、蜂鸣器、按键、SHT4x、BMS、microSD、BMP 图像渲染）。
- 更多 cookbook（XIAO 7.5" 面板、EE0x 驱动板等）会在对应产品加入平台时陆续推出。

如果你只需要样板代码（在尚未被 cookbook 覆盖的全新产品上跑一个 `Hello World`），只看本页就足够了。

## 兼容硬件

在 [主汇总页面](/cn/seeed_epaper_displays) 上，任何 **Arduino** 列被勾选的 Seeed ePaper 产品都可以按本流程操作。概览如下：

<div class="table-center">
  <table align="center">
    <tr>
      <th>产品线</th>
      <th>MCU</th>
      <th>说明</th>
    </tr>
    <tr>
      <td><strong>reTerminal E1001 / E1002 / E1003 / E1004</strong></td>
      <td>XIAO ESP32-S3（集成）</td>
      <td>已提供 cookbook——见上方链接</td>
    </tr>
    <tr>
      <td><strong>EE02 / EE03 / EE04 / EE05</strong></td>
      <td>XIAO ESP32-S3 / ESP32-S3 Plus</td>
      <td>根据你的屏幕选择使用 Configuration Tool</td>
    </tr>
    <tr>
      <td><strong>EN04 / EN05</strong></td>
      <td>XIAO nRF52840 Plus</td>
      <td>选择 nRF52840 开发板包；主要目标平台是 OpenDisplay（BLE），而非 Arduino</td>
    </tr>
    <tr>
      <td><strong>XIAO 7.5" ePaper Panel</strong></td>
      <td>XIAO ESP32-C3</td>
      <td>参见专门的 [XIAO 7.5" Panel + Arduino 指南](/cn/xiao_075inch_epaper_panel_arduino)</td>
    </tr>
    <tr>
      <td><strong>TRMNL 7.5" (OG) DIY Kit</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td>参见专门的 [TRMNL DIY Kit + Arduino 指南](/cn/ogdiy_kit_works_with_arduino)</td>
    </tr>
    <tr>
      <td><strong>XIAO eInk Expansion Board v2 / ePaper Breakout Board</strong></td>
      <td>你插入的任意 XIAO</td>
      <td>根据你的 XIAO + 屏幕选择使用 Configuration Tool</td>
    </tr>
  </table>
</div>

## 步骤 1：设置 Arduino IDE

要在 Arduino 上驱动运行在 ESP32 / ESP32-S3 / ESP32-C3 上的任意 Seeed ePaper 产品，你需要 Arduino IDE 加上 ESP32 开发板支持。

:::tip
如果这是你第一次使用 Arduino，请先查看 [Getting Started with Arduino](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

**步骤 1.** 下载并安装 [Arduino IDE](https://www.arduino.cc/en/software)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div><br />

**步骤 2.** 添加 ESP32 开发板支持。在 Arduino IDE 中进入 **File → Preferences**，在 **Additional Boards Manager URLs** 字段中添加：

```text
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**步骤 3.** 安装 ESP32 开发板包：**Tools → Board → Boards Manager**，搜索 `esp32`，安装 Espressif Systems 提供的包。

**步骤 4.** 为你的硬件选择正确的开发板：

- **reTerminal E 系列 / 带 EE04 plus 的 EE04 / TRMNL DIY Kit**：`XIAO_ESP32S3_PLUS`
- **EE02 / EE03 / EE04 / EE05 标准版 / EN04（Arduino 路径）**：`XIAO_ESP32S3`（nRF52840 系列板卡则选择 `XIAO_nRF52840`）
- **XIAO 7.5" ePaper Panel**：`XIAO_ESP32C3`

如果你不确定该选哪一个，请参考你所用产品的 cookbook。

**步骤 5.** 通过 USB-C 连接你的硬件，并在 **Tools → Port** 中选择正确的端口。

**步骤 6.** 对于 ESP32-S3 开发板（大多数 reTerminal E 系列和 EE0x 板），启用 PSRAM：

**Tools → PSRAM → OPI PSRAM**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/open_opi_psram.jpg" style={{width:1000, height:'auto'}}/></div>

## 步骤 2：安装 Seeed_GFX 库

Seeed_GFX 是 `TFT_eSPI` 的一个分支，对 Seeed 显示屏提供一流支持。它是我们整条 ePaper 产品线推荐使用的库。

**步骤 1.** 从 GitHub 下载 Seeed_GFX 库：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong>
    </a>
</div><br />

**步骤 2.** 通过 **Sketch → Include Library → Add .ZIP Library**，选择刚下载的 ZIP 文件。

:::note
如果你之前安装过 `TFT_eSPI`，请暂时从 Arduino 库文件夹中移除或重命名它，以避免冲突。
:::

## 步骤 3：为你的硬件生成 `driver.h`

`Seeed_GFX` 中的每个示例草图都会在草图文件夹中查找本地 `driver.h`。该头文件告诉库要使用哪块开发板、哪种屏幕控制器以及哪种引脚映射。Configuration Tool 会为你生成它。

**步骤 1.** 选择一个示例草图：

- **黑白屏**：**File → Examples → Seeed_GFX → ePaper → Basic → HelloWorld**
- **彩色屏**：**File → Examples → Seeed_GFX → ePaper → Colorful → HelloWorld**

**步骤 2.** 在同一草图文件夹中创建一个名为 `driver.h` 的新文件（使用 Arduino IDE 中的新标签页箭头）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select.jpg" style={{width:1000, height:'auto'}}/></div>

**步骤 3.** 打开 [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)，并选择你的硬件。每个预设设备都会生成正确的 `BOARD_SCREEN_COMBO` 值（以及任何额外的宏定义，例如 `USE_XIAO_EPAPER_DISPLAY_BOARD_EE04`）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:900, height:'auto'}}/></div>

**步骤 4.** 复制生成的内容并粘贴到你的 `driver.h` 中。常见取值如下：

<Tabs groupId="arduino-board">
<TabItem value="reterminal-e1001" label="reTerminal E1001" default>

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 (UC8179)
```

</TabItem>
<TabItem value="reterminal-e1002" label="reTerminal E1002">

```cpp
#define BOARD_SCREEN_COMBO 521 // reTerminal E1002 (UC8179C)
```

</TabItem>
<TabItem value="reterminal-e1003" label="reTerminal E1003">

```cpp
#define BOARD_SCREEN_COMBO 522 // reTerminal E1003 (ED103TC2)
```

</TabItem>
<TabItem value="reterminal-e1004" label="reTerminal E1004">

```cpp
#define BOARD_SCREEN_COMBO 523 // reTerminal E1004 (T133A01)
```

</TabItem>
<TabItem value="ee04-583" label="EE04 + 5.83&quot; mono">

```cpp
#define BOARD_SCREEN_COMBO 503 // 5.83 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

</TabItem>
</Tabs>

对于其他任意组合，**始终以 Configuration Tool 的输出为准**——选择你的 XIAO 开发板（或在是 reTerminal/EN04/集成套件时选择 `None`）以及你接入的屏幕。

**步骤 5.** 将草图上传到你的硬件。首次上电时可能只会显示部分刷新；之后的刷新会显示完整的 Hello World 示例。

## 步骤 4（可选）：改用 GxEPD2

`Seeed_GFX` 是推荐的库，但如果你已经有一个基于 `GxEPD2` 的代码库，也可以用它来驱动 Seeed ePaper。`GxEPD2` 是一个流行的社区库，覆盖了大量电子纸显示屏。

要从 GitHub 手动安装以获得最新设备支持：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/ZinggJM/GxEPD2" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong>
    </a>
</div><br />

通过 **Sketch → Include Library → Add .ZIP Library** 并选择下载的 ZIP。各产品的 cookbook 会在适用时包含具体的 `GxEPD2` 示例（例如 [reTerminal E 系列 cookbook](/cn/reterminal_e10xx_with_arduino) 展示了在 E1002 上的全彩渲染）。

## 接下来去哪——Cookbook

本页有意只停留在样板代码层面。与硬件相关的代码示例和端到端演练都在各产品的 cookbook 中：

- **[reTerminal E 系列 Arduino cookbook](/cn/reterminal_e10xx_with_arduino)**——在 E1001/E1002/E1003/E1004 上运行 Hello World，以及完整外设套件：LED 控制、蜂鸣器（被动 PWM 蜂鸣 + 乐曲播放）、三按键输入、SHT4x 温湿度、电池管理、microSD 卡、从 SD 渲染 BMP 图像。
- **[XIAO 7.5" ePaper Panel + Arduino](/cn/xiao_075inch_epaper_panel_arduino)**——基于 `Seeed_GFX` 的 XIAO ESP32-C3 全流程演练。
- **[TRMNL 7.5" DIY Kit + Arduino](/cn/ogdiy_kit_works_with_arduino)**——在自定义 Arduino 草图中使用套件硬件（而非 TRMNL 云平台）。

当有新的 ePaper 产品发售时，会在各产品文件夹下添加对应的 cookbook；本主页面也会更新以链接到它。

## 常见问题

### 显示无内容或不刷新

- 最常见的情况是电子纸 FPC 线缆松动或插反。请重新插好，并确保金属触点朝上。
- 检查在 ESP32-S3 开发板上，**Tools → PSRAM** 中是否启用了 `OPI PSRAM`。
- 确认 `driver.h` 中的 `BOARD_SCREEN_COMBO` 与您的硬件匹配。错误的取值会在无提示的情况下导致空白屏幕。
- 核实你打开的示例草图是否与屏幕类型匹配（基础款 vs 彩色款）。

### 无法向开发板上传程序

- 尝试更换另一根 USB-C 线缆（需为数据线，而非仅供电线）。
- 对于 ESP32-S3 开发板：在插入 USB 线缆前按住 **BOOT** 按钮以进入下载模式，然后再松开。
- 确认在重新插拔后，**Tools → Port** 指向正确的串口设备。

如需针对特定产品进行更深入的故障排查，请查看该硬件对应的 cookbook。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
