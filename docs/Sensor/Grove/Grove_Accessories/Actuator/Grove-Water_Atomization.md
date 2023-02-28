---
title: Grove - Water Atomization
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Water_Atomization/
slug: /Grove-Water_Atomization
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_product_1200.jpg)

Grove - Water Atomization is a fine Grove module for you to develop an atomizer or an atomizer module in your applications easily. With a few simple steps, you can prototype an atomizer. It has grove interface which make it easily applied to plenty of applications. A humidifier is a basic application it can be built with, you can develop more advanced and interesting objects with digital scent technology and any other situation in which atomization is required.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Grove-Water-Atomization-v10-p-2542.html)

Features
--------

- Heated with ultrasound.
- Easy to prototype a new application.
- Well applied to vast applications.
- For various interesting, smart and fashionable applications.

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::
Application ideas
-----------------

- Humidifier.
- Scent emitter in different situations.
- For smart-house applications.
- For smart objects on consumer electronic products.

Specifications
--------------

| Parameter            | Value          |
|----------------------|----------------|
| Operating Voltage    | 5.0V(DC)       |
| Ripple(at Max power) | ≤100 mV        |
| Max power            | 2W             |
| Peak output voltage  | 65±5V          |
| Operating frequency  | 105±5kHz       |
| Chips                | ETA1617, NE555 |

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

Hardware Overview
-----------------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_overview_1200.jpg) -->

**Grove interface**
Connect main control board such as Seeeduino board with driver board.

**Transducer interface**
Connect ultrasonic transducer to with driver board.

**Grove wire**
Connect main control board with driver board.

### **Parts list**

| Parts name                  | Quantity |
|-----------------------------|----------|
| Driver board                | 1PC      |
| Grove wire                  | 1PC      |
| Ultrasonic transducer plate | 1PC      |

Get started
-----------

### **Material required**

Seeeduino v4.2 x 1

Grove - Base shield v2 x 1

Grove - Wire x 1

### **Preparations**

Refer to following guides to build an appropriate IDE:

:::note
We have chosen Seeeduino in this case.
:::

- Getting Started on Windows
- Getting Started on Mac OS X

### **Hardware connections**

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_connection.jpg)

### **A little demo**

:::note
  We also need a Grove - Touch Sensor in this demo and also connect it to D5.
:::

1.Copy code below to Arduino IDE editor.

```
/*
  Demo code for grove  atomization.
  Touch to start atomizing.
  Last modified by he
  by xiaohe
*/

// the setup function runs once when you press reset or power the board
void setup() {
    // initialize digital pin 13 as an output.
    pinMode(A5, OUTPUT);// Set A5 as OUTPUT
    pinMode(5, INPUT); // Use digital pin 5 as output port
}

// the loop function runs over and over again forever
void loop() {
    int D2Sig = digitalRead(5);// read pin 5 signal
    if (D2Sig == 1)
    {
        /* code */
        digitalWrite(A5, HIGH);   // atomize
        delay(10000);              // wait for 10 seconds
        digitalWrite(A5, LOW);    // atomization stopped

    }
}
```

2.Place some tissue into a trimmed paper cup filled with water, put ultrasonic transducer onto tissue.

:::note
  The bottom side is the side with hollow which is supposed to face downside. Let bottom of transducer plate sink into the water and keep top side above water. The function of tissue is lead water to the transducer and keep upper side of transducer above water.
:::

3.Upload code to main control board.

4.Now if you touch Grove touch sensor, you can see vapor produced.

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_connection.jpg)

:::caution
  Do not touch transducer interface pins directly because peak output voltage of Drier board can be 65V.
:::

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/High_voltage_warning_600.jpg)

:::caution
  The inductor <span style={{fontWeight: 'bold'}}>L2</span> (marked in red rectangle above) will be heated. So do not touch it directly.
:::

### Play with Codecraft

#### Hardware

**Step 1.** Connect Grove - Water Atomization to port D2, and connect Grove - Button to port D5 of a Base Shield.

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

:::note
    If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).
:::
**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

![cc](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/cc_Water_Atomization.png)

Upload the program to your Arduino/Seeeduino.

:::tip
    When the code finishes uploaded, the water atomization starts atomize when you push the button.
:::

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Resources
---------

- [Schematic files in Eagle](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_Eagle.zip)
- [Schematic files in PDF](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_PDF.zip)
- [Codecraft CDC File](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Grove_Water_Atomization_CDC_File.zip)

## Project

**Smart Humidifier** Make your room comfortable in winter.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/taifur/smart-humidifier-dac66f/embed' width='350'></iframe>

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Water_Atomization -->

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
