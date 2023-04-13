---
description: SenseCAP S2100 LoRaWAN Data Logger
title: SenseCAP S2100 LoRaWAN Data Logger
keywords:
- SenseCAP data logger
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
last_update:
  date: 4/12/2023
  author: Yvonne
---


# SenseCAP S2100 LoRaWAN Data Logger


<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/1.png"/></div>


The SenseCAP S2100 Data Logger is a versatile device that can connect to MODBUS-RTU RS485/Analog/GPIO sensors, allowing for easy transmission of data to the LoRaWAN network. With its LoRa and IP66 design, this device boasts impressive stability and reliability, and can cover a long transmission range while keeping ultra-low power consumption. It is perfect for outdoor use, and can be powered by battery or connected to a 12V external power supply for even greater flexibility. When connected to the 12V power supply, the replaceable built-in battery acts as a backup power source. Additionally, the S2100 Data Logger is optimized for OTA with built-in Bluetooth, making setup and updates quick and simple. To top it off, the S2110 converter enables the S2100 Data Logger to connect to Grove Sensors, making it an excellent choice for DIY industrial-level LoRaWAN sensors and small-scale deployment.
<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

# Features
- Strong Compatibility with different Sensors: supports all MODBUS-RTU RS485/Analog(4 ~ 20mA/0~10V) / GPIO(level/pulse) sensors.
- Compatible with Worldwide LoRaWAN® Networks: Compatible with LoRaWAN® V1.0.3 protocol and can work with LoRaWAN® gateway. (support the universal frequency plan from 863MHz ~928MHz).
- Long Range & replaceable Battery powered: With LoRaWAN® wireless transmission, S2100 supports 19Ah built-in battery and external 12V DC to supply devices, and ultra-wide-transmission range of 2km in urban scenes and 10km in line of sight scenes.
- Designed to Use in Harsh Environments: -40℃ ~ 85℃ operating temperature and IP66 rated enclosure, suitable for outdoor use, high UV exposure, heavy rain, dusty conditions, etc.
- Remote configuration and management: Seeed provides SenseCAP Mate APP and SenseCAP Portal, allows users to remotely manage data and configure.

# Specification
## Interface
|Item|Value|
|---|---|
|Current Input|4 to 20 mA (2 channel)|
|Voltage Input|0 to 10V (2 channel)|
|RS485|RS485 Modbus-RTU Protocol|

## General Parameters

|Item|Value|
|---|---|
|Product Model|SenseCAP S2100|
|Microcontroller|Wio-E5|
|Support Protocol|LoRaWAN v1.0.3 Class A|
|Built-in Bluetooth|App Tool to change parameters and set data conversion algorithm|
|Long-Range Channel Plan|IN865/EU868/US915/AU915/ AS923|
|Max Transmitted Power|19dBm|
|Sensitivity|-136dBm@SF12 BW=125KHz|
|Communication Distance|2 to 10km (depending on and environment)|
|IP Rating|IP66|
|Operating Temperature|-40 to +85 °C|
|Operating Humidity|0 to 100 %RH (non-condensing)|
|Device Weight|280g|
|Certification|CE / FCC / RoHS|

## Battery (Contained in equipment)
|Item|Value|
|---|---|
|Battery Life|Up to 10 years|
|Battery Capacity|19Ah (non-rechargeable)|
|Battery Type|Standard D-size SOCl2 Battery|

# Architecture


<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/2.png"/></div>



# Power Source Option

- Option 1: the data logger can work in Periodic mode. Powered by a built-in 19Ah Standard D-size Li-SOCl2 battery which is easy to buy online, it can be installed and deployed in an outdoor environment without additional power.


- Option 2: the data logger can work in Constant Power mode with an external 12V DC power supply. We provide a matching Junction Box Kit so that the data logger can be quickly assembled.


<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/3.png"/></div>


# Support Industrial Sensors of Different Interfaces

S2100 LoRaWAN Data Logger is a single-channel collector, and only supports one of the following protocols at one time:

RS485: Support standard RS485 Modbus-RTU protocol
Analog: 2 x 0 ~ 10V or 2 x 4 ~ 20mA.
GPIO: 1 x GPIO, collect level or pulse signal

:::tip
Modbus-RTU: This protocol primarily uses an RS-232 or RS-485 serial interfaces for communications and is supported by every commercial SCADA, HMI, OPC server and data acquisition software program in the marketplace. This makes it very easy to integrate Modbus-compatible equipment into new or existing monitoring and control applications.

GPIO: stands for General Purpose Input/Output. It's a standard interface used to connect microcontrollers to other electronic devices. For example, it can be used with sensors, diodes, displays, and System-on-Chip modules.
:::
# Application

<div align="center"><img width="{800}" src="https://wdcdn.qpic.cn/MTY4ODg1NTA2NTM1OTkxNw_136830_-0LyGczsW0uya6Pi_1670038120?w=1280&h=696.6093366093365"/></div>



