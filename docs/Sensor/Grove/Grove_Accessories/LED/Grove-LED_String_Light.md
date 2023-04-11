---
description: Grove - LED String Light
title: Grove - LED String Light
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-LED_String_Light
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/Grove-led-string-light.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/Grove-led-string-light.jpg" alt="pir" width={600} height="auto" /></p>

The Grove - LED String Light module is essentially an LED driver for the LED string lights included in the pack. Working voltage of the module is 3.3V/5V. However, the LED string lights require a working voltage of 12V. Therefore, this module uses a AIC1896 current mode step up DC-DC Converter to provide the requisite voltage to the LED string lights. The LED string light is 5 meters in length and has 50 RGB LEDs on it connected equidistant to one another. You can use these to dress a Christmas tree, light your party or to decorate your room.

<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html) -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html)
##  Features
---
*   Used in conjunction with LED string lights

*   LED String lights of 5 meters length included with the pack

*   50 RGB LEDs connected at equal distances along the entire length of 5 meters give a colorful appearance

*   JST 2.0 Interface used to connect the LED String lights with the driver module

 *   Uses Standard 4-pin Grove Cables to connect to other Grove modules 

##  Interface Function
---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/LED_String_Light.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/LED_String_Light.jpg" alt="pir" width={600} height="auto" /></p>

<dl><dt>① JST 2.0 interface: Used to connect to LED String Lights

</dt><dt>② Grove interface: HIGH on SIG (Pin 1) turns the LED String Lights ON, LOW turns them OFF
</dt></dl>

##  Usage
---
Follow these steps to build a sample circuit using this module:

1.  First connect the LED string lights to the **Grove - LED String Light** module using the JST2.0 two-wire interface.

 2.  Connect the LED string lights module to the output side of your circuit (to the right of the power module). On the input side of the circuit, you may use a range of sensor based input modules ([Grove - Light Sensor](/Grove-Light_Sensor/), [Grove - Sound Sensor](/Grove-Sound_Sensor/), [Grove - Button](/Grove-Button/) or [Grove - Slide Potentiometer](/Grove-Slide_Potentiometer/). 

3.  Power up the circuit.

4.  LED String lights light up when the input module supplies a trigger:


 If using with a light sensor connected directly to the input side of the circuit, you should see the LED light up in bright light. If you want the lights to light up in the dark, add a Grove - NOT module between the light sensor and the power module. 

If using with a sound sensor, you should see the LEDs light up on detecting sound. Again, if you want to reverse the function, or in other words, if you want that the lights should be ON at all times except when there is a sound, add a Grove - NOT module between the sound sensor and the power module. 

If using with a momentary switch like the one on the [Grove - Button](/Grove-Button/) module, simply press the button to light up the string lights. 

*   If using with a slide potentiometer, move the slider from the GND position to VCC and see the brightness of the lights increase as the supplied voltage increases.
<!-- </dd></dl>
</dd></dl>
</dd></dl> -->

Below is an illustration of a Grove circuit built using the Grove - USB Power power module: 

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/LED_String_Light_Photo.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/LED_String_Light_Photo.gif" alt="pir" width={600} height="auto" /></p>

If you do not have the Grove - USB Power module, use the Grove - DC Jack Power module instead to turn ON the LED string lights. 

##  Availability
---
This Grove module is available as part of the following Grove Kit Series

<!-- 链接有问题*   [Grove Mixer Pack V2](/Grove-Mixer_Pack_V2 "GROVE MIXER PACK V2") -->

Alternatively, it can be bought stand-alone at the Seeed Studio Bazaar.


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_String_Light/res/Grove-LED_String_Light.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##  Resources
---
*   [[Schematic PDF](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/res/Grove-LED_String_Light.pdf)]

*   [[Eagle File](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/res/Grove-LED_String_Light.zip)]

## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
