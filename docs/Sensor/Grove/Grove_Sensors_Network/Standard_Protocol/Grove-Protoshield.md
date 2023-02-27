---
title: Grove - Protoshield.md
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Protoshield.md/
slug: /Grove-Protoshield
last_update:
  date: 01/06/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Proto1.jpg)

This Grove allows you to add your own circuitry or components to your Grove system prototypes. It gives you access to all four lines from the grove connector cable – S0, S1, VCC and GND. There is also a reserved space for a normally-open button. Standard 2.54mm spacing makes it easy to install normal DIP-format ICs and other components onto the board.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Protoshield-p-772.html)

## Features

---

* Standardised Grove Interface
* Breadboard style
* Standard spacings
* Silk screen labels
* Reserved space for normally-open button

## Interface

---
![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Grove-Protoshield_Interface_1.jpg)

VCC and GND of the Grove interface are routed out as two buses as shown above. You can find soldering pads of Sig0 and Sig1 between two power buses.

## Usage

---
VCC and GND of the Grove interface are routed out as two buses as shown above. You can find soldering pads of Sig0 and Sig1 between two power buses. They are marked out by white lines.
The square area on the right is for a ubiquitous temporary button, you can easily snap one into it as shown below.

![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Protoshield1.jpg)

Also the protoshield is shipped with two 20-pin male headers. You can break them into smaller pieces and solder them onto protoshield when you need extension on other breadboard or protoboard. They work well with normal breadboard jumpers.

![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Protoshield2.jpg)

**Demo: Light  LED**

1. Insert the longer pin of LED into the VCC interface and the shorter pin into Sig0 interface.

2. Solder LED on the Protoshield.

![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Proshield3.jpg)

3. Connect the module to the Digital 8 of Grove - Basic Shield using the 4-pin grove cable.

4. Plug the Grove - Basic Shield into Arduino and connect Arduino to PC by using a USB cable.

5. Copy and paste code below to a new Arduino sketch. Please click [here](https://wiki.seeedstudio.com/Upload_Code) if you do not know how to upload.

```
Demo code:
int led = 8;

// the setup routine runs once when you press reset:
void setup() {
    // initialize the digital pin as an output.
    pinMode(led, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop() {
    digitalWrite(led, HIGH);   // turn the LED on (HIGH is the voltage level)
    delay(1000);               // wait for a second
    digitalWrite(led, LOW);    // turn the LED off by making the voltage LOW
    delay(1000);               // wait for a second
}
```

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Protoshield/res/Grove-Protoshield_v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resource

---
* [Grove_-_Protoshield Eagle File](https://files.seeedstudio.com/wiki/Grove-Protoshield/res/Grove-Protoshield_v1.0_Source_File.zip)

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
