---
title: Grove - Temperature&Humidity Sensor(SHT31)
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Temperature&Humidity-Sensor-(SHT31)-p-2655.html
oldwikiname: Grove_-_Temp&Humi_Sensor(SHT31)
prodimagename: Grove-TempAndHumi_Sensor-SHT31-Product_View_700_S.jpg
bzprodimageurl: https://statics3.seeedstudio.com/seeed/master/img/2016-06/bytoMkAMziVhHKidWvUshZYm.jpg
surveyurl: https://www.research.net/r/Grove-TempAndHumi_Sensor-SHT31
sku: 101020212
---

<p style="text-align:center"><img src="https://github.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/raw/master/img/main.jpg" /></p>

Grove - Temp&Humi Sensor(SHT31) is a highly reliable, accurate, quick response and integrated temperature & humidity sensor. The sensor(chip) used in the module is designed with Sensirion's CMOSens<sup>®</sup> technology. The chip is well calibrated, linearized and compensated for digital output.

The typical accuracy of this module can be **±2%RH** (for relative humidity) and **±0.3°C** (for temperature). This module is compatible with 3.3 Volts and 5 Volts and hence does not require a voltage level shifter. This module communicates using with I<sup>2</sup>C serial bus and can work up to 1 MHz speed. We also have provided a highly abstracted library to make this product more easier to use.

Using the sensor is easy. For [Seeeduino](http://www.seeedstudio.com/depot/Seeeduino-V42-p-2517.html?cPath=6_7) (compliant with Arduino), just connect this breakout board with the main control board via [Grove cable](http://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57). Then use the provided library and example/demo code available at GitHub to get your data. If you're using an Arduino without a Base Shield, simply connect the VIN pin to the 5V voltage pin, GND to ground, SCL to I2C Clock (Analog 5) and SDA to I2C Data (Analog 4).



<p style="text-align:center"><a href="http://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-SHT31-p-2655.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>



## Features


-   Highly reliable, accurate and quick response time
-   Grove compatible and easy to use
-   Well calibrated, linearized, compensated for digital output
-   Highly abstracted development library

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

## Specifications


| Parameter                | Value                                                                                                        |
|--------------------------|--------------------------------------------------------------------------------------------------------------|
| Input voltage (VCC)      | 3.3 volts or 5 volts                                                                                         |
| I/O Logic Level          | 3.3 volts or 5 volts based on VCC                                                                            |
| Operating Current        | 100 μA                                                                                                       |
| Operating Temperature    | -40–125 ℃                                                                                                                                                                                                                                                                         |
| Temperature Sensor Range | -40–125 ℃, with ±0.3°C accuracy                                                                              |
| Humidity Sensor Range    | 0% - 100%(Relative Humidity), with ±2% accuracy                                                              |
| Sensor Chip              | SHT31([Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/master/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip)) |
| Port            | I<sup>2</sup>C                                                                                               |
| Weight                   | 4 g (for breakout board), 9 g for whole package each piece                                                   |
| Dimensions               | 40(length)×20(width) mm                                                                                      |

## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's hardware or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Hardware Overview



![](https://raw.githubusercontent.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/master/img/Grove-TempAndHumi_Sensor-SHT31-components_1200_s.jpg)

<div class="admonition caution">
<p class="admonition-title">Caution</p>
Do not touch, shake or let this product vibrate while using. Otherwise, it will affect the accuracy of data measured.
</div>



## Getting Started


Now let us run some basic examples with this module using the library/examples provided.

### Play With Arduino

This section shows you how to build a simple project with Arduino platform. If you are using a different type of main control board, these instructions and source code probably still helps.


#### Materials required

| Seeeduino V4.2 | Base Shield| Grove - Temperature&Humidity Sensor(SHT31) |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/raw/master/img/thumbnail.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-TemperatureHumidity-Sensor-SHT31-p-2655.html)|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy 



#### Hardwave

- **Step 1.** Connect Grove - Temperature&Humidity Sensor(SHT31) to port **I2C** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.


![](https://github.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/raw/master/img/arduino_connect.jpg)


!!!Note
	If we don't have Grove Base Shield, We also can directly Grove - Temperature&Humidity Sensor(SHT31) to Seeeduino as below.


| Seeeduino       | Grove - Temperature&Humidity Sensor(SHT31) |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| SDA           | White                   |
| SCL           | Yellow                  |



#### Software

- **Step 1.** Download the [Library](https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor) from Github.

- **Step 2.** Refer to [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open a new sketch, and copy the following code into the new sketch.

```C++
#include <Arduino.h>
#include <Wire.h>
#include "SHT31.h"

SHT31 sht31 = SHT31();

void setup() {  
  Serial.begin(9600);
  while(!Serial);
  Serial.println("begin...");  
  sht31.begin();  
}

void loop() {
  float temp = sht31.getTemperature();
  float hum = sht31.getHumidity();
  Serial.print("Temp = "); 
  Serial.print(temp);
  Serial.println(" C"); //The unit for  Celsius because original arduino don't support speical symbols
  Serial.print("Hum = "); 
  Serial.print(hum);
  Serial.println("%"); 
  Serial.println();
  delay(1000);
}


```

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **9600**. If every thing goes well, you will get the results.


The result should be like:

![](https://github.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/raw/master/img/RESULT.png)




## Resources

- **[Zip]** [EAGLE schematics, PCB files and PDF schematic](https://raw.githubusercontent.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/master/res/Grove-TempAndHumi_Sensor-SHT31-v1.0_Schematics.zip)
- **[Zip]** [SHT31 Sensor Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/master/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip)
- **[Library]** [Library and example code](https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor)
- **[MoreReading]** [I<sup>2</sup>C How-to for Arduino](https://www.arduino.cc/en/Reference/Wire)


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Temp&Humi_Sensor(SHT31) -->

## Tech Support
Please do not hesitate to contact [techsupport@seeed.cc](techsupport@seeed.cc) if you have any technical issue. Or submit the issue into our [forum](http://forum.seeedstudio.com/). 