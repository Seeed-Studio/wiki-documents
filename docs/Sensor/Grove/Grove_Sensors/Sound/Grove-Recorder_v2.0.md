---
description: Grove - Recorder v2.0
title: Grove - Recorder v2.0
keywords:
  - Grove Grove_Sensors Sound
image: https://wiki.seeedstudio.com/Grove-Loudness_Sensor/
slug: /Grove-Recorder_v2.0
last_update:
  date: 01/20/2023
  author: jianjing huang
---


![](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/img/Grove-Recorder_V2.0.jpg)
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Recorder-v2-0-p-4552.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

Grove - Recorder v2.0 is a upgraded recorder with enriched features. It can record 8-20 seconds<sup>\[1\]</sup>audio with high-quality and natural voice. In addition, it also gets sound volume control and playback functions. With MCU such as Seeeduino or Arduino board, you can prototype various applications quickly with user-friendly interfaces.

<sup>[1]</sup>Recording time could be customized(if you require) by replacing different resistor the solution to do this will be described in later sections.

Version Tracker
---------------

| Product revision | Release date | Support status     | Notes |
|------------------|--------------|--------------------|-------|
| V1.0             | Apr 2014     | Supported          |  -    |
| V2.0             | Oct 2015     | Mainstream support | <ol><li>Add speaker volume controller.</li><li>Add NS8002 amplifier to enhance power.</li><li> Add Rec pin Switch for switch Rec pin.</li></ol>|

Features
--------

- Easy-to-use with sound volume control, record, playback functions and grove interfaces.
- Easy to be programmed for plenty of applications with MCU.
- Automatic power down mode, variable recording and playback duration, non-volatile storage.
- Low power consumption.
- Shipped with a speaker (8Ω/2W).

:::tip
More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

Application ideas
-----------------

- Toys.
- Alarm.
- Short-duration-echo required applications.

Specifications
--------------

| Parameter                   | Value                                                                                                         |
|-----------------------------|---------------------------------------------------------------------------------------------------------------|
| Operating voltage           | 3.3~5.0V(DC)                                                                                                  |
| Ripple(at Max power)        | ≤ 50mV                                                                                                        |
| Recording duration(default) | 12 seconds(MAX value)<sup>\[2\]</sup>.                                                                        |
| Playback duration(default)  | 12 seconds(MAX value).                                                                                        |
| Sample rate                 | 53 kHz                                                                                                        |
| Chip                        | ISD1820PY([Datasheet](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/res/ISD_1800_Specifications.pdf)), NS8002(Volume Amplifier) |

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

<sup>[2]</sup>You can replace the resistor shows as following to change recording duration.

![](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/img/Grove-Recorder_V2.0_back_view_600.jpg)

*Red rectangle marked area*

:::note
Playback duration will be same with Recording duration as it changes. Different kinds of resistor will lead different Recording duration as the following table shows.
:::

| ROSC             | Duration | Sampling Frequency | Input Bandwidth |
|------------------|----------|--------------------|-----------------|
| 80 KΩ            | 8 secs   | 8.0 KHz            | 3.4 KHz         |
| 100 KΩ (default) | 10 secs  | 6.4 KHz            | 2.6 KHz         |
| 120 KΩ           | 12 secs  | 5.3 KHz            | 2.3 KHz         |
| 160 KΩ           | 16 secs  | 4.0 KHz            | 1.7 KHz         |
| 200 KΩ           | 20 secs  | 3.2 KHz            | 1.3 KHz         |

Hardware Overview
-----------------

![](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/img/Grove-Recorder_Hardware_View_wiki_s.jpg)

**Grove interface**

Connect main control board such as Seeeduino_v4.2 board with Grove - Recorder.

**Speaker interface**

Connect Grove - Recorder with speaker.

**Rec shaft**

Start recording.

**Volume control interface**

Control volume for speaker.

**MIC**

Microphone for recording.

**IDS 1820PY**

Microcontroller.

**Running indicator**

Light on while you are recording. Light out as you stop recording or recording time exceeds record duration.

**Rec pin Switch**

You can switch Rec pin ON/OFF, so you can disable or enable MCU controlled recording.

**Grove wire**

Connect main control board with driver board.

**Speaker**

### **Parts list**

| Parts name            | Quantity |
|-----------------------|----------|
| Grove - Recorder v2.0 | 1 PC     |
| Grove wire            | 1 PC     |
| Speaker               | 1 PC     |

Get started
-----------

### **Materials required**

- Seeeduino_v4.2 x 1
- Grove - Button x 1
- Grove wire x 1

### **Preparations**

Refer to the following guides to build a appropriate IDE:

:::note
    We have used Seeeduino in this case.
:::

- Getting Started on Windows

- Getting Started on Mac OS X

### **Hardware connections**

![](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/img/Grove-Recorder_Hardware_connection_s.jpg)

- Connect all modules as above figure shows.
  - Grove - Button > **D2**
  - Grove - Recorder > **D7**

### **Software Work**

Test code as below, copy to your Arduino IDE, then click Upload(CTRL+U) to upload code to your Arduino.

```
// demo for Grove - Recorder
 
const int pinButton = 2;
const int pinRec    = 7;
 
 
void setup()
{
    pinMode(pinButton, INPUT);
    pinMode(pinRec, OUTPUT);
}
 
void loop()
{
    if(digitalRead(pinButton))      // button pressed
    {
        digitalWrite(pinRec, HIGH);
        delay(200);
        digitalWrite(pinRec, LOW);
        while(digitalRead(pinButton));  // until button release
    }
 
    delay(10);
}
```

### Test it

- After connection works and software works finished, press shaft Rec to start recording.
- Then press button on Grove - Button to playback.
- You can also adjust volume with Philip screw driver.

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/res/Grove-Recorder_v2.0_Schematic_Eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Resources
---------

- Schematic file in [Eagle](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/res/Grove-Recorder_v2.0_Schematic_Eagle_file.zip) format
- Schematic file in [PDF](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/res/Grove-Recorder_v2.0_Schematic_PDF_file.zip) format

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Recorder_v2.0 -->

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
