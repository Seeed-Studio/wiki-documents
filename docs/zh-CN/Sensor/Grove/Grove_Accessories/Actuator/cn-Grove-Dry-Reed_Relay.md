---
title: Grove - 干簧继电器
description: Grove - 干簧继电器
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Dry-Reed_Relay/
slug: /cn/Grove-Dry-Reed_Relay
last_update:
  date: 03/20/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/wiki/Grove-Dry-Reed_Relay/img/DryReed_Relay_01.jpg)

**Grove 干簧管继电器**是一款继电器模块，它通过线圈中的电流磁化振动簧片来工作。与电磁继电器相比，干簧管继电器的触点完全密封是其最大的特点。此外，它还具有结构简单、紧凑、速度快、寿命长等特点，因此被广泛应用于微电子检测、自动控制等多个领域。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Dry-Reed-Relay-p-1412.html)

## 特性

- Grove 接口
- 高速度
- 稳定性好
- 触点寿命长
- 触点完全密封

:::提示
    更多关于Grove模块的信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/Grove_System/)
:::

规格
-------------

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
<th scope="col">
单位
</th>
</tr>
<tr align="center">
<th scope="row">
电压
</th>
<td>
4.8
</td>
<td>
5.0
</td>
<td>
5.2
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
线圈电阻
</th>
<td>
225
</td>
<td>
250
</td>
<td>
275
</td>
<td>
Ω
</td>
</tr>
<tr align="center">
<th scope="row">
吸合电压
</th>
<td colspan="3">
3.75
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
切换电流（最大）
</th>
<td colspan="3">
0.5
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
切换电压（最大）
</th>
<td colspan="3">
120 VAC/60VDC
</td>
<td>
-
</td>
</tr>
<tr align="center">
<th scope="row">
负载电流（最大）
</th>
<td colspan="3">
1.0
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
操作时间（最大）
</th>
<td colspan="3">
1.0
</td>
<td>
mS
</td>
</tr>
<tr align="center">
<th scope="row">
释放时间（最大）
</th>
<td colspan="3">
0.5
</td>
<td>
mS
</td>
</tr>
<tr align="center">
<th scope="row">
机械寿命（无负载）
</th>
<td colspan="3">
1×108 operations
</td>
<td>
-
</td>
</tr>
<tr align="center">
<th scope="row">
环境温度
</th>
<td>
-30
</td>
<td>
/
</td>
<td>
70
</td>
<td>
˚C
</td>
</tr>
</table>


支持的平台
-------------------

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::警告
    上述提及的支持平台是模块软件或理论兼容性的一个指示。在大多数情况下，我们只提供适用于Arduino平台的软件库或代码示例。由于无法为所有可能的MCU平台提供软件库/演示代码，因此用户必须编写自己的软件库。
:::

## 使用说明

### 配合Arduino使用

干簧管继电器可以支持高达60VDC 1A的负载。你可以使用它来控制电阻负载<font color="red"> **但不适用于电感负载（如电机）**</font>.

干簧管继电器的使用方式与常规继电器非常相似。

- 将电灯连接到Grove - 干簧管继电器，并为电灯供电。
- 将Grove - 干簧管继电器连接到Grove - 基础屏蔽板的D2端口，并将其插入Arduino/Seeeduino。

- 上传以下代码。


```
    int Relay = 2;

    // the setup routine runs once when you press reset:
    void setup() {                
      // initialize the digital pin as an output.
      pinMode(Relay, OUTPUT);     
    }

    // the loop routine runs over and over again forever:
    void loop() {
      digitalWrite(Relay, HIGH);   //the Relay close(HIGH is the voltage level)
      delay(5000);               // wait for five seconds
      digitalWrite(Relay, LOW);    //the Relay normally open by making the voltage LOW
      delay(5000);               // wait for five seconds
    }
```

- 电灯会亮起几秒钟，然后熄灭几秒钟，如此反复。对于特殊应用，您可能需要自己编写代码。

### 配合Raspberry Pi使用

:::注意
     如果你正在使用**带有Raspberry Pi OS >= Bullseye的Raspberry Pi**，你必须**仅使用Python3**来执行此命令行。
:::
1.你应该已经拥有了一个树莓派（Raspberry Pi）以及一个GrovePi或GrovePi+。

2.你应该已经完成了开发环境的配置，否则请按照[这里](https://yiyan.baidu.com/GrovePi_Plus)的说明进行操作。

3.连接

- 使用Grove线缆将传感器连接到GrovePi的D4插槽。

4.导航到示例目录：

```
    cd yourpath/GrovePi/Software/Python/
```

- 要查看代码

```
    nano grove_relay.py   # "Ctrl+x" to exit #
```

```
    import time
    import grovepi

    # Connect the Grove Relay to digital port D4
    # SIG,NC,VCC,GND
    relay = 4

    grovepi.pinMode(relay,"OUTPUT")

    while True:
        try:
            # switch on for 5 seconds
            grovepi.digitalWrite(relay,1)
            print "on"
            time.sleep(5)

            # switch off for 5 seconds
            grovepi.digitalWrite(relay,0)
            print "off"
            time.sleep(5)

        except KeyboardInterrupt:
            grovepi.digitalWrite(relay,0)
            break
        except IOError:
            print "Error"
```

5.运行示例程序。

```
    sudo python3 grove_relay.py
```

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Dry-Reed_Relay/res/Grove-Dry-Reed_Relay_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
--------

- [Grove - 干簧管继电器 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Dry-Reed_Relay/res/Grove-Dry-Reed_Relay_Eagle_File.zip)
- [干簧管继电器数据手册](https://files.seeedstudio.com/wiki/Grove-Dry-Reed_Relay/res/Dry-Reed_Relay_Datasheet.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Dry-Reed_Relay -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供全方位的支持，以确保您在使用我们的产品时能够获得最顺畅的体验。我们提供多种沟通渠道，以满足您不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
