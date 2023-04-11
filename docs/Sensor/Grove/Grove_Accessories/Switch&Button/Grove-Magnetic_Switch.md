---
description: Grove - Magnetic Switch
title: Grove - Magnetic Switch
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Magnetic_Switch
last_update:
  date: 2/22/2023
  author: jianjing Huang
---
<!-- ---
name: Grove - Magnetic Switch
category: Sensor
bzurl: https://seeedstudio.com/Grove-Magnetic-Switch-p-744.html
oldwikiname: Grove_-_Magnetic_Switch
prodimagename: Magnetic_Switch.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/101020038 1.jpg
surveyurl: https://www.research.net/r/Grove-Magnetic_Switch
sku: 101020038
tags: grove_digital, io_3v3, io_5v, plat_duino, plat_pi, plat_bbg, plat_wio
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/45d.jpg)

This is a Grove interface compatible Magnetic switch module. It is based on encapsulated dry reed switch CT10. CT10 is single-pole, single throw (SPST) type, having normally open ruthenium contacts. The sensor is a double-ended type and may be actuated with an electromagnet, a permanent magnet or a combination of both. The magnetic switch is a wonderful tool for designers who would like to turn a circuit on and off based on proximity.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)

## Features

- Grove compatible interface
- 2.0cm x 2.0cm Grove module
- Minimum external parts
- 10W rating
- Rugged encapsulation

:::tip
More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

## Application Ideas

- Proximity Sensor
- Security Alarm Sensor
- Level Sensor
- Flow Sensor
- Pulse Counter

## Specifications

<table border="1">
<tr>
<th scope="col">
Items
</th>
<th scope="col">
Min
</th>
<th scope="col">
Norm
</th>
<th scope="col">
Max
</th>
<th scope="col">
Unit
</th>
</tr>
<tr align="center">
<td>
Working Voltage
</td>
<td>
3.3
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<td>
Switched Power
</td>
<td colspan="3">
10
</td>
<td>
W
</td>
</tr>
<tr align="center">
<td>
Switched Voltage AC,RMS value(max)
</td>
<td colspan="3">
&lt; 140
</td>
<td>
V
</td>
</tr>
<tr align="center">
<td>
Switched Current DC
</td>
<td colspan="3">
&lt; 500
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td>
Carry Current DC
</td>
<td colspan="3">
&lt; 0.5
</td>
<td>
A
</td>
</tr>
<tr align="center">
<td>
Contact Resistance
</td>
<td colspan="3">
&lt;200
</td>
<td>
mΩ
</td>
</tr>
<tr align="center">
<td>
Insulation Resistance
</td>
<td colspan="3">
&gt;10<sup>6</sup>
</td>
<td>
MΩ
</td>
</tr>
<tr align="center">
<td>
Operating Temperature
</td>
<td>
-40
</td>
<td>
-
</td>
<td>
125
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<td>
Operate Range
</td>
<td>
10
</td>
<td>
-
</td>
<td>
40
</td>
<td>
AT
</td>
</tr>
</table>

:::tip
More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

:::note
If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

### Play With Arduino

#### Demonstration

The SIG pin of the module output LOW normally. When a magnet approaches the switch, the magnetic switch close and the SIG pin output HIGH.

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Grove - Magnetic Switch |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/45d_small.jpg)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)|

- **Step 2.** Connect Grove - Magnetic Switch to port **D2** of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/with_ardu.jpg)

:::note
If we don't have Grove Base Shield, We also can directly connect Grove-Magnetic-Switch to Seeeduino as below.
:::

| Seeeduino | Grove-Magnetic_Switch |
|------|----------------------------|
| 5V/3.3V   | Red                        |
| GND  | Black                      |
| NC   | White                      |
| D2   | Yellow                     |

#### Software

- **Step 1.** Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).

```c
/*******************************************************************************/

/*macro definitions of magnetic pin and LED pin*/
#define MAGNECTIC_SWITCH 2
#define LED 13//the on board LED of the Arduino or Seeeduino

void setup()
{
    pinsInit();
}

void loop() 
{
    if(isNearMagnet())//if the magnetic switch is near the magnet?
    {
        turnOnLED();
    }
    else
    {
        turnOffLED();
    }
}
void pinsInit()
{
    pinMode(MAGNECTIC_SWITCH, INPUT);
    pinMode(LED,OUTPUT);
}

/*If the magnetic switch is near the magnet, it will return ture, */
/*otherwise it will return false                                */
boolean isNearMagnet()
{
    int sensorValue = digitalRead(MAGNECTIC_SWITCH);
    if(sensorValue == HIGH)//if the sensor value is HIGH?
    {
        return true;//yes,return ture
    }
    else
    {
        return false;//no,return false
    }
}
void turnOnLED()
{
    digitalWrite(LED,HIGH);
}
void turnOffLED()
{
    digitalWrite(LED,LOW);
}
```

- **Step 2.**  Then the LED turns on when there is Magnetic approaches the switch. Have a try!

### Play with Codecraft

#### Hardware

**Step 1.** Connect a Grove - Magnetic Switch to port D2 of a Base Shield.

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

:::note
If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).
:::

**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

![cc](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/cc_Magnetic_Switch.png)

Upload the program to your Arduino/Seeeduino.

:::tipsuccess
When the code finishes uploaded, move the magnet close to the magnetic switch and you will see the LED on the Arduino 13 pin turns on.
:::

### Play With Raspberry Pi

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Raspberry pi | GrovePi_Plus | Grove - Magnetic Switch |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/45d_small.jpg)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)|

- **Step 2.** Plug the GrovePi_Plus into Raspberry.
- **Step 3.** Connect Grove-Magnetic-Switch ranger to **D2** port of GrovePi_Plus.
- **Step 4.** Connect the Raspberry to PC through USB cable.

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/with_rpi.jpg)

#### Software

:::caution
If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::

- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.

- **Step 2.** Navigate to the demos' directory:

```
cd yourpath/GrovePi/Software/Python/
```

- **Step 3.** To see the code (this demo has the same usage with tilt switch)

```
nano grovepi_tilt_switch.py   # "Ctrl+x" to exit #
```

```py
import time
import grovepi

# Connect the Grove Tilt Switch to digital port D2
# SIG,NC,VCC,GND
tilt_switch = 2

grovepi.pinMode(tilt_switch,"INPUT")

while True:
    try:
        print grovepi.digitalRead(tilt_switch)
        time.sleep(.5)

    except IOError:
        print "Error"
```

- **Step 4.** Run the demo.

```
sudo python grovepi_tilt_switch.py
```

- **Step 5.** Result

Put a magnet upon the sensor, the SIG pin will output HIGH.

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/Grovepi_tilt_Switch_00.png)

# Grove-Magnetic Switch v0.9

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Magnetic_Switch.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-Magnetic Switch v1.3

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove-Magnetic_Switch_v1.3_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Eagle]**  [Grove-Magnetic Switch v0.9 Schematic](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Magnetic_Switch.zip)

- **[Eagle]**  [Grove-Magnetic Switch v1.3 Schematic](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove-Magnetic_Switch_v1.3_Eagle_File.zip)

- **[PDF]**  [Grove-Magnetic Switch v1.3 PDF File](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove-Magnetic_Switch_v1.3_PDF_File.pdf)

- **[Datasheet]**  [CT10 Datasheet](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/CT10.pdf)

- **[Codecraft]** [CDC File](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove_Magnetic_Switch_CDC_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Magnetic_Switch -->

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
