---
description: Grove - 红外温度传感器阵列(AMG8833)
title: Grove - 红外温度传感器阵列(AMG8833)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Infrared_Temperature_Sensor_Array-AMG8833
last_update:
  date: 1/4/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/main.jpg" /></div>

Grove - 红外温度传感器阵列 (AMG8833) 是一款基于先进MEMS技术的高精度红外阵列传感器。它可以支持二维区域的温度检测：8 × 8 (64像素)，最大检测距离为7米。

我们为这个传感器提供了Arduino和树莓派的演示程序。它将是制作您自己的热成像相机的完美模块。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-Array-(AMG8833)-p-3185.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 二维区域温度检测：8 × 8 (64像素)
- I2C输出（支持温度值输出）
- 高精度
- 长检测距离

## 规格参数

|项目|数值|
|---|---|
|工作电压|3.3V / 5V|
|测量对象温度范围|0 °C 到 80 °C +32 °F 到 +176 °F|
|工作温度范围|0 °C 到 80 °C +32 °F 到 +176 °F|
|存储温度范围|−20 °C 到 80 °C –4 °F 到 +176 °F|
|温度精度|典型值 ±2.5 °C ±4.5 °F|
|视角|典型值 60 °|
|光轴间隙|典型值 ±5.6 ° 以内|
|像素数量|64 (垂直 8 × 水平 8 矩阵)|
|外部接口| I2C|
|I2C地址|0x68(默认) \\  0x69(可选)|

## 典型应用

- 高功能家用电器（微波炉和空调）
- 办公室节能（空调/照明控制）
- 数字标牌
- 自动门/电梯

## 硬件概述

### 引脚定义

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/pin_out.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/pin_out_back.jpg" /></div>

### 原理图

**电源**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/schematic_1.jpg" /></div>

AMG8833的典型电压为3.3V，因此我们使用[XC6206P33](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/MP3120.pdf)芯片来提供稳定的3.3V。XC6206P33的输入范围为1.8V到6.0V，因此您可以在3.3V和5V下与Arduino一起使用此模块。

**双向电平转换电路**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/schematic_2.jpg" /></div>

这是一个典型的双向电平转换电路，用于连接I2C总线的两个不同电压部分。该传感器的I<sup>2</sup>C总线使用3.3V，如果Arduino的I<sup>2</sup>C总线使用5V，则需要此电路。在上面的原理图中，**Q6**和**Q5**是N沟道MOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)，充当双向开关。为了更好地理解这部分，您可以参考[AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上面提到的支持平台是该模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 入门指南

### 与Arduino一起使用

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield |红外温度传感器阵列 |2.8 TFT触摸屏扩展板V2.0|
|--------------|-------------|-----------------|-------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/2.8touch%20shieldv2.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-Array-(AMG8833)-p-3185.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/2.8-TFT-Touch-Shield-V2.0-p-1286.html" target="_blank">立即购买</a>|

:::note
**1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的线缆无法传输数据。如果您不确定您的线缆，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买

**2** 每个Grove模块在购买时都会附带一根Grove线缆。如果您丢失了Grove线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::

- **步骤1.** 将Grove - 红外温度传感器阵列(AMG8833)连接到Grove-Base Shield的**I2C**端口。

- **步骤2.** 将Grove - Base Shield插入Seeeduino。

- **步骤3.** 将2.8 TFT触摸屏扩展板V2.0插入Grove - Base Shield。

- **步骤4.** 通过USB线将Seeeduino连接到PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/connect_1.jpg" /></div>

:::note
        如果我们没有Grove Base Shield，我们也可以直接将此模块连接到Seeeduino，如下所示。
:::

| Seeeduino      |  Grove线缆       | Grove - 红外温度传感器阵列(AMG8833) |
|--------------- |--------------------|-----|
| GND            | 黑色              | GND |
| 5V或3.3V     | 红色                | VCC |
| SDA            | 白色              | SDA |
| SCL            | 黄色             | SCL |

#### 软件

:::note
如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤1.** 从Github下载[Seeed_AMG8833](https://github.com/Seeed-Studio/Seeed_AMG8833)库。

- **步骤2.** 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)为Arduino安装库。

- **步骤3.** 重启Arduino IDE。打开示例，您可以通过以下三种方式打开：
    1. 在Arduino IDE中通过路径直接打开：**文件 --> 示例 --> Grove IR Matrix Temperature sensor AMG8833 --> TFT_screen_demo**。
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/path_1.jpg" /></div>

    2. 在您的计算机中点击**TFT_screen_demo.ino**打开，您可以在文件夹**XXXXArduino\libraries\Seeed_AMG8833-master\examples\TFT_screen_demo**中找到它，**XXXX**是您安装Arduino IDE的位置。
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/path_2.jpg" /></div>

3. 或者，您可以直接点击代码块右上角的图标 ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) 将以下代码复制到 Arduino IDE 的新草图中。

