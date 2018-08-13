---
title: Grove - I2C High Accuracy Temperature Sensor(MCP9808)
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
alert. We use a separate pin to output the alarm signal, you will find it so convenient to use this signal as an interruption for you control board. 

All in all, we believe this sensor will be a new star for temperature control.


<p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor%28MCP9808%29-p-3108.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


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

We offer 3 sets of pads on the back of the PCB. The default AD0~AD2 are all connected to the Low level pads, you can cut some those pads and solder them to the other side(High level).
The I^2^C address is a 7bits address <mark>0011A<sub>0</sub>A<sub>1</sub>A<sub>2</sub></mark>. The defaut setting is A<sub>0</sub>=0/A<sub>1</sub>=0/A<sub>2</sub>=0, so the default I^2^C
address is <mark>0011000</mark>. Normaly the address should be 8bits, so we need to add one bit 0 to the MSB(Most Significant Bit), then we get <mark>0001,1000</mark>. This is a binary address,
we often use the hexadecimal address in the code, so let's convert the binary address to a hexadecimal address, here we get <mark>0x18</mark>. By the same token, if we solder all the pads to the
 high level, we will get <mark>0001,1111</mark>, which is <mark>0x1F</mark>. So the I^2^C address range from 0x18 to 0x1F, among them, you can choose whatever you want, just make sure you will change
the I^2^C address in the file **Seeed_MCP9808.h** in the **Grove_Temperature_sensor_MCP9808-master** library.


```c++
#define DEFAULT_IIC_ADDR  0X18
```


**<SPAN style="TEXT-DECORATION: overline">ALE</SPAN> Pad**

You can see the <SPAN style="TEXT-DECORATION: overline">ALE</SPAN> Pad on the back of the PCB. The alert signal output from this pad can be used as an external interrupt signal for other controllers.
The default output is high, in this board it should be 3.3V. When the condition is met, the output voltage becomes low(0V). You can set the condition when you finish this wiki 😄




### Schematic

**I^2^C Address**


![](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/img/schamitc_a.jpg)


Look at this part, and you will understand the I^2^C address more easily.


**MCP9808**

![](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/img/schamitc_c.jpg)

As you can see, the <SPAN style="TEXT-DECORATION: overline">ALE</SPAN> pad is connected to the 3.3V through a pull-up resistor.


**Bi-directional level shifter circuit**

![](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/img/schamitc.jpg)

This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I<sup>2</sup> bus of this sensor use 3.3V, if the I<sup>2</sup>C bus of the Arduino use 5V, this circuit will be needed. In the schematic above, **Q6** and **Q5** are N-Channel MOSFET [2N7002A](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/res/2N7002A_datasheet.pdf), which act as a bidirectional switch. In order to better understand this part, you need to know somthing about the [MOSFET](https://en.wikipedia.org/wiki/MOSFET). 

![](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/img/MOSFET.jpg)

There are three electrode in the MOSFET, **Gate(V<sub>G</sub>)**, **Soure(V<sub>S</sub>)** and **Drain(V<sub>D</sub>)**. The MOSFET use the voltage between Gate and Source(**V<sub>GS</sub>**) to determine the conduction between **Drain** and **Source**.
We call the threshold voltage of the device **V<sub>th</sub>**, for the 2N7002A, the **V<sub>th</sub>**  should be 1.2v-2.0v.

In short:

- When the **V<sub>GS</sub>** < **V<sub>th</sub>**, the MOSFET is turned off,  there is no conduction between drain and source.
- When the **V<sub>GS</sub>** > **V<sub>th</sub>**, the MOSFET is turned on, and a channel has been created which allows current between the drain and the source. 


What's more, you should notice that there is a diode on between the **Soure** and **Drain**. This diode will be mentioned later.


Now let's see how this circuit works:

![](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/img/schematic_d.jpg)


We call the left part of this schematic **Part_3V3** and the right part **Part_5V**(Vcc=5V). The **SDA** bus and the **SCL** bus are the same, we only analysis **SDA** bus here.There are three conversion states:


① If there are no signals from the SDA bus. Both <mark>SDA_3V3</mark> and <mark>SDA</mark> are pulled high by the pull-up resistor. We set this status as default.


For the **Part_3V3**: 

$V_S ≈ 3.3v, V_G = 3.3v$

$V_{GS} = V_G - V_S ≈ 0v$

$V_{GS} < V_{th}$

The MOSFET is turned off, the two parts circuit do not affect each other. 

For the **Part_5V**:

the V<sub>D</sub> is pulled up to 5V by the pull-up resistor, V<sub>D</sub> ≈ 5v.
So both <mark>SDA_3V3</mark> and <mark>SDA</mark> wire are high voltage, but the level is different.All in all, in this status:

<font color =#EE9A00>
$V_S = 3.3v,   V_G = 5v$

Voltage on SDA_3V3 wire is High, voltage on SDA wire is High.
</font>


② A 3.3v device in the **Part_3V3** pulls the bus line to a low level, which means the <mark>SDA_3V3(V<sub>S</sub>)</mark> line is low.


$V_S ≈ 0v, V_G = 3.3v$

$V_{GS} = V_G - V_S ≈ 3.3v$

$V_{GS} > V_{th}$

The MOSFET is turned on, the drain and the source are connected, so both V<sub>S</sub> and V<sub>D</sub> show be low. In this status, it should be:

<font color =#EE9A00>
$V_S = V_D ≈ 0v$

Voltage on SDA_3V3 wire is LOW, voltage on SDA wire is LOW.
</font>


③ A 5v device in the **Part_5V** pulls the bus line to a low level, which means the <mark>SDA(V<sub>D</sub>)</mark> line is low. As the default,now the V<sub>S</sub> is 3.3V, and the V<sub>D</sub> is low.So:

$V_S = 3.3v, V_D ≈ 0v$

$V_{SD} = V_S - V_D ≈ 3.3v$


Beacuase the V<sub>SD</sub> is 3.3v, the diode between the **Soure** and **Drain** will turn on(Normaly when the  V<sub>SD</sub> > 0.7v, the diode will turn on), which makes a conductive path for **Soure** and **Drain**. So the V<sub>S</sub> will decrease, V<sub>GS</sub> = V<sub>G</sub> - V<sub>S</sub> will rise. Once the V<sub>GS</sub> > V<sub>th</sub>, the MOSFET truns on, the drain and the source are connected, so both V<sub>S</sub> and V<sub>D</sub> show be low. In this status:

<font color =#EE9A00>
$V_S ≈ 0v, V_D ≈ 0v$

Voltage on SDA wire is LOW, voltage on SDA_3V3 wire is LOW.
</font>


OK, let's move on.


!!!Tip
        In this section we only show you part of the schematic, for the full document please refer to the [Resources](#Resources)


## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's hardware or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



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

Now, let's see how to use the alert pad.

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



## Resources

- **[Zip]** [Grove - I2C High Accuracy Temperature Sensor(MCP9808)](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/res/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808.zip)
- **[Zip]** [Seeed MCP9808 Library](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/res/Grove_Temperature_sensor_MCP9808-master.zip)
- **[PDF]** [Datasheet of MCP9808](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/res/MCP9808_datasheet.pdf)
- **[PDF]** [Datasheet of 2N7002A](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/res/2N7002A_datasheet.pdf)


## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).