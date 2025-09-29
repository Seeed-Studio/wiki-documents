---
title: G1/2 英寸水流传感器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/G1_and_2_inch_Water_Flow_Sensor/
slug: /cn/G1_and_2_inch_Water_Flow_Sensor
last_update:
  date: 02/03/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/flowsensor_LRG.jpg)

水流传感器由塑料阀体、水转子和霍尔效应传感器组成。当水流通过转子时，转子会旋转。其速度随不同的流量变化。霍尔效应传感器输出相应的脉冲信号。

**版本追踪**

|版本号|描述|发布日期|
|---|---|---|
|v1.0|首次公开发布|2010年5月31日|
|v2.0|第二次公开发布|2010年7月5日|

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/g12-water-flow-sensor-p-635.html?cPath=84_87&zenid=020999c566d2f31841dc54602b7d02ef)

## 规格
---
|项目|值|
|---|---|
|最小工作电压|DC 4.5V|
|最大工作电流|15mA(DC 5V)|
|工作电压|5V～24V|
|流量范围|1～30L/min|
|负载能力|≤10mA(DC 5V)|
|工作温度|≤80℃|
|液体温度|≤120℃|
|工作湿度|35%～90%RH|
|水压|≤2.0MPa|
|存储温度|-25℃～+80℃|
|存储湿度|25%～95%RH|

## 机械尺寸
---
单位：毫米

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Dem1.png)

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Dem2.png)

## 传感器组件
---

|编号|名称|数量|材料|备注|
|---|---|---|---|---|
|1|阀体|1|PA66+33%玻璃纤维||
|2|不锈钢珠|1|不锈钢 SUS304||
|3|轴|1|不锈钢 SUS304||
|4|叶轮|1|POM||
|5|环形磁铁|1|铁氧体||
|6|中环|1|PA66+33%玻璃纤维||
|7|O型密封圈|1|橡胶||
|8|电子密封圈|1|橡胶||
|9|盖子|1|PA66+33%玻璃纤维||
|10|螺丝|4|不锈钢 SUS304|3.0*11|
|11|电缆|1|1007 24AWG||

## 使用示例
---

:::note
    此示例摘自论坛，由 Charles Gantt 完成。感谢他的贡献。让我们看看它是如何工作的。
:::

**使用水流传感器读取水流速率**

这是我正在进行的一个项目的一部分，我认为可以在这里分享，因为论坛上有一些关于如何使用 Seeed Studio 的水流传感器读取每小时水流量的讨论。它使用一个简单的旋转轮来触发霍尔效应传感器的脉冲。通过读取这些脉冲并进行一些数学计算，我们可以准确地读取液体的流速，误差在 3% 以内。螺纹为 G3/4，因此找到带刺的接头不会太难。

**硬件安装**

您需要准备 Seeeduino / Arduino、水流传感器、10K 电阻、一个面包板和一些跳线。

连接水流传感器非常简单。传感器有三根线：黑色、红色和黄色。黑线连接到 Seeeduino 的地线引脚，红线连接到 Seeeduino 的 5V 引脚，黄色线需要连接到一个 10K 上拉电阻，然后连接到 Seeeduino 的引脚 2。

以下是我制作的 Fritzing 图，展示了如何连接所有组件。

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Reading_liquid_flow_rate_with_an_Arduino.jpg)

连接完成后，您需要将以下代码上传到您的 Seeeduino。一旦代码上传完成，并且有液体流过水流传感器，您可以打开串行监视器，它会每秒刷新一次显示流速。

**编程**

```c
// 使用 Seeeduino 和 Seeedstudio 的水流传感器读取液体流速
// 代码由 Charles Gantt 根据 Crenn 在 thebestcasescenario.com 上编写的 PC 风扇 RPM 代码改编
// http:/themakersworkbench.com http://thebestcasescenario.com https://www.seeedstudio.com

volatile int NbTopsFan; // 测量信号的上升沿
int Calc;
int hallsensor = 2;    // 传感器的引脚位置

void rpm ()     // 中断调用的函数
{
  NbTopsFan++;  // 此函数测量霍尔效应传感器信号的上升和下降沿
}

// setup() 方法在草图开始时运行一次
void setup() //
{
  pinMode(hallsensor, INPUT); // 初始化数字引脚 2 为输入
  Serial.begin(9600); // 初始化串行端口
  attachInterrupt(0, rpm, RISING); // 附加中断
}

// loop() 方法会不断运行，只要 Arduino 有电
void loop ()
{
  NbTopsFan = 0;   // 将 NbTops 设置为 0，准备计算
  sei();      // 启用中断
  delay (1000);   // 等待 1 秒
  cli();      // 禁用中断
  Calc = (NbTopsFan * 60 / 7.5); // (脉冲频率 x 60) / 7.5Q = 流速（单位：L/小时）
  Serial.print (Calc, DEC); // 打印上面计算的数值
  Serial.print (" L/hour\r\n"); // 打印 "L/hour" 并换行
}
```

