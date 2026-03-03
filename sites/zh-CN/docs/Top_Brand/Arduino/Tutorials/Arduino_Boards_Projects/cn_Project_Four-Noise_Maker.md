---
description: 项目四 – 噪音制造器
title: 项目四 – 噪音制造器
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Project_Four-Noise_Maker
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Project Four – Noise Maker
category: Tutorial
oldwikiname:  Project Four – Noise Maker
prodimagename:
surveyurl: https://www.research.net/r/Project_Four-Noise_Maker
--- -->

本项目的目的是使用压电蜂鸣器制造蜂鸣声。
电位器再次用作模拟输入来改变延迟时间。当您调节电位器时，蜂鸣声的速度会发生变化。
图片是错误的 - 您需要将电位器连接到模拟 A0/A1 输入插孔，就像在项目 3 中一样。
电位器在其 D1 输出上产生模拟电压，该电压连接到 A0/A1 输入插孔上的 Arduino A0 模拟输入。
将蜂鸣器连接到 D6/D7 数字 I/O 插孔。程序使用 Arduino 引脚 D6 通过其 D1 输入向蜂鸣器供电。

![](https://files.seeedstudio.com/wiki/Project_Four-Noise_Maker/img/Conn-four.jpg)

_**现在上传以下 Arduino 程序：**_

```cpp
// Project Four - Noise maker
//

void setup()
{
  pinMode(6, OUTPUT);
}

void loop()
{
  digitalWrite(6, HIGH);
  delay(analogRead(0));
  digitalWrite(6, LOW);
  delay(analogRead(0));
}
```

如您所见，压电器可以用作另一种形式的数字输出。使用这个 Grove 单元时，不要忘记在您想要关闭声音时将连接到 Grove 的输出引脚设置回 LOW。

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