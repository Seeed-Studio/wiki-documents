---
title: Grove - I2C Motor Driver V1.3
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/
slug: /cn/Grove-I2C_Motor_Driver_V1.3
last_update:
  date: 03/20/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver_New.jpg)

Grove - I2C电机驱动器V1.3（最新版本）可以直接控制步进电机或直流电机。其核心是一个双通道H桥驱动芯片（L298N），每个通道可处理高达2A的电流，由Atmel ATmega8L控制，该芯片负责与Arduino等平台进行I2C通信。两台电机可以同时驱动，且可以设置为不同的速度和方向。它可以为两台有刷直流电机或一台四线两相步进电机供电。它需要6V至15V的电源来为电机供电，并内置一个5V电压调节器，可为I2C总线和Arduino供电（可通过跳线选择）。所有驱动线路均受二极管保护，可防止反向电动势。

与[Grove - I2C电机驱动器V1.2](https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.2/)相比，V1.3版本使用户能够更轻松地控制步进电机。您不再需要一直控制步进电机，只需向I2C电机驱动器V1.3发送一个命令来驱动步进电机，它就会按照您的命令执行，从而节省了Arduino的资源并简化了您的代码。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html)

## 版本

| 版本号 | 描述                           | 发布日期      |
| ------ | ------------------------------ | ------------- |
| v1.0   | 初始公开发行                   | 2012年5月17日 |
| v1.2   | 修改由硬件设置的I2C地址        | 2012年7月2日  |
| v1.3   | 修改固件以支持离线步进电机控制 | 2013年2月18日 |

## 功能

- Grove兼容
- I2C接口
- 可调节电机速度和旋转方向
- 可通过硬件更改从机地址

:::提示
    更多关于Grove模块的信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 规格

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
项目
</th>
<th scope="col">
最小值
</th>
<th scope="col">
典型值
</th>
最大值
</th>
<th scope="col">
单位
</th>
</tr>
<tr>
<th scope="row">
工作电压
</th>
<td>
6
</td>
<td align="center" >
-
</td>
<td>
15
</td>
<td>
VDC
</td>
</tr>
<tr>
<th scope="row">
每通道最大输出电流
</th>
<td colspan="3" align="center">
0.5
</td>
<td>
A
</td>
</tr>
<tr>
<th scope="row">
最大总电流
</th>
<td colspan="3" align="center" >
1.0
</td>
<td>
A
</td>
</tr>
<tr>
<th scope="row">
I2C总线输入输出电压
</th>
<td colspan="3" align="center" >
5
</td>
<td>
V
</td>
</tr>
<tr>
<th scope="row">
通信协议
</th>
<td colspan="3" align="center" >
I2C
</td>
<td>
/
</td>
</tr>
</table>

:::注意
    如果您想使用多个I2C设备，请参考[软件I2C](https://wiki.seeedstudio.com/Arduino_Software_I2C_user_guide/)。
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::警告
    上述提到的支持平台仅表明模块的软件或理论兼容性。在大多数情况下，我们只针对Arduino平台提供软件库或代码示例。由于无法为所有可能的MCU平台提供软件库/示例代码，因此用户需要自行编写软件库。
:::

## 硬件概述

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-1.jpg)

**78M05 IC:** 5V电压调节器

**L298 IC:** 双通道全桥驱动器

**ATmega8 IC:** 控制电机旋转

<div class="admonition note">
<p class="admonition-title">注意</p>
螺丝接线端子上的输入电压被调节到5V，并通过跳线（J4）连接到I2C的+5V。如果同时使用螺丝接线端子提供的外部电源和I2C引脚提供的电源，请移除跳线。如果需要为I2C总线提供5V电源，请使用跳线。
</div>

## 应用思路

- 机器人
- 自制遥控车
- 机箱风扇
- 高功率LED照明

<div class="admonition danger">
<p class="admonition-title">警告</p>
当工作电流超过1安培时，电路板会非常热。请勿触摸！
</div>


## 入门指南

:::注意
    如果您是第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

### 玩转 Arduino

#### 演示

I2C电机驱动器可以基于L298芯片控制电机。L298不仅仅是一个双电机驱动器，它还是一个双H桥。H桥基本上是一种特定的晶体管设置，允许你切换电流的方向。连接到电机意味着你可以让它向两个方向旋转；而且，通过PWM输入，你可以使用Arduino让它以任何速度旋转。由于L298有两个H桥，你可以通过让每个轮子以不同的方向旋转来让机器人转弯，当然也可以让它前进和后退。

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | 基础底板 | Grove - I2C 电机驱动器 V1.3 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver_New_small.jpg)|
|[立即获得](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获得](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获得](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html)|

- **步骤 2.** 设置I2C电机驱动器的地址

- 通过拨码开关设置地址是新版I2C电机驱动器新增的功能。


![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-9.jpg)

- 然后在程序中保持与I2C电机驱动器上设置的地址相同。程序中的默认地址设置为0x0f。
- **步骤3.** 将Grove - I2C电机驱动器V1.3连接到Grove-Base Shield的I2C端口。
- **步骤 4.** 将Grove - Base Shield插入Seeeduino。
- **步骤 5.** 通过USB电缆将Seeeduino连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-4.jpg)

