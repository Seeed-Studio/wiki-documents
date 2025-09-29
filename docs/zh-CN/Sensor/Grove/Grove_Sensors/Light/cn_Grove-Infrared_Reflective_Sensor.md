---
description: Grove - 红外反射传感器
title: Grove - 红外反射传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Infrared_Reflective_Sensor
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/main.jpg" /></div>

Grove - 红外反射传感器用于检测特定范围内物体的存在。该传感器由一个红外LED和一个光传感器（光电晶体管）对组成。红外LED发出的光被放置在传感器前方的任何物体反射，这种反射被光传感器（光电晶体管）检测到。任何白色（或较浅）颜色的表面比黑色（或较深）颜色的表面反射更多光线。

当检测到反射光时，**SIG**引脚产生**数字低电平**（或二进制**0**）输出。板载LED指示灯也会发光。如果没有检测到反射或物体距离传感器太远，**SIG**引脚的输出保持在**数字高电平**（二进制**1**）。板载LED指示灯也会熄灭。该传感器的可检测范围为4-16毫米。该模块集成了一个轨到轨运算放大器来放大光电晶体管的输出。有一个电位器可用于调节放大器的增益，即检测灵敏度。

使用这个传感器，您可以构建以下（但不限于）应用：**循线机器人**、**光学编码器**和**物体计数应用**。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

:::caution
该产品对非红外辐射也有轻微敏感性，因此光传感器上的任何强光都会损害或干扰红外光检测。
:::

## 版本跟踪

| 产品版本              | 变更        |发布日期 |
|------------------------------|--------------|----------------|
| v1.2之前的版本     | 初始版本  |2012年6月‎    |
| 版本1.2（当前版本） | 优化布局  | 2016年4月   |

## 特性

- Grove兼容且易于使用
- 高灵敏度和可靠性
- 小尺寸封装
- 可调节灵敏度适应不同场合

:::tip
有关Grove模块的更多详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 规格参数

| 参数                                    | 值                                                                          |
|----------------------------------------------|--------------------------------------------------------------------------------|
| 工作电压(V)                         | 3.3–5V                                                                       |
| 工作电流(mA)                        | 14.69–15.35 mA                                                                 |
| 有效检测距离                | 4–15 mm                                                                     |
| 响应时间                                | 10 μs                                                                          |
| 光电晶体管：峰值灵敏度波长 | 800 nm                                                                         |
| 红外LED：峰值发光波长       | 940 nm                                                                         |
| 反射式光传感器                       | [数据手册](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/RPR-220.pdf)          |
| 输出运算放大器                | [数据手册](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/LMV358_datasheet.pdf) |
| 重量                                       | 4 g                                                                            |

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 硬件概述

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Grove-Infrared_Reflective_Sensor_v1.2_hardware_overview_1200_z.jpg" /></div>

- **RPR220 反射式光电传感器** - 高灵敏度反射式光电传感器。
- **LMV358** - 轨到轨运算放大器。
- **LED指示灯** - 当接收到的红外光强度超过预设水平时，LED将点亮。
- **光敏度调节电位器** - 调节光电传感器对光的敏感度。

## 入门指南

让我们看看如何使用这个模块实现几个基本应用：

### 与Arduino配合使用

#### 循线功能

这个传感器可以用来帮助机器人小车跟随黑线。

##### 硬件

- **步骤1.** 准备以下材料：

| Seeeduino V4.2 | Base Shield| Grove - 红外反射传感器 | 白纸和黑笔|
|--------------|-------------|-----------------|-------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/thumbnail.jpg" /></div>||
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html)|   🙂   |

- **步骤2.** 通过Grove线缆将Grove - 红外反射传感器连接到Grove-Base Shield的任意端口，在本演示中我们使用**D2**。

- **步骤3.** 将此传感器放置在白色（或其他亮色）纸张上方12mm处。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-4.JPG" /></div>

- **步骤4.** 用螺丝刀调节电位器来改变反射式光电传感器的敏感度，直到LED指示灯亮起。顺时针旋转时，反射式光电传感器对光线会更加敏感。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-5.JPG" /></div>

:::note
使用合适的螺丝刀来调节小电位器。施加过大压力或频繁调节可能会损坏电位器的滑动触点。
:::

- **步骤5.** 保持垂直距离，将传感器水平移动到黑线上方。指示LED应该在黑线上方熄灭。如果仍然亮着，请调节电位器直到熄灭。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-6.JPG" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-7.JPG" /></div>

#### 转速检测

让我们实现简单的光学编码器来检测电机的转速

##### 硬件

- **步骤1.** 准备以下材料：

