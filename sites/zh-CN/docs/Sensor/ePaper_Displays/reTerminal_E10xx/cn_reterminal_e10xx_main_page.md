---
description: 本文是 reTerminal E 系列的汇总页面。
title: reTerminal E 系列
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /reterminal_e10xx_main_page
sku: 100017057,100073581
sidebar_position: 1
last_update:
  date: 08/05/2026
  author: Citric
createdAt: '2025-07-25'
updatedAt: '2026-08-05'
url: https://wiki.seeedstudio.com/cn/reterminal_e10xx_main_page/
---
# reTerminal E 系列电子纸显示屏概览

:::tip 在浏览器中生成 ESPHome YAML 或烧录演示固件
打开 **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)** 即可快速开始。选择 **ESPHome** 卡片，挑选你的设备（E1001 / E1002 / E1003 / E1004），勾选所需的板载功能，生成匹配的 ESPHome YAML，或者直接在浏览器中烧录演示固件（桌面版 Chrome 或 Edge）。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Hub 🖱️</font></span></strong>
    </a>
</div><br />
:::

## 介绍

reTerminal E 系列是 Seeed Studio 基于 ESP32-S3 的电子纸显示终端产品家族，专为**始终在线、低功耗信息显示**而打造。该系列包含四款型号 —— **E1001、E1002、E1003、E1004** —— 覆盖 7.3" 到 13.3" 的黑白和全彩面板，可选触控交互和长达数月的电池续航。它们共享同一软件栈（SenseCraft HMI、Home Assistant / ESPHome、Arduino 等），你只需学习一次，然后根据场景选择合适的外形尺寸。

与持续耗电的传统显示屏不同，reTerminal E 系列仅在重绘内容时才会消耗电流，非常适合用作数码相框、智能家居仪表盘、零售标牌、会议室看板、课堂显示屏以及其他需要始终显示信息的应用场景。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

## 产品矩阵一览

四款型号，一个生态系统。可按 **屏幕尺寸**、**彩色或黑白**、**触控** 和 **电池续航** 来选择：

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
      <td align="center"><strong>7.3" 全彩</strong><br/>E Ink® Spectra™ 6<br/>约 3 个月续航</td>
      <td align="center"><strong>10.3" 黑白</strong><br/>16 级灰度 + 触控<br/>约 6 个月续航</td>
      <td align="center"><strong>13.3" 全彩</strong><br/>E Ink® Spectra™ 6<br/>约 6 个月续航</td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer"><strong>购买 E1001</strong></a><br/><a href="https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1001" target="_blank" rel="noopener noreferrer">Wiki →</a></td>
      <td align="center"><a href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer"><strong>购买 E1002</strong></a><br/><a href="https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1002" target="_blank" rel="noopener noreferrer">Wiki →</a></td>
      <td align="center"><a href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer"><strong>购买 E1003</strong></a><br/><a href="https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1003" target="_blank" rel="noopener noreferrer">Wiki →</a></td>
      <td align="center"><a href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer"><strong>购买 E1004</strong></a><br/><a href="https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1004" target="_blank" rel="noopener noreferrer">Wiki →</a></td>
    </tr>
  </table>
</div>

## 规格对比

