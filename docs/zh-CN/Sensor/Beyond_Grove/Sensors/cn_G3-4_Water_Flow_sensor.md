---
title: G3-4 水流传感器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/G3-4_Water_Flow_sensor/
slug: /cn/G3-4_Water_Flow_sensor
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/P21408651.jpg)

水流传感器由塑料阀体、水转子和霍尔效应传感器组成。当水流通过转子时，转子旋转。其速度随不同的流量变化。霍尔效应传感器输出相应的脉冲信号。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)]( https://www.seeedstudio.com/g34-water-flow-sensor-p-1083.html?cPath=144_151)

## 规格

---
<table>
  <tbody>
    <tr>
      <td>最小工作电压</td>
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
      <td>1～60L/min</td>
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
      <td>≤2.0MPa</td>
    </tr>
    <tr>
      <td>存储温度</td>
      <td>-25℃～+80℃</td>
    </tr>
    <tr>
      <td>存储湿度</td>
      <td>25%～95%RH</td>
    </tr>
  </tbody>
</table>

## 机械尺寸

---

### 传感器组件

<table>
  <tbody>
    <tr>
      <th>编号</th>
      <th>名称</th>
      <th>数量</th>
      <th>材料</th>
      <th>备注</th>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={200}>1</td>
      <td width={150}>阀体</td>
      <td width={150}>1</td>
      <td width={150}>PA66+33%玻璃纤维</td>
      <td width={150}></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={200}>2</td>
      <td width={150}>不锈钢珠</td>
      <td width={150}>1</td>
      <td width={150}>不锈钢 SUS304</td>
      <td width={150}></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>3</td>
      <td>轴</td>
      <td>1</td>
      <td>不锈钢 SUS304</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>4</td>
      <td>叶轮</td>
      <td>1</td>
      <td>POM</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>5</td>
      <td>环形磁铁</td>
      <td>1</td>
      <td>铁氧体</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>6</td>
      <td>中环</td>
      <td>1</td>
      <td>PA66+33%玻璃纤维</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>7</td>
      <td>O型密封圈</td>
      <td>1</td>
      <td>橡胶</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>8</td>
      <td>电子密封圈</td>
      <td>1</td>
      <td>橡胶</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>9</td>
      <td>盖子</td>
      <td>1</td>
      <td>PA66+33%玻璃纤维</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>10</td>
      <td>螺丝</td>
      <td>4</td>
      <td>不锈钢 SUS304</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>11</td>
      <td>电缆</td>
      <td>1</td>
      <td>1007 24AWG</td>
      <td></td>
    </tr>
  </tbody>
</table>

## 使用示例

---
<font>注意：此示例摘自论坛，由 Charles Gantt 完成。感谢他的贡献。让我们看看它是如何工作的。</font>

### 使用水流传感器读取水流速率

这是我正在进行的一个项目的一部分，我认为可以在这里分享一下，因为论坛上有一些关于如何使用 Seeed Studio Depo 中的水流传感器读取每小时升数的水流速率的讨论。它使用一个简单的旋转轮来触发霍尔效应传感器的脉冲。通过读取这些脉冲并进行一些数学计算，我们可以将液体流速的读取精确到 3% 以内。螺纹为简单的 G3/4，因此找到带刺的接头并不难。

**硬件安装**

您需要准备以下硬件：Seeeduino / Arduino、水流传感器、10K 电阻、一个面包板和一些跳线。

连接水流传感器非常简单。传感器有三根线：黑色、红色和黄色。
- 黑色线连接到 Seeeduino 的地线（GND）引脚
- 红色线连接到 Seeeduino 的 5V 引脚
- 黄色线需要连接到一个 10K 上拉电阻，然后连接到 Seeeduino 的 2 号引脚

以下是我制作的 Fritzing 图，展示了如何连接所有硬件。

![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/Reading_liquid_flow_rate_with_an_Arduino.jpg)

完成连接后，您需要将以下代码上传到您的 Seeeduino。一旦代码上传完成，并且有液体流过水流传感器，您可以打开串行监视器，它将每秒刷新一次并显示流速。

**编程**

```
// 使用 Seeeduino 和 Seeedstudio.com 的水流传感器读取液体流速
// 代码由 Charles Gantt 根据 Crenn 在 thebestcasescenario.com 上编写的 PC 风扇 RPM 代码改编
// http:/themakersworkbench.com http://thebestcasescenario.com https://www.seeedstudio.com

volatile int NbTopsFan; // 测量信号的上升沿
int Calc;
int hallsensor = 2;    // 传感器的引脚位置

void rpm ()     // 这是中断调用的函数
{
    NbTopsFan++;  // 此函数测量霍尔效应传感器信号的上升和下降沿
}

// setup() 方法在草图启动时运行一次
void setup() //
{
    pinMode(hallsensor, INPUT); // 初始化数字引脚 2 为输入
    Serial.begin(9600); // 在此设置函数中初始化串行端口
    attachInterrupt(0, rpm, RISING); // 并附加中断
}

// loop() 方法会不断运行，只要 Arduino 有电
void loop ()
{
    NbTopsFan = 0;   // 将 NbTopsFan 设置为 0，为计算做好准备
    sei();      // 启用中断
    delay (1000);   // 等待 1 秒
    cli();      // 禁用中断
    Calc = (NbTopsFan * 60 / 5.5); // (脉冲频率 x 60) / 5.5Q = 流速（单位：升/小时）
    Serial.print (Calc, DEC); // 打印上面计算的数值
    Serial.print (" L/hour\r\n"); // 打印 "L/hour" 并换行
}
```

您可以参考我们的论坛了解更多关于[使用水流传感器读取水流速率](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632)的详细信息。

## 接线图

---
连接所使用的螺纹外径为 1.4mm。

![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/Wfs-wiring.jpg)

## 输出表格

---
水平测试中的脉冲频率 (Hz) = 5.5Q，Q 为流量，单位为 L/min。（结果范围为 +/- 3%）

<table>
  <tr>
    <td width="400px">输出脉冲高电平</td>
    <td width="400px">信号电压 &gt;4.5 V（输入 DC 5 V）</td>
  </tr>
  <tr>
    <td>输出脉冲低电平</td>
    <td>信号电压 &lt;0.5V（输入 DC 5V）</td>
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

![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/G34_Flow_rate_to_frequency.jpg)

## 常见问题

---
以下是传感器的常见问题解答，用户可以在这里找到关于此类产品的问题和答案。

**水流传感器的材料是什么？**

尼龙加纤维，避免强酸和强碱。

**水流传感器是否适用于饮用水？**

是的，它已经被用于饮水机。

## 资源

---

* [使用水流传感器读取水流量](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632)

* [在 LCD 上显示水流量](http://www.practicalarduino.com/projects/water-flow-gauge)

* [材料数据表](http://garden.seeedstudio.com/images/4/4e/YEE70G30HSLNC..pdf)

## 相关项目

---
很遗憾，我们在 [Recipe](https://www.seeedstudio.com/recipe/) 中还没有关于 G3/4 水流传感器的演示项目。

发布您关于 G3/4 水流传感器的精彩项目，<font color="#FF0000">赢取 $100 优惠券！</font> 请随时联系我们：[recipe@seeed.cc](mailto:recipe@seeed.cc)

这里我们介绍一些关于 [Grove-水传感器](https://www.seeedstudio.com/depot/Grove-Water-Sensor-p-748.html) 的项目。

### 什么是 Grove - 水传感器

![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/Twig-Water_Sensor.jpg)

这个水传感器模块是 Twig 系统的一部分。您可以使用模拟引脚检测水滴在接地和传感器迹线之间的接触量。

它的工作原理是通过一系列连接到地的暴露迹线，并在接地迹线之间交错排列传感器迹线。

传感器迹线具有一个 1 MΩ 的弱上拉电阻。电阻会将传感器迹线值拉高，直到一滴水将传感器迹线与接地迹线短路。

此电路可以与 Arduino 的数字 I/O 引脚一起工作。

### Arduino 植物守护者

![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/552c2c4f2e5a8.jpg)

此项目使用 Grove - 水传感器创建一个简单但有效的植物浇水解决方案。

工作原理：

* 在 OLED 屏幕上显示水传感器和温度传感器的读数

* 当水位低于阈值时发送警报并激活泵驱动器

* 通过 10 个 RGB LED 提供颜色变化

[**我想制作它。**](https://www.seeedstudio.com/recipe/102-arduino-plant-warden.html)

[**更多关于水传感器的精彩项目**](https://www.seeedstudio.com/recipe/index.php?query=water+sensor)

### 与我们分享您的精彩项目

我们秉承创造与分享的精神，这正是我们认为让创客社区充满活力的原因。

正因为如此，开源社区才能像今天这样繁荣。

无论您是谁，无论您制作了什么，黑客、创客、艺术家或工程师。

只要您开始与他人分享您的作品，您就成为了开源社区的一部分，并为社区做出了贡献。

现在将您的精彩项目与我们分享在 [Recipe](https://www.seeedstudio.com/recipe/) 上，并赢得成为 Seeed 核心用户的机会。

* 核心用户是那些对 Seeed 产品表现出高度兴趣并在 Recipe 上做出重要贡献的人。
* 我们与核心用户合作开发新产品，换句话说，核心用户将有机会在产品正式发布前体验 Seeed 的任何新产品，并且我们期待他们提供有价值的反馈，以帮助我们改进产品性能和用户体验。在大多数情况下，当核心用户有一些好的创意时，我们会提供硬件组件、PCBA 服务以及技术支持。此外，与核心用户进一步的商业合作也是非常可能的。

<font color="#FF0000">获取更多关于核心用户的信息，请发送邮件至：</font> [recipe@seeed.cc](mailto:recipe@seeed.cc)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>