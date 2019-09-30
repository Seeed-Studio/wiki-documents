---
name: Grove - I2C High Accuracy Temperature Sensor(MCP9808)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020556
tags: 
---

![](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/img/main.JPG)
    


The Grove - I2C High Accuracy Temperature Sensor(MCP9808) is a high accuracy digital module based on MCP9808. Unlike other sensors, you can choose 
the measurement resolution of this sensor. In addition to high-precision temperature measurements, we also offer programmable temperature 
alert. We use a separate pin to output the alarm signal, you will find it so convenient to use this signal as an interruption to control other board. 

All in all, we believe this sensor will be a new star for temperature control.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor%28MCP9808%29-p-3108.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


## Features


- High Accuracy
    - ±0.25 (typical) from -40°C to +125°C
    - ±0.5°C (maximum) from -20°C to 100°C
    - ±1°C (maximum) from -40°C to +125°C

- User-Selectable Measurement Resolution
    - +0.5°C, +0.25°C, +0.125°C, +0.0625°C
- User-Programmable Temperature Alert Output
- I^2^C interface 


## Specification

|Item|Value|
|---|---|
|Working voltage|3.3V/5V|
|Operating range|-40°C to +125°C|
|Digital interface|I^2^C standard 400 kHz|
|I^2^C address|0x18(default)/ 0x18~0x1F(optional)|



## Applications

- Industrial Applications
- Industrial Freezers and Refrigerators
- Food Processing
- Personal Computers and Servers
- PC Peripherals
- Consumer Electronics
- Handheld/Portable Devices



## Hardware Overview

### Pin Map

![](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/img/pin_map_front.jpg)
![](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/img/pin_map_back.jpg)

**I2C Address**

We offer 3 sets of pads on the back of the PCB. The default AD0~AD2 are all connected to the Low level pads, you can cut those pads and solder them to the other side(High level).
The I^2^C address is a 7bits address <mark>0011A<sub>0</sub>A<sub>1</sub>A<sub>2</sub></mark>. <mark>0011</mark> is the address code,  which is the factory setting, we can not change it.
<mark>A<sub>0</sub>A<sub>1</sub>A<sub>2</sub></mark> is the slave address, we can change it. The defaut setting is A<sub>0</sub>=0/A<sub>1</sub>=0/A<sub>2</sub>=0, so the default I^2^C
address is <mark>0011000</mark>. Normaly the address should be 8bits, so we need to add one bit 0 to the MSB(Most Significant Bit), then we get <mark>0001,1000</mark>. This is a binary address,
we often use the hexadecimal address in the code, so let's convert the binary address to a hexadecimal address, here we get <mark>0x18</mark>. By the same token, if we solder all the pads to the
 high level, we will get <mark>0001,1111</mark>, which is <mark>0x1F</mark>. So the I^2^C address range from 0x18 to 0x1F, among them, you can choose whatever you want, just make sure you will change
the I^2^C address in the file **Seeed_MCP9808.h** in the **Grove_Temperature_sensor_MCP9808-master** library.


```c++
#define DEFAULT_IIC_ADDR  0X18
```

Address map

A<sub>2</sub>=0|A<sub>0</sub>=0|A<sub>0</sub>=1
--|--|---
A<sub>1</sub>=0|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-000,0x18|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-001,0x19
A<sub>1</sub>=1|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-010,0x1A|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-011,0x1B

A<sub>2</sub>=1|A<sub>0</sub>=0|A<sub>0</sub>=1
--|--|---
A<sub>1</sub>=0=0|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-100,0x1C|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-101,0x1D
A<sub>1</sub>=0=1|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-110,0x1E|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-111,0x1F


**<SPAN style="TEXT-DECORATION: overline">ALE</SPAN> Pad**

You can see the <SPAN style="TEXT-DECORATION: overline">ALE</SPAN> Pad on the back of the PCB. The alert signal output from this pad can be used as an external interrupt signal for other controllers.
The default output is high, in this board it should be 3.3V. When the condition is met, the output voltage becomes low(0V). You can set the condition when you finish this wiki 😄




### Schematic

**I^2^C Address**


![](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/img/schamitc_a.jpg)


As we mentioned above, we use those three sets of pads to select the I^2^C address, if you want to change the default adress, you can cut of the wire and re-solder it.


**MCP9808**

![](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/img/schamitc_c.jpg)

As you can see, the <SPAN style="TEXT-DECORATION: overline">ALE</SPAN> pad is connected to the 3.3V through a pull-up resistor.


**Bi-directional level shifter circuit**

