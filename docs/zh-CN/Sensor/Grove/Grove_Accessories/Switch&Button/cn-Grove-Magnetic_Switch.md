---
description: Grove - Magnetic Switch
title: Grove - Magnetic Switch
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Magnetic_Switch
last_update:
  date: 03/23/2024
  author: WuFeifei
---
<!-- ---
name: Grove - Magnetic Switch
category: Sensor
bzurl: https://seeedstudio.com/Grove-Magnetic-Switch-p-744.html
oldwikiname: Grove_-_Magnetic_Switch
prodimagename: Magnetic_Switch.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/101020038 1.jpg
surveyurl: https://www.research.net/r/Grove-Magnetic_Switch
sku: 101020038
tags: grove_digital, io_3v3, io_5v, plat_duino, plat_pi, plat_bbg, plat_wio
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/45d.jpg)

这是一个与Grove接口兼容的磁性开关模块。它基于封装的干簧管CT10制成。CT10是单刀单掷（SPST）类型，具有常开的钌触点。传感器为双端型，可以用电磁铁、永久磁铁或两者的组合来驱动。磁性开关对于想要根据接近度来开启和关闭电路的设计师来说，是一个极好的工具。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)

## 特点

- 兼容Grove接口
- 2.0cm x 2.0cm Grove模块尺寸
- 最小外部零件数
- 10W额定功率
- 坚固的封装

:::提示
关于Grove模块的更多详情，请参见[Grove系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 应用理念

- 接近传感器
- 安全报警传感器
- 水平传感器
- 流量传感器
- 脉冲计数器

## 规格

<table border="1">
<tr>
<th scope="col">
项目
</th>
<th scope="col">
最小值
</th>
<th scope="col">
标准值
</th>
<th scope="col">
最大值
</th>
<th scope="col">
单位
</th>
</tr>
<tr align="center">
<td>
工作电压
</td>
<td>
3.3
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<td>
切换功率
</td>
<td colspan="3">
10
</td>
<td>
W
</td>
</tr>
<tr align="center">
<td>
切换电压（交流，有效值最大值）
</td>
<td colspan="3">
&lt; 140
</td>
<td>
V
</td>
</tr>
<tr align="center">
<td>
直流切换电流
</td>
<td colspan="3">
&lt; 500
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td>
直流承载电流
</td>
<td colspan="3">
&lt; 0.5
</td>
<td>
A
</td>
</tr>
<tr align="center">
<td>
接触电阻
</td>
<td colspan="3">
&lt;200
</td>
<td>
mΩ
</td>
</tr>
<tr align="center">
<td>
绝缘电阻
</td>
<td colspan="3">
&gt;10<sup>6</sup>
</td>
<td>
MΩ
</td>
</tr>
<tr align="center">
<td>
操作温度
</td>
<td>
-40
</td>
<td>
-
</td>
<td>
125
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<td>
操作范围
</td>
<td>
10
</td>
<td>
-
</td>
<td>
40
</td>
<td>
AT
</td>
</tr>
</table>

:::提示
关于Grove模块的更多详情，请参见[Grove系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::警告
上述提到的支持平台是对模块软件或理论兼容性的一个指示。在大多数情况下，我们只提供针对Arduino平台的软件库或代码示例。我们无法为所有可能的MCU平台提供软件库/演示代码。因此，用户需要编写自己的软件库。
:::

## 入门指南

:::注意
如果您是第一次使用Arduino，我们强烈建议您在开始之前查看[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

### 与Arduino配合使用

#### 演示

该模块的SIG引脚通常输出低电平。当磁铁靠近开关时，磁性开关关闭，SIG引脚输出高电平。

#### 硬件

- #### 硬件

| Seeeduino V4.2 | Base Shield| Grove - 磁性开关 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/45d_small.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)|

- **步骤 2.** 将Grove - 磁性开关连接到Grove-Base Shield的**D2**端口。
- **步骤 3.** 将Grove - Base Shield插入Seeeduino。
- **步骤 4.** 通过USB线将Seeeduino连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/with_ardu.jpg)

:::注意
如果没有Grove Base Shield，我们也可以直接将Grove-Magnetic-Switch连接到Seeeduino，如下所示。
:::

| Seeeduino | Grove-Magnetic_Switch |
|------|----------------------------|
| 5V/3.3V   | 红色                  |
| GND       | 黑色                  |
| NC        | 白色                  |
| D2        | 黄色                  |

#### 软件

- **步骤 1.** 将代码复制到Arduino IDE并上传。如果您不知道如何上传代码，请查阅[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

```c
/*******************************************************************************/

/*macro definitions of magnetic pin and LED pin*/
#define MAGNECTIC_SWITCH 2
#define LED 13//the on board LED of the Arduino or Seeeduino

void setup()
{
    pinsInit();
}

void loop() 
{
    if(isNearMagnet())//if the magnetic switch is near the magnet?
    {
        turnOnLED();
    }
    else
    {
        turnOffLED();
    }
}
void pinsInit()
{
    pinMode(MAGNECTIC_SWITCH, INPUT);
    pinMode(LED,OUTPUT);
}

/*If the magnetic switch is near the magnet, it will return ture, */
/*otherwise it will return false                                */
boolean isNearMagnet()
{
    int sensorValue = digitalRead(MAGNECTIC_SWITCH);
    if(sensorValue == HIGH)//if the sensor value is HIGH?
    {
        return true;//yes,return ture
    }
    else
    {
        return false;//no,return false
    }
}
void turnOnLED()
{
    digitalWrite(LED,HIGH);
}
void turnOffLED()
{
    digitalWrite(LED,LOW);
}
```

- **步骤 2.** 当有磁铁靠近开关时，LED就会亮起。试试吧！

### 使用Codecraft编程

#### 硬件

**步骤 1.** 将一个Grove - 磁性开关连接到Base Shield的D2端口。

**步骤 2.** 将Base Shield插入到您的Seeeduino/Arduino上。

**步骤 3.** 通过USB电缆将Seeeduino/Arduino连接到您的电脑。

#### 软件

**步骤 1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并将一个主程序拖入工作区。

:::注意
如果您是第一次使用Codecraft，也请查阅[Codecraft使用Arduino指南](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/)。

:::

**步骤 2.** 按照下面的图片拖动代码块，或者打开可以在本页面底部下载的cdc文件。

![cc](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/cc_Magnetic_Switch.png)

将程序上传到您的Arduino/Seeeduino。

:::成功提示
当代码上传完成后，将磁铁靠近磁性开关，您会看到Arduino 13脚上的LED亮起。
:::

### 使用树莓派进行操作

#### 硬件

- **步骤 1.** 准备以下物品：

| 树莓派 | GrovePi_Plus | Grove -  磁性开关 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/45d_small.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)|

- **步骤 2.** 将GrovePi_Plus插入树莓派。
- **步骤 3.** 将Grove-Magnetic-Switch连接到GrovePi_Plus的**D2**端口。
- **步骤 4.** 通过USB电缆将树莓派连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/with_rpi.jpg)

