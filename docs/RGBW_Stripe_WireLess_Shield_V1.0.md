---
name: RGBW Stripe WireLess Shield V1.0
category: MakerPro
bzurl: https://www.seeedstudio.com/RGBW-Strip-WireLess-Shield-V10-p-2629.html
oldwikiname:  RGBW Stripe WireLess Shield V1.0
prodimagename:  RGBW_rev1_face.jpg
surveyurl: https://www.research.net/r/RGBW_Stripe_WireLess_Shield_V1
sku:  105990030
---

![](https://github.com/SeeedDocument/RGBW_Stripe_WireLess_Shield_V1.0/raw/master/img/RGBW_rev1_face.jpg)

RGBW Stripe WireLess Shield has 4 PWM output to connect RGBW LED Strip.
Anyone can handle a load of 1.5 A with a voltage of 5 to 24 V.
Integrated control in 5 Arduino easily provide power from the input power supply.
Self-renewing fuse protects LED Strip overcurrent.
For remote control RGB tape used popular transceiver nRF24L01+.
The most interesting is that the board has a memory, and you can now update the firmware of your Arduino through the air!

![](https://github.com/SeeedDocument/RGBW_Stripe_WireLess_Shield_V1.0/raw/master/img/RGBW_top.jpg)
![](https://github.com/SeeedDocument/RGBW_Stripe_WireLess_Shield_V1.0/raw/master/img/RGBW_.jpg)

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](http://www.seeedstudio.com/depot/RGBW-Strip-WireLess-Shield-V10-p-2629.html)

##   Feature

*   Built on Arduino-compatible architecture (DualOptiboot)

*   Compatibility with 12 - 24V RGB LED Strip

*   4 PWM output (RGBW)

*   On board 64kb SPI flash / E2prom (for OTA firmware updates)

*   Built-in Auto LED RF activity (for nRF24L01 +)

*   Mini  transceiver 2.4G nRF24L01 +

*   Self-renewing fuse

*   Built-in button

*   GROVE-compatible connector: I2C

##   Layout and schematics

![](https://github.com/SeeedDocument/RGBW_Stripe_WireLess_Shield_V1.0/raw/master/img/RGBW-top.png)

![](https://github.com/SeeedDocument/RGBW_Stripe_WireLess_Shield_V1.0/raw/master/img/RGBW-bottom.png)

![](https://github.com/SeeedDocument/RGBW_Stripe_WireLess_Shield_V1.0/raw/master/img/Scheme_RGBW.PNG)


##   Libraries

###   Necessary libraries

###   Demo code (example)
```

int L_RED = 6;
int L_GREEN = 9;
int L_BLUE = 3;
int L_WHITE = 5;

int brightness = 0;
int fadeAmount = 5;

void setup()  {
  pinMode(L_RED, OUTPUT);
  pinMode(L_GREEN, OUTPUT);
  pinMode(L_BLUE, OUTPUT);
  pinMode(L_WHITE, OUTPUT);
}

void loop()  {
  // RED
  analogWrite(L_RED, brightness);
  brightness = brightness + fadeAmount;
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ;
  }
  // GREEN
  analogWrite(L_GREEN, brightness);
  brightness = brightness + fadeAmount;
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ;
  }
  // BLUE
  analogWrite(L_BLUE, brightness);
  brightness = brightness + fadeAmount;
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ;
  }
  // WHITE
  analogWrite(L_WHITE, brightness);
  brightness = brightness + fadeAmount;
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ;
  }
}
```

##  Version Tracker

<table  cellpadding="5" cellspacing="0">
<tr>
<td width="150"> **Revision**
</td>
<td width="450"> **Description**
</td>
<td width="80"> **Release**
</td></tr>
<tr style="font-size: 90%">
<td> 1.0 rev 1
</td>
<td> Public version
</td>
<td> 19.11.2015
</td></tr></table>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>