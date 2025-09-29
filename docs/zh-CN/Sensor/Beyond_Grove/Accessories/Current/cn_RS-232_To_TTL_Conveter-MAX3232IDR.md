---
title: RS-232 转 TTL 转换器 (MAX3232IDR)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/RS-232_To_TTL_Conveter-MAX3232IDR/
slug: /cn/RS-232_To_TTL_Conveter-MAX3232IDR
last_update:
  date: 02/03/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/RS-232_To_TTL_Conveter-MAX3232IDR/img/main.jpg)

大多数 MCU 使用 TTL 电平，而计算机串口通常使用 232 电平。如果我们希望计算机与 MCU 通信，就需要这个 **RS-232 转 TTL 转换器 (MAX3232IDR)**。

该模块基于 Max3232，支持多种波特率通信，理论上支持最高 230400bps 的波特率通信。

<p style={{}}><a href="https://www.seeedstudio.com/RS-232-To-TTL-Conveter-MAX3232IDR-p-2851.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

| 产品版本  | 变更                                                                                               | 发布日期 |
|-----------|----------------------------------------------------------------------------------------------------|----------|
| RS-232 转 TTL 转换器 (MAX3232IDR) | 初始版本                                                                                           | 2018年9月 |

## 特性

- 使用简单
- 稳定，高速
- 高性价比
- ±15-kV ESD 保护
- 低功耗
- 两个驱动器和两个接收器

## 规格

| 项目 | 参数 |
|------|------|
| 电源电压 | 3.3V / 5V |
| 驱动器输入电压 | 0V ~ 5.5V |
| 接收器输入电压 | -25V ~ +25V |
| 电源电流（无负载） | 0.3mA |
| 工作自由空气温度 | -40℃ ~ 85℃ |
| 存储温度范围 | -65℃ ~ 150℃ |
| 最大数据速率 | 250 Kbit/s |
| 支持波特率 | 300bps ~ 230400bps |
| 尺寸 | 长: 35mm 宽: 30mm 高: 15mm |
| 重量 | 10.9g |
| 包装尺寸 | 长: 150mm 宽: 100mm 高: 15mm |
| 毛重 | 14g |

:::tip
使用较高波特率时，需要注意连接的 MCU 是否支持。
:::

## 典型应用

- 手持设备
- 掌上电脑

## 入门指南

这是一个简单的模块，只需将对应的接口连接到对应的设备，即可使用串口工具传输数据。需要注意的是，当连接 TTL 设备时，模块的 RX 引脚需要连接到设备的 TX 引脚，反之，模块的 TX 引脚需要连接到设备的 RX 引脚。

![](https://files.seeedstudio.com/wiki/RS-232_To_TTL_Conveter-MAX3232IDR/img/connect.jpg)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/RS-232_To_TTL_Conveter-MAX3232IDR/res/RS232%20to%20TTL%20Converter%20(MAX3232IDR).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [RS-232 转 TTL 转换器 (MAX3232IDR) Eagle 文件](https://files.seeedstudio.com/wiki/RS-232_To_TTL_Conveter-MAX3232IDR/res/RS232%20to%20TTL%20Converter%20(MAX3232IDR).zip)

- **[PDF]** [MAX3232 数据手册](https://files.seeedstudio.com/wiki/RS-232_To_TTL_Conveter-MAX3232IDR/res/Max3232.pdf)

- **[PDF]** [PDF 格式 Wiki](https://files.seeedstudio.com/wiki/RS-232_To_TTL_Conveter-MAX3232IDR/res/RS-232_To_TTL_Conveter-MAX3232IDR.pdf)

## 技术支持与产品讨论

如果您有任何技术问题，请将问题提交到我们的 [论坛](http://forum.seeedstudio.com/)。

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>