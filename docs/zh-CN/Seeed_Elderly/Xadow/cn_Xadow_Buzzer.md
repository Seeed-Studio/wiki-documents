---
description: Xadow - 蜂鸣器
title: Xadow - 蜂鸣器
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_Buzzer
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Buzzer/img/Xadow_buzzer.jpg)

这是一个 Xadow 模块，可以发出音调。要驱动它，您需要同时控制两个引脚：这与使用一个引脚控制的 Grove - 蜂鸣器不同。它小巧但声音洪亮！它可以用于发出哔声、音调和警报。

Xadow 是一个小巧但功能完备的 Arduino(TM) 兼容板系列，包含多个模块。它是一个非常适合空间敏感项目的套件，例如可穿戴设备和艺术设计，这些项目对尺寸、重量和灵活的级联连接有更高的要求。您可以在这里找到更多模块。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Buzzer-p-1599.html)

## 规格
---
- 工作电压：3.3V
- 基本频率：2700Hz
- 声压级：>75dB
- 尺寸：25.43mm x 20.35mm

## 演示
---
这里有一个简单的演示，展示如何驱动蜂鸣器发声。如果您成功使用它，那么您可以将其应用到您的优秀项目中，例如检测电池状态：当 Xadow 主板电池电量低时，蜂鸣器会发出声音。

![](https://files.seeedstudio.com/wiki/Xadow_Buzzer/img/Buzzer_Usage.jpg)

```
void setup()
{
    DDRB |= 0x06;
}

void loop()
{
    //打开蜂鸣器
    PORTB |= 0x06;
    delay(1);
    //关闭蜂鸣器
    PORTB &= ~(0x06);
    delay(1);
}
```

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Buzzer/res/Xadow_Buzzer_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源
---
- [Xadow 蜂鸣器 Eagle 文件](https://files.seeedstudio.com/wiki/Xadow_Buzzer/res/Xadow_Buzzer_eagle_file.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>