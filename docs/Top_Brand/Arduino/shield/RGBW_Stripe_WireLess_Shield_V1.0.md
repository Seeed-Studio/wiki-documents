---
description: RGBW_Stripe_WireLess_Shield_V1.0
title: RGBW Stripe WireLess Shield V1.0
tags:
  - Shield
keywords:
  - Shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /RGBW_Stripe_WireLess_Shield_V1.0
last_update:
  date: 02/02/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW_rev1_face.jpg" alt="pir" width={600} height="auto" /></p>

RGBW Stripe WireLess Shield has 4 PWM output to connect RGBW LED Strip.
Anyone can handle a load of 1.5 A with a voltage of 5 to 24 V.
Integrated control in 5 Arduino easily provide power from the input power supply.
Self-renewing fuse protects LED Strip overcurrent.
For remote control RGB tape used popular transceiver nRF24L01+.
The most interesting is that the board has a memory, and you can now update the firmware of your Arduino through the air!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW_top.jpg" alt="pir" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW_.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/depot/RGBW-Strip-WireLess-Shield-V10-p-2629.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Feature

* Built on Arduino-compatible architecture (DualOptiboot)

* Compatibility with 12 - 24V RGB LED Strip

* 4 PWM output (RGBW)

* On board 64kb SPI flash / E2prom (for OTA firmware updates)

* Built-in Auto LED RF activity (for nRF24L01 +)

* Mini  transceiver 2.4G nRF24L01 +

* Self-renewing fuse

* Built-in button

* GROVE-compatible connector: I2C

## Layout and schematics

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW-top.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW-bottom.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/Scheme_RGBW.PNG" alt="pir" width={600} height="auto" /></p>

## Libraries

### Necessary libraries

### Demo code (example)

```cpp

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

## Version Tracker

<table cellPadding={5} cellSpacing={0}>
  <tbody><tr>
      <td width={150}> <strong>Revision</strong>
      </td>
      <td width={450}> <strong>Description</strong>
      </td>
      <td width={80}> <strong>Release</strong>
      </td></tr>
    <tr style={{fontSize: '90%'}}>
      <td> 1.0 rev 1
      </td>
      <td> Public version
      </td>
      <td> 19.11.2015
      </td></tr></tbody></table>

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