四款型号都采用相同的 ESP32-S3 平台，支持 Wi-Fi 4 / Bluetooth 5.0 无线，板载温湿度传感器和蜂鸣器，USB-C 5 V / 1 A 供电输入，工作温度范围为 0–40 °C，并配备金属外壳。它们之间的差异主要体现在 **显示面板**、**刷新特性**、**电池**、**扩展能力** 和 **认证** 上：

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">项目</th>
			<th align="center">reTerminal E1001</th>
			<th align="center">reTerminal E1002</th>
			<th align="center">reTerminal E1003</th>
			<th align="center">reTerminal E1004</th>
		</tr>
		<tr>
			<td align="center"><strong>显示尺寸</strong></td>
			<td align="center">7.5"</td>
			<td align="center">7.3"</td>
			<td align="center">10.3"</td>
			<td align="center">13.3"</td>
		</tr>
		<tr>
			<td align="center"><strong>显示类型</strong></td>
			<td align="center">黑白<br/>(4 级灰度)</td>
			<td align="center">全彩<br/>(E Ink® Spectra™ 6)</td>
			<td align="center">黑白<br/>(16 级灰度)</td>
			<td align="center">全彩<br/>(E Ink® Spectra™ 6)</td>
		</tr>
		<tr>
			<td align="center"><strong>分辨率</strong></td>
			<td align="center">800 × 480</td>
			<td align="center">800 × 480</td>
			<td align="center">1404 × 1872</td>
			<td align="center">1200 × 1600</td>
		</tr>
		<tr>
			<td align="center"><strong>局部刷新</strong></td>
			<td align="center">✅</td>
			<td align="center">❌</td>
			<td align="center">✅</td>
			<td align="center">❌</td>
		</tr>
		<tr>
			<td align="center"><strong>刷新时间</strong></td>
			<td align="center">2–5 s</td>
			<td align="center">15–20 s</td>
			<td align="center">2–3 s</td>
			<td align="center">约 20 s</td>
		</tr>
		<tr>
			<td align="center"><strong>触控</strong></td>
			<td align="center">—</td>
			<td align="center">—</td>
			<td align="center">✅ 电容触控<br/>(SenseCraft HMI v1.1.2+)</td>
			<td align="center">—</td>
		</tr>
		<tr>
			<td align="center"><strong>处理器</strong></td>
			<td align="center" colspan="4">ESP32-S3，带 8 MB PSRAM</td>
		</tr>
		<tr>
			<td align="center"><strong>存储</strong></td>
			<td align="center">32 MB Flash<br/>microSD 最大 32 GB</td>
			<td align="center">32 MB Flash<br/>microSD 最大 32 GB</td>
			<td align="center">32 MB Flash<br/>microSD 最大 32 GB</td>
			<td align="center">32 MB Flash<br/>microSD 最大 32 GB<br/>(<strong>内含 16 GB</strong>)</td>
		</tr>
		<tr>
			<td align="center"><strong>无线</strong></td>
			<td align="center" colspan="4">2.4 GHz Wi-Fi 802.11 b/g/n + Bluetooth 5.0</td>
		</tr>
		<tr>
			<td align="center"><strong>板载传感器</strong></td>
			<td align="center" colspan="4">温湿度传感器</td>
		</tr>
		<tr>
			<td align="center"><strong>音频</strong></td>
			<td align="center" colspan="4">蜂鸣器（声音提醒）· E1001 / E1002 / E1003 预留麦克风</td>
		</tr>
		<tr>
			<td align="center"><strong>电池</strong></td>
			<td align="center">2000 mAh<br/>约 3 个月</td>
			<td align="center">2000 mAh<br/>约 3 个月</td>
			<td align="center">3000 mAh<br/>约 6 个月</td>
			<td align="center">5000 mAh<br/>约 6 个月</td>
		</tr>
		<tr>
			<td align="center"><strong>电池监测</strong></td>
			<td align="center" colspan="4">✅ 板载电池电压监测</td>
		</tr>
		<tr>
			<td align="center"><strong>电源输入</strong></td>
			<td align="center" colspan="4">USB-C 5 V / 1 A</td>
		</tr>
		<tr>
			<td align="center"><strong>工作温度</strong></td>
			<td align="center" colspan="4">0–40 °C</td>
		</tr>
		<tr>
			<td align="center"><strong>外壳</strong></td>
			<td align="center" colspan="4">金属</td>
		</tr>
		<tr>
			<td align="center"><strong>尺寸</strong></td>
			<td align="center">176 × 120 × 53 mm<br/>(不含支架为 17 mm)</td>
			<td align="center">176 × 120 × 53 mm<br/>(不含支架为 17 mm)</td>
			<td align="center">224 × 187 × 18.6 mm</td>
			<td align="center">376 × 311 × 40 mm</td>
		</tr>
		<tr>
			<td align="center"><strong>扩展</strong></td>
			<td align="center">8 针排针<br/>UART / I²C / GPIO</td>
			<td align="center">8 针排针<br/>UART / I²C / GPIO</td>
			<td align="center">排针<br/>UART / I²C / GPIO</td>
			<td align="center">2 × 4 排针<br/>UART / I²C / GPIO / ADC</td>
		</tr>
		<tr>
			<td align="center"><strong>认证</strong></td>
			<td align="center">FCC / CE / TELEC<br/>PSE / RoHS / UKCA</td>
			<td align="center">FCC / CE / TELEC<br/>PSE / RoHS / UKCA</td>
			<td align="center">FCC / CE</td>
			<td align="center">FCC / CE</td>
		</tr>
		<tr>
			<td align="center"><strong>建议零售价</strong></td>
			<td align="center">&#36;69.00</td>
			<td align="center">&#36;99.00</td>
			<td align="center">&#36;159.90</td>
			<td align="center">&#36;279.90</td>
		</tr>
	</table>
