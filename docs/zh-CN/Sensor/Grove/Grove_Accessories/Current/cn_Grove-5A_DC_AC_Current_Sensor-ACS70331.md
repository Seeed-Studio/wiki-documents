---
description: Grove - ±5A DC/AC 电流传感器 (ACS70331)
title: Grove - ±5A DC/AC 电流传感器 (ACS70331)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-5A_DC_AC_Current_Sensor-ACS70331
last_update:
  date: 1/9/2023
  author: jianjing Huang
---

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/101020615-preview.png" /></div>

Grove - ±5A DC/AC 电流传感器 (ACS70331) 是基于 ACS70331 的高精度 DC/AC 电流传感器。ACS70331EESATR-005B3 是 Allegro 的高灵敏度电流传感器 IC，适用于小于 5A 的电流检测应用。它采用巨磁阻 (GMR) 技术，比传统霍尔效应传感器灵敏度高 25 倍，用于检测通过低电阻集成主导体的电流所产生的磁场。

Grove - ±5A DC/AC 电流传感器 (ACS70331) 可测量高达 5A 的直流电流和交流电流，基础灵敏度为 200mV/A。

:::tip
在下面的 **[资源](#jump)** 部分中有一个关于电流的测量数据表供参考。
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 支持直流和交流负载
- 1 MHz 带宽，响应时间小于 550 ns
- 低噪声：1 MHz 时为 8 mA(rms)
- 1.1 mΩ 主导体电阻，功耗低
- 高 DC PSRR，可与低精度电源或电池一起使用（3 至 4.5 V 工作）
- 模拟输出

## 规格

|参数|值|
|---|---|
|供电电压|3.3V / 5V|
|工作环境温度| -40 – 85℃|
|存储温度|- 65°C – 125°C|
|工作电压|&lt;100V|
|电流检测范围|0 – 5A|
|灵敏度|200mV/A(典型值)|
|输出接口|Grove 模拟|
|输入接口|螺丝端子|

## 工作原理

电流检测有两种类型：直接检测和间接检测。分类主要基于用于测量电流的技术。

**直接检测：**

- 欧姆定律

**间接检测：**

- 法拉第电磁感应定律
- 磁场传感器
- 法拉第效应

Grove - ±5A DC/AC 电流传感器 (ACS70331) 使用磁场传感器技术。磁场传感器技术有三种类型：

- 霍尔效应
- 磁通门传感器
- 磁阻电流传感器

Grove - ±5A DC/AC 电流传感器 (ACS70331) 基于磁阻电流传感器原理，也称为 GMR。磁阻器 (MR) 是一种两端设备，其电阻会随着施加的磁场呈抛物线变化。这种由于磁场导致 MR 电阻变化的现象称为磁阻效应。

ACS70331 QFN 封装的内部结构如图 1 所示。芯片位于主电流路径上方，使得磁场与芯片上的 GMR 元件平面一致。GMR 元件 1 和 2 在正 IP 电流流动时检测 +X 方向的磁场，GMR 元件 3 和 4 在正 IP 电流流动时检测 -X 方向的磁场。这使得能够对电流进行差分测量并排除外部杂散磁场。

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle1.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle1.jpg" /></a></p>
  <figcaption><b>图 1</b>. <i>ACS70331 内部结构</i></figcaption>
</figure>
</div>

四个 GMR 元件以惠斯通电桥配置排列，如图 2 所示，使得电桥输出与四个元件检测到的差分磁场成正比，从而排除公共磁场。

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle2.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle2.jpg" /></a></p>
  <figcaption><b>图 2</b>. <i>惠斯通电桥配置</i></figcaption>
</figure>
</div>

## 硬件概览

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/pinout.jpg" /></a></p>
  <figcaption><b>图 3</b>. <i>引脚图</i></figcaption>
</figure>
</div>

## 支持的平台

| Arduino                                                                                             | 树莓派                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## 入门指南

:::caution
测试过程中禁止人体接触模块，否则可能有触电危险。
:::

### 使用 Arduino

**所需材料**

| Seeeduino V4.2 | Base Shield | ±5A DC/AC 电流传感器 (ACS70331)|
|--------------|-------------|-----------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/thumbnail.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html)|

