---
description: 使用 SenseCraft HMI——Seeed 的零代码可视化界面设计平台——来驱动任意兼容的 Seeed 电子纸产品，从 reTerminal E 系列到所有 XIAO 电子纸驱动板。
title: 使用 SenseCraft HMI 工作
keywords:
  - 电子纸显示屏
  - SenseCraft HMI
  - reTerminal
  - EE02
  - EE03
  - EE04
  - EE05
image: https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.webp
slug: /EE04_with_hmi
sidebar_position: 1
last_update:
  date: 04/28/2026
  author: dimo
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 使用 SenseCraft HMI 工作

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 是 Seeed Studio 功能强大的云端界面设计平台，让你在**无需编写代码**的情况下，为基于屏幕的设备创建专业的可视化界面。借助直观的拖拽式编辑器、预构建模板以及 AI 驱动的设计能力，SenseCraft HMI 能将你的硬件变成精美的信息展示屏、仪表盘、数字标牌或控制面板。

本指南是使用 SenseCraft HMI 搭配**任意兼容的 Seeed 电子纸产品**的权威参考。你只需在固件步骤中选择一次硬件，其余工作流程对所有设备完全一致。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.png" style={{width:1000, height:'auto'}}/></div>

## 兼容硬件

SenseCraft HMI 开箱即用地支持以下 Seeed 电子纸产品。reTerminal E 系列出厂已预装 HMI 固件，而 XIAO 电子纸显示板（EE02–EE05）系列则需要在浏览器中的 SenseCraft HMI Tools 页面进行烧录。

<div class="table-center">
  <table align="center">
    <tr>
      <th>产品线</th>
      <th>开箱体验</th>
      <th>目标屏幕</th>
    </tr>
    <tr>
      <td><strong>reTerminal E1001 / E1002 / E1003 / E1004</strong></td>
      <td>预装 HMI 固件——上电并配对即可</td>
      <td>集成 7.5" / 7.3" / 10.3" / 13.3" 面板</td>
    </tr>
    <tr>
      <td><strong>EE02</strong></td>
      <td>从 SenseCraft HMI Tools 页面烧录</td>
      <td>13.3" Spectra 6（彩色）</td>
    </tr>
    <tr>
      <td><strong>EE03</strong></td>
      <td>从 SenseCraft HMI Tools 页面烧录</td>
      <td>10.3" 单色（高速刷新）</td>
    </tr>
    <tr>
      <td><strong>EE04</strong></td>
      <td>从 SenseCraft HMI Tools 页面烧录</td>
      <td>24-pin / 50-pin 通用——多种尺寸</td>
    </tr>
    <tr>
      <td><strong>EE05</strong></td>
      <td>从 SenseCraft HMI Tools 页面烧录</td>
      <td>24-pin / 50-pin 通用（最新）</td>
    </tr>
  </table>
</div>

本文以 **XIAO ePaper Display Board (ESP32-S3) – EE04** 搭配 **7.3" Spectra 6** 显示屏作为主要硬件示例，因为它覆盖的功能最多。所有步骤同样适用于其他产品，差异之处会在各自的选项卡中单独说明。

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board(ESP32-S3) - EE04</th>
        <th>7.3" Spectra 6 电子墨水屏</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/60hmi.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### EE04 / EE05 — 支持的屏幕列表

XIAO ePaper Display Board EE04 / EE05 提供两种连接器选项——**24-pin** 和 **50-pin**——支持多种尺寸的屏幕。请从下表中选择与你的显示屏匹配的型号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi71.png" style={{width:800, height:'auto'}}/></div>

<Tabs groupId="hmi-connector">
<TabItem value="24pin" label="24-Pin 连接器" default>

