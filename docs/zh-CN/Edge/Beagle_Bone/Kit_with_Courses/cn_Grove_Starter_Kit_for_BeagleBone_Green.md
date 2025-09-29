---
description: Grove BeagleBone® Green 入门套件
title: Grove BeagleBone® Green 入门套件
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_Starter_Kit_for_BeagleBone_Green
last_update:
  date: 2022/1/10
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Grove_bbg_start_kit.jpg)

Grove BeagleBone® Green 入门套件是一个面向初学者的入门级套件，可以帮助您探索 BBG 并创建创新项目。它是新手开发一些酷炫项目并在 BBG 上构建原型的最佳选择。以下是我们在 BeagleBone® Green 上成功使用的一些传感器、执行器和扩展板的集合。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Grove-Starter-Kit-for-SeeedStudio-BeagleBone-Green-p-2526.html)

应用创意
-----------------

如果您想使用 BeagleBone® Green 和 Grove 制作一些很棒的项目，这里有一些项目供您参考。

| **使用 BBG 和 BBG 入门套件的智能灯演示（HA）**                                                         | **使用 BBG 和 BBG 入门套件的物联网应用**                        |
|-----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/BBG_starter_kit1.png)                              | ![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/图片1.png)  |
| [立即制作！](https://www.seeedstudio.com/recipe/363-smart-light-demo-with-bbg-amp-bbg-start-kit-ha.html) | [立即制作！](https://www.seeedstudio.com/recipe/367-an-iot-application-with-bbg-amp-bbg-start-kit.html)        |

部件清单
---------

### Grove - I2C Hub

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/I2c_hub_b.jpg)

I2C Hub Grove 是一个扩展 Grove 模块，用于将多个 I2C 设备连接到 Grove I2C 插座。

它可以与 Universal 4 Pin to X2 4 Pin 电缆一起使用，并最多连接 7 个 I2C 设备，能够满足大多数开发需求。

如果您想了解更多关于此模块的信息，请点击[**这里**](/cn/Grove-I2C_Hub)。

### Grove - 按钮

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Button1.jpg)

新版按钮 Grove 包含一个独立按钮，配置了下拉电阻——可直接用作微控制器的数字输入。按钮通过 SIG(D1) 线发出信号，NC(D2) 在此 Grove 中未使用。

**按钮原理图**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Buttonsch.jpg)

### Grove - I2C ADC

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/I2C_ADC_01.jpg)

Grove - I2C ADC 是一个基于 ADC121C021 的 12 位精度 ADC 模块。

它通过提供恒定的参考电压来提高从模拟传感器收集的值的精度。

由于其地址可更改，您最多可以同时使用 9 个 I2C ADC。

另一方面，该模块提供自动睡眠功能，大大降低了功耗。
<!-- 如果您想了解更多关于此模块的信息，请点击[**这里**](/cn/Grove-I2C_ADC)。 -->

### Grove - 温度传感器

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Grove_temp.jpg)

Grove - 温度传感器使用热敏电阻来检测环境温度。

当环境温度降低时，热敏电阻的电阻会增加。

我们利用这一特性来计算环境温度。

该传感器的检测范围为 -40 - 125ºC，精度为 ±1.5ºC。

您应将其插入 Grove - I2C ADC J2 端口。
如果您想了解更多关于此模块的信息，请点击[**这里**](/cn/Grove-Temperature_Sensor_V1.2)。

### Grove - 声音传感器

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Twig-Sound-sensor.jpg)

Grove - 声音传感器可以检测环境的声音强度。

该模块的主要组件是一个简单的麦克风，它基于 LM358 放大器和驻极体麦克风。

该模块的输出为模拟信号，您应将其插入 Grove - I2C ADC J2 端口。
如果您想了解更多关于此模块的信息，请点击[**这里**](/cn/Grove-Sound_Sensor)。

### Grove - 3 轴数字加速度计（±16g）

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/3-axis_Accelerometer_ADXL345.jpg)

这是一个高分辨率数字加速度计，提供最高 3.9mg/LSB 的分辨率和 ±16g 的大测量范围。

它基于先进的 3 轴 IC ADXL345。您无需担心将其应用于自由落体检测项目，因为它足够坚固，可以承受高达 10,000g 的冲击。