```cpp
#include <stdint.h>
#include <TFTv2.h>
#include <SPI.h>

#include "Seeed_AMG8833_driver.h"


AMG8833 sensor;

#define TFT_PIXELS_NUM   30

void parse_int_status(u8* status)
{
    u8 val=0;
    for(u32 i=0;i<8;i++)
    {
        if(status[i])
        {
            for(u32 j=0;j<8;j++)
            {
                if(status[i]&((1<<j)))
                {
                    Serial.print("pixel ");
                    Serial.print(8*i+j+1);
                    Serial.println("interrupt is generated!!!");
                }
            }
        }
    }
}

void print_status(u8* status)
{
    for(u32 i=0;i<8;i++)
    {
        Serial.print(status[i],HEX);
        Serial.print("  ");

    }
    Serial.println("  ");
}




void setup()
{
    Serial.begin(115200);
    sensor.init();
    TFT_BL_ON;
    /*2.8 TFT screen. url:https://www.seeedstudio.com/2.8-TFT-Touch-Shield-V2.0-p-1286.html*/
    Tft.TFTinit();
}



void loop()
{
    u8 val=0;
    float pixels_temp[PIXEL_NUM]={0};
    u16 color[PIXEL_NUM]={0};
    /*Read temperature*/
    sensor.read_pixel_temperature(pixels_temp);
    /*Different temperature correspond to different color.*/
    for(u32 i=0;i<PIXEL_NUM;i++)
    {
        if(pixels_temp[i]<29)
        {
            color[i]=BLUE;
        }
        else if((pixels_temp[i]>=29)&&(pixels_temp[i]<30))
        {
            color[i]=GREEN;
        }
        else if((pixels_temp[i]>=30)&&(pixels_temp[i]<31))
        {
            color[i]=YELLOW;
        }
        else if((pixels_temp[i]>=31)&&(pixels_temp[i]<33))
        {
            color[i]=0xfd00;
        }
        else
        {
            color[i]=RED;
        }
    }
    /*Use a TFT screen to display.*/
    for(u32 i=0;i<PIXEL_NUM;i++)
    {
        Tft.fillScreen(TFT_PIXELS_NUM*(i%8),TFT_PIXELS_NUM*(i%8+1),TFT_PIXELS_NUM*(8-i/8),TFT_PIXELS_NUM*(7-i/8),color[i]);
    }
}

```

:::caution
        库文件可能会更新。此代码可能不适用于更新后的库文件，因此我们建议您使用前两种方法。
:::

- **步骤 4.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

:::tip
    如果一切顺利，您将看到 TFT 屏幕显示温度图。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/result_arduino.gif" /></div>

### 与 Raspberry Pi 配合使用

