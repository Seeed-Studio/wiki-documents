---
description: Grove - ±5A 直流/交流电流传感器（ACS70331）
title: Grove - ±5A 直流/交流电流传感器（ACS70331）
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-5A_DC_AC_Current_Sensor-ACS70331
last_update:
  date: 03/21/2024
  author: WuFeifei
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/101020615-preview.png" /></div>

Grove - ±5A DC/AC 电流传感器（ACS70331）是一款基于ACS70331的高精度DC/AC电流传感器。ACS70331EESATR-005B3是Allegro公司针对小于5A的电流感应应用推出的一款高灵敏度电流传感器IC。它集成了巨磁阻（GMR）技术，这种技术比传统的霍尔效应传感器对通过低电阻集成初级导体的电流产生的磁场敏感25倍。

Grove - ±5A DC/AC 电流传感器（ACS70331）可以测量高达5A的直流电流和交流电流，其基本灵敏度为200mV/A。

:::提示
在以下的**[资源](https://yiyan.baidu.com/#jump)**部分，我们提供了一份关于电流的测量数据表，供您参考。
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特点

- 支持直流和交流负载
- 带宽1 MHz，响应时间<550 ns
- 低噪声：在1 MHz时为8 mA（rms）
- 初级导体电阻为1.1 mΩ，导致低功率损耗
- 高直流电源抑制比（PSRR），可使用低精度电源或电池（工作电压3至4.5 V）
- 模拟输出

## 规格

|参数|值|
|---|---|
|供电电压|3.3V / 5V|
|工作环境温度| -40 – 85℃|
|存储温度|- 65°C – 125°C|
|工作电压|<100V|
|电流感应范围|0 – 5A|
|灵敏度|200mV/A(典型值)|
|输出接口|Grove 模拟接口|
|输入接口|螺丝端子|

## 工作原理

电流感应主要有两种类型：直接感应和间接感应。分类主要基于用于测量电流的技术。

**直接感应：**

- 欧姆定律

**间接感应：**

- 法拉第电磁感应定律
- 磁场传感器
- 法拉第效应

Grove - ±5A DC/AC 电流传感器（ACS70331）采用了磁场传感器技术。磁场传感器技术主要有三种：

- 霍尔效应
- 磁通门传感器
- 巨磁阻电流传感器

Grove - ±5A DC/AC 电流传感器（ACS70331）基于巨磁阻电流传感器原理，也被称为GMR。巨磁阻（MR）是一个两端设备，其电阻会随着外加磁场的改变而呈抛物线变化。这种由于磁场导致的MR电阻变化被称为巨磁阻效应。

ACS70331 QFN封装的内部结构如图2所示。芯片位于主电流路径之上，以便在芯片上的GMR元件平面内产生磁场。对于正向IP电流流动，GMR元件1和2感应+X方向的磁场，而GMR元件3和4感应-X方向的磁场。这使得能够对电流进行差分测量，并抑制外部杂散磁场。

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle1.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle1.jpg" /></a></p>
  <figcaption><b>图 1</b>. <i>ACS70331 内部结构</i></figcaption>
</figure>
</div>


如图2所示，四个GMR元件采用惠斯通电桥配置进行排列，使得电桥的输出与四个元件感应到的差分磁场成正比，从而抑制公共磁场。

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle2.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle2.jpg" /></a></p>
  <figcaption><b>Figure 2</b>. <i>惠斯通电桥配置</i></figcaption>
</figure>
</div>


## 硬件概述

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/pinout.jpg" /></a></p>
  <figcaption><b>图 3</b>. <i>引脚配置</i></figcaption>
</figure>
</div>


## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div> |

## 入门指南

:::警示危险
测试过程中禁止人体接触模块，否则有触电危险。
:::

### 与Arduino配合使用

**所需材料**

| Seeeduino V4.2 | 基础扩展板 | ±5A DC/AC 电流传感器 (ACS70331) |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/thumbnail.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html)|

>此外，您还可以考虑我们新推出的[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它相当于Seeeduino V4.2和Baseshield的组合。

:::注意
**1** 请轻轻插入USB电缆，否则可能会损坏端口。请使用内部有4根线的USB电缆，2根线的电缆无法传输数据。如果您不确定自己手头的电缆是否符合要求，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买。

**2** 您购买每个Grove模块时都会附带一根Grove电缆。如果您丢失了Grove电缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-(5-PCs-pack)-p-936.html)购买。
:::

#### 直流演示

##### 硬件连接

- **步骤 1.** 将 Grove - ±5A DC/AC 电流传感器（ACS70331）连接到基础扩展板的 **A0** 端口。

