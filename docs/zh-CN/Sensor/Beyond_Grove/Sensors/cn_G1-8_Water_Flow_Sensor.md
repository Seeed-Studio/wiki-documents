---
title: G1/8 英寸水流传感器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/G1-8_Water_Flow_Sensor/
slug: /cn/G1-8_Water_Flow_Sensor
last_update:
  date: 02/03/2022
  author: gunengyu
---

[![](https://files.seeedstudio.com/wiki/G1-8_Water_Flow_Sensor/img/G18_Water_Flow_Sensor.jpg)](https://www.seeedstudio.com/depot/G18-Water-Flow-Sensor-p-1346.html?cPath=25_32)

水流传感器由一个塑料阀体、水转子和霍尔效应传感器组成。当水流通过转子时，转子会旋转，其速度随不同的流量变化。霍尔效应传感器输出相应的脉冲信号。此传感器适用于检测饮水机或咖啡机中的水流。

我们提供一系列不同直径的水流传感器，您可以查看以找到最适合您需求的产品。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/G1-8-Water-Flow-Sensor-p-1346.html)

## 特性

*   小巧，易于安装

*   高密封性能

*   高质量霍尔效应传感器

*   符合 RoHS 标准

## 规格

<table>
  <tr>
    <td>最低工作电压</td>
    <td>DC 4.5V</td>
  </tr>
  <tr>
    <td>最大工作电流</td>
    <td>15mA(DC 5V)</td>
  </tr>
  <tr>
    <td width="400px">工作电压</td>
    <td width="400px">5V～24V</td>
  </tr>
  <tr>
    <td>流量范围</td>
    <td>0.3~6L/min</td>
  </tr>
  <tr>
    <td>负载能力</td>
    <td>≤10mA(DC 5V)</td>
  </tr>
  <tr>
    <td>工作温度</td>
    <td>≤80℃</td>
  </tr>
  <tr>
    <td>液体温度</td>
    <td>≤120℃</td>
  </tr>
  <tr>
    <td>工作湿度</td>
    <td>35%～90%RH</td>
  </tr>
  <tr>
    <td>水压</td>
    <td>≤0.8MPa</td>
  </tr>
  <tr>
    <td>存储温度</td>
    <td>-25℃～+80℃</td>
  </tr>
  <tr>
    <td>存储湿度</td>
    <td>25%～95%RH</td>
  </tr>
</table>

## 入门指南

<font>注意：此示例摘自论坛，由 Charles Gantt 完成。感谢他的贡献。让我们看看它是如何工作的。</font>

### 使用水流传感器读取水流速率

这是我正在进行的一个项目的一部分，我认为可以在这里分享，因为论坛上有一些关于如何使用 Seeed Studio Depo 的水流传感器读取每小时升数的水流速率的讨论。它使用一个简单的旋转轮来触发霍尔效应传感器的脉冲。通过读取这些脉冲并进行一些数学计算，我们可以准确地读取液体流速，误差在 3% 以内。螺纹为 G3/4，因此找到带刺的接头并不难。

**硬件安装**

您需要准备以下组件：Seeeduino / Arduino、水流传感器、10K 电阻、面包板和一些跳线。

连接水流传感器非常简单。传感器有三根线：黑色、红色和黄色。
- 黑色线连接到 Seeeduino 的地线引脚
- 红色线连接到 Seeeduino 的 5V 引脚
- 黄色线需要连接到一个 10K 上拉电阻，然后连接到 Seeeduino 的引脚 2。

以下是我制作的 Fritzing 图，展示了如何连接所有组件。

![](https://files.seeedstudio.com/wiki/G1-8_Water_Flow_Sensor/img/Reading_liquid_flow_rate_with_an_Arduino.jpg)

连接完成后，您需要将以下代码上传到您的 Seeeduino。一旦代码上传完成，并且有液体流过水流传感器，您可以打开串行监视器，它会每秒刷新一次显示流速。

**编程**
```
// 使用 Seeeduino 和 Seeedstudio.com 的水流传感器读取液体流速
// 代码由 Charles Gantt 根据 Crenn 在 thebestcasescenario.com 编写的 PC 风扇 RPM 代码改编
// http:/themakersworkbench.com http://thebestcasescenario.com https://www.seeedstudio.com

volatile int NbTopsFan; // 测量信号的上升沿
int Calc;
int hallsensor = 2;    // 传感器的引脚位置

void rpm ()     // 中断调用的函数
{
    NbTopsFan++;  // 此函数测量霍尔效应传感器信号的上升和下降沿
}
// setup() 方法在草图启动时运行一次
void setup() //
{
    pinMode(hallsensor, INPUT); // 初始化数字引脚 2 为输入
    Serial.begin(9600); // 初始化串行端口
    attachInterrupt(0, rpm, RISING); // 附加中断
}
// loop() 方法会不断运行，只要 Arduino 有电
void loop ()
{
    NbTopsFan = 0;   // 将 NbTopsFan 设置为 0，准备计算
    sei();      // 启用中断
    delay (1000);   // 等待 1 秒
    cli();      // 禁用中断
    Calc = (NbTopsFan * 60 / 7.5); // (脉冲频率 x 60) / 7.5Q = 流速（升/小时）
    Serial.print (Calc, DEC); // 打印上面计算的数值
    Serial.print (" L/hour\r\n"); // 打印 "L/hour" 并换行
}
```

您可以参考我们的论坛了解更多关于[使用水流传感器读取水流速率](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632)的信息。

## 接线图

连接所使用的螺纹外径为 1.4mm。

![](https://files.seeedstudio.com/wiki/G1-8_Water_Flow_Sensor/img/Wfs-wiring.jpg)

## 输出表

水平测试中的脉冲频率 (Hz) = 7.5Q，Q 为流量，单位为 L/min。（结果范围为 +/- 3%）

<table>
  <tr>
    <td width="400px">输出脉冲高电平</td>
    <td width="400px">信号电压 &gt;4.5 V（输入 DC 5 V）</td>
  </tr>
  <tr>
    <td>输出脉冲低电平</td>
    <td>信号电压 &lt;0.5 V（输入 DC 5 V）</td>
  </tr>
  <tr>
    <td>精度</td>
    <td>3%（流量范围从 1L/min 到 10L/min）</td>
  </tr>
  <tr>
    <td>输出信号占空比</td>
    <td>40%～60%</td>
  </tr>
</table>

## 资源

*   [水流传感器数据手册.pdf](https://files.seeedstudio.com/wiki/G1-8_Water_Flow_Sensor/res/Water_flow_sensor_datasheet.pdf)

*   [使用水流传感器读取水流量](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632)

*   [在 LCD 上显示水流量](http://www.practicalarduino.com/projects/water-flow-gauge)

*   [材料数据手册](http://garden.seeedstudio.com/images/4/4e/YEE70G30HSLNC..pdf)

## 技术支持与产品讨论

如果您有任何技术问题，请将问题提交到我们的 [论坛](http://forum.seeedstudio.com/)。
感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>