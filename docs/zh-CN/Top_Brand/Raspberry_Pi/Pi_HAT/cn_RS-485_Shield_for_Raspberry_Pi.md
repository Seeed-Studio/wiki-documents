---
description: 树莓派 RS-485 扩展板
title: 树莓派 RS-485 扩展板
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/RS-485_Shield_for_Raspberry_Pi
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/main.jpg)

RS-485 是串行通信网络中的一种经济高效的解决方案。它可以在 10 Mbit/s 的数据速率下使用，或在较低速度下达到 1200m 的距离。这款 RS-485 扩展板是树莓派的标准附加板。它集成了简单的螺丝端子以及 DB9 接口。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RS-485-Shield-for-Raspberry-Pi.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

| 产品版本  | 变更                                                                                               | 发布日期 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| 树莓派 RS-485 扩展板 | 初始版本                                                                                               | 2018年9月      |

## 特性

- 每个部件包含一个驱动器和一个接收器
- EMI 噪声最小化
- 传输速率高达 2.5Mbps
- 无驱动器转换速率限制
- 短路电流限制
- 故障安全应用
- 支持树莓派 3B/3B+/4

<!-- <div class="page"/></div> -->

## 规格

|项目|值|
|:---|:---|
|工作电源电压|3.3V|
|接口|RS-485 DB9 接口 X1<br />RS-485 螺丝接口 X1 <br /> 2×13 母头连接树莓派 X1<br />  2×13 扩展母头 X1<br />  Grove I2C 接口 X1|
|数据速率|2.5Mbps|
|接收器数量|32|
|存储温度范围|-65～160℃|
|通道数|8|
|分辨率|12位|
|功耗|根据传输速率不同功耗不同|
|尺寸|长: 62mm 宽: 39.2mm 高: 21.8mm|
|重量|23g|
|包装尺寸|长: 140mm 宽: 75mm 高: 25mm|
|毛重|42g|

<!-- <div class="page"/></div> -->

## 典型应用

- 低功耗 RS-485 收发器
- 电平转换器
- EMI 敏感应用的收发器工业控制局域网
- 半双工应用

## 硬件概述

### 引脚定义

**概述**

![Pin_map](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/Pin_map.jpg)

<!-- <div class="page"/></div> -->

---
**RS-485 DB9 接口和 RS-485 螺丝接口**

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/8.jpg)

485 接口使用差分信号传输。请确保端口 A 连接到 485 设备的端口 A，端口 B 连接到 485 设备的端口 B。

>485-A: RS485 数据传输线的 A 端，连接到 MAX485 芯片的 A 引脚。  
>485-B: RS485 数据传输线的 B 端，连接到 MAX485 芯片的 B 引脚。  
>GND: 连接到树莓派 GND。

[![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/schematic_1.jpg)](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/schematic_1.jpg)

<p style={{textAlign: 'center'}}><font color="green">您可以点击图片查看原始文件</font></p>

如您所见，GPIO14 和 GPIO15 用于数据传输，我们使用 GPIO18 作为使能信号。

有关逻辑信号的定义，请参考下表。

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/function_table.jpg)

---
**连接树莓派的母头**

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/5.jpg)

我们使用 2X13 母头将此模块插入树莓派，请确保引脚对齐。

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/Pin_map_2.jpg)

---
**扩展母头**

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/6.jpg)

这个 RS-485 扩展板占用了 26 个树莓派引脚，实际只使用了 5 个 GPIO 引脚。我们将这 26 个引脚引出，以防您需要将这些引脚用于其他目的。

>GPIO 占用列表

GPIO 编号|功能
:---:|---
GPIO02|Grove I2C 端口的 SDA
GPIO03|Grove I2C 端口的 SCL
GPIO14|连接到 Max485 芯片的 **DI** 引脚，用于数据传输。
GPIO15|连接到 Max485 芯片的 **RO** 引脚，用于数据传输。
GPIO18|连接到 Max485 芯片的 **RE** 和 **DE** 引脚，作为使能信号。

---
**Grove I2C 端口**

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/3.jpg)

我们保留了 I2C 接口，以便您可以轻松地与 I2C 设备一起使用。需要注意的是，此端口的 VCC 为 5V，您需要确认模块是否与 5V 电压兼容。

>SCL: I2C 串行时钟，连接到树莓派的 GPIO03。  
>SDA: I2C 串行数据，连接到树莓派的 GPIO02。  
>VCC: 连接到树莓派 5V 引脚。  
>GND: 连接到树莓派 GND 引脚。

<!-- <div class="page"/></div> -->

---
**Max485 芯片**

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/7.jpg)

我们为此扩展板使用 MAX485ESA IC，有关此 IC 的更多详细信息，请查看 [MAX485 数据手册](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS-485.pdf)

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

<!-- <div class="page"/></div> -->

## 入门指南

### 硬件

**所需材料**

|Raspberry pi|RS-485 Shield for Raspberry Pi|
|------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/thumbnail.jpg)|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/RS-485-Shield-for-Raspberry-Pi.html)|

- **步骤 1.** 将 RS-485 Shield for Raspberry Pi 插入 Raspberry Pi。

- **步骤 2.** 将 **485-A** 连接到 485 线的 A 端，将 **485-B** 连接到 485 线的 B 端。

:::note
    如果线路接反，将无法通信。
:::

- **步骤 3.** 使用 micro-usb 线为 Raspberry Pi 供电。

### 软件

#### 通信测试代码

您可以创建一个新的 python 文件并将以下代码复制到新文件中，或者您可以在资源下载区域下载源文件。然后在您的终端中运行它。

<!-- <div class="page"/></div> -->

**发送代码。**

```python

#!/usr/bin/env python

import time
import serial
import os
from gpiozero import LED

send_str = "*******rs485888888--\n"

ser = serial.Serial(port='/dev/ttyS0',baudrate =115200)

Tx_Enable = LED(18)
Tx_Enable.on()

while 1:
    ser.write(send_str)
    time.sleep(1)

```

<!-- <div class="page"/></div> -->

**接收代码**

```python

#!/usr/bin/env python

import time
import serial
import os
from gpiozero import LED

ser = serial.Serial(port='/dev/ttyS0',baudrate =115200,timeout=1)
data = ''

Rx_Disable = LED(18)
Rx_Disable.off()

while True:
    str = ser.readall()  
    if str:  
        print str 

```

您需要两个扩展板和两个树莓派来测试上述代码，或者您可以使用 PC 中的串口工具与您的树莓派进行通信。

<!-- <div class="page"/></div> -->

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS485%20Shield%20for%20Raspberry%20Pi.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [树莓派 RS-485 扩展板 Eagle 文件](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS485%20Shield%20for%20Raspberry%20Pi.zip)

- **[Zip]** [Python 测试代码](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/Python_test.zip)

- **[PDF]** [MAX485 数据手册](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS-485.pdf)

- **[PDF]** [PDF 格式 Wiki](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS-485_Shield_for_Raspberry_Pi.pdf)

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