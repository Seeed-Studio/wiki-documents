---
description: Grove - 4通道16位ADC(ADS1115)
title: Grove - 4通道16位ADC(ADS1115)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-16-bit-ADC-ADS1115
sku: 109020041
last_update:
  date: 2/22/2023
  author: jianjing Huang
---

<!-- ---
name: Grove - 4通道16位ADC(ADS1115)
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 109020041
--- -->

![](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-45.png)

对于没有模拟到数字转换器的微控制器，或者当您需要更精确的ADC时，我们提供了Grove - 4通道16位ADC(ADS1115)，它是一款基于德州仪器ADS1115的4通道ADC模块。ADS1115是一款高精度、低功耗的16位ADC芯片，支持4个单端输入或2个差分输入。此外，它具有可编程的数据速率范围（从8 SPS到860 SPS），并带有内部可编程增益（最高可达x16）以处理小信号。

该模块还包含一个Grove端口，该端口内部连接到其通道0和通道1，使其更容易与Grove生态系统一起使用。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-ADS1115-16-bit-ADC-p-4599.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

- 宽电源范围：2.0V ~ 5.5V，支持3.3V或5V系统
- 16位高分辨率ADC
- 可编程数据速率：8 SPS到860 SPS
- 内部可编程增益：x16，带有内部低漂移电压参考和振荡器
- 内置PGA增益可调，可通过软件控制
- 4个单端输入或2个差分输入

## 规格

|参数|值|
|---|---|
|输入电压|3.3V / 5V|
|ADC分辨率|16位|
|可编程数据速率|8 SPS - 860 SPS|
|通道|4通道单端输入或2通道差分输入|
|接口|I2C，默认地址：0x48|

## 硬件概览

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-HW.png"/></div>

## 支持的平台

|Arduino|Raspberry|ArduPy|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg)|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg)|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png)|

:::caution
上述提到的支持平台仅表示模块的软件或理论兼容性。在大多数情况下，我们仅为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库或演示代码，因此用户需要自行编写软件库。
:::

## 入门指南

### 使用Arduino

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - 16位ADC (ADS1115)|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png)
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html)|