</div>

## 如何选择

使用下面的快速指南来缩小到一个型号。如果有多行符合你的需求，通常**最后一行匹配的型号**就是更合适的选择。

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">如果你的优先级是…</th>
			<th align="center">推荐型号</th>
			<th align="center">原因</th>
		</tr>
		<tr>
			<td>最低成本 / 以文字为主的信息看板 / 快速局部刷新</td>
			<td align="center"><strong>E1001</strong></td>
			<td>7.5 英寸黑白屏，4 级灰度，支持局部刷新，2–5 秒刷新率。</td>
		</tr>
		<tr>
			<td>与 E1001 相同外形尺寸，但你希望呈现鲜艳的全彩内容</td>
			<td align="center"><strong>E1002</strong></td>
			<td>7.3 英寸 Spectra™ 6 全彩面板——画廊、菜谱、儿童家务清单、零售标牌。注意：全彩显示以更丰富的视觉效果为代价，不支持局部刷新（整屏刷新约 15–20 秒）。</td>
		</tr>
		<tr>
			<td>触控交互 / 交互式仪表盘 / 大尺寸黑白阅读器</td>
			<td align="center"><strong>E1003</strong></td>
			<td>10.3 英寸 16 级灰度，支持电容触控（HMI v1.1.2+），电池续航可达 6 个月。</td>
		</tr>
		<tr>
			<td>最大、最清晰、相框级别的彩色显示屏</td>
			<td align="center"><strong>E1004</strong></td>
			<td>13.3 英寸 Spectra™ 6 全彩屏，1200×1600 分辨率，5000 mAh 电池，预装 16 GB microSD 卡。</td>
		</tr>
		<tr>
			<td>现在就需要集成 Home Assistant / ESPHome</td>
			<td align="center"><strong>E1001 / E1002 / E1003 / E1004</strong></td>
			<td>四款型号均通过 ESPHome 支持 Home Assistant。E1003 和 E1004 需要 ESPHome 2026.7.0 或更高版本。</td>
		</tr>
		<tr>
			<td>想要一个 TRMNL E-Ink 仪表盘</td>
			<td align="center"><strong>E1001 / E1002 / E1003 / E1004</strong></td>
			<td>四款型号均已支持。E1002 和 E1004 配备彩色面板，但目前在 TRMNL 下以黑白模式运行。</td>
		</tr>
		<tr>
			<td>电池续航是唯一最重要的因素</td>
			<td align="center"><strong>E1003 / E1004</strong></td>
			<td>在默认刷新设置下，电池续航最长可达 6 个月。</td>
		</tr>
	</table>
</div>

## reTerminal E1001

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1001" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"3"}>reTerminal E1001 Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>立即获取</font></span></strong>
  </a>
</div><br />

reTerminal E1001 配备 7.5 英寸黑白电子纸显示屏，支持 4 级灰度。其 800×480 分辨率可呈现清晰锐利的文字和图像，同时功耗极低。黑白显示非常适合以文字可读性和电池续航为优先的应用场景。

### 主要特性

- 7.5 英寸黑白电子纸显示屏，支持 4 级灰度
- 800×480 分辨率
- 超低功耗，显著延长电池续航
- 非常适合日历、待办清单和信息看板等文字密集型应用

## reTerminal E1002

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1002" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>reTerminal E1002 Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>立即获取</font></span></strong>
  </a>
</div><br />

reTerminal E1002 采用 7.3 英寸高亮全彩电子纸显示屏，搭载 ACeP（Advanced Color ePaper）技术。该彩色显示屏在保留电子纸技术低功耗优势的同时，支持多种颜色，能够呈现更具视觉吸引力的内容，非常适合对视觉区分度和美观度有较高要求的应用。

### 主要特性

- 7.3 英寸全彩电子纸显示屏，采用 ACeP 技术
- 800×480 分辨率
- 在保持低功耗的同时提供丰富的色彩表现
- 非常适合画廊展示、彩色仪表盘和视觉导向型应用

## reTerminal E1003

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1003" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>reTerminal E1003 Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>立即获取</font></span></strong>
  </a>
