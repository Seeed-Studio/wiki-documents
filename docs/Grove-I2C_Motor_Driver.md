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

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/main.JPG)
    


The Grove - I2C High Accuracy Temperature Sensor(MCP9808) is a high accuracy digital module based on MCP9808. Unlike other sensors, you can choose 
the measurement resolution of this sensor. In addition to high-precision temperature measurements, we also offer programmable temperature 
alert. We use a separate pin to output the alarm signal, you will find it so convenient to use this signal as an interruption to control other board. 

All in all, we believe this sensor will be a new star for temperature control.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor%28MCP9808%29-p-3108.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


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

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/pin_map_front.jpg)
![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/pin_map_back.jpg)

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


![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc_a.jpg)


As we mentioned above, we use those three sets of pads to select the I^2^C address, if you want to change the default adress, you can cut of the wire and re-solder it.


**MCP9808**

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc_c.jpg)

As you can see, the <SPAN style="TEXT-DECORATION: overline">ALE</SPAN> pad is connected to the 3.3V through a pull-up resistor.


**Bi-directional level shifter circuit**

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc.jpg)

This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I<sup>2</sup>C bus of this sensor use 3.3V, if the I<sup>2</sup>C bus of the Arduino use 5V, this circuit will be needed. In the schematic above, **Q6** and **Q5** are N-Channel MOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), which act as a bidirectional switch. In order to better understand this part, you can refer to the [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)


!!!Tip
        In this section we only show you part of the schematic, for the full document please refer to the [Resources](http://wiki.seeedstudio.com/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/#resources)


## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started


### Play With Arduino

#### Hardware

**Materials required**



| Seeeduino V4.2 | Base Shield| Grove - I2C High Accuracy Temperature Sensor |
|--------------|-------------|-----------------|
---
name: Grove - I2C Motor Driver (TB6612FNG)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 108020103
tags:
---

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/main.jpg)

The Grove - I2C Motor Driver (TB6612FNG) can drive two DC motors up to 12V/1.2A or drive one stepper motor up to 12V/1.2A. With the on-board MCU, it can work with Arduino easily via the Grove I2C interface.

This diver board is based on TB6612FNG, which is a driver IC for DC motor and stepper motor with output transistor in LD MOS structure with low ON-resistor. Two input signals, IN1 and IN2, can choose one of four modes such as CW, CCW, short brake, and stop mode.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - I2C Motor Driver (TB6612FNG) | Initial                                                                                               | Sep 2018      |

## Features

- On board MCU
- CW/CCW/short brake/stop function modes
- Built-in thermal shutdown circuit and low voltage detecting circuit
- Standby (Power save) system


## Specification

|Item|Value|
|---|---|
|MCU Operating Voltage|3.3V / 5V|
|Motor Supply Voltage|2.5 ~ 13.5 (5V Typical, 15V Max.)|
|Output Current|1.2 A(ave)/3.2 A (peak)|
|Switching Frequency|100kHz|
|Logic Interface|I2C|
|I2C Address|0x14 (default)|
|I2C Address Range|0x01 ~ 0x7f (Configurable)|
|Size|L: 60mm W: 40mm H: 12mm| 
|Weight|13g|
|Package size|L: 140mm W: 90mm H: 12mm|
|Gross Weight|20g|


## Typical applications

- DC motor control
- Stepper motor control


## Hardware Overview

### Pin Out

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out.jpg)

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out_back.jpg)


### Hardware Detail

___
**I2C Interface**

This board uses the I2C interface to allow the on-board MCU to communicate with the host computer.
>GND: connect this module to the system GND  
>VCC: you can use 5V or 3.3V for this module  
>SDA: I2C serial data  
>SCL: I2C serial clock


![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/I2C.jpg)

___
**Power In**

Provide DC power to the motors, input range 2.5V ~ 13.5V.
>GND: Connect to the system GND, plug the power "-"  
>VM: Plug the power "+", supply power for the motor.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise1.jpg)

___
**DC Motor Output**

This board has two channel DC Motor Output, it can output 12V/1.2A per channel. You can use this driver board control two DC motors at the same time.
>A1: Channel A output 1  
>A2: Channel A output 2  
>B1: Channel B output 1  
>B2: Channel B output 2

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

