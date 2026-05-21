---
description: Seeed Studio 的 ePaper 显示产品矩阵完整概览，从集成的 reTerminal E 系列终端到驱动板、DIY 套件，以及为其提供支持的应用框架。
title: Seeed ePaper 显示屏
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png
slug: /seeed_epaper_displays
sidebar_position: 1
last_update:
  date: 05/18/2026
  author: dimo
createdAt: '2026-04-28'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/cn/seeed_epaper_displays/
---

# Seeed ePaper 显示屏 — 产品矩阵概览

## 介绍

ePaper（电子纸）只有在内容发生变化时才会消耗电能，这使其成为 **始终在线信息面板** 的理想显示技术——数字标牌、智能家居仪表盘、电子价签、会议室看板、电子相框等。

Seeed Studio 提供端到端的 ePaper 产品组合，围绕三个产品线进行组织：

1. **reTerminal E 系列** — 完全集成、开箱即用的 ePaper 终端（只需上电即可使用）。
2. **驱动 / 扩展板** — 将 MCU 与通用或大尺寸 ePaper 屏幕配对，构建你自己的产品。
3. **DIY 套件与裸屏** — 为创客社区设计，针对 TRMNL 或 XIAO 等特定平台进行了优化。

这三条产品线共享 **同一套软件生态**：SenseCraft HMI（零代码）、Home Assistant / ESPHome、TRMNL、Arduino / ESP-IDF / PlatformIO，以及 SquareLine Vision、EEZ Studio、Lopaka 等可视化 UI 工具。先选定硬件家族，其余工具链保持一致。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

## 按外形尺寸选择

如果你不确定从哪里开始，可以参考下面的决策矩阵：

<div class="table-center">
  <table align="center">
    <tr>
      <th>我想要……</th>
      <th>推荐产品线</th>
      <th>原因</th>
    </tr>
    <tr>
      <td>开箱即可点亮一个 ePaper 仪表盘，无需焊接，无需额外接线</td>
      <td><a href="https://wiki.seeedstudio.com/cn/reterminal_e10xx_main_page" target="_blank" rel="noopener noreferrer"><strong>reTerminal E 系列 →</strong></a></td>
      <td>电池、外壳、温湿度传感器、蜂鸣器、按键和 Wi-Fi 全部集成。预装 SenseCraft HMI 固件。</td>
    </tr>
    <tr>
      <td>将现有的 ePaper 屏幕（24-pin、50-pin、13.3"、10.3" 等）与 MCU 和电池配对</td>
      <td><a href="https://wiki.seeedstudio.com/cn/xiao_epaper_display_board_overview" target="_blank" rel="noopener noreferrer"><strong>驱动 / 扩展板系列 →</strong></a></td>
      <td>驱动板（EE0x 适用于 ESP32-S3，EN0x 适用于 nRF52840）提供 JST 电池座、充电 IC、复位按键和用户按键。</td>
    </tr>
    <tr>
      <td>使用面向创客的 DIY 套件构建一个兼容 TRMNL 的仪表盘</td>
      <td><a href="https://wiki.seeedstudio.com/cn/trmnl_7inch5_diy_kit_main_page" target="_blank" rel="noopener noreferrer"><strong>TRMNL 7.5"（OG）DIY 套件 →</strong></a></td>
      <td>针对 TRMNL 平台预先调校；同样支持 ESPHome 和 Arduino。</td>
    </tr>
    <tr>
      <td>将 7.5" ePaper 面板直接插接到 Seeed Studio XIAO 模块上</td>
      <td><a href="https://wiki.seeedstudio.com/cn/xiao_075inch_epaper_panel" target="_blank" rel="noopener noreferrer"><strong>XIAO 7.5" ePaper 面板 →</strong></a></td>
      <td>裸屏 + 与任意 XIAO 开发板配对的转接板；占板面积极小。</td>
    </tr>
  </table>
</div>

## reTerminal E 系列 — 集成式 ePaper 终端

