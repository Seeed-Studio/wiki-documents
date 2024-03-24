---
description: Grove - Electromagnet
title: Grove - Electromagnet
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Electromagnet
last_update:
  date: 03/21/2024
  author: WuFeifei
---
<!-- ---
name: Grove - Electromagnet
category: Sensor
bzurl: https://seeedstudio.com/Grove-Electromagnet-p-1820.html
oldwikiname: Grove_-_Electromagnet
prodimagename: Grove_Electromagnet_02.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/Grove Electromagnet.jpg
surveyurl: https://www.research.net/r/Grove-Electromagnet
sku: 101020073
tags: grove_digital, io_5v, plat_duino, plat_wio
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet_02.jpg)

电磁铁是一种磁铁，其磁场是由电流产生的。根据安培定律（参见下方插图），导线中流动的电流会在导线周围产生磁场。为了集中磁场，在电磁铁中，导线被绕成多匝并排的线圈。所有匝的导线产生的磁场都会通过线圈的中心，从而在那里形成一个强大的磁场。Grove - 电磁铁可以吸住并固定1公斤的重量。它易于使用，有助于学习电磁铁的原理。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border={0} /></a></p>

## 特点

- Grove 接口形状
- 最大吸力1公斤
- 低待机电流

## 规格

| 项目     | 值    |
| -------- | ----- |
| 工作电压 | DC 5V |
| 工作电流 | 400mA |
| 待机电流 | 200uA |
| 负载重量 | 1KG   |

:::提示
关于Grove模块的更多详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::警告
上述提到的支持平台只是表示该模块在软件或理论上的兼容性。在大多数情况下，我们只提供针对Arduino平台的软件库或代码示例。由于无法为所有可能的MCU平台提供软件库/示例代码，因此用户需要编写自己的软件库。
:::

## 入门指南

:::注意
如果您是第一次使用Arduino，我们强烈建议您在开始之前先阅读[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

### 与Arduino一起玩

**硬件**

- **步骤1.** 准备以下物品：

| Seeeduino V4.2 | 基础底板 |Grove-电磁铁|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet_02%20-%20%E5%89%AF%E6%9C%AC.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html)|

- **步骤2.** 将Grove-电磁铁连接到Grove-基础底板的**D2**端口。
- **步骤3.** 将Grove-基础底板插入Seeeduino。
- **步骤4.** 通过USB线将Seeeduino连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/2-connect.jpg)

:::注意
如果我们没有Grove基础底板，我们也可以直接将Grove-电磁铁连接到Seeeduino，如下所示。
:::

| Seeeduino       | Grove-超声波测距模块 |
|---------------|-------------------------|
| 5V           | 红色                   |
| GND           | 黑色                 |
| Not Conencted | 白色                 |
| D2            | 黄色                |

**软件**

- **步骤1.** 请将以下代码复制到Arduino IDE并上传到Arduino。如果您不知道如何上传代码，请参考[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

```c
/*
  Turns on an Electromagnet on for one second, then off for one second, repeatedly.
  This example code is in the public domain.
*/

int Electromagnet = 2;
int LED = 13;

// the setup routine runs once when you press reset:
void setup() {
    // initialize the digital pin as an output.
    pinMode(Electromagnet, OUTPUT);
    pinMode(LED, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop() {
    digitalWrite(Electromagnet, HIGH);  // turn the Electromagnet on (HIGH is the voltage level)
    digitalWrite(LED, HIGH);            // turn the LED on (HIGH is the voltage level)
    delay(1000);                        // wait for a second
    digitalWrite(Electromagnet, LOW);   // turn the Electromagnet off by making the voltage LOW
    digitalWrite(LED, LOW);             // turn the LED off by making the voltage LOW
    delay(1000);                        // wait for a second
}
```

- **步骤2.** Grove-电磁铁开始工作。

![](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet-3.png)

### 使用Codecraft编程

#### 硬件

**步骤1.** 将Grove-电磁铁连接到基础底板的D2端口。

**步骤2.** 将基础底板插入您的Seeeduino/Arduino。

**步骤3.** 通过USB线将Seeeduino/Arduino连接到您的电脑。

#### 软件

**步骤1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并将一个主程序拖放到工作区域。

:::注意
如果您是第一次使用Codecraft，也请查看[Codecraft使用Arduino的指南](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤2.** 按照下面的图片拖动代码块，或者打开可以在本页面末尾下载的cdc文件。

![cc](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/cc_Electromagnet.png)

将程序上传到您的Arduino/Seeeduino。

:::成功提示
当代码上传完成后，您可以尝试将铁制品靠近电磁铁。当电磁铁工作时，Arduino 13引脚上的LED会亮起。
:::

### 使用树莓派（Raspberry Pi）进行操作

**硬件**

- **步骤1.** 准备以下物品：

| Raspberry pi | GrovePi_Plus | Grove-电磁铁 |
|--------------|--------------|---------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet_02%20-%20%E5%89%AF%E6%9C%AC.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即获取](https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html)|

- **步骤2.** 将GrovePi_Plus插入树莓派。

- **步骤3.** 将Grove-电磁铁连接到GrovePi_Plus的**D4**端口。
- **步骤4.** 通过USB线将树莓派连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/1_pi_connect.jpg)

**软件**

- **步骤1.** 按照[设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)的说明配置开发环境。

- **步骤2.** 按照[更新固件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/)的说明更新GrovePi的最新固件。

:::提示
在这个wiki中，我们使用**~/GrovePi/\**路径代替\**/home/pi/Desktop/GrovePi**，您需要确保步骤2和步骤3使用相同的路径。
:::

:::注意
我们强烈建议您更新固件，否则某些传感器可能会出现错误。
:::

- **步骤3.** 克隆GitHub仓库。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **步骤4.** 导航到演示目录：

```
cd yourpath/GrovePi/Software/Python/
```

以下是grove_electromagnet.py的代码。

```python
    import time
    import grovepi

    # The electromagnet can hold a 1KG weight

    # Connect the Grove Electromagnet to digital port D4
    # SIG,NC,VCC,GND
    electromagnet = 4

    grovepi.pinMode(electromagnet,"OUTPUT")
    time.sleep(1)

    while True:
        try:
            # Switch on electromagnet
            grovepi.digitalWrite(electromagnet,1)
            print "on"
            time.sleep(2)

            # Switch off electromagnet
            grovepi.digitalWrite(electromagnet,0)
            print "off"
            time.sleep(2)

        except KeyboardInterrupt:
            grovepi.digitalWrite(electromagnet,0)
            break
        except IOError:
            print "Error"
```

5.运行演示程序。

```
    sudo python grove_electromagnet.py
```

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Electromagnet/res/Grove_Electromagnet_v1.0_SCH_PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
--------

- **[**Eagle**]**[Grove Electromagnet v1.0 SCH PCB.zip](https://files.seeedstudio.com/wiki/Grove-Electromagnet/res/Grove_Electromagnet_v1.0_SCH_PCB.zip)
- **[**数据手册**]**[ZYE1-P20-15数据手册PDF文件](https://files.seeedstudio.com/wiki/Bazaar_file/101020073/ZYE1-P%20electro%20holding%20magnets.pdf)
- **[**Codecraft**]**[CDC 文件](https://files.seeedstudio.com/wiki/Grove-Electromagnet/res/Grove_Electromagnet_CDC_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Electromagnet -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供不同形式的支持，以确保您在使用我们产品的过程中能够享受到尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
