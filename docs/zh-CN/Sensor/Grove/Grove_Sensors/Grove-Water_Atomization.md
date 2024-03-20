---
description: Grove - Water Atomization
title: Grove - Water Atomization
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Water_Atomization
last_update:
  date: 2/1/2023
  author: Matthew
---

<!-- ---
name: Grove - Water Atomization
category: Actuator
bzurl: https://seeedstudio.com/Grove-Water-Atomization-v1.0-p-2542.html
oldwikiname: Grove_-_Water_Atomization
prodimagename: Water_Atomization_product_1200.jpg
wikiurl: http://wiki.seeedstudio.com/cn/Grove-Water_Atomization
sku: 101020090
tags: grove_digital, io_5v, plat_duino
--- -->



![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_product_1200.jpg)

Grove - Water Atomization 是一个优秀的 Grove 模块，通过它您可以轻松地在您的应用中开发雾化器或雾化器模块。通过几个简单的步骤就可以对雾化器进行原型化。它具有 Grove 接口，使其方便大规模应用。加湿器是可以构建的基本应用，您可以通过使用数字气味技术和其他基于雾化的技术开发更先进和有趣的项目。

[![](https://files.seeedstudio.com/wiki/wiki_chinese/docs/images/click_to_buy.PNG)](https://item.taobao.com/item.htm?spm=a230r.1.14.15.4d11ba7cm9BTVl&id=531586572094&ns=1&abbucket=1#detail)

## 产品特性
--------

-   超声波加热。
-   易于为新应用原型化。
-   适用于广泛的应用。
-   适用于各种有趣，智能和时尚的应用。

<!-- !!!Tip
    关于 Grove 模块的更多信息请点击 [Grove System](http://wiki.seeedstudio.com/cn/Grove_System/) -->

## 创意应用
-----------------

-   加湿器。
-   在不同情况下散发气体。
-   智能家居。
-   用于消费电子产品的智能对象。

## 规格参数
--------------

| 参数            | 值          |
|----------------------|----------------|
| 工作电压    | 5.0V(DC)       |
| 涟波(最大功率下) | ≤100 mV        |
| 最大功率            | 2W             |
| 峰值输出电压  | 65±5V          |
| 工作频率  | 105±5kHz       |
| 芯片                | ETA1617, NE555 |

## Platforms Supported
-------------------

## 硬件概述
-----------------

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_overview_1200.jpg)

**Grove 接口**   
连接主控板如 Seeeduino 板与驱动板。

**转接器接口**   
将超声波转接器连接到驱动板。

**Grove 线缆**   
将主控板与驱动板连接。

### **产品清单**

| 零件名                  | 数量 |
|-----------------------------|----------|
| 驱动板                | 1PC      |
| Grove 线缆                  | 1PC      |
| 超声波转接器板 | 1PC      |

## 入门指导
-----------

### **需要的素材**

Seeeduino v4.2 x 1

Grove - Base shield v2 x 1

Grove - 线缆 x 1

### **准备工作**

请参阅以下指南来构建适当的 IDE :

<div class="admonition note">
<p class="admonition-title">Note</p>
在这种情况下，我们选择了 Seeeduino。
</div>

[Windows 系统入门指导](/Seeeduino_v4.2#Getting_Started_on_Windows)

[Mac OS X 系统入门指导](/Seeeduino_v4.2#Getting_Started_on_Mac_OS_X)

### **硬件连接**

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_connection.jpg)

### **一个演示**

<div class="admonition note">
<p class="admonition-title">Note</p>
我们还需要一个 Grove - Touch 传感器，并将其连接到 **A5** (用作数字引脚)。
</div>

1.将代码复制到 Arduino IDE 编辑器。

```
/*
  Demo code for grove  atomization.
  Touch to start atomizing.
  Last modified by he
  by xiaohe
*/

// the setup function runs once when you press reset or power the board
void setup() {
    // initialize digital pin 13 as an output.
    pinMode(A5, OUTPUT);// Set A5 as OUTPUT
    pinMode(5, INPUT); // Use digital pin 5 as output port
}

// the loop function runs over and over again forever
void loop() {
    int D2Sig = digitalRead(5);// read pin 5 signal
    if (D2Sig == 1)
    {
        /* code */
        digitalWrite(A5, HIGH);   // atomize
        delay(10000);              // wait for 10 seconds
        digitalWrite(A5, LOW);    // atomization stopped

    }
}
```

2.将一些棉纱放入装满水的修剪纸杯中，将超声转接器放在棉纱上。

<div class="admonition note">
<p class="admonition-title">Note</p>
底侧是空心的，应该面向下面。将转接器底部的放入水中，并将顶部保持在水面以上。棉纱的功能是向转接器供水，并将换能器的上侧保持在水面以上。
</div>

3.将代码上传到主控板。

4.现在，如果您触摸 Grove touch sensor，您可以看到有蒸气产生。

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_connection.jpg)

<div class="admonition caution">
<p class="admonition-title">Caution</p>
不要直接触摸传感器接口引脚，因为 Drier board 的峰值输出电压可以为 65V。
</div>

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/High_voltage_warning_600.jpg)

<div class="admonition caution">
<p class="admonition-title">Caution</p>
电感 **L2** (以红色矩形标记) 将被加热。 所以不要直接碰它。
</div>


Resources
---------

- **[Eagle文件]** [Schematic files in Eagle](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_Eagle.zip)
- **[原理图PDF]** [Schematic files in PDF](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_PDF.zip)


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Water_Atomization -->