___
**Steperp Motor Output**

You can use this board to control the 4-wire stepper motor as well, it can output up to 12V/1.2A.
>OUT1: Connected to one input of the stepper motor coil 1.  
>OUT2: Connected to the other input of the stepper motor coil 1.  
>OUT3: Connected to one input of the stepper motor coil 2.  
>OUT4: Connected to the other input of the stepper motor coil 2. 

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

!!!Note
        Actually the DC port and the stepper port are physically connected together. The connection diagram is as follows:


|DC Port|Stepper Port|
|---|---|
|A1|OUT1|
|A2|OUT2|
|B1|OUT3|
|B2|OUT4|



## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started


### Play With Arduino


#### Hardware

**Materials required**

*DC Motor Demo*

| Seeeduino V4.2 | Base Shield | Grove - I2C Motor Driver (TB6612FNG) |DC Motor|
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/DC_Motor_01.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank">Get One Now</a>|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.

    **3** You also need prepare at least 2 jumpers, in case you do not have, you can click [here](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html) to buy.


- **Step 1.** Plu the DC motor into the **DC Motor Output** port of the driver board, plug the external DC power into the **Power In** port.

- **Step 2.** Connect the Grove - I2C Motor Driver (TB6612FNG) to port **I^2^C** of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

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

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/main.JPG)
    


The Grove - I2C High Accuracy Temperature Sensor(MCP9808) is a high accuracy digital module based on MCP9808. Unlike other sensors, you can choose 
the measurement resolution of this sensor. In addition to high-precision temperature measurements, we also offer programmable temperature 
alert. We use a separate pin to output the alarm signal, you will find it so convenient to use this signal as an interruption to control other board. 

All in all, we believe this sensor will be a new star for temperature control.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor%28MCP9808%29-p-3108.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


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

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/pin_map_front.jpg)
![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/pin_map_back.jpg)

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


![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc_a.jpg)


As we mentioned above, we use those three sets of pads to select the I^2^C address, if you want to change the default adress, you can cut of the wire and re-solder it.


**MCP9808**

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc_c.jpg)

As you can see, the <SPAN style="TEXT-DECORATION: overline">ALE</SPAN> pad is connected to the 3.3V through a pull-up resistor.


**Bi-directional level shifter circuit**

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc.jpg)

This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I<sup>2</sup>C bus of this sensor use 3.3V, if the I<sup>2</sup>C bus of the Arduino use 5V, this circuit will be needed. In the schematic above, **Q6** and **Q5** are N-Channel MOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), which act as a bidirectional switch. In order to better understand this part, you can refer to the [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)


!!!Tip
        In this section we only show you part of the schematic, for the full document please refer to the [Resources](http://wiki.seeedstudio.com/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/#resources)


## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started


### Play With Arduino

#### Hardware

**Materials required**



| Seeeduino V4.2 | Base Shield| Grove - I2C High Accuracy Temperature Sensor |
|--------------|-------------|-----------------|
---
name: Grove - I2C Motor Driver (TB6612FNG)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 108020103
tags:
---

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/main.jpg)

The Grove - I2C Motor Driver (TB6612FNG) can drive two DC motors up to 12V/1.2A or drive one stepper motor up to 12V/1.2A. With the on-board MCU, it can work with Arduino easily via the Grove I2C interface.

This diver board is based on TB6612FNG, which is a driver IC for DC motor and stepper motor with output transistor in LD MOS structure with low ON-resistor. Two input signals, IN1 and IN2, can choose one of four modes such as CW, CCW, short brake, and stop mode.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - I2C Motor Driver (TB6612FNG) | Initial                                                                                               | Sep 2018      |

## Features

- On board MCU
- CW/CCW/short brake/stop function modes
- Built-in thermal shutdown circuit and low voltage detecting circuit
- Standby (Power save) system


## Specification

|Item|Value|
|---|---|
|MCU Operating Voltage|3.3V / 5V|
|Motor Supply Voltage|2.5 ~ 13.5 (5V Typical, 15V Max.)|
|Output Current|1.2 A(ave)/3.2 A (peak)|
|Switching Frequency|100kHz|
|Logic Interface|I2C|
|I2C Address|0x14 (default)|
|I2C Address Range|0x01 ~ 0x7f (Configurable)|
|Size|L: 60mm W: 40mm H: 12mm| 
|Weight|13g|
|Package size|L: 140mm W: 90mm H: 12mm|
|Gross Weight|20g|


