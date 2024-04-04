---
description:  Grove - 4通道16位模数转换器（ADS1115）
title:  Grove - 4通道16位模数转换器（ADS1115）
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-16-bit-ADC-ADS1115
last_update:
  date: 03/23/2024
  author: WuFeifei
---

<!-- ---
name: Grove - 4-Channel 16-bit ADC(ADS1115)
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 109020041
--- -->

![](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-45.png)

对于没有模数转换器（ADC）的微控制器，或者当你需要更精确的ADC时，我们提供Grove - 4通道16位ADC（ADS1115）。这是一款基于德州仪器ADS1115的4通道ADC，是一款高精度、低功耗的16位ADC芯片。它支持4个单端输入或2个差分输入。此外，它还具有可编程的数据速率范围，从8 SPS到860 SPS，以及用于小信号的内部可编程增益（最高可达x16）。

该模块还包含一个Grove端口，该端口内部连接到其通道0和通道1，这使得它与Grove生态系统一起使用更加便捷。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-ADS1115-16-bit-ADC-p-4599.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>


## 特点

- 宽电源电压范围：2.0V ~ 5.5V，支持3.3V或5V系统
- 16位高分辨率ADC
- 可编程数据速率：8 SPS至860 SPS
- 内部可编程增益：x16，带有内部低漂移电压基准和振荡器
- 内置PGA增益可调，可由软件控制
- 4个单端输入或2个差分输入

## 规格

|参数|值|
|---|---|
|输入电压|3.3V / 5V|
|ADC分辨率| 16 Bit |
|可编程数据速率|8SPS - 860 SPS|
|通道数| 4通道单端输入或2通道差分输入 |
|接口|I2C，默认地址：0x48|

## 硬件概述

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-HW.png"/></div>

## 支持的平台

|Arduino|树莓派|ArduPy|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg)|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg)|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png)|

:::警告
上述提到的支持平台表示模块的软件或理论上的兼容性。在大多数情况下，我们只针对Arduino平台提供软件库或代码示例。由于无法为所有可能的MCU平台提供软件库/示例代码，因此用户需要自行编写自己的软件库。
:::

## 入门指南

### 玩转 Arduino

**所需材料**

| Seeeduino V4.2 | 基础扩展板 | Grove - 16Bit ADC (ADS1115)|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html)|

