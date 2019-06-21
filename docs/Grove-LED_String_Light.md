---
name: Grove - LED String Light
category: Display
bzurl: https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html
oldwikiname:  Grove - LED String Light
prodimagename: Grove-led-string-light.jpg
surveyurl: https://www.research.net/r/Grove_LED_String_Light
sku:  104020005
---

![](https://github.com/SeeedDocument/Grove-LED_String_Light/raw/master/img/Grove-led-string-light.jpg)

The Grove - LED String Light module is essentially an LED driver for the LED string lights included in the pack. Working voltage of the module is 3.3V/5V. However, the LED string lights require a working voltage of 12V. Therefore, this module uses a AIC1896 current mode step up DC-DC Converter to provide the requisite voltage to the LED string lights. The LED string light is 5 meters in length and has 50 RGB LEDs on it connected equidistant to one another. You can use these to dress a Christmas tree, light your party or to decorate your room.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html)

##  Features
---
*   Used in conjunction with LED string lights

*   LED String lights of 5 meters length included with the pack

*   50 RGB LEDs connected at equal distances along the entire length of 5 meters give a colorful appearance

*   JST 2.0 Interface used to connect the LED String lights with the driver module

*   Uses Standard 4-pin [Grove Cables](/Grove_System/#grove-cables) to connect to other [Grove](/Grove_System/) modules

##  Interface Function
---
![](https://github.com/SeeedDocument/Grove-LED_String_Light/raw/master/img/LED_String_Light.jpg)

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


*   If using with a light sensor connected directly to the input side of the circuit, you should see the LED light up in bright light. If you want the lights to light up in the dark, add a [Grove - NOT](/Grove-NOT "Grove - NOT") module between the light sensor and the power module.

*   If using with a sound sensor, you should see the LEDs light up on detecting sound. Again, if you want to reverse the function, or in other words, if you want that the lights should be ON at all times except when there is a sound, add a [Grove - NOT](/Grove-NOT "Grove - NOT") module between the sound sensor and the power module.

*   If using with a momentary switch like the one on the [Grove - Button](/Grove-Button/) module, simply press the button to light up the string lights.

*   If using with a slide potentiometer, move the slider from the GND position to VCC and see the brightness of the lights increase as the supplied voltage increases.
</dd></dl>
</dd></dl>
</dd></dl>

Below is an illustration of a Grove circuit built using the [Grove - USB Power](/Grove-Mixer_Pack_V2 "Grove - Mixer Pack") power module:

![](https://github.com/SeeedDocument/Grove-LED_String_Light/raw/master/img/LED_String_Light_Photo.gif)

If you do not have the Grove - USB Power module, use the [Grove - DC Jack Power](/Grove-DC_Jack_Power "Grove - DC Jack Power") module instead to turn ON the LED string lights.

##  Availability
---
This [Grove](/Grove_System/) module is available as part of the following [Grove Kit Series](/Grove_System/#grove-starter-kit):

*   [Grove Mixer Pack V2](/Grove-Mixer_Pack_V2 "GROVE MIXER PACK V2")

Alternatively, it can be bought stand-alone at the [Seeed Studio Bazaar](http://www.seeedstudio.com/depot/Grove-LED-String-Light-p-1821.html).

##  Resources
---
*   [[Schematic PDF](https://github.com/SeeedDocument/Grove-LED_String_Light/raw/master/res/Grove-LED_String_Light.pdf)]

*   [[Eagle File](https://github.com/SeeedDocument/Grove-LED_String_Light/raw/master/res/Grove-LED_String_Light.zip)]

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>