:::注意
 如果我们没有Grove Base Shield，我们也可以直接将Grove - I2C电机驱动器V1.3连接到Seeeduino，如下所示。
:::

| Seeeduino       | Grove - I2C 电机驱动器 V1.3 |
|-----------------|-------------------------|
| 5V              | 红色                   |
| GND             | 黑色                 |
| SDA             | 白色                 |
| SCL             | 黄色                |

#### 软件

- **步骤 1.** 从Github下载[Grove_I2C_Motor_Driver_v1_3库](https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3/archive/master.zip)。
- **步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library)为Arduino安装库。
- **步骤 3.** 将代码复制到Arduino IDE并上传。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

```c
// default I2C address is 0x0f
#define I2C_ADDRESS 0x0f

void setup()
{
    Motor.begin(I2C_ADDRESS);
}
```

<div class="admonition note">
<p class="admonition-title">注意</p>
首先要注意的是，您需要为直流电机提供外部电源。Arduino上的5V引脚无法为两个电机提供足够的电力，如果您这样做，可能会损坏您的Arduino。
</div>


- 控制直流电机有两个函数：

```c
// Set the speed of a motor, speed is equal to duty cycle here
void speed(unsigned char motor_id, int _speed);

// Stop one motor
void stop(unsigned char motor_id);

```

使用`speed()`函数，您可以以您想要的速度驱动一个电机。

- **motor_id** 表示使用哪个电机。您可以填写MOTOR1或MOTOR2。

- **_speed** 表示您为电机设置的速度。您可以在这里填写-100~100之间的值。当_speed>0时，直流电机顺时针旋转，而当_speed<0时，直流电机逆时针旋转。_speed的绝对值越大，直流电机的速度就越快。


使用`stop()`函数，您可以停止正在运行的直流电机。

- **motor_id** 表示使用哪个电机。您可以填写MOTOR1或MOTOR2。

**驱动步进电机**

以[24BYJ48步进电机](https://www.seeedstudio.com/depot/high-quality-stepper-motor-12v-p-335.html?cPath=170_171)为例，硬件安装如下所示：

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_control_a_Stepper_Motor.jpg)

[24BYJ48](https://www.seeedstudio.com/depot/high-quality-stepper-motor-12v-p-335.html?cPath=170_171)步进电机与I2C电机驱动器的连接如下所示：

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_Connector.jpg)

- 我们提供了一个函数来驱动步进电机。

```c
// Drive a stepper motor
void StepperRun(int _step);
```

- **_step** 表示您为步进电机设置要运行的步数。您可以填写-1024~1024之间的值。当_step>0时，步进电机顺时针旋转，而当_step<0时，步进电机逆时针旋转。当_step为512/-512时，步进电机将运行一整圈；如果_step为1024/-1024，步进电机将运行两圈。步进电机在完成其步数后会自动停止。

### 玩转 Codecraft

#### 硬件

**步骤 1.** 使用Grove线将Grove - I2C电机驱动器连接到Seeeduino的I2C端口。如果您使用的是Arduino，请利用Base Shield。

**步骤 2.** 通过USB线将Seeeduino/Arduino连接到您的电脑。

#### 软件

**步骤 1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并将一个主程序拖入工作区。

:::注意
    如果您是第一次使用Codecraft，请同时参考[使用Arduino的Codecraft指南](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/)。
:::
**步骤 2.** 按照下面的图片拖动代码块，或者打开可以在本页面底部下载的cdc文件。

![cc](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/cc_I2C_Motor_Driver.png)

将程序上传到您的Arduino/Seeeduino。

:::提示
    当代码上传完成后，您会看到连接到电机驱动器的直流电机开始工作。
:::

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove-I2C_Motor_Driver_v1.3_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle]** [Grove - I2C 电机驱动器 V1.3 原理图](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove-I2C_Motor_Driver_v1.3_Eagle_File.zip)

- **[PDF]** [Grove - I2C 电机驱动器 V1.3 PCB 的 PDF 格式](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove%20-%20I2C%20Motor%20Driver%20%20v1.3b%20PCB.pdf)

- **[PDF]** [Grove - I2C 电机驱动器 V1.3原理图的 PDF 格式](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove%20-%20I2C%20Motor%20Driver%20%20v1.3b.pdf)

- **[库文件]** [Grove - I2C 电机驱动器 V1.3 库](https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3)

- **[固件]** [I2C 电机驱动器的内置固件](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/On-Chipfirmware_for_Motor_driver.zip)

- **[数据手册]** [L298 数据手册](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/L298datasheet.pdf)

- **[数据手册]** [78M05 数据手册](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/ST_78M05DataSheet.pdf)

- **[Codecraft]** [CDC 文件](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove_I2C_Motor_Driver_CDC_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_I2C_Motor_Driver_V1.3 -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供各种支持，以确保您在使用我们的产品时能够拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的需求和偏好。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
