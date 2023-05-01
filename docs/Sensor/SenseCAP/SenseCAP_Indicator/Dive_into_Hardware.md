---
description: Dive into Hardware
title: Dive into Hardware
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
last_update:
  date: 5/01/2023
  author: Yvonne
---



# **Dive into Hardware**

The SenseCAP Indicator is a 4-inch touch screen device that is powered by the ESP32 and RP2040 dual MCUs. ESP32 and RP2040 are both highly capable microcontrollers that offer a range of features and functions. 


This chapter will provide detailed information about ESP32 and RP2040 of SenseCAP Indicator, including their functions and usage. It covers include programming, interfacing with sensors, and communicating with other devices，etc.



## **Hardware Diagram**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>

As shown in the figure, the SenseCAP Indicator is primarily driven by the ESP32 and RP2040 MCUs, which are connected to the LoRa transceiver, LCD, and other peripheral circuits. 
In the following sections, we will provide an overview of the ESP32 and RP2040 development and their respective capabilities.



## **ESP32-S3 and RP2040 Communication**

ESP32 and RP2040 use serial port communication, using the [COBS](http://www.stuartcheshire.org/papers/COBSforToN.pdf) communication protocol. 


Libraries used in ESP32:  https://github.com/cmcqueen/cobs-c
Arduino library used by RP2040:  https://github.com/bakercp/PacketSerial


In the terminal demo, the following data frames are used for transmission：

| Byte0    | Byte1-4          |
| -------- | ---------------- |
| PKT_TYPE | PKT_PARA (Little Endia)  |


**PKT_TYPE list**


**Note**: The following commands are for reference only, of course you can also define your own commands.


| PKT_TYPE  | DIR	 | Notes  |
|:----------|:----------|:----------|
| 0x00    | ESP32<->RP2040    |   ACK, string, value:'ACK'  |
| 0xA0    | ESP32->RP2040    |  Collect Interval CMD, PKT_PARA is uint32_t |
| 0xA1    | ESP32->RP2040    |  Beep on CMD, PKT_PARA is uint32_t   |
| 0xA2    | ESP32->RP2040    |  Beep off CMD, PKT_PARA is uint32_t  |
| 0xA3    | ESP32->RP2040    |  Shutdown CMD, PKT_PARA is uint32_t  |
| 0xA4    | ESP32->RP2040    |  Power On CMD, PKT_PARA is uint32_t  |
| 0xA0~0xAF  | ESP32->RP2040    |  Other data or cmd   |
| 0xB0    | RP2040->ESP32    | SCD41 Temperature data, PKT_PARA is float    |
| 0xB1    | RP2040->ESP32    | SCD41 Humidity data, PKT_PARA is float    |
| 0xB2    | RP2040->ESP32    | SCD41 CO2 data, PKT_PARA is float    |
| 0xB3    | RP2040->ESP32    | ATH20 Temperature data, PKT_PARA is float    |
| 0xB4    | RP2040->ESP32    | ATH20 Humidity data, PKT_PARA is float    |
| 0xB5    | RP2040->ESP32    | SGP40 tVOC data, PKT_PARA is float. 0~500 index   |
| 0xB6~0xBF    | RP2040->ESP32    | Other data or cmd, PKT_PARA is float    |







### **ESP32-S3**
Coming soon

### **RP2040**
Coming soon




# **Tech Support**

Don’t worry, we’ve got you covered! Please visit our [Seeed Official Discord Channel](https://discord.gg/cPpeuQMM) to ask your questions！
if you have large order requirment, please contact iot@seeed.cc
