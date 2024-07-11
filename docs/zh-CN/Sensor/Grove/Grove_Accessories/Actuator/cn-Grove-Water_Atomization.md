---
title: Grove - 水雾化器
description: Grove - 水雾化器
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Water_Atomization/
slug: /cn/Grove-Water_Atomization
last_update:
  date: 03/21/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_product_1200.jpg)

Grove - Water Atomization 是一个优质的 Grove 模块，它能帮助您轻松地在应用中开发雾化器或雾化器模块。只需几个简单的步骤，您就可以制作雾化器的原型。它拥有 Grove 接口，使其能够轻松应用于众多场景。加湿器是其可以构建的基本应用之一，您还可以利用数字香味技术和任何需要雾化的场景，开发更多高级和有趣的产品。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Grove-Water-Atomization-v10-p-2542.html)

## 特性

- 超声波加热。
- 便于为新的应用制作原型。
- 广泛适用于各种应用场景。
- 适用于各种有趣、智能和时尚的应用。

:::提示
关于 Grove 模块的更多详细信息，请查阅 [Grove 系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 应用创意

- 加湿器。
- 不同场合的香氛散发器。
- 智能家居应用。
- 消费电子产品上的智能物件。

## 规格

| 参数               | 值             |
| ------------------ | -------------- |
| 工作电压           | 5.0V（直流）   |
| 纹波（最大功率时） | ≤100 mV        |
| 最大功率           | 2W             |
| 峰值输出电压       | 65±5V          |
| 工作频率           | 105±5kHz       |
| 芯片               | ETA1617, NE555 |

支持的平台
-------------------

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::警告
    上述提到的支持平台是模块的软件或理论兼容性的一个指示。在大多数情况下，我们只提供针对Arduino平台的软件库或代码示例。由于无法为所有可能的MCU平台提供软件库/演示代码，因此用户需要编写自己的软件库。
:::

硬件概述
-----------------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_overview_1200.jpg) -->

**Grove接口**
连接主控制板（如Seeeduino板）与驱动板。

**换能器接口**
连接超声波换能器与驱动板。

**Grove连接线**
连接主控制板与驱动板。

### **部件列表**

| 部件名称       | 数量 |
| -------------- | ---- |
| 驱动板         | 1个  |
| Grove连接线    | 1根  |
| 超声波换能器板 | 1个  |

## 开始使用

### **所需材料**

Seeeduino v4.2 x 1

Grove - 基础底板 v2 x 1

Grove - 连接线 x 1

### **准备工作**

请参考以下指南以构建合适的IDE：

:::note
在这个例子中，我们选择了Seeeduino。
:::

- Windows上的入门指南
- Mac OS X上的入门指南

### **硬件连接**

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_connection.jpg)

### **一个小演示**

:::note
在这个演示中，我们还需要一个Grove - 触摸传感器，并将其连接到D5。
:::

1. 将以下代码复制到Arduino IDE编辑器中。

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

1. 将一些纸巾放入盛有水的修剪过的纸杯中，将超声波换能器放在纸巾上。

:::注意
底面是有空洞的一侧，应该朝下。让换能器板的底部沉入水中，顶部保持在水面以上。纸巾的作用是引导水流向换能器，同时保持换能器的上部在水面以上。
:::

1. 将代码上传到主控制板。
2. 现在，如果你触摸Grove触摸传感器，你可以看到产生的蒸汽。

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_connection.jpg)

::::::警告
请勿直接触摸换能器接口引脚，因为驱动板的峰值输出电压可能高达65V。
:::

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/High_voltage_warning_600.jpg)

:::警告
电感器<span style={{fontWeight: 'bold'}}>L2</span>（上图中用红色矩形标记）会发热。因此，请勿直接触摸它。
:::

### 使用Codecraft进行编程

#### 硬件

**步骤 1.** 将Grove - Water Atomization连接到Base Shield的D2端口，并将Grove - Button连接到D5端口。

**步骤 2.** 将Base Shield插入到您的Seeeduino/Arduino上。

**步骤 3.** 通过USB电缆将Seeeduino/Arduino连接到您的PC。

#### 软件

**步骤 1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并将一个主程序拖到工作区。

:::注意
如果您是第一次使用Codecraft，也请参阅[使用Arduino的Codecraft指南](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/)。
:::
**步骤 2.** 按照下面的图片拖动代码块，或者打开可以在本页面末尾下载的cdc文件。

![cc](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/cc_Water_Atomization.png)

将程序上传到您的Arduino/Seeeduino。

:::提示
    当代码上传完成后，按下按钮时，水雾化器将开始雾化。
:::

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [Eagle中的原理图文件](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_Eagle.zip)
- [PDF中的原理图文件](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_PDF.zip)
- [Codecraft CDC 文件](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Grove_Water_Atomization_CDC_File.zip)

## 项目

**智能加湿器** 让您的房间在冬天变得舒适。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/taifur/smart-humidifier-dac66f/embed' width='350'></iframe>

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Water_Atomization -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供各种支持，以确保您在使用我们的产品时能够拥有尽可能顺畅的体验。为了满足不同的需求和偏好，我们提供了多种沟通渠道。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
