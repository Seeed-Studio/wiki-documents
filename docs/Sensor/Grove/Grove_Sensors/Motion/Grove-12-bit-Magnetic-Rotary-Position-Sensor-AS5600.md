---
description: Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600)
title: Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600
last_update:
  date: 1/31/2023
  author: jianjing Huang
---



![](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-preview.jpg)

The Grove - AS5600 is a programmable 12-bit high-resolution contactless magnetic rotary position sensor. The Grove - AS5600 can work as a magnetic potentiometer or a magnetic encoder with excellent reliability and durability.

Compared with the traditional potentiometer/encoder, the Grove - AS5600 has significant advantages: high precision, non-contact, no rotation angle limitation. All those advantages making it suitable for non-contact angle measurement applications, such as the robot arm, tripod head, motor closed-loop control, machine tool axis positioning.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600-p-4192.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Feature

- Non-contact, no rotation angle limitation
- 12-bit high-resolution, 4096 positions per round
- Grove I2C, PWM/Analog Output
- Great flexibility on angular excursion: Maximum angle programmable from 18° up to 360°

## Specification

|Parameter|Value|
|---|---|
|Supply voltage|3.3V / 5V|
|Operating ambient temperature| -40 – 125℃|
|Input Current|-100-100mA|
|Flexibility|Maximum angle programmable from 18°-360°|
|Interface|I2C(Default I2C Address: 0x36) & Non-Changeable|
|Output|Analog/PWM output|
|Output Resolution|12-bit DAC|

## Working Principle

Grove - AS5600 is based on the Hall Effect, the build-in Hall sensor can detect changes in the direction of the magnetic field, thus there is also no rotation angle limit. The magnetic field direction information is amplified by the amplifier, with the help of the build-in 12-bit A/D, the AS5600 module can output 4096 positions per round. The output is selectable, you can either use the I2C interface to output the RAW data or output the PWM wave/Analog wave via the OUT pin. Meanwhile, the maximum angle is also programmable, you can set the maximum angle from 18° to 360°, which means that the measured angular accuracy is up to 18/4096.

![](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-show-NS.jpg)

:::note
The AS5600 has certain requirements for the magnetic field to be measured. Please use a magnet similar in size to the chip. The module should be measured as close as possible to the magnetic field and the AS5600 sensor center should be aligned with the center of the magnetic field. The vertical distance is preferably from 0.5 mm to 3 mm.
:::

![](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-2.jpg)

## Hardware Overview

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-pin.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-pin.jpg" /></a></p>
</figure>
</div>

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Getting Started

### Play With Arduino

**Materials required**

| Seeeduino V4.2 | Base Shield | Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600)|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-thumbnail.jpg)
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600-p-4192.html)|

>In addition, you can consider our new [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), which is equivalent to the combination of Seeeduino V4.2 and Baseshield.

#### Hardware Connection

- **Step 1.** Connect the Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600) to the **I2C** port of the Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3** Connect the Seeeduino to PC via a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/HardwarePic.jpg)

#### Software

:::caution
If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.** Download the [AS5600](https://github.com/Seeed-Studio/Seeed_Arduino_AS5600) Library from Github.

:::note
Refer How to install library to [install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/) for Arduino.
:::

- **Step 2.** Restart the Arduino IDE. Open **readAngle** example via the path: **File** → **Examples** → **Seeed_AS5600-master** → **readAngle**. Through this demo, we can read the angles from a magnet underneath the sensor.

The readAngle Example code is as follow:

```C++
#include <Wire.h>
#include <AS5600.h>
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
  #define SYS_VOL   3.3
#else
  #define SERIAL Serial
  #define SYS_VOL   5
#endif

AMS_5600 ams5600;

int ang, lang = 0;

void setup()
{
  SERIAL.begin(115200);
  Wire.begin();
  SERIAL.println(">>>>>>>>>>>>>>>>>>>>>>>>>>> ");
  if(ams5600.detectMagnet() == 0 ){
    while(1){
        if(ams5600.detectMagnet() == 1 ){
            SERIAL.print("Current Magnitude: ");
            SERIAL.println(ams5600.getMagnitude());
            break;
        }
        else{
            SERIAL.println("Can not detect magnet");
        }
        delay(1000);
    }
  }
}
/*******************************************************
/* Function: convertRawAngleToDegrees
/* In: angle data from AMS_5600::getRawAngle
/* Out: human readable degrees as float
/* Description: takes the raw angle and calculates
/* float value in degrees.
/*******************************************************/
float convertRawAngleToDegrees(word newAngle)
{
  /* Raw data reports 0 - 4095 segments, which is 0.087 of a degree */
  float retVal = newAngle * 0.087;
  ang = retVal;
  return ang;
}
void loop()
{
    SERIAL.println(String(convertRawAngleToDegrees(ams5600.getRawAngle()),DEC));
}
```

- **Step 3.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 4.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the `ctrl`+`shift`+`m` key at the same time. Set the baud rate to **115200**.

- **Step 5.** The result should be like this when it detected magnet underneath the sensor:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/AS5600%20with%20Calibrators.gif"/></div>

:::note
A calibrator is used here. The Calibrator 2D file is listed in Resources, so feel free to download and laser cut yourself!
:::

## FAQ

**Q1#** How to achieve maximum accuracy?

**A1:** Make sure the Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600) sensor is at a fixed distance/position to the magnet. Rotate the magnet to get from angle 0 all the way to angle 360 at first time to ensure positioning is correct.

The [AS5600](https://github.com/Seeed-Studio/Seeed_Arduino_AS5600) library also provides a full testing function to operate for the sensor.

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Grove%20-%2012-bit%20Magnetic%20Rotary%20Position%20Sensor%20(AS5600).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[ZIP]** [Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600) Schematic file](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Grove%20-%2012-bit%20Magnetic%20Rotary%20Position%20Sensor%20(AS5600).zip)
- **[PDF]** [AS5600 Datasheet](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Magnetic%20Rotary%20Position%20Sensor%20AS5600%20Datasheet.pdf)
- **[DWG]** [Grove - 12 bit Magnetic Rotary Position Sensor(AS5600) Calibrator](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Grove%20-%2012%20bit%20Magnetic%20Rotary%20Position%20Sensor(AS5600)%20Calibrator.dwg)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
