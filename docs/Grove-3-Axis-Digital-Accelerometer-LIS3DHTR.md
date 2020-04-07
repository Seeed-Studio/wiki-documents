---
name: Grove - 3-Axis Digital Accelerometer (LIS3DHTR)
category: Grove sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 114020121
tags:
---


![](https://files.seeedstudio.com/products/114020121/img/114020121wiki.png)


Grove - 3-Axis Digital Accelerometer(LIS3DHTR) is a low-cost 3 - Axis accelerometer in a bundle of Grove products. It is based on the LIS3DHTR chip which provides multiple ranges and interfaces selection. You can never believe that such a tiny 3 - Axis accelerometer can support I2C, SPI, and ADC GPIO interfaces, which means you can choose any way to connect with your development board. Besides, this accelerometer can also monitor the surrounding temperature to tune the error caused by it.  

<p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p> 

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
| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |


## Getting Started

### Play with Seeeduino XIAO based on Grove I2C interface

#### Materials Required

|Seeeduino XIAO|Grove Breadboard|Grove - 3-Axis Digital Accelerometer (LIS3DHTR)|
|--------|-----------------------|------------|
|![](https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png)|![](https://files.seeedstudio.com/products/114020121/img/114020121wikithumbnail.jpg)|
|[Get one now](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Get one now](https://www.seeedstudio.com/Grove-Breadboard-p-4034.html)|[Get one now](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html)|

#### Hardware connection

![](https://files.seeedstudio.com/products/114020121/img/wiki_hardware_connection.jpg)

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

- **Step 1** Download the library from Github and add the "zip" library to your Arduino IDE. Please refer to [How to install an Arduino Library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library/).


- **Step 2** Find the example code of "LIS3DHTR_IIC" and upload it to your board. Please refer to [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).


- **Step 3** After uploading the code, you will see the accelerated velocity of each axis and temperature of surrounding from the serial monitor.

![](https://files.seeedstudio.com/products/114020121/img/wiki_result.png)

## Schematic Online Viewer

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/114020121/document/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR_v1.0_190910.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>

## Resource

 - **[PDF]** [LIS3DHTR_DATASHEET](https://files.seeedstudio.com/products/114020121/document/lis3dh.pdf)
 - **[PDF]** [Hardware schematic](https://files.seeedstudio.com/products/114020121/document/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR_v1.0_SCH_190910.pdf)
 - **[ZiP]** [Grove - 3-Axis Digital Accelerometer (LIS3DHTR) Library](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/archive/master.zip)


## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>