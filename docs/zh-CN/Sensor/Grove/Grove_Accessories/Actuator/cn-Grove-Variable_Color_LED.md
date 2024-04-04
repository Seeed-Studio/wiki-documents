---
title: Grove - 可变色LED灯
description: Grove - 可变色LED灯
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Variable_Color_LED/
slug: /cn/Grove-Variable_Color_LED
last_update:
  date: 03/21/2024
  author: WuFeifei
---
![](https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED1.jpg) ![](https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED_01.jpg)

这个 Grove 模块包含一个 8mm RGB LED。它工作在 5V 直流电压下。当 SIG 引脚为逻辑高时，RGB LED 会亮起。它非常适合用于 Seeeduino 的数字输出，也可以通过脉冲宽度调制进行控制。此外，它还使用三个可调电阻来改变 RGB LED 的颜色。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html)

## 功能特点

- 兼容 Grove 接口
- 颜色可调

:::提示
    更多关于 Grove 模块的信息，请参见 [Grove 系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 应用思路

- 玩具
- 装饰

:::警告
    在调整 R、G 和 B 可调电阻时，请轻拿轻放，以防过度转动。
:::

## 规格

| 项目     | 典型值 | 单位 |
| -------- | ------ | ---- |
| 工作电压 | 5.0    | VDC  |
| 工作电流 | 20     | mA   |
| 可调电阻 | &lt;1  | KΩ   |

支持的平台
-------------------

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::警告
    上面提到的支持平台仅表明该模块的软件或理论兼容性。在大多数情况下，我们只提供针对 Arduino 平台的软件库或代码示例。由于无法为所有可能的 MCU 平台提供软件库/演示代码，因此用户需要自己编写软件库。
:::

## 使用方法

该模块的三个电阻 RED、GREEN 和 BLUE 分别控制 R、G 和 B 三个通道。通过调整这三个可调电阻，可以产生不同的颜色。但需要注意的是，在调整可调电阻时要轻拿轻放。

下面的示例代码演示了控制其亮度的简单应用。如下图所示，可变色 LED 连接在 Grove - Base Shield 的数字端口 9 上。硬件安装步骤如下：

![](https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Grove-Variable_Color_LED.jpg)

- 将以下代码复制并粘贴到一个新的 Arduino 草图中。

  示例代码如下：

```
int ledPin = 9;    // LED connected to digital pin 9

void setup()  {
    // nothing happens in setup
}

void loop()  {
    // fade in from min to max in increments of 5 points:
    for(int fadeValue = 0?; fadeValue <= 255; fadeValue +=5) {
        // sets the value (range from 0 to 255):
        analogWrite(ledPin, fadeValue);
        // wait for 30 milliseconds to see the dimming effect
        delay(30);
    }

    // fade out from max to min in increments of 5 points:
    for(int fadeValue = 255?; fadeValue >= 0; fadeValue -=5) {
        // sets the value (range from 0 to 255):
        analogWrite(ledPin, fadeValue);
        // wait for 30 milliseconds to see the dimming effect
        delay(30);
    }
}
```

- 上传代码。调整三个可调电阻，我相信你会喜欢的。试试吧！

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/res/Variable_Color_LED_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>
## 资源

- [可变色 LED eagle_文件](https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/res/Variable_Color_LED_eagle_file.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Variable_Color_LED -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们的产品时体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