</div><br />

reTerminal E1003 是一款 10.3 英寸开源黑白电子纸显示屏，具备 16 级灰度和 1404×1872 像素高分辨率，电池续航最长可达 6 个月。当前在 SenseCraft HMI 固件 v1.1.2 上已支持触控交互。其由 ESP32-S3 驱动，原生支持 SenseCraft HMI 无代码 UI 设计，同时也支持 Arduino、PlatformIO 和 ESPHome（Home Assistant）进行进一步开发。

与触控相关的 Arduino 库计划在未来开源发布，以便更灵活地自定义面板。更多更新将很快发布。ESPHome 已经支持 E1003 显示驱动和 GT911 电容触控——请参阅 [ESPHome cookbooks](/cn/reterminal_e10xx_with_esphome)。

### 主要特性

- 10.3 英寸黑白电子纸显示屏，在 HMI 固件 v1.1.2 上支持触控交互
- 16 级灰度，1404×1872 高分辨率
- 超低功耗运行，电池续航最长可达 6 个月
- 原生支持 SenseCraft HMI，并兼容 Arduino、PlatformIO 和 ESPHome（Home Assistant）

## reTerminal E1004

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1004" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>reTerminal E1004 Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>立即获取</font></span></strong>
  </a>
</div><br />

reTerminal E1004 配备 13.3 英寸全彩电子纸显示屏，电池续航最长可达 6 个月。由 ESP32-S3 驱动，它支持 SenseCraft HMI 进行无代码仪表盘创建和图像上传，同时还通过 ESPHome 支持 Home Assistant，并兼容 Arduino 和 ESP-IDF 等高级开发流程。E1004 显示驱动需要 ESPHome **2026.7.0 或更高版本**——请参阅 [ESPHome cookbooks](/cn/reterminal_e10xx_with_esphome)。

### 主要特性

- 13.3 英寸全彩电子纸显示屏
- 在始终在线场景下电池续航最长可达 6 个月
- ESP32-S3 平台，支持 SenseCraft HMI 无代码开发
- 兼容 Home Assistant / ESPHome、Arduino 和 ESP-IDF

## SenseCraft HMI — 默认零代码平台

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/sensecraft_hmi_overview" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI Wiki</font></span></strong>
  </a>
</div><br />

每一台 reTerminal E 系列设备出厂时都预装了 **SenseCraft HMI** 固件，因此你无需编写任何代码就能立即开始使用。Web 应用负责登录、仪表盘设计以及将配置通过 OTA 部署到你的设备上：

- **AI Generator** —— 用自然语言描述一个仪表盘，让 AI 自动为你完成布局。
- **Gallery** —— 将图片和幻灯片直接推送到面板，用于数码相框等场景。
- **Canvas** —— 通过拖拽组件来构建自定义仪表盘。
- **RSS / Web Content** —— 将实时新闻、天气、日历或任意 Web 订阅源拉取到屏幕上。
- **Touch interaction** —— 从 HMI 固件 v1.1.2 起在 E1003 上得到完整支持。

如果你需要比无代码流程更高的控制能力，每台设备也都开放了底层 ESP32-S3，你可以随时切换到 ESPHome / Home Assistant、Arduino，以及下文的应用教程。若需要现成的 ESPHome YAML，可使用 [Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/) 中的 ESPHome 卡片，并勾选你所需的功能。

## 应用与教程

除了 SenseCraft HMI 之外，reTerminal E 系列还集成了多种行业标准平台和可视化 UI 设计工具。下表将告诉你每个教程当前支持哪些型号。

### 智能家居与仪表盘框架

<div class="table-center">
	<table align="center">
		<tr>
			<th>教程</th>
			<th>功能说明</th>
			<th>E1001</th>
			<th>E1002</th>
			<th>E1003</th>
			<th>E1004</th>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_esphome">ESPHome — Display</a></td>
			<td>将设备插入 Home Assistant，并使用 YAML 绘制简单的电子纸图形。通过在 <a href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/">Firmware Hub</a> 中选择你的设备和功能，生成入门 YAML。</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_esphome_advanced">ESPHome — I/O, Battery, Touch &amp; Power</a></td>
			<td>按钮、蜂鸣器、板载 LED、电池监控、深度睡眠、多页面仪表盘，以及电容触摸（E1003）。</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_esphome_rtc_sd_microphone">ESPHome — RTC, SD &amp; Microphone</a></td>
			<td>PCF8563 RTC 时间同步、microSD 卡检测以及板载 PDM 麦克风配置。</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅ <em>（无麦克风）</em></td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/cn/reterminal_e10xx_trmnl">Works with TRMNL</a></td>
			<td>通过 TRMNL 平台部署电子墨水仪表盘。</td>
			<td align="center">✅</td>
			<td align="center">✅ <em>（单色模式）</em></td>
			<td align="center">✅</td>
			<td align="center">✅ <em>（单色模式）</em></td>
		</tr>
	</table>
