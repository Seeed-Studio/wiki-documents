---
description: Grove Base Cape for BeagleBone® v2
title: Grove Base Cape for BeagleBone® v2
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Base_Cape_for_BeagleBone_v2
last_update:
  date: 1/10/2022
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_product_view_1200.jpg)

**Grove Base Cape for BeagleBone®** v2 is a Grove system expansion board for BeagleBone® platform. This cape makes it convenient to connect many transducers (sensors and actuators) available as Grove modules with BeagleBone® platform. The boards also includes a 256kb Serial EEPROM. It will save a lot effort for you in product development process with soldering-free design and compact plug-and-play ports.

The cape provides 12 easy-to-use Grove connectors to do plug-and-play with the big family of Grove modules. The connectors include 2x UART, 2x ADC, 4x Digital I/O and 4x I2C that interface to the pins on your BeagleBone® board, offering almost everything you need. There are two switches used to reset the I2C address in case of address conflicts. The board also integrates a switch for voltage transition - from a normal 5V to 3.3V and vice versa.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Base-Cape-for-Beaglebone-v2.0-p-2644.html)

## Features

---

* Easier connection between your BeagleBone® and Grove Modules.
* Soldering-free
* Saves your time and money

## Specifications

---
<table>
  <tbody><tr>
      <td> Output voltage </td>
      <td> 3.3 V or 5 V(switchable)
      </td></tr>
    <tr>
      <td>  Maximum output current </td>
      <td> 500 mA at 3.3V, 500 mA at 5V
      </td></tr>
    <tr>
      <td> Digital Grove Ports </td>
      <td> 6 , share same pins with UART1(labeled) and UART4(labeled)
      </td></tr>
    <tr>
      <td> Analog Grove Ports </td>
      <td> 2
      </td></tr>
    <tr>
      <td> I<sup>2</sup>C Grove Ports </td>
      <td> 4
      </td></tr>
    <tr>
      <td> UART Grove Ports </td>
      <td> 2 (UART1, UART4)
      </td></tr>
    <tr>
      <td> EEPROM </td>
      <td> 256kb (Model: CAT24C256WI)
      </td></tr>
    <tr>
      <td> Dimensions </td>
      <td> 70 mm(Length) × 50 mm(width)
      </td></tr></tbody></table>

### Parts list

<table>
  <tbody><tr>
      <th>Parts name </th>
      <th> Quantity
      </th></tr>
    <tr>
      <td>Grove Base Cape for BeagleBone® v2 </td>
      <td> 1 PCS
      </td></tr></tbody></table>

## Hardware overview

---
![](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_hardware_overview_1200.jpg)

**Output voltage switch**, is a switch to control output voltage to Grove ports.

**USER button**, is a button that can be used as BeagleBone® USER button.

**Cape address switch**, is a switch to choose cape address (only useful when multiple capes are attached) to avoid I2C address collision. For details about using more capes, please visit [https://beagleboard.org/Support/bone101/#capes](https://beagleboard.org/Support/bone101/#capes) and [http://elinux.org/BeagleBone_Community#Capes](http://elinux.org/BeagleBone_Community#Capes). You can use this switch to choose address from **00**(binary, pulled down for factory setttings) to **11**(binary, on Grove Base Cape for BeagleBone v2) which correspond to 0x54 to 0x57 for all capes.

**Write protection pin**, is used to disable write protection of EEPROM of a cape if those pins are connected. By default, it is not connected.

**LMV324 operational amplifier**, is a low-voltage rail-to-rail output operational amplifiers to control analog voltage. [Read more](http://www.ti.com/lit/ds/symlink/lmv324.pdf)

**TXB0108PW**, is an 8-bit bidirectional voltage-level translator. [Read more](http://www.electroensaimada.com/uploads/9/0/8/9/9089783/txb0108.pdf).

**Note** you can find two notch(round corner with holes) on one end of Grove Base Cape for BeagleBone® v2.0. This end corresponds to the end with same notch on BeagleBone® Green. You can use this notches to ensure proper orientation.

## Get started

In this section, we will show you a basic example to use this board. You can find more demos at [BeagleBone® Recipes](https://www.seeedstudio.com/recipe/index.php?query=beaglebone) page. Just append Grove Base Cape for BeagleBone® v2 to those projects to make wire connection convenient.

### Suggested reading

* [BeagleBone® Green](/BeagleBone_Green)

* [BeagleBone® community](https://beagleboard.org/)

* [BeagleBone® 101](https://beagleboard.org/support/bone101)

* [BoneScript](https://beagleboard.org/support/bonescript)

### Materials required

* Grove Base Cape for BeagleBone® v2 × 1

* [Grove - Button](https://www.seeedstudio.com/item_detail.html?p_id=766) × 1

* [BeagleBone® Green](https://www.seeedstudio.com/item_detail.html?p_id=2504) (fully compatible with BeagleBone® Black without HDMI output)

* USB cable (type A to type B, for Arduino) × 1 or USB cable (Type-A to micro Type-B, for Seeeduino) × 1

* [Grove cable](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) × 1

### Coding work

1.Connect BeagleBone® Green to Your PC or MAC by USB cable. Click [http://192.168.7.2:3000/ide.html](http://192.168.7.2:3000/ide.html) to Open Cloud9 IDE.

2.Connect Grove - Button(P) to Grove Base Cape for  BeagleBone® v2 with Grove cable. Plug Grove cable to GPIO pin 51.

![](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_wiki_demo_1200.jpg)

3.Copy following code to Cloud9, save it to a **.js** file.

```
var b = require('bonescript');
b.pinMode('P9_16', b.INPUT);//GPIO 51 correspond to P9_16. More details at https://beagleboard.org/Support/bone101/#headers

setInterval(check,1000);

function check(){
    b.digitalRead('P9_16', checkButton);
}

function checkButton(x) {
    console.log(x.value);
    if(x.value == 1){
        console.log("you are pressing Grove button");
    }
    else{
        console.log("you are not pressing Grove button");
    }
}
```

4.Click **Run** in Cloud9 IDE to run the program on BeagleBone® Green.

5.Wait for about 10 seconds to view the output at the bottom of Cloud9 IDE. The output probably looks like the following screen-shot:

![](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_wiki_demo_result_600_s.png)

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/res/Grove_Base_Cape_for_BeagleBone_v2.0_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

---

* [EAGLE Schematic &amp; PCB files and PDF format Schematic](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/res/Grove_Base_Cape_for_BeagleBone_v2.0_Schematics.zip)

* [BeagleBone® Green](/BeagleBone_Green)

* [BeagleBone® community](https://beagleboard.org/)

* [BeagleBone® 101](https://beagleboard.org/support/bone101)

* [BoneScript](https://beagleboard.org/support/bonescript)

* [Cloud9](https://c9.io/)

* [TXB0108PW datasheet](http://www.electroensaimada.com/uploads/9/0/8/9/9089783/txb0108.pdf)

* [LMV324 datasheet](http://www.ti.com/lit/ds/symlink/lmv324.pdf)

* More demos at [https://www.seeedstudio.com/recipe/index.php?query=beaglebone](https://www.seeedstudio.com/recipe/index.php?query=beaglebone) and [https://www.seeedstudio.com/recipe/index.php?query=beaglebone](https://www.seeedstudio.com/recipe/index.php?query=beaglebone)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
