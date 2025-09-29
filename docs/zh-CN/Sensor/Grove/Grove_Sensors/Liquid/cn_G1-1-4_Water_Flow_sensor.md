---
description: G5/4 英寸水流传感器
title: G5/4 英寸水流传感器
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/G1-1-4_Water_Flow_sensor
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](http://bz.seeedstudio.com/depot/images/P2231345_01.JPG)

水流传感器由塑料阀体、水转子和霍尔效应传感器组成。当水流过转子时，转子旋转。其速度随不同的流量而变化。霍尔效应传感器输出相应的脉冲信号。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/g114-water-flow-sensor-p-1082.html?cPath=144_151)

##   规格参数
---
<table>
<tr><td>最小工作电压</td><td>DC 4.5V</td></tr>
<tr><td>最大工作电流</td><td>15mA(DC 5V)</td></tr>
<tr><td>工作电压</td><td>5V～24V</td></tr>
<tr><td>流量范围</td><td>1～120L/min</td></tr>
<tr><td>负载能力</td><td>≤10mA(DC 5V)</td></tr>
<tr><td>工作温度</td><td>≤80℃</td></tr>
<tr><td>液体温度</td><td>≤120℃</td></tr>
<tr><td>工作湿度</td><td>35%～90%RH</td></tr>
<tr><td>水压</td><td>≤2.0MPa</td></tr>
<tr><td>存储温度</td><td>-25℃～+80℃</td></tr>
<tr><td>存储湿度</td><td>25%～95%RH</td></tr>
</table>

##   机械尺寸
---
###   传感器组件

<table>
<tr><th>编号</th><th>名称</th><th>数量</th><th>材料</th><th>备注</th></tr>
<tr><td>1</td><td>阀体</td><td>1</td><td>PA66+33%玻璃纤维</td><td></td></tr>
<tr><td>2</td><td>不锈钢珠</td><td>1</td><td>不锈钢 SUS304</td><td></td></tr>
<tr><td>3</td><td>轴</td><td>1</td><td>不锈钢 SUS304</td><td></td></tr>
<tr><td>4</td><td>叶轮</td><td>1</td><td>POM</td><td></td></tr>
<tr><td>5</td><td>环形磁铁</td><td>1</td><td>铁氧体</td><td></td></tr>
<tr><td>6</td><td>中间环</td><td>1</td><td>PA66+33%玻璃纤维</td><td></td></tr>
<tr><td>7</td><td>O型密封圈</td><td>1</td><td>橡胶</td><td></td></tr>
<tr><td>8</td><td>电子密封圈</td><td>1</td><td>橡胶</td><td></td></tr>
<tr><td>9</td><td>盖子</td><td>1</td><td>PA66+33%玻璃纤维</td><td></td></tr>
<tr><td>10</td><td>螺丝</td><td>8</td><td>不锈钢 SUS304</td><td></td></tr>
<tr><td>11</td><td>电缆</td><td>1</td><td>1007 24AWG</td><td></td></tr>
</table>

##  使用示例
---
<font>注意：此示例摘自论坛，由 Charles Gantt 完成。感谢他的贡献。让我们看看它是如何工作的。</font>

###   使用水流传感器读取水流量

这是我一直在进行的项目的一部分，我想在这里分享它，因为已经有一些关于如何使用 Seeed Studio 商店中的水流传感器读取每小时升数流量的讨论。它使用一个简单的旋转轮来脉冲霍尔效应传感器。通过读取这些脉冲并实施一些数学计算，我们可以读取液体的流量，精度在 3% 以内。螺纹是简单的 G3/4，因此找到带刺端头不会很困难。

####   硬件安装

您需要 Seeeduino / Arduino、水流传感器、10K 电阻、面包板和一些跳线。

水流传感器的接线非常简单。有 3 根线：黑色、红色和黄色。
黑色连接到 Seeeduino 的接地引脚
红色连接到 Seeeduino 的 5v 引脚
黄色线需要连接到 10k 上拉电阻，然后连接到 Seeeduino 的引脚 2。

这是我制作的 fritzing 图，向您展示如何连接所有线路。

![](https://files.seeedstudio.com/wiki/G1-1-4_Water_Flow_sensor/img/Reading_liquid_flow_rate_with_an_Arduino.jpg)

连接完成后，您需要将以下代码上传到您的 Seeeduino。上传完成并且有一些液体流过水流传感器后，您可以打开串行监视器，它将显示流量，每秒刷新一次。

####   编程
```
// reading liquid flow rate using Seeeduino and Water Flow Sensor from Seeedstudio.com
// Code adapted by Charles Gantt from PC Fan RPM code written by Crenn @thebestcasescenario.com
// http:/themakersworkbench.com http://thebestcasescenario.com https://www.seeedstudio.com

volatile int NbTopsFan;                       // measuring the rising edges of the signal
int Calc;
int hallsensor = 2;                           // The pin location of the sensor


void rpm ()                                   // This is the function that the interupt calls
{
    NbTopsFan++;                              // This function measures the rising and falling edge of the hall effect sensors signal
}


void setup()
{
    pinMode(hallsensor, INPUT);               // initializes digital pin 2 as an input
    Serial.begin(9600);                       // This is the setup function where the serial port is initialised,
    attachInterrupt(0, rpm, RISING);          // and the interrupt is attached
}


void loop ()
{
    NbTopsFan = 0;                            // Set NbTops to 0 ready for calculations

    sei();                                    // Enables interrupts
    delay (1000);                             // Wait 1 second
    cli();                                    // Disable interrupts

    Calc = (NbTopsFan * 60 / 4.5);            // (Pulse frequency x 60) / 4.5Q, = flow rate in L/hour

    Serial.print (Calc, DEC);                 // Prints the number calculated above

    Serial.print (" L/hour\r\n");             // Prints "L/hour" and returns a  new line
}
```

您可以参考我们的论坛了解更多关于[使用水流传感器读取水流量](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632)的详细信息。

##   接线图
---
连接使用的螺纹外径为1.4mm。

![](https://files.seeedstudio.com/wiki/G1-1-4_Water_Flow_sensor/img/Wfs-wiring.jpg)

##   输出表
---
水平测试中的脉冲频率 (Hz) = 4.5Q，Q为流量，单位L/min。（结果在+/- 3%范围内）

<table>
<tr><td>输出脉冲高电平</td><td>信号电压 &gt;4.5 V（输入DC 5 V）</td></tr>
<tr><td>输出脉冲低电平</td><td>信号电压 &lt;0.5V（输入DC 5V）</td></tr>
<tr><td>精度</td><td>3%（流量从1L/min到10L/min）</td></tr>
<tr><td>输出信号占空比</td><td>40%～60%</td></tr>
</table>

![](https://files.seeedstudio.com/wiki/G1-1-4_Water_Flow_sensor/img/G54_Flow_rate_to_frequency.png.png)

##   常见问题
---

**水流传感器是由什么材料制成的？**

纤维尼龙，避免强酸和强碱。

**水流传感器对饮用水安全吗？**

是的，它已经用于饮水机上。


##   资源
---
*   [使用水流传感器读取水流速率](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632)

*   [LCD上显示水流速率](http://www.practicalarduino.com/projects/water-flow-gauge)

*   [材料数据表](https://wiki.seeedstudio.com/cn/images/4/4e/YEE70G30HSLNC..pdf)

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