---
name: RS-485 Shield for Raspberry Pi
category:
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 103030295
tags:
---

![](https://github.com/SeeedDocument/RS-485_Shield_for_Raspberry_Pi/raw/master/img/main.jpg)

RS-485 is a cost-effective solution in serial communication networks. It can be used up to data rates at 10 Mbit/s or distances up to 1200m at lower speeds. This RS-485 Shield is a standard add-on board for Raspberry Pi. It is integrated with simple screw terminal as well as DB9 interface. 


<p style=":center"><a href="https://www.seeedstudio.com/RS-485-Shield-for-Raspberry-Pi.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| RS-485 Shield for Raspberry Pi | Initial                                                                                               | Sep 2018      |

## Feature

- One driver and one receiver per part
- EMI noise minimization
- Transmission rate up to 2.5Mbps
- No driver slew rate limitation
- Short-circuit current limited
- Fail-Safe Applications
- Support Raspberry Pi 3B/3B+/4

<div class="page"/></div>


## Specification

|Item|Value|
|:---|:---|
|Operating Supply Voltage|3.3V|
|Interface|RS-485 DB9 Interface X1<br> RS-485 Screw Interface X1 <br> 2×13 Female Header To Raspberry X1<br>  2×13 Expansion Female Header X1<br>  Grove I2C Interface X1|
|Data Rate|2.5Mbps|
|Number of Receivers on|32|
|Storage Temperature Range|-65～160℃|
|Channel Number|8|
|Resolution|12-Bit|
|Power Consumption|Different power consumption depending on the transmission rate|
|size|L: 62mm W: 39.2mm H: 21.8mm| 
|Weight|23g|
|Package size|L: 140mm W: 75mm H: 25mm|
|Gross Weight|42g|


<div class="page"/></div>


## Typical Applications

- Low-Power RS-485 Transceivers 
- Level Translators
- Transceivers for EMI-Sensitive Applications Industrial-Control Local Area Networks
- Half-duplex applications


## Hardware Overview

### Pin Out

**Overview**

![Pin_map](https://github.com/SeeedDocument/RS-485_Shield_for_Raspberry_Pi/raw/master/img/Pin_map.jpg)



<div class="page"/></div>


---
**RS-485 DB9 Interface & RS-485 Screw Interface**


![](https://github.com/SeeedDocument/RS-485_Shield_for_Raspberry_Pi/raw/master/img/pin_out/8.jpg)

The 485 interface uses differential signal transmission. Please make sure the port A connect to the port A of the 485 device, and port B connect to the port B of the 485 device. 

>485-A: The end A of RS485 data transmit wire, connect to the pin A of the MAX485 chip.  
>485-B: The end B of RS485 data transmit wire, connect to the pin B of the MAX485 chip.  
>GND: Connect to the Raspberry Pi GND.


[![](https://raw.githubusercontent.com/SeeedDocument/RS-485_Shield_for_Raspberry_Pi/master/img/schematic_1.jpg)](https://raw.githubusercontent.com/SeeedDocument/RS-485_Shield_for_Raspberry_Pi/master/img/schematic_1.jpg)

<p style=":center"><font color="green">You can click the picture to view the original file</font></p>


As you can see, GPIO14 and GPIO15 are applied for data transmission, and we use GPIO18 as the enable signal.


For the definition of logic signals, please refer to the table below.

![](https://github.com/SeeedDocument/RS-485_Shield_for_Raspberry_Pi/raw/master/img/function_table.jpg)


---
**Female Headers to Raspberry**

![](https://github.com/SeeedDocument/RS-485_Shield_for_Raspberry_Pi/raw/master/img/pin_out/5.jpg)

We use a 2X13 Female Header to plug this module into the Raspberry Pi, please make sure the pins are aligned. 

![](https://github.com/SeeedDocument/RS-485_Shield_for_Raspberry_Pi/raw/master/img/Pin_map_2.jpg)




---
**Extension Female Headers**

![](https://github.com/SeeedDocument/RS-485_Shield_for_Raspberry_Pi/raw/master/img/pin_out/6.jpg)

This RS-485 Shield occupies 26 Raspberry Pi pins, and only 5 GPIO pins are actually used. We take these 26 pins out in case you need those pins for other purposes.

>GPIO Occupied List

GPIO Number|Function
:---:|---
GPIO02|SDA for Grove I2C Port
GPIO03|SCL for Grove I2C Port
GPIO14|Connect to the pin **DI** of Max485 chip, for data transmission.
GPIO15|Connect to the pin **RO** of Max485 chip, for data transmission.
GPIO18|Connect to the pin **RE** & **DE** of Max485 chip, work as the enable signal.


---
**Grove I2C Port**

![](https://github.com/SeeedDocument/RS-485_Shield_for_Raspberry_Pi/raw/master/img/pin_out/3.jpg)

We have reserved the I2C interface so that you can easily use it with I2C devices. It should be noted that the VCC of this port is 5V, you need to confirm that whether the module is compatible with 5V voltage.

>SCL: I2C serial clock, connect to the GPIO03 of Raspberry Pi.  
>SDA: I2C serial data, connect to the GPIO02 of Raspberry Pi.  
>VCC: Connect to the Raspberry Pi 5V pin.  
>GND: Connect to the Raspberry Pi GND pin.


<div class="page"/></div>

---
**Max485 Chip**

![](https://github.com/SeeedDocument/RS-485_Shield_for_Raspberry_Pi/raw/master/img/pin_out/7.jpg)


We use the MAX485ESA IC for this shield, for more detail about this IC, please check the [MAX485 Datasheet](https://github.com/SeeedDocument/RS-485_Shield_for_Raspberry_Pi/raw/master/res/RS-485.pdf)



## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |



<div class="page"/></div>




## Getting Started

### Hardware

**Materials required**

|Raspberry pi|RS-485 Shield for Raspberry Pi|
|------------|-------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/RS-485_Shield_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com)|



- **Step 1.** Plug the RS-485 Shield for Raspberry Pi into the Raspberry Pi.

- **Step 2.** Connect the **485-A** to 485 wire A, connect the **485-B** to 485 wire B. 


!!!Note
        If the wire is reversed, communication will not be possible.


- **Step 3.** Power the Raspberry Pi with micro-usb cable.



### Software


#### Communication test code


You can create a new python file and copy the following code into the new file, or you can download the source file in the resource download area. Then run it in your terminal.



<div class="page"/></div>



**Sending Code.**


```Python

#!/usr/bin/env python

import time
import serial
import os
from gpiozero import LED

send_str = "*******rs485888888--\n"

ser = serial.Serial(port='/dev/ttyS0',baudrate =115200)

Tx_Enable = LED(18)
Tx_Enable.on()

while 1:
    ser.write(send_str)
    time.sleep(1)

```


<div class="page"/></div>


**Receive Code**

```Python

#!/usr/bin/env python

import time
import serial
import os
from gpiozero import LED

ser = serial.Serial(port='/dev/ttyS0',baudrate =115200,timeout=1)
data = ''

Rx_Disable = LED(18)
Rx_Disable.off()

while True:
    str = ser.readall()  
    if str:  
        print str 

```


You need two shield and two raspberry to test the code above, or you can use the serial tool in the PC to communicate with your raspberry pi.


<div class="page"/></div>

## Resources

- **[Zip]** [RS-485 Shield for Raspberry Pi Eagle Files](https://github.com/SeeedDocument/RS-485_Shield_for_Raspberry_Pi/raw/master/res/RS485%20Shield%20for%20Raspberry%20Pi.zip)

- **[Zip]** [Python Test Code](https://github.com/SeeedDocument/RS-485_Shield_for_Raspberry_Pi/raw/master/res/Python_test.zip)

- **[PDF]** [MAX485 Datasheet](https://github.com/SeeedDocument/RS-485_Shield_for_Raspberry_Pi/raw/master/res/RS-485.pdf)

- **[PDF]** [PDF Format Wiki](https://github.com/SeeedDocument/RS-485_Shield_for_Raspberry_Pi/raw/master/res/RS-485_Shield_for_Raspberry_Pi.pdf)




## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/) or drop mail to [techsupport@seeed.cc](techsupport@seeed.cc).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>