| Seeeduino V4.2 | Base Shield| Grove - 红外反射传感器 | 3V/5V直流电机|
|--------------|-------------|-----------------|-------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/N30%203V%20DC%2012000RPM%20DC%20Motor.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html)|  [立即获取](https://www.seeedstudio.com/N30-3V-DC-12000RPM-DC-Motor-p-1886.html)   |

- **步骤 2.** 将红外反射传感器连接到 Grove - Base Shield 的 **D2** 端口，并将电机连接到 **D6**（实际上，您只需连接 VCC 和 GND 为电机供电即可）。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/connect_arduino.jpg" /></div>

- **步骤 3.** 将一个圆形白纸盘（上面标有黑线）固定到电机上。将传感器放置在这个旋转编码器附近。运行电机。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-9.JPG" /></div>

##### 软件

- **步骤 1.** 下载库文件 [Arduino timer1 *库*](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/TimerOne-ArduinoLib.zip) 并将其添加到 Arduino IDE 的库文件中。关于如何运行我们的演示代码的[指南](/cn/Guide_to_use_demos_downloaded_from_Seeed-s_Github/)。

- **步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)为 Arduino 安装库。

- **步骤 3.** 打开一个新的草图，并将以下代码复制到草图中。

```cpp
unsigned int counter=0;
void blink()
{
    counter++;
}
void timerIsr()
{
    Timer1.detachInterrupt();  //disable the timer1
    Serial.print("The speed of the motor: ");
    Serial.print(counter,DEC);
    Serial.println("round/s");
    counter=0;
    Timer1.attachInterrupt( timerIsr );  //enable the timer1
}
void setup()
{
    Serial.begin(9600);
    Timer1.initialize(1000000); // set a timer of length 1sec
    attachInterrupt(0, blink, RISING);  //INT0
    Timer1.attachInterrupt( timerIsr ); // attach the service routine here
}
void loop()
{

}
```

- **步骤 4.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 通过点击 **工具-> 串口监视器** 打开 Arduino IDE 的**串口监视器**。或者同时按下 ++ctrl+shift+m++ 键。如果一切正常，您将获得速度读数。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-10.JPG" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-12.JPG" /></div>

### 与 Raspberry Pi 一起使用

#### 硬件

- **步骤 1.** 准备以下材料：

| Raspberry pi | GrovePi_Plus | Grove - Infrared Reflective Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/thumbnail.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即获取](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html)|

- **步骤 2.** 将 GrovePi_Plus 插入 Raspberry。

- **步骤 3.** 将 Grove - Infrared Reflective Sensor 连接到 GrovePi_Plus 的 **D4** 端口。

- **步骤 4.** 通过 USB 线缆将 Raspberry 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/connect_pi.jpg" /></div>

#### 软件

- **步骤 1.** 按照[设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)配置开发环境。

- **步骤 2.** 按照[更新固件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/)更新 GrovePi 的最新固件。

:::tip
在本教程中，我们使用路径 **~/GrovePi/** 而不是 **/home/pi/Desktop/GrovePi**，您需要确保步骤 2 和步骤 3 使用相同的路径。
:::

:::note
我们强烈建议您更新固件，否则某些传感器可能会出现错误。
:::

- **步骤 3.** Git 克隆 Github 仓库。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **步骤 4.** 查看代码。

```python

cd ~/GrovePi/Software/Python
sudo nano grove_infrared_reflective_sensor.py

```

然后代码应该如下所示：

```
import time
import grovepi
 
# Connect the Grove Infrared Reflective Sensor to digital port D4
# SIG,NC,VCC,GND
sensor = 4
 
grovepi.pinMode(sensor,"INPUT")
 
while True:
    try:
        # Sensor returns HIGH on a black surface and LOW on a white surface
        if grovepi.digitalRead(sensor) == 1:
            print "black surface detected"
        else:
            print "white surface detected"
 
        time.sleep(.5)
 
    except IOError:
        print "Error"
```

然后按 ++ctrl+x++ 退出 nano。

- **步骤 5.** 要运行演示，请在终端中执行以下命令：

```
sudo python grove_infrared_reflective_sensor.py

```

结果应该如下所示：

```python

pi@raspberrypi:~/GrovePi/Software/Python $ sudo python grove_infrared_reflective_sensor.py
black surface detected
black surface detected
black surface detected
black surface detected
black surface detected
white surface detected
white surface detected
white surface detected
black surface detected
black surface detected
black surface detected
black surface detected
black surface detected
black surface detected

```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/Grove%20-%20Infrared%20Reflective%20Sensor%20v1.2_eaglefile.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]**  [Grove-红外反射传感器 v1.2 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/Grove%20-%20Infrared%20Reflective%20Sensor%20v1.2_eaglefile.zip)
- **[Zip]**  [Arduino Timer1 库](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/TimerOne-ArduinoLib.zip)
- **[Pdf]**  [RPR220 数据手册](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/RPR220_datasheet.pdf)
- **[Pdf]** [数据手册](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/LMV358_datasheet.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Infrared_Reflective_Sensor -->

## 技术支持与产品讨论

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 传感器以及 8 合 1 气象站。为您下一个成功的工业项目尝试最新的 SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>