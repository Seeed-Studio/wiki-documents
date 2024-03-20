---
description: Grove - Air Quality Sensor v1.3
title: Grove - Air Quality Sensor v1.3
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Air_Quality_Sensor_v1.3
last_update:
  date: 2/1/2023
  author: hushuxu
---

英文 wiki ：https://wiki.seeedstudio.com/Grove-Air_Quality_Sensor_v1.3/

---
![](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor.jpg)
该传感器是为室内空气状况进行综合监控而专门设计的。 它可检测多种有害气体，如一氧化碳，酒精，丙酮，稀释剂，甲醛等。 由于测量机制的限制，该传感器不能输出特定的数据来定量描述目标气体的浓度。 但是它仍然足够用于仅需要定性结果的应用，如汽车清新喷雾器和自动空气循环系统。

[![](https://files.seeedstudio.com/wiki/wiki_chinese/docs/images/click_to_buy.PNG)](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.9.3ff19e11UP6yWS&id=520569030749)


## 产品特性
---
- 能够识别多种目标气体
- 高性价比
- 耐用
- 兼容5V和3.3V


!!!Cautions
    1. 需要相对干净的空气作为初始状态。
    2. 长时间暴露于高度污染的空气可能会显着削弱其敏感性。

## 使用方法
---
**使用Arduino**

如导言中所述，该传感器在提供多种的目标气体的定性结果方面表现更好。 在这个演示中，我们将在'.cpp'文件中定义4个状态以供参考。 他们是：


- a。 空气清新 - 表示良好的空调
- b。 低污染 - 表明目标气体浓度相对较低。
- C。 高污染（在串行监视器上没有“强制信号有效”信息） - 您应该了解污染水平，并考虑是否采取某些措施。
- d。 高污染（在串行监视器上印有“强制信号有效”信息） - 采取即时措施提高空气质量。

我们将决策结构封装在“.cpp”文件中。 您可以在此找到有关如何修改阈值的信息。

让我们试试吧！

1.将传感器连接到 [Grove - Base Shield](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.10.3ff19e11crrag2&id=520233320144) 的 **A0** 端口。

![](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove_-_Air_Quality_Sensor_v1.3_Test.jpg)

2.下载库文件 : [AirQuality_Sensor Library](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/AirQuality_Sensor.zip).

3.打开传感器加热后等待至少2分钟。 然后通过以下路径打开示例：File(文件) - >Example(示例) - > AirQuality_Sensor-> AirQuality_Sensor。
```
/*
AirQuality Demo V1.0.
connect to A1 to start testing. it will needs about 20s to start
* By: http://www.seeedstudio.com
*/
#include "AirQuality.h"
#include "Arduino.h"
AirQuality airqualitysensor;
int current_quality =-1;
void setup()
{
    Serial.begin(9600);
    airqualitysensor.init(14);
}
void loop()
{
    current_quality=airqualitysensor.slope();
    if (current_quality >= 0)// if a valid data returned.
    {
        if (current_quality==0)
        Serial.println("High pollution! Force signal active");
        else if (current_quality==1)
        Serial.println("High pollution!");
        else if (current_quality==2)
        Serial.println("Low pollution!");
        else if (current_quality ==3)
        Serial.println("Fresh air");
    }
}
ISR(TIMER2_OVF_vect)
{
    if(airqualitysensor.counter==122)//set 2 seconds as a detected duty
    {

        airqualitysensor.last_vol=airqualitysensor.first_vol;
        airqualitysensor.first_vol=analogRead(A0); // change this value if you use another A port
        airqualitysensor.counter=0;
        airqualitysensor.timer_index=1;
        PORTB=PORTB^0x20;
    }
    else
    {
        airqualitysensor.counter++;
    }
}
```

4.上传代码

5.打开串行监视器。

![](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/AirQualitySensot_Demo.jpg)

要调整阈值和指示消息，请参阅下面的.cpp文件中的决策结构。

```
int AirQuality::slope(void)
{
    while(timer_index)
    {
        if(first_vol-last_vol>400||first_vol>700)
        {
            Serial.println("High pollution! Force signal active.");
            timer_index=0;
            avg_voltage();
            return 0;

        }
        else if((first_vol-last_vol>400&&first_vol<700)||first_vol-vol_standard>150)
        {
            Serial.print("sensor_value:");
            Serial.print(first_vol);
            Serial.println("\t High pollution!");
            timer_index=0;
            avg_voltage();
            return 1;

        }
        else if((first_vol-last_vol>200&&first_vol<700)||first_vol-vol_standard>50)
        {
            //Serial.println(first_vol-last_vol);
            Serial.print("sensor_value:");
            Serial.print(first_vol);
            Serial.println("\t Low pollution!");
            timer_index=0;
            avg_voltage();
            return 2;
        }
        else
        {
            avg_voltage();
            Serial.print("sensor_value:");
            Serial.print(first_vol);
            Serial.println("\t Air fresh");
            timer_index=0;
            return 3;
        }
    }
    return -1;
}
```

**使用 Raspberry Pi**

!!! attention 
     如果你正在使用 **Raspberry Pi with Raspberrypi OS >= Bullseye**, 你只能在 **python3** 中使用这个命令行.

1.你需要准备一个Raspberry pi和grovepi或grovepi +。

2.您需要完成配置开发环境，Grovepi+ 配置请参考 [说明](http://wiki.seeed.cc/GrovePi_Plus/) 。

3.硬件连接
- 通过grove连接线将传感器插入Grovepi插座 **A0**。

4.跳转到示例目录：

```
cd yourpath/GrovePi/Software/Python/
```

找到这行代码

```
   nano grove_air_quality_sensor.py   # "Ctrl+x" to exit #
```

```
import time
import grovepi

# Connect the Grove Air Quality Sensor to analog port A0
# SIG,NC,VCC,GND
air_sensor = 0

grovepi.pinMode(air_sensor,"INPUT")

while True:
    try:
        # Get sensor value
        sensor_value = grovepi.analogRead(air_sensor)

        if sensor_value > 700:
            print "High pollution"
        elif sensor_value > 300:
            print "Low pollution"
        else:
            print "Air fresh"

        print "sensor_value =", sensor_value
        time.sleep(.5)

    except IOError:
        print "Error"
```

5.运行这个示例

```
   sudo python3 grove_air_quality_sensor.py
```


## 原理图在线预览


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_-_Air_quality_sensor_v1.3_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源下载
---
- [AirQuality Sensor Library.zip](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/AirQuality_Sensor.zip)
- [Grove_-_Air_quality_sensor_v1.3_sch_pcb.zip](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_-_Air_quality_sensor_v1.3_sch_pcb.zip)
- [Grove_-_Air_quality_sensor_v1.3_sch.pdf](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_-_Air_quality_sensor_v1.3_sch.pdf)
- [Air_quality_sensor_MP503_Chinese.pdf](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Air_quality_sensor_MP503%20Chinese.pdf)
- [Air_quality sensor_MP503_English.pdf](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Mp503%20English.pdf)
