---
title: Grove - 迷你风扇
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Mini_Fan/
slug: /cn/Grove-Mini_Fan
last_update:
  date: 01/09/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/img/Mini_Fan%20head.jpg)

**Grove - 迷你风扇**模块是一款基于AVR Atmega168微控制器的直流电机驱动模块。该模块还提供了一个接口，您可以通过它更改微控制器代码。例如，可以更改代码使模块用于驱动[伺服电机](https://en.wikipedia.org/wiki/Servomotor)。默认情况下，该模块设置为运行随包装提供的直流电机。包装中还包括的软叶风扇可以连接到电机上，与孩子们一起制作有趣的项目。由于风扇叶片是软的，即使高速旋转也完全安全，不会造成任何伤害。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Mini-Fan-v1-1.html)

## 特性

---

* 用户友好的输出模块，根据从输入传感器或开关模块接收到的信号触发直流电机运行
* 与包装中包含的直流电机配合使用
* 使用JST 2.0接口连接电机
* 直流电机配有彩色软叶风扇附件（如图所示）
* 板载微控制器可重新编程以更改模块操作
* 微控制器运行Arduino兼容代码
* 更改代码以驱动伺服电机而非直流电机
* 使用标准4针Grove电缆连接到其他Grove模块
<div>
  <span style={{color: 'red'}}>注意：</span>对于最新版本(v1.1)，电机的输出电压已更新为3.3伏。
</div>

## 接口功能

---
![](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/img/Mini_fan.jpg)

<dl>
  <dt>① UartSBee接口：使用此接口更改微控制器代码。使用一个 [UartSBee](/cn/UartSBee_V4) 模块通过Uart接口连接到微控制器。</dt>
  <dt>② JST 2.0接口：用于连接3.3伏直流电机（仅限3.3伏）。</dt>
  <dt>③ Grove接口</dt>
  <dt>④ ICSP接口</dt>
  <dt>⑤ Atmega168微控制器</dt>
  <dt>⑥ 伺服接口</dt>
</dl>

## 使用方法

---
按照以下步骤使用此模块构建一个示例电路：

1. 首先使用JST2.0两线接口将直流电机连接到**Grove - 迷你风扇**模块。

2. 将迷你风扇模块连接到电路的输出端（电源模块的右侧）。在电路的输入端，您可以使用一系列基于传感器的输入模块（如[Grove - 光传感器](/cn/Grove-Light_Sensor "Grove - 光传感器")、[Grove - 声音传感器](/cn/Grove-Sound_Sensor "Grove - 声音传感器")、[Grove - 按钮](/cn/Grove-Button "Grove - 按钮")或[Grove - 滑动电位器](/cn/Grove-Slide_Potentiometer "Grove - 滑动电位器")）。

3. 给电路供电。

4. 当输入模块提供触发信号时，直流电机开始旋转：

* 如果使用类似[Grove - 按钮](/cn/Grove-Button "Grove - 按钮")模块上的瞬时开关，只需按下按钮即可启动电机。

* 如果使用[Grove - 滑动电位器](/cn/Grove-Slide_Potentiometer "Grove - 滑动电位器")，将滑块从GND位置移动到VCC位置，您会看到随着提供电压的增加，电机速度也会增加。连接软叶风扇，您就拥有了一个可调速的个人风扇，可以根据需要调节速度来应对炎热！

* 如果使用[Grove - 光传感器](/cn/Grove-Light_Sensor "Grove - 光传感器")直接连接到电路的输入端，您会发现电机在明亮的光线下运行，而在黑暗中停止：

![](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/img/Light_Sensitive_Fan.gif)

* 如果您希望电机仅在黑暗中运行，可以在光传感器和电源模块之间添加一个Grove - NOT模块。
* 如果使用[Grove - 声音传感器](/cn/Grove-Sound_Sensor "Grove - 声音传感器")，您会发现电机在检测到声音时运行。同样，如果您希望反转功能，换句话说，如果您希望电机始终处于开启状态，除非有声音，可以在声音传感器和电源模块之间添加一个Grove - NOT模块。

您可以使用Grove - USB电源模块或Grove - DC插孔电源模块为Grove电路供电。

要构建一个使用电位器控制伺服电机的电路，请按照以下步骤操作：

1. 直接打开路径：\libraries\Servo\examples\Knob 中的代码。

2. 将代码上传到板载MCU。在上传时，请确保选择正确的板类型和COM端口。

3. 现在，您应该能够使用电位器控制伺服电机。

### 使用Codecraft进行操作

#### 硬件

**步骤1.** 将一个Grove - 迷你风扇连接到D2端口，并将一个Grove - 光传感器连接到Base Shield的A0端口。

**步骤2.** 将Base Shield插入您的Seeeduino/Arduino。

**步骤3.** 通过USB电缆将Seeeduino/Arduino连接到您的PC。

#### 软件

**步骤1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并将主程序拖到工作区域。

:::note
    如果这是您第一次使用Codecraft，请参阅[Codecraft使用Arduino指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤2.** 按下图所示拖动代码块，或打开本页末尾可下载的cdc文件。

![cc](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/img/cc_Mini_Fan.png)

将程序上传到您的Arduino/Seeeduino。

:::tip
    当代码上传完成后，用手遮住光传感器的光线，风扇将启动。
:::

## 可用性

---
此 Grove 模块可作为以下 Grove 套件系列的一部分：

* Grove Mixer Pack V2

此外，它也可以在 Seeed Studio Bazaar 单独购买。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mini_Fan/res/Grove-Mini_Fan_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

* [Grove - Mini Fan v1.0 (Eagle 文件)](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/res/Grove-Mini_Fan_v1.0.zip)

* [Grove - Mini Fan v1.0 (PDF)](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/res/Grove-Mini_Fan_v1.0.pdf)

* [Codecraft CDC 文件](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/res/Grove_Mini_Fan_CDC_File.zip)

## 项目

**Grove Mini Fan 控制器 + TI LaunchPad**：使用 Seeed Grove 和 TI LaunchPad，通过 PWM 驱动迷你风扇。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/measley2/grove-mini-fan-controller-ti-launchpad-cba304/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>