四款基于 ESP32-S3 的终端，共享同一外壳家族、软件栈和电池设计。差异在于屏幕尺寸、彩色或黑白、是否触控以及电池续航。

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:240, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center"><strong>7.5" 黑白</strong><br/>4 级灰度<br/>约 3 个月续航</td>
      <td align="center"><strong>7.3" 全彩</strong><br/>E Ink Spectra 6<br/>约 3 个月续航</td>
      <td align="center"><strong>10.3" 黑白</strong><br/>16 级灰度 + 触控<br/>约 6 个月续航</td>
      <td align="center"><strong>13.3" 全彩</strong><br/>E Ink Spectra 6<br/>约 6 个月续航</td>
    </tr>
    <tr>
      <td align="center"><a href="https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1001" target="_blank" rel="noopener noreferrer"><strong>E1001 Wiki →</strong></a></td>
      <td align="center"><a href="https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1002" target="_blank" rel="noopener noreferrer"><strong>E1002 Wiki →</strong></a></td>
      <td align="center"><a href="https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1003" target="_blank" rel="noopener noreferrer"><strong>E1003 Wiki →</strong></a></td>
      <td align="center"><a href="https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1004" target="_blank" rel="noopener noreferrer"><strong>E1004 Wiki →</strong></a></td>
    </tr>
  </table>
</div>

