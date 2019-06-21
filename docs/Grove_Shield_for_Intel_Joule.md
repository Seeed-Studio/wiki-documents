---
name: Grove Shield for Intel Joule
category: Others
bzurl: https://www.seeedstudio.com/Grove-Button-p-766.html
oldwikiname:
prodimagename: 3.jpg
surveyurl: https://www.research.net/r/B6JM638
sku: 103030095
---


![](https://github.com/SeeedDocument/Grove_Shield_for_Intel_Joule/blob/master/img/1.jpg?raw=true)

At the 2016 Intel Developer Forum, Intel announced the availability of the Joule Module, a Linux system on module that offers high computational power, RAM, and storage. This Grove shield introduces the family of Grove modules to the powerful Intel JouleTM, aims at helping inventors and IoT developers create there project more convenient and faster.

By simply plugging it on your Joule board, it will own 8 solid and easy-to-use Grove connectors which includes interfaces like I2C, UART, digital I/Os and analog inputs right away. In addition to rich Grove connectors, the shield also keeps 2x20 pin headers in case you want more GPIOs for the project. An integrated switch on the board allows you to select the working voltage at either 5V or 3.3V.


[![](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now.png)](https://www.seeedstudio.com/Grove-Shield-for-Intel-Joule-p-2782.html)

## Features

- Interfaces: 8 Grove connectors

- Plug-and-play

- Interfaces Detail: I2C x 3, UART x 1, Digital x 2, Analog x 2

- Working Voltage: 5V/3.3V

- A switch for selecting working voltage.

- 4 channel analog interface,  Resolution: 12 Bits

- Working temperature: -40 - 85℃

- Size: 84.9*51.7mm

## Hardware Overview

![](https://github.com/SeeedDocument/Grove_Shield_for_Intel_Joule/raw/master/img/Grove%20Shield%20for%20intel%20Joule%20Pin.png)

- Grove Analog Port: ⑥/⑨

- Grove Digital Port: ⑧/⑩

- Grove UART Port: ⑦

- Grove I2C Port: ③/④/⑤

- [Breakout 1 / J12 of the Intel Joule: ①](http://www.intel.com/content/www/us/en/support/boards-and-kits/000022494.html)

- [Breakout 2 / J13 of the Intel Joule: ②](http://www.intel.com/content/www/us/en/support/boards-and-kits/000022494.html)

- 3.3V & 5V Power Switch: ⑪

### Pin to Pin Diagram
|Grove Shield Connector/Pin|SOC (Schematic) Signal|TuChuckConnector/Pin
|:---:|:---:|:---:|
|J1|Breakout1|J12|
|J2|Breakout2|J13|
|J3-1|I2C_0_SCL_H|J12-13|
|J3-2|I2C_0_SDA_H|J12-11|
|J4-1|I2C_1_SCL_H|J13-33|
|J4-2|I2C_1_SDA_H|J13-31|
|J5-1|I2C_2_SCL_H|J13-37|
|J5-2|I2C_2_SDA_H|J13-35|
|J6-1|AIN2|/|
|J6-2|AIN3|/|
|J7-1|UART_0_TXD|J12-7|
|J7-2|UART_0_RXD|J13-28|
|J8-1|Digital_1_PWM_0|J12-26|
|J8-2|Digital_1_PWM_1|J12-28|
|J9-1|AIN0|/|
|J9-2|AIN01|/|
|J10-1|Digital_2_PWM_2|J12-30|
|J10-2|Digital_2_PWM_3|J12-32|


!!!Note
    * Please pay attention to the orientation when you are plugging the shield.
    * Libmraa does not support the UART pins of Joule for the time being. So the UART interface is not available.

## Resources

* [Grove Shield for Intel Joule Schematic files](https://github.com/SeeedDocument/Grove_Shield_for_Intel_Joule/tree/master/res)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>