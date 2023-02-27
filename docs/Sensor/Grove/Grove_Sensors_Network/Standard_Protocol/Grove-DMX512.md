---
title: Grove - DMX512
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Sensor_communication/
slug: /Grove-DMX512
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-DMX512/img/DMX512_01.jpg)

The Grove – DMX512 is a adapter from Grove interface to DMX512 interface(industry standard EIA-485 interface. The module is based on SN75176 chip which can balance transmission lines and meet ANSI Standard EIA-485 interface. Now it is convenience to control stage lighting and DMX512 console for Arduino.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-DMX512-p-1447.html)

## Feature

---

* Grove Interface and standard EIA-485 interface

* Easy to use

* Strong practicability

## Usage

---
Arduino can easily control DMX512 device by using the Grove - DXM512 module. Take the LED crystal magic ball light as an example. The Specific Operation as follows:

* Connect Grove interface of Grove - DMX512 to D3 port of Grove - Base Shield and plug Grove - Base Shield to Arduino.

* Connect DMX512 interface of Grove - DMX512 to the DMXIN interface of the LED crystal magic ball light using a DMX cable. And power for the LED crystal magic ball light.

* Set the LED crystal magic ball light to DMX512 control mode. The control panel display "A001" at the moment.

![](https://files.seeedstudio.com/wiki/Grove-DMX512/img/DMX512_Usage.jpg)

* Download [File: DmxSimple Library](https://files.seeedstudio.com/wiki/Grove-DMX512/res/DmxSimple.zip) and  Unzip it into the libraries file of Arduino IDE by the path: ..\arduino-1.0.1\libraries.

* Open the code directly by the path:File -&gt; Example -&gt;DmxSimple-&gt;Fadup1.

* You can see a interesting scene. Try to change code for your enjoy.

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-DMX512/res/Grove-DMX512_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

---
* [SN75176 Datasheet](https://files.seeedstudio.com/wiki/Grove-DMX512/res/Sn75176a.pdf)

* [Grove - DMX512 Eagle File](https://files.seeedstudio.com/wiki/Grove-DMX512/res/Grove-DMX512_Eagle_File.zip)

* [DmxSimple Library](https://files.seeedstudio.com/wiki/Grove-DMX512/res/DmxSimple.zip)

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
