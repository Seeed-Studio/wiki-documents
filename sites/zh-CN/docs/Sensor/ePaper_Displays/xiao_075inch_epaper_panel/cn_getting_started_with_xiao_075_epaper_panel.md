---
description: 本页面是 XIAO 7.5" 电子纸面板的导航页面。
title: XIAO 7.5" 电子纸面板入门指南
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.webp
slug: /xiao_075inch_epaper_panel
sku: 114993635
sidebar_position: 1
last_update:
  date: 05/19/2025
  author: Citric
createdAt: '2025-05-21'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/cn/xiao_075inch_epaper_panel/
---

# XIAO 7.5" 电子纸面板入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
</div>

## 介绍

由 XIAO ESP32-C3 提供算力，这款 7.5 英寸电子纸显示屏是一款多功能、节能的智能 E Ink® 屏幕，支持包括 [Home Assistant](https://www.home-assistant.io/)、[TRMNL](https://trmnl.app/)、Arduino 等在内的多种流行社区应用。这个灵活的显示解决方案非常适合展示仪表盘数据、天气更新、日程安排和自定义信息。凭借清晰的画面、在深度睡眠模式下高达 3 个月（2000mAh）的卓越电池续航以及广泛的自定义可能性，这款小巧设备能够适应多种使用场景。非常适合现代居家空间和项目环境，在多平台上将功能性与优雅设计相结合，带来更佳的视觉体验。

### 特性

- 原生 Home Assistant 集成
- 面向家庭自动化的 7.5" E Ink® 显示屏
- 低功耗的节能设计
- 支持 Arduino 开发
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

## 硬件概览

XIAO 7.5" 电子纸面板由多个关键组件组成，如下爆炸图所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/207.jpg" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/208.jpg" style={{width:800, height:'auto'}}/></div>

- **7.5" 单色电子纸显示屏**：800 × 480 分辨率显示屏，在刷新后无需耗电即可保持图像
- **电子纸驱动板**：控制显示屏并处理与微控制器的通信
- **XIAO ESP32-C3**：运行固件并管理连接的主微控制器
- **2000 mAh 电池**：为长时间运行提供电力，尤其是在睡眠模式下
- **USB Type-C 接口**：用于供电和编程
- **外壳**：采用 PLA 材质 3D 打印的外壳，用于容纳所有组件

该设备采用分层内部设计，将电子纸显示屏置于前方，驱动板、电池和 XIAO ESP32-C3 堆叠在其后方并封装在外壳内。

## 入门

要开始使用你的 XIAO 7.5" 电子纸面板：

1. **打开支架**：轻轻利用底部的凹槽抬起屏幕，露出内置支架。将设备放置在平坦表面上，并展开支架。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/206.gif" style={{width:500, height:'auto'}}/></div>

2. **开机**：在显示屏朝向你的情况下，在左下角找到电源开关。将其拨到 "ON" 位置（ON 标签隐藏在支架后面，当你面对显示屏时位于右侧）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/205.jpg" style={{width:600, height:'auto'}}/></div>

3. **首次启动**：通电后，设备会自动开始显示三页介绍内容，以演示其功能。

完成以上步骤后，你的电子纸面板就可以进行配置，并与您偏好的编程平台一起使用了。

### 编程按键

XIAO 7.5" 电子纸面板在支架后方配有两个关键按键，用于编程和故障排查：

- **Boot 按键**：当设备没有串口连接或处于睡眠模式而无法上传程序时使用。进入 Bootloader 模式的方法：
  1. 连接 USB 线
  2. 按住 Boot 按键
  3. 在按住 Boot 的同时按一次 Reset 按键
  4. 松开 Reset，然后松开 Boot
  5. 拔下并重新插上电源线

- **Reset 按键**：用于重启程序。只需按下一次即可复位。

这些按键对于设备编程、固件更新以及在设备无响应时进行恢复都至关重要。

## Wiki 中心

以下 Wiki 页面提供了关于如何以不同方式编程和使用你的 XIAO 7.5" 电子纸面板的详细信息：

- [**适配 Home Assistant 的 ESPHome**](https://wiki.seeedstudio.com/cn/xiao_075inch_epaper_panel_esphome) - 通过 ESPHome 集成配置和控制你的电子纸面板，非常适合 Home Assistant 用户创建自定义仪表盘。

- [**适配 Arduino**](https://wiki.seeedstudio.com/cn/xiao_075inch_epaper_panel_arduino/) - 使用 Arduino IDE 结合我们的库和示例对设备进行编程，实现自定义应用。

- [**适配 TRMNL**](https://wiki.seeedstudio.com/cn/reterminal_e10xx_trmnl) - 使用 TRMNL 控制你的显示屏，这是一款用于智能可视化仪表盘管理的开源平台。（在统一的 TRMNL 指南中选择 **XIAO 7.5" Panel** 选项卡。）

## 资源

- **[STP]**: [3D 模型外壳](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [电子纸驱动板原理图 PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)
- **[BAMBU]** [Jonathan Thomson - XIAO 7.5" 电子纸面板壁挂支架](https://makerworld.com/en/models/1487711-seeed-studio-xiao-7-5-epaper-panel-wall-mount#profileId-1554538)

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