>此外，您可以考虑我们的新产品 [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它相当于 Seeeduino V4.2 和 Base Shield 的组合。

:::note
**1** 请轻轻插入 USB 线缆，否则可能损坏接口。请使用内部有 4 根线的 USB 线缆，只有 2 根线的线缆无法传输数据。如果您不确定手头的线缆，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

**2** 每个 Grove 模块在购买时都会附带一根 Grove 线缆。如果您丢失了 Grove 线缆，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

#### 直流演示

##### 硬件连接

- **步骤 1.** 将 Grove - ±5A DC/AC 电流传感器 (ACS70331) 连接到 Base Shield 的 **A0** 端口。

- **步骤 2.** 将待测电路的正负极连接到螺丝端子的对应正负极。

:::tip
如果正负极接反，读数将会反转。此传感器在使用前需要校准，因此请不要先给电路通电。
:::

- **步骤 3.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 4.** 使用 USB 线缆将 Seeeduino 连接到电脑。

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/101020615-connect.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/101020615-connect.png" /></a></p>
  <figcaption><b>图 4</b>. <i>在本演示中我们使用直流电源，请将电流设置为 0A 或者不要先通电</i></figcaption>
</figure>
</div>

##### 软件

:::caution
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [Grove Current Sensor](https://github.com/Seeed-Studio/Grove_Current_Sensor) 库。

- **步骤 2.** 在 /example/ 文件夹中，您可以找到示例代码。这里我们以 [Grove - ±5A DC/AC Current Sensor (ACS70331)](https://github.com/Seeed-Studio/Grove_Current_Sensor/blob/master/examples/Grove_5A_DC_Current_Sensor/Grove_5A_DC_Current_Sensor.ino) 为例。只需点击 **Grove_5A_DC_Current_Sensor.ino** 打开示例代码。或者您可以复制以下代码：

```cpp
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define RefVal 3.3
  #define SERIAL SerialUSB
#else
  #define RefVal 5.0
  #define SERIAL Serial
#endif
// 需要一个 OLED 显示屏
// 使用 A0 引脚
#define Pin A5

// 取 500 次的平均值

const int averageValue = 500;

long int sensorValue = 0;

float sensitivity = 1000.0 / 200.0; // 每 200mV 对应 1000mA 


float Vref = 1508;

void setup() 
{
  SERIAL.begin(9600);
}

void loop() 
{
  // 读取 500 次的值：
  for (int i = 0; i < averageValue; i++)
  {
    sensorValue += analogRead(Pin);

    // 在下一次循环前等待 2 毫秒
    delay(2);

  }

  sensorValue = sensorValue / averageValue;
 

  // 板载 ADC 为 10 位
  // 不同的电源会导致不同的参考源
  // 示例：2^10 = 1024 -> 5V / 1024 ~= 4.88mV
  //          unitValue= 5.0 / 1024.0*1000 ;
  float unitValue= RefVal / 1024.0*1000 ;
  float voltage = unitValue * sensorValue; 

  // 无负载时，Vref=初始值
  SERIAL.print("initialValue: ");
  SERIAL.print(voltage);
  SERIAL.println("mV"); 
  
  // 计算对应的电流
  float current = (voltage - Vref) * sensitivity;

  // 打印显示电压 (mV)
  // 该电压是对应电流的引脚电压
  /*
  voltage = unitValue * sensorValue-Vref;
  SERIAL.print(voltage);
  SERIAL.println("mV");
  */

  // 打印显示电流 (mA)
  SERIAL.print(current);
  SERIAL.println("mA");
   
  SERIAL.print("\n");

  // 重置 sensorValue 以便下一次读取
  sensorValue = 0;
  // 每秒读取一次
  delay(1000);
}

```

- **步骤 3.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 4.** 打开 Arduino IDE 的 **串行监视器**，点击 **工具->串行监视器**，或者同时按下 `ctrl`+`shift`+`m` 键。将波特率设置为 **9600**。

- **步骤 5. 校准**  
        当没有电流流动时，传感器仍然会有一个小的输出值。我们称这个值为 **零偏移**。

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/ca1.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/ca1.jpg" /></a></p>
  <figcaption><b>图 5</b>. <i>此板的零偏移为 595.70mV，转换为电流为 -4561.48mA</i></figcaption>
</figure>
</div>

由于存在零偏移，当没有电流时传感器也会有读数。因此我们设置了一个参数 **Vref** 来修正它，您可以在上面的代码块中找到它。

第 21 行：

```cpp
float Vref = 1508;  
//Vref 是零漂移值，您需要在使用之前将此值更改为您实际测量的值。
```

在示例代码中，我们将 Vref 设置为 1508，但零偏移值因板而异。如您所知，我们在此示例中使用的板的零偏移值为 595.70。因此我们修改第 21 行：

```cpp
float Vref = 596;  
//Vref 是零漂移值，您需要在使用之前将此值更改为您实际测量的值。
```

现在上传修改后的代码并检查结果：

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/ca2.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/ca2.jpg" /></a></p>
  <figcaption><b>图 6</b>. <i>现在电流零偏移变为 0.02mA</i></figcaption>
</figure>
</div>

当电流输出变为 0mA 或一个很小的值时，您已经完成了校准。

- **步骤 6.** 现在一切准备就绪，您可以开始供电了。请随意使用它，记住这是一个 5A 电流传感器，电流不能超过 5A！  

如果您想了解结果的计算公式，请参考 [FAQ Q1](#faq)

#### 交流电示例

:::caution
使用交流电时，请注意安全，避免触电。
:::

关于硬件连接和校准部分，请参考 [直流电示例](#dc-demo)，唯一的区别是代码。请使用以下代码用于交流负载。

```cpp
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define RefVal 3.3
  #define SERIAL SerialUSB
#else
  #define RefVal 5.0
  #define SERIAL Serial
#endif
//需要一个 OLED 显示屏
//使用引脚 A0
#define Pin A5

// 取 500 次平均值

const int averageValue = 500;

long int sensorValue = 0;

float sensitivity = 1000.0 / 200.0; //1000mA 每 200mV 


//float Vref = 244;
float Vref = 1494;

void setup() 
{
  SERIAL.begin(9600);
}
static float tempval;
void loop() 
{

  // 读取 500 次值：
  for(int i=0;i<20;i++)
  {

  for (int i = 0; i < averageValue; i++)
  {
    int temp;
    temp= analogRead(Pin);
    if(temp>sensorValue)
    {
        sensorValue=temp;
    }
    delayMicroseconds(40);
  }
  tempval+=sensorValue;
  }

  sensorValue=tempval/20.0;
  tempval=0;
  // 板载 ADC 是 10 位
  // 不同的电源会导致不同的参考源
  // 示例：2^10 = 1024 -> 5V / 1024 ~= 4.88mV
  //          unitValue= 5.0 / 1024.0*1000 ;
  float unitValue= RefVal / 1024.0*1000 ;
  float voltage = unitValue * sensorValue; 

  //当没有负载时，Vref=初始值
  SERIAL.print("initialValue: ");
  SERIAL.print(voltage);
  SERIAL.println("mV"); 
  
  // 计算对应的电流
  float current = ((voltage - Vref) * sensitivity)*0.707;

  // 打印显示电压 (mV)
  // 此电压是对应电流的引脚电压
  
  voltage = unitValue * sensorValue-Vref;
  SERIAL.print(voltage);
  SERIAL.println("mV");
  

  // 打印显示电流 (mA)
  SERIAL.print("current: ")
  SERIAL.print(current);
  SERIAL.println("mA");
   
  SERIAL.print("\n");


  // 重置 sensorValue 为下一次读取
  sensorValue = 0;

  // 每秒读取一次
  delay(1000);
}

```

## 常见问题解答 (FAQ)

**Q1#** 当前的计算公式是什么？

**A1:** 如果您觉得[工作原理部分](#working-principle)非常复杂，我们可以用一种简单的方式来解释。被测电路中的电流会激发磁场，从而导致 GMR 元件的电阻值发生变化。而桥路中的电阻变化会引起芯片输出电压的变化。我们将该电压输出称为 **V<sub>IOUT</sub>**。

<div><p style={{textAlign: 'center'}}>
  V<sub>IOUT</sub> = Sens × I<sub>p</sub> + V<sub>IOUT(Q)</sub>
</p></div>

> **Sens**: Sens 是将电流转换为输出电压的系数。对于该模块，其值为 200mA/V。  
> **I<sub>p</sub>**: I<sub>p</sub> 是被测电路中的电流值，单位为 mA。  
> **V<sub>IOUT(Q)</sub>**: V<sub>IOUT(Q)</sub> 是当 I<sub>p</sub> 为 0mA（即被测电路中没有电流）时的电压输出，单位为 mV。

以下是电流值的计算公式：  

<div><p style={{textAlign: 'center'}}>
  I<sub>p</sub> = (V<sub>IOUT</sub> - V<sub>IOUT(Q)</sub>) / Sens
</p></div>

现在，让我们回顾图 5，我们将解释为什么当被测电路中的实际电流值为 0 时，输出的电流值却不是 0。如图 5 所示，**initialValue** 是 595.70mV，即 **V<sub>IOUT</sub>**；电流是 -4561.48mA，即 **I<sub>p</sub>**。至于 **V<sub>IOUT(Q)</sub>**，它是我们在代码中设置的 **Vref**。  
在图 5 中，其值为 1508。而 **Sens** 是 200mA/V，即 200mA/1000mV。现在，进行一些数学计算：

<div><p style={{textAlign: 'center'}}>
  {'{'}(595.70mV-1508mV ) / (200mA/1000mV){'}'} = -4561.50mA
</p></div>

因此，在图 6 中，当我们将 **Vref** 设置为 595.70 时，**Ip** 变为 0mA。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/res/5A%20DCAC%20Current%20Sensor(ACS70331)%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## <span id="jump">资源</span>

- **[ZIP]** [Grove - ±5A DC/AC 电流传感器 (ACS70331) 原理图文件](https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/res/5A%20DCAC%20Current%20Sensor(ACS70331)%20v1.0.zip)
- **[PDF]** [ACS70331 数据手册](https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/res/Current_Sensor_ACS70331.pdf)
- **[PDF]** [测量数据](https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/res/Grove_±5A_DCAC_Current_Sensor_v1.1_measurement_data_20231214.xls)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您在使用我们的产品时获得顺畅的体验。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>