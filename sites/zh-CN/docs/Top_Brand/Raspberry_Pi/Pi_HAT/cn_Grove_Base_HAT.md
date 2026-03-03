---
description: Grove Base HAT
title: Grove Base HAT
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_Base_HAT
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/Grove%20Base%20HAT.JPG)

Grove Base HAT 是一个扩展板，可以将 Grove 传感器连接到树莓派上。它支持树莓派 2 Model B、树莓派 3 Model B 和树莓派 B+。有四个安装孔，与标准尺寸的树莓派完美匹配。它还为摄像头排线保留了空间。

## 版本

<table className="tg">
  <tbody><tr>
      <th className="tg-yw4l">产品版本</th>
      <th className="tg-yw42">变更</th>
      <th className="tg-yw4l">发布日期</th>
    </tr>
    <tr>
      <td className="tg-4eph">Grove Base HAT</td>
      <td className="tg-4eph">初始版本</td>
      <td className="tg-b7b8">2017年12月15日</td>
    </tr>
  </tbody></table>

## 特性

* 2个数字端口

* 2个模拟端口
* 3个I2C端口
* 1个UART端口
* 1个电源开关

## 硬件概述

下面的图片展示了 Grove Base HAT 硬件特性的概述。Grove Base HAT 各个引脚的引脚图和替代功能如引脚图所示。这可以作为快速参考使用。

![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/Hardware_overview.jpg)

* **<font face size={5} font color="00b0f0">❶</font>数字端口：**
2个数字 Grove 端口用于连接 Grove 数字传感器。

* **<font face size={5} font color="00b0f0">❷</font>模拟端口：**
2个模拟 Grove 端口用于连接 Grove 模拟传感器。树莓派不支持模拟信号。所以我们使用 ADS1015 芯片将 ADC 信号转换为 I2C 信号。

* **<font face size={5} font color="00b0f0">❸</font>I2C端口：**
3个I2C Grove 端口用于连接 Grove I2C 传感器。

* **<font face size={5} font color="00b0f0">❹</font>UART：**
1个UART Grove 端口用于连接 Grove UART 传感器。树莓派 3 的 UART 被蓝牙使用。请参考 [THE RASPBERRY PI UARTS
](https://www.raspberrypi.org/documentation/configuration/uart.md) 来启用 UART。

* **<font face size={5} font color="00b0f0">❺</font>系统电源开关：**
滑动开关用于将板子的逻辑电平和工作电压更改为 5V 或 3.3V。

* **<font face size={5} font color="00b0f0">❻</font>ADS1015：**
 ADS1015 是精密模数转换器 (ADC)，具有 12 位分辨率，数据通过 I2C 兼容串行接口传输。

* **<font face size={5} font color="00b0f0">❼</font>TXS0108：**
这个 8 位非反相转换器使用两个独立的可配置电源轨。A 端口跟踪 VCCA 引脚的供电电压。VCCA 引脚接受 1.2 V 到 3.6 V 之间的任何供电电压。A 端口连接到树莓派。B 端口跟踪 VCCB 引脚的供电电压。VCCB 引脚接受 1.65 V 到 5.5 V 之间的任何供电电压。B 端口连接到 Grove 传感器。

* **<font face size={5} font color="00b0f0">❽</font>FREE：**
FREE 引脚未被 Grove Base HAT 使用。

## 入门指南

### 硬件

* 步骤 1. 准备以下物品：

| Raspberry pi | Grove base HAT |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/Grove%20Base%20HAT_s.JPG)|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|

* 步骤 2. 将 Grove Base HAT 插入 Raspberry。

* 步骤 3. 通过 USB 线缆将 Raspberry 连接到 PC。

### 软件

* 步骤 1. 配置 I2C，I2C 默认未开启。我们可以使用 raspi-config 来启用它。运行 "sudo raspi-config"。

* 步骤 2. 向下箭头选择到 5 interfacing Options 并按 "enter" 键选择。
![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/enable_i2C.1.png)

* 步骤 3. 向下箭头选择到 P5 I2C 并按 "enter" 键选择。
![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/enable_i2C.2.png)

* 步骤 4. 选择 "Yes" 来启用它。
![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/enable_i2C.3.png)

* 步骤 5. 选择 "Ok"。
![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/enable_i2C.4.png)

* 步骤 6. 选择 "Finish" 来保存更改。
![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/enable_i2C.5.png)

* 步骤 7. 下载 [ADS1X15_Driver](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/ADS1X15_Driver.zip) 到 Raspberry /home/pi 文件夹并解压。

```
wget https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/ADS1X15_Driver.zip
unzip ADS1X15_Driver.zip
```

* 步骤 8. 进入 singleended 文件夹并执行 make。我们将看到 Singleended 文件以绿色高亮显示。

```
pi@raspberrypi:~ $ cd ~/Adafruit_ADS1X15_Linux/examples/singleended
pi@raspberrypi:~/Adafruit_ADS1X15_Linux/examples/singleended $ make
g++ -o singleended.o -c singleended.cpp -I../../ -W -Wall
g++ -o Singleended singleended.o -lads1015 -L../../
pi@raspberrypi:~/Adafruit_ADS1X15_Linux/examples/singleended $ ls
Makefile  Singleended  singleended.cpp  singleended.o

```

* 步骤 9. 运行 singleended 来读取数据。

```
pi@raspberrypi:~/Adafruit_ADS1X15_Linux/examples/singleended $ ./Singleended
Hello!
Getting single-ended readings from AIN0..3
ADC Range: +/- 6.144V (1 bit = 3mV/ADS1015, 0.1875mV/ADS1115)
AIN0: 4095
AIN1: 4095
AIN2: 4095
AIN3: 4095
```

## 常见问题

请点击 **[这里](http://support.seeedstudio.com/knowledgebase/articles/1831468-grove-base-hat-sku-tbd)** 查看所有 Grove_Base_HAT 常见问题。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/Raspberry%20Pi%20Grove%20Base%20HAT.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* **[PDF]** [下载 Wiki PDF](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/Grove_Base_HAT.pdf)

* **[Eagle]** [Grove Base HAT 原理图文件](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/Raspberry%20Pi%20Grove%20Base%20HAT.zip)
* **[数据手册]** [ADS1015](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/ads1015.pdf)
* **[数据手册]** [TXS0108](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/txs0108e.pdf)
* **[PDF]** [Grove Base HAT 机械图](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/hat-board-mechanical.pdf)
* **[Github]** [HAT](https://github.com/raspberrypi/hats)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>