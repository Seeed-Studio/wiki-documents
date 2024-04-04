---
title: 模拟端口
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-IO-Analog/
slug: /cn/Wio-Terminal-IO-Analog
last_update:
  date: 3/10/2024
  author: 金菊
---

# 在Wio Terminal上使用Grove模拟端口

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-12%2011-36-22.2019-12-12%2011_37_02.gif" /></div>

这个仓库演示了如何在Wio Terminal上使用模拟输入。要使用Wio Terminal上的模拟引脚，您必须使用RPI引脚。

## RPI模拟引脚

Raspberry Pi 引脚定义如下：

- `RPI_A0` -> `RPI_A8`

## Grove 端口配置

要将 **Grove 可配置的A/D端口** 用作模拟端口，只需按如下方式定义：

```cpp
void setup() {
    pinMode(A0, INPUT);
}
```

现在，将您的Grove传感器连接到物理引脚上！

## 示例代码

在这个示例中，使用了一个Grove响度传感器进行演示：

```cpp
void setup() {
    Serial.begin(115200);
    pinMode(A0, INPUT);
}
void loop() {
    int loudness = analogRead(A0);
    Serial.print("Loudness: ");
    Serial.println(loudness);
    delay(50);
}
```

## 技术支持 & 产品讨论

感谢您选择我们的产品！我们提供多种沟通渠道，以满足不同的偏好和需求，为您提供不同的支持，以确保您在使用我们的产品时体验顺畅。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
