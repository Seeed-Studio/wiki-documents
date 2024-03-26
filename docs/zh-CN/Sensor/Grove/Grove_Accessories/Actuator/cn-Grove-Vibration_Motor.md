---
title: Grove - Vibration Motor
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Vibration_Motor/
slug: /cn/Grove-Vibration_Motor
last_update:
  date: 03/21/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/Gvib.jpg)

这是一个小型振动马达，适合作为非声音提示器。当输入为高电平时，马达会像您的手机处于静音模式时一样振动。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)

## 版本追踪

| 版本  | 描述                                   | 发布时间      |
| ----- | -------------------------------------- | ------------- |
| v0.9b | 初始公开发行版本                       | 2011年5月10日 |
| v1.0  | 直接使用I/O端口驱动振动马达            | 2011年11月5日 |
| v1.2  | 增加晶体管，使用更大的电流驱动振动马达 | 2013年7月11日 |

## 特点

- 兼容Grove接口
- 无声
- 低功耗
- 高可靠性

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
<th scope="col">
最大值
</th>
</tr>
<tr align="center">
<th scope="row">
工作电压
</th>
<td>
3.0V
</td>
<td>
5.0V
</td>
<td>
5.5V
</td>
</tr>
<tr align="center">
<th scope="row">
控制模式
</th>
<td colspan="3" rowspan="1">
逻辑电平（当逻辑为高电平时，马达开启；当逻辑为低电平时，马达关闭。）
</td>
</tr>
<tr align="center">
<th scope="row">
额定转速
</th>
<td colspan="3" rowspan="1">
9000 rpm
</td>
</tr>
</table>


## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::警告
    上述提到的支持平台是模块软件或理论兼容性的一个指示。在大多数情况下，我们仅提供针对Arduino平台的软件库或代码示例。由于不可能为所有可能的MCU平台提供软件库/演示代码，因此用户需要编写自己的软件库。
:::

## 入门指南

:::注意
    如果你是第一次使用Arduino，我们强烈建议你在开始前先阅读[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

### 玩转 Arduino

让振动马达振动就像点亮一个LED一样简单。下面是一个示例，展示了如何打开振动马达。

#### 硬件

- **步骤 1.** 准备以下材料：

| Seeeduino V4.2 | Base Shield| Grove - 振动马达 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/Gvib_small.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)|

- **步骤2.** 将Grove - 振动马达连接到Grove-Base Shield的D2接口。
- **步骤3.** 将Grove - Base Shield插入Seeeduino中。
- **步骤4.** 通过USB线将Seeeduino连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/vibration_motor.png)

:::注意
如果没有Grove Base Shield，我们也可以直接将Grove - 振动马达连接到Seeeduino，如下所示。.
:::

| Seeeduino       | Grove - 振动马达 |
|---------------|-------------------------|
| 5V            | 红色                   |
| GND           | 黑色                 |
| 未连接 | 白色                 |
| D2            | 黄色                |

#### 软件

- **步骤1.** 将代码复制到Arduino IDE并上传。如果你不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

```c
int MoPin = 2;    // vibrator Grove connected to digital pin 9

void setup()  {
    pinMode( MoPin, OUTPUT );
}

void loop()  {

    digitalWrite(MoPin, HIGH);
    delay(1000);

    digitalWrite(MoPin, LOW);
    delay(1000);
}

```

- **步骤2.** 现在，感受你的马达的振动吧！

### 使用Codecraft编程

#### 硬件

**步骤1.** 将Grove - 振动马达连接到Base Shield的D2端口。

**步骤2.** 将Base Shield插入你的Seeeduino/Arduino。

**步骤3.** 通过USB线将Seeeduino/Arduino连接到你的电脑。

#### 软件

**步骤1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并将一个主程序拖到工作区。

:::注意
    如果你是第一次使用Codecraft，也请查阅[使用Arduino的Codecraft指南](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/)。
:::
**步骤2.** 按照下面的图片拖拽代码块，或者打开本页面末尾可下载的cdc文件。

![cc](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/cc_Vibration_Motor.png)

将程序上传到你的Arduino/Seeeduino。

:::提示
    当代码上传完成后，你会感受到振动马达的振动。
:::

### 使用树莓派（Raspberry Pi）编程

#### 硬件

- **步骤1.** 准备以下材料：

| Raspberry pi | GrovePi_Plus | Grove - 振动马达 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/Gvib_small.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)|

- **步骤2.** 将GrovePi_Plus插入树莓派（Raspberry Pi）。
- **步骤3.** 将Grove - 振动马达连接到GrovePi_Plus的**D8**端口。
- **步骤4.** 通过USB线将树莓派连接到电脑。

#### 软件

- **步骤1.** 导航到演示程序目录：

```
cd yourpath/GrovePi/Software/Python/
```

- **步骤2.** 查看代码

```
nano grove_vibration_motor.py   # "Ctrl+x" to exit #
```

```python
import time
import grovepi

# Connect the Grove Vibration Motor to digital port D8
# SIG,NC,VCC,GND
vibration_motor = 8

grovepi.pinMode(vibration_motor,"OUTPUT")

while True:
    try:
        # Start vibrating for 1 second
        grovepi.digitalWrite(vibration_motor,1)
        print 'start'
        time.sleep(1)

        # Stop vibrating for 1 second, then repeat
        grovepi.digitalWrite(vibration_motor,0)
        print 'stop'
        time.sleep(1)

    except KeyboardInterrupt:
        grovepi.digitalWrite(vibration_motor,0)
        break
    except IOError:
        print "Error"
```

- **步骤3.** 运行演示程序。

```
sudo python grove_vibration_motor.py
```

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/res/Grove-Vibration_Motor_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle]** [Grove - 振动马达原理图](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/res/Grove-Vibration_Motor_Eagle_Files.zip)

- **[数据手册]** [S9013 数据手册](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/res/S9013.pdf)

- **[数据手册]** [ANDA-B1020 数据手册](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/res/ANDA-B1020_datasheet.pdf)

- **[Codecraft]** [CDC 文件](https://files.seeedstudio.com/wiki/Grove_Vibration_Motor/resource/Grove_Vibration_Motor_CDC_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Vibration_Motor -->

## 项目

**Grove - 振动马达入门 - 仅供成人使用**：初学者示例

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-a-vibration-motor-only-for-adults-2acfc2/embed' width='350'></iframe>

**受《守望先锋》启发，我们制作了一款非常酷炫的木质激光枪玩具，为这些日子增添乐趣！**

这款木质激光枪和枪靶都是基于一款名为 Seeeduino Lotus 的 Arduino 主板制作的。激光枪上的激光发射器被控制发射激光脉冲以“激活”枪靶。枪靶上有三个光传感器来检测激光脉冲。看起来很简单对吧？如果你对我们的项目感兴趣，请为自己或你的孩子制作一个吧！花一天时间 DIY 它作为圣诞礼物，绝对值得！

[![](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/gun.jpg)](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供各种支持，以确保您在使用我们的产品时能够拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
