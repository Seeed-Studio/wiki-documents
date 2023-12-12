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

There are 6 Grove interfaces in the Wio Tracker 1110 Dev Board, which can be connected to 300+ Grove modules. Click [here](https://wiki.seeedstudio.com/Grove_Sensor_Intro/) to know more about the Grove module.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio-tracker-grove.png" alt="pir" width={800} height="auto" /></p>




### Grove I2C

There is a Grove I2C port on the DK, with `SDA` on pin 27 and `SCL` on pin 26. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_iic.png" alt="pir" width={300} height="auto" /></p>





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



### Grove Analog



<details> 
<summary>Example Code:</summary>

```cpp
#include <Adafruit_TinyUSB.h> // for Serial

constexpr int ADCIN = A0;
constexpr float MV_PER_LSB = 3600.0f / 1024.0f; // 10-bit ADC with 3.6V input range

void setup()
{
  delay(100);
  Serial.begin(115200);
  while (!Serial) delay(100);
}

void loop()
{
	// Get a fresh ADC value
  long sum = 0;
  for (int i = 0; i < 32; i++)
  {
    sum += analogRead(ADCIN);
  }
  int adcvalue = sum / 32;

  // Display the results
  Serial.print(adcvalue);
  Serial.print(" [");
  Serial.print((float)adcvalue * MV_PER_LSB);
  Serial.println(" mV]");

  delay(1000);
}
```
</details> 

### LoRaWAN 



## Resource

**[Github]** [Seeed-Studio/Wio_Tracker_1110_Dev_Board](https://github.com/Seeed-Studio/Wio_Tracker_1110_Examples)