#### 软件

:::警告
如果您使用的是**带有Raspberrypi OS >= Bullseye的树莓派**，则必须使用此命令行**仅与Python3配合使用**。
:::

- **步骤 1.** 按照[设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)来配置开发环境。

- **步骤 2.** 导航到演示目录:

```
cd yourpath/GrovePi/Software/Python/
```

- **步骤 3.** 查看代码（此演示与倾斜开关具有相同的使用方法）

```
nano grovepi_tilt_switch.py   # "Ctrl+x" to exit #
```

```py
import time
import grovepi

# Connect the Grove Tilt Switch to digital port D2
# SIG,NC,VCC,GND
tilt_switch = 2

grovepi.pinMode(tilt_switch,"INPUT")

while True:
    try:
        print grovepi.digitalRead(tilt_switch)
        time.sleep(.5)

    except IOError:
        print "Error"
```

- **步骤 4.** 运行演示。

```
sudo python grovepi_tilt_switch.py
```

- **步骤 5.** 结果

在传感器上放置一个磁铁，SIG引脚将输出HIGH。

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/Grovepi_tilt_Switch_00.png)

# Grove-磁性开关 v0.9

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Magnetic_Switch.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-磁性开关 v1.3

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove-Magnetic_Switch_v1.3_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>
## 资源

- **[Eagle文件]** [Grove-磁性开关 v0.9 原理图](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Magnetic_Switch.zip)

- **[Eagle文件]** [Grove-磁性开关 v1.3 原理图](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove-Magnetic_Switch_v1.3_Eagle_File.zip)
- **[PDF文件]** [Grove-磁性开关 v1.3 PDF文件](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove-Magnetic_Switch_v1.3_PDF_File.pdf)
- **[数据手册]** [CT10数据手册](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/CT10.pdf)
- **[Codecraft]** [CDC文件](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove_Magnetic_Switch_CDC_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Magnetic_Switch -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供不同形式的支持，以确保您在使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
