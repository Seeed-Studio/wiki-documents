---
description: Grove - 3-Axis Digital Accelerometer (LIS3DHTR)
title: Grove - 3-Axis Digital Accelerometer (LIS3DHTR)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-3-Axis-Digital-Accelerometer-LIS3DHTR
last_update:
  date: 1/5/2023
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/products/114020121/img/114020121wiki.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114020121/img/114020121wiki.png" alt="pir" width={600} height="auto" /></p>

Grove - 3-Axis Digital Accelerometer(LIS3DHTR) is a low-cost 3 - Axis accelerometer in a bundle of Grove products. It is based on the LIS3DHTR chip which provides multiple ranges and interfaces selection. You can never believe that such a tiny 3 - Axis accelerometer can support I2C, SPI, and ADC GPIO interfaces, which means you can choose any way to connect with your development board. Besides, this accelerometer can also monitor the surrounding temperature to tune the error caused by it.  

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html)

## Features

- Measurement range: ±2g, ±4g, ±8g, ±16g, multiple ranges selection.
- Multiple interfaces option: Grove I2C interface, SPI interface, ADC interface.
- Temperature adjustable: able to adjust and tune the error caused by temperature.
- 3/5V power supply.

## Specification

|Item|Value|
|---|---|
|Power Supply|3/5V|
|Interfaces|I2C/SPI/GPIO ADC|
|I2C address|Default 0x19, can be changed to 0x18 when connecting SDO Pin with GND|
|ADC GPIO Power input|0-3.3V|
|Interruption|An interruption Pin reserved|
|SPI Mode set up|Connect the CS Pin with GND|

## Platform Supported
<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Getting Started

### Play with Seeeduino XIAO based on Grove I2C interface

#### Materials Required

