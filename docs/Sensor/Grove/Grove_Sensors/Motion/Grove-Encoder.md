---
description: Grove-Encoder
title: Grove-Encoder
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Encoder
last_update:
  date: 1/7/2023
  author: shuxu hu
---
<!-- 
![](https://files.seeedstudio.com/wiki/Grove-Encoder/img/encoder.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/encoder.jpg" alt="pir" width={600} height="auto" /></p>



This module is an incremental rotary encoder. It encodes the rotation signal from the axis and output the signal by electronic pulse. The Grove – Encoder is one of the Grove series and has a standard Grove interface.
When you need to add a rotary knob to your project, for example a volume knob for a speaker, a selection panel or a digital input, this will be your first choice.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Encoder-p-1352.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Encoder-p-1352.html)

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

:::note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::
### Play With Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield|  Grove - Circular LED | Grove - Encoder|
|--------------|-------------|-----------------|----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/Grove%20Circular%20LED._Sjpg.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/Grove%20Encoder.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Circular-LED-p-1353.html)|[Get One Now](https://www.seeedstudio.com/Grove-Encoder-p-1352.html)|

- **Step 2.** Connect Grove-Encoder to port D2 of Grove-Base Shield.
- **Step 3.** Connect Grove-Circular LED to port D5 of Grove-Base Shield.
- **Step 4.** Plug Grove-Base Shield into Seeeduino.
- **Step 5.** Connect Seeeduino to PC via a USB cable.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Encoder/img/ardu_connection.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/ardu_connection.JPG" alt="pir" width={600} height="auto" /></p>

:::note
	If we don't have Grove Base Shield, We also can directly connect Grove-Encoder and Connect Grove-Circular LED to Seeeduino as below.
:::
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

:::note
    If you want to change to other port for Grove-Encoder, please change the digitalRead(2) and digitalRead(3) in Encoder.cpp.
:::
#### Software

- **Step 1.** Download the  [Encoder Library](https://files.seeedstudio.com/wiki/Grove-Encoder/res/Encoder.zip), [CircularLED Library](https://files.seeedstudio.com/wiki/Grove-Encoder/res/CircularLED.zip), [TimerOne Library](https://files.seeedstudio.com/wiki/Grove-Encoder/res/TimerOne.zip) from Github.
- **Step 2.** Refer [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.
- **Step 3.** Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).

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

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Encoder/img/EncoderAndCircular_LED.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/EncoderAndCircular_LED.gif" alt="pir" width={600} height="auto" /></p>

:::note
    It is able to generate another signal when it’s being pressed down. However due to the limitation of the number of Grove signal cable, the module is made without output of this signal.
:::

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://seeeddoc.github.io/Grove-Encoder/res/Grove-Encoder_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Resources

- **[Eagle]** [Grove-Encoder Eagle files](https://seeeddoc.github.io/Grove-Encoder/res/Grove-Encoder_eagle_files.zip)
- **[Library]** [TimeOne Library](https://files.seeedstudio.com/wiki/Grove-Encoder/res/TimerOne.zip)
- **[Library]** [Encoder Library](https://files.seeedstudio.com/wiki/Grove-Encoder/res/Encoder.zip)
- **[Library]** [CircularLED Library](https://files.seeedstudio.com/wiki/Grove-Encoder/res/CircularLED.zip)
- **[Demo]** [Demo in Arduino forum](https://arduino.cc/playground/Main/RotaryEncoders)


## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
