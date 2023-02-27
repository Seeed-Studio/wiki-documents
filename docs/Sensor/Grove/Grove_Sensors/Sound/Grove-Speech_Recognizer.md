---
title:  Grove - Speech Recognizer
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Speech_Recognizer/
slug: /Grove-Speech_Recognizer
last_update:
  date: 01/06/2022
  author: gunengyu
---

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/cover.jpg)

Use voice to interact with things around you can always be one of the most interesting things of IoT application, we want to make something more different and cooler. Recently we just launched the voice control solution “Respeaker” on Kickstarter and it becomes the blockbuster. However not everybody needs a Respeaker to build voice control project, sometimes people only need a simple solution, here we would like to introduce the first generation of grove speech recognizer to realize your dream of smart home easily and fast.

Grove speech recognizer is a designed for voice control application such as smart home, smart toy, voice control robot, anything you would like to control through voice, it worth a try. The board includes a Nuvoton ISD9160, a microphone, 1 SPI flash, 1 grove connector,1 speaker connector and 1 led to reflect to your voice.

Nuvoton ISD9160 is (SoC) Chipcorder that based on Cortex™-M0, it provides strong and economic solution for voice control applications. ISD9160 is not the only amazing thing in this grove. Let’s look at the microphone. Remember the uncomfortable moment when you have to speak directly and closely to the voice recognizer device to make sure it can hear you? It won’t happen this time! The microphone on grove-speech recognizer is Omni-directional, which means that whether a user speaks into the microphone from the front, back, left or right side, the microphone will record the signals all with equal gain.

This speech recognizer can recognize 22 pieces of commands including 'start', 'stop', 'Play music' and so on. Every time it recognizes a command, it will return a value and then the loudspeaker that connected to it will repeat the command. This value can be used to control other devices like motor, music player. We have tested it for hours to make sure it possesses a high recognition rate and a very low false trigger.

Here are some notes that you must know before using it:
Awaken Word: Hicell (Please pronounce it as one word)
When it recognizes the awaken word, LED turn red, then you can say the command word, if it recognize the command word, LED will turn blue.

:::note
    The firmware of the module was wrote by the third party vendor, it's not open source.
:::

## Application Ideas

* Internet of Things
* Smart House
* Human Machine Interface
* Lighting Control
* Sensor Hub
* Robot

## Features

* Local Voice Recognition
* Very low rate of false triggering
* Speaker connector(JST2.0, speaker is not include)
* Built-in microphone
* 3.3/5V working voltage
* 22 recognition entry
* Default Baudrate: 9600

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

**Platform Support**

|Arduino|Wio|BeagleBone|Raspberry Pi|LinkIt|
|---------|-----|-----|------|------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/arduino_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/wio_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/bbg_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/raspberry_pi_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/linkit_logo.jpg)|

## Specification

| Item  | Min |Typ | Max | Condition |
|---|-------|-----|--------|-----------|
| Operating Voltage |3V     |3.3V |5V |25 ℃|
|Operating Current  |25mA   |26.5mA |80mA@playing |VCC = 3.3V 25℃|
|Operating Current  | 25mA | 26.5mA |130mA@playing| VCC = 5V 25℃|
|Operating Temperature| 0℃ |25℃ |85℃ | |
|Size | | 40*20mm  | | |
|Weigth | | 5g  | |
|Flash | | 2Mbytes | |
|Microphone Sensitivity |-43dB | -40dB | -37dB | VCC = 5V 25℃ |
|Microphone SNR | 58dB  || | |
|Microphone Directivity | |Omni-directional | | |
|Speaker Power| | |1W |VCC = 5V 25℃|
|Processor core| |Cortex-M0| | |
|Processor Frequency | |32.768MHz|50MHz|VCC = 5V 25℃|

## Hardware Overview

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/hw.png)

1. Grove Connector
2. Red Led - lights when "HIcell" is recognized
3. Blue Led - lights when a command is recognized
4. Speaker Connector - You can connect a speaker to get the voice return
5. Microphone
6. ISD9160CFI - controller

## Command Return

| Command | Value |
|-------------|--------|
|Turn on the light |1|
|Turn off the light |2|
|Play music |3|
|Pause  |4|
|Next  |5|
|Previous  |6|
|Up  |7|
|Down |8|
|Turn on the TV |9|
|Turn off the TV |10|
|Increase temperature |11|
|Decrease temperature |12|
|What’s the time |13|
|Open the door |14|
|Close the door |15|
|Left |16|
|Right  |17|
|Stop  |18|
|Start |19|
|Mode 1 |20|
|Mode 2 |21|
|Go |22|

## Getting Started

Here we will show you how this Grove - Speech Recognizer works via a simple demo. First of all, you need to prepare the below stuffs:

| Seeeduino V4 | Grove - Speech Recognizer | Base Shield |
|--------------|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/stuff1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Light-Sensor%28P%29-p-1253.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|

**Hardware Connection**

Thanks to the benefit of Grove series module, you don't need to make soldering or bread board, what you need to do is connect the modules to the right port of Base Shield. For this demo, we connect Grove - Speech Recognizer to D2.

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/connect.jpeg)

**Software**

Copy the below code and paste to your Arduino IDE, and upload to your Seeeduino V4. After upload the code to an Arduino, let open the Serial monitor.

```
#include <SoftwareSerial.h>

#define SOFTSERIAL_RX_PIN  2
#define SOFTSERIAL_TX_PIN  3

SoftwareSerial softSerial(SOFTSERIAL_RX_PIN,SOFTSERIAL_TX_PIN);

const char *voiceBuffer[] =
{
    "Turn on the light",
    "Turn off the light",
    "Play music",
    "Pause",
    "Next",
    "Previous",
    "Up",
    "Down",
    "Turn on the TV",
    "Turn off the TV",
    "Increase temperature",
    "Decrease temperature",
    "What's the time",
    "Open the door",
    "Close the door",
    "Left",
    "Right",
    "Stop",
    "Start",
    "Mode 1",
    "Mode 2",
    "Go",
};

void setup()
{
    Serial.begin(9600);
    softSerial.begin(9600);
    softSerial.listen();
}

void loop()
{
    char cmd;

    if(softSerial.available())
    {
        cmd = softSerial.read();
        Serial.println(voiceBuffer[cmd - 1]);
    }
}

```

**Awake the module**

The module will wake up when there's command **Hicell**, then the red led will on. Try again when the red led is not on.

:::note
    The red led will last 5 seconds. If the red led turn off before the command was recognized, you should **Hicell** again.
:::

**Command**

After the module is awake, you can speak out the command. Such as

    "Turn on the TV"
If the blue led is light(last about 1s), that means the command was recognized correctly. Take a look at your Serial monitor, the command was printed on it.

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/monitor.png)

### Play with Codecraft

#### Hardware

**Step 1.** Connect a Grove - Speech Recognizer to port D2 of a Base Shield.

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

:::note
    If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).
:::

**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

![cc](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/cc_Speech_Recognizer.PNG)

Upload the program to your Arduino/Seeeduino.

:::success
    When the code finishes uploaded, say Hicell to wake it up, and you can say other command when the red LED goes on.
:::

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

* [Schematics in Eagle](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/eagle.zip)
* [Schematics in PDF](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/Grove%20-%20Speech%20Recognizer%20v1.0.pdf)
* [Codecraft CDC File](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/Grove_Speech_Recognizer_CDC_File.zip)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).

## Upgradable to Industrial Sensors

With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