## Typical applications

- DC motor control
- Stepper motor control


## Hardware Overview

### Pin Out

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out.jpg)

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out_back.jpg)


### Hardware Detail

___
**I2C Interface**

This board uses the I2C interface to allow the on-board MCU to communicate with the host computer.
>GND: connect this module to the system GND  
>VCC: you can use 5V or 3.3V for this module  
>SDA: I2C serial data  
>SCL: I2C serial clock


![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/I2C.jpg)

___
**Power In**

Provide DC power to the motors, input range 2.5V ~ 13.5V.
>GND: Connect to the system GND, plug the power "-"  
>VM: Plug the power "+", supply power for the motor.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise1.jpg)

___
**DC Motor Output**

This board has two channel DC Motor Output, it can output 12V/1.2A per channel. You can use this driver board control two DC motors at the same time.
>A1: Channel A output 1  
>A2: Channel A output 2  
>B1: Channel B output 1  
>B2: Channel B output 2

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

___
**Steperp Motor Output**

You can use this board to control the 4-wire stepper motor as well, it can output up to 12V/1.2A.
>OUT1: Connected to one input of the stepper motor coil 1.  
>OUT2: Connected to the other input of the stepper motor coil 1.  
>OUT3: Connected to one input of the stepper motor coil 2.  
>OUT4: Connected to the other input of the stepper motor coil 2. 

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

!!!Note
        Actually the DC port and the stepper port are physically connected together. The connection diagram is as follows:


|DC Port|Stepper Port|
|---|---|
|A1|OUT1|
|A2|OUT2|
|B1|OUT3|
|B2|OUT4|



## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started


### Play With Arduino


#### Hardware

**Materials required**

*DC Motor Demo*

| Seeeduino V4.2 | Base Shield | Grove - I2C Motor Driver (TB6612FNG) |DC Motor|
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/DC_Motor_01.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank">Get One Now</a>|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.

    **3** You also need prepare at least 2 jumpers, in case you do not have, you can click [here](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html) to buy.


- **Step 1.** Plu the DC motor into the **DC Motor Output** port of the driver board, plug the external DC power into the **Power In** port.

- **Step 2.** Connect the Grove - I2C Motor Driver (TB6612FNG) to port **I^2^C** of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

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

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/main.JPG)
    


The Grove - I2C High Accuracy Temperature Sensor(MCP9808) is a high accuracy digital module based on MCP9808. Unlike other sensors, you can choose 
the measurement resolution of this sensor. In addition to high-precision temperature measurements, we also offer programmable temperature 
alert. We use a separate pin to output the alarm signal, you will find it so convenient to use this signal as an interruption to control other board. 

All in all, we believe this sensor will be a new star for temperature control.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor%28MCP9808%29-p-3108.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


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

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/pin_map_front.jpg)
![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/pin_map_back.jpg)

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


![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc_a.jpg)


As we mentioned above, we use those three sets of pads to select the I^2^C address, if you want to change the default adress, you can cut of the wire and re-solder it.


**MCP9808**

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc_c.jpg)

As you can see, the <SPAN style="TEXT-DECORATION: overline">ALE</SPAN> pad is connected to the 3.3V through a pull-up resistor.


**Bi-directional level shifter circuit**

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc.jpg)

This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I<sup>2</sup>C bus of this sensor use 3.3V, if the I<sup>2</sup>C bus of the Arduino use 5V, this circuit will be needed. In the schematic above, **Q6** and **Q5** are N-Channel MOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), which act as a bidirectional switch. In order to better understand this part, you can refer to the [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)


!!!Tip
        In this section we only show you part of the schematic, for the full document please refer to the [Resources](http://wiki.seeedstudio.com/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/#resources)


## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started


### Play With Arduino

#### Hardware

**Materials required**



| Seeeduino V4.2 | Base Shield| Grove - I2C High Accuracy Temperature Sensor |
|--------------|-------------|-----------------|
---
name: Grove - I2C Motor Driver (TB6612FNG)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 108020103
tags:
---

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/main.jpg)

