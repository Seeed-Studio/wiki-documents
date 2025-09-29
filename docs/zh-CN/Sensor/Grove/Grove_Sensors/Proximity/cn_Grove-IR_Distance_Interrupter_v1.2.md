---
title: Grove - 红外距离中断器 v1.2
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-IR_Distance_Interrupter_v1.2/
slug: /cn/Grove-IR_Distance_Interrupter_v1.2
last_update:
  date: 01/03/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Grove_-_IR_Distance_Interrupter_v1.2.jpg)

**Grove - 红外距离中断器** 用于检测任何阻挡光路的物体。该模块由一个红外LED和一个光传感器（光电晶体管）对组成。红外LED发出的光被放置在传感器前方的任何物体反射，这种反射被光传感器（光电晶体管）检测到。任何白色（或较浅）颜色的表面比黑色（或较深）颜色的表面反射更多的光。

当检测到反射光时，它在**SIG**引脚上产生**数字高电平**（或二进制**1**）输出。板载LED指示灯也会亮起。如果没有检测到反射或物体距离传感器太远，**SIG**引脚上的输出保持在**数字低电平**（二进制**0**）。板载LED指示灯也会熄灭。该传感器的可检测范围为7.5–40厘米。该模块集成了一个轨到轨运算放大器来放大光电晶体管的输出。有一个电位器可用于调节放大器的增益，即检测灵敏度。

使用这个传感器，您可以构建以下（但不限于）应用：**循线机器人、光学编码器**和**物体计数应用**。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html)

<div class="admonition note">
<p class="admonition-title">注意</p>
该产品对非红外辐射也有轻微敏感性，因此光传感器上的任何强光都会损害或干扰红外光检测。
</div>

<div className="admonition tip">
  <p className="admonition-title">提示</p>
  使用该产品的说明与<span style={{fontWeight: 'bold'}}>Grove - 红外反射传感器</span>相同。如果您已经使用过Grove - 红外反射传感器，可以直接使用该产品。
</div>

版本跟踪
---------------

| 产品版本                                       | 发布日期 | 支持状态 |
|-------------------------------------------------------|--------------|----------------|
| v1.2之前的版本                              | 2012年6月‎    | 不支持  |
| Grove - 红外距离中断器 v1.2（当前版本） | 2016年4月   | 支持      |

特性
--------

- Grove兼容且易于使用
- 高灵敏度和可靠性
- 更长的可检测距离
- 可调节灵敏度适用于各种场合
- 更耐用

:::tip
    有关Grove模块的更多详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

规格参数
--------------

| 参数                     | 值                                                                                  |
|-------------------------------|----------------------------------------------------------------------------------------|
| 工作电压(V)          | 3.3或5伏                                                                         |
| 工作电流(mA)         | 最大：20 mA                                                                         |
| 有效可检测距离 | 7.5–40厘米                                                                              |
| 反射式光传感器        | [数据手册](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/ITR9909_datasheet.pdf) |
| 输出运算放大器 | [数据手册](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/LM393.pdf)                  |
| 重量                        | 2.5克（模块），8.5克（整个单包装）                                   |

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

硬件概述
-----------------

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/hardware_overview.png)

- **ITR9909 反射式光电传感器**，高灵敏度反射式光电传感器。
- **LM393 运算放大器**，轨到轨运算放大器。
- **LED 指示灯**，当接收到的红外光强度超过预设水平时，LED 将点亮。
- **光敏度调节电位器**，调节反射式光电传感器对光的敏感度。

### **包装清单**

| 零件名称                                                                                                                    | 数量 |
|-------------------------------------------------------------------------------------------------------------------------------|----------|
| Grove - 红外反射传感器                                                                                            | 1 个  |
| [Grove 连接线](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) | 1 根  |

入门指南
---------------

让我们看看如何使用这个模块实现几个基本应用：

### 与 Arduino 配合使用

#### 所需材料

- Grove - IR Distance Interrupter v1.2 × 1
- Arduino UNO（其他型号也可以）× 1
- Grove 连接线 × 1
- Grove - Base Shield × 1

