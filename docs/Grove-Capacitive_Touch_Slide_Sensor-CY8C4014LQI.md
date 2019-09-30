---
name: Grove - Capacitive Touch Slide Sensor(CY8C4014LQI)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020552
tags:
---

![](https://github.com/SeeedDocument/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/raw/master/img/main.jpg)

The Grove - Capacitive Touch Slide Sensor(CY8C4014LQI) is a multifunctional touch sensor. You can touch the two buttons or slide on the 5-segment slider, each touch pad has a corresponding LED to indicate the touch status. Also we provide a default high interrupt pin, once you touch the button or slide the slider, it will comes to low. 

It will be a lot fun to use this module as a game controler or apply it to other touch applications.


!!!Notice
        The product comes with a acrylic case, and we strongly recommend that you do not remove the case to use it. It may be triggered by mistake when your finger touches the trace or pad on the back. 



<p style=":center"><a href="https://www.seeedstudio.com/Grove-Capacitive-Touch-Slide-Sensor%28CY8C4014LQI%29-p-3183.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Capacitive Touch Slide Sensor(CY8C4014LQI) | Initial                                                                                               | Jul 2018      |



## Features

- 32-bit MCU Subsystem
- 16-MHz ARM Cortex-M0 CPU
- Up to 16KB of flash with Read Accelerator
- Up to 2KB of SRAM
- Automatic hardware tuning (SmartSense™) over a sensor range of 5 pF to 45 pF
- I^2^C interface


## Specification

|Item|Value|
|---|---|
|Operating Voltage|3.3V / 5V|
|Operating Ambient Temperature|-40°C to +85°C|
|Operating Junction Temperature|-40°C to +100°C|
|Interface|I^2^C|
|Default I^2^C Address|0x08|
|Size|L: 60mm W: 20mm H: 6mm| 
|Weight|8g|
|Package size|L: 140mm W: 90mm H: 10mm|
|Gross Weight|15g|


## Applications

- Game controller
- Touch applications



## Hardware Overview

### Pin Out

![](https://github.com/SeeedDocument/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/raw/master/img/pin_out.jpg)

![](https://github.com/SeeedDocument/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/raw/master/img/pin_out_back.jpg)



### Schemaitc

**Power**

This module is based on **CY8C4014LQI**, the input voltage of this chip range from 1.71v-5.5v, so you can use both 3.3v and 5v pin of Arduino to supply for this module.


## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started


### Play With Arduino


#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield | Grove - Capacitive Touch Slide Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/raw/master/img/thumbnail.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Capacitive-Touch-Slide-Sensor%28CY8C4014LQI%29-p-3183.html" target="_blank">Get One Now</a>|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.



- **Step 1.** Connect the Grove - Capacitive Touch Slide Sensor to port **I^2^C** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.

![](https://github.com/SeeedDocument/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/raw/master/img/connect.jpg)


!!!Note
        If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.


| Seeeduino      |  Grove Cable       | Grove - Capacitive Touch Slide Sensor |
|--------------- |--------------------|-----|
| GND            | Black              | GND |
| 5V or 3.3V     | Red                | VCC |
| SDA            | White              | SDA |
| SCL            | Yellow             | SCL |


#### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


- **Step 1.** Download the [Grove_touch_sensor_CY8C40XX](https://github.com/Seeed-Studio/Grove_touch_sensor_CY8C40XX) Library from Github.

- **Step 2.** Refer to [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open the example, you can open it in the following three ways：
    1. Open it directly in the Arduino IDE via the path: **File --> Examples --> Grove_touch_sensor_CY8C40XX --> basic_demo**. 
    ![](https://github.com/SeeedDocument/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/raw/master/img/path.png)
    
    2. Open it in your computer by click the **basic_demo.ino** which you can find in the folder **XXXX\Arduino\libraries\Grove_touch_sensor_CY8C40XX-master\examples\basic_demo**, **XXXX** is the location you installed the Arduino IDE.
    ![](https://github.com/SeeedDocument/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/raw/master/img/path_1.png)
    
    3. Or, you can just click the icon ![](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/copy.jpg) in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.

```C++

#include "Seeed_CY8C401XX.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
#else
  #define SERIAL Serial
#endif

CY8C sensor;
void setup()
{
    SERIAL.begin(115200);
    
    sensor.init();
}


void loop()
{
    u8 value=0;
    sensor.get_touch_button_value(&value);
    SERIAL.print("button value is");
    SERIAL.println(value,HEX);
    if(value&0x01)
        SERIAL.println("button 1 is pressed");
    if(value&0x2)
        SERIAL.println("button 2 is pressed");

    sensor.get_touch_slider_value(&value);
    SERIAL.print("slider value is");
    SERIAL.println(value,HEX);
    SERIAL.println(" ");


    delay(1000);
}
```

!!!Attention
        The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods. 


- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **115200**.


!!!success
     If every thing goes well, when you open the Serial Monitor and touch the slide touch sensor, you will see the LED light up, and the Serial Monitor is shown below:


```C++
button value is1
button 1 is pressed
slider value is0
 
button value is3
button 1 is pressed
button 2 is pressed
slider value is9
```

![](https://github.com/SeeedDocument/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/raw/master/img/result.gif)


## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/raw/master/res/Grove-Capacitive_Touch_Slider_Sensor.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources

- **[Zip]** [Grove - Capacitive Touch Slide Sensor(CY8C4014LQI) Eagle Files](https://github.com/SeeedDocument/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/raw/master/res/Grove-Capacitive_Touch_Slider_Sensor.zip)

- **[Zip]** [Grove touch sensor CY8C40XX Library](https://github.com/Seeed-Studio/Grove_touch_sensor_CY8C40XX/archive/master.zip)

- **[PDF]** [Datasheet of CY8C4014LQI](https://github.com/SeeedDocument/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/raw/master/res/CY8C4014LQI_Datasheet.pdf)


## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/)

<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>