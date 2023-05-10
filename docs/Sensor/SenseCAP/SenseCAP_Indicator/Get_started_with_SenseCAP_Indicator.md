---
description: Get Started with SenseCAP Indicator (ESP32S3&RP2040 4-Inch Touch Screen)
title: Get Started with SenseCAP Indicator (ESP32S3&RP2040 4-Inch Touch Screen)
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
last_update:
  date: 5/9/2023
  author: Thomas
---

# SenseCAP Indicator (ESP32S3&RP2040 4-Inch Touch Screen)



# Introduction


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png"/></div>


<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html?" target="_blank"><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" border="0" /></a></p>

SenseCAP Indicator is a 4-inch touch screen driven by ESP32 and RP2040 dual-MCU and supports Bluetooth/Wi-Fi/LoRa communication. 

The board comes with Type C and Grove interfaces, supports ADC and IIC transmission protocols, and can easily connect to other peripherals with rich GPIOs. 

SenseCAP Indicator is a fully open source powerful IoT development platform for developers. One-stop ODM Fusion service is also available for customization and quick scale-up.

## **Features**



- **Dual MCUs and Rich GPIOs:** Equipped with powerful ESP32S3 and RP2040 dual MCUs and over 400 Grove-compatible GPIOs for flexible expansion options.
- **Real-time Air Quality Monitoring:** Built-in tVOC and CO2 sensors, and an external Grove AHT20 TH sensor for more precise temperature and humidity readings.
- **Local LoRa Hub for IoT Connectivity:** Integrated Semtech SX1262 LoRa chip (optional) for connecting LoRa devices to popular IoT platforms such as Matter via Wi-Fi, without the need for additional compatible devices.
- **Fully Open Source Platform:** Leverage the extensive ESP32 and Raspberry Pi open source ecosystem for infinite application possibilities.
- **Fusion ODM Service Available:** Seeed Studio also provides one-stop ODM service for quick customization and scale-up to meet various needs.







## **Hardware Overview**

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_2.png"/></div>
<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_3.png"/></div>

### **System Diagram**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_7.png"/></div>


### **Button Function**
Short press: Turn off /wake up the screen

Long press for 3s: Switch on/switch off the device

Long press for 10s: Factory reset

### **Grove**

There are two Grove interfaces for connecting Grove modules, providing more possibilities for developers. 
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/grove.png"/></div>

Grove is a modular, standardized connector prototyping system and a strong open source hardware ecosystem. Click [**here**](https://www.seeedstudio.com/category/Grove-c-1003.html) to learn more

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_4.png"/></div>


### **LoRa**
The embedded SX1262 LoRa module enables you to build the LoRa application and connect your local LoRa sensors to the Cloud via Wi-Fi. For example, you could build a LoRa hub device to connect your LoRa sensors to your smart home ecosystem to implement Matter over Wi-Fi. In this way, the LoRa devices could be connected to the Matter ecosystem via Wi-Fi, without the need to buy a new Matter-compatible device.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_5.png"/></div>




## **Specification**

|Screen|3\.95 Inch, Capacitive RGB Touch Screen|
| :- | :- |
|Screen Resolution|480 x 480 pixels|
|Power Supply|5V DC, 1A|
|Battery|N/A|
|Processor|<p>ESP32-S3: Xtensa® dual-core 32-bit LX7 microprocessor, up to 240 MHz</p><p>RP2040: Dual ARM Cortex-M0+ up to 133MHz</p>|
|Flash|<p>ESP32S3: 8MB</p><p>RP2040: 2MB</p>|
|External Storage|Support up to 32GB Micro SD Card (not included)|
|Wi-Fi|802\.11b/g/n, 2.4GHz|
|Bluetooth|Bluetooth 5.0 LE|
|LoRa(SX1262)|LoRaWAN/(G)FSK, 21dBm Max Transmitted Power Sensitivity/-136dBm@SF12 BW=125KHz RX Sensitivity, Up to 5km (depending on gateway antenna and environments)|
|Sensors(Optional)|CO2 (SCD41)|<p>Range: 0-40000ppm</p><p>Accuracy: 400ppm - 5000ppm ±(50ppm+5% of reading)</p>|
||TVOC (SGP40)|Range: 1-500 VOC Index Points|
||Grove Temperature and Humidity Sensor (AHT20)|Range: -40 ~ + 85 ℃/± 0.3 ℃; 0 ~ 100% RH/± 2% RH (25 ℃)|
|Buzzer|MLT-8530, Resonant Frequency：2700Hz|


# Getting Start with SenseCAP Native Firmware


The SenseCAP Indicator is equipped with built-in tVOC and CO2 sensors, combined with the SenseCAP native firmware, which easily transforms it into a desktop air quality detector with simple settings.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_8.png"/></div>

## Setting
Quickly configure your SenseCAP Indicator through a visual page.
<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/setting.png"/></div>

### **Wi-Fi Setting**
Select the WiFi you need, input the password and connect it.


<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Indicator_9.png"/></div>


The green icon means you have successfully connected to Wi-Fi.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Indicator_10.png"/></div>

### **Display Setting**
**Brightness**: Adjust screen brightness

**Sleep Mode**: Turn off the screen according to the interval you set.During sleep mode, the screen is inactive and does not display any content.


<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_15.png"/></div>

#### **Date & Time Setting**
**Time Format:** You can set 24H or 12H format.

**Time Auto Update/Zone Auto Update**: When the device is connected to WiFi, it will automatically obtain the corresponding time zone and date.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_16.png"/></div>


**Manual setting**: If the time obtained through the time zone cannot automatically identify the winter time or device is offline, then you can manually set the time zone 

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_17.png"/></div>




### **Sensor Data**
We offers four different versions: D1, D1S, D1L, and D1Pro. Each version is designed to meet different application needs without any extra cost from unnecessary hardware. Here are the differences between the versions:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/version.png"/></div>

The device's firmware has two pages that display data for tVOC, CO2, temperature, and humidity.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_12.png"/></div>

> **Note:** The UI for the native firmware will remain the same for all versions for SenseCAP Indicator. For D1 and D1L version which has no embedded sensors. the sensor data will show 'N/A'. Moreover, you can create your own customized UI.

Click the specified sensor to enter the detailed information page, and you can choose to display the value of 24h or a week.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_13.png"/></div>



