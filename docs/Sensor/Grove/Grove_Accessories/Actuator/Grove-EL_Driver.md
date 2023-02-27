---
title: Grove - EL Driver
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-EL_Driver/
slug: /Grove-EL_Driver
last_update:
  date: 01/09/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Grove-EL_Driver/img/Grove-EL_Driver.jpg)

Grove - EL Driver is designed for driving EL Wires. It integrates a very small inverter to drive the EL Wire, so you can easily light up the EL Wire with just one single Grove cable.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-EL-Driver-p-2269.html)

Version Tracker
---------------

| Revision | Descriptions           | Release      |
|----------|------------------------|--------------|
| v1.0     | Initial public release | Dec 11, 2014 |

#### **Supported EL Wires:**

- [EL Wire-Green 3m](https://www.seeedstudio.com/depot/EL-WireGreen-3m-p-1102.html)
- [EL Wire-Red 3m](https://www.seeedstudio.com/depot/EL-WireRed-3m-p-1129.html)
- [EL Wire-Blue 3m](https://www.seeedstudio.com/depot/EL-WireBlue-3m-p-1128.html)
- [EL Wire-Yellow 3m](https://www.seeedstudio.com/depot/EL-WireYellow-3m-p-1127.html)
- [EL Wire-White 3m](https://www.seeedstudio.com/depot/EL-WireWhite-3m-p-1130.html)

Features
--------

- Grove compatible interface
- 3.3V/5V Compatible
- Integrated Inverter Transformer
- Input Current: 300mA Max (According to the load)
- Supported max EL Capacitance: 15nF

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

Usage
-----

### Play with Arduino

Here we show how to use Arduino to control the state of the LED.

1. Connect the Grove - EL Driver to Base Shield's **digital port 2** with 4pin Grove Cable. Of course you can change to other valid digital ports if it's necessary and the definitions of the port should be changed too. Connect a EL Wire to EL Driver **J1** port with the given cable in product package.

2. Plug it onto the Arduino/Seeeduino. Connect the board to PC using USB cable.

3. Copy the demo code to your sketch, then upload to Arudino or Seeeduino board. You will see the EL Wire blink every second.

```
/*************************   2014 Seeedstudio   **************************
* File Name          : GroveELDriverDemoCode.ino
* Author             : Seeedteam
* Version            : V1.0
* Date               : 11/12/2014
* Description        : Demo code for Grove - EL Driver
*************************************************************************/
 
#define ELPin 2 //connect EL Driver to digital pin2
void setup() {                
  // initialize the digital pin2 as an output.
  pinMode(ELPin, OUTPUT);     
}
 
void loop() {
  digitalWrite(ELPin, HIGH);   // set the EL Wire on
  delay(500);               // for 500ms
  digitalWrite(ELPin, LOW);   // set the EL Wire off
  delay(500);
}
```

![](https://files.seeedstudio.com/wiki/Grove-EL_Driver/img/Grove-EL_Driver_usage.jpg)

### Play with Codecraft

#### Hardware

**Step 1.** Connect Grove - EL Driver to port D2 in a Base Shield

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

:::note
    If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).
:::

**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

![](https://files.seeedstudio.com/wiki/Grove-EL_Driver/img/EL_Driver.png)

Upload the program to your Arduino/Seeeduino.

:::tip
    When the code finishes uploaded, you will see the EL blinking.
:::

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/Grove-EL_Driver_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Resources
---------

- [sch_pcb_eagle](https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/Grove-EL_Driver_v1.0.zip)
- [sch_pdf](https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/Grove-EL_Driver_v1.0.pdf)
- [CodeCraft Library](https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/EL%20Driver.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_EL_Driver -->

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