:::tip
如需并排对比规格（分辨率、刷新时间、是否支持局部刷新、认证、MSRP 等）以及详细的软件支持矩阵，请前往专门的 **[reTerminal E 系列概览](https://wiki.seeedstudio.com/cn/reterminal_e10xx_main_page)**。
:::

## 驱动 / 扩展板系列 — 自备屏幕（BYO Screen）

如果你已经拥有（或计划单独采购）24-pin、50-pin、10.3" 或 13.3" 的 ePaper 面板，驱动板家族可以为你提供载板电子部分——电池管理、按键、充电 IC 和 MCU。

### ESP32-S3 驱动板（Wi-Fi / BLE，SenseCraft HMI）

<div class="table-center">
  <table align="center">
    <tr>
      <th>开发板</th>
      <th>目标屏幕</th>
      <th>亮点</th>
      <th>Wiki</th>
    </tr>
    <tr>
      <td align="center"><strong>EE02</strong></td>
      <td align="center">13.3" Spectra 6</td>
      <td>专用大尺寸彩色驱动板；支持 Wi-Fi + BLE；非常适合数字标牌。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/cn/getting_started_with_ee02" target="_blank" rel="noopener noreferrer">EE02 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>EE03</strong></td>
      <td align="center">10.3" 黑白（高速刷新）</td>
      <td>内置 T-CON 时序；板载 SHT40 用于波形补偿；采用 XIAO ESP32-S3 Plus。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/cn/getting_started_with_ee03" target="_blank" rel="noopener noreferrer">EE03 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>EE04</strong></td>
      <td align="center">24-pin / 50-pin 通用</td>
      <td>跳线可选引脚布局；适配大多数现成的小尺寸 ePaper 屏幕。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/cn/epaper_ee04" target="_blank" rel="noopener noreferrer">EE04 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>EE05</strong></td>
      <td align="center">24-pin 通用（最新）</td>
      <td>EE04 的布局升级版；同样基于 XIAO ESP32-S3，提供最新固件支持。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/cn/epaper_ee05" target="_blank" rel="noopener noreferrer">EE05 →</a></td>
    </tr>
  </table>
</div>

### nRF52840 驱动板（BLE / NFC，超低功耗）

<div class="table-center">
  <table align="center">
    <tr>
      <th>开发板</th>
      <th>目标屏幕</th>
      <th>亮点</th>
      <th>Wiki</th>
    </tr>
    <tr>
      <td align="center"><strong>EN04</strong></td>
      <td align="center">24-pin / 50-pin 通用</td>
      <td>Bluetooth LE + NFC；采用 XIAO nRF52840 Plus；非常适合 ESL 和离线标签。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/cn/epaper_EN04" target="_blank" rel="noopener noreferrer">EN04 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>EN05</strong></td>
      <td align="center">24-pin 通用（最新）</td>
      <td>EN04 的布局升级版；同样基于 nRF52840，提供最新固件支持。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/cn/epaper_en05" target="_blank" rel="noopener noreferrer">EN05 →</a></td>
    </tr>
  </table>
</div>

### 为 XIAO 模块设计的开发板

<div class="table-center">
  <table align="center">
    <tr>
      <th>开发板</th>
      <th>描述</th>
      <th>Wiki</th>
    </tr>
    <tr>
      <td align="center"><strong>XIAO eInk Expansion Board v2</strong></td>
      <td>适用于任意 XIAO 模块的即插即用扩展板；支持常见小尺寸 ePaper 屏幕。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/cn/xiao_eink_expansion_board_v2" target="_blank" rel="noopener noreferrer">v2 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>XIAO ePaper Breakout Board</strong></td>
      <td>最初的 XIAO + ePaper 转接板；配有完善文档，并支持 OpenEpaperLink (OEPL)。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/cn/XIAO-eInk-Expansion-Board" target="_blank" rel="noopener noreferrer">Breakout →</a></td>
    </tr>
  </table>
</div>

:::tip
我们还提供了一个汇总的 **[ePaper 驱动板概览](https://wiki.seeedstudio.com/cn/xiao_epaper_display_board_overview)**，其中并排列出了每块板卡的特性。
:::

## DIY 套件与裸屏

对于更喜欢自己动手组装全部硬件的创客，有两种灵活选择：

<div class="table-center">
  <table align="center">
    <tr>
      <th>产品</th>
      <th>包装内包含 / 产品说明</th>
      <th>最适合的场景</th>
      <th>Wiki</th>
    </tr>
    <tr>
      <td><strong>TRMNL 7.5" (OG) DIY Kit</strong><br/><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/head.webp" style={{width:200, height:'auto'}}/></div></td>
      <td>7.5 英寸黑白电子纸 + ESP32 驱动板 + 亚克力支架。为 TRMNL 云平台预先调优；也可运行 ESPHome 和 Arduino。</td>
      <td>以最低 BOM 成本实现 TRMNL 风格仪表盘的最快路径。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/cn/trmnl_7inch5_diy_kit_main_page" target="_blank" rel="noopener noreferrer">TRMNL 套件 →</a></td>
    </tr>
    <tr>
      <td><strong>XIAO 7.5" ePaper Panel</strong><br/><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.webp" style={{width:200, height:'auto'}}/></div></td>
      <td>裸 7.5 英寸电子纸面板，带有可直接与 XIAO 模组焊盘对接的 FPC 连接器。</td>
      <td>适用于你已经有 XIAO、只想增加屏幕的紧凑、低成本项目。</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/cn/xiao_075inch_epaper_panel" target="_blank" rel="noopener noreferrer">XIAO 面板 →</a></td>
    </tr>
  </table>
</div>

## 软件生态一览

每一款 Seeed 电子纸产品最终都汇聚到同一个软件生态中。选择与你技能水平匹配的工作流——你也可以自由组合使用它们：

<div class="table-center">
  <table align="center">
    <tr>
      <th>工具 / 平台</th>
      <th>类型</th>
      <th>功能说明</th>
      <th>兼容产品</th>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/cn/sensecraft_hmi_overview" target="_blank" rel="noopener noreferrer"><strong>SenseCraft HMI</strong></a></td>
      <td align="center">零代码（云端）</td>
      <td>AI 生成器、图库、画布、RSS / 网页内容、OTA 部署。reTerminal E 系列的默认固件。</td>
      <td>reTerminal E1001 / E1002 / E1003 / E1004 · EE02 · EE03 · EE04 · EE05</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/cn/epaper_work_with_esphome" target="_blank" rel="noopener noreferrer"><strong>ESPHome / Home Assistant</strong></a></td>
      <td align="center">基于 YAML</td>
      <td>原生 Home Assistant 集成；使用 YAML 声明式构建仪表盘。</td>
      <td>reTerminal E1001 / E1002 / E1004 · EE04 · TRMNL DIY Kit · XIAO 7.5" Panel</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/cn/reterminal_e10xx_trmnl" target="_blank" rel="noopener noreferrer"><strong>TRMNL</strong></a></td>
      <td align="center">云端仪表盘</td>
      <td>插件驱动的仪表盘（日历、新闻、天气、金融、自定义数据）。</td>
      <td>reTerminal E1001 · E1002（单色模式）· TRMNL 7.5" DIY Kit · XIAO 7.5" Panel</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_arduino" target="_blank" rel="noopener noreferrer"><strong>Arduino / PlatformIO / ESP-IDF</strong></a></td>
      <td align="center">代码（C/C++）</td>
      <td>完整的编程控制：GPIO、传感器、网络、自定义渲染。</td>
      <td>所有 ESP32-S3 产品（E1001–E1004、EE02–EE05、TRMNL Kit、XIAO Panel）</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_squareline_vision" target="_blank" rel="noopener noreferrer"><strong>SquareLine Vision</strong></a></td>
      <td align="center">可视化 UI 设计</td>
      <td>在浏览器中拖拽式设计 LVGL UI，然后导出可直接编译的代码。</td>
      <td>reTerminal E1001 / E1002</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_eezstudio" target="_blank" rel="noopener noreferrer"><strong>EEZ Studio</strong></a></td>
      <td align="center">可视化 UI 设计</td>
      <td>以可视化方式设计 HMI 界面，并通过 Arduino IDE 部署。</td>
      <td>reTerminal E1001 / E1002 · EE04</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_lopaka" target="_blank" rel="noopener noreferrer"><strong>Lopaka</strong></a></td>
      <td align="center">可视化 UI 设计</td>
      <td>基于 Web 的绘图工具，可导出适用于黑白和彩色电子纸布局的代码。</td>
      <td>reTerminal E1001 / E1002</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/cn/EN04_opendisplay" target="_blank" rel="noopener noreferrer"><strong>OpenEPaperLink / OpenDisplay</strong></a></td>
      <td align="center">开源固件（BLE）</td>
      <td>基于 BLE 驱动的开源电子纸固件。OpenDisplay 开箱即用地支持 EN04；OEPL Config Builder 面向 Breakout Board + XIAO nRF52840 DIY 路径。</td>
      <td>EN04 · XIAO ePaper Breakout Board</td>
    </tr>
  </table>
</div>

## 应用教程索引

下面每篇教程都带你从头到尾走完一个平台的完整流程：

### 智能家居与仪表盘框架

- [搭配 ESPHome 使用](https://wiki.seeedstudio.com/cn/epaper_work_with_esphome) — 主参考文档：刷机路径、通用 YAML 模板、Home Assistant 集成。按产品划分的实战手册： [reTerminal E（基础）](https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_esphome)、[reTerminal E（进阶）](https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_esphome_advanced)、[EE04](https://wiki.seeedstudio.com/cn/EE04_with_esphome_advanced)、[XIAO 7.5" Panel](https://wiki.seeedstudio.com/cn/xiao_075inch_epaper_panel_esphome)、[TRMNL DIY Kit](https://wiki.seeedstudio.com/cn/ogdiy_kit_works_with_esphome)。
- [搭配 TRMNL 使用](https://wiki.seeedstudio.com/cn/reterminal_e10xx_trmnl) — 通过 TRMNL 云平台部署电子墨水仪表盘。一篇文章同时覆盖 reTerminal E1001/E1002、TRMNL DIY Kit 和 XIAO 7.5" ePaper Panel——在标签页中选择你的硬件即可。

### 零代码 / 可视化 UI 设计工具

- [搭配 SenseCraft HMI 使用](https://wiki.seeedstudio.com/cn/EE04_with_hmi) — Seeed 的零代码可视化界面平台；覆盖 reTerminal E 系列和 EE0x 驱动板。
- [搭配 SquareLine Vision 使用](https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_squareline_vision)
- [搭配 EEZ Studio 使用](https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_eezstudio) — 组合 reTerminal E 系列 + EE04 的 LVGL 工作流。
- [搭配 Lopaka 使用](https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_lopaka)

### 基于代码的开发

- [搭配 Arduino 使用](https://wiki.seeedstudio.com/cn/epaper_work_with_arduino) — 主参考文档：IDE 配置、`Seeed_GFX` 库、`driver.h` 生成。按产品划分的实战手册：reTerminal E 系列 — [电子纸显示屏](https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_arduino) 与 [板载外设](https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_arduino_peripherals)、[TRMNL DIY Kit](https://wiki.seeedstudio.com/cn/ogdiy_kit_works_with_arduino)、[XIAO 7.5" Panel](https://wiki.seeedstudio.com/cn/xiao_075inch_epaper_panel_arduino)。
- [搭配 PlatformIO 使用 — EE04](https://wiki.seeedstudio.com/cn/ee04_with_platformio)

### 开源 ESL / OEPL

- [搭配 OpenEPaperLink / OpenDisplay 使用](https://wiki.seeedstudio.com/cn/EN04_opendisplay) — 一篇文章同时覆盖 EN04 BLE 套件和 ePaper Breakout Board + XIAO nRF52840 DIY 路径。

## 资源

- [SenseCraft HMI 文档](https://wiki.seeedstudio.com/cn/sensecraft_hmi_overview/)
- [ESP32-S3 数据手册](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [XIAO 系列概览](https://wiki.seeedstudio.com/cn/xiao_topic_page/)
- [Seeed Studio 电子纸分类商店](https://www.seeedstudio.com/catalogsearch/result/?q=epaper)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
