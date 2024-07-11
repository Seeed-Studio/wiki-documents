---
title: Grove - I2C电机驱动器V1.2
description: Grove - I2C电机驱动器V1.2
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.2/
slug: /cn/Grove-I2C_Motor_Driver_V1.2
last_update:
  date: 03/20/2024
  author: WuFeifei
---
![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-2.jpg)

Grove I2C 马达驱动器是 Grove 系列的新成员，同样拥有易于使用的接口。其核心是一个双通道 H 桥驱动芯片（L298N），每个通道可以处理高达 2A 的电流，由 Atmel ATmega8L 控制，用于处理与例如 Arduino 之间的 I2C 通信。两个马达可以同时驱动，且可以设置不同的速度和方向。它可以为两个有刷直流马达或一个四线双相步进马达供电。它需要一个 6V 至 15V 的电源为马达供电，并配有一个板上 5V 电压调节器，可以为 I2C 总线和 Arduino 供电（可通过跳线选择）。所有驱动线路都通过二极管保护免受反向电动势的影响。

易于使用的软件接口并不是唯一易于使用的功能，因为 Grove I2C 马达驱动器旨在让您快速上手。它配备了一个用于电源的 LED 和四个 LED 来指示每个马达是否在运行以及运行的方向。螺丝端子便于马达和电源的连接，而 Grove 系统插头和 I2C 接口则使您能够将驱动器与其他多个设备串联起来。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/twig-i2c-motor-driver-p-907.html)

## 版本追踪器

---
<table width="494">
<tr>
<th> 版本
</th>
<th> 说明
</th>
<th> 发布
</th></tr>
<tr>
<td> v1.0
</td>
<td> 首次公开发行
</td>
<td> 2012年5月17日
</td></tr>
<tr>
<td> v1.2
</td>
<td> 由硬件设置的I2C地址
</td>
<td> 2012年7月2日
</td></tr></table>

## 功能特性

---

* 兼容Grove接口

* I2C接口

* 可控制马达的速度和方向

* 通道数：2

* 可通过硬件更改从机地址


## 规格

---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> 项目
</th>
<th scope="col"> 最小值
</th>
<th scope="col"> 典型值
</th>
<th scope="col"> 最大值
</th>
<th scope="col"> 单位
</th></tr>
<tr>
<th scope="row">工作电压
</th>
<td> 6
</td>
<td> -
</td>
<td> 15
</td>
<td> VDC
</td></tr>
<tr>
<th scope="row"> 每通道最大输出电流
</th>
<td colspan="3">0.5
</td>
<td> A
</td></tr>
<tr>
<th scope="row"> 最大总电流
</th>
<td colspan="3">1.0
</td>
<td> A
</td></tr>
<tr>
<th scope="row"> I2C总线输入输出电压
</th>
<td colspan="3"> 5
</td>
<td> V
</td></tr>
<tr>
<th scope="row">  通信协议
</th>
<td colspan="3"> I2C
</td>
<td> /
</td></tr></table>


## 接口功能

---
![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-1.jpg)

**78M05 IC:** 5V电压调节器

**L298 IC:** 双全桥驱动器

**Atmega8 IC:** 控制马达旋转

**注意:** 螺丝接线端子上的输入电压被调节至5V，并通过跳线（J4）连接到I2C +5V。如果同时使用螺丝接线端子上的外部电源和I2C接口的电源，请移除跳线。如果需要为I2C总线提供5V电源，请使用跳线。

## 应用思路

---
这款马达驱动器可用于驱动任何有刷电子马达，只要其在5V电压下消耗的电流不超过2A即可。可以同时驱动两个马达，并且可以设置不同的速度和方向。速度可以完全按比例设置，并由板载的ATmega8通过PWM（脉宽调制）进行控制。速度的设置是通过从Arduino或Seeeduino发送的I2C命令来实现的。
它非常适合机器人、自制遥控车、机箱风扇、高功率LED照明或涉及比例负载控制的其他项目等应用场景。

## 注意事项

---

* 当工作电流超过1安培时，电路板会变得非常热。请务必远离！

* 支持Arduino IDE（1.0或更高版本）。


## 使用说明

---
这款I2C马达驱动器基于L298芯片控制马达。L298不仅仅是一个双马达驱动器，它还是一个双H桥驱动器。H桥基本上是一种特定的晶体管配置，可以切换电流的方向。因此，将其连接到马达上时，意味着你可以让马达在两个方向上旋转，并且通过PWM（脉宽调制）输入，你可以使用Arduino来控制它们以任何速度旋转。由于L298具有两个H桥，你不仅可以使机器人前进和后退，还可以通过让每个轮子以不同的方向旋转来使其转弯。

现在，让我们使用I2C马达驱动器来控制两个直流马达或一个步进马达以正向或反向旋转。

### 设置I2C马达驱动器的地址

* 通过拨码开关设置地址是新版I2C马达驱动器新增的一项功能。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-9.jpg)

