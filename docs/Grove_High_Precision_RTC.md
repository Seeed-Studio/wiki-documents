---
name: Grove - High Precision RTC
category: Communication
bzurl: https://www.seeedstudio.com/Grove-High-Precision-RTC-p-2741.html
oldwikiname: Grove - High Precision RTC
prodimagename: Grove - High Precision RTC.jpg
surveyurl: https://www.research.net/r/Grove_High_Precision_RTC
sku: 102020083
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-High_Precision_RTC/master/img/Grove-High_Precision_RTC.jpg)

Grove - High Precision RTC based on the clock chip PCF85063TP which is a CMOS Real-Time Clock (RTC) and calendar optimized for low power consumption. An offset register allows fine-tuning of the clock. All addresses and data are transferred serially via the I2C bus and the maximum bus speed is 400 kbit/s.

Compared to [Grove - RTC](https://www.seeedstudio.com/Grove-RTC-p-758.html), this module can provide a more accurate result. And provide a programmable clock output for peripheral devices as well as minute and half minute interrupt.


[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-High-Precision-RTC-p-2741.html)

##  Features
---
- Working Voltage:5V/3.3V
- Provides year, month, day, weekday, hours, minutes, and seconds based on a 32.768 kHz quartz crystal
- Low current: typical 0.22 uA at VDD = 3.3 V and Tamb = 25 ℃
- 400 kHz two-line I2C-bus interface (at VDD = 1.8 V to 5.5 V)
- Programmable clock output for peripheral devices (32.768 kHz, 16.384 kHz, 8.192 kHz, 4.096 kHz, 2.048 kHz, 1.024 kHz, and 1 Hz)
- Minute and half minute interrupt
- Oscillator stop detection function
- Internal Power-On Reset (POR)
- Programmable offset register for frequency adjustment
- Interface:Grove - I2C(SCL,SDA,VCC,GND)
- Size:20*40mm
- Ready-to-go Arduino libraries

##Platforms Supported

##  Interface Function
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-High_Precision_RTC/master/img/Interface.jpg)

1. Grove interface
2. Programmable clock output interface
3. Minute and half minute interrupt output interface
4. Clock chip PCF85063TP
5. CR1225 battery-holder

## Application Ideas
---
- Digital still camera
- Digital video camera
- Printers
- Copy machines
- Battery powered devices

##Getting Started

After this section, you can make **Grove - High Precision RTC** run with only few steps.

###Preparations

Now we are making a demo for Grove - High Precision RTC module, in this demo we'll use a terminal to view the data. Here are what we need to use for this demo.
 
* [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)*1
* [Grove - High Precision RTC](https://www.seeedstudio.com/)*1


If this is your first time using [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html), please refer to [Seeeduino Lotus's wiki](http://wiki.seeedstudio.com/Seeeduino_Lotus/).

Seeeduino Lotus is fully compatible with Arduino which works as simple as Arduino.

If this is your first time using Arduino, Please put hand on [here](http://arduino.cc) to start your Arduino journey.

###Connecting hardware

[Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html) is a combination of Seeeduino and Base Shield. We can connect the RTC module to the I2C socket directly as the below picture shows.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-High_Precision_RTC/master/img/connect.jpg)

###Download the library

Click to download the library and install it ([How to install an Arduino Library](http://wiki.seeed.cc/How_to_install_Arduino_Library/)).

[![](https://raw.githubusercontent.com/SeeedDocument/Grove-High_Precision_RTC/master/img/library.png)](https://github.com/Seeed-Studio/Grove_High_Precision_RTC_PCF85063TP/archive/master.zip)


### Open the example

After install the library, please restart Arduino, click File>Examples>SetTimeAndDisplay.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-High_Precision_RTC/master/img/demo2.jpg)

###Review Results

After upload completed, you can open the serial monitor to see the result.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-High_Precision_RTC/master/img/result.jpg)

##  Resources
---
*   [Grove - High Precision RTC Library and Examples](https://github.com/Seeed-Studio/Grove_High_Precision_RTC_PCF85063TP)
*   [Grove - High Precision RTC Eagle file](https://github.com/SeeedDocument/Grove-High_Precision_RTC/blob/master/res/sch_eagle.zip)
*   [Grove - High Precision RTC Schematic pdf file](https://github.com/SeeedDocument/Grove-High_Precision_RTC/blob/master/res/sch_pdf.pdf)
*   [PCF85063TP Datasheet](https://github.com/SeeedDocument/Grove-High_Precision_RTC/blob/master/res/PCF85063TP.pdf)
*   [Grove - RTC](https://www.seeedstudio.com/Grove-RTC-p-758.html)



## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>