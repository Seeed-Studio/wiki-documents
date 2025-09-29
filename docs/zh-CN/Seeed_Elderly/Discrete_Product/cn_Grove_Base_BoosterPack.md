---
description: Grove 基础扩展板
title: Grove 基础扩展板
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_Base_BoosterPack
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/img/110020004%205.jpg)

扩展板（BoosterPacks）是可以堆叠在各种 LaunchPad 套件上的插件模块，用于添加额外功能，例如传感器、显示器、无线模块等。Grove 基础扩展板是 LaunchPad/BoosterPack 生态系统的一个重要补充，使任何 LaunchPad 都能够与 Seeed Studio 提供的日益丰富的 Grove 模块进行接口连接。Grove 基础扩展板为快速原型开发者提供了一种方便快捷的方式，可以使用超过一百种带有标准化连接器的 Grove 模块，包括传感器、执行器、显示器、灯光、马达等。

![](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/img/Grove_Web_idea.jpg)

**什么是 Grove？**

Grove 是一种模块化、即插即用的工具集，采用积木式的方法来组装电子设备。Grove 系统由一个基础扩展板和大量带有标准化连接器的模块组成。基础扩展板允许任何微控制器轻松连接并与各种 Grove 模块进行接口。每个 Grove 模块都实现了独特的功能，整个模块集合扩展了广泛的功能范围——从简单的按钮到复杂的心率传感器。每个模块都附带清晰的文档和示例代码，帮助您快速入门。

![](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/img/IMG_GROVE.JPG)

**什么是 LaunchPad？**

LaunchPad 是德州仪器（Texas Instruments）推出的一系列评估套件。为了为 LaunchPad 评估套件引入新功能，我们推出了扩展板（BoosterPack），它作为一个插件板安装在 LaunchPad 基板上。它为您提供了一种方便快捷的方式，可以使用超过一百种带有标准化连接器的 Grove 模块，包括传感器、执行器、显示器、灯光、马达等。

## 特性
---
* Seeedstudio 推出了全新的 Grove 基础扩展板，使德州仪器的 LaunchPad 能够与我们的 Grove 系列模块紧密连接，从而实现快速原型开发，并与各种传感器、执行器、显示器、灯光、马达等模块进行组合。

* Grove 基础扩展板具有十三个 Grove 4 针标准接口，包括五个模拟接口、五个数字接口和三个串口，作为基于 MSP430 LaunchPad 的即插即用扩展模块。它还提供了各种教程，介绍如何与 TI MSP430 连接，并提供了 11 种不同类型的参考原型项目，为您的创意提供便利的指导。

* Grove 基础扩展板上有一个红色 LED 指示灯，用于指示电源供应。

![](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/img/BoosterpackpinMapping.jpg)

## 使用 Grove 基础扩展板
---
### 使用 40 针 LaunchPad

例如 MSP-EXP430F5529LP、EK-TM4C123GXL 等

扩展板的设计利用了 "内侧 20 针" [21-40] 的引脚。引脚连接如下表所示：

通过下表，开发者可以使用 Energia 的 `analogRead(24)` API 调用，从连接到 Grove 接口 'J6' 的 Grove 模块（例如电位器/旋钮）读取模拟值。

