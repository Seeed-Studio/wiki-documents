---
title: Grove - High Precision RTC (Real Time Clock)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove_High_Precision_RTC/
slug: /Grove_High_Precision_RTC
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/Grove-High_Precision_RTC.jpg)

Grove - High Precision RTC based on the clock chip PCF85063TP which is a CMOS Real-Time Clock (RTC) and calendar optimized for low power consumption. An offset register allows fine-tuning of the clock. All addresses and data are transferred serially via the I2C bus and the maximum bus speed is 400 kbit/s.

Compared to [Grove - RTC](https://www.seeedstudio.com/Grove-RTC-p-758.html), this module can provide a more accurate result. And provide a programmable clock output for peripheral devices as well as minute and half minute interrupt.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-High-Precision-RTC-p-2741.html)

## Features

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

## Platforms Supported

## Interface Function

---

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/Interface.jpg)

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

## Getting Started

After this section, you can make **Grove - High Precision RTC** run with only few steps.

### Preparations

Now we are making a demo for Grove - High Precision RTC module, in this demo we'll use a terminal to view the data. Here are what we need to use for this demo.

- [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)*1
- [Grove - High Precision RTC](https://www.seeedstudio.com/)*1

If this is your first time using [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html), please refer to [Seeeduino Lotus's wiki](https://wiki.seeedstudio.com/Seeeduino_Lotus/).

Seeeduino Lotus is fully compatible with Arduino which works as simple as Arduino.

If this is your first time using Arduino, Please put hand on [here](https://arduino.cc) to start your Arduino journey.

### Connecting hardware

[Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html) is a combination of Seeeduino and Base Shield. We can connect the RTC module to the I2C socket directly as the below picture shows.

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/connect.jpg)

### Download the library

Click to download the library and install it ([How to install an Arduino Library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/)).

[![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/library.png)](https://github.com/Seeed-Studio/Grove_High_Precision_RTC_PCF85063TP/archive/master.zip)

### Open the example

After install the library, please restart Arduino, click File>Examples>SetTimeAndDisplay.

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/demo2.jpg)

### Review Results

After upload completed, you can open the serial monitor to see the result.

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/result.jpg)

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/sch_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

---
- [Grove - High Precision RTC Library and Examples](https://github.com/Seeed-Studio/Grove_High_Precision_RTC_PCF85063TP)
- [Grove - High Precision RTC Eagle file](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/sch_eagle.zip)
- [Grove - High Precision RTC Schematic pdf file](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/sch_pdf.pdf)
- [PCF85063TP Datasheet](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/PCF85063TP.pdf)
- [Grove - RTC](https://www.seeedstudio.com/Grove-RTC-p-758.html)

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
