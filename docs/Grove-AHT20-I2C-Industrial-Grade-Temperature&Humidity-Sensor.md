---
name: Grove - AHT20 I2C Industrial Grade Temperature and Humidity Sensor
category: 
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101990644
tags:
---

![](https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/101990644_4_.png)



<p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> 

AHT20 is a new generation of temperature and humidity sensor embedded with a dual-row flat and no-lead SMD package, suitable for the reflow soldering. AHT20 is equipped with a newly designed ASIC chip: an improved MEMS semiconductor capacitive humidity sensor, and a standard on-chip temperature sensor. The performance of AHT20 is more stable in harsh environments compared with the previous generation of temperature and humidity sensor such as Grove - Temperature & Humidity Sensor Pro (AM2302/DHT22), as a matter of fact, AHT20 is fittable in most industrial scenarios.

## Feature

- Temperature measurement range -40 ~ 85°C, Humidity measurement range 0 ~ 100% RH
- Digital output, Grove I2C interface
- Excellent long-term stability
- SMD package suitable for reflow soldering
- Quick response and strong anti-interference ability
- Compatible with Arduino
- 4-pin interface reserved

## Specification
|Item|Value|
|---|---|
|Operating Voltage |DC: 2.0V-5.5V|
|Measuring Range (humidity) |0 ~ 100% RH|
|Temperature Range| -40 ~ + 85 ℃|
|Humidity Accuracy|± 2% RH (25 ℃)|
|Temperature Accuracy| ± 0.3 ℃|
|Resolution| Temperature : 0.01 ℃; Humidity : 0.024% RH|
|Output Interface|Grove I²C Interface|
|I2C address|0x38|

## Platform Supported
| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


## Getting Started

### Materials Required

| Seeeduino Lotus V1.1 |Grove-AHT20 Temperature&Humidity Sensor| 
|--------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/small.png)| ![enter image description here](https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/small.png)| 
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html)|

### Hardware Connection
![](https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/hardware-connection.jpg)

!!!Tip
    Please plug the USB cable，Grove-AHT20 Temperature&Humidity Sensor Interface into Seeeduino Lotus V1.1 Interface gently, otherwise you may damage the port.

- **Step 1.** Plug Grove-AHT20 Temperature&Humidity Sensor into **I2C** interface of Seeeduino Lotus V1.1 with a Grove Cable.

- **Step 2.** Connect Seeeduino Lotus V1.1 to PC via a USB cable.

- **Step 3.** Download the code, please refer to the software part.

- **Step 4.** Run the code and the outcome will display on the screen of **Serial Monitor** in your Arduino IDE .


### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.

- **Step 1.** Download the [Demo code](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20/archive/master.zip).

- **Step 2.** Copy the whole **Seeed_Arduino_AHT20** file and paste it into your Arduino IDE library file.

- **Step 3.** Open the **BasicRead** file of **examples** with your Arduino IDE.

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

#### Software Code
```C++
// ARDUINO DEMO FOR GROVE-AHT20
//
#include <Wire.h>
#include "AHT20.h"

AHT20 AHT;

void setup()
{
    Serial.begin(115200);
    Serial.println("AHT20 DEMO");
    AHT.begin();
}

void loop()
{
    float humi, temp;
    
    int ret = AHT.getSensor(&humi, &temp);
    
    if(ret)     // GET DATA OK
    {
        Serial.print("humidity: ");
        Serial.print(humi*100);
        Serial.print("%\t temerature: ");
        Serial.println(temp);
    }
    else        // GET DATA FAIL
    {
        Serial.println("GET DATA FROM AHT20 FAIL");
    }
    
    delay(100);
}

// END FILE
```

!!!Success
		If everything goes well, you can go to **Serial Monitor** to see an outcome as following:

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/outcome_aht20.png" alt="AHT'' OUTCOME" title="demo" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

## Schematic Online Viewer

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/GROVE-ATH-EAGLE-FILE.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>

## Resources

- **[ZIP]** [Grove-AHT-eagle-file](https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/GROVE-ATH-EAGLE-FILE.zip)
- **[PDF]** [Datasheet of AHT20](https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/AHT20-datasheet-2020-4-16.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>