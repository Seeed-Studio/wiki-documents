---
description: '此页面是 XIAO 7.5" 电子纸面板的导航页面。'
title: XIAO 7.5" 电子纸面板入门指南
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.webp
slug: /cn/xiao_075inch_epaper_panel
sidebar_position: 1
last_update:
  date: 05/19/2025
  author: Citric
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong></a>
</div>

## 介绍

由 XIAO ESP32-C3 驱动，这款 7.5 英寸电子纸显示屏是一个多功能、节能的智能 E Ink® 屏幕，支持广泛的流行社区应用，包括 [Home Assistant](https://www.home-assistant.io/)、[TRMNL](https://trmnl.app/)、Arduino 等。这个灵活的显示解决方案非常适合展示仪表板数据、天气更新、日程安排和自定义信息。凭借清晰的视觉效果、在深度睡眠模式下卓越的 3 个月电池续航（2000mAh）以及广泛的自定义可能性，这款紧凑设备适应各种使用场景。非常适合现代生活空间和项目环境，它将功能性与优雅设计相结合，为多个平台提供增强的视觉体验。

### 特性

- 原生 Home Assistant 集成
- 7.5" E Ink® 显示屏用于家庭自动化
- 节能设计，低功耗
- Arduino 开发支持
- 优雅的外形设计

### 规格参数

<div class="table-center">
 <table align="center">
  <tr>
   <th>项目</th>
   <th>描述</th>
  </tr>
  <tr>
   <td>MCU</td>
   <td><a href="https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started/">XIAO ESP32-C3</a></td>
  </tr>
  <tr>
   <td>显示屏</td>
   <td>7.5" 单色电子纸显示屏</td>
  </tr>
  <tr>
   <td>分辨率</td>
   <td>800 x 480</td>
  </tr>
  <tr>
   <td>电池</td>
   <td>2000mAh</td>
  </tr>
  <tr>
   <td>尺寸</td>
   <td>178 x 131 x 19 mm</td>
  </tr>
  <tr>
   <td>重量</td>
   <td>218g</td>
  </tr>
  <tr>
   <td>工作温度</td>
   <td>-25°C 至 50°C</td>
  </tr>
  <tr>
   <td>电源</td>
   <td>USB Type-C 5V</td>
  </tr>
        <tr>
            <td>外壳</td>
            <td>3D 打印 (PLA)</td>
        </tr>
 </table>
</div>

## 硬件概述

XIAO 7.5" 电子墨水屏面板由几个关键组件组成，如分解视图所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/207.jpg" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/208.jpg" style={{width:800, height:'auto'}}/></div>

- **7.5" 单色电子墨水显示屏**：800 × 480 分辨率显示屏，刷新后无需耗电即可保持图像
- **电子墨水驱动板**：控制显示屏并处理与微控制器的通信
- **XIAO ESP32-C3**：运行固件并管理连接的主微控制器
- **2000 mAh 电池**：为设备提供电源以延长运行时间，特别是在睡眠模式下
- **USB Type-C 端口**：用于供电和编程
- **外壳**：PLA 3D 打印外壳，容纳所有组件

该设备采用分层内部设计，将电子墨水显示屏放置在前面，驱动板、电池和 XIAO ESP32-C3 堆叠在外壳内的后面。

## 入门指南

开始使用您的 XIAO 7.5" 电子墨水屏面板：

1. **打开支架**：轻轻使用底部的凹槽抬起屏幕，露出内置支架。将设备放在平坦表面上，支架展开。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/206.gif" style={{width:500, height:'auto'}}/></div>

2. **开机**：面向显示屏时，在左下角找到电源开关。将其滑动到"ON"位置（ON 标签隐藏在支架后面，面向显示屏时在您的右侧）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/205.jpg" style={{width:600, height:'auto'}}/></div>

3. **初始启动**：开机后，设备将自动开始显示三个介绍页面的序列，以演示其功能。

完成这些步骤后，您的电子墨水屏面板将准备好进行配置，并可与您首选的编程平台一起使用。

### 编程按钮

XIAO 7.5" 电子墨水屏面板包含两个位于支架后面的重要按钮，用于编程和故障排除：

- **Boot 按钮**：当设备没有串行连接或处于睡眠模式且无法上传程序时使用。进入 Bootloader 模式：
  1. 连接 USB 线缆
  2. 按住 Boot 按钮
  3. 在按住 Boot 的同时按一次 Reset 按钮
  4. 释放 Reset，然后释放 Boot
  5. 拔掉并重新插入电源线缆

- **Reset 按钮**：用于重启程序。只需按一次即可重置。

这些按钮对于设备编程、固件更新以及设备无响应时的恢复至关重要。

## Wiki 中心

以下 Wiki 页面提供了关于编程和使用 XIAO 7.5" 电子墨水屏面板的不同方法的详细信息：

- [**与 ESPHome 在 Home Assistant 中配合使用**](https://wiki.seeedstudio.com/cn/xiao_075inch_epaper_panel_esphome) - 通过 ESPHome 集成配置和控制您的电子墨水屏面板，非常适合 Home Assistant 用户创建自定义仪表板。

- [**与 Arduino 配合使用**](https://wiki.seeedstudio.com/cn/xiao_075inch_epaper_panel_arduino/) - 使用 Arduino IDE 和我们的库及示例为自定义应用程序编程您的设备。

- [**与 TRMNL 配合使用**](https://wiki.seeedstudio.com/cn/xiao_7_5_inch_epaper_panel_with_trmnl) - 使用 trmnl 控制您的显示屏，这是一个用于智能可视化仪表板管理的开源平台。

## 资源

- **[STP]**: [3D 模型外壳](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [电子纸驱动板原理图 PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)
- **[BAMBU]** [Jonathan Thomson - XIAO 7.5" 电子纸面板壁挂支架](https://makerworld.com/en/models/1487711-seeed-studio-xiao-7-5-epaper-panel-wall-mount#profileId-1554538)

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
