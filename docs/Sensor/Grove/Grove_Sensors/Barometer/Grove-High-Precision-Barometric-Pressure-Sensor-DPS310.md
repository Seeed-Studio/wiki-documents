---
description: Grove - High Precision Barometric Pressure Sensor DPS310
title: Grove - High Precision Barometric Pressure Sensor DPS310
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-High-Precision-Barometric-Pressure-Sensor-DPS310
last_update:
  date: 1/5/2023
  author: shuxu hu
---

Grove - High Precision Barometric Pressure Sensor (DPS310)


<!-- ![](https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-wiki.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-wiki.jpg" alt="pir" width={600} height="auto" /></p>



Barometer detecting is very useful in enviromental sensing or altitude measuring. The Grove Barometer sensor is besed on infineon DPS310, a miniaturized digital barometer air pressure sensor with high accuracy. It can measure pressure range from 300 to 1200 hPa, with ±0.002hPa precision, which means you can detect altitude change within ±2cm at most.




<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/Y1.png"  height="48" width="300" /></a></p> -->

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)

## BMP280 vs. BME280 vs. DPS310

We've already released the [Grove - Barometer Sensor (BMP280)](https://wiki.seeedstudio.com/Grove-Barometer_Sensor-BMP280/) and [Grove - Barometer Sensor(BME280)](https://wiki.seeedstudio.com/Grove-Barometer_Sensor-BME280/), let us show you how powerful Grove-DPS310 is through the comparison of the table below.


| ITEM | Grove-BMP280 | Grove-BME280 | Grove-DPS310 |
|------|--------------|--------------|--------------|
| Pressure Range    | 300 ~ 1100 hPa |	300 ~ 1100 hPa | 300 ~ 1200 hPa	|	
| Temperature Range |	-40 ~ 85 ℃  |	-40 ~ 85 ℃   |	-40 ~ 85 °C   |
| Pressure Precision |	 -	 |  -  | ± 0.002 hPa (or ±0.02 m) |
| Pressure Accuracy(Absolute) |	± 1 hPa (or ±8 m)	|± 1 hPa (or ±8 m)	|± 1 hPa (or ±8 m)|
| Pressure Accuracy (Relative)|	± 0.12 hPa|	± 0.12 hPa|	± 0.06 hPa (or ±0.5 m)|
| Pressure Resolution|	0.18 Pa	| 0.18 Pa |	0.06 Pa |
| Humidity|	 -  |	0 ~ 100%	|  -  |
| Communication	| I<sup>2</sup>C/SPI |	I<sup>2</sup>C/SPI	| I<sup>2</sup>C/SPI |

## Specification

|Item|Value|
|---|---|
|Operating Voltage|3.3V / 5V|
|Operating air pressure|300 to 1200hPa|
|Precision|±0.002hPa|
|Interface|I<sup>2</sup>C,SPI|
|I<sup>2</sup>C Address|The default address is 0x77,When short-circuited, the address is 0x76|

:::note

    When communicating in SPI mode, do not select I<sup>2</sup>C address as 0x76, otherwise SPI will not be able to read data normally (since I<sup>2</sup>C and SPI share pins, I<sup>2</sup>C address as 0x76 is equivalent to MOSI pin grounding).
:::

## Features 

 - High Pressure Precision: ± 0.002 hPa (or ±0.02 m)
 - High Pressure Accuracy: ± 0.06 hPa (or ±0.5 m)-Relative; ± 1 hPa (or ±8 m)-Absolute
 - Wide Range: Pressure: 300 –1200 hPa; Temperature: -40 – 85 °C.
 - Easy to Use: Grove IIC (with interrupt) / SPI 
 - Low power consumption


## Typical Applications


 - Indoor Navigation (floor detection e.g. in shopping malls and parking garages)
 - Health and Sports (accurate elevation gain and vertical speed)
 - Outdoor Navigation (GPS start-up time and accuracy improvement, dead-reckoning e.g. in tunnels)
 - Weather Station('Micro-weather' and local forecasts)
 - Drones (flight stability and height control)


