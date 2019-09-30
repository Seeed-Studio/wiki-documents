---
name: Grove - 2-Channel Inductive Sensor(LDC1612)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020599
tags:
---

![](https://github.com/SeeedDocument/Grove-2-Channel_Inductive_Sensor-LDC1612/raw/master/img/main.jpg)


The Grove - 2-Channel Inductive Sensor is based on Texas Instruments(TI) LDC1612, a 28-bit inductance to digital converter(LDC) for inductive sensing solutions. With multiple channels and support for remote sensing, the LDC1612 enables the performance and reliability benefits of inductive sensing to be realized at minimal cost and power. Inductance is an effect caused by the magnetic field of a current-carrying conductor acting back on the conductor. So by sensing the inductance, this sensor can detect the proximity of conductors especially metal nearby.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-2-Channel-Inductive-Sensor-%28LDC1612%29-p-3223.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Feature

- 2 Channels With Matched Sensor Drive
- Easy-to-Use: Minimal Configuration Required
- Multiple Channels	Support Environmental and Aging Compensation
- Remote Sensor Position of >20 cm Supports Operation In Harsh Environments
- Coil Parameter: Diameter: 16mm/ Turns: 20


##Specification

|Item|Value|
|---|---|
|Supply Voltage|3.3V / 5V|
|Junction Temperature|-55～150℃|
|Supported Sensor Frequency Range|1kHz~10MHz|
|Best Detecting Range|15mm|
|Interface|I2C|
|I2C address|0x2B(defult)<br>0x2A(configurable)|
|Package size|L: 140mm W: 90mm H: 10mm|
|Gross Weight|12g|



When the ADDR pin is set low, the LDC I2C address is 0x2A; when the ADDR pin is set high, the LDC I2C address is 0x2B. 


## Typical applications

- Knobs in consumer, appliances, and automotive
- Linear and rotational encoders
- Buttons in home electronics, wearables, manufacturing, and automotive
- Keypads in manufacturing and appliances
- Slider buttons in consumer products
- Metal detection in industrial and automotive
- POS and EPOS
- Flow meters in consumer and appliances


## Hardware Overview

### Pin Out

![](https://github.com/SeeedDocument/Grove-2-Channel_Inductive_Sensor-LDC1612/raw/master/img/pinout.jpg)

![](https://github.com/SeeedDocument/Grove-2-Channel_Inductive_Sensor-LDC1612/raw/master/img/pinout_back.jpg)



!!!Notice
        **1.** Set the Rb(resistance unit-kom), L(inductance unit-uH), C(capacitance unit-pf) by the APIs if you don't use the Coil Inductance we provided. Used to calculate and set the corresponding frequency register of the sensor.
        **2.** There is an INT-pad on the sensor board, It turns to the low level when the conversion is complete, overwise stays high, but you should configure the corresponding register of the sensor. 


## Working Principle
LDC1612 works based on measuring the parameters of the LC oscillator, formed by the PCB copper trace and the capacitor. 

LDC1612 is able to measure the amount of energy it needs to provide to maintain the LC oscillation when a conductive object which is magnetically coupled with the LC oscillator approach. As the power loss of the oscillator circuit is proportional to the impedance of the conducting object, and the impedance value is affected by the distance of the object, it can then be used to determine the distance between the object and the LC oscillator. In this case, the PCB copper trace can be seen as an impedance sensor.



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


| Seeeduino V4.2 | Base Shield| Grove - 2-Channel Inductive Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-2-Channel_Inductive_Sensor-LDC1612/raw/master/img/thumbnail.jpg)|
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-2-Channel-Inductive-Sensor-%28LDC1612%29-p-3223.html)|

!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy.
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.



- **Step 1.** Connect the Grove - 2-Channel Inductive Sensor(LDC1612) to port  **I^2^C** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.


![](https://github.com/SeeedDocument/Grove-2-Channel_Inductive_Sensor-LDC1612/raw/master/img/With_ard.jpg)



Now, we will demonstrate you how to run the code for coin distance detection, similar procedure if you wish to run other programs.

#### Software

!!! Attention
		If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.

- **Step 1.** Download the [Grove-2-Channel_Inductive_Sensor-LDC1612](https://github.com/Seeed-Studio/Seeed_LDC1612) Library from Github.

- **Step 2.** Refer to [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open the example, you can open it in the following three ways：
    1. Open it directly in the Arduino IDE via the path: **File --> Examples -->Seeed Inductive Sensor LDC1612--> coin_test_demo**. 
    ![](https://github.com/SeeedDocument/Grove-2-Channel_Inductive_Sensor-LDC1612/raw/master/img/arduino1.png)
    
    2. Open it in your computer by click the **basic_demo.ino** which you can find in the folder **XXXX\Arduino\libraries\examples\coin_test_demo\coin_test_demo.ino**, **XXXX** is the location you installed the Arduino IDE.
    ![](https://github.com/SeeedDocument/Grove-2-Channel_Inductive_Sensor-LDC1612/raw/master/img/arduino2.png)
    
    3. Or, you can just click the icon ![](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/copy.jpg) in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.



**Coin demo**
This program allows user to detect the distance from the coin to the copper trace.

```C++


#include "Seeed_LDC1612.h"

LDC1612 sensor;
const u32 DISTANCE_00=44000000;  //do not detect
const u32 DISTANCE_00_01=60000000;  // distance:<1mm
const u32 DISTANCE_01_05=45000000;  // distance:1mm~5mm
const u32 DISTANCE_05_10=44250000; // distance:5mm~10mm
const u32 DISTANCE_10_15=44080000; // distance:10mm~15mm
const u32 DISTANCE_15_20=44020000; // distance:15mm~20mm

void setup()
{
    Serial.begin(115200);
    delay(100);
    Serial.println("start!");

    sensor.init();

    if(sensor.single_channel_config(CHANNEL_0))
    {
        Serial.println("can't detect sensor!");
        while(1);
    }


}


void loop()
{
    u32 result_channel1=0;
    u32 result_channel2=0;

    /*shows the status of sensor.*/
    //sensor.get_sensor_status();

    /*Get channel 0 result and parse it.*/
    sensor.get_channel_result(CHANNEL_0,&result_channel1);

    /*Test the distance between the coin and the sensor. 
    Note that the accuracy is for reference only.
    Please suspend the sensor during the test! */
    if(0!=result_channel1)
    {
        if(result_channel1<DISTANCE_00)
        {
            Serial.println("There is no coin here!");
        }

        if(result_channel1>=DISTANCE_00_01)
        {
            Serial.println("The distance between the COIN is 0~1mm");
        }

        if(result_channel1<DISTANCE_00_01&&result_channel1>=DISTANCE_01_05)
        {
            Serial.println("The distance between the COIN is 1~5mm");
        }

        if(result_channel1<DISTANCE_01_05&&result_channel1>=DISTANCE_05_10)
        {
            Serial.println("The distance between the COIN is 5~10mm");
        }

        if(result_channel1<DISTANCE_05_10&&result_channel1>=DISTANCE_10_15)
        {
            Serial.println("The distance between the COIN is 10~15mm");
        }

        if(result_channel1<DISTANCE_10_15&&result_channel1>=DISTANCE_15_20)
        {
            Serial.println("The distance between the COIN is 15~20mm");
        }

        if(result_channel1<DISTANCE_15_20&&result_channel1>=DISTANCE_00)
        {
            Serial.println("The distance between the COIN is more than 2mm");
        }

    }
    
    delay(1000);
}


```

!!!Attention
        The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.


!!!Success
		If everything goes well, you will see the following result

```C++

The distance between the COIN is 5~10mm
The distance between the COIN is 5~10mm
There is no coin here!
The distance between the COIN is 10~15mm
The distance between the COIN is 5~10mm
The distance between the COIN is 1~5mm
The distance between the COIN is 5~10mm
The distance between the COIN is 5~10mm

```




**Basic demo**

Code for basic_demo.ino

```C++


#include "Seeed_LDC1612.h"

LDC1612 sensor;


void setup()
{
    Serial.begin(115200);
    delay(100);
    Serial.println("start!");

    sensor.init();

    if(sensor.single_channel_config(CHANNEL_0))
    {
        Serial.println("can't detect sensor!");
        while(1);
    }


}


void loop()
{
    u32 result_channel1=0;
    u32 result_channel2=0;

    /*shows the status of sensor.*/
    //sensor.get_sensor_status();

    /*Get channel 0 result and parse it.*/
    sensor.get_channel_result(CHANNEL_0,&result_channel1);

    /*sensor result value.you can make a lot of application according to its changes.*/
    if(0!=result_channel1)
    {
        Serial.print("result_channel0 is ");
        Serial.println(result_channel1);
    }
    
    delay(1000);
}



```

!!!Success
        If everything goes well, you will see the following result

```C++

start!
17:06:16.418 -> fsensor =3.74
17:06:16.418 -> result_channel0 is 44387993
result_channel0 is 44387847
result_channel0 is 43476136
result_channel0 is 43799295
result_channel0 is 48988429
result_channel0 is 48828492
result_channel0 is 48682647
result_channel0 is 48845443

```




**Multi-Channel demo**

This example shows multiple channels measurement and note LDC1612 support two channels.

You may connect coil 1 as shown below:

![](https://github.com/SeeedDocument/Grove-2-Channel_Inductive_Sensor-LDC1612/raw/master/img/link.png)

Code for muti_channel_demo.ino

```C++

#include "Seeed_LDC1612.h"
#include "math.h"

LDC1612 sensor;

void setup()
{
    Serial.begin(115200);
    delay(100);
    Serial.println("start!");

    sensor.init();

    /*Enable INT-PIN,Interrupted after measurement is completed.*/
    //sensor.set_ERROR_CONFIG(0x01);

    /*multiple channel use case configuration.*/
    if(sensor.LDC1612_mutiple_channel_config())
    {
        Serial.println("can't detect sensor!");
        while(1);
    }
}


void loop()
{
    u32 result_channel0=0;
    u32 result_channel1=0;

    /*shows the status of sensor.*/
    //sensor.get_sensor_status();

    /*sensor result value.you can make a lot of application according to its changes.*/
    sensor.get_channel_result(0,&result_channel0);
    sensor.get_channel_result(1,&result_channel1);

    if(0!=result_channel0)
    {
        Serial.print("result_channel0 is ");
        Serial.println(result_channel0);
    }
    if(0!=result_channel1)
    {
        Serial.print("result_channel1 is ");
        Serial.println(result_channel1);
    }
    delay(1000);
}



```

!!!Success
        If everything goes well, you will see the following result

```C++

start!
17:04:34.063 -> fsensor =3.74
17:04:34.063 -> fsensor =3.74
17:04:34.063 -> result_channel0 is 44399351
17:04:34.063 -> result_channel1 is 43599310
result_channel0 is 44648052
17:04:35.078 -> result_channel1 is 43803483
result_channel0 is 44786926
17:04:36.056 -> result_channel1 is 43990824
result_channel0 is 44266733
17:04:37.069 -> result_channel1 is 43305067
result_channel0 is 44767222
17:04:38.092 -> result_channel1 is 43553768
result_channel0 is 46081099
17:04:39.068 -> result_channel1 is 45089497
result_channel0 is 44681202
17:04:40.083 -> result_channel1 is 43207588
can't detect coil Coil Inductance!!!
17:04:41.098 -> can't detect coil Coil Inductance!!!
can't detect coil Coil Inductance!!!
17:04:42.106 -> result_channel0 is 89478485
can't detect coil Coil Inductance!!!
17:04:43.081 -> result_channel0 is 49469095
result_channel0 is 51374493
17:04:44.113 -> result_channel1 is 49895644
can't detect coil Coil Inductance!!!
17:04:45.090 -> can't detect coil Coil Inductance!!!
can't detect coil Coil Inductance!!!

```


!!!Note
        In basic_demo and muti_channel_demo examples, you may keep in mind that each output is corresponding to the intensity of inductance. There is the functional relationship between the output and the intensity of inductance, if you are interested in further information, you may want to refer to [Datasheet LDC1612](https://github.com/SeeedDocument/Grove-2-Channel_Inductive_Sensor-LDC1612/blob/master/res/LDC1612.pdf) provided by Texas Instrument(TI).


## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove-2-Channel_Inductive_Sensor-LDC1612/blob/master/res/Grove%20-%202-Channel%20Inductive%20Sensor%20(LDC1612).zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources

- **[Zip]** [Grove - 2-Channel Inductive Sensor(LDC1612) Eagle Files](https://github.com/SeeedDocument/Grove-2-Channel_Inductive_Sensor-LDC1612/blob/master/res/Grove%20-%202-Channel%20Inductive%20Sensor%20(LDC1612).zip)

- **[Zip]** [Grove - 2-Channel Inductive Sensor(LDC1612) Software Library](https://github.com/Seeed-Studio/Seeed_LDC1612/archive/master.zip)

- **[PDF]** [Datasheet LDC1612](https://github.com/SeeedDocument/Grove-2-Channel_Inductive_Sensor-LDC1612/blob/master/res/LDC1612.pdf)




## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/) or drop mail to [techsupport@seeed.cc](techsupport@seeed.cc).


<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>