---
description: Grove - 鼠标编码器
title: Grove - 鼠标编码器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Mouse_Encoder
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder_product_view.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder_product_view.jpg" alt="pir" width={600} height="auto" /></p>

Grove - 鼠标编码器是一种机械式增量旋转编码器，具有旋转方向和旋转速度的反馈数据<sup>\[1\]</sup>。它采用标准的 Grove 接口，可以为您节省大量的接线和编程工作。此外，它能很好地适应重载和恶劣环境。该产品可应用于玩具、机器人和消费类输入设备。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-%E2%80%93-Mouse-Encoder-p-2607.html)

<div className="admonition note">
  <p className="admonition-title">注意</p>
  旋转速度设计为小于 1000 rad/min（弧度每分钟）。
</div>


特性
--------

-   适用于不同环境的多功能性。
-   很好地适应重载和恶劣环境。
-   带有定位点和良好的手感。
-   标准 Grove 接口，便于编程和接线。
-   准确可靠。

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::
应用
------------

它适用于恶劣环境中的不同应用，如玩具、机器人和消费类输入设备。

规格参数
--------------

| 项目                             | 最小值 | 典型值 | 最大值 |
|----------------------------------|------|---------|------|
| 工作电压(V)                      |      | 3.3     | 5.5  |
| 工作电流(mA)                     |      | 10      | 13   |
| 占空比(恒定速度)                 |      | 50%     |      |
| 相位差(恒定速度)                 |      | π/4     |      |
| 每圈脉冲数                       |      | 12      |      |

<div className="admonition note">
  <p className="admonition-title">注意</p>
  <ol>
    <li>产品清单中不包含旋钮。因为我们认为这将使该编码器在不同环境中更加通用。</li>
    <li>您可以在 PDF 格式中找到<a href="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/res/Grove-Mouse_Encoder_Dimensions.pdf">尺寸</a>文件，您可以根据尺寸定制旋钮。</li>
    <ol></ol>
  </ol>
</div>

<div className="admonition tip">
  <p className="admonition-title">提示</p>
  如果您只是为项目构建原型，您可以使用合适的六角螺丝刀头。
</div>


硬件概述
-----------------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder.jpg" alt="pir" width={600} height="auto" /></p>

**Grove 接口**   
连接主控制板，如 **Seeeduino** 板与驱动板。

**六角开口**   
一个用于穿过旋钮的开口。

### **零件清单**

| 零件名称                               | 数量 |
|------------------------------------------|----------|
| Grove - 鼠标编码器(不包含旋钮) | 1 个     |
| Grove - 通用连接线                  | 1 个     |

入门指南
-----------

本节将向您展示如何构建用于使用 Grove - 鼠标编码器构建应用程序的 IDE 环境。

<!-- 图有问题 Refer to [Seeeduino V4.2](/cn/Seeeduino_v4.2#Getting_Started_on_Windows)(It is exchangeable with Arduino board) for how to build a complete an IDE for your applications, or read [Arduino guide](https://www.arduino.cc/en/Guide/HomePage) if you use Arduino original board. -->

<div className="admonition note">
  <p className="admonition-title">注意</p>
  <ol><li>如果旋转速度慢，占空比会更大。</li>
    <li>如果旋转速度不恒定，脉冲宽度 (PW) 将不相同。</li>
    <li>旋转速度应低于 1000 rad/min，否则会导致输出脉冲宽度变窄或对编码器造成损坏。</li>
    <li>在不旋转的情况下，输出电压将是不确定的（高电压或低电压），因为该编码器内部脉冲的位置是不确定的。</li></ol>
</div>


### 基础演示

此演示展示如何检测位置和检测方向。

#### 所需材料

-   Seeeduino V4.2
-   Base shield V2.0
-   USB 线缆（A 型转 micro B 型）

#### 连接

按如下所示连接材料：

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder_demo_connection.jpg)  -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder_demo_connection.jpg" alt="pir" width={600} height="auto" /></p>

#### 代码

```
/* Read Quadrature Encoder
* Connect Encoder to Pins encoder0PinA, encoder0PinB, and +5V.
*
* Sketch by max wolf / www.meso.net
* v. 0.1 - very basic functions - mw 20061220
*
*/  
 
 
int val; 
int encoder0PinA = 3;
int encoder0PinB = 4;
int encoder0Pos = 0;
int encoder0PinALast = LOW;
int n = LOW;
 
void setup() { 
    pinMode (encoder0PinA,INPUT);
    pinMode (encoder0PinB,INPUT);
    Serial.begin (115200);
} 
 
void loop() { 
    n = digitalRead(encoder0PinA);
    if ((encoder0PinALast == LOW) && (n == HIGH)) {
        if (digitalRead(encoder0PinB) == LOW) {
            encoder0Pos--;
        } else {
            encoder0Pos++;
        }
        Serial.println(encoder0Pos);
        Serial.println ("/");
    } 
    encoder0PinALast = n;
}
```

1.  复制代码并将其烧录到控制器板中。
2.  打开监视器窗口。
3.  向左或向右转动螺丝刀头，看看会发生什么。

输出：

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove_mouse_encoder_output_of_demo.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove_mouse_encoder_output_of_demo.png" alt="pir" width={600} height="auto" /></p>


## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/res/Grove_Mouse_Encoder_v1.0_Schematic_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


资源
---------

- [原理图文件](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/res/Grove_Mouse_Encoder_v1.0_Schematic_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Mouser_Encoder -->

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