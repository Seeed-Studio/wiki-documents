---
title: Grove - 16通道PWM驱动器 (PCA9685)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-16-Channel_PWM_Driver-PCA9685/
slug: /cn/Grove-16-Channel_PWM_Driver-PCA9685
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/main.jpg)

Grove - 16通道PWM驱动器基于NXP PCA9685，这是一款16通道、12位I2C PWM驱动器。该板可以通过外部电源驱动最多16个舵机。您可以通过I2C Grove接口轻松使用Arduino控制该板。此外，您还可以将该板用作LED控制器。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-16-Channel-PWM-Driver-(PCA9685)-p-3221.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

| 产品版本  | 变更                                                                                               | 发布日期       |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 16通道PWM驱动器 (PCA9685) | 初始版本                                                                                               | 2018年9月      |

## 特性

- 1 MHz快速模式兼容I2C总线
- 6个硬件地址引脚允许62个PCA9685设备连接到同一个I2C总线
- 低待机电流
- SDA/SCL输入上的噪声滤波器

## 规格

|项目|参数|
|---|---|
|MCU工作电压|3.3V / 5V|
|PWM供电电压|2.3V ~ 5.5V|
|容忍输入电压|5.5V|
|LEDn引脚输出电流|25mA|
|地线供电电流|400mA|
|工作温度|-40～85℃|
|接口|I2C|
|I2C地址范围|0x40 ~ 0x7f(默认)|
|尺寸|长: 60mm 宽: 40mm 高: 18mm|
|重量|14.3g|
|包装尺寸|长: 135mm 宽: 85mm 高: 19mm|
|毛重|21g|

## 典型应用

- 舵机驱动器
- RGB或RGBA LED驱动器

## 硬件概览

### 引脚分布

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/pin-out/pin_out.jpg)

:::caution
    不支持热插拔，在进行任何替换或更改之前，请断开Arduino的电源。
:::

### 硬件详情

___
**I2C接口**

该板使用I2C接口，使板载MCU能够与主机通信。  
>GND: 将此模块连接到系统地线  
>VCC: 您可以为此模块使用5V或3.3V电源  
>SDA: I2C串行数据  
>SCL: I2C串行时钟

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/pin-out/pin-out-1.jpg)

___
**电源输入**

为舵机提供5V直流电源。

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/pin-out/pin-out-2.jpg)

___
**PWM输出**

该板上有16组引脚（1 - 16），每组引脚包含一个PWM信号引脚、一个5V电源引脚和一个地线引脚。
![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/pin-out/pin-out-0.jpg)

---
**I2C地址**

*您可以点击下图查看原始文件*

该板背面有6个可选焊盘，提供64个可选I2C地址。

<!-- [![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/i2c_ad.jpg)](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/i2c_ad.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/i2c_ad.jpg" alt="pir" width={600} height="auto" /></p>

如上图所示，所有地址焊盘默认连接到高电平。地址规则如下所示：

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/i2c_ad_1.jpg)

地址由7位组成，最高位固定为1。当我们将地址转换为十六进制时，需要在最高位左侧添加一个0。

因此默认地址为**111 1111**，添加一个0后变为**0111 1111**，即0x7f。  
如果我们将所有地址焊盘连接到地线，则变为**100 0000**，添加一个0后变为**0100 0000**，即0x40。

## 工作原理

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 入门指南

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield| Grove - 16通道PWM驱动器| LED|
|--------------|-------------|-----------------|---------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/red_led.jpg)
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-16-Channel-PWM-Driver-PCA968-p-3221.html)|[立即购买](https://www.seeedstudio.com/3mm-LED-Red-25-PCs-p-1588.html)

:::note
    **1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的USB线无法传输数据。如果您不确定手头的线是否符合要求，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买。

    **2** 每个Grove模块在购买时都会附带一根Grove线缆。如果您丢失了Grove线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。

    **3** 您还需要准备至少2根跳线。如果没有，可以点击[这里](https://www.seeedstudio.com/20-pin-dual-female-splittable-jumper-wire-300mm-p-629.html)购买。
:::

- **步骤 1.** 使用双头母跳线将红色LED连接到GND和P1。

- **步骤 2.** 将Grove - 16通道PWM驱动器连接到Grove-Base Shield的**I^2^C**端口。

- **步骤 3.** 将Grove - Base Shield插入Seeeduino。

- **步骤 4.** 使用USB线将Seeeduino连接到PC。

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/connect1.jpg)

:::note
        在此LED示例中，由于我们未使用输出组中的“5V”引脚，因此无需为电源输入端口供电。如果您想使用舵机，则需要将5V引脚连接到舵机的电源引脚，并为**Power In**端口提供外部电源。
:::
如果您想使用舵机，可以按照以下方式连接：

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/connect2.jpg)

#### 软件

:::caution
        如果这是您第一次使用Arduino，我们强烈建议您在开始之前查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从Github下载[Grove-16-Channel_PWM_Driver-PCA9685](https://github.com/Seeed-Studio/Seeed_PCA9685/archive/master.zip)库。

- **步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)为Arduino安装库。

- **步骤 3.** 重启Arduino IDE。打开示例代码，可以通过以下三种方式打开：
    1. 直接在Arduino IDE中通过路径打开：**File --> Examples -->Seeed_PCA9685 --> led**。
    ![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/ard1.jpg)

    2. 在您的电脑中找到**XXXX\Arduino\libraries\Seeed_PCA9685\examples\led\led.ino**文件并点击**basic_demo.ino**打开，**XXXX**是您安装Arduino IDE的位置。
    ![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/ard2.jpg)

    3. 或者，您可以点击代码块右上角的图标 ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) 将以下代码复制到Arduino IDE的新草图中。

```cpp

#include "PCA9685.h"
#include <Wire.h>

PCA9685 led;


void setup()
{
    // join I2C bus (I2Cdev library doesn't do this automatically)
    Wire.begin();
    Serial.begin(9600);
    led.init(0x7f);
    // Set freq to 100Hz, range from 24Hz~1526hz
    led.setFrequency(100);

    for (int i=1;i<17;i++){
        led.setPwm(i, 0, 1024);
    }
}

void loop()
{
}

```

:::caution
        库文件可能会更新。此代码可能不适用于更新后的库文件，因此我们建议您使用前两种方法。
:::

:::tip
        如果一切正常，您将看到LED亮起。
:::

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/res/Grove%20-%2016-Channel%20PWM%20Driver%20(PCA9685).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - 16通道PWM驱动器 (PCA9685) Eagle文件](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/res/Grove%20-%2016-Channel%20PWM%20Driver%20(PCA9685).zip)

- **[Zip]** [Seeed_PCA9685 软件库](https://github.com/Seeed-Studio/Seeed_PCA9685/archive/master.zip)

- **[PDF]** [PCA9685数据手册](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/res/PCA9685.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>