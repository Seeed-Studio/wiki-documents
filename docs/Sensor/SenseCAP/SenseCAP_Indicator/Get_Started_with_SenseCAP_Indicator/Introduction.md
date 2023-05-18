---
description: Get Started with SenseCAP Indicator Introduction
title: Get Started with SenseCAP Indicator Introduction
keywords:
- SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Get_Started_with_SenseCAP_Indicator_Introduction
last_update:
  date: 5/16/2023
  author: Yvonne
---
# **Overview**


SenseCAP Indicator is a 4-inch touch screen driven by ESP32-S3 and RP2040 Dual-MCU and supports Wi-Fi/Bluetooth/LoRa communication. 

The device comes two Grove interfaces, which supports ADC and I2C transmission protocols, and two USB Type-C ports with GPIO expantion pins inside, so user can easily expand external accessories via USB port.

SenseCAP Indicator is a fully open source powerful IoT development platform for developers. One-stop ODM Fusion service is also available for customization and quick scale-up.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png"/></div>


<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html?" target="_blank"><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" border="0" /></a></p>



## **Features**



- **Dual MCUs and Rich GPIOs** 
Equipped with powerful ESP32S3 and RP2040 dual MCUs and over 400 Grove-compatible GPIOs for flexible expansion options.
- **Real-time Air Quality Monitoring** 
Built-in tVOC and CO2 sensors, and an external Grove AHT20 TH sensor for more precise temperature and humidity readings.
- **Local LoRa Hub for IoT Connectivity** 
Integrated Semtech SX1262 LoRa chip (optional) for connecting LoRa devices to popular IoT platforms such as Matter via Wi-Fi, without the need for additional compatible devices.
- **Fully Open Source Platform** 
Leverage the extensive ESP32 and Raspberry Pi open source ecosystem for infinite application possibilities.
- **Fusion ODM Service Available** 
Seeed Studio also provides one-stop ODM service for quick customization and scale-up to meet various needs.(please contact iot@seeed.cc)


## **Hardware Overview**

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_2.png"/></div>
<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_3.png"/></div>

### **System Diagram**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_7.png"/></div>


### **Button Function**
**Short Press:** Turn off /Wake up the screen.

**Long Press for 3s:** Switch on/Wwitch off the device.

**Long Press for 10s:** Factory firmware reset.

### **Grove**

There are two Grove interfaces for connecting Grove modules, providing more possibilities for developers. 
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/grove.png"/></div>

Grove is a modular, standardized connector prototyping system and a strong open source hardware ecosystem. Click [**here**](https://www.seeedstudio.com/category/Grove-c-1003.html) to learn more

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_4.png"/></div>


### **LoRa®**
The embedded Semtech SX1262 LoRa® module enables you to build the LoRa® application and connect your local LoRa sensors to the Cloud via Wi-Fi. For example, you could build a LoRa hub device to connect your LoRa sensors to your smart home ecosystem to implement Matter over Wi-Fi. In this way, the LoRa devices could be connected to the Matter ecosystem via Wi-Fi, without the need to buy a new Matter-compatible device.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_55.png"/></div>




## **Specification**

|Screen|3\.95 Inch, Capacitive RGB Touch Screen|
| :- | :- |
|**Screen Resolution**|480 x 480 pixels|
|**Power Supply**|5V-DC, 1A|
|**Battery**|No battery,only powered by USB port|
|**Processor**|<p>**ESP32-S3:** Xtensa® dual-core 32-bit up to 240 MHz</p><p>**RP2040:** Dual ARM Cortex-M0+ up to 133MHz</p>|
|**Flash**|<p>**ESP32-S3:** 8MB</p><p>**RP2040:** 2MB</p>|
|**External Storage**|Support up to 32GB Micro SD Card (not included)|
|**Wi-Fi**|802\.11b/g/n, 2.4GHz|
|**Bluetooth**|Bluetooth 5.0 LE|
|**LoRa(SX1262**)|<p>LoRa and FSK Modem</p><p>+21dBm Max Transmitted Power</p> <p>-136dBm@SF12 BW=125KHz RX Sensitivity</p><p>Up to 5km communication distance</p>|
|**Sensors**(Optional)|<p>**CO2(Sensirion SCD41)**</p><p>Range: 0-40000ppm</p><p>Accuracy: 400ppm-5000ppm ±(50ppm+5% of reading)</p><p>**TVOC (SGP40)**</p><p>Range: 1-500 VOC Index Points</p>**Grove Temperature and Humidity Sensor(AHT20)**<p>Temperature Range: -40 ~ + 85 ℃/± 0.3 ℃; 0 ~ 100% RH/± 2% RH (25 ℃)</p>|


# **Tech Support**

Don’t worry, we’ve got you covered! Please visit our [Seeed Official Discord Channel](https://discord.gg/cPpeuQMM) to ask your questions！
If you have large order or customization requirment, please contact iot@seeed.cc