您可以参考我们的论坛，了解更多关于使用水流传感器读取水流速率的详细信息。

## 接线图
---

连接所使用的螺纹外径为 1.4mm。  
![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Wfs-wiring.jpg)

## 输出表
---

水平测试中的脉冲频率 (Hz) = 7.5Q，其中 Q 为流量，单位为 L/min。（结果范围为 +/- 3%）

|项目|值|
|---|---|
|输出脉冲高电平|信号电压 &gt;4.5 V（输入 DC 5 V）|
|输出脉冲低电平|信号电压 &lt;0.5V（输入 DC 5V）|
|精度|3%（流量范围从 1L/min 到 10L/min）|
|输出信号占空比|40%～60%|

## 相关项目

很遗憾，我们在 [Recipe](https://community.seeedstudio.com/projects.html#recipe) 中还没有关于 G1/2 水流传感器的任何演示项目。

这里我们介绍一些关于 [Grove-水传感器](https://www.seeedstudio.com/depot/Grove-Water-Sensor-p-748.html) 的项目。

**什么是 Grove - 水传感器**

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Twig_-_Water_Sensor.jpg)

这个水传感器模块是 Twig 系统的一部分。您可以使用模拟引脚检测接地和传感器迹线之间因水接触而产生的水量。

它的工作原理是通过一系列连接到地的暴露迹线，并在接地迹线之间交错排列传感迹线。

传感器迹线具有一个 1 MΩ 的弱上拉电阻。电阻会将传感器迹线值拉高，直到一滴水将传感器迹线与接地迹线短路。

该电路可以与 Arduino 的数字 I/O 引脚一起工作。

**Arduino 植物守护者**

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/552c2c4f2e5a8.jpg)

此项目使用 Grove - 水传感器创建一个简单但有效的植物浇水解决方案。  
工作原理：  
- 在 OLED 屏幕上显示水传感器和温度传感器的读数  
- 当水量低于阈值时发送警报并激活泵驱动器  
- 使用 10 个 RGB LED 提供颜色变化  

[我想制作它。](https://community.seeedstudio.com/project_detail.html?id=103)

[更多关于水传感器的精彩项目](https://www.seeedstudio.com/recipe/index.php?query=water+sensor)

**与我们分享您的精彩项目**

怀着创造和分享的精神，这是我们认为造物者的核心所在。  
正因为如此，开源社区才能如此繁荣。  
无论您是谁，无论您制作了什么，无论是黑客、造物者、艺术家还是工程师。  
只要您开始与他人分享您的作品，您就成为了开源社区的一部分，并为其做出了贡献。

现在在 [Recipe](https://community.seeedstudio.com/) 上与我们分享您的精彩项目，并赢得成为 Seeed 核心用户的机会。

- 核心用户是那些对 Seeed 产品表现出高度兴趣并在 Recipe 上做出显著贡献的人。

- 我们与核心用户合作开发新产品，换句话说，核心用户将有机会在 Seeed 新产品正式发布前体验这些产品，并且我们期待他们提供宝贵的反馈以帮助我们改进产品性能和用户体验。在大多数情况下，当我们的核心用户有一些好的创意时，我们会提供硬件组件、PCBA 服务以及技术支持。此外，与核心用户进一步的商业合作也是非常可能的。

获取更多关于核心用户的信息，请发送邮件至：recipe@seeed.cc

## 许可
---

本文档采用 Creative Commons [署名-相同方式共享 3.0 许可](https://creativecommons.org/licenses/by-sa/3.0/)。源代码和库文件采用 [GPL/LGPL](http://www.gnu.org/licenses/gpl.html) 许可，详情请参阅源代码文件。

## 常见问题

以下是传感器的常见问题解答，用户可以在这里找到关于此类产品的问答。

1. **水流传感器由什么材料制成？**

  - 尼龙加纤维，避免接触强酸和强碱。

2. **水流传感器是否适用于饮用水？**

  - 是的，它已被用于饮水机。

## 资源
---
- [水流传感器数据手册.pdf](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/res/Water_flow_sensor_datasheet.pdf)
- [使用水流传感器读取水流速率](https://community.seeedstudio.com/topic_detail.html?id=575#p3632)
- [在 LCD 上显示水流速率](https://github.com/practicalarduino/WaterFlowGauge)
- [材料数据手册](http://garden.seeedstudio.com/images/4/4e/YEE70G30HSLNC..pdf)

## 技术支持与产品讨论

如果您遇到任何技术问题，请将问题提交到我们的 [论坛](http://forum.seeedstudio.com/)。  
感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>