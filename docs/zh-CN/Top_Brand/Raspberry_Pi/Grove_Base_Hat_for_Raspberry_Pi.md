---
description: Grove Base Hat for Raspberry Pi
title: Grove Base Hat for Raspberry Pi
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_Base_Hat_for_Raspberry_Pi
last_update:
  date: 2/1/2023
  author: hushuxu
---

英文 wiki ：https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/main.jpg)

如今，Grove系列的传感器、制动器和显示器已经成长为一个大家族。将来，会有越来越多的Grove模块加入Grove生态系统。我们看到Grove帮助制造商，工程师，教师，学生甚至艺术家来构建、制造、创造......使Grove模块与更多平台兼容是我们的责任。现在我们为Grove生态系统设计了树莓派扩展板（Grove Base Hat for Raspberry Pi）与[树莓派Zero扩展板](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-Zero-p-3187.html)。换句话说，我们为Raspberry Pi（树莓派）带来了整个Grove系统。

树莓派扩展板尾了满足您的多种需求提供了数字、模拟、I2C、PWM和UART端口。在内置MCU的帮助下，还为树莓派提供了一个12位8通道ADC。

现在大约有60个Grove模块可以与树莓派扩展板一并使用。但是，我们将继续添加新的兼容模块，您使用的模块越多，添加的Grove就越多。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://detail.tmall.com/item.htm?spm=a212k0.12153887.0.0.4e60687d8OnS5l&id=611645727615">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    </a>
</div>

## 产品特性

- 支持树莓派 2/3B/3B+/4/Zero
- 内置MCU
- 12位ADC
- 多类型Grove端口 



## 规格参数

|项目|数值|
|---|---|
|工作电压|3.3V|
|MCU|STM32|
|ADC|12位8通道|
|Grove端口|    6 数字 <br/> 4 模拟 <br/> 3 I2C <br/> 1 PWM  <br/> 1 UART|
|树莓派通信总线|I2C|
|I2C地址|0x04|


!!!Attention
        工作电压为3.3V，请不要输入超过3.3V的电压，否则可能会损坏树莓派。 此外，该板不能通过Grove端口与5V grove模块一起使用，请使用兼容3.3V的Grove模块。



## 硬件概述

### 引脚图

**总览** 

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/overview.jpg)

        

**GPIO**

与树莓派引脚相同。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/1.jpg)

**PWM(脉冲宽度调制)**

Grove PWM口连接到树莓派的硬件PWM引脚GPIO/BCM引脚12（PWM0）和GPIO/BCM引脚13（PWM1），此外，您可以将所有GPIO引脚用作软PWM引脚。

!!!Note
        0- 除Grove端口外，所有丝印层的引脚号都是BCM引脚号。 BCM引脚和物理引脚之间的区别请参考[此处](https://www.raspberrypi.org/forums/viewtopic.php?p=726435)。

        1- 与硬件PWM口相比，软件PWM不够精确，在高频下会出问题。

        2- GPIO / BCM引脚18也标记为PWM0。由于GPIO / BCM 12和GPIO / BCM 18共享相同的PWM通道，因此不能将它们设置为不同的速率。

        3- 音频插孔输出还同时使用PWM 0和PWM 1，因此您无法在该插孔上获得音频输出的同时使用PWM。


![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/3.jpg)

**UART**

Grove UART端口连接到GPIO14（UART0 TX）和GPIO15（UART0 RX）。UART通常在树莓派上使用，是一种通过GPIO控制它或从串行控制台访问内核启动消息（默认情况下已启用）的便捷方法。它也可以用作连接Arduino，启动加载ATmega、ESP8266等与您的树莓派一起使用。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/2.jpg)


**数字**

该板上有6个数字Grove接口，通常将Grove连接线的黄线（与4针Grove接口的顶部引脚连接的线）作为信号线，因此我们将其命名为数字Grove端口 **D5/D16/D18/D22/D24/D26**。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/4.jpg)


**模拟**

众所周知，Raspberry Pi中没有ADC，因此它不能直接与模拟传感器一起使用。现在，借助内置的MCU STM32，树莓派扩展板可以用作外部12位ADC，这意味着您可以在树莓派上使用模拟传感器。更令人高兴的是，一共有四个可用的模拟Grove接口。

