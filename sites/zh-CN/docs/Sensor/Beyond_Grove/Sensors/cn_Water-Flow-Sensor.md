---
title: 水流传感器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Water-Flow-Sensor/
slug: /cn/Water-Flow-Sensor
last_update:
  date: 02/03/2022
  author: gunengyu
---

<div align="center">
  <figure>
    <img src="https://static-cdn.seeedstudio.site/media/catalog/product/cache/ab187aaa5f626ad16c8031644cd2de5b/h/t/httpsstatics3.seeedstudio.comseeedfile2017-06bazaar483771_1.jpg" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
    <figcaption><b /><i /></figcaption>
  </figure>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Water-Flow-Sensor-YF-B1-p-2878.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

水流传感器由铜制外壳、水转子和霍尔效应传感器组成。当水流通过转子时，转子旋转，其速度随不同的流量变化。而霍尔效应传感器输出相应的脉冲信号。这款传感器适用于检测饮水机或咖啡机中的水流量。**更重要的是，铜制传感器的使用寿命比塑料外壳的传感器更长。**

## 特性

- 紧凑，易于安装
- 高密封性能
- 高质量霍尔效应传感器
- 符合 RoHS 标准

## 规格

|参数|值|
|---|---|
|尺寸 |0mm x0mm x0mm|
|重量| G.W 79g|
|电池 |不包含|
|最低工作电压| DC 4.5V|
|最大工作电流| 15mA (DC 5V)|
|工作电压 |DC 5V~15V|
|接口尺寸| G1/2英寸|
|流量范围 |1~25L/min|
|频率 |F=(11*Q)Q=L/MIN±3%|
|误差范围 |(1~30L\MIN) ±3%|
|负载能力 |≤10mA (DC 5V)|
|工作温度| 0 ~ 80℃|
|液体温度 |≤120℃|
|工作湿度 |35%～90%RH|
|水压| ≤1.75MPa|
|材料描述 |H57铜+POM|
|存储温度 |-25～+ 80℃|
|存储湿度 |25%～95%RH|
|输出脉冲高电平 |&gt;DC 4.7V (输入电压 DC5V)|
|输出脉冲低电平 |&lt;DC 0.5V (输入电压 DC5V)|
|输出脉冲占空比| 50%±10%|

## 什么是水流传感器（流量计）

