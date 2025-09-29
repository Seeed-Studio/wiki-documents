---
description: Xadow - 手势 v1.0
title: Xadow - 手势 v1.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_Gesture_v1.0
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/img/Xadow_-_Gesture_3.jpg)

Xadow - 手势 v1.0 上的传感器是 PAJ7620U2，它将手势识别功能与通用 I2C 接口集成到一个芯片中。它可以识别 13 种手势，包括向上移动、向下移动、向左移动、向右移动、向前移动、向后移动、顺时针画圈、逆时针画圈、从上到下、从下到上、从左到右、从右到左以及挥手。这些手势信息可以通过 I2C 总线轻松访问。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Gesture-v1.0-p-2460.html)

## 特性
---
- 13 种手势识别
- 手势速度在普通模式下为 60°/秒至 600°/秒，在游戏模式下为 60°/秒至 1200°/秒
- 环境光抗干扰：< 100k Lux
- 内置接近检测
- I2C 接口最高可达 400 kbit/s
- 兼容 Xadow 接口

## 规格
---
- 传感器：PAJ7620U2
- 电源：2.8V 至 3.3V，I/O 电压为 1.8V~3.3V
- 兼容：Xadow 接口
- 接口：IIC
- 工作温度：-40°C 至 +85°C
- 尺寸：25 * 20mm

## 接口功能
---
![](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/img/Xadow_-_Gesture_2.jpg)

- P1：短路后，中断信号将连接到引脚 PF0/A5。
- U1：PAJ7620U2；集成手势识别传感器。
- J1, J2：FPC 接口。

:::note
当将 Xadow - 手势连接到 Xadow 主板时，连接方向需要注意。连接方法是一个 Xadow 模块的未填角连接到另一个模块的直角（参见每个 Xadow 模块的四个角）。
:::

## 引脚描述
---
Xadow 模块两侧的引脚是对称的，以下是从上到下的接口引脚描述。

![](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/img/Xadow_-_Gesture_5.jpg)

| Xadow 引脚 | PAJ7620U2 引脚 | 功能 |
|---|---|---|
| 1 | NC | (PCINT1/SCLK)PB1 |
| 2 | NC | (PDI/PCINT2/MOSI)PB2 |
| 3 | NC | (PDO/PCINT3/MISO)PB3 |
| 4 | 3/INT | PF5(ADC5/TMS) |
| 5 | 1/VBUS , 11/VLED , 12/VDD | VCC |
| 6 | 6/GND , 10/GND | GND |
| 7 | 6/GND , 10/GND | GND |
| 8 | 1/VBUS , 11/VLED , 12/VDD | VCC |
| 9 | 5/SCL | (OC0B/SCL/INT0 )PD0 |
| 10 | 2/SDA | (SDA/INT1)PD1 |
| 11 | NC | (RXD/INT2)PD2 |
| 12 | NC | (TXD/INT3)PD3 |

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/res/Xadow-_Gesture_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源
---
- [Xadow - Gesture v1.0 sch pcb.zip](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/res/Xadow-_Gesture_v1.0_sch_pcb.zip)
- [PAJ7620U2_Datasheet_V0.8_20140611.pdf](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/res/PAJ7620U2_Datasheet_V0.8_20140611.pdf)
- [Xadow - 手势库](https://github.com/Seeed-Studio/Grove_Guesture)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式以满足不同的需求和偏好。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>