>此外，您可以考虑我们的新款 [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它相当于Seeeduino V4.2和Base Shield的组合。

#### 硬件连接

- **步骤1.** 将Grove - 16位ADC(ADS1115)插入Grove - Base Shield的**I2C**端口。

- **步骤2.** 将Grove - Base Shield插入Seeeduino。

- **步骤3.** 使用USB线将Seeeduino连接到PC。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-connect.png"/></div>

#### 软件

:::caution
如果这是您第一次使用Arduino，我们强烈建议您在开始之前查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤1.** 从Github下载[Seeed Arduino ADS1115](https://github.com/Seeed-Studio/Seeed_Arduino_ADS1115)库。

:::note
参考如何安装库以[安装Arduino库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)。
:::

- **步骤2.** 重启Arduino IDE。通过以下路径打开**Seeed_Arduino_ADS1115**示例：**文件** → **示例** → **Grove - ADS1115** → **single_ended**。

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

- **步骤 3.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 4.** 打开 Arduino IDE 的 **串口监视器**，点击 **工具->串口监视器**，或者同时按下 ++ctrl+shift+m++ 键。将波特率设置为 **115200**。

- **步骤 5.** 结果应如下所示，显示 4 个通道的数据：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/result.gif"/></div>

:::note
在此示例中，设置了 2/3x 增益，因此需要将值乘以 0.1875mV。例如，10201 x 0.1875mV = 1.91V。
:::

### 使用 Raspberry Pi

### 硬件

| Raspberry Pi | Grove Base Hat for RasPi | Grove - 16 Bit ADC(ADS1115) |
|--------------|------------------------------|---------------------------------|
|![图片描述](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png)|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[立即购买](#)|

### 软件

Grove - 16-bit ADC(ADS1115) 的使用方法与 Raspberry Pi 的 4-Channel 16-Bit ADC (ADS1115) 相同，因此请参考 [**教程**](https://wiki.seeedstudio.com/cn/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/#getting-started)。

### 使用 Wio Terminal

**所需材料**

| Wio Terminal | Grove - 16Bit ADC (ADS1115) | Grove - Rotary Angle Sensor |
|--------------|---------------------------------|---------------------------------|
|![图片描述](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png)|![图片描述](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png)|![图片描述](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rorary_s.jpg)|
|[立即购买](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[立即购买](#)|[立即购买](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor--p-1242.html)|

- **步骤 1.** 将 Grove - 16 Bit ADC(ADS1115) 插入 Wio Terminal 的 **I2C** 接口。

- **步骤 2.** 使用 USB 数据线将 Wio Terminal 连接到电脑。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-wt.png"/></div>

#### 软件

- **步骤 1.** 从 Github 下载 [Seeed Arduino ADS1115](https://github.com/Seeed-Studio/Seeed_Arduino_ADS1115) 库。

:::note
在进行以下步骤之前，请先参考 [Wio Terminal 入门指南](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/)。
:::

- **步骤 2.** 在 [**此处**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal-ADS1115) 下载示例代码。

- **步骤 3.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 4.** 调整旋转角度传感器，您将在 Wio Terminal 的 LCD 屏幕上看到对应的电压：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/WT-ADS1115.gif"/></div>

### 使用 Wio Terminal (ArduPy)

#### 硬件

- **步骤 1.** 准备以下物品：

| Wio Terminal | Grove - 16 Bit ADC(ADS1115) |
|--------------|---------------------------------|
|![图片描述](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png)|![图片描述](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png)|
|[立即购买](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[立即购买](#)|

- **步骤 2.** 将 Grove - 16 Bit ADC(ADS1115) 连接到 Wio Terminal 的 **I2C** 接口。

- **步骤 3.** 使用 USB Type-C 数据线将 Wio Terminal 连接到电脑。

#### 软件

- **步骤 1.** 按照 [**ArduPy 入门指南**](https://wiki.seeedstudio.com/cn/ArduPy/) 配置 Wio Terminal 的 ArduPy 开发环境。

- **步骤 2.** 确保已将带有 ADS1115 库的 ArduPy 固件刷入 Wio Terminal。有关更多信息，请参考 [**此处**](https://wiki.seeedstudio.com/cn/ArduPy/#ardupy-aip-cli-getting-started)。

```sh
aip install Seeed-Studio/seeed-ardupy-ads1115
aip build
aip flash
```

- **步骤 3.** 复制以下代码并保存为 `ArduPy-ads1115.py`：

注意：有关更多 API，请参考 [此处](https://github.com/Seeed-Studio/seeed-ardupy-ads1115)。

```python
from arduino import grove_ads1115
import time

ads = grove_ads1115()
ads.setPGAGain(0x0000)

while True:
    print ("通道0的值是：", ads.channel0)
    print ("通道1的值是：", ads.channel1)
    print ("通道2的值是：", ads.channel2)
    print ("通道3的值是：", ads.channel3)
    time.sleep(1)
```

- **步骤 4.** 将 `ArduPy-ads1115.py` 保存到您知道的位置。运行以下命令，并将 `<YourPythonFilePath>` 替换为您的 `ArduPy-ads1115.py` 文件路径。

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# 示例：
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ads1115.py"
```

- **步骤 5.** 您将在终端上看到如下显示的 ADC 值：

```sh
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ads1115.py"
Positional argument (/dev/cu.usbmodem1413101) takes precedence over --open.
Connected to ardupy
通道0的值是：17487.0
通道1的值是：3790.0
通道2的值是：3170.0
通道3的值是：3122.0
通道0的值是：17486.0
通道1的值是：3272.0
通道2的值是：3064.0
通道3的值是：3063.0
通道0的值是：17486.0
通道1的值是：3482.0
通道2的值是：3201.0
通道3的值是：3185.0
通道0的值是：17487.0
通道1的值是：17261.0
通道2的值是：5055.0
通道3的值是：4480.0
通道0的值是：11839.0
通道1的值是：3540.0
通道2的值是：1690.0
通道3的值是：1562.0
```

## 注意事项

:::caution
当在螺丝端子上的 **A0** 和 **A1** 使用多通道时，请记住不要在 Grove 接口上连接任何设备，因为它们也使用 A0 和 A1。在处理电池时，这可能是危险的。
:::

1. 使用时，最大电压必须 **不超过 5.5V**。

2. 当使用多通道采集时，采样频率必须设置在 250SPS 以上，否则采样频率过慢，可能会导致前一个通道尚未转换完成，下一个通道就已开始，从而导致无法正常工作。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/Grove-ADS1115.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove - 16位 ADC（ADS1115 原理图文件）](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/Grove-ADS1115.zip)

- **[PDF]** [德州仪器 ADS1115 数据手册](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时拥有顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>