The Grove - I2C Motor Driver (TB6612FNG) can drive two DC motors up to 12V/1.2A or drive one stepper motor up to 12V/1.2A. With the on-board MCU, it can work with Arduino easily via the Grove I2C interface.

This diver board is based on TB6612FNG, which is a driver IC for DC motor and stepper motor with output transistor in LD MOS structure with low ON-resistor. Two input signals, IN1 and IN2, can choose one of four modes such as CW, CCW, short brake, and stop mode.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - I2C Motor Driver (TB6612FNG) | Initial                                                                                               | Sep 2018      |

## Features

- On board MCU
- CW/CCW/short brake/stop function modes
- Built-in thermal shutdown circuit and low voltage detecting circuit
- Standby (Power save) system


## Specification

|Item|Value|
|---|---|
|MCU Operating Voltage|3.3V / 5V|
|Motor Supply Voltage|2.5 ~ 13.5 (5V Typical, 15V Max.)|
|Output Current|1.2 A(ave)/3.2 A (peak)|
|Switching Frequency|100kHz|
|Logic Interface|I2C|
|I2C Address|0x14 (default)|
|I2C Address Range|0x01 ~ 0x7f (Configurable)|
|Size|L: 60mm W: 40mm H: 12mm| 
|Weight|13g|
|Package size|L: 140mm W: 90mm H: 12mm|
|Gross Weight|20g|


## Typical applications

- DC motor control
- Stepper motor control


## Hardware Overview

### Pin Out

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out.jpg)

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out_back.jpg)


### Hardware Detail

___
**I2C Interface**

This board uses the I2C interface to allow the on-board MCU to communicate with the host computer.
>GND: connect this module to the system GND  
>VCC: you can use 5V or 3.3V for this module  
>SDA: I2C serial data  
>SCL: I2C serial clock


![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/I2C.jpg)

___
**Power In**

Provide DC power to the motors, input range 2.5V ~ 13.5V.
>GND: Connect to the system GND, plug the power "-"  
>VM: Plug the power "+", supply power for the motor.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise1.jpg)

___
**DC Motor Output**

This board has two channel DC Motor Output, it can output 12V/1.2A per channel. You can use this driver board control two DC motors at the same time.
>A1: Channel A output 1  
>A2: Channel A output 2  
>B1: Channel B output 1  
>B2: Channel B output 2

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

___
**Steperp Motor Output**

You can use this board to control the 4-wire stepper motor as well, it can output up to 12V/1.2A.
>OUT1: Connected to one input of the stepper motor coil 1.  
>OUT2: Connected to the other input of the stepper motor coil 1.  
>OUT3: Connected to one input of the stepper motor coil 2.  
>OUT4: Connected to the other input of the stepper motor coil 2. 

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

!!!Note
        Actually the DC port and the stepper port are physically connected together. The connection diagram is as follows:


|DC Port|Stepper Port|
|---|---|
|A1|OUT1|
|A2|OUT2|
|B1|OUT3|
|B2|OUT4|



## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started


### Play With Arduino


#### Hardware

**Materials required**

*DC Motor Demo*

| Seeeduino V4.2 | Base Shield | Grove - I2C Motor Driver (TB6612FNG) |DC Motor|
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/DC_Motor_01.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank">Get One Now</a>|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.

    **3** You also need prepare at least 2 jumpers, in case you do not have, you can click [here](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html) to buy.


- **Step 1.** Plu the DC motor into the **DC Motor Output** port of the driver board, plug the external DC power into the **Power In** port.

- **Step 2.** Connect the Grove - I2C Motor Driver (TB6612FNG) to port **I^2^C** of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

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

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/main.JPG)
    


The Grove - I2C High Accuracy Temperature Sensor(MCP9808) is a high accuracy digital module based on MCP9808. Unlike other sensors, you can choose 
the measurement resolution of this sensor. In addition to high-precision temperature measurements, we also offer programmable temperature 
alert. We use a separate pin to output the alarm signal, you will find it so convenient to use this signal as an interruption to control other board. 

All in all, we believe this sensor will be a new star for temperature control.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor%28MCP9808%29-p-3108.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


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

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/pin_map_front.jpg)
![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/pin_map_back.jpg)

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


![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc_a.jpg)