* 然后确保程序中设置的地址与I2C马达驱动器上设置的地址一致。程序中默认的地址设置是0x0f。

```
#define I2CMotorDriverAdd         0x0f   // Set the address of the I2CMotorDriver
```

###

如何驱动两个直流马达

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-4.jpg)

<div>
  <span style={{color: 'red'}}>**注意:**
  </span>
  <dl><dd>然而，首先要注意的是，你需要一个外部电源来为你的直流马达供电。Arduino板上的5V引脚无法为两个马达提供足够的电力，如果你这样做，可能会损坏你的Arduino。
    </dd></dl>
</div>


然后，按照以下方式为你的Arduino编写程序：

```
#include <Wire.h>
.......
.......
< Driver functions >
.......
.......
void setup()  {
    Wire.begin(); // join i2c bus (address optional for master)
    delayMicroseconds(10000); //wait for motor driver to initialization
}

void loop()  {
    while(1)  {
        MotorSpeedSetAB(100,20);
        delay(10); //this delay needed
        MotorDirectionSet(0b1010);  //0b1010  Rotating in the positive direction
        delay(1000);
        MotorDirectionSet(0b0101);  //0b0101  Rotating in the opposite direction
        delay(500);
    }
}
```

在这个程序中，Arduino首先使用_MotorSpeedSetAB()_命令设置两个直流马达的速度，然后使用_MotorDirectionSet()_命令设置直流马达的工作方向。请参考Grove-I2C_Motor_Driver_V1.2#Function_Reference以获取更多细节，你可以在Grove-I2C_Motor_Driver_V1.2#Resources中下载所有示例代码。

### 如何驱动4线步进电机

I2C电机驱动器也可以用来驱动4线步进电机。将你的步进电机连接到I2C电机驱动器的输出引脚，然后将电机驱动器通过I2C总线连接到你的Arduino/Seeeduino上。按照以下步骤为你的Arduino编程：

```
#include <Wire.h>
.......
.......
< Driver functions >
.......
.......
void setup()  {
    Wire.begin(); // join i2c bus (address optional for master)
    delayMicroseconds(10000); //wait for motor driver to initialization
}

void loop()  {
    while(1)  {
        MotorSpeedSetAB(100,100);//when driving a stepper, the speed should be set to 100;
        delay(10);
        MotorDirectionSet(0b0001);
        delay(4);
        MotorDirectionSet(0b0011);
        delay(4);
        MotorDirectionSet(0b0010);
        delay(4);
        MotorDirectionSet(0b0110);
        delay(4);
        MotorDirectionSet(0b0100);
        delay(4);
        MotorDirectionSet(0b1100);
        delay(4);
        MotorDirectionSet(0b1000);
        delay(4);
        MotorDirectionSet(0b1001);
        delay(4);
    }
}
```

连接好的4线步进电机将会转动，你可以在Arduino程序中调整其转动速度或步数。此外，你还可以使用其他一些步进电机库来控制它，你可以在资源库中下载所有的示例代码。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/2.gif)

## 函数参考

---
**1. void MotorSpeedSetAB(unsigned char MotorSpeedA , unsigned char MotorSpeedB)**

_*描述*: *定义电机1和电机2的速度*_

_MotorSpeedA: *直流电机A的速度，取值范围应为* 0~100;_

_MotorSpeedB: *直流电机B的速度，取值范围应为* 0~100;_

用法:

```
Serial.println("sent DC speed 100");
MotorSpeedSetAB(100,100);//defines the speed of motor 1 and motor 2;
delay(10); //this delay needed
```

**2. void MotorPWMFrequenceSet(unsigned char Frequence)**

_*描述：设置PWM的分频频率，默认值为0x03。*_

_*Frequence：PWM的分频频率。*_

**3. void MotorDirectionSet(unsigned char Direction)**

_*描述：调整电机的方向。*_

_*方向：可以是正转/反转。*_

用法：

```
MotorDirectionSet(0b1010);  //"0b1010" defines the output polarity, "10" means the M+ is "positive" while the M- is "negative"
                            // make sure M+ and M- is different polarity when driving DC motors.
delay(1000);
MotorDirectionSet(0b0101);  //0b0101  Rotating in the opposite direction
delay(500);
```

**4. void MotorDriectionAndSpeedSet(unsigned char Direction,unsigned char MotorSpeedA,unsigned char MotorSpeedB)**

_*描述：同时调整电机的方向和速度。*_

## 在线电路图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/Grove-I2C_Motor_Driver_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

* [Grove - I2C 电机驱动器Eagle文件](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/Grove-I2C_Motor_Driver_Source_File.zip)

* [I2C 电机驱动器V1.2示例代码](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/I2CMotorDriver12Demo.zip)

* [L298 数据手册](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/L298datasheet.pdf)

* [78M05 数据手册](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/ST_78M05DataSheet.pdf)

* [文件：使用ISP为Atmega8烧录固件](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/Burn_firmware_for_Atmega8_using_ISP.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供不同形式的支持，以确保您在使用我们的产品时能够拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
