---
description: Xadow - 扩展模块
title: Xadow - 扩展模块
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_Breakout
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Breakout/img/Xadow_Breakout_01.jpg)

也许您希望将各种模块连接到 Xadow。例如，一个红外传感器可以检测是否有人靠近。您可以将传感器连接到这个扩展模块。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Breakout-p-1519.html)

## 规格
---
- 一个适配器
- 硬件上兼容所有 Grove 模块
- 尺寸：25.43mm x 20.35mm

## 演示
---
以下是一个控制蜂鸣器的演示。您需要使用 Grove 电缆将 Grove - 蜂鸣器连接到 Xadow 扩展模块，并使用 FFC 电缆将 Xadow 扩展模块连接到 Xadow 主板。

![](https://files.seeedstudio.com/wiki/Xadow_Breakout/img/XadowBreakoutUsage.jpg)

Xadow 扩展模块不仅可以控制一些使用 IIC 通信或串行通信的模块，还可以控制其他模块，因为两个 Grove 接口可以用作数字端口或模拟端口。换句话说，它可以控制所有 Grove 模块。

演示代码如下：
```
Void setup()
{
    DDRD |=0x04;
}
void loop()
{
    PORTD |=0x04;
    delay(500);
    PORTD &=~(0x04);
    delay(500);
}
```
现在您可以听到蜂鸣器发出“哔哔哔”的声音。您可以将其替换为 Grove - LED，并观察 LED 的开关状态。

## 在线原理图查看器
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Breakout/res/Xadow%20-%20Breakout_eagle%20file.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源
---
- [Xadow 扩展模块 Eagle 文件](https://files.seeedstudio.com/wiki/Xadow_Breakout/res/Xadow%20-%20Breakout_eagle%20file.rar)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>