As we mentioned above, we use those three sets of pads to select the I^2^C address, if you want to change the default adress, you can cut of the wire and re-solder it.


**MCP9808**

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc_c.jpg)

As you can see, the <SPAN style="TEXT-DECORATION: overline">ALE</SPAN> pad is connected to the 3.3V through a pull-up resistor.


**Bi-directional level shifter circuit**

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc.jpg)

This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I<sup>2</sup>C bus of this sensor use 3.3V, if the I<sup>2</sup>C bus of the Arduino use 5V, this circuit will be needed. In the schematic above, **Q6** and **Q5** are N-Channel MOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), which act as a bidirectional switch. In order to better understand this part, you can refer to the [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)


!!!Tip
        In this section we only show you part of the schematic, for the full document please refer to the [Resources](http://wiki.seeedstudio.com/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/#resources)


## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started


### Play With Arduino

#### Hardware

**Materials required**



| Seeeduino V4.2 | Base Shield| Grove - I2C High Accuracy Temperature Sensor |
|--------------|-------------|-----------------|
---
name: Grove - I2C Motor Driver (TB6612FNG)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 108020103
tags:
---

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/main.jpg)

The Grove - I2C Motor Driver (TB6612FNG) can drive two DC motors up to 12V/1.2A or drive one stepper motor up to 12V/1.2A. With the on-board MCU, it can work with Arduino easily via the Grove I2C interface.

This diver board is based on TB6612FNG, which is a driver IC for DC motor and stepper motor with output transistor in LD MOS structure with low ON-resistor. Two input signals, IN1 and IN2, can choose one of four modes such as CW, CCW, short brake, and stop mode.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - I2C Motor Driver (TB6612FNG) | Initial                                                                                               | Sep 2018      |

## Features

- On board MCU
- CW/CCW/short brake/stop function modes
- Built-in thermal shutdown circuit and low voltage detecting circuit
- Standby (Power save) system


## Specification

|Item|Value|
|---|---|
|MCU Operating Voltage|3.3V / 5V|
|Motor Supply Voltage|2.5 ~ 13.5 (5V Typical, 15V Max.)|
|Output Current|1.2 A(ave)/3.2 A (peak)|
|Switching Frequency|100kHz|
|Logic Interface|I2C|
|I2C Address|0x14 (default)|
|I2C Address Range|0x01 ~ 0x7f (Configurable)|
|Size|L: 60mm W: 40mm H: 12mm| 
|Weight|13g|
|Package size|L: 140mm W: 90mm H: 12mm|
|Gross Weight|20g|


## Typical applications

- DC motor control
- Stepper motor control


## Hardware Overview

### Pin Out

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out.jpg)

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out_back.jpg)


### Hardware Detail

___
**I2C Interface**

This board uses the I2C interface to allow the on-board MCU to communicate with the host computer.
>GND: connect this module to the system GND  
>VCC: you can use 5V or 3.3V for this module  
>SDA: I2C serial data  
>SCL: I2C serial clock


![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/I2C.jpg)

___
**Power In**

Provide DC power to the motors, input range 2.5V ~ 13.5V.
>GND: Connect to the system GND, plug the power "-"  
>VM: Plug the power "+", supply power for the motor.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise1.jpg)

___
**DC Motor Output**

This board has two channel DC Motor Output, it can output 12V/1.2A per channel. You can use this driver board control two DC motors at the same time.
>A1: Channel A output 1  
>A2: Channel A output 2  
>B1: Channel B output 1  
>B2: Channel B output 2

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

___
**Steperp Motor Output**

You can use this board to control the 4-wire stepper motor as well, it can output up to 12V/1.2A.
>OUT1: Connected to one input of the stepper motor coil 1.  
>OUT2: Connected to the other input of the stepper motor coil 1.  
>OUT3: Connected to one input of the stepper motor coil 2.  
>OUT4: Connected to the other input of the stepper motor coil 2. 

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

!!!Note
        Actually the DC port and the stepper port are physically connected together. The connection diagram is as follows:


|DC Port|Stepper Port|
|---|---|
|A1|OUT1|
|A2|OUT2|
|B1|OUT3|
|B2|OUT4|



## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started


### Play With Arduino


#### Hardware

**Materials required**

*DC Motor Demo*

