---
description:  Grove - Step Counter(BMA456)
title:  Grove - Step Counter(BMA456)
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Step_Counter-BMA456
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/main.jpg)

The Grove - Step Counter(BMA456) is based on BMA456, which is an exetremely small, triaxial, low-g high performance accelerations module. Thanks to the special algorithm of BOSCH, we made this module a portable pedometer.


Relaiable, cost-effective, on top of that, it's very easy to use, you can easily add this plug and play module on your wearable devices. 


<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html)
## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Step Counter(BMA456) | Initial                                                                                               | Oct 2018      |


## Features

- On chip FIFO
- Ultra-low power
- On-chip interrupt
- Programable functionality



## Specification

|Item|Value|
|---|---|
|Operating Voltage|3.3V / 5V|
|Acceleration Range|±2g, ±4g, ±8g, ±16g|
|Sensitivity|16384 @±2g / 8192 @±4g / 4096 @±8g / 2048 @±16g|
|Interface|I^2^C|
|I^2^C Address|0x19(default) / 0x18(optional)|
|Size|L: 40mm W: 20mm H: 10mm| 
|Weight|3.2g|
|Package size|L: 140mm W: 90mm H: 10mm|
|Gross Weight|9g|


## Typical applications

- Applications with height constrains
- Plug and Play Step-Counter solution with watermark functionality
- Fitness applications / Activity Tracking
- Power management for wearable applications 
- Display on/off and profile switching
- User interface without hardware buttons
- E-compass tilt compensation and data synchronization
- High performance angle measurements



## Hardware Overview

### Pin Out

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/pin_out.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/pin_out_back.jpg)



### Schemaitc

**Power**

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/schematic_1.jpg)

The typical voltage of BMA456 is 1.8V, so we use the [XC6206P182MR](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf) chip to provide a stable 1.8V. The input of XC6206P33 ranges from 1.8V to 6.0V, so you can use this module with your Arduino both in 3.3V and 5V.

**Bi-directional level shifter circuit**

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/schematic_2.jpg)

This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I<sup>2</sup>C bus of this sensor use 3.3V, if the I<sup>2</sup>C bus of the Arduino use 5V, this circuit will be needed. In the schematic above, **Q6** and **Q5** are N-Channel MOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), which act as a bidirectional switch. In order to better understand this part, you can refer to the [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)



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

| Seeeduino V4.2 | Base Shield | Grove - Step Counter(BMA456) |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html" target="_blank">Get One Now</a>|


:::note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.
:::

- **Step 1.** Connect the Grove - Step Counter(BMA456) to port **I^2^C** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.


![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/connect.jpg)

:::note
        If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.
:::

| Seeeduino      |  Grove Cable       | Grove - Step Counter(BMA456) |
|--------------- |--------------------|-----|
| GND            | Black              | GND |
| 5V or 3.3V     | Red                | VCC |
| SDA            | White              | SDA |
| SCL            | Yellow             | SCL |



#### Software

:::note
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.** Download the [Seeed_BMA456](https://github.com/Seeed-Studio/Seeed_BMA456) Library from Github.

- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open the example, you can open it in the following three ways：
    1. Open it directly in the Arduino IDE via the path: **File --> Examples --> Grove -Step Counter(BMA456) --> step_counter**. 
    ![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/path_1.jpg)
    
    2. Open it in your computer by click the **step_counter.ino** which you can find in the folder **XXXX\Arduino\libraries\Seeed_BMA456-master\examples\step_counter**, **XXXX** is the location you installed the Arduino IDE.
    ![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/path_2.jpg)
    
    3. Or, you can just click the icon ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.


```C++
#include "arduino_bma456.h"

uint32_t step = 0;

void setup(void)
{    
    Serial.begin(115200);
    Serial.println("BMA456 Step Counter");
    
    bma456.initialize(RANGE_4G, ODR_1600_HZ, NORMAL_AVG4, CONTINUOUS);
    bma456.stepCounterEnable();
}

void loop(void)
{	
    step = bma456.getStepCounterOutput();

    Serial.print("Step: ");
    Serial.println(step);
    
    delay(1000);
}
```

:::note
        The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.
:::

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **115200**.


:::success
     If every thing goes well, when you open the Serial Monitor and walk with this sensor on or move it to simulated walking posture , it may show as below:
:::

```C++
BM
Step: 0
BMA456 Step Counter
Step: 0
Step: 0
...
...
Step: 18
Step: 20
Step: 22
Step: 24
Step: 26
Step: 28
Step: 30
Step: 32
Step: 34
Step: 36
Step: 38
```


## Schematic Online Viewer


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/res/Grove%20-%20Step%20Counter(BMA456).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Resources

- **[Zip]** [Grove - Step Counter(BMA456) Eagle Files](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/res/Grove%20-%20Step%20Counter(BMA456).zip)

- **[Zip]** [Seeed BMA456 Library](https://github.com/Seeed-Studio/Seeed_BMA456/archive/master.zip)

- **[PDF]** [Datasheet BMA456](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/res/BMA456.pdf)

- **[PDF]** [XC6206 DATASHEET](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)



## Project

This is the introduction Video of this product, simple demos, you can have a try.

<iframe width="560" height="315" src="https://www.youtube.com/embed/gPi4EWuAGtg?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


## Tech Support

<div>
  Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/)<br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
