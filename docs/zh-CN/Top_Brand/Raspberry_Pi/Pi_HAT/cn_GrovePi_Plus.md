---
description: GrovePi Plus
title: GrovePi Plus
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/GrovePi_Plus
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/GrovePi_Plus/img/110060049%2010_02.jpg)

[GrovePi](http://www.dexterindustries.com/GrovePi/) 是一个附加板，它将 [Grove 传感器](#/Grove_System "Grove System") 带到了 [Raspberry Pi](https://www.seeedstudio.com/depot/s/Raspberry%2520Pi.html?search_in_description=0) 上。作为 [GrovePi](https://www.seeedstudio.com/depot/GrovePi-p-1672.html) 的新版本。
它增加了对新推出的 RaspberryPi Model B+ 和 Model A+ 的支持。
有三个安装孔可以完美匹配所有版本的 Raspberry Pi。摄像头线缆出口孔。
它还改进了电压电平转换子电路。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/GrovePi-p-2241.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

---

* 7个数字端口

* 3个模拟端口

* 3个I2C端口

* 1个串口连接到GrovePi

* 1个串口连接到Raspberry Pi

* Grove 接头Vcc输出电压：5Vdc

## 开始使用

---

**<big>欢迎来到GrovePi+快速入门指南。</big>**

如果您想了解更多关于它如何工作的信息，您可以在设计师的 [Github 仓库](https://github.com/DexterInd/GrovePi) 中找到所有设计文件。

**GrovePi Plus for Raspberry Pi 对比 GrovePi+**

| 参数                        | [GrovePi Plus for Raspberry Pi](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/)                   | [GrovePi+](https://wiki.seeedstudio.com/cn/GrovePi_Plus/)                                                                            |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| 工作电压                    | 3.3V                                                                                                              | 5V                                                                                                                               |
| MCU                         | STM32F030F4P6                                                                                                     | ATMEGA328P                                                                                                                       |
| Grove 端口                 | 6个数字(3.3V)   4个模拟(3.3V)   3个I2C(3.3V)   1个PWM(3.3V)  1个RPISER(UART)连接到Raspberry Pi(3.3V)  1个SWD | 7个数字(5V)  3个模拟(5V)  3个I2C(5V)  1个SERIAL：连接到ATMEGA328P D0/1(5V)  1个RPISER：连接到Raspberry Pi(3.3V)  1个ISP |
| Grove-数字               | 直接连接到Raspberry Pi                                                                                  | 连接到ATMEGA328P数字引脚并转换为I2C信号，然后通过电平转换器到Raspberry Pi                      |
| Grove-模拟                | 连接到STM32F030F4P6(12位ADC)然后转换为I2C信号，直接路由到Raspberry Pi                | 连接到ATMEGA328P模拟引脚(10位ADC)然后转换为I2C信号，然后通过电平转换器到Raspberry Pi       |
| Grove-I2C                   | 直接连接到Raspberry Pi                                                                                  | 通过电平转换器连接到Raspberry Pi                                                                                  |
| Grove-PWM                   | 直接连接到Raspberry Pi                                                                                  | 无                                                                                                                               |
| RPISER                      | 直接连接到Raspberry Pi                                                                                  | 直接连接到Raspberry Pi                                                                                                 |
| SERIAL                      | 无                                                                                                                | 连接到ATMEGA328P数字引脚D0/D1并转换为I2C信号，然后通过电平转换器到Raspberry Pi                |
| SWD                         | 向STM32F030F4P6烧录固件                                                                                    | 无                                                                                                                               |
| ISP                         | 无                                                                                                                | 向ATMEGA328P烧录固件                                                                                                      |
| Raspberry Pi连接器引脚数 | 40                                                                                                                | 26                                                                                                                               |

### 将GrovePi连接到Raspberry Pi

首先，将您的GrovePi安装到Raspberry Pi上。GrovePi滑动到Raspberry Pi的顶部，如下图所示。

![](https://files.seeedstudio.com/wiki/GrovePi_Plus/img/GrovePiPlus_wiki_3.jpg)

![](https://files.seeedstudio.com/wiki/GrovePi_Plus/img/GrovePi_Wiki_1.JPG)

在堆叠GrovePi时，确保引脚正确对齐。

### 在Raspberry Pi上设置软件

接下来我们将在Raspberry Pi上安装软件。有两个安装选项：

* 您可以使用我们的BrickPi镜像。

* 使用您自己的镜像。如果您已经在树莓派上运行了自己的 Linux 版本，您可以使用我们的 bash 脚本来设置 GrovePi。

**使用 BrickPi 镜像**

* 下载 Brick Pi 镜像并将镜像安装到您的 SD 卡上。[这里是 BrickPi 页面的链接，包含配置 SD 卡的步骤](http://www.dexterindustries.com/BrickPi/getting-started/pi-prep/)。此安装至少需要 4GB SD 卡。

* 在 Raspbian 的适当位置克隆 Github 仓库

```
git clone https://github.com/DexterInd/GrovePi.git
```

* 运行 Scripts 文件夹中的 bash 脚本来配置 Raspbian。[这里是使用脚本设置的教程。](http://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)

* 重启您的树莓派。

**配置您自己的镜像**

* 在适当位置克隆 Github 仓库

```
git clone https://github.com/DexterInd/GrovePi.git
```

* 运行 Scripts 文件夹中的 bash 脚本来配置 Raspbian。[这里](http://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)是使用脚本设置的教程。

* 重启树莓派并开始使用 Grove Pi。

### 测试 GrovePi

一旦您的树莓派配置为与 GrovePi 配合工作，就是时候看看它的实际效果了。

我们开发了三个简单的项目来说明 GrovePi 的工作原理。

## 支持的产品

---

### Grove 列表

* [1. Grove - Button](https://wiki.seeedstudio.com/cn/Grove-Button#With_Raspberry_Pi)

* [2. Light Sensor](https://wiki.seeedstudio.com/cn/Grove-Light_Sensor#With_Raspberry_Pi)

* [3. Buzzer](https://wiki.seeedstudio.com/cn/Grove-Buzzer#With_Raspberry_Pi)

* [4. Sound Sensor](https://wiki.seeedstudio.com/cn/Grove-Sound_Sensor#With_Raspberry_Pi)

* [5. Grove - Red LED](https://wiki.seeedstudio.com/cn/Grove-Red_LED#With_Raspberry_Pi)

* [6. LCD RGB Backlight](https://wiki.seeedstudio.com/cn/Grove-LCD_RGB_Backlight#With_Raspberry_Pi)

* [7. Rotary Angle Sensor](https://wiki.seeedstudio.com/cn/Grove-Rotary_Angle_Sensor#With_Raspberry_Pi)

* [8. Grove-Temperature_and_Humidity_Sensor_Pro](https://wiki.seeedstudio.com/cn/Grove-Temperature_and_Humidity_Sensor_Pro/#With_Raspberry_Pi)

* [9. Ultrasonic Ranger Sensor](https://wiki.seeedstudio.com/cn/Grove-Ultrasonic_Ranger#With_Raspberry_Pi)

* [10. Relay](https://wiki.seeedstudio.com/cn/Grove-Relay#With_Raspberry_Pi)

* [11. Grove-4-Digit Display](https://wiki.seeedstudio.com/cn/Grove-4-Digit-Display#With_Raspberry_Pi)

* [12. Grove-6-Axis_AccelerometerAndCompass_V2.0](https://wiki.seeedstudio.com/cn/Grove-6-Axis_AccelerometerAndCompass_V2.0#With_Raspberry_Pi)

* [13. Grove - Barometer (High-Accuracy)](https://wiki.seeedstudio.com/cn/Grove-Barometer(High-Accuracy)#With_Raspberry_Pi)

* [14. Grove-Barometer_Sensor-BMP180](https://wiki.seeedstudio.com/cn/Grove-Barometer_Sensor-BMP180#With_Raspberry_Pi)

* [15. Grove-Dust_Sensor](https://wiki.seeedstudio.com/cn/Grove-Dust_Sensor#With_Raspberry_Pi)

* [16. Grove-Electricity_Sensor](https://wiki.seeedstudio.com/cn/Grove-Electricity_Sensor#With_Raspberry_Pi)

* [17. Grove-Electromagnet](https://wiki.seeedstudio.com/cn/Grove-Electromagnet#With_Raspberry_Pi)

* [18. Grove-火焰传感器](https://wiki.seeedstudio.com/cn/Grove-Flame_Sensor#With_Raspberry_Pi)
* [19. Grove-气体传感器-MQ2](https://wiki.seeedstudio.com/cn/Grove-Gas_Sensor-MQ2#With_Raspberry_Pi)
* [20. Grove-Gesture_v1.0](https://wiki.seeedstudio.com/cn/Grove-Gesture_v1.0#With_Raspberry_Pi)
* [21. Grove-GPS](https://wiki.seeedstudio.com/cn/Grove-GPS#With_Raspberry_Pi)
* [22. Grove-高温传感器](https://wiki.seeedstudio.com/cn/Grove-High_Temperature_Sensor#With_Raspberry_Pi)
* [23. Grove-红外反射传感器](https://wiki.seeedstudio.com/cn/Grove-Infrared_Reflective_Sensor#With_Raspberry_Pi)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GrovePi_Plus/res/GrovePi%2BEagle%20FIle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

* **[Eagle]** [GrovePi_Plus V3.0 eagle 文件](https://files.seeedstudio.com/wiki/GrovePi_Plus/res/GrovePi%2BEagle%20FIle.zip)
* **[PDF]** [GrovePi_Plus V3.0 原理图 pdf 文件](https://files.seeedstudio.com/wiki/GrovePi_Plus/res/GrovePi%2B%20v3.0%20Sch.pdf)
* **[PDF]** [GrovePi_Plus V3.0 PCB pdf 文件](https://files.seeedstudio.com/wiki/GrovePi_Plus/res/GrovePi%2B%20v3.0%20PCB.pdf)
* **[文档]** [GrovePi 软件设置](https://files.seeedstudio.com/wiki/GrovePi_Plus/res/Setting_Up_Software_for_GrovePi.pdf)

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