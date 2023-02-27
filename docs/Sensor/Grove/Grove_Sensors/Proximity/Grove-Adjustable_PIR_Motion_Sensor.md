---
title: Grove - Adjustable PIR Motion Sensor
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Adjustable_PIR_Motion_Sensor/
slug: /Grove-Adjustable_PIR_Motion_Sensor
last_update:
  date: 01/05/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/main.jpg)

Grove - Adjustable PIR Motion Sensor is an easy to use Passive Infrared motion sensor, which can detect infrared object motion up to 3 meters. Any infrared object moves in its detecting range, the sensor outputs HIGH on its SIG pin. And you can adjust the SIG HIGH time up to 130s via the  potentiometer, moreover, you can adjust the detect range via the other potentiometer.

<iframe width={800} height={450} src="https://www.youtube.com/embed/EhZ7uDvoALE" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Adjustable-PIR-Motion-Sensor-p-3225.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Adjustable PIR Motion Sensor | Initial                                                                                               | Sep 2018      |

## Features

- Built-in filter, high immunity to RFI
- Output time, sensitivity and detect range adjustable
- Low voltage, low power consumption

## Specification

<div>
  |Item|Value|
  |---|---|
  |Operating Voltage|3.3V / 5V|
  |Operating Temperature|-30℃ ~ 70℃|
  |Viewing Angel|Horizontal placement 80°<br />Vertical placement 55°|
  |Detction Spectral Response(λ)|5nm ~ 14nm|
  |Detction Distance|0 ~ 3m|
  |High Level On Time| &lt;130s|
  |Interface|Digital|
  |Size|L: 40mm W: 20mm H: 15mm|
  |Weight|4.5g|
  |Package size|L: 140mm W: 90mm H: 15mm|
  |Gross Weight|10g|
</div>

## Typical applications

- PIR motion detection
- Intruder detection
- Occupancy detection
- Motion sensor lights
- Security system
- Automatic control

## Hardware Overview

### Pin Out

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/pinout.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/pinout_back.jpg)

:::warning
  The Fresnel lens equipped with the module is a plastic piece and is prohibited from approaching high temperatures or open flames.
:::

### Schemaitc

**Power**

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/11.jpg)

The typical voltage of L221D is 3.3V, so we use the [XC6206P332MR](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf) chip to provide a stable 3.3V. The input of XC6206P33 ranges from 1.8V to 6.0V, so you can use this module with your Arduino both in 3.3V and 5V.

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

### Play With Arduino

#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield |Adjustable PIR Motion Sensor | Grove - Blue LED |
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/led.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Adjustable-PIR-Motion-Sensor-p-3225.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Blue-LED-p-1139.html" target="_blank">Get One Now</a>

:::note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy

    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.
:::

- **Step 1.** Connect the Grove - Adjustable PIR Motion Sensor to port **D2** of Grove-Base Shield, connect the Grobe - Blue LED to the **D4** port of the Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/connect.jpg)

:::note
        If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.
:::

| Seeeduino      |  Grove Cable       | Grove - Adjustable PIR Motion Sensor |
|--------------- |--------------------|-----|
| GND            | Black              | GND |
| 5V or 3.3V     | Red                | VCC |
| NO connection            | White              | NC |
| D2           | Yellow             | SIG |

| Seeeduino      |  Grove Cable       | Grove - Blue LED |
|--------------- |--------------------|-----|
| GND            | Black              | GND |
| 5V or 3.3V     | Red                | VCC |
| NO connection            | White              | NC |
| D4           | Yellow             | SIG |

#### Software

:::note
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.** Just click the icon ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.

```C++
/*macro definitions of PIR motion sensor pin and LED pin*/
#define PIR_MOTION_SENSOR 2//Use pin 2 to receive the signal from the module 
#define LED 4//the Grove - LED is connected to D4 of Arduino

void setup()
{
 pinsInit();
}

void loop() 
{
 if(isPeopleDetected())//if it detects the moving people?
  turnOnLED();
 else
  turnOffLED();
}
void pinsInit()
{
 pinMode(PIR_MOTION_SENSOR, INPUT);
 pinMode(LED,OUTPUT);
}
void turnOnLED()
{
 digitalWrite(LED,HIGH);
}
void turnOffLED()
{
 digitalWrite(LED,LOW);
}
/***************************************************************/
/*Function: Detect whether anyone moves in it's detecting range*/
/*Return:-boolean, ture is someone detected.*/
boolean isPeopleDetected()
{
 int sensorValue = digitalRead(PIR_MOTION_SENSOR);
 if(sensorValue == HIGH)//if the sensor value is HIGH?
 {
  return true;//yes,return ture
 }
 else
 {
  return false;//no,return false
 }
}
```

- **Step 2.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

:::success
     If every thing goes well, When someone approaches this sensor or when you approach this sensor with your hand, the LED will light up.
:::

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/res/Grove%20-%20Adjustable%20PIR%20Motion%20Sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Zip]** [Grove - Adjustable PIR Motion Sensor Eagle Files](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/res/Grove%20-%20Adjustable%20PIR%20Motion%20Sensor.zip)

- **[PDF]** [Datasheet L221D](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/res/Mini%20SMD%20Digital%20Pyroelectric%20Infrared%20Sensors.pdf)

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
