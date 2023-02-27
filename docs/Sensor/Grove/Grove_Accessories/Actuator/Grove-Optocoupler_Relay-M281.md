---
title: Grove - Optocoupler Relay (M281)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Optocoupler_Relay-M281/
slug: /Grove-Optocoupler_Relay-M281
last_update:
  date: 01/09/2022
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/preview.png)

This module is a bi-directional SPSD(single-pole, single-throw), normally open solid state relay(SSR). The Grove Optocoupler Relay (M281) offers very low on-resistance, which allowing a high load current rating.

Unlike the other TRIAC SSR in our website, this relay is based on MOSFET, so it can carry both AC load and DC load. If you need to use a SSR with the DC load, this is what you want!

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Optocoupler-Relay-M281-p-2923.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove-Optocoupler Relay (M281) | Initial                                                                                               | Dec 2018      |

## Features

- Low on-resistance(0.5Ω MAX.)
- 1A continuous load current
- 60V load voltage rating
- Low input control current(3mA TYP.)
- High input-to-output isolation(1.5kV MIN.)

## Applications

- Automated Test Equipment
- Meter reading systems
- Medical equipment
- Battery monitoring
- Multiplexers

## Specification

  |Parameter|Value|
  |---|---|
  |Supply voltage|3.3V / 5V|
  |Operating temperature| -40 – 85℃|
  |Storage temperature|- 55°C – 125°C|
  |Blocking voltage|60 V|
  |Continuous load current|1A|
  |Leakage current|0.2 uA(TYP.)<br />1 uA(Max.)|
  |On-Resistance|0.5 Ω(TYP.)<br />0.7 Ω(Max.)|
  |Isolation resistance|100 GΩ|
  |Turn-On time|1.4 ms(TYP.)<br />5 ms(Max.)|
  |Turn-Off time|0.2 ms(TYP.)<br />2 ms(Max.)|
  |Interface|Digital|
  |Size|L: 40mm W: 20mm H: 13mm|
  |Weight|10.6g|
  |Package Size|L: 135mm W: 85mm H: 13mm|
  |Gross Weight|11g|
  <div align="center"><b>Table 1.</b><i>General Specification</i></div>

## Hardware Overview

### Pinout

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/pinout.jpg" /></a></p>
    <figcaption><b>Figure 1</b>. <i>Pinout</i></figcaption>
  </figure>
</div>

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

## Getting Started

### Play With Arduino

#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield | Grove - Optocoupler Relay (M281)|Red LED|
|--------------|-------------|-----------------|-----|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/led.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Optocoupler-Relay-M281-p-2923.html)|[Get ONE Now](https://www.seeedstudio.com/3mm-LED-Red-25-PCs-p-1588.html)|

>In addition, you can consider our new [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), which is equivalent to the combination of Seeeduino V4.2 and Baseshield.

:::note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy

    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.
:::

**Hardware Connection**

- **Step 1.** Plug Grove - Base Shield into Seeeduino.

- **Step 2.** Connect the Grove - Optocoupler Relay (M281) to the **D5** port of the Base Shield.

- **Step 3.** Connect the LED and the Grove - Optocoupler Relay (M281) to the **3.3V** and **GND** pin of the Grove - Base Shield.(Please refer to the figure below)

- **Step 4.** Connect Seeeduino to PC via a USB cable.

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/connect2.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/connect2.png" /></a></p>
    <figcaption><b>Figure 2</b>. <i>Pinout, please make sure connect to the 3.3v pin, 5v will damage this LED.</i></figcaption>
  </figure>
</div>

#### Software

:::note
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.** Copy the following code into a new sketch in the Arduino IDE

```C++
const int Pinout = 5;      

void setup() {
 pinMode(Pinout, OUTPUT);
 Serial.begin(9600);
}

void loop() {

  digitalWrite(Pinout, HIGH); 
  delay(500);
  digitalWrite(Pinout, LOW); 
  delay(500);
}
```

- **Step 2.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

:::tip
  If everything goes well, we will see the LED flashing.
:::

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/res/Grove-Optocoupler%20Relay%20(M281).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[ZIP]** [Grove - Optocoupler Relay (M281) Schematic file](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/res/Grove-Optocoupler%20Relay%20(M281).zip)
- **[PDF]** [M281 Datasheet](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/res/M281_Datasheet.pdf)

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
