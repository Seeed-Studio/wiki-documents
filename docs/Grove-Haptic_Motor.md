---
name: Grove - Haptic Motor
category: Actuator
bzurl: https://seeedstudio.com/Grove - Haptic Motor-p-2546.html
oldwikiname: Grove_-_Haptic_Motor
prodimagename: Grove_Haptic_Motor.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/105020011 1.jpg
surveyurl: https://www.research.net/r/Grove-Haptic_Motor
sku: 105020011
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit
---

![](https://github.com/SeeedDocument/Grove-Haptic_Motor/raw/master/img/bazaar884534_1.jpg)

Grove - Haptic motor is a grove module integrated with [DRV2605L](http://www.ti.com/product/DRV2605L) which will give your project more feelings. This motor is specially designed for various effects, such as ramping the vibration level up and down, for wearables and other IoT devices. Right now we have developed an easy-to-use library which simulate 123 kinds in total of vibrating modes and this will make your prototyping quicker. Also, you can develop more advanced functions with driver DRV2605L which will improve actuator performance in terms of acceleration consistency, start time, and break time and is accessible through a shared I2C compatible bus or PWM input signal.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/Grove%C2%A0%C2%A0Haptic%C2%A0Motor-p-2546.html)

## Features

-   More vibration effects.
-   Quicken your project prototyping process.
-   Easy-to-use library with 123 kinds of vibrating modes.
-   Powerful driver to implanting more advanced functions.

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)


## Specifications


| Parameter                      | Value          |
|--------------------------------|----------------|
| Operating voltage              | 3.3~5.0 V      |
| Ripples (at maximum power)     | 50~100 mV      |
| Max power                      | 750 mW         |
| I2C speed                      | 100 kHz        |
| Vibration effects              | 123 types      |
| Driver                         | DRV2605L       |
| Port                           | I<sup>2</sup>C |
| Default I<sup>2</sup>C Address | 0x5A           |

# Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Application ideas

-   Mobile phone, tablets.
-   Wearable devices.
-   Remote controls, touch-enabled devices.
-   Industrial human-machine interfaces.

## Hardware Overview


**Front view:**
![](https://github.com/SeeedDocument/Grove-Haptic_Motor/raw/master/img/bazaar884534_1.jpg)

**Rear view:**
![](https://raw.githubusercontent.com/SeeedDocument/Grove-Haptic_Motor/master/img/Grove_Haptic_Motor_back.jpg)

## Getting Started

!!!Note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.

### Play With Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield|  Grove - Haptic motor |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Haptic_Motor/raw/master/img/bazaar884534_1s.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](http://www.seeedstudio.com/depot/Grove%C2%A0%C2%A0Haptic%C2%A0Motor-p-2546.html)|

- **Step 2.** Connect Grove - Haptic motor to port I2C of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Haptic_Motor/master/img/Grove_haptic_motor_connection.jpg)

!!!Note
	If we don't have Grove Base Shield, We also can directly connect Grove - Haptic motor to Seeeduino as below.

| Seeeduino       | Grove - Haptic motor |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
|SDA  | White                   |
|SCL             | Yellow                  |

#### Software

- **Step 1.** Download the [Grove_Haptic Motor](https://github.com/Seeed-Studio/Grove_Haptic_Motor/archive/master.zip) from Github.
- **Step 2.** Refer [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.
- **Step 3.** Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

```c++
#include <drv2605.h>

DRV2605 haptic;

void setup()
{
    Serial.begin(9600);
    /* Software I2C = false, Verbose = true */
    if (haptic.init(false, true) != 0) Serial.println("init failed!");
    if (haptic.drv2605_AutoCal() != 0) Serial.println("auto calibration failed!");
    delay(2000);
}

void loop()
{
/*
    unsigned char i;
    for(i=1;i<124;i++)
    {
        Serial.print("Effect No: ");
        Serial.println(i);
        
        haptic.drv2605_Play_Waveform(i);
        delay(2000);
    }
*/
    haptic.drv2605_Play_Waveform(118);
    delay(2000);
}
```

- **Step 4.** We will see the vibration.

!!!Warning
    Never touch driver DRV2605L which may cause damage to it when it is powered.


![](https://raw.githubusercontent.com/SeeedDocument/Grove-Haptic_Motor/master/img/Grove_Haptic_Motor_cautions.png)


## Resources

-  **[Library]** [Grove-Haptic Motor Library](https://github.com/Seeed-Studio/Grove_Haptic_Motor)
-  **[Eagle]** [Grove-Haptic Motor Schematic](https://raw.githubusercontent.com/SeeedDocument/Grove-Haptic_Motor/master/res/Grove_Haptic_Motor_v0.9_Eagle.zip) 
- **[PDF]** [Grove-Haptic Motor Schematic](https://raw.githubusercontent.com/SeeedDocument/Grove-Haptic_Motor/master/res/Grove_Haptic_Motor_v0.9_SCH.pdf).
-  **[Datasheet]** [More about drive circuit DRV2605L](http://www.ti.com/product/DRV2605L).


## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).

<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>