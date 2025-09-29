---
title: Grove - 可变颜色 LED
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Variable_Color_LED/
slug: /cn/Grove-Variable_Color_LED
last_update:
  date: 01/09/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED1.jpg) ![](https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED_01.jpg)

此 Grove 模块包含一个 8mm RGB LED，工作电压为 5V DC。当 SIG 引脚为逻辑高电平时，RGB LED 将点亮。它非常适合用于 Seeeduino 的数字输出，也可以通过脉宽调制进行控制。模块使用三个可调电阻来改变 RGB LED 的颜色。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html)

特点
--------

- Grove 兼容
- 可调颜色

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

应用场景
-----------------

- 玩具
- 装饰

:::caution
    调节 R、G 和 B 可调电阻时请轻柔操作，以免过度旋转。
:::

规格
-------------

| 项目              | 典型值 | 单位 |
|-------------------|---------|------|
| 工作电压          | 5.0     | VDC  |
| 工作电流          | 20      | mA   |
| 可变电阻          | &lt;1   | KΩ   |

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。无法为所有可能的 MCU 平台提供软件库或演示代码，因此用户需要自行编写软件库。
:::

使用方法
-----

模块上的三个电阻 RED、GREEN 和 BLUE 分别控制 R、G 和 B 通道。通过调节三个可调电阻，可以实现颜色变化。然而需要注意的是，调节可调电阻时请轻柔操作。

以下代码演示了一个简单的亮度控制应用。如下面的图片所示，可变颜色 LED 连接到 Grove - Base Shield 的数字端口 9。硬件安装如下：

![](https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Grove-Variable_Color_LED.jpg)

- 将以下代码复制并粘贴到一个新的 Arduino 草图中。

示例代码如下：

```
int ledPin = 9;    // LED 连接到数字引脚 9

void setup()  {
    // setup 中没有任何操作
}

void loop()  {
    // 从最小值到最大值以 5 点递增淡入：
    for(int fadeValue = 0?; fadeValue <= 255; fadeValue +=5) {
        // 设置值（范围从 0 到 255）：
        analogWrite(ledPin, fadeValue);
        // 等待 30 毫秒以观察渐变效果
        delay(30);
    }

    // 从最大值到最小值以 5 点递减淡出：
    for(int fadeValue = 255?; fadeValue >= 0; fadeValue -=5) {
        // 设置值（范围从 0 到 255）：
        analogWrite(ledPin, fadeValue);
        // 等待 30 毫秒以观察渐变效果
        delay(30);
    }
}
```

- 上传代码。调节三个可调电阻，我相信你会喜欢它。试试看吧！

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/res/Variable_Color_LED_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [可变颜色 LED eagle 文件](https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/res/Variable_Color_LED_eagle_file.zip)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_Variable_Color_LED -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时拥有顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>