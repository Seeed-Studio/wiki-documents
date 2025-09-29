---
description: 树莓派 4 通道 16 位 ADC (ADS1115)
title: 树莓派 4 通道 16 位 ADC (ADS1115)
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115
last_update:
  date: 1/11/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/main.jpg)

模数转换器（ADC）是树莓派的常见配件。这是一个基于德州仪器 ADS1115 的 4 通道 ADC，ADS1115 是一个精密、低功耗的 16 位 ADC 芯片。我们将这个 ADC 制作成紧凑的树莓派 Zero 外形规格，并集成了一个模拟 Grove 连接器，这样您也可以使用模拟 Grove 模块。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/4-Channel-16-Bit-ADC-for-Raspberry-Pi-ADS1115.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

| 产品版本  | 变更                                                                                               | 发布日期 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| 树莓派 4 通道 16 位 ADC (ADS1115) | 初始版本                                                                                               | 2018年9月      |

## 特性

- 低电流消耗：
  - 连续模式：仅 150μA
  - 单次模式：自动关断
- 宽电源电压范围
- 输入多路复用器（MUX），提供两个差分或四个单端输入
- 可编程比较器
- 内部低漂移电压基准
- 内部振荡器
- 内部 PGA
- 可编程数据速率：8SPS 至 860SPS
- I2C 兼容串行接口
- 支持树莓派 3B/3B+/4

## 规格

|项目|值|
|---|---|
|供电电压|3.3V / 5V|
|模拟输入电流|100mA（瞬时）<br />10mA（连续）|
|存储温度|-60～150℃|
|最大结温|150℃|
|接口|I2C|
|I2C地址|0x48（默认）<br />0x49~0x4B（可配置）|
|尺寸|长：65mm 宽：30mm 高：20mm|
|重量|36.5g|
|包装尺寸|长：140mm 宽：78mm 高：27mm|
|毛重|37g|

这个 grove 有 4 个可能的 I2C 地址，从 0x48 到 0x4B。默认 I2C 地址是 0x48。您可以通过焊接来更改 I2C 地址。

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/pinout1.png)

:::note
如果使用 SDA（对应地址 0x4A）作为设备地址，在 SCL 线变低后，将 SDA 线保持低电平至少 100 ns，以确保设备在 I2C 通信期间正确解码地址。
:::

## 典型应用

- 便携式仪器
- 消费品
- 电池监控
- 温度测量
- 工厂自动化和过程控制

## 硬件概述

### 引脚定义

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/pinout.png)

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 入门指南

### 硬件

**所需材料**

|Raspberry pi|4-Channel 16-Bit ADC for Raspberry Pi(ADS1115)|
|------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/thumbnail.jpg)|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/4-Channel-16-Bit-ADC-for-Raspberry-Pi-ADS1115.html)|

### 软件

在本节中，我们将介绍如何安装驱动程序以及如何启用I2C。

**启用I2C**
由于I2C默认情况下未开启，我们需要手动配置I2C。

- **步骤1**. 启动Raspberry Pi。
- **步骤2**. 在终端中输入以下命令打开raspi-config。

```cpp

sudo raspi-config

```

- **步骤3**. 向下箭头选择"5 interfacing Options"并按"enter"键选择。

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp1.png)

- **步骤4**. 向下箭头选择"P5 I2C"并按"enter"键选择。

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp2.png)

- **步骤4**. 选择"Yes"来启用它。

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp3.png)

- **步骤5**. 选择"Ok"。

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp4.png)

- **步骤6**. 选择"Finish"保存更改。

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp5.png)

**安装**

- 检查Raspberry Pi中是否已启用I2C。

在终端中运行以下命令导航到`config.txt`文件：

```sh
cd /boot
sudo nano config.txt
```

- 确保文件中有一行`dtparam=i2c_arm=on`。

- 默认的I2C速度是100 kHz。您可以通过在配置文件中添加以下行将其增加到400 kHz：

```sh
dtparam=i2c_arm_baudrate=400000
```

- 然后要使用ads1115-overlay，请将以下内容添加到`config.txt`：

```sh
dtoverlay=ads1115
```

- 之后，您需要为overlay提供参数来配置驱动程序。要在单端模式下启用ADC的所有4个通道，请添加以下内容：

```sh
dtparam=cha_enable
dtparam=chb_enable
dtparam=chc_enable
dtparam=chd_enable
```

- 保存文件并重启您的raspberry pi。

如果您使用这些对`config.txt`的更改重启系统，您将看到以下内核模块：

- 运行以下命令检查内核模块：

```sh
lsmod | grep ads
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/1.png"/></div>

:::note
 请注意，ADS1115使用与ADS1015相同的内核。
:::

我们可以看到ADS1115已经存在，可以被Industrial IO使用。

- 导航到Industrial IO文件夹：

```sh
cd /sys/bus/iio/devices/iio\:device0/
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/2.png"/></div>

- 现在您可以轻松访问这些硬件配置文件：

```sh
cat in_voltage0-voltage1_raw
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/3.png"/></div>

通道0和1使用0.1875mV的比例。测量的电位差为**17670 * 0.1875mv = 3.3V**

这种添加内核的方法允许您使用ADS1115开发自己的shell或python脚本！

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/res/4-Channel%2016-Bit%20ADC%20for%20Raspberry%20Pi(ADS1115).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [树莓派4通道16位ADC (ADS1115) Eagle文件](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/res/4-Channel%2016-Bit%20ADC%20for%20Raspberry%20Pi(ADS1115).zip)

- **[Zip]** [树莓派4通道16位ADC (ADS1115) 软件库](https://github.com/Seeed-Studio/pi-hats/archive/master.zip)

- **[PDF]** [ADS1115数据手册](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/res/ADS1115.pdf)

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