- **步骤 2.** 将待测试电路的正极和负极连接到螺丝端子的对应正负极。

:::提示
如果正负极接反，读数将会相反。这个传感器在使用前需要进行校准，所以请不要先给电路通电。
:::

- **步骤 3.** 将 Grove - 基础扩展板插入 Seeeduino。

- **步骤 4.** 通过 USB 电缆将 Seeeduino 连接到电脑。

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/101020615-connect.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/101020615-connect.png" /></a></p>
  <figcaption><b>图 4</b>. <i>在本演示中，我们使用直流电源，请将电流设置为0A或首先不要给其通电</i></figcaption>
</figure>
</div>


##### 软件

:::警告
如果您是第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从Github下载[Grove电流传感器](https://github.com/Seeed-Studio/Grove_Current_Sensor)库。

- **步骤 2.** 在/example/文件夹中，您可以找到演示代码。这里我们以[Grove - ±5A DC/AC 电流传感器（ACS70331）](https://github.com/Seeed-Studio/Grove_Current_Sensor/blob/master/examples/Grove_5A_DC_Current_Sensor/Grove_5A_DC_Current_Sensor.ino)为例。只需点击**Grove_5A_DC_Current_Sensor.ino**打开演示代码。或者您也可以复制以下代码：

```cpp
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define RefVal 3.3
  #define SERIAL SerialUSB
#else
  #define RefVal 5.0
  #define SERIAL Serial
#endif
//An OLED Display is required here
//use pin A0
#define Pin A5

// Take the average of 500 times

const int averageValue = 500;

long int sensorValue = 0;

float sensitivity = 1000.0 / 200.0; //1000mA per 200mV 


float Vref = 1508;

void setup() 
{
  SERIAL.begin(9600);
}

void loop() 
{
  // Read the value 500 times:
  for (int i = 0; i < averageValue; i++)
  {
    sensorValue += analogRead(Pin);

    // wait 2 milliseconds before the next loop
    delay(2);

  }

  sensorValue = sensorValue / averageValue;
 

  // The on-board ADC is 10-bits 
  // Different power supply will lead to different reference sources
  // example: 2^10 = 1024 -> 5V / 1024 ~= 4.88mV
  //          unitValue= 5.0 / 1024.0*1000 ;
  float unitValue= RefVal / 1024.0*1000 ;
  float voltage = unitValue * sensorValue; 

  //When no load,Vref=initialValue
  SERIAL.print("initialValue: ");
  SERIAL.print(voltage);
  SERIAL.println("mV"); 
  
  // Calculate the corresponding current
  float current = (voltage - Vref) * sensitivity;

  // Print display voltage (mV)
  // This voltage is the pin voltage corresponding to the current
  /*
  voltage = unitValue * sensorValue-Vref;
  SERIAL.print(voltage);
  SERIAL.println("mV");
  */

  // Print display current (mA)
  SERIAL.print(current);
  SERIAL.println("mA");
   
  SERIAL.print("\n");

  // Reset the sensorValue for the next reading
  sensorValue = 0;
  // Read it once per second
  delay(1000);
}

```

- **步骤 3.** 上传演示代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

- **步骤 4.** 通过点击**工具->串口监视器**打开Arduino IDE的**串口监视器**。或者同时按下++ctrl+shift+m++键。将波特率设置为**9600**。
- **步骤 5. 校准**
    当没有电流流过时，传感器仍然会有一个输出值。我们称这个值为**零偏移**。

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/ca1.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/ca1.jpg" /></a></p>
  <figcaption><b>图 5</b>. <i>该板的零偏移为595.70mV，转换为电流是-4561.48mA</i></figcaption>
</figure>
</div>

由于存在零偏移，即使没有电流，传感器也会有读数。因此，我们设置了一个参数**Vref**来修正它，您可以在上面的代码块中找到它。

第32行：

```cpp
float Vref = 1508; 
//Vref is zero drift value, you need to change this value to the value you actually measured before using it.
```

在演示代码中，我们将Vref设置为1508，但是，每块板的零偏移值都不同。如您所知，我们在本次演示中使用的板的零偏移值为595.70。因此，让我们修改第21行：

```cpp
float Vref = 595.70;
```

然后保存代码并再次上传代码，按照步骤2和步骤3操作。现在让我们来看看：

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/ca2.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/ca2.jpg" /></a></p>
  <figcaption><b>图 6</b>. <i>现在电流零偏移变为0.02mA</i></figcaption>
</figure>
</div>


当电流输出变为0mA或较小的值时，您已经完成了校准。

- **步骤 6.** 现在都准备好了，您可以给电路通电了。请随意使用，记住这是一个5A电流传感器，电流不能超过5A！

如果您想知道结果的计算公式，请参考[常见问题解答 Q1](https://yiyan.baidu.com/#faq)

#### AC 演示

:::警示危险
当您使用交流电源时，请注意安全，避免触电。
:::

对于硬件连接和校准部分，请参考[DC 演示](https://yiyan.baidu.com/#dc-demo)，唯一的区别是代码。请使用以下代码进行交流负载测试。

```cpp
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define RefVal 3.3
  #define SERIAL SerialUSB
#else
  #define RefVal 5.0
  #define SERIAL Serial
#endif
//An OLED Display is required here
//use pin A0
#define Pin A5

// Take the average of 500 times

const int averageValue = 500;

long int sensorValue = 0;

float sensitivity = 1000.0 / 200.0; //1000mA per 200mV 


//float Vref = 244;
float Vref = 1494;

void setup() 
{
  SERIAL.begin(9600);
}
static float tempval;
void loop() 
{

  // Read the value 500 times:
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
  // The on-board ADC is 10-bits 
  // Different power supply will lead to different reference sources
  // example: 2^10 = 1024 -> 5V / 1024 ~= 4.88mV
  //          unitValue= 5.0 / 1024.0*1000 ;
  float unitValue= RefVal / 1024.0*1000 ;
  float voltage = unitValue * sensorValue; 

  //When no load,Vref=initialValue
  SERIAL.print("initialValue: ");
  SERIAL.print(voltage);
  SERIAL.println("mV"); 
  
  // Calculate the corresponding current
  float current = ((voltage - Vref) * sensitivity)*0.707;

  // Print display voltage (mV)
  // This voltage is the pin voltage corresponding to the current
  
  voltage = unitValue * sensorValue-Vref;
  SERIAL.print(voltage);
  SERIAL.println("mV");
  

  // Print display current (mA)
  SERIAL.print("current: ")
  SERIAL.print(current);
  SERIAL.println("mA");
   
  SERIAL.print("\n");


  // Reset the sensorValue for the next reading
  sensorValue = 0;

  // Read it once per second
  delay(1000);
}

```

## 常见问题解答

**Q1#** 电流的计算公式是什么？

**A1:** 如果您觉得[工作原理部分](https://yiyan.baidu.com/#working-principle)很复杂，让我们用更简单的方式来解释。待测试电路中的电流激发磁场，这导致GMR元件的阻值发生变化。桥接中阻值的变化会导致芯片输出电压的变化。我们称该输出电压为**V<sub>IOUT</sub>**。

<div><p style={{textAlign: 'center'}}>
  V<sub>IOUT</sub> = Sens × I<sub>p</sub> + V<sub>IOUT(Q)</sub>
</p></div>

> **Sens**: Sens is the coefficient that converts the current into an output voltage. For this module it is 200mA/V.  
> **I<sub>p</sub>**: I<sub>p</sub> is the current value in the circuit to be tested, Unit mA.  
> **V<sub>IOUT(Q)</sub>**: V<sub>IOUT(Q)</sub> is the voltage output when the I<sub>p</sub> is 0mA(which means there is no current in the circuit to be tested), Unit mV.

下面是电流值的计算：

<div><p style={{textAlign: 'center'}}>
  I<sub>p</sub> = (V<sub>IOUT</sub> - V<sub>IOUT(Q)</sub>) / Sens
</p></div>
现在，让我们回顾一下图5，我们将解释为什么待测试电路中的实际电流值为0时，输出电流值不为0。如图5所示，**initialValue**为595.70mV，这是**V<sub>IOUT</sub>**；电流值为-4561.48mA，这是**I<sub>p</sub>**。至于**V<sub>IOUT(Q)</sub>**，它是我们在代码中设置的**Vref**。
在图5中，Vref的值为1508。而**Sens**为200mA/V，即200mA/1000mV。现在，让我们来做一些计算：

<div><p style={{textAlign: 'center'}}>
  {'{'}(595.70mV-1508mV ) / (200mA/1000mV){'}'} = -4561.50mA
</p></div>

因此，在图6中，当我们将**Vref**设置为595.70时**，Ip**变为0mA。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/res/5A%20DCAC%20Current%20Sensor(ACS70331)%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove - ±5A DC/AC 电流传感器 (ACS70331) 原理图文件](https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/res/5A%20DCAC%20Current%20Sensor(ACS70331)%20v1.0.zip)
- **[PDF]** [ACS70331 数据手册](https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/res/Current_Sensor_ACS70331.pdf)
- **[PDF]** [测量数据](https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/res/Grove_±5A_DCAC_Current_Sensor_v1.1_measurement_data_20231214.xls)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供各种支持，以确保您使用我们的产品时体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
