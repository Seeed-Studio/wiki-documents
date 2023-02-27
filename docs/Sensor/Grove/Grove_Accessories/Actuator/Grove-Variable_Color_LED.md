---
title: Grove - Variable Color LED
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Variable_Color_LED/
slug: /Grove-Variable_Color_LED
last_update:
  date: 01/09/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED1.jpg) ![](https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED_01.jpg)

This Grove consists of one 8mm RGB LED. It operates at 5V DC. When SIG pin is logic HIGH, the RGB LED will light up. Perfect for use on Seeeduino digital outputs, or also can be controlled by pulse-width modulation. And it uses three adjustable resistor to change the color of the RGB LED.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html)

Features
--------

- Grove compatible
- Color adjustable

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::
Application Ideas
-----------------

- Toys
- Decoration

:::caution
    Be gentle while adjusting the R, G and B adjustable resistances in case of over-turning.
:::

Specifications
-------------

| Item              | Typical | Unit |
|-------------------|---------|------|
| Operate Voltage   | 5.0     | VDC  |
| Working Current   | 20      | mA   |
| Variable Resistor | &lt;1   | KΩ   |

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

Usage
-----

The three resistances RED, GREEN and BLUE of the module control the R, G and B channels respectively. By adjusting the three adjustable resistances, it can turn out variable color. The thing to notice, however, is that be gentle when turning the adjustable resistances.

The following sketch demonstrates a simple application of controlling its brightness. As the picture on the below indicates, the Variable Color LED is connected to digital port 9 of the Grove - Base Shield. The hardware installation is as follows:

![](https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Grove-Variable_Color_LED.jpg)

- Copy and paste code below to a new Arduino sketch.

Demo code like:

```
int ledPin = 9;    // LED connected to digital pin 9

void setup()  {
    // nothing happens in setup
}

void loop()  {
    // fade in from min to max in increments of 5 points:
    for(int fadeValue = 0?; fadeValue <= 255; fadeValue +=5) {
        // sets the value (range from 0 to 255):
        analogWrite(ledPin, fadeValue);
        // wait for 30 milliseconds to see the dimming effect
        delay(30);
    }

    // fade out from max to min in increments of 5 points:
    for(int fadeValue = 255?; fadeValue >= 0; fadeValue -=5) {
        // sets the value (range from 0 to 255):
        analogWrite(ledPin, fadeValue);
        // wait for 30 milliseconds to see the dimming effect
        delay(30);
    }
}
```

- Upload the code.Adjust the three adjustable resistances, I am sure you will like it. Have a try!

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/res/Variable_Color_LED_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Resources
---------

- [Variable Color LED eagle_file](https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/res/Variable_Color_LED_eagle_file.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Variable_Color_LED -->

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
