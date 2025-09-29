---
title: Grove - I2C 电机驱动器 V1.2
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-I2C_Motor_Driver_V1.2/
slug: /cn/Grove-I2C_Motor_Driver_V1.2
last_update:
  date: 01/09/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-2.jpg)

Grove I2C 电机驱动器是 Grove 系列的新成员，具有同样易于使用的接口。其核心是一个双通道 H 桥驱动芯片（L298N），每通道可处理高达 2A 的电流，由 Atmel ATmega8L 控制，用于处理与 Arduino 等设备的 I2C 通信。两个电机可以同时驱动，并设置为不同的速度和方向。它可以为两个有刷直流电机或一个四线两相步进电机供电。需要 6V 至 15V 的电源为电机供电，并且板载 5V 电压调节器可以为 I2C 总线和 Arduino 供电（通过跳线选择）。所有驱动线路都通过二极管保护，防止反向电动势。

易于使用的软件接口并不是唯一的便利功能，因为 Grove I2C 电机驱动器设计旨在让您快速上手。它配备了一个电源 LED 和四个 LED，用于指示每个电机是否运行以及运行方向。螺丝端子便于电机和电源连接，而 Grove 系统插头和 I2C 接口使您能够将驱动器与许多其他设备进行菊花链连接。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/twig-i2c-motor-driver-p-907.html)

## 版本追踪

---
<table width="494">
<tr>
<th>版本</th>
<th>描述</th>
<th>发布日期</th>
</tr>
<tr>
<td>v1.0</td>
<td>首次公开发布</td>
<td>2012年5月17日</td>
</tr>
<tr>
<td>v1.2</td>
<td>通过硬件设置 I2C 地址</td>
<td>2012年7月2日</td>
</tr>
</table>

## 特性

---

- Grove 兼容

- I2C 接口

- 可控制电机的速度和方向

- 通道数量：2

- 可通过硬件更改从地址

## 规格

---
<table cellspacing="0" width="80%">
<tr>
<th scope="col">项目</th>
<th scope="col">最小值</th>
<th scope="col">典型值</th>
<th scope="col">最大值</th>
<th scope="col">单位</th>
</tr>
<tr>
<th scope="row">工作电压</th>
<td>6</td>
<td>-</td>
<td>15</td>
<td>VDC</td>
</tr>
<tr>
<th scope="row">每通道最大输出电流</th>
<td colspan="3">0.5</td>
<td>A</td>
</tr>
<tr>
<th scope="row">最大总电流</th>
<td colspan="3">1.0</td>
<td>A</td>
</tr>
<tr>
<th scope="row">I2C 总线输入/输出电压</th>
<td colspan="3">5</td>
<td>V</td>
</tr>
<tr>
<th scope="row">通信协议</th>
<td colspan="3">I2C</td>
<td>/</td>
</tr>
</table>

## 接口功能

---
![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-1.jpg)

**78M05 IC:** 5V 电压调节器

**L298 IC:** 双全桥驱动器

**Atmega8 IC:** 控制电机旋转

**注意:** 螺丝端子上的输入电压被调节为 5V，并通过跳线 (J4) 连接到 I2C +5V。如果同时使用螺丝端子的外部电源和 I2C 接头供电，请移除跳线。如果需要为 I2C 总线提供 5V 电压，请使用跳线。

## 应用场景

---
该电机驱动器可以用于驱动任何额定电流不超过 2A 且电压为 5V 的有刷电子电机。可以同时驱动两个电机，并分别设置不同的速度和方向。速度可以完全按比例设置，并由板载的 ATmega8 使用 PWM 控制。通过 Arduino 或 Seeeduino 发送的 I2C 命令来设置速度。

它非常适合用于机器人、自制遥控车、机箱风扇、高功率 LED 照明或任何涉及比例负载控制的项目。

## 注意事项

---

- 当电流超过 1A 时，板子会非常热。请勿用手触碰！

- 支持 Arduino IDE（1.0 或更高版本）。

## 使用方法

---
I2C 电机驱动器基于 L298 芯片。L298 不仅是一个双电机驱动器，它还是一个双 H 桥。H 桥是一种特定的晶体管配置，允许您切换电流方向。因此，当连接到电机时，这意味着您可以让电机向两个方向旋转，并且通过 PWM 输入，您可以使用 Arduino 以任何速度控制电机旋转。由于 L298 具有两个 H 桥，您不仅可以让机器人前进和后退，还可以通过让每个轮子朝不同方向旋转来实现转向。

现在，让我们使用 I2C 电机驱动器来控制两个直流电机或一个步进电机正向或反向旋转。

### 设置 I2C 电机驱动器的地址