</div>

### 无代码 / 可视化 UI 设计工具

<div class="table-center">
	<table align="center">
		<tr>
			<th>教程</th>
			<th>功能说明</th>
			<th>E1001</th>
			<th>E1002</th>
			<th>E1003</th>
			<th>E1004</th>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_squareline_vision">Work with SquareLine Vision</a></td>
			<td>在浏览器中拖放式编辑 LVGL UI，然后导出可直接编译的代码。</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">—</td>
			<td align="center">—</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_eezstudio">Work with EEZ Studio</a></td>
			<td>以可视化方式设计 HMI 界面，并通过 Arduino IDE 部署。</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">—</td>
			<td align="center">—</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_lopaka">Work with Lopaka</a></td>
			<td>基于 Web 的绘图工具，可导出适用于单色和彩色电子纸布局的代码。</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">—</td>
			<td align="center">—</td>
		</tr>
	</table>
</div>

### 基于代码的开发

<div class="table-center">
	<table align="center">
		<tr>
			<th>教程</th>
			<th>功能说明</th>
			<th>E1001</th>
			<th>E1002</th>
			<th>E1003</th>
			<th>E1004</th>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_arduino">Arduino — ePaper Display</a></td>
			<td>使用 Seeed_GFX 或 GxEPD2 库在电子纸屏幕上渲染文本、图形和图像。</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_arduino_peripherals">Arduino — Onboard Peripherals</a></td>
			<td>驱动板载 LED、蜂鸣器、三个用户按键、SHT4x 传感器、电池监控以及 microSD 卡。</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_arduino_peripherals_2">Arduino — RTC, Low Power, Audio &amp; Touch</a></td>
			<td>RTC 时间管理、深度睡眠 / 轻度睡眠、I2S 麦克风录音，以及电容触摸绘图（仅 E1003 支持麦克风和触摸）。</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
		</tr>
	</table>
</div>

:::tip
在寻找每款设备的入门指南（开箱、Wi-Fi 设置、固件更新）？请跳转到上表中链接的产品 Wiki：
[E1001](https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1001) ·
[E1002](https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1002) ·
[E1003](https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1003) ·
[E1004](https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1004)。
:::

## 资源

- [SenseCraft HMI 文档](https://wiki.seeedstudio.com/cn/sensecraft_hmi_overview/)
- [ESP32-S3 数据手册](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [reTerminal MIC 无线电认证](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/reTerminal_MIC_Radio_Certificate.pdf)

## FCC 声明

任何未经负责合规方明确批准的更改或修改，都可能导致用户操作本设备的权限失效。本设备符合 FCC 规则第 15 部分的规定。操作须符合以下两个条件：

(1) 本设备不得造成有害干扰；并且

(2) 本设备必须接受所接收到的任何干扰，包括可能导致不期望操作的干扰。本发射器不得与任何其他天线或发射器共同安装或同时运行。

注意：本设备已经过测试，符合 FCC 规则第 15 部分中针对 B 类数字设备的限制。这些限制旨在为住宅安装环境中防止有害干扰提供合理保护。本设备会产生、使用并能辐射射频能量，如果未按照说明进行安装和使用，可能会对无线电通信造成有害干扰。然而，不能保证在某一特定安装中不会发生干扰。如果本设备确实对无线电或电视接收造成有害干扰（可通过关闭和开启设备来判断），建议用户尝试通过以下一种或多种措施纠正干扰：

– 重新定向或移动接收天线。

– 增加设备与接收机之间的距离。

– 将设备连接到与接收机不同的电路上的电源插座。

– 咨询经销商或有经验的无线电 / 电视技术人员以获取帮助。本设备符合针对非受控环境规定的 FCC 射频暴露限制。本设备应安装和操作在辐射体与人体之间至少 20cm 的最小距离条件下。

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