| Seeeduino V4.2 | Base Shield | Grove - I2C Motor Driver (TB6612FNG) |DC Motor|
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/DC_Motor_01.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank">Get One Now</a>|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.

    **3** You also need prepare at least 2 jumpers, in case you do not have, you can click [here](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html) to buy.


- **Step 1.** Plu the DC motor into the **DC Motor Output** port of the driver board, plug the external DC power into the **Power In** port.

- **Step 2.** Connect the Grove - I2C Motor Driver (TB6612FNG) to port **I^2^C** of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

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

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/main.JPG)
    


The Grove - I2C High Accuracy Temperature Sensor(MCP9808) is a high accuracy digital module based on MCP9808. Unlike other sensors, you can choose 
the measurement resolution of this sensor. In addition to high-precision temperature measurements, we also offer programmable temperature 
alert. We use a separate pin to output the alarm signal, you will find it so convenient to use this signal as an interruption to control other board. 

All in all, we believe this sensor will be a new star for temperature control.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor%28MCP9808%29-p-3108.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


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

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/pin_map_front.jpg)
![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/pin_map_back.jpg)

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


![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc_a.jpg)


As we mentioned above, we use those three sets of pads to select the I^2^C address, if you want to change the default adress, you can cut of the wire and re-solder it.


**MCP9808**

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc_c.jpg)

As you can see, the <SPAN style="TEXT-DECORATION: overline">ALE</SPAN> pad is connected to the 3.3V through a pull-up resistor.


**Bi-directional level shifter circuit**

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc.jpg)

This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I<sup>2</sup>C bus of this sensor use 3.3V, if the I<sup>2</sup>C bus of the Arduino use 5V, this circuit will be needed. In the schematic above, **Q6** and **Q5** are N-Channel MOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), which act as a bidirectional switch. In order to better understand this part, you can refer to the [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)


!!!Tip
        In this section we only show you part of the schematic, for the full document please refer to the [Resources](http://wiki.seeedstudio.com/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/#resources)


## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started


### Play With Arduino

#### Hardware

**Materials required**



| Seeeduino V4.2 | Base Shield| Grove - I2C High Accuracy Temperature Sensor |
|--------------|-------------|-----------------|
---
name: Grove - I2C Motor Driver (TB6612FNG)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 108020103
tags:
---

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/main.jpg)

The Grove - I2C Motor Driver (TB6612FNG) can drive two DC motors up to 12V/1.2A or drive one stepper motor up to 12V/1.2A. With the on-board MCU, it can work with Arduino easily via the Grove I2C interface.

This diver board is based on TB6612FNG, which is a driver IC for DC motor and stepper motor with output transistor in LD MOS structure with low ON-resistor. Two input signals, IN1 and IN2, can choose one of four modes such as CW, CCW, short brake, and stop mode.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - I2C Motor Driver (TB6612FNG) | Initial                                                                                               | Sep 2018      |

## Features

- On board MCU
- CW/CCW/short brake/stop function modes
- Built-in thermal shutdown circuit and low voltage detecting circuit
- Standby (Power save) system


## Specification

|Item|Value|
|---|---|
|MCU Operating Voltage|3.3V / 5V|
|Motor Supply Voltage|2.5 ~ 13.5 (5V Typical, 15V Max.)|
|Output Current|1.2 A(ave)/3.2 A (peak)|
|Switching Frequency|100kHz|
|Logic Interface|I2C|
|I2C Address|0x14 (default)|
|I2C Address Range|0x01 ~ 0x7f (Configurable)|
|Size|L: 60mm W: 40mm H: 12mm| 
|Weight|13g|
|Package size|L: 140mm W: 90mm H: 12mm|
|Gross Weight|20g|


## Typical applications

- DC motor control
- Stepper motor control


## Hardware Overview

### Pin Out

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out.jpg)

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out_back.jpg)


### Hardware Detail

___
**I2C Interface**

This board uses the I2C interface to allow the on-board MCU to communicate with the host computer.
>GND: connect this module to the system GND  
>VCC: you can use 5V or 3.3V for this module  
>SDA: I2C serial data  
>SCL: I2C serial clock


![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/I2C.jpg)

___
**Power In**

