---
description: Grove - RGB LED Stick (10 - WS2813 Mini)
title: Grove - RGB LED Stick (10 - WS2813 Mini)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-RGB_LED_Stick-10-WS2813_Mini
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/main.jpg" alt="pir" width={600} height="auto" /></p>

We integrated 10 full-color RGB LEDs on this stick, with only one signal pin you can control all 10 LEDs easily. All the LEDs are WS2813 Mini, which is an intelligent control and high cost-effective LED.
What's more, the WS2813 support signal break-point continuous transmission, which means you can continue to use other leds with one led be broken. 

You can use this little stick create hundreds of thausands light effect, we hope it will bring you more fun.


<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Min-p-3226.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Min-p-3226.html)

## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - RGB LED Stick (10 WS2813 Mini) | Initial                                                                                               | Nov 2018      |

## Features

- WS2813B IC, 3535 LED
- Intelligent Reverse-connection protection.
- The gray levels of each pixel are of 256, which achieves “256*256*256=16777216” full-color display.
- The refresh frequency reaches to 2KHz.
- Serial cascade interface, data receiving and decoding depend on just one signal line.
- Dual-signal wires version, signal break-point continuous transmission.


### Signal break-point continuous transmission

<!-- ![](https://files.seeedstudio.com/wiki/Outsourcing/104020108/img/LED_RFBP.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Outsourcing/104020108/img/LED_RFBP.jpg" alt="pir" width={600} height="auto" /></p>

As long as not two or more adjacent LEDs are broken, the remaining LEDs will be able to work normally.



## Specification

|Item|Value|
|---|---|
|Operating Voltage|3.3V / 5V|
|Operating Temperature|-25℃ ~ +85℃|
|Storage Temperature|-40℃ ~ +105℃|
|RGB Channel Constant Current|16mA|
|Interface|Digital|
|Size|L: 80mm W: 10mm H: 10mm| 
|Weight|3.7g|
|Package Size|L: 150mm W: 100mm H: 25mm|
|Gross Weight|13g|


## Typical Applications

- Christmas decoration
- Illumination
- Toys


## Hardware Overview

### Pin Out

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/pin_out.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/pin_out.jpg" alt="pir" width={600} height="auto" /></p>



## Platforms Supported

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started


### Play With Arduino


#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield | Grove - RGB LED Stick (10 WS2813 Mini) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Min-p-3226.html" target="_blank">Get One Now</a>|


:::note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.
:::

:::important
    **1**. If the you uses Arduino UNO as the motherboard, it is recommended that use the DC power supply. Otherwise, the maximum ripple of VCC may exceed 100mV. If you use Seeeduino V4.2 as the motherboard, you do not need to connect DC power.

    **2**. Hot swap is not supported.
:::

- **Step 1.** Connect the Grove - RGB LED Stick (10 WS2813 Mini) to port **D6** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.


<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/connect.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note
        If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.
:::

| Seeeduino      |  Grove Cable       | Grove - RGB LED Stick (10 WS2813 Mini) |
|--------------- |--------------------|-----|
| GND            | Black              | GND |
| 5V or 3.3V     | Red                | VCC |
| No connection            | White              | NC |
| D6            | Yellow             | SIG |



#### Software

:::note
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.** Download the [Led_Strip](https://github.com/Seeed-Studio/Seeed_Led_Strip) Library from Github.

- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open the example, you can open it in the following three ways：
    1. Open it directly in the Arduino IDE via the path: **File --> Examples --> Adafruit_Neopixel --> simple**. 
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/path1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/path1.jpg" alt="pir" width={600} height="auto" /></p>

    2. Open it in your computer by click the **simple.ino** which you can find in the folder **XXXX\Arduino\libraries\Seeed_Led_Strip-master\examples\simple**, **XXXX** is the location you installed the Arduino IDE.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/path2.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/path2.jpg" alt="pir" width={600} height="auto" /></p>

    3. Or, you can just click the icon 
    <!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

     in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.


```C++
// NeoPixel Ring simple sketch (c) 2013 Shae Erisson
// released under the GPLv3 license to match the rest of the AdaFruit NeoPixel library

#include "Adafruit_NeoPixel.h"
#ifdef __AVR__
  #include <avr/power.h>
#endif

// Which pin on the Arduino is connected to the NeoPixels?
// On a Trinket or Gemma we suggest changing this to 1
#define PIN            6

// How many NeoPixels are attached to the Arduino?
#define NUMPIXELS      10

// When we setup the NeoPixel library, we tell it how many pixels, and which pin to use to send signals.
// Note that for older NeoPixel strips you might need to change the third parameter--see the strandtest
// example for more information on possible values.
Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

int delayval = 500; // delay for half a second

void setup() {
  // This is for Trinket 5V 16MHz, you can remove these three lines if you are not using a Trinket
#if defined (__AVR_ATtiny85__)
  if (F_CPU == 16000000) clock_prescale_set(clock_div_1);
#endif
  // End of trinket special code
  pixels.setBrightness(255);
  pixels.begin(); // This initializes the NeoPixel library.
}

void loop() {

  // For a set of NeoPixels the first NeoPixel is 0, second is 1, all the way up to the count of pixels minus one.

  for(int i=0;i<NUMPIXELS;i++){

    // pixels.Color takes RGB values, from 0,0,0 up to 255,255,255
    pixels.setPixelColor(i, pixels.Color(0,150,0)); // Moderately bright green color.

    pixels.show(); // This sends the updated pixel color to the hardware.

    delay(delayval); // Delay for a period of time (in milliseconds).

  }
}
```

:::note
        The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.
:::

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).



:::success
        If every thing goes well, now you can see the LED strip shining:
:::

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/test20181210_162208.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/test20181210_162208.gif" alt="pir" width={600} height="auto" /></p>


## Schematic Online Viewer


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/res/Grove%20-%20RGB%20LED%20Stick%20(10-WS2813%20Mini).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Resources

- **[Zip]** [Grove - RGB LED Stick (10 WS2813 Mini) Eagle Files](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/res/Grove%20-%20RGB%20LED%20Stick%20(10-WS2813%20Mini).zip)

- **[Zip]** [Led_Strip Library](https://github.com/Seeed-Studio/Seeed_Led_Strip/archive/master.zip)

- **[PDF]** [Datasheet WS2813-Mini](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/res/WS2813-Mini.pdf)




## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>