---
title: Grove - 12 Key Capacitive I2C Touch Sensor V2 (MPR121)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020534
tags:
---

![](https://github.com/SeeedDocument/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/raw/master/img/main.jpg)


The **Grove - 12 Key Capacitive I2C Touch Sensor V2 (MPR121)** is a multichannel proximity capacitive touch sensor. It's a 3-in-1 module with the following features: Capacitance Sensing, Touch Sensing, and Proximity Sensing.

**Capacitance Sensing**: This module uses a constant DC current capacitance sensing scheme. It can measure capacitances ranging from 10 pF to over 2000 pF with a resolution up to 0.01 pF.

**Touch Sensing**: Once the electrode capacitance data is acquired, the electrode touch/release status is determined comparing it to the capacitance baseline value.

**Proximity Sensing**: One new feature of the MPR121 is the near proximity sensing system. This means that all of the system’s electrodes can be
summed together to create a single large electrode.


Based on Freescale MPR121, this sensor have 12 completely independent electrodes with build-in autoconfiguration. Thanks to I2C interface, you can detect all the 12 electrodes signals with only one Grove port, and the I2C address is hardware configurable, from 0X5B to 0X5D. This also makes it possible for multiple
**Grove - 12 Key Capacitive I2C Touch Sensor V2 (MPR121)** to be used together for channel expansions in a single system, you can build a touch system which contains max. 36 electrodes.

This sensor is an upgrade version of [Grove - I2C Touch Sensor](https://www.seeedstudio.com/Grove-I2C-Touch-Sensor-p-840.html), to meet Matsuzawa.Takashi's(one of our customer) needs, we make the I^2^C address changeable, and even cheaper than the old version. So if you have any suggestions about all the Groves, please just shoot to us. We will always listen to your voice, it may make another upgrade, even a new grove. Please kindly write your suggestions in the [Grove 100+](https://www.seeedstudio.com/grove_100) page. 



<p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V2-%28MPR121%29-p-3141.html
" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


## Version Change

|Item| Grove - 12 Key Capacitive I2C Touch Sensor V2 | Grove - I2C Touch Sensor |
|---|---|---|
|Main Chip|MPR121|MPR121|
|I^2^C Address|changeable(0X5B ~ 0X5D)|unmodifiable(0X5A)|
|Touch Sensor Feeler|x|√|
|Input Interface|alligator interface|DIP 2Pin Female Header|
|Cost Performance|High|Low|
|Release Time|September 11-2018|October 31-2015|


## Features

- Internal 10-bit ADC
- Integrated independent autocalibration for each electrode input
- Completely independent electrodes with built-in autoconfiguration
- I2C interface, with IRQ Interrupt output to advise electrode status changes
- Hardware configurable I2C address
- 12 electrodes/capacitance sensing inputs in which 8 are multifunctional for LED driving and GPIO
- Autoconfiguration of charge current and charge time for each electrode input
- Separate touch and release trip thresholds for each electrode, providing hysteresis and electrode independence


## Specification

|Item|Value|
|---|---|
|Operating voltage|3.3V / 5V|
|Operating temperature|-40°C to +85°C|
|Storage Temperature Range|-40°C to +125°C|
|Capacitances ranging|10 pF to over 2000 pF|
|Resolution|0.01 pF|
|GPIO Source Current per Pin|12 mA|
|GPIO Sink Current per Pin|1.2 mA|
|Interface|I^2^C|
|I^2^C addrss range|0x5B,0x5C,0x5D|
|Default I^2^C address|0x5B|


## Applications

- PC Peripherals
- MP3 Players
- Remote Controls
- Mobile Phones
- Lighting Controls


## Hardware Overview

### Pin Map

![](https://github.com/SeeedDocument/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/raw/master/img/pin_map.jpg)


|Pin Number|Pin Name|Function|Pin multiplexing|
|---|---|---|---|
|8|CH0| Channel0, Electrode 0, input the capacitance valnue|-|
|9|CH1| Channel1, Electrode 1, input the capacitance valnue|-|
|10|CH2| Channel2, Electrode 2, input the capacitance valnue|-|
|11|CH3| Channel3, Electrode 3, input the capacitance valnue|-|
|12|CH4| Channel4, Electrode 4, input the capacitance valnue|GPIO or LED driver|
|13|CH5| Channel5, Electrode 5, input the capacitance valnue|GPIO or LED driver|
|14|CH6| Channel6, Electrode 6, input the capacitance valnue|GPIO or LED driver|
|15|CH7| Channel7, Electrode 7, input the capacitance valnue|GPIO or LED driver|
|16|CH8| Channel8, Electrode 8, input the capacitance valnue|GPIO or LED driver|
|17|CH9| Channel9, Electrode 9, input the capacitance valnue|GPIO or LED driver|
|18|CH10| Channel10, Electrode 10, input the capacitance valnue|GPIO or LED driver|
|19|CH11| Channel11, Electrode 11, input the capacitance valnue|GPIO or LED driver|


!!!Tip
        For the CH0 ~ CH11, once the electrode capacitance data is acquired, the electrode touch/release status is determined comparing it to the capacitance baseline value. And you can set the baseline value for each channel separately. The Pin12 ~ Pin19 is multifunctional, which means you can configure them as GPIO or LED driver, for more detail, please refer to the freescale application note [AN3894](https://github.com/SeeedDocument/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/raw/master/res/AN3894.pdf).



![](https://github.com/SeeedDocument/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/raw/master/img/pin_map_back_1.jpg )


!!!Danger
        The central pad is connected to the address wire, you can change the I2C address by cutting the wire and re-welding it. For the safety of you and others, please be careful with knife or welding gun you may use.



### Schemaitc

**Power**

![](https://github.com/SeeedDocument/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/raw/master/img/schematic.jpg)

The operation voltage of Freescale MPR121 is 1.71V to 3.6V, however, the voltage of Arduino is 3.3V or 5V. In order to make it compaticable with 5V system, we use a voltage conversion chip to provide 3.3V for the Freescale MPR121. 

**Bi-directional level shifter circuit**

![](https://github.com/SeeedDocument/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/raw/master/img/schematic_1.jpg)

This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I<sup>2</sup>C bus of this sensor use 3.3V, if the I<sup>2</sup>C bus of the Arduino use 5V, this circuit will be needed. In the schematic above, **Q1** and **Q2** are N-Channel MOSFET [2N7002A](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/res/2N7002A_datasheet.pdf), which act as a bidirectional switch. In order to better understand this part, you can refer to the [AN10441](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/res/AN10441.pdf)




## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg)  |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's hardware or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started


### Play With Arduino

In this part, we will show you how to use the **Grove - 12 Key Capacitive I2C Touch Sensor V2 (MPR121)** as a touch sensor, as for how to configure it as a Capacitance Sensor or Proximity Sensor, please check the [Datasheet](https://github.com/SeeedDocument/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/raw/master/res/MPR121.pdf).

#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield | I2C Touch Sensor V2|
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/raw/master/img/thumbnail.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V2-%28MPR121%29-p-3141.html" target="_blank">Get One Now</a>|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.


- **Step 1.** Connect the Grove - 12 Key Capacitive I2C Touch Sensor V2 (MPR121) to the **I^2^C** port of the Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.


![](https://github.com/SeeedDocument/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/raw/master/img/connect.jpg)

!!!Note
        If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.


| Seeeduino     |  Grove-MPR121          |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| SDA           | White                   |
| SCL           | Yellow                  |


#### Software

!!!Note
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


- **Step 1.** Download the [Grove touch sensor MPR121](https://github.com/linux-downey/Grove_touch_sensor_MPR121) Library from Github.

- **Step 2.** Refer to [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open the example, you can open it in the following three ways：
    1. Open it directly in the Arduino IDE via the path: **File --> Examples --> Grove touch sensor MPR121 --> MPR121_demo**. 
    ![](https://github.com/SeeedDocument/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/raw/master/img/path.jpg)
    
    2. Open it in your computer by click the **MPR121_demo.ino** which you can find in the **xxxx\Arduino\libraries\Grove_touch_sensor_MPR121-master**, **XXXX** is the location you installed the Arduino IDE.
    ![](https://github.com/SeeedDocument/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/raw/master/img/path_1.jpg)
    
    3. Or, you can just click the icon ![](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/copy.jpg) in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.

```C++
#include "Seeed_MPR121_driver.h"

Mpr121 mpr121;

u16 touch_status_flag[CHANNEL_NUM]={0};
void setup()
{
  s32 ret=0;
  Serial.begin(115200);
  if(mpr121.begin()<0)
  {
    Serial.println("Can't detect device!!!!");
  }
  else
  {
    Serial.println("mpr121 init OK!");
  }
  delay(100);
}
void loop()
{
  u16 result=0;
  u16 filtered_data_buf[CHANNEL_NUM]={0};
  u8 baseline_buf[CHANNEL_NUM]={0};
  
  result=mpr121.check_status_register();

  mpr121.get_filtered_reg_data(&result,filtered_data_buf);

  for(int i=0;i<CHANNEL_NUM;i++)
  {
    if(result&(1<<i))                             /*key i is pressed!!*/
    {
      if(0==touch_status_flag[i])             
      { 
        touch_status_flag[i]=1;
        Serial.print("key ");
        Serial.print(i);
        Serial.println("pressed");
      }
    }
    else
    {
      if(1==touch_status_flag[i])
      {
        touch_status_flag[i]=0;
        Serial.print("key ");
        Serial.print(i);
        Serial.println("release");
      }
    }
  }
  delay(50); 
}
```

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **115200**.


!!!success
     If every thing goes well, you will get the result. When you touch the CH0 ~ CH11 pads, it will trigger **key ?pressed** and **key ?release**


```C++
mpr121 inmpr121 init OK!
key 11pressed
key 11release
key 10pressed
key 10release
key 0pressed
key 0release
key 2pressed
key 2release

``` 


## Resources

- **[Zip]** [Grove - 12 Key Capacitive I2C Touch Sensor V2 eagle files](https://github.com/SeeedDocument/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/raw/master/res/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121.zip)

- **[Zip]** [Grove touch sensor MPR121 Library](https://github.com/linux-downey/Grove_touch_sensor_MPR121/archive/master.zip)

- **[PDF]** [Datasheet of MPR121](https://github.com/SeeedDocument/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/raw/master/res/MPR121.pdf)

- **[PDF]** [AN3894](https://github.com/SeeedDocument/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/raw/master/res/AN3894.pdf)



## Project

This is the introduction Video of this product, simple demos, you can have a try.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ds7kBVdeY4U?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

**Leaf Piano**: We made a piano using a touch sensor, as well as leaves for piano keys.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/leaf-piano-5261a6/embed' width='350'></iframe>

**Play with Scratch**: How to play a scratch game with a Touch Sensor?

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/play-with-scratch-b3f9fc/embed' width='350'></iframe>

## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