- 通过拨码开关设置地址，这是新 I2C 电机驱动器新增的功能。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-9.jpg)

- 然后确保程序中的地址设置与 I2C 电机驱动器上的地址设置相同。程序中的默认地址设置为 0x0f。

```
#define I2CMotorDriverAdd         0x0f   // 设置 I2C 电机驱动器的地址
```

###

如何驱动两个直流电机

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-4.jpg)

<div>
  <span style={{color: 'red'}}>**注意：**</span>
  <dl>
    <dd>首先需要注意的是，您需要为直流电机提供外部电源，Arduino 的 5V 引脚无法提供足够的电力来驱动两个电机，如果这样做可能会损坏您的 Arduino。</dd>
  </dl>
</div>

然后按照以下程序编写您的 Arduino：

```
#include <Wire.h>
.......
.......
< 驱动函数 >
.......
.......
void setup()  {
    Wire.begin(); // 加入 I2C 总线（主设备地址可选）
    delayMicroseconds(10000); // 等待电机驱动器初始化
}

void loop()  {
    while(1)  {
        MotorSpeedSetAB(100,20);
        delay(10); // 需要这个延迟
        MotorDirectionSet(0b1010);  //0b1010 正向旋转
        delay(1000);
        MotorDirectionSet(0b0101);  //0b0101 反向旋转
        delay(500);
    }
}
```

在这个程序中，Arduino 首先通过 _MotorSpeedSetAB()_ 命令设置两个直流电机的速度，然后通过 _MotorDirectionSet()_ 命令设置直流电机的工作方向。有关详细信息，请参考 Grove-I2C_Motor_Driver_V1.2#Function_Reference，您可以在 Grove-I2C_Motor_Driver_V1.2#Resources 下载所有示例代码。

### 如何驱动一个四线步进电机

I2C 电机驱动器也可以用来驱动一个四线步进电机。将步进电机连接到 I2C 电机驱动器的输出引脚，然后通过 I2C 总线将电机驱动器连接到您的 Arduino/Seeeduino。按照以下程序编写您的 Arduino：

```
#include <Wire.h>
.......
.......
< 驱动函数 >
.......
.......
void setup()  {
    Wire.begin(); // 加入 I2C 总线（主设备地址可选）
    delayMicroseconds(10000); // 等待电机驱动器初始化
}

void loop()  {
    while(1)  {
        MotorSpeedSetAB(100,100); // 驱动步进电机时，速度应设置为 100
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

连接的四线步进电机会旋转，您可以在 Arduino 程序中调整旋转速度或步数。您还可以使用其他步进电机库来控制它，所有示例代码可以在 Resource 中下载。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/2.gif)

## 函数参考

---
**1. void MotorSpeedSetAB(unsigned char MotorSpeedA , unsigned char MotorSpeedB)**

_描述：定义电机1和电机2的速度_

_MotorSpeedA：直流电机A的速度，范围应为 0~100；_

_MotorSpeedB：直流电机B的速度，范围应为 0~100；_

使用示例：

```
Serial.println("发送直流电机速度 100");
MotorSpeedSetAB(100,100);//定义电机1和电机2的速度；
delay(10); //需要这个延迟
```

**2. void 电机PWM频率设置(无符号字符 频率)**

_描述：设置PWM的预分频频率，默认值为 0x03。_

_Frequence：PWM的预分频频率。_

**3. void MotorDirectionSet(unsigned char Direction)**

_描述：调整电机的旋转方向。_

_Direction：可以是正向/反向旋转。_

使用示例：

```
MotorDirectionSet(0b1010);  //"0b1010" 定义输出极性，“10”表示 M+ 为“正极”，而 M- 为“负极”
                            // 驱动直流电机时，请确保 M+ 和 M- 是不同的极性。
delay(1000);
MotorDirectionSet(0b0101);  //0b0101  反向旋转
delay(500);
```

**4. void MotorDriectionAndSpeedSet(unsigned char Direction,unsigned char MotorSpeedA,unsigned char MotorSpeedB)**

_描述：同时调整电机的方向和速度。_

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/Grove-I2C_Motor_Driver_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

- [Grove - I2C 电机驱动器 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/Grove-I2C_Motor_Driver_Source_File.zip)

- [I2C 电机驱动器 V1.2 示例代码](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/I2CMotorDriver12Demo.zip)

- [L298 数据手册](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/L298datasheet.pdf)

- [78M05 数据手册](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/ST_78M05DataSheet.pdf)

- [文件：使用 ISP 烧录 Atmega8 固件](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/Burn_firmware_for_Atmega8_using_ISP.zip)

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