![](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/img/schamitc.jpg)

This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I<sup>2</sup>C bus of this sensor use 3.3V, if the I<sup>2</sup>C bus of the Arduino use 5V, this circuit will be needed. In the schematic above, **Q6** and **Q5** are N-Channel MOSFET [2N7002A](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/res/2N7002A_datasheet.pdf), which act as a bidirectional switch. In order to better understand this part, you can refer to the [AN10441](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/res/AN10441.pdf)


!!!Tip
        In this section we only show you part of the schematic, for the full document please refer to the [Resources](http://wiki.seeedstudio.com/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/#resources)


## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started


### Play With Arduino

#### Hardware

**Materials required**



| Seeeduino V4.2 | Base Shield| Grove - I2C High Accuracy Temperature Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/img/thumbnail.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor%28MCP9808%29-p-3108.html" target="_blank">Get One Now</a>|



!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.



- **Step 1.** Connect the Grove - I2C High Accuracy Temperature Sensor to port **I^2^C** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.


![](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/img/connect.jpg)



!!!Note
        If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.


| Seeeduino     |  Grove-MCP9808          |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| SDA           | White                   |
| SCL           | Yellow                  |



#### Software

!!!Note
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


- **Step 1.** Download the [Grove MCP9808](https://github.com/Seeed-Studio/Grove_Temperature_sensor_MCP9808) Library from Github.

- **Step 2.** Refer to [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open example via the path: **File --> Examples --> Grove Temperature Sensor MCP9808 --> MCP9808_demo_with_limit**. 


![](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/img/demo_path.jpg)


!!!Tips
        As shown in the picture above, we provide two demos for you, **MCP9808_basic_demo** and **MCP9808_demo_with_limit**. The **MCP9808_basic_demo** only provide the temperature, the alert fuction is disable.
        And for the **MCP9808_demo_with_limit** demo, the alert function is enable. If you just want the temperature, the basic demo will be fine. If you want to use the alert function, you should choose the limit demo.


- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. if every thing goes well, you will get the result.

The result sould be like

```C++
sensor init!!
temperature value is: 29.31
temperature value is: 29.31
temperature value is: 29.31
temperature value is: 29.25
temperature value is: 29.25
temperature value is: 29.25
temperature value is: 29.25
temperature value is: 29.25
temperature value is: 29.19
temperature value is: 29.25
```

**Now, let's see how to use the <SPAN style="TEXT-DECORATION: overline">ALE</SPAN> Pad.**

The code in the demo **MCP9808_demo_with_limit**:

```c++
#include "Seeed_MCP9808.h"


MCP9808  sensor;

void setup()
{
    Serial.begin(115200);
    if(sensor.init())
    {
        Serial.println("sensor init failed!!");
    }
    //Set upper limit is 30°C
    sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,0x01e0);
    delay(10);
    //Set upper limit is 32°C
    sensor.set_critical_limit(SET_CRITICAL_LIMIT_ADDR,0x0200);
    delay(10);
    //Enable the alert bit.The alert bit outputs low when the temperature value beyond limit.Otherwise stays high.
    sensor.set_config(SET_CONFIG_ADDR,0x0008);

    Serial.println("sensor init!!");
}


void loop()
{
    float temp=0;
    //Get temperature ,a float-form value.
    sensor.get_temp(&temp);
    Serial.print("temperature value is: ");
    Serial.println(temp);
    delay(1000);
}

```

In addition to measuring temperature, this code also implements a function. When the temperature is lower than 30℃, the **<SPAN style="TEXT-DECORATION: overline">ALE</SPAN> Pad** output default high-3.3v.
When the temperature is higher than 30℃, the **<SPAN style="TEXT-DECORATION: overline">ALE</SPAN> Pad** will output low-0v.

So you may ask, what if i want to change the threshold temperature. OK, please come to the line 14:

```c++
sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,0x01e0);
```

We use this function to control the temperature, the first parameter is the UPPER_LIMIT register address and the second parameter <mark>0x01e0</mark> is the Hexadecimal temperature we set, as we mentioned above, it's 30℃. The <mark>0x01e0</mark> is a four bit Hexadecimal number, the last bit in the right represent the fractional part. We set it as 0, then the valid number is <mark>0x1e</mark>. **e** means 14 in decimal,
and the higer bit **1** means 16 in decimal. So <mark>0x1e</mark> equals 16+14=30.

We provide 3 functions in the file **Seeed_MCP9808.cpp**.  
```sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,u16);```
```sensor.set_lower_limit(SET_LOWER_LIMIT_ADDR,u16);```
```sensor.set_critical_limit(SET_CRITICAL_LIMIT_ADDR,u16);```

As we mentioned before, the default output of the **<SPAN style="TEXT-DECORATION: overline">ALE</SPAN> Pad** is high, and the output level goes low when the temperature meets certain conditions. You can use those 3 functions to set your own conditions.

**sensor.set_lower_limit(SET_LOWER_LIMIT_ADDR,u16)** is used to set the lower temperature limit, **u16** is the 4 bit Hexadecimal temperature we set. When the temperature is lower than the value we set, the output of the **<SPAN style="TEXT-DECORATION: overline">ALE</SPAN> Pad** will goes down.

**sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,u16)** is used to set the upper temperature limit, also **u16** is the 4 bit Hexadecimal temperature we set. When the temperature is higher than the value we set, the output of the **<SPAN style="TEXT-DECORATION: overline">ALE</SPAN> Pad** will goes down.

**sensor.set_critical_limit(SET_CRITICAL_LIMIT_ADDR,u16)** is used for the inturrupt mode, in this wiki we only show you how to work as a comparator. If you want to know more, please check the [datasheet](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/res/MCP9808_datasheet.pdf) .


Now we can set a condition zone by lower_limit and upper_limit, when the temperature comes to the condition zone, the output will goes low.

![](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/img/Zone.jpg)

For example, if you want the **<SPAN style="TEXT-DECORATION: overline">ALE</SPAN> Pad** output high between 28℃ and 30℃, and output low when the tempareture is higer than 30℃ or lower than 28℃.
The code should be like:

```c++

sensor.set_lower_limit(SET_LOWER_LIMIT_ADDR,0x01c0);
delay(10);
sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,0x01e0);
delay(10);

```

!!!Attention
        Please make sure the **upper_limit** is higer than the **lower_limit**, otherwise it will not output properly. And please make sure the **critical_limit** is higer than the **upper_limit**. A certain delay() is required to ensure that the registers are written correctly.


### Play With Raspberry Pi 

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove - I2C High Accuracy Temperature Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/img/thumbnail.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor%28MCP9808%29-p-3108.html)|

- **Step 2**. Plug the Grove Base Hat into Raspberry.
- **Step 3**. Connect the Grove - I2C High Accuracy Temperature Sensor to I2C port of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.


![](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/img/MCP9808_Hat.jpg)


#### Software

- **Step 1**. Follow [Setting Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.
- **Step 2**. Download the source file by cloning the grove.py library. 

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Step 3**. Excute below commands to run the code.

```
cd grove.py/grove
python grove_high_accuracy_temperature.py 

```

Following is the grove_high_accuracy_temperature.py code.

```python

import sys
import time
from grove.factory import Factory
from grove.temperature import Temper

def main():
    print("Insert Grove - I2C-High-Accuracy-Temperature")
    print("  to Grove-Base-Hat any I2C slot")

    sensor = Factory.getTemper("MCP9808-I2C")
    sensor.resolution(Temper.RES_1_16_CELSIUS)

    print('Detecting temperature...')
    while True:
        print('{} Celsius'.format(sensor.temperature))
        time.sleep(1)


if __name__ == '__main__':
    main()

```

!!!success
    If everything goes well, you will be able to see the following result

```python

pi@raspberrypi:~/grove.py/grove $ python grove_high_accuracy_temperature.py 
Insert Grove - I2C-High-Accuracy-Temperature
  to Grove-Base-Hat any I2C slot
Detecting temperature...
24.5 Celsius
24.5 Celsius
24.375 Celsius
^CTraceback (most recent call last):
  File "grove_high_accuracy_temperature.py", line 54, in <module>
    main()
  File "grove_high_accuracy_temperature.py", line 50, in main
    time.sleep(1)
KeyboardInterrupt


```


You can quit this program by simply press ++ctrl+c++.


## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/res/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>



## Resources

- **[Zip]** [Grove - I2C High Accuracy Temperature Sensor(MCP9808) Eagle files](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/res/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808.zip)
- **[Zip]** [Seeed MCP9808 Library](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/res/Grove_Temperature_sensor_MCP9808-master.zip)
- **[PDF]** [Datasheet of MCP9808](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/res/MCP9808_datasheet.pdf)
- **[PDF]** [Datasheet of 2N7002A](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/res/2N7002A_datasheet.pdf)
- **[PDF]** [AN10441](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/res/AN10441.pdf)


## Project

This is the introduction Video of this product, simple demos, you can have a try.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HQr6jSmfJs0?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>



## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>