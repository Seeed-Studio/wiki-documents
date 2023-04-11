---
description: Grove - Mouse Encoder
title: Grove - Mouse Encoder
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Mouse_Encoder
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder_product_view.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder_product_view.jpg" alt="pir" width={600} height="auto" /></p>

Grove - Mouse Encoder is a type of mechanical incremental rotary encoder with feedback data of rotary direction and rotary speed<sup>\[1\]</sup>. It features standard Grove interface that will save your lots of work in wiring and programming. Also, it is well adapted to heavy duty and a harsh environment. This product can be applied in toys, robots, and consumer input devices.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-%E2%80%93-Mouse-Encoder-p-2607.html)

<div className="admonition note">
  <p className="admonition-title">Note</p>
  The rotating speed is designed to be less 1000 rad/min(radian per minute).
</div>


Features
--------

-   Versatile for different environment.
-   Well adapted for heavy duty and harsh environment.
-   With detents and a nice feel.
-   Standard Grove interface for easier programming and wiring.
-   Accurate and reliable.

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::
Applications
------------

It is versatile for different applications in harsh environment such as toys, robotics and consumer input devices.

Specifications
--------------

| Item                             | Min. | Typical | Max. |
|----------------------------------|------|---------|------|
| Operating voltage(V)             |      | 3.3     | 5.5  |
| Operating current(mA)            |      | 10      | 13   |
| Duty(constant speed)             |      | 50%     |      |
| Phase difference(constant speed) |      | π/4     |      |
| Pulse per circle                 |      | 12      |      |

<div className="admonition note">
  <p className="admonition-title">Notes</p>
  <ol><li>There is no knob included in product list. Because we think it will make this encoder more versatile for different environments.</li>
    <li>You can find <a href="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/res/Grove-Mouse_Encoder_Dimensions.pdf">dimensions</a> file in PDF format, and you can customize a knob according to the dimensions.</li><ol>
    </ol></ol></div>

<div className="admonition tip">
  <p className="admonition-title">Tip</p>
  You can just use a suitable hexagonal screwdriver bit if you only are building a prototype for your project.
</div>


Hardware Overview
-----------------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder.jpg" alt="pir" width={600} height="auto" /></p>

**Grove interface**   
Connect main control board such as **Seeeduino** board with driver board.

**Hexagonal opening**   
An opening you pass a knob through.

### **Parts list**

| Parts name                               | Quantity |
|------------------------------------------|----------|
| Grove - Mouse Encoder(no knob included) | 1 PC     |
| Grove - Universal Cable                  | 1 PC     |

Get started
-----------

This section will show you how to build an IDE environment for building applications with Grove - Mouse Encoder.

<!-- 图有问题 Refer to [Seeeduino V4.2](/Seeeduino_v4.2#Getting_Started_on_Windows)(It is exchangeable with Arduino board) for how to build a complete an IDE for your applications, or read [Arduino guide](https://www.arduino.cc/en/Guide/HomePage) if you use Arduino original board. -->

<div className="admonition note">
  <p className="admonition-title">Notes</p>
  <ol><li>Duty circle will be bigger if the speed of rotating is slow.</li>
    <li>The pulse width (PW) will not be the same if rotating speed is not constant.</li>
    <li>The rotating speed is supposed to be low than 1000 rad/min or it will lead to narrow output PW or cause damage to this encoder.</li>
    <li>The output voltage will be uncertain (high or low voltage) for no rotating circumstance since the position of pulse inside this encoder is not certain.</li></ol>
</div>


### Basic demo

This demo shows how to detect position and detect direction.

#### Material required

-   Seeeduino V4.2
-   Base shield V2.0
-   USB cable (type A to micro type B)

#### Connections

Connect materials as shown below:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder_demo_connection.jpg)  -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder_demo_connection.jpg" alt="pir" width={600} height="auto" /></p>

#### Code

```
/* Read Quadrature Encoder
* Connect Encoder to Pins encoder0PinA, encoder0PinB, and +5V.
*
* Sketch by max wolf / www.meso.net
* v. 0.1 - very basic functions - mw 20061220
*
*/  
 
 
int val; 
int encoder0PinA = 3;
int encoder0PinB = 4;
int encoder0Pos = 0;
int encoder0PinALast = LOW;
int n = LOW;
 
void setup() { 
    pinMode (encoder0PinA,INPUT);
    pinMode (encoder0PinB,INPUT);
    Serial.begin (115200);
} 
 
void loop() { 
    n = digitalRead(encoder0PinA);
    if ((encoder0PinALast == LOW) && (n == HIGH)) {
        if (digitalRead(encoder0PinB) == LOW) {
            encoder0Pos--;
        } else {
            encoder0Pos++;
        }
        Serial.println(encoder0Pos);
        Serial.println ("/");
    } 
    encoder0PinALast = n;
}
```

1.  Copy the code and flash it into the controller board.
2.  Open monitor window.
3.  Turn the screwdriver bit to left or left to see what will happen.

The output:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove_mouse_encoder_output_of_demo.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove_mouse_encoder_output_of_demo.png" alt="pir" width={600} height="auto" /></p>


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/res/Grove_Mouse_Encoder_v1.0_Schematic_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


Resources
---------

- [Schematic files](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/res/Grove_Mouse_Encoder_v1.0_Schematic_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Mouser_Encoder -->

## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
