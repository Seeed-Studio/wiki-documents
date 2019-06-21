---
name: 315Mhz RF link kit
category: MakerPro
bzurl: https://www.seeedstudio.com/315mhz-rf-link-kit-p-76.html
oldwikiname:  315Mhz RF link kit
prodimagename:  3151.jpg
surveyurl: https://www.research.net/r/315Mhz_RF_link_kit
sku: 113990017
---
![](http://bz.seeedstudio.com/depot/images/product/3151.jpg)

The kit is consisted of transmitter and receiver, popular used for remote control.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/315mhz-rf-link-kit-p-76.html)

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

![](https://github.com/SeeedDocument/315Mhz_RF_link_kit/raw/master/img/315433RF.jpg)

##   Resources
---
*   [Demo Scheme](http://www.seeedstudio.com/depot/datasheet/315MRFlink.pdf)

*   [File:VirtualWire.zip](https://github.com/SeeedDocument/315Mhz_RF_link_kit/raw/master/res/VirtualWire.zip "File:VirtualWire.zip")

*   [Documentation For 1.3](http://www.seeedstudio.com/depot/images/product/VirtualWire.pdf)

*   [Example from sparkfun](http://www.sparkfun.com/datasheets/RF/KLP_Walkthrough.pdf)

*   [Example running rf modules](http://winavr.scienceprog.com/example-avr-projects/running-tx433-and-rx433-rf-modules-with-avr-microcontrollers.html)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>