- [1.54-inch ePaper - Monochrome 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch ePaper - Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13-inch ePaper - Quadruple Color 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9-inch ePaper - Monochrome 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9-inch ePaper - Quadruple Color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2-inch ePaper - Monochrome 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch ePaper - Monochrome 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/37.png" style={{width:800, height:'auto'}}/></div>

:::tip 上电前将跳线设置为 **24 Pin**
使用错误的跳线设置可能导致电子纸无法显示或显示异常内容。上电前务必再次确认跳线位置。
:::

</TabItem>
<TabItem value="50pin" label="50-Pin 连接器">

- [7.3-Inch Spectra 6 ePaper 800x480](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/36.png" style={{width:800, height:'auto'}}/></div>

:::tip 上电前将跳线设置为 **50 Pin**
使用错误的跳线设置可能导致电子纸无法显示或显示异常内容。上电前务必再次确认跳线位置。
:::

</TabItem>
</Tabs>

## 步骤 1：注册 SenseCraft HMI 账号

点击 [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 页面右上角的按钮来创建账号。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi63.png" style={{width:1000, height:'auto'}}/></div>

## 步骤 2：在设备上获取 HMI 固件

<Tabs groupId="hmi-hardware">
<TabItem value="reterminal" label="reTerminal E 系列" default>

reTerminal **E1001 / E1002 / E1003 / E1004** 出厂时已预装 SenseCraft HMI 固件。只需给设备上电，然后直接跳到步骤 3（网络设置）。

如果你之前烧录了其他固件（例如 TRMNL），可以通过 SenseCraft HMI Tools 页面切换回 HMI：

1. 打开 [SenseCraft HMI 设备页面](https://sensecraft.seeed.cc/hmi/device) 并选择你的 reTerminal 型号。
2. 选择最新的 **HMI** 固件版本（如果你想要一个干净的设备，请使用 **Full Flash**）。
3. 通过 USB-C 将设备连接到电脑，并按照屏幕上的串口提示操作。

</TabItem>
<TabItem value="ee04" label="EE02 / EE03 / EE04 / EE05">

注册完成后，点击顶部菜单栏中的 **Tools** 进入固件烧录区域。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi62.png" style={{width:1000, height:'auto'}}/></div>

:::tip
XIAO ePaper Display Board EE04 / EE05 开箱即支持以下电子纸屏幕：

- [1.54-inch ePaper - Monochrome 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch ePaper - Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13-inch ePaper - Quadruple Color 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9-inch ePaper - Monochrome 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9-inch ePaper - Quadruple Color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2-inch ePaper - Monochrome 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch ePaper - Monochrome 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [7.3-inch Spectra 6 ePaper 800x480](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

EE02 专用于 13.3" Spectra 6；EE03 专用于 10.3" 高速刷新单色屏。
:::

所有屏幕尺寸的烧录流程完全相同——只需为你的面板选择正确的固件版本。下面的示例使用 **7.3" 全彩显示屏 (800×480)**。

**步骤 1.** 在 Tools 页面中选择 **7.3" Full-Color Display 800×480** 条目。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi92.png" style={{width:1000, height:'auto'}}/></div>

**步骤 2.** 选择最新的固件（例如 `EE04_7_3_color_1.0.5`）。

:::tip
SenseCraft HMI 平台会定期更新。请始终选择最新的固件版本，以获得最佳兼容性和性能。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi5.png" style={{width:1000, height:'auto'}}/></div>

**步骤 3.** 点击 **Flash** 上传固件。

点击 Flash 后，平台会弹出端口选择窗口。选择与你的设备对应的端口。

- **Full Flash**：清除所有存储信息，包括 Wi-Fi 网络和用户面板数据。

:::tip
如果没有出现端口，只需按下板子上的 **RESET** 按钮以刷新连接。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi65.png" style={{width:1000, height:'auto'}}/></div>

**步骤 4.** 检查显示输出。

烧录完成后，电子墨水屏会短暂闪烁，并显示如下二维码界面。两个二维码分别指向用户指南和 Wi-Fi 设置页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi67.png" style={{width:1000, height:'auto'}}/></div>

此时配置尚未完成。请继续查看下方的 **步骤 3：网络设置**。

</TabItem>
</Tabs>

## 步骤 3：网络设置

对于所有运行 HMI 固件的 Seeed 电子墨水屏产品，Wi-Fi 配对流程都是相同的。

**步骤 1.** 将你的手机或电脑连接到设备的 Wi-Fi 接入点。AP 名称会显示在设备屏幕上（无需密码）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi31.png" style={{width:500, height:'auto'}}/></div>

**步骤 2.** 连接成功后，扫描电子墨水屏上的二维码——你的手机应会自动跳转到 Wi-Fi 配置页面。如果没有，请打开浏览器并访问 `192.168.4.1`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi32.png" style={{width:500, height:'auto'}}/></div>

**步骤 3.** 选择你的本地 Wi-Fi 网络并输入密码，然后点击 **Connect**。

:::tip
XIAO ESP32-S3 系列仅支持 **2.4 GHz Wi-Fi** 网络。不支持 5 GHz 网络。
:::

**步骤 4.** 连接完成后，屏幕会显示一个配对码：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi13.jpg" style={{width:700, height:'auto'}}/></div>

## 步骤 4：将设备添加到 SenseCraft HMI

**步骤 1.** 进入 **Workspace** 区域并点击 **Add Device**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi12.png" style={{width:700, height:'auto'}}/></div>

**步骤 2.** 为你的设备命名，输入设备屏幕上显示的配对码，然后点击 **Create**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi11.png" style={{width:700, height:'auto'}}/></div>

**步骤 3.** 配对完成后，你的设备会出现在 Workspace 中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi68.png" style={{width:700, height:'auto'}}/></div>

现在你可以在 SenseCraft HMI 中开始设计仪表盘了。

## 创建仪表盘

SenseCraft HMI 平台提供了强大的内容设计和自定义工具。下面介绍五个核心构建模块；完整参考请查看 [SenseCraft HMI 文档](https://sensecraft-hmi-docs.seeed.cc/en/)。

:::note
以下演示使用的是 7.3" 屏幕。如果使用其他尺寸，请记得：

- 确认屏幕 FPC 软排线的方向（正反面）。
- 确认排针数量与你设备的连接器一致。
- 使用对应尺寸的上盖。
- 安装软排线时避免弯折或过度折叠。
:::

### AI Generator

让 AI 为你设计仪表盘。描述你希望显示的信息，AI Generator 会自动创建一个美观且实用的布局——非常适合天气显示、日历、待办清单或信息面板，无需手动设计。

[了解更多 AI Generator →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-ai-generator/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi25.png" style={{width:700, height:'auto'}}/></div>

**电子墨水屏显示效果：**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi42.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3 英寸电子墨水屏</em></p>
</div>

### Gallery

将你的电子墨水屏变成数码相框。上传喜爱的图片，平台会为电子墨水屏进行优化。你可以创建带有自定义切换时间的幻灯片。

[了解更多 Gallery →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-gallery/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi27.png" style={{width:700, height:'auto'}}/></div>

**电子墨水屏显示效果：**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi50.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3 英寸电子墨水屏</em></p>
</div>

### Canvas

使用 Canvas 从零开始设计你的仪表盘——一个拖拽式界面，提供：

- 可自定义字体和大小的文本块
- 图片占位区域
- 时间、日期和天气组件
- 数据可视化工具
- 用于布局组织的形状和分隔线

[了解更多 Canvas →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-canvas/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi30.png" style={{width:700, height:'auto'}}/></div>

**电子墨水屏显示效果：**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi46.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3 英寸电子墨水屏</em></p>
</div>

### RSS Feed Integration

通过在仪表盘中添加 RSS 源，随时获取你喜爱的新闻来源或网站的最新内容。可以显示来自多个来源的标题、摘要或完整文章。

推荐两个来源：

- [BBC News](http://feeds.bbci.co.uk/news/rss.xml)
- [The New York Times](https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml)

[了解更多 RSS Feed Integration →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-rss/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/75hmi.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi26.png" style={{width:700, height:'auto'}}/></div>

**电子墨水屏显示效果：**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi51.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3 英寸电子墨水屏</em></p>
</div>

### Web Content Display

在你的电子墨水屏仪表盘上直接嵌入任意网页 URL。非常适合透明展示那些尚未提供原生 HMI 插件的工具和页面。

[了解更多 Web Content Display →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-web/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi29.png" style={{width:700, height:'auto'}}/></div>

**电子墨水屏显示效果：**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi53.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3 英寸电子墨水屏</em></p>
</div>

## 参考与资源

- [SenseCraft HMI 入门（官方文档）](https://sensecraft-hmi-docs.seeed.cc/en/) —— 更深入地了解如何使用 SenseCraft HMI，最大化其能力并提升你的项目。

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
