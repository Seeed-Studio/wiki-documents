---
description: Grove - Sound Sensor
title: Grove - Sound Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Sound_Sensor
last_update:
  date: 2/1/2023
  author: hushuxu
---

英文 wiki ：https://wiki.seeedstudio.com/Grove-Sound_Sensor/

---
![enter image description here](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/images/page.jpg)

声音传感器可以检测环境的声音强度。 该模块的主要组件是简单的麦克风，它基于LM386放大器和驻极体麦克风。 该模块是以模拟量输出的，可以轻松地由Seeeduino进行采样和测试。

[![](https://files.seeedstudio.com/wiki/wiki_chinese/docs/images/click_to_buy.PNG)](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.10.3ff19e11ziPHVH&id=45476699231)


产品特性
--------
* 使用简单
* 能够输出模拟信号
* 能够简单的把它集成在Grove电路输入端的Logic模块上
* [Grove System](http://wiki.seeedstudio.com/cn/Grove_System/)

!!!警告
    该声音传感器用于检测是否有声环绕，请勿使用该模块收集声音信号。 例如，您可以使用它来制作声控灯，但不能用作录音设备。

规格参数
-------------
|项目|参数|
|-----|------|
|工作电压范围| 3.3/5 V |
|工作电流(Vcc=5V)|4~5 mA|
|电压增益(V=6V, f=1kHz)|26 dB|
|麦克风灵敏度(1kHz)|52-48 dB|
|麦克风阻抗|2.2k Ohm|
|麦克风频率|16-20 kHz|
|麦克风S / N无线电|54 dB|

!!!小提示
    关于Grove模块的更多细节请参考 [Grove System](http://wiki.seeedstudio.com/cn/Grove_System/)

支持平台
--------------------


入门指导
---------------

!!!注意
    本章基于Win10和Arduino IDE 1.6.9

这是一个易于使用的模块，您需要将信号引脚（Grove连接线的YELLOW引脚）连接到控制器的ADC输入。 如果控制器中没有内部ADC，建议使用[Grove - I2C ADC](http://www.seeedstudio.com/Grove-I2C-ADC-p-1580.html)


在这里，我们将向您通过一个简单的操作去演示Grove - Sound传感器是如何工作的。 首先，您需要准备以下内容：

| Seeeduino V4 | Grove - Sound Sensor | Base Shield |
|--------------|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[马上购买](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.9.3ff19e11rndqnS&id=45721222112)|[马上购买](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.9.3ff19e11ZLdkgG&id=520245748676)|[马上购买](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.10.3ff19e11crrag2&id=520233320144)|



**硬件连接**

由于Grove系列模块的优点，您不需要制作焊接或面包板，您需要做的是将模块连接到Base Shield的正确端口。 对于这个演示，我们只需要一个Grove模块。

*  Grove - Sound传感器是一个模拟量输入模块，我们在此演示中将其连接到 **A0**


![enter image description here](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/images/connection.jpg)


**下载程序到Arduino**

将以下代码复制到 Arduino IDE.

```
// test code for Grove - Sound Sensor
// loovee @ 2016-8-30

const int pinAdc = A0;

void setup()
{
    Serial.begin(115200);
    //Serial.println("Grove - Sound Sensor Test...");
}

void loop()
{
    long sum = 0;
    for(int i=0; i<32; i++)
    {
        sum += analogRead(pinAdc);
    }

    sum >>= 5;

    Serial.println(sum);
    delay(10);
}

```

然后选择正确的板和COM端口，然后点击上传按钮，这个过程需要几秒钟。

**获取原始数据**

这里让我们点击 **Tool（工具） > Serial Plotter（串口绘图器）** 来获取传感器的变化曲线。 请留言来告诉我们看到的数值变化。

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/images/sound_raw.png)


## 原理图在线预览


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/resources/Grove%20-%20Sound%20Sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



资源下载
----------
- [Schematic and PCB in Eagle format](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/resources/Grove%20-%20Sound%20Sensor.zip)
- [Schematic in PDF format](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/res/Grove%20-%20Sound%20Sensor%20v1.6%20Schematic.pdf)
- [PCB in PDF format](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/res/Grove%20-%20Sound%20Sensor%20v1.6%20PCB.pdf)
- [Github Page of this Document](https://github.com/SeeedDocument/Grove_Sound_Sensor)
- [LM386.PDF](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/res/LM386.pdf)
