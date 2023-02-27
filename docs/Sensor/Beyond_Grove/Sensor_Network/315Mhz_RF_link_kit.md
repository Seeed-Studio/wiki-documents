---
title: 315Mhz RF link kit
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/315Mhz_RF_link_kit/
slug: /315Mhz_RF_link_kit
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](http://bz.seeedstudio.com/depot/images/product/3151.jpg)

The kit is consisted of transmitter and receiver, popular used for remote control.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/315mhz-rf-link-kit-p-76.html)

##   Specification
---
*   Frequency: 315Mhz.

*   Modulation: ASK

*   Receiver Data Output: High - 1/2 Vcc, Low - 0.7v

*   Transmitter Input Voltage: 3-12V (high voltage = more transmitting power)

##   Usage
---
The popular link is like this: MCU -&gt; Encoder -&gt; Transmitter ------ Receiver -&gt; Decoder -&gt; MCU,

PT2262(Encoder) and PT2272(Decoder) are optional, their existence is to 1)avoid confusing when multiple RF links in range 2) isolate disturbance. You can integrate the encoding and decoding work to the MCUs on both side. Whenever there is no 315Mhz devices around, you may use it as direct cable connection.

Excuse for the documentation, we will work on them. Before that, please consult us for any details, we are happy to find the answer for you ^^ We tried them using the guide from Sparkfun, it's compatible. The only difference is in package, of some excess GND pins.

More over, we will make more RF modules ourselves with different frequency and capacity. The next one in plan is based on cc1100 Please suggest us about your need :)

![](https://files.seeedstudio.com/wiki/315Mhz_RF_link_kit/img/315433RF.jpg)

##   Resources
---
*   [Demo Scheme](https://www.seeedstudio.com/depot/datasheet/315MRFlink.pdf)

*   [File:VirtualWire.zip](https://files.seeedstudio.com/wiki/315Mhz_RF_link_kit/res/VirtualWire.zip "File:VirtualWire.zip")

*   [Documentation For 1.3](https://www.seeedstudio.com/depot/images/product/VirtualWire.pdf)

*   [Example from sparkfun](http://www.sparkfun.com/datasheets/RF/KLP_Walkthrough.pdf)

*   [Example running rf modules](http://winavr.scienceprog.com/example-avr-projects/running-tx433-and-rx433-rf-modules-with-avr-microcontrollers.html)

## Tech Support
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>