#### 连接

1.使用 Grove 连接线将 Grove - IR Distance Interrupter v1.2 连接到 Arduino UNO。

2.将反射式光电传感器放置并对准白色（或浅色）表面。

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Reflective_photosensor3.jpg)

3.用螺丝刀调节电位器来改变反射式光电传感器的敏感度，直到 LED 指示灯发光。顺时针旋转时，反射式光电传感器对光的敏感度会更高。

<div class="admonition note">
<p class="admonition-title">注意</p>
使用合适的螺丝刀来调节小电位器。施加过大压力或频繁调节可能会损坏电位器的滑动触点。
</div>

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Reflective_photosensor2.jpg)

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Reflective_photosensor1.jpg)

4.创建一个 Arduino 程序并将以下代码复制到其中。

```
void setup()  {
    Serial.begin(9600);
    pinMode(6,INPUT);
}
void loop()  {
    while(1)  {
        delay(500);
        if(digitalRead(6)==LOW)  {
            Serial.println("Somebody is here.");
        }
        else  {
            Serial.println("Nobody.");
        }
    }
}
```

5.上传代码。如果您不知道如何上传 Arduino 程序，Windows 用户请访问 [https://www.arduino.cc/en/Guide/Windows](https://www.arduino.cc/en/Guide/Windows)，Mac 用户请访问 [https://www.arduino.cc/en/Guide/MacOSX](https://www.arduino.cc/en/Guide/MacOSX)。您可以看到如下结果。

6.当光路被某个物体阻挡时，您会在串口终端看到"Somebody is here."，否则您会看到"Nobody."。

### 与 Raspberry Pi 配合使用

#### 所需材料

- Raspberry Pi（其他型号也可以）× 1
- [GrovePi](https://www.seeedstudio.com/depot/GrovePi-p-1672.html?cPath=73) 或 [Grovepi+](https://www.seeedstudio.com/depot/GrovePi-p-2241.html?cPath=122_154_158) × 1
- [Grove 连接线](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) × 1

#### 硬件连接和软件工作

1.您应该有一个 Raspberry Pi 和一个 GrovePi 或 GrovePi+。在这个演示中，我们使用 GrovePi。

2.我们假设您已经成功构建了开发环境。如果没有，请按照此教程进行。

3.连接：

使用 [Grove 连接线](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57)将 Grove - IR Distance Interrupter 插入 GrovePi 的 D4 端口。

4.导航到演示目录，在终端中运行以下命令。

```
    cd yourpath/GrovePi/Software/Python/
```

在终端中运行命令：

```
    nano grove_infrared_distance_interrupt.py
```

复制并保存以下代码到其中。

```
import time
import grovepi
 
# Connect the Grove Infrared Distance Interrupt Sensor to digital port D4
# SIG,NC,VCC,GND
sensor = 4
 
grovepi.pinMode(sensor,"INPUT")
 
while True:
    try:
        # Sensor returns LOW and onboard LED lights up when the
        # received infrared light intensity exceeds the calibrated level
        if grovepi.digitalRead(sensor) == 0:
            print "found something"
        else:
            print "nothing"
 
        time.sleep(.5)
 
    except IOError:
        print "Error"
```

5.运行演示，在终端中运行以下命令。

```
    sudo python grove_infrared_distance_interrupt.py
```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [Grove - IR Distance Interrupter v1.2 Eagle文件](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/Eagle_files.zip)
- [反射式光电传感器数据手册(ITR9909)](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/ITR9909_datasheet.pdf)
- [LM393数据手册](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/LM393.pdf)
- [LMV358数据手册](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/LMV358_datasheet.pdf)
- [红外反射传感器源文件](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/Grove-Infrared_Reflective_Sensor_v1.0_SourceFile.zip)

此Markdown文件创建自 [https://www.seeedstudio.com/wiki/Grove_-_IR_Distance_Interrupter_v1.2](https://www.seeedstudio.com/wiki/Grove_-_IR_Distance_Interrupter_v1.2)

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