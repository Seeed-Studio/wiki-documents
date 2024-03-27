---
description: Get Started with SenseCAP Indicator Introduction
title: Introduction
keywords:
- Get Started SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator
sidebar_position: 1
last_update:
  date: 3/3/2024
  author: DuKaiyin
---

# **概览**

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/IOdI5_MGbCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<div class="button-container">
<a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">
        获取一个现在🖱️</a>
</div>

SenseCAP Indicator是由ESP32-S3和RP2040双MCU驱动的4英寸触摸屏，支持Wi-Fi/蓝牙/LoRa通信。

该设备配备两个Grove接口，支持ADC和I2C传输协议，以及两个带有GPIO扩展引脚的USB Type-C端口，用户可以通过USB端口轻松扩展外部附件。

SenseCAP Indicator是一个完全开源的强大IoT开发平台，为开发人员提供支持。同时提供一站式ODM融合服务，以进行定制和快速扩展。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png"/>
</div>


## **特征**

- **双MCU和丰富的GPIO**
配备强大的ESP32S3和RP2040双MCU以及超过400个兼容Grove的GPIO，提供灵活的扩展选项。
- **实时空气质量监测**
内置tVOC和CO2传感器，以及外部Grove AHT20 TH传感器，用于更精确的温度和湿度读数。
- **本地LoRa Hub用于物联网连接**
集成Semtech SX1262 LoRa芯片（可选），可连接LoRa设备到流行的IoT平台，如Matter，通过Wi-Fi连接，无需额外兼容设备。
- **完全开源平台**
利用广泛的ESP32和Raspberry Pi开源生态系统，实现无限的应用可能性。
- **提供融合ODM服务**
Seeed Studio还提供一站式ODM服务，快速定制和扩展，以满足各种需求。（请联系 iot@seeed.cc）


## **硬件概览**

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_2.png"/></div>
<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_3.png"/></div>

### **系统图**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_7.png"/></div>


### **按钮功能**
- **短按:** 关闭/唤醒屏幕。
- **长按3秒**  打开/关闭设备
- **长按10秒:** 恢复出厂固件

### **Grove**

有两个Grove接口用于连接Grove模块，为开发者提供更多的可能性。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/grove.png"/></div>

Grove是一个模块化、标准化的连接原型系统，也是一个强大的开源硬件生态系统。点击 [**这里**](https://www.seeedstudio.com/category/Grove-c-1003.html) 了解更多。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_4.png"/></div>


### **LoRa®**
内置的Semtech SX1262 LoRa®模块使您能够构建LoRa®应用程序，并通过Wi-Fi将本地LoRa传感器连接到云端。例如，您可以构建一个LoRa中继设备，将您的LoRa传感器通过Wi-Fi连接到您的智能家居生态系统，以实现在Wi-Fi上的Matter通信。通过这种方式，LoRa设备可以通过Wi-Fi连接到Matter生态系统，而无需购买新的兼容Matter的设备。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_55.png"/></div>


## **规格**

|屏幕|3\.95 Inch, Capacitive RGB Touch Screen|
| :- | :- |
|**屏幕分辨率**|480 x 480 pixels|
|**电源输入**|5V-DC, 1A|
|**电池**|No battery,only powered by USB port|
|**处理器**|<p>**ESP32-S3:** Xtensa® dual-core 32-bit up to 240 MHz</p><p>**RP2040:** Dual ARM Cortex-M0+ up to 133MHz</p>|
|**储存**|<p>**ESP32-S3:** 8MB</p><p>**RP2040:** 2MB</p>|
|**外置储存**|Support up to 32GB Micro SD Card (not included)|
|**Wi-Fi**|802\.11b/g/n, 2.4GHz|
|**Bluetooth**|Bluetooth 5.0 LE|
|**LoRa(SX1262**)|<p>LoRa and FSK Modem</p><p>+21dBm Max Transmitted Power</p> <p>-136dBm@SF12 BW=125KHz RX Sensitivity</p><p>Up to 5km communication distance</p>|
|**传感器（可选）**|<p>**CO2(Sensirion SCD41)**</p><p>Range: 0-40000ppm</p><p>Accuracy: 400ppm-5000ppm ±(50ppm+5% of reading)</p><p>**TVOC (SGP40)**</p><p>Range: 1-500 VOC Index Points</p>**Grove Temperature and Humidity Sensor(AHT20)**<p>Temperature Range: -40 ~ + 85 ℃/± 0.3 ℃; 0 ~ 100% RH/± 2% RH (25 ℃)</p>|

# **技术支持**

**需要帮助您的SenseCAP Indicator？ 我们在这里为您提供帮助！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
