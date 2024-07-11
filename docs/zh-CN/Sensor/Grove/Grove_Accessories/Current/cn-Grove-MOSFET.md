---
description: Grove - 金属氧化物半导体场效应晶体管
title: Grove - 金属氧化物半导体场效应晶体管
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-MOSFET
last_update:
  date: 03/21/2024
  author: WuFeifei
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Mosfet_01.jpg" /></div>

Grove – MOSFET 模块使您能够使用低电压（例如 5V）的微控制器来控制高电压项目，比如 15V DC。MOSFET 也是一种开关，但其开关频率可以高达 5MHz，远快于普通的机械继电器。板上设有两个螺丝接线端子，一个用于外部电源，另一个用于您想要控制的设备。当 Grove – MOSFET 闭合时，它会将电源从一端传递到另一端。但是，如果外部电源缺失，您的设备仍然可以通过 Grove 接口从微控制器获取电源。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-MOSFET-p-1594.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## 版本

| 产品版本      | 变更内容                                                                                                                                                                                | 发布日期 |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove - MOSFET V1.0 | 初始版                                                                                                                                                                                 | 2015年10月 |

## **规格**

|**参数**| **值/范围** |
|:--------|:-----------|
|**工作电压**| **5V** |
|**Vin**      | **5 ~ 15V** |
|**MOSFET 型号**| **CJQ4435** |

**:::提示**
**更多关于Grove模块的信息，请参考[Grove系统](https://wiki.seeedstudio.com/Grove_System/)**](https://wiki.seeedstudio.com/Grove_System/
**:::**

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::警告

上述提及的支持平台是模块软件或理论兼容性的一个指示。在大多数情况下，我们只提供适用于Arduino平台的软件库或代码示例。我们无法为所有可能的MCU平台提供软件库/示例代码。因此，用户需要编写自己的软件库。

:::

## **入门指南**

:::提示
如果你是第一次使用Arduino，我们强烈建议你在开始前先查看[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

### **使用Arduino进行操作**

#### **演示**

这里我们演示如何使用Grove - MOSFET来控制一个电机。我们使用外部电源为其供电，但如果你的被控设备需要的电流小于300mA，那么Seeeduino完全可以支持它，无需额外的电源。

#### **硬件**

- 第一步。准备以下物品：

| **Seeeduino V4.2** | **基础扩展板** | **Grove - MOSFET** |
|--------------|-------------|-----------------|
|**<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>**|**<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>**|**<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Mosfet_small.jpg" /></div>**|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-MOSFET-p-1594.html)|

- **步骤 2**. 将Grove - MOSFET 模块连接到Grove基础扩展板的D6端口上
- **步骤 3.** 将Grove基础扩展板插入Seeeduino中
- **步骤 4.** 通过USB线将Seeeduino连接到电脑上

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/2.jpg" /></div>

:::注意
如果我们没有Grove基础扩展板，我们也可以直接将Grove_MOSFET连接到Seeeduino上，如下所示
:::

| **Seeeduino**   | **Grove_MOSFET** |
|---------------|-------------------------|
| 5V       | 红色           |
| GND       | 黑色         |
| Not Conencted | 白色         |
| D6        | 黄色        |

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/MOSFET_Interface_Function.jpg" /></div>

接受5V~15V的电源，电流小于2A。

Vout：在此处连接执行器。

#### **软件**

- **步骤 1.** 将代码复制到Arduino IDE并上传。如果你不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)

```c
// demo of Grove - MOSFET
// use  pwm pin 6 to control a motor

int motorPin = 6;

void setup()
{
    Serial.begin(38400);
    pinMode(motorPin, OUTPUT);
    Serial.println("Grove - MOSFET Test Demo!");
}

void loop()
{
    motorOnThenOffWithSpeed();
    motorAcceleration();
}

void motorOnThenOffWithSpeed()
{
    int onSpeed  = 200;                         // a number between 0 (stopped) and 255 (full speed)
    int onTime   = 2500;
    int offSpeed = 50;                          // a number between 0 (stopped) and 255 (full speed)
    int offTime  = 1000;
    analogWrite(motorPin, onSpeed);
    delay(onTime);
    analogWrite(motorPin, offSpeed);
    delay(offTime);
}

void motorAcceleration()
{
    int delayTime = 50;
    for(int i=0; i<256; i++)
    {
        analogWrite(motorPin, i);
        delay(delayTime);
    }

    for(int i=255; i>=0; i--)
    {
        analogWrite(motorPin, i);
        delay(delayTime);
    }
}
```

- **步骤 2.** 观察电机的状态

**![](https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Static_image.gif)**

### **使用树莓派进行操作**

#### **硬件**

- **步骤 1.** 准备以下物品：

| **树莓派** | **GrovePi_Plus** | **Grove - MOSFET** |
|-------------:|:-----------:|-----------------|
|**<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>**|**<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>**|**<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Mosfet_small.jpg" /></div>**|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-MOSFET-p-1594.html)|

- **步骤 2.** 将GrovePi_Plus插入树莓派中
- **步骤 3.** 将Grove-MOSFET模块连接到GrovePi_Plus的D6端口上。
- **步骤 4.** 通过USB线将树莓派连接到电脑上

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/1.jpg" /></div>

#### 软件

- **步骤 1.** Navigate to the demos' directory:

```
cd yourpath/GrovePi/Software/Python/
```

- **步骤 2.**  To see the code

```
nano grove_mosfet.py   # "Ctrl+x" to exit #
```

```python
import time
import grovepi

# Connect the Grove MOSFET to digital port D6
# SIG,NC,VCC,GND
mosfet = 6

grovepi.pinMode(mosfet,"OUTPUT")
time.sleep(1)

while True:
    try:
        # Full speed
        grovepi.analogWrite(mosfet,255)
        print "full speed"
        time.sleep(2)

        # Half speed
        grovepi.analogWrite(mosfet,128)
        print "half speed"
        time.sleep(2)

        # Off
        grovepi.analogWrite(mosfet,0)
        print "off"
        time.sleep(2)

    except KeyboardInterrupt:
        grovepi.analogWrite(mosfet,0)
        break
    except IOError:
        print "Error"
```

- **步骤 3.** Run the demo.

```
sudo python grove_mosfet.py
```

- **步骤 4.** We will see the output display on terminal as below.

<div><img width="{1000}" src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/pi_result.png" /></div>
**|**
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove-MOSFET_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## **资源**

- [Eagle] [Grove - MOSFET 原理图文件](https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove-MOSFET_Eagle_File.zip)
- [PDF] [Grove - MOSFET 原理图 PDF](https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove%20-%20MOSFET%20.pdf)
- [Datasheet] [CJQ4435 数据手册](https://files.seeedstudio.com/wiki/Grove-MOSFET/res/CJQ4435.pdf)
- [WIKI] [MOSFET 维基百科](https://en.wikipedia.org/wiki/MOSFET)

**<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_MOSFET -->**

## **技术支持与产品讨论**

感谢您选择我们的产品！我们在这里为您提供多种支持，以确保您使用我们的产品时能够尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
