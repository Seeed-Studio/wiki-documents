---
name: Grove - Encoder
category: Sensor
bzurl: 
oldwikiname:
prodimagename: 
bzprodimageurl: 
surveyurl: 
sku: 111020001
tags:
---

![](https://github.com/SeeedDocument/Grove-Encoder/raw/master/img/encoder.jpg)



This module is an incremental rotary encoder. It encodes the rotation signal from the axis and output the signal by electronic pulse. The Grove – Encoder is one of the Grove series and has a standard Grove interface.
When you need to add a rotary knob to your project, for example a volume knob for a speaker, a selection panel or a digital input, this will be your first choice.

<p style=":center"><a href="https://www.seeedstudio.com/Grove-Encoder-p-1352.html" target="_blank"><img src="https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p>


## Features

*   Incremental encoder.
*   Grove Interface.
*   360 degree rotary.

## Specification

| Item | Min | Typical | Max | Unit |
|--|--|--|--|--|
| Voltage | 4.5 | 5 | 5.5 | V |
| Current | 10 | 20 | 30 | mA |
| Dimension | |20x 20 | |mm |
| Net Weight || 12 || g |


## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Getting Started

!!!Note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.

### Play With Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield|  Grove - Circular LED | Grove - Encoder|
|--------------|-------------|-----------------|----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Encoder/raw/master/img/Grove%20Circular%20LED._Sjpg.jpg)|![](https://github.com/SeeedDocument/Grove-Encoder/raw/master/img/Grove%20Encoder.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Circular-LED-p-1353.html)|[Get One Now](https://www.seeedstudio.com/Grove-Encoder-p-1352.html)|

- **Step 2.** Connect Grove-Encoder to port D2 of Grove-Base Shield.
- **Step 3.** Connect Grove-Circular LED to port D5 of Grove-Base Shield.
- **Step 4.** Plug Grove-Base Shield into Seeeduino.
- **Step 5.** Connect Seeeduino to PC via a USB cable.

![](https://github.com/SeeedDocument/Grove-Encoder/raw/master/img/ardu_connection.JPG)

!!!Note
	If we don't have Grove Base Shield, We also can directly connect Grove-Encoder and Connect Grove-Circular LED to Seeeduino as below.

| Seeeduino       | Grove-Encoder  |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| D3           | White                   |
| D2            | Yellow                  |


| Seeeduino       | Grove-Circular LED  |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| D6           | White                   |
| D5           | Yellow                  |

!!!Note
    If you want to change to other port for Grove-Encoder, please change the digitalRead(2) and digitalRead(3) in Encoder.cpp.

#### Software

- **Step 1.** Download the  [Encoder Library](https://github.com/SeeedDocument/Grove-Encoder/raw/master/res/Encoder.zip), [CircularLED Library](https://github.com/SeeedDocument/Grove-Encoder/raw/master/res/CircularLED.zip), [TimerOne Library](https://github.com/SeeedDocument/Grove-Encoder/raw/master/res/TimerOne.zip) from Github.
- **Step 2.** Refer [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.
- **Step 3.** Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

```c++
#include <CircularLED.h>
#include <Encoder.h>
#include <TimerOne.h>
CircularLED circularLED(6,5);

unsigned int LED[24];
int index_LED;
void setup()
{
  encoder.Timer_init();
}
void loop()
{
    if (encoder.rotate_flag ==1)
  {
    if (encoder.direct==1)
    {
      index_LED++;
      if (index_LED>23)
      index_LED=24;
      SenttocircularBar(index_LED);
    }
     else
     {
      index_LED--;
      if(index_LED<0)
      index_LED=0;
      SenttocircularBar(index_LED);
     }
    encoder.rotate_flag =0;
  }
}
void SenttocircularBar(int index)
{
  for (int i=0;i<24;i++)
  {
    if (i<index)
    {
      LED[i]=0xff;
    }
    else
    LED[i]=0;
  }
  circularLED.CircularLEDWrite(LED);
}

```

- **Step 4.** The light will be changed as encoder rotating as below.

![](https://github.com/SeeedDocument/Grove-Encoder/raw/master/img/EncoderAndCircular_LED.gif)

!!!Note
    It is able to generate another signal when it’s being pressed down. However due to the limitation of the number of Grove signal cable, the module is made without output of this signal.

## Resources

- **[Eagle]** [Grove-Encoder Eagle files](https://seeeddoc.github.io/Grove-Encoder/res/Grove-Encoder_eagle_files.zip)
- **[Library]** [TimeOne Library](https://github.com/SeeedDocument/Grove-Encoder/raw/master/res/TimerOne.zip)
- **[Library]** [Encoder Library](https://github.com/SeeedDocument/Grove-Encoder/raw/master/res/Encoder.zip)
- **[Library]** [CircularLED Library](https://github.com/SeeedDocument/Grove-Encoder/raw/master/res/CircularLED.zip)
- **[Demo]** [Demo in Arduino forum](http://www.arduino.cc/playground/Main/RotaryEncoders)


## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>