我们使用水流传感器来测量水流速率。水流速率是单位时间内通过的液体体积。人们通常使用水流传感器进行自动热水器控制、DIY咖啡机、水售卖机等。水流传感器有多种不同原理，但对于使用 Arduino 或 Raspberry Pi 的创客来说，最常见的流量传感器是基于霍尔器件的。例如，最经典的水流传感器 [YF-S402](https://www.seeedstudio.com/M11-1-25-Water-Flow-Sensor-p-1345.html) 和 [YF-S201](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-p-635.html) 都依赖霍尔传感器。

## 水流传感器如何工作

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/DSC03966-1030x686.jpg" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>图1</b>. <i>YF-402的所有组件</i></figcaption>
</figure>
</div>

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/how-does-water-flow-sensor-work-1030x599.jpg" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>图2</b>. <i>水流传感器工作原理</i></figcaption>
</figure>
</div>

内部结构非常简单。主要组件包括霍尔效应传感器、涡轮轮和磁铁。水从入口流入并从出口流出。水流驱动轮子旋转，轮子上的磁铁随之旋转。磁场的旋转触发霍尔传感器，输出高低电平的方波（脉冲）。

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/Water-flow-sensor-principle-1.gif" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>图3</b>. <i>水流传感器工作原理</i></figcaption>
</figure>
</div>

每转一圈，流过的水量是一定的，同时输出的方波数量也是一定的。因此，我们可以通过计算方波（脉冲）的数量来计算水流量。

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 入门指南

#### 所需材料

|Seeeduino开发板 |Grove 基础扩展板|水流传感器|
|--------------|--------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/Seeeduino_s.png)| ![enter image description here](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/base_shield.png)| ![enter image description here](https://files.seeedstudio.com/wiki/Water_Flow_Sensor/IMG/Water-Flow-Sensor.png)
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2.html)|[立即购买](https://www.seeedstudio.com/catalogsearch/result/?q=Water+flow+sensor)|

#### 硬件连接

对于 YF 系列传感器，有三根线：

- 红色用于 Vcc
- 黑色用于 GND
- 黄色用于脉冲输出

对于基于 Atmega 328 的开发板，例如 [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)，有两个数字引脚可以用作中断。数字引脚 2 用于 **中断 0**，数字引脚 3 用于 ***中断 1**。在本文中，我们使用 **D2** 引脚来检测水流传感器输出的脉冲。如果您使用的是 Seeeduino + [Grove 基础扩展板](https://www.seeedstudio.com/Base-Shield-V2.html)，只需将水流传感器插入 D2 接口即可。如果您使用其他 Arduino 开发板，请使用跳线连接到正确的引脚。

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/image-34.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>图 4</b>. <i>水流传感器与 Arduino 的连接</i></figcaption>
</figure>
</div>

:::tip
请轻轻插入 USB 线、水流传感器接口到 Seeeduino 开发板接口，否则可能会损坏端口。
:::

#### 软件

当然，您可以在 **LOOP** 函数中使用 digitalread() 来读取水流传感器的输出。每次读取到高电平时计数加一。然而，这种方法不是实时的，程序每次执行都需要一定的等待时间，在此期间无法检测到新的脉冲。对于这种实时性要求较高的应用，我们通常使用中断。每当检测到脉冲的上升沿时，就会触发中断，计数加一。

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/image-33.png" alt="Water-Flow-Sensor'' OUTCOME" title="demo" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

有关 **中断** 的更多详细信息，请查看 [attachinterrupt](https://www.arduino.cc/reference/en/language/functions/external-interrupts/attachinterrupt/)。

:::caution
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 将 Grove 基础扩展板与水流传感器插入 Seeeduino 开发板，并通过 USB 线将 Seeeduino 开发板连接到电脑。

- **步骤 2.** 然后打开 Arduino IDE 并复制以下代码。最后，将代码下载到 Arduino。

:::note
以下代码适用于 Seeed 的经典 YF – S201、YF - S402 和其他水流传感器，水流传感器的工作原理也是如此。
:::

#### 软件代码

```cpp
/*
YF‐ S201 水流传感器
水流传感器输出处理为以升/小时为单位读取
改编来源：www.hobbytronics.co.uk
*/

volatile int flow_frequency; // 测量流量传感器脉冲

int l_hour; // 计算的升/小时
unsigned char flowsensor = 2; // 传感器输入
unsigned long currentTime;
unsigned long cloopTime;

void flow () // 中断函数

{
   flow_frequency++;
}

   void setup()
 {
   pinMode(flowsensor, INPUT);
   digitalWrite(flowsensor, HIGH); // 可选内部上拉
   Serial.begin(9600);
   attachInterrupt(0, flow, RISING); // 设置中断
   sei(); // 启用中断
   currentTime = millis();
   cloopTime = currentTime;
}

   void loop ()
{
   currentTime = millis();// 每秒计算并打印升/小时
   if(currentTime >= (cloopTime + 1000))
   {
      cloopTime = currentTime; // 更新 cloopTime
      // 脉冲频率 (Hz) = 7.5Q，Q 是流量，单位为升/分钟。
      l_hour = (flow_frequency * 60 / 7.5); // (脉冲频率 x 60 分钟) / 7.5Q = 流量，单位为升/小时
      flow_frequency = 0; // 重置计数器
      Serial.print(l_hour, DEC); // 打印升/小时
      Serial.println(" L/hour");
   }
}
```

:::tip
如果一切正常，打开串口监视工具并将波特率设置为 9600。当水流通过时，流量值将打印到相应的窗口。
:::

## 水流传感器计算公式

在代码部分，我们使用了以下公式，那么这个公式是如何得出的呢？

```cpp
l_hour = (flow_frequency * 60 / 7.5)
```

之前我们提到过，每当叶轮旋转一圈，流过的液体体积是一定的。同时，每圈旋转产生的脉冲数也是固定的。因此，我们可以在脉冲数和水流量之间建立一个方程。

对于 YF-S201，每流过一升水，霍尔传感器输出 450 个脉冲。让我们做一些简单的数学计算。450 个脉冲对应 1 升水，因此每个脉冲表示 1/450 升水流过。我们将某一时间段 **t**（单位：秒）内流过水流传感器的液体总量记为 **V_total**（单位：升），检测到的脉冲总数记为 **N**。那么我们得到：

```cpp
V_total(L) = N * 1/450(L)
```

同时，流过水流传感器的液体总量等于 **水流速率(Q - 单位：L/s)** 乘以时间 **t**（单位：秒）。

```cpp
V_total(L) = Q(L/s) * t(s)
```

因此我们得到：

```cpp
N * 1/450 = Q(L/s) * t(s)
N/t = 450 * Q(L/s)
```

**N/t** 恰好是频率 **f**，所以：

```cpp
f = 450 * Q(L/s)
Q(L/s) = f / 450
Q(L/min) = f * 60 / 450 = f / 7.5
Q(L/hour) = f * 60 * 60 / 450 = f * 60 / 7.5
```

对于 YF-S402，每流过一升水，霍尔传感器输出 4380 个脉冲。因此公式应为：

```cpp
f = 4380 * Q(L/s)
Q(L/s) = f / 4380
Q(L/min) = f * 60 / 4380 = f / 73
Q(L/hour) = f * 60 * 60 / 4380 = f * 60 / 73
```

## Seeed 的水流传感器

:::tip
Seeed 提供多种水流传感器，包括 [YF-402](https://www.seeedstudio.com/M11-1-25-Water-Flow-Sensor-p-1345.html) 和 [YF-S201](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-p-635.html)。此外，我们还提供各种尺寸、检测范围、材质等不同规格的水流传感器，如下所示：
:::

|   类型   | 尺寸(DN) | 工作电压 | 流量范围 | 长度 |    公母接口    | 螺纹长度 | 材质 |
|:--------:|:--------:|:--------:|:--------:|:----:|:-------------:|:--------:|:----:|
|   [YF-B1](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B1-p-2878.html)  |   DN15   |  5V~15V(DC)  |  1~25L/min  |  44mm  |   双公接口   |   10mm   | 铜 |
|   [YF-B2](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B2-p-2879.html)  |   DN15   |  5V~15V(DC)  |  1~25L/min  |  50mm  | 公进母出接口 |   10mm   | 铜 |
|   [YF-B3](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B3-p-2880.html)  |   DN15   |  5V~15V(DC)  |  1~25L/min  |  66mm  |   双公接口   |   18mm   | 铜 |
|   [YF-B4](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B4-p-2881.html)  |   DN15   |  5V~15V(DC)  |  1~25L/min  |  66mm  | 公进母出接口 |   10mm   | 铜 |
|   [YF-B5](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B5-p-2882.html)  |   DN20   |  5V~15V(DC)  |  1~30L/min  |  50mm  |   双公接口   |   10mm   | 铜 |
|   [YF-B6](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B6-p-2883.html)  |   DN20   |  5V~15V(DC)  |  1~30L/min  |  60mm  |   双公接口   |   11mm   | 铜 |
|   [YF-B7](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B7-p-2884.html)  |   DN15   |  5V~15V(DC)  |  1~25L/min  |  66mm  |   双公接口   |   10mm   | 铜 |
|   [G1&2](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-Enclosure-p-1915.html)   |   DN15   |  5V~24V(DC)  |  1~30L/min  |   -    |   双公接口   |    -     | 塑料 |
|   [G3&4](https://www.seeedstudio.com/G3-4-Water-Flow-Sensor-p-1083.html)   |   DN20   |  5V~24V(DC)  |  1~60L/min  |   -    |   双公接口   |    -     | 塑料 |
|   [G1&2](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-p-635.html)   |   DN15   |  5V~24V(DC)  |  1~30L/min  |  60mm  |   双公接口   |   13mm   | 塑料 |
|   [G1&8](https://www.seeedstudio.com/G1-8-Water-Flow-Sensor-p-1346.html)   |    -     |  5V~24V(DC)  | 0.3~6L/min  |   -    |      -       |    -     | 塑料 |
| [M11*1.25](https://www.seeedstudio.com/M11-1-25-Water-Flow-Sensor-p-1345.html) |    -     |  5V~24V(DC)  | 0.3~6L/min  |   -    |      -       |    -     | 塑料 |

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