Provide DC power to the motors, input range 2.5V ~ 13.5V.
>GND: Connect to the system GND, plug the power "-"  
>VM: Plug the power "+", supply power for the motor.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise1.jpg)

___
**DC Motor Output**

This board has two channel DC Motor Output, it can output 12V/1.2A per channel. You can use this driver board control two DC motors at the same time.
>A1: Channel A output 1  
>A2: Channel A output 2  
>B1: Channel B output 1  
>B2: Channel B output 2

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

___
**Steperp Motor Output**

You can use this board to control the 4-wire stepper motor as well, it can output up to 12V/1.2A.
>OUT1: Connected to one input of the stepper motor coil 1.  
>OUT2: Connected to the other input of the stepper motor coil 1.  
>OUT3: Connected to one input of the stepper motor coil 2.  
>OUT4: Connected to the other input of the stepper motor coil 2. 

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

!!!Note
        Actually the DC port and the stepper port are physically connected together. The connection diagram is as follows:


|DC Port|Stepper Port|
|---|---|
|A1|OUT1|
|A2|OUT2|
|B1|OUT3|
|B2|OUT4|



## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started


### Play With Arduino


#### Hardware

**Materials required**

*DC Motor Demo*

| Seeeduino V4.2 | Base Shield | Grove - I2C Motor Driver (TB6612FNG) |DC Motor|
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/DC_Motor_01.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank">Get One Now</a>|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.

    **3** You also need prepare at least 2 jumpers, in case you do not have, you can click [here](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html) to buy.


- **Step 1.** Plu the DC motor into the **DC Motor Output** port of the driver board, plug the external DC power into the **Power In** port.

- **Step 2.** Connect the Grove - I2C Motor Driver (TB6612FNG) to port **I^2^C** of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

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

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/main.JPG)
    


The Grove - I2C High Accuracy Temperature Sensor(MCP9808) is a high accuracy digital module based on MCP9808. Unlike other sensors, you can choose 
the measurement resolution of this sensor. In addition to high-precision temperature measurements, we also offer programmable temperature 
alert. We use a separate pin to output the alarm signal, you will find it so convenient to use this signal as an interruption to control other board. 

All in all, we believe this sensor will be a new star for temperature control.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor%28MCP9808%29-p-3108.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


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

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/pin_map_front.jpg)
![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/pin_map_back.jpg)

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


![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc_a.jpg)


As we mentioned above, we use those three sets of pads to select the I^2^C address, if you want to change the default adress, you can cut of the wire and re-solder it.


**MCP9808**

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc_c.jpg)

As you can see, the <SPAN style="TEXT-DECORATION: overline">ALE</SPAN> pad is connected to the 3.3V through a pull-up resistor.


**Bi-directional level shifter circuit**

![](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc.jpg)

This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I<sup>2</sup>C bus of this sensor use 3.3V, if the I<sup>2</sup>C bus of the Arduino use 5V, this circuit will be needed. In the schematic above, **Q6** and **Q5** are N-Channel MOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), which act as a bidirectional switch. In order to better understand this part, you can refer to the [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)


!!!Tip
        In this section we only show you part of the schematic, for the full document please refer to the [Resources](http://wiki.seeedstudio.com/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/#resources)


## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started


### Play With Arduino

#### Hardware

**Materials required**



| Seeeduino V4.2 | Base Shield| Grove - I2C High Accuracy Temperature Sensor |
|--------------|-------------|-----------------|
---
name: Grove - I2C Motor Driver (TB6612FNG)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 108020103
tags:
---

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/main.jpg)

The Grove - I2C Motor Driver (TB6612FNG) can drive two DC motors up to 12V/1.2A or drive one stepper motor up to 12V/1.2A. With the on-board MCU, it can work with Arduino easily via the Grove I2C interface.

This diver board is based on TB6612FNG, which is a driver IC for DC motor and stepper motor with output transistor in LD MOS structure with low ON-resistor. Two input signals, IN1 and IN2, can choose one of four modes such as CW, CCW, short brake, and stop mode.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - I2C Motor Driver (TB6612FNG) | Initial                                                                                               | Sep 2018      |

## Features

- On board MCU
- CW/CCW/short brake/stop function modes
- Built-in thermal shutdown circuit and low voltage detecting circuit
- Standby (Power save) system


## Specification