同时，它足够灵敏，可以检测单击和双击。它非常适合运动检测、手势检测以及机器人技术。

如果您想了解更多关于此模块的信息，请点击[**这里**](/cn/Grove-3-Axis_Digital_Accelerometer-16g)。

### Grove - 继电器

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Grove_relay.jpg)

继电器 Grove 是一个数字常开开关，可以控制一个继电器，该继电器能够切换比您的 BBG 板更高的电压和电流。

当设置为 HIGH 时，LED 会亮起，继电器会闭合，允许电流流动。

其峰值电压能力为 250V，电流为 10 安培。

:::caution
在处理市电电压时请格外小心——如果有疑问，请联系专业人士，例如持证电工寻求帮助。
:::

**继电器原理图**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Relaysch.jpg)

### Grove - 蜂鸣器

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Buzzer1.jpg)

这是一个简单但有趣的 Grove 模块。

压电蜂鸣器可以连接到数字输出，当输出为高电平时会发出声音。

或者，它也可以连接到模拟脉宽调制输出，以生成各种音调和效果。

**Grove 蜂鸣器原理图**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Buzzersch.jpg)

### Grove - 可串联 RGB LED

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Chanbalelednb1.jpg)

可串联 RGB LED 基于 P9813 芯片，这是一种全彩光源 LED 驱动芯片，能够提供恒流驱动和 256 级灰度调制输出。

通过线缆（DATA 和 CLK）进行传输，内置循环功能，可增强传输距离。

<!-- 如果您想了解更多关于此模块的信息，请点击 [**这里**](/cn/Grove-Chainable_RGB_LED/)。 -->

### Grove - OLED 显示屏 0.96"

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Oled1281281.jpg)

这是一个 16 色灰度 96×96 点阵 OLED 显示模块，具有 Grove 兼容的 4 针 I2C 接口。

Grove - OLED 96 x 96 由 96 x 96 点阵 OLED 模块 LY120 和 SSD1327 驱动 IC 构成。

与 LCD 相比，OLED 屏幕更具竞争力，具有许多优势，例如高亮度、自发光、高对比度、纤薄外形、宽视角、宽温度范围和低功耗。

如果您想了解更多关于此模块的信息，请点击 [**这里**](/cn/Grove-OLED_Display_0.96inch)。

:::tip
更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

示例
--------

要开始编辑板上的程序，可以使用 Cloud9 IDE。
作为熟悉 Cloud9 IDE 的一个简单练习，创建一个简单的应用程序来点亮 BeagleBone® 上的 4 个用户可编程 LED 之一是一个不错的开始。

如果这是您第一次使用 Cloud9 IDE，请按照此 [**链接**](/cn/BeagleBone_Green)。

### 如何在 BBG 上使用 Grove - 按钮

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Button_on_bbg.jpg)

**步骤1：** 将 Grove - UART 插座设置为 Grove - GPIO 插座，请按照此 [**链接**](https://www.seeedstudio.com/recipe/362-how-to-use-the-grove-uart-port-as-a-gpio-on-bbg.html)。

**步骤2：** 点击右上角的 "+" 创建一个新文件。

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/C9-create-tab.png)

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/C9_newfile.jpg)

**步骤3：** 将以下代码复制并粘贴到新标签页中

```
import time
import Adafruit_BBIO.GPIO as GPIO
 
# 注意：使用 P9_22(UART2_RXD) 作为 GPIO。
# 将 Grove 按钮连接到 BeagleBone® Green 的 UART Grove 端口。
Button = "P9_22"            # GPIO P9_22
GPIO.setup(Button, GPIO.IN)
 
if __name__== '__main__':
    while True:
        if GPIO.input(Button):
            print "Button is pressed."
            time.sleep(1)
        else:
            print "Button is unstuck."
            time.sleep(1)
```

**步骤4：** 点击磁盘图标保存文件，并为文件命名，扩展名为 .py。

**步骤5：** 运行代码。

:::note
其他 Grove 模块的使用方法与 Grove 按钮类似。
:::

资源
---------

- [Grove Starter kit for BBG 示例代码](https://github.com/Seeed-Studio/Grove_Starter_Kit_for_BBG)

<!-- 本 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>