>此外，您还可以考虑我们新推出的[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它相当于Seeeduino V4.2与基础扩展板的组合。

#### 硬件连接

- **步骤 1.** 将Grove - 16位ADC（ADS1115）插入到Grove - 基础扩展板的**I2C**端口上。

- **步骤 2.** 将Grove - 基础扩展板插入Seeeduino。
- **步骤 3.** 通过USB线将Seeeduino连接到电脑上。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-connect.png"/></div>

#### 软件

:::警告
如果您是第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从Github下载[Seeed Arduino ADS1115](https://github.com/Seeed-Studio/Seeed_Arduino_ADS1115)库。

:::注意
请参照如何安装库的说明，将库安装到[Arduino](http://wiki.seeedstudio.com/How_to_install_Arduino_Library/)中。
:::

- **步骤 2.** 重启Arduino IDE。通过路径：**文件** → **示例** → **Grove - ADS1115** → **single_ended** 打开**Seeed_Arduino_ADS1115**示例。

`single_ended`示例代码如下：

```Cpp
#include "ADS1115.h"

#ifdef SOFTWAREWIRE
    #include <SoftwareWire.h>
    SoftwareWire myWire(3, 2);
    ADS1115<SoftwareWire> ads(myWire);//IIC
#else
    #include <Wire.h>
    ADS1115<TwoWire> ads(Wire);//IIC
#endif

void setup(void)
{
    Serial.begin(115200);
    while(!ads.begin(0x48)){
        Serial.print("ads1115 init failed!!!");
        delay(1000);
    }
    //ads.begin(0x49)
    //ads.begin(0x4A)
    //ads.begin(0x4B)

    ads.setOperateMode(ADS1115_OS_SINGLE);
    ads.setOperateStaus(ADS1115_MODE_SINGLE);

  ads.setPGAGain(ADS1115_PGA_6_144);    // 2/3x gain +/- 6.144V  1 bit =  0.1875mV (default)
    // ads.setPGAGain(ADS1115_PGA_4_096); // 1x gain   +/- 4.096V  1 bit =  0.125mV
    // ads.setPGAGain(ADS1115_PGA_2_048); // 2x gain   +/- 2.048V  1 bit =  0.0625mV
    // ads.setPGAGain(ADS1115_PGA_1_024); // 4x gain   +/- 1.024V  1 bit =  0.03125mV
    // ads.setPGAGain(ADS1115_PGA_0_512); // 8x gain   +/- 0.512V  1 bit =  0.015625mV
    // ads.setPGAGain(ADS1115_PGA_0_256); // 16x gain  +/- 0.256V  1 bit =  0.0078125mV

    ads.setSampleRate(ADS1115_DR_8); //8 SPS
    // ads.setSampleRate(ADS1115_DR_16); //16 SPS
    // ads.setSampleRate(ADS1115_DR_32); //32 SPS
    // ads.setSampleRate(ADS1115_DR_64); //64 SPS
    // ads.setSampleRate(ADS1115_DR_128); //128 SPS
    // ads.setSampleRate(ADS1115_DR_250); //250 SPS
    // ads.setSampleRate(ADS1115_DR_475); //475 SPS
    // ads.setSampleRate(ADS1115_DR_860); //860 SPS
}
void loop(void)
{
    int16_t adc0,adc1,adc2,adc3;
    adc0 = ads.getConversionResults(channel0); //P = AIN0, N = GND
    adc1 = ads.getConversionResults(channel1); //P = AIN1, N = GND
    adc2 = ads.getConversionResults(channel2); //P = AIN2, N = GND
    adc3 = ads.getConversionResults(channel3); //P = AIN3, N = GND
    Serial.print("AIN0: "); Serial.println(adc0);
    Serial.print("AIN1: "); Serial.println(adc1);
    Serial.print("AIN2: "); Serial.println(adc2);
    Serial.print("AIN3: "); Serial.println(adc3);
    Serial.println(" ");
    delay(1000);
}
```

- **步骤 3.** 上传示例代码。如果您不知道如何上传代码，请查看[如何上传代码](http://wiki.seeedstudio.com/Upload_Code/)。

- **步骤 4.** 点击**工具->串行监视器**打开Arduino IDE的**串行监视器**。或者同时按下++ctrl+shift+m++键。将波特率设置为**115200**。
- **步骤 5.** 对于4个通道，结果应该像这样：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/result.gif"/></div>

:::注意
在此示例中，设置了2/3倍增益，因此需要将值乘以0.1875mV。例如，10201 x 0.1875mV = 1.91V。
:::

### 玩转 Raspberry Pi

### 硬件

| Raspberry Pi | Grove Base Hat for RasPi | Grove - 16 Bit ADC(ADS1115)|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[立即获取](#)|

### 软件

Grove - 16位ADC（ADS1115）与Raspberry Pi的4通道16位ADC（ADS1115）用法相同，因此请遵循[这里](https://wiki.seeedstudio.com/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/#getting-started)的教程进行操作。

### 玩转 Wio Terminal

**所需材料**

| Wio Terminal | Grove - 16Bit ADC (ADS1115) | Grove - Rotary Angle Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rorary_s.jpg)|
|[立即获取](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[立即获取](#)|[立即获取](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor--p-1242.html)|

- **步骤 1.** 将Grove - 16位ADC（ADS1115）插入到Wio Terminal的**I2C**端口上。

- **步骤 2.** 通过USB线将Wio Terminal连接到电脑上。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-wt.png"/></div>

#### 软件

- **步骤 1.** 从Github下载[Seeed Arduino ADS1115](https://github.com/Seeed-Studio/Seeed_Arduino_ADS1115)库。

:::注意
在进行以下步骤之前，请遵循[Wio Terminal的入门指南](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/)。
:::

- **步骤 2.** 下载这里的[**示例代码**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal-ADS1115)。

- **步骤 3.** 上传示例代码。如果您不知道如何上传代码，请查看[如何上传代码](http://wiki.seeedstudio.com/Upload_Code/)。

- **步骤 4.** 调整旋转传感器，您将在Wio Terminal的LCD屏幕上看到相应的电压值：


<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/WT-ADS1115.gif"/></div>

### 使用Wio Terminal（ArduPy）

#### 硬件

- **步骤 1.** 准备以下物品：

| Wio Terminal | Grove - 16 Bit ADC(ADS1115) |
|--------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png)|
|[立即获取](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[立即获取](#)|

- **步骤 2.** 将Grove - 16位ADC（ADS1115）连接到Wio Terminal的**I2C**端口。

- **步骤 3.** 通过USB Type-C电缆将Wio Terminal连接到电脑。

#### 软件

- **步骤 1.** 按照[**ArduPy入门指南**](https://wiki.seeedstudio.com/ArduPy/)在Wio Terminal上配置ArduPy开发环境。
- **步骤 2.** 确保将带有ADS1115库的ArduPy固件烧录到Wio Terminal中。更多信息请遵循[**这里**](https://wiki.seeedstudio.com/ArduPy/#ardupy-aip-cli-getting-started)的说明。

```sh
aip install Seeed-Studio/seeed-ardupy-ads1115
aip build
aip flash
```

- **步骤 3.** 复制以下代码并将其保存为`ArduPy-ads1115.py`：

注意：更多API请查看[这里](https://github.com/Seeed-Studio/seeed-ardupy-ads1115)。

```python
from arduino import grove_ads1115
import time

ads = grove_ads1115()
ads.setPGAGain(0x0000)

while True:
    print ("The channel0 value is :", ads.channel0)
    print ("The channel1 value is :", ads.channel1)
    print ("The channel2 value is :", ads.channel2)
    print ("The channel3 value is :", ads.channel3)
    time.sleep(1)
```

- **步骤 4.** 将`ArduPy-ads1115.py`保存在您知道的位置。运行以下命令，并将`<YourPythonFilePath>`**替换**为您的`ArduPy-ads1115.py`文件位置。

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ads1115.py"
```

- **步骤 5.** 我们将在终端看到如下显示的ADC值：

```sh
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ads1115.py"
Positional argument (/dev/cu.usbmodem1413101) takes precedence over --open.
Connected to ardupy
The channel0 value is : 17487.0
The channel1 value is : 3790.0
The channel2 value is : 3170.0
The channel3 value is : 3122.0
The channel0 value is : 17486.0
The channel1 value is : 3272.0
The channel2 value is : 3064.0
The channel3 value is : 3063.0
The channel0 value is : 17486.0
The channel1 value is : 3482.0
The channel2 value is : 3201.0
The channel3 value is : 3185.0
The channel0 value is : 17487.0
The channel1 value is : 17261.0
The channel2 value is : 5055.0
The channel3 value is : 4480.0
The channel0 value is : 11839.0
The channel1 value is : 3540.0
The channel2 value is : 1690.0
The channel3 value is : 1562.0
```

## 注意事项

:::警示危险
当在螺丝接线端子的**A0**和**A1**上使用多通道时，请记住不要在Grove接口上连接任何东西，因为它们也使用A0和A1。在处理电池时，这可能会很危险。
:::

1. 在使用时，最大电压**不得超过5.5V**。

2. 在使用多通道采集时，采样频率必须设置在250SPS以上，否则采样频率过慢，有可能出现前一个通道尚未转换完，下一个通道已经开始的情况，导致无法正常工作。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/Grove-ADS1115.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove - 16 位 ADC(ADS1115 原理图文件)](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/Grove-ADS1115.zip)

- **[PDF]** [德州仪器ADS1115 数据手册](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115.pdf)

## 技术支持与产品讨论


感谢您选择我们的产品！我们在这里为您提供各种支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
