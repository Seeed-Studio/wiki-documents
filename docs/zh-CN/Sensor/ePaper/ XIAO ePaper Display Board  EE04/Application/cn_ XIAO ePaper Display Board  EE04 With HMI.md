---
description: 使用 SenseCraft HMI 平台为 XIAO EE04 ePaper 显示屏启用可视化界面设计。
title: XIAO ePaper Display Board EE04 与 SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.webp
slug: /cn/EE04_with_hmi
sidebar_position: 2
last_update:
  date: 10/30/2025
  author: Jason
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# SenseCraft HMI 概述

## 简介

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 是 Seeed Studio 强大的基于云的界面设计平台，让您无需编码即可为基于屏幕的设备创建专业的可视化界面。通过直观的拖拽编辑器、预构建模板和 AI 驱动的设计功能，SenseCraft HMI 让您轻松将硬件转换为美观的信息显示屏、仪表板、数字标牌和控制面板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi34.png" style={{width:1000, height:'auto'}}/></div>


## 硬件概述

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### 支持的 ePaper

#### 24 针连接器

- [1.54 英寸 ePaper - 点阵 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13 英寸 ePaper - 柔性单色 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13 英寸 ePaper - 四色 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9 英寸 ePaper - 单色 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9 英寸 ePaper - 四色 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2 英寸 ePaper - 单色 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26 英寸 ePaper - 单色 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83 英寸 ePaper - 单色 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5 英寸 ePaper - 单色 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [7.5 英寸 ePaper - 三色 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/37.png" style={{width:800, height:'auto'}}/></div>

:::tip
使用 XIAO ePaper Display Board 时，请确保根据 ePaper 显示屏类型设置跳线：

- 对于 24 针 ePaper 显示屏 → 将跳线设置为 24 Pin

⚠️ 使用错误的跳线设置可能导致 ePaper 无法显示或显示异常内容。在通电前请务必仔细检查跳线位置。

:::

#### 50 针连接器

- [7.3 英寸 Spectra6 ePaper](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/36.png" style={{width:800, height:'auto'}}/></div>
:::tip
使用 XIAO ePaper Display Board 时，请确保根据 ePaper 显示屏类型设置跳线：
- 对于 50 针 ePaper 显示屏 → 将跳线设置为 50 Pin

⚠️ 使用错误的跳线设置可能导致 ePaper 无法显示或显示异常内容。在通电前请务必仔细检查跳线位置。

:::


## 入门指南

:::tip
目前，XIAO ePaper Display Board(ESP32-S3) - EE04 仅为 7.5 英寸和 7.3 英寸型号提供 HMI 固件。未来将提供更新。
:::

### Sense Craft HMI 访问

在您的网络浏览器中访问 [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 并创建账户或 `Log in`。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi20.png" style={{width:1000, height:'auto'}}/></div>


### 设备刷写器

点击顶部菜单栏中的 `Tools` 以访问我们的配置页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi33.png" style={{width:1000, height:'auto'}}/></div>

<Tabs>
<TabItem value="7.3-Inch ePaper Display" label="7.3 英寸 ePaper 显示屏" default>

***步骤 1 .*** `选择` 7.3 英寸 ePaper 显示屏型号

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi7.png" style={{width:1000, height:'auto'}}/></div>

***步骤 2 .*** 选择最新的 `firmware` 并点击 `Flash`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi5.png" style={{width:1000, height:'auto'}}/></div>

***步骤 3 .*** `扫描` ePaper 上的二维码进行网络配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi36.png" style={{width:1000, height:'auto'}}/></div>
<br></br>

:::note
- 更新固件可确保最佳性能并访问最新功能。建议在首次使用设备前执行此更新。

- 当设备处于关机或睡眠状态时，无法正确刷写固件。如果您为设备选择了正确的端口但从未看到刷写固件进度，则可能需要通过按下设备顶部的绿色按钮来唤醒设备，然后重试。
:::
</TabItem>

<TabItem value="7.5-Inch ePaper Display" label="7.5 英寸 ePaper 显示屏" default>

***步骤 1 .*** 选择 7.5 英寸 ePaper 显示屏型号

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi8.png" style={{width:1000, height:'auto'}}/></div>

***步骤 2 .*** 选择最新的 `firmware` 并点击 `Flash`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi6.png" style={{width:1000, height:'auto'}}/></div>

:::note

- 更新固件可确保最佳性能并访问最新功能。建议在首次使用设备前执行此更新。

- 当设备处于关机或睡眠状态时，无法正确刷写固件。如果您为设备选择了正确的端口但从未看到刷写固件进度，则可能需要通过按下设备顶部的绿色按钮来唤醒设备，然后重试。
:::

</TabItem>

</Tabs>

### 网络设置

***步骤 1 .*** 从您的智能手机或计算机连接到设备的 Wi-Fi 接入点。AP 名称将显示在屏幕上（无需密码）。网络凭据为 XIAO ePaper Display Board(ESP32-S3) - EE04

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi31.png" style={{width:500, height:'auto'}}/></div>

***步骤 2 .*** 连接后，您的手机应自动重定向到 Wi-Fi 配置页面。如果没有，请打开浏览器并导航到 192.168.4.1。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi32.png" style={{width:500, height:'auto'}}/></div>

***步骤 3 .*** 选择您的本地 Wi-Fi 网络并输入密码，然后点击 `Connect`。

:::tip
XIAO ePaper Display Board(ESP32-S3) - EE04 仅支持 2.4GHz WiFi 网络，不支持 5GHz 或其他频段。
:::

***步骤 4 .*** 成功连接后，设备将发出确认蜂鸣声并显示配对码屏幕。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi13.jpg" style={{width:700, height:'auto'}}/></div>


### 连接到 SenseCraft 平台

***步骤 1 .*** 导航到工作区部分并点击 `Add Device`。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi12.png" style={{width:700, height:'auto'}}/></div>

***步骤 2 .*** 为您的设备命名并输入设备屏幕上显示的配对码，然后点击 `Create`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi11.png" style={{width:700, height:'auto'}}/></div>

***步骤 3 .*** 配对完成后，设备将显示您的设备。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi15.png" style={{width:700, height:'auto'}}/></div>


## 创建仪表板

XIAO ePaper Display Board(ESP32-S3) - EE04 与 SenseCraft HMI 平台无缝集成，该平台为您的设备创建和自定义内容提供了强大的工具。我们不在此详细介绍逐步操作，而是探索平台的关键功能，帮助您了解可能实现的功能。

:::note
此演示使用 7.3 英寸屏幕作为示例。如果更换为不同尺寸，请注意以下事项：

- 确认屏幕排线的方向（正面和背面）；
- 验证针脚数量是否匹配；
- 使用相应尺寸的盖帽；
- 安装排线时避免弯曲或过度折叠。
:::

### SenseCraft HMI 功能 SenseCraft HMI

#### AI 生成器

让人工智能设计您的仪表板！只需描述您想要显示的信息，AI 生成器将自动创建一个吸引人且功能齐全的布局。这非常适合快速生成天气显示、日历、待办事项列表或信息面板，无需手动设计工作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi25.png" style={{width:1000, height:'auto'}}/></div>


<br></br>

**仪表板预览**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi22.jpg" alt="7.3-Inch ePaper Display" style={{width:650, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3 英寸电子纸显示屏</em></p>
</div>

#### 图库

使用图库功能将您的 XIAO ePaper Display Board(ESP32-S3) - EE04 转换为数字相框。上传您喜爱的图片，平台将为电子纸显示屏优化它们。创建具有自定义过渡时间的幻灯片。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi27.png" style={{width:1000, height:'auto'}}/></div>

<br></br>

**仪表板预览**


<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi21.jpg" alt="7.3-Inch ePaper Display" style={{width:650, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3 英寸电子纸显示屏</em></p>
</div>

#### 画布

使用画布从头开始设计您的仪表板，这是一个拖放界面，提供各种元素：

- 可自定义字体和大小的文本块
- 图像占位符
- 时间、日期和天气小部件
- 数据可视化工具
- 用于布局组织的形状和分隔符

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi30.png" style={{width:1000, height:'auto'}}/></div>


<br></br>

**仪表板预览**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi31.jpg" alt="7.3-Inch ePaper Display" style={{width:650, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3 英寸电子纸显示屏</em></p>
</div>

#### RSS 订阅集成


通过向您的仪表板添加 RSS 订阅，随时了解您喜爱的新闻来源、博客或网站的最新动态。RSS 功能允许您显示来自多个来源的标题、摘要或完整文章。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi26.png" style={{width:1000, height:'auto'}}/></div>


<br></br>

**仪表板预览**


<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi23.png" alt="7.3-Inch ePaper Display" style={{width:650, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3 英寸电子纸显示屏</em></p>
</div>

#### 网页内容显示

让人工智能设计您的仪表板！只需描述您想要显示的信息，AI 生成器将自动创建一个美观、实用的布局。这非常适合快速生成天气显示、日历、待办事项列表或信息面板，无需手动设计工作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi29.png" style={{width:1000, height:'auto'}}/></div>

<br></br>

**仪表板预览**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi24.png" alt="7.3-Inch ePaper Display" style={{width:650, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3 英寸电子纸显示屏</em></p>
</div>


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