|Item|Value|
|---|---|
|MCU Operating Voltage|3.3V / 5V|
|Motor Supply Voltage|2.5 ~ 13.5 (5V Typical, 15V Max.)|
|Output Current|1.2 A(ave)/3.2 A (peak)|
|Switching Frequency|100kHz|
|Logic Interface|I2C|
|I2C Address|0x14 (default)|
|I2C Address Range|0x01 ~ 0x7f (Configurable)|
|Size|L: 60mm W: 40mm H: 12mm| 
|Weight|13g|
|Package size|L: 140mm W: 90mm H: 12mm|
|Gross Weight|20g|


## Typical applications

- DC motor control
- Stepper motor control


## Hardware Overview

### Pin Out

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out.jpg)

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out_back.jpg)


### Hardware Detail

___
**I2C Interface**

This board uses the I2C interface to allow the on-board MCU to communicate with the host computer.
>GND: connect this module to the system GND  
>VCC: you can use 5V or 3.3V for this module  
>SDA: I2C serial data  
>SCL: I2C serial clock


![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/I2C.jpg)

___
**Power In**

Provide DC power to the motors, input range 2.5V ~ 13.5V.
>GND: Connect to the system GND, plug the power "-"  
>VM: Plug the power "+", supply power for the motor.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise1.jpg)

___
**DC Motor Output**

This board has two channel DC Motor Output, it can output 12V/1.2A per channel. You can use this driver board control two DC motors at the same time.
>A1: Channel A output 1  
>A2: Channel A output 2  
>B1: Channel B output 1  
>B2: Channel B output 2

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

___
**Steperp Motor Output**

You can use this board to control the 4-wire stepper motor as well, it can output up to 12V/1.2A.
>OUT1: Connected to one input of the stepper motor coil 1.  
>OUT2: Connected to the other input of the stepper motor coil 1.  
>OUT3: Connected to one input of the stepper motor coil 2.  
>OUT4: Connected to the other input of the stepper motor coil 2. 

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

!!!Note
        Actually the DC port and the stepper port are physically connected together. The connection diagram is as follows:


|DC Port|Stepper Port|
|---|---|
|A1|OUT1|
|A2|OUT2|
|B1|OUT3|
|B2|OUT4|



## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started


### Play With Arduino


#### Hardware

**Materials required**

*DC Motor Demo*

| Seeeduino V4.2 | Base Shield | Grove - I2C Motor Driver (TB6612FNG) |DC Motor|
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/DC_Motor_01.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank">Get One Now</a>|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.

    **3** You also need prepare at least 2 jumpers, in case you do not have, you can click [here](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html) to buy.


- **Step 1.** Plu the DC motor into the **DC Motor Output** port of the driver board, plug the external DC power into the **Power In** port.

- **Step 2.** Connect the Grove - I2C Motor Driver (TB6612FNG) to port **I^2^C** of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

---
name: Grove - I2C Motor Driver
category: Actuator
bzurl: https://seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html
oldwikiname: Grove_-_I2C_Motor_Driver
prodimagename: Grove-I2C_Motor_Driver_V1.1.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/12Cmotor.jpg
surveyurl: https://www.research.net/r/Grove-I2C_Motor_Driver
sku: 105020001
---

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><img src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver/img/Grove-I2C_Motor_Driver_V1.1.jpg" /></td>
<td><img src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver/img/I2CMotorDriver-2.jpg" /></td>
<td><img src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver/img/I2CMotorDriver_New.jpg" /></td>
</tr>
<tr class="even">
<td><div style=": center">
<a href="/Grove-Mini_I2C_Motor_Driver_v1.0" title="Grove - I2C Motor Driver V1.0">Grove - I2C Motor Driver V1.0</a>
</div></td>
<td><div style=": center">
<a href="/Grove-I2C_Motor_Driver_V1.2" title="Grove - I2C Motor Driver V1.2">Grove - I2C Motor Driver V1.2</a>
</div></td>
<td><div style=": center">
<a href="/Grove-I2C_Motor_Driver_V1.3" title="Grove - I2C Motor Driver V1.3">Grove - I2C Motor Driver V1.3</a>
</div></td>
</tr>
</tbody>
</table>


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_I2C_Motor_Driver -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>