<table>
<tr>
<th>连接器类型</th>
<th>Grove 接口标签</th>
<th>GND</th>
<th>VCC</th>
<th>SIG1（连接到扩展板引脚）</th>
<th>SIG0（连接到扩展板引脚）</th>
</tr>
<tr>
<td>模拟</td>
<td>J5</td>
<td>GND</td>
<td>3.3V</td>
<td>23（支持模拟的引脚）</td>
<td>22（支持模拟的引脚）</td>
</tr>
<tr>
<td>模拟</td>
<td>J6</td>
<td>GND</td>
<td>3.3V</td>
<td>25（支持模拟的引脚）</td>
<td>24（支持模拟的引脚）</td>
</tr>
<tr>
<td>模拟</td>
<td>J7</td>
<td>GND</td>
<td>3.3V</td>
<td>26（支持模拟的引脚）</td>
<td>25（支持模拟的引脚）</td>
</tr>
<tr>
<td>模拟</td>
<td>J8</td>
<td>GND</td>
<td>3.3V</td>
<td>27（支持模拟的引脚）</td>
<td>26（支持模拟的引脚）</td>
</tr>
<tr>
<td>模拟</td>
<td>J9</td>
<td>GND</td>
<td>3.3V</td>
<td>28（支持模拟的引脚）</td>
<td>27（支持模拟的引脚）</td>
</tr>
<tr>
<td>I2C</td>
<td>J10</td>
<td>GND</td>
<td>3.3V</td>
<td>10（I2C SDA）</td>
<td>9（I2C SCL）</td>
</tr>
<tr>
<td>UART</td>
<td>J11</td>
<td>GND</td>
<td>3.3V</td>
<td>4（UART 到 MCU）</td>
<td>3（UART 从 MCU）</td>
</tr>
<tr>
<td>SPI</td>
<td>J12</td>
<td>GND</td>
<td>3.3V</td>
<td>14（SPI MISO）</td>
<td>7（SPI CLK）</td>
</tr>
<tr>
<td>数字</td>
<td>J13</td>
<td>GND</td>
<td>3.3V</td>
<td>39（数字/PWM 引脚）</td>
<td>40（数字/PWM 引脚）</td>
</tr>
<tr>
<td>数字</td>
<td>J14</td>
<td>GND</td>
<td>3.3V</td>
<td>38（数字/PWM 引脚）</td>
<td>39（数字/PWM 引脚）</td>
</tr>
<tr>
<td>数字</td>
<td>J15</td>
<td>GND</td>
<td>3.3V</td>
<td>37（数字/PWM 引脚）</td>
<td>38（数字/PWM 引脚）</td>
</tr>
<tr>
<td>数字</td>
<td>J16</td>
<td>GND</td>
<td>3.3V</td>
<td>36（数字/PWM 引脚）</td>
<td>37（数字/PWM 引脚）</td>
</tr>
<tr>
<td>数字</td>
<td>J17</td>
<td>GND</td>
<td>3.3V</td>
<td>35（数字/PWM 引脚）</td>
<td>36（数字/PWM 引脚）</td>
</tr>
</table>

### 使用 20 针 LaunchPad

如果您使用的是 20 针 LaunchPad，可以使用跳线或跳线导线在 Grove 接口和扩展板接口之间进行适当的连接。

根据您特定 LaunchPad 的引脚图，您可以在物理/电气上将 Grove 模块连接到适当的引脚。每个 LaunchPad 的引脚图可在以下链接找到：
[https://energia.nu/pin-maps/](https://energia.nu/pin-maps/)

借助这些引脚图，您可以知道哪个引脚具有您需要的功能。如果您想使用 Grove 接口 J5 来连接一个模拟 Grove 模块（例如电位器旋钮），您可以使用 Energia 引脚映射来识别 BoosterPack 接口上的模拟功能引脚。通过使用跳线或导线，您可以将引脚编号 22 连接到可用的模拟功能引脚。例如，如果您使用的是 MSP-EXP430G2 LaunchPad，您可以使用跳线或电缆将引脚 22 连接到引脚 2。

##   支持的产品
---
###   Grove 列表

<!-- *   [1. 蜂鸣器](/cn/Grove-Buzzer#With_TI_LaunchPad)

*   [2. 继电器](/cn/Grove-Relay#With_TI_LaunchPad)

*   [3. 四位数字显示屏 ](/cn/Grove-4-Digit_Display#With_TI_LaunchPad)

*   [4. 旋转角度传感器 ](/cn/Grove-Rotary_Angle_Sensor#With_TI_LaunchPad)

*   [5. 光传感器](/cn/Grove-Light_Sensor#With_TI_LaunchPad)

*   [6. 声音传感器 ](/cn/Grove-Sound_Sensor#With_TI_LaunchPad)

*   [7. PIR 动作传感器 ](/cn/Grove-PIR_Motion_Sensor#With_TI_LaunchPad)

*   [8. 湿度传感器](/cn/Grove-Moisture_Sensor#With_TI_LaunchPad)

*   [9. 超声波测距传感器](/cn/Grove-Ultrasonic_Ranger#With_TI_LaunchPad)

*   [10. 温湿度传感器 ](/cn/Grove-TemperatureAndHumidity_Sensor) -->


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/res/Grove_Base_BoosterPack_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##   资源
---
- [硬件 Eagle 文件](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/res/Grove_Base_BoosterPack_v1.0.zip)

- [Grove 启动套件 LaunchPad 用户手册](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/res/Grove%20Starter%20Kit%20Manual.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>