模拟传感器将模拟电压输入12位ADC。ADC将模拟数据转换为数字数据后，它将通过I2C接口将数字数据输入到树莓派中。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/5.jpg)


**I2C**

此板上有3个I2C端口，它们都直接连接到树莓派的I2C引脚。您可以将此部分视为I2C集线器。大多数Seeed新的Grove模块都具有I2C接口，因此您可能会发现这三个端口非常有用。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/7.jpg)


**SWD**

我们使用SWD端口将固件烧录到这个扩展板上。此外，在这个区域您会看到3个GPIO引脚，即 **引脚9/引脚10/引脚11** 。这三个引脚没有被任何Grove端口连接，您可以随意使用它们而不必担心发生引脚冲突。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/6.jpg)


**树莓派扩展板 Vs. GrovePi+**

| 参数                   | [树莓派扩展板](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/)                   | [GrovePi+](http://wiki.seeedstudio.com/GrovePi_Plus/)                                                                            |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| 工作电压             | 3.3V                                                                                                              | 5V                                                                                                                               |
| MCU                         | STM32F030F4P6                                                                                                     | ATMEGA328P                                                                                                                       |
| Grove端口                 | 6 数字(3.3V) <br/>  4 模拟(3.3V) <br/>  3 I2C(3.3V)  <br/> 1 PWM(3.3V) <br/> 1 RPISER(UART)：连接到树莓派(3.3V) <br/> 1 SWD | 7 数字(5V) <br/> 3 模拟(5V) <br/> 3 I2C(5V) <br/> 1 SERIAL: 连接到ATMEGA328P D0/1(5V) <br/> 1 RPISER: 连接到树莓派(3.3V) <br/> 1 ISP |
| Grove-数字               | 与树莓派直接连接                                                                                  | 连接到ATMEGA328P数字引脚并传输到I2C信号，然后通过电平转换器传输到树莓派                     |
| Grove-模拟                | 连接到STM32F030F4P6（12位ADC），然后转换为I2C信号，直接传输到树莓派               | 连接到ATMEGA328P的模拟引脚（10位ADC），先转换为I2C信号，然后通过电平转换器传输到树莓派      |
| Grove-I2C                   | 与树莓派直接连接                                                                                 | 通过电平转换器连接到树莓派                                                                                 |
| Grove-PWM                   | 与树莓派直接连接                                                                                 | NA                                                                                                                               |
| RPISER                      | 与树莓派直接连接                                                                               | 与树莓派直接连接                                                                                                |
| SERIAL                      | NA                                                                                                                | 连接到ATMEGA328P数字引脚D0/D1并转换为I2C信号，然后通过电平转换器传输到树莓派                |
| SWD                         | 将固件烧录到STM32F030F4P6                                                                                    | NA                                                                                                                               |
| ISP                         | NA                                                                                                                | 将固件烧录到ATMEGA328P                                                                                                      |
| 树莓派链接头引脚| 40                                                                                                                | 26                                                                                                                               |


## 入门指南

### 硬件

#### 所需部件

-- [树莓派 x1](https://www.seeedstudio.com/Raspberry-Pi-3-Model--p-3037.html)  
-- 树莓派扩展板 x1  
-- Grove模块


- **第一步：** 将树莓派扩展板插入树莓派。

- **第二步：** 将Grove模块插入相应的Grove接口。

- **第三步：** 用micro-usb数据线为树莓派供电。


!!!Warning
        我们建议您在完成所有硬件连接后打开树莓派的电源。 请不要热插拔传感器模块，否则树莓派可能会崩溃。



### 软件

在本节中，我们将介绍如何安装**seeed grove.py**库，以及如何使用树莓派扩展板的I2C、PWM、数字和模拟接口。



!!!Tip
        如果您没有使用过树莓派或不知道如何使用树莓派，请在开始使用前访问[这里](https://www.raspberrypi.org/documentation/)。

#### 架构

为了使用Grove传感器，grove.py依赖于许多硬件接口库，例如mraa/smbus2/rpi.gpi/rpi_ws281x。

![](https://github.com/Seeed-Studio/grove.py/raw/master/images/grove-py-arch.png)



#### 安装

**在线一键安装** 

一键安装、快速启动，无论您怎么叫它，只要使用下面的单个命令，我们就可以安装、更新所有依赖项和最新的grove.py。

!!! attention 
     如果你正在使用 **Raspberry Pi with Raspberrypi OS >= Bullseye**, 你**不能使用此命令行**.
```python
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

!!!Success
        如果一切顺利，您将看到以下消息。

        ```
        Successfully installed grove.py-0.5
        #######################################################
        Lastest Grove.py from github install complete   !!!!!
        #######################################################
        ```


**分步安装**

除了一键安装，您还可以逐步安装所有依赖项和最新的grove.py。 请参阅我们的github页面以获取更多信息。

[分布安装](https://github.com/Seeed-Studio/grove.py#installation)


您可以通过克隆grove.py库来检查源文件。

!!! attention 
     如果你正在使用 **Raspberry Pi with Raspberrypi OS >= Bullseye**, 你只能在 **python3** 中使用这个命令行.

```python
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
# Python2
sudo pip install .
# Python3
sudo pip3 install .
```


#### 使用


现在，您可以将树莓派扩展板与数十个Grove模块一起使用。输入命令 **grove_** 并按 ++tab++ 键以查看受支持的Grove列表。

```
pi@raspberrypi:~$ grove_
grove_3_axis_compass_bmm150        grove_i2c_color_sensor_v2          grove_mini_pir_motion_sensor       grove_rotary_angle_sensor          grove_temperature_sensor
grove_4_digit_display              grove_i2c_motor_driver             grove_moisture_sensor              grove_ryb_led_button               grove_thumb_joystick
grove_air_quality_sensor_v1_3      grove_lcd_1.2inches                grove_oled_display_128x64          grove_servo                        grove_tilt_switch
grove_button                       grove_led                          grove_piezo_vibration_sensor       grove_slide_potentiometer          grove_touch_sensor
grove_collision_sensor             grove_light_sensor_v1_2            grove_pwm_buzzer                   grove_sound_sensor                 grove_ultrasonic_ranger
grove_gesture_sensor               grove_loudness_sensor              grove_recorder_v3_0                grove_switch                       grove_water_sensor
grove_high_accuracy_temperature    grove_mech_keycap                  grove_relay                        grove_temperature_humidity_sensor  
pi@raspberrypi:~$ grove_

```

然后，我们将向您展示如何根据端口类型使用它们。

**PWM端口**

!!! attention 
     如果你正在使用 **Raspberry Pi with Raspberrypi OS >= Bullseye**, 你只能在 **python3** 中使用这个命令行.

我们用[Grove - buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)举例来为您介绍PWM口。

*硬件连接图*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect1.jpg)


在命令行界面输入命令`sudo grove_pwm_buzzer`。

```python
pi@raspberrypi:~$ sudo grove_pwm_buzzer
Insert Grove-Buzzer to Grove-Base-Hat slot PWM[12 13 VCC GND]

3800
3400
3000
2900
2550
2270
2000
exiting application
```

蜂鸣器会在响几声然后停止，程序将自动退出。


**数字端口**

!!! attention 
     如果你正在使用 **Raspberry Pi with Raspberrypi OS >= Bullseye**, 你只能在 **python3** 中使用这个命令行.

这里我们使用[Grove - Ultrasonic Ranger](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)作为数字端口的示例。


*硬件连接图*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect2.jpg)

在命令行界面输入命令`grove_ultrasonic_ranger 5 6`。

```python
pi@raspberrypi:~$ python3 grove_ultrasonic_ranger 5 6
Detecting distance...
6.979909436456088 cm
7.966469074117726 cm
12.451204760321255 cm
15.184797089675378 cm
17.429220265355603 cm
18.73230112010035 cm
20.717752390894397 cm
19.83807004731277 cm
17.3059003106479 cm

^CTraceback (most recent call last):
  File "/usr/local/bin/grove_ultrasonic_ranger", line 11, in <module>
    load_entry_point('grove.py==0.5', 'console_scripts', 'grove_ultrasonic_ranger')()
  File "/usr/local/lib/python3.5/dist-packages/grove/grove_ultrasonic_ranger.py", line 107, in main
    time.sleep(1)
KeyboardInterrupt

```

当您改变 Grove - Ultrasonic Ranger与目标对象之间的距离时，命令行界面显示的测量值将会出现相应改变。按 ++ctrl+c++ 退出。

!!!Attention
        对于大多数grove模块，您需要添加引脚号参数，例如`grove_ultrasonic_ranger 5 6`, **5** 和 **6** 是GPIO / BCM引脚。但是，您可能已经注意到，在第一个示例`grove_pwm_buzzer`中，我们没有在命令后添加参数。 这是因为PWM端口和I2C端口不需要引脚号参数。您可以在Grove插口旁找到丝印的引脚号。
        

**模拟端口**

!!! attention 
     如果你正在使用 **Raspberry Pi with Raspberrypi OS >= Bullseye**, 你只能在 **python3** 中使用这个命令行.

这里我们使用[Grove - Air quality sensor v1.3](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1-3-p-2439.html)作为模拟端口的示例。

*硬件连接图*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect3.jpg)

在命令行界面输入命令 `grove_air_quality_sensor_v1_3 0 1`。

```python
pi@raspberrypi:~$ python3 grove_air_quality_sensor_v1_3 0 1
Detecting ...
62, Air Quality OK.
63, Air Quality OK.
61, Air Quality OK.
61, Air Quality OK.
59, Air Quality OK.
62, Air Quality OK.
60, Air Quality OK.
60, Air Quality OK.
59, Air Quality OK.
60, Air Quality OK.
60, Air Quality OK.
60, Air Quality OK.

57, Air Quality OK.
^CTraceback (most recent call last):
  File "/usr/local/bin/grove_air_quality_sensor_v1_3", line 11, in <module>
    load_entry_point('grove.py==0.5', 'console_scripts', 'grove_air_quality_sensor_v1_3')()
  File "/usr/local/lib/python3.5/dist-packages/grove/grove_air_quality_sensor_v1_3.py", line 68, in main
    time.sleep(.1)
KeyboardInterrupt

```

您可以使用此传感器检测空气质量。按 ++ctrl+c++ 退出。

!!!Notice
        您可能已经注意到，对于模拟端口，丝印的引脚号类似于 **A1, A0**, 但是在命令中，我们使用参数**0** 和 **1**, 与数字端口相同 。因此，在使用的时候请确保将模块插入正确的端口，否则可能会发生引脚冲突。

**I2C**

!!! attention 
     如果你正在使用 **Raspberry Pi with Raspberrypi OS >= Bullseye**, 你只能在 **python3** 中使用这个命令行.

这里我们使用[Grove - OLED Display 128x64](https://www.seeedstudio.com/Grove-OLED-Display-0-9-p-781.html)作为I2C示例。

*硬件连接图*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect4.jpg)

在命令行界面输入命令`grove_oled_display_128x64`。

```
pi@raspberrypi:~$ python3 grove_oled_display_128x64
pi@raspberrypi:~$ 
```

命令行界面看起来似乎什么都没发生，但是如果您检查您的oled，就会发现网络世界中最著名的句子。😄


!!!Note
        如果使用I2C工具扫描Grove模块的I2C地址，则可能会找到两个或更多地址。 0x04是 *树莓派扩展板* 的地址。


## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/Raspberry%20Pi%20Grove%20Base%20HAT%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源

- **[Zip]** [树莓派扩展板Eagle文件](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/Raspberry%20Pi%20Grove%20Base%20HAT%20v1.0.zip)

- **[Zip]** [Seeed Grove.py库](https://github.com/Seeed-Studio/grove.py/archive/master.zip)

- **[Zip]** [固件](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/grove_rpi_base_hat-v0.2-20180905-02.zip)

- **[PDF]** [STM32数据手册](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/STM32.pdf)



## 项目

以下为这个产品的介绍视频。

<iframe width={560} height={315} src="https://www.youtube.com/embed/0dFQWwXOOBI?rel=0" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />




## 技术支持

如果您有任何技术问题，请提交到我们的[论坛](https://forum.seeedstudio.com/)。


<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
