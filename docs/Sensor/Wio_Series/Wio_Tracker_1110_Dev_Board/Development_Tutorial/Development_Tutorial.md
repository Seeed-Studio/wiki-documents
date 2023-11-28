---
description: Development_Tutorial_of_Wio-Tracker 1110 
title: Development Tutorial
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /development_tutorial_for_Wio-trakcer
last_update:
  date: 9/4/2023
  author: Jessie
---

Before start the development, please check [Setup your toolchain](https://wiki.seeedstudio.com/setup_toolchain_for_wio_tracker/) to set up the tool first.

## Hardware overview

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/hard-overview.png" alt="pir" width={800} height="auto" /></p>

## Grove


There are 6 Grove interfaces in the DK, which can be connected to 300+ Grove modules, and supports ADC/UART and I2C transmission protocols.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/grove_pins.png" alt="pir" width={600} height="auto" /></p>


### Grove I2C

There is a Grove I2C port on the DK, with `SDA` on pin 27 and `SCL` on pin 26. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_iic.png" alt="pir" width={300} height="auto" /></p>

To connect to a Grove IIC module, the sensor power must be enabled：`I2C_PWR` (pin 7). This pin controls the pull-up voltage on the IIC signal line:



### Grove UART


The Wio Tracker 1110 Dev Board has two UART peripherals, namely `uart0` and `uart1`.  `uart0` pins are connected to the CH340C for debugging purposes, while `uart1` serves as a Grove UART Port.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_uart.png" alt="pir" width={300} height="auto" /></p>


Referring to the schematic, TXD is located on pin 8 and RXD is on pin 6. 


```cpp
#define     LED1                      13
#define     LED2                      14
#define     TXD                       8
#define     RXD                       6
#define     UART_TX_RX_BUF_SIZE       256
```



### Grove Digital