:::tip
 
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::


## Hardware Overview



<!-- ![](https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-pin.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-pin.jpg" alt="pir" width={600} height="auto" /></p>










## Platforms Supported


| Arduino | Raspberry Pi | BeagleBone | Wio | LinkIt ONE |
|---------|--------------|------------|-----|------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" alt="pir" width={600} height="auto" /></p> |<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" alt="pir" width={600} height="auto" /></p>  |


:::caution

    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::


## Getting Started

:::note

    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::




### Play With Arduino


#### Hardware


**Materials required**

| Seeeduino V4.2 |Base Shield| High Precision Barometric Pressure Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)|



:::note

    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy.
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.
:::


- **Step 1.** Connect the Grove - High Precision Barometric Pressure Sensor (DPS310) to port **I<sup>2</sup>C** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.


#### Software


:::note

    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::


- **Step 1.** Download the [DPS310-Pressure-Sensor](https://github.com/Infineon/DPS310-Pressure-Sensor.git) Library from Github.


- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.


- **Step 3.** Copy the code into Arduino IDE and upload.


```C++
#include <Dps310.h>

Dps310 Dps310PressureSensor = Dps310();

void setup()
{
  Serial.begin(9600);
  while (!Serial);
  Dps310PressureSensor.begin(Wire);
  Serial.println("Init complete!");
}

void loop()
{
  float Detection_array[10];
  uint8_t oversampling = 7;
  int16_t ret;
  int i;
  int size = 10;
  int state1;
  int state2;
/*In the following two cycles, the pressure state at the pre and post time was detected respectively.
  The sampling quantity was 10. The values with large deviation were removed, and the average value was calculated.*/
      ret = Dps310PressureSensor.measurePressureOnce(Detection_array[0], oversampling);
      state1 = Detection_array[0];
 for (i = 1; i < 9; i++)
  {
     ret = Dps310PressureSensor.measurePressureOnce(Detection_array[i], oversampling);
       if (Detection_array[i] - Detection_array[i - 1] < 5)
      {
        state1 += Detection_array[i];
      }
      else
      {
        size -= 1;
      }
  } 
 state1 = state1 / size;
 delay(100);


      ret = Dps310PressureSensor.measurePressureOnce(Detection_array[0], oversampling);
      state2 = Detection_array[0];
 for (i = 1; i < 9; i++)
  {
      ret = Dps310PressureSensor.measurePressureOnce(Detection_array[i], oversampling);
      if (Detection_array[i] - Detection_array[i - 1] < 5)
      {
        state2 += Detection_array[i];
      }
      else
      {
        size -= 1;
      }
  }
  state2 = state2 / size;
  
 if (ret != 0)
   {
    Serial.print("FAIL! ret = ");
    Serial.println(ret);
   }
/*Calculate the difference in air pressure to determine if you fall*/
    else if (state2 - state1 > 4)
     {
      Serial.println("You fell down. Do you need help?");
      delay(5000);
     }
    else
      Serial.println("It's ok!");
}

/*********************************************************************************************************
  END FILE
*********************************************************************************************************/
```

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).


- **Step 5.** Open the serial monitor. If every thing goes well and if you simulate a fall, or drop it to the ground, it will tell you if you need help.



## Resources

- **[Library]** [DPS310-Pressure-Sensor](https://github.com/Seeed-Studio/Seeed_Arduino_DPS310.git)
- **[Datasheet]** [DPS310-Datasheet](https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/res/DPS310-datasheet.pdf)
- **[Zip]** [Grove-High-Precision-Barometer-Sensor-(DPS310)](https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/res/Grove%20-%20High%20Precision%20Barometer%20Sensor%20(DPS310)_v1.0.zip)


## Schematic Online Viewer


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/res/Grove%20-%20High%20Precision%20Barometer%20Sensor%20(DPS310)_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241,241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}} />



## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/)


<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
