---
description: Xadow - 振动马达
title: Xadow - 振动马达
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_Vibrator_Motor
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/img/Vibration_Motor_01.jpg)

这个小型振动马达可以像您的手机一样振动。使用时，您只需要为模块供电，然后发送"振动"命令。实际上，"振动"命令是将控制引脚设置为高电平，然后它就会工作。我喜欢这个模块，因为它可以产生短期震动来提示我某个操作是否成功，比如摇动我的手臂来切换iPhone歌曲，这听起来很糟糕，但它不像蜂鸣器。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Vibration-Motor-p-1517.html)


##  规格参数
---
*   工作电压：3.3V

*   额定转速：9000rpm

*   由两个数字信号控制

*   尺寸：25.43mm x 20.35mm

##  演示
---
这里是一个演示代码，展示如何开启振动马达。

**硬件安装：**

![](https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/img/XadowVibration.jpg)

注意：当将Xadow振动马达连接到Xadow主板时，您应该注意连接方向。连接方法是一个Xadow模块的未填充角需要连接到另一个模块的直角（参见每个Xadow模块的四个角）。
演示代码如下：
```
<pre>
void setup()
{
    DDRF |= 0x01;
    DDRB |= 0x04;
}

void loop()
{
    //打开振动马达
    PORTF |= 0x01;
    PORTB |= 0x04;
    delay(1000);
    //关闭振动马达
    PORTF &= ~(0x01);
    PORTB |= 0x04;
    delay(1000);
    //打开振动马达
    PORTF |= 0x01;
    PORTB |= 0x04;
    delay(1000);
    //关闭振动马达
    PORTF |= 0x01;
    PORTB &= ~(0x04);
    delay(1000);
    //打开振动马达
    PORTF |= 0x01;
    PORTB |= 0x04;
    delay(1000);
    //关闭振动马达
    PORTF &= ~(0x01);
    PORTB &= ~(0x04);
    delay(1000);
}</pre>
```


## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/res/Xadow_Vibrator.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##  资源
---
[Xadow振动马达Eagle文件](https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/res/Xadow_Vibrator.zip)

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