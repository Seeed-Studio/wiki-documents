---
description: Dive into the Hardware
title: Dive into the Hardware
keywords:
- Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Dive_into_the_Hardware
last_update:
  date: 5/17/2023
  author: Yvonne
---
# **Overview**

The SenseCAP Indicator is a 4-inch touch screen device that is powered by the ESP32 and RP2040 dual MCUs. ESP32 and RP2040 are both highly capable microcontrollers that offer a range of features and functions. 


This chapter will provide detailed information about ESP32 and RP2040 of SenseCAP Indicator, including their functions and usage. It covers include programming, interfacing with sensors, and communicating with other devices，etc.


# **Dive into the Hardware**

## **Hardware Diagram**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>

As shown in the figure, the SenseCAP Indicator is primarily driven by the ESP32 and RP2040 MCUs, which are connected to the LoRa transceiver, LCD, and other peripheral circuits. 
In the following sections, we will provide an overview of the ESP32 and RP2040 development and their respective capabilities.

## **ESP32-S3**

ESP32-S3 is a highly integrated system-on-chip (SoC) that combines a powerful CPU, 2.4 GHz Wi-Fi, and Bluetooth 5.0 capabilities, also includes a range of input/output pins and interfaces, such as UART, SPI, I2C, and PWM, which allow it to interface with other devices and sensors.



## **RP2040**

SenseCAP Indicator is embeded with [RP2040](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html?), RP2040 features a dual-core ARM Cortex-M0+ processor with clock speeds up to 133 MHz, 264KB of RAM, and a range of peripherals such as USB, UART, SPI, and I2C. It also includes a unique feature called Programmable I/O (PIO), which allows users to implement custom digital interfaces without the need for specialized hardware.




<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/rppinout.png"/></div>


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



    
# **Tech Support**

Don’t worry, we’ve got you covered! Please visit our [Seeed Official Discord Channel](https://discord.gg/cPpeuQMM) to ask your questions！
If you have large order or customization requirment, please contact iot@seeed.cc