:::note
        如果这是您第一次使用树莓派，请参考[树莓派入门指南](https://www.raspberrypi.org/documentation/)。
:::

#### 硬件

**所需材料**

| Raspberry Pi |Grove Base Hat for Raspberry Pi|红外温度传感器阵列 |5 英寸 800x480 电容触摸屏|
|--------------|-------------|-----------------|-------|
|    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grove_Pi_hat.jpg" /></div>|    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/thumbnail.jpg" /></div>|    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/pi_display.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3184.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-Array-(AMG8833)-p-3185.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/5-inch-800x480-Capacitive-TouchScreen-p-2923.html" target="_blank">立即购买</a>|

:::tip
如果您没有 Pi 屏幕，可以使用 PC 显示器，或者可以使用 [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/) 远程显示结果。
:::

- **步骤 1.** 将 Grove - 红外温度传感器阵列 (AMG8833) 连接到 Grove Base Hat for Raspberry Pi 的 **I2C** 端口。

- **步骤 2.** 将 Grove Base Hat for Raspberry Pi 插入 Raspberry Pi。

- **步骤 3.** 通过 HDMI 线缆将 5 英寸 800x480 电容触摸屏与 Raspberry Pi 连接。

- **步骤 4.** 通过 micro-USB 线缆将 Raspberry Pi 连接到 PC，通过另一根 micro-USB 线缆为 5 英寸 800x480 电容触摸屏供电。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/connect_2.jpg" /></div>

#### 软件

- **步骤 1.** 为您的树莓派打开 I2C 接口。您可以打开终端并输入以下命令。

```python
sudo raspi-config
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/I2C_1.png" /></div>

- **步骤 2.** 当您看到上图时，选择 **Interfacing Options**，然后选择 **I2C** 来启用 I2C 接口。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/I2C_2.jpg" /></div>

- **步骤 3.** 完成后，您可以使用以下命令进行检查。

```python
sudo i2cdetect -y 1
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/I2C_3.jpg" /></div>

您可以看到 I2C 地址，这意味着树莓派已经检测到传感器。如果没有，请重新执行步骤 1~3。好的，让我们继续。

- **步骤 4.** 在终端中输入以下命令来安装相关依赖项。

```python
sudo apt-get update
sudo apt-get install -y build-essential python-pip python-dev python-smbus git
sudo apt-get install -y python-scipy python-pygame
sudo pip install colour
```

- **步骤 5.** 下载 Seeed AMG8833 Python 库。

```python
git clone https://github.com/Seeed-Studio/Seeed_AMG8833_Raspberry_Python.git
```

- **步骤 6.** 进入 AMG8833 文件夹，并运行演示程序。

```python
pi@raspberrypi:~ $ cd Seeed_AMG8833_Raspberry_Python/
pi@raspberrypi:~/Seeed_AMG8833_Raspberry_Python $ ls
driver.py   README.md         Seeed_AMG8833.pyc
driver.pyc  Seeed_AMG8833.py  thermal_cam.py
pi@raspberrypi:~/Seeed_AMG8833_Raspberry_Python $ python thermal_cam.py
```

:::tip
如果一切顺利，您将看到。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/result_pi.gif" /></div>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/Grove%20-%20Infrared%20Array%20Sensor%20(AMG8833).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - 红外温度传感器阵列 (AMG8833) Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/Grove%20-%20Infrared%20Array%20Sensor%20(AMG8833).zip)

- **[Zip]** [Seeed AMG8833 Arduino 库](https://github.com/Seeed-Studio/Seeed_AMG8833/archive/master.zip)

- **[Zip]** [Seeed AMG8833 Python 库](https://github.com/Seeed-Studio/Seeed_AMG8833_Raspberry_Python/archive/master.zip)

- **[PDF]** [AMG8833 数据手册](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/AMG88.pdf)

- **[PDF]** [XC6206 数据手册](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)

## 项目

这是该产品的介绍视频，包含简单的演示，您可以尝试一下。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/NG0E-qs8zgQ?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技术支持与产品讨论

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 传感器以及 8 合 1 气象站。为您下一个成功的工业项目尝试最新的 SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>