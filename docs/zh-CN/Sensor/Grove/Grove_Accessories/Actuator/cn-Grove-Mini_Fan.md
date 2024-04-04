---
title: Grove - 迷你风扇
description: Grove - 迷你风扇
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Mini_Fan/
slug: /cn/Grove-Mini_Fan
last_update:
  date: 03/21/2024
  author: WuFeifei
---
![](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/img/Mini_Fan%20head.jpg)

**Grove - 迷你风扇**模块是一个基于AVR Atmega168微控制器的直流电机驱动器。该模块还提供了一个突破点，您可以通过它更改微控制器代码。例如，可以更改代码，以便该模块可用于驱动[伺服电机](https://en.wikipedia.org/wiki/Servomotor)。默认情况下，该模块设置为运行包含在您的搅拌器包中的直流电机。包装中还包含了一个软叶风扇，可以将其连接到电机上，与孩子们一起制作一个有趣的项目。由于叶片柔软，风扇完全安全，即使高速运转也不会造成任何伤害。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Mini-Fan-v1-1.html)

## 特点

---

* 用户友好的输出模块，可根据输入传感器或开关模块接收到的信号触发直流电机运行
* 与包装中包含的直流电机一起使用
* 用于连接到电机的JST 2.0接口
* 直流电机配有彩色的软叶风扇附件（如图片所示）
* 板载微控制器可以重新编程以更改模块操作
* 微控制器运行与Arduino兼容的代码
* 更改代码以驱动伺服电机而不是直流电机
* 使用标准的4针Grove电缆连接到其他Grove模块
* <div>
  <span style={{color: 'red'}}>注意:</span>对于最新版本（v1.1），电机的输出电压已更新为 3.3 伏。
  </div>

## **接口功能**

---
![](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/img/Mini_fan.jpg)

<dl><dt>①  UartSBee接口：使用此接口更改微控制器代码。使用 [UartSBee](/UartSBee_V4) 模块通过Uart接口连接到微控制器。
</dt><dt>② JST 2.0 接口：用于连接到3.3伏特的直流电机（仅限3.3伏特）
</dt><dt>③ Grove 接口
</dt><dt>④ ICSP 接口
</dt><dt>⑤ Atmega168 微控制器
</dt><dt>⑥ Servo 接口
</dt></dl>

## 使用方法

---
按照以下步骤使用此模块构建示例电路：

1.首先，使用JST2.0双线接口将直流电机连接到**Grove - 迷你风扇**模块上。

2.将迷你风扇模块连接到电路的输出侧（电源模块的右侧）。在电路的输入侧，你可以使用一系列基于传感器的输入模块([Grove - 光传感器](/Grove-Light_Sensor "Grove - Light Sensor"), [Grove - 声音传感](/Grove-Sound_Sensor "Grove - Sound Sensor"), [Grove - 按钮](/Grove-Button "Grove - Button") or [Grove - 滑动电位计](/Grove-Slide_Potentiometer "Grove - Slide Potentiometer")).

3.给电路通电。

4.当输入模块提供触发信号时，直流电机开始旋转：

* 如果与[Grove - 按钮](https://yiyan.baidu.com/Grove-Button)模块上的瞬时开关一起使用，只需按下按钮即可启动电机。

* 如果与[Grove - 滑动电位计](https://yiyan.baidu.com/Grove-Slide_Potentiometer)一起使用，将滑块从GND位置移动到VCC位置，你会看到随着供电电压的增加，电机的速度也会增加。装上软叶风扇，你就拥有了一个可调速的个人风扇，你可以根据需要调节风扇的速度来抵御炎热！

* 如果将[Grove - 光传感器](https://yiyan.baidu.com/Grove-Light_Sensor)直接连接到电路的输入侧，你会发现在明亮的光线下电机会运行，而在黑暗中电机会停止：


![](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/img/Light_Sensitive_Fan.gif)

* 如果你想要电机仅在黑暗中运行，请在光传感器和电源模块之间添加一个Grove - NOT模块。
* 如果与[Grove - 声音传感器](https://yiyan.baidu.com/Grove-Sound_Sensor)一起使用，你应该会发现电机在检测到声音时会运行。同样，如果你想要反转这个功能，或者换句话说，如果你想要电机在有声音时停止运行，在无声音时一直运行，请在声音传感器和电源模块之间添加一个Grove - NOT模块。

对于Grove电路，你可以使用Grove - USB电源模块或Grove - DC插孔电源模块。

要构建一个使用电位计控制伺服电机的电路，请按照以下步骤操作：

1. 直接将代码打开到路径：\libraries\Servo\examples\Knob

2. 将你的代码上传到板载MCU。上传时请确保选择了正确的板型和COM端口。

3. 现在你应该能够使用电位计来控制你的伺服电机了。


### 玩转 Codecraft

#### 硬件

**步骤 1.** 将一个Grove - 迷你风扇连接到D2端口，并将一个Grove - 光传感器连接到Base Shield的A0端口。

**步骤 2.**  将Base Shield插入到你的Seeeduino/Arduino板上。

**步骤 3.** 通过USB电缆将Seeeduino/Arduino连接到你的PC。

#### 软件

**步骤 1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并将一个主程序拖到工作区。

:::注意
    如果你是第一次使用Codecraft，也可以参考[使用Arduino的Codecraft指南](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤 2.** 按照下面的图片拖动代码块，或者打开本页面底部可以下载的cdc文件。

![cc](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/img/cc_Mini_Fan.png)

将程序上传到你的Arduino/Seeeduino。

:::提示
    当代码上传完成后，用手遮住光传感器，风扇就会打开。
:::

## 可购途径

---
此Grove模块可作为以下Grove套件系列的一部分购买：

* Grove Mixer Pack V2

或者，您也可以在Seeed Studio Bazaar单独购买它。

## 在线查看原理图

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mini_Fan/res/Grove-Mini_Fan_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

* [Grove - 迷你风扇 v1.0 (Eagle 文件)](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/res/Grove-Mini_Fan_v1.0.zip)

* [Grove - 迷你风扇 v1.0 (pdf)](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/res/Grove-Mini_Fan_v1.0.pdf)

* [Codecraft CDC 文件](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/res/Grove_Mini_Fan_CDC_File.zip)

## 项目

**Grove 迷你风扇控制器 + TI LaunchPad**：使用 Seeed Grove 和 TI LaunchPad 通过 PWM 为迷你风扇供电。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/measley2/grove-mini-fan-controller-ti-launchpad-cba304/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您在使用我们的产品时能够拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