|Seeeduino XIAO|Grove Breadboard|Grove - 3-Axis Digital Accelerometer (LIS3DHTR)|
|--------|-----------------------|------------|
|![](https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png)|![](https://files.seeedstudio.com/products/114020121/img/114020121wikithumbnail.jpg)|
|[Get one now](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Get one now](https://www.seeedstudio.com/Grove-Breadboard-p-4034.html)|[Get one now](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html)|

#### Hardware connection

<!-- ![](https://files.seeedstudio.com/products/114020121/img/wiki_hardware_connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114020121/img/wiki_hardware_connection.jpg" alt="pir" width={600} height="auto" /></p>

Connect the Grove - 3-Axis Digital Accelerometer (LIS3DHTR) with Seeeduino XIAO's I2C interface.

#### Software Code

```C++
// This example use I2C.
#include "LIS3DHTR.h"
#include <Wire.h>
LIS3DHTR<TwoWire> LIS; //IIC
#define WIRE Wire

void setup()
{
  Serial.begin(115200);
  while (!Serial)
  {
  };
  LIS.begin(WIRE,0x19); //IIC init
  //LIS.begin(0x19);
  LIS.openTemp();  //If ADC3 is used, the temperature detection needs to be turned off.
  //  LIS.closeTemp();//default
  delay(100);
    LIS.setFullScaleRange(LIS3DHTR_RANGE_2G);
  //  LIS.setFullScaleRange(LIS3DHTR_RANGE_4G);
  //  LIS.setFullScaleRange(LIS3DHTR_RANGE_8G);
  //  LIS.setFullScaleRange(LIS3DHTR_RANGE_16G);
  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_1HZ);
  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_10HZ);
  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_25HZ);
  LIS.setOutputDataRate(LIS3DHTR_DATARATE_50HZ);
  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_100HZ);
  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_200HZ);
  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_1_6KHZ);
  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_5KHZ);
}
void loop()
{
  if (!LIS)
  {
    Serial.println("LIS3DHTR didn't connect.");
    while (1)
      ;
    return;
  }
  //3 axis
    Serial.print("x:"); Serial.print(LIS.getAccelerationX()); Serial.print("  ");
    Serial.print("y:"); Serial.print(LIS.getAccelerationY()); Serial.print("  ");
    Serial.print("z:"); Serial.println(LIS.getAccelerationZ());
  //ADC
  //    Serial.print("adc1:"); Serial.println(LIS.readbitADC1());
  //    Serial.print("adc2:"); Serial.println(LIS.readbitADC2());
  //    Serial.print("adc3:"); Serial.println(LIS.readbitADC3());

  //temperature
  Serial.print("temp:");
  Serial.println(LIS.getTemperature());
  delay(500); 
}
```

- **Step 1** Download the [library](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/archive/master.zip) from Github and add the "zip" library to your Arduino IDE. Please refer to [How to install an Arduino Library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/).

- **Step 2** Find the example code of "LIS3DHTR_IIC" and upload it to your board. Please refer to [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 3** After uploading the code, you will see the accelerated velocity of each axis and temperature of surrounding from the serial monitor.

<!-- ![](https://files.seeedstudio.com/products/114020121/img/wiki_result.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114020121/img/wiki_result.png" alt="pir" width={600} height="auto" /></p>

### Play with Raspberry Pi

#### Materials Required

|Raspberry Pi 4B(4GB)|Grove Base Hat for Raspberry Pi|Grove - 3-Axis Digital Accelerometer (LIS3DHTR)|
|--------|-----------------------|-------------------------------------------------------------|
|<p><img src="https://files.seeedstudio.com/products/102110301/img/raspberry-pi-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/103030275/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/114020121/img/114020121wikithumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get one now](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[Get one now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Get one now](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html)|

#### Hardware Connection

<!-- ![](https://files.seeedstudio.com/products/114020121/img/Hardware_connection_raspberry_pi_demo.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114020121/img/Hardware_connection_raspberry_pi_demo.jpg" alt="pir" width={600} height="auto" /></p>

Connect the LIS3DHTR sensor to any I2C interface on the Grove Base Hat for Raspberry Pi.

#### Code

```python
#!/usr/bin/env python

# Distributed with a free-will license.
# Use it any way you want, profit or free, provided it fits in the licenses of its associated works.
# LIS3DHTR
# This code is designed to work with the LIS3DHTR_I2CS I2C Mini Module available from ControlEverything.com.
# https://www.controleverything.com/content/Accelorometer?sku=LIS3DHTR_I2CS#tabs-0-product_tabset-2

import smbus
import time

# Get I2C bus
bus = smbus.SMBus(1)

# I2C address of the device
LIS3DHTR_DEFAULT_ADDRESS   = 0x19

# LIS3DHTR Register Map
LIS3DHTR_REG_WHOAMI     = 0x0F # Who Am I Register
LIS3DHTR_REG_CTRL1     = 0x20 # Control Register-1
LIS3DHTR_REG_CTRL2     = 0x21 # Control Register-2
LIS3DHTR_REG_CTRL3     = 0x22 # Control Register-3
LIS3DHTR_REG_CTRL4     = 0x23 # Control Register-4
LIS3DHTR_REG_CTRL5     = 0x24 # Control Register-5
LIS3DHTR_REG_CTRL6     = 0x25 # Control Register-6
LIS3DHTR_REG_REFERENCE    = 0x26 # Reference
LIS3DHTR_REG_STATUS     = 0x27 # Status Register
LIS3DHTR_REG_OUT_X_L    = 0x28 # X-Axis LSB
LIS3DHTR_REG_OUT_X_H    = 0x29 # X-Axis MSB
LIS3DHTR_REG_OUT_Y_L    = 0x2A # Y-Axis LSB
LIS3DHTR_REG_OUT_Y_H    = 0x2B # Y-Axis MSB
LIS3DHTR_REG_OUT_Z_L    = 0x2C # Z-Axis LSB
LIS3DHTR_REG_OUT_Z_H    = 0x2D # Z-Axis MSB

# Accl Datarate configuration
LIS3DHTR_ACCL_DR_PD     = 0x00 # Power down mode
LIS3DHTR_ACCL_DR_1     = 0x10 # ODR = 1 Hz
LIS3DHTR_ACCL_DR_10     = 0x20 # ODR = 10 Hz
LIS3DHTR_ACCL_DR_25     = 0x30 # ODR = 25 Hz
LIS3DHTR_ACCL_DR_50     = 0x40 # ODR = 50 Hz
LIS3DHTR_ACCL_DR_100    = 0x50 # ODR = 100 Hz
LIS3DHTR_ACCL_DR_200    = 0x60 # ODR = 200 Hz
LIS3DHTR_ACCL_DR_400    = 0x70 # ODR = 400 Hz
LIS3DHTR_ACCL_DR_1620    = 0x80 # ODR = 1.620 KHz
LIS3DHTR_ACCL_DR_1344    = 0x90 # ODR = 1.344 KHz

# Accl Data update & Axis configuration
LIS3DHTR_ACCL_LPEN     = 0x00 # Normal Mode, Axis disabled
LIS3DHTR_ACCL_XAXIS     = 0x04 # X-Axis enabled
LIS3DHTR_ACCL_YAXIS     = 0x02 # Y-Axis enabled
LIS3DHTR_ACCL_ZAXIS     = 0x01 # Z-Axis enabled

# Acceleration Full-scale selection
LIS3DHTR_BDU_CONT     = 0x00 # Continuous update, Normal Mode, 4-Wire Interface
LIS3DHTR_BDU_NOT_CONT    = 0x80 # Output registers not updated until MSB and LSB reading
LIS3DHTR_ACCL_BLE_MSB    = 0x40 # MSB first
LIS3DHTR_ACCL_RANGE_16G    = 0x30 # Full scale = +/-16g
LIS3DHTR_ACCL_RANGE_8G    = 0x20 # Full scale = +/-8g
LIS3DHTR_ACCL_RANGE_4G    = 0x10 # Full scale = +/-4g
LIS3DHTR_ACCL_RANGE_2G    = 0x00 # Full scale = +/-2g, LSB first
LIS3DHTR_HR_DS      = 0x00 # High-Resolution Disabled
LIS3DHTR_HR_EN      = 0x08 # High-Resolution Enabled
LIS3DHTR_ST_0      = 0x02 # Self Test 0
LIS3DHTR_ST_1      = 0x04 # Self Test 1
LIS3DHTR_SIM_3      = 0x01 # 3-Wire Interface


class LIS3DHTR():
 def __init__ (self):
  self.select_datarate()
  self.select_data_config()
 
 def select_datarate(self):

  DATARATE_CONFIG = (LIS3DHTR_ACCL_DR_10 | LIS3DHTR_ACCL_XAXIS | LIS3DHTR_ACCL_YAXIS | LIS3DHTR_ACCL_ZAXIS)
  bus.write_byte_data(LIS3DHTR_DEFAULT_ADDRESS, LIS3DHTR_REG_CTRL1, DATARATE_CONFIG)
 
 def select_data_config(self):
  DATA_CONFIG = (LIS3DHTR_ACCL_RANGE_2G | LIS3DHTR_BDU_CONT | LIS3DHTR_HR_DS)
  bus.write_byte_data(LIS3DHTR_DEFAULT_ADDRESS, LIS3DHTR_REG_CTRL4, DATA_CONFIG)
 
 def read_accl(self):
  data0 = bus.read_byte_data(LIS3DHTR_DEFAULT_ADDRESS, LIS3DHTR_REG_OUT_X_L)
  data1 = bus.read_byte_data(LIS3DHTR_DEFAULT_ADDRESS, LIS3DHTR_REG_OUT_X_H)
  
  xAccl = data1 * 256 + data0
  if xAccl > 32767 :
   xAccl -= 65536
  xAccl /= 16000

  data0 = bus.read_byte_data(LIS3DHTR_DEFAULT_ADDRESS, LIS3DHTR_REG_OUT_Y_L)
  data1 = bus.read_byte_data(LIS3DHTR_DEFAULT_ADDRESS, LIS3DHTR_REG_OUT_Y_H)
  
  yAccl = data1 * 256 + data0
  if yAccl > 32767 :
   yAccl -= 65536
  yAccl /= 16000

  data0 = bus.read_byte_data(LIS3DHTR_DEFAULT_ADDRESS, LIS3DHTR_REG_OUT_Z_L)
  data1 = bus.read_byte_data(LIS3DHTR_DEFAULT_ADDRESS, LIS3DHTR_REG_OUT_Z_H)
  
  zAccl = data1 * 256 + data0
  if zAccl > 32767 :
   zAccl -= 65536
  zAccl /= 16000
  return {'x' : xAccl, 'y' : yAccl, 'z' : zAccl}

from LIS3DHTR import LIS3DHTR
lis3dhtr = LIS3DHTR()

while True:
 lis3dhtr.select_datarate()
 lis3dhtr.select_data_config()
 time.sleep(0.1)
 accl = lis3dhtr.read_accl()
 print ("Acceleration in X-Axis : %d" %(accl['x']))
 print ("Acceleration in Y-Axis : %d" %(accl['y']))
 print ("Acceleration in Z-Axis : %d" %(accl['z']))
 print (" ************************************ ")
 time.sleep(1)

```

- **Step 1** Create a python file.

```
sudo nano LIS3DHTR.py
```

- **Step 2** Copy the above code to the python file.

- **Step 3** Run the python.

```
sudo python LIS3DHTR.py
```

<!-- ![](https://files.seeedstudio.com/products/114020121/img/python_result.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114020121/img/python_result.png" alt="pir" width={600} height="auto" /></p>

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/114020121/document/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR_v1.0_190910.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resource

- **[PDF]** [LIS3DHTR_DATASHEET](https://files.seeedstudio.com/products/114020121/document/lis3dh.pdf)
- **[PDF]** [Hardware schematic](https://files.seeedstudio.com/products/114020121/document/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR_v1.0_SCH_190910.pdf)
- **[ZiP]** [Grove - 3-Axis Digital Accelerometer (LIS3DHTR) Library](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/archive/master.zip)

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
